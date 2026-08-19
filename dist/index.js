import { jsx as p, jsxs as ae, Fragment as wn } from "react/jsx-runtime";
import * as Ot from "react";
import Te, { createContext as bt, memo as He, forwardRef as yn, useContext as Ce, useMemo as j, useCallback as V, useRef as be, useEffect as _e, useState as re, useImperativeHandle as Uo, useLayoutEffect as Go, useId as jo } from "react";
import { flushSync as Lt } from "react-dom";
import we from "@emotion/styled";
import Ko from "@mui/material/Menu";
import vr from "@mui/material/MenuItem";
import qo from "@mui/material/Divider";
import Xo from "@mui/material/Checkbox";
import Vo from "@mui/material/Box";
import Zo from "@mui/material/TextField";
import Qo from "@mui/material/Autocomplete";
import Jo from "@mui/material/TablePagination";
function kr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = kr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ee() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = kr(e)) && (r && (r += " "), r += t);
  return r;
}
function me(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function ei(e) {
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
const ti = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function Ht(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ni(e) {
  return Ht(e) && e.keyCode !== 86 ? !1 : !ti.has(e.key);
}
function ri({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const oi = "mlln6zg7-0-0-beta-47";
function ii(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: o
  }) => /* @__PURE__ */ p("div", {
    className: oi,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function ai({
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
function si({
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
function ci({
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
  lastFrozenColumnIndex: b,
  isCellWithinBounds: u
}) {
  let {
    idx: g,
    rowIdx: x
  } = l;
  const D = r.length, S = (H) => {
    for (const v of o) {
      const R = v.idx;
      if (R > g) break;
      const N = si({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: x,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: b,
        column: v
      });
      if (N && g > R && g < N + R) {
        g = R + (H ? N : 0);
        break;
      }
    }
  }, k = (H) => H.level + d, T = () => {
    if (t) {
      let v = r[g].parent;
      for (; v !== void 0; ) {
        const R = k(v);
        if (x === R) {
          g = v.idx + v.colSpan;
          break;
        }
        v = v.parent;
      }
    } else if (e) {
      let v = r[g].parent, R = !1;
      for (; v !== void 0; ) {
        const N = k(v);
        if (x >= N) {
          g = v.idx, x = N, R = !0;
          break;
        }
        v = v.parent;
      }
      R || (g = f, x = m);
    }
  };
  if (u(l) && (S(t), x < d && T()), n === "CHANGE_ROW" && (g === D ? x === w || (g = 0, x += 1) : g === -1 && (x === c || (x -= 1, g = D - 1), S(!1))), x < d) {
    let v = r[g].parent;
    const R = x;
    for (x = d; v !== void 0; ) {
      const N = k(v);
      N >= R && (x = N, g = v.idx), v = v.parent;
    }
  }
  return {
    idx: g,
    rowIdx: x
  };
}
function li({
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
const di = "cj343x07-0-0-beta-47", Sr = `rdg-cell ${di}`, ui = "csofj7r7-0-0-beta-47", fi = `rdg-cell-frozen ${ui}`;
function pn(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Rr(e, t, n) {
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
  return Ee(Sr, ...t, e.frozen && fi);
}
const {
  min: wt,
  max: Wt,
  floor: Vn,
  sign: hi,
  abs: gi
} = Math;
function gt(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Ir(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = Wt(e, t), typeof n == "number" && n >= t ? wt(e, n) : e;
}
function Tr(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const mi = "c1bn88vv7-0-0-beta-47", wi = `rdg-checkbox-input ${mi}`;
function yi({
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
    className: wi,
    onChange: r,
    ...n
  });
}
const pi = "g1s9ylgp7-0-0-beta-47", bi = `rdg-group-cell-content ${pi}`, Ci = "cz54e4y7-0-0-beta-47", xi = `rdg-caret ${Ci}`;
function vi(e) {
  return /* @__PURE__ */ p(ki, {
    ...e
  });
}
function ki({
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
  return /* @__PURE__ */ ae("span", {
    className: bi,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ p("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: xi,
      "aria-hidden": !0,
      children: /* @__PURE__ */ p("path", {
        d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7"
      })
    })]
  });
}
function Di(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Er = /* @__PURE__ */ bt(void 0), Si = Er.Provider;
function _t() {
  return Ce(Er);
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
const Mr = /* @__PURE__ */ bt(void 0), Pr = Mr.Provider, Or = /* @__PURE__ */ bt(void 0), Ri = Or.Provider;
function Nr() {
  const e = Ce(Mr), t = Ce(Or);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Fr = /* @__PURE__ */ bt(void 0), Ii = Fr.Provider, Lr = /* @__PURE__ */ bt(void 0), Ti = Lr.Provider;
function Ei() {
  const e = Ce(Fr), t = Ce(Lr);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Be = "rdg-select-column";
function Mi(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Ei();
  return /* @__PURE__ */ p(bn, {
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
function Pi(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Nr();
  return /* @__PURE__ */ p(bn, {
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
function Oi(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Nr();
  return /* @__PURE__ */ p(bn, {
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
    return /* @__PURE__ */ p(Mi, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ p(Pi, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ p(Oi, {
      ...e
    });
  }
}, Ni = "auto", Fi = 50;
function Li({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? Ni, s = (t == null ? void 0 : t.minWidth) ?? Fi, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? Di, w = (t == null ? void 0 : t.sortable) ?? !1, f = (t == null ? void 0 : t.resizable) ?? !1, m = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: l,
    colSpanColumns: b,
    lastFrozenColumnIndex: u,
    headerRowsCount: g
  } = j(() => {
    let v = -1, R = 1;
    const N = [];
    M(e, 1);
    function M(Y, z, J) {
      for (const _ of Y) {
        if ("children" in _) {
          const ye = {
            name: _.name,
            parent: J,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: _.headerCellClass
          };
          M(_.children, z + 1, ye);
          continue;
        }
        const ne = _.frozen ?? !1, ve = {
          ..._,
          parent: J,
          idx: 0,
          level: 0,
          frozen: ne,
          width: _.width ?? a,
          minWidth: _.minWidth ?? s,
          maxWidth: _.maxWidth ?? c,
          sortable: _.sortable ?? w,
          resizable: _.resizable ?? f,
          draggable: _.draggable ?? m,
          renderCell: _.renderCell ?? d
        };
        N.push(ve), ne && v++, z > R && (R = z);
      }
    }
    N.sort(({
      key: Y,
      frozen: z
    }, {
      key: J,
      frozen: _
    }) => Y === Be ? -1 : J === Be ? 1 : z ? _ ? 0 : -1 : _ ? 1 : 0);
    const F = [];
    return N.forEach((Y, z) => {
      Y.idx = z, Hr(Y, z, 0), Y.colSpan != null && F.push(Y);
    }), {
      columns: N,
      colSpanColumns: F,
      lastFrozenColumnIndex: v,
      headerRowsCount: R
    };
  }, [e, a, s, c, d, f, w, m]), {
    templateColumns: x,
    layoutCssVars: D,
    totalFrozenColumnWidth: S,
    columnMetrics: k
  } = j(() => {
    const v = /* @__PURE__ */ new Map();
    let R = 0, N = 0;
    const M = [];
    for (const Y of l) {
      let z = n(Y);
      typeof z == "number" ? z = Ir(z, Y) : z = Y.minWidth, M.push(`${z}px`), v.set(Y, {
        width: z,
        left: R
      }), R += z;
    }
    if (u !== -1) {
      const Y = v.get(l[u]);
      N = Y.left + Y.width;
    }
    const F = {};
    for (let Y = 0; Y <= u; Y++) {
      const z = l[Y];
      F[`--rdg-frozen-left-${z.idx}`] = `${v.get(z).left}px`;
    }
    return {
      templateColumns: M,
      layoutCssVars: F,
      totalFrozenColumnWidth: N,
      columnMetrics: v
    };
  }, [n, l, u]), [T, H] = j(() => {
    if (!i)
      return [0, l.length - 1];
    const v = o + S, R = o + r, N = l.length - 1, M = wt(u + 1, N);
    if (v >= R)
      return [M, M];
    let F = M;
    for (; F < N; ) {
      const {
        left: _,
        width: ne
      } = k.get(l[F]);
      if (_ + ne > v)
        break;
      F++;
    }
    let Y = F;
    for (; Y < N; ) {
      const {
        left: _,
        width: ne
      } = k.get(l[Y]);
      if (_ + ne >= R)
        break;
      Y++;
    }
    const z = Wt(M, F - 1), J = wt(N, Y + 1);
    return [z, J];
  }, [k, l, u, o, S, r, i]);
  return {
    columns: l,
    colSpanColumns: b,
    colOverscanStartIdx: T,
    colOverscanEndIdx: H,
    templateColumns: x,
    layoutCssVars: D,
    headerRowsCount: g,
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
const tt = typeof window > "u" ? _e : Go;
function Hi(e, t, n, r, o, i, a, s, c, d) {
  const w = be(o), f = e.length === t.length, m = f && o !== w.current, l = [...n], b = [];
  for (const {
    key: D,
    idx: S,
    width: k
  } of t)
    typeof k == "string" && (m || !a.has(D)) && !i.has(D) && (l[S] = k, b.push(D));
  const u = l.join(" ");
  tt(() => {
    w.current = o, g(b);
  });
  function g(D) {
    D.length !== 0 && c((S) => {
      const k = new Map(S);
      let T = !1;
      for (const H of D) {
        const v = Zn(r, H);
        T || (T = v !== S.get(H)), v === void 0 ? k.delete(H) : k.set(H, v);
      }
      return T ? k : S;
    });
  }
  function x(D, S) {
    const {
      key: k
    } = D, T = [...n], H = [];
    for (const {
      key: R,
      idx: N,
      width: M
    } of t)
      if (k === R) {
        const F = typeof S == "number" ? `${S}px` : S;
        T[N] = F;
      } else f && typeof M == "string" && !i.has(R) && (T[N] = M, H.push(R));
    r.current.style.gridTemplateColumns = T.join(" ");
    const v = typeof S == "number" ? S : Zn(r, k);
    Lt(() => {
      s((R) => {
        const N = new Map(R);
        return N.set(k, v), N;
      }), g(H);
    }), d == null || d(D.idx, v);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: x
  };
}
function Zn(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Wi() {
  const e = be(null), [t, n] = re(1), [r, o] = re(1), [i, a] = re(0);
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
    } = e.current.getBoundingClientRect(), b = f - d, u = m - w + c, g = l - b;
    n(u), o(g), a(b);
    const x = new s((D) => {
      const S = D[0].contentBoxSize[0], {
        clientHeight: k,
        offsetHeight: T
      } = e.current;
      Lt(() => {
        n(S.inlineSize), o(S.blockSize), a(T - k);
      });
    });
    return x.observe(e.current), () => {
      x.disconnect();
    };
  }, []), [e, t, r, i];
}
function de(e) {
  const t = be(e);
  _e(() => {
    t.current = e;
  });
  const n = V((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function xt(e) {
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
function zi({
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
  const w = j(() => {
    if (i === 0) return 0;
    let f = i;
    const m = (l, b) => b !== void 0 && l + b > i ? (f = l, !0) : !1;
    for (const l of t) {
      const b = l.idx;
      if (b >= f || m(b, me(l, s, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const g = n[u];
        if (m(b, me(l, s, {
          type: "ROW",
          row: g
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (m(b, me(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (o != null) {
        for (const u of o)
          if (m(b, me(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
    }
    return f;
  }, [c, d, n, r, o, i, s, t]);
  return j(() => {
    const f = [];
    for (let m = 0; m <= a; m++) {
      const l = e[m];
      m < w && !l.frozen || f.push(l);
    }
    return f;
  }, [w, a, e]);
}
function Ai({
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
  } = j(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (g) => g * t,
        getRowHeight: () => t,
        findRowIdx: (g) => Vn(g / t)
      };
    let m = 0, l = " ";
    const b = e.map((g) => {
      const x = t(g), D = {
        top: m,
        height: x
      };
      return l += `${x}px `, m += x, D;
    }), u = (g) => Wt(0, wt(e.length - 1, g));
    return {
      totalRowHeight: m,
      gridTemplateRows: l,
      getRowTop: (g) => b[u(g)].top,
      getRowHeight: (g) => b[u(g)].height,
      findRowIdx(g) {
        let x = 0, D = b.length - 1;
        for (; x <= D; ) {
          const S = x + Vn((D - x) / 2), k = b[S].top;
          if (k === g) return S;
          if (k < g ? x = S + 1 : k > g && (D = S - 1), x > D) return D;
        }
        return 0;
      }
    };
  }, [t, e]);
  let w = 0, f = e.length - 1;
  if (o) {
    const l = d(r), b = d(r + n);
    w = Wt(0, l - 4), f = wt(e.length - 1, b + 4);
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
const $i = "c1w9bbhr7-0-0-beta-47", Yi = "c1creorc7-0-0-beta-47", _i = `rdg-cell-drag-handle ${$i}`;
function Bi({
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
    idx: b,
    rowIdx: u
  } = a;
  function g(T) {
    if (T.preventDefault(), T.buttons !== 1) return;
    m(!0), window.addEventListener("mouseover", H), window.addEventListener("mouseup", v);
    function H(R) {
      R.buttons !== 1 && v();
    }
    function v() {
      window.removeEventListener("mouseover", H), window.removeEventListener("mouseup", v), m(!1), x();
    }
  }
  function x() {
    const T = s.current;
    if (T === void 0) return;
    const H = u < T ? u + 1 : T, v = u < T ? T + 1 : u;
    S(H, v), l(void 0);
  }
  function D(T) {
    T.stopPropagation(), S(u + 1, t.length);
  }
  function S(T, H) {
    const v = t[u], R = [...t], N = [];
    for (let M = T; M < H; M++)
      if (c({
        rowIdx: M,
        idx: b
      })) {
        const F = w({
          columnKey: n.key,
          sourceRow: v,
          targetRow: t[M]
        });
        F !== t[M] && (R[M] = F, N.push(M));
      }
    N.length > 0 && (d == null || d(R, {
      indexes: N,
      column: n
    }));
  }
  function k() {
    var M;
    const T = ((M = n.colSpan) == null ? void 0 : M.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: H,
      ...v
    } = nt(n, T), R = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", N = n.idx + T - 1 === o;
    return {
      ...v,
      gridRowStart: e,
      marginInlineEnd: N ? void 0 : R,
      marginBlockEnd: i ? void 0 : R,
      insetInlineStart: H ? `calc(${H} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ p("div", {
    style: k(),
    className: Ee(_i, n.frozen && Yi),
    onClick: f,
    onMouseDown: g,
    onDoubleClick: D
  });
}
const Ui = "cis5rrm7-0-0-beta-47";
function Gi({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: o,
  closeEditor: i,
  onKeyDown: a,
  navigate: s
}) {
  var x, D, S;
  const c = be(void 0), d = ((x = e.editorOptions) == null ? void 0 : x.commitOnOutsideClick) !== !1, w = de(() => {
    l(!0, !1);
  });
  _e(() => {
    if (!d) return;
    function k() {
      c.current = requestAnimationFrame(w);
    }
    return addEventListener("mousedown", k, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", k, {
        capture: !0
      }), f();
    };
  }, [d, w]);
  function f() {
    cancelAnimationFrame(c.current);
  }
  function m(k) {
    if (a) {
      const T = ht(k);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(k);
        },
        onClose: l
      }, T), T.isGridDefaultPrevented()) return;
    }
    k.key === "Escape" ? l() : k.key === "Enter" ? l(!0) : ri(k) && s(k);
  }
  function l(k = !1, T = !0) {
    k ? o(n, !0, T) : i(T);
  }
  function b(k, T = !1) {
    o(k, T, T);
  }
  const {
    cellClass: u
  } = e, g = Ct(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((D = e.editorOptions) != null && D.displayCellContent) && Ui);
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: g,
    style: nt(e, t),
    onKeyDown: m,
    onMouseDownCapture: f,
    children: e.renderEditCell != null && /* @__PURE__ */ ae(wn, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: b,
        onClose: l
      }), ((S = e.editorOptions) == null ? void 0 : S.displayCellContent) && e.renderCell({
        column: e,
        row: n,
        rowIdx: r,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: b
      })]
    })
  });
}
function ji({
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
  } = e, s = Tr(e, t), c = e.idx + 1;
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
    className: Ee(Sr, e.headerCellClass),
    style: {
      ...Rr(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onClick: d,
    children: e.name
  });
}
const Ki = "h44jtk67-0-0-beta-47", qi = "hcgkhxz7-0-0-beta-47", Xi = `rdg-header-sort-name ${qi}`;
function Wr({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ p(Vi, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Vi({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = _t().renderSortStatus;
  return /* @__PURE__ */ ae("span", {
    className: Ki,
    children: [/* @__PURE__ */ p("span", {
      className: Xi,
      children: n
    }), /* @__PURE__ */ p("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Zi = "c6l2wv17-0-0-beta-47", Qi = "c1kqdw7y7-0-0-beta-47", Ji = `rdg-cell-resizable ${Qi}`, ea = "r1y6ywlx7-0-0-beta-47", ta = "rdg-cell-draggable", na = "c1bezg5o7-0-0-beta-47", ra = `rdg-cell-dragging ${na}`, oa = "c1vc96037-0-0-beta-47", ia = `rdg-cell-drag-over ${oa}`;
function aa({
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
  const [m, l] = re(!1), [b, u] = re(!1), g = w === "rtl", x = Tr(e, n), {
    tabIndex: D,
    childTabIndex: S,
    onFocus: k
  } = xt(r), T = a == null ? void 0 : a.findIndex((C) => C.columnKey === e.key), H = T !== void 0 && T > -1 ? a[T] : void 0, v = H == null ? void 0 : H.direction, R = H !== void 0 && a.length > 1 ? T + 1 : void 0, N = v && !R ? v === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: M,
    resizable: F,
    draggable: Y
  } = e, z = Ct(e, e.headerCellClass, M && Zi, F && Ji, Y && ta, m && ra, b && ia), J = e.renderHeaderCell ?? Wr;
  function _(C) {
    if (C.pointerType === "mouse" && C.buttons !== 1)
      return;
    C.preventDefault();
    const {
      currentTarget: W,
      pointerId: U
    } = C, G = W.parentElement, {
      right: $,
      left: X
    } = G.getBoundingClientRect(), te = g ? C.clientX - X : $ - C.clientX;
    let oe = !1;
    function De(pe) {
      const {
        width: ue,
        right: rt,
        left: ze
      } = G.getBoundingClientRect();
      let Ue = g ? rt + te - pe.clientX : pe.clientX + te - ze;
      Ue = Ir(Ue, e), ue > 0 && Ue !== ue && o(e, Ue);
    }
    function Se() {
      oe = !0, o(e, "max-content");
    }
    function Ie(pe) {
      oe || De(pe), W.removeEventListener("pointermove", De), W.removeEventListener("dblclick", Se), W.removeEventListener("lostpointercapture", Ie);
    }
    W.setPointerCapture(U), W.addEventListener("pointermove", De), W.addEventListener("dblclick", Se), W.addEventListener("lostpointercapture", Ie);
  }
  function ne(C) {
    if (s == null) return;
    const {
      sortDescendingFirst: W
    } = e;
    if (H === void 0) {
      const U = {
        columnKey: e.key,
        direction: W ? "DESC" : "ASC"
      };
      s(a && C ? [...a, U] : [U]);
    } else {
      let U;
      if ((W === !0 && v === "DESC" || W !== !0 && v === "ASC") && (U = {
        columnKey: e.key,
        direction: v === "ASC" ? "DESC" : "ASC"
      }), C) {
        const G = [...a];
        U ? G[T] = U : G.splice(T, 1), s(G);
      } else
        s(U ? [U] : []);
    }
  }
  function ve(C) {
    c({
      idx: e.idx,
      rowIdx: n
    }), M && ne(C.ctrlKey || C.metaKey);
  }
  function ye(C) {
    k == null || k(C), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Me(C) {
    (C.key === " " || C.key === "Enter") && (C.preventDefault(), ne(C.ctrlKey || C.metaKey));
  }
  function We(C) {
    C.dataTransfer.setData(f, e.key), C.dataTransfer.dropEffect = "move", l(!0);
  }
  function ce() {
    l(!1);
  }
  function ke(C) {
    C.preventDefault(), C.dataTransfer.dropEffect = "move";
  }
  function Pe(C) {
    if (u(!1), C.dataTransfer.types.includes(f.toLowerCase())) {
      const W = C.dataTransfer.getData(f.toLowerCase());
      W !== e.key && (C.preventDefault(), i == null || i(W, e.key));
    }
  }
  function I(C) {
    Qn(C) && u(!0);
  }
  function P(C) {
    Qn(C) && u(!1);
  }
  let A;
  return Y && (A = {
    draggable: !0,
    onDragStart: We,
    onDragEnd: ce,
    onDragOver: ke,
    onDragEnter: I,
    onDragLeave: P,
    onDrop: Pe
  }), /* @__PURE__ */ ae("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": x,
    "aria-selected": r,
    "aria-sort": N,
    tabIndex: d ? 0 : D,
    className: z,
    style: {
      ...Rr(e, n, x),
      ...nt(e, t)
    },
    onFocus: ye,
    onClick: ve,
    onKeyDown: M ? Me : void 0,
    ...A,
    children: [J({
      column: e,
      sortDirection: v,
      priority: R,
      tabIndex: S
    }), F && /* @__PURE__ */ p("div", {
      className: ea,
      onClick: ei,
      onPointerDown: _
    })]
  });
}
function Qn(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const sa = "r1upfr807-0-0-beta-47", Cn = `rdg-row ${sa}`, ca = "r190mhd37-0-0-beta-47", Bt = "rdg-row-selected", la = "r139qu9m7-0-0-beta-47", da = "rdg-top-summary-row", ua = "rdg-bottom-summary-row", fa = "h10tskcx7-0-0-beta-47", zr = `rdg-header-row ${fa}`;
function ha({
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
  const f = jo(), m = [];
  for (let l = 0; l < t.length; l++) {
    const b = t[l], u = me(b, a, {
      type: "HEADER"
    });
    u !== void 0 && (l += u - 1), m.push(/* @__PURE__ */ p(aa, {
      column: b,
      colSpan: u,
      rowIdx: e,
      isCellSelected: s === b.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: d && l === 0,
      direction: w,
      dragDropKey: f
    }, b.key));
  }
  return /* @__PURE__ */ p("div", {
    role: "row",
    "aria-rowindex": e,
    className: Ee(zr, s === -1 && Bt),
    children: m
  });
}
const ga = /* @__PURE__ */ He(ha);
function ma({
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
        i.push(/* @__PURE__ */ p(ji, {
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
    className: zr,
    children: i
  });
}
const wa = /* @__PURE__ */ He(ma), ya = "c6ra8a37-0-0-beta-47", pa = `rdg-cell-copied ${ya}`, ba = "cq910m07-0-0-beta-47", Ca = `rdg-cell-dragged-over ${ba}`;
function xa({
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
    childTabIndex: b,
    onFocus: u
  } = xt(n), {
    cellClass: g
  } = e, x = Ct(e, typeof g == "function" ? g(i) : g, r && pa, o && Ca), D = Dr(e, i);
  function S(R) {
    f({
      rowIdx: a,
      idx: e.idx
    }, R);
  }
  function k(R) {
    if (s) {
      const N = ht(R);
      if (s({
        row: i,
        column: e,
        selectCell: S
      }, N), N.isGridDefaultPrevented()) return;
    }
    S();
  }
  function T(R) {
    if (d) {
      const N = ht(R);
      if (d({
        row: i,
        column: e,
        selectCell: S
      }, N), N.isGridDefaultPrevented()) return;
    }
    S();
  }
  function H(R) {
    if (c) {
      const N = ht(R);
      if (c({
        row: i,
        column: e,
        selectCell: S
      }, N), N.isGridDefaultPrevented()) return;
    }
    S(!0);
  }
  function v(R) {
    w(e, R);
  }
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !D || void 0,
    tabIndex: l,
    className: x,
    style: nt(e, t),
    onClick: k,
    onDoubleClick: H,
    onContextMenu: T,
    onFocus: u,
    ...m,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: D,
      tabIndex: b,
      onRowChange: v
    })
  });
}
const va = /* @__PURE__ */ He(xa);
function ka({
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
  onCellContextMenu: b,
  rowClass: u,
  setDraggedOverRowIdx: g,
  onMouseEnter: x,
  onRowChange: D,
  selectCell: S,
  ...k
}, T) {
  const H = de((M, F) => {
    D(M, t, F);
  });
  function v(M) {
    g == null || g(t), x == null || x(M);
  }
  e = Ee(Cn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && Bt);
  const R = [];
  for (let M = 0; M < w.length; M++) {
    const F = w[M], {
      idx: Y
    } = F, z = me(F, c, {
      type: "ROW",
      row: d
    });
    z !== void 0 && (M += z - 1);
    const J = r === Y;
    J && f ? R.push(f) : R.push(/* @__PURE__ */ p(va, {
      column: F,
      colSpan: z,
      row: d,
      rowIdx: t,
      isCopied: a === Y,
      isDraggedOver: s === Y,
      isCellSelected: J,
      onClick: m,
      onDoubleClick: l,
      onContextMenu: b,
      onRowChange: H,
      selectCell: S
    }, F.key));
  }
  const N = j(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ p(Pr, {
    value: N,
    children: /* @__PURE__ */ p("div", {
      role: "row",
      ref: T,
      className: e,
      onMouseEnter: v,
      style: pn(n),
      ...k,
      children: R
    })
  });
}
const Ar = /* @__PURE__ */ He(/* @__PURE__ */ yn(ka)), Yl = Ar;
function $r(e, t) {
  return /* @__PURE__ */ p(Ar, {
    ...t
  }, e);
}
function Da({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const o = be(null);
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
const Sa = "a3ejtar7-0-0-beta-47", Ra = `rdg-sort-arrow ${Sa}`;
function Ia({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ ae(wn, {
    children: [Ta({
      sortDirection: e
    }), Ea({
      priority: t
    })]
  });
}
function Ta({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ p("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Ra,
    "aria-hidden": !0,
    children: /* @__PURE__ */ p("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Ea({
  priority: e
}) {
  return e;
}
const Ma = "rnvodz57-0-0-beta-47", Pa = `rdg ${Ma}`, Oa = "vlqv91k7-0-0-beta-47", Na = `rdg-viewport-dragging ${Oa}`, Fa = "f1lsfrzw7-0-0-beta-47", La = "f1cte0lg7-0-0-beta-47", Ha = "s8wc6fl7-0-0-beta-47";
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
  } = xt(o), {
    summaryCellClass: d
  } = e, w = Ct(e, Ha, typeof d == "function" ? d(n) : d);
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
const za = /* @__PURE__ */ He(Wa), Aa = "skuhp557-0-0-beta-47", $a = "tf8l5ub7-0-0-beta-47", Ya = `rdg-summary-row ${Aa}`;
function _a({
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
    const l = r[m], b = me(l, a, {
      type: "SUMMARY",
      row: n
    });
    b !== void 0 && (m += b - 1);
    const u = s === l.idx;
    f.push(/* @__PURE__ */ p(za, {
      column: l,
      colSpan: b,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, l.key));
  }
  return /* @__PURE__ */ p("div", {
    role: "row",
    "aria-rowindex": w,
    className: Ee(Cn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Ya, c ? `${da} ${$a}` : ua, s === -1 && Bt),
    style: {
      ...pn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: f
  });
}
const Jn = /* @__PURE__ */ He(_a);
function Ba(e, t) {
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
    sortColumns: b,
    onSortColumnsChange: u,
    defaultColumnOptions: g,
    onCellClick: x,
    onCellDoubleClick: D,
    onCellContextMenu: S,
    onCellKeyDown: k,
    onSelectedCellChange: T,
    onScroll: H,
    onColumnResize: v,
    onColumnsReorder: R,
    onFill: N,
    onCopy: M,
    onPaste: F,
    enableVirtualization: Y,
    renderers: z,
    className: J,
    style: _,
    rowClass: ne,
    direction: ve,
    role: ye,
    "aria-label": Me,
    "aria-labelledby": We,
    "aria-describedby": ce,
    "aria-rowcount": ke,
    "data-testid": Pe
  } = e, I = _t(), P = ye ?? "grid", A = c ?? 35, C = d ?? (typeof A == "number" ? A : 35), W = w ?? (typeof A == "number" ? A : 35), U = (z == null ? void 0 : z.renderRow) ?? (I == null ? void 0 : I.renderRow) ?? $r, G = (z == null ? void 0 : z.renderSortStatus) ?? (I == null ? void 0 : I.renderSortStatus) ?? Ia, $ = (z == null ? void 0 : z.renderCheckbox) ?? (I == null ? void 0 : I.renderCheckbox) ?? yi, X = (z == null ? void 0 : z.noRowsFallback) ?? (I == null ? void 0 : I.noRowsFallback), te = Y ?? !0, oe = ve ?? "ltr", [De, Se] = re(0), [Ie, pe] = re(0), [ue, rt] = re(() => /* @__PURE__ */ new Map()), [ze, Ue] = re(() => /* @__PURE__ */ new Map()), [Ge, Sn] = re(null), [Rn, oo] = re(!1), [ot, io] = re(void 0), [Oe, In] = re(null), Tn = V((h) => ue.get(h.key) ?? ze.get(h.key) ?? h.width, [ze, ue]), [je, En, Mn, ao] = Wi(), {
    columns: ie,
    colSpanColumns: Pn,
    lastFrozenColumnIndex: ge,
    headerRowsCount: Ae,
    colOverscanStartIdx: so,
    colOverscanEndIdx: On,
    templateColumns: co,
    layoutCssVars: lo,
    totalFrozenColumnWidth: uo
  } = Li({
    rawColumns: n,
    defaultColumnOptions: g,
    getColumnWidth: Tn,
    scrollLeft: Ie,
    viewportWidth: En,
    enableVirtualization: te
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Nn = it + Ke, qe = Ae + it, Ut = Ae - 1, fe = -qe, Dt = fe + Ut, $e = r.length + Ke - 1, [E, Xe] = re(() => ({
    idx: -1,
    rowIdx: fe - 1,
    mode: "SELECT"
  })), Gt = be(E), Fn = be(ot), Ln = be(-1), St = be(null), Rt = be(!1), jt = P === "treegrid", Kt = Ae * C, Hn = Nn * W, It = Mn - Kt - Hn, qt = f != null && l != null, Wn = oe === "rtl", fo = Wn ? "ArrowRight" : "ArrowLeft", zn = Wn ? "ArrowLeft" : "ArrowRight", An = ke ?? Ae + r.length + Nn, ho = j(() => ({
    renderCheckbox: $,
    renderSortStatus: G
  }), [$, G]), go = j(() => {
    let h = !1, y = !1;
    if (a != null && f != null && f.size > 0) {
      for (const O of r)
        if (f.has(a(O)) ? h = !0 : y = !0, h && y) break;
    }
    return {
      isRowSelected: h && !y,
      isIndeterminate: h && y
    };
  }, [r, f, a]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: mo,
    getRowTop: $n,
    getRowHeight: wo,
    findRowIdx: Yn
  } = Ai({
    rows: r,
    rowHeight: A,
    clientHeight: It,
    scrollTop: De,
    enableVirtualization: te
  }), Ne = zi({
    columns: ie,
    colSpanColumns: Pn,
    colOverscanStartIdx: so,
    colOverscanEndIdx: On,
    lastFrozenColumnIndex: ge,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: yo,
    handleColumnResize: po
  } = Hi(ie, Ne, co, je, En, ue, ze, rt, Ue, v), bo = jt ? -1 : 0, Ve = ie.length - 1, Vt = Jt(E), Tt = jn(E), Co = C + Xt + Hn + ao, xo = de(po), vo = de(R), ko = de(u), Do = de(x), So = de(D), Ro = de(S), Io = de(Mo), To = de(Bn), Eo = de(Et), Zt = de(ct), _n = de(({
    idx: h,
    rowIdx: y
  }) => {
    ct({
      rowIdx: fe + y - 1,
      idx: h
    });
  });
  tt(() => {
    if (!Vt || nn(E, Gt.current)) {
      Gt.current = E;
      return;
    }
    Gt.current = E, E.idx === -1 && (St.current.focus({
      preventScroll: !0
    }), Ft(St.current));
  }), tt(() => {
    Rt.current && (Rt.current = !1, qn());
  }), Uo(t, () => ({
    element: je.current,
    scrollToCell({
      idx: h,
      rowIdx: y
    }) {
      const O = h !== void 0 && h > ge && h < ie.length ? h : void 0, L = y !== void 0 && Ze(y) ? y : void 0;
      (O !== void 0 || L !== void 0) && In({
        idx: O,
        rowIdx: L
      });
    },
    selectCell: ct
  }));
  const Qt = V((h) => {
    io(h), Fn.current = h;
  }, []);
  function Mo(h) {
    if (!l) return;
    gt(a);
    const y = new Set(f);
    for (const O of r) {
      if ((m == null ? void 0 : m(O)) === !0) continue;
      const L = a(O);
      h.checked ? y.add(L) : y.delete(L);
    }
    l(y);
  }
  function Bn(h) {
    if (!l) return;
    gt(a);
    const {
      row: y,
      checked: O,
      isShiftClick: L
    } = h;
    if ((m == null ? void 0 : m(y)) === !0) return;
    const B = new Set(f), q = a(y), Z = Ln.current, Q = r.indexOf(y);
    if (Ln.current = Q, O ? B.add(q) : B.delete(q), L && Z !== -1 && Z !== Q && Z < r.length) {
      const he = hi(Q - Z);
      for (let le = Z + he; le !== Q; le += he) {
        const Re = r[le];
        (m == null ? void 0 : m(Re)) !== !0 && (O ? B.add(a(Re)) : B.delete(a(Re)));
      }
    }
    l(B);
  }
  function Po(h) {
    var Q;
    const {
      idx: y,
      rowIdx: O,
      mode: L
    } = E;
    if (L === "EDIT") return;
    if (k && Ze(O)) {
      const he = r[O], le = ht(h);
      if (k({
        mode: "SELECT",
        row: he,
        column: ie[y],
        rowIdx: O,
        selectCell: ct
      }, le), le.isGridDefaultPrevented()) return;
    }
    if (!(h.target instanceof Element)) return;
    const B = h.target.closest(".rdg-cell") !== null, q = jt && h.target === St.current;
    if (!B && !q) return;
    const {
      keyCode: Z
    } = h;
    if (Tt && (F != null || M != null) && Ht(h)) {
      if (Z === 67) {
        if (((Q = window.getSelection()) == null ? void 0 : Q.isCollapsed) === !1) return;
        No();
        return;
      }
      if (Z === 86) {
        Fo();
        return;
      }
    }
    switch (h.key) {
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
        Kn(h);
        break;
      default:
        Lo(h);
        break;
    }
  }
  function Oo(h) {
    const {
      scrollTop: y,
      scrollLeft: O
    } = h.currentTarget;
    Lt(() => {
      Se(y), pe(gi(O));
    }), H == null || H(h);
  }
  function Et(h, y, O) {
    if (typeof s != "function" || O === r[y]) return;
    const L = [...r];
    L[y] = O, s(L, {
      indexes: [y],
      column: h
    });
  }
  function Un() {
    E.mode === "EDIT" && Et(ie[E.idx], E.rowIdx, E.row);
  }
  function No() {
    const {
      idx: h,
      rowIdx: y
    } = E, O = r[y], L = ie[h].key;
    Sn({
      row: O,
      columnKey: L
    }), M == null || M({
      sourceRow: O,
      sourceColumnKey: L
    });
  }
  function Fo() {
    if (!F || !s || Ge === null || !Mt(E))
      return;
    const {
      idx: h,
      rowIdx: y
    } = E, O = ie[h], L = r[y], B = F({
      sourceRow: Ge.row,
      sourceColumnKey: Ge.columnKey,
      targetRow: L,
      targetColumnKey: O.key
    });
    Et(O, y, B);
  }
  function Lo(h) {
    if (!Tt) return;
    const y = r[E.rowIdx], {
      key: O,
      shiftKey: L
    } = h;
    if (qt && L && O === " ") {
      gt(a);
      const B = a(y);
      Bn({
        row: y,
        checked: !f.has(B),
        isShiftClick: !1
      }), h.preventDefault();
      return;
    }
    Mt(E) && ni(h) && Xe(({
      idx: B,
      rowIdx: q
    }) => ({
      idx: B,
      rowIdx: q,
      mode: "EDIT",
      row: y,
      originalRow: y
    }));
  }
  function Gn(h) {
    return h >= bo && h <= Ve;
  }
  function Ze(h) {
    return h >= 0 && h < r.length;
  }
  function Jt({
    idx: h,
    rowIdx: y
  }) {
    return y >= fe && y <= $e && Gn(h);
  }
  function Ho({
    idx: h,
    rowIdx: y
  }) {
    return Ze(y) && h >= 0 && h <= Ve;
  }
  function jn({
    idx: h,
    rowIdx: y
  }) {
    return Ze(y) && Gn(h);
  }
  function Mt(h) {
    return Ho(h) && ai({
      columns: ie,
      rows: r,
      selectedPosition: h
    });
  }
  function ct(h, y) {
    if (!Jt(h)) return;
    Un();
    const O = r[h.rowIdx], L = nn(E, h);
    y && Mt(h) ? Xe({
      ...h,
      mode: "EDIT",
      row: O,
      originalRow: O
    }) : L ? Ft(er(je.current)) : (Rt.current = !0, Xe({
      ...h,
      mode: "SELECT"
    })), T && !L && T({
      rowIdx: h.rowIdx,
      row: O,
      column: ie[h.idx]
    });
  }
  function Wo(h, y, O) {
    const {
      idx: L,
      rowIdx: B
    } = E, q = Vt && L === -1;
    switch (h) {
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
      case fo:
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
          rowIdx: y ? fe : B
        };
      case "End":
        return q ? {
          idx: L,
          rowIdx: $e
        } : {
          idx: Ve,
          rowIdx: y ? $e : B
        };
      case "PageUp": {
        if (E.rowIdx === fe) return E;
        const Z = $n(B) + wo(B) - It;
        return {
          idx: L,
          rowIdx: Z > 0 ? Yn(Z) : 0
        };
      }
      case "PageDown": {
        if (E.rowIdx >= r.length) return E;
        const Z = $n(B) + It;
        return {
          idx: L,
          rowIdx: Z < Xt ? Yn(Z) : r.length - 1
        };
      }
      default:
        return E;
    }
  }
  function Kn(h) {
    const {
      key: y,
      shiftKey: O
    } = h;
    let L = "NONE";
    if (y === "Tab") {
      if (li({
        shiftKey: O,
        maxColIdx: Ve,
        minRowIdx: fe,
        maxRowIdx: $e,
        selectedPosition: E
      })) {
        Un();
        return;
      }
      L = "CHANGE_ROW";
    }
    h.preventDefault();
    const B = Ht(h), q = Wo(y, B, O);
    if (nn(E, q)) return;
    const Z = ci({
      moveUp: y === "ArrowUp",
      moveNext: y === zn || y === "Tab" && !O,
      columns: ie,
      colSpanColumns: Pn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: fe,
      mainHeaderRowIdx: Dt,
      maxRowIdx: $e,
      lastFrozenColumnIndex: ge,
      cellNavigationMode: L,
      currentPosition: E,
      nextPosition: q,
      isCellWithinBounds: Jt
    });
    ct(Z);
  }
  function zo(h) {
    if (ot === void 0) return;
    const {
      rowIdx: y
    } = E;
    return (y < ot ? y < h && h <= ot : y > h && h >= ot) ? E.idx : void 0;
  }
  function qn() {
    const h = er(je.current);
    if (h === null) return;
    Ft(h), (h.querySelector('[tabindex="0"]') ?? h).focus({
      preventScroll: !0
    });
  }
  function Ao() {
    if (N == null || E.mode === "EDIT" || !jn(E))
      return;
    const {
      idx: h,
      rowIdx: y
    } = E, O = ie[h];
    if (O.renderEditCell == null || O.editable === !1)
      return;
    const L = Tn(O);
    return /* @__PURE__ */ p(Bi, {
      gridRowStart: qe + y + 1,
      rows: r,
      column: O,
      columnWidth: L,
      maxColIdx: Ve,
      isLastRow: y === $e,
      selectedPosition: E,
      isCellEditable: Mt,
      latestDraggedOverRowIdx: Fn,
      onRowsChange: s,
      onClick: qn,
      onFill: N,
      setDragging: oo,
      setDraggedOverRowIdx: Qt
    });
  }
  function $o(h) {
    if (E.rowIdx !== h || E.mode === "SELECT") return;
    const {
      idx: y,
      row: O
    } = E, L = ie[y], B = me(L, ge, {
      type: "ROW",
      row: O
    }), q = (Q) => {
      Rt.current = Q, Xe(({
        idx: he,
        rowIdx: le
      }) => ({
        idx: he,
        rowIdx: le,
        mode: "SELECT"
      }));
    }, Z = (Q, he, le) => {
      he ? Lt(() => {
        Et(L, E.rowIdx, Q), q(le);
      }) : Xe((Re) => ({
        ...Re,
        row: Q
      }));
    };
    return r[E.rowIdx] !== E.originalRow && q(!1), /* @__PURE__ */ p(Gi, {
      column: L,
      colSpan: B,
      row: O,
      rowIdx: h,
      onRowChange: Z,
      closeEditor: q,
      onKeyDown: k,
      navigate: Kn
    }, L.key);
  }
  function lt(h) {
    const y = E.idx === -1 ? void 0 : ie[E.idx];
    return y !== void 0 && E.rowIdx === h && !Ne.includes(y) ? E.idx > On ? [...Ne, y] : [...Ne.slice(0, ge + 1), y, ...Ne.slice(ge + 1)] : Ne;
  }
  function Yo() {
    const h = [], {
      idx: y,
      rowIdx: O
    } = E, L = Tt && O < at ? at - 1 : at, B = Tt && O > st ? st + 1 : st;
    for (let q = L; q <= B; q++) {
      const Z = q === at - 1 || q === st + 1, Q = Z ? O : q;
      let he = Ne;
      const le = y === -1 ? void 0 : ie[y];
      le !== void 0 && (Z ? he = [le] : he = lt(Q));
      const Re = r[Q], _o = qe + Q + 1;
      let en = Q, tn = !1;
      typeof a == "function" && (en = a(Re), tn = (f == null ? void 0 : f.has(en)) ?? !1), h.push(U(en, {
        "aria-rowindex": qe + Q + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: Q,
        row: Re,
        viewportColumns: he,
        isRowSelectionDisabled: (m == null ? void 0 : m(Re)) ?? !1,
        isRowSelected: tn,
        onCellClick: Do,
        onCellDoubleClick: So,
        onCellContextMenu: Ro,
        rowClass: ne,
        gridRowStart: _o,
        copiedCellIdx: Ge !== null && Ge.row === Re ? ie.findIndex((Bo) => Bo.key === Ge.columnKey) : void 0,
        selectedCellIdx: O === Q ? y : void 0,
        draggedOverCellIdx: zo(Q),
        setDraggedOverRowIdx: Rn ? Qt : void 0,
        lastFrozenColumnIndex: ge,
        onRowChange: Eo,
        selectCell: Zt,
        selectedCellEditor: $o(Q)
      }));
    }
    return h;
  }
  (E.idx > Ve || E.rowIdx > $e) && (Xe({
    idx: -1,
    rowIdx: fe - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Pt = `repeat(${Ae}, ${C}px)`;
  it > 0 && (Pt += ` repeat(${it}, ${W}px)`), r.length > 0 && (Pt += mo), Ke > 0 && (Pt += ` repeat(${Ke}, ${W}px)`);
  const Xn = E.idx === -1 && E.rowIdx !== fe - 1;
  return /* @__PURE__ */ ae("div", {
    role: P,
    "aria-label": Me,
    "aria-labelledby": We,
    "aria-describedby": ce,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": ie.length,
    "aria-rowcount": An,
    className: Ee(Pa, J, Rn && Na),
    style: {
      ..._,
      scrollPaddingInlineStart: E.idx > ge || (Oe == null ? void 0 : Oe.idx) !== void 0 ? `${uo}px` : void 0,
      scrollPaddingBlock: Ze(E.rowIdx) || (Oe == null ? void 0 : Oe.rowIdx) !== void 0 ? `${Kt + it * W}px ${Ke * W}px` : void 0,
      gridTemplateColumns: yo,
      gridTemplateRows: Pt,
      "--rdg-header-row-height": `${C}px`,
      "--rdg-scroll-height": `${Co}px`,
      ...lo
    },
    dir: oe,
    ref: je,
    onScroll: Oo,
    onKeyDown: Po,
    "data-testid": Pe,
    children: [/* @__PURE__ */ ae(Si, {
      value: ho,
      children: [/* @__PURE__ */ p(Ti, {
        value: Io,
        children: /* @__PURE__ */ ae(Ii, {
          value: go,
          children: [Array.from({
            length: Ut
          }, (h, y) => /* @__PURE__ */ p(wa, {
            rowIdx: y + 1,
            level: -Ut + y,
            columns: lt(fe + y),
            selectedCellIdx: E.rowIdx === fe + y ? E.idx : void 0,
            selectCell: _n
          }, y)), /* @__PURE__ */ p(ga, {
            rowIdx: Ae,
            columns: lt(Dt),
            onColumnResize: xo,
            onColumnsReorder: vo,
            sortColumns: b,
            onSortColumnsChange: ko,
            lastFrozenColumnIndex: ge,
            selectedCellIdx: E.rowIdx === Dt ? E.idx : void 0,
            selectCell: _n,
            shouldFocusGrid: !Vt,
            direction: oe
          })]
        })
      }), r.length === 0 && X ? X : /* @__PURE__ */ ae(wn, {
        children: [o == null ? void 0 : o.map((h, y) => {
          const O = Ae + 1 + y, L = Dt + 1 + y, B = E.rowIdx === L, q = Kt + W * y;
          return /* @__PURE__ */ p(Jn, {
            "aria-rowindex": O,
            rowIdx: L,
            gridRowStart: O,
            row: h,
            top: q,
            bottom: void 0,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: ge,
            selectedCellIdx: B ? E.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, y);
        }), /* @__PURE__ */ p(Ri, {
          value: To,
          children: Yo()
        }), i == null ? void 0 : i.map((h, y) => {
          const O = qe + r.length + y + 1, L = r.length + y, B = E.rowIdx === L, q = It > Xt ? Mn - W * (i.length - y) : void 0, Z = q === void 0 ? W * (i.length - 1 - y) : void 0;
          return /* @__PURE__ */ p(Jn, {
            "aria-rowindex": An - Ke + y + 1,
            rowIdx: L,
            gridRowStart: O,
            row: h,
            top: q,
            bottom: Z,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: ge,
            selectedCellIdx: B ? E.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, y);
        })]
      })]
    }), Ao(), ii(Ne), jt && /* @__PURE__ */ p("div", {
      ref: St,
      tabIndex: Xn ? 0 : -1,
      className: Ee(Fa, Xn && [ca, ge !== -1 && la], !Ze(E.rowIdx) && La),
      style: {
        gridRowStart: E.rowIdx + qe + 1
      }
    }), Oe !== null && /* @__PURE__ */ p(Da, {
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
const Yr = /* @__PURE__ */ yn(Ba);
function Ua({
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
  } = xt(o);
  function l() {
    d(e);
  }
  const b = c && s === i.idx;
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: w,
    className: Ct(i),
    style: {
      ...nt(i),
      cursor: b ? "pointer" : "default"
    },
    onClick: b ? l : void 0,
    onFocus: m,
    children: (!c || b) && ((u = i.renderGroupCell) == null ? void 0 : u.call(i, {
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
const Ga = /* @__PURE__ */ He(Ua), ja = "g1yxluv37-0-0-beta-47", Ka = `rdg-group-row ${ja}`;
function qa({
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
  const b = j(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: i
  }), [i]);
  return /* @__PURE__ */ p(Pr, {
    value: b,
    children: /* @__PURE__ */ p("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Ee(Cn, Ka, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Bt),
      onClick: l,
      style: pn(s),
      ...f,
      children: r.map((u) => /* @__PURE__ */ p(Ga, {
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
const Xa = /* @__PURE__ */ He(qa);
function Va({
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
}, b) {
  var ce, ke, Pe;
  const u = _t(), g = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? $r, x = 1 + (((ce = l.topSummaryRows) == null ? void 0 : ce.length) ?? 0), D = l.direction === "rtl", S = D ? "ArrowRight" : "ArrowLeft", k = D ? "ArrowLeft" : "ArrowRight", T = de(Me), {
    columns: H,
    groupBy: v
  } = j(() => {
    const I = [...e].sort(({
      key: A
    }, {
      key: C
    }) => A === Be ? -1 : C === Be ? 1 : d.includes(A) ? d.includes(C) ? d.indexOf(A) - d.indexOf(C) : -1 : d.includes(C) ? 1 : 0), P = [];
    for (const [A, C] of I.entries())
      d.includes(C.key) && (P.push(C.key), I[A] = {
        ...C,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: C.renderGroupCell ?? vi,
        editable: !1
      });
    return {
      columns: I,
      groupBy: P
    };
  }, [e, d]), [R, N] = j(() => {
    if (v.length === 0) return [void 0, t.length];
    const I = (P, [A, ...C], W) => {
      let U = 0;
      const G = {};
      for (const [$, X] of Object.entries(w(P, A))) {
        const [te, oe] = C.length === 0 ? [X, X.length] : I(X, C, W + U + 1);
        G[$] = {
          childRows: X,
          childGroups: te,
          startRowIndex: W + U
        }, U += oe + 1;
      }
      return [G, U];
    };
    return I(t, v, 0);
  }, [v, w, t]), [M, F] = j(() => {
    const I = /* @__PURE__ */ new Set();
    if (!R) return [t, C];
    const P = [], A = (W, U, G) => {
      if (Za(W)) {
        P.push(...W);
        return;
      }
      Object.keys(W).forEach(($, X, te) => {
        const oe = U !== void 0 ? `${U}__${$}` : $, De = f.has(oe), {
          childRows: Se,
          childGroups: Ie,
          startRowIndex: pe
        } = W[$], ue = {
          id: oe,
          parentId: U,
          groupKey: $,
          isExpanded: De,
          childRows: Se,
          level: G,
          posInSet: X,
          startRowIndex: pe,
          setSize: te.length
        };
        P.push(ue), I.add(ue), De && A(Ie, oe, G + 1);
      });
    };
    return A(R, void 0, 0), [P, C];
    function C(W) {
      return I.has(W);
    }
  }, [f, R, t]), Y = j(() => typeof n == "function" ? (I) => F(I) ? n({
    type: "GROUP",
    row: I
  }) : n({
    type: "ROW",
    row: I
  }) : n, [F, n]), z = V((I) => {
    const P = M.indexOf(I);
    for (let A = P - 1; A >= 0; A--) {
      const C = M[A];
      if (F(C) && (!F(I) || I.parentId === C.id))
        return [C, A];
    }
  }, [F, M]), J = V((I) => {
    if (F(I))
      return I.id;
    if (typeof r == "function")
      return r(I);
    const P = z(I);
    if (P !== void 0) {
      const {
        startRowIndex: A,
        childRows: C
      } = P[0], W = C.indexOf(I);
      return A + W + 1;
    }
    return M.indexOf(I);
  }, [z, F, r, M]), _ = j(() => {
    if (a == null) return null;
    gt(r);
    const I = new Set(a);
    for (const P of M)
      F(P) && P.childRows.every((C) => a.has(r(C))) && I.add(P.id);
    return I;
  }, [F, r, a, M]);
  function ne(I) {
    if (!s) return;
    gt(r);
    const P = new Set(a);
    for (const A of M) {
      const C = J(A);
      if (_ != null && _.has(C) && !I.has(C))
        if (F(A))
          for (const W of A.childRows)
            P.delete(r(W));
        else
          P.delete(C);
      else if (!(_ != null && _.has(C)) && I.has(C))
        if (F(A))
          for (const W of A.childRows)
            P.add(r(W));
        else
          P.add(C);
    }
    s(P);
  }
  function ve(I, P) {
    if (o == null || o(I, P), P.isGridDefaultPrevented() || I.mode === "EDIT") return;
    const {
      column: A,
      rowIdx: C,
      selectCell: W
    } = I, U = (A == null ? void 0 : A.idx) ?? -1, G = M[C];
    if (F(G)) {
      if (U === -1 && (P.key === S && G.isExpanded || P.key === k && !G.isExpanded) && (P.preventDefault(), P.preventGridDefault(), Me(G.id)), U === -1 && P.key === S && !G.isExpanded && G.level !== 0) {
        const $ = z(G);
        $ !== void 0 && (P.preventGridDefault(), W({
          idx: U,
          rowIdx: $[1]
        }));
      }
      Ht(P) && (P.keyCode === 67 || P.keyCode === 86) && P.preventGridDefault();
    }
  }
  function ye(I, {
    indexes: P,
    column: A
  }) {
    if (!i) return;
    const C = [...t], W = [];
    for (const U of P) {
      const G = t.indexOf(M[U]);
      C[G] = I[U], W.push(G);
    }
    i(C, {
      indexes: W,
      column: A
    });
  }
  function Me(I) {
    const P = new Set(f);
    P.has(I) ? P.delete(I) : P.add(I), m(P);
  }
  function We(I, {
    row: P,
    rowClass: A,
    onCellClick: C,
    onCellDoubleClick: W,
    onCellContextMenu: U,
    onRowChange: G,
    lastFrozenColumnIndex: $,
    copiedCellIdx: X,
    draggedOverCellIdx: te,
    setDraggedOverRowIdx: oe,
    selectedCellEditor: De,
    ...Se
  }) {
    if (F(P)) {
      const {
        startRowIndex: ue
      } = P;
      return /* @__PURE__ */ p(Xa, {
        ...Se,
        "aria-rowindex": x + ue + 1,
        row: P,
        groupBy: v,
        toggleGroup: T
      }, I);
    }
    let Ie = Se["aria-rowindex"];
    const pe = z(P);
    if (pe !== void 0) {
      const {
        startRowIndex: ue,
        childRows: rt
      } = pe[0], ze = rt.indexOf(P);
      Ie = ue + x + ze + 2;
    }
    return g(I, {
      ...Se,
      "aria-rowindex": Ie,
      row: P,
      rowClass: A,
      onCellClick: C,
      onCellDoubleClick: W,
      onCellContextMenu: U,
      onRowChange: G,
      lastFrozenColumnIndex: $,
      copiedCellIdx: X,
      draggedOverCellIdx: te,
      setDraggedOverRowIdx: oe,
      selectedCellEditor: De
    });
  }
  return /* @__PURE__ */ p(Yr, {
    ...l,
    role: "treegrid",
    "aria-rowcount": N + 1 + (((ke = l.topSummaryRows) == null ? void 0 : ke.length) ?? 0) + (((Pe = l.bottomSummaryRows) == null ? void 0 : Pe.length) ?? 0),
    ref: b,
    columns: H,
    rows: M,
    rowHeight: Y,
    rowKeyGetter: J,
    onRowsChange: ye,
    selectedRows: _,
    onSelectedRowsChange: ne,
    onCellKeyDown: ve,
    renderers: {
      ...c,
      renderRow: We
    }
  });
}
function Za(e) {
  return Array.isArray(e);
}
const _l = /* @__PURE__ */ yn(Va), Qa = "t7vyx3i7-0-0-beta-47", Ja = `rdg-text-editor ${Qa}`;
function es(e) {
  e == null || e.focus(), e == null || e.select();
}
function Bl({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ p("input", {
    className: Ja,
    ref: es,
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
}, ts = {
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
}, ns = we.div`
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
`, vt = Te.createContext({
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
}), rs = "data-grid-hidden-column-visibility", os = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = rs,
  onHiddenColumnsChange: a,
  resetLabel: s
}) => {
  const [c, d] = Te.useState(0), [w, f] = Te.useState(
    null
  ), [m, l] = Te.useState([]), b = V(
    (k) => {
      localStorage.setItem(i, JSON.stringify(k)), d((T) => T + 1), l(k);
    },
    [i]
  ), u = JSON.stringify(r ?? []), g = j(
    () => JSON.parse(u),
    [u]
  );
  _e(() => {
    const k = localStorage.getItem(i);
    if (k) {
      const T = JSON.parse(k);
      b(Array.isArray(T) ? T : []);
    } else
      b(g);
  }, [i, g, b]);
  const x = V(
    (k) => {
      b(k), a == null || a(k);
    },
    [b, a]
  ), D = V(
    () => x(g),
    [x, g]
  ), S = j(
    () => e.filter((k) => !(n != null && n.includes(k.key))),
    [e, n]
  );
  return /* @__PURE__ */ p(
    vt.Provider,
    {
      value: {
        gridKey: `data-grid-${c}`,
        chooserAnchor: w,
        setChooserAnchor: f,
        columns: S,
        hiddenColumn: m,
        setHiddenColumn: x,
        resetHiddenColumns: D,
        resetLabel: s,
        enabled: o
      },
      children: t
    }
  );
}, xn = we(Xo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${ee.primary500};
    }
`, is = we(vr)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, Ul = ({ IconComponent: e }) => {
  const { setChooserAnchor: t } = Ce(vt), n = Te.useRef(null), r = V(() => {
    var i;
    const o = (i = n.current) == null ? void 0 : i.getBoundingClientRect();
    o && t({ top: o.bottom, left: o.right });
  }, [t]);
  return /* @__PURE__ */ p("div", { ref: n, children: /* @__PURE__ */ p(e, { onClick: r }) });
}, as = () => {
  const {
    columns: e,
    hiddenColumn: t,
    setHiddenColumn: n,
    chooserAnchor: r,
    setChooserAnchor: o,
    resetHiddenColumns: i,
    resetLabel: a
  } = Ce(vt), s = V(() => {
    o(null);
  }, [o]), c = V(() => {
    i(), o(null);
  }, [i, o]), d = V(
    (w) => () => {
      const f = t.indexOf(w);
      n(
        f === -1 ? [...t, w] : t.filter((m) => m !== w)
      );
    },
    [t, n]
  );
  return /* @__PURE__ */ ae(
    Ko,
    {
      id: "column-visibility-menu",
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      transformOrigin: { vertical: "top", horizontal: "right" },
      open: r !== null,
      onClose: s,
      children: [
        e.map((w) => /* @__PURE__ */ ae(is, { onClick: d(w.key), children: [
          /* @__PURE__ */ p(xn, { checked: !t.includes(w.key) }),
          w.name
        ] }, w.key)),
        a && /* @__PURE__ */ p(qo, {}),
        a && /* @__PURE__ */ p(vr, { onClick: c, children: a })
      ]
    }
  );
};
var et = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(et || {}), yt = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(yt || {});
function ss(e, t, n, r) {
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
const cs = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, o] = re(n ?? []), i = j(() => r.length === 0 ? t : [...t].sort((s, c) => {
    for (const d of r) {
      const w = e.find((l) => l.key === d.columnKey), m = ss(
        d.columnKey,
        w == null ? void 0 : w.type,
        w == null ? void 0 : w.sortComparator,
        w == null ? void 0 : w.getColumnValue
      )(s, c);
      if (m !== 0)
        return d.direction === "ASC" ? m : -m;
    }
    return 0;
  }), [t, r]), a = V((s) => {
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
}, mt = 40, ls = 200, ds = "rdg-row-expanded", us = "rdg-detail-row", _r = "__rdgDetailParent", fs = (e) => ({ id: `rdg-detail:${e.id}`, [_r]: e }), vn = (e) => e[_r], zt = (e) => vn(e) !== void 0, hs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, fs(r)] : [r]);
}, gs = we.button`
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
`, ms = () => /* @__PURE__ */ p("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ p("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), Br = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ p(
    gs,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), Ur(t, e.id);
      },
      children: /* @__PURE__ */ p(ms, {})
    }
  );
}, Ur = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, ws = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', Gr = (e, t, n, r = []) => zt(e) || t === ps || t === jr || r.includes(t) ? !1 : !(n instanceof Element && n.closest(ws)), Gl = (e, t, n) => Gr(e, t, n), tr = we.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, ys = we.span`
    display: inline-block;
    flex: 0 0 ${mt - 16}px;
`, ps = Be, jr = "rdg-expander-column", bs = (e) => ({
  key: jr,
  name: "",
  frozen: !0,
  width: mt,
  minWidth: mt,
  maxWidth: mt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ p(Br, { row: t, expandable: e })
}), Cs = (e, t) => {
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
      var d;
      const c = vn(s.row);
      return c ? t(c) : ((d = a.renderCell) == null ? void 0 : d.call(a, s)) ?? null;
    }
  });
}, xs = (e, t, n) => (r) => {
  const o = vn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, vs = (e, t = []) => zt(e) ? us : t.includes(e.id) ? ds : "", Kr = we(Zo)`
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
`, kn = Te.createContext({
  filters: {},
  setFilters: () => {
  }
}), ks = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = Te.useState({});
  return /* @__PURE__ */ p(
    kn.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, rn = (e) => e.stopPropagation(), Ds = ({ options: e, renderInput: t, ...n }) => {
  const r = j(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ p(
    Qo,
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
        Kr,
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
}, Ss = we(Vo)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Nt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ ae(Ss, { children: [
  Wr(t),
  e
] }), Rs = (e) => (t) => {
  const { filters: n, setFilters: r } = Ce(kn), o = j(() => n[e.key], [n, e]), i = V(
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
    Kr,
    {
      autoComplete: "off",
      onClick: Nt,
      onKeyDown: Nt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ p(on, { ...t });
}, Is = {
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
}, Ts = (e, t, n) => {
  let r;
  const o = Is[e];
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
}, Ws = {
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
}, zs = {
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
}, $s = {
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
}, Ys = (e, t) => {
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
  ordinalNumber: Ys,
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
    values: Ws,
    defaultWidth: "wide"
  }),
  day: ut({
    values: zs,
    defaultWidth: "wide"
  }),
  dayPeriod: ut({
    values: As,
    defaultWidth: "wide",
    formattingValues: $s,
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
  formatDistance: Ts,
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
const qr = 6048e5, sc = 864e5, nr = Symbol.for("constructDateFrom");
function Le(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && nr in e ? e[nr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function xe(e, t) {
  return Le(t || e, e);
}
function rr(e) {
  const t = xe(e), n = new Date(
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
function or(e, t) {
  const n = xe(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function lc(e, t, n) {
  const [r, o] = cc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = or(r), a = or(o), s = +i - rr(i), c = +a - rr(a);
  return Math.round((s - c) / sc);
}
function dc(e, t) {
  const n = xe(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function uc(e, t) {
  const n = xe(e, t == null ? void 0 : t.in);
  return lc(n, dc(n)) + 1;
}
function pt(e, t) {
  var s, c, d, w;
  const n = kt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((w = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : w.weekStartsOn) ?? 0, o = xe(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function At(e, t) {
  return pt(e, { ...t, weekStartsOn: 1 });
}
function Xr(e, t) {
  const n = xe(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Le(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = At(o), a = Le(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = At(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function fc(e, t) {
  const n = Xr(e, t), r = Le(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), At(r);
}
function hc(e, t) {
  const n = xe(e, t == null ? void 0 : t.in), r = +At(n) - +fc(n);
  return Math.round(r / qr) + 1;
}
function Vr(e, t) {
  var w, f, m, l;
  const n = xe(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = kt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (w = t == null ? void 0 : t.locale) == null ? void 0 : w.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((l = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = Le((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = pt(a, t), c = Le((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const d = pt(c, t);
  return +n >= +s ? r + 1 : +n >= +d ? r : r - 1;
}
function gc(e, t) {
  var s, c, d, w;
  const n = kt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((w = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = Vr(e, t), i = Le((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), pt(i, t);
}
function mc(e, t) {
  const n = xe(e, t == null ? void 0 : t.in), r = +pt(n, t) - +gc(n, t);
  return Math.round(r / qr) + 1;
}
function K(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Fe = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return K(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : K(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return K(e.getDate(), t.length);
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
    return K(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return K(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return K(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return K(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return K(o, t.length);
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
    const o = Vr(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return K(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : K(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Xr(e);
    return K(n, t.length);
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
    return K(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return K(r, 2);
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
        return K(r, 2);
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
        return K(r + 1, 2);
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
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : K(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = hc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : K(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Fe.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = uc(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : K(r, t.length);
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
        return K(i, 2);
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
        return K(i, t.length);
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
        return K(o, t.length);
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : K(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : K(r, t.length);
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
    return K(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return K(+e, t.length);
  }
};
function ar(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + K(i, 2);
}
function sr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + K(Math.abs(e) / 60, 2) : Ye(e, t);
}
function Ye(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = K(Math.trunc(r / 60), 2), i = K(r % 60, 2);
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
}, Zr = (e, t) => {
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
  return i.replace("{{date}}", cr(r, t)).replace("{{time}}", Zr(o, t));
}, yc = {
  p: Zr,
  P: wc
}, pc = /^D+$/, bc = /^Y+$/, Cc = ["D", "DD", "YY", "YYYY"];
function xc(e) {
  return pc.test(e);
}
function vc(e) {
  return bc.test(e);
}
function kc(e, t, n) {
  const r = Dc(e, t, n);
  if (console.warn(r), Cc.includes(e)) throw new RangeError(r);
}
function Dc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Qr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Jr(e) {
  return !(!Qr(e) && typeof e != "number" || isNaN(+xe(e)));
}
const Sc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Rc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ic = /^'([^]*?)'?$/, Tc = /''/g, Ec = /[a-zA-Z]/;
function Mc(e, t, n) {
  var w, f, m, l, b, u, g, x;
  const r = kt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ic, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((l = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((x = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : x.weekStartsOn) ?? 0, s = xe(e, n == null ? void 0 : n.in);
  if (!Jr(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Rc).map((D) => {
    const S = D[0];
    if (S === "p" || S === "P") {
      const k = yc[S];
      return k(D, o.formatLong);
    }
    return D;
  }).join("").match(Sc).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const S = D[0];
    if (S === "'")
      return { isToken: !1, value: Pc(D) };
    if (ir[S])
      return { isToken: !0, value: D };
    if (S.match(Ec))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: D };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((D) => {
    if (!D.isToken) return D.value;
    const S = D.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && vc(S) || !(n != null && n.useAdditionalDayOfYearTokens) && xc(S)) && kc(S, t, String(e));
    const k = ir[S[0]];
    return k(s, S, o.localize, d);
  }).join("");
}
function Pc(e) {
  const t = e.match(Ic);
  return t ? t[1].replace(Tc, "'") : e;
}
function Oc() {
  return Object.assign({}, kt());
}
function lr(e, t, n) {
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
  const n = Yc(t);
  return "formatToParts" in n ? zc(n, e) : Ac(n, e);
}
const Wc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function zc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = Wc[n[o].type];
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
const sn = {}, dr = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), $c = dr === "06/25/2014, 00:00:00" || dr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Yc(e) {
  return sn[e] || (sn[e] = $c ? new Intl.DateTimeFormat("en-US", {
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
function eo(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
}
const ur = 36e5, _c = 6e4, cn = {
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
    return fr(o, a) ? (i = Math.abs(o) * ur + a * _c, r[1] === "+" ? -i : i) : NaN;
  }
  if (Gc(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : Bc(t), s = mn(a, e);
    return -(n ? s : Uc(t, s, e));
  }
  return NaN;
}
function Bc(e) {
  return eo(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function mn(e, t) {
  const n = Hc(e, t), r = eo(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function Uc(e, t, n) {
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
function Gc(e) {
  if (hr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), hr[e] = !0, !0;
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
        return lr("short", e, n);
      case "zzzz":
      default:
        return lr("long", e, n);
    }
  }
};
function ln(e, t) {
  const n = e ? Dn(e, t, !0) / jc : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
function qc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + $t(i, 2);
}
function mr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Xc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, wr = 6e4, Vc = 2, se = {
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
function to(e, t = {}) {
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
      if (d = Dn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = mr(new Date(s + c)), d = mr(new Date(s + c + d));
    return new Date(s + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Zc(e) {
  const t = {};
  let n = se.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = se.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = se.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Qc(e, t) {
  if (e) {
    const n = se.YYY[t], r = se.YYYYY[t];
    let o = se.YYYY.exec(e) || r.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = se.YY.exec(e) || n.exec(e), o) {
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
  let i = se.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, pr(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = se.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return rl(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = se.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return pr(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = se.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, br(o) ? yr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = se.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return br(o, a) ? yr(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function el(e) {
  let t, n, r = se.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), un(t) ? t % 24 * dn : NaN;
  if (r = se.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), un(t, n) ? t % 24 * dn + n * wr : NaN;
  if (r = se.HHMMSS.exec(e), r) {
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
const tl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], nl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function no(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function pr(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = no(e);
    if (r && n > nl[t] || !r && n > tl[t])
      return !1;
  }
  return !0;
}
function rl(e, t) {
  if (t < 1)
    return !1;
  const n = no(e);
  return !(n && t > 366 || !n && t > 365);
}
function br(e, t) {
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
    const o = to(n.originalDate || e, n);
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
  e = to(e, n);
  const r = Dn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function sl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, il(al(e, t, { timeZone: r.timeZone }), n, r);
}
var ro = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(ro || {});
const cl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !Qr(e) && typeof e == "string" ? new Date(e) : e;
  return Jr(r) ? sl(e, n, t) : "--";
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
  const { enabled: c, hiddenColumn: d } = Ce(vt), w = V((f) => {
    const m = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === et.DATE)
        return ({ row: u }) => {
          var g, x;
          return cl(
            u[f.key],
            ((g = f.dateOptions) == null ? void 0 : g.formatDate) ?? ro.DATE_WITH_TIME,
            (x = f.dateOptions) == null ? void 0 : x.timeZone
          );
        };
    }, l = () => f.renderHeaderCell ? f.renderHeaderCell : Rs(f), b = {
      ...f,
      renderCell: m(),
      renderHeaderCell: l()
    };
    return f.frozenRight && (b.frozen = !1, b.cellClass = typeof f.cellClass == "function" ? (u) => hn(
      fn,
      f.cellClass(u)
    ) : hn(fn, f.cellClass), b.headerCellClass = hn(fn, f.headerCellClass)), b;
  }, []);
  return j(() => {
    const f = [];
    if (t && !n && f.push(bs(t)), n) {
      const m = (r ?? []).map((g) => g.id), l = m.length > 0 && m.every((g) => o == null ? void 0 : o.includes(g)), b = (g) => {
        const x = (o ?? []).filter((D) => !m.includes(D));
        return g ? [...x, ...m] : x;
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
        renderHeaderCell: () => /* @__PURE__ */ ae(tr, { children: [
          t && /* @__PURE__ */ p(ys, { "aria-hidden": !0 }),
          a ? a({
            checked: l,
            "aria-label": s,
            onChange: (g) => i == null ? void 0 : i(b(g))
          }) : /* @__PURE__ */ p(
            xn,
            {
              checked: l,
              slotProps: { input: { "aria-label": s } },
              onChange: (g, x) => i == null ? void 0 : i(b(x))
            }
          )
        ] }),
        renderCell: t ? (g) => {
          var x;
          return /* @__PURE__ */ ae(tr, { children: [
            /* @__PURE__ */ p(Br, { row: g.row, expandable: t }),
            (x = dt.renderCell) == null ? void 0 : x.call(dt, g)
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
}, Yt = function() {
  return Yt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Yt.apply(this, arguments);
}, hl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, gl = fl("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function ml(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, d = e.size, w = d === void 0 ? 15 : d, f = e.margin, m = f === void 0 ? 2 : f, l = hl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), b = Yt({ display: "inherit" }, c), u = function(g) {
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
    Yt({ style: b }, l),
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
  const { filters: r } = Ce(kn);
  return j(() => n ? [...t].filter(
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
}, pl = we.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`, bl = we.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`, Cl = Te.memo(
  ({
    currentPage: e,
    setCurrentPage: t,
    setPageSize: n,
    pageSize: r,
    totalCount: o,
    labels: i,
    totalLabel: a
  }) => {
    const s = V(
      (d, w) => {
        t(w);
      },
      [t]
    ), c = V(
      (d) => {
        n(parseInt(d.target.value, 10)), t(0);
      },
      [n, t]
    );
    return /* @__PURE__ */ ae(pl, { children: [
      a ? /* @__PURE__ */ p(bl, { children: a(o) }) : null,
      /* @__PURE__ */ p(
        Jo,
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
var xl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(xl || {});
const vl = (e = 10, t = {}) => {
  const { page: n, onPageChange: r, pageSize: o, onPageSizeChange: i } = t, [a, s] = re(0), [c, d] = re(e), w = n !== void 0, f = o !== void 0, m = w ? n : a, l = f ? o : c, b = V(
    (D) => {
      w || s(D), r == null || r(D);
    },
    [w, r]
  ), u = V(
    (D) => {
      f || d(D), i == null || i(D);
    },
    [f, i]
  ), g = V(() => {
    b(0), u(e);
  }, [b, u, e]), x = be(l);
  return _e(() => {
    x.current !== l && (x.current = l, b(0));
  }, [l]), {
    currentPage: m,
    pageSize: l,
    defaultPageSize: e,
    setCurrentPage: b,
    setPageSize: u,
    resetPagination: g
  };
}, xr = 50, kl = we.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`, Dl = we.div`
    background-color: ${ee.primary500};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`, Sl = Te.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = V(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ p(
      xn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), Rl = (e) => /* @__PURE__ */ p(Sl, { ...e }), Il = "Select all rows", Tl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  selectedRows: s,
  onSelectedRowsChange: c,
  selectAllLabel: d = Il,
  noDataMessage: w,
  filters: f,
  setFilters: m,
  pagination: l,
  renderers: b,
  expandable: u,
  rowGestures: g,
  rowHeight: x,
  rowClass: D,
  onCellClick: S,
  ...k
}) => {
  var U, G;
  const { gridKey: T } = Ce(vt), { pageSize: H, currentPage: v, setCurrentPage: R, setPageSize: N } = vl(
    l == null ? void 0 : l.defaultPageSize,
    l == null ? void 0 : l.control
  ), M = (b == null ? void 0 : b.renderCheckbox) ?? Rl, F = ll({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c,
    renderCheckbox: M,
    selectAllLabel: d
  }), Y = j(() => F.map(($) => $.key).join("|"), [F]), z = j(
    () => F.some(($) => $.filterEnabled),
    [F]
  ), J = j(
    () => (l == null ? void 0 : l.enabled) && !l.remotePagination,
    [l]
  ), _ = j(() => !m, [m]), ne = yl({
    columns: F,
    rows: n,
    enabled: _
  }), ve = j(() => !i, [i]), {
    sortedRows: ye,
    sortColumns: Me,
    setSortedColumns: We
  } = cs({
    columns: F,
    rows: ne,
    defaultSortColumns: a
  }), ce = j(() => {
    if (!J)
      return v;
    const $ = Math.max(0, Math.ceil(ne.length / H) - 1);
    return Math.min(v, $);
  }, [J, v, H, ne.length]);
  _e(() => {
    ce !== v && R(ce);
  }, [ce, v, R]);
  const ke = j(() => J ? ye.slice(ce * H, (ce + 1) * H) : ye, [ye, J, ce, H]), Pe = j(
    () => u ? hs(ke, u.expandedIds) : ke,
    [u, ke]
  ), I = j(
    () => u ? Cs(F, u.renderDetail) : F,
    [u, F]
  ), P = V(
    ($, X) => {
      const te = () => {
        const oe = vs($, u == null ? void 0 : u.expandedIds);
        return oe || (X === 0 ? "first-row" : X === n.length - 1 ? "last-row" : "");
      };
      return [D == null ? void 0 : D($, X), te()].filter(Boolean).join(" ");
    },
    [n, u == null ? void 0 : u.expandedIds, D]
  ), A = V(
    ($) => {
      g != null && g.onClick ? g.onClick($) : u && Ur(u, $.id);
    },
    [g, u]
  ), C = V(
    ($, X) => {
      if (S == null || S($, X), X.isGridDefaultPrevented() || !u && !(g != null && g.onClick))
        return;
      const te = window.getSelection();
      te && !te.isCollapsed && X.target instanceof Node && te.containsNode(X.target, !0) || Gr(
        $.row,
        $.column.key,
        X.target,
        g == null ? void 0 : g.excludedColumns
      ) && A($.row);
    },
    [S, u, g, A]
  ), W = !(l != null && l.remotePagination);
  return _e(() => {
    if (!W)
      return;
    const $ = s == null ? void 0 : s.filter(
      (X) => n.some((te) => te.id === X)
    );
    ($ == null ? void 0 : $.length) != (s == null ? void 0 : s.length) && (c == null || c($ ?? []));
  }, [n, s, W]), /* @__PURE__ */ ae(ns, { $pagination: !!(l != null && l.enabled), children: [
    /* @__PURE__ */ p("div", { children: /* @__PURE__ */ p(
      Yr,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: ($) => {
          c == null || c(Array.from($));
        },
        rowKeyGetter: ($) => $.id,
        rows: Pe,
        onSortColumnsChange: ve ? We : i,
        sortColumns: ve ? Me : o,
        columns: I,
        rowClass: P,
        headerRowHeight: z ? 70 : void 0,
        onCellClick: C,
        enableVirtualization: I.some(($) => $.frozenRight) ? !1 : void 0,
        ...k,
        rowHeight: u ? xs(
          x,
          xr,
          u.detailHeight ?? ls
        ) : x ?? xr,
        renderers: {
          renderCheckbox: M,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...w != null && !t ? {
            noRowsFallback: /* @__PURE__ */ p("div", { className: "rdg-no-data", children: w })
          } : {},
          ...b
        },
        style: { ...ts, ...e ?? {} }
      },
      `${T}:${Y}`
    ) }),
    l != null && l.enabled ? /* @__PURE__ */ p(
      Cl,
      {
        ...(l == null ? void 0 : l.remotePagination) ?? {
          currentPage: ce,
          setCurrentPage: R,
          pageSize: H,
          setPageSize: N,
          totalCount: ne.length
        },
        labels: l.labels ?? ((U = l.remotePagination) == null ? void 0 : U.labels),
        totalLabel: l.totalLabel ?? ((G = l.remotePagination) == null ? void 0 : G.totalLabel)
      }
    ) : null,
    t ? /* @__PURE__ */ ae(kl, { children: [
      /* @__PURE__ */ p(Dl, {}),
      /* @__PURE__ */ p(ml, { color: ee.primary500 })
    ] }) : null,
    /* @__PURE__ */ p(as, {})
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
    resetLabel: c
  } = {},
  ...d
}) => /* @__PURE__ */ p(ks, { filters: e, setFilters: t, children: /* @__PURE__ */ p(
  os,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    resetLabel: c,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ p(Tl, { ...d, columns: n, filters: e, setFilters: t })
  }
) });
export {
  et as ColumnType,
  ro as DATE_FORMAT,
  xl as DEFAULT_PAGE_SIZES,
  jl as DataGrid,
  xn as DataGridCheckbox,
  Si as DataGridDefaultRenderersProvider,
  jr as EXPANDER_COLUMN_KEY,
  Br as ExpanderToggle,
  yt as FilterType,
  Yl as Row,
  ps as SELECTION_COLUMN_KEY,
  Be as SELECT_COLUMN_KEY,
  bn as SelectCellFormatter,
  dt as SelectColumn,
  ki as ToggleGroup,
  _l as TreeDataGrid,
  Ul as VisibilityColumnChooser,
  as as VisibilityMenu,
  Gr as clickBelongsToRow,
  Gl as clickExpandsRow,
  cl as convertDate,
  ts as defaultTheme,
  xs as detailAwareRowHeight,
  vs as detailRowClass,
  Cr as getStringToCompare,
  zt as isDetailRow,
  yi as renderCheckbox,
  Wr as renderHeaderCell,
  Ta as renderSortIcon,
  Ea as renderSortPriority,
  vi as renderToggleGroup,
  Di as renderValue,
  ee as taktikTheme,
  Bl as textEditor,
  Ei as useHeaderRowSelection,
  vl as usePagination,
  Nr as useRowSelection,
  Cs as withDetailRendering,
  hs as withDetailRows
};
