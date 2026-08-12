import { jsx as y, jsxs as oe, Fragment as wn } from "react/jsx-runtime";
import * as Ot from "react";
import pe, { createContext as bt, memo as Le, forwardRef as yn, useContext as Ie, useMemo as j, useCallback as J, useRef as Re, useEffect as Ge, useState as te, useImperativeHandle as _o, useLayoutEffect as Bo, useId as Uo } from "react";
import { flushSync as Ft } from "react-dom";
import Te from "@emotion/styled";
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
function Me() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vr(e)) && (r && (r += " "), r += t);
  return r;
}
function we(e, t, n) {
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
    return we(a, i, {
      type: "HEADER"
    });
  if (t && r > o && r <= s + o)
    return we(a, i, {
      type: "SUMMARY",
      row: t[r + s]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return we(a, i, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return we(a, i, {
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
  lastFrozenColumnIndex: x,
  isCellWithinBounds: u
}) {
  let {
    idx: w,
    rowIdx: D
  } = l;
  const v = r.length, k = (Y) => {
    for (const C of o) {
      const S = C.idx;
      if (S > w) break;
      const M = ai({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: D,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: x,
        column: C
      });
      if (M && w > S && w < M + S) {
        w = S + (Y ? M : 0);
        break;
      }
    }
  }, R = (Y) => Y.level + d, N = () => {
    if (t) {
      let C = r[w].parent;
      for (; C !== void 0; ) {
        const S = R(C);
        if (D === S) {
          w = C.idx + C.colSpan;
          break;
        }
        C = C.parent;
      }
    } else if (e) {
      let C = r[w].parent, S = !1;
      for (; C !== void 0; ) {
        const M = R(C);
        if (D >= M) {
          w = C.idx, D = M, S = !0;
          break;
        }
        C = C.parent;
      }
      S || (w = f, D = h);
    }
  };
  if (u(l) && (k(t), D < d && N()), n === "CHANGE_ROW" && (w === v ? D === b || (w = 0, D += 1) : w === -1 && (D === c || (D -= 1, w = v - 1), k(!1))), D < d) {
    let C = r[w].parent;
    const S = D;
    for (D = d; C !== void 0; ) {
      const M = R(C);
      M >= S && (D = M, w = C.idx), C = C.parent;
    }
  }
  return {
    idx: w,
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
function xt(e, ...t) {
  return Me(Dr, ...t, e.frozen && ui);
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
const yi = "g1s9ylgp7-0-0-beta-47", pi = `rdg-group-cell-content ${yi}`, bi = "cz54e4y7-0-0-beta-47", xi = `rdg-caret ${bi}`;
function Ci(e) {
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
      className: xi,
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
  return Ie(Tr);
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
  const e = Ie(Er), t = Ie(Or);
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
  const e = Ie(Nr), t = Ie(Fr);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const _e = "rdg-select-column";
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
  key: _e,
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
    colSpanColumns: x,
    lastFrozenColumnIndex: u,
    headerRowsCount: w
  } = j(() => {
    let C = -1, S = 1;
    const M = [];
    O(e, 1);
    function O(z, W, ee) {
      for (const G of z) {
        if ("children" in G) {
          const xe = {
            name: G.name,
            parent: ee,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: G.headerCellClass
          };
          O(G.children, W + 1, xe);
          continue;
        }
        const ie = G.frozen ?? !1, ge = {
          ...G,
          parent: ee,
          idx: 0,
          level: 0,
          frozen: ie,
          width: G.width ?? a,
          minWidth: G.minWidth ?? s,
          maxWidth: G.maxWidth ?? c,
          sortable: G.sortable ?? b,
          resizable: G.resizable ?? f,
          draggable: G.draggable ?? h,
          renderCell: G.renderCell ?? d
        };
        M.push(ge), ie && C++, W > S && (S = W);
      }
    }
    M.sort(({
      key: z,
      frozen: W
    }, {
      key: ee,
      frozen: G
    }) => z === _e ? -1 : ee === _e ? 1 : W ? G ? 0 : -1 : G ? 1 : 0);
    const L = [];
    return M.forEach((z, W) => {
      z.idx = W, Hr(z, W, 0), z.colSpan != null && L.push(z);
    }), {
      columns: M,
      colSpanColumns: L,
      lastFrozenColumnIndex: C,
      headerRowsCount: S
    };
  }, [e, a, s, c, d, f, b, h]), {
    templateColumns: D,
    layoutCssVars: v,
    totalFrozenColumnWidth: k,
    columnMetrics: R
  } = j(() => {
    const C = /* @__PURE__ */ new Map();
    let S = 0, M = 0;
    const O = [];
    for (const z of l) {
      let W = n(z);
      typeof W == "number" ? W = Rr(W, z) : W = z.minWidth, O.push(`${W}px`), C.set(z, {
        width: W,
        left: S
      }), S += W;
    }
    if (u !== -1) {
      const z = C.get(l[u]);
      M = z.left + z.width;
    }
    const L = {};
    for (let z = 0; z <= u; z++) {
      const W = l[z];
      L[`--rdg-frozen-left-${W.idx}`] = `${C.get(W).left}px`;
    }
    return {
      templateColumns: O,
      layoutCssVars: L,
      totalFrozenColumnWidth: M,
      columnMetrics: C
    };
  }, [n, l, u]), [N, Y] = j(() => {
    if (!i)
      return [0, l.length - 1];
    const C = o + k, S = o + r, M = l.length - 1, O = wt(u + 1, M);
    if (C >= S)
      return [O, O];
    let L = O;
    for (; L < M; ) {
      const {
        left: G,
        width: ie
      } = R.get(l[L]);
      if (G + ie > C)
        break;
      L++;
    }
    let z = L;
    for (; z < M; ) {
      const {
        left: G,
        width: ie
      } = R.get(l[z]);
      if (G + ie >= S)
        break;
      z++;
    }
    const W = Lt(O, L - 1), ee = wt(M, z + 1);
    return [W, ee];
  }, [R, l, u, o, k, r, i]);
  return {
    columns: l,
    colSpanColumns: x,
    colOverscanStartIdx: N,
    colOverscanEndIdx: Y,
    templateColumns: D,
    layoutCssVars: v,
    headerRowsCount: w,
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
const tt = typeof window > "u" ? Ge : Bo;
function Hi(e, t, n, r, o, i, a, s, c, d) {
  const b = Re(o), f = e.length === t.length, h = f && o !== b.current, l = [...n], x = [];
  for (const {
    key: v,
    idx: k,
    width: R
  } of t)
    typeof R == "string" && (h || !a.has(v)) && !i.has(v) && (l[k] = R, x.push(v));
  const u = l.join(" ");
  tt(() => {
    b.current = o, w(x);
  });
  function w(v) {
    v.length !== 0 && c((k) => {
      const R = new Map(k);
      let N = !1;
      for (const Y of v) {
        const C = Zn(r, Y);
        N || (N = C !== k.get(Y)), C === void 0 ? R.delete(Y) : R.set(Y, C);
      }
      return N ? R : k;
    });
  }
  function D(v, k) {
    const {
      key: R
    } = v, N = [...n], Y = [];
    for (const {
      key: S,
      idx: M,
      width: O
    } of t)
      if (R === S) {
        const L = typeof k == "number" ? `${k}px` : k;
        N[M] = L;
      } else f && typeof O == "string" && !i.has(S) && (N[M] = O, Y.push(S));
    r.current.style.gridTemplateColumns = N.join(" ");
    const C = typeof k == "number" ? k : Zn(r, R);
    Ft(() => {
      s((S) => {
        const M = new Map(S);
        return M.set(R, C), M;
      }), w(Y);
    }), d == null || d(v.idx, C);
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
  const e = Re(null), [t, n] = te(1), [r, o] = te(1), [i, a] = te(0);
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
    } = e.current.getBoundingClientRect(), x = f - d, u = h - b + c, w = l - x;
    n(u), o(w), a(x);
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
function de(e) {
  const t = Re(e);
  Ge(() => {
    t.current = e;
  });
  const n = J((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Ct(e) {
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
  const b = j(() => {
    if (i === 0) return 0;
    let f = i;
    const h = (l, x) => x !== void 0 && l + x > i ? (f = l, !0) : !1;
    for (const l of t) {
      const x = l.idx;
      if (x >= f || h(x, we(l, s, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const w = n[u];
        if (h(x, we(l, s, {
          type: "ROW",
          row: w
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (h(x, we(l, s, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (o != null) {
        for (const u of o)
          if (h(x, we(l, s, {
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
  } = j(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (w) => w * t,
        getRowHeight: () => t,
        findRowIdx: (w) => Vn(w / t)
      };
    let h = 0, l = " ";
    const x = e.map((w) => {
      const D = t(w), v = {
        top: h,
        height: D
      };
      return l += `${D}px `, h += D, v;
    }), u = (w) => Lt(0, wt(e.length - 1, w));
    return {
      totalRowHeight: h,
      gridTemplateRows: l,
      getRowTop: (w) => x[u(w)].top,
      getRowHeight: (w) => x[u(w)].height,
      findRowIdx(w) {
        let D = 0, v = x.length - 1;
        for (; D <= v; ) {
          const k = D + Vn((v - D) / 2), R = x[k].top;
          if (R === w) return k;
          if (R < w ? D = k + 1 : R > w && (v = k - 1), D > v) return v;
        }
        return 0;
      }
    };
  }, [t, e]);
  let b = 0, f = e.length - 1;
  if (o) {
    const l = d(r), x = d(r + n);
    b = Lt(0, l - 4), f = wt(e.length - 1, x + 4);
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
function Gi({
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
    idx: x,
    rowIdx: u
  } = a;
  function w(N) {
    if (N.preventDefault(), N.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", Y), window.addEventListener("mouseup", C);
    function Y(S) {
      S.buttons !== 1 && C();
    }
    function C() {
      window.removeEventListener("mouseover", Y), window.removeEventListener("mouseup", C), h(!1), D();
    }
  }
  function D() {
    const N = s.current;
    if (N === void 0) return;
    const Y = u < N ? u + 1 : N, C = u < N ? N + 1 : u;
    k(Y, C), l(void 0);
  }
  function v(N) {
    N.stopPropagation(), k(u + 1, t.length);
  }
  function k(N, Y) {
    const C = t[u], S = [...t], M = [];
    for (let O = N; O < Y; O++)
      if (c({
        rowIdx: O,
        idx: x
      })) {
        const L = b({
          columnKey: n.key,
          sourceRow: C,
          targetRow: t[O]
        });
        L !== t[O] && (S[O] = L, M.push(O));
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
      insetInlineStart: Y,
      ...C
    } = nt(n, N), S = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", M = n.idx + N - 1 === o;
    return {
      ...C,
      gridRowStart: e,
      marginInlineEnd: M ? void 0 : S,
      marginBlockEnd: i ? void 0 : S,
      insetInlineStart: Y ? `calc(${Y} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ y("div", {
    style: R(),
    className: Me(Ai, n.frozen && Yi),
    onClick: f,
    onMouseDown: w,
    onDoubleClick: v
  });
}
const _i = "cis5rrm7-0-0-beta-47";
function Bi({
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
  const c = Re(void 0), d = ((D = e.editorOptions) == null ? void 0 : D.commitOnOutsideClick) !== !1, b = de(() => {
    l(!0, !1);
  });
  Ge(() => {
    if (!d) return;
    function R() {
      c.current = requestAnimationFrame(b);
    }
    return addEventListener("mousedown", R, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", R, {
        capture: !0
      }), f();
    };
  }, [d, b]);
  function f() {
    cancelAnimationFrame(c.current);
  }
  function h(R) {
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
  function x(R, N = !1) {
    o(R, N, N);
  }
  const {
    cellClass: u
  } = e, w = xt(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((v = e.editorOptions) != null && v.displayCellContent) && _i);
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: w,
    style: nt(e, t),
    onKeyDown: h,
    onMouseDownCapture: f,
    children: e.renderEditCell != null && /* @__PURE__ */ oe(wn, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: x,
        onClose: l
      }), ((k = e.editorOptions) == null ? void 0 : k.displayCellContent) && e.renderCell({
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
function Ui({
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
    className: Me(Dr, e.headerCellClass),
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
  const [h, l] = te(!1), [x, u] = te(!1), w = b === "rtl", D = Ir(e, n), {
    tabIndex: v,
    childTabIndex: k,
    onFocus: R
  } = Ct(r), N = a == null ? void 0 : a.findIndex((p) => p.columnKey === e.key), Y = N !== void 0 && N > -1 ? a[N] : void 0, C = Y == null ? void 0 : Y.direction, S = Y !== void 0 && a.length > 1 ? N + 1 : void 0, M = C && !S ? C === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: O,
    resizable: L,
    draggable: z
  } = e, W = xt(e, e.headerCellClass, O && Vi, L && Qi, z && ea, h && na, x && oa), ee = e.renderHeaderCell ?? Lr;
  function G(p) {
    if (p.pointerType === "mouse" && p.buttons !== 1)
      return;
    p.preventDefault();
    const {
      currentTarget: H,
      pointerId: B
    } = p, U = H.parentElement, {
      right: $,
      left: q
    } = U.getBoundingClientRect(), ae = w ? p.clientX - q : $ - p.clientX;
    let ne = !1;
    function ke(ye) {
      const {
        width: ue,
        right: rt,
        left: ze
      } = U.getBoundingClientRect();
      let Be = w ? rt + ae - ye.clientX : ye.clientX + ae - ze;
      Be = Rr(Be, e), ue > 0 && Be !== ue && o(e, Be);
    }
    function De() {
      ne = !0, o(e, "max-content");
    }
    function Ee(ye) {
      ne || ke(ye), H.removeEventListener("pointermove", ke), H.removeEventListener("dblclick", De), H.removeEventListener("lostpointercapture", Ee);
    }
    H.setPointerCapture(B), H.addEventListener("pointermove", ke), H.addEventListener("dblclick", De), H.addEventListener("lostpointercapture", Ee);
  }
  function ie(p) {
    if (s == null) return;
    const {
      sortDescendingFirst: H
    } = e;
    if (Y === void 0) {
      const B = {
        columnKey: e.key,
        direction: H ? "DESC" : "ASC"
      };
      s(a && p ? [...a, B] : [B]);
    } else {
      let B;
      if ((H === !0 && C === "DESC" || H !== !0 && C === "ASC") && (B = {
        columnKey: e.key,
        direction: C === "ASC" ? "DESC" : "ASC"
      }), p) {
        const U = [...a];
        B ? U[N] = B : U.splice(N, 1), s(U);
      } else
        s(B ? [B] : []);
    }
  }
  function ge(p) {
    c({
      idx: e.idx,
      rowIdx: n
    }), O && ie(p.ctrlKey || p.metaKey);
  }
  function xe(p) {
    R == null || R(p), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function Ce(p) {
    (p.key === " " || p.key === "Enter") && (p.preventDefault(), ie(p.ctrlKey || p.metaKey));
  }
  function We(p) {
    p.dataTransfer.setData(f, e.key), p.dataTransfer.dropEffect = "move", l(!0);
  }
  function Oe() {
    l(!1);
  }
  function ce(p) {
    p.preventDefault(), p.dataTransfer.dropEffect = "move";
  }
  function ve(p) {
    if (u(!1), p.dataTransfer.types.includes(f.toLowerCase())) {
      const H = p.dataTransfer.getData(f.toLowerCase());
      H !== e.key && (p.preventDefault(), i == null || i(H, e.key));
    }
  }
  function I(p) {
    Qn(p) && u(!0);
  }
  function E(p) {
    Qn(p) && u(!1);
  }
  let A;
  return z && (A = {
    draggable: !0,
    onDragStart: We,
    onDragEnd: Oe,
    onDragOver: ce,
    onDragEnter: I,
    onDragLeave: E,
    onDrop: ve
  }), /* @__PURE__ */ oe("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": D,
    "aria-selected": r,
    "aria-sort": M,
    tabIndex: d ? 0 : v,
    className: W,
    style: {
      ...Sr(e, n, D),
      ...nt(e, t)
    },
    onFocus: xe,
    onClick: ge,
    onKeyDown: O ? Ce : void 0,
    ...A,
    children: [ee({
      column: e,
      sortDirection: C,
      priority: S,
      tabIndex: k
    }), L && /* @__PURE__ */ y("div", {
      className: Ji,
      onClick: Jo,
      onPointerDown: G
    })]
  });
}
function Qn(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const aa = "r1upfr807-0-0-beta-47", xn = `rdg-row ${aa}`, sa = "r190mhd37-0-0-beta-47", Gt = "rdg-row-selected", ca = "r139qu9m7-0-0-beta-47", la = "rdg-top-summary-row", da = "rdg-bottom-summary-row", ua = "h10tskcx7-0-0-beta-47", Wr = `rdg-header-row ${ua}`;
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
  const f = Uo(), h = [];
  for (let l = 0; l < t.length; l++) {
    const x = t[l], u = we(x, a, {
      type: "HEADER"
    });
    u !== void 0 && (l += u - 1), h.push(/* @__PURE__ */ y(ia, {
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
      direction: b,
      dragDropKey: f
    }, x.key));
  }
  return /* @__PURE__ */ y("div", {
    role: "row",
    "aria-rowindex": e,
    className: Me(Wr, s === -1 && Gt),
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
        i.push(/* @__PURE__ */ y(Ui, {
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
  onRowChange: b,
  selectCell: f,
  ...h
}) {
  const {
    tabIndex: l,
    childTabIndex: x,
    onFocus: u
  } = Ct(n), {
    cellClass: w
  } = e, D = xt(e, typeof w == "function" ? w(i) : w, r && ya, o && ba), v = kr(e, i);
  function k(S) {
    f({
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
  function Y(S) {
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
  function C(S) {
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
    onClick: R,
    onDoubleClick: Y,
    onContextMenu: N,
    onFocus: u,
    ...h,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: v,
      tabIndex: x,
      onRowChange: C
    })
  });
}
const Ca = /* @__PURE__ */ Le(xa);
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
  onCellContextMenu: x,
  rowClass: u,
  setDraggedOverRowIdx: w,
  onMouseEnter: D,
  onRowChange: v,
  selectCell: k,
  ...R
}, N) {
  const Y = de((O, L) => {
    v(O, t, L);
  });
  function C(O) {
    w == null || w(t), D == null || D(O);
  }
  e = Me(xn, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && Gt);
  const S = [];
  for (let O = 0; O < b.length; O++) {
    const L = b[O], {
      idx: z
    } = L, W = we(L, c, {
      type: "ROW",
      row: d
    });
    W !== void 0 && (O += W - 1);
    const ee = r === z;
    ee && f ? S.push(f) : S.push(/* @__PURE__ */ y(Ca, {
      column: L,
      colSpan: W,
      row: d,
      rowIdx: t,
      isCopied: a === z,
      isDraggedOver: s === z,
      isCellSelected: ee,
      onClick: h,
      onDoubleClick: l,
      onContextMenu: x,
      onRowChange: Y,
      selectCell: k
    }, L.key));
  }
  const M = j(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ y(Mr, {
    value: M,
    children: /* @__PURE__ */ y("div", {
      role: "row",
      ref: N,
      className: e,
      onMouseEnter: C,
      style: pn(n),
      ...R,
      children: S
    })
  });
}
const zr = /* @__PURE__ */ Le(/* @__PURE__ */ yn(va)), Wl = zr;
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
  const o = Re(null);
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
  } = Ct(o), {
    summaryCellClass: d
  } = e, b = xt(e, Ha, typeof d == "function" ? d(n) : d);
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
    const l = r[h], x = we(l, a, {
      type: "SUMMARY",
      row: n
    });
    x !== void 0 && (h += x - 1);
    const u = s === l.idx;
    f.push(/* @__PURE__ */ y(Wa, {
      column: l,
      colSpan: x,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, l.key));
  }
  return /* @__PURE__ */ y("div", {
    role: "row",
    "aria-rowindex": b,
    className: Me(xn, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Ya, c ? `${la} ${$a}` : da, s === -1 && Gt),
    style: {
      ...pn(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: f
  });
}
const Jn = /* @__PURE__ */ Le(Aa);
function Ga(e, t) {
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
    sortColumns: x,
    onSortColumnsChange: u,
    defaultColumnOptions: w,
    onCellClick: D,
    onCellDoubleClick: v,
    onCellContextMenu: k,
    onCellKeyDown: R,
    onSelectedCellChange: N,
    onScroll: Y,
    onColumnResize: C,
    onColumnsReorder: S,
    onFill: M,
    onCopy: O,
    onPaste: L,
    enableVirtualization: z,
    renderers: W,
    className: ee,
    style: G,
    rowClass: ie,
    direction: ge,
    role: xe,
    "aria-label": Ce,
    "aria-labelledby": We,
    "aria-describedby": Oe,
    "aria-rowcount": ce,
    "data-testid": ve
  } = e, I = At(), E = xe ?? "grid", A = c ?? 35, p = d ?? (typeof A == "number" ? A : 35), H = b ?? (typeof A == "number" ? A : 35), B = (W == null ? void 0 : W.renderRow) ?? (I == null ? void 0 : I.renderRow) ?? $r, U = (W == null ? void 0 : W.renderSortStatus) ?? (I == null ? void 0 : I.renderSortStatus) ?? Ra, $ = (W == null ? void 0 : W.renderCheckbox) ?? (I == null ? void 0 : I.renderCheckbox) ?? wi, q = (W == null ? void 0 : W.noRowsFallback) ?? (I == null ? void 0 : I.noRowsFallback), ae = z ?? !0, ne = ge ?? "ltr", [ke, De] = te(0), [Ee, ye] = te(0), [ue, rt] = te(() => /* @__PURE__ */ new Map()), [ze, Be] = te(() => /* @__PURE__ */ new Map()), [Ue, Sn] = te(null), [Rn, ro] = te(!1), [ot, oo] = te(void 0), [Pe, In] = te(null), Tn = J((g) => ue.get(g.key) ?? ze.get(g.key) ?? g.width, [ze, ue]), [je, En, Mn, io] = Li(), {
    columns: re,
    colSpanColumns: On,
    lastFrozenColumnIndex: me,
    headerRowsCount: $e,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Pn,
    templateColumns: so,
    layoutCssVars: co,
    totalFrozenColumnWidth: lo
  } = Fi({
    rawColumns: n,
    defaultColumnOptions: w,
    getColumnWidth: Tn,
    scrollLeft: Ee,
    viewportWidth: En,
    enableVirtualization: ae
  }), it = (o == null ? void 0 : o.length) ?? 0, Ke = (i == null ? void 0 : i.length) ?? 0, Nn = it + Ke, qe = $e + it, Bt = $e - 1, fe = -qe, kt = fe + Bt, Ye = r.length + Ke - 1, [T, Xe] = te(() => ({
    idx: -1,
    rowIdx: fe - 1,
    mode: "SELECT"
  })), Ut = Re(T), Fn = Re(ot), Hn = Re(-1), Dt = Re(null), St = Re(!1), jt = E === "treegrid", Kt = $e * p, Ln = Nn * H, Rt = Mn - Kt - Ln, qt = f != null && l != null, Wn = ne === "rtl", uo = Wn ? "ArrowRight" : "ArrowLeft", zn = Wn ? "ArrowLeft" : "ArrowRight", $n = ce ?? $e + r.length + Nn, fo = j(() => ({
    renderCheckbox: $,
    renderSortStatus: U
  }), [$, U]), ho = j(() => {
    let g = !1, m = !1;
    if (a != null && f != null && f.size > 0) {
      for (const P of r)
        if (f.has(a(P)) ? g = !0 : m = !0, g && m) break;
    }
    return {
      isRowSelected: g && !m,
      isIndeterminate: g && m
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
    rowHeight: A,
    clientHeight: Rt,
    scrollTop: ke,
    enableVirtualization: ae
  }), Ne = Wi({
    columns: re,
    colSpanColumns: On,
    colOverscanStartIdx: ao,
    colOverscanEndIdx: Pn,
    lastFrozenColumnIndex: me,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: st,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: wo,
    handleColumnResize: yo
  } = Hi(re, Ne, so, je, En, ue, ze, rt, Be, C), po = jt ? -1 : 0, Ve = re.length - 1, Vt = Jt(T), It = jn(T), bo = p + Xt + Ln + io, xo = de(yo), Co = de(S), vo = de(u), ko = de(D), Do = de(v), So = de(k), Ro = de(Eo), Io = de(_n), To = de(Tt), Zt = de(ct), Gn = de(({
    idx: g,
    rowIdx: m
  }) => {
    ct({
      rowIdx: fe + m - 1,
      idx: g
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
  }), _o(t, () => ({
    element: je.current,
    scrollToCell({
      idx: g,
      rowIdx: m
    }) {
      const P = g !== void 0 && g > me && g < re.length ? g : void 0, F = m !== void 0 && Ze(m) ? m : void 0;
      (P !== void 0 || F !== void 0) && In({
        idx: P,
        rowIdx: F
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
    const m = new Set(f);
    for (const P of r) {
      if ((h == null ? void 0 : h(P)) === !0) continue;
      const F = a(P);
      g.checked ? m.add(F) : m.delete(F);
    }
    l(m);
  }
  function _n(g) {
    if (!l) return;
    gt(a);
    const {
      row: m,
      checked: P,
      isShiftClick: F
    } = g;
    if ((h == null ? void 0 : h(m)) === !0) return;
    const _ = new Set(f), X = a(m), V = Hn.current, Z = r.indexOf(m);
    if (Hn.current = Z, P ? _.add(X) : _.delete(X), F && V !== -1 && V !== Z && V < r.length) {
      const he = fi(Z - V);
      for (let le = V + he; le !== Z; le += he) {
        const Se = r[le];
        (h == null ? void 0 : h(Se)) !== !0 && (P ? _.add(a(Se)) : _.delete(a(Se)));
      }
    }
    l(_);
  }
  function Mo(g) {
    var Z;
    const {
      idx: m,
      rowIdx: P,
      mode: F
    } = T;
    if (F === "EDIT") return;
    if (R && Ze(P)) {
      const he = r[P], le = ht(g);
      if (R({
        mode: "SELECT",
        row: he,
        column: re[m],
        rowIdx: P,
        selectCell: ct
      }, le), le.isGridDefaultPrevented()) return;
    }
    if (!(g.target instanceof Element)) return;
    const _ = g.target.closest(".rdg-cell") !== null, X = jt && g.target === Dt.current;
    if (!_ && !X) return;
    const {
      keyCode: V
    } = g;
    if (It && (L != null || O != null) && Ht(g)) {
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
      scrollTop: m,
      scrollLeft: P
    } = g.currentTarget;
    Ft(() => {
      De(m), ye(hi(P));
    }), Y == null || Y(g);
  }
  function Tt(g, m, P) {
    if (typeof s != "function" || P === r[m]) return;
    const F = [...r];
    F[m] = P, s(F, {
      indexes: [m],
      column: g
    });
  }
  function Bn() {
    T.mode === "EDIT" && Tt(re[T.idx], T.rowIdx, T.row);
  }
  function Po() {
    const {
      idx: g,
      rowIdx: m
    } = T, P = r[m], F = re[g].key;
    Sn({
      row: P,
      columnKey: F
    }), O == null || O({
      sourceRow: P,
      sourceColumnKey: F
    });
  }
  function No() {
    if (!L || !s || Ue === null || !Et(T))
      return;
    const {
      idx: g,
      rowIdx: m
    } = T, P = re[g], F = r[m], _ = L({
      sourceRow: Ue.row,
      sourceColumnKey: Ue.columnKey,
      targetRow: F,
      targetColumnKey: P.key
    });
    Tt(P, m, _);
  }
  function Fo(g) {
    if (!It) return;
    const m = r[T.rowIdx], {
      key: P,
      shiftKey: F
    } = g;
    if (qt && F && P === " ") {
      gt(a);
      const _ = a(m);
      _n({
        row: m,
        checked: !f.has(_),
        isShiftClick: !1
      }), g.preventDefault();
      return;
    }
    Et(T) && ti(g) && Xe(({
      idx: _,
      rowIdx: X
    }) => ({
      idx: _,
      rowIdx: X,
      mode: "EDIT",
      row: m,
      originalRow: m
    }));
  }
  function Un(g) {
    return g >= po && g <= Ve;
  }
  function Ze(g) {
    return g >= 0 && g < r.length;
  }
  function Jt({
    idx: g,
    rowIdx: m
  }) {
    return m >= fe && m <= Ye && Un(g);
  }
  function Ho({
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
    return Ho(g) && ii({
      columns: re,
      rows: r,
      selectedPosition: g
    });
  }
  function ct(g, m) {
    if (!Jt(g)) return;
    Bn();
    const P = r[g.rowIdx], F = nn(T, g);
    m && Et(g) ? Xe({
      ...g,
      mode: "EDIT",
      row: P,
      originalRow: P
    }) : F ? Nt(er(je.current)) : (St.current = !0, Xe({
      ...g,
      mode: "SELECT"
    })), N && !F && N({
      rowIdx: g.rowIdx,
      row: P,
      column: re[g.idx]
    });
  }
  function Lo(g, m, P) {
    const {
      idx: F,
      rowIdx: _
    } = T, X = Vt && F === -1;
    switch (g) {
      case "ArrowUp":
        return {
          idx: F,
          rowIdx: _ - 1
        };
      case "ArrowDown":
        return {
          idx: F,
          rowIdx: _ + 1
        };
      case uo:
        return {
          idx: F - 1,
          rowIdx: _
        };
      case zn:
        return {
          idx: F + 1,
          rowIdx: _
        };
      case "Tab":
        return {
          idx: F + (P ? -1 : 1),
          rowIdx: _
        };
      case "Home":
        return X ? {
          idx: F,
          rowIdx: fe
        } : {
          idx: 0,
          rowIdx: m ? fe : _
        };
      case "End":
        return X ? {
          idx: F,
          rowIdx: Ye
        } : {
          idx: Ve,
          rowIdx: m ? Ye : _
        };
      case "PageUp": {
        if (T.rowIdx === fe) return T;
        const V = Yn(_) + mo(_) - Rt;
        return {
          idx: F,
          rowIdx: V > 0 ? An(V) : 0
        };
      }
      case "PageDown": {
        if (T.rowIdx >= r.length) return T;
        const V = Yn(_) + Rt;
        return {
          idx: F,
          rowIdx: V < Xt ? An(V) : r.length - 1
        };
      }
      default:
        return T;
    }
  }
  function Kn(g) {
    const {
      key: m,
      shiftKey: P
    } = g;
    let F = "NONE";
    if (m === "Tab") {
      if (ci({
        shiftKey: P,
        maxColIdx: Ve,
        minRowIdx: fe,
        maxRowIdx: Ye,
        selectedPosition: T
      })) {
        Bn();
        return;
      }
      F = "CHANGE_ROW";
    }
    g.preventDefault();
    const _ = Ht(g), X = Lo(m, _, P);
    if (nn(T, X)) return;
    const V = si({
      moveUp: m === "ArrowUp",
      moveNext: m === zn || m === "Tab" && !P,
      columns: re,
      colSpanColumns: On,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: fe,
      mainHeaderRowIdx: kt,
      maxRowIdx: Ye,
      lastFrozenColumnIndex: me,
      cellNavigationMode: F,
      currentPosition: T,
      nextPosition: X,
      isCellWithinBounds: Jt
    });
    ct(V);
  }
  function Wo(g) {
    if (ot === void 0) return;
    const {
      rowIdx: m
    } = T;
    return (m < ot ? m < g && g <= ot : m > g && g >= ot) ? T.idx : void 0;
  }
  function qn() {
    const g = er(je.current);
    if (g === null) return;
    Nt(g), (g.querySelector('[tabindex="0"]') ?? g).focus({
      preventScroll: !0
    });
  }
  function zo() {
    if (M == null || T.mode === "EDIT" || !jn(T))
      return;
    const {
      idx: g,
      rowIdx: m
    } = T, P = re[g];
    if (P.renderEditCell == null || P.editable === !1)
      return;
    const F = Tn(P);
    return /* @__PURE__ */ y(Gi, {
      gridRowStart: qe + m + 1,
      rows: r,
      column: P,
      columnWidth: F,
      maxColIdx: Ve,
      isLastRow: m === Ye,
      selectedPosition: T,
      isCellEditable: Et,
      latestDraggedOverRowIdx: Fn,
      onRowsChange: s,
      onClick: qn,
      onFill: M,
      setDragging: ro,
      setDraggedOverRowIdx: Qt
    });
  }
  function $o(g) {
    if (T.rowIdx !== g || T.mode === "SELECT") return;
    const {
      idx: m,
      row: P
    } = T, F = re[m], _ = we(F, me, {
      type: "ROW",
      row: P
    }), X = (Z) => {
      St.current = Z, Xe(({
        idx: he,
        rowIdx: le
      }) => ({
        idx: he,
        rowIdx: le,
        mode: "SELECT"
      }));
    }, V = (Z, he, le) => {
      he ? Ft(() => {
        Tt(F, T.rowIdx, Z), X(le);
      }) : Xe((Se) => ({
        ...Se,
        row: Z
      }));
    };
    return r[T.rowIdx] !== T.originalRow && X(!1), /* @__PURE__ */ y(Bi, {
      column: F,
      colSpan: _,
      row: P,
      rowIdx: g,
      onRowChange: V,
      closeEditor: X,
      onKeyDown: R,
      navigate: Kn
    }, F.key);
  }
  function lt(g) {
    const m = T.idx === -1 ? void 0 : re[T.idx];
    return m !== void 0 && T.rowIdx === g && !Ne.includes(m) ? T.idx > Pn ? [...Ne, m] : [...Ne.slice(0, me + 1), m, ...Ne.slice(me + 1)] : Ne;
  }
  function Yo() {
    const g = [], {
      idx: m,
      rowIdx: P
    } = T, F = It && P < at ? at - 1 : at, _ = It && P > st ? st + 1 : st;
    for (let X = F; X <= _; X++) {
      const V = X === at - 1 || X === st + 1, Z = V ? P : X;
      let he = Ne;
      const le = m === -1 ? void 0 : re[m];
      le !== void 0 && (V ? he = [le] : he = lt(Z));
      const Se = r[Z], Ao = qe + Z + 1;
      let en = Z, tn = !1;
      typeof a == "function" && (en = a(Se), tn = (f == null ? void 0 : f.has(en)) ?? !1), g.push(B(en, {
        "aria-rowindex": qe + Z + 1,
        "aria-selected": qt ? tn : void 0,
        rowIdx: Z,
        row: Se,
        viewportColumns: he,
        isRowSelectionDisabled: (h == null ? void 0 : h(Se)) ?? !1,
        isRowSelected: tn,
        onCellClick: ko,
        onCellDoubleClick: Do,
        onCellContextMenu: So,
        rowClass: ie,
        gridRowStart: Ao,
        copiedCellIdx: Ue !== null && Ue.row === Se ? re.findIndex((Go) => Go.key === Ue.columnKey) : void 0,
        selectedCellIdx: P === Z ? m : void 0,
        draggedOverCellIdx: Wo(Z),
        setDraggedOverRowIdx: Rn ? Qt : void 0,
        lastFrozenColumnIndex: me,
        onRowChange: To,
        selectCell: Zt,
        selectedCellEditor: $o(Z)
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
  it > 0 && (Mt += ` repeat(${it}, ${H}px)`), r.length > 0 && (Mt += go), Ke > 0 && (Mt += ` repeat(${Ke}, ${H}px)`);
  const Xn = T.idx === -1 && T.rowIdx !== fe - 1;
  return /* @__PURE__ */ oe("div", {
    role: E,
    "aria-label": Ce,
    "aria-labelledby": We,
    "aria-describedby": Oe,
    "aria-multiselectable": qt ? !0 : void 0,
    "aria-colcount": re.length,
    "aria-rowcount": $n,
    className: Me(Ma, ee, Rn && Pa),
    style: {
      ...G,
      scrollPaddingInlineStart: T.idx > me || (Pe == null ? void 0 : Pe.idx) !== void 0 ? `${lo}px` : void 0,
      scrollPaddingBlock: Ze(T.rowIdx) || (Pe == null ? void 0 : Pe.rowIdx) !== void 0 ? `${Kt + it * H}px ${Ke * H}px` : void 0,
      gridTemplateColumns: wo,
      gridTemplateRows: Mt,
      "--rdg-header-row-height": `${p}px`,
      "--rdg-scroll-height": `${bo}px`,
      ...co
    },
    dir: ne,
    ref: je,
    onScroll: Oo,
    onKeyDown: Mo,
    "data-testid": ve,
    children: [/* @__PURE__ */ oe(Di, {
      value: fo,
      children: [/* @__PURE__ */ y(Ii, {
        value: Ro,
        children: /* @__PURE__ */ oe(Ri, {
          value: ho,
          children: [Array.from({
            length: Bt
          }, (g, m) => /* @__PURE__ */ y(ma, {
            rowIdx: m + 1,
            level: -Bt + m,
            columns: lt(fe + m),
            selectedCellIdx: T.rowIdx === fe + m ? T.idx : void 0,
            selectCell: Gn
          }, m)), /* @__PURE__ */ y(ha, {
            rowIdx: $e,
            columns: lt(kt),
            onColumnResize: xo,
            onColumnsReorder: Co,
            sortColumns: x,
            onSortColumnsChange: vo,
            lastFrozenColumnIndex: me,
            selectedCellIdx: T.rowIdx === kt ? T.idx : void 0,
            selectCell: Gn,
            shouldFocusGrid: !Vt,
            direction: ne
          })]
        })
      }), r.length === 0 && q ? q : /* @__PURE__ */ oe(wn, {
        children: [o == null ? void 0 : o.map((g, m) => {
          const P = $e + 1 + m, F = kt + 1 + m, _ = T.rowIdx === F, X = Kt + H * m;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": P,
            rowIdx: F,
            gridRowStart: P,
            row: g,
            top: X,
            bottom: void 0,
            viewportColumns: lt(F),
            lastFrozenColumnIndex: me,
            selectedCellIdx: _ ? T.idx : void 0,
            isTop: !0,
            selectCell: Zt
          }, m);
        }), /* @__PURE__ */ y(Si, {
          value: Io,
          children: Yo()
        }), i == null ? void 0 : i.map((g, m) => {
          const P = qe + r.length + m + 1, F = r.length + m, _ = T.rowIdx === F, X = Rt > Xt ? Mn - H * (i.length - m) : void 0, V = X === void 0 ? H * (i.length - 1 - m) : void 0;
          return /* @__PURE__ */ y(Jn, {
            "aria-rowindex": $n - Ke + m + 1,
            rowIdx: F,
            gridRowStart: P,
            row: g,
            top: X,
            bottom: V,
            viewportColumns: lt(F),
            lastFrozenColumnIndex: me,
            selectedCellIdx: _ ? T.idx : void 0,
            isTop: !1,
            selectCell: Zt
          }, m);
        })]
      })]
    }), zo(), oi(Ne), jt && /* @__PURE__ */ y("div", {
      ref: Dt,
      tabIndex: Xn ? 0 : -1,
      className: Me(Na, Xn && [sa, me !== -1 && ca], !Ze(T.rowIdx) && Fa),
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
const Yr = /* @__PURE__ */ yn(Ga);
function _a({
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
  } = Ct(o);
  function l() {
    d(e);
  }
  const x = c && s === i.idx;
  return /* @__PURE__ */ y("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: b,
    className: xt(i),
    style: {
      ...nt(i),
      cursor: x ? "pointer" : "default"
    },
    onClick: x ? l : void 0,
    onFocus: h,
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
const Ba = /* @__PURE__ */ Le(_a), Ua = "g1yxluv37-0-0-beta-47", ja = `rdg-group-row ${Ua}`;
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
  const h = r[0].key === _e ? t.level + 1 : t.level;
  function l() {
    a({
      rowIdx: n,
      idx: -1
    });
  }
  const x = j(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: i
  }), [i]);
  return /* @__PURE__ */ y(Mr, {
    value: x,
    children: /* @__PURE__ */ y("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Me(xn, ja, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Gt),
      onClick: l,
      style: pn(s),
      ...f,
      children: r.map((u) => /* @__PURE__ */ y(Ba, {
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
}, x) {
  var Oe, ce, ve;
  const u = At(), w = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? $r, D = 1 + (((Oe = l.topSummaryRows) == null ? void 0 : Oe.length) ?? 0), v = l.direction === "rtl", k = v ? "ArrowRight" : "ArrowLeft", R = v ? "ArrowLeft" : "ArrowRight", N = de(Ce), {
    columns: Y,
    groupBy: C
  } = j(() => {
    const I = [...e].sort(({
      key: A
    }, {
      key: p
    }) => A === _e ? -1 : p === _e ? 1 : d.includes(A) ? d.includes(p) ? d.indexOf(A) - d.indexOf(p) : -1 : d.includes(p) ? 1 : 0), E = [];
    for (const [A, p] of I.entries())
      d.includes(p.key) && (E.push(p.key), I[A] = {
        ...p,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: p.renderGroupCell ?? Ci,
        editable: !1
      });
    return {
      columns: I,
      groupBy: E
    };
  }, [e, d]), [S, M] = j(() => {
    if (C.length === 0) return [void 0, t.length];
    const I = (E, [A, ...p], H) => {
      let B = 0;
      const U = {};
      for (const [$, q] of Object.entries(b(E, A))) {
        const [ae, ne] = p.length === 0 ? [q, q.length] : I(q, p, H + B + 1);
        U[$] = {
          childRows: q,
          childGroups: ae,
          startRowIndex: H + B
        }, B += ne + 1;
      }
      return [U, B];
    };
    return I(t, C, 0);
  }, [C, b, t]), [O, L] = j(() => {
    const I = /* @__PURE__ */ new Set();
    if (!S) return [t, p];
    const E = [], A = (H, B, U) => {
      if (Va(H)) {
        E.push(...H);
        return;
      }
      Object.keys(H).forEach(($, q, ae) => {
        const ne = B !== void 0 ? `${B}__${$}` : $, ke = f.has(ne), {
          childRows: De,
          childGroups: Ee,
          startRowIndex: ye
        } = H[$], ue = {
          id: ne,
          parentId: B,
          groupKey: $,
          isExpanded: ke,
          childRows: De,
          level: U,
          posInSet: q,
          startRowIndex: ye,
          setSize: ae.length
        };
        E.push(ue), I.add(ue), ke && A(Ee, ne, U + 1);
      });
    };
    return A(S, void 0, 0), [E, p];
    function p(H) {
      return I.has(H);
    }
  }, [f, S, t]), z = j(() => typeof n == "function" ? (I) => L(I) ? n({
    type: "GROUP",
    row: I
  }) : n({
    type: "ROW",
    row: I
  }) : n, [L, n]), W = J((I) => {
    const E = O.indexOf(I);
    for (let A = E - 1; A >= 0; A--) {
      const p = O[A];
      if (L(p) && (!L(I) || I.parentId === p.id))
        return [p, A];
    }
  }, [L, O]), ee = J((I) => {
    if (L(I))
      return I.id;
    if (typeof r == "function")
      return r(I);
    const E = W(I);
    if (E !== void 0) {
      const {
        startRowIndex: A,
        childRows: p
      } = E[0], H = p.indexOf(I);
      return A + H + 1;
    }
    return O.indexOf(I);
  }, [W, L, r, O]), G = j(() => {
    if (a == null) return null;
    gt(r);
    const I = new Set(a);
    for (const E of O)
      L(E) && E.childRows.every((p) => a.has(r(p))) && I.add(E.id);
    return I;
  }, [L, r, a, O]);
  function ie(I) {
    if (!s) return;
    gt(r);
    const E = new Set(a);
    for (const A of O) {
      const p = ee(A);
      if (G != null && G.has(p) && !I.has(p))
        if (L(A))
          for (const H of A.childRows)
            E.delete(r(H));
        else
          E.delete(p);
      else if (!(G != null && G.has(p)) && I.has(p))
        if (L(A))
          for (const H of A.childRows)
            E.add(r(H));
        else
          E.add(p);
    }
    s(E);
  }
  function ge(I, E) {
    if (o == null || o(I, E), E.isGridDefaultPrevented() || I.mode === "EDIT") return;
    const {
      column: A,
      rowIdx: p,
      selectCell: H
    } = I, B = (A == null ? void 0 : A.idx) ?? -1, U = O[p];
    if (L(U)) {
      if (B === -1 && (E.key === k && U.isExpanded || E.key === R && !U.isExpanded) && (E.preventDefault(), E.preventGridDefault(), Ce(U.id)), B === -1 && E.key === k && !U.isExpanded && U.level !== 0) {
        const $ = W(U);
        $ !== void 0 && (E.preventGridDefault(), H({
          idx: B,
          rowIdx: $[1]
        }));
      }
      Ht(E) && (E.keyCode === 67 || E.keyCode === 86) && E.preventGridDefault();
    }
  }
  function xe(I, {
    indexes: E,
    column: A
  }) {
    if (!i) return;
    const p = [...t], H = [];
    for (const B of E) {
      const U = t.indexOf(O[B]);
      p[U] = I[B], H.push(U);
    }
    i(p, {
      indexes: H,
      column: A
    });
  }
  function Ce(I) {
    const E = new Set(f);
    E.has(I) ? E.delete(I) : E.add(I), h(E);
  }
  function We(I, {
    row: E,
    rowClass: A,
    onCellClick: p,
    onCellDoubleClick: H,
    onCellContextMenu: B,
    onRowChange: U,
    lastFrozenColumnIndex: $,
    copiedCellIdx: q,
    draggedOverCellIdx: ae,
    setDraggedOverRowIdx: ne,
    selectedCellEditor: ke,
    ...De
  }) {
    if (L(E)) {
      const {
        startRowIndex: ue
      } = E;
      return /* @__PURE__ */ y(qa, {
        ...De,
        "aria-rowindex": D + ue + 1,
        row: E,
        groupBy: C,
        toggleGroup: N
      }, I);
    }
    let Ee = De["aria-rowindex"];
    const ye = W(E);
    if (ye !== void 0) {
      const {
        startRowIndex: ue,
        childRows: rt
      } = ye[0], ze = rt.indexOf(E);
      Ee = ue + D + ze + 2;
    }
    return w(I, {
      ...De,
      "aria-rowindex": Ee,
      row: E,
      rowClass: A,
      onCellClick: p,
      onCellDoubleClick: H,
      onCellContextMenu: B,
      onRowChange: U,
      lastFrozenColumnIndex: $,
      copiedCellIdx: q,
      draggedOverCellIdx: ae,
      setDraggedOverRowIdx: ne,
      selectedCellEditor: ke
    });
  }
  return /* @__PURE__ */ y(Yr, {
    ...l,
    role: "treegrid",
    "aria-rowcount": M + 1 + (((ce = l.topSummaryRows) == null ? void 0 : ce.length) ?? 0) + (((ve = l.bottomSummaryRows) == null ? void 0 : ve.length) ?? 0),
    ref: x,
    columns: Y,
    rows: O,
    rowHeight: z,
    rowKeyGetter: ee,
    onRowsChange: xe,
    selectedRows: G,
    onSelectedRowsChange: ie,
    onCellKeyDown: ge,
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
function $l({
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
}, ts = Te.div`
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
  const [r, o] = te(n ?? []), i = j(() => r.length === 0 ? t : [...t].sort((s, c) => {
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
}, mt = 40, os = 200, is = "rdg-row-expanded", as = "rdg-detail-row", Ar = "__rdgDetailParent", ss = (e) => ({ id: `rdg-detail:${e.id}`, [Ar]: e }), Cn = (e) => e[Ar], Wt = (e) => Cn(e) !== void 0, cs = (e, t) => {
  if (!t.length)
    return e;
  const n = new Set(t);
  return e.flatMap((r) => n.has(r.id) ? [r, ss(r)] : [r]);
}, ls = Te.button`
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
`, ds = () => /* @__PURE__ */ y("svg", { width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ y("path", { d: "M9 6l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }) }), Gr = ({
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
        i.stopPropagation(), _r(t, e.id);
      },
      children: /* @__PURE__ */ y(ds, {})
    }
  );
}, _r = (e, t) => {
  const { expandedIds: n, onExpandedChange: r } = e;
  r(
    n.includes(t) ? n.filter((o) => o !== t) : [...n, t]
  );
}, us = 'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]', Br = (e, t, n, r = []) => Wt(e) || t === gs || t === Ur || r.includes(t) ? !1 : !(n instanceof Element && n.closest(us)), fs = (e, t, n) => Br(e, t, n), tr = Te.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`, hs = Te.span`
    display: inline-block;
    flex: 0 0 ${mt - 16}px;
`, gs = _e, Ur = "rdg-expander-column", ms = (e) => ({
  key: Ur,
  name: "",
  frozen: !0,
  width: mt,
  minWidth: mt,
  maxWidth: mt,
  resizable: !1,
  sortable: !1,
  renderHeaderCell: () => null,
  renderCell: ({ row: t }) => /* @__PURE__ */ y(Gr, { row: t, expandable: e })
}), ws = (e, t) => {
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
      const c = Cn(s.row);
      return c ? t(c) : ((d = a.renderCell) == null ? void 0 : d.call(a, s)) ?? null;
    }
  });
}, ys = (e, t, n) => (r) => {
  const o = Cn(r);
  return o ? typeof n == "function" ? n(o) : n : typeof e == "function" ? e(r) : e ?? t;
}, ps = (e, t = []) => Wt(e) ? as : t.includes(e.id) ? is : "", jr = Te(Ko)`
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
}), bs = ({
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
}, rn = (e) => e.stopPropagation(), xs = ({ options: e, renderInput: t, ...n }) => {
  const r = j(
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
}, Cs = Te(jo)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Pt = (e) => e.stopPropagation(), on = ({ children: e, ...t }) => /* @__PURE__ */ oe(Cs, { children: [
  Lr(t),
  e
] }), vs = (e) => (t) => {
  const { filters: n, setFilters: r } = Ie(vn), o = j(() => n[e.key], [n, e]), i = J(
    (a) => {
      r({ ...n, [e.key]: a });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yt.AUTOCOMPLETE && (o === void 0 || typeof o == "string") ? /* @__PURE__ */ y(on, { ...t, children: /* @__PURE__ */ y(
    xs,
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
}, ks = {
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
  const o = ks[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function an(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ss = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Rs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Is = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ts = {
  date: an({
    formats: Ss,
    defaultWidth: "full"
  }),
  time: an({
    formats: Rs,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Is,
    defaultWidth: "full"
  })
}, Es = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ms = (e, t, n, r) => Es[e];
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
const Os = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ps = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ns = {
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
}, Fs = {
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
}, Hs = {
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
}, Ws = (e, t) => {
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
}, zs = {
  ordinalNumber: Ws,
  era: ut({
    values: Os,
    defaultWidth: "wide"
  }),
  quarter: ut({
    values: Ps,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ut({
    values: Ns,
    defaultWidth: "wide"
  }),
  day: ut({
    values: Fs,
    defaultWidth: "wide"
  }),
  dayPeriod: ut({
    values: Hs,
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
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Ys(s, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      $s(s, (f) => f.test(a))
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
function $s(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ys(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function As(e) {
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
const Gs = /^(\d+)(th|st|nd|rd)?/i, _s = /\d+/i, Bs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Us = {
  any: [/^b/i, /^(a|c)/i]
}, js = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ks = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, qs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Xs = {
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
}, Vs = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Zs = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Qs = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Js = {
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
}, ec = {
  ordinalNumber: As({
    matchPattern: Gs,
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
    parsePatterns: Ks,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ft({
    matchPatterns: qs,
    defaultMatchWidth: "wide",
    parsePatterns: Xs,
    defaultParseWidth: "any"
  }),
  day: ft({
    matchPatterns: Vs,
    defaultMatchWidth: "wide",
    parsePatterns: Zs,
    defaultParseWidth: "any"
  }),
  dayPeriod: ft({
    matchPatterns: Qs,
    defaultMatchWidth: "any",
    parsePatterns: Js,
    defaultParseWidth: "any"
  })
}, tc = {
  code: "en-US",
  formatDistance: Ds,
  formatLong: Ts,
  formatRelative: Ms,
  localize: zs,
  match: ec,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let nc = {};
function vt() {
  return nc;
}
const Kr = 6048e5, rc = 864e5, nr = Symbol.for("constructDateFrom");
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
function oc(e, ...t) {
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
function ic(e, t, n) {
  const [r, o] = oc(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = or(r), a = or(o), s = +i - rr(i), c = +a - rr(a);
  return Math.round((s - c) / rc);
}
function ac(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function sc(e, t) {
  const n = be(e, t == null ? void 0 : t.in);
  return ic(n, ac(n)) + 1;
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
function cc(e, t) {
  const n = qr(e, t), r = He(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), zt(r);
}
function lc(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = +zt(n) - +cc(n);
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
function dc(e, t) {
  var s, c, d, b;
  const n = vt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((b = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, o = Xr(e, t), i = He((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), pt(i, t);
}
function uc(e, t) {
  const n = be(e, t == null ? void 0 : t.in), r = +pt(n, t) - +dc(n, t);
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
    const o = uc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : K(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = lc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : K(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Fe.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = sc(e);
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
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + K(Math.abs(e) / 60, 2) : Ae(e, t);
}
function Ae(e, t = "") {
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
}, fc = (e, t) => {
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
}, hc = {
  p: Vr,
  P: fc
}, gc = /^D+$/, mc = /^Y+$/, wc = ["D", "DD", "YY", "YYYY"];
function yc(e) {
  return gc.test(e);
}
function pc(e) {
  return mc.test(e);
}
function bc(e, t, n) {
  const r = xc(e, t, n);
  if (console.warn(r), wc.includes(e)) throw new RangeError(r);
}
function xc(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Zr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Qr(e) {
  return !(!Zr(e) && typeof e != "number" || isNaN(+be(e)));
}
const Cc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, vc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kc = /^'([^]*?)'?$/, Dc = /''/g, Sc = /[a-zA-Z]/;
function Rc(e, t, n) {
  var b, f, h, l, x, u, w, D;
  const r = vt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? tc, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((l = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((D = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : D.weekStartsOn) ?? 0, s = be(e, n == null ? void 0 : n.in);
  if (!Qr(s))
    throw new RangeError("Invalid time value");
  let c = t.match(vc).map((v) => {
    const k = v[0];
    if (k === "p" || k === "P") {
      const R = hc[k];
      return R(v, o.formatLong);
    }
    return v;
  }).join("").match(Cc).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const k = v[0];
    if (k === "'")
      return { isToken: !1, value: Ic(v) };
    if (ir[k])
      return { isToken: !0, value: v };
    if (k.match(Sc))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && pc(k) || !(n != null && n.useAdditionalDayOfYearTokens) && yc(k)) && bc(k, t, String(e));
    const R = ir[k[0]];
    return R(s, k, o.localize, d);
  }).join("");
}
function Ic(e) {
  const t = e.match(kc);
  return t ? t[1].replace(Dc, "'") : e;
}
function Tc() {
  return Object.assign({}, vt());
}
function lr(e, t, n) {
  const r = Tc(), o = Oc(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? Ec(o, t) : Mc(o, t);
}
function Ec(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function Mc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function Oc(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Pc(e, t) {
  const n = Wc(t);
  return "formatToParts" in n ? Fc(n, e) : Hc(n, e);
}
const Nc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Fc(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const i = Nc[n[o].type];
      i !== void 0 && (r[i] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function Hc(e, t) {
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
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Lc = dr === "06/25/2014, 00:00:00" || dr === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Wc(e) {
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
const ur = 36e5, zc = 6e4, cn = {
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
    return fr(o, a) ? (i = Math.abs(o) * ur + a * zc, r[1] === "+" ? -i : i) : NaN;
  }
  if (Ac(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : $c(t), s = mn(a, e);
    return -(n ? s : Yc(t, s, e));
  }
  return NaN;
}
function $c(e) {
  return Jr(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function mn(e, t) {
  const n = Pc(e, t), r = Jr(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, r - o;
}
function Yc(e, t, n) {
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
function Ac(e) {
  if (hr[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), hr[e] = !0, !0;
  } catch {
    return !1;
  }
}
const Gc = 60 * 1e3, _c = {
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
  const n = e ? kn(e, t, !0) / Gc : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
const Uc = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, dn = 36e5, wr = 6e4, jc = 2, se = {
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
  const r = Kc(e), { year: o, restDateString: i } = qc(r.date, n), a = Xc(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let c = 0, d;
    if (r.time && (c = Vc(r.time), c === null || isNaN(c)))
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
function Kc(e) {
  const t = {};
  let n = se.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = se.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = se.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function qc(e, t) {
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
function Xc(e, t) {
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
    return Jc(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
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
function Vc(e) {
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
const Zc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Qc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
    if (r && n > Qc[t] || !r && n > Zc[t])
      return !1;
  }
  return !0;
}
function Jc(e, t) {
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
const el = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function tl(e, t, n = {}) {
  t = String(t);
  const r = t.match(el);
  if (r) {
    const o = eo(n.originalDate || e, n);
    t = r.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), c = i[s - 1] === "'", d = i.replace(a, "'" + _c[a[0]](o, a, n) + "'");
      return c ? d.substring(0, s - 1) + d.substring(s + 1) : d;
    }, t);
  }
  return Rc(e, t, n);
}
function nl(e, t, n) {
  e = eo(e, n);
  const r = kn(t, e, !0), o = new Date(e.getTime() - r), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function rl(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, tl(nl(e, t, { timeZone: r.timeZone }), n, r);
}
var no = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(no || {});
const ol = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !Zr(e) && typeof e == "string" ? new Date(e) : e;
  return Qr(r) ? rl(e, n, t) : "--";
}, xr = (e) => e.trim().toLowerCase(), _t = pe.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1,
  chooserOpen: !1,
  setChooserOpen: () => {
  }
}), il = "data-grid-hidden-column-visibility", al = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: o,
  localStorageKey: i = il,
  onHiddenColumnsChange: a
}) => {
  const [s, c] = pe.useState(0), [d, b] = pe.useState(!1), [f, h] = pe.useState([]), l = J(
    (v) => {
      localStorage.setItem(i, JSON.stringify(v)), c((k) => k + 1), h(v);
    },
    [i]
  ), x = JSON.stringify(r ?? []), u = j(
    () => JSON.parse(x),
    [x]
  );
  Ge(() => {
    const v = localStorage.getItem(i);
    if (v) {
      const k = JSON.parse(v);
      l(Array.isArray(k) ? k : []);
    } else
      l(u);
  }, [i, u, l]);
  const w = J(
    (v) => {
      l(v), a == null || a(v);
    },
    [l, a]
  ), D = j(
    () => e.filter((v) => !(n != null && n.includes(v.key))),
    [e, n]
  );
  return /* @__PURE__ */ y(
    _t.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        chooserOpen: d,
        setChooserOpen: b,
        columns: D,
        hiddenColumn: f,
        setHiddenColumn: w,
        enabled: o
      },
      children: t
    }
  );
}, Dn = Te(Xo)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Q.primary500};
    }
`, fn = "rdg-cell-frozen-right", hn = (...e) => e.filter(Boolean).join(" "), sl = ({
  columns: e,
  expandable: t,
  selectionEnabled: n,
  selectableRows: r,
  selectedRows: o,
  onSelectedRowsChange: i,
  renderCheckbox: a,
  selectAllLabel: s
}) => {
  const { enabled: c, hiddenColumn: d } = Ie(_t), b = J((f) => {
    const h = () => {
      if (f.renderCell)
        return f.renderCell;
      if (f.type === et.DATE)
        return ({ row: u }) => {
          var w, D;
          return ol(
            u[f.key],
            ((w = f.dateOptions) == null ? void 0 : w.formatDate) ?? no.DATE_WITH_TIME,
            (D = f.dateOptions) == null ? void 0 : D.timeZone
          );
        };
    }, l = () => f.renderHeaderCell ? f.renderHeaderCell : vs(f), x = {
      ...f,
      renderCell: h(),
      renderHeaderCell: l()
    };
    return f.frozenRight && (x.frozen = !1, x.cellClass = typeof f.cellClass == "function" ? (u) => hn(
      fn,
      f.cellClass(u)
    ) : hn(fn, f.cellClass), x.headerCellClass = hn(fn, f.headerCellClass)), x;
  }, []);
  return j(() => {
    const f = [];
    if (t && !n && f.push(ms(t)), n) {
      const h = (r ?? []).map((w) => w.id), l = h.length > 0 && h.every((w) => o == null ? void 0 : o.includes(w)), x = (w) => {
        const D = (o ?? []).filter((v) => !h.includes(v));
        return w ? [...D, ...h] : D;
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
          t && /* @__PURE__ */ y(hs, { "aria-hidden": !0 }),
          a ? a({
            checked: l,
            "aria-label": s,
            onChange: (w) => i == null ? void 0 : i(x(w))
          }) : /* @__PURE__ */ y(
            Dn,
            {
              checked: l,
              slotProps: { input: { "aria-label": s } },
              onChange: (w, D) => i == null ? void 0 : i(x(D))
            }
          )
        ] }),
        renderCell: t ? (w) => {
          var D;
          return /* @__PURE__ */ oe(tr, { children: [
            /* @__PURE__ */ y(Gr, { row: w.row, expandable: t }),
            (D = dt.renderCell) == null ? void 0 : D.call(dt, w)
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
var cl = {
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
function ll(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return cl[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function gn(e) {
  var t = ll(e);
  return "".concat(t.value).concat(t.unit);
}
var dl = function(e, t, n) {
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
}, ul = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, fl = dl("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function hl(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, c = s === void 0 ? {} : s, d = e.size, b = d === void 0 ? 15 : d, f = e.margin, h = f === void 0 ? 2 : f, l = ul(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), x = Yt({ display: "inherit" }, c), u = function(w) {
    return {
      backgroundColor: o,
      width: gn(b),
      height: gn(b),
      margin: gn(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(fl, " ").concat(0.75 / a, "s ").concat(w * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? Ot.createElement(
    "span",
    Yt({ style: x }, l),
    Ot.createElement("span", { style: u(1) }),
    Ot.createElement("span", { style: u(2) }),
    Ot.createElement("span", { style: u(3) })
  ) : null;
}
const gl = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: o
}) => e ? e(n, r, o) : t === yt.TEXT && typeof n == "string" && typeof r == "string" ? xr(n).includes(xr(r)) : t === yt.AUTOCOMPLETE ? n === r : !1, ml = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = Ie(vn);
  return j(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([i, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const s = e.find((c) => c.key === i);
      return s ? gl({
        comparator: s.filterComparator,
        filterType: s.filterType ?? yt.TEXT,
        value: o[i],
        valueToMatch: a,
        row: o
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, wl = Te.div`
    height: 80px;
    width: 100%;
`, yl = pe.memo(
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
    return /* @__PURE__ */ y(wl, { children: /* @__PURE__ */ y(
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
var pl = /* @__PURE__ */ ((e) => (e[e.SMALLER = 6] = "SMALLER", e[e.SMALL = 10] = "SMALL", e[e.MEDIUM = 15] = "MEDIUM", e[e.BIG = 80] = "BIG", e[e.BIGGER = 160] = "BIGGER", e))(pl || {});
const bl = (e = 10) => {
  const [t, n] = te(0), [r, o] = te(e), i = J(() => {
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
}, Cr = 50, xl = Te.div`
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
), vl = (e) => /* @__PURE__ */ y(Cl, { ...e }), kl = "Select all rows", Dl = ({
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
  filters: f,
  setFilters: h,
  pagination: l,
  renderers: x,
  expandable: u,
  rowDoubleClick: w,
  rowHeight: D,
  rowClass: v,
  onCellClick: k,
  onCellDoubleClick: R,
  ...N
}) => {
  var U;
  const { gridKey: Y } = Ie(_t), { pageSize: C, currentPage: S, setCurrentPage: M, setPageSize: O } = bl(
    l == null ? void 0 : l.defaultPageSize
  ), L = (x == null ? void 0 : x.renderCheckbox) ?? vl, z = sl({
    columns: r,
    // The expand toggle rides in the selection cell, ahead of the checkbox
    expandable: u,
    selectionEnabled: !!c,
    selectableRows: n,
    selectedRows: s,
    onSelectedRowsChange: c,
    renderCheckbox: L,
    selectAllLabel: d
  }), W = j(() => z.map(($) => $.key).join("|"), [z]), ee = j(
    () => z.some(($) => $.filterEnabled),
    [z]
  ), G = j(
    () => (l == null ? void 0 : l.enabled) && !l.remotePagination,
    [l]
  ), ie = j(() => !h, [h]), ge = ml({
    columns: z,
    rows: n,
    enabled: ie
  }), xe = j(() => !i, [i]), {
    sortedRows: Ce,
    sortColumns: We,
    setSortedColumns: Oe
  } = rs({
    columns: z,
    rows: ge,
    defaultSortColumns: a
  }), ce = j(() => {
    if (!G)
      return S;
    const $ = Math.max(0, Math.ceil(ge.length / C) - 1);
    return Math.min(S, $);
  }, [G, S, C, ge.length]);
  Ge(() => {
    ce !== S && M(ce);
  }, [ce, S, M]);
  const ve = j(() => G ? Ce.slice(ce * C, (ce + 1) * C) : Ce, [Ce, G, ce, C]), I = j(
    () => u ? cs(ve, u.expandedIds) : ve,
    [u, ve]
  ), E = j(
    () => u ? ws(z, u.renderDetail) : z,
    [u, z]
  ), A = J(
    ($, q) => {
      const ae = () => {
        const ne = ps($, u == null ? void 0 : u.expandedIds);
        return ne || (q === 0 ? "first-row" : q === n.length - 1 ? "last-row" : "");
      };
      return [v == null ? void 0 : v($, q), ae()].filter(Boolean).join(" ");
    },
    [n, u == null ? void 0 : u.expandedIds, v]
  ), p = J(
    ($, q) => {
      k == null || k($, q), !(!u || q.isGridDefaultPrevented()) && fs($.row, $.column.key, q.target) && _r(u, $.row.id);
    },
    [k, u]
  ), H = J(
    ($, q) => {
      R == null || R($, q), !(!w || q.isGridDefaultPrevented()) && Br(
        $.row,
        $.column.key,
        q.target,
        w.excludedColumns
      ) && w.onDoubleClick($.row);
    },
    [R, w]
  ), B = !(l != null && l.remotePagination);
  return Ge(() => {
    if (!B)
      return;
    const $ = s == null ? void 0 : s.filter(
      (q) => n.some((ae) => ae.id === q)
    );
    ($ == null ? void 0 : $.length) != (s == null ? void 0 : s.length) && (c == null || c($ ?? []));
  }, [n, s, B]), /* @__PURE__ */ oe(ts, { $pagination: !!(l != null && l.enabled), children: [
    /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(
      Yr,
      {
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: ($) => {
          c == null || c(Array.from($));
        },
        rowKeyGetter: ($) => $.id,
        rows: I,
        onSortColumnsChange: xe ? Oe : i,
        sortColumns: xe ? We : o,
        columns: E,
        rowClass: A,
        headerRowHeight: ee ? 70 : void 0,
        onCellClick: p,
        onCellDoubleClick: H,
        enableVirtualization: E.some(($) => $.frozenRight) ? !1 : void 0,
        ...N,
        rowHeight: u ? ys(
          D,
          Cr,
          u.detailHeight ?? os
        ) : D ?? Cr,
        renderers: {
          renderCheckbox: L,
          // react-data-grid renders this only when there are no rows; suppress it
          // while loading so the empty message never flashes under the loader.
          ...b != null && !t ? {
            noRowsFallback: /* @__PURE__ */ y("div", { className: "rdg-no-data", children: b })
          } : {},
          ...x
        },
        style: { ...es, ...e ?? {} }
      },
      `${Y}:${W}`
    ) }),
    l != null && l.enabled ? /* @__PURE__ */ y(
      yl,
      {
        ...(l == null ? void 0 : l.remotePagination) ?? {
          currentPage: ce,
          setCurrentPage: M,
          pageSize: C,
          setPageSize: O,
          totalCount: ge.length
        },
        labels: l.labels ?? ((U = l.remotePagination) == null ? void 0 : U.labels)
      }
    ) : null,
    t ? /* @__PURE__ */ oe(xl, { children: [
      /* @__PURE__ */ y("div", {}),
      /* @__PURE__ */ y(hl, { color: Q.primary500 })
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
}) => /* @__PURE__ */ y(bs, { filters: e, setFilters: t, children: /* @__PURE__ */ y(
  al,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: i,
    localStorageKey: a,
    onHiddenColumnsChange: s,
    visibilityFeatureDisabledFor: o,
    children: /* @__PURE__ */ y(Dl, { ...c, columns: n, filters: e, setFilters: t })
  }
) }), Sl = Te(Qo)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, Al = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r, chooserOpen: o, setChooserOpen: i } = Ie(_t), a = pe.useRef(null), [s, c] = pe.useState(null);
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
        l === -1 ? [...n, h] : n.filter((x) => x !== h)
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
        children: t.map((h) => /* @__PURE__ */ oe(Sl, { onClick: f(h.key), children: [
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
  pl as DEFAULT_PAGE_SIZES,
  Yl as DataGrid,
  Dn as DataGridCheckbox,
  Di as DataGridDefaultRenderersProvider,
  Ur as EXPANDER_COLUMN_KEY,
  Gr as ExpanderToggle,
  yt as FilterType,
  Wl as Row,
  gs as SELECTION_COLUMN_KEY,
  _e as SELECT_COLUMN_KEY,
  bn as SelectCellFormatter,
  dt as SelectColumn,
  vi as ToggleGroup,
  zl as TreeDataGrid,
  Al as VisibilityColumnChooser,
  Br as clickBelongsToRow,
  fs as clickExpandsRow,
  ol as convertDate,
  es as defaultTheme,
  ys as detailAwareRowHeight,
  ps as detailRowClass,
  xr as getStringToCompare,
  Wt as isDetailRow,
  wi as renderCheckbox,
  Lr as renderHeaderCell,
  Ia as renderSortIcon,
  Ta as renderSortPriority,
  Ci as renderToggleGroup,
  ki as renderValue,
  Q as taktikTheme,
  $l as textEditor,
  Ti as useHeaderRowSelection,
  bl as usePagination,
  Pr as useRowSelection,
  ws as withDetailRendering,
  cs as withDetailRows
};
