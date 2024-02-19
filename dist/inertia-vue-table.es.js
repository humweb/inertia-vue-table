import { defineComponent as ar, ref as ir, onMounted as sr, onUnmounted as or, openBlock as h, createElementBlock as _, createElementVNode as f, renderSlot as V, withDirectives as de, withModifiers as Ie, vShow as ye, createVNode as J, Transition as lr, withCtx as Q, normalizeClass as G, resolveComponent as j, createBlock as q, Fragment as Z, renderList as X, createTextVNode as ce, toDisplayString as U, createCommentVNode as H, resolveDirective as ur, vModelSelect as cr } from "vue";
function dr(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function fr(e) {
  return function(t, r, a) {
    for (var i = -1, n = Object(t), s = a(t), l = s.length; l--; ) {
      var o = s[e ? l : ++i];
      if (r(n[o], o, n) === !1)
        break;
    }
    return t;
  };
}
var hr = fr();
const gr = hr;
function pr(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var mr = typeof global == "object" && global && global.Object === Object && global;
const Pt = mr;
var vr = typeof self == "object" && self && self.Object === Object && self, yr = Pt || vr || Function("return this")();
const te = yr;
var _r = te.Symbol;
const fe = _r;
var At = Object.prototype, br = At.hasOwnProperty, wr = At.toString, Se = fe ? fe.toStringTag : void 0;
function $r(e) {
  var t = br.call(e, Se), r = e[Se];
  try {
    e[Se] = void 0;
    var a = !0;
  } catch {
  }
  var i = wr.call(e);
  return a && (t ? e[Se] = r : delete e[Se]), i;
}
var xr = Object.prototype, Cr = xr.toString;
function Sr(e) {
  return Cr.call(e);
}
var Tr = "[object Null]", Or = "[object Undefined]", ot = fe ? fe.toStringTag : void 0;
function we(e) {
  return e == null ? e === void 0 ? Or : Tr : ot && ot in Object(e) ? $r(e) : Sr(e);
}
function _e(e) {
  return e != null && typeof e == "object";
}
var Dr = "[object Arguments]";
function lt(e) {
  return _e(e) && we(e) == Dr;
}
var kt = Object.prototype, Mr = kt.hasOwnProperty, Ir = kt.propertyIsEnumerable, Pr = lt(function() {
  return arguments;
}()) ? lt : function(e) {
  return _e(e) && Mr.call(e, "callee") && !Ir.call(e, "callee");
};
const Et = Pr;
var Ar = Array.isArray;
const ee = Ar;
function kr() {
  return !1;
}
var Ft = typeof exports == "object" && exports && !exports.nodeType && exports, ut = Ft && typeof module == "object" && module && !module.nodeType && module, Er = ut && ut.exports === Ft, ct = Er ? te.Buffer : void 0, Fr = ct ? ct.isBuffer : void 0, jr = Fr || kr;
const qe = jr;
var Lr = 9007199254740991, zr = /^(?:0|[1-9]\d*)$/;
function jt(e, t) {
  var r = typeof e;
  return t = t ?? Lr, !!t && (r == "number" || r != "symbol" && zr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Rr = 9007199254740991;
function et(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rr;
}
var Nr = "[object Arguments]", Br = "[object Array]", Ur = "[object Boolean]", Hr = "[object Date]", Vr = "[object Error]", Gr = "[object Function]", Yr = "[object Map]", qr = "[object Number]", Wr = "[object Object]", Zr = "[object RegExp]", Kr = "[object Set]", Jr = "[object String]", Xr = "[object WeakMap]", Qr = "[object ArrayBuffer]", en = "[object DataView]", tn = "[object Float32Array]", rn = "[object Float64Array]", nn = "[object Int8Array]", an = "[object Int16Array]", sn = "[object Int32Array]", on = "[object Uint8Array]", ln = "[object Uint8ClampedArray]", un = "[object Uint16Array]", cn = "[object Uint32Array]", z = {};
z[tn] = z[rn] = z[nn] = z[an] = z[sn] = z[on] = z[ln] = z[un] = z[cn] = !0;
z[Nr] = z[Br] = z[Qr] = z[Ur] = z[en] = z[Hr] = z[Vr] = z[Gr] = z[Yr] = z[qr] = z[Wr] = z[Zr] = z[Kr] = z[Jr] = z[Xr] = !1;
function dn(e) {
  return _e(e) && et(e.length) && !!z[we(e)];
}
function fn(e) {
  return function(t) {
    return e(t);
  };
}
var Lt = typeof exports == "object" && exports && !exports.nodeType && exports, Te = Lt && typeof module == "object" && module && !module.nodeType && module, hn = Te && Te.exports === Lt, He = hn && Pt.process, gn = function() {
  try {
    var e = Te && Te.require && Te.require("util").types;
    return e || He && He.binding && He.binding("util");
  } catch {
  }
}();
const dt = gn;
var ft = dt && dt.isTypedArray, pn = ft ? fn(ft) : dn;
const zt = pn;
var mn = Object.prototype, vn = mn.hasOwnProperty;
function yn(e, t) {
  var r = ee(e), a = !r && Et(e), i = !r && !a && qe(e), n = !r && !a && !i && zt(e), s = r || a || i || n, l = s ? pr(e.length, String) : [], o = l.length;
  for (var c in e)
    (t || vn.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    jt(c, o))) && l.push(c);
  return l;
}
var _n = Object.prototype;
function bn(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _n;
  return e === r;
}
function wn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var $n = wn(Object.keys, Object);
const xn = $n;
var Cn = Object.prototype, Sn = Cn.hasOwnProperty;
function Tn(e) {
  if (!bn(e))
    return xn(e);
  var t = [];
  for (var r in Object(e))
    Sn.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function be(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var On = "[object AsyncFunction]", Dn = "[object Function]", Mn = "[object GeneratorFunction]", In = "[object Proxy]";
function Rt(e) {
  if (!be(e))
    return !1;
  var t = we(e);
  return t == Dn || t == Mn || t == On || t == In;
}
function tt(e) {
  return e != null && et(e.length) && !Rt(e);
}
function Fe(e) {
  return tt(e) ? yn(e) : Tn(e);
}
function Pn(e, t) {
  return e && gr(e, t, Fe);
}
function An(e, t) {
  return function(r, a) {
    if (r == null)
      return r;
    if (!tt(r))
      return e(r, a);
    for (var i = r.length, n = t ? i : -1, s = Object(r); (t ? n-- : ++n < i) && a(s[n], n, s) !== !1; )
      ;
    return r;
  };
}
var kn = An(Pn);
const Nt = kn;
function Bt(e) {
  return e;
}
function En(e) {
  return typeof e == "function" ? e : Bt;
}
function Fn(e, t) {
  var r = ee(e) ? dr : Nt;
  return r(e, En(t));
}
function jn() {
  this.__data__ = [], this.size = 0;
}
function Ut(e, t) {
  return e === t || e !== e && t !== t;
}
function je(e, t) {
  for (var r = e.length; r--; )
    if (Ut(e[r][0], t))
      return r;
  return -1;
}
var Ln = Array.prototype, zn = Ln.splice;
function Rn(e) {
  var t = this.__data__, r = je(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : zn.call(t, r, 1), --this.size, !0;
}
function Nn(e) {
  var t = this.__data__, r = je(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Bn(e) {
  return je(this.__data__, e) > -1;
}
function Un(e, t) {
  var r = this.__data__, a = je(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
function ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ae.prototype.clear = jn;
ae.prototype.delete = Rn;
ae.prototype.get = Nn;
ae.prototype.has = Bn;
ae.prototype.set = Un;
function Hn() {
  this.__data__ = new ae(), this.size = 0;
}
function Vn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Gn(e) {
  return this.__data__.get(e);
}
function Yn(e) {
  return this.__data__.has(e);
}
var qn = te["__core-js_shared__"];
const Ve = qn;
var ht = function() {
  var e = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wn(e) {
  return !!ht && ht in e;
}
var Zn = Function.prototype, Kn = Zn.toString;
function pe(e) {
  if (e != null) {
    try {
      return Kn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jn = /[\\^$.*+?()[\]{}|]/g, Xn = /^\[object .+?Constructor\]$/, Qn = Function.prototype, ea = Object.prototype, ta = Qn.toString, ra = ea.hasOwnProperty, na = RegExp(
  "^" + ta.call(ra).replace(Jn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function aa(e) {
  if (!be(e) || Wn(e))
    return !1;
  var t = Rt(e) ? na : Xn;
  return t.test(pe(e));
}
function ia(e, t) {
  return e == null ? void 0 : e[t];
}
function $e(e, t) {
  var r = ia(e, t);
  return aa(r) ? r : void 0;
}
var sa = $e(te, "Map");
const Oe = sa;
var oa = $e(Object, "create");
const De = oa;
function la() {
  this.__data__ = De ? De(null) : {}, this.size = 0;
}
function ua(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ca = "__lodash_hash_undefined__", da = Object.prototype, fa = da.hasOwnProperty;
function ha(e) {
  var t = this.__data__;
  if (De) {
    var r = t[e];
    return r === ca ? void 0 : r;
  }
  return fa.call(t, e) ? t[e] : void 0;
}
var ga = Object.prototype, pa = ga.hasOwnProperty;
function ma(e) {
  var t = this.__data__;
  return De ? t[e] !== void 0 : pa.call(t, e);
}
var va = "__lodash_hash_undefined__";
function ya(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = De && t === void 0 ? va : t, this;
}
function ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ge.prototype.clear = la;
ge.prototype.delete = ua;
ge.prototype.get = ha;
ge.prototype.has = ma;
ge.prototype.set = ya;
function _a() {
  this.size = 0, this.__data__ = {
    hash: new ge(),
    map: new (Oe || ae)(),
    string: new ge()
  };
}
function ba(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Le(e, t) {
  var r = e.__data__;
  return ba(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function wa(e) {
  var t = Le(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function $a(e) {
  return Le(this, e).get(e);
}
function xa(e) {
  return Le(this, e).has(e);
}
function Ca(e, t) {
  var r = Le(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
function ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ie.prototype.clear = _a;
ie.prototype.delete = wa;
ie.prototype.get = $a;
ie.prototype.has = xa;
ie.prototype.set = Ca;
var Sa = 200;
function Ta(e, t) {
  var r = this.__data__;
  if (r instanceof ae) {
    var a = r.__data__;
    if (!Oe || a.length < Sa - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ie(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ne(e) {
  var t = this.__data__ = new ae(e);
  this.size = t.size;
}
ne.prototype.clear = Hn;
ne.prototype.delete = Vn;
ne.prototype.get = Gn;
ne.prototype.has = Yn;
ne.prototype.set = Ta;
var Oa = "__lodash_hash_undefined__";
function Da(e) {
  return this.__data__.set(e, Oa), this;
}
function Ma(e) {
  return this.__data__.has(e);
}
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ie(); ++t < r; )
    this.add(e[t]);
}
Ee.prototype.add = Ee.prototype.push = Da;
Ee.prototype.has = Ma;
function Ia(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Pa(e, t) {
  return e.has(t);
}
var Aa = 1, ka = 2;
function Ht(e, t, r, a, i, n) {
  var s = r & Aa, l = e.length, o = t.length;
  if (l != o && !(s && o > l))
    return !1;
  var c = n.get(e), v = n.get(t);
  if (c && v)
    return c == t && v == e;
  var y = -1, m = !0, $ = r & ka ? new Ee() : void 0;
  for (n.set(e, t), n.set(t, e); ++y < l; ) {
    var b = e[y], u = t[y];
    if (a)
      var w = s ? a(u, b, y, t, e, n) : a(b, u, y, e, t, n);
    if (w !== void 0) {
      if (w)
        continue;
      m = !1;
      break;
    }
    if ($) {
      if (!Ia(t, function(I, M) {
        if (!Pa($, M) && (b === I || i(b, I, r, a, n)))
          return $.push(M);
      })) {
        m = !1;
        break;
      }
    } else if (!(b === u || i(b, u, r, a, n))) {
      m = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), m;
}
var Ea = te.Uint8Array;
const gt = Ea;
function Fa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, i) {
    r[++t] = [i, a];
  }), r;
}
function ja(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var La = 1, za = 2, Ra = "[object Boolean]", Na = "[object Date]", Ba = "[object Error]", Ua = "[object Map]", Ha = "[object Number]", Va = "[object RegExp]", Ga = "[object Set]", Ya = "[object String]", qa = "[object Symbol]", Wa = "[object ArrayBuffer]", Za = "[object DataView]", pt = fe ? fe.prototype : void 0, Ge = pt ? pt.valueOf : void 0;
function Ka(e, t, r, a, i, n, s) {
  switch (r) {
    case Za:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Wa:
      return !(e.byteLength != t.byteLength || !n(new gt(e), new gt(t)));
    case Ra:
    case Na:
    case Ha:
      return Ut(+e, +t);
    case Ba:
      return e.name == t.name && e.message == t.message;
    case Va:
    case Ya:
      return e == t + "";
    case Ua:
      var l = Fa;
    case Ga:
      var o = a & La;
      if (l || (l = ja), e.size != t.size && !o)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      a |= za, s.set(e, t);
      var v = Ht(l(e), l(t), a, i, n, s);
      return s.delete(e), v;
    case qa:
      if (Ge)
        return Ge.call(e) == Ge.call(t);
  }
  return !1;
}
function Ja(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
function Xa(e, t, r) {
  var a = t(e);
  return ee(e) ? a : Ja(a, r(e));
}
function Vt(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, n = []; ++r < a; ) {
    var s = e[r];
    t(s, r, e) && (n[i++] = s);
  }
  return n;
}
function Qa() {
  return [];
}
var ei = Object.prototype, ti = ei.propertyIsEnumerable, mt = Object.getOwnPropertySymbols, ri = mt ? function(e) {
  return e == null ? [] : (e = Object(e), Vt(mt(e), function(t) {
    return ti.call(e, t);
  }));
} : Qa;
const ni = ri;
function vt(e) {
  return Xa(e, Fe, ni);
}
var ai = 1, ii = Object.prototype, si = ii.hasOwnProperty;
function oi(e, t, r, a, i, n) {
  var s = r & ai, l = vt(e), o = l.length, c = vt(t), v = c.length;
  if (o != v && !s)
    return !1;
  for (var y = o; y--; ) {
    var m = l[y];
    if (!(s ? m in t : si.call(t, m)))
      return !1;
  }
  var $ = n.get(e), b = n.get(t);
  if ($ && b)
    return $ == t && b == e;
  var u = !0;
  n.set(e, t), n.set(t, e);
  for (var w = s; ++y < o; ) {
    m = l[y];
    var I = e[m], M = t[m];
    if (a)
      var k = s ? a(M, I, m, t, e, n) : a(I, M, m, e, t, n);
    if (!(k === void 0 ? I === M || i(I, M, r, a, n) : k)) {
      u = !1;
      break;
    }
    w || (w = m == "constructor");
  }
  if (u && !w) {
    var L = e.constructor, D = t.constructor;
    L != D && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof D == "function" && D instanceof D) && (u = !1);
  }
  return n.delete(e), n.delete(t), u;
}
var li = $e(te, "DataView");
const We = li;
var ui = $e(te, "Promise");
const Ze = ui;
var ci = $e(te, "Set");
const Ke = ci;
var di = $e(te, "WeakMap");
const Je = di;
var yt = "[object Map]", fi = "[object Object]", _t = "[object Promise]", bt = "[object Set]", wt = "[object WeakMap]", $t = "[object DataView]", hi = pe(We), gi = pe(Oe), pi = pe(Ze), mi = pe(Ke), vi = pe(Je), he = we;
(We && he(new We(new ArrayBuffer(1))) != $t || Oe && he(new Oe()) != yt || Ze && he(Ze.resolve()) != _t || Ke && he(new Ke()) != bt || Je && he(new Je()) != wt) && (he = function(e) {
  var t = we(e), r = t == fi ? e.constructor : void 0, a = r ? pe(r) : "";
  if (a)
    switch (a) {
      case hi:
        return $t;
      case gi:
        return yt;
      case pi:
        return _t;
      case mi:
        return bt;
      case vi:
        return wt;
    }
  return t;
});
const xt = he;
var yi = 1, Ct = "[object Arguments]", St = "[object Array]", Ae = "[object Object]", _i = Object.prototype, Tt = _i.hasOwnProperty;
function bi(e, t, r, a, i, n) {
  var s = ee(e), l = ee(t), o = s ? St : xt(e), c = l ? St : xt(t);
  o = o == Ct ? Ae : o, c = c == Ct ? Ae : c;
  var v = o == Ae, y = c == Ae, m = o == c;
  if (m && qe(e)) {
    if (!qe(t))
      return !1;
    s = !0, v = !1;
  }
  if (m && !v)
    return n || (n = new ne()), s || zt(e) ? Ht(e, t, r, a, i, n) : Ka(e, t, o, r, a, i, n);
  if (!(r & yi)) {
    var $ = v && Tt.call(e, "__wrapped__"), b = y && Tt.call(t, "__wrapped__");
    if ($ || b) {
      var u = $ ? e.value() : e, w = b ? t.value() : t;
      return n || (n = new ne()), i(u, w, r, a, n);
    }
  }
  return m ? (n || (n = new ne()), oi(e, t, r, a, i, n)) : !1;
}
function rt(e, t, r, a, i) {
  return e === t ? !0 : e == null || t == null || !_e(e) && !_e(t) ? e !== e && t !== t : bi(e, t, r, a, rt, i);
}
var wi = function() {
  return te.Date.now();
};
const Ye = wi;
var $i = /\s/;
function xi(e) {
  for (var t = e.length; t-- && $i.test(e.charAt(t)); )
    ;
  return t;
}
var Ci = /^\s+/;
function Si(e) {
  return e && e.slice(0, xi(e) + 1).replace(Ci, "");
}
var Ti = "[object Symbol]";
function ze(e) {
  return typeof e == "symbol" || _e(e) && we(e) == Ti;
}
var Ot = 0 / 0, Oi = /^[-+]0x[0-9a-f]+$/i, Di = /^0b[01]+$/i, Mi = /^0o[0-7]+$/i, Ii = parseInt;
function Xe(e) {
  if (typeof e == "number")
    return e;
  if (ze(e))
    return Ot;
  if (be(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = be(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Si(e);
  var r = Di.test(e);
  return r || Mi.test(e) ? Ii(e.slice(2), r ? 2 : 8) : Oi.test(e) ? Ot : +e;
}
var Pi = "Expected a function", Ai = Math.max, ki = Math.min;
function Gt(e, t, r) {
  var a, i, n, s, l, o, c = 0, v = !1, y = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  t = Xe(t) || 0, be(r) && (v = !!r.leading, y = "maxWait" in r, n = y ? Ai(Xe(r.maxWait) || 0, t) : n, m = "trailing" in r ? !!r.trailing : m);
  function $(x) {
    var F = a, R = i;
    return a = i = void 0, c = x, s = e.apply(R, F), s;
  }
  function b(x) {
    return c = x, l = setTimeout(I, t), v ? $(x) : s;
  }
  function u(x) {
    var F = x - o, R = x - c, A = t - F;
    return y ? ki(A, n - R) : A;
  }
  function w(x) {
    var F = x - o, R = x - c;
    return o === void 0 || F >= t || F < 0 || y && R >= n;
  }
  function I() {
    var x = Ye();
    if (w(x))
      return M(x);
    l = setTimeout(I, u(x));
  }
  function M(x) {
    return l = void 0, m && a ? $(x) : (a = i = void 0, s);
  }
  function k() {
    l !== void 0 && clearTimeout(l), c = 0, a = o = i = l = void 0;
  }
  function L() {
    return l === void 0 ? s : M(Ye());
  }
  function D() {
    var x = Ye(), F = w(x);
    if (a = arguments, i = this, o = x, F) {
      if (l === void 0)
        return b(o);
      if (y)
        return clearTimeout(l), l = setTimeout(I, t), $(o);
    }
    return l === void 0 && (l = setTimeout(I, t)), s;
  }
  return D.cancel = k, D.flush = L, D;
}
const Ol = {
  props: {
    tableProps: {
      type: Object,
      required: !0
    },
    records: {
      type: Array
    },
    pagination: Object,
    errors: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      tableData: {
        page: this.tableProps.page || 1,
        sort: this.tableProps.sort || "",
        perPage: this.tableProps.perPage || 15,
        filters: this.tableProps.filters,
        columns: this.tableProps.columns || [],
        search: this.tableProps.search || {}
      },
      tableDataIteration: 0
    };
  },
  methods: {
    getFilterForQuery(e, t) {
      let r = {};
      const a = Object.assign({}, t, e);
      return Fn(a, (i) => {
        i.value && (i.key in this.errors ? r[i.key] = "" : r[i.key] = i.value);
      }), r;
    },
    sortBy(e) {
      this.tableData.page = 1, this.tableData.sort === `-${e}` ? this.tableData.sort = null : this.tableData.sort = this.tableData.sort === e ? `-${e}` : e;
    },
    concatHidden(e) {
      return e.filter((t) => t.visible == !1).map((t) => t.attribute).join(",");
    },
    requestData() {
      if (this.$inertia) {
        let e = {}, t = this.concatHidden(this.tableData.columns);
        for (let r in this.tableData)
          if (!(this.tableData[r] == "" || this.tableData[r] == null || typeof this.tableData[r] > "u"))
            if (r == "columns" && t !== "" && (e.hidden = t), r == "search") {
              let a = Object.keys(this.tableData.search);
              if (a.length) {
                let i = {};
                a.forEach((n) => {
                  let s = this.tableData.search[n].value;
                  s != "" && s != null && (i[n] = s);
                }), Object.keys(i).length > 0 && (e.search = i);
              }
            } else
              r == "filters" && Array.isArray(this.tableData.filters) ? this.tableData.filters.filter((a) => a.value).forEach((a) => {
                "filters" in e || (e.filters = {}), e.filters[a.field] = a.value;
              }) : r !== "columns" && (e[r] = this.tableData[r]);
        this.$inertia.get(location.pathname, e, {
          replace: !0,
          preserveState: !0,
          preserveScroll: !0
        });
      }
    }
  },
  computed: {},
  watch: {
    tableData: {
      deep: !0,
      handler: Gt(function(e, t) {
        this.requestData();
      }, 350)
    }
  }
}, K = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, Ei = ar({
  props: {
    closeOnClick: {
      type: Boolean,
      default: !1
    },
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["bg-white dark:bg-gray-700 dark:text-gray-200"]
    }
  },
  setup() {
    let e = ir(!1);
    const t = (r) => {
      e.value && r.key === "Escape" && (e.value = !1);
    };
    return sr(() => document.addEventListener("keydown", t)), or(() => document.removeEventListener("keydown", t)), {
      open: e
    };
  },
  methods: {
    autoClose() {
      this.closeOnClick && (this.open = !1);
    }
  },
  computed: {
    widthClass() {
      return {
        48: "w-48"
      }[this.width.toString()];
    },
    alignmentClasses() {
      return this.align === "left" ? "origin-top-left left-0" : this.align === "right" ? "origin-top-right right-0" : "origin-top";
    }
  }
}), Fi = { class: "relative" };
function ji(e, t, r, a, i, n) {
  return h(), _("div", Fi, [
    f("div", {
      onClick: t[0] || (t[0] = (s) => e.open = !e.open)
    }, [
      V(e.$slots, "trigger")
    ]),
    de(f("div", {
      class: "fixed inset-0 z-40 bg-black/30",
      onClick: t[1] || (t[1] = Ie((s) => e.open = !1, ["self"]))
    }, null, 512), [
      [ye, e.open]
    ]),
    J(lr, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95"
    }, {
      default: Q(() => [
        de(f("div", {
          class: G(["absolute z-50 mt-2 rounded-md shadow-lg", [e.widthClass, e.alignmentClasses]]),
          style: { display: "none" },
          onClick: t[2] || (t[2] = (...s) => e.autoClose && e.autoClose(...s))
        }, [
          f("div", {
            class: G(["rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5", e.contentClasses])
          }, [
            V(e.$slots, "content")
          ], 2)
        ], 2), [
          [ye, e.open]
        ])
      ]),
      _: 3
    })
  ]);
}
const Yt = /* @__PURE__ */ K(Ei, [["render", ji]]), Li = {
  components: {
    DropdownComp: Yt
  },
  props: {
    closeOnClick: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  data() {
    return {
      opened: !1,
      popper: null
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = !1;
    }
  },
  mounted() {
  }
}, zi = ["disabled"];
function Ri(e, t, r, a, i, n) {
  const s = j("DropdownComp");
  return h(), q(s, { "close-on-click": r.closeOnClick }, {
    trigger: Q(() => [
      f("button", {
        type: "button",
        disabled: r.disabled,
        class: G(["btn btn-slate", { "cursor-not-allowed": r.disabled }]),
        "aria-haspopup": "true",
        ref: "button"
      }, [
        V(e.$slots, "button")
      ], 10, zi)
    ]),
    content: Q(() => [
      V(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["close-on-click"]);
}
const qt = /* @__PURE__ */ K(Li, [["render", Ri]]);
function Ni(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
    })
  ]);
}
function Bi(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function Ui(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 15.75l7.5-7.5 7.5 7.5"
    })
  ]);
}
function Hi(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    })
  ]);
}
function Vi(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function Gi(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
const Yi = {
  name: "Actions",
  components: {
    Dropdown: Yt,
    EllipsisHorizontalIcon: Hi
  },
  props: {
    record: Object,
    actions: Array
  },
  methods: {
    buildLink(e, t) {
      return e.link.replace(
        /{(\w*)}/g,
        //match "{id}"
        function(r, a) {
          return t.hasOwnProperty(a) ? t[a] : "";
        }
      );
    }
  }
}, qi = { class: "btn btn-xs hover:text-gray-400" }, Wi = {
  class: "flex w-full text-left",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, Zi = {
  class: "w-full p-2",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
};
function Ki(e, t, r, a, i, n) {
  const s = j("EllipsisHorizontalIcon"), l = j("Link"), o = j("Dropdown");
  return h(), q(o, { class: "inline-flex" }, {
    trigger: Q(() => [
      f("div", qi, [
        J(s, { class: "w-6 h-6" })
      ])
    ]),
    content: Q(() => [
      f("div", Wi, [
        f("div", Zi, [
          (h(!0), _(Z, null, X(r.actions, (c) => (h(), q(l, {
            href: n.buildLink(c, r.record),
            class: "text-left flex w-full rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300",
            role: "menuitem"
          }, {
            default: Q(() => [
              ce(U(c.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 256))
        ])
      ])
    ]),
    _: 1
  });
}
const Ji = /* @__PURE__ */ K(Yi, [["render", Ki]]), Xi = {
  props: {
    cell: {
      type: Object,
      required: !0
    },
    sort: String
  },
  components: {
    ChevronUpDownIcon: Bi,
    ChevronUpIcon: Ui,
    ChevronDownIcon: Ni
  },
  methods: {
    onClick() {
      this.cell.sortable && this.$emit("sort", this.cell.attribute);
    }
  },
  computed: {
    sortDirection() {
      return `-${this.cell.attribute}` === this.sort ? "desc" : `${this.cell.attribute}` === this.sort ? "asc" : "";
    }
  }
};
function Qi(e, t, r, a, i, n) {
  const s = j("ChevronUpDownIcon"), l = j("ChevronUpIcon"), o = j("ChevronDownIcon");
  return de((h(), _("th", {
    class: G({ "cursor-pointer": r.cell.sortable, "text-right": r.cell.component == "action-field", "text-left": r.cell.component !== "action-field" }),
    onClick: t[0] || (t[0] = Ie((...c) => n.onClick && n.onClick(...c), ["prevent"]))
  }, [
    V(e.$slots, "default", { direction: n.sortDirection }, () => [
      f("div", {
        class: G([r.cell.component == "action-field" ? "justify-end" : "flex flex-row items-center whitespace-nowrap"])
      }, [
        ce(U(r.cell.name) + " ", 1),
        r.cell.sortable ? (h(), _("div", {
          key: 0,
          class: G(["ml-2 inline-flex", { "text-gray-400": !this.sort, "text-blue-500": this.sort && this.sort.endsWith(r.cell.attribute) }])
        }, [
          n.sortDirection === "" ? (h(), q(s, {
            key: 0,
            class: "size-5"
          })) : H("", !0),
          n.sortDirection === "asc" ? (h(), q(l, {
            key: 1,
            class: "size-5"
          })) : H("", !0),
          n.sortDirection === "desc" ? (h(), q(o, {
            key: 2,
            class: "size-5"
          })) : H("", !0)
        ], 2)) : H("", !0)
      ], 2)
    ])
  ], 2)), [
    [ye, r.cell.visible]
  ]);
}
const es = /* @__PURE__ */ K(Xi, [["render", Qi]]);
var ts = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rs = /^\w*$/;
function nt(e, t) {
  if (ee(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ze(e) ? !0 : rs.test(e) || !ts.test(e) || t != null && e in Object(t);
}
var ns = "Expected a function";
function at(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ns);
  var r = function() {
    var a = arguments, i = t ? t.apply(this, a) : a[0], n = r.cache;
    if (n.has(i))
      return n.get(i);
    var s = e.apply(this, a);
    return r.cache = n.set(i, s) || n, s;
  };
  return r.cache = new (at.Cache || ie)(), r;
}
at.Cache = ie;
var as = 500;
function is(e) {
  var t = at(e, function(a) {
    return r.size === as && r.clear(), a;
  }), r = t.cache;
  return t;
}
var ss = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, os = /\\(\\)?/g, ls = is(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ss, function(r, a, i, n) {
    t.push(i ? n.replace(os, "$1") : a || r);
  }), t;
});
const us = ls;
function cs(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = Array(a); ++r < a; )
    i[r] = t(e[r], r, e);
  return i;
}
var ds = 1 / 0, Dt = fe ? fe.prototype : void 0, Mt = Dt ? Dt.toString : void 0;
function Wt(e) {
  if (typeof e == "string")
    return e;
  if (ee(e))
    return cs(e, Wt) + "";
  if (ze(e))
    return Mt ? Mt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ds ? "-0" : t;
}
function fs(e) {
  return e == null ? "" : Wt(e);
}
function Zt(e, t) {
  return ee(e) ? e : nt(e, t) ? [e] : us(fs(e));
}
var hs = 1 / 0;
function Re(e) {
  if (typeof e == "string" || ze(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -hs ? "-0" : t;
}
function Kt(e, t) {
  t = Zt(t, e);
  for (var r = 0, a = t.length; e != null && r < a; )
    e = e[Re(t[r++])];
  return r && r == a ? e : void 0;
}
function Qe(e, t, r) {
  var a = e == null ? void 0 : Kt(e, t);
  return a === void 0 ? r : a;
}
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Be(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jt = { exports: {} };
(function(e, t) {
  (function(r, a) {
    e.exports = a();
  })(Ne, function() {
    var r = 1e3, a = 6e4, i = 36e5, n = "millisecond", s = "second", l = "minute", o = "hour", c = "day", v = "week", y = "month", m = "quarter", $ = "year", b = "date", u = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var p = ["th", "st", "nd", "rd"], d = C % 100;
      return "[" + C + (p[(d - 20) % 10] || p[d] || p[0]) + "]";
    } }, k = function(C, p, d) {
      var S = String(C);
      return !S || S.length >= p ? C : "" + Array(p + 1 - S.length).join(d) + C;
    }, L = { s: k, z: function(C) {
      var p = -C.utcOffset(), d = Math.abs(p), S = Math.floor(d / 60), g = d % 60;
      return (p <= 0 ? "+" : "-") + k(S, 2, "0") + ":" + k(g, 2, "0");
    }, m: function C(p, d) {
      if (p.date() < d.date())
        return -C(d, p);
      var S = 12 * (d.year() - p.year()) + (d.month() - p.month()), g = p.clone().add(S, y), O = d - g < 0, T = p.clone().add(S + (O ? -1 : 1), y);
      return +(-(S + (d - g) / (O ? g - T : T - g)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: y, y: $, w: v, d: c, D: b, h: o, m: l, s, ms: n, Q: m }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, D = "en", x = {};
    x[D] = M;
    var F = function(C) {
      return C instanceof se;
    }, R = function C(p, d, S) {
      var g;
      if (!p)
        return D;
      if (typeof p == "string") {
        var O = p.toLowerCase();
        x[O] && (g = O), d && (x[O] = d, g = O);
        var T = p.split("-");
        if (!g && T.length > 1)
          return C(T[0]);
      } else {
        var E = p.name;
        x[E] = p, g = E;
      }
      return !S && g && (D = g), g || !S && D;
    }, A = function(C, p) {
      if (F(C))
        return C.clone();
      var d = typeof p == "object" ? p : {};
      return d.date = C, d.args = arguments, new se(d);
    }, P = L;
    P.l = R, P.i = F, P.w = function(C, p) {
      return A(C, { locale: p.$L, utc: p.$u, x: p.$x, $offset: p.$offset });
    };
    var se = function() {
      function C(d) {
        this.$L = R(d.locale, null, !0), this.parse(d);
      }
      var p = C.prototype;
      return p.parse = function(d) {
        this.$d = function(S) {
          var g = S.date, O = S.utc;
          if (g === null)
            return /* @__PURE__ */ new Date(NaN);
          if (P.u(g))
            return /* @__PURE__ */ new Date();
          if (g instanceof Date)
            return new Date(g);
          if (typeof g == "string" && !/Z$/i.test(g)) {
            var T = g.match(w);
            if (T) {
              var E = T[2] - 1 || 0, B = (T[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(T[1], E, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, B)) : new Date(T[1], E, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, B);
            }
          }
          return new Date(g);
        }(d), this.$x = d.x || {}, this.init();
      }, p.init = function() {
        var d = this.$d;
        this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
      }, p.$utils = function() {
        return P;
      }, p.isValid = function() {
        return this.$d.toString() !== u;
      }, p.isSame = function(d, S) {
        var g = A(d);
        return this.startOf(S) <= g && g <= this.endOf(S);
      }, p.isAfter = function(d, S) {
        return A(d) < this.startOf(S);
      }, p.isBefore = function(d, S) {
        return this.endOf(S) < A(d);
      }, p.$g = function(d, S, g) {
        return P.u(d) ? this[S] : this.set(g, d);
      }, p.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, p.valueOf = function() {
        return this.$d.getTime();
      }, p.startOf = function(d, S) {
        var g = this, O = !!P.u(S) || S, T = P.p(d), E = function(me, W) {
          var le = P.w(g.$u ? Date.UTC(g.$y, W, me) : new Date(g.$y, W, me), g);
          return O ? le : le.endOf(c);
        }, B = function(me, W) {
          return P.w(g.toDate()[me].apply(g.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(W)), g);
        }, N = this.$W, Y = this.$M, oe = this.$D, re = "set" + (this.$u ? "UTC" : "");
        switch (T) {
          case $:
            return O ? E(1, 0) : E(31, 11);
          case y:
            return O ? E(1, Y) : E(0, Y + 1);
          case v:
            var xe = this.$locale().weekStart || 0, Ce = (N < xe ? N + 7 : N) - xe;
            return E(O ? oe - Ce : oe + (6 - Ce), Y);
          case c:
          case b:
            return B(re + "Hours", 0);
          case o:
            return B(re + "Minutes", 1);
          case l:
            return B(re + "Seconds", 2);
          case s:
            return B(re + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, p.endOf = function(d) {
        return this.startOf(d, !1);
      }, p.$set = function(d, S) {
        var g, O = P.p(d), T = "set" + (this.$u ? "UTC" : ""), E = (g = {}, g[c] = T + "Date", g[b] = T + "Date", g[y] = T + "Month", g[$] = T + "FullYear", g[o] = T + "Hours", g[l] = T + "Minutes", g[s] = T + "Seconds", g[n] = T + "Milliseconds", g)[O], B = O === c ? this.$D + (S - this.$W) : S;
        if (O === y || O === $) {
          var N = this.clone().set(b, 1);
          N.$d[E](B), N.init(), this.$d = N.set(b, Math.min(this.$D, N.daysInMonth())).$d;
        } else
          E && this.$d[E](B);
        return this.init(), this;
      }, p.set = function(d, S) {
        return this.clone().$set(d, S);
      }, p.get = function(d) {
        return this[P.p(d)]();
      }, p.add = function(d, S) {
        var g, O = this;
        d = Number(d);
        var T = P.p(S), E = function(Y) {
          var oe = A(O);
          return P.w(oe.date(oe.date() + Math.round(Y * d)), O);
        };
        if (T === y)
          return this.set(y, this.$M + d);
        if (T === $)
          return this.set($, this.$y + d);
        if (T === c)
          return E(1);
        if (T === v)
          return E(7);
        var B = (g = {}, g[l] = a, g[o] = i, g[s] = r, g)[T] || 1, N = this.$d.getTime() + d * B;
        return P.w(N, this);
      }, p.subtract = function(d, S) {
        return this.add(-1 * d, S);
      }, p.format = function(d) {
        var S = this, g = this.$locale();
        if (!this.isValid())
          return g.invalidDate || u;
        var O = d || "YYYY-MM-DDTHH:mm:ssZ", T = P.z(this), E = this.$H, B = this.$m, N = this.$M, Y = g.weekdays, oe = g.months, re = function(W, le, Ue, Pe) {
          return W && (W[le] || W(S, O)) || Ue[le].slice(0, Pe);
        }, xe = function(W) {
          return P.s(E % 12 || 12, W, "0");
        }, Ce = g.meridiem || function(W, le, Ue) {
          var Pe = W < 12 ? "AM" : "PM";
          return Ue ? Pe.toLowerCase() : Pe;
        }, me = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: N + 1, MM: P.s(N + 1, 2, "0"), MMM: re(g.monthsShort, N, oe, 3), MMMM: re(oe, N), D: this.$D, DD: P.s(this.$D, 2, "0"), d: String(this.$W), dd: re(g.weekdaysMin, this.$W, Y, 2), ddd: re(g.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(E), HH: P.s(E, 2, "0"), h: xe(1), hh: xe(2), a: Ce(E, B, !0), A: Ce(E, B, !1), m: String(B), mm: P.s(B, 2, "0"), s: String(this.$s), ss: P.s(this.$s, 2, "0"), SSS: P.s(this.$ms, 3, "0"), Z: T };
        return O.replace(I, function(W, le) {
          return le || me[W] || T.replace(":", "");
        });
      }, p.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, p.diff = function(d, S, g) {
        var O, T = P.p(S), E = A(d), B = (E.utcOffset() - this.utcOffset()) * a, N = this - E, Y = P.m(this, E);
        return Y = (O = {}, O[$] = Y / 12, O[y] = Y, O[m] = Y / 3, O[v] = (N - B) / 6048e5, O[c] = (N - B) / 864e5, O[o] = N / i, O[l] = N / a, O[s] = N / r, O)[T] || N, g ? Y : P.a(Y);
      }, p.daysInMonth = function() {
        return this.endOf(y).$D;
      }, p.$locale = function() {
        return x[this.$L];
      }, p.locale = function(d, S) {
        if (!d)
          return this.$L;
        var g = this.clone(), O = R(d, S, !0);
        return O && (g.$L = O), g;
      }, p.clone = function() {
        return P.w(this.$d, this);
      }, p.toDate = function() {
        return new Date(this.valueOf());
      }, p.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, p.toISOString = function() {
        return this.$d.toISOString();
      }, p.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), st = se.prototype;
    return A.prototype = st, [["$ms", n], ["$s", s], ["$m", l], ["$H", o], ["$W", c], ["$M", y], ["$y", $], ["$D", b]].forEach(function(C) {
      st[C[1]] = function(p) {
        return this.$g(p, C[0], C[1]);
      };
    }), A.extend = function(C, p) {
      return C.$i || (C(p, se, A), C.$i = !0), A;
    }, A.locale = R, A.isDayjs = F, A.unix = function(C) {
      return A(1e3 * C);
    }, A.en = x[D], A.Ls = x, A.p = {}, A;
  });
})(Jt);
var gs = Jt.exports;
const ve = /* @__PURE__ */ Be(gs);
var Xt = { exports: {} };
(function(e, t) {
  (function(r, a) {
    e.exports = a();
  })(Ne, function() {
    var r = "minute", a = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
    return function(n, s, l) {
      var o = s.prototype;
      l.utc = function(u) {
        var w = { date: u, utc: !0, args: arguments };
        return new s(w);
      }, o.utc = function(u) {
        var w = l(this.toDate(), { locale: this.$L, utc: !0 });
        return u ? w.add(this.utcOffset(), r) : w;
      }, o.local = function() {
        return l(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var c = o.parse;
      o.parse = function(u) {
        u.utc && (this.$u = !0), this.$utils().u(u.$offset) || (this.$offset = u.$offset), c.call(this, u);
      };
      var v = o.init;
      o.init = function() {
        if (this.$u) {
          var u = this.$d;
          this.$y = u.getUTCFullYear(), this.$M = u.getUTCMonth(), this.$D = u.getUTCDate(), this.$W = u.getUTCDay(), this.$H = u.getUTCHours(), this.$m = u.getUTCMinutes(), this.$s = u.getUTCSeconds(), this.$ms = u.getUTCMilliseconds();
        } else
          v.call(this);
      };
      var y = o.utcOffset;
      o.utcOffset = function(u, w) {
        var I = this.$utils().u;
        if (I(u))
          return this.$u ? 0 : I(this.$offset) ? y.call(this) : this.$offset;
        if (typeof u == "string" && (u = function(D) {
          D === void 0 && (D = "");
          var x = D.match(a);
          if (!x)
            return null;
          var F = ("" + x[0]).match(i) || ["-", 0, 0], R = F[0], A = 60 * +F[1] + +F[2];
          return A === 0 ? 0 : R === "+" ? A : -A;
        }(u), u === null))
          return this;
        var M = Math.abs(u) <= 16 ? 60 * u : u, k = this;
        if (w)
          return k.$offset = M, k.$u = u === 0, k;
        if (u !== 0) {
          var L = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (k = this.local().add(M + L, r)).$offset = M, k.$x.$localOffset = L;
        } else
          k = this.utc();
        return k;
      };
      var m = o.format;
      o.format = function(u) {
        var w = u || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return m.call(this, w);
      }, o.valueOf = function() {
        var u = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * u;
      }, o.isUTC = function() {
        return !!this.$u;
      }, o.toISOString = function() {
        return this.toDate().toISOString();
      }, o.toString = function() {
        return this.toDate().toUTCString();
      };
      var $ = o.toDate;
      o.toDate = function(u) {
        return u === "s" && this.$offset ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : $.call(this);
      };
      var b = o.diff;
      o.diff = function(u, w, I) {
        if (u && this.$u === u.$u)
          return b.call(this, u, w, I);
        var M = this.local(), k = l(u).local();
        return b.call(M, k, w, I);
      };
    };
  });
})(Xt);
var ps = Xt.exports;
const ms = /* @__PURE__ */ Be(ps);
var Qt = { exports: {} };
(function(e, t) {
  (function(r, a) {
    e.exports = a();
  })(Ne, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, a = {};
    return function(i, n, s) {
      var l, o = function(m, $, b) {
        b === void 0 && (b = {});
        var u = new Date(m), w = function(I, M) {
          M === void 0 && (M = {});
          var k = M.timeZoneName || "short", L = I + "|" + k, D = a[L];
          return D || (D = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: I, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), a[L] = D), D;
        }($, b);
        return w.formatToParts(u);
      }, c = function(m, $) {
        for (var b = o(m, $), u = [], w = 0; w < b.length; w += 1) {
          var I = b[w], M = I.type, k = I.value, L = r[M];
          L >= 0 && (u[L] = parseInt(k, 10));
        }
        var D = u[3], x = D === 24 ? 0 : D, F = u[0] + "-" + u[1] + "-" + u[2] + " " + x + ":" + u[4] + ":" + u[5] + ":000", R = +m;
        return (s.utc(F).valueOf() - (R -= R % 1e3)) / 6e4;
      }, v = n.prototype;
      v.tz = function(m, $) {
        m === void 0 && (m = l);
        var b = this.utcOffset(), u = this.toDate(), w = u.toLocaleString("en-US", { timeZone: m }), I = Math.round((u - new Date(w)) / 1e3 / 60), M = s(w).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(u.getTimezoneOffset() / 15) - I, !0);
        if ($) {
          var k = M.utcOffset();
          M = M.add(b - k, "minute");
        }
        return M.$x.$timezone = m, M;
      }, v.offsetName = function(m) {
        var $ = this.$x.$timezone || s.tz.guess(), b = o(this.valueOf(), $, { timeZoneName: m }).find(function(u) {
          return u.type.toLowerCase() === "timezonename";
        });
        return b && b.value;
      };
      var y = v.startOf;
      v.startOf = function(m, $) {
        if (!this.$x || !this.$x.$timezone)
          return y.call(this, m, $);
        var b = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return y.call(b, m, $).tz(this.$x.$timezone, !0);
      }, s.tz = function(m, $, b) {
        var u = b && $, w = b || $ || l, I = c(+s(), w);
        if (typeof m != "string")
          return s(m).tz(w);
        var M = function(x, F, R) {
          var A = x - 60 * F * 1e3, P = c(A, R);
          if (F === P)
            return [A, F];
          var se = c(A -= 60 * (P - F) * 1e3, R);
          return P === se ? [A, P] : [x - 60 * Math.min(P, se) * 1e3, Math.max(P, se)];
        }(s.utc(m, u).valueOf(), I, w), k = M[0], L = M[1], D = s(k).utcOffset(L);
        return D.$x.$timezone = w, D;
      }, s.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, s.tz.setDefault = function(m) {
        l = m;
      };
    };
  });
})(Qt);
var vs = Qt.exports;
const ys = /* @__PURE__ */ Be(vs);
var er = { exports: {} };
(function(e, t) {
  (function(r, a) {
    e.exports = a();
  })(Ne, function() {
    return function(r, a, i) {
      r = r || {};
      var n = a.prototype, s = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function l(c, v, y, m) {
        return n.fromToBase(c, v, y, m);
      }
      i.en.relativeTime = s, n.fromToBase = function(c, v, y, m, $) {
        for (var b, u, w, I = y.$locale().relativeTime || s, M = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], k = M.length, L = 0; L < k; L += 1) {
          var D = M[L];
          D.d && (b = m ? i(c).diff(y, D.d, !0) : y.diff(c, D.d, !0));
          var x = (r.rounding || Math.round)(Math.abs(b));
          if (w = b > 0, x <= D.r || !D.r) {
            x <= 1 && L > 0 && (D = M[L - 1]);
            var F = I[D.l];
            $ && (x = $("" + x)), u = typeof F == "string" ? F.replace("%d", x) : F(x, v, D.l, w);
            break;
          }
        }
        if (v)
          return u;
        var R = w ? I.future : I.past;
        return typeof R == "function" ? R(u) : R.replace("%s", u);
      }, n.to = function(c, v) {
        return l(c, v, this, !0);
      }, n.from = function(c, v) {
        return l(c, v, this);
      };
      var o = function(c) {
        return c.$u ? i.utc() : i();
      };
      n.toNow = function(c) {
        return this.to(o(this), c);
      }, n.fromNow = function(c) {
        return this.from(o(this), c);
      };
    };
  });
})(er);
var _s = er.exports;
const bs = /* @__PURE__ */ Be(_s);
ve.extend(ms);
ve.extend(ys);
ve.extend(bs);
const ws = {
  name: "DateField",
  props: {
    modelValue: String,
    format: {
      type: String,
      default: "lll"
    },
    relative: Boolean
  },
  computed: {
    date() {
      return ve(this.modelValue).tz(ve.tz.guess());
    },
    formatted() {
      return this.relative ? ve().to(this.date) : this.date.format(this.format);
    },
    fullDate() {
      return { content: this.date.format(this.format), disabled: !this.relative };
    }
  }
}, $s = ["datetime"];
function xs(e, t, r, a, i, n) {
  const s = ur("tooltip");
  return h(), _("span", null, [
    de((h(), _("time", { datetime: r.modelValue }, [
      ce(U(n.formatted), 1)
    ], 8, $s)), [
      [s, n.fullDate]
    ])
  ]);
}
const Cs = /* @__PURE__ */ K(ws, [["render", xs]]), Ss = {
  components: {
    Actions: Ji,
    DateField: Cs
  },
  props: {
    record: {
      type: Object,
      required: !0
    },
    field: {
      type: Object,
      required: !0
    }
  },
  methods: { get: Qe },
  computed: {
    value() {
      return Qe(this.record, this.field.attribute);
    }
  }
};
function Ts(e, t, r, a, i, n) {
  const s = j("Actions"), l = j("DateField");
  return h(), _("td", {
    class: G({ "text-right": r.field.component == "action-field" })
  }, [
    V(e.$slots, "default", {}, () => [
      r.field.component == "action-field" ? (h(), q(s, {
        key: 0,
        record: r.record,
        actions: r.field.actions
      }, null, 8, ["record", "actions"])) : H("", !0),
      r.field.component === "date" ? (h(), q(l, {
        key: 1,
        modelValue: n.value,
        "onUpdate:modelValue": t[0] || (t[0] = (o) => n.value = o),
        format: r.field.meta.dateFormat,
        relative: r.field.meta.relative
      }, null, 8, ["modelValue", "format", "relative"])) : (h(), _(Z, { key: 2 }, [
        ce(U(n.value), 1)
      ], 64))
    ])
  ], 2);
}
const Os = /* @__PURE__ */ K(Ss, [["render", Ts]]);
function Ds(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "fill-rule": "evenodd",
      d: "M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ms(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "fill-rule": "evenodd",
      d: "M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    }),
    f("path", {
      "fill-rule": "evenodd",
      d: "M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Is(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "fill-rule": "evenodd",
      d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ps(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ue(e, t) {
  const r = t - e + 1;
  return Array.from({ length: r }, (a, i) => i + e);
}
function As(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const ke = "ellipsis";
function ks(e, t, r, a) {
  const n = t, s = Math.max(e - r, 1), l = Math.min(e + r, n), o = s > 1 + 2, c = l < n - 2;
  if (a) {
    const y = Math.min(2 * r + 5, t) - 2;
    if (!o && c)
      return [...ue(1, y), ke, n];
    if (o && !c) {
      const m = ue(n - y + 1, n);
      return [1, ke, ...m];
    }
    if (o && c) {
      const m = ue(s, l);
      return [1, ke, ...m, ke, n];
    }
    return ue(1, n);
  } else {
    const v = r * 2 + 1;
    return t < v ? ue(1, n) : e <= r + 1 ? ue(1, v) : t - e <= r ? ue(t - v + 1, n) : ue(s, l);
  }
}
const Es = {
  components: {
    ChevronRightIcon: Ps,
    ChevronLeftIcon: Is,
    ChevronDoubleLeftIcon: Ds,
    ChevronDoubleRightIcon: Ms
  },
  emits: ["change"],
  props: {
    pagination: {
      type: Object,
      default() {
        return {
          perPage: 25,
          page: 1,
          total_pages: 0,
          record_count: 0
        };
      }
    },
    siblingCount: {
      type: Number,
      default() {
        return 1;
      }
    },
    showEdges: {
      type: Boolean,
      default() {
        return !0;
      }
    },
    firstPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pageItems() {
      return As(ks(this.pagination.page, this.pagination.total_pages, this.siblingCount, this.showEdges));
    },
    lastPage() {
      return this.pagination.total_pages;
    },
    isOnFirstPage() {
      return this.pagination.page === this.firstPage;
    },
    isOnLastPage() {
      return this.pagination.page === this.lastPage;
    },
    fromCount() {
      return (this.pagination.page - 1) * this.pagination.perPage + 1;
    },
    toCount() {
      return Math.min(this.pagination.page * this.pagination.perPage, this.pagination.record_count);
    }
  },
  created() {
  },
  methods: {
    change(e) {
      this.$emit("change", e);
    },
    forward() {
      this.pagination.page !== this.totalPages && this.change(this.pagination.page + 1);
    },
    back() {
      this.pagination.page !== 1 && this.change(this.pagination.page - 1);
    }
  }
}, Fs = {
  key: 0,
  class: "bg-white py-8 mt-4 flex items-center border-t dark:border-transparent dark:bg-gray-800 dark:text-gray-200"
}, js = { class: "w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8" }, Ls = {
  key: 0,
  class: "block sm:flex-1 sm:flex sm:items-center justify-start xl:justify-between"
}, zs = { class: "inline text-sm text-gray-700 dark:text-gray-400" }, Rs = { class: "font-medium" }, Ns = { class: "font-medium" }, Bs = { class: "font-medium" }, Us = { class: "flex items-center ml-0 xl:ml-auto" }, Hs = /* @__PURE__ */ f("span", { class: "sr-only" }, "Previous", -1), Vs = ["onClick", "innerHTML"], Gs = ["onClick"], Ys = /* @__PURE__ */ f("span", { class: "sr-only" }, "Next", -1);
function qs(e, t, r, a, i, n) {
  const s = j("ChevronDoubleLeftIcon"), l = j("ChevronLeftIcon"), o = j("ChevronRightIcon"), c = j("ChevronDoubleRightIcon");
  return r.pagination && r.pagination.record_count > 0 ? (h(), _("nav", Fs, [
    f("div", js, [
      r.pagination.record_count > 0 ? (h(), _("div", Ls, [
        f("div", null, [
          V(e.$slots, "default"),
          f("p", zs, [
            ce(" Showing " + U(" ") + " "),
            f("span", Rs, U(n.fromCount), 1),
            ce(" " + U(" ") + " to " + U(" ") + " "),
            f("span", Ns, U(n.toCount), 1),
            ce(" " + U(" ") + " of " + U(" ") + " "),
            f("span", Bs, U(r.pagination.record_count), 1),
            ce(" " + U(" ") + " results ")
          ])
        ])
      ])) : H("", !0),
      f("div", Us, [
        f("span", {
          onClick: t[0] || (t[0] = (v) => n.change(1)),
          class: G([n.isOnFirstPage ? "text-gray-400 dark:bg-gray-700 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 ", "relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          Hs,
          J(s, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2),
        f("span", {
          onClick: t[1] || (t[1] = (...v) => n.back && n.back(...v)),
          class: G([n.isOnFirstPage ? "text-gray-400 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-700", "relative inline-flex items-center px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          J(l, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2),
        (h(!0), _(Z, null, X(n.pageItems, (v, y) => (h(), _(Z, { key: y }, [
          v.type == "page" ? (h(), _("span", {
            key: 0,
            onClick: (m) => n.change(v.value),
            class: G([v.value == r.pagination.page ? "cursor-not-allowed bg-gray-100 dark:bg-gray-700" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700", "relative inline-flex items-center px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"]),
            innerHTML: v.value
          }, null, 10, Vs)) : H("", !0),
          v.type == "ellipsis" ? (h(), _("span", {
            key: 1,
            onClick: (m) => n.change(v.value),
            class: G(["relative inline-flex items-center px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700"])
          }, " ... ", 8, Gs)) : H("", !0)
        ], 64))), 128)),
        f("span", {
          onClick: t[2] || (t[2] = (...v) => n.forward && n.forward(...v)),
          class: G([n.isOnLastPage ? "text-gray-400 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700", "relative inline-flex items-center px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          J(o, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2),
        f("span", {
          onClick: t[3] || (t[3] = (v) => n.change(this.pagination.total_pages)),
          class: G([n.isOnLastPage ? "text-gray-400 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700", "relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          Ys,
          J(c, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2)
      ])
    ])
  ])) : H("", !0);
}
const Ws = /* @__PURE__ */ K(Es, [["render", qs]]), Zs = {
  props: {
    modelValue: {
      type: [Number, String],
      default: 15,
      required: !1
    },
    options: {
      type: Array,
      default() {
        return [15, 25, 30, 50, 100];
      },
      required: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: this.modelValue
    };
  },
  watch: {
    selected(e) {
      this.$emit("update:modelValue", e);
    }
  }
}, Ks = ["value"];
function Js(e, t, r, a, i, n) {
  return de((h(), _("select", {
    ref: "input",
    "onUpdate:modelValue": t[0] || (t[0] = (s) => i.selected = s),
    class: "form-select py-2 inline-flex"
  }, [
    (h(!0), _(Z, null, X(r.options, (s) => (h(), _("option", {
      key: s,
      value: s
    }, U(s), 9, Ks))), 128))
  ], 512)), [
    [cr, i.selected]
  ]);
}
const Xs = /* @__PURE__ */ K(Zs, [["render", Js]]);
function Qs(e, t) {
  var r = [];
  return Nt(e, function(a, i, n) {
    t(a, i, n) && r.push(a);
  }), r;
}
var eo = 1, to = 2;
function ro(e, t, r, a) {
  var i = r.length, n = i, s = !a;
  if (e == null)
    return !n;
  for (e = Object(e); i--; ) {
    var l = r[i];
    if (s && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++i < n; ) {
    l = r[i];
    var o = l[0], c = e[o], v = l[1];
    if (s && l[2]) {
      if (c === void 0 && !(o in e))
        return !1;
    } else {
      var y = new ne();
      if (a)
        var m = a(c, v, o, e, t, y);
      if (!(m === void 0 ? rt(v, c, eo | to, a, y) : m))
        return !1;
    }
  }
  return !0;
}
function tr(e) {
  return e === e && !be(e);
}
function no(e) {
  for (var t = Fe(e), r = t.length; r--; ) {
    var a = t[r], i = e[a];
    t[r] = [a, i, tr(i)];
  }
  return t;
}
function rr(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function ao(e) {
  var t = no(e);
  return t.length == 1 && t[0][2] ? rr(t[0][0], t[0][1]) : function(r) {
    return r === e || ro(r, e, t);
  };
}
function io(e, t) {
  return e != null && t in Object(e);
}
function so(e, t, r) {
  t = Zt(t, e);
  for (var a = -1, i = t.length, n = !1; ++a < i; ) {
    var s = Re(t[a]);
    if (!(n = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return n || ++a != i ? n : (i = e == null ? 0 : e.length, !!i && et(i) && jt(s, i) && (ee(e) || Et(e)));
}
function oo(e, t) {
  return e != null && so(e, t, io);
}
var lo = 1, uo = 2;
function co(e, t) {
  return nt(e) && tr(t) ? rr(Re(e), t) : function(r) {
    var a = Qe(r, e);
    return a === void 0 && a === t ? oo(r, e) : rt(t, a, lo | uo);
  };
}
function fo(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function ho(e) {
  return function(t) {
    return Kt(t, e);
  };
}
function go(e) {
  return nt(e) ? fo(Re(e)) : ho(e);
}
function it(e) {
  return typeof e == "function" ? e : e == null ? Bt : typeof e == "object" ? ee(e) ? co(e[0], e[1]) : ao(e) : go(e);
}
function Me(e, t) {
  var r = ee(e) ? Vt : Qs;
  return r(e, it(t));
}
const po = {
  components: {
    Dropdown: qt,
    MagnifyingGlassIcon: Gi
  },
  props: {
    rows: {
      type: Object,
      required: !0
    },
    onAdd: {
      type: Function,
      required: !0
    }
  },
  computed: {
    hasRows() {
      return Me(this.rows, (e) => e.field !== "global").length > 0;
    },
    rowsLeft() {
      return Me(this.rows, (e) => this.showRow(e)).length > 0;
    }
  },
  methods: {
    showRow(e) {
      return !(e.field === "global" || e.enabled);
    },
    enableSearch(e) {
      this.onAdd(e), this.$refs.dropdown.hide();
    }
  }
}, mo = {
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, vo = {
  class: "divide-y divide-gray-200 dark:divide-gray-600",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
}, yo = ["onClick"];
function _o(e, t, r, a, i, n) {
  const s = j("MagnifyingGlassIcon"), l = j("Dropdown");
  return n.hasRows ? (h(), q(l, {
    key: 0,
    ref: "dropdown",
    disabled: !n.rowsLeft,
    "close-on-click": !0,
    class: "w-auto"
  }, {
    button: Q(() => [
      J(s, { class: "h-4 w-4 my-1" })
    ]),
    default: Q(() => [
      f("div", mo, [
        f("div", vo, [
          (h(!0), _(Z, null, X(r.rows, (o) => (h(), _("div", {
            key: o.field,
            class: "px-2"
          }, [
            de(f("button", {
              onClick: Ie((c) => n.enableSearch(o.field), ["prevent"]),
              class: "text-left w-full my-2 py-2 px-4 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300",
              role: "menuitem"
            }, U(o.label), 9, yo), [
              [ye, n.showRow(o)]
            ])
          ]))), 128))
        ])
      ])
    ]),
    _: 1
  }, 8, ["disabled"])) : H("", !0);
}
const bo = /* @__PURE__ */ K(po, [["render", _o]]);
function wo(e) {
  return function(t, r, a) {
    var i = Object(t);
    if (!tt(t)) {
      var n = it(r);
      t = Fe(t), r = function(l) {
        return n(i[l], l, i);
      };
    }
    var s = e(t, r, a);
    return s > -1 ? i[n ? t[s] : s] : void 0;
  };
}
function $o(e, t, r, a) {
  for (var i = e.length, n = r + (a ? 1 : -1); a ? n-- : ++n < i; )
    if (t(e[n], n, e))
      return n;
  return -1;
}
var It = 1 / 0, xo = 17976931348623157e292;
function Co(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Xe(e), e === It || e === -It) {
    var t = e < 0 ? -1 : 1;
    return t * xo;
  }
  return e === e ? e : 0;
}
function So(e) {
  var t = Co(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var To = Math.max;
function Oo(e, t, r) {
  var a = e == null ? 0 : e.length;
  if (!a)
    return -1;
  var i = r == null ? 0 : So(r);
  return i < 0 && (i = To(a + i, 0)), $o(e, it(t), i);
}
var Do = wo(Oo);
const nr = Do, Mo = {
  components: {
    Dropdown: qt,
    EyeIcon: Vi
  },
  props: {
    columns: {
      type: Object,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  methods: {
    toggle(e) {
      let t = this.columns.findIndex((r) => r.attribute == e);
      this.onChange(t, !this.columns[t].visible);
    }
  },
  computed: {
    allowableColumns() {
      return this.columns.filter((e) => e.visibility);
    },
    hasDisabledFilter() {
      return !!nr(this.columns, (e) => !e.visible);
    }
  }
}, Io = {
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, Po = { class: "" }, Ao = { class: "divide-y divide-gray-200 dark:divide-gray-600" }, ko = {
  class: "text-sm font-medium text-gray-900 dark:text-gray-400",
  id: "privacy-option-1-label"
}, Eo = ["onClick"], Fo = /* @__PURE__ */ f("span", { class: "sr-only" }, "Use setting", -1);
function jo(e, t, r, a, i, n) {
  const s = j("EyeIcon"), l = j("Dropdown");
  return h(), q(l, {
    placement: "bottom-end",
    active: n.hasDisabledFilter
  }, {
    button: Q(() => [
      J(s, { class: "h-4 w-4 my-1" })
    ]),
    default: Q(() => [
      f("div", Io, [
        f("div", Po, [
          f("ul", Ao, [
            (h(!0), _(Z, null, X(n.allowableColumns, (o, c) => (h(), _("li", {
              class: "py-2 px-4 flex items-center justify-between",
              key: o.attribute
            }, [
              f("p", ko, U(o.name), 1),
              f("button", {
                onClick: Ie((v) => n.toggle(o.attribute), ["prevent"]),
                type: "button",
                class: G(["ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", { "bg-green-500": o.visible, "bg-gray-200": !o.visible }]),
                "aria-pressed": "true",
                "aria-labelledby": "privacy-option-1-label",
                "aria-describedby": "privacy-option-1-description"
              }, [
                Fo,
                f("span", {
                  "aria-hidden": "true",
                  class: G([[o.visible ? "translate-x-5" : "translate-x-0"], "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                }, null, 2)
              ], 10, Eo)
            ]))), 128))
          ])
        ])
      ])
    ]),
    _: 1
  }, 8, ["active"]);
}
const Lo = /* @__PURE__ */ K(Mo, [["render", jo]]), zo = {
  props: {
    filters: {
      type: Object,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    },
    errors: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    clear(e) {
      this.onChange(e, null);
    },
    handleChange: Gt(function(e, t) {
      this.onChange(e, t);
    }, 300)
  },
  computed: {
    hasEnabledFilter() {
      return nr(this.filters, (e, t) => e.value != "" && e.value != null) !== void 0;
    }
  }
}, Ro = { class: "relative inline-flex" }, No = ["value", "onChange"], Bo = {
  value: "",
  disabled: ""
}, Uo = ["value"], Ho = ["value", "onInput", "placeholder"];
function Vo(e, t, r, a, i, n) {
  return h(!0), _(Z, null, X(r.filters, (s, l) => (h(), _("div", {
    key: s.field
  }, [
    f("div", Ro, [
      s.component == "select" ? (h(), _("select", {
        key: 0,
        value: s.value,
        onChange: (o) => n.handleChange(l, o.target.value),
        class: G(["form-select", { error: r.errors[s.field] }])
      }, [
        f("option", Bo, U(s.label), 1),
        (h(!0), _(Z, null, X(s.options, (o) => (h(), _("option", {
          value: o.value,
          key: o.value
        }, U(o.label), 9, Uo))), 128))
      ], 42, No)) : H("", !0),
      s.component == "text" ? (h(), _("input", {
        key: 1,
        type: "text",
        value: s.value,
        onInput: (o) => n.handleChange(l, o.target.value),
        class: G(["form-input", { error: r.errors[s.field] }]),
        placeholder: s.label
      }, null, 42, Ho)) : H("", !0)
    ])
  ]))), 128);
}
const Go = /* @__PURE__ */ K(zo, [["render", Vo]]);
function Yo(e, t) {
  return h(), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    f("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const qo = {
  props: {
    modelValue: {
      type: String,
      default: "",
      required: !1
    }
  },
  components: {
    MagnifyingGlassIcon: Yo
  },
  methods: {
    update(e) {
      this.$emit("update:modelValue", e);
    }
  }
}, Wo = { class: "relative" }, Zo = ["value"], Ko = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" };
function Jo(e, t, r, a, i, n) {
  const s = j("MagnifyingGlassIcon");
  return h(), _("div", Wo, [
    f("input", {
      class: "form-input pr-12",
      placeholder: "Search...",
      value: r.modelValue,
      type: "text",
      onInput: t[0] || (t[0] = (l) => n.update(l.target.value))
    }, null, 40, Zo),
    f("div", Ko, [
      J(s, {
        class: "h-5 w-5 text-gray-400",
        viewBox: "0 0 20 20",
        fill: "currentColor"
      })
    ])
  ]);
}
const Xo = /* @__PURE__ */ K(qo, [["render", Jo]]), Qo = {
  props: {
    rows: {
      type: Object,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    },
    onRemove: {
      type: Function,
      required: !0
    }
  },
  methods: {
    searchOptionIsEnabled(e) {
      return this.rows[e].enabled;
    },
    focus(e) {
      const t = this.$refs[e];
      if (t.length === 1)
        return t[0].focus();
      this.$refs[e].focus();
    }
  },
  computed: {
    hasFiltersEnabled() {
      return Object.keys(this.enabledFilters || {}).length > 0;
    },
    enabledFilters() {
      return Me(this.rows, (e) => this.searchOptionIsEnabled(e.field) && e.field !== "global");
    }
  }
}, el = { class: "w-full bg-white dark:bg-gray-800 px-4 py-8 border dark:border-none mb-4 rounded-lg mt-4" }, tl = { class: "flex items-center space-x-4" }, rl = { class: "space-y-8" }, nl = { class: "text-sm" }, al = { class: "flex-grow space-y-8" }, il = { class: "flex-grow relative" }, sl = ["value", "onInput"], ol = { class: "absolute inset-y-0 right-0 pr-3 flex items-center" }, ll = ["onClick"], ul = /* @__PURE__ */ f("span", { class: "sr-only" }, "Remove search", -1), cl = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), dl = [
  ul,
  cl
];
function fl(e, t, r, a, i, n) {
  return de((h(), _("div", el, [
    f("div", tl, [
      f("div", rl, [
        (h(!0), _(Z, null, X(n.enabledFilters, (s, l) => (h(), _("div", {
          key: l,
          class: "h-8 flex form-label items-center"
        }, [
          f("span", nl, U(s.label), 1)
        ]))), 128))
      ]),
      f("div", al, [
        (h(!0), _(Z, null, X(n.enabledFilters, (s, l) => (h(), _("div", {
          key: l,
          class: "h-8 flex items-center"
        }, [
          f("div", il, [
            f("input", {
              class: "form-input",
              ref_for: !0,
              ref: s.field,
              value: s.value,
              type: "text",
              onInput: (o) => r.onChange(s.field, o.target.value)
            }, null, 40, sl),
            f("div", ol, [
              f("button", {
                onClick: Ie((o) => r.onRemove(s.field), ["prevent"]),
                class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, dl, 8, ll)
            ])
          ])
        ]))), 128))
      ])
    ])
  ], 512)), [
    [ye, n.hasFiltersEnabled]
  ]);
}
const hl = /* @__PURE__ */ K(Qo, [["render", fl]]), gl = {
  components: {
    PerPageSelect: Xs,
    Pagination: Ws,
    SearchColumnDropdown: bo,
    ColumnVisibilityToggles: Lo,
    CustomFilters: Go,
    GlobalSearch: Xo,
    SearchFields: hl,
    THeadCell: es,
    TBodyCell: Os
  },
  props: {
    modelValue: Object,
    records: {
      type: Array,
      default: () => [],
      required: !1
    },
    pagination: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    errors: {
      type: Object,
      default() {
        return {};
      }
    },
    hideFilters: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      table: this.modelValue
    };
  },
  methods: {
    handleSort(e) {
      this.table.page = 1, this.table.sort === `-${e}` ? this.table.sort = null : this.table.sort = this.table.sort === e ? `-${e}` : e;
    },
    changePage(e) {
      this.table.page = e;
    },
    removeSearch(e) {
      this.table.search[e].enabled = !1, this.table.search[e].value = null;
    },
    enableSearch(e) {
      this.table.search[e].enabled = !0, this.$nextTick(() => {
        this.$refs.rows.focus(e);
      });
    },
    /**
     * Update search values
     *
     * @param key
     * @param value
     */
    updateSearchValue(e, t) {
      this.table.search[e].value = t;
    },
    /**
     * Update global search value
     *
     * @param value
     */
    updateGlobalSearchValue(e) {
      this.updateSearchValue("global", e);
    },
    /**
     * Update filter values
     *
     * @param key
     * @param value
     */
    updateFilterValue(e, t) {
      this.table.filters[e].value = t;
    },
    /**
     * Update column visibility
     *
     * @param {string} column
     * @param {boolean} status
     */
    updateColumnVisibility(e, t) {
      this.table.columns[e].visible = t;
    }
  },
  watch: {
    table: {
      deep: !0,
      handler(e, t) {
        this.$emit("modelValue:input", this.table);
      }
    }
  },
  computed: {
    hasFilters() {
      return Object.keys(this.table.filters || {}).length > 0;
    },
    hasColumns() {
      return Me(this.table.columns, (e) => e.visibility).length > 0;
    },
    hasSearchRows() {
      return Me(this.table.search, (e) => e.field !== "global").length > 0;
    }
  }
}, pl = {
  key: 0,
  class: "flex md:space-x-4 md:space-y-0 space-y-4 flex-col md:flex-row"
}, ml = {
  key: 0,
  class: "flex-grow min-w-min"
}, vl = { class: "mt-8 flex flex-col w-full rounded-lg overflow-hidden" }, yl = { class: "overflow-x-auto w-full" }, _l = { class: "overflow-x w-full" }, bl = { class: "ring-1 dark:shadow-none ring-black ring-opacity-5 overflow-x-scroll w-full md:rounded-t-lg" }, wl = { class: "table" }, $l = { class: "bg-gray-50 dark:bg-gray-700 rounded dark:text-gray-200" }, xl = { class: "bg-white text-gray-800 divide-y divide-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:divide-gray-800" }, Cl = { class: "inline-flex mr-4" };
function Sl(e, t, r, a, i, n) {
  const s = j("GlobalSearch"), l = j("CustomFilters"), o = j("SearchColumnDropdown"), c = j("ColumnVisibilityToggles"), v = j("SearchFields"), y = j("THeadCell"), m = j("TBodyCell"), $ = j("PerPageSelect"), b = j("Pagination");
  return h(), _("div", null, [
    r.hideFilters ? H("", !0) : (h(), _("div", pl, [
      V(e.$slots, "globalSearch", {
        search: i.table.search,
        updateSearchValue: n.updateGlobalSearchValue
      }, () => [
        i.table.search && i.table.search.global ? (h(), _("div", ml, [
          J(s, {
            modelValue: i.table.search.global.value,
            "onUpdate:modelValue": t[0] || (t[0] = (u) => i.table.search.global.value = u)
          }, null, 8, ["modelValue"])
        ])) : H("", !0)
      ]),
      V(e.$slots, "filters", {
        hasFilters: n.hasFilters,
        filters: i.table.filters,
        changeFilterValue: n.updateFilterValue
      }, () => [
        n.hasFilters ? (h(), q(l, {
          key: 0,
          filters: i.table.filters,
          errors: r.errors,
          "on-change": n.updateFilterValue
        }, null, 8, ["filters", "errors", "on-change"])) : H("", !0)
      ]),
      V(e.$slots, "addSearch", {
        hasSearchRows: n.hasSearchRows,
        search: i.table.search,
        onAdd: n.enableSearch
      }, () => [
        n.hasSearchRows ? (h(), q(o, {
          key: 0,
          rows: i.table.search,
          "on-add": n.enableSearch
        }, null, 8, ["rows", "on-add"])) : H("", !0)
      ]),
      V(e.$slots, "toggleColumns", {
        hasColumns: n.hasColumns,
        columns: i.table.columns,
        change: n.updateColumnVisibility
      }, () => [
        n.hasColumns ? (h(), q(c, {
          key: 0,
          columns: i.table.columns,
          "on-change": n.updateColumnVisibility
        }, null, 8, ["columns", "on-change"])) : H("", !0)
      ])
    ])),
    V(e.$slots, "searchRows", {
      hasSearches: n.hasSearchRows,
      search: i.table.search,
      removeSearch: n.removeSearch,
      updateValue: n.updateSearchValue
    }, () => [
      n.hasSearchRows ? (h(), q(v, {
        key: 0,
        ref: "rows",
        rows: i.table.search,
        "on-remove": n.removeSearch,
        "on-change": n.updateSearchValue
      }, null, 8, ["rows", "on-remove", "on-change"])) : H("", !0)
    ]),
    V(e.$slots, "table", {}, () => [
      f("div", vl, [
        f("div", yl, [
          f("div", _l, [
            f("div", bl, [
              f("table", wl, [
                f("thead", $l, [
                  V(e.$slots, "head", {
                    columns: i.table.columns,
                    sortHandler: n.handleSort
                  }, () => [
                    f("tr", null, [
                      (h(!0), _(Z, null, X(i.table.columns, (u) => (h(), q(y, {
                        cell: u,
                        sort: i.table.sort,
                        onSort: n.handleSort,
                        class: "dark:bg-gray-800"
                      }, null, 8, ["cell", "sort", "onSort"]))), 256))
                    ])
                  ])
                ]),
                f("tbody", xl, [
                  V(e.$slots, "body", {
                    records: r.records,
                    columns: i.table.columns
                  }, () => [
                    (h(!0), _(Z, null, X(r.records, (u) => (h(), _("tr", null, [
                      (h(!0), _(Z, null, X(i.table.columns, (w) => de((h(), q(m, {
                        record: u,
                        field: w
                      }, null, 8, ["record", "field"])), [
                        [ye, w.visible]
                      ])), 256)),
                      V(e.$slots, "action", { record: u })
                    ]))), 256))
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    V(e.$slots, "pagination", {}, () => [
      J(b, {
        pagination: r.pagination,
        onChange: n.changePage
      }, {
        default: Q(() => [
          f("div", Cl, [
            J($, {
              modelValue: i.table.perPage,
              "onUpdate:modelValue": t[1] || (t[1] = (u) => i.table.perPage = u)
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["pagination", "onChange"])
    ])
  ]);
}
const Dl = /* @__PURE__ */ K(gl, [["render", Sl]]);
export {
  Ji as Actions,
  Lo as ColumnVisibilityToggles,
  Go as CustomFilters,
  qt as Dropdown,
  Xo as GlobalSearch,
  Ol as HasInertiaTable,
  Ws as Pagination,
  Xs as PerPageSelect,
  bo as SearchColumnDropdown,
  hl as SearchFields,
  Os as TBodyCell,
  es as THeadCell,
  Dl as Table
};
