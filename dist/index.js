var fc = Object.defineProperty;
var pc = (e, t, r) => t in e ? fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var $r = (e, t, r) => pc(e, typeof t != "symbol" ? t + "" : t, r);
import * as Y from "react";
import Mt, { forwardRef as Vo, useContext as Pi, Children as hc, isValidElement as Cn, cloneElement as xn, createContext as Xr, useState as Ke, useCallback as $n, useRef as Tt, useMemo as ht, useImperativeHandle as gc, useEffect as Ho, useLayoutEffect as mc, memo as vr, useId as yc } from "react";
import { flushSync as Pn } from "react-dom";
function In() {
  return In = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, In.apply(null, arguments);
}
function Ii(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vc = /* @__PURE__ */ Ii(
  function(e) {
    return bc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wc = !1;
function Cc(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Sc = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !wc : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xc(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = Cc(o);
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
}(), Ge = "-ms-", Dn = "-moz-", ge = "-webkit-", Di = "comm", Uo = "rule", Go = "decl", Ec = "@import", Mi = "@keyframes", Tc = "@layer", Rc = Math.abs, Bn = String.fromCharCode, kc = Object.assign;
function Oc(e, t) {
  return Ue(e, 0) ^ 45 ? (((t << 2 ^ Ue(e, 0)) << 2 ^ Ue(e, 1)) << 2 ^ Ue(e, 2)) << 2 ^ Ue(e, 3) : 0;
}
function _i(e) {
  return e.trim();
}
function $c(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, r) {
  return e.replace(t, r);
}
function Io(e, t) {
  return e.indexOf(t);
}
function Ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lr(e, t, r) {
  return e.slice(t, r);
}
function St(e) {
  return e.length;
}
function Ko(e) {
  return e.length;
}
function yn(e, t) {
  return t.push(e), e;
}
function Pc(e, t) {
  return e.map(t).join("");
}
var Ln = 1, mr = 1, Ai = 0, tt = 0, Be = 0, wr = "";
function Wn(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Ln, column: mr, length: i, return: "" };
}
function Pr(e, t) {
  return kc(Wn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ic() {
  return Be;
}
function Dc() {
  return Be = tt > 0 ? Ue(wr, --tt) : 0, mr--, Be === 10 && (mr = 1, Ln--), Be;
}
function it() {
  return Be = tt < Ai ? Ue(wr, tt++) : 0, mr++, Be === 10 && (mr = 1, Ln++), Be;
}
function Rt() {
  return Ue(wr, tt);
}
function Sn() {
  return tt;
}
function Zr(e, t) {
  return Lr(wr, e, t);
}
function Wr(e) {
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
function Ni(e) {
  return Ln = mr = 1, Ai = St(wr = e), tt = 0, [];
}
function Fi(e) {
  return wr = "", e;
}
function En(e) {
  return _i(Zr(tt - 1, Do(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Mc(e) {
  for (; (Be = Rt()) && Be < 33; )
    it();
  return Wr(e) > 2 || Wr(Be) > 3 ? "" : " ";
}
function _c(e, t) {
  for (; --t && it() && !(Be < 48 || Be > 102 || Be > 57 && Be < 65 || Be > 70 && Be < 97); )
    ;
  return Zr(e, Sn() + (t < 6 && Rt() == 32 && it() == 32));
}
function Do(e) {
  for (; it(); )
    switch (Be) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Do(Be);
        break;
      case 40:
        e === 41 && Do(e);
        break;
      case 92:
        it();
        break;
    }
  return tt;
}
function Ac(e, t) {
  for (; it() && e + Be !== 57; )
    if (e + Be === 84 && Rt() === 47)
      break;
  return "/*" + Zr(t, tt - 1) + "*" + Bn(e === 47 ? e : it());
}
function Nc(e) {
  for (; !Wr(Rt()); )
    it();
  return Zr(e, tt);
}
function Fc(e) {
  return Fi(Tn("", null, null, null, [""], e = Ni(e), 0, [0], e));
}
function Tn(e, t, r, n, o, a, i, s, l) {
  for (var u = 0, f = 0, d = i, h = 0, v = 0, w = 0, m = 1, g = 1, x = 1, R = 0, S = "", C = o, y = a, O = n, E = S; g; )
    switch (w = R, R = it()) {
      case 40:
        if (w != 108 && Ue(E, d - 1) == 58) {
          Io(E += me(En(R), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += En(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Mc(w);
        break;
      case 92:
        E += _c(Sn() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            yn(jc(Ac(it(), Sn()), t, r), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * m:
        s[u++] = St(E) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            g = 0;
          case 59 + f:
            x == -1 && (E = me(E, /\f/g, "")), v > 0 && St(E) - d && yn(v > 32 ? Ca(E + ";", n, r, d - 1) : Ca(me(E, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (yn(O = wa(E, t, r, u, f, o, s, S, C = [], y = [], d), a), R === 123)
              if (f === 0)
                Tn(E, t, O, O, C, a, d, s, y);
              else
                switch (h === 99 && Ue(E, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Tn(e, O, O, n && yn(wa(e, O, O, 0, 0, o, s, S, o, C = [], d), y), o, y, d, s, n ? C : y);
                    break;
                  default:
                    Tn(E, O, O, O, [""], y, 0, s, y);
                }
        }
        u = f = v = 0, m = x = 1, S = E = "", d = i;
        break;
      case 58:
        d = 1 + St(E), v = w;
      default:
        if (m < 1) {
          if (R == 123)
            --m;
          else if (R == 125 && m++ == 0 && Dc() == 125)
            continue;
        }
        switch (E += Bn(R), R * m) {
          case 38:
            x = f > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[u++] = (St(E) - 1) * x, x = 1;
            break;
          case 64:
            Rt() === 45 && (E += En(it())), h = Rt(), f = d = St(S = E += Nc(Sn())), R++;
            break;
          case 45:
            w === 45 && St(E) == 2 && (m = 0);
        }
    }
  return a;
}
function wa(e, t, r, n, o, a, i, s, l, u, f) {
  for (var d = o - 1, h = o === 0 ? a : [""], v = Ko(h), w = 0, m = 0, g = 0; w < n; ++w)
    for (var x = 0, R = Lr(e, d + 1, d = Rc(m = i[w])), S = e; x < v; ++x)
      (S = _i(m > 0 ? h[x] + " " + R : me(R, /&\f/g, h[x]))) && (l[g++] = S);
  return Wn(e, t, r, o === 0 ? Uo : s, l, u, f);
}
function jc(e, t, r) {
  return Wn(e, t, r, Di, Bn(Ic()), Lr(e, 2, -2), 0);
}
function Ca(e, t, r, n) {
  return Wn(e, t, r, Go, Lr(e, 0, n), Lr(e, n + 1, -1), n);
}
function hr(e, t) {
  for (var r = "", n = Ko(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function zc(e, t, r, n) {
  switch (e.type) {
    case Tc:
      if (e.children.length) break;
    case Ec:
    case Go:
      return e.return = e.return || e.value;
    case Di:
      return "";
    case Mi:
      return e.return = e.value + "{" + hr(e.children, n) + "}";
    case Uo:
      e.value = e.props.join(",");
  }
  return St(r = hr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Bc(e) {
  var t = Ko(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function Lc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Wc = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Rt(), o === 38 && a === 12 && (r[n] = 1), !Wr(a); )
    it();
  return Zr(t, tt);
}, Yc = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Wr(o)) {
      case 0:
        o === 38 && Rt() === 12 && (r[n] = 1), t[n] += Wc(tt - 1, r, n);
        break;
      case 2:
        t[n] += En(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Rt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Bn(o);
    }
  while (o = it());
  return t;
}, Vc = function(t, r) {
  return Fi(Yc(Ni(t), r));
}, xa = /* @__PURE__ */ new WeakMap(), Hc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !xa.get(n)) && !o) {
      xa.set(t, !0);
      for (var a = [], i = Vc(r, a), s = n.props, l = 0, u = 0; l < i.length; l++)
        for (var f = 0; f < s.length; f++, u++)
          t.props[u] = a[l] ? i[l].replace(/&\f/g, s[f]) : s[f] + " " + i[l];
    }
  }
}, Uc = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ji(e, t) {
  switch (Oc(e, t)) {
    case 5103:
      return ge + "print-" + e + e;
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
      return ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + Dn + e + Ge + e + e;
    case 6828:
    case 4268:
      return ge + e + Ge + e + e;
    case 6165:
      return ge + e + Ge + "flex-" + e + e;
    case 5187:
      return ge + e + me(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + Ge + "flex-$1$2") + e;
    case 5443:
      return ge + e + Ge + "flex-item-" + me(e, /flex-|-self/, "") + e;
    case 4675:
      return ge + e + Ge + "flex-line-pack" + me(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ge + e + Ge + me(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + Ge + me(e, "basis", "preferred-size") + e;
    case 6060:
      return ge + "box-" + me(e, "-grow", "") + ge + e + Ge + me(e, "grow", "positive") + e;
    case 4554:
      return ge + me(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return me(me(me(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return me(me(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + Ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
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
      if (St(e) - 1 - t > 6) switch (Ue(e, t + 1)) {
        case 109:
          if (Ue(e, t + 4) !== 45) break;
        case 102:
          return me(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Dn + (Ue(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Io(e, "stretch") ? ji(me(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ue(e, t + 1) !== 115) break;
    case 6444:
      switch (Ue(e, St(e) - 3 - (~Io(e, "!important") && 10))) {
        case 107:
          return me(e, ":", ":" + ge) + e;
        case 101:
          return me(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (Ue(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + Ge + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ue(e, t + 11)) {
        case 114:
          return ge + e + Ge + me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + Ge + me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + Ge + me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + Ge + e + e;
  }
  return e;
}
var Gc = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Go:
      t.return = ji(t.value, t.length);
      break;
    case Mi:
      return hr([Pr(t, {
        value: me(t.value, "@", "@" + ge)
      })], o);
    case Uo:
      if (t.length) return Pc(t.props, function(a) {
        switch ($c(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return hr([Pr(t, {
              props: [me(a, /:(read-\w+)/, ":" + Dn + "$1")]
            })], o);
          case "::placeholder":
            return hr([Pr(t, {
              props: [me(a, /:(plac\w+)/, ":" + ge + "input-$1")]
            }), Pr(t, {
              props: [me(a, /:(plac\w+)/, ":" + Dn + "$1")]
            }), Pr(t, {
              props: [me(a, /:(plac\w+)/, Ge + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Kc = [Gc], qc = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var g = m.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Kc, a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(m) {
      for (var g = m.getAttribute("data-emotion").split(" "), x = 1; x < g.length; x++)
        a[g[x]] = !0;
      s.push(m);
    }
  );
  var l, u = [Hc, Uc];
  {
    var f, d = [zc, Lc(function(m) {
      f.insert(m);
    })], h = Bc(u.concat(o, d)), v = function(g) {
      return hr(Fc(g), h);
    };
    l = function(g, x, R, S) {
      f = R, v(g ? g + "{" + x.styles + "}" : x.styles), S && (w.inserted[x.name] = !0);
    };
  }
  var w = {
    key: r,
    sheet: new Sc({
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
    insert: l
  };
  return w.sheet.hydrate(s), w;
};
function Xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mo = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function Zc() {
  if (Sa) return ye;
  Sa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function S(y) {
    if (typeof y == "object" && y !== null) {
      var O = y.$$typeof;
      switch (O) {
        case t:
          switch (y = y.type, y) {
            case l:
            case u:
            case n:
            case a:
            case o:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case f:
                case w:
                case v:
                case i:
                  return y;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function C(y) {
    return S(y) === u;
  }
  return ye.AsyncMode = l, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = i, ye.Element = t, ye.ForwardRef = f, ye.Fragment = n, ye.Lazy = w, ye.Memo = v, ye.Portal = r, ye.Profiler = a, ye.StrictMode = o, ye.Suspense = d, ye.isAsyncMode = function(y) {
    return C(y) || S(y) === l;
  }, ye.isConcurrentMode = C, ye.isContextConsumer = function(y) {
    return S(y) === s;
  }, ye.isContextProvider = function(y) {
    return S(y) === i;
  }, ye.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, ye.isForwardRef = function(y) {
    return S(y) === f;
  }, ye.isFragment = function(y) {
    return S(y) === n;
  }, ye.isLazy = function(y) {
    return S(y) === w;
  }, ye.isMemo = function(y) {
    return S(y) === v;
  }, ye.isPortal = function(y) {
    return S(y) === r;
  }, ye.isProfiler = function(y) {
    return S(y) === a;
  }, ye.isStrictMode = function(y) {
    return S(y) === o;
  }, ye.isSuspense = function(y) {
    return S(y) === d;
  }, ye.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === a || y === o || y === d || y === h || typeof y == "object" && y !== null && (y.$$typeof === w || y.$$typeof === v || y.$$typeof === i || y.$$typeof === s || y.$$typeof === f || y.$$typeof === g || y.$$typeof === x || y.$$typeof === R || y.$$typeof === m);
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
var Ea;
function Qc() {
  return Ea || (Ea = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === u || j === a || j === o || j === d || j === h || typeof j == "object" && j !== null && (j.$$typeof === w || j.$$typeof === v || j.$$typeof === i || j.$$typeof === s || j.$$typeof === f || j.$$typeof === g || j.$$typeof === x || j.$$typeof === R || j.$$typeof === m);
    }
    function C(j) {
      if (typeof j == "object" && j !== null) {
        var Me = j.$$typeof;
        switch (Me) {
          case t:
            var H = j.type;
            switch (H) {
              case l:
              case u:
              case n:
              case a:
              case o:
              case d:
                return H;
              default:
                var Fe = H && H.$$typeof;
                switch (Fe) {
                  case s:
                  case f:
                  case w:
                  case v:
                  case i:
                    return Fe;
                  default:
                    return Me;
                }
            }
          case r:
            return Me;
        }
      }
    }
    var y = l, O = u, E = s, M = i, N = t, c = f, k = n, _ = w, I = v, U = r, q = a, ae = o, he = d, Ce = !1;
    function ce(j) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(j) || C(j) === l;
    }
    function D(j) {
      return C(j) === u;
    }
    function z(j) {
      return C(j) === s;
    }
    function ne(j) {
      return C(j) === i;
    }
    function oe(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function W(j) {
      return C(j) === f;
    }
    function ie(j) {
      return C(j) === n;
    }
    function X(j) {
      return C(j) === w;
    }
    function F(j) {
      return C(j) === v;
    }
    function V(j) {
      return C(j) === r;
    }
    function ee(j) {
      return C(j) === a;
    }
    function J(j) {
      return C(j) === o;
    }
    function ke(j) {
      return C(j) === d;
    }
    be.AsyncMode = y, be.ConcurrentMode = O, be.ContextConsumer = E, be.ContextProvider = M, be.Element = N, be.ForwardRef = c, be.Fragment = k, be.Lazy = _, be.Memo = I, be.Portal = U, be.Profiler = q, be.StrictMode = ae, be.Suspense = he, be.isAsyncMode = ce, be.isConcurrentMode = D, be.isContextConsumer = z, be.isContextProvider = ne, be.isElement = oe, be.isForwardRef = W, be.isFragment = ie, be.isLazy = X, be.isMemo = F, be.isPortal = V, be.isProfiler = ee, be.isStrictMode = J, be.isSuspense = ke, be.isValidElementType = S, be.typeOf = C;
  }()), be;
}
process.env.NODE_ENV === "production" ? Mo.exports = Zc() : Mo.exports = Qc();
var qo = Mo.exports, zi = qo, Jc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, el = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bi = {};
Bi[zi.ForwardRef] = Jc;
Bi[zi.Memo] = el;
var tl = !0;
function rl(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Li = function(t, r, n) {
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
  tl === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, nl = function(t, r, n) {
  Li(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function ol(e) {
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
var al = {
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
}, il = !1, sl = /[A-Z]|^ms/g, cl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wi = function(t) {
  return t.charCodeAt(1) === 45;
}, Ta = function(t) {
  return t != null && typeof t != "boolean";
}, fo = /* @__PURE__ */ Ii(function(e) {
  return Wi(e) ? e : e.replace(sl, "-$&").toLowerCase();
}), Ra = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(cl, function(n, o, a) {
          return Et = {
            name: o,
            styles: a,
            next: Et
          }, o;
        });
  }
  return al[t] !== 1 && !Wi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, ll = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
        return Et = {
          name: o.name,
          styles: o.styles,
          next: Et
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Et = {
              name: i.name,
              styles: i.styles,
              next: Et
            }, i = i.next;
        var s = a.styles + ";";
        return s;
      }
      return ul(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Et, u = r(e);
        return Et = l, Yr(e, t, u);
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
function ul(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Yr(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0 ? n += a + "{" + t[s] + "}" : Ta(s) && (n += fo(a) + ":" + Ra(a, s) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && il)
          throw new Error(ll);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var l = 0; l < i.length; l++)
            Ta(i[l]) && (n += fo(a) + ":" + Ra(a, i[l]) + ";");
        else {
          var u = Yr(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += fo(a) + ":" + u + ";";
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
var ka = /label:\s*([^\s;{]+)\s*(;|$)/g, Et;
function Xo(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Et = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += Yr(r, t, a);
  else {
    var i = a;
    o += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Yr(r, t, e[s]), n) {
      var l = a;
      o += l[s];
    }
  ka.lastIndex = 0;
  for (var u = "", f; (f = ka.exec(o)) !== null; )
    u += "-" + f[1];
  var d = ol(o) + u;
  return {
    name: d,
    styles: o,
    next: Et
  };
}
var dl = function(t) {
  return t();
}, fl = Y.useInsertionEffect ? Y.useInsertionEffect : !1, pl = fl || dl, Yi = /* @__PURE__ */ Y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ qc({
    key: "css"
  }) : null
);
Yi.Provider;
var hl = function(t) {
  return /* @__PURE__ */ Vo(function(r, n) {
    var o = Pi(Yi);
    return t(r, o, n);
  });
}, gl = /* @__PURE__ */ Y.createContext({});
function Rn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Xo(t);
}
var Zo = function() {
  var t = Rn.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ml = vc, yl = function(t) {
  return t !== "theme";
}, Oa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ml : yl;
}, $a = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, bl = !1, vl = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Li(r, n, o), pl(function() {
    return nl(r, n, o);
  }), null;
}, wl = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = $a(t, r, n), l = s || Oa(o), u = !l("as");
  return function() {
    var f = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), f[0] == null || f[0].raw === void 0)
      d.push.apply(d, f);
    else {
      d.push(f[0][0]);
      for (var h = f.length, v = 1; v < h; v++)
        d.push(f[v], f[0][v]);
    }
    var w = hl(function(m, g, x) {
      var R = u && m.as || o, S = "", C = [], y = m;
      if (m.theme == null) {
        y = {};
        for (var O in m)
          y[O] = m[O];
        y.theme = Y.useContext(gl);
      }
      typeof m.className == "string" ? S = rl(g.registered, C, m.className) : m.className != null && (S = m.className + " ");
      var E = Xo(d.concat(C), g.registered, y);
      S += g.key + "-" + E.name, i !== void 0 && (S += " " + i);
      var M = u && s === void 0 ? Oa(R) : l, N = {};
      for (var c in m)
        u && c === "as" || M(c) && (N[c] = m[c]);
      return N.className = S, x && (N.ref = x), /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(vl, {
        cache: g,
        serialized: E,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ Y.createElement(R, N));
    });
    return w.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = d, w.__emotion_forwardProp = s, Object.defineProperty(w, "toString", {
      value: function() {
        return i === void 0 && bl ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), w.withComponent = function(m, g) {
      return e(m, In({}, r, g, {
        shouldForwardProp: $a(w, g, !0)
      })).apply(void 0, d);
    }, w;
  };
}, Cl = [
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
], _t = wl.bind();
Cl.forEach(function(e) {
  _t[e] = _t(e);
});
var _o = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var po, Pa;
function xl() {
  if (Pa) return po;
  Pa = 1;
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
      var l = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
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
  return po = o() ? Object.assign : function(a, i) {
    for (var s, l = n(a), u, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        u = e(s);
        for (var h = 0; h < u.length; h++)
          r.call(s, u[h]) && (l[u[h]] = s[u[h]]);
      }
    }
    return l;
  }, po;
}
var ho, Ia;
function Qo() {
  if (Ia) return ho;
  Ia = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ho = e, ho;
}
var go, Da;
function Vi() {
  return Da || (Da = 1, go = Function.call.bind(Object.prototype.hasOwnProperty)), go;
}
var mo, Ma;
function Sl() {
  if (Ma) return mo;
  Ma = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qo(), r = {}, n = Vi();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var d;
          try {
            if (typeof a[f] != "function") {
              var h = Error(
                (l || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = a[f](i, f, l, s, null, t);
          } catch (w) {
            d = w;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, mo = o, mo;
}
var yo, _a;
function El() {
  if (_a) return yo;
  _a = 1;
  var e = qo, t = xl(), r = Qo(), n = Vi(), o = Sl(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return yo = function(s, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(D) {
      var z = D && (u && D[u] || D[f]);
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
      any: R(),
      arrayOf: S,
      element: C(),
      elementType: y(),
      instanceOf: O,
      node: c(),
      objectOf: M,
      oneOf: E,
      oneOfType: N,
      shape: _,
      exact: I
    };
    function w(D, z) {
      return D === z ? D !== 0 || 1 / D === 1 / z : D !== D && z !== z;
    }
    function m(D, z) {
      this.message = D, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(D) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, ne = 0;
      function oe(ie, X, F, V, ee, J, ke) {
        if (V = V || h, J = J || F, ke !== r) {
          if (l) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Me = V + ":" + F;
            !z[Me] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[Me] = !0, ne++);
          }
        }
        return X[F] == null ? ie ? X[F] === null ? new m("The " + ee + " `" + J + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new m("The " + ee + " `" + J + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : D(X, F, V, ee, J);
      }
      var W = oe.bind(null, !1);
      return W.isRequired = oe.bind(null, !0), W;
    }
    function x(D) {
      function z(ne, oe, W, ie, X, F) {
        var V = ne[oe], ee = ae(V);
        if (ee !== D) {
          var J = he(V);
          return new m(
            "Invalid " + ie + " `" + X + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return g(z);
    }
    function R() {
      return g(i);
    }
    function S(D) {
      function z(ne, oe, W, ie, X) {
        if (typeof D != "function")
          return new m("Property `" + X + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var F = ne[oe];
        if (!Array.isArray(F)) {
          var V = ae(F);
          return new m("Invalid " + ie + " `" + X + "` of type " + ("`" + V + "` supplied to `" + W + "`, expected an array."));
        }
        for (var ee = 0; ee < F.length; ee++) {
          var J = D(F, ee, W, ie, X + "[" + ee + "]", r);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return g(z);
    }
    function C() {
      function D(z, ne, oe, W, ie) {
        var X = z[ne];
        if (!s(X)) {
          var F = ae(X);
          return new m("Invalid " + W + " `" + ie + "` of type " + ("`" + F + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(D);
    }
    function y() {
      function D(z, ne, oe, W, ie) {
        var X = z[ne];
        if (!e.isValidElementType(X)) {
          var F = ae(X);
          return new m("Invalid " + W + " `" + ie + "` of type " + ("`" + F + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(D);
    }
    function O(D) {
      function z(ne, oe, W, ie, X) {
        if (!(ne[oe] instanceof D)) {
          var F = D.name || h, V = ce(ne[oe]);
          return new m("Invalid " + ie + " `" + X + "` of type " + ("`" + V + "` supplied to `" + W + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return g(z);
    }
    function E(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function z(ne, oe, W, ie, X) {
        for (var F = ne[oe], V = 0; V < D.length; V++)
          if (w(F, D[V]))
            return null;
        var ee = JSON.stringify(D, function(ke, j) {
          var Me = he(j);
          return Me === "symbol" ? String(j) : j;
        });
        return new m("Invalid " + ie + " `" + X + "` of value `" + String(F) + "` " + ("supplied to `" + W + "`, expected one of " + ee + "."));
      }
      return g(z);
    }
    function M(D) {
      function z(ne, oe, W, ie, X) {
        if (typeof D != "function")
          return new m("Property `" + X + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var F = ne[oe], V = ae(F);
        if (V !== "object")
          return new m("Invalid " + ie + " `" + X + "` of type " + ("`" + V + "` supplied to `" + W + "`, expected an object."));
        for (var ee in F)
          if (n(F, ee)) {
            var J = D(F, ee, W, ie, X + "." + ee, r);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return g(z);
    }
    function N(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var z = 0; z < D.length; z++) {
        var ne = D[z];
        if (typeof ne != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ce(ne) + " at index " + z + "."
          ), i;
      }
      function oe(W, ie, X, F, V) {
        for (var ee = [], J = 0; J < D.length; J++) {
          var ke = D[J], j = ke(W, ie, X, F, V, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && ee.push(j.data.expectedType);
        }
        var Me = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new m("Invalid " + F + " `" + V + "` supplied to " + ("`" + X + "`" + Me + "."));
      }
      return g(oe);
    }
    function c() {
      function D(z, ne, oe, W, ie) {
        return U(z[ne]) ? null : new m("Invalid " + W + " `" + ie + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(D);
    }
    function k(D, z, ne, oe, W) {
      return new m(
        (D || "React class") + ": " + z + " type `" + ne + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function _(D) {
      function z(ne, oe, W, ie, X) {
        var F = ne[oe], V = ae(F);
        if (V !== "object")
          return new m("Invalid " + ie + " `" + X + "` of type `" + V + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var ee in D) {
          var J = D[ee];
          if (typeof J != "function")
            return k(W, ie, X, ee, he(J));
          var ke = J(F, ee, W, ie, X + "." + ee, r);
          if (ke)
            return ke;
        }
        return null;
      }
      return g(z);
    }
    function I(D) {
      function z(ne, oe, W, ie, X) {
        var F = ne[oe], V = ae(F);
        if (V !== "object")
          return new m("Invalid " + ie + " `" + X + "` of type `" + V + "` " + ("supplied to `" + W + "`, expected `object`."));
        var ee = t({}, ne[oe], D);
        for (var J in ee) {
          var ke = D[J];
          if (n(D, J) && typeof ke != "function")
            return k(W, ie, X, J, he(ke));
          if (!ke)
            return new m(
              "Invalid " + ie + " `" + X + "` key `" + J + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(ne[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var j = ke(F, J, W, ie, X + "." + J, r);
          if (j)
            return j;
        }
        return null;
      }
      return g(z);
    }
    function U(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(U);
          if (D === null || s(D))
            return !0;
          var z = d(D);
          if (z) {
            var ne = z.call(D), oe;
            if (z !== D.entries) {
              for (; !(oe = ne.next()).done; )
                if (!U(oe.value))
                  return !1;
            } else
              for (; !(oe = ne.next()).done; ) {
                var W = oe.value;
                if (W && !U(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(D, z) {
      return D === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function ae(D) {
      var z = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : q(z, D) ? "symbol" : z;
    }
    function he(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var z = ae(D);
      if (z === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function Ce(D) {
      var z = he(D);
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
    function ce(D) {
      return !D.constructor || !D.constructor.name ? h : D.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, yo;
}
var bo, Aa;
function Tl() {
  if (Aa) return bo;
  Aa = 1;
  var e = Qo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bo = function() {
    function n(i, s, l, u, f, d) {
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
  }, bo;
}
if (process.env.NODE_ENV !== "production") {
  var Rl = qo, kl = !0;
  _o.exports = El()(Rl.isElement, kl);
} else
  _o.exports = Tl()();
var Ol = _o.exports;
const b = /* @__PURE__ */ Xc(Ol);
function Hi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Hi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Se() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Hi(e)) && (n && (n += " "), n += t);
  return n;
}
function Mn(e, t) {
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
              const l = s;
              r[o][l] = Mn(a[l], i[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Qr(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const a = e[o];
    let i = "", s = !0;
    for (let l = 0; l < a.length; l += 1) {
      const u = a[l];
      u && (i += (s === !0 ? "" : " ") + t(u), s = !1, r && r[u] && (i += " " + r[u]));
    }
    n[o] = i;
  }
  return n;
}
function Lt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function $l(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Jo(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), $l(e, t, r);
}
function Pl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Wt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Wt(Pl(e));
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
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Il = (e) => {
  const t = Wt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Nr = (e, t) => {
  try {
    return Il(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Yn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ui(e) {
  e = Wt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), i = (u, f = (u + r / 30) % 12) => o - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = "rgb";
  const l = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), Yn({
    type: s,
    values: l
  });
}
function Ao(e) {
  e = Wt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Wt(Ui(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Na(e, t) {
  const r = Ao(e), n = Ao(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function We(e, t) {
  return e = Wt(e), t = Jo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Yn(e);
}
function bn(e, t, r) {
  try {
    return We(e, t);
  } catch {
    return e;
  }
}
function ea(e, t) {
  if (e = Wt(e), t = Jo(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Yn(e);
}
function Te(e, t, r) {
  try {
    return ea(e, t);
  } catch {
    return e;
  }
}
function ta(e, t) {
  if (e = Wt(e), t = Jo(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Yn(e);
}
function Re(e, t, r) {
  try {
    return ta(e, t);
  } catch {
    return e;
  }
}
function Dl(e, t = 0.15) {
  return Ao(e) > 0.5 ? ea(e, t) : ta(e, t);
}
function vn(e, t, r) {
  try {
    return Dl(e, t);
  } catch {
    return e;
  }
}
function Ml(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Gi = (e) => Ml(e) && e !== "classes";
function Q(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Lt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Dt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ki(e) {
  if (/* @__PURE__ */ Y.isValidElement(e) || !Dt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ki(e[r]);
  }), t;
}
function st(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Dt(e) && Dt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Y.isValidElement(t[o]) ? n[o] = t[o] : Dt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Dt(e[o]) ? n[o] = st(e[o], t[o], r) : r.clone ? n[o] = Dt(t[o]) ? Ki(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function jr(e, t) {
  return t ? st(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Vt = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.string, b.object, b.array]) : {};
function _l(e, t) {
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
function Al(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Nl(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Lt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, a = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(a);
}
function Fl(e) {
  const t = (a, i) => a.replace("@media", i ? `@container ${i}` : "@container");
  function r(a, i) {
    a.up = (...s) => t(e.breakpoints.up(...s), i), a.down = (...s) => t(e.breakpoints.down(...s), i), a.between = (...s) => t(e.breakpoints.between(...s), i), a.only = (...s) => t(e.breakpoints.only(...s), i), a.not = (...s) => {
      const l = t(e.breakpoints.not(...s), i);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Vn = {
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
}, Fa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Vn[e]}px)`
}, jl = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Vn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function At(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || Fa;
    return t.reduce((i, s, l) => (i[a.up(a.keys[l])] = r(t[l]), i), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || Fa;
    return Object.keys(t).reduce((i, s) => {
      if (Al(a.keys, s)) {
        const l = Nl(n.containerQueries ? n : jl, s);
        l && (i[l] = r(t[s], s));
      } else if (Object.keys(a.values || Vn).includes(s)) {
        const l = a.up(s);
        i[l] = r(t[s], s);
      } else {
        const l = s;
        i[l] = t[l];
      }
      return i;
    }, {});
  }
  return r(t);
}
function zl(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function Bl(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Hn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function _n(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Hn(e, r) || n, t && (o = t(o, n, e)), o;
}
function je(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (i) => {
    if (i[t] == null)
      return null;
    const s = i[t], l = i.theme, u = Hn(l, n) || {};
    return At(i, s, (d) => {
      let h = _n(u, o, d);
      return d === h && typeof d == "string" && (h = _n(u, o, `${t}${d === "default" ? "" : Q(d)}`, d)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Vt
  } : {}, a.filterProps = [t], a;
}
function Ll(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Wl = {
  m: "margin",
  p: "padding"
}, Yl = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ja = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Vl = Ll((e) => {
  if (e.length > 2)
    if (ja[e])
      e = ja[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Wl[t], o = Yl[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), Un = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Gn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Hl = [...Un, ...Gn];
function Jr(e, t, r, n) {
  const o = Hn(e, t, !0) ?? r;
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
function ra(e) {
  return Jr(e, "spacing", 8, "spacing");
}
function en(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ul(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = en(t, r), n), {});
}
function Gl(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Vl(r), a = Ul(o, n), i = e[r];
  return At(e, i, a);
}
function qi(e, t) {
  const r = ra(e.theme);
  return Object.keys(e).map((n) => Gl(e, t, n, r)).reduce(jr, {});
}
function Ae(e) {
  return qi(e, Un);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? Un.reduce((e, t) => (e[t] = Vt, e), {}) : {};
Ae.filterProps = Un;
function Ne(e) {
  return qi(e, Gn);
}
Ne.propTypes = process.env.NODE_ENV !== "production" ? Gn.reduce((e, t) => (e[t] = Vt, e), {}) : {};
Ne.filterProps = Gn;
process.env.NODE_ENV !== "production" && Hl.reduce((e, t) => (e[t] = Vt, e), {});
function Kn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? jr(o, t[a](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ft(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function gt(e, t) {
  return je({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Kl = gt("border", ft), ql = gt("borderTop", ft), Xl = gt("borderRight", ft), Zl = gt("borderBottom", ft), Ql = gt("borderLeft", ft), Jl = gt("borderColor"), eu = gt("borderTopColor"), tu = gt("borderRightColor"), ru = gt("borderBottomColor"), nu = gt("borderLeftColor"), ou = gt("outline", ft), au = gt("outlineColor"), qn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Jr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: en(t, n)
    });
    return At(e, e.borderRadius, r);
  }
  return null;
};
qn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Vt
} : {};
qn.filterProps = ["borderRadius"];
Kn(Kl, ql, Xl, Zl, Ql, Jl, eu, tu, ru, nu, qn, ou, au);
const Xn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Jr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: en(t, n)
    });
    return At(e, e.gap, r);
  }
  return null;
};
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Vt
} : {};
Xn.filterProps = ["gap"];
const Zn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Jr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: en(t, n)
    });
    return At(e, e.columnGap, r);
  }
  return null;
};
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Vt
} : {};
Zn.filterProps = ["columnGap"];
const Qn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Jr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: en(t, n)
    });
    return At(e, e.rowGap, r);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Vt
} : {};
Qn.filterProps = ["rowGap"];
const iu = je({
  prop: "gridColumn"
}), su = je({
  prop: "gridRow"
}), cu = je({
  prop: "gridAutoFlow"
}), lu = je({
  prop: "gridAutoColumns"
}), uu = je({
  prop: "gridAutoRows"
}), du = je({
  prop: "gridTemplateColumns"
}), fu = je({
  prop: "gridTemplateRows"
}), pu = je({
  prop: "gridTemplateAreas"
}), hu = je({
  prop: "gridArea"
});
Kn(Xn, Zn, Qn, iu, su, cu, lu, uu, du, fu, pu, hu);
function gr(e, t) {
  return t === "grey" ? t : e;
}
const gu = je({
  prop: "color",
  themeKey: "palette",
  transform: gr
}), mu = je({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: gr
}), yu = je({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: gr
});
Kn(gu, mu, yu);
function at(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const bu = je({
  prop: "width",
  transform: at
}), na = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, i, s, l;
      const n = ((i = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : i[r]) || Vn[r];
      return n ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: at(r)
      };
    };
    return At(e, e.maxWidth, t);
  }
  return null;
};
na.filterProps = ["maxWidth"];
const vu = je({
  prop: "minWidth",
  transform: at
}), wu = je({
  prop: "height",
  transform: at
}), Cu = je({
  prop: "maxHeight",
  transform: at
}), xu = je({
  prop: "minHeight",
  transform: at
});
je({
  prop: "size",
  cssProperty: "width",
  transform: at
});
je({
  prop: "size",
  cssProperty: "height",
  transform: at
});
const Su = je({
  prop: "boxSizing"
});
Kn(bu, na, vu, wu, Cu, xu, Su);
const Jn = {
  // borders
  border: {
    themeKey: "borders",
    transform: ft
  },
  borderTop: {
    themeKey: "borders",
    transform: ft
  },
  borderRight: {
    themeKey: "borders",
    transform: ft
  },
  borderBottom: {
    themeKey: "borders",
    transform: ft
  },
  borderLeft: {
    themeKey: "borders",
    transform: ft
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
    transform: ft
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: gr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: gr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: gr
  },
  // spacing
  p: {
    style: Ne
  },
  pt: {
    style: Ne
  },
  pr: {
    style: Ne
  },
  pb: {
    style: Ne
  },
  pl: {
    style: Ne
  },
  px: {
    style: Ne
  },
  py: {
    style: Ne
  },
  padding: {
    style: Ne
  },
  paddingTop: {
    style: Ne
  },
  paddingRight: {
    style: Ne
  },
  paddingBottom: {
    style: Ne
  },
  paddingLeft: {
    style: Ne
  },
  paddingX: {
    style: Ne
  },
  paddingY: {
    style: Ne
  },
  paddingInline: {
    style: Ne
  },
  paddingInlineStart: {
    style: Ne
  },
  paddingInlineEnd: {
    style: Ne
  },
  paddingBlock: {
    style: Ne
  },
  paddingBlockStart: {
    style: Ne
  },
  paddingBlockEnd: {
    style: Ne
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
    style: Xn
  },
  rowGap: {
    style: Qn
  },
  columnGap: {
    style: Zn
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
    transform: at
  },
  maxWidth: {
    style: na
  },
  minWidth: {
    transform: at
  },
  height: {
    transform: at
  },
  maxHeight: {
    transform: at
  },
  minHeight: {
    transform: at
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
function Eu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Tu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ru() {
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
    const h = Hn(o, u) || {};
    return d ? d(i) : At(i, n, (w) => {
      let m = _n(h, f, w);
      return w === m && typeof w == "string" && (m = _n(h, f, `${r}${w === "default" ? "" : Q(w)}`, w)), l === !1 ? m : {
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
    const a = o.unstable_sxConfig ?? Jn;
    function i(s) {
      let l = s;
      if (typeof s == "function")
        l = s(o);
      else if (typeof s != "object")
        return s;
      if (!l)
        return null;
      const u = zl(o.breakpoints), f = Object.keys(u);
      let d = u;
      return Object.keys(l).forEach((h) => {
        const v = Tu(l[h], o);
        if (v != null)
          if (typeof v == "object")
            if (a[h])
              d = jr(d, e(h, v, o, a));
            else {
              const w = At({
                theme: o
              }, v, (m) => ({
                [h]: m
              }));
              Eu(w, v) ? d[h] = t({
                sx: v,
                theme: o
              }) : d = jr(d, w);
            }
          else
            d = jr(d, e(h, v, o, a));
      }), _l(o, Bl(f, d));
    }
    return Array.isArray(n) ? n.map(i) : i(n);
  }
  return t;
}
const yr = Ru();
yr.filterProps = ["sx"];
var No = { exports: {} }, Ir = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function ku() {
  if (za) return Ir;
  za = 1;
  var e = Mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, u) {
    var f, d = {}, h = null, v = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (f in l) n.call(l, f) && !a.hasOwnProperty(f) && (d[f] = l[f]);
    if (s && s.defaultProps) for (f in l = s.defaultProps, l) d[f] === void 0 && (d[f] = l[f]);
    return { $$typeof: t, type: s, key: h, ref: v, props: d, _owner: o.current };
  }
  return Ir.Fragment = r, Ir.jsx = i, Ir.jsxs = i, Ir;
}
var Dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function Ou() {
  return Ba || (Ba = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Mt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, m = "@@iterator";
    function g(p) {
      if (p === null || typeof p != "object")
        return null;
      var $ = w && p[w] || p[m];
      return typeof $ == "function" ? $ : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(p) {
      {
        for (var $ = arguments.length, B = new Array($ > 1 ? $ - 1 : 0), re = 1; re < $; re++)
          B[re - 1] = arguments[re];
        S("error", p, B);
      }
    }
    function S(p, $, B) {
      {
        var re = x.ReactDebugCurrentFrame, fe = re.getStackAddendum();
        fe !== "" && ($ += "%s", B = B.concat([fe]));
        var pe = B.map(function(le) {
          return String(le);
        });
        pe.unshift("Warning: " + $), Function.prototype.apply.call(console[p], console, pe);
      }
    }
    var C = !1, y = !1, O = !1, E = !1, M = !1, N;
    N = Symbol.for("react.module.reference");
    function c(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === n || p === a || M || p === o || p === u || p === f || E || p === v || C || y || O || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === i || p.$$typeof === s || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === N || p.getModuleId !== void 0));
    }
    function k(p, $, B) {
      var re = p.displayName;
      if (re)
        return re;
      var fe = $.displayName || $.name || "";
      return fe !== "" ? B + "(" + fe + ")" : B;
    }
    function _(p) {
      return p.displayName || "Context";
    }
    function I(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
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
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            var $ = p;
            return _($) + ".Consumer";
          case i:
            var B = p;
            return _(B._context) + ".Provider";
          case l:
            return k(p, p.render, "ForwardRef");
          case d:
            var re = p.displayName || null;
            return re !== null ? re : I(p.type) || "Memo";
          case h: {
            var fe = p, pe = fe._payload, le = fe._init;
            try {
              return I(le(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, q = 0, ae, he, Ce, ce, D, z, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function W() {
      {
        if (q === 0) {
          ae = console.log, he = console.info, Ce = console.warn, ce = console.error, D = console.group, z = console.groupCollapsed, ne = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        q++;
      }
    }
    function ie() {
      {
        if (q--, q === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, p, {
              value: ae
            }),
            info: U({}, p, {
              value: he
            }),
            warn: U({}, p, {
              value: Ce
            }),
            error: U({}, p, {
              value: ce
            }),
            group: U({}, p, {
              value: D
            }),
            groupCollapsed: U({}, p, {
              value: z
            }),
            groupEnd: U({}, p, {
              value: ne
            })
          });
        }
        q < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = x.ReactCurrentDispatcher, F;
    function V(p, $, B) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (fe) {
            var re = fe.stack.trim().match(/\n( *(at )?)/);
            F = re && re[1] || "";
          }
        return `
` + F + p;
      }
    }
    var ee = !1, J;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ke();
    }
    function j(p, $) {
      if (!p || ee)
        return "";
      {
        var B = J.get(p);
        if (B !== void 0)
          return B;
      }
      var re;
      ee = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = X.current, X.current = null, W();
      try {
        if ($) {
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
            } catch (ze) {
              re = ze;
            }
            Reflect.construct(p, [], le);
          } else {
            try {
              le.call();
            } catch (ze) {
              re = ze;
            }
            p.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ze) {
            re = ze;
          }
          p();
        }
      } catch (ze) {
        if (ze && re && typeof ze.stack == "string") {
          for (var se = ze.stack.split(`
`), He = re.stack.split(`
`), Oe = se.length - 1, Pe = He.length - 1; Oe >= 1 && Pe >= 0 && se[Oe] !== He[Pe]; )
            Pe--;
          for (; Oe >= 1 && Pe >= 0; Oe--, Pe--)
            if (se[Oe] !== He[Pe]) {
              if (Oe !== 1 || Pe !== 1)
                do
                  if (Oe--, Pe--, Pe < 0 || se[Oe] !== He[Pe]) {
                    var Je = `
` + se[Oe].replace(" at new ", " at ");
                    return p.displayName && Je.includes("<anonymous>") && (Je = Je.replace("<anonymous>", p.displayName)), typeof p == "function" && J.set(p, Je), Je;
                  }
                while (Oe >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        ee = !1, X.current = pe, ie(), Error.prepareStackTrace = fe;
      }
      var jt = p ? p.displayName || p.name : "", rt = jt ? V(jt) : "";
      return typeof p == "function" && J.set(p, rt), rt;
    }
    function Me(p, $, B) {
      return j(p, !1);
    }
    function H(p) {
      var $ = p.prototype;
      return !!($ && $.isReactComponent);
    }
    function Fe(p, $, B) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return j(p, H(p));
      if (typeof p == "string")
        return V(p);
      switch (p) {
        case u:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return Me(p.render);
          case d:
            return Fe(p.type, $, B);
          case h: {
            var re = p, fe = re._payload, pe = re._init;
            try {
              return Fe(pe(fe), $, B);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, ct = {}, Ze = x.ReactDebugCurrentFrame;
    function Ve(p) {
      if (p) {
        var $ = p._owner, B = Fe(p.type, p._source, $ ? $.type : null);
        Ze.setExtraStackFrame(B);
      } else
        Ze.setExtraStackFrame(null);
    }
    function Ht(p, $, B, re, fe) {
      {
        var pe = Function.call.bind(Ye);
        for (var le in p)
          if (pe(p, le)) {
            var se = void 0;
            try {
              if (typeof p[le] != "function") {
                var He = Error((re || "React class") + ": " + B + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              se = p[le]($, le, re, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              se = Oe;
            }
            se && !(se instanceof Error) && (Ve(fe), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", B, le, typeof se), Ve(null)), se instanceof Error && !(se.message in ct) && (ct[se.message] = !0, Ve(fe), R("Failed %s type: %s", B, se.message), Ve(null));
          }
      }
    }
    var vt = Array.isArray;
    function lt(p) {
      return vt(p);
    }
    function te(p) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, B = $ && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return B;
      }
    }
    function Ut(p) {
      try {
        return Gt(p), !1;
      } catch {
        return !0;
      }
    }
    function Gt(p) {
      return "" + p;
    }
    function Kt(p) {
      if (Ut(p))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", te(p)), Gt(p);
    }
    var ut = x.ReactCurrentOwner, ro = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, Sr, tr;
    tr = {};
    function Nt(p) {
      if (Ye.call(p, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(p, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function nn(p) {
      if (Ye.call(p, "key")) {
        var $ = Object.getOwnPropertyDescriptor(p, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function on(p, $) {
      if (typeof p.ref == "string" && ut.current && $ && ut.current.stateNode !== $) {
        var B = I(ut.current.type);
        tr[B] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(ut.current.type), p.ref), tr[B] = !0);
      }
    }
    function no(p, $) {
      {
        var B = function() {
          mt || (mt = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        B.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function Le(p, $) {
      {
        var B = function() {
          Sr || (Sr = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        B.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var an = function(p, $, B, re, fe, pe, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: $,
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
    function Qe(p, $, B, re, fe) {
      {
        var pe, le = {}, se = null, He = null;
        B !== void 0 && (Kt(B), se = "" + B), nn($) && (Kt($.key), se = "" + $.key), Nt($) && (He = $.ref, on($, fe));
        for (pe in $)
          Ye.call($, pe) && !ro.hasOwnProperty(pe) && (le[pe] = $[pe]);
        if (p && p.defaultProps) {
          var Oe = p.defaultProps;
          for (pe in Oe)
            le[pe] === void 0 && (le[pe] = Oe[pe]);
        }
        if (se || He) {
          var Pe = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          se && no(le, Pe), He && Le(le, Pe);
        }
        return an(p, se, He, fe, re, ut.current, le);
      }
    }
    var yt = x.ReactCurrentOwner, sn = x.ReactDebugCurrentFrame;
    function Ot(p) {
      if (p) {
        var $ = p._owner, B = Fe(p.type, p._source, $ ? $.type : null);
        sn.setExtraStackFrame(B);
      } else
        sn.setExtraStackFrame(null);
    }
    var Er;
    Er = !1;
    function Tr(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function cn() {
      {
        if (yt.current) {
          var p = I(yt.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function qt(p) {
      return "";
    }
    var $t = {};
    function ln(p) {
      {
        var $ = cn();
        if (!$) {
          var B = typeof p == "string" ? p : p.displayName || p.name;
          B && ($ = `

Check the top-level render call using <` + B + ">.");
        }
        return $;
      }
    }
    function Pt(p, $) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var B = ln($);
        if ($t[B])
          return;
        $t[B] = !0;
        var re = "";
        p && p._owner && p._owner !== yt.current && (re = " It was passed a child from " + I(p._owner.type) + "."), Ot(p), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, re), Ot(null);
      }
    }
    function rr(p, $) {
      {
        if (typeof p != "object")
          return;
        if (lt(p))
          for (var B = 0; B < p.length; B++) {
            var re = p[B];
            Tr(re) && Pt(re, $);
          }
        else if (Tr(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var fe = g(p);
          if (typeof fe == "function" && fe !== p.entries)
            for (var pe = fe.call(p), le; !(le = pe.next()).done; )
              Tr(le.value) && Pt(le.value, $);
        }
      }
    }
    function qe(p) {
      {
        var $ = p.type;
        if ($ == null || typeof $ == "string")
          return;
        var B;
        if (typeof $ == "function")
          B = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === d))
          B = $.propTypes;
        else
          return;
        if (B) {
          var re = I($);
          Ht(B, p.props, "prop", re, p);
        } else if ($.PropTypes !== void 0 && !Er) {
          Er = !0;
          var fe = I($);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(p) {
      {
        for (var $ = Object.keys(p.props), B = 0; B < $.length; B++) {
          var re = $[B];
          if (re !== "children" && re !== "key") {
            Ot(p), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Ot(null);
            break;
          }
        }
        p.ref !== null && (Ot(p), R("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
      }
    }
    var wt = {};
    function G(p, $, B, re, fe, pe) {
      {
        var le = c(p);
        if (!le) {
          var se = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = qt();
          He ? se += He : se += cn();
          var Oe;
          p === null ? Oe = "null" : lt(p) ? Oe = "array" : p !== void 0 && p.$$typeof === t ? (Oe = "<" + (I(p.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof p, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, se);
        }
        var Pe = Qe(p, $, B, fe, pe);
        if (Pe == null)
          return Pe;
        if (le) {
          var Je = $.children;
          if (Je !== void 0)
            if (re)
              if (lt(Je)) {
                for (var jt = 0; jt < Je.length; jt++)
                  rr(Je[jt], p);
                Object.freeze && Object.freeze(Je);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rr(Je, p);
        }
        if (Ye.call($, "key")) {
          var rt = I(p), ze = Object.keys($).filter(function(fn) {
            return fn !== "key";
          }), Xt = ze.length > 0 ? "{key: someKey, " + ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wt[rt + Xt]) {
            var oo = ze.length > 0 ? "{" + ze.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xt, rt, oo, rt), wt[rt + Xt] = !0;
          }
        }
        return p === n ? nr(Pe) : qe(Pe), Pe;
      }
    }
    function Ft(p, $, B) {
      return G(p, $, B, !0);
    }
    function Rr(p, $, B) {
      return G(p, $, B, !1);
    }
    var un = Rr, dn = Ft;
    Dr.Fragment = n, Dr.jsx = un, Dr.jsxs = dn;
  }()), Dr;
}
process.env.NODE_ENV === "production" ? No.exports = ku() : No.exports = Ou();
var L = No.exports;
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function $u(e, t) {
  const r = _t(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Pu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const La = [];
function Wa(e) {
  return La[0] = e, Xo(La);
}
const Iu = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Du(e) {
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
  } = e, a = Iu(t), i = Object.keys(a);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function u(h, v) {
    const w = i.indexOf(v);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(w !== -1 && typeof t[i[w]] == "number" ? t[i[w]] : v) - n / 100}${r})`;
  }
  function f(h) {
    return i.indexOf(h) + 1 < i.length ? u(h, i[i.indexOf(h) + 1]) : s(h);
  }
  function d(h) {
    const v = i.indexOf(h);
    return v === 0 ? s(i[1]) : v === i.length - 1 ? l(i[v]) : u(h, i[i.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: a,
    up: s,
    down: l,
    between: u,
    only: f,
    not: d,
    unit: r,
    ...o
  };
}
const Mu = {
  borderRadius: 4
};
function Xi(e = 8, t = ra({
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
function _u(e, t) {
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
function Zi(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...i
  } = e, s = Du(r), l = Xi(o);
  let u = st({
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
      ...Mu,
      ...a
    }
  }, i);
  return u = Fl(u), u.applyStyles = _u, u = t.reduce((f, d) => st(f, d), u), u.unstable_sxConfig = {
    ...Jn,
    ...i == null ? void 0 : i.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return yr({
      sx: d,
      theme: this
    });
  }, u;
}
const Ya = (e) => e, Au = () => {
  let e = Ya;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ya;
    }
  };
}, Nu = Au(), Fu = {
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
function er(e, t, r = "Mui") {
  const n = Fu[t];
  return n ? `${r}-${n}` : `${Nu.generate(e)}-${t}`;
}
function Cr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = er(e, o, r);
  }), n;
}
var Fo = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function ju() {
  if (Va) return ve;
  Va = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function m(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
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
                case i:
                case l:
                case h:
                case d:
                case a:
                  return g;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ve.ContextConsumer = i, ve.ContextProvider = a, ve.Element = e, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = h, ve.Memo = d, ve.Portal = t, ve.Profiler = o, ve.StrictMode = n, ve.Suspense = u, ve.SuspenseList = f, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(g) {
    return m(g) === i;
  }, ve.isContextProvider = function(g) {
    return m(g) === a;
  }, ve.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ve.isForwardRef = function(g) {
    return m(g) === l;
  }, ve.isFragment = function(g) {
    return m(g) === r;
  }, ve.isLazy = function(g) {
    return m(g) === h;
  }, ve.isMemo = function(g) {
    return m(g) === d;
  }, ve.isPortal = function(g) {
    return m(g) === t;
  }, ve.isProfiler = function(g) {
    return m(g) === o;
  }, ve.isStrictMode = function(g) {
    return m(g) === n;
  }, ve.isSuspense = function(g) {
    return m(g) === u;
  }, ve.isSuspenseList = function(g) {
    return m(g) === f;
  }, ve.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === f || g === v || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === d || g.$$typeof === a || g.$$typeof === i || g.$$typeof === l || g.$$typeof === w || g.getModuleId !== void 0);
  }, ve.typeOf = m, ve;
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
var Ha;
function zu() {
  return Ha || (Ha = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = !1, m = !1, g = !1, x = !1, R = !1, S;
    S = Symbol.for("react.module.reference");
    function C(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === o || R || H === n || H === u || H === f || x || H === v || w || m || g || typeof H == "object" && H !== null && (H.$$typeof === h || H.$$typeof === d || H.$$typeof === a || H.$$typeof === i || H.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === S || H.getModuleId !== void 0));
    }
    function y(H) {
      if (typeof H == "object" && H !== null) {
        var Fe = H.$$typeof;
        switch (Fe) {
          case e:
            var Ye = H.type;
            switch (Ye) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Ye;
              default:
                var ct = Ye && Ye.$$typeof;
                switch (ct) {
                  case s:
                  case i:
                  case l:
                  case h:
                  case d:
                  case a:
                    return ct;
                  default:
                    return Fe;
                }
            }
          case t:
            return Fe;
        }
      }
    }
    var O = i, E = a, M = e, N = l, c = r, k = h, _ = d, I = t, U = o, q = n, ae = u, he = f, Ce = !1, ce = !1;
    function D(H) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(H) {
      return ce || (ce = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(H) {
      return y(H) === i;
    }
    function oe(H) {
      return y(H) === a;
    }
    function W(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function ie(H) {
      return y(H) === l;
    }
    function X(H) {
      return y(H) === r;
    }
    function F(H) {
      return y(H) === h;
    }
    function V(H) {
      return y(H) === d;
    }
    function ee(H) {
      return y(H) === t;
    }
    function J(H) {
      return y(H) === o;
    }
    function ke(H) {
      return y(H) === n;
    }
    function j(H) {
      return y(H) === u;
    }
    function Me(H) {
      return y(H) === f;
    }
    we.ContextConsumer = O, we.ContextProvider = E, we.Element = M, we.ForwardRef = N, we.Fragment = c, we.Lazy = k, we.Memo = _, we.Portal = I, we.Profiler = U, we.StrictMode = q, we.Suspense = ae, we.SuspenseList = he, we.isAsyncMode = D, we.isConcurrentMode = z, we.isContextConsumer = ne, we.isContextProvider = oe, we.isElement = W, we.isForwardRef = ie, we.isFragment = X, we.isLazy = F, we.isMemo = V, we.isPortal = ee, we.isProfiler = J, we.isStrictMode = ke, we.isSuspense = j, we.isSuspenseList = Me, we.isValidElementType = C, we.typeOf = y;
  }()), we;
}
process.env.NODE_ENV === "production" ? Fo.exports = ju() : Fo.exports = zu();
var Ua = Fo.exports;
function Qi(e, t = "") {
  return e.displayName || e.name || t;
}
function Ga(e, t, r) {
  const n = Qi(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Bu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Qi(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ua.ForwardRef:
          return Ga(e, e.render, "ForwardRef");
        case Ua.Memo:
          return Ga(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ji(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Wa(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Wa(o.style));
  }), n;
}
const Lu = Zi();
function vo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Wu(e) {
  return e ? (t, r) => r[e] : null;
}
function Yu(e, t, r) {
  e.theme = Gu(e.theme) ? r : e.theme[t] || e.theme;
}
function kn(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => kn(e, n));
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
    return es(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function es(e, t, r = []) {
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
function Vu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Lu,
    rootShouldForwardProp: n = vo,
    slotShouldForwardProp: o = vo
  } = e;
  function a(s) {
    Yu(s, t, r);
  }
  return (s, l = {}) => {
    Pu(s, (y) => y.filter((O) => O !== yr));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Wu(ts(f)),
      ...w
    } = l, m = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), g = h || !1;
    let x = vo;
    f === "Root" || f === "root" ? x = n : f ? x = o : Ku(s) && (x = void 0);
    const R = $u(s, {
      shouldForwardProp: x,
      label: Uu(u, f),
      ...w
    }), S = (y) => {
      if (typeof y == "function" && y.__emotion_real !== y)
        return function(E) {
          return kn(E, y);
        };
      if (Dt(y)) {
        const O = Ji(y);
        return O.variants ? function(M) {
          return kn(M, O);
        } : O.style;
      }
      return y;
    }, C = (...y) => {
      const O = [], E = y.map(S), M = [];
      if (O.push(a), u && v && M.push(function(_) {
        var ae, he;
        const U = (he = (ae = _.theme.components) == null ? void 0 : ae[u]) == null ? void 0 : he.styleOverrides;
        if (!U)
          return null;
        const q = {};
        for (const Ce in U)
          q[Ce] = kn(_, U[Ce]);
        return v(_, q);
      }), u && !m && M.push(function(_) {
        var q, ae;
        const I = _.theme, U = (ae = (q = I == null ? void 0 : I.components) == null ? void 0 : q[u]) == null ? void 0 : ae.variants;
        return U ? es(_, U) : null;
      }), g || M.push(yr), Array.isArray(E[0])) {
        const k = E.shift(), _ = new Array(O.length).fill(""), I = new Array(M.length).fill("");
        let U;
        U = [..._, ...k, ...I], U.raw = [..._, ...k.raw, ...I], O.unshift(U);
      }
      const N = [...O, ...E, ...M], c = R(...N);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = Hu(u, f, s)), c;
    };
    return R.withConfig && (C.withConfig = R.withConfig), C;
  };
}
function Hu(e, t, r) {
  return e ? `${e}${Q(t || "")}` : `Styled(${Bu(r)})`;
}
function Uu(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ts(t || "Root")}`), r;
}
function Gu(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ku(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ts(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const qu = typeof window < "u" ? Y.useLayoutEffect : Y.useEffect;
function rs(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Xu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Zu(e, t, r, n, o) {
  const a = e[t], i = o || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof a == "function" && !Xu(a) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Qu = rs(b.elementType, Zu), Ju = b.oneOfType([b.func, b.object]);
function ed(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function td(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function wn(e) {
  const t = Y.useRef(e);
  return qu(() => {
    t.current = e;
  }), Y.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function jo(...e) {
  return Y.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      ed(r, t);
    });
  }, e);
}
const Ka = {};
function ns(e, t) {
  const r = Y.useRef(Ka);
  return r.current === Ka && (r.current = e(t)), r;
}
const rd = [];
function nd(e) {
  Y.useEffect(e, rd);
}
class oa {
  constructor() {
    $r(this, "currentId", null);
    $r(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    $r(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new oa();
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
function od() {
  const e = ns(oa.create).current;
  return nd(e.disposeEffect), e;
}
function qa(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const ad = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && (b.node, b.object);
function id(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Mn(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Mn(o, n) : n;
}
function sd({
  props: e,
  name: t
}) {
  const r = Y.useContext(ad);
  return id({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Xa = {
  theme: void 0
};
function cd(e) {
  let t, r;
  return function(o) {
    let a = t;
    return (a === void 0 || o.theme !== r) && (Xa.theme = o.theme, a = Ji(e(Xa)), t = a, r = o.theme), a;
  };
}
function ld(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Za = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, i) => {
    i === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, ud = (e, t, r) => {
  function n(o, a = [], i = []) {
    Object.entries(o).forEach(([s, l]) => {
      (!r || r && !r([...a, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...a, s], Array.isArray(l) ? [...i, s] : i) : t([...a, s], l, i));
    });
  }
  n(e);
}, dd = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function wo(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, i = {};
  return ud(
    e,
    (s, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(s, l))) {
        const f = `--${r ? `${r}-` : ""}${s.join("-")}`, d = dd(s, l);
        Object.assign(o, {
          [f]: d
        }), Za(a, s, `var(${f})`, u), Za(i, s, `var(${f}, ${d})`, u);
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
function fd(e, t = {}) {
  const {
    getSelector: r = g,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: a = {},
    components: i,
    defaultColorScheme: s = "light",
    ...l
  } = e, {
    vars: u,
    css: f,
    varsWithDefaults: d
  } = wo(l, t);
  let h = d;
  const v = {}, {
    [s]: w,
    ...m
  } = a;
  if (Object.entries(m || {}).forEach(([S, C]) => {
    const {
      vars: y,
      css: O,
      varsWithDefaults: E
    } = wo(C, t);
    h = st(h, E), v[S] = {
      css: O,
      vars: y
    };
  }), w) {
    const {
      css: S,
      vars: C,
      varsWithDefaults: y
    } = wo(w, t);
    h = st(h, y), v[s] = {
      css: S,
      vars: C
    };
  }
  function g(S, C) {
    var O, E;
    let y = o;
    if (o === "class" && (y = ".%s"), o === "data" && (y = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (y = `[${o}="%s"]`), S) {
      if (y === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (O = a[S]) == null ? void 0 : O.palette) == null ? void 0 : E.mode) || S})`]: {
            ":root": C
          }
        };
      if (y)
        return e.defaultColorScheme === S ? `:root, ${y.replace("%s", String(S))}` : y.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let S = {
        ...u
      };
      return Object.entries(v).forEach(([, {
        vars: C
      }]) => {
        S = st(S, C);
      }), S;
    },
    generateStyleSheets: () => {
      var M, N;
      const S = [], C = e.defaultColorScheme || "light";
      function y(c, k) {
        Object.keys(k).length && S.push(typeof c == "string" ? {
          [c]: {
            ...k
          }
        } : c);
      }
      y(r(void 0, {
        ...f
      }), f);
      const {
        [C]: O,
        ...E
      } = v;
      if (O) {
        const {
          css: c
        } = O, k = (N = (M = a[C]) == null ? void 0 : M.palette) == null ? void 0 : N.mode, _ = !n && k ? {
          colorScheme: k,
          ...c
        } : {
          ...c
        };
        y(r(C, {
          ..._
        }), _);
      }
      return Object.entries(E).forEach(([c, {
        css: k
      }]) => {
        var U, q;
        const _ = (q = (U = a[c]) == null ? void 0 : U.palette) == null ? void 0 : q.mode, I = !n && _ ? {
          colorScheme: _,
          ...k
        } : {
          ...k
        };
        y(r(c, {
          ...I
        }), I);
      }), S;
    }
  };
}
function pd(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Vr = {
  black: "#000",
  white: "#fff"
}, hd = {
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
}, ir = {
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
}, sr = {
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
}, cr = {
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
}, lr = {
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
}, ur = {
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
function os() {
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
      paper: Vr.white,
      default: Vr.white
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
const gd = os();
function as() {
  return {
    text: {
      primary: Vr.white,
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
      active: Vr.white,
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
const Qa = as();
function Ja(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ta(e.main, o) : t === "dark" && (e.dark = ea(e.main, a)));
}
function md(e = "light") {
  return e === "dark" ? {
    main: cr[200],
    light: cr[50],
    dark: cr[400]
  } : {
    main: cr[700],
    light: cr[400],
    dark: cr[800]
  };
}
function yd(e = "light") {
  return e === "dark" ? {
    main: ir[200],
    light: ir[50],
    dark: ir[400]
  } : {
    main: ir[500],
    light: ir[300],
    dark: ir[700]
  };
}
function bd(e = "light") {
  return e === "dark" ? {
    main: sr[500],
    light: sr[300],
    dark: sr[700]
  } : {
    main: sr[700],
    light: sr[400],
    dark: sr[800]
  };
}
function vd(e = "light") {
  return e === "dark" ? {
    main: lr[400],
    light: lr[300],
    dark: lr[700]
  } : {
    main: lr[700],
    light: lr[500],
    dark: lr[900]
  };
}
function wd(e = "light") {
  return e === "dark" ? {
    main: ur[400],
    light: ur[300],
    dark: ur[700]
  } : {
    main: ur[800],
    light: ur[500],
    dark: ur[900]
  };
}
function Cd(e = "light") {
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
function aa(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, a = e.primary || md(t), i = e.secondary || yd(t), s = e.error || bd(t), l = e.info || vd(t), u = e.success || wd(t), f = e.warning || Cd(t);
  function d(m) {
    const g = Na(m, Qa.text.primary) >= r ? Qa.text.primary : gd.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = Na(m, g);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${g} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const h = ({
    color: m,
    name: g,
    mainShade: x = 500,
    lightShade: R = 300,
    darkShade: S = 700
  }) => {
    if (m = {
      ...m
    }, !m.main && m[x] && (m.main = m[x]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Lt(11, g ? ` (${g})` : "", x));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Lt(12, g ? ` (${g})` : "", JSON.stringify(m.main)));
    return Ja(m, "light", R, n), Ja(m, "dark", S, n), m.contrastText || (m.contrastText = d(m.main)), m;
  };
  let v;
  return t === "light" ? v = os() : t === "dark" && (v = as()), process.env.NODE_ENV !== "production" && (v || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), st({
    // A collection of common colors.
    common: {
      ...Vr
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
      color: i,
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
      color: f,
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
    grey: hd,
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
function xd(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Sd(e, t) {
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
function Ed(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ei = {
  textTransform: "uppercase"
}, ti = '"Roboto", "Helvetica", "Arial", sans-serif';
function Td(e, t) {
  const {
    fontFamily: r = ti,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: i = 500,
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
  const h = n / 14, v = f || ((g) => `${g / l * h}rem`), w = (g, x, R, S, C) => ({
    fontFamily: r,
    fontWeight: g,
    fontSize: v(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ti ? {
      letterSpacing: `${Ed(S / x)}em`
    } : {},
    ...C,
    ...u
  }), m = {
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
    button: w(i, 14, 1.75, 0.4, ei),
    caption: w(a, 12, 1.66, 0.4),
    overline: w(a, 12, 2.66, 1, ei),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return st({
    htmlFontSize: l,
    pxToRem: v,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: i,
    fontWeightBold: s,
    ...m
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const Rd = 0.2, kd = 0.14, Od = 0.12;
function $e(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Rd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${kd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Od})`].join(",");
}
const $d = ["none", $e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), $e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), $e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), $e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), $e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), $e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), $e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), $e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), $e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), $e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), $e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), $e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), $e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), $e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), $e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), $e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), $e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), $e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), $e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), $e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), $e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), $e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), $e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), $e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Pd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Id = {
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
function ri(e) {
  return `${Math.round(e)}ms`;
}
function Dd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Md(e) {
  const t = {
    ...Pd,
    ...e.easing
  }, r = {
    ...Id,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Dd,
    create: (o = ["all"], a = {}) => {
      const {
        duration: i = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", d = (h) => !Number.isNaN(parseFloat(h));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(i) && !f(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), f(s) || console.error('MUI: Argument "easing" must be a string.'), !d(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof i == "string" ? i : ri(i)} ${s} ${typeof l == "string" ? l : ri(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const _d = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ad(e) {
  return Dt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function is(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [i, s] = o[a];
      !Ad(s) || i.startsWith("unstable_") ? delete n[i] : Dt(s) && (n[i] = {
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
function zo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: i = {},
    typography: s = {},
    shape: l,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Lt(20));
  const f = aa(a), d = Zi(e);
  let h = st(d, {
    mixins: Sd(d.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: $d.slice(),
    typography: Td(f, s),
    transitions: Md(i),
    zIndex: {
      ..._d
    }
  });
  if (h = st(h, u), h = t.reduce((v, w) => st(v, w), h), process.env.NODE_ENV !== "production") {
    const v = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], w = (m, g) => {
      let x;
      for (x in m) {
        const R = m[x];
        if (v.includes(x) && Object.keys(R).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = er("", x);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: R
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[x] = {};
        }
      }
    };
    Object.keys(h.components).forEach((m) => {
      const g = h.components[m].styleOverrides;
      g && m.startsWith("Mui") && w(g, m);
    });
  }
  return h.unstable_sxConfig = {
    ...Jn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(w) {
    return yr({
      sx: w,
      theme: this
    });
  }, h.toRuntimeSource = is, h;
}
function Nd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Fd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Nd(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ss(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function cs(e) {
  return e === "dark" ? Fd : [];
}
function jd(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, a = aa(t);
  return {
    palette: a,
    opacity: {
      ...ss(a.mode),
      ...r
    },
    overlays: n || cs(a.mode),
    ...o
  };
}
function zd(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Bd = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ld = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return Bd(e.cssVarPrefix).forEach((s) => {
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
function Wd(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function T(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Fr(e) {
  return !e || !e.startsWith("hsl") ? e : Ui(e);
}
function It(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Nr(Fr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Yd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const xt = (e) => {
  try {
    return e();
  } catch {
  }
}, Vd = (e = "mui") => ld(e);
function Co(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = jd({
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
  } = zo({
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
      ...ss(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || cs(o)
  }, i;
}
function Hd(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: i = zd,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, f = Object.keys(r)[0], d = n || (r.light && f !== "light" ? "light" : f), h = Vd(a), {
    [d]: v,
    light: w,
    dark: m,
    ...g
  } = r, x = {
    ...g
  };
  let R = v;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (R = !0), !R)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Lt(21, d));
  const S = Co(x, R, u, d);
  w && !x.light && Co(x, w, void 0, "light"), m && !x.dark && Co(x, m, void 0, "dark");
  let C = {
    defaultColorScheme: d,
    ...S,
    cssVarPrefix: a,
    colorSchemeSelector: s,
    rootSelector: l,
    getCssVar: h,
    colorSchemes: x,
    font: {
      ...xd(S.typography),
      ...S.font
    },
    spacing: Yd(u.spacing)
  };
  Object.keys(C.colorSchemes).forEach((N) => {
    const c = C.colorSchemes[N].palette, k = (_) => {
      const I = _.split("-"), U = I[1], q = I[2];
      return h(_, c[U][q]);
    };
    if (c.mode === "light" && (T(c.common, "background", "#fff"), T(c.common, "onBackground", "#000")), c.mode === "dark" && (T(c.common, "background", "#000"), T(c.common, "onBackground", "#fff")), Wd(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      T(c.Alert, "errorColor", Te(c.error.light, 0.6)), T(c.Alert, "infoColor", Te(c.info.light, 0.6)), T(c.Alert, "successColor", Te(c.success.light, 0.6)), T(c.Alert, "warningColor", Te(c.warning.light, 0.6)), T(c.Alert, "errorFilledBg", k("palette-error-main")), T(c.Alert, "infoFilledBg", k("palette-info-main")), T(c.Alert, "successFilledBg", k("palette-success-main")), T(c.Alert, "warningFilledBg", k("palette-warning-main")), T(c.Alert, "errorFilledColor", xt(() => c.getContrastText(c.error.main))), T(c.Alert, "infoFilledColor", xt(() => c.getContrastText(c.info.main))), T(c.Alert, "successFilledColor", xt(() => c.getContrastText(c.success.main))), T(c.Alert, "warningFilledColor", xt(() => c.getContrastText(c.warning.main))), T(c.Alert, "errorStandardBg", Re(c.error.light, 0.9)), T(c.Alert, "infoStandardBg", Re(c.info.light, 0.9)), T(c.Alert, "successStandardBg", Re(c.success.light, 0.9)), T(c.Alert, "warningStandardBg", Re(c.warning.light, 0.9)), T(c.Alert, "errorIconColor", k("palette-error-main")), T(c.Alert, "infoIconColor", k("palette-info-main")), T(c.Alert, "successIconColor", k("palette-success-main")), T(c.Alert, "warningIconColor", k("palette-warning-main")), T(c.AppBar, "defaultBg", k("palette-grey-100")), T(c.Avatar, "defaultBg", k("palette-grey-400")), T(c.Button, "inheritContainedBg", k("palette-grey-300")), T(c.Button, "inheritContainedHoverBg", k("palette-grey-A100")), T(c.Chip, "defaultBorder", k("palette-grey-400")), T(c.Chip, "defaultAvatarColor", k("palette-grey-700")), T(c.Chip, "defaultIconColor", k("palette-grey-700")), T(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), T(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), T(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), T(c.LinearProgress, "primaryBg", Re(c.primary.main, 0.62)), T(c.LinearProgress, "secondaryBg", Re(c.secondary.main, 0.62)), T(c.LinearProgress, "errorBg", Re(c.error.main, 0.62)), T(c.LinearProgress, "infoBg", Re(c.info.main, 0.62)), T(c.LinearProgress, "successBg", Re(c.success.main, 0.62)), T(c.LinearProgress, "warningBg", Re(c.warning.main, 0.62)), T(c.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.11)`), T(c.Slider, "primaryTrack", Re(c.primary.main, 0.62)), T(c.Slider, "secondaryTrack", Re(c.secondary.main, 0.62)), T(c.Slider, "errorTrack", Re(c.error.main, 0.62)), T(c.Slider, "infoTrack", Re(c.info.main, 0.62)), T(c.Slider, "successTrack", Re(c.success.main, 0.62)), T(c.Slider, "warningTrack", Re(c.warning.main, 0.62));
      const _ = vn(c.background.default, 0.8);
      T(c.SnackbarContent, "bg", _), T(c.SnackbarContent, "color", xt(() => c.getContrastText(_))), T(c.SpeedDialAction, "fabHoverBg", vn(c.background.paper, 0.15)), T(c.StepConnector, "border", k("palette-grey-400")), T(c.StepContent, "border", k("palette-grey-400")), T(c.Switch, "defaultColor", k("palette-common-white")), T(c.Switch, "defaultDisabledColor", k("palette-grey-100")), T(c.Switch, "primaryDisabledColor", Re(c.primary.main, 0.62)), T(c.Switch, "secondaryDisabledColor", Re(c.secondary.main, 0.62)), T(c.Switch, "errorDisabledColor", Re(c.error.main, 0.62)), T(c.Switch, "infoDisabledColor", Re(c.info.main, 0.62)), T(c.Switch, "successDisabledColor", Re(c.success.main, 0.62)), T(c.Switch, "warningDisabledColor", Re(c.warning.main, 0.62)), T(c.TableCell, "border", Re(bn(c.divider, 1), 0.88)), T(c.Tooltip, "bg", bn(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      T(c.Alert, "errorColor", Re(c.error.light, 0.6)), T(c.Alert, "infoColor", Re(c.info.light, 0.6)), T(c.Alert, "successColor", Re(c.success.light, 0.6)), T(c.Alert, "warningColor", Re(c.warning.light, 0.6)), T(c.Alert, "errorFilledBg", k("palette-error-dark")), T(c.Alert, "infoFilledBg", k("palette-info-dark")), T(c.Alert, "successFilledBg", k("palette-success-dark")), T(c.Alert, "warningFilledBg", k("palette-warning-dark")), T(c.Alert, "errorFilledColor", xt(() => c.getContrastText(c.error.dark))), T(c.Alert, "infoFilledColor", xt(() => c.getContrastText(c.info.dark))), T(c.Alert, "successFilledColor", xt(() => c.getContrastText(c.success.dark))), T(c.Alert, "warningFilledColor", xt(() => c.getContrastText(c.warning.dark))), T(c.Alert, "errorStandardBg", Te(c.error.light, 0.9)), T(c.Alert, "infoStandardBg", Te(c.info.light, 0.9)), T(c.Alert, "successStandardBg", Te(c.success.light, 0.9)), T(c.Alert, "warningStandardBg", Te(c.warning.light, 0.9)), T(c.Alert, "errorIconColor", k("palette-error-main")), T(c.Alert, "infoIconColor", k("palette-info-main")), T(c.Alert, "successIconColor", k("palette-success-main")), T(c.Alert, "warningIconColor", k("palette-warning-main")), T(c.AppBar, "defaultBg", k("palette-grey-900")), T(c.AppBar, "darkBg", k("palette-background-paper")), T(c.AppBar, "darkColor", k("palette-text-primary")), T(c.Avatar, "defaultBg", k("palette-grey-600")), T(c.Button, "inheritContainedBg", k("palette-grey-800")), T(c.Button, "inheritContainedHoverBg", k("palette-grey-700")), T(c.Chip, "defaultBorder", k("palette-grey-700")), T(c.Chip, "defaultAvatarColor", k("palette-grey-300")), T(c.Chip, "defaultIconColor", k("palette-grey-300")), T(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), T(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), T(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), T(c.LinearProgress, "primaryBg", Te(c.primary.main, 0.5)), T(c.LinearProgress, "secondaryBg", Te(c.secondary.main, 0.5)), T(c.LinearProgress, "errorBg", Te(c.error.main, 0.5)), T(c.LinearProgress, "infoBg", Te(c.info.main, 0.5)), T(c.LinearProgress, "successBg", Te(c.success.main, 0.5)), T(c.LinearProgress, "warningBg", Te(c.warning.main, 0.5)), T(c.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.13)`), T(c.Slider, "primaryTrack", Te(c.primary.main, 0.5)), T(c.Slider, "secondaryTrack", Te(c.secondary.main, 0.5)), T(c.Slider, "errorTrack", Te(c.error.main, 0.5)), T(c.Slider, "infoTrack", Te(c.info.main, 0.5)), T(c.Slider, "successTrack", Te(c.success.main, 0.5)), T(c.Slider, "warningTrack", Te(c.warning.main, 0.5));
      const _ = vn(c.background.default, 0.98);
      T(c.SnackbarContent, "bg", _), T(c.SnackbarContent, "color", xt(() => c.getContrastText(_))), T(c.SpeedDialAction, "fabHoverBg", vn(c.background.paper, 0.15)), T(c.StepConnector, "border", k("palette-grey-600")), T(c.StepContent, "border", k("palette-grey-600")), T(c.Switch, "defaultColor", k("palette-grey-300")), T(c.Switch, "defaultDisabledColor", k("palette-grey-600")), T(c.Switch, "primaryDisabledColor", Te(c.primary.main, 0.55)), T(c.Switch, "secondaryDisabledColor", Te(c.secondary.main, 0.55)), T(c.Switch, "errorDisabledColor", Te(c.error.main, 0.55)), T(c.Switch, "infoDisabledColor", Te(c.info.main, 0.55)), T(c.Switch, "successDisabledColor", Te(c.success.main, 0.55)), T(c.Switch, "warningDisabledColor", Te(c.warning.main, 0.55)), T(c.TableCell, "border", Te(bn(c.divider, 1), 0.68)), T(c.Tooltip, "bg", bn(c.grey[700], 0.92));
    }
    It(c.background, "default"), It(c.background, "paper"), It(c.common, "background"), It(c.common, "onBackground"), It(c, "divider"), Object.keys(c).forEach((_) => {
      const I = c[_];
      I && typeof I == "object" && (I.main && T(c[_], "mainChannel", Nr(Fr(I.main))), I.light && T(c[_], "lightChannel", Nr(Fr(I.light))), I.dark && T(c[_], "darkChannel", Nr(Fr(I.dark))), I.contrastText && T(c[_], "contrastTextChannel", Nr(Fr(I.contrastText))), _ === "text" && (It(c[_], "primary"), It(c[_], "secondary")), _ === "action" && (I.active && It(c[_], "active"), I.selected && It(c[_], "selected")));
    });
  }), C = t.reduce((N, c) => st(N, c), C);
  const y = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: i,
    getSelector: Ld(C)
  }, {
    vars: O,
    generateThemeVars: E,
    generateStyleSheets: M
  } = fd(C, y);
  return C.vars = O, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([N, c]) => {
    C[N] = c;
  }), C.generateThemeVars = E, C.generateStyleSheets = M, C.generateSpacing = function() {
    return Xi(u.spacing, ra(this));
  }, C.getColorSchemeSelector = pd(s), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = i, C.unstable_sxConfig = {
    ...Jn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, C.unstable_sx = function(c) {
    return yr({
      sx: c,
      theme: this
    });
  }, C.toRuntimeSource = is, C;
}
function ni(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: aa({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ud(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...i
  } = e, s = a || "light", l = o == null ? void 0 : o[s], u = {
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
    }, ni(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, ni(d, "light", u.light)), d;
  }
  return !r && !("light" in u) && s === "light" && (u.light = !0), Hd({
    ...i,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Gd = Ud(), Kd = "$$material", kt = Vu({
  themeId: Kd,
  defaultTheme: Gd,
  rootShouldForwardProp: Gi
}), Hr = cd;
process.env.NODE_ENV !== "production" && (b.node, b.object.isRequired);
function xr(e) {
  return sd(e);
}
class An {
  constructor() {
    $r(this, "mountEffect", () => {
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
    const t = ns(An.create).current, [r, n] = Y.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, Y.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Xd(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function qd() {
  return An.use();
}
function Xd() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Zd(e, t) {
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
function Qd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Bo(e, t);
}
const oi = Mt.createContext(null);
function Jd(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ia(e, t) {
  var r = function(a) {
    return t && Cn(a) ? t(a) : a;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && hc.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function ef(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var a in e)
    a in t ? o.length && (n[a] = o, o = []) : o.push(a);
  var i, s = {};
  for (var l in t) {
    if (n[l])
      for (i = 0; i < n[l].length; i++) {
        var u = n[l][i];
        s[n[l][i]] = r(u);
      }
    s[l] = r(l);
  }
  for (i = 0; i < o.length; i++)
    s[o[i]] = r(o[i]);
  return s;
}
function Qt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function tf(e, t) {
  return ia(e.children, function(r) {
    return xn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Qt(r, "appear", e),
      enter: Qt(r, "enter", e),
      exit: Qt(r, "exit", e)
    });
  });
}
function rf(e, t, r) {
  var n = ia(e.children), o = ef(t, n);
  return Object.keys(o).forEach(function(a) {
    var i = o[a];
    if (Cn(i)) {
      var s = a in t, l = a in n, u = t[a], f = Cn(u) && !u.props.in;
      l && (!s || f) ? o[a] = xn(i, {
        onExited: r.bind(null, i),
        in: !0,
        exit: Qt(i, "exit", e),
        enter: Qt(i, "enter", e)
      }) : !l && s && !f ? o[a] = xn(i, {
        in: !1
      }) : l && s && Cn(u) && (o[a] = xn(i, {
        onExited: r.bind(null, i),
        in: u.props.in,
        exit: Qt(i, "exit", e),
        enter: Qt(i, "enter", e)
      }));
    }
  }), o;
}
var nf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, of = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, sa = /* @__PURE__ */ function(e) {
  Qd(t, e);
  function t(n, o) {
    var a;
    a = e.call(this, n, o) || this;
    var i = a.handleExited.bind(Jd(a));
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
    var i = a.children, s = a.handleExited, l = a.firstRender;
    return {
      children: l ? tf(o, s) : rf(o, i, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, a) {
    var i = ia(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(a), this.mounted && this.setState(function(s) {
      var l = In({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, a = o.component, i = o.childFactory, s = Zd(o, ["component", "childFactory"]), l = this.state.contextValue, u = nf(this.state.children).map(i);
    return delete s.appear, delete s.enter, delete s.exit, a === null ? /* @__PURE__ */ Mt.createElement(oi.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Mt.createElement(oi.Provider, {
      value: l
    }, /* @__PURE__ */ Mt.createElement(a, s, u));
  }, t;
}(Mt.Component);
sa.propTypes = process.env.NODE_ENV !== "production" ? {
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
sa.defaultProps = of;
function ls(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: a,
    rippleSize: i,
    in: s,
    onExited: l,
    timeout: u
  } = e, [f, d] = Y.useState(!1), h = Se(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: i,
    height: i,
    top: -(i / 2) + a,
    left: -(i / 2) + o
  }, w = Se(r.child, f && r.childLeaving, n && r.childPulsate);
  return !s && !f && d(!0), Y.useEffect(() => {
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
      className: w
    })
  });
}
process.env.NODE_ENV !== "production" && (ls.propTypes = {
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
const dt = Cr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Lo = 550, af = 80, sf = Zo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, cf = Zo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, lf = Zo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, uf = kt("span", {
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
}), df = kt(ls, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${dt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${sf};
    animation-duration: ${Lo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${dt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${dt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${dt.childLeaving} {
    opacity: 0;
    animation-name: ${cf};
    animation-duration: ${Lo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${dt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${lf};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, us = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = xr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: a = {},
    className: i,
    ...s
  } = n, [l, u] = Y.useState([]), f = Y.useRef(0), d = Y.useRef(null);
  Y.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const h = Y.useRef(!1), v = od(), w = Y.useRef(null), m = Y.useRef(null), g = Y.useCallback((C) => {
    const {
      pulsate: y,
      rippleX: O,
      rippleY: E,
      rippleSize: M,
      cb: N
    } = C;
    u((c) => [...c, /* @__PURE__ */ L.jsx(df, {
      classes: {
        ripple: Se(a.ripple, dt.ripple),
        rippleVisible: Se(a.rippleVisible, dt.rippleVisible),
        ripplePulsate: Se(a.ripplePulsate, dt.ripplePulsate),
        child: Se(a.child, dt.child),
        childLeaving: Se(a.childLeaving, dt.childLeaving),
        childPulsate: Se(a.childPulsate, dt.childPulsate)
      },
      timeout: Lo,
      pulsate: y,
      rippleX: O,
      rippleY: E,
      rippleSize: M
    }, f.current)]), f.current += 1, d.current = N;
  }, [a]), x = Y.useCallback((C = {}, y = {}, O = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: M = o || y.pulsate,
      fakeElement: N = !1
      // For test purposes
    } = y;
    if ((C == null ? void 0 : C.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (h.current = !0);
    const c = N ? null : m.current, k = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let _, I, U;
    if (M || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      _ = Math.round(k.width / 2), I = Math.round(k.height / 2);
    else {
      const {
        clientX: q,
        clientY: ae
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      _ = Math.round(q - k.left), I = Math.round(ae - k.top);
    }
    if (M)
      U = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const q = Math.max(Math.abs((c ? c.clientWidth : 0) - _), _) * 2 + 2, ae = Math.max(Math.abs((c ? c.clientHeight : 0) - I), I) * 2 + 2;
      U = Math.sqrt(q ** 2 + ae ** 2);
    }
    C != null && C.touches ? w.current === null && (w.current = () => {
      g({
        pulsate: E,
        rippleX: _,
        rippleY: I,
        rippleSize: U,
        cb: O
      });
    }, v.start(af, () => {
      w.current && (w.current(), w.current = null);
    })) : g({
      pulsate: E,
      rippleX: _,
      rippleY: I,
      rippleSize: U,
      cb: O
    });
  }, [o, g, v]), R = Y.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), S = Y.useCallback((C, y) => {
    if (v.clear(), (C == null ? void 0 : C.type) === "touchend" && w.current) {
      w.current(), w.current = null, v.start(0, () => {
        S(C, y);
      });
      return;
    }
    w.current = null, u((O) => O.length > 0 ? O.slice(1) : O), d.current = y;
  }, [v]);
  return Y.useImperativeHandle(r, () => ({
    pulsate: R,
    start: x,
    stop: S
  }), [R, x, S]), /* @__PURE__ */ L.jsx(uf, {
    className: Se(dt.root, a.root, i),
    ref: m,
    ...s,
    children: /* @__PURE__ */ L.jsx(sa, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (us.propTypes = {
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
function ff(e) {
  return er("MuiButtonBase", e);
}
const pf = Cr("MuiButtonBase", ["root", "disabled", "focusVisible"]), hf = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, i = Qr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, ff, o);
  return r && n && (i.root += ` ${n}`), i;
}, gf = kt("button", {
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
  [`&.${pf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ur = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = xr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: a = !1,
    children: i,
    className: s,
    component: l = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: d = !1,
    focusRipple: h = !1,
    focusVisibleClassName: v,
    LinkComponent: w = "a",
    onBlur: m,
    onClick: g,
    onContextMenu: x,
    onDragLeave: R,
    onFocus: S,
    onFocusVisible: C,
    onKeyDown: y,
    onKeyUp: O,
    onMouseDown: E,
    onMouseLeave: M,
    onMouseUp: N,
    onTouchEnd: c,
    onTouchMove: k,
    onTouchStart: _,
    tabIndex: I = 0,
    TouchRippleProps: U,
    touchRippleRef: q,
    type: ae,
    ...he
  } = n, Ce = Y.useRef(null), ce = qd(), D = jo(ce.ref, q), [z, ne] = Y.useState(!1);
  u && z && ne(!1), Y.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ne(!0), Ce.current.focus();
    }
  }), []);
  const oe = ce.shouldMount && !f && !u;
  Y.useEffect(() => {
    z && h && !f && ce.pulsate();
  }, [f, h, z, ce]);
  function W(te, Ut, Gt = d) {
    return wn((Kt) => (Ut && Ut(Kt), Gt || ce[te](Kt), !0));
  }
  const ie = W("start", E), X = W("stop", x), F = W("stop", R), V = W("stop", N), ee = W("stop", (te) => {
    z && te.preventDefault(), M && M(te);
  }), J = W("start", _), ke = W("stop", c), j = W("stop", k), Me = W("stop", (te) => {
    qa(te.target) || ne(!1), m && m(te);
  }, !1), H = wn((te) => {
    Ce.current || (Ce.current = te.currentTarget), qa(te.target) && (ne(!0), C && C(te)), S && S(te);
  }), Fe = () => {
    const te = Ce.current;
    return l && l !== "button" && !(te.tagName === "A" && te.href);
  }, Ye = wn((te) => {
    h && !te.repeat && z && te.key === " " && ce.stop(te, () => {
      ce.start(te);
    }), te.target === te.currentTarget && Fe() && te.key === " " && te.preventDefault(), y && y(te), te.target === te.currentTarget && Fe() && te.key === "Enter" && !u && (te.preventDefault(), g && g(te));
  }), ct = wn((te) => {
    h && te.key === " " && z && !te.defaultPrevented && ce.stop(te, () => {
      ce.pulsate(te);
    }), O && O(te), g && te.target === te.currentTarget && Fe() && te.key === " " && !te.defaultPrevented && g(te);
  });
  let Ze = l;
  Ze === "button" && (he.href || he.to) && (Ze = w);
  const Ve = {};
  Ze === "button" ? (Ve.type = ae === void 0 ? "button" : ae, Ve.disabled = u) : (!he.href && !he.to && (Ve.role = "button"), u && (Ve["aria-disabled"] = u));
  const Ht = jo(r, Ce), vt = {
    ...n,
    centerRipple: a,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: I,
    focusVisible: z
  }, lt = hf(vt);
  return /* @__PURE__ */ L.jsxs(gf, {
    as: Ze,
    className: Se(lt.root, s),
    ownerState: vt,
    onBlur: Me,
    onClick: g,
    onContextMenu: X,
    onFocus: H,
    onKeyDown: Ye,
    onKeyUp: ct,
    onMouseDown: ie,
    onMouseLeave: ee,
    onMouseUp: V,
    onDragLeave: F,
    onTouchEnd: ke,
    onTouchMove: j,
    onTouchStart: J,
    ref: Ht,
    tabIndex: u ? -1 : I,
    type: ae,
    ...Ve,
    ...he,
    children: [i, oe ? /* @__PURE__ */ L.jsx(us, {
      ref: D,
      center: a,
      ...U
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ju,
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
  component: Qu,
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
function mf(e) {
  return typeof e.main == "string";
}
function yf(e, t = []) {
  if (!mf(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Jt(e = []) {
  return ([, t]) => t && yf(t, e);
}
function bf(e) {
  return er("MuiButton", e);
}
const dr = Cr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ds = /* @__PURE__ */ Y.createContext({});
process.env.NODE_ENV !== "production" && (ds.displayName = "ButtonGroupContext");
const fs = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && (fs.displayName = "ButtonGroupButtonContext");
const vf = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: a,
    classes: i
  } = e, s = {
    root: ["root", a, `${a}${Q(t)}`, `size${Q(o)}`, `${a}Size${Q(o)}`, `color${Q(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Q(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Q(o)}`]
  }, l = Qr(s, bf, i);
  return {
    ...i,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, ps = [{
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
}], wf = kt(Ur, {
  shouldForwardProp: (e) => Gi(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Q(r.color)}`], t[`size${Q(r.size)}`], t[`${r.variant}Size${Q(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Hr(({
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
    [`&.${dr.disabled}`]: {
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
        [`&.${dr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${dr.disabled}`]: {
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
        [`&.${dr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Jt()).map(([n]) => ({
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
        [`&.${dr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${dr.disabled}`]: {
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
})), Cf = kt("span", {
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
  }, ...ps]
}), xf = kt("span", {
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
  }, ...ps]
}), hs = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = Y.useContext(ds), o = Y.useContext(fs), a = Mn(n, t), i = xr({
    props: a,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: u = "button",
    className: f,
    disabled: d = !1,
    disableElevation: h = !1,
    disableFocusRipple: v = !1,
    endIcon: w,
    focusVisibleClassName: m,
    fullWidth: g = !1,
    size: x = "medium",
    startIcon: R,
    type: S,
    variant: C = "text",
    ...y
  } = i, O = {
    ...i,
    color: l,
    component: u,
    disabled: d,
    disableElevation: h,
    disableFocusRipple: v,
    fullWidth: g,
    size: x,
    type: S,
    variant: C
  }, E = vf(O), M = R && /* @__PURE__ */ L.jsx(Cf, {
    className: E.startIcon,
    ownerState: O,
    children: R
  }), N = w && /* @__PURE__ */ L.jsx(xf, {
    className: E.endIcon,
    ownerState: O,
    children: w
  }), c = o || "";
  return /* @__PURE__ */ L.jsxs(wf, {
    ownerState: O,
    className: Se(n.className, E.root, f, c),
    component: u,
    disabled: d,
    focusRipple: !v,
    focusVisibleClassName: Se(E.focusVisible, m),
    ref: r,
    type: S,
    ...y,
    classes: E,
    children: [M, s, N]
  });
});
process.env.NODE_ENV !== "production" && (hs.propTypes = {
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
const De = {
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
}, gs = _t(hs, {
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
      return Rn`
                    background: ${De.primary500};
                    color: ${De.gray100};
                `;
    case "secondary":
      return Rn`
                    border: 1px solid ${De.primary500};
                    background: ${De.gray100};
                    color: ${De.primary500};
                `;
    default:
      return Rn`
                    background: ${De.gray100};
                    color: ${De.gray700};
                `;
  }
}}
`;
function pt(e, t, r) {
  const n = typeof e.colSpan == "function" ? e.colSpan(r) : 1;
  if (Number.isInteger(n) && n > 1 && (!e.frozen || e.idx + n - 1 <= t))
    return n;
}
function Sf(e) {
  e.stopPropagation();
}
function On(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function zr(e) {
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
const Ef = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function Wo(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function Tf(e) {
  return Wo(e) && e.keyCode !== 86 ? !1 : !Ef.has(e.key);
}
function Rf({
  key: e,
  target: t
}) {
  var r;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((r = t.closest(".rdg-editor-container")) == null ? void 0 : r.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const kf = "mlln6zg7-0-0-beta-47";
function Of(e) {
  return e.map(({
    key: t,
    idx: r,
    minWidth: n,
    maxWidth: o
  }) => /* @__PURE__ */ L.jsx("div", {
    className: kf,
    style: {
      gridColumnStart: r + 1,
      minWidth: n,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function $f({
  selectedPosition: e,
  columns: t,
  rows: r
}) {
  const n = t[e.idx], o = r[e.rowIdx];
  return ms(n, o);
}
function ms(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Pf({
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
    return pt(i, a, {
      type: "HEADER"
    });
  if (t && n > o && n <= s + o)
    return pt(i, a, {
      type: "SUMMARY",
      row: t[n + s]
    });
  if (n >= 0 && n < e.length) {
    const l = e[n];
    return pt(i, a, {
      type: "ROW",
      row: l
    });
  }
  if (r)
    return pt(i, a, {
      type: "SUMMARY",
      row: r[n - e.length]
    });
}
function If({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: r,
  columns: n,
  colSpanColumns: o,
  rows: a,
  topSummaryRows: i,
  bottomSummaryRows: s,
  minRowIdx: l,
  mainHeaderRowIdx: u,
  maxRowIdx: f,
  currentPosition: {
    idx: d,
    rowIdx: h
  },
  nextPosition: v,
  lastFrozenColumnIndex: w,
  isCellWithinBounds: m
}) {
  let {
    idx: g,
    rowIdx: x
  } = v;
  const R = n.length, S = (O) => {
    for (const E of o) {
      const M = E.idx;
      if (M > g) break;
      const N = Pf({
        rows: a,
        topSummaryRows: i,
        bottomSummaryRows: s,
        rowIdx: x,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: w,
        column: E
      });
      if (N && g > M && g < N + M) {
        g = M + (O ? N : 0);
        break;
      }
    }
  }, C = (O) => O.level + u, y = () => {
    if (t) {
      let E = n[g].parent;
      for (; E !== void 0; ) {
        const M = C(E);
        if (x === M) {
          g = E.idx + E.colSpan;
          break;
        }
        E = E.parent;
      }
    } else if (e) {
      let E = n[g].parent, M = !1;
      for (; E !== void 0; ) {
        const N = C(E);
        if (x >= N) {
          g = E.idx, x = N, M = !0;
          break;
        }
        E = E.parent;
      }
      M || (g = d, x = h);
    }
  };
  if (m(v) && (S(t), x < u && y()), r === "CHANGE_ROW" && (g === R ? x === f || (g = 0, x += 1) : g === -1 && (x === l || (x -= 1, g = R - 1), S(!1))), x < u) {
    let E = n[g].parent;
    const M = x;
    for (x = u; E !== void 0; ) {
      const N = C(E);
      N >= M && (x = N, g = E.idx), E = E.parent;
    }
  }
  return {
    idx: g,
    rowIdx: x
  };
}
function Df({
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
const Mf = "cj343x07-0-0-beta-47", ys = `rdg-cell ${Mf}`, _f = "csofj7r7-0-0-beta-47", Af = `rdg-cell-frozen ${_f}`;
function bs(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function vs(e, t, r) {
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
function tn(e, t = 1) {
  const r = e.idx + 1;
  return {
    gridColumnStart: r,
    gridColumnEnd: r + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function eo(e, ...t) {
  return Se(ys, ...t, e.frozen && Af);
}
const {
  min: Gr,
  max: Nn,
  floor: ai,
  sign: Nf,
  abs: Ff
} = Math;
function xo(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function ws(e, {
  minWidth: t,
  maxWidth: r
}) {
  return e = Nn(e, t), typeof r == "number" && r >= t ? Gr(e, r) : e;
}
function Cs(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const jf = "c1bn88vv7-0-0-beta-47", zf = `rdg-checkbox-input ${jf}`;
function Bf({
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
    className: zf,
    onChange: n,
    ...r
  });
}
function Lf(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const xs = /* @__PURE__ */ Xr(void 0), Wf = xs.Provider;
function Ss() {
  return Pi(xs);
}
const Yf = /* @__PURE__ */ Xr(void 0), Vf = Yf.Provider, Hf = /* @__PURE__ */ Xr(void 0), Uf = Hf.Provider, Gf = /* @__PURE__ */ Xr(void 0), Kf = Gf.Provider, qf = /* @__PURE__ */ Xr(void 0), Xf = qf.Provider, ii = "rdg-select-column", Zf = "auto", Qf = 50;
function Jf({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: r,
  viewportWidth: n,
  scrollLeft: o,
  enableVirtualization: a
}) {
  const i = (t == null ? void 0 : t.width) ?? Zf, s = (t == null ? void 0 : t.minWidth) ?? Qf, l = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? Lf, f = (t == null ? void 0 : t.sortable) ?? !1, d = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: v,
    colSpanColumns: w,
    lastFrozenColumnIndex: m,
    headerRowsCount: g
  } = ht(() => {
    let E = -1, M = 1;
    const N = [];
    c(e, 1);
    function c(_, I, U) {
      for (const q of _) {
        if ("children" in q) {
          const Ce = {
            name: q.name,
            parent: U,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: q.headerCellClass
          };
          c(q.children, I + 1, Ce);
          continue;
        }
        const ae = q.frozen ?? !1, he = {
          ...q,
          parent: U,
          idx: 0,
          level: 0,
          frozen: ae,
          width: q.width ?? i,
          minWidth: q.minWidth ?? s,
          maxWidth: q.maxWidth ?? l,
          sortable: q.sortable ?? f,
          resizable: q.resizable ?? d,
          draggable: q.draggable ?? h,
          renderCell: q.renderCell ?? u
        };
        N.push(he), ae && E++, I > M && (M = I);
      }
    }
    N.sort(({
      key: _,
      frozen: I
    }, {
      key: U,
      frozen: q
    }) => _ === ii ? -1 : U === ii ? 1 : I ? q ? 0 : -1 : q ? 1 : 0);
    const k = [];
    return N.forEach((_, I) => {
      _.idx = I, Es(_, I, 0), _.colSpan != null && k.push(_);
    }), {
      columns: N,
      colSpanColumns: k,
      lastFrozenColumnIndex: E,
      headerRowsCount: M
    };
  }, [e, i, s, l, u, d, f, h]), {
    templateColumns: x,
    layoutCssVars: R,
    totalFrozenColumnWidth: S,
    columnMetrics: C
  } = ht(() => {
    const E = /* @__PURE__ */ new Map();
    let M = 0, N = 0;
    const c = [];
    for (const _ of v) {
      let I = r(_);
      typeof I == "number" ? I = ws(I, _) : I = _.minWidth, c.push(`${I}px`), E.set(_, {
        width: I,
        left: M
      }), M += I;
    }
    if (m !== -1) {
      const _ = E.get(v[m]);
      N = _.left + _.width;
    }
    const k = {};
    for (let _ = 0; _ <= m; _++) {
      const I = v[_];
      k[`--rdg-frozen-left-${I.idx}`] = `${E.get(I).left}px`;
    }
    return {
      templateColumns: c,
      layoutCssVars: k,
      totalFrozenColumnWidth: N,
      columnMetrics: E
    };
  }, [r, v, m]), [y, O] = ht(() => {
    if (!a)
      return [0, v.length - 1];
    const E = o + S, M = o + n, N = v.length - 1, c = Gr(m + 1, N);
    if (E >= M)
      return [c, c];
    let k = c;
    for (; k < N; ) {
      const {
        left: q,
        width: ae
      } = C.get(v[k]);
      if (q + ae > E)
        break;
      k++;
    }
    let _ = k;
    for (; _ < N; ) {
      const {
        left: q,
        width: ae
      } = C.get(v[_]);
      if (q + ae >= M)
        break;
      _++;
    }
    const I = Nn(c, k - 1), U = Gr(N, _ + 1);
    return [I, U];
  }, [C, v, m, o, S, n, a]);
  return {
    columns: v,
    colSpanColumns: w,
    colOverscanStartIdx: y,
    colOverscanEndIdx: O,
    templateColumns: x,
    layoutCssVars: R,
    headerRowsCount: g,
    lastFrozenColumnIndex: m,
    totalFrozenColumnWidth: S
  };
}
function Es(e, t, r) {
  if (r < e.level && (e.level = r), e.parent !== void 0) {
    const {
      parent: n
    } = e;
    n.idx === -1 && (n.idx = t), n.colSpan += 1, Es(n, t, r - 1);
  }
}
const br = typeof window > "u" ? Ho : mc;
function ep(e, t, r, n, o, a, i, s, l, u) {
  const f = Tt(o), d = e.length === t.length, h = d && o !== f.current, v = [...r], w = [];
  for (const {
    key: R,
    idx: S,
    width: C
  } of t)
    typeof C == "string" && (h || !i.has(R)) && !a.has(R) && (v[S] = C, w.push(R));
  const m = v.join(" ");
  br(() => {
    f.current = o, g(w);
  });
  function g(R) {
    R.length !== 0 && l((S) => {
      const C = new Map(S);
      let y = !1;
      for (const O of R) {
        const E = si(n, O);
        y || (y = E !== S.get(O)), E === void 0 ? C.delete(O) : C.set(O, E);
      }
      return y ? C : S;
    });
  }
  function x(R, S) {
    const {
      key: C
    } = R, y = [...r], O = [];
    for (const {
      key: M,
      idx: N,
      width: c
    } of t)
      if (C === M) {
        const k = typeof S == "number" ? `${S}px` : S;
        y[N] = k;
      } else d && typeof c == "string" && !a.has(M) && (y[N] = c, O.push(M));
    n.current.style.gridTemplateColumns = y.join(" ");
    const E = typeof S == "number" ? S : si(n, C);
    Pn(() => {
      s((M) => {
        const N = new Map(M);
        return N.set(C, E), N;
      }), g(O);
    }), u == null || u(R.idx, E);
  }
  return {
    gridTemplateColumns: m,
    handleColumnResize: x
  };
}
function si(e, t) {
  var o;
  const r = `[data-measuring-cell-key="${CSS.escape(t)}"]`, n = (o = e.current) == null ? void 0 : o.querySelector(r);
  return n == null ? void 0 : n.getBoundingClientRect().width;
}
function tp() {
  const e = Tt(null), [t, r] = Ke(1), [n, o] = Ke(1), [a, i] = Ke(0);
  return br(() => {
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
      width: h,
      height: v
    } = e.current.getBoundingClientRect(), w = d - u, m = h - f + l, g = v - w;
    r(m), o(g), i(w);
    const x = new s((R) => {
      const S = R[0].contentBoxSize[0], {
        clientHeight: C,
        offsetHeight: y
      } = e.current;
      Pn(() => {
        r(S.inlineSize), o(S.blockSize), i(y - C);
      });
    });
    return x.observe(e.current), () => {
      x.disconnect();
    };
  }, []), [e, t, n, a];
}
function ot(e) {
  const t = Tt(e);
  Ho(() => {
    t.current = e;
  });
  const r = $n((...n) => {
    t.current(...n);
  }, []);
  return e && r;
}
function to(e) {
  const [t, r] = Ke(!1);
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
function rp({
  columns: e,
  colSpanColumns: t,
  rows: r,
  topSummaryRows: n,
  bottomSummaryRows: o,
  colOverscanStartIdx: a,
  colOverscanEndIdx: i,
  lastFrozenColumnIndex: s,
  rowOverscanStartIdx: l,
  rowOverscanEndIdx: u
}) {
  const f = ht(() => {
    if (a === 0) return 0;
    let d = a;
    const h = (v, w) => w !== void 0 && v + w > a ? (d = v, !0) : !1;
    for (const v of t) {
      const w = v.idx;
      if (w >= d || h(w, pt(v, s, {
        type: "HEADER"
      })))
        break;
      for (let m = l; m <= u; m++) {
        const g = r[m];
        if (h(w, pt(v, s, {
          type: "ROW",
          row: g
        })))
          break;
      }
      if (n != null) {
        for (const m of n)
          if (h(w, pt(v, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
      if (o != null) {
        for (const m of o)
          if (h(w, pt(v, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
    }
    return d;
  }, [l, u, r, n, o, a, s, t]);
  return ht(() => {
    const d = [];
    for (let h = 0; h <= i; h++) {
      const v = e[h];
      h < f && !v.frozen || d.push(v);
    }
    return d;
  }, [f, i, e]);
}
function np({
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
    getRowHeight: l,
    findRowIdx: u
  } = ht(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (g) => g * t,
        getRowHeight: () => t,
        findRowIdx: (g) => ai(g / t)
      };
    let h = 0, v = " ";
    const w = e.map((g) => {
      const x = t(g), R = {
        top: h,
        height: x
      };
      return v += `${x}px `, h += x, R;
    }), m = (g) => Nn(0, Gr(e.length - 1, g));
    return {
      totalRowHeight: h,
      gridTemplateRows: v,
      getRowTop: (g) => w[m(g)].top,
      getRowHeight: (g) => w[m(g)].height,
      findRowIdx(g) {
        let x = 0, R = w.length - 1;
        for (; x <= R; ) {
          const S = x + ai((R - x) / 2), C = w[S].top;
          if (C === g) return S;
          if (C < g ? x = S + 1 : C > g && (R = S - 1), x > R) return R;
        }
        return 0;
      }
    };
  }, [t, e]);
  let f = 0, d = e.length - 1;
  if (o) {
    const v = u(n), w = u(n + r);
    f = Nn(0, v - 4), d = Gr(e.length - 1, w + 4);
  }
  return {
    rowOverscanStartIdx: f,
    rowOverscanEndIdx: d,
    totalRowHeight: a,
    gridTemplateRows: i,
    getRowTop: s,
    getRowHeight: l,
    findRowIdx: u
  };
}
const op = "c1w9bbhr7-0-0-beta-47", ap = "c1creorc7-0-0-beta-47", ip = `rdg-cell-drag-handle ${op}`;
function sp({
  gridRowStart: e,
  rows: t,
  column: r,
  columnWidth: n,
  maxColIdx: o,
  isLastRow: a,
  selectedPosition: i,
  latestDraggedOverRowIdx: s,
  isCellEditable: l,
  onRowsChange: u,
  onFill: f,
  onClick: d,
  setDragging: h,
  setDraggedOverRowIdx: v
}) {
  const {
    idx: w,
    rowIdx: m
  } = i;
  function g(y) {
    if (y.preventDefault(), y.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", O), window.addEventListener("mouseup", E);
    function O(M) {
      M.buttons !== 1 && E();
    }
    function E() {
      window.removeEventListener("mouseover", O), window.removeEventListener("mouseup", E), h(!1), x();
    }
  }
  function x() {
    const y = s.current;
    if (y === void 0) return;
    const O = m < y ? m + 1 : y, E = m < y ? y + 1 : m;
    S(O, E), v(void 0);
  }
  function R(y) {
    y.stopPropagation(), S(m + 1, t.length);
  }
  function S(y, O) {
    const E = t[m], M = [...t], N = [];
    for (let c = y; c < O; c++)
      if (l({
        rowIdx: c,
        idx: w
      })) {
        const k = f({
          columnKey: r.key,
          sourceRow: E,
          targetRow: t[c]
        });
        k !== t[c] && (M[c] = k, N.push(c));
      }
    N.length > 0 && (u == null || u(M, {
      indexes: N,
      column: r
    }));
  }
  function C() {
    var c;
    const y = ((c = r.colSpan) == null ? void 0 : c.call(r, {
      type: "ROW",
      row: t[m]
    })) ?? 1, {
      insetInlineStart: O,
      ...E
    } = tn(r, y), M = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", N = r.idx + y - 1 === o;
    return {
      ...E,
      gridRowStart: e,
      marginInlineEnd: N ? void 0 : M,
      marginBlockEnd: a ? void 0 : M,
      insetInlineStart: O ? `calc(${O} + ${n}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ L.jsx("div", {
    style: C(),
    className: Se(ip, r.frozen && ap),
    onClick: d,
    onMouseDown: g,
    onDoubleClick: R
  });
}
const cp = "cis5rrm7-0-0-beta-47";
function lp({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  onRowChange: o,
  closeEditor: a,
  onKeyDown: i,
  navigate: s
}) {
  var x, R, S;
  const l = Tt(void 0), u = ((x = e.editorOptions) == null ? void 0 : x.commitOnOutsideClick) !== !1, f = ot(() => {
    v(!0, !1);
  });
  Ho(() => {
    if (!u) return;
    function C() {
      l.current = requestAnimationFrame(f);
    }
    return addEventListener("mousedown", C, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", C, {
        capture: !0
      }), d();
    };
  }, [u, f]);
  function d() {
    cancelAnimationFrame(l.current);
  }
  function h(C) {
    if (i) {
      const y = zr(C);
      if (i({
        mode: "EDIT",
        row: r,
        column: e,
        rowIdx: n,
        navigate() {
          s(C);
        },
        onClose: v
      }, y), y.isGridDefaultPrevented()) return;
    }
    C.key === "Escape" ? v() : C.key === "Enter" ? v(!0) : Rf(C) && s(C);
  }
  function v(C = !1, y = !0) {
    C ? o(r, !0, y) : a(y);
  }
  function w(C, y = !1) {
    o(C, y, y);
  }
  const {
    cellClass: m
  } = e, g = eo(e, "rdg-editor-container", typeof m == "function" ? m(r) : m, !((R = e.editorOptions) != null && R.displayCellContent) && cp);
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: g,
    style: tn(e, t),
    onKeyDown: h,
    onMouseDownCapture: d,
    children: e.renderEditCell != null && /* @__PURE__ */ L.jsxs(L.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: r,
        rowIdx: n,
        onRowChange: w,
        onClose: v
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
function up({
  column: e,
  rowIdx: t,
  isCellSelected: r,
  selectCell: n
}) {
  const {
    tabIndex: o,
    onFocus: a
  } = to(r), {
    colSpan: i
  } = e, s = Cs(e, t), l = e.idx + 1;
  function u() {
    n({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "columnheader",
    "aria-colindex": l,
    "aria-colspan": i,
    "aria-rowspan": s,
    "aria-selected": r,
    tabIndex: o,
    className: Se(ys, e.headerCellClass),
    style: {
      ...vs(e, t, s),
      gridColumnStart: l,
      gridColumnEnd: l + i
    },
    onFocus: a,
    onClick: u,
    children: e.name
  });
}
const dp = "h44jtk67-0-0-beta-47", fp = "hcgkhxz7-0-0-beta-47", pp = `rdg-header-sort-name ${fp}`;
function hp({
  column: e,
  sortDirection: t,
  priority: r
}) {
  return e.sortable ? /* @__PURE__ */ L.jsx(gp, {
    sortDirection: t,
    priority: r,
    children: e.name
  }) : e.name;
}
function gp({
  sortDirection: e,
  priority: t,
  children: r
}) {
  const n = Ss().renderSortStatus;
  return /* @__PURE__ */ L.jsxs("span", {
    className: dp,
    children: [/* @__PURE__ */ L.jsx("span", {
      className: pp,
      children: r
    }), /* @__PURE__ */ L.jsx("span", {
      children: n({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const mp = "c6l2wv17-0-0-beta-47", yp = "c1kqdw7y7-0-0-beta-47", bp = `rdg-cell-resizable ${yp}`, vp = "r1y6ywlx7-0-0-beta-47", wp = "rdg-cell-draggable", Cp = "c1bezg5o7-0-0-beta-47", xp = `rdg-cell-dragging ${Cp}`, Sp = "c1vc96037-0-0-beta-47", Ep = `rdg-cell-drag-over ${Sp}`;
function Tp({
  column: e,
  colSpan: t,
  rowIdx: r,
  isCellSelected: n,
  onColumnResize: o,
  onColumnsReorder: a,
  sortColumns: i,
  onSortColumnsChange: s,
  selectCell: l,
  shouldFocusGrid: u,
  direction: f,
  dragDropKey: d
}) {
  const [h, v] = Ke(!1), [w, m] = Ke(!1), g = f === "rtl", x = Cs(e, r), {
    tabIndex: R,
    childTabIndex: S,
    onFocus: C
  } = to(n), y = i == null ? void 0 : i.findIndex((F) => F.columnKey === e.key), O = y !== void 0 && y > -1 ? i[y] : void 0, E = O == null ? void 0 : O.direction, M = O !== void 0 && i.length > 1 ? y + 1 : void 0, N = E && !M ? E === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: c,
    resizable: k,
    draggable: _
  } = e, I = eo(e, e.headerCellClass, c && mp, k && bp, _ && wp, h && xp, w && Ep), U = e.renderHeaderCell ?? hp;
  function q(F) {
    if (F.pointerType === "mouse" && F.buttons !== 1)
      return;
    F.preventDefault();
    const {
      currentTarget: V,
      pointerId: ee
    } = F, J = V.parentElement, {
      right: ke,
      left: j
    } = J.getBoundingClientRect(), Me = g ? F.clientX - j : ke - F.clientX;
    let H = !1;
    function Fe(Ze) {
      const {
        width: Ve,
        right: Ht,
        left: vt
      } = J.getBoundingClientRect();
      let lt = g ? Ht + Me - Ze.clientX : Ze.clientX + Me - vt;
      lt = ws(lt, e), Ve > 0 && lt !== Ve && o(e, lt);
    }
    function Ye() {
      H = !0, o(e, "max-content");
    }
    function ct(Ze) {
      H || Fe(Ze), V.removeEventListener("pointermove", Fe), V.removeEventListener("dblclick", Ye), V.removeEventListener("lostpointercapture", ct);
    }
    V.setPointerCapture(ee), V.addEventListener("pointermove", Fe), V.addEventListener("dblclick", Ye), V.addEventListener("lostpointercapture", ct);
  }
  function ae(F) {
    if (s == null) return;
    const {
      sortDescendingFirst: V
    } = e;
    if (O === void 0) {
      const ee = {
        columnKey: e.key,
        direction: V ? "DESC" : "ASC"
      };
      s(i && F ? [...i, ee] : [ee]);
    } else {
      let ee;
      if ((V === !0 && E === "DESC" || V !== !0 && E === "ASC") && (ee = {
        columnKey: e.key,
        direction: E === "ASC" ? "DESC" : "ASC"
      }), F) {
        const J = [...i];
        ee ? J[y] = ee : J.splice(y, 1), s(J);
      } else
        s(ee ? [ee] : []);
    }
  }
  function he(F) {
    l({
      idx: e.idx,
      rowIdx: r
    }), c && ae(F.ctrlKey || F.metaKey);
  }
  function Ce(F) {
    C == null || C(F), u && l({
      idx: 0,
      rowIdx: r
    });
  }
  function ce(F) {
    (F.key === " " || F.key === "Enter") && (F.preventDefault(), ae(F.ctrlKey || F.metaKey));
  }
  function D(F) {
    F.dataTransfer.setData(d, e.key), F.dataTransfer.dropEffect = "move", v(!0);
  }
  function z() {
    v(!1);
  }
  function ne(F) {
    F.preventDefault(), F.dataTransfer.dropEffect = "move";
  }
  function oe(F) {
    if (m(!1), F.dataTransfer.types.includes(d.toLowerCase())) {
      const V = F.dataTransfer.getData(d.toLowerCase());
      V !== e.key && (F.preventDefault(), a == null || a(V, e.key));
    }
  }
  function W(F) {
    ci(F) && m(!0);
  }
  function ie(F) {
    ci(F) && m(!1);
  }
  let X;
  return _ && (X = {
    draggable: !0,
    onDragStart: D,
    onDragEnd: z,
    onDragOver: ne,
    onDragEnter: W,
    onDragLeave: ie,
    onDrop: oe
  }), /* @__PURE__ */ L.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": x,
    "aria-selected": n,
    "aria-sort": N,
    tabIndex: u ? 0 : R,
    className: I,
    style: {
      ...vs(e, r, x),
      ...tn(e, t)
    },
    onFocus: Ce,
    onClick: he,
    onKeyDown: c ? ce : void 0,
    ...X,
    children: [U({
      column: e,
      sortDirection: E,
      priority: M,
      tabIndex: S
    }), k && /* @__PURE__ */ L.jsx("div", {
      className: vp,
      onClick: Sf,
      onPointerDown: q
    })]
  });
}
function ci(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const Rp = "r1upfr807-0-0-beta-47", Ts = `rdg-row ${Rp}`, kp = "r190mhd37-0-0-beta-47", ca = "rdg-row-selected", Op = "r139qu9m7-0-0-beta-47", $p = "rdg-top-summary-row", Pp = "rdg-bottom-summary-row", Ip = "h10tskcx7-0-0-beta-47", Rs = `rdg-header-row ${Ip}`;
function Dp({
  rowIdx: e,
  columns: t,
  onColumnResize: r,
  onColumnsReorder: n,
  sortColumns: o,
  onSortColumnsChange: a,
  lastFrozenColumnIndex: i,
  selectedCellIdx: s,
  selectCell: l,
  shouldFocusGrid: u,
  direction: f
}) {
  const d = yc(), h = [];
  for (let v = 0; v < t.length; v++) {
    const w = t[v], m = pt(w, i, {
      type: "HEADER"
    });
    m !== void 0 && (v += m - 1), h.push(/* @__PURE__ */ L.jsx(Tp, {
      column: w,
      colSpan: m,
      rowIdx: e,
      isCellSelected: s === w.idx,
      onColumnResize: r,
      onColumnsReorder: n,
      onSortColumnsChange: a,
      sortColumns: o,
      selectCell: l,
      shouldFocusGrid: u && v === 0,
      direction: f,
      dragDropKey: d
    }, w.key));
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: Se(Rs, s === -1 && ca),
    children: h
  });
}
const Mp = /* @__PURE__ */ vr(Dp);
function _p({
  rowIdx: e,
  level: t,
  columns: r,
  selectedCellIdx: n,
  selectCell: o
}) {
  const a = [], i = /* @__PURE__ */ new Set();
  for (const s of r) {
    let {
      parent: l
    } = s;
    if (l !== void 0) {
      for (; l.level > t && l.parent !== void 0; )
        l = l.parent;
      if (l.level === t && !i.has(l)) {
        i.add(l);
        const {
          idx: u
        } = l;
        a.push(/* @__PURE__ */ L.jsx(up, {
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
    className: Rs,
    children: a
  });
}
const Ap = /* @__PURE__ */ vr(_p), Np = "c6ra8a37-0-0-beta-47", Fp = `rdg-cell-copied ${Np}`, jp = "cq910m07-0-0-beta-47", zp = `rdg-cell-dragged-over ${jp}`;
function Bp({
  column: e,
  colSpan: t,
  isCellSelected: r,
  isCopied: n,
  isDraggedOver: o,
  row: a,
  rowIdx: i,
  onClick: s,
  onDoubleClick: l,
  onContextMenu: u,
  onRowChange: f,
  selectCell: d,
  ...h
}) {
  const {
    tabIndex: v,
    childTabIndex: w,
    onFocus: m
  } = to(r), {
    cellClass: g
  } = e, x = eo(e, typeof g == "function" ? g(a) : g, n && Fp, o && zp), R = ms(e, a);
  function S(M) {
    d({
      rowIdx: i,
      idx: e.idx
    }, M);
  }
  function C(M) {
    if (s) {
      const N = zr(M);
      if (s({
        row: a,
        column: e,
        selectCell: S
      }, N), N.isGridDefaultPrevented()) return;
    }
    S();
  }
  function y(M) {
    if (u) {
      const N = zr(M);
      if (u({
        row: a,
        column: e,
        selectCell: S
      }, N), N.isGridDefaultPrevented()) return;
    }
    S();
  }
  function O(M) {
    if (l) {
      const N = zr(M);
      if (l({
        row: a,
        column: e,
        selectCell: S
      }, N), N.isGridDefaultPrevented()) return;
    }
    S(!0);
  }
  function E(M) {
    f(e, M);
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": r,
    "aria-readonly": !R || void 0,
    tabIndex: v,
    className: x,
    style: tn(e, t),
    onClick: C,
    onDoubleClick: O,
    onContextMenu: y,
    onFocus: m,
    ...h,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: i,
      isCellEditable: R,
      tabIndex: w,
      onRowChange: E
    })
  });
}
const Lp = /* @__PURE__ */ vr(Bp);
function Wp({
  className: e,
  rowIdx: t,
  gridRowStart: r,
  selectedCellIdx: n,
  isRowSelectionDisabled: o,
  isRowSelected: a,
  copiedCellIdx: i,
  draggedOverCellIdx: s,
  lastFrozenColumnIndex: l,
  row: u,
  viewportColumns: f,
  selectedCellEditor: d,
  onCellClick: h,
  onCellDoubleClick: v,
  onCellContextMenu: w,
  rowClass: m,
  setDraggedOverRowIdx: g,
  onMouseEnter: x,
  onRowChange: R,
  selectCell: S,
  ...C
}, y) {
  const O = ot((c, k) => {
    R(c, t, k);
  });
  function E(c) {
    g == null || g(t), x == null || x(c);
  }
  e = Se(Ts, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, m == null ? void 0 : m(u, t), e, n === -1 && ca);
  const M = [];
  for (let c = 0; c < f.length; c++) {
    const k = f[c], {
      idx: _
    } = k, I = pt(k, l, {
      type: "ROW",
      row: u
    });
    I !== void 0 && (c += I - 1);
    const U = n === _;
    U && d ? M.push(d) : M.push(/* @__PURE__ */ L.jsx(Lp, {
      column: k,
      colSpan: I,
      row: u,
      rowIdx: t,
      isCopied: i === _,
      isDraggedOver: s === _,
      isCellSelected: U,
      onClick: h,
      onDoubleClick: v,
      onContextMenu: w,
      onRowChange: O,
      selectCell: S
    }, k.key));
  }
  const N = ht(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: o
  }), [o, a]);
  return /* @__PURE__ */ L.jsx(Vf, {
    value: N,
    children: /* @__PURE__ */ L.jsx("div", {
      role: "row",
      ref: y,
      className: e,
      onMouseEnter: E,
      style: bs(r),
      ...C,
      children: M
    })
  });
}
const Yp = /* @__PURE__ */ vr(/* @__PURE__ */ Vo(Wp));
function Vp(e, t) {
  return /* @__PURE__ */ L.jsx(Yp, {
    ...t
  }, e);
}
function Hp({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: r,
  setScrollToCellPosition: n
}) {
  const o = Tt(null);
  return br(() => {
    On(o.current);
  }), br(() => {
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
  }, [r, n]), /* @__PURE__ */ L.jsx("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Up = "a3ejtar7-0-0-beta-47", Gp = `rdg-sort-arrow ${Up}`;
function Kp({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ L.jsxs(L.Fragment, {
    children: [qp({
      sortDirection: e
    }), Xp({
      priority: t
    })]
  });
}
function qp({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ L.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Gp,
    "aria-hidden": !0,
    children: /* @__PURE__ */ L.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Xp({
  priority: e
}) {
  return e;
}
const Zp = "rnvodz57-0-0-beta-47", Qp = `rdg ${Zp}`, Jp = "vlqv91k7-0-0-beta-47", eh = `rdg-viewport-dragging ${Jp}`, th = "f1lsfrzw7-0-0-beta-47", rh = "f1cte0lg7-0-0-beta-47", nh = "s8wc6fl7-0-0-beta-47";
function oh({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  isCellSelected: o,
  selectCell: a
}) {
  var h;
  const {
    tabIndex: i,
    childTabIndex: s,
    onFocus: l
  } = to(o), {
    summaryCellClass: u
  } = e, f = eo(e, nh, typeof u == "function" ? u(r) : u);
  function d() {
    a({
      rowIdx: n,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: i,
    className: f,
    style: tn(e, t),
    onClick: d,
    onFocus: l,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: r,
      tabIndex: s
    })
  });
}
const ah = /* @__PURE__ */ vr(oh), ih = "skuhp557-0-0-beta-47", sh = "tf8l5ub7-0-0-beta-47", ch = `rdg-summary-row ${ih}`;
function lh({
  rowIdx: e,
  gridRowStart: t,
  row: r,
  viewportColumns: n,
  top: o,
  bottom: a,
  lastFrozenColumnIndex: i,
  selectedCellIdx: s,
  isTop: l,
  selectCell: u,
  "aria-rowindex": f
}) {
  const d = [];
  for (let h = 0; h < n.length; h++) {
    const v = n[h], w = pt(v, i, {
      type: "SUMMARY",
      row: r
    });
    w !== void 0 && (h += w - 1);
    const m = s === v.idx;
    d.push(/* @__PURE__ */ L.jsx(ah, {
      column: v,
      colSpan: w,
      row: r,
      rowIdx: e,
      isCellSelected: m,
      selectCell: u
    }, v.key));
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "row",
    "aria-rowindex": f,
    className: Se(Ts, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, ch, l ? `${$p} ${sh}` : Pp, s === -1 && ca),
    style: {
      ...bs(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: d
  });
}
const li = /* @__PURE__ */ vr(lh);
function uh(e, t) {
  const {
    columns: r,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: a,
    rowKeyGetter: i,
    onRowsChange: s,
    rowHeight: l,
    headerRowHeight: u,
    summaryRowHeight: f,
    selectedRows: d,
    isRowSelectionDisabled: h,
    onSelectedRowsChange: v,
    sortColumns: w,
    onSortColumnsChange: m,
    defaultColumnOptions: g,
    onCellClick: x,
    onCellDoubleClick: R,
    onCellContextMenu: S,
    onCellKeyDown: C,
    onSelectedCellChange: y,
    onScroll: O,
    onColumnResize: E,
    onColumnsReorder: M,
    onFill: N,
    onCopy: c,
    onPaste: k,
    enableVirtualization: _,
    renderers: I,
    className: U,
    style: q,
    rowClass: ae,
    direction: he,
    role: Ce,
    "aria-label": ce,
    "aria-labelledby": D,
    "aria-describedby": z,
    "aria-rowcount": ne,
    "data-testid": oe
  } = e, W = Ss(), ie = Ce ?? "grid", X = l ?? 35, F = u ?? (typeof X == "number" ? X : 35), V = f ?? (typeof X == "number" ? X : 35), ee = (I == null ? void 0 : I.renderRow) ?? (W == null ? void 0 : W.renderRow) ?? Vp, J = (I == null ? void 0 : I.renderSortStatus) ?? (W == null ? void 0 : W.renderSortStatus) ?? Kp, ke = (I == null ? void 0 : I.renderCheckbox) ?? (W == null ? void 0 : W.renderCheckbox) ?? Bf, j = (I == null ? void 0 : I.noRowsFallback) ?? (W == null ? void 0 : W.noRowsFallback), Me = _ ?? !0, H = he ?? "ltr", [Fe, Ye] = Ke(0), [ct, Ze] = Ke(0), [Ve, Ht] = Ke(() => /* @__PURE__ */ new Map()), [vt, lt] = Ke(() => /* @__PURE__ */ new Map()), [te, Ut] = Ke(null), [Gt, Kt] = Ke(!1), [ut, ro] = Ke(void 0), [mt, Sr] = Ke(null), tr = $n((P) => Ve.get(P.key) ?? vt.get(P.key) ?? P.width, [vt, Ve]), [Nt, nn, on, no] = tp(), {
    columns: Le,
    colSpanColumns: an,
    lastFrozenColumnIndex: Qe,
    headerRowsCount: yt,
    colOverscanStartIdx: sn,
    colOverscanEndIdx: Ot,
    templateColumns: Er,
    layoutCssVars: Tr,
    totalFrozenColumnWidth: cn
  } = Jf({
    rawColumns: r,
    defaultColumnOptions: g,
    getColumnWidth: tr,
    scrollLeft: ct,
    viewportWidth: nn,
    enableVirtualization: Me
  }), qt = (o == null ? void 0 : o.length) ?? 0, $t = (a == null ? void 0 : a.length) ?? 0, ln = qt + $t, Pt = yt + qt, rr = yt - 1, qe = -Pt, nr = qe + rr, wt = n.length + $t - 1, [G, Ft] = Ke(() => ({
    idx: -1,
    rowIdx: qe - 1,
    mode: "SELECT"
  })), Rr = Tt(G), un = Tt(ut), dn = Tt(-1), p = Tt(null), $ = Tt(!1), B = ie === "treegrid", re = yt * F, fe = ln * V, pe = on - re - fe, le = d != null && v != null, se = H === "rtl", He = se ? "ArrowRight" : "ArrowLeft", Oe = se ? "ArrowLeft" : "ArrowRight", Pe = ne ?? yt + n.length + ln, Je = ht(() => ({
    renderCheckbox: ke,
    renderSortStatus: J
  }), [ke, J]), jt = ht(() => {
    let P = !1, A = !1;
    if (i != null && d != null && d.size > 0) {
      for (const K of n)
        if (d.has(i(K)) ? P = !0 : A = !0, P && A) break;
    }
    return {
      isRowSelected: P && !A,
      isIndeterminate: P && A
    };
  }, [n, d, i]), {
    rowOverscanStartIdx: rt,
    rowOverscanEndIdx: ze,
    totalRowHeight: Xt,
    gridTemplateRows: oo,
    getRowTop: fn,
    getRowHeight: js,
    findRowIdx: da
  } = np({
    rows: n,
    rowHeight: X,
    clientHeight: pe,
    scrollTop: Fe,
    enableVirtualization: Me
  }), zt = rp({
    columns: Le,
    colSpanColumns: an,
    colOverscanStartIdx: sn,
    colOverscanEndIdx: Ot,
    lastFrozenColumnIndex: Qe,
    rowOverscanStartIdx: rt,
    rowOverscanEndIdx: ze,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: zs,
    handleColumnResize: Bs
  } = ep(Le, zt, Er, Nt, nn, Ve, vt, Ht, lt, E), Ls = B ? -1 : 0, or = Le.length - 1, ao = co(G), pn = ma(G), Ws = F + Xt + fe + no, Ys = ot(Bs), Vs = ot(M), Hs = ot(m), Us = ot(x), Gs = ot(R), Ks = ot(S), qs = ot(Qs), Xs = ot(pa), Zs = ot(hn), io = ot(kr), fa = ot(({
    idx: P,
    rowIdx: A
  }) => {
    kr({
      rowIdx: qe + A - 1,
      idx: P
    });
  });
  br(() => {
    if (!ao || So(G, Rr.current)) {
      Rr.current = G;
      return;
    }
    Rr.current = G, G.idx === -1 && (p.current.focus({
      preventScroll: !0
    }), On(p.current));
  }), br(() => {
    $.current && ($.current = !1, ba());
  }), gc(t, () => ({
    element: Nt.current,
    scrollToCell({
      idx: P,
      rowIdx: A
    }) {
      const K = P !== void 0 && P > Qe && P < Le.length ? P : void 0, Z = A !== void 0 && ar(A) ? A : void 0;
      (K !== void 0 || Z !== void 0) && Sr({
        idx: K,
        rowIdx: Z
      });
    },
    selectCell: kr
  }));
  const so = $n((P) => {
    ro(P), un.current = P;
  }, []);
  function Qs(P) {
    if (!v) return;
    xo(i);
    const A = new Set(d);
    for (const K of n) {
      if ((h == null ? void 0 : h(K)) === !0) continue;
      const Z = i(K);
      P.checked ? A.add(Z) : A.delete(Z);
    }
    v(A);
  }
  function pa(P) {
    if (!v) return;
    xo(i);
    const {
      row: A,
      checked: K,
      isShiftClick: Z
    } = P;
    if ((h == null ? void 0 : h(A)) === !0) return;
    const de = new Set(d), Ee = i(A), Ie = dn.current, _e = n.indexOf(A);
    if (dn.current = _e, K ? de.add(Ee) : de.delete(Ee), Z && Ie !== -1 && Ie !== _e && Ie < n.length) {
      const nt = Nf(_e - Ie);
      for (let et = Ie + nt; et !== _e; et += nt) {
        const Ct = n[et];
        (h == null ? void 0 : h(Ct)) !== !0 && (K ? de.add(i(Ct)) : de.delete(i(Ct)));
      }
    }
    v(de);
  }
  function Js(P) {
    var _e;
    const {
      idx: A,
      rowIdx: K,
      mode: Z
    } = G;
    if (Z === "EDIT") return;
    if (C && ar(K)) {
      const nt = n[K], et = zr(P);
      if (C({
        mode: "SELECT",
        row: nt,
        column: Le[A],
        rowIdx: K,
        selectCell: kr
      }, et), et.isGridDefaultPrevented()) return;
    }
    if (!(P.target instanceof Element)) return;
    const de = P.target.closest(".rdg-cell") !== null, Ee = B && P.target === p.current;
    if (!de && !Ee) return;
    const {
      keyCode: Ie
    } = P;
    if (pn && (k != null || c != null) && Wo(P)) {
      if (Ie === 67) {
        if (((_e = window.getSelection()) == null ? void 0 : _e.isCollapsed) === !1) return;
        tc();
        return;
      }
      if (Ie === 86) {
        rc();
        return;
      }
    }
    switch (P.key) {
      case "Escape":
        Ut(null);
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
        ya(P);
        break;
      default:
        nc(P);
        break;
    }
  }
  function ec(P) {
    const {
      scrollTop: A,
      scrollLeft: K
    } = P.currentTarget;
    Pn(() => {
      Ye(A), Ze(Ff(K));
    }), O == null || O(P);
  }
  function hn(P, A, K) {
    if (typeof s != "function" || K === n[A]) return;
    const Z = [...n];
    Z[A] = K, s(Z, {
      indexes: [A],
      column: P
    });
  }
  function ha() {
    G.mode === "EDIT" && hn(Le[G.idx], G.rowIdx, G.row);
  }
  function tc() {
    const {
      idx: P,
      rowIdx: A
    } = G, K = n[A], Z = Le[P].key;
    Ut({
      row: K,
      columnKey: Z
    }), c == null || c({
      sourceRow: K,
      sourceColumnKey: Z
    });
  }
  function rc() {
    if (!k || !s || te === null || !gn(G))
      return;
    const {
      idx: P,
      rowIdx: A
    } = G, K = Le[P], Z = n[A], de = k({
      sourceRow: te.row,
      sourceColumnKey: te.columnKey,
      targetRow: Z,
      targetColumnKey: K.key
    });
    hn(K, A, de);
  }
  function nc(P) {
    if (!pn) return;
    const A = n[G.rowIdx], {
      key: K,
      shiftKey: Z
    } = P;
    if (le && Z && K === " ") {
      xo(i);
      const de = i(A);
      pa({
        row: A,
        checked: !d.has(de),
        isShiftClick: !1
      }), P.preventDefault();
      return;
    }
    gn(G) && Tf(P) && Ft(({
      idx: de,
      rowIdx: Ee
    }) => ({
      idx: de,
      rowIdx: Ee,
      mode: "EDIT",
      row: A,
      originalRow: A
    }));
  }
  function ga(P) {
    return P >= Ls && P <= or;
  }
  function ar(P) {
    return P >= 0 && P < n.length;
  }
  function co({
    idx: P,
    rowIdx: A
  }) {
    return A >= qe && A <= wt && ga(P);
  }
  function oc({
    idx: P,
    rowIdx: A
  }) {
    return ar(A) && P >= 0 && P <= or;
  }
  function ma({
    idx: P,
    rowIdx: A
  }) {
    return ar(A) && ga(P);
  }
  function gn(P) {
    return oc(P) && $f({
      columns: Le,
      rows: n,
      selectedPosition: P
    });
  }
  function kr(P, A) {
    if (!co(P)) return;
    ha();
    const K = n[P.rowIdx], Z = So(G, P);
    A && gn(P) ? Ft({
      ...P,
      mode: "EDIT",
      row: K,
      originalRow: K
    }) : Z ? On(ui(Nt.current)) : ($.current = !0, Ft({
      ...P,
      mode: "SELECT"
    })), y && !Z && y({
      rowIdx: P.rowIdx,
      row: K,
      column: Le[P.idx]
    });
  }
  function ac(P, A, K) {
    const {
      idx: Z,
      rowIdx: de
    } = G, Ee = ao && Z === -1;
    switch (P) {
      case "ArrowUp":
        return {
          idx: Z,
          rowIdx: de - 1
        };
      case "ArrowDown":
        return {
          idx: Z,
          rowIdx: de + 1
        };
      case He:
        return {
          idx: Z - 1,
          rowIdx: de
        };
      case Oe:
        return {
          idx: Z + 1,
          rowIdx: de
        };
      case "Tab":
        return {
          idx: Z + (K ? -1 : 1),
          rowIdx: de
        };
      case "Home":
        return Ee ? {
          idx: Z,
          rowIdx: qe
        } : {
          idx: 0,
          rowIdx: A ? qe : de
        };
      case "End":
        return Ee ? {
          idx: Z,
          rowIdx: wt
        } : {
          idx: or,
          rowIdx: A ? wt : de
        };
      case "PageUp": {
        if (G.rowIdx === qe) return G;
        const Ie = fn(de) + js(de) - pe;
        return {
          idx: Z,
          rowIdx: Ie > 0 ? da(Ie) : 0
        };
      }
      case "PageDown": {
        if (G.rowIdx >= n.length) return G;
        const Ie = fn(de) + pe;
        return {
          idx: Z,
          rowIdx: Ie < Xt ? da(Ie) : n.length - 1
        };
      }
      default:
        return G;
    }
  }
  function ya(P) {
    const {
      key: A,
      shiftKey: K
    } = P;
    let Z = "NONE";
    if (A === "Tab") {
      if (Df({
        shiftKey: K,
        maxColIdx: or,
        minRowIdx: qe,
        maxRowIdx: wt,
        selectedPosition: G
      })) {
        ha();
        return;
      }
      Z = "CHANGE_ROW";
    }
    P.preventDefault();
    const de = Wo(P), Ee = ac(A, de, K);
    if (So(G, Ee)) return;
    const Ie = If({
      moveUp: A === "ArrowUp",
      moveNext: A === Oe || A === "Tab" && !K,
      columns: Le,
      colSpanColumns: an,
      rows: n,
      topSummaryRows: o,
      bottomSummaryRows: a,
      minRowIdx: qe,
      mainHeaderRowIdx: nr,
      maxRowIdx: wt,
      lastFrozenColumnIndex: Qe,
      cellNavigationMode: Z,
      currentPosition: G,
      nextPosition: Ee,
      isCellWithinBounds: co
    });
    kr(Ie);
  }
  function ic(P) {
    if (ut === void 0) return;
    const {
      rowIdx: A
    } = G;
    return (A < ut ? A < P && P <= ut : A > P && P >= ut) ? G.idx : void 0;
  }
  function ba() {
    const P = ui(Nt.current);
    if (P === null) return;
    On(P), (P.querySelector('[tabindex="0"]') ?? P).focus({
      preventScroll: !0
    });
  }
  function sc() {
    if (N == null || G.mode === "EDIT" || !ma(G))
      return;
    const {
      idx: P,
      rowIdx: A
    } = G, K = Le[P];
    if (K.renderEditCell == null || K.editable === !1)
      return;
    const Z = tr(K);
    return /* @__PURE__ */ L.jsx(sp, {
      gridRowStart: Pt + A + 1,
      rows: n,
      column: K,
      columnWidth: Z,
      maxColIdx: or,
      isLastRow: A === wt,
      selectedPosition: G,
      isCellEditable: gn,
      latestDraggedOverRowIdx: un,
      onRowsChange: s,
      onClick: ba,
      onFill: N,
      setDragging: Kt,
      setDraggedOverRowIdx: so
    });
  }
  function cc(P) {
    if (G.rowIdx !== P || G.mode === "SELECT") return;
    const {
      idx: A,
      row: K
    } = G, Z = Le[A], de = pt(Z, Qe, {
      type: "ROW",
      row: K
    }), Ee = (_e) => {
      $.current = _e, Ft(({
        idx: nt,
        rowIdx: et
      }) => ({
        idx: nt,
        rowIdx: et,
        mode: "SELECT"
      }));
    }, Ie = (_e, nt, et) => {
      nt ? Pn(() => {
        hn(Z, G.rowIdx, _e), Ee(et);
      }) : Ft((Ct) => ({
        ...Ct,
        row: _e
      }));
    };
    return n[G.rowIdx] !== G.originalRow && Ee(!1), /* @__PURE__ */ L.jsx(lp, {
      column: Z,
      colSpan: de,
      row: K,
      rowIdx: P,
      onRowChange: Ie,
      closeEditor: Ee,
      onKeyDown: C,
      navigate: ya
    }, Z.key);
  }
  function Or(P) {
    const A = G.idx === -1 ? void 0 : Le[G.idx];
    return A !== void 0 && G.rowIdx === P && !zt.includes(A) ? G.idx > Ot ? [...zt, A] : [...zt.slice(0, Qe + 1), A, ...zt.slice(Qe + 1)] : zt;
  }
  function lc() {
    const P = [], {
      idx: A,
      rowIdx: K
    } = G, Z = pn && K < rt ? rt - 1 : rt, de = pn && K > ze ? ze + 1 : ze;
    for (let Ee = Z; Ee <= de; Ee++) {
      const Ie = Ee === rt - 1 || Ee === ze + 1, _e = Ie ? K : Ee;
      let nt = zt;
      const et = A === -1 ? void 0 : Le[A];
      et !== void 0 && (Ie ? nt = [et] : nt = Or(_e));
      const Ct = n[_e], uc = Pt + _e + 1;
      let lo = _e, uo = !1;
      typeof i == "function" && (lo = i(Ct), uo = (d == null ? void 0 : d.has(lo)) ?? !1), P.push(ee(lo, {
        "aria-rowindex": Pt + _e + 1,
        "aria-selected": le ? uo : void 0,
        rowIdx: _e,
        row: Ct,
        viewportColumns: nt,
        isRowSelectionDisabled: (h == null ? void 0 : h(Ct)) ?? !1,
        isRowSelected: uo,
        onCellClick: Us,
        onCellDoubleClick: Gs,
        onCellContextMenu: Ks,
        rowClass: ae,
        gridRowStart: uc,
        copiedCellIdx: te !== null && te.row === Ct ? Le.findIndex((dc) => dc.key === te.columnKey) : void 0,
        selectedCellIdx: K === _e ? A : void 0,
        draggedOverCellIdx: ic(_e),
        setDraggedOverRowIdx: Gt ? so : void 0,
        lastFrozenColumnIndex: Qe,
        onRowChange: Zs,
        selectCell: io,
        selectedCellEditor: cc(_e)
      }));
    }
    return P;
  }
  (G.idx > or || G.rowIdx > wt) && (Ft({
    idx: -1,
    rowIdx: qe - 1,
    mode: "SELECT"
  }), so(void 0));
  let mn = `repeat(${yt}, ${F}px)`;
  qt > 0 && (mn += ` repeat(${qt}, ${V}px)`), n.length > 0 && (mn += oo), $t > 0 && (mn += ` repeat(${$t}, ${V}px)`);
  const va = G.idx === -1 && G.rowIdx !== qe - 1;
  return /* @__PURE__ */ L.jsxs("div", {
    role: ie,
    "aria-label": ce,
    "aria-labelledby": D,
    "aria-describedby": z,
    "aria-multiselectable": le ? !0 : void 0,
    "aria-colcount": Le.length,
    "aria-rowcount": Pe,
    className: Se(Qp, U, Gt && eh),
    style: {
      ...q,
      scrollPaddingInlineStart: G.idx > Qe || (mt == null ? void 0 : mt.idx) !== void 0 ? `${cn}px` : void 0,
      scrollPaddingBlock: ar(G.rowIdx) || (mt == null ? void 0 : mt.rowIdx) !== void 0 ? `${re + qt * V}px ${$t * V}px` : void 0,
      gridTemplateColumns: zs,
      gridTemplateRows: mn,
      "--rdg-header-row-height": `${F}px`,
      "--rdg-scroll-height": `${Ws}px`,
      ...Tr
    },
    dir: H,
    ref: Nt,
    onScroll: ec,
    onKeyDown: Js,
    "data-testid": oe,
    children: [/* @__PURE__ */ L.jsxs(Wf, {
      value: Je,
      children: [/* @__PURE__ */ L.jsx(Xf, {
        value: qs,
        children: /* @__PURE__ */ L.jsxs(Kf, {
          value: jt,
          children: [Array.from({
            length: rr
          }, (P, A) => /* @__PURE__ */ L.jsx(Ap, {
            rowIdx: A + 1,
            level: -rr + A,
            columns: Or(qe + A),
            selectedCellIdx: G.rowIdx === qe + A ? G.idx : void 0,
            selectCell: fa
          }, A)), /* @__PURE__ */ L.jsx(Mp, {
            rowIdx: yt,
            columns: Or(nr),
            onColumnResize: Ys,
            onColumnsReorder: Vs,
            sortColumns: w,
            onSortColumnsChange: Hs,
            lastFrozenColumnIndex: Qe,
            selectedCellIdx: G.rowIdx === nr ? G.idx : void 0,
            selectCell: fa,
            shouldFocusGrid: !ao,
            direction: H
          })]
        })
      }), n.length === 0 && j ? j : /* @__PURE__ */ L.jsxs(L.Fragment, {
        children: [o == null ? void 0 : o.map((P, A) => {
          const K = yt + 1 + A, Z = nr + 1 + A, de = G.rowIdx === Z, Ee = re + V * A;
          return /* @__PURE__ */ L.jsx(li, {
            "aria-rowindex": K,
            rowIdx: Z,
            gridRowStart: K,
            row: P,
            top: Ee,
            bottom: void 0,
            viewportColumns: Or(Z),
            lastFrozenColumnIndex: Qe,
            selectedCellIdx: de ? G.idx : void 0,
            isTop: !0,
            selectCell: io
          }, A);
        }), /* @__PURE__ */ L.jsx(Uf, {
          value: Xs,
          children: lc()
        }), a == null ? void 0 : a.map((P, A) => {
          const K = Pt + n.length + A + 1, Z = n.length + A, de = G.rowIdx === Z, Ee = pe > Xt ? on - V * (a.length - A) : void 0, Ie = Ee === void 0 ? V * (a.length - 1 - A) : void 0;
          return /* @__PURE__ */ L.jsx(li, {
            "aria-rowindex": Pe - $t + A + 1,
            rowIdx: Z,
            gridRowStart: K,
            row: P,
            top: Ee,
            bottom: Ie,
            viewportColumns: Or(Z),
            lastFrozenColumnIndex: Qe,
            selectedCellIdx: de ? G.idx : void 0,
            isTop: !1,
            selectCell: io
          }, A);
        })]
      })]
    }), sc(), Of(zt), B && /* @__PURE__ */ L.jsx("div", {
      ref: p,
      tabIndex: va ? 0 : -1,
      className: Se(th, va && [kp, Qe !== -1 && Op], !ar(G.rowIdx) && rh),
      style: {
        gridRowStart: G.rowIdx + Pt + 1
      }
    }), mt !== null && /* @__PURE__ */ L.jsx(Hp, {
      scrollToPosition: mt,
      setScrollToCellPosition: Sr,
      gridElement: Nt.current
    })]
  });
}
function ui(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function So(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const dh = /* @__PURE__ */ Vo(uh), fh = {
  "--rdg-color": De.gray800,
  "--rdg-header-color": De.gray700,
  "--rdg-border-color": De.gray400,
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
}, ph = _t.div`
  width: 100%;
  position: relative;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${De.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${De.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color${De.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${De.gray200};
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
var hh = {
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
function gh(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, r = (e.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? t = parseFloat(r) : t = parseInt(r, 10);
  var n = (e.match(/[^0-9]*$/) || "").toString();
  return hh[n] ? {
    value: t,
    unit: n
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Eo(e) {
  var t = gh(e);
  return "".concat(t.value).concat(t.unit);
}
var mh = function(e, t, r) {
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
}, Fn = function() {
  return Fn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Fn.apply(this, arguments);
}, yh = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, bh = mh("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function vh(e) {
  var t = e.loading, r = t === void 0 ? !0 : t, n = e.color, o = n === void 0 ? "#000000" : n, a = e.speedMultiplier, i = a === void 0 ? 1 : a, s = e.cssOverride, l = s === void 0 ? {} : s, u = e.size, f = u === void 0 ? 15 : u, d = e.margin, h = d === void 0 ? 2 : d, v = yh(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), w = Fn({ display: "inherit" }, l), m = function(g) {
    return {
      backgroundColor: o,
      width: Eo(f),
      height: Eo(f),
      margin: Eo(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(bh, " ").concat(0.75 / i, "s ").concat(g * 0.12 / i, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return r ? Y.createElement(
    "span",
    Fn({ style: w }, v),
    Y.createElement("span", { style: m(1) }),
    Y.createElement("span", { style: m(2) }),
    Y.createElement("span", { style: m(3) })
  ) : null;
}
const wh = Mt.memo(({ color: e }) => /* @__PURE__ */ L.jsx(vh, { color: e }));
var Br = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(Br || {});
function Ch(e, t, r) {
  return (n, o) => {
    const a = n[e], i = o[e];
    try {
      if (r)
        return r(a, i);
      if (t === Br.NUMBER) {
        const s = Number(a), l = Number(i);
        return isNaN(s) || isNaN(l) ? (console.warn("Invalid number for sorting:", { a, b: i }), isNaN(s) ? 1 : -1) : s - l;
      } else if (t === Br.DATE) {
        const s = new Date(a).getTime(), l = new Date(i).getTime();
        return isNaN(s) || isNaN(l) ? (console.warn("Invalid date for sorting:", { a, b: i }), isNaN(s) ? 1 : -1) : s - l;
      }
      return t === Br.STRING || !t ? String(a).localeCompare(String(i)) : 0;
    } catch (s) {
      return console.error("Error in sorting:", s), 0;
    }
  };
}
const xh = (e, t, r) => {
  const [n, o] = Ke(r ?? []);
  return {
    sortedRows: ht(() => (console.log(n), n.length === 0 ? t : [...t].sort((i, s) => {
      for (const l of n) {
        const u = e.find((h) => h.key === l.columnKey), d = Ch(
          l.columnKey,
          u == null ? void 0 : u.type,
          u == null ? void 0 : u.sortComparator
        )(i, s);
        if (console.log("compResult", d), console.log("sort.direction", l.direction), d !== 0)
          return l.direction === "ASC" ? d : -d;
      }
      return 0;
    })), [t, n]),
    sortColumns: n,
    setSortedColumns: o
  };
}, Sh = {
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
}, Eh = (e, t, r) => {
  let n;
  const o = Sh[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function To(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Th = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Rh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, kh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Oh = {
  date: To({
    formats: Th,
    defaultWidth: "full"
  }),
  time: To({
    formats: Rh,
    defaultWidth: "full"
  }),
  dateTime: To({
    formats: kh,
    defaultWidth: "full"
  })
}, $h = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ph = (e, t, r, n) => $h[e];
function _r(e) {
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
const Ih = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Dh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Mh = {
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
}, _h = {
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
}, Ah = {
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
}, Nh = {
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
}, Fh = (e, t) => {
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
}, jh = {
  ordinalNumber: Fh,
  era: _r({
    values: Ih,
    defaultWidth: "wide"
  }),
  quarter: _r({
    values: Dh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: _r({
    values: Mh,
    defaultWidth: "wide"
  }),
  day: _r({
    values: _h,
    defaultWidth: "wide"
  }),
  dayPeriod: _r({
    values: Ah,
    defaultWidth: "wide",
    formattingValues: Nh,
    defaultFormattingWidth: "wide"
  })
};
function Ar(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Bh(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      zh(s, (d) => d.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(u)
    ) : u;
    const f = t.slice(i.length);
    return { value: u, rest: f };
  };
}
function zh(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function Bh(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Lh(e) {
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
const Wh = /^(\d+)(th|st|nd|rd)?/i, Yh = /\d+/i, Vh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hh = {
  any: [/^b/i, /^(a|c)/i]
}, Uh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Kh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qh = {
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
}, Xh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Zh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Qh = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Jh = {
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
}, eg = {
  ordinalNumber: Lh({
    matchPattern: Wh,
    parsePattern: Yh,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ar({
    matchPatterns: Vh,
    defaultMatchWidth: "wide",
    parsePatterns: Hh,
    defaultParseWidth: "any"
  }),
  quarter: Ar({
    matchPatterns: Uh,
    defaultMatchWidth: "wide",
    parsePatterns: Gh,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ar({
    matchPatterns: Kh,
    defaultMatchWidth: "wide",
    parsePatterns: qh,
    defaultParseWidth: "any"
  }),
  day: Ar({
    matchPatterns: Xh,
    defaultMatchWidth: "wide",
    parsePatterns: Zh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ar({
    matchPatterns: Qh,
    defaultMatchWidth: "any",
    parsePatterns: Jh,
    defaultParseWidth: "any"
  })
}, tg = {
  code: "en-US",
  formatDistance: Eh,
  formatLong: Oh,
  formatRelative: Ph,
  localize: jh,
  match: eg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let rg = {};
function rn() {
  return rg;
}
const ks = 6048e5, ng = 864e5, di = Symbol.for("constructDateFrom");
function Yt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && di in e ? e[di](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function bt(e, t) {
  return Yt(t || e, e);
}
function fi(e) {
  const t = bt(e), r = new Date(
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
function og(e, ...t) {
  const r = Yt.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function pi(e, t) {
  const r = bt(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function ag(e, t, r) {
  const [n, o] = og(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = pi(n), i = pi(o), s = +a - fi(a), l = +i - fi(i);
  return Math.round((s - l) / ng);
}
function ig(e, t) {
  const r = bt(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function sg(e, t) {
  const r = bt(e, t == null ? void 0 : t.in);
  return ag(r, ig(r)) + 1;
}
function Kr(e, t) {
  var s, l, u, f;
  const r = rn(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((f = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = bt(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function jn(e, t) {
  return Kr(e, { ...t, weekStartsOn: 1 });
}
function Os(e, t) {
  const r = bt(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Yt(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = jn(o), i = Yt(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = jn(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function cg(e, t) {
  const r = Os(e, t), n = Yt(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), jn(n);
}
function lg(e, t) {
  const r = bt(e, t == null ? void 0 : t.in), n = +jn(r) - +cg(r);
  return Math.round(n / ks) + 1;
}
function $s(e, t) {
  var f, d, h, v;
  const r = bt(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = rn(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = Yt((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Kr(i, t), l = Yt((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(n, 0, a), l.setHours(0, 0, 0, 0);
  const u = Kr(l, t);
  return +r >= +s ? n + 1 : +r >= +u ? n : n - 1;
}
function ug(e, t) {
  var s, l, u, f;
  const r = rn(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = $s(e, t), a = Yt((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), Kr(a, t);
}
function dg(e, t) {
  const r = bt(e, t == null ? void 0 : t.in), n = +Kr(r, t) - +ug(r, t);
  return Math.round(n / ks) + 1;
}
function xe(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Bt = {
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
}, fr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, hi = {
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
    return Bt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = $s(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return xe(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : xe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Os(e);
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
        return Bt.M(e, t);
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
    const o = dg(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : xe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = lg(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : xe(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Bt.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = sg(e);
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
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return xe(a, 2);
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
        return xe(a, t.length);
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
    switch (n === 12 ? o = fr.noon : n === 0 ? o = fr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = fr.evening : n >= 12 ? o = fr.afternoon : n >= 4 ? o = fr.morning : o = fr.night, t) {
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
    return Bt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Bt.H(e, t);
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
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Bt.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Bt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Bt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return mi(n);
      case "XXXX":
      case "XX":
        return Zt(n);
      case "XXXXX":
      case "XXX":
      default:
        return Zt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return mi(n);
      case "xxxx":
      case "xx":
        return Zt(n);
      case "xxxxx":
      case "xxx":
      default:
        return Zt(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + gi(n, ":");
      case "OOOO":
      default:
        return "GMT" + Zt(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + gi(n, ":");
      case "zzzz":
      default:
        return "GMT" + Zt(n, ":");
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
function gi(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + xe(a, 2);
}
function mi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + xe(Math.abs(e) / 60, 2) : Zt(e, t);
}
function Zt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = xe(Math.trunc(n / 60), 2), a = xe(n % 60, 2);
  return r + o + t + a;
}
const yi = (e, t) => {
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
}, Ps = (e, t) => {
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
}, fg = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return yi(e, t);
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
  return a.replace("{{date}}", yi(n, t)).replace("{{time}}", Ps(o, t));
}, pg = {
  p: Ps,
  P: fg
}, hg = /^D+$/, gg = /^Y+$/, mg = ["D", "DD", "YY", "YYYY"];
function yg(e) {
  return hg.test(e);
}
function bg(e) {
  return gg.test(e);
}
function vg(e, t, r) {
  const n = wg(e, t, r);
  if (console.warn(n), mg.includes(e)) throw new RangeError(n);
}
function wg(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Cg(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Is(e) {
  return !(!Cg(e) && typeof e != "number" || isNaN(+bt(e)));
}
const xg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Eg = /^'([^]*?)'?$/, Tg = /''/g, Rg = /[a-zA-Z]/;
function kg(e, t, r) {
  var f, d, h, v, w, m, g, x;
  const n = rn(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? tg, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((d = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((v = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((m = (w = r == null ? void 0 : r.locale) == null ? void 0 : w.options) == null ? void 0 : m.weekStartsOn) ?? n.weekStartsOn ?? ((x = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : x.weekStartsOn) ?? 0, s = bt(e, r == null ? void 0 : r.in);
  if (!Is(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Sg).map((R) => {
    const S = R[0];
    if (S === "p" || S === "P") {
      const C = pg[S];
      return C(R, o.formatLong);
    }
    return R;
  }).join("").match(xg).map((R) => {
    if (R === "''")
      return { isToken: !1, value: "'" };
    const S = R[0];
    if (S === "'")
      return { isToken: !1, value: Og(R) };
    if (hi[S])
      return { isToken: !0, value: R };
    if (S.match(Rg))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: R };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((R) => {
    if (!R.isToken) return R.value;
    const S = R.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && bg(S) || !(r != null && r.useAdditionalDayOfYearTokens) && yg(S)) && vg(S, t, String(e));
    const C = hi[S[0]];
    return C(s, S, o.localize, u);
  }).join("");
}
function Og(e) {
  const t = e.match(Eg);
  return t ? t[1].replace(Tg, "'") : e;
}
function $g() {
  return Object.assign({}, rn());
}
function bi(e, t, r) {
  const n = $g(), o = Dg(e, r.timeZone, r.locale ?? n.locale);
  return "formatToParts" in o ? Pg(o, t) : Ig(o, t);
}
function Pg(e, t) {
  const r = e.formatToParts(t);
  for (let n = r.length - 1; n >= 0; --n)
    if (r[n].type === "timeZoneName")
      return r[n].value;
}
function Ig(e, t) {
  const r = e.format(t).replace(/\u200E/g, ""), n = / [\w-+ ]+$/.exec(r);
  return n ? n[0].substr(1) : "";
}
function Dg(e, t, r) {
  return new Intl.DateTimeFormat(r ? [r.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Mg(e, t) {
  const r = jg(t);
  return "formatToParts" in r ? Ag(r, e) : Ng(r, e);
}
const _g = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ag(e, t) {
  try {
    const r = e.formatToParts(t), n = [];
    for (let o = 0; o < r.length; o++) {
      const a = _g[r[o].type];
      a !== void 0 && (n[a] = parseInt(r[o].value, 10));
    }
    return n;
  } catch (r) {
    if (r instanceof RangeError)
      return [NaN];
    throw r;
  }
}
function Ng(e, t) {
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
const Ro = {}, vi = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Fg = vi === "06/25/2014, 00:00:00" || vi === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function jg(e) {
  return Ro[e] || (Ro[e] = Fg ? new Intl.DateTimeFormat("en-US", {
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
  })), Ro[e];
}
function Ds(e, t, r, n, o, a, i) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, r), s.setUTCHours(n, o, a, i), s;
}
const wi = 36e5, zg = 6e4, ko = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function la(e, t, r) {
  if (!e)
    return 0;
  let n = ko.timezoneZ.exec(e);
  if (n)
    return 0;
  let o, a;
  if (n = ko.timezoneHH.exec(e), n)
    return o = parseInt(n[1], 10), Ci(o) ? -(o * wi) : NaN;
  if (n = ko.timezoneHHMM.exec(e), n) {
    o = parseInt(n[2], 10);
    const i = parseInt(n[3], 10);
    return Ci(o, i) ? (a = Math.abs(o) * wi + i * zg, n[1] === "+" ? -a : a) : NaN;
  }
  if (Wg(e)) {
    t = new Date(t || Date.now());
    const i = r ? t : Bg(t), s = Yo(i, e);
    return -(r ? s : Lg(t, s, e));
  }
  return NaN;
}
function Bg(e) {
  return Ds(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Yo(e, t) {
  const r = Mg(e, t), n = Ds(r[0], r[1] - 1, r[2], r[3] % 24, r[4], r[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, n - o;
}
function Lg(e, t, r) {
  let o = e.getTime() - t;
  const a = Yo(new Date(o), r);
  if (t === a)
    return t;
  o -= a - t;
  const i = Yo(new Date(o), r);
  return a === i ? a : Math.max(a, i);
}
function Ci(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const xi = {};
function Wg(e) {
  if (xi[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), xi[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Yg = 60 * 1e3, Vg = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = Oo(r.timeZone, e);
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Si(n);
      case "XXXX":
      case "XX":
        return pr(n);
      case "XXXXX":
      case "XXX":
      default:
        return pr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = Oo(r.timeZone, e);
    switch (t) {
      case "x":
        return Si(n);
      case "xxxx":
      case "xx":
        return pr(n);
      case "xxxxx":
      case "xxx":
      default:
        return pr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = Oo(r.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Hg(n, ":");
      case "OOOO":
      default:
        return "GMT" + pr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return bi("short", e, r);
      case "zzzz":
      default:
        return bi("long", e, r);
    }
  }
};
function Oo(e, t) {
  const r = e ? la(e, t, !0) / Yg : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(r))
    throw new RangeError("Invalid time zone specified: " + e);
  return r;
}
function zn(e, t) {
  const r = e < 0 ? "-" : "";
  let n = Math.abs(e).toString();
  for (; n.length < t; )
    n = "0" + n;
  return r + n;
}
function pr(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = zn(Math.floor(n / 60), 2), a = zn(Math.floor(n % 60), 2);
  return r + o + t + a;
}
function Si(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + zn(Math.abs(e) / 60, 2) : pr(e, t);
}
function Hg(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.floor(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + zn(a, 2);
}
function Ei(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Ug = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, $o = 36e5, Ti = 6e4, Gg = 2, Xe = {
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
  timeZone: Ug
};
function Ms(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const r = t.additionalDigits == null ? Gg : Number(t.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const n = Kg(e), { year: o, restDateString: a } = qg(n.date, r), i = Xg(a, o);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const s = i.getTime();
    let l = 0, u;
    if (n.time && (l = Zg(n.time), l === null || isNaN(l)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || t.timeZone) {
      if (u = la(n.timeZone || t.timeZone, new Date(s + l)), isNaN(u))
        return /* @__PURE__ */ new Date(NaN);
    } else
      u = Ei(new Date(s + l)), u = Ei(new Date(s + l + u));
    return new Date(s + l + u);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Kg(e) {
  const t = {};
  let r = Xe.dateTimePattern.exec(e), n;
  if (r ? (t.date = r[1], n = r[3]) : (r = Xe.datePattern.exec(e), r ? (t.date = r[1], n = r[2]) : (t.date = null, n = e)), n) {
    const o = Xe.timeZone.exec(n);
    o ? (t.time = n.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = n;
  }
  return t;
}
function qg(e, t) {
  if (e) {
    const r = Xe.YYY[t], n = Xe.YYYYY[t];
    let o = Xe.YYYY.exec(e) || n.exec(e);
    if (o) {
      const a = o[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (o = Xe.YY.exec(e) || r.exec(e), o) {
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
function Xg(e, t) {
  if (t === null)
    return null;
  let r, n, o;
  if (!e || !e.length)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  let a = Xe.MM.exec(e);
  if (a)
    return r = /* @__PURE__ */ new Date(0), n = parseInt(a[1], 10) - 1, ki(t, n) ? (r.setUTCFullYear(t, n), r) : /* @__PURE__ */ new Date(NaN);
  if (a = Xe.DDD.exec(e), a) {
    r = /* @__PURE__ */ new Date(0);
    const i = parseInt(a[1], 10);
    return em(t, i) ? (r.setUTCFullYear(t, 0, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Xe.MMDD.exec(e), a) {
    r = /* @__PURE__ */ new Date(0), n = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10);
    return ki(t, n, i) ? (r.setUTCFullYear(t, n, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Xe.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, Oi(o) ? Ri(t, o) : /* @__PURE__ */ new Date(NaN);
  if (a = Xe.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10) - 1;
    return Oi(o, i) ? Ri(t, o, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Zg(e) {
  let t, r, n = Xe.HH.exec(e);
  if (n)
    return t = parseFloat(n[1].replace(",", ".")), Po(t) ? t % 24 * $o : NaN;
  if (n = Xe.HHMM.exec(e), n)
    return t = parseInt(n[1], 10), r = parseFloat(n[2].replace(",", ".")), Po(t, r) ? t % 24 * $o + r * Ti : NaN;
  if (n = Xe.HHMMSS.exec(e), n) {
    t = parseInt(n[1], 10), r = parseInt(n[2], 10);
    const o = parseFloat(n[3].replace(",", "."));
    return Po(t, r, o) ? t % 24 * $o + r * Ti + o * 1e3 : NaN;
  }
  return null;
}
function Ri(e, t, r) {
  t = t || 0, r = r || 0;
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const o = n.getUTCDay() || 7, a = t * 7 + r + 1 - o;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
const Qg = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Jg = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function _s(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ki(e, t, r) {
  if (t < 0 || t > 11)
    return !1;
  if (r != null) {
    if (r < 1)
      return !1;
    const n = _s(e);
    if (n && r > Jg[t] || !n && r > Qg[t])
      return !1;
  }
  return !0;
}
function em(e, t) {
  if (t < 1)
    return !1;
  const r = _s(e);
  return !(r && t > 366 || !r && t > 365);
}
function Oi(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Po(e, t, r) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || r != null && (r < 0 || r >= 60));
}
const tm = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function rm(e, t, r = {}) {
  t = String(t);
  const n = t.match(tm);
  if (n) {
    const o = Ms(r.originalDate || e, r);
    t = n.reduce(function(a, i) {
      if (i[0] === "'")
        return a;
      const s = a.indexOf(i), l = a[s - 1] === "'", u = a.replace(i, "'" + Vg[i[0]](o, i, r) + "'");
      return l ? u.substring(0, s - 1) + u.substring(s + 1) : u;
    }, t);
  }
  return kg(e, t, r);
}
function nm(e, t, r) {
  e = Ms(e, r);
  const n = la(t, e, !0), o = new Date(e.getTime() - n), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
function om(e, t, r, n) {
  return n = {
    ...n,
    timeZone: t,
    originalDate: e
  }, rm(nm(e, t, { timeZone: n.timeZone }), r, n);
}
var As = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.TEXT = "dd-MM-yyyy HH:mm", e.TEXT_WITHOUT_TIME = "dd-MM-yyyy", e))(As || {});
const am = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'") => {
  if (!e)
    return "";
  if (!Is(e))
    return "--";
  const r = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return om(e, r, t);
}, im = (e) => ht(
  () => e.map((t) => t.type === Br.DATE && !t.renderCell ? {
    ...t,
    renderCell: ({ row: r }) => am(r[t.key], As.TEXT)
  } : t),
  [e]
), sm = _t.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${De.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, Rm = Mt.memo(
  ({
    theme: e,
    loading: t,
    rows: r,
    columns: n,
    sortColumns: o,
    onSortColumnsChange: a,
    defaultSortColumns: i,
    ...s
  }) => {
    const l = im(n), {
      sortedRows: u,
      sortColumns: f,
      setSortedColumns: d
    } = xh(l, r, i), h = ht(() => !a, [a]), v = $n(
      (w, m) => m === 0 ? "first-row" : m === r.length - 1 ? "last-row" : "",
      [r]
    );
    return /* @__PURE__ */ L.jsxs(ph, { children: [
      /* @__PURE__ */ L.jsx(
        dh,
        {
          ...s,
          rows: h ? u : r,
          onSortColumnsChange: h ? d : a,
          sortColumns: h ? f : o,
          columns: l,
          rowClass: v,
          rowHeight: 50,
          style: { ...fh, ...e ?? {} }
        }
      ),
      t ? /* @__PURE__ */ L.jsxs(sm, { children: [
        /* @__PURE__ */ L.jsx("div", {}),
        /* @__PURE__ */ L.jsx(wh, { color: De.primary500 })
      ] }) : null
    ] });
  }
);
function cm(e) {
  return er("MuiIconButton", e);
}
const lm = Cr("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), um = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: a
  } = e, i = {
    root: ["root", r && "disabled", n !== "default" && `color${Q(n)}`, o && `edge${Q(o)}`, `size${Q(a)}`]
  };
  return Qr(i, cm, t);
}, dm = kt(Ur, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${Q(r.color)}`], r.edge && t[`edge${Q(r.edge)}`], t[`size${Q(r.size)}`]];
  }
})(Hr(({
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
})), Hr(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Jt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Jt()).map(([t]) => ({
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
  [`&.${lm.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Ns = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = xr({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: a,
    className: i,
    color: s = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: f = "medium",
    ...d
  } = n, h = {
    ...n,
    edge: o,
    color: s,
    disabled: l,
    disableFocusRipple: u,
    size: f
  }, v = um(h);
  return /* @__PURE__ */ L.jsx(dm, {
    className: Se(v.root, i),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: r,
    ...d,
    ownerState: h,
    children: a
  });
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: rs(b.node, (e) => Y.Children.toArray(e.children).some((r) => /* @__PURE__ */ Y.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const km = _t(Ns, {
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
        background: ${({ $hoverBackground: e }) => e ?? De.gray300};
    }

    &:active {
        background: ${({ $activeBackground: e }) => e ?? De.gray400};
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
function fm(e) {
  return er("MuiSvgIcon", e);
}
Cr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const pm = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Q(t)}`, `fontSize${Q(r)}`]
  };
  return Qr(o, fm, n);
}, hm = kt("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Q(r.color)}`], t[`fontSize${Q(r.fontSize)}`]];
  }
})(Hr(({
  theme: e
}) => {
  var t, r, n, o, a, i, s, l, u, f, d, h, v, w;
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
          fontSize: ((i = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : i.call(a, 20)) || "1.25rem"
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
      ...Object.entries((e.vars ?? e).palette).filter(([, m]) => m && m.main).map(([m]) => {
        var g, x;
        return {
          props: {
            color: m
          },
          style: {
            color: (x = (g = (e.vars ?? e).palette) == null ? void 0 : g[m]) == null ? void 0 : x.main
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
          color: (w = (v = (e.vars ?? e).palette) == null ? void 0 : v.action) == null ? void 0 : w.disabled
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
})), qr = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = xr({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: i = "inherit",
    component: s = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: d,
    viewBox: h = "0 0 24 24",
    ...v
  } = n, w = /* @__PURE__ */ Y.isValidElement(o) && o.type === "svg", m = {
    ...n,
    color: i,
    component: s,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: h,
    hasSvgAsChild: w
  }, g = {};
  f || (g.viewBox = h);
  const x = pm(m);
  return /* @__PURE__ */ L.jsxs(hm, {
    as: s,
    className: Se(x.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r,
    ...g,
    ...v,
    ...w && o.props,
    ownerState: m,
    children: [w ? o.props.children : o, d ? /* @__PURE__ */ L.jsx("title", {
      children: d
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (qr.propTypes = {
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
qr && (qr.muiName = "SvgIcon");
function ua(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ L.jsx(qr, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = qr.muiName, /* @__PURE__ */ Y.memo(/* @__PURE__ */ Y.forwardRef(r));
}
const gm = ua(/* @__PURE__ */ L.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), mm = _t(gs)`
    border: 1px solid ${De.red600};
    background: ${De.red50};
    color: ${De.red600};
`, Om = (e) => /* @__PURE__ */ L.jsx(mm, { ...e, startIcon: /* @__PURE__ */ L.jsx(gm, {}) }), ym = ua(/* @__PURE__ */ L.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
}), "AddCircle"), $m = (e) => /* @__PURE__ */ L.jsx(gs, { $level: "secondary", ...e, startIcon: /* @__PURE__ */ L.jsx(ym, {}) }), bm = ua(/* @__PURE__ */ L.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function vm(e) {
  return er("MuiChip", e);
}
const ue = Cr("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), wm = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: a,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, u = {
    root: ["root", l, r && "disabled", `size${Q(n)}`, `color${Q(o)}`, s && "clickable", s && `clickableColor${Q(o)}`, i && "deletable", i && `deletableColor${Q(o)}`, `${l}${Q(o)}`],
    label: ["label", `label${Q(n)}`],
    avatar: ["avatar", `avatar${Q(n)}`, `avatarColor${Q(o)}`],
    icon: ["icon", `icon${Q(n)}`, `iconColor${Q(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${Q(n)}`, `deleteIconColor${Q(o)}`, `deleteIcon${Q(l)}Color${Q(o)}`]
  };
  return Qr(u, vm, t);
}, Cm = kt("div", {
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
    }, t.root, t[`size${Q(s)}`], t[`color${Q(n)}`], a && t.clickable, a && n !== "default" && t[`clickableColor${Q(n)})`], i && t.deletable, i && n !== "default" && t[`deletableColor${Q(n)}`], t[l], t[`${l}${Q(n)}`]];
  }
})(Hr(({
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
    }, ...Object.entries(e.palette).filter(Jt(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${ue.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : We(e.palette[r].contrastText, 0.7),
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : We(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Jt(["dark"])).map(([r]) => ({
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : We(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : We(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Jt(["dark"])).map(([r]) => ({
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
    }, ...Object.entries(e.palette).filter(Jt()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : We(e.palette[r].main, 0.7)}`,
        [`&.${ue.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : We(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${ue.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : We(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), xm = kt("span", {
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
function $i(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Fs = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = xr({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: a,
    clickable: i,
    color: s = "default",
    component: l,
    deleteIcon: u,
    disabled: f = !1,
    icon: d,
    label: h,
    onClick: v,
    onDelete: w,
    onKeyDown: m,
    onKeyUp: g,
    size: x = "medium",
    variant: R = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: C = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...y
  } = n, O = Y.useRef(null), E = jo(O, r), M = (ce) => {
    ce.stopPropagation(), w && w(ce);
  }, N = (ce) => {
    ce.currentTarget === ce.target && $i(ce) && ce.preventDefault(), m && m(ce);
  }, c = (ce) => {
    ce.currentTarget === ce.target && w && $i(ce) && w(ce), g && g(ce);
  }, k = i !== !1 && v ? !0 : i, _ = k || w ? Ur : l || "div", I = {
    ...n,
    component: _,
    disabled: f,
    size: x,
    color: s,
    iconColor: /* @__PURE__ */ Y.isValidElement(d) && d.props.color || s,
    onDelete: !!w,
    clickable: k,
    variant: R
  }, U = wm(I), q = _ === Ur ? {
    component: l || "div",
    focusVisibleClassName: U.focusVisible,
    ...w && {
      disableRipple: !0
    }
  } : {};
  let ae = null;
  w && (ae = u && /* @__PURE__ */ Y.isValidElement(u) ? /* @__PURE__ */ Y.cloneElement(u, {
    className: Se(u.props.className, U.deleteIcon),
    onClick: M
  }) : /* @__PURE__ */ L.jsx(bm, {
    className: Se(U.deleteIcon),
    onClick: M
  }));
  let he = null;
  o && /* @__PURE__ */ Y.isValidElement(o) && (he = /* @__PURE__ */ Y.cloneElement(o, {
    className: Se(U.avatar, o.props.className)
  }));
  let Ce = null;
  return d && /* @__PURE__ */ Y.isValidElement(d) && (Ce = /* @__PURE__ */ Y.cloneElement(d, {
    className: Se(U.icon, d.props.className)
  })), process.env.NODE_ENV !== "production" && he && Ce && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ L.jsxs(Cm, {
    as: _,
    className: Se(U.root, a),
    disabled: k && f ? !0 : void 0,
    onClick: v,
    onKeyDown: N,
    onKeyUp: c,
    ref: E,
    tabIndex: C && f ? -1 : S,
    ownerState: I,
    ...q,
    ...y,
    children: [he || Ce, /* @__PURE__ */ L.jsx(xm, {
      className: Se(U.label),
      ownerState: I,
      children: h
    }), ae]
  });
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
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
  children: td,
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
const Pm = _t(Fs, { shouldForwardProp: (e) => !e.startsWith("$") })`
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
    color: ${({ $color: e }) => e ?? De.primary500};
    background: ${({ $backgroundColor: e }) => e ?? De.primary100};
    width: fit-content;
`;
export {
  $m as AddButton,
  gs as Button,
  Pm as Chip,
  Br as ColumnType,
  Rm as DataGrid,
  Om as DeleteButton,
  km as IconButton,
  wh as Loader,
  mm as StyledButton,
  fh as defaultTheme,
  De as taktikTheme
};
