import { jsx as y, jsxs as oe, Fragment as wn } from "react/jsx-runtime";
import * as Ot from "react";
import pe, { createContext as bt, memo as Le, forwardRef as yn, useContext as Re, useMemo as G, useCallback as J, useRef as Se, useEffect as _e, useState as te, useImperativeHandle as Bo, useLayoutEffect as Uo, useId as Go } from "react";
import { flushSync as Ft } from "react-dom";
import Ie from "@emotion/styled";
import jo from "@mui/material/Box";
import Ko from "@mui/material/TextField";
import qo from "@mui/material/Autocomplete";
import Xo from "@mui/material/Checkbox";
import Vo from "@mui/material/TablePagination";
import Zo from "@mui/material/Menu";
import Qo from "@mui/material/MenuItem";
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
function Ht(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ti(e) {
  return Ht(e) && e.keyCode !== 86 ? !1 : !ei.has(e.key);
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
    idx: m,
    rowIdx: D
  } = l;
  const v = r.length, k = (W) => {
    for (const x of o) {
      const S = x.idx;
      if (S > m) break;
      const F = ai({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: D,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: C,
        column: x
      });
      if (F && m > S && m < F + S) {
        m = S + (W ? F : 0);
        break;
      }
    }
  }, I = (W) => W.level + d, N = () => {
    if (t) {
      let x = r[m].parent;
      for (; x !== void 0; ) {
        const S = I(x);
        if (D === S) {
          m = x.idx + x.colSpan;
          break;
        }
        x = x.parent;
      }
    } else if (e) {
      let x = r[m].parent, S = !1;
      for (; x !== void 0; ) {
        const F = I(x);
        if (D >= F) {
          m = x.idx, D = F, S = !0;
          break;
        }
        x = x.parent;
      }
      S || (m = f, D = h);
    }
  };
  if (u(l) && (k(t), D < d && N()), n === "CHANGE_ROW" && (m === v ? D === b || (m = 0, D += 1) : m === -1 && (D === c || (D -= 1, m = v - 1), k(!1))), D < d) {
    let x = r[m].parent;
    const S = D;
    for (D = d; x !== void 0; ) {
      const F = I(x);
      F >= S && (D = F, m = x.idx), x = x.parent;
    }
  }
  return {
    idx: m,
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
  max: Lt,
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
  return e = Lt(e, t), typeof n == "number" && n >= t ? wt(e, n) : e;
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
  return /* @__PURE__ */ oe("span", {
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
function At() {
  return Re(Tr);
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
const Er = /* @__PURE__ */ bt(void 0), Mr = Er.Provider, Or = /* @__PURE__ */ bt(void 0), Si = Or.Provider;
function Pr() {
  const e = Re(Er), t = Re(Or);
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
  const e = Re(Nr), t = Re(Fr);
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
function Oi(e) {
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
    return /* @__PURE__ */ y(Oi, {
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
  const a = (t == null ? void 0 : t.width) ?? Pi, s = (t == null ? void 0 : t.minWidth) ?? Ni, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? ki, b = (t == null ? void 0 : t.sortable) ?? !1, f = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: l,
    colSpanColumns: C,
    lastFrozenColumnIndex: u,
    headerRowsCount: m
  } = G(() => {
    let x = -1, S = 1;
    const F = [];
    E(e, 1);
    function E(A, $, Z) {
      for (const _ of A) {
        if ("children" in _) {
          const we = {
            name: _.name,
            parent: Z,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: _.headerCellClass
          };
          E(_.children, $ + 1, we);
          continue;
        }
        const ee = _.frozen ?? !1, Ce = {
          ..._,
          parent: Z,
          idx: 0,
          level: 0,
          frozen: ee,
          width: _.width ?? a,
          minWidth: _.minWidth ?? s,
          maxWidth: _.maxWidth ?? c,
          sortable: _.sortable ?? b,
          resizable: _.resizable ?? f,
          draggable: _.draggable ?? h,
          renderCell: _.renderCell ?? d
        };
        F.push(Ce), ee && x++, $ > S && (S = $);
      }
    }
    F.sort(({
      key: A,
      frozen: $
    }, {
      key: Z,
      frozen: _
    }) => A === Be ? -1 : Z === Be ? 1 : $ ? _ ? 0 : -1 : _ ? 1 : 0);
    const H = [];
    return F.forEach((A, $) => {
      A.idx = $, Hr(A, $, 0), A.colSpan != null && H.push(A);
    }), {
      columns: F,
      colSpanColumns: H,
      lastFrozenColumnIndex: x,
      headerRowsCount: S
    };
  }, [e, a, s, c, d, f, b, h]), {
    templateColumns: D,
    layoutCssVars: v,
    totalFrozenColumnWidth: k,
    columnMetrics: I
  } = G(() => {
    const x = /* @__PURE__ */ new Map();
    let S = 0, F = 0;
    const E = [];
    for (const A of l) {
      let $ = n(A);
      typeof $ == "number" ? $ = Rr($, A) : $ = A.minWidth, E.push(`${$}px`), x.set(A, {
        width: $,
        left: S
      }), S += $;
    }
    if (u !== -1) {
      const A = x.get(l[u]);
      F = A.left + A.width;
    }
    const H = {};
    for (let A = 0; A <= u; A++) {
      const $ = l[A];
      H[`--rdg-frozen-left-${$.idx}`] = `${x.get($).left}px`;
    }
    return {
      templateColumns: E,
      layoutCssVars: H,
      totalFrozenColumnWidth: F,
      columnMetrics: x
    };
  }, [n, l, u]), [N, W] = G(() => {
    if (!i)
      return [0, l.length - 1];
    const x = o + k, S = o + r, F = l.length - 1, E = wt(u + 1, F);
    if (x >= S)
      return [E, E];
    let H = E;
    for (; H < F; ) {
      const {
        left: _,
        width: ee
      } = I.get(l[H]);
      if (_ + ee > x)
        break;
      H++;
    }
    let A = H;
    for (; A < F; ) {
      const {
        left: _,
        width: ee
      } = I.get(l[A]);
      if (_ + ee >= S)
        break;
      A++;
    }
    const $ = Lt(E, H - 1), Z = wt(F, A + 1);
    return [$, Z];
  }, [I, l, u, o, k, r, i]);
  return {
    columns: l,
    colSpanColumns: C,
    colOverscanStartIdx: N,
    colOverscanEndIdx: W,
    templateColumns: D,
    layoutCssVars: v,
    headerRowsCount: m,
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
function Hi(e, t, n, r, o, i, a, s, c, d) {
  const b = Se(o), f = e.length === t.length, h = f && o !== b.current, l = [...n], C = [];
  for (const {
    key: v,
    idx: k,
    width: I
  } of t)
    typeof I == "string" && (h || !a.has(v)) && !i.has(v) && (l[k] = I, C.push(v));
  const u = l.join(" ");
  tt(() => {
    b.current = o, m(C);
  });
  function m(v) {
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
      } else f && typeof E == "string" && !i.has(S) && (N[F] = E, W.push(S));
    r.current.style.gridTemplateColumns = N.join(" ");
    const x = typeof k == "number" ? k : Zn(r, I);
    Ft(() => {
      s((S) => {
        const F = new Map(S);
        return F.set(I, x), F;
      }), m(W);
    }), d == null || d(v.idx, x);
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
  const e = Se(null), [t, n] = te(1), [r, o] = te(1), [i, a] = te(0);
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
    } = e.current.getBoundingClientRect(), C = f - d, u = h - b + c, m = l - C;
    n(u), o(m), a(C);
    const D = new s((v) => {
      const k = v[0].contentBoxSize[0], {
        clientHeight: I,
        offsetHeight: N
      } = e.current;
      Ft(() => {
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
  const n = J((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function xt(e) {
  const [t, n] = te(!1);
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
  const b = G(() => {
    if (i === 0) return 0;
    let f = i;
    const h = (l, C) => C !== void 0 && l + C > i ? (f = l, !0) : !1;
    for (const l of t) {
      const C = l.idx;
      if (C >= f || h(C, me(l, s, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const m = n[u];
        if (h(C, me(l, s, {
          type: "ROW",
          row: m
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (h(C, me(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (o != null) {
        for (const u of o)
          if (h(C, me(l, s, {
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
    for (let h = 0; h <= a; h++) {
      const l = e[h];
      h < b && !l.frozen || f.push(l);
    }
    return f;
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
  } = G(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (m) => m * t,
        getRowHeight: () => t,
        findRowIdx: (m) => Vn(m / t)
      };
    let h = 0, l = " ";
    const C = e.map((m) => {
      const D = t(m), v = {
        top: h,
        height: D
      };
      return l += `${D}px `, h += D, v;
    }), u = (m) => Lt(0, wt(e.length - 1, m));
    return {
      totalRowHeight: h,
      gridTemplateRows: l,
      getRowTop: (m) => C[u(m)].top,
      getRowHeight: (m) => C[u(m)].height,
      findRowIdx(m) {
        let D = 0, v = C.length - 1;
        for (; D <= v; ) {
          const k = D + Vn((v - D) / 2), I = C[k].top;
          if (I === m) return k;
          if (I < m ? D = k + 1 : I > m && (v = k - 1), D > v) return v;
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
const $i = "c1w9bbhr7-0-0-beta-47", Yi = "c1creorc7-0-0-beta-47", Ai = `rdg-cell-drag-handle ${$i}`;
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
  onClick: f,
  setDragging: h,
  setDraggedOverRowIdx: l
}) {
  const {
    idx: C,
    rowIdx: u
  } = a;
  function m(N) {
    if (N.preventDefault(), N.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", W), window.addEventListener("mouseup", x);
    function W(S) {
      S.buttons !== 1 && x();
    }
    function x() {
      window.removeEventListener("mouseover", W), window.removeEventListener("mouseup", x), h(!1), D();
    }
  }
  function D() {
    const N = s.current;
    if (N === void 0) return;
    const W = u < N ? u + 1 : N, x = u < N ? N + 1 : u;
    k(W, x), l(void 0);
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
    F.length > 0 && (d == null || d(S, {
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
    className: Ee(Ai, n.frozen && Yi),
    onClick: f,
    onMouseDown: m,
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
  const c = Se(void 0), d = ((D = e.editorOptions) == null ? void 0 : D.commitOnOutsideClick) !== !1, b = de(() => {
    l(!0, !1);
  });
  _e(() => {
    if (!d) return;
    function I() {
      c.current = requestAnimationFrame(b);
    }
    return addEventListener("mousedown", I, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", I, {
        capture: !0
      }), f();
    };
  }, [d, b]);
  function f() {
    cancelAnimationFrame(c.current);
  }
  function h(I) {
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
        onClose: l
      }, N), N.isGridDefaultPrevented()) return;
    }
    I.key === "Escape" ? l() : I.key === "Enter" ? l(!0) : ni(I) && s(I);
  }
  function l(I = !1, N = !0) {
    I ? o(n, !0, N) : i(N);
  }
  function C(I, N = !1) {
    o(I, N, N);
  }
  const {
    cellClass: u
  } = e, m = Ct(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((v = e.editorOptions) != null && v.displayCellContent) && Bi);
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: m,
    style: nt(e, t),
    onKeyDown: h,
    onMouseDownCapture: f,
    children: e.renderEditCell != null && /* @__PURE__ */ oe(wn, {
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
    className: Ee(Dr, e.headerCellClass),
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
  const r = At().renderSortStatus;
  return /* @__PURE__ */ oe("span", {
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
  shouldFocusGrid: d,
  direction: b,
  dragDropKey: f
}) {
  const [h, l] = te(!1), [C, u] = te(!1), m = b === "rtl", D = Ir(e, n), {
    tabIndex: v,
    childTabIndex: k,
    onFocus: I
  } = xt(r), N = a == null ? void 0 : a.findIndex((p) => p.columnKey === e.key), W = N !== void 0 && N > -1 ? a[N] : void 0, x = W == null ? void 0 : W.direction, S = W !== void 0 && a.length > 1 ? N + 1 : void 0, F = x && !S ? x === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: E,
    resizable: H,
    draggable: A
  } = e, $ = Ct(e, e.headerCellClass, E && Vi, H && Qi, A && ea, h && na, C && oa), Z = e.renderHeaderCell ?? Lr;
  function _(p) {
    if (p.pointerType === "mouse" && p.buttons !== 1)
      return;
    p.preventDefault();
    const {
      currentTarget: z,
      pointerId: U
    } = p, O = z.parentElement, {
      right: q,
      left: ne
    } = O.getBoundingClientRect(), se = m ? p.clientX - ne : q - p.clientX;
    let ce = !1;
    function ve(ye) {
      const {
        width: ue,
        right: rt,
        left: ze
      } = O.getBoundingClientRect();
      let Ue = m ? rt + se - ye.clientX : ye.clientX + se - ze;
      Ue = Rr(Ue, e), ue > 0 && Ue !== ue && o(e, Ue);
    }
    function ke() {
      ce = !0, o(e, "max-content");
    }
    function Te(ye) {
      ce || ve(ye), z.removeEventListener("pointermove", ve), z.removeEventListener("dblclick", ke), z.removeEventListener("lostpointercapture", Te);
    }
    z.setPointerCapture(U), z.addEventListener("pointermove", ve), z.addEventListener("dblclick", ke), z.addEventListener("lostpointercapture", Te);
  }
  function ee(p) {
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
        const O = [...a];
        U ? O[N] = U : O.splice(N, 1), s(O);
      } else
        s(U ? [U] : []);
    }
  }
  function Ce(p) {
    c({
      idx: e.idx,
      rowIdx: n
    }), E && ee(p.ctrlKey || p.metaKey);
  }
  function we(p) {
    I == null || I(p), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Me(p) {
    (p.key === " " || p.key === "Enter") && (p.preventDefault(), ee(p.ctrlKey || p.metaKey));
  }
  function We(p) {
    p.dataTransfer.setData(f, e.key), p.dataTransfer.dropEffect = "move", l(!0);
  }
  function ae() {
    l(!1);
  }
  function xe(p) {
    p.preventDefault(), p.dataTransfer.dropEffect = "move";
  }
  function Oe(p) {
    if (u(!1), p.dataTransfer.types.includes(f.toLowerCase())) {
      const z = p.dataTransfer.getData(f.toLowerCase());
      z !== e.key && (p.preventDefault(), i == null || i(z, e.key));
    }
  }
  function R(p) {
    Qn(p) && u(!0);
  }
  function M(p) {
    Qn(p) && u(!1);
  }
  let Y;
  return A && (Y = {
    draggable: !0,
    onDragStart: We,
    onDragEnd: ae,
    onDragOver: xe,
    onDragEnter: R,
    onDragLeave: M,
    onDrop: Oe
  }), /* @__PURE__ */ oe("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": D,
    "aria-selected": r,
    "aria-sort": F,
    tabIndex: d ? 0 : v,
    className: $,
    style: {
      ...Sr(e, n, D),
      ...nt(e, t)
    },
    onFocus: we,
    onClick: Ce,
    onKeyDown: E ? Me : void 0,
    ...Y,
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
const aa = "r1upfr807-0-0-beta-47", Cn = `rdg-row ${aa}`, sa = "r190mhd37-0-0-beta-47", _t = "rdg-row-selected", ca = "r139qu9m7-0-0-beta-47", la = "rdg-top-summary-row", da = "rdg-bottom-summary-row", ua = "h10tskcx7-0-0-beta-47", Wr = `rdg-header-row ${ua}`;
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
  const f = Go(), h = [];
  for (let l = 0; l < t.length; l++) {
    const C = t[l], u = me(C, a, {
      type: "HEADER"
    });
    u !== void 0 && (l += u - 1), h.push(/* @__PURE__ */ y(ia, {
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
    className: Ee(Wr, s === -1 && _t),
    children: h
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
          idx: d
        } = c;
        i.push(/* @__PURE__ */ y(Gi, {
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
    cellClass: m
  } = e, D = Ct(e, typeof m == "function" ? m(i) : m, r && ya, o && ba), v = kr(e, i);
  function k(S) {
    f({
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
    if (d) {
      const F = ht(S);
      if (d({
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
    tabIndex: l,
    className: D,
    style: nt(e, t),
    onClick: I,
    onDoubleClick: W,
    onContextMenu: N,
    onFocus: u,
    ...h,
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
  row: d,
  viewportColumns: b,
  selectedCellEditor: f,
  onCellClick: h,
  onCellDoubleClick: l,
  onCellContextMenu: C,
  rowClass: u,
  setDraggedOverRowIdx: m,
  onMouseEnter: D,
  onRowChange: v,
  selectCell: k,
  ...I
}, N) {
  const W = de((E, H) => {
    v(E, t, H);
  });
  function x(E) {
    m == null || m(t), D == null || D(E);
  }
  e = Ee(Cn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && _t);
  const S = [];
  for (let E = 0; E < b.length; E++) {
    const H = b[E], {
      idx: A
    } = H, $ = me(H, c, {
      type: "ROW",
      row: d
    });
    $ !== void 0 && (E += $ - 1);
    const Z = r === A;
    Z && f ? S.push(f) : S.push(/* @__PURE__ */ y(xa, {
      column: H,
      colSpan: $,
      row: d,
      rowIdx: t,
      isCopied: a === A,
      isDraggedOver: s === A,
      isCellSelected: Z,
      onClick: h,
      onDoubleClick: l,
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
const zr = /* @__PURE__ */ Le(/* @__PURE__ */ yn(va)), Ll = zr;
function $r(e, t) {
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
const Da = "a3ejtar7-0-0-beta-47", Sa = `rdg-sort-arrow ${Da}`;
function Ra({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ oe(wn, {
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
const Ea = "rnvodz57-0-0-beta-47", Ma = `rdg ${Ea}`, Oa = "vlqv91k7-0-0-beta-47", Pa = `rdg-viewport-dragging ${Oa}`, Na = "f1lsfrzw7-0-0-beta-47", Fa = "f1cte0lg7-0-0-beta-47", Ha = "s8wc6fl7-0-0-beta-47";
function La({
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
  } = e, b = Ct(e, Ha, typeof d == "function" ? d(n) : d);
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
const Wa = /* @__PURE__ */ Le(La), za = "skuhp557-0-0-beta-47", $a = "tf8l5ub7-0-0-beta-47", Ya = `rdg-summary-row ${za}`;
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
  const f = [];
  for (let h = 0; h < r.length; h++) {
    const l = r[h], C = me(l, a, {
      type: "SUMMARY",
      row: n
    });
    C !== void 0 && (h += C - 1);
    const u = s === l.idx;
    f.push(/* @__PURE__ */ y(Wa, {
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
    className: Ee(Cn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Ya, c ? `${la} ${$a}` : da, s === -1 && _t),
    style: {
      ...pn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: f
  });
}
const Jn = /* @__PURE__ */ Le(Aa);
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
    selectedRows: f,
    isRowSelectionDisabled: h,
    onSelectedRowsChange: l,
    sortColumns: C,
    onSortColumnsChange: u,
    defaultColumnOptions: m,
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
    enableVirtualization: A,
    renderers: $,
    className: Z,
    style: _,
    rowClass: ee,
    direction: Ce,
    role: we,
    "aria-label": Me,
    "aria-labelledby": We,
    "aria-describedby": ae,
    "aria-rowcount": xe,
    "data-testid": Oe
  } = e, R = At(), M = we ?? "grid", Y = c ?? 35, p = d ?? (typeof Y == "number" ? Y : 35), z = b ?? (typeof Y == "number" ? Y : 35), U = ($ == null ? void 0 : $.renderRow) ?? (R == null ? void 0 : R.renderRow) ?? $r, O = ($ == null ? void 0 : $.renderSortStatus) ?? (R == null ? void 0 : R.renderSortStatus) ?? Ra, q = ($ == null ? void 0 : $.renderCheckbox) ?? (R == null ? void 0 : R.renderCheckbox) ?? wi, ne = ($ == null ? void 0 : $.noRowsFallback) ?? (R == null ? void 0 : R.noRowsFallback), se = A ?? !0, ce = Ce ?? "ltr", [ve, ke] = te(0), [Te, ye] = te(0), [ue, rt] = te(() => /* @__PURE__ */ new Map()), [ze, Ue] = te(() => /* @__PURE__ */ new Map()), [Ge, Sn] = te(null), [Rn, ro] = te(!1), [ot, oo] = te(void 0), [Pe, In] = te(null), Tn = J((g) => ue.get(g.key) ?? ze.get(g.key) ?? g.width, [ze, ue]), [je, En, Mn, io] = Li(), {
    columns: re,
    colSpanColumns: On,
    lastFrozenColumnIndex: ge,
    headerRowsCount: $e,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Pn,
    templateColumns: so,
    layoutCssVars: co,
    totalFrozenColumnWidth: lo
  } = Fi({
    rawColumns: n,
    defaultColumnOptions: m,
    getColumnWidth: Tn,
    scrollLeft: Te,
    viewportWidth: En,
    enableVirtualization: se
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Nn = it + Ke, qe = $e + it, Ut = $e - 1, fe = -qe, kt = fe + Ut, Ye = r.length + Ke - 1, [T, Xe] = te(() => ({
    idx: -1,
    rowIdx: fe - 1,
    mode: "SELECT"
  })), Gt = Se(T), Fn = Se(ot), Hn = Se(-1), Dt = Se(null), St = Se(!1), jt = M === "treegrid", Kt = $e * p, Ln = Nn * z, Rt = Mn - Kt - Ln, qt = f != null && l != null, Wn = ce === "rtl", uo = Wn ? "ArrowRight" : "ArrowLeft", zn = Wn ? "ArrowLeft" : "ArrowRight", $n = xe ?? $e + r.length + Nn, fo = G(() => ({
    renderCheckbox: q,
    renderSortStatus: O
  }), [q, O]), ho = G(() => {
    let g = !1, w = !1;
    if (a != null && f != null && f.size > 0) {
      for (const P of r)
        if (f.has(a(P)) ? g = !0 : w = !0, g && w) break;
    }
    return {
      isRowSelected: g && !w,
      isIndeterminate: g && w
    };
  }, [r, f, a]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    totalRowHeight: Xt,
    gridTemplateRows: go,
    getRowTop: Yn,
    getRowHeight: mo,
    findRowIdx: An
  } = zi({
    rows: r,
    rowHeight: Y,
    clientHeight: Rt,
    scrollTop: ve,
    enableVirtualization: se
  }), Ne = Wi({
    columns: re,
    colSpanColumns: On,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Pn,
    lastFrozenColumnIndex: ge,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: wo,
    handleColumnResize: yo
  } = Hi(re, Ne, so, je, En, ue, ze, rt, Ue, x), po = jt ? -1 : 0, Ve = re.length - 1, Vt = Jt(T), It = jn(T), bo = p + Xt + Ln + io, Co = de(yo), xo = de(S), vo = de(u), ko = de(D), Do = de(v), So = de(k), Ro = de(Eo), Io = de(Bn), To = de(Tt), Zt = de(ct), _n = de(({
    idx: g,
    rowIdx: w
  }) => {
    ct({
      rowIdx: fe + w - 1,
      idx: g
    });
  });
  tt(() => {
    if (!Vt || nn(T, Gt.current)) {
      Gt.current = T;
      return;
    }
    Gt.current = T, T.idx === -1 && (Dt.current.focus({
      preventScroll: !0
    }), Nt(Dt.current));
  }), tt(() => {
    St.current && (St.current = !1, qn());
  }), Bo(t, () => ({
    element: je.current,
    scrollToCell({
      idx: g,
      rowIdx: w
    }) {
      const P = g !== void 0 && g > ge && g < re.length ? g : void 0, L = w !== void 0 && Ze(w) ? w : void 0;
      (P !== void 0 || L !== void 0) && In({
        idx: P,
        rowIdx: L
      });
    },
    selectCell: ct
  }));
  const Qt = J((g) => {
    oo(g), Fn.current = g;
  }, []);
  function Eo(g) {
    if (!l) return;
    gt(a);
    const w = new Set(f);
    for (const P of r) {
      if ((h == null ? void 0 : h(P)) === !0) continue;
      const L = a(P);
      g.checked ? w.add(L) : w.delete(L);
    }
    l(w);
  }
  function Bn(g) {
    if (!l) return;
    gt(a);
    const {
      row: w,
      checked: P,
      isShiftClick: L
    } = g;
    if ((h == null ? void 0 : h(w)) === !0) return;
    const B = new Set(f), K = a(w), X = Hn.current, V = r.indexOf(w);
    if (Hn.current = V, P ? B.add(K) : B.delete(K), L && X !== -1 && X !== V && X < r.length) {
      const he = fi(V - X);
      for (let le = X + he; le !== V; le += he) {
        const De = r[le];
        (h == null ? void 0 : h(De)) !== !0 && (P ? B.add(a(De)) : B.delete(a(De)));
      }
    }
    l(B);
  }
  function Mo(g) {
    var V;
    const {
      idx: w,
      rowIdx: P,
      mode: L
    } = T;
    if (L === "EDIT") return;
    if (I && Ze(P)) {
      const he = r[P], le = ht(g);
      if (I({
        mode: "SELECT",
        row: he,
        column: re[w],
        rowIdx: P,
        selectCell: ct
      }, le), le.isGridDefaultPrevented()) return;
    }
    if (!(g.target instanceof Element)) return;
    const B = g.target.closest(".rdg-cell") !== null, K = jt && g.target === Dt.current;
    if (!B && !K) return;
    const {
      keyCode: X
    } = g;
    if (It && (H != null || E != null) && Ht(g)) {
      if (X === 67) {
        if (((V = window.getSelection()) == null ? void 0 : V.isCollapsed) === !1) return;
        Po();
        return;
      }
      if (X === 86) {
        No();
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
        Fo(g);
        break;
    }
  }
  function Oo(g) {
    const {
      scrollTop: w,
      scrollLeft: P
    } = g.currentTarget;
    Ft(() => {
      ke(w), ye(hi(P));
    }), W == null || W(g);
  }
  function Tt(g, w, P) {
    if (typeof s != "function" || P === r[w]) return;
    const L = [...r];
    L[w] = P, s(L, {
      indexes: [w],
      column: g
    });
  }
  function Un() {
    T.mode === "EDIT" && Tt(re[T.idx], T.rowIdx, T.row);
  }
  function Po() {
    const {
      idx: g,
      rowIdx: w
    } = T, P = r[w], L = re[g].key;
    Sn({
      row: P,
      columnKey: L
    }), E == null || E({
      sourceRow: P,
      sourceColumnKey: L
    });
  }
  function No() {
    if (!H || !s || Ge === null || !Et(T))
      return;
    const {
      idx: g,
      rowIdx: w
    } = T, P = re[g], L = r[w], B = H({
      sourceRow: Ge.row,
      sourceColumnKey: Ge.columnKey,
      targetRow: L,
      targetColumnKey: P.key
    });
    Tt(P, w, B);
  }
  function Fo(g) {
    if (!It) return;
    const w = r[T.rowIdx], {
      key: P,
      shiftKey: L
    } = g;
    if (qt && L && P === " ") {
      gt(a);
      const B = a(w);
      Bn({
        row: w,
        checked: !f.has(B),
        isShiftClick: !1
      }), g.preventDefault();
      return;
    }
    Et(T) && ti(g) && Xe(({
      idx: B,
      rowIdx: K
    }) => ({
      idx: B,
      rowIdx: K,
      mode: "EDIT",
      row: w,
      originalRow: w
    }));
  }
  function Gn(g) {
    return g >= po && g <= Ve;
  }
  function Ze(g) {
    return g >= 0 && g < r.length;
  }
  function Jt({
    idx: g,
    rowIdx: w
  }) {
    return w >= fe && w <= Ye && Gn(g);
  }
  function Ho({
    idx: g,
    rowIdx: w
  }) {
    return Ze(w) && g >= 0 && g <= Ve;
  }
  function jn({
    idx: g,
    rowIdx: w
  }) {
    return Ze(w) && Gn(g);
  }
  function Et(g) {
    return Ho(g) && ii({
      columns: re,
      rows: r,
      selectedPosition: g
    });
  }
  function ct(g, w) {
    if (!Jt(g)) return;
    Un();
    const P = r[g.rowIdx], L = nn(T, g);
    w && Et(g) ? Xe({
      ...g,
      mode: "EDIT",
      row: P,
      originalRow: P
    }) : L ? Nt(er(je.current)) : (St.current = !0, Xe({
      ...g,
      mode: "SELECT"
    })), N && !L && N({
      rowIdx: g.rowIdx,
      row: P,
      column: re[g.idx]
    });
  }
  function Lo(g, w, P) {
    const {
      idx: L,
      rowIdx: B
    } = T, K = Vt && L === -1;
    switch (g) {
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
          idx: L + (P ? -1 : 1),
          rowIdx: B
        };
      case "Home":
        return K ? {
          idx: L,
          rowIdx: fe
        } : {
          idx: 0,
          rowIdx: w ? fe : B
        };
      case "End":
        return K ? {
          idx: L,
          rowIdx: Ye
        } : {
          idx: Ve,
          rowIdx: w ? Ye : B
        };
      case "PageUp": {
        if (T.rowIdx === fe) return T;
        const X = Yn(B) + mo(B) - Rt;
        return {
          idx: L,
          rowIdx: X > 0 ? An(X) : 0
        };
      }
      case "PageDown": {
        if (T.rowIdx >= r.length) return T;
        const X = Yn(B) + Rt;
        return {
          idx: L,
          rowIdx: X < Xt ? An(X) : r.length - 1
        };
      }
      default:
        return T;
    }
  }
  function Kn(g) {
    const {
      key: w,
      shiftKey: P
    } = g;
    let L = "NONE";
    if (w === "Tab") {
      if (ci({
        shiftKey: P,
        maxColIdx: Ve,
        minRowIdx: fe,
        maxRowIdx: Ye,
        selectedPosition: T
      })) {
        Un();
        return;
      }
      L = "CHANGE_ROW";
    }
    g.preventDefault();
    const B = Ht(g), K = Lo(w, B, P);
    if (nn(T, K)) return;
    const X = si({
      moveUp: w === "ArrowUp",
      moveNext: w === zn || w === "Tab" && !P,
      columns: re,
      colSpanColumns: On,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: fe,
      mainHeaderRowIdx: kt,
      maxRowIdx: Ye,
      lastFrozenColumnIndex: ge,
      cellNavigationMode: L,
      currentPosition: T,
      nextPosition: K,
      isCellWithinBounds: Jt
    });
    ct(X);
  }
  function Wo(g) {
    if (ot === void 0) return;
    const {
      rowIdx: w
    } = T;
    return (w < ot ? w < g && g <= ot : w > g && g >= ot) ? T.idx : void 0;
  }
  function qn() {
    const g = er(je.current);
    if (g === null) return;
    Nt(g), (g.querySelector('[tabindex="0"]') ?? g).focus({
      preventScroll: !0
    });
  }
  function zo() {
    if (F == null || T.mode === "EDIT" || !jn(T))
      return;
    const {
      idx: g,
      rowIdx: w
    } = T, P = re[g];
    if (P.renderEditCell == null || P.editable === !1)
      return;
    const L = Tn(P);
    return /* @__PURE__ */ y(_i, {
      gridRowStart: qe + w + 1,
      rows: r,
      column: P,
      columnWidth: L,
      maxColIdx: Ve,
      isLastRow: w === Ye,
      selectedPosition: T,
      isCellEditable: Et,
      latestDraggedOverRowIdx: Fn,
      onRowsChange: s,
      onClick: qn,
      onFill: F,
      setDragging: ro,
      setDraggedOverRowIdx: Qt
    });
  }
  function $o(g) {
    if (T.rowIdx !== g || T.mode === "SELECT") return;
    const {
      idx: w,
      row: P
    } = T, L = re[w], B = me(L, ge, {
      type: "ROW",
      row: P
    }), K = (V) => {
      St.current = V, Xe(({
        idx: he,
        rowIdx: le
      }) => ({
        idx: he,
        rowIdx: le,
        mode: "SELECT"
      }));
    }, X = (V, he, le) => {
      he ? Ft(() => {
        Tt(L, T.rowIdx, V), K(le);
      }) : Xe((De) => ({
        ...De,
        row: V
      }));
    };
    return r[T.rowIdx] !== T.originalRow && K(!1), /* @__PURE__ */ y(Ui, {
      column: L,
      colSpan: B,
      row: P,
      rowIdx: g,
      onRowChange: X,
      closeEditor: K,
      onKeyDown: I,
      navigate: Kn
    }, L.key);
  }
  function lt(g) {
    const w = T.idx === -1 ? void 0 : re[T.idx];
    return w !== void 0 && T.rowIdx === g && !Ne.includes(w) ? T.idx > Pn ? [...Ne, w] : [...Ne.slice(0, ge + 1), w, ...Ne.slice(ge + 1)] : Ne;
  }
  function Yo() {
    const g = [], {
      idx: w,
      rowIdx: P
    } = T, L = It && P < at ? at - 1 : at, B = It && P > st ? st + 1 : st;
    for (let K = L; K <= B; K++) {
      const X = K === at - 1 || K === st + 1, V = X ? P : K;
      let he = Ne;
      const le = w === -1 ? void 0 : re[w];
      le !== void 0 && (X ? he = [le] : he = lt(V));
      const De = r[V], Ao = qe + V + 1;
      let en = V, tn = !1;
      typeof a == "function" && (en = a(De), tn = (f == null ? void 0 : f.has(en)) ?? !1), g.push(U(en, {
        "aria-rowindex": qe + V + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: V,
        row: De,
        viewportColumns: he,
        isRowSelectionDisabled: (h == null ? void 0 : h(De)) ?? !1,
        isRowSelected: tn,
        onCellClick: ko,
        onCellDoubleClick: Do,
        onCellContextMenu: So,
        rowClass: ee,
        gridRowStart: Ao,
        copiedCellIdx: Ge !== null && Ge.row === De ? re.findIndex((_o) => _o.key === Ge.columnKey) : void 0,
        selectedCellIdx: P === V ? w : void 0,
        draggedOverCellIdx: Wo(V),
        setDraggedOverRowIdx: Rn ? Qt : void 0,
        lastFrozenColumnIndex: ge,
        onRowChange: To,
        selectCell: Zt,
        selectedCellEditor: $o(V)
      }));
    }
    return g;
  }
  (T.idx > Ve || T.rowIdx > Ye) && (Xe({
    idx: -1,
    rowIdx: fe - 1,
    mode: "SELECT"
  }), Qt(void 0));
  let Mt = `repeat(${$e}, ${p}px)`;
  it > 0 && (Mt += ` repeat(${it}, ${z}px)`), r.length > 0 && (Mt += go), Ke > 0 && (Mt += ` repeat(${Ke}, ${z}px)`);
  const Xn = T.idx === -1 && T.rowIdx !== fe - 1;
  return /* @__PURE__ */ oe("div", {
    role: M,
    "aria-label": Me,
    "aria-labelledby": We,
    "aria-describedby": ae,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": re.length,
    "aria-rowcount": $n,
    className: Ee(Ma, Z, Rn && Pa),
    style: {
      ..._,
      scrollPaddingInlineStart: T.idx > ge || (Pe == null ? void 0 : Pe.idx) !== void 0 ? `${lo}px` : void 0,
      scrollPaddingBlock: Ze(T.rowIdx) || (Pe == null ? void 0 : Pe.rowIdx) !== void 0 ? `${Kt + it * z}px ${Ke * z}px` : void 0,
      gridTemplateColumns: wo,
      gridTemplateRows: Mt,
      "--rdg-header-row-height": `${p}px`,
      "--rdg-scroll-height": `${bo}px`,
      ...co
    },
    dir: ce,
    ref: je,
    onScroll: Oo,
    onKeyDown: Mo,
    "data-testid": Oe,
    children: [/* @__PURE__ */ oe(Di, {
      value: fo,
      children: [/* @__PURE__ */ y(Ii, {
        value: Ro,
        children: /* @__PURE__ */ oe(Ri, {
          value: ho,
          children: [Array.from({
            length: Ut
          }, (g, w) => /* @__PURE__ */ y(ma, {
            rowIdx: w + 1,
            level: -Ut + w,
            columns: lt(fe + w),
            selectedCellIdx: T.rowIdx === fe + w ? T.idx : void 0,
            selectCell: _n
          }, w)), /* @__PURE__ */ y(ha, {
            rowIdx: $e,
            columns: lt(kt),
            onColumnResize: Co,
            onColumnsReorder: xo,
            sortColumns: C,
            onSortColumnsChange: vo,
            lastFrozenColumnIndex: ge,
            selectedCellIdx: T.rowIdx === kt ? T.idx : void 0,
            selectCell: _n,
            shouldFocusGrid: !Vt,
            direction: ce
          })]
        })
      }), r.length === 0 && ne ? ne : /* @__PURE__ */ oe(wn, {
        children: [o == null ? void 0 : o.map((g, w) => {
          const P = $e + 1 + w, L = kt + 1 + w, B = T.rowIdx === L, K = Kt + z * w;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": P,
            rowIdx: L,
            gridRowStart: P,
            row: g,
            top: K,
            bottom: void 0,
            viewportColumns: lt(L),
            lastFrozenColumnIndex: ge,
            selectedCellIdx: B ? T.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, w);
        }), /* @__PURE__ */ y(Si, {
          value: Io,
          children: Yo()
        }), i == null ? void 0 : i.map((g, w) => {
          const P = qe + r.length + w + 1, L = r.length + w, B = T.rowIdx === L, K = Rt > Xt ? Mn - z * (i.length - w) : void 0, X = K === void 0 ? z * (i.length - 1 - w) : void 0;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": $n - Ke + w + 1,
            rowIdx: L,
            gridRowStart: P,
            row: g,
            top: K,
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
      ref: Dt,
      tabIndex: Xn ? 0 : -1,
      className: Ee(Na, Xn && [sa, ge !== -1 && ca], !Ze(T.rowIdx) && Fa),
      style: {
        gridRowStart: T.rowIdx + qe + 1
      }
    }), Pe !== null && /* @__PURE__ */ y(ka, {
      scrollToPosition: Pe,
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
const Yr = /* @__PURE__ */ yn(_a);
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
  toggleGroup: d,
  isRowSelectionDisabled: b,
  ...f
}) {
  const h = r[0].key === Be ? t.level + 1 : t.level;
  function l() {
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
      className: Ee(Cn, ja, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && _t),
      onClick: l,
      style: pn(s),
      ...f,
      children: r.map((u) => /* @__PURE__ */ y(Ua, {
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
  groupBy: d,
  rowGrouper: b,
  expandedGroupIds: f,
  onExpandedGroupIdsChange: h,
  ...l
}, C) {
  var ae, xe, Oe;
  const u = At(), m = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? $r, D = 1 + (((ae = l.topSummaryRows) == null ? void 0 : ae.length) ?? 0), v = l.direction === "rtl", k = v ? "ArrowRight" : "ArrowLeft", I = v ? "ArrowLeft" : "ArrowRight", N = de(Me), {
    columns: W,
    groupBy: x
  } = G(() => {
    const R = [...e].sort(({
      key: Y
    }, {
      key: p
    }) => Y === Be ? -1 : p === Be ? 1 : d.includes(Y) ? d.includes(p) ? d.indexOf(Y) - d.indexOf(p) : -1 : d.includes(p) ? 1 : 0), M = [];
    for (const [Y, p] of R.entries())
      d.includes(p.key) && (M.push(p.key), R[Y] = {
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
  }, [e, d]), [S, F] = G(() => {
    if (x.length === 0) return [void 0, t.length];
    const R = (M, [Y, ...p], z) => {
      let U = 0;
      const O = {};
      for (const [q, ne] of Object.entries(b(M, Y))) {
        const [se, ce] = p.length === 0 ? [ne, ne.length] : R(ne, p, z + U + 1);
        O[q] = {
          childRows: ne,
          childGroups: se,
          startRowIndex: z + U
        }, U += ce + 1;
      }
      return [O, U];
    };
    return R(t, x, 0);
  }, [x, b, t]), [E, H] = G(() => {
    const R = /* @__PURE__ */ new Set();
    if (!S) return [t, p];
    const M = [], Y = (z, U, O) => {
      if (Va(z)) {
        M.push(...z);
        return;
      }
      Object.keys(z).forEach((q, ne, se) => {
        const ce = U !== void 0 ? `${U}__${q}` : q, ve = f.has(ce), {
          childRows: ke,
          childGroups: Te,
          startRowIndex: ye
        } = z[q], ue = {
          id: ce,
          parentId: U,
          groupKey: q,
          isExpanded: ve,
          childRows: ke,
          level: O,
          posInSet: ne,
          startRowIndex: ye,
          setSize: se.length
        };
        M.push(ue), R.add(ue), ve && Y(Te, ce, O + 1);
      });
    };
    return Y(S, void 0, 0), [M, p];
    function p(z) {
      return R.has(z);
    }
  }, [f, S, t]), A = G(() => typeof n == "function" ? (R) => H(R) ? n({
    type: "GROUP",
    row: R
  }) : n({
    type: "ROW",
    row: R
  }) : n, [H, n]), $ = J((R) => {
    const M = E.indexOf(R);
    for (let Y = M - 1; Y >= 0; Y--) {
      const p = E[Y];
      if (H(p) && (!H(R) || R.parentId === p.id))
        return [p, Y];
    }
  }, [H, E]), Z = J((R) => {
    if (H(R))
      return R.id;
    if (typeof r == "function")
      return r(R);
    const M = $(R);
    if (M !== void 0) {
      const {
        startRowIndex: Y,
        childRows: p
      } = M[0], z = p.indexOf(R);
      return Y + z + 1;
    }
    return E.indexOf(R);
  }, [$, H, r, E]), _ = G(() => {
    if (a == null) return null;
    gt(r);
    const R = new Set(a);
    for (const M of E)
      H(M) && M.childRows.every((p) => a.has(r(p))) && R.add(M.id);
    return R;
  }, [H, r, a, E]);
  function ee(R) {
    if (!s) return;
    gt(r);
    const M = new Set(a);
    for (const Y of E) {
      const p = Z(Y);
      if (_ != null && _.has(p) && !R.has(p))
        if (H(Y))
          for (const z of Y.childRows)
            M.delete(r(z));
        else
          M.delete(p);
      else if (!(_ != null && _.has(p)) && R.has(p))
        if (H(Y))
          for (const z of Y.childRows)
            M.add(r(z));
        else
          M.add(p);
    }
    s(M);
  }
  function Ce(R, M) {
    if (o == null || o(R, M), M.isGridDefaultPrevented() || R.mode === "EDIT") return;
    const {
      column: Y,
      rowIdx: p,
      selectCell: z
    } = R, U = (Y == null ? void 0 : Y.idx) ?? -1, O = E[p];
    if (H(O)) {
      if (U === -1 && (M.key === k && O.isExpanded || M.key === I && !O.isExpanded) && (M.preventDefault(), M.preventGridDefault(), Me(O.id)), U === -1 && M.key === k && !O.isExpanded && O.level !== 0) {
        const q = $(O);
        q !== void 0 && (M.preventGridDefault(), z({
          idx: U,
          rowIdx: q[1]
        }));
      }
      Ht(M) && (M.keyCode === 67 || M.keyCode === 86) && M.preventGridDefault();
    }
  }
  function we(R, {
    indexes: M,
    column: Y
  }) {
    if (!i) return;
    const p = [...t], z = [];
    for (const U of M) {
      const O = t.indexOf(E[U]);
      p[O] = R[U], z.push(O);
    }
    i(p, {
      indexes: z,
      column: Y
    });
  }
  function Me(R) {
    const M = new Set(f);
    M.has(R) ? M.delete(R) : M.add(R), h(M);
  }
  function We(R, {
    row: M,
    rowClass: Y,
    onCellClick: p,
    onCellDoubleClick: z,
    onCellContextMenu: U,
    onRowChange: O,
    lastFrozenColumnIndex: q,
    copiedCellIdx: ne,
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
    let Te = ke["aria-rowindex"];
    const ye = $(M);
    if (ye !== void 0) {
      const {
        startRowIndex: ue,
        childRows: rt
      } = ye[0], ze = rt.indexOf(M);
      Te = ue + D + ze + 2;
    }
    return m(R, {
      ...ke,
      "aria-rowindex": Te,
      row: M,
      rowClass: Y,
      onCellClick: p,
      onCellDoubleClick: z,
      onCellContextMenu: U,
      onRowChange: O,
      lastFrozenColumnIndex: q,
      copiedCellIdx: ne,
      draggedOverCellIdx: se,
      setDraggedOverRowIdx: ce,
      selectedCellEditor: ve
    });
  }
  return /* @__PURE__ */ y(Yr, {
    ...l,
    role: "treegrid",
    "aria-rowcount": F + 1 + (((xe = l.topSummaryRows) == null ? void 0 : xe.length) ?? 0) + (((Oe = l.bottomSummaryRows) == null ? void 0 : Oe.length) ?? 0),
    ref: C,
    columns: W,
    rows: E,
    rowHeight: A,
    rowKeyGetter: Z,
    onRowsChange: we,
    selectedRows: _,
    onSelectedRowsChange: ee,
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
const Wl = /* @__PURE__ */ yn(Xa), Za = "t7vyx3i7-0-0-beta-47", Qa = `rdg-text-editor ${Za}`;
function Ja(e) {
  e == null || e.focus(), e == null || e.select();
}
function zl({
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
const Q = {
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
  "--rdg-color": Q.gray800,
  "--rdg-header-color": Q.gray700,
  "--rdg-border-color": Q.gray400,
  "--rdg-background-color": Q.forcewhite,
  "--rdg-header-background-color": Q.forcewhite,
  "--rdg-row-hover-background-color": Q.forcewhite,
  "--rdg-row-selected-hover-background-color": Q.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": Q.primary400,
  "--rdg-expanded-accent-color": Q.primary400,
  "--rdg-row-selected-color": Q.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": Q.primary500,
  "--rdg-scrollbar-track-background": Q.gray100,
  "--rdg--scrollbar-thumb-hover-background": Q.primary500,
  "--rdg--scrollbar-track-hover-background": Q.gray200
}, ts = Ie.div`
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
  const [r, o] = te(n ?? []), i = G(() => r.length === 0 ? t : [...t].sort((s, c) => {
    for (const d of r) {
      const b = e.find((l) => l.key === d.columnKey), h = ns(
        d.columnKey,
        b == null ? void 0 : b.type,
        b == null ? void 0 : b.sortComparator,
        b == null ? void 0 : b.getColumnValue
      )(s, c);
      if (h !== 0)
        return d.direction === "ASC" ? h : -h;
    }
    return 0;
  }), [t, r]), a = J((s) => {
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
}, mt = 40, os = 200, is = "rdg-row-expanded", as = "rdg-detail-row", Ar = "__rdgDetailParent", ss = (e) => ({ id: `rdg-detail:${e.id}`, [Ar]: e }), xn = (e) => e[Ar], Wt = (e) => xn(e) !== void 0, cs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, ss(r)] : [r]);
}, ls = Ie.button`
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
`, ds = () => /* @__PURE__ */ y("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ y("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), _r = ({
  row: e,
  expandable: t
}) => {
  const { expandedIds: n, labels: r } = t, o = n.includes(e.id);
  return /* @__PURE__ */ y(
    ls,
    {
      type: "button",
      $open: o,
      "aria-expanded": o,
      "aria-label": o ? r.collapse : r.expand,
      onClick: (i) => {
        i.stopPropagation(), Br(t, e.id);
      },
      children: /* @__PURE__ */ y(ds, {})
    }
  );
}, Br = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, us = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', Ur = (e, t, n, r = []) => Wt(e) || t === hs || t === Gr || r.includes(t) ? !1 : !(n instanceof Element && n.closest(us)), $l = (e, t, n) => Ur(e, t, n), tr = Ie.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, fs = Ie.span`
    display: inline-block;
    flex: 0 0 ${mt - 16}px;
`, hs = Be, Gr = "rdg-expander-column", gs = (e) => ({
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
}, ys = (e, t = []) => Wt(e) ? as : t.includes(e.id) ? is : "", jr = Ie(Ko)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${Q.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${Q.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${Q.gray800};
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
  const r = G(
    () => e.find((o) => o.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ y(
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
}, Cs = Ie(jo)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Pt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ oe(Cs, { children: [
  Lr(t),
  e
] }), xs = (e) => (t) => {
  const { filters: n, setFilters: r } = Re(vn), o = G(() => n[e.key], [n, e]), i = J(
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
    jr,
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
const As = /^(\d+)(th|st|nd|rd)?/i, _s = /\d+/i, Bs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Us = {
  any: [/^b/i, /^(a|c)/i]
}, Gs = {
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
    matchPatterns: Gs,
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
const Kr = 6048e5, nc = 864e5, nr = Symbol.for("constructDateFrom");
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
function rc(e, ...t) {
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
function qr(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = He(n, 0);
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
  const n = be(e, t == null ? void 0 : t.in), r = +zt(n) - +sc(n);
  return Math.round(r / Kr) + 1;
}
function Xr(e, t) {
  var b, f, h, l;
  const n = be(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = vt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (b = t == null ? void 0 : t.locale) == null ? void 0 : b.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((l = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = He((t == null ? void 0 : t.in) || e, 0);
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
  const n = be(e, t == null ? void 0 : t.in), r = +pt(n, t) - +lc(n, t);
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
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Fe.d(e, t);
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
  return !(!Zr(e) && typeof e != "number" || isNaN(+be(e)));
}
const Cc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, xc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vc = /^'([^]*?)'?$/, kc = /''/g, Dc = /[a-zA-Z]/;
function Sc(e, t, n) {
  var b, f, h, l, C, u, m, D;
  const r = vt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ec, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((l = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (C = n == null ? void 0 : n.locale) == null ? void 0 : C.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((D = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : D.weekStartsOn) ?? 0, s = be(e, n == null ? void 0 : n.in);
  if (!Qr(s))
    throw new RangeError("Invalid time value");
  let c = t.match(xc).map((v) => {
    const k = v[0];
    if (k === "p" || k === "P") {
      const I = fc[k];
      return I(v, o.formatLong);
    }
    return v;
  }).join("").match(Cc).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const k = v[0];
    if (k === "'")
      return { isToken: !1, value: Rc(v) };
    if (ir[k])
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
    const I = ir[k[0]];
    return I(s, k, o.localize, d);
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
function Jr(e, t, n, r, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, n), s.setUTCHours(r, o, i, a), s;
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
  return Jr(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function mn(e, t) {
  const n = Oc(e, t), r = Jr(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
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
const Ac = 60 * 1e3, _c = {
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
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = $t(Math.floor(r / 60), 2), i = $t(Math.floor(r % 60), 2);
  return n + o + t + i;
}
function gr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + $t(Math.abs(e) / 60, 2) : Je(e, t);
}
function Bc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + $t(i, 2);
}
function mr(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const Uc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, wr = 6e4, Gc = 2, ie = {
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
  const n = t.additionalDigits == null ? Gc : Number(t.additionalDigits);
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
      if (d = kn(r.timeZone || t.timeZone, new Date(s + c)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = mr(new Date(s + c)), d = mr(new Date(s + c + d));
    return new Date(s + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function jc(e) {
  const t = {};
  let n = ie.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ie.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = ie.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function Kc(e, t) {
  if (e) {
    const n = ie.YYY[t], r = ie.YYYYY[t];
    let o = ie.YYYY.exec(e) || r.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = ie.YY.exec(e) || n.exec(e), o) {
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
  let i = ie.MM.exec(e);
  if (i)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1, pr(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (i = ie.DDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return Qc(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ie.MMDD.exec(e), i) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return pr(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = ie.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, br(o) ? yr(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = ie.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return br(o, a) ? yr(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Xc(e) {
  let t, n, r = ie.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), un(t) ? t % 24 * dn : NaN;
  if (r = ie.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), un(t, n) ? t % 24 * dn + n * wr : NaN;
  if (r = ie.HHMMSS.exec(e), r) {
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
  const r = kn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
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
}, Cr = (e) => e.trim().toLowerCase(), Bt = pe.createContext({
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
  const [s, c] = pe.useState(0), [d, b] = pe.useState(!1), [f, h] = pe.useState([]), l = J(
    (v) => {
      localStorage.setItem(i, JSON.stringify(v)), c((k) => k + 1), h(v);
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
      l(Array.isArray(k) ? k : []);
    } else
      l(u);
  }, [i, u, l]);
  const m = J(
    (v) => {
      l(v), a == null || a(v);
    },
    [l, a]
  ), D = G(
    () => e.filter((v) => !(n != null && n.includes(v.key))),
    [e, n]
  );
  return /* @__PURE__ */ y(
    Bt.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        chooserOpen: d,
        setChooserOpen: b,
        columns: D,
        hiddenColumn: f,
        setHiddenColumn: m,
        enabled: o
      },
      children: t
    }
  );
}, Dn = Ie(Xo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Q.primary500};
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
  const { enabled: c, hiddenColumn: d } = Re(Bt), b = J((f) => {
    const h = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === et.DATE)
        return ({ row: u }) => {
          var m, D;
          return rl(
            u[f.key],
            ((m = f.dateOptions) == null ? void 0 : m.formatDate) ?? no.DATE_WITH_TIME,
            (D = f.dateOptions) == null ? void 0 : D.timeZone
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
  return G(() => {
    const f = [];
    if (t && !n && f.push(gs(t)), n) {
      const h = (r ?? []).map((m) => m.id), l = h.length > 0 && h.every((m) => o == null ? void 0 : o.includes(m)), C = (m) => {
        const D = (o ?? []).filter((v) => !h.includes(v));
        return m ? [...D, ...h] : D;
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
        renderHeaderCell: () => /* @__PURE__ */ oe(tr, { children: [
          t && /* @__PURE__ */ y(fs, { "aria-hidden": !0 }),
          a ? a({
            checked: l,
            "aria-label": s,
            onChange: (m) => i == null ? void 0 : i(C(m))
          }) : /* @__PURE__ */ y(
            Dn,
            {
              checked: l,
              slotProps: { input: { "aria-label": s } },
              onChange: (m, D) => i == null ? void 0 : i(C(D))
            }
          )
        ] }),
        renderCell: t ? (m) => {
          var D;
          return /* @__PURE__ */ oe(tr, { children: [
            /* @__PURE__ */ y(_r, { row: m.row, expandable: t }),
            (D = dt.renderCell) == null ? void 0 : D.call(dt, m)
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
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, d = e.size, b = d === void 0 ? 15 : d, f = e.margin, h = f === void 0 ? 2 : f, l = dl(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), C = Yt({ display: "inherit" }, c), u = function(m) {
    return {
      backgroundColor: o,
      width: gn(b),
      height: gn(b),
      margin: gn(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(ul, " ").concat(0.75 / a, "s ").concat(m * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
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
  const { filters: r } = Re(vn);
  return G(() => n ? [...t].filter(
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
    const a = J(
      (c, d) => {
        t(d);
      },
      []
    ), s = J(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ y(ml, { children: /* @__PURE__ */ y(
      Vo,
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
  const [t, n] = te(0), [r, o] = te(e), i = J(() => {
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
}, xr = 50, bl = Ie.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${Q.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, Cl = pe.memo(
  ({ checked: e, onChange: t, "aria-label": n }) => {
    const r = J(
      (o, i) => {
        t(i, o.nativeEvent.shiftKey);
      },
      [t]
    );
    return /* @__PURE__ */ y(
      Dn,
      {
        checked: e,
        slotProps: { input: { "aria-label": n } },
        onChange: r
      }
    );
  }
), xl = (e) => /* @__PURE__ */ y(Cl, { ...e }), vl = "Select all rows", kl = ({
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
  rowGestures: m,
  rowHeight: D,
  rowClass: v,
  onCellClick: k,
  ...I
}) => {
  var U;
  const { gridKey: N } = Re(Bt), { pageSize: W, currentPage: x, setCurrentPage: S, setPageSize: F } = pl(
    l == null ? void 0 : l.defaultPageSize
  ), E = (C == null ? void 0 : C.renderCheckbox) ?? xl, H = al({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c,
    renderCheckbox: E,
    selectAllLabel: d
  }), A = G(() => H.map((O) => O.key).join("|"), [H]), $ = G(
    () => H.some((O) => O.filterEnabled),
    [H]
  ), Z = G(
    () => (l == null ? void 0 : l.enabled) && !l.remotePagination,
    [l]
  ), _ = G(() => !h, [h]), ee = gl({
    columns: H,
    rows: n,
    enabled: _
  }), Ce = G(() => !i, [i]), {
    sortedRows: we,
    sortColumns: Me,
    setSortedColumns: We
  } = rs({
    columns: H,
    rows: ee,
    defaultSortColumns: a
  }), ae = G(() => {
    if (!Z)
      return x;
    const O = Math.max(0, Math.ceil(ee.length / W) - 1);
    return Math.min(x, O);
  }, [Z, x, W, ee.length]);
  _e(() => {
    ae !== x && S(ae);
  }, [ae, x, S]);
  const xe = G(() => Z ? we.slice(ae * W, (ae + 1) * W) : we, [we, Z, ae, W]), Oe = G(
    () => u ? cs(xe, u.expandedIds) : xe,
    [u, xe]
  ), R = G(
    () => u ? ms(H, u.renderDetail) : H,
    [u, H]
  ), M = J(
    (O, q) => {
      const ne = () => {
        const se = ys(O, u == null ? void 0 : u.expandedIds);
        return se || (q === 0 ? "first-row" : q === n.length - 1 ? "last-row" : "");
      };
      return [v == null ? void 0 : v(O, q), ne()].filter(Boolean).join(" ");
    },
    [n, u == null ? void 0 : u.expandedIds, v]
  ), Y = J(
    (O) => {
      m != null && m.onClick ? m.onClick(O) : u && Br(u, O.id);
    },
    [m, u]
  ), p = J(
    (O, q) => {
      k == null || k(O, q), !q.isGridDefaultPrevented() && (!u && !(m != null && m.onClick) || Ur(
        O.row,
        O.column.key,
        q.target,
        m == null ? void 0 : m.excludedColumns
      ) && Y(O.row));
    },
    [k, u, m, Y]
  ), z = !(l != null && l.remotePagination);
  return _e(() => {
    if (!z)
      return;
    const O = s == null ? void 0 : s.filter(
      (q) => n.some((ne) => ne.id === q)
    );
    (O == null ? void 0 : O.length) != (s == null ? void 0 : s.length) && (c == null || c(O ?? []));
  }, [n, s, z]), /* @__PURE__ */ oe(ts, { $pagination: !!(l != null && l.enabled), children: [
    /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(
      Yr,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: (O) => {
          c == null || c(Array.from(O));
        },
        rowKeyGetter: (O) => O.id,
        rows: Oe,
        onSortColumnsChange: Ce ? We : i,
        sortColumns: Ce ? Me : o,
        columns: R,
        rowClass: M,
        headerRowHeight: $ ? 70 : void 0,
        onCellClick: p,
        enableVirtualization: R.some((O) => O.frozenRight) ? !1 : void 0,
        ...I,
        rowHeight: u ? ws(
          D,
          xr,
          u.detailHeight ?? os
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
      `${N}:${A}`
    ) }),
    l != null && l.enabled ? /* @__PURE__ */ y(
      wl,
      {
        ...(l == null ? void 0 : l.remotePagination) ?? {
          currentPage: ae,
          setCurrentPage: S,
          pageSize: W,
          setPageSize: F,
          totalCount: ee.length
        },
        labels: l.labels ?? ((U = l.remotePagination) == null ? void 0 : U.labels)
      }
    ) : null,
    t ? /* @__PURE__ */ oe(bl, { children: [
      /* @__PURE__ */ y("div", {}),
      /* @__PURE__ */ y(fl, { color: Q.primary500 })
    ] }) : null
  ] });
}, Yl = ({
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
    children: /* @__PURE__ */ y(kl, { ...c, columns: n, filters: e, setFilters: t })
  }
) }), Dl = Ie(Qo)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, Al = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r, chooserOpen: o, setChooserOpen: i } = Re(Bt), a = pe.useRef(null), [s, c] = pe.useState(null);
  pe.useEffect(() => {
    c(o ? a.current : null);
  }, [o]);
  const d = J(() => {
    i(!0);
  }, [i]), b = J(() => {
    i(!1);
  }, [i]), f = J(
    (h) => () => {
      const l = n.indexOf(h);
      r(
        l === -1 ? [...n, h] : n.filter((C) => C !== h)
      );
    },
    [n]
  );
  return /* @__PURE__ */ oe("div", { ref: a, children: [
    /* @__PURE__ */ y(e, { onClick: d }),
    /* @__PURE__ */ y(
      Zo,
      {
        id: "column-visibility-menu",
        anchorEl: s,
        open: o && !!s,
        onClose: b,
        children: t.map((h) => /* @__PURE__ */ oe(Dl, { onClick: f(h.key), children: [
          /* @__PURE__ */ y(Dn, { checked: !n.includes(h.key) }),
          h.name
        ] }, h.key))
      }
    )
  ] });
};
export {
  et as ColumnType,
  no as DATE_FORMAT,
  yl as DEFAULT_PAGE_SIZES,
  Yl as DataGrid,
  Dn as DataGridCheckbox,
  Di as DataGridDefaultRenderersProvider,
  Gr as EXPANDER_COLUMN_KEY,
  _r as ExpanderToggle,
  yt as FilterType,
  Ll as Row,
  hs as SELECTION_COLUMN_KEY,
  Be as SELECT_COLUMN_KEY,
  bn as SelectCellFormatter,
  dt as SelectColumn,
  vi as ToggleGroup,
  Wl as TreeDataGrid,
  Al as VisibilityColumnChooser,
  Ur as clickBelongsToRow,
  $l as clickExpandsRow,
  rl as convertDate,
  es as defaultTheme,
  ws as detailAwareRowHeight,
  ys as detailRowClass,
  Cr as getStringToCompare,
  Wt as isDetailRow,
  wi as renderCheckbox,
  Lr as renderHeaderCell,
  Ia as renderSortIcon,
  Ta as renderSortPriority,
  xi as renderToggleGroup,
  ki as renderValue,
  Q as taktikTheme,
  zl as textEditor,
  Ti as useHeaderRowSelection,
  pl as usePagination,
  Pr as useRowSelection,
  ms as withDetailRendering,
  cs as withDetailRows
};
