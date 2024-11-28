var ds = Object.defineProperty;
var fs = (e, t, r) => t in e ? ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var yr = (e, t, r) => fs(e, typeof t != "symbol" ? t + "" : t, r);
import * as q from "react";
import Tt, { forwardRef as yo, useContext as Fi, Children as ps, isValidElement as rn, cloneElement as nn, createContext as Ar, useState as Ye, useCallback as dn, useRef as vt, useMemo as kt, useImperativeHandle as hs, useEffect as bo, useLayoutEffect as gs, memo as cr, useId as ms } from "react";
import { flushSync as fn } from "react-dom";
function pn() {
  return pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pn.apply(null, arguments);
}
function Bi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ys = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bs = /* @__PURE__ */ Bi(
  function(e) {
    return ys.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vs = !1;
function ws(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Cs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var xs = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !vs : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Cs(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = ws(o);
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
}(), Ue = "-ms-", hn = "-moz-", de = "-webkit-", zi = "comm", vo = "rule", wo = "decl", Ss = "@import", Li = "@keyframes", Es = "@layer", Rs = Math.abs, wn = String.fromCharCode, Ts = Object.assign;
function ks(e, t) {
  return We(e, 0) ^ 45 ? (((t << 2 ^ We(e, 0)) << 2 ^ We(e, 1)) << 2 ^ We(e, 2)) << 2 ^ We(e, 3) : 0;
}
function Vi(e) {
  return e.trim();
}
function $s(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function fe(e, t, r) {
  return e.replace(t, r);
}
function oo(e, t) {
  return e.indexOf(t);
}
function We(e, t) {
  return e.charCodeAt(t) | 0;
}
function Tr(e, t, r) {
  return e.slice(t, r);
}
function yt(e) {
  return e.length;
}
function Co(e) {
  return e.length;
}
function Qr(e, t) {
  return t.push(e), e;
}
function Os(e, t) {
  return e.map(t).join("");
}
var Cn = 1, ir = 1, Wi = 0, Je = 0, Fe = 0, lr = "";
function xn(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Cn, column: ir, length: a, return: "" };
}
function br(e, t) {
  return Ts(xn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ps() {
  return Fe;
}
function Is() {
  return Fe = Je > 0 ? We(lr, --Je) : 0, ir--, Fe === 10 && (ir = 1, Cn--), Fe;
}
function rt() {
  return Fe = Je < Wi ? We(lr, Je++) : 0, ir++, Fe === 10 && (ir = 1, Cn++), Fe;
}
function wt() {
  return We(lr, Je);
}
function on() {
  return Je;
}
function _r(e, t) {
  return Tr(lr, e, t);
}
function kr(e) {
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
function Ui(e) {
  return Cn = ir = 1, Wi = yt(lr = e), Je = 0, [];
}
function Hi(e) {
  return lr = "", e;
}
function an(e) {
  return Vi(_r(Je - 1, io(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function As(e) {
  for (; (Fe = wt()) && Fe < 33; )
    rt();
  return kr(e) > 2 || kr(Fe) > 3 ? "" : " ";
}
function _s(e, t) {
  for (; --t && rt() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97); )
    ;
  return _r(e, on() + (t < 6 && wt() == 32 && rt() == 32));
}
function io(e) {
  for (; rt(); )
    switch (Fe) {
      case e:
        return Je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && io(Fe);
        break;
      case 40:
        e === 41 && io(e);
        break;
      case 92:
        rt();
        break;
    }
  return Je;
}
function Ds(e, t) {
  for (; rt() && e + Fe !== 57; )
    if (e + Fe === 84 && wt() === 47)
      break;
  return "/*" + _r(t, Je - 1) + "*" + wn(e === 47 ? e : rt());
}
function Ms(e) {
  for (; !kr(wt()); )
    rt();
  return _r(e, Je);
}
function js(e) {
  return Hi(sn("", null, null, null, [""], e = Ui(e), 0, [0], e));
}
function sn(e, t, r, n, o, i, a, c, l) {
  for (var u = 0, g = 0, f = a, h = 0, b = 0, v = 0, m = 1, p = 1, x = 1, T = 0, E = "", w = o, y = i, k = n, S = E; p; )
    switch (v = T, T = rt()) {
      case 40:
        if (v != 108 && We(S, f - 1) == 58) {
          oo(S += fe(an(T), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += an(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += As(v);
        break;
      case 92:
        S += _s(on() - 1, 7);
        continue;
      case 47:
        switch (wt()) {
          case 42:
          case 47:
            Qr(Ns(Ds(rt(), on()), t, r), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        c[u++] = yt(S) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            p = 0;
          case 59 + g:
            x == -1 && (S = fe(S, /\f/g, "")), b > 0 && yt(S) - f && Qr(b > 32 ? Ko(S + ";", n, r, f - 1) : Ko(fe(S, " ", "") + ";", n, r, f - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (Qr(k = Yo(S, t, r, u, g, o, c, E, w = [], y = [], f), i), T === 123)
              if (g === 0)
                sn(S, t, k, k, w, i, f, c, y);
              else
                switch (h === 99 && We(S, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sn(e, k, k, n && Qr(Yo(e, k, k, 0, 0, o, c, E, o, w = [], f), y), o, y, f, c, n ? w : y);
                    break;
                  default:
                    sn(S, k, k, k, [""], y, 0, c, y);
                }
        }
        u = g = b = 0, m = x = 1, E = S = "", f = a;
        break;
      case 58:
        f = 1 + yt(S), b = v;
      default:
        if (m < 1) {
          if (T == 123)
            --m;
          else if (T == 125 && m++ == 0 && Is() == 125)
            continue;
        }
        switch (S += wn(T), T * m) {
          case 38:
            x = g > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            c[u++] = (yt(S) - 1) * x, x = 1;
            break;
          case 64:
            wt() === 45 && (S += an(rt())), h = wt(), g = f = yt(E = S += Ms(on())), T++;
            break;
          case 45:
            v === 45 && yt(S) == 2 && (m = 0);
        }
    }
  return i;
}
function Yo(e, t, r, n, o, i, a, c, l, u, g) {
  for (var f = o - 1, h = o === 0 ? i : [""], b = Co(h), v = 0, m = 0, p = 0; v < n; ++v)
    for (var x = 0, T = Tr(e, f + 1, f = Rs(m = a[v])), E = e; x < b; ++x)
      (E = Vi(m > 0 ? h[x] + " " + T : fe(T, /&\f/g, h[x]))) && (l[p++] = E);
  return xn(e, t, r, o === 0 ? vo : c, l, u, g);
}
function Ns(e, t, r) {
  return xn(e, t, r, zi, wn(Ps()), Tr(e, 2, -2), 0);
}
function Ko(e, t, r, n) {
  return xn(e, t, r, wo, Tr(e, 0, n), Tr(e, n + 1, -1), n);
}
function nr(e, t) {
  for (var r = "", n = Co(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Fs(e, t, r, n) {
  switch (e.type) {
    case Es:
      if (e.children.length) break;
    case Ss:
    case wo:
      return e.return = e.return || e.value;
    case zi:
      return "";
    case Li:
      return e.return = e.value + "{" + nr(e.children, n) + "}";
    case vo:
      e.value = e.props.join(",");
  }
  return yt(r = nr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Bs(e) {
  var t = Co(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function zs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ls = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = wt(), o === 38 && i === 12 && (r[n] = 1), !kr(i); )
    rt();
  return _r(t, Je);
}, Vs = function(t, r) {
  var n = -1, o = 44;
  do
    switch (kr(o)) {
      case 0:
        o === 38 && wt() === 12 && (r[n] = 1), t[n] += Ls(Je - 1, r, n);
        break;
      case 2:
        t[n] += an(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = wt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += wn(o);
    }
  while (o = rt());
  return t;
}, Ws = function(t, r) {
  return Hi(Vs(Ui(t), r));
}, Go = /* @__PURE__ */ new WeakMap(), Us = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Go.get(n)) && !o) {
      Go.set(t, !0);
      for (var i = [], a = Ws(r, i), c = n.props, l = 0, u = 0; l < a.length; l++)
        for (var g = 0; g < c.length; g++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, c[g]) : c[g] + " " + a[l];
    }
  }
}, Hs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Yi(e, t) {
  switch (ks(e, t)) {
    case 5103:
      return de + "print-" + e + e;
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
      return de + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return de + e + hn + e + Ue + e + e;
    case 6828:
    case 4268:
      return de + e + Ue + e + e;
    case 6165:
      return de + e + Ue + "flex-" + e + e;
    case 5187:
      return de + e + fe(e, /(\w+).+(:[^]+)/, de + "box-$1$2" + Ue + "flex-$1$2") + e;
    case 5443:
      return de + e + Ue + "flex-item-" + fe(e, /flex-|-self/, "") + e;
    case 4675:
      return de + e + Ue + "flex-line-pack" + fe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return de + e + Ue + fe(e, "shrink", "negative") + e;
    case 5292:
      return de + e + Ue + fe(e, "basis", "preferred-size") + e;
    case 6060:
      return de + "box-" + fe(e, "-grow", "") + de + e + Ue + fe(e, "grow", "positive") + e;
    case 4554:
      return de + fe(e, /([^-])(transform)/g, "$1" + de + "$2") + e;
    case 6187:
      return fe(fe(fe(e, /(zoom-|grab)/, de + "$1"), /(image-set)/, de + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, de + "$1$`$1");
    case 4968:
      return fe(fe(e, /(.+:)(flex-)?(.*)/, de + "box-pack:$3" + Ue + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + de + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, de + "$1$2") + e;
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
      if (yt(e) - 1 - t > 6) switch (We(e, t + 1)) {
        case 109:
          if (We(e, t + 4) !== 45) break;
        case 102:
          return fe(e, /(.+:)(.+)-([^]+)/, "$1" + de + "$2-$3$1" + hn + (We(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~oo(e, "stretch") ? Yi(fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (We(e, t + 1) !== 115) break;
    case 6444:
      switch (We(e, yt(e) - 3 - (~oo(e, "!important") && 10))) {
        case 107:
          return fe(e, ":", ":" + de) + e;
        case 101:
          return fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + de + (We(e, 14) === 45 ? "inline-" : "") + "box$3$1" + de + "$2$3$1" + Ue + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (We(e, t + 11)) {
        case 114:
          return de + e + Ue + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return de + e + Ue + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return de + e + Ue + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return de + e + Ue + e + e;
  }
  return e;
}
var Ys = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case wo:
      t.return = Yi(t.value, t.length);
      break;
    case Li:
      return nr([br(t, {
        value: fe(t.value, "@", "@" + de)
      })], o);
    case vo:
      if (t.length) return Os(t.props, function(i) {
        switch ($s(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return nr([br(t, {
              props: [fe(i, /:(read-\w+)/, ":" + hn + "$1")]
            })], o);
          case "::placeholder":
            return nr([br(t, {
              props: [fe(i, /:(plac\w+)/, ":" + de + "input-$1")]
            }), br(t, {
              props: [fe(i, /:(plac\w+)/, ":" + hn + "$1")]
            }), br(t, {
              props: [fe(i, /:(plac\w+)/, Ue + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ks = [Ys], Gs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var p = m.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ks, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(m) {
      for (var p = m.getAttribute("data-emotion").split(" "), x = 1; x < p.length; x++)
        i[p[x]] = !0;
      c.push(m);
    }
  );
  var l, u = [Us, Hs];
  {
    var g, f = [Fs, zs(function(m) {
      g.insert(m);
    })], h = Bs(u.concat(o, f)), b = function(p) {
      return nr(js(p), h);
    };
    l = function(p, x, T, E) {
      g = T, b(p ? p + "{" + x.styles + "}" : x.styles), E && (v.inserted[x.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new xs({
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
  return v.sheet.hydrate(c), v;
};
function qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ao = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function Xs() {
  if (qo) return pe;
  qo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
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
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case g:
                case v:
                case b:
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
  return pe.AsyncMode = l, pe.ConcurrentMode = u, pe.ContextConsumer = c, pe.ContextProvider = a, pe.Element = t, pe.ForwardRef = g, pe.Fragment = n, pe.Lazy = v, pe.Memo = b, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = f, pe.isAsyncMode = function(y) {
    return w(y) || E(y) === l;
  }, pe.isConcurrentMode = w, pe.isContextConsumer = function(y) {
    return E(y) === c;
  }, pe.isContextProvider = function(y) {
    return E(y) === a;
  }, pe.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, pe.isForwardRef = function(y) {
    return E(y) === g;
  }, pe.isFragment = function(y) {
    return E(y) === n;
  }, pe.isLazy = function(y) {
    return E(y) === v;
  }, pe.isMemo = function(y) {
    return E(y) === b;
  }, pe.isPortal = function(y) {
    return E(y) === r;
  }, pe.isProfiler = function(y) {
    return E(y) === i;
  }, pe.isStrictMode = function(y) {
    return E(y) === o;
  }, pe.isSuspense = function(y) {
    return E(y) === f;
  }, pe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === i || y === o || y === f || y === h || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === b || y.$$typeof === a || y.$$typeof === c || y.$$typeof === g || y.$$typeof === p || y.$$typeof === x || y.$$typeof === T || y.$$typeof === m);
  }, pe.typeOf = E, pe;
}
var he = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function Js() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function E(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === n || F === u || F === i || F === o || F === f || F === h || typeof F == "object" && F !== null && (F.$$typeof === v || F.$$typeof === b || F.$$typeof === a || F.$$typeof === c || F.$$typeof === g || F.$$typeof === p || F.$$typeof === x || F.$$typeof === T || F.$$typeof === m);
    }
    function w(F) {
      if (typeof F == "object" && F !== null) {
        var Pe = F.$$typeof;
        switch (Pe) {
          case t:
            var U = F.type;
            switch (U) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case f:
                return U;
              default:
                var Me = U && U.$$typeof;
                switch (Me) {
                  case c:
                  case g:
                  case v:
                  case b:
                  case a:
                    return Me;
                  default:
                    return Pe;
                }
            }
          case r:
            return Pe;
        }
      }
    }
    var y = l, k = u, S = c, D = a, N = t, s = g, $ = n, M = v, A = b, K = r, X = i, ie = o, ye = f, Ce = !1;
    function ke(F) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(F) || w(F) === l;
    }
    function I(F) {
      return w(F) === u;
    }
    function B(F) {
      return w(F) === c;
    }
    function re(F) {
      return w(F) === a;
    }
    function ne(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function V(F) {
      return w(F) === g;
    }
    function oe(F) {
      return w(F) === n;
    }
    function G(F) {
      return w(F) === v;
    }
    function j(F) {
      return w(F) === b;
    }
    function W(F) {
      return w(F) === r;
    }
    function Z(F) {
      return w(F) === i;
    }
    function Q(F) {
      return w(F) === o;
    }
    function xe(F) {
      return w(F) === f;
    }
    he.AsyncMode = y, he.ConcurrentMode = k, he.ContextConsumer = S, he.ContextProvider = D, he.Element = N, he.ForwardRef = s, he.Fragment = $, he.Lazy = M, he.Memo = A, he.Portal = K, he.Profiler = X, he.StrictMode = ie, he.Suspense = ye, he.isAsyncMode = ke, he.isConcurrentMode = I, he.isContextConsumer = B, he.isContextProvider = re, he.isElement = ne, he.isForwardRef = V, he.isFragment = oe, he.isLazy = G, he.isMemo = j, he.isPortal = W, he.isProfiler = Z, he.isStrictMode = Q, he.isSuspense = xe, he.isValidElementType = E, he.typeOf = w;
  }()), he;
}
process.env.NODE_ENV === "production" ? ao.exports = Xs() : ao.exports = Js();
var xo = ao.exports, Ki = xo, Qs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Zs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gi = {};
Gi[Ki.ForwardRef] = Qs;
Gi[Ki.Memo] = Zs;
var ec = !0;
function tc(e, t, r) {
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
  ec === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, rc = function(t, r, n) {
  qi(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function nc(e) {
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
var oc = {
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
}, ic = !1, ac = /[A-Z]|^ms/g, sc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Xi = function(t) {
  return t.charCodeAt(1) === 45;
}, Jo = function(t) {
  return t != null && typeof t != "boolean";
}, Yn = /* @__PURE__ */ Bi(function(e) {
  return Xi(e) ? e : e.replace(ac, "-$&").toLowerCase();
}), Qo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(sc, function(n, o, i) {
          return bt = {
            name: o,
            styles: i,
            next: bt
          }, o;
        });
  }
  return oc[t] !== 1 && !Xi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, cc = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function $r(e, t, r) {
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
        return bt = {
          name: o.name,
          styles: o.styles,
          next: bt
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            bt = {
              name: a.name,
              styles: a.styles,
              next: bt
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return lc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = bt, u = r(e);
        return bt = l, $r(e, t, u);
      }
      break;
    }
  }
  var g = r;
  if (t == null)
    return g;
  var f = t[g];
  return f !== void 0 ? f : g;
}
function lc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += $r(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : Jo(c) && (n += Yn(i) + ":" + Qo(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && ic)
          throw new Error(cc);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Jo(a[l]) && (n += Yn(i) + ":" + Qo(i, a[l]) + ";");
        else {
          var u = $r(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Yn(i) + ":" + u + ";";
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
var Zo = /label:\s*([^\s;{]+)\s*(;|$)/g, bt;
function So(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += $r(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += $r(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  Zo.lastIndex = 0;
  for (var u = "", g; (g = Zo.exec(o)) !== null; )
    u += "-" + g[1];
  var f = nc(o) + u;
  return {
    name: f,
    styles: o,
    next: bt
  };
}
var uc = function(t) {
  return t();
}, dc = q.useInsertionEffect ? q.useInsertionEffect : !1, fc = dc || uc, Ji = /* @__PURE__ */ q.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Gs({
    key: "css"
  }) : null
);
Ji.Provider;
var pc = function(t) {
  return /* @__PURE__ */ yo(function(r, n) {
    var o = Fi(Ji);
    return t(r, o, n);
  });
}, hc = /* @__PURE__ */ q.createContext({});
function cn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return So(t);
}
var Eo = function() {
  var t = cn.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, gc = bs, mc = function(t) {
  return t !== "theme";
}, ei = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? gc : mc;
}, ti = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, yc = !1, bc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return qi(r, n, o), fc(function() {
    return rc(r, n, o);
  }), null;
}, vc = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = ti(t, r, n), l = c || ei(o), u = !l("as");
  return function() {
    var g = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), g[0] == null || g[0].raw === void 0)
      f.push.apply(f, g);
    else {
      f.push(g[0][0]);
      for (var h = g.length, b = 1; b < h; b++)
        f.push(g[b], g[0][b]);
    }
    var v = pc(function(m, p, x) {
      var T = u && m.as || o, E = "", w = [], y = m;
      if (m.theme == null) {
        y = {};
        for (var k in m)
          y[k] = m[k];
        y.theme = q.useContext(hc);
      }
      typeof m.className == "string" ? E = tc(p.registered, w, m.className) : m.className != null && (E = m.className + " ");
      var S = So(f.concat(w), p.registered, y);
      E += p.key + "-" + S.name, a !== void 0 && (E += " " + a);
      var D = u && c === void 0 ? ei(T) : l, N = {};
      for (var s in m)
        u && s === "as" || D(s) && (N[s] = m[s]);
      return N.className = E, x && (N.ref = x), /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(bc, {
        cache: p,
        serialized: S,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ q.createElement(T, N));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = f, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
      value: function() {
        return a === void 0 && yc ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), v.withComponent = function(m, p) {
      return e(m, pn({}, r, p, {
        shouldForwardProp: ti(v, p, !0)
      })).apply(void 0, f);
    }, v;
  };
}, wc = [
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
], Dt = vc.bind();
wc.forEach(function(e) {
  Dt[e] = Dt(e);
});
var so = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kn, ri;
function Cc() {
  if (ri) return Kn;
  ri = 1;
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
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
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
  return Kn = o() ? Object.assign : function(i, a) {
    for (var c, l = n(i), u, g = 1; g < arguments.length; g++) {
      c = Object(arguments[g]);
      for (var f in c)
        t.call(c, f) && (l[f] = c[f]);
      if (e) {
        u = e(c);
        for (var h = 0; h < u.length; h++)
          r.call(c, u[h]) && (l[u[h]] = c[u[h]]);
      }
    }
    return l;
  }, Kn;
}
var Gn, ni;
function Ro() {
  if (ni) return Gn;
  ni = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Gn = e, Gn;
}
var qn, oi;
function Qi() {
  return oi || (oi = 1, qn = Function.call.bind(Object.prototype.hasOwnProperty)), qn;
}
var Xn, ii;
function xc() {
  if (ii) return Xn;
  ii = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ro(), r = {}, n = Qi();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in i)
        if (n(i, g)) {
          var f;
          try {
            if (typeof i[g] != "function") {
              var h = Error(
                (l || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = i[g](a, g, l, c, null, t);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + c + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Xn = o, Xn;
}
var Jn, ai;
function Sc() {
  if (ai) return Jn;
  ai = 1;
  var e = xo, t = Cc(), r = Ro(), n = Qi(), o = xc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Jn = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function f(I) {
      var B = I && (u && I[u] || I[g]);
      if (typeof B == "function")
        return B;
    }
    var h = "<<anonymous>>", b = {
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
      node: s(),
      objectOf: D,
      oneOf: S,
      oneOfType: N,
      shape: M,
      exact: A
    };
    function v(I, B) {
      return I === B ? I !== 0 || 1 / I === 1 / B : I !== I && B !== B;
    }
    function m(I, B) {
      this.message = I, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function p(I) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, re = 0;
      function ne(oe, G, j, W, Z, Q, xe) {
        if (W = W || h, Q = Q || j, xe !== r) {
          if (l) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = W + ":" + j;
            !B[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Pe] = !0, re++);
          }
        }
        return G[j] == null ? oe ? G[j] === null ? new m("The " + Z + " `" + Q + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new m("The " + Z + " `" + Q + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : I(G, j, W, Z, Q);
      }
      var V = ne.bind(null, !1);
      return V.isRequired = ne.bind(null, !0), V;
    }
    function x(I) {
      function B(re, ne, V, oe, G, j) {
        var W = re[ne], Z = ie(W);
        if (Z !== I) {
          var Q = ye(W);
          return new m(
            "Invalid " + oe + " `" + G + "` of type " + ("`" + Q + "` supplied to `" + V + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return p(B);
    }
    function T() {
      return p(a);
    }
    function E(I) {
      function B(re, ne, V, oe, G) {
        if (typeof I != "function")
          return new m("Property `" + G + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var j = re[ne];
        if (!Array.isArray(j)) {
          var W = ie(j);
          return new m("Invalid " + oe + " `" + G + "` of type " + ("`" + W + "` supplied to `" + V + "`, expected an array."));
        }
        for (var Z = 0; Z < j.length; Z++) {
          var Q = I(j, Z, V, oe, G + "[" + Z + "]", r);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return p(B);
    }
    function w() {
      function I(B, re, ne, V, oe) {
        var G = B[re];
        if (!c(G)) {
          var j = ie(G);
          return new m("Invalid " + V + " `" + oe + "` of type " + ("`" + j + "` supplied to `" + ne + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(I);
    }
    function y() {
      function I(B, re, ne, V, oe) {
        var G = B[re];
        if (!e.isValidElementType(G)) {
          var j = ie(G);
          return new m("Invalid " + V + " `" + oe + "` of type " + ("`" + j + "` supplied to `" + ne + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(I);
    }
    function k(I) {
      function B(re, ne, V, oe, G) {
        if (!(re[ne] instanceof I)) {
          var j = I.name || h, W = ke(re[ne]);
          return new m("Invalid " + oe + " `" + G + "` of type " + ("`" + W + "` supplied to `" + V + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return p(B);
    }
    function S(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function B(re, ne, V, oe, G) {
        for (var j = re[ne], W = 0; W < I.length; W++)
          if (v(j, I[W]))
            return null;
        var Z = JSON.stringify(I, function(xe, F) {
          var Pe = ye(F);
          return Pe === "symbol" ? String(F) : F;
        });
        return new m("Invalid " + oe + " `" + G + "` of value `" + String(j) + "` " + ("supplied to `" + V + "`, expected one of " + Z + "."));
      }
      return p(B);
    }
    function D(I) {
      function B(re, ne, V, oe, G) {
        if (typeof I != "function")
          return new m("Property `" + G + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var j = re[ne], W = ie(j);
        if (W !== "object")
          return new m("Invalid " + oe + " `" + G + "` of type " + ("`" + W + "` supplied to `" + V + "`, expected an object."));
        for (var Z in j)
          if (n(j, Z)) {
            var Q = I(j, Z, V, oe, G + "." + Z, r);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return p(B);
    }
    function N(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var B = 0; B < I.length; B++) {
        var re = I[B];
        if (typeof re != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ce(re) + " at index " + B + "."
          ), a;
      }
      function ne(V, oe, G, j, W) {
        for (var Z = [], Q = 0; Q < I.length; Q++) {
          var xe = I[Q], F = xe(V, oe, G, j, W, r);
          if (F == null)
            return null;
          F.data && n(F.data, "expectedType") && Z.push(F.data.expectedType);
        }
        var Pe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new m("Invalid " + j + " `" + W + "` supplied to " + ("`" + G + "`" + Pe + "."));
      }
      return p(ne);
    }
    function s() {
      function I(B, re, ne, V, oe) {
        return K(B[re]) ? null : new m("Invalid " + V + " `" + oe + "` supplied to " + ("`" + ne + "`, expected a ReactNode."));
      }
      return p(I);
    }
    function $(I, B, re, ne, V) {
      return new m(
        (I || "React class") + ": " + B + " type `" + re + "." + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function M(I) {
      function B(re, ne, V, oe, G) {
        var j = re[ne], W = ie(j);
        if (W !== "object")
          return new m("Invalid " + oe + " `" + G + "` of type `" + W + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var Z in I) {
          var Q = I[Z];
          if (typeof Q != "function")
            return $(V, oe, G, Z, ye(Q));
          var xe = Q(j, Z, V, oe, G + "." + Z, r);
          if (xe)
            return xe;
        }
        return null;
      }
      return p(B);
    }
    function A(I) {
      function B(re, ne, V, oe, G) {
        var j = re[ne], W = ie(j);
        if (W !== "object")
          return new m("Invalid " + oe + " `" + G + "` of type `" + W + "` " + ("supplied to `" + V + "`, expected `object`."));
        var Z = t({}, re[ne], I);
        for (var Q in Z) {
          var xe = I[Q];
          if (n(I, Q) && typeof xe != "function")
            return $(V, oe, G, Q, ye(xe));
          if (!xe)
            return new m(
              "Invalid " + oe + " `" + G + "` key `" + Q + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(re[ne], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var F = xe(j, Q, V, oe, G + "." + Q, r);
          if (F)
            return F;
        }
        return null;
      }
      return p(B);
    }
    function K(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(K);
          if (I === null || c(I))
            return !0;
          var B = f(I);
          if (B) {
            var re = B.call(I), ne;
            if (B !== I.entries) {
              for (; !(ne = re.next()).done; )
                if (!K(ne.value))
                  return !1;
            } else
              for (; !(ne = re.next()).done; ) {
                var V = ne.value;
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
    function X(I, B) {
      return I === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function ie(I) {
      var B = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : X(B, I) ? "symbol" : B;
    }
    function ye(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var B = ie(I);
      if (B === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function Ce(I) {
      var B = ye(I);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function ke(I) {
      return !I.constructor || !I.constructor.name ? h : I.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Jn;
}
var Qn, si;
function Ec() {
  if (si) return Qn;
  si = 1;
  var e = Ro();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qn = function() {
    function n(a, c, l, u, g, f) {
      if (f !== e) {
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
  }, Qn;
}
if (process.env.NODE_ENV !== "production") {
  var Rc = xo, Tc = !0;
  so.exports = Sc()(Rc.isElement, Tc);
} else
  so.exports = Ec()();
var kc = so.exports;
const C = /* @__PURE__ */ qs(kc);
function Zi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Zi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function De() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Zi(e)) && (n && (n += " "), n += t);
  return n;
}
function gn(e, t) {
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
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              r[o][l] = gn(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Sn(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (a += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (a += " " + r[u]));
    }
    n[o] = a;
  }
  return n;
}
function Mt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function $c(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function To(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), $c(e, t, r);
}
function Oc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return jt(Oc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Mt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Mt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Pc = (e) => {
  const t = jt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, xr = (e, t) => {
  try {
    return Pc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function En(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ea(e) {
  e = jt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, g = (u + r / 30) % 12) => o - i * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), En({
    type: c,
    values: l
  });
}
function co(e) {
  e = jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jt(ea(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ci(e, t) {
  const r = co(e), n = co(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function _t(e, t) {
  return e = jt(e), t = To(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, En(e);
}
function Zr(e, t, r) {
  try {
    return _t(e, t);
  } catch {
    return e;
  }
}
function ko(e, t) {
  if (e = jt(e), t = To(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return En(e);
}
function ve(e, t, r) {
  try {
    return ko(e, t);
  } catch {
    return e;
  }
}
function $o(e, t) {
  if (e = jt(e), t = To(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return En(e);
}
function we(e, t, r) {
  try {
    return $o(e, t);
  } catch {
    return e;
  }
}
function Ic(e, t = 0.15) {
  return co(e) > 0.5 ? ko(e, t) : $o(e, t);
}
function en(e, t, r) {
  try {
    return Ic(e, t);
  } catch {
    return e;
  }
}
function Ac(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ta = (e) => Ac(e) && e !== "classes";
function Te(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Mt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ra(e) {
  if (/* @__PURE__ */ q.isValidElement(e) || !Rt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ra(e[r]);
  }), t;
}
function nt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Rt(e) && Rt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ q.isValidElement(t[o]) ? n[o] = t[o] : Rt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Rt(e[o]) ? n[o] = nt(e[o], t[o], r) : r.clone ? n[o] = Rt(t[o]) ? ra(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Er(e, t) {
  return t ? nt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Nt = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.string, C.object, C.array]) : {};
function _c(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Dc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Mc(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Mt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function jc(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Rn = {
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
}, li = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Rn[e]}px)`
}, Nc = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Rn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function $t(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || li;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || li;
    return Object.keys(t).reduce((a, c) => {
      if (Dc(i.keys, c)) {
        const l = Mc(n.containerQueries ? n : Nc, c);
        l && (a[l] = r(t[c], c));
      } else if (Object.keys(i.values || Rn).includes(c)) {
        const l = i.up(c);
        a[l] = r(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Fc(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Bc(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Tn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function mn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Tn(e, r) || n, t && (o = t(o, n, e)), o;
}
function je(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = Tn(l, n) || {};
    return $t(a, c, (f) => {
      let h = mn(u, o, f);
      return f === h && typeof f == "string" && (h = mn(u, o, `${t}${f === "default" ? "" : Te(f)}`, f)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Nt
  } : {}, i.filterProps = [t], i;
}
function zc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Lc = {
  m: "margin",
  p: "padding"
}, Vc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ui = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Wc = zc((e) => {
  if (e.length > 2)
    if (ui[e])
      e = ui[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Lc[t], o = Vc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), kn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], $n = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Uc = [...kn, ...$n];
function Dr(e, t, r, n) {
  const o = Tn(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Oo(e) {
  return Dr(e, "spacing", 8, "spacing");
}
function Mr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Hc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Mr(t, r), n), {});
}
function Yc(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Wc(r), i = Hc(o, n), a = e[r];
  return $t(e, a, i);
}
function na(e, t) {
  const r = Oo(e.theme);
  return Object.keys(e).map((n) => Yc(e, t, n, r)).reduce(Er, {});
}
function Ae(e) {
  return na(e, kn);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? kn.reduce((e, t) => (e[t] = Nt, e), {}) : {};
Ae.filterProps = kn;
function _e(e) {
  return na(e, $n);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? $n.reduce((e, t) => (e[t] = Nt, e), {}) : {};
_e.filterProps = $n;
process.env.NODE_ENV !== "production" && Uc.reduce((e, t) => (e[t] = Nt, e), {});
function On(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Er(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ct(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ut(e, t) {
  return je({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Kc = ut("border", ct), Gc = ut("borderTop", ct), qc = ut("borderRight", ct), Xc = ut("borderBottom", ct), Jc = ut("borderLeft", ct), Qc = ut("borderColor"), Zc = ut("borderTopColor"), el = ut("borderRightColor"), tl = ut("borderBottomColor"), rl = ut("borderLeftColor"), nl = ut("outline", ct), ol = ut("outlineColor"), Pn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Dr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Mr(t, n)
    });
    return $t(e, e.borderRadius, r);
  }
  return null;
};
Pn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Nt
} : {};
Pn.filterProps = ["borderRadius"];
On(Kc, Gc, qc, Xc, Jc, Qc, Zc, el, tl, rl, Pn, nl, ol);
const In = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Dr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Mr(t, n)
    });
    return $t(e, e.gap, r);
  }
  return null;
};
In.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Nt
} : {};
In.filterProps = ["gap"];
const An = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Dr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Mr(t, n)
    });
    return $t(e, e.columnGap, r);
  }
  return null;
};
An.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Nt
} : {};
An.filterProps = ["columnGap"];
const _n = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Dr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Mr(t, n)
    });
    return $t(e, e.rowGap, r);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Nt
} : {};
_n.filterProps = ["rowGap"];
const il = je({
  prop: "gridColumn"
}), al = je({
  prop: "gridRow"
}), sl = je({
  prop: "gridAutoFlow"
}), cl = je({
  prop: "gridAutoColumns"
}), ll = je({
  prop: "gridAutoRows"
}), ul = je({
  prop: "gridTemplateColumns"
}), dl = je({
  prop: "gridTemplateRows"
}), fl = je({
  prop: "gridTemplateAreas"
}), pl = je({
  prop: "gridArea"
});
On(In, An, _n, il, al, sl, cl, ll, ul, dl, fl, pl);
function or(e, t) {
  return t === "grey" ? t : e;
}
const hl = je({
  prop: "color",
  themeKey: "palette",
  transform: or
}), gl = je({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: or
}), ml = je({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: or
});
On(hl, gl, ml);
function tt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yl = je({
  prop: "width",
  transform: tt
}), Po = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Rn[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: tt(r)
      };
    };
    return $t(e, e.maxWidth, t);
  }
  return null;
};
Po.filterProps = ["maxWidth"];
const bl = je({
  prop: "minWidth",
  transform: tt
}), vl = je({
  prop: "height",
  transform: tt
}), wl = je({
  prop: "maxHeight",
  transform: tt
}), Cl = je({
  prop: "minHeight",
  transform: tt
});
je({
  prop: "size",
  cssProperty: "width",
  transform: tt
});
je({
  prop: "size",
  cssProperty: "height",
  transform: tt
});
const xl = je({
  prop: "boxSizing"
});
On(yl, Po, bl, vl, wl, Cl, xl);
const Dn = {
  // borders
  border: {
    themeKey: "borders",
    transform: ct
  },
  borderTop: {
    themeKey: "borders",
    transform: ct
  },
  borderRight: {
    themeKey: "borders",
    transform: ct
  },
  borderBottom: {
    themeKey: "borders",
    transform: ct
  },
  borderLeft: {
    themeKey: "borders",
    transform: ct
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
    transform: ct
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Pn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: or
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: or
  },
  backgroundColor: {
    themeKey: "palette",
    transform: or
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
    style: In
  },
  rowGap: {
    style: _n
  },
  columnGap: {
    style: An
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
    transform: tt
  },
  maxWidth: {
    style: Po
  },
  minWidth: {
    transform: tt
  },
  height: {
    transform: tt
  },
  maxHeight: {
    transform: tt
  },
  minHeight: {
    transform: tt
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
function Sl(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function El(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rl() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: u,
      transform: g,
      style: f
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Tn(o, u) || {};
    return f ? f(a) : $t(a, n, (v) => {
      let m = mn(h, g, v);
      return v === m && typeof v == "string" && (m = mn(h, g, `${r}${v === "default" ? "" : Te(v)}`, v)), l === !1 ? m : {
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
    const i = o.unstable_sxConfig ?? Dn;
    function a(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const u = Fc(o.breakpoints), g = Object.keys(u);
      let f = u;
      return Object.keys(l).forEach((h) => {
        const b = El(l[h], o);
        if (b != null)
          if (typeof b == "object")
            if (i[h])
              f = Er(f, e(h, b, o, i));
            else {
              const v = $t({
                theme: o
              }, b, (m) => ({
                [h]: m
              }));
              Sl(v, b) ? f[h] = t({
                sx: b,
                theme: o
              }) : f = Er(f, v);
            }
          else
            f = Er(f, e(h, b, o, i));
      }), _c(o, Bc(g, f));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const ar = Rl();
ar.filterProps = ["sx"];
var lo = { exports: {} }, vr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var di;
function Tl() {
  if (di) return vr;
  di = 1;
  var e = Tt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, u) {
    var g, f = {}, h = null, b = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (g in l) n.call(l, g) && !i.hasOwnProperty(g) && (f[g] = l[g]);
    if (c && c.defaultProps) for (g in l = c.defaultProps, l) f[g] === void 0 && (f[g] = l[g]);
    return { $$typeof: t, type: c, key: h, ref: b, props: f, _owner: o.current };
  }
  return vr.Fragment = r, vr.jsx = a, vr.jsxs = a, vr;
}
var wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fi;
function kl() {
  return fi || (fi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Tt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function p(d) {
      if (d === null || typeof d != "object")
        return null;
      var O = v && d[v] || d[m];
      return typeof O == "function" ? O : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(d) {
      {
        for (var O = arguments.length, z = new Array(O > 1 ? O - 1 : 0), te = 1; te < O; te++)
          z[te - 1] = arguments[te];
        E("error", d, z);
      }
    }
    function E(d, O, z) {
      {
        var te = x.ReactDebugCurrentFrame, le = te.getStackAddendum();
        le !== "" && (O += "%s", z = z.concat([le]));
        var ue = z.map(function(se) {
          return String(se);
        });
        ue.unshift("Warning: " + O), Function.prototype.apply.call(console[d], console, ue);
      }
    }
    var w = !1, y = !1, k = !1, S = !1, D = !1, N;
    N = Symbol.for("react.module.reference");
    function s(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || D || d === o || d === u || d === g || S || d === b || w || y || k || typeof d == "object" && d !== null && (d.$$typeof === h || d.$$typeof === f || d.$$typeof === a || d.$$typeof === c || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === N || d.getModuleId !== void 0));
    }
    function $(d, O, z) {
      var te = d.displayName;
      if (te)
        return te;
      var le = O.displayName || O.name || "";
      return le !== "" ? z + "(" + le + ")" : z;
    }
    function M(d) {
      return d.displayName || "Context";
    }
    function A(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
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
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            var O = d;
            return M(O) + ".Consumer";
          case a:
            var z = d;
            return M(z._context) + ".Provider";
          case l:
            return $(d, d.render, "ForwardRef");
          case f:
            var te = d.displayName || null;
            return te !== null ? te : A(d.type) || "Memo";
          case h: {
            var le = d, ue = le._payload, se = le._init;
            try {
              return A(se(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, X = 0, ie, ye, Ce, ke, I, B, re;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function V() {
      {
        if (X === 0) {
          ie = console.log, ye = console.info, Ce = console.warn, ke = console.error, I = console.group, B = console.groupCollapsed, re = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        X++;
      }
    }
    function oe() {
      {
        if (X--, X === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, d, {
              value: ie
            }),
            info: K({}, d, {
              value: ye
            }),
            warn: K({}, d, {
              value: Ce
            }),
            error: K({}, d, {
              value: ke
            }),
            group: K({}, d, {
              value: I
            }),
            groupCollapsed: K({}, d, {
              value: B
            }),
            groupEnd: K({}, d, {
              value: re
            })
          });
        }
        X < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = x.ReactCurrentDispatcher, j;
    function W(d, O, z) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (le) {
            var te = le.stack.trim().match(/\n( *(at )?)/);
            j = te && te[1] || "";
          }
        return `
` + j + d;
      }
    }
    var Z = !1, Q;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new xe();
    }
    function F(d, O) {
      if (!d || Z)
        return "";
      {
        var z = Q.get(d);
        if (z !== void 0)
          return z;
      }
      var te;
      Z = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = G.current, G.current = null, V();
      try {
        if (O) {
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
            } catch (Ne) {
              te = Ne;
            }
            Reflect.construct(d, [], se);
          } else {
            try {
              se.call();
            } catch (Ne) {
              te = Ne;
            }
            d.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            te = Ne;
          }
          d();
        }
      } catch (Ne) {
        if (Ne && te && typeof Ne.stack == "string") {
          for (var ae = Ne.stack.split(`
`), Ve = te.stack.split(`
`), Se = ae.length - 1, $e = Ve.length - 1; Se >= 1 && $e >= 0 && ae[Se] !== Ve[$e]; )
            $e--;
          for (; Se >= 1 && $e >= 0; Se--, $e--)
            if (ae[Se] !== Ve[$e]) {
              if (Se !== 1 || $e !== 1)
                do
                  if (Se--, $e--, $e < 0 || ae[Se] !== Ve[$e]) {
                    var qe = `
` + ae[Se].replace(" at new ", " at ");
                    return d.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", d.displayName)), typeof d == "function" && Q.set(d, qe), qe;
                  }
                while (Se >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = ue, oe(), Error.prepareStackTrace = le;
      }
      var It = d ? d.displayName || d.name : "", Qe = It ? W(It) : "";
      return typeof d == "function" && Q.set(d, Qe), Qe;
    }
    function Pe(d, O, z) {
      return F(d, !1);
    }
    function U(d) {
      var O = d.prototype;
      return !!(O && O.isReactComponent);
    }
    function Me(d, O, z) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return F(d, U(d));
      if (typeof d == "string")
        return W(d);
      switch (d) {
        case u:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return Pe(d.render);
          case f:
            return Me(d.type, O, z);
          case h: {
            var te = d, le = te._payload, ue = te._init;
            try {
              return Me(ue(le), O, z);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, ot = {}, Ke = x.ReactDebugCurrentFrame;
    function Le(d) {
      if (d) {
        var O = d._owner, z = Me(d.type, d._source, O ? O.type : null);
        Ke.setExtraStackFrame(z);
      } else
        Ke.setExtraStackFrame(null);
    }
    function Bt(d, O, z, te, le) {
      {
        var ue = Function.call.bind(ze);
        for (var se in d)
          if (ue(d, se)) {
            var ae = void 0;
            try {
              if (typeof d[se] != "function") {
                var Ve = Error((te || "React class") + ": " + z + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ve.name = "Invariant Violation", Ve;
              }
              ae = d[se](O, se, te, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              ae = Se;
            }
            ae && !(ae instanceof Error) && (Le(le), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", z, se, typeof ae), Le(null)), ae instanceof Error && !(ae.message in ot) && (ot[ae.message] = !0, Le(le), T("Failed %s type: %s", z, ae.message), Le(null));
          }
      }
    }
    var pt = Array.isArray;
    function it(d) {
      return pt(d);
    }
    function ee(d) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, z = O && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return z;
      }
    }
    function zt(d) {
      try {
        return Lt(d), !1;
      } catch {
        return !0;
      }
    }
    function Lt(d) {
      return "" + d;
    }
    function Vt(d) {
      if (zt(d))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ee(d)), Lt(d);
    }
    var at = x.ReactCurrentOwner, Nn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dt, dr, Yt;
    Yt = {};
    function Ot(d) {
      if (ze.call(d, "ref")) {
        var O = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Br(d) {
      if (ze.call(d, "key")) {
        var O = Object.getOwnPropertyDescriptor(d, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function zr(d, O) {
      if (typeof d.ref == "string" && at.current && O && at.current.stateNode !== O) {
        var z = A(at.current.type);
        Yt[z] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(at.current.type), d.ref), Yt[z] = !0);
      }
    }
    function Fn(d, O) {
      {
        var z = function() {
          dt || (dt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        z.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Be(d, O) {
      {
        var z = function() {
          dr || (dr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        z.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var Lr = function(d, O, z, te, le, ue, se) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: O,
        ref: z,
        props: se,
        // Record the component responsible for creating this element.
        _owner: ue
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
        value: te
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function Ge(d, O, z, te, le) {
      {
        var ue, se = {}, ae = null, Ve = null;
        z !== void 0 && (Vt(z), ae = "" + z), Br(O) && (Vt(O.key), ae = "" + O.key), Ot(O) && (Ve = O.ref, zr(O, le));
        for (ue in O)
          ze.call(O, ue) && !Nn.hasOwnProperty(ue) && (se[ue] = O[ue]);
        if (d && d.defaultProps) {
          var Se = d.defaultProps;
          for (ue in Se)
            se[ue] === void 0 && (se[ue] = Se[ue]);
        }
        if (ae || Ve) {
          var $e = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          ae && Fn(se, $e), Ve && Be(se, $e);
        }
        return Lr(d, ae, Ve, le, te, at.current, se);
      }
    }
    var ft = x.ReactCurrentOwner, Vr = x.ReactDebugCurrentFrame;
    function Ct(d) {
      if (d) {
        var O = d._owner, z = Me(d.type, d._source, O ? O.type : null);
        Vr.setExtraStackFrame(z);
      } else
        Vr.setExtraStackFrame(null);
    }
    var fr;
    fr = !1;
    function pr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Wr() {
      {
        if (ft.current) {
          var d = A(ft.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Wt(d) {
      return "";
    }
    var xt = {};
    function Ur(d) {
      {
        var O = Wr();
        if (!O) {
          var z = typeof d == "string" ? d : d.displayName || d.name;
          z && (O = `

Check the top-level render call using <` + z + ">.");
        }
        return O;
      }
    }
    function St(d, O) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var z = Ur(O);
        if (xt[z])
          return;
        xt[z] = !0;
        var te = "";
        d && d._owner && d._owner !== ft.current && (te = " It was passed a child from " + A(d._owner.type) + "."), Ct(d), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, te), Ct(null);
      }
    }
    function Kt(d, O) {
      {
        if (typeof d != "object")
          return;
        if (it(d))
          for (var z = 0; z < d.length; z++) {
            var te = d[z];
            pr(te) && St(te, O);
          }
        else if (pr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var le = p(d);
          if (typeof le == "function" && le !== d.entries)
            for (var ue = le.call(d), se; !(se = ue.next()).done; )
              pr(se.value) && St(se.value, O);
        }
      }
    }
    function He(d) {
      {
        var O = d.type;
        if (O == null || typeof O == "string")
          return;
        var z;
        if (typeof O == "function")
          z = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === f))
          z = O.propTypes;
        else
          return;
        if (z) {
          var te = A(O);
          Bt(z, d.props, "prop", te, d);
        } else if (O.PropTypes !== void 0 && !fr) {
          fr = !0;
          var le = A(O);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gt(d) {
      {
        for (var O = Object.keys(d.props), z = 0; z < O.length; z++) {
          var te = O[z];
          if (te !== "children" && te !== "key") {
            Ct(d), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Ct(null);
            break;
          }
        }
        d.ref !== null && (Ct(d), T("Invalid attribute `ref` supplied to `React.Fragment`."), Ct(null));
      }
    }
    var ht = {};
    function H(d, O, z, te, le, ue) {
      {
        var se = s(d);
        if (!se) {
          var ae = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = Wt();
          Ve ? ae += Ve : ae += Wr();
          var Se;
          d === null ? Se = "null" : it(d) ? Se = "array" : d !== void 0 && d.$$typeof === t ? (Se = "<" + (A(d.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof d, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, ae);
        }
        var $e = Ge(d, O, z, le, ue);
        if ($e == null)
          return $e;
        if (se) {
          var qe = O.children;
          if (qe !== void 0)
            if (te)
              if (it(qe)) {
                for (var It = 0; It < qe.length; It++)
                  Kt(qe[It], d);
                Object.freeze && Object.freeze(qe);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kt(qe, d);
        }
        if (ze.call(O, "key")) {
          var Qe = A(d), Ne = Object.keys(O).filter(function(Kr) {
            return Kr !== "key";
          }), Ut = Ne.length > 0 ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ht[Qe + Ut]) {
            var Bn = Ne.length > 0 ? "{" + Ne.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ut, Qe, Bn, Qe), ht[Qe + Ut] = !0;
          }
        }
        return d === n ? Gt($e) : He($e), $e;
      }
    }
    function Pt(d, O, z) {
      return H(d, O, z, !0);
    }
    function hr(d, O, z) {
      return H(d, O, z, !1);
    }
    var Hr = hr, Yr = Pt;
    wr.Fragment = n, wr.jsx = Hr, wr.jsxs = Yr;
  }()), wr;
}
process.env.NODE_ENV === "production" ? lo.exports = Tl() : lo.exports = kl();
var L = lo.exports;
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function $l(e, t) {
  const r = Dt(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ol(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const pi = [];
function hi(e) {
  return pi[0] = e, So(pi);
}
const Pl = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Il(e) {
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
  } = e, i = Pl(t), a = Object.keys(i);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function u(h, b) {
    const v = a.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : b) - n / 100}${r})`;
  }
  function g(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : c(h);
  }
  function f(h) {
    const b = a.indexOf(h);
    return b === 0 ? c(a[1]) : b === a.length - 1 ? l(a[b]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: l,
    between: u,
    only: g,
    not: f,
    unit: r,
    ...o
  };
}
const Al = {
  borderRadius: 4
};
function oa(e = 8, t = Oo({
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
function _l(e, t) {
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
function ia(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = Il(r), l = oa(o);
  let u = nt({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Al,
      ...i
    }
  }, a);
  return u = jc(u), u.applyStyles = _l, u = t.reduce((g, f) => nt(g, f), u), u.unstable_sxConfig = {
    ...Dn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return ar({
      sx: f,
      theme: this
    });
  }, u;
}
const gi = (e) => e, Dl = () => {
  let e = gi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = gi;
    }
  };
}, Ml = Dl(), jl = {
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
function ur(e, t, r = "Mui") {
  const n = jl[t];
  return n ? `${r}-${n}` : `${Ml.generate(e)}-${t}`;
}
function jr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = ur(e, o, r);
  }), n;
}
var uo = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mi;
function Nl() {
  if (mi) return ge;
  mi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
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
                case c:
                case a:
                case l:
                case h:
                case f:
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
  return ge.ContextConsumer = a, ge.ContextProvider = i, ge.Element = e, ge.ForwardRef = l, ge.Fragment = r, ge.Lazy = h, ge.Memo = f, ge.Portal = t, ge.Profiler = o, ge.StrictMode = n, ge.Suspense = u, ge.SuspenseList = g, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(p) {
    return m(p) === a;
  }, ge.isContextProvider = function(p) {
    return m(p) === i;
  }, ge.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ge.isForwardRef = function(p) {
    return m(p) === l;
  }, ge.isFragment = function(p) {
    return m(p) === r;
  }, ge.isLazy = function(p) {
    return m(p) === h;
  }, ge.isMemo = function(p) {
    return m(p) === f;
  }, ge.isPortal = function(p) {
    return m(p) === t;
  }, ge.isProfiler = function(p) {
    return m(p) === o;
  }, ge.isStrictMode = function(p) {
    return m(p) === n;
  }, ge.isSuspense = function(p) {
    return m(p) === u;
  }, ge.isSuspenseList = function(p) {
    return m(p) === g;
  }, ge.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === u || p === g || p === b || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === f || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || p.$$typeof === v || p.getModuleId !== void 0);
  }, ge.typeOf = m, ge;
}
var me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function Fl() {
  return yi || (yi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = !1, m = !1, p = !1, x = !1, T = !1, E;
    E = Symbol.for("react.module.reference");
    function w(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === r || U === o || T || U === n || U === u || U === g || x || U === b || v || m || p || typeof U == "object" && U !== null && (U.$$typeof === h || U.$$typeof === f || U.$$typeof === i || U.$$typeof === a || U.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === E || U.getModuleId !== void 0));
    }
    function y(U) {
      if (typeof U == "object" && U !== null) {
        var Me = U.$$typeof;
        switch (Me) {
          case e:
            var ze = U.type;
            switch (ze) {
              case r:
              case o:
              case n:
              case u:
              case g:
                return ze;
              default:
                var ot = ze && ze.$$typeof;
                switch (ot) {
                  case c:
                  case a:
                  case l:
                  case h:
                  case f:
                  case i:
                    return ot;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var k = a, S = i, D = e, N = l, s = r, $ = h, M = f, A = t, K = o, X = n, ie = u, ye = g, Ce = !1, ke = !1;
    function I(U) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(U) {
      return ke || (ke = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(U) {
      return y(U) === a;
    }
    function ne(U) {
      return y(U) === i;
    }
    function V(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function oe(U) {
      return y(U) === l;
    }
    function G(U) {
      return y(U) === r;
    }
    function j(U) {
      return y(U) === h;
    }
    function W(U) {
      return y(U) === f;
    }
    function Z(U) {
      return y(U) === t;
    }
    function Q(U) {
      return y(U) === o;
    }
    function xe(U) {
      return y(U) === n;
    }
    function F(U) {
      return y(U) === u;
    }
    function Pe(U) {
      return y(U) === g;
    }
    me.ContextConsumer = k, me.ContextProvider = S, me.Element = D, me.ForwardRef = N, me.Fragment = s, me.Lazy = $, me.Memo = M, me.Portal = A, me.Profiler = K, me.StrictMode = X, me.Suspense = ie, me.SuspenseList = ye, me.isAsyncMode = I, me.isConcurrentMode = B, me.isContextConsumer = re, me.isContextProvider = ne, me.isElement = V, me.isForwardRef = oe, me.isFragment = G, me.isLazy = j, me.isMemo = W, me.isPortal = Z, me.isProfiler = Q, me.isStrictMode = xe, me.isSuspense = F, me.isSuspenseList = Pe, me.isValidElementType = w, me.typeOf = y;
  }()), me;
}
process.env.NODE_ENV === "production" ? uo.exports = Nl() : uo.exports = Fl();
var bi = uo.exports;
function aa(e, t = "") {
  return e.displayName || e.name || t;
}
function vi(e, t, r) {
  const n = aa(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Bl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return aa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case bi.ForwardRef:
          return vi(e, e.render, "ForwardRef");
        case bi.Memo:
          return vi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function sa(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: hi(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = hi(o.style));
  }), n;
}
const zl = ia();
function Zn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ll(e) {
  return e ? (t, r) => r[e] : null;
}
function Vl(e, t, r) {
  e.theme = Yl(e.theme) ? r : e.theme[t] || e.theme;
}
function ln(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => ln(e, n));
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
    return ca(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function ca(e, t, r = []) {
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
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function Wl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = zl,
    rootShouldForwardProp: n = Zn,
    slotShouldForwardProp: o = Zn
  } = e;
  function i(c) {
    Vl(c, t, r);
  }
  return (c, l = {}) => {
    Ol(c, (y) => y.filter((k) => k !== ar));
    const {
      name: u,
      slot: g,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = Ll(la(g)),
      ...v
    } = l, m = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      g && g !== "Root" && g !== "root" || !1
    ), p = h || !1;
    let x = Zn;
    g === "Root" || g === "root" ? x = n : g ? x = o : Kl(c) && (x = void 0);
    const T = $l(c, {
      shouldForwardProp: x,
      label: Hl(u, g),
      ...v
    }), E = (y) => {
      if (typeof y == "function" && y.__emotion_real !== y)
        return function(S) {
          return ln(S, y);
        };
      if (Rt(y)) {
        const k = sa(y);
        return k.variants ? function(D) {
          return ln(D, k);
        } : k.style;
      }
      return y;
    }, w = (...y) => {
      const k = [], S = y.map(E), D = [];
      if (k.push(i), u && b && D.push(function(M) {
        var ie, ye;
        const K = (ye = (ie = M.theme.components) == null ? void 0 : ie[u]) == null ? void 0 : ye.styleOverrides;
        if (!K)
          return null;
        const X = {};
        for (const Ce in K)
          X[Ce] = ln(M, K[Ce]);
        return b(M, X);
      }), u && !m && D.push(function(M) {
        var X, ie;
        const A = M.theme, K = (ie = (X = A == null ? void 0 : A.components) == null ? void 0 : X[u]) == null ? void 0 : ie.variants;
        return K ? ca(M, K) : null;
      }), p || D.push(ar), Array.isArray(S[0])) {
        const $ = S.shift(), M = new Array(k.length).fill(""), A = new Array(D.length).fill("");
        let K;
        K = [...M, ...$, ...A], K.raw = [...M, ...$.raw, ...A], k.unshift(K);
      }
      const N = [...k, ...S, ...D], s = T(...N);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = Ul(u, g, c)), s;
    };
    return T.withConfig && (w.withConfig = T.withConfig), w;
  };
}
function Ul(e, t, r) {
  return e ? `${e}${Te(t || "")}` : `Styled(${Bl(r)})`;
}
function Hl(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${la(t || "Root")}`), r;
}
function Yl(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Kl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function la(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Gl = typeof window < "u" ? q.useLayoutEffect : q.useEffect;
function ua(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function ql(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Xl(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !ql(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Jl = ua(C.elementType, Xl), Ql = C.oneOfType([C.func, C.object]);
function Zl(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function tn(e) {
  const t = q.useRef(e);
  return Gl(() => {
    t.current = e;
  }), q.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function wi(...e) {
  return q.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Zl(r, t);
    });
  }, e);
}
const Ci = {};
function da(e, t) {
  const r = q.useRef(Ci);
  return r.current === Ci && (r.current = e(t)), r;
}
const eu = [];
function tu(e) {
  q.useEffect(e, eu);
}
class Io {
  constructor() {
    yr(this, "currentId", null);
    yr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    yr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Io();
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
function ru() {
  const e = da(Io.create).current;
  return tu(e.disposeEffect), e;
}
function xi(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const nu = /* @__PURE__ */ q.createContext(void 0);
process.env.NODE_ENV !== "production" && (C.node, C.object);
function ou(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? gn(o.defaultProps, n) : !o.styleOverrides && !o.variants ? gn(o, n) : n;
}
function iu({
  props: e,
  name: t
}) {
  const r = q.useContext(nu);
  return ou({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Si = {
  theme: void 0
};
function au(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Si.theme = o.theme, i = sa(e(Si)), t = i, r = o.theme), i;
  };
}
function su(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ei = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, cu = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...a, c] : a) : t([...i, c], l, a));
    });
  }
  n(e);
}, lu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function eo(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return cu(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const g = `--${r ? `${r}-` : ""}${c.join("-")}`, f = lu(c, l);
        Object.assign(o, {
          [g]: f
        }), Ei(i, c, `var(${g})`, u), Ei(a, c, `var(${g}, ${f})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function uu(e, t = {}) {
  const {
    getSelector: r = p,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: u,
    css: g,
    varsWithDefaults: f
  } = eo(l, t);
  let h = f;
  const b = {}, {
    [c]: v,
    ...m
  } = i;
  if (Object.entries(m || {}).forEach(([E, w]) => {
    const {
      vars: y,
      css: k,
      varsWithDefaults: S
    } = eo(w, t);
    h = nt(h, S), b[E] = {
      css: k,
      vars: y
    };
  }), v) {
    const {
      css: E,
      vars: w,
      varsWithDefaults: y
    } = eo(v, t);
    h = nt(h, y), b[c] = {
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
      return Object.entries(b).forEach(([, {
        vars: w
      }]) => {
        E = nt(E, w);
      }), E;
    },
    generateStyleSheets: () => {
      var D, N;
      const E = [], w = e.defaultColorScheme || "light";
      function y(s, $) {
        Object.keys($).length && E.push(typeof s == "string" ? {
          [s]: {
            ...$
          }
        } : s);
      }
      y(r(void 0, {
        ...g
      }), g);
      const {
        [w]: k,
        ...S
      } = b;
      if (k) {
        const {
          css: s
        } = k, $ = (N = (D = i[w]) == null ? void 0 : D.palette) == null ? void 0 : N.mode, M = !n && $ ? {
          colorScheme: $,
          ...s
        } : {
          ...s
        };
        y(r(w, {
          ...M
        }), M);
      }
      return Object.entries(S).forEach(([s, {
        css: $
      }]) => {
        var K, X;
        const M = (X = (K = i[s]) == null ? void 0 : K.palette) == null ? void 0 : X.mode, A = !n && M ? {
          colorScheme: M,
          ...$
        } : {
          ...$
        };
        y(r(s, {
          ...A
        }), A);
      }), E;
    }
  };
}
function du(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Or = {
  black: "#000",
  white: "#fff"
}, fu = {
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
}, Jt = {
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
}, Qt = {
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
}, Cr = {
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
}, Zt = {
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
}, er = {
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
}, tr = {
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
function fa() {
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
      paper: Or.white,
      default: Or.white
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
const pu = fa();
function pa() {
  return {
    text: {
      primary: Or.white,
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
      active: Or.white,
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
const Ri = pa();
function Ti(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = $o(e.main, o) : t === "dark" && (e.dark = ko(e.main, i)));
}
function hu(e = "light") {
  return e === "dark" ? {
    main: Zt[200],
    light: Zt[50],
    dark: Zt[400]
  } : {
    main: Zt[700],
    light: Zt[400],
    dark: Zt[800]
  };
}
function gu(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[500],
    light: Jt[300],
    dark: Jt[700]
  };
}
function mu(e = "light") {
  return e === "dark" ? {
    main: Qt[500],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[700],
    light: Qt[400],
    dark: Qt[800]
  };
}
function yu(e = "light") {
  return e === "dark" ? {
    main: er[400],
    light: er[300],
    dark: er[700]
  } : {
    main: er[700],
    light: er[500],
    dark: er[900]
  };
}
function bu(e = "light") {
  return e === "dark" ? {
    main: tr[400],
    light: tr[300],
    dark: tr[700]
  } : {
    main: tr[800],
    light: tr[500],
    dark: tr[900]
  };
}
function vu(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Cr[500],
    dark: Cr[900]
  };
}
function Ao(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || hu(t), a = e.secondary || gu(t), c = e.error || mu(t), l = e.info || yu(t), u = e.success || bu(t), g = e.warning || vu(t);
  function f(m) {
    const p = ci(m, Ri.text.primary) >= r ? Ri.text.primary : pu.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = ci(m, p);
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
The color object needs to have a \`main\` property or a \`${x}\` property.` : Mt(11, p ? ` (${p})` : "", x));
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
} });` : Mt(12, p ? ` (${p})` : "", JSON.stringify(m.main)));
    return Ti(m, "light", T, n), Ti(m, "dark", E, n), m.contrastText || (m.contrastText = f(m.main)), m;
  };
  let b;
  return t === "light" ? b = fa() : t === "dark" && (b = pa()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), nt({
    // A collection of common colors.
    common: {
      ...Or
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
      color: c,
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
    grey: fu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, o);
}
function wu(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Cu(e, t) {
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
function xu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ki = {
  textTransform: "uppercase"
}, $i = '"Roboto", "Helvetica", "Arial", sans-serif';
function Su(e, t) {
  const {
    fontFamily: r = $i,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: g,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, b = g || ((p) => `${p / l * h}rem`), v = (p, x, T, E, w) => ({
    fontFamily: r,
    fontWeight: p,
    fontSize: b(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === $i ? {
      letterSpacing: `${xu(E / x)}em`
    } : {},
    ...w,
    ...u
  }), m = {
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
    button: v(a, 14, 1.75, 0.4, ki),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, ki),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return nt({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...m
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const Eu = 0.2, Ru = 0.14, Tu = 0.12;
function Ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Eu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ru})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Tu})`].join(",");
}
const ku = ["none", Ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], $u = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ou = {
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
function Oi(e) {
  return `${Math.round(e)}ms`;
}
function Pu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Iu(e) {
  const t = {
    ...$u,
    ...e.easing
  }, r = {
    ...Ou,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Pu,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const g = (h) => typeof h == "string", f = (h) => !Number.isNaN(parseFloat(h));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !g(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), g(c) || console.error('MUI: Argument "easing" must be a string.'), !f(l) && !g(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof a == "string" ? a : Oi(a)} ${c} ${typeof l == "string" ? l : Oi(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Au = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _u(e) {
  return Rt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ha(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !_u(c) || a.startsWith("unstable_") ? delete n[a] : Rt(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function fo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: l,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Mt(20));
  const g = Ao(i), f = ia(e);
  let h = nt(f, {
    mixins: Cu(f.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ku.slice(),
    typography: Su(g, c),
    transitions: Iu(a),
    zIndex: {
      ...Au
    }
  });
  if (h = nt(h, u), h = t.reduce((b, v) => nt(b, v), h), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (m, p) => {
      let x;
      for (x in m) {
        const T = m[x];
        if (b.includes(x) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = ur("", x);
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
      p && m.startsWith("Mui") && v(p, m);
    });
  }
  return h.unstable_sxConfig = {
    ...Dn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return ar({
      sx: v,
      theme: this
    });
  }, h.toRuntimeSource = ha, h;
}
function Du(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Mu = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Du(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ga(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ma(e) {
  return e === "dark" ? Mu : [];
}
function ju(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Ao(t);
  return {
    palette: i,
    opacity: {
      ...ga(i.mode),
      ...r
    },
    overlays: n || ma(i.mode),
    ...o
  };
}
function Nu(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Fu = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Bu = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Fu(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
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
function zu(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function R(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Sr(e) {
  return !e || !e.startsWith("hsl") ? e : ea(e);
}
function Et(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = xr(Sr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Lu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const mt = (e) => {
  try {
    return e();
  } catch {
  }
}, Vu = (e = "mui") => su(e);
function to(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = ju({
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
  } = fo({
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
      ...ga(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ma(o)
  }, a;
}
function Wu(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Nu,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, g = Object.keys(r)[0], f = n || (r.light && g !== "light" ? "light" : g), h = Vu(i), {
    [f]: b,
    light: v,
    dark: m,
    ...p
  } = r, x = {
    ...p
  };
  let T = b;
  if ((f === "dark" && !("dark" in r) || f === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : Mt(21, f));
  const E = to(x, T, u, f);
  v && !x.light && to(x, v, void 0, "light"), m && !x.dark && to(x, m, void 0, "dark");
  let w = {
    defaultColorScheme: f,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: h,
    colorSchemes: x,
    font: {
      ...wu(E.typography),
      ...E.font
    },
    spacing: Lu(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((N) => {
    const s = w.colorSchemes[N].palette, $ = (M) => {
      const A = M.split("-"), K = A[1], X = A[2];
      return h(M, s[K][X]);
    };
    if (s.mode === "light" && (R(s.common, "background", "#fff"), R(s.common, "onBackground", "#000")), s.mode === "dark" && (R(s.common, "background", "#000"), R(s.common, "onBackground", "#fff")), zu(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      R(s.Alert, "errorColor", ve(s.error.light, 0.6)), R(s.Alert, "infoColor", ve(s.info.light, 0.6)), R(s.Alert, "successColor", ve(s.success.light, 0.6)), R(s.Alert, "warningColor", ve(s.warning.light, 0.6)), R(s.Alert, "errorFilledBg", $("palette-error-main")), R(s.Alert, "infoFilledBg", $("palette-info-main")), R(s.Alert, "successFilledBg", $("palette-success-main")), R(s.Alert, "warningFilledBg", $("palette-warning-main")), R(s.Alert, "errorFilledColor", mt(() => s.getContrastText(s.error.main))), R(s.Alert, "infoFilledColor", mt(() => s.getContrastText(s.info.main))), R(s.Alert, "successFilledColor", mt(() => s.getContrastText(s.success.main))), R(s.Alert, "warningFilledColor", mt(() => s.getContrastText(s.warning.main))), R(s.Alert, "errorStandardBg", we(s.error.light, 0.9)), R(s.Alert, "infoStandardBg", we(s.info.light, 0.9)), R(s.Alert, "successStandardBg", we(s.success.light, 0.9)), R(s.Alert, "warningStandardBg", we(s.warning.light, 0.9)), R(s.Alert, "errorIconColor", $("palette-error-main")), R(s.Alert, "infoIconColor", $("palette-info-main")), R(s.Alert, "successIconColor", $("palette-success-main")), R(s.Alert, "warningIconColor", $("palette-warning-main")), R(s.AppBar, "defaultBg", $("palette-grey-100")), R(s.Avatar, "defaultBg", $("palette-grey-400")), R(s.Button, "inheritContainedBg", $("palette-grey-300")), R(s.Button, "inheritContainedHoverBg", $("palette-grey-A100")), R(s.Chip, "defaultBorder", $("palette-grey-400")), R(s.Chip, "defaultAvatarColor", $("palette-grey-700")), R(s.Chip, "defaultIconColor", $("palette-grey-700")), R(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), R(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), R(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), R(s.LinearProgress, "primaryBg", we(s.primary.main, 0.62)), R(s.LinearProgress, "secondaryBg", we(s.secondary.main, 0.62)), R(s.LinearProgress, "errorBg", we(s.error.main, 0.62)), R(s.LinearProgress, "infoBg", we(s.info.main, 0.62)), R(s.LinearProgress, "successBg", we(s.success.main, 0.62)), R(s.LinearProgress, "warningBg", we(s.warning.main, 0.62)), R(s.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), R(s.Slider, "primaryTrack", we(s.primary.main, 0.62)), R(s.Slider, "secondaryTrack", we(s.secondary.main, 0.62)), R(s.Slider, "errorTrack", we(s.error.main, 0.62)), R(s.Slider, "infoTrack", we(s.info.main, 0.62)), R(s.Slider, "successTrack", we(s.success.main, 0.62)), R(s.Slider, "warningTrack", we(s.warning.main, 0.62));
      const M = en(s.background.default, 0.8);
      R(s.SnackbarContent, "bg", M), R(s.SnackbarContent, "color", mt(() => s.getContrastText(M))), R(s.SpeedDialAction, "fabHoverBg", en(s.background.paper, 0.15)), R(s.StepConnector, "border", $("palette-grey-400")), R(s.StepContent, "border", $("palette-grey-400")), R(s.Switch, "defaultColor", $("palette-common-white")), R(s.Switch, "defaultDisabledColor", $("palette-grey-100")), R(s.Switch, "primaryDisabledColor", we(s.primary.main, 0.62)), R(s.Switch, "secondaryDisabledColor", we(s.secondary.main, 0.62)), R(s.Switch, "errorDisabledColor", we(s.error.main, 0.62)), R(s.Switch, "infoDisabledColor", we(s.info.main, 0.62)), R(s.Switch, "successDisabledColor", we(s.success.main, 0.62)), R(s.Switch, "warningDisabledColor", we(s.warning.main, 0.62)), R(s.TableCell, "border", we(Zr(s.divider, 1), 0.88)), R(s.Tooltip, "bg", Zr(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      R(s.Alert, "errorColor", we(s.error.light, 0.6)), R(s.Alert, "infoColor", we(s.info.light, 0.6)), R(s.Alert, "successColor", we(s.success.light, 0.6)), R(s.Alert, "warningColor", we(s.warning.light, 0.6)), R(s.Alert, "errorFilledBg", $("palette-error-dark")), R(s.Alert, "infoFilledBg", $("palette-info-dark")), R(s.Alert, "successFilledBg", $("palette-success-dark")), R(s.Alert, "warningFilledBg", $("palette-warning-dark")), R(s.Alert, "errorFilledColor", mt(() => s.getContrastText(s.error.dark))), R(s.Alert, "infoFilledColor", mt(() => s.getContrastText(s.info.dark))), R(s.Alert, "successFilledColor", mt(() => s.getContrastText(s.success.dark))), R(s.Alert, "warningFilledColor", mt(() => s.getContrastText(s.warning.dark))), R(s.Alert, "errorStandardBg", ve(s.error.light, 0.9)), R(s.Alert, "infoStandardBg", ve(s.info.light, 0.9)), R(s.Alert, "successStandardBg", ve(s.success.light, 0.9)), R(s.Alert, "warningStandardBg", ve(s.warning.light, 0.9)), R(s.Alert, "errorIconColor", $("palette-error-main")), R(s.Alert, "infoIconColor", $("palette-info-main")), R(s.Alert, "successIconColor", $("palette-success-main")), R(s.Alert, "warningIconColor", $("palette-warning-main")), R(s.AppBar, "defaultBg", $("palette-grey-900")), R(s.AppBar, "darkBg", $("palette-background-paper")), R(s.AppBar, "darkColor", $("palette-text-primary")), R(s.Avatar, "defaultBg", $("palette-grey-600")), R(s.Button, "inheritContainedBg", $("palette-grey-800")), R(s.Button, "inheritContainedHoverBg", $("palette-grey-700")), R(s.Chip, "defaultBorder", $("palette-grey-700")), R(s.Chip, "defaultAvatarColor", $("palette-grey-300")), R(s.Chip, "defaultIconColor", $("palette-grey-300")), R(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), R(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), R(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), R(s.LinearProgress, "primaryBg", ve(s.primary.main, 0.5)), R(s.LinearProgress, "secondaryBg", ve(s.secondary.main, 0.5)), R(s.LinearProgress, "errorBg", ve(s.error.main, 0.5)), R(s.LinearProgress, "infoBg", ve(s.info.main, 0.5)), R(s.LinearProgress, "successBg", ve(s.success.main, 0.5)), R(s.LinearProgress, "warningBg", ve(s.warning.main, 0.5)), R(s.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), R(s.Slider, "primaryTrack", ve(s.primary.main, 0.5)), R(s.Slider, "secondaryTrack", ve(s.secondary.main, 0.5)), R(s.Slider, "errorTrack", ve(s.error.main, 0.5)), R(s.Slider, "infoTrack", ve(s.info.main, 0.5)), R(s.Slider, "successTrack", ve(s.success.main, 0.5)), R(s.Slider, "warningTrack", ve(s.warning.main, 0.5));
      const M = en(s.background.default, 0.98);
      R(s.SnackbarContent, "bg", M), R(s.SnackbarContent, "color", mt(() => s.getContrastText(M))), R(s.SpeedDialAction, "fabHoverBg", en(s.background.paper, 0.15)), R(s.StepConnector, "border", $("palette-grey-600")), R(s.StepContent, "border", $("palette-grey-600")), R(s.Switch, "defaultColor", $("palette-grey-300")), R(s.Switch, "defaultDisabledColor", $("palette-grey-600")), R(s.Switch, "primaryDisabledColor", ve(s.primary.main, 0.55)), R(s.Switch, "secondaryDisabledColor", ve(s.secondary.main, 0.55)), R(s.Switch, "errorDisabledColor", ve(s.error.main, 0.55)), R(s.Switch, "infoDisabledColor", ve(s.info.main, 0.55)), R(s.Switch, "successDisabledColor", ve(s.success.main, 0.55)), R(s.Switch, "warningDisabledColor", ve(s.warning.main, 0.55)), R(s.TableCell, "border", ve(Zr(s.divider, 1), 0.68)), R(s.Tooltip, "bg", Zr(s.grey[700], 0.92));
    }
    Et(s.background, "default"), Et(s.background, "paper"), Et(s.common, "background"), Et(s.common, "onBackground"), Et(s, "divider"), Object.keys(s).forEach((M) => {
      const A = s[M];
      A && typeof A == "object" && (A.main && R(s[M], "mainChannel", xr(Sr(A.main))), A.light && R(s[M], "lightChannel", xr(Sr(A.light))), A.dark && R(s[M], "darkChannel", xr(Sr(A.dark))), A.contrastText && R(s[M], "contrastTextChannel", xr(Sr(A.contrastText))), M === "text" && (Et(s[M], "primary"), Et(s[M], "secondary")), M === "action" && (A.active && Et(s[M], "active"), A.selected && Et(s[M], "selected")));
    });
  }), w = t.reduce((N, s) => nt(N, s), w);
  const y = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Bu(w)
  }, {
    vars: k,
    generateThemeVars: S,
    generateStyleSheets: D
  } = uu(w, y);
  return w.vars = k, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([N, s]) => {
    w[N] = s;
  }), w.generateThemeVars = S, w.generateStyleSheets = D, w.generateSpacing = function() {
    return oa(u.spacing, Oo(this));
  }, w.getColorSchemeSelector = du(c), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = a, w.unstable_sxConfig = {
    ...Dn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(s) {
    return ar({
      sx: s,
      theme: this
    });
  }, w.toRuntimeSource = ha, w;
}
function Pi(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Ao({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Uu(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", l = o == null ? void 0 : o[c], u = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return fo(e, ...t);
    let g = r;
    "palette" in e || u[c] && (u[c] !== !0 ? g = u[c].palette : c === "dark" && (g = {
      mode: "dark"
    }));
    const f = fo({
      ...e,
      palette: g
    }, ...t);
    return f.defaultColorScheme = c, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, Pi(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, Pi(f, "light", u.light)), f;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), Wu({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Hu = Uu(), Yu = "$$material", Ft = Wl({
  themeId: Yu,
  defaultTheme: Hu,
  rootShouldForwardProp: ta
}), yn = au;
process.env.NODE_ENV !== "production" && (C.node, C.object.isRequired);
function Nr(e) {
  return iu(e);
}
class bn {
  constructor() {
    yr(this, "mountEffect", () => {
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
    return new bn();
  }
  static use() {
    const t = da(bn.create).current, [r, n] = q.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, q.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Gu(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Ku() {
  return bn.use();
}
function Gu() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function qu(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function po(e, t) {
  return po = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, po(e, t);
}
function Xu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, po(e, t);
}
const Ii = Tt.createContext(null);
function Ju(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _o(e, t) {
  var r = function(i) {
    return t && rn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ps.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Qu(e, t) {
  e = e || {}, t = t || {};
  function r(g) {
    return g in t ? t[g] : e[g];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var u = n[l][a];
        c[n[l][a]] = r(u);
      }
    c[l] = r(l);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function Ht(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Zu(e, t) {
  return _o(e.children, function(r) {
    return nn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ht(r, "appear", e),
      enter: Ht(r, "enter", e),
      exit: Ht(r, "exit", e)
    });
  });
}
function ed(e, t, r) {
  var n = _o(e.children), o = Qu(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (rn(a)) {
      var c = i in t, l = i in n, u = t[i], g = rn(u) && !u.props.in;
      l && (!c || g) ? o[i] = nn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Ht(a, "exit", e),
        enter: Ht(a, "enter", e)
      }) : !l && c && !g ? o[i] = nn(a, {
        in: !1
      }) : l && c && rn(u) && (o[i] = nn(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Ht(a, "exit", e),
        enter: Ht(a, "enter", e)
      }));
    }
  }), o;
}
var td = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, rd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Do = /* @__PURE__ */ function(e) {
  Xu(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Ju(i));
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
    var a = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Zu(o, c) : ed(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = _o(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = pn({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = qu(o, ["component", "childFactory"]), l = this.state.contextValue, u = td(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Tt.createElement(Ii.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Tt.createElement(Ii.Provider, {
      value: l
    }, /* @__PURE__ */ Tt.createElement(i, c, u));
  }, t;
}(Tt.Component);
Do.propTypes = process.env.NODE_ENV !== "production" ? {
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
Do.defaultProps = rd;
function ya(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: u
  } = e, [g, f] = q.useState(!1), h = De(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, v = De(r.child, g && r.childLeaving, n && r.childPulsate);
  return !c && !g && f(!0), q.useEffect(() => {
    if (!c && l != null) {
      const m = setTimeout(l, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ L.jsx("span", {
    className: h,
    style: b,
    children: /* @__PURE__ */ L.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (ya.propTypes = {
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
const st = jr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ho = 550, nd = 80, od = Eo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, id = Eo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ad = Eo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, sd = Ft("span", {
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
}), cd = Ft(ya, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${st.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${od};
    animation-duration: ${ho}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${st.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${st.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${st.childLeaving} {
    opacity: 0;
    animation-name: ${id};
    animation-duration: ${ho}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${st.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ad};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ba = /* @__PURE__ */ q.forwardRef(function(t, r) {
  const n = Nr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [l, u] = q.useState([]), g = q.useRef(0), f = q.useRef(null);
  q.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [l]);
  const h = q.useRef(!1), b = ru(), v = q.useRef(null), m = q.useRef(null), p = q.useCallback((w) => {
    const {
      pulsate: y,
      rippleX: k,
      rippleY: S,
      rippleSize: D,
      cb: N
    } = w;
    u((s) => [...s, /* @__PURE__ */ L.jsx(cd, {
      classes: {
        ripple: De(i.ripple, st.ripple),
        rippleVisible: De(i.rippleVisible, st.rippleVisible),
        ripplePulsate: De(i.ripplePulsate, st.ripplePulsate),
        child: De(i.child, st.child),
        childLeaving: De(i.childLeaving, st.childLeaving),
        childPulsate: De(i.childPulsate, st.childPulsate)
      },
      timeout: ho,
      pulsate: y,
      rippleX: k,
      rippleY: S,
      rippleSize: D
    }, g.current)]), g.current += 1, f.current = N;
  }, [i]), x = q.useCallback((w = {}, y = {}, k = () => {
  }) => {
    const {
      pulsate: S = !1,
      center: D = o || y.pulsate,
      fakeElement: N = !1
      // For test purposes
    } = y;
    if ((w == null ? void 0 : w.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (h.current = !0);
    const s = N ? null : m.current, $ = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let M, A, K;
    if (D || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      M = Math.round($.width / 2), A = Math.round($.height / 2);
    else {
      const {
        clientX: X,
        clientY: ie
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      M = Math.round(X - $.left), A = Math.round(ie - $.top);
    }
    if (D)
      K = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), K % 2 === 0 && (K += 1);
    else {
      const X = Math.max(Math.abs((s ? s.clientWidth : 0) - M), M) * 2 + 2, ie = Math.max(Math.abs((s ? s.clientHeight : 0) - A), A) * 2 + 2;
      K = Math.sqrt(X ** 2 + ie ** 2);
    }
    w != null && w.touches ? v.current === null && (v.current = () => {
      p({
        pulsate: S,
        rippleX: M,
        rippleY: A,
        rippleSize: K,
        cb: k
      });
    }, b.start(nd, () => {
      v.current && (v.current(), v.current = null);
    })) : p({
      pulsate: S,
      rippleX: M,
      rippleY: A,
      rippleSize: K,
      cb: k
    });
  }, [o, p, b]), T = q.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), E = q.useCallback((w, y) => {
    if (b.clear(), (w == null ? void 0 : w.type) === "touchend" && v.current) {
      v.current(), v.current = null, b.start(0, () => {
        E(w, y);
      });
      return;
    }
    v.current = null, u((k) => k.length > 0 ? k.slice(1) : k), f.current = y;
  }, [b]);
  return q.useImperativeHandle(r, () => ({
    pulsate: T,
    start: x,
    stop: E
  }), [T, x, E]), /* @__PURE__ */ L.jsx(sd, {
    className: De(st.root, i.root, a),
    ref: m,
    ...c,
    children: /* @__PURE__ */ L.jsx(Do, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (ba.propTypes = {
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
function ld(e) {
  return ur("MuiButtonBase", e);
}
const ud = jr("MuiButtonBase", ["root", "disabled", "focusVisible"]), dd = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Sn({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, ld, o);
  return r && n && (a.root += ` ${n}`), a;
}, fd = Ft("button", {
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
  [`&.${ud.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Mo = /* @__PURE__ */ q.forwardRef(function(t, r) {
  const n = Nr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: g = !1,
    disableTouchRipple: f = !1,
    focusRipple: h = !1,
    focusVisibleClassName: b,
    LinkComponent: v = "a",
    onBlur: m,
    onClick: p,
    onContextMenu: x,
    onDragLeave: T,
    onFocus: E,
    onFocusVisible: w,
    onKeyDown: y,
    onKeyUp: k,
    onMouseDown: S,
    onMouseLeave: D,
    onMouseUp: N,
    onTouchEnd: s,
    onTouchMove: $,
    onTouchStart: M,
    tabIndex: A = 0,
    TouchRippleProps: K,
    touchRippleRef: X,
    type: ie,
    ...ye
  } = n, Ce = q.useRef(null), ke = Ku(), I = wi(ke.ref, X), [B, re] = q.useState(!1);
  u && B && re(!1), q.useImperativeHandle(o, () => ({
    focusVisible: () => {
      re(!0), Ce.current.focus();
    }
  }), []);
  const ne = ke.shouldMount && !g && !u;
  q.useEffect(() => {
    B && h && !g && ke.pulsate();
  }, [g, h, B, ke]);
  function V(ee, zt, Lt = f) {
    return tn((Vt) => (zt && zt(Vt), Lt || ke[ee](Vt), !0));
  }
  const oe = V("start", S), G = V("stop", x), j = V("stop", T), W = V("stop", N), Z = V("stop", (ee) => {
    B && ee.preventDefault(), D && D(ee);
  }), Q = V("start", M), xe = V("stop", s), F = V("stop", $), Pe = V("stop", (ee) => {
    xi(ee.target) || re(!1), m && m(ee);
  }, !1), U = tn((ee) => {
    Ce.current || (Ce.current = ee.currentTarget), xi(ee.target) && (re(!0), w && w(ee)), E && E(ee);
  }), Me = () => {
    const ee = Ce.current;
    return l && l !== "button" && !(ee.tagName === "A" && ee.href);
  }, ze = tn((ee) => {
    h && !ee.repeat && B && ee.key === " " && ke.stop(ee, () => {
      ke.start(ee);
    }), ee.target === ee.currentTarget && Me() && ee.key === " " && ee.preventDefault(), y && y(ee), ee.target === ee.currentTarget && Me() && ee.key === "Enter" && !u && (ee.preventDefault(), p && p(ee));
  }), ot = tn((ee) => {
    h && ee.key === " " && B && !ee.defaultPrevented && ke.stop(ee, () => {
      ke.pulsate(ee);
    }), k && k(ee), p && ee.target === ee.currentTarget && Me() && ee.key === " " && !ee.defaultPrevented && p(ee);
  });
  let Ke = l;
  Ke === "button" && (ye.href || ye.to) && (Ke = v);
  const Le = {};
  Ke === "button" ? (Le.type = ie === void 0 ? "button" : ie, Le.disabled = u) : (!ye.href && !ye.to && (Le.role = "button"), u && (Le["aria-disabled"] = u));
  const Bt = wi(r, Ce), pt = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: g,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: A,
    focusVisible: B
  }, it = dd(pt);
  return /* @__PURE__ */ L.jsxs(fd, {
    as: Ke,
    className: De(it.root, c),
    ownerState: pt,
    onBlur: Pe,
    onClick: p,
    onContextMenu: G,
    onFocus: U,
    onKeyDown: ze,
    onKeyUp: ot,
    onMouseDown: oe,
    onMouseLeave: Z,
    onMouseUp: W,
    onDragLeave: j,
    onTouchEnd: xe,
    onTouchMove: F,
    onTouchStart: Q,
    ref: Bt,
    tabIndex: u ? -1 : A,
    type: ie,
    ...Le,
    ...ye,
    children: [a, ne ? /* @__PURE__ */ L.jsx(ba, {
      ref: I,
      center: i,
      ...K
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ql,
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
  component: Jl,
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
function pd(e) {
  return typeof e.main == "string";
}
function hd(e, t = []) {
  if (!pd(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function go(e = []) {
  return ([, t]) => t && hd(t, e);
}
function gd(e) {
  return ur("MuiButton", e);
}
const rr = jr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), va = /* @__PURE__ */ q.createContext({});
process.env.NODE_ENV !== "production" && (va.displayName = "ButtonGroupContext");
const wa = /* @__PURE__ */ q.createContext(void 0);
process.env.NODE_ENV !== "production" && (wa.displayName = "ButtonGroupButtonContext");
const md = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${Te(t)}`, `size${Te(o)}`, `${i}Size${Te(o)}`, `color${Te(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Te(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Te(o)}`]
  }, l = Sn(c, gd, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Ca = [{
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
}], yd = Ft(Mo, {
  shouldForwardProp: (e) => ta(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Te(r.color)}`], t[`size${Te(r.size)}`], t[`${r.variant}Size${Te(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(yn(({
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
    [`&.${rr.disabled}`]: {
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
        [`&.${rr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${rr.disabled}`]: {
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
        [`&.${rr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(go()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : _t(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${rr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${rr.disabled}`]: {
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
})), bd = Ft("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${Te(r.size)}`]];
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
  }, ...Ca]
}), vd = Ft("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${Te(r.size)}`]];
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
  }, ...Ca]
}), xa = /* @__PURE__ */ q.forwardRef(function(t, r) {
  const n = q.useContext(va), o = q.useContext(wa), i = gn(n, t), a = Nr({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: g,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: b = !1,
    endIcon: v,
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
    disabled: f,
    disableElevation: h,
    disableFocusRipple: b,
    fullWidth: p,
    size: x,
    type: E,
    variant: w
  }, S = md(k), D = T && /* @__PURE__ */ L.jsx(bd, {
    className: S.startIcon,
    ownerState: k,
    children: T
  }), N = v && /* @__PURE__ */ L.jsx(vd, {
    className: S.endIcon,
    ownerState: k,
    children: v
  }), s = o || "";
  return /* @__PURE__ */ L.jsxs(yd, {
    ownerState: k,
    className: De(n.className, S.root, g, s),
    component: u,
    disabled: f,
    focusRipple: !b,
    focusVisibleClassName: De(S.focusVisible, m),
    ref: r,
    type: E,
    ...y,
    classes: S,
    children: [D, c, N]
  });
});
process.env.NODE_ENV !== "production" && (xa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: C.oneOfType([C.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * Element placed after the children.
   */
  endIcon: C.node,
  /**
   * @ignore
   */
  focusVisibleClassName: C.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: C.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: C.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["small", "medium", "large"]), C.string]),
  /**
   * Element placed before the children.
   */
  startIcon: C.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: C.oneOfType([C.oneOf(["contained", "outlined", "text"]), C.string])
});
const Re = {
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
}, Sa = Dt(xa, {
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
      return cn`
                    background: ${Re.primary500};
                    color: ${Re.gray100};
                `;
    case "secondary":
      return cn`
                    border: 1px solid ${Re.primary500};
                    background: ${Re.gray100};
                    color: ${Re.primary500};
                `;
    default:
      return cn`
                    background: ${Re.gray100};
                    color: ${Re.gray700};
                `;
  }
}}
`;
function lt(e, t, r) {
  const n = typeof e.colSpan == "function" ? e.colSpan(r) : 1;
  if (Number.isInteger(n) && n > 1 && (!e.frozen || e.idx + n - 1 <= t))
    return n;
}
function wd(e) {
  e.stopPropagation();
}
function un(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function Rr(e) {
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
const Cd = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function mo(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function xd(e) {
  return mo(e) && e.keyCode !== 86 ? !1 : !Cd.has(e.key);
}
function Sd({
  key: e,
  target: t
}) {
  var r;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((r = t.closest(".rdg-editor-container")) == null ? void 0 : r.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const Ed = "mlln6zg7-0-0-beta-47";
function Rd(e) {
  return e.map(({
    key: t,
    idx: r,
    minWidth: n,
    maxWidth: o
  }) => /* @__PURE__ */ L.jsx("div", {
    className: Ed,
    style: {
      gridColumnStart: r + 1,
      minWidth: n,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function Td({
  selectedPosition: e,
  columns: t,
  rows: r
}) {
  const n = t[e.idx], o = r[e.rowIdx];
  return Ea(n, o);
}
function Ea(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function kd({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: r,
  rowIdx: n,
  mainHeaderRowIdx: o,
  lastFrozenColumnIndex: i,
  column: a
}) {
  const c = (t == null ? void 0 : t.length) ?? 0;
  if (n === o)
    return lt(a, i, {
      type: "HEADER"
    });
  if (t && n > o && n <= c + o)
    return lt(a, i, {
      type: "SUMMARY",
      row: t[n + c]
    });
  if (n >= 0 && n < e.length) {
    const l = e[n];
    return lt(a, i, {
      type: "ROW",
      row: l
    });
  }
  if (r)
    return lt(a, i, {
      type: "SUMMARY",
      row: r[n - e.length]
    });
}
function $d({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: r,
  columns: n,
  colSpanColumns: o,
  rows: i,
  topSummaryRows: a,
  bottomSummaryRows: c,
  minRowIdx: l,
  mainHeaderRowIdx: u,
  maxRowIdx: g,
  currentPosition: {
    idx: f,
    rowIdx: h
  },
  nextPosition: b,
  lastFrozenColumnIndex: v,
  isCellWithinBounds: m
}) {
  let {
    idx: p,
    rowIdx: x
  } = b;
  const T = n.length, E = (k) => {
    for (const S of o) {
      const D = S.idx;
      if (D > p) break;
      const N = kd({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: c,
        rowIdx: x,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: v,
        column: S
      });
      if (N && p > D && p < N + D) {
        p = D + (k ? N : 0);
        break;
      }
    }
  }, w = (k) => k.level + u, y = () => {
    if (t) {
      let S = n[p].parent;
      for (; S !== void 0; ) {
        const D = w(S);
        if (x === D) {
          p = S.idx + S.colSpan;
          break;
        }
        S = S.parent;
      }
    } else if (e) {
      let S = n[p].parent, D = !1;
      for (; S !== void 0; ) {
        const N = w(S);
        if (x >= N) {
          p = S.idx, x = N, D = !0;
          break;
        }
        S = S.parent;
      }
      D || (p = f, x = h);
    }
  };
  if (m(b) && (E(t), x < u && y()), r === "CHANGE_ROW" && (p === T ? x === g || (p = 0, x += 1) : p === -1 && (x === l || (x -= 1, p = T - 1), E(!1))), x < u) {
    let S = n[p].parent;
    const D = x;
    for (x = u; S !== void 0; ) {
      const N = w(S);
      N >= D && (x = N, p = S.idx), S = S.parent;
    }
  }
  return {
    idx: p,
    rowIdx: x
  };
}
function Od({
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
const Pd = "cj343x07-0-0-beta-47", Ra = `rdg-cell ${Pd}`, Id = "csofj7r7-0-0-beta-47", Ad = `rdg-cell-frozen ${Id}`;
function Ta(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function ka(e, t, r) {
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
function Fr(e, t = 1) {
  const r = e.idx + 1;
  return {
    gridColumnStart: r,
    gridColumnEnd: r + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function Mn(e, ...t) {
  return De(Ra, ...t, e.frozen && Ad);
}
const {
  min: Pr,
  max: vn,
  floor: Ai,
  sign: _d,
  abs: Dd
} = Math;
function ro(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function $a(e, {
  minWidth: t,
  maxWidth: r
}) {
  return e = vn(e, t), typeof r == "number" && r >= t ? Pr(e, r) : e;
}
function Oa(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Md = "c1bn88vv7-0-0-beta-47", jd = `rdg-checkbox-input ${Md}`;
function Nd({
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
    className: jd,
    onChange: n,
    ...r
  });
}
function Fd(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Pa = /* @__PURE__ */ Ar(void 0), Bd = Pa.Provider;
function Ia() {
  return Fi(Pa);
}
const zd = /* @__PURE__ */ Ar(void 0), Ld = zd.Provider, Vd = /* @__PURE__ */ Ar(void 0), Wd = Vd.Provider, Ud = /* @__PURE__ */ Ar(void 0), Hd = Ud.Provider, Yd = /* @__PURE__ */ Ar(void 0), Kd = Yd.Provider, _i = "rdg-select-column", Gd = "auto", qd = 50;
function Xd({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: r,
  viewportWidth: n,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? Gd, c = (t == null ? void 0 : t.minWidth) ?? qd, l = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? Fd, g = (t == null ? void 0 : t.sortable) ?? !1, f = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: b,
    colSpanColumns: v,
    lastFrozenColumnIndex: m,
    headerRowsCount: p
  } = kt(() => {
    let S = -1, D = 1;
    const N = [];
    s(e, 1);
    function s(M, A, K) {
      for (const X of M) {
        if ("children" in X) {
          const Ce = {
            name: X.name,
            parent: K,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: X.headerCellClass
          };
          s(X.children, A + 1, Ce);
          continue;
        }
        const ie = X.frozen ?? !1, ye = {
          ...X,
          parent: K,
          idx: 0,
          level: 0,
          frozen: ie,
          width: X.width ?? a,
          minWidth: X.minWidth ?? c,
          maxWidth: X.maxWidth ?? l,
          sortable: X.sortable ?? g,
          resizable: X.resizable ?? f,
          draggable: X.draggable ?? h,
          renderCell: X.renderCell ?? u
        };
        N.push(ye), ie && S++, A > D && (D = A);
      }
    }
    N.sort(({
      key: M,
      frozen: A
    }, {
      key: K,
      frozen: X
    }) => M === _i ? -1 : K === _i ? 1 : A ? X ? 0 : -1 : X ? 1 : 0);
    const $ = [];
    return N.forEach((M, A) => {
      M.idx = A, Aa(M, A, 0), M.colSpan != null && $.push(M);
    }), {
      columns: N,
      colSpanColumns: $,
      lastFrozenColumnIndex: S,
      headerRowsCount: D
    };
  }, [e, a, c, l, u, f, g, h]), {
    templateColumns: x,
    layoutCssVars: T,
    totalFrozenColumnWidth: E,
    columnMetrics: w
  } = kt(() => {
    const S = /* @__PURE__ */ new Map();
    let D = 0, N = 0;
    const s = [];
    for (const M of b) {
      let A = r(M);
      typeof A == "number" ? A = $a(A, M) : A = M.minWidth, s.push(`${A}px`), S.set(M, {
        width: A,
        left: D
      }), D += A;
    }
    if (m !== -1) {
      const M = S.get(b[m]);
      N = M.left + M.width;
    }
    const $ = {};
    for (let M = 0; M <= m; M++) {
      const A = b[M];
      $[`--rdg-frozen-left-${A.idx}`] = `${S.get(A).left}px`;
    }
    return {
      templateColumns: s,
      layoutCssVars: $,
      totalFrozenColumnWidth: N,
      columnMetrics: S
    };
  }, [r, b, m]), [y, k] = kt(() => {
    if (!i)
      return [0, b.length - 1];
    const S = o + E, D = o + n, N = b.length - 1, s = Pr(m + 1, N);
    if (S >= D)
      return [s, s];
    let $ = s;
    for (; $ < N; ) {
      const {
        left: X,
        width: ie
      } = w.get(b[$]);
      if (X + ie > S)
        break;
      $++;
    }
    let M = $;
    for (; M < N; ) {
      const {
        left: X,
        width: ie
      } = w.get(b[M]);
      if (X + ie >= D)
        break;
      M++;
    }
    const A = vn(s, $ - 1), K = Pr(N, M + 1);
    return [A, K];
  }, [w, b, m, o, E, n, i]);
  return {
    columns: b,
    colSpanColumns: v,
    colOverscanStartIdx: y,
    colOverscanEndIdx: k,
    templateColumns: x,
    layoutCssVars: T,
    headerRowsCount: p,
    lastFrozenColumnIndex: m,
    totalFrozenColumnWidth: E
  };
}
function Aa(e, t, r) {
  if (r < e.level && (e.level = r), e.parent !== void 0) {
    const {
      parent: n
    } = e;
    n.idx === -1 && (n.idx = t), n.colSpan += 1, Aa(n, t, r - 1);
  }
}
const sr = typeof window > "u" ? bo : gs;
function Jd(e, t, r, n, o, i, a, c, l, u) {
  const g = vt(o), f = e.length === t.length, h = f && o !== g.current, b = [...r], v = [];
  for (const {
    key: T,
    idx: E,
    width: w
  } of t)
    typeof w == "string" && (h || !a.has(T)) && !i.has(T) && (b[E] = w, v.push(T));
  const m = b.join(" ");
  sr(() => {
    g.current = o, p(v);
  });
  function p(T) {
    T.length !== 0 && l((E) => {
      const w = new Map(E);
      let y = !1;
      for (const k of T) {
        const S = Di(n, k);
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
      key: D,
      idx: N,
      width: s
    } of t)
      if (w === D) {
        const $ = typeof E == "number" ? `${E}px` : E;
        y[N] = $;
      } else f && typeof s == "string" && !i.has(D) && (y[N] = s, k.push(D));
    n.current.style.gridTemplateColumns = y.join(" ");
    const S = typeof E == "number" ? E : Di(n, w);
    fn(() => {
      c((D) => {
        const N = new Map(D);
        return N.set(w, S), N;
      }), p(k);
    }), u == null || u(T.idx, S);
  }
  return {
    gridTemplateColumns: m,
    handleColumnResize: x
  };
}
function Di(e, t) {
  var o;
  const r = `[data-measuring-cell-key="${CSS.escape(t)}"]`, n = (o = e.current) == null ? void 0 : o.querySelector(r);
  return n == null ? void 0 : n.getBoundingClientRect().width;
}
function Qd() {
  const e = vt(null), [t, r] = Ye(1), [n, o] = Ye(1), [i, a] = Ye(0);
  return sr(() => {
    const {
      ResizeObserver: c
    } = window;
    if (c == null) return;
    const {
      clientWidth: l,
      clientHeight: u,
      offsetWidth: g,
      offsetHeight: f
    } = e.current, {
      width: h,
      height: b
    } = e.current.getBoundingClientRect(), v = f - u, m = h - g + l, p = b - v;
    r(m), o(p), a(v);
    const x = new c((T) => {
      const E = T[0].contentBoxSize[0], {
        clientHeight: w,
        offsetHeight: y
      } = e.current;
      fn(() => {
        r(E.inlineSize), o(E.blockSize), a(y - w);
      });
    });
    return x.observe(e.current), () => {
      x.disconnect();
    };
  }, []), [e, t, n, i];
}
function et(e) {
  const t = vt(e);
  bo(() => {
    t.current = e;
  });
  const r = dn((...n) => {
    t.current(...n);
  }, []);
  return e && r;
}
function jn(e) {
  const [t, r] = Ye(!1);
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
function Zd({
  columns: e,
  colSpanColumns: t,
  rows: r,
  topSummaryRows: n,
  bottomSummaryRows: o,
  colOverscanStartIdx: i,
  colOverscanEndIdx: a,
  lastFrozenColumnIndex: c,
  rowOverscanStartIdx: l,
  rowOverscanEndIdx: u
}) {
  const g = kt(() => {
    if (i === 0) return 0;
    let f = i;
    const h = (b, v) => v !== void 0 && b + v > i ? (f = b, !0) : !1;
    for (const b of t) {
      const v = b.idx;
      if (v >= f || h(v, lt(b, c, {
        type: "HEADER"
      })))
        break;
      for (let m = l; m <= u; m++) {
        const p = r[m];
        if (h(v, lt(b, c, {
          type: "ROW",
          row: p
        })))
          break;
      }
      if (n != null) {
        for (const m of n)
          if (h(v, lt(b, c, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
      if (o != null) {
        for (const m of o)
          if (h(v, lt(b, c, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
    }
    return f;
  }, [l, u, r, n, o, i, c, t]);
  return kt(() => {
    const f = [];
    for (let h = 0; h <= a; h++) {
      const b = e[h];
      h < g && !b.frozen || f.push(b);
    }
    return f;
  }, [g, a, e]);
}
function ef({
  rows: e,
  rowHeight: t,
  clientHeight: r,
  scrollTop: n,
  enableVirtualization: o
}) {
  const {
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: c,
    getRowHeight: l,
    findRowIdx: u
  } = kt(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (p) => p * t,
        getRowHeight: () => t,
        findRowIdx: (p) => Ai(p / t)
      };
    let h = 0, b = " ";
    const v = e.map((p) => {
      const x = t(p), T = {
        top: h,
        height: x
      };
      return b += `${x}px `, h += x, T;
    }), m = (p) => vn(0, Pr(e.length - 1, p));
    return {
      totalRowHeight: h,
      gridTemplateRows: b,
      getRowTop: (p) => v[m(p)].top,
      getRowHeight: (p) => v[m(p)].height,
      findRowIdx(p) {
        let x = 0, T = v.length - 1;
        for (; x <= T; ) {
          const E = x + Ai((T - x) / 2), w = v[E].top;
          if (w === p) return E;
          if (w < p ? x = E + 1 : w > p && (T = E - 1), x > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let g = 0, f = e.length - 1;
  if (o) {
    const b = u(n), v = u(n + r);
    g = vn(0, b - 4), f = Pr(e.length - 1, v + 4);
  }
  return {
    rowOverscanStartIdx: g,
    rowOverscanEndIdx: f,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: c,
    getRowHeight: l,
    findRowIdx: u
  };
}
const tf = "c1w9bbhr7-0-0-beta-47", rf = "c1creorc7-0-0-beta-47", nf = `rdg-cell-drag-handle ${tf}`;
function of({
  gridRowStart: e,
  rows: t,
  column: r,
  columnWidth: n,
  maxColIdx: o,
  isLastRow: i,
  selectedPosition: a,
  latestDraggedOverRowIdx: c,
  isCellEditable: l,
  onRowsChange: u,
  onFill: g,
  onClick: f,
  setDragging: h,
  setDraggedOverRowIdx: b
}) {
  const {
    idx: v,
    rowIdx: m
  } = a;
  function p(y) {
    if (y.preventDefault(), y.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", k), window.addEventListener("mouseup", S);
    function k(D) {
      D.buttons !== 1 && S();
    }
    function S() {
      window.removeEventListener("mouseover", k), window.removeEventListener("mouseup", S), h(!1), x();
    }
  }
  function x() {
    const y = c.current;
    if (y === void 0) return;
    const k = m < y ? m + 1 : y, S = m < y ? y + 1 : m;
    E(k, S), b(void 0);
  }
  function T(y) {
    y.stopPropagation(), E(m + 1, t.length);
  }
  function E(y, k) {
    const S = t[m], D = [...t], N = [];
    for (let s = y; s < k; s++)
      if (l({
        rowIdx: s,
        idx: v
      })) {
        const $ = g({
          columnKey: r.key,
          sourceRow: S,
          targetRow: t[s]
        });
        $ !== t[s] && (D[s] = $, N.push(s));
      }
    N.length > 0 && (u == null || u(D, {
      indexes: N,
      column: r
    }));
  }
  function w() {
    var s;
    const y = ((s = r.colSpan) == null ? void 0 : s.call(r, {
      type: "ROW",
      row: t[m]
    })) ?? 1, {
      insetInlineStart: k,
      ...S
    } = Fr(r, y), D = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", N = r.idx + y - 1 === o;
    return {
      ...S,
      gridRowStart: e,
      marginInlineEnd: N ? void 0 : D,
      marginBlockEnd: i ? void 0 : D,
      insetInlineStart: k ? `calc(${k} + ${n}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ L.jsx("div", {
    style: w(),
    className: De(nf, r.frozen && rf),
    onClick: f,
    onMouseDown: p,
    onDoubleClick: T
  });
}
const af = "cis5rrm7-0-0-beta-47";
function sf({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  onRowChange: o,
  closeEditor: i,
  onKeyDown: a,
  navigate: c
}) {
  var x, T, E;
  const l = vt(void 0), u = ((x = e.editorOptions) == null ? void 0 : x.commitOnOutsideClick) !== !1, g = et(() => {
    b(!0, !1);
  });
  bo(() => {
    if (!u) return;
    function w() {
      l.current = requestAnimationFrame(g);
    }
    return addEventListener("mousedown", w, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", w, {
        capture: !0
      }), f();
    };
  }, [u, g]);
  function f() {
    cancelAnimationFrame(l.current);
  }
  function h(w) {
    if (a) {
      const y = Rr(w);
      if (a({
        mode: "EDIT",
        row: r,
        column: e,
        rowIdx: n,
        navigate() {
          c(w);
        },
        onClose: b
      }, y), y.isGridDefaultPrevented()) return;
    }
    w.key === "Escape" ? b() : w.key === "Enter" ? b(!0) : Sd(w) && c(w);
  }
  function b(w = !1, y = !0) {
    w ? o(r, !0, y) : i(y);
  }
  function v(w, y = !1) {
    o(w, y, y);
  }
  const {
    cellClass: m
  } = e, p = Mn(e, "rdg-editor-container", typeof m == "function" ? m(r) : m, !((T = e.editorOptions) != null && T.displayCellContent) && af);
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: p,
    style: Fr(e, t),
    onKeyDown: h,
    onMouseDownCapture: f,
    children: e.renderEditCell != null && /* @__PURE__ */ L.jsxs(L.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: r,
        rowIdx: n,
        onRowChange: v,
        onClose: b
      }), ((E = e.editorOptions) == null ? void 0 : E.displayCellContent) && e.renderCell({
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
function cf({
  column: e,
  rowIdx: t,
  isCellSelected: r,
  selectCell: n
}) {
  const {
    tabIndex: o,
    onFocus: i
  } = jn(r), {
    colSpan: a
  } = e, c = Oa(e, t), l = e.idx + 1;
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
    "aria-rowspan": c,
    "aria-selected": r,
    tabIndex: o,
    className: De(Ra, e.headerCellClass),
    style: {
      ...ka(e, t, c),
      gridColumnStart: l,
      gridColumnEnd: l + a
    },
    onFocus: i,
    onClick: u,
    children: e.name
  });
}
const lf = "h44jtk67-0-0-beta-47", uf = "hcgkhxz7-0-0-beta-47", df = `rdg-header-sort-name ${uf}`;
function ff({
  column: e,
  sortDirection: t,
  priority: r
}) {
  return e.sortable ? /* @__PURE__ */ L.jsx(pf, {
    sortDirection: t,
    priority: r,
    children: e.name
  }) : e.name;
}
function pf({
  sortDirection: e,
  priority: t,
  children: r
}) {
  const n = Ia().renderSortStatus;
  return /* @__PURE__ */ L.jsxs("span", {
    className: lf,
    children: [/* @__PURE__ */ L.jsx("span", {
      className: df,
      children: r
    }), /* @__PURE__ */ L.jsx("span", {
      children: n({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const hf = "c6l2wv17-0-0-beta-47", gf = "c1kqdw7y7-0-0-beta-47", mf = `rdg-cell-resizable ${gf}`, yf = "r1y6ywlx7-0-0-beta-47", bf = "rdg-cell-draggable", vf = "c1bezg5o7-0-0-beta-47", wf = `rdg-cell-dragging ${vf}`, Cf = "c1vc96037-0-0-beta-47", xf = `rdg-cell-drag-over ${Cf}`;
function Sf({
  column: e,
  colSpan: t,
  rowIdx: r,
  isCellSelected: n,
  onColumnResize: o,
  onColumnsReorder: i,
  sortColumns: a,
  onSortColumnsChange: c,
  selectCell: l,
  shouldFocusGrid: u,
  direction: g,
  dragDropKey: f
}) {
  const [h, b] = Ye(!1), [v, m] = Ye(!1), p = g === "rtl", x = Oa(e, r), {
    tabIndex: T,
    childTabIndex: E,
    onFocus: w
  } = jn(n), y = a == null ? void 0 : a.findIndex((j) => j.columnKey === e.key), k = y !== void 0 && y > -1 ? a[y] : void 0, S = k == null ? void 0 : k.direction, D = k !== void 0 && a.length > 1 ? y + 1 : void 0, N = S && !D ? S === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: s,
    resizable: $,
    draggable: M
  } = e, A = Mn(e, e.headerCellClass, s && hf, $ && mf, M && bf, h && wf, v && xf), K = e.renderHeaderCell ?? ff;
  function X(j) {
    if (j.pointerType === "mouse" && j.buttons !== 1)
      return;
    j.preventDefault();
    const {
      currentTarget: W,
      pointerId: Z
    } = j, Q = W.parentElement, {
      right: xe,
      left: F
    } = Q.getBoundingClientRect(), Pe = p ? j.clientX - F : xe - j.clientX;
    let U = !1;
    function Me(Ke) {
      const {
        width: Le,
        right: Bt,
        left: pt
      } = Q.getBoundingClientRect();
      let it = p ? Bt + Pe - Ke.clientX : Ke.clientX + Pe - pt;
      it = $a(it, e), Le > 0 && it !== Le && o(e, it);
    }
    function ze() {
      U = !0, o(e, "max-content");
    }
    function ot(Ke) {
      U || Me(Ke), W.removeEventListener("pointermove", Me), W.removeEventListener("dblclick", ze), W.removeEventListener("lostpointercapture", ot);
    }
    W.setPointerCapture(Z), W.addEventListener("pointermove", Me), W.addEventListener("dblclick", ze), W.addEventListener("lostpointercapture", ot);
  }
  function ie(j) {
    if (c == null) return;
    const {
      sortDescendingFirst: W
    } = e;
    if (k === void 0) {
      const Z = {
        columnKey: e.key,
        direction: W ? "DESC" : "ASC"
      };
      c(a && j ? [...a, Z] : [Z]);
    } else {
      let Z;
      if ((W === !0 && S === "DESC" || W !== !0 && S === "ASC") && (Z = {
        columnKey: e.key,
        direction: S === "ASC" ? "DESC" : "ASC"
      }), j) {
        const Q = [...a];
        Z ? Q[y] = Z : Q.splice(y, 1), c(Q);
      } else
        c(Z ? [Z] : []);
    }
  }
  function ye(j) {
    l({
      idx: e.idx,
      rowIdx: r
    }), s && ie(j.ctrlKey || j.metaKey);
  }
  function Ce(j) {
    w == null || w(j), u && l({
      idx: 0,
      rowIdx: r
    });
  }
  function ke(j) {
    (j.key === " " || j.key === "Enter") && (j.preventDefault(), ie(j.ctrlKey || j.metaKey));
  }
  function I(j) {
    j.dataTransfer.setData(f, e.key), j.dataTransfer.dropEffect = "move", b(!0);
  }
  function B() {
    b(!1);
  }
  function re(j) {
    j.preventDefault(), j.dataTransfer.dropEffect = "move";
  }
  function ne(j) {
    if (m(!1), j.dataTransfer.types.includes(f.toLowerCase())) {
      const W = j.dataTransfer.getData(f.toLowerCase());
      W !== e.key && (j.preventDefault(), i == null || i(W, e.key));
    }
  }
  function V(j) {
    Mi(j) && m(!0);
  }
  function oe(j) {
    Mi(j) && m(!1);
  }
  let G;
  return M && (G = {
    draggable: !0,
    onDragStart: I,
    onDragEnd: B,
    onDragOver: re,
    onDragEnter: V,
    onDragLeave: oe,
    onDrop: ne
  }), /* @__PURE__ */ L.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": x,
    "aria-selected": n,
    "aria-sort": N,
    tabIndex: u ? 0 : T,
    className: A,
    style: {
      ...ka(e, r, x),
      ...Fr(e, t)
    },
    onFocus: Ce,
    onClick: ye,
    onKeyDown: s ? ke : void 0,
    ...G,
    children: [K({
      column: e,
      sortDirection: S,
      priority: D,
      tabIndex: E
    }), $ && /* @__PURE__ */ L.jsx("div", {
      className: yf,
      onClick: wd,
      onPointerDown: X
    })]
  });
}
function Mi(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const Ef = "r1upfr807-0-0-beta-47", _a = `rdg-row ${Ef}`, Rf = "r190mhd37-0-0-beta-47", jo = "rdg-row-selected", Tf = "r139qu9m7-0-0-beta-47", kf = "rdg-top-summary-row", $f = "rdg-bottom-summary-row", Of = "h10tskcx7-0-0-beta-47", Da = `rdg-header-row ${Of}`;
function Pf({
  rowIdx: e,
  columns: t,
  onColumnResize: r,
  onColumnsReorder: n,
  sortColumns: o,
  onSortColumnsChange: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: c,
  selectCell: l,
  shouldFocusGrid: u,
  direction: g
}) {
  const f = ms(), h = [];
  for (let b = 0; b < t.length; b++) {
    const v = t[b], m = lt(v, a, {
      type: "HEADER"
    });
    m !== void 0 && (b += m - 1), h.push(/* @__PURE__ */ L.jsx(Sf, {
      column: v,
      colSpan: m,
      rowIdx: e,
      isCellSelected: c === v.idx,
      onColumnResize: r,
      onColumnsReorder: n,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: l,
      shouldFocusGrid: u && b === 0,
      direction: g,
      dragDropKey: f
    }, v.key));
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: De(Da, c === -1 && jo),
    children: h
  });
}
const If = /* @__PURE__ */ cr(Pf);
function Af({
  rowIdx: e,
  level: t,
  columns: r,
  selectedCellIdx: n,
  selectCell: o
}) {
  const i = [], a = /* @__PURE__ */ new Set();
  for (const c of r) {
    let {
      parent: l
    } = c;
    if (l !== void 0) {
      for (; l.level > t && l.parent !== void 0; )
        l = l.parent;
      if (l.level === t && !a.has(l)) {
        a.add(l);
        const {
          idx: u
        } = l;
        i.push(/* @__PURE__ */ L.jsx(cf, {
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
    className: Da,
    children: i
  });
}
const _f = /* @__PURE__ */ cr(Af), Df = "c6ra8a37-0-0-beta-47", Mf = `rdg-cell-copied ${Df}`, jf = "cq910m07-0-0-beta-47", Nf = `rdg-cell-dragged-over ${jf}`;
function Ff({
  column: e,
  colSpan: t,
  isCellSelected: r,
  isCopied: n,
  isDraggedOver: o,
  row: i,
  rowIdx: a,
  onClick: c,
  onDoubleClick: l,
  onContextMenu: u,
  onRowChange: g,
  selectCell: f,
  ...h
}) {
  const {
    tabIndex: b,
    childTabIndex: v,
    onFocus: m
  } = jn(r), {
    cellClass: p
  } = e, x = Mn(e, typeof p == "function" ? p(i) : p, n && Mf, o && Nf), T = Ea(e, i);
  function E(D) {
    f({
      rowIdx: a,
      idx: e.idx
    }, D);
  }
  function w(D) {
    if (c) {
      const N = Rr(D);
      if (c({
        row: i,
        column: e,
        selectCell: E
      }, N), N.isGridDefaultPrevented()) return;
    }
    E();
  }
  function y(D) {
    if (u) {
      const N = Rr(D);
      if (u({
        row: i,
        column: e,
        selectCell: E
      }, N), N.isGridDefaultPrevented()) return;
    }
    E();
  }
  function k(D) {
    if (l) {
      const N = Rr(D);
      if (l({
        row: i,
        column: e,
        selectCell: E
      }, N), N.isGridDefaultPrevented()) return;
    }
    E(!0);
  }
  function S(D) {
    g(e, D);
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": r,
    "aria-readonly": !T || void 0,
    tabIndex: b,
    className: x,
    style: Fr(e, t),
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
      tabIndex: v,
      onRowChange: S
    })
  });
}
const Bf = /* @__PURE__ */ cr(Ff);
function zf({
  className: e,
  rowIdx: t,
  gridRowStart: r,
  selectedCellIdx: n,
  isRowSelectionDisabled: o,
  isRowSelected: i,
  copiedCellIdx: a,
  draggedOverCellIdx: c,
  lastFrozenColumnIndex: l,
  row: u,
  viewportColumns: g,
  selectedCellEditor: f,
  onCellClick: h,
  onCellDoubleClick: b,
  onCellContextMenu: v,
  rowClass: m,
  setDraggedOverRowIdx: p,
  onMouseEnter: x,
  onRowChange: T,
  selectCell: E,
  ...w
}, y) {
  const k = et((s, $) => {
    T(s, t, $);
  });
  function S(s) {
    p == null || p(t), x == null || x(s);
  }
  e = De(_a, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, m == null ? void 0 : m(u, t), e, n === -1 && jo);
  const D = [];
  for (let s = 0; s < g.length; s++) {
    const $ = g[s], {
      idx: M
    } = $, A = lt($, l, {
      type: "ROW",
      row: u
    });
    A !== void 0 && (s += A - 1);
    const K = n === M;
    K && f ? D.push(f) : D.push(/* @__PURE__ */ L.jsx(Bf, {
      column: $,
      colSpan: A,
      row: u,
      rowIdx: t,
      isCopied: a === M,
      isDraggedOver: c === M,
      isCellSelected: K,
      onClick: h,
      onDoubleClick: b,
      onContextMenu: v,
      onRowChange: k,
      selectCell: E
    }, $.key));
  }
  const N = kt(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ L.jsx(Ld, {
    value: N,
    children: /* @__PURE__ */ L.jsx("div", {
      role: "row",
      ref: y,
      className: e,
      onMouseEnter: S,
      style: Ta(r),
      ...w,
      children: D
    })
  });
}
const Lf = /* @__PURE__ */ cr(/* @__PURE__ */ yo(zf));
function Vf(e, t) {
  return /* @__PURE__ */ L.jsx(Lf, {
    ...t
  }, e);
}
function Wf({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: r,
  setScrollToCellPosition: n
}) {
  const o = vt(null);
  return sr(() => {
    un(o.current);
  }), sr(() => {
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
const Uf = "a3ejtar7-0-0-beta-47", Hf = `rdg-sort-arrow ${Uf}`;
function Yf({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ L.jsxs(L.Fragment, {
    children: [Kf({
      sortDirection: e
    }), Gf({
      priority: t
    })]
  });
}
function Kf({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ L.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Hf,
    "aria-hidden": !0,
    children: /* @__PURE__ */ L.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Gf({
  priority: e
}) {
  return e;
}
const qf = "rnvodz57-0-0-beta-47", Xf = `rdg ${qf}`, Jf = "vlqv91k7-0-0-beta-47", Qf = `rdg-viewport-dragging ${Jf}`, Zf = "f1lsfrzw7-0-0-beta-47", ep = "f1cte0lg7-0-0-beta-47", tp = "s8wc6fl7-0-0-beta-47";
function rp({
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
    childTabIndex: c,
    onFocus: l
  } = jn(o), {
    summaryCellClass: u
  } = e, g = Mn(e, tp, typeof u == "function" ? u(r) : u);
  function f() {
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
    style: Fr(e, t),
    onClick: f,
    onFocus: l,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: r,
      tabIndex: c
    })
  });
}
const np = /* @__PURE__ */ cr(rp), op = "skuhp557-0-0-beta-47", ip = "tf8l5ub7-0-0-beta-47", ap = `rdg-summary-row ${op}`;
function sp({
  rowIdx: e,
  gridRowStart: t,
  row: r,
  viewportColumns: n,
  top: o,
  bottom: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: c,
  isTop: l,
  selectCell: u,
  "aria-rowindex": g
}) {
  const f = [];
  for (let h = 0; h < n.length; h++) {
    const b = n[h], v = lt(b, a, {
      type: "SUMMARY",
      row: r
    });
    v !== void 0 && (h += v - 1);
    const m = c === b.idx;
    f.push(/* @__PURE__ */ L.jsx(np, {
      column: b,
      colSpan: v,
      row: r,
      rowIdx: e,
      isCellSelected: m,
      selectCell: u
    }, b.key));
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "row",
    "aria-rowindex": g,
    className: De(_a, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, ap, l ? `${kf} ${ip}` : $f, c === -1 && jo),
    style: {
      ...Ta(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: f
  });
}
const ji = /* @__PURE__ */ cr(sp);
function cp(e, t) {
  const {
    columns: r,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i,
    rowKeyGetter: a,
    onRowsChange: c,
    rowHeight: l,
    headerRowHeight: u,
    summaryRowHeight: g,
    selectedRows: f,
    isRowSelectionDisabled: h,
    onSelectedRowsChange: b,
    sortColumns: v,
    onSortColumnsChange: m,
    defaultColumnOptions: p,
    onCellClick: x,
    onCellDoubleClick: T,
    onCellContextMenu: E,
    onCellKeyDown: w,
    onSelectedCellChange: y,
    onScroll: k,
    onColumnResize: S,
    onColumnsReorder: D,
    onFill: N,
    onCopy: s,
    onPaste: $,
    enableVirtualization: M,
    renderers: A,
    className: K,
    style: X,
    rowClass: ie,
    direction: ye,
    role: Ce,
    "aria-label": ke,
    "aria-labelledby": I,
    "aria-describedby": B,
    "aria-rowcount": re,
    "data-testid": ne
  } = e, V = Ia(), oe = Ce ?? "grid", G = l ?? 35, j = u ?? (typeof G == "number" ? G : 35), W = g ?? (typeof G == "number" ? G : 35), Z = (A == null ? void 0 : A.renderRow) ?? (V == null ? void 0 : V.renderRow) ?? Vf, Q = (A == null ? void 0 : A.renderSortStatus) ?? (V == null ? void 0 : V.renderSortStatus) ?? Yf, xe = (A == null ? void 0 : A.renderCheckbox) ?? (V == null ? void 0 : V.renderCheckbox) ?? Nd, F = (A == null ? void 0 : A.noRowsFallback) ?? (V == null ? void 0 : V.noRowsFallback), Pe = M ?? !0, U = ye ?? "ltr", [Me, ze] = Ye(0), [ot, Ke] = Ye(0), [Le, Bt] = Ye(() => /* @__PURE__ */ new Map()), [pt, it] = Ye(() => /* @__PURE__ */ new Map()), [ee, zt] = Ye(null), [Lt, Vt] = Ye(!1), [at, Nn] = Ye(void 0), [dt, dr] = Ye(null), Yt = dn((P) => Le.get(P.key) ?? pt.get(P.key) ?? P.width, [pt, Le]), [Ot, Br, zr, Fn] = Qd(), {
    columns: Be,
    colSpanColumns: Lr,
    lastFrozenColumnIndex: Ge,
    headerRowsCount: ft,
    colOverscanStartIdx: Vr,
    colOverscanEndIdx: Ct,
    templateColumns: fr,
    layoutCssVars: pr,
    totalFrozenColumnWidth: Wr
  } = Xd({
    rawColumns: r,
    defaultColumnOptions: p,
    getColumnWidth: Yt,
    scrollLeft: ot,
    viewportWidth: Br,
    enableVirtualization: Pe
  }), Wt = (o == null ? void 0 : o.length) ?? 0, xt = (i == null ? void 0 : i.length) ?? 0, Ur = Wt + xt, St = ft + Wt, Kt = ft - 1, He = -St, Gt = He + Kt, ht = n.length + xt - 1, [H, Pt] = Ye(() => ({
    idx: -1,
    rowIdx: He - 1,
    mode: "SELECT"
  })), hr = vt(H), Hr = vt(at), Yr = vt(-1), d = vt(null), O = vt(!1), z = oe === "treegrid", te = ft * j, le = Ur * W, ue = zr - te - le, se = f != null && b != null, ae = U === "rtl", Ve = ae ? "ArrowRight" : "ArrowLeft", Se = ae ? "ArrowLeft" : "ArrowRight", $e = re ?? ft + n.length + Ur, qe = kt(() => ({
    renderCheckbox: xe,
    renderSortStatus: Q
  }), [xe, Q]), It = kt(() => {
    let P = !1, _ = !1;
    if (a != null && f != null && f.size > 0) {
      for (const Y of n)
        if (f.has(a(Y)) ? P = !0 : _ = !0, P && _) break;
    }
    return {
      isRowSelected: P && !_,
      isIndeterminate: P && _
    };
  }, [n, f, a]), {
    rowOverscanStartIdx: Qe,
    rowOverscanEndIdx: Ne,
    totalRowHeight: Ut,
    gridTemplateRows: Bn,
    getRowTop: Kr,
    getRowHeight: Na,
    findRowIdx: No
  } = ef({
    rows: n,
    rowHeight: G,
    clientHeight: ue,
    scrollTop: Me,
    enableVirtualization: Pe
  }), At = Zd({
    columns: Be,
    colSpanColumns: Lr,
    colOverscanStartIdx: Vr,
    colOverscanEndIdx: Ct,
    lastFrozenColumnIndex: Ge,
    rowOverscanStartIdx: Qe,
    rowOverscanEndIdx: Ne,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: Fa,
    handleColumnResize: Ba
  } = Jd(Be, At, fr, Ot, Br, Le, pt, Bt, it, S), za = z ? -1 : 0, qt = Be.length - 1, zn = Wn(H), Gr = Vo(H), La = j + Ut + le + Fn, Va = et(Ba), Wa = et(D), Ua = et(m), Ha = et(x), Ya = et(T), Ka = et(E), Ga = et(Ja), qa = et(Bo), Xa = et(qr), Ln = et(gr), Fo = et(({
    idx: P,
    rowIdx: _
  }) => {
    gr({
      rowIdx: He + _ - 1,
      idx: P
    });
  });
  sr(() => {
    if (!zn || no(H, hr.current)) {
      hr.current = H;
      return;
    }
    hr.current = H, H.idx === -1 && (d.current.focus({
      preventScroll: !0
    }), un(d.current));
  }), sr(() => {
    O.current && (O.current = !1, Uo());
  }), hs(t, () => ({
    element: Ot.current,
    scrollToCell({
      idx: P,
      rowIdx: _
    }) {
      const Y = P !== void 0 && P > Ge && P < Be.length ? P : void 0, J = _ !== void 0 && Xt(_) ? _ : void 0;
      (Y !== void 0 || J !== void 0) && dr({
        idx: Y,
        rowIdx: J
      });
    },
    selectCell: gr
  }));
  const Vn = dn((P) => {
    Nn(P), Hr.current = P;
  }, []);
  function Ja(P) {
    if (!b) return;
    ro(a);
    const _ = new Set(f);
    for (const Y of n) {
      if ((h == null ? void 0 : h(Y)) === !0) continue;
      const J = a(Y);
      P.checked ? _.add(J) : _.delete(J);
    }
    b(_);
  }
  function Bo(P) {
    if (!b) return;
    ro(a);
    const {
      row: _,
      checked: Y,
      isShiftClick: J
    } = P;
    if ((h == null ? void 0 : h(_)) === !0) return;
    const ce = new Set(f), be = a(_), Oe = Yr.current, Ie = n.indexOf(_);
    if (Yr.current = Ie, Y ? ce.add(be) : ce.delete(be), J && Oe !== -1 && Oe !== Ie && Oe < n.length) {
      const Ze = _d(Ie - Oe);
      for (let Xe = Oe + Ze; Xe !== Ie; Xe += Ze) {
        const gt = n[Xe];
        (h == null ? void 0 : h(gt)) !== !0 && (Y ? ce.add(a(gt)) : ce.delete(a(gt)));
      }
    }
    b(ce);
  }
  function Qa(P) {
    var Ie;
    const {
      idx: _,
      rowIdx: Y,
      mode: J
    } = H;
    if (J === "EDIT") return;
    if (w && Xt(Y)) {
      const Ze = n[Y], Xe = Rr(P);
      if (w({
        mode: "SELECT",
        row: Ze,
        column: Be[_],
        rowIdx: Y,
        selectCell: gr
      }, Xe), Xe.isGridDefaultPrevented()) return;
    }
    if (!(P.target instanceof Element)) return;
    const ce = P.target.closest(".rdg-cell") !== null, be = z && P.target === d.current;
    if (!ce && !be) return;
    const {
      keyCode: Oe
    } = P;
    if (Gr && ($ != null || s != null) && mo(P)) {
      if (Oe === 67) {
        if (((Ie = window.getSelection()) == null ? void 0 : Ie.isCollapsed) === !1) return;
        es();
        return;
      }
      if (Oe === 86) {
        ts();
        return;
      }
    }
    switch (P.key) {
      case "Escape":
        zt(null);
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
        Wo(P);
        break;
      default:
        rs(P);
        break;
    }
  }
  function Za(P) {
    const {
      scrollTop: _,
      scrollLeft: Y
    } = P.currentTarget;
    fn(() => {
      ze(_), Ke(Dd(Y));
    }), k == null || k(P);
  }
  function qr(P, _, Y) {
    if (typeof c != "function" || Y === n[_]) return;
    const J = [...n];
    J[_] = Y, c(J, {
      indexes: [_],
      column: P
    });
  }
  function zo() {
    H.mode === "EDIT" && qr(Be[H.idx], H.rowIdx, H.row);
  }
  function es() {
    const {
      idx: P,
      rowIdx: _
    } = H, Y = n[_], J = Be[P].key;
    zt({
      row: Y,
      columnKey: J
    }), s == null || s({
      sourceRow: Y,
      sourceColumnKey: J
    });
  }
  function ts() {
    if (!$ || !c || ee === null || !Xr(H))
      return;
    const {
      idx: P,
      rowIdx: _
    } = H, Y = Be[P], J = n[_], ce = $({
      sourceRow: ee.row,
      sourceColumnKey: ee.columnKey,
      targetRow: J,
      targetColumnKey: Y.key
    });
    qr(Y, _, ce);
  }
  function rs(P) {
    if (!Gr) return;
    const _ = n[H.rowIdx], {
      key: Y,
      shiftKey: J
    } = P;
    if (se && J && Y === " ") {
      ro(a);
      const ce = a(_);
      Bo({
        row: _,
        checked: !f.has(ce),
        isShiftClick: !1
      }), P.preventDefault();
      return;
    }
    Xr(H) && xd(P) && Pt(({
      idx: ce,
      rowIdx: be
    }) => ({
      idx: ce,
      rowIdx: be,
      mode: "EDIT",
      row: _,
      originalRow: _
    }));
  }
  function Lo(P) {
    return P >= za && P <= qt;
  }
  function Xt(P) {
    return P >= 0 && P < n.length;
  }
  function Wn({
    idx: P,
    rowIdx: _
  }) {
    return _ >= He && _ <= ht && Lo(P);
  }
  function ns({
    idx: P,
    rowIdx: _
  }) {
    return Xt(_) && P >= 0 && P <= qt;
  }
  function Vo({
    idx: P,
    rowIdx: _
  }) {
    return Xt(_) && Lo(P);
  }
  function Xr(P) {
    return ns(P) && Td({
      columns: Be,
      rows: n,
      selectedPosition: P
    });
  }
  function gr(P, _) {
    if (!Wn(P)) return;
    zo();
    const Y = n[P.rowIdx], J = no(H, P);
    _ && Xr(P) ? Pt({
      ...P,
      mode: "EDIT",
      row: Y,
      originalRow: Y
    }) : J ? un(Ni(Ot.current)) : (O.current = !0, Pt({
      ...P,
      mode: "SELECT"
    })), y && !J && y({
      rowIdx: P.rowIdx,
      row: Y,
      column: Be[P.idx]
    });
  }
  function os(P, _, Y) {
    const {
      idx: J,
      rowIdx: ce
    } = H, be = zn && J === -1;
    switch (P) {
      case "ArrowUp":
        return {
          idx: J,
          rowIdx: ce - 1
        };
      case "ArrowDown":
        return {
          idx: J,
          rowIdx: ce + 1
        };
      case Ve:
        return {
          idx: J - 1,
          rowIdx: ce
        };
      case Se:
        return {
          idx: J + 1,
          rowIdx: ce
        };
      case "Tab":
        return {
          idx: J + (Y ? -1 : 1),
          rowIdx: ce
        };
      case "Home":
        return be ? {
          idx: J,
          rowIdx: He
        } : {
          idx: 0,
          rowIdx: _ ? He : ce
        };
      case "End":
        return be ? {
          idx: J,
          rowIdx: ht
        } : {
          idx: qt,
          rowIdx: _ ? ht : ce
        };
      case "PageUp": {
        if (H.rowIdx === He) return H;
        const Oe = Kr(ce) + Na(ce) - ue;
        return {
          idx: J,
          rowIdx: Oe > 0 ? No(Oe) : 0
        };
      }
      case "PageDown": {
        if (H.rowIdx >= n.length) return H;
        const Oe = Kr(ce) + ue;
        return {
          idx: J,
          rowIdx: Oe < Ut ? No(Oe) : n.length - 1
        };
      }
      default:
        return H;
    }
  }
  function Wo(P) {
    const {
      key: _,
      shiftKey: Y
    } = P;
    let J = "NONE";
    if (_ === "Tab") {
      if (Od({
        shiftKey: Y,
        maxColIdx: qt,
        minRowIdx: He,
        maxRowIdx: ht,
        selectedPosition: H
      })) {
        zo();
        return;
      }
      J = "CHANGE_ROW";
    }
    P.preventDefault();
    const ce = mo(P), be = os(_, ce, Y);
    if (no(H, be)) return;
    const Oe = $d({
      moveUp: _ === "ArrowUp",
      moveNext: _ === Se || _ === "Tab" && !Y,
      columns: Be,
      colSpanColumns: Lr,
      rows: n,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: He,
      mainHeaderRowIdx: Gt,
      maxRowIdx: ht,
      lastFrozenColumnIndex: Ge,
      cellNavigationMode: J,
      currentPosition: H,
      nextPosition: be,
      isCellWithinBounds: Wn
    });
    gr(Oe);
  }
  function is(P) {
    if (at === void 0) return;
    const {
      rowIdx: _
    } = H;
    return (_ < at ? _ < P && P <= at : _ > P && P >= at) ? H.idx : void 0;
  }
  function Uo() {
    const P = Ni(Ot.current);
    if (P === null) return;
    un(P), (P.querySelector('[tabindex="0"]') ?? P).focus({
      preventScroll: !0
    });
  }
  function as() {
    if (N == null || H.mode === "EDIT" || !Vo(H))
      return;
    const {
      idx: P,
      rowIdx: _
    } = H, Y = Be[P];
    if (Y.renderEditCell == null || Y.editable === !1)
      return;
    const J = Yt(Y);
    return /* @__PURE__ */ L.jsx(of, {
      gridRowStart: St + _ + 1,
      rows: n,
      column: Y,
      columnWidth: J,
      maxColIdx: qt,
      isLastRow: _ === ht,
      selectedPosition: H,
      isCellEditable: Xr,
      latestDraggedOverRowIdx: Hr,
      onRowsChange: c,
      onClick: Uo,
      onFill: N,
      setDragging: Vt,
      setDraggedOverRowIdx: Vn
    });
  }
  function ss(P) {
    if (H.rowIdx !== P || H.mode === "SELECT") return;
    const {
      idx: _,
      row: Y
    } = H, J = Be[_], ce = lt(J, Ge, {
      type: "ROW",
      row: Y
    }), be = (Ie) => {
      O.current = Ie, Pt(({
        idx: Ze,
        rowIdx: Xe
      }) => ({
        idx: Ze,
        rowIdx: Xe,
        mode: "SELECT"
      }));
    }, Oe = (Ie, Ze, Xe) => {
      Ze ? fn(() => {
        qr(J, H.rowIdx, Ie), be(Xe);
      }) : Pt((gt) => ({
        ...gt,
        row: Ie
      }));
    };
    return n[H.rowIdx] !== H.originalRow && be(!1), /* @__PURE__ */ L.jsx(sf, {
      column: J,
      colSpan: ce,
      row: Y,
      rowIdx: P,
      onRowChange: Oe,
      closeEditor: be,
      onKeyDown: w,
      navigate: Wo
    }, J.key);
  }
  function mr(P) {
    const _ = H.idx === -1 ? void 0 : Be[H.idx];
    return _ !== void 0 && H.rowIdx === P && !At.includes(_) ? H.idx > Ct ? [...At, _] : [...At.slice(0, Ge + 1), _, ...At.slice(Ge + 1)] : At;
  }
  function cs() {
    const P = [], {
      idx: _,
      rowIdx: Y
    } = H, J = Gr && Y < Qe ? Qe - 1 : Qe, ce = Gr && Y > Ne ? Ne + 1 : Ne;
    for (let be = J; be <= ce; be++) {
      const Oe = be === Qe - 1 || be === Ne + 1, Ie = Oe ? Y : be;
      let Ze = At;
      const Xe = _ === -1 ? void 0 : Be[_];
      Xe !== void 0 && (Oe ? Ze = [Xe] : Ze = mr(Ie));
      const gt = n[Ie], ls = St + Ie + 1;
      let Un = Ie, Hn = !1;
      typeof a == "function" && (Un = a(gt), Hn = (f == null ? void 0 : f.has(Un)) ?? !1), P.push(Z(Un, {
        "aria-rowindex": St + Ie + 1,
        "aria-selected": se ? Hn : void 0,
        rowIdx: Ie,
        row: gt,
        viewportColumns: Ze,
        isRowSelectionDisabled: (h == null ? void 0 : h(gt)) ?? !1,
        isRowSelected: Hn,
        onCellClick: Ha,
        onCellDoubleClick: Ya,
        onCellContextMenu: Ka,
        rowClass: ie,
        gridRowStart: ls,
        copiedCellIdx: ee !== null && ee.row === gt ? Be.findIndex((us) => us.key === ee.columnKey) : void 0,
        selectedCellIdx: Y === Ie ? _ : void 0,
        draggedOverCellIdx: is(Ie),
        setDraggedOverRowIdx: Lt ? Vn : void 0,
        lastFrozenColumnIndex: Ge,
        onRowChange: Xa,
        selectCell: Ln,
        selectedCellEditor: ss(Ie)
      }));
    }
    return P;
  }
  (H.idx > qt || H.rowIdx > ht) && (Pt({
    idx: -1,
    rowIdx: He - 1,
    mode: "SELECT"
  }), Vn(void 0));
  let Jr = `repeat(${ft}, ${j}px)`;
  Wt > 0 && (Jr += ` repeat(${Wt}, ${W}px)`), n.length > 0 && (Jr += Bn), xt > 0 && (Jr += ` repeat(${xt}, ${W}px)`);
  const Ho = H.idx === -1 && H.rowIdx !== He - 1;
  return /* @__PURE__ */ L.jsxs("div", {
    role: oe,
    "aria-label": ke,
    "aria-labelledby": I,
    "aria-describedby": B,
    "aria-multiselectable": se ? !0 : void 0,
    "aria-colcount": Be.length,
    "aria-rowcount": $e,
    className: De(Xf, K, Lt && Qf),
    style: {
      ...X,
      scrollPaddingInlineStart: H.idx > Ge || (dt == null ? void 0 : dt.idx) !== void 0 ? `${Wr}px` : void 0,
      scrollPaddingBlock: Xt(H.rowIdx) || (dt == null ? void 0 : dt.rowIdx) !== void 0 ? `${te + Wt * W}px ${xt * W}px` : void 0,
      gridTemplateColumns: Fa,
      gridTemplateRows: Jr,
      "--rdg-header-row-height": `${j}px`,
      "--rdg-scroll-height": `${La}px`,
      ...pr
    },
    dir: U,
    ref: Ot,
    onScroll: Za,
    onKeyDown: Qa,
    "data-testid": ne,
    children: [/* @__PURE__ */ L.jsxs(Bd, {
      value: qe,
      children: [/* @__PURE__ */ L.jsx(Kd, {
        value: Ga,
        children: /* @__PURE__ */ L.jsxs(Hd, {
          value: It,
          children: [Array.from({
            length: Kt
          }, (P, _) => /* @__PURE__ */ L.jsx(_f, {
            rowIdx: _ + 1,
            level: -Kt + _,
            columns: mr(He + _),
            selectedCellIdx: H.rowIdx === He + _ ? H.idx : void 0,
            selectCell: Fo
          }, _)), /* @__PURE__ */ L.jsx(If, {
            rowIdx: ft,
            columns: mr(Gt),
            onColumnResize: Va,
            onColumnsReorder: Wa,
            sortColumns: v,
            onSortColumnsChange: Ua,
            lastFrozenColumnIndex: Ge,
            selectedCellIdx: H.rowIdx === Gt ? H.idx : void 0,
            selectCell: Fo,
            shouldFocusGrid: !zn,
            direction: U
          })]
        })
      }), n.length === 0 && F ? F : /* @__PURE__ */ L.jsxs(L.Fragment, {
        children: [o == null ? void 0 : o.map((P, _) => {
          const Y = ft + 1 + _, J = Gt + 1 + _, ce = H.rowIdx === J, be = te + W * _;
          return /* @__PURE__ */ L.jsx(ji, {
            "aria-rowindex": Y,
            rowIdx: J,
            gridRowStart: Y,
            row: P,
            top: be,
            bottom: void 0,
            viewportColumns: mr(J),
            lastFrozenColumnIndex: Ge,
            selectedCellIdx: ce ? H.idx : void 0,
            isTop: !0,
            selectCell: Ln
          }, _);
        }), /* @__PURE__ */ L.jsx(Wd, {
          value: qa,
          children: cs()
        }), i == null ? void 0 : i.map((P, _) => {
          const Y = St + n.length + _ + 1, J = n.length + _, ce = H.rowIdx === J, be = ue > Ut ? zr - W * (i.length - _) : void 0, Oe = be === void 0 ? W * (i.length - 1 - _) : void 0;
          return /* @__PURE__ */ L.jsx(ji, {
            "aria-rowindex": $e - xt + _ + 1,
            rowIdx: J,
            gridRowStart: Y,
            row: P,
            top: be,
            bottom: Oe,
            viewportColumns: mr(J),
            lastFrozenColumnIndex: Ge,
            selectedCellIdx: ce ? H.idx : void 0,
            isTop: !1,
            selectCell: Ln
          }, _);
        })]
      })]
    }), as(), Rd(At), z && /* @__PURE__ */ L.jsx("div", {
      ref: d,
      tabIndex: Ho ? 0 : -1,
      className: De(Zf, Ho && [Rf, Ge !== -1 && Tf], !Xt(H.rowIdx) && ep),
      style: {
        gridRowStart: H.rowIdx + St + 1
      }
    }), dt !== null && /* @__PURE__ */ L.jsx(Wf, {
      scrollToPosition: dt,
      setScrollToCellPosition: dr,
      gridElement: Ot.current
    })]
  });
}
function Ni(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function no(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const lp = /* @__PURE__ */ yo(cp), up = {
  "--rdg-color": Re.gray800,
  "--rdg-header-color": Re.gray700,
  "--rdg-border-color": Re.gray400,
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
}, dp = Dt.div`
  width: 100%;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${Re.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${Re.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color${Re.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${Re.gray200};
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
`, Tp = Tt.memo(({ theme: e, ...t }) => {
  const r = dn(
    (n, o) => o === 0 ? "first-row" : o === t.rows.length - 1 ? "last-row" : "",
    [t.rows]
  );
  return /* @__PURE__ */ L.jsx(dp, { children: /* @__PURE__ */ L.jsx(
    lp,
    {
      ...t,
      rowClass: r,
      rowHeight: 50,
      style: { ...up, ...e ?? {} }
    }
  ) });
});
function fp(e) {
  return ur("MuiIconButton", e);
}
const pp = jr("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), hp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${Te(n)}`, o && `edge${Te(o)}`, `size${Te(i)}`]
  };
  return Sn(a, fp, t);
}, gp = Ft(Mo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${Te(r.color)}`], r.edge && t[`edge${Te(r.edge)}`], t[`size${Te(r.size)}`]];
  }
})(yn(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), yn(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(go()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(go()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _t((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${pp.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Ma = /* @__PURE__ */ q.forwardRef(function(t, r) {
  const n = Nr({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: g = "medium",
    ...f
  } = n, h = {
    ...n,
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: g
  }, b = hp(h);
  return /* @__PURE__ */ L.jsx(gp, {
    className: De(b.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: r,
    ...f,
    ownerState: h,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Ma.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: ua(C.node, (e) => q.Children.toArray(e.children).some((r) => /* @__PURE__ */ q.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
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
   * @default 'default'
   */
  color: C.oneOfType([C.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), C.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: C.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["small", "medium", "large"]), C.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
const kp = Dt(Ma)`
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
        background: ${({ $hoverBackground: e }) => e ?? Re.gray300};
    }

    &:active {
        background: ${({ $activeBackground: e }) => e ?? Re.gray400};
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
`, mp = Dt.div`
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
        background: ${Re.gray800};
        ${({ $color: e, theme: t }) => {
  switch (e) {
    case "primary":
      return `background: ${Re.gray100};`;
    case "secondary":
      return `background: ${Re.primary500};`;
    case "error":
      return `background: ${Re.red500};`;
    default:
      return `background: ${Re.gray800};`;
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
`, $p = Tt.memo(({ color: e }) => /* @__PURE__ */ L.jsxs(mp, { $color: e, children: [
  /* @__PURE__ */ L.jsx("div", {}),
  /* @__PURE__ */ L.jsx("div", {}),
  /* @__PURE__ */ L.jsx("div", {}),
  /* @__PURE__ */ L.jsx("div", {})
] }));
function yp(e) {
  return ur("MuiSvgIcon", e);
}
jr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const bp = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Te(t)}`, `fontSize${Te(r)}`]
  };
  return Sn(o, yp, n);
}, vp = Ft("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Te(r.color)}`], t[`fontSize${Te(r.fontSize)}`]];
  }
})(yn(({
  theme: e
}) => {
  var t, r, n, o, i, a, c, l, u, g, f, h, b, v;
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
          fontSize: ((l = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem"
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
          color: (h = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : v.disabled
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
})), Ir = /* @__PURE__ */ q.forwardRef(function(t, r) {
  const n = Nr({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: g = !1,
    titleAccess: f,
    viewBox: h = "0 0 24 24",
    ...b
  } = n, v = /* @__PURE__ */ q.isValidElement(o) && o.type === "svg", m = {
    ...n,
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: g,
    viewBox: h,
    hasSvgAsChild: v
  }, p = {};
  g || (p.viewBox = h);
  const x = bp(m);
  return /* @__PURE__ */ L.jsxs(vp, {
    as: c,
    className: De(x.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r,
    ...p,
    ...b,
    ...v && o.props,
    ownerState: m,
    children: [v ? o.props.children : o, f ? /* @__PURE__ */ L.jsx("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ir.propTypes = {
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
Ir && (Ir.muiName = "SvgIcon");
function ja(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ L.jsx(Ir, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ir.muiName, /* @__PURE__ */ q.memo(/* @__PURE__ */ q.forwardRef(r));
}
const wp = ja(/* @__PURE__ */ L.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), Cp = Dt(Sa)`
    border: 1px solid ${Re.red600};
    background: ${Re.red50};
    color: ${Re.red600};
`, Op = (e) => /* @__PURE__ */ L.jsx(Cp, { ...e, startIcon: /* @__PURE__ */ L.jsx(wp, {}) }), xp = ja(/* @__PURE__ */ L.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
}), "AddCircle"), Pp = (e) => /* @__PURE__ */ L.jsx(Sa, { $level: "secondary", ...e, startIcon: /* @__PURE__ */ L.jsx(xp, {}) });
export {
  Pp as AddButton,
  Sa as Button,
  Tp as DataGrid,
  Op as DeleteButton,
  kp as IconButton,
  $p as Loader,
  Cp as StyledButton,
  mp as StyledLoader,
  Re as taktikTheme
};
