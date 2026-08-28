import { jsx as v, jsxs as oe, Fragment as it } from "react/jsx-runtime";
import * as _t from "react";
import Ne, { createContext as It, use as kt, memo as _e, useMemo as Q, useCallback as X, useState as ae, useRef as fe, useLayoutEffect as st, useImperativeHandle as mi, useSyncExternalStore as Nr, useEffectEvent as wi, useEffect as Ke, useContext as ct } from "react";
import { flushSync as In } from "react-dom";
import ge from "@emotion/styled";
import pi from "@mui/material/Menu";
import Ar from "@mui/material/MenuItem";
import yi from "@mui/material/Divider";
import bi from "@mui/material/Checkbox";
import vi from "@mui/material/Box";
import xi from "@mui/material/TextField";
import Ci from "@mui/material/Autocomplete";
import Di from "@mui/material/TablePagination";
function Zt(e) {
  return e === !0 || e === "start";
}
function Ye(e, t, n, r) {
  if (typeof e.colSpan != "function") return;
  const o = e.colSpan(r);
  if (!Number.isInteger(o) || o <= 1) return;
  const i = e.idx + o - 1;
  if (!(Zt(e.frozen) && i > t) && !(e.frozen === !1 && n !== -1 && i >= n))
    return o;
}
function Fr(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function ki({ rows: e, topSummaryRows: t, bottomSummaryRows: n, rowIdx: r, mainHeaderRowIdx: o, lastStartFrozenColumnIndex: i, firstEndFrozenColumnIndex: a, column: s }) {
  const l = (t == null ? void 0 : t.length) ?? 0;
  if (r === o) return Ye(s, i, a, { type: "HEADER" });
  if (t && r > o && r <= l + o) return Ye(s, i, a, {
    type: "SUMMARY",
    row: t[r + l]
  });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return Ye(s, i, a, {
      type: "ROW",
      row: c
    });
  }
  if (n) return Ye(s, i, a, {
    type: "SUMMARY",
    row: n[r - e.length]
  });
}
function Ti({ moveUp: e, moveNext: t, cellNavigationMode: n, columns: r, colSpanColumns: o, rows: i, topSummaryRows: a, bottomSummaryRows: s, minRowIdx: l, mainHeaderRowIdx: c, maxRowIdx: g, activePosition: { idx: f, rowIdx: w }, nextPosition: y, nextPositionIsCellInActiveBounds: m, lastStartFrozenColumnIndex: h, firstEndFrozenColumnIndex: x }) {
  let { idx: u, rowIdx: d } = y;
  const T = r.length, k = (C) => {
    for (const A of o) {
      const H = A.idx;
      if (H > u) break;
      const Y = ki({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: d,
        mainHeaderRowIdx: c,
        lastStartFrozenColumnIndex: h,
        firstEndFrozenColumnIndex: x,
        column: A
      });
      if (Y && u > H && u < Y + H) {
        u = H + (C ? Y : 0);
        break;
      }
    }
  }, O = (C) => C.level + c, E = () => {
    if (t) {
      let { parent: C } = r[u];
      for (; C !== void 0; ) {
        const A = O(C);
        if (d === A) {
          u = C.idx + C.colSpan;
          break;
        }
        ({ parent: C } = C);
      }
    } else if (e) {
      let { parent: C } = r[u], A = !1;
      for (; C !== void 0; ) {
        const H = O(C);
        if (d >= H) {
          u = C.idx, d = H, A = !0;
          break;
        }
        ({ parent: C } = C);
      }
      A || (u = f, d = w);
    }
  };
  if (m && (k(t), d < c && E()), n === "CHANGE_ROW" && (u === T ? d !== g && (u = 0, d += 1) : u === -1 && (d !== l && (d -= 1, u = T - 1), k(!1))), d < c && u > -1 && u < T) {
    let { parent: C } = r[u];
    const A = d;
    for (d = c; C !== void 0; ) {
      const H = O(C);
      H >= A && (d = H, u = C.idx), { parent: C } = C;
    }
  }
  return {
    idx: u,
    rowIdx: d
  };
}
function Si({ maxColIdx: e, minRowIdx: t, maxRowIdx: n, activePosition: { rowIdx: r, idx: o }, shiftKey: i }) {
  return i ? o === 0 && r === t : o === e && r === n;
}
function Pi(e) {
  e.stopPropagation();
}
function Gt(e, t = "instant") {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest",
    behavior: t
  });
}
function Ii(e) {
  return e.querySelector('& > [role="row"][tabindex="0"]');
}
function Lr(e) {
  return e.querySelector('& > [role="row"] > [tabindex="0"]');
}
function Hr(e, t) {
  e !== null && (t && Gt(e), e.focus({ preventScroll: !0 }));
}
function Ei(e) {
  Hr(Ii(e), !0);
}
function Wr(e, t = !0) {
  Hr(Lr(e), t);
}
function En(e) {
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
function Rn(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
const Mi = 86;
function Oi(e, t) {
  return Rn(e) && (e.keyCode !== Mi || t) ? !1 : !Ri.has(e.key);
}
function Ni({ key: e, target: t }) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
function Mn(e) {
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
const zr = "rdg-cell rdg-7-0-0-beta-60-85c48527", Yr = "rdg-7-0-0-beta-60-203d9925", Li = `rdg-cell-frozen-start ${Yr}`, Hi = `rdg-cell-frozen-end ${Yr}`, Wi = "rdg-cell-drag-handle rdg-7-0-0-beta-60-bfba19bc";
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
function lt(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: Zt(e.frozen) ? `var(--rdg-frozen-start-${e.idx})` : void 0,
    insetInlineEnd: e.frozen === "end" ? `var(--rdg-frozen-end-${e.idx + t - 1})` : void 0
  };
}
function $e(...e) {
  let t = "";
  for (const n of e) typeof n == "string" && (t += ` ${n}`);
  return t.slice(1);
}
function at(e, ...t) {
  return $e(zr, Zt(e.frozen) && Li, e.frozen === "end" && Hi, ...t);
}
const { min: Tt, max: jt, floor: sr, abs: zi } = Math;
function xt(e) {
  if (typeof e != "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function On(e, { minWidth: t, maxWidth: n }) {
  return e = jt(e, t), typeof n == "number" && n >= t ? Tt(e, n) : e;
}
function Br(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Ut = {
  idx: -1,
  rowIdx: Number.NEGATIVE_INFINITY,
  mode: "ACTIVE"
};
function Yi({ gridRef: e, columns: t, rows: n, isTreeGrid: r, maxColIdx: o, minRowIdx: i, maxRowIdx: a, setDraggedOverRowIdx: s }) {
  var T;
  const [l, c] = ae(Ut), [g, f] = ae(null), w = fe(null);
  function y({ idx: k, rowIdx: O }) {
    const E = r && k === -1, C = k >= 0 && k <= o, A = O >= i && O <= a, H = O >= 0 && O < n.length, Y = E && A, _ = E && H, z = C && A, B = C && H;
    return {
      isPositionInActiveBounds: Y || z,
      isPositionInViewport: _ || B,
      isRowInActiveBounds: Y,
      isRowInViewport: _,
      isCellInActiveBounds: z,
      isCellInViewport: B
    };
  }
  function m(k) {
    return {
      resolvedActivePosition: k,
      validatedPosition: y(k)
    };
  }
  function h() {
    if (!d.isCellInActiveBounds) throw new Error("No column for active position");
    return t[u.idx];
  }
  function x() {
    if (!d.isPositionInViewport) throw new Error("No row for active position");
    return n[u.rowIdx];
  }
  let { resolvedActivePosition: u, validatedPosition: d } = m(l);
  if (!d.isPositionInActiveBounds && u !== Ut)
    c(Ut), s(void 0), { resolvedActivePosition: u, validatedPosition: d } = m(Ut);
  else if (u.mode === "EDIT" && (((T = h().editorOptions) == null ? void 0 : T.closeOnExternalRowChange) ?? !0) && x() !== u.originalRow) {
    const k = {
      idx: u.idx,
      rowIdx: u.rowIdx,
      mode: "ACTIVE"
    };
    c(k), f(null), { resolvedActivePosition: u, validatedPosition: d } = m(k);
  }
  return st(() => {
    g !== null && g !== w.current && (w.current = g, g.idx === -1 ? Ei(e.current) : Wr(e.current));
  }, [g, e]), {
    activePosition: u,
    setActivePosition: c,
    setPositionToFocus: f,
    activePositionIsInActiveBounds: d.isPositionInActiveBounds,
    activePositionIsInViewport: d.isPositionInViewport,
    activePositionIsRow: d.isRowInActiveBounds,
    activePositionIsCellInViewport: d.isCellInViewport,
    validatePosition: y,
    getActiveColumn: h,
    getActiveRow: x
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
  return /* @__PURE__ */ oe("span", {
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
const Nn = It(void 0);
Nn.displayName = "DataGridDefaultRenderersContext";
function Et() {
  return kt(Nn);
}
function An({ value: e, tabIndex: t, indeterminate: n, disabled: r, onChange: o, "aria-label": i, "aria-labelledby": a }) {
  const s = Et().renderCheckbox;
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
function Ki({ tabIndex: e }) {
  const { isIndeterminate: t, isRowSelected: n, onRowSelectionChange: r } = sa();
  return /* @__PURE__ */ v(An, {
    "aria-label": "Select All",
    tabIndex: e,
    indeterminate: t,
    value: n,
    onChange: (o) => {
      r({ checked: t ? !1 : o });
    }
  });
}
function Xi({ row: e, tabIndex: t }) {
  const { isRowSelectionDisabled: n, isRowSelected: r, onRowSelectionChange: o } = Kr();
  return /* @__PURE__ */ v(An, {
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
function qi({ row: e, tabIndex: t }) {
  const { isRowSelected: n, onRowSelectionChange: r } = Kr();
  return /* @__PURE__ */ v(An, {
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
const yt = {
  key: _r,
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
    return /* @__PURE__ */ v(Xi, { ...e });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ v(qi, { ...e });
  }
}, Qi = "rdg-7-0-0-beta-60-56a248e4", Zi = "rdg-header-sort-name rdg-7-0-0-beta-60-7fad8c83";
function Ur({ column: e, sortDirection: t, priority: n }) {
  return e.sortable ? /* @__PURE__ */ v(Ji, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Ji({ sortDirection: e, priority: t, children: n }) {
  const r = Et().renderSortStatus;
  return /* @__PURE__ */ oe("span", {
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
  const a = (t == null ? void 0 : t.width) ?? ea, s = (t == null ? void 0 : t.minWidth) ?? ta, l = (t == null ? void 0 : t.maxWidth) ?? void 0, c = (t == null ? void 0 : t.renderCell) ?? ji, g = (t == null ? void 0 : t.renderHeaderCell) ?? Ur, f = (t == null ? void 0 : t.sortable) ?? !1, w = (t == null ? void 0 : t.resizable) ?? !1, y = (t == null ? void 0 : t.draggable) ?? !1, { columns: m, colSpanColumns: h, lastStartFrozenColumnIndex: x, firstEndFrozenColumnIndex: u, headerRowsCount: d } = Q(() => {
    let Y = -1, _ = -1, z = 1;
    const B = [];
    R(e, 1);
    function R(P, I, j) {
      for (const V of P) {
        if ("children" in V) {
          const de = {
            name: V.name,
            parent: j,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: V.headerCellClass
          };
          R(V.children, I + 1, de);
          continue;
        }
        const me = V.frozen ?? !1;
        B.push({
          ...V,
          parent: j,
          idx: 0,
          level: 0,
          frozen: me,
          width: V.width ?? a,
          minWidth: V.minWidth ?? s,
          maxWidth: V.maxWidth ?? l,
          sortable: V.sortable ?? f,
          resizable: V.resizable ?? w,
          draggable: V.draggable ?? y,
          renderCell: V.renderCell ?? c,
          renderHeaderCell: V.renderHeaderCell ?? g
        }), Zt(me) && Y++, I > z && (z = I);
      }
    }
    B.sort((P, I) => P.key === "rdg-select-column" ? -1 : I.key === "rdg-select-column" ? 1 : (P.frozen === "end" ? 2 : P.frozen === !1 ? 1 : 0) - (I.frozen === "end" ? 2 : I.frozen === !1 ? 1 : 0));
    const S = [];
    return B.forEach((P, I) => {
      P.idx = I, Vr(P, I, 0), P.colSpan != null && S.push(P), P.frozen === "end" && _ === -1 && (_ = I);
    }), {
      columns: B,
      colSpanColumns: S,
      lastStartFrozenColumnIndex: Y,
      firstEndFrozenColumnIndex: _,
      headerRowsCount: z
    };
  }, [
    e,
    a,
    s,
    l,
    c,
    g,
    w,
    f,
    y
  ]), { templateColumns: T, layoutCssVars: k, totalStartFrozenColumnWidth: O, totalEndFrozenColumnWidth: E, columnMetrics: C } = Q(() => {
    const Y = /* @__PURE__ */ new Map();
    let _ = 0, z = 0, B = 0;
    const R = [];
    for (const P of m) {
      let I = n(P);
      typeof I == "number" ? I = On(I, P) : I = P.minWidth, R.push(`${I}px`), Y.set(P, {
        width: I,
        left: _
      }), _ += I;
    }
    if (x !== -1) {
      const P = Y.get(m[x]);
      z = P.left + P.width;
    }
    const S = {};
    for (let P = 0; P <= x; P++) {
      const I = m[P];
      S[`--rdg-frozen-start-${I.idx}`] = `${Y.get(I).left}px`;
    }
    if (u !== -1) {
      const P = m[m.length - 1], I = Y.get(P), j = I.left + I.width;
      B = j - Y.get(m[u]).left;
      for (let V = u; V < m.length; V++) {
        const me = m[V], de = Y.get(me);
        S[`--rdg-frozen-end-${me.idx}`] = `${j - (de.left + de.width)}px`;
      }
    }
    return {
      templateColumns: R,
      layoutCssVars: S,
      totalStartFrozenColumnWidth: z,
      totalEndFrozenColumnWidth: B,
      columnMetrics: Y
    };
  }, [
    n,
    m,
    x,
    u
  ]), [A, H] = Q(() => {
    if (!i) return [0, m.length - 1];
    const Y = o + O, _ = o + r - E, z = m.length - 1, B = Tt(x + 1, z);
    if (Y >= _) return [B, B];
    let R = B;
    for (; R < z; ) {
      const { left: P, width: I } = C.get(m[R]);
      if (P + I > Y) break;
      R++;
    }
    let S = R;
    for (; S < z; ) {
      const { left: P, width: I } = C.get(m[S]);
      if (P + I >= _) break;
      S++;
    }
    return [jt(B, R - 1), Tt(z, S + 1)];
  }, [
    C,
    m,
    x,
    o,
    O,
    E,
    r,
    i
  ]);
  return {
    columns: m,
    colSpanColumns: h,
    colOverscanStartIdx: A,
    colOverscanEndIdx: H,
    templateColumns: T,
    layoutCssVars: k,
    headerRowsCount: d,
    lastStartFrozenColumnIndex: x,
    firstEndFrozenColumnIndex: u,
    totalStartFrozenColumnWidth: O,
    totalEndFrozenColumnWidth: E
  };
}
function Vr(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const { parent: r } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Vr(r, t, n - 1);
  }
}
function ra(e, t, n, r, o, i, a, s, l) {
  const [c, g] = ae(null), [f, w] = ae(null), [y, m] = ae(o), h = e.length === t.length, x = h && o !== y, u = [...n], d = [];
  for (const { key: E, idx: C, width: A } of t) {
    const H = i.get(E);
    E === (c == null ? void 0 : c.key) ? (u[C] = c.width === "max-content" ? c.width : `${c.width}px`, d.push(E)) : typeof A == "string" && (H == null ? void 0 : H.type) !== "resized" && (x || (f == null ? void 0 : f.has(E)) === !0 || H === void 0) && (u[C] = A, d.push(E));
  }
  const T = u.join(" ");
  st(k);
  function k() {
    var A, H;
    if (m(o), d.length === 0) return;
    const E = new Map(i);
    let C = !1;
    for (const Y of d) {
      const _ = un(r, Y);
      C || (C = _ !== ((A = i.get(Y)) == null ? void 0 : A.width)), _ === void 0 ? E.delete(Y) : E.set(Y, {
        type: "measured",
        width: _
      });
    }
    if (c !== null) {
      const Y = c.key, _ = (H = i.get(Y)) == null ? void 0 : H.width, z = un(r, Y);
      z !== void 0 && _ !== z && (C = !0, E.set(Y, {
        type: "resized",
        width: z
      })), g(null);
    }
    C && a(E);
  }
  function O(E, C) {
    var H;
    const { key: A } = E;
    if (In(() => {
      var Y;
      if (h) {
        const _ = /* @__PURE__ */ new Set();
        for (const { key: z, width: B } of t) A !== z && typeof B == "string" && ((Y = i.get(z)) == null ? void 0 : Y.type) !== "resized" && _.add(z);
        w(_);
      }
      g({
        key: A,
        width: C
      }), l(typeof C == "number");
    }), w(null), s) {
      const Y = (H = i.get(A)) == null ? void 0 : H.width, _ = typeof C == "number" ? C : un(r, A);
      _ !== void 0 && _ !== Y && s(E, _);
    }
  }
  return {
    gridTemplateColumns: T,
    handleColumnResize: O
  };
}
function un(e, t) {
  var r, o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`;
  return (o = (r = e.current) == null ? void 0 : r.querySelector(n)) == null ? void 0 : o.getBoundingClientRect().width;
}
const Gr = {
  inlineSize: 1,
  blockSize: 1
}, Ct = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new Map(), tt = globalThis.ResizeObserver == null ? null : new ResizeObserver(oa);
function oa(e) {
  for (const t of e) {
    const n = t.target;
    Dn.has(n) && jr(Dn.get(n), t.contentBoxSize[0]);
  }
}
function jr(e, t) {
  var n;
  if (Ct.has(e)) {
    const r = Ct.get(e);
    if (r.inlineSize === t.inlineSize && r.blockSize === t.blockSize) return;
  }
  Ct.set(e, t), (n = kn.get(e)) == null || n();
}
function ia() {
  return Gr;
}
function aa(e) {
  const { inlineSize: t, blockSize: n } = Nr(X((r) => (kn.set(e, r), () => {
    kn.delete(e);
  }), [e]), X(() => Ct.get(e) ?? Gr, [e]), ia);
  return st(() => {
    const r = e.current;
    return Dn.set(r, e), tt == null || tt.observe(r), Ct.has(e) || jr(e, {
      inlineSize: r.clientWidth,
      blockSize: r.clientHeight
    }), () => {
      tt == null || tt.unobserve(r);
    };
  }, [e]), [t, n];
}
function he(e) {
  const t = fe(e);
  st(() => {
    t.current = e;
  });
  const n = X((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Rt(e) {
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
const Jt = It(void 0);
Jt.displayName = "RowSelectionContext";
const Fn = It(void 0);
Fn.displayName = "RowSelectionChangeContext";
function Kr() {
  const e = kt(Jt), t = kt(Fn);
  if (e === void 0 || t === void 0) throw new Error("useRowSelection must be used within renderCell");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Ln = It(void 0);
Ln.displayName = "HeaderRowSelectionContext";
const Hn = It(void 0);
Hn.displayName = "HeaderRowSelectionChangeContext";
function sa() {
  const e = kt(Ln), t = kt(Hn);
  if (e === void 0 || t === void 0) throw new Error("useHeaderRowSelection must be used within renderHeaderCell");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Tn = {
  scrollTop: 0,
  scrollLeft: 0
};
function ca() {
  return Tn;
}
const fn = /* @__PURE__ */ new WeakMap();
function la(e) {
  return Nr(X((t) => {
    if (e.current === null) return () => {
    };
    const n = e.current;
    r();
    function r() {
      const { scrollTop: i } = n, a = zi(n.scrollLeft), s = fn.get(e) ?? Tn;
      return s.scrollTop === i && s.scrollLeft === a ? !1 : (fn.set(e, {
        scrollTop: i,
        scrollLeft: a
      }), !0);
    }
    function o() {
      r() && t();
    }
    return n.addEventListener("scroll", o), () => n.removeEventListener("scroll", o);
  }, [e]), X(() => fn.get(e) ?? Tn, [e]), ca);
}
function da({ gridRef: e }) {
  const [t, n] = ae(null);
  return {
    setScrollToPosition: n,
    scrollToPositionElement: t && /* @__PURE__ */ v("div", {
      ref: (r) => {
        if (r === null) return;
        const o = e.current, { scrollLeft: i, scrollTop: a } = o;
        Gt(r, "auto"), o.scrollLeft === i && o.scrollTop === a && n(null);
      },
      style: {
        gridColumn: t.idx == null ? "1/-1" : t.idx + 1,
        gridRow: t.rowIdx == null ? "1/-1" : t.rowIdx + 1
      }
    })
  };
}
function ua({ columns: e, colSpanColumns: t, rows: n, topSummaryRows: r, bottomSummaryRows: o, colOverscanStartIdx: i, colOverscanEndIdx: a, lastStartFrozenColumnIndex: s, firstEndFrozenColumnIndex: l, rowOverscanStartIdx: c, rowOverscanEndIdx: g }) {
  const f = Q(() => {
    if (i === 0) return 0;
    function* x() {
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
      const d = u.idx;
      if (d >= i) break;
      for (const T of x()) {
        const k = Ye(u, s, l, T);
        if (k !== void 0 && d + k > i) return d;
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
  ]), w = l > -1 ? Math.min(a, l - 1) : a, y = X(function* (x) {
    for (let d = 0; d <= s; d++) yield e[d];
    const u = l > -1 ? l - 1 : e.length - 1;
    if (s < u) {
      x > s && x < f && (yield e[x]);
      for (let d = f; d <= w; d++) yield e[d];
      x > w && x <= u && (yield e[x]);
    }
    if (l > -1) for (let d = l; d < e.length; d++) yield e[d];
  }, [
    f,
    w,
    e,
    s,
    l
  ]), m = X(function* (x = -1, u) {
    const d = y(x);
    for (const T of d) {
      let k = u && Ye(T, s, l, u);
      for (yield [
        T,
        T.idx === x,
        k
      ]; k !== void 0 && k > 1; )
        d.next(), k--;
    }
  }, [
    y,
    s,
    l
  ]), h = X(function* (x = -1, u) {
    if (x >= 0 && x < e.length) {
      const d = e[x];
      yield [
        d,
        !0,
        u && Ye(d, s, l, u)
      ];
    }
  }, [
    e,
    s,
    l
  ]);
  return {
    viewportColumns: Q(() => y(-1).toArray(), [y]),
    iterateOverViewportColumnsForRow: m,
    iterateOverViewportColumnsForRowOutsideOfViewport: h
  };
}
function fa({ rows: e, rowHeight: t, clientHeight: n, scrollTop: r, enableVirtualization: o }) {
  const { totalRowHeight: i, gridTemplateRows: a, getRowTop: s, getRowHeight: l, findRowIdx: c } = Q(() => {
    if (typeof t == "number") return {
      totalRowHeight: t * e.length,
      gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
      getRowTop: (d) => d * t,
      getRowHeight: () => t,
      findRowIdx: (d) => sr(d / t)
    };
    let w = 0, y = "", m = null, h = 0;
    const x = e.map((d, T) => {
      const k = t(d), O = {
        top: w,
        height: k
      };
      return w += k, m === null ? (m = k, h = 1) : m === k ? h++ : (h > 1 ? y += `repeat(${h}, ${m}px) ` : y += `${m}px `, m = k, h = 1), T === e.length - 1 && (h > 1 ? y += `repeat(${h}, ${m}px)` : y += `${m}px`), O;
    }), u = (d) => jt(0, Tt(e.length - 1, d));
    return {
      totalRowHeight: w,
      gridTemplateRows: y,
      getRowTop: (d) => x[u(d)].top,
      getRowHeight: (d) => x[u(d)].height,
      findRowIdx(d) {
        let T = 0, k = x.length - 1;
        for (; T <= k; ) {
          const O = T + sr((k - T) / 2), E = x[O].top;
          if (E === d) return O;
          if (E < d ? T = O + 1 : E > d && (k = O - 1), T > k) return k;
        }
        return 0;
      }
    };
  }, [t, e]);
  let g = 0, f = e.length - 1;
  if (o) {
    const y = c(r), m = c(r + n);
    g = jt(0, y - 4), f = Tt(e.length - 1, m + 4);
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
function ga({ column: e, colSpan: t, isCellActive: n, isDraggedOver: r, row: o, rowIdx: i, className: a, onMouseDown: s, onCellMouseDown: l, onClick: c, onCellClick: g, onDoubleClick: f, onCellDoubleClick: w, onContextMenu: y, onCellContextMenu: m, onRowChange: h, setActivePosition: x, style: u, ...d }) {
  const { tabIndex: T, childTabIndex: k, onFocus: O } = Rt(n), { cellClass: E } = e;
  a = at(e, r && ha, typeof E == "function" ? E(o) : E, a);
  const C = Fr(e, o);
  function A(S = !1) {
    x({
      rowIdx: i,
      idx: e.idx
    }, { enableEditor: S });
  }
  function H(S, P) {
    let I = !1;
    if (P) {
      const j = En(S);
      P({
        rowIdx: i,
        row: o,
        column: e,
        setActivePosition: A
      }, j), I = j.isGridDefaultPrevented();
    }
    return I;
  }
  function Y(S) {
    s == null || s(S), H(S, l) || A();
  }
  function _(S) {
    c == null || c(S), H(S, g);
  }
  function z(S) {
    f == null || f(S), H(S, w) || A(!0);
  }
  function B(S) {
    y == null || y(S), H(S, m);
  }
  function R(S) {
    h(e, i, S);
  }
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !C || void 0,
    tabIndex: T,
    className: a,
    style: {
      ...lt(e, t),
      ...u
    },
    onClick: _,
    onMouseDown: Y,
    onDoubleClick: z,
    onContextMenu: B,
    onFocus: O,
    ...d,
    children: e.renderCell({
      column: e,
      row: o,
      rowIdx: i,
      isCellEditable: C,
      tabIndex: k,
      onRowChange: R
    })
  });
}
const ma = _e(ga);
function wa(e, t) {
  return /* @__PURE__ */ v(ma, { ...t }, e);
}
const pa = typeof scheduler == "object" && typeof scheduler.postTask == "function", ya = "rdg-7-0-0-beta-60-46f9ea88";
function ba({ column: e, colSpan: t, row: n, rowIdx: r, onRowChange: o, closeEditor: i, onKeyDown: a, navigate: s }) {
  var T, k, O;
  const l = fe(void 0), c = fe(void 0), g = fe(void 0), f = ((T = e.editorOptions) == null ? void 0 : T.commitOnOutsideClick) ?? !0, w = wi(() => {
    h(!0, !1);
  });
  st(() => {
    if (!f) return;
    function E(A) {
      if (l.current = A, pa) {
        const H = new AbortController(), { signal: Y } = H;
        c.current = H, scheduler.postTask(w, {
          priority: "user-blocking",
          signal: Y
        }).catch(() => {
        });
      } else g.current = requestAnimationFrame(w);
    }
    function C(A) {
      l.current === A && w();
    }
    return window.addEventListener("mousedown", E, { capture: !0 }), window.addEventListener("mousedown", C), () => {
      window.removeEventListener("mousedown", E, { capture: !0 }), window.removeEventListener("mousedown", C), y();
    };
  }, [f]);
  function y() {
    l.current = void 0, c.current !== void 0 && (c.current.abort(), c.current = void 0), g.current !== void 0 && (cancelAnimationFrame(g.current), g.current = void 0);
  }
  function m(E) {
    if (a) {
      const C = En(E);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(E);
        },
        onClose: h
      }, C), C.isGridDefaultPrevented()) return;
    }
    E.key === "Escape" ? h() : E.key === "Enter" ? h(!0) : Ni(E) && s(E);
  }
  function h(E = !1, C = !0) {
    E ? o(n, !0, C) : i(C);
  }
  function x(E, C = !1) {
    o(E, C, C);
  }
  const { cellClass: u } = e, d = at(e, "rdg-editor-container", !((k = e.editorOptions) != null && k.displayCellContent) && ya, typeof u == "function" ? u(n) : u);
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: d,
    style: lt(e, t),
    onKeyDown: m,
    onMouseDownCapture: y,
    children: e.renderEditCell != null && /* @__PURE__ */ oe(it, { children: [e.renderEditCell({
      column: e,
      row: n,
      rowIdx: r,
      onRowChange: x,
      onClose: h
    }), ((O = e.editorOptions) == null ? void 0 : O.displayCellContent) && e.renderCell({
      column: e,
      row: n,
      rowIdx: r,
      isCellEditable: !0,
      tabIndex: -1,
      onRowChange: x
    })] })
  });
}
function va({ column: e, rowIdx: t, isCellActive: n, setPosition: r }) {
  const { tabIndex: o, onFocus: i } = Rt(n), { colSpan: a } = e, s = Br(e, t), l = e.idx + 1;
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
    className: $e(zr, e.headerCellClass),
    style: {
      ...$r(e, t, s),
      gridColumnStart: l,
      gridColumnEnd: l + a
    },
    onFocus: i,
    onMouseDown: c,
    children: e.name
  });
}
const xa = "rdg-7-0-0-beta-60-2a7e240d", Ca = "rdg-cell-resizable rdg-7-0-0-beta-60-1893dc0f", Da = "rdg-resize-handle rdg-7-0-0-beta-60-4e60db91", ka = "rdg-cell-draggable", Xr = "rdg-7-0-0-beta-60-f2d18717", Ta = `rdg-cell-dragging ${Xr}`, Sa = `rdg-cell-drag-over ${Xr}`, Pa = "rdg-7-0-0-beta-60-3d12c7ae";
function Ia({ column: e, colSpan: t, rowIdx: n, isCellActive: r, onColumnResize: o, onColumnResizeEnd: i, onColumnsReorder: a, sortColumns: s, onSortColumnsChange: l, setPosition: c, shouldFocusGrid: g, direction: f, draggedColumnKey: w, setDraggedColumnKey: y }) {
  const [m, h] = ae(!1), x = fe(null), u = w === e.key, d = Br(e, n), { tabIndex: T, childTabIndex: k, onFocus: O } = Rt(g || r), E = s == null ? void 0 : s.findIndex((D) => D.columnKey === e.key), C = E !== void 0 && E > -1 ? s[E] : void 0, A = C == null ? void 0 : C.direction, H = C !== void 0 && s.length > 1 ? E + 1 : void 0, Y = A && !H ? A === "ASC" ? "ascending" : "descending" : void 0, { sortable: _, resizable: z, draggable: B } = e, R = at(e, e.headerCellClass, _ && xa, z && Ca, B && ka, u && Ta, m && Sa);
  function S(D) {
    if (l == null) return;
    const { sortDescendingFirst: W } = e;
    if (C === void 0) {
      const U = {
        columnKey: e.key,
        direction: W ? "DESC" : "ASC"
      };
      l(s && D ? [...s, U] : [U]);
    } else {
      let U;
      if ((W === !0 && A === "DESC" || W !== !0 && A === "ASC") && (U = {
        columnKey: e.key,
        direction: A === "ASC" ? "DESC" : "ASC"
      }), D) {
        const ee = [...s];
        U ? ee[E] = U : ee.splice(E, 1), l(ee);
      } else l(U ? [U] : []);
    }
  }
  function P(D) {
    O == null || O(D), g && c({
      idx: 0,
      rowIdx: n
    });
  }
  function I() {
    c({
      idx: e.idx,
      rowIdx: n
    });
  }
  function j(D) {
    _ && S(D.ctrlKey || D.metaKey);
  }
  function V(D) {
    const { key: W } = D;
    if (_ && (W === " " || W === "Enter"))
      D.preventDefault(), S(D.ctrlKey || D.metaKey);
    else if (z && Rn(D) && (W === "ArrowLeft" || W === "ArrowRight")) {
      D.stopPropagation();
      const { width: U } = D.currentTarget.getBoundingClientRect(), { leftKey: ee } = Mn(f), q = On(U + (W === ee ? -10 : 10), e);
      q !== U && o(e, q);
    }
  }
  function me(D) {
    In(() => {
      y(e.key);
    }), D.dataTransfer.setDragImage(x.current, 0, 0), D.dataTransfer.dropEffect = "move";
  }
  function de() {
    y(void 0);
  }
  function Ue(D) {
    D.preventDefault(), D.dataTransfer.dropEffect = "move";
  }
  function xe(D) {
    h(!1), D.preventDefault(), a == null || a(w, e.key);
  }
  function Pe(D) {
    cr(D) && h(!0);
  }
  function Ae(D) {
    cr(D) && h(!1);
  }
  let Ce, Re;
  B && (Ce = {
    draggable: !0,
    onDragStart: me,
    onDragEnd: de
  }, w !== void 0 && w !== e.key && (Re = {
    onDragOver: Ue,
    onDragEnter: Pe,
    onDragLeave: Ae,
    onDrop: xe
  }));
  const F = {
    ...$r(e, n, d),
    ...lt(e, t)
  }, M = e.renderHeaderCell({
    column: e,
    sortDirection: A,
    priority: H,
    tabIndex: k
  });
  return /* @__PURE__ */ oe(it, { children: [u && /* @__PURE__ */ v("div", {
    ref: x,
    style: F,
    className: at(e, e.headerCellClass, Pa),
    children: M
  }), /* @__PURE__ */ oe("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": d,
    "aria-selected": r,
    "aria-sort": Y,
    tabIndex: T,
    className: R,
    style: F,
    onMouseDown: I,
    onFocus: P,
    onClick: j,
    onKeyDown: V,
    ...Ce,
    ...Re,
    children: [M, z && /* @__PURE__ */ v(Ea, {
      direction: f,
      column: e,
      onColumnResize: o,
      onColumnResizeEnd: i
    })]
  })] });
}
function Ea({ direction: e, column: t, onColumnResize: n, onColumnResizeEnd: r }) {
  const o = fe(void 0), i = e === "rtl";
  function a(g) {
    if (g.pointerType === "mouse" && g.button !== 0) return;
    g.preventDefault();
    const { currentTarget: f, pointerId: w } = g;
    f.setPointerCapture(w);
    const { right: y, left: m } = f.parentElement.getBoundingClientRect();
    o.current = i ? g.clientX - m : y - g.clientX;
  }
  function s(g) {
    const f = o.current;
    if (f === void 0) return;
    const { width: w, right: y, left: m } = g.currentTarget.parentElement.getBoundingClientRect();
    let h = i ? y + f - g.clientX : g.clientX + f - m;
    h = On(h, t), w > 0 && h !== w && n(t, h);
  }
  function l() {
    r(), o.current = void 0;
  }
  function c() {
    n(t, "max-content");
  }
  return /* @__PURE__ */ v("div", {
    "aria-hidden": !0,
    className: Da,
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
const Wn = "rdg-row rdg-7-0-0-beta-60-3c083f1b", Ra = "rdg-top-summary-row", Ma = "rdg-bottom-summary-row", qr = "rdg-header-row rdg-7-0-0-beta-60-0dbd5994";
function Oa({ headerRowClass: e, rowIdx: t, iterateOverViewportColumnsForRow: n, onColumnResize: r, onColumnResizeEnd: o, onColumnsReorder: i, sortColumns: a, onSortColumnsChange: s, activeCellIdx: l, setPosition: c, shouldFocusGrid: g, direction: f }) {
  const [w, y] = ae(), m = l === -1, h = n(l, { type: "HEADER" }).map(([x, u, d], T) => /* @__PURE__ */ v(Ia, {
    column: x,
    colSpan: d,
    rowIdx: t,
    isCellActive: u,
    onColumnResize: r,
    onColumnResizeEnd: o,
    onColumnsReorder: i,
    onSortColumnsChange: s,
    sortColumns: a,
    setPosition: c,
    shouldFocusGrid: g && T === 0,
    direction: f,
    draggedColumnKey: w,
    setDraggedColumnKey: y
  }, x.key)).toArray();
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": t,
    className: $e(qr, m && "rdg-row-active", e),
    children: h
  });
}
var Na = _e(Oa);
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
var Fa = _e(Aa);
function La({ className: e, rowIdx: t, gridRowStart: n, activeCellIdx: r, isRowSelectionDisabled: o, isRowSelected: i, draggedOverCellIdx: a, row: s, iterateOverViewportColumnsForRow: l, activeCellEditor: c, isTreeGrid: g, onCellMouseDown: f, onCellClick: w, onCellDoubleClick: y, onCellContextMenu: m, rowClass: h, onRowChange: x, setActivePosition: u, style: d, ...T }) {
  const k = Et().renderCell, O = r === -1;
  e = $e(Wn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, O && "rdg-row-active", h == null ? void 0 : h(s, t), e);
  const E = l(r, {
    type: "ROW",
    row: s
  }).map(([C, A, H]) => A && c ? c : k(C.key, {
    column: C,
    colSpan: H,
    row: s,
    rowIdx: t,
    isDraggedOver: a === C.idx,
    isCellActive: A,
    onCellMouseDown: f,
    onCellClick: w,
    onCellDoubleClick: y,
    onCellContextMenu: m,
    onRowChange: x,
    setActivePosition: u
  })).toArray();
  return /* @__PURE__ */ v(Jt, {
    value: Q(() => ({
      isRowSelected: i,
      isRowSelectionDisabled: o
    }), [o, i]),
    children: /* @__PURE__ */ v("div", {
      role: "row",
      tabIndex: g ? O ? 0 : -1 : void 0,
      className: e,
      style: {
        gridRowStart: n,
        ...d
      },
      ...T,
      children: E
    })
  });
}
const Ha = _e(La);
function Qr(e, t) {
  return /* @__PURE__ */ v(Ha, { ...t }, e);
}
const Wa = "rdg-sort-arrow rdg-7-0-0-beta-60-3d5115f3";
function za({ sortDirection: e, priority: t }) {
  return /* @__PURE__ */ oe(it, { children: [Ya({ sortDirection: e }), $a({ priority: t })] });
}
function Ya({ sortDirection: e }) {
  return e === void 0 ? null : /* @__PURE__ */ v("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Wa,
    "aria-hidden": !0,
    children: /* @__PURE__ */ v("path", { d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
  });
}
function $a({ priority: e }) {
  return e;
}
const Ba = "rdg rdg-7-0-0-beta-60-ccd2e5d9", _a = "rdg-viewport-dragging rdg-7-0-0-beta-60-e9b0e1c9", Zr = "rdg-7-0-0-beta-60-2e639f12", Ua = "rdg-7-0-0-beta-60-86aef152", Va = "rdg-7-0-0-beta-60-7689f238", Jr = `${Zr} ${Ua}`, eo = `${Zr} ${Va}`, to = "rdg-7-0-0-beta-60-487ac462", Ga = `${Jr} ${to}`, ja = `${eo} ${to}`;
function Ka({ column: e, colSpan: t, row: n, rowIdx: r, isCellActive: o, setActivePosition: i }) {
  var w;
  const { tabIndex: a, childTabIndex: s, onFocus: l } = Rt(o), { summaryCellClass: c } = e, g = at(e, typeof c == "function" ? c(n) : c);
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
    style: lt(e, t),
    onMouseDown: f,
    onFocus: l,
    children: (w = e.renderSummaryCell) == null ? void 0 : w.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
var Xa = _e(Ka);
const qa = "rdg-summary-row rdg-7-0-0-beta-60-0b90c82c";
function Qa({ rowIdx: e, gridRowStart: t, row: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, setActivePosition: i, top: a, bottom: s, isTop: l, isTreeGrid: c, "aria-rowindex": g }) {
  const f = o === -1, w = r(o, {
    type: "SUMMARY",
    row: n
  }).map(([y, m, h]) => /* @__PURE__ */ v(Xa, {
    column: y,
    colSpan: h,
    row: n,
    rowIdx: e,
    isCellActive: m,
    setActivePosition: i
  }, y.key)).toArray();
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": g,
    tabIndex: c ? f ? 0 : -1 : void 0,
    className: $e(Wn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, qa, l ? Ra : Ma, f && "rdg-row-active"),
    style: {
      gridRowStart: t,
      top: a,
      bottom: s
    },
    children: w
  });
}
var lr = _e(Qa);
function no(e) {
  const { ref: t, columns: n, rows: r, topSummaryRows: o, bottomSummaryRows: i, rowKeyGetter: a, onRowsChange: s, rowHeight: l, headerRowHeight: c, summaryRowHeight: g, columnWidths: f, onColumnWidthsChange: w, selectedRows: y, isRowSelectionDisabled: m, onSelectedRowsChange: h, sortColumns: x, onSortColumnsChange: u, defaultColumnOptions: d, onCellMouseDown: T, onCellClick: k, onCellDoubleClick: O, onCellContextMenu: E, onCellKeyDown: C, onActivePositionChange: A, onScroll: H, onColumnResize: Y, onColumnsReorder: _, onFill: z, onCellCopy: B, onCellPaste: R, enableVirtualization: S, renderers: P, className: I, style: j, rowClass: V, headerRowClass: me, direction: de, role: Ue, "aria-label": xe, "aria-labelledby": Pe, "aria-description": Ae, "aria-describedby": Ce, "aria-rowcount": Re, "data-testid": F, "data-cy": M } = e, D = Et(), W = Ue ?? "grid", U = l ?? 35, ee = c ?? (typeof U == "number" ? U : 35), q = g ?? (typeof U == "number" ? U : 35), le = (P == null ? void 0 : P.renderRow) ?? (D == null ? void 0 : D.renderRow) ?? Qr, we = (P == null ? void 0 : P.renderCell) ?? (D == null ? void 0 : D.renderCell) ?? wa, pe = (P == null ? void 0 : P.renderSortStatus) ?? (D == null ? void 0 : D.renderSortStatus) ?? za, ye = (P == null ? void 0 : P.renderCheckbox) ?? (D == null ? void 0 : D.renderCheckbox) ?? Bi, Me = (P == null ? void 0 : P.noRowsFallback) ?? (D == null ? void 0 : D.noRowsFallback), De = S ?? !0, Ie = de ?? "ltr", se = fe(null), { scrollTop: be, scrollLeft: Xe } = la(se), [Ve, Z] = aa(se), [te, ce] = ae(() => f ?? /* @__PURE__ */ new Map()), [dt, Nt] = ae(!1), [en, _n] = ae(!1), [Fe, tn] = ae(void 0), [qe, vo] = ae(-1), nn = f != null && w != null && !dt, At = nn ? f : te, xo = nn ? (p) => {
    ce(p), w(p);
  } : ce, Un = X((p) => {
    var b;
    return ((b = At.get(p.key)) == null ? void 0 : b.width) ?? p.width;
  }, [At]), { columns: Ee, colSpanColumns: Vn, lastStartFrozenColumnIndex: Qe, firstEndFrozenColumnIndex: Ge, headerRowsCount: Le, colOverscanStartIdx: Co, colOverscanEndIdx: Do, templateColumns: ko, layoutCssVars: To, totalStartFrozenColumnWidth: Gn, totalEndFrozenColumnWidth: jn } = na({
    rawColumns: n,
    defaultColumnOptions: d,
    getColumnWidth: Un,
    scrollLeft: Xe,
    viewportWidth: Ve,
    enableVirtualization: De
  }), ut = W === "treegrid", Oe = (o == null ? void 0 : o.length) ?? 0, ke = (i == null ? void 0 : i.length) ?? 0, Kn = Oe + ke, Te = Le + Oe, rn = Le - 1, He = -Te, Ze = r.length + ke - 1, on = He + rn, Ft = Ee.length - 1, Lt = Le * ee, So = Kn * q, Je = Z - Lt - So, an = y != null && h != null, { leftKey: Po, rightKey: Xn } = Mn(Ie), qn = Re ?? Le + r.length + Kn, Io = {
    gridColumnStart: Qe + 2,
    insetInlineStart: Gn
  }, Eo = {
    gridColumnStart: Ge + 1,
    gridColumnEnd: -1,
    insetInlineEnd: jn
  }, { activePosition: G, setActivePosition: ft, setPositionToFocus: Qn, activePositionIsInActiveBounds: Ro, activePositionIsInViewport: sn, activePositionIsRow: Zn, activePositionIsCellInViewport: Ht, validatePosition: Wt, getActiveColumn: et, getActiveRow: ht } = Yi({
    gridRef: se,
    columns: Ee,
    rows: r,
    isTreeGrid: ut,
    maxColIdx: Ft,
    minRowIdx: He,
    maxRowIdx: Ze,
    setDraggedOverRowIdx: tn
  }), { setScrollToPosition: Mo, scrollToPositionElement: Oo } = da({ gridRef: se }), No = Q(() => ({
    renderCheckbox: ye,
    renderSortStatus: pe,
    renderCell: we
  }), [
    ye,
    pe,
    we
  ]), Ao = Q(() => {
    let p = !1, b = !1;
    if (a != null && y != null && y.size > 0) {
      for (const N of r)
        if (y.has(a(N)) ? p = !0 : b = !0, p && b) break;
    }
    return {
      isRowSelected: p && !b,
      isIndeterminate: p && b
    };
  }, [
    r,
    y,
    a
  ]), { rowOverscanStartIdx: gt, rowOverscanEndIdx: mt, totalRowHeight: zt, gridTemplateRows: Fo, getRowTop: Jn, getRowHeight: Lo, findRowIdx: cn } = fa({
    rows: r,
    rowHeight: U,
    clientHeight: Je,
    scrollTop: be,
    enableVirtualization: De
  }), { viewportColumns: er, iterateOverViewportColumnsForRow: wt, iterateOverViewportColumnsForRowOutsideOfViewport: Ho } = ua({
    columns: Ee,
    colSpanColumns: Vn,
    colOverscanStartIdx: Co,
    colOverscanEndIdx: Do,
    lastStartFrozenColumnIndex: Qe,
    firstEndFrozenColumnIndex: Ge,
    rowOverscanStartIdx: gt,
    rowOverscanEndIdx: mt,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), { gridTemplateColumns: Wo, handleColumnResize: zo } = ra(Ee, er, ko, se, Ve, At, xo, Y, Nt), Yo = he(zo), $o = he(ni), Bo = he(_), _o = he(u), Uo = he(T), Vo = he(k), Go = he(O), jo = he(E), Ko = he(Qo), Xo = he(nr), qo = he(Yt), ln = he(pt), tr = he(ci);
  mi(t, () => ({
    element: se.current,
    scrollToCell({ idx: p, rowIdx: b }) {
      const N = p != null && p > Qe && (Ge === -1 || p < Ge) && p < Ee.length ? p : void 0, $ = b != null && Wt({
        idx: 0,
        rowIdx: b
      }).isPositionInViewport ? b + Te : void 0;
      (N != null || $ != null) && Mo({
        idx: N,
        rowIdx: $
      });
    },
    setActivePosition: pt
  }));
  function Qo(p) {
    if (!h) return;
    xt(a);
    const b = new Set(y);
    for (const N of r) {
      if ((m == null ? void 0 : m(N)) === !0) continue;
      const $ = a(N);
      p.checked ? b.add($) : b.delete($);
    }
    h(b);
  }
  function nr(p) {
    if (!h) return;
    xt(a);
    const { row: b, checked: N, isShiftClick: $ } = p;
    if ((m == null ? void 0 : m(b)) === !0) return;
    const L = new Set(y), K = a(b), ie = r.indexOf(b);
    if (vo(ie), N ? L.add(K) : L.delete(K), $ && qe !== -1 && qe !== ie && qe < r.length) {
      const [re, ve] = qe < ie ? [qe, ie] : [ie, qe];
      for (let We = re + 1; We < ve; We++) {
        const dn = r[We];
        (m == null ? void 0 : m(dn)) !== !0 && (N ? L.add(a(dn)) : L.delete(a(dn)));
      }
    }
    h(L);
  }
  function Zo(p) {
    const { idx: b, rowIdx: N, mode: $ } = G;
    if ($ === "EDIT") return;
    if (C && sn) {
      const K = En(p);
      if (C({
        mode: "ACTIVE",
        row: r[N],
        column: Ee[b],
        rowIdx: N,
        setActivePosition: pt
      }, K), K.isGridDefaultPrevented()) return;
    }
    const { target: L } = p;
    if (L instanceof Element && !(L.closest(".rdg-cell") === null && !(ut && L.role === "row")))
      switch (p.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "Tab":
        case "Home":
        case "End":
        case "PageUp":
        case "PageDown":
          ir(p);
          break;
        default:
          ti(p);
          break;
      }
  }
  function Yt(p, b, N) {
    if (typeof s != "function" || N === r[b]) return;
    const $ = r.with(b, N);
    s($, {
      indexes: [b],
      column: p
    });
  }
  function rr() {
    G.mode === "EDIT" && Yt(et(), G.rowIdx, G.row);
  }
  function Jo(p) {
    Ht && (B == null || B({
      row: ht(),
      column: et()
    }, p));
  }
  function ei(p) {
    if (typeof R != "function" || typeof s != "function" || !$t(G)) return;
    const b = et(), N = ht(), $ = R({
      row: N,
      column: b
    }, p);
    Yt(b, G.rowIdx, $);
  }
  function ti(p) {
    if (!Ht) return;
    const b = ht(), { key: N, shiftKey: $ } = p;
    if (an && $ && N === " ") {
      xt(a);
      const L = a(b);
      nr({
        row: b,
        checked: !y.has(L),
        isShiftClick: !1
      }), p.preventDefault();
      return;
    }
    $t(G) && Oi(p, R != null) && ft(({ idx: L, rowIdx: K }) => ({
      idx: L,
      rowIdx: K,
      mode: "EDIT",
      row: b,
      originalRow: b
    }));
  }
  function ni() {
    dt && (w == null || w(At), Nt(!1));
  }
  function ri(p) {
    p.preventDefault(), !(p.pointerType === "mouse" && p.button !== 0) && (_n(!0), p.currentTarget.setPointerCapture(p.pointerId));
  }
  function oi(p) {
    const b = se.current, N = Lt + Oe * q, $ = be - N + p.clientY - b.getBoundingClientRect().top, L = cn($);
    tn(L);
    const K = Te + L + 1;
    Gt(b.querySelector(`& > [aria-rowindex="${K}"] > [aria-colindex="${G.idx + 1}"]`));
  }
  function ii() {
    if (_n(!1), Fe === void 0) return;
    const { rowIdx: p } = G, [b, N] = p < Fe ? [p + 1, Fe + 1] : [Fe, p];
    or(b, N), tn(void 0);
  }
  function ai() {
    Wr(se.current, !1);
  }
  function si(p) {
    p.stopPropagation(), or(G.rowIdx + 1, r.length);
  }
  function or(p, b) {
    if (s == null) return;
    const { idx: N } = G, $ = et(), L = ht(), K = [...r], ie = [];
    for (let re = p; re < b; re++) if ($t({
      rowIdx: re,
      idx: N
    })) {
      const ve = z({
        columnKey: $.key,
        sourceRow: L,
        targetRow: r[re]
      });
      ve !== r[re] && (K[re] = ve, ie.push(re));
    }
    ie.length > 0 && s(K, {
      indexes: ie,
      column: $
    });
  }
  function $t(p) {
    return Wt(p).isCellInViewport && Fr(Ee[p.idx], r[p.rowIdx]);
  }
  function pt(p, b) {
    const { isPositionInActiveBounds: N } = Wt(p);
    if (!N) return;
    rr();
    const $ = dr(G, p);
    if (b != null && b.enableEditor && $t(p)) {
      const L = r[p.rowIdx];
      ft({
        ...p,
        mode: "EDIT",
        row: L,
        originalRow: L
      });
    } else if ($) Gt(Lr(se.current));
    else {
      const L = {
        ...p,
        mode: "ACTIVE"
      };
      ft(L), b != null && b.shouldFocus && Qn(L);
    }
    A && !$ && A({
      rowIdx: p.rowIdx,
      row: r[p.rowIdx],
      column: Ee[p.idx]
    });
  }
  function ci({ idx: p, rowIdx: b }) {
    pt({
      rowIdx: He + b - 1,
      idx: p
    });
  }
  function li(p, b, N) {
    const { idx: $, rowIdx: L } = G;
    switch (p) {
      case "ArrowUp": {
        const K = L - 1;
        return {
          idx: $ === -1 && K < -Oe ? 0 : $,
          rowIdx: K
        };
      }
      case "ArrowDown":
        return {
          idx: $,
          rowIdx: L + 1
        };
      case Po: {
        const K = $ - 1;
        return {
          idx: L < -Oe && K < 0 ? 0 : K,
          rowIdx: L
        };
      }
      case Xn:
        return {
          idx: $ + 1,
          rowIdx: L
        };
      case "Tab":
        return {
          idx: $ + (N ? -1 : 1),
          rowIdx: L
        };
      case "Home":
        return Zn || b ? {
          idx: 0,
          rowIdx: He
        } : {
          idx: 0,
          rowIdx: L
        };
      case "End":
        return Zn ? {
          idx: $,
          rowIdx: Ze
        } : {
          idx: Ft,
          rowIdx: b ? Ze : L
        };
      case "PageUp": {
        if (L === He) return G;
        const K = Jn(L) + Lo(L) - Je;
        return {
          idx: $,
          rowIdx: K > 0 ? cn(K) : 0
        };
      }
      case "PageDown": {
        if (L >= r.length) return G;
        const K = Jn(L) + Je;
        return {
          idx: $,
          rowIdx: K < zt ? cn(K) : r.length - 1
        };
      }
      default:
        return G;
    }
  }
  function ir(p) {
    const { key: b, shiftKey: N } = p;
    let $ = "NONE";
    if (b === "Tab") {
      if (Si({
        shiftKey: N,
        maxColIdx: Ft,
        minRowIdx: He,
        maxRowIdx: Ze,
        activePosition: G
      })) {
        rr();
        return;
      }
      $ = "CHANGE_ROW";
    }
    p.preventDefault();
    const L = li(b, Rn(p), N);
    dr(G, L) || pt(Ti({
      moveUp: b === "ArrowUp",
      moveNext: b === Xn || b === "Tab" && !N,
      columns: Ee,
      colSpanColumns: Vn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: He,
      mainHeaderRowIdx: on,
      maxRowIdx: Ze,
      lastStartFrozenColumnIndex: Qe,
      firstEndFrozenColumnIndex: Ge,
      cellNavigationMode: $,
      activePosition: G,
      nextPosition: L,
      nextPositionIsCellInActiveBounds: Wt(L).isCellInActiveBounds
    }), { shouldFocus: !0 });
  }
  function di(p) {
    if (Fe === void 0) return;
    const { rowIdx: b } = G;
    return (b < Fe ? b < p && p <= Fe : b > p && p >= Fe) ? G.idx : void 0;
  }
  function ui() {
    var We;
    if (z == null || G.mode !== "ACTIVE" || !Ht) return;
    const { rowIdx: p } = G, b = et();
    if (b.renderEditCell == null || b.editable === !1) return;
    const N = p === Ze, $ = Un(b), L = ((We = b.colSpan) == null ? void 0 : We.call(b, {
      type: "ROW",
      row: ht()
    })) ?? 1, { insetInlineStart: K, ...ie } = lt(b, L), re = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", ve = b.idx + L - 1 === Ft;
    return /* @__PURE__ */ v("div", {
      style: {
        ...ie,
        gridRowStart: Te + p + 1,
        marginInlineEnd: ve ? void 0 : re,
        marginBlockEnd: N ? void 0 : re,
        insetInlineStart: K ? `calc(${K} + ${$}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
      },
      className: $e(Wi, b.frozen && "rdg-7-0-0-beta-60-7abddb3e"),
      onPointerDown: ri,
      onPointerMove: en ? oi : void 0,
      onLostPointerCapture: en ? ii : void 0,
      onClick: ai,
      onDoubleClick: si
    });
  }
  function ar(p, b, N) {
    return /* @__PURE__ */ oe(it, { children: [
      /* @__PURE__ */ v("div", {
        className: N,
        style: {
          ...p,
          gridRowStart: 1,
          gridRowEnd: Le + 1 + Oe,
          insetBlockStart: 0
        }
      }),
      r.length > 0 && /* @__PURE__ */ v("div", {
        className: b,
        style: {
          ...p,
          gridRowStart: Te + gt + 1,
          gridRowEnd: Te + mt + 2
        }
      }),
      i != null && ke > 0 && /* @__PURE__ */ v("div", {
        className: N,
        style: {
          ...p,
          gridRowStart: Te + r.length + 1,
          gridRowEnd: Te + r.length + 1 + ke,
          insetBlockStart: Je > zt ? Z - q * ke : void 0,
          insetBlockEnd: Je > zt ? void 0 : 0
        }
      })
    ] });
  }
  function fi(p) {
    if (!Ht || G.rowIdx !== p || G.mode !== "EDIT") return;
    const { row: b } = G, N = et(), $ = Ye(N, Qe, Ge, {
      type: "ROW",
      row: b
    });
    function L(ie) {
      const re = {
        idx: G.idx,
        rowIdx: p,
        mode: "ACTIVE"
      };
      ft(re), ie && Qn(re);
    }
    function K(ie, re, ve) {
      re ? In(() => {
        Yt(N, G.rowIdx, ie), L(ve);
      }) : ft((We) => ({
        ...We,
        row: ie
      }));
    }
    return /* @__PURE__ */ v(ba, {
      column: N,
      colSpan: $,
      row: b,
      rowIdx: p,
      onRowChange: K,
      closeEditor: L,
      onKeyDown: C,
      navigate: ir
    }, N.key);
  }
  function* hi() {
    const p = G.rowIdx;
    sn && p < gt && (yield p);
    for (let b = gt; b <= mt; b++) yield b;
    sn && p > mt && (yield p);
  }
  function gi() {
    const { idx: p, rowIdx: b } = G;
    return hi().map((N) => {
      const $ = N === b, L = $ && (N < gt || N > mt) ? Ho : wt, K = r[N], ie = Te + N + 1;
      let re = N, ve = !1;
      return typeof a == "function" && (re = a(K), ve = (y == null ? void 0 : y.has(re)) ?? !1), le(re, {
        "aria-rowindex": Te + N + 1,
        "aria-selected": an ? ve : void 0,
        rowIdx: N,
        row: K,
        iterateOverViewportColumnsForRow: L,
        isRowSelectionDisabled: (m == null ? void 0 : m(K)) ?? !1,
        isRowSelected: ve,
        onCellMouseDown: Uo,
        onCellClick: Vo,
        onCellDoubleClick: Go,
        onCellContextMenu: jo,
        rowClass: V,
        gridRowStart: ie,
        activeCellIdx: $ ? p : void 0,
        draggedOverCellIdx: di(N),
        onRowChange: qo,
        setActivePosition: ln,
        activeCellEditor: fi(N),
        isTreeGrid: ut
      });
    }).toArray();
  }
  nn && te !== f && ce(f);
  let Bt = `repeat(${Le}, ${ee}px)`;
  return Oe > 0 && (Bt += ` repeat(${Oe}, ${q}px)`), r.length > 0 && (Bt += Fo), ke > 0 && (Bt += ` repeat(${ke}, ${q}px)`), /* @__PURE__ */ oe("div", {
    role: W,
    "aria-label": xe,
    "aria-labelledby": Pe,
    "aria-description": Ae,
    "aria-describedby": Ce,
    "aria-multiselectable": an ? !0 : void 0,
    "aria-colcount": Ee.length,
    "aria-rowcount": qn,
    tabIndex: -1,
    className: $e(Ba, en && _a, I),
    style: {
      ...j,
      scrollPaddingInlineStart: Gn,
      scrollPaddingInlineEnd: jn,
      scrollPaddingBlockStart: Lt + Oe * q,
      scrollPaddingBlockEnd: ke * q,
      gridTemplateColumns: Wo,
      gridTemplateRows: Bt,
      "--rdg-header-row-height": `${ee}px`,
      ...To
    },
    dir: Ie,
    ref: se,
    onScroll: H,
    onKeyDown: Zo,
    onCopy: Jo,
    onPaste: ei,
    "data-testid": F,
    "data-cy": M,
    children: [
      /* @__PURE__ */ oe(Nn, {
        value: No,
        children: [/* @__PURE__ */ v(Hn, {
          value: Ko,
          children: /* @__PURE__ */ oe(Ln, {
            value: Ao,
            children: [Array.from({ length: rn }, (p, b) => /* @__PURE__ */ v(Fa, {
              rowIdx: b + 1,
              level: -rn + b,
              iterateOverViewportColumnsForRow: wt,
              activeCellIdx: G.rowIdx === He + b ? G.idx : void 0,
              setPosition: tr
            }, b)), /* @__PURE__ */ v(Na, {
              headerRowClass: me,
              rowIdx: Le,
              iterateOverViewportColumnsForRow: wt,
              onColumnResize: Yo,
              onColumnResizeEnd: $o,
              onColumnsReorder: Bo,
              sortColumns: x,
              onSortColumnsChange: _o,
              activeCellIdx: G.rowIdx === on ? G.idx : void 0,
              setPosition: tr,
              shouldFocusGrid: !Ro,
              direction: Ie
            })]
          })
        }), r.length === 0 && Me ? Me : /* @__PURE__ */ oe(it, { children: [
          o == null ? void 0 : o.map((p, b) => {
            const N = Le + 1 + b, $ = on + 1 + b, L = G.rowIdx === $;
            return /* @__PURE__ */ v(lr, {
              "aria-rowindex": N,
              rowIdx: $,
              gridRowStart: N,
              row: p,
              top: Lt + q * b,
              bottom: void 0,
              iterateOverViewportColumnsForRow: wt,
              activeCellIdx: L ? G.idx : void 0,
              isTop: !0,
              setActivePosition: ln,
              isTreeGrid: ut
            }, b);
          }),
          /* @__PURE__ */ v(Fn, {
            value: Xo,
            children: gi()
          }),
          i == null ? void 0 : i.map((p, b) => {
            const N = Te + r.length + b + 1, $ = r.length + b, L = G.rowIdx === $, K = Je > zt ? Z - q * (ke - b) : void 0, ie = K === void 0 ? q * (ke - 1 - b) : void 0;
            return /* @__PURE__ */ v(lr, {
              "aria-rowindex": qn - ke + b + 1,
              rowIdx: $,
              gridRowStart: N,
              row: p,
              top: K,
              bottom: ie,
              iterateOverViewportColumnsForRow: wt,
              activeCellIdx: L ? G.idx : void 0,
              isTop: !1,
              setActivePosition: ln,
              isTreeGrid: ut
            }, b);
          })
        ] })]
      }),
      Qe > -1 && ar(Io, Jr, Ga),
      Ge > -1 && ar(Eo, eo, ja),
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
  var h;
  const { tabIndex: g, childTabIndex: f, onFocus: w } = Rt(o);
  function y() {
    c(e);
  }
  const m = l && s === i.idx;
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: g === -1 ? void 0 : g,
    className: at(i),
    style: {
      ...lt(i),
      cursor: m ? "pointer" : "default"
    },
    onClick: m ? y : void 0,
    onFocus: w,
    children: (!l || m) && ((h = i.renderGroupCell) == null ? void 0 : h.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: f,
      toggleGroup: y
    }))
  }, i.key);
}
var Ja = _e(Za);
const es = "rdg-group-row rdg-7-0-0-beta-60-e74a2be3";
function ts({ className: e, row: t, rowIdx: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, isRowSelected: i, setActivePosition: a, gridRowStart: s, groupBy: l, toggleGroup: c, ...g }) {
  const f = o === -1;
  let w = t.level;
  function y() {
    a({
      rowIdx: n,
      idx: -1
    }, { shouldFocus: !0 });
  }
  return /* @__PURE__ */ v(Jt, {
    value: Q(() => ({
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
      className: $e(Wn, es, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, f && "rdg-row-active", e),
      onMouseDown: y,
      style: { gridRowStart: s },
      ...g,
      children: r(o).map(([m, h], x) => (x === 0 && m.key === "rdg-select-column" && (w += 1), /* @__PURE__ */ v(Ja, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellActive: h,
        column: m,
        row: t,
        groupColumnIndex: w,
        toggleGroup: c,
        isGroupByColumn: l.includes(m.key)
      }, m.key))).toArray()
    })
  });
}
var ns = _e(ts);
function od({ columns: e, rows: t, rowHeight: n, rowKeyGetter: r, onCellKeyDown: o, onCellCopy: i, onCellPaste: a, onRowsChange: s, selectedRows: l, onSelectedRowsChange: c, renderers: g, groupBy: f, rowGrouper: w, expandedGroupIds: y, onExpandedGroupIdsChange: m, groupIdGetter: h, ...x }) {
  var Ae, Ce, Re;
  const u = Et(), d = (g == null ? void 0 : g.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? Qr, T = 1 + (((Ae = x.topSummaryRows) == null ? void 0 : Ae.length) ?? 0), { leftKey: k, rightKey: O } = Mn(x.direction), E = he(xe), C = h ?? rs, { columns: A, groupBy: H } = Q(() => {
    const F = e.toSorted(({ key: D }, { key: W }) => D === "rdg-select-column" ? -1 : W === "rdg-select-column" ? 1 : f.includes(D) ? f.includes(W) ? f.indexOf(D) - f.indexOf(W) : -1 : f.includes(W) ? 1 : 0), M = [];
    for (const [D, W] of F.entries()) f.includes(W.key) && (M.push(W.key), F[D] = {
      ...W,
      frozen: !0,
      renderCell: () => null,
      renderGroupCell: W.renderGroupCell ?? Vi,
      editable: !1
    });
    return {
      columns: F,
      groupBy: M
    };
  }, [e, f]), [Y, _] = Q(() => {
    if (H.length === 0) return [void 0, t.length];
    const F = (M, [D, ...W], U) => {
      let ee = 0;
      const q = {};
      for (const [le, we] of Object.entries(w(M, D))) {
        const [pe, ye] = W.length === 0 ? [we, we.length] : F(we, W, U + ee + 1);
        q[le] = {
          childRows: we,
          childGroups: pe,
          startRowIndex: U + ee
        }, ee += ye + 1;
      }
      return [q, ee];
    };
    return F(t, H, 0);
  }, [
    H,
    w,
    t
  ]), [z, B] = Q(() => {
    const F = /* @__PURE__ */ new Set();
    if (!Y) return [t, W];
    const M = [], D = (U, ee, q) => {
      if (os(U)) {
        M.push(...U);
        return;
      }
      Object.keys(U).forEach((le, we, pe) => {
        const ye = C(le, ee), Me = y.has(ye), { childRows: De, childGroups: Ie, startRowIndex: se } = U[le], be = {
          id: ye,
          parentId: ee,
          groupKey: le,
          isExpanded: Me,
          childRows: De,
          level: q,
          posInSet: we,
          startRowIndex: se,
          setSize: pe.length
        };
        M.push(be), F.add(be), Me && D(Ie, ye, q + 1);
      });
    };
    return D(Y, void 0, 0), [M, W];
    function W(U) {
      return F.has(U);
    }
  }, [
    y,
    Y,
    t,
    C
  ]), R = Q(() => typeof n == "function" ? (F) => B(F) ? n({
    type: "GROUP",
    row: F
  }) : n({
    type: "ROW",
    row: F
  }) : n, [B, n]), S = X((F) => {
    const M = z.indexOf(F);
    for (let D = M - 1; D >= 0; D--) {
      const W = z[D];
      if (B(W) && (!B(F) || F.parentId === W.id)) return [W, D];
    }
  }, [B, z]), P = X((F) => {
    if (B(F)) return F.id;
    if (typeof r == "function") return r(F);
    const M = S(F);
    if (M !== void 0) {
      const { startRowIndex: D, childRows: W } = M[0];
      return D + W.indexOf(F) + 1;
    }
    return z.indexOf(F);
  }, [
    S,
    B,
    r,
    z
  ]), I = Q(() => {
    if (l == null) return null;
    xt(r);
    const F = new Set(l);
    for (const M of z) B(M) && M.childRows.every((D) => l.has(r(D))) && F.add(M.id);
    return F;
  }, [
    B,
    r,
    l,
    z
  ]);
  function j(F) {
    if (!c) return;
    xt(r);
    const M = new Set(l);
    for (const D of z) {
      const W = P(D);
      if (I != null && I.has(W) && !F.has(W)) if (B(D)) for (const U of D.childRows) M.delete(r(U));
      else M.delete(W);
      else if (!(I != null && I.has(W)) && F.has(W)) if (B(D)) for (const U of D.childRows) M.add(r(U));
      else M.add(W);
    }
    c(M);
  }
  function V(F, M) {
    if (o == null || o(F, M), M.isGridDefaultPrevented() || F.mode === "EDIT") return;
    const { column: D, rowIdx: W, setActivePosition: U } = F, ee = (D == null ? void 0 : D.idx) ?? -1, q = z[W];
    if (B(q) && (ee === -1 && (M.key === k && q.isExpanded || M.key === O && !q.isExpanded) && (M.preventDefault(), M.preventGridDefault(), xe(q.id)), ee === -1 && M.key === k && !q.isExpanded && q.level !== 0)) {
      const le = S(q);
      le !== void 0 && (M.preventGridDefault(), U({
        idx: ee,
        rowIdx: le[1]
      }));
    }
  }
  function me({ row: F, column: M }, D) {
    B(F) || i == null || i({
      row: F,
      column: M
    }, D);
  }
  function de({ row: F, column: M }, D) {
    return B(F) ? F : a({
      row: F,
      column: M
    }, D);
  }
  function Ue(F, { indexes: M, column: D }) {
    if (!s) return;
    const W = [...t], U = [];
    for (const ee of M) {
      const q = t.indexOf(z[ee]);
      W[q] = F[ee], U.push(q);
    }
    s(W, {
      indexes: U,
      column: D
    });
  }
  function xe(F) {
    const M = new Set(y);
    M.has(F) ? M.delete(F) : M.add(F), m(M);
  }
  function Pe(F, { row: M, rowClass: D, onCellMouseDown: W, onCellClick: U, onCellDoubleClick: ee, onCellContextMenu: q, onRowChange: le, draggedOverCellIdx: we, activeCellEditor: pe, isRowSelectionDisabled: ye, isTreeGrid: Me, ...De }) {
    if (B(M)) {
      const { startRowIndex: be } = M;
      return /* @__PURE__ */ v(ns, {
        ...De,
        "aria-rowindex": T + be + 1,
        row: M,
        groupBy: H,
        toggleGroup: E
      }, F);
    }
    let Ie = De["aria-rowindex"];
    const se = S(M);
    if (se !== void 0) {
      const { startRowIndex: be, childRows: Xe } = se[0], Ve = Xe.indexOf(M);
      Ie = be + T + Ve + 2;
    }
    return d(F, {
      ...De,
      "aria-rowindex": Ie,
      row: M,
      rowClass: D,
      onCellMouseDown: W,
      onCellClick: U,
      onCellDoubleClick: ee,
      onCellContextMenu: q,
      onRowChange: le,
      draggedOverCellIdx: we,
      activeCellEditor: pe,
      isRowSelectionDisabled: ye,
      isTreeGrid: Me
    });
  }
  return /* @__PURE__ */ v(no, {
    ...x,
    role: "treegrid",
    "aria-rowcount": _ + 1 + (((Ce = x.topSummaryRows) == null ? void 0 : Ce.length) ?? 0) + (((Re = x.bottomSummaryRows) == null ? void 0 : Re.length) ?? 0),
    columns: A,
    rows: z,
    rowHeight: R,
    rowKeyGetter: P,
    onRowsChange: Ue,
    selectedRows: I,
    onSelectedRowsChange: j,
    onCellKeyDown: V,
    onCellCopy: me,
    onCellPaste: a ? de : void 0,
    renderers: {
      ...g,
      renderRow: Pe
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
function id({ row: e, column: t, onRowChange: n, onClose: r }) {
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
const ne = {
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
  "--rdg-color": ne.gray800,
  "--rdg-header-color": ne.gray700,
  "--rdg-border-color": ne.gray400,
  "--rdg-background-color": ne.forcewhite,
  "--rdg-header-background-color": ne.forcewhite,
  "--rdg-row-hover-background-color": ne.forcewhite,
  "--rdg-row-selected-hover-background-color": ne.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": ne.primary400,
  "--rdg-expanded-accent-color": ne.primary400,
  "--rdg-row-selected-color": ne.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": ne.primary500,
  "--rdg-scrollbar-track-background": ne.gray100,
  "--rdg-scrollbar-thumb-hover-background": ne.primary500,
  "--rdg-scrollbar-track-hover-background": ne.gray200,
  "--rdg-checkbox-color": ne.primary500,
  "--rdg-loading-color": ne.primary500
}, cs = ge.div`
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
        background-color: var(--rdg-scrollbar-thumb-hover-background) !important;
    }

    *::-webkit-scrollbar-track:hover {
        background-color: var(--rdg-scrollbar-track-hover-background) !important;
    }

    /* The box holding the grid itself. Every child of this container is a div — the grid box, the
       pager, the loading overlay — and the grid box is always the first of them, so the first div
       is the grid box. */
    > div:first-of-type {
        flex-grow: 1;
        overflow: hidden;
    }

    /* The grid's face, offered to everything inside it — including a detail panel and whatever a
       consumer renders in a cell, which inherit it and can answer it with a declaration of their
       own. The table's own rows take it as an instruction instead, below. */
    .rdg {
        border: none;
        block-size: 100%;
        font-weight: var(--rdg-font-weight);
        line-height: var(--rdg-line-height);
        font-family: var(--rdg-font-family);
    }

    /* Bare form controls a consumer puts in a cell: the grid draws the cell's own edges, so a UA
       border inside one is a second box around the same thing. Unweighted on purpose — anything
       carrying a border of its own keeps it. */
    * {
        border: none;
    }

    /* The TABLE's own text — its header and its data cells, and nothing else. The declarations are
       important here because a table reads as a table only if its rows share one face, whatever a
       UI kit's own typography says inside a cell.
       Deliberately not the universal selector, which is not "the grid" but every node the consumer
       renders in it: a detail row is a panel the consumer laid out rather than a line of the table,
       and it is left out of this so it can wear its own type — it still inherits the grid's from
       .rdg above, and can now answer it. */
    .rdg-header-row,
    .rdg-row:not(.rdg-detail-row) > .rdg-cell {
        font-weight: var(--rdg-font-weight) !important;
        line-height: var(--rdg-line-height) !important;
        font-family: var(--rdg-font-family) !important;
    }

    /* The pager is the library's OWN chrome rather than consumer content, so it wears the grid's
       face and not the UI kit's, whose typography it carries by itself. The consumer's own
       totalLabel node is a sibling of this and keeps its type. */
    .MuiTablePagination-root,
    .MuiTablePagination-root * {
        font-weight: var(--rdg-font-weight) !important;
        line-height: var(--rdg-line-height) !important;
        font-family: var(--rdg-font-family) !important;
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
`, Mt = Ne.createContext({
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
}), ls = "data-grid-hidden-column-visibility", ds = (e) => {
  try {
    const t = localStorage.getItem(e);
    if (!t)
      return null;
    const n = JSON.parse(t);
    return Array.isArray(n) ? n : null;
  } catch {
    return null;
  }
}, us = (e, t) => {
  try {
    localStorage.setItem(e, JSON.stringify(t));
  } catch {
  }
}, fs = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = ls,
  onHiddenColumnsChange: a,
  onReset: s,
  onColumnOrderChange: l,
  reorderAnnouncement: c,
  resetLabel: g
}) => {
  const [f, w] = Ne.useState(0), [y, m] = Ne.useState(
    null
  ), [h, x] = Ne.useState([]), u = X(
    (C) => {
      us(i, C), w((A) => A + 1), x(C);
    },
    [i]
  ), d = JSON.stringify(r ?? []), T = Q(
    () => JSON.parse(d),
    [d]
  );
  Ke(() => {
    u(ds(i) ?? T);
  }, [i, T, u]);
  const k = X(
    (C) => {
      u(C), a == null || a(C);
    },
    [u, a]
  ), O = X(() => {
    k(T), s == null || s();
  }, [k, T, s]), E = Q(
    () => e.filter((C) => !(n != null && n.includes(C.key))),
    [e, n]
  );
  return /* @__PURE__ */ v(
    Mt.Provider,
    {
      value: {
        gridKey: `data-grid-${f}`,
        chooserAnchor: y,
        setChooserAnchor: m,
        columns: E,
        hiddenColumn: h,
        setHiddenColumn: k,
        resetHiddenColumns: O,
        resetLabel: g,
        reorderColumns: l,
        reorderAnnouncement: c,
        enabled: o
      },
      children: t
    }
  );
}, zn = ge(bi)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: var(--rdg-checkbox-color, ${ne.primary500});
    }
`, hs = ge(Ar)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    /* the grab area owns the gesture: no scroll-vs-drag arbitration, no 300ms touch delay */
    touch-action: none;

    /*
     * The row being moved is LIFTED, not faded. The rows reflow live under the pointer, so THIS row
     * is the one travelling — fading it makes the thing the reader is moving the faintest item in
     * the list, which is the payload-drag idiom (the source stays put and a ghost flies) applied
     * where the source does not stay put. A neutral alpha rather than a palette colour because this
     * menu is portalled out of the grid, so the grid's own custom properties do not reach it; a mid
     * grey at low alpha lifts over a light paper and a dark one alike.
     */
    &[data-dragging='true'] {
        position: relative;
        z-index: 1;
        background-color: rgba(128, 128, 128, 0.16);
        box-shadow:
            rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
            rgba(0, 0, 0, 0.14) 0 6px 10px 0,
            rgba(0, 0, 0, 0.12) 0 1px 18px 0;
    }
`, gs = ge.span`
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
`, ms = ge.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`, ws = () => /* @__PURE__ */ v("svg", { width: "10", height: "16", viewBox: "0 0 10 16", "aria-hidden": "true", focusable: "false", children: [3, 8, 13].map((e) => /* @__PURE__ */ oe("g", { children: [
  /* @__PURE__ */ v("circle", { cx: "3", cy: e, r: "1.1", fill: "currentColor" }),
  /* @__PURE__ */ v("circle", { cx: "7", cy: e, r: "1.1", fill: "currentColor" })
] }, e)) }), ur = (e, t, n) => {
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}, ps = (e, t) => e.length === t.length && e.every((n, r) => n === t[r]), ys = (e, t, n) => {
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
}, ad = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = ct(Mt), n = Ne.useRef(null), r = X(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ v("div", { ref: n, children: /* @__PURE__ */ v(e, { onClick: r }) });
}, bs = () => {
  const {
    columns: e,
    hiddenColumn: t,
    setHiddenColumn: n,
    chooserAnchor: r,
    setChooserAnchor: o,
    resetHiddenColumns: i,
    resetLabel: a,
    reorderColumns: s,
    reorderAnnouncement: l
  } = ct(Mt), [c, g] = ae(null), [f, w] = ae(null), [y, m] = ae(""), h = Q(() => e.map((R) => R.key), [e]), x = c ?? h, u = Q(() => new Map(e.map((R) => [R.key, R])), [e]), d = fe(/* @__PURE__ */ new Map()), T = fe([]), k = fe(null), O = fe(null);
  Ke(() => {
    g((R) => R && ps(R, h) ? null : R);
  }, [h]);
  const E = X(() => {
    o(null), g(null), m("");
  }, [o]), C = X(() => {
    i(), o(null), g(null);
  }, [i, o]), A = X(
    (R) => () => {
      const S = t.indexOf(R);
      n(
        S === -1 ? [...t, R] : t.filter((P) => P !== R)
      );
    },
    [t, n]
  ), H = X(
    (R, S) => {
      var j;
      const P = String(((j = u.get(R)) == null ? void 0 : j.name) ?? R), I = S.indexOf(R) + 1;
      m(
        l ? l(P, I, S.length) : `${P} ${I}/${S.length}`
      );
    },
    [u, l]
  ), Y = X(
    (R) => (S) => {
      !s || S.button !== 0 || (S.preventDefault(), S.stopPropagation(), S.currentTarget.setPointerCapture(S.pointerId), T.current = x, k.current = {
        key: R,
        moved: !1,
        pointerId: S.pointerId,
        grip: S.currentTarget
      }, w(R));
    },
    [x, s]
  ), _ = X(() => {
    var S;
    const R = k.current;
    if (R && (k.current = null, w(null), R.moved)) {
      s == null || s(T.current), H(R.key, T.current), (S = O.current) == null || S.call(O);
      const P = (j) => j.stopPropagation(), I = () => {
        window.removeEventListener("click", P, !0), window.removeEventListener("pointerdown", I, !0), O.current = null;
      };
      O.current = I, window.addEventListener("click", P, !0), window.addEventListener("pointerdown", I, !0);
    }
  }, [H, s]);
  Ke(() => () => {
    var R;
    return (R = O.current) == null ? void 0 : R.call(O);
  }, []), Ke(() => {
    if (!f)
      return;
    const R = (P) => {
      const I = k.current;
      if (!I || P.pointerId !== I.pointerId)
        return;
      if (I.grip.isConnected && !I.grip.hasPointerCapture(I.pointerId))
        try {
          I.grip.setPointerCapture(I.pointerId);
        } catch {
        }
      const j = T.current.indexOf(I.key), V = ys(P.clientY, T.current, d.current);
      j === -1 || V === -1 || V === j || (I.moved = !0, T.current = ur(T.current, j, V), g(T.current));
    }, S = (P) => {
      var I;
      P.pointerId === ((I = k.current) == null ? void 0 : I.pointerId) && _();
    };
    return window.addEventListener("pointermove", R), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S), () => {
      window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S);
    };
  }, [f, _]);
  const z = X(
    (R) => (S) => {
      if (!s || !S.altKey)
        return;
      const P = S.key === "ArrowUp" ? -1 : S.key === "ArrowDown" ? 1 : 0;
      if (!P)
        return;
      S.preventDefault(), S.stopPropagation();
      const I = x.indexOf(R), j = I + P;
      if (I === -1 || j < 0 || j >= x.length)
        return;
      const V = ur(x, I, j);
      T.current = V, g(V), s(V), H(R, V);
    },
    [H, x, s]
  ), B = X(
    (R) => (S) => {
      S ? d.current.set(R, S) : d.current.delete(R);
    },
    []
  );
  return /* @__PURE__ */ oe(it, { children: [
    /* @__PURE__ */ oe(
      pi,
      {
        id: "column-visibility-menu",
        anchorReference: "anchorPosition",
        anchorPosition: r ?? void 0,
        transformOrigin: { vertical: "top", horizontal: "right" },
        open: r !== null,
        onClose: E,
        children: [
          x.map((R) => {
            const S = u.get(R);
            return S ? /* @__PURE__ */ oe(
              hs,
              {
                ref: B(R),
                "data-dragging": f === R,
                "aria-keyshortcuts": s ? "Alt+ArrowUp Alt+ArrowDown" : void 0,
                onKeyDown: z(R),
                onClick: A(R),
                children: [
                  /* @__PURE__ */ v(zn, { checked: !t.includes(R) }),
                  S.name,
                  s && /* @__PURE__ */ v(
                    gs,
                    {
                      "aria-hidden": "true",
                      onPointerDown: Y(R),
                      onClick: (P) => P.stopPropagation(),
                      children: /* @__PURE__ */ v(ws, {})
                    }
                  )
                ]
              },
              R
            ) : null;
          }),
          a && /* @__PURE__ */ v(yi, {}),
          a && /* @__PURE__ */ v(Ar, { onClick: C, children: a })
        ]
      }
    ),
    r !== null && /* @__PURE__ */ v(ms, { role: "status", "aria-live": "polite", children: y })
  ] });
};
var ot = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(ot || {}), St = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(St || {});
const vs = new Intl.Collator(void 0, { numeric: !1 });
function xs(e, t, n, r) {
  return (o, i) => {
    const a = r ? r(o) : o[e], s = r ? r(i) : i[e];
    try {
      if (n)
        return n(a, s, o, i);
      if (t === ot.NUMBER) {
        const l = Number(a), c = Number(s);
        return isNaN(l) || isNaN(c) ? isNaN(l) ? 1 : -1 : l - c;
      } else if (t === ot.DATE) {
        const l = new Date(a).getTime(), c = new Date(s).getTime();
        return isNaN(l) || isNaN(c) ? isNaN(l) ? 1 : -1 : l - c;
      }
      return t === ot.STRING || !t ? vs.compare(String(a), String(s)) : t === ot.BOOLEAN ? +!!a - +!!s : 0;
    } catch (l) {
      return console.error("Error in sorting:", l), 0;
    }
  };
}
const Cs = ({
  columns: e,
  rows: t,
  defaultSortColumns: n,
  sortColumns: r,
  enabled: o = !0
}) => {
  const [i, a] = ae(n ?? []), s = r ?? i, l = s.map((w) => `${String(w.columnKey)}:${w.direction}`).join(), c = Q(() => s, [l]), g = Q(() => {
    if (!o || c.length === 0) return t;
    const w = c.map((y) => {
      const m = e.find((h) => h.key === y.columnKey);
      return {
        compare: xs(
          y.columnKey,
          m == null ? void 0 : m.type,
          m == null ? void 0 : m.sortComparator,
          m == null ? void 0 : m.getColumnValue
        ),
        descending: y.direction === "DESC"
      };
    });
    return [...t].sort((y, m) => {
      for (const h of w) {
        const x = h.compare(y, m);
        if (x !== 0)
          return h.descending ? -x : x;
      }
      return 0;
    });
  }, [t, c, o, e]), f = X((w) => {
    w.length !== 0 ? a(w) : a((y) => y.length === 1 ? [
      {
        columnKey: y[0].columnKey,
        direction: y[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : y);
  }, []);
  return {
    sortedRows: g,
    sortColumns: i,
    setSortedColumns: f
  };
}, Dt = 40, Ds = 200, ks = "rdg-row-expanded", Ts = "rdg-detail-row", ro = "__rdgDetailParent", Ss = (e) => ({ id: `rdg-detail:${e.id}`, [ro]: e }), Yn = (e) => e[ro], Kt = (e) => Yn(e) !== void 0, Ps = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, Ss(r)] : [r]);
}, Is = ge.button`
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
`, Es = () => /* @__PURE__ */ v("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ v("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), oo = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ v(
    Is,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), io(t, e.id);
      },
      children: /* @__PURE__ */ v(Es, {})
    }
  );
}, io = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, Rs = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', Ms = (e, t, n, r = []) => Kt(e) || t === Ns || t === ao || r.includes(t) ? !1 : !(n instanceof Element && n.closest(Rs)), fr = ge.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, Os = ge.span`
    display: inline-block;
    flex: 0 0 ${Dt - 16}px;
`, Ns = _r, ao = "rdg-expander-column", As = (e) => ({
  key: ao,
  name: "",
  frozen: !0,
  width: Dt,
  minWidth: Dt,
  maxWidth: Dt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ v(oo, { row: t, expandable: e })
}), so = (e) => e.frozen === !0 || e.frozen === "start", Sn = (e) => e.frozen === "end" || !!e.frozenRight, hn = (e) => so(e) || Sn(e), Fs = (e, t) => {
  const n = [
    ...e.filter(so),
    ...e.filter((s) => !hn(s)),
    ...e.filter(Sn)
  ], r = n.findIndex((s) => !hn(s));
  if (r === -1)
    return e;
  const o = n[r], i = n.findIndex(Sn), a = (i === -1 ? n.length : i) - r;
  return e.map((s) => s !== o ? !hn(s) || !s.renderCell ? s : {
    ...s,
    renderCell: (l) => {
      var c;
      return Kt(l.row) ? null : (c = s.renderCell) == null ? void 0 : c.call(s, l);
    }
  } : {
    ...s,
    colSpan: (l) => {
      var c;
      return l.type === "ROW" && Kt(l.row) ? a : (c = s.colSpan) == null ? void 0 : c.call(s, l);
    },
    renderCell: (l) => {
      var g;
      const c = Yn(l.row);
      return c ? t(c) : ((g = s.renderCell) == null ? void 0 : g.call(s, l)) ?? null;
    }
  });
}, Ls = (e, t, n) => (r) => {
  const o = Yn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, Hs = (e, t = []) => Kt(e) ? Ts : t.includes(e.id) ? ks : "", co = ge(xi)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--rdg-color, ${ne.gray800});
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px var(--rdg-border-color, ${ne.gray400});
    border-radius: 4px;
    color: var(--rdg-color, ${ne.gray800});
  }

  & label,
  & label.Mui-focused {
    color: var(--rdg-color, ${ne.gray800});
  }

  fieldset {
    display: none;
  }

}
`, $n = Ne.createContext({
  filters: {},
  setFilters: () => {
  }
}), Ws = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Ne.useState({});
  return /* @__PURE__ */ v(
    $n.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, gn = (e) => e.stopPropagation(), zs = ({ options: e, renderInput: t, ...n }) => {
  const r = Q(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ v(
    Ci,
    {
      onChange: (o, i) => {
        var a;
        return (a = n.onChange) == null ? void 0 : a.call(n, i == null ? void 0 : i.value);
      },
      value: r ?? null,
      options: e,
      onClick: gn,
      onKeyDown: gn,
      getOptionLabel: (o) => o.label,
      renderInput: t || ((o) => /* @__PURE__ */ v(
        co,
        {
          ...o,
          onClick: gn,
          label: n.label,
          error: n.error,
          helperText: n.helperText
        }
      ))
    }
  );
}, Ys = ge(vi)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Vt = (e) => e.stopPropagation(), mn = ({ children: e, ...t }) => /* @__PURE__ */ oe(Ys, { children: [
  Ur(t),
  e
] }), $s = ({
  col: e,
  ...t
}) => {
  const { filters: n, setFilters: r } = ct($n), o = n[e.key], i = X(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e.key, n, r]
  );
  return e.filterEnabled ? e.filterType === St.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ v(mn, { ...t, children: /* @__PURE__ */ v(
    zs,
    {
      options: e.filterOptions ?? [],
      onChange: i,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ v(mn, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (a) => i(a.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: Vt,
    onKeyDown: Vt
  }) : /* @__PURE__ */ v(
    co,
    {
      autoComplete: "off",
      onClick: Vt,
      onKeyDown: Vt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ v(mn, { ...t });
}, Bs = (e) => (t) => /* @__PURE__ */ v($s, { col: e, ...t }), _s = {
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
}, Us = (e, t, n) => {
  let r;
  const o = _s[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function wn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Vs = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, js = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ks = {
  date: wn({
    formats: Vs,
    defaultWidth: "full"
  }),
  time: wn({
    formats: Gs,
    defaultWidth: "full"
  }),
  dateTime: wn({
    formats: js,
    defaultWidth: "full"
  })
}, Xs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, qs = (e, t, n, r) => Xs[e];
function bt(e) {
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
const Qs = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Zs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Js = {
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
}, ec = {
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
}, tc = {
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
}, nc = {
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
}, rc = (e, t) => {
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
}, oc = {
  ordinalNumber: rc,
  era: bt({
    values: Qs,
    defaultWidth: "wide"
  }),
  quarter: bt({
    values: Zs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bt({
    values: Js,
    defaultWidth: "wide"
  }),
  day: bt({
    values: ec,
    defaultWidth: "wide"
  }),
  dayPeriod: bt({
    values: tc,
    defaultWidth: "wide",
    formattingValues: nc,
    defaultFormattingWidth: "wide"
  })
};
function vt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? ac(s, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      ic(s, (f) => f.test(a))
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
function ic(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function ac(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function sc(e) {
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
const cc = /^(\d+)(th|st|nd|rd)?/i, lc = /\d+/i, dc = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, uc = {
  any: [/^b/i, /^(a|c)/i]
}, fc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gc = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, mc = {
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
}, wc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, bc = {
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
}, vc = {
  ordinalNumber: sc({
    matchPattern: cc,
    parsePattern: lc,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: vt({
    matchPatterns: dc,
    defaultMatchWidth: "wide",
    parsePatterns: uc,
    defaultParseWidth: "any"
  }),
  quarter: vt({
    matchPatterns: fc,
    defaultMatchWidth: "wide",
    parsePatterns: hc,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: vt({
    matchPatterns: gc,
    defaultMatchWidth: "wide",
    parsePatterns: mc,
    defaultParseWidth: "any"
  }),
  day: vt({
    matchPatterns: wc,
    defaultMatchWidth: "wide",
    parsePatterns: pc,
    defaultParseWidth: "any"
  }),
  dayPeriod: vt({
    matchPatterns: yc,
    defaultMatchWidth: "any",
    parsePatterns: bc,
    defaultParseWidth: "any"
  })
}, xc = {
  code: "en-US",
  formatDistance: Us,
  formatLong: Ks,
  formatRelative: qs,
  localize: oc,
  match: vc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let Cc = {};
function Ot() {
  return Cc;
}
const lo = 6048e5, Dc = 864e5, hr = Symbol.for("constructDateFrom");
function Be(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && hr in e ? e[hr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Se(e, t) {
  return Be(t || e, e);
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
function kc(e, ...t) {
  const n = Be.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function mr(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Tc(e, t, n) {
  const [r, o] = kc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = mr(r), a = mr(o), s = +i - gr(i), l = +a - gr(a);
  return Math.round((s - l) / Dc);
}
function Sc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Pc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return Tc(n, Sc(n)) + 1;
}
function Pt(e, t) {
  var s, l, c, g;
  const n = Ot(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((g = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : g.weekStartsOn) ?? 0, o = Se(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Xt(e, t) {
  return Pt(e, { ...t, weekStartsOn: 1 });
}
function uo(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Be(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Xt(o), a = Be(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Xt(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function Ic(e, t) {
  const n = uo(e, t), r = Be(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Xt(r);
}
function Ec(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +Xt(n) - +Ic(n);
  return Math.round(r / lo) + 1;
}
function fo(e, t) {
  var g, f, w, y;
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ot(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (g = t == null ? void 0 : t.locale) == null ? void 0 : g.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((y = (w = o.locale) == null ? void 0 : w.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, a = Be((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = Pt(a, t), l = Be((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
  const c = Pt(l, t);
  return +n >= +s ? r + 1 : +n >= +c ? r : r - 1;
}
function Rc(e, t) {
  var s, l, c, g;
  const n = Ot(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((g = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = fo(e, t), i = Be((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), Pt(i, t);
}
function Mc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +Pt(n, t) - +Rc(n, t);
  return Math.round(r / lo) + 1;
}
function J(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const ze = {
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
}, nt = {
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
    return ze.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = fo(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return J(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : J(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = uo(e);
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
        return ze.M(e, t);
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
    const o = Mc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : J(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ec(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : J(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : ze.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Pc(e);
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
    switch (r === 12 ? o = nt.noon : r === 0 ? o = nt.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = nt.evening : r >= 12 ? o = nt.afternoon : r >= 4 ? o = nt.morning : o = nt.night, t) {
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
    return ze.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : ze.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ze.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : ze.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return ze.S(e, t);
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
        return je(r);
      case "XXXXX":
      case "XXX":
      default:
        return je(r, ":");
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
        return je(r);
      case "xxxxx":
      case "xxx":
      default:
        return je(r, ":");
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
        return "GMT" + je(r, ":");
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
        return "GMT" + je(r, ":");
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
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : je(e, t);
}
function je(e, t = "") {
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
}, Oc = (e, t) => {
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
  return i.replace("{{date}}", br(r, t)).replace("{{time}}", ho(o, t));
}, Nc = {
  p: ho,
  P: Oc
}, Ac = /^D+$/, Fc = /^Y+$/, Lc = ["D", "DD", "YY", "YYYY"];
function Hc(e) {
  return Ac.test(e);
}
function Wc(e) {
  return Fc.test(e);
}
function zc(e, t, n) {
  const r = Yc(e, t, n);
  if (console.warn(r), Lc.includes(e)) throw new RangeError(r);
}
function Yc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function go(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function mo(e) {
  return !(!go(e) && typeof e != "number" || isNaN(+Se(e)));
}
const $c = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, _c = /^'([^]*?)'?$/, Uc = /''/g, Vc = /[a-zA-Z]/;
function Gc(e, t, n) {
  var g, f, w, y, m, h, x, u;
  const r = Ot(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? xc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((y = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((u = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : u.weekStartsOn) ?? 0, s = Se(e, n == null ? void 0 : n.in);
  if (!mo(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Bc).map((d) => {
    const T = d[0];
    if (T === "p" || T === "P") {
      const k = Nc[T];
      return k(d, o.formatLong);
    }
    return d;
  }).join("").match($c).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const T = d[0];
    if (T === "'")
      return { isToken: !1, value: jc(d) };
    if (wr[T])
      return { isToken: !0, value: d };
    if (T.match(Vc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + T + "`"
      );
    return { isToken: !1, value: d };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return l.map((d) => {
    if (!d.isToken) return d.value;
    const T = d.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Wc(T) || !(n != null && n.useAdditionalDayOfYearTokens) && Hc(T)) && zc(T, t, String(e));
    const k = wr[T[0]];
    return k(s, T, o.localize, c);
  }).join("");
}
function jc(e) {
  const t = e.match(_c);
  return t ? t[1].replace(Uc, "'") : e;
}
function Kc() {
  return Object.assign({}, Ot());
}
function vr(e, t, n) {
  const r = Kc(), o = Qc(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Xc(o, t) : qc(o, t);
}
function Xc(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function qc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function Qc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Zc(e, t) {
  const n = rl(t);
  return "formatToParts" in n ? el(n, e) : tl(n, e);
}
const Jc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function el(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = Jc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function tl(e, t) {
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
const pn = {}, xr = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), nl = xr === "06/25/2014, 00:00:00" || xr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function rl(e) {
  return pn[e] || (pn[e] = nl ? new Intl.DateTimeFormat("en-US", {
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
  })), pn[e];
}
function wo(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const Cr = 36e5, ol = 6e4, yn = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Bn(e, t, n) {
  if (!e)
    return 0;
  let r = yn.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, i;
  if (r = yn.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), Dr(o) ? -(o * Cr) : NaN;
  if (r = yn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return Dr(o, a) ? (i = Math.abs(o) * Cr + a * ol, r[1] === "+" ? -i : i) : NaN;
  }
  if (sl(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : il(t), s = Pn(a, e);
    return -(n ? s : al(t, s, e));
  }
  return NaN;
}
function il(e) {
  return wo(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Pn(e, t) {
  const n = Zc(e, t), r = wo(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function al(e, t, n) {
  let o = e.getTime() - t;
  const i = Pn(new Date(o), n);
  if (t === i)
    return t;
  o -= i - t;
  const a = Pn(new Date(o), n);
  return i === a ? i : Math.max(i, a);
}
function Dr(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const kr = {};
function sl(e) {
  if (kr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), kr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const cl = 60 * 1e3, ll = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = bn(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Tr(r);
      case "XXXX":
      case "XX":
        return rt(r);
      case "XXXXX":
      case "XXX":
      default:
        return rt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = bn(n.timeZone, e);
    switch (t) {
      case "x":
        return Tr(r);
      case "xxxx":
      case "xx":
        return rt(r);
      case "xxxxx":
      case "xxx":
      default:
        return rt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = bn(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + dl(r, ":");
      case "OOOO":
      default:
        return "GMT" + rt(r, ":");
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
function bn(e, t) {
  const n = e ? Bn(e, t, !0) / cl : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function qt(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function rt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = qt(Math.floor(r / 60), 2), i = qt(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function Tr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + qt(Math.abs(e) / 60, 2) : rt(e, t);
}
function dl(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + qt(i, 2);
}
function Sr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const ul = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, vn = 36e5, Pr = 6e4, fl = 2, ue = {
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
  timeZone: ul
};
function po(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? fl : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = hl(e), { year: o, restDateString: i } = gl(r.date, n), a = ml(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let l = 0, c;
    if (r.time && (l = wl(r.time), l === null || isNaN(l)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (c = Bn(r.timeZone || t.timeZone, new Date(s + l)), isNaN(c))
        return /* @__PURE__ */ new Date(NaN);
    } else
      c = Sr(new Date(s + l)), c = Sr(new Date(s + l + c));
    return new Date(s + l + c);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function hl(e) {
  const t = {};
  let n = ue.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ue.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ue.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function gl(e, t) {
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
function ml(e, t) {
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
    return bl(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return Er(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ue.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, Rr(o) ? Ir(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = ue.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return Rr(o, a) ? Ir(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function wl(e) {
  let t, n, r = ue.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), xn(t) ? t % 24 * vn : NaN;
  if (r = ue.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), xn(t, n) ? t % 24 * vn + n * Pr : NaN;
  if (r = ue.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return xn(t, n, o) ? t % 24 * vn + n * Pr + o * 1e3 : NaN;
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
const pl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function yo(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Er(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = yo(e);
    if (r && n > yl[t] || !r && n > pl[t])
      return !1;
  }
  return !0;
}
function bl(e, t) {
  if (t < 1)
    return !1;
  const n = yo(e);
  return !(n && t > 366 || !n && t > 365);
}
function Rr(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function xn(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const vl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function xl(e, t, n = {}) {
  t = String(t);
  const r = t.match(vl);
  if (r) {
    const o = po(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), l = i[s - 1] === "'", c = i.replace(a, "'" + ll[a[0]](o, a, n) + "'");
      return l ? c.substring(0, s - 1) + c.substring(s + 1) : c;
    }, t);
  }
  return Gc(e, t, n);
}
function Cl(e, t, n) {
  e = po(e, n);
  const r = Bn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function Dl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, xl(Cl(e, t, { timeZone: r.timeZone }), n, r);
}
var bo = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(bo || {});
const kl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !go(e) && typeof e == "string" ? new Date(e) : e;
  return mo(r) ? Dl(e, n, t) : "--";
}, Mr = (e) => e.trim().toLowerCase(), Tl = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: l, hiddenColumn: c } = ct(Mt), g = X((f) => {
    const w = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === ot.DATE)
        return ({ row: h }) => {
          var x, u;
          return kl(
            h[f.key],
            ((x = f.dateOptions) == null ? void 0 : x.formatDate) ?? bo.DATE_WITH_TIME,
            (u = f.dateOptions) == null ? void 0 : u.timeZone
          );
        };
    }, y = () => f.renderHeaderCell ? f.renderHeaderCell : Bs(f), m = {
      ...f,
      renderCell: w(),
      renderHeaderCell: y()
    };
    return f.frozenRight && (m.frozen = "end"), m;
  }, []);
  return Q(() => {
    const f = [];
    if (t && !n && f.push(As(t)), n) {
      const w = (r ?? []).map((k) => k.id), y = new Set(o ?? []), m = new Set(w), h = w.filter((k) => y.has(k)).length, x = w.length > 0 && h === w.length, u = h > 0 && !x, d = (k) => {
        const O = (o ?? []).filter((E) => !m.has(E));
        return k ? [...O, ...w] : O;
      }, T = t ? 50 + Dt : 50;
      f.push({
        ...yt,
        width: T,
        minWidth: T,
        maxWidth: T,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ oe(fr, { children: [
          t && /* @__PURE__ */ v(Os, { "aria-hidden": !0 }),
          a ? a({
            checked: x,
            indeterminate: u,
            "aria-label": s,
            onChange: (k) => i == null ? void 0 : i(d(k))
          }) : /* @__PURE__ */ v(
            zn,
            {
              checked: x,
              indeterminate: u,
              slotProps: { input: { "aria-label": s } },
              onChange: (k, O) => i == null ? void 0 : i(d(O))
            }
          )
        ] }),
        renderCell: t ? (k) => {
          var O;
          return /* @__PURE__ */ oe(fr, { children: [
            /* @__PURE__ */ v(oo, { row: k.row, expandable: t }),
            (O = yt.renderCell) == null ? void 0 : O.call(yt, k)
          ] });
        } : yt.renderCell
      });
    }
    return f.push(...e.map((w) => g(w))), l && c ? f.filter((w) => !c.includes(w.key)) : f;
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
var Sl = {
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
function Pl(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return Sl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Cn(e) {
  var t = Pl(e);
  return "".concat(t.value).concat(t.unit);
}
var Il = function(e, t, n) {
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
}, Qt = function() {
  return Qt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Qt.apply(this, arguments);
}, El = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, Rl = Il("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Ml(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, l = s === void 0 ? {} : s, c = e.size, g = c === void 0 ? 15 : c, f = e.margin, w = f === void 0 ? 2 : f, y = El(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), m = Qt({ display: "inherit" }, l), h = function(x) {
    return {
      backgroundColor: o,
      width: Cn(g),
      height: Cn(g),
      margin: Cn(w),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(Rl, " ").concat(0.75 / a, "s ").concat(x * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? _t.createElement(
    "span",
    Qt({ style: m }, y),
    _t.createElement("span", { style: h(1) }),
    _t.createElement("span", { style: h(2) }),
    _t.createElement("span", { style: h(3) })
  ) : null;
}
const Ol = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === St.TEXT && typeof n == "string" && typeof r == "string" ? Mr(n).includes(Mr(r)) : t === St.AUTOCOMPLETE ? n === r : !1, Nl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = ct($n);
  return Q(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((l) => l.key === i);
      return s ? Ol({
        comparator: s.filterComparator,
        filterType: s.filterType ?? St.TEXT,
        // `getColumnValue` says where a column's value lives, for filtering as for
        // sorting: a computed column — one whose cell is derived rather than read off
        // the row — would otherwise be filtered against whatever its key happens to
        // name, often nothing, while it sorts by what the reader can see.
        value: s.getColumnValue ? s.getColumnValue(o) : o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Al = ge.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, Fl = ge.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, Ll = [10, 25, 50, 100], Hl = Ne.memo(
  ({
    currentPage: e,
    setCurrentPage: t,
    setPageSize: n,
    pageSize: r,
    totalCount: o,
    labels: i,
    totalLabel: a,
    rowsPerPageOptions: s = Ll
  }) => {
    const l = X(
      (f, w) => {
        t(w);
      },
      [t]
    ), c = X(
      (f) => {
        n(parseInt(f.target.value, 10)), t(0);
      },
      [n, t]
    ), g = Q(
      () => s.includes(r) ? s : [...s, r].sort((f, w) => f - w),
      [s, r]
    );
    return /* @__PURE__ */ oe(Al, { children: [
      a ? /* @__PURE__ */ v(Fl, { children: a(o) }) : null,
      /* @__PURE__ */ v(
        Di,
        {
          labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ v("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
          labelDisplayedRows: ({ from: f, to: w, count: y }) => `${f}-${w} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${y}`,
          component: "div",
          count: o,
          page: e,
          onPageChange: l,
          rowsPerPage: r,
          rowsPerPageOptions: g,
          onRowsPerPageChange: c
        }
      )
    ] });
  }
);
var Wl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(Wl || {});
const zl = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = ae(0), [l, c] = ae(e), g = n !== void 0, f = o !== void 0, w = g ? n : a, y = f ? o : l, m = X(
    (d) => {
      g || s(d), r == null || r(d);
    },
    [g, r]
  ), h = X(
    (d) => {
      f || c(d), i == null || i(d);
    },
    [f, i]
  ), x = X(() => {
    m(0), h(e);
  }, [m, h, e]), u = fe(y);
  return Ke(() => {
    u.current !== y && (u.current = y, m(0));
  }, [y]), {
    currentPage: w,
    pageSize: y,
    defaultPageSize: e,
    setCurrentPage: m,
    setPageSize: h,
    resetPagination: x
  };
}, Or = 50, Yl = ge.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, $l = ge.div`
    background-color: ${({ $color: e }) => e};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, Bl = Ne.memo(
  ({ checked: e, indeterminate: t, onChange: n, "aria-label": r }) => {
    const o = X(
      (i, a) => {
        n(a, i.nativeEvent.shiftKey);
      },
      [n]
    );
    return /* @__PURE__ */ v(
      zn,
      {
        checked: e,
        indeterminate: t,
        slotProps: { input: { "aria-label": r } },
        onChange: o
      }
    );
  }
), _l = (e) => /* @__PURE__ */ v(Bl, { ...e }), Ul = "Select all rows", Vl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  sortRowsLocally: s,
  selectable: l = !0,
  selectedRows: c,
  onSelectedRowsChange: g,
  selectAllLabel: f = Ul,
  noDataMessage: w,
  filters: y,
  setFilters: m,
  pagination: h,
  renderers: x,
  expandable: u,
  rowGestures: d,
  rowHeight: T,
  rowClass: k,
  onCellClick: O,
  onColumnResize: E,
  columnWidths: C,
  onColumnWidthsChange: A,
  ...H
}) => {
  var be, Xe, Ve;
  const { gridKey: Y } = ct(Mt), { pageSize: _, currentPage: z, setCurrentPage: B, setPageSize: R } = zl(
    h == null ? void 0 : h.defaultPageSize,
    h == null ? void 0 : h.control
  ), S = (x == null ? void 0 : x.renderCheckbox) ?? _l, P = { ...ss, ...e ?? {} }, I = P["--rdg-loading-color"] ?? ne.primary500, j = Tl({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: l && !!g,
    selectableRows: n,
    selectedRows: c,
    onSelectedRowsChange: g,
    renderCheckbox: S,
    selectAllLabel: f
  }), V = Q(
    () => j.map((Z) => Z.key).sort().join("|"),
    [j]
  ), me = Q(
    () => j.some((Z) => Z.filterEnabled),
    [j]
  ), de = Q(
    () => (h == null ? void 0 : h.enabled) && !h.remotePagination,
    [h]
  ), Ue = Q(() => !m, [m]), xe = Nl({
    columns: j,
    rows: n,
    enabled: Ue
  }), Pe = Q(() => !i, [i]), Ae = s ?? Pe, {
    sortedRows: Ce,
    sortColumns: Re,
    setSortedColumns: F
  } = Cs({
    columns: j,
    rows: xe,
    defaultSortColumns: a,
    sortColumns: Pe ? void 0 : o,
    enabled: Ae
  }), M = Q(() => {
    if (!de)
      return z;
    const Z = Math.max(0, Math.ceil(xe.length / _) - 1);
    return Math.min(z, Z);
  }, [de, z, _, xe.length]);
  Ke(() => {
    M !== z && B(M);
  }, [M, z, B]);
  const D = Q(() => de ? Ce.slice(M * _, (M + 1) * _) : Ce, [Ce, de, M, _]), W = Q(
    () => u ? Ps(D, u.expandedIds) : D,
    [u, D]
  ), U = Q(
    () => u ? Fs(j, u.renderDetail) : j,
    [u, j]
  ), ee = X(
    (Z, te) => E == null ? void 0 : E(Z.key, te),
    [E]
  ), q = fe(V);
  st(() => {
    if (q.current === V || (q.current = V, !C || !A))
      return;
    const Z = new Map([...C].filter(([, te]) => te.type === "resized"));
    Z.size !== C.size && A(Z);
  }, [V, C, A]);
  const { renderRow: le, ...we } = x ?? {}, pe = fe(void 0), ye = Q(() => {
    if (le)
      return (Z, te) => {
        var dt;
        const { iterateOverViewportColumnsForRow: ce } = te;
        return ((dt = pe.current) == null ? void 0 : dt.iterate) !== ce && (pe.current = {
          iterate: ce,
          columns: [...ce(void 0)].map(([Nt]) => Nt)
        }), le(Z, {
          ...te,
          viewportColumns: pe.current.columns
        });
      };
  }, [le]), Me = X(
    (Z, te) => {
      const ce = [
        Hs(Z, u == null ? void 0 : u.expandedIds),
        te === 0 ? "first-row" : "",
        te === W.length - 1 ? "last-row" : ""
      ];
      return [k == null ? void 0 : k(Z, te), ...ce].filter(Boolean).join(" ");
    },
    [W, u == null ? void 0 : u.expandedIds, k]
  ), De = X(
    (Z) => {
      d != null && d.onClick ? d.onClick(Z) : u && io(u, Z.id);
    },
    [d, u]
  ), Ie = X(
    (Z, te) => {
      if (O == null || O(Z, te), te.isGridDefaultPrevented() || !u && !(d != null && d.onClick))
        return;
      const ce = window.getSelection();
      te.detail <= 1 && ce && !ce.isCollapsed && te.target instanceof Node && ce.containsNode(te.target, !0) || Ms(
        Z.row,
        Z.column.key,
        te.target,
        d == null ? void 0 : d.excludedColumns
      ) && De(Z.row);
    },
    [O, u, d, De]
  ), se = !(h != null && h.remotePagination);
  return Ke(() => {
    if (!se)
      return;
    const Z = new Set(n.map((ce) => ce.id)), te = c == null ? void 0 : c.filter((ce) => Z.has(ce));
    (te == null ? void 0 : te.length) !== (c == null ? void 0 : c.length) && (g == null || g(te ?? []));
  }, [n, c, se, g]), /* @__PURE__ */ oe(cs, { $pagination: !!(h != null && h.enabled), children: [
    /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v(
      no,
      {
        selectedRows: c ? new Set(c) : void 0,
        onSelectedRowsChange: (Z) => {
          g == null || g(Array.from(Z));
        },
        rowKeyGetter: (Z) => Z.id,
        rows: W,
        onSortColumnsChange: Pe ? F : i,
        sortColumns: Pe ? Re : o,
        columns: U,
        rowClass: Me,
        headerRowHeight: me ? 70 : void 0,
        onCellClick: Ie,
        onColumnResize: E ? ee : void 0,
        columnWidths: C,
        onColumnWidthsChange: A,
        ...H,
        rowHeight: u ? Ls(
          T,
          Or,
          u.detailHeight ?? Ds
        ) : T ?? Or,
        renderers: {
          renderCheckbox: S,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...w != null && !t ? {
            noRowsFallback: /* @__PURE__ */ v("div", { className: "rdg-no-data", children: w })
          } : {},
          ...we,
          renderRow: ye
        },
        style: P
      },
      `${Y}:${V}`
    ) }),
    h != null && h.enabled ? /* @__PURE__ */ v(
      Hl,
      {
        ...(h == null ? void 0 : h.remotePagination) ?? {
          currentPage: M,
          setCurrentPage: B,
          pageSize: _,
          setPageSize: R,
          totalCount: xe.length
        },
        labels: h.labels ?? ((be = h.remotePagination) == null ? void 0 : be.labels),
        totalLabel: h.totalLabel ?? ((Xe = h.remotePagination) == null ? void 0 : Xe.totalLabel),
        rowsPerPageOptions: h.rowsPerPageOptions ?? ((Ve = h.remotePagination) == null ? void 0 : Ve.rowsPerPageOptions)
      }
    ) : null,
    t ? /* @__PURE__ */ oe(Yl, { children: [
      /* @__PURE__ */ v($l, { $color: I }),
      /* @__PURE__ */ v(Ml, { color: I })
    ] }) : null,
    /* @__PURE__ */ v(bs, {})
  ] });
}, sd = ({
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
    onColumnOrderChange: c,
    reorderAnnouncement: g,
    resetLabel: f
  } = {},
  ...w
}) => /* @__PURE__ */ v(Ws, { filters: e, setFilters: t, children: /* @__PURE__ */ v(
  fs,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: l,
    onColumnOrderChange: c,
    reorderAnnouncement: g,
    resetLabel: f,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ v(Vl, { ...w, columns: n, filters: e, setFilters: t })
  }
) });
export {
  ma as Cell,
  ot as ColumnType,
  bo as DATE_FORMAT,
  Wl as DEFAULT_PAGE_SIZES,
  sd as DataGrid,
  zn as DataGridCheckbox,
  Nn as DataGridDefaultRenderersContext,
  ao as EXPANDER_COLUMN_KEY,
  oo as ExpanderToggle,
  St as FilterType,
  Ha as Row,
  Ns as SELECTION_COLUMN_KEY,
  _r as SELECT_COLUMN_KEY,
  An as SelectCellFormatter,
  yt as SelectColumn,
  Gi as ToggleGroup,
  od as TreeDataGrid,
  ad as VisibilityColumnChooser,
  bs as VisibilityMenu,
  Ms as clickBelongsToRow,
  kl as convertDate,
  ss as defaultTheme,
  Ls as detailAwareRowHeight,
  Hs as detailRowClass,
  Mr as getStringToCompare,
  Kt as isDetailRow,
  Bi as renderCheckbox,
  Ur as renderHeaderCell,
  Ya as renderSortIcon,
  $a as renderSortPriority,
  id as renderTextEditor,
  Vi as renderToggleGroup,
  ji as renderValue,
  ne as taktikTheme,
  sa as useHeaderRowSelection,
  zl as usePagination,
  Kr as useRowSelection,
  Fs as withDetailRendering,
  Ps as withDetailRows
};
