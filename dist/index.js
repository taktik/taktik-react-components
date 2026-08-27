import { jsx as v, jsxs as ie, Fragment as bt } from "react/jsx-runtime";
import * as zt from "react";
import Me, { memo as $e, createContext as Dt, use as vt, useMemo as X, useCallback as q, useState as ae, useRef as De, useLayoutEffect as nt, useImperativeHandle as mi, useSyncExternalStore as Or, useEffectEvent as wi, useEffect as $t, useContext as rt } from "react";
import { flushSync as Sn } from "react-dom";
import ye from "@emotion/styled";
import yi from "@mui/material/Menu";
import Nr from "@mui/material/MenuItem";
import pi from "@mui/material/Divider";
import bi from "@mui/material/Checkbox";
import vi from "@mui/material/Box";
import Ci from "@mui/material/TextField";
import xi from "@mui/material/Autocomplete";
import ki from "@mui/material/TablePagination";
function Xt(e) {
  return e === !0 || e === "start";
}
function ze(e, t, n, r) {
  if (typeof e.colSpan != "function") return;
  const o = e.colSpan(r);
  if (!Number.isInteger(o) || o <= 1) return;
  const i = e.idx + o - 1;
  if (!(Xt(e.frozen) && i > t) && !(e.frozen === !1 && n !== -1 && i >= n))
    return o;
}
function Ar(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Di({ rows: e, topSummaryRows: t, bottomSummaryRows: n, rowIdx: r, mainHeaderRowIdx: o, lastStartFrozenColumnIndex: i, firstEndFrozenColumnIndex: a, column: s }) {
  const l = (t == null ? void 0 : t.length) ?? 0;
  if (r === o) return ze(s, i, a, { type: "HEADER" });
  if (t && r > o && r <= l + o) return ze(s, i, a, {
    type: "SUMMARY",
    row: t[r + l]
  });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return ze(s, i, a, {
      type: "ROW",
      row: c
    });
  }
  if (n) return ze(s, i, a, {
    type: "SUMMARY",
    row: n[r - e.length]
  });
}
function Si({ moveUp: e, moveNext: t, cellNavigationMode: n, columns: r, colSpanColumns: o, rows: i, topSummaryRows: a, bottomSummaryRows: s, minRowIdx: l, mainHeaderRowIdx: c, maxRowIdx: g, activePosition: { idx: f, rowIdx: C }, nextPosition: p, nextPositionIsCellInActiveBounds: d, lastStartFrozenColumnIndex: b, firstEndFrozenColumnIndex: m }) {
  let { idx: u, rowIdx: h } = p;
  const S = r.length, T = (k) => {
    for (const A of o) {
      const z = A.idx;
      if (z > u) break;
      const N = Di({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: h,
        mainHeaderRowIdx: c,
        lastStartFrozenColumnIndex: b,
        firstEndFrozenColumnIndex: m,
        column: A
      });
      if (N && u > z && u < N + z) {
        u = z + (k ? N : 0);
        break;
      }
    }
  }, M = (k) => k.level + c, D = () => {
    if (t) {
      let { parent: k } = r[u];
      for (; k !== void 0; ) {
        const A = M(k);
        if (h === A) {
          u = k.idx + k.colSpan;
          break;
        }
        ({ parent: k } = k);
      }
    } else if (e) {
      let { parent: k } = r[u], A = !1;
      for (; k !== void 0; ) {
        const z = M(k);
        if (h >= z) {
          u = k.idx, h = z, A = !0;
          break;
        }
        ({ parent: k } = k);
      }
      A || (u = f, h = C);
    }
  };
  if (d && (T(t), h < c && D()), n === "CHANGE_ROW" && (u === S ? h !== g && (u = 0, h += 1) : u === -1 && (h !== l && (h -= 1, u = S - 1), T(!1))), h < c && u > -1 && u < S) {
    let { parent: k } = r[u];
    const A = h;
    for (h = c; k !== void 0; ) {
      const z = M(k);
      z >= A && (h = z, u = k.idx), { parent: k } = k;
    }
  }
  return {
    idx: u,
    rowIdx: h
  };
}
function Ti({ maxColIdx: e, minRowIdx: t, maxRowIdx: n, activePosition: { rowIdx: r, idx: o }, shiftKey: i }) {
  return i ? o === 0 && r === t : o === e && r === n;
}
function Pi(e) {
  e.stopPropagation();
}
function Bt(e, t = "instant") {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest",
    behavior: t
  });
}
function Ei(e) {
  return e.querySelector('& > [role="row"][tabindex="0"]');
}
function Fr(e) {
  return e.querySelector('& > [role="row"] > [tabindex="0"]');
}
function Hr(e, t) {
  e !== null && (t && Bt(e), e.focus({ preventScroll: !0 }));
}
function Ii(e) {
  Hr(Ei(e), !0);
}
function Lr(e, t = !0) {
  Hr(Fr(e), t);
}
function Tn(e) {
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
const Ri = /* @__PURE__ */ new Set([
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
function Pn(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
const Mi = 86;
function Oi(e, t) {
  return Pn(e) && (e.keyCode !== Mi || t) ? !1 : !Ri.has(e.key);
}
function Ni({ key: e, target: t }) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
function En(e) {
  const t = e === "rtl";
  return {
    leftKey: t ? "ArrowRight" : "ArrowLeft",
    rightKey: t ? "ArrowLeft" : "ArrowRight"
  };
}
const Ai = "rdg-7-0-0-beta-60-fa71d63e";
function Fi(e) {
  return e.map(({ key: t, idx: n, minWidth: r, maxWidth: o }) => /* @__PURE__ */ v("div", {
    className: Ai,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
const zr = "rdg-cell rdg-7-0-0-beta-60-85c48527", Wr = "rdg-7-0-0-beta-60-203d9925", Hi = `rdg-cell-frozen-start ${Wr}`, Li = `rdg-cell-frozen-end ${Wr}`, zi = "rdg-cell-drag-handle rdg-7-0-0-beta-60-bfba19bc";
function Yr(e, t, n) {
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
    insetInlineStart: Xt(e.frozen) ? `var(--rdg-frozen-start-${e.idx})` : void 0,
    insetInlineEnd: e.frozen === "end" ? `var(--rdg-frozen-end-${e.idx + t - 1})` : void 0
  };
}
function We(...e) {
  let t = "";
  for (const n of e) typeof n == "string" && (t += ` ${n}`);
  return t.slice(1);
}
function tt(e, ...t) {
  return We(zr, Xt(e.frozen) && Hi, e.frozen === "end" && Li, ...t);
}
const { min: Ct, max: _t, floor: sr, abs: Wi } = Math;
function wt(e) {
  if (typeof e != "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function In(e, { minWidth: t, maxWidth: n }) {
  return e = _t(e, t), typeof n == "number" && n >= t ? Ct(e, n) : e;
}
function $r(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Wt = {
  idx: -1,
  rowIdx: Number.NEGATIVE_INFINITY,
  mode: "ACTIVE"
};
function Yi({ gridRef: e, columns: t, rows: n, isTreeGrid: r, maxColIdx: o, minRowIdx: i, maxRowIdx: a, setDraggedOverRowIdx: s }) {
  var S;
  const [l, c] = ae(Wt), [g, f] = ae(null), C = De(null);
  function p({ idx: T, rowIdx: M }) {
    const D = r && T === -1, k = T >= 0 && T <= o, A = M >= i && M <= a, z = M >= 0 && M < n.length, N = D && A, U = D && z, Y = k && A, B = k && z;
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
    return t[u.idx];
  }
  function m() {
    if (!h.isPositionInViewport) throw new Error("No row for active position");
    return n[u.rowIdx];
  }
  let { resolvedActivePosition: u, validatedPosition: h } = d(l);
  if (!h.isPositionInActiveBounds && u !== Wt)
    c(Wt), s(void 0), { resolvedActivePosition: u, validatedPosition: h } = d(Wt);
  else if (u.mode === "EDIT" && (((S = b().editorOptions) == null ? void 0 : S.closeOnExternalRowChange) ?? !0) && m() !== u.originalRow) {
    const T = {
      idx: u.idx,
      rowIdx: u.rowIdx,
      mode: "ACTIVE"
    };
    c(T), f(null), { resolvedActivePosition: u, validatedPosition: h } = d(T);
  }
  return nt(() => {
    g !== null && g !== C.current && (C.current = g, g.idx === -1 ? Ii(e.current) : Lr(e.current));
  }, [g, e]), {
    activePosition: u,
    setActivePosition: c,
    setPositionToFocus: f,
    activePositionIsInActiveBounds: h.isPositionInActiveBounds,
    activePositionIsInViewport: h.isPositionInViewport,
    activePositionIsRow: h.isRowInActiveBounds,
    activePositionIsCellInViewport: h.isCellInViewport,
    validatePosition: p,
    getActiveColumn: b,
    getActiveRow: m
  };
}
const $i = "rdg-checkbox-input rdg-7-0-0-beta-60-3b807ead";
function Bi({ onChange: e, indeterminate: t, ...n }) {
  function r(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ v("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: $i,
    onChange: r,
    ...n
  });
}
const _i = "rdg-group-cell-content rdg-7-0-0-beta-60-07919382", Ui = "rdg-caret rdg-7-0-0-beta-60-02a50147";
function Vi(e) {
  return /* @__PURE__ */ v(Gi, { ...e });
}
function Gi({ groupKey: e, isExpanded: t, tabIndex: n, toggleGroup: r }) {
  function o({ key: i }) {
    i === "Enter" && r();
  }
  return /* @__PURE__ */ ie("span", {
    className: _i,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ v("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Ui,
      "aria-hidden": !0,
      children: /* @__PURE__ */ v("path", { d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7" })
    })]
  });
}
function ji(e) {
  var t;
  return (t = e.row) == null ? void 0 : t[e.column.key];
}
const Rn = Dt(void 0);
Rn.displayName = "DataGridDefaultRenderersContext";
function St() {
  return vt(Rn);
}
function Mn({ value: e, tabIndex: t, indeterminate: n, disabled: r, onChange: o, "aria-label": i, "aria-labelledby": a }) {
  const s = St().renderCheckbox;
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
const Br = "rdg-select-column";
function Xi({ tabIndex: e }) {
  const { isIndeterminate: t, isRowSelected: n, onRowSelectionChange: r } = sa();
  return /* @__PURE__ */ v(Mn, {
    "aria-label": "Select All",
    tabIndex: e,
    indeterminate: t,
    value: n,
    onChange: (o) => {
      r({ checked: t ? !1 : o });
    }
  });
}
function qi({ row: e, tabIndex: t }) {
  const { isRowSelectionDisabled: n, isRowSelected: r, onRowSelectionChange: o } = jr();
  return /* @__PURE__ */ v(Mn, {
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
function Ki({ row: e, tabIndex: t }) {
  const { isRowSelected: n, onRowSelectionChange: r } = jr();
  return /* @__PURE__ */ v(Mn, {
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
  key: Br,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ v(Xi, { ...e });
  },
  renderCell(e) {
    return /* @__PURE__ */ v(qi, { ...e });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ v(Ki, { ...e });
  }
}, Qi = "rdg-7-0-0-beta-60-56a248e4", Zi = "rdg-header-sort-name rdg-7-0-0-beta-60-7fad8c83";
function _r({ column: e, sortDirection: t, priority: n }) {
  return e.sortable ? /* @__PURE__ */ v(Ji, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Ji({ sortDirection: e, priority: t, children: n }) {
  const r = St().renderSortStatus;
  return /* @__PURE__ */ ie("span", {
    className: Qi,
    children: [/* @__PURE__ */ v("span", {
      className: Zi,
      children: n
    }), /* @__PURE__ */ v("span", { children: r({
      sortDirection: e,
      priority: t
    }) })]
  });
}
const ea = "auto", ta = 50;
function na({ rawColumns: e, defaultColumnOptions: t, getColumnWidth: n, viewportWidth: r, scrollLeft: o, enableVirtualization: i }) {
  const a = (t == null ? void 0 : t.width) ?? ea, s = (t == null ? void 0 : t.minWidth) ?? ta, l = (t == null ? void 0 : t.maxWidth) ?? void 0, c = (t == null ? void 0 : t.renderCell) ?? ji, g = (t == null ? void 0 : t.renderHeaderCell) ?? _r, f = (t == null ? void 0 : t.sortable) ?? !1, C = (t == null ? void 0 : t.resizable) ?? !1, p = (t == null ? void 0 : t.draggable) ?? !1, { columns: d, colSpanColumns: b, lastStartFrozenColumnIndex: m, firstEndFrozenColumnIndex: u, headerRowsCount: h } = X(() => {
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
          maxWidth: J.maxWidth ?? l,
          sortable: J.sortable ?? f,
          resizable: J.resizable ?? C,
          draggable: J.draggable ?? p,
          renderCell: J.renderCell ?? c,
          renderHeaderCell: J.renderHeaderCell ?? g
        }), Xt(se) && N++, $ > Y && (Y = $);
      }
    }
    B.sort((E, $) => E.key === "rdg-select-column" ? -1 : $.key === "rdg-select-column" ? 1 : (E.frozen === "end" ? 2 : E.frozen === !1 ? 1 : 0) - ($.frozen === "end" ? 2 : $.frozen === !1 ? 1 : 0));
    const H = [];
    return B.forEach((E, $) => {
      E.idx = $, Ur(E, $, 0), E.colSpan != null && H.push(E), E.frozen === "end" && U === -1 && (U = $);
    }), {
      columns: B,
      colSpanColumns: H,
      lastStartFrozenColumnIndex: N,
      firstEndFrozenColumnIndex: U,
      headerRowsCount: Y
    };
  }, [
    e,
    a,
    s,
    l,
    c,
    g,
    C,
    f,
    p
  ]), { templateColumns: S, layoutCssVars: T, totalStartFrozenColumnWidth: M, totalEndFrozenColumnWidth: D, columnMetrics: k } = X(() => {
    const N = /* @__PURE__ */ new Map();
    let U = 0, Y = 0, B = 0;
    const ee = [];
    for (const E of d) {
      let $ = n(E);
      typeof $ == "number" ? $ = In($, E) : $ = E.minWidth, ee.push(`${$}px`), N.set(E, {
        width: $,
        left: U
      }), U += $;
    }
    if (m !== -1) {
      const E = N.get(d[m]);
      Y = E.left + E.width;
    }
    const H = {};
    for (let E = 0; E <= m; E++) {
      const $ = d[E];
      H[`--rdg-frozen-start-${$.idx}`] = `${N.get($).left}px`;
    }
    if (u !== -1) {
      const E = d[d.length - 1], $ = N.get(E), oe = $.left + $.width;
      B = oe - N.get(d[u]).left;
      for (let J = u; J < d.length; J++) {
        const se = d[J], ce = N.get(se);
        H[`--rdg-frozen-end-${se.idx}`] = `${oe - (ce.left + ce.width)}px`;
      }
    }
    return {
      templateColumns: ee,
      layoutCssVars: H,
      totalStartFrozenColumnWidth: Y,
      totalEndFrozenColumnWidth: B,
      columnMetrics: N
    };
  }, [
    n,
    d,
    m,
    u
  ]), [A, z] = X(() => {
    if (!i) return [0, d.length - 1];
    const N = o + M, U = o + r - D, Y = d.length - 1, B = Ct(m + 1, Y);
    if (N >= U) return [B, B];
    let ee = B;
    for (; ee < Y; ) {
      const { left: E, width: $ } = k.get(d[ee]);
      if (E + $ > N) break;
      ee++;
    }
    let H = ee;
    for (; H < Y; ) {
      const { left: E, width: $ } = k.get(d[H]);
      if (E + $ >= U) break;
      H++;
    }
    return [_t(B, ee - 1), Ct(Y, H + 1)];
  }, [
    k,
    d,
    m,
    o,
    M,
    D,
    r,
    i
  ]);
  return {
    columns: d,
    colSpanColumns: b,
    colOverscanStartIdx: A,
    colOverscanEndIdx: z,
    templateColumns: S,
    layoutCssVars: T,
    headerRowsCount: h,
    lastStartFrozenColumnIndex: m,
    firstEndFrozenColumnIndex: u,
    totalStartFrozenColumnWidth: M,
    totalEndFrozenColumnWidth: D
  };
}
function Ur(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const { parent: r } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Ur(r, t, n - 1);
  }
}
function ra(e, t, n, r, o, i, a, s, l) {
  const [c, g] = ae(null), [f, C] = ae(null), [p, d] = ae(o), b = e.length === t.length, m = b && o !== p, u = [...n], h = [];
  for (const { key: D, idx: k, width: A } of t) {
    const z = i.get(D);
    D === (c == null ? void 0 : c.key) ? (u[k] = c.width === "max-content" ? c.width : `${c.width}px`, h.push(D)) : typeof A == "string" && (z == null ? void 0 : z.type) !== "resized" && (m || (f == null ? void 0 : f.has(D)) === !0 || z === void 0) && (u[k] = A, h.push(D));
  }
  const S = u.join(" ");
  nt(T);
  function T() {
    var A, z;
    if (d(o), h.length === 0) return;
    const D = new Map(i);
    let k = !1;
    for (const N of h) {
      const U = cn(r, N);
      k || (k = U !== ((A = i.get(N)) == null ? void 0 : A.width)), U === void 0 ? D.delete(N) : D.set(N, {
        type: "measured",
        width: U
      });
    }
    if (c !== null) {
      const N = c.key, U = (z = i.get(N)) == null ? void 0 : z.width, Y = cn(r, N);
      Y !== void 0 && U !== Y && (k = !0, D.set(N, {
        type: "resized",
        width: Y
      })), g(null);
    }
    k && a(D);
  }
  function M(D, k) {
    var z;
    const { key: A } = D;
    if (Sn(() => {
      var N;
      if (b) {
        const U = /* @__PURE__ */ new Set();
        for (const { key: Y, width: B } of t) A !== Y && typeof B == "string" && ((N = i.get(Y)) == null ? void 0 : N.type) !== "resized" && U.add(Y);
        C(U);
      }
      g({
        key: A,
        width: k
      }), l(typeof k == "number");
    }), C(null), s) {
      const N = (z = i.get(A)) == null ? void 0 : z.width, U = typeof k == "number" ? k : cn(r, A);
      U !== void 0 && U !== N && s(D, U);
    }
  }
  return {
    gridTemplateColumns: S,
    handleColumnResize: M
  };
}
function cn(e, t) {
  var r, o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`;
  return (o = (r = e.current) == null ? void 0 : r.querySelector(n)) == null ? void 0 : o.getBoundingClientRect().width;
}
const Vr = {
  inlineSize: 1,
  blockSize: 1
}, yt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new Map(), Qe = globalThis.ResizeObserver == null ? null : new ResizeObserver(oa);
function oa(e) {
  for (const t of e) {
    const n = t.target;
    vn.has(n) && Gr(vn.get(n), t.contentBoxSize[0]);
  }
}
function Gr(e, t) {
  var n;
  if (yt.has(e)) {
    const r = yt.get(e);
    if (r.inlineSize === t.inlineSize && r.blockSize === t.blockSize) return;
  }
  yt.set(e, t), (n = Cn.get(e)) == null || n();
}
function ia() {
  return Vr;
}
function aa(e) {
  const { inlineSize: t, blockSize: n } = Or(q((r) => (Cn.set(e, r), () => {
    Cn.delete(e);
  }), [e]), q(() => yt.get(e) ?? Vr, [e]), ia);
  return nt(() => {
    const r = e.current;
    return vn.set(r, e), Qe == null || Qe.observe(r), yt.has(e) || Gr(e, {
      inlineSize: r.clientWidth,
      blockSize: r.clientHeight
    }), () => {
      Qe == null || Qe.unobserve(r);
    };
  }, [e]), [t, n];
}
function he(e) {
  const t = De(e);
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
const qt = Dt(void 0);
qt.displayName = "RowSelectionContext";
const On = Dt(void 0);
On.displayName = "RowSelectionChangeContext";
function jr() {
  const e = vt(qt), t = vt(On);
  if (e === void 0 || t === void 0) throw new Error("useRowSelection must be used within renderCell");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Nn = Dt(void 0);
Nn.displayName = "HeaderRowSelectionContext";
const An = Dt(void 0);
An.displayName = "HeaderRowSelectionChangeContext";
function sa() {
  const e = vt(Nn), t = vt(An);
  if (e === void 0 || t === void 0) throw new Error("useHeaderRowSelection must be used within renderHeaderCell");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const xn = {
  scrollTop: 0,
  scrollLeft: 0
};
function ca() {
  return xn;
}
const ln = /* @__PURE__ */ new WeakMap();
function la(e) {
  return Or(q((t) => {
    if (e.current === null) return () => {
    };
    const n = e.current;
    r();
    function r() {
      const { scrollTop: i } = n, a = Wi(n.scrollLeft), s = ln.get(e) ?? xn;
      return s.scrollTop === i && s.scrollLeft === a ? !1 : (ln.set(e, {
        scrollTop: i,
        scrollLeft: a
      }), !0);
    }
    function o() {
      r() && t();
    }
    return n.addEventListener("scroll", o), () => n.removeEventListener("scroll", o);
  }, [e]), q(() => ln.get(e) ?? xn, [e]), ca);
}
function da({ gridRef: e }) {
  const [t, n] = ae(null);
  return {
    setScrollToPosition: n,
    scrollToPositionElement: t && /* @__PURE__ */ v("div", {
      ref: (r) => {
        if (r === null) return;
        const o = e.current, { scrollLeft: i, scrollTop: a } = o;
        Bt(r, "auto"), o.scrollLeft === i && o.scrollTop === a && n(null);
      },
      style: {
        gridColumn: t.idx == null ? "1/-1" : t.idx + 1,
        gridRow: t.rowIdx == null ? "1/-1" : t.rowIdx + 1
      }
    })
  };
}
function ua({ columns: e, colSpanColumns: t, rows: n, topSummaryRows: r, bottomSummaryRows: o, colOverscanStartIdx: i, colOverscanEndIdx: a, lastStartFrozenColumnIndex: s, firstEndFrozenColumnIndex: l, rowOverscanStartIdx: c, rowOverscanEndIdx: g }) {
  const f = X(() => {
    if (i === 0) return 0;
    function* m() {
      if (yield { type: "HEADER" }, r != null) for (const u of r) yield {
        type: "SUMMARY",
        row: u
      };
      for (let u = c; u <= g; u++) yield {
        type: "ROW",
        row: n[u]
      };
      if (o != null) for (const u of o) yield {
        type: "SUMMARY",
        row: u
      };
    }
    for (const u of t) {
      if (u.frozen) continue;
      const h = u.idx;
      if (h >= i) break;
      for (const S of m()) {
        const T = ze(u, s, l, S);
        if (T !== void 0 && h + T > i) return h;
      }
    }
    return i;
  }, [
    c,
    g,
    n,
    r,
    o,
    i,
    s,
    l,
    t
  ]), C = l > -1 ? Math.min(a, l - 1) : a, p = q(function* (m) {
    for (let h = 0; h <= s; h++) yield e[h];
    const u = l > -1 ? l - 1 : e.length - 1;
    if (s < u) {
      m > s && m < f && (yield e[m]);
      for (let h = f; h <= C; h++) yield e[h];
      m > C && m <= u && (yield e[m]);
    }
    if (l > -1) for (let h = l; h < e.length; h++) yield e[h];
  }, [
    f,
    C,
    e,
    s,
    l
  ]), d = q(function* (m = -1, u) {
    const h = p(m);
    for (const S of h) {
      let T = u && ze(S, s, l, u);
      for (yield [
        S,
        S.idx === m,
        T
      ]; T !== void 0 && T > 1; )
        h.next(), T--;
    }
  }, [
    p,
    s,
    l
  ]), b = q(function* (m = -1, u) {
    if (m >= 0 && m < e.length) {
      const h = e[m];
      yield [
        h,
        !0,
        u && ze(h, s, l, u)
      ];
    }
  }, [
    e,
    s,
    l
  ]);
  return {
    viewportColumns: X(() => p(-1).toArray(), [p]),
    iterateOverViewportColumnsForRow: d,
    iterateOverViewportColumnsForRowOutsideOfViewport: b
  };
}
function fa({ rows: e, rowHeight: t, clientHeight: n, scrollTop: r, enableVirtualization: o }) {
  const { totalRowHeight: i, gridTemplateRows: a, getRowTop: s, getRowHeight: l, findRowIdx: c } = X(() => {
    if (typeof t == "number") return {
      totalRowHeight: t * e.length,
      gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
      getRowTop: (h) => h * t,
      getRowHeight: () => t,
      findRowIdx: (h) => sr(h / t)
    };
    let C = 0, p = "", d = null, b = 0;
    const m = e.map((h, S) => {
      const T = t(h), M = {
        top: C,
        height: T
      };
      return C += T, d === null ? (d = T, b = 1) : d === T ? b++ : (b > 1 ? p += `repeat(${b}, ${d}px) ` : p += `${d}px `, d = T, b = 1), S === e.length - 1 && (b > 1 ? p += `repeat(${b}, ${d}px)` : p += `${d}px`), M;
    }), u = (h) => _t(0, Ct(e.length - 1, h));
    return {
      totalRowHeight: C,
      gridTemplateRows: p,
      getRowTop: (h) => m[u(h)].top,
      getRowHeight: (h) => m[u(h)].height,
      findRowIdx(h) {
        let S = 0, T = m.length - 1;
        for (; S <= T; ) {
          const M = S + sr((T - S) / 2), D = m[M].top;
          if (D === h) return M;
          if (D < h ? S = M + 1 : D > h && (T = M - 1), S > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let g = 0, f = e.length - 1;
  if (o) {
    const p = c(r), d = c(r + n);
    g = _t(0, p - 4), f = Ct(e.length - 1, d + 4);
  }
  return {
    rowOverscanStartIdx: g,
    rowOverscanEndIdx: f,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: l,
    findRowIdx: c
  };
}
const ha = "rdg-cell-dragged-over rdg-7-0-0-beta-60-35ccb4c8";
function ga({ column: e, colSpan: t, isCellActive: n, isDraggedOver: r, row: o, rowIdx: i, className: a, onMouseDown: s, onCellMouseDown: l, onClick: c, onCellClick: g, onDoubleClick: f, onCellDoubleClick: C, onContextMenu: p, onCellContextMenu: d, onRowChange: b, setActivePosition: m, style: u, ...h }) {
  const { tabIndex: S, childTabIndex: T, onFocus: M } = Tt(n), { cellClass: D } = e;
  a = tt(e, r && ha, typeof D == "function" ? D(o) : D, a);
  const k = Ar(e, o);
  function A(H = !1) {
    m({
      rowIdx: i,
      idx: e.idx
    }, { enableEditor: H });
  }
  function z(H, E) {
    let $ = !1;
    if (E) {
      const oe = Tn(H);
      E({
        rowIdx: i,
        row: o,
        column: e,
        setActivePosition: A
      }, oe), $ = oe.isGridDefaultPrevented();
    }
    return $;
  }
  function N(H) {
    s == null || s(H), z(H, l) || A();
  }
  function U(H) {
    c == null || c(H), z(H, g);
  }
  function Y(H) {
    f == null || f(H), z(H, C) || A(!0);
  }
  function B(H) {
    p == null || p(H), z(H, d);
  }
  function ee(H) {
    b(e, i, H);
  }
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !k || void 0,
    tabIndex: S,
    className: a,
    style: {
      ...ot(e, t),
      ...u
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
const ma = $e(ga);
function wa(e, t) {
  return /* @__PURE__ */ v(ma, { ...t }, e);
}
const ya = typeof scheduler == "object" && typeof scheduler.postTask == "function", pa = "rdg-7-0-0-beta-60-46f9ea88";
function ba({ column: e, colSpan: t, row: n, rowIdx: r, onRowChange: o, closeEditor: i, onKeyDown: a, navigate: s }) {
  var S, T, M;
  const l = De(void 0), c = De(void 0), g = De(void 0), f = ((S = e.editorOptions) == null ? void 0 : S.commitOnOutsideClick) ?? !0, C = wi(() => {
    b(!0, !1);
  });
  nt(() => {
    if (!f) return;
    function D(A) {
      if (l.current = A, ya) {
        const z = new AbortController(), { signal: N } = z;
        c.current = z, scheduler.postTask(C, {
          priority: "user-blocking",
          signal: N
        }).catch(() => {
        });
      } else g.current = requestAnimationFrame(C);
    }
    function k(A) {
      l.current === A && C();
    }
    return window.addEventListener("mousedown", D, { capture: !0 }), window.addEventListener("mousedown", k), () => {
      window.removeEventListener("mousedown", D, { capture: !0 }), window.removeEventListener("mousedown", k), p();
    };
  }, [f]);
  function p() {
    l.current = void 0, c.current !== void 0 && (c.current.abort(), c.current = void 0), g.current !== void 0 && (cancelAnimationFrame(g.current), g.current = void 0);
  }
  function d(D) {
    if (a) {
      const k = Tn(D);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(D);
        },
        onClose: b
      }, k), k.isGridDefaultPrevented()) return;
    }
    D.key === "Escape" ? b() : D.key === "Enter" ? b(!0) : Ni(D) && s(D);
  }
  function b(D = !1, k = !0) {
    D ? o(n, !0, k) : i(k);
  }
  function m(D, k = !1) {
    o(D, k, k);
  }
  const { cellClass: u } = e, h = tt(e, "rdg-editor-container", !((T = e.editorOptions) != null && T.displayCellContent) && pa, typeof u == "function" ? u(n) : u);
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
function va({ column: e, rowIdx: t, isCellActive: n, setPosition: r }) {
  const { tabIndex: o, onFocus: i } = Tt(n), { colSpan: a } = e, s = $r(e, t), l = e.idx + 1;
  function c() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ v("div", {
    role: "columnheader",
    "aria-colindex": l,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": n,
    tabIndex: o,
    className: We(zr, e.headerCellClass),
    style: {
      ...Yr(e, t, s),
      gridColumnStart: l,
      gridColumnEnd: l + a
    },
    onFocus: i,
    onMouseDown: c,
    children: e.name
  });
}
const Ca = "rdg-7-0-0-beta-60-2a7e240d", xa = "rdg-cell-resizable rdg-7-0-0-beta-60-1893dc0f", ka = "rdg-resize-handle rdg-7-0-0-beta-60-4e60db91", Da = "rdg-cell-draggable", Xr = "rdg-7-0-0-beta-60-f2d18717", Sa = `rdg-cell-dragging ${Xr}`, Ta = `rdg-cell-drag-over ${Xr}`, Pa = "rdg-7-0-0-beta-60-3d12c7ae";
function Ea({ column: e, colSpan: t, rowIdx: n, isCellActive: r, onColumnResize: o, onColumnResizeEnd: i, onColumnsReorder: a, sortColumns: s, onSortColumnsChange: l, setPosition: c, shouldFocusGrid: g, direction: f, draggedColumnKey: C, setDraggedColumnKey: p }) {
  const [d, b] = ae(!1), m = De(null), u = C === e.key, h = $r(e, n), { tabIndex: S, childTabIndex: T, onFocus: M } = Tt(g || r), D = s == null ? void 0 : s.findIndex((x) => x.columnKey === e.key), k = D !== void 0 && D > -1 ? s[D] : void 0, A = k == null ? void 0 : k.direction, z = k !== void 0 && s.length > 1 ? D + 1 : void 0, N = A && !z ? A === "ASC" ? "ascending" : "descending" : void 0, { sortable: U, resizable: Y, draggable: B } = e, ee = tt(e, e.headerCellClass, U && Ca, Y && xa, B && Da, u && Sa, d && Ta);
  function H(x) {
    if (l == null) return;
    const { sortDescendingFirst: F } = e;
    if (k === void 0) {
      const _ = {
        columnKey: e.key,
        direction: F ? "DESC" : "ASC"
      };
      l(s && x ? [...s, _] : [_]);
    } else {
      let _;
      if ((F === !0 && A === "DESC" || F !== !0 && A === "ASC") && (_ = {
        columnKey: e.key,
        direction: A === "ASC" ? "DESC" : "ASC"
      }), x) {
        const Z = [...s];
        _ ? Z[D] = _ : Z.splice(D, 1), l(Z);
      } else l(_ ? [_] : []);
    }
  }
  function E(x) {
    M == null || M(x), g && c({
      idx: 0,
      rowIdx: n
    });
  }
  function $() {
    c({
      idx: e.idx,
      rowIdx: n
    });
  }
  function oe(x) {
    U && H(x.ctrlKey || x.metaKey);
  }
  function J(x) {
    const { key: F } = x;
    if (U && (F === " " || F === "Enter"))
      x.preventDefault(), H(x.ctrlKey || x.metaKey);
    else if (Y && Pn(x) && (F === "ArrowLeft" || F === "ArrowRight")) {
      x.stopPropagation();
      const { width: _ } = x.currentTarget.getBoundingClientRect(), { leftKey: Z } = En(f), G = In(_ + (F === Z ? -10 : 10), e);
      G !== _ && o(e, G);
    }
  }
  function se(x) {
    Sn(() => {
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
    cr(x) && b(!0);
  }
  function Oe(x) {
    cr(x) && b(!1);
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
  const I = {
    ...Yr(e, n, h),
    ...ot(e, t)
  }, R = e.renderHeaderCell({
    column: e,
    sortDirection: A,
    priority: z,
    tabIndex: T
  });
  return /* @__PURE__ */ ie(bt, { children: [u && /* @__PURE__ */ v("div", {
    ref: m,
    style: I,
    className: tt(e, e.headerCellClass, Pa),
    children: R
  }), /* @__PURE__ */ ie("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": h,
    "aria-selected": r,
    "aria-sort": N,
    tabIndex: S,
    className: ee,
    style: I,
    onMouseDown: $,
    onFocus: E,
    onClick: oe,
    onKeyDown: J,
    ...le,
    ...pe,
    children: [R, Y && /* @__PURE__ */ v(Ia, {
      direction: f,
      column: e,
      onColumnResize: o,
      onColumnResizeEnd: i
    })]
  })] });
}
function Ia({ direction: e, column: t, onColumnResize: n, onColumnResizeEnd: r }) {
  const o = De(void 0), i = e === "rtl";
  function a(g) {
    if (g.pointerType === "mouse" && g.button !== 0) return;
    g.preventDefault();
    const { currentTarget: f, pointerId: C } = g;
    f.setPointerCapture(C);
    const { right: p, left: d } = f.parentElement.getBoundingClientRect();
    o.current = i ? g.clientX - d : p - g.clientX;
  }
  function s(g) {
    const f = o.current;
    if (f === void 0) return;
    const { width: C, right: p, left: d } = g.currentTarget.parentElement.getBoundingClientRect();
    let b = i ? p + f - g.clientX : g.clientX + f - d;
    b = In(b, t), C > 0 && b !== C && n(t, b);
  }
  function l() {
    r(), o.current = void 0;
  }
  function c() {
    n(t, "max-content");
  }
  return /* @__PURE__ */ v("div", {
    "aria-hidden": !0,
    className: ka,
    onClick: Pi,
    onPointerDown: a,
    onPointerMove: s,
    onLostPointerCapture: l,
    onDoubleClick: c
  });
}
function cr(e) {
  return !e.currentTarget.contains(e.relatedTarget);
}
const Fn = "rdg-row rdg-7-0-0-beta-60-3c083f1b", Ra = "rdg-top-summary-row", Ma = "rdg-bottom-summary-row", qr = "rdg-header-row rdg-7-0-0-beta-60-0dbd5994";
function Oa({ headerRowClass: e, rowIdx: t, iterateOverViewportColumnsForRow: n, onColumnResize: r, onColumnResizeEnd: o, onColumnsReorder: i, sortColumns: a, onSortColumnsChange: s, activeCellIdx: l, setPosition: c, shouldFocusGrid: g, direction: f }) {
  const [C, p] = ae(), d = l === -1, b = n(l, { type: "HEADER" }).map(([m, u, h], S) => /* @__PURE__ */ v(Ea, {
    column: m,
    colSpan: h,
    rowIdx: t,
    isCellActive: u,
    onColumnResize: r,
    onColumnResizeEnd: o,
    onColumnsReorder: i,
    onSortColumnsChange: s,
    sortColumns: a,
    setPosition: c,
    shouldFocusGrid: g && S === 0,
    direction: f,
    draggedColumnKey: C,
    setDraggedColumnKey: p
  }, m.key)).toArray();
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": t,
    className: We(qr, d && "rdg-row-active", e),
    children: b
  });
}
var Na = $e(Oa);
function Aa({ rowIdx: e, level: t, iterateOverViewportColumnsForRow: n, activeCellIdx: r, setPosition: o }) {
  const i = [], a = /* @__PURE__ */ new Set();
  for (const [s, l] of n(r)) {
    if (s.parent === void 0) continue;
    let { parent: c } = s;
    for (; c.level > t && c.parent !== void 0; )
      ({ parent: c } = c);
    c.level === t && !a.has(c) && (a.add(c), i.push(/* @__PURE__ */ v(va, {
      column: c,
      rowIdx: e,
      isCellActive: l,
      setPosition: o
    }, c.idx)));
  }
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": e,
    className: qr,
    children: i
  });
}
var Fa = $e(Aa);
function Ha({ className: e, rowIdx: t, gridRowStart: n, activeCellIdx: r, isRowSelectionDisabled: o, isRowSelected: i, draggedOverCellIdx: a, row: s, iterateOverViewportColumnsForRow: l, activeCellEditor: c, isTreeGrid: g, onCellMouseDown: f, onCellClick: C, onCellDoubleClick: p, onCellContextMenu: d, rowClass: b, onRowChange: m, setActivePosition: u, style: h, ...S }) {
  const T = St().renderCell, M = r === -1;
  e = We(Fn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, M && "rdg-row-active", b == null ? void 0 : b(s, t), e);
  const D = l(r, {
    type: "ROW",
    row: s
  }).map(([k, A, z]) => A && c ? c : T(k.key, {
    column: k,
    colSpan: z,
    row: s,
    rowIdx: t,
    isDraggedOver: a === k.idx,
    isCellActive: A,
    onCellMouseDown: f,
    onCellClick: C,
    onCellDoubleClick: p,
    onCellContextMenu: d,
    onRowChange: m,
    setActivePosition: u
  })).toArray();
  return /* @__PURE__ */ v(qt, {
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
      ...S,
      children: D
    })
  });
}
const La = $e(Ha);
function Kr(e, t) {
  return /* @__PURE__ */ v(La, { ...t }, e);
}
const za = "rdg-sort-arrow rdg-7-0-0-beta-60-3d5115f3";
function Wa({ sortDirection: e, priority: t }) {
  return /* @__PURE__ */ ie(bt, { children: [Ya({ sortDirection: e }), $a({ priority: t })] });
}
function Ya({ sortDirection: e }) {
  return e === void 0 ? null : /* @__PURE__ */ v("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: za,
    "aria-hidden": !0,
    children: /* @__PURE__ */ v("path", { d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
  });
}
function $a({ priority: e }) {
  return e;
}
const Ba = "rdg rdg-7-0-0-beta-60-ccd2e5d9", _a = "rdg-viewport-dragging rdg-7-0-0-beta-60-e9b0e1c9", Qr = "rdg-7-0-0-beta-60-2e639f12", Ua = "rdg-7-0-0-beta-60-86aef152", Va = "rdg-7-0-0-beta-60-7689f238", Zr = `${Qr} ${Ua}`, Jr = `${Qr} ${Va}`, eo = "rdg-7-0-0-beta-60-487ac462", Ga = `${Zr} ${eo}`, ja = `${Jr} ${eo}`;
function Xa({ column: e, colSpan: t, row: n, rowIdx: r, isCellActive: o, setActivePosition: i }) {
  var C;
  const { tabIndex: a, childTabIndex: s, onFocus: l } = Tt(o), { summaryCellClass: c } = e, g = tt(e, typeof c == "function" ? c(n) : c);
  function f() {
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
    onMouseDown: f,
    onFocus: l,
    children: (C = e.renderSummaryCell) == null ? void 0 : C.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
var qa = $e(Xa);
const Ka = "rdg-summary-row rdg-7-0-0-beta-60-0b90c82c";
function Qa({ rowIdx: e, gridRowStart: t, row: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, setActivePosition: i, top: a, bottom: s, isTop: l, isTreeGrid: c, "aria-rowindex": g }) {
  const f = o === -1, C = r(o, {
    type: "SUMMARY",
    row: n
  }).map(([p, d, b]) => /* @__PURE__ */ v(qa, {
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
    tabIndex: c ? f ? 0 : -1 : void 0,
    className: We(Fn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Ka, l ? Ra : Ma, f && "rdg-row-active"),
    style: {
      gridRowStart: t,
      top: a,
      bottom: s
    },
    children: C
  });
}
var lr = $e(Qa);
function to(e) {
  const { ref: t, columns: n, rows: r, topSummaryRows: o, bottomSummaryRows: i, rowKeyGetter: a, onRowsChange: s, rowHeight: l, headerRowHeight: c, summaryRowHeight: g, columnWidths: f, onColumnWidthsChange: C, selectedRows: p, isRowSelectionDisabled: d, onSelectedRowsChange: b, sortColumns: m, onSortColumnsChange: u, defaultColumnOptions: h, onCellMouseDown: S, onCellClick: T, onCellDoubleClick: M, onCellContextMenu: D, onCellKeyDown: k, onActivePositionChange: A, onScroll: z, onColumnResize: N, onColumnsReorder: U, onFill: Y, onCellCopy: B, onCellPaste: ee, enableVirtualization: H, renderers: E, className: $, style: oe, rowClass: J, headerRowClass: se, direction: ce, role: Be, "aria-label": Te, "aria-labelledby": _e, "aria-description": Oe, "aria-describedby": le, "aria-rowcount": pe, "data-testid": I, "data-cy": R } = e, x = St(), F = Be ?? "grid", _ = l ?? 35, Z = c ?? (typeof _ == "number" ? _ : 35), G = g ?? (typeof _ == "number" ? _ : 35), fe = (E == null ? void 0 : E.renderRow) ?? (x == null ? void 0 : x.renderRow) ?? Kr, ge = (E == null ? void 0 : E.renderCell) ?? (x == null ? void 0 : x.renderCell) ?? wa, be = (E == null ? void 0 : E.renderSortStatus) ?? (x == null ? void 0 : x.renderSortStatus) ?? Wa, me = (E == null ? void 0 : E.renderCheckbox) ?? (x == null ? void 0 : x.renderCheckbox) ?? Bi, Pe = (E == null ? void 0 : E.noRowsFallback) ?? (x == null ? void 0 : x.noRowsFallback), ve = H ?? !0, Ce = ce ?? "ltr", W = De(null), { scrollTop: K, scrollLeft: de } = la(W), [Ee, it] = aa(W), [Yn, Kt] = ae(() => f ?? /* @__PURE__ */ new Map()), [$n, Bn] = ae(!1), [Qt, _n] = ae(!1), [Ne, Zt] = ae(void 0), [Ge, vo] = ae(-1), Jt = f != null && C != null && !$n, It = Jt ? f : Yn, Co = Jt ? (w) => {
    Kt(w), C(w);
  } : Kt, Un = q((w) => {
    var y;
    return ((y = It.get(w.key)) == null ? void 0 : y.width) ?? w.width;
  }, [It]), { columns: Ie, colSpanColumns: Vn, lastStartFrozenColumnIndex: je, firstEndFrozenColumnIndex: Ue, headerRowsCount: Ae, colOverscanStartIdx: xo, colOverscanEndIdx: ko, templateColumns: Do, layoutCssVars: So, totalStartFrozenColumnWidth: Gn, totalEndFrozenColumnWidth: jn } = na({
    rawColumns: n,
    defaultColumnOptions: h,
    getColumnWidth: Un,
    scrollLeft: de,
    viewportWidth: Ee,
    enableVirtualization: ve
  }), at = F === "treegrid", Re = (o == null ? void 0 : o.length) ?? 0, xe = (i == null ? void 0 : i.length) ?? 0, Xn = Re + xe, ke = Ae + Re, en = Ae - 1, Fe = -ke, Xe = r.length + xe - 1, tn = Fe + en, Rt = Ie.length - 1, Mt = Ae * Z, To = Xn * G, qe = it - Mt - To, nn = p != null && b != null, { leftKey: Po, rightKey: qn } = En(Ce), Kn = pe ?? Ae + r.length + Xn, Eo = {
    gridColumnStart: je + 2,
    insetInlineStart: Gn
  }, Io = {
    gridColumnStart: Ue + 1,
    gridColumnEnd: -1,
    insetInlineEnd: jn
  }, { activePosition: V, setActivePosition: st, setPositionToFocus: Qn, activePositionIsInActiveBounds: Ro, activePositionIsInViewport: rn, activePositionIsRow: Zn, activePositionIsCellInViewport: Ot, validatePosition: Nt, getActiveColumn: Ke, getActiveRow: ct } = Yi({
    gridRef: W,
    columns: Ie,
    rows: r,
    isTreeGrid: at,
    maxColIdx: Rt,
    minRowIdx: Fe,
    maxRowIdx: Xe,
    setDraggedOverRowIdx: Zt
  }), { setScrollToPosition: Mo, scrollToPositionElement: Oo } = da({ gridRef: W }), No = X(() => ({
    renderCheckbox: me,
    renderSortStatus: be,
    renderCell: ge
  }), [
    me,
    be,
    ge
  ]), Ao = X(() => {
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
  ]), { rowOverscanStartIdx: lt, rowOverscanEndIdx: dt, totalRowHeight: At, gridTemplateRows: Fo, getRowTop: Jn, getRowHeight: Ho, findRowIdx: on } = fa({
    rows: r,
    rowHeight: _,
    clientHeight: qe,
    scrollTop: K,
    enableVirtualization: ve
  }), { viewportColumns: er, iterateOverViewportColumnsForRow: ut, iterateOverViewportColumnsForRowOutsideOfViewport: Lo } = ua({
    columns: Ie,
    colSpanColumns: Vn,
    colOverscanStartIdx: xo,
    colOverscanEndIdx: ko,
    lastStartFrozenColumnIndex: je,
    firstEndFrozenColumnIndex: Ue,
    rowOverscanStartIdx: lt,
    rowOverscanEndIdx: dt,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), { gridTemplateColumns: zo, handleColumnResize: Wo } = ra(Ie, er, Do, W, Ee, It, Co, N, Bn), Yo = he(Wo), $o = he(ni), Bo = he(U), _o = he(u), Uo = he(S), Vo = he(T), Go = he(M), jo = he(D), Xo = he(Qo), qo = he(nr), Ko = he(Ft), an = he(ft), tr = he(ci);
  mi(t, () => ({
    element: W.current,
    scrollToCell({ idx: w, rowIdx: y }) {
      const P = w != null && w > je && (Ue === -1 || w < Ue) && w < Ie.length ? w : void 0, L = y != null && Nt({
        idx: 0,
        rowIdx: y
      }).isPositionInViewport ? y + ke : void 0;
      (P != null || L != null) && Mo({
        idx: P,
        rowIdx: L
      });
    },
    setActivePosition: ft
  }));
  function Qo(w) {
    if (!b) return;
    wt(a);
    const y = new Set(p);
    for (const P of r) {
      if ((d == null ? void 0 : d(P)) === !0) continue;
      const L = a(P);
      w.checked ? y.add(L) : y.delete(L);
    }
    b(y);
  }
  function nr(w) {
    if (!b) return;
    wt(a);
    const { row: y, checked: P, isShiftClick: L } = w;
    if ((d == null ? void 0 : d(y)) === !0) return;
    const O = new Set(p), j = a(y), ne = r.indexOf(y);
    if (vo(ne), P ? O.add(j) : O.delete(j), L && Ge !== -1 && Ge !== ne && Ge < r.length) {
      const [te, we] = Ge < ne ? [Ge, ne] : [ne, Ge];
      for (let He = te + 1; He < we; He++) {
        const sn = r[He];
        (d == null ? void 0 : d(sn)) !== !0 && (P ? O.add(a(sn)) : O.delete(a(sn)));
      }
    }
    b(O);
  }
  function Zo(w) {
    const { idx: y, rowIdx: P, mode: L } = V;
    if (L === "EDIT") return;
    if (k && rn) {
      const j = Tn(w);
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
          ir(w);
          break;
        default:
          ti(w);
          break;
      }
  }
  function Ft(w, y, P) {
    if (typeof s != "function" || P === r[y]) return;
    const L = r.with(y, P);
    s(L, {
      indexes: [y],
      column: w
    });
  }
  function rr() {
    V.mode === "EDIT" && Ft(Ke(), V.rowIdx, V.row);
  }
  function Jo(w) {
    Ot && (B == null || B({
      row: ct(),
      column: Ke()
    }, w));
  }
  function ei(w) {
    if (typeof ee != "function" || typeof s != "function" || !Ht(V)) return;
    const y = Ke(), P = ct(), L = ee({
      row: P,
      column: y
    }, w);
    Ft(y, V.rowIdx, L);
  }
  function ti(w) {
    if (!Ot) return;
    const y = ct(), { key: P, shiftKey: L } = w;
    if (nn && L && P === " ") {
      wt(a);
      const O = a(y);
      nr({
        row: y,
        checked: !p.has(O),
        isShiftClick: !1
      }), w.preventDefault();
      return;
    }
    Ht(V) && Oi(w, ee != null) && st(({ idx: O, rowIdx: j }) => ({
      idx: O,
      rowIdx: j,
      mode: "EDIT",
      row: y,
      originalRow: y
    }));
  }
  function ni() {
    $n && (C == null || C(It), Bn(!1));
  }
  function ri(w) {
    w.preventDefault(), !(w.pointerType === "mouse" && w.button !== 0) && (_n(!0), w.currentTarget.setPointerCapture(w.pointerId));
  }
  function oi(w) {
    const y = W.current, P = Mt + Re * G, L = K - P + w.clientY - y.getBoundingClientRect().top, O = on(L);
    Zt(O);
    const j = ke + O + 1;
    Bt(y.querySelector(`& > [aria-rowindex="${j}"] > [aria-colindex="${V.idx + 1}"]`));
  }
  function ii() {
    if (_n(!1), Ne === void 0) return;
    const { rowIdx: w } = V, [y, P] = w < Ne ? [w + 1, Ne + 1] : [Ne, w];
    or(y, P), Zt(void 0);
  }
  function ai() {
    Lr(W.current, !1);
  }
  function si(w) {
    w.stopPropagation(), or(V.rowIdx + 1, r.length);
  }
  function or(w, y) {
    if (s == null) return;
    const { idx: P } = V, L = Ke(), O = ct(), j = [...r], ne = [];
    for (let te = w; te < y; te++) if (Ht({
      rowIdx: te,
      idx: P
    })) {
      const we = Y({
        columnKey: L.key,
        sourceRow: O,
        targetRow: r[te]
      });
      we !== r[te] && (j[te] = we, ne.push(te));
    }
    ne.length > 0 && s(j, {
      indexes: ne,
      column: L
    });
  }
  function Ht(w) {
    return Nt(w).isCellInViewport && Ar(Ie[w.idx], r[w.rowIdx]);
  }
  function ft(w, y) {
    const { isPositionInActiveBounds: P } = Nt(w);
    if (!P) return;
    rr();
    const L = dr(V, w);
    if (y != null && y.enableEditor && Ht(w)) {
      const O = r[w.rowIdx];
      st({
        ...w,
        mode: "EDIT",
        row: O,
        originalRow: O
      });
    } else if (L) Bt(Fr(W.current));
    else {
      const O = {
        ...w,
        mode: "ACTIVE"
      };
      st(O), y != null && y.shouldFocus && Qn(O);
    }
    A && !L && A({
      rowIdx: w.rowIdx,
      row: r[w.rowIdx],
      column: Ie[w.idx]
    });
  }
  function ci({ idx: w, rowIdx: y }) {
    ft({
      rowIdx: Fe + y - 1,
      idx: w
    });
  }
  function li(w, y, P) {
    const { idx: L, rowIdx: O } = V;
    switch (w) {
      case "ArrowUp": {
        const j = O - 1;
        return {
          idx: L === -1 && j < -Re ? 0 : L,
          rowIdx: j
        };
      }
      case "ArrowDown":
        return {
          idx: L,
          rowIdx: O + 1
        };
      case Po: {
        const j = L - 1;
        return {
          idx: O < -Re && j < 0 ? 0 : j,
          rowIdx: O
        };
      }
      case qn:
        return {
          idx: L + 1,
          rowIdx: O
        };
      case "Tab":
        return {
          idx: L + (P ? -1 : 1),
          rowIdx: O
        };
      case "Home":
        return Zn || y ? {
          idx: 0,
          rowIdx: Fe
        } : {
          idx: 0,
          rowIdx: O
        };
      case "End":
        return Zn ? {
          idx: L,
          rowIdx: Xe
        } : {
          idx: Rt,
          rowIdx: y ? Xe : O
        };
      case "PageUp": {
        if (O === Fe) return V;
        const j = Jn(O) + Ho(O) - qe;
        return {
          idx: L,
          rowIdx: j > 0 ? on(j) : 0
        };
      }
      case "PageDown": {
        if (O >= r.length) return V;
        const j = Jn(O) + qe;
        return {
          idx: L,
          rowIdx: j < At ? on(j) : r.length - 1
        };
      }
      default:
        return V;
    }
  }
  function ir(w) {
    const { key: y, shiftKey: P } = w;
    let L = "NONE";
    if (y === "Tab") {
      if (Ti({
        shiftKey: P,
        maxColIdx: Rt,
        minRowIdx: Fe,
        maxRowIdx: Xe,
        activePosition: V
      })) {
        rr();
        return;
      }
      L = "CHANGE_ROW";
    }
    w.preventDefault();
    const O = li(y, Pn(w), P);
    dr(V, O) || ft(Si({
      moveUp: y === "ArrowUp",
      moveNext: y === qn || y === "Tab" && !P,
      columns: Ie,
      colSpanColumns: Vn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: Fe,
      mainHeaderRowIdx: tn,
      maxRowIdx: Xe,
      lastStartFrozenColumnIndex: je,
      firstEndFrozenColumnIndex: Ue,
      cellNavigationMode: L,
      activePosition: V,
      nextPosition: O,
      nextPositionIsCellInActiveBounds: Nt(O).isCellInActiveBounds
    }), { shouldFocus: !0 });
  }
  function di(w) {
    if (Ne === void 0) return;
    const { rowIdx: y } = V;
    return (y < Ne ? y < w && w <= Ne : y > w && w >= Ne) ? V.idx : void 0;
  }
  function ui() {
    var He;
    if (Y == null || V.mode !== "ACTIVE" || !Ot) return;
    const { rowIdx: w } = V, y = Ke();
    if (y.renderEditCell == null || y.editable === !1) return;
    const P = w === Xe, L = Un(y), O = ((He = y.colSpan) == null ? void 0 : He.call(y, {
      type: "ROW",
      row: ct()
    })) ?? 1, { insetInlineStart: j, ...ne } = ot(y, O), te = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", we = y.idx + O - 1 === Rt;
    return /* @__PURE__ */ v("div", {
      style: {
        ...ne,
        gridRowStart: ke + w + 1,
        marginInlineEnd: we ? void 0 : te,
        marginBlockEnd: P ? void 0 : te,
        insetInlineStart: j ? `calc(${j} + ${L}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
      },
      className: We(zi, y.frozen && "rdg-7-0-0-beta-60-7abddb3e"),
      onPointerDown: ri,
      onPointerMove: Qt ? oi : void 0,
      onLostPointerCapture: Qt ? ii : void 0,
      onClick: ai,
      onDoubleClick: si
    });
  }
  function ar(w, y, P) {
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
  function fi(w) {
    if (!Ot || V.rowIdx !== w || V.mode !== "EDIT") return;
    const { row: y } = V, P = Ke(), L = ze(P, je, Ue, {
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
      te ? Sn(() => {
        Ft(P, V.rowIdx, ne), O(we);
      }) : st((He) => ({
        ...He,
        row: ne
      }));
    }
    return /* @__PURE__ */ v(ba, {
      column: P,
      colSpan: L,
      row: y,
      rowIdx: w,
      onRowChange: j,
      closeEditor: O,
      onKeyDown: k,
      navigate: ir
    }, P.key);
  }
  function* hi() {
    const w = V.rowIdx;
    rn && w < lt && (yield w);
    for (let y = lt; y <= dt; y++) yield y;
    rn && w > dt && (yield w);
  }
  function gi() {
    const { idx: w, rowIdx: y } = V;
    return hi().map((P) => {
      const L = P === y, O = L && (P < lt || P > dt) ? Lo : ut, j = r[P], ne = ke + P + 1;
      let te = P, we = !1;
      return typeof a == "function" && (te = a(j), we = (p == null ? void 0 : p.has(te)) ?? !1), fe(te, {
        "aria-rowindex": ke + P + 1,
        "aria-selected": nn ? we : void 0,
        rowIdx: P,
        row: j,
        iterateOverViewportColumnsForRow: O,
        isRowSelectionDisabled: (d == null ? void 0 : d(j)) ?? !1,
        isRowSelected: we,
        onCellMouseDown: Uo,
        onCellClick: Vo,
        onCellDoubleClick: Go,
        onCellContextMenu: jo,
        rowClass: J,
        gridRowStart: ne,
        activeCellIdx: L ? w : void 0,
        draggedOverCellIdx: di(P),
        onRowChange: Ko,
        setActivePosition: an,
        activeCellEditor: fi(P),
        isTreeGrid: at
      });
    }).toArray();
  }
  Jt && Yn !== f && Kt(f);
  let Lt = `repeat(${Ae}, ${Z}px)`;
  return Re > 0 && (Lt += ` repeat(${Re}, ${G}px)`), r.length > 0 && (Lt += Fo), xe > 0 && (Lt += ` repeat(${xe}, ${G}px)`), /* @__PURE__ */ ie("div", {
    role: F,
    "aria-label": Te,
    "aria-labelledby": _e,
    "aria-description": Oe,
    "aria-describedby": le,
    "aria-multiselectable": nn ? !0 : void 0,
    "aria-colcount": Ie.length,
    "aria-rowcount": Kn,
    tabIndex: -1,
    className: We(Ba, Qt && _a, $),
    style: {
      ...oe,
      scrollPaddingInlineStart: Gn,
      scrollPaddingInlineEnd: jn,
      scrollPaddingBlockStart: Mt + Re * G,
      scrollPaddingBlockEnd: xe * G,
      gridTemplateColumns: zo,
      gridTemplateRows: Lt,
      "--rdg-header-row-height": `${Z}px`,
      ...So
    },
    dir: Ce,
    ref: W,
    onScroll: z,
    onKeyDown: Zo,
    onCopy: Jo,
    onPaste: ei,
    "data-testid": I,
    "data-cy": R,
    children: [
      /* @__PURE__ */ ie(Rn, {
        value: No,
        children: [/* @__PURE__ */ v(An, {
          value: Xo,
          children: /* @__PURE__ */ ie(Nn, {
            value: Ao,
            children: [Array.from({ length: en }, (w, y) => /* @__PURE__ */ v(Fa, {
              rowIdx: y + 1,
              level: -en + y,
              iterateOverViewportColumnsForRow: ut,
              activeCellIdx: V.rowIdx === Fe + y ? V.idx : void 0,
              setPosition: tr
            }, y)), /* @__PURE__ */ v(Na, {
              headerRowClass: se,
              rowIdx: Ae,
              iterateOverViewportColumnsForRow: ut,
              onColumnResize: Yo,
              onColumnResizeEnd: $o,
              onColumnsReorder: Bo,
              sortColumns: m,
              onSortColumnsChange: _o,
              activeCellIdx: V.rowIdx === tn ? V.idx : void 0,
              setPosition: tr,
              shouldFocusGrid: !Ro,
              direction: Ce
            })]
          })
        }), r.length === 0 && Pe ? Pe : /* @__PURE__ */ ie(bt, { children: [
          o == null ? void 0 : o.map((w, y) => {
            const P = Ae + 1 + y, L = tn + 1 + y, O = V.rowIdx === L;
            return /* @__PURE__ */ v(lr, {
              "aria-rowindex": P,
              rowIdx: L,
              gridRowStart: P,
              row: w,
              top: Mt + G * y,
              bottom: void 0,
              iterateOverViewportColumnsForRow: ut,
              activeCellIdx: O ? V.idx : void 0,
              isTop: !0,
              setActivePosition: an,
              isTreeGrid: at
            }, y);
          }),
          /* @__PURE__ */ v(On, {
            value: qo,
            children: gi()
          }),
          i == null ? void 0 : i.map((w, y) => {
            const P = ke + r.length + y + 1, L = r.length + y, O = V.rowIdx === L, j = qe > At ? it - G * (xe - y) : void 0, ne = j === void 0 ? G * (xe - 1 - y) : void 0;
            return /* @__PURE__ */ v(lr, {
              "aria-rowindex": Kn - xe + y + 1,
              rowIdx: L,
              gridRowStart: P,
              row: w,
              top: j,
              bottom: ne,
              iterateOverViewportColumnsForRow: ut,
              activeCellIdx: O ? V.idx : void 0,
              isTop: !1,
              setActivePosition: an,
              isTreeGrid: at
            }, y);
          })
        ] })]
      }),
      je > -1 && ar(Eo, Zr, Ga),
      Ue > -1 && ar(Io, Jr, ja),
      ui(),
      Fi(er),
      Oo
    ]
  });
}
function dr(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
function Za({ id: e, groupKey: t, childRows: n, isExpanded: r, isCellActive: o, column: i, row: a, groupColumnIndex: s, isGroupByColumn: l, toggleGroup: c }) {
  var b;
  const { tabIndex: g, childTabIndex: f, onFocus: C } = Tt(o);
  function p() {
    c(e);
  }
  const d = l && s === i.idx;
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
    children: (!l || d) && ((b = i.renderGroupCell) == null ? void 0 : b.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: f,
      toggleGroup: p
    }))
  }, i.key);
}
var Ja = $e(Za);
const es = "rdg-group-row rdg-7-0-0-beta-60-e74a2be3";
function ts({ className: e, row: t, rowIdx: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, isRowSelected: i, setActivePosition: a, gridRowStart: s, groupBy: l, toggleGroup: c, ...g }) {
  const f = o === -1;
  let C = t.level;
  function p() {
    a({
      rowIdx: n,
      idx: -1
    }, { shouldFocus: !0 });
  }
  return /* @__PURE__ */ v(qt, {
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
      tabIndex: f ? 0 : -1,
      className: We(Fn, es, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, f && "rdg-row-active", e),
      onMouseDown: p,
      style: { gridRowStart: s },
      ...g,
      children: r(o).map(([d, b], m) => (m === 0 && d.key === "rdg-select-column" && (C += 1), /* @__PURE__ */ v(Ja, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellActive: b,
        column: d,
        row: t,
        groupColumnIndex: C,
        toggleGroup: c,
        isGroupByColumn: l.includes(d.key)
      }, d.key))).toArray()
    })
  });
}
var ns = $e(ts);
function jl({ columns: e, rows: t, rowHeight: n, rowKeyGetter: r, onCellKeyDown: o, onCellCopy: i, onCellPaste: a, onRowsChange: s, selectedRows: l, onSelectedRowsChange: c, renderers: g, groupBy: f, rowGrouper: C, expandedGroupIds: p, onExpandedGroupIdsChange: d, groupIdGetter: b, ...m }) {
  var Oe, le, pe;
  const u = St(), h = (g == null ? void 0 : g.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? Kr, S = 1 + (((Oe = m.topSummaryRows) == null ? void 0 : Oe.length) ?? 0), { leftKey: T, rightKey: M } = En(m.direction), D = he(Te), k = b ?? rs, { columns: A, groupBy: z } = X(() => {
    const I = e.toSorted(({ key: x }, { key: F }) => x === "rdg-select-column" ? -1 : F === "rdg-select-column" ? 1 : f.includes(x) ? f.includes(F) ? f.indexOf(x) - f.indexOf(F) : -1 : f.includes(F) ? 1 : 0), R = [];
    for (const [x, F] of I.entries()) f.includes(F.key) && (R.push(F.key), I[x] = {
      ...F,
      frozen: !0,
      renderCell: () => null,
      renderGroupCell: F.renderGroupCell ?? Vi,
      editable: !1
    });
    return {
      columns: I,
      groupBy: R
    };
  }, [e, f]), [N, U] = X(() => {
    if (z.length === 0) return [void 0, t.length];
    const I = (R, [x, ...F], _) => {
      let Z = 0;
      const G = {};
      for (const [fe, ge] of Object.entries(C(R, x))) {
        const [be, me] = F.length === 0 ? [ge, ge.length] : I(ge, F, _ + Z + 1);
        G[fe] = {
          childRows: ge,
          childGroups: be,
          startRowIndex: _ + Z
        }, Z += me + 1;
      }
      return [G, Z];
    };
    return I(t, z, 0);
  }, [
    z,
    C,
    t
  ]), [Y, B] = X(() => {
    const I = /* @__PURE__ */ new Set();
    if (!N) return [t, F];
    const R = [], x = (_, Z, G) => {
      if (os(_)) {
        R.push(..._);
        return;
      }
      Object.keys(_).forEach((fe, ge, be) => {
        const me = k(fe, Z), Pe = p.has(me), { childRows: ve, childGroups: Ce, startRowIndex: W } = _[fe], K = {
          id: me,
          parentId: Z,
          groupKey: fe,
          isExpanded: Pe,
          childRows: ve,
          level: G,
          posInSet: ge,
          startRowIndex: W,
          setSize: be.length
        };
        R.push(K), I.add(K), Pe && x(Ce, me, G + 1);
      });
    };
    return x(N, void 0, 0), [R, F];
    function F(_) {
      return I.has(_);
    }
  }, [
    p,
    N,
    t,
    k
  ]), ee = X(() => typeof n == "function" ? (I) => B(I) ? n({
    type: "GROUP",
    row: I
  }) : n({
    type: "ROW",
    row: I
  }) : n, [B, n]), H = q((I) => {
    const R = Y.indexOf(I);
    for (let x = R - 1; x >= 0; x--) {
      const F = Y[x];
      if (B(F) && (!B(I) || I.parentId === F.id)) return [F, x];
    }
  }, [B, Y]), E = q((I) => {
    if (B(I)) return I.id;
    if (typeof r == "function") return r(I);
    const R = H(I);
    if (R !== void 0) {
      const { startRowIndex: x, childRows: F } = R[0];
      return x + F.indexOf(I) + 1;
    }
    return Y.indexOf(I);
  }, [
    H,
    B,
    r,
    Y
  ]), $ = X(() => {
    if (l == null) return null;
    wt(r);
    const I = new Set(l);
    for (const R of Y) B(R) && R.childRows.every((x) => l.has(r(x))) && I.add(R.id);
    return I;
  }, [
    B,
    r,
    l,
    Y
  ]);
  function oe(I) {
    if (!c) return;
    wt(r);
    const R = new Set(l);
    for (const x of Y) {
      const F = E(x);
      if ($ != null && $.has(F) && !I.has(F)) if (B(x)) for (const _ of x.childRows) R.delete(r(_));
      else R.delete(F);
      else if (!($ != null && $.has(F)) && I.has(F)) if (B(x)) for (const _ of x.childRows) R.add(r(_));
      else R.add(F);
    }
    c(R);
  }
  function J(I, R) {
    if (o == null || o(I, R), R.isGridDefaultPrevented() || I.mode === "EDIT") return;
    const { column: x, rowIdx: F, setActivePosition: _ } = I, Z = (x == null ? void 0 : x.idx) ?? -1, G = Y[F];
    if (B(G) && (Z === -1 && (R.key === T && G.isExpanded || R.key === M && !G.isExpanded) && (R.preventDefault(), R.preventGridDefault(), Te(G.id)), Z === -1 && R.key === T && !G.isExpanded && G.level !== 0)) {
      const fe = H(G);
      fe !== void 0 && (R.preventGridDefault(), _({
        idx: Z,
        rowIdx: fe[1]
      }));
    }
  }
  function se({ row: I, column: R }, x) {
    B(I) || i == null || i({
      row: I,
      column: R
    }, x);
  }
  function ce({ row: I, column: R }, x) {
    return B(I) ? I : a({
      row: I,
      column: R
    }, x);
  }
  function Be(I, { indexes: R, column: x }) {
    if (!s) return;
    const F = [...t], _ = [];
    for (const Z of R) {
      const G = t.indexOf(Y[Z]);
      F[G] = I[Z], _.push(G);
    }
    s(F, {
      indexes: _,
      column: x
    });
  }
  function Te(I) {
    const R = new Set(p);
    R.has(I) ? R.delete(I) : R.add(I), d(R);
  }
  function _e(I, { row: R, rowClass: x, onCellMouseDown: F, onCellClick: _, onCellDoubleClick: Z, onCellContextMenu: G, onRowChange: fe, draggedOverCellIdx: ge, activeCellEditor: be, isRowSelectionDisabled: me, isTreeGrid: Pe, ...ve }) {
    if (B(R)) {
      const { startRowIndex: K } = R;
      return /* @__PURE__ */ v(ns, {
        ...ve,
        "aria-rowindex": S + K + 1,
        row: R,
        groupBy: z,
        toggleGroup: D
      }, I);
    }
    let Ce = ve["aria-rowindex"];
    const W = H(R);
    if (W !== void 0) {
      const { startRowIndex: K, childRows: de } = W[0], Ee = de.indexOf(R);
      Ce = K + S + Ee + 2;
    }
    return h(I, {
      ...ve,
      "aria-rowindex": Ce,
      row: R,
      rowClass: x,
      onCellMouseDown: F,
      onCellClick: _,
      onCellDoubleClick: Z,
      onCellContextMenu: G,
      onRowChange: fe,
      draggedOverCellIdx: ge,
      activeCellEditor: be,
      isRowSelectionDisabled: me,
      isTreeGrid: Pe
    });
  }
  return /* @__PURE__ */ v(to, {
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
function rs(e, t) {
  return t !== void 0 ? `${t}__${e}` : e;
}
function os(e) {
  return Array.isArray(e);
}
const is = "rdg-text-editor rdg-7-0-0-beta-60-2f8db206";
function as(e) {
  e == null || e.focus(), e == null || e.select();
}
function Xl({ row: e, column: t, onRowChange: n, onClose: r }) {
  return /* @__PURE__ */ v("input", {
    className: is,
    ref: as,
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
}, ss = {
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
}, cs = ye.div`
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

    /* No gradient beside a pinned column, ever (Olivier, 2026-08-04: a permanent edge read as
       clutter, and the cell's own opaque background over the scrolling columns is signal enough).
       rdg paints one beside each frozen column, as bare divs directly inside the grid (the only
       children of .rdg with neither a role nor a measuring key), and it carries no stable class, no
       custom property and no prop, so the shape of the element is the only thing there is to name
       (upstream PR #3969). It looks like an affordance and is not one: only the browsers supporting
       the scroll-state container query hide it when the grid cannot scroll, and the rest paint it
       permanently.

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
}), ls = "data-grid-hidden-column-visibility", ds = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = ls,
  onHiddenColumnsChange: a,
  onReset: s,
  resetLabel: l
}) => {
  const [c, g] = Me.useState(0), [f, C] = Me.useState(
    null
  ), [p, d] = Me.useState([]), b = q(
    (M) => {
      localStorage.setItem(i, JSON.stringify(M)), g((D) => D + 1), d(M);
    },
    [i]
  ), m = JSON.stringify(r ?? []), u = X(
    () => JSON.parse(m),
    [m]
  );
  $t(() => {
    const M = localStorage.getItem(i);
    if (M) {
      const D = JSON.parse(M);
      b(Array.isArray(D) ? D : []);
    } else
      b(u);
  }, [i, u, b]);
  const h = q(
    (M) => {
      b(M), a == null || a(M);
    },
    [b, a]
  ), S = q(() => {
    h(u), s == null || s();
  }, [h, u, s]), T = X(
    () => e.filter((M) => !(n != null && n.includes(M.key))),
    [e, n]
  );
  return /* @__PURE__ */ v(
    Pt.Provider,
    {
      value: {
        gridKey: `data-grid-${c}`,
        chooserAnchor: f,
        setChooserAnchor: C,
        columns: T,
        hiddenColumn: p,
        setHiddenColumn: h,
        resetHiddenColumns: S,
        resetLabel: l,
        enabled: o
      },
      children: t
    }
  );
}, Hn = ye(bi)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${re.primary500};
    }
`, us = ye(Nr)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, ql = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = rt(Pt), n = Me.useRef(null), r = q(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ v("div", { ref: n, children: /* @__PURE__ */ v(e, { onClick: r }) });
}, fs = () => {
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
  }, [o]), l = q(() => {
    i(), o(null);
  }, [i, o]), c = q(
    (g) => () => {
      const f = t.indexOf(g);
      n(
        f === -1 ? [...t, g] : t.filter((C) => C !== g)
      );
    },
    [t, n]
  );
  return /* @__PURE__ */ ie(
    yi,
    {
      id: "column-visibility-menu",
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      transformOrigin: { vertical: "top", horizontal: "right" },
      open: r !== null,
      onClose: s,
      children: [
        e.map((g) => /* @__PURE__ */ ie(us, { onClick: c(g.key), children: [
          /* @__PURE__ */ v(Hn, { checked: !t.includes(g.key) }),
          g.name
        ] }, g.key)),
        a && /* @__PURE__ */ v(pi, {}),
        a && /* @__PURE__ */ v(Nr, { onClick: l, children: a })
      ]
    }
  );
};
var et = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(et || {}), xt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(xt || {});
function hs(e, t, n, r) {
  return (o, i) => {
    const a = r ? r(o) : o[e], s = r ? r(i) : i[e];
    try {
      if (n)
        return n(a, s, o, i);
      if (t === et.NUMBER) {
        const l = Number(a), c = Number(s);
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      } else if (t === et.DATE) {
        const l = new Date(a).getTime(), c = new Date(s).getTime();
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      }
      return t === et.STRING || !t ? String(a).localeCompare(String(s)) : t === et.BOOLEAN ? +!!a - +!!s : 0;
    } catch (l) {
      return console.error("Error in sorting:", l), 0;
    }
  };
}
const gs = ({
  columns: e,
  rows: t,
  defaultSortColumns: n,
  sortColumns: r,
  enabled: o = !0
}) => {
  const [i, a] = ae(n ?? []), s = r ?? i, l = X(() => !o || s.length === 0 ? t : [...t].sort((g, f) => {
    for (const C of s) {
      const p = e.find((m) => m.key === C.columnKey), b = hs(
        C.columnKey,
        p == null ? void 0 : p.type,
        p == null ? void 0 : p.sortComparator,
        p == null ? void 0 : p.getColumnValue
      )(g, f);
      if (b !== 0)
        return C.direction === "ASC" ? b : -b;
    }
    return 0;
  }), [t, s, o]), c = q((g) => {
    g.length !== 0 ? a(g) : a((f) => f.length === 1 ? [
      {
        columnKey: f[0].columnKey,
        direction: f[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : f);
  }, []);
  return {
    sortedRows: l,
    sortColumns: i,
    setSortedColumns: c
  };
}, pt = 40, ms = 200, ws = "rdg-row-expanded", ys = "rdg-detail-row", no = "__rdgDetailParent", ps = (e) => ({ id: `rdg-detail:${e.id}`, [no]: e }), Ln = (e) => e[no], Ut = (e) => Ln(e) !== void 0, bs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, ps(r)] : [r]);
}, vs = ye.button`
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
`, Cs = () => /* @__PURE__ */ v("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ v("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), ro = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ v(
    vs,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), oo(t, e.id);
      },
      children: /* @__PURE__ */ v(Cs, {})
    }
  );
}, oo = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, xs = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', io = (e, t, n, r = []) => Ut(e) || t === Ds || t === ao || r.includes(t) ? !1 : !(n instanceof Element && n.closest(xs)), Kl = (e, t, n) => io(e, t, n), ur = ye.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, ks = ye.span`
    display: inline-block;
    flex: 0 0 ${pt - 16}px;
`, Ds = Br, ao = "rdg-expander-column", Ss = (e) => ({
  key: ao,
  name: "",
  frozen: !0,
  width: pt,
  minWidth: pt,
  maxWidth: pt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ v(ro, { row: t, expandable: e })
}), so = (e) => e.frozen === !0 || e.frozen === "start", kn = (e) => e.frozen === "end" || !!e.frozenRight, dn = (e) => so(e) || kn(e), Ts = (e, t) => {
  const n = [
    ...e.filter(so),
    ...e.filter((s) => !dn(s)),
    ...e.filter(kn)
  ], r = n.findIndex((s) => !dn(s));
  if (r === -1)
    return e;
  const o = n[r], i = n.findIndex(kn), a = (i === -1 ? n.length : i) - r;
  return e.map((s) => s !== o ? !dn(s) || !s.renderCell ? s : {
    ...s,
    renderCell: (l) => {
      var c;
      return Ut(l.row) ? null : (c = s.renderCell) == null ? void 0 : c.call(s, l);
    }
  } : {
    ...s,
    colSpan: (l) => {
      var c;
      return l.type === "ROW" && Ut(l.row) ? a : (c = s.colSpan) == null ? void 0 : c.call(s, l);
    },
    renderCell: (l) => {
      var g;
      const c = Ln(l.row);
      return c ? t(c) : ((g = s.renderCell) == null ? void 0 : g.call(s, l)) ?? null;
    }
  });
}, Ps = (e, t, n) => (r) => {
  const o = Ln(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, Es = (e, t = []) => Ut(e) ? ys : t.includes(e.id) ? ws : "", co = ye(Ci)`
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
`, zn = Me.createContext({
  filters: {},
  setFilters: () => {
  }
}), Is = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Me.useState({});
  return /* @__PURE__ */ v(
    zn.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, un = (e) => e.stopPropagation(), Rs = ({ options: e, renderInput: t, ...n }) => {
  const r = X(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ v(
    xi,
    {
      onChange: (o, i) => {
        var a;
        return (a = n.onChange) == null ? void 0 : a.call(n, i == null ? void 0 : i.value);
      },
      value: r ?? null,
      options: e,
      onClick: un,
      onKeyDown: un,
      getOptionLabel: (o) => o.label,
      renderInput: t || ((o) => /* @__PURE__ */ v(
        co,
        {
          ...o,
          onClick: un,
          label: n.label,
          error: n.error,
          helperText: n.helperText
        }
      ))
    }
  );
}, Ms = ye(vi)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Yt = (e) => e.stopPropagation(), fn = ({ children: e, ...t }) => /* @__PURE__ */ ie(Ms, { children: [
  _r(t),
  e
] }), Os = (e) => (t) => {
  const { filters: n, setFilters: r } = rt(zn), o = X(() => n[e.key], [n, e]), i = q(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === xt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ v(fn, { ...t, children: /* @__PURE__ */ v(
    Rs,
    {
      options: e.filterOptions ?? [],
      onChange: i,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ v(fn, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (a) => i(a.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: Yt,
    onKeyDown: Yt
  }) : /* @__PURE__ */ v(
    co,
    {
      autoComplete: "off",
      onClick: Yt,
      onKeyDown: Yt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ v(fn, { ...t });
}, Ns = {
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
}, As = (e, t, n) => {
  let r;
  const o = Ns[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function hn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Fs = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Hs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ls = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, zs = {
  date: hn({
    formats: Fs,
    defaultWidth: "full"
  }),
  time: hn({
    formats: Hs,
    defaultWidth: "full"
  }),
  dateTime: hn({
    formats: Ls,
    defaultWidth: "full"
  })
}, Ws = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ys = (e, t, n, r) => Ws[e];
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
const $s = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Bs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, _s = {
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
}, Us = {
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
}, Vs = {
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
}, Gs = {
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
}, js = (e, t) => {
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
}, Xs = {
  ordinalNumber: js,
  era: gt({
    values: $s,
    defaultWidth: "wide"
  }),
  quarter: gt({
    values: Bs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: gt({
    values: _s,
    defaultWidth: "wide"
  }),
  day: gt({
    values: Us,
    defaultWidth: "wide"
  }),
  dayPeriod: gt({
    values: Vs,
    defaultWidth: "wide",
    formattingValues: Gs,
    defaultFormattingWidth: "wide"
  })
};
function mt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Ks(s, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      qs(s, (f) => f.test(a))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const g = t.slice(a.length);
    return { value: c, rest: g };
  };
}
function qs(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ks(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Qs(e) {
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
const Zs = /^(\d+)(th|st|nd|rd)?/i, Js = /\d+/i, ec = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, tc = {
  any: [/^b/i, /^(a|c)/i]
}, nc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, rc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, oc = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ic = {
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
}, ac = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, sc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, cc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, lc = {
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
}, dc = {
  ordinalNumber: Qs({
    matchPattern: Zs,
    parsePattern: Js,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: mt({
    matchPatterns: ec,
    defaultMatchWidth: "wide",
    parsePatterns: tc,
    defaultParseWidth: "any"
  }),
  quarter: mt({
    matchPatterns: nc,
    defaultMatchWidth: "wide",
    parsePatterns: rc,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mt({
    matchPatterns: oc,
    defaultMatchWidth: "wide",
    parsePatterns: ic,
    defaultParseWidth: "any"
  }),
  day: mt({
    matchPatterns: ac,
    defaultMatchWidth: "wide",
    parsePatterns: sc,
    defaultParseWidth: "any"
  }),
  dayPeriod: mt({
    matchPatterns: cc,
    defaultMatchWidth: "any",
    parsePatterns: lc,
    defaultParseWidth: "any"
  })
}, uc = {
  code: "en-US",
  formatDistance: As,
  formatLong: zs,
  formatRelative: Ys,
  localize: Xs,
  match: dc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let fc = {};
function Et() {
  return fc;
}
const lo = 6048e5, hc = 864e5, fr = Symbol.for("constructDateFrom");
function Ye(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && fr in e ? e[fr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Se(e, t) {
  return Ye(t || e, e);
}
function hr(e) {
  const t = Se(e), n = new Date(
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
function gc(e, ...t) {
  const n = Ye.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function gr(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function mc(e, t, n) {
  const [r, o] = gc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = gr(r), a = gr(o), s = +i - hr(i), l = +a - hr(a);
  return Math.round((s - l) / hc);
}
function wc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function yc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return mc(n, wc(n)) + 1;
}
function kt(e, t) {
  var s, l, c, g;
  const n = Et(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((g = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : g.weekStartsOn) ?? 0, o = Se(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Vt(e, t) {
  return kt(e, { ...t, weekStartsOn: 1 });
}
function uo(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ye(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Vt(o), a = Ye(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Vt(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function pc(e, t) {
  const n = uo(e, t), r = Ye(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Vt(r);
}
function bc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +Vt(n) - +pc(n);
  return Math.round(r / lo) + 1;
}
function fo(e, t) {
  var g, f, C, p;
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Et(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (g = t == null ? void 0 : t.locale) == null ? void 0 : g.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (C = o.locale) == null ? void 0 : C.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = Ye((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = kt(a, t), l = Ye((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
  const c = kt(l, t);
  return +n >= +s ? r + 1 : +n >= +c ? r : r - 1;
}
function vc(e, t) {
  var s, l, c, g;
  const n = Et(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((g = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = fo(e, t), i = Ye((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), kt(i, t);
}
function Cc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +kt(n, t) - +vc(n, t);
  return Math.round(r / lo) + 1;
}
function Q(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Le = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Q(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Q(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Q(e.getDate(), t.length);
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
    return Q(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Q(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Q(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Q(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Q(o, t.length);
  }
}, Ze = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, mr = {
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
    const o = fo(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return Q(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : Q(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = uo(e);
    return Q(n, t.length);
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
    return Q(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Q(r, 2);
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
        return Q(r, 2);
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
        return Q(r + 1, 2);
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
    const o = Cc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Q(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = bc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Q(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Le.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = yc(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Q(r, t.length);
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
        return Q(i, 2);
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
        return Q(i, t.length);
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
        return Q(o, t.length);
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
    switch (r === 12 ? o = Ze.noon : r === 0 ? o = Ze.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Ze.evening : r >= 12 ? o = Ze.afternoon : r >= 4 ? o = Ze.morning : o = Ze.night, t) {
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Q(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Q(r, t.length);
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
        return yr(r);
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
        return yr(r);
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
        return "GMT" + wr(r, ":");
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
        return "GMT" + wr(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ve(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Q(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Q(+e, t.length);
  }
};
function wr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Q(i, 2);
}
function yr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Q(Math.abs(e) / 60, 2) : Ve(e, t);
}
function Ve(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Q(Math.trunc(r / 60), 2), i = Q(r % 60, 2);
  return n + o + t + i;
}
const pr = (e, t) => {
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
}, ho = (e, t) => {
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
}, xc = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return pr(e, t);
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
  return i.replace("{{date}}", pr(r, t)).replace("{{time}}", ho(o, t));
}, kc = {
  p: ho,
  P: xc
}, Dc = /^D+$/, Sc = /^Y+$/, Tc = ["D", "DD", "YY", "YYYY"];
function Pc(e) {
  return Dc.test(e);
}
function Ec(e) {
  return Sc.test(e);
}
function Ic(e, t, n) {
  const r = Rc(e, t, n);
  if (console.warn(r), Tc.includes(e)) throw new RangeError(r);
}
function Rc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function go(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function mo(e) {
  return !(!go(e) && typeof e != "number" || isNaN(+Se(e)));
}
const Mc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Oc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Nc = /^'([^]*?)'?$/, Ac = /''/g, Fc = /[a-zA-Z]/;
function Hc(e, t, n) {
  var g, f, C, p, d, b, m, u;
  const r = Et(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? uc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (C = r.locale) == null ? void 0 : C.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((u = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : u.weekStartsOn) ?? 0, s = Se(e, n == null ? void 0 : n.in);
  if (!mo(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Oc).map((h) => {
    const S = h[0];
    if (S === "p" || S === "P") {
      const T = kc[S];
      return T(h, o.formatLong);
    }
    return h;
  }).join("").match(Mc).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const S = h[0];
    if (S === "'")
      return { isToken: !1, value: Lc(h) };
    if (mr[S])
      return { isToken: !0, value: h };
    if (S.match(Fc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: h };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return l.map((h) => {
    if (!h.isToken) return h.value;
    const S = h.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Ec(S) || !(n != null && n.useAdditionalDayOfYearTokens) && Pc(S)) && Ic(S, t, String(e));
    const T = mr[S[0]];
    return T(s, S, o.localize, c);
  }).join("");
}
function Lc(e) {
  const t = e.match(Nc);
  return t ? t[1].replace(Ac, "'") : e;
}
function zc() {
  return Object.assign({}, Et());
}
function br(e, t, n) {
  const r = zc(), o = $c(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Wc(o, t) : Yc(o, t);
}
function Wc(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Yc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function $c(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Bc(e, t) {
  const n = jc(t);
  return "formatToParts" in n ? Uc(n, e) : Vc(n, e);
}
const _c = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Uc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = _c[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function Vc(e, t) {
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
const gn = {}, vr = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Gc = vr === "06/25/2014, 00:00:00" || vr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function jc(e) {
  return gn[e] || (gn[e] = Gc ? new Intl.DateTimeFormat("en-US", {
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
  })), gn[e];
}
function wo(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const Cr = 36e5, Xc = 6e4, mn = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Wn(e, t, n) {
  if (!e)
    return 0;
  let r = mn.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, i;
  if (r = mn.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), xr(o) ? -(o * Cr) : NaN;
  if (r = mn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return xr(o, a) ? (i = Math.abs(o) * Cr + a * Xc, r[1] === "+" ? -i : i) : NaN;
  }
  if (Qc(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : qc(t), s = Dn(a, e);
    return -(n ? s : Kc(t, s, e));
  }
  return NaN;
}
function qc(e) {
  return wo(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Dn(e, t) {
  const n = Bc(e, t), r = wo(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function Kc(e, t, n) {
  let o = e.getTime() - t;
  const i = Dn(new Date(o), n);
  if (t === i)
    return t;
  o -= i - t;
  const a = Dn(new Date(o), n);
  return i === a ? i : Math.max(i, a);
}
function xr(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const kr = {};
function Qc(e) {
  if (kr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), kr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Zc = 60 * 1e3, Jc = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = wn(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Dr(r);
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
    const r = wn(n.timeZone, e);
    switch (t) {
      case "x":
        return Dr(r);
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
    const r = wn(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + el(r, ":");
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
        return br("short", e, n);
      case "zzzz":
      default:
        return br("long", e, n);
    }
  }
};
function wn(e, t) {
  const n = e ? Wn(e, t, !0) / Zc : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function Gt(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Je(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Gt(Math.floor(r / 60), 2), i = Gt(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function Dr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Gt(Math.abs(e) / 60, 2) : Je(e, t);
}
function el(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Gt(i, 2);
}
function Sr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const tl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, yn = 36e5, Tr = 6e4, nl = 2, ue = {
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
  timeZone: tl
};
function yo(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? nl : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = rl(e), { year: o, restDateString: i } = ol(r.date, n), a = il(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let l = 0, c;
    if (r.time && (l = al(r.time), l === null || isNaN(l)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (c = Wn(r.timeZone || t.timeZone, new Date(s + l)), isNaN(c))
        return /* @__PURE__ */ new Date(NaN);
    } else
      c = Sr(new Date(s + l)), c = Sr(new Date(s + l + c));
    return new Date(s + l + c);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function rl(e) {
  const t = {};
  let n = ue.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ue.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ue.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function ol(e, t) {
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
function il(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let i = ue.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, Er(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = ue.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return ll(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return Er(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, Ir(o) ? Pr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = ue.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return Ir(o, a) ? Pr(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function al(e) {
  let t, n, r = ue.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), pn(t) ? t % 24 * yn : NaN;
  if (r = ue.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), pn(t, n) ? t % 24 * yn + n * Tr : NaN;
  if (r = ue.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return pn(t, n, o) ? t % 24 * yn + n * Tr + o * 1e3 : NaN;
  }
  return null;
}
function Pr(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, i = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
const sl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], cl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function po(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Er(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = po(e);
    if (r && n > cl[t] || !r && n > sl[t])
      return !1;
  }
  return !0;
}
function ll(e, t) {
  if (t < 1)
    return !1;
  const n = po(e);
  return !(n && t > 366 || !n && t > 365);
}
function Ir(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function pn(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const dl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function ul(e, t, n = {}) {
  t = String(t);
  const r = t.match(dl);
  if (r) {
    const o = yo(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), l = i[s - 1] === "'", c = i.replace(a, "'" + Jc[a[0]](o, a, n) + "'");
      return l ? c.substring(0, s - 1) + c.substring(s + 1) : c;
    }, t);
  }
  return Hc(e, t, n);
}
function fl(e, t, n) {
  e = yo(e, n);
  const r = Wn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function hl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, ul(fl(e, t, { timeZone: r.timeZone }), n, r);
}
var bo = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(bo || {});
const gl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !go(e) && typeof e == "string" ? new Date(e) : e;
  return mo(r) ? hl(e, n, t) : "--";
}, Rr = (e) => e.trim().toLowerCase(), ml = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: l, hiddenColumn: c } = rt(Pt), g = q((f) => {
    const C = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === et.DATE)
        return ({ row: b }) => {
          var m, u;
          return gl(
            b[f.key],
            ((m = f.dateOptions) == null ? void 0 : m.formatDate) ?? bo.DATE_WITH_TIME,
            (u = f.dateOptions) == null ? void 0 : u.timeZone
          );
        };
    }, p = () => f.renderHeaderCell ? f.renderHeaderCell : Os(f), d = {
      ...f,
      renderCell: C(),
      renderHeaderCell: p()
    };
    return f.frozenRight && (d.frozen = "end"), d;
  }, []);
  return X(() => {
    const f = [];
    if (t && !n && f.push(Ss(t)), n) {
      const C = (r ?? []).map((m) => m.id), p = C.length > 0 && C.every((m) => o == null ? void 0 : o.includes(m)), d = (m) => {
        const u = (o ?? []).filter((h) => !C.includes(h));
        return m ? [...u, ...C] : u;
      }, b = t ? 50 + pt : 50;
      f.push({
        ...ht,
        width: b,
        minWidth: b,
        maxWidth: b,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ ie(ur, { children: [
          t && /* @__PURE__ */ v(ks, { "aria-hidden": !0 }),
          a ? a({
            checked: p,
            "aria-label": s,
            onChange: (m) => i == null ? void 0 : i(d(m))
          }) : /* @__PURE__ */ v(
            Hn,
            {
              checked: p,
              slotProps: { input: { "aria-label": s } },
              onChange: (m, u) => i == null ? void 0 : i(d(u))
            }
          )
        ] }),
        renderCell: t ? (m) => {
          var u;
          return /* @__PURE__ */ ie(ur, { children: [
            /* @__PURE__ */ v(ro, { row: m.row, expandable: t }),
            (u = ht.renderCell) == null ? void 0 : u.call(ht, m)
          ] });
        } : ht.renderCell
      });
    }
    return f.push(...e.map((C) => g(C))), l && c ? f.filter((C) => !c.includes(C.key)) : f;
  }, [
    e,
    t,
    g,
    l,
    c,
    n,
    r,
    o,
    i,
    a,
    s
  ]);
};
var wl = {
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
function yl(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return wl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function bn(e) {
  var t = yl(e);
  return "".concat(t.value).concat(t.unit);
}
var pl = function(e, t, n) {
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
}, jt = function() {
  return jt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, jt.apply(this, arguments);
}, bl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, vl = pl("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Cl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, l = s === void 0 ? {} : s, c = e.size, g = c === void 0 ? 15 : c, f = e.margin, C = f === void 0 ? 2 : f, p = bl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), d = jt({ display: "inherit" }, l), b = function(m) {
    return {
      backgroundColor: o,
      width: bn(g),
      height: bn(g),
      margin: bn(C),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(vl, " ").concat(0.75 / a, "s ").concat(m * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? zt.createElement(
    "span",
    jt({ style: d }, p),
    zt.createElement("span", { style: b(1) }),
    zt.createElement("span", { style: b(2) }),
    zt.createElement("span", { style: b(3) })
  ) : null;
}
const xl = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === xt.TEXT && typeof n == "string" && typeof r == "string" ? Rr(n).includes(Rr(r)) : t === xt.AUTOCOMPLETE ? n === r : !1, kl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = rt(zn);
  return X(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((l) => l.key === i);
      return s ? xl({
        comparator: s.filterComparator,
        filterType: s.filterType ?? xt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Dl = ye.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, Sl = ye.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, Tl = Me.memo(
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
      (c, g) => {
        t(g);
      },
      [t]
    ), l = q(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      [n, t]
    );
    return /* @__PURE__ */ ie(Dl, { children: [
      a ? /* @__PURE__ */ v(Sl, { children: a(o) }) : null,
      /* @__PURE__ */ v(
        ki,
        {
          labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ v("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
          labelDisplayedRows: ({ from: c, to: g, count: f }) => `${c}-${g} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${f}`,
          component: "div",
          count: o,
          page: e,
          onPageChange: s,
          rowsPerPage: r,
          onRowsPerPageChange: l
        }
      )
    ] });
  }
);
var Pl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(Pl || {});
const El = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = ae(0), [l, c] = ae(e), g = n !== void 0, f = o !== void 0, C = g ? n : a, p = f ? o : l, d = q(
    (h) => {
      g || s(h), r == null || r(h);
    },
    [g, r]
  ), b = q(
    (h) => {
      f || c(h), i == null || i(h);
    },
    [f, i]
  ), m = q(() => {
    d(0), b(e);
  }, [d, b, e]), u = De(p);
  return $t(() => {
    u.current !== p && (u.current = p, d(0));
  }, [p]), {
    currentPage: C,
    pageSize: p,
    defaultPageSize: e,
    setCurrentPage: d,
    setPageSize: b,
    resetPagination: m
  };
}, Mr = 50, Il = ye.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, Rl = ye.div`
    background-color: ${re.primary500};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, Ml = Me.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = q(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ v(
      Hn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), Ol = (e) => /* @__PURE__ */ v(Ml, { ...e }), Nl = "Select all rows", Al = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  sortRowsLocally: s,
  selectedRows: l,
  onSelectedRowsChange: c,
  selectAllLabel: g = Nl,
  noDataMessage: f,
  filters: C,
  setFilters: p,
  pagination: d,
  renderers: b,
  expandable: m,
  rowGestures: u,
  rowHeight: h,
  rowClass: S,
  onCellClick: T,
  onColumnResize: M,
  columnWidths: D,
  onColumnWidthsChange: k,
  ...A
}) => {
  var ve, Ce;
  const { gridKey: z } = rt(Pt), { pageSize: N, currentPage: U, setCurrentPage: Y, setPageSize: B } = El(
    d == null ? void 0 : d.defaultPageSize,
    d == null ? void 0 : d.control
  ), ee = (b == null ? void 0 : b.renderCheckbox) ?? Ol, H = ml({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: m,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: l,
    onSelectedRowsChange: c,
    renderCheckbox: ee,
    selectAllLabel: g
  }), E = X(() => H.map((W) => W.key).join("|"), [H]), $ = X(
    () => H.some((W) => W.filterEnabled),
    [H]
  ), oe = X(
    () => (d == null ? void 0 : d.enabled) && !d.remotePagination,
    [d]
  ), J = X(() => !p, [p]), se = kl({
    columns: H,
    rows: n,
    enabled: J
  }), ce = X(() => !i, [i]), Be = s ?? ce, {
    sortedRows: Te,
    sortColumns: _e,
    setSortedColumns: Oe
  } = gs({
    columns: H,
    rows: se,
    defaultSortColumns: a,
    sortColumns: ce ? void 0 : o,
    enabled: Be
  }), le = X(() => {
    if (!oe)
      return U;
    const W = Math.max(0, Math.ceil(se.length / N) - 1);
    return Math.min(U, W);
  }, [oe, U, N, se.length]);
  $t(() => {
    le !== U && Y(le);
  }, [le, U, Y]);
  const pe = X(() => oe ? Te.slice(le * N, (le + 1) * N) : Te, [Te, oe, le, N]), I = X(
    () => m ? bs(pe, m.expandedIds) : pe,
    [m, pe]
  ), R = X(
    () => m ? Ts(H, m.renderDetail) : H,
    [m, H]
  ), x = q(
    (W, K) => M == null ? void 0 : M(W.key, K),
    [M]
  ), F = De(E);
  nt(() => {
    if (F.current === E || (F.current = E, !D || !k))
      return;
    const W = new Map([...D].filter(([, K]) => K.type === "resized"));
    W.size !== D.size && k(W);
  }, [E, D, k]);
  const { renderRow: _, ...Z } = b ?? {}, G = De(void 0), fe = X(() => {
    if (_)
      return (W, K) => {
        var Ee;
        const { iterateOverViewportColumnsForRow: de } = K;
        return ((Ee = G.current) == null ? void 0 : Ee.iterate) !== de && (G.current = {
          iterate: de,
          columns: [...de(void 0)].map(([it]) => it)
        }), _(W, {
          ...K,
          viewportColumns: G.current.columns
        });
      };
  }, [_]), ge = q(
    (W, K) => {
      const de = () => {
        const Ee = Es(W, m == null ? void 0 : m.expandedIds);
        return Ee || (K === 0 ? "first-row" : K === n.length - 1 ? "last-row" : "");
      };
      return [S == null ? void 0 : S(W, K), de()].filter(Boolean).join(" ");
    },
    [n, m == null ? void 0 : m.expandedIds, S]
  ), be = q(
    (W) => {
      u != null && u.onClick ? u.onClick(W) : m && oo(m, W.id);
    },
    [u, m]
  ), me = q(
    (W, K) => {
      if (T == null || T(W, K), K.isGridDefaultPrevented() || !m && !(u != null && u.onClick))
        return;
      const de = window.getSelection();
      K.detail <= 1 && de && !de.isCollapsed && K.target instanceof Node && de.containsNode(K.target, !0) || io(
        W.row,
        W.column.key,
        K.target,
        u == null ? void 0 : u.excludedColumns
      ) && be(W.row);
    },
    [T, m, u, be]
  ), Pe = !(d != null && d.remotePagination);
  return $t(() => {
    if (!Pe)
      return;
    const W = l == null ? void 0 : l.filter(
      (K) => n.some((de) => de.id === K)
    );
    (W == null ? void 0 : W.length) != (l == null ? void 0 : l.length) && (c == null || c(W ?? []));
  }, [n, l, Pe]), /* @__PURE__ */ ie(cs, { $pagination: !!(d != null && d.enabled), children: [
    /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v(
      to,
      {
        selectedRows: l ? new Set(l) : void 0,
        onSelectedRowsChange: (W) => {
          c == null || c(Array.from(W));
        },
        rowKeyGetter: (W) => W.id,
        rows: I,
        onSortColumnsChange: ce ? Oe : i,
        sortColumns: ce ? _e : o,
        columns: R,
        rowClass: ge,
        headerRowHeight: $ ? 70 : void 0,
        onCellClick: me,
        onColumnResize: M ? x : void 0,
        columnWidths: D,
        onColumnWidthsChange: k,
        ...A,
        rowHeight: m ? Ps(
          h,
          Mr,
          m.detailHeight ?? ms
        ) : h ?? Mr,
        renderers: {
          renderCheckbox: ee,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...f != null && !t ? {
            noRowsFallback: /* @__PURE__ */ v("div", { className: "rdg-no-data", children: f })
          } : {},
          ...Z,
          renderRow: fe
        },
        style: { ...ss, ...e ?? {} }
      },
      `${z}:${E}`
    ) }),
    d != null && d.enabled ? /* @__PURE__ */ v(
      Tl,
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
    t ? /* @__PURE__ */ ie(Il, { children: [
      /* @__PURE__ */ v(Rl, {}),
      /* @__PURE__ */ v(Cl, { color: re.primary500 })
    ] }) : null,
    /* @__PURE__ */ v(fs, {})
  ] });
}, Ql = ({
  filters: e,
  setFilters: t,
  columns: n,
  visibilityColumnFeature: {
    enabled: r,
    visibilityFeatureDisabledFor: o,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: l,
    resetLabel: c
  } = {},
  ...g
}) => /* @__PURE__ */ v(Is, { filters: e, setFilters: t, children: /* @__PURE__ */ v(
  ds,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: l,
    resetLabel: c,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ v(Al, { ...g, columns: n, filters: e, setFilters: t })
  }
) });
export {
  ma as Cell,
  et as ColumnType,
  bo as DATE_FORMAT,
  Pl as DEFAULT_PAGE_SIZES,
  Ql as DataGrid,
  Hn as DataGridCheckbox,
  Rn as DataGridDefaultRenderersContext,
  ao as EXPANDER_COLUMN_KEY,
  ro as ExpanderToggle,
  xt as FilterType,
  La as Row,
  Ds as SELECTION_COLUMN_KEY,
  Br as SELECT_COLUMN_KEY,
  Mn as SelectCellFormatter,
  ht as SelectColumn,
  Gi as ToggleGroup,
  jl as TreeDataGrid,
  ql as VisibilityColumnChooser,
  fs as VisibilityMenu,
  io as clickBelongsToRow,
  Kl as clickExpandsRow,
  gl as convertDate,
  ss as defaultTheme,
  Ps as detailAwareRowHeight,
  Es as detailRowClass,
  Rr as getStringToCompare,
  Ut as isDetailRow,
  Bi as renderCheckbox,
  _r as renderHeaderCell,
  Ya as renderSortIcon,
  $a as renderSortPriority,
  Xl as renderTextEditor,
  Vi as renderToggleGroup,
  ji as renderValue,
  re as taktikTheme,
  sa as useHeaderRowSelection,
  El as usePagination,
  jr as useRowSelection,
  Ts as withDetailRendering,
  bs as withDetailRows
};
