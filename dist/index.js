import { jsx as p, jsxs as ie, Fragment as yn } from "react/jsx-runtime";
import * as Ot from "react";
import Ee, { createContext as bt, memo as He, forwardRef as pn, useContext as ke, useMemo as G, useCallback as Z, useRef as ve, useEffect as _e, useState as re, useImperativeHandle as Go, useLayoutEffect as jo, useId as Ko } from "react";
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
function Me() {
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
  }) => /* @__PURE__ */ p("div", {
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
  mainHeaderRowIdx: d,
  maxRowIdx: w,
  currentPosition: {
    idx: f,
    rowIdx: m
  },
  nextPosition: l,
  lastFrozenColumnIndex: x,
  isCellWithinBounds: u
}) {
  let {
    idx: g,
    rowIdx: C
  } = l;
  const k = r.length, D = (L) => {
    for (const v of o) {
      const T = v.idx;
      if (T > g) break;
      const P = ci({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: C,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: x,
        column: v
      });
      if (P && g > T && g < P + T) {
        g = T + (L ? P : 0);
        break;
      }
    }
  }, S = (L) => L.level + d, I = () => {
    if (t) {
      let v = r[g].parent;
      for (; v !== void 0; ) {
        const T = S(v);
        if (C === T) {
          g = v.idx + v.colSpan;
          break;
        }
        v = v.parent;
      }
    } else if (e) {
      let v = r[g].parent, T = !1;
      for (; v !== void 0; ) {
        const P = S(v);
        if (C >= P) {
          g = v.idx, C = P, T = !0;
          break;
        }
        v = v.parent;
      }
      T || (g = f, C = m);
    }
  };
  if (u(l) && (D(t), C < d && I()), n === "CHANGE_ROW" && (g === k ? C === w || (g = 0, C += 1) : g === -1 && (C === c || (C -= 1, g = k - 1), D(!1))), C < d) {
    let v = r[g].parent;
    const T = C;
    for (C = d; v !== void 0; ) {
      const P = S(v);
      P >= T && (C = P, g = v.idx), v = v.parent;
    }
  }
  return {
    idx: g,
    rowIdx: C
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
  return Me(Ir, ...t, e.frozen && hi);
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
  return /* @__PURE__ */ p("input", {
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
  return /* @__PURE__ */ p(Di, {
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
  return /* @__PURE__ */ ie("span", {
    className: xi,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ p("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: vi,
      "aria-hidden": !0,
      children: /* @__PURE__ */ p("path", {
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
  return /* @__PURE__ */ p(xn, {
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
  return /* @__PURE__ */ p(xn, {
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
  return /* @__PURE__ */ p(xn, {
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
    return /* @__PURE__ */ p(Pi, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ p(Oi, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ p(Ni, {
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
  const a = (t == null ? void 0 : t.width) ?? Fi, s = (t == null ? void 0 : t.minWidth) ?? Li, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? Si, w = (t == null ? void 0 : t.sortable) ?? !1, f = (t == null ? void 0 : t.resizable) ?? !1, m = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: l,
    colSpanColumns: x,
    lastFrozenColumnIndex: u,
    headerRowsCount: g
  } = G(() => {
    let v = -1, T = 1;
    const P = [];
    O(e, 1);
    function O(A, W, ne) {
      for (const _ of A) {
        if ("children" in _) {
          const Se = {
            name: _.name,
            parent: ne,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: _.headerCellClass
          };
          O(_.children, W + 1, Se);
          continue;
        }
        const se = _.frozen ?? !1, we = {
          ..._,
          parent: ne,
          idx: 0,
          level: 0,
          frozen: se,
          width: _.width ?? a,
          minWidth: _.minWidth ?? s,
          maxWidth: _.maxWidth ?? c,
          sortable: _.sortable ?? w,
          resizable: _.resizable ?? f,
          draggable: _.draggable ?? m,
          renderCell: _.renderCell ?? d
        };
        P.push(we), se && v++, W > T && (T = W);
      }
    }
    P.sort(({
      key: A,
      frozen: W
    }, {
      key: ne,
      frozen: _
    }) => A === Be ? -1 : ne === Be ? 1 : W ? _ ? 0 : -1 : _ ? 1 : 0);
    const z = [];
    return P.forEach((A, W) => {
      A.idx = W, zr(A, W, 0), A.colSpan != null && z.push(A);
    }), {
      columns: P,
      colSpanColumns: z,
      lastFrozenColumnIndex: v,
      headerRowsCount: T
    };
  }, [e, a, s, c, d, f, w, m]), {
    templateColumns: C,
    layoutCssVars: k,
    totalFrozenColumnWidth: D,
    columnMetrics: S
  } = G(() => {
    const v = /* @__PURE__ */ new Map();
    let T = 0, P = 0;
    const O = [];
    for (const A of l) {
      let W = n(A);
      typeof W == "number" ? W = Rr(W, A) : W = A.minWidth, O.push(`${W}px`), v.set(A, {
        width: W,
        left: T
      }), T += W;
    }
    if (u !== -1) {
      const A = v.get(l[u]);
      P = A.left + A.width;
    }
    const z = {};
    for (let A = 0; A <= u; A++) {
      const W = l[A];
      z[`--rdg-frozen-left-${W.idx}`] = `${v.get(W).left}px`;
    }
    return {
      templateColumns: O,
      layoutCssVars: z,
      totalFrozenColumnWidth: P,
      columnMetrics: v
    };
  }, [n, l, u]), [I, L] = G(() => {
    if (!i)
      return [0, l.length - 1];
    const v = o + D, T = o + r, P = l.length - 1, O = wt(u + 1, P);
    if (v >= T)
      return [O, O];
    let z = O;
    for (; z < P; ) {
      const {
        left: _,
        width: se
      } = S.get(l[z]);
      if (_ + se > v)
        break;
      z++;
    }
    let A = z;
    for (; A < P; ) {
      const {
        left: _,
        width: se
      } = S.get(l[A]);
      if (_ + se >= T)
        break;
      A++;
    }
    const W = zt(O, z - 1), ne = wt(P, A + 1);
    return [W, ne];
  }, [S, l, u, o, D, r, i]);
  return {
    columns: l,
    colSpanColumns: x,
    colOverscanStartIdx: I,
    colOverscanEndIdx: L,
    templateColumns: C,
    layoutCssVars: k,
    headerRowsCount: g,
    lastFrozenColumnIndex: u,
    totalFrozenColumnWidth: D
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
function zi(e, t, n, r, o, i, a, s, c, d) {
  const w = ve(o), f = e.length === t.length, m = f && o !== w.current, l = [...n], x = [];
  for (const {
    key: k,
    idx: D,
    width: S
  } of t)
    typeof S == "string" && (m || !a.has(k)) && !i.has(k) && (l[D] = S, x.push(k));
  const u = l.join(" ");
  tt(() => {
    w.current = o, g(x);
  });
  function g(k) {
    k.length !== 0 && c((D) => {
      const S = new Map(D);
      let I = !1;
      for (const L of k) {
        const v = Qn(r, L);
        I || (I = v !== D.get(L)), v === void 0 ? S.delete(L) : S.set(L, v);
      }
      return I ? S : D;
    });
  }
  function C(k, D) {
    const {
      key: S
    } = k, I = [...n], L = [];
    for (const {
      key: T,
      idx: P,
      width: O
    } of t)
      if (S === T) {
        const z = typeof D == "number" ? `${D}px` : D;
        I[P] = z;
      } else f && typeof O == "string" && !i.has(T) && (I[P] = O, L.push(T));
    r.current.style.gridTemplateColumns = I.join(" ");
    const v = typeof D == "number" ? D : Qn(r, S);
    Lt(() => {
      s((T) => {
        const P = new Map(T);
        return P.set(S, v), P;
      }), g(L);
    }), d == null || d(k.idx, v);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: C
  };
}
function Qn(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Wi() {
  const e = ve(null), [t, n] = re(1), [r, o] = re(1), [i, a] = re(0);
  return tt(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: d,
      offsetWidth: w,
      offsetHeight: f
    } = e.current, {
      width: m,
      height: l
    } = e.current.getBoundingClientRect(), x = f - d, u = m - w + c, g = l - x;
    n(u), o(g), a(x);
    const C = new s((k) => {
      const D = k[0].contentBoxSize[0], {
        clientHeight: S,
        offsetHeight: I
      } = e.current;
      Lt(() => {
        n(D.inlineSize), o(D.blockSize), a(I - S);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, r, i];
}
function fe(e) {
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
  const [t, n] = re(!1);
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
  rowOverscanEndIdx: d
}) {
  const w = G(() => {
    if (i === 0) return 0;
    let f = i;
    const m = (l, x) => x !== void 0 && l + x > i ? (f = l, !0) : !1;
    for (const l of t) {
      const x = l.idx;
      if (x >= f || m(x, be(l, s, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const g = n[u];
        if (m(x, be(l, s, {
          type: "ROW",
          row: g
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (m(x, be(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (o != null) {
        for (const u of o)
          if (m(x, be(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
    }
    return f;
  }, [c, d, n, r, o, i, s, t]);
  return G(() => {
    const f = [];
    for (let m = 0; m <= a; m++) {
      const l = e[m];
      m < w && !l.frozen || f.push(l);
    }
    return f;
  }, [w, a, e]);
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
    findRowIdx: d
  } = G(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (g) => g * t,
        getRowHeight: () => t,
        findRowIdx: (g) => Zn(g / t)
      };
    let m = 0, l = " ";
    const x = e.map((g) => {
      const C = t(g), k = {
        top: m,
        height: C
      };
      return l += `${C}px `, m += C, k;
    }), u = (g) => zt(0, wt(e.length - 1, g));
    return {
      totalRowHeight: m,
      gridTemplateRows: l,
      getRowTop: (g) => x[u(g)].top,
      getRowHeight: (g) => x[u(g)].height,
      findRowIdx(g) {
        let C = 0, k = x.length - 1;
        for (; C <= k; ) {
          const D = C + Zn((k - C) / 2), S = x[D].top;
          if (S === g) return D;
          if (S < g ? C = D + 1 : S > g && (k = D - 1), C > k) return k;
        }
        return 0;
      }
    };
  }, [t, e]);
  let w = 0, f = e.length - 1;
  if (o) {
    const l = d(r), x = d(r + n);
    w = zt(0, l - 4), f = wt(e.length - 1, x + 4);
  }
  return {
    rowOverscanStartIdx: w,
    rowOverscanEndIdx: f,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: d
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
  onRowsChange: d,
  onFill: w,
  onClick: f,
  setDragging: m,
  setDraggedOverRowIdx: l
}) {
  const {
    idx: x,
    rowIdx: u
  } = a;
  function g(I) {
    if (I.preventDefault(), I.buttons !== 1) return;
    m(!0), window.addEventListener("mouseover", L), window.addEventListener("mouseup", v);
    function L(T) {
      T.buttons !== 1 && v();
    }
    function v() {
      window.removeEventListener("mouseover", L), window.removeEventListener("mouseup", v), m(!1), C();
    }
  }
  function C() {
    const I = s.current;
    if (I === void 0) return;
    const L = u < I ? u + 1 : I, v = u < I ? I + 1 : u;
    D(L, v), l(void 0);
  }
  function k(I) {
    I.stopPropagation(), D(u + 1, t.length);
  }
  function D(I, L) {
    const v = t[u], T = [...t], P = [];
    for (let O = I; O < L; O++)
      if (c({
        rowIdx: O,
        idx: x
      })) {
        const z = w({
          columnKey: n.key,
          sourceRow: v,
          targetRow: t[O]
        });
        z !== t[O] && (T[O] = z, P.push(O));
      }
    P.length > 0 && (d == null || d(T, {
      indexes: P,
      column: n
    }));
  }
  function S() {
    var O;
    const I = ((O = n.colSpan) == null ? void 0 : O.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: L,
      ...v
    } = nt(n, I), T = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", P = n.idx + I - 1 === o;
    return {
      ...v,
      gridRowStart: e,
      marginInlineEnd: P ? void 0 : T,
      marginBlockEnd: i ? void 0 : T,
      insetInlineStart: L ? `calc(${L} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ p("div", {
    style: S(),
    className: Me(Bi, n.frozen && _i),
    onClick: f,
    onMouseDown: g,
    onDoubleClick: k
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
  var C, k, D;
  const c = ve(void 0), d = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, w = fe(() => {
    l(!0, !1);
  });
  _e(() => {
    if (!d) return;
    function S() {
      c.current = requestAnimationFrame(w);
    }
    return addEventListener("mousedown", S, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", S, {
        capture: !0
      }), f();
    };
  }, [d, w]);
  function f() {
    cancelAnimationFrame(c.current);
  }
  function m(S) {
    if (a) {
      const I = ht(S);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(S);
        },
        onClose: l
      }, I), I.isGridDefaultPrevented()) return;
    }
    S.key === "Escape" ? l() : S.key === "Enter" ? l(!0) : oi(S) && s(S);
  }
  function l(S = !1, I = !0) {
    S ? o(n, !0, I) : i(I);
  }
  function x(S, I = !1) {
    o(S, I, I);
  }
  const {
    cellClass: u
  } = e, g = xt(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((k = e.editorOptions) != null && k.displayCellContent) && Gi);
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: g,
    style: nt(e, t),
    onKeyDown: m,
    onMouseDownCapture: f,
    children: e.renderEditCell != null && /* @__PURE__ */ ie(yn, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: x,
        onClose: l
      }), ((D = e.editorOptions) == null ? void 0 : D.displayCellContent) && e.renderCell({
        column: e,
        row: n,
        rowIdx: r,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: x
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
  function d() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ p("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": n,
    tabIndex: o,
    className: Me(Ir, e.headerCellClass),
    style: {
      ...Tr(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onClick: d,
    children: e.name
  });
}
const qi = "h44jtk67-0-0-beta-47", Xi = "hcgkhxz7-0-0-beta-47", Vi = `rdg-header-sort-name ${Xi}`;
function Wr({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ p(Zi, {
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
  return /* @__PURE__ */ ie("span", {
    className: qi,
    children: [/* @__PURE__ */ p("span", {
      className: Vi,
      children: n
    }), /* @__PURE__ */ p("span", {
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
  shouldFocusGrid: d,
  direction: w,
  dragDropKey: f
}) {
  const [m, l] = re(!1), [x, u] = re(!1), g = w === "rtl", C = Er(e, n), {
    tabIndex: k,
    childTabIndex: D,
    onFocus: S
  } = Ct(r), I = a == null ? void 0 : a.findIndex((b) => b.columnKey === e.key), L = I !== void 0 && I > -1 ? a[I] : void 0, v = L == null ? void 0 : L.direction, T = L !== void 0 && a.length > 1 ? I + 1 : void 0, P = v && !T ? v === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: O,
    resizable: z,
    draggable: A
  } = e, W = xt(e, e.headerCellClass, O && Qi, z && ea, A && na, m && oa, x && aa), ne = e.renderHeaderCell ?? Wr;
  function _(b) {
    if (b.pointerType === "mouse" && b.buttons !== 1)
      return;
    b.preventDefault();
    const {
      currentTarget: H,
      pointerId: U
    } = b, j = H.parentElement, {
      right: te,
      left: ae
    } = j.getBoundingClientRect(), de = g ? b.clientX - ae : te - b.clientX;
    let Y = !1;
    function X(Ce) {
      const {
        width: he,
        right: rt,
        left: We
      } = j.getBoundingClientRect();
      let Ue = g ? rt + de - Ce.clientX : Ce.clientX + de - We;
      Ue = Rr(Ue, e), he > 0 && Ue !== he && o(e, Ue);
    }
    function K() {
      Y = !0, o(e, "max-content");
    }
    function ye(Ce) {
      Y || X(Ce), H.removeEventListener("pointermove", X), H.removeEventListener("dblclick", K), H.removeEventListener("lostpointercapture", ye);
    }
    H.setPointerCapture(U), H.addEventListener("pointermove", X), H.addEventListener("dblclick", K), H.addEventListener("lostpointercapture", ye);
  }
  function se(b) {
    if (s == null) return;
    const {
      sortDescendingFirst: H
    } = e;
    if (L === void 0) {
      const U = {
        columnKey: e.key,
        direction: H ? "DESC" : "ASC"
      };
      s(a && b ? [...a, U] : [U]);
    } else {
      let U;
      if ((H === !0 && v === "DESC" || H !== !0 && v === "ASC") && (U = {
        columnKey: e.key,
        direction: v === "ASC" ? "DESC" : "ASC"
      }), b) {
        const j = [...a];
        U ? j[I] = U : j.splice(I, 1), s(j);
      } else
        s(U ? [U] : []);
    }
  }
  function we(b) {
    c({
      idx: e.idx,
      rowIdx: n
    }), O && se(b.ctrlKey || b.metaKey);
  }
  function Se(b) {
    S == null || S(b), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Ie(b) {
    (b.key === " " || b.key === "Enter") && (b.preventDefault(), se(b.ctrlKey || b.metaKey));
  }
  function ze(b) {
    b.dataTransfer.setData(f, e.key), b.dataTransfer.dropEffect = "move", l(!0);
  }
  function Pe() {
    l(!1);
  }
  function le(b) {
    b.preventDefault(), b.dataTransfer.dropEffect = "move";
  }
  function Te(b) {
    if (u(!1), b.dataTransfer.types.includes(f.toLowerCase())) {
      const H = b.dataTransfer.getData(f.toLowerCase());
      H !== e.key && (b.preventDefault(), i == null || i(H, e.key));
    }
  }
  function E(b) {
    Jn(b) && u(!0);
  }
  function R(b) {
    Jn(b) && u(!1);
  }
  let $;
  return A && ($ = {
    draggable: !0,
    onDragStart: ze,
    onDragEnd: Pe,
    onDragOver: le,
    onDragEnter: E,
    onDragLeave: R,
    onDrop: Te
  }), /* @__PURE__ */ ie("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": r,
    "aria-sort": P,
    tabIndex: d ? 0 : k,
    className: W,
    style: {
      ...Tr(e, n, C),
      ...nt(e, t)
    },
    onFocus: Se,
    onClick: we,
    onKeyDown: O ? Ie : void 0,
    ...$,
    children: [ne({
      column: e,
      sortDirection: v,
      priority: T,
      tabIndex: D
    }), z && /* @__PURE__ */ p("div", {
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
  shouldFocusGrid: d,
  direction: w
}) {
  const f = Ko(), m = [];
  for (let l = 0; l < t.length; l++) {
    const x = t[l], u = be(x, a, {
      type: "HEADER"
    });
    u !== void 0 && (l += u - 1), m.push(/* @__PURE__ */ p(sa, {
      column: x,
      colSpan: u,
      rowIdx: e,
      isCellSelected: s === x.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: d && l === 0,
      direction: w,
      dragDropKey: f
    }, x.key));
  }
  return /* @__PURE__ */ p("div", {
    role: "row",
    "aria-rowindex": e,
    className: Me(Ar, s === -1 && Bt),
    children: m
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
          idx: d
        } = c;
        i.push(/* @__PURE__ */ p(Ki, {
          column: c,
          rowIdx: e,
          isCellSelected: r === d,
          selectCell: o
        }, d));
      }
    }
  }
  return /* @__PURE__ */ p("div", {
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
  onContextMenu: d,
  onRowChange: w,
  selectCell: f,
  ...m
}) {
  const {
    tabIndex: l,
    childTabIndex: x,
    onFocus: u
  } = Ct(n), {
    cellClass: g
  } = e, C = xt(e, typeof g == "function" ? g(i) : g, r && ba, o && Ca), k = Sr(e, i);
  function D(T) {
    f({
      rowIdx: a,
      idx: e.idx
    }, T);
  }
  function S(T) {
    if (s) {
      const P = ht(T);
      if (s({
        row: i,
        column: e,
        selectCell: D
      }, P), P.isGridDefaultPrevented()) return;
    }
    D();
  }
  function I(T) {
    if (d) {
      const P = ht(T);
      if (d({
        row: i,
        column: e,
        selectCell: D
      }, P), P.isGridDefaultPrevented()) return;
    }
    D();
  }
  function L(T) {
    if (c) {
      const P = ht(T);
      if (c({
        row: i,
        column: e,
        selectCell: D
      }, P), P.isGridDefaultPrevented()) return;
    }
    D(!0);
  }
  function v(T) {
    w(e, T);
  }
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !k || void 0,
    tabIndex: l,
    className: C,
    style: nt(e, t),
    onClick: S,
    onDoubleClick: L,
    onContextMenu: I,
    onFocus: u,
    ...m,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: k,
      tabIndex: x,
      onRowChange: v
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
  row: d,
  viewportColumns: w,
  selectedCellEditor: f,
  onCellClick: m,
  onCellDoubleClick: l,
  onCellContextMenu: x,
  rowClass: u,
  setDraggedOverRowIdx: g,
  onMouseEnter: C,
  onRowChange: k,
  selectCell: D,
  ...S
}, I) {
  const L = fe((O, z) => {
    k(O, t, z);
  });
  function v(O) {
    g == null || g(t), C == null || C(O);
  }
  e = Me(Cn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && Bt);
  const T = [];
  for (let O = 0; O < w.length; O++) {
    const z = w[O], {
      idx: A
    } = z, W = be(z, c, {
      type: "ROW",
      row: d
    });
    W !== void 0 && (O += W - 1);
    const ne = r === A;
    ne && f ? T.push(f) : T.push(/* @__PURE__ */ p(ka, {
      column: z,
      colSpan: W,
      row: d,
      rowIdx: t,
      isCopied: a === A,
      isDraggedOver: s === A,
      isCellSelected: ne,
      onClick: m,
      onDoubleClick: l,
      onContextMenu: x,
      onRowChange: L,
      selectCell: D
    }, z.key));
  }
  const P = G(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ p(Or, {
    value: P,
    children: /* @__PURE__ */ p("div", {
      role: "row",
      ref: I,
      className: e,
      onMouseEnter: v,
      style: bn(n),
      ...S,
      children: T
    })
  });
}
const Yr = /* @__PURE__ */ He(/* @__PURE__ */ pn(Da)), $l = Yr;
function $r(e, t) {
  return /* @__PURE__ */ p(Yr, {
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
  }, [n, r]), /* @__PURE__ */ p("div", {
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
  return /* @__PURE__ */ ie(yn, {
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
  return e === void 0 ? null : /* @__PURE__ */ p("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Ta,
    "aria-hidden": !0,
    children: /* @__PURE__ */ p("path", {
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
  var m;
  const {
    tabIndex: a,
    childTabIndex: s,
    onFocus: c
  } = Ct(o), {
    summaryCellClass: d
  } = e, w = xt(e, za, typeof d == "function" ? d(n) : d);
  function f() {
    i({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: w,
    style: nt(e, t),
    onClick: f,
    onFocus: c,
    children: (m = e.renderSummaryCell) == null ? void 0 : m.call(e, {
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
  selectCell: d,
  "aria-rowindex": w
}) {
  const f = [];
  for (let m = 0; m < r.length; m++) {
    const l = r[m], x = be(l, a, {
      type: "SUMMARY",
      row: n
    });
    x !== void 0 && (m += x - 1);
    const u = s === l.idx;
    f.push(/* @__PURE__ */ p(Aa, {
      column: l,
      colSpan: x,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, l.key));
  }
  return /* @__PURE__ */ p("div", {
    role: "row",
    "aria-rowindex": w,
    className: Me(Cn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, _a, c ? `${ua} ${$a}` : fa, s === -1 && Bt),
    style: {
      ...bn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: f
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
    headerRowHeight: d,
    summaryRowHeight: w,
    selectedRows: f,
    isRowSelectionDisabled: m,
    onSelectedRowsChange: l,
    sortColumns: x,
    onSortColumnsChange: u,
    defaultColumnOptions: g,
    onCellClick: C,
    onCellDoubleClick: k,
    onCellContextMenu: D,
    onCellKeyDown: S,
    onSelectedCellChange: I,
    onScroll: L,
    onColumnResize: v,
    onColumnsReorder: T,
    onFill: P,
    onCopy: O,
    onPaste: z,
    enableVirtualization: A,
    renderers: W,
    className: ne,
    style: _,
    rowClass: se,
    direction: we,
    role: Se,
    "aria-label": Ie,
    "aria-labelledby": ze,
    "aria-describedby": Pe,
    "aria-rowcount": le,
    "data-testid": Te
  } = e, E = _t(), R = Se ?? "grid", $ = c ?? 35, b = d ?? (typeof $ == "number" ? $ : 35), H = w ?? (typeof $ == "number" ? $ : 35), U = (W == null ? void 0 : W.renderRow) ?? (E == null ? void 0 : E.renderRow) ?? $r, j = (W == null ? void 0 : W.renderSortStatus) ?? (E == null ? void 0 : E.renderSortStatus) ?? Ra, te = (W == null ? void 0 : W.renderCheckbox) ?? (E == null ? void 0 : E.renderCheckbox) ?? pi, ae = (W == null ? void 0 : W.noRowsFallback) ?? (E == null ? void 0 : E.noRowsFallback), de = A ?? !0, Y = we ?? "ltr", [X, K] = re(0), [ye, Ce] = re(0), [he, rt] = re(() => /* @__PURE__ */ new Map()), [We, Ue] = re(() => /* @__PURE__ */ new Map()), [Ge, In] = re(null), [Tn, io] = re(!1), [ot, ao] = re(void 0), [Oe, Rn] = re(null), En = Z((h) => he.get(h.key) ?? We.get(h.key) ?? h.width, [We, he]), [je, Mn, Pn, so] = Wi(), {
    columns: oe,
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
    defaultColumnOptions: g,
    getColumnWidth: En,
    scrollLeft: ye,
    viewportWidth: Mn,
    enableVirtualization: de
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Fn = it + Ke, qe = Ae + it, Ut = Ae - 1, ge = -qe, Dt = ge + Ut, Ye = r.length + Ke - 1, [M, Xe] = re(() => ({
    idx: -1,
    rowIdx: ge - 1,
    mode: "SELECT"
  })), Gt = ve(M), Ln = ve(ot), Hn = ve(-1), St = ve(null), It = ve(!1), jt = R === "treegrid", Kt = Ae * b, zn = Fn * H, Tt = Pn - Kt - zn, qt = f != null && l != null, Wn = Y === "rtl", ho = Wn ? "ArrowRight" : "ArrowLeft", An = Wn ? "ArrowLeft" : "ArrowRight", Yn = le ?? Ae + r.length + Fn, go = G(() => ({
    renderCheckbox: te,
    renderSortStatus: j
  }), [te, j]), mo = G(() => {
    let h = !1, y = !1;
    if (a != null && f != null && f.size > 0) {
      for (const N of r)
        if (f.has(a(N)) ? h = !0 : y = !0, h && y) break;
    }
    return {
      isRowSelected: h && !y,
      isIndeterminate: h && y
    };
  }, [r, f, a]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: wo,
    getRowTop: $n,
    getRowHeight: yo,
    findRowIdx: _n
  } = Yi({
    rows: r,
    rowHeight: $,
    clientHeight: Tt,
    scrollTop: X,
    enableVirtualization: de
  }), Ne = Ai({
    columns: oe,
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
  } = zi(oe, Ne, lo, je, Mn, he, We, rt, Ue, v), xo = jt ? -1 : 0, Ve = oe.length - 1, Vt = Jt(M), Rt = Kn(M), Co = b + Xt + zn + so, vo = fe(bo), ko = fe(T), Do = fe(u), So = fe(C), Io = fe(k), To = fe(D), Ro = fe(Po), Eo = fe(Un), Mo = fe(Et), Zt = fe(ct), Bn = fe(({
    idx: h,
    rowIdx: y
  }) => {
    ct({
      rowIdx: ge + y - 1,
      idx: h
    });
  });
  tt(() => {
    if (!Vt || nn(M, Gt.current)) {
      Gt.current = M;
      return;
    }
    Gt.current = M, M.idx === -1 && (St.current.focus({
      preventScroll: !0
    }), Ft(St.current));
  }), tt(() => {
    It.current && (It.current = !1, Xn());
  }), Go(t, () => ({
    element: je.current,
    scrollToCell({
      idx: h,
      rowIdx: y
    }) {
      const N = h !== void 0 && h > pe && h < oe.length ? h : void 0, F = y !== void 0 && Ze(y) ? y : void 0;
      (N !== void 0 || F !== void 0) && Rn({
        idx: N,
        rowIdx: F
      });
    },
    selectCell: ct
  }));
  const Qt = Z((h) => {
    ao(h), Ln.current = h;
  }, []);
  function Po(h) {
    if (!l) return;
    gt(a);
    const y = new Set(f);
    for (const N of r) {
      if ((m == null ? void 0 : m(N)) === !0) continue;
      const F = a(N);
      h.checked ? y.add(F) : y.delete(F);
    }
    l(y);
  }
  function Un(h) {
    if (!l) return;
    gt(a);
    const {
      row: y,
      checked: N,
      isShiftClick: F
    } = h;
    if ((m == null ? void 0 : m(y)) === !0) return;
    const B = new Set(f), V = a(y), Q = Hn.current, J = r.indexOf(y);
    if (Hn.current = J, N ? B.add(V) : B.delete(V), F && Q !== -1 && Q !== J && Q < r.length) {
      const me = gi(J - Q);
      for (let ue = Q + me; ue !== J; ue += me) {
        const Re = r[ue];
        (m == null ? void 0 : m(Re)) !== !0 && (N ? B.add(a(Re)) : B.delete(a(Re)));
      }
    }
    l(B);
  }
  function Oo(h) {
    var J;
    const {
      idx: y,
      rowIdx: N,
      mode: F
    } = M;
    if (F === "EDIT") return;
    if (S && Ze(N)) {
      const me = r[N], ue = ht(h);
      if (S({
        mode: "SELECT",
        row: me,
        column: oe[y],
        rowIdx: N,
        selectCell: ct
      }, ue), ue.isGridDefaultPrevented()) return;
    }
    if (!(h.target instanceof Element)) return;
    const B = h.target.closest(".rdg-cell") !== null, V = jt && h.target === St.current;
    if (!B && !V) return;
    const {
      keyCode: Q
    } = h;
    if (Rt && (z != null || O != null) && Ht(h)) {
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
    switch (h.key) {
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
        qn(h);
        break;
      default:
        Ho(h);
        break;
    }
  }
  function No(h) {
    const {
      scrollTop: y,
      scrollLeft: N
    } = h.currentTarget;
    Lt(() => {
      K(y), Ce(mi(N));
    }), L == null || L(h);
  }
  function Et(h, y, N) {
    if (typeof s != "function" || N === r[y]) return;
    const F = [...r];
    F[y] = N, s(F, {
      indexes: [y],
      column: h
    });
  }
  function Gn() {
    M.mode === "EDIT" && Et(oe[M.idx], M.rowIdx, M.row);
  }
  function Fo() {
    const {
      idx: h,
      rowIdx: y
    } = M, N = r[y], F = oe[h].key;
    In({
      row: N,
      columnKey: F
    }), O == null || O({
      sourceRow: N,
      sourceColumnKey: F
    });
  }
  function Lo() {
    if (!z || !s || Ge === null || !Mt(M))
      return;
    const {
      idx: h,
      rowIdx: y
    } = M, N = oe[h], F = r[y], B = z({
      sourceRow: Ge.row,
      sourceColumnKey: Ge.columnKey,
      targetRow: F,
      targetColumnKey: N.key
    });
    Et(N, y, B);
  }
  function Ho(h) {
    if (!Rt) return;
    const y = r[M.rowIdx], {
      key: N,
      shiftKey: F
    } = h;
    if (qt && F && N === " ") {
      gt(a);
      const B = a(y);
      Un({
        row: y,
        checked: !f.has(B),
        isShiftClick: !1
      }), h.preventDefault();
      return;
    }
    Mt(M) && ri(h) && Xe(({
      idx: B,
      rowIdx: V
    }) => ({
      idx: B,
      rowIdx: V,
      mode: "EDIT",
      row: y,
      originalRow: y
    }));
  }
  function jn(h) {
    return h >= xo && h <= Ve;
  }
  function Ze(h) {
    return h >= 0 && h < r.length;
  }
  function Jt({
    idx: h,
    rowIdx: y
  }) {
    return y >= ge && y <= Ye && jn(h);
  }
  function zo({
    idx: h,
    rowIdx: y
  }) {
    return Ze(y) && h >= 0 && h <= Ve;
  }
  function Kn({
    idx: h,
    rowIdx: y
  }) {
    return Ze(y) && jn(h);
  }
  function Mt(h) {
    return zo(h) && si({
      columns: oe,
      rows: r,
      selectedPosition: h
    });
  }
  function ct(h, y) {
    if (!Jt(h)) return;
    Gn();
    const N = r[h.rowIdx], F = nn(M, h);
    y && Mt(h) ? Xe({
      ...h,
      mode: "EDIT",
      row: N,
      originalRow: N
    }) : F ? Ft(tr(je.current)) : (It.current = !0, Xe({
      ...h,
      mode: "SELECT"
    })), I && !F && I({
      rowIdx: h.rowIdx,
      row: N,
      column: oe[h.idx]
    });
  }
  function Wo(h, y, N) {
    const {
      idx: F,
      rowIdx: B
    } = M, V = Vt && F === -1;
    switch (h) {
      case "ArrowUp":
        return {
          idx: F,
          rowIdx: B - 1
        };
      case "ArrowDown":
        return {
          idx: F,
          rowIdx: B + 1
        };
      case ho:
        return {
          idx: F - 1,
          rowIdx: B
        };
      case An:
        return {
          idx: F + 1,
          rowIdx: B
        };
      case "Tab":
        return {
          idx: F + (N ? -1 : 1),
          rowIdx: B
        };
      case "Home":
        return V ? {
          idx: F,
          rowIdx: ge
        } : {
          idx: 0,
          rowIdx: y ? ge : B
        };
      case "End":
        return V ? {
          idx: F,
          rowIdx: Ye
        } : {
          idx: Ve,
          rowIdx: y ? Ye : B
        };
      case "PageUp": {
        if (M.rowIdx === ge) return M;
        const Q = $n(B) + yo(B) - Tt;
        return {
          idx: F,
          rowIdx: Q > 0 ? _n(Q) : 0
        };
      }
      case "PageDown": {
        if (M.rowIdx >= r.length) return M;
        const Q = $n(B) + Tt;
        return {
          idx: F,
          rowIdx: Q < Xt ? _n(Q) : r.length - 1
        };
      }
      default:
        return M;
    }
  }
  function qn(h) {
    const {
      key: y,
      shiftKey: N
    } = h;
    let F = "NONE";
    if (y === "Tab") {
      if (di({
        shiftKey: N,
        maxColIdx: Ve,
        minRowIdx: ge,
        maxRowIdx: Ye,
        selectedPosition: M
      })) {
        Gn();
        return;
      }
      F = "CHANGE_ROW";
    }
    h.preventDefault();
    const B = Ht(h), V = Wo(y, B, N);
    if (nn(M, V)) return;
    const Q = li({
      moveUp: y === "ArrowUp",
      moveNext: y === An || y === "Tab" && !N,
      columns: oe,
      colSpanColumns: On,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: ge,
      mainHeaderRowIdx: Dt,
      maxRowIdx: Ye,
      lastFrozenColumnIndex: pe,
      cellNavigationMode: F,
      currentPosition: M,
      nextPosition: V,
      isCellWithinBounds: Jt
    });
    ct(Q);
  }
  function Ao(h) {
    if (ot === void 0) return;
    const {
      rowIdx: y
    } = M;
    return (y < ot ? y < h && h <= ot : y > h && h >= ot) ? M.idx : void 0;
  }
  function Xn() {
    const h = tr(je.current);
    if (h === null) return;
    Ft(h), (h.querySelector('[tabindex="0"]') ?? h).focus({
      preventScroll: !0
    });
  }
  function Yo() {
    if (P == null || M.mode === "EDIT" || !Kn(M))
      return;
    const {
      idx: h,
      rowIdx: y
    } = M, N = oe[h];
    if (N.renderEditCell == null || N.editable === !1)
      return;
    const F = En(N);
    return /* @__PURE__ */ p(Ui, {
      gridRowStart: qe + y + 1,
      rows: r,
      column: N,
      columnWidth: F,
      maxColIdx: Ve,
      isLastRow: y === Ye,
      selectedPosition: M,
      isCellEditable: Mt,
      latestDraggedOverRowIdx: Ln,
      onRowsChange: s,
      onClick: Xn,
      onFill: P,
      setDragging: io,
      setDraggedOverRowIdx: Qt
    });
  }
  function $o(h) {
    if (M.rowIdx !== h || M.mode === "SELECT") return;
    const {
      idx: y,
      row: N
    } = M, F = oe[y], B = be(F, pe, {
      type: "ROW",
      row: N
    }), V = (J) => {
      It.current = J, Xe(({
        idx: me,
        rowIdx: ue
      }) => ({
        idx: me,
        rowIdx: ue,
        mode: "SELECT"
      }));
    }, Q = (J, me, ue) => {
      me ? Lt(() => {
        Et(F, M.rowIdx, J), V(ue);
      }) : Xe((Re) => ({
        ...Re,
        row: J
      }));
    };
    return r[M.rowIdx] !== M.originalRow && V(!1), /* @__PURE__ */ p(ji, {
      column: F,
      colSpan: B,
      row: N,
      rowIdx: h,
      onRowChange: Q,
      closeEditor: V,
      onKeyDown: S,
      navigate: qn
    }, F.key);
  }
  function lt(h) {
    const y = M.idx === -1 ? void 0 : oe[M.idx];
    return y !== void 0 && M.rowIdx === h && !Ne.includes(y) ? M.idx > Nn ? [...Ne, y] : [...Ne.slice(0, pe + 1), y, ...Ne.slice(pe + 1)] : Ne;
  }
  function _o() {
    const h = [], {
      idx: y,
      rowIdx: N
    } = M, F = Rt && N < at ? at - 1 : at, B = Rt && N > st ? st + 1 : st;
    for (let V = F; V <= B; V++) {
      const Q = V === at - 1 || V === st + 1, J = Q ? N : V;
      let me = Ne;
      const ue = y === -1 ? void 0 : oe[y];
      ue !== void 0 && (Q ? me = [ue] : me = lt(J));
      const Re = r[J], Bo = qe + J + 1;
      let en = J, tn = !1;
      typeof a == "function" && (en = a(Re), tn = (f == null ? void 0 : f.has(en)) ?? !1), h.push(U(en, {
        "aria-rowindex": qe + J + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: J,
        row: Re,
        viewportColumns: me,
        isRowSelectionDisabled: (m == null ? void 0 : m(Re)) ?? !1,
        isRowSelected: tn,
        onCellClick: So,
        onCellDoubleClick: Io,
        onCellContextMenu: To,
        rowClass: se,
        gridRowStart: Bo,
        copiedCellIdx: Ge !== null && Ge.row === Re ? oe.findIndex((Uo) => Uo.key === Ge.columnKey) : void 0,
        selectedCellIdx: N === J ? y : void 0,
        draggedOverCellIdx: Ao(J),
        setDraggedOverRowIdx: Tn ? Qt : void 0,
        lastFrozenColumnIndex: pe,
        onRowChange: Mo,
        selectCell: Zt,
        selectedCellEditor: $o(J)
      }));
    }
    return h;
  }
  (M.idx > Ve || M.rowIdx > Ye) && (Xe({
    idx: -1,
    rowIdx: ge - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Pt = `repeat(${Ae}, ${b}px)`;
  it > 0 && (Pt += ` repeat(${it}, ${H}px)`), r.length > 0 && (Pt += wo), Ke > 0 && (Pt += ` repeat(${Ke}, ${H}px)`);
  const Vn = M.idx === -1 && M.rowIdx !== ge - 1;
  return /* @__PURE__ */ ie("div", {
    role: R,
    "aria-label": Ie,
    "aria-labelledby": ze,
    "aria-describedby": Pe,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": oe.length,
    "aria-rowcount": Yn,
    className: Me(Oa, ne, Tn && Fa),
    style: {
      ..._,
      scrollPaddingInlineStart: M.idx > pe || (Oe == null ? void 0 : Oe.idx) !== void 0 ? `${fo}px` : void 0,
      scrollPaddingBlock: Ze(M.rowIdx) || (Oe == null ? void 0 : Oe.rowIdx) !== void 0 ? `${Kt + it * H}px ${Ke * H}px` : void 0,
      gridTemplateColumns: po,
      gridTemplateRows: Pt,
      "--rdg-header-row-height": `${b}px`,
      "--rdg-scroll-height": `${Co}px`,
      ...uo
    },
    dir: Y,
    ref: je,
    onScroll: No,
    onKeyDown: Oo,
    "data-testid": Te,
    children: [/* @__PURE__ */ ie(Ii, {
      value: go,
      children: [/* @__PURE__ */ p(Ei, {
        value: Ro,
        children: /* @__PURE__ */ ie(Ri, {
          value: mo,
          children: [Array.from({
            length: Ut
          }, (h, y) => /* @__PURE__ */ p(ya, {
            rowIdx: y + 1,
            level: -Ut + y,
            columns: lt(ge + y),
            selectedCellIdx: M.rowIdx === ge + y ? M.idx : void 0,
            selectCell: Bn
          }, y)), /* @__PURE__ */ p(ma, {
            rowIdx: Ae,
            columns: lt(Dt),
            onColumnResize: vo,
            onColumnsReorder: ko,
            sortColumns: x,
            onSortColumnsChange: Do,
            lastFrozenColumnIndex: pe,
            selectedCellIdx: M.rowIdx === Dt ? M.idx : void 0,
            selectCell: Bn,
            shouldFocusGrid: !Vt,
            direction: Y
          })]
        })
      }), r.length === 0 && ae ? ae : /* @__PURE__ */ ie(yn, {
        children: [o == null ? void 0 : o.map((h, y) => {
          const N = Ae + 1 + y, F = Dt + 1 + y, B = M.rowIdx === F, V = Kt + H * y;
          return /* @__PURE__ */ p(er, {
            "aria-rowindex": N,
            rowIdx: F,
            gridRowStart: N,
            row: h,
            top: V,
            bottom: void 0,
            viewportColumns: lt(F),
            lastFrozenColumnIndex: pe,
            selectedCellIdx: B ? M.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, y);
        }), /* @__PURE__ */ p(Ti, {
          value: Eo,
          children: _o()
        }), i == null ? void 0 : i.map((h, y) => {
          const N = qe + r.length + y + 1, F = r.length + y, B = M.rowIdx === F, V = Tt > Xt ? Pn - H * (i.length - y) : void 0, Q = V === void 0 ? H * (i.length - 1 - y) : void 0;
          return /* @__PURE__ */ p(er, {
            "aria-rowindex": Yn - Ke + y + 1,
            rowIdx: F,
            gridRowStart: N,
            row: h,
            top: V,
            bottom: Q,
            viewportColumns: lt(F),
            lastFrozenColumnIndex: pe,
            selectedCellIdx: B ? M.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, y);
        })]
      })]
    }), Yo(), ai(Ne), jt && /* @__PURE__ */ p("div", {
      ref: St,
      tabIndex: Vn ? 0 : -1,
      className: Me(La, Vn && [la, pe !== -1 && da], !Ze(M.rowIdx) && Ha),
      style: {
        gridRowStart: M.rowIdx + qe + 1
      }
    }), Oe !== null && /* @__PURE__ */ p(Sa, {
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
  toggleGroup: d
}) {
  var u;
  const {
    tabIndex: w,
    childTabIndex: f,
    onFocus: m
  } = Ct(o);
  function l() {
    d(e);
  }
  const x = c && s === i.idx;
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: w,
    className: xt(i),
    style: {
      ...nt(i),
      cursor: x ? "pointer" : "default"
    },
    onClick: x ? l : void 0,
    onFocus: m,
    children: (!c || x) && ((u = i.renderGroupCell) == null ? void 0 : u.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: f,
      toggleGroup: l
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
  toggleGroup: d,
  isRowSelectionDisabled: w,
  ...f
}) {
  const m = r[0].key === Be ? t.level + 1 : t.level;
  function l() {
    a({
      rowIdx: n,
      idx: -1
    });
  }
  const x = G(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: i
  }), [i]);
  return /* @__PURE__ */ p(Or, {
    value: x,
    children: /* @__PURE__ */ p("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Me(Cn, qa, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Bt),
      onClick: l,
      style: bn(s),
      ...f,
      children: r.map((u) => /* @__PURE__ */ p(ja, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === u.idx,
        column: u,
        row: t,
        groupColumnIndex: m,
        toggleGroup: d,
        isGroupByColumn: c.includes(u.key)
      }, u.key))
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
  groupBy: d,
  rowGrouper: w,
  expandedGroupIds: f,
  onExpandedGroupIdsChange: m,
  ...l
}, x) {
  var Pe, le, Te;
  const u = _t(), g = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? $r, C = 1 + (((Pe = l.topSummaryRows) == null ? void 0 : Pe.length) ?? 0), k = l.direction === "rtl", D = k ? "ArrowRight" : "ArrowLeft", S = k ? "ArrowLeft" : "ArrowRight", I = fe(Ie), {
    columns: L,
    groupBy: v
  } = G(() => {
    const E = [...e].sort(({
      key: $
    }, {
      key: b
    }) => $ === Be ? -1 : b === Be ? 1 : d.includes($) ? d.includes(b) ? d.indexOf($) - d.indexOf(b) : -1 : d.includes(b) ? 1 : 0), R = [];
    for (const [$, b] of E.entries())
      d.includes(b.key) && (R.push(b.key), E[$] = {
        ...b,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: b.renderGroupCell ?? ki,
        editable: !1
      });
    return {
      columns: E,
      groupBy: R
    };
  }, [e, d]), [T, P] = G(() => {
    if (v.length === 0) return [void 0, t.length];
    const E = (R, [$, ...b], H) => {
      let U = 0;
      const j = {};
      for (const [te, ae] of Object.entries(w(R, $))) {
        const [de, Y] = b.length === 0 ? [ae, ae.length] : E(ae, b, H + U + 1);
        j[te] = {
          childRows: ae,
          childGroups: de,
          startRowIndex: H + U
        }, U += Y + 1;
      }
      return [j, U];
    };
    return E(t, v, 0);
  }, [v, w, t]), [O, z] = G(() => {
    const E = /* @__PURE__ */ new Set();
    if (!T) return [t, b];
    const R = [], $ = (H, U, j) => {
      if (Qa(H)) {
        R.push(...H);
        return;
      }
      Object.keys(H).forEach((te, ae, de) => {
        const Y = U !== void 0 ? `${U}__${te}` : te, X = f.has(Y), {
          childRows: K,
          childGroups: ye,
          startRowIndex: Ce
        } = H[te], he = {
          id: Y,
          parentId: U,
          groupKey: te,
          isExpanded: X,
          childRows: K,
          level: j,
          posInSet: ae,
          startRowIndex: Ce,
          setSize: de.length
        };
        R.push(he), E.add(he), X && $(ye, Y, j + 1);
      });
    };
    return $(T, void 0, 0), [R, b];
    function b(H) {
      return E.has(H);
    }
  }, [f, T, t]), A = G(() => typeof n == "function" ? (E) => z(E) ? n({
    type: "GROUP",
    row: E
  }) : n({
    type: "ROW",
    row: E
  }) : n, [z, n]), W = Z((E) => {
    const R = O.indexOf(E);
    for (let $ = R - 1; $ >= 0; $--) {
      const b = O[$];
      if (z(b) && (!z(E) || E.parentId === b.id))
        return [b, $];
    }
  }, [z, O]), ne = Z((E) => {
    if (z(E))
      return E.id;
    if (typeof r == "function")
      return r(E);
    const R = W(E);
    if (R !== void 0) {
      const {
        startRowIndex: $,
        childRows: b
      } = R[0], H = b.indexOf(E);
      return $ + H + 1;
    }
    return O.indexOf(E);
  }, [W, z, r, O]), _ = G(() => {
    if (a == null) return null;
    gt(r);
    const E = new Set(a);
    for (const R of O)
      z(R) && R.childRows.every((b) => a.has(r(b))) && E.add(R.id);
    return E;
  }, [z, r, a, O]);
  function se(E) {
    if (!s) return;
    gt(r);
    const R = new Set(a);
    for (const $ of O) {
      const b = ne($);
      if (_ != null && _.has(b) && !E.has(b))
        if (z($))
          for (const H of $.childRows)
            R.delete(r(H));
        else
          R.delete(b);
      else if (!(_ != null && _.has(b)) && E.has(b))
        if (z($))
          for (const H of $.childRows)
            R.add(r(H));
        else
          R.add(b);
    }
    s(R);
  }
  function we(E, R) {
    if (o == null || o(E, R), R.isGridDefaultPrevented() || E.mode === "EDIT") return;
    const {
      column: $,
      rowIdx: b,
      selectCell: H
    } = E, U = ($ == null ? void 0 : $.idx) ?? -1, j = O[b];
    if (z(j)) {
      if (U === -1 && (R.key === D && j.isExpanded || R.key === S && !j.isExpanded) && (R.preventDefault(), R.preventGridDefault(), Ie(j.id)), U === -1 && R.key === D && !j.isExpanded && j.level !== 0) {
        const te = W(j);
        te !== void 0 && (R.preventGridDefault(), H({
          idx: U,
          rowIdx: te[1]
        }));
      }
      Ht(R) && (R.keyCode === 67 || R.keyCode === 86) && R.preventGridDefault();
    }
  }
  function Se(E, {
    indexes: R,
    column: $
  }) {
    if (!i) return;
    const b = [...t], H = [];
    for (const U of R) {
      const j = t.indexOf(O[U]);
      b[j] = E[U], H.push(j);
    }
    i(b, {
      indexes: H,
      column: $
    });
  }
  function Ie(E) {
    const R = new Set(f);
    R.has(E) ? R.delete(E) : R.add(E), m(R);
  }
  function ze(E, {
    row: R,
    rowClass: $,
    onCellClick: b,
    onCellDoubleClick: H,
    onCellContextMenu: U,
    onRowChange: j,
    lastFrozenColumnIndex: te,
    copiedCellIdx: ae,
    draggedOverCellIdx: de,
    setDraggedOverRowIdx: Y,
    selectedCellEditor: X,
    ...K
  }) {
    if (z(R)) {
      const {
        startRowIndex: he
      } = R;
      return /* @__PURE__ */ p(Va, {
        ...K,
        "aria-rowindex": C + he + 1,
        row: R,
        groupBy: v,
        toggleGroup: I
      }, E);
    }
    let ye = K["aria-rowindex"];
    const Ce = W(R);
    if (Ce !== void 0) {
      const {
        startRowIndex: he,
        childRows: rt
      } = Ce[0], We = rt.indexOf(R);
      ye = he + C + We + 2;
    }
    return g(E, {
      ...K,
      "aria-rowindex": ye,
      row: R,
      rowClass: $,
      onCellClick: b,
      onCellDoubleClick: H,
      onCellContextMenu: U,
      onRowChange: j,
      lastFrozenColumnIndex: te,
      copiedCellIdx: ae,
      draggedOverCellIdx: de,
      setDraggedOverRowIdx: Y,
      selectedCellEditor: X
    });
  }
  return /* @__PURE__ */ p(_r, {
    ...l,
    role: "treegrid",
    "aria-rowcount": P + 1 + (((le = l.topSummaryRows) == null ? void 0 : le.length) ?? 0) + (((Te = l.bottomSummaryRows) == null ? void 0 : Te.length) ?? 0),
    ref: x,
    columns: L,
    rows: O,
    rowHeight: A,
    rowKeyGetter: ne,
    onRowsChange: Se,
    selectedRows: _,
    onSelectedRowsChange: se,
    onCellKeyDown: we,
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
  return /* @__PURE__ */ p("input", {
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
`, vt = Ee.createContext({
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
  const [d, w] = Ee.useState(0), [f, m] = Ee.useState(
    null
  ), [l, x] = Ee.useState([]), u = Z(
    (I) => {
      localStorage.setItem(i, JSON.stringify(I)), w((L) => L + 1), x(I);
    },
    [i]
  ), g = JSON.stringify(r ?? []), C = G(
    () => JSON.parse(g),
    [g]
  );
  _e(() => {
    const I = localStorage.getItem(i);
    if (I) {
      const L = JSON.parse(I);
      u(Array.isArray(L) ? L : []);
    } else
      u(C);
  }, [i, C, u]);
  const k = Z(
    (I) => {
      u(I), a == null || a(I);
    },
    [u, a]
  ), D = Z(() => {
    k(C), s == null || s();
  }, [k, C, s]), S = G(
    () => e.filter((I) => !(n != null && n.includes(I.key))),
    [e, n]
  );
  return /* @__PURE__ */ p(
    vt.Provider,
    {
      value: {
        gridKey: `data-grid-${d}`,
        chooserAnchor: f,
        setChooserAnchor: m,
        columns: S,
        hiddenColumn: l,
        setHiddenColumn: k,
        resetHiddenColumns: D,
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
  const { setChooserAnchor: t } = ke(vt), n = Ee.useRef(null), r = Z(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ p("div", { ref: n, children: /* @__PURE__ */ p(e, { onClick: r }) });
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
  }, [i, o]), d = Z(
    (w) => () => {
      const f = t.indexOf(w);
      n(
        f === -1 ? [...t, w] : t.filter((m) => m !== w)
      );
    },
    [t, n]
  );
  return /* @__PURE__ */ ie(
    qo,
    {
      id: "column-visibility-menu",
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      transformOrigin: { vertical: "top", horizontal: "right" },
      open: r !== null,
      onClose: s,
      children: [
        e.map((w) => /* @__PURE__ */ ie(as, { onClick: d(w.key), children: [
          /* @__PURE__ */ p(vn, { checked: !t.includes(w.key) }),
          w.name
        ] }, w.key)),
        a && /* @__PURE__ */ p(Xo, {}),
        a && /* @__PURE__ */ p(kr, { onClick: c, children: a })
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
        const c = Number(a), d = Number(s);
        return isNaN(c) || isNaN(d) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(c) ? 1 : -1) : c - d;
      } else if (t === et.DATE) {
        const c = new Date(a).getTime(), d = new Date(s).getTime();
        return isNaN(c) || isNaN(d) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(c) ? 1 : -1) : c - d;
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
  defaultSortColumns: n
}) => {
  const [r, o] = re(n ?? []), i = G(() => r.length === 0 ? t : [...t].sort((s, c) => {
    for (const d of r) {
      const w = e.find((l) => l.key === d.columnKey), m = cs(
        d.columnKey,
        w == null ? void 0 : w.type,
        w == null ? void 0 : w.sortComparator,
        w == null ? void 0 : w.getColumnValue
      )(s, c);
      if (m !== 0)
        return d.direction === "ASC" ? m : -m;
    }
    return 0;
  }), [t, r]), a = Z((s) => {
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
`, ws = () => /* @__PURE__ */ p("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ p("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), Ur = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ p(
    ms,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), Gr(t, e.id);
      },
      children: /* @__PURE__ */ p(ws, {})
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
  renderCell: ({ row: t }) => /* @__PURE__ */ p(Ur, { row: t, expandable: e })
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
      var d;
      const c = kn(s.row);
      return c ? t(c) : ((d = a.renderCell) == null ? void 0 : d.call(a, s)) ?? null;
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
`, Dn = Ee.createContext({
  filters: {},
  setFilters: () => {
  }
}), ks = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Ee.useState({});
  return /* @__PURE__ */ p(
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
  return /* @__PURE__ */ p(
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
      renderInput: t || ((o) => /* @__PURE__ */ p(
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
`, Nt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ ie(Ss, { children: [
  Wr(t),
  e
] }), Is = (e) => (t) => {
  const { filters: n, setFilters: r } = ke(Dn), o = G(() => n[e.key], [n, e]), i = Z(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ p(on, { ...t, children: /* @__PURE__ */ p(
    Ds,
    {
      options: e.filterOptions ?? [],
      onChange: i,
      value: o,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ p(on, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (a) => i(a.target.value),
    value: o ?? "",
    autoComplete: "off",
    onClick: Nt,
    onKeyDown: Nt
  }) : /* @__PURE__ */ p(
    qr,
    {
      autoComplete: "off",
      onClick: Nt,
      onKeyDown: Nt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ p(on, { ...t });
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
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Us(s, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Bs(s, (f) => f.test(a))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const w = t.slice(a.length);
    return { value: d, rest: w };
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
  var s, c, d, w;
  const n = kt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((w = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : w.weekStartsOn) ?? 0, o = De(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
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
  var w, f, m, l;
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = kt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (w = t == null ? void 0 : t.locale) == null ? void 0 : w.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((l = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = Le((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = pt(a, t), c = Le((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const d = pt(c, t);
  return +n >= +s ? r + 1 : +n >= +d ? r : r - 1;
}
function gc(e, t) {
  var s, c, d, w;
  const n = kt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((w = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = Zr(e, t), i = Le((t == null ? void 0 : t.in) || e, 0);
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
  var w, f, m, l, x, u, g, C;
  const r = kt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ic, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((l = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((C = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : C.weekStartsOn) ?? 0, s = De(e, n == null ? void 0 : n.in);
  if (!eo(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Ic).map((k) => {
    const D = k[0];
    if (D === "p" || D === "P") {
      const S = yc[D];
      return S(k, o.formatLong);
    }
    return k;
  }).join("").match(Sc).map((k) => {
    if (k === "''")
      return { isToken: !1, value: "'" };
    const D = k[0];
    if (D === "'")
      return { isToken: !1, value: Pc(k) };
    if (ar[D])
      return { isToken: !0, value: k };
    if (D.match(Ec))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + D + "`"
      );
    return { isToken: !1, value: k };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((k) => {
    if (!k.isToken) return k.value;
    const D = k.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && vc(D) || !(n != null && n.useAdditionalDayOfYearTokens) && Cc(D)) && kc(D, t, String(e));
    const S = ar[D[0]];
    return S(s, D, o.localize, d);
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
const Xc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, yr = 6e4, Vc = 2, ce = {
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
    let c = 0, d;
    if (r.time && (c = el(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (d = Sn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = wr(new Date(s + c)), d = wr(new Date(s + c + d));
    return new Date(s + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Zc(e) {
  const t = {};
  let n = ce.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ce.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ce.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Qc(e, t) {
  if (e) {
    const n = ce.YYY[t], r = ce.YYYYY[t];
    let o = ce.YYYY.exec(e) || r.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = ce.YY.exec(e) || n.exec(e), o) {
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
  let i = ce.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, br(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = ce.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return rl(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ce.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return br(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ce.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, xr(o) ? pr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = ce.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return xr(o, a) ? pr(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function el(e) {
  let t, n, r = ce.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), un(t) ? t % 24 * dn : NaN;
  if (r = ce.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), un(t, n) ? t % 24 * dn + n * yr : NaN;
  if (r = ce.HHMMSS.exec(e), r) {
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
      const s = i.indexOf(a), c = i[s - 1] === "'", d = i.replace(a, "'" + Kc[a[0]](o, a, n) + "'");
      return c ? d.substring(0, s - 1) + d.substring(s + 1) : d;
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
  const { enabled: c, hiddenColumn: d } = ke(vt), w = Z((f) => {
    const m = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === et.DATE)
        return ({ row: u }) => {
          var g, C;
          return cl(
            u[f.key],
            ((g = f.dateOptions) == null ? void 0 : g.formatDate) ?? oo.DATE_WITH_TIME,
            (C = f.dateOptions) == null ? void 0 : C.timeZone
          );
        };
    }, l = () => f.renderHeaderCell ? f.renderHeaderCell : Is(f), x = {
      ...f,
      renderCell: m(),
      renderHeaderCell: l()
    };
    return f.frozenRight && (x.frozen = !1, x.cellClass = typeof f.cellClass == "function" ? (u) => hn(
      fn,
      f.cellClass(u)
    ) : hn(fn, f.cellClass), x.headerCellClass = hn(fn, f.headerCellClass)), x;
  }, []);
  return G(() => {
    const f = [];
    if (t && !n && f.push(bs(t)), n) {
      const m = (r ?? []).map((g) => g.id), l = m.length > 0 && m.every((g) => o == null ? void 0 : o.includes(g)), x = (g) => {
        const C = (o ?? []).filter((k) => !m.includes(k));
        return g ? [...C, ...m] : C;
      }, u = t ? 50 + mt : 50;
      f.push({
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
        renderHeaderCell: () => /* @__PURE__ */ ie(nr, { children: [
          t && /* @__PURE__ */ p(ps, { "aria-hidden": !0 }),
          a ? a({
            checked: l,
            "aria-label": s,
            onChange: (g) => i == null ? void 0 : i(x(g))
          }) : /* @__PURE__ */ p(
            vn,
            {
              checked: l,
              slotProps: { input: { "aria-label": s } },
              onChange: (g, C) => i == null ? void 0 : i(x(C))
            }
          )
        ] }),
        renderCell: t ? (g) => {
          var C;
          return /* @__PURE__ */ ie(nr, { children: [
            /* @__PURE__ */ p(Ur, { row: g.row, expandable: t }),
            (C = dt.renderCell) == null ? void 0 : C.call(dt, g)
          ] });
        } : dt.renderCell
      });
    }
    return f.push(...e.map((m) => w(m))), c && d ? f.filter((m) => !d.includes(m.key)) : f;
  }, [
    e,
    t,
    w,
    c,
    d,
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
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, d = e.size, w = d === void 0 ? 15 : d, f = e.margin, m = f === void 0 ? 2 : f, l = hl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), x = $t({ display: "inherit" }, c), u = function(g) {
    return {
      backgroundColor: o,
      width: gn(w),
      height: gn(w),
      margin: gn(m),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(gl, " ").concat(0.75 / a, "s ").concat(g * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Ot.createElement(
    "span",
    $t({ style: x }, l),
    Ot.createElement("span", { style: u(1) }),
    Ot.createElement("span", { style: u(2) }),
    Ot.createElement("span", { style: u(3) })
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
`, xl = Ee.memo(
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
      (d, w) => {
        t(w);
      },
      [t]
    ), c = Z(
      (d) => {
        n(parseInt(d.target.value, 10)), t(0);
      },
      [n, t]
    );
    return /* @__PURE__ */ ie(pl, { children: [
      a ? /* @__PURE__ */ p(bl, { children: a(o) }) : null,
      /* @__PURE__ */ p(
        ei,
        {
          labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ p("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
          labelDisplayedRows: ({ from: d, to: w, count: f }) => `${d}-${w} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${f}`,
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
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = re(0), [c, d] = re(e), w = n !== void 0, f = o !== void 0, m = w ? n : a, l = f ? o : c, x = Z(
    (k) => {
      w || s(k), r == null || r(k);
    },
    [w, r]
  ), u = Z(
    (k) => {
      f || d(k), i == null || i(k);
    },
    [f, i]
  ), g = Z(() => {
    x(0), u(e);
  }, [x, u, e]), C = ve(l);
  return _e(() => {
    C.current !== l && (C.current = l, x(0));
  }, [l]), {
    currentPage: m,
    pageSize: l,
    defaultPageSize: e,
    setCurrentPage: x,
    setPageSize: u,
    resetPagination: g
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
`, Sl = Ee.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = Z(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ p(
      vn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), Il = (e) => /* @__PURE__ */ p(Sl, { ...e }), Tl = "Select all rows", Rl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  selectedRows: s,
  onSelectedRowsChange: c,
  selectAllLabel: d = Tl,
  noDataMessage: w,
  filters: f,
  setFilters: m,
  pagination: l,
  renderers: x,
  expandable: u,
  rowGestures: g,
  rowHeight: C,
  rowClass: k,
  onCellClick: D,
  onColumnResize: S,
  ...I
}) => {
  var ae, de;
  const { gridKey: L } = ke(vt), { pageSize: v, currentPage: T, setCurrentPage: P, setPageSize: O } = vl(
    l == null ? void 0 : l.defaultPageSize,
    l == null ? void 0 : l.control
  ), z = (x == null ? void 0 : x.renderCheckbox) ?? Il, A = ll({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c,
    renderCheckbox: z,
    selectAllLabel: d
  }), W = G(() => A.map((Y) => Y.key).join("|"), [A]), ne = G(
    () => A.some((Y) => Y.filterEnabled),
    [A]
  ), _ = G(
    () => (l == null ? void 0 : l.enabled) && !l.remotePagination,
    [l]
  ), se = G(() => !m, [m]), we = yl({
    columns: A,
    rows: n,
    enabled: se
  }), Se = G(() => !i, [i]), {
    sortedRows: Ie,
    sortColumns: ze,
    setSortedColumns: Pe
  } = ls({
    columns: A,
    rows: we,
    defaultSortColumns: a
  }), le = G(() => {
    if (!_)
      return T;
    const Y = Math.max(0, Math.ceil(we.length / v) - 1);
    return Math.min(T, Y);
  }, [_, T, v, we.length]);
  _e(() => {
    le !== T && P(le);
  }, [le, T, P]);
  const Te = G(() => _ ? Ie.slice(le * v, (le + 1) * v) : Ie, [Ie, _, le, v]), E = G(
    () => u ? gs(Te, u.expandedIds) : Te,
    [u, Te]
  ), R = G(
    () => u ? xs(A, u.renderDetail) : A,
    [u, A]
  ), $ = G(() => {
    const Y = R.filter((K) => K.key === mn), X = R.filter((K) => K.key !== mn);
    return [
      ...Y,
      ...X.filter((K) => K.frozen),
      ...X.filter((K) => !K.frozen)
    ];
  }, [R]), b = Z(
    (Y, X) => {
      const K = $[Y];
      K && (S == null || S(K.key, X));
    },
    [$, S]
  ), H = Z(
    (Y, X) => {
      const K = () => {
        const ye = vs(Y, u == null ? void 0 : u.expandedIds);
        return ye || (X === 0 ? "first-row" : X === n.length - 1 ? "last-row" : "");
      };
      return [k == null ? void 0 : k(Y, X), K()].filter(Boolean).join(" ");
    },
    [n, u == null ? void 0 : u.expandedIds, k]
  ), U = Z(
    (Y) => {
      g != null && g.onClick ? g.onClick(Y) : u && Gr(u, Y.id);
    },
    [g, u]
  ), j = Z(
    (Y, X) => {
      if (D == null || D(Y, X), X.isGridDefaultPrevented() || !u && !(g != null && g.onClick))
        return;
      const K = window.getSelection();
      K && !K.isCollapsed && X.target instanceof Node && K.containsNode(X.target, !0) || jr(
        Y.row,
        Y.column.key,
        X.target,
        g == null ? void 0 : g.excludedColumns
      ) && U(Y.row);
    },
    [D, u, g, U]
  ), te = !(l != null && l.remotePagination);
  return _e(() => {
    if (!te)
      return;
    const Y = s == null ? void 0 : s.filter(
      (X) => n.some((K) => K.id === X)
    );
    (Y == null ? void 0 : Y.length) != (s == null ? void 0 : s.length) && (c == null || c(Y ?? []));
  }, [n, s, te]), /* @__PURE__ */ ie(rs, { $pagination: !!(l != null && l.enabled), children: [
    /* @__PURE__ */ p("div", { children: /* @__PURE__ */ p(
      _r,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: (Y) => {
          c == null || c(Array.from(Y));
        },
        rowKeyGetter: (Y) => Y.id,
        rows: E,
        onSortColumnsChange: Se ? Pe : i,
        sortColumns: Se ? ze : o,
        columns: R,
        rowClass: H,
        headerRowHeight: ne ? 70 : void 0,
        onCellClick: j,
        onColumnResize: S ? b : void 0,
        enableVirtualization: R.some((Y) => Y.frozenRight) ? !1 : void 0,
        ...I,
        rowHeight: u ? Cs(
          C,
          vr,
          u.detailHeight ?? ds
        ) : C ?? vr,
        renderers: {
          renderCheckbox: z,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...w != null && !t ? {
            noRowsFallback: /* @__PURE__ */ p("div", { className: "rdg-no-data", children: w })
          } : {},
          ...x
        },
        style: { ...ns, ...e ?? {} }
      },
      `${L}:${W}`
    ) }),
    l != null && l.enabled ? /* @__PURE__ */ p(
      xl,
      {
        ...(l == null ? void 0 : l.remotePagination) ?? {
          currentPage: le,
          setCurrentPage: P,
          pageSize: v,
          setPageSize: O,
          totalCount: we.length
        },
        labels: l.labels ?? ((ae = l.remotePagination) == null ? void 0 : ae.labels),
        totalLabel: l.totalLabel ?? ((de = l.remotePagination) == null ? void 0 : de.totalLabel)
      }
    ) : null,
    t ? /* @__PURE__ */ ie(kl, { children: [
      /* @__PURE__ */ p(Dl, {}),
      /* @__PURE__ */ p(ml, { color: ee.primary500 })
    ] }) : null,
    /* @__PURE__ */ p(ss, {})
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
    resetLabel: d
  } = {},
  ...w
}) => /* @__PURE__ */ p(ks, { filters: e, setFilters: t, children: /* @__PURE__ */ p(
  is,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    onReset: c,
    resetLabel: d,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ p(Rl, { ...w, columns: n, filters: e, setFilters: t })
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
