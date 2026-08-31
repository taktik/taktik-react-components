import { jsx as v, jsxs as ie, Fragment as it } from "react/jsx-runtime";
import * as _t from "react";
import Ye, { createContext as It, use as kt, memo as _e, useMemo as K, useCallback as X, useState as se, useRef as de, useLayoutEffect as st, useImperativeHandle as mi, useSyncExternalStore as Nr, useEffectEvent as wi, useEffect as Xe, useContext as ct } from "react";
import { flushSync as In } from "react-dom";
import me from "@emotion/styled";
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
function ze(e, t, n, r) {
  if (typeof e.colSpan != "function") return;
  const o = e.colSpan(r);
  if (!Number.isInteger(o) || o <= 1) return;
  const i = e.idx + o - 1;
  if (!(Zt(e.frozen) && i > t) && !(e.frozen === !1 && n !== -1 && i >= n))
    return o;
}
function Lr(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function ki({ rows: e, topSummaryRows: t, bottomSummaryRows: n, rowIdx: r, mainHeaderRowIdx: o, lastStartFrozenColumnIndex: i, firstEndFrozenColumnIndex: a, column: s }) {
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
function Ti({ moveUp: e, moveNext: t, cellNavigationMode: n, columns: r, colSpanColumns: o, rows: i, topSummaryRows: a, bottomSummaryRows: s, minRowIdx: l, mainHeaderRowIdx: c, maxRowIdx: g, activePosition: { idx: h, rowIdx: y }, nextPosition: b, nextPositionIsCellInActiveBounds: m, lastStartFrozenColumnIndex: f, firstEndFrozenColumnIndex: x }) {
  let { idx: d, rowIdx: u } = b;
  const I = r.length, S = (C) => {
    for (const N of o) {
      const Y = N.idx;
      if (Y > d) break;
      const F = ki({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: u,
        mainHeaderRowIdx: c,
        lastStartFrozenColumnIndex: f,
        firstEndFrozenColumnIndex: x,
        column: N
      });
      if (F && d > Y && d < F + Y) {
        d = Y + (C ? F : 0);
        break;
      }
    }
  }, O = (C) => C.level + c, P = () => {
    if (t) {
      let { parent: C } = r[d];
      for (; C !== void 0; ) {
        const N = O(C);
        if (u === N) {
          d = C.idx + C.colSpan;
          break;
        }
        ({ parent: C } = C);
      }
    } else if (e) {
      let { parent: C } = r[d], N = !1;
      for (; C !== void 0; ) {
        const Y = O(C);
        if (u >= Y) {
          d = C.idx, u = Y, N = !0;
          break;
        }
        ({ parent: C } = C);
      }
      N || (d = h, u = y);
    }
  };
  if (m && (S(t), u < c && P()), n === "CHANGE_ROW" && (d === I ? u !== g && (d = 0, u += 1) : d === -1 && (u !== l && (u -= 1, d = I - 1), S(!1))), u < c && d > -1 && d < I) {
    let { parent: C } = r[d];
    const N = u;
    for (u = c; C !== void 0; ) {
      const Y = O(C);
      Y >= N && (u = Y, d = C.idx), { parent: C } = C;
    }
  }
  return {
    idx: d,
    rowIdx: u
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
function Fr(e) {
  return e.querySelector('& > [role="row"] > [tabindex="0"]');
}
function Hr(e, t) {
  e !== null && (t && Gt(e), e.focus({ preventScroll: !0 }));
}
function Ei(e) {
  Hr(Ii(e), !0);
}
function Wr(e, t = !0) {
  Hr(Fr(e), t);
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
function Li(e) {
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
const zr = "rdg-cell rdg-7-0-0-beta-60-85c48527", Yr = "rdg-7-0-0-beta-60-203d9925", Fi = `rdg-cell-frozen-start ${Yr}`, Hi = `rdg-cell-frozen-end ${Yr}`, Wi = "rdg-cell-drag-handle rdg-7-0-0-beta-60-bfba19bc";
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
  return $e(zr, Zt(e.frozen) && Fi, e.frozen === "end" && Hi, ...t);
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
  var I;
  const [l, c] = se(Ut), [g, h] = se(null), y = de(null);
  function b({ idx: S, rowIdx: O }) {
    const P = r && S === -1, C = S >= 0 && S <= o, N = O >= i && O <= a, Y = O >= 0 && O < n.length, F = P && N, _ = P && Y, W = C && N, B = C && Y;
    return {
      isPositionInActiveBounds: F || W,
      isPositionInViewport: _ || B,
      isRowInActiveBounds: F,
      isRowInViewport: _,
      isCellInActiveBounds: W,
      isCellInViewport: B
    };
  }
  function m(S) {
    return {
      resolvedActivePosition: S,
      validatedPosition: b(S)
    };
  }
  function f() {
    if (!u.isCellInActiveBounds) throw new Error("No column for active position");
    return t[d.idx];
  }
  function x() {
    if (!u.isPositionInViewport) throw new Error("No row for active position");
    return n[d.rowIdx];
  }
  let { resolvedActivePosition: d, validatedPosition: u } = m(l);
  if (!u.isPositionInActiveBounds && d !== Ut)
    c(Ut), s(void 0), { resolvedActivePosition: d, validatedPosition: u } = m(Ut);
  else if (d.mode === "EDIT" && (((I = f().editorOptions) == null ? void 0 : I.closeOnExternalRowChange) ?? !0) && x() !== d.originalRow) {
    const S = {
      idx: d.idx,
      rowIdx: d.rowIdx,
      mode: "ACTIVE"
    };
    c(S), h(null), { resolvedActivePosition: d, validatedPosition: u } = m(S);
  }
  return st(() => {
    g !== null && g !== y.current && (y.current = g, g.idx === -1 ? Ei(e.current) : Wr(e.current));
  }, [g, e]), {
    activePosition: d,
    setActivePosition: c,
    setPositionToFocus: h,
    activePositionIsInActiveBounds: u.isPositionInActiveBounds,
    activePositionIsInViewport: u.isPositionInViewport,
    activePositionIsRow: u.isRowInActiveBounds,
    activePositionIsCellInViewport: u.isCellInViewport,
    validatePosition: b,
    getActiveColumn: f,
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
function Xi({ tabIndex: e }) {
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
function qi({ row: e, tabIndex: t }) {
  const { isRowSelectionDisabled: n, isRowSelected: r, onRowSelectionChange: o } = Xr();
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
function Ki({ row: e, tabIndex: t }) {
  const { isRowSelected: n, onRowSelectionChange: r } = Xr();
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
    return /* @__PURE__ */ v(Xi, { ...e });
  },
  renderCell(e) {
    return /* @__PURE__ */ v(qi, { ...e });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ v(Ki, { ...e });
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
  const a = (t == null ? void 0 : t.width) ?? ea, s = (t == null ? void 0 : t.minWidth) ?? ta, l = (t == null ? void 0 : t.maxWidth) ?? void 0, c = (t == null ? void 0 : t.renderCell) ?? ji, g = (t == null ? void 0 : t.renderHeaderCell) ?? Ur, h = (t == null ? void 0 : t.sortable) ?? !1, y = (t == null ? void 0 : t.resizable) ?? !1, b = (t == null ? void 0 : t.draggable) ?? !1, { columns: m, colSpanColumns: f, lastStartFrozenColumnIndex: x, firstEndFrozenColumnIndex: d, headerRowsCount: u } = K(() => {
    let F = -1, _ = -1, W = 1;
    const B = [];
    ee(e, 1);
    function ee(D, E, H) {
      for (const U of D) {
        if ("children" in U) {
          const fe = {
            name: U.name,
            parent: H,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: U.headerCellClass
          };
          ee(U.children, E + 1, fe);
          continue;
        }
        const ne = U.frozen ?? !1;
        B.push({
          ...U,
          parent: H,
          idx: 0,
          level: 0,
          frozen: ne,
          width: U.width ?? a,
          minWidth: U.minWidth ?? s,
          maxWidth: U.maxWidth ?? l,
          sortable: U.sortable ?? h,
          resizable: U.resizable ?? y,
          draggable: U.draggable ?? b,
          renderCell: U.renderCell ?? c,
          renderHeaderCell: U.renderHeaderCell ?? g
        }), Zt(ne) && F++, E > W && (W = E);
      }
    }
    B.sort((D, E) => D.key === "rdg-select-column" ? -1 : E.key === "rdg-select-column" ? 1 : (D.frozen === "end" ? 2 : D.frozen === !1 ? 1 : 0) - (E.frozen === "end" ? 2 : E.frozen === !1 ? 1 : 0));
    const k = [];
    return B.forEach((D, E) => {
      D.idx = E, Vr(D, E, 0), D.colSpan != null && k.push(D), D.frozen === "end" && _ === -1 && (_ = E);
    }), {
      columns: B,
      colSpanColumns: k,
      lastStartFrozenColumnIndex: F,
      firstEndFrozenColumnIndex: _,
      headerRowsCount: W
    };
  }, [
    e,
    a,
    s,
    l,
    c,
    g,
    y,
    h,
    b
  ]), { templateColumns: I, layoutCssVars: S, totalStartFrozenColumnWidth: O, totalEndFrozenColumnWidth: P, columnMetrics: C } = K(() => {
    const F = /* @__PURE__ */ new Map();
    let _ = 0, W = 0, B = 0;
    const ee = [];
    for (const D of m) {
      let E = n(D);
      typeof E == "number" ? E = On(E, D) : E = D.minWidth, ee.push(`${E}px`), F.set(D, {
        width: E,
        left: _
      }), _ += E;
    }
    if (x !== -1) {
      const D = F.get(m[x]);
      W = D.left + D.width;
    }
    const k = {};
    for (let D = 0; D <= x; D++) {
      const E = m[D];
      k[`--rdg-frozen-start-${E.idx}`] = `${F.get(E).left}px`;
    }
    if (d !== -1) {
      const D = m[m.length - 1], E = F.get(D), H = E.left + E.width;
      B = H - F.get(m[d]).left;
      for (let U = d; U < m.length; U++) {
        const ne = m[U], fe = F.get(ne);
        k[`--rdg-frozen-end-${ne.idx}`] = `${H - (fe.left + fe.width)}px`;
      }
    }
    return {
      templateColumns: ee,
      layoutCssVars: k,
      totalStartFrozenColumnWidth: W,
      totalEndFrozenColumnWidth: B,
      columnMetrics: F
    };
  }, [
    n,
    m,
    x,
    d
  ]), [N, Y] = K(() => {
    if (!i) return [0, m.length - 1];
    const F = o + O, _ = o + r - P, W = m.length - 1, B = Tt(x + 1, W);
    if (F >= _) return [B, B];
    let ee = B;
    for (; ee < W; ) {
      const { left: D, width: E } = C.get(m[ee]);
      if (D + E > F) break;
      ee++;
    }
    let k = ee;
    for (; k < W; ) {
      const { left: D, width: E } = C.get(m[k]);
      if (D + E >= _) break;
      k++;
    }
    return [jt(B, ee - 1), Tt(W, k + 1)];
  }, [
    C,
    m,
    x,
    o,
    O,
    P,
    r,
    i
  ]);
  return {
    columns: m,
    colSpanColumns: f,
    colOverscanStartIdx: N,
    colOverscanEndIdx: Y,
    templateColumns: I,
    layoutCssVars: S,
    headerRowsCount: u,
    lastStartFrozenColumnIndex: x,
    firstEndFrozenColumnIndex: d,
    totalStartFrozenColumnWidth: O,
    totalEndFrozenColumnWidth: P
  };
}
function Vr(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const { parent: r } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Vr(r, t, n - 1);
  }
}
function ra(e, t, n, r, o, i, a, s, l) {
  const [c, g] = se(null), [h, y] = se(null), [b, m] = se(o), f = e.length === t.length, x = f && o !== b, d = [...n], u = [];
  for (const { key: P, idx: C, width: N } of t) {
    const Y = i.get(P);
    P === (c == null ? void 0 : c.key) ? (d[C] = c.width === "max-content" ? c.width : `${c.width}px`, u.push(P)) : typeof N == "string" && (Y == null ? void 0 : Y.type) !== "resized" && (x || (h == null ? void 0 : h.has(P)) === !0 || Y === void 0) && (d[C] = N, u.push(P));
  }
  const I = d.join(" ");
  st(S);
  function S() {
    var N, Y;
    if (m(o), u.length === 0) return;
    const P = new Map(i);
    let C = !1;
    for (const F of u) {
      const _ = un(r, F);
      C || (C = _ !== ((N = i.get(F)) == null ? void 0 : N.width)), _ === void 0 ? P.delete(F) : P.set(F, {
        type: "measured",
        width: _
      });
    }
    if (c !== null) {
      const F = c.key, _ = (Y = i.get(F)) == null ? void 0 : Y.width, W = un(r, F);
      W !== void 0 && _ !== W && (C = !0, P.set(F, {
        type: "resized",
        width: W
      })), g(null);
    }
    C && a(P);
  }
  function O(P, C) {
    var Y;
    const { key: N } = P;
    if (In(() => {
      var F;
      if (f) {
        const _ = /* @__PURE__ */ new Set();
        for (const { key: W, width: B } of t) N !== W && typeof B == "string" && ((F = i.get(W)) == null ? void 0 : F.type) !== "resized" && _.add(W);
        y(_);
      }
      g({
        key: N,
        width: C
      }), l(typeof C == "number");
    }), y(null), s) {
      const F = (Y = i.get(N)) == null ? void 0 : Y.width, _ = typeof C == "number" ? C : un(r, N);
      _ !== void 0 && _ !== F && s(P, _);
    }
  }
  return {
    gridTemplateColumns: I,
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
function ge(e) {
  const t = de(e);
  st(() => {
    t.current = e;
  });
  const n = X((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Rt(e) {
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
const Jt = It(void 0);
Jt.displayName = "RowSelectionContext";
const Ln = It(void 0);
Ln.displayName = "RowSelectionChangeContext";
function Xr() {
  const e = kt(Jt), t = kt(Ln);
  if (e === void 0 || t === void 0) throw new Error("useRowSelection must be used within renderCell");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Fn = It(void 0);
Fn.displayName = "HeaderRowSelectionContext";
const Hn = It(void 0);
Hn.displayName = "HeaderRowSelectionChangeContext";
function sa() {
  const e = kt(Fn), t = kt(Hn);
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
  const [t, n] = se(null);
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
  const h = K(() => {
    if (i === 0) return 0;
    function* x() {
      if (yield { type: "HEADER" }, r != null) for (const d of r) yield {
        type: "SUMMARY",
        row: d
      };
      for (let d = c; d <= g; d++) yield {
        type: "ROW",
        row: n[d]
      };
      if (o != null) for (const d of o) yield {
        type: "SUMMARY",
        row: d
      };
    }
    for (const d of t) {
      if (d.frozen) continue;
      const u = d.idx;
      if (u >= i) break;
      for (const I of x()) {
        const S = ze(d, s, l, I);
        if (S !== void 0 && u + S > i) return u;
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
  ]), y = l > -1 ? Math.min(a, l - 1) : a, b = X(function* (x) {
    for (let u = 0; u <= s; u++) yield e[u];
    const d = l > -1 ? l - 1 : e.length - 1;
    if (s < d) {
      x > s && x < h && (yield e[x]);
      for (let u = h; u <= y; u++) yield e[u];
      x > y && x <= d && (yield e[x]);
    }
    if (l > -1) for (let u = l; u < e.length; u++) yield e[u];
  }, [
    h,
    y,
    e,
    s,
    l
  ]), m = X(function* (x = -1, d) {
    const u = b(x);
    for (const I of u) {
      let S = d && ze(I, s, l, d);
      for (yield [
        I,
        I.idx === x,
        S
      ]; S !== void 0 && S > 1; )
        u.next(), S--;
    }
  }, [
    b,
    s,
    l
  ]), f = X(function* (x = -1, d) {
    if (x >= 0 && x < e.length) {
      const u = e[x];
      yield [
        u,
        !0,
        d && ze(u, s, l, d)
      ];
    }
  }, [
    e,
    s,
    l
  ]);
  return {
    viewportColumns: K(() => b(-1).toArray(), [b]),
    iterateOverViewportColumnsForRow: m,
    iterateOverViewportColumnsForRowOutsideOfViewport: f
  };
}
function fa({ rows: e, rowHeight: t, clientHeight: n, scrollTop: r, enableVirtualization: o }) {
  const { totalRowHeight: i, gridTemplateRows: a, getRowTop: s, getRowHeight: l, findRowIdx: c } = K(() => {
    if (typeof t == "number") return {
      totalRowHeight: t * e.length,
      gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
      getRowTop: (u) => u * t,
      getRowHeight: () => t,
      findRowIdx: (u) => sr(u / t)
    };
    let y = 0, b = "", m = null, f = 0;
    const x = e.map((u, I) => {
      const S = t(u), O = {
        top: y,
        height: S
      };
      return y += S, m === null ? (m = S, f = 1) : m === S ? f++ : (f > 1 ? b += `repeat(${f}, ${m}px) ` : b += `${m}px `, m = S, f = 1), I === e.length - 1 && (f > 1 ? b += `repeat(${f}, ${m}px)` : b += `${m}px`), O;
    }), d = (u) => jt(0, Tt(e.length - 1, u));
    return {
      totalRowHeight: y,
      gridTemplateRows: b,
      getRowTop: (u) => x[d(u)].top,
      getRowHeight: (u) => x[d(u)].height,
      findRowIdx(u) {
        let I = 0, S = x.length - 1;
        for (; I <= S; ) {
          const O = I + sr((S - I) / 2), P = x[O].top;
          if (P === u) return O;
          if (P < u ? I = O + 1 : P > u && (S = O - 1), I > S) return S;
        }
        return 0;
      }
    };
  }, [t, e]);
  let g = 0, h = e.length - 1;
  if (o) {
    const b = c(r), m = c(r + n);
    g = jt(0, b - 4), h = Tt(e.length - 1, m + 4);
  }
  return {
    rowOverscanStartIdx: g,
    rowOverscanEndIdx: h,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: l,
    findRowIdx: c
  };
}
const ha = "rdg-cell-dragged-over rdg-7-0-0-beta-60-35ccb4c8";
function ga({ column: e, colSpan: t, isCellActive: n, isDraggedOver: r, row: o, rowIdx: i, className: a, onMouseDown: s, onCellMouseDown: l, onClick: c, onCellClick: g, onDoubleClick: h, onCellDoubleClick: y, onContextMenu: b, onCellContextMenu: m, onRowChange: f, setActivePosition: x, style: d, ...u }) {
  const { tabIndex: I, childTabIndex: S, onFocus: O } = Rt(n), { cellClass: P } = e;
  a = at(e, r && ha, typeof P == "function" ? P(o) : P, a);
  const C = Lr(e, o);
  function N(k = !1) {
    x({
      rowIdx: i,
      idx: e.idx
    }, { enableEditor: k });
  }
  function Y(k, D) {
    let E = !1;
    if (D) {
      const H = En(k);
      D({
        rowIdx: i,
        row: o,
        column: e,
        setActivePosition: N
      }, H), E = H.isGridDefaultPrevented();
    }
    return E;
  }
  function F(k) {
    s == null || s(k), Y(k, l) || N();
  }
  function _(k) {
    c == null || c(k), Y(k, g);
  }
  function W(k) {
    h == null || h(k), Y(k, y) || N(!0);
  }
  function B(k) {
    b == null || b(k), Y(k, m);
  }
  function ee(k) {
    f(e, i, k);
  }
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !C || void 0,
    tabIndex: I,
    className: a,
    style: {
      ...lt(e, t),
      ...d
    },
    onClick: _,
    onMouseDown: F,
    onDoubleClick: W,
    onContextMenu: B,
    onFocus: O,
    ...u,
    children: e.renderCell({
      column: e,
      row: o,
      rowIdx: i,
      isCellEditable: C,
      tabIndex: S,
      onRowChange: ee
    })
  });
}
const ma = _e(ga);
function wa(e, t) {
  return /* @__PURE__ */ v(ma, { ...t }, e);
}
const pa = typeof scheduler == "object" && typeof scheduler.postTask == "function", ya = "rdg-7-0-0-beta-60-46f9ea88";
function ba({ column: e, colSpan: t, row: n, rowIdx: r, onRowChange: o, closeEditor: i, onKeyDown: a, navigate: s }) {
  var I, S, O;
  const l = de(void 0), c = de(void 0), g = de(void 0), h = ((I = e.editorOptions) == null ? void 0 : I.commitOnOutsideClick) ?? !0, y = wi(() => {
    f(!0, !1);
  });
  st(() => {
    if (!h) return;
    function P(N) {
      if (l.current = N, pa) {
        const Y = new AbortController(), { signal: F } = Y;
        c.current = Y, scheduler.postTask(y, {
          priority: "user-blocking",
          signal: F
        }).catch(() => {
        });
      } else g.current = requestAnimationFrame(y);
    }
    function C(N) {
      l.current === N && y();
    }
    return window.addEventListener("mousedown", P, { capture: !0 }), window.addEventListener("mousedown", C), () => {
      window.removeEventListener("mousedown", P, { capture: !0 }), window.removeEventListener("mousedown", C), b();
    };
  }, [h]);
  function b() {
    l.current = void 0, c.current !== void 0 && (c.current.abort(), c.current = void 0), g.current !== void 0 && (cancelAnimationFrame(g.current), g.current = void 0);
  }
  function m(P) {
    if (a) {
      const C = En(P);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(P);
        },
        onClose: f
      }, C), C.isGridDefaultPrevented()) return;
    }
    P.key === "Escape" ? f() : P.key === "Enter" ? f(!0) : Ni(P) && s(P);
  }
  function f(P = !1, C = !0) {
    P ? o(n, !0, C) : i(C);
  }
  function x(P, C = !1) {
    o(P, C, C);
  }
  const { cellClass: d } = e, u = at(e, "rdg-editor-container", !((S = e.editorOptions) != null && S.displayCellContent) && ya, typeof d == "function" ? d(n) : d);
  return /* @__PURE__ */ v("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: u,
    style: lt(e, t),
    onKeyDown: m,
    onMouseDownCapture: b,
    children: e.renderEditCell != null && /* @__PURE__ */ ie(it, { children: [e.renderEditCell({
      column: e,
      row: n,
      rowIdx: r,
      onRowChange: x,
      onClose: f
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
const xa = "rdg-7-0-0-beta-60-2a7e240d", Ca = "rdg-cell-resizable rdg-7-0-0-beta-60-1893dc0f", Da = "rdg-resize-handle rdg-7-0-0-beta-60-4e60db91", ka = "rdg-cell-draggable", qr = "rdg-7-0-0-beta-60-f2d18717", Ta = `rdg-cell-dragging ${qr}`, Sa = `rdg-cell-drag-over ${qr}`, Pa = "rdg-7-0-0-beta-60-3d12c7ae";
function Ia({ column: e, colSpan: t, rowIdx: n, isCellActive: r, onColumnResize: o, onColumnResizeEnd: i, onColumnsReorder: a, sortColumns: s, onSortColumnsChange: l, setPosition: c, shouldFocusGrid: g, direction: h, draggedColumnKey: y, setDraggedColumnKey: b }) {
  const [m, f] = se(!1), x = de(null), d = y === e.key, u = Br(e, n), { tabIndex: I, childTabIndex: S, onFocus: O } = Rt(g || r), P = s == null ? void 0 : s.findIndex((T) => T.columnKey === e.key), C = P !== void 0 && P > -1 ? s[P] : void 0, N = C == null ? void 0 : C.direction, Y = C !== void 0 && s.length > 1 ? P + 1 : void 0, F = N && !Y ? N === "ASC" ? "ascending" : "descending" : void 0, { sortable: _, resizable: W, draggable: B } = e, ee = at(e, e.headerCellClass, _ && xa, W && Ca, B && ka, d && Ta, m && Sa);
  function k(T) {
    if (l == null) return;
    const { sortDescendingFirst: z } = e;
    if (C === void 0) {
      const V = {
        columnKey: e.key,
        direction: z ? "DESC" : "ASC"
      };
      l(s && T ? [...s, V] : [V]);
    } else {
      let V;
      if ((z === !0 && N === "DESC" || z !== !0 && N === "ASC") && (V = {
        columnKey: e.key,
        direction: N === "ASC" ? "DESC" : "ASC"
      }), T) {
        const J = [...s];
        V ? J[P] = V : J.splice(P, 1), l(J);
      } else l(V ? [V] : []);
    }
  }
  function D(T) {
    O == null || O(T), g && c({
      idx: 0,
      rowIdx: n
    });
  }
  function E() {
    c({
      idx: e.idx,
      rowIdx: n
    });
  }
  function H(T) {
    _ && k(T.ctrlKey || T.metaKey);
  }
  function U(T) {
    const { key: z } = T;
    if (_ && (z === " " || z === "Enter"))
      T.preventDefault(), k(T.ctrlKey || T.metaKey);
    else if (W && Rn(T) && (z === "ArrowLeft" || z === "ArrowRight")) {
      T.stopPropagation();
      const { width: V } = T.currentTarget.getBoundingClientRect(), { leftKey: J } = Mn(h), q = On(V + (z === J ? -10 : 10), e);
      q !== V && o(e, q);
    }
  }
  function ne(T) {
    In(() => {
      b(e.key);
    }), T.dataTransfer.setDragImage(x.current, 0, 0), T.dataTransfer.dropEffect = "move";
  }
  function fe() {
    b(void 0);
  }
  function Ue(T) {
    T.preventDefault(), T.dataTransfer.dropEffect = "move";
  }
  function xe(T) {
    f(!1), T.preventDefault(), a == null || a(y, e.key);
  }
  function Pe(T) {
    cr(T) && f(!0);
  }
  function Ne(T) {
    cr(T) && f(!1);
  }
  let Ce, Re;
  B && (Ce = {
    draggable: !0,
    onDragStart: ne,
    onDragEnd: fe
  }, y !== void 0 && y !== e.key && (Re = {
    onDragOver: Ue,
    onDragEnter: Pe,
    onDragLeave: Ne,
    onDrop: xe
  }));
  const A = {
    ...$r(e, n, u),
    ...lt(e, t)
  }, R = e.renderHeaderCell({
    column: e,
    sortDirection: N,
    priority: Y,
    tabIndex: S
  });
  return /* @__PURE__ */ ie(it, { children: [d && /* @__PURE__ */ v("div", {
    ref: x,
    style: A,
    className: at(e, e.headerCellClass, Pa),
    children: R
  }), /* @__PURE__ */ ie("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": u,
    "aria-selected": r,
    "aria-sort": F,
    tabIndex: I,
    className: ee,
    style: A,
    onMouseDown: E,
    onFocus: D,
    onClick: H,
    onKeyDown: U,
    ...Ce,
    ...Re,
    children: [R, W && /* @__PURE__ */ v(Ea, {
      direction: h,
      column: e,
      onColumnResize: o,
      onColumnResizeEnd: i
    })]
  })] });
}
function Ea({ direction: e, column: t, onColumnResize: n, onColumnResizeEnd: r }) {
  const o = de(void 0), i = e === "rtl";
  function a(g) {
    if (g.pointerType === "mouse" && g.button !== 0) return;
    g.preventDefault();
    const { currentTarget: h, pointerId: y } = g;
    h.setPointerCapture(y);
    const { right: b, left: m } = h.parentElement.getBoundingClientRect();
    o.current = i ? g.clientX - m : b - g.clientX;
  }
  function s(g) {
    const h = o.current;
    if (h === void 0) return;
    const { width: y, right: b, left: m } = g.currentTarget.parentElement.getBoundingClientRect();
    let f = i ? b + h - g.clientX : g.clientX + h - m;
    f = On(f, t), y > 0 && f !== y && n(t, f);
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
const Wn = "rdg-row rdg-7-0-0-beta-60-3c083f1b", Ra = "rdg-top-summary-row", Ma = "rdg-bottom-summary-row", Kr = "rdg-header-row rdg-7-0-0-beta-60-0dbd5994";
function Oa({ headerRowClass: e, rowIdx: t, iterateOverViewportColumnsForRow: n, onColumnResize: r, onColumnResizeEnd: o, onColumnsReorder: i, sortColumns: a, onSortColumnsChange: s, activeCellIdx: l, setPosition: c, shouldFocusGrid: g, direction: h }) {
  const [y, b] = se(), m = l === -1, f = n(l, { type: "HEADER" }).map(([x, d, u], I) => /* @__PURE__ */ v(Ia, {
    column: x,
    colSpan: u,
    rowIdx: t,
    isCellActive: d,
    onColumnResize: r,
    onColumnResizeEnd: o,
    onColumnsReorder: i,
    onSortColumnsChange: s,
    sortColumns: a,
    setPosition: c,
    shouldFocusGrid: g && I === 0,
    direction: h,
    draggedColumnKey: y,
    setDraggedColumnKey: b
  }, x.key)).toArray();
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": t,
    className: $e(Kr, m && "rdg-row-active", e),
    children: f
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
    className: Kr,
    children: i
  });
}
var La = _e(Aa);
function Fa({ className: e, rowIdx: t, gridRowStart: n, activeCellIdx: r, isRowSelectionDisabled: o, isRowSelected: i, draggedOverCellIdx: a, row: s, iterateOverViewportColumnsForRow: l, activeCellEditor: c, isTreeGrid: g, onCellMouseDown: h, onCellClick: y, onCellDoubleClick: b, onCellContextMenu: m, rowClass: f, onRowChange: x, setActivePosition: d, style: u, ...I }) {
  const S = Et().renderCell, O = r === -1;
  e = $e(Wn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, O && "rdg-row-active", f == null ? void 0 : f(s, t), e);
  const P = l(r, {
    type: "ROW",
    row: s
  }).map(([C, N, Y]) => N && c ? c : S(C.key, {
    column: C,
    colSpan: Y,
    row: s,
    rowIdx: t,
    isDraggedOver: a === C.idx,
    isCellActive: N,
    onCellMouseDown: h,
    onCellClick: y,
    onCellDoubleClick: b,
    onCellContextMenu: m,
    onRowChange: x,
    setActivePosition: d
  })).toArray();
  return /* @__PURE__ */ v(Jt, {
    value: K(() => ({
      isRowSelected: i,
      isRowSelectionDisabled: o
    }), [o, i]),
    children: /* @__PURE__ */ v("div", {
      role: "row",
      tabIndex: g ? O ? 0 : -1 : void 0,
      className: e,
      style: {
        gridRowStart: n,
        ...u
      },
      ...I,
      children: P
    })
  });
}
const Ha = _e(Fa);
function Qr(e, t) {
  return /* @__PURE__ */ v(Ha, { ...t }, e);
}
const Wa = "rdg-sort-arrow rdg-7-0-0-beta-60-3d5115f3";
function za({ sortDirection: e, priority: t }) {
  return /* @__PURE__ */ ie(it, { children: [Ya({ sortDirection: e }), $a({ priority: t })] });
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
function Xa({ column: e, colSpan: t, row: n, rowIdx: r, isCellActive: o, setActivePosition: i }) {
  var y;
  const { tabIndex: a, childTabIndex: s, onFocus: l } = Rt(o), { summaryCellClass: c } = e, g = at(e, typeof c == "function" ? c(n) : c);
  function h() {
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
    onMouseDown: h,
    onFocus: l,
    children: (y = e.renderSummaryCell) == null ? void 0 : y.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
var qa = _e(Xa);
const Ka = "rdg-summary-row rdg-7-0-0-beta-60-0b90c82c";
function Qa({ rowIdx: e, gridRowStart: t, row: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, setActivePosition: i, top: a, bottom: s, isTop: l, isTreeGrid: c, "aria-rowindex": g }) {
  const h = o === -1, y = r(o, {
    type: "SUMMARY",
    row: n
  }).map(([b, m, f]) => /* @__PURE__ */ v(qa, {
    column: b,
    colSpan: f,
    row: n,
    rowIdx: e,
    isCellActive: m,
    setActivePosition: i
  }, b.key)).toArray();
  return /* @__PURE__ */ v("div", {
    role: "row",
    "aria-rowindex": g,
    tabIndex: c ? h ? 0 : -1 : void 0,
    className: $e(Wn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Ka, l ? Ra : Ma, h && "rdg-row-active"),
    style: {
      gridRowStart: t,
      top: a,
      bottom: s
    },
    children: y
  });
}
var lr = _e(Qa);
function no(e) {
  const { ref: t, columns: n, rows: r, topSummaryRows: o, bottomSummaryRows: i, rowKeyGetter: a, onRowsChange: s, rowHeight: l, headerRowHeight: c, summaryRowHeight: g, columnWidths: h, onColumnWidthsChange: y, selectedRows: b, isRowSelectionDisabled: m, onSelectedRowsChange: f, sortColumns: x, onSortColumnsChange: d, defaultColumnOptions: u, onCellMouseDown: I, onCellClick: S, onCellDoubleClick: O, onCellContextMenu: P, onCellKeyDown: C, onActivePositionChange: N, onScroll: Y, onColumnResize: F, onColumnsReorder: _, onFill: W, onCellCopy: B, onCellPaste: ee, enableVirtualization: k, renderers: D, className: E, style: H, rowClass: U, headerRowClass: ne, direction: fe, role: Ue, "aria-label": xe, "aria-labelledby": Pe, "aria-description": Ne, "aria-describedby": Ce, "aria-rowcount": Re, "data-testid": A, "data-cy": R } = e, T = Et(), z = Ue ?? "grid", V = l ?? 35, J = c ?? (typeof V == "number" ? V : 35), q = g ?? (typeof V == "number" ? V : 35), ue = (D == null ? void 0 : D.renderRow) ?? (T == null ? void 0 : T.renderRow) ?? Qr, we = (D == null ? void 0 : D.renderCell) ?? (T == null ? void 0 : T.renderCell) ?? wa, pe = (D == null ? void 0 : D.renderSortStatus) ?? (T == null ? void 0 : T.renderSortStatus) ?? za, ye = (D == null ? void 0 : D.renderCheckbox) ?? (T == null ? void 0 : T.renderCheckbox) ?? Bi, Me = (D == null ? void 0 : D.noRowsFallback) ?? (T == null ? void 0 : T.noRowsFallback), De = k ?? !0, Ie = fe ?? "ltr", ce = de(null), { scrollTop: be, scrollLeft: qe } = la(ce), [Ve, Q] = aa(ce), [te, le] = se(() => h ?? /* @__PURE__ */ new Map()), [dt, Nt] = se(!1), [en, _n] = se(!1), [Ae, tn] = se(void 0), [Ke, vo] = se(-1), nn = h != null && y != null && !dt, At = nn ? h : te, xo = nn ? (w) => {
    le(w), y(w);
  } : le, Un = X((w) => {
    var p;
    return ((p = At.get(w.key)) == null ? void 0 : p.width) ?? w.width;
  }, [At]), { columns: Ee, colSpanColumns: Vn, lastStartFrozenColumnIndex: Qe, firstEndFrozenColumnIndex: Ge, headerRowsCount: Le, colOverscanStartIdx: Co, colOverscanEndIdx: Do, templateColumns: ko, layoutCssVars: To, totalStartFrozenColumnWidth: Gn, totalEndFrozenColumnWidth: jn } = na({
    rawColumns: n,
    defaultColumnOptions: u,
    getColumnWidth: Un,
    scrollLeft: qe,
    viewportWidth: Ve,
    enableVirtualization: De
  }), ut = z === "treegrid", Oe = (o == null ? void 0 : o.length) ?? 0, ke = (i == null ? void 0 : i.length) ?? 0, Xn = Oe + ke, Te = Le + Oe, rn = Le - 1, Fe = -Te, Ze = r.length + ke - 1, on = Fe + rn, Lt = Ee.length - 1, Ft = Le * J, So = Xn * q, Je = Q - Ft - So, an = b != null && f != null, { leftKey: Po, rightKey: qn } = Mn(Ie), Kn = Re ?? Le + r.length + Xn, Io = {
    gridColumnStart: Qe + 2,
    insetInlineStart: Gn
  }, Eo = {
    gridColumnStart: Ge + 1,
    gridColumnEnd: -1,
    insetInlineEnd: jn
  }, { activePosition: G, setActivePosition: ft, setPositionToFocus: Qn, activePositionIsInActiveBounds: Ro, activePositionIsInViewport: sn, activePositionIsRow: Zn, activePositionIsCellInViewport: Ht, validatePosition: Wt, getActiveColumn: et, getActiveRow: ht } = Yi({
    gridRef: ce,
    columns: Ee,
    rows: r,
    isTreeGrid: ut,
    maxColIdx: Lt,
    minRowIdx: Fe,
    maxRowIdx: Ze,
    setDraggedOverRowIdx: tn
  }), { setScrollToPosition: Mo, scrollToPositionElement: Oo } = da({ gridRef: ce }), No = K(() => ({
    renderCheckbox: ye,
    renderSortStatus: pe,
    renderCell: we
  }), [
    ye,
    pe,
    we
  ]), Ao = K(() => {
    let w = !1, p = !1;
    if (a != null && b != null && b.size > 0) {
      for (const M of r)
        if (b.has(a(M)) ? w = !0 : p = !0, w && p) break;
    }
    return {
      isRowSelected: w && !p,
      isIndeterminate: w && p
    };
  }, [
    r,
    b,
    a
  ]), { rowOverscanStartIdx: gt, rowOverscanEndIdx: mt, totalRowHeight: zt, gridTemplateRows: Lo, getRowTop: Jn, getRowHeight: Fo, findRowIdx: cn } = fa({
    rows: r,
    rowHeight: V,
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
  }), { gridTemplateColumns: Wo, handleColumnResize: zo } = ra(Ee, er, ko, ce, Ve, At, xo, F, Nt), Yo = ge(zo), $o = ge(ni), Bo = ge(_), _o = ge(d), Uo = ge(I), Vo = ge(S), Go = ge(O), jo = ge(P), Xo = ge(Qo), qo = ge(nr), Ko = ge(Yt), ln = ge(pt), tr = ge(ci);
  mi(t, () => ({
    element: ce.current,
    scrollToCell({ idx: w, rowIdx: p }) {
      const M = w != null && w > Qe && (Ge === -1 || w < Ge) && w < Ee.length ? w : void 0, $ = p != null && Wt({
        idx: 0,
        rowIdx: p
      }).isPositionInViewport ? p + Te : void 0;
      (M != null || $ != null) && Mo({
        idx: M,
        rowIdx: $
      });
    },
    setActivePosition: pt
  }));
  function Qo(w) {
    if (!f) return;
    xt(a);
    const p = new Set(b);
    for (const M of r) {
      if ((m == null ? void 0 : m(M)) === !0) continue;
      const $ = a(M);
      w.checked ? p.add($) : p.delete($);
    }
    f(p);
  }
  function nr(w) {
    if (!f) return;
    xt(a);
    const { row: p, checked: M, isShiftClick: $ } = w;
    if ((m == null ? void 0 : m(p)) === !0) return;
    const L = new Set(b), j = a(p), ae = r.indexOf(p);
    if (vo(ae), M ? L.add(j) : L.delete(j), $ && Ke !== -1 && Ke !== ae && Ke < r.length) {
      const [oe, ve] = Ke < ae ? [Ke, ae] : [ae, Ke];
      for (let He = oe + 1; He < ve; He++) {
        const dn = r[He];
        (m == null ? void 0 : m(dn)) !== !0 && (M ? L.add(a(dn)) : L.delete(a(dn)));
      }
    }
    f(L);
  }
  function Zo(w) {
    const { idx: p, rowIdx: M, mode: $ } = G;
    if ($ === "EDIT") return;
    if (C && sn) {
      const j = En(w);
      if (C({
        mode: "ACTIVE",
        row: r[M],
        column: Ee[p],
        rowIdx: M,
        setActivePosition: pt
      }, j), j.isGridDefaultPrevented()) return;
    }
    const { target: L } = w;
    if (L instanceof Element && !(L.closest(".rdg-cell") === null && !(ut && L.role === "row")))
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
  function Yt(w, p, M) {
    if (typeof s != "function" || M === r[p]) return;
    const $ = r.with(p, M);
    s($, {
      indexes: [p],
      column: w
    });
  }
  function rr() {
    G.mode === "EDIT" && Yt(et(), G.rowIdx, G.row);
  }
  function Jo(w) {
    Ht && (B == null || B({
      row: ht(),
      column: et()
    }, w));
  }
  function ei(w) {
    if (typeof ee != "function" || typeof s != "function" || !$t(G)) return;
    const p = et(), M = ht(), $ = ee({
      row: M,
      column: p
    }, w);
    Yt(p, G.rowIdx, $);
  }
  function ti(w) {
    if (!Ht) return;
    const p = ht(), { key: M, shiftKey: $ } = w;
    if (an && $ && M === " ") {
      xt(a);
      const L = a(p);
      nr({
        row: p,
        checked: !b.has(L),
        isShiftClick: !1
      }), w.preventDefault();
      return;
    }
    $t(G) && Oi(w, ee != null) && ft(({ idx: L, rowIdx: j }) => ({
      idx: L,
      rowIdx: j,
      mode: "EDIT",
      row: p,
      originalRow: p
    }));
  }
  function ni() {
    dt && (y == null || y(At), Nt(!1));
  }
  function ri(w) {
    w.preventDefault(), !(w.pointerType === "mouse" && w.button !== 0) && (_n(!0), w.currentTarget.setPointerCapture(w.pointerId));
  }
  function oi(w) {
    const p = ce.current, M = Ft + Oe * q, $ = be - M + w.clientY - p.getBoundingClientRect().top, L = cn($);
    tn(L);
    const j = Te + L + 1;
    Gt(p.querySelector(`& > [aria-rowindex="${j}"] > [aria-colindex="${G.idx + 1}"]`));
  }
  function ii() {
    if (_n(!1), Ae === void 0) return;
    const { rowIdx: w } = G, [p, M] = w < Ae ? [w + 1, Ae + 1] : [Ae, w];
    or(p, M), tn(void 0);
  }
  function ai() {
    Wr(ce.current, !1);
  }
  function si(w) {
    w.stopPropagation(), or(G.rowIdx + 1, r.length);
  }
  function or(w, p) {
    if (s == null) return;
    const { idx: M } = G, $ = et(), L = ht(), j = [...r], ae = [];
    for (let oe = w; oe < p; oe++) if ($t({
      rowIdx: oe,
      idx: M
    })) {
      const ve = W({
        columnKey: $.key,
        sourceRow: L,
        targetRow: r[oe]
      });
      ve !== r[oe] && (j[oe] = ve, ae.push(oe));
    }
    ae.length > 0 && s(j, {
      indexes: ae,
      column: $
    });
  }
  function $t(w) {
    return Wt(w).isCellInViewport && Lr(Ee[w.idx], r[w.rowIdx]);
  }
  function pt(w, p) {
    const { isPositionInActiveBounds: M } = Wt(w);
    if (!M) return;
    rr();
    const $ = dr(G, w);
    if (p != null && p.enableEditor && $t(w)) {
      const L = r[w.rowIdx];
      ft({
        ...w,
        mode: "EDIT",
        row: L,
        originalRow: L
      });
    } else if ($) Gt(Fr(ce.current));
    else {
      const L = {
        ...w,
        mode: "ACTIVE"
      };
      ft(L), p != null && p.shouldFocus && Qn(L);
    }
    N && !$ && N({
      rowIdx: w.rowIdx,
      row: r[w.rowIdx],
      column: Ee[w.idx]
    });
  }
  function ci({ idx: w, rowIdx: p }) {
    pt({
      rowIdx: Fe + p - 1,
      idx: w
    });
  }
  function li(w, p, M) {
    const { idx: $, rowIdx: L } = G;
    switch (w) {
      case "ArrowUp": {
        const j = L - 1;
        return {
          idx: $ === -1 && j < -Oe ? 0 : $,
          rowIdx: j
        };
      }
      case "ArrowDown":
        return {
          idx: $,
          rowIdx: L + 1
        };
      case Po: {
        const j = $ - 1;
        return {
          idx: L < -Oe && j < 0 ? 0 : j,
          rowIdx: L
        };
      }
      case qn:
        return {
          idx: $ + 1,
          rowIdx: L
        };
      case "Tab":
        return {
          idx: $ + (M ? -1 : 1),
          rowIdx: L
        };
      case "Home":
        return Zn || p ? {
          idx: 0,
          rowIdx: Fe
        } : {
          idx: 0,
          rowIdx: L
        };
      case "End":
        return Zn ? {
          idx: $,
          rowIdx: Ze
        } : {
          idx: Lt,
          rowIdx: p ? Ze : L
        };
      case "PageUp": {
        if (L === Fe) return G;
        const j = Jn(L) + Fo(L) - Je;
        return {
          idx: $,
          rowIdx: j > 0 ? cn(j) : 0
        };
      }
      case "PageDown": {
        if (L >= r.length) return G;
        const j = Jn(L) + Je;
        return {
          idx: $,
          rowIdx: j < zt ? cn(j) : r.length - 1
        };
      }
      default:
        return G;
    }
  }
  function ir(w) {
    const { key: p, shiftKey: M } = w;
    let $ = "NONE";
    if (p === "Tab") {
      if (Si({
        shiftKey: M,
        maxColIdx: Lt,
        minRowIdx: Fe,
        maxRowIdx: Ze,
        activePosition: G
      })) {
        rr();
        return;
      }
      $ = "CHANGE_ROW";
    }
    w.preventDefault();
    const L = li(p, Rn(w), M);
    dr(G, L) || pt(Ti({
      moveUp: p === "ArrowUp",
      moveNext: p === qn || p === "Tab" && !M,
      columns: Ee,
      colSpanColumns: Vn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: Fe,
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
  function di(w) {
    if (Ae === void 0) return;
    const { rowIdx: p } = G;
    return (p < Ae ? p < w && w <= Ae : p > w && w >= Ae) ? G.idx : void 0;
  }
  function ui() {
    var He;
    if (W == null || G.mode !== "ACTIVE" || !Ht) return;
    const { rowIdx: w } = G, p = et();
    if (p.renderEditCell == null || p.editable === !1) return;
    const M = w === Ze, $ = Un(p), L = ((He = p.colSpan) == null ? void 0 : He.call(p, {
      type: "ROW",
      row: ht()
    })) ?? 1, { insetInlineStart: j, ...ae } = lt(p, L), oe = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", ve = p.idx + L - 1 === Lt;
    return /* @__PURE__ */ v("div", {
      style: {
        ...ae,
        gridRowStart: Te + w + 1,
        marginInlineEnd: ve ? void 0 : oe,
        marginBlockEnd: M ? void 0 : oe,
        insetInlineStart: j ? `calc(${j} + ${$}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
      },
      className: $e(Wi, p.frozen && "rdg-7-0-0-beta-60-7abddb3e"),
      onPointerDown: ri,
      onPointerMove: en ? oi : void 0,
      onLostPointerCapture: en ? ii : void 0,
      onClick: ai,
      onDoubleClick: si
    });
  }
  function ar(w, p, M) {
    return /* @__PURE__ */ ie(it, { children: [
      /* @__PURE__ */ v("div", {
        className: M,
        style: {
          ...w,
          gridRowStart: 1,
          gridRowEnd: Le + 1 + Oe,
          insetBlockStart: 0
        }
      }),
      r.length > 0 && /* @__PURE__ */ v("div", {
        className: p,
        style: {
          ...w,
          gridRowStart: Te + gt + 1,
          gridRowEnd: Te + mt + 2
        }
      }),
      i != null && ke > 0 && /* @__PURE__ */ v("div", {
        className: M,
        style: {
          ...w,
          gridRowStart: Te + r.length + 1,
          gridRowEnd: Te + r.length + 1 + ke,
          insetBlockStart: Je > zt ? Q - q * ke : void 0,
          insetBlockEnd: Je > zt ? void 0 : 0
        }
      })
    ] });
  }
  function fi(w) {
    if (!Ht || G.rowIdx !== w || G.mode !== "EDIT") return;
    const { row: p } = G, M = et(), $ = ze(M, Qe, Ge, {
      type: "ROW",
      row: p
    });
    function L(ae) {
      const oe = {
        idx: G.idx,
        rowIdx: w,
        mode: "ACTIVE"
      };
      ft(oe), ae && Qn(oe);
    }
    function j(ae, oe, ve) {
      oe ? In(() => {
        Yt(M, G.rowIdx, ae), L(ve);
      }) : ft((He) => ({
        ...He,
        row: ae
      }));
    }
    return /* @__PURE__ */ v(ba, {
      column: M,
      colSpan: $,
      row: p,
      rowIdx: w,
      onRowChange: j,
      closeEditor: L,
      onKeyDown: C,
      navigate: ir
    }, M.key);
  }
  function* hi() {
    const w = G.rowIdx;
    sn && w < gt && (yield w);
    for (let p = gt; p <= mt; p++) yield p;
    sn && w > mt && (yield w);
  }
  function gi() {
    const { idx: w, rowIdx: p } = G;
    return hi().map((M) => {
      const $ = M === p, L = $ && (M < gt || M > mt) ? Ho : wt, j = r[M], ae = Te + M + 1;
      let oe = M, ve = !1;
      return typeof a == "function" && (oe = a(j), ve = (b == null ? void 0 : b.has(oe)) ?? !1), ue(oe, {
        "aria-rowindex": Te + M + 1,
        "aria-selected": an ? ve : void 0,
        rowIdx: M,
        row: j,
        iterateOverViewportColumnsForRow: L,
        isRowSelectionDisabled: (m == null ? void 0 : m(j)) ?? !1,
        isRowSelected: ve,
        onCellMouseDown: Uo,
        onCellClick: Vo,
        onCellDoubleClick: Go,
        onCellContextMenu: jo,
        rowClass: U,
        gridRowStart: ae,
        activeCellIdx: $ ? w : void 0,
        draggedOverCellIdx: di(M),
        onRowChange: Ko,
        setActivePosition: ln,
        activeCellEditor: fi(M),
        isTreeGrid: ut
      });
    }).toArray();
  }
  nn && te !== h && le(h);
  let Bt = `repeat(${Le}, ${J}px)`;
  return Oe > 0 && (Bt += ` repeat(${Oe}, ${q}px)`), r.length > 0 && (Bt += Lo), ke > 0 && (Bt += ` repeat(${ke}, ${q}px)`), /* @__PURE__ */ ie("div", {
    role: z,
    "aria-label": xe,
    "aria-labelledby": Pe,
    "aria-description": Ne,
    "aria-describedby": Ce,
    "aria-multiselectable": an ? !0 : void 0,
    "aria-colcount": Ee.length,
    "aria-rowcount": Kn,
    tabIndex: -1,
    className: $e(Ba, en && _a, E),
    style: {
      ...H,
      scrollPaddingInlineStart: Gn,
      scrollPaddingInlineEnd: jn,
      scrollPaddingBlockStart: Ft + Oe * q,
      scrollPaddingBlockEnd: ke * q,
      gridTemplateColumns: Wo,
      gridTemplateRows: Bt,
      "--rdg-header-row-height": `${J}px`,
      ...To
    },
    dir: Ie,
    ref: ce,
    onScroll: Y,
    onKeyDown: Zo,
    onCopy: Jo,
    onPaste: ei,
    "data-testid": A,
    "data-cy": R,
    children: [
      /* @__PURE__ */ ie(Nn, {
        value: No,
        children: [/* @__PURE__ */ v(Hn, {
          value: Xo,
          children: /* @__PURE__ */ ie(Fn, {
            value: Ao,
            children: [Array.from({ length: rn }, (w, p) => /* @__PURE__ */ v(La, {
              rowIdx: p + 1,
              level: -rn + p,
              iterateOverViewportColumnsForRow: wt,
              activeCellIdx: G.rowIdx === Fe + p ? G.idx : void 0,
              setPosition: tr
            }, p)), /* @__PURE__ */ v(Na, {
              headerRowClass: ne,
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
        }), r.length === 0 && Me ? Me : /* @__PURE__ */ ie(it, { children: [
          o == null ? void 0 : o.map((w, p) => {
            const M = Le + 1 + p, $ = on + 1 + p, L = G.rowIdx === $;
            return /* @__PURE__ */ v(lr, {
              "aria-rowindex": M,
              rowIdx: $,
              gridRowStart: M,
              row: w,
              top: Ft + q * p,
              bottom: void 0,
              iterateOverViewportColumnsForRow: wt,
              activeCellIdx: L ? G.idx : void 0,
              isTop: !0,
              setActivePosition: ln,
              isTreeGrid: ut
            }, p);
          }),
          /* @__PURE__ */ v(Ln, {
            value: qo,
            children: gi()
          }),
          i == null ? void 0 : i.map((w, p) => {
            const M = Te + r.length + p + 1, $ = r.length + p, L = G.rowIdx === $, j = Je > zt ? Q - q * (ke - p) : void 0, ae = j === void 0 ? q * (ke - 1 - p) : void 0;
            return /* @__PURE__ */ v(lr, {
              "aria-rowindex": Kn - ke + p + 1,
              rowIdx: $,
              gridRowStart: M,
              row: w,
              top: j,
              bottom: ae,
              iterateOverViewportColumnsForRow: wt,
              activeCellIdx: L ? G.idx : void 0,
              isTop: !1,
              setActivePosition: ln,
              isTreeGrid: ut
            }, p);
          })
        ] })]
      }),
      Qe > -1 && ar(Io, Jr, Ga),
      Ge > -1 && ar(Eo, eo, ja),
      ui(),
      Li(er),
      Oo
    ]
  });
}
function dr(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
function Za({ id: e, groupKey: t, childRows: n, isExpanded: r, isCellActive: o, column: i, row: a, groupColumnIndex: s, isGroupByColumn: l, toggleGroup: c }) {
  var f;
  const { tabIndex: g, childTabIndex: h, onFocus: y } = Rt(o);
  function b() {
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
    onClick: m ? b : void 0,
    onFocus: y,
    children: (!l || m) && ((f = i.renderGroupCell) == null ? void 0 : f.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: h,
      toggleGroup: b
    }))
  }, i.key);
}
var Ja = _e(Za);
const es = "rdg-group-row rdg-7-0-0-beta-60-e74a2be3";
function ts({ className: e, row: t, rowIdx: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, isRowSelected: i, setActivePosition: a, gridRowStart: s, groupBy: l, toggleGroup: c, ...g }) {
  const h = o === -1;
  let y = t.level;
  function b() {
    a({
      rowIdx: n,
      idx: -1
    }, { shouldFocus: !0 });
  }
  return /* @__PURE__ */ v(Jt, {
    value: K(() => ({
      isRowSelectionDisabled: !1,
      isRowSelected: i
    }), [i]),
    children: /* @__PURE__ */ v("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      tabIndex: h ? 0 : -1,
      className: $e(Wn, es, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, h && "rdg-row-active", e),
      onMouseDown: b,
      style: { gridRowStart: s },
      ...g,
      children: r(o).map(([m, f], x) => (x === 0 && m.key === "rdg-select-column" && (y += 1), /* @__PURE__ */ v(Ja, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellActive: f,
        column: m,
        row: t,
        groupColumnIndex: y,
        toggleGroup: c,
        isGroupByColumn: l.includes(m.key)
      }, m.key))).toArray()
    })
  });
}
var ns = _e(ts);
function id({ columns: e, rows: t, rowHeight: n, rowKeyGetter: r, onCellKeyDown: o, onCellCopy: i, onCellPaste: a, onRowsChange: s, selectedRows: l, onSelectedRowsChange: c, renderers: g, groupBy: h, rowGrouper: y, expandedGroupIds: b, onExpandedGroupIdsChange: m, groupIdGetter: f, ...x }) {
  var Ne, Ce, Re;
  const d = Et(), u = (g == null ? void 0 : g.renderRow) ?? (d == null ? void 0 : d.renderRow) ?? Qr, I = 1 + (((Ne = x.topSummaryRows) == null ? void 0 : Ne.length) ?? 0), { leftKey: S, rightKey: O } = Mn(x.direction), P = ge(xe), C = f ?? rs, { columns: N, groupBy: Y } = K(() => {
    const A = e.toSorted(({ key: T }, { key: z }) => T === "rdg-select-column" ? -1 : z === "rdg-select-column" ? 1 : h.includes(T) ? h.includes(z) ? h.indexOf(T) - h.indexOf(z) : -1 : h.includes(z) ? 1 : 0), R = [];
    for (const [T, z] of A.entries()) h.includes(z.key) && (R.push(z.key), A[T] = {
      ...z,
      frozen: !0,
      renderCell: () => null,
      renderGroupCell: z.renderGroupCell ?? Vi,
      editable: !1
    });
    return {
      columns: A,
      groupBy: R
    };
  }, [e, h]), [F, _] = K(() => {
    if (Y.length === 0) return [void 0, t.length];
    const A = (R, [T, ...z], V) => {
      let J = 0;
      const q = {};
      for (const [ue, we] of Object.entries(y(R, T))) {
        const [pe, ye] = z.length === 0 ? [we, we.length] : A(we, z, V + J + 1);
        q[ue] = {
          childRows: we,
          childGroups: pe,
          startRowIndex: V + J
        }, J += ye + 1;
      }
      return [q, J];
    };
    return A(t, Y, 0);
  }, [
    Y,
    y,
    t
  ]), [W, B] = K(() => {
    const A = /* @__PURE__ */ new Set();
    if (!F) return [t, z];
    const R = [], T = (V, J, q) => {
      if (os(V)) {
        R.push(...V);
        return;
      }
      Object.keys(V).forEach((ue, we, pe) => {
        const ye = C(ue, J), Me = b.has(ye), { childRows: De, childGroups: Ie, startRowIndex: ce } = V[ue], be = {
          id: ye,
          parentId: J,
          groupKey: ue,
          isExpanded: Me,
          childRows: De,
          level: q,
          posInSet: we,
          startRowIndex: ce,
          setSize: pe.length
        };
        R.push(be), A.add(be), Me && T(Ie, ye, q + 1);
      });
    };
    return T(F, void 0, 0), [R, z];
    function z(V) {
      return A.has(V);
    }
  }, [
    b,
    F,
    t,
    C
  ]), ee = K(() => typeof n == "function" ? (A) => B(A) ? n({
    type: "GROUP",
    row: A
  }) : n({
    type: "ROW",
    row: A
  }) : n, [B, n]), k = X((A) => {
    const R = W.indexOf(A);
    for (let T = R - 1; T >= 0; T--) {
      const z = W[T];
      if (B(z) && (!B(A) || A.parentId === z.id)) return [z, T];
    }
  }, [B, W]), D = X((A) => {
    if (B(A)) return A.id;
    if (typeof r == "function") return r(A);
    const R = k(A);
    if (R !== void 0) {
      const { startRowIndex: T, childRows: z } = R[0];
      return T + z.indexOf(A) + 1;
    }
    return W.indexOf(A);
  }, [
    k,
    B,
    r,
    W
  ]), E = K(() => {
    if (l == null) return null;
    xt(r);
    const A = new Set(l);
    for (const R of W) B(R) && R.childRows.every((T) => l.has(r(T))) && A.add(R.id);
    return A;
  }, [
    B,
    r,
    l,
    W
  ]);
  function H(A) {
    if (!c) return;
    xt(r);
    const R = new Set(l);
    for (const T of W) {
      const z = D(T);
      if (E != null && E.has(z) && !A.has(z)) if (B(T)) for (const V of T.childRows) R.delete(r(V));
      else R.delete(z);
      else if (!(E != null && E.has(z)) && A.has(z)) if (B(T)) for (const V of T.childRows) R.add(r(V));
      else R.add(z);
    }
    c(R);
  }
  function U(A, R) {
    if (o == null || o(A, R), R.isGridDefaultPrevented() || A.mode === "EDIT") return;
    const { column: T, rowIdx: z, setActivePosition: V } = A, J = (T == null ? void 0 : T.idx) ?? -1, q = W[z];
    if (B(q) && (J === -1 && (R.key === S && q.isExpanded || R.key === O && !q.isExpanded) && (R.preventDefault(), R.preventGridDefault(), xe(q.id)), J === -1 && R.key === S && !q.isExpanded && q.level !== 0)) {
      const ue = k(q);
      ue !== void 0 && (R.preventGridDefault(), V({
        idx: J,
        rowIdx: ue[1]
      }));
    }
  }
  function ne({ row: A, column: R }, T) {
    B(A) || i == null || i({
      row: A,
      column: R
    }, T);
  }
  function fe({ row: A, column: R }, T) {
    return B(A) ? A : a({
      row: A,
      column: R
    }, T);
  }
  function Ue(A, { indexes: R, column: T }) {
    if (!s) return;
    const z = [...t], V = [];
    for (const J of R) {
      const q = t.indexOf(W[J]);
      z[q] = A[J], V.push(q);
    }
    s(z, {
      indexes: V,
      column: T
    });
  }
  function xe(A) {
    const R = new Set(b);
    R.has(A) ? R.delete(A) : R.add(A), m(R);
  }
  function Pe(A, { row: R, rowClass: T, onCellMouseDown: z, onCellClick: V, onCellDoubleClick: J, onCellContextMenu: q, onRowChange: ue, draggedOverCellIdx: we, activeCellEditor: pe, isRowSelectionDisabled: ye, isTreeGrid: Me, ...De }) {
    if (B(R)) {
      const { startRowIndex: be } = R;
      return /* @__PURE__ */ v(ns, {
        ...De,
        "aria-rowindex": I + be + 1,
        row: R,
        groupBy: Y,
        toggleGroup: P
      }, A);
    }
    let Ie = De["aria-rowindex"];
    const ce = k(R);
    if (ce !== void 0) {
      const { startRowIndex: be, childRows: qe } = ce[0], Ve = qe.indexOf(R);
      Ie = be + I + Ve + 2;
    }
    return u(A, {
      ...De,
      "aria-rowindex": Ie,
      row: R,
      rowClass: T,
      onCellMouseDown: z,
      onCellClick: V,
      onCellDoubleClick: J,
      onCellContextMenu: q,
      onRowChange: ue,
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
    columns: N,
    rows: W,
    rowHeight: ee,
    rowKeyGetter: D,
    onRowsChange: Ue,
    selectedRows: E,
    onSelectedRowsChange: H,
    onCellKeyDown: U,
    onCellCopy: ne,
    onCellPaste: a ? fe : void 0,
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
function ad({ row: e, column: t, onRowChange: n, onClose: r }) {
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
  "--rdg-scrollbar-thumb-hover-background": re.primary500,
  "--rdg-scrollbar-track-hover-background": re.gray200,
  "--rdg-checkbox-color": re.primary500,
  "--rdg-loading-color": re.primary500
}, cs = me.div`
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

    /* The gradient rdg paints beside each pinned column is shown deliberately, and provisionally.
       Restyling it has no API either:
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
`, Mt = Ye.createContext({
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
  const [h, y] = Ye.useState(0), [b, m] = Ye.useState(
    null
  ), [f, x] = Ye.useState([]), d = X(
    (C) => {
      us(i, C), y((N) => N + 1), x(C);
    },
    [i]
  ), u = JSON.stringify(r ?? []), I = K(
    () => JSON.parse(u),
    [u]
  );
  Xe(() => {
    d(ds(i) ?? I);
  }, [i, I, d]);
  const S = X(
    (C) => {
      d(C), a == null || a(C);
    },
    [d, a]
  ), O = X(() => {
    S(I), s == null || s();
  }, [S, I, s]), P = K(
    () => e.filter((C) => !(n != null && n.includes(C.key))),
    [e, n]
  );
  return /* @__PURE__ */ v(
    Mt.Provider,
    {
      value: {
        gridKey: `data-grid-${h}`,
        chooserAnchor: b,
        setChooserAnchor: m,
        columns: P,
        hiddenColumn: f,
        setHiddenColumn: S,
        resetHiddenColumns: O,
        resetLabel: g,
        reorderColumns: l,
        reorderAnnouncement: c,
        enabled: o
      },
      children: t
    }
  );
}, zn = me(bi)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: var(--rdg-checkbox-color, ${re.primary500});
    }
`, hs = me(Ar)`
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
`, gs = me.span`
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
`, ms = me.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`, ws = () => /* @__PURE__ */ v("svg", { width: "10", height: "16", viewBox: "0 0 10 16", "aria-hidden": "true", focusable: "false", children: [3, 8, 13].map((e) => /* @__PURE__ */ ie("g", { children: [
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
}, sd = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = ct(Mt), n = Ye.useRef(null), r = X(() => {
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
  } = ct(Mt), [c, g] = se(null), [h, y] = se(null), [b, m] = se(""), f = K(() => e.map((k) => k.key), [e]), x = c ?? f, d = K(() => new Map(e.map((k) => [k.key, k])), [e]), u = de(/* @__PURE__ */ new Map()), I = de(/* @__PURE__ */ new Map()), S = de([]), O = de(null), P = de(null);
  Xe(() => {
    g((k) => k && ps(k, f) ? null : k);
  }, [f]);
  const C = X(() => {
    o(null), g(null), m("");
  }, [o]), N = X(() => {
    i(), o(null), g(null);
  }, [i, o]), Y = X(
    (k) => () => {
      const D = t.indexOf(k);
      n(
        D === -1 ? [...t, k] : t.filter((E) => E !== k)
      );
    },
    [t, n]
  ), F = X(
    (k, D) => {
      var U;
      const E = String(((U = d.get(k)) == null ? void 0 : U.name) ?? k), H = D.indexOf(k) + 1;
      m(
        l ? l(E, H, D.length) : `${E} ${H}/${D.length}`
      );
    },
    [d, l]
  ), _ = X(
    (k) => (D) => {
      !s || D.button !== 0 || (D.preventDefault(), D.stopPropagation(), D.currentTarget.setPointerCapture(D.pointerId), S.current = x, O.current = {
        key: k,
        moved: !1,
        pointerId: D.pointerId,
        grip: D.currentTarget
      }, y(k));
    },
    [x, s]
  ), W = X(() => {
    var D;
    const k = O.current;
    if (k && (O.current = null, y(null), k.moved)) {
      s == null || s(S.current), F(k.key, S.current), (D = P.current) == null || D.call(P);
      const E = (U) => U.stopPropagation(), H = () => {
        window.removeEventListener("click", E, !0), window.removeEventListener("pointerdown", H, !0), window.removeEventListener("keydown", H, !0), P.current = null;
      };
      P.current = H, window.addEventListener("click", E, !0), window.addEventListener("pointerdown", H, !0), window.addEventListener("keydown", H, !0);
    }
  }, [F, s]);
  Xe(() => () => {
    var k;
    return (k = P.current) == null ? void 0 : k.call(P);
  }, []), Xe(() => {
    if (!h)
      return;
    const k = (E) => {
      const H = O.current;
      if (!H || E.pointerId !== H.pointerId)
        return;
      if (H.grip.isConnected && !H.grip.hasPointerCapture(H.pointerId))
        try {
          H.grip.setPointerCapture(H.pointerId);
        } catch {
        }
      const U = S.current.indexOf(H.key), ne = ys(E.clientY, S.current, u.current);
      U === -1 || ne === -1 || ne === U || (H.moved = !0, S.current = ur(S.current, U, ne), g(S.current));
    }, D = (E) => {
      var H;
      E.pointerId === ((H = O.current) == null ? void 0 : H.pointerId) && W();
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", D), window.addEventListener("pointercancel", D), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", D), window.removeEventListener("pointercancel", D);
    };
  }, [h, W]);
  const B = X(
    (k) => (D) => {
      if (!s || !D.altKey)
        return;
      const E = D.key === "ArrowUp" ? -1 : D.key === "ArrowDown" ? 1 : 0;
      if (!E)
        return;
      D.preventDefault(), D.stopPropagation();
      const H = x.indexOf(k), U = H + E;
      if (H === -1 || U < 0 || U >= x.length)
        return;
      const ne = ur(x, H, U);
      S.current = ne, g(ne), s(ne), F(k, ne);
    },
    [F, x, s]
  ), ee = X((k) => {
    const D = I.current.get(k);
    if (D)
      return D;
    const E = (H) => {
      H ? u.current.set(k, H) : u.current.delete(k);
    };
    return I.current.set(k, E), E;
  }, []);
  return /* @__PURE__ */ ie(it, { children: [
    /* @__PURE__ */ ie(
      pi,
      {
        id: "column-visibility-menu",
        anchorReference: "anchorPosition",
        anchorPosition: r ?? void 0,
        transformOrigin: { vertical: "top", horizontal: "right" },
        open: r !== null,
        onClose: C,
        children: [
          x.map((k) => {
            const D = d.get(k);
            return D ? /* @__PURE__ */ ie(
              hs,
              {
                ref: ee(k),
                "data-dragging": h === k,
                "aria-keyshortcuts": s ? "Alt+ArrowUp Alt+ArrowDown" : void 0,
                onKeyDown: B(k),
                onClick: Y(k),
                children: [
                  /* @__PURE__ */ v(zn, { checked: !t.includes(k) }),
                  D.name,
                  s && /* @__PURE__ */ v(
                    gs,
                    {
                      "aria-hidden": "true",
                      onPointerDown: _(k),
                      onClick: (E) => E.stopPropagation(),
                      children: /* @__PURE__ */ v(ws, {})
                    }
                  )
                ]
              },
              k
            ) : null;
          }),
          a && /* @__PURE__ */ v(yi, {}),
          a && /* @__PURE__ */ v(Ar, { onClick: N, children: a })
        ]
      }
    ),
    r !== null && /* @__PURE__ */ v(ms, { role: "status", "aria-live": "polite", children: b })
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
  const [i, a] = se(n ?? []), s = de(n);
  s.current = n;
  const l = X((b) => {
    a(b.length ? b : s.current ?? []);
  }, []), c = r ?? i, g = c.map((b) => `${String(b.columnKey)}:${b.direction}`).join(), h = K(() => c, [g]);
  return {
    sortedRows: K(() => {
      if (!o || h.length === 0) return t;
      const b = h.map((m) => {
        const f = e.find((x) => x.key === m.columnKey);
        return {
          compare: xs(
            m.columnKey,
            f == null ? void 0 : f.type,
            f == null ? void 0 : f.sortComparator,
            f == null ? void 0 : f.getColumnValue
          ),
          descending: m.direction === "DESC"
        };
      });
      return [...t].sort((m, f) => {
        for (const x of b) {
          const d = x.compare(m, f);
          if (d !== 0)
            return x.descending ? -d : d;
        }
        return 0;
      });
    }, [t, h, o, e]),
    sortColumns: i,
    setSortedColumns: l
  };
}, Dt = 40, Ds = 200, ks = "rdg-row-expanded", Ts = "rdg-detail-row", ro = "__rdgDetailParent", Ss = "rdg-detail:", Ps = (e, t) => ({ id: `${t}${e.id}`, [ro]: e }), Yn = (e) => e[ro], Xt = (e) => Yn(e) !== void 0, Is = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  let r = Ss;
  for (; e.some((o) => o.id.startsWith(r)); )
    r += "-";
  return e.flatMap((o) => n.has(o.id) ? [o, Ps(o, r)] : [o]);
}, Es = me.button`
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
`, Rs = () => /* @__PURE__ */ v("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ v("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), oo = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ v(
    Es,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), io(t, e.id);
      },
      children: /* @__PURE__ */ v(Rs, {})
    }
  );
}, io = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, Ms = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', Os = (e, t, n, r = []) => Xt(e) || t === As || t === ao || r.includes(t) ? !1 : !(n instanceof Element && n.closest(Ms)), fr = me.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, Ns = me.span`
    display: inline-block;
    flex: 0 0 ${Dt - 16}px;
`, As = _r, ao = "rdg-expander-column", Ls = (e) => ({
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
      return Xt(l.row) ? null : (c = s.renderCell) == null ? void 0 : c.call(s, l);
    }
  } : {
    ...s,
    colSpan: (l) => {
      var c;
      return l.type === "ROW" && Xt(l.row) ? a : (c = s.colSpan) == null ? void 0 : c.call(s, l);
    },
    renderCell: (l) => {
      var g;
      const c = Yn(l.row);
      return c ? t(c) : ((g = s.renderCell) == null ? void 0 : g.call(s, l)) ?? null;
    }
  });
}, Hs = (e, t, n) => (r) => {
  const o = Yn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, Ws = (e, t = []) => Xt(e) ? Ts : t.includes(e.id) ? ks : "", co = me(xi)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--rdg-color, ${re.gray800});
    padding: 0 !important;

    .MuiInputBase-root {
        padding: 0 !important;
    }

    & input {
        padding: 0.5rem !important;
        border: solid 1px var(--rdg-border-color, ${re.gray400});
        border-radius: 4px;
        color: var(--rdg-color, ${re.gray800});
    }

    & label,
    & label.Mui-focused {
        color: var(--rdg-color, ${re.gray800});
    }

    fieldset {
        display: none;
    }
`, $n = Ye.createContext({
  filters: {},
  setFilters: () => {
  }
}), zs = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Ye.useState({});
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
}, gn = (e) => e.stopPropagation(), Ys = ({ options: e, renderInput: t, ...n }) => {
  const r = K(
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
}, $s = me(vi)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Vt = (e) => e.stopPropagation(), mn = ({ children: e, ...t }) => /* @__PURE__ */ ie($s, { children: [
  Ur(t),
  e
] }), Bs = ({
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
    Ys,
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
}, _s = (e) => (t) => /* @__PURE__ */ v(Bs, { col: e, ...t }), Us = {
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
}, Vs = (e, t, n) => {
  let r;
  const o = Us[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function wn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Gs = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, js = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Xs = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, qs = {
  date: wn({
    formats: Gs,
    defaultWidth: "full"
  }),
  time: wn({
    formats: js,
    defaultWidth: "full"
  }),
  dateTime: wn({
    formats: Xs,
    defaultWidth: "full"
  })
}, Ks = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Qs = (e, t, n, r) => Ks[e];
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
const Zs = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Js = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ec = {
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
}, tc = {
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
}, nc = {
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
}, rc = {
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
}, oc = (e, t) => {
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
}, ic = {
  ordinalNumber: oc,
  era: bt({
    values: Zs,
    defaultWidth: "wide"
  }),
  quarter: bt({
    values: Js,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bt({
    values: ec,
    defaultWidth: "wide"
  }),
  day: bt({
    values: tc,
    defaultWidth: "wide"
  }),
  dayPeriod: bt({
    values: nc,
    defaultWidth: "wide",
    formattingValues: rc,
    defaultFormattingWidth: "wide"
  })
};
function vt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? sc(s, (h) => h.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      ac(s, (h) => h.test(a))
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
function ac(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function sc(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function cc(e) {
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
const lc = /^(\d+)(th|st|nd|rd)?/i, dc = /\d+/i, uc = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fc = {
  any: [/^b/i, /^(a|c)/i]
}, hc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, gc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mc = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wc = {
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
}, pc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, yc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, bc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, vc = {
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
}, xc = {
  ordinalNumber: cc({
    matchPattern: lc,
    parsePattern: dc,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: vt({
    matchPatterns: uc,
    defaultMatchWidth: "wide",
    parsePatterns: fc,
    defaultParseWidth: "any"
  }),
  quarter: vt({
    matchPatterns: hc,
    defaultMatchWidth: "wide",
    parsePatterns: gc,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: vt({
    matchPatterns: mc,
    defaultMatchWidth: "wide",
    parsePatterns: wc,
    defaultParseWidth: "any"
  }),
  day: vt({
    matchPatterns: pc,
    defaultMatchWidth: "wide",
    parsePatterns: yc,
    defaultParseWidth: "any"
  }),
  dayPeriod: vt({
    matchPatterns: bc,
    defaultMatchWidth: "any",
    parsePatterns: vc,
    defaultParseWidth: "any"
  })
}, Cc = {
  code: "en-US",
  formatDistance: Vs,
  formatLong: qs,
  formatRelative: Qs,
  localize: ic,
  match: xc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let Dc = {};
function Ot() {
  return Dc;
}
const lo = 6048e5, kc = 864e5, hr = Symbol.for("constructDateFrom");
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
function Tc(e, ...t) {
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
function Sc(e, t, n) {
  const [r, o] = Tc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = mr(r), a = mr(o), s = +i - gr(i), l = +a - gr(a);
  return Math.round((s - l) / kc);
}
function Pc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ic(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return Sc(n, Pc(n)) + 1;
}
function Pt(e, t) {
  var s, l, c, g;
  const n = Ot(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((g = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : g.weekStartsOn) ?? 0, o = Se(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function qt(e, t) {
  return Pt(e, { ...t, weekStartsOn: 1 });
}
function uo(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Be(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = qt(o), a = Be(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = qt(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function Ec(e, t) {
  const n = uo(e, t), r = Be(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), qt(r);
}
function Rc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +qt(n) - +Ec(n);
  return Math.round(r / lo) + 1;
}
function fo(e, t) {
  var g, h, y, b;
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ot(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (g = t == null ? void 0 : t.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((b = (y = o.locale) == null ? void 0 : y.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, a = Be((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = Pt(a, t), l = Be((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
  const c = Pt(l, t);
  return +n >= +s ? r + 1 : +n >= +c ? r : r - 1;
}
function Mc(e, t) {
  var s, l, c, g;
  const n = Ot(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((g = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = fo(e, t), i = Be((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), Pt(i, t);
}
function Oc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +Pt(n, t) - +Mc(n, t);
  return Math.round(r / lo) + 1;
}
function Z(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const We = {
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
    return We.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = fo(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return Z(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : Z(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = uo(e);
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
        return We.M(e, t);
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
    const o = Oc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Z(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Rc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Z(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : We.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Ic(e);
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
    return We.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : We.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : We.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : We.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return We.S(e, t);
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
function yr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Z(Math.abs(e) / 60, 2) : je(e, t);
}
function je(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Z(Math.trunc(r / 60), 2), i = Z(r % 60, 2);
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
}, Nc = (e, t) => {
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
}, Ac = {
  p: ho,
  P: Nc
}, Lc = /^D+$/, Fc = /^Y+$/, Hc = ["D", "DD", "YY", "YYYY"];
function Wc(e) {
  return Lc.test(e);
}
function zc(e) {
  return Fc.test(e);
}
function Yc(e, t, n) {
  const r = $c(e, t, n);
  if (console.warn(r), Hc.includes(e)) throw new RangeError(r);
}
function $c(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function go(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function mo(e) {
  return !(!go(e) && typeof e != "number" || isNaN(+Se(e)));
}
const Bc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _c = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Uc = /^'([^]*?)'?$/, Vc = /''/g, Gc = /[a-zA-Z]/;
function jc(e, t, n) {
  var g, h, y, b, m, f, x, d;
  const r = Ot(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Cc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((f = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : f.weekStartsOn) ?? r.weekStartsOn ?? ((d = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : d.weekStartsOn) ?? 0, s = Se(e, n == null ? void 0 : n.in);
  if (!mo(s))
    throw new RangeError("Invalid time value");
  let l = t.match(_c).map((u) => {
    const I = u[0];
    if (I === "p" || I === "P") {
      const S = Ac[I];
      return S(u, o.formatLong);
    }
    return u;
  }).join("").match(Bc).map((u) => {
    if (u === "''")
      return { isToken: !1, value: "'" };
    const I = u[0];
    if (I === "'")
      return { isToken: !1, value: Xc(u) };
    if (wr[I])
      return { isToken: !0, value: u };
    if (I.match(Gc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + I + "`"
      );
    return { isToken: !1, value: u };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return l.map((u) => {
    if (!u.isToken) return u.value;
    const I = u.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && zc(I) || !(n != null && n.useAdditionalDayOfYearTokens) && Wc(I)) && Yc(I, t, String(e));
    const S = wr[I[0]];
    return S(s, I, o.localize, c);
  }).join("");
}
function Xc(e) {
  const t = e.match(Uc);
  return t ? t[1].replace(Vc, "'") : e;
}
function qc() {
  return Object.assign({}, Ot());
}
function vr(e, t, n) {
  const r = qc(), o = Zc(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Kc(o, t) : Qc(o, t);
}
function Kc(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Qc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function Zc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Jc(e, t) {
  const n = ol(t);
  return "formatToParts" in n ? tl(n, e) : nl(n, e);
}
const el = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function tl(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = el[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function nl(e, t) {
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
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), rl = xr === "06/25/2014, 00:00:00" || xr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function ol(e) {
  return pn[e] || (pn[e] = rl ? new Intl.DateTimeFormat("en-US", {
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
const Cr = 36e5, il = 6e4, yn = {
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
    return Dr(o, a) ? (i = Math.abs(o) * Cr + a * il, r[1] === "+" ? -i : i) : NaN;
  }
  if (cl(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : al(t), s = Pn(a, e);
    return -(n ? s : sl(t, s, e));
  }
  return NaN;
}
function al(e) {
  return wo(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Pn(e, t) {
  const n = Jc(e, t), r = wo(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function sl(e, t, n) {
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
function cl(e) {
  if (kr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), kr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const ll = 60 * 1e3, dl = {
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
        return "GMT" + ul(r, ":");
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
  const n = e ? Bn(e, t, !0) / ll : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function Kt(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function rt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Kt(Math.floor(r / 60), 2), i = Kt(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function Tr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Kt(Math.abs(e) / 60, 2) : rt(e, t);
}
function ul(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Kt(i, 2);
}
function Sr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const fl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, vn = 36e5, Pr = 6e4, hl = 2, he = {
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
  timeZone: fl
};
function po(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? hl : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = gl(e), { year: o, restDateString: i } = ml(r.date, n), a = wl(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let l = 0, c;
    if (r.time && (l = pl(r.time), l === null || isNaN(l)))
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
function gl(e) {
  const t = {};
  let n = he.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = he.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = he.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function ml(e, t) {
  if (e) {
    const n = he.YYY[t], r = he.YYYYY[t];
    let o = he.YYYY.exec(e) || r.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = he.YY.exec(e) || n.exec(e), o) {
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
function wl(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let i = he.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, Er(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = he.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return vl(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = he.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return Er(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = he.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, Rr(o) ? Ir(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = he.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return Rr(o, a) ? Ir(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function pl(e) {
  let t, n, r = he.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), xn(t) ? t % 24 * vn : NaN;
  if (r = he.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), xn(t, n) ? t % 24 * vn + n * Pr : NaN;
  if (r = he.HHMMSS.exec(e), r) {
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
const yl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], bl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
    if (r && n > bl[t] || !r && n > yl[t])
      return !1;
  }
  return !0;
}
function vl(e, t) {
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
const xl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function Cl(e, t, n = {}) {
  t = String(t);
  const r = t.match(xl);
  if (r) {
    const o = po(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), l = i[s - 1] === "'", c = i.replace(a, "'" + dl[a[0]](o, a, n) + "'");
      return l ? c.substring(0, s - 1) + c.substring(s + 1) : c;
    }, t);
  }
  return jc(e, t, n);
}
function Dl(e, t, n) {
  e = po(e, n);
  const r = Bn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function kl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, Cl(Dl(e, t, { timeZone: r.timeZone }), n, r);
}
var bo = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(bo || {});
const Tl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !go(e) && typeof e == "string" ? new Date(e) : e;
  return mo(r) ? kl(e, n, t) : "--";
}, Mr = (e) => e.trim().toLowerCase(), Sl = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: l, hiddenColumn: c } = ct(Mt), g = X((h) => {
    const y = () => {
      if (h.renderCell)
        return h.renderCell;
      if (h.type === ot.DATE)
        return ({ row: f }) => {
          var x, d;
          return Tl(
            f[h.key],
            ((x = h.dateOptions) == null ? void 0 : x.formatDate) ?? bo.DATE_WITH_TIME,
            (d = h.dateOptions) == null ? void 0 : d.timeZone
          );
        };
    }, b = () => h.renderHeaderCell ? h.renderHeaderCell : _s(h), m = {
      ...h,
      renderCell: y(),
      renderHeaderCell: b()
    };
    return h.frozenRight && (m.frozen = "end"), m;
  }, []);
  return K(() => {
    const h = [];
    if (t && !n && h.push(Ls(t)), n) {
      const y = (r ?? []).map((S) => S.id), b = new Set(o ?? []), m = new Set(y), f = y.filter((S) => b.has(S)).length, x = y.length > 0 && f === y.length, d = f > 0 && !x, u = (S) => {
        const O = (o ?? []).filter((P) => !m.has(P));
        return S ? [...O, ...y] : O;
      }, I = t ? 50 + Dt : 50;
      h.push({
        ...yt,
        width: I,
        minWidth: I,
        maxWidth: I,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ ie(fr, { children: [
          t && /* @__PURE__ */ v(Ns, { "aria-hidden": !0 }),
          a ? a({
            checked: x,
            indeterminate: d,
            "aria-label": s,
            onChange: (S) => i == null ? void 0 : i(u(S))
          }) : /* @__PURE__ */ v(
            zn,
            {
              checked: x,
              indeterminate: d,
              slotProps: { input: { "aria-label": s } },
              onChange: (S, O) => i == null ? void 0 : i(u(O))
            }
          )
        ] }),
        renderCell: t ? (S) => {
          var O;
          return /* @__PURE__ */ ie(fr, { children: [
            /* @__PURE__ */ v(oo, { row: S.row, expandable: t }),
            (O = yt.renderCell) == null ? void 0 : O.call(yt, S)
          ] });
        } : yt.renderCell
      });
    }
    return h.push(...e.map((y) => g(y))), l && c ? h.filter((y) => !c.includes(y.key)) : h;
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
var Pl = {
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
function Il(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return Pl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Cn(e) {
  var t = Il(e);
  return "".concat(t.value).concat(t.unit);
}
var El = function(e, t, n) {
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
}, Rl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, Ml = El("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Ol(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, l = s === void 0 ? {} : s, c = e.size, g = c === void 0 ? 15 : c, h = e.margin, y = h === void 0 ? 2 : h, b = Rl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), m = Qt({ display: "inherit" }, l), f = function(x) {
    return {
      backgroundColor: o,
      width: Cn(g),
      height: Cn(g),
      margin: Cn(y),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(Ml, " ").concat(0.75 / a, "s ").concat(x * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? _t.createElement(
    "span",
    Qt({ style: m }, b),
    _t.createElement("span", { style: f(1) }),
    _t.createElement("span", { style: f(2) }),
    _t.createElement("span", { style: f(3) })
  ) : null;
}
const Nl = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === St.TEXT && typeof n == "string" && typeof r == "string" ? Mr(n).includes(Mr(r)) : t === St.AUTOCOMPLETE ? n === r : !1, Al = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = ct($n);
  return K(() => n ? t.filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((l) => l.key === i);
      return s ? Nl({
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
}, Ll = me.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, Fl = me.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, Hl = [10, 25, 50, 100], Wl = ({
  currentPage: e,
  setCurrentPage: t,
  setPageSize: n,
  pageSize: r,
  totalCount: o,
  labels: i,
  totalLabel: a,
  rowsPerPageOptions: s = Hl
}) => {
  const l = X(
    (h, y) => {
      t(y);
    },
    [t]
  ), c = X(
    (h) => {
      n(parseInt(h.target.value, 10)), t(0);
    },
    [n, t]
  ), g = K(
    () => s.includes(r) ? s : [...s, r].sort((h, y) => h - y),
    [s, r]
  );
  return /* @__PURE__ */ ie(Ll, { children: [
    a ? /* @__PURE__ */ v(Fl, { children: a(o) }) : null,
    /* @__PURE__ */ v(
      Di,
      {
        labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ v("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
        labelDisplayedRows: ({ from: h, to: y, count: b }) => `${h}-${y} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${b}`,
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
};
var zl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(zl || {});
const Yl = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = se(0), [l, c] = se(e), g = n !== void 0, h = o !== void 0, y = g ? n : a, b = h ? o : l, m = X(
    (u) => {
      g || s(u), r == null || r(u);
    },
    [g, r]
  ), f = X(
    (u) => {
      h || c(u), i == null || i(u);
    },
    [h, i]
  ), x = X(() => {
    m(0), f(e);
  }, [m, f, e]), d = de(b);
  return Xe(() => {
    d.current !== b && (d.current = b, m(0));
  }, [b]), {
    currentPage: y,
    pageSize: b,
    defaultPageSize: e,
    setCurrentPage: m,
    setPageSize: f,
    resetPagination: x
  };
}, Or = 50, $l = me.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, Bl = me.div`
    background-color: ${({ $color: e }) => e};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, _l = Ye.memo(
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
), Ul = (e) => /* @__PURE__ */ v(_l, { ...e }), Vl = "Select all rows", Gl = ({
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
  selectAllLabel: h = Vl,
  noDataMessage: y,
  filters: b,
  setFilters: m,
  pagination: f,
  renderers: x,
  expandable: d,
  rowGestures: u,
  rowHeight: I,
  rowClass: S,
  onCellClick: O,
  onColumnResize: P,
  columnWidths: C,
  onColumnWidthsChange: N,
  ...Y
}) => {
  var be, qe, Ve;
  const { gridKey: F } = ct(Mt), { pageSize: _, currentPage: W, setCurrentPage: B, setPageSize: ee } = Yl(
    f == null ? void 0 : f.defaultPageSize,
    f == null ? void 0 : f.control
  ), k = (x == null ? void 0 : x.renderCheckbox) ?? Ul, D = { ...ss, ...e ?? {} }, E = D["--rdg-loading-color"] ?? re.primary500, H = Sl({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: d,
    selectionEnabled: l && !!g,
    selectableRows: n,
    selectedRows: c,
    onSelectedRowsChange: g,
    renderCheckbox: k,
    selectAllLabel: h
  }), U = K(
    () => H.map((Q) => Q.key).sort().join("|"),
    [H]
  ), ne = K(
    () => H.some((Q) => Q.filterEnabled),
    [H]
  ), fe = K(
    () => (f == null ? void 0 : f.enabled) && !f.remotePagination,
    [f]
  ), Ue = K(() => !m, [m]), xe = Al({
    columns: H,
    rows: n,
    enabled: Ue
  }), Pe = K(() => !i, [i]), Ne = s ?? Pe, {
    sortedRows: Ce,
    sortColumns: Re,
    setSortedColumns: A
  } = Cs({
    columns: H,
    rows: xe,
    defaultSortColumns: a,
    sortColumns: Pe ? void 0 : o,
    enabled: Ne
  }), R = K(() => {
    if (!fe)
      return W;
    const Q = Math.max(0, Math.ceil(xe.length / _) - 1);
    return Math.min(W, Q);
  }, [fe, W, _, xe.length]);
  Xe(() => {
    R !== W && B(R);
  }, [R, W, B]);
  const T = K(() => fe ? Ce.slice(R * _, (R + 1) * _) : Ce, [Ce, fe, R, _]), z = K(
    () => d ? Is(T, d.expandedIds) : T,
    [d, T]
  ), V = K(
    () => d ? Fs(H, d.renderDetail) : H,
    [d, H]
  ), J = X(
    (Q, te) => P == null ? void 0 : P(Q.key, te),
    [P]
  ), q = de(U);
  st(() => {
    if (q.current === U || (q.current = U, !C || !N))
      return;
    const Q = new Map([...C].filter(([, te]) => te.type === "resized"));
    Q.size !== C.size && N(Q);
  }, [U, C, N]);
  const { renderRow: ue, ...we } = x ?? {}, pe = de(void 0), ye = K(() => {
    if (ue)
      return (Q, te) => {
        var dt;
        const { iterateOverViewportColumnsForRow: le } = te;
        return ((dt = pe.current) == null ? void 0 : dt.iterate) !== le && (pe.current = {
          iterate: le,
          columns: [...le(void 0)].map(([Nt]) => Nt)
        }), ue(Q, {
          ...te,
          viewportColumns: pe.current.columns
        });
      };
  }, [ue]), Me = X(
    (Q, te) => {
      const le = [
        Ws(Q, d == null ? void 0 : d.expandedIds),
        te === 0 ? "first-row" : "",
        te === z.length - 1 ? "last-row" : ""
      ];
      return [S == null ? void 0 : S(Q, te), ...le].filter(Boolean).join(" ");
    },
    [z, d == null ? void 0 : d.expandedIds, S]
  ), De = X(
    (Q) => {
      u != null && u.onClick ? u.onClick(Q) : d && io(d, Q.id);
    },
    [u, d]
  ), Ie = X(
    (Q, te) => {
      if (O == null || O(Q, te), te.isGridDefaultPrevented() || !d && !(u != null && u.onClick))
        return;
      const le = window.getSelection();
      te.detail <= 1 && le && !le.isCollapsed && te.target instanceof Node && le.containsNode(te.target, !0) || Os(
        Q.row,
        Q.column.key,
        te.target,
        u == null ? void 0 : u.excludedColumns
      ) && De(Q.row);
    },
    [O, d, u, De]
  ), ce = !(f != null && f.remotePagination);
  return Xe(() => {
    if (!ce)
      return;
    const Q = new Set(n.map((le) => le.id)), te = c == null ? void 0 : c.filter((le) => Q.has(le));
    (te == null ? void 0 : te.length) !== (c == null ? void 0 : c.length) && (g == null || g(te ?? []));
  }, [n, c, ce, g]), /* @__PURE__ */ ie(cs, { $pagination: !!(f != null && f.enabled), children: [
    /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v(
      no,
      {
        selectedRows: c ? new Set(c) : void 0,
        onSelectedRowsChange: (Q) => {
          g == null || g(Array.from(Q));
        },
        rowKeyGetter: (Q) => Q.id,
        rows: z,
        onSortColumnsChange: Pe ? A : i,
        sortColumns: Pe ? Re : o,
        columns: V,
        rowClass: Me,
        headerRowHeight: ne ? 70 : void 0,
        onCellClick: Ie,
        onColumnResize: P ? J : void 0,
        columnWidths: C,
        onColumnWidthsChange: N,
        ...Y,
        rowHeight: d ? Hs(
          I,
          Or,
          d.detailHeight ?? Ds
        ) : I ?? Or,
        renderers: {
          renderCheckbox: k,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...y != null && !t ? {
            noRowsFallback: /* @__PURE__ */ v("div", { className: "rdg-no-data", children: y })
          } : {},
          ...we,
          renderRow: ye
        },
        style: D
      },
      `${F}:${U}`
    ) }),
    f != null && f.enabled ? /* @__PURE__ */ v(
      Wl,
      {
        ...(f == null ? void 0 : f.remotePagination) ?? {
          currentPage: R,
          setCurrentPage: B,
          pageSize: _,
          setPageSize: ee,
          totalCount: xe.length
        },
        labels: f.labels ?? ((be = f.remotePagination) == null ? void 0 : be.labels),
        totalLabel: f.totalLabel ?? ((qe = f.remotePagination) == null ? void 0 : qe.totalLabel),
        rowsPerPageOptions: f.rowsPerPageOptions ?? ((Ve = f.remotePagination) == null ? void 0 : Ve.rowsPerPageOptions)
      }
    ) : null,
    t ? /* @__PURE__ */ ie($l, { children: [
      /* @__PURE__ */ v(Bl, { $color: E }),
      /* @__PURE__ */ v(Ol, { color: E })
    ] }) : null,
    /* @__PURE__ */ v(bs, {})
  ] });
}, cd = ({
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
    resetLabel: h
  } = {},
  ...y
}) => /* @__PURE__ */ v(zs, { filters: e, setFilters: t, children: /* @__PURE__ */ v(
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
    resetLabel: h,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ v(Gl, { ...y, columns: n, filters: e, setFilters: t })
  }
) });
export {
  ma as Cell,
  ot as ColumnType,
  bo as DATE_FORMAT,
  zl as DEFAULT_PAGE_SIZES,
  cd as DataGrid,
  zn as DataGridCheckbox,
  Nn as DataGridDefaultRenderersContext,
  ao as EXPANDER_COLUMN_KEY,
  oo as ExpanderToggle,
  St as FilterType,
  Ha as Row,
  As as SELECTION_COLUMN_KEY,
  _r as SELECT_COLUMN_KEY,
  An as SelectCellFormatter,
  yt as SelectColumn,
  Gi as ToggleGroup,
  id as TreeDataGrid,
  sd as VisibilityColumnChooser,
  bs as VisibilityMenu,
  Os as clickBelongsToRow,
  Tl as convertDate,
  ss as defaultTheme,
  Hs as detailAwareRowHeight,
  Ws as detailRowClass,
  Mr as getStringToCompare,
  Xt as isDetailRow,
  Bi as renderCheckbox,
  Ur as renderHeaderCell,
  Ya as renderSortIcon,
  $a as renderSortPriority,
  ad as renderTextEditor,
  Vi as renderToggleGroup,
  ji as renderValue,
  re as taktikTheme,
  sa as useHeaderRowSelection,
  Yl as usePagination,
  Xr as useRowSelection,
  Fs as withDetailRendering,
  Is as withDetailRows
};
