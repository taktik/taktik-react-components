import { jsx as y, jsxs as ie, Fragment as wn } from "react/jsx-runtime";
import * as Ot from "react";
import Te, { createContext as bt, memo as Le, forwardRef as yn, useContext as pe, useMemo as G, useCallback as ee, useRef as Se, useEffect as _e, useState as ne, useImperativeHandle as Bo, useLayoutEffect as Uo, useId as Go } from "react";
import { flushSync as Ht } from "react-dom";
import Re from "@emotion/styled";
import jo from "@mui/material/Menu";
import Ko from "@mui/material/MenuItem";
import qo from "@mui/material/Checkbox";
import Xo from "@mui/material/Box";
import Vo from "@mui/material/TextField";
import Zo from "@mui/material/Autocomplete";
import Qo from "@mui/material/TablePagination";
function vr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ee() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vr(e)) && (r && (r += " "), r += t);
  return r;
}
function me(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function Jo(e) {
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
const ei = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function Lt(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ti(e) {
  return Lt(e) && e.keyCode !== 86 ? !1 : !ei.has(e.key);
}
function ni({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const ri = "mlln6zg7-0-0-beta-47";
function oi(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: o
  }) => /* @__PURE__ */ y("div", {
    className: ri,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function ii({
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
function ai({
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
    return me(a, i, {
      type: "HEADER"
    });
  if (t && r > o && r <= s + o)
    return me(a, i, {
      type: "SUMMARY",
      row: t[r + s]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return me(a, i, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return me(a, i, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function si({
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
  maxRowIdx: b,
  currentPosition: {
    idx: h,
    rowIdx: m
  },
  nextPosition: d,
  lastFrozenColumnIndex: C,
  isCellWithinBounds: u
}) {
  let {
    idx: g,
    rowIdx: D
  } = d;
  const v = r.length, k = (W) => {
    for (const x of o) {
      const S = x.idx;
      if (S > g) break;
      const F = ai({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: D,
        mainHeaderRowIdx: l,
        lastFrozenColumnIndex: C,
        column: x
      });
      if (F && g > S && g < F + S) {
        g = S + (W ? F : 0);
        break;
      }
    }
  }, I = (W) => W.level + l, N = () => {
    if (t) {
      let x = r[g].parent;
      for (; x !== void 0; ) {
        const S = I(x);
        if (D === S) {
          g = x.idx + x.colSpan;
          break;
        }
        x = x.parent;
      }
    } else if (e) {
      let x = r[g].parent, S = !1;
      for (; x !== void 0; ) {
        const F = I(x);
        if (D >= F) {
          g = x.idx, D = F, S = !0;
          break;
        }
        x = x.parent;
      }
      S || (g = h, D = m);
    }
  };
  if (u(d) && (k(t), D < l && N()), n === "CHANGE_ROW" && (g === v ? D === b || (g = 0, D += 1) : g === -1 && (D === c || (D -= 1, g = v - 1), k(!1))), D < l) {
    let x = r[g].parent;
    const S = D;
    for (D = l; x !== void 0; ) {
      const F = I(x);
      F >= S && (D = F, g = x.idx), x = x.parent;
    }
  }
  return {
    idx: g,
    rowIdx: D
  };
}
function ci({
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
const li = "cj343x07-0-0-beta-47", Dr = `rdg-cell ${li}`, di = "csofj7r7-0-0-beta-47", ui = `rdg-cell-frozen ${di}`;
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
  return Ee(Dr, ...t, e.frozen && ui);
}
const {
  min: wt,
  max: Wt,
  floor: Vn,
  sign: fi,
  abs: hi
} = Math;
function gt(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Rr(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = Wt(e, t), typeof n == "number" && n >= t ? wt(e, n) : e;
}
function Ir(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const gi = "c1bn88vv7-0-0-beta-47", mi = `rdg-checkbox-input ${gi}`;
function wi({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ y("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: mi,
    onChange: r,
    ...n
  });
}
const yi = "g1s9ylgp7-0-0-beta-47", pi = `rdg-group-cell-content ${yi}`, bi = "cz54e4y7-0-0-beta-47", Ci = `rdg-caret ${bi}`;
function xi(e) {
  return /* @__PURE__ */ y(vi, {
    ...e
  });
}
function vi({
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
  return /* @__PURE__ */ ie("span", {
    className: pi,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ y("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Ci,
      "aria-hidden": !0,
      children: /* @__PURE__ */ y("path", {
        d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7"
      })
    })]
  });
}
function ki(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Tr = /* @__PURE__ */ bt(void 0), Di = Tr.Provider;
function _t() {
  return pe(Tr);
}
function bn({
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
const Er = /* @__PURE__ */ bt(void 0), Mr = Er.Provider, Pr = /* @__PURE__ */ bt(void 0), Si = Pr.Provider;
function Or() {
  const e = pe(Er), t = pe(Pr);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Nr = /* @__PURE__ */ bt(void 0), Ri = Nr.Provider, Fr = /* @__PURE__ */ bt(void 0), Ii = Fr.Provider;
function Ti() {
  const e = pe(Nr), t = pe(Fr);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Be = "rdg-select-column";
function Ei(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Ti();
  return /* @__PURE__ */ y(bn, {
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
function Mi(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Or();
  return /* @__PURE__ */ y(bn, {
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
function Pi(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Or();
  return /* @__PURE__ */ y(bn, {
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
    return /* @__PURE__ */ y(Ei, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ y(Mi, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ y(Pi, {
      ...e
    });
  }
}, Oi = "auto", Ni = 50;
function Fi({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? Oi, s = (t == null ? void 0 : t.minWidth) ?? Ni, c = (t == null ? void 0 : t.maxWidth) ?? void 0, l = (t == null ? void 0 : t.renderCell) ?? ki, b = (t == null ? void 0 : t.sortable) ?? !1, h = (t == null ? void 0 : t.resizable) ?? !1, m = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: d,
    colSpanColumns: C,
    lastFrozenColumnIndex: u,
    headerRowsCount: g
  } = G(() => {
    let x = -1, S = 1;
    const F = [];
    E(e, 1);
    function E(Y, A, Z) {
      for (const _ of Y) {
        if ("children" in _) {
          const we = {
            name: _.name,
            parent: Z,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: _.headerCellClass
          };
          E(_.children, A + 1, we);
          continue;
        }
        const te = _.frozen ?? !1, Ce = {
          ..._,
          parent: Z,
          idx: 0,
          level: 0,
          frozen: te,
          width: _.width ?? a,
          minWidth: _.minWidth ?? s,
          maxWidth: _.maxWidth ?? c,
          sortable: _.sortable ?? b,
          resizable: _.resizable ?? h,
          draggable: _.draggable ?? m,
          renderCell: _.renderCell ?? l
        };
        F.push(Ce), te && x++, A > S && (S = A);
      }
    }
    F.sort(({
      key: Y,
      frozen: A
    }, {
      key: Z,
      frozen: _
    }) => Y === Be ? -1 : Z === Be ? 1 : A ? _ ? 0 : -1 : _ ? 1 : 0);
    const H = [];
    return F.forEach((Y, A) => {
      Y.idx = A, Hr(Y, A, 0), Y.colSpan != null && H.push(Y);
    }), {
      columns: F,
      colSpanColumns: H,
      lastFrozenColumnIndex: x,
      headerRowsCount: S
    };
  }, [e, a, s, c, l, h, b, m]), {
    templateColumns: D,
    layoutCssVars: v,
    totalFrozenColumnWidth: k,
    columnMetrics: I
  } = G(() => {
    const x = /* @__PURE__ */ new Map();
    let S = 0, F = 0;
    const E = [];
    for (const Y of d) {
      let A = n(Y);
      typeof A == "number" ? A = Rr(A, Y) : A = Y.minWidth, E.push(`${A}px`), x.set(Y, {
        width: A,
        left: S
      }), S += A;
    }
    if (u !== -1) {
      const Y = x.get(d[u]);
      F = Y.left + Y.width;
    }
    const H = {};
    for (let Y = 0; Y <= u; Y++) {
      const A = d[Y];
      H[`--rdg-frozen-left-${A.idx}`] = `${x.get(A).left}px`;
    }
    return {
      templateColumns: E,
      layoutCssVars: H,
      totalFrozenColumnWidth: F,
      columnMetrics: x
    };
  }, [n, d, u]), [N, W] = G(() => {
    if (!i)
      return [0, d.length - 1];
    const x = o + k, S = o + r, F = d.length - 1, E = wt(u + 1, F);
    if (x >= S)
      return [E, E];
    let H = E;
    for (; H < F; ) {
      const {
        left: _,
        width: te
      } = I.get(d[H]);
      if (_ + te > x)
        break;
      H++;
    }
    let Y = H;
    for (; Y < F; ) {
      const {
        left: _,
        width: te
      } = I.get(d[Y]);
      if (_ + te >= S)
        break;
      Y++;
    }
    const A = Wt(E, H - 1), Z = wt(F, Y + 1);
    return [A, Z];
  }, [I, d, u, o, k, r, i]);
  return {
    columns: d,
    colSpanColumns: C,
    colOverscanStartIdx: N,
    colOverscanEndIdx: W,
    templateColumns: D,
    layoutCssVars: v,
    headerRowsCount: g,
    lastFrozenColumnIndex: u,
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
const tt = typeof window > "u" ? _e : Uo;
function Hi(e, t, n, r, o, i, a, s, c, l) {
  const b = Se(o), h = e.length === t.length, m = h && o !== b.current, d = [...n], C = [];
  for (const {
    key: v,
    idx: k,
    width: I
  } of t)
    typeof I == "string" && (m || !a.has(v)) && !i.has(v) && (d[k] = I, C.push(v));
  const u = d.join(" ");
  tt(() => {
    b.current = o, g(C);
  });
  function g(v) {
    v.length !== 0 && c((k) => {
      const I = new Map(k);
      let N = !1;
      for (const W of v) {
        const x = Zn(r, W);
        N || (N = x !== k.get(W)), x === void 0 ? I.delete(W) : I.set(W, x);
      }
      return N ? I : k;
    });
  }
  function D(v, k) {
    const {
      key: I
    } = v, N = [...n], W = [];
    for (const {
      key: S,
      idx: F,
      width: E
    } of t)
      if (I === S) {
        const H = typeof k == "number" ? `${k}px` : k;
        N[F] = H;
      } else h && typeof E == "string" && !i.has(S) && (N[F] = E, W.push(S));
    r.current.style.gridTemplateColumns = N.join(" ");
    const x = typeof k == "number" ? k : Zn(r, I);
    Ht(() => {
      s((S) => {
        const F = new Map(S);
        return F.set(I, x), F;
      }), g(W);
    }), l == null || l(v.idx, x);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: D
  };
}
function Zn(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Li() {
  const e = Se(null), [t, n] = ne(1), [r, o] = ne(1), [i, a] = ne(0);
  return tt(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: l,
      offsetWidth: b,
      offsetHeight: h
    } = e.current, {
      width: m,
      height: d
    } = e.current.getBoundingClientRect(), C = h - l, u = m - b + c, g = d - C;
    n(u), o(g), a(C);
    const D = new s((v) => {
      const k = v[0].contentBoxSize[0], {
        clientHeight: I,
        offsetHeight: N
      } = e.current;
      Ht(() => {
        n(k.inlineSize), o(k.blockSize), a(N - I);
      });
    });
    return D.observe(e.current), () => {
      D.disconnect();
    };
  }, []), [e, t, r, i];
}
function de(e) {
  const t = Se(e);
  _e(() => {
    t.current = e;
  });
  const n = ee((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function xt(e) {
  const [t, n] = ne(!1);
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
function Wi({
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
  const b = G(() => {
    if (i === 0) return 0;
    let h = i;
    const m = (d, C) => C !== void 0 && d + C > i ? (h = d, !0) : !1;
    for (const d of t) {
      const C = d.idx;
      if (C >= h || m(C, me(d, s, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= l; u++) {
        const g = n[u];
        if (m(C, me(d, s, {
          type: "ROW",
          row: g
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (m(C, me(d, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (o != null) {
        for (const u of o)
          if (m(C, me(d, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
    }
    return h;
  }, [c, l, n, r, o, i, s, t]);
  return G(() => {
    const h = [];
    for (let m = 0; m <= a; m++) {
      const d = e[m];
      m < b && !d.frozen || h.push(d);
    }
    return h;
  }, [b, a, e]);
}
function zi({
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
        getRowTop: (g) => g * t,
        getRowHeight: () => t,
        findRowIdx: (g) => Vn(g / t)
      };
    let m = 0, d = " ";
    const C = e.map((g) => {
      const D = t(g), v = {
        top: m,
        height: D
      };
      return d += `${D}px `, m += D, v;
    }), u = (g) => Wt(0, wt(e.length - 1, g));
    return {
      totalRowHeight: m,
      gridTemplateRows: d,
      getRowTop: (g) => C[u(g)].top,
      getRowHeight: (g) => C[u(g)].height,
      findRowIdx(g) {
        let D = 0, v = C.length - 1;
        for (; D <= v; ) {
          const k = D + Vn((v - D) / 2), I = C[k].top;
          if (I === g) return k;
          if (I < g ? D = k + 1 : I > g && (v = k - 1), D > v) return v;
        }
        return 0;
      }
    };
  }, [t, e]);
  let b = 0, h = e.length - 1;
  if (o) {
    const d = l(r), C = l(r + n);
    b = Wt(0, d - 4), h = wt(e.length - 1, C + 4);
  }
  return {
    rowOverscanStartIdx: b,
    rowOverscanEndIdx: h,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: l
  };
}
const Ai = "c1w9bbhr7-0-0-beta-47", $i = "c1creorc7-0-0-beta-47", Yi = `rdg-cell-drag-handle ${Ai}`;
function _i({
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
  onFill: b,
  onClick: h,
  setDragging: m,
  setDraggedOverRowIdx: d
}) {
  const {
    idx: C,
    rowIdx: u
  } = a;
  function g(N) {
    if (N.preventDefault(), N.buttons !== 1) return;
    m(!0), window.addEventListener("mouseover", W), window.addEventListener("mouseup", x);
    function W(S) {
      S.buttons !== 1 && x();
    }
    function x() {
      window.removeEventListener("mouseover", W), window.removeEventListener("mouseup", x), m(!1), D();
    }
  }
  function D() {
    const N = s.current;
    if (N === void 0) return;
    const W = u < N ? u + 1 : N, x = u < N ? N + 1 : u;
    k(W, x), d(void 0);
  }
  function v(N) {
    N.stopPropagation(), k(u + 1, t.length);
  }
  function k(N, W) {
    const x = t[u], S = [...t], F = [];
    for (let E = N; E < W; E++)
      if (c({
        rowIdx: E,
        idx: C
      })) {
        const H = b({
          columnKey: n.key,
          sourceRow: x,
          targetRow: t[E]
        });
        H !== t[E] && (S[E] = H, F.push(E));
      }
    F.length > 0 && (l == null || l(S, {
      indexes: F,
      column: n
    }));
  }
  function I() {
    var E;
    const N = ((E = n.colSpan) == null ? void 0 : E.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: W,
      ...x
    } = nt(n, N), S = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", F = n.idx + N - 1 === o;
    return {
      ...x,
      gridRowStart: e,
      marginInlineEnd: F ? void 0 : S,
      marginBlockEnd: i ? void 0 : S,
      insetInlineStart: W ? `calc(${W} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ y("div", {
    style: I(),
    className: Ee(Yi, n.frozen && $i),
    onClick: h,
    onMouseDown: g,
    onDoubleClick: v
  });
}
const Bi = "cis5rrm7-0-0-beta-47";
function Ui({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: o,
  closeEditor: i,
  onKeyDown: a,
  navigate: s
}) {
  var D, v, k;
  const c = Se(void 0), l = ((D = e.editorOptions) == null ? void 0 : D.commitOnOutsideClick) !== !1, b = de(() => {
    d(!0, !1);
  });
  _e(() => {
    if (!l) return;
    function I() {
      c.current = requestAnimationFrame(b);
    }
    return addEventListener("mousedown", I, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", I, {
        capture: !0
      }), h();
    };
  }, [l, b]);
  function h() {
    cancelAnimationFrame(c.current);
  }
  function m(I) {
    if (a) {
      const N = ht(I);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(I);
        },
        onClose: d
      }, N), N.isGridDefaultPrevented()) return;
    }
    I.key === "Escape" ? d() : I.key === "Enter" ? d(!0) : ni(I) && s(I);
  }
  function d(I = !1, N = !0) {
    I ? o(n, !0, N) : i(N);
  }
  function C(I, N = !1) {
    o(I, N, N);
  }
  const {
    cellClass: u
  } = e, g = Ct(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((v = e.editorOptions) != null && v.displayCellContent) && Bi);
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: g,
    style: nt(e, t),
    onKeyDown: m,
    onMouseDownCapture: h,
    children: e.renderEditCell != null && /* @__PURE__ */ ie(wn, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: C,
        onClose: d
      }), ((k = e.editorOptions) == null ? void 0 : k.displayCellContent) && e.renderCell({
        column: e,
        row: n,
        rowIdx: r,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: C
      })]
    })
  });
}
function Gi({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: o,
    onFocus: i
  } = xt(n), {
    colSpan: a
  } = e, s = Ir(e, t), c = e.idx + 1;
  function l() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ y("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": n,
    tabIndex: o,
    className: Ee(Dr, e.headerCellClass),
    style: {
      ...Sr(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onClick: l,
    children: e.name
  });
}
const ji = "h44jtk67-0-0-beta-47", Ki = "hcgkhxz7-0-0-beta-47", qi = `rdg-header-sort-name ${Ki}`;
function Lr({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ y(Xi, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Xi({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = _t().renderSortStatus;
  return /* @__PURE__ */ ie("span", {
    className: ji,
    children: [/* @__PURE__ */ y("span", {
      className: qi,
      children: n
    }), /* @__PURE__ */ y("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Vi = "c6l2wv17-0-0-beta-47", Zi = "c1kqdw7y7-0-0-beta-47", Qi = `rdg-cell-resizable ${Zi}`, Ji = "r1y6ywlx7-0-0-beta-47", ea = "rdg-cell-draggable", ta = "c1bezg5o7-0-0-beta-47", na = `rdg-cell-dragging ${ta}`, ra = "c1vc96037-0-0-beta-47", oa = `rdg-cell-drag-over ${ra}`;
function ia({
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
  direction: b,
  dragDropKey: h
}) {
  const [m, d] = ne(!1), [C, u] = ne(!1), g = b === "rtl", D = Ir(e, n), {
    tabIndex: v,
    childTabIndex: k,
    onFocus: I
  } = xt(r), N = a == null ? void 0 : a.findIndex((p) => p.columnKey === e.key), W = N !== void 0 && N > -1 ? a[N] : void 0, x = W == null ? void 0 : W.direction, S = W !== void 0 && a.length > 1 ? N + 1 : void 0, F = x && !S ? x === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: E,
    resizable: H,
    draggable: Y
  } = e, A = Ct(e, e.headerCellClass, E && Vi, H && Qi, Y && ea, m && na, C && oa), Z = e.renderHeaderCell ?? Lr;
  function _(p) {
    if (p.pointerType === "mouse" && p.buttons !== 1)
      return;
    p.preventDefault();
    const {
      currentTarget: z,
      pointerId: U
    } = p, P = z.parentElement, {
      right: K,
      left: Q
    } = P.getBoundingClientRect(), se = g ? p.clientX - Q : K - p.clientX;
    let ce = !1;
    function ve(ye) {
      const {
        width: ue,
        right: rt,
        left: ze
      } = P.getBoundingClientRect();
      let Ue = g ? rt + se - ye.clientX : ye.clientX + se - ze;
      Ue = Rr(Ue, e), ue > 0 && Ue !== ue && o(e, Ue);
    }
    function ke() {
      ce = !0, o(e, "max-content");
    }
    function Ie(ye) {
      ce || ve(ye), z.removeEventListener("pointermove", ve), z.removeEventListener("dblclick", ke), z.removeEventListener("lostpointercapture", Ie);
    }
    z.setPointerCapture(U), z.addEventListener("pointermove", ve), z.addEventListener("dblclick", ke), z.addEventListener("lostpointercapture", Ie);
  }
  function te(p) {
    if (s == null) return;
    const {
      sortDescendingFirst: z
    } = e;
    if (W === void 0) {
      const U = {
        columnKey: e.key,
        direction: z ? "DESC" : "ASC"
      };
      s(a && p ? [...a, U] : [U]);
    } else {
      let U;
      if ((z === !0 && x === "DESC" || z !== !0 && x === "ASC") && (U = {
        columnKey: e.key,
        direction: x === "ASC" ? "DESC" : "ASC"
      }), p) {
        const P = [...a];
        U ? P[N] = U : P.splice(N, 1), s(P);
      } else
        s(U ? [U] : []);
    }
  }
  function Ce(p) {
    c({
      idx: e.idx,
      rowIdx: n
    }), E && te(p.ctrlKey || p.metaKey);
  }
  function we(p) {
    I == null || I(p), l && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Me(p) {
    (p.key === " " || p.key === "Enter") && (p.preventDefault(), te(p.ctrlKey || p.metaKey));
  }
  function We(p) {
    p.dataTransfer.setData(h, e.key), p.dataTransfer.dropEffect = "move", d(!0);
  }
  function ae() {
    d(!1);
  }
  function xe(p) {
    p.preventDefault(), p.dataTransfer.dropEffect = "move";
  }
  function Pe(p) {
    if (u(!1), p.dataTransfer.types.includes(h.toLowerCase())) {
      const z = p.dataTransfer.getData(h.toLowerCase());
      z !== e.key && (p.preventDefault(), i == null || i(z, e.key));
    }
  }
  function R(p) {
    Qn(p) && u(!0);
  }
  function M(p) {
    Qn(p) && u(!1);
  }
  let $;
  return Y && ($ = {
    draggable: !0,
    onDragStart: We,
    onDragEnd: ae,
    onDragOver: xe,
    onDragEnter: R,
    onDragLeave: M,
    onDrop: Pe
  }), /* @__PURE__ */ ie("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": D,
    "aria-selected": r,
    "aria-sort": F,
    tabIndex: l ? 0 : v,
    className: A,
    style: {
      ...Sr(e, n, D),
      ...nt(e, t)
    },
    onFocus: we,
    onClick: Ce,
    onKeyDown: E ? Me : void 0,
    ...$,
    children: [Z({
      column: e,
      sortDirection: x,
      priority: S,
      tabIndex: k
    }), H && /* @__PURE__ */ y("div", {
      className: Ji,
      onClick: Jo,
      onPointerDown: _
    })]
  });
}
function Qn(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const aa = "r1upfr807-0-0-beta-47", Cn = `rdg-row ${aa}`, sa = "r190mhd37-0-0-beta-47", Bt = "rdg-row-selected", ca = "r139qu9m7-0-0-beta-47", la = "rdg-top-summary-row", da = "rdg-bottom-summary-row", ua = "h10tskcx7-0-0-beta-47", Wr = `rdg-header-row ${ua}`;
function fa({
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
  direction: b
}) {
  const h = Go(), m = [];
  for (let d = 0; d < t.length; d++) {
    const C = t[d], u = me(C, a, {
      type: "HEADER"
    });
    u !== void 0 && (d += u - 1), m.push(/* @__PURE__ */ y(ia, {
      column: C,
      colSpan: u,
      rowIdx: e,
      isCellSelected: s === C.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: l && d === 0,
      direction: b,
      dragDropKey: h
    }, C.key));
  }
  return /* @__PURE__ */ y("div", {
    role: "row",
    "aria-rowindex": e,
    className: Ee(Wr, s === -1 && Bt),
    children: m
  });
}
const ha = /* @__PURE__ */ Le(fa);
function ga({
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
        i.push(/* @__PURE__ */ y(Gi, {
          column: c,
          rowIdx: e,
          isCellSelected: r === l,
          selectCell: o
        }, l));
      }
    }
  }
  return /* @__PURE__ */ y("div", {
    role: "row",
    "aria-rowindex": e,
    className: Wr,
    children: i
  });
}
const ma = /* @__PURE__ */ Le(ga), wa = "c6ra8a37-0-0-beta-47", ya = `rdg-cell-copied ${wa}`, pa = "cq910m07-0-0-beta-47", ba = `rdg-cell-dragged-over ${pa}`;
function Ca({
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
  onRowChange: b,
  selectCell: h,
  ...m
}) {
  const {
    tabIndex: d,
    childTabIndex: C,
    onFocus: u
  } = xt(n), {
    cellClass: g
  } = e, D = Ct(e, typeof g == "function" ? g(i) : g, r && ya, o && ba), v = kr(e, i);
  function k(S) {
    h({
      rowIdx: a,
      idx: e.idx
    }, S);
  }
  function I(S) {
    if (s) {
      const F = ht(S);
      if (s({
        row: i,
        column: e,
        selectCell: k
      }, F), F.isGridDefaultPrevented()) return;
    }
    k();
  }
  function N(S) {
    if (l) {
      const F = ht(S);
      if (l({
        row: i,
        column: e,
        selectCell: k
      }, F), F.isGridDefaultPrevented()) return;
    }
    k();
  }
  function W(S) {
    if (c) {
      const F = ht(S);
      if (c({
        row: i,
        column: e,
        selectCell: k
      }, F), F.isGridDefaultPrevented()) return;
    }
    k(!0);
  }
  function x(S) {
    b(e, S);
  }
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !v || void 0,
    tabIndex: d,
    className: D,
    style: nt(e, t),
    onClick: I,
    onDoubleClick: W,
    onContextMenu: N,
    onFocus: u,
    ...m,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: v,
      tabIndex: C,
      onRowChange: x
    })
  });
}
const xa = /* @__PURE__ */ Le(Ca);
function va({
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
  viewportColumns: b,
  selectedCellEditor: h,
  onCellClick: m,
  onCellDoubleClick: d,
  onCellContextMenu: C,
  rowClass: u,
  setDraggedOverRowIdx: g,
  onMouseEnter: D,
  onRowChange: v,
  selectCell: k,
  ...I
}, N) {
  const W = de((E, H) => {
    v(E, t, H);
  });
  function x(E) {
    g == null || g(t), D == null || D(E);
  }
  e = Ee(Cn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(l, t), e, r === -1 && Bt);
  const S = [];
  for (let E = 0; E < b.length; E++) {
    const H = b[E], {
      idx: Y
    } = H, A = me(H, c, {
      type: "ROW",
      row: l
    });
    A !== void 0 && (E += A - 1);
    const Z = r === Y;
    Z && h ? S.push(h) : S.push(/* @__PURE__ */ y(xa, {
      column: H,
      colSpan: A,
      row: l,
      rowIdx: t,
      isCopied: a === Y,
      isDraggedOver: s === Y,
      isCellSelected: Z,
      onClick: m,
      onDoubleClick: d,
      onContextMenu: C,
      onRowChange: W,
      selectCell: k
    }, H.key));
  }
  const F = G(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ y(Mr, {
    value: F,
    children: /* @__PURE__ */ y("div", {
      role: "row",
      ref: N,
      className: e,
      onMouseEnter: x,
      style: pn(n),
      ...I,
      children: S
    })
  });
}
const zr = /* @__PURE__ */ Le(/* @__PURE__ */ yn(va)), Wl = zr;
function Ar(e, t) {
  return /* @__PURE__ */ y(zr, {
    ...t
  }, e);
}
function ka({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const o = Se(null);
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
  }, [n, r]), /* @__PURE__ */ y("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Da = "a3ejtar7-0-0-beta-47", Sa = `rdg-sort-arrow ${Da}`;
function Ra({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ ie(wn, {
    children: [Ia({
      sortDirection: e
    }), Ta({
      priority: t
    })]
  });
}
function Ia({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ y("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Sa,
    "aria-hidden": !0,
    children: /* @__PURE__ */ y("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Ta({
  priority: e
}) {
  return e;
}
const Ea = "rnvodz57-0-0-beta-47", Ma = `rdg ${Ea}`, Pa = "vlqv91k7-0-0-beta-47", Oa = `rdg-viewport-dragging ${Pa}`, Na = "f1lsfrzw7-0-0-beta-47", Fa = "f1cte0lg7-0-0-beta-47", Ha = "s8wc6fl7-0-0-beta-47";
function La({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: o,
  selectCell: i
}) {
  var m;
  const {
    tabIndex: a,
    childTabIndex: s,
    onFocus: c
  } = xt(o), {
    summaryCellClass: l
  } = e, b = Ct(e, Ha, typeof l == "function" ? l(n) : l);
  function h() {
    i({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: b,
    style: nt(e, t),
    onClick: h,
    onFocus: c,
    children: (m = e.renderSummaryCell) == null ? void 0 : m.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
const Wa = /* @__PURE__ */ Le(La), za = "skuhp557-0-0-beta-47", Aa = "tf8l5ub7-0-0-beta-47", $a = `rdg-summary-row ${za}`;
function Ya({
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
  "aria-rowindex": b
}) {
  const h = [];
  for (let m = 0; m < r.length; m++) {
    const d = r[m], C = me(d, a, {
      type: "SUMMARY",
      row: n
    });
    C !== void 0 && (m += C - 1);
    const u = s === d.idx;
    h.push(/* @__PURE__ */ y(Wa, {
      column: d,
      colSpan: C,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: l
    }, d.key));
  }
  return /* @__PURE__ */ y("div", {
    role: "row",
    "aria-rowindex": b,
    className: Ee(Cn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, $a, c ? `${la} ${Aa}` : da, s === -1 && Bt),
    style: {
      ...pn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: h
  });
}
const Jn = /* @__PURE__ */ Le(Ya);
function _a(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i,
    rowKeyGetter: a,
    onRowsChange: s,
    rowHeight: c,
    headerRowHeight: l,
    summaryRowHeight: b,
    selectedRows: h,
    isRowSelectionDisabled: m,
    onSelectedRowsChange: d,
    sortColumns: C,
    onSortColumnsChange: u,
    defaultColumnOptions: g,
    onCellClick: D,
    onCellDoubleClick: v,
    onCellContextMenu: k,
    onCellKeyDown: I,
    onSelectedCellChange: N,
    onScroll: W,
    onColumnResize: x,
    onColumnsReorder: S,
    onFill: F,
    onCopy: E,
    onPaste: H,
    enableVirtualization: Y,
    renderers: A,
    className: Z,
    style: _,
    rowClass: te,
    direction: Ce,
    role: we,
    "aria-label": Me,
    "aria-labelledby": We,
    "aria-describedby": ae,
    "aria-rowcount": xe,
    "data-testid": Pe
  } = e, R = _t(), M = we ?? "grid", $ = c ?? 35, p = l ?? (typeof $ == "number" ? $ : 35), z = b ?? (typeof $ == "number" ? $ : 35), U = (A == null ? void 0 : A.renderRow) ?? (R == null ? void 0 : R.renderRow) ?? Ar, P = (A == null ? void 0 : A.renderSortStatus) ?? (R == null ? void 0 : R.renderSortStatus) ?? Ra, K = (A == null ? void 0 : A.renderCheckbox) ?? (R == null ? void 0 : R.renderCheckbox) ?? wi, Q = (A == null ? void 0 : A.noRowsFallback) ?? (R == null ? void 0 : R.noRowsFallback), se = Y ?? !0, ce = Ce ?? "ltr", [ve, ke] = ne(0), [Ie, ye] = ne(0), [ue, rt] = ne(() => /* @__PURE__ */ new Map()), [ze, Ue] = ne(() => /* @__PURE__ */ new Map()), [Ge, Sn] = ne(null), [Rn, ro] = ne(!1), [ot, oo] = ne(void 0), [Oe, In] = ne(null), Tn = ee((f) => ue.get(f.key) ?? ze.get(f.key) ?? f.width, [ze, ue]), [je, En, Mn, io] = Li(), {
    columns: re,
    colSpanColumns: Pn,
    lastFrozenColumnIndex: ge,
    headerRowsCount: Ae,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: On,
    templateColumns: so,
    layoutCssVars: co,
    totalFrozenColumnWidth: lo
  } = Fi({
    rawColumns: n,
    defaultColumnOptions: g,
    getColumnWidth: Tn,
    scrollLeft: Ie,
    viewportWidth: En,
    enableVirtualization: se
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Nn = it + Ke, qe = Ae + it, Ut = Ae - 1, fe = -qe, Dt = fe + Ut, $e = r.length + Ke - 1, [T, Xe] = ne(() => ({
    idx: -1,
    rowIdx: fe - 1,
    mode: "SELECT"
  })), Gt = Se(T), Fn = Se(ot), Hn = Se(-1), St = Se(null), Rt = Se(!1), jt = M === "treegrid", Kt = Ae * p, Ln = Nn * z, It = Mn - Kt - Ln, qt = h != null && d != null, Wn = ce === "rtl", uo = Wn ? "ArrowRight" : "ArrowLeft", zn = Wn ? "ArrowLeft" : "ArrowRight", An = xe ?? Ae + r.length + Nn, fo = G(() => ({
    renderCheckbox: K,
    renderSortStatus: P
  }), [K, P]), ho = G(() => {
    let f = !1, w = !1;
    if (a != null && h != null && h.size > 0) {
      for (const O of r)
        if (h.has(a(O)) ? f = !0 : w = !0, f && w) break;
    }
    return {
      isRowSelected: f && !w,
      isIndeterminate: f && w
    };
  }, [r, h, a]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: go,
    getRowTop: $n,
    getRowHeight: mo,
    findRowIdx: Yn
  } = zi({
    rows: r,
    rowHeight: $,
    clientHeight: It,
    scrollTop: ve,
    enableVirtualization: se
  }), Ne = Wi({
    columns: re,
    colSpanColumns: Pn,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: On,
    lastFrozenColumnIndex: ge,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: wo,
    handleColumnResize: yo
  } = Hi(re, Ne, so, je, En, ue, ze, rt, Ue, x), po = jt ? -1 : 0, Ve = re.length - 1, Vt = Jt(T), Tt = jn(T), bo = p + Xt + Ln + io, Co = de(yo), xo = de(S), vo = de(u), ko = de(D), Do = de(v), So = de(k), Ro = de(Eo), Io = de(Bn), To = de(Et), Zt = de(ct), _n = de(({
    idx: f,
    rowIdx: w
  }) => {
    ct({
      rowIdx: fe + w - 1,
      idx: f
    });
  });
  tt(() => {
    if (!Vt || nn(T, Gt.current)) {
      Gt.current = T;
      return;
    }
    Gt.current = T, T.idx === -1 && (St.current.focus({
      preventScroll: !0
    }), Ft(St.current));
  }), tt(() => {
    Rt.current && (Rt.current = !1, qn());
  }), Bo(t, () => ({
    element: je.current,
    scrollToCell({
      idx: f,
      rowIdx: w
    }) {
      const O = f !== void 0 && f > ge && f < re.length ? f : void 0, L = w !== void 0 && Ze(w) ? w : void 0;
      (O !== void 0 || L !== void 0) && In({
        idx: O,
        rowIdx: L
      });
    },
    selectCell: ct
  }));
  const Qt = ee((f) => {
    oo(f), Fn.current = f;
  }, []);
  function Eo(f) {
    if (!d) return;
    gt(a);
    const w = new Set(h);
    for (const O of r) {
      if ((m == null ? void 0 : m(O)) === !0) continue;
      const L = a(O);
      f.checked ? w.add(L) : w.delete(L);
    }
    d(w);
  }
  function Bn(f) {
    if (!d) return;
    gt(a);
    const {
      row: w,
      checked: O,
      isShiftClick: L
    } = f;
    if ((m == null ? void 0 : m(w)) === !0) return;
    const B = new Set(h), q = a(w), X = Hn.current, V = r.indexOf(w);
    if (Hn.current = V, O ? B.add(q) : B.delete(q), L && X !== -1 && X !== V && X < r.length) {
      const he = fi(V - X);
      for (let le = X + he; le !== V; le += he) {
        const De = r[le];
        (m == null ? void 0 : m(De)) !== !0 && (O ? B.add(a(De)) : B.delete(a(De)));
      }
    }
    d(B);
  }
  function Mo(f) {
    var V;
    const {
      idx: w,
      rowIdx: O,
      mode: L
    } = T;
    if (L === "EDIT") return;
    if (I && Ze(O)) {
      const he = r[O], le = ht(f);
      if (I({
        mode: "SELECT",
        row: he,
        column: re[w],
        rowIdx: O,
        selectCell: ct
      }, le), le.isGridDefaultPrevented()) return;
    }
    if (!(f.target instanceof Element)) return;
    const B = f.target.closest(".rdg-cell") !== null, q = jt && f.target === St.current;
    if (!B && !q) return;
    const {
      keyCode: X
    } = f;
    if (Tt && (H != null || E != null) && Lt(f)) {
      if (X === 67) {
        if (((V = window.getSelection()) == null ? void 0 : V.isCollapsed) === !1) return;
        Oo();
        return;
      }
      if (X === 86) {
        No();
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
        Fo(f);
        break;
    }
  }
  function Po(f) {
    const {
      scrollTop: w,
      scrollLeft: O
    } = f.currentTarget;
    Ht(() => {
      ke(w), ye(hi(O));
    }), W == null || W(f);
  }
  function Et(f, w, O) {
    if (typeof s != "function" || O === r[w]) return;
    const L = [...r];
    L[w] = O, s(L, {
      indexes: [w],
      column: f
    });
  }
  function Un() {
    T.mode === "EDIT" && Et(re[T.idx], T.rowIdx, T.row);
  }
  function Oo() {
    const {
      idx: f,
      rowIdx: w
    } = T, O = r[w], L = re[f].key;
    Sn({
      row: O,
      columnKey: L
    }), E == null || E({
      sourceRow: O,
      sourceColumnKey: L
    });
  }
  function No() {
    if (!H || !s || Ge === null || !Mt(T))
      return;
    const {
      idx: f,
      rowIdx: w
    } = T, O = re[f], L = r[w], B = H({
      sourceRow: Ge.row,
      sourceColumnKey: Ge.columnKey,
      targetRow: L,
      targetColumnKey: O.key
    });
    Et(O, w, B);
  }
  function Fo(f) {
    if (!Tt) return;
    const w = r[T.rowIdx], {
      key: O,
      shiftKey: L
    } = f;
    if (qt && L && O === " ") {
      gt(a);
      const B = a(w);
      Bn({
        row: w,
        checked: !h.has(B),
        isShiftClick: !1
      }), f.preventDefault();
      return;
    }
    Mt(T) && ti(f) && Xe(({
      idx: B,
      rowIdx: q
    }) => ({
      idx: B,
      rowIdx: q,
      mode: "EDIT",
      row: w,
      originalRow: w
    }));
  }
  function Gn(f) {
    return f >= po && f <= Ve;
  }
  function Ze(f) {
    return f >= 0 && f < r.length;
  }
  function Jt({
    idx: f,
    rowIdx: w
  }) {
    return w >= fe && w <= $e && Gn(f);
  }
  function Ho({
    idx: f,
    rowIdx: w
  }) {
    return Ze(w) && f >= 0 && f <= Ve;
  }
  function jn({
    idx: f,
    rowIdx: w
  }) {
    return Ze(w) && Gn(f);
  }
  function Mt(f) {
    return Ho(f) && ii({
      columns: re,
      rows: r,
      selectedPosition: f
    });
  }
  function ct(f, w) {
    if (!Jt(f)) return;
    Un();
    const O = r[f.rowIdx], L = nn(T, f);
    w && Mt(f) ? Xe({
      ...f,
      mode: "EDIT",
      row: O,
      originalRow: O
    }) : L ? Ft(er(je.current)) : (Rt.current = !0, Xe({
      ...f,
      mode: "SELECT"
    })), N && !L && N({
      rowIdx: f.rowIdx,
      row: O,
      column: re[f.idx]
    });
  }
  function Lo(f, w, O) {
    const {
      idx: L,
      rowIdx: B
    } = T, q = Vt && L === -1;
    switch (f) {
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
      case uo:
        return {
          idx: L - 1,
          rowIdx: B
        };
      case zn:
        return {
          idx: L + 1,
          rowIdx: B
        };
      case "Tab":
        return {
          idx: L + (O ? -1 : 1),
          rowIdx: B
        };
      case "Home":
        return q ? {
          idx: L,
          rowIdx: fe
        } : {
          idx: 0,
          rowIdx: w ? fe : B
        };
      case "End":
        return q ? {
          idx: L,
          rowIdx: $e
        } : {
          idx: Ve,
          rowIdx: w ? $e : B
        };
      case "PageUp": {
        if (T.rowIdx === fe) return T;
        const X = $n(B) + mo(B) - It;
        return {
          idx: L,
          rowIdx: X > 0 ? Yn(X) : 0
        };
      }
      case "PageDown": {
        if (T.rowIdx >= r.length) return T;
        const X = $n(B) + It;
        return {
          idx: L,
          rowIdx: X < Xt ? Yn(X) : r.length - 1
        };
      }
      default:
        return T;
    }
  }
  function Kn(f) {
    const {
      key: w,
      shiftKey: O
    } = f;
    let L = "NONE";
    if (w === "Tab") {
      if (ci({
        shiftKey: O,
        maxColIdx: Ve,
        minRowIdx: fe,
        maxRowIdx: $e,
        selectedPosition: T
      })) {
        Un();
        return;
      }
      L = "CHANGE_ROW";
    }
    f.preventDefault();
    const B = Lt(f), q = Lo(w, B, O);
    if (nn(T, q)) return;
    const X = si({
      moveUp: w === "ArrowUp",
      moveNext: w === zn || w === "Tab" && !O,
      columns: re,
      colSpanColumns: Pn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: fe,
      mainHeaderRowIdx: Dt,
      maxRowIdx: $e,
      lastFrozenColumnIndex: ge,
      cellNavigationMode: L,
      currentPosition: T,
      nextPosition: q,
      isCellWithinBounds: Jt
    });
    ct(X);
  }
  function Wo(f) {
    if (ot === void 0) return;
    const {
      rowIdx: w
    } = T;
    return (w < ot ? w < f && f <= ot : w > f && f >= ot) ? T.idx : void 0;
  }
  function qn() {
    const f = er(je.current);
    if (f === null) return;
    Ft(f), (f.querySelector('[tabindex="0"]') ?? f).focus({
      preventScroll: !0
    });
  }
  function zo() {
    if (F == null || T.mode === "EDIT" || !jn(T))
      return;
    const {
      idx: f,
      rowIdx: w
    } = T, O = re[f];
    if (O.renderEditCell == null || O.editable === !1)
      return;
    const L = Tn(O);
    return /* @__PURE__ */ y(_i, {
      gridRowStart: qe + w + 1,
      rows: r,
      column: O,
      columnWidth: L,
      maxColIdx: Ve,
      isLastRow: w === $e,
      selectedPosition: T,
      isCellEditable: Mt,
      latestDraggedOverRowIdx: Fn,
      onRowsChange: s,
      onClick: qn,
      onFill: F,
      setDragging: ro,
      setDraggedOverRowIdx: Qt
    });
  }
  function Ao(f) {
    if (T.rowIdx !== f || T.mode === "SELECT") return;
    const {
      idx: w,
      row: O
    } = T, L = re[w], B = me(L, ge, {
      type: "ROW",
      row: O
    }), q = (V) => {
      Rt.current = V, Xe(({
        idx: he,
        rowIdx: le
      }) => ({
        idx: he,
        rowIdx: le,
        mode: "SELECT"
      }));
    }, X = (V, he, le) => {
      he ? Ht(() => {
        Et(L, T.rowIdx, V), q(le);
      }) : Xe((De) => ({
        ...De,
        row: V
      }));
    };
    return r[T.rowIdx] !== T.originalRow && q(!1), /* @__PURE__ */ y(Ui, {
      column: L,
      colSpan: B,
      row: O,
      rowIdx: f,
      onRowChange: X,
      closeEditor: q,
      onKeyDown: I,
      navigate: Kn
    }, L.key);
  }
  function lt(f) {
    const w = T.idx === -1 ? void 0 : re[T.idx];
    return w !== void 0 && T.rowIdx === f && !Ne.includes(w) ? T.idx > On ? [...Ne, w] : [...Ne.slice(0, ge + 1), w, ...Ne.slice(ge + 1)] : Ne;
  }
  function $o() {
    const f = [], {
      idx: w,
      rowIdx: O
    } = T, L = Tt && O < at ? at - 1 : at, B = Tt && O > st ? st + 1 : st;
    for (let q = L; q <= B; q++) {
      const X = q === at - 1 || q === st + 1, V = X ? O : q;
      let he = Ne;
      const le = w === -1 ? void 0 : re[w];
      le !== void 0 && (X ? he = [le] : he = lt(V));
      const De = r[V], Yo = qe + V + 1;
      let en = V, tn = !1;
      typeof a == "function" && (en = a(De), tn = (h == null ? void 0 : h.has(en)) ?? !1), f.push(U(en, {
        "aria-rowindex": qe + V + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: V,
        row: De,
        viewportColumns: he,
        isRowSelectionDisabled: (m == null ? void 0 : m(De)) ?? !1,
        isRowSelected: tn,
        onCellClick: ko,
        onCellDoubleClick: Do,
        onCellContextMenu: So,
        rowClass: te,
        gridRowStart: Yo,
        copiedCellIdx: Ge !== null && Ge.row === De ? re.findIndex((_o) => _o.key === Ge.columnKey) : void 0,
        selectedCellIdx: O === V ? w : void 0,
        draggedOverCellIdx: Wo(V),
        setDraggedOverRowIdx: Rn ? Qt : void 0,
        lastFrozenColumnIndex: ge,
        onRowChange: To,
        selectCell: Zt,
        selectedCellEditor: Ao(V)
      }));
    }
    return f;
  }
  (T.idx > Ve || T.rowIdx > $e) && (Xe({
    idx: -1,
    rowIdx: fe - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Pt = `repeat(${Ae}, ${p}px)`;
  it > 0 && (Pt += ` repeat(${it}, ${z}px)`), r.length > 0 && (Pt += go), Ke > 0 && (Pt += ` repeat(${Ke}, ${z}px)`);
  const Xn = T.idx === -1 && T.rowIdx !== fe - 1;
  return /* @__PURE__ */ ie("div", {
    role: M,
    "aria-label": Me,
    "aria-labelledby": We,
    "aria-describedby": ae,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": re.length,
    "aria-rowcount": An,
    className: Ee(Ma, Z, Rn && Oa),
    style: {
      ..._,
      scrollPaddingInlineStart: T.idx > ge || (Oe == null ? void 0 : Oe.idx) !== void 0 ? `${lo}px` : void 0,
      scrollPaddingBlock: Ze(T.rowIdx) || (Oe == null ? void 0 : Oe.rowIdx) !== void 0 ? `${Kt + it * z}px ${Ke * z}px` : void 0,
      gridTemplateColumns: wo,
      gridTemplateRows: Pt,
      "--rdg-header-row-height": `${p}px`,
      "--rdg-scroll-height": `${bo}px`,
      ...co
    },
    dir: ce,
    ref: je,
    onScroll: Po,
    onKeyDown: Mo,
    "data-testid": Pe,
    children: [/* @__PURE__ */ ie(Di, {
      value: fo,
      children: [/* @__PURE__ */ y(Ii, {
        value: Ro,
        children: /* @__PURE__ */ ie(Ri, {
          value: ho,
          children: [Array.from({
            length: Ut
          }, (f, w) => /* @__PURE__ */ y(ma, {
            rowIdx: w + 1,
            level: -Ut + w,
            columns: lt(fe + w),
            selectedCellIdx: T.rowIdx === fe + w ? T.idx : void 0,
            selectCell: _n
          }, w)), /* @__PURE__ */ y(ha, {
            rowIdx: Ae,
            columns: lt(Dt),
            onColumnResize: Co,
            onColumnsReorder: xo,
            sortColumns: C,
            onSortColumnsChange: vo,
            lastFrozenColumnIndex: ge,
            selectedCellIdx: T.rowIdx === Dt ? T.idx : void 0,
            selectCell: _n,
            shouldFocusGrid: !Vt,
            direction: ce
          })]
        })
      }), r.length === 0 && Q ? Q : /* @__PURE__ */ ie(wn, {
        children: [o == null ? void 0 : o.map((f, w) => {
          const O = Ae + 1 + w, L = Dt + 1 + w, B = T.rowIdx === L, q = Kt + z * w;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": O,
            rowIdx: L,
            gridRowStart: O,
            row: f,
            top: q,
            bottom: void 0,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: ge,
            selectedCellIdx: B ? T.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, w);
        }), /* @__PURE__ */ y(Si, {
          value: Io,
          children: $o()
        }), i == null ? void 0 : i.map((f, w) => {
          const O = qe + r.length + w + 1, L = r.length + w, B = T.rowIdx === L, q = It > Xt ? Mn - z * (i.length - w) : void 0, X = q === void 0 ? z * (i.length - 1 - w) : void 0;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": An - Ke + w + 1,
            rowIdx: L,
            gridRowStart: O,
            row: f,
            top: q,
            bottom: X,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: ge,
            selectedCellIdx: B ? T.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, w);
        })]
      })]
    }), zo(), oi(Ne), jt && /* @__PURE__ */ y("div", {
      ref: St,
      tabIndex: Xn ? 0 : -1,
      className: Ee(Na, Xn && [sa, ge !== -1 && ca], !Ze(T.rowIdx) && Fa),
      style: {
        gridRowStart: T.rowIdx + qe + 1
      }
    }), Oe !== null && /* @__PURE__ */ y(ka, {
      scrollToPosition: Oe,
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
const $r = /* @__PURE__ */ yn(_a);
function Ba({
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
  var u;
  const {
    tabIndex: b,
    childTabIndex: h,
    onFocus: m
  } = xt(o);
  function d() {
    l(e);
  }
  const C = c && s === i.idx;
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: b,
    className: Ct(i),
    style: {
      ...nt(i),
      cursor: C ? "pointer" : "default"
    },
    onClick: C ? d : void 0,
    onFocus: m,
    children: (!c || C) && ((u = i.renderGroupCell) == null ? void 0 : u.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: h,
      toggleGroup: d
    }))
  }, i.key);
}
const Ua = /* @__PURE__ */ Le(Ba), Ga = "g1yxluv37-0-0-beta-47", ja = `rdg-group-row ${Ga}`;
function Ka({
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
  isRowSelectionDisabled: b,
  ...h
}) {
  const m = r[0].key === Be ? t.level + 1 : t.level;
  function d() {
    a({
      rowIdx: n,
      idx: -1
    });
  }
  const C = G(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: i
  }), [i]);
  return /* @__PURE__ */ y(Mr, {
    value: C,
    children: /* @__PURE__ */ y("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Ee(Cn, ja, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Bt),
      onClick: d,
      style: pn(s),
      ...h,
      children: r.map((u) => /* @__PURE__ */ y(Ua, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === u.idx,
        column: u,
        row: t,
        groupColumnIndex: m,
        toggleGroup: l,
        isGroupByColumn: c.includes(u.key)
      }, u.key))
    })
  });
}
const qa = /* @__PURE__ */ Le(Ka);
function Xa({
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
  rowGrouper: b,
  expandedGroupIds: h,
  onExpandedGroupIdsChange: m,
  ...d
}, C) {
  var ae, xe, Pe;
  const u = _t(), g = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? Ar, D = 1 + (((ae = d.topSummaryRows) == null ? void 0 : ae.length) ?? 0), v = d.direction === "rtl", k = v ? "ArrowRight" : "ArrowLeft", I = v ? "ArrowLeft" : "ArrowRight", N = de(Me), {
    columns: W,
    groupBy: x
  } = G(() => {
    const R = [...e].sort(({
      key: $
    }, {
      key: p
    }) => $ === Be ? -1 : p === Be ? 1 : l.includes($) ? l.includes(p) ? l.indexOf($) - l.indexOf(p) : -1 : l.includes(p) ? 1 : 0), M = [];
    for (const [$, p] of R.entries())
      l.includes(p.key) && (M.push(p.key), R[$] = {
        ...p,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: p.renderGroupCell ?? xi,
        editable: !1
      });
    return {
      columns: R,
      groupBy: M
    };
  }, [e, l]), [S, F] = G(() => {
    if (x.length === 0) return [void 0, t.length];
    const R = (M, [$, ...p], z) => {
      let U = 0;
      const P = {};
      for (const [K, Q] of Object.entries(b(M, $))) {
        const [se, ce] = p.length === 0 ? [Q, Q.length] : R(Q, p, z + U + 1);
        P[K] = {
          childRows: Q,
          childGroups: se,
          startRowIndex: z + U
        }, U += ce + 1;
      }
      return [P, U];
    };
    return R(t, x, 0);
  }, [x, b, t]), [E, H] = G(() => {
    const R = /* @__PURE__ */ new Set();
    if (!S) return [t, p];
    const M = [], $ = (z, U, P) => {
      if (Va(z)) {
        M.push(...z);
        return;
      }
      Object.keys(z).forEach((K, Q, se) => {
        const ce = U !== void 0 ? `${U}__${K}` : K, ve = h.has(ce), {
          childRows: ke,
          childGroups: Ie,
          startRowIndex: ye
        } = z[K], ue = {
          id: ce,
          parentId: U,
          groupKey: K,
          isExpanded: ve,
          childRows: ke,
          level: P,
          posInSet: Q,
          startRowIndex: ye,
          setSize: se.length
        };
        M.push(ue), R.add(ue), ve && $(Ie, ce, P + 1);
      });
    };
    return $(S, void 0, 0), [M, p];
    function p(z) {
      return R.has(z);
    }
  }, [h, S, t]), Y = G(() => typeof n == "function" ? (R) => H(R) ? n({
    type: "GROUP",
    row: R
  }) : n({
    type: "ROW",
    row: R
  }) : n, [H, n]), A = ee((R) => {
    const M = E.indexOf(R);
    for (let $ = M - 1; $ >= 0; $--) {
      const p = E[$];
      if (H(p) && (!H(R) || R.parentId === p.id))
        return [p, $];
    }
  }, [H, E]), Z = ee((R) => {
    if (H(R))
      return R.id;
    if (typeof r == "function")
      return r(R);
    const M = A(R);
    if (M !== void 0) {
      const {
        startRowIndex: $,
        childRows: p
      } = M[0], z = p.indexOf(R);
      return $ + z + 1;
    }
    return E.indexOf(R);
  }, [A, H, r, E]), _ = G(() => {
    if (a == null) return null;
    gt(r);
    const R = new Set(a);
    for (const M of E)
      H(M) && M.childRows.every((p) => a.has(r(p))) && R.add(M.id);
    return R;
  }, [H, r, a, E]);
  function te(R) {
    if (!s) return;
    gt(r);
    const M = new Set(a);
    for (const $ of E) {
      const p = Z($);
      if (_ != null && _.has(p) && !R.has(p))
        if (H($))
          for (const z of $.childRows)
            M.delete(r(z));
        else
          M.delete(p);
      else if (!(_ != null && _.has(p)) && R.has(p))
        if (H($))
          for (const z of $.childRows)
            M.add(r(z));
        else
          M.add(p);
    }
    s(M);
  }
  function Ce(R, M) {
    if (o == null || o(R, M), M.isGridDefaultPrevented() || R.mode === "EDIT") return;
    const {
      column: $,
      rowIdx: p,
      selectCell: z
    } = R, U = ($ == null ? void 0 : $.idx) ?? -1, P = E[p];
    if (H(P)) {
      if (U === -1 && (M.key === k && P.isExpanded || M.key === I && !P.isExpanded) && (M.preventDefault(), M.preventGridDefault(), Me(P.id)), U === -1 && M.key === k && !P.isExpanded && P.level !== 0) {
        const K = A(P);
        K !== void 0 && (M.preventGridDefault(), z({
          idx: U,
          rowIdx: K[1]
        }));
      }
      Lt(M) && (M.keyCode === 67 || M.keyCode === 86) && M.preventGridDefault();
    }
  }
  function we(R, {
    indexes: M,
    column: $
  }) {
    if (!i) return;
    const p = [...t], z = [];
    for (const U of M) {
      const P = t.indexOf(E[U]);
      p[P] = R[U], z.push(P);
    }
    i(p, {
      indexes: z,
      column: $
    });
  }
  function Me(R) {
    const M = new Set(h);
    M.has(R) ? M.delete(R) : M.add(R), m(M);
  }
  function We(R, {
    row: M,
    rowClass: $,
    onCellClick: p,
    onCellDoubleClick: z,
    onCellContextMenu: U,
    onRowChange: P,
    lastFrozenColumnIndex: K,
    copiedCellIdx: Q,
    draggedOverCellIdx: se,
    setDraggedOverRowIdx: ce,
    selectedCellEditor: ve,
    ...ke
  }) {
    if (H(M)) {
      const {
        startRowIndex: ue
      } = M;
      return /* @__PURE__ */ y(qa, {
        ...ke,
        "aria-rowindex": D + ue + 1,
        row: M,
        groupBy: x,
        toggleGroup: N
      }, R);
    }
    let Ie = ke["aria-rowindex"];
    const ye = A(M);
    if (ye !== void 0) {
      const {
        startRowIndex: ue,
        childRows: rt
      } = ye[0], ze = rt.indexOf(M);
      Ie = ue + D + ze + 2;
    }
    return g(R, {
      ...ke,
      "aria-rowindex": Ie,
      row: M,
      rowClass: $,
      onCellClick: p,
      onCellDoubleClick: z,
      onCellContextMenu: U,
      onRowChange: P,
      lastFrozenColumnIndex: K,
      copiedCellIdx: Q,
      draggedOverCellIdx: se,
      setDraggedOverRowIdx: ce,
      selectedCellEditor: ve
    });
  }
  return /* @__PURE__ */ y($r, {
    ...d,
    role: "treegrid",
    "aria-rowcount": F + 1 + (((xe = d.topSummaryRows) == null ? void 0 : xe.length) ?? 0) + (((Pe = d.bottomSummaryRows) == null ? void 0 : Pe.length) ?? 0),
    ref: C,
    columns: W,
    rows: E,
    rowHeight: Y,
    rowKeyGetter: Z,
    onRowsChange: we,
    selectedRows: _,
    onSelectedRowsChange: te,
    onCellKeyDown: Ce,
    renderers: {
      ...c,
      renderRow: We
    }
  });
}
function Va(e) {
  return Array.isArray(e);
}
const zl = /* @__PURE__ */ yn(Xa), Za = "t7vyx3i7-0-0-beta-47", Qa = `rdg-text-editor ${Za}`;
function Ja(e) {
  e == null || e.focus(), e == null || e.select();
}
function Al({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ y("input", {
    className: Qa,
    ref: Ja,
    value: e[t.key],
    onChange: (o) => n({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const J = {
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
}, es = {
  "--rdg-color": J.gray800,
  "--rdg-header-color": J.gray700,
  "--rdg-border-color": J.gray400,
  "--rdg-background-color": J.forcewhite,
  "--rdg-header-background-color": J.forcewhite,
  "--rdg-row-hover-background-color": J.forcewhite,
  "--rdg-row-selected-hover-background-color": J.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": J.primary400,
  "--rdg-expanded-accent-color": J.primary400,
  "--rdg-row-selected-color": J.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": J.primary500,
  "--rdg-scrollbar-track-background": J.gray100,
  "--rdg--scrollbar-thumb-hover-background": J.primary500,
  "--rdg--scrollbar-track-hover-background": J.gray200
}, ts = Re.div`
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
`, vt = Te.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1,
  chooserAnchor: null,
  setChooserAnchor: () => {
  }
}), ns = "data-grid-hidden-column-visibility", rs = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = ns,
  onHiddenColumnsChange: a
}) => {
  const [s, c] = Te.useState(0), [l, b] = Te.useState(
    null
  ), [h, m] = Te.useState([]), d = ee(
    (v) => {
      localStorage.setItem(i, JSON.stringify(v)), c((k) => k + 1), m(v);
    },
    [i]
  ), C = JSON.stringify(r ?? []), u = G(
    () => JSON.parse(C),
    [C]
  );
  _e(() => {
    const v = localStorage.getItem(i);
    if (v) {
      const k = JSON.parse(v);
      d(Array.isArray(k) ? k : []);
    } else
      d(u);
  }, [i, u, d]);
  const g = ee(
    (v) => {
      d(v), a == null || a(v);
    },
    [d, a]
  ), D = G(
    () => e.filter((v) => !(n != null && n.includes(v.key))),
    [e, n]
  );
  return /* @__PURE__ */ y(
    vt.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        chooserAnchor: l,
        setChooserAnchor: b,
        columns: D,
        hiddenColumn: h,
        setHiddenColumn: g,
        enabled: o
      },
      children: t
    }
  );
}, xn = Re(qo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${J.primary500};
    }
`, os = Re(Ko)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, $l = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = pe(vt), n = Te.useRef(null), r = ee(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ y("div", { ref: n, children: /* @__PURE__ */ y(e, { onClick: r }) });
}, is = () => {
  const { columns: e, hiddenColumn: t, setHiddenColumn: n, chooserAnchor: r, setChooserAnchor: o } = pe(vt), i = ee(() => {
    o(null);
  }, [o]), a = ee(
    (s) => () => {
      const c = t.indexOf(s);
      n(
        c === -1 ? [...t, s] : t.filter((l) => l !== s)
      );
    },
    [t, n]
  );
  return /* @__PURE__ */ y(
    jo,
    {
      id: "column-visibility-menu",
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      transformOrigin: { vertical: "top", horizontal: "right" },
      open: r !== null,
      onClose: i,
      children: e.map((s) => /* @__PURE__ */ ie(os, { onClick: a(s.key), children: [
        /* @__PURE__ */ y(xn, { checked: !t.includes(s.key) }),
        s.name
      ] }, s.key))
    }
  );
};
var et = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(et || {}), yt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(yt || {});
function as(e, t, n, r) {
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
const ss = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, o] = ne(n ?? []), i = G(() => r.length === 0 ? t : [...t].sort((s, c) => {
    for (const l of r) {
      const b = e.find((d) => d.key === l.columnKey), m = as(
        l.columnKey,
        b == null ? void 0 : b.type,
        b == null ? void 0 : b.sortComparator,
        b == null ? void 0 : b.getColumnValue
      )(s, c);
      if (m !== 0)
        return l.direction === "ASC" ? m : -m;
    }
    return 0;
  }), [t, r]), a = ee((s) => {
    s.length !== 0 ? o(s) : o((c) => c.length === 1 ? [
      {
        columnKey: c[0].columnKey,
        direction: c[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : c);
  }, []);
  return {
    sortedRows: i,
    sortColumns: r,
    setSortedColumns: a
  };
}, mt = 40, cs = 200, ls = "rdg-row-expanded", ds = "rdg-detail-row", Yr = "__rdgDetailParent", us = (e) => ({ id: `rdg-detail:${e.id}`, [Yr]: e }), vn = (e) => e[Yr], zt = (e) => vn(e) !== void 0, fs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, us(r)] : [r]);
}, hs = Re.button`
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
`, gs = () => /* @__PURE__ */ y("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ y("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), _r = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ y(
    hs,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), Br(t, e.id);
      },
      children: /* @__PURE__ */ y(gs, {})
    }
  );
}, Br = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, ms = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', Ur = (e, t, n, r = []) => zt(e) || t === ys || t === Gr || r.includes(t) ? !1 : !(n instanceof Element && n.closest(ms)), Yl = (e, t, n) => Ur(e, t, n), tr = Re.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, ws = Re.span`
    display: inline-block;
    flex: 0 0 ${mt - 16}px;
`, ys = Be, Gr = "rdg-expander-column", ps = (e) => ({
  key: Gr,
  name: "",
  frozen: !0,
  width: mt,
  minWidth: mt,
  maxWidth: mt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ y(_r, { row: t, expandable: e })
}), bs = (e, t) => {
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
      return zt(s.row) ? null : (c = a.renderCell) == null ? void 0 : c.call(a, s);
    }
  } : {
    ...a,
    colSpan: (s) => {
      var c;
      return s.type === "ROW" && zt(s.row) ? i : (c = a.colSpan) == null ? void 0 : c.call(a, s);
    },
    renderCell: (s) => {
      var l;
      const c = vn(s.row);
      return c ? t(c) : ((l = a.renderCell) == null ? void 0 : l.call(a, s)) ?? null;
    }
  });
}, Cs = (e, t, n) => (r) => {
  const o = vn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, xs = (e, t = []) => zt(e) ? ds : t.includes(e.id) ? ls : "", jr = Re(Vo)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${J.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${J.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${J.gray800};
  }

  fieldset {
    display: none;
  }

}
`, kn = Te.createContext({
  filters: {},
  setFilters: () => {
  }
}), vs = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Te.useState({});
  return /* @__PURE__ */ y(
    kn.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, rn = (e) => e.stopPropagation(), ks = ({ options: e, renderInput: t, ...n }) => {
  const r = G(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ y(
    Zo,
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
      renderInput: t || ((o) => /* @__PURE__ */ y(
        jr,
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
}, Ds = Re(Xo)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Nt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ ie(Ds, { children: [
  Lr(t),
  e
] }), Ss = (e) => (t) => {
  const { filters: n, setFilters: r } = pe(kn), o = G(() => n[e.key], [n, e]), i = ee(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ y(on, { ...t, children: /* @__PURE__ */ y(
    ks,
    {
      options: e.filterOptions ?? [],
      onChange: i,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ y(on, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (a) => i(a.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: Nt,
    onKeyDown: Nt
  }) : /* @__PURE__ */ y(
    jr,
    {
      autoComplete: "off",
      onClick: Nt,
      onKeyDown: Nt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ y(on, { ...t });
}, Rs = {
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
}, Is = (e, t, n) => {
  let r;
  const o = Rs[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function an(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ts = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Es = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ms = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ps = {
  date: an({
    formats: Ts,
    defaultWidth: "full"
  }),
  time: an({
    formats: Es,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Ms,
    defaultWidth: "full"
  })
}, Os = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ns = (e, t, n, r) => Os[e];
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
const Fs = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Hs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ls = {
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
}, zs = {
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
}, As = {
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
}, Ys = {
  ordinalNumber: $s,
  era: ut({
    values: Fs,
    defaultWidth: "wide"
  }),
  quarter: ut({
    values: Hs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ut({
    values: Ls,
    defaultWidth: "wide"
  }),
  day: ut({
    values: Ws,
    defaultWidth: "wide"
  }),
  dayPeriod: ut({
    values: zs,
    defaultWidth: "wide",
    formattingValues: As,
    defaultFormattingWidth: "wide"
  })
};
function ft(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Bs(s, (h) => h.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      _s(s, (h) => h.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const b = t.slice(a.length);
    return { value: l, rest: b };
  };
}
function _s(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Bs(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Us(e) {
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
const Gs = /^(\d+)(th|st|nd|rd)?/i, js = /\d+/i, Ks = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, qs = {
  any: [/^b/i, /^(a|c)/i]
}, Xs = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Vs = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Qs = {
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
}, Js = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ec = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, tc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, nc = {
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
}, rc = {
  ordinalNumber: Us({
    matchPattern: Gs,
    parsePattern: js,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ft({
    matchPatterns: Ks,
    defaultMatchWidth: "wide",
    parsePatterns: qs,
    defaultParseWidth: "any"
  }),
  quarter: ft({
    matchPatterns: Xs,
    defaultMatchWidth: "wide",
    parsePatterns: Vs,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ft({
    matchPatterns: Zs,
    defaultMatchWidth: "wide",
    parsePatterns: Qs,
    defaultParseWidth: "any"
  }),
  day: ft({
    matchPatterns: Js,
    defaultMatchWidth: "wide",
    parsePatterns: ec,
    defaultParseWidth: "any"
  }),
  dayPeriod: ft({
    matchPatterns: tc,
    defaultMatchWidth: "any",
    parsePatterns: nc,
    defaultParseWidth: "any"
  })
}, oc = {
  code: "en-US",
  formatDistance: Is,
  formatLong: Ps,
  formatRelative: Ns,
  localize: Ys,
  match: rc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let ic = {};
function kt() {
  return ic;
}
const Kr = 6048e5, ac = 864e5, nr = Symbol.for("constructDateFrom");
function He(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && nr in e ? e[nr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function be(e, t) {
  return He(t || e, e);
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
function sc(e, ...t) {
  const n = He.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function or(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function cc(e, t, n) {
  const [r, o] = sc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = or(r), a = or(o), s = +i - rr(i), c = +a - rr(a);
  return Math.round((s - c) / ac);
}
function lc(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function dc(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return cc(n, lc(n)) + 1;
}
function pt(e, t) {
  var s, c, l, b;
  const n = kt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((b = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : b.weekStartsOn) ?? 0, o = be(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function At(e, t) {
  return pt(e, { ...t, weekStartsOn: 1 });
}
function qr(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = He(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = At(o), a = He(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = At(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function uc(e, t) {
  const n = qr(e, t), r = He(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), At(r);
}
function fc(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = +At(n) - +uc(n);
  return Math.round(r / Kr) + 1;
}
function Xr(e, t) {
  var b, h, m, d;
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = kt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (b = t == null ? void 0 : t.locale) == null ? void 0 : b.options) == null ? void 0 : h.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((d = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = He((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = pt(a, t), c = He((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const l = pt(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function hc(e, t) {
  var s, c, l, b;
  const n = kt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((b = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, o = Xr(e, t), i = He((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), pt(i, t);
}
function gc(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = +pt(n, t) - +hc(n, t);
  return Math.round(r / Kr) + 1;
}
function j(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Fe = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return j(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : j(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return j(e.getDate(), t.length);
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
    return j(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return j(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return j(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return j(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return j(o, t.length);
  }
}, Qe = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ir = {
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
    const o = Xr(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return j(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : j(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = qr(e);
    return j(n, t.length);
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
    return j(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return j(r, 2);
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
        return j(r, 2);
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
        return j(r + 1, 2);
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
    const o = gc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : j(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = fc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : j(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Fe.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = dc(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : j(r, t.length);
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
        return j(i, 2);
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
        return j(i, t.length);
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
        return j(o, t.length);
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : j(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : j(r, t.length);
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
        return sr(r);
      case "XXXX":
      case "XX":
        return Ye(r);
      case "XXXXX":
      case "XXX":
      default:
        return Ye(r, ":");
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
        return Ye(r);
      case "xxxxx":
      case "xxx":
      default:
        return Ye(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ar(r, ":");
      case "OOOO":
      default:
        return "GMT" + Ye(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ar(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ye(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return j(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return j(+e, t.length);
  }
};
function ar(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + j(i, 2);
}
function sr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + j(Math.abs(e) / 60, 2) : Ye(e, t);
}
function Ye(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = j(Math.trunc(r / 60), 2), i = j(r % 60, 2);
  return n + o + t + i;
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
}, Vr = (e, t) => {
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
}, mc = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return cr(e, t);
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
  return i.replace("{{date}}", cr(r, t)).replace("{{time}}", Vr(o, t));
}, wc = {
  p: Vr,
  P: mc
}, yc = /^D+$/, pc = /^Y+$/, bc = ["D", "DD", "YY", "YYYY"];
function Cc(e) {
  return yc.test(e);
}
function xc(e) {
  return pc.test(e);
}
function vc(e, t, n) {
  const r = kc(e, t, n);
  if (console.warn(r), bc.includes(e)) throw new RangeError(r);
}
function kc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Zr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Qr(e) {
  return !(!Zr(e) && typeof e != "number" || isNaN(+be(e)));
}
const Dc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Rc = /^'([^]*?)'?$/, Ic = /''/g, Tc = /[a-zA-Z]/;
function Ec(e, t, n) {
  var b, h, m, d, C, u, g, D;
  const r = kt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? oc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (C = n == null ? void 0 : n.locale) == null ? void 0 : C.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((D = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : D.weekStartsOn) ?? 0, s = be(e, n == null ? void 0 : n.in);
  if (!Qr(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Sc).map((v) => {
    const k = v[0];
    if (k === "p" || k === "P") {
      const I = wc[k];
      return I(v, o.formatLong);
    }
    return v;
  }).join("").match(Dc).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const k = v[0];
    if (k === "'")
      return { isToken: !1, value: Mc(v) };
    if (ir[k])
      return { isToken: !0, value: v };
    if (k.match(Tc))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && xc(k) || !(n != null && n.useAdditionalDayOfYearTokens) && Cc(k)) && vc(k, t, String(e));
    const I = ir[k[0]];
    return I(s, k, o.localize, l);
  }).join("");
}
function Mc(e) {
  const t = e.match(Rc);
  return t ? t[1].replace(Ic, "'") : e;
}
function Pc() {
  return Object.assign({}, kt());
}
function lr(e, t, n) {
  const r = Pc(), o = Fc(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Oc(o, t) : Nc(o, t);
}
function Oc(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Nc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function Fc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Hc(e, t) {
  const n = $c(t);
  return "formatToParts" in n ? Wc(n, e) : zc(n, e);
}
const Lc = {
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
      const i = Lc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function zc(e, t) {
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
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Ac = dr === "06/25/2014, 00:00:00" || dr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function $c(e) {
  return sn[e] || (sn[e] = Ac ? new Intl.DateTimeFormat("en-US", {
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
function Jr(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const ur = 36e5, Yc = 6e4, cn = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Dn(e, t, n) {
  if (!e)
    return 0;
  let r = cn.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, i;
  if (r = cn.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), fr(o) ? -(o * ur) : NaN;
  if (r = cn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return fr(o, a) ? (i = Math.abs(o) * ur + a * Yc, r[1] === "+" ? -i : i) : NaN;
  }
  if (Uc(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : _c(t), s = mn(a, e);
    return -(n ? s : Bc(t, s, e));
  }
  return NaN;
}
function _c(e) {
  return Jr(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function mn(e, t) {
  const n = Hc(e, t), r = Jr(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function Bc(e, t, n) {
  let o = e.getTime() - t;
  const i = mn(new Date(o), n);
  if (t === i)
    return t;
  o -= i - t;
  const a = mn(new Date(o), n);
  return i === a ? i : Math.max(i, a);
}
function fr(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const hr = {};
function Uc(e) {
  if (hr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), hr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Gc = 60 * 1e3, jc = {
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
        return "GMT" + Kc(r, ":");
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
  const n = e ? Dn(e, t, !0) / Gc : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = $t(Math.floor(r / 60), 2), i = $t(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function gr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + $t(Math.abs(e) / 60, 2) : Je(e, t);
}
function Kc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + $t(i, 2);
}
function mr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const qc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, wr = 6e4, Xc = 2, oe = {
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
  timeZone: qc
};
function eo(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? Xc : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = Vc(e), { year: o, restDateString: i } = Zc(r.date, n), a = Qc(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let c = 0, l;
    if (r.time && (c = Jc(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (l = Dn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = mr(new Date(s + c)), l = mr(new Date(s + c + l));
    return new Date(s + c + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Vc(e) {
  const t = {};
  let n = oe.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = oe.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = oe.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Zc(e, t) {
  if (e) {
    const n = oe.YYY[t], r = oe.YYYYY[t];
    let o = oe.YYYY.exec(e) || r.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = oe.YY.exec(e) || n.exec(e), o) {
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
function Qc(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let i = oe.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, pr(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = oe.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return nl(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = oe.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return pr(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = oe.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, br(o) ? yr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = oe.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return br(o, a) ? yr(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Jc(e) {
  let t, n, r = oe.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), un(t) ? t % 24 * dn : NaN;
  if (r = oe.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), un(t, n) ? t % 24 * dn + n * wr : NaN;
  if (r = oe.HHMMSS.exec(e), r) {
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
  const o = r.getUTCDay() || 7, i = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
const el = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], tl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function to(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function pr(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = to(e);
    if (r && n > tl[t] || !r && n > el[t])
      return !1;
  }
  return !0;
}
function nl(e, t) {
  if (t < 1)
    return !1;
  const n = to(e);
  return !(n && t > 366 || !n && t > 365);
}
function br(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function un(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const rl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function ol(e, t, n = {}) {
  t = String(t);
  const r = t.match(rl);
  if (r) {
    const o = eo(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", l = i.replace(a, "'" + jc[a[0]](o, a, n) + "'");
      return c ? l.substring(0, s - 1) + l.substring(s + 1) : l;
    }, t);
  }
  return Ec(e, t, n);
}
function il(e, t, n) {
  e = eo(e, n);
  const r = Dn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function al(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, ol(il(e, t, { timeZone: r.timeZone }), n, r);
}
var no = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(no || {});
const sl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !Zr(e) && typeof e == "string" ? new Date(e) : e;
  return Qr(r) ? al(e, n, t) : "--";
}, Cr = (e) => e.trim().toLowerCase(), fn = "rdg-cell-frozen-right", hn = (...e) => e.filter(Boolean).join(" "), cl = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: c, hiddenColumn: l } = pe(vt), b = ee((h) => {
    const m = () => {
      if (h.renderCell)
        return h.renderCell;
      if (h.type === et.DATE)
        return ({ row: u }) => {
          var g, D;
          return sl(
            u[h.key],
            ((g = h.dateOptions) == null ? void 0 : g.formatDate) ?? no.DATE_WITH_TIME,
            (D = h.dateOptions) == null ? void 0 : D.timeZone
          );
        };
    }, d = () => h.renderHeaderCell ? h.renderHeaderCell : Ss(h), C = {
      ...h,
      renderCell: m(),
      renderHeaderCell: d()
    };
    return h.frozenRight && (C.frozen = !1, C.cellClass = typeof h.cellClass == "function" ? (u) => hn(
      fn,
      h.cellClass(u)
    ) : hn(fn, h.cellClass), C.headerCellClass = hn(fn, h.headerCellClass)), C;
  }, []);
  return G(() => {
    const h = [];
    if (t && !n && h.push(ps(t)), n) {
      const m = (r ?? []).map((g) => g.id), d = m.length > 0 && m.every((g) => o == null ? void 0 : o.includes(g)), C = (g) => {
        const D = (o ?? []).filter((v) => !m.includes(v));
        return g ? [...D, ...m] : D;
      }, u = t ? 50 + mt : 50;
      h.push({
        ...dt,
        width: u,
        minWidth: u,
        maxWidth: u,
        // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
        // "select all" would mean "select this page". Driven from `selectableRows` instead —
        // every row the grid holds, which under server pagination is still one page.
        //
        // Rendered through the same checkbox renderer as the body cells: a consumer that
        // supplies one gets it in the header too, rather than in every place but this one.
        renderHeaderCell: () => /* @__PURE__ */ ie(tr, { children: [
          t && /* @__PURE__ */ y(ws, { "aria-hidden": !0 }),
          a ? a({
            checked: d,
            "aria-label": s,
            onChange: (g) => i == null ? void 0 : i(C(g))
          }) : /* @__PURE__ */ y(
            xn,
            {
              checked: d,
              slotProps: { input: { "aria-label": s } },
              onChange: (g, D) => i == null ? void 0 : i(C(D))
            }
          )
        ] }),
        renderCell: t ? (g) => {
          var D;
          return /* @__PURE__ */ ie(tr, { children: [
            /* @__PURE__ */ y(_r, { row: g.row, expandable: t }),
            (D = dt.renderCell) == null ? void 0 : D.call(dt, g)
          ] });
        } : dt.renderCell
      });
    }
    return h.push(...e.map((m) => b(m))), c && l ? h.filter((m) => !l.includes(m.key)) : h;
  }, [
    e,
    t,
    b,
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
var ll = {
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
function dl(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return ll[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function gn(e) {
  var t = dl(e);
  return "".concat(t.value).concat(t.unit);
}
var ul = function(e, t, n) {
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
}, Yt = function() {
  return Yt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Yt.apply(this, arguments);
}, fl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, hl = ul("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function gl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, l = e.size, b = l === void 0 ? 15 : l, h = e.margin, m = h === void 0 ? 2 : h, d = fl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), C = Yt({ display: "inherit" }, c), u = function(g) {
    return {
      backgroundColor: o,
      width: gn(b),
      height: gn(b),
      margin: gn(m),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(hl, " ").concat(0.75 / a, "s ").concat(g * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Ot.createElement(
    "span",
    Yt({ style: C }, d),
    Ot.createElement("span", { style: u(1) }),
    Ot.createElement("span", { style: u(2) }),
    Ot.createElement("span", { style: u(3) })
  ) : null;
}
const ml = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === yt.TEXT && typeof n == "string" && typeof r == "string" ? Cr(n).includes(Cr(r)) : t === yt.AUTOCOMPLETE ? n === r : !1, wl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = pe(kn);
  return G(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((c) => c.key === i);
      return s ? ml({
        comparator: s.filterComparator,
        filterType: s.filterType ?? yt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, yl = Re.div`
    height: 80px;
    width: 100%;
`, pl = Te.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: o, labels: i }) => {
    const a = ee(
      (c, l) => {
        t(l);
      },
      []
    ), s = ee(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ y(yl, { children: /* @__PURE__ */ y(
      Qo,
      {
        labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ y("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
        labelDisplayedRows: ({ from: c, to: l, count: b }) => `${c}-${l} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${b}`,
        component: "div",
        count: o,
        page: e,
        onPageChange: a,
        rowsPerPage: r,
        onRowsPerPageChange: s
      }
    ) });
  }
);
var bl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(bl || {});
const Cl = (e = 10) => {
  const [t, n] = ne(0), [r, o] = ne(e), i = ee(() => {
    n(0), o(e);
  }, []);
  return _e(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: o,
    resetPagination: i
  };
}, xr = 50, xl = Re.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${J.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, vl = Te.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = ee(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ y(
      xn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), kl = (e) => /* @__PURE__ */ y(vl, { ...e }), Dl = "Select all rows", Sl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  selectedRows: s,
  onSelectedRowsChange: c,
  selectAllLabel: l = Dl,
  noDataMessage: b,
  filters: h,
  setFilters: m,
  pagination: d,
  renderers: C,
  expandable: u,
  rowGestures: g,
  rowHeight: D,
  rowClass: v,
  onCellClick: k,
  ...I
}) => {
  var U;
  const { gridKey: N } = pe(vt), { pageSize: W, currentPage: x, setCurrentPage: S, setPageSize: F } = Cl(
    d == null ? void 0 : d.defaultPageSize
  ), E = (C == null ? void 0 : C.renderCheckbox) ?? kl, H = cl({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c,
    renderCheckbox: E,
    selectAllLabel: l
  }), Y = G(() => H.map((P) => P.key).join("|"), [H]), A = G(
    () => H.some((P) => P.filterEnabled),
    [H]
  ), Z = G(
    () => (d == null ? void 0 : d.enabled) && !d.remotePagination,
    [d]
  ), _ = G(() => !m, [m]), te = wl({
    columns: H,
    rows: n,
    enabled: _
  }), Ce = G(() => !i, [i]), {
    sortedRows: we,
    sortColumns: Me,
    setSortedColumns: We
  } = ss({
    columns: H,
    rows: te,
    defaultSortColumns: a
  }), ae = G(() => {
    if (!Z)
      return x;
    const P = Math.max(0, Math.ceil(te.length / W) - 1);
    return Math.min(x, P);
  }, [Z, x, W, te.length]);
  _e(() => {
    ae !== x && S(ae);
  }, [ae, x, S]);
  const xe = G(() => Z ? we.slice(ae * W, (ae + 1) * W) : we, [we, Z, ae, W]), Pe = G(
    () => u ? fs(xe, u.expandedIds) : xe,
    [u, xe]
  ), R = G(
    () => u ? bs(H, u.renderDetail) : H,
    [u, H]
  ), M = ee(
    (P, K) => {
      const Q = () => {
        const se = xs(P, u == null ? void 0 : u.expandedIds);
        return se || (K === 0 ? "first-row" : K === n.length - 1 ? "last-row" : "");
      };
      return [v == null ? void 0 : v(P, K), Q()].filter(Boolean).join(" ");
    },
    [n, u == null ? void 0 : u.expandedIds, v]
  ), $ = ee(
    (P) => {
      g != null && g.onClick ? g.onClick(P) : u && Br(u, P.id);
    },
    [g, u]
  ), p = ee(
    (P, K) => {
      if (k == null || k(P, K), K.isGridDefaultPrevented() || !u && !(g != null && g.onClick))
        return;
      const Q = window.getSelection();
      Q && !Q.isCollapsed && K.target instanceof Node && Q.containsNode(K.target, !0) || Ur(
        P.row,
        P.column.key,
        K.target,
        g == null ? void 0 : g.excludedColumns
      ) && $(P.row);
    },
    [k, u, g, $]
  ), z = !(d != null && d.remotePagination);
  return _e(() => {
    if (!z)
      return;
    const P = s == null ? void 0 : s.filter(
      (K) => n.some((Q) => Q.id === K)
    );
    (P == null ? void 0 : P.length) != (s == null ? void 0 : s.length) && (c == null || c(P ?? []));
  }, [n, s, z]), /* @__PURE__ */ ie(ts, { $pagination: !!(d != null && d.enabled), children: [
    /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(
      $r,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: (P) => {
          c == null || c(Array.from(P));
        },
        rowKeyGetter: (P) => P.id,
        rows: Pe,
        onSortColumnsChange: Ce ? We : i,
        sortColumns: Ce ? Me : o,
        columns: R,
        rowClass: M,
        headerRowHeight: A ? 70 : void 0,
        onCellClick: p,
        enableVirtualization: R.some((P) => P.frozenRight) ? !1 : void 0,
        ...I,
        rowHeight: u ? Cs(
          D,
          xr,
          u.detailHeight ?? cs
        ) : D ?? xr,
        renderers: {
          renderCheckbox: E,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...b != null && !t ? {
            noRowsFallback: /* @__PURE__ */ y("div", { className: "rdg-no-data", children: b })
          } : {},
          ...C
        },
        style: { ...es, ...e ?? {} }
      },
      `${N}:${Y}`
    ) }),
    d != null && d.enabled ? /* @__PURE__ */ y(
      pl,
      {
        ...(d == null ? void 0 : d.remotePagination) ?? {
          currentPage: ae,
          setCurrentPage: S,
          pageSize: W,
          setPageSize: F,
          totalCount: te.length
        },
        labels: d.labels ?? ((U = d.remotePagination) == null ? void 0 : U.labels)
      }
    ) : null,
    t ? /* @__PURE__ */ ie(xl, { children: [
      /* @__PURE__ */ y("div", {}),
      /* @__PURE__ */ y(gl, { color: J.primary500 })
    ] }) : null,
    /* @__PURE__ */ y(is, {})
  ] });
}, _l = ({
  filters: e,
  setFilters: t,
  columns: n,
  visibilityColumnFeature: {
    enabled: r,
    visibilityFeatureDisabledFor: o,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s
  } = {},
  ...c
}) => /* @__PURE__ */ y(vs, { filters: e, setFilters: t, children: /* @__PURE__ */ y(
  rs,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ y(Sl, { ...c, columns: n, filters: e, setFilters: t })
  }
) });
export {
  et as ColumnType,
  no as DATE_FORMAT,
  bl as DEFAULT_PAGE_SIZES,
  _l as DataGrid,
  xn as DataGridCheckbox,
  Di as DataGridDefaultRenderersProvider,
  Gr as EXPANDER_COLUMN_KEY,
  _r as ExpanderToggle,
  yt as FilterType,
  Wl as Row,
  ys as SELECTION_COLUMN_KEY,
  Be as SELECT_COLUMN_KEY,
  bn as SelectCellFormatter,
  dt as SelectColumn,
  vi as ToggleGroup,
  zl as TreeDataGrid,
  $l as VisibilityColumnChooser,
  is as VisibilityMenu,
  Ur as clickBelongsToRow,
  Yl as clickExpandsRow,
  sl as convertDate,
  es as defaultTheme,
  Cs as detailAwareRowHeight,
  xs as detailRowClass,
  Cr as getStringToCompare,
  zt as isDetailRow,
  wi as renderCheckbox,
  Lr as renderHeaderCell,
  Ia as renderSortIcon,
  Ta as renderSortPriority,
  xi as renderToggleGroup,
  ki as renderValue,
  J as taktikTheme,
  Al as textEditor,
  Ti as useHeaderRowSelection,
  Cl as usePagination,
  Or as useRowSelection,
  bs as withDetailRendering,
  fs as withDetailRows
};
