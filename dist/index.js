import { jsx as v, jsxs as ie, Fragment as bt } from "react/jsx-runtime";
import * as zt from "react";
import Me, { memo as $e, createContext as St, use as vt, useMemo as X, useCallback as q, useState as ae, useRef as Se, useLayoutEffect as nt, useImperativeHandle as yi, useSyncExternalStore as Ar, useEffectEvent as pi, useEffect as Bt, useContext as rt } from "react";
import { flushSync as Tn } from "react-dom";
import ye from "@emotion/styled";
import bi from "@mui/material/Menu";
import Fr from "@mui/material/MenuItem";
import vi from "@mui/material/Divider";
import Ci from "@mui/material/Checkbox";
import xi from "@mui/material/Box";
import ki from "@mui/material/TextField";
import Si from "@mui/material/Autocomplete";
import Di from "@mui/material/TablePagination";
function qt(e) {
  return e === !0 || e === "start";
}
function ze(e, t, n, r) {
  if (typeof e.colSpan != "function") return;
  const o = e.colSpan(r);
  if (!Number.isInteger(o) || o <= 1) return;
  const i = e.idx + o - 1;
  if (!(qt(e.frozen) && i > t) && !(e.frozen === !1 && n !== -1 && i >= n))
    return o;
}
function Hr(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Ti({ rows: e, topSummaryRows: t, bottomSummaryRows: n, rowIdx: r, mainHeaderRowIdx: o, lastStartFrozenColumnIndex: i, firstEndFrozenColumnIndex: a, column: s }) {
  const c = (t == null ? void 0 : t.length) ?? 0;
  if (r === o) return ze(s, i, a, { type: "HEADER" });
  if (t && r > o && r <= c + o) return ze(s, i, a, {
    type: "SUMMARY",
    row: t[r + c]
  });
  if (r >= 0 && r < e.length) {
    const l = e[r];
    return ze(s, i, a, {
      type: "ROW",
      row: l
    });
  }
  if (n) return ze(s, i, a, {
    type: "SUMMARY",
    row: n[r - e.length]
  });
}
function Pi({ moveUp: e, moveNext: t, cellNavigationMode: n, columns: r, colSpanColumns: o, rows: i, topSummaryRows: a, bottomSummaryRows: s, minRowIdx: c, mainHeaderRowIdx: l, maxRowIdx: g, activePosition: { idx: u, rowIdx: C }, nextPosition: p, nextPositionIsCellInActiveBounds: d, lastStartFrozenColumnIndex: b, firstEndFrozenColumnIndex: m }) {
  let { idx: f, rowIdx: h } = p;
  const D = r.length, T = (k) => {
    for (const A of o) {
      const W = A.idx;
      if (W > f) break;
      const N = Ti({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: h,
        mainHeaderRowIdx: l,
        lastStartFrozenColumnIndex: b,
        firstEndFrozenColumnIndex: m,
        column: A
      });
      if (N && f > W && f < N + W) {
        f = W + (k ? N : 0);
        break;
      }
    }
  }, M = (k) => k.level + l, S = () => {
    if (t) {
      let { parent: k } = r[f];
      for (; k !== void 0; ) {
        const A = M(k);
        if (h === A) {
          f = k.idx + k.colSpan;
          break;
        }
        ({ parent: k } = k);
      }
    } else if (e) {
      let { parent: k } = r[f], A = !1;
      for (; k !== void 0; ) {
        const W = M(k);
        if (h >= W) {
          f = k.idx, h = W, A = !0;
          break;
        }
        ({ parent: k } = k);
      }
      A || (f = u, h = C);
    }
  };
  if (d && (T(t), h < l && S()), n === "CHANGE_ROW" && (f === D ? h !== g && (f = 0, h += 1) : f === -1 && (h !== c && (h -= 1, f = D - 1), T(!1))), h < l && f > -1 && f < D) {
    let { parent: k } = r[f];
    const A = h;
    for (h = l; k !== void 0; ) {
      const W = M(k);
      W >= A && (h = W, f = k.idx), { parent: k } = k;
    }
  }
  return {
    idx: f,
    rowIdx: h
  };
}
function Ei({ maxColIdx: e, minRowIdx: t, maxRowIdx: n, activePosition: { rowIdx: r, idx: o }, shiftKey: i }) {
  return i ? o === 0 && r === t : o === e && r === n;
}
function Ii(e) {
  e.stopPropagation();
}
function _t(e, t = "instant") {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest",
    behavior: t
  });
}
function Ri(e) {
  return e.querySelector('& > [role="row"][tabindex="0"]');
}
function Lr(e) {
  return e.querySelector('& > [role="row"] > [tabindex="0"]');
}
function zr(e, t) {
  e !== null && (t && _t(e), e.focus({ preventScroll: !0 }));
}
function Mi(e) {
  zr(Ri(e), !0);
}
function Wr(e, t = !0) {
  zr(Lr(e), t);
}
function Pn(e) {
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
const Oi = /* @__PURE__ */ new Set([
  "Unidentified",
  "Alt",
  "AltGraph",
  "CapsLock",
  "Control",
  "Fn",
  "FnLock",
  "Meta",
  "NumLock",
  "ScrollLock",
  "Shift",
  "Tab",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  "Insert",
  "ContextMenu",
  "Escape",
  "Pause",
  "Play",
  "PrintScreen",
  "F1",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12"
]);
function En(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
const Ni = 86;
function Ai(e, t) {
  return En(e) && (e.keyCode !== Ni || t) ? !1 : !Oi.has(e.key);
}
function Fi({ key: e, target: t }) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
function In(e) {
  const t = e === "rtl";
  return {
    leftKey: t ? "ArrowRight" : "ArrowLeft",
    rightKey: t ? "ArrowLeft" : "ArrowRight"
  };
}
const Hi = "rdg-7-0-0-beta-60-fa71d63e";
function Li(e) {
  return e.map(({ key: t, idx: n, minWidth: r, maxWidth: o }) => /* @__PURE__ */ v("div", {
    className: Hi,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
const Yr = "rdg-cell rdg-7-0-0-beta-60-85c48527", $r = "rdg-7-0-0-beta-60-203d9925", zi = `rdg-cell-frozen-start ${$r}`, Wi = `rdg-cell-frozen-end ${$r}`, Yi = "rdg-cell-drag-handle rdg-7-0-0-beta-60-bfba19bc";
function Br(e, t, n) {
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
function ot(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: qt(e.frozen) ? `var(--rdg-frozen-start-${e.idx})` : void 0,
    insetInlineEnd: e.frozen === "end" ? `var(--rdg-frozen-end-${e.idx + t - 1})` : void 0
  };
}
function We(...e) {
  let t = "";
  for (const n of e) typeof n == "string" && (t += ` ${n}`);
  return t.slice(1);
}
function tt(e, ...t) {
  return We(Yr, qt(e.frozen) && zi, e.frozen === "end" && Wi, ...t);
}
const { min: Ct, max: Ut, floor: cr, abs: $i } = Math;
function wt(e) {
  if (typeof e != "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Rn(e, { minWidth: t, maxWidth: n }) {
  return e = Ut(e, t), typeof n == "number" && n >= t ? Ct(e, n) : e;
}
function _r(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Wt = {
  idx: -1,
  rowIdx: Number.NEGATIVE_INFINITY,
  mode: "ACTIVE"
};
function Bi({ gridRef: e, columns: t, rows: n, isTreeGrid: r, maxColIdx: o, minRowIdx: i, maxRowIdx: a, setDraggedOverRowIdx: s }) {
  var D;
  const [c, l] = ae(Wt), [g, u] = ae(null), C = Se(null);
  function p({ idx: T, rowIdx: M }) {
    const S = r && T === -1, k = T >= 0 && T <= o, A = M >= i && M <= a, W = M >= 0 && M < n.length, N = S && A, U = S && W, Y = k && A, B = k && W;
    return {
      isPositionInActiveBounds: N || Y,
      isPositionInViewport: U || B,
      isRowInActiveBounds: N,
      isRowInViewport: U,
      isCellInActiveBounds: Y,
      isCellInViewport: B
    };
  }
  function d(T) {
    return {
      resolvedActivePosition: T,
      validatedPosition: p(T)
    };
  }
  function b() {
    if (!h.isCellInActiveBounds) throw new Error("No column for active position");
    return t[f.idx];
  }
  function m() {
    if (!h.isPositionInViewport) throw new Error("No row for active position");
    return n[f.rowIdx];
  }
  let { resolvedActivePosition: f, validatedPosition: h } = d(c);
  if (!h.isPositionInActiveBounds && f !== Wt)
    l(Wt), s(void 0), { resolvedActivePosition: f, validatedPosition: h } = d(Wt);
  else if (f.mode === "EDIT" && (((D = b().editorOptions) == null ? void 0 : D.closeOnExternalRowChange) ?? !0) && m() !== f.originalRow) {
    const T = {
      idx: f.idx,
      rowIdx: f.rowIdx,
      mode: "ACTIVE"
    };
    l(T), u(null), { resolvedActivePosition: f, validatedPosition: h } = d(T);
  }
  return nt(() => {
    g !== null && g !== C.current && (C.current = g, g.idx === -1 ? Mi(e.current) : Wr(e.current));
  }, [g, e]), {
    activePosition: f,
    setActivePosition: l,
    setPositionToFocus: u,
    activePositionIsInActiveBounds: h.isPositionInActiveBounds,
    activePositionIsInViewport: h.isPositionInViewport,
    activePositionIsRow: h.isRowInActiveBounds,
    activePositionIsCellInViewport: h.isCellInViewport,
    validatePosition: p,
    getActiveColumn: b,
    getActiveRow: m
  };
}
const _i = "rdg-checkbox-input rdg-7-0-0-beta-60-3b807ead";
function Ui({ onChange: e, indeterminate: t, ...n }) {
  function r(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ v("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: _i,
    onChange: r,
    ...n
  });
}
const Vi = "rdg-group-cell-content rdg-7-0-0-beta-60-07919382", Gi = "rdg-caret rdg-7-0-0-beta-60-02a50147";
function ji(e) {
  return /* @__PURE__ */ v(Xi, { ...e });
}
function Xi({ groupKey: e, isExpanded: t, tabIndex: n, toggleGroup: r }) {
  function o({ key: i }) {
    i === "Enter" && r();
  }
  return /* @__PURE__ */ ie("span", {
    className: Vi,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ v("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Gi,
      "aria-hidden": !0,
      children: /* @__PURE__ */ v("path", { d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7" })
    })]
  });
}
function qi(e) {
  var t;
  return (t = e.row) == null ? void 0 : t[e.column.key];
}
const Mn = St(void 0);
Mn.displayName = "DataGridDefaultRenderersContext";
function Dt() {
  return vt(Mn);
}
function On({ value: e, tabIndex: t, indeterminate: n, disabled: r, onChange: o, "aria-label": i, "aria-labelledby": a }) {
  const s = Dt().renderCheckbox;
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
const Ur = "rdg-select-column";
function Ki({ tabIndex: e }) {
  const { isIndeterminate: t, isRowSelected: n, onRowSelectionChange: r } = la();
  return /* @__PURE__ */ v(On, {
    "aria-label": "Select All",
    tabIndex: e,
    indeterminate: t,
    value: n,
    onChange: (o) => {
      r({ checked: t ? !1 : o });
    }
  });
}
function Zi({ row: e, tabIndex: t }) {
  const { isRowSelectionDisabled: n, isRowSelected: r, onRowSelectionChange: o } = qr();
  return /* @__PURE__ */ v(On, {
    "aria-label": "Select",
    tabIndex: t,
    disabled: n,
    value: r,
    onChange: (i, a) => {
      o({
        row: e,
        checked: i,
        isShiftClick: a
      });
    }
  });
}
function Qi({ row: e, tabIndex: t }) {
  const { isRowSelected: n, onRowSelectionChange: r } = qr();
  return /* @__PURE__ */ v(On, {
    "aria-label": "Select Group",
    tabIndex: t,
    value: n,
    onChange: (o) => {
      r({
        row: e,
        checked: o,
        isShiftClick: !1
      });
    }
  });
}
const ht = {
  key: Ur,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ v(Ki, { ...e });
  },
  renderCell(e) {
    return /* @__PURE__ */ v(Zi, { ...e });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ v(Qi, { ...e });
  }
}, Ji = "rdg-7-0-0-beta-60-56a248e4", ea = "rdg-header-sort-name rdg-7-0-0-beta-60-7fad8c83";
function Vr({ column: e, sortDirection: t, priority: n }) {
  return e.sortable ? /* @__PURE__ */ v(ta, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function ta({ sortDirection: e, priority: t, children: n }) {
  const r = Dt().renderSortStatus;
  return /* @__PURE__ */ ie("span", {
    className: Ji,
    children: [/* @__PURE__ */ v("span", {
      className: ea,
      children: n
    }), /* @__PURE__ */ v("span", { children: r({
      sortDirection: e,
      priority: t
    }) })]
  });
}
const na = "auto", ra = 50;
function oa({ rawColumns: e, defaultColumnOptions: t, getColumnWidth: n, viewportWidth: r, scrollLeft: o, enableVirtualization: i }) {
  const a = (t == null ? void 0 : t.width) ?? na, s = (t == null ? void 0 : t.minWidth) ?? ra, c = (t == null ? void 0 : t.maxWidth) ?? void 0, l = (t == null ? void 0 : t.renderCell) ?? qi, g = (t == null ? void 0 : t.renderHeaderCell) ?? Vr, u = (t == null ? void 0 : t.sortable) ?? !1, C = (t == null ? void 0 : t.resizable) ?? !1, p = (t == null ? void 0 : t.draggable) ?? !1, { columns: d, colSpanColumns: b, lastStartFrozenColumnIndex: m, firstEndFrozenColumnIndex: f, headerRowsCount: h } = X(() => {
    let N = -1, U = -1, Y = 1;
    const B = [];
    ee(e, 1);
    function ee(E, $, oe) {
      for (const J of E) {
        if ("children" in J) {
          const ce = {
            name: J.name,
            parent: oe,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: J.headerCellClass
          };
          ee(J.children, $ + 1, ce);
          continue;
        }
        const se = J.frozen ?? !1;
        B.push({
          ...J,
          parent: oe,
          idx: 0,
          level: 0,
          frozen: se,
          width: J.width ?? a,
          minWidth: J.minWidth ?? s,
          maxWidth: J.maxWidth ?? c,
          sortable: J.sortable ?? u,
          resizable: J.resizable ?? C,
          draggable: J.draggable ?? p,
          renderCell: J.renderCell ?? l,
          renderHeaderCell: J.renderHeaderCell ?? g
        }), qt(se) && N++, $ > Y && (Y = $);
      }
    }
    B.sort((E, $) => E.key === "rdg-select-column" ? -1 : $.key === "rdg-select-column" ? 1 : (E.frozen === "end" ? 2 : E.frozen === !1 ? 1 : 0) - ($.frozen === "end" ? 2 : $.frozen === !1 ? 1 : 0));
    const L = [];
    return B.forEach((E, $) => {
      E.idx = $, Gr(E, $, 0), E.colSpan != null && L.push(E), E.frozen === "end" && U === -1 && (U = $);
    }), {
      columns: B,
      colSpanColumns: L,
      lastStartFrozenColumnIndex: N,
      firstEndFrozenColumnIndex: U,
      headerRowsCount: Y
    };
  }, [
    e,
    a,
    s,
    c,
    l,
    g,
    C,
    u,
    p
  ]), { templateColumns: D, layoutCssVars: T, totalStartFrozenColumnWidth: M, totalEndFrozenColumnWidth: S, columnMetrics: k } = X(() => {
    const N = /* @__PURE__ */ new Map();
    let U = 0, Y = 0, B = 0;
    const ee = [];
    for (const E of d) {
      let $ = n(E);
      typeof $ == "number" ? $ = Rn($, E) : $ = E.minWidth, ee.push(`${$}px`), N.set(E, {
        width: $,
        left: U
      }), U += $;
    }
    if (m !== -1) {
      const E = N.get(d[m]);
      Y = E.left + E.width;
    }
    const L = {};
    for (let E = 0; E <= m; E++) {
      const $ = d[E];
      L[`--rdg-frozen-start-${$.idx}`] = `${N.get($).left}px`;
    }
    if (f !== -1) {
      const E = d[d.length - 1], $ = N.get(E), oe = $.left + $.width;
      B = oe - N.get(d[f]).left;
      for (let J = f; J < d.length; J++) {
        const se = d[J], ce = N.get(se);
        L[`--rdg-frozen-end-${se.idx}`] = `${oe - (ce.left + ce.width)}px`;
      }
    }
    return {
      templateColumns: ee,
      layoutCssVars: L,
      totalStartFrozenColumnWidth: Y,
      totalEndFrozenColumnWidth: B,
      columnMetrics: N
    };
  }, [
    n,
    d,
    m,
    f
  ]), [A, W] = X(() => {
    if (!i) return [0, d.length - 1];
    const N = o + M, U = o + r - S, Y = d.length - 1, B = Ct(m + 1, Y);
    if (N >= U) return [B, B];
    let ee = B;
    for (; ee < Y; ) {
      const { left: E, width: $ } = k.get(d[ee]);
      if (E + $ > N) break;
      ee++;
    }
    let L = ee;
    for (; L < Y; ) {
      const { left: E, width: $ } = k.get(d[L]);
      if (E + $ >= U) break;
      L++;
    }
    return [Ut(B, ee - 1), Ct(Y, L + 1)];
  }, [
    k,
    d,
    m,
    o,
    M,
    S,
    r,
    i
  ]);
  return {
    columns: d,
    colSpanColumns: b,
    colOverscanStartIdx: A,
    colOverscanEndIdx: W,
    templateColumns: D,
    layoutCssVars: T,
    headerRowsCount: h,
    lastStartFrozenColumnIndex: m,
    firstEndFrozenColumnIndex: f,
    totalStartFrozenColumnWidth: M,
    totalEndFrozenColumnWidth: S
  };
}
function Gr(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const { parent: r } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Gr(r, t, n - 1);
  }
}
function ia(e, t, n, r, o, i, a, s, c) {
  const [l, g] = ae(null), [u, C] = ae(null), [p, d] = ae(o), b = e.length === t.length, m = b && o !== p, f = [...n], h = [];
  for (const { key: S, idx: k, width: A } of t) {
    const W = i.get(S);
    S === (l == null ? void 0 : l.key) ? (f[k] = l.width === "max-content" ? l.width : `${l.width}px`, h.push(S)) : typeof A == "string" && (W == null ? void 0 : W.type) !== "resized" && (m || (u == null ? void 0 : u.has(S)) === !0 || W === void 0) && (f[k] = A, h.push(S));
  }
  const D = f.join(" ");
  nt(T);
  function T() {
    var A, W;
    if (d(o), h.length === 0) return;
    const S = new Map(i);
    let k = !1;
    for (const N of h) {
      const U = ln(r, N);
      k || (k = U !== ((A = i.get(N)) == null ? void 0 : A.width)), U === void 0 ? S.delete(N) : S.set(N, {
        type: "measured",
        width: U
      });
    }
    if (l !== null) {
      const N = l.key, U = (W = i.get(N)) == null ? void 0 : W.width, Y = ln(r, N);
      Y !== void 0 && U !== Y && (k = !0, S.set(N, {
        type: "resized",
        width: Y
      })), g(null);
    }
    k && a(S);
  }
  function M(S, k) {
    var W;
    const { key: A } = S;
    if (Tn(() => {
      var N;
      if (b) {
        const U = /* @__PURE__ */ new Set();
        for (const { key: Y, width: B } of t) A !== Y && typeof B == "string" && ((N = i.get(Y)) == null ? void 0 : N.type) !== "resized" && U.add(Y);
        C(U);
      }
      g({
        key: A,
        width: k
      }), c(typeof k == "number");
    }), C(null), s) {
      const N = (W = i.get(A)) == null ? void 0 : W.width, U = typeof k == "number" ? k : ln(r, A);
      U !== void 0 && U !== N && s(S, U);
    }
  }
  return {
    gridTemplateColumns: D,
    handleColumnResize: M
  };
}
function ln(e, t) {
  var r, o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`;
  return (o = (r = e.current) == null ? void 0 : r.querySelector(n)) == null ? void 0 : o.getBoundingClientRect().width;
}
const jr = {
  inlineSize: 1,
  blockSize: 1
}, yt = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new Map(), Ze = globalThis.ResizeObserver == null ? null : new ResizeObserver(aa);
function aa(e) {
  for (const t of e) {
    const n = t.target;
    xn.has(n) && Xr(xn.get(n), t.contentBoxSize[0]);
  }
}
function Xr(e, t) {
  var n;
  if (yt.has(e)) {
    const r = yt.get(e);
    if (r.inlineSize === t.inlineSize && r.blockSize === t.blockSize) return;
  }
  yt.set(e, t), (n = kn.get(e)) == null || n();
}
function sa() {
  return jr;
}
function ca(e) {
  const { inlineSize: t, blockSize: n } = Ar(q((r) => (kn.set(e, r), () => {
    kn.delete(e);
  }), [e]), q(() => yt.get(e) ?? jr, [e]), sa);
  return nt(() => {
    const r = e.current;
    return xn.set(r, e), Ze == null || Ze.observe(r), yt.has(e) || Xr(e, {
      inlineSize: r.clientWidth,
      blockSize: r.clientHeight
    }), () => {
      Ze == null || Ze.unobserve(r);
    };
  }, [e]), [t, n];
}
function he(e) {
  const t = Se(e);
  nt(() => {
    t.current = e;
  });
  const n = q((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Tt(e) {
  const [t, n] = ae(!1);
  t && !e && n(!1);
  function r(o) {
    if (o.target === o.currentTarget) {
      const i = o.currentTarget.querySelector('[tabindex="0"]');
      i !== null ? (i.focus({ preventScroll: !0 }), n(!0)) : n(!1);
    } else n(!0);
  }
  return {
    tabIndex: e && !t ? 0 : -1,
    childTabIndex: e ? 0 : -1,
    onFocus: e ? r : void 0
  };
}
const Kt = St(void 0);
Kt.displayName = "RowSelectionContext";
const Nn = St(void 0);
Nn.displayName = "RowSelectionChangeContext";
function qr() {
  const e = vt(Kt), t = vt(Nn);
  if (e === void 0 || t === void 0) throw new Error("useRowSelection must be used within renderCell");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const An = St(void 0);
An.displayName = "HeaderRowSelectionContext";
const Fn = St(void 0);
Fn.displayName = "HeaderRowSelectionChangeContext";
function la() {
  const e = vt(An), t = vt(Fn);
  if (e === void 0 || t === void 0) throw new Error("useHeaderRowSelection must be used within renderHeaderCell");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Sn = {
  scrollTop: 0,
  scrollLeft: 0
};
function da() {
  return Sn;
}
const dn = /* @__PURE__ */ new WeakMap();
function ua(e) {
  return Ar(q((t) => {
    if (e.current === null) return () => {
    };
    const n = e.current;
    r();
    function r() {
      const { scrollTop: i } = n, a = $i(n.scrollLeft), s = dn.get(e) ?? Sn;
      return s.scrollTop === i && s.scrollLeft === a ? !1 : (dn.set(e, {
        scrollTop: i,
        scrollLeft: a
      }), !0);
    }
    function o() {
      r() && t();
    }
    return n.addEventListener("scroll", o), () => n.removeEventListener("scroll", o);
  }, [e]), q(() => dn.get(e) ?? Sn, [e]), da);
}
function fa({ gridRef: e }) {
  const [t, n] = ae(null);
  return {
    setScrollToPosition: n,
    scrollToPositionElement: t && /* @__PURE__ */ v("div", {
      ref: (r) => {
        if (r === null) return;
        const o = e.current, { scrollLeft: i, scrollTop: a } = o;
        _t(r, "auto"), o.scrollLeft === i && o.scrollTop === a && n(null);
      },
      style: {
        gridColumn: t.idx == null ? "1/-1" : t.idx + 1,
        gridRow: t.rowIdx == null ? "1/-1" : t.rowIdx + 1
      }
    })
  };
}
function ha({ columns: e, colSpanColumns: t, rows: n, topSummaryRows: r, bottomSummaryRows: o, colOverscanStartIdx: i, colOverscanEndIdx: a, lastStartFrozenColumnIndex: s, firstEndFrozenColumnIndex: c, rowOverscanStartIdx: l, rowOverscanEndIdx: g }) {
  const u = X(() => {
    if (i === 0) return 0;
    function* m() {
      if (yield { type: "HEADER" }, r != null) for (const f of r) yield {
        type: "SUMMARY",
        row: f
      };
      for (let f = l; f <= g; f++) yield {
        type: "ROW",
        row: n[f]
      };
      if (o != null) for (const f of o) yield {
        type: "SUMMARY",
        row: f
      };
    }
    for (const f of t) {
      if (f.frozen) continue;
      const h = f.idx;
      if (h >= i) break;
      for (const D of m()) {
        const T = ze(f, s, c, D);
        if (T !== void 0 && h + T > i) return h;
      }
    }
    return i;
  }, [
    l,
    g,
    n,
    r,
    o,
    i,
    s,
    c,
    t
  ]), C = c > -1 ? Math.min(a, c - 1) : a, p = q(function* (m) {
    for (let h = 0; h <= s; h++) yield e[h];
    const f = c > -1 ? c - 1 : e.length - 1;
    if (s < f) {
      m > s && m < u && (yield e[m]);
      for (let h = u; h <= C; h++) yield e[h];
      m > C && m <= f && (yield e[m]);
    }
    if (c > -1) for (let h = c; h < e.length; h++) yield e[h];
  }, [
    u,
    C,
    e,
    s,
    c
  ]), d = q(function* (m = -1, f) {
    const h = p(m);
    for (const D of h) {
      let T = f && ze(D, s, c, f);
      for (yield [
        D,
        D.idx === m,
        T
      ]; T !== void 0 && T > 1; )
        h.next(), T--;
    }
  }, [
    p,
    s,
    c
  ]), b = q(function* (m = -1, f) {
    if (m >= 0 && m < e.length) {
      const h = e[m];
      yield [
        h,
        !0,
        f && ze(h, s, c, f)
      ];
    }
  }, [
    e,
    s,
    c
  ]);
  return {
    viewportColumns: X(() => p(-1).toArray(), [p]),
    iterateOverViewportColumnsForRow: d,
    iterateOverViewportColumnsForRowOutsideOfViewport: b
  };
}
function ga({ rows: e, rowHeight: t, clientHeight: n, scrollTop: r, enableVirtualization: o }) {
  const { totalRowHeight: i, gridTemplateRows: a, getRowTop: s, getRowHeight: c, findRowIdx: l } = X(() => {
    if (typeof t == "number") return {
      totalRowHeight: t * e.length,
      gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
      getRowTop: (h) => h * t,
      getRowHeight: () => t,
      findRowIdx: (h) => cr(h / t)
    };
    let C = 0, p = "", d = null, b = 0;
    const m = e.map((h, D) => {
      const T = t(h), M = {
        top: C,
        height: T
      };
      return C += T, d === null ? (d = T, b = 1) : d === T ? b++ : (b > 1 ? p += `repeat(${b}, ${d}px) ` : p += `${d}px `, d = T, b = 1), D === e.length - 1 && (b > 1 ? p += `repeat(${b}, ${d}px)` : p += `${d}px`), M;
    }), f = (h) => Ut(0, Ct(e.length - 1, h));
    return {
      totalRowHeight: C,
      gridTemplateRows: p,
      getRowTop: (h) => m[f(h)].top,
      getRowHeight: (h) => m[f(h)].height,
      findRowIdx(h) {
        let D = 0, T = m.length - 1;
        for (; D <= T; ) {
          const M = D + cr((T - D) / 2), S = m[M].top;
          if (S === h) return M;
          if (S < h ? D = M + 1 : S > h && (T = M - 1), D > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let g = 0, u = e.length - 1;
  if (o) {
    const p = l(r), d = l(r + n);
    g = Ut(0, p - 4), u = Ct(e.length - 1, d + 4);
  }
  return {
    rowOverscanStartIdx: g,
    rowOverscanEndIdx: u,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  };
}
const ma = "rdg-cell-dragged-over rdg-7-0-0-beta-60-35ccb4c8";
function wa({ column: e, colSpan: t, isCellActive: n, isDraggedOver: r, row: o, rowIdx: i, className: a, onMouseDown: s, onCellMouseDown: c, onClick: l, onCellClick: g, onDoubleClick: u, onCellDoubleClick: C, onContextMenu: p, onCellContextMenu: d, onRowChange: b, setActivePosition: m, style: f, ...h }) {
  const { tabIndex: D, childTabIndex: T, onFocus: M } = Tt(n), { cellClass: S } = e;
  a = tt(e, r && ma, typeof S == "function" ? S(o) : S, a);
  const k = Hr(e, o);
  function A(L = !1) {
    m({
      rowIdx: i,
      idx: e.idx
    }, { enableEditor: L });
  }
  function W(L, E) {
    let $ = !1;
    if (E) {
      const oe = Pn(L);
      E({
        rowIdx: i,
        row: o,
        column: e,
        setActivePosition: A
      }, oe), $ = oe.isGridDefaultPrevented();
    }
    return $;
  }
  function N(L) {
    s == null || s(L), W(L, c) || A();
  }
  function U(L) {
    l == null || l(L), W(L, g);
  }
  function Y(L) {
    u == null || u(L), W(L, C) || A(!0);
  }
  function B(L) {
    p == null || p(L), W(L, d);
  }
  function ee(L) {
    b(e, i, L);
  }
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !k || void 0,
    tabIndex: D,
    className: a,
    style: {
      ...ot(e, t),
      ...f
    },
    onClick: U,
    onMouseDown: N,
    onDoubleClick: Y,
    onContextMenu: B,
    onFocus: M,
    ...h,
    children: e.renderCell({
      column: e,
      row: o,
      rowIdx: i,
      isCellEditable: k,
      tabIndex: T,
      onRowChange: ee
    })
  });
}
const ya = $e(wa);
function pa(e, t) {
  return /* @__PURE__ */ v(ya, { ...t }, e);
}
const ba = typeof scheduler == "object" && typeof scheduler.postTask == "function", va = "rdg-7-0-0-beta-60-46f9ea88";
function Ca({ column: e, colSpan: t, row: n, rowIdx: r, onRowChange: o, closeEditor: i, onKeyDown: a, navigate: s }) {
  var D, T, M;
  const c = Se(void 0), l = Se(void 0), g = Se(void 0), u = ((D = e.editorOptions) == null ? void 0 : D.commitOnOutsideClick) ?? !0, C = pi(() => {
    b(!0, !1);
  });
  nt(() => {
    if (!u) return;
    function S(A) {
      if (c.current = A, ba) {
        const W = new AbortController(), { signal: N } = W;
        l.current = W, scheduler.postTask(C, {
          priority: "user-blocking",
          signal: N
        }).catch(() => {
        });
      } else g.current = requestAnimationFrame(C);
    }
    function k(A) {
      c.current === A && C();
    }
    return window.addEventListener("mousedown", S, { capture: !0 }), window.addEventListener("mousedown", k), () => {
      window.removeEventListener("mousedown", S, { capture: !0 }), window.removeEventListener("mousedown", k), p();
    };
  }, [u]);
  function p() {
    c.current = void 0, l.current !== void 0 && (l.current.abort(), l.current = void 0), g.current !== void 0 && (cancelAnimationFrame(g.current), g.current = void 0);
  }
  function d(S) {
    if (a) {
      const k = Pn(S);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(S);
        },
        onClose: b
      }, k), k.isGridDefaultPrevented()) return;
    }
    S.key === "Escape" ? b() : S.key === "Enter" ? b(!0) : Fi(S) && s(S);
  }
  function b(S = !1, k = !0) {
    S ? o(n, !0, k) : i(k);
  }
  function m(S, k = !1) {
    o(S, k, k);
  }
  const { cellClass: f } = e, h = tt(e, "rdg-editor-container", !((T = e.editorOptions) != null && T.displayCellContent) && va, typeof f == "function" ? f(n) : f);
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: h,
    style: ot(e, t),
    onKeyDown: d,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ ie(bt, { children: [e.renderEditCell({
      column: e,
      row: n,
      rowIdx: r,
      onRowChange: m,
      onClose: b
    }), ((M = e.editorOptions) == null ? void 0 : M.displayCellContent) && e.renderCell({
      column: e,
      row: n,
      rowIdx: r,
      isCellEditable: !0,
      tabIndex: -1,
      onRowChange: m
    })] })
  });
}
function xa({ column: e, rowIdx: t, isCellActive: n, setPosition: r }) {
  const { tabIndex: o, onFocus: i } = Tt(n), { colSpan: a } = e, s = _r(e, t), c = e.idx + 1;
  function l() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ v("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": n,
    tabIndex: o,
    className: We(Yr, e.headerCellClass),
    style: {
      ...Br(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onMouseDown: l,
    children: e.name
  });
}
const ka = "rdg-7-0-0-beta-60-2a7e240d", Sa = "rdg-cell-resizable rdg-7-0-0-beta-60-1893dc0f", Da = "rdg-resize-handle rdg-7-0-0-beta-60-4e60db91", Ta = "rdg-cell-draggable", Kr = "rdg-7-0-0-beta-60-f2d18717", Pa = `rdg-cell-dragging ${Kr}`, Ea = `rdg-cell-drag-over ${Kr}`, Ia = "rdg-7-0-0-beta-60-3d12c7ae";
function Ra({ column: e, colSpan: t, rowIdx: n, isCellActive: r, onColumnResize: o, onColumnResizeEnd: i, onColumnsReorder: a, sortColumns: s, onSortColumnsChange: c, setPosition: l, shouldFocusGrid: g, direction: u, draggedColumnKey: C, setDraggedColumnKey: p }) {
  const [d, b] = ae(!1), m = Se(null), f = C === e.key, h = _r(e, n), { tabIndex: D, childTabIndex: T, onFocus: M } = Tt(g || r), S = s == null ? void 0 : s.findIndex((x) => x.columnKey === e.key), k = S !== void 0 && S > -1 ? s[S] : void 0, A = k == null ? void 0 : k.direction, W = k !== void 0 && s.length > 1 ? S + 1 : void 0, N = A && !W ? A === "ASC" ? "ascending" : "descending" : void 0, { sortable: U, resizable: Y, draggable: B } = e, ee = tt(e, e.headerCellClass, U && ka, Y && Sa, B && Ta, f && Pa, d && Ea);
  function L(x) {
    if (c == null) return;
    const { sortDescendingFirst: F } = e;
    if (k === void 0) {
      const _ = {
        columnKey: e.key,
        direction: F ? "DESC" : "ASC"
      };
      c(s && x ? [...s, _] : [_]);
    } else {
      let _;
      if ((F === !0 && A === "DESC" || F !== !0 && A === "ASC") && (_ = {
        columnKey: e.key,
        direction: A === "ASC" ? "DESC" : "ASC"
      }), x) {
        const Q = [...s];
        _ ? Q[S] = _ : Q.splice(S, 1), c(Q);
      } else c(_ ? [_] : []);
    }
  }
  function E(x) {
    M == null || M(x), g && l({
      idx: 0,
      rowIdx: n
    });
  }
  function $() {
    l({
      idx: e.idx,
      rowIdx: n
    });
  }
  function oe(x) {
    U && L(x.ctrlKey || x.metaKey);
  }
  function J(x) {
    const { key: F } = x;
    if (U && (F === " " || F === "Enter"))
      x.preventDefault(), L(x.ctrlKey || x.metaKey);
    else if (Y && En(x) && (F === "ArrowLeft" || F === "ArrowRight")) {
      x.stopPropagation();
      const { width: _ } = x.currentTarget.getBoundingClientRect(), { leftKey: Q } = In(u), G = Rn(_ + (F === Q ? -10 : 10), e);
      G !== _ && o(e, G);
    }
  }
  function se(x) {
    Tn(() => {
      p(e.key);
    }), x.dataTransfer.setDragImage(m.current, 0, 0), x.dataTransfer.dropEffect = "move";
  }
  function ce() {
    p(void 0);
  }
  function Be(x) {
    x.preventDefault(), x.dataTransfer.dropEffect = "move";
  }
  function Te(x) {
    b(!1), x.preventDefault(), a == null || a(C, e.key);
  }
  function _e(x) {
    lr(x) && b(!0);
  }
  function Oe(x) {
    lr(x) && b(!1);
  }
  let le, pe;
  B && (le = {
    draggable: !0,
    onDragStart: se,
    onDragEnd: ce
  }, C !== void 0 && C !== e.key && (pe = {
    onDragOver: Be,
    onDragEnter: _e,
    onDragLeave: Oe,
    onDrop: Te
  }));
  const R = {
    ...Br(e, n, h),
    ...ot(e, t)
  }, I = e.renderHeaderCell({
    column: e,
    sortDirection: A,
    priority: W,
    tabIndex: T
  });
  return /* @__PURE__ */ ie(bt, { children: [f && /* @__PURE__ */ v("div", {
    ref: m,
    style: R,
    className: tt(e, e.headerCellClass, Ia),
    children: I
  }), /* @__PURE__ */ ie("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": h,
    "aria-selected": r,
    "aria-sort": N,
    tabIndex: D,
    className: ee,
    style: R,
    onMouseDown: $,
    onFocus: E,
    onClick: oe,
    onKeyDown: J,
    ...le,
    ...pe,
    children: [I, Y && /* @__PURE__ */ v(Ma, {
      direction: u,
      column: e,
      onColumnResize: o,
      onColumnResizeEnd: i
    })]
  })] });
}
function Ma({ direction: e, column: t, onColumnResize: n, onColumnResizeEnd: r }) {
  const o = Se(void 0), i = e === "rtl";
  function a(g) {
    if (g.pointerType === "mouse" && g.button !== 0) return;
    g.preventDefault();
    const { currentTarget: u, pointerId: C } = g;
    u.setPointerCapture(C);
    const { right: p, left: d } = u.parentElement.getBoundingClientRect();
    o.current = i ? g.clientX - d : p - g.clientX;
  }
  function s(g) {
    const u = o.current;
    if (u === void 0) return;
    const { width: C, right: p, left: d } = g.currentTarget.parentElement.getBoundingClientRect();
    let b = i ? p + u - g.clientX : g.clientX + u - d;
    b = Rn(b, t), C > 0 && b !== C && n(t, b);
  }
  function c() {
    r(), o.current = void 0;
  }
  function l() {
    n(t, "max-content");
  }
  return /* @__PURE__ */ v("div", {
    "aria-hidden": !0,
    className: Da,
    onClick: Ii,
    onPointerDown: a,
    onPointerMove: s,
    onLostPointerCapture: c,
    onDoubleClick: l
  });
}
function lr(e) {
  return !e.currentTarget.contains(e.relatedTarget);
}
const Hn = "rdg-row rdg-7-0-0-beta-60-3c083f1b", Oa = "rdg-top-summary-row", Na = "rdg-bottom-summary-row", Zr = "rdg-header-row rdg-7-0-0-beta-60-0dbd5994";
function Aa({ headerRowClass: e, rowIdx: t, iterateOverViewportColumnsForRow: n, onColumnResize: r, onColumnResizeEnd: o, onColumnsReorder: i, sortColumns: a, onSortColumnsChange: s, activeCellIdx: c, setPosition: l, shouldFocusGrid: g, direction: u }) {
  const [C, p] = ae(), d = c === -1, b = n(c, { type: "HEADER" }).map(([m, f, h], D) => /* @__PURE__ */ v(Ra, {
    column: m,
    colSpan: h,
    rowIdx: t,
    isCellActive: f,
    onColumnResize: r,
    onColumnResizeEnd: o,
    onColumnsReorder: i,
    onSortColumnsChange: s,
    sortColumns: a,
    setPosition: l,
    shouldFocusGrid: g && D === 0,
    direction: u,
    draggedColumnKey: C,
    setDraggedColumnKey: p
  }, m.key)).toArray();
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": t,
    className: We(Zr, d && "rdg-row-active", e),
    children: b
  });
}
var Fa = $e(Aa);
function Ha({ rowIdx: e, level: t, iterateOverViewportColumnsForRow: n, activeCellIdx: r, setPosition: o }) {
  const i = [], a = /* @__PURE__ */ new Set();
  for (const [s, c] of n(r)) {
    if (s.parent === void 0) continue;
    let { parent: l } = s;
    for (; l.level > t && l.parent !== void 0; )
      ({ parent: l } = l);
    l.level === t && !a.has(l) && (a.add(l), i.push(/* @__PURE__ */ v(xa, {
      column: l,
      rowIdx: e,
      isCellActive: c,
      setPosition: o
    }, l.idx)));
  }
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": e,
    className: Zr,
    children: i
  });
}
var La = $e(Ha);
function za({ className: e, rowIdx: t, gridRowStart: n, activeCellIdx: r, isRowSelectionDisabled: o, isRowSelected: i, draggedOverCellIdx: a, row: s, iterateOverViewportColumnsForRow: c, activeCellEditor: l, isTreeGrid: g, onCellMouseDown: u, onCellClick: C, onCellDoubleClick: p, onCellContextMenu: d, rowClass: b, onRowChange: m, setActivePosition: f, style: h, ...D }) {
  const T = Dt().renderCell, M = r === -1;
  e = We(Hn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, M && "rdg-row-active", b == null ? void 0 : b(s, t), e);
  const S = c(r, {
    type: "ROW",
    row: s
  }).map(([k, A, W]) => A && l ? l : T(k.key, {
    column: k,
    colSpan: W,
    row: s,
    rowIdx: t,
    isDraggedOver: a === k.idx,
    isCellActive: A,
    onCellMouseDown: u,
    onCellClick: C,
    onCellDoubleClick: p,
    onCellContextMenu: d,
    onRowChange: m,
    setActivePosition: f
  })).toArray();
  return /* @__PURE__ */ v(Kt, {
    value: X(() => ({
      isRowSelected: i,
      isRowSelectionDisabled: o
    }), [o, i]),
    children: /* @__PURE__ */ v("div", {
      role: "row",
      tabIndex: g ? M ? 0 : -1 : void 0,
      className: e,
      style: {
        gridRowStart: n,
        ...h
      },
      ...D,
      children: S
    })
  });
}
const Wa = $e(za);
function Qr(e, t) {
  return /* @__PURE__ */ v(Wa, { ...t }, e);
}
const Ya = "rdg-sort-arrow rdg-7-0-0-beta-60-3d5115f3";
function $a({ sortDirection: e, priority: t }) {
  return /* @__PURE__ */ ie(bt, { children: [Ba({ sortDirection: e }), _a({ priority: t })] });
}
function Ba({ sortDirection: e }) {
  return e === void 0 ? null : /* @__PURE__ */ v("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Ya,
    "aria-hidden": !0,
    children: /* @__PURE__ */ v("path", { d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
  });
}
function _a({ priority: e }) {
  return e;
}
const Ua = "rdg rdg-7-0-0-beta-60-ccd2e5d9", Va = "rdg-viewport-dragging rdg-7-0-0-beta-60-e9b0e1c9", Jr = "rdg-7-0-0-beta-60-2e639f12", Ga = "rdg-7-0-0-beta-60-86aef152", ja = "rdg-7-0-0-beta-60-7689f238", eo = `${Jr} ${Ga}`, to = `${Jr} ${ja}`, no = "rdg-7-0-0-beta-60-487ac462", Xa = `${eo} ${no}`, qa = `${to} ${no}`;
function Ka({ column: e, colSpan: t, row: n, rowIdx: r, isCellActive: o, setActivePosition: i }) {
  var C;
  const { tabIndex: a, childTabIndex: s, onFocus: c } = Tt(o), { summaryCellClass: l } = e, g = tt(e, typeof l == "function" ? l(n) : l);
  function u() {
    i({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: g,
    style: ot(e, t),
    onMouseDown: u,
    onFocus: c,
    children: (C = e.renderSummaryCell) == null ? void 0 : C.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
var Za = $e(Ka);
const Qa = "rdg-summary-row rdg-7-0-0-beta-60-0b90c82c";
function Ja({ rowIdx: e, gridRowStart: t, row: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, setActivePosition: i, top: a, bottom: s, isTop: c, isTreeGrid: l, "aria-rowindex": g }) {
  const u = o === -1, C = r(o, {
    type: "SUMMARY",
    row: n
  }).map(([p, d, b]) => /* @__PURE__ */ v(Za, {
    column: p,
    colSpan: b,
    row: n,
    rowIdx: e,
    isCellActive: d,
    setActivePosition: i
  }, p.key)).toArray();
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": g,
    tabIndex: l ? u ? 0 : -1 : void 0,
    className: We(Hn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Qa, c ? Oa : Na, u && "rdg-row-active"),
    style: {
      gridRowStart: t,
      top: a,
      bottom: s
    },
    children: C
  });
}
var dr = $e(Ja);
function ro(e) {
  const { ref: t, columns: n, rows: r, topSummaryRows: o, bottomSummaryRows: i, rowKeyGetter: a, onRowsChange: s, rowHeight: c, headerRowHeight: l, summaryRowHeight: g, columnWidths: u, onColumnWidthsChange: C, selectedRows: p, isRowSelectionDisabled: d, onSelectedRowsChange: b, sortColumns: m, onSortColumnsChange: f, defaultColumnOptions: h, onCellMouseDown: D, onCellClick: T, onCellDoubleClick: M, onCellContextMenu: S, onCellKeyDown: k, onActivePositionChange: A, onScroll: W, onColumnResize: N, onColumnsReorder: U, onFill: Y, onCellCopy: B, onCellPaste: ee, enableVirtualization: L, renderers: E, className: $, style: oe, rowClass: J, headerRowClass: se, direction: ce, role: Be, "aria-label": Te, "aria-labelledby": _e, "aria-description": Oe, "aria-describedby": le, "aria-rowcount": pe, "data-testid": R, "data-cy": I } = e, x = Dt(), F = Be ?? "grid", _ = c ?? 35, Q = l ?? (typeof _ == "number" ? _ : 35), G = g ?? (typeof _ == "number" ? _ : 35), fe = (E == null ? void 0 : E.renderRow) ?? (x == null ? void 0 : x.renderRow) ?? Qr, ge = (E == null ? void 0 : E.renderCell) ?? (x == null ? void 0 : x.renderCell) ?? pa, be = (E == null ? void 0 : E.renderSortStatus) ?? (x == null ? void 0 : x.renderSortStatus) ?? $a, me = (E == null ? void 0 : E.renderCheckbox) ?? (x == null ? void 0 : x.renderCheckbox) ?? Ui, Pe = (E == null ? void 0 : E.noRowsFallback) ?? (x == null ? void 0 : x.noRowsFallback), ve = L ?? !0, Ce = ce ?? "ltr", H = Se(null), { scrollTop: K, scrollLeft: de } = ua(H), [Ee, it] = ca(H), [$n, Zt] = ae(() => u ?? /* @__PURE__ */ new Map()), [Bn, _n] = ae(!1), [Qt, Un] = ae(!1), [Ne, Jt] = ae(void 0), [Ge, xo] = ae(-1), en = u != null && C != null && !Bn, It = en ? u : $n, ko = en ? (w) => {
    Zt(w), C(w);
  } : Zt, Vn = q((w) => {
    var y;
    return ((y = It.get(w.key)) == null ? void 0 : y.width) ?? w.width;
  }, [It]), { columns: Ie, colSpanColumns: Gn, lastStartFrozenColumnIndex: je, firstEndFrozenColumnIndex: Ue, headerRowsCount: Ae, colOverscanStartIdx: So, colOverscanEndIdx: Do, templateColumns: To, layoutCssVars: Po, totalStartFrozenColumnWidth: jn, totalEndFrozenColumnWidth: Xn } = oa({
    rawColumns: n,
    defaultColumnOptions: h,
    getColumnWidth: Vn,
    scrollLeft: de,
    viewportWidth: Ee,
    enableVirtualization: ve
  }), at = F === "treegrid", Re = (o == null ? void 0 : o.length) ?? 0, xe = (i == null ? void 0 : i.length) ?? 0, qn = Re + xe, ke = Ae + Re, tn = Ae - 1, Fe = -ke, Xe = r.length + xe - 1, nn = Fe + tn, Rt = Ie.length - 1, Mt = Ae * Q, Eo = qn * G, qe = it - Mt - Eo, rn = p != null && b != null, { leftKey: Io, rightKey: Kn } = In(Ce), Zn = pe ?? Ae + r.length + qn, Ro = {
    gridColumnStart: je + 2,
    insetInlineStart: jn
  }, Mo = {
    gridColumnStart: Ue + 1,
    gridColumnEnd: -1,
    insetInlineEnd: Xn
  }, { activePosition: V, setActivePosition: st, setPositionToFocus: Qn, activePositionIsInActiveBounds: Oo, activePositionIsInViewport: on, activePositionIsRow: Jn, activePositionIsCellInViewport: Ot, validatePosition: Nt, getActiveColumn: Ke, getActiveRow: ct } = Bi({
    gridRef: H,
    columns: Ie,
    rows: r,
    isTreeGrid: at,
    maxColIdx: Rt,
    minRowIdx: Fe,
    maxRowIdx: Xe,
    setDraggedOverRowIdx: Jt
  }), { setScrollToPosition: No, scrollToPositionElement: Ao } = fa({ gridRef: H }), Fo = X(() => ({
    renderCheckbox: me,
    renderSortStatus: be,
    renderCell: ge
  }), [
    me,
    be,
    ge
  ]), Ho = X(() => {
    let w = !1, y = !1;
    if (a != null && p != null && p.size > 0) {
      for (const P of r)
        if (p.has(a(P)) ? w = !0 : y = !0, w && y) break;
    }
    return {
      isRowSelected: w && !y,
      isIndeterminate: w && y
    };
  }, [
    r,
    p,
    a
  ]), { rowOverscanStartIdx: lt, rowOverscanEndIdx: dt, totalRowHeight: At, gridTemplateRows: Lo, getRowTop: er, getRowHeight: zo, findRowIdx: an } = ga({
    rows: r,
    rowHeight: _,
    clientHeight: qe,
    scrollTop: K,
    enableVirtualization: ve
  }), { viewportColumns: tr, iterateOverViewportColumnsForRow: ut, iterateOverViewportColumnsForRowOutsideOfViewport: Wo } = ha({
    columns: Ie,
    colSpanColumns: Gn,
    colOverscanStartIdx: So,
    colOverscanEndIdx: Do,
    lastStartFrozenColumnIndex: je,
    firstEndFrozenColumnIndex: Ue,
    rowOverscanStartIdx: lt,
    rowOverscanEndIdx: dt,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), { gridTemplateColumns: Yo, handleColumnResize: $o } = ia(Ie, tr, To, H, Ee, It, ko, N, _n), Bo = he($o), _o = he(oi), Uo = he(U), Vo = he(f), Go = he(D), jo = he(T), Xo = he(M), qo = he(S), Ko = he(Jo), Zo = he(rr), Qo = he(Ft), sn = he(ft), nr = he(di);
  yi(t, () => ({
    element: H.current,
    scrollToCell({ idx: w, rowIdx: y }) {
      const P = w != null && w > je && (Ue === -1 || w < Ue) && w < Ie.length ? w : void 0, z = y != null && Nt({
        idx: 0,
        rowIdx: y
      }).isPositionInViewport ? y + ke : void 0;
      (P != null || z != null) && No({
        idx: P,
        rowIdx: z
      });
    },
    setActivePosition: ft
  }));
  function Jo(w) {
    if (!b) return;
    wt(a);
    const y = new Set(p);
    for (const P of r) {
      if ((d == null ? void 0 : d(P)) === !0) continue;
      const z = a(P);
      w.checked ? y.add(z) : y.delete(z);
    }
    b(y);
  }
  function rr(w) {
    if (!b) return;
    wt(a);
    const { row: y, checked: P, isShiftClick: z } = w;
    if ((d == null ? void 0 : d(y)) === !0) return;
    const O = new Set(p), j = a(y), ne = r.indexOf(y);
    if (xo(ne), P ? O.add(j) : O.delete(j), z && Ge !== -1 && Ge !== ne && Ge < r.length) {
      const [te, we] = Ge < ne ? [Ge, ne] : [ne, Ge];
      for (let He = te + 1; He < we; He++) {
        const cn = r[He];
        (d == null ? void 0 : d(cn)) !== !0 && (P ? O.add(a(cn)) : O.delete(a(cn)));
      }
    }
    b(O);
  }
  function ei(w) {
    const { idx: y, rowIdx: P, mode: z } = V;
    if (z === "EDIT") return;
    if (k && on) {
      const j = Pn(w);
      if (k({
        mode: "ACTIVE",
        row: r[P],
        column: Ie[y],
        rowIdx: P,
        setActivePosition: ft
      }, j), j.isGridDefaultPrevented()) return;
    }
    const { target: O } = w;
    if (O instanceof Element && !(O.closest(".rdg-cell") === null && !(at && O.role === "row")))
      switch (w.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "Tab":
        case "Home":
        case "End":
        case "PageUp":
        case "PageDown":
          ar(w);
          break;
        default:
          ri(w);
          break;
      }
  }
  function Ft(w, y, P) {
    if (typeof s != "function" || P === r[y]) return;
    const z = r.with(y, P);
    s(z, {
      indexes: [y],
      column: w
    });
  }
  function or() {
    V.mode === "EDIT" && Ft(Ke(), V.rowIdx, V.row);
  }
  function ti(w) {
    Ot && (B == null || B({
      row: ct(),
      column: Ke()
    }, w));
  }
  function ni(w) {
    if (typeof ee != "function" || typeof s != "function" || !Ht(V)) return;
    const y = Ke(), P = ct(), z = ee({
      row: P,
      column: y
    }, w);
    Ft(y, V.rowIdx, z);
  }
  function ri(w) {
    if (!Ot) return;
    const y = ct(), { key: P, shiftKey: z } = w;
    if (rn && z && P === " ") {
      wt(a);
      const O = a(y);
      rr({
        row: y,
        checked: !p.has(O),
        isShiftClick: !1
      }), w.preventDefault();
      return;
    }
    Ht(V) && Ai(w, ee != null) && st(({ idx: O, rowIdx: j }) => ({
      idx: O,
      rowIdx: j,
      mode: "EDIT",
      row: y,
      originalRow: y
    }));
  }
  function oi() {
    Bn && (C == null || C(It), _n(!1));
  }
  function ii(w) {
    w.preventDefault(), !(w.pointerType === "mouse" && w.button !== 0) && (Un(!0), w.currentTarget.setPointerCapture(w.pointerId));
  }
  function ai(w) {
    const y = H.current, P = Mt + Re * G, z = K - P + w.clientY - y.getBoundingClientRect().top, O = an(z);
    Jt(O);
    const j = ke + O + 1;
    _t(y.querySelector(`& > [aria-rowindex="${j}"] > [aria-colindex="${V.idx + 1}"]`));
  }
  function si() {
    if (Un(!1), Ne === void 0) return;
    const { rowIdx: w } = V, [y, P] = w < Ne ? [w + 1, Ne + 1] : [Ne, w];
    ir(y, P), Jt(void 0);
  }
  function ci() {
    Wr(H.current, !1);
  }
  function li(w) {
    w.stopPropagation(), ir(V.rowIdx + 1, r.length);
  }
  function ir(w, y) {
    if (s == null) return;
    const { idx: P } = V, z = Ke(), O = ct(), j = [...r], ne = [];
    for (let te = w; te < y; te++) if (Ht({
      rowIdx: te,
      idx: P
    })) {
      const we = Y({
        columnKey: z.key,
        sourceRow: O,
        targetRow: r[te]
      });
      we !== r[te] && (j[te] = we, ne.push(te));
    }
    ne.length > 0 && s(j, {
      indexes: ne,
      column: z
    });
  }
  function Ht(w) {
    return Nt(w).isCellInViewport && Hr(Ie[w.idx], r[w.rowIdx]);
  }
  function ft(w, y) {
    const { isPositionInActiveBounds: P } = Nt(w);
    if (!P) return;
    or();
    const z = ur(V, w);
    if (y != null && y.enableEditor && Ht(w)) {
      const O = r[w.rowIdx];
      st({
        ...w,
        mode: "EDIT",
        row: O,
        originalRow: O
      });
    } else if (z) _t(Lr(H.current));
    else {
      const O = {
        ...w,
        mode: "ACTIVE"
      };
      st(O), y != null && y.shouldFocus && Qn(O);
    }
    A && !z && A({
      rowIdx: w.rowIdx,
      row: r[w.rowIdx],
      column: Ie[w.idx]
    });
  }
  function di({ idx: w, rowIdx: y }) {
    ft({
      rowIdx: Fe + y - 1,
      idx: w
    });
  }
  function ui(w, y, P) {
    const { idx: z, rowIdx: O } = V;
    switch (w) {
      case "ArrowUp": {
        const j = O - 1;
        return {
          idx: z === -1 && j < -Re ? 0 : z,
          rowIdx: j
        };
      }
      case "ArrowDown":
        return {
          idx: z,
          rowIdx: O + 1
        };
      case Io: {
        const j = z - 1;
        return {
          idx: O < -Re && j < 0 ? 0 : j,
          rowIdx: O
        };
      }
      case Kn:
        return {
          idx: z + 1,
          rowIdx: O
        };
      case "Tab":
        return {
          idx: z + (P ? -1 : 1),
          rowIdx: O
        };
      case "Home":
        return Jn || y ? {
          idx: 0,
          rowIdx: Fe
        } : {
          idx: 0,
          rowIdx: O
        };
      case "End":
        return Jn ? {
          idx: z,
          rowIdx: Xe
        } : {
          idx: Rt,
          rowIdx: y ? Xe : O
        };
      case "PageUp": {
        if (O === Fe) return V;
        const j = er(O) + zo(O) - qe;
        return {
          idx: z,
          rowIdx: j > 0 ? an(j) : 0
        };
      }
      case "PageDown": {
        if (O >= r.length) return V;
        const j = er(O) + qe;
        return {
          idx: z,
          rowIdx: j < At ? an(j) : r.length - 1
        };
      }
      default:
        return V;
    }
  }
  function ar(w) {
    const { key: y, shiftKey: P } = w;
    let z = "NONE";
    if (y === "Tab") {
      if (Ei({
        shiftKey: P,
        maxColIdx: Rt,
        minRowIdx: Fe,
        maxRowIdx: Xe,
        activePosition: V
      })) {
        or();
        return;
      }
      z = "CHANGE_ROW";
    }
    w.preventDefault();
    const O = ui(y, En(w), P);
    ur(V, O) || ft(Pi({
      moveUp: y === "ArrowUp",
      moveNext: y === Kn || y === "Tab" && !P,
      columns: Ie,
      colSpanColumns: Gn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: Fe,
      mainHeaderRowIdx: nn,
      maxRowIdx: Xe,
      lastStartFrozenColumnIndex: je,
      firstEndFrozenColumnIndex: Ue,
      cellNavigationMode: z,
      activePosition: V,
      nextPosition: O,
      nextPositionIsCellInActiveBounds: Nt(O).isCellInActiveBounds
    }), { shouldFocus: !0 });
  }
  function fi(w) {
    if (Ne === void 0) return;
    const { rowIdx: y } = V;
    return (y < Ne ? y < w && w <= Ne : y > w && w >= Ne) ? V.idx : void 0;
  }
  function hi() {
    var He;
    if (Y == null || V.mode !== "ACTIVE" || !Ot) return;
    const { rowIdx: w } = V, y = Ke();
    if (y.renderEditCell == null || y.editable === !1) return;
    const P = w === Xe, z = Vn(y), O = ((He = y.colSpan) == null ? void 0 : He.call(y, {
      type: "ROW",
      row: ct()
    })) ?? 1, { insetInlineStart: j, ...ne } = ot(y, O), te = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", we = y.idx + O - 1 === Rt;
    return /* @__PURE__ */ v("div", {
      style: {
        ...ne,
        gridRowStart: ke + w + 1,
        marginInlineEnd: we ? void 0 : te,
        marginBlockEnd: P ? void 0 : te,
        insetInlineStart: j ? `calc(${j} + ${z}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
      },
      className: We(Yi, y.frozen && "rdg-7-0-0-beta-60-7abddb3e"),
      onPointerDown: ii,
      onPointerMove: Qt ? ai : void 0,
      onLostPointerCapture: Qt ? si : void 0,
      onClick: ci,
      onDoubleClick: li
    });
  }
  function sr(w, y, P) {
    return /* @__PURE__ */ ie(bt, { children: [
      /* @__PURE__ */ v("div", {
        className: P,
        style: {
          ...w,
          gridRowStart: 1,
          gridRowEnd: Ae + 1 + Re,
          insetBlockStart: 0
        }
      }),
      r.length > 0 && /* @__PURE__ */ v("div", {
        className: y,
        style: {
          ...w,
          gridRowStart: ke + lt + 1,
          gridRowEnd: ke + dt + 2
        }
      }),
      i != null && xe > 0 && /* @__PURE__ */ v("div", {
        className: P,
        style: {
          ...w,
          gridRowStart: ke + r.length + 1,
          gridRowEnd: ke + r.length + 1 + xe,
          insetBlockStart: qe > At ? it - G * xe : void 0,
          insetBlockEnd: qe > At ? void 0 : 0
        }
      })
    ] });
  }
  function gi(w) {
    if (!Ot || V.rowIdx !== w || V.mode !== "EDIT") return;
    const { row: y } = V, P = Ke(), z = ze(P, je, Ue, {
      type: "ROW",
      row: y
    });
    function O(ne) {
      const te = {
        idx: V.idx,
        rowIdx: w,
        mode: "ACTIVE"
      };
      st(te), ne && Qn(te);
    }
    function j(ne, te, we) {
      te ? Tn(() => {
        Ft(P, V.rowIdx, ne), O(we);
      }) : st((He) => ({
        ...He,
        row: ne
      }));
    }
    return /* @__PURE__ */ v(Ca, {
      column: P,
      colSpan: z,
      row: y,
      rowIdx: w,
      onRowChange: j,
      closeEditor: O,
      onKeyDown: k,
      navigate: ar
    }, P.key);
  }
  function* mi() {
    const w = V.rowIdx;
    on && w < lt && (yield w);
    for (let y = lt; y <= dt; y++) yield y;
    on && w > dt && (yield w);
  }
  function wi() {
    const { idx: w, rowIdx: y } = V;
    return mi().map((P) => {
      const z = P === y, O = z && (P < lt || P > dt) ? Wo : ut, j = r[P], ne = ke + P + 1;
      let te = P, we = !1;
      return typeof a == "function" && (te = a(j), we = (p == null ? void 0 : p.has(te)) ?? !1), fe(te, {
        "aria-rowindex": ke + P + 1,
        "aria-selected": rn ? we : void 0,
        rowIdx: P,
        row: j,
        iterateOverViewportColumnsForRow: O,
        isRowSelectionDisabled: (d == null ? void 0 : d(j)) ?? !1,
        isRowSelected: we,
        onCellMouseDown: Go,
        onCellClick: jo,
        onCellDoubleClick: Xo,
        onCellContextMenu: qo,
        rowClass: J,
        gridRowStart: ne,
        activeCellIdx: z ? w : void 0,
        draggedOverCellIdx: fi(P),
        onRowChange: Qo,
        setActivePosition: sn,
        activeCellEditor: gi(P),
        isTreeGrid: at
      });
    }).toArray();
  }
  en && $n !== u && Zt(u);
  let Lt = `repeat(${Ae}, ${Q}px)`;
  return Re > 0 && (Lt += ` repeat(${Re}, ${G}px)`), r.length > 0 && (Lt += Lo), xe > 0 && (Lt += ` repeat(${xe}, ${G}px)`), /* @__PURE__ */ ie("div", {
    role: F,
    "aria-label": Te,
    "aria-labelledby": _e,
    "aria-description": Oe,
    "aria-describedby": le,
    "aria-multiselectable": rn ? !0 : void 0,
    "aria-colcount": Ie.length,
    "aria-rowcount": Zn,
    tabIndex: -1,
    className: We(Ua, Qt && Va, $),
    style: {
      ...oe,
      scrollPaddingInlineStart: jn,
      scrollPaddingInlineEnd: Xn,
      scrollPaddingBlockStart: Mt + Re * G,
      scrollPaddingBlockEnd: xe * G,
      gridTemplateColumns: Yo,
      gridTemplateRows: Lt,
      "--rdg-header-row-height": `${Q}px`,
      ...Po
    },
    dir: Ce,
    ref: H,
    onScroll: W,
    onKeyDown: ei,
    onCopy: ti,
    onPaste: ni,
    "data-testid": R,
    "data-cy": I,
    children: [
      /* @__PURE__ */ ie(Mn, {
        value: Fo,
        children: [/* @__PURE__ */ v(Fn, {
          value: Ko,
          children: /* @__PURE__ */ ie(An, {
            value: Ho,
            children: [Array.from({ length: tn }, (w, y) => /* @__PURE__ */ v(La, {
              rowIdx: y + 1,
              level: -tn + y,
              iterateOverViewportColumnsForRow: ut,
              activeCellIdx: V.rowIdx === Fe + y ? V.idx : void 0,
              setPosition: nr
            }, y)), /* @__PURE__ */ v(Fa, {
              headerRowClass: se,
              rowIdx: Ae,
              iterateOverViewportColumnsForRow: ut,
              onColumnResize: Bo,
              onColumnResizeEnd: _o,
              onColumnsReorder: Uo,
              sortColumns: m,
              onSortColumnsChange: Vo,
              activeCellIdx: V.rowIdx === nn ? V.idx : void 0,
              setPosition: nr,
              shouldFocusGrid: !Oo,
              direction: Ce
            })]
          })
        }), r.length === 0 && Pe ? Pe : /* @__PURE__ */ ie(bt, { children: [
          o == null ? void 0 : o.map((w, y) => {
            const P = Ae + 1 + y, z = nn + 1 + y, O = V.rowIdx === z;
            return /* @__PURE__ */ v(dr, {
              "aria-rowindex": P,
              rowIdx: z,
              gridRowStart: P,
              row: w,
              top: Mt + G * y,
              bottom: void 0,
              iterateOverViewportColumnsForRow: ut,
              activeCellIdx: O ? V.idx : void 0,
              isTop: !0,
              setActivePosition: sn,
              isTreeGrid: at
            }, y);
          }),
          /* @__PURE__ */ v(Nn, {
            value: Zo,
            children: wi()
          }),
          i == null ? void 0 : i.map((w, y) => {
            const P = ke + r.length + y + 1, z = r.length + y, O = V.rowIdx === z, j = qe > At ? it - G * (xe - y) : void 0, ne = j === void 0 ? G * (xe - 1 - y) : void 0;
            return /* @__PURE__ */ v(dr, {
              "aria-rowindex": Zn - xe + y + 1,
              rowIdx: z,
              gridRowStart: P,
              row: w,
              top: j,
              bottom: ne,
              iterateOverViewportColumnsForRow: ut,
              activeCellIdx: O ? V.idx : void 0,
              isTop: !1,
              setActivePosition: sn,
              isTreeGrid: at
            }, y);
          })
        ] })]
      }),
      je > -1 && sr(Ro, eo, Xa),
      Ue > -1 && sr(Mo, to, qa),
      hi(),
      Li(tr),
      Ao
    ]
  });
}
function ur(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
function es({ id: e, groupKey: t, childRows: n, isExpanded: r, isCellActive: o, column: i, row: a, groupColumnIndex: s, isGroupByColumn: c, toggleGroup: l }) {
  var b;
  const { tabIndex: g, childTabIndex: u, onFocus: C } = Tt(o);
  function p() {
    l(e);
  }
  const d = c && s === i.idx;
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: g === -1 ? void 0 : g,
    className: tt(i),
    style: {
      ...ot(i),
      cursor: d ? "pointer" : "default"
    },
    onClick: d ? p : void 0,
    onFocus: C,
    children: (!c || d) && ((b = i.renderGroupCell) == null ? void 0 : b.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: u,
      toggleGroup: p
    }))
  }, i.key);
}
var ts = $e(es);
const ns = "rdg-group-row rdg-7-0-0-beta-60-e74a2be3";
function rs({ className: e, row: t, rowIdx: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, isRowSelected: i, setActivePosition: a, gridRowStart: s, groupBy: c, toggleGroup: l, ...g }) {
  const u = o === -1;
  let C = t.level;
  function p() {
    a({
      rowIdx: n,
      idx: -1
    }, { shouldFocus: !0 });
  }
  return /* @__PURE__ */ v(Kt, {
    value: X(() => ({
      isRowSelectionDisabled: !1,
      isRowSelected: i
    }), [i]),
    children: /* @__PURE__ */ v("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      tabIndex: u ? 0 : -1,
      className: We(Hn, ns, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, u && "rdg-row-active", e),
      onMouseDown: p,
      style: { gridRowStart: s },
      ...g,
      children: r(o).map(([d, b], m) => (m === 0 && d.key === "rdg-select-column" && (C += 1), /* @__PURE__ */ v(ts, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellActive: b,
        column: d,
        row: t,
        groupColumnIndex: C,
        toggleGroup: l,
        isGroupByColumn: c.includes(d.key)
      }, d.key))).toArray()
    })
  });
}
var os = $e(rs);
function ql({ columns: e, rows: t, rowHeight: n, rowKeyGetter: r, onCellKeyDown: o, onCellCopy: i, onCellPaste: a, onRowsChange: s, selectedRows: c, onSelectedRowsChange: l, renderers: g, groupBy: u, rowGrouper: C, expandedGroupIds: p, onExpandedGroupIdsChange: d, groupIdGetter: b, ...m }) {
  var Oe, le, pe;
  const f = Dt(), h = (g == null ? void 0 : g.renderRow) ?? (f == null ? void 0 : f.renderRow) ?? Qr, D = 1 + (((Oe = m.topSummaryRows) == null ? void 0 : Oe.length) ?? 0), { leftKey: T, rightKey: M } = In(m.direction), S = he(Te), k = b ?? is, { columns: A, groupBy: W } = X(() => {
    const R = e.toSorted(({ key: x }, { key: F }) => x === "rdg-select-column" ? -1 : F === "rdg-select-column" ? 1 : u.includes(x) ? u.includes(F) ? u.indexOf(x) - u.indexOf(F) : -1 : u.includes(F) ? 1 : 0), I = [];
    for (const [x, F] of R.entries()) u.includes(F.key) && (I.push(F.key), R[x] = {
      ...F,
      frozen: !0,
      renderCell: () => null,
      renderGroupCell: F.renderGroupCell ?? ji,
      editable: !1
    });
    return {
      columns: R,
      groupBy: I
    };
  }, [e, u]), [N, U] = X(() => {
    if (W.length === 0) return [void 0, t.length];
    const R = (I, [x, ...F], _) => {
      let Q = 0;
      const G = {};
      for (const [fe, ge] of Object.entries(C(I, x))) {
        const [be, me] = F.length === 0 ? [ge, ge.length] : R(ge, F, _ + Q + 1);
        G[fe] = {
          childRows: ge,
          childGroups: be,
          startRowIndex: _ + Q
        }, Q += me + 1;
      }
      return [G, Q];
    };
    return R(t, W, 0);
  }, [
    W,
    C,
    t
  ]), [Y, B] = X(() => {
    const R = /* @__PURE__ */ new Set();
    if (!N) return [t, F];
    const I = [], x = (_, Q, G) => {
      if (as(_)) {
        I.push(..._);
        return;
      }
      Object.keys(_).forEach((fe, ge, be) => {
        const me = k(fe, Q), Pe = p.has(me), { childRows: ve, childGroups: Ce, startRowIndex: H } = _[fe], K = {
          id: me,
          parentId: Q,
          groupKey: fe,
          isExpanded: Pe,
          childRows: ve,
          level: G,
          posInSet: ge,
          startRowIndex: H,
          setSize: be.length
        };
        I.push(K), R.add(K), Pe && x(Ce, me, G + 1);
      });
    };
    return x(N, void 0, 0), [I, F];
    function F(_) {
      return R.has(_);
    }
  }, [
    p,
    N,
    t,
    k
  ]), ee = X(() => typeof n == "function" ? (R) => B(R) ? n({
    type: "GROUP",
    row: R
  }) : n({
    type: "ROW",
    row: R
  }) : n, [B, n]), L = q((R) => {
    const I = Y.indexOf(R);
    for (let x = I - 1; x >= 0; x--) {
      const F = Y[x];
      if (B(F) && (!B(R) || R.parentId === F.id)) return [F, x];
    }
  }, [B, Y]), E = q((R) => {
    if (B(R)) return R.id;
    if (typeof r == "function") return r(R);
    const I = L(R);
    if (I !== void 0) {
      const { startRowIndex: x, childRows: F } = I[0];
      return x + F.indexOf(R) + 1;
    }
    return Y.indexOf(R);
  }, [
    L,
    B,
    r,
    Y
  ]), $ = X(() => {
    if (c == null) return null;
    wt(r);
    const R = new Set(c);
    for (const I of Y) B(I) && I.childRows.every((x) => c.has(r(x))) && R.add(I.id);
    return R;
  }, [
    B,
    r,
    c,
    Y
  ]);
  function oe(R) {
    if (!l) return;
    wt(r);
    const I = new Set(c);
    for (const x of Y) {
      const F = E(x);
      if ($ != null && $.has(F) && !R.has(F)) if (B(x)) for (const _ of x.childRows) I.delete(r(_));
      else I.delete(F);
      else if (!($ != null && $.has(F)) && R.has(F)) if (B(x)) for (const _ of x.childRows) I.add(r(_));
      else I.add(F);
    }
    l(I);
  }
  function J(R, I) {
    if (o == null || o(R, I), I.isGridDefaultPrevented() || R.mode === "EDIT") return;
    const { column: x, rowIdx: F, setActivePosition: _ } = R, Q = (x == null ? void 0 : x.idx) ?? -1, G = Y[F];
    if (B(G) && (Q === -1 && (I.key === T && G.isExpanded || I.key === M && !G.isExpanded) && (I.preventDefault(), I.preventGridDefault(), Te(G.id)), Q === -1 && I.key === T && !G.isExpanded && G.level !== 0)) {
      const fe = L(G);
      fe !== void 0 && (I.preventGridDefault(), _({
        idx: Q,
        rowIdx: fe[1]
      }));
    }
  }
  function se({ row: R, column: I }, x) {
    B(R) || i == null || i({
      row: R,
      column: I
    }, x);
  }
  function ce({ row: R, column: I }, x) {
    return B(R) ? R : a({
      row: R,
      column: I
    }, x);
  }
  function Be(R, { indexes: I, column: x }) {
    if (!s) return;
    const F = [...t], _ = [];
    for (const Q of I) {
      const G = t.indexOf(Y[Q]);
      F[G] = R[Q], _.push(G);
    }
    s(F, {
      indexes: _,
      column: x
    });
  }
  function Te(R) {
    const I = new Set(p);
    I.has(R) ? I.delete(R) : I.add(R), d(I);
  }
  function _e(R, { row: I, rowClass: x, onCellMouseDown: F, onCellClick: _, onCellDoubleClick: Q, onCellContextMenu: G, onRowChange: fe, draggedOverCellIdx: ge, activeCellEditor: be, isRowSelectionDisabled: me, isTreeGrid: Pe, ...ve }) {
    if (B(I)) {
      const { startRowIndex: K } = I;
      return /* @__PURE__ */ v(os, {
        ...ve,
        "aria-rowindex": D + K + 1,
        row: I,
        groupBy: W,
        toggleGroup: S
      }, R);
    }
    let Ce = ve["aria-rowindex"];
    const H = L(I);
    if (H !== void 0) {
      const { startRowIndex: K, childRows: de } = H[0], Ee = de.indexOf(I);
      Ce = K + D + Ee + 2;
    }
    return h(R, {
      ...ve,
      "aria-rowindex": Ce,
      row: I,
      rowClass: x,
      onCellMouseDown: F,
      onCellClick: _,
      onCellDoubleClick: Q,
      onCellContextMenu: G,
      onRowChange: fe,
      draggedOverCellIdx: ge,
      activeCellEditor: be,
      isRowSelectionDisabled: me,
      isTreeGrid: Pe
    });
  }
  return /* @__PURE__ */ v(ro, {
    ...m,
    role: "treegrid",
    "aria-rowcount": U + 1 + (((le = m.topSummaryRows) == null ? void 0 : le.length) ?? 0) + (((pe = m.bottomSummaryRows) == null ? void 0 : pe.length) ?? 0),
    columns: A,
    rows: Y,
    rowHeight: ee,
    rowKeyGetter: E,
    onRowsChange: Be,
    selectedRows: $,
    onSelectedRowsChange: oe,
    onCellKeyDown: J,
    onCellCopy: se,
    onCellPaste: a ? ce : void 0,
    renderers: {
      ...g,
      renderRow: _e
    }
  });
}
function is(e, t) {
  return t !== void 0 ? `${t}__${e}` : e;
}
function as(e) {
  return Array.isArray(e);
}
const ss = "rdg-text-editor rdg-7-0-0-beta-60-2f8db206";
function cs(e) {
  e == null || e.focus(), e == null || e.select();
}
function Kl({ row: e, column: t, onRowChange: n, onClose: r }) {
  return /* @__PURE__ */ v("input", {
    className: ss,
    ref: cs,
    value: e[t.key],
    onChange: (o) => n({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const re = {
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
}, ls = {
  "--rdg-color": re.gray800,
  "--rdg-header-color": re.gray700,
  "--rdg-border-color": re.gray400,
  "--rdg-background-color": re.forcewhite,
  "--rdg-header-background-color": re.forcewhite,
  "--rdg-row-hover-background-color": re.forcewhite,
  "--rdg-row-selected-hover-background-color": re.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": re.primary400,
  "--rdg-expanded-accent-color": re.primary400,
  "--rdg-row-selected-color": re.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": re.primary500,
  "--rdg-scrollbar-track-background": re.gray100,
  "--rdg--scrollbar-thumb-hover-background": re.primary500,
  "--rdg--scrollbar-track-hover-background": re.gray200
}, ds = ye.div`
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

    /* The pinned columns' cells: held at an edge while the grid scrolls sideways. Both edges are
       the library's own sticky positioning rather than react-data-grid's own frozen columns — see
       pinning.ts for why each edge is. Cells are already background-color: inherit, so a pinned
       cell stays opaque with the row's own state (hover, selected) beneath it. z-indexes mirror
       rdg's own layering: body cells sit at 1, header cells at 3. */
    /* No seam on purpose (Olivier, 2026-08-04): a permanent edge read as clutter; the cell's
       opaque background over the scrolling columns is signal enough. */
    .rdg-cell-frozen-right {
        position: sticky;
        inset-inline-end: 0;
        z-index: 1;
    }

    .rdg-cell-frozen-left {
        position: sticky;
        inset-inline-start: 0;
        z-index: 1;
    }

    .rdg-header-row .rdg-cell-frozen-right,
    .rdg-header-row .rdg-cell-frozen-left {
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

    /* GRAB AREA and LINE are two boxes, which is what lets the target be big enough to aim at
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
    .rdg-resize-handle {
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

    /* No gradient beside a pinned column, ever — the same rule as the seam above it. rdg paints one
       beside each column it holds as frozen, as bare divs directly inside the grid (the only
       children of .rdg with neither a role nor a measuring key), and it carries no stable class, no custom
       property and no prop, so the shape of the element is the only thing there is to name
       (upstream PR #3969). It looks like an affordance and is not one: only the browsers
       supporting the scroll-state container query hide it when the grid cannot scroll, and the
       rest paint it permanently.

       ⚠ RE-CHECK THIS SELECTOR ON EVERY react-data-grid BUMP: it describes a structure rather than
       an API, which is exactly what nothing else in this file does. */
    .rdg > div:not([role]):not([data-measuring-cell-key]) {
        background-image: none;
    }

    /* A detail row holds a panel, not a line of text: it needs to wrap, to start at the top, and to
       scroll inside itself rather than spill over the row below. */
    .rdg-detail-row .rdg-cell {
        align-items: flex-start;
        white-space: normal;
        overflow: auto;
    }

    /* One bar down the open row AND its detail, so a reader can tell which pair belongs together
       when several are open at once. On the first cell only — it is pinned at the left edge, so the
       bar stays put while the grid scrolls sideways. */
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
`, Pt = Me.createContext({
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
}), us = "data-grid-hidden-column-visibility", fs = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = us,
  onHiddenColumnsChange: a,
  onReset: s,
  resetLabel: c
}) => {
  const [l, g] = Me.useState(0), [u, C] = Me.useState(
    null
  ), [p, d] = Me.useState([]), b = q(
    (M) => {
      localStorage.setItem(i, JSON.stringify(M)), g((S) => S + 1), d(M);
    },
    [i]
  ), m = JSON.stringify(r ?? []), f = X(
    () => JSON.parse(m),
    [m]
  );
  Bt(() => {
    const M = localStorage.getItem(i);
    if (M) {
      const S = JSON.parse(M);
      b(Array.isArray(S) ? S : []);
    } else
      b(f);
  }, [i, f, b]);
  const h = q(
    (M) => {
      b(M), a == null || a(M);
    },
    [b, a]
  ), D = q(() => {
    h(f), s == null || s();
  }, [h, f, s]), T = X(
    () => e.filter((M) => !(n != null && n.includes(M.key))),
    [e, n]
  );
  return /* @__PURE__ */ v(
    Pt.Provider,
    {
      value: {
        gridKey: `data-grid-${l}`,
        chooserAnchor: u,
        setChooserAnchor: C,
        columns: T,
        hiddenColumn: p,
        setHiddenColumn: h,
        resetHiddenColumns: D,
        resetLabel: c,
        enabled: o
      },
      children: t
    }
  );
}, Ln = ye(Ci)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${re.primary500};
    }
`, hs = ye(Fr)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, Zl = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = rt(Pt), n = Me.useRef(null), r = q(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ v("div", { ref: n, children: /* @__PURE__ */ v(e, { onClick: r }) });
}, gs = () => {
  const {
    columns: e,
    hiddenColumn: t,
    setHiddenColumn: n,
    chooserAnchor: r,
    setChooserAnchor: o,
    resetHiddenColumns: i,
    resetLabel: a
  } = rt(Pt), s = q(() => {
    o(null);
  }, [o]), c = q(() => {
    i(), o(null);
  }, [i, o]), l = q(
    (g) => () => {
      const u = t.indexOf(g);
      n(
        u === -1 ? [...t, g] : t.filter((C) => C !== g)
      );
    },
    [t, n]
  );
  return /* @__PURE__ */ ie(
    bi,
    {
      id: "column-visibility-menu",
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      transformOrigin: { vertical: "top", horizontal: "right" },
      open: r !== null,
      onClose: s,
      children: [
        e.map((g) => /* @__PURE__ */ ie(hs, { onClick: l(g.key), children: [
          /* @__PURE__ */ v(Ln, { checked: !t.includes(g.key) }),
          g.name
        ] }, g.key)),
        a && /* @__PURE__ */ v(vi, {}),
        a && /* @__PURE__ */ v(Fr, { onClick: c, children: a })
      ]
    }
  );
};
var et = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(et || {}), xt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(xt || {});
function ms(e, t, n, r) {
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
const ws = ({
  columns: e,
  rows: t,
  defaultSortColumns: n,
  sortColumns: r,
  enabled: o = !0
}) => {
  const [i, a] = ae(n ?? []), s = r ?? i, c = X(() => !o || s.length === 0 ? t : [...t].sort((g, u) => {
    for (const C of s) {
      const p = e.find((m) => m.key === C.columnKey), b = ms(
        C.columnKey,
        p == null ? void 0 : p.type,
        p == null ? void 0 : p.sortComparator,
        p == null ? void 0 : p.getColumnValue
      )(g, u);
      if (b !== 0)
        return C.direction === "ASC" ? b : -b;
    }
    return 0;
  }), [t, s, o]), l = q((g) => {
    g.length !== 0 ? a(g) : a((u) => u.length === 1 ? [
      {
        columnKey: u[0].columnKey,
        direction: u[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : u);
  }, []);
  return {
    sortedRows: c,
    sortColumns: i,
    setSortedColumns: l
  };
}, un = "rdg-cell-frozen-right", fr = "rdg-cell-frozen-left", oo = {
  frozen: !1,
  frozenLeft: !0,
  cellClass: fr,
  headerCellClass: fr
}, pt = 40, ys = 200, ps = "rdg-row-expanded", bs = "rdg-detail-row", io = "__rdgDetailParent", vs = (e) => ({ id: `rdg-detail:${e.id}`, [io]: e }), zn = (e) => e[io], Vt = (e) => zn(e) !== void 0, Cs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, vs(r)] : [r]);
}, xs = ye.button`
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
`, ks = () => /* @__PURE__ */ v("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ v("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), ao = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ v(
    xs,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), so(t, e.id);
      },
      children: /* @__PURE__ */ v(ks, {})
    }
  );
}, so = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, Ss = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', co = (e, t, n, r = []) => Vt(e) || t === Ts || t === lo || r.includes(t) ? !1 : !(n instanceof Element && n.closest(Ss)), Ql = (e, t, n) => co(e, t, n), hr = ye.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, Ds = ye.span`
    display: inline-block;
    flex: 0 0 ${pt - 16}px;
`, Ts = Ur, lo = "rdg-expander-column", Ps = (e) => ({
  key: lo,
  name: "",
  ...oo,
  width: pt,
  minWidth: pt,
  maxWidth: pt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ v(ao, { row: t, expandable: e })
}), Yt = (e) => !!e.frozen || !!e.frozenLeft, Es = (e, t) => {
  const n = [
    ...e.filter(Yt),
    ...e.filter((a) => !Yt(a))
  ], r = n.findIndex((a) => !Yt(a));
  if (r === -1)
    return e;
  const o = n[r], i = n.length - r;
  return e.map((a) => a !== o ? !Yt(a) || !a.renderCell ? a : {
    ...a,
    renderCell: (s) => {
      var c;
      return Vt(s.row) ? null : (c = a.renderCell) == null ? void 0 : c.call(a, s);
    }
  } : {
    ...a,
    colSpan: (s) => {
      var c;
      return s.type === "ROW" && Vt(s.row) ? i : (c = a.colSpan) == null ? void 0 : c.call(a, s);
    },
    renderCell: (s) => {
      var l;
      const c = zn(s.row);
      return c ? t(c) : ((l = a.renderCell) == null ? void 0 : l.call(a, s)) ?? null;
    }
  });
}, Is = (e, t, n) => (r) => {
  const o = zn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, Rs = (e, t = []) => Vt(e) ? bs : t.includes(e.id) ? ps : "", uo = ye(ki)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${re.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${re.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${re.gray800};
  }

  fieldset {
    display: none;
  }

}
`, Wn = Me.createContext({
  filters: {},
  setFilters: () => {
  }
}), Ms = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Me.useState({});
  return /* @__PURE__ */ v(
    Wn.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, fn = (e) => e.stopPropagation(), Os = ({ options: e, renderInput: t, ...n }) => {
  const r = X(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ v(
    Si,
    {
      onChange: (o, i) => {
        var a;
        return (a = n.onChange) == null ? void 0 : a.call(n, i == null ? void 0 : i.value);
      },
      value: r ?? null,
      options: e,
      onClick: fn,
      onKeyDown: fn,
      getOptionLabel: (o) => o.label,
      renderInput: t || ((o) => /* @__PURE__ */ v(
        uo,
        {
          ...o,
          onClick: fn,
          label: n.label,
          error: n.error,
          helperText: n.helperText
        }
      ))
    }
  );
}, Ns = ye(xi)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, $t = (e) => e.stopPropagation(), hn = ({ children: e, ...t }) => /* @__PURE__ */ ie(Ns, { children: [
  Vr(t),
  e
] }), As = (e) => (t) => {
  const { filters: n, setFilters: r } = rt(Wn), o = X(() => n[e.key], [n, e]), i = q(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === xt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ v(hn, { ...t, children: /* @__PURE__ */ v(
    Os,
    {
      options: e.filterOptions ?? [],
      onChange: i,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ v(hn, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (a) => i(a.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: $t,
    onKeyDown: $t
  }) : /* @__PURE__ */ v(
    uo,
    {
      autoComplete: "off",
      onClick: $t,
      onKeyDown: $t,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ v(hn, { ...t });
}, Fs = {
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
}, Hs = (e, t, n) => {
  let r;
  const o = Fs[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function gn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ls = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, zs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ws = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ys = {
  date: gn({
    formats: Ls,
    defaultWidth: "full"
  }),
  time: gn({
    formats: zs,
    defaultWidth: "full"
  }),
  dateTime: gn({
    formats: Ws,
    defaultWidth: "full"
  })
}, $s = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Bs = (e, t, n, r) => $s[e];
function gt(e) {
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
const _s = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Us = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Vs = {
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
}, Gs = {
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
}, js = {
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
}, Xs = {
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
}, qs = (e, t) => {
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
}, Ks = {
  ordinalNumber: qs,
  era: gt({
    values: _s,
    defaultWidth: "wide"
  }),
  quarter: gt({
    values: Us,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: gt({
    values: Vs,
    defaultWidth: "wide"
  }),
  day: gt({
    values: Gs,
    defaultWidth: "wide"
  }),
  dayPeriod: gt({
    values: js,
    defaultWidth: "wide",
    formattingValues: Xs,
    defaultFormattingWidth: "wide"
  })
};
function mt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Qs(s, (u) => u.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Zs(s, (u) => u.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const g = t.slice(a.length);
    return { value: l, rest: g };
  };
}
function Zs(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Qs(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Js(e) {
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
const ec = /^(\d+)(th|st|nd|rd)?/i, tc = /\d+/i, nc = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, rc = {
  any: [/^b/i, /^(a|c)/i]
}, oc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ic = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ac = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, sc = {
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
}, cc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, lc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, dc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, uc = {
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
}, fc = {
  ordinalNumber: Js({
    matchPattern: ec,
    parsePattern: tc,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: mt({
    matchPatterns: nc,
    defaultMatchWidth: "wide",
    parsePatterns: rc,
    defaultParseWidth: "any"
  }),
  quarter: mt({
    matchPatterns: oc,
    defaultMatchWidth: "wide",
    parsePatterns: ic,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mt({
    matchPatterns: ac,
    defaultMatchWidth: "wide",
    parsePatterns: sc,
    defaultParseWidth: "any"
  }),
  day: mt({
    matchPatterns: cc,
    defaultMatchWidth: "wide",
    parsePatterns: lc,
    defaultParseWidth: "any"
  }),
  dayPeriod: mt({
    matchPatterns: dc,
    defaultMatchWidth: "any",
    parsePatterns: uc,
    defaultParseWidth: "any"
  })
}, hc = {
  code: "en-US",
  formatDistance: Hs,
  formatLong: Ys,
  formatRelative: Bs,
  localize: Ks,
  match: fc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let gc = {};
function Et() {
  return gc;
}
const fo = 6048e5, mc = 864e5, gr = Symbol.for("constructDateFrom");
function Ye(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && gr in e ? e[gr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function De(e, t) {
  return Ye(t || e, e);
}
function mr(e) {
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
function wc(e, ...t) {
  const n = Ye.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function wr(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function yc(e, t, n) {
  const [r, o] = wc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = wr(r), a = wr(o), s = +i - mr(i), c = +a - mr(a);
  return Math.round((s - c) / mc);
}
function pc(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function bc(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return yc(n, pc(n)) + 1;
}
function kt(e, t) {
  var s, c, l, g;
  const n = Et(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((g = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : g.weekStartsOn) ?? 0, o = De(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Gt(e, t) {
  return kt(e, { ...t, weekStartsOn: 1 });
}
function ho(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ye(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Gt(o), a = Ye(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Gt(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function vc(e, t) {
  const n = ho(e, t), r = Ye(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Gt(r);
}
function Cc(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +Gt(n) - +vc(n);
  return Math.round(r / fo) + 1;
}
function go(e, t) {
  var g, u, C, p;
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Et(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (g = t == null ? void 0 : t.locale) == null ? void 0 : g.options) == null ? void 0 : u.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (C = o.locale) == null ? void 0 : C.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = Ye((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = kt(a, t), c = Ye((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const l = kt(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function xc(e, t) {
  var s, c, l, g;
  const n = Et(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((g = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = go(e, t), i = Ye((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), kt(i, t);
}
function kc(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +kt(n, t) - +xc(n, t);
  return Math.round(r / fo) + 1;
}
function Z(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Le = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Z(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Z(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Z(e.getDate(), t.length);
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
    return Z(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Z(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Z(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Z(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Z(o, t.length);
  }
}, Qe = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, yr = {
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
    return Le.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = go(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return Z(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : Z(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ho(e);
    return Z(n, t.length);
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
    return Z(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Z(r, 2);
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
        return Z(r, 2);
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
        return Le.M(e, t);
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
        return Z(r + 1, 2);
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
    const o = kc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Z(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Cc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Z(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Le.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = bc(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Z(r, t.length);
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
        return Z(i, 2);
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
        return Z(i, t.length);
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
        return Z(o, t.length);
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
    return Le.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Le.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Z(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Z(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Le.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Le.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Le.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return br(r);
      case "XXXX":
      case "XX":
        return Ve(r);
      case "XXXXX":
      case "XXX":
      default:
        return Ve(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return br(r);
      case "xxxx":
      case "xx":
        return Ve(r);
      case "xxxxx":
      case "xxx":
      default:
        return Ve(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + pr(r, ":");
      case "OOOO":
      default:
        return "GMT" + Ve(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + pr(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ve(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Z(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Z(+e, t.length);
  }
};
function pr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Z(i, 2);
}
function br(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Z(Math.abs(e) / 60, 2) : Ve(e, t);
}
function Ve(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Z(Math.trunc(r / 60), 2), i = Z(r % 60, 2);
  return n + o + t + i;
}
const vr = (e, t) => {
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
}, mo = (e, t) => {
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
}, Sc = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return vr(e, t);
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
  return i.replace("{{date}}", vr(r, t)).replace("{{time}}", mo(o, t));
}, Dc = {
  p: mo,
  P: Sc
}, Tc = /^D+$/, Pc = /^Y+$/, Ec = ["D", "DD", "YY", "YYYY"];
function Ic(e) {
  return Tc.test(e);
}
function Rc(e) {
  return Pc.test(e);
}
function Mc(e, t, n) {
  const r = Oc(e, t, n);
  if (console.warn(r), Ec.includes(e)) throw new RangeError(r);
}
function Oc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function wo(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function yo(e) {
  return !(!wo(e) && typeof e != "number" || isNaN(+De(e)));
}
const Nc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ac = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fc = /^'([^]*?)'?$/, Hc = /''/g, Lc = /[a-zA-Z]/;
function zc(e, t, n) {
  var g, u, C, p, d, b, m, f;
  const r = Et(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? hc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (C = r.locale) == null ? void 0 : C.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((f = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : f.weekStartsOn) ?? 0, s = De(e, n == null ? void 0 : n.in);
  if (!yo(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Ac).map((h) => {
    const D = h[0];
    if (D === "p" || D === "P") {
      const T = Dc[D];
      return T(h, o.formatLong);
    }
    return h;
  }).join("").match(Nc).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const D = h[0];
    if (D === "'")
      return { isToken: !1, value: Wc(h) };
    if (yr[D])
      return { isToken: !0, value: h };
    if (D.match(Lc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + D + "`"
      );
    return { isToken: !1, value: h };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((h) => {
    if (!h.isToken) return h.value;
    const D = h.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Rc(D) || !(n != null && n.useAdditionalDayOfYearTokens) && Ic(D)) && Mc(D, t, String(e));
    const T = yr[D[0]];
    return T(s, D, o.localize, l);
  }).join("");
}
function Wc(e) {
  const t = e.match(Fc);
  return t ? t[1].replace(Hc, "'") : e;
}
function Yc() {
  return Object.assign({}, Et());
}
function Cr(e, t, n) {
  const r = Yc(), o = _c(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? $c(o, t) : Bc(o, t);
}
function $c(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Bc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function _c(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Uc(e, t) {
  const n = qc(t);
  return "formatToParts" in n ? Gc(n, e) : jc(n, e);
}
const Vc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Gc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = Vc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function jc(e, t) {
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
const mn = {}, xr = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Xc = xr === "06/25/2014, 00:00:00" || xr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function qc(e) {
  return mn[e] || (mn[e] = Xc ? new Intl.DateTimeFormat("en-US", {
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
  })), mn[e];
}
function po(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const kr = 36e5, Kc = 6e4, wn = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Yn(e, t, n) {
  if (!e)
    return 0;
  let r = wn.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, i;
  if (r = wn.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), Sr(o) ? -(o * kr) : NaN;
  if (r = wn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return Sr(o, a) ? (i = Math.abs(o) * kr + a * Kc, r[1] === "+" ? -i : i) : NaN;
  }
  if (Jc(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : Zc(t), s = Dn(a, e);
    return -(n ? s : Qc(t, s, e));
  }
  return NaN;
}
function Zc(e) {
  return po(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Dn(e, t) {
  const n = Uc(e, t), r = po(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function Qc(e, t, n) {
  let o = e.getTime() - t;
  const i = Dn(new Date(o), n);
  if (t === i)
    return t;
  o -= i - t;
  const a = Dn(new Date(o), n);
  return i === a ? i : Math.max(i, a);
}
function Sr(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Dr = {};
function Jc(e) {
  if (Dr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Dr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const el = 60 * 1e3, tl = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = yn(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Tr(r);
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
    const r = yn(n.timeZone, e);
    switch (t) {
      case "x":
        return Tr(r);
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
    const r = yn(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + nl(r, ":");
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
        return Cr("short", e, n);
      case "zzzz":
      default:
        return Cr("long", e, n);
    }
  }
};
function yn(e, t) {
  const n = e ? Yn(e, t, !0) / el : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function jt(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Je(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = jt(Math.floor(r / 60), 2), i = jt(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function Tr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + jt(Math.abs(e) / 60, 2) : Je(e, t);
}
function nl(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + jt(i, 2);
}
function Pr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const rl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, pn = 36e5, Er = 6e4, ol = 2, ue = {
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
  timeZone: rl
};
function bo(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? ol : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = il(e), { year: o, restDateString: i } = al(r.date, n), a = sl(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let c = 0, l;
    if (r.time && (c = cl(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (l = Yn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = Pr(new Date(s + c)), l = Pr(new Date(s + c + l));
    return new Date(s + c + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function il(e) {
  const t = {};
  let n = ue.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ue.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ue.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function al(e, t) {
  if (e) {
    const n = ue.YYY[t], r = ue.YYYYY[t];
    let o = ue.YYYY.exec(e) || r.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = ue.YY.exec(e) || n.exec(e), o) {
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
function sl(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let i = ue.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, Rr(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = ue.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return ul(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return Rr(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, Mr(o) ? Ir(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = ue.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return Mr(o, a) ? Ir(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function cl(e) {
  let t, n, r = ue.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), bn(t) ? t % 24 * pn : NaN;
  if (r = ue.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), bn(t, n) ? t % 24 * pn + n * Er : NaN;
  if (r = ue.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return bn(t, n, o) ? t % 24 * pn + n * Er + o * 1e3 : NaN;
  }
  return null;
}
function Ir(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, i = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
const ll = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], dl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function vo(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Rr(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = vo(e);
    if (r && n > dl[t] || !r && n > ll[t])
      return !1;
  }
  return !0;
}
function ul(e, t) {
  if (t < 1)
    return !1;
  const n = vo(e);
  return !(n && t > 366 || !n && t > 365);
}
function Mr(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function bn(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const fl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function hl(e, t, n = {}) {
  t = String(t);
  const r = t.match(fl);
  if (r) {
    const o = bo(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", l = i.replace(a, "'" + tl[a[0]](o, a, n) + "'");
      return c ? l.substring(0, s - 1) + l.substring(s + 1) : l;
    }, t);
  }
  return zc(e, t, n);
}
function gl(e, t, n) {
  e = bo(e, n);
  const r = Yn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function ml(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, hl(gl(e, t, { timeZone: r.timeZone }), n, r);
}
var Co = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(Co || {});
const wl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !wo(e) && typeof e == "string" ? new Date(e) : e;
  return yo(r) ? ml(e, n, t) : "--";
}, Or = (e) => e.trim().toLowerCase(), vn = (...e) => e.filter(Boolean).join(" "), yl = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: c, hiddenColumn: l } = rt(Pt), g = q((u) => {
    const C = () => {
      if (u.renderCell)
        return u.renderCell;
      if (u.type === et.DATE)
        return ({ row: b }) => {
          var m, f;
          return wl(
            b[u.key],
            ((m = u.dateOptions) == null ? void 0 : m.formatDate) ?? Co.DATE_WITH_TIME,
            (f = u.dateOptions) == null ? void 0 : f.timeZone
          );
        };
    }, p = () => u.renderHeaderCell ? u.renderHeaderCell : As(u), d = {
      ...u,
      renderCell: C(),
      renderHeaderCell: p()
    };
    return u.frozenRight && (d.frozen = !1, d.cellClass = typeof u.cellClass == "function" ? (b) => vn(
      un,
      u.cellClass(b)
    ) : vn(un, u.cellClass), d.headerCellClass = vn(un, u.headerCellClass)), d;
  }, []);
  return X(() => {
    const u = [];
    if (t && !n && u.push(Ps(t)), n) {
      const C = (r ?? []).map((m) => m.id), p = C.length > 0 && C.every((m) => o == null ? void 0 : o.includes(m)), d = (m) => {
        const f = (o ?? []).filter((h) => !C.includes(h));
        return m ? [...f, ...C] : f;
      }, b = t ? 50 + pt : 50;
      u.push({
        ...ht,
        ...oo,
        width: b,
        minWidth: b,
        maxWidth: b,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ ie(hr, { children: [
          t && /* @__PURE__ */ v(Ds, { "aria-hidden": !0 }),
          a ? a({
            checked: p,
            "aria-label": s,
            onChange: (m) => i == null ? void 0 : i(d(m))
          }) : /* @__PURE__ */ v(
            Ln,
            {
              checked: p,
              slotProps: { input: { "aria-label": s } },
              onChange: (m, f) => i == null ? void 0 : i(d(f))
            }
          )
        ] }),
        renderCell: t ? (m) => {
          var f;
          return /* @__PURE__ */ ie(hr, { children: [
            /* @__PURE__ */ v(ao, { row: m.row, expandable: t }),
            (f = ht.renderCell) == null ? void 0 : f.call(ht, m)
          ] });
        } : ht.renderCell
      });
    }
    return u.push(...e.map((C) => g(C))), c && l ? u.filter((C) => !l.includes(C.key)) : u;
  }, [
    e,
    t,
    g,
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
var pl = {
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
function bl(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return pl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Cn(e) {
  var t = bl(e);
  return "".concat(t.value).concat(t.unit);
}
var vl = function(e, t, n) {
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
}, Xt = function() {
  return Xt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Xt.apply(this, arguments);
}, Cl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, xl = vl("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function kl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, l = e.size, g = l === void 0 ? 15 : l, u = e.margin, C = u === void 0 ? 2 : u, p = Cl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), d = Xt({ display: "inherit" }, c), b = function(m) {
    return {
      backgroundColor: o,
      width: Cn(g),
      height: Cn(g),
      margin: Cn(C),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(xl, " ").concat(0.75 / a, "s ").concat(m * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? zt.createElement(
    "span",
    Xt({ style: d }, p),
    zt.createElement("span", { style: b(1) }),
    zt.createElement("span", { style: b(2) }),
    zt.createElement("span", { style: b(3) })
  ) : null;
}
const Sl = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === xt.TEXT && typeof n == "string" && typeof r == "string" ? Or(n).includes(Or(r)) : t === xt.AUTOCOMPLETE ? n === r : !1, Dl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = rt(Wn);
  return X(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((c) => c.key === i);
      return s ? Sl({
        comparator: s.filterComparator,
        filterType: s.filterType ?? xt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Tl = ye.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, Pl = ye.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, El = Me.memo(
  ({
    currentPage: e,
    setCurrentPage: t,
    setPageSize: n,
    pageSize: r,
    totalCount: o,
    labels: i,
    totalLabel: a
  }) => {
    const s = q(
      (l, g) => {
        t(g);
      },
      [t]
    ), c = q(
      (l) => {
        n(parseInt(l.target.value, 10)), t(0);
      },
      [n, t]
    );
    return /* @__PURE__ */ ie(Tl, { children: [
      a ? /* @__PURE__ */ v(Pl, { children: a(o) }) : null,
      /* @__PURE__ */ v(
        Di,
        {
          labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ v("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
          labelDisplayedRows: ({ from: l, to: g, count: u }) => `${l}-${g} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${u}`,
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
var Il = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(Il || {});
const Rl = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = ae(0), [c, l] = ae(e), g = n !== void 0, u = o !== void 0, C = g ? n : a, p = u ? o : c, d = q(
    (h) => {
      g || s(h), r == null || r(h);
    },
    [g, r]
  ), b = q(
    (h) => {
      u || l(h), i == null || i(h);
    },
    [u, i]
  ), m = q(() => {
    d(0), b(e);
  }, [d, b, e]), f = Se(p);
  return Bt(() => {
    f.current !== p && (f.current = p, d(0));
  }, [p]), {
    currentPage: C,
    pageSize: p,
    defaultPageSize: e,
    setCurrentPage: d,
    setPageSize: b,
    resetPagination: m
  };
}, Nr = 50, Ml = ye.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, Ol = ye.div`
    background-color: ${re.primary500};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, Nl = Me.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = q(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ v(
      Ln,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), Al = (e) => /* @__PURE__ */ v(Nl, { ...e }), Fl = "Select all rows", Hl = ({
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
  selectAllLabel: g = Fl,
  noDataMessage: u,
  filters: C,
  setFilters: p,
  pagination: d,
  renderers: b,
  expandable: m,
  rowGestures: f,
  rowHeight: h,
  rowClass: D,
  onCellClick: T,
  onColumnResize: M,
  columnWidths: S,
  onColumnWidthsChange: k,
  ...A
}) => {
  var ve, Ce;
  const { gridKey: W } = rt(Pt), { pageSize: N, currentPage: U, setCurrentPage: Y, setPageSize: B } = Rl(
    d == null ? void 0 : d.defaultPageSize,
    d == null ? void 0 : d.control
  ), ee = (b == null ? void 0 : b.renderCheckbox) ?? Al, L = yl({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: m,
    selectionEnabled: !!l,
    selectableRows: n,
    selectedRows: c,
    onSelectedRowsChange: l,
    renderCheckbox: ee,
    selectAllLabel: g
  }), E = X(() => L.map((H) => H.key).join("|"), [L]), $ = X(
    () => L.some((H) => H.filterEnabled),
    [L]
  ), oe = X(
    () => (d == null ? void 0 : d.enabled) && !d.remotePagination,
    [d]
  ), J = X(() => !p, [p]), se = Dl({
    columns: L,
    rows: n,
    enabled: J
  }), ce = X(() => !i, [i]), Be = s ?? ce, {
    sortedRows: Te,
    sortColumns: _e,
    setSortedColumns: Oe
  } = ws({
    columns: L,
    rows: se,
    defaultSortColumns: a,
    sortColumns: ce ? void 0 : o,
    enabled: Be
  }), le = X(() => {
    if (!oe)
      return U;
    const H = Math.max(0, Math.ceil(se.length / N) - 1);
    return Math.min(U, H);
  }, [oe, U, N, se.length]);
  Bt(() => {
    le !== U && Y(le);
  }, [le, U, Y]);
  const pe = X(() => oe ? Te.slice(le * N, (le + 1) * N) : Te, [Te, oe, le, N]), R = X(
    () => m ? Cs(pe, m.expandedIds) : pe,
    [m, pe]
  ), I = X(
    () => m ? Es(L, m.renderDetail) : L,
    [m, L]
  ), x = q(
    (H, K) => M == null ? void 0 : M(H.key, K),
    [M]
  ), F = Se(E);
  nt(() => {
    if (F.current === E || (F.current = E, !S || !k))
      return;
    const H = new Map([...S].filter(([, K]) => K.type === "resized"));
    H.size !== S.size && k(H);
  }, [E, S, k]);
  const { renderRow: _, ...Q } = b ?? {}, G = Se(void 0), fe = X(() => {
    if (_)
      return (H, K) => {
        var Ee;
        const { iterateOverViewportColumnsForRow: de } = K;
        return ((Ee = G.current) == null ? void 0 : Ee.iterate) !== de && (G.current = {
          iterate: de,
          columns: [...de(void 0)].map(([it]) => it)
        }), _(H, { ...K, viewportColumns: G.current.columns });
      };
  }, [_]), ge = q(
    (H, K) => {
      const de = () => {
        const Ee = Rs(H, m == null ? void 0 : m.expandedIds);
        return Ee || (K === 0 ? "first-row" : K === n.length - 1 ? "last-row" : "");
      };
      return [D == null ? void 0 : D(H, K), de()].filter(Boolean).join(" ");
    },
    [n, m == null ? void 0 : m.expandedIds, D]
  ), be = q(
    (H) => {
      f != null && f.onClick ? f.onClick(H) : m && so(m, H.id);
    },
    [f, m]
  ), me = q(
    (H, K) => {
      if (T == null || T(H, K), K.isGridDefaultPrevented() || !m && !(f != null && f.onClick))
        return;
      const de = window.getSelection();
      K.detail <= 1 && de && !de.isCollapsed && K.target instanceof Node && de.containsNode(K.target, !0) || co(
        H.row,
        H.column.key,
        K.target,
        f == null ? void 0 : f.excludedColumns
      ) && be(H.row);
    },
    [T, m, f, be]
  ), Pe = !(d != null && d.remotePagination);
  return Bt(() => {
    if (!Pe)
      return;
    const H = c == null ? void 0 : c.filter(
      (K) => n.some((de) => de.id === K)
    );
    (H == null ? void 0 : H.length) != (c == null ? void 0 : c.length) && (l == null || l(H ?? []));
  }, [n, c, Pe]), /* @__PURE__ */ ie(ds, { $pagination: !!(d != null && d.enabled), children: [
    /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v(
      ro,
      {
        selectedRows: c ? new Set(c) : void 0,
        onSelectedRowsChange: (H) => {
          l == null || l(Array.from(H));
        },
        rowKeyGetter: (H) => H.id,
        rows: R,
        onSortColumnsChange: ce ? Oe : i,
        sortColumns: ce ? _e : o,
        columns: I,
        rowClass: ge,
        headerRowHeight: $ ? 70 : void 0,
        onCellClick: me,
        onColumnResize: M ? x : void 0,
        columnWidths: S,
        onColumnWidthsChange: k,
        enableVirtualization: I.some((H) => H.frozenRight || H.frozenLeft) ? !1 : void 0,
        ...A,
        rowHeight: m ? Is(
          h,
          Nr,
          m.detailHeight ?? ys
        ) : h ?? Nr,
        renderers: {
          renderCheckbox: ee,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...u != null && !t ? {
            noRowsFallback: /* @__PURE__ */ v("div", { className: "rdg-no-data", children: u })
          } : {},
          ...Q,
          renderRow: fe
        },
        style: { ...ls, ...e ?? {} }
      },
      `${W}:${E}`
    ) }),
    d != null && d.enabled ? /* @__PURE__ */ v(
      El,
      {
        ...(d == null ? void 0 : d.remotePagination) ?? {
          currentPage: le,
          setCurrentPage: Y,
          pageSize: N,
          setPageSize: B,
          totalCount: se.length
        },
        labels: d.labels ?? ((ve = d.remotePagination) == null ? void 0 : ve.labels),
        totalLabel: d.totalLabel ?? ((Ce = d.remotePagination) == null ? void 0 : Ce.totalLabel)
      }
    ) : null,
    t ? /* @__PURE__ */ ie(Ml, { children: [
      /* @__PURE__ */ v(Ol, {}),
      /* @__PURE__ */ v(kl, { color: re.primary500 })
    ] }) : null,
    /* @__PURE__ */ v(gs, {})
  ] });
}, Jl = ({
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
  ...g
}) => /* @__PURE__ */ v(Ms, { filters: e, setFilters: t, children: /* @__PURE__ */ v(
  fs,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: c,
    resetLabel: l,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ v(Hl, { ...g, columns: n, filters: e, setFilters: t })
  }
) });
export {
  ya as Cell,
  et as ColumnType,
  Co as DATE_FORMAT,
  Il as DEFAULT_PAGE_SIZES,
  Jl as DataGrid,
  Ln as DataGridCheckbox,
  Mn as DataGridDefaultRenderersContext,
  lo as EXPANDER_COLUMN_KEY,
  ao as ExpanderToggle,
  xt as FilterType,
  Wa as Row,
  Ts as SELECTION_COLUMN_KEY,
  Ur as SELECT_COLUMN_KEY,
  On as SelectCellFormatter,
  ht as SelectColumn,
  Xi as ToggleGroup,
  ql as TreeDataGrid,
  Zl as VisibilityColumnChooser,
  gs as VisibilityMenu,
  co as clickBelongsToRow,
  Ql as clickExpandsRow,
  wl as convertDate,
  ls as defaultTheme,
  Is as detailAwareRowHeight,
  Rs as detailRowClass,
  Or as getStringToCompare,
  Vt as isDetailRow,
  Ui as renderCheckbox,
  Vr as renderHeaderCell,
  Ba as renderSortIcon,
  _a as renderSortPriority,
  Kl as renderTextEditor,
  ji as renderToggleGroup,
  qi as renderValue,
  re as taktikTheme,
  la as useHeaderRowSelection,
  Rl as usePagination,
  qr as useRowSelection,
  Es as withDetailRendering,
  Cs as withDetailRows
};
