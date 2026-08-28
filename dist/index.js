import { jsx as b, jsxs as re, Fragment as nt } from "react/jsx-runtime";
import * as Wt from "react";
import Me, { createContext as St, use as xt, memo as $e, useMemo as Q, useCallback as q, useState as ae, useRef as fe, useLayoutEffect as ot, useImperativeHandle as wi, useSyncExternalStore as Nr, useEffectEvent as pi, useEffect as Ge, useContext as it } from "react";
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
function Ti({ moveUp: e, moveNext: t, cellNavigationMode: n, columns: r, colSpanColumns: o, rows: i, topSummaryRows: a, bottomSummaryRows: s, minRowIdx: c, mainHeaderRowIdx: l, maxRowIdx: m, activePosition: { idx: f, rowIdx: v }, nextPosition: p, nextPositionIsCellInActiveBounds: d, lastStartFrozenColumnIndex: x, firstEndFrozenColumnIndex: g }) {
  let { idx: u, rowIdx: h } = p;
  const T = r.length, I = (C) => {
    for (const A of o) {
      const z = A.idx;
      if (z > u) break;
      const F = Si({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: h,
        mainHeaderRowIdx: l,
        lastStartFrozenColumnIndex: x,
        firstEndFrozenColumnIndex: g,
        column: A
      });
      if (F && u > z && u < F + z) {
        u = z + (C ? F : 0);
        break;
      }
    }
  }, L = (C) => C.level + l, R = () => {
    if (t) {
      let { parent: C } = r[u];
      for (; C !== void 0; ) {
        const A = L(C);
        if (h === A) {
          u = C.idx + C.colSpan;
          break;
        }
        ({ parent: C } = C);
      }
    } else if (e) {
      let { parent: C } = r[u], A = !1;
      for (; C !== void 0; ) {
        const z = L(C);
        if (h >= z) {
          u = C.idx, h = z, A = !0;
          break;
        }
        ({ parent: C } = C);
      }
      A || (u = f, h = v);
    }
  };
  if (d && (I(t), h < l && R()), n === "CHANGE_ROW" && (u === T ? h !== m && (u = 0, h += 1) : u === -1 && (h !== c && (h -= 1, u = T - 1), I(!1))), h < l && u > -1 && u < T) {
    let { parent: C } = r[u];
    const A = h;
    for (h = l; C !== void 0; ) {
      const z = L(C);
      z >= A && (h = z, u = C.idx), { parent: C } = C;
    }
  }
  return {
    idx: u,
    rowIdx: h
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
function Ei(e) {
  return e.querySelector('& > [role="row"][tabindex="0"]');
}
function Lr(e) {
  return e.querySelector('& > [role="row"] > [tabindex="0"]');
}
function Hr(e, t) {
  e !== null && (t && Bt(e), e.focus({ preventScroll: !0 }));
}
function Ri(e) {
  Hr(Ei(e), !0);
}
function zr(e, t = !0) {
  Hr(Lr(e), t);
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
function Li(e) {
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
const Wr = "rdg-cell rdg-7-0-0-beta-60-85c48527", Yr = "rdg-7-0-0-beta-60-203d9925", Hi = `rdg-cell-frozen-start ${Yr}`, zi = `rdg-cell-frozen-end ${Yr}`, Wi = "rdg-cell-drag-handle rdg-7-0-0-beta-60-bfba19bc";
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
function at(e, t = 1) {
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
function rt(e, ...t) {
  return We(Wr, Xt(e.frozen) && Hi, e.frozen === "end" && zi, ...t);
}
const { min: Ct, max: _t, floor: sr, abs: Yi } = Math;
function yt(e) {
  if (typeof e != "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function En(e, { minWidth: t, maxWidth: n }) {
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
  const [c, l] = ae(Yt), [m, f] = ae(null), v = fe(null);
  function p({ idx: I, rowIdx: L }) {
    const R = r && I === -1, C = I >= 0 && I <= o, A = L >= i && L <= a, z = L >= 0 && L < n.length, F = R && A, U = R && z, Y = C && A, _ = C && z;
    return {
      isPositionInActiveBounds: F || Y,
      isPositionInViewport: U || _,
      isRowInActiveBounds: F,
      isRowInViewport: U,
      isCellInActiveBounds: Y,
      isCellInViewport: _
    };
  }
  function d(I) {
    return {
      resolvedActivePosition: I,
      validatedPosition: p(I)
    };
  }
  function x() {
    if (!h.isCellInActiveBounds) throw new Error("No column for active position");
    return t[u.idx];
  }
  function g() {
    if (!h.isPositionInViewport) throw new Error("No row for active position");
    return n[u.rowIdx];
  }
  let { resolvedActivePosition: u, validatedPosition: h } = d(c);
  if (!h.isPositionInActiveBounds && u !== Yt)
    l(Yt), s(void 0), { resolvedActivePosition: u, validatedPosition: h } = d(Yt);
  else if (u.mode === "EDIT" && (((T = x().editorOptions) == null ? void 0 : T.closeOnExternalRowChange) ?? !0) && g() !== u.originalRow) {
    const I = {
      idx: u.idx,
      rowIdx: u.rowIdx,
      mode: "ACTIVE"
    };
    l(I), f(null), { resolvedActivePosition: u, validatedPosition: h } = d(I);
  }
  return ot(() => {
    m !== null && m !== v.current && (v.current = m, m.idx === -1 ? Ri(e.current) : zr(e.current));
  }, [m, e]), {
    activePosition: u,
    setActivePosition: l,
    setPositionToFocus: f,
    activePositionIsInActiveBounds: h.isPositionInActiveBounds,
    activePositionIsInViewport: h.isPositionInViewport,
    activePositionIsRow: h.isRowInActiveBounds,
    activePositionIsCellInViewport: h.isCellInViewport,
    validatePosition: p,
    getActiveColumn: x,
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
  return /* @__PURE__ */ re("span", {
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
const Rn = St(void 0);
Rn.displayName = "DataGridDefaultRenderersContext";
function Tt() {
  return xt(Rn);
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
const mt = {
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
  return /* @__PURE__ */ re("span", {
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
  const a = (t == null ? void 0 : t.width) ?? ta, s = (t == null ? void 0 : t.minWidth) ?? na, c = (t == null ? void 0 : t.maxWidth) ?? void 0, l = (t == null ? void 0 : t.renderCell) ?? Xi, m = (t == null ? void 0 : t.renderHeaderCell) ?? Ur, f = (t == null ? void 0 : t.sortable) ?? !1, v = (t == null ? void 0 : t.resizable) ?? !1, p = (t == null ? void 0 : t.draggable) ?? !1, { columns: d, colSpanColumns: x, lastStartFrozenColumnIndex: g, firstEndFrozenColumnIndex: u, headerRowsCount: h } = Q(() => {
    let F = -1, U = -1, Y = 1;
    const _ = [];
    E(e, 1);
    function E(S, P, Z) {
      for (const K of S) {
        if ("children" in K) {
          const ce = {
            name: K.name,
            parent: Z,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: K.headerCellClass
          };
          E(K.children, P + 1, ce);
          continue;
        }
        const se = K.frozen ?? !1;
        _.push({
          ...K,
          parent: Z,
          idx: 0,
          level: 0,
          frozen: se,
          width: K.width ?? a,
          minWidth: K.minWidth ?? s,
          maxWidth: K.maxWidth ?? c,
          sortable: K.sortable ?? f,
          resizable: K.resizable ?? v,
          draggable: K.draggable ?? p,
          renderCell: K.renderCell ?? l,
          renderHeaderCell: K.renderHeaderCell ?? m
        }), Xt(se) && F++, P > Y && (Y = P);
      }
    }
    _.sort((S, P) => S.key === "rdg-select-column" ? -1 : P.key === "rdg-select-column" ? 1 : (S.frozen === "end" ? 2 : S.frozen === !1 ? 1 : 0) - (P.frozen === "end" ? 2 : P.frozen === !1 ? 1 : 0));
    const k = [];
    return _.forEach((S, P) => {
      S.idx = P, Vr(S, P, 0), S.colSpan != null && k.push(S), S.frozen === "end" && U === -1 && (U = P);
    }), {
      columns: _,
      colSpanColumns: k,
      lastStartFrozenColumnIndex: F,
      firstEndFrozenColumnIndex: U,
      headerRowsCount: Y
    };
  }, [
    e,
    a,
    s,
    c,
    l,
    m,
    v,
    f,
    p
  ]), { templateColumns: T, layoutCssVars: I, totalStartFrozenColumnWidth: L, totalEndFrozenColumnWidth: R, columnMetrics: C } = Q(() => {
    const F = /* @__PURE__ */ new Map();
    let U = 0, Y = 0, _ = 0;
    const E = [];
    for (const S of d) {
      let P = n(S);
      typeof P == "number" ? P = En(P, S) : P = S.minWidth, E.push(`${P}px`), F.set(S, {
        width: P,
        left: U
      }), U += P;
    }
    if (g !== -1) {
      const S = F.get(d[g]);
      Y = S.left + S.width;
    }
    const k = {};
    for (let S = 0; S <= g; S++) {
      const P = d[S];
      k[`--rdg-frozen-start-${P.idx}`] = `${F.get(P).left}px`;
    }
    if (u !== -1) {
      const S = d[d.length - 1], P = F.get(S), Z = P.left + P.width;
      _ = Z - F.get(d[u]).left;
      for (let K = u; K < d.length; K++) {
        const se = d[K], ce = F.get(se);
        k[`--rdg-frozen-end-${se.idx}`] = `${Z - (ce.left + ce.width)}px`;
      }
    }
    return {
      templateColumns: E,
      layoutCssVars: k,
      totalStartFrozenColumnWidth: Y,
      totalEndFrozenColumnWidth: _,
      columnMetrics: F
    };
  }, [
    n,
    d,
    g,
    u
  ]), [A, z] = Q(() => {
    if (!i) return [0, d.length - 1];
    const F = o + L, U = o + r - R, Y = d.length - 1, _ = Ct(g + 1, Y);
    if (F >= U) return [_, _];
    let E = _;
    for (; E < Y; ) {
      const { left: S, width: P } = C.get(d[E]);
      if (S + P > F) break;
      E++;
    }
    let k = E;
    for (; k < Y; ) {
      const { left: S, width: P } = C.get(d[k]);
      if (S + P >= U) break;
      k++;
    }
    return [_t(_, E - 1), Ct(Y, k + 1)];
  }, [
    C,
    d,
    g,
    o,
    L,
    R,
    r,
    i
  ]);
  return {
    columns: d,
    colSpanColumns: x,
    colOverscanStartIdx: A,
    colOverscanEndIdx: z,
    templateColumns: T,
    layoutCssVars: I,
    headerRowsCount: h,
    lastStartFrozenColumnIndex: g,
    firstEndFrozenColumnIndex: u,
    totalStartFrozenColumnWidth: L,
    totalEndFrozenColumnWidth: R
  };
}
function Vr(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const { parent: r } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Vr(r, t, n - 1);
  }
}
function oa(e, t, n, r, o, i, a, s, c) {
  const [l, m] = ae(null), [f, v] = ae(null), [p, d] = ae(o), x = e.length === t.length, g = x && o !== p, u = [...n], h = [];
  for (const { key: R, idx: C, width: A } of t) {
    const z = i.get(R);
    R === (l == null ? void 0 : l.key) ? (u[C] = l.width === "max-content" ? l.width : `${l.width}px`, h.push(R)) : typeof A == "string" && (z == null ? void 0 : z.type) !== "resized" && (g || (f == null ? void 0 : f.has(R)) === !0 || z === void 0) && (u[C] = A, h.push(R));
  }
  const T = u.join(" ");
  ot(I);
  function I() {
    var A, z;
    if (d(o), h.length === 0) return;
    const R = new Map(i);
    let C = !1;
    for (const F of h) {
      const U = cn(r, F);
      C || (C = U !== ((A = i.get(F)) == null ? void 0 : A.width)), U === void 0 ? R.delete(F) : R.set(F, {
        type: "measured",
        width: U
      });
    }
    if (l !== null) {
      const F = l.key, U = (z = i.get(F)) == null ? void 0 : z.width, Y = cn(r, F);
      Y !== void 0 && U !== Y && (C = !0, R.set(F, {
        type: "resized",
        width: Y
      })), m(null);
    }
    C && a(R);
  }
  function L(R, C) {
    var z;
    const { key: A } = R;
    if (Sn(() => {
      var F;
      if (x) {
        const U = /* @__PURE__ */ new Set();
        for (const { key: Y, width: _ } of t) A !== Y && typeof _ == "string" && ((F = i.get(Y)) == null ? void 0 : F.type) !== "resized" && U.add(Y);
        v(U);
      }
      m({
        key: A,
        width: C
      }), c(typeof C == "number");
    }), v(null), s) {
      const F = (z = i.get(A)) == null ? void 0 : z.width, U = typeof C == "number" ? C : cn(r, A);
      U !== void 0 && U !== F && s(R, U);
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
}, bt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new Map(), Ze = globalThis.ResizeObserver == null ? null : new ResizeObserver(ia);
function ia(e) {
  for (const t of e) {
    const n = t.target;
    vn.has(n) && jr(vn.get(n), t.contentBoxSize[0]);
  }
}
function jr(e, t) {
  var n;
  if (bt.has(e)) {
    const r = bt.get(e);
    if (r.inlineSize === t.inlineSize && r.blockSize === t.blockSize) return;
  }
  bt.set(e, t), (n = xn.get(e)) == null || n();
}
function aa() {
  return Gr;
}
function sa(e) {
  const { inlineSize: t, blockSize: n } = Nr(q((r) => (xn.set(e, r), () => {
    xn.delete(e);
  }), [e]), q(() => bt.get(e) ?? Gr, [e]), aa);
  return ot(() => {
    const r = e.current;
    return vn.set(r, e), Ze == null || Ze.observe(r), bt.has(e) || jr(e, {
      inlineSize: r.clientWidth,
      blockSize: r.clientHeight
    }), () => {
      Ze == null || Ze.unobserve(r);
    };
  }, [e]), [t, n];
}
function ge(e) {
  const t = fe(e);
  ot(() => {
    t.current = e;
  });
  const n = q((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Pt(e) {
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
const qt = St(void 0);
qt.displayName = "RowSelectionContext";
const On = St(void 0);
On.displayName = "RowSelectionChangeContext";
function Xr() {
  const e = xt(qt), t = xt(On);
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
  const e = xt(Nn), t = xt(An);
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
  return Nr(q((t) => {
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
  }, [e]), q(() => ln.get(e) ?? Cn, [e]), la);
}
function ua({ gridRef: e }) {
  const [t, n] = ae(null);
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
  const f = Q(() => {
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
      const h = u.idx;
      if (h >= i) break;
      for (const T of g()) {
        const I = ze(u, s, c, T);
        if (I !== void 0 && h + I > i) return h;
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
  ]), v = c > -1 ? Math.min(a, c - 1) : a, p = q(function* (g) {
    for (let h = 0; h <= s; h++) yield e[h];
    const u = c > -1 ? c - 1 : e.length - 1;
    if (s < u) {
      g > s && g < f && (yield e[g]);
      for (let h = f; h <= v; h++) yield e[h];
      g > v && g <= u && (yield e[g]);
    }
    if (c > -1) for (let h = c; h < e.length; h++) yield e[h];
  }, [
    f,
    v,
    e,
    s,
    c
  ]), d = q(function* (g = -1, u) {
    const h = p(g);
    for (const T of h) {
      let I = u && ze(T, s, c, u);
      for (yield [
        T,
        T.idx === g,
        I
      ]; I !== void 0 && I > 1; )
        h.next(), I--;
    }
  }, [
    p,
    s,
    c
  ]), x = q(function* (g = -1, u) {
    if (g >= 0 && g < e.length) {
      const h = e[g];
      yield [
        h,
        !0,
        u && ze(h, s, c, u)
      ];
    }
  }, [
    e,
    s,
    c
  ]);
  return {
    viewportColumns: Q(() => p(-1).toArray(), [p]),
    iterateOverViewportColumnsForRow: d,
    iterateOverViewportColumnsForRowOutsideOfViewport: x
  };
}
function ha({ rows: e, rowHeight: t, clientHeight: n, scrollTop: r, enableVirtualization: o }) {
  const { totalRowHeight: i, gridTemplateRows: a, getRowTop: s, getRowHeight: c, findRowIdx: l } = Q(() => {
    if (typeof t == "number") return {
      totalRowHeight: t * e.length,
      gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
      getRowTop: (h) => h * t,
      getRowHeight: () => t,
      findRowIdx: (h) => sr(h / t)
    };
    let v = 0, p = "", d = null, x = 0;
    const g = e.map((h, T) => {
      const I = t(h), L = {
        top: v,
        height: I
      };
      return v += I, d === null ? (d = I, x = 1) : d === I ? x++ : (x > 1 ? p += `repeat(${x}, ${d}px) ` : p += `${d}px `, d = I, x = 1), T === e.length - 1 && (x > 1 ? p += `repeat(${x}, ${d}px)` : p += `${d}px`), L;
    }), u = (h) => _t(0, Ct(e.length - 1, h));
    return {
      totalRowHeight: v,
      gridTemplateRows: p,
      getRowTop: (h) => g[u(h)].top,
      getRowHeight: (h) => g[u(h)].height,
      findRowIdx(h) {
        let T = 0, I = g.length - 1;
        for (; T <= I; ) {
          const L = T + sr((I - T) / 2), R = g[L].top;
          if (R === h) return L;
          if (R < h ? T = L + 1 : R > h && (I = L - 1), T > I) return I;
        }
        return 0;
      }
    };
  }, [t, e]);
  let m = 0, f = e.length - 1;
  if (o) {
    const p = l(r), d = l(r + n);
    m = _t(0, p - 4), f = Ct(e.length - 1, d + 4);
  }
  return {
    rowOverscanStartIdx: m,
    rowOverscanEndIdx: f,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  };
}
const ga = "rdg-cell-dragged-over rdg-7-0-0-beta-60-35ccb4c8";
function ma({ column: e, colSpan: t, isCellActive: n, isDraggedOver: r, row: o, rowIdx: i, className: a, onMouseDown: s, onCellMouseDown: c, onClick: l, onCellClick: m, onDoubleClick: f, onCellDoubleClick: v, onContextMenu: p, onCellContextMenu: d, onRowChange: x, setActivePosition: g, style: u, ...h }) {
  const { tabIndex: T, childTabIndex: I, onFocus: L } = Pt(n), { cellClass: R } = e;
  a = rt(e, r && ga, typeof R == "function" ? R(o) : R, a);
  const C = Fr(e, o);
  function A(k = !1) {
    g({
      rowIdx: i,
      idx: e.idx
    }, { enableEditor: k });
  }
  function z(k, S) {
    let P = !1;
    if (S) {
      const Z = Tn(k);
      S({
        rowIdx: i,
        row: o,
        column: e,
        setActivePosition: A
      }, Z), P = Z.isGridDefaultPrevented();
    }
    return P;
  }
  function F(k) {
    s == null || s(k), z(k, c) || A();
  }
  function U(k) {
    l == null || l(k), z(k, m);
  }
  function Y(k) {
    f == null || f(k), z(k, v) || A(!0);
  }
  function _(k) {
    p == null || p(k), z(k, d);
  }
  function E(k) {
    x(e, i, k);
  }
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !C || void 0,
    tabIndex: T,
    className: a,
    style: {
      ...at(e, t),
      ...u
    },
    onClick: U,
    onMouseDown: F,
    onDoubleClick: Y,
    onContextMenu: _,
    onFocus: L,
    ...h,
    children: e.renderCell({
      column: e,
      row: o,
      rowIdx: i,
      isCellEditable: C,
      tabIndex: I,
      onRowChange: E
    })
  });
}
const wa = $e(ma);
function pa(e, t) {
  return /* @__PURE__ */ b(wa, { ...t }, e);
}
const ya = typeof scheduler == "object" && typeof scheduler.postTask == "function", ba = "rdg-7-0-0-beta-60-46f9ea88";
function va({ column: e, colSpan: t, row: n, rowIdx: r, onRowChange: o, closeEditor: i, onKeyDown: a, navigate: s }) {
  var T, I, L;
  const c = fe(void 0), l = fe(void 0), m = fe(void 0), f = ((T = e.editorOptions) == null ? void 0 : T.commitOnOutsideClick) ?? !0, v = pi(() => {
    x(!0, !1);
  });
  ot(() => {
    if (!f) return;
    function R(A) {
      if (c.current = A, ya) {
        const z = new AbortController(), { signal: F } = z;
        l.current = z, scheduler.postTask(v, {
          priority: "user-blocking",
          signal: F
        }).catch(() => {
        });
      } else m.current = requestAnimationFrame(v);
    }
    function C(A) {
      c.current === A && v();
    }
    return window.addEventListener("mousedown", R, { capture: !0 }), window.addEventListener("mousedown", C), () => {
      window.removeEventListener("mousedown", R, { capture: !0 }), window.removeEventListener("mousedown", C), p();
    };
  }, [f]);
  function p() {
    c.current = void 0, l.current !== void 0 && (l.current.abort(), l.current = void 0), m.current !== void 0 && (cancelAnimationFrame(m.current), m.current = void 0);
  }
  function d(R) {
    if (a) {
      const C = Tn(R);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(R);
        },
        onClose: x
      }, C), C.isGridDefaultPrevented()) return;
    }
    R.key === "Escape" ? x() : R.key === "Enter" ? x(!0) : Ai(R) && s(R);
  }
  function x(R = !1, C = !0) {
    R ? o(n, !0, C) : i(C);
  }
  function g(R, C = !1) {
    o(R, C, C);
  }
  const { cellClass: u } = e, h = rt(e, "rdg-editor-container", !((I = e.editorOptions) != null && I.displayCellContent) && ba, typeof u == "function" ? u(n) : u);
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: h,
    style: at(e, t),
    onKeyDown: d,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ re(nt, { children: [e.renderEditCell({
      column: e,
      row: n,
      rowIdx: r,
      onRowChange: g,
      onClose: x
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
function Ea({ column: e, colSpan: t, rowIdx: n, isCellActive: r, onColumnResize: o, onColumnResizeEnd: i, onColumnsReorder: a, sortColumns: s, onSortColumnsChange: c, setPosition: l, shouldFocusGrid: m, direction: f, draggedColumnKey: v, setDraggedColumnKey: p }) {
  const [d, x] = ae(!1), g = fe(null), u = v === e.key, h = Br(e, n), { tabIndex: T, childTabIndex: I, onFocus: L } = Pt(m || r), R = s == null ? void 0 : s.findIndex((D) => D.columnKey === e.key), C = R !== void 0 && R > -1 ? s[R] : void 0, A = C == null ? void 0 : C.direction, z = C !== void 0 && s.length > 1 ? R + 1 : void 0, F = A && !z ? A === "ASC" ? "ascending" : "descending" : void 0, { sortable: U, resizable: Y, draggable: _ } = e, E = rt(e, e.headerCellClass, U && Ca, Y && Da, _ && Sa, u && Ta, d && Pa);
  function k(D) {
    if (c == null) return;
    const { sortDescendingFirst: W } = e;
    if (C === void 0) {
      const V = {
        columnKey: e.key,
        direction: W ? "DESC" : "ASC"
      };
      c(s && D ? [...s, V] : [V]);
    } else {
      let V;
      if ((W === !0 && A === "DESC" || W !== !0 && A === "ASC") && (V = {
        columnKey: e.key,
        direction: A === "ASC" ? "DESC" : "ASC"
      }), D) {
        const te = [...s];
        V ? te[R] = V : te.splice(R, 1), c(te);
      } else c(V ? [V] : []);
    }
  }
  function S(D) {
    L == null || L(D), m && l({
      idx: 0,
      rowIdx: n
    });
  }
  function P() {
    l({
      idx: e.idx,
      rowIdx: n
    });
  }
  function Z(D) {
    U && k(D.ctrlKey || D.metaKey);
  }
  function K(D) {
    const { key: W } = D;
    if (U && (W === " " || W === "Enter"))
      D.preventDefault(), k(D.ctrlKey || D.metaKey);
    else if (Y && Pn(D) && (W === "ArrowLeft" || W === "ArrowRight")) {
      D.stopPropagation();
      const { width: V } = D.currentTarget.getBoundingClientRect(), { leftKey: te } = In(f), j = En(V + (W === te ? -10 : 10), e);
      j !== V && o(e, j);
    }
  }
  function se(D) {
    Sn(() => {
      p(e.key);
    }), D.dataTransfer.setDragImage(g.current, 0, 0), D.dataTransfer.dropEffect = "move";
  }
  function ce() {
    p(void 0);
  }
  function Be(D) {
    D.preventDefault(), D.dataTransfer.dropEffect = "move";
  }
  function Te(D) {
    x(!1), D.preventDefault(), a == null || a(v, e.key);
  }
  function _e(D) {
    cr(D) && x(!0);
  }
  function Oe(D) {
    cr(D) && x(!1);
  }
  let le, be;
  _ && (le = {
    draggable: !0,
    onDragStart: se,
    onDragEnd: ce
  }, v !== void 0 && v !== e.key && (be = {
    onDragOver: Be,
    onDragEnter: _e,
    onDragLeave: Oe,
    onDrop: Te
  }));
  const O = {
    ...$r(e, n, h),
    ...at(e, t)
  }, N = e.renderHeaderCell({
    column: e,
    sortDirection: A,
    priority: z,
    tabIndex: I
  });
  return /* @__PURE__ */ re(nt, { children: [u && /* @__PURE__ */ b("div", {
    ref: g,
    style: O,
    className: rt(e, e.headerCellClass, Ia),
    children: N
  }), /* @__PURE__ */ re("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": h,
    "aria-selected": r,
    "aria-sort": F,
    tabIndex: T,
    className: E,
    style: O,
    onMouseDown: P,
    onFocus: S,
    onClick: Z,
    onKeyDown: K,
    ...le,
    ...be,
    children: [N, Y && /* @__PURE__ */ b(Ra, {
      direction: f,
      column: e,
      onColumnResize: o,
      onColumnResizeEnd: i
    })]
  })] });
}
function Ra({ direction: e, column: t, onColumnResize: n, onColumnResizeEnd: r }) {
  const o = fe(void 0), i = e === "rtl";
  function a(m) {
    if (m.pointerType === "mouse" && m.button !== 0) return;
    m.preventDefault();
    const { currentTarget: f, pointerId: v } = m;
    f.setPointerCapture(v);
    const { right: p, left: d } = f.parentElement.getBoundingClientRect();
    o.current = i ? m.clientX - d : p - m.clientX;
  }
  function s(m) {
    const f = o.current;
    if (f === void 0) return;
    const { width: v, right: p, left: d } = m.currentTarget.parentElement.getBoundingClientRect();
    let x = i ? p + f - m.clientX : m.clientX + f - d;
    x = En(x, t), v > 0 && x !== v && n(t, x);
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
function Na({ headerRowClass: e, rowIdx: t, iterateOverViewportColumnsForRow: n, onColumnResize: r, onColumnResizeEnd: o, onColumnsReorder: i, sortColumns: a, onSortColumnsChange: s, activeCellIdx: c, setPosition: l, shouldFocusGrid: m, direction: f }) {
  const [v, p] = ae(), d = c === -1, x = n(c, { type: "HEADER" }).map(([g, u, h], T) => /* @__PURE__ */ b(Ea, {
    column: g,
    colSpan: h,
    rowIdx: t,
    isCellActive: u,
    onColumnResize: r,
    onColumnResizeEnd: o,
    onColumnsReorder: i,
    onSortColumnsChange: s,
    sortColumns: a,
    setPosition: l,
    shouldFocusGrid: m && T === 0,
    direction: f,
    draggedColumnKey: v,
    setDraggedColumnKey: p
  }, g.key)).toArray();
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": t,
    className: We(Kr, d && "rdg-row-active", e),
    children: x
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
var La = $e(Fa);
function Ha({ className: e, rowIdx: t, gridRowStart: n, activeCellIdx: r, isRowSelectionDisabled: o, isRowSelected: i, draggedOverCellIdx: a, row: s, iterateOverViewportColumnsForRow: c, activeCellEditor: l, isTreeGrid: m, onCellMouseDown: f, onCellClick: v, onCellDoubleClick: p, onCellContextMenu: d, rowClass: x, onRowChange: g, setActivePosition: u, style: h, ...T }) {
  const I = Tt().renderCell, L = r === -1;
  e = We(Fn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, L && "rdg-row-active", x == null ? void 0 : x(s, t), e);
  const R = c(r, {
    type: "ROW",
    row: s
  }).map(([C, A, z]) => A && l ? l : I(C.key, {
    column: C,
    colSpan: z,
    row: s,
    rowIdx: t,
    isDraggedOver: a === C.idx,
    isCellActive: A,
    onCellMouseDown: f,
    onCellClick: v,
    onCellDoubleClick: p,
    onCellContextMenu: d,
    onRowChange: g,
    setActivePosition: u
  })).toArray();
  return /* @__PURE__ */ b(qt, {
    value: Q(() => ({
      isRowSelected: i,
      isRowSelectionDisabled: o
    }), [o, i]),
    children: /* @__PURE__ */ b("div", {
      role: "row",
      tabIndex: m ? L ? 0 : -1 : void 0,
      className: e,
      style: {
        gridRowStart: n,
        ...h
      },
      ...T,
      children: R
    })
  });
}
const za = $e(Ha);
function Qr(e, t) {
  return /* @__PURE__ */ b(za, { ...t }, e);
}
const Wa = "rdg-sort-arrow rdg-7-0-0-beta-60-3d5115f3";
function Ya({ sortDirection: e, priority: t }) {
  return /* @__PURE__ */ re(nt, { children: [$a({ sortDirection: e }), Ba({ priority: t })] });
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
  var v;
  const { tabIndex: a, childTabIndex: s, onFocus: c } = Pt(o), { summaryCellClass: l } = e, m = rt(e, typeof l == "function" ? l(n) : l);
  function f() {
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
    style: at(e, t),
    onMouseDown: f,
    onFocus: c,
    children: (v = e.renderSummaryCell) == null ? void 0 : v.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
var Ka = $e(qa);
const Qa = "rdg-summary-row rdg-7-0-0-beta-60-0b90c82c";
function Za({ rowIdx: e, gridRowStart: t, row: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, setActivePosition: i, top: a, bottom: s, isTop: c, isTreeGrid: l, "aria-rowindex": m }) {
  const f = o === -1, v = r(o, {
    type: "SUMMARY",
    row: n
  }).map(([p, d, x]) => /* @__PURE__ */ b(Ka, {
    column: p,
    colSpan: x,
    row: n,
    rowIdx: e,
    isCellActive: d,
    setActivePosition: i
  }, p.key)).toArray();
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": m,
    tabIndex: l ? f ? 0 : -1 : void 0,
    className: We(Fn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Qa, c ? Ma : Oa, f && "rdg-row-active"),
    style: {
      gridRowStart: t,
      top: a,
      bottom: s
    },
    children: v
  });
}
var lr = $e(Za);
function no(e) {
  const { ref: t, columns: n, rows: r, topSummaryRows: o, bottomSummaryRows: i, rowKeyGetter: a, onRowsChange: s, rowHeight: c, headerRowHeight: l, summaryRowHeight: m, columnWidths: f, onColumnWidthsChange: v, selectedRows: p, isRowSelectionDisabled: d, onSelectedRowsChange: x, sortColumns: g, onSortColumnsChange: u, defaultColumnOptions: h, onCellMouseDown: T, onCellClick: I, onCellDoubleClick: L, onCellContextMenu: R, onCellKeyDown: C, onActivePositionChange: A, onScroll: z, onColumnResize: F, onColumnsReorder: U, onFill: Y, onCellCopy: _, onCellPaste: E, enableVirtualization: k, renderers: S, className: P, style: Z, rowClass: K, headerRowClass: se, direction: ce, role: Be, "aria-label": Te, "aria-labelledby": _e, "aria-description": Oe, "aria-describedby": le, "aria-rowcount": be, "data-testid": O, "data-cy": N } = e, D = Tt(), W = Be ?? "grid", V = c ?? 35, te = l ?? (typeof V == "number" ? V : 35), j = m ?? (typeof V == "number" ? V : 35), he = (S == null ? void 0 : S.renderRow) ?? (D == null ? void 0 : D.renderRow) ?? Qr, we = (S == null ? void 0 : S.renderCell) ?? (D == null ? void 0 : D.renderCell) ?? pa, ve = (S == null ? void 0 : S.renderSortStatus) ?? (D == null ? void 0 : D.renderSortStatus) ?? Ya, pe = (S == null ? void 0 : S.renderCheckbox) ?? (D == null ? void 0 : D.renderCheckbox) ?? _i, Pe = (S == null ? void 0 : S.noRowsFallback) ?? (D == null ? void 0 : D.noRowsFallback), xe = k ?? !0, Ce = ce ?? "ltr", B = fe(null), { scrollTop: J, scrollLeft: de } = da(B), [Ie, st] = sa(B), [Yn, Kt] = ae(() => f ?? /* @__PURE__ */ new Map()), [$n, Bn] = ae(!1), [Qt, _n] = ae(!1), [Ne, Zt] = ae(void 0), [je, xo] = ae(-1), Jt = f != null && v != null && !$n, Rt = Jt ? f : Yn, Co = Jt ? (w) => {
    Kt(w), v(w);
  } : Kt, Un = q((w) => {
    var y;
    return ((y = Rt.get(w.key)) == null ? void 0 : y.width) ?? w.width;
  }, [Rt]), { columns: Ee, colSpanColumns: Vn, lastStartFrozenColumnIndex: Xe, firstEndFrozenColumnIndex: Ue, headerRowsCount: Ae, colOverscanStartIdx: Do, colOverscanEndIdx: ko, templateColumns: So, layoutCssVars: To, totalStartFrozenColumnWidth: Gn, totalEndFrozenColumnWidth: jn } = ra({
    rawColumns: n,
    defaultColumnOptions: h,
    getColumnWidth: Un,
    scrollLeft: de,
    viewportWidth: Ie,
    enableVirtualization: xe
  }), ct = W === "treegrid", Re = (o == null ? void 0 : o.length) ?? 0, De = (i == null ? void 0 : i.length) ?? 0, Xn = Re + De, ke = Ae + Re, en = Ae - 1, Fe = -ke, qe = r.length + De - 1, tn = Fe + en, Mt = Ee.length - 1, Ot = Ae * te, Po = Xn * j, Ke = st - Ot - Po, nn = p != null && x != null, { leftKey: Io, rightKey: qn } = In(Ce), Kn = be ?? Ae + r.length + Xn, Eo = {
    gridColumnStart: Xe + 2,
    insetInlineStart: Gn
  }, Ro = {
    gridColumnStart: Ue + 1,
    gridColumnEnd: -1,
    insetInlineEnd: jn
  }, { activePosition: G, setActivePosition: lt, setPositionToFocus: Qn, activePositionIsInActiveBounds: Mo, activePositionIsInViewport: rn, activePositionIsRow: Zn, activePositionIsCellInViewport: Nt, validatePosition: At, getActiveColumn: Qe, getActiveRow: dt } = $i({
    gridRef: B,
    columns: Ee,
    rows: r,
    isTreeGrid: ct,
    maxColIdx: Mt,
    minRowIdx: Fe,
    maxRowIdx: qe,
    setDraggedOverRowIdx: Zt
  }), { setScrollToPosition: Oo, scrollToPositionElement: No } = ua({ gridRef: B }), Ao = Q(() => ({
    renderCheckbox: pe,
    renderSortStatus: ve,
    renderCell: we
  }), [
    pe,
    ve,
    we
  ]), Fo = Q(() => {
    let w = !1, y = !1;
    if (a != null && p != null && p.size > 0) {
      for (const M of r)
        if (p.has(a(M)) ? w = !0 : y = !0, w && y) break;
    }
    return {
      isRowSelected: w && !y,
      isIndeterminate: w && y
    };
  }, [
    r,
    p,
    a
  ]), { rowOverscanStartIdx: ut, rowOverscanEndIdx: ft, totalRowHeight: Ft, gridTemplateRows: Lo, getRowTop: Jn, getRowHeight: Ho, findRowIdx: on } = ha({
    rows: r,
    rowHeight: V,
    clientHeight: Ke,
    scrollTop: J,
    enableVirtualization: xe
  }), { viewportColumns: er, iterateOverViewportColumnsForRow: ht, iterateOverViewportColumnsForRowOutsideOfViewport: zo } = fa({
    columns: Ee,
    colSpanColumns: Vn,
    colOverscanStartIdx: Do,
    colOverscanEndIdx: ko,
    lastStartFrozenColumnIndex: Xe,
    firstEndFrozenColumnIndex: Ue,
    rowOverscanStartIdx: ut,
    rowOverscanEndIdx: ft,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), { gridTemplateColumns: Wo, handleColumnResize: Yo } = oa(Ee, er, So, B, Ie, Rt, Co, F, Bn), $o = ge(Yo), Bo = ge(ri), _o = ge(U), Uo = ge(u), Vo = ge(T), Go = ge(I), jo = ge(L), Xo = ge(R), qo = ge(Zo), Ko = ge(nr), Qo = ge(Lt), an = ge(gt), tr = ge(li);
  wi(t, () => ({
    element: B.current,
    scrollToCell({ idx: w, rowIdx: y }) {
      const M = w != null && w > Xe && (Ue === -1 || w < Ue) && w < Ee.length ? w : void 0, $ = y != null && At({
        idx: 0,
        rowIdx: y
      }).isPositionInViewport ? y + ke : void 0;
      (M != null || $ != null) && Oo({
        idx: M,
        rowIdx: $
      });
    },
    setActivePosition: gt
  }));
  function Zo(w) {
    if (!x) return;
    yt(a);
    const y = new Set(p);
    for (const M of r) {
      if ((d == null ? void 0 : d(M)) === !0) continue;
      const $ = a(M);
      w.checked ? y.add($) : y.delete($);
    }
    x(y);
  }
  function nr(w) {
    if (!x) return;
    yt(a);
    const { row: y, checked: M, isShiftClick: $ } = w;
    if ((d == null ? void 0 : d(y)) === !0) return;
    const H = new Set(p), X = a(y), oe = r.indexOf(y);
    if (xo(oe), M ? H.add(X) : H.delete(X), $ && je !== -1 && je !== oe && je < r.length) {
      const [ne, ye] = je < oe ? [je, oe] : [oe, je];
      for (let Le = ne + 1; Le < ye; Le++) {
        const sn = r[Le];
        (d == null ? void 0 : d(sn)) !== !0 && (M ? H.add(a(sn)) : H.delete(a(sn)));
      }
    }
    x(H);
  }
  function Jo(w) {
    const { idx: y, rowIdx: M, mode: $ } = G;
    if ($ === "EDIT") return;
    if (C && rn) {
      const X = Tn(w);
      if (C({
        mode: "ACTIVE",
        row: r[M],
        column: Ee[y],
        rowIdx: M,
        setActivePosition: gt
      }, X), X.isGridDefaultPrevented()) return;
    }
    const { target: H } = w;
    if (H instanceof Element && !(H.closest(".rdg-cell") === null && !(ct && H.role === "row")))
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
  function Lt(w, y, M) {
    if (typeof s != "function" || M === r[y]) return;
    const $ = r.with(y, M);
    s($, {
      indexes: [y],
      column: w
    });
  }
  function rr() {
    G.mode === "EDIT" && Lt(Qe(), G.rowIdx, G.row);
  }
  function ei(w) {
    Nt && (_ == null || _({
      row: dt(),
      column: Qe()
    }, w));
  }
  function ti(w) {
    if (typeof E != "function" || typeof s != "function" || !Ht(G)) return;
    const y = Qe(), M = dt(), $ = E({
      row: M,
      column: y
    }, w);
    Lt(y, G.rowIdx, $);
  }
  function ni(w) {
    if (!Nt) return;
    const y = dt(), { key: M, shiftKey: $ } = w;
    if (nn && $ && M === " ") {
      yt(a);
      const H = a(y);
      nr({
        row: y,
        checked: !p.has(H),
        isShiftClick: !1
      }), w.preventDefault();
      return;
    }
    Ht(G) && Ni(w, E != null) && lt(({ idx: H, rowIdx: X }) => ({
      idx: H,
      rowIdx: X,
      mode: "EDIT",
      row: y,
      originalRow: y
    }));
  }
  function ri() {
    $n && (v == null || v(Rt), Bn(!1));
  }
  function oi(w) {
    w.preventDefault(), !(w.pointerType === "mouse" && w.button !== 0) && (_n(!0), w.currentTarget.setPointerCapture(w.pointerId));
  }
  function ii(w) {
    const y = B.current, M = Ot + Re * j, $ = J - M + w.clientY - y.getBoundingClientRect().top, H = on($);
    Zt(H);
    const X = ke + H + 1;
    Bt(y.querySelector(`& > [aria-rowindex="${X}"] > [aria-colindex="${G.idx + 1}"]`));
  }
  function ai() {
    if (_n(!1), Ne === void 0) return;
    const { rowIdx: w } = G, [y, M] = w < Ne ? [w + 1, Ne + 1] : [Ne, w];
    or(y, M), Zt(void 0);
  }
  function si() {
    zr(B.current, !1);
  }
  function ci(w) {
    w.stopPropagation(), or(G.rowIdx + 1, r.length);
  }
  function or(w, y) {
    if (s == null) return;
    const { idx: M } = G, $ = Qe(), H = dt(), X = [...r], oe = [];
    for (let ne = w; ne < y; ne++) if (Ht({
      rowIdx: ne,
      idx: M
    })) {
      const ye = Y({
        columnKey: $.key,
        sourceRow: H,
        targetRow: r[ne]
      });
      ye !== r[ne] && (X[ne] = ye, oe.push(ne));
    }
    oe.length > 0 && s(X, {
      indexes: oe,
      column: $
    });
  }
  function Ht(w) {
    return At(w).isCellInViewport && Fr(Ee[w.idx], r[w.rowIdx]);
  }
  function gt(w, y) {
    const { isPositionInActiveBounds: M } = At(w);
    if (!M) return;
    rr();
    const $ = dr(G, w);
    if (y != null && y.enableEditor && Ht(w)) {
      const H = r[w.rowIdx];
      lt({
        ...w,
        mode: "EDIT",
        row: H,
        originalRow: H
      });
    } else if ($) Bt(Lr(B.current));
    else {
      const H = {
        ...w,
        mode: "ACTIVE"
      };
      lt(H), y != null && y.shouldFocus && Qn(H);
    }
    A && !$ && A({
      rowIdx: w.rowIdx,
      row: r[w.rowIdx],
      column: Ee[w.idx]
    });
  }
  function li({ idx: w, rowIdx: y }) {
    gt({
      rowIdx: Fe + y - 1,
      idx: w
    });
  }
  function di(w, y, M) {
    const { idx: $, rowIdx: H } = G;
    switch (w) {
      case "ArrowUp": {
        const X = H - 1;
        return {
          idx: $ === -1 && X < -Re ? 0 : $,
          rowIdx: X
        };
      }
      case "ArrowDown":
        return {
          idx: $,
          rowIdx: H + 1
        };
      case Io: {
        const X = $ - 1;
        return {
          idx: H < -Re && X < 0 ? 0 : X,
          rowIdx: H
        };
      }
      case qn:
        return {
          idx: $ + 1,
          rowIdx: H
        };
      case "Tab":
        return {
          idx: $ + (M ? -1 : 1),
          rowIdx: H
        };
      case "Home":
        return Zn || y ? {
          idx: 0,
          rowIdx: Fe
        } : {
          idx: 0,
          rowIdx: H
        };
      case "End":
        return Zn ? {
          idx: $,
          rowIdx: qe
        } : {
          idx: Mt,
          rowIdx: y ? qe : H
        };
      case "PageUp": {
        if (H === Fe) return G;
        const X = Jn(H) + Ho(H) - Ke;
        return {
          idx: $,
          rowIdx: X > 0 ? on(X) : 0
        };
      }
      case "PageDown": {
        if (H >= r.length) return G;
        const X = Jn(H) + Ke;
        return {
          idx: $,
          rowIdx: X < Ft ? on(X) : r.length - 1
        };
      }
      default:
        return G;
    }
  }
  function ir(w) {
    const { key: y, shiftKey: M } = w;
    let $ = "NONE";
    if (y === "Tab") {
      if (Pi({
        shiftKey: M,
        maxColIdx: Mt,
        minRowIdx: Fe,
        maxRowIdx: qe,
        activePosition: G
      })) {
        rr();
        return;
      }
      $ = "CHANGE_ROW";
    }
    w.preventDefault();
    const H = di(y, Pn(w), M);
    dr(G, H) || gt(Ti({
      moveUp: y === "ArrowUp",
      moveNext: y === qn || y === "Tab" && !M,
      columns: Ee,
      colSpanColumns: Vn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: Fe,
      mainHeaderRowIdx: tn,
      maxRowIdx: qe,
      lastStartFrozenColumnIndex: Xe,
      firstEndFrozenColumnIndex: Ue,
      cellNavigationMode: $,
      activePosition: G,
      nextPosition: H,
      nextPositionIsCellInActiveBounds: At(H).isCellInActiveBounds
    }), { shouldFocus: !0 });
  }
  function ui(w) {
    if (Ne === void 0) return;
    const { rowIdx: y } = G;
    return (y < Ne ? y < w && w <= Ne : y > w && w >= Ne) ? G.idx : void 0;
  }
  function fi() {
    var Le;
    if (Y == null || G.mode !== "ACTIVE" || !Nt) return;
    const { rowIdx: w } = G, y = Qe();
    if (y.renderEditCell == null || y.editable === !1) return;
    const M = w === qe, $ = Un(y), H = ((Le = y.colSpan) == null ? void 0 : Le.call(y, {
      type: "ROW",
      row: dt()
    })) ?? 1, { insetInlineStart: X, ...oe } = at(y, H), ne = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", ye = y.idx + H - 1 === Mt;
    return /* @__PURE__ */ b("div", {
      style: {
        ...oe,
        gridRowStart: ke + w + 1,
        marginInlineEnd: ye ? void 0 : ne,
        marginBlockEnd: M ? void 0 : ne,
        insetInlineStart: X ? `calc(${X} + ${$}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
      },
      className: We(Wi, y.frozen && "rdg-7-0-0-beta-60-7abddb3e"),
      onPointerDown: oi,
      onPointerMove: Qt ? ii : void 0,
      onLostPointerCapture: Qt ? ai : void 0,
      onClick: si,
      onDoubleClick: ci
    });
  }
  function ar(w, y, M) {
    return /* @__PURE__ */ re(nt, { children: [
      /* @__PURE__ */ b("div", {
        className: M,
        style: {
          ...w,
          gridRowStart: 1,
          gridRowEnd: Ae + 1 + Re,
          insetBlockStart: 0
        }
      }),
      r.length > 0 && /* @__PURE__ */ b("div", {
        className: y,
        style: {
          ...w,
          gridRowStart: ke + ut + 1,
          gridRowEnd: ke + ft + 2
        }
      }),
      i != null && De > 0 && /* @__PURE__ */ b("div", {
        className: M,
        style: {
          ...w,
          gridRowStart: ke + r.length + 1,
          gridRowEnd: ke + r.length + 1 + De,
          insetBlockStart: Ke > Ft ? st - j * De : void 0,
          insetBlockEnd: Ke > Ft ? void 0 : 0
        }
      })
    ] });
  }
  function hi(w) {
    if (!Nt || G.rowIdx !== w || G.mode !== "EDIT") return;
    const { row: y } = G, M = Qe(), $ = ze(M, Xe, Ue, {
      type: "ROW",
      row: y
    });
    function H(oe) {
      const ne = {
        idx: G.idx,
        rowIdx: w,
        mode: "ACTIVE"
      };
      lt(ne), oe && Qn(ne);
    }
    function X(oe, ne, ye) {
      ne ? Sn(() => {
        Lt(M, G.rowIdx, oe), H(ye);
      }) : lt((Le) => ({
        ...Le,
        row: oe
      }));
    }
    return /* @__PURE__ */ b(va, {
      column: M,
      colSpan: $,
      row: y,
      rowIdx: w,
      onRowChange: X,
      closeEditor: H,
      onKeyDown: C,
      navigate: ir
    }, M.key);
  }
  function* gi() {
    const w = G.rowIdx;
    rn && w < ut && (yield w);
    for (let y = ut; y <= ft; y++) yield y;
    rn && w > ft && (yield w);
  }
  function mi() {
    const { idx: w, rowIdx: y } = G;
    return gi().map((M) => {
      const $ = M === y, H = $ && (M < ut || M > ft) ? zo : ht, X = r[M], oe = ke + M + 1;
      let ne = M, ye = !1;
      return typeof a == "function" && (ne = a(X), ye = (p == null ? void 0 : p.has(ne)) ?? !1), he(ne, {
        "aria-rowindex": ke + M + 1,
        "aria-selected": nn ? ye : void 0,
        rowIdx: M,
        row: X,
        iterateOverViewportColumnsForRow: H,
        isRowSelectionDisabled: (d == null ? void 0 : d(X)) ?? !1,
        isRowSelected: ye,
        onCellMouseDown: Vo,
        onCellClick: Go,
        onCellDoubleClick: jo,
        onCellContextMenu: Xo,
        rowClass: K,
        gridRowStart: oe,
        activeCellIdx: $ ? w : void 0,
        draggedOverCellIdx: ui(M),
        onRowChange: Qo,
        setActivePosition: an,
        activeCellEditor: hi(M),
        isTreeGrid: ct
      });
    }).toArray();
  }
  Jt && Yn !== f && Kt(f);
  let zt = `repeat(${Ae}, ${te}px)`;
  return Re > 0 && (zt += ` repeat(${Re}, ${j}px)`), r.length > 0 && (zt += Lo), De > 0 && (zt += ` repeat(${De}, ${j}px)`), /* @__PURE__ */ re("div", {
    role: W,
    "aria-label": Te,
    "aria-labelledby": _e,
    "aria-description": Oe,
    "aria-describedby": le,
    "aria-multiselectable": nn ? !0 : void 0,
    "aria-colcount": Ee.length,
    "aria-rowcount": Kn,
    tabIndex: -1,
    className: We(_a, Qt && Ua, P),
    style: {
      ...Z,
      scrollPaddingInlineStart: Gn,
      scrollPaddingInlineEnd: jn,
      scrollPaddingBlockStart: Ot + Re * j,
      scrollPaddingBlockEnd: De * j,
      gridTemplateColumns: Wo,
      gridTemplateRows: zt,
      "--rdg-header-row-height": `${te}px`,
      ...To
    },
    dir: Ce,
    ref: B,
    onScroll: z,
    onKeyDown: Jo,
    onCopy: ei,
    onPaste: ti,
    "data-testid": O,
    "data-cy": N,
    children: [
      /* @__PURE__ */ re(Rn, {
        value: Ao,
        children: [/* @__PURE__ */ b(An, {
          value: qo,
          children: /* @__PURE__ */ re(Nn, {
            value: Fo,
            children: [Array.from({ length: en }, (w, y) => /* @__PURE__ */ b(La, {
              rowIdx: y + 1,
              level: -en + y,
              iterateOverViewportColumnsForRow: ht,
              activeCellIdx: G.rowIdx === Fe + y ? G.idx : void 0,
              setPosition: tr
            }, y)), /* @__PURE__ */ b(Aa, {
              headerRowClass: se,
              rowIdx: Ae,
              iterateOverViewportColumnsForRow: ht,
              onColumnResize: $o,
              onColumnResizeEnd: Bo,
              onColumnsReorder: _o,
              sortColumns: g,
              onSortColumnsChange: Uo,
              activeCellIdx: G.rowIdx === tn ? G.idx : void 0,
              setPosition: tr,
              shouldFocusGrid: !Mo,
              direction: Ce
            })]
          })
        }), r.length === 0 && Pe ? Pe : /* @__PURE__ */ re(nt, { children: [
          o == null ? void 0 : o.map((w, y) => {
            const M = Ae + 1 + y, $ = tn + 1 + y, H = G.rowIdx === $;
            return /* @__PURE__ */ b(lr, {
              "aria-rowindex": M,
              rowIdx: $,
              gridRowStart: M,
              row: w,
              top: Ot + j * y,
              bottom: void 0,
              iterateOverViewportColumnsForRow: ht,
              activeCellIdx: H ? G.idx : void 0,
              isTop: !0,
              setActivePosition: an,
              isTreeGrid: ct
            }, y);
          }),
          /* @__PURE__ */ b(On, {
            value: Ko,
            children: mi()
          }),
          i == null ? void 0 : i.map((w, y) => {
            const M = ke + r.length + y + 1, $ = r.length + y, H = G.rowIdx === $, X = Ke > Ft ? st - j * (De - y) : void 0, oe = X === void 0 ? j * (De - 1 - y) : void 0;
            return /* @__PURE__ */ b(lr, {
              "aria-rowindex": Kn - De + y + 1,
              rowIdx: $,
              gridRowStart: M,
              row: w,
              top: X,
              bottom: oe,
              iterateOverViewportColumnsForRow: ht,
              activeCellIdx: H ? G.idx : void 0,
              isTop: !1,
              setActivePosition: an,
              isTreeGrid: ct
            }, y);
          })
        ] })]
      }),
      Xe > -1 && ar(Eo, Jr, ja),
      Ue > -1 && ar(Ro, eo, Xa),
      fi(),
      Li(er),
      No
    ]
  });
}
function dr(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
function Ja({ id: e, groupKey: t, childRows: n, isExpanded: r, isCellActive: o, column: i, row: a, groupColumnIndex: s, isGroupByColumn: c, toggleGroup: l }) {
  var x;
  const { tabIndex: m, childTabIndex: f, onFocus: v } = Pt(o);
  function p() {
    l(e);
  }
  const d = c && s === i.idx;
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: m === -1 ? void 0 : m,
    className: rt(i),
    style: {
      ...at(i),
      cursor: d ? "pointer" : "default"
    },
    onClick: d ? p : void 0,
    onFocus: v,
    children: (!c || d) && ((x = i.renderGroupCell) == null ? void 0 : x.call(i, {
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
var es = $e(Ja);
const ts = "rdg-group-row rdg-7-0-0-beta-60-e74a2be3";
function ns({ className: e, row: t, rowIdx: n, iterateOverViewportColumnsForRow: r, activeCellIdx: o, isRowSelected: i, setActivePosition: a, gridRowStart: s, groupBy: c, toggleGroup: l, ...m }) {
  const f = o === -1;
  let v = t.level;
  function p() {
    a({
      rowIdx: n,
      idx: -1
    }, { shouldFocus: !0 });
  }
  return /* @__PURE__ */ b(qt, {
    value: Q(() => ({
      isRowSelectionDisabled: !1,
      isRowSelected: i
    }), [i]),
    children: /* @__PURE__ */ b("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      tabIndex: f ? 0 : -1,
      className: We(Fn, ts, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, f && "rdg-row-active", e),
      onMouseDown: p,
      style: { gridRowStart: s },
      ...m,
      children: r(o).map(([d, x], g) => (g === 0 && d.key === "rdg-select-column" && (v += 1), /* @__PURE__ */ b(es, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellActive: x,
        column: d,
        row: t,
        groupColumnIndex: v,
        toggleGroup: l,
        isGroupByColumn: c.includes(d.key)
      }, d.key))).toArray()
    })
  });
}
var rs = $e(ns);
function nd({ columns: e, rows: t, rowHeight: n, rowKeyGetter: r, onCellKeyDown: o, onCellCopy: i, onCellPaste: a, onRowsChange: s, selectedRows: c, onSelectedRowsChange: l, renderers: m, groupBy: f, rowGrouper: v, expandedGroupIds: p, onExpandedGroupIdsChange: d, groupIdGetter: x, ...g }) {
  var Oe, le, be;
  const u = Tt(), h = (m == null ? void 0 : m.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? Qr, T = 1 + (((Oe = g.topSummaryRows) == null ? void 0 : Oe.length) ?? 0), { leftKey: I, rightKey: L } = In(g.direction), R = ge(Te), C = x ?? os, { columns: A, groupBy: z } = Q(() => {
    const O = e.toSorted(({ key: D }, { key: W }) => D === "rdg-select-column" ? -1 : W === "rdg-select-column" ? 1 : f.includes(D) ? f.includes(W) ? f.indexOf(D) - f.indexOf(W) : -1 : f.includes(W) ? 1 : 0), N = [];
    for (const [D, W] of O.entries()) f.includes(W.key) && (N.push(W.key), O[D] = {
      ...W,
      frozen: !0,
      renderCell: () => null,
      renderGroupCell: W.renderGroupCell ?? Gi,
      editable: !1
    });
    return {
      columns: O,
      groupBy: N
    };
  }, [e, f]), [F, U] = Q(() => {
    if (z.length === 0) return [void 0, t.length];
    const O = (N, [D, ...W], V) => {
      let te = 0;
      const j = {};
      for (const [he, we] of Object.entries(v(N, D))) {
        const [ve, pe] = W.length === 0 ? [we, we.length] : O(we, W, V + te + 1);
        j[he] = {
          childRows: we,
          childGroups: ve,
          startRowIndex: V + te
        }, te += pe + 1;
      }
      return [j, te];
    };
    return O(t, z, 0);
  }, [
    z,
    v,
    t
  ]), [Y, _] = Q(() => {
    const O = /* @__PURE__ */ new Set();
    if (!F) return [t, W];
    const N = [], D = (V, te, j) => {
      if (is(V)) {
        N.push(...V);
        return;
      }
      Object.keys(V).forEach((he, we, ve) => {
        const pe = C(he, te), Pe = p.has(pe), { childRows: xe, childGroups: Ce, startRowIndex: B } = V[he], J = {
          id: pe,
          parentId: te,
          groupKey: he,
          isExpanded: Pe,
          childRows: xe,
          level: j,
          posInSet: we,
          startRowIndex: B,
          setSize: ve.length
        };
        N.push(J), O.add(J), Pe && D(Ce, pe, j + 1);
      });
    };
    return D(F, void 0, 0), [N, W];
    function W(V) {
      return O.has(V);
    }
  }, [
    p,
    F,
    t,
    C
  ]), E = Q(() => typeof n == "function" ? (O) => _(O) ? n({
    type: "GROUP",
    row: O
  }) : n({
    type: "ROW",
    row: O
  }) : n, [_, n]), k = q((O) => {
    const N = Y.indexOf(O);
    for (let D = N - 1; D >= 0; D--) {
      const W = Y[D];
      if (_(W) && (!_(O) || O.parentId === W.id)) return [W, D];
    }
  }, [_, Y]), S = q((O) => {
    if (_(O)) return O.id;
    if (typeof r == "function") return r(O);
    const N = k(O);
    if (N !== void 0) {
      const { startRowIndex: D, childRows: W } = N[0];
      return D + W.indexOf(O) + 1;
    }
    return Y.indexOf(O);
  }, [
    k,
    _,
    r,
    Y
  ]), P = Q(() => {
    if (c == null) return null;
    yt(r);
    const O = new Set(c);
    for (const N of Y) _(N) && N.childRows.every((D) => c.has(r(D))) && O.add(N.id);
    return O;
  }, [
    _,
    r,
    c,
    Y
  ]);
  function Z(O) {
    if (!l) return;
    yt(r);
    const N = new Set(c);
    for (const D of Y) {
      const W = S(D);
      if (P != null && P.has(W) && !O.has(W)) if (_(D)) for (const V of D.childRows) N.delete(r(V));
      else N.delete(W);
      else if (!(P != null && P.has(W)) && O.has(W)) if (_(D)) for (const V of D.childRows) N.add(r(V));
      else N.add(W);
    }
    l(N);
  }
  function K(O, N) {
    if (o == null || o(O, N), N.isGridDefaultPrevented() || O.mode === "EDIT") return;
    const { column: D, rowIdx: W, setActivePosition: V } = O, te = (D == null ? void 0 : D.idx) ?? -1, j = Y[W];
    if (_(j) && (te === -1 && (N.key === I && j.isExpanded || N.key === L && !j.isExpanded) && (N.preventDefault(), N.preventGridDefault(), Te(j.id)), te === -1 && N.key === I && !j.isExpanded && j.level !== 0)) {
      const he = k(j);
      he !== void 0 && (N.preventGridDefault(), V({
        idx: te,
        rowIdx: he[1]
      }));
    }
  }
  function se({ row: O, column: N }, D) {
    _(O) || i == null || i({
      row: O,
      column: N
    }, D);
  }
  function ce({ row: O, column: N }, D) {
    return _(O) ? O : a({
      row: O,
      column: N
    }, D);
  }
  function Be(O, { indexes: N, column: D }) {
    if (!s) return;
    const W = [...t], V = [];
    for (const te of N) {
      const j = t.indexOf(Y[te]);
      W[j] = O[te], V.push(j);
    }
    s(W, {
      indexes: V,
      column: D
    });
  }
  function Te(O) {
    const N = new Set(p);
    N.has(O) ? N.delete(O) : N.add(O), d(N);
  }
  function _e(O, { row: N, rowClass: D, onCellMouseDown: W, onCellClick: V, onCellDoubleClick: te, onCellContextMenu: j, onRowChange: he, draggedOverCellIdx: we, activeCellEditor: ve, isRowSelectionDisabled: pe, isTreeGrid: Pe, ...xe }) {
    if (_(N)) {
      const { startRowIndex: J } = N;
      return /* @__PURE__ */ b(rs, {
        ...xe,
        "aria-rowindex": T + J + 1,
        row: N,
        groupBy: z,
        toggleGroup: R
      }, O);
    }
    let Ce = xe["aria-rowindex"];
    const B = k(N);
    if (B !== void 0) {
      const { startRowIndex: J, childRows: de } = B[0], Ie = de.indexOf(N);
      Ce = J + T + Ie + 2;
    }
    return h(O, {
      ...xe,
      "aria-rowindex": Ce,
      row: N,
      rowClass: D,
      onCellMouseDown: W,
      onCellClick: V,
      onCellDoubleClick: te,
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
    "aria-rowcount": U + 1 + (((le = g.topSummaryRows) == null ? void 0 : le.length) ?? 0) + (((be = g.bottomSummaryRows) == null ? void 0 : be.length) ?? 0),
    columns: A,
    rows: Y,
    rowHeight: E,
    rowKeyGetter: S,
    onRowsChange: Be,
    selectedRows: P,
    onSelectedRowsChange: Z,
    onCellKeyDown: K,
    onCellCopy: se,
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
function rd({ row: e, column: t, onRowChange: n, onClose: r }) {
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
const ie = {
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
  "--rdg-color": ie.gray800,
  "--rdg-header-color": ie.gray700,
  "--rdg-border-color": ie.gray400,
  "--rdg-background-color": ie.forcewhite,
  "--rdg-header-background-color": ie.forcewhite,
  "--rdg-row-hover-background-color": ie.forcewhite,
  "--rdg-row-selected-hover-background-color": ie.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": ie.primary400,
  "--rdg-expanded-accent-color": ie.primary400,
  "--rdg-row-selected-color": ie.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": ie.primary500,
  "--rdg-scrollbar-track-background": ie.gray100,
  "--rdg--scrollbar-thumb-hover-background": ie.primary500,
  "--rdg--scrollbar-track-hover-background": ie.gray200
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
}), ds = "data-grid-hidden-column-visibility", us = (e) => {
  try {
    const t = localStorage.getItem(e);
    if (!t)
      return null;
    const n = JSON.parse(t);
    return Array.isArray(n) ? n : null;
  } catch {
    return null;
  }
}, fs = (e, t) => {
  try {
    localStorage.setItem(e, JSON.stringify(t));
  } catch {
  }
}, hs = ({
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
  const [f, v] = Me.useState(0), [p, d] = Me.useState(
    null
  ), [x, g] = Me.useState([]), u = q(
    (C) => {
      fs(i, C), v((A) => A + 1), g(C);
    },
    [i]
  ), h = JSON.stringify(r ?? []), T = Q(
    () => JSON.parse(h),
    [h]
  );
  Ge(() => {
    u(us(i) ?? T);
  }, [i, T, u]);
  const I = q(
    (C) => {
      u(C), a == null || a(C);
    },
    [u, a]
  ), L = q(() => {
    I(T), s == null || s();
  }, [I, T, s]), R = Q(
    () => e.filter((C) => !(n != null && n.includes(C.key))),
    [e, n]
  );
  return /* @__PURE__ */ b(
    It.Provider,
    {
      value: {
        gridKey: `data-grid-${f}`,
        chooserAnchor: p,
        setChooserAnchor: d,
        columns: R,
        hiddenColumn: x,
        setHiddenColumn: I,
        resetHiddenColumns: L,
        resetLabel: m,
        reorderColumns: c,
        reorderAnnouncement: l,
        enabled: o
      },
      children: t
    }
  );
}, Ln = me(vi)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${ie.primary500};
    }
`, gs = me(Ar)`
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
`, ms = me.span`
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
`, ws = me.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`, ps = () => /* @__PURE__ */ b("svg", { width: "10", height: "16", viewBox: "0 0 10 16", "aria-hidden": "true", focusable: "false", children: [3, 8, 13].map((e) => /* @__PURE__ */ re("g", { children: [
  /* @__PURE__ */ b("circle", { cx: "3", cy: e, r: "1.1", fill: "currentColor" }),
  /* @__PURE__ */ b("circle", { cx: "7", cy: e, r: "1.1", fill: "currentColor" })
] }, e)) }), ur = (e, t, n) => {
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}, ys = (e, t) => e.length === t.length && e.every((n, r) => n === t[r]), bs = (e, t, n) => {
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
}, od = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = it(It), n = Me.useRef(null), r = q(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ b("div", { ref: n, children: /* @__PURE__ */ b(e, { onClick: r }) });
}, vs = () => {
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
  } = it(It), [l, m] = ae(null), [f, v] = ae(null), [p, d] = ae(""), x = Q(() => e.map((E) => E.key), [e]), g = l ?? x, u = Q(() => new Map(e.map((E) => [E.key, E])), [e]), h = fe(/* @__PURE__ */ new Map()), T = fe([]), I = fe(null), L = fe(null);
  Ge(() => {
    m((E) => E && ys(E, x) ? null : E);
  }, [x]);
  const R = q(() => {
    o(null), m(null), d("");
  }, [o]), C = q(() => {
    i(), o(null), m(null);
  }, [i, o]), A = q(
    (E) => () => {
      const k = t.indexOf(E);
      n(
        k === -1 ? [...t, E] : t.filter((S) => S !== E)
      );
    },
    [t, n]
  ), z = q(
    (E, k) => {
      var Z;
      const S = String(((Z = u.get(E)) == null ? void 0 : Z.name) ?? E), P = k.indexOf(E) + 1;
      d(
        c ? c(S, P, k.length) : `${S} ${P}/${k.length}`
      );
    },
    [u, c]
  ), F = q(
    (E) => (k) => {
      !s || k.button !== 0 || (k.preventDefault(), k.stopPropagation(), k.currentTarget.setPointerCapture(k.pointerId), T.current = g, I.current = {
        key: E,
        moved: !1,
        pointerId: k.pointerId,
        grip: k.currentTarget
      }, v(E));
    },
    [g, s]
  ), U = q(() => {
    var k;
    const E = I.current;
    if (E && (I.current = null, v(null), E.moved)) {
      s == null || s(T.current), z(E.key, T.current), (k = L.current) == null || k.call(L);
      const S = (Z) => Z.stopPropagation(), P = () => {
        window.removeEventListener("click", S, !0), window.removeEventListener("pointerdown", P, !0), L.current = null;
      };
      L.current = P, window.addEventListener("click", S, !0), window.addEventListener("pointerdown", P, !0);
    }
  }, [z, s]);
  Ge(() => () => {
    var E;
    return (E = L.current) == null ? void 0 : E.call(L);
  }, []), Ge(() => {
    if (!f)
      return;
    const E = (S) => {
      const P = I.current;
      if (!P || S.pointerId !== P.pointerId)
        return;
      if (P.grip.isConnected && !P.grip.hasPointerCapture(P.pointerId))
        try {
          P.grip.setPointerCapture(P.pointerId);
        } catch {
        }
      const Z = T.current.indexOf(P.key), K = bs(S.clientY, T.current, h.current);
      Z === -1 || K === -1 || K === Z || (P.moved = !0, T.current = ur(T.current, Z, K), m(T.current));
    }, k = (S) => {
      var P;
      S.pointerId === ((P = I.current) == null ? void 0 : P.pointerId) && U();
    };
    return window.addEventListener("pointermove", E), window.addEventListener("pointerup", k), window.addEventListener("pointercancel", k), () => {
      window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", k);
    };
  }, [f, U]);
  const Y = q(
    (E) => (k) => {
      if (!s || !k.altKey)
        return;
      const S = k.key === "ArrowUp" ? -1 : k.key === "ArrowDown" ? 1 : 0;
      if (!S)
        return;
      k.preventDefault(), k.stopPropagation();
      const P = g.indexOf(E), Z = P + S;
      if (P === -1 || Z < 0 || Z >= g.length)
        return;
      const K = ur(g, P, Z);
      T.current = K, m(K), s(K), z(E, K);
    },
    [z, g, s]
  ), _ = q(
    (E) => (k) => {
      k ? h.current.set(E, k) : h.current.delete(E);
    },
    []
  );
  return /* @__PURE__ */ re(nt, { children: [
    /* @__PURE__ */ re(
      yi,
      {
        id: "column-visibility-menu",
        anchorReference: "anchorPosition",
        anchorPosition: r ?? void 0,
        transformOrigin: { vertical: "top", horizontal: "right" },
        open: r !== null,
        onClose: R,
        children: [
          g.map((E) => {
            const k = u.get(E);
            return k ? /* @__PURE__ */ re(
              gs,
              {
                ref: _(E),
                "data-dragging": f === E,
                "aria-keyshortcuts": s ? "Alt+ArrowUp Alt+ArrowDown" : void 0,
                onKeyDown: Y(E),
                onClick: A(E),
                children: [
                  /* @__PURE__ */ b(Ln, { checked: !t.includes(E) }),
                  k.name,
                  s && /* @__PURE__ */ b(
                    ms,
                    {
                      "aria-hidden": "true",
                      onPointerDown: F(E),
                      onClick: (S) => S.stopPropagation(),
                      children: /* @__PURE__ */ b(ps, {})
                    }
                  )
                ]
              },
              E
            ) : null;
          }),
          a && /* @__PURE__ */ b(bi, {}),
          a && /* @__PURE__ */ b(Ar, { onClick: C, children: a })
        ]
      }
    ),
    r !== null && /* @__PURE__ */ b(ws, { role: "status", "aria-live": "polite", children: p })
  ] });
};
var tt = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(tt || {}), Dt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(Dt || {});
function xs(e, t, n, r) {
  return (o, i) => {
    const a = r ? r(o) : o[e], s = r ? r(i) : i[e];
    try {
      if (n)
        return n(a, s, o, i);
      if (t === tt.NUMBER) {
        const c = Number(a), l = Number(s);
        return isNaN(c) || isNaN(l) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(c) ? 1 : -1) : c - l;
      } else if (t === tt.DATE) {
        const c = new Date(a).getTime(), l = new Date(s).getTime();
        return isNaN(c) || isNaN(l) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(c) ? 1 : -1) : c - l;
      }
      return t === tt.STRING || !t ? String(a).localeCompare(String(s)) : t === tt.BOOLEAN ? +!!a - +!!s : 0;
    } catch (c) {
      return console.error("Error in sorting:", c), 0;
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
  const [i, a] = ae(n ?? []), s = r ?? i, c = Q(() => !o || s.length === 0 ? t : [...t].sort((m, f) => {
    for (const v of s) {
      const p = e.find((g) => g.key === v.columnKey), x = xs(
        v.columnKey,
        p == null ? void 0 : p.type,
        p == null ? void 0 : p.sortComparator,
        p == null ? void 0 : p.getColumnValue
      )(m, f);
      if (x !== 0)
        return v.direction === "ASC" ? x : -x;
    }
    return 0;
  }), [t, s, o, e]), l = q((m) => {
    m.length !== 0 ? a(m) : a((f) => f.length === 1 ? [
      {
        columnKey: f[0].columnKey,
        direction: f[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : f);
  }, []);
  return {
    sortedRows: c,
    sortColumns: i,
    setSortedColumns: l
  };
}, vt = 40, Ds = 200, ks = "rdg-row-expanded", Ss = "rdg-detail-row", ro = "__rdgDetailParent", Ts = (e) => ({ id: `rdg-detail:${e.id}`, [ro]: e }), Hn = (e) => e[ro], Ut = (e) => Hn(e) !== void 0, Ps = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, Ts(r)] : [r]);
}, Is = me.button`
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
`, Es = () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ b("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), oo = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ b(
    Is,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), io(t, e.id);
      },
      children: /* @__PURE__ */ b(Es, {})
    }
  );
}, io = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, Rs = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', ao = (e, t, n, r = []) => Ut(e) || t === Os || t === so || r.includes(t) ? !1 : !(n instanceof Element && n.closest(Rs)), id = (e, t, n) => ao(e, t, n), fr = me.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, Ms = me.span`
    display: inline-block;
    flex: 0 0 ${vt - 16}px;
`, Os = _r, so = "rdg-expander-column", Ns = (e) => ({
  key: so,
  name: "",
  frozen: !0,
  width: vt,
  minWidth: vt,
  maxWidth: vt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ b(oo, { row: t, expandable: e })
}), co = (e) => e.frozen === !0 || e.frozen === "start", Dn = (e) => e.frozen === "end" || !!e.frozenRight, dn = (e) => co(e) || Dn(e), As = (e, t) => {
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
      const l = Hn(c.row);
      return l ? t(l) : ((m = s.renderCell) == null ? void 0 : m.call(s, c)) ?? null;
    }
  });
}, Fs = (e, t, n) => (r) => {
  const o = Hn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, Ls = (e, t = []) => Ut(e) ? Ss : t.includes(e.id) ? ks : "", lo = me(Ci)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${ie.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${ie.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${ie.gray800};
  }

  fieldset {
    display: none;
  }

}
`, zn = Me.createContext({
  filters: {},
  setFilters: () => {
  }
}), Hs = ({
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
}, un = (e) => e.stopPropagation(), zs = ({ options: e, renderInput: t, ...n }) => {
  const r = Q(
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
}, Ws = me(xi)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, $t = (e) => e.stopPropagation(), fn = ({ children: e, ...t }) => /* @__PURE__ */ re(Ws, { children: [
  Ur(t),
  e
] }), Ys = ({
  col: e,
  ...t
}) => {
  const { filters: n, setFilters: r } = it(zn), o = n[e.key], i = q(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e.key, n, r]
  );
  return e.filterEnabled ? e.filterType === Dt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ b(fn, { ...t, children: /* @__PURE__ */ b(
    zs,
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
}, $s = (e) => (t) => /* @__PURE__ */ b(Ys, { col: e, ...t }), Bs = {
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
}, _s = (e, t, n) => {
  let r;
  const o = Bs[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function hn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Us = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Vs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Gs = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, js = {
  date: hn({
    formats: Us,
    defaultWidth: "full"
  }),
  time: hn({
    formats: Vs,
    defaultWidth: "full"
  }),
  dateTime: hn({
    formats: Gs,
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
function wt(e) {
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
const Ks = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Qs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Zs = {
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
}, Js = {
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
}, ec = {
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
}, tc = {
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
}, nc = (e, t) => {
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
}, rc = {
  ordinalNumber: nc,
  era: wt({
    values: Ks,
    defaultWidth: "wide"
  }),
  quarter: wt({
    values: Qs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wt({
    values: Zs,
    defaultWidth: "wide"
  }),
  day: wt({
    values: Js,
    defaultWidth: "wide"
  }),
  dayPeriod: wt({
    values: ec,
    defaultWidth: "wide",
    formattingValues: tc,
    defaultFormattingWidth: "wide"
  })
};
function pt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? ic(s, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      oc(s, (f) => f.test(a))
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
function oc(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function ic(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ac(e) {
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
const sc = /^(\d+)(th|st|nd|rd)?/i, cc = /\d+/i, lc = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, dc = {
  any: [/^b/i, /^(a|c)/i]
}, uc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, fc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, hc = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gc = {
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
}, mc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, wc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, pc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, yc = {
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
}, bc = {
  ordinalNumber: ac({
    matchPattern: sc,
    parsePattern: cc,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: pt({
    matchPatterns: lc,
    defaultMatchWidth: "wide",
    parsePatterns: dc,
    defaultParseWidth: "any"
  }),
  quarter: pt({
    matchPatterns: uc,
    defaultMatchWidth: "wide",
    parsePatterns: fc,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: pt({
    matchPatterns: hc,
    defaultMatchWidth: "wide",
    parsePatterns: gc,
    defaultParseWidth: "any"
  }),
  day: pt({
    matchPatterns: mc,
    defaultMatchWidth: "wide",
    parsePatterns: wc,
    defaultParseWidth: "any"
  }),
  dayPeriod: pt({
    matchPatterns: pc,
    defaultMatchWidth: "any",
    parsePatterns: yc,
    defaultParseWidth: "any"
  })
}, vc = {
  code: "en-US",
  formatDistance: _s,
  formatLong: js,
  formatRelative: qs,
  localize: rc,
  match: bc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let xc = {};
function Et() {
  return xc;
}
const uo = 6048e5, Cc = 864e5, hr = Symbol.for("constructDateFrom");
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
function Dc(e, ...t) {
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
function kc(e, t, n) {
  const [r, o] = Dc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = mr(r), a = mr(o), s = +i - gr(i), c = +a - gr(a);
  return Math.round((s - c) / Cc);
}
function Sc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Tc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in);
  return kc(n, Sc(n)) + 1;
}
function kt(e, t) {
  var s, c, l, m;
  const n = Et(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((m = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = Se(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
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
function Pc(e, t) {
  const n = fo(e, t), r = Ye(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Vt(r);
}
function Ic(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +Vt(n) - +Pc(n);
  return Math.round(r / uo) + 1;
}
function ho(e, t) {
  var m, f, v, p;
  const n = Se(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Et(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (v = o.locale) == null ? void 0 : v.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = Ye((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = kt(a, t), c = Ye((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const l = kt(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function Ec(e, t) {
  var s, c, l, m;
  const n = Et(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((m = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, o = ho(e, t), i = Ye((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), kt(i, t);
}
function Rc(e, t) {
  const n = Se(e, t == null ? void 0 : t.in), r = +kt(n, t) - +Ec(n, t);
  return Math.round(r / uo) + 1;
}
function ee(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const He = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ee(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ee(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ee(e.getDate(), t.length);
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
    return ee(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ee(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ee(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ee(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ee(o, t.length);
  }
}, Je = {
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
    return He.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ho(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return ee(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : ee(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = fo(e);
    return ee(n, t.length);
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
    return ee(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ee(r, 2);
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
        return ee(r, 2);
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
        return He.M(e, t);
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
        return ee(r + 1, 2);
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
    const o = Rc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ee(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ic(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ee(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : He.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Tc(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ee(r, t.length);
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
        return ee(i, 2);
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
        return ee(i, t.length);
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
        return ee(o, t.length);
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
    switch (r === 12 ? o = Je.noon : r === 0 ? o = Je.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Je.evening : r >= 12 ? o = Je.afternoon : r >= 4 ? o = Je.morning : o = Je.night, t) {
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
    return He.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : He.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ee(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ee(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : He.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : He.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return He.S(e, t);
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
    return ee(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ee(+e, t.length);
  }
};
function pr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + ee(i, 2);
}
function yr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ee(Math.abs(e) / 60, 2) : Ve(e, t);
}
function Ve(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ee(Math.trunc(r / 60), 2), i = ee(r % 60, 2);
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
}, Mc = (e, t) => {
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
}, Oc = {
  p: go,
  P: Mc
}, Nc = /^D+$/, Ac = /^Y+$/, Fc = ["D", "DD", "YY", "YYYY"];
function Lc(e) {
  return Nc.test(e);
}
function Hc(e) {
  return Ac.test(e);
}
function zc(e, t, n) {
  const r = Wc(e, t, n);
  if (console.warn(r), Fc.includes(e)) throw new RangeError(r);
}
function Wc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function mo(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function wo(e) {
  return !(!mo(e) && typeof e != "number" || isNaN(+Se(e)));
}
const Yc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $c = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Bc = /^'([^]*?)'?$/, _c = /''/g, Uc = /[a-zA-Z]/;
function Vc(e, t, n) {
  var m, f, v, p, d, x, g, u;
  const r = Et(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? vc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((x = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : x.weekStartsOn) ?? r.weekStartsOn ?? ((u = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : u.weekStartsOn) ?? 0, s = Se(e, n == null ? void 0 : n.in);
  if (!wo(s))
    throw new RangeError("Invalid time value");
  let c = t.match($c).map((h) => {
    const T = h[0];
    if (T === "p" || T === "P") {
      const I = Oc[T];
      return I(h, o.formatLong);
    }
    return h;
  }).join("").match(Yc).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const T = h[0];
    if (T === "'")
      return { isToken: !1, value: Gc(h) };
    if (wr[T])
      return { isToken: !0, value: h };
    if (T.match(Uc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + T + "`"
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
    const T = h.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Hc(T) || !(n != null && n.useAdditionalDayOfYearTokens) && Lc(T)) && zc(T, t, String(e));
    const I = wr[T[0]];
    return I(s, T, o.localize, l);
  }).join("");
}
function Gc(e) {
  const t = e.match(Bc);
  return t ? t[1].replace(_c, "'") : e;
}
function jc() {
  return Object.assign({}, Et());
}
function vr(e, t, n) {
  const r = jc(), o = Kc(e, n.timeZone, n.locale ?? r.locale);
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
function Kc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Qc(e, t) {
  const n = nl(t);
  return "formatToParts" in n ? Jc(n, e) : el(n, e);
}
const Zc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Jc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = Zc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function el(e, t) {
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
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), tl = xr === "06/25/2014, 00:00:00" || xr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function nl(e) {
  return gn[e] || (gn[e] = tl ? new Intl.DateTimeFormat("en-US", {
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
const Cr = 36e5, rl = 6e4, mn = {
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
    return Dr(o, a) ? (i = Math.abs(o) * Cr + a * rl, r[1] === "+" ? -i : i) : NaN;
  }
  if (al(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : ol(t), s = kn(a, e);
    return -(n ? s : il(t, s, e));
  }
  return NaN;
}
function ol(e) {
  return po(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function kn(e, t) {
  const n = Qc(e, t), r = po(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function il(e, t, n) {
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
function al(e) {
  if (kr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), kr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const sl = 60 * 1e3, cl = {
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
        return et(r);
      case "XXXXX":
      case "XXX":
      default:
        return et(r, ":");
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
        return et(r);
      case "xxxxx":
      case "xxx":
      default:
        return et(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = wn(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ll(r, ":");
      case "OOOO":
      default:
        return "GMT" + et(r, ":");
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
  const n = e ? Wn(e, t, !0) / sl : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
function et(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Gt(Math.floor(r / 60), 2), i = Gt(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function Sr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Gt(Math.abs(e) / 60, 2) : et(e, t);
}
function ll(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Gt(i, 2);
}
function Tr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const dl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, pn = 36e5, Pr = 6e4, ul = 2, ue = {
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
  timeZone: dl
};
function yo(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? ul : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = fl(e), { year: o, restDateString: i } = hl(r.date, n), a = gl(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let c = 0, l;
    if (r.time && (c = ml(r.time), c === null || isNaN(c)))
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
function fl(e) {
  const t = {};
  let n = ue.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ue.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ue.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function hl(e, t) {
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
function gl(e, t) {
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
    return yl(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
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
function ml(e) {
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
const wl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], pl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function bo(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Er(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = bo(e);
    if (r && n > pl[t] || !r && n > wl[t])
      return !1;
  }
  return !0;
}
function yl(e, t) {
  if (t < 1)
    return !1;
  const n = bo(e);
  return !(n && t > 366 || !n && t > 365);
}
function Rr(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function yn(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const bl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function vl(e, t, n = {}) {
  t = String(t);
  const r = t.match(bl);
  if (r) {
    const o = yo(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", l = i.replace(a, "'" + cl[a[0]](o, a, n) + "'");
      return c ? l.substring(0, s - 1) + l.substring(s + 1) : l;
    }, t);
  }
  return Vc(e, t, n);
}
function xl(e, t, n) {
  e = yo(e, n);
  const r = Wn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function Cl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, vl(xl(e, t, { timeZone: r.timeZone }), n, r);
}
var vo = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(vo || {});
const Dl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !mo(e) && typeof e == "string" ? new Date(e) : e;
  return wo(r) ? Cl(e, n, t) : "--";
}, Mr = (e) => e.trim().toLowerCase(), kl = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: c, hiddenColumn: l } = it(It), m = q((f) => {
    const v = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === tt.DATE)
        return ({ row: x }) => {
          var g, u;
          return Dl(
            x[f.key],
            ((g = f.dateOptions) == null ? void 0 : g.formatDate) ?? vo.DATE_WITH_TIME,
            (u = f.dateOptions) == null ? void 0 : u.timeZone
          );
        };
    }, p = () => f.renderHeaderCell ? f.renderHeaderCell : $s(f), d = {
      ...f,
      renderCell: v(),
      renderHeaderCell: p()
    };
    return f.frozenRight && (d.frozen = "end"), d;
  }, []);
  return Q(() => {
    const f = [];
    if (t && !n && f.push(Ns(t)), n) {
      const v = (r ?? []).map((g) => g.id), p = v.length > 0 && v.every((g) => o == null ? void 0 : o.includes(g)), d = (g) => {
        const u = (o ?? []).filter((h) => !v.includes(h));
        return g ? [...u, ...v] : u;
      }, x = t ? 50 + vt : 50;
      f.push({
        ...mt,
        width: x,
        minWidth: x,
        maxWidth: x,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ re(fr, { children: [
          t && /* @__PURE__ */ b(Ms, { "aria-hidden": !0 }),
          a ? a({
            checked: p,
            "aria-label": s,
            onChange: (g) => i == null ? void 0 : i(d(g))
          }) : /* @__PURE__ */ b(
            Ln,
            {
              checked: p,
              slotProps: { input: { "aria-label": s } },
              onChange: (g, u) => i == null ? void 0 : i(d(u))
            }
          )
        ] }),
        renderCell: t ? (g) => {
          var u;
          return /* @__PURE__ */ re(fr, { children: [
            /* @__PURE__ */ b(oo, { row: g.row, expandable: t }),
            (u = mt.renderCell) == null ? void 0 : u.call(mt, g)
          ] });
        } : mt.renderCell
      });
    }
    return f.push(...e.map((v) => m(v))), c && l ? f.filter((v) => !l.includes(v.key)) : f;
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
function Tl(e) {
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
function bn(e) {
  var t = Tl(e);
  return "".concat(t.value).concat(t.unit);
}
var Pl = function(e, t, n) {
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
}, Il = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, El = Pl("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Rl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, l = e.size, m = l === void 0 ? 15 : l, f = e.margin, v = f === void 0 ? 2 : f, p = Il(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), d = jt({ display: "inherit" }, c), x = function(g) {
    return {
      backgroundColor: o,
      width: bn(m),
      height: bn(m),
      margin: bn(v),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(El, " ").concat(0.75 / a, "s ").concat(g * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Wt.createElement(
    "span",
    jt({ style: d }, p),
    Wt.createElement("span", { style: x(1) }),
    Wt.createElement("span", { style: x(2) }),
    Wt.createElement("span", { style: x(3) })
  ) : null;
}
const Ml = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === Dt.TEXT && typeof n == "string" && typeof r == "string" ? Mr(n).includes(Mr(r)) : t === Dt.AUTOCOMPLETE ? n === r : !1, Ol = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = it(zn);
  return Q(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((c) => c.key === i);
      return s ? Ml({
        comparator: s.filterComparator,
        filterType: s.filterType ?? Dt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Nl = me.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, Al = me.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, Fl = Me.memo(
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
      (l, m) => {
        t(m);
      },
      [t]
    ), c = q(
      (l) => {
        n(parseInt(l.target.value, 10)), t(0);
      },
      [n, t]
    );
    return /* @__PURE__ */ re(Nl, { children: [
      a ? /* @__PURE__ */ b(Al, { children: a(o) }) : null,
      /* @__PURE__ */ b(
        ki,
        {
          labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ b("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
          labelDisplayedRows: ({ from: l, to: m, count: f }) => `${l}-${m} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${f}`,
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
var Ll = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(Ll || {});
const Hl = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = ae(0), [c, l] = ae(e), m = n !== void 0, f = o !== void 0, v = m ? n : a, p = f ? o : c, d = q(
    (h) => {
      m || s(h), r == null || r(h);
    },
    [m, r]
  ), x = q(
    (h) => {
      f || l(h), i == null || i(h);
    },
    [f, i]
  ), g = q(() => {
    d(0), x(e);
  }, [d, x, e]), u = fe(p);
  return Ge(() => {
    u.current !== p && (u.current = p, d(0));
  }, [p]), {
    currentPage: v,
    pageSize: p,
    defaultPageSize: e,
    setCurrentPage: d,
    setPageSize: x,
    resetPagination: g
  };
}, Or = 50, zl = me.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, Wl = me.div`
    background-color: ${ie.primary500};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, Yl = Me.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = q(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ b(
      Ln,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), $l = (e) => /* @__PURE__ */ b(Yl, { ...e }), Bl = "Select all rows", _l = ({
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
  selectAllLabel: m = Bl,
  noDataMessage: f,
  filters: v,
  setFilters: p,
  pagination: d,
  renderers: x,
  expandable: g,
  rowGestures: u,
  rowHeight: h,
  rowClass: T,
  onCellClick: I,
  onColumnResize: L,
  columnWidths: R,
  onColumnWidthsChange: C,
  ...A
}) => {
  var xe, Ce;
  const { gridKey: z } = it(It), { pageSize: F, currentPage: U, setCurrentPage: Y, setPageSize: _ } = Hl(
    d == null ? void 0 : d.defaultPageSize,
    d == null ? void 0 : d.control
  ), E = (x == null ? void 0 : x.renderCheckbox) ?? $l, k = kl({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: g,
    selectionEnabled: !!l,
    selectableRows: n,
    selectedRows: c,
    onSelectedRowsChange: l,
    renderCheckbox: E,
    selectAllLabel: m
  }), S = Q(() => k.map((B) => B.key).join("|"), [k]), P = Q(
    () => k.some((B) => B.filterEnabled),
    [k]
  ), Z = Q(
    () => (d == null ? void 0 : d.enabled) && !d.remotePagination,
    [d]
  ), K = Q(() => !p, [p]), se = Ol({
    columns: k,
    rows: n,
    enabled: K
  }), ce = Q(() => !i, [i]), Be = s ?? ce, {
    sortedRows: Te,
    sortColumns: _e,
    setSortedColumns: Oe
  } = Cs({
    columns: k,
    rows: se,
    defaultSortColumns: a,
    sortColumns: ce ? void 0 : o,
    enabled: Be
  }), le = Q(() => {
    if (!Z)
      return U;
    const B = Math.max(0, Math.ceil(se.length / F) - 1);
    return Math.min(U, B);
  }, [Z, U, F, se.length]);
  Ge(() => {
    le !== U && Y(le);
  }, [le, U, Y]);
  const be = Q(() => Z ? Te.slice(le * F, (le + 1) * F) : Te, [Te, Z, le, F]), O = Q(
    () => g ? Ps(be, g.expandedIds) : be,
    [g, be]
  ), N = Q(
    () => g ? As(k, g.renderDetail) : k,
    [g, k]
  ), D = q(
    (B, J) => L == null ? void 0 : L(B.key, J),
    [L]
  ), W = fe(S);
  ot(() => {
    if (W.current === S || (W.current = S, !R || !C))
      return;
    const B = new Map([...R].filter(([, J]) => J.type === "resized"));
    B.size !== R.size && C(B);
  }, [S, R, C]);
  const { renderRow: V, ...te } = x ?? {}, j = fe(void 0), he = Q(() => {
    if (V)
      return (B, J) => {
        var Ie;
        const { iterateOverViewportColumnsForRow: de } = J;
        return ((Ie = j.current) == null ? void 0 : Ie.iterate) !== de && (j.current = {
          iterate: de,
          columns: [...de(void 0)].map(([st]) => st)
        }), V(B, {
          ...J,
          viewportColumns: j.current.columns
        });
      };
  }, [V]), we = q(
    (B, J) => {
      const de = () => {
        const Ie = Ls(B, g == null ? void 0 : g.expandedIds);
        return Ie || (J === 0 ? "first-row" : J === n.length - 1 ? "last-row" : "");
      };
      return [T == null ? void 0 : T(B, J), de()].filter(Boolean).join(" ");
    },
    [n, g == null ? void 0 : g.expandedIds, T]
  ), ve = q(
    (B) => {
      u != null && u.onClick ? u.onClick(B) : g && io(g, B.id);
    },
    [u, g]
  ), pe = q(
    (B, J) => {
      if (I == null || I(B, J), J.isGridDefaultPrevented() || !g && !(u != null && u.onClick))
        return;
      const de = window.getSelection();
      J.detail <= 1 && de && !de.isCollapsed && J.target instanceof Node && de.containsNode(J.target, !0) || ao(
        B.row,
        B.column.key,
        J.target,
        u == null ? void 0 : u.excludedColumns
      ) && ve(B.row);
    },
    [I, g, u, ve]
  ), Pe = !(d != null && d.remotePagination);
  return Ge(() => {
    if (!Pe)
      return;
    const B = c == null ? void 0 : c.filter(
      (J) => n.some((de) => de.id === J)
    );
    (B == null ? void 0 : B.length) != (c == null ? void 0 : c.length) && (l == null || l(B ?? []));
  }, [n, c, Pe]), /* @__PURE__ */ re(ls, { $pagination: !!(d != null && d.enabled), children: [
    /* @__PURE__ */ b("div", { children: /* @__PURE__ */ b(
      no,
      {
        selectedRows: c ? new Set(c) : void 0,
        onSelectedRowsChange: (B) => {
          l == null || l(Array.from(B));
        },
        rowKeyGetter: (B) => B.id,
        rows: O,
        onSortColumnsChange: ce ? Oe : i,
        sortColumns: ce ? _e : o,
        columns: N,
        rowClass: we,
        headerRowHeight: P ? 70 : void 0,
        onCellClick: pe,
        onColumnResize: L ? D : void 0,
        columnWidths: R,
        onColumnWidthsChange: C,
        ...A,
        rowHeight: g ? Fs(
          h,
          Or,
          g.detailHeight ?? Ds
        ) : h ?? Or,
        renderers: {
          renderCheckbox: E,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...f != null && !t ? {
            noRowsFallback: /* @__PURE__ */ b("div", { className: "rdg-no-data", children: f })
          } : {},
          ...te,
          renderRow: he
        },
        style: { ...cs, ...e ?? {} }
      },
      `${z}:${S}`
    ) }),
    d != null && d.enabled ? /* @__PURE__ */ b(
      Fl,
      {
        ...(d == null ? void 0 : d.remotePagination) ?? {
          currentPage: le,
          setCurrentPage: Y,
          pageSize: F,
          setPageSize: _,
          totalCount: se.length
        },
        labels: d.labels ?? ((xe = d.remotePagination) == null ? void 0 : xe.labels),
        totalLabel: d.totalLabel ?? ((Ce = d.remotePagination) == null ? void 0 : Ce.totalLabel)
      }
    ) : null,
    t ? /* @__PURE__ */ re(zl, { children: [
      /* @__PURE__ */ b(Wl, {}),
      /* @__PURE__ */ b(Rl, { color: ie.primary500 })
    ] }) : null,
    /* @__PURE__ */ b(vs, {})
  ] });
}, ad = ({
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
    resetLabel: f
  } = {},
  ...v
}) => /* @__PURE__ */ b(Hs, { filters: e, setFilters: t, children: /* @__PURE__ */ b(
  hs,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: c,
    onColumnOrderChange: l,
    reorderAnnouncement: m,
    resetLabel: f,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ b(_l, { ...v, columns: n, filters: e, setFilters: t })
  }
) });
export {
  wa as Cell,
  tt as ColumnType,
  vo as DATE_FORMAT,
  Ll as DEFAULT_PAGE_SIZES,
  ad as DataGrid,
  Ln as DataGridCheckbox,
  Rn as DataGridDefaultRenderersContext,
  so as EXPANDER_COLUMN_KEY,
  oo as ExpanderToggle,
  Dt as FilterType,
  za as Row,
  Os as SELECTION_COLUMN_KEY,
  _r as SELECT_COLUMN_KEY,
  Mn as SelectCellFormatter,
  mt as SelectColumn,
  ji as ToggleGroup,
  nd as TreeDataGrid,
  od as VisibilityColumnChooser,
  vs as VisibilityMenu,
  ao as clickBelongsToRow,
  id as clickExpandsRow,
  Dl as convertDate,
  cs as defaultTheme,
  Fs as detailAwareRowHeight,
  Ls as detailRowClass,
  Mr as getStringToCompare,
  Ut as isDetailRow,
  _i as renderCheckbox,
  Ur as renderHeaderCell,
  $a as renderSortIcon,
  Ba as renderSortPriority,
  rd as renderTextEditor,
  Gi as renderToggleGroup,
  Xi as renderValue,
  ie as taktikTheme,
  ca as useHeaderRowSelection,
  Hl as usePagination,
  Xr as useRowSelection,
  As as withDetailRendering,
  Ps as withDetailRows
};
