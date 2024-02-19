import { defineComponent as rr, ref as nr, onMounted as ar, onUnmounted as ir, openBlock as g, createElementBlock as m, createElementVNode as h, renderSlot as k, withDirectives as J, withModifiers as be, vShow as le, createVNode as z, Transition as sr, withCtx as U, normalizeClass as E, resolveComponent as O, createBlock as P, Fragment as F, renderList as N, createTextVNode as X, toDisplayString as I, createCommentVNode as A, resolveDirective as or, vModelSelect as lr } from "vue";
function ur(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function cr(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var fr = cr();
const dr = fr;
function hr(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var gr = typeof global == "object" && global && global.Object === Object && global;
const Tt = gr;
var pr = typeof self == "object" && self && self.Object === Object && self, vr = Tt || pr || Function("return this")();
const V = vr;
var mr = V.Symbol;
const Q = mr;
var Dt = Object.prototype, yr = Dt.hasOwnProperty, _r = Dt.toString, ge = Q ? Q.toStringTag : void 0;
function br(e) {
  var t = yr.call(e, ge), r = e[ge];
  try {
    e[ge] = void 0;
    var n = !0;
  } catch {
  }
  var i = _r.call(e);
  return n && (t ? e[ge] = r : delete e[ge]), i;
}
var $r = Object.prototype, wr = $r.toString;
function xr(e) {
  return wr.call(e);
}
var Sr = "[object Null]", Or = "[object Undefined]", et = Q ? Q.toStringTag : void 0;
function de(e) {
  return e == null ? e === void 0 ? Or : Sr : et && et in Object(e) ? br(e) : xr(e);
}
function ue(e) {
  return e != null && typeof e == "object";
}
var Cr = "[object Arguments]";
function tt(e) {
  return ue(e) && de(e) == Cr;
}
var Mt = Object.prototype, Tr = Mt.hasOwnProperty, Dr = Mt.propertyIsEnumerable, Mr = tt(function() {
  return arguments;
}()) ? tt : function(e) {
  return ue(e) && Tr.call(e, "callee") && !Dr.call(e, "callee");
};
const It = Mr;
var Ir = Array.isArray;
const H = Ir;
function Ar() {
  return !1;
}
var At = typeof exports == "object" && exports && !exports.nodeType && exports, rt = At && typeof module == "object" && module && !module.nodeType && module, kr = rt && rt.exports === At, nt = kr ? V.Buffer : void 0, Er = nt ? nt.isBuffer : void 0, Pr = Er || Ar;
const je = Pr;
var Fr = 9007199254740991, Lr = /^(?:0|[1-9]\d*)$/;
function kt(e, t) {
  var r = typeof e;
  return t = t ?? Fr, !!t && (r == "number" || r != "symbol" && Lr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Rr = 9007199254740991;
function Ye(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rr;
}
var jr = "[object Arguments]", zr = "[object Array]", Nr = "[object Boolean]", Ur = "[object Date]", Hr = "[object Error]", Br = "[object Function]", Vr = "[object Map]", Gr = "[object Number]", Yr = "[object Object]", qr = "[object RegExp]", Wr = "[object Set]", Zr = "[object String]", Kr = "[object WeakMap]", Xr = "[object ArrayBuffer]", Jr = "[object DataView]", Qr = "[object Float32Array]", en = "[object Float64Array]", tn = "[object Int8Array]", rn = "[object Int16Array]", nn = "[object Int32Array]", an = "[object Uint8Array]", sn = "[object Uint8ClampedArray]", on = "[object Uint16Array]", ln = "[object Uint32Array]", C = {};
C[Qr] = C[en] = C[tn] = C[rn] = C[nn] = C[an] = C[sn] = C[on] = C[ln] = !0;
C[jr] = C[zr] = C[Xr] = C[Nr] = C[Jr] = C[Ur] = C[Hr] = C[Br] = C[Vr] = C[Gr] = C[Yr] = C[qr] = C[Wr] = C[Zr] = C[Kr] = !1;
function un(e) {
  return ue(e) && Ye(e.length) && !!C[de(e)];
}
function cn(e) {
  return function(t) {
    return e(t);
  };
}
var Et = typeof exports == "object" && exports && !exports.nodeType && exports, pe = Et && typeof module == "object" && module && !module.nodeType && module, fn = pe && pe.exports === Et, Pe = fn && Tt.process, dn = function() {
  try {
    var e = pe && pe.require && pe.require("util").types;
    return e || Pe && Pe.binding && Pe.binding("util");
  } catch {
  }
}();
const at = dn;
var it = at && at.isTypedArray, hn = it ? cn(it) : un;
const Pt = hn;
var gn = Object.prototype, pn = gn.hasOwnProperty;
function vn(e, t) {
  var r = H(e), n = !r && It(e), i = !r && !n && je(e), a = !r && !n && !i && Pt(e), s = r || n || i || a, o = s ? hr(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || pn.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    kt(c, l))) && o.push(c);
  return o;
}
var mn = Object.prototype;
function yn(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || mn;
  return e === r;
}
function _n(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var bn = _n(Object.keys, Object);
const $n = bn;
var wn = Object.prototype, xn = wn.hasOwnProperty;
function Sn(e) {
  if (!yn(e))
    return $n(e);
  var t = [];
  for (var r in Object(e))
    xn.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ce(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var On = "[object AsyncFunction]", Cn = "[object Function]", Tn = "[object GeneratorFunction]", Dn = "[object Proxy]";
function Ft(e) {
  if (!ce(e))
    return !1;
  var t = de(e);
  return t == Cn || t == Tn || t == On || t == Dn;
}
function qe(e) {
  return e != null && Ye(e.length) && !Ft(e);
}
function Te(e) {
  return qe(e) ? vn(e) : Sn(e);
}
function Mn(e, t) {
  return e && dr(e, t, Te);
}
function In(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!qe(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var An = In(Mn);
const Lt = An;
function Rt(e) {
  return e;
}
function kn(e) {
  return typeof e == "function" ? e : Rt;
}
function En(e, t) {
  var r = H(e) ? ur : Lt;
  return r(e, kn(t));
}
function Pn() {
  this.__data__ = [], this.size = 0;
}
function jt(e, t) {
  return e === t || e !== e && t !== t;
}
function De(e, t) {
  for (var r = e.length; r--; )
    if (jt(e[r][0], t))
      return r;
  return -1;
}
var Fn = Array.prototype, Ln = Fn.splice;
function Rn(e) {
  var t = this.__data__, r = De(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ln.call(t, r, 1), --this.size, !0;
}
function jn(e) {
  var t = this.__data__, r = De(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function zn(e) {
  return De(this.__data__, e) > -1;
}
function Nn(e, t) {
  var r = this.__data__, n = De(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function W(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
W.prototype.clear = Pn;
W.prototype.delete = Rn;
W.prototype.get = jn;
W.prototype.has = zn;
W.prototype.set = Nn;
function Un() {
  this.__data__ = new W(), this.size = 0;
}
function Hn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Bn(e) {
  return this.__data__.get(e);
}
function Vn(e) {
  return this.__data__.has(e);
}
var Gn = V["__core-js_shared__"];
const Fe = Gn;
var st = function() {
  var e = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yn(e) {
  return !!st && st in e;
}
var qn = Function.prototype, Wn = qn.toString;
function se(e) {
  if (e != null) {
    try {
      return Wn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Zn = /[\\^$.*+?()[\]{}|]/g, Kn = /^\[object .+?Constructor\]$/, Xn = Function.prototype, Jn = Object.prototype, Qn = Xn.toString, ea = Jn.hasOwnProperty, ta = RegExp(
  "^" + Qn.call(ea).replace(Zn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ra(e) {
  if (!ce(e) || Yn(e))
    return !1;
  var t = Ft(e) ? ta : Kn;
  return t.test(se(e));
}
function na(e, t) {
  return e == null ? void 0 : e[t];
}
function he(e, t) {
  var r = na(e, t);
  return ra(r) ? r : void 0;
}
var aa = he(V, "Map");
const me = aa;
var ia = he(Object, "create");
const ye = ia;
function sa() {
  this.__data__ = ye ? ye(null) : {}, this.size = 0;
}
function oa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var la = "__lodash_hash_undefined__", ua = Object.prototype, ca = ua.hasOwnProperty;
function fa(e) {
  var t = this.__data__;
  if (ye) {
    var r = t[e];
    return r === la ? void 0 : r;
  }
  return ca.call(t, e) ? t[e] : void 0;
}
var da = Object.prototype, ha = da.hasOwnProperty;
function ga(e) {
  var t = this.__data__;
  return ye ? t[e] !== void 0 : ha.call(t, e);
}
var pa = "__lodash_hash_undefined__";
function va(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ye && t === void 0 ? pa : t, this;
}
function ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ie.prototype.clear = sa;
ie.prototype.delete = oa;
ie.prototype.get = fa;
ie.prototype.has = ga;
ie.prototype.set = va;
function ma() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new (me || W)(),
    string: new ie()
  };
}
function ya(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Me(e, t) {
  var r = e.__data__;
  return ya(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function _a(e) {
  var t = Me(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ba(e) {
  return Me(this, e).get(e);
}
function $a(e) {
  return Me(this, e).has(e);
}
function wa(e, t) {
  var r = Me(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Z.prototype.clear = ma;
Z.prototype.delete = _a;
Z.prototype.get = ba;
Z.prototype.has = $a;
Z.prototype.set = wa;
var xa = 200;
function Sa(e, t) {
  var r = this.__data__;
  if (r instanceof W) {
    var n = r.__data__;
    if (!me || n.length < xa - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Z(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function q(e) {
  var t = this.__data__ = new W(e);
  this.size = t.size;
}
q.prototype.clear = Un;
q.prototype.delete = Hn;
q.prototype.get = Bn;
q.prototype.has = Vn;
q.prototype.set = Sa;
var Oa = "__lodash_hash_undefined__";
function Ca(e) {
  return this.__data__.set(e, Oa), this;
}
function Ta(e) {
  return this.__data__.has(e);
}
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Z(); ++t < r; )
    this.add(e[t]);
}
Oe.prototype.add = Oe.prototype.push = Ca;
Oe.prototype.has = Ta;
function Da(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ma(e, t) {
  return e.has(t);
}
var Ia = 1, Aa = 2;
function zt(e, t, r, n, i, a) {
  var s = r & Ia, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var c = a.get(e), d = a.get(t);
  if (c && d)
    return c == t && d == e;
  var u = -1, f = !0, p = r & Aa ? new Oe() : void 0;
  for (a.set(e, t), a.set(t, e); ++u < o; ) {
    var y = e[u], v = t[u];
    if (n)
      var _ = s ? n(v, y, u, t, e, a) : n(y, v, u, e, t, a);
    if (_ !== void 0) {
      if (_)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Da(t, function(w, $) {
        if (!Ma(p, $) && (y === w || i(y, w, r, n, a)))
          return p.push($);
      })) {
        f = !1;
        break;
      }
    } else if (!(y === v || i(y, v, r, n, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
var ka = V.Uint8Array;
const ot = ka;
function Ea(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Pa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Fa = 1, La = 2, Ra = "[object Boolean]", ja = "[object Date]", za = "[object Error]", Na = "[object Map]", Ua = "[object Number]", Ha = "[object RegExp]", Ba = "[object Set]", Va = "[object String]", Ga = "[object Symbol]", Ya = "[object ArrayBuffer]", qa = "[object DataView]", lt = Q ? Q.prototype : void 0, Le = lt ? lt.valueOf : void 0;
function Wa(e, t, r, n, i, a, s) {
  switch (r) {
    case qa:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ya:
      return !(e.byteLength != t.byteLength || !a(new ot(e), new ot(t)));
    case Ra:
    case ja:
    case Ua:
      return jt(+e, +t);
    case za:
      return e.name == t.name && e.message == t.message;
    case Ha:
    case Va:
      return e == t + "";
    case Na:
      var o = Ea;
    case Ba:
      var l = n & Fa;
      if (o || (o = Pa), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= La, s.set(e, t);
      var d = zt(o(e), o(t), n, i, a, s);
      return s.delete(e), d;
    case Ga:
      if (Le)
        return Le.call(e) == Le.call(t);
  }
  return !1;
}
function Za(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Ka(e, t, r) {
  var n = t(e);
  return H(e) ? n : Za(n, r(e));
}
function Nt(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function Xa() {
  return [];
}
var Ja = Object.prototype, Qa = Ja.propertyIsEnumerable, ut = Object.getOwnPropertySymbols, ei = ut ? function(e) {
  return e == null ? [] : (e = Object(e), Nt(ut(e), function(t) {
    return Qa.call(e, t);
  }));
} : Xa;
const ti = ei;
function ct(e) {
  return Ka(e, Te, ti);
}
var ri = 1, ni = Object.prototype, ai = ni.hasOwnProperty;
function ii(e, t, r, n, i, a) {
  var s = r & ri, o = ct(e), l = o.length, c = ct(t), d = c.length;
  if (l != d && !s)
    return !1;
  for (var u = l; u--; ) {
    var f = o[u];
    if (!(s ? f in t : ai.call(t, f)))
      return !1;
  }
  var p = a.get(e), y = a.get(t);
  if (p && y)
    return p == t && y == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var _ = s; ++u < l; ) {
    f = o[u];
    var w = e[f], $ = t[f];
    if (n)
      var b = s ? n($, w, f, t, e, a) : n(w, $, f, e, t, a);
    if (!(b === void 0 ? w === $ || i(w, $, r, n, a) : b)) {
      v = !1;
      break;
    }
    _ || (_ = f == "constructor");
  }
  if (v && !_) {
    var D = e.constructor, M = t.constructor;
    D != M && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof M == "function" && M instanceof M) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var si = he(V, "DataView");
const ze = si;
var oi = he(V, "Promise");
const Ne = oi;
var li = he(V, "Set");
const Ue = li;
var ui = he(V, "WeakMap");
const He = ui;
var ft = "[object Map]", ci = "[object Object]", dt = "[object Promise]", ht = "[object Set]", gt = "[object WeakMap]", pt = "[object DataView]", fi = se(ze), di = se(me), hi = se(Ne), gi = se(Ue), pi = se(He), te = de;
(ze && te(new ze(new ArrayBuffer(1))) != pt || me && te(new me()) != ft || Ne && te(Ne.resolve()) != dt || Ue && te(new Ue()) != ht || He && te(new He()) != gt) && (te = function(e) {
  var t = de(e), r = t == ci ? e.constructor : void 0, n = r ? se(r) : "";
  if (n)
    switch (n) {
      case fi:
        return pt;
      case di:
        return ft;
      case hi:
        return dt;
      case gi:
        return ht;
      case pi:
        return gt;
    }
  return t;
});
const vt = te;
var vi = 1, mt = "[object Arguments]", yt = "[object Array]", $e = "[object Object]", mi = Object.prototype, _t = mi.hasOwnProperty;
function yi(e, t, r, n, i, a) {
  var s = H(e), o = H(t), l = s ? yt : vt(e), c = o ? yt : vt(t);
  l = l == mt ? $e : l, c = c == mt ? $e : c;
  var d = l == $e, u = c == $e, f = l == c;
  if (f && je(e)) {
    if (!je(t))
      return !1;
    s = !0, d = !1;
  }
  if (f && !d)
    return a || (a = new q()), s || Pt(e) ? zt(e, t, r, n, i, a) : Wa(e, t, l, r, n, i, a);
  if (!(r & vi)) {
    var p = d && _t.call(e, "__wrapped__"), y = u && _t.call(t, "__wrapped__");
    if (p || y) {
      var v = p ? e.value() : e, _ = y ? t.value() : t;
      return a || (a = new q()), i(v, _, r, n, a);
    }
  }
  return f ? (a || (a = new q()), ii(e, t, r, n, i, a)) : !1;
}
function We(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !ue(e) && !ue(t) ? e !== e && t !== t : yi(e, t, r, n, We, i);
}
var _i = function() {
  return V.Date.now();
};
const Re = _i;
var bi = /\s/;
function $i(e) {
  for (var t = e.length; t-- && bi.test(e.charAt(t)); )
    ;
  return t;
}
var wi = /^\s+/;
function xi(e) {
  return e && e.slice(0, $i(e) + 1).replace(wi, "");
}
var Si = "[object Symbol]";
function Ie(e) {
  return typeof e == "symbol" || ue(e) && de(e) == Si;
}
var bt = 0 / 0, Oi = /^[-+]0x[0-9a-f]+$/i, Ci = /^0b[01]+$/i, Ti = /^0o[0-7]+$/i, Di = parseInt;
function Be(e) {
  if (typeof e == "number")
    return e;
  if (Ie(e))
    return bt;
  if (ce(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ce(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xi(e);
  var r = Ci.test(e);
  return r || Ti.test(e) ? Di(e.slice(2), r ? 2 : 8) : Oi.test(e) ? bt : +e;
}
var Mi = "Expected a function", Ii = Math.max, Ai = Math.min;
function Ut(e, t, r) {
  var n, i, a, s, o, l, c = 0, d = !1, u = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Mi);
  t = Be(t) || 0, ce(r) && (d = !!r.leading, u = "maxWait" in r, a = u ? Ii(Be(r.maxWait) || 0, t) : a, f = "trailing" in r ? !!r.trailing : f);
  function p(S) {
    var R = n, ee = i;
    return n = i = void 0, c = S, s = e.apply(ee, R), s;
  }
  function y(S) {
    return c = S, o = setTimeout(w, t), d ? p(S) : s;
  }
  function v(S) {
    var R = S - l, ee = S - c, Qe = t - R;
    return u ? Ai(Qe, a - ee) : Qe;
  }
  function _(S) {
    var R = S - l, ee = S - c;
    return l === void 0 || R >= t || R < 0 || u && ee >= a;
  }
  function w() {
    var S = Re();
    if (_(S))
      return $(S);
    o = setTimeout(w, v(S));
  }
  function $(S) {
    return o = void 0, f && n ? p(S) : (n = i = void 0, s);
  }
  function b() {
    o !== void 0 && clearTimeout(o), c = 0, n = l = i = o = void 0;
  }
  function D() {
    return o === void 0 ? s : $(Re());
  }
  function M() {
    var S = Re(), R = _(S);
    if (n = arguments, i = this, l = S, R) {
      if (o === void 0)
        return y(l);
      if (u)
        return clearTimeout(o), o = setTimeout(w, t), p(l);
    }
    return o === void 0 && (o = setTimeout(w, t)), s;
  }
  return M.cancel = b, M.flush = D, M;
}
const Ul = {
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
      const n = Object.assign({}, t, e);
      return En(n, (i) => {
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
              let n = Object.keys(this.tableData.search);
              if (n.length) {
                let i = {};
                n.forEach((a) => {
                  let s = this.tableData.search[a].value;
                  s != "" && s != null && (i[a] = s);
                }), Object.keys(i).length > 0 && (e.search = i);
              }
            } else
              r == "filters" && Array.isArray(this.tableData.filters) ? this.tableData.filters.filter((n) => n.value).forEach((n) => {
                "filters" in e || (e.filters = {}), e.filters[n.field] = n.value;
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
      handler: Ut(function(e, t) {
        this.requestData();
      }, 350)
    }
  }
}, L = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ki = rr({
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
    let e = nr(!1);
    const t = (r) => {
      e.value && r.key === "Escape" && (e.value = !1);
    };
    return ar(() => document.addEventListener("keydown", t)), ir(() => document.removeEventListener("keydown", t)), {
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
}), Ei = { class: "relative" };
function Pi(e, t, r, n, i, a) {
  return g(), m("div", Ei, [
    h("div", {
      onClick: t[0] || (t[0] = (s) => e.open = !e.open)
    }, [
      k(e.$slots, "trigger")
    ]),
    J(h("div", {
      class: "fixed inset-0 z-40 bg-black/30",
      onClick: t[1] || (t[1] = be((s) => e.open = !1, ["self"]))
    }, null, 512), [
      [le, e.open]
    ]),
    z(sr, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95"
    }, {
      default: U(() => [
        J(h("div", {
          class: E(["absolute z-50 mt-2 rounded-md shadow-lg", [e.widthClass, e.alignmentClasses]]),
          style: { display: "none" },
          onClick: t[2] || (t[2] = (...s) => e.autoClose && e.autoClose(...s))
        }, [
          h("div", {
            class: E(["rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5", e.contentClasses])
          }, [
            k(e.$slots, "content")
          ], 2)
        ], 2), [
          [le, e.open]
        ])
      ]),
      _: 3
    })
  ]);
}
const Ht = /* @__PURE__ */ L(ki, [["render", Pi]]), Fi = {
  components: {
    DropdownComp: Ht
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
}, Li = ["disabled"];
function Ri(e, t, r, n, i, a) {
  const s = O("DropdownComp");
  return g(), P(s, { "close-on-click": r.closeOnClick }, {
    trigger: U(() => [
      h("button", {
        type: "button",
        disabled: r.disabled,
        class: E(["btn btn-slate", { "cursor-not-allowed": r.disabled }]),
        "aria-haspopup": "true",
        ref: "button"
      }, [
        k(e.$slots, "button")
      ], 10, Li)
    ]),
    content: U(() => [
      k(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["close-on-click"]);
}
const Bt = /* @__PURE__ */ L(Fi, [["render", Ri]]);
function ji(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
    })
  ]);
}
function zi(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function Ni(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 15.75l7.5-7.5 7.5 7.5"
    })
  ]);
}
function Ui(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    })
  ]);
}
function Hi(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function Bi(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
const Vi = {
  name: "Actions",
  components: {
    Dropdown: Ht,
    EllipsisHorizontalIcon: Ui
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
        function(r, n) {
          return t.hasOwnProperty(n) ? t[n] : "";
        }
      );
    }
  }
}, Gi = { class: "btn btn-xs hover:text-gray-400" }, Yi = {
  class: "flex w-full text-left",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, qi = {
  class: "w-full p-2",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
};
function Wi(e, t, r, n, i, a) {
  const s = O("EllipsisHorizontalIcon"), o = O("Link"), l = O("Dropdown");
  return g(), P(l, { class: "inline-flex" }, {
    trigger: U(() => [
      h("div", Gi, [
        z(s, { class: "w-6 h-6" })
      ])
    ]),
    content: U(() => [
      h("div", Yi, [
        h("div", qi, [
          (g(!0), m(F, null, N(r.actions, (c) => (g(), P(o, {
            href: a.buildLink(c, r.record),
            class: "text-left flex w-full rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300",
            role: "menuitem"
          }, {
            default: U(() => [
              X(I(c.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 256))
        ])
      ])
    ]),
    _: 1
  });
}
const Zi = /* @__PURE__ */ L(Vi, [["render", Wi]]), Ki = {
  props: {
    cell: {
      type: Object,
      required: !0
    },
    sort: String
  },
  components: {
    ChevronUpDownIcon: zi,
    ChevronUpIcon: Ni,
    ChevronDownIcon: ji
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
function Xi(e, t, r, n, i, a) {
  const s = O("ChevronUpDownIcon"), o = O("ChevronUpIcon"), l = O("ChevronDownIcon");
  return J((g(), m("th", {
    class: E({ "cursor-pointer": r.cell.sortable, "text-right": r.cell.component == "action-field", "text-left": r.cell.component !== "action-field" }),
    onClick: t[0] || (t[0] = be((...c) => a.onClick && a.onClick(...c), ["prevent"]))
  }, [
    k(e.$slots, "default", { direction: a.sortDirection }, () => [
      h("div", {
        class: E([r.cell.component == "action-field" ? "justify-end" : "flex flex-row items-center whitespace-nowrap"])
      }, [
        X(I(r.cell.name) + " ", 1),
        r.cell.sortable ? (g(), m("div", {
          key: 0,
          class: E(["ml-2 inline-flex", { "text-gray-400": !this.sort, "text-blue-500": this.sort && this.sort.endsWith(r.cell.attribute) }])
        }, [
          a.sortDirection === "" ? (g(), P(s, {
            key: 0,
            class: "size-5"
          })) : A("", !0),
          a.sortDirection === "asc" ? (g(), P(o, {
            key: 1,
            class: "size-5"
          })) : A("", !0),
          a.sortDirection === "desc" ? (g(), P(l, {
            key: 2,
            class: "size-5"
          })) : A("", !0)
        ], 2)) : A("", !0)
      ], 2)
    ])
  ], 2)), [
    [le, r.cell.visible]
  ]);
}
const Ji = /* @__PURE__ */ L(Ki, [["render", Xi]]);
var Qi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, es = /^\w*$/;
function Ze(e, t) {
  if (H(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ie(e) ? !0 : es.test(e) || !Qi.test(e) || t != null && e in Object(t);
}
var ts = "Expected a function";
function Ke(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ts);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (Ke.Cache || Z)(), r;
}
Ke.Cache = Z;
var rs = 500;
function ns(e) {
  var t = Ke(e, function(n) {
    return r.size === rs && r.clear(), n;
  }), r = t.cache;
  return t;
}
var as = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, is = /\\(\\)?/g, ss = ns(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(as, function(r, n, i, a) {
    t.push(i ? a.replace(is, "$1") : n || r);
  }), t;
});
const os = ss;
function ls(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var us = 1 / 0, $t = Q ? Q.prototype : void 0, wt = $t ? $t.toString : void 0;
function Vt(e) {
  if (typeof e == "string")
    return e;
  if (H(e))
    return ls(e, Vt) + "";
  if (Ie(e))
    return wt ? wt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -us ? "-0" : t;
}
function cs(e) {
  return e == null ? "" : Vt(e);
}
function Gt(e, t) {
  return H(e) ? e : Ze(e, t) ? [e] : os(cs(e));
}
var fs = 1 / 0;
function Ae(e) {
  if (typeof e == "string" || Ie(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -fs ? "-0" : t;
}
function Yt(e, t) {
  t = Gt(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ae(t[r++])];
  return r && r == n ? e : void 0;
}
function Ve(e, t, r) {
  var n = e == null ? void 0 : Yt(e, t);
  return n === void 0 ? r : n;
}
var qt = 60, Wt = qt * 60, Zt = Wt * 24, ds = Zt * 7, fe = 1e3, xe = qt * fe, xt = Wt * fe, hs = Zt * fe, gs = ds * fe, ke = "millisecond", re = "second", B = "minute", ne = "hour", G = "day", Se = "week", j = "month", Kt = "quarter", Y = "year", oe = "date", ps = "YYYY-MM-DDTHH:mm:ssZ", St = "Invalid Date", vs = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ms = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const ys = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function(t) {
    var r = ["th", "st", "nd", "rd"], n = t % 100;
    return "[" + t + (r[(n - 20) % 10] || r[n] || r[0]) + "]";
  }
};
var Ge = function(t, r, n) {
  var i = String(t);
  return !i || i.length >= r ? t : "" + Array(r + 1 - i.length).join(n) + t;
}, _s = function(t) {
  var r = -t.utcOffset(), n = Math.abs(r), i = Math.floor(n / 60), a = n % 60;
  return (r <= 0 ? "+" : "-") + Ge(i, 2, "0") + ":" + Ge(a, 2, "0");
}, bs = function e(t, r) {
  if (t.date() < r.date())
    return -e(r, t);
  var n = (r.year() - t.year()) * 12 + (r.month() - t.month()), i = t.clone().add(n, j), a = r - i < 0, s = t.clone().add(n + (a ? -1 : 1), j);
  return +(-(n + (r - i) / (a ? i - s : s - i)) || 0);
}, $s = function(t) {
  return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}, ws = function(t) {
  var r = {
    M: j,
    y: Y,
    w: Se,
    d: G,
    D: oe,
    h: ne,
    m: B,
    s: re,
    ms: ke,
    Q: Kt
  };
  return r[t] || String(t || "").toLowerCase().replace(/s$/, "");
}, xs = function(t) {
  return t === void 0;
};
const Ss = {
  s: Ge,
  z: _s,
  m: bs,
  a: $s,
  p: ws,
  u: xs
};
var ve = "en", ae = {};
ae[ve] = ys;
var Xt = "$isDayjsObject", Xe = function(t) {
  return t instanceof Ee || !!(t && t[Xt]);
}, Ce = function e(t, r, n) {
  var i;
  if (!t)
    return ve;
  if (typeof t == "string") {
    var a = t.toLowerCase();
    ae[a] && (i = a), r && (ae[a] = r, i = a);
    var s = t.split("-");
    if (!i && s.length > 1)
      return e(s[0]);
  } else {
    var o = t.name;
    ae[o] = t, i = o;
  }
  return !n && i && (ve = i), i || !n && ve;
}, T = function(t, r) {
  if (Xe(t))
    return t.clone();
  var n = typeof r == "object" ? r : {};
  return n.date = t, n.args = arguments, new Ee(n);
}, Os = function(t, r) {
  return T(t, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, x = Ss;
x.l = Ce;
x.i = Xe;
x.w = Os;
var Cs = function(t) {
  var r = t.date, n = t.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (x.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var i = r.match(vs);
    if (i) {
      var a = i[2] - 1 || 0, s = (i[7] || "0").substring(0, 3);
      return n ? new Date(Date.UTC(i[1], a, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, s)) : new Date(i[1], a, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, s);
    }
  }
  return new Date(r);
}, Ee = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Ce(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[Xt] = !0;
  }
  var t = e.prototype;
  return t.parse = function(n) {
    this.$d = Cs(n), this.init();
  }, t.init = function() {
    var n = this.$d;
    this.$y = n.getFullYear(), this.$M = n.getMonth(), this.$D = n.getDate(), this.$W = n.getDay(), this.$H = n.getHours(), this.$m = n.getMinutes(), this.$s = n.getSeconds(), this.$ms = n.getMilliseconds();
  }, t.$utils = function() {
    return x;
  }, t.isValid = function() {
    return this.$d.toString() !== St;
  }, t.isSame = function(n, i) {
    var a = T(n);
    return this.startOf(i) <= a && a <= this.endOf(i);
  }, t.isAfter = function(n, i) {
    return T(n) < this.startOf(i);
  }, t.isBefore = function(n, i) {
    return this.endOf(i) < T(n);
  }, t.$g = function(n, i, a) {
    return x.u(n) ? this[i] : this.set(a, n);
  }, t.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, t.valueOf = function() {
    return this.$d.getTime();
  }, t.startOf = function(n, i) {
    var a = this, s = x.u(i) ? !0 : i, o = x.p(n), l = function(w, $) {
      var b = x.w(a.$u ? Date.UTC(a.$y, $, w) : new Date(a.$y, $, w), a);
      return s ? b : b.endOf(G);
    }, c = function(w, $) {
      var b = [0, 0, 0, 0], D = [23, 59, 59, 999];
      return x.w(a.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (s ? b : D).slice($)
      ), a);
    }, d = this.$W, u = this.$M, f = this.$D, p = "set" + (this.$u ? "UTC" : "");
    switch (o) {
      case Y:
        return s ? l(1, 0) : l(31, 11);
      case j:
        return s ? l(1, u) : l(0, u + 1);
      case Se: {
        var y = this.$locale().weekStart || 0, v = (d < y ? d + 7 : d) - y;
        return l(s ? f - v : f + (6 - v), u);
      }
      case G:
      case oe:
        return c(p + "Hours", 0);
      case ne:
        return c(p + "Minutes", 1);
      case B:
        return c(p + "Seconds", 2);
      case re:
        return c(p + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, t.endOf = function(n) {
    return this.startOf(n, !1);
  }, t.$set = function(n, i) {
    var a, s = x.p(n), o = "set" + (this.$u ? "UTC" : ""), l = (a = {}, a[G] = o + "Date", a[oe] = o + "Date", a[j] = o + "Month", a[Y] = o + "FullYear", a[ne] = o + "Hours", a[B] = o + "Minutes", a[re] = o + "Seconds", a[ke] = o + "Milliseconds", a)[s], c = s === G ? this.$D + (i - this.$W) : i;
    if (s === j || s === Y) {
      var d = this.clone().set(oe, 1);
      d.$d[l](c), d.init(), this.$d = d.set(oe, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      l && this.$d[l](c);
    return this.init(), this;
  }, t.set = function(n, i) {
    return this.clone().$set(n, i);
  }, t.get = function(n) {
    return this[x.p(n)]();
  }, t.add = function(n, i) {
    var a = this, s;
    n = Number(n);
    var o = x.p(i), l = function(f) {
      var p = T(a);
      return x.w(p.date(p.date() + Math.round(f * n)), a);
    };
    if (o === j)
      return this.set(j, this.$M + n);
    if (o === Y)
      return this.set(Y, this.$y + n);
    if (o === G)
      return l(1);
    if (o === Se)
      return l(7);
    var c = (s = {}, s[B] = xe, s[ne] = xt, s[re] = fe, s)[o] || 1, d = this.$d.getTime() + n * c;
    return x.w(d, this);
  }, t.subtract = function(n, i) {
    return this.add(n * -1, i);
  }, t.format = function(n) {
    var i = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || St;
    var s = n || ps, o = x.z(this), l = this.$H, c = this.$m, d = this.$M, u = a.weekdays, f = a.months, p = a.meridiem, y = function(b, D, M, S) {
      return b && (b[D] || b(i, s)) || M[D].slice(0, S);
    }, v = function(b) {
      return x.s(l % 12 || 12, b, "0");
    }, _ = p || function($, b, D) {
      var M = $ < 12 ? "AM" : "PM";
      return D ? M.toLowerCase() : M;
    }, w = function(b) {
      switch (b) {
        case "YY":
          return String(i.$y).slice(-2);
        case "YYYY":
          return x.s(i.$y, 4, "0");
        case "M":
          return d + 1;
        case "MM":
          return x.s(d + 1, 2, "0");
        case "MMM":
          return y(a.monthsShort, d, f, 3);
        case "MMMM":
          return y(f, d);
        case "D":
          return i.$D;
        case "DD":
          return x.s(i.$D, 2, "0");
        case "d":
          return String(i.$W);
        case "dd":
          return y(a.weekdaysMin, i.$W, u, 2);
        case "ddd":
          return y(a.weekdaysShort, i.$W, u, 3);
        case "dddd":
          return u[i.$W];
        case "H":
          return String(l);
        case "HH":
          return x.s(l, 2, "0");
        case "h":
          return v(1);
        case "hh":
          return v(2);
        case "a":
          return _(l, c, !0);
        case "A":
          return _(l, c, !1);
        case "m":
          return String(c);
        case "mm":
          return x.s(c, 2, "0");
        case "s":
          return String(i.$s);
        case "ss":
          return x.s(i.$s, 2, "0");
        case "SSS":
          return x.s(i.$ms, 3, "0");
        case "Z":
          return o;
      }
      return null;
    };
    return s.replace(ms, function($, b) {
      return b || w($) || o.replace(":", "");
    });
  }, t.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, t.diff = function(n, i, a) {
    var s = this, o = x.p(i), l = T(n), c = (l.utcOffset() - this.utcOffset()) * xe, d = this - l, u = function() {
      return x.m(s, l);
    }, f;
    switch (o) {
      case Y:
        f = u() / 12;
        break;
      case j:
        f = u();
        break;
      case Kt:
        f = u() / 3;
        break;
      case Se:
        f = (d - c) / gs;
        break;
      case G:
        f = (d - c) / hs;
        break;
      case ne:
        f = d / xt;
        break;
      case B:
        f = d / xe;
        break;
      case re:
        f = d / fe;
        break;
      default:
        f = d;
        break;
    }
    return a ? f : x.a(f);
  }, t.daysInMonth = function() {
    return this.endOf(j).$D;
  }, t.$locale = function() {
    return ae[this.$L];
  }, t.locale = function(n, i) {
    if (!n)
      return this.$L;
    var a = this.clone(), s = Ce(n, i, !0);
    return s && (a.$L = s), a;
  }, t.clone = function() {
    return x.w(this.$d, this);
  }, t.toDate = function() {
    return new Date(this.valueOf());
  }, t.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, t.toISOString = function() {
    return this.$d.toISOString();
  }, t.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Jt = Ee.prototype;
T.prototype = Jt;
[["$ms", ke], ["$s", re], ["$m", B], ["$H", ne], ["$W", G], ["$M", j], ["$y", Y], ["$D", oe]].forEach(function(e) {
  Jt[e[1]] = function(t) {
    return this.$g(t, e[0], e[1]);
  };
});
T.extend = function(e, t) {
  return e.$i || (e(t, Ee, T), e.$i = !0), T;
};
T.locale = Ce;
T.isDayjs = Xe;
T.unix = function(e) {
  return T(e * 1e3);
};
T.en = ae[ve];
T.Ls = ae;
T.p = {};
var Ts = /[+-]\d\d(?::?\d\d)?/g, Ds = /([+-]|\d\d)/g;
function Ms(e) {
  e === void 0 && (e = "");
  var t = e.match(Ts);
  if (!t)
    return null;
  var r = ("" + t[0]).match(Ds) || ["-", 0, 0], n = r[0], i = r[1], a = r[2], s = +i * 60 + +a;
  return s === 0 ? 0 : n === "+" ? s : -s;
}
const Is = function(e, t, r) {
  var n = t.prototype;
  r.utc = function(u) {
    var f = {
      date: u,
      utc: !0,
      args: arguments
    };
    return new t(f);
  }, n.utc = function(u) {
    var f = r(this.toDate(), {
      locale: this.$L,
      utc: !0
    });
    return u ? f.add(this.utcOffset(), B) : f;
  }, n.local = function() {
    return r(this.toDate(), {
      locale: this.$L,
      utc: !1
    });
  };
  var i = n.parse;
  n.parse = function(u) {
    u.utc && (this.$u = !0), this.$utils().u(u.$offset) || (this.$offset = u.$offset), i.call(this, u);
  };
  var a = n.init;
  n.init = function() {
    if (this.$u) {
      var u = this.$d;
      this.$y = u.getUTCFullYear(), this.$M = u.getUTCMonth(), this.$D = u.getUTCDate(), this.$W = u.getUTCDay(), this.$H = u.getUTCHours(), this.$m = u.getUTCMinutes(), this.$s = u.getUTCSeconds(), this.$ms = u.getUTCMilliseconds();
    } else
      a.call(this);
  };
  var s = n.utcOffset;
  n.utcOffset = function(u, f) {
    var p = this.$utils(), y = p.u;
    if (y(u))
      return this.$u ? 0 : y(this.$offset) ? s.call(this) : this.$offset;
    if (typeof u == "string" && (u = Ms(u), u === null))
      return this;
    var v = Math.abs(u) <= 16 ? u * 60 : u, _ = this;
    if (f)
      return _.$offset = v, _.$u = u === 0, _;
    if (u !== 0) {
      var w = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
      _ = this.local().add(v + w, B), _.$offset = v, _.$x.$localOffset = w;
    } else
      _ = this.utc();
    return _;
  };
  var o = n.format, l = "YYYY-MM-DDTHH:mm:ss[Z]";
  n.format = function(u) {
    var f = u || (this.$u ? l : "");
    return o.call(this, f);
  }, n.valueOf = function() {
    var u = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
    return this.$d.valueOf() - u * xe;
  }, n.isUTC = function() {
    return !!this.$u;
  }, n.toISOString = function() {
    return this.toDate().toISOString();
  }, n.toString = function() {
    return this.toDate().toUTCString();
  };
  var c = n.toDate;
  n.toDate = function(u) {
    return u === "s" && this.$offset ? r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : c.call(this);
  };
  var d = n.diff;
  n.diff = function(u, f, p) {
    if (u && this.$u === u.$u)
      return d.call(this, u, f, p);
    var y = this.local(), v = r(u).local();
    return d.call(y, v, f, p);
  };
};
var As = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
}, Ot = {}, ks = function(t, r) {
  r === void 0 && (r = {});
  var n = r.timeZoneName || "short", i = t + "|" + n, a = Ot[i];
  return a || (a = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: n
  }), Ot[i] = a), a;
};
const Es = function(e, t, r) {
  var n, i = function(d, u, f) {
    f === void 0 && (f = {});
    var p = new Date(d), y = ks(u, f);
    return y.formatToParts(p);
  }, a = function(d, u) {
    for (var f = i(d, u), p = [], y = 0; y < f.length; y += 1) {
      var v = f[y], _ = v.type, w = v.value, $ = As[_];
      $ >= 0 && (p[$] = parseInt(w, 10));
    }
    var b = p[3], D = b === 24 ? 0 : b, M = p[0] + "-" + p[1] + "-" + p[2] + " " + D + ":" + p[4] + ":" + p[5] + ":000", S = r.utc(M).valueOf(), R = +d, ee = R % 1e3;
    return R -= ee, (S - R) / 6e4;
  }, s = function(d, u, f) {
    var p = d - u * 60 * 1e3, y = a(p, f);
    if (u === y)
      return [p, u];
    p -= (y - u) * 60 * 1e3;
    var v = a(p, f);
    return y === v ? [p, y] : [d - Math.min(y, v) * 60 * 1e3, Math.max(y, v)];
  }, o = t.prototype;
  o.tz = function(c, d) {
    c === void 0 && (c = n);
    var u = this.utcOffset(), f = this.toDate(), p = f.toLocaleString("en-US", {
      timeZone: c
    }), y = Math.round((f - new Date(p)) / 1e3 / 60), v = r(p, {
      locale: this.$L
    }).$set(ke, this.$ms).utcOffset(-Math.round(f.getTimezoneOffset() / 15) * 15 - y, !0);
    if (d) {
      var _ = v.utcOffset();
      v = v.add(u - _, B);
    }
    return v.$x.$timezone = c, v;
  }, o.offsetName = function(c) {
    var d = this.$x.$timezone || r.tz.guess(), u = i(this.valueOf(), d, {
      timeZoneName: c
    }).find(function(f) {
      return f.type.toLowerCase() === "timezonename";
    });
    return u && u.value;
  };
  var l = o.startOf;
  o.startOf = function(c, d) {
    if (!this.$x || !this.$x.$timezone)
      return l.call(this, c, d);
    var u = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
      locale: this.$L
    }), f = l.call(u, c, d);
    return f.tz(this.$x.$timezone, !0);
  }, r.tz = function(c, d, u) {
    var f = u && d, p = u || d || n, y = a(+r(), p);
    if (typeof c != "string")
      return r(c).tz(p);
    var v = r.utc(c, f).valueOf(), _ = s(v, y, p), w = _[0], $ = _[1], b = r(w).utcOffset($);
    return b.$x.$timezone = p, b;
  }, r.tz.guess = function() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }, r.tz.setDefault = function(c) {
    n = c;
  };
}, Ps = function(e, t, r) {
  e = e || {};
  var n = t.prototype, i = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  r.en.relativeTime = i, n.fromToBase = function(o, l, c, d, u) {
    for (var f = c.$locale().relativeTime || i, p = e.thresholds || [{
      l: "s",
      r: 44,
      d: re
    }, {
      l: "m",
      r: 89
    }, {
      l: "mm",
      r: 44,
      d: B
    }, {
      l: "h",
      r: 89
    }, {
      l: "hh",
      r: 21,
      d: ne
    }, {
      l: "d",
      r: 35
    }, {
      l: "dd",
      r: 25,
      d: G
    }, {
      l: "M",
      r: 45
    }, {
      l: "MM",
      r: 10,
      d: j
    }, {
      l: "y",
      r: 17
    }, {
      l: "yy",
      d: Y
    }], y = p.length, v, _, w, $ = 0; $ < y; $ += 1) {
      var b = p[$];
      b.d && (v = d ? r(o).diff(c, b.d, !0) : c.diff(o, b.d, !0));
      var D = (e.rounding || Math.round)(Math.abs(v));
      if (w = v > 0, D <= b.r || !b.r) {
        D <= 1 && $ > 0 && (b = p[$ - 1]);
        var M = f[b.l];
        u && (D = u("" + D)), typeof M == "string" ? _ = M.replace("%d", D) : _ = M(D, l, b.l, w);
        break;
      }
    }
    if (l)
      return _;
    var S = w ? f.future : f.past;
    return typeof S == "function" ? S(_) : S.replace("%s", _);
  };
  function a(o, l, c, d) {
    return n.fromToBase(o, l, c, d);
  }
  n.to = function(o, l) {
    return a(o, l, this, !0);
  }, n.from = function(o, l) {
    return a(o, l, this);
  };
  var s = function(l) {
    return l.$u ? r.utc() : r();
  };
  n.toNow = function(o) {
    return this.to(s(this), o);
  }, n.fromNow = function(o) {
    return this.from(s(this), o);
  };
};
T.extend(Is);
T.extend(Es);
T.extend(Ps);
const Fs = {
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
      return T(this.modelValue).tz(T.tz.guess());
    },
    formatted() {
      return this.relative ? T().to(this.date) : this.date.format(this.format);
    },
    fullDate() {
      return { content: this.date.format(this.format), disabled: !this.relative };
    }
  }
}, Ls = ["datetime"];
function Rs(e, t, r, n, i, a) {
  const s = or("tooltip");
  return g(), m("span", null, [
    J((g(), m("time", { datetime: r.modelValue }, [
      X(I(a.formatted), 1)
    ], 8, Ls)), [
      [s, a.fullDate]
    ])
  ]);
}
const js = /* @__PURE__ */ L(Fs, [["render", Rs]]), zs = {
  components: {
    Actions: Zi,
    DateField: js
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
  methods: { get: Ve },
  computed: {
    value() {
      return Ve(this.record, this.field.attribute);
    }
  }
};
function Ns(e, t, r, n, i, a) {
  const s = O("Actions"), o = O("DateField");
  return g(), m("td", {
    class: E({ "text-right": r.field.component == "action-field" })
  }, [
    k(e.$slots, "default", {}, () => [
      r.field.component == "action-field" ? (g(), P(s, {
        key: 0,
        record: r.record,
        actions: r.field.actions
      }, null, 8, ["record", "actions"])) : A("", !0),
      r.field.component === "date" ? (g(), P(o, {
        key: 1,
        modelValue: a.value,
        "onUpdate:modelValue": t[0] || (t[0] = (l) => a.value = l),
        format: r.field.meta.dateFormat,
        relative: r.field.meta.relative
      }, null, 8, ["modelValue", "format", "relative"])) : (g(), m(F, { key: 2 }, [
        X(I(a.value), 1)
      ], 64))
    ])
  ], 2);
}
const Us = /* @__PURE__ */ L(zs, [["render", Ns]]);
function Hs(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "fill-rule": "evenodd",
      d: "M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Bs(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "fill-rule": "evenodd",
      d: "M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    }),
    h("path", {
      "fill-rule": "evenodd",
      d: "M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Vs(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "fill-rule": "evenodd",
      d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Gs(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function K(e, t) {
  const r = t - e + 1;
  return Array.from({ length: r }, (n, i) => i + e);
}
function Ys(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const we = "ellipsis";
function qs(e, t, r, n) {
  const a = t, s = Math.max(e - r, 1), o = Math.min(e + r, a), l = s > 1 + 2, c = o < a - 2;
  if (n) {
    const u = Math.min(2 * r + 5, t) - 2;
    if (!l && c)
      return [...K(1, u), we, a];
    if (l && !c) {
      const f = K(a - u + 1, a);
      return [1, we, ...f];
    }
    if (l && c) {
      const f = K(s, o);
      return [1, we, ...f, we, a];
    }
    return K(1, a);
  } else {
    const d = r * 2 + 1;
    return t < d ? K(1, a) : e <= r + 1 ? K(1, d) : t - e <= r ? K(t - d + 1, a) : K(s, o);
  }
}
const Ws = {
  components: {
    ChevronRightIcon: Gs,
    ChevronLeftIcon: Vs,
    ChevronDoubleLeftIcon: Hs,
    ChevronDoubleRightIcon: Bs
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
      return Ys(qs(this.pagination.page, this.pagination.total_pages, this.siblingCount, this.showEdges));
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
}, Zs = {
  key: 0,
  class: "bg-white py-8 mt-4 flex items-center border-t dark:border-transparent dark:bg-gray-800 dark:text-gray-200"
}, Ks = { class: "w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8" }, Xs = {
  key: 0,
  class: "block sm:flex-1 sm:flex sm:items-center justify-start xl:justify-between"
}, Js = { class: "inline text-sm text-gray-700 dark:text-gray-400" }, Qs = { class: "font-medium" }, eo = { class: "font-medium" }, to = { class: "font-medium" }, ro = { class: "flex items-center ml-0 xl:ml-auto" }, no = /* @__PURE__ */ h("span", { class: "sr-only" }, "Previous", -1), ao = ["onClick", "innerHTML"], io = ["onClick"], so = /* @__PURE__ */ h("span", { class: "sr-only" }, "Next", -1);
function oo(e, t, r, n, i, a) {
  const s = O("ChevronDoubleLeftIcon"), o = O("ChevronLeftIcon"), l = O("ChevronRightIcon"), c = O("ChevronDoubleRightIcon");
  return r.pagination && r.pagination.record_count > 0 ? (g(), m("nav", Zs, [
    h("div", Ks, [
      r.pagination.record_count > 0 ? (g(), m("div", Xs, [
        h("div", null, [
          k(e.$slots, "default"),
          h("p", Js, [
            X(" Showing " + I(" ") + " "),
            h("span", Qs, I(a.fromCount), 1),
            X(" " + I(" ") + " to " + I(" ") + " "),
            h("span", eo, I(a.toCount), 1),
            X(" " + I(" ") + " of " + I(" ") + " "),
            h("span", to, I(r.pagination.record_count), 1),
            X(" " + I(" ") + " results ")
          ])
        ])
      ])) : A("", !0),
      h("div", ro, [
        h("span", {
          onClick: t[0] || (t[0] = (d) => a.change(1)),
          class: E([a.isOnFirstPage ? "text-gray-400 dark:bg-gray-700 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 ", "relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          no,
          z(s, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2),
        h("span", {
          onClick: t[1] || (t[1] = (...d) => a.back && a.back(...d)),
          class: E([a.isOnFirstPage ? "text-gray-400 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-700", "relative inline-flex items-center px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          z(o, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2),
        (g(!0), m(F, null, N(a.pageItems, (d, u) => (g(), m(F, { key: u }, [
          d.type == "page" ? (g(), m("span", {
            key: 0,
            onClick: (f) => a.change(d.value),
            class: E([d.value == r.pagination.page ? "cursor-not-allowed bg-gray-100 dark:bg-gray-700" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700", "relative inline-flex items-center px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"]),
            innerHTML: d.value
          }, null, 10, ao)) : A("", !0),
          d.type == "ellipsis" ? (g(), m("span", {
            key: 1,
            onClick: (f) => a.change(d.value),
            class: E(["relative inline-flex items-center px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700"])
          }, " ... ", 8, io)) : A("", !0)
        ], 64))), 128)),
        h("span", {
          onClick: t[2] || (t[2] = (...d) => a.forward && a.forward(...d)),
          class: E([a.isOnLastPage ? "text-gray-400 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700", "relative inline-flex items-center px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          z(l, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2),
        h("span", {
          onClick: t[3] || (t[3] = (d) => a.change(this.pagination.total_pages)),
          class: E([a.isOnLastPage ? "text-gray-400 cursor-not-allowed" : "text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700", "relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0"])
        }, [
          so,
          z(c, {
            class: "size-5",
            "aria-hidden": "true"
          })
        ], 2)
      ])
    ])
  ])) : A("", !0);
}
const lo = /* @__PURE__ */ L(Ws, [["render", oo]]), uo = {
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
}, co = ["value"];
function fo(e, t, r, n, i, a) {
  return J((g(), m("select", {
    ref: "input",
    "onUpdate:modelValue": t[0] || (t[0] = (s) => i.selected = s),
    class: "form-select py-2 inline-flex"
  }, [
    (g(!0), m(F, null, N(r.options, (s) => (g(), m("option", {
      key: s,
      value: s
    }, I(s), 9, co))), 128))
  ], 512)), [
    [lr, i.selected]
  ]);
}
const ho = /* @__PURE__ */ L(uo, [["render", fo]]);
function go(e, t) {
  var r = [];
  return Lt(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
var po = 1, vo = 2;
function mo(e, t, r, n) {
  var i = r.length, a = i, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    o = r[i];
    var l = o[0], c = e[l], d = o[1];
    if (s && o[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var u = new q();
      if (n)
        var f = n(c, d, l, e, t, u);
      if (!(f === void 0 ? We(d, c, po | vo, n, u) : f))
        return !1;
    }
  }
  return !0;
}
function Qt(e) {
  return e === e && !ce(e);
}
function yo(e) {
  for (var t = Te(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Qt(i)];
  }
  return t;
}
function er(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function _o(e) {
  var t = yo(e);
  return t.length == 1 && t[0][2] ? er(t[0][0], t[0][1]) : function(r) {
    return r === e || mo(r, e, t);
  };
}
function bo(e, t) {
  return e != null && t in Object(e);
}
function $o(e, t, r) {
  t = Gt(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = Ae(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Ye(i) && kt(s, i) && (H(e) || It(e)));
}
function wo(e, t) {
  return e != null && $o(e, t, bo);
}
var xo = 1, So = 2;
function Oo(e, t) {
  return Ze(e) && Qt(t) ? er(Ae(e), t) : function(r) {
    var n = Ve(r, e);
    return n === void 0 && n === t ? wo(r, e) : We(t, n, xo | So);
  };
}
function Co(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function To(e) {
  return function(t) {
    return Yt(t, e);
  };
}
function Do(e) {
  return Ze(e) ? Co(Ae(e)) : To(e);
}
function Je(e) {
  return typeof e == "function" ? e : e == null ? Rt : typeof e == "object" ? H(e) ? Oo(e[0], e[1]) : _o(e) : Do(e);
}
function _e(e, t) {
  var r = H(e) ? Nt : go;
  return r(e, Je(t));
}
const Mo = {
  components: {
    Dropdown: Bt,
    MagnifyingGlassIcon: Bi
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
      return _e(this.rows, (e) => e.field !== "global").length > 0;
    },
    rowsLeft() {
      return _e(this.rows, (e) => this.showRow(e)).length > 0;
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
}, Io = {
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, Ao = {
  class: "divide-y divide-gray-200 dark:divide-gray-600",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
}, ko = ["onClick"];
function Eo(e, t, r, n, i, a) {
  const s = O("MagnifyingGlassIcon"), o = O("Dropdown");
  return a.hasRows ? (g(), P(o, {
    key: 0,
    ref: "dropdown",
    disabled: !a.rowsLeft,
    "close-on-click": !0,
    class: "w-auto"
  }, {
    button: U(() => [
      z(s, { class: "h-4 w-4 my-1" })
    ]),
    default: U(() => [
      h("div", Io, [
        h("div", Ao, [
          (g(!0), m(F, null, N(r.rows, (l) => (g(), m("div", {
            key: l.field,
            class: "px-2"
          }, [
            J(h("button", {
              onClick: be((c) => a.enableSearch(l.field), ["prevent"]),
              class: "text-left w-full my-2 py-2 px-4 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300",
              role: "menuitem"
            }, I(l.label), 9, ko), [
              [le, a.showRow(l)]
            ])
          ]))), 128))
        ])
      ])
    ]),
    _: 1
  }, 8, ["disabled"])) : A("", !0);
}
const Po = /* @__PURE__ */ L(Mo, [["render", Eo]]);
function Fo(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!qe(t)) {
      var a = Je(r);
      t = Te(t), r = function(o) {
        return a(i[o], o, i);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? i[a ? t[s] : s] : void 0;
  };
}
function Lo(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Ct = 1 / 0, Ro = 17976931348623157e292;
function jo(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Be(e), e === Ct || e === -Ct) {
    var t = e < 0 ? -1 : 1;
    return t * Ro;
  }
  return e === e ? e : 0;
}
function zo(e) {
  var t = jo(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var No = Math.max;
function Uo(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : zo(r);
  return i < 0 && (i = No(n + i, 0)), Lo(e, Je(t), i);
}
var Ho = Fo(Uo);
const tr = Ho, Bo = {
  components: {
    Dropdown: Bt,
    EyeIcon: Hi
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
      return !!tr(this.columns, (e) => !e.visible);
    }
  }
}, Vo = {
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, Go = { class: "" }, Yo = { class: "divide-y divide-gray-200 dark:divide-gray-600" }, qo = {
  class: "text-sm font-medium text-gray-900 dark:text-gray-400",
  id: "privacy-option-1-label"
}, Wo = ["onClick"], Zo = /* @__PURE__ */ h("span", { class: "sr-only" }, "Use setting", -1);
function Ko(e, t, r, n, i, a) {
  const s = O("EyeIcon"), o = O("Dropdown");
  return g(), P(o, {
    placement: "bottom-end",
    active: a.hasDisabledFilter
  }, {
    button: U(() => [
      z(s, { class: "h-4 w-4 my-1" })
    ]),
    default: U(() => [
      h("div", Vo, [
        h("div", Go, [
          h("ul", Yo, [
            (g(!0), m(F, null, N(a.allowableColumns, (l, c) => (g(), m("li", {
              class: "py-2 px-4 flex items-center justify-between",
              key: l.attribute
            }, [
              h("p", qo, I(l.name), 1),
              h("button", {
                onClick: be((d) => a.toggle(l.attribute), ["prevent"]),
                type: "button",
                class: E(["ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", { "bg-green-500": l.visible, "bg-gray-200": !l.visible }]),
                "aria-pressed": "true",
                "aria-labelledby": "privacy-option-1-label",
                "aria-describedby": "privacy-option-1-description"
              }, [
                Zo,
                h("span", {
                  "aria-hidden": "true",
                  class: E([[l.visible ? "translate-x-5" : "translate-x-0"], "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                }, null, 2)
              ], 10, Wo)
            ]))), 128))
          ])
        ])
      ])
    ]),
    _: 1
  }, 8, ["active"]);
}
const Xo = /* @__PURE__ */ L(Bo, [["render", Ko]]), Jo = {
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
    handleChange: Ut(function(e, t) {
      this.onChange(e, t);
    }, 300)
  },
  computed: {
    hasEnabledFilter() {
      return tr(this.filters, (e, t) => e.value != "" && e.value != null) !== void 0;
    }
  }
}, Qo = { class: "relative inline-flex" }, el = ["value", "onChange"], tl = {
  value: "",
  disabled: ""
}, rl = ["value"], nl = ["value", "onInput", "placeholder"];
function al(e, t, r, n, i, a) {
  return g(!0), m(F, null, N(r.filters, (s, o) => (g(), m("div", {
    key: s.field
  }, [
    h("div", Qo, [
      s.component == "select" ? (g(), m("select", {
        key: 0,
        value: s.value,
        onChange: (l) => a.handleChange(o, l.target.value),
        class: E(["form-select", { error: r.errors[s.field] }])
      }, [
        h("option", tl, I(s.label), 1),
        (g(!0), m(F, null, N(s.options, (l) => (g(), m("option", {
          value: l.value,
          key: l.value
        }, I(l.label), 9, rl))), 128))
      ], 42, el)) : A("", !0),
      s.component == "text" ? (g(), m("input", {
        key: 1,
        type: "text",
        value: s.value,
        onInput: (l) => a.handleChange(o, l.target.value),
        class: E(["form-input", { error: r.errors[s.field] }]),
        placeholder: s.label
      }, null, 42, nl)) : A("", !0)
    ])
  ]))), 128);
}
const il = /* @__PURE__ */ L(Jo, [["render", al]]);
function sl(e, t) {
  return g(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const ol = {
  props: {
    modelValue: {
      type: String,
      default: "",
      required: !1
    }
  },
  components: {
    MagnifyingGlassIcon: sl
  },
  methods: {
    update(e) {
      this.$emit("update:modelValue", e);
    }
  }
}, ll = { class: "relative" }, ul = ["value"], cl = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" };
function fl(e, t, r, n, i, a) {
  const s = O("MagnifyingGlassIcon");
  return g(), m("div", ll, [
    h("input", {
      class: "form-input pr-12",
      placeholder: "Search...",
      value: r.modelValue,
      type: "text",
      onInput: t[0] || (t[0] = (o) => a.update(o.target.value))
    }, null, 40, ul),
    h("div", cl, [
      z(s, {
        class: "h-5 w-5 text-gray-400",
        viewBox: "0 0 20 20",
        fill: "currentColor"
      })
    ])
  ]);
}
const dl = /* @__PURE__ */ L(ol, [["render", fl]]), hl = {
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
      return _e(this.rows, (e) => e.field !== "global" && this.searchOptionIsEnabled(e.field));
    }
  }
}, gl = { class: "w-full bg-white dark:bg-gray-800 px-4 py-8 border dark:border-none mb-4 rounded-lg mt-4" }, pl = { class: "flex items-center space-x-4" }, vl = { class: "space-y-8" }, ml = { class: "text-sm" }, yl = { class: "flex-grow space-y-8" }, _l = { class: "flex-grow relative" }, bl = ["value", "onInput"], $l = { class: "absolute inset-y-0 right-0 pr-3 flex items-center" }, wl = ["onClick"], xl = /* @__PURE__ */ h("span", { class: "sr-only" }, "Remove search", -1), Sl = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Ol = [
  xl,
  Sl
];
function Cl(e, t, r, n, i, a) {
  return J((g(), m("div", gl, [
    h("div", pl, [
      h("div", vl, [
        (g(!0), m(F, null, N(a.enabledFilters, (s, o) => (g(), m("div", {
          key: o,
          class: "h-8 flex form-label items-center"
        }, [
          h("span", ml, I(s.label), 1)
        ]))), 128))
      ]),
      h("div", yl, [
        (g(!0), m(F, null, N(a.enabledFilters, (s, o) => (g(), m("div", {
          key: o,
          class: "h-8 flex items-center"
        }, [
          h("div", _l, [
            h("input", {
              class: "form-input",
              ref_for: !0,
              ref: s.field,
              value: s.value,
              type: "text",
              onInput: (l) => r.onChange(s.field, l.target.value)
            }, null, 40, bl),
            h("div", $l, [
              h("button", {
                onClick: be((l) => r.onRemove(s.field), ["prevent"]),
                class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, Ol, 8, wl)
            ])
          ])
        ]))), 128))
      ])
    ])
  ], 512)), [
    [le, a.hasFiltersEnabled]
  ]);
}
const Tl = /* @__PURE__ */ L(hl, [["render", Cl]]), Dl = {
  components: {
    PerPageSelect: ho,
    Pagination: lo,
    SearchColumnDropdown: Po,
    ColumnVisibilityToggles: Xo,
    CustomFilters: il,
    GlobalSearch: dl,
    SearchFields: Tl,
    THeadCell: Ji,
    TBodyCell: Us
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
      return _e(this.table.columns, (e) => e.visibility).length > 0;
    },
    hasSearchRows() {
      return _e(this.table.search, (e) => e.field !== "global").length > 0;
    }
  }
}, Ml = {
  key: 0,
  class: "flex md:space-x-4 md:space-y-0 space-y-4 flex-col md:flex-row"
}, Il = {
  key: 0,
  class: "flex-grow min-w-min"
}, Al = { class: "mt-8 flex flex-col w-full rounded-lg overflow-hidden" }, kl = { class: "overflow-x-auto w-full" }, El = { class: "overflow-x w-full" }, Pl = { class: "ring-1 dark:shadow-none ring-black ring-opacity-5 overflow-x-scroll w-full md:rounded-t-lg" }, Fl = { class: "table" }, Ll = { class: "bg-gray-50 dark:bg-gray-700 rounded dark:text-gray-200" }, Rl = { class: "bg-white text-gray-800 divide-y divide-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:divide-gray-800" }, jl = { class: "inline-flex mr-4" };
function zl(e, t, r, n, i, a) {
  const s = O("GlobalSearch"), o = O("CustomFilters"), l = O("SearchColumnDropdown"), c = O("ColumnVisibilityToggles"), d = O("SearchFields"), u = O("THeadCell"), f = O("TBodyCell"), p = O("PerPageSelect"), y = O("Pagination");
  return g(), m("div", null, [
    r.hideFilters ? A("", !0) : (g(), m("div", Ml, [
      k(e.$slots, "globalSearch", {
        search: i.table.search,
        updateSearchValue: a.updateGlobalSearchValue
      }, () => [
        i.table.search && i.table.search.global ? (g(), m("div", Il, [
          z(s, {
            modelValue: i.table.search.global.value,
            "onUpdate:modelValue": t[0] || (t[0] = (v) => i.table.search.global.value = v)
          }, null, 8, ["modelValue"])
        ])) : A("", !0)
      ]),
      k(e.$slots, "filters", {
        hasFilters: a.hasFilters,
        filters: i.table.filters,
        changeFilterValue: a.updateFilterValue
      }, () => [
        a.hasFilters ? (g(), P(o, {
          key: 0,
          filters: i.table.filters,
          errors: r.errors,
          "on-change": a.updateFilterValue
        }, null, 8, ["filters", "errors", "on-change"])) : A("", !0)
      ]),
      k(e.$slots, "addSearch", {
        hasSearchRows: a.hasSearchRows,
        search: i.table.search,
        onAdd: a.enableSearch
      }, () => [
        a.hasSearchRows ? (g(), P(l, {
          key: 0,
          rows: i.table.search,
          "on-add": a.enableSearch
        }, null, 8, ["rows", "on-add"])) : A("", !0)
      ]),
      k(e.$slots, "toggleColumns", {
        hasColumns: a.hasColumns,
        columns: i.table.columns,
        change: a.updateColumnVisibility
      }, () => [
        a.hasColumns ? (g(), P(c, {
          key: 0,
          columns: i.table.columns,
          "on-change": a.updateColumnVisibility
        }, null, 8, ["columns", "on-change"])) : A("", !0)
      ])
    ])),
    k(e.$slots, "searchRows", {
      hasSearches: a.hasSearchRows,
      search: i.table.search,
      removeSearch: a.removeSearch,
      updateValue: a.updateSearchValue
    }, () => [
      a.hasSearchRows ? (g(), P(d, {
        key: 0,
        ref: "rows",
        rows: i.table.search,
        "on-remove": a.removeSearch,
        "on-change": a.updateSearchValue
      }, null, 8, ["rows", "on-remove", "on-change"])) : A("", !0)
    ]),
    k(e.$slots, "table", {}, () => [
      h("div", Al, [
        h("div", kl, [
          h("div", El, [
            h("div", Pl, [
              h("table", Fl, [
                h("thead", Ll, [
                  k(e.$slots, "head", {
                    columns: i.table.columns,
                    sortHandler: a.handleSort
                  }, () => [
                    h("tr", null, [
                      (g(!0), m(F, null, N(i.table.columns, (v) => (g(), P(u, {
                        cell: v,
                        sort: i.table.sort,
                        onSort: a.handleSort,
                        class: "dark:bg-gray-800"
                      }, null, 8, ["cell", "sort", "onSort"]))), 256))
                    ])
                  ])
                ]),
                h("tbody", Rl, [
                  k(e.$slots, "body", {
                    records: r.records,
                    columns: i.table.columns
                  }, () => [
                    (g(!0), m(F, null, N(r.records, (v) => (g(), m("tr", null, [
                      (g(!0), m(F, null, N(i.table.columns, (_) => J((g(), P(f, {
                        record: v,
                        field: _
                      }, null, 8, ["record", "field"])), [
                        [le, _.visible]
                      ])), 256)),
                      k(e.$slots, "action", { record: v })
                    ]))), 256))
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    k(e.$slots, "pagination", {}, () => [
      z(y, {
        pagination: r.pagination,
        onChange: a.changePage
      }, {
        default: U(() => [
          h("div", jl, [
            z(p, {
              modelValue: i.table.perPage,
              "onUpdate:modelValue": t[1] || (t[1] = (v) => i.table.perPage = v)
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["pagination", "onChange"])
    ])
  ]);
}
const Hl = /* @__PURE__ */ L(Dl, [["render", zl]]);
export {
  Zi as Actions,
  Xo as ColumnVisibilityToggles,
  il as CustomFilters,
  Bt as Dropdown,
  dl as GlobalSearch,
  Ul as HasInertiaTable,
  lo as Pagination,
  ho as PerPageSelect,
  Po as SearchColumnDropdown,
  Tl as SearchFields,
  Us as TBodyCell,
  Ji as THeadCell,
  Hl as Table
};
