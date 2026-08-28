import { jsx as b, jsxs as oe, Fragment as tt } from "react/jsx-runtime";
import * as Wt from "react";
import Me, { createContext as St, use as vt, memo as $e, useMemo as q, useCallback as G, useState as se, useRef as fe, useLayoutEffect as rt, useImperativeHandle as wi, useSyncExternalStore as Nr, useEffectEvent as pi, useEffect as xt, useContext as ot } from "react";
import { flushSync as Sn } from "react-dom";
import me from "@emotion/styled";
import yi from "@mui/material/Menu";
import Ar from "@mui/material/MenuItem";
import bi from "@mui/material/Divider";
import vi from "@mui/material/Checkbox";
import xi from "@mui/material/Box";
import Ci from "@mui/material/TextField";
import Di from "@mui/material/Autocomplete";
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
function Fr(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Si({ rows: e, topSummaryRows: t, bottomSummaryRows: n, rowIdx: r, mainHeaderRowIdx: o, lastStartFrozenColumnIndex: i, firstEndFrozenColumnIndex: a, column: s }) {
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
function Ti({ moveUp: e, moveNext: t, cellNavigationMode: n, columns: r, colSpanColumns: o, rows: i, topSummaryRows: a, bottomSummaryRows: s, minRowIdx: c, mainHeaderRowIdx: l, maxRowIdx: m, activePosition: { idx: h, rowIdx: x }, nextPosition: p, nextPositionIsCellInActiveBounds: d, lastStartFrozenColumnIndex: D, firstEndFrozenColumnIndex: g }) {
  let { idx: u, rowIdx: f } = p;
  const T = r.length, P = (v) => {
    for (const M of o) {
      const H = M.idx;
      if (H > u) break;
      const A = Si({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: f,
        mainHeaderRowIdx: l,
        lastStartFrozenColumnIndex: D,
        firstEndFrozenColumnIndex: g,
        column: M
      });
      if (A && u > H && u < A + H) {
        u = H + (v ? A : 0);
        break;
      }
    }
  }, L = (v) => v.level + l, I = () => {
    if (t) {
      let { parent: v } = r[u];
      for (; v !== void 0; ) {
        const M = L(v);
        if (f === M) {
          u = v.idx + v.colSpan;
          break;
        }
        ({ parent: v } = v);
      }
    } else if (e) {
      let { parent: v } = r[u], M = !1;
      for (; v !== void 0; ) {
        const H = L(v);
        if (f >= H) {
          u = v.idx, f = H, M = !0;
          break;
        }
        ({ parent: v } = v);
      }
      M || (u = h, f = x);
    }
  };
  if (d && (P(t), f < l && I()), n === "CHANGE_ROW" && (u === T ? f !== m && (u = 0, f += 1) : u === -1 && (f !== c && (f -= 1, u = T - 1), P(!1))), f < l && u > -1 && u < T) {
    let { parent: v } = r[u];
    const M = f;
    for (f = l; v !== void 0; ) {
      const H = L(v);
      H >= M && (f = H, u = v.idx), { parent: v } = v;
    }
  }
  return {
    idx: u,
    rowIdx: f
  };
}
function Pi({ maxColIdx: e, minRowIdx: t, maxRowIdx: n, activePosition: { rowIdx: r, idx: o }, shiftKey: i }) {
  return i ? o === 0 && r === t : o === e && r === n;
}
function Ii(e) {
  e.stopPropagation();
}
function Bt(e, t = "instant") {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest",
    behavior: t
  });
}
function Ri(e) {
  return e.querySelector('& > [role="row"][tabindex="0"]');
}
function Hr(e) {
  return e.querySelector('& > [role="row"] > [tabindex="0"]');
}
function Lr(e, t) {
  e !== null && (t && Bt(e), e.focus({ preventScroll: !0 }));
}
function Ei(e) {
  Lr(Ri(e), !0);
}
function zr(e, t = !0) {
  Lr(Hr(e), t);
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
const Mi = /* @__PURE__ */ new Set([
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
const Oi = 86;
function Ni(e, t) {
  return Pn(e) && (e.keyCode !== Oi || t) ? !1 : !Mi.has(e.key);
}
function Ai({ key: e, target: t }) {
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
const Fi = "rdg-7-0-0-beta-60-fa71d63e";
function Hi(e) {
  return e.map(({ key: t, idx: n, minWidth: r, maxWidth: o }) => /* @__PURE__ */ b("div", {
    className: Fi,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
const Wr = "rdg-cell rdg-7-0-0-beta-60-85c48527", Yr = "rdg-7-0-0-beta-60-203d9925", Li = `rdg-cell-frozen-start ${Yr}`, zi = `rdg-cell-frozen-end ${Yr}`, Wi = "rdg-cell-drag-handle rdg-7-0-0-beta-60-bfba19bc";
function $r(e, t, n) {
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
function it(e, t = 1) {
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
function nt(e, ...t) {
  return We(Wr, Xt(e.frozen) && Li, e.frozen === "end" && zi, ...t);
}
const { min: Ct, max: _t, floor: sr, abs: Yi } = Math;
function pt(e) {
  if (typeof e != "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Rn(e, { minWidth: t, maxWidth: n }) {
  return e = _t(e, t), typeof n == "number" && n >= t ? Ct(e, n) : e;
}
function Br(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Yt = {
  idx: -1,
  rowIdx: Number.NEGATIVE_INFINITY,
  mode: "ACTIVE"
};
function $i({ gridRef: e, columns: t, rows: n, isTreeGrid: r, maxColIdx: o, minRowIdx: i, maxRowIdx: a, setDraggedOverRowIdx: s }) {
  var T;
  const [c, l] = se(Yt), [m, h] = se(null), x = fe(null);
  function p({ idx: P, rowIdx: L }) {
    const I = r && P === -1, v = P >= 0 && P <= o, M = L >= i && L <= a, H = L >= 0 && L < n.length, A = I && M, _ = I && H, W = v && M, B = v && H;
    return {
      isPositionInActiveBounds: A || W,
      isPositionInViewport: _ || B,
      isRowInActiveBounds: A,
      isRowInViewport: _,
      isCellInActiveBounds: W,
      isCellInViewport: B
    };
  }
  function d(P) {
    return {
      resolvedActivePosition: P,
      validatedPosition: p(P)
    };
  }
  function D() {
    if (!f.isCellInActiveBounds) throw new Error("No column for active position");
    return t[u.idx];
  }
  function g() {
    if (!f.isPositionInViewport) throw new Error("No row for active position");
    return n[u.rowIdx];
  }
  let { resolvedActivePosition: u, validatedPosition: f } = d(c);
  if (!f.isPositionInActiveBounds && u !== Yt)
    l(Yt), s(void 0), { resolvedActivePosition: u, validatedPosition: f } = d(Yt);
  else if (u.mode === "EDIT" && (((T = D().editorOptions) == null ? void 0 : T.closeOnExternalRowChange) ?? !0) && g() !== u.originalRow) {
    const P = {
      idx: u.idx,
      rowIdx: u.rowIdx,
      mode: "ACTIVE"
    };
    l(P), h(null), { resolvedActivePosition: u, validatedPosition: f } = d(P);
  }
  return rt(() => {
    m !== null && m !== x.current && (x.current = m, m.idx === -1 ? Ei(e.current) : zr(e.current));
  }, [m, e]), {
    activePosition: u,
    setActivePosition: l,
    setPositionToFocus: h,
    activePositionIsInActiveBounds: f.isPositionInActiveBounds,
    activePositionIsInViewport: f.isPositionInViewport,
    activePositionIsRow: f.isRowInActiveBounds,
    activePositionIsCellInViewport: f.isCellInViewport,
    validatePosition: p,
    getActiveColumn: D,
    getActiveRow: g
  };
}
const Bi = "rdg-checkbox-input rdg-7-0-0-beta-60-3b807ead";
function _i({ onChange: e, indeterminate: t, ...n }) {
  function r(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ b("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: Bi,
    onChange: r,
    ...n
  });
}
const Ui = "rdg-group-cell-content rdg-7-0-0-beta-60-07919382", Vi = "rdg-caret rdg-7-0-0-beta-60-02a50147";
function Gi(e) {
  return /* @__PURE__ */ b(ji, { ...e });
}
function ji({ groupKey: e, isExpanded: t, tabIndex: n, toggleGroup: r }) {
  function o({ key: i }) {
    i === "Enter" && r();
  }
  return /* @__PURE__ */ oe("span", {
    className: Ui,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ b("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Vi,
      "aria-hidden": !0,
      children: /* @__PURE__ */ b("path", { d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7" })
    })]
  });
}
function Xi(e) {
  var t;
  return (t = e.row) == null ? void 0 : t[e.column.key];
}
const En = St(void 0);
En.displayName = "DataGridDefaultRenderersContext";
function Tt() {
  return vt(En);
}
function Mn({ value: e, tabIndex: t, indeterminate: n, disabled: r, onChange: o, "aria-label": i, "aria-labelledby": a }) {
  const s = Tt().renderCheckbox;
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
const _r = "rdg-select-column";
function qi({ tabIndex: e }) {
  const { isIndeterminate: t, isRowSelected: n, onRowSelectionChange: r } = ca();
  return /* @__PURE__ */ b(Mn, {
    "aria-label": "Select All",
    tabIndex: e,
    indeterminate: t,
    value: n,
    onChange: (o) => {
      r({ checked: t ? !1 : o });
    }
  });
}
function Ki({ row: e, tabIndex: t }) {
  const { isRowSelectionDisabled: n, isRowSelected: r, onRowSelectionChange: o } = Xr();
  return /* @__PURE__ */ b(Mn, {
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
  const { isRowSelected: n, onRowSelectionChange: r } = Xr();
  return /* @__PURE__ */ b(Mn, {
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
const gt = {
  key: _r,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ b(qi, { ...e });
  },
  renderCell(e) {
    return /* @__PURE__ */ b(Ki, { ...e });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ b(Qi, { ...e });
  }
}, Zi = "rdg-7-0-0-beta-60-56a248e4", Ji = "rdg-header-sort-name rdg-7-0-0-beta-60-7fad8c83";
function Ur({ column: e, sortDirection: t, priority: n }) {
  return e.sortable ? /* @__PURE__ */ b(ea, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function ea({ sortDirection: e, priority: t, children: n }) {
  const r = Tt().renderSortStatus;
  return /* @__PURE__ */ oe("span", {
    className: Zi,
    children: [/* @__PURE__ */ b("span", {
      className: Ji,
      children: n
    }), /* @__PURE__ */ b("span", { children: r({
      sortDirection: e,
      priority: t
    }) })]
  });
}
const ta = "auto", na = 50;
function ra({ rawColumns: e, defaultColumnOptions: t, getColumnWidth: n, viewportWidth: r, scrollLeft: o, enableVirtualization: i }) {
  const a = (t == null ? void 0 : t.width) ?? ta, s = (t == null ? void 0 : t.minWidth) ?? na, c = (t == null ? void 0 : t.maxWidth) ?? void 0, l = (t == null ? void 0 : t.renderCell) ?? Xi, m = (t == null ? void 0 : t.renderHeaderCell) ?? Ur, h = (t == null ? void 0 : t.sortable) ?? !1, x = (t == null ? void 0 : t.resizable) ?? !1, p = (t == null ? void 0 : t.draggable) ?? !1, { columns: d, colSpanColumns: D, lastStartFrozenColumnIndex: g, firstEndFrozenColumnIndex: u, headerRowsCount: f } = q(() => {
    let A = -1, _ = -1, W = 1;
    const B = [];
    te(e, 1);
    function te(k, R, Q) {
      for (const K of k) {
        if ("children" in K) {
          const ce = {
            name: K.name,
            parent: Q,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: K.headerCellClass
          };
          te(K.children, R + 1, ce);
          continue;
        }
        const ne = K.frozen ?? !1;
        B.push({
          ...K,
          parent: Q,
          idx: 0,
          level: 0,
          frozen: ne,
          width: K.width ?? a,
          minWidth: K.minWidth ?? s,
          maxWidth: K.maxWidth ?? c,
          sortable: K.sortable ?? h,
          resizable: K.resizable ?? x,
          draggable: K.draggable ?? p,
          renderCell: K.renderCell ?? l,
          renderHeaderCell: K.renderHeaderCell ?? m
        }), Xt(ne) && A++, R > W && (W = R);
      }
    }
    B.sort((k, R) => k.key === "rdg-select-column" ? -1 : R.key === "rdg-select-column" ? 1 : (k.frozen === "end" ? 2 : k.frozen === !1 ? 1 : 0) - (R.frozen === "end" ? 2 : R.frozen === !1 ? 1 : 0));
    const C = [];
    return B.forEach((k, R) => {
      k.idx = R, Vr(k, R, 0), k.colSpan != null && C.push(k), k.frozen === "end" && _ === -1 && (_ = R);
    }), {
      columns: B,
      colSpanColumns: C,
      lastStartFrozenColumnIndex: A,
      firstEndFrozenColumnIndex: _,
      headerRowsCount: W
    };
  }, [
    e,
    a,
    s,
    c,
    l,
    m,
    x,
    h,
    p
  ]), { templateColumns: T, layoutCssVars: P, totalStartFrozenColumnWidth: L, totalEndFrozenColumnWidth: I, columnMetrics: v } = q(() => {
    const A = /* @__PURE__ */ new Map();
    let _ = 0, W = 0, B = 0;
    const te = [];
    for (const k of d) {
      let R = n(k);
      typeof R == "number" ? R = Rn(R, k) : R = k.minWidth, te.push(`${R}px`), A.set(k, {
        width: R,
        left: _
      }), _ += R;
    }
    if (g !== -1) {
      const k = A.get(d[g]);
      W = k.left + k.width;
    }
    const C = {};
    for (let k = 0; k <= g; k++) {
      const R = d[k];
      C[`--rdg-frozen-start-${R.idx}`] = `${A.get(R).left}px`;
    }
    if (u !== -1) {
      const k = d[d.length - 1], R = A.get(k), Q = R.left + R.width;
      B = Q - A.get(d[u]).left;
      for (let K = u; K < d.length; K++) {
        const ne = d[K], ce = A.get(ne);
        C[`--rdg-frozen-end-${ne.idx}`] = `${Q - (ce.left + ce.width)}px`;
      }
    }
    return {
      templateColumns: te,
      layoutCssVars: C,
      totalStartFrozenColumnWidth: W,
      totalEndFrozenColumnWidth: B,
      columnMetrics: A
    };
  }, [
    n,
    d,
    g,
    u
  ]), [M, H] = q(() => {
    if (!i) return [0, d.length - 1];
    const A = o + L, _ = o + r - I, W = d.length - 1, B = Ct(g + 1, W);
    if (A >= _) return [B, B];
    let te = B;
    for (; te < W; ) {
      const { left: k, width: R } = v.get(d[te]);
      if (k + R > A) break;
      te++;
    }
    let C = te;
    for (; C < W; ) {
      const { left: k, width: R } = v.get(d[C]);
      if (k + R >= _) break;
      C++;
    }
    return [_t(B, te - 1), Ct(W, C + 1)];
  }, [
    v,
    d,
    g,
    o,
    L,
    I,
    r,
    i
  ]);
  return {
    columns: d,
    colSpanColumns: D,
    colOverscanStartIdx: M,
    colOverscanEndIdx: H,
    templateColumns: T,
    layoutCssVars: P,
    headerRowsCount: f,
    lastStartFrozenColumnIndex: g,
    firstEndFrozenColumnIndex: u,
    totalStartFrozenColumnWidth: L,
    totalEndFrozenColumnWidth: I
  };
}
function Vr(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const { parent: r } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Vr(r, t, n - 1);
  }
}
function oa(e, t, n, r, o, i, a, s, c) {
  const [l, m] = se(null), [h, x] = se(null), [p, d] = se(o), D = e.length === t.length, g = D && o !== p, u = [...n], f = [];
  for (const { key: I, idx: v, width: M } of t) {
    const H = i.get(I);
    I === (l == null ? void 0 : l.key) ? (u[v] = l.width === "max-content" ? l.width : `${l.width}px`, f.push(I)) : typeof M == "string" && (H == null ? void 0 : H.type) !== "resized" && (g || (h == null ? void 0 : h.has(I)) === !0 || H === void 0) && (u[v] = M, f.push(I));
  }
  const T = u.join(" ");
  rt(P);
  function P() {
    var M, H;
    if (d(o), f.length === 0) return;
    const I = new Map(i);
    let v = !1;
    for (const A of f) {
      const _ = cn(r, A);
      v || (v = _ !== ((M = i.get(A)) == null ? void 0 : M.width)), _ === void 0 ? I.delete(A) : I.set(A, {
        type: "measured",
        width: _
      });
    }
    if (l !== null) {
      const A = l.key, _ = (H = i.get(A)) == null ? void 0 : H.width, W = cn(r, A);
      W !== void 0 && _ !== W && (v = !0, I.set(A, {
        type: "resized",
        width: W
      })), m(null);
    }
    v && a(I);
  }
  function L(I, v) {
    var H;
    const { key: M } = I;
    if (Sn(() => {
      var A;
      if (D) {
        const _ = /* @__PURE__ */ new Set();
        for (const { key: W, width: B } of t) M !== W && typeof B == "string" && ((A = i.get(W)) == null ? void 0 : A.type) !== "resized" && _.add(W);
        x(_);
      }
      m({
        key: M,
        width: v
      }), c(typeof v == "number");
    }), x(null), s) {
      const A = (H = i.get(M)) == null ? void 0 : H.width, _ = typeof v == "number" ? v : cn(r, M);
      _ !== void 0 && _ !== A && s(I, _);
    }
  }
  return {
    gridTemplateColumns: T,
    handleColumnResize: L
  };
}
function cn(e, t) {
  var r, o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`;
  return (o = (r = e.current) == null ? void 0 : r.querySelector(n)) == null ? void 0 : o.getBoundingClientRect().width;
}
const Gr = {
  inlineSize: 1,
  blockSize: 1
}, yt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new Map(), Qe = globalThis.ResizeObserver == null ? null : new ResizeObserver(ia);
function ia(e) {
  for (const t of e) {
    const n = t.target;
    vn.has(n) && jr(vn.get(n), t.contentBoxSize[0]);
  }
}
function jr(e, t) {
  var n;
  if (yt.has(e)) {
    const r = yt.get(e);
    if (r.inlineSize === t.inlineSize && r.blockSize === t.blockSize) return;
  }
  yt.set(e, t), (n = xn.get(e)) == null || n();
}
function aa() {
  return Gr;
}
function sa(e) {
  const { inlineSize: t, blockSize: n } = Nr(G((r) => (xn.set(e, r), () => {
    xn.delete(e);
  }), [e]), G(() => yt.get(e) ?? Gr, [e]), aa);
  return rt(() => {
    const r = e.current;
    return vn.set(r, e), Qe == null || Qe.observe(r), yt.has(e) || jr(e, {
      inlineSize: r.clientWidth,
      blockSize: r.clientHeight
    }), () => {
      Qe == null || Qe.unobserve(r);
    };
  }, [e]), [t, n];
}
function ge(e) {
  const t = fe(e);
  rt(() => {
    t.current = e;
  });
  const n = G((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Pt(e) {
  const [t, n] = se(!1);
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
const qt = St(void 0);
qt.displayName = "RowSelectionContext";
const On = St(void 0);
On.displayName = "RowSelectionChangeContext";
function Xr() {
  const e = vt(qt), t = vt(On);
  if (e === void 0 || t === void 0) throw new Error("useRowSelection must be used within renderCell");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Nn = St(void 0);
Nn.displayName = "HeaderRowSelectionContext";
const An = St(void 0);
An.displayName = "HeaderRowSelectionChangeContext";
function ca() {
  const e = vt(Nn), t = vt(An);
  if (e === void 0 || t === void 0) throw new Error("useHeaderRowSelection must be used within renderHeaderCell");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Cn = {
  scrollTop: 0,
  scrollLeft: 0
};
function la() {
  return Cn;
}
const ln = /* @__PURE__ */ new WeakMap();
function da(e) {
  return Nr(G((t) => {
    if (e.current === null) return () => {
    };
    const n = e.current;
    r();
    function r() {
      const { scrollTop: i } = n, a = Yi(n.scrollLeft), s = ln.get(e) ?? Cn;
      return s.scrollTop === i && s.scrollLeft === a ? !1 : (ln.set(e, {
        scrollTop: i,
        scrollLeft: a
      }), !0);
    }
    function o() {
      r() && t();
    }
    return n.addEventListener("scroll", o), () => n.removeEventListener("scroll", o);
  }, [e]), G(() => ln.get(e) ?? Cn, [e]), la);
}
function ua({ gridRef: e }) {
  const [t, n] = se(null);
  return {
    setScrollToPosition: n,
    scrollToPositionElement: t && /* @__PURE__ */ b("div", {
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
function fa({ columns: e, colSpanColumns: t, rows: n, topSummaryRows: r, bottomSummaryRows: o, colOverscanStartIdx: i, colOverscanEndIdx: a, lastStartFrozenColumnIndex: s, firstEndFrozenColumnIndex: c, rowOverscanStartIdx: l, rowOverscanEndIdx: m }) {
  const h = q(() => {
    if (i === 0) return 0;
    function* g() {
      if (yield { type: "HEADER" }, r != null) for (const u of r) yield {
        type: "SUMMARY",
        row: u
      };
      for (let u = l; u <= m; u++) yield {
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
      const f = u.idx;
      if (f >= i) break;
      for (const T of g()) {
        const P = ze(u, s, c, T);
        if (P !== void 0 && f + P > i) return f;
      }
    }
    return i;
  }, [
    l,
    m,
    n,
    r,
    o,
    i,
    s,
    c,
    t
  ]), x = c > -1 ? Math.min(a, c - 1) : a, p = G(function* (g) {
    for (let f = 0; f <= s; f++) yield e[f];
    const u = c > -1 ? c - 1 : e.length - 1;
    if (s < u) {
      g > s && g < h && (yield e[g]);
      for (let f = h; f <= x; f++) yield e[f];
      g > x && g <= u && (yield e[g]);
    }
    if (c > -1) for (let f = c; f < e.length; f++) yield e[f];
  }, [
    h,
    x,
    e,
    s,
    c
  ]), d = G(function* (g = -1, u) {
    const f = p(g);
    for (const T of f) {
      let P = u && ze(T, s, c, u);
      for (yield [
        T,
        T.idx === g,
        P
      ]; P !== void 0 && P > 1; )
        f.next(), P--;
    }
  }, [
    p,
    s,
    c
  ]), D = G(function* (g = -1, u) {
    if (g >= 0 && g < e.length) {
      const f = e[g];
      yield [
        f,
        !0,
        u && ze(f, s, c, u)
      ];
    }
  }, [
    e,
    s,
    c
  ]);
  return {
    viewportColumns: q(() => p(-1).toArray(), [p]),
    iterateOverViewportColumnsForRow: d,
    iterateOverViewportColumnsForRowOutsideOfViewport: D
  };
}
function ha({ rows: e, rowHeight: t, clientHeight: n, scrollTop: r, enableVirtualization: o }) {
  const { totalRowHeight: i, gridTemplateRows: a, getRowTop: s, getRowHeight: c, findRowIdx: l } = q(() => {
    if (typeof t == "number") return {
      totalRowHeight: t * e.length,
      gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
      getRowTop: (f) => f * t,
      getRowHeight: () => t,
      findRowIdx: (f) => sr(f / t)
    };
    let x = 0, p = "", d = null, D = 0;
    const g = e.map((f, T) => {
      const P = t(f), L = {
        top: x,
        height: P
      };
      return x += P, d === null ? (d = P, D = 1) : d === P ? D++ : (D > 1 ? p += `repeat(${D}, ${d}px) ` : p += `${d}px `, d = P, D = 1), T === e.length - 1 && (D > 1 ? p += `repeat(${D}, ${d}px)` : p += `${d}px`), L;
    }), u = (f) => _t(0, Ct(e.length - 1, f));
    return {
      totalRowHeight: x,
      gridTemplateRows: p,
      getRowTop: (f) => g[u(f)].top,
      getRowHeight: (f) => g[u(f)].height,
      findRowIdx(f) {
        let T = 0, P = g.length - 1;
        for (; T <= P; ) {
          const L = T + sr((P - T) / 2), I = g[L].top;
          if (I === f) return L;
          if (I < f ? T = L + 1 : I > f && (P = L - 1), T > P) return P;
        }
        return 0;
      }
    };
  }, [t, e]);
  let m = 0, h = e.length - 1;
  if (o) {
    const p = l(r), d = l(r + n);
    m = _t(0, p - 4), h = Ct(e.length - 1, d + 4);
  }
  return {
    rowOverscanStartIdx: m,
    rowOverscanEndIdx: h,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  };
}
const ga = "rdg-cell-dragged-over rdg-7-0-0-beta-60-35ccb4c8";
function ma({ column: e, colSpan: t, isCellActive: n, isDraggedOver: r, row: o, rowIdx: i, className: a, onMouseDown: s, onCellMouseDown: c, onClick: l, onCellClick: m, onDoubleClick: h, onCellDoubleClick: x, onContextMenu: p, onCellContextMenu: d, onRowChange: D, setActivePosition: g, style: u, ...f }) {
  const { tabIndex: T, childTabIndex: P, onFocus: L } = Pt(n), { cellClass: I } = e;
  a = nt(e, r && ga, typeof I == "function" ? I(o) : I, a);
  const v = Fr(e, o);
  function M(C = !1) {
    g({
      rowIdx: i,
      idx: e.idx
    }, { enableEditor: C });
  }
  function H(C, k) {
    let R = !1;
    if (k) {
      const Q = Tn(C);
      k({
        rowIdx: i,
        row: o,
        column: e,
        setActivePosition: M
      }, Q), R = Q.isGridDefaultPrevented();
    }
    return R;
  }
  function A(C) {
    s == null || s(C), H(C, c) || M();
  }
  function _(C) {
    l == null || l(C), H(C, m);
  }
  function W(C) {
    h == null || h(C), H(C, x) || M(!0);
  }
  function B(C) {
    p == null || p(C), H(C, d);
  }
  function te(C) {
    D(e, i, C);
  }
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !v || void 0,
    tabIndex: T,
    className: a,
    style: {
      ...it(e, t),
      ...u
    },
    onClick: _,
    onMouseDown: A,
    onDoubleClick: W,
    onContextMenu: B,
    onFocus: L,
    ...f,
    children: e.renderCell({
      column: e,
      row: o,
      rowIdx: i,
      isCellEditable: v,
      tabIndex: P,
      onRowChange: te
    })
  });
}
const wa = $e(ma);
function pa(e, t) {
  return /* @__PURE__ */ b(wa, { ...t }, e);
}
const ya = typeof scheduler == "object" && typeof scheduler.postTask == "function", ba = "rdg-7-0-0-beta-60-46f9ea88";
function va({ column: e, colSpan: t, row: n, rowIdx: r, onRowChange: o, closeEditor: i, onKeyDown: a, navigate: s }) {
  var T, P, L;
  const c = fe(void 0), l = fe(void 0), m = fe(void 0), h = ((T = e.editorOptions) == null ? void 0 : T.commitOnOutsideClick) ?? !0, x = pi(() => {
    D(!0, !1);
  });
  rt(() => {
    if (!h) return;
    function I(M) {
      if (c.current = M, ya) {
        const H = new AbortController(), { signal: A } = H;
        l.current = H, scheduler.postTask(x, {
          priority: "user-blocking",
          signal: A
        }).catch(() => {
        });
      } else m.current = requestAnimationFrame(x);
    }
    function v(M) {
      c.current === M && x();
    }
    return window.addEventListener("mousedown", I, { capture: !0 }), window.addEventListener("mousedown", v), () => {
      window.removeEventListener("mousedown", I, { capture: !0 }), window.removeEventListener("mousedown", v), p();
    };
  }, [h]);
  function p() {
    c.current = void 0, l.current !== void 0 && (l.current.abort(), l.current = void 0), m.current !== void 0 && (cancelAnimationFrame(m.current), m.current = void 0);
  }
  function d(I) {
    if (a) {
      const v = Tn(I);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(I);
        },
        onClose: D
      }, v), v.isGridDefaultPrevented()) return;
    }
    I.key === "Escape" ? D() : I.key === "Enter" ? D(!0) : Ai(I) && s(I);
  }
  function D(I = !1, v = !0) {
    I ? o(n, !0, v) : i(v);
  }
  function g(I, v = !1) {
    o(I, v, v);
  }
  const { cellClass: u } = e, f = nt(e, "rdg-editor-container", !((P = e.editorOptions) != null && P.displayCellContent) && ba, typeof u == "function" ? u(n) : u);
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: f,
    style: it(e, t),
    onKeyDown: d,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ oe(tt, { children: [e.renderEditCell({
      column: e,
      row: n,
      rowIdx: r,
      onRowChange: g,
      onClose: D
    }), ((L = e.editorOptions) == null ? void 0 : L.displayCellContent) && e.renderCell({
      column: e,
      row: n,
      rowIdx: r,
      isCellEditable: !0,
      tabIndex: -1,
      onRowChange: g
    })] })
  });
}
function xa({ column: e, rowIdx: t, isCellActive: n, setPosition: r }) {
  const { tabIndex: o, onFocus: i } = Pt(n), { colSpan: a } = e, s = Br(e, t), c = e.idx + 1;
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
    className: We(Wr, e.headerCellClass),
    style: {
      ...$r(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onMouseDown: l,
    children: e.name
  });
}
const Ca = "rdg-7-0-0-beta-60-2a7e240d", Da = "rdg-cell-resizable rdg-7-0-0-beta-60-1893dc0f", ka = "rdg-resize-handle rdg-7-0-0-beta-60-4e60db91", Sa = "rdg-cell-draggable", qr = "rdg-7-0-0-beta-60-f2d18717", Ta = `rdg-cell-dragging ${qr}`, Pa = `rdg-cell-drag-over ${qr}`, Ia = "rdg-7-0-0-beta-60-3d12c7ae";
function Ra({ column: e, colSpan: t, rowIdx: n, isCellActive: r, onColumnResize: o, onColumnResizeEnd: i, onColumnsReorder: a, sortColumns: s, onSortColumnsChange: c, setPosition: l, shouldFocusGrid: m, direction: h, draggedColumnKey: x, setDraggedColumnKey: p }) {
  const [d, D] = se(!1), g = fe(null), u = x === e.key, f = Br(e, n), { tabIndex: T, childTabIndex: P, onFocus: L } = Pt(m || r), I = s == null ? void 0 : s.findIndex((S) => S.columnKey === e.key), v = I !== void 0 && I > -1 ? s[I] : void 0, M = v == null ? void 0 : v.direction, H = v !== void 0 && s.length > 1 ? I + 1 : void 0, A = M && !H ? M === "ASC" ? "ascending" : "descending" : void 0, { sortable: _, resizable: W, draggable: B } = e, te = nt(e, e.headerCellClass, _ && Ca, W && Da, B && Sa, u && Ta, d && Pa);
  function C(S) {
    if (c == null) return;
    const { sortDescendingFirst: z } = e;
    if (v === void 0) {
      const U = {
        columnKey: e.key,
        direction: z ? "DESC" : "ASC"
      };
      c(s && S ? [...s, U] : [U]);
    } else {
      let U;
      if ((z === !0 && M === "DESC" || z !== !0 && M === "ASC") && (U = {
        columnKey: e.key,
        direction: M === "ASC" ? "DESC" : "ASC"
      }), S) {
        const ee = [...s];
        U ? ee[I] = U : ee.splice(I, 1), c(ee);
      } else c(U ? [U] : []);
    }
  }
  function k(S) {
    L == null || L(S), m && l({
      idx: 0,
      rowIdx: n
    });
  }
  function R() {
    l({
      idx: e.idx,
      rowIdx: n
    });
  }
  function Q(S) {
    _ && C(S.ctrlKey || S.metaKey);
  }
  function K(S) {
    const { key: z } = S;
    if (_ && (z === " " || z === "Enter"))
      S.preventDefault(), C(S.ctrlKey || S.metaKey);
    else if (W && Pn(S) && (z === "ArrowLeft" || z === "ArrowRight")) {
      S.stopPropagation();
      const { width: U } = S.currentTarget.getBoundingClientRect(), { leftKey: ee } = In(h), j = Rn(U + (z === ee ? -10 : 10), e);
      j !== U && o(e, j);
    }
  }
  function ne(S) {
    Sn(() => {
      p(e.key);
    }), S.dataTransfer.setDragImage(g.current, 0, 0), S.dataTransfer.dropEffect = "move";
  }
  function ce() {
    p(void 0);
  }
  function Be(S) {
    S.preventDefault(), S.dataTransfer.dropEffect = "move";
  }
  function Te(S) {
    D(!1), S.preventDefault(), a == null || a(x, e.key);
  }
  function _e(S) {
    cr(S) && D(!0);
  }
  function Oe(S) {
    cr(S) && D(!1);
  }
  let le, be;
  B && (le = {
    draggable: !0,
    onDragStart: ne,
    onDragEnd: ce
  }, x !== void 0 && x !== e.key && (be = {
    onDragOver: Be,
    onDragEnter: _e,
    onDragLeave: Oe,
    onDrop: Te
  }));
  const O = {
    ...$r(e, n, f),
    ...it(e, t)
  }, N = e.renderHeaderCell({
    column: e,
    sortDirection: M,
    priority: H,
    tabIndex: P
  });
  return /* @__PURE__ */ oe(tt, { children: [u && /* @__PURE__ */ b("div", {
    ref: g,
    style: O,
    className: nt(e, e.headerCellClass, Ia),
    children: N
  }), /* @__PURE__ */ oe("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": f,
    "aria-selected": r,
    "aria-sort": A,
    tabIndex: T,
    className: te,
    style: O,
    onMouseDown: R,
    onFocus: k,
    onClick: Q,
    onKeyDown: K,
    ...le,
    ...be,
    children: [N, W && /* @__PURE__ */ b(Ea, {
      direction: h,
      column: e,
      onColumnResize: o,
      onColumnResizeEnd: i
    })]
  })] });
}
function Ea({ direction: e, column: t, onColumnResize: n, onColumnResizeEnd: r }) {
  const o = fe(void 0), i = e === "rtl";
  function a(m) {
    if (m.pointerType === "mouse" && m.button !== 0) return;
    m.preventDefault();
    const { currentTarget: h, pointerId: x } = m;
    h.setPointerCapture(x);
    const { right: p, left: d } = h.parentElement.getBoundingClientRect();
    o.current = i ? m.clientX - d : p - m.clientX;
  }
  function s(m) {
    const h = o.current;
    if (h === void 0) return;
    const { width: x, right: p, left: d } = m.currentTarget.parentElement.getBoundingClientRect();
    let D = i ? p + h - m.clientX : m.clientX + h - d;
    D = Rn(D, t), x > 0 && D !== x && n(t, D);
  }
  function c() {
    r(), o.current = void 0;
  }
  function l() {
    n(t, "max-content");
  }
  return /* @__PURE__ */ b("div", {
    "aria-hidden": !0,
    className: ka,
    onClick: Ii,
    onPointerDown: a,
    onPointerMove: s,
    onLostPointerCapture: c,
    onDoubleClick: l
  });
}
function cr(e) {
  return !e.currentTarget.contains(e.relatedTarget);
}
const Fn = "rdg-row rdg-7-0-0-beta-60-3c083f1b", Ma = "rdg-top-summary-row", Oa = "rdg-bottom-summary-row", Kr = "rdg-header-row rdg-7-0-0-beta-60-0dbd5994";
function Na({ headerRowClass: e, rowIdx: t, iterateOverViewportColumnsForRow: n, onColumnResize: r, onColumnResizeEnd: o, onColumnsReorder: i, sortColumns: a, onSortColumnsChange: s, activeCellIdx: c, setPosition: l, shouldFocusGrid: m, direction: h }) {
  const [x, p] = se(), d = c === -1, D = n(c, { type: "HEADER" }).map(([g, u, f], T) => /* @__PURE__ */ b(Ra, {
    column: g,
    colSpan: f,
    rowIdx: t,
    isCellActive: u,
    onColumnResize: r,
    onColumnResizeEnd: o,
    onColumnsReorder: i,
    onSortColumnsChange: s,
    sortColumns: a,
    setPosition: l,
    shouldFocusGrid: m && T === 0,
    direction: h,
    draggedColumnKey: x,
    setDraggedColumnKey: p
  }, g.key)).toArray();
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": t,
    className: We(Kr, d && "rdg-row-active", e),
    children: D
  });
}
var Aa = $e(Na);
function Fa({ rowIdx: e, level: t, iterateOverViewportColumnsForRow: n, activeCellIdx: r, setPosition: o }) {
  const i = [], a = /* @__PURE__ */ new Set();
  for (const [s, c] of n(r)) {
    if (s.parent === void 0) continue;
    let { parent: l } = s;
    for (; l.level > t && l.parent !== void 0; )
      ({ parent: l } = l);
    l.level === t && !a.has(l) && (a.add(l), i.push(/* @__PURE__ */ b(xa, {
      column: l,
      rowIdx: e,
      isCellActive: c,
      setPosition: o
    }, l.idx)));
  }
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": e,
    className: Kr,
    children: i
  });
}
var Ha = $e(Fa);
function La({ className: e, rowIdx: t, gridRowStart: n, activeCellIdx: r, isRowSelectionDisabled: o, isRowSelected: i, draggedOverCellIdx: a, row: s, iterateOverViewportColumnsForRow: c, activeCellEditor: l, isTreeGrid: m, onCellMouseDown: h, onCellClick: x, onCellDoubleClick: p, onCellContextMenu: d, rowClass: D, onRowChange: g, setActivePosition: u, style: f, ...T }) {
  const P = Tt().renderCell, L = r === -1;
  e = We(Fn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, L && "rdg-row-active", D == null ? void 0 : D(s, t), e);
  const I = c(r, {
    type: "ROW",
    row: s
  }).map(([v, M, H]) => M && l ? l : P(v.key, {
    column: v,
    colSpan: H,
    row: s,
    rowIdx: t,
    isDraggedOver: a === v.idx,
    isCellActive: M,
    onCellMouseDown: h,
    onCellClick: x,
    onCellDoubleClick: p,
    onCellContextMenu: d,
    onRowChange: g,
    setActivePosition: u
  })).toArray();
  return /* @__PURE__ */ b(qt, {
    value: q(() => ({
      isRowSelected: i,
      isRowSelectionDisabled: o
    }), [o, i]),
    children: /* @__PURE__ */ b("div", {
      role: "row",
      tabIndex: m ? L ? 0 : -1 : void 0,
      className: e,
      style: {
        gridRowStart: n,
        ...f
      },
      ...T,
      children: I
    })
  });
}
const za = $e(La);
function Qr(e, t) {
  return /* @__PURE__ */ b(za, { ...t }, e);
}
const Wa = "rdg-sort-arrow rdg-7-0-0-beta-60-3d5115f3";
function Ya({ sortDirection: e, priority: t }) {
  return /* @__PURE__ */ oe(tt, { children: [$a({ sortDirection: e }), Ba({ priority: t })] });
}
function $a({ sortDirection: e }) {
  return e === void 0 ? null : /* @__PURE__ */ b("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Wa,
    "aria-hidden": !0,
    children: /* @__PURE__ */ b("path", { d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
  });
}
function Ba({ priority: e }) {
  return e;
}
const _a = "rdg rdg-7-0-0-beta-60-ccd2e5d9", Ua = "rdg-viewport-dragging rdg-7-0-0-beta-60-e9b0e1c9", Zr = "rdg-7-0-0-beta-60-2e639f12", Va = "rdg-7-0-0-beta-60-86aef152", Ga = "rdg-7-0-0-beta-60-7689f238", Jr = `${Zr} ${Va}`, eo = `${Zr} ${Ga}`, to = "rdg-7-0-0-beta-60-487ac462", ja = `${Jr} ${to}`, Xa = `${eo} ${to}`;
function qa({ column: e, colSpan: t, row: n, rowIdx: r, isCellActive: o, setActivePosition: i }) {
  var x;
  const { tabIndex: a, childTabIndex: s, onFocus: c } = Pt(o), { summaryCellClass: l } = e, m = nt(e, typeof l == "function" ? l(n) : l);
  function h() {
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
    className: m,
    style: it(e, t),
    onMouseDown: h,
    onFocus: c,
    children: (x = e.renderSummaryCell) == null ? void 0 : x.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
var Ka = $e(qa);
const Qa = "rdg-summary-row rdg-7-0-0-beta-60-0b90c82c";
function Za({ rowIdx: e, gridRowStart: t, row: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, setActivePosition: i, top: a, bottom: s, isTop: c, isTreeGrid: l, "aria-rowindex": m }) {
  const h = o === -1, x = r(o, {
    type: "SUMMARY",
    row: n
  }).map(([p, d, D]) => /* @__PURE__ */ b(Ka, {
    column: p,
    colSpan: D,
    row: n,
    rowIdx: e,
    isCellActive: d,
    setActivePosition: i
  }, p.key)).toArray();
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": m,
    tabIndex: l ? h ? 0 : -1 : void 0,
    className: We(Fn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Qa, c ? Ma : Oa, h && "rdg-row-active"),
    style: {
      gridRowStart: t,
      top: a,
      bottom: s
    },
    children: x
  });
}
var lr = $e(Za);
function no(e) {
  const { ref: t, columns: n, rows: r, topSummaryRows: o, bottomSummaryRows: i, rowKeyGetter: a, onRowsChange: s, rowHeight: c, headerRowHeight: l, summaryRowHeight: m, columnWidths: h, onColumnWidthsChange: x, selectedRows: p, isRowSelectionDisabled: d, onSelectedRowsChange: D, sortColumns: g, onSortColumnsChange: u, defaultColumnOptions: f, onCellMouseDown: T, onCellClick: P, onCellDoubleClick: L, onCellContextMenu: I, onCellKeyDown: v, onActivePositionChange: M, onScroll: H, onColumnResize: A, onColumnsReorder: _, onFill: W, onCellCopy: B, onCellPaste: te, enableVirtualization: C, renderers: k, className: R, style: Q, rowClass: K, headerRowClass: ne, direction: ce, role: Be, "aria-label": Te, "aria-labelledby": _e, "aria-description": Oe, "aria-describedby": le, "aria-rowcount": be, "data-testid": O, "data-cy": N } = e, S = Tt(), z = Be ?? "grid", U = c ?? 35, ee = l ?? (typeof U == "number" ? U : 35), j = m ?? (typeof U == "number" ? U : 35), he = (k == null ? void 0 : k.renderRow) ?? (S == null ? void 0 : S.renderRow) ?? Qr, we = (k == null ? void 0 : k.renderCell) ?? (S == null ? void 0 : S.renderCell) ?? pa, ve = (k == null ? void 0 : k.renderSortStatus) ?? (S == null ? void 0 : S.renderSortStatus) ?? Ya, pe = (k == null ? void 0 : k.renderCheckbox) ?? (S == null ? void 0 : S.renderCheckbox) ?? _i, Pe = (k == null ? void 0 : k.noRowsFallback) ?? (S == null ? void 0 : S.noRowsFallback), xe = C ?? !0, Ce = ce ?? "ltr", $ = fe(null), { scrollTop: Z, scrollLeft: de } = da($), [Ie, at] = sa($), [Yn, Kt] = se(() => h ?? /* @__PURE__ */ new Map()), [$n, Bn] = se(!1), [Qt, _n] = se(!1), [Ne, Zt] = se(void 0), [Ge, xo] = se(-1), Jt = h != null && x != null && !$n, Et = Jt ? h : Yn, Co = Jt ? (w) => {
    Kt(w), x(w);
  } : Kt, Un = G((w) => {
    var y;
    return ((y = Et.get(w.key)) == null ? void 0 : y.width) ?? w.width;
  }, [Et]), { columns: Re, colSpanColumns: Vn, lastStartFrozenColumnIndex: je, firstEndFrozenColumnIndex: Ue, headerRowsCount: Ae, colOverscanStartIdx: Do, colOverscanEndIdx: ko, templateColumns: So, layoutCssVars: To, totalStartFrozenColumnWidth: Gn, totalEndFrozenColumnWidth: jn } = ra({
    rawColumns: n,
    defaultColumnOptions: f,
    getColumnWidth: Un,
    scrollLeft: de,
    viewportWidth: Ie,
    enableVirtualization: xe
  }), st = z === "treegrid", Ee = (o == null ? void 0 : o.length) ?? 0, De = (i == null ? void 0 : i.length) ?? 0, Xn = Ee + De, ke = Ae + Ee, en = Ae - 1, Fe = -ke, Xe = r.length + De - 1, tn = Fe + en, Mt = Re.length - 1, Ot = Ae * ee, Po = Xn * j, qe = at - Ot - Po, nn = p != null && D != null, { leftKey: Io, rightKey: qn } = In(Ce), Kn = be ?? Ae + r.length + Xn, Ro = {
    gridColumnStart: je + 2,
    insetInlineStart: Gn
  }, Eo = {
    gridColumnStart: Ue + 1,
    gridColumnEnd: -1,
    insetInlineEnd: jn
  }, { activePosition: V, setActivePosition: ct, setPositionToFocus: Qn, activePositionIsInActiveBounds: Mo, activePositionIsInViewport: rn, activePositionIsRow: Zn, activePositionIsCellInViewport: Nt, validatePosition: At, getActiveColumn: Ke, getActiveRow: lt } = $i({
    gridRef: $,
    columns: Re,
    rows: r,
    isTreeGrid: st,
    maxColIdx: Mt,
    minRowIdx: Fe,
    maxRowIdx: Xe,
    setDraggedOverRowIdx: Zt
  }), { setScrollToPosition: Oo, scrollToPositionElement: No } = ua({ gridRef: $ }), Ao = q(() => ({
    renderCheckbox: pe,
    renderSortStatus: ve,
    renderCell: we
  }), [
    pe,
    ve,
    we
  ]), Fo = q(() => {
    let w = !1, y = !1;
    if (a != null && p != null && p.size > 0) {
      for (const E of r)
        if (p.has(a(E)) ? w = !0 : y = !0, w && y) break;
    }
    return {
      isRowSelected: w && !y,
      isIndeterminate: w && y
    };
  }, [
    r,
    p,
    a
  ]), { rowOverscanStartIdx: dt, rowOverscanEndIdx: ut, totalRowHeight: Ft, gridTemplateRows: Ho, getRowTop: Jn, getRowHeight: Lo, findRowIdx: on } = ha({
    rows: r,
    rowHeight: U,
    clientHeight: qe,
    scrollTop: Z,
    enableVirtualization: xe
  }), { viewportColumns: er, iterateOverViewportColumnsForRow: ft, iterateOverViewportColumnsForRowOutsideOfViewport: zo } = fa({
    columns: Re,
    colSpanColumns: Vn,
    colOverscanStartIdx: Do,
    colOverscanEndIdx: ko,
    lastStartFrozenColumnIndex: je,
    firstEndFrozenColumnIndex: Ue,
    rowOverscanStartIdx: dt,
    rowOverscanEndIdx: ut,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), { gridTemplateColumns: Wo, handleColumnResize: Yo } = oa(Re, er, So, $, Ie, Et, Co, A, Bn), $o = ge(Yo), Bo = ge(ri), _o = ge(_), Uo = ge(u), Vo = ge(T), Go = ge(P), jo = ge(L), Xo = ge(I), qo = ge(Zo), Ko = ge(nr), Qo = ge(Ht), an = ge(ht), tr = ge(li);
  wi(t, () => ({
    element: $.current,
    scrollToCell({ idx: w, rowIdx: y }) {
      const E = w != null && w > je && (Ue === -1 || w < Ue) && w < Re.length ? w : void 0, Y = y != null && At({
        idx: 0,
        rowIdx: y
      }).isPositionInViewport ? y + ke : void 0;
      (E != null || Y != null) && Oo({
        idx: E,
        rowIdx: Y
      });
    },
    setActivePosition: ht
  }));
  function Zo(w) {
    if (!D) return;
    pt(a);
    const y = new Set(p);
    for (const E of r) {
      if ((d == null ? void 0 : d(E)) === !0) continue;
      const Y = a(E);
      w.checked ? y.add(Y) : y.delete(Y);
    }
    D(y);
  }
  function nr(w) {
    if (!D) return;
    pt(a);
    const { row: y, checked: E, isShiftClick: Y } = w;
    if ((d == null ? void 0 : d(y)) === !0) return;
    const F = new Set(p), X = a(y), ie = r.indexOf(y);
    if (xo(ie), E ? F.add(X) : F.delete(X), Y && Ge !== -1 && Ge !== ie && Ge < r.length) {
      const [re, ye] = Ge < ie ? [Ge, ie] : [ie, Ge];
      for (let He = re + 1; He < ye; He++) {
        const sn = r[He];
        (d == null ? void 0 : d(sn)) !== !0 && (E ? F.add(a(sn)) : F.delete(a(sn)));
      }
    }
    D(F);
  }
  function Jo(w) {
    const { idx: y, rowIdx: E, mode: Y } = V;
    if (Y === "EDIT") return;
    if (v && rn) {
      const X = Tn(w);
      if (v({
        mode: "ACTIVE",
        row: r[E],
        column: Re[y],
        rowIdx: E,
        setActivePosition: ht
      }, X), X.isGridDefaultPrevented()) return;
    }
    const { target: F } = w;
    if (F instanceof Element && !(F.closest(".rdg-cell") === null && !(st && F.role === "row")))
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
          ni(w);
          break;
      }
  }
  function Ht(w, y, E) {
    if (typeof s != "function" || E === r[y]) return;
    const Y = r.with(y, E);
    s(Y, {
      indexes: [y],
      column: w
    });
  }
  function rr() {
    V.mode === "EDIT" && Ht(Ke(), V.rowIdx, V.row);
  }
  function ei(w) {
    Nt && (B == null || B({
      row: lt(),
      column: Ke()
    }, w));
  }
  function ti(w) {
    if (typeof te != "function" || typeof s != "function" || !Lt(V)) return;
    const y = Ke(), E = lt(), Y = te({
      row: E,
      column: y
    }, w);
    Ht(y, V.rowIdx, Y);
  }
  function ni(w) {
    if (!Nt) return;
    const y = lt(), { key: E, shiftKey: Y } = w;
    if (nn && Y && E === " ") {
      pt(a);
      const F = a(y);
      nr({
        row: y,
        checked: !p.has(F),
        isShiftClick: !1
      }), w.preventDefault();
      return;
    }
    Lt(V) && Ni(w, te != null) && ct(({ idx: F, rowIdx: X }) => ({
      idx: F,
      rowIdx: X,
      mode: "EDIT",
      row: y,
      originalRow: y
    }));
  }
  function ri() {
    $n && (x == null || x(Et), Bn(!1));
  }
  function oi(w) {
    w.preventDefault(), !(w.pointerType === "mouse" && w.button !== 0) && (_n(!0), w.currentTarget.setPointerCapture(w.pointerId));
  }
  function ii(w) {
    const y = $.current, E = Ot + Ee * j, Y = Z - E + w.clientY - y.getBoundingClientRect().top, F = on(Y);
    Zt(F);
    const X = ke + F + 1;
    Bt(y.querySelector(`& > [aria-rowindex="${X}"] > [aria-colindex="${V.idx + 1}"]`));
  }
  function ai() {
    if (_n(!1), Ne === void 0) return;
    const { rowIdx: w } = V, [y, E] = w < Ne ? [w + 1, Ne + 1] : [Ne, w];
    or(y, E), Zt(void 0);
  }
  function si() {
    zr($.current, !1);
  }
  function ci(w) {
    w.stopPropagation(), or(V.rowIdx + 1, r.length);
  }
  function or(w, y) {
    if (s == null) return;
    const { idx: E } = V, Y = Ke(), F = lt(), X = [...r], ie = [];
    for (let re = w; re < y; re++) if (Lt({
      rowIdx: re,
      idx: E
    })) {
      const ye = W({
        columnKey: Y.key,
        sourceRow: F,
        targetRow: r[re]
      });
      ye !== r[re] && (X[re] = ye, ie.push(re));
    }
    ie.length > 0 && s(X, {
      indexes: ie,
      column: Y
    });
  }
  function Lt(w) {
    return At(w).isCellInViewport && Fr(Re[w.idx], r[w.rowIdx]);
  }
  function ht(w, y) {
    const { isPositionInActiveBounds: E } = At(w);
    if (!E) return;
    rr();
    const Y = dr(V, w);
    if (y != null && y.enableEditor && Lt(w)) {
      const F = r[w.rowIdx];
      ct({
        ...w,
        mode: "EDIT",
        row: F,
        originalRow: F
      });
    } else if (Y) Bt(Hr($.current));
    else {
      const F = {
        ...w,
        mode: "ACTIVE"
      };
      ct(F), y != null && y.shouldFocus && Qn(F);
    }
    M && !Y && M({
      rowIdx: w.rowIdx,
      row: r[w.rowIdx],
      column: Re[w.idx]
    });
  }
  function li({ idx: w, rowIdx: y }) {
    ht({
      rowIdx: Fe + y - 1,
      idx: w
    });
  }
  function di(w, y, E) {
    const { idx: Y, rowIdx: F } = V;
    switch (w) {
      case "ArrowUp": {
        const X = F - 1;
        return {
          idx: Y === -1 && X < -Ee ? 0 : Y,
          rowIdx: X
        };
      }
      case "ArrowDown":
        return {
          idx: Y,
          rowIdx: F + 1
        };
      case Io: {
        const X = Y - 1;
        return {
          idx: F < -Ee && X < 0 ? 0 : X,
          rowIdx: F
        };
      }
      case qn:
        return {
          idx: Y + 1,
          rowIdx: F
        };
      case "Tab":
        return {
          idx: Y + (E ? -1 : 1),
          rowIdx: F
        };
      case "Home":
        return Zn || y ? {
          idx: 0,
          rowIdx: Fe
        } : {
          idx: 0,
          rowIdx: F
        };
      case "End":
        return Zn ? {
          idx: Y,
          rowIdx: Xe
        } : {
          idx: Mt,
          rowIdx: y ? Xe : F
        };
      case "PageUp": {
        if (F === Fe) return V;
        const X = Jn(F) + Lo(F) - qe;
        return {
          idx: Y,
          rowIdx: X > 0 ? on(X) : 0
        };
      }
      case "PageDown": {
        if (F >= r.length) return V;
        const X = Jn(F) + qe;
        return {
          idx: Y,
          rowIdx: X < Ft ? on(X) : r.length - 1
        };
      }
      default:
        return V;
    }
  }
  function ir(w) {
    const { key: y, shiftKey: E } = w;
    let Y = "NONE";
    if (y === "Tab") {
      if (Pi({
        shiftKey: E,
        maxColIdx: Mt,
        minRowIdx: Fe,
        maxRowIdx: Xe,
        activePosition: V
      })) {
        rr();
        return;
      }
      Y = "CHANGE_ROW";
    }
    w.preventDefault();
    const F = di(y, Pn(w), E);
    dr(V, F) || ht(Ti({
      moveUp: y === "ArrowUp",
      moveNext: y === qn || y === "Tab" && !E,
      columns: Re,
      colSpanColumns: Vn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: Fe,
      mainHeaderRowIdx: tn,
      maxRowIdx: Xe,
      lastStartFrozenColumnIndex: je,
      firstEndFrozenColumnIndex: Ue,
      cellNavigationMode: Y,
      activePosition: V,
      nextPosition: F,
      nextPositionIsCellInActiveBounds: At(F).isCellInActiveBounds
    }), { shouldFocus: !0 });
  }
  function ui(w) {
    if (Ne === void 0) return;
    const { rowIdx: y } = V;
    return (y < Ne ? y < w && w <= Ne : y > w && w >= Ne) ? V.idx : void 0;
  }
  function fi() {
    var He;
    if (W == null || V.mode !== "ACTIVE" || !Nt) return;
    const { rowIdx: w } = V, y = Ke();
    if (y.renderEditCell == null || y.editable === !1) return;
    const E = w === Xe, Y = Un(y), F = ((He = y.colSpan) == null ? void 0 : He.call(y, {
      type: "ROW",
      row: lt()
    })) ?? 1, { insetInlineStart: X, ...ie } = it(y, F), re = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", ye = y.idx + F - 1 === Mt;
    return /* @__PURE__ */ b("div", {
      style: {
        ...ie,
        gridRowStart: ke + w + 1,
        marginInlineEnd: ye ? void 0 : re,
        marginBlockEnd: E ? void 0 : re,
        insetInlineStart: X ? `calc(${X} + ${Y}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
      },
      className: We(Wi, y.frozen && "rdg-7-0-0-beta-60-7abddb3e"),
      onPointerDown: oi,
      onPointerMove: Qt ? ii : void 0,
      onLostPointerCapture: Qt ? ai : void 0,
      onClick: si,
      onDoubleClick: ci
    });
  }
  function ar(w, y, E) {
    return /* @__PURE__ */ oe(tt, { children: [
      /* @__PURE__ */ b("div", {
        className: E,
        style: {
          ...w,
          gridRowStart: 1,
          gridRowEnd: Ae + 1 + Ee,
          insetBlockStart: 0
        }
      }),
      r.length > 0 && /* @__PURE__ */ b("div", {
        className: y,
        style: {
          ...w,
          gridRowStart: ke + dt + 1,
          gridRowEnd: ke + ut + 2
        }
      }),
      i != null && De > 0 && /* @__PURE__ */ b("div", {
        className: E,
        style: {
          ...w,
          gridRowStart: ke + r.length + 1,
          gridRowEnd: ke + r.length + 1 + De,
          insetBlockStart: qe > Ft ? at - j * De : void 0,
          insetBlockEnd: qe > Ft ? void 0 : 0
        }
      })
    ] });
  }
  function hi(w) {
    if (!Nt || V.rowIdx !== w || V.mode !== "EDIT") return;
    const { row: y } = V, E = Ke(), Y = ze(E, je, Ue, {
      type: "ROW",
      row: y
    });
    function F(ie) {
      const re = {
        idx: V.idx,
        rowIdx: w,
        mode: "ACTIVE"
      };
      ct(re), ie && Qn(re);
    }
    function X(ie, re, ye) {
      re ? Sn(() => {
        Ht(E, V.rowIdx, ie), F(ye);
      }) : ct((He) => ({
        ...He,
        row: ie
      }));
    }
    return /* @__PURE__ */ b(va, {
      column: E,
      colSpan: Y,
      row: y,
      rowIdx: w,
      onRowChange: X,
      closeEditor: F,
      onKeyDown: v,
      navigate: ir
    }, E.key);
  }
  function* gi() {
    const w = V.rowIdx;
    rn && w < dt && (yield w);
    for (let y = dt; y <= ut; y++) yield y;
    rn && w > ut && (yield w);
  }
  function mi() {
    const { idx: w, rowIdx: y } = V;
    return gi().map((E) => {
      const Y = E === y, F = Y && (E < dt || E > ut) ? zo : ft, X = r[E], ie = ke + E + 1;
      let re = E, ye = !1;
      return typeof a == "function" && (re = a(X), ye = (p == null ? void 0 : p.has(re)) ?? !1), he(re, {
        "aria-rowindex": ke + E + 1,
        "aria-selected": nn ? ye : void 0,
        rowIdx: E,
        row: X,
        iterateOverViewportColumnsForRow: F,
        isRowSelectionDisabled: (d == null ? void 0 : d(X)) ?? !1,
        isRowSelected: ye,
        onCellMouseDown: Vo,
        onCellClick: Go,
        onCellDoubleClick: jo,
        onCellContextMenu: Xo,
        rowClass: K,
        gridRowStart: ie,
        activeCellIdx: Y ? w : void 0,
        draggedOverCellIdx: ui(E),
        onRowChange: Qo,
        setActivePosition: an,
        activeCellEditor: hi(E),
        isTreeGrid: st
      });
    }).toArray();
  }
  Jt && Yn !== h && Kt(h);
  let zt = `repeat(${Ae}, ${ee}px)`;
  return Ee > 0 && (zt += ` repeat(${Ee}, ${j}px)`), r.length > 0 && (zt += Ho), De > 0 && (zt += ` repeat(${De}, ${j}px)`), /* @__PURE__ */ oe("div", {
    role: z,
    "aria-label": Te,
    "aria-labelledby": _e,
    "aria-description": Oe,
    "aria-describedby": le,
    "aria-multiselectable": nn ? !0 : void 0,
    "aria-colcount": Re.length,
    "aria-rowcount": Kn,
    tabIndex: -1,
    className: We(_a, Qt && Ua, R),
    style: {
      ...Q,
      scrollPaddingInlineStart: Gn,
      scrollPaddingInlineEnd: jn,
      scrollPaddingBlockStart: Ot + Ee * j,
      scrollPaddingBlockEnd: De * j,
      gridTemplateColumns: Wo,
      gridTemplateRows: zt,
      "--rdg-header-row-height": `${ee}px`,
      ...To
    },
    dir: Ce,
    ref: $,
    onScroll: H,
    onKeyDown: Jo,
    onCopy: ei,
    onPaste: ti,
    "data-testid": O,
    "data-cy": N,
    children: [
      /* @__PURE__ */ oe(En, {
        value: Ao,
        children: [/* @__PURE__ */ b(An, {
          value: qo,
          children: /* @__PURE__ */ oe(Nn, {
            value: Fo,
            children: [Array.from({ length: en }, (w, y) => /* @__PURE__ */ b(Ha, {
              rowIdx: y + 1,
              level: -en + y,
              iterateOverViewportColumnsForRow: ft,
              activeCellIdx: V.rowIdx === Fe + y ? V.idx : void 0,
              setPosition: tr
            }, y)), /* @__PURE__ */ b(Aa, {
              headerRowClass: ne,
              rowIdx: Ae,
              iterateOverViewportColumnsForRow: ft,
              onColumnResize: $o,
              onColumnResizeEnd: Bo,
              onColumnsReorder: _o,
              sortColumns: g,
              onSortColumnsChange: Uo,
              activeCellIdx: V.rowIdx === tn ? V.idx : void 0,
              setPosition: tr,
              shouldFocusGrid: !Mo,
              direction: Ce
            })]
          })
        }), r.length === 0 && Pe ? Pe : /* @__PURE__ */ oe(tt, { children: [
          o == null ? void 0 : o.map((w, y) => {
            const E = Ae + 1 + y, Y = tn + 1 + y, F = V.rowIdx === Y;
            return /* @__PURE__ */ b(lr, {
              "aria-rowindex": E,
              rowIdx: Y,
              gridRowStart: E,
              row: w,
              top: Ot + j * y,
              bottom: void 0,
              iterateOverViewportColumnsForRow: ft,
              activeCellIdx: F ? V.idx : void 0,
              isTop: !0,
              setActivePosition: an,
              isTreeGrid: st
            }, y);
          }),
          /* @__PURE__ */ b(On, {
            value: Ko,
            children: mi()
          }),
          i == null ? void 0 : i.map((w, y) => {
            const E = ke + r.length + y + 1, Y = r.length + y, F = V.rowIdx === Y, X = qe > Ft ? at - j * (De - y) : void 0, ie = X === void 0 ? j * (De - 1 - y) : void 0;
            return /* @__PURE__ */ b(lr, {
              "aria-rowindex": Kn - De + y + 1,
              rowIdx: Y,
              gridRowStart: E,
              row: w,
              top: X,
              bottom: ie,
              iterateOverViewportColumnsForRow: ft,
              activeCellIdx: F ? V.idx : void 0,
              isTop: !1,
              setActivePosition: an,
              isTreeGrid: st
            }, y);
          })
        ] })]
      }),
      je > -1 && ar(Ro, Jr, ja),
      Ue > -1 && ar(Eo, eo, Xa),
      fi(),
      Hi(er),
      No
    ]
  });
}
function dr(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
function Ja({ id: e, groupKey: t, childRows: n, isExpanded: r, isCellActive: o, column: i, row: a, groupColumnIndex: s, isGroupByColumn: c, toggleGroup: l }) {
  var D;
  const { tabIndex: m, childTabIndex: h, onFocus: x } = Pt(o);
  function p() {
    l(e);
  }
  const d = c && s === i.idx;
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: m === -1 ? void 0 : m,
    className: nt(i),
    style: {
      ...it(i),
      cursor: d ? "pointer" : "default"
    },
    onClick: d ? p : void 0,
    onFocus: x,
    children: (!c || d) && ((D = i.renderGroupCell) == null ? void 0 : D.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: h,
      toggleGroup: p
    }))
  }, i.key);
}
var es = $e(Ja);
const ts = "rdg-group-row rdg-7-0-0-beta-60-e74a2be3";
function ns({ className: e, row: t, rowIdx: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, isRowSelected: i, setActivePosition: a, gridRowStart: s, groupBy: c, toggleGroup: l, ...m }) {
  const h = o === -1;
  let x = t.level;
  function p() {
    a({
      rowIdx: n,
      idx: -1
    }, { shouldFocus: !0 });
  }
  return /* @__PURE__ */ b(qt, {
    value: q(() => ({
      isRowSelectionDisabled: !1,
      isRowSelected: i
    }), [i]),
    children: /* @__PURE__ */ b("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      tabIndex: h ? 0 : -1,
      className: We(Fn, ts, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, h && "rdg-row-active", e),
      onMouseDown: p,
      style: { gridRowStart: s },
      ...m,
      children: r(o).map(([d, D], g) => (g === 0 && d.key === "rdg-select-column" && (x += 1), /* @__PURE__ */ b(es, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellActive: D,
        column: d,
        row: t,
        groupColumnIndex: x,
        toggleGroup: l,
        isGroupByColumn: c.includes(d.key)
      }, d.key))).toArray()
    })
  });
}
var rs = $e(ns);
function Jl({ columns: e, rows: t, rowHeight: n, rowKeyGetter: r, onCellKeyDown: o, onCellCopy: i, onCellPaste: a, onRowsChange: s, selectedRows: c, onSelectedRowsChange: l, renderers: m, groupBy: h, rowGrouper: x, expandedGroupIds: p, onExpandedGroupIdsChange: d, groupIdGetter: D, ...g }) {
  var Oe, le, be;
  const u = Tt(), f = (m == null ? void 0 : m.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? Qr, T = 1 + (((Oe = g.topSummaryRows) == null ? void 0 : Oe.length) ?? 0), { leftKey: P, rightKey: L } = In(g.direction), I = ge(Te), v = D ?? os, { columns: M, groupBy: H } = q(() => {
    const O = e.toSorted(({ key: S }, { key: z }) => S === "rdg-select-column" ? -1 : z === "rdg-select-column" ? 1 : h.includes(S) ? h.includes(z) ? h.indexOf(S) - h.indexOf(z) : -1 : h.includes(z) ? 1 : 0), N = [];
    for (const [S, z] of O.entries()) h.includes(z.key) && (N.push(z.key), O[S] = {
      ...z,
      frozen: !0,
      renderCell: () => null,
      renderGroupCell: z.renderGroupCell ?? Gi,
      editable: !1
    });
    return {
      columns: O,
      groupBy: N
    };
  }, [e, h]), [A, _] = q(() => {
    if (H.length === 0) return [void 0, t.length];
    const O = (N, [S, ...z], U) => {
      let ee = 0;
      const j = {};
      for (const [he, we] of Object.entries(x(N, S))) {
        const [ve, pe] = z.length === 0 ? [we, we.length] : O(we, z, U + ee + 1);
        j[he] = {
          childRows: we,
          childGroups: ve,
          startRowIndex: U + ee
        }, ee += pe + 1;
      }
      return [j, ee];
    };
    return O(t, H, 0);
  }, [
    H,
    x,
    t
  ]), [W, B] = q(() => {
    const O = /* @__PURE__ */ new Set();
    if (!A) return [t, z];
    const N = [], S = (U, ee, j) => {
      if (is(U)) {
        N.push(...U);
        return;
      }
      Object.keys(U).forEach((he, we, ve) => {
        const pe = v(he, ee), Pe = p.has(pe), { childRows: xe, childGroups: Ce, startRowIndex: $ } = U[he], Z = {
          id: pe,
          parentId: ee,
          groupKey: he,
          isExpanded: Pe,
          childRows: xe,
          level: j,
          posInSet: we,
          startRowIndex: $,
          setSize: ve.length
        };
        N.push(Z), O.add(Z), Pe && S(Ce, pe, j + 1);
      });
    };
    return S(A, void 0, 0), [N, z];
    function z(U) {
      return O.has(U);
    }
  }, [
    p,
    A,
    t,
    v
  ]), te = q(() => typeof n == "function" ? (O) => B(O) ? n({
    type: "GROUP",
    row: O
  }) : n({
    type: "ROW",
    row: O
  }) : n, [B, n]), C = G((O) => {
    const N = W.indexOf(O);
    for (let S = N - 1; S >= 0; S--) {
      const z = W[S];
      if (B(z) && (!B(O) || O.parentId === z.id)) return [z, S];
    }
  }, [B, W]), k = G((O) => {
    if (B(O)) return O.id;
    if (typeof r == "function") return r(O);
    const N = C(O);
    if (N !== void 0) {
      const { startRowIndex: S, childRows: z } = N[0];
      return S + z.indexOf(O) + 1;
    }
    return W.indexOf(O);
  }, [
    C,
    B,
    r,
    W
  ]), R = q(() => {
    if (c == null) return null;
    pt(r);
    const O = new Set(c);
    for (const N of W) B(N) && N.childRows.every((S) => c.has(r(S))) && O.add(N.id);
    return O;
  }, [
    B,
    r,
    c,
    W
  ]);
  function Q(O) {
    if (!l) return;
    pt(r);
    const N = new Set(c);
    for (const S of W) {
      const z = k(S);
      if (R != null && R.has(z) && !O.has(z)) if (B(S)) for (const U of S.childRows) N.delete(r(U));
      else N.delete(z);
      else if (!(R != null && R.has(z)) && O.has(z)) if (B(S)) for (const U of S.childRows) N.add(r(U));
      else N.add(z);
    }
    l(N);
  }
  function K(O, N) {
    if (o == null || o(O, N), N.isGridDefaultPrevented() || O.mode === "EDIT") return;
    const { column: S, rowIdx: z, setActivePosition: U } = O, ee = (S == null ? void 0 : S.idx) ?? -1, j = W[z];
    if (B(j) && (ee === -1 && (N.key === P && j.isExpanded || N.key === L && !j.isExpanded) && (N.preventDefault(), N.preventGridDefault(), Te(j.id)), ee === -1 && N.key === P && !j.isExpanded && j.level !== 0)) {
      const he = C(j);
      he !== void 0 && (N.preventGridDefault(), U({
        idx: ee,
        rowIdx: he[1]
      }));
    }
  }
  function ne({ row: O, column: N }, S) {
    B(O) || i == null || i({
      row: O,
      column: N
    }, S);
  }
  function ce({ row: O, column: N }, S) {
    return B(O) ? O : a({
      row: O,
      column: N
    }, S);
  }
  function Be(O, { indexes: N, column: S }) {
    if (!s) return;
    const z = [...t], U = [];
    for (const ee of N) {
      const j = t.indexOf(W[ee]);
      z[j] = O[ee], U.push(j);
    }
    s(z, {
      indexes: U,
      column: S
    });
  }
  function Te(O) {
    const N = new Set(p);
    N.has(O) ? N.delete(O) : N.add(O), d(N);
  }
  function _e(O, { row: N, rowClass: S, onCellMouseDown: z, onCellClick: U, onCellDoubleClick: ee, onCellContextMenu: j, onRowChange: he, draggedOverCellIdx: we, activeCellEditor: ve, isRowSelectionDisabled: pe, isTreeGrid: Pe, ...xe }) {
    if (B(N)) {
      const { startRowIndex: Z } = N;
      return /* @__PURE__ */ b(rs, {
        ...xe,
        "aria-rowindex": T + Z + 1,
        row: N,
        groupBy: H,
        toggleGroup: I
      }, O);
    }
    let Ce = xe["aria-rowindex"];
    const $ = C(N);
    if ($ !== void 0) {
      const { startRowIndex: Z, childRows: de } = $[0], Ie = de.indexOf(N);
      Ce = Z + T + Ie + 2;
    }
    return f(O, {
      ...xe,
      "aria-rowindex": Ce,
      row: N,
      rowClass: S,
      onCellMouseDown: z,
      onCellClick: U,
      onCellDoubleClick: ee,
      onCellContextMenu: j,
      onRowChange: he,
      draggedOverCellIdx: we,
      activeCellEditor: ve,
      isRowSelectionDisabled: pe,
      isTreeGrid: Pe
    });
  }
  return /* @__PURE__ */ b(no, {
    ...g,
    role: "treegrid",
    "aria-rowcount": _ + 1 + (((le = g.topSummaryRows) == null ? void 0 : le.length) ?? 0) + (((be = g.bottomSummaryRows) == null ? void 0 : be.length) ?? 0),
    columns: M,
    rows: W,
    rowHeight: te,
    rowKeyGetter: k,
    onRowsChange: Be,
    selectedRows: R,
    onSelectedRowsChange: Q,
    onCellKeyDown: K,
    onCellCopy: ne,
    onCellPaste: a ? ce : void 0,
    renderers: {
      ...m,
      renderRow: _e
    }
  });
}
function os(e, t) {
  return t !== void 0 ? `${t}__${e}` : e;
}
function is(e) {
  return Array.isArray(e);
}
const as = "rdg-text-editor rdg-7-0-0-beta-60-2f8db206";
function ss(e) {
  e == null || e.focus(), e == null || e.select();
}
function ed({ row: e, column: t, onRowChange: n, onClose: r }) {
  return /* @__PURE__ */ b("input", {
    className: as,
    ref: ss,
    value: e[t.key],
    onChange: (o) => n({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const ae = {
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
}, cs = {
  "--rdg-color": ae.gray800,
  "--rdg-header-color": ae.gray700,
  "--rdg-border-color": ae.gray400,
  "--rdg-background-color": ae.forcewhite,
  "--rdg-header-background-color": ae.forcewhite,
  "--rdg-row-hover-background-color": ae.forcewhite,
  "--rdg-row-selected-hover-background-color": ae.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": ae.primary400,
  "--rdg-expanded-accent-color": ae.primary400,
  "--rdg-row-selected-color": ae.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": ae.primary500,
  "--rdg-scrollbar-track-background": ae.gray100,
  "--rdg--scrollbar-thumb-hover-background": ae.primary500,
  "--rdg--scrollbar-track-hover-background": ae.gray200
}, ls = me.div`
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

    /* The gradient rdg paints beside each pinned column is shown deliberately — a provisional
       design choice, history in flowr's admin-migration doc 25. Restyling it has no API either:
       the shadow elements carry no stable class, custom property or prop (upstream PR #3969), and
       the only handle is their shape — the sole children of .rdg with neither a role nor a
       measuring key — ⚠ the one selector here written against rdg's DOM rather than against a
       stable rdg-* name, so it wants a re-check on every react-data-grid bump. ⚠ Only Chromium
       hides the gradient while the grid cannot scroll (a scroll-state container query); other
       browsers paint it permanently.

       Its own gradient is kept, because each edge fades towards the middle of the grid and only
       rdg's own two generated classes tell the two directions apart. What is dialled down is the
       whole element: a filter multiplies the paint and leaves opacity alone, which matters because
       opacity is the property that scroll-state query drives — one of ours would win over it and
       leave a permanent band on a grid with nothing to scroll.

       Each edge is TWO elements, one over the header rows and one over the body, so no single
       mask can span the grid. The first stop sits at the header's own height, which is the whole
       of the header element: the header row carries no shadow at all, and the band eases in over
       the body's first rows and out again above its last, instead of ending square at both. */
    .rdg > div:not([role]):not([data-measuring-cell-key]) {
        filter: opacity(var(--rdg-frozen-shadow-opacity, 0.45));
        mask-image: linear-gradient(
            to bottom,
            transparent var(--rdg-header-row-height, 0px),
            black calc(var(--rdg-header-row-height, 0px) + 36px),
            black calc(100% - 36px),
            transparent 100%
        );
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
`, It = Me.createContext({
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
}), ds = "data-grid-hidden-column-visibility", us = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = ds,
  onHiddenColumnsChange: a,
  onReset: s,
  onColumnOrderChange: c,
  reorderAnnouncement: l,
  resetLabel: m
}) => {
  const [h, x] = Me.useState(0), [p, d] = Me.useState(
    null
  ), [D, g] = Me.useState([]), u = G(
    (v) => {
      localStorage.setItem(i, JSON.stringify(v)), x((M) => M + 1), g(v);
    },
    [i]
  ), f = JSON.stringify(r ?? []), T = q(
    () => JSON.parse(f),
    [f]
  );
  xt(() => {
    const v = localStorage.getItem(i);
    if (v) {
      const M = JSON.parse(v);
      u(Array.isArray(M) ? M : []);
    } else
      u(T);
  }, [i, T, u]);
  const P = G(
    (v) => {
      u(v), a == null || a(v);
    },
    [u, a]
  ), L = G(() => {
    P(T), s == null || s();
  }, [P, T, s]), I = q(
    () => e.filter((v) => !(n != null && n.includes(v.key))),
    [e, n]
  );
  return /* @__PURE__ */ b(
    It.Provider,
    {
      value: {
        gridKey: `data-grid-${h}`,
        chooserAnchor: p,
        setChooserAnchor: d,
        columns: I,
        hiddenColumn: D,
        setHiddenColumn: P,
        resetHiddenColumns: L,
        resetLabel: m,
        reorderColumns: c,
        reorderAnnouncement: l,
        enabled: o
      },
      children: t
    }
  );
}, Hn = me(vi)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${ae.primary500};
    }
`, fs = me(Ar)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    /* the grab area owns the gesture: no scroll-vs-drag arbitration, no 300ms touch delay */
    touch-action: none;

    &[data-dragging='true'] {
        opacity: 0.5;
    }
`, hs = me.span`
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 16px;
    color: currentColor;
    opacity: 0.35;
    cursor: grab;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.7;
    }

    /* pointer capture holds :active for the whole drag, wherever the pointer goes */
    &:active {
        cursor: grabbing;
        opacity: 1;
    }
`, gs = me.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`, ms = () => /* @__PURE__ */ b("svg", { width: "10", height: "16", viewBox: "0 0 10 16", "aria-hidden": "true", focusable: "false", children: [3, 8, 13].map((e) => /* @__PURE__ */ oe("g", { children: [
  /* @__PURE__ */ b("circle", { cx: "3", cy: e, r: "1.1", fill: "currentColor" }),
  /* @__PURE__ */ b("circle", { cx: "7", cy: e, r: "1.1", fill: "currentColor" })
] }, e)) }), ur = (e, t, n) => {
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}, ws = (e, t) => e.length === t.length && e.every((n, r) => n === t[r]), ps = (e, t, n) => {
  var o;
  let r = -1;
  for (let i = 0; i < t.length; i++) {
    const a = (o = n.get(t[i])) == null ? void 0 : o.getBoundingClientRect();
    if (a) {
      if (e < a.bottom)
        return e < a.top && r === -1 ? 0 : i;
      r = i;
    }
  }
  return r;
}, td = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = ot(It), n = Me.useRef(null), r = G(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ b("div", { ref: n, children: /* @__PURE__ */ b(e, { onClick: r }) });
}, ys = () => {
  const {
    columns: e,
    hiddenColumn: t,
    setHiddenColumn: n,
    chooserAnchor: r,
    setChooserAnchor: o,
    resetHiddenColumns: i,
    resetLabel: a,
    reorderColumns: s,
    reorderAnnouncement: c
  } = ot(It), [l, m] = se(null), [h, x] = se(null), [p, d] = se(""), D = q(() => e.map((C) => C.key), [e]), g = l ?? D, u = q(() => new Map(e.map((C) => [C.key, C])), [e]), f = fe(/* @__PURE__ */ new Map()), T = fe([]), P = fe(null), L = fe(!1);
  xt(() => {
    m((C) => C && ws(C, D) ? null : C);
  }, [D]);
  const I = G(() => {
    o(null), m(null), d("");
  }, [o]), v = G(() => {
    i(), o(null), m(null);
  }, [i, o]), M = G(
    (C) => () => {
      if (L.current) {
        L.current = !1;
        return;
      }
      const k = t.indexOf(C);
      n(
        k === -1 ? [...t, C] : t.filter((R) => R !== C)
      );
    },
    [t, n]
  ), H = G(
    (C, k) => {
      var K;
      const R = String(((K = u.get(C)) == null ? void 0 : K.name) ?? C), Q = k.indexOf(C) + 1;
      d(
        c ? c(R, Q, k.length) : `${R} ${Q}/${k.length}`
      );
    },
    [u, c]
  ), A = G(
    (C) => (k) => {
      !s || k.button !== 0 || (k.preventDefault(), k.stopPropagation(), k.currentTarget.setPointerCapture(k.pointerId), L.current = !1, T.current = g, P.current = { key: C, moved: !1 }, x(C));
    },
    [g, s]
  ), _ = G((C) => {
    const k = P.current;
    if (!k)
      return;
    const R = T.current.indexOf(k.key), Q = ps(C.clientY, T.current, f.current);
    R === -1 || Q === -1 || Q === R || (k.moved = !0, T.current = ur(T.current, R, Q), m(T.current));
  }, []), W = G(() => {
    const C = P.current;
    C && (P.current = null, x(null), C.moved && (L.current = !0, s == null || s(T.current), H(C.key, T.current)));
  }, [H, s]), B = G(
    (C) => (k) => {
      if (!s || !k.altKey)
        return;
      const R = k.key === "ArrowUp" ? -1 : k.key === "ArrowDown" ? 1 : 0;
      if (!R)
        return;
      k.preventDefault(), k.stopPropagation();
      const Q = g.indexOf(C), K = Q + R;
      if (Q === -1 || K < 0 || K >= g.length)
        return;
      const ne = ur(g, Q, K);
      T.current = ne, m(ne), s(ne), H(C, ne);
    },
    [H, g, s]
  ), te = G(
    (C) => (k) => {
      k ? f.current.set(C, k) : f.current.delete(C);
    },
    []
  );
  return /* @__PURE__ */ oe(tt, { children: [
    /* @__PURE__ */ oe(
      yi,
      {
        id: "column-visibility-menu",
        anchorReference: "anchorPosition",
        anchorPosition: r ?? void 0,
        transformOrigin: { vertical: "top", horizontal: "right" },
        open: r !== null,
        onClose: I,
        children: [
          g.map((C) => {
            const k = u.get(C);
            return k ? /* @__PURE__ */ oe(
              fs,
              {
                ref: te(C),
                "data-dragging": h === C,
                "aria-keyshortcuts": s ? "Alt+ArrowUp Alt+ArrowDown" : void 0,
                onKeyDown: B(C),
                onClick: M(C),
                children: [
                  /* @__PURE__ */ b(Hn, { checked: !t.includes(C) }),
                  k.name,
                  s && /* @__PURE__ */ b(
                    hs,
                    {
                      "aria-hidden": "true",
                      onPointerDown: A(C),
                      onPointerMove: _,
                      onPointerUp: W,
                      onPointerCancel: W,
                      onClick: (R) => {
                        R.stopPropagation(), L.current = !1;
                      },
                      children: /* @__PURE__ */ b(ms, {})
                    }
                  )
                ]
              },
              C
            ) : null;
          }),
          a && /* @__PURE__ */ b(bi, {}),
          a && /* @__PURE__ */ b(Ar, { onClick: v, children: a })
        ]
      }
    ),
    r !== null && /* @__PURE__ */ b(gs, { role: "status", "aria-live": "polite", children: p })
  ] });
};
var et = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(et || {}), Dt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(Dt || {});
function bs(e, t, n, r) {
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
const vs = ({
  columns: e,
  rows: t,
  defaultSortColumns: n,
  sortColumns: r,
  enabled: o = !0
}) => {
  const [i, a] = se(n ?? []), s = r ?? i, c = q(() => !o || s.length === 0 ? t : [...t].sort((m, h) => {
    for (const x of s) {
      const p = e.find((g) => g.key === x.columnKey), D = bs(
        x.columnKey,
        p == null ? void 0 : p.type,
        p == null ? void 0 : p.sortComparator,
        p == null ? void 0 : p.getColumnValue
      )(m, h);
      if (D !== 0)
        return x.direction === "ASC" ? D : -D;
    }
    return 0;
  }), [t, s, o]), l = G((m) => {
    m.length !== 0 ? a(m) : a((h) => h.length === 1 ? [
      {
        columnKey: h[0].columnKey,
        direction: h[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : h);
  }, []);
  return {
    sortedRows: c,
    sortColumns: i,
    setSortedColumns: l
  };
}, bt = 40, xs = 200, Cs = "rdg-row-expanded", Ds = "rdg-detail-row", ro = "__rdgDetailParent", ks = (e) => ({ id: `rdg-detail:${e.id}`, [ro]: e }), Ln = (e) => e[ro], Ut = (e) => Ln(e) !== void 0, Ss = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, ks(r)] : [r]);
}, Ts = me.button`
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
`, Ps = () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ b("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), oo = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ b(
    Ts,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), io(t, e.id);
      },
      children: /* @__PURE__ */ b(Ps, {})
    }
  );
}, io = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, Is = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', ao = (e, t, n, r = []) => Ut(e) || t === Es || t === so || r.includes(t) ? !1 : !(n instanceof Element && n.closest(Is)), nd = (e, t, n) => ao(e, t, n), fr = me.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, Rs = me.span`
    display: inline-block;
    flex: 0 0 ${bt - 16}px;
`, Es = _r, so = "rdg-expander-column", Ms = (e) => ({
  key: so,
  name: "",
  frozen: !0,
  width: bt,
  minWidth: bt,
  maxWidth: bt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ b(oo, { row: t, expandable: e })
}), co = (e) => e.frozen === !0 || e.frozen === "start", Dn = (e) => e.frozen === "end" || !!e.frozenRight, dn = (e) => co(e) || Dn(e), Os = (e, t) => {
  const n = [
    ...e.filter(co),
    ...e.filter((s) => !dn(s)),
    ...e.filter(Dn)
  ], r = n.findIndex((s) => !dn(s));
  if (r === -1)
    return e;
  const o = n[r], i = n.findIndex(Dn), a = (i === -1 ? n.length : i) - r;
  return e.map((s) => s !== o ? !dn(s) || !s.renderCell ? s : {
    ...s,
    renderCell: (c) => {
      var l;
      return Ut(c.row) ? null : (l = s.renderCell) == null ? void 0 : l.call(s, c);
    }
  } : {
    ...s,
    colSpan: (c) => {
      var l;
      return c.type === "ROW" && Ut(c.row) ? a : (l = s.colSpan) == null ? void 0 : l.call(s, c);
    },
    renderCell: (c) => {
      var m;
      const l = Ln(c.row);
      return l ? t(l) : ((m = s.renderCell) == null ? void 0 : m.call(s, c)) ?? null;
    }
  });
}, Ns = (e, t, n) => (r) => {
  const o = Ln(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, As = (e, t = []) => Ut(e) ? Ds : t.includes(e.id) ? Cs : "", lo = me(Ci)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${ae.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${ae.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${ae.gray800};
  }

  fieldset {
    display: none;
  }

}
`, zn = Me.createContext({
  filters: {},
  setFilters: () => {
  }
}), Fs = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Me.useState({});
  return /* @__PURE__ */ b(
    zn.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, un = (e) => e.stopPropagation(), Hs = ({ options: e, renderInput: t, ...n }) => {
  const r = q(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ b(
    Di,
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
      renderInput: t || ((o) => /* @__PURE__ */ b(
        lo,
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
}, Ls = me(xi)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, $t = (e) => e.stopPropagation(), fn = ({ children: e, ...t }) => /* @__PURE__ */ oe(Ls, { children: [
  Ur(t),
  e
] }), zs = (e) => (t) => {
  const { filters: n, setFilters: r } = ot(zn), o = q(() => n[e.key], [n, e]), i = G(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === Dt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ b(fn, { ...t, children: /* @__PURE__ */ b(
    Hs,
    {
      options: e.filterOptions ?? [],
      onChange: i,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ b(fn, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (a) => i(a.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: $t,
    onKeyDown: $t
  }) : /* @__PURE__ */ b(
    lo,
    {
      autoComplete: "off",
      onClick: $t,
      onKeyDown: $t,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ b(fn, { ...t });
}, Ws = {
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
}, Ys = (e, t, n) => {
  let r;
  const o = Ws[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function hn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const $s = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Bs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _s = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Us = {
  date: hn({
    formats: $s,
    defaultWidth: "full"
  }),
  time: hn({
    formats: Bs,
    defaultWidth: "full"
  }),
  dateTime: hn({
    formats: _s,
    defaultWidth: "full"
  })
}, Vs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Gs = (e, t, n, r) => Vs[e];
function mt(e) {
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
const js = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Xs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qs = {
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
}, Ks = {
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
}, Qs = {
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
}, Zs = {
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
}, Js = (e, t) => {
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
}, ec = {
  ordinalNumber: Js,
  era: mt({
    values: js,
    defaultWidth: "wide"
  }),
  quarter: mt({
    values: Xs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: mt({
    values: qs,
    defaultWidth: "wide"
  }),
  day: mt({
    values: Ks,
    defaultWidth: "wide"
  }),
  dayPeriod: mt({
    values: Qs,
    defaultWidth: "wide",
    formattingValues: Zs,
    defaultFormattingWidth: "wide"
  })
};
function wt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? nc(s, (h) => h.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      tc(s, (h) => h.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const m = t.slice(a.length);
    return { value: l, rest: m };
  };
}
function tc(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function nc(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function rc(e) {
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
const oc = /^(\d+)(th|st|nd|rd)?/i, ic = /\d+/i, ac = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, sc = {
  any: [/^b/i, /^(a|c)/i]
}, cc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, lc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, dc = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, uc = {
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
}, fc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, hc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, gc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, mc = {
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
}, wc = {
  ordinalNumber: rc({
    matchPattern: oc,
    parsePattern: ic,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: wt({
    matchPatterns: ac,
    defaultMatchWidth: "wide",
    parsePatterns: sc,
    defaultParseWidth: "any"
  }),
  quarter: wt({
    matchPatterns: cc,
    defaultMatchWidth: "wide",
    parsePatterns: lc,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: wt({
    matchPatterns: dc,
    defaultMatchWidth: "wide",
    parsePatterns: uc,
    defaultParseWidth: "any"
  }),
  day: wt({
    matchPatterns: fc,
    defaultMatchWidth: "wide",
    parsePatterns: hc,
    defaultParseWidth: "any"
  }),
  dayPeriod: wt({
    matchPatterns: gc,
    defaultMatchWidth: "any",
    parsePatterns: mc,
    defaultParseWidth: "any"
  })
}, pc = {
  code: "en-US",
  formatDistance: Ys,
  formatLong: Us,
  formatRelative: Gs,
  localize: ec,
  match: wc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let yc = {};
function Rt() {
  return yc;
}
const uo = 6048e5, bc = 864e5, hr = Symbol.for("constructDateFrom");
function Ye(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && hr in e ? e[hr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Se(e, t) {
  return Ye(t || e, e);
}
function gr(e) {
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
function vc(e, ...t) {
  const n = Ye.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function mr(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function xc(e, t, n) {
  const [r, o] = vc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = mr(r), a = mr(o), s = +i - gr(i), c = +a - gr(a);
  return Math.round((s - c) / bc);
}
function Cc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Dc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return xc(n, Cc(n)) + 1;
}
function kt(e, t) {
  var s, c, l, m;
  const n = Rt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((m = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = Se(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Vt(e, t) {
  return kt(e, { ...t, weekStartsOn: 1 });
}
function fo(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ye(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Vt(o), a = Ye(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Vt(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function kc(e, t) {
  const n = fo(e, t), r = Ye(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Vt(r);
}
function Sc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +Vt(n) - +kc(n);
  return Math.round(r / uo) + 1;
}
function ho(e, t) {
  var m, h, x, p;
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Rt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (x = o.locale) == null ? void 0 : x.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = Ye((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = kt(a, t), c = Ye((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const l = kt(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function Tc(e, t) {
  var s, c, l, m;
  const n = Rt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((m = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, o = ho(e, t), i = Ye((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), kt(i, t);
}
function Pc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +kt(n, t) - +Tc(n, t);
  return Math.round(r / uo) + 1;
}
function J(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Le = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return J(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : J(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return J(e.getDate(), t.length);
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
    return J(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return J(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return J(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return J(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return J(o, t.length);
  }
}, Ze = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, wr = {
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
    const o = ho(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return J(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : J(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = fo(e);
    return J(n, t.length);
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
    return J(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return J(r, 2);
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
        return J(r, 2);
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
        return J(r + 1, 2);
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
    const o = Pc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : J(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Sc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : J(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Le.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Dc(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : J(r, t.length);
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
        return J(i, 2);
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
        return J(i, t.length);
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
        return J(o, t.length);
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length);
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
    return J(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return J(+e, t.length);
  }
};
function pr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + J(i, 2);
}
function yr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : Ve(e, t);
}
function Ve(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = J(Math.trunc(r / 60), 2), i = J(r % 60, 2);
  return n + o + t + i;
}
const br = (e, t) => {
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
}, go = (e, t) => {
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
}, Ic = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return br(e, t);
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
  return i.replace("{{date}}", br(r, t)).replace("{{time}}", go(o, t));
}, Rc = {
  p: go,
  P: Ic
}, Ec = /^D+$/, Mc = /^Y+$/, Oc = ["D", "DD", "YY", "YYYY"];
function Nc(e) {
  return Ec.test(e);
}
function Ac(e) {
  return Mc.test(e);
}
function Fc(e, t, n) {
  const r = Hc(e, t, n);
  if (console.warn(r), Oc.includes(e)) throw new RangeError(r);
}
function Hc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function mo(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function wo(e) {
  return !(!mo(e) && typeof e != "number" || isNaN(+Se(e)));
}
const Lc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Wc = /^'([^]*?)'?$/, Yc = /''/g, $c = /[a-zA-Z]/;
function Bc(e, t, n) {
  var m, h, x, p, d, D, g, u;
  const r = Rt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? pc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((D = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : D.weekStartsOn) ?? r.weekStartsOn ?? ((u = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : u.weekStartsOn) ?? 0, s = Se(e, n == null ? void 0 : n.in);
  if (!wo(s))
    throw new RangeError("Invalid time value");
  let c = t.match(zc).map((f) => {
    const T = f[0];
    if (T === "p" || T === "P") {
      const P = Rc[T];
      return P(f, o.formatLong);
    }
    return f;
  }).join("").match(Lc).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const T = f[0];
    if (T === "'")
      return { isToken: !1, value: _c(f) };
    if (wr[T])
      return { isToken: !0, value: f };
    if (T.match($c))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + T + "`"
      );
    return { isToken: !1, value: f };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((f) => {
    if (!f.isToken) return f.value;
    const T = f.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Ac(T) || !(n != null && n.useAdditionalDayOfYearTokens) && Nc(T)) && Fc(T, t, String(e));
    const P = wr[T[0]];
    return P(s, T, o.localize, l);
  }).join("");
}
function _c(e) {
  const t = e.match(Wc);
  return t ? t[1].replace(Yc, "'") : e;
}
function Uc() {
  return Object.assign({}, Rt());
}
function vr(e, t, n) {
  const r = Uc(), o = jc(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Vc(o, t) : Gc(o, t);
}
function Vc(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Gc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function jc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Xc(e, t) {
  const n = Jc(t);
  return "formatToParts" in n ? Kc(n, e) : Qc(n, e);
}
const qc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Kc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = qc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function Qc(e, t) {
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
const gn = {}, xr = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Zc = xr === "06/25/2014, 00:00:00" || xr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Jc(e) {
  return gn[e] || (gn[e] = Zc ? new Intl.DateTimeFormat("en-US", {
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
function po(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const Cr = 36e5, el = 6e4, mn = {
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
    return o = parseInt(r[1], 10), Dr(o) ? -(o * Cr) : NaN;
  if (r = mn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return Dr(o, a) ? (i = Math.abs(o) * Cr + a * el, r[1] === "+" ? -i : i) : NaN;
  }
  if (rl(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : tl(t), s = kn(a, e);
    return -(n ? s : nl(t, s, e));
  }
  return NaN;
}
function tl(e) {
  return po(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function kn(e, t) {
  const n = Xc(e, t), r = po(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function nl(e, t, n) {
  let o = e.getTime() - t;
  const i = kn(new Date(o), n);
  if (t === i)
    return t;
  o -= i - t;
  const a = kn(new Date(o), n);
  return i === a ? i : Math.max(i, a);
}
function Dr(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const kr = {};
function rl(e) {
  if (kr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), kr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const ol = 60 * 1e3, il = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = wn(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Sr(r);
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
        return Sr(r);
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
        return "GMT" + al(r, ":");
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
        return vr("short", e, n);
      case "zzzz":
      default:
        return vr("long", e, n);
    }
  }
};
function wn(e, t) {
  const n = e ? Wn(e, t, !0) / ol : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
function Sr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Gt(Math.abs(e) / 60, 2) : Je(e, t);
}
function al(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Gt(i, 2);
}
function Tr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const sl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, pn = 36e5, Pr = 6e4, cl = 2, ue = {
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
  timeZone: sl
};
function yo(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? cl : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = ll(e), { year: o, restDateString: i } = dl(r.date, n), a = ul(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let c = 0, l;
    if (r.time && (c = fl(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (l = Wn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = Tr(new Date(s + c)), l = Tr(new Date(s + c + l));
    return new Date(s + c + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function ll(e) {
  const t = {};
  let n = ue.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ue.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ue.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function dl(e, t) {
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
function ul(e, t) {
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
    return ml(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return Rr(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, Er(o) ? Ir(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = ue.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return Er(o, a) ? Ir(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function fl(e) {
  let t, n, r = ue.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), yn(t) ? t % 24 * pn : NaN;
  if (r = ue.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), yn(t, n) ? t % 24 * pn + n * Pr : NaN;
  if (r = ue.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return yn(t, n, o) ? t % 24 * pn + n * Pr + o * 1e3 : NaN;
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
const hl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function bo(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Rr(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = bo(e);
    if (r && n > gl[t] || !r && n > hl[t])
      return !1;
  }
  return !0;
}
function ml(e, t) {
  if (t < 1)
    return !1;
  const n = bo(e);
  return !(n && t > 366 || !n && t > 365);
}
function Er(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function yn(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const wl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function pl(e, t, n = {}) {
  t = String(t);
  const r = t.match(wl);
  if (r) {
    const o = yo(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", l = i.replace(a, "'" + il[a[0]](o, a, n) + "'");
      return c ? l.substring(0, s - 1) + l.substring(s + 1) : l;
    }, t);
  }
  return Bc(e, t, n);
}
function yl(e, t, n) {
  e = yo(e, n);
  const r = Wn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function bl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, pl(yl(e, t, { timeZone: r.timeZone }), n, r);
}
var vo = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(vo || {});
const vl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !mo(e) && typeof e == "string" ? new Date(e) : e;
  return wo(r) ? bl(e, n, t) : "--";
}, Mr = (e) => e.trim().toLowerCase(), xl = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: c, hiddenColumn: l } = ot(It), m = G((h) => {
    const x = () => {
      if (h.renderCell)
        return h.renderCell;
      if (h.type === et.DATE)
        return ({ row: D }) => {
          var g, u;
          return vl(
            D[h.key],
            ((g = h.dateOptions) == null ? void 0 : g.formatDate) ?? vo.DATE_WITH_TIME,
            (u = h.dateOptions) == null ? void 0 : u.timeZone
          );
        };
    }, p = () => h.renderHeaderCell ? h.renderHeaderCell : zs(h), d = {
      ...h,
      renderCell: x(),
      renderHeaderCell: p()
    };
    return h.frozenRight && (d.frozen = "end"), d;
  }, []);
  return q(() => {
    const h = [];
    if (t && !n && h.push(Ms(t)), n) {
      const x = (r ?? []).map((g) => g.id), p = x.length > 0 && x.every((g) => o == null ? void 0 : o.includes(g)), d = (g) => {
        const u = (o ?? []).filter((f) => !x.includes(f));
        return g ? [...u, ...x] : u;
      }, D = t ? 50 + bt : 50;
      h.push({
        ...gt,
        width: D,
        minWidth: D,
        maxWidth: D,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ oe(fr, { children: [
          t && /* @__PURE__ */ b(Rs, { "aria-hidden": !0 }),
          a ? a({
            checked: p,
            "aria-label": s,
            onChange: (g) => i == null ? void 0 : i(d(g))
          }) : /* @__PURE__ */ b(
            Hn,
            {
              checked: p,
              slotProps: { input: { "aria-label": s } },
              onChange: (g, u) => i == null ? void 0 : i(d(u))
            }
          )
        ] }),
        renderCell: t ? (g) => {
          var u;
          return /* @__PURE__ */ oe(fr, { children: [
            /* @__PURE__ */ b(oo, { row: g.row, expandable: t }),
            (u = gt.renderCell) == null ? void 0 : u.call(gt, g)
          ] });
        } : gt.renderCell
      });
    }
    return h.push(...e.map((x) => m(x))), c && l ? h.filter((x) => !l.includes(x.key)) : h;
  }, [
    e,
    t,
    m,
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
var Cl = {
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
function Dl(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return Cl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function bn(e) {
  var t = Dl(e);
  return "".concat(t.value).concat(t.unit);
}
var kl = function(e, t, n) {
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
}, Sl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, Tl = kl("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Pl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, l = e.size, m = l === void 0 ? 15 : l, h = e.margin, x = h === void 0 ? 2 : h, p = Sl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), d = jt({ display: "inherit" }, c), D = function(g) {
    return {
      backgroundColor: o,
      width: bn(m),
      height: bn(m),
      margin: bn(x),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(Tl, " ").concat(0.75 / a, "s ").concat(g * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Wt.createElement(
    "span",
    jt({ style: d }, p),
    Wt.createElement("span", { style: D(1) }),
    Wt.createElement("span", { style: D(2) }),
    Wt.createElement("span", { style: D(3) })
  ) : null;
}
const Il = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === Dt.TEXT && typeof n == "string" && typeof r == "string" ? Mr(n).includes(Mr(r)) : t === Dt.AUTOCOMPLETE ? n === r : !1, Rl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = ot(zn);
  return q(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((c) => c.key === i);
      return s ? Il({
        comparator: s.filterComparator,
        filterType: s.filterType ?? Dt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, El = me.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, Ml = me.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, Ol = Me.memo(
  ({
    currentPage: e,
    setCurrentPage: t,
    setPageSize: n,
    pageSize: r,
    totalCount: o,
    labels: i,
    totalLabel: a
  }) => {
    const s = G(
      (l, m) => {
        t(m);
      },
      [t]
    ), c = G(
      (l) => {
        n(parseInt(l.target.value, 10)), t(0);
      },
      [n, t]
    );
    return /* @__PURE__ */ oe(El, { children: [
      a ? /* @__PURE__ */ b(Ml, { children: a(o) }) : null,
      /* @__PURE__ */ b(
        ki,
        {
          labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ b("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
          labelDisplayedRows: ({ from: l, to: m, count: h }) => `${l}-${m} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${h}`,
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
var Nl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(Nl || {});
const Al = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = se(0), [c, l] = se(e), m = n !== void 0, h = o !== void 0, x = m ? n : a, p = h ? o : c, d = G(
    (f) => {
      m || s(f), r == null || r(f);
    },
    [m, r]
  ), D = G(
    (f) => {
      h || l(f), i == null || i(f);
    },
    [h, i]
  ), g = G(() => {
    d(0), D(e);
  }, [d, D, e]), u = fe(p);
  return xt(() => {
    u.current !== p && (u.current = p, d(0));
  }, [p]), {
    currentPage: x,
    pageSize: p,
    defaultPageSize: e,
    setCurrentPage: d,
    setPageSize: D,
    resetPagination: g
  };
}, Or = 50, Fl = me.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, Hl = me.div`
    background-color: ${ae.primary500};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, Ll = Me.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = G(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ b(
      Hn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), zl = (e) => /* @__PURE__ */ b(Ll, { ...e }), Wl = "Select all rows", Yl = ({
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
  selectAllLabel: m = Wl,
  noDataMessage: h,
  filters: x,
  setFilters: p,
  pagination: d,
  renderers: D,
  expandable: g,
  rowGestures: u,
  rowHeight: f,
  rowClass: T,
  onCellClick: P,
  onColumnResize: L,
  columnWidths: I,
  onColumnWidthsChange: v,
  ...M
}) => {
  var xe, Ce;
  const { gridKey: H } = ot(It), { pageSize: A, currentPage: _, setCurrentPage: W, setPageSize: B } = Al(
    d == null ? void 0 : d.defaultPageSize,
    d == null ? void 0 : d.control
  ), te = (D == null ? void 0 : D.renderCheckbox) ?? zl, C = xl({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: g,
    selectionEnabled: !!l,
    selectableRows: n,
    selectedRows: c,
    onSelectedRowsChange: l,
    renderCheckbox: te,
    selectAllLabel: m
  }), k = q(() => C.map(($) => $.key).join("|"), [C]), R = q(
    () => C.some(($) => $.filterEnabled),
    [C]
  ), Q = q(
    () => (d == null ? void 0 : d.enabled) && !d.remotePagination,
    [d]
  ), K = q(() => !p, [p]), ne = Rl({
    columns: C,
    rows: n,
    enabled: K
  }), ce = q(() => !i, [i]), Be = s ?? ce, {
    sortedRows: Te,
    sortColumns: _e,
    setSortedColumns: Oe
  } = vs({
    columns: C,
    rows: ne,
    defaultSortColumns: a,
    sortColumns: ce ? void 0 : o,
    enabled: Be
  }), le = q(() => {
    if (!Q)
      return _;
    const $ = Math.max(0, Math.ceil(ne.length / A) - 1);
    return Math.min(_, $);
  }, [Q, _, A, ne.length]);
  xt(() => {
    le !== _ && W(le);
  }, [le, _, W]);
  const be = q(() => Q ? Te.slice(le * A, (le + 1) * A) : Te, [Te, Q, le, A]), O = q(
    () => g ? Ss(be, g.expandedIds) : be,
    [g, be]
  ), N = q(
    () => g ? Os(C, g.renderDetail) : C,
    [g, C]
  ), S = G(
    ($, Z) => L == null ? void 0 : L($.key, Z),
    [L]
  ), z = fe(k);
  rt(() => {
    if (z.current === k || (z.current = k, !I || !v))
      return;
    const $ = new Map([...I].filter(([, Z]) => Z.type === "resized"));
    $.size !== I.size && v($);
  }, [k, I, v]);
  const { renderRow: U, ...ee } = D ?? {}, j = fe(void 0), he = q(() => {
    if (U)
      return ($, Z) => {
        var Ie;
        const { iterateOverViewportColumnsForRow: de } = Z;
        return ((Ie = j.current) == null ? void 0 : Ie.iterate) !== de && (j.current = {
          iterate: de,
          columns: [...de(void 0)].map(([at]) => at)
        }), U($, {
          ...Z,
          viewportColumns: j.current.columns
        });
      };
  }, [U]), we = G(
    ($, Z) => {
      const de = () => {
        const Ie = As($, g == null ? void 0 : g.expandedIds);
        return Ie || (Z === 0 ? "first-row" : Z === n.length - 1 ? "last-row" : "");
      };
      return [T == null ? void 0 : T($, Z), de()].filter(Boolean).join(" ");
    },
    [n, g == null ? void 0 : g.expandedIds, T]
  ), ve = G(
    ($) => {
      u != null && u.onClick ? u.onClick($) : g && io(g, $.id);
    },
    [u, g]
  ), pe = G(
    ($, Z) => {
      if (P == null || P($, Z), Z.isGridDefaultPrevented() || !g && !(u != null && u.onClick))
        return;
      const de = window.getSelection();
      Z.detail <= 1 && de && !de.isCollapsed && Z.target instanceof Node && de.containsNode(Z.target, !0) || ao(
        $.row,
        $.column.key,
        Z.target,
        u == null ? void 0 : u.excludedColumns
      ) && ve($.row);
    },
    [P, g, u, ve]
  ), Pe = !(d != null && d.remotePagination);
  return xt(() => {
    if (!Pe)
      return;
    const $ = c == null ? void 0 : c.filter(
      (Z) => n.some((de) => de.id === Z)
    );
    ($ == null ? void 0 : $.length) != (c == null ? void 0 : c.length) && (l == null || l($ ?? []));
  }, [n, c, Pe]), /* @__PURE__ */ oe(ls, { $pagination: !!(d != null && d.enabled), children: [
    /* @__PURE__ */ b("div", { children: /* @__PURE__ */ b(
      no,
      {
        selectedRows: c ? new Set(c) : void 0,
        onSelectedRowsChange: ($) => {
          l == null || l(Array.from($));
        },
        rowKeyGetter: ($) => $.id,
        rows: O,
        onSortColumnsChange: ce ? Oe : i,
        sortColumns: ce ? _e : o,
        columns: N,
        rowClass: we,
        headerRowHeight: R ? 70 : void 0,
        onCellClick: pe,
        onColumnResize: L ? S : void 0,
        columnWidths: I,
        onColumnWidthsChange: v,
        ...M,
        rowHeight: g ? Ns(
          f,
          Or,
          g.detailHeight ?? xs
        ) : f ?? Or,
        renderers: {
          renderCheckbox: te,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...h != null && !t ? {
            noRowsFallback: /* @__PURE__ */ b("div", { className: "rdg-no-data", children: h })
          } : {},
          ...ee,
          renderRow: he
        },
        style: { ...cs, ...e ?? {} }
      },
      `${H}:${k}`
    ) }),
    d != null && d.enabled ? /* @__PURE__ */ b(
      Ol,
      {
        ...(d == null ? void 0 : d.remotePagination) ?? {
          currentPage: le,
          setCurrentPage: W,
          pageSize: A,
          setPageSize: B,
          totalCount: ne.length
        },
        labels: d.labels ?? ((xe = d.remotePagination) == null ? void 0 : xe.labels),
        totalLabel: d.totalLabel ?? ((Ce = d.remotePagination) == null ? void 0 : Ce.totalLabel)
      }
    ) : null,
    t ? /* @__PURE__ */ oe(Fl, { children: [
      /* @__PURE__ */ b(Hl, {}),
      /* @__PURE__ */ b(Pl, { color: ae.primary500 })
    ] }) : null,
    /* @__PURE__ */ b(ys, {})
  ] });
}, rd = ({
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
    onColumnOrderChange: l,
    reorderAnnouncement: m,
    resetLabel: h
  } = {},
  ...x
}) => /* @__PURE__ */ b(Fs, { filters: e, setFilters: t, children: /* @__PURE__ */ b(
  us,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: c,
    onColumnOrderChange: l,
    reorderAnnouncement: m,
    resetLabel: h,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ b(Yl, { ...x, columns: n, filters: e, setFilters: t })
  }
) });
export {
  wa as Cell,
  et as ColumnType,
  vo as DATE_FORMAT,
  Nl as DEFAULT_PAGE_SIZES,
  rd as DataGrid,
  Hn as DataGridCheckbox,
  En as DataGridDefaultRenderersContext,
  so as EXPANDER_COLUMN_KEY,
  oo as ExpanderToggle,
  Dt as FilterType,
  za as Row,
  Es as SELECTION_COLUMN_KEY,
  _r as SELECT_COLUMN_KEY,
  Mn as SelectCellFormatter,
  gt as SelectColumn,
  ji as ToggleGroup,
  Jl as TreeDataGrid,
  td as VisibilityColumnChooser,
  ys as VisibilityMenu,
  ao as clickBelongsToRow,
  nd as clickExpandsRow,
  vl as convertDate,
  cs as defaultTheme,
  Ns as detailAwareRowHeight,
  As as detailRowClass,
  Mr as getStringToCompare,
  Ut as isDetailRow,
  _i as renderCheckbox,
  Ur as renderHeaderCell,
  $a as renderSortIcon,
  Ba as renderSortPriority,
  ed as renderTextEditor,
  Gi as renderToggleGroup,
  Xi as renderValue,
  ae as taktikTheme,
  ca as useHeaderRowSelection,
  Al as usePagination,
  Xr as useRowSelection,
  Os as withDetailRendering,
  Ss as withDetailRows
};
