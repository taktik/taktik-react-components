import { jsx as y, jsxs as re, Fragment as wn } from "react/jsx-runtime";
import * as Ot from "react";
import pe, { createContext as bt, memo as We, forwardRef as yn, useContext as Se, useMemo as U, useCallback as Q, useRef as ke, useEffect as Ge, useState as ee, useImperativeHandle as Go, useLayoutEffect as _o, useId as Bo } from "react";
import { flushSync as Ft } from "react-dom";
import Ie from "@emotion/styled";
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
function Me() {
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
function ei(e) {
  return Ht(e) && e.keyCode !== 86 ? !1 : !Jo.has(e.key);
}
function ti({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const ni = "mlln6zg7-0-0-beta-47";
function ri(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: o
  }) => /* @__PURE__ */ y("div", {
    className: ni,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function oi({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], o = n[e.rowIdx];
  return Dr(r, o);
}
function Dr(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function ii({
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
    return ge(a, i, {
      type: "HEADER"
    });
  if (t && r > o && r <= s + o)
    return ge(a, i, {
      type: "SUMMARY",
      row: t[r + s]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return ge(a, i, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return ge(a, i, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function ai({
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
  maxRowIdx: b,
  currentPosition: {
    idx: f,
    rowIdx: h
  },
  nextPosition: l,
  lastFrozenColumnIndex: C,
  isCellWithinBounds: u
}) {
  let {
    idx: w,
    rowIdx: v
  } = l;
  const x = r.length, S = (W) => {
    for (const D of o) {
      const R = D.idx;
      if (R > w) break;
      const F = ii({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: v,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: C,
        column: D
      });
      if (F && w > R && w < F + R) {
        w = R + (W ? F : 0);
        break;
      }
    }
  }, T = (W) => W.level + d, E = () => {
    if (t) {
      let D = r[w].parent;
      for (; D !== void 0; ) {
        const R = T(D);
        if (v === R) {
          w = D.idx + D.colSpan;
          break;
        }
        D = D.parent;
      }
    } else if (e) {
      let D = r[w].parent, R = !1;
      for (; D !== void 0; ) {
        const F = T(D);
        if (v >= F) {
          w = D.idx, v = F, R = !0;
          break;
        }
        D = D.parent;
      }
      R || (w = f, v = h);
    }
  };
  if (u(l) && (S(t), v < d && E()), n === "CHANGE_ROW" && (w === x ? v === b || (w = 0, v += 1) : w === -1 && (v === c || (v -= 1, w = x - 1), S(!1))), v < d) {
    let D = r[w].parent;
    const R = v;
    for (v = d; D !== void 0; ) {
      const F = T(D);
      F >= R && (v = F, w = D.idx), D = D.parent;
    }
  }
  return {
    idx: w,
    rowIdx: v
  };
}
function si({
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
const ci = "cj343x07-0-0-beta-47", kr = `rdg-cell ${ci}`, li = "csofj7r7-0-0-beta-47", di = `rdg-cell-frozen ${li}`;
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
  return Me(kr, ...t, e.frozen && di);
}
const {
  min: wt,
  max: Lt,
  floor: Vn,
  sign: ui,
  abs: fi
} = Math;
function gt(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Ir(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = Lt(e, t), typeof n == "number" && n >= t ? wt(e, n) : e;
}
function Rr(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const hi = "c1bn88vv7-0-0-beta-47", gi = `rdg-checkbox-input ${hi}`;
function mi({
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
    className: gi,
    onChange: r,
    ...n
  });
}
const wi = "g1s9ylgp7-0-0-beta-47", yi = `rdg-group-cell-content ${wi}`, pi = "cz54e4y7-0-0-beta-47", bi = `rdg-caret ${pi}`;
function Ci(e) {
  return /* @__PURE__ */ y(xi, {
    ...e
  });
}
function xi({
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
  return /* @__PURE__ */ re("span", {
    className: yi,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ y("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: bi,
      "aria-hidden": !0,
      children: /* @__PURE__ */ y("path", {
        d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7"
      })
    })]
  });
}
function vi(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Tr = /* @__PURE__ */ bt(void 0), Di = Tr.Provider;
function At() {
  return Se(Tr);
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
  const s = At().renderCheckbox;
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
const Er = /* @__PURE__ */ bt(void 0), Mr = Er.Provider, Or = /* @__PURE__ */ bt(void 0), ki = Or.Provider;
function Pr() {
  const e = Se(Er), t = Se(Or);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Nr = /* @__PURE__ */ bt(void 0), Si = Nr.Provider, Fr = /* @__PURE__ */ bt(void 0), Ii = Fr.Provider;
function Ri() {
  const e = Se(Nr), t = Se(Fr);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const _e = "rdg-select-column";
function Ti(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Ri();
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
function Ei(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Pr();
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
function Mi(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Pr();
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
  key: _e,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ y(Ti, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ y(Ei, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ y(Mi, {
      ...e
    });
  }
}, Oi = "auto", Pi = 50;
function Ni({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? Oi, s = (t == null ? void 0 : t.minWidth) ?? Pi, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? vi, b = (t == null ? void 0 : t.sortable) ?? !1, f = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: l,
    colSpanColumns: C,
    lastFrozenColumnIndex: u,
    headerRowsCount: w
  } = U(() => {
    let D = -1, R = 1;
    const F = [];
    I(e, 1);
    function I(A, L, J) {
      for (const G of A) {
        if ("children" in G) {
          const Re = {
            name: G.name,
            parent: J,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: G.headerCellClass
          };
          I(G.children, L + 1, Re);
          continue;
        }
        const ne = G.frozen ?? !1, me = {
          ...G,
          parent: J,
          idx: 0,
          level: 0,
          frozen: ne,
          width: G.width ?? a,
          minWidth: G.minWidth ?? s,
          maxWidth: G.maxWidth ?? c,
          sortable: G.sortable ?? b,
          resizable: G.resizable ?? f,
          draggable: G.draggable ?? h,
          renderCell: G.renderCell ?? d
        };
        F.push(me), ne && D++, L > R && (R = L);
      }
    }
    F.sort(({
      key: A,
      frozen: L
    }, {
      key: J,
      frozen: G
    }) => A === _e ? -1 : J === _e ? 1 : L ? G ? 0 : -1 : G ? 1 : 0);
    const z = [];
    return F.forEach((A, L) => {
      A.idx = L, Hr(A, L, 0), A.colSpan != null && z.push(A);
    }), {
      columns: F,
      colSpanColumns: z,
      lastFrozenColumnIndex: D,
      headerRowsCount: R
    };
  }, [e, a, s, c, d, f, b, h]), {
    templateColumns: v,
    layoutCssVars: x,
    totalFrozenColumnWidth: S,
    columnMetrics: T
  } = U(() => {
    const D = /* @__PURE__ */ new Map();
    let R = 0, F = 0;
    const I = [];
    for (const A of l) {
      let L = n(A);
      typeof L == "number" ? L = Ir(L, A) : L = A.minWidth, I.push(`${L}px`), D.set(A, {
        width: L,
        left: R
      }), R += L;
    }
    if (u !== -1) {
      const A = D.get(l[u]);
      F = A.left + A.width;
    }
    const z = {};
    for (let A = 0; A <= u; A++) {
      const L = l[A];
      z[`--rdg-frozen-left-${L.idx}`] = `${D.get(L).left}px`;
    }
    return {
      templateColumns: I,
      layoutCssVars: z,
      totalFrozenColumnWidth: F,
      columnMetrics: D
    };
  }, [n, l, u]), [E, W] = U(() => {
    if (!i)
      return [0, l.length - 1];
    const D = o + S, R = o + r, F = l.length - 1, I = wt(u + 1, F);
    if (D >= R)
      return [I, I];
    let z = I;
    for (; z < F; ) {
      const {
        left: G,
        width: ne
      } = T.get(l[z]);
      if (G + ne > D)
        break;
      z++;
    }
    let A = z;
    for (; A < F; ) {
      const {
        left: G,
        width: ne
      } = T.get(l[A]);
      if (G + ne >= R)
        break;
      A++;
    }
    const L = Lt(I, z - 1), J = wt(F, A + 1);
    return [L, J];
  }, [T, l, u, o, S, r, i]);
  return {
    columns: l,
    colSpanColumns: C,
    colOverscanStartIdx: E,
    colOverscanEndIdx: W,
    templateColumns: v,
    layoutCssVars: x,
    headerRowsCount: w,
    lastFrozenColumnIndex: u,
    totalFrozenColumnWidth: S
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
function Fi(e, t, n, r, o, i, a, s, c, d) {
  const b = ke(o), f = e.length === t.length, h = f && o !== b.current, l = [...n], C = [];
  for (const {
    key: x,
    idx: S,
    width: T
  } of t)
    typeof T == "string" && (h || !a.has(x)) && !i.has(x) && (l[S] = T, C.push(x));
  const u = l.join(" ");
  tt(() => {
    b.current = o, w(C);
  });
  function w(x) {
    x.length !== 0 && c((S) => {
      const T = new Map(S);
      let E = !1;
      for (const W of x) {
        const D = Zn(r, W);
        E || (E = D !== S.get(W)), D === void 0 ? T.delete(W) : T.set(W, D);
      }
      return E ? T : S;
    });
  }
  function v(x, S) {
    const {
      key: T
    } = x, E = [...n], W = [];
    for (const {
      key: R,
      idx: F,
      width: I
    } of t)
      if (T === R) {
        const z = typeof S == "number" ? `${S}px` : S;
        E[F] = z;
      } else f && typeof I == "string" && !i.has(R) && (E[F] = I, W.push(R));
    r.current.style.gridTemplateColumns = E.join(" ");
    const D = typeof S == "number" ? S : Zn(r, T);
    Ft(() => {
      s((R) => {
        const F = new Map(R);
        return F.set(T, D), F;
      }), w(W);
    }), d == null || d(x.idx, D);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: v
  };
}
function Zn(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Hi() {
  const e = ke(null), [t, n] = ee(1), [r, o] = ee(1), [i, a] = ee(0);
  return tt(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: d,
      offsetWidth: b,
      offsetHeight: f
    } = e.current, {
      width: h,
      height: l
    } = e.current.getBoundingClientRect(), C = f - d, u = h - b + c, w = l - C;
    n(u), o(w), a(C);
    const v = new s((x) => {
      const S = x[0].contentBoxSize[0], {
        clientHeight: T,
        offsetHeight: E
      } = e.current;
      Ft(() => {
        n(S.inlineSize), o(S.blockSize), a(E - T);
      });
    });
    return v.observe(e.current), () => {
      v.disconnect();
    };
  }, []), [e, t, r, i];
}
function se(e) {
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
  const [t, n] = ee(!1);
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
function Li({
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
  const b = U(() => {
    if (i === 0) return 0;
    let f = i;
    const h = (l, C) => C !== void 0 && l + C > i ? (f = l, !0) : !1;
    for (const l of t) {
      const C = l.idx;
      if (C >= f || h(C, ge(l, s, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const w = n[u];
        if (h(C, ge(l, s, {
          type: "ROW",
          row: w
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (h(C, ge(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (o != null) {
        for (const u of o)
          if (h(C, ge(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
    }
    return f;
  }, [c, d, n, r, o, i, s, t]);
  return U(() => {
    const f = [];
    for (let h = 0; h <= a; h++) {
      const l = e[h];
      h < b && !l.frozen || f.push(l);
    }
    return f;
  }, [b, a, e]);
}
function Wi({
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
  } = U(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (w) => w * t,
        getRowHeight: () => t,
        findRowIdx: (w) => Vn(w / t)
      };
    let h = 0, l = " ";
    const C = e.map((w) => {
      const v = t(w), x = {
        top: h,
        height: v
      };
      return l += `${v}px `, h += v, x;
    }), u = (w) => Lt(0, wt(e.length - 1, w));
    return {
      totalRowHeight: h,
      gridTemplateRows: l,
      getRowTop: (w) => C[u(w)].top,
      getRowHeight: (w) => C[u(w)].height,
      findRowIdx(w) {
        let v = 0, x = C.length - 1;
        for (; v <= x; ) {
          const S = v + Vn((x - v) / 2), T = C[S].top;
          if (T === w) return S;
          if (T < w ? v = S + 1 : T > w && (x = S - 1), v > x) return x;
        }
        return 0;
      }
    };
  }, [t, e]);
  let b = 0, f = e.length - 1;
  if (o) {
    const l = d(r), C = d(r + n);
    b = Lt(0, l - 4), f = wt(e.length - 1, C + 4);
  }
  return {
    rowOverscanStartIdx: b,
    rowOverscanEndIdx: f,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: d
  };
}
const zi = "c1w9bbhr7-0-0-beta-47", $i = "c1creorc7-0-0-beta-47", Yi = `rdg-cell-drag-handle ${zi}`;
function Ai({
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
  onFill: b,
  onClick: f,
  setDragging: h,
  setDraggedOverRowIdx: l
}) {
  const {
    idx: C,
    rowIdx: u
  } = a;
  function w(E) {
    if (E.preventDefault(), E.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", W), window.addEventListener("mouseup", D);
    function W(R) {
      R.buttons !== 1 && D();
    }
    function D() {
      window.removeEventListener("mouseover", W), window.removeEventListener("mouseup", D), h(!1), v();
    }
  }
  function v() {
    const E = s.current;
    if (E === void 0) return;
    const W = u < E ? u + 1 : E, D = u < E ? E + 1 : u;
    S(W, D), l(void 0);
  }
  function x(E) {
    E.stopPropagation(), S(u + 1, t.length);
  }
  function S(E, W) {
    const D = t[u], R = [...t], F = [];
    for (let I = E; I < W; I++)
      if (c({
        rowIdx: I,
        idx: C
      })) {
        const z = b({
          columnKey: n.key,
          sourceRow: D,
          targetRow: t[I]
        });
        z !== t[I] && (R[I] = z, F.push(I));
      }
    F.length > 0 && (d == null || d(R, {
      indexes: F,
      column: n
    }));
  }
  function T() {
    var I;
    const E = ((I = n.colSpan) == null ? void 0 : I.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: W,
      ...D
    } = nt(n, E), R = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", F = n.idx + E - 1 === o;
    return {
      ...D,
      gridRowStart: e,
      marginInlineEnd: F ? void 0 : R,
      marginBlockEnd: i ? void 0 : R,
      insetInlineStart: W ? `calc(${W} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ y("div", {
    style: T(),
    className: Me(Yi, n.frozen && $i),
    onClick: f,
    onMouseDown: w,
    onDoubleClick: x
  });
}
const Gi = "cis5rrm7-0-0-beta-47";
function _i({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: o,
  closeEditor: i,
  onKeyDown: a,
  navigate: s
}) {
  var v, x, S;
  const c = ke(void 0), d = ((v = e.editorOptions) == null ? void 0 : v.commitOnOutsideClick) !== !1, b = se(() => {
    l(!0, !1);
  });
  Ge(() => {
    if (!d) return;
    function T() {
      c.current = requestAnimationFrame(b);
    }
    return addEventListener("mousedown", T, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", T, {
        capture: !0
      }), f();
    };
  }, [d, b]);
  function f() {
    cancelAnimationFrame(c.current);
  }
  function h(T) {
    if (a) {
      const E = ht(T);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(T);
        },
        onClose: l
      }, E), E.isGridDefaultPrevented()) return;
    }
    T.key === "Escape" ? l() : T.key === "Enter" ? l(!0) : ti(T) && s(T);
  }
  function l(T = !1, E = !0) {
    T ? o(n, !0, E) : i(E);
  }
  function C(T, E = !1) {
    o(T, E, E);
  }
  const {
    cellClass: u
  } = e, w = Ct(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((x = e.editorOptions) != null && x.displayCellContent) && Gi);
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: w,
    style: nt(e, t),
    onKeyDown: h,
    onMouseDownCapture: f,
    children: e.renderEditCell != null && /* @__PURE__ */ re(wn, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: C,
        onClose: l
      }), ((S = e.editorOptions) == null ? void 0 : S.displayCellContent) && e.renderCell({
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
function Bi({
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
  } = e, s = Rr(e, t), c = e.idx + 1;
  function d() {
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
    className: Me(kr, e.headerCellClass),
    style: {
      ...Sr(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onClick: d,
    children: e.name
  });
}
const Ui = "h44jtk67-0-0-beta-47", ji = "hcgkhxz7-0-0-beta-47", Ki = `rdg-header-sort-name ${ji}`;
function Lr({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ y(qi, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function qi({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = At().renderSortStatus;
  return /* @__PURE__ */ re("span", {
    className: Ui,
    children: [/* @__PURE__ */ y("span", {
      className: Ki,
      children: n
    }), /* @__PURE__ */ y("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Xi = "c6l2wv17-0-0-beta-47", Vi = "c1kqdw7y7-0-0-beta-47", Zi = `rdg-cell-resizable ${Vi}`, Qi = "r1y6ywlx7-0-0-beta-47", Ji = "rdg-cell-draggable", ea = "c1bezg5o7-0-0-beta-47", ta = `rdg-cell-dragging ${ea}`, na = "c1vc96037-0-0-beta-47", ra = `rdg-cell-drag-over ${na}`;
function oa({
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
  direction: b,
  dragDropKey: f
}) {
  const [h, l] = ee(!1), [C, u] = ee(!1), w = b === "rtl", v = Rr(e, n), {
    tabIndex: x,
    childTabIndex: S,
    onFocus: T
  } = xt(r), E = a == null ? void 0 : a.findIndex((p) => p.columnKey === e.key), W = E !== void 0 && E > -1 ? a[E] : void 0, D = W == null ? void 0 : W.direction, R = W !== void 0 && a.length > 1 ? E + 1 : void 0, F = D && !R ? D === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: I,
    resizable: z,
    draggable: A
  } = e, L = Ct(e, e.headerCellClass, I && Xi, z && Zi, A && Ji, h && ta, C && ra), J = e.renderHeaderCell ?? Lr;
  function G(p) {
    if (p.pointerType === "mouse" && p.buttons !== 1)
      return;
    p.preventDefault();
    const {
      currentTarget: k,
      pointerId: Y
    } = p, B = k.parentElement, {
      right: Z,
      left: le
    } = B.getBoundingClientRect(), we = w ? p.clientX - le : Z - p.clientX;
    let ie = !1;
    function xe(ye) {
      const {
        width: de,
        right: rt,
        left: ze
      } = B.getBoundingClientRect();
      let Be = w ? rt + we - ye.clientX : ye.clientX + we - ze;
      Be = Ir(Be, e), de > 0 && Be !== de && o(e, Be);
    }
    function ve() {
      ie = !0, o(e, "max-content");
    }
    function Ee(ye) {
      ie || xe(ye), k.removeEventListener("pointermove", xe), k.removeEventListener("dblclick", ve), k.removeEventListener("lostpointercapture", Ee);
    }
    k.setPointerCapture(Y), k.addEventListener("pointermove", xe), k.addEventListener("dblclick", ve), k.addEventListener("lostpointercapture", Ee);
  }
  function ne(p) {
    if (s == null) return;
    const {
      sortDescendingFirst: k
    } = e;
    if (W === void 0) {
      const Y = {
        columnKey: e.key,
        direction: k ? "DESC" : "ASC"
      };
      s(a && p ? [...a, Y] : [Y]);
    } else {
      let Y;
      if ((k === !0 && D === "DESC" || k !== !0 && D === "ASC") && (Y = {
        columnKey: e.key,
        direction: D === "ASC" ? "DESC" : "ASC"
      }), p) {
        const B = [...a];
        Y ? B[E] = Y : B.splice(E, 1), s(B);
      } else
        s(Y ? [Y] : []);
    }
  }
  function me(p) {
    c({
      idx: e.idx,
      rowIdx: n
    }), I && ne(p.ctrlKey || p.metaKey);
  }
  function Re(p) {
    T == null || T(p), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Oe(p) {
    (p.key === " " || p.key === "Enter") && (p.preventDefault(), ne(p.ctrlKey || p.metaKey));
  }
  function ce(p) {
    p.dataTransfer.setData(f, e.key), p.dataTransfer.dropEffect = "move", l(!0);
  }
  function Ce() {
    l(!1);
  }
  function Pe(p) {
    p.preventDefault(), p.dataTransfer.dropEffect = "move";
  }
  function Te(p) {
    if (u(!1), p.dataTransfer.types.includes(f.toLowerCase())) {
      const k = p.dataTransfer.getData(f.toLowerCase());
      k !== e.key && (p.preventDefault(), i == null || i(k, e.key));
    }
  }
  function M(p) {
    Qn(p) && u(!0);
  }
  function P(p) {
    Qn(p) && u(!1);
  }
  let $;
  return A && ($ = {
    draggable: !0,
    onDragStart: ce,
    onDragEnd: Ce,
    onDragOver: Pe,
    onDragEnter: M,
    onDragLeave: P,
    onDrop: Te
  }), /* @__PURE__ */ re("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": v,
    "aria-selected": r,
    "aria-sort": F,
    tabIndex: d ? 0 : x,
    className: L,
    style: {
      ...Sr(e, n, v),
      ...nt(e, t)
    },
    onFocus: Re,
    onClick: me,
    onKeyDown: I ? Oe : void 0,
    ...$,
    children: [J({
      column: e,
      sortDirection: D,
      priority: R,
      tabIndex: S
    }), z && /* @__PURE__ */ y("div", {
      className: Qi,
      onClick: Qo,
      onPointerDown: G
    })]
  });
}
function Qn(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const ia = "r1upfr807-0-0-beta-47", Cn = `rdg-row ${ia}`, aa = "r190mhd37-0-0-beta-47", Gt = "rdg-row-selected", sa = "r139qu9m7-0-0-beta-47", ca = "rdg-top-summary-row", la = "rdg-bottom-summary-row", da = "h10tskcx7-0-0-beta-47", Wr = `rdg-header-row ${da}`;
function ua({
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
  direction: b
}) {
  const f = Bo(), h = [];
  for (let l = 0; l < t.length; l++) {
    const C = t[l], u = ge(C, a, {
      type: "HEADER"
    });
    u !== void 0 && (l += u - 1), h.push(/* @__PURE__ */ y(oa, {
      column: C,
      colSpan: u,
      rowIdx: e,
      isCellSelected: s === C.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: d && l === 0,
      direction: b,
      dragDropKey: f
    }, C.key));
  }
  return /* @__PURE__ */ y("div", {
    role: "row",
    "aria-rowindex": e,
    className: Me(Wr, s === -1 && Gt),
    children: h
  });
}
const fa = /* @__PURE__ */ We(ua);
function ha({
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
        i.push(/* @__PURE__ */ y(Bi, {
          column: c,
          rowIdx: e,
          isCellSelected: r === d,
          selectCell: o
        }, d));
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
const ga = /* @__PURE__ */ We(ha), ma = "c6ra8a37-0-0-beta-47", wa = `rdg-cell-copied ${ma}`, ya = "cq910m07-0-0-beta-47", pa = `rdg-cell-dragged-over ${ya}`;
function ba({
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
  onRowChange: b,
  selectCell: f,
  ...h
}) {
  const {
    tabIndex: l,
    childTabIndex: C,
    onFocus: u
  } = xt(n), {
    cellClass: w
  } = e, v = Ct(e, typeof w == "function" ? w(i) : w, r && wa, o && pa), x = Dr(e, i);
  function S(R) {
    f({
      rowIdx: a,
      idx: e.idx
    }, R);
  }
  function T(R) {
    if (s) {
      const F = ht(R);
      if (s({
        row: i,
        column: e,
        selectCell: S
      }, F), F.isGridDefaultPrevented()) return;
    }
    S();
  }
  function E(R) {
    if (d) {
      const F = ht(R);
      if (d({
        row: i,
        column: e,
        selectCell: S
      }, F), F.isGridDefaultPrevented()) return;
    }
    S();
  }
  function W(R) {
    if (c) {
      const F = ht(R);
      if (c({
        row: i,
        column: e,
        selectCell: S
      }, F), F.isGridDefaultPrevented()) return;
    }
    S(!0);
  }
  function D(R) {
    b(e, R);
  }
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !x || void 0,
    tabIndex: l,
    className: v,
    style: nt(e, t),
    onClick: T,
    onDoubleClick: W,
    onContextMenu: E,
    onFocus: u,
    ...h,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: x,
      tabIndex: C,
      onRowChange: D
    })
  });
}
const Ca = /* @__PURE__ */ We(ba);
function xa({
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
  viewportColumns: b,
  selectedCellEditor: f,
  onCellClick: h,
  onCellDoubleClick: l,
  onCellContextMenu: C,
  rowClass: u,
  setDraggedOverRowIdx: w,
  onMouseEnter: v,
  onRowChange: x,
  selectCell: S,
  ...T
}, E) {
  const W = se((I, z) => {
    x(I, t, z);
  });
  function D(I) {
    w == null || w(t), v == null || v(I);
  }
  e = Me(Cn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && Gt);
  const R = [];
  for (let I = 0; I < b.length; I++) {
    const z = b[I], {
      idx: A
    } = z, L = ge(z, c, {
      type: "ROW",
      row: d
    });
    L !== void 0 && (I += L - 1);
    const J = r === A;
    J && f ? R.push(f) : R.push(/* @__PURE__ */ y(Ca, {
      column: z,
      colSpan: L,
      row: d,
      rowIdx: t,
      isCopied: a === A,
      isDraggedOver: s === A,
      isCellSelected: J,
      onClick: h,
      onDoubleClick: l,
      onContextMenu: C,
      onRowChange: W,
      selectCell: S
    }, z.key));
  }
  const F = U(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ y(Mr, {
    value: F,
    children: /* @__PURE__ */ y("div", {
      role: "row",
      ref: E,
      className: e,
      onMouseEnter: D,
      style: pn(n),
      ...T,
      children: R
    })
  });
}
const zr = /* @__PURE__ */ We(/* @__PURE__ */ yn(xa)), Ll = zr;
function $r(e, t) {
  return /* @__PURE__ */ y(zr, {
    ...t
  }, e);
}
function va({
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
const Da = "a3ejtar7-0-0-beta-47", ka = `rdg-sort-arrow ${Da}`;
function Sa({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ re(wn, {
    children: [Ia({
      sortDirection: e
    }), Ra({
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
    className: ka,
    "aria-hidden": !0,
    children: /* @__PURE__ */ y("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Ra({
  priority: e
}) {
  return e;
}
const Ta = "rnvodz57-0-0-beta-47", Ea = `rdg ${Ta}`, Ma = "vlqv91k7-0-0-beta-47", Oa = `rdg-viewport-dragging ${Ma}`, Pa = "f1lsfrzw7-0-0-beta-47", Na = "f1cte0lg7-0-0-beta-47", Fa = "s8wc6fl7-0-0-beta-47";
function Ha({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: o,
  selectCell: i
}) {
  var h;
  const {
    tabIndex: a,
    childTabIndex: s,
    onFocus: c
  } = xt(o), {
    summaryCellClass: d
  } = e, b = Ct(e, Fa, typeof d == "function" ? d(n) : d);
  function f() {
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
    onClick: f,
    onFocus: c,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
const La = /* @__PURE__ */ We(Ha), Wa = "skuhp557-0-0-beta-47", za = "tf8l5ub7-0-0-beta-47", $a = `rdg-summary-row ${Wa}`;
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
  selectCell: d,
  "aria-rowindex": b
}) {
  const f = [];
  for (let h = 0; h < r.length; h++) {
    const l = r[h], C = ge(l, a, {
      type: "SUMMARY",
      row: n
    });
    C !== void 0 && (h += C - 1);
    const u = s === l.idx;
    f.push(/* @__PURE__ */ y(La, {
      column: l,
      colSpan: C,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, l.key));
  }
  return /* @__PURE__ */ y("div", {
    role: "row",
    "aria-rowindex": b,
    className: Me(Cn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, $a, c ? `${ca} ${za}` : la, s === -1 && Gt),
    style: {
      ...pn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: f
  });
}
const Jn = /* @__PURE__ */ We(Ya);
function Aa(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i,
    rowKeyGetter: a,
    onRowsChange: s,
    rowHeight: c,
    headerRowHeight: d,
    summaryRowHeight: b,
    selectedRows: f,
    isRowSelectionDisabled: h,
    onSelectedRowsChange: l,
    sortColumns: C,
    onSortColumnsChange: u,
    defaultColumnOptions: w,
    onCellClick: v,
    onCellDoubleClick: x,
    onCellContextMenu: S,
    onCellKeyDown: T,
    onSelectedCellChange: E,
    onScroll: W,
    onColumnResize: D,
    onColumnsReorder: R,
    onFill: F,
    onCopy: I,
    onPaste: z,
    enableVirtualization: A,
    renderers: L,
    className: J,
    style: G,
    rowClass: ne,
    direction: me,
    role: Re,
    "aria-label": Oe,
    "aria-labelledby": ce,
    "aria-describedby": Ce,
    "aria-rowcount": Pe,
    "data-testid": Te
  } = e, M = At(), P = Re ?? "grid", $ = c ?? 35, p = d ?? (typeof $ == "number" ? $ : 35), k = b ?? (typeof $ == "number" ? $ : 35), Y = (L == null ? void 0 : L.renderRow) ?? (M == null ? void 0 : M.renderRow) ?? $r, B = (L == null ? void 0 : L.renderSortStatus) ?? (M == null ? void 0 : M.renderSortStatus) ?? Sa, Z = (L == null ? void 0 : L.renderCheckbox) ?? (M == null ? void 0 : M.renderCheckbox) ?? mi, le = (L == null ? void 0 : L.noRowsFallback) ?? (M == null ? void 0 : M.noRowsFallback), we = A ?? !0, ie = me ?? "ltr", [xe, ve] = ee(0), [Ee, ye] = ee(0), [de, rt] = ee(() => /* @__PURE__ */ new Map()), [ze, Be] = ee(() => /* @__PURE__ */ new Map()), [Ue, Sn] = ee(null), [In, no] = ee(!1), [ot, ro] = ee(void 0), [Ne, Rn] = ee(null), Tn = Q((g) => de.get(g.key) ?? ze.get(g.key) ?? g.width, [ze, de]), [je, En, Mn, oo] = Hi(), {
    columns: te,
    colSpanColumns: On,
    lastFrozenColumnIndex: he,
    headerRowsCount: $e,
    colOverscanStartIdx: io,
    colOverscanEndIdx: Pn,
    templateColumns: ao,
    layoutCssVars: so,
    totalFrozenColumnWidth: co
  } = Ni({
    rawColumns: n,
    defaultColumnOptions: w,
    getColumnWidth: Tn,
    scrollLeft: Ee,
    viewportWidth: En,
    enableVirtualization: we
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Nn = it + Ke, qe = $e + it, Bt = $e - 1, ue = -qe, Dt = ue + Bt, Ye = r.length + Ke - 1, [O, Xe] = ee(() => ({
    idx: -1,
    rowIdx: ue - 1,
    mode: "SELECT"
  })), Ut = ke(O), Fn = ke(ot), Hn = ke(-1), kt = ke(null), St = ke(!1), jt = P === "treegrid", Kt = $e * p, Ln = Nn * k, It = Mn - Kt - Ln, qt = f != null && l != null, Wn = ie === "rtl", lo = Wn ? "ArrowRight" : "ArrowLeft", zn = Wn ? "ArrowLeft" : "ArrowRight", $n = Pe ?? $e + r.length + Nn, uo = U(() => ({
    renderCheckbox: Z,
    renderSortStatus: B
  }), [Z, B]), fo = U(() => {
    let g = !1, m = !1;
    if (a != null && f != null && f.size > 0) {
      for (const N of r)
        if (f.has(a(N)) ? g = !0 : m = !0, g && m) break;
    }
    return {
      isRowSelected: g && !m,
      isIndeterminate: g && m
    };
  }, [r, f, a]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: ho,
    getRowTop: Yn,
    getRowHeight: go,
    findRowIdx: An
  } = Wi({
    rows: r,
    rowHeight: $,
    clientHeight: It,
    scrollTop: xe,
    enableVirtualization: we
  }), Fe = Li({
    columns: te,
    colSpanColumns: On,
    colOverscanStartIdx: io,
    colOverscanEndIdx: Pn,
    lastFrozenColumnIndex: he,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: mo,
    handleColumnResize: wo
  } = Fi(te, Fe, ao, je, En, de, ze, rt, Be, D), yo = jt ? -1 : 0, Ve = te.length - 1, Vt = Jt(O), Rt = jn(O), po = p + Xt + Ln + oo, bo = se(wo), Co = se(R), xo = se(u), vo = se(v), Do = se(x), ko = se(S), So = se(To), Io = se(_n), Ro = se(Tt), Zt = se(ct), Gn = se(({
    idx: g,
    rowIdx: m
  }) => {
    ct({
      rowIdx: ue + m - 1,
      idx: g
    });
  });
  tt(() => {
    if (!Vt || nn(O, Ut.current)) {
      Ut.current = O;
      return;
    }
    Ut.current = O, O.idx === -1 && (kt.current.focus({
      preventScroll: !0
    }), Nt(kt.current));
  }), tt(() => {
    St.current && (St.current = !1, qn());
  }), Go(t, () => ({
    element: je.current,
    scrollToCell({
      idx: g,
      rowIdx: m
    }) {
      const N = g !== void 0 && g > he && g < te.length ? g : void 0, H = m !== void 0 && Ze(m) ? m : void 0;
      (N !== void 0 || H !== void 0) && Rn({
        idx: N,
        rowIdx: H
      });
    },
    selectCell: ct
  }));
  const Qt = Q((g) => {
    ro(g), Fn.current = g;
  }, []);
  function To(g) {
    if (!l) return;
    gt(a);
    const m = new Set(f);
    for (const N of r) {
      if ((h == null ? void 0 : h(N)) === !0) continue;
      const H = a(N);
      g.checked ? m.add(H) : m.delete(H);
    }
    l(m);
  }
  function _n(g) {
    if (!l) return;
    gt(a);
    const {
      row: m,
      checked: N,
      isShiftClick: H
    } = g;
    if ((h == null ? void 0 : h(m)) === !0) return;
    const _ = new Set(f), K = a(m), q = Hn.current, X = r.indexOf(m);
    if (Hn.current = X, N ? _.add(K) : _.delete(K), H && q !== -1 && q !== X && q < r.length) {
      const fe = ui(X - q);
      for (let ae = q + fe; ae !== X; ae += fe) {
        const De = r[ae];
        (h == null ? void 0 : h(De)) !== !0 && (N ? _.add(a(De)) : _.delete(a(De)));
      }
    }
    l(_);
  }
  function Eo(g) {
    var X;
    const {
      idx: m,
      rowIdx: N,
      mode: H
    } = O;
    if (H === "EDIT") return;
    if (T && Ze(N)) {
      const fe = r[N], ae = ht(g);
      if (T({
        mode: "SELECT",
        row: fe,
        column: te[m],
        rowIdx: N,
        selectCell: ct
      }, ae), ae.isGridDefaultPrevented()) return;
    }
    if (!(g.target instanceof Element)) return;
    const _ = g.target.closest(".rdg-cell") !== null, K = jt && g.target === kt.current;
    if (!_ && !K) return;
    const {
      keyCode: q
    } = g;
    if (Rt && (z != null || I != null) && Ht(g)) {
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
    switch (g.key) {
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
        Kn(g);
        break;
      default:
        No(g);
        break;
    }
  }
  function Mo(g) {
    const {
      scrollTop: m,
      scrollLeft: N
    } = g.currentTarget;
    Ft(() => {
      ve(m), ye(fi(N));
    }), W == null || W(g);
  }
  function Tt(g, m, N) {
    if (typeof s != "function" || N === r[m]) return;
    const H = [...r];
    H[m] = N, s(H, {
      indexes: [m],
      column: g
    });
  }
  function Bn() {
    O.mode === "EDIT" && Tt(te[O.idx], O.rowIdx, O.row);
  }
  function Oo() {
    const {
      idx: g,
      rowIdx: m
    } = O, N = r[m], H = te[g].key;
    Sn({
      row: N,
      columnKey: H
    }), I == null || I({
      sourceRow: N,
      sourceColumnKey: H
    });
  }
  function Po() {
    if (!z || !s || Ue === null || !Et(O))
      return;
    const {
      idx: g,
      rowIdx: m
    } = O, N = te[g], H = r[m], _ = z({
      sourceRow: Ue.row,
      sourceColumnKey: Ue.columnKey,
      targetRow: H,
      targetColumnKey: N.key
    });
    Tt(N, m, _);
  }
  function No(g) {
    if (!Rt) return;
    const m = r[O.rowIdx], {
      key: N,
      shiftKey: H
    } = g;
    if (qt && H && N === " ") {
      gt(a);
      const _ = a(m);
      _n({
        row: m,
        checked: !f.has(_),
        isShiftClick: !1
      }), g.preventDefault();
      return;
    }
    Et(O) && ei(g) && Xe(({
      idx: _,
      rowIdx: K
    }) => ({
      idx: _,
      rowIdx: K,
      mode: "EDIT",
      row: m,
      originalRow: m
    }));
  }
  function Un(g) {
    return g >= yo && g <= Ve;
  }
  function Ze(g) {
    return g >= 0 && g < r.length;
  }
  function Jt({
    idx: g,
    rowIdx: m
  }) {
    return m >= ue && m <= Ye && Un(g);
  }
  function Fo({
    idx: g,
    rowIdx: m
  }) {
    return Ze(m) && g >= 0 && g <= Ve;
  }
  function jn({
    idx: g,
    rowIdx: m
  }) {
    return Ze(m) && Un(g);
  }
  function Et(g) {
    return Fo(g) && oi({
      columns: te,
      rows: r,
      selectedPosition: g
    });
  }
  function ct(g, m) {
    if (!Jt(g)) return;
    Bn();
    const N = r[g.rowIdx], H = nn(O, g);
    m && Et(g) ? Xe({
      ...g,
      mode: "EDIT",
      row: N,
      originalRow: N
    }) : H ? Nt(er(je.current)) : (St.current = !0, Xe({
      ...g,
      mode: "SELECT"
    })), E && !H && E({
      rowIdx: g.rowIdx,
      row: N,
      column: te[g.idx]
    });
  }
  function Ho(g, m, N) {
    const {
      idx: H,
      rowIdx: _
    } = O, K = Vt && H === -1;
    switch (g) {
      case "ArrowUp":
        return {
          idx: H,
          rowIdx: _ - 1
        };
      case "ArrowDown":
        return {
          idx: H,
          rowIdx: _ + 1
        };
      case lo:
        return {
          idx: H - 1,
          rowIdx: _
        };
      case zn:
        return {
          idx: H + 1,
          rowIdx: _
        };
      case "Tab":
        return {
          idx: H + (N ? -1 : 1),
          rowIdx: _
        };
      case "Home":
        return K ? {
          idx: H,
          rowIdx: ue
        } : {
          idx: 0,
          rowIdx: m ? ue : _
        };
      case "End":
        return K ? {
          idx: H,
          rowIdx: Ye
        } : {
          idx: Ve,
          rowIdx: m ? Ye : _
        };
      case "PageUp": {
        if (O.rowIdx === ue) return O;
        const q = Yn(_) + go(_) - It;
        return {
          idx: H,
          rowIdx: q > 0 ? An(q) : 0
        };
      }
      case "PageDown": {
        if (O.rowIdx >= r.length) return O;
        const q = Yn(_) + It;
        return {
          idx: H,
          rowIdx: q < Xt ? An(q) : r.length - 1
        };
      }
      default:
        return O;
    }
  }
  function Kn(g) {
    const {
      key: m,
      shiftKey: N
    } = g;
    let H = "NONE";
    if (m === "Tab") {
      if (si({
        shiftKey: N,
        maxColIdx: Ve,
        minRowIdx: ue,
        maxRowIdx: Ye,
        selectedPosition: O
      })) {
        Bn();
        return;
      }
      H = "CHANGE_ROW";
    }
    g.preventDefault();
    const _ = Ht(g), K = Ho(m, _, N);
    if (nn(O, K)) return;
    const q = ai({
      moveUp: m === "ArrowUp",
      moveNext: m === zn || m === "Tab" && !N,
      columns: te,
      colSpanColumns: On,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: ue,
      mainHeaderRowIdx: Dt,
      maxRowIdx: Ye,
      lastFrozenColumnIndex: he,
      cellNavigationMode: H,
      currentPosition: O,
      nextPosition: K,
      isCellWithinBounds: Jt
    });
    ct(q);
  }
  function Lo(g) {
    if (ot === void 0) return;
    const {
      rowIdx: m
    } = O;
    return (m < ot ? m < g && g <= ot : m > g && g >= ot) ? O.idx : void 0;
  }
  function qn() {
    const g = er(je.current);
    if (g === null) return;
    Nt(g), (g.querySelector('[tabindex="0"]') ?? g).focus({
      preventScroll: !0
    });
  }
  function Wo() {
    if (F == null || O.mode === "EDIT" || !jn(O))
      return;
    const {
      idx: g,
      rowIdx: m
    } = O, N = te[g];
    if (N.renderEditCell == null || N.editable === !1)
      return;
    const H = Tn(N);
    return /* @__PURE__ */ y(Ai, {
      gridRowStart: qe + m + 1,
      rows: r,
      column: N,
      columnWidth: H,
      maxColIdx: Ve,
      isLastRow: m === Ye,
      selectedPosition: O,
      isCellEditable: Et,
      latestDraggedOverRowIdx: Fn,
      onRowsChange: s,
      onClick: qn,
      onFill: F,
      setDragging: no,
      setDraggedOverRowIdx: Qt
    });
  }
  function zo(g) {
    if (O.rowIdx !== g || O.mode === "SELECT") return;
    const {
      idx: m,
      row: N
    } = O, H = te[m], _ = ge(H, he, {
      type: "ROW",
      row: N
    }), K = (X) => {
      St.current = X, Xe(({
        idx: fe,
        rowIdx: ae
      }) => ({
        idx: fe,
        rowIdx: ae,
        mode: "SELECT"
      }));
    }, q = (X, fe, ae) => {
      fe ? Ft(() => {
        Tt(H, O.rowIdx, X), K(ae);
      }) : Xe((De) => ({
        ...De,
        row: X
      }));
    };
    return r[O.rowIdx] !== O.originalRow && K(!1), /* @__PURE__ */ y(_i, {
      column: H,
      colSpan: _,
      row: N,
      rowIdx: g,
      onRowChange: q,
      closeEditor: K,
      onKeyDown: T,
      navigate: Kn
    }, H.key);
  }
  function lt(g) {
    const m = O.idx === -1 ? void 0 : te[O.idx];
    return m !== void 0 && O.rowIdx === g && !Fe.includes(m) ? O.idx > Pn ? [...Fe, m] : [...Fe.slice(0, he + 1), m, ...Fe.slice(he + 1)] : Fe;
  }
  function $o() {
    const g = [], {
      idx: m,
      rowIdx: N
    } = O, H = Rt && N < at ? at - 1 : at, _ = Rt && N > st ? st + 1 : st;
    for (let K = H; K <= _; K++) {
      const q = K === at - 1 || K === st + 1, X = q ? N : K;
      let fe = Fe;
      const ae = m === -1 ? void 0 : te[m];
      ae !== void 0 && (q ? fe = [ae] : fe = lt(X));
      const De = r[X], Yo = qe + X + 1;
      let en = X, tn = !1;
      typeof a == "function" && (en = a(De), tn = (f == null ? void 0 : f.has(en)) ?? !1), g.push(Y(en, {
        "aria-rowindex": qe + X + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: X,
        row: De,
        viewportColumns: fe,
        isRowSelectionDisabled: (h == null ? void 0 : h(De)) ?? !1,
        isRowSelected: tn,
        onCellClick: vo,
        onCellDoubleClick: Do,
        onCellContextMenu: ko,
        rowClass: ne,
        gridRowStart: Yo,
        copiedCellIdx: Ue !== null && Ue.row === De ? te.findIndex((Ao) => Ao.key === Ue.columnKey) : void 0,
        selectedCellIdx: N === X ? m : void 0,
        draggedOverCellIdx: Lo(X),
        setDraggedOverRowIdx: In ? Qt : void 0,
        lastFrozenColumnIndex: he,
        onRowChange: Ro,
        selectCell: Zt,
        selectedCellEditor: zo(X)
      }));
    }
    return g;
  }
  (O.idx > Ve || O.rowIdx > Ye) && (Xe({
    idx: -1,
    rowIdx: ue - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Mt = `repeat(${$e}, ${p}px)`;
  it > 0 && (Mt += ` repeat(${it}, ${k}px)`), r.length > 0 && (Mt += ho), Ke > 0 && (Mt += ` repeat(${Ke}, ${k}px)`);
  const Xn = O.idx === -1 && O.rowIdx !== ue - 1;
  return /* @__PURE__ */ re("div", {
    role: P,
    "aria-label": Oe,
    "aria-labelledby": ce,
    "aria-describedby": Ce,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": te.length,
    "aria-rowcount": $n,
    className: Me(Ea, J, In && Oa),
    style: {
      ...G,
      scrollPaddingInlineStart: O.idx > he || (Ne == null ? void 0 : Ne.idx) !== void 0 ? `${co}px` : void 0,
      scrollPaddingBlock: Ze(O.rowIdx) || (Ne == null ? void 0 : Ne.rowIdx) !== void 0 ? `${Kt + it * k}px ${Ke * k}px` : void 0,
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
    "data-testid": Te,
    children: [/* @__PURE__ */ re(Di, {
      value: uo,
      children: [/* @__PURE__ */ y(Ii, {
        value: So,
        children: /* @__PURE__ */ re(Si, {
          value: fo,
          children: [Array.from({
            length: Bt
          }, (g, m) => /* @__PURE__ */ y(ga, {
            rowIdx: m + 1,
            level: -Bt + m,
            columns: lt(ue + m),
            selectedCellIdx: O.rowIdx === ue + m ? O.idx : void 0,
            selectCell: Gn
          }, m)), /* @__PURE__ */ y(fa, {
            rowIdx: $e,
            columns: lt(Dt),
            onColumnResize: bo,
            onColumnsReorder: Co,
            sortColumns: C,
            onSortColumnsChange: xo,
            lastFrozenColumnIndex: he,
            selectedCellIdx: O.rowIdx === Dt ? O.idx : void 0,
            selectCell: Gn,
            shouldFocusGrid: !Vt,
            direction: ie
          })]
        })
      }), r.length === 0 && le ? le : /* @__PURE__ */ re(wn, {
        children: [o == null ? void 0 : o.map((g, m) => {
          const N = $e + 1 + m, H = Dt + 1 + m, _ = O.rowIdx === H, K = Kt + k * m;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": N,
            rowIdx: H,
            gridRowStart: N,
            row: g,
            top: K,
            bottom: void 0,
            viewportColumns: lt(H),
            lastFrozenColumnIndex: he,
            selectedCellIdx: _ ? O.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, m);
        }), /* @__PURE__ */ y(ki, {
          value: Io,
          children: $o()
        }), i == null ? void 0 : i.map((g, m) => {
          const N = qe + r.length + m + 1, H = r.length + m, _ = O.rowIdx === H, K = It > Xt ? Mn - k * (i.length - m) : void 0, q = K === void 0 ? k * (i.length - 1 - m) : void 0;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": $n - Ke + m + 1,
            rowIdx: H,
            gridRowStart: N,
            row: g,
            top: K,
            bottom: q,
            viewportColumns: lt(H),
            lastFrozenColumnIndex: he,
            selectedCellIdx: _ ? O.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, m);
        })]
      })]
    }), Wo(), ri(Fe), jt && /* @__PURE__ */ y("div", {
      ref: kt,
      tabIndex: Xn ? 0 : -1,
      className: Me(Pa, Xn && [aa, he !== -1 && sa], !Ze(O.rowIdx) && Na),
      style: {
        gridRowStart: O.rowIdx + qe + 1
      }
    }), Ne !== null && /* @__PURE__ */ y(va, {
      scrollToPosition: Ne,
      setScrollToCellPosition: Rn,
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
const Yr = /* @__PURE__ */ yn(Aa);
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
    tabIndex: b,
    childTabIndex: f,
    onFocus: h
  } = xt(o);
  function l() {
    d(e);
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
    onClick: C ? l : void 0,
    onFocus: h,
    children: (!c || C) && ((u = i.renderGroupCell) == null ? void 0 : u.call(i, {
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
const _a = /* @__PURE__ */ We(Ga), Ba = "g1yxluv37-0-0-beta-47", Ua = `rdg-group-row ${Ba}`;
function ja({
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
  isRowSelectionDisabled: b,
  ...f
}) {
  const h = r[0].key === _e ? t.level + 1 : t.level;
  function l() {
    a({
      rowIdx: n,
      idx: -1
    });
  }
  const C = U(() => ({
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
      className: Me(Cn, Ua, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Gt),
      onClick: l,
      style: pn(s),
      ...f,
      children: r.map((u) => /* @__PURE__ */ y(_a, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === u.idx,
        column: u,
        row: t,
        groupColumnIndex: h,
        toggleGroup: d,
        isGroupByColumn: c.includes(u.key)
      }, u.key))
    })
  });
}
const Ka = /* @__PURE__ */ We(ja);
function qa({
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
  rowGrouper: b,
  expandedGroupIds: f,
  onExpandedGroupIdsChange: h,
  ...l
}, C) {
  var Ce, Pe, Te;
  const u = At(), w = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? $r, v = 1 + (((Ce = l.topSummaryRows) == null ? void 0 : Ce.length) ?? 0), x = l.direction === "rtl", S = x ? "ArrowRight" : "ArrowLeft", T = x ? "ArrowLeft" : "ArrowRight", E = se(Oe), {
    columns: W,
    groupBy: D
  } = U(() => {
    const M = [...e].sort(({
      key: $
    }, {
      key: p
    }) => $ === _e ? -1 : p === _e ? 1 : d.includes($) ? d.includes(p) ? d.indexOf($) - d.indexOf(p) : -1 : d.includes(p) ? 1 : 0), P = [];
    for (const [$, p] of M.entries())
      d.includes(p.key) && (P.push(p.key), M[$] = {
        ...p,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: p.renderGroupCell ?? Ci,
        editable: !1
      });
    return {
      columns: M,
      groupBy: P
    };
  }, [e, d]), [R, F] = U(() => {
    if (D.length === 0) return [void 0, t.length];
    const M = (P, [$, ...p], k) => {
      let Y = 0;
      const B = {};
      for (const [Z, le] of Object.entries(b(P, $))) {
        const [we, ie] = p.length === 0 ? [le, le.length] : M(le, p, k + Y + 1);
        B[Z] = {
          childRows: le,
          childGroups: we,
          startRowIndex: k + Y
        }, Y += ie + 1;
      }
      return [B, Y];
    };
    return M(t, D, 0);
  }, [D, b, t]), [I, z] = U(() => {
    const M = /* @__PURE__ */ new Set();
    if (!R) return [t, p];
    const P = [], $ = (k, Y, B) => {
      if (Xa(k)) {
        P.push(...k);
        return;
      }
      Object.keys(k).forEach((Z, le, we) => {
        const ie = Y !== void 0 ? `${Y}__${Z}` : Z, xe = f.has(ie), {
          childRows: ve,
          childGroups: Ee,
          startRowIndex: ye
        } = k[Z], de = {
          id: ie,
          parentId: Y,
          groupKey: Z,
          isExpanded: xe,
          childRows: ve,
          level: B,
          posInSet: le,
          startRowIndex: ye,
          setSize: we.length
        };
        P.push(de), M.add(de), xe && $(Ee, ie, B + 1);
      });
    };
    return $(R, void 0, 0), [P, p];
    function p(k) {
      return M.has(k);
    }
  }, [f, R, t]), A = U(() => typeof n == "function" ? (M) => z(M) ? n({
    type: "GROUP",
    row: M
  }) : n({
    type: "ROW",
    row: M
  }) : n, [z, n]), L = Q((M) => {
    const P = I.indexOf(M);
    for (let $ = P - 1; $ >= 0; $--) {
      const p = I[$];
      if (z(p) && (!z(M) || M.parentId === p.id))
        return [p, $];
    }
  }, [z, I]), J = Q((M) => {
    if (z(M))
      return M.id;
    if (typeof r == "function")
      return r(M);
    const P = L(M);
    if (P !== void 0) {
      const {
        startRowIndex: $,
        childRows: p
      } = P[0], k = p.indexOf(M);
      return $ + k + 1;
    }
    return I.indexOf(M);
  }, [L, z, r, I]), G = U(() => {
    if (a == null) return null;
    gt(r);
    const M = new Set(a);
    for (const P of I)
      z(P) && P.childRows.every((p) => a.has(r(p))) && M.add(P.id);
    return M;
  }, [z, r, a, I]);
  function ne(M) {
    if (!s) return;
    gt(r);
    const P = new Set(a);
    for (const $ of I) {
      const p = J($);
      if (G != null && G.has(p) && !M.has(p))
        if (z($))
          for (const k of $.childRows)
            P.delete(r(k));
        else
          P.delete(p);
      else if (!(G != null && G.has(p)) && M.has(p))
        if (z($))
          for (const k of $.childRows)
            P.add(r(k));
        else
          P.add(p);
    }
    s(P);
  }
  function me(M, P) {
    if (o == null || o(M, P), P.isGridDefaultPrevented() || M.mode === "EDIT") return;
    const {
      column: $,
      rowIdx: p,
      selectCell: k
    } = M, Y = ($ == null ? void 0 : $.idx) ?? -1, B = I[p];
    if (z(B)) {
      if (Y === -1 && (P.key === S && B.isExpanded || P.key === T && !B.isExpanded) && (P.preventDefault(), P.preventGridDefault(), Oe(B.id)), Y === -1 && P.key === S && !B.isExpanded && B.level !== 0) {
        const Z = L(B);
        Z !== void 0 && (P.preventGridDefault(), k({
          idx: Y,
          rowIdx: Z[1]
        }));
      }
      Ht(P) && (P.keyCode === 67 || P.keyCode === 86) && P.preventGridDefault();
    }
  }
  function Re(M, {
    indexes: P,
    column: $
  }) {
    if (!i) return;
    const p = [...t], k = [];
    for (const Y of P) {
      const B = t.indexOf(I[Y]);
      p[B] = M[Y], k.push(B);
    }
    i(p, {
      indexes: k,
      column: $
    });
  }
  function Oe(M) {
    const P = new Set(f);
    P.has(M) ? P.delete(M) : P.add(M), h(P);
  }
  function ce(M, {
    row: P,
    rowClass: $,
    onCellClick: p,
    onCellDoubleClick: k,
    onCellContextMenu: Y,
    onRowChange: B,
    lastFrozenColumnIndex: Z,
    copiedCellIdx: le,
    draggedOverCellIdx: we,
    setDraggedOverRowIdx: ie,
    selectedCellEditor: xe,
    ...ve
  }) {
    if (z(P)) {
      const {
        startRowIndex: de
      } = P;
      return /* @__PURE__ */ y(Ka, {
        ...ve,
        "aria-rowindex": v + de + 1,
        row: P,
        groupBy: D,
        toggleGroup: E
      }, M);
    }
    let Ee = ve["aria-rowindex"];
    const ye = L(P);
    if (ye !== void 0) {
      const {
        startRowIndex: de,
        childRows: rt
      } = ye[0], ze = rt.indexOf(P);
      Ee = de + v + ze + 2;
    }
    return w(M, {
      ...ve,
      "aria-rowindex": Ee,
      row: P,
      rowClass: $,
      onCellClick: p,
      onCellDoubleClick: k,
      onCellContextMenu: Y,
      onRowChange: B,
      lastFrozenColumnIndex: Z,
      copiedCellIdx: le,
      draggedOverCellIdx: we,
      setDraggedOverRowIdx: ie,
      selectedCellEditor: xe
    });
  }
  return /* @__PURE__ */ y(Yr, {
    ...l,
    role: "treegrid",
    "aria-rowcount": F + 1 + (((Pe = l.topSummaryRows) == null ? void 0 : Pe.length) ?? 0) + (((Te = l.bottomSummaryRows) == null ? void 0 : Te.length) ?? 0),
    ref: C,
    columns: W,
    rows: I,
    rowHeight: A,
    rowKeyGetter: J,
    onRowsChange: Re,
    selectedRows: G,
    onSelectedRowsChange: ne,
    onCellKeyDown: me,
    renderers: {
      ...c,
      renderRow: ce
    }
  });
}
function Xa(e) {
  return Array.isArray(e);
}
const Wl = /* @__PURE__ */ yn(qa), Va = "t7vyx3i7-0-0-beta-47", Za = `rdg-text-editor ${Va}`;
function Qa(e) {
  e == null || e.focus(), e == null || e.select();
}
function zl({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ y("input", {
    className: Za,
    ref: Qa,
    value: e[t.key],
    onChange: (o) => n({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const V = {
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
}, Ja = {
  "--rdg-color": V.gray800,
  "--rdg-header-color": V.gray700,
  "--rdg-border-color": V.gray400,
  "--rdg-background-color": V.forcewhite,
  "--rdg-header-background-color": V.forcewhite,
  "--rdg-row-hover-background-color": V.forcewhite,
  "--rdg-row-selected-hover-background-color": V.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": V.primary400,
  "--rdg-expanded-accent-color": V.primary400,
  "--rdg-row-selected-color": V.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": V.primary500,
  "--rdg-scrollbar-track-background": V.gray100,
  "--rdg--scrollbar-thumb-hover-background": V.primary500,
  "--rdg--scrollbar-track-hover-background": V.gray200
}, es = Ie.div`
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
const ns = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, o] = ee(n ?? []), i = U(() => r.length === 0 ? t : [...t].sort((s, c) => {
    for (const d of r) {
      const b = e.find((l) => l.key === d.columnKey), h = ts(
        d.columnKey,
        b == null ? void 0 : b.type,
        b == null ? void 0 : b.sortComparator,
        b == null ? void 0 : b.getColumnValue
      )(s, c);
      if (h !== 0)
        return d.direction === "ASC" ? h : -h;
    }
    return 0;
  }), [t, r]), a = Q((s) => {
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
}, mt = 40, rs = 200, os = "rdg-row-expanded", is = "rdg-detail-row", Ar = "__rdgDetailParent", as = (e) => ({ id: `rdg-detail:${e.id}`, [Ar]: e }), xn = (e) => e[Ar], Wt = (e) => xn(e) !== void 0, ss = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, as(r)] : [r]);
}, cs = Ie.button`
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
`, ls = () => /* @__PURE__ */ y("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ y("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), Gr = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ y(
    cs,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), _r(t, e.id);
      },
      children: /* @__PURE__ */ y(ls, {})
    }
  );
}, _r = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, ds = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', us = (e, t, n) => Wt(e) || t === hs || t === Br ? !1 : !(n instanceof Element && n.closest(ds)), tr = Ie.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, fs = Ie.span`
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
  renderCell: ({ row: t }) => /* @__PURE__ */ y(Gr, { row: t, expandable: e })
}), ms = (e, t) => {
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
      const c = xn(s.row);
      return c ? t(c) : ((d = a.renderCell) == null ? void 0 : d.call(a, s)) ?? null;
    }
  });
}, ws = (e, t, n) => (r) => {
  const o = xn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, ys = (e, t = []) => Wt(e) ? is : t.includes(e.id) ? os : "", Ur = Ie(jo)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${V.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${V.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${V.gray800};
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
  return /* @__PURE__ */ y(
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
  const r = U(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ y(
    Ko,
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
}, Cs = Ie(Uo)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Pt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ re(Cs, { children: [
  Lr(t),
  e
] }), xs = (e) => (t) => {
  const { filters: n, setFilters: r } = Se(vn), o = U(() => n[e.key], [n, e]), i = Q(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ y(on, { ...t, children: /* @__PURE__ */ y(
    bs,
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
    onClick: Pt,
    onKeyDown: Pt
  }) : /* @__PURE__ */ y(
    Ur,
    {
      autoComplete: "off",
      onClick: Pt,
      onKeyDown: Pt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ y(on, { ...t });
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
}, Ds = (e, t, n) => {
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
const ks = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ss = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Is = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Rs = {
  date: an({
    formats: ks,
    defaultWidth: "full"
  }),
  time: an({
    formats: Ss,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Is,
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
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? $s(s, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      zs(s, (f) => f.test(a))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const b = t.slice(a.length);
    return { value: d, rest: b };
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
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const s = t.slice(o.length);
    return { value: a, rest: s };
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
  formatDistance: Ds,
  formatLong: Rs,
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
  ), i = or(r), a = or(o), s = +i - rr(i), c = +a - rr(a);
  return Math.round((s - c) / nc);
}
function ic(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ac(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return oc(n, ic(n)) + 1;
}
function pt(e, t) {
  var s, c, d, b;
  const n = vt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((b = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : b.weekStartsOn) ?? 0, o = be(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function zt(e, t) {
  return pt(e, { ...t, weekStartsOn: 1 });
}
function Kr(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Le(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = zt(o), a = Le(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = zt(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
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
  var b, f, h, l;
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = vt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (b = t == null ? void 0 : t.locale) == null ? void 0 : b.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((l = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = Le((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = pt(a, t), c = Le((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const d = pt(c, t);
  return +n >= +s ? r + 1 : +n >= +d ? r : r - 1;
}
function lc(e, t) {
  var s, c, d, b;
  const n = vt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((b = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, o = qr(e, t), i = Le((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), pt(i, t);
}
function dc(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = +pt(n, t) - +lc(n, t);
  return Math.round(r / jr) + 1;
}
function j(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const He = {
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
    return He.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = qr(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return j(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : j(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Kr(e);
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
    const o = dc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : j(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = cc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : j(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : He.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ac(e);
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
    return He.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : He.H(e, t);
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
        return "GMT" + ar(r, ":");
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
        return "GMT" + ar(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ae(r, ":");
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
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + j(Math.abs(e) / 60, 2) : Ae(e, t);
}
function Ae(e, t = "") {
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
  return i.replace("{{date}}", cr(r, t)).replace("{{time}}", Xr(o, t));
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
const Cc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, xc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vc = /^'([^]*?)'?$/, Dc = /''/g, kc = /[a-zA-Z]/;
function Sc(e, t, n) {
  var b, f, h, l, C, u, w, v;
  const r = vt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ec, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((l = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (C = n == null ? void 0 : n.locale) == null ? void 0 : C.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((v = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = be(e, n == null ? void 0 : n.in);
  if (!Zr(s))
    throw new RangeError("Invalid time value");
  let c = t.match(xc).map((x) => {
    const S = x[0];
    if (S === "p" || S === "P") {
      const T = fc[S];
      return T(x, o.formatLong);
    }
    return x;
  }).join("").match(Cc).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const S = x[0];
    if (S === "'")
      return { isToken: !1, value: Ic(x) };
    if (ir[S])
      return { isToken: !0, value: x };
    if (S.match(kc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: x };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((x) => {
    if (!x.isToken) return x.value;
    const S = x.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && yc(S) || !(n != null && n.useAdditionalDayOfYearTokens) && wc(S)) && pc(S, t, String(e));
    const T = ir[S[0]];
    return T(s, S, o.localize, d);
  }).join("");
}
function Ic(e) {
  const t = e.match(vc);
  return t ? t[1].replace(Dc, "'") : e;
}
function Rc() {
  return Object.assign({}, vt());
}
function lr(e, t, n) {
  const r = Rc(), o = Mc(e, n.timeZone, n.locale ?? r.locale);
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
      const i = Pc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
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
function Qr(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const ur = 36e5, Wc = 6e4, cn = {
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
    return fr(o, a) ? (i = Math.abs(o) * ur + a * Wc, r[1] === "+" ? -i : i) : NaN;
  }
  if (Yc(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : zc(t), s = mn(a, e);
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
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function $c(e, t, n) {
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
  const n = e ? Dn(e, t, !0) / Ac : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
function _c(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + $t(i, 2);
}
function mr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Bc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, wr = 6e4, Uc = 2, oe = {
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
  const r = jc(e), { year: o, restDateString: i } = Kc(r.date, n), a = qc(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let c = 0, d;
    if (r.time && (c = Xc(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (d = Dn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = mr(new Date(s + c)), d = mr(new Date(s + c + d));
    return new Date(s + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function jc(e) {
  const t = {};
  let n = oe.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = oe.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = oe.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Kc(e, t) {
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
function qc(e, t) {
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
    return Qc(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
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
function Xc(e) {
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
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", d = i.replace(a, "'" + Gc[a[0]](o, a, n) + "'");
      return c ? d.substring(0, s - 1) + d.substring(s + 1) : d;
    }, t);
  }
  return Sc(e, t, n);
}
function tl(e, t, n) {
  e = Jr(e, n);
  const r = Dn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
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
}), ol = "data-grid-hidden-column-visibility", il = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = ol,
  onHiddenColumnsChange: a
}) => {
  const [s, c] = pe.useState(0), [d, b] = pe.useState(!1), [f, h] = pe.useState([]), l = Q(
    (x) => {
      localStorage.setItem(i, JSON.stringify(x)), c((S) => S + 1), h(x);
    },
    [i]
  ), C = JSON.stringify(r ?? []), u = U(
    () => JSON.parse(C),
    [C]
  );
  Ge(() => {
    const x = localStorage.getItem(i);
    if (x) {
      const S = JSON.parse(x);
      l(Array.isArray(S) ? S : []);
    } else
      l(u);
  }, [i, u, l]);
  const w = Q(
    (x) => {
      l(x), a == null || a(x);
    },
    [l, a]
  ), v = U(
    () => e.filter((x) => !(n != null && n.includes(x.key))),
    [e, n]
  );
  return /* @__PURE__ */ y(
    _t.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        chooserOpen: d,
        setChooserOpen: b,
        columns: v,
        hiddenColumn: f,
        setHiddenColumn: w,
        enabled: o
      },
      children: t
    }
  );
}, kn = Ie(qo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${V.primary500};
    }
`, fn = "rdg-cell-frozen-right", hn = (...e) => e.filter(Boolean).join(" "), al = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: c, hiddenColumn: d } = Se(_t), b = Q((f) => {
    const h = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === et.DATE)
        return ({ row: u }) => {
          var w, v;
          return rl(
            u[f.key],
            ((w = f.dateOptions) == null ? void 0 : w.formatDate) ?? to.DATE_WITH_TIME,
            (v = f.dateOptions) == null ? void 0 : v.timeZone
          );
        };
    }, l = () => f.renderHeaderCell ? f.renderHeaderCell : xs(f), C = {
      ...f,
      renderCell: h(),
      renderHeaderCell: l()
    };
    return f.frozenRight && (C.frozen = !1, C.cellClass = typeof f.cellClass == "function" ? (u) => hn(
      fn,
      f.cellClass(u)
    ) : hn(fn, f.cellClass), C.headerCellClass = hn(fn, f.headerCellClass)), C;
  }, []);
  return U(() => {
    const f = [];
    if (t && !n && f.push(gs(t)), n) {
      const h = (r ?? []).map((w) => w.id), l = h.length > 0 && h.every((w) => o == null ? void 0 : o.includes(w)), C = (w) => {
        const v = (o ?? []).filter((x) => !h.includes(x));
        return w ? [...v, ...h] : v;
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
        renderHeaderCell: () => /* @__PURE__ */ re(tr, { children: [
          t && /* @__PURE__ */ y(fs, { "aria-hidden": !0 }),
          a ? a({
            checked: l,
            "aria-label": s,
            onChange: (w) => i == null ? void 0 : i(C(w))
          }) : /* @__PURE__ */ y(
            kn,
            {
              checked: l,
              slotProps: { input: { "aria-label": s } },
              onChange: (w, v) => i == null ? void 0 : i(C(v))
            }
          )
        ] }),
        renderCell: t ? (w) => {
          var v;
          return /* @__PURE__ */ re(tr, { children: [
            /* @__PURE__ */ y(Gr, { row: w.row, expandable: t }),
            (v = dt.renderCell) == null ? void 0 : v.call(dt, w)
          ] });
        } : dt.renderCell
      });
    }
    return f.push(...e.map((h) => b(h))), c && d ? f.filter((h) => !d.includes(h.key)) : f;
  }, [
    e,
    t,
    b,
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
}, dl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, ul = ll("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function fl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, d = e.size, b = d === void 0 ? 15 : d, f = e.margin, h = f === void 0 ? 2 : f, l = dl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), C = Yt({ display: "inherit" }, c), u = function(w) {
    return {
      backgroundColor: o,
      width: gn(b),
      height: gn(b),
      margin: gn(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(ul, " ").concat(0.75 / a, "s ").concat(w * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Ot.createElement(
    "span",
    Yt({ style: C }, l),
    Ot.createElement("span", { style: u(1) }),
    Ot.createElement("span", { style: u(2) }),
    Ot.createElement("span", { style: u(3) })
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
  const { filters: r } = Se(vn);
  return U(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((c) => c.key === i);
      return s ? hl({
        comparator: s.filterComparator,
        filterType: s.filterType ?? yt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, ml = Ie.div`
    height: 80px;
    width: 100%;
`, wl = pe.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: o, labels: i }) => {
    const a = Q(
      (c, d) => {
        t(d);
      },
      []
    ), s = Q(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ y(ml, { children: /* @__PURE__ */ y(
      Xo,
      {
        labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ y("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
        labelDisplayedRows: ({ from: c, to: d, count: b }) => `${c}-${d} ${i != null && i.ofLabel ? i.ofLabel : "of"} ${b}`,
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
var yl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(yl || {});
const pl = (e = 10) => {
  const [t, n] = ee(0), [r, o] = ee(e), i = Q(() => {
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
    resetPagination: i
  };
}, xr = 50, bl = Ie.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${V.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, Cl = pe.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = Q(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ y(
      kn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), xl = (e) => /* @__PURE__ */ y(Cl, { ...e }), vl = "Select all rows", Dl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  selectedRows: s,
  onSelectedRowsChange: c,
  selectAllLabel: d = vl,
  noDataMessage: b,
  filters: f,
  setFilters: h,
  pagination: l,
  renderers: C,
  expandable: u,
  rowHeight: w,
  rowClass: v,
  onCellClick: x,
  ...S
}) => {
  var p;
  const { gridKey: T } = Se(_t), { pageSize: E, currentPage: W, setCurrentPage: D, setPageSize: R } = pl(
    l == null ? void 0 : l.defaultPageSize
  ), F = (C == null ? void 0 : C.renderCheckbox) ?? xl, I = al({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c,
    renderCheckbox: F,
    selectAllLabel: d
  }), z = U(() => I.map((k) => k.key).join("|"), [I]), A = U(
    () => I.some((k) => k.filterEnabled),
    [I]
  ), L = U(
    () => (l == null ? void 0 : l.enabled) && !l.remotePagination,
    [l]
  ), J = U(() => !h, [h]), G = gl({
    columns: I,
    rows: n,
    enabled: J
  }), ne = U(() => !i, [i]), {
    sortedRows: me,
    sortColumns: Re,
    setSortedColumns: Oe
  } = ns({
    columns: I,
    rows: G,
    defaultSortColumns: a
  }), ce = U(() => {
    if (!L)
      return W;
    const k = Math.max(0, Math.ceil(G.length / E) - 1);
    return Math.min(W, k);
  }, [L, W, E, G.length]);
  Ge(() => {
    ce !== W && D(ce);
  }, [ce, W, D]);
  const Ce = U(() => L ? me.slice(ce * E, (ce + 1) * E) : me, [me, L, ce, E]), Pe = U(
    () => u ? ss(Ce, u.expandedIds) : Ce,
    [u, Ce]
  ), Te = U(
    () => u ? ms(I, u.renderDetail) : I,
    [u, I]
  ), M = Q(
    (k, Y) => {
      const B = () => {
        const Z = ys(k, u == null ? void 0 : u.expandedIds);
        return Z || (Y === 0 ? "first-row" : Y === n.length - 1 ? "last-row" : "");
      };
      return [v == null ? void 0 : v(k, Y), B()].filter(Boolean).join(" ");
    },
    [n, u == null ? void 0 : u.expandedIds, v]
  ), P = Q(
    (k, Y) => {
      x == null || x(k, Y), !(!u || Y.isGridDefaultPrevented()) && us(k.row, k.column.key, Y.target) && _r(u, k.row.id);
    },
    [x, u]
  ), $ = !(l != null && l.remotePagination);
  return Ge(() => {
    if (!$)
      return;
    const k = s == null ? void 0 : s.filter(
      (Y) => n.some((B) => B.id === Y)
    );
    (k == null ? void 0 : k.length) != (s == null ? void 0 : s.length) && (c == null || c(k ?? []));
  }, [n, s, $]), /* @__PURE__ */ re(es, { $pagination: !!(l != null && l.enabled), children: [
    /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(
      Yr,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: (k) => {
          c == null || c(Array.from(k));
        },
        rowKeyGetter: (k) => k.id,
        rows: Pe,
        onSortColumnsChange: ne ? Oe : i,
        sortColumns: ne ? Re : o,
        columns: Te,
        rowClass: M,
        headerRowHeight: A ? 70 : void 0,
        onCellClick: P,
        enableVirtualization: Te.some((k) => k.frozenRight) ? !1 : void 0,
        ...S,
        rowHeight: u ? ws(
          w,
          xr,
          u.detailHeight ?? rs
        ) : w ?? xr,
        renderers: {
          renderCheckbox: F,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...b != null && !t ? {
            noRowsFallback: /* @__PURE__ */ y("div", { className: "rdg-no-data", children: b })
          } : {},
          ...C
        },
        style: { ...Ja, ...e ?? {} }
      },
      `${T}:${z}`
    ) }),
    l != null && l.enabled ? /* @__PURE__ */ y(
      wl,
      {
        ...(l == null ? void 0 : l.remotePagination) ?? {
          currentPage: ce,
          setCurrentPage: D,
          pageSize: E,
          setPageSize: R,
          totalCount: G.length
        },
        labels: l.labels ?? ((p = l.remotePagination) == null ? void 0 : p.labels)
      }
    ) : null,
    t ? /* @__PURE__ */ re(bl, { children: [
      /* @__PURE__ */ y("div", {}),
      /* @__PURE__ */ y(fl, { color: V.primary500 })
    ] }) : null
  ] });
}, $l = ({
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
}) => /* @__PURE__ */ y(ps, { filters: e, setFilters: t, children: /* @__PURE__ */ y(
  il,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ y(Dl, { ...c, columns: n, filters: e, setFilters: t })
  }
) }), kl = Ie(Zo)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, Yl = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r, chooserOpen: o, setChooserOpen: i } = Se(_t), a = pe.useRef(null), [s, c] = pe.useState(null);
  pe.useEffect(() => {
    c(o ? a.current : null);
  }, [o]);
  const d = Q(() => {
    i(!0);
  }, [i]), b = Q(() => {
    i(!1);
  }, [i]), f = Q(
    (h) => () => {
      const l = n.indexOf(h);
      r(
        l === -1 ? [...n, h] : n.filter((C) => C !== h)
      );
    },
    [n]
  );
  return /* @__PURE__ */ re("div", { ref: a, children: [
    /* @__PURE__ */ y(e, { onClick: d }),
    /* @__PURE__ */ y(
      Vo,
      {
        id: "column-visibility-menu",
        anchorEl: s,
        open: o && !!s,
        onClose: b,
        children: t.map((h) => /* @__PURE__ */ re(kl, { onClick: f(h.key), children: [
          /* @__PURE__ */ y(kn, { checked: !n.includes(h.key) }),
          h.name
        ] }, h.key))
      }
    )
  ] });
};
export {
  et as ColumnType,
  to as DATE_FORMAT,
  yl as DEFAULT_PAGE_SIZES,
  $l as DataGrid,
  kn as DataGridCheckbox,
  Di as DataGridDefaultRenderersProvider,
  Br as EXPANDER_COLUMN_KEY,
  Gr as ExpanderToggle,
  yt as FilterType,
  Ll as Row,
  hs as SELECTION_COLUMN_KEY,
  _e as SELECT_COLUMN_KEY,
  bn as SelectCellFormatter,
  dt as SelectColumn,
  xi as ToggleGroup,
  Wl as TreeDataGrid,
  Yl as VisibilityColumnChooser,
  us as clickExpandsRow,
  rl as convertDate,
  Ja as defaultTheme,
  ws as detailAwareRowHeight,
  ys as detailRowClass,
  Cr as getStringToCompare,
  Wt as isDetailRow,
  mi as renderCheckbox,
  Lr as renderHeaderCell,
  Ia as renderSortIcon,
  Ra as renderSortPriority,
  Ci as renderToggleGroup,
  vi as renderValue,
  V as taktikTheme,
  zl as textEditor,
  Ri as useHeaderRowSelection,
  pl as usePagination,
  Pr as useRowSelection,
  ms as withDetailRendering,
  ss as withDetailRows
};
