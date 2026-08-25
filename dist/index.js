import { jsx as b, jsxs as se, Fragment as yn } from "react/jsx-runtime";
import * as Ot from "react";
import Re, { createContext as bt, memo as He, forwardRef as pn, useContext as ke, useMemo as G, useCallback as Z, useRef as ve, useEffect as _e, useState as oe, useImperativeHandle as Go, useLayoutEffect as jo, useId as Ko } from "react";
import { flushSync as Lt } from "react-dom";
import xe from "@emotion/styled";
import qo from "@mui/material/Menu";
import kr from "@mui/material/MenuItem";
import Xo from "@mui/material/Divider";
import Vo from "@mui/material/Checkbox";
import Zo from "@mui/material/Box";
import Qo from "@mui/material/TextField";
import Jo from "@mui/material/Autocomplete";
import ei from "@mui/material/TablePagination";
function Dr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Dr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ee() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Dr(e)) && (r && (r += " "), r += t);
  return r;
}
function be(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function ti(e) {
  e.stopPropagation();
}
function Ft(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function ht(e) {
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
const ni = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function Ht(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ri(e) {
  return Ht(e) && e.keyCode !== 86 ? !1 : !ni.has(e.key);
}
function oi({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const ii = "mlln6zg7-0-0-beta-47";
function ai(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: o
  }) => /* @__PURE__ */ b("div", {
    className: ii,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function si({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], o = n[e.rowIdx];
  return Sr(r, o);
}
function Sr(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function ci({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: n,
  rowIdx: r,
  mainHeaderRowIdx: o,
  lastFrozenColumnIndex: i,
  column: a
}) {
  const s = (t == null ? void 0 : t.length) ?? 0;
  if (r === o)
    return be(a, i, {
      type: "HEADER"
    });
  if (t && r > o && r <= s + o)
    return be(a, i, {
      type: "SUMMARY",
      row: t[r + s]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return be(a, i, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return be(a, i, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function li({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: n,
  columns: r,
  colSpanColumns: o,
  rows: i,
  topSummaryRows: a,
  bottomSummaryRows: s,
  minRowIdx: c,
  mainHeaderRowIdx: l,
  maxRowIdx: p,
  currentPosition: {
    idx: d,
    rowIdx: w
  },
  nextPosition: u,
  lastFrozenColumnIndex: h,
  isCellWithinBounds: m
}) {
  let {
    idx: f,
    rowIdx: x
  } = u;
  const v = r.length, k = (H) => {
    for (const S of o) {
      const I = S.idx;
      if (I > f) break;
      const P = ci({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: x,
        mainHeaderRowIdx: l,
        lastFrozenColumnIndex: h,
        column: S
      });
      if (P && f > I && f < P + I) {
        f = I + (H ? P : 0);
        break;
      }
    }
  }, R = (H) => H.level + l, D = () => {
    if (t) {
      let S = r[f].parent;
      for (; S !== void 0; ) {
        const I = R(S);
        if (x === I) {
          f = S.idx + S.colSpan;
          break;
        }
        S = S.parent;
      }
    } else if (e) {
      let S = r[f].parent, I = !1;
      for (; S !== void 0; ) {
        const P = R(S);
        if (x >= P) {
          f = S.idx, x = P, I = !0;
          break;
        }
        S = S.parent;
      }
      I || (f = d, x = w);
    }
  };
  if (m(u) && (k(t), x < l && D()), n === "CHANGE_ROW" && (f === v ? x === p || (f = 0, x += 1) : f === -1 && (x === c || (x -= 1, f = v - 1), k(!1))), x < l) {
    let S = r[f].parent;
    const I = x;
    for (x = l; S !== void 0; ) {
      const P = R(S);
      P >= I && (x = P, f = S.idx), S = S.parent;
    }
  }
  return {
    idx: f,
    rowIdx: x
  };
}
function di({
  maxColIdx: e,
  minRowIdx: t,
  maxRowIdx: n,
  selectedPosition: {
    rowIdx: r,
    idx: o
  },
  shiftKey: i
}) {
  return i ? o === 0 && r === t : o === e && r === n;
}
const ui = "cj343x07-0-0-beta-47", Ir = `rdg-cell ${ui}`, fi = "csofj7r7-0-0-beta-47", hi = `rdg-cell-frozen ${fi}`;
function bn(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Tr(e, t, n) {
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
function nt(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function xt(e, ...t) {
  return Ee(Ir, ...t, e.frozen && hi);
}
const {
  min: wt,
  max: zt,
  floor: Zn,
  sign: gi,
  abs: mi
} = Math;
function gt(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Rr(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = zt(e, t), typeof n == "number" && n >= t ? wt(e, n) : e;
}
function Er(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const wi = "c1bn88vv7-0-0-beta-47", yi = `rdg-checkbox-input ${wi}`;
function pi({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ b("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: yi,
    onChange: r,
    ...n
  });
}
const bi = "g1s9ylgp7-0-0-beta-47", xi = `rdg-group-cell-content ${bi}`, Ci = "cz54e4y7-0-0-beta-47", vi = `rdg-caret ${Ci}`;
function ki(e) {
  return /* @__PURE__ */ b(Di, {
    ...e
  });
}
function Di({
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
  return /* @__PURE__ */ se("span", {
    className: xi,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ b("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: vi,
      "aria-hidden": !0,
      children: /* @__PURE__ */ b("path", {
        d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7"
      })
    })]
  });
}
function Si(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Mr = /* @__PURE__ */ bt(void 0), Ii = Mr.Provider;
function _t() {
  return ke(Mr);
}
function xn({
  value: e,
  tabIndex: t,
  indeterminate: n,
  disabled: r,
  onChange: o,
  "aria-label": i,
  "aria-labelledby": a
}) {
  const s = _t().renderCheckbox;
  return s({
    "aria-label": i,
    "aria-labelledby": a,
    tabIndex: t,
    indeterminate: n,
    disabled: r,
    checked: e,
    onChange: o
  });
}
const Pr = /* @__PURE__ */ bt(void 0), Or = Pr.Provider, Nr = /* @__PURE__ */ bt(void 0), Ti = Nr.Provider;
function Fr() {
  const e = ke(Pr), t = ke(Nr);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Lr = /* @__PURE__ */ bt(void 0), Ri = Lr.Provider, Hr = /* @__PURE__ */ bt(void 0), Ei = Hr.Provider;
function Mi() {
  const e = ke(Lr), t = ke(Hr);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Be = "rdg-select-column";
function Pi(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Mi();
  return /* @__PURE__ */ b(xn, {
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
function Oi(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Fr();
  return /* @__PURE__ */ b(xn, {
    "aria-label": "Select",
    tabIndex: e.tabIndex,
    disabled: t,
    value: n,
    onChange: (o, i) => {
      r({
        row: e.row,
        checked: o,
        isShiftClick: i
      });
    }
  });
}
function Ni(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Fr();
  return /* @__PURE__ */ b(xn, {
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
const dt = {
  key: Be,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ b(Pi, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ b(Oi, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ b(Ni, {
      ...e
    });
  }
}, Fi = "auto", Li = 50;
function Hi({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? Fi, s = (t == null ? void 0 : t.minWidth) ?? Li, c = (t == null ? void 0 : t.maxWidth) ?? void 0, l = (t == null ? void 0 : t.renderCell) ?? Si, p = (t == null ? void 0 : t.sortable) ?? !1, d = (t == null ? void 0 : t.resizable) ?? !1, w = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: u,
    colSpanColumns: h,
    lastFrozenColumnIndex: m,
    headerRowsCount: f
  } = G(() => {
    let S = -1, I = 1;
    const P = [];
    O(e, 1);
    function O($, F, ne) {
      for (const _ of $) {
        if ("children" in _) {
          const ye = {
            name: _.name,
            parent: ne,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: _.headerCellClass
          };
          O(_.children, F + 1, ye);
          continue;
        }
        const re = _.frozen ?? !1, Te = {
          ..._,
          parent: ne,
          idx: 0,
          level: 0,
          frozen: re,
          width: _.width ?? a,
          minWidth: _.minWidth ?? s,
          maxWidth: _.maxWidth ?? c,
          sortable: _.sortable ?? p,
          resizable: _.resizable ?? d,
          draggable: _.draggable ?? w,
          renderCell: _.renderCell ?? l
        };
        P.push(Te), re && S++, F > I && (I = F);
      }
    }
    P.sort(({
      key: $,
      frozen: F
    }, {
      key: ne,
      frozen: _
    }) => $ === Be ? -1 : ne === Be ? 1 : F ? _ ? 0 : -1 : _ ? 1 : 0);
    const W = [];
    return P.forEach(($, F) => {
      $.idx = F, zr($, F, 0), $.colSpan != null && W.push($);
    }), {
      columns: P,
      colSpanColumns: W,
      lastFrozenColumnIndex: S,
      headerRowsCount: I
    };
  }, [e, a, s, c, l, d, p, w]), {
    templateColumns: x,
    layoutCssVars: v,
    totalFrozenColumnWidth: k,
    columnMetrics: R
  } = G(() => {
    const S = /* @__PURE__ */ new Map();
    let I = 0, P = 0;
    const O = [];
    for (const $ of u) {
      let F = n($);
      typeof F == "number" ? F = Rr(F, $) : F = $.minWidth, O.push(`${F}px`), S.set($, {
        width: F,
        left: I
      }), I += F;
    }
    if (m !== -1) {
      const $ = S.get(u[m]);
      P = $.left + $.width;
    }
    const W = {};
    for (let $ = 0; $ <= m; $++) {
      const F = u[$];
      W[`--rdg-frozen-left-${F.idx}`] = `${S.get(F).left}px`;
    }
    return {
      templateColumns: O,
      layoutCssVars: W,
      totalFrozenColumnWidth: P,
      columnMetrics: S
    };
  }, [n, u, m]), [D, H] = G(() => {
    if (!i)
      return [0, u.length - 1];
    const S = o + k, I = o + r, P = u.length - 1, O = wt(m + 1, P);
    if (S >= I)
      return [O, O];
    let W = O;
    for (; W < P; ) {
      const {
        left: _,
        width: re
      } = R.get(u[W]);
      if (_ + re > S)
        break;
      W++;
    }
    let $ = W;
    for (; $ < P; ) {
      const {
        left: _,
        width: re
      } = R.get(u[$]);
      if (_ + re >= I)
        break;
      $++;
    }
    const F = zt(O, W - 1), ne = wt(P, $ + 1);
    return [F, ne];
  }, [R, u, m, o, k, r, i]);
  return {
    columns: u,
    colSpanColumns: h,
    colOverscanStartIdx: D,
    colOverscanEndIdx: H,
    templateColumns: x,
    layoutCssVars: v,
    headerRowsCount: f,
    lastFrozenColumnIndex: m,
    totalFrozenColumnWidth: k
  };
}
function zr(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, zr(r, t, n - 1);
  }
}
const tt = typeof window > "u" ? _e : jo;
function zi(e, t, n, r, o, i, a, s, c, l) {
  const p = ve(o), d = e.length === t.length, w = d && o !== p.current, u = [...n], h = [];
  for (const {
    key: v,
    idx: k,
    width: R
  } of t)
    typeof R == "string" && (w || !a.has(v)) && !i.has(v) && (u[k] = R, h.push(v));
  const m = u.join(" ");
  tt(() => {
    p.current = o, f(h);
  });
  function f(v) {
    v.length !== 0 && c((k) => {
      const R = new Map(k);
      let D = !1;
      for (const H of v) {
        const S = Qn(r, H);
        D || (D = S !== k.get(H)), S === void 0 ? R.delete(H) : R.set(H, S);
      }
      return D ? R : k;
    });
  }
  function x(v, k) {
    const {
      key: R
    } = v, D = [...n], H = [];
    for (const {
      key: I,
      idx: P,
      width: O
    } of t)
      if (R === I) {
        const W = typeof k == "number" ? `${k}px` : k;
        D[P] = W;
      } else d && typeof O == "string" && !i.has(I) && (D[P] = O, H.push(I));
    r.current.style.gridTemplateColumns = D.join(" ");
    const S = typeof k == "number" ? k : Qn(r, R);
    Lt(() => {
      s((I) => {
        const P = new Map(I);
        return P.set(R, S), P;
      }), f(H);
    }), l == null || l(v.idx, S);
  }
  return {
    gridTemplateColumns: m,
    handleColumnResize: x
  };
}
function Qn(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Wi() {
  const e = ve(null), [t, n] = oe(1), [r, o] = oe(1), [i, a] = oe(0);
  return tt(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: l,
      offsetWidth: p,
      offsetHeight: d
    } = e.current, {
      width: w,
      height: u
    } = e.current.getBoundingClientRect(), h = d - l, m = w - p + c, f = u - h;
    n(m), o(f), a(h);
    const x = new s((v) => {
      const k = v[0].contentBoxSize[0], {
        clientHeight: R,
        offsetHeight: D
      } = e.current;
      Lt(() => {
        n(k.inlineSize), o(k.blockSize), a(D - R);
      });
    });
    return x.observe(e.current), () => {
      x.disconnect();
    };
  }, []), [e, t, r, i];
}
function he(e) {
  const t = ve(e);
  _e(() => {
    t.current = e;
  });
  const n = Z((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Ct(e) {
  const [t, n] = oe(!1);
  t && !e && n(!1);
  function r(i) {
    i.target !== i.currentTarget && n(!0);
  }
  return {
    tabIndex: e && !t ? 0 : -1,
    childTabIndex: e ? 0 : -1,
    onFocus: e ? r : void 0
  };
}
function Ai({
  columns: e,
  colSpanColumns: t,
  rows: n,
  topSummaryRows: r,
  bottomSummaryRows: o,
  colOverscanStartIdx: i,
  colOverscanEndIdx: a,
  lastFrozenColumnIndex: s,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: l
}) {
  const p = G(() => {
    if (i === 0) return 0;
    let d = i;
    const w = (u, h) => h !== void 0 && u + h > i ? (d = u, !0) : !1;
    for (const u of t) {
      const h = u.idx;
      if (h >= d || w(h, be(u, s, {
        type: "HEADER"
      })))
        break;
      for (let m = c; m <= l; m++) {
        const f = n[m];
        if (w(h, be(u, s, {
          type: "ROW",
          row: f
        })))
          break;
      }
      if (r != null) {
        for (const m of r)
          if (w(h, be(u, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
      if (o != null) {
        for (const m of o)
          if (w(h, be(u, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
    }
    return d;
  }, [c, l, n, r, o, i, s, t]);
  return G(() => {
    const d = [];
    for (let w = 0; w <= a; w++) {
      const u = e[w];
      w < p && !u.frozen || d.push(u);
    }
    return d;
  }, [p, a, e]);
}
function Yi({
  rows: e,
  rowHeight: t,
  clientHeight: n,
  scrollTop: r,
  enableVirtualization: o
}) {
  const {
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  } = G(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (f) => f * t,
        getRowHeight: () => t,
        findRowIdx: (f) => Zn(f / t)
      };
    let w = 0, u = " ";
    const h = e.map((f) => {
      const x = t(f), v = {
        top: w,
        height: x
      };
      return u += `${x}px `, w += x, v;
    }), m = (f) => zt(0, wt(e.length - 1, f));
    return {
      totalRowHeight: w,
      gridTemplateRows: u,
      getRowTop: (f) => h[m(f)].top,
      getRowHeight: (f) => h[m(f)].height,
      findRowIdx(f) {
        let x = 0, v = h.length - 1;
        for (; x <= v; ) {
          const k = x + Zn((v - x) / 2), R = h[k].top;
          if (R === f) return k;
          if (R < f ? x = k + 1 : R > f && (v = k - 1), x > v) return v;
        }
        return 0;
      }
    };
  }, [t, e]);
  let p = 0, d = e.length - 1;
  if (o) {
    const u = l(r), h = l(r + n);
    p = zt(0, u - 4), d = wt(e.length - 1, h + 4);
  }
  return {
    rowOverscanStartIdx: p,
    rowOverscanEndIdx: d,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  };
}
const $i = "c1w9bbhr7-0-0-beta-47", _i = "c1creorc7-0-0-beta-47", Bi = `rdg-cell-drag-handle ${$i}`;
function Ui({
  gridRowStart: e,
  rows: t,
  column: n,
  columnWidth: r,
  maxColIdx: o,
  isLastRow: i,
  selectedPosition: a,
  latestDraggedOverRowIdx: s,
  isCellEditable: c,
  onRowsChange: l,
  onFill: p,
  onClick: d,
  setDragging: w,
  setDraggedOverRowIdx: u
}) {
  const {
    idx: h,
    rowIdx: m
  } = a;
  function f(D) {
    if (D.preventDefault(), D.buttons !== 1) return;
    w(!0), window.addEventListener("mouseover", H), window.addEventListener("mouseup", S);
    function H(I) {
      I.buttons !== 1 && S();
    }
    function S() {
      window.removeEventListener("mouseover", H), window.removeEventListener("mouseup", S), w(!1), x();
    }
  }
  function x() {
    const D = s.current;
    if (D === void 0) return;
    const H = m < D ? m + 1 : D, S = m < D ? D + 1 : m;
    k(H, S), u(void 0);
  }
  function v(D) {
    D.stopPropagation(), k(m + 1, t.length);
  }
  function k(D, H) {
    const S = t[m], I = [...t], P = [];
    for (let O = D; O < H; O++)
      if (c({
        rowIdx: O,
        idx: h
      })) {
        const W = p({
          columnKey: n.key,
          sourceRow: S,
          targetRow: t[O]
        });
        W !== t[O] && (I[O] = W, P.push(O));
      }
    P.length > 0 && (l == null || l(I, {
      indexes: P,
      column: n
    }));
  }
  function R() {
    var O;
    const D = ((O = n.colSpan) == null ? void 0 : O.call(n, {
      type: "ROW",
      row: t[m]
    })) ?? 1, {
      insetInlineStart: H,
      ...S
    } = nt(n, D), I = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", P = n.idx + D - 1 === o;
    return {
      ...S,
      gridRowStart: e,
      marginInlineEnd: P ? void 0 : I,
      marginBlockEnd: i ? void 0 : I,
      insetInlineStart: H ? `calc(${H} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ b("div", {
    style: R(),
    className: Ee(Bi, n.frozen && _i),
    onClick: d,
    onMouseDown: f,
    onDoubleClick: v
  });
}
const Gi = "cis5rrm7-0-0-beta-47";
function ji({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: o,
  closeEditor: i,
  onKeyDown: a,
  navigate: s
}) {
  var x, v, k;
  const c = ve(void 0), l = ((x = e.editorOptions) == null ? void 0 : x.commitOnOutsideClick) !== !1, p = he(() => {
    u(!0, !1);
  });
  _e(() => {
    if (!l) return;
    function R() {
      c.current = requestAnimationFrame(p);
    }
    return addEventListener("mousedown", R, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", R, {
        capture: !0
      }), d();
    };
  }, [l, p]);
  function d() {
    cancelAnimationFrame(c.current);
  }
  function w(R) {
    if (a) {
      const D = ht(R);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(R);
        },
        onClose: u
      }, D), D.isGridDefaultPrevented()) return;
    }
    R.key === "Escape" ? u() : R.key === "Enter" ? u(!0) : oi(R) && s(R);
  }
  function u(R = !1, D = !0) {
    R ? o(n, !0, D) : i(D);
  }
  function h(R, D = !1) {
    o(R, D, D);
  }
  const {
    cellClass: m
  } = e, f = xt(e, "rdg-editor-container", typeof m == "function" ? m(n) : m, !((v = e.editorOptions) != null && v.displayCellContent) && Gi);
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: f,
    style: nt(e, t),
    onKeyDown: w,
    onMouseDownCapture: d,
    children: e.renderEditCell != null && /* @__PURE__ */ se(yn, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: h,
        onClose: u
      }), ((k = e.editorOptions) == null ? void 0 : k.displayCellContent) && e.renderCell({
        column: e,
        row: n,
        rowIdx: r,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: h
      })]
    })
  });
}
function Ki({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: o,
    onFocus: i
  } = Ct(n), {
    colSpan: a
  } = e, s = Er(e, t), c = e.idx + 1;
  function l() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ b("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": n,
    tabIndex: o,
    className: Ee(Ir, e.headerCellClass),
    style: {
      ...Tr(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onClick: l,
    children: e.name
  });
}
const qi = "h44jtk67-0-0-beta-47", Xi = "hcgkhxz7-0-0-beta-47", Vi = `rdg-header-sort-name ${Xi}`;
function Wr({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ b(Zi, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Zi({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = _t().renderSortStatus;
  return /* @__PURE__ */ se("span", {
    className: qi,
    children: [/* @__PURE__ */ b("span", {
      className: Vi,
      children: n
    }), /* @__PURE__ */ b("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Qi = "c6l2wv17-0-0-beta-47", Ji = "c1kqdw7y7-0-0-beta-47", ea = `rdg-cell-resizable ${Ji}`, ta = "r1y6ywlx7-0-0-beta-47", na = "rdg-cell-draggable", ra = "c1bezg5o7-0-0-beta-47", oa = `rdg-cell-dragging ${ra}`, ia = "c1vc96037-0-0-beta-47", aa = `rdg-cell-drag-over ${ia}`;
function sa({
  column: e,
  colSpan: t,
  rowIdx: n,
  isCellSelected: r,
  onColumnResize: o,
  onColumnsReorder: i,
  sortColumns: a,
  onSortColumnsChange: s,
  selectCell: c,
  shouldFocusGrid: l,
  direction: p,
  dragDropKey: d
}) {
  const [w, u] = oe(!1), [h, m] = oe(!1), f = p === "rtl", x = Er(e, n), {
    tabIndex: v,
    childTabIndex: k,
    onFocus: R
  } = Ct(r), D = a == null ? void 0 : a.findIndex((C) => C.columnKey === e.key), H = D !== void 0 && D > -1 ? a[D] : void 0, S = H == null ? void 0 : H.direction, I = H !== void 0 && a.length > 1 ? D + 1 : void 0, P = S && !I ? S === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: O,
    resizable: W,
    draggable: $
  } = e, F = xt(e, e.headerCellClass, O && Qi, W && ea, $ && na, w && oa, h && aa), ne = e.renderHeaderCell ?? Wr;
  function _(C) {
    if (C.pointerType === "mouse" && C.buttons !== 1)
      return;
    C.preventDefault();
    const {
      currentTarget: z,
      pointerId: U
    } = C, j = z.parentElement, {
      right: te,
      left: le
    } = j.getBoundingClientRect(), ue = f ? C.clientX - le : te - C.clientX;
    let ie = !1;
    function ge(K) {
      const {
        width: ce,
        right: rt,
        left: We
      } = j.getBoundingClientRect();
      let Ue = f ? rt + ue - K.clientX : K.clientX + ue - We;
      Ue = Rr(Ue, e), ce > 0 && Ue !== ce && o(e, Ue);
    }
    function Y() {
      ie = !0, o(e, "max-content");
    }
    function V(K) {
      ie || ge(K), z.removeEventListener("pointermove", ge), z.removeEventListener("dblclick", Y), z.removeEventListener("lostpointercapture", V);
    }
    z.setPointerCapture(U), z.addEventListener("pointermove", ge), z.addEventListener("dblclick", Y), z.addEventListener("lostpointercapture", V);
  }
  function re(C) {
    if (s == null) return;
    const {
      sortDescendingFirst: z
    } = e;
    if (H === void 0) {
      const U = {
        columnKey: e.key,
        direction: z ? "DESC" : "ASC"
      };
      s(a && C ? [...a, U] : [U]);
    } else {
      let U;
      if ((z === !0 && S === "DESC" || z !== !0 && S === "ASC") && (U = {
        columnKey: e.key,
        direction: S === "ASC" ? "DESC" : "ASC"
      }), C) {
        const j = [...a];
        U ? j[D] = U : j.splice(D, 1), s(j);
      } else
        s(U ? [U] : []);
    }
  }
  function Te(C) {
    c({
      idx: e.idx,
      rowIdx: n
    }), O && re(C.ctrlKey || C.metaKey);
  }
  function ye(C) {
    R == null || R(C), l && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Ce(C) {
    (C.key === " " || C.key === "Enter") && (C.preventDefault(), re(C.ctrlKey || C.metaKey));
  }
  function ze(C) {
    C.dataTransfer.setData(d, e.key), C.dataTransfer.dropEffect = "move", u(!0);
  }
  function Se() {
    u(!1);
  }
  function Me(C) {
    C.preventDefault(), C.dataTransfer.dropEffect = "move";
  }
  function Pe(C) {
    if (m(!1), C.dataTransfer.types.includes(d.toLowerCase())) {
      const z = C.dataTransfer.getData(d.toLowerCase());
      z !== e.key && (C.preventDefault(), i == null || i(z, e.key));
    }
  }
  function T(C) {
    Jn(C) && m(!0);
  }
  function M(C) {
    Jn(C) && m(!1);
  }
  let A;
  return $ && (A = {
    draggable: !0,
    onDragStart: ze,
    onDragEnd: Se,
    onDragOver: Me,
    onDragEnter: T,
    onDragLeave: M,
    onDrop: Pe
  }), /* @__PURE__ */ se("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": x,
    "aria-selected": r,
    "aria-sort": P,
    tabIndex: l ? 0 : v,
    className: F,
    style: {
      ...Tr(e, n, x),
      ...nt(e, t)
    },
    onFocus: ye,
    onClick: Te,
    onKeyDown: O ? Ce : void 0,
    ...A,
    children: [ne({
      column: e,
      sortDirection: S,
      priority: I,
      tabIndex: k
    }), W && /* @__PURE__ */ b("div", {
      className: ta,
      onClick: ti,
      onPointerDown: _
    })]
  });
}
function Jn(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const ca = "r1upfr807-0-0-beta-47", Cn = `rdg-row ${ca}`, la = "r190mhd37-0-0-beta-47", Bt = "rdg-row-selected", da = "r139qu9m7-0-0-beta-47", ua = "rdg-top-summary-row", fa = "rdg-bottom-summary-row", ha = "h10tskcx7-0-0-beta-47", Ar = `rdg-header-row ${ha}`;
function ga({
  rowIdx: e,
  columns: t,
  onColumnResize: n,
  onColumnsReorder: r,
  sortColumns: o,
  onSortColumnsChange: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: s,
  selectCell: c,
  shouldFocusGrid: l,
  direction: p
}) {
  const d = Ko(), w = [];
  for (let u = 0; u < t.length; u++) {
    const h = t[u], m = be(h, a, {
      type: "HEADER"
    });
    m !== void 0 && (u += m - 1), w.push(/* @__PURE__ */ b(sa, {
      column: h,
      colSpan: m,
      rowIdx: e,
      isCellSelected: s === h.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: l && u === 0,
      direction: p,
      dragDropKey: d
    }, h.key));
  }
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": e,
    className: Ee(Ar, s === -1 && Bt),
    children: w
  });
}
const ma = /* @__PURE__ */ He(ga);
function wa({
  rowIdx: e,
  level: t,
  columns: n,
  selectedCellIdx: r,
  selectCell: o
}) {
  const i = [], a = /* @__PURE__ */ new Set();
  for (const s of n) {
    let {
      parent: c
    } = s;
    if (c !== void 0) {
      for (; c.level > t && c.parent !== void 0; )
        c = c.parent;
      if (c.level === t && !a.has(c)) {
        a.add(c);
        const {
          idx: l
        } = c;
        i.push(/* @__PURE__ */ b(Ki, {
          column: c,
          rowIdx: e,
          isCellSelected: r === l,
          selectCell: o
        }, l));
      }
    }
  }
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": e,
    className: Ar,
    children: i
  });
}
const ya = /* @__PURE__ */ He(wa), pa = "c6ra8a37-0-0-beta-47", ba = `rdg-cell-copied ${pa}`, xa = "cq910m07-0-0-beta-47", Ca = `rdg-cell-dragged-over ${xa}`;
function va({
  column: e,
  colSpan: t,
  isCellSelected: n,
  isCopied: r,
  isDraggedOver: o,
  row: i,
  rowIdx: a,
  onClick: s,
  onDoubleClick: c,
  onContextMenu: l,
  onRowChange: p,
  selectCell: d,
  ...w
}) {
  const {
    tabIndex: u,
    childTabIndex: h,
    onFocus: m
  } = Ct(n), {
    cellClass: f
  } = e, x = xt(e, typeof f == "function" ? f(i) : f, r && ba, o && Ca), v = Sr(e, i);
  function k(I) {
    d({
      rowIdx: a,
      idx: e.idx
    }, I);
  }
  function R(I) {
    if (s) {
      const P = ht(I);
      if (s({
        row: i,
        column: e,
        selectCell: k
      }, P), P.isGridDefaultPrevented()) return;
    }
    k();
  }
  function D(I) {
    if (l) {
      const P = ht(I);
      if (l({
        row: i,
        column: e,
        selectCell: k
      }, P), P.isGridDefaultPrevented()) return;
    }
    k();
  }
  function H(I) {
    if (c) {
      const P = ht(I);
      if (c({
        row: i,
        column: e,
        selectCell: k
      }, P), P.isGridDefaultPrevented()) return;
    }
    k(!0);
  }
  function S(I) {
    p(e, I);
  }
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !v || void 0,
    tabIndex: u,
    className: x,
    style: nt(e, t),
    onClick: R,
    onDoubleClick: H,
    onContextMenu: D,
    onFocus: m,
    ...w,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: v,
      tabIndex: h,
      onRowChange: S
    })
  });
}
const ka = /* @__PURE__ */ He(va);
function Da({
  className: e,
  rowIdx: t,
  gridRowStart: n,
  selectedCellIdx: r,
  isRowSelectionDisabled: o,
  isRowSelected: i,
  copiedCellIdx: a,
  draggedOverCellIdx: s,
  lastFrozenColumnIndex: c,
  row: l,
  viewportColumns: p,
  selectedCellEditor: d,
  onCellClick: w,
  onCellDoubleClick: u,
  onCellContextMenu: h,
  rowClass: m,
  setDraggedOverRowIdx: f,
  onMouseEnter: x,
  onRowChange: v,
  selectCell: k,
  ...R
}, D) {
  const H = he((O, W) => {
    v(O, t, W);
  });
  function S(O) {
    f == null || f(t), x == null || x(O);
  }
  e = Ee(Cn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, m == null ? void 0 : m(l, t), e, r === -1 && Bt);
  const I = [];
  for (let O = 0; O < p.length; O++) {
    const W = p[O], {
      idx: $
    } = W, F = be(W, c, {
      type: "ROW",
      row: l
    });
    F !== void 0 && (O += F - 1);
    const ne = r === $;
    ne && d ? I.push(d) : I.push(/* @__PURE__ */ b(ka, {
      column: W,
      colSpan: F,
      row: l,
      rowIdx: t,
      isCopied: a === $,
      isDraggedOver: s === $,
      isCellSelected: ne,
      onClick: w,
      onDoubleClick: u,
      onContextMenu: h,
      onRowChange: H,
      selectCell: k
    }, W.key));
  }
  const P = G(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ b(Or, {
    value: P,
    children: /* @__PURE__ */ b("div", {
      role: "row",
      ref: D,
      className: e,
      onMouseEnter: S,
      style: bn(n),
      ...R,
      children: I
    })
  });
}
const Yr = /* @__PURE__ */ He(/* @__PURE__ */ pn(Da)), $l = Yr;
function $r(e, t) {
  return /* @__PURE__ */ b(Yr, {
    ...t
  }, e);
}
function Sa({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const o = ve(null);
  return tt(() => {
    Ft(o.current);
  }), tt(() => {
    function i() {
      r(null);
    }
    const a = new IntersectionObserver(i, {
      root: n,
      threshold: 1
    });
    return a.observe(o.current), () => {
      a.disconnect();
    };
  }, [n, r]), /* @__PURE__ */ b("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Ia = "a3ejtar7-0-0-beta-47", Ta = `rdg-sort-arrow ${Ia}`;
function Ra({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ se(yn, {
    children: [Ea({
      sortDirection: e
    }), Ma({
      priority: t
    })]
  });
}
function Ea({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ b("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Ta,
    "aria-hidden": !0,
    children: /* @__PURE__ */ b("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Ma({
  priority: e
}) {
  return e;
}
const Pa = "rnvodz57-0-0-beta-47", Oa = `rdg ${Pa}`, Na = "vlqv91k7-0-0-beta-47", Fa = `rdg-viewport-dragging ${Na}`, La = "f1lsfrzw7-0-0-beta-47", Ha = "f1cte0lg7-0-0-beta-47", za = "s8wc6fl7-0-0-beta-47";
function Wa({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: o,
  selectCell: i
}) {
  var w;
  const {
    tabIndex: a,
    childTabIndex: s,
    onFocus: c
  } = Ct(o), {
    summaryCellClass: l
  } = e, p = xt(e, za, typeof l == "function" ? l(n) : l);
  function d() {
    i({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: p,
    style: nt(e, t),
    onClick: d,
    onFocus: c,
    children: (w = e.renderSummaryCell) == null ? void 0 : w.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
const Aa = /* @__PURE__ */ He(Wa), Ya = "skuhp557-0-0-beta-47", $a = "tf8l5ub7-0-0-beta-47", _a = `rdg-summary-row ${Ya}`;
function Ba({
  rowIdx: e,
  gridRowStart: t,
  row: n,
  viewportColumns: r,
  top: o,
  bottom: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: s,
  isTop: c,
  selectCell: l,
  "aria-rowindex": p
}) {
  const d = [];
  for (let w = 0; w < r.length; w++) {
    const u = r[w], h = be(u, a, {
      type: "SUMMARY",
      row: n
    });
    h !== void 0 && (w += h - 1);
    const m = s === u.idx;
    d.push(/* @__PURE__ */ b(Aa, {
      column: u,
      colSpan: h,
      row: n,
      rowIdx: e,
      isCellSelected: m,
      selectCell: l
    }, u.key));
  }
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": p,
    className: Ee(Cn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, _a, c ? `${ua} ${$a}` : fa, s === -1 && Bt),
    style: {
      ...bn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: d
  });
}
const er = /* @__PURE__ */ He(Ba);
function Ua(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i,
    rowKeyGetter: a,
    onRowsChange: s,
    rowHeight: c,
    headerRowHeight: l,
    summaryRowHeight: p,
    selectedRows: d,
    isRowSelectionDisabled: w,
    onSelectedRowsChange: u,
    sortColumns: h,
    onSortColumnsChange: m,
    defaultColumnOptions: f,
    onCellClick: x,
    onCellDoubleClick: v,
    onCellContextMenu: k,
    onCellKeyDown: R,
    onSelectedCellChange: D,
    onScroll: H,
    onColumnResize: S,
    onColumnsReorder: I,
    onFill: P,
    onCopy: O,
    onPaste: W,
    enableVirtualization: $,
    renderers: F,
    className: ne,
    style: _,
    rowClass: re,
    direction: Te,
    role: ye,
    "aria-label": Ce,
    "aria-labelledby": ze,
    "aria-describedby": Se,
    "aria-rowcount": Me,
    "data-testid": Pe
  } = e, T = _t(), M = ye ?? "grid", A = c ?? 35, C = l ?? (typeof A == "number" ? A : 35), z = p ?? (typeof A == "number" ? A : 35), U = (F == null ? void 0 : F.renderRow) ?? (T == null ? void 0 : T.renderRow) ?? $r, j = (F == null ? void 0 : F.renderSortStatus) ?? (T == null ? void 0 : T.renderSortStatus) ?? Ra, te = (F == null ? void 0 : F.renderCheckbox) ?? (T == null ? void 0 : T.renderCheckbox) ?? pi, le = (F == null ? void 0 : F.noRowsFallback) ?? (T == null ? void 0 : T.noRowsFallback), ue = $ ?? !0, ie = Te ?? "ltr", [ge, Y] = oe(0), [V, K] = oe(0), [ce, rt] = oe(() => /* @__PURE__ */ new Map()), [We, Ue] = oe(() => /* @__PURE__ */ new Map()), [Ge, In] = oe(null), [Tn, io] = oe(!1), [ot, ao] = oe(void 0), [Oe, Rn] = oe(null), En = Z((g) => ce.get(g.key) ?? We.get(g.key) ?? g.width, [We, ce]), [je, Mn, Pn, so] = Wi(), {
    columns: ae,
    colSpanColumns: On,
    lastFrozenColumnIndex: pe,
    headerRowsCount: Ae,
    colOverscanStartIdx: co,
    colOverscanEndIdx: Nn,
    templateColumns: lo,
    layoutCssVars: uo,
    totalFrozenColumnWidth: fo
  } = Hi({
    rawColumns: n,
    defaultColumnOptions: f,
    getColumnWidth: En,
    scrollLeft: V,
    viewportWidth: Mn,
    enableVirtualization: ue
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Fn = it + Ke, qe = Ae + it, Ut = Ae - 1, me = -qe, Dt = me + Ut, Ye = r.length + Ke - 1, [E, Xe] = oe(() => ({
    idx: -1,
    rowIdx: me - 1,
    mode: "SELECT"
  })), Gt = ve(E), Ln = ve(ot), Hn = ve(-1), St = ve(null), It = ve(!1), jt = M === "treegrid", Kt = Ae * C, zn = Fn * z, Tt = Pn - Kt - zn, qt = d != null && u != null, Wn = ie === "rtl", ho = Wn ? "ArrowRight" : "ArrowLeft", An = Wn ? "ArrowLeft" : "ArrowRight", Yn = Me ?? Ae + r.length + Fn, go = G(() => ({
    renderCheckbox: te,
    renderSortStatus: j
  }), [te, j]), mo = G(() => {
    let g = !1, y = !1;
    if (a != null && d != null && d.size > 0) {
      for (const N of r)
        if (d.has(a(N)) ? g = !0 : y = !0, g && y) break;
    }
    return {
      isRowSelected: g && !y,
      isIndeterminate: g && y
    };
  }, [r, d, a]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: wo,
    getRowTop: $n,
    getRowHeight: yo,
    findRowIdx: _n
  } = Yi({
    rows: r,
    rowHeight: A,
    clientHeight: Tt,
    scrollTop: ge,
    enableVirtualization: ue
  }), Ne = Ai({
    columns: ae,
    colSpanColumns: On,
    colOverscanStartIdx: co,
    colOverscanEndIdx: Nn,
    lastFrozenColumnIndex: pe,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: po,
    handleColumnResize: bo
  } = zi(ae, Ne, lo, je, Mn, ce, We, rt, Ue, S), xo = jt ? -1 : 0, Ve = ae.length - 1, Vt = Jt(E), Rt = Kn(E), Co = C + Xt + zn + so, vo = he(bo), ko = he(I), Do = he(m), So = he(x), Io = he(v), To = he(k), Ro = he(Po), Eo = he(Un), Mo = he(Et), Zt = he(ct), Bn = he(({
    idx: g,
    rowIdx: y
  }) => {
    ct({
      rowIdx: me + y - 1,
      idx: g
    });
  });
  tt(() => {
    if (!Vt || nn(E, Gt.current)) {
      Gt.current = E;
      return;
    }
    Gt.current = E, E.idx === -1 && (St.current.focus({
      preventScroll: !0
    }), Ft(St.current));
  }), tt(() => {
    It.current && (It.current = !1, Xn());
  }), Go(t, () => ({
    element: je.current,
    scrollToCell({
      idx: g,
      rowIdx: y
    }) {
      const N = g !== void 0 && g > pe && g < ae.length ? g : void 0, L = y !== void 0 && Ze(y) ? y : void 0;
      (N !== void 0 || L !== void 0) && Rn({
        idx: N,
        rowIdx: L
      });
    },
    selectCell: ct
  }));
  const Qt = Z((g) => {
    ao(g), Ln.current = g;
  }, []);
  function Po(g) {
    if (!u) return;
    gt(a);
    const y = new Set(d);
    for (const N of r) {
      if ((w == null ? void 0 : w(N)) === !0) continue;
      const L = a(N);
      g.checked ? y.add(L) : y.delete(L);
    }
    u(y);
  }
  function Un(g) {
    if (!u) return;
    gt(a);
    const {
      row: y,
      checked: N,
      isShiftClick: L
    } = g;
    if ((w == null ? void 0 : w(y)) === !0) return;
    const B = new Set(d), X = a(y), Q = Hn.current, J = r.indexOf(y);
    if (Hn.current = J, N ? B.add(X) : B.delete(X), L && Q !== -1 && Q !== J && Q < r.length) {
      const we = gi(J - Q);
      for (let fe = Q + we; fe !== J; fe += we) {
        const Ie = r[fe];
        (w == null ? void 0 : w(Ie)) !== !0 && (N ? B.add(a(Ie)) : B.delete(a(Ie)));
      }
    }
    u(B);
  }
  function Oo(g) {
    var J;
    const {
      idx: y,
      rowIdx: N,
      mode: L
    } = E;
    if (L === "EDIT") return;
    if (R && Ze(N)) {
      const we = r[N], fe = ht(g);
      if (R({
        mode: "SELECT",
        row: we,
        column: ae[y],
        rowIdx: N,
        selectCell: ct
      }, fe), fe.isGridDefaultPrevented()) return;
    }
    if (!(g.target instanceof Element)) return;
    const B = g.target.closest(".rdg-cell") !== null, X = jt && g.target === St.current;
    if (!B && !X) return;
    const {
      keyCode: Q
    } = g;
    if (Rt && (W != null || O != null) && Ht(g)) {
      if (Q === 67) {
        if (((J = window.getSelection()) == null ? void 0 : J.isCollapsed) === !1) return;
        Fo();
        return;
      }
      if (Q === 86) {
        Lo();
        return;
      }
    }
    switch (g.key) {
      case "Escape":
        In(null);
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
        qn(g);
        break;
      default:
        Ho(g);
        break;
    }
  }
  function No(g) {
    const {
      scrollTop: y,
      scrollLeft: N
    } = g.currentTarget;
    Lt(() => {
      Y(y), K(mi(N));
    }), H == null || H(g);
  }
  function Et(g, y, N) {
    if (typeof s != "function" || N === r[y]) return;
    const L = [...r];
    L[y] = N, s(L, {
      indexes: [y],
      column: g
    });
  }
  function Gn() {
    E.mode === "EDIT" && Et(ae[E.idx], E.rowIdx, E.row);
  }
  function Fo() {
    const {
      idx: g,
      rowIdx: y
    } = E, N = r[y], L = ae[g].key;
    In({
      row: N,
      columnKey: L
    }), O == null || O({
      sourceRow: N,
      sourceColumnKey: L
    });
  }
  function Lo() {
    if (!W || !s || Ge === null || !Mt(E))
      return;
    const {
      idx: g,
      rowIdx: y
    } = E, N = ae[g], L = r[y], B = W({
      sourceRow: Ge.row,
      sourceColumnKey: Ge.columnKey,
      targetRow: L,
      targetColumnKey: N.key
    });
    Et(N, y, B);
  }
  function Ho(g) {
    if (!Rt) return;
    const y = r[E.rowIdx], {
      key: N,
      shiftKey: L
    } = g;
    if (qt && L && N === " ") {
      gt(a);
      const B = a(y);
      Un({
        row: y,
        checked: !d.has(B),
        isShiftClick: !1
      }), g.preventDefault();
      return;
    }
    Mt(E) && ri(g) && Xe(({
      idx: B,
      rowIdx: X
    }) => ({
      idx: B,
      rowIdx: X,
      mode: "EDIT",
      row: y,
      originalRow: y
    }));
  }
  function jn(g) {
    return g >= xo && g <= Ve;
  }
  function Ze(g) {
    return g >= 0 && g < r.length;
  }
  function Jt({
    idx: g,
    rowIdx: y
  }) {
    return y >= me && y <= Ye && jn(g);
  }
  function zo({
    idx: g,
    rowIdx: y
  }) {
    return Ze(y) && g >= 0 && g <= Ve;
  }
  function Kn({
    idx: g,
    rowIdx: y
  }) {
    return Ze(y) && jn(g);
  }
  function Mt(g) {
    return zo(g) && si({
      columns: ae,
      rows: r,
      selectedPosition: g
    });
  }
  function ct(g, y) {
    if (!Jt(g)) return;
    Gn();
    const N = r[g.rowIdx], L = nn(E, g);
    y && Mt(g) ? Xe({
      ...g,
      mode: "EDIT",
      row: N,
      originalRow: N
    }) : L ? Ft(tr(je.current)) : (It.current = !0, Xe({
      ...g,
      mode: "SELECT"
    })), D && !L && D({
      rowIdx: g.rowIdx,
      row: N,
      column: ae[g.idx]
    });
  }
  function Wo(g, y, N) {
    const {
      idx: L,
      rowIdx: B
    } = E, X = Vt && L === -1;
    switch (g) {
      case "ArrowUp":
        return {
          idx: L,
          rowIdx: B - 1
        };
      case "ArrowDown":
        return {
          idx: L,
          rowIdx: B + 1
        };
      case ho:
        return {
          idx: L - 1,
          rowIdx: B
        };
      case An:
        return {
          idx: L + 1,
          rowIdx: B
        };
      case "Tab":
        return {
          idx: L + (N ? -1 : 1),
          rowIdx: B
        };
      case "Home":
        return X ? {
          idx: L,
          rowIdx: me
        } : {
          idx: 0,
          rowIdx: y ? me : B
        };
      case "End":
        return X ? {
          idx: L,
          rowIdx: Ye
        } : {
          idx: Ve,
          rowIdx: y ? Ye : B
        };
      case "PageUp": {
        if (E.rowIdx === me) return E;
        const Q = $n(B) + yo(B) - Tt;
        return {
          idx: L,
          rowIdx: Q > 0 ? _n(Q) : 0
        };
      }
      case "PageDown": {
        if (E.rowIdx >= r.length) return E;
        const Q = $n(B) + Tt;
        return {
          idx: L,
          rowIdx: Q < Xt ? _n(Q) : r.length - 1
        };
      }
      default:
        return E;
    }
  }
  function qn(g) {
    const {
      key: y,
      shiftKey: N
    } = g;
    let L = "NONE";
    if (y === "Tab") {
      if (di({
        shiftKey: N,
        maxColIdx: Ve,
        minRowIdx: me,
        maxRowIdx: Ye,
        selectedPosition: E
      })) {
        Gn();
        return;
      }
      L = "CHANGE_ROW";
    }
    g.preventDefault();
    const B = Ht(g), X = Wo(y, B, N);
    if (nn(E, X)) return;
    const Q = li({
      moveUp: y === "ArrowUp",
      moveNext: y === An || y === "Tab" && !N,
      columns: ae,
      colSpanColumns: On,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: me,
      mainHeaderRowIdx: Dt,
      maxRowIdx: Ye,
      lastFrozenColumnIndex: pe,
      cellNavigationMode: L,
      currentPosition: E,
      nextPosition: X,
      isCellWithinBounds: Jt
    });
    ct(Q);
  }
  function Ao(g) {
    if (ot === void 0) return;
    const {
      rowIdx: y
    } = E;
    return (y < ot ? y < g && g <= ot : y > g && g >= ot) ? E.idx : void 0;
  }
  function Xn() {
    const g = tr(je.current);
    if (g === null) return;
    Ft(g), (g.querySelector('[tabindex="0"]') ?? g).focus({
      preventScroll: !0
    });
  }
  function Yo() {
    if (P == null || E.mode === "EDIT" || !Kn(E))
      return;
    const {
      idx: g,
      rowIdx: y
    } = E, N = ae[g];
    if (N.renderEditCell == null || N.editable === !1)
      return;
    const L = En(N);
    return /* @__PURE__ */ b(Ui, {
      gridRowStart: qe + y + 1,
      rows: r,
      column: N,
      columnWidth: L,
      maxColIdx: Ve,
      isLastRow: y === Ye,
      selectedPosition: E,
      isCellEditable: Mt,
      latestDraggedOverRowIdx: Ln,
      onRowsChange: s,
      onClick: Xn,
      onFill: P,
      setDragging: io,
      setDraggedOverRowIdx: Qt
    });
  }
  function $o(g) {
    if (E.rowIdx !== g || E.mode === "SELECT") return;
    const {
      idx: y,
      row: N
    } = E, L = ae[y], B = be(L, pe, {
      type: "ROW",
      row: N
    }), X = (J) => {
      It.current = J, Xe(({
        idx: we,
        rowIdx: fe
      }) => ({
        idx: we,
        rowIdx: fe,
        mode: "SELECT"
      }));
    }, Q = (J, we, fe) => {
      we ? Lt(() => {
        Et(L, E.rowIdx, J), X(fe);
      }) : Xe((Ie) => ({
        ...Ie,
        row: J
      }));
    };
    return r[E.rowIdx] !== E.originalRow && X(!1), /* @__PURE__ */ b(ji, {
      column: L,
      colSpan: B,
      row: N,
      rowIdx: g,
      onRowChange: Q,
      closeEditor: X,
      onKeyDown: R,
      navigate: qn
    }, L.key);
  }
  function lt(g) {
    const y = E.idx === -1 ? void 0 : ae[E.idx];
    return y !== void 0 && E.rowIdx === g && !Ne.includes(y) ? E.idx > Nn ? [...Ne, y] : [...Ne.slice(0, pe + 1), y, ...Ne.slice(pe + 1)] : Ne;
  }
  function _o() {
    const g = [], {
      idx: y,
      rowIdx: N
    } = E, L = Rt && N < at ? at - 1 : at, B = Rt && N > st ? st + 1 : st;
    for (let X = L; X <= B; X++) {
      const Q = X === at - 1 || X === st + 1, J = Q ? N : X;
      let we = Ne;
      const fe = y === -1 ? void 0 : ae[y];
      fe !== void 0 && (Q ? we = [fe] : we = lt(J));
      const Ie = r[J], Bo = qe + J + 1;
      let en = J, tn = !1;
      typeof a == "function" && (en = a(Ie), tn = (d == null ? void 0 : d.has(en)) ?? !1), g.push(U(en, {
        "aria-rowindex": qe + J + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: J,
        row: Ie,
        viewportColumns: we,
        isRowSelectionDisabled: (w == null ? void 0 : w(Ie)) ?? !1,
        isRowSelected: tn,
        onCellClick: So,
        onCellDoubleClick: Io,
        onCellContextMenu: To,
        rowClass: re,
        gridRowStart: Bo,
        copiedCellIdx: Ge !== null && Ge.row === Ie ? ae.findIndex((Uo) => Uo.key === Ge.columnKey) : void 0,
        selectedCellIdx: N === J ? y : void 0,
        draggedOverCellIdx: Ao(J),
        setDraggedOverRowIdx: Tn ? Qt : void 0,
        lastFrozenColumnIndex: pe,
        onRowChange: Mo,
        selectCell: Zt,
        selectedCellEditor: $o(J)
      }));
    }
    return g;
  }
  (E.idx > Ve || E.rowIdx > Ye) && (Xe({
    idx: -1,
    rowIdx: me - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Pt = `repeat(${Ae}, ${C}px)`;
  it > 0 && (Pt += ` repeat(${it}, ${z}px)`), r.length > 0 && (Pt += wo), Ke > 0 && (Pt += ` repeat(${Ke}, ${z}px)`);
  const Vn = E.idx === -1 && E.rowIdx !== me - 1;
  return /* @__PURE__ */ se("div", {
    role: M,
    "aria-label": Ce,
    "aria-labelledby": ze,
    "aria-describedby": Se,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": ae.length,
    "aria-rowcount": Yn,
    className: Ee(Oa, ne, Tn && Fa),
    style: {
      ..._,
      scrollPaddingInlineStart: E.idx > pe || (Oe == null ? void 0 : Oe.idx) !== void 0 ? `${fo}px` : void 0,
      scrollPaddingBlock: Ze(E.rowIdx) || (Oe == null ? void 0 : Oe.rowIdx) !== void 0 ? `${Kt + it * z}px ${Ke * z}px` : void 0,
      gridTemplateColumns: po,
      gridTemplateRows: Pt,
      "--rdg-header-row-height": `${C}px`,
      "--rdg-scroll-height": `${Co}px`,
      ...uo
    },
    dir: ie,
    ref: je,
    onScroll: No,
    onKeyDown: Oo,
    "data-testid": Pe,
    children: [/* @__PURE__ */ se(Ii, {
      value: go,
      children: [/* @__PURE__ */ b(Ei, {
        value: Ro,
        children: /* @__PURE__ */ se(Ri, {
          value: mo,
          children: [Array.from({
            length: Ut
          }, (g, y) => /* @__PURE__ */ b(ya, {
            rowIdx: y + 1,
            level: -Ut + y,
            columns: lt(me + y),
            selectedCellIdx: E.rowIdx === me + y ? E.idx : void 0,
            selectCell: Bn
          }, y)), /* @__PURE__ */ b(ma, {
            rowIdx: Ae,
            columns: lt(Dt),
            onColumnResize: vo,
            onColumnsReorder: ko,
            sortColumns: h,
            onSortColumnsChange: Do,
            lastFrozenColumnIndex: pe,
            selectedCellIdx: E.rowIdx === Dt ? E.idx : void 0,
            selectCell: Bn,
            shouldFocusGrid: !Vt,
            direction: ie
          })]
        })
      }), r.length === 0 && le ? le : /* @__PURE__ */ se(yn, {
        children: [o == null ? void 0 : o.map((g, y) => {
          const N = Ae + 1 + y, L = Dt + 1 + y, B = E.rowIdx === L, X = Kt + z * y;
          return /* @__PURE__ */ b(er, {
            "aria-rowindex": N,
            rowIdx: L,
            gridRowStart: N,
            row: g,
            top: X,
            bottom: void 0,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: pe,
            selectedCellIdx: B ? E.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, y);
        }), /* @__PURE__ */ b(Ti, {
          value: Eo,
          children: _o()
        }), i == null ? void 0 : i.map((g, y) => {
          const N = qe + r.length + y + 1, L = r.length + y, B = E.rowIdx === L, X = Tt > Xt ? Pn - z * (i.length - y) : void 0, Q = X === void 0 ? z * (i.length - 1 - y) : void 0;
          return /* @__PURE__ */ b(er, {
            "aria-rowindex": Yn - Ke + y + 1,
            rowIdx: L,
            gridRowStart: N,
            row: g,
            top: X,
            bottom: Q,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: pe,
            selectedCellIdx: B ? E.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, y);
        })]
      })]
    }), Yo(), ai(Ne), jt && /* @__PURE__ */ b("div", {
      ref: St,
      tabIndex: Vn ? 0 : -1,
      className: Ee(La, Vn && [la, pe !== -1 && da], !Ze(E.rowIdx) && Ha),
      style: {
        gridRowStart: E.rowIdx + qe + 1
      }
    }), Oe !== null && /* @__PURE__ */ b(Sa, {
      scrollToPosition: Oe,
      setScrollToCellPosition: Rn,
      gridElement: je.current
    })]
  });
}
function tr(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function nn(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const _r = /* @__PURE__ */ pn(Ua);
function Ga({
  id: e,
  groupKey: t,
  childRows: n,
  isExpanded: r,
  isCellSelected: o,
  column: i,
  row: a,
  groupColumnIndex: s,
  isGroupByColumn: c,
  toggleGroup: l
}) {
  var m;
  const {
    tabIndex: p,
    childTabIndex: d,
    onFocus: w
  } = Ct(o);
  function u() {
    l(e);
  }
  const h = c && s === i.idx;
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: p,
    className: xt(i),
    style: {
      ...nt(i),
      cursor: h ? "pointer" : "default"
    },
    onClick: h ? u : void 0,
    onFocus: w,
    children: (!c || h) && ((m = i.renderGroupCell) == null ? void 0 : m.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: d,
      toggleGroup: u
    }))
  }, i.key);
}
const ja = /* @__PURE__ */ He(Ga), Ka = "g1yxluv37-0-0-beta-47", qa = `rdg-group-row ${Ka}`;
function Xa({
  className: e,
  row: t,
  rowIdx: n,
  viewportColumns: r,
  selectedCellIdx: o,
  isRowSelected: i,
  selectCell: a,
  gridRowStart: s,
  groupBy: c,
  toggleGroup: l,
  isRowSelectionDisabled: p,
  ...d
}) {
  const w = r[0].key === Be ? t.level + 1 : t.level;
  function u() {
    a({
      rowIdx: n,
      idx: -1
    });
  }
  const h = G(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: i
  }), [i]);
  return /* @__PURE__ */ b(Or, {
    value: h,
    children: /* @__PURE__ */ b("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Ee(Cn, qa, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Bt),
      onClick: u,
      style: bn(s),
      ...d,
      children: r.map((m) => /* @__PURE__ */ b(ja, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === m.idx,
        column: m,
        row: t,
        groupColumnIndex: w,
        toggleGroup: l,
        isGroupByColumn: c.includes(m.key)
      }, m.key))
    })
  });
}
const Va = /* @__PURE__ */ He(Xa);
function Za({
  columns: e,
  rows: t,
  rowHeight: n,
  rowKeyGetter: r,
  onCellKeyDown: o,
  onRowsChange: i,
  selectedRows: a,
  onSelectedRowsChange: s,
  renderers: c,
  groupBy: l,
  rowGrouper: p,
  expandedGroupIds: d,
  onExpandedGroupIdsChange: w,
  ...u
}, h) {
  var Se, Me, Pe;
  const m = _t(), f = (c == null ? void 0 : c.renderRow) ?? (m == null ? void 0 : m.renderRow) ?? $r, x = 1 + (((Se = u.topSummaryRows) == null ? void 0 : Se.length) ?? 0), v = u.direction === "rtl", k = v ? "ArrowRight" : "ArrowLeft", R = v ? "ArrowLeft" : "ArrowRight", D = he(Ce), {
    columns: H,
    groupBy: S
  } = G(() => {
    const T = [...e].sort(({
      key: A
    }, {
      key: C
    }) => A === Be ? -1 : C === Be ? 1 : l.includes(A) ? l.includes(C) ? l.indexOf(A) - l.indexOf(C) : -1 : l.includes(C) ? 1 : 0), M = [];
    for (const [A, C] of T.entries())
      l.includes(C.key) && (M.push(C.key), T[A] = {
        ...C,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: C.renderGroupCell ?? ki,
        editable: !1
      });
    return {
      columns: T,
      groupBy: M
    };
  }, [e, l]), [I, P] = G(() => {
    if (S.length === 0) return [void 0, t.length];
    const T = (M, [A, ...C], z) => {
      let U = 0;
      const j = {};
      for (const [te, le] of Object.entries(p(M, A))) {
        const [ue, ie] = C.length === 0 ? [le, le.length] : T(le, C, z + U + 1);
        j[te] = {
          childRows: le,
          childGroups: ue,
          startRowIndex: z + U
        }, U += ie + 1;
      }
      return [j, U];
    };
    return T(t, S, 0);
  }, [S, p, t]), [O, W] = G(() => {
    const T = /* @__PURE__ */ new Set();
    if (!I) return [t, C];
    const M = [], A = (z, U, j) => {
      if (Qa(z)) {
        M.push(...z);
        return;
      }
      Object.keys(z).forEach((te, le, ue) => {
        const ie = U !== void 0 ? `${U}__${te}` : te, ge = d.has(ie), {
          childRows: Y,
          childGroups: V,
          startRowIndex: K
        } = z[te], ce = {
          id: ie,
          parentId: U,
          groupKey: te,
          isExpanded: ge,
          childRows: Y,
          level: j,
          posInSet: le,
          startRowIndex: K,
          setSize: ue.length
        };
        M.push(ce), T.add(ce), ge && A(V, ie, j + 1);
      });
    };
    return A(I, void 0, 0), [M, C];
    function C(z) {
      return T.has(z);
    }
  }, [d, I, t]), $ = G(() => typeof n == "function" ? (T) => W(T) ? n({
    type: "GROUP",
    row: T
  }) : n({
    type: "ROW",
    row: T
  }) : n, [W, n]), F = Z((T) => {
    const M = O.indexOf(T);
    for (let A = M - 1; A >= 0; A--) {
      const C = O[A];
      if (W(C) && (!W(T) || T.parentId === C.id))
        return [C, A];
    }
  }, [W, O]), ne = Z((T) => {
    if (W(T))
      return T.id;
    if (typeof r == "function")
      return r(T);
    const M = F(T);
    if (M !== void 0) {
      const {
        startRowIndex: A,
        childRows: C
      } = M[0], z = C.indexOf(T);
      return A + z + 1;
    }
    return O.indexOf(T);
  }, [F, W, r, O]), _ = G(() => {
    if (a == null) return null;
    gt(r);
    const T = new Set(a);
    for (const M of O)
      W(M) && M.childRows.every((C) => a.has(r(C))) && T.add(M.id);
    return T;
  }, [W, r, a, O]);
  function re(T) {
    if (!s) return;
    gt(r);
    const M = new Set(a);
    for (const A of O) {
      const C = ne(A);
      if (_ != null && _.has(C) && !T.has(C))
        if (W(A))
          for (const z of A.childRows)
            M.delete(r(z));
        else
          M.delete(C);
      else if (!(_ != null && _.has(C)) && T.has(C))
        if (W(A))
          for (const z of A.childRows)
            M.add(r(z));
        else
          M.add(C);
    }
    s(M);
  }
  function Te(T, M) {
    if (o == null || o(T, M), M.isGridDefaultPrevented() || T.mode === "EDIT") return;
    const {
      column: A,
      rowIdx: C,
      selectCell: z
    } = T, U = (A == null ? void 0 : A.idx) ?? -1, j = O[C];
    if (W(j)) {
      if (U === -1 && (M.key === k && j.isExpanded || M.key === R && !j.isExpanded) && (M.preventDefault(), M.preventGridDefault(), Ce(j.id)), U === -1 && M.key === k && !j.isExpanded && j.level !== 0) {
        const te = F(j);
        te !== void 0 && (M.preventGridDefault(), z({
          idx: U,
          rowIdx: te[1]
        }));
      }
      Ht(M) && (M.keyCode === 67 || M.keyCode === 86) && M.preventGridDefault();
    }
  }
  function ye(T, {
    indexes: M,
    column: A
  }) {
    if (!i) return;
    const C = [...t], z = [];
    for (const U of M) {
      const j = t.indexOf(O[U]);
      C[j] = T[U], z.push(j);
    }
    i(C, {
      indexes: z,
      column: A
    });
  }
  function Ce(T) {
    const M = new Set(d);
    M.has(T) ? M.delete(T) : M.add(T), w(M);
  }
  function ze(T, {
    row: M,
    rowClass: A,
    onCellClick: C,
    onCellDoubleClick: z,
    onCellContextMenu: U,
    onRowChange: j,
    lastFrozenColumnIndex: te,
    copiedCellIdx: le,
    draggedOverCellIdx: ue,
    setDraggedOverRowIdx: ie,
    selectedCellEditor: ge,
    ...Y
  }) {
    if (W(M)) {
      const {
        startRowIndex: ce
      } = M;
      return /* @__PURE__ */ b(Va, {
        ...Y,
        "aria-rowindex": x + ce + 1,
        row: M,
        groupBy: S,
        toggleGroup: D
      }, T);
    }
    let V = Y["aria-rowindex"];
    const K = F(M);
    if (K !== void 0) {
      const {
        startRowIndex: ce,
        childRows: rt
      } = K[0], We = rt.indexOf(M);
      V = ce + x + We + 2;
    }
    return f(T, {
      ...Y,
      "aria-rowindex": V,
      row: M,
      rowClass: A,
      onCellClick: C,
      onCellDoubleClick: z,
      onCellContextMenu: U,
      onRowChange: j,
      lastFrozenColumnIndex: te,
      copiedCellIdx: le,
      draggedOverCellIdx: ue,
      setDraggedOverRowIdx: ie,
      selectedCellEditor: ge
    });
  }
  return /* @__PURE__ */ b(_r, {
    ...u,
    role: "treegrid",
    "aria-rowcount": P + 1 + (((Me = u.topSummaryRows) == null ? void 0 : Me.length) ?? 0) + (((Pe = u.bottomSummaryRows) == null ? void 0 : Pe.length) ?? 0),
    ref: h,
    columns: H,
    rows: O,
    rowHeight: $,
    rowKeyGetter: ne,
    onRowsChange: ye,
    selectedRows: _,
    onSelectedRowsChange: re,
    onCellKeyDown: Te,
    renderers: {
      ...c,
      renderRow: ze
    }
  });
}
function Qa(e) {
  return Array.isArray(e);
}
const _l = /* @__PURE__ */ pn(Za), Ja = "t7vyx3i7-0-0-beta-47", es = `rdg-text-editor ${Ja}`;
function ts(e) {
  e == null || e.focus(), e == null || e.select();
}
function Bl({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ b("input", {
    className: es,
    ref: ts,
    value: e[t.key],
    onChange: (o) => n({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const ee = {
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
}, ns = {
  "--rdg-color": ee.gray800,
  "--rdg-header-color": ee.gray700,
  "--rdg-border-color": ee.gray400,
  "--rdg-background-color": ee.forcewhite,
  "--rdg-header-background-color": ee.forcewhite,
  "--rdg-row-hover-background-color": ee.forcewhite,
  "--rdg-row-selected-hover-background-color": ee.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": ee.primary400,
  "--rdg-expanded-accent-color": ee.primary400,
  "--rdg-row-selected-color": ee.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": ee.primary500,
  "--rdg-scrollbar-track-background": ee.gray100,
  "--rdg--scrollbar-thumb-hover-background": ee.primary500,
  "--rdg--scrollbar-track-hover-background": ee.gray200
}, rs = xe.div`
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

    /* The box holding the grid itself. Every child of this container is a div — the grid box, the
       pager, the loading overlay — and the grid box is always the first of them, so the first div
       is the grid box. */
    > div:first-of-type {
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

    /* A sortable header is [label][sort arrow] in one flex box, with nothing between them — the
       arrow reads as the last letter of the word. The gap goes on the LABEL rather than on the
       arrow (which react-data-grid only renders once the column is sorted), so the header does not
       shift sideways the moment it is clicked. */
    .rdg-header-sort-name {
        margin-inline-end: 6px;
    }

    /* A frozenRight column's cells: pinned at the right edge while the grid scrolls sideways —
       the same sticky mechanism rdg uses for frozen-left, which it only implements leftward
       (it SORTS frozen columns to the front). Cells are already background-color: inherit, so
       the pinned cell stays opaque with the row's own state (hover, selected) beneath it.
       z-indexes mirror rdg's layering: body frozen cells sit at 1, frozen header cells at 3. */
    /* No seam on purpose (Olivier, 2026-08-04): a permanent left edge read as clutter; the cell's
       opaque background over the scrolling columns is signal enough. */
    .rdg-cell-frozen-right {
        position: sticky;
        inset-inline-end: 0;
        z-index: 1;
    }

    .rdg-header-row .rdg-cell-frozen-right {
        z-index: 3;
    }

    /* react-data-grid renders the noRowsFallback as a bare grid child; center it in the body
       (below the header, whose height rdg exposes as --rdg-header-row-height) so every empty
       grid shows its message/icon in the same place. .rdg establishes a containing block via
       contain:content, so this absolute box resolves against the grid, not the page. */
    .rdg-no-data {
        position: absolute;
        inset-block: var(--rdg-header-row-height) 0;
        inset-inline: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        text-align: center;
        pointer-events: none;
    }

    .rdg-cell-resizable {
        /* Only style react-data-grid's resize handle, which it always renders as the
           cell's last child. A bare "> div" also matches the header-content wrapper
           (getHeaderFilter's Box) — collapsing the label/filter to an absolute strip.

           GRAB AREA and LINE are two boxes, which is what lets the target be big enough to aim at
           while the line stays hairline-thin. The handle itself paints nothing: it is an 8px
           transparent strip carrying the col-resize cursor, and its ::after draws the 2px line at
           the boundary. The same split every other seam in the app uses.

           ⚠ The strip has to sit ENTIRELY INSIDE the cell, because the cell clips
           (overflow: hidden) and a clipped strip is neither painted NOR hit-testable. Hanging it
           over the boundary — the obvious way to centre a seam on the edge it sits on — silently
           threw away half the target: measured, a 5px handle at right: -2.5px answered over 3px of
           screen, so aiming at a column boundary was a matter of luck rather than of pointing.

           The seam is discreet: the cursor is the affordance, the line only hints at it under the
           pointer and commits while the drag is on. :active is what says "dragging" — the handle
           takes pointer capture, so it keeps that state until the drag ends, wherever the pointer
           goes. --rdg-resize-handle-color lets a consumer name the tone; without one it is the
           grid's own border, the line the handle sits on. */
        > div:last-child {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 8px;
            cursor: col-resize;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                width: 2px;
                background-color: var(--rdg-resize-handle-color, var(--rdg-border-color));
                opacity: 0;
                transition: opacity 0.2s ease;
            }

            &:hover::after {
                opacity: 0.5;
            }

            &:active::after {
                opacity: 1;
            }
        }
    }

    /* A detail row holds a panel, not a line of text: it needs to wrap, to start at the top, and to
       scroll inside itself rather than spill over the row below. */
    .rdg-detail-row .rdg-cell {
        align-items: flex-start;
        white-space: normal;
        overflow: auto;
    }

    /* One bar down the open row AND its detail, so a reader can tell which pair belongs together
       when several are open at once. On the first cell only — it is frozen, so the bar stays put
       while the grid scrolls sideways. */
    .rdg-row-expanded .rdg-cell:first-of-type,
    .rdg-detail-row .rdg-cell:first-of-type {
        box-shadow: inset 3px 0 0 0 var(--rdg-expanded-accent-color);
    }

    /* A row holds nothing but .rdg-cell divs — the selection and expander cells among them — so
       :first-of-type names the row's leading cell. */
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

            .rdg-cell:first-of-type {
                border-top-left-radius: var(--rdg-border-radius-container);
            }

            .rdg-cell:last-child {
                border-top-right-radius: var(--rdg-border-radius-container);
            }
        }

        &.last-row {
            .rdg-cell:first-of-type {
                border-bottom-left-radius: var(--rdg-border-radius-container);
            }

            .rdg-cell:last-child {
                border-bottom-right-radius: var(--rdg-border-radius-container);
            }
        }

        .rdg-cell {
            border-bottom: solid var(--rdg-border-size) var(--rdg-border-color);

            &:first-of-type {
                border-left: solid var(--rdg-border-size) var(--rdg-border-color);
            }

            &:last-child {
                border-right: solid var(--rdg-border-size) var(--rdg-border-color);
            }
        }
    }
`, vt = Re.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1,
  chooserAnchor: null,
  setChooserAnchor: () => {
  },
  resetHiddenColumns: () => {
  }
}), os = "data-grid-hidden-column-visibility", is = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = os,
  onHiddenColumnsChange: a,
  onReset: s,
  resetLabel: c
}) => {
  const [l, p] = Re.useState(0), [d, w] = Re.useState(
    null
  ), [u, h] = Re.useState([]), m = Z(
    (D) => {
      localStorage.setItem(i, JSON.stringify(D)), p((H) => H + 1), h(D);
    },
    [i]
  ), f = JSON.stringify(r ?? []), x = G(
    () => JSON.parse(f),
    [f]
  );
  _e(() => {
    const D = localStorage.getItem(i);
    if (D) {
      const H = JSON.parse(D);
      m(Array.isArray(H) ? H : []);
    } else
      m(x);
  }, [i, x, m]);
  const v = Z(
    (D) => {
      m(D), a == null || a(D);
    },
    [m, a]
  ), k = Z(() => {
    v(x), s == null || s();
  }, [v, x, s]), R = G(
    () => e.filter((D) => !(n != null && n.includes(D.key))),
    [e, n]
  );
  return /* @__PURE__ */ b(
    vt.Provider,
    {
      value: {
        gridKey: `data-grid-${l}`,
        chooserAnchor: d,
        setChooserAnchor: w,
        columns: R,
        hiddenColumn: u,
        setHiddenColumn: v,
        resetHiddenColumns: k,
        resetLabel: c,
        enabled: o
      },
      children: t
    }
  );
}, vn = xe(Vo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${ee.primary500};
    }
`, as = xe(kr)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, Ul = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = ke(vt), n = Re.useRef(null), r = Z(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ b("div", { ref: n, children: /* @__PURE__ */ b(e, { onClick: r }) });
}, ss = () => {
  const {
    columns: e,
    hiddenColumn: t,
    setHiddenColumn: n,
    chooserAnchor: r,
    setChooserAnchor: o,
    resetHiddenColumns: i,
    resetLabel: a
  } = ke(vt), s = Z(() => {
    o(null);
  }, [o]), c = Z(() => {
    i(), o(null);
  }, [i, o]), l = Z(
    (p) => () => {
      const d = t.indexOf(p);
      n(
        d === -1 ? [...t, p] : t.filter((w) => w !== p)
      );
    },
    [t, n]
  );
  return /* @__PURE__ */ se(
    qo,
    {
      id: "column-visibility-menu",
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      transformOrigin: { vertical: "top", horizontal: "right" },
      open: r !== null,
      onClose: s,
      children: [
        e.map((p) => /* @__PURE__ */ se(as, { onClick: l(p.key), children: [
          /* @__PURE__ */ b(vn, { checked: !t.includes(p.key) }),
          p.name
        ] }, p.key)),
        a && /* @__PURE__ */ b(Xo, {}),
        a && /* @__PURE__ */ b(kr, { onClick: c, children: a })
      ]
    }
  );
};
var et = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(et || {}), yt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(yt || {});
function cs(e, t, n, r) {
  return (o, i) => {
    const a = r ? r(o) : o[e], s = r ? r(i) : i[e];
    try {
      if (n)
        return n(a, s, o, i);
      if (t === et.NUMBER) {
        const c = Number(a), l = Number(s);
        return isNaN(c) || isNaN(l) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(c) ? 1 : -1) : c - l;
      } else if (t === et.DATE) {
        const c = new Date(a).getTime(), l = new Date(s).getTime();
        return isNaN(c) || isNaN(l) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(c) ? 1 : -1) : c - l;
      }
      return t === et.STRING || !t ? String(a).localeCompare(String(s)) : t === et.BOOLEAN ? +!!a - +!!s : 0;
    } catch (c) {
      return console.error("Error in sorting:", c), 0;
    }
  };
}
const ls = ({
  columns: e,
  rows: t,
  defaultSortColumns: n,
  sortColumns: r,
  enabled: o = !0
}) => {
  const [i, a] = oe(n ?? []), s = r ?? i, c = G(() => !o || s.length === 0 ? t : [...t].sort((p, d) => {
    for (const w of s) {
      const u = e.find((f) => f.key === w.columnKey), m = cs(
        w.columnKey,
        u == null ? void 0 : u.type,
        u == null ? void 0 : u.sortComparator,
        u == null ? void 0 : u.getColumnValue
      )(p, d);
      if (m !== 0)
        return w.direction === "ASC" ? m : -m;
    }
    return 0;
  }), [t, s, o]), l = Z((p) => {
    p.length !== 0 ? a(p) : a((d) => d.length === 1 ? [
      {
        columnKey: d[0].columnKey,
        direction: d[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : d);
  }, []);
  return {
    sortedRows: c,
    sortColumns: i,
    setSortedColumns: l
  };
}, mt = 40, ds = 200, us = "rdg-row-expanded", fs = "rdg-detail-row", Br = "__rdgDetailParent", hs = (e) => ({ id: `rdg-detail:${e.id}`, [Br]: e }), kn = (e) => e[Br], Wt = (e) => kn(e) !== void 0, gs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, hs(r)] : [r]);
}, ms = xe.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;

    svg {
        transition: transform 0.15s ease;
        transform: rotate(${({ $open: e }) => e ? "90deg" : "0deg"});
    }
`, ws = () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ b("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), Ur = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ b(
    ms,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), Gr(t, e.id);
      },
      children: /* @__PURE__ */ b(ws, {})
    }
  );
}, Gr = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, ys = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', jr = (e, t, n, r = []) => Wt(e) || t === mn || t === Kr || r.includes(t) ? !1 : !(n instanceof Element && n.closest(ys)), Gl = (e, t, n) => jr(e, t, n), nr = xe.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, ps = xe.span`
    display: inline-block;
    flex: 0 0 ${mt - 16}px;
`, mn = Be, Kr = "rdg-expander-column", bs = (e) => ({
  key: Kr,
  name: "",
  frozen: !0,
  width: mt,
  minWidth: mt,
  maxWidth: mt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ b(Ur, { row: t, expandable: e })
}), xs = (e, t) => {
  const n = [
    ...e.filter((a) => a.frozen),
    ...e.filter((a) => !a.frozen)
  ], r = n.findIndex((a) => !a.frozen);
  if (r === -1)
    return e;
  const o = n[r], i = n.length - r;
  return e.map((a) => a !== o ? !a.frozen || !a.renderCell ? a : {
    ...a,
    renderCell: (s) => {
      var c;
      return Wt(s.row) ? null : (c = a.renderCell) == null ? void 0 : c.call(a, s);
    }
  } : {
    ...a,
    colSpan: (s) => {
      var c;
      return s.type === "ROW" && Wt(s.row) ? i : (c = a.colSpan) == null ? void 0 : c.call(a, s);
    },
    renderCell: (s) => {
      var l;
      const c = kn(s.row);
      return c ? t(c) : ((l = a.renderCell) == null ? void 0 : l.call(a, s)) ?? null;
    }
  });
}, Cs = (e, t, n) => (r) => {
  const o = kn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, vs = (e, t = []) => Wt(e) ? fs : t.includes(e.id) ? us : "", qr = xe(Qo)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${ee.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${ee.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${ee.gray800};
  }

  fieldset {
    display: none;
  }

}
`, Dn = Re.createContext({
  filters: {},
  setFilters: () => {
  }
}), ks = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Re.useState({});
  return /* @__PURE__ */ b(
    Dn.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, rn = (e) => e.stopPropagation(), Ds = ({ options: e, renderInput: t, ...n }) => {
  const r = G(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ b(
    Jo,
    {
      onChange: (o, i) => {
        var a;
        return (a = n.onChange) == null ? void 0 : a.call(n, i == null ? void 0 : i.value);
      },
      value: r ?? null,
      options: e,
      onClick: rn,
      onKeyDown: rn,
      getOptionLabel: (o) => o.label,
      renderInput: t || ((o) => /* @__PURE__ */ b(
        qr,
        {
          ...o,
          onClick: rn,
          label: n.label,
          error: n.error,
          helperText: n.helperText
        }
      ))
    }
  );
}, Ss = xe(Zo)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Nt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ se(Ss, { children: [
  Wr(t),
  e
] }), Is = (e) => (t) => {
  const { filters: n, setFilters: r } = ke(Dn), o = G(() => n[e.key], [n, e]), i = Z(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ b(on, { ...t, children: /* @__PURE__ */ b(
    Ds,
    {
      options: e.filterOptions ?? [],
      onChange: i,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ b(on, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (a) => i(a.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: Nt,
    onKeyDown: Nt
  }) : /* @__PURE__ */ b(
    qr,
    {
      autoComplete: "off",
      onClick: Nt,
      onKeyDown: Nt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ b(on, { ...t });
}, Ts = {
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
}, Rs = (e, t, n) => {
  let r;
  const o = Ts[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function an(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Es = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ms = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ps = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Os = {
  date: an({
    formats: Es,
    defaultWidth: "full"
  }),
  time: an({
    formats: Ms,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Ps,
    defaultWidth: "full"
  })
}, Ns = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Fs = (e, t, n, r) => Ns[e];
function ut(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const Ls = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Hs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, zs = {
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
}, Ws = {
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
}, As = {
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
}, Ys = {
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
}, $s = (e, t) => {
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
}, _s = {
  ordinalNumber: $s,
  era: ut({
    values: Ls,
    defaultWidth: "wide"
  }),
  quarter: ut({
    values: Hs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ut({
    values: zs,
    defaultWidth: "wide"
  }),
  day: ut({
    values: Ws,
    defaultWidth: "wide"
  }),
  dayPeriod: ut({
    values: As,
    defaultWidth: "wide",
    formattingValues: Ys,
    defaultFormattingWidth: "wide"
  })
};
function ft(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Us(s, (d) => d.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Bs(s, (d) => d.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const p = t.slice(a.length);
    return { value: l, rest: p };
  };
}
function Bs(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Us(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Gs(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const s = t.slice(o.length);
    return { value: a, rest: s };
  };
}
const js = /^(\d+)(th|st|nd|rd)?/i, Ks = /\d+/i, qs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Xs = {
  any: [/^b/i, /^(a|c)/i]
}, Vs = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Zs = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Qs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Js = {
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
}, ec = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, nc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, rc = {
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
}, oc = {
  ordinalNumber: Gs({
    matchPattern: js,
    parsePattern: Ks,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ft({
    matchPatterns: qs,
    defaultMatchWidth: "wide",
    parsePatterns: Xs,
    defaultParseWidth: "any"
  }),
  quarter: ft({
    matchPatterns: Vs,
    defaultMatchWidth: "wide",
    parsePatterns: Zs,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ft({
    matchPatterns: Qs,
    defaultMatchWidth: "wide",
    parsePatterns: Js,
    defaultParseWidth: "any"
  }),
  day: ft({
    matchPatterns: ec,
    defaultMatchWidth: "wide",
    parsePatterns: tc,
    defaultParseWidth: "any"
  }),
  dayPeriod: ft({
    matchPatterns: nc,
    defaultMatchWidth: "any",
    parsePatterns: rc,
    defaultParseWidth: "any"
  })
}, ic = {
  code: "en-US",
  formatDistance: Rs,
  formatLong: Os,
  formatRelative: Fs,
  localize: _s,
  match: oc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let ac = {};
function kt() {
  return ac;
}
const Xr = 6048e5, sc = 864e5, rr = Symbol.for("constructDateFrom");
function Le(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && rr in e ? e[rr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function De(e, t) {
  return Le(t || e, e);
}
function or(e) {
  const t = De(e), n = new Date(
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
function cc(e, ...t) {
  const n = Le.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ir(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function lc(e, t, n) {
  const [r, o] = cc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = ir(r), a = ir(o), s = +i - or(i), c = +a - or(a);
  return Math.round((s - c) / sc);
}
function dc(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function uc(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return lc(n, dc(n)) + 1;
}
function pt(e, t) {
  var s, c, l, p;
  const n = kt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((p = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : p.weekStartsOn) ?? 0, o = De(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function At(e, t) {
  return pt(e, { ...t, weekStartsOn: 1 });
}
function Vr(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Le(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = At(o), a = Le(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = At(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function fc(e, t) {
  const n = Vr(e, t), r = Le(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), At(r);
}
function hc(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +At(n) - +fc(n);
  return Math.round(r / Xr) + 1;
}
function Zr(e, t) {
  var p, d, w, u;
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = kt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((u = (w = o.locale) == null ? void 0 : w.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Le((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = pt(a, t), c = Le((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const l = pt(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function gc(e, t) {
  var s, c, l, p;
  const n = kt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, o = Zr(e, t), i = Le((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), pt(i, t);
}
function mc(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +pt(n, t) - +gc(n, t);
  return Math.round(r / Xr) + 1;
}
function q(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Fe = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return q(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : q(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return q(e.getDate(), t.length);
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
    return q(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return q(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return q(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return q(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return q(o, t.length);
  }
}, Qe = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ar = {
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
    return Fe.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Zr(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return q(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : q(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Vr(e);
    return q(n, t.length);
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
    return q(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return q(r, 2);
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
        return q(r, 2);
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
        return Fe.M(e, t);
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
        return q(r + 1, 2);
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
    const o = mc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : q(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = hc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : q(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Fe.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = uc(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : q(r, t.length);
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
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return q(i, 2);
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
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
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return q(i, t.length);
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
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
        return q(o, t.length);
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
    switch (r === 12 ? o = Qe.noon : r === 0 ? o = Qe.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Qe.evening : r >= 12 ? o = Qe.afternoon : r >= 4 ? o = Qe.morning : o = Qe.night, t) {
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
    return Fe.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Fe.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Fe.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Fe.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Fe.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return cr(r);
      case "XXXX":
      case "XX":
        return $e(r);
      case "XXXXX":
      case "XXX":
      default:
        return $e(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return cr(r);
      case "xxxx":
      case "xx":
        return $e(r);
      case "xxxxx":
      case "xxx":
      default:
        return $e(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + sr(r, ":");
      case "OOOO":
      default:
        return "GMT" + $e(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + sr(r, ":");
      case "zzzz":
      default:
        return "GMT" + $e(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return q(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return q(+e, t.length);
  }
};
function sr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + q(i, 2);
}
function cr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + q(Math.abs(e) / 60, 2) : $e(e, t);
}
function $e(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = q(Math.trunc(r / 60), 2), i = q(r % 60, 2);
  return n + o + t + i;
}
const lr = (e, t) => {
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
}, Qr = (e, t) => {
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
}, wc = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return lr(e, t);
  let i;
  switch (r) {
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
  return i.replace("{{date}}", lr(r, t)).replace("{{time}}", Qr(o, t));
}, yc = {
  p: Qr,
  P: wc
}, pc = /^D+$/, bc = /^Y+$/, xc = ["D", "DD", "YY", "YYYY"];
function Cc(e) {
  return pc.test(e);
}
function vc(e) {
  return bc.test(e);
}
function kc(e, t, n) {
  const r = Dc(e, t, n);
  if (console.warn(r), xc.includes(e)) throw new RangeError(r);
}
function Dc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Jr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function eo(e) {
  return !(!Jr(e) && typeof e != "number" || isNaN(+De(e)));
}
const Sc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ic = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Tc = /^'([^]*?)'?$/, Rc = /''/g, Ec = /[a-zA-Z]/;
function Mc(e, t, n) {
  var p, d, w, u, h, m, f, x;
  const r = kt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ic, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((u = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((x = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : x.weekStartsOn) ?? 0, s = De(e, n == null ? void 0 : n.in);
  if (!eo(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Ic).map((v) => {
    const k = v[0];
    if (k === "p" || k === "P") {
      const R = yc[k];
      return R(v, o.formatLong);
    }
    return v;
  }).join("").match(Sc).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const k = v[0];
    if (k === "'")
      return { isToken: !1, value: Pc(v) };
    if (ar[k])
      return { isToken: !0, value: v };
    if (k.match(Ec))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + k + "`"
      );
    return { isToken: !1, value: v };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((v) => {
    if (!v.isToken) return v.value;
    const k = v.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && vc(k) || !(n != null && n.useAdditionalDayOfYearTokens) && Cc(k)) && kc(k, t, String(e));
    const R = ar[k[0]];
    return R(s, k, o.localize, l);
  }).join("");
}
function Pc(e) {
  const t = e.match(Tc);
  return t ? t[1].replace(Rc, "'") : e;
}
function Oc() {
  return Object.assign({}, kt());
}
function dr(e, t, n) {
  const r = Oc(), o = Lc(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Nc(o, t) : Fc(o, t);
}
function Nc(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Fc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function Lc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Hc(e, t) {
  const n = $c(t);
  return "formatToParts" in n ? Wc(n, e) : Ac(n, e);
}
const zc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Wc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = zc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function Ac(e, t) {
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
const sn = {}, ur = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Yc = ur === "06/25/2014, 00:00:00" || ur === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function $c(e) {
  return sn[e] || (sn[e] = Yc ? new Intl.DateTimeFormat("en-US", {
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
  })), sn[e];
}
function to(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const fr = 36e5, _c = 6e4, cn = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Sn(e, t, n) {
  if (!e)
    return 0;
  let r = cn.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, i;
  if (r = cn.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), hr(o) ? -(o * fr) : NaN;
  if (r = cn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return hr(o, a) ? (i = Math.abs(o) * fr + a * _c, r[1] === "+" ? -i : i) : NaN;
  }
  if (Gc(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : Bc(t), s = wn(a, e);
    return -(n ? s : Uc(t, s, e));
  }
  return NaN;
}
function Bc(e) {
  return to(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function wn(e, t) {
  const n = Hc(e, t), r = to(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function Uc(e, t, n) {
  let o = e.getTime() - t;
  const i = wn(new Date(o), n);
  if (t === i)
    return t;
  o -= i - t;
  const a = wn(new Date(o), n);
  return i === a ? i : Math.max(i, a);
}
function hr(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const gr = {};
function Gc(e) {
  if (gr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), gr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const jc = 60 * 1e3, Kc = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = ln(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return mr(r);
      case "XXXX":
      case "XX":
        return Je(r);
      case "XXXXX":
      case "XXX":
      default:
        return Je(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = ln(n.timeZone, e);
    switch (t) {
      case "x":
        return mr(r);
      case "xxxx":
      case "xx":
        return Je(r);
      case "xxxxx":
      case "xxx":
      default:
        return Je(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = ln(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + qc(r, ":");
      case "OOOO":
      default:
        return "GMT" + Je(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return dr("short", e, n);
      case "zzzz":
      default:
        return dr("long", e, n);
    }
  }
};
function ln(e, t) {
  const n = e ? Sn(e, t, !0) / jc : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function Yt(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Je(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Yt(Math.floor(r / 60), 2), i = Yt(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function mr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Yt(Math.abs(e) / 60, 2) : Je(e, t);
}
function qc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Yt(i, 2);
}
function wr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Xc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, yr = 6e4, Vc = 2, de = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
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
  timeZone: Xc
};
function no(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? Vc : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = Zc(e), { year: o, restDateString: i } = Qc(r.date, n), a = Jc(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let c = 0, l;
    if (r.time && (c = el(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (l = Sn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = wr(new Date(s + c)), l = wr(new Date(s + c + l));
    return new Date(s + c + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Zc(e) {
  const t = {};
  let n = de.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = de.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = de.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Qc(e, t) {
  if (e) {
    const n = de.YYY[t], r = de.YYYYY[t];
    let o = de.YYYY.exec(e) || r.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = de.YY.exec(e) || n.exec(e), o) {
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
function Jc(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let i = de.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, br(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = de.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return rl(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = de.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return br(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = de.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, xr(o) ? pr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = de.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return xr(o, a) ? pr(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function el(e) {
  let t, n, r = de.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), un(t) ? t % 24 * dn : NaN;
  if (r = de.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), un(t, n) ? t % 24 * dn + n * yr : NaN;
  if (r = de.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return un(t, n, o) ? t % 24 * dn + n * yr + o * 1e3 : NaN;
  }
  return null;
}
function pr(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, i = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
const tl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], nl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ro(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function br(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = ro(e);
    if (r && n > nl[t] || !r && n > tl[t])
      return !1;
  }
  return !0;
}
function rl(e, t) {
  if (t < 1)
    return !1;
  const n = ro(e);
  return !(n && t > 366 || !n && t > 365);
}
function xr(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function un(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const ol = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function il(e, t, n = {}) {
  t = String(t);
  const r = t.match(ol);
  if (r) {
    const o = no(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", l = i.replace(a, "'" + Kc[a[0]](o, a, n) + "'");
      return c ? l.substring(0, s - 1) + l.substring(s + 1) : l;
    }, t);
  }
  return Mc(e, t, n);
}
function al(e, t, n) {
  e = no(e, n);
  const r = Sn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function sl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, il(al(e, t, { timeZone: r.timeZone }), n, r);
}
var oo = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(oo || {});
const cl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !Jr(e) && typeof e == "string" ? new Date(e) : e;
  return eo(r) ? sl(e, n, t) : "--";
}, Cr = (e) => e.trim().toLowerCase(), fn = "rdg-cell-frozen-right", hn = (...e) => e.filter(Boolean).join(" "), ll = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: c, hiddenColumn: l } = ke(vt), p = Z((d) => {
    const w = () => {
      if (d.renderCell)
        return d.renderCell;
      if (d.type === et.DATE)
        return ({ row: m }) => {
          var f, x;
          return cl(
            m[d.key],
            ((f = d.dateOptions) == null ? void 0 : f.formatDate) ?? oo.DATE_WITH_TIME,
            (x = d.dateOptions) == null ? void 0 : x.timeZone
          );
        };
    }, u = () => d.renderHeaderCell ? d.renderHeaderCell : Is(d), h = {
      ...d,
      renderCell: w(),
      renderHeaderCell: u()
    };
    return d.frozenRight && (h.frozen = !1, h.cellClass = typeof d.cellClass == "function" ? (m) => hn(
      fn,
      d.cellClass(m)
    ) : hn(fn, d.cellClass), h.headerCellClass = hn(fn, d.headerCellClass)), h;
  }, []);
  return G(() => {
    const d = [];
    if (t && !n && d.push(bs(t)), n) {
      const w = (r ?? []).map((f) => f.id), u = w.length > 0 && w.every((f) => o == null ? void 0 : o.includes(f)), h = (f) => {
        const x = (o ?? []).filter((v) => !w.includes(v));
        return f ? [...x, ...w] : x;
      }, m = t ? 50 + mt : 50;
      d.push({
        ...dt,
        width: m,
        minWidth: m,
        maxWidth: m,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ se(nr, { children: [
          t && /* @__PURE__ */ b(ps, { "aria-hidden": !0 }),
          a ? a({
            checked: u,
            "aria-label": s,
            onChange: (f) => i == null ? void 0 : i(h(f))
          }) : /* @__PURE__ */ b(
            vn,
            {
              checked: u,
              slotProps: { input: { "aria-label": s } },
              onChange: (f, x) => i == null ? void 0 : i(h(x))
            }
          )
        ] }),
        renderCell: t ? (f) => {
          var x;
          return /* @__PURE__ */ se(nr, { children: [
            /* @__PURE__ */ b(Ur, { row: f.row, expandable: t }),
            (x = dt.renderCell) == null ? void 0 : x.call(dt, f)
          ] });
        } : dt.renderCell
      });
    }
    return d.push(...e.map((w) => p(w))), c && l ? d.filter((w) => !l.includes(w.key)) : d;
  }, [
    e,
    t,
    p,
    c,
    l,
    n,
    r,
    o,
    i,
    a,
    s
  ]);
};
var dl = {
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
function ul(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return dl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function gn(e) {
  var t = ul(e);
  return "".concat(t.value).concat(t.unit);
}
var fl = function(e, t, n) {
  var r = "react-spinners-".concat(e, "-").concat(n);
  if (typeof window > "u" || !window.document)
    return r;
  var o = document.createElement("style");
  document.head.appendChild(o);
  var i = o.sheet, a = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
  return i && i.insertRule(a, 0), r;
}, $t = function() {
  return $t = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, $t.apply(this, arguments);
}, hl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, gl = fl("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function ml(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, l = e.size, p = l === void 0 ? 15 : l, d = e.margin, w = d === void 0 ? 2 : d, u = hl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), h = $t({ display: "inherit" }, c), m = function(f) {
    return {
      backgroundColor: o,
      width: gn(p),
      height: gn(p),
      margin: gn(w),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(gl, " ").concat(0.75 / a, "s ").concat(f * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Ot.createElement(
    "span",
    $t({ style: h }, u),
    Ot.createElement("span", { style: m(1) }),
    Ot.createElement("span", { style: m(2) }),
    Ot.createElement("span", { style: m(3) })
  ) : null;
}
const wl = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === yt.TEXT && typeof n == "string" && typeof r == "string" ? Cr(n).includes(Cr(r)) : t === yt.AUTOCOMPLETE ? n === r : !1, yl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = ke(Dn);
  return G(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((c) => c.key === i);
      return s ? wl({
        comparator: s.filterComparator,
        filterType: s.filterType ?? yt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, pl = xe.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, bl = xe.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, xl = Re.memo(
  ({
    currentPage: e,
    setCurrentPage: t,
    setPageSize: n,
    pageSize: r,
    totalCount: o,
    labels: i,
    totalLabel: a
  }) => {
    const s = Z(
      (l, p) => {
        t(p);
      },
      [t]
    ), c = Z(
      (l) => {
        n(parseInt(l.target.value, 10)), t(0);
      },
      [n, t]
    );
    return /* @__PURE__ */ se(pl, { children: [
      a ? /* @__PURE__ */ b(bl, { children: a(o) }) : null,
      /* @__PURE__ */ b(
        ei,
        {
          labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ b("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
          labelDisplayedRows: ({ from: l, to: p, count: d }) => `${l}-${p} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${d}`,
          component: "div",
          count: o,
          page: e,
          onPageChange: s,
          rowsPerPage: r,
          onRowsPerPageChange: c
        }
      )
    ] });
  }
);
var Cl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(Cl || {});
const vl = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = oe(0), [c, l] = oe(e), p = n !== void 0, d = o !== void 0, w = p ? n : a, u = d ? o : c, h = Z(
    (v) => {
      p || s(v), r == null || r(v);
    },
    [p, r]
  ), m = Z(
    (v) => {
      d || l(v), i == null || i(v);
    },
    [d, i]
  ), f = Z(() => {
    h(0), m(e);
  }, [h, m, e]), x = ve(u);
  return _e(() => {
    x.current !== u && (x.current = u, h(0));
  }, [u]), {
    currentPage: w,
    pageSize: u,
    defaultPageSize: e,
    setCurrentPage: h,
    setPageSize: m,
    resetPagination: f
  };
}, vr = 50, kl = xe.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, Dl = xe.div`
    background-color: ${ee.primary500};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, Sl = Re.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = Z(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ b(
      vn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), Il = (e) => /* @__PURE__ */ b(Sl, { ...e }), Tl = "Select all rows", Rl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  sortRowsLocally: s,
  selectedRows: c,
  onSelectedRowsChange: l,
  selectAllLabel: p = Tl,
  noDataMessage: d,
  filters: w,
  setFilters: u,
  pagination: h,
  renderers: m,
  expandable: f,
  rowGestures: x,
  rowHeight: v,
  rowClass: k,
  onCellClick: R,
  onColumnResize: D,
  ...H
}) => {
  var ie, ge;
  const { gridKey: S } = ke(vt), { pageSize: I, currentPage: P, setCurrentPage: O, setPageSize: W } = vl(
    h == null ? void 0 : h.defaultPageSize,
    h == null ? void 0 : h.control
  ), $ = (m == null ? void 0 : m.renderCheckbox) ?? Il, F = ll({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: f,
    selectionEnabled: !!l,
    selectableRows: n,
    selectedRows: c,
    onSelectedRowsChange: l,
    renderCheckbox: $,
    selectAllLabel: p
  }), ne = G(() => F.map((Y) => Y.key).join("|"), [F]), _ = G(
    () => F.some((Y) => Y.filterEnabled),
    [F]
  ), re = G(
    () => (h == null ? void 0 : h.enabled) && !h.remotePagination,
    [h]
  ), Te = G(() => !u, [u]), ye = yl({
    columns: F,
    rows: n,
    enabled: Te
  }), Ce = G(() => !i, [i]), ze = s ?? Ce, {
    sortedRows: Se,
    sortColumns: Me,
    setSortedColumns: Pe
  } = ls({
    columns: F,
    rows: ye,
    defaultSortColumns: a,
    sortColumns: Ce ? void 0 : o,
    enabled: ze
  }), T = G(() => {
    if (!re)
      return P;
    const Y = Math.max(0, Math.ceil(ye.length / I) - 1);
    return Math.min(P, Y);
  }, [re, P, I, ye.length]);
  _e(() => {
    T !== P && O(T);
  }, [T, P, O]);
  const M = G(() => re ? Se.slice(T * I, (T + 1) * I) : Se, [Se, re, T, I]), A = G(
    () => f ? gs(M, f.expandedIds) : M,
    [f, M]
  ), C = G(
    () => f ? xs(F, f.renderDetail) : F,
    [f, F]
  ), z = G(() => {
    const Y = C.filter((K) => K.key === mn), V = C.filter((K) => K.key !== mn);
    return [
      ...Y,
      ...V.filter((K) => K.frozen),
      ...V.filter((K) => !K.frozen)
    ];
  }, [C]), U = Z(
    (Y, V) => {
      const K = z[Y];
      K && (D == null || D(K.key, V));
    },
    [z, D]
  ), j = Z(
    (Y, V) => {
      const K = () => {
        const ce = vs(Y, f == null ? void 0 : f.expandedIds);
        return ce || (V === 0 ? "first-row" : V === n.length - 1 ? "last-row" : "");
      };
      return [k == null ? void 0 : k(Y, V), K()].filter(Boolean).join(" ");
    },
    [n, f == null ? void 0 : f.expandedIds, k]
  ), te = Z(
    (Y) => {
      x != null && x.onClick ? x.onClick(Y) : f && Gr(f, Y.id);
    },
    [x, f]
  ), le = Z(
    (Y, V) => {
      if (R == null || R(Y, V), V.isGridDefaultPrevented() || !f && !(x != null && x.onClick))
        return;
      const K = window.getSelection();
      K && !K.isCollapsed && V.target instanceof Node && K.containsNode(V.target, !0) || jr(
        Y.row,
        Y.column.key,
        V.target,
        x == null ? void 0 : x.excludedColumns
      ) && te(Y.row);
    },
    [R, f, x, te]
  ), ue = !(h != null && h.remotePagination);
  return _e(() => {
    if (!ue)
      return;
    const Y = c == null ? void 0 : c.filter(
      (V) => n.some((K) => K.id === V)
    );
    (Y == null ? void 0 : Y.length) != (c == null ? void 0 : c.length) && (l == null || l(Y ?? []));
  }, [n, c, ue]), /* @__PURE__ */ se(rs, { $pagination: !!(h != null && h.enabled), children: [
    /* @__PURE__ */ b("div", { children: /* @__PURE__ */ b(
      _r,
      {
        selectedRows: c ? new Set(c) : void 0,
        onSelectedRowsChange: (Y) => {
          l == null || l(Array.from(Y));
        },
        rowKeyGetter: (Y) => Y.id,
        rows: A,
        onSortColumnsChange: Ce ? Pe : i,
        sortColumns: Ce ? Me : o,
        columns: C,
        rowClass: j,
        headerRowHeight: _ ? 70 : void 0,
        onCellClick: le,
        onColumnResize: D ? U : void 0,
        enableVirtualization: C.some((Y) => Y.frozenRight) ? !1 : void 0,
        ...H,
        rowHeight: f ? Cs(
          v,
          vr,
          f.detailHeight ?? ds
        ) : v ?? vr,
        renderers: {
          renderCheckbox: $,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...d != null && !t ? {
            noRowsFallback: /* @__PURE__ */ b("div", { className: "rdg-no-data", children: d })
          } : {},
          ...m
        },
        style: { ...ns, ...e ?? {} }
      },
      `${S}:${ne}`
    ) }),
    h != null && h.enabled ? /* @__PURE__ */ b(
      xl,
      {
        ...(h == null ? void 0 : h.remotePagination) ?? {
          currentPage: T,
          setCurrentPage: O,
          pageSize: I,
          setPageSize: W,
          totalCount: ye.length
        },
        labels: h.labels ?? ((ie = h.remotePagination) == null ? void 0 : ie.labels),
        totalLabel: h.totalLabel ?? ((ge = h.remotePagination) == null ? void 0 : ge.totalLabel)
      }
    ) : null,
    t ? /* @__PURE__ */ se(kl, { children: [
      /* @__PURE__ */ b(Dl, {}),
      /* @__PURE__ */ b(ml, { color: ee.primary500 })
    ] }) : null,
    /* @__PURE__ */ b(ss, {})
  ] });
}, jl = ({
  filters: e,
  setFilters: t,
  columns: n,
  visibilityColumnFeature: {
    enabled: r,
    visibilityFeatureDisabledFor: o,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: c,
    resetLabel: l
  } = {},
  ...p
}) => /* @__PURE__ */ b(ks, { filters: e, setFilters: t, children: /* @__PURE__ */ b(
  is,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: c,
    resetLabel: l,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ b(Rl, { ...p, columns: n, filters: e, setFilters: t })
  }
) });
export {
  et as ColumnType,
  oo as DATE_FORMAT,
  Cl as DEFAULT_PAGE_SIZES,
  jl as DataGrid,
  vn as DataGridCheckbox,
  Ii as DataGridDefaultRenderersProvider,
  Kr as EXPANDER_COLUMN_KEY,
  Ur as ExpanderToggle,
  yt as FilterType,
  $l as Row,
  mn as SELECTION_COLUMN_KEY,
  Be as SELECT_COLUMN_KEY,
  xn as SelectCellFormatter,
  dt as SelectColumn,
  Di as ToggleGroup,
  _l as TreeDataGrid,
  Ul as VisibilityColumnChooser,
  ss as VisibilityMenu,
  jr as clickBelongsToRow,
  Gl as clickExpandsRow,
  cl as convertDate,
  ns as defaultTheme,
  Cs as detailAwareRowHeight,
  vs as detailRowClass,
  Cr as getStringToCompare,
  Wt as isDetailRow,
  pi as renderCheckbox,
  Wr as renderHeaderCell,
  Ea as renderSortIcon,
  Ma as renderSortPriority,
  ki as renderToggleGroup,
  Si as renderValue,
  ee as taktikTheme,
  Bl as textEditor,
  Mi as useHeaderRowSelection,
  vl as usePagination,
  Fr as useRowSelection,
  xs as withDetailRendering,
  gs as withDetailRows
};
