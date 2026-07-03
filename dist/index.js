var Vf = Object.defineProperty;
var Hf = (e, t, n) => t in e ? Vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Gr = (e, t, n) => Hf(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as P, jsxs as Se, Fragment as cs } from "react/jsx-runtime";
import * as T from "react";
import wt, { createContext as Eo, memo as Qn, forwardRef as Pi, useContext as cn, useMemo as Je, useCallback as St, useRef as Tn, useEffect as Wr, useState as vt, useLayoutEffect as Uf, useImperativeHandle as Yf, useId as qf, isValidElement as Zo, cloneElement as Qo, Children as Gf, createElement as Kf } from "react";
import * as Xf from "react-dom";
import Vo, { flushSync as ai } from "react-dom";
function Zc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Zc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function de() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Zc(e)) && (r && (r += " "), r += t);
  return r;
}
function tn(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function Zf(e) {
  e.stopPropagation();
}
function Jo(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function ao(e) {
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
const Qf = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function si(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function Jf(e) {
  return si(e) && e.keyCode !== 86 ? !1 : !Qf.has(e.key);
}
function ep({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const tp = "mlln6zg7-0-0-beta-47";
function np(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: i
  }) => /* @__PURE__ */ P("div", {
    className: tp,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: i
    },
    "data-measuring-cell-key": t
  }, t));
}
function rp({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], i = n[e.rowIdx];
  return Qc(r, i);
}
function Qc(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function op({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: n,
  rowIdx: r,
  mainHeaderRowIdx: i,
  lastFrozenColumnIndex: a,
  column: s
}) {
  const l = (t == null ? void 0 : t.length) ?? 0;
  if (r === i)
    return tn(s, a, {
      type: "HEADER"
    });
  if (t && r > i && r <= l + i)
    return tn(s, a, {
      type: "SUMMARY",
      row: t[r + l]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return tn(s, a, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return tn(s, a, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function ip({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: n,
  columns: r,
  colSpanColumns: i,
  rows: a,
  topSummaryRows: s,
  bottomSummaryRows: l,
  minRowIdx: c,
  mainHeaderRowIdx: d,
  maxRowIdx: f,
  currentPosition: {
    idx: p,
    rowIdx: g
  },
  nextPosition: h,
  lastFrozenColumnIndex: b,
  isCellWithinBounds: u
}) {
  let {
    idx: y,
    rowIdx: C
  } = h;
  const S = r.length, v = (R) => {
    for (const E of i) {
      const k = E.idx;
      if (k > y) break;
      const I = op({
        rows: a,
        topSummaryRows: s,
        bottomSummaryRows: l,
        rowIdx: C,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: b,
        column: E
      });
      if (I && y > k && y < I + k) {
        y = k + (R ? I : 0);
        break;
      }
    }
  }, w = (R) => R.level + d, x = () => {
    if (t) {
      let E = r[y].parent;
      for (; E !== void 0; ) {
        const k = w(E);
        if (C === k) {
          y = E.idx + E.colSpan;
          break;
        }
        E = E.parent;
      }
    } else if (e) {
      let E = r[y].parent, k = !1;
      for (; E !== void 0; ) {
        const I = w(E);
        if (C >= I) {
          y = E.idx, C = I, k = !0;
          break;
        }
        E = E.parent;
      }
      k || (y = p, C = g);
    }
  };
  if (u(h) && (v(t), C < d && x()), n === "CHANGE_ROW" && (y === S ? C === f || (y = 0, C += 1) : y === -1 && (C === c || (C -= 1, y = S - 1), v(!1))), C < d) {
    let E = r[y].parent;
    const k = C;
    for (C = d; E !== void 0; ) {
      const I = w(E);
      I >= k && (C = I, y = E.idx), E = E.parent;
    }
  }
  return {
    idx: y,
    rowIdx: C
  };
}
function ap({
  maxColIdx: e,
  minRowIdx: t,
  maxRowIdx: n,
  selectedPosition: {
    rowIdx: r,
    idx: i
  },
  shiftKey: a
}) {
  return a ? i === 0 && r === t : i === e && r === n;
}
const sp = "cj343x07-0-0-beta-47", Jc = `rdg-cell ${sp}`, lp = "csofj7r7-0-0-beta-47", cp = `rdg-cell-frozen ${lp}`;
function us(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function eu(e, t, n) {
  const r = t + 1, i = `calc(${n - 1} * var(--rdg-header-row-height))`;
  return e.parent === void 0 ? {
    insetBlockStart: 0,
    gridRowStart: 1,
    gridRowEnd: r,
    paddingBlockStart: i
  } : {
    insetBlockStart: `calc(${t - n} * var(--rdg-header-row-height))`,
    gridRowStart: r - n,
    gridRowEnd: r,
    paddingBlockStart: i
  };
}
function Vr(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function Oo(e, ...t) {
  return de(Jc, ...t, e.frozen && cp);
}
const {
  min: ho,
  max: li,
  floor: nl,
  sign: up,
  abs: dp
} = Math;
function so(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function tu(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = li(e, t), typeof n == "number" && n >= t ? ho(e, n) : e;
}
function nu(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const fp = "c1bn88vv7-0-0-beta-47", pp = `rdg-checkbox-input ${fp}`;
function mp({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(i) {
    e(i.target.checked, i.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ P("input", {
    ref: (i) => {
      i && (i.indeterminate = t === !0);
    },
    type: "checkbox",
    className: pp,
    onChange: r,
    ...n
  });
}
const hp = "g1s9ylgp7-0-0-beta-47", gp = `rdg-group-cell-content ${hp}`, bp = "cz54e4y7-0-0-beta-47", yp = `rdg-caret ${bp}`;
function vp(e) {
  return /* @__PURE__ */ P(wp, {
    ...e
  });
}
function wp({
  groupKey: e,
  isExpanded: t,
  tabIndex: n,
  toggleGroup: r
}) {
  function i({
    key: s
  }) {
    s === "Enter" && r();
  }
  return /* @__PURE__ */ Se("span", {
    className: gp,
    tabIndex: n,
    onKeyDown: i,
    children: [e, /* @__PURE__ */ P("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: yp,
      "aria-hidden": !0,
      children: /* @__PURE__ */ P("path", {
        d: t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7"
      })
    })]
  });
}
function xp(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const ru = /* @__PURE__ */ Eo(void 0), Cp = ru.Provider;
function Ii() {
  return cn(ru);
}
function ds({
  value: e,
  tabIndex: t,
  indeterminate: n,
  disabled: r,
  onChange: i,
  "aria-label": a,
  "aria-labelledby": s
}) {
  const l = Ii().renderCheckbox;
  return l({
    "aria-label": a,
    "aria-labelledby": s,
    tabIndex: t,
    indeterminate: n,
    disabled: r,
    checked: e,
    onChange: i
  });
}
const ou = /* @__PURE__ */ Eo(void 0), iu = ou.Provider, au = /* @__PURE__ */ Eo(void 0), Tp = au.Provider;
function su() {
  const e = cn(ou), t = cn(au);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const lu = /* @__PURE__ */ Eo(void 0), Sp = lu.Provider, cu = /* @__PURE__ */ Eo(void 0), Ep = cu.Provider;
function Op() {
  const e = cn(lu), t = cn(cu);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Nr = "rdg-select-column";
function Rp(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Op();
  return /* @__PURE__ */ P(ds, {
    "aria-label": "Select All",
    tabIndex: e.tabIndex,
    indeterminate: t,
    value: n,
    onChange: (i) => {
      r({
        checked: t ? !1 : i
      });
    }
  });
}
function Pp(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = su();
  return /* @__PURE__ */ P(ds, {
    "aria-label": "Select",
    tabIndex: e.tabIndex,
    disabled: t,
    value: n,
    onChange: (i, a) => {
      r({
        row: e.row,
        checked: i,
        isShiftClick: a
      });
    }
  });
}
function Ip(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = su();
  return /* @__PURE__ */ P(ds, {
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
const kp = {
  key: Nr,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ P(Rp, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ P(Pp, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ P(Ip, {
      ...e
    });
  }
}, $p = "auto", Mp = 50;
function Np({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: i,
  enableVirtualization: a
}) {
  const s = (t == null ? void 0 : t.width) ?? $p, l = (t == null ? void 0 : t.minWidth) ?? Mp, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? xp, f = (t == null ? void 0 : t.sortable) ?? !1, p = (t == null ? void 0 : t.resizable) ?? !1, g = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: h,
    colSpanColumns: b,
    lastFrozenColumnIndex: u,
    headerRowsCount: y
  } = Je(() => {
    let E = -1, k = 1;
    const I = [];
    m(e, 1);
    function m($, N, j) {
      for (const M of $) {
        if ("children" in M) {
          const ee = {
            name: M.name,
            parent: j,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: M.headerCellClass
          };
          m(M.children, N + 1, ee);
          continue;
        }
        const L = M.frozen ?? !1, H = {
          ...M,
          parent: j,
          idx: 0,
          level: 0,
          frozen: L,
          width: M.width ?? s,
          minWidth: M.minWidth ?? l,
          maxWidth: M.maxWidth ?? c,
          sortable: M.sortable ?? f,
          resizable: M.resizable ?? p,
          draggable: M.draggable ?? g,
          renderCell: M.renderCell ?? d
        };
        I.push(H), L && E++, N > k && (k = N);
      }
    }
    I.sort(({
      key: $,
      frozen: N
    }, {
      key: j,
      frozen: M
    }) => $ === Nr ? -1 : j === Nr ? 1 : N ? M ? 0 : -1 : M ? 1 : 0);
    const O = [];
    return I.forEach(($, N) => {
      $.idx = N, uu($, N, 0), $.colSpan != null && O.push($);
    }), {
      columns: I,
      colSpanColumns: O,
      lastFrozenColumnIndex: E,
      headerRowsCount: k
    };
  }, [e, s, l, c, d, p, f, g]), {
    templateColumns: C,
    layoutCssVars: S,
    totalFrozenColumnWidth: v,
    columnMetrics: w
  } = Je(() => {
    const E = /* @__PURE__ */ new Map();
    let k = 0, I = 0;
    const m = [];
    for (const $ of h) {
      let N = n($);
      typeof N == "number" ? N = tu(N, $) : N = $.minWidth, m.push(`${N}px`), E.set($, {
        width: N,
        left: k
      }), k += N;
    }
    if (u !== -1) {
      const $ = E.get(h[u]);
      I = $.left + $.width;
    }
    const O = {};
    for (let $ = 0; $ <= u; $++) {
      const N = h[$];
      O[`--rdg-frozen-left-${N.idx}`] = `${E.get(N).left}px`;
    }
    return {
      templateColumns: m,
      layoutCssVars: O,
      totalFrozenColumnWidth: I,
      columnMetrics: E
    };
  }, [n, h, u]), [x, R] = Je(() => {
    if (!a)
      return [0, h.length - 1];
    const E = i + v, k = i + r, I = h.length - 1, m = ho(u + 1, I);
    if (E >= k)
      return [m, m];
    let O = m;
    for (; O < I; ) {
      const {
        left: M,
        width: L
      } = w.get(h[O]);
      if (M + L > E)
        break;
      O++;
    }
    let $ = O;
    for (; $ < I; ) {
      const {
        left: M,
        width: L
      } = w.get(h[$]);
      if (M + L >= k)
        break;
      $++;
    }
    const N = li(m, O - 1), j = ho(I, $ + 1);
    return [N, j];
  }, [w, h, u, i, v, r, a]);
  return {
    columns: h,
    colSpanColumns: b,
    colOverscanStartIdx: x,
    colOverscanEndIdx: R,
    templateColumns: C,
    layoutCssVars: S,
    headerRowsCount: y,
    lastFrozenColumnIndex: u,
    totalFrozenColumnWidth: v
  };
}
function uu(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, uu(r, t, n - 1);
  }
}
const Dr = typeof window > "u" ? Wr : Uf;
function Dp(e, t, n, r, i, a, s, l, c, d) {
  const f = Tn(i), p = e.length === t.length, g = p && i !== f.current, h = [...n], b = [];
  for (const {
    key: S,
    idx: v,
    width: w
  } of t)
    typeof w == "string" && (g || !s.has(S)) && !a.has(S) && (h[v] = w, b.push(S));
  const u = h.join(" ");
  Dr(() => {
    f.current = i, y(b);
  });
  function y(S) {
    S.length !== 0 && c((v) => {
      const w = new Map(v);
      let x = !1;
      for (const R of S) {
        const E = rl(r, R);
        x || (x = E !== v.get(R)), E === void 0 ? w.delete(R) : w.set(R, E);
      }
      return x ? w : v;
    });
  }
  function C(S, v) {
    const {
      key: w
    } = S, x = [...n], R = [];
    for (const {
      key: k,
      idx: I,
      width: m
    } of t)
      if (w === k) {
        const O = typeof v == "number" ? `${v}px` : v;
        x[I] = O;
      } else p && typeof m == "string" && !a.has(k) && (x[I] = m, R.push(k));
    r.current.style.gridTemplateColumns = x.join(" ");
    const E = typeof v == "number" ? v : rl(r, w);
    ai(() => {
      l((k) => {
        const I = new Map(k);
        return I.set(w, E), I;
      }), y(R);
    }), d == null || d(S.idx, E);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: C
  };
}
function rl(e, t) {
  var i;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (i = e.current) == null ? void 0 : i.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Ap() {
  const e = Tn(null), [t, n] = vt(1), [r, i] = vt(1), [a, s] = vt(0);
  return Dr(() => {
    const {
      ResizeObserver: l
    } = window;
    if (l == null) return;
    const {
      clientWidth: c,
      clientHeight: d,
      offsetWidth: f,
      offsetHeight: p
    } = e.current, {
      width: g,
      height: h
    } = e.current.getBoundingClientRect(), b = p - d, u = g - f + c, y = h - b;
    n(u), i(y), s(b);
    const C = new l((S) => {
      const v = S[0].contentBoxSize[0], {
        clientHeight: w,
        offsetHeight: x
      } = e.current;
      ai(() => {
        n(v.inlineSize), i(v.blockSize), s(x - w);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, r, a];
}
function At(e) {
  const t = Tn(e);
  Wr(() => {
    t.current = e;
  });
  const n = St((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Ro(e) {
  const [t, n] = vt(!1);
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
function Lp({
  columns: e,
  colSpanColumns: t,
  rows: n,
  topSummaryRows: r,
  bottomSummaryRows: i,
  colOverscanStartIdx: a,
  colOverscanEndIdx: s,
  lastFrozenColumnIndex: l,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: d
}) {
  const f = Je(() => {
    if (a === 0) return 0;
    let p = a;
    const g = (h, b) => b !== void 0 && h + b > a ? (p = h, !0) : !1;
    for (const h of t) {
      const b = h.idx;
      if (b >= p || g(b, tn(h, l, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const y = n[u];
        if (g(b, tn(h, l, {
          type: "ROW",
          row: y
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (g(b, tn(h, l, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (i != null) {
        for (const u of i)
          if (g(b, tn(h, l, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
    }
    return p;
  }, [c, d, n, r, i, a, l, t]);
  return Je(() => {
    const p = [];
    for (let g = 0; g <= s; g++) {
      const h = e[g];
      g < f && !h.frozen || p.push(h);
    }
    return p;
  }, [f, s, e]);
}
function Fp({
  rows: e,
  rowHeight: t,
  clientHeight: n,
  scrollTop: r,
  enableVirtualization: i
}) {
  const {
    totalRowHeight: a,
    gridTemplateRows: s,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: d
  } = Je(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (y) => y * t,
        getRowHeight: () => t,
        findRowIdx: (y) => nl(y / t)
      };
    let g = 0, h = " ";
    const b = e.map((y) => {
      const C = t(y), S = {
        top: g,
        height: C
      };
      return h += `${C}px `, g += C, S;
    }), u = (y) => li(0, ho(e.length - 1, y));
    return {
      totalRowHeight: g,
      gridTemplateRows: h,
      getRowTop: (y) => b[u(y)].top,
      getRowHeight: (y) => b[u(y)].height,
      findRowIdx(y) {
        let C = 0, S = b.length - 1;
        for (; C <= S; ) {
          const v = C + nl((S - C) / 2), w = b[v].top;
          if (w === y) return v;
          if (w < y ? C = v + 1 : w > y && (S = v - 1), C > S) return S;
        }
        return 0;
      }
    };
  }, [t, e]);
  let f = 0, p = e.length - 1;
  if (i) {
    const h = d(r), b = d(r + n);
    f = li(0, h - 4), p = ho(e.length - 1, b + 4);
  }
  return {
    rowOverscanStartIdx: f,
    rowOverscanEndIdx: p,
    totalRowHeight: a,
    gridTemplateRows: s,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: d
  };
}
const Bp = "c1w9bbhr7-0-0-beta-47", _p = "c1creorc7-0-0-beta-47", jp = `rdg-cell-drag-handle ${Bp}`;
function zp({
  gridRowStart: e,
  rows: t,
  column: n,
  columnWidth: r,
  maxColIdx: i,
  isLastRow: a,
  selectedPosition: s,
  latestDraggedOverRowIdx: l,
  isCellEditable: c,
  onRowsChange: d,
  onFill: f,
  onClick: p,
  setDragging: g,
  setDraggedOverRowIdx: h
}) {
  const {
    idx: b,
    rowIdx: u
  } = s;
  function y(x) {
    if (x.preventDefault(), x.buttons !== 1) return;
    g(!0), window.addEventListener("mouseover", R), window.addEventListener("mouseup", E);
    function R(k) {
      k.buttons !== 1 && E();
    }
    function E() {
      window.removeEventListener("mouseover", R), window.removeEventListener("mouseup", E), g(!1), C();
    }
  }
  function C() {
    const x = l.current;
    if (x === void 0) return;
    const R = u < x ? u + 1 : x, E = u < x ? x + 1 : u;
    v(R, E), h(void 0);
  }
  function S(x) {
    x.stopPropagation(), v(u + 1, t.length);
  }
  function v(x, R) {
    const E = t[u], k = [...t], I = [];
    for (let m = x; m < R; m++)
      if (c({
        rowIdx: m,
        idx: b
      })) {
        const O = f({
          columnKey: n.key,
          sourceRow: E,
          targetRow: t[m]
        });
        O !== t[m] && (k[m] = O, I.push(m));
      }
    I.length > 0 && (d == null || d(k, {
      indexes: I,
      column: n
    }));
  }
  function w() {
    var m;
    const x = ((m = n.colSpan) == null ? void 0 : m.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: R,
      ...E
    } = Vr(n, x), k = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", I = n.idx + x - 1 === i;
    return {
      ...E,
      gridRowStart: e,
      marginInlineEnd: I ? void 0 : k,
      marginBlockEnd: a ? void 0 : k,
      insetInlineStart: R ? `calc(${R} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ P("div", {
    style: w(),
    className: de(jp, n.frozen && _p),
    onClick: p,
    onMouseDown: y,
    onDoubleClick: S
  });
}
const Wp = "cis5rrm7-0-0-beta-47";
function Vp({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: i,
  closeEditor: a,
  onKeyDown: s,
  navigate: l
}) {
  var C, S, v;
  const c = Tn(void 0), d = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, f = At(() => {
    h(!0, !1);
  });
  Wr(() => {
    if (!d) return;
    function w() {
      c.current = requestAnimationFrame(f);
    }
    return addEventListener("mousedown", w, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", w, {
        capture: !0
      }), p();
    };
  }, [d, f]);
  function p() {
    cancelAnimationFrame(c.current);
  }
  function g(w) {
    if (s) {
      const x = ao(w);
      if (s({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          l(w);
        },
        onClose: h
      }, x), x.isGridDefaultPrevented()) return;
    }
    w.key === "Escape" ? h() : w.key === "Enter" ? h(!0) : ep(w) && l(w);
  }
  function h(w = !1, x = !0) {
    w ? i(n, !0, x) : a(x);
  }
  function b(w, x = !1) {
    i(w, x, x);
  }
  const {
    cellClass: u
  } = e, y = Oo(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((S = e.editorOptions) != null && S.displayCellContent) && Wp);
  return /* @__PURE__ */ P("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: y,
    style: Vr(e, t),
    onKeyDown: g,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ Se(cs, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: b,
        onClose: h
      }), ((v = e.editorOptions) == null ? void 0 : v.displayCellContent) && e.renderCell({
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
function Hp({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: i,
    onFocus: a
  } = Ro(n), {
    colSpan: s
  } = e, l = nu(e, t), c = e.idx + 1;
  function d() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ P("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": s,
    "aria-rowspan": l,
    "aria-selected": n,
    tabIndex: i,
    className: de(Jc, e.headerCellClass),
    style: {
      ...eu(e, t, l),
      gridColumnStart: c,
      gridColumnEnd: c + s
    },
    onFocus: a,
    onClick: d,
    children: e.name
  });
}
const Up = "h44jtk67-0-0-beta-47", Yp = "hcgkhxz7-0-0-beta-47", qp = `rdg-header-sort-name ${Yp}`;
function du({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ P(Gp, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Gp({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = Ii().renderSortStatus;
  return /* @__PURE__ */ Se("span", {
    className: Up,
    children: [/* @__PURE__ */ P("span", {
      className: qp,
      children: n
    }), /* @__PURE__ */ P("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Kp = "c6l2wv17-0-0-beta-47", Xp = "c1kqdw7y7-0-0-beta-47", Zp = `rdg-cell-resizable ${Xp}`, Qp = "r1y6ywlx7-0-0-beta-47", Jp = "rdg-cell-draggable", em = "c1bezg5o7-0-0-beta-47", tm = `rdg-cell-dragging ${em}`, nm = "c1vc96037-0-0-beta-47", rm = `rdg-cell-drag-over ${nm}`;
function om({
  column: e,
  colSpan: t,
  rowIdx: n,
  isCellSelected: r,
  onColumnResize: i,
  onColumnsReorder: a,
  sortColumns: s,
  onSortColumnsChange: l,
  selectCell: c,
  shouldFocusGrid: d,
  direction: f,
  dragDropKey: p
}) {
  const [g, h] = vt(!1), [b, u] = vt(!1), y = f === "rtl", C = nu(e, n), {
    tabIndex: S,
    childTabIndex: v,
    onFocus: w
  } = Ro(r), x = s == null ? void 0 : s.findIndex((A) => A.columnKey === e.key), R = x !== void 0 && x > -1 ? s[x] : void 0, E = R == null ? void 0 : R.direction, k = R !== void 0 && s.length > 1 ? x + 1 : void 0, I = E && !k ? E === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: m,
    resizable: O,
    draggable: $
  } = e, N = Oo(e, e.headerCellClass, m && Kp, O && Zp, $ && Jp, g && tm, b && rm), j = e.renderHeaderCell ?? du;
  function M(A) {
    if (A.pointerType === "mouse" && A.buttons !== 1)
      return;
    A.preventDefault();
    const {
      currentTarget: z,
      pointerId: X
    } = A, K = z.parentElement, {
      right: ae,
      left: B
    } = K.getBoundingClientRect(), pe = y ? A.clientX - B : ae - A.clientX;
    let ue = !1;
    function me(Ee) {
      const {
        width: fe,
        right: Oe,
        left: we
      } = K.getBoundingClientRect();
      let le = y ? Oe + pe - Ee.clientX : Ee.clientX + pe - we;
      le = tu(le, e), fe > 0 && le !== fe && i(e, le);
    }
    function $e() {
      ue = !0, i(e, "max-content");
    }
    function se(Ee) {
      ue || me(Ee), z.removeEventListener("pointermove", me), z.removeEventListener("dblclick", $e), z.removeEventListener("lostpointercapture", se);
    }
    z.setPointerCapture(X), z.addEventListener("pointermove", me), z.addEventListener("dblclick", $e), z.addEventListener("lostpointercapture", se);
  }
  function L(A) {
    if (l == null) return;
    const {
      sortDescendingFirst: z
    } = e;
    if (R === void 0) {
      const X = {
        columnKey: e.key,
        direction: z ? "DESC" : "ASC"
      };
      l(s && A ? [...s, X] : [X]);
    } else {
      let X;
      if ((z === !0 && E === "DESC" || z !== !0 && E === "ASC") && (X = {
        columnKey: e.key,
        direction: E === "ASC" ? "DESC" : "ASC"
      }), A) {
        const K = [...s];
        X ? K[x] = X : K.splice(x, 1), l(K);
      } else
        l(X ? [X] : []);
    }
  }
  function H(A) {
    c({
      idx: e.idx,
      rowIdx: n
    }), m && L(A.ctrlKey || A.metaKey);
  }
  function ee(A) {
    w == null || w(A), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function q(A) {
    (A.key === " " || A.key === "Enter") && (A.preventDefault(), L(A.ctrlKey || A.metaKey));
  }
  function W(A) {
    A.dataTransfer.setData(p, e.key), A.dataTransfer.dropEffect = "move", h(!0);
  }
  function U() {
    h(!1);
  }
  function ie(A) {
    A.preventDefault(), A.dataTransfer.dropEffect = "move";
  }
  function J(A) {
    if (u(!1), A.dataTransfer.types.includes(p.toLowerCase())) {
      const z = A.dataTransfer.getData(p.toLowerCase());
      z !== e.key && (A.preventDefault(), a == null || a(z, e.key));
    }
  }
  function D(A) {
    ol(A) && u(!0);
  }
  function F(A) {
    ol(A) && u(!1);
  }
  let G;
  return $ && (G = {
    draggable: !0,
    onDragStart: W,
    onDragEnd: U,
    onDragOver: ie,
    onDragEnter: D,
    onDragLeave: F,
    onDrop: J
  }), /* @__PURE__ */ Se("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": r,
    "aria-sort": I,
    tabIndex: d ? 0 : S,
    className: N,
    style: {
      ...eu(e, n, C),
      ...Vr(e, t)
    },
    onFocus: ee,
    onClick: H,
    onKeyDown: m ? q : void 0,
    ...G,
    children: [j({
      column: e,
      sortDirection: E,
      priority: k,
      tabIndex: v
    }), O && /* @__PURE__ */ P("div", {
      className: Qp,
      onClick: Zf,
      onPointerDown: M
    })]
  });
}
function ol(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const im = "r1upfr807-0-0-beta-47", fs = `rdg-row ${im}`, am = "r190mhd37-0-0-beta-47", ki = "rdg-row-selected", sm = "r139qu9m7-0-0-beta-47", lm = "rdg-top-summary-row", cm = "rdg-bottom-summary-row", um = "h10tskcx7-0-0-beta-47", fu = `rdg-header-row ${um}`;
function dm({
  rowIdx: e,
  columns: t,
  onColumnResize: n,
  onColumnsReorder: r,
  sortColumns: i,
  onSortColumnsChange: a,
  lastFrozenColumnIndex: s,
  selectedCellIdx: l,
  selectCell: c,
  shouldFocusGrid: d,
  direction: f
}) {
  const p = qf(), g = [];
  for (let h = 0; h < t.length; h++) {
    const b = t[h], u = tn(b, s, {
      type: "HEADER"
    });
    u !== void 0 && (h += u - 1), g.push(/* @__PURE__ */ P(om, {
      column: b,
      colSpan: u,
      rowIdx: e,
      isCellSelected: l === b.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: a,
      sortColumns: i,
      selectCell: c,
      shouldFocusGrid: d && h === 0,
      direction: f,
      dragDropKey: p
    }, b.key));
  }
  return /* @__PURE__ */ P("div", {
    role: "row",
    "aria-rowindex": e,
    className: de(fu, l === -1 && ki),
    children: g
  });
}
const fm = /* @__PURE__ */ Qn(dm);
function pm({
  rowIdx: e,
  level: t,
  columns: n,
  selectedCellIdx: r,
  selectCell: i
}) {
  const a = [], s = /* @__PURE__ */ new Set();
  for (const l of n) {
    let {
      parent: c
    } = l;
    if (c !== void 0) {
      for (; c.level > t && c.parent !== void 0; )
        c = c.parent;
      if (c.level === t && !s.has(c)) {
        s.add(c);
        const {
          idx: d
        } = c;
        a.push(/* @__PURE__ */ P(Hp, {
          column: c,
          rowIdx: e,
          isCellSelected: r === d,
          selectCell: i
        }, d));
      }
    }
  }
  return /* @__PURE__ */ P("div", {
    role: "row",
    "aria-rowindex": e,
    className: fu,
    children: a
  });
}
const mm = /* @__PURE__ */ Qn(pm), hm = "c6ra8a37-0-0-beta-47", gm = `rdg-cell-copied ${hm}`, bm = "cq910m07-0-0-beta-47", ym = `rdg-cell-dragged-over ${bm}`;
function vm({
  column: e,
  colSpan: t,
  isCellSelected: n,
  isCopied: r,
  isDraggedOver: i,
  row: a,
  rowIdx: s,
  onClick: l,
  onDoubleClick: c,
  onContextMenu: d,
  onRowChange: f,
  selectCell: p,
  ...g
}) {
  const {
    tabIndex: h,
    childTabIndex: b,
    onFocus: u
  } = Ro(n), {
    cellClass: y
  } = e, C = Oo(e, typeof y == "function" ? y(a) : y, r && gm, i && ym), S = Qc(e, a);
  function v(k) {
    p({
      rowIdx: s,
      idx: e.idx
    }, k);
  }
  function w(k) {
    if (l) {
      const I = ao(k);
      if (l({
        row: a,
        column: e,
        selectCell: v
      }, I), I.isGridDefaultPrevented()) return;
    }
    v();
  }
  function x(k) {
    if (d) {
      const I = ao(k);
      if (d({
        row: a,
        column: e,
        selectCell: v
      }, I), I.isGridDefaultPrevented()) return;
    }
    v();
  }
  function R(k) {
    if (c) {
      const I = ao(k);
      if (c({
        row: a,
        column: e,
        selectCell: v
      }, I), I.isGridDefaultPrevented()) return;
    }
    v(!0);
  }
  function E(k) {
    f(e, k);
  }
  return /* @__PURE__ */ P("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !S || void 0,
    tabIndex: h,
    className: C,
    style: Vr(e, t),
    onClick: w,
    onDoubleClick: R,
    onContextMenu: x,
    onFocus: u,
    ...g,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: s,
      isCellEditable: S,
      tabIndex: b,
      onRowChange: E
    })
  });
}
const wm = /* @__PURE__ */ Qn(vm);
function xm({
  className: e,
  rowIdx: t,
  gridRowStart: n,
  selectedCellIdx: r,
  isRowSelectionDisabled: i,
  isRowSelected: a,
  copiedCellIdx: s,
  draggedOverCellIdx: l,
  lastFrozenColumnIndex: c,
  row: d,
  viewportColumns: f,
  selectedCellEditor: p,
  onCellClick: g,
  onCellDoubleClick: h,
  onCellContextMenu: b,
  rowClass: u,
  setDraggedOverRowIdx: y,
  onMouseEnter: C,
  onRowChange: S,
  selectCell: v,
  ...w
}, x) {
  const R = At((m, O) => {
    S(m, t, O);
  });
  function E(m) {
    y == null || y(t), C == null || C(m);
  }
  e = de(fs, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && ki);
  const k = [];
  for (let m = 0; m < f.length; m++) {
    const O = f[m], {
      idx: $
    } = O, N = tn(O, c, {
      type: "ROW",
      row: d
    });
    N !== void 0 && (m += N - 1);
    const j = r === $;
    j && p ? k.push(p) : k.push(/* @__PURE__ */ P(wm, {
      column: O,
      colSpan: N,
      row: d,
      rowIdx: t,
      isCopied: s === $,
      isDraggedOver: l === $,
      isCellSelected: j,
      onClick: g,
      onDoubleClick: h,
      onContextMenu: b,
      onRowChange: R,
      selectCell: v
    }, O.key));
  }
  const I = Je(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: i
  }), [i, a]);
  return /* @__PURE__ */ P(iu, {
    value: I,
    children: /* @__PURE__ */ P("div", {
      role: "row",
      ref: x,
      className: e,
      onMouseEnter: E,
      style: us(n),
      ...w,
      children: k
    })
  });
}
const pu = /* @__PURE__ */ Qn(/* @__PURE__ */ Pi(xm)), kT = pu;
function mu(e, t) {
  return /* @__PURE__ */ P(pu, {
    ...t
  }, e);
}
function Cm({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const i = Tn(null);
  return Dr(() => {
    Jo(i.current);
  }), Dr(() => {
    function a() {
      r(null);
    }
    const s = new IntersectionObserver(a, {
      root: n,
      threshold: 1
    });
    return s.observe(i.current), () => {
      s.disconnect();
    };
  }, [n, r]), /* @__PURE__ */ P("div", {
    ref: i,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Tm = "a3ejtar7-0-0-beta-47", Sm = `rdg-sort-arrow ${Tm}`;
function Em({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ Se(cs, {
    children: [Om({
      sortDirection: e
    }), Rm({
      priority: t
    })]
  });
}
function Om({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ P("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Sm,
    "aria-hidden": !0,
    children: /* @__PURE__ */ P("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Rm({
  priority: e
}) {
  return e;
}
const Pm = "rnvodz57-0-0-beta-47", Im = `rdg ${Pm}`, km = "vlqv91k7-0-0-beta-47", $m = `rdg-viewport-dragging ${km}`, Mm = "f1lsfrzw7-0-0-beta-47", Nm = "f1cte0lg7-0-0-beta-47", Dm = "s8wc6fl7-0-0-beta-47";
function Am({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: i,
  selectCell: a
}) {
  var g;
  const {
    tabIndex: s,
    childTabIndex: l,
    onFocus: c
  } = Ro(i), {
    summaryCellClass: d
  } = e, f = Oo(e, Dm, typeof d == "function" ? d(n) : d);
  function p() {
    a({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ P("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": i,
    tabIndex: s,
    className: f,
    style: Vr(e, t),
    onClick: p,
    onFocus: c,
    children: (g = e.renderSummaryCell) == null ? void 0 : g.call(e, {
      column: e,
      row: n,
      tabIndex: l
    })
  });
}
const Lm = /* @__PURE__ */ Qn(Am), Fm = "skuhp557-0-0-beta-47", Bm = "tf8l5ub7-0-0-beta-47", _m = `rdg-summary-row ${Fm}`;
function jm({
  rowIdx: e,
  gridRowStart: t,
  row: n,
  viewportColumns: r,
  top: i,
  bottom: a,
  lastFrozenColumnIndex: s,
  selectedCellIdx: l,
  isTop: c,
  selectCell: d,
  "aria-rowindex": f
}) {
  const p = [];
  for (let g = 0; g < r.length; g++) {
    const h = r[g], b = tn(h, s, {
      type: "SUMMARY",
      row: n
    });
    b !== void 0 && (g += b - 1);
    const u = l === h.idx;
    p.push(/* @__PURE__ */ P(Lm, {
      column: h,
      colSpan: b,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, h.key));
  }
  return /* @__PURE__ */ P("div", {
    role: "row",
    "aria-rowindex": f,
    className: de(fs, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, _m, c ? `${lm} ${Bm}` : cm, l === -1 && ki),
    style: {
      ...us(t),
      "--rdg-summary-row-top": i !== void 0 ? `${i}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: p
  });
}
const il = /* @__PURE__ */ Qn(jm);
function zm(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a,
    rowKeyGetter: s,
    onRowsChange: l,
    rowHeight: c,
    headerRowHeight: d,
    summaryRowHeight: f,
    selectedRows: p,
    isRowSelectionDisabled: g,
    onSelectedRowsChange: h,
    sortColumns: b,
    onSortColumnsChange: u,
    defaultColumnOptions: y,
    onCellClick: C,
    onCellDoubleClick: S,
    onCellContextMenu: v,
    onCellKeyDown: w,
    onSelectedCellChange: x,
    onScroll: R,
    onColumnResize: E,
    onColumnsReorder: k,
    onFill: I,
    onCopy: m,
    onPaste: O,
    enableVirtualization: $,
    renderers: N,
    className: j,
    style: M,
    rowClass: L,
    direction: H,
    role: ee,
    "aria-label": q,
    "aria-labelledby": W,
    "aria-describedby": U,
    "aria-rowcount": ie,
    "data-testid": J
  } = e, D = Ii(), F = ee ?? "grid", G = c ?? 35, A = d ?? (typeof G == "number" ? G : 35), z = f ?? (typeof G == "number" ? G : 35), X = (N == null ? void 0 : N.renderRow) ?? (D == null ? void 0 : D.renderRow) ?? mu, K = (N == null ? void 0 : N.renderSortStatus) ?? (D == null ? void 0 : D.renderSortStatus) ?? Em, ae = (N == null ? void 0 : N.renderCheckbox) ?? (D == null ? void 0 : D.renderCheckbox) ?? mp, B = (N == null ? void 0 : N.noRowsFallback) ?? (D == null ? void 0 : D.noRowsFallback), pe = $ ?? !0, ue = H ?? "ltr", [me, $e] = vt(0), [se, Ee] = vt(0), [fe, Oe] = vt(() => /* @__PURE__ */ new Map()), [we, le] = vt(() => /* @__PURE__ */ new Map()), [tt, je] = vt(null), [bt, Pt] = vt(!1), [ft, It] = vt(void 0), [Fe, Ae] = vt(null), ye = St((Z) => fe.get(Z.key) ?? we.get(Z.key) ?? Z.width, [we, fe]), [ht, xt, Dn, $t] = Ap(), {
    columns: te,
    colSpanColumns: Ce,
    lastFrozenColumnIndex: Re,
    headerRowsCount: yt,
    colOverscanStartIdx: Et,
    colOverscanEndIdx: fn,
    templateColumns: pn,
    layoutCssVars: zn,
    totalFrozenColumnWidth: Xt
  } = Np({
    rawColumns: n,
    defaultColumnOptions: y,
    getColumnWidth: ye,
    scrollLeft: se,
    viewportWidth: xt,
    enableVirtualization: pe
  }), mn = (i == null ? void 0 : i.length) ?? 0, sn = (a == null ? void 0 : a.length) ?? 0, hn = mn + sn, gn = yt + mn, tr = yt - 1, lt = -gn, bn = lt + tr, _t = r.length + sn - 1, [ce, yn] = vt(() => ({
    idx: -1,
    rowIdx: lt - 1,
    mode: "SELECT"
  })), nr = Tn(ce), hr = Tn(ft), Wn = Tn(-1), ct = Tn(null), nt = Tn(!1), Mt = F === "treegrid", Vn = yt * A, Y = hn * z, _ = Dn - Vn - Y, ne = p != null && h != null, be = ue === "rtl", ve = be ? "ArrowRight" : "ArrowLeft", Pe = be ? "ArrowLeft" : "ArrowRight", rt = ie ?? yt + r.length + hn, Ct = Je(() => ({
    renderCheckbox: ae,
    renderSortStatus: K
  }), [ae, K]), rr = Je(() => {
    let Z = !1, Q = !1;
    if (s != null && p != null && p.size > 0) {
      for (const he of r)
        if (p.has(s(he)) ? Z = !0 : Q = !0, Z && Q) break;
    }
    return {
      isRowSelected: Z && !Q,
      isIndeterminate: Z && Q
    };
  }, [r, p, s]), {
    rowOverscanStartIdx: or,
    rowOverscanEndIdx: Hn,
    totalRowHeight: Un,
    gridTemplateRows: gr,
    getRowTop: Me,
    getRowHeight: Zt,
    findRowIdx: ln
  } = Fp({
    rows: r,
    rowHeight: G,
    clientHeight: _,
    scrollTop: me,
    enableVirtualization: pe
  }), Nt = Lp({
    columns: te,
    colSpanColumns: Ce,
    colOverscanStartIdx: Et,
    colOverscanEndIdx: fn,
    lastFrozenColumnIndex: Re,
    rowOverscanStartIdx: or,
    rowOverscanEndIdx: Hn,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: sa,
    handleColumnResize: bf
  } = Dp(te, Nt, pn, ht, xt, fe, we, Oe, le, E), yf = Mt ? -1 : 0, br = te.length - 1, la = da(ce), _o = Qs(ce), vf = A + Un + Y + $t, wf = At(bf), xf = At(k), Cf = At(u), Tf = At(C), Sf = At(S), Ef = At(v), Of = At(If), Rf = At(Ks), Pf = At(jo), ca = At(Yr), Gs = At(({
    idx: Z,
    rowIdx: Q
  }) => {
    Yr({
      rowIdx: lt + Q - 1,
      idx: Z
    });
  });
  Dr(() => {
    if (!la || ma(ce, nr.current)) {
      nr.current = ce;
      return;
    }
    nr.current = ce, ce.idx === -1 && (ct.current.focus({
      preventScroll: !0
    }), Jo(ct.current));
  }), Dr(() => {
    nt.current && (nt.current = !1, el());
  }), Yf(t, () => ({
    element: ht.current,
    scrollToCell({
      idx: Z,
      rowIdx: Q
    }) {
      const he = Z !== void 0 && Z > Re && Z < te.length ? Z : void 0, ge = Q !== void 0 && yr(Q) ? Q : void 0;
      (he !== void 0 || ge !== void 0) && Ae({
        idx: he,
        rowIdx: ge
      });
    },
    selectCell: Yr
  }));
  const ua = St((Z) => {
    It(Z), hr.current = Z;
  }, []);
  function If(Z) {
    if (!h) return;
    so(s);
    const Q = new Set(p);
    for (const he of r) {
      if ((g == null ? void 0 : g(he)) === !0) continue;
      const ge = s(he);
      Z.checked ? Q.add(ge) : Q.delete(ge);
    }
    h(Q);
  }
  function Ks(Z) {
    if (!h) return;
    so(s);
    const {
      row: Q,
      checked: he,
      isShiftClick: ge
    } = Z;
    if ((g == null ? void 0 : g(Q)) === !0) return;
    const Ne = new Set(p), Ke = s(Q), ot = Wn.current, it = r.indexOf(Q);
    if (Wn.current = it, he ? Ne.add(Ke) : Ne.delete(Ke), ge && ot !== -1 && ot !== it && ot < r.length) {
      const jt = up(it - ot);
      for (let Dt = ot + jt; Dt !== it; Dt += jt) {
        const vn = r[Dt];
        (g == null ? void 0 : g(vn)) !== !0 && (he ? Ne.add(s(vn)) : Ne.delete(s(vn)));
      }
    }
    h(Ne);
  }
  function kf(Z) {
    var it;
    const {
      idx: Q,
      rowIdx: he,
      mode: ge
    } = ce;
    if (ge === "EDIT") return;
    if (w && yr(he)) {
      const jt = r[he], Dt = ao(Z);
      if (w({
        mode: "SELECT",
        row: jt,
        column: te[Q],
        rowIdx: he,
        selectCell: Yr
      }, Dt), Dt.isGridDefaultPrevented()) return;
    }
    if (!(Z.target instanceof Element)) return;
    const Ne = Z.target.closest(".rdg-cell") !== null, Ke = Mt && Z.target === ct.current;
    if (!Ne && !Ke) return;
    const {
      keyCode: ot
    } = Z;
    if (_o && (O != null || m != null) && si(Z)) {
      if (ot === 67) {
        if (((it = window.getSelection()) == null ? void 0 : it.isCollapsed) === !1) return;
        Mf();
        return;
      }
      if (ot === 86) {
        Nf();
        return;
      }
    }
    switch (Z.key) {
      case "Escape":
        je(null);
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
        Js(Z);
        break;
      default:
        Df(Z);
        break;
    }
  }
  function $f(Z) {
    const {
      scrollTop: Q,
      scrollLeft: he
    } = Z.currentTarget;
    ai(() => {
      $e(Q), Ee(dp(he));
    }), R == null || R(Z);
  }
  function jo(Z, Q, he) {
    if (typeof l != "function" || he === r[Q]) return;
    const ge = [...r];
    ge[Q] = he, l(ge, {
      indexes: [Q],
      column: Z
    });
  }
  function Xs() {
    ce.mode === "EDIT" && jo(te[ce.idx], ce.rowIdx, ce.row);
  }
  function Mf() {
    const {
      idx: Z,
      rowIdx: Q
    } = ce, he = r[Q], ge = te[Z].key;
    je({
      row: he,
      columnKey: ge
    }), m == null || m({
      sourceRow: he,
      sourceColumnKey: ge
    });
  }
  function Nf() {
    if (!O || !l || tt === null || !zo(ce))
      return;
    const {
      idx: Z,
      rowIdx: Q
    } = ce, he = te[Z], ge = r[Q], Ne = O({
      sourceRow: tt.row,
      sourceColumnKey: tt.columnKey,
      targetRow: ge,
      targetColumnKey: he.key
    });
    jo(he, Q, Ne);
  }
  function Df(Z) {
    if (!_o) return;
    const Q = r[ce.rowIdx], {
      key: he,
      shiftKey: ge
    } = Z;
    if (ne && ge && he === " ") {
      so(s);
      const Ne = s(Q);
      Ks({
        row: Q,
        checked: !p.has(Ne),
        isShiftClick: !1
      }), Z.preventDefault();
      return;
    }
    zo(ce) && Jf(Z) && yn(({
      idx: Ne,
      rowIdx: Ke
    }) => ({
      idx: Ne,
      rowIdx: Ke,
      mode: "EDIT",
      row: Q,
      originalRow: Q
    }));
  }
  function Zs(Z) {
    return Z >= yf && Z <= br;
  }
  function yr(Z) {
    return Z >= 0 && Z < r.length;
  }
  function da({
    idx: Z,
    rowIdx: Q
  }) {
    return Q >= lt && Q <= _t && Zs(Z);
  }
  function Af({
    idx: Z,
    rowIdx: Q
  }) {
    return yr(Q) && Z >= 0 && Z <= br;
  }
  function Qs({
    idx: Z,
    rowIdx: Q
  }) {
    return yr(Q) && Zs(Z);
  }
  function zo(Z) {
    return Af(Z) && rp({
      columns: te,
      rows: r,
      selectedPosition: Z
    });
  }
  function Yr(Z, Q) {
    if (!da(Z)) return;
    Xs();
    const he = r[Z.rowIdx], ge = ma(ce, Z);
    Q && zo(Z) ? yn({
      ...Z,
      mode: "EDIT",
      row: he,
      originalRow: he
    }) : ge ? Jo(al(ht.current)) : (nt.current = !0, yn({
      ...Z,
      mode: "SELECT"
    })), x && !ge && x({
      rowIdx: Z.rowIdx,
      row: he,
      column: te[Z.idx]
    });
  }
  function Lf(Z, Q, he) {
    const {
      idx: ge,
      rowIdx: Ne
    } = ce, Ke = la && ge === -1;
    switch (Z) {
      case "ArrowUp":
        return {
          idx: ge,
          rowIdx: Ne - 1
        };
      case "ArrowDown":
        return {
          idx: ge,
          rowIdx: Ne + 1
        };
      case ve:
        return {
          idx: ge - 1,
          rowIdx: Ne
        };
      case Pe:
        return {
          idx: ge + 1,
          rowIdx: Ne
        };
      case "Tab":
        return {
          idx: ge + (he ? -1 : 1),
          rowIdx: Ne
        };
      case "Home":
        return Ke ? {
          idx: ge,
          rowIdx: lt
        } : {
          idx: 0,
          rowIdx: Q ? lt : Ne
        };
      case "End":
        return Ke ? {
          idx: ge,
          rowIdx: _t
        } : {
          idx: br,
          rowIdx: Q ? _t : Ne
        };
      case "PageUp": {
        if (ce.rowIdx === lt) return ce;
        const ot = Me(Ne) + Zt(Ne) - _;
        return {
          idx: ge,
          rowIdx: ot > 0 ? ln(ot) : 0
        };
      }
      case "PageDown": {
        if (ce.rowIdx >= r.length) return ce;
        const ot = Me(Ne) + _;
        return {
          idx: ge,
          rowIdx: ot < Un ? ln(ot) : r.length - 1
        };
      }
      default:
        return ce;
    }
  }
  function Js(Z) {
    const {
      key: Q,
      shiftKey: he
    } = Z;
    let ge = "NONE";
    if (Q === "Tab") {
      if (ap({
        shiftKey: he,
        maxColIdx: br,
        minRowIdx: lt,
        maxRowIdx: _t,
        selectedPosition: ce
      })) {
        Xs();
        return;
      }
      ge = "CHANGE_ROW";
    }
    Z.preventDefault();
    const Ne = si(Z), Ke = Lf(Q, Ne, he);
    if (ma(ce, Ke)) return;
    const ot = ip({
      moveUp: Q === "ArrowUp",
      moveNext: Q === Pe || Q === "Tab" && !he,
      columns: te,
      colSpanColumns: Ce,
      rows: r,
      topSummaryRows: i,
      bottomSummaryRows: a,
      minRowIdx: lt,
      mainHeaderRowIdx: bn,
      maxRowIdx: _t,
      lastFrozenColumnIndex: Re,
      cellNavigationMode: ge,
      currentPosition: ce,
      nextPosition: Ke,
      isCellWithinBounds: da
    });
    Yr(ot);
  }
  function Ff(Z) {
    if (ft === void 0) return;
    const {
      rowIdx: Q
    } = ce;
    return (Q < ft ? Q < Z && Z <= ft : Q > Z && Z >= ft) ? ce.idx : void 0;
  }
  function el() {
    const Z = al(ht.current);
    if (Z === null) return;
    Jo(Z), (Z.querySelector('[tabindex="0"]') ?? Z).focus({
      preventScroll: !0
    });
  }
  function Bf() {
    if (I == null || ce.mode === "EDIT" || !Qs(ce))
      return;
    const {
      idx: Z,
      rowIdx: Q
    } = ce, he = te[Z];
    if (he.renderEditCell == null || he.editable === !1)
      return;
    const ge = ye(he);
    return /* @__PURE__ */ P(zp, {
      gridRowStart: gn + Q + 1,
      rows: r,
      column: he,
      columnWidth: ge,
      maxColIdx: br,
      isLastRow: Q === _t,
      selectedPosition: ce,
      isCellEditable: zo,
      latestDraggedOverRowIdx: hr,
      onRowsChange: l,
      onClick: el,
      onFill: I,
      setDragging: Pt,
      setDraggedOverRowIdx: ua
    });
  }
  function _f(Z) {
    if (ce.rowIdx !== Z || ce.mode === "SELECT") return;
    const {
      idx: Q,
      row: he
    } = ce, ge = te[Q], Ne = tn(ge, Re, {
      type: "ROW",
      row: he
    }), Ke = (it) => {
      nt.current = it, yn(({
        idx: jt,
        rowIdx: Dt
      }) => ({
        idx: jt,
        rowIdx: Dt,
        mode: "SELECT"
      }));
    }, ot = (it, jt, Dt) => {
      jt ? ai(() => {
        jo(ge, ce.rowIdx, it), Ke(Dt);
      }) : yn((vn) => ({
        ...vn,
        row: it
      }));
    };
    return r[ce.rowIdx] !== ce.originalRow && Ke(!1), /* @__PURE__ */ P(Vp, {
      column: ge,
      colSpan: Ne,
      row: he,
      rowIdx: Z,
      onRowChange: ot,
      closeEditor: Ke,
      onKeyDown: w,
      navigate: Js
    }, ge.key);
  }
  function qr(Z) {
    const Q = ce.idx === -1 ? void 0 : te[ce.idx];
    return Q !== void 0 && ce.rowIdx === Z && !Nt.includes(Q) ? ce.idx > fn ? [...Nt, Q] : [...Nt.slice(0, Re + 1), Q, ...Nt.slice(Re + 1)] : Nt;
  }
  function jf() {
    const Z = [], {
      idx: Q,
      rowIdx: he
    } = ce, ge = _o && he < or ? or - 1 : or, Ne = _o && he > Hn ? Hn + 1 : Hn;
    for (let Ke = ge; Ke <= Ne; Ke++) {
      const ot = Ke === or - 1 || Ke === Hn + 1, it = ot ? he : Ke;
      let jt = Nt;
      const Dt = Q === -1 ? void 0 : te[Q];
      Dt !== void 0 && (ot ? jt = [Dt] : jt = qr(it));
      const vn = r[it], zf = gn + it + 1;
      let fa = it, pa = !1;
      typeof s == "function" && (fa = s(vn), pa = (p == null ? void 0 : p.has(fa)) ?? !1), Z.push(X(fa, {
        "aria-rowindex": gn + it + 1,
        "aria-selected": ne ? pa : void 0,
        rowIdx: it,
        row: vn,
        viewportColumns: jt,
        isRowSelectionDisabled: (g == null ? void 0 : g(vn)) ?? !1,
        isRowSelected: pa,
        onCellClick: Tf,
        onCellDoubleClick: Sf,
        onCellContextMenu: Ef,
        rowClass: L,
        gridRowStart: zf,
        copiedCellIdx: tt !== null && tt.row === vn ? te.findIndex((Wf) => Wf.key === tt.columnKey) : void 0,
        selectedCellIdx: he === it ? Q : void 0,
        draggedOverCellIdx: Ff(it),
        setDraggedOverRowIdx: bt ? ua : void 0,
        lastFrozenColumnIndex: Re,
        onRowChange: Pf,
        selectCell: ca,
        selectedCellEditor: _f(it)
      }));
    }
    return Z;
  }
  (ce.idx > br || ce.rowIdx > _t) && (yn({
    idx: -1,
    rowIdx: lt - 1,
    mode: "SELECT"
  }), ua(void 0));
  let Wo = `repeat(${yt}, ${A}px)`;
  mn > 0 && (Wo += ` repeat(${mn}, ${z}px)`), r.length > 0 && (Wo += gr), sn > 0 && (Wo += ` repeat(${sn}, ${z}px)`);
  const tl = ce.idx === -1 && ce.rowIdx !== lt - 1;
  return /* @__PURE__ */ Se("div", {
    role: F,
    "aria-label": q,
    "aria-labelledby": W,
    "aria-describedby": U,
    "aria-multiselectable": ne ? !0 : void 0,
    "aria-colcount": te.length,
    "aria-rowcount": rt,
    className: de(Im, j, bt && $m),
    style: {
      ...M,
      scrollPaddingInlineStart: ce.idx > Re || (Fe == null ? void 0 : Fe.idx) !== void 0 ? `${Xt}px` : void 0,
      scrollPaddingBlock: yr(ce.rowIdx) || (Fe == null ? void 0 : Fe.rowIdx) !== void 0 ? `${Vn + mn * z}px ${sn * z}px` : void 0,
      gridTemplateColumns: sa,
      gridTemplateRows: Wo,
      "--rdg-header-row-height": `${A}px`,
      "--rdg-scroll-height": `${vf}px`,
      ...zn
    },
    dir: ue,
    ref: ht,
    onScroll: $f,
    onKeyDown: kf,
    "data-testid": J,
    children: [/* @__PURE__ */ Se(Cp, {
      value: Ct,
      children: [/* @__PURE__ */ P(Ep, {
        value: Of,
        children: /* @__PURE__ */ Se(Sp, {
          value: rr,
          children: [Array.from({
            length: tr
          }, (Z, Q) => /* @__PURE__ */ P(mm, {
            rowIdx: Q + 1,
            level: -tr + Q,
            columns: qr(lt + Q),
            selectedCellIdx: ce.rowIdx === lt + Q ? ce.idx : void 0,
            selectCell: Gs
          }, Q)), /* @__PURE__ */ P(fm, {
            rowIdx: yt,
            columns: qr(bn),
            onColumnResize: wf,
            onColumnsReorder: xf,
            sortColumns: b,
            onSortColumnsChange: Cf,
            lastFrozenColumnIndex: Re,
            selectedCellIdx: ce.rowIdx === bn ? ce.idx : void 0,
            selectCell: Gs,
            shouldFocusGrid: !la,
            direction: ue
          })]
        })
      }), r.length === 0 && B ? B : /* @__PURE__ */ Se(cs, {
        children: [i == null ? void 0 : i.map((Z, Q) => {
          const he = yt + 1 + Q, ge = bn + 1 + Q, Ne = ce.rowIdx === ge, Ke = Vn + z * Q;
          return /* @__PURE__ */ P(il, {
            "aria-rowindex": he,
            rowIdx: ge,
            gridRowStart: he,
            row: Z,
            top: Ke,
            bottom: void 0,
            viewportColumns: qr(ge),
            lastFrozenColumnIndex: Re,
            selectedCellIdx: Ne ? ce.idx : void 0,
            isTop: !0,
            selectCell: ca
          }, Q);
        }), /* @__PURE__ */ P(Tp, {
          value: Rf,
          children: jf()
        }), a == null ? void 0 : a.map((Z, Q) => {
          const he = gn + r.length + Q + 1, ge = r.length + Q, Ne = ce.rowIdx === ge, Ke = _ > Un ? Dn - z * (a.length - Q) : void 0, ot = Ke === void 0 ? z * (a.length - 1 - Q) : void 0;
          return /* @__PURE__ */ P(il, {
            "aria-rowindex": rt - sn + Q + 1,
            rowIdx: ge,
            gridRowStart: he,
            row: Z,
            top: Ke,
            bottom: ot,
            viewportColumns: qr(ge),
            lastFrozenColumnIndex: Re,
            selectedCellIdx: Ne ? ce.idx : void 0,
            isTop: !1,
            selectCell: ca
          }, Q);
        })]
      })]
    }), Bf(), np(Nt), Mt && /* @__PURE__ */ P("div", {
      ref: ct,
      tabIndex: tl ? 0 : -1,
      className: de(Mm, tl && [am, Re !== -1 && sm], !yr(ce.rowIdx) && Nm),
      style: {
        gridRowStart: ce.rowIdx + gn + 1
      }
    }), Fe !== null && /* @__PURE__ */ P(Cm, {
      scrollToPosition: Fe,
      setScrollToCellPosition: Ae,
      gridElement: ht.current
    })]
  });
}
function al(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function ma(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const hu = /* @__PURE__ */ Pi(zm);
function Wm({
  id: e,
  groupKey: t,
  childRows: n,
  isExpanded: r,
  isCellSelected: i,
  column: a,
  row: s,
  groupColumnIndex: l,
  isGroupByColumn: c,
  toggleGroup: d
}) {
  var u;
  const {
    tabIndex: f,
    childTabIndex: p,
    onFocus: g
  } = Ro(i);
  function h() {
    d(e);
  }
  const b = c && l === a.idx;
  return /* @__PURE__ */ P("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": i,
    tabIndex: f,
    className: Oo(a),
    style: {
      ...Vr(a),
      cursor: b ? "pointer" : "default"
    },
    onClick: b ? h : void 0,
    onFocus: g,
    children: (!c || b) && ((u = a.renderGroupCell) == null ? void 0 : u.call(a, {
      groupKey: t,
      childRows: n,
      column: a,
      row: s,
      isExpanded: r,
      tabIndex: p,
      toggleGroup: h
    }))
  }, a.key);
}
const Vm = /* @__PURE__ */ Qn(Wm), Hm = "g1yxluv37-0-0-beta-47", Um = `rdg-group-row ${Hm}`;
function Ym({
  className: e,
  row: t,
  rowIdx: n,
  viewportColumns: r,
  selectedCellIdx: i,
  isRowSelected: a,
  selectCell: s,
  gridRowStart: l,
  groupBy: c,
  toggleGroup: d,
  isRowSelectionDisabled: f,
  ...p
}) {
  const g = r[0].key === Nr ? t.level + 1 : t.level;
  function h() {
    s({
      rowIdx: n,
      idx: -1
    });
  }
  const b = Je(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ P(iu, {
    value: b,
    children: /* @__PURE__ */ P("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: de(fs, Um, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, i === -1 && ki),
      onClick: h,
      style: us(l),
      ...p,
      children: r.map((u) => /* @__PURE__ */ P(Vm, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: i === u.idx,
        column: u,
        row: t,
        groupColumnIndex: g,
        toggleGroup: d,
        isGroupByColumn: c.includes(u.key)
      }, u.key))
    })
  });
}
const qm = /* @__PURE__ */ Qn(Ym);
function Gm({
  columns: e,
  rows: t,
  rowHeight: n,
  rowKeyGetter: r,
  onCellKeyDown: i,
  onRowsChange: a,
  selectedRows: s,
  onSelectedRowsChange: l,
  renderers: c,
  groupBy: d,
  rowGrouper: f,
  expandedGroupIds: p,
  onExpandedGroupIdsChange: g,
  ...h
}, b) {
  var U, ie, J;
  const u = Ii(), y = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? mu, C = 1 + (((U = h.topSummaryRows) == null ? void 0 : U.length) ?? 0), S = h.direction === "rtl", v = S ? "ArrowRight" : "ArrowLeft", w = S ? "ArrowLeft" : "ArrowRight", x = At(q), {
    columns: R,
    groupBy: E
  } = Je(() => {
    const D = [...e].sort(({
      key: G
    }, {
      key: A
    }) => G === Nr ? -1 : A === Nr ? 1 : d.includes(G) ? d.includes(A) ? d.indexOf(G) - d.indexOf(A) : -1 : d.includes(A) ? 1 : 0), F = [];
    for (const [G, A] of D.entries())
      d.includes(A.key) && (F.push(A.key), D[G] = {
        ...A,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: A.renderGroupCell ?? vp,
        editable: !1
      });
    return {
      columns: D,
      groupBy: F
    };
  }, [e, d]), [k, I] = Je(() => {
    if (E.length === 0) return [void 0, t.length];
    const D = (F, [G, ...A], z) => {
      let X = 0;
      const K = {};
      for (const [ae, B] of Object.entries(f(F, G))) {
        const [pe, ue] = A.length === 0 ? [B, B.length] : D(B, A, z + X + 1);
        K[ae] = {
          childRows: B,
          childGroups: pe,
          startRowIndex: z + X
        }, X += ue + 1;
      }
      return [K, X];
    };
    return D(t, E, 0);
  }, [E, f, t]), [m, O] = Je(() => {
    const D = /* @__PURE__ */ new Set();
    if (!k) return [t, A];
    const F = [], G = (z, X, K) => {
      if (Km(z)) {
        F.push(...z);
        return;
      }
      Object.keys(z).forEach((ae, B, pe) => {
        const ue = X !== void 0 ? `${X}__${ae}` : ae, me = p.has(ue), {
          childRows: $e,
          childGroups: se,
          startRowIndex: Ee
        } = z[ae], fe = {
          id: ue,
          parentId: X,
          groupKey: ae,
          isExpanded: me,
          childRows: $e,
          level: K,
          posInSet: B,
          startRowIndex: Ee,
          setSize: pe.length
        };
        F.push(fe), D.add(fe), me && G(se, ue, K + 1);
      });
    };
    return G(k, void 0, 0), [F, A];
    function A(z) {
      return D.has(z);
    }
  }, [p, k, t]), $ = Je(() => typeof n == "function" ? (D) => O(D) ? n({
    type: "GROUP",
    row: D
  }) : n({
    type: "ROW",
    row: D
  }) : n, [O, n]), N = St((D) => {
    const F = m.indexOf(D);
    for (let G = F - 1; G >= 0; G--) {
      const A = m[G];
      if (O(A) && (!O(D) || D.parentId === A.id))
        return [A, G];
    }
  }, [O, m]), j = St((D) => {
    if (O(D))
      return D.id;
    if (typeof r == "function")
      return r(D);
    const F = N(D);
    if (F !== void 0) {
      const {
        startRowIndex: G,
        childRows: A
      } = F[0], z = A.indexOf(D);
      return G + z + 1;
    }
    return m.indexOf(D);
  }, [N, O, r, m]), M = Je(() => {
    if (s == null) return null;
    so(r);
    const D = new Set(s);
    for (const F of m)
      O(F) && F.childRows.every((A) => s.has(r(A))) && D.add(F.id);
    return D;
  }, [O, r, s, m]);
  function L(D) {
    if (!l) return;
    so(r);
    const F = new Set(s);
    for (const G of m) {
      const A = j(G);
      if (M != null && M.has(A) && !D.has(A))
        if (O(G))
          for (const z of G.childRows)
            F.delete(r(z));
        else
          F.delete(A);
      else if (!(M != null && M.has(A)) && D.has(A))
        if (O(G))
          for (const z of G.childRows)
            F.add(r(z));
        else
          F.add(A);
    }
    l(F);
  }
  function H(D, F) {
    if (i == null || i(D, F), F.isGridDefaultPrevented() || D.mode === "EDIT") return;
    const {
      column: G,
      rowIdx: A,
      selectCell: z
    } = D, X = (G == null ? void 0 : G.idx) ?? -1, K = m[A];
    if (O(K)) {
      if (X === -1 && (F.key === v && K.isExpanded || F.key === w && !K.isExpanded) && (F.preventDefault(), F.preventGridDefault(), q(K.id)), X === -1 && F.key === v && !K.isExpanded && K.level !== 0) {
        const ae = N(K);
        ae !== void 0 && (F.preventGridDefault(), z({
          idx: X,
          rowIdx: ae[1]
        }));
      }
      si(F) && (F.keyCode === 67 || F.keyCode === 86) && F.preventGridDefault();
    }
  }
  function ee(D, {
    indexes: F,
    column: G
  }) {
    if (!a) return;
    const A = [...t], z = [];
    for (const X of F) {
      const K = t.indexOf(m[X]);
      A[K] = D[X], z.push(K);
    }
    a(A, {
      indexes: z,
      column: G
    });
  }
  function q(D) {
    const F = new Set(p);
    F.has(D) ? F.delete(D) : F.add(D), g(F);
  }
  function W(D, {
    row: F,
    rowClass: G,
    onCellClick: A,
    onCellDoubleClick: z,
    onCellContextMenu: X,
    onRowChange: K,
    lastFrozenColumnIndex: ae,
    copiedCellIdx: B,
    draggedOverCellIdx: pe,
    setDraggedOverRowIdx: ue,
    selectedCellEditor: me,
    ...$e
  }) {
    if (O(F)) {
      const {
        startRowIndex: fe
      } = F;
      return /* @__PURE__ */ P(qm, {
        ...$e,
        "aria-rowindex": C + fe + 1,
        row: F,
        groupBy: E,
        toggleGroup: x
      }, D);
    }
    let se = $e["aria-rowindex"];
    const Ee = N(F);
    if (Ee !== void 0) {
      const {
        startRowIndex: fe,
        childRows: Oe
      } = Ee[0], we = Oe.indexOf(F);
      se = fe + C + we + 2;
    }
    return y(D, {
      ...$e,
      "aria-rowindex": se,
      row: F,
      rowClass: G,
      onCellClick: A,
      onCellDoubleClick: z,
      onCellContextMenu: X,
      onRowChange: K,
      lastFrozenColumnIndex: ae,
      copiedCellIdx: B,
      draggedOverCellIdx: pe,
      setDraggedOverRowIdx: ue,
      selectedCellEditor: me
    });
  }
  return /* @__PURE__ */ P(hu, {
    ...h,
    role: "treegrid",
    "aria-rowcount": I + 1 + (((ie = h.topSummaryRows) == null ? void 0 : ie.length) ?? 0) + (((J = h.bottomSummaryRows) == null ? void 0 : J.length) ?? 0),
    ref: b,
    columns: R,
    rows: m,
    rowHeight: $,
    rowKeyGetter: j,
    onRowsChange: ee,
    selectedRows: M,
    onSelectedRowsChange: L,
    onCellKeyDown: H,
    renderers: {
      ...c,
      renderRow: W
    }
  });
}
function Km(e) {
  return Array.isArray(e);
}
const $T = /* @__PURE__ */ Pi(Gm), Xm = "t7vyx3i7-0-0-beta-47", Zm = `rdg-text-editor ${Xm}`;
function Qm(e) {
  e == null || e.focus(), e == null || e.select();
}
function MT({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ P("input", {
    className: Zm,
    ref: Qm,
    value: e[t.key],
    onChange: (i) => n({
      ...e,
      [t.key]: i.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const gt = {
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
}, Jm = {
  "--rdg-color": gt.gray800,
  "--rdg-header-color": gt.gray700,
  "--rdg-border-color": gt.gray400,
  "--rdg-background-color": gt.forcewhite,
  "--rdg-header-background-color": gt.forcewhite,
  "--rdg-row-hover-background-color": gt.forcewhite,
  "--rdg-row-selected-hover-background-color": gt.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": gt.primary400,
  "--rdg-row-selected-color": gt.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": gt.primary500,
  "--rdg-scrollbar-track-background": gt.gray100,
  "--rdg--scrollbar-thumb-hover-background": gt.primary500,
  "--rdg--scrollbar-track-hover-background": gt.gray200
};
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ci.apply(null, arguments);
}
function gu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var eh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, th = /* @__PURE__ */ gu(
  function(e) {
    return eh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function nh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function rh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var oh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var a;
      r.tags.length === 0 ? r.insertionPoint ? a = r.insertionPoint.nextSibling : r.prepend ? a = r.container.firstChild : a = r.before : a = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, a), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(rh(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = nh(i);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ot = "-ms-", ui = "-moz-", Be = "-webkit-", bu = "comm", ps = "rule", ms = "decl", ih = "@import", yu = "@keyframes", ah = "@layer", sh = Math.abs, $i = String.fromCharCode, lh = Object.assign;
function ch(e, t) {
  return Tt(e, 0) ^ 45 ? (((t << 2 ^ Tt(e, 0)) << 2 ^ Tt(e, 1)) << 2 ^ Tt(e, 2)) << 2 ^ Tt(e, 3) : 0;
}
function vu(e) {
  return e.trim();
}
function uh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _e(e, t, n) {
  return e.replace(t, n);
}
function ja(e, t) {
  return e.indexOf(t);
}
function Tt(e, t) {
  return e.charCodeAt(t) | 0;
}
function go(e, t, n) {
  return e.slice(t, n);
}
function xn(e) {
  return e.length;
}
function hs(e) {
  return e.length;
}
function Ho(e, t) {
  return t.push(e), e;
}
function dh(e, t) {
  return e.map(t).join("");
}
var Mi = 1, Ar = 1, wu = 0, Bt = 0, pt = 0, Hr = "";
function Ni(e, t, n, r, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: a, line: Mi, column: Ar, length: s, return: "" };
}
function Kr(e, t) {
  return lh(Ni("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function fh() {
  return pt;
}
function ph() {
  return pt = Bt > 0 ? Tt(Hr, --Bt) : 0, Ar--, pt === 10 && (Ar = 1, Mi--), pt;
}
function Ut() {
  return pt = Bt < wu ? Tt(Hr, Bt++) : 0, Ar++, pt === 10 && (Ar = 1, Mi++), pt;
}
function On() {
  return Tt(Hr, Bt);
}
function ei() {
  return Bt;
}
function Po(e, t) {
  return go(Hr, e, t);
}
function bo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function xu(e) {
  return Mi = Ar = 1, wu = xn(Hr = e), Bt = 0, [];
}
function Cu(e) {
  return Hr = "", e;
}
function ti(e) {
  return vu(Po(Bt - 1, za(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mh(e) {
  for (; (pt = On()) && pt < 33; )
    Ut();
  return bo(e) > 2 || bo(pt) > 3 ? "" : " ";
}
function hh(e, t) {
  for (; --t && Ut() && !(pt < 48 || pt > 102 || pt > 57 && pt < 65 || pt > 70 && pt < 97); )
    ;
  return Po(e, ei() + (t < 6 && On() == 32 && Ut() == 32));
}
function za(e) {
  for (; Ut(); )
    switch (pt) {
      case e:
        return Bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && za(pt);
        break;
      case 40:
        e === 41 && za(e);
        break;
      case 92:
        Ut();
        break;
    }
  return Bt;
}
function gh(e, t) {
  for (; Ut() && e + pt !== 57; )
    if (e + pt === 84 && On() === 47)
      break;
  return "/*" + Po(t, Bt - 1) + "*" + $i(e === 47 ? e : Ut());
}
function bh(e) {
  for (; !bo(On()); )
    Ut();
  return Po(e, Bt);
}
function yh(e) {
  return Cu(ni("", null, null, null, [""], e = xu(e), 0, [0], e));
}
function ni(e, t, n, r, i, a, s, l, c) {
  for (var d = 0, f = 0, p = s, g = 0, h = 0, b = 0, u = 1, y = 1, C = 1, S = 0, v = "", w = i, x = a, R = r, E = v; y; )
    switch (b = S, S = Ut()) {
      case 40:
        if (b != 108 && Tt(E, p - 1) == 58) {
          ja(E += _e(ti(S), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += ti(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += mh(b);
        break;
      case 92:
        E += hh(ei() - 1, 7);
        continue;
      case 47:
        switch (On()) {
          case 42:
          case 47:
            Ho(vh(gh(Ut(), ei()), t, n), c);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * u:
        l[d++] = xn(E) * C;
      case 125 * u:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            C == -1 && (E = _e(E, /\f/g, "")), h > 0 && xn(E) - p && Ho(h > 32 ? ll(E + ";", r, n, p - 1) : ll(_e(E, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            E += ";";
          default:
            if (Ho(R = sl(E, t, n, d, f, i, l, v, w = [], x = [], p), a), S === 123)
              if (f === 0)
                ni(E, t, R, R, w, a, p, l, x);
              else
                switch (g === 99 && Tt(E, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ni(e, R, R, r && Ho(sl(e, R, R, 0, 0, i, l, v, i, w = [], p), x), i, x, p, l, r ? w : x);
                    break;
                  default:
                    ni(E, R, R, R, [""], x, 0, l, x);
                }
        }
        d = f = h = 0, u = C = 1, v = E = "", p = s;
        break;
      case 58:
        p = 1 + xn(E), h = b;
      default:
        if (u < 1) {
          if (S == 123)
            --u;
          else if (S == 125 && u++ == 0 && ph() == 125)
            continue;
        }
        switch (E += $i(S), S * u) {
          case 38:
            C = f > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            l[d++] = (xn(E) - 1) * C, C = 1;
            break;
          case 64:
            On() === 45 && (E += ti(Ut())), g = On(), f = p = xn(v = E += bh(ei())), S++;
            break;
          case 45:
            b === 45 && xn(E) == 2 && (u = 0);
        }
    }
  return a;
}
function sl(e, t, n, r, i, a, s, l, c, d, f) {
  for (var p = i - 1, g = i === 0 ? a : [""], h = hs(g), b = 0, u = 0, y = 0; b < r; ++b)
    for (var C = 0, S = go(e, p + 1, p = sh(u = s[b])), v = e; C < h; ++C)
      (v = vu(u > 0 ? g[C] + " " + S : _e(S, /&\f/g, g[C]))) && (c[y++] = v);
  return Ni(e, t, n, i === 0 ? ps : l, c, d, f);
}
function vh(e, t, n) {
  return Ni(e, t, n, bu, $i(fh()), go(e, 2, -2), 0);
}
function ll(e, t, n, r) {
  return Ni(e, t, n, ms, go(e, 0, r), go(e, r + 1, -1), r);
}
function Ir(e, t) {
  for (var n = "", r = hs(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function wh(e, t, n, r) {
  switch (e.type) {
    case ah:
      if (e.children.length) break;
    case ih:
    case ms:
      return e.return = e.return || e.value;
    case bu:
      return "";
    case yu:
      return e.return = e.value + "{" + Ir(e.children, r) + "}";
    case ps:
      e.value = e.props.join(",");
  }
  return xn(n = Ir(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function xh(e) {
  var t = hs(e);
  return function(n, r, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, i, a) || "";
    return s;
  };
}
function Ch(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Th = function(t, n, r) {
  for (var i = 0, a = 0; i = a, a = On(), i === 38 && a === 12 && (n[r] = 1), !bo(a); )
    Ut();
  return Po(t, Bt);
}, Sh = function(t, n) {
  var r = -1, i = 44;
  do
    switch (bo(i)) {
      case 0:
        i === 38 && On() === 12 && (n[r] = 1), t[r] += Th(Bt - 1, n, r);
        break;
      case 2:
        t[r] += ti(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = On() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += $i(i);
    }
  while (i = Ut());
  return t;
}, Eh = function(t, n) {
  return Cu(Sh(xu(t), n));
}, cl = /* @__PURE__ */ new WeakMap(), Oh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !cl.get(r)) && !i) {
      cl.set(t, !0);
      for (var a = [], s = Eh(n, a), l = r.props, c = 0, d = 0; c < s.length; c++)
        for (var f = 0; f < l.length; f++, d++)
          t.props[d] = a[c] ? s[c].replace(/&\f/g, l[f]) : l[f] + " " + s[c];
    }
  }
}, Rh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Tu(e, t) {
  switch (ch(e, t)) {
    case 5103:
      return Be + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + e + ui + e + Ot + e + e;
    case 6828:
    case 4268:
      return Be + e + Ot + e + e;
    case 6165:
      return Be + e + Ot + "flex-" + e + e;
    case 5187:
      return Be + e + _e(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Ot + "flex-$1$2") + e;
    case 5443:
      return Be + e + Ot + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + Ot + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + Ot + _e(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + Ot + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + _e(e, "-grow", "") + Be + e + Ot + _e(e, "grow", "positive") + e;
    case 4554:
      return Be + _e(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Ot + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, Be + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xn(e) - 1 - t > 6) switch (Tt(e, t + 1)) {
        case 109:
          if (Tt(e, t + 4) !== 45) break;
        case 102:
          return _e(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + ui + (Tt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~ja(e, "stretch") ? Tu(_e(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Tt(e, t + 1) !== 115) break;
    case 6444:
      switch (Tt(e, xn(e) - 3 - (~ja(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + Be) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (Tt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Ot + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Tt(e, t + 11)) {
        case 114:
          return Be + e + Ot + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + Ot + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + Ot + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + Ot + e + e;
  }
  return e;
}
var Ph = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ms:
      t.return = Tu(t.value, t.length);
      break;
    case yu:
      return Ir([Kr(t, {
        value: _e(t.value, "@", "@" + Be)
      })], i);
    case ps:
      if (t.length) return dh(t.props, function(a) {
        switch (uh(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ir([Kr(t, {
              props: [_e(a, /:(read-\w+)/, ":" + ui + "$1")]
            })], i);
          case "::placeholder":
            return Ir([Kr(t, {
              props: [_e(a, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), Kr(t, {
              props: [_e(a, /:(plac\w+)/, ":" + ui + "$1")]
            }), Kr(t, {
              props: [_e(a, /:(plac\w+)/, Ot + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Ih = [Ph], kh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(u) {
      var y = u.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Ih, a = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(u) {
      for (var y = u.getAttribute("data-emotion").split(" "), C = 1; C < y.length; C++)
        a[y[C]] = !0;
      l.push(u);
    }
  );
  var c, d = [Oh, Rh];
  {
    var f, p = [wh, Ch(function(u) {
      f.insert(u);
    })], g = xh(d.concat(i, p)), h = function(y) {
      return Ir(yh(y), g);
    };
    c = function(y, C, S, v) {
      f = S, h(y ? y + "{" + C.styles + "}" : C.styles), v && (b.inserted[C.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new oh({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return b.sheet.hydrate(l), b;
};
function $h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wa = { exports: {} }, ze = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul;
function Mh() {
  if (ul) return ze;
  ul = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var R = x.$$typeof;
      switch (R) {
        case t:
          switch (x = x.type, x) {
            case c:
            case d:
            case r:
            case a:
            case i:
            case p:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case f:
                case b:
                case h:
                case s:
                  return x;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function w(x) {
    return v(x) === d;
  }
  return ze.AsyncMode = c, ze.ConcurrentMode = d, ze.ContextConsumer = l, ze.ContextProvider = s, ze.Element = t, ze.ForwardRef = f, ze.Fragment = r, ze.Lazy = b, ze.Memo = h, ze.Portal = n, ze.Profiler = a, ze.StrictMode = i, ze.Suspense = p, ze.isAsyncMode = function(x) {
    return w(x) || v(x) === c;
  }, ze.isConcurrentMode = w, ze.isContextConsumer = function(x) {
    return v(x) === l;
  }, ze.isContextProvider = function(x) {
    return v(x) === s;
  }, ze.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ze.isForwardRef = function(x) {
    return v(x) === f;
  }, ze.isFragment = function(x) {
    return v(x) === r;
  }, ze.isLazy = function(x) {
    return v(x) === b;
  }, ze.isMemo = function(x) {
    return v(x) === h;
  }, ze.isPortal = function(x) {
    return v(x) === n;
  }, ze.isProfiler = function(x) {
    return v(x) === a;
  }, ze.isStrictMode = function(x) {
    return v(x) === i;
  }, ze.isSuspense = function(x) {
    return v(x) === p;
  }, ze.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === d || x === a || x === i || x === p || x === g || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === h || x.$$typeof === s || x.$$typeof === l || x.$$typeof === f || x.$$typeof === y || x.$$typeof === C || x.$$typeof === S || x.$$typeof === u);
  }, ze.typeOf = v, ze;
}
var We = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dl;
function Nh() {
  return dl || (dl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function v(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === r || B === d || B === a || B === i || B === p || B === g || typeof B == "object" && B !== null && (B.$$typeof === b || B.$$typeof === h || B.$$typeof === s || B.$$typeof === l || B.$$typeof === f || B.$$typeof === y || B.$$typeof === C || B.$$typeof === S || B.$$typeof === u);
    }
    function w(B) {
      if (typeof B == "object" && B !== null) {
        var pe = B.$$typeof;
        switch (pe) {
          case t:
            var ue = B.type;
            switch (ue) {
              case c:
              case d:
              case r:
              case a:
              case i:
              case p:
                return ue;
              default:
                var me = ue && ue.$$typeof;
                switch (me) {
                  case l:
                  case f:
                  case b:
                  case h:
                  case s:
                    return me;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var x = c, R = d, E = l, k = s, I = t, m = f, O = r, $ = b, N = h, j = n, M = a, L = i, H = p, ee = !1;
    function q(B) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(B) || w(B) === c;
    }
    function W(B) {
      return w(B) === d;
    }
    function U(B) {
      return w(B) === l;
    }
    function ie(B) {
      return w(B) === s;
    }
    function J(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function D(B) {
      return w(B) === f;
    }
    function F(B) {
      return w(B) === r;
    }
    function G(B) {
      return w(B) === b;
    }
    function A(B) {
      return w(B) === h;
    }
    function z(B) {
      return w(B) === n;
    }
    function X(B) {
      return w(B) === a;
    }
    function K(B) {
      return w(B) === i;
    }
    function ae(B) {
      return w(B) === p;
    }
    We.AsyncMode = x, We.ConcurrentMode = R, We.ContextConsumer = E, We.ContextProvider = k, We.Element = I, We.ForwardRef = m, We.Fragment = O, We.Lazy = $, We.Memo = N, We.Portal = j, We.Profiler = M, We.StrictMode = L, We.Suspense = H, We.isAsyncMode = q, We.isConcurrentMode = W, We.isContextConsumer = U, We.isContextProvider = ie, We.isElement = J, We.isForwardRef = D, We.isFragment = F, We.isLazy = G, We.isMemo = A, We.isPortal = z, We.isProfiler = X, We.isStrictMode = K, We.isSuspense = ae, We.isValidElementType = v, We.typeOf = w;
  }()), We;
}
process.env.NODE_ENV === "production" ? Wa.exports = Mh() : Wa.exports = Nh();
var gs = Wa.exports, Su = gs, Dh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ah = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Eu = {};
Eu[Su.ForwardRef] = Dh;
Eu[Su.Memo] = Ah;
var Lh = !0;
function Fh(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var Ou = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Lh === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Ru = function(t, n, r) {
  Ou(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Bh(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var _h = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, jh = /[A-Z]|^ms/g, zh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Pu = function(t) {
  return t.charCodeAt(1) === 45;
}, fl = function(t) {
  return t != null && typeof t != "boolean";
}, ha = /* @__PURE__ */ gu(function(e) {
  return Pu(e) ? e : e.replace(jh, "-$&").toLowerCase();
}), pl = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(zh, function(r, i, a) {
          return Cn = {
            name: i,
            styles: a,
            next: Cn
          }, i;
        });
  }
  return _h[t] !== 1 && !Pu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function yo(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return Cn = {
          name: i.name,
          styles: i.styles,
          next: Cn
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Cn = {
              name: s.name,
              styles: s.styles,
              next: Cn
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return Wh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Cn, d = n(e);
        return Cn = c, yo(e, t, d);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var p = t[f];
  return p !== void 0 ? p : f;
}
function Wh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += yo(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += a + "{" + t[l] + "}" : fl(l) && (r += ha(a) + ":" + pl(a, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var c = 0; c < s.length; c++)
          fl(s[c]) && (r += ha(a) + ":" + pl(a, s[c]) + ";");
      else {
        var d = yo(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            r += ha(a) + ":" + d + ";";
            break;
          }
          default:
            r += a + "{" + d + "}";
        }
      }
    }
  return r;
}
var ml = /label:\s*([^\s;{]+)\s*(;|$)/g, Cn;
function Di(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  Cn = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += yo(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += yo(n, t, e[l]), r) {
      var c = a;
      i += c[l];
    }
  ml.lastIndex = 0;
  for (var d = "", f; (f = ml.exec(i)) !== null; )
    d += "-" + f[1];
  var p = Bh(i) + d;
  return {
    name: p,
    styles: i,
    next: Cn
  };
}
var Vh = function(t) {
  return t();
}, Iu = T.useInsertionEffect ? T.useInsertionEffect : !1, Hh = Iu || Vh, hl = Iu || T.useLayoutEffect, ku = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ kh({
    key: "css"
  }) : null
);
ku.Provider;
var $u = function(t) {
  return /* @__PURE__ */ Pi(function(n, r) {
    var i = cn(ku);
    return t(n, i, r);
  });
}, bs = /* @__PURE__ */ T.createContext({}), Uh = /* @__PURE__ */ $u(function(e, t) {
  var n = e.styles, r = Di([n], void 0, T.useContext(bs)), i = T.useRef();
  return hl(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), hl(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && Ru(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function ys() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Di(t);
}
var Io = function() {
  var t = ys.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Yh = th, qh = function(t) {
  return t !== "theme";
}, gl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Yh : qh;
}, bl = function(t, n, r) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Gh = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Ou(n, r, i), Hh(function() {
    return Ru(n, r, i);
  }), null;
}, Kh = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = bl(t, n, r), c = l || gl(i), d = !c("as");
  return function() {
    var f = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && p.push("label:" + a + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      p.push(f[0][0]);
      for (var g = f.length, h = 1; h < g; h++)
        p.push(f[h], f[0][h]);
    }
    var b = $u(function(u, y, C) {
      var S = d && u.as || i, v = "", w = [], x = u;
      if (u.theme == null) {
        x = {};
        for (var R in u)
          x[R] = u[R];
        x.theme = T.useContext(bs);
      }
      typeof u.className == "string" ? v = Fh(y.registered, w, u.className) : u.className != null && (v = u.className + " ");
      var E = Di(p.concat(w), y.registered, x);
      v += y.key + "-" + E.name, s !== void 0 && (v += " " + s);
      var k = d && l === void 0 ? gl(S) : c, I = {};
      for (var m in u)
        d && m === "as" || k(m) && (I[m] = u[m]);
      return I.className = v, C && (I.ref = C), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Gh, {
        cache: y,
        serialized: E,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ T.createElement(S, I));
    });
    return b.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(u, y) {
      return e(u, ci({}, n, y, {
        shouldForwardProp: bl(b, y, !0)
      })).apply(void 0, p);
    }, b;
  };
}, Xh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Pn = Kh.bind();
Xh.forEach(function(e) {
  Pn[e] = Pn(e);
});
const Zh = Pn.div`
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

    .rdg-no-data {
        text-align: center;
        grid-column: 1/-1;
    }

    .rdg-cell-resizable {
        > div {
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
var Pr = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(Pr || {}), vo = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(vo || {});
function Qh(e, t, n, r) {
  return (i, a) => {
    const s = r ? r(i) : i[e], l = r ? r(a) : a[e];
    try {
      if (n)
        return n(s, l, i, a);
      if (t === Pr.NUMBER) {
        const c = Number(s), d = Number(l);
        return isNaN(c) || isNaN(d) ? (console.warn("Invalid number for sorting:", { a: s, b: l }), isNaN(c) ? 1 : -1) : c - d;
      } else if (t === Pr.DATE) {
        const c = new Date(s).getTime(), d = new Date(l).getTime();
        return isNaN(c) || isNaN(d) ? (console.warn("Invalid date for sorting:", { a: s, b: l }), isNaN(c) ? 1 : -1) : c - d;
      }
      return t === Pr.STRING || !t ? String(s).localeCompare(String(l)) : t === Pr.BOOLEAN ? +!!s - +!!l : 0;
    } catch (c) {
      return console.error("Error in sorting:", c), 0;
    }
  };
}
const Jh = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, i] = vt(n ?? []), a = Je(() => r.length === 0 ? t : [...t].sort((l, c) => {
    for (const d of r) {
      const f = e.find((h) => h.key === d.columnKey), g = Qh(
        d.columnKey,
        f == null ? void 0 : f.type,
        f == null ? void 0 : f.sortComparator,
        f == null ? void 0 : f.getColumnValue
      )(l, c);
      if (g !== 0)
        return d.direction === "ASC" ? g : -g;
    }
    return 0;
  }), [t, r]), s = St((l) => {
    l.length !== 0 ? i(l) : i((c) => c.length === 1 ? [
      {
        columnKey: c[0].columnKey,
        direction: c[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : c);
  }, []);
  return {
    sortedRows: a,
    sortColumns: r,
    setSortedColumns: s
  };
};
function In(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
var Va = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ga, yl;
function eg() {
  if (yl) return ga;
  yl = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ga = i() ? Object.assign : function(a, s) {
    for (var l, c = r(a), d, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        d = e(l);
        for (var g = 0; g < d.length; g++)
          n.call(l, d[g]) && (c[d[g]] = l[d[g]]);
      }
    }
    return c;
  }, ga;
}
var ba, vl;
function vs() {
  if (vl) return ba;
  vl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ba = e, ba;
}
var ya, wl;
function Mu() {
  return wl || (wl = 1, ya = Function.call.bind(Object.prototype.hasOwnProperty)), ya;
}
var va, xl;
function tg() {
  if (xl) return va;
  xl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = vs(), n = {}, r = Mu();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (r(a, f)) {
          var p;
          try {
            if (typeof a[f] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = a[f](s, f, c, l, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + l + " type: " + p.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, va = i, va;
}
var wa, Cl;
function ng() {
  if (Cl) return wa;
  Cl = 1;
  var e = gs, t = eg(), n = vs(), r = Mu(), i = tg(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return wa = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(W) {
      var U = W && (d && W[d] || W[f]);
      if (typeof U == "function")
        return U;
    }
    var g = "<<anonymous>>", h = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: S(),
      arrayOf: v,
      element: w(),
      elementType: x(),
      instanceOf: R,
      node: m(),
      objectOf: k,
      oneOf: E,
      oneOfType: I,
      shape: $,
      exact: N
    };
    function b(W, U) {
      return W === U ? W !== 0 || 1 / W === 1 / U : W !== W && U !== U;
    }
    function u(W, U) {
      this.message = W, this.data = U && typeof U == "object" ? U : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function y(W) {
      if (process.env.NODE_ENV !== "production")
        var U = {}, ie = 0;
      function J(F, G, A, z, X, K, ae) {
        if (z = z || g, K = K || A, ae !== n) {
          if (c) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = z + ":" + A;
            !U[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            ie < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), U[pe] = !0, ie++);
          }
        }
        return G[A] == null ? F ? G[A] === null ? new u("The " + X + " `" + K + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new u("The " + X + " `" + K + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : W(G, A, z, X, K);
      }
      var D = J.bind(null, !1);
      return D.isRequired = J.bind(null, !0), D;
    }
    function C(W) {
      function U(ie, J, D, F, G, A) {
        var z = ie[J], X = L(z);
        if (X !== W) {
          var K = H(z);
          return new u(
            "Invalid " + F + " `" + G + "` of type " + ("`" + K + "` supplied to `" + D + "`, expected ") + ("`" + W + "`."),
            { expectedType: W }
          );
        }
        return null;
      }
      return y(U);
    }
    function S() {
      return y(s);
    }
    function v(W) {
      function U(ie, J, D, F, G) {
        if (typeof W != "function")
          return new u("Property `" + G + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var A = ie[J];
        if (!Array.isArray(A)) {
          var z = L(A);
          return new u("Invalid " + F + " `" + G + "` of type " + ("`" + z + "` supplied to `" + D + "`, expected an array."));
        }
        for (var X = 0; X < A.length; X++) {
          var K = W(A, X, D, F, G + "[" + X + "]", n);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return y(U);
    }
    function w() {
      function W(U, ie, J, D, F) {
        var G = U[ie];
        if (!l(G)) {
          var A = L(G);
          return new u("Invalid " + D + " `" + F + "` of type " + ("`" + A + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(W);
    }
    function x() {
      function W(U, ie, J, D, F) {
        var G = U[ie];
        if (!e.isValidElementType(G)) {
          var A = L(G);
          return new u("Invalid " + D + " `" + F + "` of type " + ("`" + A + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(W);
    }
    function R(W) {
      function U(ie, J, D, F, G) {
        if (!(ie[J] instanceof W)) {
          var A = W.name || g, z = q(ie[J]);
          return new u("Invalid " + F + " `" + G + "` of type " + ("`" + z + "` supplied to `" + D + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return y(U);
    }
    function E(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function U(ie, J, D, F, G) {
        for (var A = ie[J], z = 0; z < W.length; z++)
          if (b(A, W[z]))
            return null;
        var X = JSON.stringify(W, function(ae, B) {
          var pe = H(B);
          return pe === "symbol" ? String(B) : B;
        });
        return new u("Invalid " + F + " `" + G + "` of value `" + String(A) + "` " + ("supplied to `" + D + "`, expected one of " + X + "."));
      }
      return y(U);
    }
    function k(W) {
      function U(ie, J, D, F, G) {
        if (typeof W != "function")
          return new u("Property `" + G + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var A = ie[J], z = L(A);
        if (z !== "object")
          return new u("Invalid " + F + " `" + G + "` of type " + ("`" + z + "` supplied to `" + D + "`, expected an object."));
        for (var X in A)
          if (r(A, X)) {
            var K = W(A, X, D, F, G + "." + X, n);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return y(U);
    }
    function I(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var U = 0; U < W.length; U++) {
        var ie = W[U];
        if (typeof ie != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(ie) + " at index " + U + "."
          ), s;
      }
      function J(D, F, G, A, z) {
        for (var X = [], K = 0; K < W.length; K++) {
          var ae = W[K], B = ae(D, F, G, A, z, n);
          if (B == null)
            return null;
          B.data && r(B.data, "expectedType") && X.push(B.data.expectedType);
        }
        var pe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new u("Invalid " + A + " `" + z + "` supplied to " + ("`" + G + "`" + pe + "."));
      }
      return y(J);
    }
    function m() {
      function W(U, ie, J, D, F) {
        return j(U[ie]) ? null : new u("Invalid " + D + " `" + F + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return y(W);
    }
    function O(W, U, ie, J, D) {
      return new u(
        (W || "React class") + ": " + U + " type `" + ie + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function $(W) {
      function U(ie, J, D, F, G) {
        var A = ie[J], z = L(A);
        if (z !== "object")
          return new u("Invalid " + F + " `" + G + "` of type `" + z + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var X in W) {
          var K = W[X];
          if (typeof K != "function")
            return O(D, F, G, X, H(K));
          var ae = K(A, X, D, F, G + "." + X, n);
          if (ae)
            return ae;
        }
        return null;
      }
      return y(U);
    }
    function N(W) {
      function U(ie, J, D, F, G) {
        var A = ie[J], z = L(A);
        if (z !== "object")
          return new u("Invalid " + F + " `" + G + "` of type `" + z + "` " + ("supplied to `" + D + "`, expected `object`."));
        var X = t({}, ie[J], W);
        for (var K in X) {
          var ae = W[K];
          if (r(W, K) && typeof ae != "function")
            return O(D, F, G, K, H(ae));
          if (!ae)
            return new u(
              "Invalid " + F + " `" + G + "` key `" + K + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(ie[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(W), null, "  ")
            );
          var B = ae(A, K, D, F, G + "." + K, n);
          if (B)
            return B;
        }
        return null;
      }
      return y(U);
    }
    function j(W) {
      switch (typeof W) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !W;
        case "object":
          if (Array.isArray(W))
            return W.every(j);
          if (W === null || l(W))
            return !0;
          var U = p(W);
          if (U) {
            var ie = U.call(W), J;
            if (U !== W.entries) {
              for (; !(J = ie.next()).done; )
                if (!j(J.value))
                  return !1;
            } else
              for (; !(J = ie.next()).done; ) {
                var D = J.value;
                if (D && !j(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function M(W, U) {
      return W === "symbol" ? !0 : U ? U["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && U instanceof Symbol : !1;
    }
    function L(W) {
      var U = typeof W;
      return Array.isArray(W) ? "array" : W instanceof RegExp ? "object" : M(U, W) ? "symbol" : U;
    }
    function H(W) {
      if (typeof W > "u" || W === null)
        return "" + W;
      var U = L(W);
      if (U === "object") {
        if (W instanceof Date)
          return "date";
        if (W instanceof RegExp)
          return "regexp";
      }
      return U;
    }
    function ee(W) {
      var U = H(W);
      switch (U) {
        case "array":
        case "object":
          return "an " + U;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + U;
        default:
          return U;
      }
    }
    function q(W) {
      return !W.constructor || !W.constructor.name ? g : W.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, wa;
}
var xa, Tl;
function rg() {
  if (Tl) return xa;
  Tl = 1;
  var e = vs();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, xa = function() {
    function r(s, l, c, d, f, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, xa;
}
if (process.env.NODE_ENV !== "production") {
  var og = gs, ig = !0;
  Va.exports = ng()(og.isElement, ig);
} else
  Va.exports = rg()();
var ag = Va.exports;
const o = /* @__PURE__ */ $h(ag);
function sg(e) {
  return e == null || Object.keys(e).length === 0;
}
function Nu(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ P(Uh, {
    styles: typeof t == "function" ? (i) => t(sg(i) ? n : i) : t
  });
}
process.env.NODE_ENV !== "production" && (Nu.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Du(e, t) {
  const n = Pn(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function lg(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Sl = [];
function Kn(e) {
  return Sl[0] = e, Di(Sl);
}
var Ha = { exports: {} }, Ue = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var El;
function cg() {
  if (El) return Ue;
  El = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function b(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
        case e:
          switch (u = u.type, u) {
            case n:
            case i:
            case r:
            case c:
            case d:
            case g:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case l:
                case p:
                case f:
                  return u;
                case a:
                  return u;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ue.ContextConsumer = a, Ue.ContextProvider = s, Ue.Element = e, Ue.ForwardRef = l, Ue.Fragment = n, Ue.Lazy = p, Ue.Memo = f, Ue.Portal = t, Ue.Profiler = i, Ue.StrictMode = r, Ue.Suspense = c, Ue.SuspenseList = d, Ue.isContextConsumer = function(u) {
    return b(u) === a;
  }, Ue.isContextProvider = function(u) {
    return b(u) === s;
  }, Ue.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, Ue.isForwardRef = function(u) {
    return b(u) === l;
  }, Ue.isFragment = function(u) {
    return b(u) === n;
  }, Ue.isLazy = function(u) {
    return b(u) === p;
  }, Ue.isMemo = function(u) {
    return b(u) === f;
  }, Ue.isPortal = function(u) {
    return b(u) === t;
  }, Ue.isProfiler = function(u) {
    return b(u) === i;
  }, Ue.isStrictMode = function(u) {
    return b(u) === r;
  }, Ue.isSuspense = function(u) {
    return b(u) === c;
  }, Ue.isSuspenseList = function(u) {
    return b(u) === d;
  }, Ue.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === r || u === c || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === h || u.getModuleId !== void 0);
  }, Ue.typeOf = b, Ue;
}
var Ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ol;
function ug() {
  return Ol || (Ol = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var y = u.$$typeof;
        switch (y) {
          case t:
            switch (u = u.type, u) {
              case r:
              case a:
              case i:
              case d:
              case f:
              case h:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case g:
                  case p:
                    return u;
                  case s:
                    return u;
                  default:
                    return y;
                }
            }
          case n:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    Ye.ContextConsumer = s, Ye.ContextProvider = l, Ye.Element = t, Ye.ForwardRef = c, Ye.Fragment = r, Ye.Lazy = g, Ye.Memo = p, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = i, Ye.Suspense = d, Ye.SuspenseList = f, Ye.isContextConsumer = function(u) {
      return e(u) === s;
    }, Ye.isContextProvider = function(u) {
      return e(u) === l;
    }, Ye.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Ye.isForwardRef = function(u) {
      return e(u) === c;
    }, Ye.isFragment = function(u) {
      return e(u) === r;
    }, Ye.isLazy = function(u) {
      return e(u) === g;
    }, Ye.isMemo = function(u) {
      return e(u) === p;
    }, Ye.isPortal = function(u) {
      return e(u) === n;
    }, Ye.isProfiler = function(u) {
      return e(u) === a;
    }, Ye.isStrictMode = function(u) {
      return e(u) === i;
    }, Ye.isSuspense = function(u) {
      return e(u) === d;
    }, Ye.isSuspenseList = function(u) {
      return e(u) === f;
    }, Ye.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === a || u === i || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === p || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === b || u.getModuleId !== void 0);
    }, Ye.typeOf = e;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? Ha.exports = cg() : Ha.exports = ug();
var di = Ha.exports;
function Sn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Au(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || di.isValidElementType(e) || !Sn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Au(e[n]);
  }), t;
}
function Rt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Sn(e) && Sn(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ T.isValidElement(t[i]) || di.isValidElementType(t[i]) ? r[i] = t[i] : Sn(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Sn(e[i]) ? r[i] = Rt(e[i], t[i], n) : n.clone ? r[i] = Sn(t[i]) ? Au(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const dg = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function fg(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5,
    ...i
  } = e, a = dg(t), s = Object.keys(a);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - r / 100}${n})`;
  }
  function d(g, h) {
    const b = s.indexOf(h);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : h) - r / 100}${n})`;
  }
  function f(g) {
    return s.indexOf(g) + 1 < s.length ? d(g, s[s.indexOf(g) + 1]) : l(g);
  }
  function p(g) {
    const h = s.indexOf(g);
    return h === 0 ? l(s[1]) : h === s.length - 1 ? c(s[h]) : d(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: d,
    only: f,
    not: p,
    unit: n,
    ...i
  };
}
function Rl(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var s, l;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(a)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(a)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((r, i) => {
    const a = t[i];
    return delete r[i], r[i] = a, r;
  }, {
    ...t
  }) : t;
}
function pg(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function mg(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : In(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function hg(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function n(a, s) {
    a.up = (...l) => t(e.breakpoints.up(...l), s), a.down = (...l) => t(e.breakpoints.down(...l), s), a.between = (...l) => t(e.breakpoints.between(...l), s), a.only = (...l) => t(e.breakpoints.only(...l), s), a.not = (...l) => {
      const c = t(e.breakpoints.not(...l), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, i = (a) => (n(r, a), r);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const gg = {
  borderRadius: 4
}, Jn = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function lo(e, t) {
  return t ? Rt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ai = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Pl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ai[e]}px)`
}, bg = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ai[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Fn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || Pl;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || Pl;
    return Object.keys(t).reduce((s, l) => {
      if (pg(a.keys, l)) {
        const c = mg(r.containerQueries ? r : bg, l);
        c && (s[c] = n(t[l], l));
      } else if (Object.keys(a.values || Ai).includes(l)) {
        const c = a.up(l);
        s[c] = n(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function yg(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function Il(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function re(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : In(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Li(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function fi(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Li(e, n) || r, t && (i = t(i, r, e)), i;
}
function dt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, d = Li(c, r) || {};
    return Fn(s, l, (p) => {
      let g = fi(d, i, p);
      return p === g && typeof p == "string" && (g = fi(d, i, `${t}${p === "default" ? "" : re(p)}`, p)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Jn
  } : {}, a.filterProps = [t], a;
}
function vg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const wg = {
  m: "margin",
  p: "padding"
}, xg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Cg = vg((e) => {
  if (e.length > 2)
    if (kl[e])
      e = kl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = wg[t], i = xg[n] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Fi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Bi = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Tg = [...Fi, ...Bi];
function ko(e, t, n, r) {
  const i = Li(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), typeof i == "string" ? `calc(${a} * ${i})` : i * a) : Array.isArray(i) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[s];
    return a >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ws(e) {
  return ko(e, "spacing", 8, "spacing");
}
function $o(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Sg(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = $o(t, n), r), {});
}
function Eg(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = Cg(n), a = Sg(i, r), s = e[n];
  return Fn(e, s, a);
}
function Lu(e, t) {
  const n = ws(e.theme);
  return Object.keys(e).map((r) => Eg(e, t, r, n)).reduce(lo, {});
}
function at(e) {
  return Lu(e, Fi);
}
at.propTypes = process.env.NODE_ENV !== "production" ? Fi.reduce((e, t) => (e[t] = Jn, e), {}) : {};
at.filterProps = Fi;
function st(e) {
  return Lu(e, Bi);
}
st.propTypes = process.env.NODE_ENV !== "production" ? Bi.reduce((e, t) => (e[t] = Jn, e), {}) : {};
st.filterProps = Bi;
process.env.NODE_ENV !== "production" && Tg.reduce((e, t) => (e[t] = Jn, e), {});
function Fu(e = 8, t = ws({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function _i(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, a) => t[a] ? lo(i, t[a](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function en(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function an(e, t) {
  return dt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Og = an("border", en), Rg = an("borderTop", en), Pg = an("borderRight", en), Ig = an("borderBottom", en), kg = an("borderLeft", en), $g = an("borderColor"), Mg = an("borderTopColor"), Ng = an("borderRightColor"), Dg = an("borderBottomColor"), Ag = an("borderLeftColor"), Lg = an("outline", en), Fg = an("outlineColor"), ji = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ko(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: $o(t, r)
    });
    return Fn(e, e.borderRadius, n);
  }
  return null;
};
ji.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Jn
} : {};
ji.filterProps = ["borderRadius"];
_i(Og, Rg, Pg, Ig, kg, $g, Mg, Ng, Dg, Ag, ji, Lg, Fg);
const zi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ko(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: $o(t, r)
    });
    return Fn(e, e.gap, n);
  }
  return null;
};
zi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Jn
} : {};
zi.filterProps = ["gap"];
const Wi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ko(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: $o(t, r)
    });
    return Fn(e, e.columnGap, n);
  }
  return null;
};
Wi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Jn
} : {};
Wi.filterProps = ["columnGap"];
const Vi = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ko(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: $o(t, r)
    });
    return Fn(e, e.rowGap, n);
  }
  return null;
};
Vi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Jn
} : {};
Vi.filterProps = ["rowGap"];
const Bg = dt({
  prop: "gridColumn"
}), _g = dt({
  prop: "gridRow"
}), jg = dt({
  prop: "gridAutoFlow"
}), zg = dt({
  prop: "gridAutoColumns"
}), Wg = dt({
  prop: "gridAutoRows"
}), Vg = dt({
  prop: "gridTemplateColumns"
}), Hg = dt({
  prop: "gridTemplateRows"
}), Ug = dt({
  prop: "gridTemplateAreas"
}), Yg = dt({
  prop: "gridArea"
});
_i(zi, Wi, Vi, Bg, _g, jg, zg, Wg, Vg, Hg, Ug, Yg);
function kr(e, t) {
  return t === "grey" ? t : e;
}
const qg = dt({
  prop: "color",
  themeKey: "palette",
  transform: kr
}), Gg = dt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: kr
}), Kg = dt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: kr
});
_i(qg, Gg, Kg);
function Vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Xg = dt({
  prop: "width",
  transform: Vt
}), xs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const r = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || Ai[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Vt(n)
      };
    };
    return Fn(e, e.maxWidth, t);
  }
  return null;
};
xs.filterProps = ["maxWidth"];
const Zg = dt({
  prop: "minWidth",
  transform: Vt
}), Qg = dt({
  prop: "height",
  transform: Vt
}), Jg = dt({
  prop: "maxHeight",
  transform: Vt
}), eb = dt({
  prop: "minHeight",
  transform: Vt
});
dt({
  prop: "size",
  cssProperty: "width",
  transform: Vt
});
dt({
  prop: "size",
  cssProperty: "height",
  transform: Vt
});
const tb = dt({
  prop: "boxSizing"
});
_i(Xg, xs, Zg, Qg, Jg, eb, tb);
const Mo = {
  // borders
  border: {
    themeKey: "borders",
    transform: en
  },
  borderTop: {
    themeKey: "borders",
    transform: en
  },
  borderRight: {
    themeKey: "borders",
    transform: en
  },
  borderBottom: {
    themeKey: "borders",
    transform: en
  },
  borderLeft: {
    themeKey: "borders",
    transform: en
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: en
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ji
  },
  // palette
  color: {
    themeKey: "palette",
    transform: kr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: kr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: kr
  },
  // spacing
  p: {
    style: st
  },
  pt: {
    style: st
  },
  pr: {
    style: st
  },
  pb: {
    style: st
  },
  pl: {
    style: st
  },
  px: {
    style: st
  },
  py: {
    style: st
  },
  padding: {
    style: st
  },
  paddingTop: {
    style: st
  },
  paddingRight: {
    style: st
  },
  paddingBottom: {
    style: st
  },
  paddingLeft: {
    style: st
  },
  paddingX: {
    style: st
  },
  paddingY: {
    style: st
  },
  paddingInline: {
    style: st
  },
  paddingInlineStart: {
    style: st
  },
  paddingInlineEnd: {
    style: st
  },
  paddingBlock: {
    style: st
  },
  paddingBlockStart: {
    style: st
  },
  paddingBlockEnd: {
    style: st
  },
  m: {
    style: at
  },
  mt: {
    style: at
  },
  mr: {
    style: at
  },
  mb: {
    style: at
  },
  ml: {
    style: at
  },
  mx: {
    style: at
  },
  my: {
    style: at
  },
  margin: {
    style: at
  },
  marginTop: {
    style: at
  },
  marginRight: {
    style: at
  },
  marginBottom: {
    style: at
  },
  marginLeft: {
    style: at
  },
  marginX: {
    style: at
  },
  marginY: {
    style: at
  },
  marginInline: {
    style: at
  },
  marginInlineStart: {
    style: at
  },
  marginInlineEnd: {
    style: at
  },
  marginBlock: {
    style: at
  },
  marginBlockStart: {
    style: at
  },
  marginBlockEnd: {
    style: at
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: zi
  },
  rowGap: {
    style: Vi
  },
  columnGap: {
    style: Wi
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Vt
  },
  maxWidth: {
    style: xs
  },
  minWidth: {
    transform: Vt
  },
  height: {
    transform: Vt
  },
  maxHeight: {
    transform: Vt
  },
  minHeight: {
    transform: Vt
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function nb(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function rb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ob() {
  function e(n, r, i, a) {
    const s = {
      [n]: r,
      theme: i
    }, l = a[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: d,
      transform: f,
      style: p
    } = l;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const g = Li(i, d) || {};
    return p ? p(s) : Fn(s, r, (b) => {
      let u = fi(g, f, b);
      return b === u && typeof b == "string" && (u = fi(g, f, `${n}${b === "default" ? "" : re(b)}`, b)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: i = {},
      nested: a
    } = n || {};
    if (!r)
      return null;
    const s = i.unstable_sxConfig ?? Mo;
    function l(c) {
      let d = c;
      if (typeof c == "function")
        d = c(i);
      else if (typeof c != "object")
        return c;
      if (!d)
        return null;
      const f = yg(i.breakpoints), p = Object.keys(f);
      let g = f;
      return Object.keys(d).forEach((h) => {
        const b = rb(d[h], i);
        if (b != null)
          if (typeof b == "object")
            if (s[h])
              g = lo(g, e(h, b, i, s));
            else {
              const u = Fn({
                theme: i
              }, b, (y) => ({
                [h]: y
              }));
              nb(u, b) ? g[h] = t({
                sx: b,
                theme: i,
                nested: !0
              }) : g = lo(g, u);
            }
          else
            g = lo(g, e(h, b, i, s));
      }), !a && i.modularCssLayers ? {
        "@layer sx": Rl(i, Il(p, g))
      } : Rl(i, Il(p, g));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const fr = ob();
fr.filterProps = ["sx"];
function ib(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Cs(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = fg(n), c = Fu(i);
  let d = Rt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...gg,
      ...a
    }
  }, s);
  return d = hg(d), d.applyStyles = ib, d = t.reduce((f, p) => Rt(f, p), d), d.unstable_sxConfig = {
    ...Mo,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return fr({
      sx: p,
      theme: this
    });
  }, d;
}
function ab(e) {
  return Object.keys(e).length === 0;
}
function sb(e = null) {
  const t = T.useContext(bs);
  return !t || ab(t) ? e : t;
}
const lb = Cs();
function Ts(e = lb) {
  return sb(e);
}
function Ca(e) {
  const t = Kn(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Bu({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ts(n), i = t && r[t] || r;
  let a = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => Ca(typeof s == "function" ? s(i) : s)) : a = Ca(a)), /* @__PURE__ */ P(Nu, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (Bu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const cb = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Mo;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function ub(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = cb(n);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return Sn(l) ? {
      ...r,
      ...l
    } : r;
  } : a = {
    ...r,
    ...t
  }, {
    ...i,
    sx: a
  };
}
const $l = (e) => e, db = () => {
  let e = $l;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = $l;
    }
  };
}, _u = db();
function fb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = Du("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(fr);
  return /* @__PURE__ */ T.forwardRef(function(c, d) {
    const f = Ts(n), {
      className: p,
      component: g = "div",
      ...h
    } = ub(c);
    return /* @__PURE__ */ P(a, {
      as: g,
      ref: d,
      className: de(p, i ? i(r) : r),
      theme: t && f[t] || f,
      ...h
    });
  });
}
const pb = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function De(e, t, n = "Mui") {
  const r = pb[t];
  return r ? `${n}-${r}` : `${_u.generate(e)}-${t}`;
}
function ke(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = De(e, i, n);
  }), r;
}
function ju(e, t = "") {
  return e.displayName || e.name || t;
}
function Ml(e, t, n) {
  const r = ju(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function mb(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ju(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case di.ForwardRef:
          return Ml(e, e.render, "ForwardRef");
        case di.Memo:
          return Ml(e, e.type, "memo");
        default:
          return;
      }
  }
}
function zu(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Kn(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Kn(i.style));
  }), r;
}
const hb = Cs();
function Ta(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function lr(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function gb(e) {
  return e ? (t, n) => n[e] : null;
}
function bb(e, t, n) {
  e.theme = xb(e.theme) ? n : e.theme[t] || e.theme;
}
function ri(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => ri(e, i, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let i;
    if (r.isProcessed)
      i = n ? lr(r.style, n) : r.style;
    else {
      const {
        variants: a,
        ...s
      } = r;
      i = n ? lr(Kn(s), n) : s;
    }
    return Wu(e, r.variants, [i], n);
  }
  return r != null && r.isProcessed ? n ? lr(Kn(r.style), n) : r.style : n ? lr(Kn(r), n) : r;
}
function Wu(e, t, n = [], r = void 0) {
  var a;
  let i;
  e: for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    if (typeof l.props == "function") {
      if (i ?? (i = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(i))
        continue;
    } else
      for (const c in l.props)
        if (e[c] !== l.props[c] && ((a = e.ownerState) == null ? void 0 : a[c]) !== l.props[c])
          continue e;
    typeof l.style == "function" ? (i ?? (i = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(r ? lr(Kn(l.style(i)), r) : l.style(i))) : n.push(r ? lr(Kn(l.style), r) : l.style);
  }
  return n;
}
function yb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = hb,
    rootShouldForwardProp: r = Ta,
    slotShouldForwardProp: i = Ta
  } = e;
  function a(l) {
    bb(l, t, n);
  }
  return (l, c = {}) => {
    lg(l, (R) => R.filter((E) => E !== fr));
    const {
      name: d,
      slot: f,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = gb(Vu(f)),
      ...b
    } = c, u = d && d.startsWith("Mui") || f ? "components" : "custom", y = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), C = g || !1;
    let S = Ta;
    f === "Root" || f === "root" ? S = r : f ? S = i : Cb(l) && (S = void 0);
    const v = Du(l, {
      shouldForwardProp: S,
      label: wb(d, f),
      ...b
    }), w = (R) => {
      if (R.__emotion_real === R)
        return R;
      if (typeof R == "function")
        return function(k) {
          return ri(k, R, k.theme.modularCssLayers ? u : void 0);
        };
      if (Sn(R)) {
        const E = zu(R);
        return function(I) {
          return E.variants ? ri(I, E, I.theme.modularCssLayers ? u : void 0) : I.theme.modularCssLayers ? lr(E.style, u) : E.style;
        };
      }
      return R;
    }, x = (...R) => {
      const E = [], k = R.map(w), I = [];
      if (E.push(a), d && h && I.push(function(N) {
        var H, ee;
        const M = (ee = (H = N.theme.components) == null ? void 0 : H[d]) == null ? void 0 : ee.styleOverrides;
        if (!M)
          return null;
        const L = {};
        for (const q in M)
          L[q] = ri(N, M[q], N.theme.modularCssLayers ? "theme" : void 0);
        return h(N, L);
      }), d && !y && I.push(function(N) {
        var L, H;
        const j = N.theme, M = (H = (L = j == null ? void 0 : j.components) == null ? void 0 : L[d]) == null ? void 0 : H.variants;
        return M ? Wu(N, M, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || I.push(fr), Array.isArray(k[0])) {
        const $ = k.shift(), N = new Array(E.length).fill(""), j = new Array(I.length).fill("");
        let M;
        M = [...N, ...$, ...j], M.raw = [...N, ...$.raw, ...j], E.unshift(M);
      }
      const m = [...E, ...k, ...I], O = v(...m);
      return l.muiName && (O.muiName = l.muiName), process.env.NODE_ENV !== "production" && (O.displayName = vb(d, f, l)), O;
    };
    return v.withConfig && (x.withConfig = v.withConfig), x;
  };
}
function vb(e, t, n) {
  return e ? `${e}${re(t || "")}` : `Styled(${mb(n)})`;
}
function wb(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Vu(t || "Root")}`), n;
}
function xb(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Cb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Vu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Ua(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], s = t[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const c = l;
              n[i][c] = Ua(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const kn = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function Tb(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Ss(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Tb(e, t, n);
}
function Sb(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xn(Sb(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : In(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : In(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Eb = (e) => {
  const t = Xn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ro = (e, t) => {
  try {
    return Eb(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Hi(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Hu(e) {
  e = Xn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (d, f = (d + n / 30) % 12) => i - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Hi({
    type: l,
    values: c
  });
}
function Ya(e) {
  e = Xn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xn(Hu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Nl(e, t) {
  const n = Ya(e), r = Ya(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Qe(e, t) {
  return e = Xn(e), t = Ss(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Hi(e);
}
function Uo(e, t, n) {
  try {
    return Qe(e, t);
  } catch {
    return e;
  }
}
function Ui(e, t) {
  if (e = Xn(e), t = Ss(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Hi(e);
}
function Xe(e, t, n) {
  try {
    return Ui(e, t);
  } catch {
    return e;
  }
}
function Yi(e, t) {
  if (e = Xn(e), t = Ss(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Hi(e);
}
function Ze(e, t, n) {
  try {
    return Yi(e, t);
  } catch {
    return e;
  }
}
function Ob(e, t = 0.15) {
  return Ya(e) > 0.5 ? Ui(e, t) : Yi(e, t);
}
function Yo(e, t, n) {
  try {
    return Ob(e, t);
  } catch {
    return e;
  }
}
function un(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Rb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Uu(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !Rb(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const No = un(o.element, Uu);
No.isRequired = un(o.element.isRequired, Uu);
function Pb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ib(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !Pb(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Es = un(o.elementType, Ib), kb = "exact-prop: ​";
function Yu(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [kb]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Bn(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Gt = o.oneOfType([o.func, o.object]);
function Dl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function qu(e, t = 166) {
  let n;
  function r(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Sa(e, t) {
  var n, r, i;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function Yt(e) {
  return e && e.ownerDocument || document;
}
function _n(e) {
  return Yt(e).defaultView || window;
}
function qa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Al = 0;
function $b(e) {
  const [t, n] = T.useState(e), r = e || t;
  return T.useEffect(() => {
    t == null && (Al += 1, n(`mui-${Al}`));
  }, [t]), r;
}
const Mb = {
  ...T
}, Ll = Mb.useId;
function Lr(e) {
  if (Ll !== void 0) {
    const t = Ll();
    return e ?? t;
  }
  return $b(e);
}
function Nb(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function $r({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = T.useRef(e !== void 0), [a, s] = T.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: d
    } = T.useRef(t);
    T.useEffect(() => {
      !i && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = T.useCallback((d) => {
    i || s(d);
  }, []);
  return [l, c];
}
function En(e) {
  const t = T.useRef(e);
  return kn(() => {
    t.current = e;
  }), T.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function mt(...e) {
  const t = T.useRef(void 0), n = T.useCallback((r) => {
    const i = e.map((a) => {
      if (a == null)
        return null;
      if (typeof a == "function") {
        const s = a, l = s(r);
        return typeof l == "function" ? l : () => {
          s(null);
        };
      }
      return a.current = r, () => {
        a.current = null;
      };
    });
    return () => {
      i.forEach((a) => a == null ? void 0 : a());
    };
  }, e);
  return T.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
const Fl = {};
function Gu(e, t) {
  const n = T.useRef(Fl);
  return n.current === Fl && (n.current = e(t)), n;
}
const Db = [];
function Ab(e) {
  T.useEffect(e, Db);
}
class Os {
  constructor() {
    Gr(this, "currentId", null);
    Gr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Gr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Os();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Ku() {
  const e = Gu(Os.create).current;
  return Ab(e.disposeEffect), e;
}
function Bl(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Xu(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
const Lb = (e) => {
  const t = T.useRef({});
  return T.useEffect(() => {
    t.current = e;
  }), t.current;
};
function Fb(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Zu(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = Fb(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Qu(e, t, ...n) {
  return e[t] === void 0 ? null : Zu(e, t, ...n);
}
function Ga() {
  return null;
}
Qu.isRequired = Zu;
Ga.isRequired = Ga;
const Mr = process.env.NODE_ENV === "production" ? Ga : Qu;
function Le(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const a = e[i];
    let s = "", l = !0;
    for (let c = 0; c < a.length; c += 1) {
      const d = a[c];
      d && (s += (l === !0 ? "" : " ") + t(d), l = !1, n && n[d] && (s += " " + n[d]));
    }
    r[i] = s;
  }
  return r;
}
function Bb(e) {
  return typeof e == "string";
}
function Ju(e, t, n) {
  return e === void 0 || Bb(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function ed(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function _l(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function td(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const h = de(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), b = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, u = {
      ...n,
      ...i,
      ...r
    };
    return h.length > 0 && (u.className = h), Object.keys(b).length > 0 && (u.style = b), {
      props: u,
      internalRef: void 0
    };
  }
  const s = ed({
    ...i,
    ...r
  }), l = _l(r), c = _l(i), d = t(s), f = de(d == null ? void 0 : d.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = {
    ...d == null ? void 0 : d.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, g = {
    ...d,
    ...n,
    ...c,
    ...l
  };
  return f.length > 0 && (g.className = f), Object.keys(p).length > 0 && (g.style = p), {
    props: g,
    internalRef: d.ref
  };
}
function nd(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ka(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : nd(n, r), {
    props: l,
    internalRef: c
  } = td({
    ...a,
    externalSlotProps: s
  }), d = mt(c, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Ju(t, {
    ...l,
    ref: d
  }, r);
}
function Do(e) {
  var t;
  return parseInt(T.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const _b = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const Rs = () => T.useContext(_b) ?? !1, jb = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function zb(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? Ua(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Ua(i, r) : r;
}
function Wb({
  props: e,
  name: t
}) {
  const n = T.useContext(jb);
  return zb({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const jl = {
  theme: void 0
};
function Vb(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (jl.theme = i.theme, a = zu(e(jl)), t = a, n = i.theme), a;
  };
}
function Hb(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const zl = (e, t, n, r = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, Ub = (e, t, n) => {
  function r(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  r(e);
}, Yb = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Ea(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, s = {};
  return Ub(
    e,
    (l, c, d) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const f = `--${n ? `${n}-` : ""}${l.join("-")}`, p = Yb(l, c);
        Object.assign(i, {
          [f]: p
        }), zl(a, l, `var(${f})`, d), zl(s, l, `var(${f}, ${p})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: a,
    varsWithDefaults: s
  };
}
function qb(e, t = {}) {
  const {
    getSelector: n = y,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: d,
    css: f,
    varsWithDefaults: p
  } = Ea(c, t);
  let g = p;
  const h = {}, {
    [l]: b,
    ...u
  } = a;
  if (Object.entries(u || {}).forEach(([v, w]) => {
    const {
      vars: x,
      css: R,
      varsWithDefaults: E
    } = Ea(w, t);
    g = Rt(g, E), h[v] = {
      css: R,
      vars: x
    };
  }), b) {
    const {
      css: v,
      vars: w,
      varsWithDefaults: x
    } = Ea(b, t);
    g = Rt(g, x), h[l] = {
      css: v,
      vars: w
    };
  }
  function y(v, w) {
    var R, E;
    let x = i;
    if (i === "class" && (x = ".%s"), i === "data" && (x = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (x = `[${i}="%s"]`), v) {
      if (x === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (R = a[v]) == null ? void 0 : R.palette) == null ? void 0 : E.mode) || v})`]: {
            ":root": w
          }
        };
      if (x)
        return e.defaultColorScheme === v ? `:root, ${x.replace("%s", String(v))}` : x.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let v = {
        ...d
      };
      return Object.entries(h).forEach(([, {
        vars: w
      }]) => {
        v = Rt(v, w);
      }), v;
    },
    generateStyleSheets: () => {
      var k, I;
      const v = [], w = e.defaultColorScheme || "light";
      function x(m, O) {
        Object.keys(O).length && v.push(typeof m == "string" ? {
          [m]: {
            ...O
          }
        } : m);
      }
      x(n(void 0, {
        ...f
      }), f);
      const {
        [w]: R,
        ...E
      } = h;
      if (R) {
        const {
          css: m
        } = R, O = (I = (k = a[w]) == null ? void 0 : k.palette) == null ? void 0 : I.mode, $ = !r && O ? {
          colorScheme: O,
          ...m
        } : {
          ...m
        };
        x(n(w, {
          ...$
        }), $);
      }
      return Object.entries(E).forEach(([m, {
        css: O
      }]) => {
        var j, M;
        const $ = (M = (j = a[m]) == null ? void 0 : j.palette) == null ? void 0 : M.mode, N = !r && $ ? {
          colorScheme: $,
          ...O
        } : {
          ...O
        };
        x(n(m, {
          ...N
        }), N);
      }), v;
    }
  };
}
function Gb(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const qi = "$$material", wo = {
  black: "#000",
  white: "#fff"
}, Kb = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, vr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, wr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Xr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, xr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Cr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Tr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function rd() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: wo.white,
      default: wo.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Xb = rd();
function od() {
  return {
    text: {
      primary: wo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: wo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Wl = od();
function Vl(e, t, n, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yi(e.main, i) : t === "dark" && (e.dark = Ui(e.main, a)));
}
function Zb(e = "light") {
  return e === "dark" ? {
    main: xr[200],
    light: xr[50],
    dark: xr[400]
  } : {
    main: xr[700],
    light: xr[400],
    dark: xr[800]
  };
}
function Qb(e = "light") {
  return e === "dark" ? {
    main: vr[200],
    light: vr[50],
    dark: vr[400]
  } : {
    main: vr[500],
    light: vr[300],
    dark: vr[700]
  };
}
function Jb(e = "light") {
  return e === "dark" ? {
    main: wr[500],
    light: wr[300],
    dark: wr[700]
  } : {
    main: wr[700],
    light: wr[400],
    dark: wr[800]
  };
}
function ey(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: Cr[700],
    light: Cr[500],
    dark: Cr[900]
  };
}
function ty(e = "light") {
  return e === "dark" ? {
    main: Tr[400],
    light: Tr[300],
    dark: Tr[700]
  } : {
    main: Tr[800],
    light: Tr[500],
    dark: Tr[900]
  };
}
function ny(e = "light") {
  return e === "dark" ? {
    main: Xr[400],
    light: Xr[300],
    dark: Xr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xr[500],
    dark: Xr[900]
  };
}
function Ps(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || Zb(t), s = e.secondary || Qb(t), l = e.error || Jb(t), c = e.info || ey(t), d = e.success || ty(t), f = e.warning || ny(t);
  function p(u) {
    const y = Nl(u, Wl.text.primary) >= n ? Wl.text.primary : Xb.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Nl(u, y);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${y} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const g = ({
    color: u,
    name: y,
    mainShade: C = 500,
    lightShade: S = 300,
    darkShade: v = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[C] && (u.main = u[C]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : In(11, y ? ` (${y})` : "", C));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : In(12, y ? ` (${y})` : "", JSON.stringify(u.main)));
    return Vl(u, "light", S, r), Vl(u, "dark", v, r), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let h;
  return t === "light" ? h = rd() : t === "dark" && (h = od()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Rt({
    // A collection of common colors.
    common: {
      ...wo
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Kb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...h
  }, i);
}
function ry(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function oy(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function iy(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Hl = {
  textTransform: "uppercase"
}, Ul = '"Roboto", "Helvetica", "Arial", sans-serif';
function ay(e, t) {
  const {
    fontFamily: n = Ul,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = r / 14, h = f || ((y) => `${y / c * g}rem`), b = (y, C, S, v, w) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: h(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ul ? {
      letterSpacing: `${iy(v / C)}em`
    } : {},
    ...w,
    ...d
  }), u = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(a, 48, 1.167, 0),
    h4: b(a, 34, 1.235, 0.25),
    h5: b(a, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(a, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(a, 16, 1.5, 0.15),
    body2: b(a, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, Hl),
    caption: b(a, 12, 1.66, 0.4),
    overline: b(a, 12, 2.66, 1, Hl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Rt({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const sy = 0.2, ly = 0.14, cy = 0.12;
function et(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${sy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ly})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cy})`].join(",");
}
const uy = ["none", et(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), et(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), et(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), et(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), et(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), et(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), et(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), et(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), et(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), et(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), et(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), et(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), et(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), et(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), et(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), et(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), et(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), et(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), et(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), et(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), et(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), et(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), et(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), et(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], dy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, fy = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Yl(e) {
  return `${Math.round(e)}ms`;
}
function py(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function my(e) {
  const t = {
    ...dy,
    ...e.easing
  }, n = {
    ...fy,
    ...e.duration
  };
  return {
    getAutoHeightDuration: py,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...d
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof s == "string" ? s : Yl(s)} ${l} ${typeof c == "string" ? c : Yl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const hy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function gy(e) {
  return Sn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function id(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !gy(l) || s.startsWith("unstable_") ? delete r[s] : Sn(l) && (r[s] = {
        ...l
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Xa(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: a = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : In(20));
  const f = Ps(a), p = Cs(e);
  let g = Rt(p, {
    mixins: oy(p.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: uy.slice(),
    typography: ay(f, l),
    transitions: my(s),
    zIndex: {
      ...hy
    }
  });
  if (g = Rt(g, d), g = t.reduce((h, b) => Rt(h, b), g), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (u, y) => {
      let C;
      for (C in u) {
        const S = u[C];
        if (h.includes(C) && Object.keys(S).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = De("", C);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: S
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[C] = {};
        }
      }
    };
    Object.keys(g.components).forEach((u) => {
      const y = g.components[u].styleOverrides;
      y && u.startsWith("Mui") && b(y, u);
    });
  }
  return g.unstable_sxConfig = {
    ...Mo,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(b) {
    return fr({
      sx: b,
      theme: this
    });
  }, g.toRuntimeSource = id, g;
}
function Za(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const by = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Za(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ad(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function sd(e) {
  return e === "dark" ? by : [];
}
function yy(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, a = Ps(t);
  return {
    palette: a,
    opacity: {
      ...ad(a.mode),
      ...n
    },
    overlays: r || sd(a.mode),
    ...i
  };
}
function vy(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const wy = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], xy = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return wy(e.cssVarPrefix).forEach((l) => {
        s[l] = n[l], delete n[l];
      }), a === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: s
        }
      } : a ? {
        [a.replace("%s", t)]: s,
        [`${r}, ${a.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...s
        }
      };
    }
    if (a && a !== "media")
      return `${r}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return r;
};
function Cy(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function V(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function oo(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Hu(e);
}
function An(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ro(oo(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ty(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const wn = (e) => {
  try {
    return e();
  } catch {
  }
}, Sy = (e = "mui") => Hb(e);
function Oa(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = yy({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: a,
    ...s
  } = Xa({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: a,
    opacity: {
      ...ad(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || sd(i)
  }, s;
}
function Ey(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = vy,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...d
  } = e, f = Object.keys(n)[0], p = r || (n.light && f !== "light" ? "light" : f), g = Sy(a), {
    [p]: h,
    light: b,
    dark: u,
    ...y
  } = n, C = {
    ...y
  };
  let S = h;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : In(21, p));
  const v = Oa(C, S, d, p);
  b && !C.light && Oa(C, b, void 0, "light"), u && !C.dark && Oa(C, u, void 0, "dark");
  let w = {
    defaultColorScheme: p,
    ...v,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: g,
    colorSchemes: C,
    font: {
      ...ry(v.typography),
      ...v.font
    },
    spacing: Ty(d.spacing)
  };
  Object.keys(w.colorSchemes).forEach((I) => {
    const m = w.colorSchemes[I].palette, O = ($) => {
      const N = $.split("-"), j = N[1], M = N[2];
      return g($, m[j][M]);
    };
    if (m.mode === "light" && (V(m.common, "background", "#fff"), V(m.common, "onBackground", "#000")), m.mode === "dark" && (V(m.common, "background", "#000"), V(m.common, "onBackground", "#fff")), Cy(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      V(m.Alert, "errorColor", Xe(m.error.light, 0.6)), V(m.Alert, "infoColor", Xe(m.info.light, 0.6)), V(m.Alert, "successColor", Xe(m.success.light, 0.6)), V(m.Alert, "warningColor", Xe(m.warning.light, 0.6)), V(m.Alert, "errorFilledBg", O("palette-error-main")), V(m.Alert, "infoFilledBg", O("palette-info-main")), V(m.Alert, "successFilledBg", O("palette-success-main")), V(m.Alert, "warningFilledBg", O("palette-warning-main")), V(m.Alert, "errorFilledColor", wn(() => m.getContrastText(m.error.main))), V(m.Alert, "infoFilledColor", wn(() => m.getContrastText(m.info.main))), V(m.Alert, "successFilledColor", wn(() => m.getContrastText(m.success.main))), V(m.Alert, "warningFilledColor", wn(() => m.getContrastText(m.warning.main))), V(m.Alert, "errorStandardBg", Ze(m.error.light, 0.9)), V(m.Alert, "infoStandardBg", Ze(m.info.light, 0.9)), V(m.Alert, "successStandardBg", Ze(m.success.light, 0.9)), V(m.Alert, "warningStandardBg", Ze(m.warning.light, 0.9)), V(m.Alert, "errorIconColor", O("palette-error-main")), V(m.Alert, "infoIconColor", O("palette-info-main")), V(m.Alert, "successIconColor", O("palette-success-main")), V(m.Alert, "warningIconColor", O("palette-warning-main")), V(m.AppBar, "defaultBg", O("palette-grey-100")), V(m.Avatar, "defaultBg", O("palette-grey-400")), V(m.Button, "inheritContainedBg", O("palette-grey-300")), V(m.Button, "inheritContainedHoverBg", O("palette-grey-A100")), V(m.Chip, "defaultBorder", O("palette-grey-400")), V(m.Chip, "defaultAvatarColor", O("palette-grey-700")), V(m.Chip, "defaultIconColor", O("palette-grey-700")), V(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), V(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), V(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), V(m.LinearProgress, "primaryBg", Ze(m.primary.main, 0.62)), V(m.LinearProgress, "secondaryBg", Ze(m.secondary.main, 0.62)), V(m.LinearProgress, "errorBg", Ze(m.error.main, 0.62)), V(m.LinearProgress, "infoBg", Ze(m.info.main, 0.62)), V(m.LinearProgress, "successBg", Ze(m.success.main, 0.62)), V(m.LinearProgress, "warningBg", Ze(m.warning.main, 0.62)), V(m.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), V(m.Slider, "primaryTrack", Ze(m.primary.main, 0.62)), V(m.Slider, "secondaryTrack", Ze(m.secondary.main, 0.62)), V(m.Slider, "errorTrack", Ze(m.error.main, 0.62)), V(m.Slider, "infoTrack", Ze(m.info.main, 0.62)), V(m.Slider, "successTrack", Ze(m.success.main, 0.62)), V(m.Slider, "warningTrack", Ze(m.warning.main, 0.62));
      const $ = Yo(m.background.default, 0.8);
      V(m.SnackbarContent, "bg", $), V(m.SnackbarContent, "color", wn(() => m.getContrastText($))), V(m.SpeedDialAction, "fabHoverBg", Yo(m.background.paper, 0.15)), V(m.StepConnector, "border", O("palette-grey-400")), V(m.StepContent, "border", O("palette-grey-400")), V(m.Switch, "defaultColor", O("palette-common-white")), V(m.Switch, "defaultDisabledColor", O("palette-grey-100")), V(m.Switch, "primaryDisabledColor", Ze(m.primary.main, 0.62)), V(m.Switch, "secondaryDisabledColor", Ze(m.secondary.main, 0.62)), V(m.Switch, "errorDisabledColor", Ze(m.error.main, 0.62)), V(m.Switch, "infoDisabledColor", Ze(m.info.main, 0.62)), V(m.Switch, "successDisabledColor", Ze(m.success.main, 0.62)), V(m.Switch, "warningDisabledColor", Ze(m.warning.main, 0.62)), V(m.TableCell, "border", Ze(Uo(m.divider, 1), 0.88)), V(m.Tooltip, "bg", Uo(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      V(m.Alert, "errorColor", Ze(m.error.light, 0.6)), V(m.Alert, "infoColor", Ze(m.info.light, 0.6)), V(m.Alert, "successColor", Ze(m.success.light, 0.6)), V(m.Alert, "warningColor", Ze(m.warning.light, 0.6)), V(m.Alert, "errorFilledBg", O("palette-error-dark")), V(m.Alert, "infoFilledBg", O("palette-info-dark")), V(m.Alert, "successFilledBg", O("palette-success-dark")), V(m.Alert, "warningFilledBg", O("palette-warning-dark")), V(m.Alert, "errorFilledColor", wn(() => m.getContrastText(m.error.dark))), V(m.Alert, "infoFilledColor", wn(() => m.getContrastText(m.info.dark))), V(m.Alert, "successFilledColor", wn(() => m.getContrastText(m.success.dark))), V(m.Alert, "warningFilledColor", wn(() => m.getContrastText(m.warning.dark))), V(m.Alert, "errorStandardBg", Xe(m.error.light, 0.9)), V(m.Alert, "infoStandardBg", Xe(m.info.light, 0.9)), V(m.Alert, "successStandardBg", Xe(m.success.light, 0.9)), V(m.Alert, "warningStandardBg", Xe(m.warning.light, 0.9)), V(m.Alert, "errorIconColor", O("palette-error-main")), V(m.Alert, "infoIconColor", O("palette-info-main")), V(m.Alert, "successIconColor", O("palette-success-main")), V(m.Alert, "warningIconColor", O("palette-warning-main")), V(m.AppBar, "defaultBg", O("palette-grey-900")), V(m.AppBar, "darkBg", O("palette-background-paper")), V(m.AppBar, "darkColor", O("palette-text-primary")), V(m.Avatar, "defaultBg", O("palette-grey-600")), V(m.Button, "inheritContainedBg", O("palette-grey-800")), V(m.Button, "inheritContainedHoverBg", O("palette-grey-700")), V(m.Chip, "defaultBorder", O("palette-grey-700")), V(m.Chip, "defaultAvatarColor", O("palette-grey-300")), V(m.Chip, "defaultIconColor", O("palette-grey-300")), V(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), V(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), V(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), V(m.LinearProgress, "primaryBg", Xe(m.primary.main, 0.5)), V(m.LinearProgress, "secondaryBg", Xe(m.secondary.main, 0.5)), V(m.LinearProgress, "errorBg", Xe(m.error.main, 0.5)), V(m.LinearProgress, "infoBg", Xe(m.info.main, 0.5)), V(m.LinearProgress, "successBg", Xe(m.success.main, 0.5)), V(m.LinearProgress, "warningBg", Xe(m.warning.main, 0.5)), V(m.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), V(m.Slider, "primaryTrack", Xe(m.primary.main, 0.5)), V(m.Slider, "secondaryTrack", Xe(m.secondary.main, 0.5)), V(m.Slider, "errorTrack", Xe(m.error.main, 0.5)), V(m.Slider, "infoTrack", Xe(m.info.main, 0.5)), V(m.Slider, "successTrack", Xe(m.success.main, 0.5)), V(m.Slider, "warningTrack", Xe(m.warning.main, 0.5));
      const $ = Yo(m.background.default, 0.98);
      V(m.SnackbarContent, "bg", $), V(m.SnackbarContent, "color", wn(() => m.getContrastText($))), V(m.SpeedDialAction, "fabHoverBg", Yo(m.background.paper, 0.15)), V(m.StepConnector, "border", O("palette-grey-600")), V(m.StepContent, "border", O("palette-grey-600")), V(m.Switch, "defaultColor", O("palette-grey-300")), V(m.Switch, "defaultDisabledColor", O("palette-grey-600")), V(m.Switch, "primaryDisabledColor", Xe(m.primary.main, 0.55)), V(m.Switch, "secondaryDisabledColor", Xe(m.secondary.main, 0.55)), V(m.Switch, "errorDisabledColor", Xe(m.error.main, 0.55)), V(m.Switch, "infoDisabledColor", Xe(m.info.main, 0.55)), V(m.Switch, "successDisabledColor", Xe(m.success.main, 0.55)), V(m.Switch, "warningDisabledColor", Xe(m.warning.main, 0.55)), V(m.TableCell, "border", Xe(Uo(m.divider, 1), 0.68)), V(m.Tooltip, "bg", Uo(m.grey[700], 0.92));
    }
    An(m.background, "default"), An(m.background, "paper"), An(m.common, "background"), An(m.common, "onBackground"), An(m, "divider"), Object.keys(m).forEach(($) => {
      const N = m[$];
      $ !== "tonalOffset" && N && typeof N == "object" && (N.main && V(m[$], "mainChannel", ro(oo(N.main))), N.light && V(m[$], "lightChannel", ro(oo(N.light))), N.dark && V(m[$], "darkChannel", ro(oo(N.dark))), N.contrastText && V(m[$], "contrastTextChannel", ro(oo(N.contrastText))), $ === "text" && (An(m[$], "primary"), An(m[$], "secondary")), $ === "action" && (N.active && An(m[$], "active"), N.selected && An(m[$], "selected")));
    });
  }), w = t.reduce((I, m) => Rt(I, m), w);
  const x = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: xy(w)
  }, {
    vars: R,
    generateThemeVars: E,
    generateStyleSheets: k
  } = qb(w, x);
  return w.vars = R, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([I, m]) => {
    w[I] = m;
  }), w.generateThemeVars = E, w.generateStyleSheets = k, w.generateSpacing = function() {
    return Fu(d.spacing, ws(this));
  }, w.getColorSchemeSelector = Gb(l), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = s, w.unstable_sxConfig = {
    ...Mo,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, w.unstable_sx = function(m) {
    return fr({
      sx: m,
      theme: this
    });
  }, w.toRuntimeSource = id, w;
}
function ql(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ps({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ld(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = n == null ? void 0 : n.mode,
    ...s
  } = e, l = a || "light", c = i == null ? void 0 : i[l], d = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Xa(e, ...t);
    let f = n;
    "palette" in e || d[l] && (d[l] !== !0 ? f = d[l].palette : l === "dark" && (f = {
      mode: "dark"
    }));
    const p = Xa({
      ...e,
      palette: f
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, ql(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, ql(p, "light", d.light)), p;
  }
  return !n && !("light" in d) && l === "light" && (d.light = !0), Ey({
    ...s,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Is = ld();
function ks() {
  const e = Ts(Is);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[qi] || e;
}
function cd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kt = (e) => cd(e) && e !== "classes", oe = yb({
  themeId: qi,
  defaultTheme: Is,
  rootShouldForwardProp: Kt
}), Oy = ke("MuiBox", ["root"]), Ry = ld(), ud = fb({
  themeId: qi,
  defaultTheme: Ry,
  defaultClassName: Oy.root,
  generateClassName: _u.generate
});
process.env.NODE_ENV !== "production" && (ud.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function dd(e) {
  return /* @__PURE__ */ P(Bu, {
    ...e,
    defaultTheme: Is,
    themeId: qi
  });
}
process.env.NODE_ENV !== "production" && (dd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Py(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ P(dd, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function Ve(e) {
  return Wb(e);
}
function qo(e) {
  return parseInt(e, 10) || 0;
}
const Iy = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function ky(e) {
  for (const t in e)
    return !1;
  return !0;
}
function $y(e) {
  return ky(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const fd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l,
    ...c
  } = t, {
    current: d
  } = T.useRef(l != null), f = T.useRef(null), p = mt(n, f), g = T.useRef(null), h = T.useRef(null), b = T.useCallback(() => {
    const S = f.current, v = h.current;
    if (!S || !v)
      return;
    const x = _n(S).getComputedStyle(S);
    if (x.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    v.style.width = x.width, v.value = S.value || t.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
    const R = x.boxSizing, E = qo(x.paddingBottom) + qo(x.paddingTop), k = qo(x.borderBottomWidth) + qo(x.borderTopWidth), I = v.scrollHeight;
    v.value = "x";
    const m = v.scrollHeight;
    let O = I;
    a && (O = Math.max(Number(a) * m, O)), i && (O = Math.min(Number(i) * m, O)), O = Math.max(O, m);
    const $ = O + (R === "border-box" ? E + k : 0), N = Math.abs(O - I) <= 1;
    return {
      outerHeightStyle: $,
      overflowing: N
    };
  }, [i, a, t.placeholder]), u = T.useCallback(() => {
    const S = f.current, v = b();
    if (!S || !v || $y(v))
      return;
    const w = v.outerHeightStyle;
    g.current !== w && (g.current = w, S.style.height = `${w}px`), S.style.overflow = v.overflowing ? "hidden" : "";
  }, [b]), y = T.useRef(-1);
  kn(() => {
    const S = qu(() => u()), v = f == null ? void 0 : f.current;
    if (!v)
      return;
    const w = _n(v);
    w.addEventListener("resize", S);
    let x;
    return typeof ResizeObserver < "u" && (x = new ResizeObserver(() => {
      x.unobserve(v), cancelAnimationFrame(y.current), u(), y.current = requestAnimationFrame(() => {
        x.observe(v);
      });
    }), x.observe(v)), () => {
      S.clear(), cancelAnimationFrame(y.current), w.removeEventListener("resize", S), x && x.disconnect();
    };
  }, [b, u]), kn(() => {
    u();
  });
  const C = (S) => {
    d || u(), r && r(S);
  };
  return /* @__PURE__ */ Se(T.Fragment, {
    children: [/* @__PURE__ */ P("textarea", {
      value: l,
      onChange: C,
      ref: p,
      rows: a,
      style: s,
      ...c
    }), /* @__PURE__ */ P("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: h,
      tabIndex: -1,
      style: {
        ...Iy.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (fd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function Qa(e) {
  return typeof e == "string";
}
function Ur({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const Gi = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Gi.displayName = "FormControlContext");
function mr() {
  return T.useContext(Gi);
}
const Ie = Vb;
function Gl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function pi(e, t = !1) {
  return e && (Gl(e.value) && e.value !== "" || t && Gl(e.defaultValue) && e.defaultValue !== "");
}
function My(e) {
  return e.startAdornment;
}
function Ny(e) {
  return De("MuiInputBase", e);
}
const zt = ke("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Kl;
const Ki = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${re(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Xi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Dy = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: a,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: d,
    multiline: f,
    readOnly: p,
    size: g,
    startAdornment: h,
    type: b
  } = e, u = {
    root: ["root", `color${re(n)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", g && g !== "medium" && `size${re(g)}`, f && "multiline", h && "adornedStart", a && "adornedEnd", d && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", b === "search" && "inputTypeSearch", f && "inputMultiline", g === "small" && "inputSizeSmall", d && "inputHiddenLabel", h && "inputAdornedStart", a && "inputAdornedEnd", p && "readOnly"]
  };
  return Le(u, Ny, t);
}, Zi = oe("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ki
})(Ie(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${zt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), Qi = oe("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Xi
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${zt.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${zt.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Xl = Py({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), Ao = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: s,
    className: l,
    color: c,
    components: d = {},
    componentsProps: f = {},
    defaultValue: p,
    disabled: g,
    disableInjectingGlobalStyles: h,
    endAdornment: b,
    error: u,
    fullWidth: y = !1,
    id: C,
    inputComponent: S = "input",
    inputProps: v = {},
    inputRef: w,
    margin: x,
    maxRows: R,
    minRows: E,
    multiline: k = !1,
    name: I,
    onBlur: m,
    onChange: O,
    onClick: $,
    onFocus: N,
    onKeyDown: j,
    onKeyUp: M,
    placeholder: L,
    readOnly: H,
    renderSuffix: ee,
    rows: q,
    size: W,
    slotProps: U = {},
    slots: ie = {},
    startAdornment: J,
    type: D = "text",
    value: F,
    ...G
  } = r, A = v.value != null ? v.value : F, {
    current: z
  } = T.useRef(A != null), X = T.useRef(), K = T.useCallback((ye) => {
    process.env.NODE_ENV !== "production" && ye && ye.nodeName !== "INPUT" && !ye.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ae = mt(X, w, v.ref, K), [B, pe] = T.useState(!1), ue = mr();
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (ue)
      return ue.registerEffect();
  }, [ue]);
  const me = Ur({
    props: r,
    muiFormControl: ue,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  me.focused = ue ? ue.focused : B, T.useEffect(() => {
    !ue && g && B && (pe(!1), m && m());
  }, [ue, g, B, m]);
  const $e = ue && ue.onFilled, se = ue && ue.onEmpty, Ee = T.useCallback((ye) => {
    pi(ye) ? $e && $e() : se && se();
  }, [$e, se]);
  kn(() => {
    z && Ee({
      value: A
    });
  }, [A, Ee, z]);
  const fe = (ye) => {
    N && N(ye), v.onFocus && v.onFocus(ye), ue && ue.onFocus ? ue.onFocus(ye) : pe(!0);
  }, Oe = (ye) => {
    m && m(ye), v.onBlur && v.onBlur(ye), ue && ue.onBlur ? ue.onBlur(ye) : pe(!1);
  }, we = (ye, ...ht) => {
    if (!z) {
      const xt = ye.target || X.current;
      if (xt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : In(1));
      Ee({
        value: xt.value
      });
    }
    v.onChange && v.onChange(ye, ...ht), O && O(ye, ...ht);
  };
  T.useEffect(() => {
    Ee(X.current);
  }, []);
  const le = (ye) => {
    X.current && ye.currentTarget === ye.target && X.current.focus(), $ && $(ye);
  };
  let tt = S, je = v;
  k && tt === "input" && (q ? (process.env.NODE_ENV !== "production" && (E || R) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), je = {
    type: void 0,
    minRows: q,
    maxRows: q,
    ...je
  }) : je = {
    type: void 0,
    maxRows: R,
    minRows: E,
    ...je
  }, tt = fd);
  const bt = (ye) => {
    Ee(ye.animationName === "mui-auto-fill-cancel" ? X.current : {
      value: "x"
    });
  };
  T.useEffect(() => {
    ue && ue.setAdornedStart(!!J);
  }, [ue, J]);
  const Pt = {
    ...r,
    color: me.color || "primary",
    disabled: me.disabled,
    endAdornment: b,
    error: me.error,
    focused: me.focused,
    formControl: ue,
    fullWidth: y,
    hiddenLabel: me.hiddenLabel,
    multiline: k,
    size: me.size,
    startAdornment: J,
    type: D
  }, ft = Dy(Pt), It = ie.root || d.Root || Zi, Fe = U.root || f.root || {}, Ae = ie.input || d.Input || Qi;
  return je = {
    ...je,
    ...U.input ?? f.input
  }, /* @__PURE__ */ Se(T.Fragment, {
    children: [!h && typeof Xl == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Kl || (Kl = /* @__PURE__ */ P(Xl, {}))), /* @__PURE__ */ Se(It, {
      ...Fe,
      ref: n,
      onClick: le,
      ...G,
      ...!Qa(It) && {
        ownerState: {
          ...Pt,
          ...Fe.ownerState
        }
      },
      className: de(ft.root, Fe.className, l, H && "MuiInputBase-readOnly"),
      children: [J, /* @__PURE__ */ P(Gi.Provider, {
        value: null,
        children: /* @__PURE__ */ P(Ae, {
          "aria-invalid": me.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: s,
          defaultValue: p,
          disabled: me.disabled,
          id: C,
          onAnimationStart: bt,
          name: I,
          placeholder: L,
          readOnly: H,
          required: me.required,
          rows: q,
          value: A,
          onKeyDown: j,
          onKeyUp: M,
          type: D,
          ...je,
          ...!Qa(Ae) && {
            as: tt,
            ownerState: {
              ...Pt,
              ...je.ownerState
            }
          },
          ref: ae,
          className: de(ft.input, je.className, H && "MuiInputBase-readOnly"),
          onBlur: Oe,
          onChange: we,
          onFocus: fe
        })
      }), b, ee ? ee({
        ...me,
        startAdornment: J
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Es,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Gt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
function Ay(e) {
  return typeof e.main == "string";
}
function Ly(e, t = []) {
  if (!Ay(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Ht(e = []) {
  return ([, t]) => t && Ly(t, e);
}
function Fy(e) {
  return De("MuiInput", e);
}
const Gn = {
  ...zt,
  ...ke("MuiInput", ["root", "underline", "input"])
}, By = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Le({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Fy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, _y = oe(Zi, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ki(e, t), !n.disableUnderline && t.underline];
  }
})(Ie(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Gn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Gn.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Gn.disabled}, .${Gn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Gn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ht()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), jy = oe(Qi, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Xi
})({}), Ji = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: d = !1,
    slotProps: f,
    slots: p = {},
    type: g = "text",
    ...h
  } = r, b = By(r), y = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, C = f ?? s ? Rt(f ?? s, y) : y, S = p.root ?? a.Root ?? _y, v = p.input ?? a.Input ?? jy;
  return /* @__PURE__ */ P(Ao, {
    slots: {
      root: S,
      input: v
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: c,
    multiline: d,
    ref: n,
    type: g,
    ...h,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (Ji.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Gt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Ji.muiName = "Input";
function zy(e) {
  return De("MuiFilledInput", e);
}
const Wt = {
  ...zt,
  ...ke("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Wy(e) {
  return De("MuiSvgIcon", e);
}
ke("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Vy = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${re(t)}`, `fontSize${re(n)}`]
  };
  return Le(i, Wy, r);
}, Hy = oe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${re(n.color)}`], t[`fontSize${re(n.fontSize)}`]];
  }
})(Ie(({
  theme: e
}) => {
  var t, n, r, i, a, s, l, c, d, f, p, g, h, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((f = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : f.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var y, C;
        return {
          props: {
            color: u
          },
          style: {
            color: (C = (y = (e.vars ?? e).palette) == null ? void 0 : y[u]) == null ? void 0 : C.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : b.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), mi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: d,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: g = "0 0 24 24",
    ...h
  } = r, b = /* @__PURE__ */ T.isValidElement(i) && i.type === "svg", u = {
    ...r,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: g,
    hasSvgAsChild: b
  }, y = {};
  f || (y.viewBox = g);
  const C = Vy(u);
  return /* @__PURE__ */ Se(Hy, {
    as: l,
    className: de(C.root, a),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...y,
    ...h,
    ...b && i.props,
    ownerState: u,
    children: [b ? i.props.children : i, p ? /* @__PURE__ */ P("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
mi.muiName = "SvgIcon";
function Mn(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ P(mi, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = mi.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
const Uy = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: i,
    size: a,
    hiddenLabel: s,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", i && "adornedEnd", a === "small" && `size${re(a)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, d = Le(c, zy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...d
  };
}, Yy = oe(Zi, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ki(e, t), !n.disableUnderline && t.underline];
  }
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Wt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Wt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Wt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Wt.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Wt.disabled}, .${Wt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Wt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ht()).map(([s]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[s]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: s
      }) => s.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: s,
        size: l
      }) => s.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel && s.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), qy = oe(Qi, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Xi
})(Ie(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), ea = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: d = "input",
    multiline: f = !1,
    slotProps: p,
    slots: g = {},
    type: h = "text",
    ...b
  } = r, u = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: d,
    multiline: f,
    type: h
  }, y = Uy(r), C = {
    root: {
      ownerState: u
    },
    input: {
      ownerState: u
    }
  }, S = p ?? s ? Rt(C, p ?? s) : C, v = g.root ?? a.Root ?? Yy, w = g.input ?? a.Input ?? qy;
  return /* @__PURE__ */ P(Ao, {
    slots: {
      root: v,
      input: w
    },
    slotProps: S,
    fullWidth: l,
    inputComponent: d,
    multiline: f,
    ref: n,
    type: h,
    ...b,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Gt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
ea.muiName = "Input";
var Zl;
const Gy = oe("fieldset", {
  shouldForwardProp: Kt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), Ky = oe("legend", {
  shouldForwardProp: Kt
})(Ie(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function pd(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: i,
    notched: a,
    ...s
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: a,
    withLabel: l
  };
  return /* @__PURE__ */ P(Gy, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...s,
    children: /* @__PURE__ */ P(Ky, {
      ownerState: c,
      children: l ? /* @__PURE__ */ P("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Zl || (Zl = /* @__PURE__ */ P("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (pd.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
function Xy(e) {
  return De("MuiOutlinedInput", e);
}
const Qt = {
  ...zt,
  ...ke("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, Zy = (e) => {
  const {
    classes: t
  } = e, r = Le({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Xy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, Qy = oe(Zi, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ki
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Qt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Qt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${Qt.focused} .${Qt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Ht()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Qt.focused} .${Qt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${Qt.error} .${Qt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Qt.disabled} .${Qt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), Jy = oe(pd, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), ev = oe(Qi, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Xi
})(Ie(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), ta = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r;
  const i = Ve({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: a = {},
    fullWidth: s = !1,
    inputComponent: l = "input",
    label: c,
    multiline: d = !1,
    notched: f,
    slots: p = {},
    type: g = "text",
    ...h
  } = i, b = Zy(i), u = mr(), y = Ur({
    props: i,
    muiFormControl: u,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...i,
    color: y.color || "primary",
    disabled: y.disabled,
    error: y.error,
    focused: y.focused,
    formControl: u,
    fullWidth: s,
    hiddenLabel: y.hiddenLabel,
    multiline: d,
    size: y.size,
    type: g
  }, S = p.root ?? a.Root ?? Qy, v = p.input ?? a.Input ?? ev;
  return /* @__PURE__ */ P(Ao, {
    slots: {
      root: S,
      input: v
    },
    renderSuffix: (w) => /* @__PURE__ */ P(Jy, {
      ownerState: C,
      className: b.notchedOutline,
      label: c != null && c !== "" && y.required ? r || (r = /* @__PURE__ */ Se(T.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof f < "u" ? f : !!(w.startAdornment || w.filled || w.focused)
    }),
    fullWidth: s,
    inputComponent: l,
    multiline: d,
    ref: n,
    type: g,
    ...h,
    classes: {
      ...b,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (ta.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Gt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
ta.muiName = "Input";
function tv(e) {
  return De("MuiFormLabel", e);
}
const co = ke("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), nv = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${re(n)}`, i && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return Le(c, tv, t);
}, rv = oe("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(Ie(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${co.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${co.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${co.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), ov = oe("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ie(({
  theme: e
}) => ({
  [`&.${co.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), md = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    color: s,
    component: l = "label",
    disabled: c,
    error: d,
    filled: f,
    focused: p,
    required: g,
    ...h
  } = r, b = mr(), u = Ur({
    props: r,
    muiFormControl: b,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), y = {
    ...r,
    color: u.color || "primary",
    component: l,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }, C = nv(y);
  return /* @__PURE__ */ Se(rv, {
    as: l,
    ownerState: y,
    className: de(C.root, a),
    ref: n,
    ...h,
    children: [i, u.required && /* @__PURE__ */ Se(ov, {
      ownerState: y,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (md.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function iv(e) {
  return De("MuiInputLabel", e);
}
ke("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const av = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !a && "animated", i && "shrink", r && r !== "normal" && `size${re(r)}`, s],
    asterisk: [l && "asterisk"]
  }, d = Le(c, iv, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...d
  };
}, sv = oe(md, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${co.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(Ie(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), hd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: a,
    shrink: s,
    variant: l,
    className: c,
    ...d
  } = r, f = mr();
  let p = s;
  typeof p > "u" && f && (p = f.filled || f.focused || f.adornedStart);
  const g = Ur({
    props: r,
    muiFormControl: f,
    states: ["size", "variant", "required", "focused"]
  }), h = {
    ...r,
    disableAnimation: i,
    formControl: f,
    shrink: p,
    size: g.size,
    variant: g.variant,
    required: g.required,
    focused: g.focused
  }, b = av(h);
  return /* @__PURE__ */ P(sv, {
    "data-shrink": p,
    ref: n,
    className: de(b.root, c),
    ...d,
    ownerState: h,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function lv(e) {
  return De("MuiFormControl", e);
}
ke("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const cv = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${re(n)}`, r && "fullWidth"]
  };
  return Le(i, lv, t);
}, uv = oe("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${re(n.margin)}`], n.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), gd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: a,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: d = !1,
    focused: f,
    fullWidth: p = !1,
    hiddenLabel: g = !1,
    margin: h = "none",
    required: b = !1,
    size: u = "medium",
    variant: y = "outlined",
    ...C
  } = r, S = {
    ...r,
    color: s,
    component: l,
    disabled: c,
    error: d,
    fullWidth: p,
    hiddenLabel: g,
    margin: h,
    required: b,
    size: u,
    variant: y
  }, v = cv(S), [w, x] = T.useState(() => {
    let L = !1;
    return i && T.Children.forEach(i, (H) => {
      if (!Sa(H, ["Input", "Select"]))
        return;
      const ee = Sa(H, ["Select"]) ? H.props.input : H;
      ee && My(ee.props) && (L = !0);
    }), L;
  }), [R, E] = T.useState(() => {
    let L = !1;
    return i && T.Children.forEach(i, (H) => {
      Sa(H, ["Input", "Select"]) && (pi(H.props, !0) || pi(H.props.inputProps, !0)) && (L = !0);
    }), L;
  }), [k, I] = T.useState(!1);
  c && k && I(!1);
  const m = f !== void 0 && !c ? f : k;
  let O;
  const $ = T.useRef(!1);
  process.env.NODE_ENV !== "production" && (O = () => ($.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), $.current = !0, () => {
    $.current = !1;
  }));
  const N = T.useCallback(() => {
    E(!0);
  }, []), j = T.useCallback(() => {
    E(!1);
  }, []), M = T.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: x,
    color: s,
    disabled: c,
    error: d,
    filled: R,
    focused: m,
    fullWidth: p,
    hiddenLabel: g,
    size: u,
    onBlur: () => {
      I(!1);
    },
    onFocus: () => {
      I(!0);
    },
    onEmpty: j,
    onFilled: N,
    registerEffect: O,
    required: b,
    variant: y
  }), [w, s, c, d, R, m, p, g, O, j, N, b, u, y]);
  return /* @__PURE__ */ P(Gi.Provider, {
    value: M,
    children: /* @__PURE__ */ P(uv, {
      as: l,
      ownerState: S,
      className: de(v.root, a),
      ref: n,
      ...C,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (gd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function dv(e) {
  return De("MuiFormHelperText", e);
}
const Ql = ke("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Jl;
const fv = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: a,
    filled: s,
    focused: l,
    required: c
  } = e, d = {
    root: ["root", i && "disabled", a && "error", r && `size${re(r)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return Le(d, dv, t);
}, pv = oe("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${re(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(Ie(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ql.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ql.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), bd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: a,
    component: s = "p",
    disabled: l,
    error: c,
    filled: d,
    focused: f,
    margin: p,
    required: g,
    variant: h,
    ...b
  } = r, u = mr(), y = Ur({
    props: r,
    muiFormControl: u,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: s,
    contained: y.variant === "filled" || y.variant === "outlined",
    variant: y.variant,
    size: y.size,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  };
  delete C.ownerState;
  const S = fv(C);
  return /* @__PURE__ */ P(pv, {
    as: s,
    className: de(S.root, a),
    ref: n,
    ...b,
    ownerState: C,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Jl || (Jl = /* @__PURE__ */ P("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
var Ja = { exports: {} }, qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function mv() {
  if (ec) return qe;
  ec = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function b(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
        case e:
          switch (u = u.type, u) {
            case n:
            case i:
            case r:
            case c:
            case d:
            case g:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case l:
                case p:
                case f:
                  return u;
                case a:
                  return u;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return qe.ContextConsumer = a, qe.ContextProvider = s, qe.Element = e, qe.ForwardRef = l, qe.Fragment = n, qe.Lazy = p, qe.Memo = f, qe.Portal = t, qe.Profiler = i, qe.StrictMode = r, qe.Suspense = c, qe.SuspenseList = d, qe.isContextConsumer = function(u) {
    return b(u) === a;
  }, qe.isContextProvider = function(u) {
    return b(u) === s;
  }, qe.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, qe.isForwardRef = function(u) {
    return b(u) === l;
  }, qe.isFragment = function(u) {
    return b(u) === n;
  }, qe.isLazy = function(u) {
    return b(u) === p;
  }, qe.isMemo = function(u) {
    return b(u) === f;
  }, qe.isPortal = function(u) {
    return b(u) === t;
  }, qe.isProfiler = function(u) {
    return b(u) === i;
  }, qe.isStrictMode = function(u) {
    return b(u) === r;
  }, qe.isSuspense = function(u) {
    return b(u) === c;
  }, qe.isSuspenseList = function(u) {
    return b(u) === d;
  }, qe.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === r || u === c || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === h || u.getModuleId !== void 0);
  }, qe.typeOf = b, qe;
}
var Ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function hv() {
  return tc || (tc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var y = u.$$typeof;
        switch (y) {
          case t:
            switch (u = u.type, u) {
              case r:
              case a:
              case i:
              case d:
              case f:
              case h:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case g:
                  case p:
                    return u;
                  case s:
                    return u;
                  default:
                    return y;
                }
            }
          case n:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    Ge.ContextConsumer = s, Ge.ContextProvider = l, Ge.Element = t, Ge.ForwardRef = c, Ge.Fragment = r, Ge.Lazy = g, Ge.Memo = p, Ge.Portal = n, Ge.Profiler = a, Ge.StrictMode = i, Ge.Suspense = d, Ge.SuspenseList = f, Ge.isContextConsumer = function(u) {
      return e(u) === s;
    }, Ge.isContextProvider = function(u) {
      return e(u) === l;
    }, Ge.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Ge.isForwardRef = function(u) {
      return e(u) === c;
    }, Ge.isFragment = function(u) {
      return e(u) === r;
    }, Ge.isLazy = function(u) {
      return e(u) === g;
    }, Ge.isMemo = function(u) {
      return e(u) === p;
    }, Ge.isPortal = function(u) {
      return e(u) === n;
    }, Ge.isProfiler = function(u) {
      return e(u) === a;
    }, Ge.isStrictMode = function(u) {
      return e(u) === i;
    }, Ge.isSuspense = function(u) {
      return e(u) === d;
    }, Ge.isSuspenseList = function(u) {
      return e(u) === f;
    }, Ge.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === a || u === i || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === p || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === b || u.getModuleId !== void 0);
    }, Ge.typeOf = e;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? Ja.exports = mv() : Ja.exports = hv();
var $s = Ja.exports;
const hi = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (hi.displayName = "ListContext");
function gv(e) {
  return De("MuiList", e);
}
ke("MuiList", ["root", "padding", "dense", "subheader"]);
const bv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Le({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, gv, t);
}, yv = oe("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), yd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: d,
    ...f
  } = r, p = T.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...r,
    component: s,
    dense: l,
    disablePadding: c
  }, h = bv(g);
  return /* @__PURE__ */ P(hi.Provider, {
    value: p,
    children: /* @__PURE__ */ Se(yv, {
      as: s,
      className: de(h.root, a),
      ref: n,
      ownerState: g,
      ...f,
      children: [d, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Ra(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function nc(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function vd(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Zr(e, t, n, r, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !vd(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const wd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: d = !1,
    onKeyDown: f,
    variant: p = "selectedMenu",
    ...g
  } = t, h = T.useRef(null), b = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  kn(() => {
    i && h.current.focus();
  }, [i]), T.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: w
    }) => {
      const x = !h.current.style.width;
      if (v.clientHeight < h.current.clientHeight && x) {
        const R = `${Xu(_n(v))}px`;
        h.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = R, h.current.style.width = `calc(100% + ${R})`;
      }
      return h.current;
    }
  }), []);
  const u = (v) => {
    const w = h.current, x = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      f && f(v);
      return;
    }
    const E = Yt(w).activeElement;
    if (x === "ArrowDown")
      v.preventDefault(), Zr(w, E, d, c, Ra);
    else if (x === "ArrowUp")
      v.preventDefault(), Zr(w, E, d, c, nc);
    else if (x === "Home")
      v.preventDefault(), Zr(w, null, d, c, Ra);
    else if (x === "End")
      v.preventDefault(), Zr(w, null, d, c, nc);
    else if (x.length === 1) {
      const k = b.current, I = x.toLowerCase(), m = performance.now();
      k.keys.length > 0 && (m - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && I !== k.keys[0] && (k.repeating = !1)), k.lastTime = m, k.keys.push(I);
      const O = E && !k.repeating && vd(E, k);
      k.previousKeyMatched && (O || Zr(w, E, !1, c, Ra, k)) ? v.preventDefault() : k.previousKeyMatched = !1;
    }
    f && f(v);
  }, y = mt(h, n);
  let C = -1;
  T.Children.forEach(s, (v, w) => {
    if (!/* @__PURE__ */ T.isValidElement(v)) {
      C === w && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && $s.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (p === "selectedMenu" && v.props.selected || C === -1) && (C = w), C === w && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const S = T.Children.map(s, (v, w) => {
    if (w === C) {
      const x = {};
      return a && (x.autoFocus = !0), v.props.tabIndex === void 0 && p === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ T.cloneElement(v, x);
    }
    return v;
  });
  return /* @__PURE__ */ P(yd, {
    role: "menu",
    ref: y,
    className: l,
    onKeyDown: u,
    tabIndex: i ? 0 : -1,
    ...g,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (wd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function xd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function es(e, t) {
  return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, es(e, t);
}
function Cd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, es(e, t);
}
const rc = {
  disabled: !1
};
var vv = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const gi = wt.createContext(null);
var wv = function(t) {
  return t.scrollTop;
}, io = "unmounted", ir = "exited", ar = "entering", Or = "entered", ts = "exiting", Nn = /* @__PURE__ */ function(e) {
  Cd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = ir, a.appearStatus = ar) : c = Or : r.unmountOnExit || r.mountOnEnter ? c = io : c = ir, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === io ? {
      status: ir
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ar && s !== Or && (a = ar) : (s === ar || s === Or) && (a = ts);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, s, l;
    return a = s = l = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, l = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === ar) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Vo.findDOMNode(this);
          s && wv(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === ir && this.setState({
      status: io
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Vo.findDOMNode(this), l], d = c[0], f = c[1], p = this.getTimeouts(), g = l ? p.appear : p.enter;
    if (!i && !s || rc.disabled) {
      this.safeSetState({
        status: Or
      }, function() {
        a.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: ar
    }, function() {
      a.props.onEntering(d, f), a.onTransitionEnd(g, function() {
        a.safeSetState({
          status: Or
        }, function() {
          a.props.onEntered(d, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Vo.findDOMNode(this);
    if (!a || rc.disabled) {
      this.safeSetState({
        status: ir
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: ts
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: ir
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Vo.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], d = c[0], f = c[1];
      this.props.addEndListener(d, f);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === io)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = xd(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ wt.createElement(gi.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : wt.cloneElement(wt.Children.only(s), l))
    );
  }, t;
}(wt.Component);
Nn.contextType = gi;
Nn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, a) {
      var s = e[t];
      return o.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = vv;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function Sr() {
}
Nn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Sr,
  onEntering: Sr,
  onEntered: Sr,
  onExit: Sr,
  onExiting: Sr,
  onExited: Sr
};
Nn.UNMOUNTED = io;
Nn.EXITED = ir;
Nn.ENTERING = ar;
Nn.ENTERED = Or;
Nn.EXITING = ts;
function xv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ms(e, t) {
  var n = function(a) {
    return t && Zo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Gf.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Cv(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (r[a] = i, i = []) : i.push(a);
  var s, l = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var d = r[c][s];
        l[r[c][s]] = n(d);
      }
    l[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = n(i[s]);
  return l;
}
function cr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Tv(e, t) {
  return Ms(e.children, function(n) {
    return Qo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: cr(n, "appear", e),
      enter: cr(n, "enter", e),
      exit: cr(n, "exit", e)
    });
  });
}
function Sv(e, t, n) {
  var r = Ms(e.children), i = Cv(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (Zo(s)) {
      var l = a in t, c = a in r, d = t[a], f = Zo(d) && !d.props.in;
      c && (!l || f) ? i[a] = Qo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: cr(s, "exit", e),
        enter: cr(s, "enter", e)
      }) : !c && l && !f ? i[a] = Qo(s, {
        in: !1
      }) : c && l && Zo(d) && (i[a] = Qo(s, {
        onExited: n.bind(null, s),
        in: d.props.in,
        exit: cr(s, "exit", e),
        enter: cr(s, "enter", e)
      }));
    }
  }), i;
}
var Ev = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ov = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ns = /* @__PURE__ */ function(e) {
  Cd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(xv(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? Tv(i, l) : Sv(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = Ms(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = ci({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = xd(i, ["component", "childFactory"]), c = this.state.contextValue, d = Ev(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ wt.createElement(gi.Provider, {
      value: c
    }, d) : /* @__PURE__ */ wt.createElement(gi.Provider, {
      value: c
    }, /* @__PURE__ */ wt.createElement(a, l, d));
  }, t;
}(wt.Component);
Ns.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: o.func
} : {};
Ns.defaultProps = Ov;
const Td = (e) => e.scrollTop;
function bi(e, t) {
  const {
    timeout: n,
    easing: r,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay
  };
}
function ns(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Rv = {
  entering: {
    opacity: 1,
    transform: ns(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Pa = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), yi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: d,
    onEntering: f,
    onExit: p,
    onExited: g,
    onExiting: h,
    style: b,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Nn,
    ...C
  } = t, S = Ku(), v = T.useRef(), w = ks(), x = T.useRef(null), R = mt(x, Do(a), n), E = (M) => (L) => {
    if (M) {
      const H = x.current;
      L === void 0 ? M(H) : M(H, L);
    }
  }, k = E(f), I = E((M, L) => {
    Td(M);
    const {
      duration: H,
      delay: ee,
      easing: q
    } = bi({
      style: b,
      timeout: u,
      easing: s
    }, {
      mode: "enter"
    });
    let W;
    u === "auto" ? (W = w.transitions.getAutoHeightDuration(M.clientHeight), v.current = W) : W = H, M.style.transition = [w.transitions.create("opacity", {
      duration: W,
      delay: ee
    }), w.transitions.create("transform", {
      duration: Pa ? W : W * 0.666,
      delay: ee,
      easing: q
    })].join(","), c && c(M, L);
  }), m = E(d), O = E(h), $ = E((M) => {
    const {
      duration: L,
      delay: H,
      easing: ee
    } = bi({
      style: b,
      timeout: u,
      easing: s
    }, {
      mode: "exit"
    });
    let q;
    u === "auto" ? (q = w.transitions.getAutoHeightDuration(M.clientHeight), v.current = q) : q = L, M.style.transition = [w.transitions.create("opacity", {
      duration: q,
      delay: H
    }), w.transitions.create("transform", {
      duration: Pa ? q : q * 0.666,
      delay: Pa ? H : H || q * 0.333,
      easing: ee
    })].join(","), M.style.opacity = 0, M.style.transform = ns(0.75), p && p(M);
  }), N = E(g);
  return /* @__PURE__ */ P(y, {
    appear: i,
    in: l,
    nodeRef: x,
    onEnter: I,
    onEntered: m,
    onEntering: k,
    onExit: $,
    onExited: N,
    onExiting: O,
    addEndListener: (M) => {
      u === "auto" && S.start(v.current || 0, M), r && r(x.current, M);
    },
    timeout: u === "auto" ? null : u,
    ...C,
    children: (M, {
      ownerState: L,
      ...H
    }) => /* @__PURE__ */ T.cloneElement(a, {
      style: {
        opacity: 0,
        transform: ns(0.75),
        visibility: M === "exited" && !l ? "hidden" : void 0,
        ...Rv[M],
        ...b,
        ...a.props.style
      },
      ref: R,
      ...H
    })
  });
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: No.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
yi && (yi.muiSupportAuto = !0);
function Pv(e) {
  const t = Yt(e);
  return t.body === e ? _n(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function uo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function oc(e) {
  return parseInt(_n(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Iv(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ic(e, t, n, r, i) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !Iv(s);
    l && c && uo(s, i);
  });
}
function Ia(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function kv(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Pv(r)) {
      const s = Xu(_n(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${oc(r) + s}px`;
      const l = Yt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${oc(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = Yt(r).body;
    else {
      const s = r.parentElement, l = _n(r);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: a,
      el: s,
      property: l
    }) => {
      a ? s.style.setProperty(l, a) : s.style.removeProperty(l);
    });
  };
}
function $v(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Mv {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && uo(t.modalRef, !1);
    const i = $v(n);
    ic(n, t.mount, t.modalRef, i, !0);
    const a = Ia(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Ia(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = kv(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Ia(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && uo(t.modalRef, n), ic(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && uo(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Nv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Dv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Av(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Lv(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Av(e));
}
function Fv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Nv)).forEach((r, i) => {
    const a = Dv(r);
    a === -1 || !Lv(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Bv() {
  return !0;
}
function vi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Fv,
    isEnabled: s = Bv,
    open: l
  } = e, c = T.useRef(!1), d = T.useRef(null), f = T.useRef(null), p = T.useRef(null), g = T.useRef(null), h = T.useRef(!1), b = T.useRef(null), u = mt(Do(t), b), y = T.useRef(null);
  T.useEffect(() => {
    !l || !b.current || (h.current = !n);
  }, [n, l]), T.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = Yt(b.current);
    return b.current.contains(v.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), h.current && b.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), T.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = Yt(b.current), w = (E) => {
      y.current = E, !(r || !s() || E.key !== "Tab") && v.activeElement === b.current && E.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, x = () => {
      var I, m;
      const E = b.current;
      if (E === null)
        return;
      if (!v.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (E.contains(v.activeElement) || r && v.activeElement !== d.current && v.activeElement !== f.current)
        return;
      if (v.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!h.current)
        return;
      let k = [];
      if ((v.activeElement === d.current || v.activeElement === f.current) && (k = a(b.current)), k.length > 0) {
        const O = !!((I = y.current) != null && I.shiftKey && ((m = y.current) == null ? void 0 : m.key) === "Tab"), $ = k[0], N = k[k.length - 1];
        typeof $ != "string" && typeof N != "string" && (O ? N.focus() : $.focus());
      } else
        E.focus();
    };
    v.addEventListener("focusin", x), v.addEventListener("keydown", w, !0);
    const R = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(R), v.removeEventListener("focusin", x), v.removeEventListener("keydown", w, !0);
    };
  }, [n, r, i, s, l, a]);
  const C = (v) => {
    p.current === null && (p.current = v.relatedTarget), h.current = !0, g.current = v.target;
    const w = t.props.onFocus;
    w && w(v);
  }, S = (v) => {
    p.current === null && (p.current = v.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ Se(T.Fragment, {
    children: [/* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: u,
      onFocus: C
    }), /* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (vi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: No,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (vi.propTypes = Yu(vi.propTypes));
function _v(e) {
  return typeof e == "function" ? e() : e;
}
const xo = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = T.useState(null), c = mt(/* @__PURE__ */ T.isValidElement(r) ? Do(r) : null, n);
  if (kn(() => {
    a || l(_v(i) || document.body);
  }, [i, a]), kn(() => {
    if (s && !a)
      return qa(n, s), () => {
        qa(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ T.isValidElement(r)) {
      const d = {
        ref: c
      };
      return /* @__PURE__ */ T.cloneElement(r, d);
    }
    return r;
  }
  return s && /* @__PURE__ */ Xf.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Bn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (xo.propTypes = Yu(xo.propTypes));
function ut(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: i,
    externalForwardedProps: a,
    internalForwardedProps: s,
    shouldForwardComponentProp: l = !1,
    ...c
  } = t, {
    component: d,
    slots: f = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...g
  } = a, h = f[e] || r, b = nd(p[e], i), {
    props: {
      component: u,
      ...y
    },
    internalRef: C
  } = td({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: b
  }), S = mt(C, b == null ? void 0 : b.ref, t.ref), v = e === "root" ? u || d : u, w = Ju(h, {
    ...e === "root" && !d && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...y,
    ...v && !l && {
      as: v
    },
    ...v && l && {
      component: v
    },
    ref: S
  }, i);
  return [h, w];
}
const jv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Sd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = ks(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: d,
    onEnter: f,
    onEntered: p,
    onEntering: g,
    onExit: h,
    onExited: b,
    onExiting: u,
    style: y,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = Nn,
    ...v
  } = t, w = T.useRef(null), x = mt(w, Do(l), n), R = (j) => (M) => {
    if (j) {
      const L = w.current;
      M === void 0 ? j(L) : j(L, M);
    }
  }, E = R(g), k = R((j, M) => {
    Td(j);
    const L = bi({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = r.transitions.create("opacity", L), j.style.transition = r.transitions.create("opacity", L), f && f(j, M);
  }), I = R(p), m = R(u), O = R((j) => {
    const M = bi({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = r.transitions.create("opacity", M), j.style.transition = r.transitions.create("opacity", M), h && h(j);
  }), $ = R(b);
  return /* @__PURE__ */ P(S, {
    appear: s,
    in: d,
    nodeRef: w,
    onEnter: k,
    onEntered: I,
    onEntering: E,
    onExit: O,
    onExited: $,
    onExiting: m,
    addEndListener: (j) => {
      a && a(w.current, j);
    },
    timeout: C,
    ...v,
    children: (j, {
      ownerState: M,
      ...L
    }) => /* @__PURE__ */ T.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: j === "exited" && !d ? "hidden" : void 0,
        ...jv[j],
        ...y,
        ...l.props.style
      },
      ref: x,
      ...L
    })
  });
});
process.env.NODE_ENV !== "production" && (Sd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: No.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function zv(e) {
  return De("MuiBackdrop", e);
}
ke("MuiBackdrop", ["root", "invisible"]);
const Wv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Le({
    root: ["root", n && "invisible"]
  }, zv, t);
}, Vv = oe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Ed = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: s = "div",
    invisible: l = !1,
    open: c,
    components: d = {},
    componentsProps: f = {},
    slotProps: p = {},
    slots: g = {},
    TransitionComponent: h,
    transitionDuration: b,
    ...u
  } = r, y = {
    ...r,
    component: s,
    invisible: l
  }, C = Wv(y), S = {
    transition: h,
    root: d.Root,
    ...g
  }, v = {
    ...f,
    ...p
  }, w = {
    slots: S,
    slotProps: v
  }, [x, R] = ut("root", {
    elementType: Vv,
    externalForwardedProps: w,
    className: de(C.root, a),
    ownerState: y
  }), [E, k] = ut("transition", {
    elementType: Sd,
    externalForwardedProps: w,
    ownerState: y
  });
  return /* @__PURE__ */ P(E, {
    in: c,
    timeout: b,
    ...u,
    ...k,
    children: /* @__PURE__ */ P(x, {
      "aria-hidden": !0,
      ...R,
      classes: C,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ed.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Hv(e) {
  return typeof e == "function" ? e() : e;
}
function Uv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ac = () => {
}, Go = new Mv();
function Yv(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: l,
    onClose: c,
    open: d,
    rootRef: f
  } = e, p = T.useRef({}), g = T.useRef(null), h = T.useRef(null), b = mt(h, f), [u, y] = T.useState(!d), C = Uv(l);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const v = () => Yt(g.current), w = () => (p.current.modalRef = h.current, p.current.mount = g.current, p.current), x = () => {
    Go.mount(w(), {
      disableScrollLock: r
    }), h.current && (h.current.scrollTop = 0);
  }, R = En(() => {
    const M = Hv(t) || v().body;
    Go.add(w(), M), h.current && x();
  }), E = () => Go.isTopModal(w()), k = En((M) => {
    g.current = M, M && (d && E() ? x() : h.current && uo(h.current, S));
  }), I = T.useCallback(() => {
    Go.remove(w(), S);
  }, [S]);
  T.useEffect(() => () => {
    I();
  }, [I]), T.useEffect(() => {
    d ? R() : (!C || !i) && I();
  }, [d, I, C, i, R]);
  const m = (M) => (L) => {
    var H;
    (H = M.onKeyDown) == null || H.call(M, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !E()) && (n || (L.stopPropagation(), c && c(L, "escapeKeyDown")));
  }, O = (M) => (L) => {
    var H;
    (H = M.onClick) == null || H.call(M, L), L.target === L.currentTarget && c && c(L, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const L = ed(e);
      delete L.onTransitionEnter, delete L.onTransitionExited;
      const H = {
        ...L,
        ...M
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...H,
        onKeyDown: m(H),
        ref: b
      };
    },
    getBackdropProps: (M = {}) => {
      const L = M;
      return {
        "aria-hidden": !0,
        ...L,
        onClick: O(L),
        open: d
      };
    },
    getTransitionProps: () => {
      const M = () => {
        y(!1), a && a();
      }, L = () => {
        y(!0), s && s(), i && I();
      };
      return {
        onEnter: Dl(M, (l == null ? void 0 : l.props.onEnter) ?? ac),
        onExited: Dl(L, (l == null ? void 0 : l.props.onExited) ?? ac)
      };
    },
    rootRef: b,
    portalRef: k,
    isTopModal: E,
    exited: u,
    hasTransition: C
  };
}
function qv(e) {
  return De("MuiModal", e);
}
ke("MuiModal", ["root", "hidden", "backdrop"]);
const Gv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Le({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, qv, r);
}, Kv = oe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Ie(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Xv = oe(Ed, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Od = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Xv,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: d,
    container: f,
    component: p,
    components: g = {},
    componentsProps: h = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: C = !1,
    disableRestoreFocus: S = !1,
    disableScrollLock: v = !1,
    hideBackdrop: w = !1,
    keepMounted: x = !1,
    onBackdropClick: R,
    onClose: E,
    onTransitionEnter: k,
    onTransitionExited: I,
    open: m,
    slotProps: O = {},
    slots: $ = {},
    // eslint-disable-next-line react/prop-types
    theme: N,
    ...j
  } = r, M = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: u,
    disableEscapeKeyDown: y,
    disablePortal: C,
    disableRestoreFocus: S,
    disableScrollLock: v,
    hideBackdrop: w,
    keepMounted: x
  }, {
    getRootProps: L,
    getBackdropProps: H,
    getTransitionProps: ee,
    portalRef: q,
    isTopModal: W,
    exited: U,
    hasTransition: ie
  } = Yv({
    ...M,
    rootRef: n
  }), J = {
    ...M,
    exited: U
  }, D = Gv(J), F = {};
  if (d.props.tabIndex === void 0 && (F.tabIndex = "-1"), ie) {
    const {
      onEnter: B,
      onExited: pe
    } = ee();
    F.onEnter = B, F.onExited = pe;
  }
  const G = {
    ...j,
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...$
    },
    slotProps: {
      ...h,
      ...O
    }
  }, [A, z] = ut("root", {
    elementType: Kv,
    externalForwardedProps: G,
    getSlotProps: L,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: J,
    className: de(l, D == null ? void 0 : D.root, !J.open && J.exited && (D == null ? void 0 : D.hidden))
  }), [X, K] = ut("backdrop", {
    elementType: i,
    externalForwardedProps: G,
    additionalProps: a,
    getSlotProps: (B) => H({
      ...B,
      onClick: (pe) => {
        R && R(pe), B != null && B.onClick && B.onClick(pe);
      }
    }),
    className: de(a == null ? void 0 : a.className, D == null ? void 0 : D.backdrop),
    ownerState: J
  }), ae = mt(a == null ? void 0 : a.ref, K.ref);
  return !x && !m && (!ie || U) ? null : /* @__PURE__ */ P(xo, {
    ref: q,
    container: f,
    disablePortal: C,
    children: /* @__PURE__ */ Se(A, {
      ...z,
      children: [!w && i ? /* @__PURE__ */ P(X, {
        ...K,
        ref: ae
      }) : null, /* @__PURE__ */ P(vi, {
        disableEnforceFocus: u,
        disableAutoFocus: b,
        disableRestoreFocus: S,
        isEnabled: W,
        open: m,
        children: /* @__PURE__ */ T.cloneElement(d, F)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Od.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: No.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Bn, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Zv(e) {
  return De("MuiPaper", e);
}
ke("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Qv = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Le(a, Zv, i);
}, Jv = oe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Ie(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), na = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var h;
  const r = Ve({
    props: t,
    name: "MuiPaper"
  }), i = ks(), {
    className: a,
    component: s = "div",
    elevation: l = 1,
    square: c = !1,
    variant: d = "elevation",
    ...f
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: c,
    variant: d
  }, g = Qv(p);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ P(Jv, {
    as: s,
    ownerState: p,
    className: de(g.root, a),
    ref: n,
    ...f,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (h = i.vars.overlays) == null ? void 0 : h[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Qe("#fff", Za(l))}, ${Qe("#fff", Za(l))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (na.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: un(Mr, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
function e0(e) {
  return De("MuiPopover", e);
}
ke("MuiPopover", ["root", "paper"]);
function sc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function lc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function cc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function oi(e) {
  return typeof e == "function" ? e() : e;
}
const t0 = (e) => {
  const {
    classes: t
  } = e;
  return Le({
    root: ["root"],
    paper: ["paper"]
  }, e0, t);
}, n0 = oe(Od, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Rd = oe(na, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Pd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: a,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: d,
    className: f,
    container: p,
    elevation: g = 8,
    marginThreshold: h = 16,
    open: b,
    PaperProps: u = {},
    slots: y = {},
    slotProps: C = {},
    transformOrigin: S = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = yi,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: x,
      ...R
    } = {},
    disableScrollLock: E = !1,
    ...k
  } = r, I = (C == null ? void 0 : C.paper) ?? u, m = T.useRef(), O = {
    ...r,
    anchorOrigin: s,
    anchorReference: c,
    elevation: g,
    marginThreshold: h,
    externalPaperSlotProps: I,
    transformOrigin: S,
    TransitionComponent: v,
    transitionDuration: w,
    TransitionProps: R
  }, $ = t0(O), N = T.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const K = oi(a), ae = K && K.nodeType === 1 ? K : Yt(m.current).body, B = ae.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const pe = ae.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && pe.top === 0 && pe.left === 0 && pe.right === 0 && pe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: B.top + sc(B, s.vertical),
      left: B.left + lc(B, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), j = T.useCallback((K) => ({
    vertical: sc(K, S.vertical),
    horizontal: lc(K, S.horizontal)
  }), [S.horizontal, S.vertical]), M = T.useCallback((K) => {
    const ae = {
      width: K.offsetWidth,
      height: K.offsetHeight
    }, B = j(ae);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: cc(B)
      };
    const pe = N();
    let ue = pe.top - B.vertical, me = pe.left - B.horizontal;
    const $e = ue + ae.height, se = me + ae.width, Ee = _n(oi(a)), fe = Ee.innerHeight - h, Oe = Ee.innerWidth - h;
    if (h !== null && ue < h) {
      const we = ue - h;
      ue -= we, B.vertical += we;
    } else if (h !== null && $e > fe) {
      const we = $e - fe;
      ue -= we, B.vertical += we;
    }
    if (process.env.NODE_ENV !== "production" && ae.height > fe && ae.height && fe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ae.height - fe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), h !== null && me < h) {
      const we = me - h;
      me -= we, B.horizontal += we;
    } else if (se > Oe) {
      const we = se - Oe;
      me -= we, B.horizontal += we;
    }
    return {
      top: `${Math.round(ue)}px`,
      left: `${Math.round(me)}px`,
      transformOrigin: cc(B)
    };
  }, [a, c, N, j, h]), [L, H] = T.useState(b), ee = T.useCallback(() => {
    const K = m.current;
    if (!K)
      return;
    const ae = M(K);
    ae.top !== null && K.style.setProperty("top", ae.top), ae.left !== null && (K.style.left = ae.left), K.style.transformOrigin = ae.transformOrigin, H(!0);
  }, [M]);
  T.useEffect(() => (E && window.addEventListener("scroll", ee), () => window.removeEventListener("scroll", ee)), [a, E, ee]);
  const q = (K, ae) => {
    x && x(K, ae), ee();
  }, W = () => {
    H(!1);
  };
  T.useEffect(() => {
    b && ee();
  }), T.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      ee();
    }
  } : null, [b, ee]), T.useEffect(() => {
    if (!b)
      return;
    const K = qu(() => {
      ee();
    }), ae = _n(a);
    return ae.addEventListener("resize", K), () => {
      K.clear(), ae.removeEventListener("resize", K);
    };
  }, [a, b, ee]);
  let U = w;
  w === "auto" && !v.muiSupportAuto && (U = void 0);
  const ie = p || (a ? Yt(oi(a)).body : void 0), J = {
    slots: y,
    slotProps: {
      ...C,
      paper: I
    }
  }, [D, F] = ut("paper", {
    elementType: Rd,
    externalForwardedProps: J,
    additionalProps: {
      elevation: g,
      className: de($.paper, I == null ? void 0 : I.className),
      style: L ? I.style : {
        ...I.style,
        opacity: 0
      }
    },
    ownerState: O
  }), [G, {
    slotProps: A,
    ...z
  }] = ut("root", {
    elementType: n0,
    externalForwardedProps: J,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ie,
      open: b
    },
    ownerState: O,
    className: de($.root, f)
  }), X = mt(m, F.ref);
  return /* @__PURE__ */ P(G, {
    ...z,
    ...!Qa(G) && {
      slotProps: A,
      disableScrollLock: E
    },
    ...k,
    ref: n,
    children: /* @__PURE__ */ P(v, {
      appear: !0,
      in: b,
      onEntering: q,
      onExited: W,
      timeout: U,
      ...R,
      children: /* @__PURE__ */ P(D, {
        ...F,
        ref: X,
        children: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Gt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: un(o.oneOfType([Bn, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = oi(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slotProps.root.slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slotProps.root.slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Bn, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Mr,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: Es
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
function r0(e) {
  return De("MuiMenu", e);
}
ke("MuiMenu", ["root", "paper", "list"]);
const o0 = {
  vertical: "top",
  horizontal: "right"
}, i0 = {
  vertical: "top",
  horizontal: "left"
}, a0 = (e) => {
  const {
    classes: t
  } = e;
  return Le({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, r0, t);
}, s0 = oe(Pd, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), l0 = oe(Rd, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), c0 = oe(wd, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ds = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: s,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: d,
    open: f,
    PaperProps: p = {},
    PopoverClasses: g,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: b,
      ...u
    } = {},
    variant: y = "selectedMenu",
    slots: C = {},
    slotProps: S = {},
    ...v
  } = r, w = Rs(), x = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: b,
    PaperProps: p,
    transitionDuration: h,
    TransitionProps: u,
    variant: y
  }, R = a0(x), E = i && !l && f, k = T.useRef(null), I = (L, H) => {
    k.current && k.current.adjustStyleForScrollbar(L, {
      direction: w ? "rtl" : "ltr"
    }), b && b(L, H);
  }, m = (L) => {
    L.key === "Tab" && (L.preventDefault(), d && d(L, "tabKeyDown"));
  };
  let O = -1;
  T.Children.map(a, (L, H) => {
    /* @__PURE__ */ T.isValidElement(L) && (process.env.NODE_ENV !== "production" && $s.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (y === "selectedMenu" && L.props.selected || O === -1) && (O = H));
  });
  const $ = C.paper ?? l0, N = S.paper ?? p, j = Ka({
    elementType: C.root,
    externalSlotProps: S.root,
    ownerState: x,
    className: [R.root, s]
  }), M = Ka({
    elementType: $,
    externalSlotProps: N,
    ownerState: x,
    className: R.paper
  });
  return /* @__PURE__ */ P(s0, {
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? o0 : i0,
    slots: {
      paper: $,
      root: C.root
    },
    slotProps: {
      root: j,
      paper: M
    },
    open: f,
    ref: n,
    transitionDuration: h,
    TransitionProps: {
      onEntering: I,
      ...u
    },
    ownerState: x,
    ...v,
    classes: g,
    children: /* @__PURE__ */ P(c0, {
      onKeyDown: m,
      actions: k,
      autoFocus: i && (O === -1 || l),
      autoFocusItem: E,
      variant: y,
      ...c,
      className: de(R.list, c.className),
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Bn, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function u0(e) {
  return De("MuiNativeSelect", e);
}
const As = ke("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), d0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${re(n)}`, a && "iconOpen", r && "disabled"]
  };
  return Le(l, u0, t);
}, Id = oe("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${As.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), f0 = oe(Id, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Kt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${As.multiple}`]: t.multiple
    }];
  }
})({}), kd = oe("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${As.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), p0 = oe(kd, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${re(n.variant)}`], n.open && t.iconOpen];
  }
})({}), $d = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard",
    ...d
  } = t, f = {
    ...t,
    disabled: i,
    variant: c,
    error: a
  }, p = d0(f);
  return /* @__PURE__ */ Se(T.Fragment, {
    children: [/* @__PURE__ */ P(f0, {
      ownerState: f,
      className: de(p.select, r),
      disabled: i,
      ref: l || n,
      ...d
    }), t.multiple ? null : /* @__PURE__ */ P(p0, {
      as: s,
      ownerState: f,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && ($d.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Gt,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
function Md(e) {
  return De("MuiSelect", e);
}
const Qr = ke("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var uc;
const m0 = oe(Id, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Qr.select}`]: t.select
      },
      {
        [`&.${Qr.select}`]: t[n.variant]
      },
      {
        [`&.${Qr.error}`]: t.error
      },
      {
        [`&.${Qr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Qr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), h0 = oe(kd, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${re(n.variant)}`], n.open && t.iconOpen];
  }
})({}), g0 = oe("input", {
  shouldForwardProp: (e) => cd(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function dc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function b0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const y0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${re(n)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Le(l, Md, t);
}, Nd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var $t;
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: d,
    defaultValue: f,
    disabled: p,
    displayEmpty: g,
    error: h = !1,
    IconComponent: b,
    inputRef: u,
    labelId: y,
    MenuProps: C = {},
    multiple: S,
    name: v,
    onBlur: w,
    onChange: x,
    onClose: R,
    onFocus: E,
    onOpen: k,
    open: I,
    readOnly: m,
    renderValue: O,
    required: $,
    SelectDisplayProps: N = {},
    tabIndex: j,
    // catching `type` from Input which makes no sense for SelectInput
    type: M,
    value: L,
    variant: H = "standard",
    ...ee
  } = t, [q, W] = $r({
    controlled: L,
    default: f,
    name: "Select"
  }), [U, ie] = $r({
    controlled: I,
    default: d,
    name: "Select"
  }), J = T.useRef(null), D = T.useRef(null), [F, G] = T.useState(null), {
    current: A
  } = T.useRef(I != null), [z, X] = T.useState(), K = mt(n, u), ae = T.useCallback((te) => {
    D.current = te, te && G(te);
  }, []), B = F == null ? void 0 : F.parentNode;
  T.useImperativeHandle(K, () => ({
    focus: () => {
      D.current.focus();
    },
    node: J.current,
    value: q
  }), [q]), T.useEffect(() => {
    d && U && F && !A && (X(s ? null : B.clientWidth), D.current.focus());
  }, [F, s]), T.useEffect(() => {
    a && D.current.focus();
  }, [a]), T.useEffect(() => {
    if (!y)
      return;
    const te = Yt(D.current).getElementById(y);
    if (te) {
      const Ce = () => {
        getSelection().isCollapsed && D.current.focus();
      };
      return te.addEventListener("click", Ce), () => {
        te.removeEventListener("click", Ce);
      };
    }
  }, [y]);
  const pe = (te, Ce) => {
    te ? k && k(Ce) : R && R(Ce), A || (X(s ? null : B.clientWidth), ie(te));
  }, ue = (te) => {
    te.button === 0 && (te.preventDefault(), D.current.focus(), pe(!0, te));
  }, me = (te) => {
    pe(!1, te);
  }, $e = T.Children.toArray(l), se = (te) => {
    const Ce = $e.find((Re) => Re.props.value === te.target.value);
    Ce !== void 0 && (W(Ce.props.value), x && x(te, Ce));
  }, Ee = (te) => (Ce) => {
    let Re;
    if (Ce.currentTarget.hasAttribute("tabindex")) {
      if (S) {
        Re = Array.isArray(q) ? q.slice() : [];
        const yt = q.indexOf(te.props.value);
        yt === -1 ? Re.push(te.props.value) : Re.splice(yt, 1);
      } else
        Re = te.props.value;
      if (te.props.onClick && te.props.onClick(Ce), q !== Re && (W(Re), x)) {
        const yt = Ce.nativeEvent || Ce, Et = new yt.constructor(yt.type, yt);
        Object.defineProperty(Et, "target", {
          writable: !0,
          value: {
            value: Re,
            name: v
          }
        }), x(Et, te);
      }
      S || pe(!1, Ce);
    }
  }, fe = (te) => {
    m || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(te.key) && (te.preventDefault(), pe(!0, te));
  }, Oe = F !== null && U, we = (te) => {
    !Oe && w && (Object.defineProperty(te, "target", {
      writable: !0,
      value: {
        value: q,
        name: v
      }
    }), w(te));
  };
  delete ee["aria-invalid"];
  let le, tt;
  const je = [];
  let bt = !1, Pt = !1;
  (pi({
    value: q
  }) || g) && (O ? le = O(q) : bt = !0);
  const ft = $e.map((te) => {
    if (!/* @__PURE__ */ T.isValidElement(te))
      return null;
    process.env.NODE_ENV !== "production" && $s.isFragment(te) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ce;
    if (S) {
      if (!Array.isArray(q))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : In(2));
      Ce = q.some((Re) => dc(Re, te.props.value)), Ce && bt && je.push(te.props.children);
    } else
      Ce = dc(q, te.props.value), Ce && bt && (tt = te.props.children);
    return Ce && (Pt = !0), /* @__PURE__ */ T.cloneElement(te, {
      "aria-selected": Ce ? "true" : "false",
      onClick: Ee(te),
      onKeyUp: (Re) => {
        Re.key === " " && Re.preventDefault(), te.props.onKeyUp && te.props.onKeyUp(Re);
      },
      role: "option",
      selected: Ce,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": te.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (!Pt && !S && q !== "") {
      const te = $e.map((Ce) => Ce.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${q}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${te.filter((Ce) => Ce != null).map((Ce) => `\`${Ce}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Pt, $e, S, v, q]), bt && (S ? je.length === 0 ? le = null : le = je.reduce((te, Ce, Re) => (te.push(Ce), Re < je.length - 1 && te.push(", "), te), []) : le = tt);
  let It = z;
  !s && A && F && (It = B.clientWidth);
  let Fe;
  typeof j < "u" ? Fe = j : Fe = p ? null : 0;
  const Ae = N.id || (v ? `mui-component-select-${v}` : void 0), ye = {
    ...t,
    variant: H,
    value: q,
    open: Oe,
    error: h
  }, ht = y0(ye), xt = {
    ...C.PaperProps,
    ...($t = C.slotProps) == null ? void 0 : $t.paper
  }, Dn = Lr();
  return /* @__PURE__ */ Se(T.Fragment, {
    children: [/* @__PURE__ */ P(m0, {
      as: "div",
      ref: ae,
      tabIndex: Fe,
      role: "combobox",
      "aria-controls": Oe ? Dn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Oe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [y, Ae].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": $ ? "true" : void 0,
      "aria-invalid": h ? "true" : void 0,
      onKeyDown: fe,
      onMouseDown: p || m ? null : ue,
      onBlur: we,
      onFocus: E,
      ...N,
      ownerState: ye,
      className: de(N.className, ht.select, c),
      id: Ae,
      children: b0(le) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        uc || (uc = /* @__PURE__ */ P("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : le
    }), /* @__PURE__ */ P(g0, {
      "aria-invalid": h,
      value: Array.isArray(q) ? q.join(",") : q,
      name: v,
      ref: J,
      "aria-hidden": !0,
      onChange: se,
      tabIndex: -1,
      disabled: p,
      className: ht.nativeInput,
      autoFocus: a,
      required: $,
      ...ee,
      ownerState: ye
    }), /* @__PURE__ */ P(h0, {
      as: b,
      className: ht.icon,
      ownerState: ye
    }), /* @__PURE__ */ P(Ds, {
      id: `menu-${v || ""}`,
      anchorEl: B,
      open: Oe,
      onClose: me,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...C,
      MenuListProps: {
        "aria-labelledby": y,
        role: "listbox",
        "aria-multiselectable": S ? "true" : void 0,
        disableListWrap: !0,
        id: Dn,
        ...C.MenuListProps
      },
      slotProps: {
        ...C.slotProps,
        paper: {
          ...xt,
          style: {
            minWidth: It,
            ...xt != null ? xt.style : null
          }
        }
      },
      children: ft
    })]
  });
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Gt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * If `true`, the component is required.
   */
  required: o.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const Dd = Mn(/* @__PURE__ */ P("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), v0 = (e) => {
  const {
    classes: t
  } = e, r = Le({
    root: ["root"]
  }, Md, t);
  return {
    ...t,
    ...r
  };
}, Ls = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Kt(e) && e !== "variant",
  slot: "Root"
}, w0 = oe(Ji, Ls)(""), x0 = oe(ta, Ls)(""), C0 = oe(ea, Ls)(""), ra = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: d = !1,
    IconComponent: f = Dd,
    id: p,
    input: g,
    inputProps: h,
    label: b,
    labelId: u,
    MenuProps: y,
    multiple: C = !1,
    native: S = !1,
    onClose: v,
    onOpen: w,
    open: x,
    renderValue: R,
    SelectDisplayProps: E,
    variant: k = "outlined",
    ...I
  } = r, m = S ? $d : Nd, O = mr(), $ = Ur({
    props: r,
    muiFormControl: O,
    states: ["variant", "error"]
  }), N = $.variant || k, j = {
    ...r,
    variant: N,
    classes: s
  }, M = v0(j), {
    root: L,
    ...H
  } = M, ee = g || {
    standard: /* @__PURE__ */ P(w0, {
      ownerState: j
    }),
    outlined: /* @__PURE__ */ P(x0, {
      label: b,
      ownerState: j
    }),
    filled: /* @__PURE__ */ P(C0, {
      ownerState: j
    })
  }[N], q = mt(n, Do(ee));
  return /* @__PURE__ */ P(T.Fragment, {
    children: /* @__PURE__ */ T.cloneElement(ee, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: m,
      inputProps: {
        children: a,
        error: $.error,
        IconComponent: f,
        variant: N,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C,
        ...S ? {
          id: p
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: d,
          labelId: u,
          MenuProps: y,
          onClose: v,
          onOpen: w,
          open: x,
          renderValue: R,
          SelectDisplayProps: {
            id: p,
            ...E
          }
        },
        ...h,
        classes: h ? Rt(H, h.classes) : H,
        ...g ? g.props.inputProps : {}
      },
      ...(C && S || d) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: q,
      className: de(ee.props.className, l, M.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!g && {
        variant: N
      },
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
ra.muiName = "Select";
function T0(e) {
  return De("MuiTextField", e);
}
ke("MuiTextField", ["root"]);
const S0 = {
  standard: Ji,
  filled: ea,
  outlined: ta
}, E0 = (e) => {
  const {
    classes: t
  } = e;
  return Le({
    root: ["root"]
  }, T0, t);
}, O0 = oe(gd, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ad = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: a = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: d,
    disabled: f = !1,
    error: p = !1,
    FormHelperTextProps: g,
    fullWidth: h = !1,
    helperText: b,
    id: u,
    InputLabelProps: y,
    inputProps: C,
    InputProps: S,
    inputRef: v,
    label: w,
    maxRows: x,
    minRows: R,
    multiline: E = !1,
    name: k,
    onBlur: I,
    onChange: m,
    onFocus: O,
    placeholder: $,
    required: N = !1,
    rows: j,
    select: M = !1,
    SelectProps: L,
    slots: H = {},
    slotProps: ee = {},
    type: q,
    value: W,
    variant: U = "outlined",
    ...ie
  } = r, J = {
    ...r,
    autoFocus: a,
    color: c,
    disabled: f,
    error: p,
    fullWidth: h,
    multiline: E,
    required: N,
    select: M,
    variant: U
  }, D = E0(J);
  process.env.NODE_ENV !== "production" && M && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const F = Lr(u), G = b && F ? `${F}-helper-text` : void 0, A = w && F ? `${F}-label` : void 0, z = S0[U], X = {
    slots: H,
    slotProps: {
      input: S,
      inputLabel: y,
      htmlInput: C,
      formHelperText: g,
      select: L,
      ...ee
    }
  }, K = {}, ae = X.slotProps.inputLabel;
  U === "outlined" && (ae && typeof ae.shrink < "u" && (K.notched = ae.shrink), K.label = w), M && ((!L || !L.native) && (K.id = void 0), K["aria-describedby"] = void 0);
  const [B, pe] = ut("input", {
    elementType: z,
    externalForwardedProps: X,
    additionalProps: K,
    ownerState: J
  }), [ue, me] = ut("inputLabel", {
    elementType: hd,
    externalForwardedProps: X,
    ownerState: J
  }), [$e, se] = ut("htmlInput", {
    elementType: "input",
    externalForwardedProps: X,
    ownerState: J
  }), [Ee, fe] = ut("formHelperText", {
    elementType: bd,
    externalForwardedProps: X,
    ownerState: J
  }), [Oe, we] = ut("select", {
    elementType: ra,
    externalForwardedProps: X,
    ownerState: J
  }), le = /* @__PURE__ */ P(B, {
    "aria-describedby": G,
    autoComplete: i,
    autoFocus: a,
    defaultValue: d,
    fullWidth: h,
    multiline: E,
    name: k,
    rows: j,
    maxRows: x,
    minRows: R,
    type: q,
    value: W,
    id: F,
    inputRef: v,
    onBlur: I,
    onChange: m,
    onFocus: O,
    placeholder: $,
    inputProps: se,
    slots: {
      input: H.htmlInput ? $e : void 0
    },
    ...pe
  });
  return /* @__PURE__ */ Se(O0, {
    className: de(D.root, l),
    disabled: f,
    error: p,
    fullWidth: h,
    ref: n,
    required: N,
    color: c,
    variant: U,
    ownerState: J,
    ...ie,
    children: [w != null && w !== "" && /* @__PURE__ */ P(ue, {
      htmlFor: F,
      id: A,
      ...me,
      children: w
    }), M ? /* @__PURE__ */ P(Oe, {
      "aria-describedby": G,
      id: F,
      labelId: A,
      value: W,
      input: le,
      ...we,
      children: s
    }) : le, b && /* @__PURE__ */ P(Ee, {
      id: G,
      ...fe,
      children: b
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ad.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Gt,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    formHelperText: o.oneOfType([o.func, o.object]),
    htmlInput: o.oneOfType([o.func, o.object]),
    input: o.oneOfType([o.func, o.object]),
    inputLabel: o.oneOfType([o.func, o.object]),
    select: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    formHelperText: o.elementType,
    htmlInput: o.elementType,
    input: o.elementType,
    inputLabel: o.elementType,
    select: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const Ld = Pn(Ad)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${gt.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${gt.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${gt.gray800};
  }

  fieldset {
    display: none;
  }

}
`, Fs = wt.createContext({
  filters: {},
  setFilters: () => {
  }
}), R0 = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, i] = wt.useState({});
  return /* @__PURE__ */ P(
    Fs.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? i
      },
      children: e
    }
  );
};
function fc(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function P0(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: i = "any",
    stringify: a,
    trim: s = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: d
  }) => {
    let f = s ? c.trim() : c;
    n && (f = f.toLowerCase()), t && (f = fc(f));
    const p = f ? l.filter((g) => {
      let h = (a || d)(g);
      return n && (h = h.toLowerCase()), t && (h = fc(h)), i === "start" ? h.startsWith(f) : h.includes(f);
    }) : l;
    return typeof r == "number" ? p.slice(0, r) : p;
  };
}
const I0 = P0(), pc = 5, k0 = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, $0 = [];
function mc(e, t, n) {
  if (t || e == null)
    return "";
  const r = n(e);
  return typeof r == "string" ? r : "";
}
function M0(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = k0,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: d = "useAutocomplete",
    defaultValue: f = e.multiple ? $0 : null,
    disableClearable: p = !1,
    disableCloseOnSelect: g = !1,
    disabled: h,
    disabledItemsFocusable: b = !1,
    disableListWrap: u = !1,
    filterOptions: y = I0,
    filterSelectedOptions: C = !1,
    freeSolo: S = !1,
    getOptionDisabled: v,
    getOptionKey: w,
    getOptionLabel: x = (Y) => Y.label ?? Y,
    groupBy: R,
    handleHomeEndKeys: E = !e.freeSolo,
    id: k,
    includeInputInList: I = !1,
    inputValue: m,
    isOptionEqualToValue: O = (Y, _) => Y === _,
    multiple: $ = !1,
    onChange: N,
    onClose: j,
    onHighlightChange: M,
    onInputChange: L,
    onOpen: H,
    open: ee,
    openOnFocus: q = !1,
    options: W,
    readOnly: U = !1,
    selectOnFocus: ie = !e.freeSolo,
    value: J
  } = e, D = Lr(k);
  let F = x;
  F = (Y) => {
    const _ = x(Y);
    if (typeof _ != "string") {
      if (process.env.NODE_ENV !== "production") {
        const ne = _ === void 0 ? "undefined" : `${typeof _} (${_})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${d} returned ${ne} instead of a string for ${JSON.stringify(Y)}.`);
      }
      return String(_);
    }
    return _;
  };
  const G = T.useRef(!1), A = T.useRef(!0), z = T.useRef(null), X = T.useRef(null), [K, ae] = T.useState(null), [B, pe] = T.useState(-1), ue = i ? 0 : -1, me = T.useRef(ue), $e = T.useRef(mc(f, $, F)).current, [se, Ee] = $r({
    controlled: J,
    default: f,
    name: d
  }), [fe, Oe] = $r({
    controlled: m,
    default: $e,
    name: d,
    state: "inputValue"
  }), [we, le] = T.useState(!1), tt = T.useCallback((Y, _, ne) => {
    if (!($ ? se.length < _.length : _ !== null) && !l)
      return;
    const ve = mc(_, $, F);
    fe !== ve && (Oe(ve), L && L(Y, ve, ne));
  }, [F, fe, $, L, Oe, l, se]), [je, bt] = $r({
    controlled: ee,
    default: !1,
    name: d,
    state: "open"
  }), [Pt, ft] = T.useState(!0), It = !$ && se != null && fe === F(se), Fe = je && !U, Ae = Fe ? y(
    W.filter((Y) => !(C && ($ ? se : [se]).some((_) => _ !== null && O(Y, _)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: It && Pt ? "" : fe,
      getOptionLabel: F
    }
  ) : [], ye = Lb({
    filteredOptions: Ae,
    value: se,
    inputValue: fe
  });
  T.useEffect(() => {
    const Y = se !== ye.value;
    we && !Y || S && !Y || tt(null, se, "reset");
  }, [se, tt, we, ye.value, S]);
  const ht = je && Ae.length > 0 && !U, xt = En((Y) => {
    Y === -1 ? z.current.focus() : K.querySelector(`[data-tag-index="${Y}"]`).focus();
  });
  T.useEffect(() => {
    $ && B > se.length - 1 && (pe(-1), xt(-1));
  }, [se, $, B, xt]);
  function Dn(Y, _) {
    if (!X.current || Y < 0 || Y >= Ae.length)
      return -1;
    let ne = Y;
    for (; ; ) {
      const be = X.current.querySelector(`[data-option-index="${ne}"]`), ve = b ? !1 : !be || be.disabled || be.getAttribute("aria-disabled") === "true";
      if (be && be.hasAttribute("tabindex") && !ve)
        return ne;
      if (_ === "next" ? ne = (ne + 1) % Ae.length : ne = (ne - 1 + Ae.length) % Ae.length, ne === Y)
        return -1;
    }
  }
  const $t = En(({
    event: Y,
    index: _,
    reason: ne = "auto"
  }) => {
    if (me.current = _, _ === -1 ? z.current.removeAttribute("aria-activedescendant") : z.current.setAttribute("aria-activedescendant", `${D}-option-${_}`), M && M(Y, _ === -1 ? null : Ae[_], ne), !X.current)
      return;
    const be = X.current.querySelector(`[role="option"].${n}-focused`);
    be && (be.classList.remove(`${n}-focused`), be.classList.remove(`${n}-focusVisible`));
    let ve = X.current;
    if (X.current.getAttribute("role") !== "listbox" && (ve = X.current.parentElement.querySelector('[role="listbox"]')), !ve)
      return;
    if (_ === -1) {
      ve.scrollTop = 0;
      return;
    }
    const Pe = X.current.querySelector(`[data-option-index="${_}"]`);
    if (Pe && (Pe.classList.add(`${n}-focused`), ne === "keyboard" && Pe.classList.add(`${n}-focusVisible`), ve.scrollHeight > ve.clientHeight && ne !== "mouse" && ne !== "touch")) {
      const rt = Pe, Ct = ve.clientHeight + ve.scrollTop, rr = rt.offsetTop + rt.offsetHeight;
      rr > Ct ? ve.scrollTop = rr - ve.clientHeight : rt.offsetTop - rt.offsetHeight * (R ? 1.3 : 0) < ve.scrollTop && (ve.scrollTop = rt.offsetTop - rt.offsetHeight * (R ? 1.3 : 0));
    }
  }), te = En(({
    event: Y,
    diff: _,
    direction: ne = "next",
    reason: be = "auto"
  }) => {
    if (!Fe)
      return;
    const Pe = Dn((() => {
      const rt = Ae.length - 1;
      if (_ === "reset")
        return ue;
      if (_ === "start")
        return 0;
      if (_ === "end")
        return rt;
      const Ct = me.current + _;
      return Ct < 0 ? Ct === -1 && I ? -1 : u && me.current !== -1 || Math.abs(_) > 1 ? 0 : rt : Ct > rt ? Ct === rt + 1 && I ? -1 : u || Math.abs(_) > 1 ? rt : 0 : Ct;
    })(), ne);
    if ($t({
      index: Pe,
      reason: be,
      event: Y
    }), r && _ !== "reset")
      if (Pe === -1)
        z.current.value = fe;
      else {
        const rt = F(Ae[Pe]);
        z.current.value = rt, rt.toLowerCase().indexOf(fe.toLowerCase()) === 0 && fe.length > 0 && z.current.setSelectionRange(fe.length, rt.length);
      }
  }), Ce = () => {
    const Y = (_, ne) => {
      const be = _ ? F(_) : "", ve = ne ? F(ne) : "";
      return be === ve;
    };
    if (me.current !== -1 && ye.filteredOptions && ye.filteredOptions.length !== Ae.length && ye.inputValue === fe && ($ ? se.length === ye.value.length && ye.value.every((_, ne) => F(se[ne]) === F(_)) : Y(ye.value, se))) {
      const _ = ye.filteredOptions[me.current];
      if (_)
        return Ae.findIndex((ne) => F(ne) === F(_));
    }
    return -1;
  }, Re = T.useCallback(() => {
    if (!Fe)
      return;
    const Y = Ce();
    if (Y !== -1) {
      me.current = Y;
      return;
    }
    const _ = $ ? se[0] : se;
    if (Ae.length === 0 || _ == null) {
      te({
        diff: "reset"
      });
      return;
    }
    if (X.current) {
      if (_ != null) {
        const ne = Ae[me.current];
        if ($ && ne && se.findIndex((ve) => O(ne, ve)) !== -1)
          return;
        const be = Ae.findIndex((ve) => O(ve, _));
        be === -1 ? te({
          diff: "reset"
        }) : $t({
          index: be
        });
        return;
      }
      if (me.current >= Ae.length - 1) {
        $t({
          index: Ae.length - 1
        });
        return;
      }
      $t({
        index: me.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Ae.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    $ ? !1 : se,
    C,
    te,
    $t,
    Fe,
    fe,
    $
  ]), yt = En((Y) => {
    qa(X, Y), Y && Re();
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    (!z.current || z.current.nodeName !== "INPUT") && (z.current && z.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${d} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${z.current} while an HTMLInputElement was expected.`, `Instead, ${d} expects an input element.`, "", d === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [d]), T.useEffect(() => {
    Re();
  }, [Re]);
  const Et = (Y) => {
    je || (bt(!0), ft(!0), H && H(Y));
  }, fn = (Y, _) => {
    je && (bt(!1), j && j(Y, _));
  }, pn = (Y, _, ne, be) => {
    if ($) {
      if (se.length === _.length && se.every((ve, Pe) => ve === _[Pe]))
        return;
    } else if (se === _)
      return;
    N && N(Y, _, ne, be), Ee(_);
  }, zn = T.useRef(!1), Xt = (Y, _, ne = "selectOption", be = "options") => {
    let ve = ne, Pe = _;
    if ($) {
      if (Pe = Array.isArray(se) ? se.slice() : [], process.env.NODE_ENV !== "production") {
        const Ct = Pe.filter((rr) => O(_, rr));
        Ct.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${d} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ct.length} matches.`].join(`
`));
      }
      const rt = Pe.findIndex((Ct) => O(_, Ct));
      rt === -1 ? Pe.push(_) : be !== "freeSolo" && (Pe.splice(rt, 1), ve = "removeOption");
    }
    tt(Y, Pe, ve), pn(Y, Pe, ve, {
      option: _
    }), !g && (!Y || !Y.ctrlKey && !Y.metaKey) && fn(Y, ve), (s === !0 || s === "touch" && zn.current || s === "mouse" && !zn.current) && z.current.blur();
  };
  function mn(Y, _) {
    if (Y === -1)
      return -1;
    let ne = Y;
    for (; ; ) {
      if (_ === "next" && ne === se.length || _ === "previous" && ne === -1)
        return -1;
      const be = K.querySelector(`[data-tag-index="${ne}"]`);
      if (!be || !be.hasAttribute("tabindex") || be.disabled || be.getAttribute("aria-disabled") === "true")
        ne += _ === "next" ? 1 : -1;
      else
        return ne;
    }
  }
  const sn = (Y, _) => {
    if (!$)
      return;
    fe === "" && fn(Y, "toggleInput");
    let ne = B;
    B === -1 ? fe === "" && _ === "previous" && (ne = se.length - 1) : (ne += _ === "next" ? 1 : -1, ne < 0 && (ne = 0), ne === se.length && (ne = -1)), ne = mn(ne, _), pe(ne), xt(ne);
  }, hn = (Y) => {
    G.current = !0, Oe(""), L && L(Y, "", "clear"), pn(Y, $ ? [] : null, "clear");
  }, gn = (Y) => (_) => {
    if (Y.onKeyDown && Y.onKeyDown(_), !_.defaultMuiPrevented && (B !== -1 && !["ArrowLeft", "ArrowRight"].includes(_.key) && (pe(-1), xt(-1)), _.which !== 229))
      switch (_.key) {
        case "Home":
          Fe && E && (_.preventDefault(), te({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: _
          }));
          break;
        case "End":
          Fe && E && (_.preventDefault(), te({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: _
          }));
          break;
        case "PageUp":
          _.preventDefault(), te({
            diff: -pc,
            direction: "previous",
            reason: "keyboard",
            event: _
          }), Et(_);
          break;
        case "PageDown":
          _.preventDefault(), te({
            diff: pc,
            direction: "next",
            reason: "keyboard",
            event: _
          }), Et(_);
          break;
        case "ArrowDown":
          _.preventDefault(), te({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: _
          }), Et(_);
          break;
        case "ArrowUp":
          _.preventDefault(), te({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: _
          }), Et(_);
          break;
        case "ArrowLeft":
          sn(_, "previous");
          break;
        case "ArrowRight":
          sn(_, "next");
          break;
        case "Enter":
          if (me.current !== -1 && Fe) {
            const ne = Ae[me.current], be = v ? v(ne) : !1;
            if (_.preventDefault(), be)
              return;
            Xt(_, ne, "selectOption"), r && z.current.setSelectionRange(z.current.value.length, z.current.value.length);
          } else S && fe !== "" && It === !1 && ($ && _.preventDefault(), Xt(_, fe, "createOption", "freeSolo"));
          break;
        case "Escape":
          Fe ? (_.preventDefault(), _.stopPropagation(), fn(_, "escape")) : c && (fe !== "" || $ && se.length > 0) && (_.preventDefault(), _.stopPropagation(), hn(_));
          break;
        case "Backspace":
          if ($ && !U && fe === "" && se.length > 0) {
            const ne = B === -1 ? se.length - 1 : B, be = se.slice();
            be.splice(ne, 1), pn(_, be, "removeOption", {
              option: se[ne]
            });
          }
          break;
        case "Delete":
          if ($ && !U && fe === "" && se.length > 0 && B !== -1) {
            const ne = B, be = se.slice();
            be.splice(ne, 1), pn(_, be, "removeOption", {
              option: se[ne]
            });
          }
          break;
      }
  }, tr = (Y) => {
    le(!0), q && !G.current && Et(Y);
  }, lt = (Y) => {
    if (t(X)) {
      z.current.focus();
      return;
    }
    le(!1), A.current = !0, G.current = !1, a && me.current !== -1 && Fe ? Xt(Y, Ae[me.current], "blur") : a && S && fe !== "" ? Xt(Y, fe, "blur", "freeSolo") : l && tt(Y, se, "blur"), fn(Y, "blur");
  }, bn = (Y) => {
    const _ = Y.target.value;
    fe !== _ && (Oe(_), ft(!1), L && L(Y, _, "input")), _ === "" ? !p && !$ && pn(Y, null, "clear") : Et(Y);
  }, _t = (Y) => {
    const _ = Number(Y.currentTarget.getAttribute("data-option-index"));
    me.current !== _ && $t({
      event: Y,
      index: _,
      reason: "mouse"
    });
  }, ce = (Y) => {
    $t({
      event: Y,
      index: Number(Y.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), zn.current = !0;
  }, yn = (Y) => {
    const _ = Number(Y.currentTarget.getAttribute("data-option-index"));
    Xt(Y, Ae[_], "selectOption"), zn.current = !1;
  }, nr = (Y) => (_) => {
    const ne = se.slice();
    ne.splice(Y, 1), pn(_, ne, "removeOption", {
      option: se[Y]
    });
  }, hr = (Y) => {
    je ? fn(Y, "toggleInput") : Et(Y);
  }, Wn = (Y) => {
    Y.currentTarget.contains(Y.target) && Y.target.getAttribute("id") !== D && Y.preventDefault();
  }, ct = (Y) => {
    Y.currentTarget.contains(Y.target) && (z.current.focus(), ie && A.current && z.current.selectionEnd - z.current.selectionStart === 0 && z.current.select(), A.current = !1);
  }, nt = (Y) => {
    !h && (fe === "" || !je) && hr(Y);
  };
  let Mt = S && fe.length > 0;
  Mt = Mt || ($ ? se.length > 0 : se !== null);
  let Vn = Ae;
  if (R) {
    const Y = /* @__PURE__ */ new Map();
    let _ = !1;
    Vn = Ae.reduce((ne, be, ve) => {
      const Pe = R(be);
      return ne.length > 0 && ne[ne.length - 1].group === Pe ? ne[ne.length - 1].options.push(be) : (process.env.NODE_ENV !== "production" && (Y.get(Pe) && !_ && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${d} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), _ = !0), Y.set(Pe, !0)), ne.push({
        key: ve,
        index: ve,
        group: Pe,
        options: [be]
      })), ne;
    }, []);
  }
  return h && we && lt(), {
    getRootProps: (Y = {}) => ({
      "aria-owns": ht ? `${D}-listbox` : null,
      ...Y,
      onKeyDown: gn(Y),
      onMouseDown: Wn,
      onClick: ct
    }),
    getInputLabelProps: () => ({
      id: `${D}-label`,
      htmlFor: D
    }),
    getInputProps: () => ({
      id: D,
      value: fe,
      onBlur: lt,
      onFocus: tr,
      onChange: bn,
      onMouseDown: nt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Fe ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": ht ? `${D}-listbox` : void 0,
      "aria-expanded": ht,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: z,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: h
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: hn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: hr
    }),
    getTagProps: ({
      index: Y
    }) => ({
      key: Y,
      "data-tag-index": Y,
      tabIndex: -1,
      ...!U && {
        onDelete: nr(Y)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${D}-listbox`,
      "aria-labelledby": `${D}-label`,
      ref: yt,
      onMouseDown: (Y) => {
        Y.preventDefault();
      }
    }),
    getOptionProps: ({
      index: Y,
      option: _
    }) => {
      const ne = ($ ? se : [se]).some((ve) => ve != null && O(_, ve)), be = v ? v(_) : !1;
      return {
        key: (w == null ? void 0 : w(_)) ?? F(_),
        tabIndex: -1,
        role: "option",
        id: `${D}-option-${Y}`,
        onMouseMove: _t,
        onClick: yn,
        onTouchStart: ce,
        "data-option-index": Y,
        "aria-disabled": be,
        "aria-selected": ne
      };
    },
    id: D,
    inputValue: fe,
    value: se,
    dirty: Mt,
    expanded: Fe && K,
    popupOpen: Fe,
    focused: we || B !== -1,
    anchorEl: K,
    setAnchorEl: ae,
    focusedTag: B,
    groupedOptions: Vn
  };
}
var Lt = "top", rn = "bottom", on = "right", Ft = "left", Bs = "auto", Lo = [Lt, rn, on, Ft], Fr = "start", Co = "end", N0 = "clippingParents", Fd = "viewport", Jr = "popper", D0 = "reference", hc = /* @__PURE__ */ Lo.reduce(function(e, t) {
  return e.concat([t + "-" + Fr, t + "-" + Co]);
}, []), Bd = /* @__PURE__ */ [].concat(Lo, [Bs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Fr, t + "-" + Co]);
}, []), A0 = "beforeRead", L0 = "read", F0 = "afterRead", B0 = "beforeMain", _0 = "main", j0 = "afterMain", z0 = "beforeWrite", W0 = "write", V0 = "afterWrite", H0 = [A0, L0, F0, B0, _0, j0, z0, W0, V0];
function $n(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function pr(e) {
  var t = qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function nn(e) {
  var t = qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _s(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function U0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !nn(a) || !$n(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Y0(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(c, d) {
        return c[d] = "", c;
      }, {});
      !nn(i) || !$n(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const q0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: U0,
  effect: Y0,
  requires: ["computeStyles"]
};
function Rn(e) {
  return e.split("-")[0];
}
var dr = Math.max, wi = Math.min, Br = Math.round;
function rs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _d() {
  return !/^((?!chrome|android).)*safari/i.test(rs());
}
function _r(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && nn(e) && (i = e.offsetWidth > 0 && Br(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Br(r.height) / e.offsetHeight || 1);
  var s = pr(e) ? qt(e) : window, l = s.visualViewport, c = !_d() && n, d = (r.left + (c && l ? l.offsetLeft : 0)) / i, f = (r.top + (c && l ? l.offsetTop : 0)) / a, p = r.width / i, g = r.height / a;
  return {
    width: p,
    height: g,
    top: f,
    right: d + p,
    bottom: f + g,
    left: d,
    x: d,
    y: f
  };
}
function js(e) {
  var t = _r(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function jd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && _s(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function jn(e) {
  return qt(e).getComputedStyle(e);
}
function G0(e) {
  return ["table", "td", "th"].indexOf($n(e)) >= 0;
}
function er(e) {
  return ((pr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function oa(e) {
  return $n(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (_s(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    er(e)
  );
}
function gc(e) {
  return !nn(e) || // https://github.com/popperjs/popper-core/issues/837
  jn(e).position === "fixed" ? null : e.offsetParent;
}
function K0(e) {
  var t = /firefox/i.test(rs()), n = /Trident/i.test(rs());
  if (n && nn(e)) {
    var r = jn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = oa(e);
  for (_s(i) && (i = i.host); nn(i) && ["html", "body"].indexOf($n(i)) < 0; ) {
    var a = jn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Fo(e) {
  for (var t = qt(e), n = gc(e); n && G0(n) && jn(n).position === "static"; )
    n = gc(n);
  return n && ($n(n) === "html" || $n(n) === "body" && jn(n).position === "static") ? t : n || K0(e) || t;
}
function zs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fo(e, t, n) {
  return dr(e, wi(t, n));
}
function X0(e, t, n) {
  var r = fo(e, t, n);
  return r > n ? n : r;
}
function zd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Wd(e) {
  return Object.assign({}, zd(), e);
}
function Vd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Z0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Wd(typeof t != "number" ? t : Vd(t, Lo));
};
function Q0(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Rn(n.placement), c = zs(l), d = [Ft, on].indexOf(l) >= 0, f = d ? "height" : "width";
  if (!(!a || !s)) {
    var p = Z0(i.padding, n), g = js(a), h = c === "y" ? Lt : Ft, b = c === "y" ? rn : on, u = n.rects.reference[f] + n.rects.reference[c] - s[c] - n.rects.popper[f], y = s[c] - n.rects.reference[c], C = Fo(a), S = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, v = u / 2 - y / 2, w = p[h], x = S - g[f] - p[b], R = S / 2 - g[f] / 2 + v, E = fo(w, R, x), k = c;
    n.modifiersData[r] = (t = {}, t[k] = E, t.centerOffset = E - R, t);
  }
}
function J0(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || jd(t.elements.popper, i) && (t.elements.arrow = i));
}
const ew = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Q0,
  effect: J0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function jr(e) {
  return e.split("-")[1];
}
var tw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function nw(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Br(n * i) / i || 0,
    y: Br(r * i) / i || 0
  };
}
function bc(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, d = e.adaptive, f = e.roundOffsets, p = e.isFixed, g = s.x, h = g === void 0 ? 0 : g, b = s.y, u = b === void 0 ? 0 : b, y = typeof f == "function" ? f({
    x: h,
    y: u
  }) : {
    x: h,
    y: u
  };
  h = y.x, u = y.y;
  var C = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), v = Ft, w = Lt, x = window;
  if (d) {
    var R = Fo(n), E = "clientHeight", k = "clientWidth";
    if (R === qt(n) && (R = er(n), jn(R).position !== "static" && l === "absolute" && (E = "scrollHeight", k = "scrollWidth")), R = R, i === Lt || (i === Ft || i === on) && a === Co) {
      w = rn;
      var I = p && R === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[E]
      );
      u -= I - r.height, u *= c ? 1 : -1;
    }
    if (i === Ft || (i === Lt || i === rn) && a === Co) {
      v = on;
      var m = p && R === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[k]
      );
      h -= m - r.width, h *= c ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: l
  }, d && tw), $ = f === !0 ? nw({
    x: h,
    y: u
  }, qt(n)) : {
    x: h,
    y: u
  };
  if (h = $.x, u = $.y, c) {
    var N;
    return Object.assign({}, O, (N = {}, N[w] = S ? "0" : "", N[v] = C ? "0" : "", N.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + u + "px)" : "translate3d(" + h + "px, " + u + "px, 0)", N));
  }
  return Object.assign({}, O, (t = {}, t[w] = S ? u + "px" : "", t[v] = C ? h + "px" : "", t.transform = "", t));
}
function rw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, d = {
    placement: Rn(t.placement),
    variation: jr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bc(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bc(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ow = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: rw,
  data: {}
};
var Ko = {
  passive: !0
};
function iw(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = qt(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ko);
  }), l && c.addEventListener("resize", n.update, Ko), function() {
    a && d.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ko);
    }), l && c.removeEventListener("resize", n.update, Ko);
  };
}
const aw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: iw,
  data: {}
};
var sw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ii(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sw[t];
  });
}
var lw = {
  start: "end",
  end: "start"
};
function yc(e) {
  return e.replace(/start|end/g, function(t) {
    return lw[t];
  });
}
function Ws(e) {
  var t = qt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Vs(e) {
  return _r(er(e)).left + Ws(e).scrollLeft;
}
function cw(e, t) {
  var n = qt(e), r = er(e), i = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var d = _d();
    (d || !d && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + Vs(e),
    y: c
  };
}
function uw(e) {
  var t, n = er(e), r = Ws(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = dr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = dr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Vs(e), c = -r.scrollTop;
  return jn(i || n).direction === "rtl" && (l += dr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function Hs(e) {
  var t = jn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Hd(e) {
  return ["html", "body", "#document"].indexOf($n(e)) >= 0 ? e.ownerDocument.body : nn(e) && Hs(e) ? e : Hd(oa(e));
}
function po(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Hd(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = qt(r), s = i ? [a].concat(a.visualViewport || [], Hs(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(po(oa(s)))
  );
}
function os(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dw(e, t) {
  var n = _r(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function vc(e, t, n) {
  return t === Fd ? os(cw(e, n)) : pr(t) ? dw(t, n) : os(uw(er(e)));
}
function fw(e) {
  var t = po(oa(e)), n = ["absolute", "fixed"].indexOf(jn(e).position) >= 0, r = n && nn(e) ? Fo(e) : e;
  return pr(r) ? t.filter(function(i) {
    return pr(i) && jd(i, r) && $n(i) !== "body";
  }) : [];
}
function pw(e, t, n, r) {
  var i = t === "clippingParents" ? fw(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, d) {
    var f = vc(e, d, r);
    return c.top = dr(f.top, c.top), c.right = wi(f.right, c.right), c.bottom = wi(f.bottom, c.bottom), c.left = dr(f.left, c.left), c;
  }, vc(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ud(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Rn(r) : null, a = r ? jr(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case Lt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case rn:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case on:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ft:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var d = i ? zs(i) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (a) {
      case Fr:
        c[d] = c[d] - (t[f] / 2 - n[f] / 2);
        break;
      case Co:
        c[d] = c[d] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function To(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? N0 : l, d = n.rootBoundary, f = d === void 0 ? Fd : d, p = n.elementContext, g = p === void 0 ? Jr : p, h = n.altBoundary, b = h === void 0 ? !1 : h, u = n.padding, y = u === void 0 ? 0 : u, C = Wd(typeof y != "number" ? y : Vd(y, Lo)), S = g === Jr ? D0 : Jr, v = e.rects.popper, w = e.elements[b ? S : g], x = pw(pr(w) ? w : w.contextElement || er(e.elements.popper), c, f, s), R = _r(e.elements.reference), E = Ud({
    reference: R,
    element: v,
    placement: i
  }), k = os(Object.assign({}, v, E)), I = g === Jr ? k : R, m = {
    top: x.top - I.top + C.top,
    bottom: I.bottom - x.bottom + C.bottom,
    left: x.left - I.left + C.left,
    right: I.right - x.right + C.right
  }, O = e.modifiersData.offset;
  if (g === Jr && O) {
    var $ = O[i];
    Object.keys(m).forEach(function(N) {
      var j = [on, rn].indexOf(N) >= 0 ? 1 : -1, M = [Lt, rn].indexOf(N) >= 0 ? "y" : "x";
      m[N] += $[M] * j;
    });
  }
  return m;
}
function mw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, d = c === void 0 ? Bd : c, f = jr(r), p = f ? l ? hc : hc.filter(function(b) {
    return jr(b) === f;
  }) : Lo, g = p.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  g.length === 0 && (g = p);
  var h = g.reduce(function(b, u) {
    return b[u] = To(e, {
      placement: u,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Rn(u)], b;
  }, {});
  return Object.keys(h).sort(function(b, u) {
    return h[b] - h[u];
  });
}
function hw(e) {
  if (Rn(e) === Bs)
    return [];
  var t = ii(e);
  return [yc(e), t, yc(t)];
}
function gw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, d = n.padding, f = n.boundary, p = n.rootBoundary, g = n.altBoundary, h = n.flipVariations, b = h === void 0 ? !0 : h, u = n.allowedAutoPlacements, y = t.options.placement, C = Rn(y), S = C === y, v = c || (S || !b ? [ii(y)] : hw(y)), w = [y].concat(v).reduce(function(D, F) {
      return D.concat(Rn(F) === Bs ? mw(t, {
        placement: F,
        boundary: f,
        rootBoundary: p,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: u
      }) : F);
    }, []), x = t.rects.reference, R = t.rects.popper, E = /* @__PURE__ */ new Map(), k = !0, I = w[0], m = 0; m < w.length; m++) {
      var O = w[m], $ = Rn(O), N = jr(O) === Fr, j = [Lt, rn].indexOf($) >= 0, M = j ? "width" : "height", L = To(t, {
        placement: O,
        boundary: f,
        rootBoundary: p,
        altBoundary: g,
        padding: d
      }), H = j ? N ? on : Ft : N ? rn : Lt;
      x[M] > R[M] && (H = ii(H));
      var ee = ii(H), q = [];
      if (a && q.push(L[$] <= 0), l && q.push(L[H] <= 0, L[ee] <= 0), q.every(function(D) {
        return D;
      })) {
        I = O, k = !1;
        break;
      }
      E.set(O, q);
    }
    if (k)
      for (var W = b ? 3 : 1, U = function(F) {
        var G = w.find(function(A) {
          var z = E.get(A);
          if (z)
            return z.slice(0, F).every(function(X) {
              return X;
            });
        });
        if (G)
          return I = G, "break";
      }, ie = W; ie > 0; ie--) {
        var J = U(ie);
        if (J === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const bw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wc(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function xc(e) {
  return [Lt, on, rn, Ft].some(function(t) {
    return e[t] >= 0;
  });
}
function yw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = To(t, {
    elementContext: "reference"
  }), l = To(t, {
    altBoundary: !0
  }), c = wc(s, r), d = wc(l, i, a), f = xc(c), p = xc(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: f,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": p
  });
}
const vw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yw
};
function ww(e, t, n) {
  var r = Rn(e), i = [Ft, Lt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [Ft, on].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function xw(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = Bd.reduce(function(f, p) {
    return f[p] = ww(p, t.rects, a), f;
  }, {}), l = s[t.placement], c = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = s;
}
const Cw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xw
};
function Tw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ud({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Sw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Tw,
  data: {}
};
function Ew(e) {
  return e === "x" ? "y" : "x";
}
function Ow(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.padding, g = n.tether, h = g === void 0 ? !0 : g, b = n.tetherOffset, u = b === void 0 ? 0 : b, y = To(t, {
    boundary: c,
    rootBoundary: d,
    padding: p,
    altBoundary: f
  }), C = Rn(t.placement), S = jr(t.placement), v = !S, w = zs(C), x = Ew(w), R = t.modifiersData.popperOffsets, E = t.rects.reference, k = t.rects.popper, I = typeof u == "function" ? u(Object.assign({}, t.rects, {
    placement: t.placement
  })) : u, m = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = {
    x: 0,
    y: 0
  };
  if (R) {
    if (a) {
      var N, j = w === "y" ? Lt : Ft, M = w === "y" ? rn : on, L = w === "y" ? "height" : "width", H = R[w], ee = H + y[j], q = H - y[M], W = h ? -k[L] / 2 : 0, U = S === Fr ? E[L] : k[L], ie = S === Fr ? -k[L] : -E[L], J = t.elements.arrow, D = h && J ? js(J) : {
        width: 0,
        height: 0
      }, F = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : zd(), G = F[j], A = F[M], z = fo(0, E[L], D[L]), X = v ? E[L] / 2 - W - z - G - m.mainAxis : U - z - G - m.mainAxis, K = v ? -E[L] / 2 + W + z + A + m.mainAxis : ie + z + A + m.mainAxis, ae = t.elements.arrow && Fo(t.elements.arrow), B = ae ? w === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, pe = (N = O == null ? void 0 : O[w]) != null ? N : 0, ue = H + X - pe - B, me = H + K - pe, $e = fo(h ? wi(ee, ue) : ee, H, h ? dr(q, me) : q);
      R[w] = $e, $[w] = $e - H;
    }
    if (l) {
      var se, Ee = w === "x" ? Lt : Ft, fe = w === "x" ? rn : on, Oe = R[x], we = x === "y" ? "height" : "width", le = Oe + y[Ee], tt = Oe - y[fe], je = [Lt, Ft].indexOf(C) !== -1, bt = (se = O == null ? void 0 : O[x]) != null ? se : 0, Pt = je ? le : Oe - E[we] - k[we] - bt + m.altAxis, ft = je ? Oe + E[we] + k[we] - bt - m.altAxis : tt, It = h && je ? X0(Pt, Oe, ft) : fo(h ? Pt : le, Oe, h ? ft : tt);
      R[x] = It, $[x] = It - Oe;
    }
    t.modifiersData[r] = $;
  }
}
const Rw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ow,
  requiresIfExists: ["offset"]
};
function Pw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Iw(e) {
  return e === qt(e) || !nn(e) ? Ws(e) : Pw(e);
}
function kw(e) {
  var t = e.getBoundingClientRect(), n = Br(t.width) / e.offsetWidth || 1, r = Br(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $w(e, t, n) {
  n === void 0 && (n = !1);
  var r = nn(t), i = nn(t) && kw(t), a = er(t), s = _r(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && (($n(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Hs(a)) && (l = Iw(t)), nn(t) ? (c = _r(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Vs(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Mw(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function Nw(e) {
  var t = Mw(e);
  return H0.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Dw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Aw(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Cc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Tc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Lw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Cc : i;
  return function(l, c, d) {
    d === void 0 && (d = a);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], g = !1, h = {
      state: f,
      setOptions: function(C) {
        var S = typeof C == "function" ? C(f.options) : C;
        u(), f.options = Object.assign({}, a, f.options, S), f.scrollParents = {
          reference: pr(l) ? po(l) : l.contextElement ? po(l.contextElement) : [],
          popper: po(c)
        };
        var v = Nw(Aw([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = v.filter(function(w) {
          return w.enabled;
        }), b(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var C = f.elements, S = C.reference, v = C.popper;
          if (Tc(S, v)) {
            f.rects = {
              reference: $w(S, Fo(v), f.options.strategy === "fixed"),
              popper: js(v)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(m) {
              return f.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var w = 0; w < f.orderedModifiers.length; w++) {
              if (f.reset === !0) {
                f.reset = !1, w = -1;
                continue;
              }
              var x = f.orderedModifiers[w], R = x.fn, E = x.options, k = E === void 0 ? {} : E, I = x.name;
              typeof R == "function" && (f = R({
                state: f,
                options: k,
                name: I,
                instance: h
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Dw(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(f);
        });
      }),
      destroy: function() {
        u(), g = !0;
      }
    };
    if (!Tc(l, c))
      return h;
    h.setOptions(d).then(function(y) {
      !g && d.onFirstUpdate && d.onFirstUpdate(y);
    });
    function b() {
      f.orderedModifiers.forEach(function(y) {
        var C = y.name, S = y.options, v = S === void 0 ? {} : S, w = y.effect;
        if (typeof w == "function") {
          var x = w({
            state: f,
            name: C,
            instance: h,
            options: v
          }), R = function() {
          };
          p.push(x || R);
        }
      });
    }
    function u() {
      p.forEach(function(y) {
        return y();
      }), p = [];
    }
    return h;
  };
}
var Fw = [aw, Sw, ow, q0, Cw, bw, Rw, ew, vw], Bw = /* @__PURE__ */ Lw({
  defaultModifiers: Fw
});
function _w(e) {
  return De("MuiPopper", e);
}
ke("MuiPopper", ["root"]);
function jw(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function xi(e) {
  return typeof e == "function" ? e() : e;
}
function ia(e) {
  return e.nodeType !== void 0;
}
function zw(e) {
  return !ia(e);
}
const Ww = (e) => {
  const {
    classes: t
  } = e;
  return Le({
    root: ["root"]
  }, _w, t);
}, Vw = {}, Hw = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: d,
    popperOptions: f,
    popperRef: p,
    slotProps: g = {},
    slots: h = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: u,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, C = T.useRef(null), S = mt(C, n), v = T.useRef(null), w = mt(v, p), x = T.useRef(w);
  kn(() => {
    x.current = w;
  }, [w]), T.useImperativeHandle(p, () => v.current, []);
  const R = jw(d, a), [E, k] = T.useState(R), [I, m] = T.useState(xi(r));
  T.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), T.useEffect(() => {
    r && m(xi(r));
  }, [r]), kn(() => {
    if (!I || !c)
      return;
    const M = (ee) => {
      k(ee.placement);
    };
    if (process.env.NODE_ENV !== "production" && I && ia(I) && I.nodeType === 1) {
      const ee = I.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ee.top === 0 && ee.left === 0 && ee.right === 0 && ee.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let L = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: ee
      }) => {
        M(ee);
      }
    }];
    l != null && (L = L.concat(l)), f && f.modifiers != null && (L = L.concat(f.modifiers));
    const H = Bw(I, C.current, {
      placement: R,
      ...f,
      modifiers: L
    });
    return x.current(H), () => {
      H.destroy(), x.current(null);
    };
  }, [I, s, l, c, f, R]);
  const O = {
    placement: E
  };
  b !== null && (O.TransitionProps = b);
  const $ = Ww(t), N = h.root ?? "div", j = Ka({
    elementType: N,
    externalSlotProps: g.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: $.root
  });
  return /* @__PURE__ */ P(N, {
    ...j,
    children: typeof i == "function" ? i(O) : i
  });
}), Yd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: d,
    open: f,
    placement: p = "bottom",
    popperOptions: g = Vw,
    popperRef: h,
    style: b,
    transition: u = !1,
    slotProps: y = {},
    slots: C = {},
    ...S
  } = t, [v, w] = T.useState(!0), x = () => {
    w(!1);
  }, R = () => {
    w(!0);
  };
  if (!c && !f && (!u || v))
    return null;
  let E;
  if (a)
    E = a;
  else if (r) {
    const m = xi(r);
    E = m && ia(m) ? Yt(m).body : Yt(null).body;
  }
  const k = !f && c && (!u || v) ? "none" : void 0, I = u ? {
    in: f,
    onEnter: x,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ P(xo, {
    disablePortal: l,
    container: E,
    children: /* @__PURE__ */ P(Hw, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: d,
      ref: n,
      open: u ? !v : f,
      placement: p,
      popperOptions: g,
      popperRef: h,
      slotProps: y,
      slots: C,
      ...S,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: k,
        ...b
      },
      TransitionProps: I,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Yd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: un(o.oneOfType([Bn, o.object, o.func]), (e) => {
    if (e.open) {
      const t = xi(e.anchorEl);
      if (t && ia(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || zw(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Bn, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Gt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const Uw = oe(Yd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Us = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Rs(), i = Ve({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: g,
    open: h,
    placement: b,
    popperOptions: u,
    popperRef: y,
    transition: C,
    slots: S,
    slotProps: v,
    ...w
  } = i, x = (S == null ? void 0 : S.root) ?? (l == null ? void 0 : l.Root), R = {
    anchorEl: a,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: g,
    open: h,
    placement: b,
    popperOptions: u,
    popperRef: y,
    transition: C,
    ...w
  };
  return /* @__PURE__ */ P(Uw, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: v ?? c,
    ...R,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Us.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: o.oneOfType([Bn, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Bn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Gt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
function Yw(e) {
  return De("MuiListSubheader", e);
}
ke("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const qw = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${re(n)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return Le(s, Yw, t);
}, Gw = oe("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${re(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(Ie(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), Ci = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: d = !1,
    ...f
  } = r, p = {
    ...r,
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: d
  }, g = qw(p);
  return /* @__PURE__ */ P(Gw, {
    as: s,
    className: de(g.root, i),
    ref: n,
    ownerState: p,
    ...f
  });
});
Ci && (Ci.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: o.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: o.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
class Ti {
  constructor() {
    Gr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Ti();
  }
  static use() {
    const t = Gu(Ti.create).current, [n, r] = T.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, T.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Xw(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function Kw() {
  return Ti.use();
}
function Xw() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function qd(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: d
  } = e, [f, p] = T.useState(!1), g = de(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, b = de(n.child, f && n.childLeaving, r && n.childPulsate);
  return !l && !f && p(!0), T.useEffect(() => {
    if (!l && c != null) {
      const u = setTimeout(c, d);
      return () => {
        clearTimeout(u);
      };
    }
  }, [c, l, d]), /* @__PURE__ */ P("span", {
    className: g,
    style: h,
    children: /* @__PURE__ */ P("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (qd.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const Jt = ke("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), is = 550, Zw = 80, Qw = Io`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Jw = Io`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ex = Io`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, tx = oe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), nx = oe(qd, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Jt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Qw};
    animation-duration: ${is}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Jt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Jt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Jt.childLeaving} {
    opacity: 0;
    animation-name: ${Jw};
    animation-duration: ${is}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Jt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ex};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Gd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = r, [c, d] = T.useState([]), f = T.useRef(0), p = T.useRef(null);
  T.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const g = T.useRef(!1), h = Ku(), b = T.useRef(null), u = T.useRef(null), y = T.useCallback((w) => {
    const {
      pulsate: x,
      rippleX: R,
      rippleY: E,
      rippleSize: k,
      cb: I
    } = w;
    d((m) => [...m, /* @__PURE__ */ P(nx, {
      classes: {
        ripple: de(a.ripple, Jt.ripple),
        rippleVisible: de(a.rippleVisible, Jt.rippleVisible),
        ripplePulsate: de(a.ripplePulsate, Jt.ripplePulsate),
        child: de(a.child, Jt.child),
        childLeaving: de(a.childLeaving, Jt.childLeaving),
        childPulsate: de(a.childPulsate, Jt.childPulsate)
      },
      timeout: is,
      pulsate: x,
      rippleX: R,
      rippleY: E,
      rippleSize: k
    }, f.current)]), f.current += 1, p.current = I;
  }, [a]), C = T.useCallback((w = {}, x = {}, R = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: k = i || x.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = x;
    if ((w == null ? void 0 : w.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (g.current = !0);
    const m = I ? null : u.current, O = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let $, N, j;
    if (k || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      $ = Math.round(O.width / 2), N = Math.round(O.height / 2);
    else {
      const {
        clientX: M,
        clientY: L
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      $ = Math.round(M - O.left), N = Math.round(L - O.top);
    }
    if (k)
      j = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const M = Math.max(Math.abs((m ? m.clientWidth : 0) - $), $) * 2 + 2, L = Math.max(Math.abs((m ? m.clientHeight : 0) - N), N) * 2 + 2;
      j = Math.sqrt(M ** 2 + L ** 2);
    }
    w != null && w.touches ? b.current === null && (b.current = () => {
      y({
        pulsate: E,
        rippleX: $,
        rippleY: N,
        rippleSize: j,
        cb: R
      });
    }, h.start(Zw, () => {
      b.current && (b.current(), b.current = null);
    })) : y({
      pulsate: E,
      rippleX: $,
      rippleY: N,
      rippleSize: j,
      cb: R
    });
  }, [i, y, h]), S = T.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), v = T.useCallback((w, x) => {
    if (h.clear(), (w == null ? void 0 : w.type) === "touchend" && b.current) {
      b.current(), b.current = null, h.start(0, () => {
        v(w, x);
      });
      return;
    }
    b.current = null, d((R) => R.length > 0 ? R.slice(1) : R), p.current = x;
  }, [h]);
  return T.useImperativeHandle(n, () => ({
    pulsate: S,
    start: C,
    stop: v
  }), [S, C, v]), /* @__PURE__ */ P(tx, {
    className: de(Jt.root, a.root, s),
    ref: u,
    ...l,
    children: /* @__PURE__ */ P(Ns, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Gd.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
function rx(e) {
  return De("MuiButtonBase", e);
}
const ox = ke("MuiButtonBase", ["root", "disabled", "focusVisible"]), ix = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Le({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, rx, i);
  return n && r && (s.root += ` ${r}`), s;
}, ax = oe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${ox.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), zr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: d = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: g = !1,
    focusVisibleClassName: h,
    LinkComponent: b = "a",
    onBlur: u,
    onClick: y,
    onContextMenu: C,
    onDragLeave: S,
    onFocus: v,
    onFocusVisible: w,
    onKeyDown: x,
    onKeyUp: R,
    onMouseDown: E,
    onMouseLeave: k,
    onMouseUp: I,
    onTouchEnd: m,
    onTouchMove: O,
    onTouchStart: $,
    tabIndex: N = 0,
    TouchRippleProps: j,
    touchRippleRef: M,
    type: L,
    ...H
  } = r, ee = T.useRef(null), q = Kw(), W = mt(q.ref, M), [U, ie] = T.useState(!1);
  d && U && ie(!1), T.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ie(!0), ee.current.focus();
    }
  }), []);
  const J = q.shouldMount && !f && !d;
  T.useEffect(() => {
    U && g && !f && q.pulsate();
  }, [f, g, U, q]);
  const D = Ln(q, "start", E, p), F = Ln(q, "stop", C, p), G = Ln(q, "stop", S, p), A = Ln(q, "stop", I, p), z = Ln(q, "stop", (le) => {
    U && le.preventDefault(), k && k(le);
  }, p), X = Ln(q, "start", $, p), K = Ln(q, "stop", m, p), ae = Ln(q, "stop", O, p), B = Ln(q, "stop", (le) => {
    Bl(le.target) || ie(!1), u && u(le);
  }, !1), pe = En((le) => {
    ee.current || (ee.current = le.currentTarget), Bl(le.target) && (ie(!0), w && w(le)), v && v(le);
  }), ue = () => {
    const le = ee.current;
    return c && c !== "button" && !(le.tagName === "A" && le.href);
  }, me = En((le) => {
    g && !le.repeat && U && le.key === " " && q.stop(le, () => {
      q.start(le);
    }), le.target === le.currentTarget && ue() && le.key === " " && le.preventDefault(), x && x(le), le.target === le.currentTarget && ue() && le.key === "Enter" && !d && (le.preventDefault(), y && y(le));
  }), $e = En((le) => {
    g && le.key === " " && U && !le.defaultPrevented && q.stop(le, () => {
      q.pulsate(le);
    }), R && R(le), y && le.target === le.currentTarget && ue() && le.key === " " && !le.defaultPrevented && y(le);
  });
  let se = c;
  se === "button" && (H.href || H.to) && (se = b);
  const Ee = {};
  se === "button" ? (Ee.type = L === void 0 ? "button" : L, Ee.disabled = d) : (!H.href && !H.to && (Ee.role = "button"), d && (Ee["aria-disabled"] = d));
  const fe = mt(n, ee), Oe = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: d,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: g,
    tabIndex: N,
    focusVisible: U
  }, we = ix(Oe);
  return /* @__PURE__ */ Se(ax, {
    as: se,
    className: de(we.root, l),
    ownerState: Oe,
    onBlur: B,
    onClick: y,
    onContextMenu: F,
    onFocus: pe,
    onKeyDown: me,
    onKeyUp: $e,
    onMouseDown: D,
    onMouseLeave: z,
    onMouseUp: A,
    onDragLeave: G,
    onTouchEnd: K,
    onTouchMove: ae,
    onTouchStart: X,
    ref: fe,
    tabIndex: d ? -1 : N,
    type: L,
    ...Ee,
    ...H,
    children: [s, J ? /* @__PURE__ */ P(Gd, {
      ref: W,
      center: a,
      ...j
    }) : null]
  });
});
function Ln(e, t, n, r = !1) {
  return En((i) => (n && n(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (zr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Gt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Es,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
function sx(e) {
  return De("MuiCircularProgress", e);
}
ke("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Yn = 44, as = Io`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ss = Io`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, lx = typeof as != "string" ? ys`
        animation: ${as} 1.4s linear infinite;
      ` : null, cx = typeof ss != "string" ? ys`
        animation: ${ss} 1.4s ease-in-out infinite;
      ` : null, ux = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, a = {
    root: ["root", n, `color${re(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${re(n)}`, i && "circleDisableShrink"]
  };
  return Le(a, sx, t);
}, dx = oe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${re(n.color)}`]];
  }
})(Ie(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: lx || {
      animation: `${as} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), fx = oe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), px = oe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${re(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Ie(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: cx || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${ss} 1.4s ease-in-out infinite`
    }
  }]
}))), Kd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: a = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: c,
    thickness: d = 3.6,
    value: f = 0,
    variant: p = "indeterminate",
    ...g
  } = r, h = {
    ...r,
    color: a,
    disableShrink: s,
    size: l,
    thickness: d,
    value: f,
    variant: p
  }, b = ux(h), u = {}, y = {}, C = {};
  if (p === "determinate") {
    const S = 2 * Math.PI * ((Yn - d) / 2);
    u.strokeDasharray = S.toFixed(3), C["aria-valuenow"] = Math.round(f), u.strokeDashoffset = `${((100 - f) / 100 * S).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ P(dx, {
    className: de(b.root, i),
    style: {
      width: l,
      height: l,
      ...y,
      ...c
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...C,
    ...g,
    children: /* @__PURE__ */ P(fx, {
      className: b.svg,
      ownerState: h,
      viewBox: `${Yn / 2} ${Yn / 2} ${Yn} ${Yn}`,
      children: /* @__PURE__ */ P(px, {
        className: b.circle,
        style: u,
        ownerState: h,
        cx: Yn,
        cy: Yn,
        r: (Yn - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Kd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: un(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
function mx(e) {
  return De("MuiIconButton", e);
}
const Sc = ke("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), hx = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: a,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${re(r)}`, i && `edge${re(i)}`, `size${re(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Le(l, mx, t);
}, gx = oe(zr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${re(n.color)}`], n.edge && t[`edge${re(n.edge)}`], t[`size${re(n.size)}`]];
  }
})(Ie(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ie(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Sc.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Sc.loading}`]: {
    color: "transparent"
  }
}))), bx = oe("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), ur = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: d = !1,
    size: f = "medium",
    id: p,
    loading: g = null,
    loadingIndicator: h,
    ...b
  } = r, u = Lr(p), y = h ?? /* @__PURE__ */ P(Kd, {
    "aria-labelledby": u,
    color: "inherit",
    size: 16
  }), C = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: d,
    loading: g,
    loadingIndicator: y,
    size: f
  }, S = hx(C);
  return /* @__PURE__ */ Se(gx, {
    id: u,
    className: de(S.root, s),
    centerRipple: !0,
    focusRipple: !d,
    disabled: c || g,
    ref: n,
    ...b,
    ownerState: C,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ P("span", {
      className: S.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ P(bx, {
        className: S.loadingIndicator,
        ownerState: C,
        children: g && y
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: un(o.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: o.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: o.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: o.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const yx = Mn(/* @__PURE__ */ P("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function vx(e) {
  return De("MuiChip", e);
}
const Te = ke("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), wx = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, d = {
    root: ["root", c, n && "disabled", `size${re(r)}`, `color${re(i)}`, l && "clickable", l && `clickableColor${re(i)}`, s && "deletable", s && `deletableColor${re(i)}`, `${c}${re(i)}`],
    label: ["label", `label${re(r)}`],
    avatar: ["avatar", `avatar${re(r)}`, `avatarColor${re(i)}`],
    icon: ["icon", `icon${re(r)}`, `iconColor${re(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${re(r)}`, `deleteIconColor${re(i)}`, `deleteIcon${re(c)}Color${re(i)}`]
  };
  return Le(d, vx, t);
}, xx = oe("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: i,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${Te.avatar}`]: t.avatar
    }, {
      [`& .${Te.avatar}`]: t[`avatar${re(l)}`]
    }, {
      [`& .${Te.avatar}`]: t[`avatarColor${re(r)}`]
    }, {
      [`& .${Te.icon}`]: t.icon
    }, {
      [`& .${Te.icon}`]: t[`icon${re(l)}`]
    }, {
      [`& .${Te.icon}`]: t[`iconColor${re(i)}`]
    }, {
      [`& .${Te.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Te.deleteIcon}`]: t[`deleteIcon${re(l)}`]
    }, {
      [`& .${Te.deleteIcon}`]: t[`deleteIconColor${re(r)}`]
    }, {
      [`& .${Te.deleteIcon}`]: t[`deleteIcon${re(c)}Color${re(r)}`]
    }, t.root, t[`size${re(l)}`], t[`color${re(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${re(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${re(r)}`], t[c], t[`${c}${re(r)}`]];
  }
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Te.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Te.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Te.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Te.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Te.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Te.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Te.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Qe(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Qe(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Te.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Te.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Ht(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Te.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : Qe(e.palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Te.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Te.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Ht(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Te.focusVisible}`]: {
          background: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${Te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Ht(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Te.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${Te.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Te.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Te.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Te.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Te.icon}`]: {
          marginLeft: 4
        },
        [`& .${Te.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Te.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Te.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Ht()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Qe(e.palette[n].main, 0.7)}`,
        [`&.${Te.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[n].main, e.palette.action.hoverOpacity)
        },
        [`&.${Te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Qe(e.palette[n].main, e.palette.action.focusOpacity)
        },
        [`& .${Te.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Qe(e.palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), Cx = oe("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${re(r)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Ec(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Xd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: d,
    disabled: f = !1,
    icon: p,
    label: g,
    onClick: h,
    onDelete: b,
    onKeyDown: u,
    onKeyUp: y,
    size: C = "medium",
    variant: S = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...x
  } = r, R = T.useRef(null), E = mt(R, n), k = (q) => {
    q.stopPropagation(), b && b(q);
  }, I = (q) => {
    q.currentTarget === q.target && Ec(q) && q.preventDefault(), u && u(q);
  }, m = (q) => {
    q.currentTarget === q.target && b && Ec(q) && b(q), y && y(q);
  }, O = s !== !1 && h ? !0 : s, $ = O || b ? zr : c || "div", N = {
    ...r,
    component: $,
    disabled: f,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ T.isValidElement(p) && p.props.color || l,
    onDelete: !!b,
    clickable: O,
    variant: S
  }, j = wx(N), M = $ === zr ? {
    component: c || "div",
    focusVisibleClassName: j.focusVisible,
    ...b && {
      disableRipple: !0
    }
  } : {};
  let L = null;
  b && (L = d && /* @__PURE__ */ T.isValidElement(d) ? /* @__PURE__ */ T.cloneElement(d, {
    className: de(d.props.className, j.deleteIcon),
    onClick: k
  }) : /* @__PURE__ */ P(yx, {
    className: de(j.deleteIcon),
    onClick: k
  }));
  let H = null;
  i && /* @__PURE__ */ T.isValidElement(i) && (H = /* @__PURE__ */ T.cloneElement(i, {
    className: de(j.avatar, i.props.className)
  }));
  let ee = null;
  return p && /* @__PURE__ */ T.isValidElement(p) && (ee = /* @__PURE__ */ T.cloneElement(p, {
    className: de(j.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && H && ee && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ Se(xx, {
    as: $,
    className: de(j.root, a),
    disabled: O && f ? !0 : void 0,
    onClick: h,
    onKeyDown: I,
    onKeyUp: m,
    ref: E,
    tabIndex: w && f ? -1 : v,
    ownerState: N,
    ...M,
    ...x,
    children: [H || ee, /* @__PURE__ */ P(Cx, {
      className: de(j.label),
      ownerState: N,
      children: g
    }), L]
  });
});
process.env.NODE_ENV !== "production" && (Xd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: o.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Nb,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: o.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Icon element.
   */
  icon: o.element,
  /**
   * The content of the component.
   */
  label: o.node,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  tabIndex: o.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined"]), o.string])
});
const Tx = Mn(/* @__PURE__ */ P("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Sx(e) {
  return De("MuiAutocomplete", e);
}
const xe = ke("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var Oc, Rc;
const Ex = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: r,
    focused: i,
    fullWidth: a,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: d,
    size: f
  } = e, p = {
    root: ["root", r && "expanded", i && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${re(f)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", d && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return Le(p, Sx, t);
}, Ox = oe("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: r,
      hasClearIcon: i,
      hasPopupIcon: a,
      inputFocused: s,
      size: l
    } = n;
    return [{
      [`& .${xe.tag}`]: t.tag
    }, {
      [`& .${xe.tag}`]: t[`tagSize${re(l)}`]
    }, {
      [`& .${xe.inputRoot}`]: t.inputRoot
    }, {
      [`& .${xe.input}`]: t.input
    }, {
      [`& .${xe.input}`]: s && t.inputFocused
    }, t.root, r && t.fullWidth, a && t.hasPopupIcon, i && t.hasClearIcon];
  }
})({
  [`&.${xe.focused} .${xe.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${xe.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${xe.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${xe.inputRoot}`]: {
    [`.${xe.hasPopupIcon}&, .${xe.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${xe.hasPopupIcon}.${xe.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${xe.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${Gn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Gn.root}.${zt.sizeSmall}`]: {
    [`& .${Gn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Qt.root}`]: {
    padding: 9,
    [`.${xe.hasPopupIcon}&, .${xe.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${xe.hasPopupIcon}.${xe.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${xe.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${xe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Qt.root}.${zt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${xe.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Wt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${xe.hasPopupIcon}&, .${xe.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${xe.hasPopupIcon}.${xe.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Wt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${xe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Wt.root}.${zt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Wt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${zt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Wt.root}.${zt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${xe.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Wt.root}.${zt.hiddenLabel}.${zt.sizeSmall}`]: {
    [`& .${xe.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${xe.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${xe.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${xe.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${xe.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), Rx = oe("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), Px = oe(ur, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Ix = oe(ur, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popupIndicator, n.popupOpen && t.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), kx = oe(Us, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${xe.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(Ie(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), $x = oe(na, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(Ie(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), Mx = oe("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(Ie(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Nx = oe("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(Ie(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Dx = oe("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(Ie(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${xe.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${xe.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${xe.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${xe.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${xe.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), Ax = oe(Ci, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(Ie(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), Lx = oe("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${xe.option}`]: {
    paddingLeft: 24
  }
}), Zd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: i = !1,
    autoHighlight: a = !1,
    autoSelect: s = !1,
    blurOnSelect: l = !1,
    ChipProps: c,
    className: d,
    clearIcon: f = Oc || (Oc = /* @__PURE__ */ P(Tx, {
      fontSize: "small"
    })),
    clearOnBlur: p = !r.freeSolo,
    clearOnEscape: g = !1,
    clearText: h = "Clear",
    closeText: b = "Close",
    componentsProps: u,
    defaultValue: y = r.multiple ? [] : null,
    disableClearable: C = !1,
    disableCloseOnSelect: S = !1,
    disabled: v = !1,
    disabledItemsFocusable: w = !1,
    disableListWrap: x = !1,
    disablePortal: R = !1,
    filterOptions: E,
    filterSelectedOptions: k = !1,
    forcePopupIcon: I = "auto",
    freeSolo: m = !1,
    fullWidth: O = !1,
    getLimitTagsText: $ = (Me) => `+${Me}`,
    getOptionDisabled: N,
    getOptionKey: j,
    getOptionLabel: M,
    isOptionEqualToValue: L,
    groupBy: H,
    handleHomeEndKeys: ee = !r.freeSolo,
    id: q,
    includeInputInList: W = !1,
    inputValue: U,
    limitTags: ie = -1,
    ListboxComponent: J,
    ListboxProps: D,
    loading: F = !1,
    loadingText: G = "Loading…",
    multiple: A = !1,
    noOptionsText: z = "No options",
    onChange: X,
    onClose: K,
    onHighlightChange: ae,
    onInputChange: B,
    onOpen: pe,
    open: ue,
    openOnFocus: me = !1,
    openText: $e = "Open",
    options: se,
    PaperComponent: Ee,
    PopperComponent: fe,
    popupIcon: Oe = Rc || (Rc = /* @__PURE__ */ P(Dd, {})),
    readOnly: we = !1,
    renderGroup: le,
    renderInput: tt,
    renderOption: je,
    renderTags: bt,
    selectOnFocus: Pt = !r.freeSolo,
    size: ft = "medium",
    slots: It = {},
    slotProps: Fe = {},
    value: Ae,
    ...ye
  } = r, {
    getRootProps: ht,
    getInputProps: xt,
    getInputLabelProps: Dn,
    getPopupIndicatorProps: $t,
    getClearProps: te,
    getTagProps: Ce,
    getListboxProps: Re,
    getOptionProps: yt,
    value: Et,
    dirty: fn,
    expanded: pn,
    id: zn,
    popupOpen: Xt,
    focused: mn,
    focusedTag: sn,
    anchorEl: hn,
    setAnchorEl: gn,
    inputValue: tr,
    groupedOptions: lt
  } = M0({
    ...r,
    componentName: "Autocomplete"
  }), bn = !C && !v && fn && !we, _t = (!m || I === !0) && I !== !1, {
    onMouseDown: ce
  } = xt(), {
    ref: yn,
    ...nr
  } = Re(), Wn = M || ((Me) => Me.label ?? Me), ct = {
    ...r,
    disablePortal: R,
    expanded: pn,
    focused: mn,
    fullWidth: O,
    getOptionLabel: Wn,
    hasClearIcon: bn,
    hasPopupIcon: _t,
    inputFocused: sn === -1,
    popupOpen: Xt,
    size: ft
  }, nt = Ex(ct), Mt = {
    slots: {
      paper: Ee,
      popper: fe,
      ...It
    },
    slotProps: {
      chip: c,
      listbox: D,
      ...u,
      ...Fe
    }
  }, [Vn, Y] = ut("listbox", {
    elementType: Dx,
    externalForwardedProps: Mt,
    ownerState: ct,
    className: nt.listbox,
    additionalProps: nr,
    ref: yn
  }), [_, ne] = ut("paper", {
    elementType: na,
    externalForwardedProps: Mt,
    ownerState: ct,
    className: nt.paper
  }), [be, ve] = ut("popper", {
    elementType: Us,
    externalForwardedProps: Mt,
    ownerState: ct,
    className: nt.popper,
    additionalProps: {
      disablePortal: R,
      style: {
        width: hn ? hn.clientWidth : null
      },
      role: "presentation",
      anchorEl: hn,
      open: Xt
    }
  });
  let Pe;
  if (A && Et.length > 0) {
    const Me = (Zt) => ({
      className: nt.tag,
      disabled: v,
      ...Ce(Zt)
    });
    bt ? Pe = bt(Et, Me, ct) : Pe = Et.map((Zt, ln) => {
      const {
        key: Nt,
        ...sa
      } = Me({
        index: ln
      });
      return /* @__PURE__ */ P(Xd, {
        label: Wn(Zt),
        size: ft,
        ...sa,
        ...Mt.slotProps.chip
      }, Nt);
    });
  }
  if (ie > -1 && Array.isArray(Pe)) {
    const Me = Pe.length - ie;
    !mn && Me > 0 && (Pe = Pe.splice(0, ie), Pe.push(/* @__PURE__ */ P("span", {
      className: nt.tag,
      children: $(Me)
    }, Pe.length)));
  }
  const Ct = le || ((Me) => /* @__PURE__ */ Se("li", {
    children: [/* @__PURE__ */ P(Ax, {
      className: nt.groupLabel,
      ownerState: ct,
      component: "div",
      children: Me.group
    }), /* @__PURE__ */ P(Lx, {
      className: nt.groupUl,
      ownerState: ct,
      children: Me.children
    })]
  }, Me.key)), or = je || ((Me, Zt) => {
    const {
      key: ln,
      ...Nt
    } = Me;
    return /* @__PURE__ */ P("li", {
      ...Nt,
      children: Wn(Zt)
    }, ln);
  }), Hn = (Me, Zt) => {
    const ln = yt({
      option: Me,
      index: Zt
    });
    return or({
      ...ln,
      className: nt.option
    }, Me, {
      selected: ln["aria-selected"],
      index: Zt,
      inputValue: tr
    }, ct);
  }, Un = Mt.slotProps.clearIndicator, gr = Mt.slotProps.popupIndicator;
  return /* @__PURE__ */ Se(T.Fragment, {
    children: [/* @__PURE__ */ P(Ox, {
      ref: n,
      className: de(nt.root, d),
      ownerState: ct,
      ...ht(ye),
      children: tt({
        id: zn,
        disabled: v,
        fullWidth: !0,
        size: ft === "small" ? "small" : void 0,
        InputLabelProps: Dn(),
        InputProps: {
          ref: gn,
          className: nt.inputRoot,
          startAdornment: Pe,
          onMouseDown: (Me) => {
            Me.target === Me.currentTarget && ce(Me);
          },
          ...(bn || _t) && {
            endAdornment: /* @__PURE__ */ Se(Rx, {
              className: nt.endAdornment,
              ownerState: ct,
              children: [bn ? /* @__PURE__ */ P(Px, {
                ...te(),
                "aria-label": h,
                title: h,
                ownerState: ct,
                ...Un,
                className: de(nt.clearIndicator, Un == null ? void 0 : Un.className),
                children: f
              }) : null, _t ? /* @__PURE__ */ P(Ix, {
                ...$t(),
                disabled: v,
                "aria-label": Xt ? b : $e,
                title: Xt ? b : $e,
                ownerState: ct,
                ...gr,
                className: de(nt.popupIndicator, gr == null ? void 0 : gr.className),
                children: Oe
              }) : null]
            })
          }
        },
        inputProps: {
          className: nt.input,
          disabled: v,
          readOnly: we,
          ...xt()
        }
      })
    }), hn ? /* @__PURE__ */ P(kx, {
      as: be,
      ...ve,
      children: /* @__PURE__ */ Se($x, {
        as: _,
        ...ne,
        children: [F && lt.length === 0 ? /* @__PURE__ */ P(Mx, {
          className: nt.loading,
          ownerState: ct,
          children: G
        }) : null, lt.length === 0 && !m && !F ? /* @__PURE__ */ P(Nx, {
          className: nt.noOptions,
          ownerState: ct,
          role: "presentation",
          onMouseDown: (Me) => {
            Me.preventDefault();
          },
          children: z
        }) : null, lt.length > 0 ? /* @__PURE__ */ P(Vn, {
          as: J,
          ...Y,
          children: lt.map((Me, Zt) => H ? Ct({
            key: Me.key,
            group: Me.group,
            children: Me.options.map((ln, Nt) => Hn(ln, Me.index + Nt))
          }) : Hn(Me, Zt))
        }) : null]
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Zd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: o.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: o.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: o.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: o.oneOfType([o.oneOf(["mouse", "touch"]), o.bool]),
  /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   * @deprecated Use `slotProps.chip` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ChipProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: o.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: o.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: o.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: o.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: o.string,
  /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: un(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: o.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: o.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: o.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: o.oneOfType([o.oneOf(["auto"]), o.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: o.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: o.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: o.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: o.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: o.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} option The Autocomplete option.
   * @returns {string}
   */
  groupBy: o.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: o.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: o.bool,
  /**
   * The input value.
   */
  inputValue: o.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: o.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: Mr,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   * @deprecated Use `slotProps.listbox.component` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxComponent: o.elementType,
  /**
   * Props applied to the Listbox element.
   * @deprecated Use `slotProps.listbox` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxProps: o.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: o.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: o.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: o.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: o.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: o.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */
  onInputChange: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: o.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: o.string,
  /**
   * A list of options that will be shown in the Autocomplete.
   */
  options: o.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   * @deprecated Use `slots.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperComponent: o.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   * @deprecated Use `slots.popper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: o.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: o.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: o.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: o.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: o.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: o.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: o.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    chip: o.oneOfType([o.func, o.object]),
    clearIndicator: o.oneOfType([o.func, o.object]),
    listbox: o.oneOfType([o.func, o.object]),
    paper: o.oneOfType([o.func, o.object]),
    popper: o.oneOfType([o.func, o.object]),
    popupIndicator: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    listbox: o.elementType,
    paper: o.elementType,
    popper: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: un(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const ka = (e) => e.stopPropagation(), Fx = ({ options: e, renderInput: t, ...n }) => {
  const r = Je(
    () => e.find((i) => i.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ P(
    Zd,
    {
      onChange: (i, a) => {
        var s;
        return (s = n.onChange) == null ? void 0 : s.call(n, a == null ? void 0 : a.value);
      },
      value: r ?? null,
      options: e,
      onClick: ka,
      onKeyDown: ka,
      getOptionLabel: (i) => i.label,
      renderInput: t || ((i) => /* @__PURE__ */ P(
        Ld,
        {
          ...i,
          onClick: ka,
          label: n.label,
          error: n.error,
          helperText: n.helperText
        }
      ))
    }
  );
}, Bx = Pn(ud)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Xo = (e) => e.stopPropagation(), $a = ({ children: e, ...t }) => /* @__PURE__ */ Se(Bx, { children: [
  du(t),
  e
] }), _x = (e) => (t) => {
  const { filters: n, setFilters: r } = cn(Fs), i = Je(() => n[e.key], [n, e]), a = St(
    (s) => {
      r({ ...n, [e.key]: s });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === vo.AUTOCOMPLETE && (i === void 0 || typeof i == "string") ? /* @__PURE__ */ P($a, { ...t, children: /* @__PURE__ */ P(
    Fx,
    {
      options: e.filterOptions ?? [],
      onChange: a,
      value: i,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ P($a, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (s) => a(s.target.value),
    value: i ?? "",
    autoComplete: "off",
    onClick: Xo,
    onKeyDown: Xo
  }) : /* @__PURE__ */ P(
    Ld,
    {
      autoComplete: "off",
      onClick: Xo,
      onKeyDown: Xo,
      value: i ?? "",
      onChange: (s) => a(s.target.value)
    }
  ) }) : /* @__PURE__ */ P($a, { ...t });
}, jx = {
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
}, zx = (e, t, n) => {
  let r;
  const i = jx[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ma(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Wx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Vx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Hx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ux = {
  date: Ma({
    formats: Wx,
    defaultWidth: "full"
  }),
  time: Ma({
    formats: Vx,
    defaultWidth: "full"
  }),
  dateTime: Ma({
    formats: Hx,
    defaultWidth: "full"
  })
}, Yx = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, qx = (e, t, n, r) => Yx[e];
function eo(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : s;
      i = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[l] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
const Gx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Kx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Xx = {
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
}, Zx = {
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
}, Qx = {
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
}, Jx = {
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
}, eC = (e, t) => {
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
}, tC = {
  ordinalNumber: eC,
  era: eo({
    values: Gx,
    defaultWidth: "wide"
  }),
  quarter: eo({
    values: Kx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: eo({
    values: Xx,
    defaultWidth: "wide"
  }),
  day: eo({
    values: Zx,
    defaultWidth: "wide"
  }),
  dayPeriod: eo({
    values: Qx,
    defaultWidth: "wide",
    formattingValues: Jx,
    defaultFormattingWidth: "wide"
  })
};
function to(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? rC(l, (p) => p.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      nC(l, (p) => p.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(s.length);
    return { value: d, rest: f };
  };
}
function nC(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function rC(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function oC(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(i.length);
    return { value: s, rest: l };
  };
}
const iC = /^(\d+)(th|st|nd|rd)?/i, aC = /\d+/i, sC = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, lC = {
  any: [/^b/i, /^(a|c)/i]
}, cC = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, uC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, dC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, fC = {
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
}, pC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, mC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, hC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gC = {
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
}, bC = {
  ordinalNumber: oC({
    matchPattern: iC,
    parsePattern: aC,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: to({
    matchPatterns: sC,
    defaultMatchWidth: "wide",
    parsePatterns: lC,
    defaultParseWidth: "any"
  }),
  quarter: to({
    matchPatterns: cC,
    defaultMatchWidth: "wide",
    parsePatterns: uC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: to({
    matchPatterns: dC,
    defaultMatchWidth: "wide",
    parsePatterns: fC,
    defaultParseWidth: "any"
  }),
  day: to({
    matchPatterns: pC,
    defaultMatchWidth: "wide",
    parsePatterns: mC,
    defaultParseWidth: "any"
  }),
  dayPeriod: to({
    matchPatterns: hC,
    defaultMatchWidth: "any",
    parsePatterns: gC,
    defaultParseWidth: "any"
  })
}, yC = {
  code: "en-US",
  formatDistance: zx,
  formatLong: Ux,
  formatRelative: qx,
  localize: tC,
  match: bC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let vC = {};
function Bo() {
  return vC;
}
const Qd = 6048e5, wC = 864e5, Pc = Symbol.for("constructDateFrom");
function Zn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Pc in e ? e[Pc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function dn(e, t) {
  return Zn(t || e, e);
}
function Ic(e) {
  const t = dn(e), n = new Date(
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
function xC(e, ...t) {
  const n = Zn.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function kc(e, t) {
  const n = dn(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function CC(e, t, n) {
  const [r, i] = xC(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = kc(r), s = kc(i), l = +a - Ic(a), c = +s - Ic(s);
  return Math.round((l - c) / wC);
}
function TC(e, t) {
  const n = dn(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function SC(e, t) {
  const n = dn(e, t == null ? void 0 : t.in);
  return CC(n, TC(n)) + 1;
}
function So(e, t) {
  var l, c, d, f;
  const n = Bo(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, i = dn(e, t == null ? void 0 : t.in), a = i.getDay(), s = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Si(e, t) {
  return So(e, { ...t, weekStartsOn: 1 });
}
function Jd(e, t) {
  const n = dn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Zn(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Si(i), s = Zn(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const l = Si(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function EC(e, t) {
  const n = Jd(e, t), r = Zn(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Si(r);
}
function OC(e, t) {
  const n = dn(e, t == null ? void 0 : t.in), r = +Si(n) - +EC(n);
  return Math.round(r / Qd) + 1;
}
function ef(e, t) {
  var f, p, g, h;
  const n = dn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Bo(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((h = (g = i.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Zn((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const l = So(s, t), c = Zn((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const d = So(c, t);
  return +n >= +l ? r + 1 : +n >= +d ? r : r - 1;
}
function RC(e, t) {
  var l, c, d, f;
  const n = Bo(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = ef(e, t), a = Zn((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), So(a, t);
}
function PC(e, t) {
  const n = dn(e, t == null ? void 0 : t.in), r = +So(n, t) - +RC(n, t);
  return Math.round(r / Qd) + 1;
}
function He(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const qn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return He(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : He(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return He(e.getDate(), t.length);
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
    return He(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return He(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return He(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return He(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return He(i, t.length);
  }
}, Er = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $c = {
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
      const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
      return n.ordinalNumber(i, { unit: "year" });
    }
    return qn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = ef(e, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = a % 100;
      return He(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : He(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Jd(e);
    return He(n, t.length);
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
    return He(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return He(r, 2);
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
        return He(r, 2);
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
        return qn.M(e, t);
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
        return He(r + 1, 2);
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
    const i = PC(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : He(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = OC(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : He(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : qn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = SC(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : He(r, t.length);
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
    const i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return He(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return He(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), i = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return He(i, t.length);
      case "io":
        return n.ordinalNumber(i, { unit: "day" });
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
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r === 12 ? i = Er.noon : r === 0 ? i = Er.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r >= 17 ? i = Er.evening : r >= 12 ? i = Er.afternoon : r >= 4 ? i = Er.morning : i = Er.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
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
    return qn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : qn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : He(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : He(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : qn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : qn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return qn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Nc(r);
      case "XXXX":
      case "XX":
        return sr(r);
      case "XXXXX":
      case "XXX":
      default:
        return sr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Nc(r);
      case "xxxx":
      case "xx":
        return sr(r);
      case "xxxxx":
      case "xxx":
      default:
        return sr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Mc(r, ":");
      case "OOOO":
      default:
        return "GMT" + sr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Mc(r, ":");
      case "zzzz":
      default:
        return "GMT" + sr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return He(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return He(+e, t.length);
  }
};
function Mc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + He(a, 2);
}
function Nc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + He(Math.abs(e) / 60, 2) : sr(e, t);
}
function sr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = He(Math.trunc(r / 60), 2), a = He(r % 60, 2);
  return n + i + t + a;
}
const Dc = (e, t) => {
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
}, tf = (e, t) => {
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
}, IC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return Dc(e, t);
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
  return a.replace("{{date}}", Dc(r, t)).replace("{{time}}", tf(i, t));
}, kC = {
  p: tf,
  P: IC
}, $C = /^D+$/, MC = /^Y+$/, NC = ["D", "DD", "YY", "YYYY"];
function DC(e) {
  return $C.test(e);
}
function AC(e) {
  return MC.test(e);
}
function LC(e, t, n) {
  const r = FC(e, t, n);
  if (console.warn(r), NC.includes(e)) throw new RangeError(r);
}
function FC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function nf(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function rf(e) {
  return !(!nf(e) && typeof e != "number" || isNaN(+dn(e)));
}
const BC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _C = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jC = /^'([^]*?)'?$/, zC = /''/g, WC = /[a-zA-Z]/;
function VC(e, t, n) {
  var f, p, g, h, b, u, y, C;
  const r = Bo(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? yC, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((C = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = dn(e, n == null ? void 0 : n.in);
  if (!rf(l))
    throw new RangeError("Invalid time value");
  let c = t.match(_C).map((S) => {
    const v = S[0];
    if (v === "p" || v === "P") {
      const w = kC[v];
      return w(S, i.formatLong);
    }
    return S;
  }).join("").match(BC).map((S) => {
    if (S === "''")
      return { isToken: !1, value: "'" };
    const v = S[0];
    if (v === "'")
      return { isToken: !1, value: HC(S) };
    if ($c[v])
      return { isToken: !0, value: S };
    if (v.match(WC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: S };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(l, c));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return c.map((S) => {
    if (!S.isToken) return S.value;
    const v = S.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && AC(v) || !(n != null && n.useAdditionalDayOfYearTokens) && DC(v)) && LC(v, t, String(e));
    const w = $c[v[0]];
    return w(l, v, i.localize, d);
  }).join("");
}
function HC(e) {
  const t = e.match(jC);
  return t ? t[1].replace(zC, "'") : e;
}
function UC() {
  return Object.assign({}, Bo());
}
function Ac(e, t, n) {
  const r = UC(), i = GC(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in i ? YC(i, t) : qC(i, t);
}
function YC(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function qC(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function GC(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function KC(e, t) {
  const n = e1(t);
  return "formatToParts" in n ? ZC(n, e) : QC(n, e);
}
const XC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ZC(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let i = 0; i < n.length; i++) {
      const a = XC[n[i].type];
      a !== void 0 && (r[a] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function QC(e, t) {
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
const Na = {}, Lc = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), JC = Lc === "06/25/2014, 00:00:00" || Lc === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function e1(e) {
  return Na[e] || (Na[e] = JC ? new Intl.DateTimeFormat("en-US", {
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
  })), Na[e];
}
function of(e, t, n, r, i, a, s) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, i, a, s), l;
}
const Fc = 36e5, t1 = 6e4, Da = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Ys(e, t, n) {
  if (!e)
    return 0;
  let r = Da.timezoneZ.exec(e);
  if (r)
    return 0;
  let i, a;
  if (r = Da.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), Bc(i) ? -(i * Fc) : NaN;
  if (r = Da.timezoneHHMM.exec(e), r) {
    i = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return Bc(i, s) ? (a = Math.abs(i) * Fc + s * t1, r[1] === "+" ? -a : a) : NaN;
  }
  if (o1(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : n1(t), l = ls(s, e);
    return -(n ? l : r1(t, l, e));
  }
  return NaN;
}
function n1(e) {
  return of(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function ls(e, t) {
  const n = KC(e, t), r = of(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let i = e.getTime();
  const a = i % 1e3;
  return i -= a >= 0 ? a : 1e3 + a, r - i;
}
function r1(e, t, n) {
  let i = e.getTime() - t;
  const a = ls(new Date(i), n);
  if (t === a)
    return t;
  i -= a - t;
  const s = ls(new Date(i), n);
  return a === s ? a : Math.max(a, s);
}
function Bc(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const _c = {};
function o1(e) {
  if (_c[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), _c[e] = !0, !0;
  } catch {
    return !1;
  }
}
const i1 = 60 * 1e3, a1 = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = Aa(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return jc(r);
      case "XXXX":
      case "XX":
        return Rr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Rr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = Aa(n.timeZone, e);
    switch (t) {
      case "x":
        return jc(r);
      case "xxxx":
      case "xx":
        return Rr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Rr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = Aa(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + s1(r, ":");
      case "OOOO":
      default:
        return "GMT" + Rr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return Ac("short", e, n);
      case "zzzz":
      default:
        return Ac("long", e, n);
    }
  }
};
function Aa(e, t) {
  const n = e ? Ys(e, t, !0) / i1 : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function Ei(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Rr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ei(Math.floor(r / 60), 2), a = Ei(Math.floor(r % 60), 2);
  return n + i + t + a;
}
function jc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ei(Math.abs(e) / 60, 2) : Rr(e, t);
}
function s1(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Ei(a, 2);
}
function zc(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const l1 = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, La = 36e5, Wc = 6e4, c1 = 2, kt = {
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
  timeZone: l1
};
function af(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? c1 : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = u1(e), { year: i, restDateString: a } = d1(r.date, n), s = f1(a, i);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const l = s.getTime();
    let c = 0, d;
    if (r.time && (c = p1(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (d = Ys(r.timeZone || t.timeZone, new Date(l + c)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = zc(new Date(l + c)), d = zc(new Date(l + c + d));
    return new Date(l + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function u1(e) {
  const t = {};
  let n = kt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = kt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const i = kt.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function d1(e, t) {
  if (e) {
    const n = kt.YYY[t], r = kt.YYYYY[t];
    let i = kt.YYYY.exec(e) || r.exec(e);
    if (i) {
      const a = i[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (i = kt.YY.exec(e) || n.exec(e), i) {
      const a = i[1];
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
function f1(e, t) {
  if (t === null)
    return null;
  let n, r, i;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = kt.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Hc(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = kt.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return g1(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = kt.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return Hc(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = kt.Www.exec(e), a)
    return i = parseInt(a[1], 10) - 1, Uc(i) ? Vc(t, i) : /* @__PURE__ */ new Date(NaN);
  if (a = kt.WwwD.exec(e), a) {
    i = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Uc(i, s) ? Vc(t, i, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function p1(e) {
  let t, n, r = kt.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), Fa(t) ? t % 24 * La : NaN;
  if (r = kt.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Fa(t, n) ? t % 24 * La + n * Wc : NaN;
  if (r = kt.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const i = parseFloat(r[3].replace(",", "."));
    return Fa(t, n, i) ? t % 24 * La + n * Wc + i * 1e3 : NaN;
  }
  return null;
}
function Vc(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const m1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], h1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function sf(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Hc(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = sf(e);
    if (r && n > h1[t] || !r && n > m1[t])
      return !1;
  }
  return !0;
}
function g1(e, t) {
  if (t < 1)
    return !1;
  const n = sf(e);
  return !(n && t > 366 || !n && t > 365);
}
function Uc(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Fa(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const b1 = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function y1(e, t, n = {}) {
  t = String(t);
  const r = t.match(b1);
  if (r) {
    const i = af(n.originalDate || e, n);
    t = r.reduce(function(a, s) {
      if (s[0] === "'")
        return a;
      const l = a.indexOf(s), c = a[l - 1] === "'", d = a.replace(s, "'" + a1[s[0]](i, s, n) + "'");
      return c ? d.substring(0, l - 1) + d.substring(l + 1) : d;
    }, t);
  }
  return VC(e, t, n);
}
function v1(e, t, n) {
  e = af(e, n);
  const r = Ys(t, e, !0), i = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), a.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), a;
}
function w1(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, y1(v1(e, t, { timeZone: r.timeZone }), n, r);
}
var lf = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(lf || {});
const x1 = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !nf(e) && typeof e == "string" ? new Date(e) : e;
  return rf(r) ? w1(e, n, t) : "--";
}, Yc = (e) => e.trim().toLowerCase(), aa = wt.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1
}), C1 = "data-grid-hidden-column-visibility", T1 = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: i,
  localStorageKey: a = C1
}) => {
  const [s, l] = wt.useState(0), [c, d] = wt.useState([]);
  Wr(() => {
    const g = localStorage.getItem(a);
    if (g) {
      const h = JSON.parse(g);
      f(Array.isArray(h) ? h : []);
    } else
      f(r || []);
  }, [r]);
  const f = St((g) => {
    localStorage.setItem(a, JSON.stringify(g)), l((h) => h + 1), d(g);
  }, []), p = Je(
    () => e.filter((g) => !(n != null && n.includes(g.key))),
    [e, n]
  );
  return /* @__PURE__ */ P(
    aa.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        columns: p,
        hiddenColumn: c,
        setHiddenColumn: f,
        enabled: i
      },
      children: t
    }
  );
}, S1 = ({
  columns: e,
  selectionEnabled: t
}) => {
  const { enabled: n, hiddenColumn: r } = cn(aa), i = St((a) => {
    const s = () => {
      if (a.renderCell)
        return a.renderCell;
      if (a.type === Pr.DATE)
        return ({ row: c }) => {
          var d, f;
          return x1(
            c[a.key],
            ((d = a.dateOptions) == null ? void 0 : d.formatDate) ?? lf.DATE_WITH_TIME,
            (f = a.dateOptions) == null ? void 0 : f.timeZone
          );
        };
    }, l = () => a.renderHeaderCell ? a.renderHeaderCell : _x(a);
    return { ...a, renderCell: s(), renderHeaderCell: l() };
  }, []);
  return Je(() => {
    const a = [];
    return t && a.push({
      ...kp,
      minWidth: 50,
      maxWidth: 50
    }), a.push(...e.map((s) => i(s))), n && r ? a.filter((s) => !r.includes(s.key)) : a;
  }, [e, i, n, r]);
};
function E1(e) {
  return De("PrivateSwitchBase", e);
}
ke("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const O1 = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", r && "disabled", i && `edge${re(i)}`],
    input: ["input"]
  };
  return Le(a, E1, t);
}, R1 = oe(zr)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), P1 = oe("input", {
  shouldForwardProp: Kt
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), cf = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: a,
    className: s,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: d = !1,
    edge: f = !1,
    icon: p,
    id: g,
    inputProps: h,
    inputRef: b,
    name: u,
    onBlur: y,
    onChange: C,
    onFocus: S,
    readOnly: v,
    required: w = !1,
    tabIndex: x,
    type: R,
    value: E,
    ...k
  } = t, [I, m] = $r({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), O = mr(), $ = (q) => {
    S && S(q), O && O.onFocus && O.onFocus(q);
  }, N = (q) => {
    y && y(q), O && O.onBlur && O.onBlur(q);
  }, j = (q) => {
    if (q.nativeEvent.defaultPrevented)
      return;
    const W = q.target.checked;
    m(W), C && C(q, W);
  };
  let M = c;
  O && typeof M > "u" && (M = O.disabled);
  const L = R === "checkbox" || R === "radio", H = {
    ...t,
    checked: I,
    disabled: M,
    disableFocusRipple: d,
    edge: f
  }, ee = O1(H);
  return /* @__PURE__ */ Se(R1, {
    component: "span",
    className: de(ee.root, s),
    centerRipple: !0,
    focusRipple: !d,
    disabled: M,
    tabIndex: null,
    role: void 0,
    onFocus: $,
    onBlur: N,
    ownerState: H,
    ref: n,
    ...k,
    children: [/* @__PURE__ */ P(P1, {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: ee.input,
      disabled: M,
      id: L ? g : void 0,
      name: u,
      onChange: j,
      readOnly: v,
      ref: b,
      required: w,
      ownerState: H,
      tabIndex: x,
      type: R,
      ...R === "checkbox" && E === void 0 ? {} : {
        value: E
      },
      ...h
    }), I ? a : p]
  });
});
process.env.NODE_ENV !== "production" && (cf.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: o.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: o.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Gt,
  /*
   * @ignore
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * The input component prop `type`.
   */
  type: o.string.isRequired,
  /**
   * The value of the component.
   */
  value: o.any
});
const I1 = Mn(/* @__PURE__ */ P("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), k1 = Mn(/* @__PURE__ */ P("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), $1 = Mn(/* @__PURE__ */ P("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function M1(e) {
  return De("MuiCheckbox", e);
}
const Ba = ke("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), N1 = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: i
  } = e, a = {
    root: ["root", n && "indeterminate", `color${re(r)}`, `size${re(i)}`]
  }, s = Le(a, M1, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, D1 = oe(cf, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${re(n.size)}`], n.color !== "default" && t[`color${re(n.color)}`]];
  }
})(Ie(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Ht()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ba.checked}, &.${Ba.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Ba.disabled}`]: {
        color: (e.vars || e).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
}))), A1 = /* @__PURE__ */ P(k1, {}), L1 = /* @__PURE__ */ P(I1, {}), F1 = /* @__PURE__ */ P($1, {}), uf = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = A1,
    color: a = "primary",
    icon: s = L1,
    indeterminate: l = !1,
    indeterminateIcon: c = F1,
    inputProps: d,
    size: f = "medium",
    disableRipple: p = !1,
    className: g,
    ...h
  } = r, b = l ? c : s, u = l ? c : i, y = {
    ...r,
    disableRipple: p,
    color: a,
    indeterminate: l,
    size: f
  }, C = N1(y);
  return /* @__PURE__ */ P(D1, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": l,
      ...d
    },
    icon: /* @__PURE__ */ T.cloneElement(b, {
      fontSize: b.props.fontSize ?? f
    }),
    checkedIcon: /* @__PURE__ */ T.cloneElement(u, {
      fontSize: u.props.fontSize ?? f
    }),
    ownerState: y,
    ref: n,
    className: de(C.root, g),
    disableRipple: p,
    ...h,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (uf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: o.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: o.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Gt,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: o.any
});
const df = Pn(uf)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${gt.primary500};
    }
`;
var B1 = {
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
function _1(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return B1[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function _a(e) {
  var t = _1(e);
  return "".concat(t.value).concat(t.unit);
}
var j1 = function(e, t, n) {
  var r = "react-spinners-".concat(e, "-").concat(n);
  if (typeof window > "u" || !window.document)
    return r;
  var i = document.createElement("style");
  document.head.appendChild(i);
  var a = i.sheet, s = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
  return a && a.insertRule(s, 0), r;
}, Oi = function() {
  return Oi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Oi.apply(this, arguments);
}, z1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, W1 = j1("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function V1(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, a = e.speedMultiplier, s = a === void 0 ? 1 : a, l = e.cssOverride, c = l === void 0 ? {} : l, d = e.size, f = d === void 0 ? 15 : d, p = e.margin, g = p === void 0 ? 2 : p, h = z1(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), b = Oi({ display: "inherit" }, c), u = function(y) {
    return {
      backgroundColor: i,
      width: _a(f),
      height: _a(f),
      margin: _a(g),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(W1, " ").concat(0.75 / s, "s ").concat(y * 0.12 / s, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? T.createElement(
    "span",
    Oi({ style: b }, h),
    T.createElement("span", { style: u(1) }),
    T.createElement("span", { style: u(2) }),
    T.createElement("span", { style: u(3) })
  ) : null;
}
const H1 = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: i
}) => e ? e(n, r, i) : t === vo.TEXT && typeof n == "string" && typeof r == "string" ? Yc(n).includes(Yc(r)) : t === vo.AUTOCOMPLETE ? n === r : !1, U1 = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = cn(Fs);
  return Je(() => n ? [...t].filter(
    (i) => Object.entries(r).every(([a, s]) => {
      if (s === void 0 || typeof s == "string" && s === "")
        return !0;
      const l = e.find((c) => c.key === a);
      return l ? H1({
        comparator: l.filterComparator,
        filterType: l.filterType ?? vo.TEXT,
        value: i[a],
        valueToMatch: s,
        row: i
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, qc = ke("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Gc = ke("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Kc = ke("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Y1(e) {
  return De("MuiMenuItem", e);
}
const no = ke("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), q1 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, G1 = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: s
  } = e, c = Le({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, Y1, s);
  return {
    ...s,
    ...c
  };
}, K1 = oe(zr, {
  shouldForwardProp: (e) => Kt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: q1
})(Ie(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${no.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${no.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${no.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${no.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${no.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${qc.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${qc.inset}`]: {
    marginLeft: 52
  },
  [`& .${Kc.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Kc.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Gc.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Gc.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), qs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: d,
    role: f = "menuitem",
    tabIndex: p,
    className: g,
    ...h
  } = r, b = T.useContext(hi), u = T.useMemo(() => ({
    dense: s || b.dense || !1,
    disableGutters: c
  }), [b.dense, s, c]), y = T.useRef(null);
  kn(() => {
    i && (y.current ? y.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...r,
    dense: u.dense,
    divider: l,
    disableGutters: c
  }, S = G1(r), v = mt(y, n);
  let w;
  return r.disabled || (w = p !== void 0 ? p : -1), /* @__PURE__ */ P(hi.Provider, {
    value: u,
    children: /* @__PURE__ */ P(K1, {
      ref: v,
      role: f,
      tabIndex: w,
      component: a,
      focusVisibleClassName: de(S.focusVisible, d),
      className: de(S.root, g),
      ...h,
      ownerState: C,
      classes: S
    })
  });
});
process.env.NODE_ENV !== "production" && (qs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
const ff = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (ff.displayName = "TableContext");
const pf = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (pf.displayName = "Tablelvl2Context");
function X1(e) {
  return De("MuiTableCell", e);
}
const Z1 = ke("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), Q1 = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: i,
    size: a,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${re(r)}`, i !== "normal" && `padding${re(i)}`, `size${re(a)}`]
  };
  return Le(l, X1, t);
}, J1 = oe("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${re(n.size)}`], n.padding !== "normal" && t[`padding${re(n.padding)}`], n.align !== "inherit" && t[`align${re(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(Ie(({
  theme: e
}) => ({
  ...e.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Yi(Qe(e.palette.divider, 1), 0.88) : Ui(Qe(e.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (e.vars || e).palette.text.primary,
      lineHeight: e.typography.pxToRem(24),
      fontWeight: e.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (e.vars || e).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      lineHeight: e.typography.pxToRem(21),
      fontSize: e.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${Z1.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (e.vars || e).palette.background.default
    }
  }]
}))), Ri = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiTableCell"
  }), {
    align: i = "inherit",
    className: a,
    component: s,
    padding: l,
    scope: c,
    size: d,
    sortDirection: f,
    variant: p,
    ...g
  } = r, h = T.useContext(ff), b = T.useContext(pf), u = b && b.variant === "head";
  let y;
  s ? y = s : y = u ? "th" : "td";
  let C = c;
  y === "td" ? C = void 0 : !C && u && (C = "col");
  const S = p || b && b.variant, v = {
    ...r,
    align: i,
    component: y,
    padding: l || (h && h.padding ? h.padding : "normal"),
    size: d || (h && h.size ? h.size : "medium"),
    sortDirection: f,
    stickyHeader: S === "head" && h && h.stickyHeader,
    variant: S
  }, w = Q1(v);
  let x = null;
  return f && (x = f === "asc" ? "ascending" : "descending"), /* @__PURE__ */ P(J1, {
    as: y,
    ref: n,
    className: de(w.root, a),
    "aria-sort": x,
    scope: C,
    ownerState: v,
    ...g
  });
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: o.oneOf(["checkbox", "none", "normal"]),
  /**
   * Set scope attribute.
   */
  scope: o.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: o.oneOf(["asc", "desc", !1]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: o.oneOfType([o.oneOf(["body", "footer", "head"]), o.string])
});
function eT(e) {
  return De("MuiToolbar", e);
}
ke("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const tT = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return Le({
    root: ["root", !n && "gutters", r]
  }, eT, t);
}, nT = oe("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(Ie(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2),
      [e.breakpoints.up("sm")]: {
        paddingLeft: e.spacing(3),
        paddingRight: e.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: e.mixins.toolbar
  }]
}))), mf = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: a = "div",
    disableGutters: s = !1,
    variant: l = "regular",
    ...c
  } = r, d = {
    ...r,
    component: a,
    disableGutters: s,
    variant: l
  }, f = tT(d);
  return /* @__PURE__ */ P(nT, {
    as: a,
    className: de(f.root, i),
    ref: n,
    ownerState: d,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (mf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
const rT = Mn(/* @__PURE__ */ P("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), oT = Mn(/* @__PURE__ */ P("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight"), iT = Mn(/* @__PURE__ */ P("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), aT = Mn(/* @__PURE__ */ P("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), hf = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    backIconButtonProps: r,
    count: i,
    disabled: a = !1,
    getItemAriaLabel: s,
    nextIconButtonProps: l,
    onPageChange: c,
    page: d,
    rowsPerPage: f,
    showFirstButton: p,
    showLastButton: g,
    slots: h = {},
    slotProps: b = {},
    ...u
  } = t, y = Rs(), C = (U) => {
    c(U, 0);
  }, S = (U) => {
    c(U, d - 1);
  }, v = (U) => {
    c(U, d + 1);
  }, w = (U) => {
    c(U, Math.max(0, Math.ceil(i / f) - 1));
  }, x = h.firstButton ?? ur, R = h.lastButton ?? ur, E = h.nextButton ?? ur, k = h.previousButton ?? ur, I = h.firstButtonIcon ?? aT, m = h.lastButtonIcon ?? iT, O = h.nextButtonIcon ?? oT, $ = h.previousButtonIcon ?? rT, N = y ? R : x, j = y ? E : k, M = y ? k : E, L = y ? x : R, H = y ? b.lastButton : b.firstButton, ee = y ? b.nextButton : b.previousButton, q = y ? b.previousButton : b.nextButton, W = y ? b.firstButton : b.lastButton;
  return /* @__PURE__ */ Se("div", {
    ref: n,
    ...u,
    children: [p && /* @__PURE__ */ P(N, {
      onClick: C,
      disabled: a || d === 0,
      "aria-label": s("first", d),
      title: s("first", d),
      ...H,
      children: y ? /* @__PURE__ */ P(m, {
        ...b.lastButtonIcon
      }) : /* @__PURE__ */ P(I, {
        ...b.firstButtonIcon
      })
    }), /* @__PURE__ */ P(j, {
      onClick: S,
      disabled: a || d === 0,
      color: "inherit",
      "aria-label": s("previous", d),
      title: s("previous", d),
      ...ee ?? r,
      children: y ? /* @__PURE__ */ P(O, {
        ...b.nextButtonIcon
      }) : /* @__PURE__ */ P($, {
        ...b.previousButtonIcon
      })
    }), /* @__PURE__ */ P(M, {
      onClick: v,
      disabled: a || (i !== -1 ? d >= Math.ceil(i / f) - 1 : !1),
      color: "inherit",
      "aria-label": s("next", d),
      title: s("next", d),
      ...q ?? l,
      children: y ? /* @__PURE__ */ P($, {
        ...b.previousButtonIcon
      }) : /* @__PURE__ */ P(O, {
        ...b.nextButtonIcon
      })
    }), g && /* @__PURE__ */ P(L, {
      onClick: w,
      disabled: a || d >= Math.ceil(i / f) - 1,
      "aria-label": s("last", d),
      title: s("last", d),
      ...W,
      children: y ? /* @__PURE__ */ P(I, {
        ...b.firstButtonIcon
      }) : /* @__PURE__ */ P(m, {
        ...b.lastButtonIcon
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (hf.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  backIconButtonProps: o.object,
  /**
   * The total number of rows.
   */
  count: o.number.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   *
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @returns {string}
   */
  getItemAriaLabel: o.func.isRequired,
  /**
   * Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  nextIconButtonProps: o.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: o.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: o.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: o.number.isRequired,
  /**
   * If `true`, show the first-page button.
   */
  showFirstButton: o.bool.isRequired,
  /**
   * If `true`, show the last-page button.
   */
  showLastButton: o.bool.isRequired,
  /**
   * The props used for each slot inside the TablePaginationActions.
   * @default {}
   */
  slotProps: o.shape({
    firstButton: o.object,
    firstButtonIcon: o.object,
    lastButton: o.object,
    lastButtonIcon: o.object,
    nextButton: o.object,
    nextButtonIcon: o.object,
    previousButton: o.object,
    previousButtonIcon: o.object
  }),
  /**
   * The components used for each slot inside the TablePaginationActions.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    firstButton: o.elementType,
    firstButtonIcon: o.elementType,
    lastButton: o.elementType,
    lastButtonIcon: o.elementType,
    nextButton: o.elementType,
    nextButtonIcon: o.elementType,
    previousButton: o.elementType,
    previousButtonIcon: o.elementType
  })
});
function sT(e) {
  return De("MuiTablePagination", e);
}
const mo = ke("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var Xc;
const lT = oe(Ri, {
  name: "MuiTablePagination",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(Ie(({
  theme: e
}) => ({
  overflow: "auto",
  color: (e.vars || e).palette.text.primary,
  fontSize: e.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
}))), cT = oe(mf, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (e, t) => ({
    [`& .${mo.actions}`]: t.actions,
    ...t.toolbar
  })
})(Ie(({
  theme: e
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [e.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${mo.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}))), uT = oe("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})({
  flex: "1 1 100%"
}), dT = oe("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (e, t) => t.selectLabel
})(Ie(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
}))), fT = oe(ra, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (e, t) => ({
    [`& .${mo.selectIcon}`]: t.selectIcon,
    [`& .${mo.select}`]: t.select,
    ...t.input,
    ...t.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${mo.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
}), pT = oe(qs, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (e, t) => t.menuItem
})({}), mT = oe("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (e, t) => t.displayedRows
})(Ie(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
})));
function hT({
  from: e,
  to: t,
  count: n
}) {
  return `${e}–${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function gT(e) {
  return `Go to ${e} page`;
}
const bT = (e) => {
  const {
    classes: t
  } = e;
  return Le({
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  }, sT, t);
}, gf = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiTablePagination"
  }), {
    ActionsComponent: i = hf,
    backIconButtonProps: a,
    colSpan: s,
    component: l = Ri,
    count: c,
    disabled: d = !1,
    getItemAriaLabel: f = gT,
    labelDisplayedRows: p = hT,
    labelRowsPerPage: g = "Rows per page:",
    nextIconButtonProps: h,
    onPageChange: b,
    onRowsPerPageChange: u,
    page: y,
    rowsPerPage: C,
    rowsPerPageOptions: S = [10, 25, 50, 100],
    SelectProps: v = {},
    showFirstButton: w = !1,
    showLastButton: x = !1,
    slotProps: R = {},
    slots: E = {},
    ...k
  } = r, I = r, m = bT(I), O = (R == null ? void 0 : R.select) ?? v, $ = O.native ? "option" : pT;
  let N;
  (l === Ri || l === "td") && (N = s || 1e3);
  const j = Lr(O.id), M = Lr(O.labelId), L = () => c === -1 ? (y + 1) * C : C === -1 ? c : Math.min(c, (y + 1) * C), H = {
    slots: E,
    slotProps: R
  }, [ee, q] = ut("root", {
    ref: n,
    className: m.root,
    elementType: lT,
    externalForwardedProps: {
      ...H,
      component: l,
      ...k
    },
    ownerState: I,
    additionalProps: {
      colSpan: N
    }
  }), [W, U] = ut("toolbar", {
    className: m.toolbar,
    elementType: cT,
    externalForwardedProps: H,
    ownerState: I
  }), [ie, J] = ut("spacer", {
    className: m.spacer,
    elementType: uT,
    externalForwardedProps: H,
    ownerState: I
  }), [D, F] = ut("selectLabel", {
    className: m.selectLabel,
    elementType: dT,
    externalForwardedProps: H,
    ownerState: I,
    additionalProps: {
      id: M
    }
  }), [G, A] = ut("select", {
    className: m.select,
    elementType: fT,
    externalForwardedProps: H,
    ownerState: I
  }), [z, X] = ut("menuItem", {
    className: m.menuItem,
    elementType: $,
    externalForwardedProps: H,
    ownerState: I
  }), [K, ae] = ut("displayedRows", {
    className: m.displayedRows,
    elementType: mT,
    externalForwardedProps: H,
    ownerState: I
  });
  return /* @__PURE__ */ P(ee, {
    ...q,
    children: /* @__PURE__ */ Se(W, {
      ...U,
      children: [/* @__PURE__ */ P(ie, {
        ...J
      }), S.length > 1 && /* @__PURE__ */ P(D, {
        ...F,
        children: g
      }), S.length > 1 && /* @__PURE__ */ P(G, {
        variant: "standard",
        ...!O.variant && {
          input: Xc || (Xc = /* @__PURE__ */ P(Ao, {}))
        },
        value: C,
        onChange: u,
        id: j,
        labelId: M,
        ...O,
        classes: {
          ...O.classes,
          // TODO v5 remove `classes.input`
          root: de(m.input, m.selectRoot, (O.classes || {}).root),
          select: de(m.select, (O.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: de(m.selectIcon, (O.classes || {}).icon)
        },
        disabled: d,
        ...A,
        children: S.map((B) => /* @__PURE__ */ Kf(z, {
          ...X,
          key: B.label ? B.label : B,
          value: B.value ? B.value : B
        }, B.label ? B.label : B))
      }), /* @__PURE__ */ P(K, {
        ...ae,
        children: p({
          from: c === 0 ? 0 : y * C + 1,
          to: L(),
          count: c === -1 ? -1 : c,
          page: y
        })
      }), /* @__PURE__ */ P(i, {
        className: m.actions,
        backIconButtonProps: a,
        count: c,
        nextIconButtonProps: h,
        onPageChange: b,
        page: y,
        rowsPerPage: C,
        showFirstButton: w,
        showLastButton: x,
        slotProps: R.actions,
        slots: E.actions,
        getItemAriaLabel: f,
        disabled: d
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (gf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   * @default TablePaginationActions
   */
  ActionsComponent: o.elementType,
  /**
   * Props applied to the back arrow [`IconButton`](https://mui.com/material-ui/api/icon-button/) component.
   *
   * This prop is an alias for `slotProps.actions.previousButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.previousButton` instead.
   */
  backIconButtonProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  colSpan: o.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: Mr.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: o.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: o.func,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: o.node,
  /**
   * Props applied to the next arrow [`IconButton`](https://mui.com/material-ui/api/icon-button/) element.
   *
   * This prop is an alias for `slotProps.actions.nextButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.nextButton` instead.
   */
  nextIconButtonProps: o.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: o.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: o.func,
  /**
   * The zero-based index of the current page.
   */
  page: un(Mr.isRequired, (e) => {
    const {
      count: t,
      page: n,
      rowsPerPage: r
    } = e;
    if (t === -1)
      return null;
    const i = Math.max(0, Math.ceil(t / r) - 1);
    return n < 0 || n > i ? new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${i}, but page is ${n}).`) : null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: Mr.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: o.arrayOf(o.oneOfType([o.number, o.shape({
    label: o.string.isRequired,
    value: o.number.isRequired
  })]).isRequired),
  /**
   * Props applied to the rows per page [`Select`](https://mui.com/material-ui/api/select/) element.
   *
   * This prop is an alias for `slotProps.select` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.select` instead.
   *
   * @default {}
   */
  SelectProps: o.object,
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: o.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    actions: o.shape({
      firstButton: o.object,
      firstButtonIcon: o.object,
      lastButton: o.object,
      lastButtonIcon: o.object,
      nextButton: o.object,
      nextButtonIcon: o.object,
      previousButton: o.object,
      previousButtonIcon: o.object
    }),
    displayedRows: o.oneOfType([o.func, o.object]),
    menuItem: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    select: o.object,
    selectLabel: o.oneOfType([o.func, o.object]),
    spacer: o.oneOfType([o.func, o.object]),
    toolbar: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    actions: o.shape({
      firstButton: o.elementType,
      firstButtonIcon: o.elementType,
      lastButton: o.elementType,
      lastButtonIcon: o.elementType,
      nextButton: o.elementType,
      nextButtonIcon: o.elementType,
      previousButton: o.elementType,
      previousButtonIcon: o.elementType
    }),
    displayedRows: o.elementType,
    menuItem: o.elementType,
    root: o.elementType,
    select: o.elementType,
    selectLabel: o.elementType,
    spacer: o.elementType,
    toolbar: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const yT = Pn.div`
    height: 80px;
    width: 100%;
`, vT = wt.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: i, labels: a }) => {
    const s = St(
      (c, d) => {
        t(d);
      },
      []
    ), l = St(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ P(yT, { children: /* @__PURE__ */ P(
      gf,
      {
        labelRowsPerPage: a != null && a.rowsPerPageLabel ? /* @__PURE__ */ P("span", { children: a == null ? void 0 : a.rowsPerPageLabel }) : void 0,
        labelDisplayedRows: ({ from: c, to: d, count: f }) => `${c}-${d} ${a != null && a.ofLabel ? a.ofLabel : "of"} ${f}`,
        component: "div",
        count: i,
        page: e,
        onPageChange: s,
        rowsPerPage: r,
        onRowsPerPageChange: l
      }
    ) });
  }
);
var wT = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(wT || {});
const xT = (e = 10) => {
  const [t, n] = vt(0), [r, i] = vt(e), a = St(() => {
    n(0), i(e);
  }, []);
  return Wr(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: i,
    resetPagination: a
  };
}, CT = Pn.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${gt.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, TT = wt.memo(({ checked: e, onChange: t }) => {
  const n = St(
    (r, i) => {
      t(i, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ P(df, { checked: e, onChange: n });
}), ST = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: i,
  onSortColumnsChange: a,
  defaultSortColumns: s,
  selectedRows: l,
  onSelectedRowsChange: c,
  noDataMessage: d,
  filters: f,
  setFilters: p,
  pagination: g,
  ...h
}) => {
  const { gridKey: b } = cn(aa), { pageSize: u, currentPage: y, setCurrentPage: C, setPageSize: S } = xT(
    g == null ? void 0 : g.defaultPageSize
  ), v = S1({
    columns: r,
    selectionEnabled: !!c
  }), w = Je(
    () => v.some((j) => j.filterEnabled),
    [v]
  ), x = Je(
    () => (g == null ? void 0 : g.enabled) && !g.remotePagination,
    [g]
  ), R = Je(() => !p, [p]), E = U1({
    columns: v,
    rows: n,
    enabled: R
  }), k = Je(() => !a, [a]), {
    sortedRows: I,
    sortColumns: m,
    setSortedColumns: O
  } = Jh({
    columns: v,
    rows: E,
    defaultSortColumns: s
  }), $ = Je(() => x ? I.slice(y * u, (y + 1) * u) : I, [I, x, y, u]), N = St(
    (j, M) => M === 0 ? "first-row" : M === n.length - 1 ? "last-row" : "",
    [n]
  );
  return Wr(() => {
    const j = l == null ? void 0 : l.filter(
      (M) => n.some((L) => L.id === M)
    );
    (j == null ? void 0 : j.length) != (l == null ? void 0 : l.length) && (c == null || c(j ?? []));
  }, [n, l]), /* @__PURE__ */ Se(Zh, { $pagination: !!(g != null && g.enabled), children: [
    /* @__PURE__ */ P("div", { children: /* @__PURE__ */ P(
      hu,
      {
        rowHeight: 50,
        selectedRows: l ? new Set(l) : void 0,
        onSelectedRowsChange: (j) => {
          c == null || c(Array.from(j));
        },
        rowKeyGetter: (j) => j.id,
        rows: $,
        onSortColumnsChange: k ? O : a,
        sortColumns: k ? m : i,
        columns: v,
        rowClass: N,
        headerRowHeight: w ? 70 : void 0,
        renderers: {
          renderCheckbox: (j) => /* @__PURE__ */ P(TT, { ...j }),
          ...h.renderers
        },
        ...h,
        style: { ...Jm, ...e ?? {} }
      },
      b
    ) }),
    g != null && g.enabled ? /* @__PURE__ */ P(
      vT,
      {
        ...(g == null ? void 0 : g.remotePagination) ?? {
          currentPage: y,
          setCurrentPage: C,
          pageSize: u,
          setPageSize: S,
          totalCount: E.length
        }
      }
    ) : null,
    t ? /* @__PURE__ */ Se(CT, { children: [
      /* @__PURE__ */ P("div", {}),
      /* @__PURE__ */ P(V1, { color: gt.primary500 })
    ] }) : null
  ] });
}, NT = ({
  filters: e,
  setFilters: t,
  columns: n,
  visibilityColumnFeature: {
    enabled: r,
    visibilityFeatureDisabledFor: i,
    hiddenByDefault: a,
    localStorageKey: s
  } = {},
  ...l
}) => /* @__PURE__ */ P(R0, { filters: e, setFilters: t, children: /* @__PURE__ */ P(
  T1,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: a,
    localStorageKey: s,
    visibilityFeatureDisabledFor: i,
    children: /* @__PURE__ */ P(ST, { ...l, columns: n, filters: e, setFilters: t })
  }
) }), ET = Pn(qs)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, DT = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r } = cn(aa), i = wt.useRef(null), [a, s] = wt.useState(null), l = !!a, c = St(() => {
    s(i.current);
  }, []), d = St(() => {
    s(null);
  }, []), f = St(
    (p) => () => {
      const g = n.indexOf(p);
      r(
        g === -1 ? [...n, p] : n.filter((h) => h !== p)
      );
    },
    [n]
  );
  return /* @__PURE__ */ Se("div", { ref: i, children: [
    /* @__PURE__ */ P(e, { onClick: c }),
    /* @__PURE__ */ P(Ds, { id: "column-visibility-menu", anchorEl: a, open: l, onClose: d, children: t.map((p) => /* @__PURE__ */ Se(ET, { onClick: f(p.key), children: [
      /* @__PURE__ */ P(df, { checked: !n.includes(p.key) }),
      p.name
    ] }, p.key)) })
  ] });
};
export {
  Pr as ColumnType,
  lf as DATE_FORMAT,
  wT as DEFAULT_PAGE_SIZES,
  NT as DataGrid,
  Cp as DataGridDefaultRenderersProvider,
  vo as FilterType,
  kT as Row,
  Nr as SELECT_COLUMN_KEY,
  ds as SelectCellFormatter,
  kp as SelectColumn,
  wp as ToggleGroup,
  $T as TreeDataGrid,
  DT as VisibilityColumnChooser,
  x1 as convertDate,
  Jm as defaultTheme,
  Yc as getStringToCompare,
  mp as renderCheckbox,
  du as renderHeaderCell,
  Om as renderSortIcon,
  Rm as renderSortPriority,
  vp as renderToggleGroup,
  xp as renderValue,
  gt as taktikTheme,
  MT as textEditor,
  Op as useHeaderRowSelection,
  xT as usePagination,
  su as useRowSelection
};
