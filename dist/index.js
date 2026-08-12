import { jsx as p, jsxs as ae, Fragment as yn } from "react/jsx-runtime";
import * as Ot from "react";
import ve, { createContext as bt, memo as We, forwardRef as pn, useContext as Te, useMemo as j, useCallback as Q, useRef as xe, useEffect as Le, useState as ne, useImperativeHandle as Bo, useLayoutEffect as Uo, useId as jo } from "react";
import { flushSync as Ft } from "react-dom";
import Ee from "@emotion/styled";
import Go from "@mui/material/Box";
import Ko from "@mui/material/TextField";
import qo from "@mui/material/Autocomplete";
import Xo from "@mui/material/Checkbox";
import Vo from "@mui/material/TablePagination";
import Zo from "@mui/material/Menu";
import Qo from "@mui/material/MenuItem";
function kr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = kr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Me() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = kr(e)) && (r && (r += " "), r += t);
  return r;
}
function be(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function Jo(e) {
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
  }) => /* @__PURE__ */ p("div", {
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
  return Dr(r, o);
}
function Dr(e, t) {
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
  mainHeaderRowIdx: d,
  maxRowIdx: b,
  currentPosition: {
    idx: h,
    rowIdx: g
  },
  nextPosition: l,
  lastFrozenColumnIndex: C,
  isCellWithinBounds: u
}) {
  let {
    idx: f,
    rowIdx: D
  } = l;
  const v = r.length, k = ($) => {
    for (const x of o) {
      const S = x.idx;
      if (S > f) break;
      const M = ai({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: D,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: C,
        column: x
      });
      if (M && f > S && f < M + S) {
        f = S + ($ ? M : 0);
        break;
      }
    }
  }, R = ($) => $.level + d, N = () => {
    if (t) {
      let x = r[f].parent;
      for (; x !== void 0; ) {
        const S = R(x);
        if (D === S) {
          f = x.idx + x.colSpan;
          break;
        }
        x = x.parent;
      }
    } else if (e) {
      let x = r[f].parent, S = !1;
      for (; x !== void 0; ) {
        const M = R(x);
        if (D >= M) {
          f = x.idx, D = M, S = !0;
          break;
        }
        x = x.parent;
      }
      S || (f = h, D = g);
    }
  };
  if (u(l) && (k(t), D < d && N()), n === "CHANGE_ROW" && (f === v ? D === b || (f = 0, D += 1) : f === -1 && (D === c || (D -= 1, f = v - 1), k(!1))), D < d) {
    let x = r[f].parent;
    const S = D;
    for (D = d; x !== void 0; ) {
      const M = R(x);
      M >= S && (D = M, f = x.idx), x = x.parent;
    }
  }
  return {
    idx: f,
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
const li = "cj343x07-0-0-beta-47", Sr = `rdg-cell ${li}`, di = "csofj7r7-0-0-beta-47", ui = `rdg-cell-frozen ${di}`;
function bn(e) {
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
  return Me(Sr, ...t, e.frozen && ui);
}
const {
  min: wt,
  max: Ht,
  floor: Zn,
  sign: fi,
  abs: hi
} = Math;
function gt(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Ir(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = Ht(e, t), typeof n == "number" && n >= t ? wt(e, n) : e;
}
function Tr(e, t) {
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
  return /* @__PURE__ */ p("input", {
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
  return /* @__PURE__ */ p(vi, {
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
  return /* @__PURE__ */ ae("span", {
    className: pi,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ p("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Ci,
      "aria-hidden": !0,
      children: /* @__PURE__ */ p("path", {
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
const Er = /* @__PURE__ */ bt(void 0), Di = Er.Provider;
function At() {
  return Te(Er);
}
function Cn({
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
const Mr = /* @__PURE__ */ bt(void 0), Or = Mr.Provider, Pr = /* @__PURE__ */ bt(void 0), Si = Pr.Provider;
function Nr() {
  const e = Te(Mr), t = Te(Pr);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Fr = /* @__PURE__ */ bt(void 0), Ri = Fr.Provider, Lr = /* @__PURE__ */ bt(void 0), Ii = Lr.Provider;
function Ti() {
  const e = Te(Fr), t = Te(Lr);
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
  return /* @__PURE__ */ p(Cn, {
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
  } = Nr();
  return /* @__PURE__ */ p(Cn, {
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
  return /* @__PURE__ */ p(Cn, {
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
    return /* @__PURE__ */ p(Ei, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ p(Mi, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ p(Oi, {
      ...e
    });
  }
}, Pi = "auto", Ni = 50;
function Fi({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? Pi, s = (t == null ? void 0 : t.minWidth) ?? Ni, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? ki, b = (t == null ? void 0 : t.sortable) ?? !1, h = (t == null ? void 0 : t.resizable) ?? !1, g = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: l,
    colSpanColumns: C,
    lastFrozenColumnIndex: u,
    headerRowsCount: f
  } = j(() => {
    let x = -1, S = 1;
    const M = [];
    O(e, 1);
    function O(Y, z, ee) {
      for (const _ of Y) {
        if ("children" in _) {
          const De = {
            name: _.name,
            parent: ee,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: _.headerCellClass
          };
          O(_.children, z + 1, De);
          continue;
        }
        const se = _.frozen ?? !1, we = {
          ..._,
          parent: ee,
          idx: 0,
          level: 0,
          frozen: se,
          width: _.width ?? a,
          minWidth: _.minWidth ?? s,
          maxWidth: _.maxWidth ?? c,
          sortable: _.sortable ?? b,
          resizable: _.resizable ?? h,
          draggable: _.draggable ?? g,
          renderCell: _.renderCell ?? d
        };
        M.push(we), se && x++, z > S && (S = z);
      }
    }
    M.sort(({
      key: Y,
      frozen: z
    }, {
      key: ee,
      frozen: _
    }) => Y === Be ? -1 : ee === Be ? 1 : z ? _ ? 0 : -1 : _ ? 1 : 0);
    const W = [];
    return M.forEach((Y, z) => {
      Y.idx = z, Hr(Y, z, 0), Y.colSpan != null && W.push(Y);
    }), {
      columns: M,
      colSpanColumns: W,
      lastFrozenColumnIndex: x,
      headerRowsCount: S
    };
  }, [e, a, s, c, d, h, b, g]), {
    templateColumns: D,
    layoutCssVars: v,
    totalFrozenColumnWidth: k,
    columnMetrics: R
  } = j(() => {
    const x = /* @__PURE__ */ new Map();
    let S = 0, M = 0;
    const O = [];
    for (const Y of l) {
      let z = n(Y);
      typeof z == "number" ? z = Ir(z, Y) : z = Y.minWidth, O.push(`${z}px`), x.set(Y, {
        width: z,
        left: S
      }), S += z;
    }
    if (u !== -1) {
      const Y = x.get(l[u]);
      M = Y.left + Y.width;
    }
    const W = {};
    for (let Y = 0; Y <= u; Y++) {
      const z = l[Y];
      W[`--rdg-frozen-left-${z.idx}`] = `${x.get(z).left}px`;
    }
    return {
      templateColumns: O,
      layoutCssVars: W,
      totalFrozenColumnWidth: M,
      columnMetrics: x
    };
  }, [n, l, u]), [N, $] = j(() => {
    if (!i)
      return [0, l.length - 1];
    const x = o + k, S = o + r, M = l.length - 1, O = wt(u + 1, M);
    if (x >= S)
      return [O, O];
    let W = O;
    for (; W < M; ) {
      const {
        left: _,
        width: se
      } = R.get(l[W]);
      if (_ + se > x)
        break;
      W++;
    }
    let Y = W;
    for (; Y < M; ) {
      const {
        left: _,
        width: se
      } = R.get(l[Y]);
      if (_ + se >= S)
        break;
      Y++;
    }
    const z = Ht(O, W - 1), ee = wt(M, Y + 1);
    return [z, ee];
  }, [R, l, u, o, k, r, i]);
  return {
    columns: l,
    colSpanColumns: C,
    colOverscanStartIdx: N,
    colOverscanEndIdx: $,
    templateColumns: D,
    layoutCssVars: v,
    headerRowsCount: f,
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
const tt = typeof window > "u" ? Le : Uo;
function Li(e, t, n, r, o, i, a, s, c, d) {
  const b = xe(o), h = e.length === t.length, g = h && o !== b.current, l = [...n], C = [];
  for (const {
    key: v,
    idx: k,
    width: R
  } of t)
    typeof R == "string" && (g || !a.has(v)) && !i.has(v) && (l[k] = R, C.push(v));
  const u = l.join(" ");
  tt(() => {
    b.current = o, f(C);
  });
  function f(v) {
    v.length !== 0 && c((k) => {
      const R = new Map(k);
      let N = !1;
      for (const $ of v) {
        const x = Qn(r, $);
        N || (N = x !== k.get($)), x === void 0 ? R.delete($) : R.set($, x);
      }
      return N ? R : k;
    });
  }
  function D(v, k) {
    const {
      key: R
    } = v, N = [...n], $ = [];
    for (const {
      key: S,
      idx: M,
      width: O
    } of t)
      if (R === S) {
        const W = typeof k == "number" ? `${k}px` : k;
        N[M] = W;
      } else h && typeof O == "string" && !i.has(S) && (N[M] = O, $.push(S));
    r.current.style.gridTemplateColumns = N.join(" ");
    const x = typeof k == "number" ? k : Qn(r, R);
    Ft(() => {
      s((S) => {
        const M = new Map(S);
        return M.set(R, x), M;
      }), f($);
    }), d == null || d(v.idx, x);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: D
  };
}
function Qn(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Hi() {
  const e = xe(null), [t, n] = ne(1), [r, o] = ne(1), [i, a] = ne(0);
  return tt(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: d,
      offsetWidth: b,
      offsetHeight: h
    } = e.current, {
      width: g,
      height: l
    } = e.current.getBoundingClientRect(), C = h - d, u = g - b + c, f = l - C;
    n(u), o(f), a(C);
    const D = new s((v) => {
      const k = v[0].contentBoxSize[0], {
        clientHeight: R,
        offsetHeight: N
      } = e.current;
      Ft(() => {
        n(k.inlineSize), o(k.blockSize), a(N - R);
      });
    });
    return D.observe(e.current), () => {
      D.disconnect();
    };
  }, []), [e, t, r, i];
}
function fe(e) {
  const t = xe(e);
  Le(() => {
    t.current = e;
  });
  const n = Q((...r) => {
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
  rowOverscanEndIdx: d
}) {
  const b = j(() => {
    if (i === 0) return 0;
    let h = i;
    const g = (l, C) => C !== void 0 && l + C > i ? (h = l, !0) : !1;
    for (const l of t) {
      const C = l.idx;
      if (C >= h || g(C, be(l, s, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const f = n[u];
        if (g(C, be(l, s, {
          type: "ROW",
          row: f
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (g(C, be(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (o != null) {
        for (const u of o)
          if (g(C, be(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
    }
    return h;
  }, [c, d, n, r, o, i, s, t]);
  return j(() => {
    const h = [];
    for (let g = 0; g <= a; g++) {
      const l = e[g];
      g < b && !l.frozen || h.push(l);
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
    findRowIdx: d
  } = j(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (f) => f * t,
        getRowHeight: () => t,
        findRowIdx: (f) => Zn(f / t)
      };
    let g = 0, l = " ";
    const C = e.map((f) => {
      const D = t(f), v = {
        top: g,
        height: D
      };
      return l += `${D}px `, g += D, v;
    }), u = (f) => Ht(0, wt(e.length - 1, f));
    return {
      totalRowHeight: g,
      gridTemplateRows: l,
      getRowTop: (f) => C[u(f)].top,
      getRowHeight: (f) => C[u(f)].height,
      findRowIdx(f) {
        let D = 0, v = C.length - 1;
        for (; D <= v; ) {
          const k = D + Zn((v - D) / 2), R = C[k].top;
          if (R === f) return k;
          if (R < f ? D = k + 1 : R > f && (v = k - 1), D > v) return v;
        }
        return 0;
      }
    };
  }, [t, e]);
  let b = 0, h = e.length - 1;
  if (o) {
    const l = d(r), C = d(r + n);
    b = Ht(0, l - 4), h = wt(e.length - 1, C + 4);
  }
  return {
    rowOverscanStartIdx: b,
    rowOverscanEndIdx: h,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: d
  };
}
const Yi = "c1w9bbhr7-0-0-beta-47", $i = "c1creorc7-0-0-beta-47", Ai = `rdg-cell-drag-handle ${Yi}`;
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
  onRowsChange: d,
  onFill: b,
  onClick: h,
  setDragging: g,
  setDraggedOverRowIdx: l
}) {
  const {
    idx: C,
    rowIdx: u
  } = a;
  function f(N) {
    if (N.preventDefault(), N.buttons !== 1) return;
    g(!0), window.addEventListener("mouseover", $), window.addEventListener("mouseup", x);
    function $(S) {
      S.buttons !== 1 && x();
    }
    function x() {
      window.removeEventListener("mouseover", $), window.removeEventListener("mouseup", x), g(!1), D();
    }
  }
  function D() {
    const N = s.current;
    if (N === void 0) return;
    const $ = u < N ? u + 1 : N, x = u < N ? N + 1 : u;
    k($, x), l(void 0);
  }
  function v(N) {
    N.stopPropagation(), k(u + 1, t.length);
  }
  function k(N, $) {
    const x = t[u], S = [...t], M = [];
    for (let O = N; O < $; O++)
      if (c({
        rowIdx: O,
        idx: C
      })) {
        const W = b({
          columnKey: n.key,
          sourceRow: x,
          targetRow: t[O]
        });
        W !== t[O] && (S[O] = W, M.push(O));
      }
    M.length > 0 && (d == null || d(S, {
      indexes: M,
      column: n
    }));
  }
  function R() {
    var O;
    const N = ((O = n.colSpan) == null ? void 0 : O.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: $,
      ...x
    } = nt(n, N), S = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", M = n.idx + N - 1 === o;
    return {
      ...x,
      gridRowStart: e,
      marginInlineEnd: M ? void 0 : S,
      marginBlockEnd: i ? void 0 : S,
      insetInlineStart: $ ? `calc(${$} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ p("div", {
    style: R(),
    className: Me(Ai, n.frozen && $i),
    onClick: h,
    onMouseDown: f,
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
  const c = xe(void 0), d = ((D = e.editorOptions) == null ? void 0 : D.commitOnOutsideClick) !== !1, b = fe(() => {
    l(!0, !1);
  });
  Le(() => {
    if (!d) return;
    function R() {
      c.current = requestAnimationFrame(b);
    }
    return addEventListener("mousedown", R, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", R, {
        capture: !0
      }), h();
    };
  }, [d, b]);
  function h() {
    cancelAnimationFrame(c.current);
  }
  function g(R) {
    if (a) {
      const N = ht(R);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          s(R);
        },
        onClose: l
      }, N), N.isGridDefaultPrevented()) return;
    }
    R.key === "Escape" ? l() : R.key === "Enter" ? l(!0) : ni(R) && s(R);
  }
  function l(R = !1, N = !0) {
    R ? o(n, !0, N) : i(N);
  }
  function C(R, N = !1) {
    o(R, N, N);
  }
  const {
    cellClass: u
  } = e, f = Ct(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((v = e.editorOptions) != null && v.displayCellContent) && Bi);
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: f,
    style: nt(e, t),
    onKeyDown: g,
    onMouseDownCapture: h,
    children: e.renderEditCell != null && /* @__PURE__ */ ae(yn, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: C,
        onClose: l
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
    className: Me(Sr, e.headerCellClass),
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
const Gi = "h44jtk67-0-0-beta-47", Ki = "hcgkhxz7-0-0-beta-47", qi = `rdg-header-sort-name ${Ki}`;
function Wr({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ p(Xi, {
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
  const r = At().renderSortStatus;
  return /* @__PURE__ */ ae("span", {
    className: Gi,
    children: [/* @__PURE__ */ p("span", {
      className: qi,
      children: n
    }), /* @__PURE__ */ p("span", {
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
  shouldFocusGrid: d,
  direction: b,
  dragDropKey: h
}) {
  const [g, l] = ne(!1), [C, u] = ne(!1), f = b === "rtl", D = Tr(e, n), {
    tabIndex: v,
    childTabIndex: k,
    onFocus: R
  } = xt(r), N = a == null ? void 0 : a.findIndex((y) => y.columnKey === e.key), $ = N !== void 0 && N > -1 ? a[N] : void 0, x = $ == null ? void 0 : $.direction, S = $ !== void 0 && a.length > 1 ? N + 1 : void 0, M = x && !S ? x === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: O,
    resizable: W,
    draggable: Y
  } = e, z = Ct(e, e.headerCellClass, O && Vi, W && Qi, Y && ea, g && na, C && oa), ee = e.renderHeaderCell ?? Wr;
  function _(y) {
    if (y.pointerType === "mouse" && y.buttons !== 1)
      return;
    y.preventDefault();
    const {
      currentTarget: F,
      pointerId: B
    } = y, G = F.parentElement, {
      right: te,
      left: oe
    } = G.getBoundingClientRect(), de = f ? y.clientX - oe : te - y.clientX;
    let H = !1;
    function X(Ce) {
      const {
        width: he,
        right: rt,
        left: Ye
      } = G.getBoundingClientRect();
      let Ue = f ? rt + de - Ce.clientX : Ce.clientX + de - Ye;
      Ue = Ir(Ue, e), he > 0 && Ue !== he && o(e, Ue);
    }
    function ie() {
      H = !0, o(e, "max-content");
    }
    function ye(Ce) {
      H || X(Ce), F.removeEventListener("pointermove", X), F.removeEventListener("dblclick", ie), F.removeEventListener("lostpointercapture", ye);
    }
    F.setPointerCapture(B), F.addEventListener("pointermove", X), F.addEventListener("dblclick", ie), F.addEventListener("lostpointercapture", ye);
  }
  function se(y) {
    if (s == null) return;
    const {
      sortDescendingFirst: F
    } = e;
    if ($ === void 0) {
      const B = {
        columnKey: e.key,
        direction: F ? "DESC" : "ASC"
      };
      s(a && y ? [...a, B] : [B]);
    } else {
      let B;
      if ((F === !0 && x === "DESC" || F !== !0 && x === "ASC") && (B = {
        columnKey: e.key,
        direction: x === "ASC" ? "DESC" : "ASC"
      }), y) {
        const G = [...a];
        B ? G[N] = B : G.splice(N, 1), s(G);
      } else
        s(B ? [B] : []);
    }
  }
  function we(y) {
    c({
      idx: e.idx,
      rowIdx: n
    }), O && se(y.ctrlKey || y.metaKey);
  }
  function De(y) {
    R == null || R(y), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Se(y) {
    (y.key === " " || y.key === "Enter") && (y.preventDefault(), se(y.ctrlKey || y.metaKey));
  }
  function ze(y) {
    y.dataTransfer.setData(h, e.key), y.dataTransfer.dropEffect = "move", l(!0);
  }
  function Oe() {
    l(!1);
  }
  function le(y) {
    y.preventDefault(), y.dataTransfer.dropEffect = "move";
  }
  function Re(y) {
    if (u(!1), y.dataTransfer.types.includes(h.toLowerCase())) {
      const F = y.dataTransfer.getData(h.toLowerCase());
      F !== e.key && (y.preventDefault(), i == null || i(F, e.key));
    }
  }
  function I(y) {
    Jn(y) && u(!0);
  }
  function E(y) {
    Jn(y) && u(!1);
  }
  let A;
  return Y && (A = {
    draggable: !0,
    onDragStart: ze,
    onDragEnd: Oe,
    onDragOver: le,
    onDragEnter: I,
    onDragLeave: E,
    onDrop: Re
  }), /* @__PURE__ */ ae("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": D,
    "aria-selected": r,
    "aria-sort": M,
    tabIndex: d ? 0 : v,
    className: z,
    style: {
      ...Rr(e, n, D),
      ...nt(e, t)
    },
    onFocus: De,
    onClick: we,
    onKeyDown: O ? Se : void 0,
    ...A,
    children: [ee({
      column: e,
      sortDirection: x,
      priority: S,
      tabIndex: k
    }), W && /* @__PURE__ */ p("div", {
      className: Ji,
      onClick: Jo,
      onPointerDown: _
    })]
  });
}
function Jn(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const aa = "r1upfr807-0-0-beta-47", xn = `rdg-row ${aa}`, sa = "r190mhd37-0-0-beta-47", _t = "rdg-row-selected", ca = "r139qu9m7-0-0-beta-47", la = "rdg-top-summary-row", da = "rdg-bottom-summary-row", ua = "h10tskcx7-0-0-beta-47", zr = `rdg-header-row ${ua}`;
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
  shouldFocusGrid: d,
  direction: b
}) {
  const h = jo(), g = [];
  for (let l = 0; l < t.length; l++) {
    const C = t[l], u = be(C, a, {
      type: "HEADER"
    });
    u !== void 0 && (l += u - 1), g.push(/* @__PURE__ */ p(ia, {
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
      dragDropKey: h
    }, C.key));
  }
  return /* @__PURE__ */ p("div", {
    role: "row",
    "aria-rowindex": e,
    className: Me(zr, s === -1 && _t),
    children: g
  });
}
const ha = /* @__PURE__ */ We(fa);
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
const ma = /* @__PURE__ */ We(ga), wa = "c6ra8a37-0-0-beta-47", ya = `rdg-cell-copied ${wa}`, pa = "cq910m07-0-0-beta-47", ba = `rdg-cell-dragged-over ${pa}`;
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
  onContextMenu: d,
  onRowChange: b,
  selectCell: h,
  ...g
}) {
  const {
    tabIndex: l,
    childTabIndex: C,
    onFocus: u
  } = xt(n), {
    cellClass: f
  } = e, D = Ct(e, typeof f == "function" ? f(i) : f, r && ya, o && ba), v = Dr(e, i);
  function k(S) {
    h({
      rowIdx: a,
      idx: e.idx
    }, S);
  }
  function R(S) {
    if (s) {
      const M = ht(S);
      if (s({
        row: i,
        column: e,
        selectCell: k
      }, M), M.isGridDefaultPrevented()) return;
    }
    k();
  }
  function N(S) {
    if (d) {
      const M = ht(S);
      if (d({
        row: i,
        column: e,
        selectCell: k
      }, M), M.isGridDefaultPrevented()) return;
    }
    k();
  }
  function $(S) {
    if (c) {
      const M = ht(S);
      if (c({
        row: i,
        column: e,
        selectCell: k
      }, M), M.isGridDefaultPrevented()) return;
    }
    k(!0);
  }
  function x(S) {
    b(e, S);
  }
  return /* @__PURE__ */ p("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !v || void 0,
    tabIndex: l,
    className: D,
    style: nt(e, t),
    onClick: R,
    onDoubleClick: $,
    onContextMenu: N,
    onFocus: u,
    ...g,
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
const xa = /* @__PURE__ */ We(Ca);
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
  row: d,
  viewportColumns: b,
  selectedCellEditor: h,
  onCellClick: g,
  onCellDoubleClick: l,
  onCellContextMenu: C,
  rowClass: u,
  setDraggedOverRowIdx: f,
  onMouseEnter: D,
  onRowChange: v,
  selectCell: k,
  ...R
}, N) {
  const $ = fe((O, W) => {
    v(O, t, W);
  });
  function x(O) {
    f == null || f(t), D == null || D(O);
  }
  e = Me(xn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && _t);
  const S = [];
  for (let O = 0; O < b.length; O++) {
    const W = b[O], {
      idx: Y
    } = W, z = be(W, c, {
      type: "ROW",
      row: d
    });
    z !== void 0 && (O += z - 1);
    const ee = r === Y;
    ee && h ? S.push(h) : S.push(/* @__PURE__ */ p(xa, {
      column: W,
      colSpan: z,
      row: d,
      rowIdx: t,
      isCopied: a === Y,
      isDraggedOver: s === Y,
      isCellSelected: ee,
      onClick: g,
      onDoubleClick: l,
      onContextMenu: C,
      onRowChange: $,
      selectCell: k
    }, W.key));
  }
  const M = j(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ p(Or, {
    value: M,
    children: /* @__PURE__ */ p("div", {
      role: "row",
      ref: N,
      className: e,
      onMouseEnter: x,
      style: bn(n),
      ...R,
      children: S
    })
  });
}
const Yr = /* @__PURE__ */ We(/* @__PURE__ */ pn(va)), Wl = Yr;
function $r(e, t) {
  return /* @__PURE__ */ p(Yr, {
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
  const o = xe(null);
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
  }, [n, r]), /* @__PURE__ */ p("div", {
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
  return /* @__PURE__ */ ae(yn, {
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
  return e === void 0 ? null : /* @__PURE__ */ p("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Sa,
    "aria-hidden": !0,
    children: /* @__PURE__ */ p("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Ta({
  priority: e
}) {
  return e;
}
const Ea = "rnvodz57-0-0-beta-47", Ma = `rdg ${Ea}`, Oa = "vlqv91k7-0-0-beta-47", Pa = `rdg-viewport-dragging ${Oa}`, Na = "f1lsfrzw7-0-0-beta-47", Fa = "f1cte0lg7-0-0-beta-47", La = "s8wc6fl7-0-0-beta-47";
function Ha({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: o,
  selectCell: i
}) {
  var g;
  const {
    tabIndex: a,
    childTabIndex: s,
    onFocus: c
  } = xt(o), {
    summaryCellClass: d
  } = e, b = Ct(e, La, typeof d == "function" ? d(n) : d);
  function h() {
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
    className: b,
    style: nt(e, t),
    onClick: h,
    onFocus: c,
    children: (g = e.renderSummaryCell) == null ? void 0 : g.call(e, {
      column: e,
      row: n,
      tabIndex: s
    })
  });
}
const Wa = /* @__PURE__ */ We(Ha), za = "skuhp557-0-0-beta-47", Ya = "tf8l5ub7-0-0-beta-47", $a = `rdg-summary-row ${za}`;
function Aa({
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
  const h = [];
  for (let g = 0; g < r.length; g++) {
    const l = r[g], C = be(l, a, {
      type: "SUMMARY",
      row: n
    });
    C !== void 0 && (g += C - 1);
    const u = s === l.idx;
    h.push(/* @__PURE__ */ p(Wa, {
      column: l,
      colSpan: C,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, l.key));
  }
  return /* @__PURE__ */ p("div", {
    role: "row",
    "aria-rowindex": b,
    className: Me(xn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, $a, c ? `${la} ${Ya}` : da, s === -1 && _t),
    style: {
      ...bn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: h
  });
}
const er = /* @__PURE__ */ We(Aa);
function _a(e, t) {
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
    selectedRows: h,
    isRowSelectionDisabled: g,
    onSelectedRowsChange: l,
    sortColumns: C,
    onSortColumnsChange: u,
    defaultColumnOptions: f,
    onCellClick: D,
    onCellDoubleClick: v,
    onCellContextMenu: k,
    onCellKeyDown: R,
    onSelectedCellChange: N,
    onScroll: $,
    onColumnResize: x,
    onColumnsReorder: S,
    onFill: M,
    onCopy: O,
    onPaste: W,
    enableVirtualization: Y,
    renderers: z,
    className: ee,
    style: _,
    rowClass: se,
    direction: we,
    role: De,
    "aria-label": Se,
    "aria-labelledby": ze,
    "aria-describedby": Oe,
    "aria-rowcount": le,
    "data-testid": Re
  } = e, I = At(), E = De ?? "grid", A = c ?? 35, y = d ?? (typeof A == "number" ? A : 35), F = b ?? (typeof A == "number" ? A : 35), B = (z == null ? void 0 : z.renderRow) ?? (I == null ? void 0 : I.renderRow) ?? $r, G = (z == null ? void 0 : z.renderSortStatus) ?? (I == null ? void 0 : I.renderSortStatus) ?? Ra, te = (z == null ? void 0 : z.renderCheckbox) ?? (I == null ? void 0 : I.renderCheckbox) ?? wi, oe = (z == null ? void 0 : z.noRowsFallback) ?? (I == null ? void 0 : I.noRowsFallback), de = Y ?? !0, H = we ?? "ltr", [X, ie] = ne(0), [ye, Ce] = ne(0), [he, rt] = ne(() => /* @__PURE__ */ new Map()), [Ye, Ue] = ne(() => /* @__PURE__ */ new Map()), [je, Rn] = ne(null), [In, ro] = ne(!1), [ot, oo] = ne(void 0), [Pe, Tn] = ne(null), En = Q((m) => he.get(m.key) ?? Ye.get(m.key) ?? m.width, [Ye, he]), [Ge, Mn, On, io] = Hi(), {
    columns: re,
    colSpanColumns: Pn,
    lastFrozenColumnIndex: pe,
    headerRowsCount: $e,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Nn,
    templateColumns: so,
    layoutCssVars: co,
    totalFrozenColumnWidth: lo
  } = Fi({
    rawColumns: n,
    defaultColumnOptions: f,
    getColumnWidth: En,
    scrollLeft: ye,
    viewportWidth: Mn,
    enableVirtualization: de
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Fn = it + Ke, qe = $e + it, Ut = $e - 1, ge = -qe, kt = ge + Ut, Ae = r.length + Ke - 1, [T, Xe] = ne(() => ({
    idx: -1,
    rowIdx: ge - 1,
    mode: "SELECT"
  })), jt = xe(T), Ln = xe(ot), Hn = xe(-1), Dt = xe(null), St = xe(!1), Gt = E === "treegrid", Kt = $e * y, Wn = Fn * F, Rt = On - Kt - Wn, qt = h != null && l != null, zn = H === "rtl", uo = zn ? "ArrowRight" : "ArrowLeft", Yn = zn ? "ArrowLeft" : "ArrowRight", $n = le ?? $e + r.length + Fn, fo = j(() => ({
    renderCheckbox: te,
    renderSortStatus: G
  }), [te, G]), ho = j(() => {
    let m = !1, w = !1;
    if (a != null && h != null && h.size > 0) {
      for (const P of r)
        if (h.has(a(P)) ? m = !0 : w = !0, m && w) break;
    }
    return {
      isRowSelected: m && !w,
      isIndeterminate: m && w
    };
  }, [r, h, a]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: go,
    getRowTop: An,
    getRowHeight: mo,
    findRowIdx: _n
  } = zi({
    rows: r,
    rowHeight: A,
    clientHeight: Rt,
    scrollTop: X,
    enableVirtualization: de
  }), Ne = Wi({
    columns: re,
    colSpanColumns: Pn,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Nn,
    lastFrozenColumnIndex: pe,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: wo,
    handleColumnResize: yo
  } = Li(re, Ne, so, Ge, Mn, he, Ye, rt, Ue, x), po = Gt ? -1 : 0, Ve = re.length - 1, Vt = Jt(T), It = Kn(T), bo = y + Xt + Wn + io, Co = fe(yo), xo = fe(S), vo = fe(u), ko = fe(D), Do = fe(v), So = fe(k), Ro = fe(Eo), Io = fe(Un), To = fe(Tt), Zt = fe(ct), Bn = fe(({
    idx: m,
    rowIdx: w
  }) => {
    ct({
      rowIdx: ge + w - 1,
      idx: m
    });
  });
  tt(() => {
    if (!Vt || nn(T, jt.current)) {
      jt.current = T;
      return;
    }
    jt.current = T, T.idx === -1 && (Dt.current.focus({
      preventScroll: !0
    }), Nt(Dt.current));
  }), tt(() => {
    St.current && (St.current = !1, Xn());
  }), Bo(t, () => ({
    element: Ge.current,
    scrollToCell({
      idx: m,
      rowIdx: w
    }) {
      const P = m !== void 0 && m > pe && m < re.length ? m : void 0, L = w !== void 0 && Ze(w) ? w : void 0;
      (P !== void 0 || L !== void 0) && Tn({
        idx: P,
        rowIdx: L
      });
    },
    selectCell: ct
  }));
  const Qt = Q((m) => {
    oo(m), Ln.current = m;
  }, []);
  function Eo(m) {
    if (!l) return;
    gt(a);
    const w = new Set(h);
    for (const P of r) {
      if ((g == null ? void 0 : g(P)) === !0) continue;
      const L = a(P);
      m.checked ? w.add(L) : w.delete(L);
    }
    l(w);
  }
  function Un(m) {
    if (!l) return;
    gt(a);
    const {
      row: w,
      checked: P,
      isShiftClick: L
    } = m;
    if ((g == null ? void 0 : g(w)) === !0) return;
    const U = new Set(h), q = a(w), V = Hn.current, Z = r.indexOf(w);
    if (Hn.current = Z, P ? U.add(q) : U.delete(q), L && V !== -1 && V !== Z && V < r.length) {
      const me = fi(Z - V);
      for (let ue = V + me; ue !== Z; ue += me) {
        const Ie = r[ue];
        (g == null ? void 0 : g(Ie)) !== !0 && (P ? U.add(a(Ie)) : U.delete(a(Ie)));
      }
    }
    l(U);
  }
  function Mo(m) {
    var Z;
    const {
      idx: w,
      rowIdx: P,
      mode: L
    } = T;
    if (L === "EDIT") return;
    if (R && Ze(P)) {
      const me = r[P], ue = ht(m);
      if (R({
        mode: "SELECT",
        row: me,
        column: re[w],
        rowIdx: P,
        selectCell: ct
      }, ue), ue.isGridDefaultPrevented()) return;
    }
    if (!(m.target instanceof Element)) return;
    const U = m.target.closest(".rdg-cell") !== null, q = Gt && m.target === Dt.current;
    if (!U && !q) return;
    const {
      keyCode: V
    } = m;
    if (It && (W != null || O != null) && Lt(m)) {
      if (V === 67) {
        if (((Z = window.getSelection()) == null ? void 0 : Z.isCollapsed) === !1) return;
        Po();
        return;
      }
      if (V === 86) {
        No();
        return;
      }
    }
    switch (m.key) {
      case "Escape":
        Rn(null);
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
        qn(m);
        break;
      default:
        Fo(m);
        break;
    }
  }
  function Oo(m) {
    const {
      scrollTop: w,
      scrollLeft: P
    } = m.currentTarget;
    Ft(() => {
      ie(w), Ce(hi(P));
    }), $ == null || $(m);
  }
  function Tt(m, w, P) {
    if (typeof s != "function" || P === r[w]) return;
    const L = [...r];
    L[w] = P, s(L, {
      indexes: [w],
      column: m
    });
  }
  function jn() {
    T.mode === "EDIT" && Tt(re[T.idx], T.rowIdx, T.row);
  }
  function Po() {
    const {
      idx: m,
      rowIdx: w
    } = T, P = r[w], L = re[m].key;
    Rn({
      row: P,
      columnKey: L
    }), O == null || O({
      sourceRow: P,
      sourceColumnKey: L
    });
  }
  function No() {
    if (!W || !s || je === null || !Et(T))
      return;
    const {
      idx: m,
      rowIdx: w
    } = T, P = re[m], L = r[w], U = W({
      sourceRow: je.row,
      sourceColumnKey: je.columnKey,
      targetRow: L,
      targetColumnKey: P.key
    });
    Tt(P, w, U);
  }
  function Fo(m) {
    if (!It) return;
    const w = r[T.rowIdx], {
      key: P,
      shiftKey: L
    } = m;
    if (qt && L && P === " ") {
      gt(a);
      const U = a(w);
      Un({
        row: w,
        checked: !h.has(U),
        isShiftClick: !1
      }), m.preventDefault();
      return;
    }
    Et(T) && ti(m) && Xe(({
      idx: U,
      rowIdx: q
    }) => ({
      idx: U,
      rowIdx: q,
      mode: "EDIT",
      row: w,
      originalRow: w
    }));
  }
  function Gn(m) {
    return m >= po && m <= Ve;
  }
  function Ze(m) {
    return m >= 0 && m < r.length;
  }
  function Jt({
    idx: m,
    rowIdx: w
  }) {
    return w >= ge && w <= Ae && Gn(m);
  }
  function Lo({
    idx: m,
    rowIdx: w
  }) {
    return Ze(w) && m >= 0 && m <= Ve;
  }
  function Kn({
    idx: m,
    rowIdx: w
  }) {
    return Ze(w) && Gn(m);
  }
  function Et(m) {
    return Lo(m) && ii({
      columns: re,
      rows: r,
      selectedPosition: m
    });
  }
  function ct(m, w) {
    if (!Jt(m)) return;
    jn();
    const P = r[m.rowIdx], L = nn(T, m);
    w && Et(m) ? Xe({
      ...m,
      mode: "EDIT",
      row: P,
      originalRow: P
    }) : L ? Nt(tr(Ge.current)) : (St.current = !0, Xe({
      ...m,
      mode: "SELECT"
    })), N && !L && N({
      rowIdx: m.rowIdx,
      row: P,
      column: re[m.idx]
    });
  }
  function Ho(m, w, P) {
    const {
      idx: L,
      rowIdx: U
    } = T, q = Vt && L === -1;
    switch (m) {
      case "ArrowUp":
        return {
          idx: L,
          rowIdx: U - 1
        };
      case "ArrowDown":
        return {
          idx: L,
          rowIdx: U + 1
        };
      case uo:
        return {
          idx: L - 1,
          rowIdx: U
        };
      case Yn:
        return {
          idx: L + 1,
          rowIdx: U
        };
      case "Tab":
        return {
          idx: L + (P ? -1 : 1),
          rowIdx: U
        };
      case "Home":
        return q ? {
          idx: L,
          rowIdx: ge
        } : {
          idx: 0,
          rowIdx: w ? ge : U
        };
      case "End":
        return q ? {
          idx: L,
          rowIdx: Ae
        } : {
          idx: Ve,
          rowIdx: w ? Ae : U
        };
      case "PageUp": {
        if (T.rowIdx === ge) return T;
        const V = An(U) + mo(U) - Rt;
        return {
          idx: L,
          rowIdx: V > 0 ? _n(V) : 0
        };
      }
      case "PageDown": {
        if (T.rowIdx >= r.length) return T;
        const V = An(U) + Rt;
        return {
          idx: L,
          rowIdx: V < Xt ? _n(V) : r.length - 1
        };
      }
      default:
        return T;
    }
  }
  function qn(m) {
    const {
      key: w,
      shiftKey: P
    } = m;
    let L = "NONE";
    if (w === "Tab") {
      if (ci({
        shiftKey: P,
        maxColIdx: Ve,
        minRowIdx: ge,
        maxRowIdx: Ae,
        selectedPosition: T
      })) {
        jn();
        return;
      }
      L = "CHANGE_ROW";
    }
    m.preventDefault();
    const U = Lt(m), q = Ho(w, U, P);
    if (nn(T, q)) return;
    const V = si({
      moveUp: w === "ArrowUp",
      moveNext: w === Yn || w === "Tab" && !P,
      columns: re,
      colSpanColumns: Pn,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: ge,
      mainHeaderRowIdx: kt,
      maxRowIdx: Ae,
      lastFrozenColumnIndex: pe,
      cellNavigationMode: L,
      currentPosition: T,
      nextPosition: q,
      isCellWithinBounds: Jt
    });
    ct(V);
  }
  function Wo(m) {
    if (ot === void 0) return;
    const {
      rowIdx: w
    } = T;
    return (w < ot ? w < m && m <= ot : w > m && m >= ot) ? T.idx : void 0;
  }
  function Xn() {
    const m = tr(Ge.current);
    if (m === null) return;
    Nt(m), (m.querySelector('[tabindex="0"]') ?? m).focus({
      preventScroll: !0
    });
  }
  function zo() {
    if (M == null || T.mode === "EDIT" || !Kn(T))
      return;
    const {
      idx: m,
      rowIdx: w
    } = T, P = re[m];
    if (P.renderEditCell == null || P.editable === !1)
      return;
    const L = En(P);
    return /* @__PURE__ */ p(_i, {
      gridRowStart: qe + w + 1,
      rows: r,
      column: P,
      columnWidth: L,
      maxColIdx: Ve,
      isLastRow: w === Ae,
      selectedPosition: T,
      isCellEditable: Et,
      latestDraggedOverRowIdx: Ln,
      onRowsChange: s,
      onClick: Xn,
      onFill: M,
      setDragging: ro,
      setDraggedOverRowIdx: Qt
    });
  }
  function Yo(m) {
    if (T.rowIdx !== m || T.mode === "SELECT") return;
    const {
      idx: w,
      row: P
    } = T, L = re[w], U = be(L, pe, {
      type: "ROW",
      row: P
    }), q = (Z) => {
      St.current = Z, Xe(({
        idx: me,
        rowIdx: ue
      }) => ({
        idx: me,
        rowIdx: ue,
        mode: "SELECT"
      }));
    }, V = (Z, me, ue) => {
      me ? Ft(() => {
        Tt(L, T.rowIdx, Z), q(ue);
      }) : Xe((Ie) => ({
        ...Ie,
        row: Z
      }));
    };
    return r[T.rowIdx] !== T.originalRow && q(!1), /* @__PURE__ */ p(Ui, {
      column: L,
      colSpan: U,
      row: P,
      rowIdx: m,
      onRowChange: V,
      closeEditor: q,
      onKeyDown: R,
      navigate: qn
    }, L.key);
  }
  function lt(m) {
    const w = T.idx === -1 ? void 0 : re[T.idx];
    return w !== void 0 && T.rowIdx === m && !Ne.includes(w) ? T.idx > Nn ? [...Ne, w] : [...Ne.slice(0, pe + 1), w, ...Ne.slice(pe + 1)] : Ne;
  }
  function $o() {
    const m = [], {
      idx: w,
      rowIdx: P
    } = T, L = It && P < at ? at - 1 : at, U = It && P > st ? st + 1 : st;
    for (let q = L; q <= U; q++) {
      const V = q === at - 1 || q === st + 1, Z = V ? P : q;
      let me = Ne;
      const ue = w === -1 ? void 0 : re[w];
      ue !== void 0 && (V ? me = [ue] : me = lt(Z));
      const Ie = r[Z], Ao = qe + Z + 1;
      let en = Z, tn = !1;
      typeof a == "function" && (en = a(Ie), tn = (h == null ? void 0 : h.has(en)) ?? !1), m.push(B(en, {
        "aria-rowindex": qe + Z + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: Z,
        row: Ie,
        viewportColumns: me,
        isRowSelectionDisabled: (g == null ? void 0 : g(Ie)) ?? !1,
        isRowSelected: tn,
        onCellClick: ko,
        onCellDoubleClick: Do,
        onCellContextMenu: So,
        rowClass: se,
        gridRowStart: Ao,
        copiedCellIdx: je !== null && je.row === Ie ? re.findIndex((_o) => _o.key === je.columnKey) : void 0,
        selectedCellIdx: P === Z ? w : void 0,
        draggedOverCellIdx: Wo(Z),
        setDraggedOverRowIdx: In ? Qt : void 0,
        lastFrozenColumnIndex: pe,
        onRowChange: To,
        selectCell: Zt,
        selectedCellEditor: Yo(Z)
      }));
    }
    return m;
  }
  (T.idx > Ve || T.rowIdx > Ae) && (Xe({
    idx: -1,
    rowIdx: ge - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Mt = `repeat(${$e}, ${y}px)`;
  it > 0 && (Mt += ` repeat(${it}, ${F}px)`), r.length > 0 && (Mt += go), Ke > 0 && (Mt += ` repeat(${Ke}, ${F}px)`);
  const Vn = T.idx === -1 && T.rowIdx !== ge - 1;
  return /* @__PURE__ */ ae("div", {
    role: E,
    "aria-label": Se,
    "aria-labelledby": ze,
    "aria-describedby": Oe,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": re.length,
    "aria-rowcount": $n,
    className: Me(Ma, ee, In && Pa),
    style: {
      ..._,
      scrollPaddingInlineStart: T.idx > pe || (Pe == null ? void 0 : Pe.idx) !== void 0 ? `${lo}px` : void 0,
      scrollPaddingBlock: Ze(T.rowIdx) || (Pe == null ? void 0 : Pe.rowIdx) !== void 0 ? `${Kt + it * F}px ${Ke * F}px` : void 0,
      gridTemplateColumns: wo,
      gridTemplateRows: Mt,
      "--rdg-header-row-height": `${y}px`,
      "--rdg-scroll-height": `${bo}px`,
      ...co
    },
    dir: H,
    ref: Ge,
    onScroll: Oo,
    onKeyDown: Mo,
    "data-testid": Re,
    children: [/* @__PURE__ */ ae(Di, {
      value: fo,
      children: [/* @__PURE__ */ p(Ii, {
        value: Ro,
        children: /* @__PURE__ */ ae(Ri, {
          value: ho,
          children: [Array.from({
            length: Ut
          }, (m, w) => /* @__PURE__ */ p(ma, {
            rowIdx: w + 1,
            level: -Ut + w,
            columns: lt(ge + w),
            selectedCellIdx: T.rowIdx === ge + w ? T.idx : void 0,
            selectCell: Bn
          }, w)), /* @__PURE__ */ p(ha, {
            rowIdx: $e,
            columns: lt(kt),
            onColumnResize: Co,
            onColumnsReorder: xo,
            sortColumns: C,
            onSortColumnsChange: vo,
            lastFrozenColumnIndex: pe,
            selectedCellIdx: T.rowIdx === kt ? T.idx : void 0,
            selectCell: Bn,
            shouldFocusGrid: !Vt,
            direction: H
          })]
        })
      }), r.length === 0 && oe ? oe : /* @__PURE__ */ ae(yn, {
        children: [o == null ? void 0 : o.map((m, w) => {
          const P = $e + 1 + w, L = kt + 1 + w, U = T.rowIdx === L, q = Kt + F * w;
          return /* @__PURE__ */ p(er, {
            "aria-rowindex": P,
            rowIdx: L,
            gridRowStart: P,
            row: m,
            top: q,
            bottom: void 0,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: pe,
            selectedCellIdx: U ? T.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, w);
        }), /* @__PURE__ */ p(Si, {
          value: Io,
          children: $o()
        }), i == null ? void 0 : i.map((m, w) => {
          const P = qe + r.length + w + 1, L = r.length + w, U = T.rowIdx === L, q = Rt > Xt ? On - F * (i.length - w) : void 0, V = q === void 0 ? F * (i.length - 1 - w) : void 0;
          return /* @__PURE__ */ p(er, {
            "aria-rowindex": $n - Ke + w + 1,
            rowIdx: L,
            gridRowStart: P,
            row: m,
            top: q,
            bottom: V,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: pe,
            selectedCellIdx: U ? T.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, w);
        })]
      })]
    }), zo(), oi(Ne), Gt && /* @__PURE__ */ p("div", {
      ref: Dt,
      tabIndex: Vn ? 0 : -1,
      className: Me(Na, Vn && [sa, pe !== -1 && ca], !Ze(T.rowIdx) && Fa),
      style: {
        gridRowStart: T.rowIdx + qe + 1
      }
    }), Pe !== null && /* @__PURE__ */ p(ka, {
      scrollToPosition: Pe,
      setScrollToCellPosition: Tn,
      gridElement: Ge.current
    })]
  });
}
function tr(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function nn(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const Ar = /* @__PURE__ */ pn(_a);
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
  toggleGroup: d
}) {
  var u;
  const {
    tabIndex: b,
    childTabIndex: h,
    onFocus: g
  } = xt(o);
  function l() {
    d(e);
  }
  const C = c && s === i.idx;
  return /* @__PURE__ */ p("div", {
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
    onFocus: g,
    children: (!c || C) && ((u = i.renderGroupCell) == null ? void 0 : u.call(i, {
      groupKey: t,
      childRows: n,
      column: i,
      row: a,
      isExpanded: r,
      tabIndex: h,
      toggleGroup: l
    }))
  }, i.key);
}
const Ua = /* @__PURE__ */ We(Ba), ja = "g1yxluv37-0-0-beta-47", Ga = `rdg-group-row ${ja}`;
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
  toggleGroup: d,
  isRowSelectionDisabled: b,
  ...h
}) {
  const g = r[0].key === Be ? t.level + 1 : t.level;
  function l() {
    a({
      rowIdx: n,
      idx: -1
    });
  }
  const C = j(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: i
  }), [i]);
  return /* @__PURE__ */ p(Or, {
    value: C,
    children: /* @__PURE__ */ p("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Me(xn, Ga, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && _t),
      onClick: l,
      style: bn(s),
      ...h,
      children: r.map((u) => /* @__PURE__ */ p(Ua, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === u.idx,
        column: u,
        row: t,
        groupColumnIndex: g,
        toggleGroup: d,
        isGroupByColumn: c.includes(u.key)
      }, u.key))
    })
  });
}
const qa = /* @__PURE__ */ We(Ka);
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
  groupBy: d,
  rowGrouper: b,
  expandedGroupIds: h,
  onExpandedGroupIdsChange: g,
  ...l
}, C) {
  var Oe, le, Re;
  const u = At(), f = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? $r, D = 1 + (((Oe = l.topSummaryRows) == null ? void 0 : Oe.length) ?? 0), v = l.direction === "rtl", k = v ? "ArrowRight" : "ArrowLeft", R = v ? "ArrowLeft" : "ArrowRight", N = fe(Se), {
    columns: $,
    groupBy: x
  } = j(() => {
    const I = [...e].sort(({
      key: A
    }, {
      key: y
    }) => A === Be ? -1 : y === Be ? 1 : d.includes(A) ? d.includes(y) ? d.indexOf(A) - d.indexOf(y) : -1 : d.includes(y) ? 1 : 0), E = [];
    for (const [A, y] of I.entries())
      d.includes(y.key) && (E.push(y.key), I[A] = {
        ...y,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: y.renderGroupCell ?? xi,
        editable: !1
      });
    return {
      columns: I,
      groupBy: E
    };
  }, [e, d]), [S, M] = j(() => {
    if (x.length === 0) return [void 0, t.length];
    const I = (E, [A, ...y], F) => {
      let B = 0;
      const G = {};
      for (const [te, oe] of Object.entries(b(E, A))) {
        const [de, H] = y.length === 0 ? [oe, oe.length] : I(oe, y, F + B + 1);
        G[te] = {
          childRows: oe,
          childGroups: de,
          startRowIndex: F + B
        }, B += H + 1;
      }
      return [G, B];
    };
    return I(t, x, 0);
  }, [x, b, t]), [O, W] = j(() => {
    const I = /* @__PURE__ */ new Set();
    if (!S) return [t, y];
    const E = [], A = (F, B, G) => {
      if (Va(F)) {
        E.push(...F);
        return;
      }
      Object.keys(F).forEach((te, oe, de) => {
        const H = B !== void 0 ? `${B}__${te}` : te, X = h.has(H), {
          childRows: ie,
          childGroups: ye,
          startRowIndex: Ce
        } = F[te], he = {
          id: H,
          parentId: B,
          groupKey: te,
          isExpanded: X,
          childRows: ie,
          level: G,
          posInSet: oe,
          startRowIndex: Ce,
          setSize: de.length
        };
        E.push(he), I.add(he), X && A(ye, H, G + 1);
      });
    };
    return A(S, void 0, 0), [E, y];
    function y(F) {
      return I.has(F);
    }
  }, [h, S, t]), Y = j(() => typeof n == "function" ? (I) => W(I) ? n({
    type: "GROUP",
    row: I
  }) : n({
    type: "ROW",
    row: I
  }) : n, [W, n]), z = Q((I) => {
    const E = O.indexOf(I);
    for (let A = E - 1; A >= 0; A--) {
      const y = O[A];
      if (W(y) && (!W(I) || I.parentId === y.id))
        return [y, A];
    }
  }, [W, O]), ee = Q((I) => {
    if (W(I))
      return I.id;
    if (typeof r == "function")
      return r(I);
    const E = z(I);
    if (E !== void 0) {
      const {
        startRowIndex: A,
        childRows: y
      } = E[0], F = y.indexOf(I);
      return A + F + 1;
    }
    return O.indexOf(I);
  }, [z, W, r, O]), _ = j(() => {
    if (a == null) return null;
    gt(r);
    const I = new Set(a);
    for (const E of O)
      W(E) && E.childRows.every((y) => a.has(r(y))) && I.add(E.id);
    return I;
  }, [W, r, a, O]);
  function se(I) {
    if (!s) return;
    gt(r);
    const E = new Set(a);
    for (const A of O) {
      const y = ee(A);
      if (_ != null && _.has(y) && !I.has(y))
        if (W(A))
          for (const F of A.childRows)
            E.delete(r(F));
        else
          E.delete(y);
      else if (!(_ != null && _.has(y)) && I.has(y))
        if (W(A))
          for (const F of A.childRows)
            E.add(r(F));
        else
          E.add(y);
    }
    s(E);
  }
  function we(I, E) {
    if (o == null || o(I, E), E.isGridDefaultPrevented() || I.mode === "EDIT") return;
    const {
      column: A,
      rowIdx: y,
      selectCell: F
    } = I, B = (A == null ? void 0 : A.idx) ?? -1, G = O[y];
    if (W(G)) {
      if (B === -1 && (E.key === k && G.isExpanded || E.key === R && !G.isExpanded) && (E.preventDefault(), E.preventGridDefault(), Se(G.id)), B === -1 && E.key === k && !G.isExpanded && G.level !== 0) {
        const te = z(G);
        te !== void 0 && (E.preventGridDefault(), F({
          idx: B,
          rowIdx: te[1]
        }));
      }
      Lt(E) && (E.keyCode === 67 || E.keyCode === 86) && E.preventGridDefault();
    }
  }
  function De(I, {
    indexes: E,
    column: A
  }) {
    if (!i) return;
    const y = [...t], F = [];
    for (const B of E) {
      const G = t.indexOf(O[B]);
      y[G] = I[B], F.push(G);
    }
    i(y, {
      indexes: F,
      column: A
    });
  }
  function Se(I) {
    const E = new Set(h);
    E.has(I) ? E.delete(I) : E.add(I), g(E);
  }
  function ze(I, {
    row: E,
    rowClass: A,
    onCellClick: y,
    onCellDoubleClick: F,
    onCellContextMenu: B,
    onRowChange: G,
    lastFrozenColumnIndex: te,
    copiedCellIdx: oe,
    draggedOverCellIdx: de,
    setDraggedOverRowIdx: H,
    selectedCellEditor: X,
    ...ie
  }) {
    if (W(E)) {
      const {
        startRowIndex: he
      } = E;
      return /* @__PURE__ */ p(qa, {
        ...ie,
        "aria-rowindex": D + he + 1,
        row: E,
        groupBy: x,
        toggleGroup: N
      }, I);
    }
    let ye = ie["aria-rowindex"];
    const Ce = z(E);
    if (Ce !== void 0) {
      const {
        startRowIndex: he,
        childRows: rt
      } = Ce[0], Ye = rt.indexOf(E);
      ye = he + D + Ye + 2;
    }
    return f(I, {
      ...ie,
      "aria-rowindex": ye,
      row: E,
      rowClass: A,
      onCellClick: y,
      onCellDoubleClick: F,
      onCellContextMenu: B,
      onRowChange: G,
      lastFrozenColumnIndex: te,
      copiedCellIdx: oe,
      draggedOverCellIdx: de,
      setDraggedOverRowIdx: H,
      selectedCellEditor: X
    });
  }
  return /* @__PURE__ */ p(Ar, {
    ...l,
    role: "treegrid",
    "aria-rowcount": M + 1 + (((le = l.topSummaryRows) == null ? void 0 : le.length) ?? 0) + (((Re = l.bottomSummaryRows) == null ? void 0 : Re.length) ?? 0),
    ref: C,
    columns: $,
    rows: O,
    rowHeight: Y,
    rowKeyGetter: ee,
    onRowsChange: De,
    selectedRows: _,
    onSelectedRowsChange: se,
    onCellKeyDown: we,
    renderers: {
      ...c,
      renderRow: ze
    }
  });
}
function Va(e) {
  return Array.isArray(e);
}
const zl = /* @__PURE__ */ pn(Xa), Za = "t7vyx3i7-0-0-beta-47", Qa = `rdg-text-editor ${Za}`;
function Ja(e) {
  e == null || e.focus(), e == null || e.select();
}
function Yl({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ p("input", {
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
}, ts = Ee.div`
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
function ns(e, t, n, r) {
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
const rs = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, o] = ne(n ?? []), i = j(() => r.length === 0 ? t : [...t].sort((s, c) => {
    for (const d of r) {
      const b = e.find((l) => l.key === d.columnKey), g = ns(
        d.columnKey,
        b == null ? void 0 : b.type,
        b == null ? void 0 : b.sortComparator,
        b == null ? void 0 : b.getColumnValue
      )(s, c);
      if (g !== 0)
        return d.direction === "ASC" ? g : -g;
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
}, mt = 40, os = 200, is = "rdg-row-expanded", as = "rdg-detail-row", _r = "__rdgDetailParent", ss = (e) => ({ id: `rdg-detail:${e.id}`, [_r]: e }), vn = (e) => e[_r], Wt = (e) => vn(e) !== void 0, cs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, ss(r)] : [r]);
}, ls = Ee.button`
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
`, ds = () => /* @__PURE__ */ p("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ p("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), Br = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ p(
    ls,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), Ur(t, e.id);
      },
      children: /* @__PURE__ */ p(ds, {})
    }
  );
}, Ur = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, us = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', mn = (e, t, n, r = []) => Wt(e) || t === hs || t === jr || r.includes(t) ? !1 : !(n instanceof Element && n.closest(us)), $l = (e, t, n) => mn(e, t, n), nr = Ee.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, fs = Ee.span`
    display: inline-block;
    flex: 0 0 ${mt - 16}px;
`, hs = Be, jr = "rdg-expander-column", gs = (e) => ({
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
      const c = vn(s.row);
      return c ? t(c) : ((d = a.renderCell) == null ? void 0 : d.call(a, s)) ?? null;
    }
  });
}, ws = (e, t, n) => (r) => {
  const o = vn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, ys = (e, t = []) => Wt(e) ? as : t.includes(e.id) ? is : "", Gr = Ee(Ko)`
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
`, kn = ve.createContext({
  filters: {},
  setFilters: () => {
  }
}), ps = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = ve.useState({});
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
}, rn = (e) => e.stopPropagation(), bs = ({ options: e, renderInput: t, ...n }) => {
  const r = j(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ p(
    qo,
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
        Gr,
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
}, Cs = Ee(Go)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Pt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ ae(Cs, { children: [
  Wr(t),
  e
] }), xs = (e) => (t) => {
  const { filters: n, setFilters: r } = Te(kn), o = j(() => n[e.key], [n, e]), i = Q(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ p(on, { ...t, children: /* @__PURE__ */ p(
    bs,
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
    onClick: Pt,
    onKeyDown: Pt
  }) : /* @__PURE__ */ p(
    Gr,
    {
      autoComplete: "off",
      onClick: Pt,
      onKeyDown: Pt,
      value: o ?? "",
      onChange: (a) => i(a.target.value)
    }
  ) }) : /* @__PURE__ */ p(on, { ...t });
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
}, Ls = {
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
}, Hs = (e, t) => {
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
  ordinalNumber: Hs,
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
    formattingValues: Ls,
    defaultFormattingWidth: "wide"
  })
};
function ft(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Ys(s, (h) => h.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      zs(s, (h) => h.test(a))
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
function Ys(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function $s(e) {
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
const As = /^(\d+)(th|st|nd|rd)?/i, _s = /\d+/i, Bs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Us = {
  any: [/^b/i, /^(a|c)/i]
}, js = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gs = {
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
  ordinalNumber: $s({
    matchPattern: As,
    parsePattern: _s,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ft({
    matchPatterns: Bs,
    defaultMatchWidth: "wide",
    parsePatterns: Us,
    defaultParseWidth: "any"
  }),
  quarter: ft({
    matchPatterns: js,
    defaultMatchWidth: "wide",
    parsePatterns: Gs,
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
const Kr = 6048e5, nc = 864e5, rr = Symbol.for("constructDateFrom");
function He(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && rr in e ? e[rr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ke(e, t) {
  return He(t || e, e);
}
function or(e) {
  const t = ke(e), n = new Date(
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
  const n = He.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ir(e, t) {
  const n = ke(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function oc(e, t, n) {
  const [r, o] = rc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = ir(r), a = ir(o), s = +i - or(i), c = +a - or(a);
  return Math.round((s - c) / nc);
}
function ic(e, t) {
  const n = ke(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ac(e, t) {
  const n = ke(e, t == null ? void 0 : t.in);
  return oc(n, ic(n)) + 1;
}
function pt(e, t) {
  var s, c, d, b;
  const n = vt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((b = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : b.weekStartsOn) ?? 0, o = ke(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function zt(e, t) {
  return pt(e, { ...t, weekStartsOn: 1 });
}
function qr(e, t) {
  const n = ke(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = He(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = zt(o), a = He(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = zt(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function sc(e, t) {
  const n = qr(e, t), r = He(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), zt(r);
}
function cc(e, t) {
  const n = ke(e, t == null ? void 0 : t.in), r = +zt(n) - +sc(n);
  return Math.round(r / Kr) + 1;
}
function Xr(e, t) {
  var b, h, g, l;
  const n = ke(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = vt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (b = t == null ? void 0 : t.locale) == null ? void 0 : b.options) == null ? void 0 : h.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((l = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = He((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = pt(a, t), c = He((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const d = pt(c, t);
  return +n >= +s ? r + 1 : +n >= +d ? r : r - 1;
}
function lc(e, t) {
  var s, c, d, b;
  const n = vt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((b = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, o = Xr(e, t), i = He((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), pt(i, t);
}
function dc(e, t) {
  const n = ke(e, t == null ? void 0 : t.in), r = +pt(n, t) - +lc(n, t);
  return Math.round(r / Kr) + 1;
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
    const o = Xr(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return K(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : K(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = qr(e);
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
    const o = dc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : K(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = cc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : K(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Fe.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ac(e);
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
        return cr(r);
      case "XXXX":
      case "XX":
        return _e(r);
      case "XXXXX":
      case "XXX":
      default:
        return _e(r, ":");
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
        return _e(r);
      case "xxxxx":
      case "xxx":
      default:
        return _e(r, ":");
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
        return "GMT" + _e(r, ":");
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
        return "GMT" + _e(r, ":");
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
function sr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + K(i, 2);
}
function cr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + K(Math.abs(e) / 60, 2) : _e(e, t);
}
function _e(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = K(Math.trunc(r / 60), 2), i = K(r % 60, 2);
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
}, uc = (e, t) => {
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
  return i.replace("{{date}}", lr(r, t)).replace("{{time}}", Vr(o, t));
}, fc = {
  p: Vr,
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
function Zr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Qr(e) {
  return !(!Zr(e) && typeof e != "number" || isNaN(+ke(e)));
}
const Cc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, xc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vc = /^'([^]*?)'?$/, kc = /''/g, Dc = /[a-zA-Z]/;
function Sc(e, t, n) {
  var b, h, g, l, C, u, f, D;
  const r = vt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ec, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((l = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (C = n == null ? void 0 : n.locale) == null ? void 0 : C.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((D = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : D.weekStartsOn) ?? 0, s = ke(e, n == null ? void 0 : n.in);
  if (!Qr(s))
    throw new RangeError("Invalid time value");
  let c = t.match(xc).map((v) => {
    const k = v[0];
    if (k === "p" || k === "P") {
      const R = fc[k];
      return R(v, o.formatLong);
    }
    return v;
  }).join("").match(Cc).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const k = v[0];
    if (k === "'")
      return { isToken: !1, value: Rc(v) };
    if (ar[k])
      return { isToken: !0, value: v };
    if (k.match(Dc))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + k + "`"
      );
    return { isToken: !1, value: v };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((v) => {
    if (!v.isToken) return v.value;
    const k = v.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && yc(k) || !(n != null && n.useAdditionalDayOfYearTokens) && wc(k)) && pc(k, t, String(e));
    const R = ar[k[0]];
    return R(s, k, o.localize, d);
  }).join("");
}
function Rc(e) {
  const t = e.match(vc);
  return t ? t[1].replace(kc, "'") : e;
}
function Ic() {
  return Object.assign({}, vt());
}
function dr(e, t, n) {
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
  const n = Hc(t);
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
const sn = {}, ur = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Lc = ur === "06/25/2014, 00:00:00" || ur === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Hc(e) {
  return sn[e] || (sn[e] = Lc ? new Intl.DateTimeFormat("en-US", {
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
const fr = 36e5, Wc = 6e4, cn = {
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
    return o = parseInt(r[1], 10), hr(o) ? -(o * fr) : NaN;
  if (r = cn.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return hr(o, a) ? (i = Math.abs(o) * fr + a * Wc, r[1] === "+" ? -i : i) : NaN;
  }
  if ($c(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : zc(t), s = wn(a, e);
    return -(n ? s : Yc(t, s, e));
  }
  return NaN;
}
function zc(e) {
  return Jr(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function wn(e, t) {
  const n = Oc(e, t), r = Jr(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function Yc(e, t, n) {
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
function $c(e) {
  if (gr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), gr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Ac = 60 * 1e3, _c = {
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
        return "GMT" + Bc(r, ":");
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
  const n = e ? Dn(e, t, !0) / Ac : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
function Bc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Yt(i, 2);
}
function wr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Uc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, yr = 6e4, jc = 2, ce = {
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
  timeZone: Uc
};
function eo(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? jc : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = Gc(e), { year: o, restDateString: i } = Kc(r.date, n), a = qc(i, o);
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
      d = wr(new Date(s + c)), d = wr(new Date(s + c + d));
    return new Date(s + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Gc(e) {
  const t = {};
  let n = ce.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ce.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ce.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Kc(e, t) {
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
function qc(e, t) {
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
    return Qc(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ce.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return br(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ce.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, Cr(o) ? pr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = ce.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return Cr(o, a) ? pr(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Xc(e) {
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
const Vc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Zc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function to(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function br(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = to(e);
    if (r && n > Zc[t] || !r && n > Vc[t])
      return !1;
  }
  return !0;
}
function Qc(e, t) {
  if (t < 1)
    return !1;
  const n = to(e);
  return !(n && t > 366 || !n && t > 365);
}
function Cr(e, t) {
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
    const o = eo(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", d = i.replace(a, "'" + _c[a[0]](o, a, n) + "'");
      return c ? d.substring(0, s - 1) + d.substring(s + 1) : d;
    }, t);
  }
  return Sc(e, t, n);
}
function tl(e, t, n) {
  e = eo(e, n);
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
var no = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(no || {});
const rl = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !Zr(e) && typeof e == "string" ? new Date(e) : e;
  return Qr(r) ? nl(e, n, t) : "--";
}, xr = (e) => e.trim().toLowerCase(), Bt = ve.createContext({
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
  const [s, c] = ve.useState(0), [d, b] = ve.useState(!1), [h, g] = ve.useState([]), l = Q(
    (v) => {
      localStorage.setItem(i, JSON.stringify(v)), c((k) => k + 1), g(v);
    },
    [i]
  ), C = JSON.stringify(r ?? []), u = j(
    () => JSON.parse(C),
    [C]
  );
  Le(() => {
    const v = localStorage.getItem(i);
    if (v) {
      const k = JSON.parse(v);
      l(Array.isArray(k) ? k : []);
    } else
      l(u);
  }, [i, u, l]);
  const f = Q(
    (v) => {
      l(v), a == null || a(v);
    },
    [l, a]
  ), D = j(
    () => e.filter((v) => !(n != null && n.includes(v.key))),
    [e, n]
  );
  return /* @__PURE__ */ p(
    Bt.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        chooserOpen: d,
        setChooserOpen: b,
        columns: D,
        hiddenColumn: h,
        setHiddenColumn: f,
        enabled: o
      },
      children: t
    }
  );
}, Sn = Ee(Xo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${J.primary500};
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
  const { enabled: c, hiddenColumn: d } = Te(Bt), b = Q((h) => {
    const g = () => {
      if (h.renderCell)
        return h.renderCell;
      if (h.type === et.DATE)
        return ({ row: u }) => {
          var f, D;
          return rl(
            u[h.key],
            ((f = h.dateOptions) == null ? void 0 : f.formatDate) ?? no.DATE_WITH_TIME,
            (D = h.dateOptions) == null ? void 0 : D.timeZone
          );
        };
    }, l = () => h.renderHeaderCell ? h.renderHeaderCell : xs(h), C = {
      ...h,
      renderCell: g(),
      renderHeaderCell: l()
    };
    return h.frozenRight && (C.frozen = !1, C.cellClass = typeof h.cellClass == "function" ? (u) => hn(
      fn,
      h.cellClass(u)
    ) : hn(fn, h.cellClass), C.headerCellClass = hn(fn, h.headerCellClass)), C;
  }, []);
  return j(() => {
    const h = [];
    if (t && !n && h.push(gs(t)), n) {
      const g = (r ?? []).map((f) => f.id), l = g.length > 0 && g.every((f) => o == null ? void 0 : o.includes(f)), C = (f) => {
        const D = (o ?? []).filter((v) => !g.includes(v));
        return f ? [...D, ...g] : D;
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
        renderHeaderCell: () => /* @__PURE__ */ ae(nr, { children: [
          t && /* @__PURE__ */ p(fs, { "aria-hidden": !0 }),
          a ? a({
            checked: l,
            "aria-label": s,
            onChange: (f) => i == null ? void 0 : i(C(f))
          }) : /* @__PURE__ */ p(
            Sn,
            {
              checked: l,
              slotProps: { input: { "aria-label": s } },
              onChange: (f, D) => i == null ? void 0 : i(C(D))
            }
          )
        ] }),
        renderCell: t ? (f) => {
          var D;
          return /* @__PURE__ */ ae(nr, { children: [
            /* @__PURE__ */ p(Br, { row: f.row, expandable: t }),
            (D = dt.renderCell) == null ? void 0 : D.call(dt, f)
          ] });
        } : dt.renderCell
      });
    }
    return h.push(...e.map((g) => b(g))), c && d ? h.filter((g) => !d.includes(g.key)) : h;
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
}, $t = function() {
  return $t = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, $t.apply(this, arguments);
}, dl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, ul = ll("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function fl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, d = e.size, b = d === void 0 ? 15 : d, h = e.margin, g = h === void 0 ? 2 : h, l = dl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), C = $t({ display: "inherit" }, c), u = function(f) {
    return {
      backgroundColor: o,
      width: gn(b),
      height: gn(b),
      margin: gn(g),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(ul, " ").concat(0.75 / a, "s ").concat(f * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Ot.createElement(
    "span",
    $t({ style: C }, l),
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
}) => e ? e(n, r, o) : t === yt.TEXT && typeof n == "string" && typeof r == "string" ? xr(n).includes(xr(r)) : t === yt.AUTOCOMPLETE ? n === r : !1, gl = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = Te(kn);
  return j(() => n ? [...t].filter(
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
}, ml = Ee.div`
    height: 80px;
    width: 100%;
`, wl = ve.memo(
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
    return /* @__PURE__ */ p(ml, { children: /* @__PURE__ */ p(
      Vo,
      {
        labelRowsPerPage: i != null && i.rowsPerPageLabel ? /* @__PURE__ */ p("span", { children: i == null ? void 0 : i.rowsPerPageLabel }) : void 0,
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
  const [t, n] = ne(0), [r, o] = ne(e), i = Q(() => {
    n(0), o(e);
  }, []);
  return Le(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: o,
    resetPagination: i
  };
}, vr = 50, bl = 250, Cl = Ee.div`
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
`, xl = ve.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = Q(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ p(
      Sn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), vl = (e) => /* @__PURE__ */ p(xl, { ...e }), kl = "Select all rows", Dl = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  selectedRows: s,
  onSelectedRowsChange: c,
  selectAllLabel: d = kl,
  noDataMessage: b,
  filters: h,
  setFilters: g,
  pagination: l,
  renderers: C,
  expandable: u,
  rowGestures: f,
  rowHeight: D,
  rowClass: v,
  onCellClick: k,
  onCellDoubleClick: R,
  ...N
}) => {
  var de;
  const { gridKey: $ } = Te(Bt), { pageSize: x, currentPage: S, setCurrentPage: M, setPageSize: O } = pl(
    l == null ? void 0 : l.defaultPageSize
  ), W = (C == null ? void 0 : C.renderCheckbox) ?? vl, Y = al({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c,
    renderCheckbox: W,
    selectAllLabel: d
  }), z = j(() => Y.map((H) => H.key).join("|"), [Y]), ee = j(
    () => Y.some((H) => H.filterEnabled),
    [Y]
  ), _ = j(
    () => (l == null ? void 0 : l.enabled) && !l.remotePagination,
    [l]
  ), se = j(() => !g, [g]), we = gl({
    columns: Y,
    rows: n,
    enabled: se
  }), De = j(() => !i, [i]), {
    sortedRows: Se,
    sortColumns: ze,
    setSortedColumns: Oe
  } = rs({
    columns: Y,
    rows: we,
    defaultSortColumns: a
  }), le = j(() => {
    if (!_)
      return S;
    const H = Math.max(0, Math.ceil(we.length / x) - 1);
    return Math.min(S, H);
  }, [_, S, x, we.length]);
  Le(() => {
    le !== S && M(le);
  }, [le, S, M]);
  const Re = j(() => _ ? Se.slice(le * x, (le + 1) * x) : Se, [Se, _, le, x]), I = j(
    () => u ? cs(Re, u.expandedIds) : Re,
    [u, Re]
  ), E = j(
    () => u ? ms(Y, u.renderDetail) : Y,
    [u, Y]
  ), A = Q(
    (H, X) => {
      const ie = () => {
        const ye = ys(H, u == null ? void 0 : u.expandedIds);
        return ye || (X === 0 ? "first-row" : X === n.length - 1 ? "last-row" : "");
      };
      return [v == null ? void 0 : v(H, X), ie()].filter(Boolean).join(" ");
    },
    [n, u == null ? void 0 : u.expandedIds, v]
  ), y = xe(void 0), F = Q(() => {
    y.current !== void 0 && (clearTimeout(y.current), y.current = void 0);
  }, []);
  Le(() => F, [F]);
  const B = Q(
    (H) => {
      f != null && f.onClick ? f.onClick(H) : u && Ur(u, H.id);
    },
    [f, u]
  ), G = Q(
    (H, X) => {
      if (k == null || k(H, X), X.isGridDefaultPrevented() || !u && !(f != null && f.onClick) || (F(), !mn(
        H.row,
        H.column.key,
        X.target,
        f == null ? void 0 : f.excludedColumns
      )))
        return;
      if (!(f != null && f.onDoubleClick)) {
        B(H.row);
        return;
      }
      if (X.detail > 1)
        return;
      const { row: ie } = H;
      y.current = setTimeout(() => {
        y.current = void 0, B(ie);
      }, bl);
    },
    [k, u, f, F, B]
  ), te = Q(
    (H, X) => {
      R == null || R(H, X), F(), !(!(f != null && f.onDoubleClick) || X.isGridDefaultPrevented()) && mn(
        H.row,
        H.column.key,
        X.target,
        f.excludedColumns
      ) && f.onDoubleClick(H.row);
    },
    [R, f, F]
  ), oe = !(l != null && l.remotePagination);
  return Le(() => {
    if (!oe)
      return;
    const H = s == null ? void 0 : s.filter(
      (X) => n.some((ie) => ie.id === X)
    );
    (H == null ? void 0 : H.length) != (s == null ? void 0 : s.length) && (c == null || c(H ?? []));
  }, [n, s, oe]), /* @__PURE__ */ ae(ts, { $pagination: !!(l != null && l.enabled), children: [
    /* @__PURE__ */ p("div", { children: /* @__PURE__ */ p(
      Ar,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: (H) => {
          c == null || c(Array.from(H));
        },
        rowKeyGetter: (H) => H.id,
        rows: I,
        onSortColumnsChange: De ? Oe : i,
        sortColumns: De ? ze : o,
        columns: E,
        rowClass: A,
        headerRowHeight: ee ? 70 : void 0,
        onCellClick: G,
        onCellDoubleClick: te,
        enableVirtualization: E.some((H) => H.frozenRight) ? !1 : void 0,
        ...N,
        rowHeight: u ? ws(
          D,
          vr,
          u.detailHeight ?? os
        ) : D ?? vr,
        renderers: {
          renderCheckbox: W,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...b != null && !t ? {
            noRowsFallback: /* @__PURE__ */ p("div", { className: "rdg-no-data", children: b })
          } : {},
          ...C
        },
        style: { ...es, ...e ?? {} }
      },
      `${$}:${z}`
    ) }),
    l != null && l.enabled ? /* @__PURE__ */ p(
      wl,
      {
        ...(l == null ? void 0 : l.remotePagination) ?? {
          currentPage: le,
          setCurrentPage: M,
          pageSize: x,
          setPageSize: O,
          totalCount: we.length
        },
        labels: l.labels ?? ((de = l.remotePagination) == null ? void 0 : de.labels)
      }
    ) : null,
    t ? /* @__PURE__ */ ae(Cl, { children: [
      /* @__PURE__ */ p("div", {}),
      /* @__PURE__ */ p(fl, { color: J.primary500 })
    ] }) : null
  ] });
}, Al = ({
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
}) => /* @__PURE__ */ p(ps, { filters: e, setFilters: t, children: /* @__PURE__ */ p(
  il,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ p(Dl, { ...c, columns: n, filters: e, setFilters: t })
  }
) }), Sl = Ee(Qo)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, _l = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r, chooserOpen: o, setChooserOpen: i } = Te(Bt), a = ve.useRef(null), [s, c] = ve.useState(null);
  ve.useEffect(() => {
    c(o ? a.current : null);
  }, [o]);
  const d = Q(() => {
    i(!0);
  }, [i]), b = Q(() => {
    i(!1);
  }, [i]), h = Q(
    (g) => () => {
      const l = n.indexOf(g);
      r(
        l === -1 ? [...n, g] : n.filter((C) => C !== g)
      );
    },
    [n]
  );
  return /* @__PURE__ */ ae("div", { ref: a, children: [
    /* @__PURE__ */ p(e, { onClick: d }),
    /* @__PURE__ */ p(
      Zo,
      {
        id: "column-visibility-menu",
        anchorEl: s,
        open: o && !!s,
        onClose: b,
        children: t.map((g) => /* @__PURE__ */ ae(Sl, { onClick: h(g.key), children: [
          /* @__PURE__ */ p(Sn, { checked: !n.includes(g.key) }),
          g.name
        ] }, g.key))
      }
    )
  ] });
};
export {
  et as ColumnType,
  no as DATE_FORMAT,
  yl as DEFAULT_PAGE_SIZES,
  Al as DataGrid,
  Sn as DataGridCheckbox,
  Di as DataGridDefaultRenderersProvider,
  jr as EXPANDER_COLUMN_KEY,
  Br as ExpanderToggle,
  yt as FilterType,
  bl as ROW_CLICK_DELAY_MS,
  Wl as Row,
  hs as SELECTION_COLUMN_KEY,
  Be as SELECT_COLUMN_KEY,
  Cn as SelectCellFormatter,
  dt as SelectColumn,
  vi as ToggleGroup,
  zl as TreeDataGrid,
  _l as VisibilityColumnChooser,
  mn as clickBelongsToRow,
  $l as clickExpandsRow,
  rl as convertDate,
  es as defaultTheme,
  ws as detailAwareRowHeight,
  ys as detailRowClass,
  xr as getStringToCompare,
  Wt as isDetailRow,
  wi as renderCheckbox,
  Wr as renderHeaderCell,
  Ia as renderSortIcon,
  Ta as renderSortPriority,
  xi as renderToggleGroup,
  ki as renderValue,
  J as taktikTheme,
  Yl as textEditor,
  Ti as useHeaderRowSelection,
  pl as usePagination,
  Nr as useRowSelection,
  ms as withDetailRendering,
  cs as withDetailRows
};
