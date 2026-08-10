import { jsx as b, jsxs as ne, Fragment as wn } from "react/jsx-runtime";
import * as Ot from "react";
import pe, { createContext as bt, memo as We, forwardRef as yn, useContext as De, useMemo as B, useCallback as Q, useRef as ke, useEffect as Ge, useState as J, useImperativeHandle as Go, useLayoutEffect as _o, useId as Bo } from "react";
import { flushSync as Ft } from "react-dom";
import Se from "@emotion/styled";
import Uo from "@mui/material/Box";
import jo from "@mui/material/TextField";
import Ko from "@mui/material/Autocomplete";
import qo from "@mui/material/Checkbox";
import Xo from "@mui/material/TablePagination";
import Vo from "@mui/material/Menu";
import Zo from "@mui/material/MenuItem";
function vr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vr(e)) && (r && (r += " "), r += t);
  return r;
}
function ge(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function Qo(e) {
  e.stopPropagation();
}
function Nt(e) {
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
const Jo = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function Ht(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ea(e) {
  return Ht(e) && e.keyCode !== 86 ? !1 : !Jo.has(e.key);
}
function ta({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const na = "mlln6zg7-0-0-beta-47";
function ra(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: o
  }) => /* @__PURE__ */ b("div", {
    className: na,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function oa({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], o = n[e.rowIdx];
  return kr(r, o);
}
function kr(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function aa({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: n,
  rowIdx: r,
  mainHeaderRowIdx: o,
  lastFrozenColumnIndex: a,
  column: i
}) {
  const s = (t == null ? void 0 : t.length) ?? 0;
  if (r === o)
    return ge(i, a, {
      type: "HEADER"
    });
  if (t && r > o && r <= s + o)
    return ge(i, a, {
      type: "SUMMARY",
      row: t[r + s]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return ge(i, a, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return ge(i, a, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function ia({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: n,
  columns: r,
  colSpanColumns: o,
  rows: a,
  topSummaryRows: i,
  bottomSummaryRows: s,
  minRowIdx: c,
  mainHeaderRowIdx: l,
  maxRowIdx: w,
  currentPosition: {
    idx: y,
    rowIdx: d
  },
  nextPosition: u,
  lastFrozenColumnIndex: h,
  isCellWithinBounds: m
}) {
  let {
    idx: C,
    rowIdx: R
  } = u;
  const M = r.length, k = ($) => {
    for (const v of o) {
      const S = v.idx;
      if (S > C) break;
      const N = aa({
        rows: a,
        topSummaryRows: i,
        bottomSummaryRows: s,
        rowIdx: R,
        mainHeaderRowIdx: l,
        lastFrozenColumnIndex: h,
        column: v
      });
      if (N && C > S && C < N + S) {
        C = S + ($ ? N : 0);
        break;
      }
    }
  }, D = ($) => $.level + l, O = () => {
    if (t) {
      let v = r[C].parent;
      for (; v !== void 0; ) {
        const S = D(v);
        if (R === S) {
          C = v.idx + v.colSpan;
          break;
        }
        v = v.parent;
      }
    } else if (e) {
      let v = r[C].parent, S = !1;
      for (; v !== void 0; ) {
        const N = D(v);
        if (R >= N) {
          C = v.idx, R = N, S = !0;
          break;
        }
        v = v.parent;
      }
      S || (C = y, R = d);
    }
  };
  if (m(u) && (k(t), R < l && O()), n === "CHANGE_ROW" && (C === M ? R === w || (C = 0, R += 1) : C === -1 && (R === c || (R -= 1, C = M - 1), k(!1))), R < l) {
    let v = r[C].parent;
    const S = R;
    for (R = l; v !== void 0; ) {
      const N = D(v);
      N >= S && (R = N, C = v.idx), v = v.parent;
    }
  }
  return {
    idx: C,
    rowIdx: R
  };
}
function sa({
  maxColIdx: e,
  minRowIdx: t,
  maxRowIdx: n,
  selectedPosition: {
    rowIdx: r,
    idx: o
  },
  shiftKey: a
}) {
  return a ? o === 0 && r === t : o === e && r === n;
}
const ca = "cj343x07-0-0-beta-47", Dr = `rdg-cell ${ca}`, la = "csofj7r7-0-0-beta-47", da = `rdg-cell-frozen ${la}`;
function pn(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Sr(e, t, n) {
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
function Ct(e, ...t) {
  return Te(Dr, ...t, e.frozen && da);
}
const {
  min: wt,
  max: Lt,
  floor: Vn,
  sign: ua,
  abs: fa
} = Math;
function gt(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Rr(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = Lt(e, t), typeof n == "number" && n >= t ? wt(e, n) : e;
}
function Ir(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const ha = "c1bn88vv7-0-0-beta-47", ga = `rdg-checkbox-input ${ha}`;
function ma({
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
    className: ga,
    onChange: r,
    ...n
  });
}
const wa = "g1s9ylgp7-0-0-beta-47", ya = `rdg-group-cell-content ${wa}`, pa = "cz54e4y7-0-0-beta-47", ba = `rdg-caret ${pa}`;
function Ca(e) {
  return /* @__PURE__ */ b(xa, {
    ...e
  });
}
function xa({
  groupKey: e,
  isExpanded: t,
  tabIndex: n,
  toggleGroup: r
}) {
  function o({
    key: i
  }) {
    i === "Enter" && r();
  }
  return /* @__PURE__ */ ne("span", {
    className: ya,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ b("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: ba,
      "aria-hidden": !0,
      children: /* @__PURE__ */ b("path", {
        d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7"
      })
    })]
  });
}
function va(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Tr = /* @__PURE__ */ bt(void 0), ka = Tr.Provider;
function At() {
  return De(Tr);
}
function bn({
  value: e,
  tabIndex: t,
  indeterminate: n,
  disabled: r,
  onChange: o,
  "aria-label": a,
  "aria-labelledby": i
}) {
  const s = At().renderCheckbox;
  return s({
    "aria-label": a,
    "aria-labelledby": i,
    tabIndex: t,
    indeterminate: n,
    disabled: r,
    checked: e,
    onChange: o
  });
}
const Er = /* @__PURE__ */ bt(void 0), Mr = Er.Provider, Or = /* @__PURE__ */ bt(void 0), Da = Or.Provider;
function Pr() {
  const e = De(Er), t = De(Or);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Nr = /* @__PURE__ */ bt(void 0), Sa = Nr.Provider, Fr = /* @__PURE__ */ bt(void 0), Ra = Fr.Provider;
function Ia() {
  const e = De(Nr), t = De(Fr);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const _e = "rdg-select-column";
function Ta(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Ia();
  return /* @__PURE__ */ b(bn, {
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
function Ea(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Pr();
  return /* @__PURE__ */ b(bn, {
    "aria-label": "Select",
    tabIndex: e.tabIndex,
    disabled: t,
    value: n,
    onChange: (o, a) => {
      r({
        row: e.row,
        checked: o,
        isShiftClick: a
      });
    }
  });
}
function Ma(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Pr();
  return /* @__PURE__ */ b(bn, {
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
  key: _e,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ b(Ta, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ b(Ea, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ b(Ma, {
      ...e
    });
  }
}, Oa = "auto", Pa = 50;
function Na({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: o,
  enableVirtualization: a
}) {
  const i = (t == null ? void 0 : t.width) ?? Oa, s = (t == null ? void 0 : t.minWidth) ?? Pa, c = (t == null ? void 0 : t.maxWidth) ?? void 0, l = (t == null ? void 0 : t.renderCell) ?? va, w = (t == null ? void 0 : t.sortable) ?? !1, y = (t == null ? void 0 : t.resizable) ?? !1, d = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: u,
    colSpanColumns: h,
    lastFrozenColumnIndex: m,
    headerRowsCount: C
  } = B(() => {
    let v = -1, S = 1;
    const N = [];
    E(e, 1);
    function E(Y, L, V) {
      for (const A of Y) {
        if ("children" in A) {
          const me = {
            name: A.name,
            parent: V,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: A.headerCellClass
          };
          E(A.children, L + 1, me);
          continue;
        }
        const re = A.frozen ?? !1, oe = {
          ...A,
          parent: V,
          idx: 0,
          level: 0,
          frozen: re,
          width: A.width ?? i,
          minWidth: A.minWidth ?? s,
          maxWidth: A.maxWidth ?? c,
          sortable: A.sortable ?? w,
          resizable: A.resizable ?? y,
          draggable: A.draggable ?? d,
          renderCell: A.renderCell ?? l
        };
        N.push(oe), re && v++, L > S && (S = L);
      }
    }
    N.sort(({
      key: Y,
      frozen: L
    }, {
      key: V,
      frozen: A
    }) => Y === _e ? -1 : V === _e ? 1 : L ? A ? 0 : -1 : A ? 1 : 0);
    const z = [];
    return N.forEach((Y, L) => {
      Y.idx = L, Hr(Y, L, 0), Y.colSpan != null && z.push(Y);
    }), {
      columns: N,
      colSpanColumns: z,
      lastFrozenColumnIndex: v,
      headerRowsCount: S
    };
  }, [e, i, s, c, l, y, w, d]), {
    templateColumns: R,
    layoutCssVars: M,
    totalFrozenColumnWidth: k,
    columnMetrics: D
  } = B(() => {
    const v = /* @__PURE__ */ new Map();
    let S = 0, N = 0;
    const E = [];
    for (const Y of u) {
      let L = n(Y);
      typeof L == "number" ? L = Rr(L, Y) : L = Y.minWidth, E.push(`${L}px`), v.set(Y, {
        width: L,
        left: S
      }), S += L;
    }
    if (m !== -1) {
      const Y = v.get(u[m]);
      N = Y.left + Y.width;
    }
    const z = {};
    for (let Y = 0; Y <= m; Y++) {
      const L = u[Y];
      z[`--rdg-frozen-left-${L.idx}`] = `${v.get(L).left}px`;
    }
    return {
      templateColumns: E,
      layoutCssVars: z,
      totalFrozenColumnWidth: N,
      columnMetrics: v
    };
  }, [n, u, m]), [O, $] = B(() => {
    if (!a)
      return [0, u.length - 1];
    const v = o + k, S = o + r, N = u.length - 1, E = wt(m + 1, N);
    if (v >= S)
      return [E, E];
    let z = E;
    for (; z < N; ) {
      const {
        left: A,
        width: re
      } = D.get(u[z]);
      if (A + re > v)
        break;
      z++;
    }
    let Y = z;
    for (; Y < N; ) {
      const {
        left: A,
        width: re
      } = D.get(u[Y]);
      if (A + re >= S)
        break;
      Y++;
    }
    const L = Lt(E, z - 1), V = wt(N, Y + 1);
    return [L, V];
  }, [D, u, m, o, k, r, a]);
  return {
    columns: u,
    colSpanColumns: h,
    colOverscanStartIdx: O,
    colOverscanEndIdx: $,
    templateColumns: R,
    layoutCssVars: M,
    headerRowsCount: C,
    lastFrozenColumnIndex: m,
    totalFrozenColumnWidth: k
  };
}
function Hr(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Hr(r, t, n - 1);
  }
}
const tt = typeof window > "u" ? Ge : _o;
function Fa(e, t, n, r, o, a, i, s, c, l) {
  const w = ke(o), y = e.length === t.length, d = y && o !== w.current, u = [...n], h = [];
  for (const {
    key: M,
    idx: k,
    width: D
  } of t)
    typeof D == "string" && (d || !i.has(M)) && !a.has(M) && (u[k] = D, h.push(M));
  const m = u.join(" ");
  tt(() => {
    w.current = o, C(h);
  });
  function C(M) {
    M.length !== 0 && c((k) => {
      const D = new Map(k);
      let O = !1;
      for (const $ of M) {
        const v = Zn(r, $);
        O || (O = v !== k.get($)), v === void 0 ? D.delete($) : D.set($, v);
      }
      return O ? D : k;
    });
  }
  function R(M, k) {
    const {
      key: D
    } = M, O = [...n], $ = [];
    for (const {
      key: S,
      idx: N,
      width: E
    } of t)
      if (D === S) {
        const z = typeof k == "number" ? `${k}px` : k;
        O[N] = z;
      } else y && typeof E == "string" && !a.has(S) && (O[N] = E, $.push(S));
    r.current.style.gridTemplateColumns = O.join(" ");
    const v = typeof k == "number" ? k : Zn(r, D);
    Ft(() => {
      s((S) => {
        const N = new Map(S);
        return N.set(D, v), N;
      }), C($);
    }), l == null || l(M.idx, v);
  }
  return {
    gridTemplateColumns: m,
    handleColumnResize: R
  };
}
function Zn(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Ha() {
  const e = ke(null), [t, n] = J(1), [r, o] = J(1), [a, i] = J(0);
  return tt(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: l,
      offsetWidth: w,
      offsetHeight: y
    } = e.current, {
      width: d,
      height: u
    } = e.current.getBoundingClientRect(), h = y - l, m = d - w + c, C = u - h;
    n(m), o(C), i(h);
    const R = new s((M) => {
      const k = M[0].contentBoxSize[0], {
        clientHeight: D,
        offsetHeight: O
      } = e.current;
      Ft(() => {
        n(k.inlineSize), o(k.blockSize), i(O - D);
      });
    });
    return R.observe(e.current), () => {
      R.disconnect();
    };
  }, []), [e, t, r, a];
}
function ce(e) {
  const t = ke(e);
  Ge(() => {
    t.current = e;
  });
  const n = Q((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function xt(e) {
  const [t, n] = J(!1);
  t && !e && n(!1);
  function r(a) {
    a.target !== a.currentTarget && n(!0);
  }
  return {
    tabIndex: e && !t ? 0 : -1,
    childTabIndex: e ? 0 : -1,
    onFocus: e ? r : void 0
  };
}
function La({
  columns: e,
  colSpanColumns: t,
  rows: n,
  topSummaryRows: r,
  bottomSummaryRows: o,
  colOverscanStartIdx: a,
  colOverscanEndIdx: i,
  lastFrozenColumnIndex: s,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: l
}) {
  const w = B(() => {
    if (a === 0) return 0;
    let y = a;
    const d = (u, h) => h !== void 0 && u + h > a ? (y = u, !0) : !1;
    for (const u of t) {
      const h = u.idx;
      if (h >= y || d(h, ge(u, s, {
        type: "HEADER"
      })))
        break;
      for (let m = c; m <= l; m++) {
        const C = n[m];
        if (d(h, ge(u, s, {
          type: "ROW",
          row: C
        })))
          break;
      }
      if (r != null) {
        for (const m of r)
          if (d(h, ge(u, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
      if (o != null) {
        for (const m of o)
          if (d(h, ge(u, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
    }
    return y;
  }, [c, l, n, r, o, a, s, t]);
  return B(() => {
    const y = [];
    for (let d = 0; d <= i; d++) {
      const u = e[d];
      d < w && !u.frozen || y.push(u);
    }
    return y;
  }, [w, i, e]);
}
function Wa({
  rows: e,
  rowHeight: t,
  clientHeight: n,
  scrollTop: r,
  enableVirtualization: o
}) {
  const {
    totalRowHeight: a,
    gridTemplateRows: i,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  } = B(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (C) => C * t,
        getRowHeight: () => t,
        findRowIdx: (C) => Vn(C / t)
      };
    let d = 0, u = " ";
    const h = e.map((C) => {
      const R = t(C), M = {
        top: d,
        height: R
      };
      return u += `${R}px `, d += R, M;
    }), m = (C) => Lt(0, wt(e.length - 1, C));
    return {
      totalRowHeight: d,
      gridTemplateRows: u,
      getRowTop: (C) => h[m(C)].top,
      getRowHeight: (C) => h[m(C)].height,
      findRowIdx(C) {
        let R = 0, M = h.length - 1;
        for (; R <= M; ) {
          const k = R + Vn((M - R) / 2), D = h[k].top;
          if (D === C) return k;
          if (D < C ? R = k + 1 : D > C && (M = k - 1), R > M) return M;
        }
        return 0;
      }
    };
  }, [t, e]);
  let w = 0, y = e.length - 1;
  if (o) {
    const u = l(r), h = l(r + n);
    w = Lt(0, u - 4), y = wt(e.length - 1, h + 4);
  }
  return {
    rowOverscanStartIdx: w,
    rowOverscanEndIdx: y,
    totalRowHeight: a,
    gridTemplateRows: i,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  };
}
const za = "c1w9bbhr7-0-0-beta-47", $a = "c1creorc7-0-0-beta-47", Ya = `rdg-cell-drag-handle ${za}`;
function Aa({
  gridRowStart: e,
  rows: t,
  column: n,
  columnWidth: r,
  maxColIdx: o,
  isLastRow: a,
  selectedPosition: i,
  latestDraggedOverRowIdx: s,
  isCellEditable: c,
  onRowsChange: l,
  onFill: w,
  onClick: y,
  setDragging: d,
  setDraggedOverRowIdx: u
}) {
  const {
    idx: h,
    rowIdx: m
  } = i;
  function C(O) {
    if (O.preventDefault(), O.buttons !== 1) return;
    d(!0), window.addEventListener("mouseover", $), window.addEventListener("mouseup", v);
    function $(S) {
      S.buttons !== 1 && v();
    }
    function v() {
      window.removeEventListener("mouseover", $), window.removeEventListener("mouseup", v), d(!1), R();
    }
  }
  function R() {
    const O = s.current;
    if (O === void 0) return;
    const $ = m < O ? m + 1 : O, v = m < O ? O + 1 : m;
    k($, v), u(void 0);
  }
  function M(O) {
    O.stopPropagation(), k(m + 1, t.length);
  }
  function k(O, $) {
    const v = t[m], S = [...t], N = [];
    for (let E = O; E < $; E++)
      if (c({
        rowIdx: E,
        idx: h
      })) {
        const z = w({
          columnKey: n.key,
          sourceRow: v,
          targetRow: t[E]
        });
        z !== t[E] && (S[E] = z, N.push(E));
      }
    N.length > 0 && (l == null || l(S, {
      indexes: N,
      column: n
    }));
  }
  function D() {
    var E;
    const O = ((E = n.colSpan) == null ? void 0 : E.call(n, {
      type: "ROW",
      row: t[m]
    })) ?? 1, {
      insetInlineStart: $,
      ...v
    } = nt(n, O), S = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", N = n.idx + O - 1 === o;
    return {
      ...v,
      gridRowStart: e,
      marginInlineEnd: N ? void 0 : S,
      marginBlockEnd: a ? void 0 : S,
      insetInlineStart: $ ? `calc(${$} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ b("div", {
    style: D(),
    className: Te(Ya, n.frozen && $a),
    onClick: y,
    onMouseDown: C,
    onDoubleClick: M
  });
}
const Ga = "cis5rrm7-0-0-beta-47";
function _a({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: o,
  closeEditor: a,
  onKeyDown: i,
  navigate: s
}) {
  var R, M, k;
  const c = ke(void 0), l = ((R = e.editorOptions) == null ? void 0 : R.commitOnOutsideClick) !== !1, w = ce(() => {
    u(!0, !1);
  });
  Ge(() => {
    if (!l) return;
    function D() {
      c.current = requestAnimationFrame(w);
    }
    return addEventListener("mousedown", D, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", D, {
        capture: !0
      }), y();
    };
  }, [l, w]);
  function y() {
    cancelAnimationFrame(c.current);
  }
  function d(D) {
    if (i) {
      const O = ht(D);
      if (i({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(D);
        },
        onClose: u
      }, O), O.isGridDefaultPrevented()) return;
    }
    D.key === "Escape" ? u() : D.key === "Enter" ? u(!0) : ta(D) && s(D);
  }
  function u(D = !1, O = !0) {
    D ? o(n, !0, O) : a(O);
  }
  function h(D, O = !1) {
    o(D, O, O);
  }
  const {
    cellClass: m
  } = e, C = Ct(e, "rdg-editor-container", typeof m == "function" ? m(n) : m, !((M = e.editorOptions) != null && M.displayCellContent) && Ga);
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: C,
    style: nt(e, t),
    onKeyDown: d,
    onMouseDownCapture: y,
    children: e.renderEditCell != null && /* @__PURE__ */ ne(wn, {
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
function Ba({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: o,
    onFocus: a
  } = xt(n), {
    colSpan: i
  } = e, s = Ir(e, t), c = e.idx + 1;
  function l() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ b("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": i,
    "aria-rowspan": s,
    "aria-selected": n,
    tabIndex: o,
    className: Te(Dr, e.headerCellClass),
    style: {
      ...Sr(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + i
    },
    onFocus: a,
    onClick: l,
    children: e.name
  });
}
const Ua = "h44jtk67-0-0-beta-47", ja = "hcgkhxz7-0-0-beta-47", Ka = `rdg-header-sort-name ${ja}`;
function Lr({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ b(qa, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function qa({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = At().renderSortStatus;
  return /* @__PURE__ */ ne("span", {
    className: Ua,
    children: [/* @__PURE__ */ b("span", {
      className: Ka,
      children: n
    }), /* @__PURE__ */ b("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Xa = "c6l2wv17-0-0-beta-47", Va = "c1kqdw7y7-0-0-beta-47", Za = `rdg-cell-resizable ${Va}`, Qa = "r1y6ywlx7-0-0-beta-47", Ja = "rdg-cell-draggable", ei = "c1bezg5o7-0-0-beta-47", ti = `rdg-cell-dragging ${ei}`, ni = "c1vc96037-0-0-beta-47", ri = `rdg-cell-drag-over ${ni}`;
function oi({
  column: e,
  colSpan: t,
  rowIdx: n,
  isCellSelected: r,
  onColumnResize: o,
  onColumnsReorder: a,
  sortColumns: i,
  onSortColumnsChange: s,
  selectCell: c,
  shouldFocusGrid: l,
  direction: w,
  dragDropKey: y
}) {
  const [d, u] = J(!1), [h, m] = J(!1), C = w === "rtl", R = Ir(e, n), {
    tabIndex: M,
    childTabIndex: k,
    onFocus: D
  } = xt(r), O = i == null ? void 0 : i.findIndex((p) => p.columnKey === e.key), $ = O !== void 0 && O > -1 ? i[O] : void 0, v = $ == null ? void 0 : $.direction, S = $ !== void 0 && i.length > 1 ? O + 1 : void 0, N = v && !S ? v === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: E,
    resizable: z,
    draggable: Y
  } = e, L = Ct(e, e.headerCellClass, E && Xa, z && Za, Y && Ja, d && ti, h && ri), V = e.renderHeaderCell ?? Lr;
  function A(p) {
    if (p.pointerType === "mouse" && p.buttons !== 1)
      return;
    p.preventDefault();
    const {
      currentTarget: W,
      pointerId: _
    } = p, j = W.parentElement, {
      right: te,
      left: le
    } = j.getBoundingClientRect(), we = C ? p.clientX - le : te - p.clientX;
    let ie = !1;
    function Ce(ye) {
      const {
        width: de,
        right: rt,
        left: ze
      } = j.getBoundingClientRect();
      let Be = C ? rt + we - ye.clientX : ye.clientX + we - ze;
      Be = Rr(Be, e), de > 0 && Be !== de && o(e, Be);
    }
    function xe() {
      ie = !0, o(e, "max-content");
    }
    function Ie(ye) {
      ie || Ce(ye), W.removeEventListener("pointermove", Ce), W.removeEventListener("dblclick", xe), W.removeEventListener("lostpointercapture", Ie);
    }
    W.setPointerCapture(_), W.addEventListener("pointermove", Ce), W.addEventListener("dblclick", xe), W.addEventListener("lostpointercapture", Ie);
  }
  function re(p) {
    if (s == null) return;
    const {
      sortDescendingFirst: W
    } = e;
    if ($ === void 0) {
      const _ = {
        columnKey: e.key,
        direction: W ? "DESC" : "ASC"
      };
      s(i && p ? [...i, _] : [_]);
    } else {
      let _;
      if ((W === !0 && v === "DESC" || W !== !0 && v === "ASC") && (_ = {
        columnKey: e.key,
        direction: v === "ASC" ? "DESC" : "ASC"
      }), p) {
        const j = [...i];
        _ ? j[O] = _ : j.splice(O, 1), s(j);
      } else
        s(_ ? [_] : []);
    }
  }
  function oe(p) {
    c({
      idx: e.idx,
      rowIdx: n
    }), E && re(p.ctrlKey || p.metaKey);
  }
  function me(p) {
    D == null || D(p), l && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Ee(p) {
    (p.key === " " || p.key === "Enter") && (p.preventDefault(), re(p.ctrlKey || p.metaKey));
  }
  function Me(p) {
    p.dataTransfer.setData(y, e.key), p.dataTransfer.dropEffect = "move", u(!0);
  }
  function Oe() {
    u(!1);
  }
  function Pe(p) {
    p.preventDefault(), p.dataTransfer.dropEffect = "move";
  }
  function Re(p) {
    if (m(!1), p.dataTransfer.types.includes(y.toLowerCase())) {
      const W = p.dataTransfer.getData(y.toLowerCase());
      W !== e.key && (p.preventDefault(), a == null || a(W, e.key));
    }
  }
  function I(p) {
    Qn(p) && m(!0);
  }
  function x(p) {
    Qn(p) && m(!1);
  }
  let H;
  return Y && (H = {
    draggable: !0,
    onDragStart: Me,
    onDragEnd: Oe,
    onDragOver: Pe,
    onDragEnter: I,
    onDragLeave: x,
    onDrop: Re
  }), /* @__PURE__ */ ne("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": R,
    "aria-selected": r,
    "aria-sort": N,
    tabIndex: l ? 0 : M,
    className: L,
    style: {
      ...Sr(e, n, R),
      ...nt(e, t)
    },
    onFocus: me,
    onClick: oe,
    onKeyDown: E ? Ee : void 0,
    ...H,
    children: [V({
      column: e,
      sortDirection: v,
      priority: S,
      tabIndex: k
    }), z && /* @__PURE__ */ b("div", {
      className: Qa,
      onClick: Qo,
      onPointerDown: A
    })]
  });
}
function Qn(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const ai = "r1upfr807-0-0-beta-47", Cn = `rdg-row ${ai}`, ii = "r190mhd37-0-0-beta-47", Gt = "rdg-row-selected", si = "r139qu9m7-0-0-beta-47", ci = "rdg-top-summary-row", li = "rdg-bottom-summary-row", di = "h10tskcx7-0-0-beta-47", Wr = `rdg-header-row ${di}`;
function ui({
  rowIdx: e,
  columns: t,
  onColumnResize: n,
  onColumnsReorder: r,
  sortColumns: o,
  onSortColumnsChange: a,
  lastFrozenColumnIndex: i,
  selectedCellIdx: s,
  selectCell: c,
  shouldFocusGrid: l,
  direction: w
}) {
  const y = Bo(), d = [];
  for (let u = 0; u < t.length; u++) {
    const h = t[u], m = ge(h, i, {
      type: "HEADER"
    });
    m !== void 0 && (u += m - 1), d.push(/* @__PURE__ */ b(oi, {
      column: h,
      colSpan: m,
      rowIdx: e,
      isCellSelected: s === h.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: a,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: l && u === 0,
      direction: w,
      dragDropKey: y
    }, h.key));
  }
  return /* @__PURE__ */ b("div", {
    role: "row",
    "aria-rowindex": e,
    className: Te(Wr, s === -1 && Gt),
    children: d
  });
}
const fi = /* @__PURE__ */ We(ui);
function hi({
  rowIdx: e,
  level: t,
  columns: n,
  selectedCellIdx: r,
  selectCell: o
}) {
  const a = [], i = /* @__PURE__ */ new Set();
  for (const s of n) {
    let {
      parent: c
    } = s;
    if (c !== void 0) {
      for (; c.level > t && c.parent !== void 0; )
        c = c.parent;
      if (c.level === t && !i.has(c)) {
        i.add(c);
        const {
          idx: l
        } = c;
        a.push(/* @__PURE__ */ b(Ba, {
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
    className: Wr,
    children: a
  });
}
const gi = /* @__PURE__ */ We(hi), mi = "c6ra8a37-0-0-beta-47", wi = `rdg-cell-copied ${mi}`, yi = "cq910m07-0-0-beta-47", pi = `rdg-cell-dragged-over ${yi}`;
function bi({
  column: e,
  colSpan: t,
  isCellSelected: n,
  isCopied: r,
  isDraggedOver: o,
  row: a,
  rowIdx: i,
  onClick: s,
  onDoubleClick: c,
  onContextMenu: l,
  onRowChange: w,
  selectCell: y,
  ...d
}) {
  const {
    tabIndex: u,
    childTabIndex: h,
    onFocus: m
  } = xt(n), {
    cellClass: C
  } = e, R = Ct(e, typeof C == "function" ? C(a) : C, r && wi, o && pi), M = kr(e, a);
  function k(S) {
    y({
      rowIdx: i,
      idx: e.idx
    }, S);
  }
  function D(S) {
    if (s) {
      const N = ht(S);
      if (s({
        row: a,
        column: e,
        selectCell: k
      }, N), N.isGridDefaultPrevented()) return;
    }
    k();
  }
  function O(S) {
    if (l) {
      const N = ht(S);
      if (l({
        row: a,
        column: e,
        selectCell: k
      }, N), N.isGridDefaultPrevented()) return;
    }
    k();
  }
  function $(S) {
    if (c) {
      const N = ht(S);
      if (c({
        row: a,
        column: e,
        selectCell: k
      }, N), N.isGridDefaultPrevented()) return;
    }
    k(!0);
  }
  function v(S) {
    w(e, S);
  }
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !M || void 0,
    tabIndex: u,
    className: R,
    style: nt(e, t),
    onClick: D,
    onDoubleClick: $,
    onContextMenu: O,
    onFocus: m,
    ...d,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: i,
      isCellEditable: M,
      tabIndex: h,
      onRowChange: v
    })
  });
}
const Ci = /* @__PURE__ */ We(bi);
function xi({
  className: e,
  rowIdx: t,
  gridRowStart: n,
  selectedCellIdx: r,
  isRowSelectionDisabled: o,
  isRowSelected: a,
  copiedCellIdx: i,
  draggedOverCellIdx: s,
  lastFrozenColumnIndex: c,
  row: l,
  viewportColumns: w,
  selectedCellEditor: y,
  onCellClick: d,
  onCellDoubleClick: u,
  onCellContextMenu: h,
  rowClass: m,
  setDraggedOverRowIdx: C,
  onMouseEnter: R,
  onRowChange: M,
  selectCell: k,
  ...D
}, O) {
  const $ = ce((E, z) => {
    M(E, t, z);
  });
  function v(E) {
    C == null || C(t), R == null || R(E);
  }
  e = Te(Cn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, m == null ? void 0 : m(l, t), e, r === -1 && Gt);
  const S = [];
  for (let E = 0; E < w.length; E++) {
    const z = w[E], {
      idx: Y
    } = z, L = ge(z, c, {
      type: "ROW",
      row: l
    });
    L !== void 0 && (E += L - 1);
    const V = r === Y;
    V && y ? S.push(y) : S.push(/* @__PURE__ */ b(Ci, {
      column: z,
      colSpan: L,
      row: l,
      rowIdx: t,
      isCopied: i === Y,
      isDraggedOver: s === Y,
      isCellSelected: V,
      onClick: d,
      onDoubleClick: u,
      onContextMenu: h,
      onRowChange: $,
      selectCell: k
    }, z.key));
  }
  const N = B(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: o
  }), [o, a]);
  return /* @__PURE__ */ b(Mr, {
    value: N,
    children: /* @__PURE__ */ b("div", {
      role: "row",
      ref: O,
      className: e,
      onMouseEnter: v,
      style: pn(n),
      ...D,
      children: S
    })
  });
}
const zr = /* @__PURE__ */ We(/* @__PURE__ */ yn(xi)), Fl = zr;
function $r(e, t) {
  return /* @__PURE__ */ b(zr, {
    ...t
  }, e);
}
function vi({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const o = ke(null);
  return tt(() => {
    Nt(o.current);
  }), tt(() => {
    function a() {
      r(null);
    }
    const i = new IntersectionObserver(a, {
      root: n,
      threshold: 1
    });
    return i.observe(o.current), () => {
      i.disconnect();
    };
  }, [n, r]), /* @__PURE__ */ b("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const ki = "a3ejtar7-0-0-beta-47", Di = `rdg-sort-arrow ${ki}`;
function Si({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ ne(wn, {
    children: [Ri({
      sortDirection: e
    }), Ii({
      priority: t
    })]
  });
}
function Ri({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ b("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Di,
    "aria-hidden": !0,
    children: /* @__PURE__ */ b("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Ii({
  priority: e
}) {
  return e;
}
const Ti = "rnvodz57-0-0-beta-47", Ei = `rdg ${Ti}`, Mi = "vlqv91k7-0-0-beta-47", Oi = `rdg-viewport-dragging ${Mi}`, Pi = "f1lsfrzw7-0-0-beta-47", Ni = "f1cte0lg7-0-0-beta-47", Fi = "s8wc6fl7-0-0-beta-47";
function Hi({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: o,
  selectCell: a
}) {
  var d;
  const {
    tabIndex: i,
    childTabIndex: s,
    onFocus: c
  } = xt(o), {
    summaryCellClass: l
  } = e, w = Ct(e, Fi, typeof l == "function" ? l(n) : l);
  function y() {
    a({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: i,
    className: w,
    style: nt(e, t),
    onClick: y,
    onFocus: c,
    children: (d = e.renderSummaryCell) == null ? void 0 : d.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
const Li = /* @__PURE__ */ We(Hi), Wi = "skuhp557-0-0-beta-47", zi = "tf8l5ub7-0-0-beta-47", $i = `rdg-summary-row ${Wi}`;
function Yi({
  rowIdx: e,
  gridRowStart: t,
  row: n,
  viewportColumns: r,
  top: o,
  bottom: a,
  lastFrozenColumnIndex: i,
  selectedCellIdx: s,
  isTop: c,
  selectCell: l,
  "aria-rowindex": w
}) {
  const y = [];
  for (let d = 0; d < r.length; d++) {
    const u = r[d], h = ge(u, i, {
      type: "SUMMARY",
      row: n
    });
    h !== void 0 && (d += h - 1);
    const m = s === u.idx;
    y.push(/* @__PURE__ */ b(Li, {
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
    "aria-rowindex": w,
    className: Te(Cn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, $i, c ? `${ci} ${zi}` : li, s === -1 && Gt),
    style: {
      ...pn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: y
  });
}
const Jn = /* @__PURE__ */ We(Yi);
function Ai(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: a,
    rowKeyGetter: i,
    onRowsChange: s,
    rowHeight: c,
    headerRowHeight: l,
    summaryRowHeight: w,
    selectedRows: y,
    isRowSelectionDisabled: d,
    onSelectedRowsChange: u,
    sortColumns: h,
    onSortColumnsChange: m,
    defaultColumnOptions: C,
    onCellClick: R,
    onCellDoubleClick: M,
    onCellContextMenu: k,
    onCellKeyDown: D,
    onSelectedCellChange: O,
    onScroll: $,
    onColumnResize: v,
    onColumnsReorder: S,
    onFill: N,
    onCopy: E,
    onPaste: z,
    enableVirtualization: Y,
    renderers: L,
    className: V,
    style: A,
    rowClass: re,
    direction: oe,
    role: me,
    "aria-label": Ee,
    "aria-labelledby": Me,
    "aria-describedby": Oe,
    "aria-rowcount": Pe,
    "data-testid": Re
  } = e, I = At(), x = me ?? "grid", H = c ?? 35, p = l ?? (typeof H == "number" ? H : 35), W = w ?? (typeof H == "number" ? H : 35), _ = (L == null ? void 0 : L.renderRow) ?? (I == null ? void 0 : I.renderRow) ?? $r, j = (L == null ? void 0 : L.renderSortStatus) ?? (I == null ? void 0 : I.renderSortStatus) ?? Si, te = (L == null ? void 0 : L.renderCheckbox) ?? (I == null ? void 0 : I.renderCheckbox) ?? ma, le = (L == null ? void 0 : L.noRowsFallback) ?? (I == null ? void 0 : I.noRowsFallback), we = Y ?? !0, ie = oe ?? "ltr", [Ce, xe] = J(0), [Ie, ye] = J(0), [de, rt] = J(() => /* @__PURE__ */ new Map()), [ze, Be] = J(() => /* @__PURE__ */ new Map()), [Ue, Sn] = J(null), [Rn, no] = J(!1), [ot, ro] = J(void 0), [Ne, In] = J(null), Tn = Q((f) => de.get(f.key) ?? ze.get(f.key) ?? f.width, [ze, de]), [je, En, Mn, oo] = Ha(), {
    columns: ee,
    colSpanColumns: On,
    lastFrozenColumnIndex: he,
    headerRowsCount: $e,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Pn,
    templateColumns: io,
    layoutCssVars: so,
    totalFrozenColumnWidth: co
  } = Na({
    rawColumns: n,
    defaultColumnOptions: C,
    getColumnWidth: Tn,
    scrollLeft: Ie,
    viewportWidth: En,
    enableVirtualization: we
  }), at = (o == null ? void 0 : o.length) ?? 0, Ke = (a == null ? void 0 : a.length) ?? 0, Nn = at + Ke, qe = $e + at, Bt = $e - 1, ue = -qe, kt = ue + Bt, Ye = r.length + Ke - 1, [T, Xe] = J(() => ({
    idx: -1,
    rowIdx: ue - 1,
    mode: "SELECT"
  })), Ut = ke(T), Fn = ke(ot), Hn = ke(-1), Dt = ke(null), St = ke(!1), jt = x === "treegrid", Kt = $e * p, Ln = Nn * W, Rt = Mn - Kt - Ln, qt = y != null && u != null, Wn = ie === "rtl", lo = Wn ? "ArrowRight" : "ArrowLeft", zn = Wn ? "ArrowLeft" : "ArrowRight", $n = Pe ?? $e + r.length + Nn, uo = B(() => ({
    renderCheckbox: te,
    renderSortStatus: j
  }), [te, j]), fo = B(() => {
    let f = !1, g = !1;
    if (i != null && y != null && y.size > 0) {
      for (const P of r)
        if (y.has(i(P)) ? f = !0 : g = !0, f && g) break;
    }
    return {
      isRowSelected: f && !g,
      isIndeterminate: f && g
    };
  }, [r, y, i]), {
    rowOverscanStartIdx: it,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: ho,
    getRowTop: Yn,
    getRowHeight: go,
    findRowIdx: An
  } = Wa({
    rows: r,
    rowHeight: H,
    clientHeight: Rt,
    scrollTop: Ce,
    enableVirtualization: we
  }), Fe = La({
    columns: ee,
    colSpanColumns: On,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Pn,
    lastFrozenColumnIndex: he,
    rowOverscanStartIdx: it,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: mo,
    handleColumnResize: wo
  } = Fa(ee, Fe, io, je, En, de, ze, rt, Be, v), yo = jt ? -1 : 0, Ve = ee.length - 1, Vt = Jt(T), It = jn(T), po = p + Xt + Ln + oo, bo = ce(wo), Co = ce(S), xo = ce(m), vo = ce(R), ko = ce(M), Do = ce(k), So = ce(To), Ro = ce(_n), Io = ce(Tt), Zt = ce(ct), Gn = ce(({
    idx: f,
    rowIdx: g
  }) => {
    ct({
      rowIdx: ue + g - 1,
      idx: f
    });
  });
  tt(() => {
    if (!Vt || nn(T, Ut.current)) {
      Ut.current = T;
      return;
    }
    Ut.current = T, T.idx === -1 && (Dt.current.focus({
      preventScroll: !0
    }), Nt(Dt.current));
  }), tt(() => {
    St.current && (St.current = !1, qn());
  }), Go(t, () => ({
    element: je.current,
    scrollToCell({
      idx: f,
      rowIdx: g
    }) {
      const P = f !== void 0 && f > he && f < ee.length ? f : void 0, F = g !== void 0 && Ze(g) ? g : void 0;
      (P !== void 0 || F !== void 0) && In({
        idx: P,
        rowIdx: F
      });
    },
    selectCell: ct
  }));
  const Qt = Q((f) => {
    ro(f), Fn.current = f;
  }, []);
  function To(f) {
    if (!u) return;
    gt(i);
    const g = new Set(y);
    for (const P of r) {
      if ((d == null ? void 0 : d(P)) === !0) continue;
      const F = i(P);
      f.checked ? g.add(F) : g.delete(F);
    }
    u(g);
  }
  function _n(f) {
    if (!u) return;
    gt(i);
    const {
      row: g,
      checked: P,
      isShiftClick: F
    } = f;
    if ((d == null ? void 0 : d(g)) === !0) return;
    const G = new Set(y), K = i(g), q = Hn.current, X = r.indexOf(g);
    if (Hn.current = X, P ? G.add(K) : G.delete(K), F && q !== -1 && q !== X && q < r.length) {
      const fe = ua(X - q);
      for (let se = q + fe; se !== X; se += fe) {
        const ve = r[se];
        (d == null ? void 0 : d(ve)) !== !0 && (P ? G.add(i(ve)) : G.delete(i(ve)));
      }
    }
    u(G);
  }
  function Eo(f) {
    var X;
    const {
      idx: g,
      rowIdx: P,
      mode: F
    } = T;
    if (F === "EDIT") return;
    if (D && Ze(P)) {
      const fe = r[P], se = ht(f);
      if (D({
        mode: "SELECT",
        row: fe,
        column: ee[g],
        rowIdx: P,
        selectCell: ct
      }, se), se.isGridDefaultPrevented()) return;
    }
    if (!(f.target instanceof Element)) return;
    const G = f.target.closest(".rdg-cell") !== null, K = jt && f.target === Dt.current;
    if (!G && !K) return;
    const {
      keyCode: q
    } = f;
    if (It && (z != null || E != null) && Ht(f)) {
      if (q === 67) {
        if (((X = window.getSelection()) == null ? void 0 : X.isCollapsed) === !1) return;
        Oo();
        return;
      }
      if (q === 86) {
        Po();
        return;
      }
    }
    switch (f.key) {
      case "Escape":
        Sn(null);
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
        Kn(f);
        break;
      default:
        No(f);
        break;
    }
  }
  function Mo(f) {
    const {
      scrollTop: g,
      scrollLeft: P
    } = f.currentTarget;
    Ft(() => {
      xe(g), ye(fa(P));
    }), $ == null || $(f);
  }
  function Tt(f, g, P) {
    if (typeof s != "function" || P === r[g]) return;
    const F = [...r];
    F[g] = P, s(F, {
      indexes: [g],
      column: f
    });
  }
  function Bn() {
    T.mode === "EDIT" && Tt(ee[T.idx], T.rowIdx, T.row);
  }
  function Oo() {
    const {
      idx: f,
      rowIdx: g
    } = T, P = r[g], F = ee[f].key;
    Sn({
      row: P,
      columnKey: F
    }), E == null || E({
      sourceRow: P,
      sourceColumnKey: F
    });
  }
  function Po() {
    if (!z || !s || Ue === null || !Et(T))
      return;
    const {
      idx: f,
      rowIdx: g
    } = T, P = ee[f], F = r[g], G = z({
      sourceRow: Ue.row,
      sourceColumnKey: Ue.columnKey,
      targetRow: F,
      targetColumnKey: P.key
    });
    Tt(P, g, G);
  }
  function No(f) {
    if (!It) return;
    const g = r[T.rowIdx], {
      key: P,
      shiftKey: F
    } = f;
    if (qt && F && P === " ") {
      gt(i);
      const G = i(g);
      _n({
        row: g,
        checked: !y.has(G),
        isShiftClick: !1
      }), f.preventDefault();
      return;
    }
    Et(T) && ea(f) && Xe(({
      idx: G,
      rowIdx: K
    }) => ({
      idx: G,
      rowIdx: K,
      mode: "EDIT",
      row: g,
      originalRow: g
    }));
  }
  function Un(f) {
    return f >= yo && f <= Ve;
  }
  function Ze(f) {
    return f >= 0 && f < r.length;
  }
  function Jt({
    idx: f,
    rowIdx: g
  }) {
    return g >= ue && g <= Ye && Un(f);
  }
  function Fo({
    idx: f,
    rowIdx: g
  }) {
    return Ze(g) && f >= 0 && f <= Ve;
  }
  function jn({
    idx: f,
    rowIdx: g
  }) {
    return Ze(g) && Un(f);
  }
  function Et(f) {
    return Fo(f) && oa({
      columns: ee,
      rows: r,
      selectedPosition: f
    });
  }
  function ct(f, g) {
    if (!Jt(f)) return;
    Bn();
    const P = r[f.rowIdx], F = nn(T, f);
    g && Et(f) ? Xe({
      ...f,
      mode: "EDIT",
      row: P,
      originalRow: P
    }) : F ? Nt(er(je.current)) : (St.current = !0, Xe({
      ...f,
      mode: "SELECT"
    })), O && !F && O({
      rowIdx: f.rowIdx,
      row: P,
      column: ee[f.idx]
    });
  }
  function Ho(f, g, P) {
    const {
      idx: F,
      rowIdx: G
    } = T, K = Vt && F === -1;
    switch (f) {
      case "ArrowUp":
        return {
          idx: F,
          rowIdx: G - 1
        };
      case "ArrowDown":
        return {
          idx: F,
          rowIdx: G + 1
        };
      case lo:
        return {
          idx: F - 1,
          rowIdx: G
        };
      case zn:
        return {
          idx: F + 1,
          rowIdx: G
        };
      case "Tab":
        return {
          idx: F + (P ? -1 : 1),
          rowIdx: G
        };
      case "Home":
        return K ? {
          idx: F,
          rowIdx: ue
        } : {
          idx: 0,
          rowIdx: g ? ue : G
        };
      case "End":
        return K ? {
          idx: F,
          rowIdx: Ye
        } : {
          idx: Ve,
          rowIdx: g ? Ye : G
        };
      case "PageUp": {
        if (T.rowIdx === ue) return T;
        const q = Yn(G) + go(G) - Rt;
        return {
          idx: F,
          rowIdx: q > 0 ? An(q) : 0
        };
      }
      case "PageDown": {
        if (T.rowIdx >= r.length) return T;
        const q = Yn(G) + Rt;
        return {
          idx: F,
          rowIdx: q < Xt ? An(q) : r.length - 1
        };
      }
      default:
        return T;
    }
  }
  function Kn(f) {
    const {
      key: g,
      shiftKey: P
    } = f;
    let F = "NONE";
    if (g === "Tab") {
      if (sa({
        shiftKey: P,
        maxColIdx: Ve,
        minRowIdx: ue,
        maxRowIdx: Ye,
        selectedPosition: T
      })) {
        Bn();
        return;
      }
      F = "CHANGE_ROW";
    }
    f.preventDefault();
    const G = Ht(f), K = Ho(g, G, P);
    if (nn(T, K)) return;
    const q = ia({
      moveUp: g === "ArrowUp",
      moveNext: g === zn || g === "Tab" && !P,
      columns: ee,
      colSpanColumns: On,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: a,
      minRowIdx: ue,
      mainHeaderRowIdx: kt,
      maxRowIdx: Ye,
      lastFrozenColumnIndex: he,
      cellNavigationMode: F,
      currentPosition: T,
      nextPosition: K,
      isCellWithinBounds: Jt
    });
    ct(q);
  }
  function Lo(f) {
    if (ot === void 0) return;
    const {
      rowIdx: g
    } = T;
    return (g < ot ? g < f && f <= ot : g > f && f >= ot) ? T.idx : void 0;
  }
  function qn() {
    const f = er(je.current);
    if (f === null) return;
    Nt(f), (f.querySelector('[tabindex="0"]') ?? f).focus({
      preventScroll: !0
    });
  }
  function Wo() {
    if (N == null || T.mode === "EDIT" || !jn(T))
      return;
    const {
      idx: f,
      rowIdx: g
    } = T, P = ee[f];
    if (P.renderEditCell == null || P.editable === !1)
      return;
    const F = Tn(P);
    return /* @__PURE__ */ b(Aa, {
      gridRowStart: qe + g + 1,
      rows: r,
      column: P,
      columnWidth: F,
      maxColIdx: Ve,
      isLastRow: g === Ye,
      selectedPosition: T,
      isCellEditable: Et,
      latestDraggedOverRowIdx: Fn,
      onRowsChange: s,
      onClick: qn,
      onFill: N,
      setDragging: no,
      setDraggedOverRowIdx: Qt
    });
  }
  function zo(f) {
    if (T.rowIdx !== f || T.mode === "SELECT") return;
    const {
      idx: g,
      row: P
    } = T, F = ee[g], G = ge(F, he, {
      type: "ROW",
      row: P
    }), K = (X) => {
      St.current = X, Xe(({
        idx: fe,
        rowIdx: se
      }) => ({
        idx: fe,
        rowIdx: se,
        mode: "SELECT"
      }));
    }, q = (X, fe, se) => {
      fe ? Ft(() => {
        Tt(F, T.rowIdx, X), K(se);
      }) : Xe((ve) => ({
        ...ve,
        row: X
      }));
    };
    return r[T.rowIdx] !== T.originalRow && K(!1), /* @__PURE__ */ b(_a, {
      column: F,
      colSpan: G,
      row: P,
      rowIdx: f,
      onRowChange: q,
      closeEditor: K,
      onKeyDown: D,
      navigate: Kn
    }, F.key);
  }
  function lt(f) {
    const g = T.idx === -1 ? void 0 : ee[T.idx];
    return g !== void 0 && T.rowIdx === f && !Fe.includes(g) ? T.idx > Pn ? [...Fe, g] : [...Fe.slice(0, he + 1), g, ...Fe.slice(he + 1)] : Fe;
  }
  function $o() {
    const f = [], {
      idx: g,
      rowIdx: P
    } = T, F = It && P < it ? it - 1 : it, G = It && P > st ? st + 1 : st;
    for (let K = F; K <= G; K++) {
      const q = K === it - 1 || K === st + 1, X = q ? P : K;
      let fe = Fe;
      const se = g === -1 ? void 0 : ee[g];
      se !== void 0 && (q ? fe = [se] : fe = lt(X));
      const ve = r[X], Yo = qe + X + 1;
      let en = X, tn = !1;
      typeof i == "function" && (en = i(ve), tn = (y == null ? void 0 : y.has(en)) ?? !1), f.push(_(en, {
        "aria-rowindex": qe + X + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: X,
        row: ve,
        viewportColumns: fe,
        isRowSelectionDisabled: (d == null ? void 0 : d(ve)) ?? !1,
        isRowSelected: tn,
        onCellClick: vo,
        onCellDoubleClick: ko,
        onCellContextMenu: Do,
        rowClass: re,
        gridRowStart: Yo,
        copiedCellIdx: Ue !== null && Ue.row === ve ? ee.findIndex((Ao) => Ao.key === Ue.columnKey) : void 0,
        selectedCellIdx: P === X ? g : void 0,
        draggedOverCellIdx: Lo(X),
        setDraggedOverRowIdx: Rn ? Qt : void 0,
        lastFrozenColumnIndex: he,
        onRowChange: Io,
        selectCell: Zt,
        selectedCellEditor: zo(X)
      }));
    }
    return f;
  }
  (T.idx > Ve || T.rowIdx > Ye) && (Xe({
    idx: -1,
    rowIdx: ue - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Mt = `repeat(${$e}, ${p}px)`;
  at > 0 && (Mt += ` repeat(${at}, ${W}px)`), r.length > 0 && (Mt += ho), Ke > 0 && (Mt += ` repeat(${Ke}, ${W}px)`);
  const Xn = T.idx === -1 && T.rowIdx !== ue - 1;
  return /* @__PURE__ */ ne("div", {
    role: x,
    "aria-label": Ee,
    "aria-labelledby": Me,
    "aria-describedby": Oe,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": ee.length,
    "aria-rowcount": $n,
    className: Te(Ei, V, Rn && Oi),
    style: {
      ...A,
      scrollPaddingInlineStart: T.idx > he || (Ne == null ? void 0 : Ne.idx) !== void 0 ? `${co}px` : void 0,
      scrollPaddingBlock: Ze(T.rowIdx) || (Ne == null ? void 0 : Ne.rowIdx) !== void 0 ? `${Kt + at * W}px ${Ke * W}px` : void 0,
      gridTemplateColumns: mo,
      gridTemplateRows: Mt,
      "--rdg-header-row-height": `${p}px`,
      "--rdg-scroll-height": `${po}px`,
      ...so
    },
    dir: ie,
    ref: je,
    onScroll: Mo,
    onKeyDown: Eo,
    "data-testid": Re,
    children: [/* @__PURE__ */ ne(ka, {
      value: uo,
      children: [/* @__PURE__ */ b(Ra, {
        value: So,
        children: /* @__PURE__ */ ne(Sa, {
          value: fo,
          children: [Array.from({
            length: Bt
          }, (f, g) => /* @__PURE__ */ b(gi, {
            rowIdx: g + 1,
            level: -Bt + g,
            columns: lt(ue + g),
            selectedCellIdx: T.rowIdx === ue + g ? T.idx : void 0,
            selectCell: Gn
          }, g)), /* @__PURE__ */ b(fi, {
            rowIdx: $e,
            columns: lt(kt),
            onColumnResize: bo,
            onColumnsReorder: Co,
            sortColumns: h,
            onSortColumnsChange: xo,
            lastFrozenColumnIndex: he,
            selectedCellIdx: T.rowIdx === kt ? T.idx : void 0,
            selectCell: Gn,
            shouldFocusGrid: !Vt,
            direction: ie
          })]
        })
      }), r.length === 0 && le ? le : /* @__PURE__ */ ne(wn, {
        children: [o == null ? void 0 : o.map((f, g) => {
          const P = $e + 1 + g, F = kt + 1 + g, G = T.rowIdx === F, K = Kt + W * g;
          return /* @__PURE__ */ b(Jn, {
            "aria-rowindex": P,
            rowIdx: F,
            gridRowStart: P,
            row: f,
            top: K,
            bottom: void 0,
            viewportColumns: lt(F),
            lastFrozenColumnIndex: he,
            selectedCellIdx: G ? T.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, g);
        }), /* @__PURE__ */ b(Da, {
          value: Ro,
          children: $o()
        }), a == null ? void 0 : a.map((f, g) => {
          const P = qe + r.length + g + 1, F = r.length + g, G = T.rowIdx === F, K = Rt > Xt ? Mn - W * (a.length - g) : void 0, q = K === void 0 ? W * (a.length - 1 - g) : void 0;
          return /* @__PURE__ */ b(Jn, {
            "aria-rowindex": $n - Ke + g + 1,
            rowIdx: F,
            gridRowStart: P,
            row: f,
            top: K,
            bottom: q,
            viewportColumns: lt(F),
            lastFrozenColumnIndex: he,
            selectedCellIdx: G ? T.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, g);
        })]
      })]
    }), Wo(), ra(Fe), jt && /* @__PURE__ */ b("div", {
      ref: Dt,
      tabIndex: Xn ? 0 : -1,
      className: Te(Pi, Xn && [ii, he !== -1 && si], !Ze(T.rowIdx) && Ni),
      style: {
        gridRowStart: T.rowIdx + qe + 1
      }
    }), Ne !== null && /* @__PURE__ */ b(vi, {
      scrollToPosition: Ne,
      setScrollToCellPosition: In,
      gridElement: je.current
    })]
  });
}
function er(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function nn(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const Yr = /* @__PURE__ */ yn(Ai);
function Gi({
  id: e,
  groupKey: t,
  childRows: n,
  isExpanded: r,
  isCellSelected: o,
  column: a,
  row: i,
  groupColumnIndex: s,
  isGroupByColumn: c,
  toggleGroup: l
}) {
  var m;
  const {
    tabIndex: w,
    childTabIndex: y,
    onFocus: d
  } = xt(o);
  function u() {
    l(e);
  }
  const h = c && s === a.idx;
  return /* @__PURE__ */ b("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": o,
    tabIndex: w,
    className: Ct(a),
    style: {
      ...nt(a),
      cursor: h ? "pointer" : "default"
    },
    onClick: h ? u : void 0,
    onFocus: d,
    children: (!c || h) && ((m = a.renderGroupCell) == null ? void 0 : m.call(a, {
      groupKey: t,
      childRows: n,
      column: a,
      row: i,
      isExpanded: r,
      tabIndex: y,
      toggleGroup: u
    }))
  }, a.key);
}
const _i = /* @__PURE__ */ We(Gi), Bi = "g1yxluv37-0-0-beta-47", Ui = `rdg-group-row ${Bi}`;
function ji({
  className: e,
  row: t,
  rowIdx: n,
  viewportColumns: r,
  selectedCellIdx: o,
  isRowSelected: a,
  selectCell: i,
  gridRowStart: s,
  groupBy: c,
  toggleGroup: l,
  isRowSelectionDisabled: w,
  ...y
}) {
  const d = r[0].key === _e ? t.level + 1 : t.level;
  function u() {
    i({
      rowIdx: n,
      idx: -1
    });
  }
  const h = B(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ b(Mr, {
    value: h,
    children: /* @__PURE__ */ b("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Te(Cn, Ui, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Gt),
      onClick: u,
      style: pn(s),
      ...y,
      children: r.map((m) => /* @__PURE__ */ b(_i, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === m.idx,
        column: m,
        row: t,
        groupColumnIndex: d,
        toggleGroup: l,
        isGroupByColumn: c.includes(m.key)
      }, m.key))
    })
  });
}
const Ki = /* @__PURE__ */ We(ji);
function qi({
  columns: e,
  rows: t,
  rowHeight: n,
  rowKeyGetter: r,
  onCellKeyDown: o,
  onRowsChange: a,
  selectedRows: i,
  onSelectedRowsChange: s,
  renderers: c,
  groupBy: l,
  rowGrouper: w,
  expandedGroupIds: y,
  onExpandedGroupIdsChange: d,
  ...u
}, h) {
  var Oe, Pe, Re;
  const m = At(), C = (c == null ? void 0 : c.renderRow) ?? (m == null ? void 0 : m.renderRow) ?? $r, R = 1 + (((Oe = u.topSummaryRows) == null ? void 0 : Oe.length) ?? 0), M = u.direction === "rtl", k = M ? "ArrowRight" : "ArrowLeft", D = M ? "ArrowLeft" : "ArrowRight", O = ce(Ee), {
    columns: $,
    groupBy: v
  } = B(() => {
    const I = [...e].sort(({
      key: H
    }, {
      key: p
    }) => H === _e ? -1 : p === _e ? 1 : l.includes(H) ? l.includes(p) ? l.indexOf(H) - l.indexOf(p) : -1 : l.includes(p) ? 1 : 0), x = [];
    for (const [H, p] of I.entries())
      l.includes(p.key) && (x.push(p.key), I[H] = {
        ...p,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: p.renderGroupCell ?? Ca,
        editable: !1
      });
    return {
      columns: I,
      groupBy: x
    };
  }, [e, l]), [S, N] = B(() => {
    if (v.length === 0) return [void 0, t.length];
    const I = (x, [H, ...p], W) => {
      let _ = 0;
      const j = {};
      for (const [te, le] of Object.entries(w(x, H))) {
        const [we, ie] = p.length === 0 ? [le, le.length] : I(le, p, W + _ + 1);
        j[te] = {
          childRows: le,
          childGroups: we,
          startRowIndex: W + _
        }, _ += ie + 1;
      }
      return [j, _];
    };
    return I(t, v, 0);
  }, [v, w, t]), [E, z] = B(() => {
    const I = /* @__PURE__ */ new Set();
    if (!S) return [t, p];
    const x = [], H = (W, _, j) => {
      if (Xi(W)) {
        x.push(...W);
        return;
      }
      Object.keys(W).forEach((te, le, we) => {
        const ie = _ !== void 0 ? `${_}__${te}` : te, Ce = y.has(ie), {
          childRows: xe,
          childGroups: Ie,
          startRowIndex: ye
        } = W[te], de = {
          id: ie,
          parentId: _,
          groupKey: te,
          isExpanded: Ce,
          childRows: xe,
          level: j,
          posInSet: le,
          startRowIndex: ye,
          setSize: we.length
        };
        x.push(de), I.add(de), Ce && H(Ie, ie, j + 1);
      });
    };
    return H(S, void 0, 0), [x, p];
    function p(W) {
      return I.has(W);
    }
  }, [y, S, t]), Y = B(() => typeof n == "function" ? (I) => z(I) ? n({
    type: "GROUP",
    row: I
  }) : n({
    type: "ROW",
    row: I
  }) : n, [z, n]), L = Q((I) => {
    const x = E.indexOf(I);
    for (let H = x - 1; H >= 0; H--) {
      const p = E[H];
      if (z(p) && (!z(I) || I.parentId === p.id))
        return [p, H];
    }
  }, [z, E]), V = Q((I) => {
    if (z(I))
      return I.id;
    if (typeof r == "function")
      return r(I);
    const x = L(I);
    if (x !== void 0) {
      const {
        startRowIndex: H,
        childRows: p
      } = x[0], W = p.indexOf(I);
      return H + W + 1;
    }
    return E.indexOf(I);
  }, [L, z, r, E]), A = B(() => {
    if (i == null) return null;
    gt(r);
    const I = new Set(i);
    for (const x of E)
      z(x) && x.childRows.every((p) => i.has(r(p))) && I.add(x.id);
    return I;
  }, [z, r, i, E]);
  function re(I) {
    if (!s) return;
    gt(r);
    const x = new Set(i);
    for (const H of E) {
      const p = V(H);
      if (A != null && A.has(p) && !I.has(p))
        if (z(H))
          for (const W of H.childRows)
            x.delete(r(W));
        else
          x.delete(p);
      else if (!(A != null && A.has(p)) && I.has(p))
        if (z(H))
          for (const W of H.childRows)
            x.add(r(W));
        else
          x.add(p);
    }
    s(x);
  }
  function oe(I, x) {
    if (o == null || o(I, x), x.isGridDefaultPrevented() || I.mode === "EDIT") return;
    const {
      column: H,
      rowIdx: p,
      selectCell: W
    } = I, _ = (H == null ? void 0 : H.idx) ?? -1, j = E[p];
    if (z(j)) {
      if (_ === -1 && (x.key === k && j.isExpanded || x.key === D && !j.isExpanded) && (x.preventDefault(), x.preventGridDefault(), Ee(j.id)), _ === -1 && x.key === k && !j.isExpanded && j.level !== 0) {
        const te = L(j);
        te !== void 0 && (x.preventGridDefault(), W({
          idx: _,
          rowIdx: te[1]
        }));
      }
      Ht(x) && (x.keyCode === 67 || x.keyCode === 86) && x.preventGridDefault();
    }
  }
  function me(I, {
    indexes: x,
    column: H
  }) {
    if (!a) return;
    const p = [...t], W = [];
    for (const _ of x) {
      const j = t.indexOf(E[_]);
      p[j] = I[_], W.push(j);
    }
    a(p, {
      indexes: W,
      column: H
    });
  }
  function Ee(I) {
    const x = new Set(y);
    x.has(I) ? x.delete(I) : x.add(I), d(x);
  }
  function Me(I, {
    row: x,
    rowClass: H,
    onCellClick: p,
    onCellDoubleClick: W,
    onCellContextMenu: _,
    onRowChange: j,
    lastFrozenColumnIndex: te,
    copiedCellIdx: le,
    draggedOverCellIdx: we,
    setDraggedOverRowIdx: ie,
    selectedCellEditor: Ce,
    ...xe
  }) {
    if (z(x)) {
      const {
        startRowIndex: de
      } = x;
      return /* @__PURE__ */ b(Ki, {
        ...xe,
        "aria-rowindex": R + de + 1,
        row: x,
        groupBy: v,
        toggleGroup: O
      }, I);
    }
    let Ie = xe["aria-rowindex"];
    const ye = L(x);
    if (ye !== void 0) {
      const {
        startRowIndex: de,
        childRows: rt
      } = ye[0], ze = rt.indexOf(x);
      Ie = de + R + ze + 2;
    }
    return C(I, {
      ...xe,
      "aria-rowindex": Ie,
      row: x,
      rowClass: H,
      onCellClick: p,
      onCellDoubleClick: W,
      onCellContextMenu: _,
      onRowChange: j,
      lastFrozenColumnIndex: te,
      copiedCellIdx: le,
      draggedOverCellIdx: we,
      setDraggedOverRowIdx: ie,
      selectedCellEditor: Ce
    });
  }
  return /* @__PURE__ */ b(Yr, {
    ...u,
    role: "treegrid",
    "aria-rowcount": N + 1 + (((Pe = u.topSummaryRows) == null ? void 0 : Pe.length) ?? 0) + (((Re = u.bottomSummaryRows) == null ? void 0 : Re.length) ?? 0),
    ref: h,
    columns: $,
    rows: E,
    rowHeight: Y,
    rowKeyGetter: V,
    onRowsChange: me,
    selectedRows: A,
    onSelectedRowsChange: re,
    onCellKeyDown: oe,
    renderers: {
      ...c,
      renderRow: Me
    }
  });
}
function Xi(e) {
  return Array.isArray(e);
}
const Hl = /* @__PURE__ */ yn(qi), Vi = "t7vyx3i7-0-0-beta-47", Zi = `rdg-text-editor ${Vi}`;
function Qi(e) {
  e == null || e.focus(), e == null || e.select();
}
function Ll({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ b("input", {
    className: Zi,
    ref: Qi,
    value: e[t.key],
    onChange: (o) => n({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const Z = {
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
}, Ji = {
  "--rdg-color": Z.gray800,
  "--rdg-header-color": Z.gray700,
  "--rdg-border-color": Z.gray400,
  "--rdg-background-color": Z.forcewhite,
  "--rdg-header-background-color": Z.forcewhite,
  "--rdg-row-hover-background-color": Z.forcewhite,
  "--rdg-row-selected-hover-background-color": Z.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": Z.primary400,
  "--rdg-expanded-accent-color": Z.primary400,
  "--rdg-row-selected-color": Z.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": Z.primary500,
  "--rdg-scrollbar-track-background": Z.gray100,
  "--rdg--scrollbar-thumb-hover-background": Z.primary500,
  "--rdg--scrollbar-track-hover-background": Z.gray200
}, es = Se.div`
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

    > div:first-child {
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
           (getHeaderFilter's Box) — collapsing the label/filter to a 5px absolute strip. */
        > div:last-child {
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
`;
var et = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(et || {}), yt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(yt || {});
function ts(e, t, n, r) {
  return (o, a) => {
    const i = r ? r(o) : o[e], s = r ? r(a) : a[e];
    try {
      if (n)
        return n(i, s, o, a);
      if (t === et.NUMBER) {
        const c = Number(i), l = Number(s);
        return isNaN(c) || isNaN(l) ? (console.warn("Invalid number for sorting:", { a: i, b: s }), isNaN(c) ? 1 : -1) : c - l;
      } else if (t === et.DATE) {
        const c = new Date(i).getTime(), l = new Date(s).getTime();
        return isNaN(c) || isNaN(l) ? (console.warn("Invalid date for sorting:", { a: i, b: s }), isNaN(c) ? 1 : -1) : c - l;
      }
      return t === et.STRING || !t ? String(i).localeCompare(String(s)) : t === et.BOOLEAN ? +!!i - +!!s : 0;
    } catch (c) {
      return console.error("Error in sorting:", c), 0;
    }
  };
}
const ns = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, o] = J(n ?? []), a = B(() => r.length === 0 ? t : [...t].sort((s, c) => {
    for (const l of r) {
      const w = e.find((u) => u.key === l.columnKey), d = ts(
        l.columnKey,
        w == null ? void 0 : w.type,
        w == null ? void 0 : w.sortComparator,
        w == null ? void 0 : w.getColumnValue
      )(s, c);
      if (d !== 0)
        return l.direction === "ASC" ? d : -d;
    }
    return 0;
  }), [t, r]), i = Q((s) => {
    s.length !== 0 ? o(s) : o((c) => c.length === 1 ? [
      {
        columnKey: c[0].columnKey,
        direction: c[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : c);
  }, []);
  return {
    sortedRows: a,
    sortColumns: r,
    setSortedColumns: i
  };
}, mt = 40, rs = 200, os = "rdg-row-expanded", as = "rdg-detail-row", Ar = "__rdgDetailParent", is = (e) => ({ id: `rdg-detail:${e.id}`, [Ar]: e }), xn = (e) => e[Ar], Wt = (e) => xn(e) !== void 0, ss = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, is(r)] : [r]);
}, cs = Se.button`
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
`, ls = () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ b("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), Gr = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ b(
    cs,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (a) => {
        a.stopPropagation(), _r(t, e.id);
      },
      children: /* @__PURE__ */ b(ls, {})
    }
  );
}, _r = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, ds = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', us = (e, t, n) => Wt(e) || t === hs || t === Br ? !1 : !(n instanceof Element && n.closest(ds)), tr = Se.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, fs = Se.span`
    display: inline-block;
    flex: 0 0 ${mt - 16}px;
`, hs = _e, Br = "rdg-expander-column", gs = (e) => ({
  key: Br,
  name: "",
  frozen: !0,
  width: mt,
  minWidth: mt,
  maxWidth: mt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ b(Gr, { row: t, expandable: e })
}), ms = (e, t) => {
  const n = [
    ...e.filter((i) => i.frozen),
    ...e.filter((i) => !i.frozen)
  ], r = n.findIndex((i) => !i.frozen);
  if (r === -1)
    return e;
  const o = n[r], a = n.length - r;
  return e.map((i) => i !== o ? !i.frozen || !i.renderCell ? i : {
    ...i,
    renderCell: (s) => {
      var c;
      return Wt(s.row) ? null : (c = i.renderCell) == null ? void 0 : c.call(i, s);
    }
  } : {
    ...i,
    colSpan: (s) => {
      var c;
      return s.type === "ROW" && Wt(s.row) ? a : (c = i.colSpan) == null ? void 0 : c.call(i, s);
    },
    renderCell: (s) => {
      var l;
      const c = xn(s.row);
      return c ? t(c) : ((l = i.renderCell) == null ? void 0 : l.call(i, s)) ?? null;
    }
  });
}, ws = (e, t, n) => (r) => {
  const o = xn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, ys = (e, t = []) => Wt(e) ? as : t.includes(e.id) ? os : "", Ur = Se(jo)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${Z.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${Z.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${Z.gray800};
  }

  fieldset {
    display: none;
  }

}
`, vn = pe.createContext({
  filters: {},
  setFilters: () => {
  }
}), ps = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = pe.useState({});
  return /* @__PURE__ */ b(
    vn.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, rn = (e) => e.stopPropagation(), bs = ({ options: e, renderInput: t, ...n }) => {
  const r = B(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ b(
    Ko,
    {
      onChange: (o, a) => {
        var i;
        return (i = n.onChange) == null ? void 0 : i.call(n, a == null ? void 0 : a.value);
      },
      value: r ?? null,
      options: e,
      onClick: rn,
      onKeyDown: rn,
      getOptionLabel: (o) => o.label,
      renderInput: t || ((o) => /* @__PURE__ */ b(
        Ur,
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
}, Cs = Se(Uo)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Pt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ ne(Cs, { children: [
  Lr(t),
  e
] }), xs = (e) => (t) => {
  const { filters: n, setFilters: r } = De(vn), o = B(() => n[e.key], [n, e]), a = Q(
    (i) => {
      r({ ...n, [e.key]: i });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ b(on, { ...t, children: /* @__PURE__ */ b(
    bs,
    {
      options: e.filterOptions ?? [],
      onChange: a,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ b(on, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (i) => a(i.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: Pt,
    onKeyDown: Pt
  }) : /* @__PURE__ */ b(
    Ur,
    {
      autoComplete: "off",
      onClick: Pt,
      onKeyDown: Pt,
      value: o ?? "",
      onChange: (i) => a(i.target.value)
    }
  ) }) : /* @__PURE__ */ b(on, { ...t });
}, vs = {
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
}, ks = (e, t, n) => {
  let r;
  const o = vs[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function an(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ds = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ss = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Rs = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Is = {
  date: an({
    formats: Ds,
    defaultWidth: "full"
  }),
  time: an({
    formats: Ss,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Rs,
    defaultWidth: "full"
  })
}, Ts = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Es = (e, t, n, r) => Ts[e];
function ut(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const Ms = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Os = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ps = {
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
}, Ns = {
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
}, Fs = {
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
}, Hs = {
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
}, Ls = (e, t) => {
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
}, Ws = {
  ordinalNumber: Ls,
  era: ut({
    values: Ms,
    defaultWidth: "wide"
  }),
  quarter: ut({
    values: Os,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ut({
    values: Ps,
    defaultWidth: "wide"
  }),
  day: ut({
    values: Ns,
    defaultWidth: "wide"
  }),
  dayPeriod: ut({
    values: Fs,
    defaultWidth: "wide",
    formattingValues: Hs,
    defaultFormattingWidth: "wide"
  })
};
function ft(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? $s(s, (y) => y.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      zs(s, (y) => y.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const w = t.slice(i.length);
    return { value: l, rest: w };
  };
}
function zs(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function $s(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ys(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const As = /^(\d+)(th|st|nd|rd)?/i, Gs = /\d+/i, _s = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Bs = {
  any: [/^b/i, /^(a|c)/i]
}, Us = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, js = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ks = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qs = {
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
}, Xs = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Vs = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Zs = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Qs = {
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
}, Js = {
  ordinalNumber: Ys({
    matchPattern: As,
    parsePattern: Gs,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ft({
    matchPatterns: _s,
    defaultMatchWidth: "wide",
    parsePatterns: Bs,
    defaultParseWidth: "any"
  }),
  quarter: ft({
    matchPatterns: Us,
    defaultMatchWidth: "wide",
    parsePatterns: js,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ft({
    matchPatterns: Ks,
    defaultMatchWidth: "wide",
    parsePatterns: qs,
    defaultParseWidth: "any"
  }),
  day: ft({
    matchPatterns: Xs,
    defaultMatchWidth: "wide",
    parsePatterns: Vs,
    defaultParseWidth: "any"
  }),
  dayPeriod: ft({
    matchPatterns: Zs,
    defaultMatchWidth: "any",
    parsePatterns: Qs,
    defaultParseWidth: "any"
  })
}, ec = {
  code: "en-US",
  formatDistance: ks,
  formatLong: Is,
  formatRelative: Es,
  localize: Ws,
  match: Js,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let tc = {};
function vt() {
  return tc;
}
const jr = 6048e5, nc = 864e5, nr = Symbol.for("constructDateFrom");
function Le(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && nr in e ? e[nr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function be(e, t) {
  return Le(t || e, e);
}
function rr(e) {
  const t = be(e), n = new Date(
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
function rc(e, ...t) {
  const n = Le.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function or(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function oc(e, t, n) {
  const [r, o] = rc(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = or(r), i = or(o), s = +a - rr(a), c = +i - rr(i);
  return Math.round((s - c) / nc);
}
function ac(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ic(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return oc(n, ac(n)) + 1;
}
function pt(e, t) {
  var s, c, l, w;
  const n = vt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((w = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : w.weekStartsOn) ?? 0, o = be(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function zt(e, t) {
  return pt(e, { ...t, weekStartsOn: 1 });
}
function Kr(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Le(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = zt(o), i = Le(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = zt(i);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function sc(e, t) {
  const n = Kr(e, t), r = Le(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), zt(r);
}
function cc(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = +zt(n) - +sc(n);
  return Math.round(r / jr) + 1;
}
function qr(e, t) {
  var w, y, d, u;
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = vt(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((y = (w = t == null ? void 0 : t.locale) == null ? void 0 : w.options) == null ? void 0 : y.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((u = (d = o.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, i = Le((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = pt(i, t), c = Le((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = pt(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function lc(e, t) {
  var s, c, l, w;
  const n = vt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((w = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = qr(e, t), a = Le((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), pt(a, t);
}
function dc(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = +pt(n, t) - +lc(n, t);
  return Math.round(r / jr) + 1;
}
function U(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const He = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return U(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : U(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return U(e.getDate(), t.length);
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
    return U(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return U(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return U(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return U(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return U(o, t.length);
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
    return He.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = qr(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return U(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : U(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Kr(e);
    return U(n, t.length);
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
    return U(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return U(r, 2);
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
        return U(r, 2);
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
        return U(r + 1, 2);
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
    const o = dc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : U(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = cc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : U(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : He.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ic(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : U(r, t.length);
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
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return U(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
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
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return U(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
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
        return U(o, t.length);
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
    return He.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : He.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : U(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : U(r, t.length);
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
        return sr(r);
      case "XXXX":
      case "XX":
        return Ae(r);
      case "XXXXX":
      case "XXX":
      default:
        return Ae(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return sr(r);
      case "xxxx":
      case "xx":
        return Ae(r);
      case "xxxxx":
      case "xxx":
      default:
        return Ae(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ir(r, ":");
      case "OOOO":
      default:
        return "GMT" + Ae(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ir(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ae(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return U(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return U(+e, t.length);
  }
};
function ir(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + U(a, 2);
}
function sr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + U(Math.abs(e) / 60, 2) : Ae(e, t);
}
function Ae(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = U(Math.trunc(r / 60), 2), a = U(r % 60, 2);
  return n + o + t + a;
}
const cr = (e, t) => {
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
}, Xr = (e, t) => {
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
}, uc = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return cr(e, t);
  let a;
  switch (r) {
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
  return a.replace("{{date}}", cr(r, t)).replace("{{time}}", Xr(o, t));
}, fc = {
  p: Xr,
  P: uc
}, hc = /^D+$/, gc = /^Y+$/, mc = ["D", "DD", "YY", "YYYY"];
function wc(e) {
  return hc.test(e);
}
function yc(e) {
  return gc.test(e);
}
function pc(e, t, n) {
  const r = bc(e, t, n);
  if (console.warn(r), mc.includes(e)) throw new RangeError(r);
}
function bc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Vr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Zr(e) {
  return !(!Vr(e) && typeof e != "number" || isNaN(+be(e)));
}
const Cc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, xc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vc = /^'([^]*?)'?$/, kc = /''/g, Dc = /[a-zA-Z]/;
function Sc(e, t, n) {
  var w, y, d, u, h, m, C, R;
  const r = vt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ec, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((y = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : y.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((u = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((R = (C = r.locale) == null ? void 0 : C.options) == null ? void 0 : R.weekStartsOn) ?? 0, s = be(e, n == null ? void 0 : n.in);
  if (!Zr(s))
    throw new RangeError("Invalid time value");
  let c = t.match(xc).map((M) => {
    const k = M[0];
    if (k === "p" || k === "P") {
      const D = fc[k];
      return D(M, o.formatLong);
    }
    return M;
  }).join("").match(Cc).map((M) => {
    if (M === "''")
      return { isToken: !1, value: "'" };
    const k = M[0];
    if (k === "'")
      return { isToken: !1, value: Rc(M) };
    if (ar[k])
      return { isToken: !0, value: M };
    if (k.match(Dc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + k + "`"
      );
    return { isToken: !1, value: M };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((M) => {
    if (!M.isToken) return M.value;
    const k = M.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && yc(k) || !(n != null && n.useAdditionalDayOfYearTokens) && wc(k)) && pc(k, t, String(e));
    const D = ar[k[0]];
    return D(s, k, o.localize, l);
  }).join("");
}
function Rc(e) {
  const t = e.match(vc);
  return t ? t[1].replace(kc, "'") : e;
}
function Ic() {
  return Object.assign({}, vt());
}
function lr(e, t, n) {
  const r = Ic(), o = Mc(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Tc(o, t) : Ec(o, t);
}
function Tc(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Ec(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function Mc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Oc(e, t) {
  const n = Lc(t);
  return "formatToParts" in n ? Nc(n, e) : Fc(n, e);
}
const Pc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Nc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const a = Pc[n[o].type];
      a !== void 0 && (r[a] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function Fc(e, t) {
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
const sn = {}, dr = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Hc = dr === "06/25/2014, 00:00:00" || dr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Lc(e) {
  return sn[e] || (sn[e] = Hc ? new Intl.DateTimeFormat("en-US", {
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
function Qr(e, t, n, r, o, a, i) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, a, i), s;
}
const ur = 36e5, Wc = 6e4, cn = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function kn(e, t, n) {
  if (!e)
    return 0;
  let r = cn.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, a;
  if (r = cn.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), fr(o) ? -(o * ur) : NaN;
  if (r = cn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const i = parseInt(r[3], 10);
    return fr(o, i) ? (a = Math.abs(o) * ur + i * Wc, r[1] === "+" ? -a : a) : NaN;
  }
  if (Yc(e)) {
    t = new Date(t || Date.now());
    const i = n ? t : zc(t), s = mn(i, e);
    return -(n ? s : $c(t, s, e));
  }
  return NaN;
}
function zc(e) {
  return Qr(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function mn(e, t) {
  const n = Oc(e, t), r = Qr(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, r - o;
}
function $c(e, t, n) {
  let o = e.getTime() - t;
  const a = mn(new Date(o), n);
  if (t === a)
    return t;
  o -= a - t;
  const i = mn(new Date(o), n);
  return a === i ? a : Math.max(a, i);
}
function fr(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const hr = {};
function Yc(e) {
  if (hr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), hr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Ac = 60 * 1e3, Gc = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = ln(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return gr(r);
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
        return gr(r);
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
        return "GMT" + _c(r, ":");
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
        return lr("short", e, n);
      case "zzzz":
      default:
        return lr("long", e, n);
    }
  }
};
function ln(e, t) {
  const n = e ? kn(e, t, !0) / Ac : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function $t(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Je(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = $t(Math.floor(r / 60), 2), a = $t(Math.floor(r % 60), 2);
  return n + o + t + a;
}
function gr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + $t(Math.abs(e) / 60, 2) : Je(e, t);
}
function _c(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + $t(a, 2);
}
function mr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Bc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, wr = 6e4, Uc = 2, ae = {
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
  timeZone: Bc
};
function Jr(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? Uc : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = jc(e), { year: o, restDateString: a } = Kc(r.date, n), i = qc(a, o);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const s = i.getTime();
    let c = 0, l;
    if (r.time && (c = Xc(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (l = kn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = mr(new Date(s + c)), l = mr(new Date(s + c + l));
    return new Date(s + c + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function jc(e) {
  const t = {};
  let n = ae.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ae.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ae.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Kc(e, t) {
  if (e) {
    const n = ae.YYY[t], r = ae.YYYYY[t];
    let o = ae.YYYY.exec(e) || r.exec(e);
    if (o) {
      const a = o[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (o = ae.YY.exec(e) || n.exec(e), o) {
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
function qc(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = ae.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, pr(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = ae.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const i = parseInt(a[1], 10);
    return Qc(t, i) ? (n.setUTCFullYear(t, 0, i), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = ae.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10);
    return pr(t, r, i) ? (n.setUTCFullYear(t, r, i), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = ae.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, br(o) ? yr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (a = ae.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10) - 1;
    return br(o, i) ? yr(t, o, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Xc(e) {
  let t, n, r = ae.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), un(t) ? t % 24 * dn : NaN;
  if (r = ae.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), un(t, n) ? t % 24 * dn + n * wr : NaN;
  if (r = ae.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return un(t, n, o) ? t % 24 * dn + n * wr + o * 1e3 : NaN;
  }
  return null;
}
function yr(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, a = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const Vc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Zc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function eo(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function pr(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = eo(e);
    if (r && n > Zc[t] || !r && n > Vc[t])
      return !1;
  }
  return !0;
}
function Qc(e, t) {
  if (t < 1)
    return !1;
  const n = eo(e);
  return !(n && t > 366 || !n && t > 365);
}
function br(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function un(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const Jc = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function el(e, t, n = {}) {
  t = String(t);
  const r = t.match(Jc);
  if (r) {
    const o = Jr(n.originalDate || e, n);
    t = r.reduce(function(a, i) {
      if (i[0] === "'")
        return a;
      const s = a.indexOf(i), c = a[s - 1] === "'", l = a.replace(i, "'" + Gc[i[0]](o, i, n) + "'");
      return c ? l.substring(0, s - 1) + l.substring(s + 1) : l;
    }, t);
  }
  return Sc(e, t, n);
}
function tl(e, t, n) {
  e = Jr(e, n);
  const r = kn(t, e, !0), o = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
function nl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, el(tl(e, t, { timeZone: r.timeZone }), n, r);
}
var to = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(to || {});
const rl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !Vr(e) && typeof e == "string" ? new Date(e) : e;
  return Zr(r) ? nl(e, n, t) : "--";
}, Cr = (e) => e.trim().toLowerCase(), _t = pe.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1,
  chooserOpen: !1,
  setChooserOpen: () => {
  }
}), ol = "data-grid-hidden-column-visibility", al = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: a = ol,
  onHiddenColumnsChange: i
}) => {
  const [s, c] = pe.useState(0), [l, w] = pe.useState(!1), [y, d] = pe.useState([]);
  Ge(() => {
    const C = localStorage.getItem(a);
    if (C) {
      const R = JSON.parse(C);
      u(Array.isArray(R) ? R : []);
    } else
      u(r || []);
  }, [r]);
  const u = Q((C) => {
    localStorage.setItem(a, JSON.stringify(C)), c((R) => R + 1), d(C);
  }, []), h = Q(
    (C) => {
      u(C), i == null || i(C);
    },
    [u, i]
  ), m = B(
    () => e.filter((C) => !(n != null && n.includes(C.key))),
    [e, n]
  );
  return /* @__PURE__ */ b(
    _t.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        chooserOpen: l,
        setChooserOpen: w,
        columns: m,
        hiddenColumn: y,
        setHiddenColumn: h,
        enabled: o
      },
      children: t
    }
  );
}, Dn = Se(qo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Z.primary500};
    }
`, fn = "rdg-cell-frozen-right", hn = (...e) => e.filter(Boolean).join(" "), il = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: a
}) => {
  const { enabled: i, hiddenColumn: s } = De(_t), c = Q((l) => {
    const w = () => {
      if (l.renderCell)
        return l.renderCell;
      if (l.type === et.DATE)
        return ({ row: u }) => {
          var h, m;
          return rl(
            u[l.key],
            ((h = l.dateOptions) == null ? void 0 : h.formatDate) ?? to.DATE_WITH_TIME,
            (m = l.dateOptions) == null ? void 0 : m.timeZone
          );
        };
    }, y = () => l.renderHeaderCell ? l.renderHeaderCell : xs(l), d = {
      ...l,
      renderCell: w(),
      renderHeaderCell: y()
    };
    return l.frozenRight && (d.frozen = !1, d.cellClass = typeof l.cellClass == "function" ? (u) => hn(
      fn,
      l.cellClass(u)
    ) : hn(fn, l.cellClass), d.headerCellClass = hn(fn, l.headerCellClass)), d;
  }, []);
  return B(() => {
    const l = [];
    if (t && !n && l.push(gs(t)), n) {
      const w = (r ?? []).map((h) => h.id), y = w.length > 0 && w.every((h) => o == null ? void 0 : o.includes(h)), d = (h) => {
        const m = (o ?? []).filter((C) => !w.includes(C));
        return h ? [...m, ...w] : m;
      }, u = t ? 50 + mt : 50;
      l.push({
        ...dt,
        width: u,
        minWidth: u,
        maxWidth: u,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        renderHeaderCell: () => /* @__PURE__ */ ne(tr, { children: [
          t && /* @__PURE__ */ b(fs, { "aria-hidden": !0 }),
          /* @__PURE__ */ b(
            Dn,
            {
              checked: y,
              onChange: (h, m) => a == null ? void 0 : a(d(m))
            }
          )
        ] }),
        renderCell: t ? (h) => {
          var m;
          return /* @__PURE__ */ ne(tr, { children: [
            /* @__PURE__ */ b(Gr, { row: h.row, expandable: t }),
            (m = dt.renderCell) == null ? void 0 : m.call(dt, h)
          ] });
        } : dt.renderCell
      });
    }
    return l.push(...e.map((w) => c(w))), i && s ? l.filter((w) => !s.includes(w.key)) : l;
  }, [
    e,
    t,
    c,
    i,
    s,
    n,
    r,
    o,
    a
  ]);
};
var sl = {
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
function cl(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return sl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function gn(e) {
  var t = cl(e);
  return "".concat(t.value).concat(t.unit);
}
var ll = function(e, t, n) {
  var r = "react-spinners-".concat(e, "-").concat(n);
  if (typeof window > "u" || !window.document)
    return r;
  var o = document.createElement("style");
  document.head.appendChild(o);
  var a = o.sheet, i = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
  return a && a.insertRule(i, 0), r;
}, Yt = function() {
  return Yt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Yt.apply(this, arguments);
}, dl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, ul = ll("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function fl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, a = e.speedMultiplier, i = a === void 0 ? 1 : a, s = e.cssOverride, c = s === void 0 ? {} : s, l = e.size, w = l === void 0 ? 15 : l, y = e.margin, d = y === void 0 ? 2 : y, u = dl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), h = Yt({ display: "inherit" }, c), m = function(C) {
    return {
      backgroundColor: o,
      width: gn(w),
      height: gn(w),
      margin: gn(d),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(ul, " ").concat(0.75 / i, "s ").concat(C * 0.12 / i, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Ot.createElement(
    "span",
    Yt({ style: h }, u),
    Ot.createElement("span", { style: m(1) }),
    Ot.createElement("span", { style: m(2) }),
    Ot.createElement("span", { style: m(3) })
  ) : null;
}
const hl = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === yt.TEXT && typeof n == "string" && typeof r == "string" ? Cr(n).includes(Cr(r)) : t === yt.AUTOCOMPLETE ? n === r : !1, gl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = De(vn);
  return B(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([a, i]) => {
      if (i === void 0 || typeof i == "string" && i === "")
        return !0;
      const s = e.find((c) => c.key === a);
      return s ? hl({
        comparator: s.filterComparator,
        filterType: s.filterType ?? yt.TEXT,
        value: o[a],
        valueToMatch: i,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, ml = Se.div`
    height: 80px;
    width: 100%;
`, wl = pe.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: o, labels: a }) => {
    const i = Q(
      (c, l) => {
        t(l);
      },
      []
    ), s = Q(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ b(ml, { children: /* @__PURE__ */ b(
      Xo,
      {
        labelRowsPerPage: a != null && a.rowsPerPageLabel ? /* @__PURE__ */ b("span", { children: a == null ? void 0 : a.rowsPerPageLabel }) : void 0,
        labelDisplayedRows: ({ from: c, to: l, count: w }) => `${c}-${l} ${a != null && a.ofLabel ? a.ofLabel : "of"} ${w}`,
        component: "div",
        count: o,
        page: e,
        onPageChange: i,
        rowsPerPage: r,
        onRowsPerPageChange: s
      }
    ) });
  }
);
var yl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(yl || {});
const pl = (e = 10) => {
  const [t, n] = J(0), [r, o] = J(e), a = Q(() => {
    n(0), o(e);
  }, []);
  return Ge(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: o,
    resetPagination: a
  };
}, xr = 50, bl = Se.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${Z.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, Cl = pe.memo(({ checked: e, onChange: t }) => {
  const n = Q(
    (r, o) => {
      t(o, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ b(Dn, { checked: e, onChange: n });
}), xl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: a,
  defaultSortColumns: i,
  selectedRows: s,
  onSelectedRowsChange: c,
  noDataMessage: l,
  filters: w,
  setFilters: y,
  pagination: d,
  renderers: u,
  expandable: h,
  rowHeight: m,
  onCellClick: C,
  ...R
}) => {
  var I;
  const { gridKey: M } = De(_t), { pageSize: k, currentPage: D, setCurrentPage: O, setPageSize: $ } = pl(
    d == null ? void 0 : d.defaultPageSize
  ), v = il({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: h,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c
  }), S = B(() => v.map((x) => x.key).join("|"), [v]), N = B(
    () => v.some((x) => x.filterEnabled),
    [v]
  ), E = B(
    () => (d == null ? void 0 : d.enabled) && !d.remotePagination,
    [d]
  ), z = B(() => !y, [y]), Y = gl({
    columns: v,
    rows: n,
    enabled: z
  }), L = B(() => !a, [a]), {
    sortedRows: V,
    sortColumns: A,
    setSortedColumns: re
  } = ns({
    columns: v,
    rows: Y,
    defaultSortColumns: i
  }), oe = B(() => {
    if (!E)
      return D;
    const x = Math.max(0, Math.ceil(Y.length / k) - 1);
    return Math.min(D, x);
  }, [E, D, k, Y.length]);
  Ge(() => {
    oe !== D && O(oe);
  }, [oe, D, O]);
  const me = B(() => E ? V.slice(oe * k, (oe + 1) * k) : V, [V, E, oe, k]), Ee = B(
    () => h ? ss(me, h.expandedIds) : me,
    [h, me]
  ), Me = B(
    () => h ? ms(v, h.renderDetail) : v,
    [h, v]
  ), Oe = Q(
    (x, H) => {
      const p = ys(x, h == null ? void 0 : h.expandedIds);
      return p || (H === 0 ? "first-row" : H === n.length - 1 ? "last-row" : "");
    },
    [n, h == null ? void 0 : h.expandedIds]
  ), Pe = Q(
    (x, H) => {
      C == null || C(x, H), !(!h || H.isGridDefaultPrevented()) && us(x.row, x.column.key, H.target) && _r(h, x.row.id);
    },
    [C, h]
  ), Re = !(d != null && d.remotePagination);
  return Ge(() => {
    if (!Re)
      return;
    const x = s == null ? void 0 : s.filter(
      (H) => n.some((p) => p.id === H)
    );
    (x == null ? void 0 : x.length) != (s == null ? void 0 : s.length) && (c == null || c(x ?? []));
  }, [n, s, Re]), /* @__PURE__ */ ne(es, { $pagination: !!(d != null && d.enabled), children: [
    /* @__PURE__ */ b("div", { children: /* @__PURE__ */ b(
      Yr,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: (x) => {
          c == null || c(Array.from(x));
        },
        rowKeyGetter: (x) => x.id,
        rows: Ee,
        onSortColumnsChange: L ? re : a,
        sortColumns: L ? A : o,
        columns: Me,
        rowClass: Oe,
        headerRowHeight: N ? 70 : void 0,
        onCellClick: Pe,
        enableVirtualization: Me.some((x) => x.frozenRight) ? !1 : void 0,
        ...R,
        rowHeight: h ? ws(
          m,
          xr,
          h.detailHeight ?? rs
        ) : m ?? xr,
        renderers: {
          renderCheckbox: (x) => /* @__PURE__ */ b(Cl, { ...x }),
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...l != null && !t ? {
            noRowsFallback: /* @__PURE__ */ b("div", { className: "rdg-no-data", children: l })
          } : {},
          ...u
        },
        style: { ...Ji, ...e ?? {} }
      },
      `${M}:${S}`
    ) }),
    d != null && d.enabled ? /* @__PURE__ */ b(
      wl,
      {
        ...(d == null ? void 0 : d.remotePagination) ?? {
          currentPage: oe,
          setCurrentPage: O,
          pageSize: k,
          setPageSize: $,
          totalCount: Y.length
        },
        labels: d.labels ?? ((I = d.remotePagination) == null ? void 0 : I.labels)
      }
    ) : null,
    t ? /* @__PURE__ */ ne(bl, { children: [
      /* @__PURE__ */ b("div", {}),
      /* @__PURE__ */ b(fl, { color: Z.primary500 })
    ] }) : null
  ] });
}, Wl = ({
  filters: e,
  setFilters: t,
  columns: n,
  visibilityColumnFeature: {
    enabled: r,
    visibilityFeatureDisabledFor: o,
    hiddenByDefault: a,
    localStorageKey: i,
    onHiddenColumnsChange: s
  } = {},
  ...c
}) => /* @__PURE__ */ b(ps, { filters: e, setFilters: t, children: /* @__PURE__ */ b(
  al,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: a,
    localStorageKey: i,
    onHiddenColumnsChange: s,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ b(xl, { ...c, columns: n, filters: e, setFilters: t })
  }
) }), vl = Se(Zo)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, zl = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r, chooserOpen: o, setChooserOpen: a } = De(_t), i = pe.useRef(null), [s, c] = pe.useState(null);
  pe.useEffect(() => {
    c(o ? i.current : null);
  }, [o]);
  const l = Q(() => {
    a(!0);
  }, [a]), w = Q(() => {
    a(!1);
  }, [a]), y = Q(
    (d) => () => {
      const u = n.indexOf(d);
      r(
        u === -1 ? [...n, d] : n.filter((h) => h !== d)
      );
    },
    [n]
  );
  return /* @__PURE__ */ ne("div", { ref: i, children: [
    /* @__PURE__ */ b(e, { onClick: l }),
    /* @__PURE__ */ b(
      Vo,
      {
        id: "column-visibility-menu",
        anchorEl: s,
        open: o && !!s,
        onClose: w,
        children: t.map((d) => /* @__PURE__ */ ne(vl, { onClick: y(d.key), children: [
          /* @__PURE__ */ b(Dn, { checked: !n.includes(d.key) }),
          d.name
        ] }, d.key))
      }
    )
  ] });
};
export {
  et as ColumnType,
  to as DATE_FORMAT,
  rs as DEFAULT_DETAIL_HEIGHT,
  yl as DEFAULT_PAGE_SIZES,
  as as DETAIL_ROW_CLASS,
  Wl as DataGrid,
  Dn as DataGridCheckbox,
  ka as DataGridDefaultRenderersProvider,
  os as EXPANDED_ROW_CLASS,
  Br as EXPANDER_COLUMN_KEY,
  mt as EXPANDER_WIDTH,
  Gr as ExpanderToggle,
  yt as FilterType,
  tr as LeadingCell,
  fs as LeadingHeaderSpacer,
  Fl as Row,
  hs as SELECTION_COLUMN_KEY,
  _e as SELECT_COLUMN_KEY,
  bn as SelectCellFormatter,
  dt as SelectColumn,
  xa as ToggleGroup,
  Hl as TreeDataGrid,
  zl as VisibilityColumnChooser,
  us as clickExpandsRow,
  rl as convertDate,
  Ji as defaultTheme,
  ws as detailAwareRowHeight,
  xn as detailParent,
  ys as detailRowClass,
  is as detailRowFor,
  gs as expanderColumn,
  Cr as getStringToCompare,
  Wt as isDetailRow,
  ma as renderCheckbox,
  Lr as renderHeaderCell,
  Ri as renderSortIcon,
  Ii as renderSortPriority,
  Ca as renderToggleGroup,
  va as renderValue,
  Z as taktikTheme,
  Ll as textEditor,
  _r as toggleExpanded,
  Ia as useHeaderRowSelection,
  pl as usePagination,
  Pr as useRowSelection,
  ms as withDetailRendering,
  ss as withDetailRows
};
