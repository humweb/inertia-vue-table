import { defineComponent as _n, ref as Sn, onMounted as Ks, onUnmounted as Js, openBlock as A, createElementBlock as $, createElementVNode as E, renderSlot as Y, withDirectives as yt, withModifiers as Er, vShow as Nt, createVNode as Me, Transition as Xs, withCtx as se, normalizeClass as ve, resolveComponent as V, createBlock as q, shallowRef as Qs, markRaw as Fo, h as sn, Fragment as pe, renderList as be, createTextVNode as It, toDisplayString as ye, createCommentVNode as te, resolveDynamicComponent as fr, vModelSelect as Ys } from "vue";
function Zs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function el(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), c = s.length; c--; ) {
      var d = s[e ? c : ++o];
      if (r(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var tl = el();
const rl = tl;
function nl(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var il = typeof global == "object" && global && global.Object === Object && global;
const ja = il;
var ol = typeof self == "object" && self && self.Object === Object && self, al = ja || ol || Function("return this")();
const Le = al;
var sl = Le.Symbol;
const rt = sl;
var Ba = Object.prototype, ll = Ba.hasOwnProperty, cl = Ba.toString, dr = rt ? rt.toStringTag : void 0;
function ul(e) {
  var t = ll.call(e, dr), r = e[dr];
  try {
    e[dr] = void 0;
    var n = !0;
  } catch {
  }
  var o = cl.call(e);
  return n && (t ? e[dr] = r : delete e[dr]), o;
}
var fl = Object.prototype, dl = fl.toString;
function pl(e) {
  return dl.call(e);
}
var hl = "[object Null]", yl = "[object Undefined]", No = rt ? rt.toStringTag : void 0;
function Ht(e) {
  return e == null ? e === void 0 ? yl : hl : No && No in Object(e) ? ul(e) : pl(e);
}
function Dt(e) {
  return e != null && typeof e == "object";
}
var gl = "[object Arguments]";
function Do(e) {
  return Dt(e) && Ht(e) == gl;
}
var ka = Object.prototype, ml = ka.hasOwnProperty, vl = ka.propertyIsEnumerable, bl = Do(function() {
  return arguments;
}()) ? Do : function(e) {
  return Dt(e) && ml.call(e, "callee") && !vl.call(e, "callee");
};
const Ua = bl;
var wl = Array.isArray;
const Te = wl;
function _l() {
  return !1;
}
var Ha = typeof exports == "object" && exports && !exports.nodeType && exports, Mo = Ha && typeof module == "object" && module && !module.nodeType && module, Sl = Mo && Mo.exports === Ha, Lo = Sl ? Le.Buffer : void 0, Ol = Lo ? Lo.isBuffer : void 0, Al = Ol || _l;
const Gi = Al;
var El = 9007199254740991, xl = /^(?:0|[1-9]\d*)$/;
function Va(e, t) {
  var r = typeof e;
  return t = t ?? El, !!t && (r == "number" || r != "symbol" && xl.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Tl = 9007199254740991;
function fo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Tl;
}
var Pl = "[object Arguments]", Cl = "[object Array]", $l = "[object Boolean]", Rl = "[object Date]", Il = "[object Error]", Fl = "[object Function]", Nl = "[object Map]", Dl = "[object Number]", Ml = "[object Object]", Ll = "[object RegExp]", jl = "[object Set]", Bl = "[object String]", kl = "[object WeakMap]", Ul = "[object ArrayBuffer]", Hl = "[object DataView]", Vl = "[object Float32Array]", zl = "[object Float64Array]", ql = "[object Int8Array]", Gl = "[object Int16Array]", Wl = "[object Int32Array]", Kl = "[object Uint8Array]", Jl = "[object Uint8ClampedArray]", Xl = "[object Uint16Array]", Ql = "[object Uint32Array]", H = {};
H[Vl] = H[zl] = H[ql] = H[Gl] = H[Wl] = H[Kl] = H[Jl] = H[Xl] = H[Ql] = !0;
H[Pl] = H[Cl] = H[Ul] = H[$l] = H[Hl] = H[Rl] = H[Il] = H[Fl] = H[Nl] = H[Dl] = H[Ml] = H[Ll] = H[jl] = H[Bl] = H[kl] = !1;
function Yl(e) {
  return Dt(e) && fo(e.length) && !!H[Ht(e)];
}
function Zl(e) {
  return function(t) {
    return e(t);
  };
}
var za = typeof exports == "object" && exports && !exports.nodeType && exports, mr = za && typeof module == "object" && module && !module.nodeType && module, ec = mr && mr.exports === za, Ti = ec && ja.process, tc = function() {
  try {
    var e = mr && mr.require && mr.require("util").types;
    return e || Ti && Ti.binding && Ti.binding("util");
  } catch {
  }
}();
const jo = tc;
var Bo = jo && jo.isTypedArray, rc = Bo ? Zl(Bo) : Yl;
const qa = rc;
var nc = Object.prototype, ic = nc.hasOwnProperty;
function oc(e, t) {
  var r = Te(e), n = !r && Ua(e), o = !r && !n && Gi(e), a = !r && !n && !o && qa(e), s = r || n || o || a, c = s ? nl(e.length, String) : [], d = c.length;
  for (var u in e)
    (t || ic.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Va(u, d))) && c.push(u);
  return c;
}
var ac = Object.prototype;
function sc(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ac;
  return e === r;
}
function lc(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var cc = lc(Object.keys, Object);
const uc = cc;
var fc = Object.prototype, dc = fc.hasOwnProperty;
function pc(e) {
  if (!sc(e))
    return uc(e);
  var t = [];
  for (var r in Object(e))
    dc.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Mt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var hc = "[object AsyncFunction]", yc = "[object Function]", gc = "[object GeneratorFunction]", mc = "[object Proxy]";
function Ga(e) {
  if (!Mt(e))
    return !1;
  var t = Ht(e);
  return t == yc || t == gc || t == hc || t == mc;
}
function po(e) {
  return e != null && fo(e.length) && !Ga(e);
}
function On(e) {
  return po(e) ? oc(e) : pc(e);
}
function vc(e, t) {
  return e && rl(e, t, On);
}
function bc(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!po(r))
      return e(r, n);
    for (var o = r.length, a = t ? o : -1, s = Object(r); (t ? a-- : ++a < o) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var wc = bc(vc);
const Wa = wc;
function Ka(e) {
  return e;
}
function _c(e) {
  return typeof e == "function" ? e : Ka;
}
function Sc(e, t) {
  var r = Te(e) ? Zs : Wa;
  return r(e, _c(t));
}
function Oc() {
  this.__data__ = [], this.size = 0;
}
function Ja(e, t) {
  return e === t || e !== e && t !== t;
}
function An(e, t) {
  for (var r = e.length; r--; )
    if (Ja(e[r][0], t))
      return r;
  return -1;
}
var Ac = Array.prototype, Ec = Ac.splice;
function xc(e) {
  var t = this.__data__, r = An(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ec.call(t, r, 1), --this.size, !0;
}
function Tc(e) {
  var t = this.__data__, r = An(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Pc(e) {
  return An(this.__data__, e) > -1;
}
function Cc(e, t) {
  var r = this.__data__, n = An(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ke.prototype.clear = Oc;
Ke.prototype.delete = xc;
Ke.prototype.get = Tc;
Ke.prototype.has = Pc;
Ke.prototype.set = Cc;
function $c() {
  this.__data__ = new Ke(), this.size = 0;
}
function Rc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Ic(e) {
  return this.__data__.get(e);
}
function Fc(e) {
  return this.__data__.has(e);
}
var Nc = Le["__core-js_shared__"];
const Pi = Nc;
var ko = function() {
  var e = /[^.]+$/.exec(Pi && Pi.keys && Pi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Dc(e) {
  return !!ko && ko in e;
}
var Mc = Function.prototype, Lc = Mc.toString;
function mt(e) {
  if (e != null) {
    try {
      return Lc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jc = /[\\^$.*+?()[\]{}|]/g, Bc = /^\[object .+?Constructor\]$/, kc = Function.prototype, Uc = Object.prototype, Hc = kc.toString, Vc = Uc.hasOwnProperty, zc = RegExp(
  "^" + Hc.call(Vc).replace(jc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qc(e) {
  if (!Mt(e) || Dc(e))
    return !1;
  var t = Ga(e) ? zc : Bc;
  return t.test(mt(e));
}
function Gc(e, t) {
  return e == null ? void 0 : e[t];
}
function Vt(e, t) {
  var r = Gc(e, t);
  return qc(r) ? r : void 0;
}
var Wc = Vt(Le, "Map");
const _r = Wc;
var Kc = Vt(Object, "create");
const Sr = Kc;
function Jc() {
  this.__data__ = Sr ? Sr(null) : {}, this.size = 0;
}
function Xc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qc = "__lodash_hash_undefined__", Yc = Object.prototype, Zc = Yc.hasOwnProperty;
function eu(e) {
  var t = this.__data__;
  if (Sr) {
    var r = t[e];
    return r === Qc ? void 0 : r;
  }
  return Zc.call(t, e) ? t[e] : void 0;
}
var tu = Object.prototype, ru = tu.hasOwnProperty;
function nu(e) {
  var t = this.__data__;
  return Sr ? t[e] !== void 0 : ru.call(t, e);
}
var iu = "__lodash_hash_undefined__";
function ou(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Sr && t === void 0 ? iu : t, this;
}
function gt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gt.prototype.clear = Jc;
gt.prototype.delete = Xc;
gt.prototype.get = eu;
gt.prototype.has = nu;
gt.prototype.set = ou;
function au() {
  this.size = 0, this.__data__ = {
    hash: new gt(),
    map: new (_r || Ke)(),
    string: new gt()
  };
}
function su(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function En(e, t) {
  var r = e.__data__;
  return su(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function lu(e) {
  var t = En(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function cu(e) {
  return En(this, e).get(e);
}
function uu(e) {
  return En(this, e).has(e);
}
function fu(e, t) {
  var r = En(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Je(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Je.prototype.clear = au;
Je.prototype.delete = lu;
Je.prototype.get = cu;
Je.prototype.has = uu;
Je.prototype.set = fu;
var du = 200;
function pu(e, t) {
  var r = this.__data__;
  if (r instanceof Ke) {
    var n = r.__data__;
    if (!_r || n.length < du - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Je(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ge(e) {
  var t = this.__data__ = new Ke(e);
  this.size = t.size;
}
Ge.prototype.clear = $c;
Ge.prototype.delete = Rc;
Ge.prototype.get = Ic;
Ge.prototype.has = Fc;
Ge.prototype.set = pu;
var hu = "__lodash_hash_undefined__";
function yu(e) {
  return this.__data__.set(e, hu), this;
}
function gu(e) {
  return this.__data__.has(e);
}
function pn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Je(); ++t < r; )
    this.add(e[t]);
}
pn.prototype.add = pn.prototype.push = yu;
pn.prototype.has = gu;
function mu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function vu(e, t) {
  return e.has(t);
}
var bu = 1, wu = 2;
function Xa(e, t, r, n, o, a) {
  var s = r & bu, c = e.length, d = t.length;
  if (c != d && !(s && d > c))
    return !1;
  var u = a.get(e), h = a.get(t);
  if (u && h)
    return u == t && h == e;
  var v = -1, b = !0, w = r & wu ? new pn() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < c; ) {
    var p = e[v], y = t[v];
    if (n)
      var _ = s ? n(y, p, v, t, e, a) : n(p, y, v, e, t, a);
    if (_ !== void 0) {
      if (_)
        continue;
      b = !1;
      break;
    }
    if (w) {
      if (!mu(t, function(S, T) {
        if (!vu(w, T) && (p === S || o(p, S, r, n, a)))
          return w.push(T);
      })) {
        b = !1;
        break;
      }
    } else if (!(p === y || o(p, y, r, n, a))) {
      b = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), b;
}
var _u = Le.Uint8Array;
const Uo = _u;
function Su(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
function Ou(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Au = 1, Eu = 2, xu = "[object Boolean]", Tu = "[object Date]", Pu = "[object Error]", Cu = "[object Map]", $u = "[object Number]", Ru = "[object RegExp]", Iu = "[object Set]", Fu = "[object String]", Nu = "[object Symbol]", Du = "[object ArrayBuffer]", Mu = "[object DataView]", Ho = rt ? rt.prototype : void 0, Ci = Ho ? Ho.valueOf : void 0;
function Lu(e, t, r, n, o, a, s) {
  switch (r) {
    case Mu:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Du:
      return !(e.byteLength != t.byteLength || !a(new Uo(e), new Uo(t)));
    case xu:
    case Tu:
    case $u:
      return Ja(+e, +t);
    case Pu:
      return e.name == t.name && e.message == t.message;
    case Ru:
    case Fu:
      return e == t + "";
    case Cu:
      var c = Su;
    case Iu:
      var d = n & Au;
      if (c || (c = Ou), e.size != t.size && !d)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      n |= Eu, s.set(e, t);
      var h = Xa(c(e), c(t), n, o, a, s);
      return s.delete(e), h;
    case Nu:
      if (Ci)
        return Ci.call(e) == Ci.call(t);
  }
  return !1;
}
function ju(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
function Bu(e, t, r) {
  var n = t(e);
  return Te(e) ? n : ju(n, r(e));
}
function Qa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[o++] = s);
  }
  return a;
}
function ku() {
  return [];
}
var Uu = Object.prototype, Hu = Uu.propertyIsEnumerable, Vo = Object.getOwnPropertySymbols, Vu = Vo ? function(e) {
  return e == null ? [] : (e = Object(e), Qa(Vo(e), function(t) {
    return Hu.call(e, t);
  }));
} : ku;
const zu = Vu;
function zo(e) {
  return Bu(e, On, zu);
}
var qu = 1, Gu = Object.prototype, Wu = Gu.hasOwnProperty;
function Ku(e, t, r, n, o, a) {
  var s = r & qu, c = zo(e), d = c.length, u = zo(t), h = u.length;
  if (d != h && !s)
    return !1;
  for (var v = d; v--; ) {
    var b = c[v];
    if (!(s ? b in t : Wu.call(t, b)))
      return !1;
  }
  var w = a.get(e), p = a.get(t);
  if (w && p)
    return w == t && p == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var _ = s; ++v < d; ) {
    b = c[v];
    var S = e[b], T = t[b];
    if (n)
      var I = s ? n(T, S, b, t, e, a) : n(S, T, b, e, t, a);
    if (!(I === void 0 ? S === T || o(S, T, r, n, a) : I)) {
      y = !1;
      break;
    }
    _ || (_ = b == "constructor");
  }
  if (y && !_) {
    var C = e.constructor, N = t.constructor;
    C != N && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof N == "function" && N instanceof N) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var Ju = Vt(Le, "DataView");
const Wi = Ju;
var Xu = Vt(Le, "Promise");
const Ki = Xu;
var Qu = Vt(Le, "Set");
const Ji = Qu;
var Yu = Vt(Le, "WeakMap");
const Xi = Yu;
var qo = "[object Map]", Zu = "[object Object]", Go = "[object Promise]", Wo = "[object Set]", Ko = "[object WeakMap]", Jo = "[object DataView]", ef = mt(Wi), tf = mt(_r), rf = mt(Ki), nf = mt(Ji), of = mt(Xi), ft = Ht;
(Wi && ft(new Wi(new ArrayBuffer(1))) != Jo || _r && ft(new _r()) != qo || Ki && ft(Ki.resolve()) != Go || Ji && ft(new Ji()) != Wo || Xi && ft(new Xi()) != Ko) && (ft = function(e) {
  var t = Ht(e), r = t == Zu ? e.constructor : void 0, n = r ? mt(r) : "";
  if (n)
    switch (n) {
      case ef:
        return Jo;
      case tf:
        return qo;
      case rf:
        return Go;
      case nf:
        return Wo;
      case of:
        return Ko;
    }
  return t;
});
const Xo = ft;
var af = 1, Qo = "[object Arguments]", Yo = "[object Array]", en = "[object Object]", sf = Object.prototype, Zo = sf.hasOwnProperty;
function lf(e, t, r, n, o, a) {
  var s = Te(e), c = Te(t), d = s ? Yo : Xo(e), u = c ? Yo : Xo(t);
  d = d == Qo ? en : d, u = u == Qo ? en : u;
  var h = d == en, v = u == en, b = d == u;
  if (b && Gi(e)) {
    if (!Gi(t))
      return !1;
    s = !0, h = !1;
  }
  if (b && !h)
    return a || (a = new Ge()), s || qa(e) ? Xa(e, t, r, n, o, a) : Lu(e, t, d, r, n, o, a);
  if (!(r & af)) {
    var w = h && Zo.call(e, "__wrapped__"), p = v && Zo.call(t, "__wrapped__");
    if (w || p) {
      var y = w ? e.value() : e, _ = p ? t.value() : t;
      return a || (a = new Ge()), o(y, _, r, n, a);
    }
  }
  return b ? (a || (a = new Ge()), Ku(e, t, r, n, o, a)) : !1;
}
function ho(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Dt(e) && !Dt(t) ? e !== e && t !== t : lf(e, t, r, n, ho, o);
}
var cf = function() {
  return Le.Date.now();
};
const $i = cf;
var uf = /\s/;
function ff(e) {
  for (var t = e.length; t-- && uf.test(e.charAt(t)); )
    ;
  return t;
}
var df = /^\s+/;
function pf(e) {
  return e && e.slice(0, ff(e) + 1).replace(df, "");
}
var hf = "[object Symbol]";
function xn(e) {
  return typeof e == "symbol" || Dt(e) && Ht(e) == hf;
}
var ea = 0 / 0, yf = /^[-+]0x[0-9a-f]+$/i, gf = /^0b[01]+$/i, mf = /^0o[0-7]+$/i, vf = parseInt;
function Qi(e) {
  if (typeof e == "number")
    return e;
  if (xn(e))
    return ea;
  if (Mt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Mt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = pf(e);
  var r = gf.test(e);
  return r || mf.test(e) ? vf(e.slice(2), r ? 2 : 8) : yf.test(e) ? ea : +e;
}
var bf = "Expected a function", wf = Math.max, _f = Math.min;
function Ya(e, t, r) {
  var n, o, a, s, c, d, u = 0, h = !1, v = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(bf);
  t = Qi(t) || 0, Mt(r) && (h = !!r.leading, v = "maxWait" in r, a = v ? wf(Qi(r.maxWait) || 0, t) : a, b = "trailing" in r ? !!r.trailing : b);
  function w(O) {
    var P = n, D = o;
    return n = o = void 0, u = O, s = e.apply(D, P), s;
  }
  function p(O) {
    return u = O, c = setTimeout(S, t), h ? w(O) : s;
  }
  function y(O) {
    var P = O - d, D = O - u, G = t - P;
    return v ? _f(G, a - D) : G;
  }
  function _(O) {
    var P = O - d, D = O - u;
    return d === void 0 || P >= t || P < 0 || v && D >= a;
  }
  function S() {
    var O = $i();
    if (_(O))
      return T(O);
    c = setTimeout(S, y(O));
  }
  function T(O) {
    return c = void 0, b && n ? w(O) : (n = o = void 0, s);
  }
  function I() {
    c !== void 0 && clearTimeout(c), u = 0, n = d = o = c = void 0;
  }
  function C() {
    return c === void 0 ? s : T($i());
  }
  function N() {
    var O = $i(), P = _(O);
    if (n = arguments, o = this, d = O, P) {
      if (c === void 0)
        return p(d);
      if (v)
        return clearTimeout(c), c = setTimeout(S, t), w(d);
    }
    return c === void 0 && (c = setTimeout(S, t)), s;
  }
  return N.cancel = I, N.flush = C, N;
}
const Lm = {
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
      return Sc(n, (o) => {
        o.value && (o.key in this.errors ? r[o.key] = "" : r[o.key] = o.value);
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
                let o = {};
                n.forEach((a) => {
                  let s = this.tableData.search[a].value;
                  s != "" && s != null && (o[a] = s);
                }), Object.keys(o).length > 0 && (e.search = o);
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
      handler: Ya(function(e, t) {
        this.requestData();
      }, 350)
    }
  }
}, ge = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, Sf = _n({
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
    let e = Sn(!1);
    const t = (r) => {
      e.value && r.key === "Escape" && (e.value = !1);
    };
    return Ks(() => document.addEventListener("keydown", t)), Js(() => document.removeEventListener("keydown", t)), {
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
}), Of = { class: "relative" };
function Af(e, t, r, n, o, a) {
  return A(), $("div", Of, [
    E("div", {
      onClick: t[0] || (t[0] = (s) => e.open = !e.open)
    }, [
      Y(e.$slots, "trigger")
    ]),
    yt(E("div", {
      class: "fixed inset-0 z-40 bg-black/30",
      onClick: t[1] || (t[1] = Er((s) => e.open = !1, ["self"]))
    }, null, 512), [
      [Nt, e.open]
    ]),
    Me(Xs, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95"
    }, {
      default: se(() => [
        yt(E("div", {
          class: ve(["absolute z-50 mt-2 rounded-md shadow-lg", [e.widthClass, e.alignmentClasses]]),
          style: { display: "none" },
          onClick: t[2] || (t[2] = (...s) => e.autoClose && e.autoClose(...s))
        }, [
          E("div", {
            class: ve(["rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5", e.contentClasses])
          }, [
            Y(e.$slots, "content")
          ], 2)
        ], 2), [
          [Nt, e.open]
        ])
      ]),
      _: 3
    })
  ]);
}
const Za = /* @__PURE__ */ ge(Sf, [["render", Af]]), Ef = {
  components: {
    DropdownComp: Za
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
}, xf = ["disabled"];
function Tf(e, t, r, n, o, a) {
  const s = V("DropdownComp");
  return A(), q(s, { "close-on-click": r.closeOnClick }, {
    trigger: se(() => [
      E("button", {
        type: "button",
        disabled: r.disabled,
        class: ve(["btn btn-slate", { "cursor-not-allowed": r.disabled }]),
        "aria-haspopup": "true",
        ref: "button"
      }, [
        Y(e.$slots, "button")
      ], 10, xf)
    ]),
    content: se(() => [
      Y(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["close-on-click"]);
}
const es = /* @__PURE__ */ ge(Ef, [["render", Tf]]);
function ts(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Pf } = Object.prototype, { getPrototypeOf: yo } = Object, Tn = ((e) => (t) => {
  const r = Pf.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), je = (e) => (e = e.toLowerCase(), (t) => Tn(t) === e), Pn = (e) => (t) => typeof t === e, { isArray: zt } = Array, Or = Pn("undefined");
function Cf(e) {
  return e !== null && !Or(e) && e.constructor !== null && !Or(e.constructor) && we(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rs = je("ArrayBuffer");
function $f(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rs(e.buffer), t;
}
const Rf = Pn("string"), we = Pn("function"), ns = Pn("number"), Cn = (e) => e !== null && typeof e == "object", If = (e) => e === !0 || e === !1, ln = (e) => {
  if (Tn(e) !== "object")
    return !1;
  const t = yo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ff = je("Date"), Nf = je("File"), Df = je("Blob"), Mf = je("FileList"), Lf = (e) => Cn(e) && we(e.pipe), jf = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || we(e.append) && ((t = Tn(e)) === "formdata" || // detect form-data instance
  t === "object" && we(e.toString) && e.toString() === "[object FormData]"));
}, Bf = je("URLSearchParams"), kf = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), zt(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let c;
    for (n = 0; n < s; n++)
      c = a[n], t.call(null, e[c], c, e);
  }
}
function is(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const os = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), as = (e) => !Or(e) && e !== os;
function Yi() {
  const { caseless: e } = as(this) && this || {}, t = {}, r = (n, o) => {
    const a = e && is(t, o) || o;
    ln(t[a]) && ln(n) ? t[a] = Yi(t[a], n) : ln(n) ? t[a] = Yi({}, n) : zt(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && xr(arguments[n], r);
  return t;
}
const Uf = (e, t, r, { allOwnKeys: n } = {}) => (xr(t, (o, a) => {
  r && we(o) ? e[a] = ts(o, r) : e[a] = o;
}, { allOwnKeys: n }), e), Hf = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Vf = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, zf = (e, t, r, n) => {
  let o, a, s;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!n || n(s, e, t)) && !c[s] && (t[s] = e[s], c[s] = !0);
    e = r !== !1 && yo(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, qf = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Gf = (e) => {
  if (!e)
    return null;
  if (zt(e))
    return e;
  let t = e.length;
  if (!ns(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Wf = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && yo(Uint8Array)), Kf = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, Jf = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Xf = je("HTMLFormElement"), Qf = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ta = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Yf = je("RegExp"), ss = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  xr(r, (o, a) => {
    t(o, a, e) !== !1 && (n[a] = o);
  }), Object.defineProperties(e, n);
}, Zf = (e) => {
  ss(e, (t, r) => {
    if (we(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (we(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ed = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return zt(e) ? n(e) : n(String(e).split(t)), r;
}, td = () => {
}, rd = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ri = "abcdefghijklmnopqrstuvwxyz", ra = "0123456789", ls = {
  DIGIT: ra,
  ALPHA: Ri,
  ALPHA_DIGIT: Ri + Ri.toUpperCase() + ra
}, nd = (e = 16, t = ls.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function id(e) {
  return !!(e && we(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const od = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Cn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = zt(n) ? [] : {};
        return xr(n, (s, c) => {
          const d = r(s, o + 1);
          !Or(d) && (a[c] = d);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, ad = je("AsyncFunction"), sd = (e) => e && (Cn(e) || we(e)) && we(e.then) && we(e.catch), m = {
  isArray: zt,
  isArrayBuffer: rs,
  isBuffer: Cf,
  isFormData: jf,
  isArrayBufferView: $f,
  isString: Rf,
  isNumber: ns,
  isBoolean: If,
  isObject: Cn,
  isPlainObject: ln,
  isUndefined: Or,
  isDate: Ff,
  isFile: Nf,
  isBlob: Df,
  isRegExp: Yf,
  isFunction: we,
  isStream: Lf,
  isURLSearchParams: Bf,
  isTypedArray: Wf,
  isFileList: Mf,
  forEach: xr,
  merge: Yi,
  extend: Uf,
  trim: kf,
  stripBOM: Hf,
  inherits: Vf,
  toFlatObject: zf,
  kindOf: Tn,
  kindOfTest: je,
  endsWith: qf,
  toArray: Gf,
  forEachEntry: Kf,
  matchAll: Jf,
  isHTMLForm: Xf,
  hasOwnProperty: ta,
  hasOwnProp: ta,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ss,
  freezeMethods: Zf,
  toObjectSet: ed,
  toCamelCase: Qf,
  noop: td,
  toFiniteNumber: rd,
  findKey: is,
  global: os,
  isContextDefined: as,
  ALPHABET: ls,
  generateString: nd,
  isSpecCompliantForm: id,
  toJSONObject: od,
  isAsyncFn: ad,
  isThenable: sd
};
function j(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
m.inherits(j, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const cs = j.prototype, us = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  us[e] = { value: e };
});
Object.defineProperties(j, us);
Object.defineProperty(cs, "isAxiosError", { value: !0 });
j.from = (e, t, r, n, o, a) => {
  const s = Object.create(cs);
  return m.toFlatObject(e, s, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), j.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const ld = null;
function Zi(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function fs(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function na(e, t, r) {
  return e ? e.concat(t).map(function(o, a) {
    return o = fs(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function cd(e) {
  return m.isArray(e) && !e.some(Zi);
}
const ud = m.toFlatObject(m, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $n(e, t, r) {
  if (!m.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = m.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, _) {
    return !m.isUndefined(_[y]);
  });
  const n = r.metaTokens, o = r.visitor || h, a = r.dots, s = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(t);
  if (!m.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null)
      return "";
    if (m.isDate(p))
      return p.toISOString();
    if (!d && m.isBlob(p))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(p) || m.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function h(p, y, _) {
    let S = p;
    if (p && !_ && typeof p == "object") {
      if (m.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (m.isArray(p) && cd(p) || (m.isFileList(p) || m.endsWith(y, "[]")) && (S = m.toArray(p)))
        return y = fs(y), S.forEach(function(I, C) {
          !(m.isUndefined(I) || I === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? na([y], C, a) : s === null ? y : y + "[]",
            u(I)
          );
        }), !1;
    }
    return Zi(p) ? !0 : (t.append(na(_, y, a), u(p)), !1);
  }
  const v = [], b = Object.assign(ud, {
    defaultVisitor: h,
    convertValue: u,
    isVisitable: Zi
  });
  function w(p, y) {
    if (!m.isUndefined(p)) {
      if (v.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      v.push(p), m.forEach(p, function(S, T) {
        (!(m.isUndefined(S) || S === null) && o.call(
          t,
          S,
          m.isString(T) ? T.trim() : T,
          y,
          b
        )) === !0 && w(S, y ? y.concat(T) : [T]);
      }), v.pop();
    }
  }
  if (!m.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function ia(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function go(e, t) {
  this._pairs = [], e && $n(e, this, t);
}
const ds = go.prototype;
ds.append = function(t, r) {
  this._pairs.push([t, r]);
};
ds.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ia);
  } : ia;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function fd(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ps(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || fd, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = m.isURLSearchParams(t) ? t.toString() : new go(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class dd {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    m.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const oa = dd, hs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, pd = typeof URLSearchParams < "u" ? URLSearchParams : go, hd = typeof FormData < "u" ? FormData : null, yd = typeof Blob < "u" ? Blob : null, gd = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), md = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), De = {
  isBrowser: !0,
  classes: {
    URLSearchParams: pd,
    FormData: hd,
    Blob: yd
  },
  isStandardBrowserEnv: gd,
  isStandardBrowserWebWorkerEnv: md,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function vd(e, t) {
  return $n(e, new De.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return De.isNode && m.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function bd(e) {
  return m.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function wd(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function ys(e) {
  function t(r, n, o, a) {
    let s = r[a++];
    const c = Number.isFinite(+s), d = a >= r.length;
    return s = !s && m.isArray(o) ? o.length : s, d ? (m.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !c) : ((!o[s] || !m.isObject(o[s])) && (o[s] = []), t(r, n, o[s], a) && m.isArray(o[s]) && (o[s] = wd(o[s])), !c);
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const r = {};
    return m.forEachEntry(e, (n, o) => {
      t(bd(n), o, r, 0);
    }), r;
  }
  return null;
}
const _d = {
  "Content-Type": void 0
};
function Sd(e, t, r) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Rn = {
  transitional: hs,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = m.isObject(t);
    if (a && m.isHTMLForm(t) && (t = new FormData(t)), m.isFormData(t))
      return o && o ? JSON.stringify(ys(t)) : t;
    if (m.isArrayBuffer(t) || m.isBuffer(t) || m.isStream(t) || m.isFile(t) || m.isBlob(t))
      return t;
    if (m.isArrayBufferView(t))
      return t.buffer;
    if (m.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return vd(t, this.formSerializer).toString();
      if ((c = m.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return $n(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), Sd(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Rn.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && m.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? j.from(c, j.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: De.classes.FormData,
    Blob: De.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
m.forEach(["delete", "get", "head"], function(t) {
  Rn.headers[t] = {};
});
m.forEach(["post", "put", "patch"], function(t) {
  Rn.headers[t] = m.merge(_d);
});
const mo = Rn, Od = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ad = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && Od[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, aa = Symbol("internals");
function pr(e) {
  return e && String(e).trim().toLowerCase();
}
function cn(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(cn) : String(e);
}
function Ed(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const xd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ii(e, t, r, n, o) {
  if (m.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!m.isString(t)) {
    if (m.isString(n))
      return t.indexOf(n) !== -1;
    if (m.isRegExp(n))
      return n.test(t);
  }
}
function Td(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Pd(e, t) {
  const r = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, a, s) {
        return this[n].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
class In {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function a(c, d, u) {
      const h = pr(d);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const v = m.findKey(o, h);
      (!v || o[v] === void 0 || u === !0 || u === void 0 && o[v] !== !1) && (o[v || d] = cn(c));
    }
    const s = (c, d) => m.forEach(c, (u, h) => a(u, h, d));
    return m.isPlainObject(t) || t instanceof this.constructor ? s(t, r) : m.isString(t) && (t = t.trim()) && !xd(t) ? s(Ad(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = pr(t), t) {
      const n = m.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Ed(o);
        if (m.isFunction(r))
          return r.call(this, o, n);
        if (m.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = pr(t), t) {
      const n = m.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ii(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(s) {
      if (s = pr(s), s) {
        const c = m.findKey(n, s);
        c && (!r || Ii(n, n[c], c, r)) && (delete n[c], o = !0);
      }
    }
    return m.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Ii(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return m.forEach(this, (o, a) => {
      const s = m.findKey(n, a);
      if (s) {
        r[s] = cn(o), delete r[a];
        return;
      }
      const c = t ? Td(a) : String(a).trim();
      c !== a && delete r[a], r[c] = cn(o), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && m.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[aa] = this[aa] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const c = pr(s);
      n[c] || (Pd(o, s), n[c] = !0);
    }
    return m.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
In.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.freezeMethods(In.prototype);
m.freezeMethods(In);
const We = In;
function Fi(e, t) {
  const r = this || mo, n = t || r, o = We.from(n.headers);
  let a = n.data;
  return m.forEach(e, function(c) {
    a = c.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function gs(e) {
  return !!(e && e.__CANCEL__);
}
function Tr(e, t, r) {
  j.call(this, e ?? "canceled", j.ERR_CANCELED, t, r), this.name = "CanceledError";
}
m.inherits(Tr, j, {
  __CANCEL__: !0
});
function Cd(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new j(
    "Request failed with status code " + r.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const $d = De.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, a, s, c) {
        const d = [];
        d.push(r + "=" + encodeURIComponent(n)), m.isNumber(o) && d.push("expires=" + new Date(o).toGMTString()), m.isString(a) && d.push("path=" + a), m.isString(s) && d.push("domain=" + s), c === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Rd(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Id(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ms(e, t) {
  return e && !Rd(t) ? Id(e, t) : t;
}
const Fd = De.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(a) {
      let s = a;
      return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(s) {
      const c = m.isString(s) ? o(s) : s;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Nd(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Dd(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), h = n[a];
    s || (s = u), r[o] = d, n[o] = u;
    let v = a, b = 0;
    for (; v !== o; )
      b += r[v++], v = v % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - s < t)
      return;
    const w = h && u - h;
    return w ? Math.round(b * 1e3 / w) : void 0;
  };
}
function sa(e, t) {
  let r = 0;
  const n = Dd(50, 250);
  return (o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, c = a - r, d = n(c), u = a <= s;
    r = a;
    const h = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && s && u ? (s - a) / d : void 0,
      event: o
    };
    h[t ? "download" : "upload"] = !0, e(h);
  };
}
const Md = typeof XMLHttpRequest < "u", Ld = Md && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const a = We.from(e.headers).normalize(), s = e.responseType;
    let c;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    m.isFormData(o) && (De.isStandardBrowserEnv || De.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(w + ":" + p));
    }
    const h = ms(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), ps(h, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function v() {
      if (!u)
        return;
      const w = We.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: w,
        config: e,
        request: u
      };
      Cd(function(S) {
        r(S), d();
      }, function(S) {
        n(S), d();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = v : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, u.onabort = function() {
      u && (n(new j("Request aborted", j.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new j("Network Error", j.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || hs;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new j(
        p,
        y.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        e,
        u
      )), u = null;
    }, De.isStandardBrowserEnv) {
      const w = (e.withCredentials || Fd(h)) && e.xsrfCookieName && $d.read(e.xsrfCookieName);
      w && a.set(e.xsrfHeaderName, w);
    }
    o === void 0 && a.setContentType(null), "setRequestHeader" in u && m.forEach(a.toJSON(), function(p, y) {
      u.setRequestHeader(y, p);
    }), m.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", sa(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", sa(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (w) => {
      u && (n(!w || w.type ? new Tr(null, e, u) : w), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const b = Nd(h);
    if (b && De.protocols.indexOf(b) === -1) {
      n(new j("Unsupported protocol " + b + ":", j.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, un = {
  http: ld,
  xhr: Ld
};
m.forEach(un, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const jd = {
  getAdapter: (e) => {
    e = m.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = m.isString(r) ? un[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new j(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        m.hasOwnProp(un, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!m.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: un
};
function Ni(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Tr(null, e);
}
function la(e) {
  return Ni(e), e.headers = We.from(e.headers), e.data = Fi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), jd.getAdapter(e.adapter || mo.adapter)(e).then(function(n) {
    return Ni(e), n.data = Fi.call(
      e,
      e.transformResponse,
      n
    ), n.headers = We.from(n.headers), n;
  }, function(n) {
    return gs(n) || (Ni(e), n && n.response && (n.response.data = Fi.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = We.from(n.response.headers))), Promise.reject(n);
  });
}
const ca = (e) => e instanceof We ? e.toJSON() : e;
function Lt(e, t) {
  t = t || {};
  const r = {};
  function n(u, h, v) {
    return m.isPlainObject(u) && m.isPlainObject(h) ? m.merge.call({ caseless: v }, u, h) : m.isPlainObject(h) ? m.merge({}, h) : m.isArray(h) ? h.slice() : h;
  }
  function o(u, h, v) {
    if (m.isUndefined(h)) {
      if (!m.isUndefined(u))
        return n(void 0, u, v);
    } else
      return n(u, h, v);
  }
  function a(u, h) {
    if (!m.isUndefined(h))
      return n(void 0, h);
  }
  function s(u, h) {
    if (m.isUndefined(h)) {
      if (!m.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, h);
  }
  function c(u, h, v) {
    if (v in t)
      return n(u, h);
    if (v in e)
      return n(void 0, u);
  }
  const d = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: c,
    headers: (u, h) => o(ca(u), ca(h), !0)
  };
  return m.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const v = d[h] || o, b = v(e[h], t[h], h);
    m.isUndefined(b) && v !== c || (r[h] = b);
  }), r;
}
const vs = "1.4.0", vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  vo[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ua = {};
vo.transitional = function(t, r, n) {
  function o(a, s) {
    return "[Axios v" + vs + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, c) => {
    if (t === !1)
      throw new j(
        o(s, " has been removed" + (r ? " in " + r : "")),
        j.ERR_DEPRECATED
      );
    return r && !ua[s] && (ua[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, c) : !0;
  };
};
function Bd(e, t, r) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], s = t[a];
    if (s) {
      const c = e[a], d = c === void 0 || s(c, a, e);
      if (d !== !0)
        throw new j("option " + a + " must be " + d, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new j("Unknown option " + a, j.ERR_BAD_OPTION);
  }
}
const eo = {
  assertOptions: Bd,
  validators: vo
}, Ze = eo.validators;
class hn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new oa(),
      response: new oa()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Lt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && eo.assertOptions(n, {
      silentJSONParsing: Ze.transitional(Ze.boolean),
      forcedJSONParsing: Ze.transitional(Ze.boolean),
      clarifyTimeoutError: Ze.transitional(Ze.boolean)
    }, !1), o != null && (m.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : eo.assertOptions(o, {
      encode: Ze.function,
      serialize: Ze.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = a && m.merge(
      a.common,
      a[r.method]
    ), s && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), r.headers = We.concat(s, a);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (d = d && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let h, v = 0, b;
    if (!d) {
      const p = [la.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, u), b = p.length, h = Promise.resolve(r); v < b; )
        h = h.then(p[v++], p[v++]);
      return h;
    }
    b = c.length;
    let w = r;
    for (v = 0; v < b; ) {
      const p = c[v++], y = c[v++];
      try {
        w = p(w);
      } catch (_) {
        y.call(this, _);
        break;
      }
    }
    try {
      h = la.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (v = 0, b = u.length; v < b; )
      h = h.then(u[v++], u[v++]);
    return h;
  }
  getUri(t) {
    t = Lt(this.defaults, t);
    const r = ms(t.baseURL, t.url);
    return ps(r, t.params, t.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function(t) {
  hn.prototype[t] = function(r, n) {
    return this.request(Lt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, c) {
      return this.request(Lt(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  hn.prototype[t] = r(), hn.prototype[t + "Form"] = r(!0);
});
const fn = hn;
class bo {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((c) => {
        n.subscribe(c), a = c;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, t(function(a, s, c) {
      n.reason || (n.reason = new Tr(a, s, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new bo(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const kd = bo;
function Ud(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Hd(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const to = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(to).forEach(([e, t]) => {
  to[t] = e;
});
const Vd = to;
function bs(e) {
  const t = new fn(e), r = ts(fn.prototype.request, t);
  return m.extend(r, fn.prototype, t, { allOwnKeys: !0 }), m.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return bs(Lt(e, o));
  }, r;
}
const J = bs(mo);
J.Axios = fn;
J.CanceledError = Tr;
J.CancelToken = kd;
J.isCancel = gs;
J.VERSION = vs;
J.toFormData = $n;
J.AxiosError = j;
J.Cancel = J.CanceledError;
J.all = function(t) {
  return Promise.all(t);
};
J.spread = Ud;
J.isAxiosError = Hd;
J.mergeConfig = Lt;
J.AxiosHeaders = We;
J.formToJSON = (e) => ys(m.isHTMLForm(e) ? new FormData(e) : e);
J.HttpStatusCode = Vd;
J.default = J;
const fa = J;
var qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function qd(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var a = Function.bind.apply(t, o);
        return new a();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Gd = function(t) {
  return Wd(t) && !Kd(t);
};
function Wd(e) {
  return !!e && typeof e == "object";
}
function Kd(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Qd(e);
}
var Jd = typeof Symbol == "function" && Symbol.for, Xd = Jd ? Symbol.for("react.element") : 60103;
function Qd(e) {
  return e.$$typeof === Xd;
}
function Yd(e) {
  return Array.isArray(e) ? [] : {};
}
function Ar(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? jt(Yd(e), e, t) : e;
}
function Zd(e, t, r) {
  return e.concat(t).map(function(n) {
    return Ar(n, r);
  });
}
function ep(e, t) {
  if (!t.customMerge)
    return jt;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : jt;
}
function tp(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function da(e) {
  return Object.keys(e).concat(tp(e));
}
function ws(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function rp(e, t) {
  return ws(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function np(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && da(e).forEach(function(o) {
    n[o] = Ar(e[o], r);
  }), da(t).forEach(function(o) {
    rp(e, o) || (ws(e, o) && r.isMergeableObject(t[o]) ? n[o] = ep(o, r)(e[o], t[o], r) : n[o] = Ar(t[o], r));
  }), n;
}
function jt(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Zd, r.isMergeableObject = r.isMergeableObject || Gd, r.cloneUnlessOtherwiseSpecified = Ar;
  var n = Array.isArray(t), o = Array.isArray(e), a = n === o;
  return a ? n ? r.arrayMerge(e, t, r) : np(e, t, r) : Ar(t, r);
}
jt.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, o) {
    return jt(n, o, r);
  }, {});
};
var ip = jt, op = ip;
const ap = /* @__PURE__ */ zd(op);
var sp = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var o = 42;
  t[r] = o;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(t, r);
    if (s.value !== o || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, pa = typeof Symbol < "u" && Symbol, lp = sp, cp = function() {
  return typeof pa != "function" || typeof Symbol != "function" || typeof pa("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : lp();
}, ha = {
  foo: {}
}, up = Object, fp = function() {
  return { __proto__: ha }.foo === ha.foo && !({ __proto__: null } instanceof up);
}, dp = "Function.prototype.bind called on incompatible ", Di = Array.prototype.slice, pp = Object.prototype.toString, hp = "[object Function]", yp = function(t) {
  var r = this;
  if (typeof r != "function" || pp.call(r) !== hp)
    throw new TypeError(dp + r);
  for (var n = Di.call(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var h = r.apply(
        this,
        n.concat(Di.call(arguments))
      );
      return Object(h) === h ? h : this;
    } else
      return r.apply(
        t,
        n.concat(Di.call(arguments))
      );
  }, s = Math.max(0, r.length - n.length), c = [], d = 0; d < s; d++)
    c.push("$" + d);
  if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, gp = yp, wo = Function.prototype.bind || gp, mp = wo, vp = mp.call(Function.call, Object.prototype.hasOwnProperty), F, Bt = SyntaxError, _s = Function, Ft = TypeError, Mi = function(e) {
  try {
    return _s('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, pt = Object.getOwnPropertyDescriptor;
if (pt)
  try {
    pt({}, "");
  } catch {
    pt = null;
  }
var Li = function() {
  throw new Ft();
}, bp = pt ? function() {
  try {
    return arguments.callee, Li;
  } catch {
    try {
      return pt(arguments, "callee").get;
    } catch {
      return Li;
    }
  }
}() : Li, Ct = cp(), wp = fp(), Q = Object.getPrototypeOf || (wp ? function(e) {
  return e.__proto__;
} : null), Rt = {}, _p = typeof Uint8Array > "u" || !Q ? F : Q(Uint8Array), ht = {
  "%AggregateError%": typeof AggregateError > "u" ? F : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? F : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ct && Q ? Q([][Symbol.iterator]()) : F,
  "%AsyncFromSyncIteratorPrototype%": F,
  "%AsyncFunction%": Rt,
  "%AsyncGenerator%": Rt,
  "%AsyncGeneratorFunction%": Rt,
  "%AsyncIteratorPrototype%": Rt,
  "%Atomics%": typeof Atomics > "u" ? F : Atomics,
  "%BigInt%": typeof BigInt > "u" ? F : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? F : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? F : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? F : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? F : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? F : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? F : FinalizationRegistry,
  "%Function%": _s,
  "%GeneratorFunction%": Rt,
  "%Int8Array%": typeof Int8Array > "u" ? F : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? F : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? F : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ct && Q ? Q(Q([][Symbol.iterator]())) : F,
  "%JSON%": typeof JSON == "object" ? JSON : F,
  "%Map%": typeof Map > "u" ? F : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ct || !Q ? F : Q((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? F : Promise,
  "%Proxy%": typeof Proxy > "u" ? F : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? F : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? F : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ct || !Q ? F : Q((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? F : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ct && Q ? Q(""[Symbol.iterator]()) : F,
  "%Symbol%": Ct ? Symbol : F,
  "%SyntaxError%": Bt,
  "%ThrowTypeError%": bp,
  "%TypedArray%": _p,
  "%TypeError%": Ft,
  "%Uint8Array%": typeof Uint8Array > "u" ? F : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? F : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? F : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? F : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? F : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? F : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? F : WeakSet
};
if (Q)
  try {
    null.error;
  } catch (e) {
    var Sp = Q(Q(e));
    ht["%Error.prototype%"] = Sp;
  }
var Op = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Mi("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Mi("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Mi("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && Q && (r = Q(o.prototype));
  }
  return ht[t] = r, r;
}, ya = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Pr = wo, yn = vp, Ap = Pr.call(Function.call, Array.prototype.concat), Ep = Pr.call(Function.apply, Array.prototype.splice), ga = Pr.call(Function.call, String.prototype.replace), gn = Pr.call(Function.call, String.prototype.slice), xp = Pr.call(Function.call, RegExp.prototype.exec), Tp = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Pp = /\\(\\)?/g, Cp = function(t) {
  var r = gn(t, 0, 1), n = gn(t, -1);
  if (r === "%" && n !== "%")
    throw new Bt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Bt("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return ga(t, Tp, function(a, s, c, d) {
    o[o.length] = c ? ga(d, Pp, "$1") : s || a;
  }), o;
}, $p = function(t, r) {
  var n = t, o;
  if (yn(ya, n) && (o = ya[n], n = "%" + o[0] + "%"), yn(ht, n)) {
    var a = ht[n];
    if (a === Rt && (a = Op(n)), typeof a > "u" && !r)
      throw new Ft("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new Bt("intrinsic " + t + " does not exist!");
}, _o = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Ft("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Ft('"allowMissing" argument must be a boolean');
  if (xp(/^%?[^%]*%?$/, t) === null)
    throw new Bt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Cp(t), o = n.length > 0 ? n[0] : "", a = $p("%" + o + "%", r), s = a.name, c = a.value, d = !1, u = a.alias;
  u && (o = u[0], Ep(n, Ap([0, 1], u)));
  for (var h = 1, v = !0; h < n.length; h += 1) {
    var b = n[h], w = gn(b, 0, 1), p = gn(b, -1);
    if ((w === '"' || w === "'" || w === "`" || p === '"' || p === "'" || p === "`") && w !== p)
      throw new Bt("property names with quotes must have matching quotes");
    if ((b === "constructor" || !v) && (d = !0), o += "." + b, s = "%" + o + "%", yn(ht, s))
      c = ht[s];
    else if (c != null) {
      if (!(b in c)) {
        if (!r)
          throw new Ft("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (pt && h + 1 >= n.length) {
        var y = pt(c, b);
        v = !!y, v && "get" in y && !("originalValue" in y.get) ? c = y.get : c = c[b];
      } else
        v = yn(c, b), c = c[b];
      v && !d && (ht[s] = c);
    }
  }
  return c;
}, Ss = { exports: {} };
(function(e) {
  var t = wo, r = _o, n = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || t.call(o, n), s = r("%Object.getOwnPropertyDescriptor%", !0), c = r("%Object.defineProperty%", !0), d = r("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  e.exports = function(v) {
    var b = a(t, o, arguments);
    if (s && c) {
      var w = s(b, "length");
      w.configurable && c(
        b,
        "length",
        { value: 1 + d(0, v.length - (arguments.length - 1)) }
      );
    }
    return b;
  };
  var u = function() {
    return a(t, n, arguments);
  };
  c ? c(e.exports, "apply", { value: u }) : e.exports.apply = u;
})(Ss);
var Rp = Ss.exports, Os = _o, As = Rp, Ip = As(Os("String.prototype.indexOf")), Fp = function(t, r) {
  var n = Os(t, !!r);
  return typeof n == "function" && Ip(t, ".prototype.") > -1 ? As(n) : n;
};
const Np = {}, Dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Np
}, Symbol.toStringTag, { value: "Module" })), Mp = /* @__PURE__ */ qd(Dp);
var So = typeof Map == "function" && Map.prototype, ji = Object.getOwnPropertyDescriptor && So ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, mn = So && ji && typeof ji.get == "function" ? ji.get : null, ma = So && Map.prototype.forEach, Oo = typeof Set == "function" && Set.prototype, Bi = Object.getOwnPropertyDescriptor && Oo ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, vn = Oo && Bi && typeof Bi.get == "function" ? Bi.get : null, va = Oo && Set.prototype.forEach, Lp = typeof WeakMap == "function" && WeakMap.prototype, vr = Lp ? WeakMap.prototype.has : null, jp = typeof WeakSet == "function" && WeakSet.prototype, br = jp ? WeakSet.prototype.has : null, Bp = typeof WeakRef == "function" && WeakRef.prototype, ba = Bp ? WeakRef.prototype.deref : null, kp = Boolean.prototype.valueOf, Up = Object.prototype.toString, Hp = Function.prototype.toString, Vp = String.prototype.match, Ao = String.prototype.slice, tt = String.prototype.replace, zp = String.prototype.toUpperCase, wa = String.prototype.toLowerCase, Es = RegExp.prototype.test, _a = Array.prototype.concat, Ne = Array.prototype.join, qp = Array.prototype.slice, Sa = Math.floor, ro = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ki = Object.getOwnPropertySymbols, no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, kt = typeof Symbol == "function" && typeof Symbol.iterator == "object", le = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === kt || "symbol") ? Symbol.toStringTag : null, xs = Object.prototype.propertyIsEnumerable, Oa = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Aa(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Es.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Sa(-e) : Sa(e);
    if (n !== e) {
      var o = String(n), a = Ao.call(t, o.length + 1);
      return tt.call(o, r, "$&_") + "." + tt.call(tt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return tt.call(t, r, "$&_");
}
var io = Mp, Ea = io.custom, xa = Ps(Ea) ? Ea : null, Gp = function e(t, r, n, o) {
  var a = r || {};
  if (et(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (et(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = et(a, "customInspect") ? a.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (et(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (et(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var c = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return $s(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var d = String(t);
    return c ? Aa(t, d) : d;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return c ? Aa(t, u) : u;
  }
  var h = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof t == "object")
    return oo(t) ? "[Array]" : "[Object]";
  var v = uh(a, n);
  if (typeof o > "u")
    o = [];
  else if (Cs(o, t) >= 0)
    return "[Circular]";
  function b(ue, Se, Be) {
    if (Se && (o = qp.call(o), o.push(Se)), Be) {
      var Pe = {
        depth: a.depth
      };
      return et(a, "quoteStyle") && (Pe.quoteStyle = a.quoteStyle), e(ue, Pe, n + 1, o);
    }
    return e(ue, a, n + 1, o);
  }
  if (typeof t == "function" && !Ta(t)) {
    var w = th(t), p = tn(t, b);
    return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (p.length > 0 ? " { " + Ne.call(p, ", ") + " }" : "");
  }
  if (Ps(t)) {
    var y = kt ? tt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : no.call(t);
    return typeof t == "object" && !kt ? hr(y) : y;
  }
  if (sh(t)) {
    for (var _ = "<" + wa.call(String(t.nodeName)), S = t.attributes || [], T = 0; T < S.length; T++)
      _ += " " + S[T].name + "=" + Ts(Wp(S[T].value), "double", a);
    return _ += ">", t.childNodes && t.childNodes.length && (_ += "..."), _ += "</" + wa.call(String(t.nodeName)) + ">", _;
  }
  if (oo(t)) {
    if (t.length === 0)
      return "[]";
    var I = tn(t, b);
    return v && !ch(I) ? "[" + ao(I, v) + "]" : "[ " + Ne.call(I, ", ") + " ]";
  }
  if (Jp(t)) {
    var C = tn(t, b);
    return !("cause" in Error.prototype) && "cause" in t && !xs.call(t, "cause") ? "{ [" + String(t) + "] " + Ne.call(_a.call("[cause]: " + b(t.cause), C), ", ") + " }" : C.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ne.call(C, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (xa && typeof t[xa] == "function" && io)
      return io(t, { depth: h - n });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (rh(t)) {
    var N = [];
    return ma && ma.call(t, function(ue, Se) {
      N.push(b(Se, t, !0) + " => " + b(ue, t));
    }), Pa("Map", mn.call(t), N, v);
  }
  if (oh(t)) {
    var O = [];
    return va && va.call(t, function(ue) {
      O.push(b(ue, t));
    }), Pa("Set", vn.call(t), O, v);
  }
  if (nh(t))
    return Ui("WeakMap");
  if (ah(t))
    return Ui("WeakSet");
  if (ih(t))
    return Ui("WeakRef");
  if (Qp(t))
    return hr(b(Number(t)));
  if (Zp(t))
    return hr(b(ro.call(t)));
  if (Yp(t))
    return hr(kp.call(t));
  if (Xp(t))
    return hr(b(String(t)));
  if (!Kp(t) && !Ta(t)) {
    var P = tn(t, b), D = Oa ? Oa(t) === Object.prototype : t instanceof Object || t.constructor === Object, G = t instanceof Object ? "" : "null prototype", re = !D && le && Object(t) === t && le in t ? Ao.call(nt(t), 8, -1) : G ? "Object" : "", _e = D || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", W = _e + (re || G ? "[" + Ne.call(_a.call([], re || [], G || []), ": ") + "] " : "");
    return P.length === 0 ? W + "{}" : v ? W + "{" + ao(P, v) + "}" : W + "{ " + Ne.call(P, ", ") + " }";
  }
  return String(t);
};
function Ts(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function Wp(e) {
  return tt.call(String(e), /"/g, "&quot;");
}
function oo(e) {
  return nt(e) === "[object Array]" && (!le || !(typeof e == "object" && le in e));
}
function Kp(e) {
  return nt(e) === "[object Date]" && (!le || !(typeof e == "object" && le in e));
}
function Ta(e) {
  return nt(e) === "[object RegExp]" && (!le || !(typeof e == "object" && le in e));
}
function Jp(e) {
  return nt(e) === "[object Error]" && (!le || !(typeof e == "object" && le in e));
}
function Xp(e) {
  return nt(e) === "[object String]" && (!le || !(typeof e == "object" && le in e));
}
function Qp(e) {
  return nt(e) === "[object Number]" && (!le || !(typeof e == "object" && le in e));
}
function Yp(e) {
  return nt(e) === "[object Boolean]" && (!le || !(typeof e == "object" && le in e));
}
function Ps(e) {
  if (kt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !no)
    return !1;
  try {
    return no.call(e), !0;
  } catch {
  }
  return !1;
}
function Zp(e) {
  if (!e || typeof e != "object" || !ro)
    return !1;
  try {
    return ro.call(e), !0;
  } catch {
  }
  return !1;
}
var eh = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function et(e, t) {
  return eh.call(e, t);
}
function nt(e) {
  return Up.call(e);
}
function th(e) {
  if (e.name)
    return e.name;
  var t = Vp.call(Hp.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Cs(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function rh(e) {
  if (!mn || !e || typeof e != "object")
    return !1;
  try {
    mn.call(e);
    try {
      vn.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function nh(e) {
  if (!vr || !e || typeof e != "object")
    return !1;
  try {
    vr.call(e, vr);
    try {
      br.call(e, br);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function ih(e) {
  if (!ba || !e || typeof e != "object")
    return !1;
  try {
    return ba.call(e), !0;
  } catch {
  }
  return !1;
}
function oh(e) {
  if (!vn || !e || typeof e != "object")
    return !1;
  try {
    vn.call(e);
    try {
      mn.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function ah(e) {
  if (!br || !e || typeof e != "object")
    return !1;
  try {
    br.call(e, br);
    try {
      vr.call(e, vr);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function sh(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function $s(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return $s(Ao.call(e, 0, t.maxStringLength), t) + n;
  }
  var o = tt.call(tt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lh);
  return Ts(o, "single", t);
}
function lh(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + zp.call(t.toString(16));
}
function hr(e) {
  return "Object(" + e + ")";
}
function Ui(e) {
  return e + " { ? }";
}
function Pa(e, t, r, n) {
  var o = n ? ao(r, n) : Ne.call(r, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function ch(e) {
  for (var t = 0; t < e.length; t++)
    if (Cs(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function uh(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Ne.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Ne.call(Array(t + 1), r)
  };
}
function ao(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Ne.call(e, "," + r) + `
` + t.prev;
}
function tn(e, t) {
  var r = oo(e), n = [];
  if (r) {
    n.length = e.length;
    for (var o = 0; o < e.length; o++)
      n[o] = et(e, o) ? t(e[o], e) : "";
  }
  var a = typeof ki == "function" ? ki(e) : [], s;
  if (kt) {
    s = {};
    for (var c = 0; c < a.length; c++)
      s["$" + a[c]] = a[c];
  }
  for (var d in e)
    et(e, d) && (r && String(Number(d)) === d && d < e.length || kt && s["$" + d] instanceof Symbol || (Es.call(/[^\w$]/, d) ? n.push(t(d, e) + ": " + t(e[d], e)) : n.push(d + ": " + t(e[d], e))));
  if (typeof ki == "function")
    for (var u = 0; u < a.length; u++)
      xs.call(e, a[u]) && n.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return n;
}
var Eo = _o, qt = Fp, fh = Gp, dh = Eo("%TypeError%"), rn = Eo("%WeakMap%", !0), nn = Eo("%Map%", !0), ph = qt("WeakMap.prototype.get", !0), hh = qt("WeakMap.prototype.set", !0), yh = qt("WeakMap.prototype.has", !0), gh = qt("Map.prototype.get", !0), mh = qt("Map.prototype.set", !0), vh = qt("Map.prototype.has", !0), xo = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, bh = function(e, t) {
  var r = xo(e, t);
  return r && r.value;
}, wh = function(e, t, r) {
  var n = xo(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, _h = function(e, t) {
  return !!xo(e, t);
}, Sh = function() {
  var t, r, n, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new dh("Side channel does not contain " + fh(a));
    },
    get: function(a) {
      if (rn && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return ph(t, a);
      } else if (nn) {
        if (r)
          return gh(r, a);
      } else if (n)
        return bh(n, a);
    },
    has: function(a) {
      if (rn && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return yh(t, a);
      } else if (nn) {
        if (r)
          return vh(r, a);
      } else if (n)
        return _h(n, a);
      return !1;
    },
    set: function(a, s) {
      rn && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new rn()), hh(t, a, s)) : nn ? (r || (r = new nn()), mh(r, a, s)) : (n || (n = { key: {}, next: null }), wh(n, a, s));
    }
  };
  return o;
}, Oh = String.prototype.replace, Ah = /%20/g, Hi = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, To = {
  default: Hi.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return Oh.call(e, Ah, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Hi.RFC1738,
  RFC3986: Hi.RFC3986
}, Eh = To, Vi = Object.prototype.hasOwnProperty, dt = Array.isArray, Fe = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), xh = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (dt(n)) {
      for (var o = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && o.push(n[a]);
      r.obj[r.prop] = o;
    }
  }
}, Rs = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < t.length; ++o)
    typeof t[o] < "u" && (n[o] = t[o]);
  return n;
}, Th = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (dt(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Vi.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var o = t;
  return dt(t) && !dt(r) && (o = Rs(t, n)), dt(t) && dt(r) ? (r.forEach(function(a, s) {
    if (Vi.call(t, s)) {
      var c = t[s];
      c && typeof c == "object" && a && typeof a == "object" ? t[s] = e(c, a, n) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(r).reduce(function(a, s) {
    var c = r[s];
    return Vi.call(a, s) ? a[s] = e(a[s], c, n) : a[s] = c, a;
  }, o);
}, Ph = function(t, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, t);
}, Ch = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, $h = function(t, r, n, o, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), n === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(h) {
      return "%26%23" + parseInt(h.slice(2), 16) + "%3B";
    });
  for (var c = "", d = 0; d < s.length; ++d) {
    var u = s.charCodeAt(d);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === Eh.RFC1738 && (u === 40 || u === 41)) {
      c += s.charAt(d);
      continue;
    }
    if (u < 128) {
      c = c + Fe[u];
      continue;
    }
    if (u < 2048) {
      c = c + (Fe[192 | u >> 6] + Fe[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      c = c + (Fe[224 | u >> 12] + Fe[128 | u >> 6 & 63] + Fe[128 | u & 63]);
      continue;
    }
    d += 1, u = 65536 + ((u & 1023) << 10 | s.charCodeAt(d) & 1023), c += Fe[240 | u >> 18] + Fe[128 | u >> 12 & 63] + Fe[128 | u >> 6 & 63] + Fe[128 | u & 63];
  }
  return c;
}, Rh = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var a = r[o], s = a.obj[a.prop], c = Object.keys(s), d = 0; d < c.length; ++d) {
      var u = c[d], h = s[u];
      typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({ obj: s, prop: u }), n.push(h));
    }
  return xh(r), t;
}, Ih = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Fh = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Nh = function(t, r) {
  return [].concat(t, r);
}, Dh = function(t, r) {
  if (dt(t)) {
    for (var n = [], o = 0; o < t.length; o += 1)
      n.push(r(t[o]));
    return n;
  }
  return r(t);
}, Is = {
  arrayToObject: Rs,
  assign: Ph,
  combine: Nh,
  compact: Rh,
  decode: Ch,
  encode: $h,
  isBuffer: Fh,
  isRegExp: Ih,
  maybeMap: Dh,
  merge: Th
}, Fs = Sh, dn = Is, wr = To, Mh = Object.prototype.hasOwnProperty, Ca = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, ze = Array.isArray, Lh = Array.prototype.push, Ns = function(e, t) {
  Lh.apply(e, ze(t) ? t : [t]);
}, jh = Date.prototype.toISOString, $a = wr.default, ae = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: dn.encode,
  encodeValuesOnly: !1,
  format: $a,
  formatter: wr.formatters[$a],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return jh.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Bh = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, zi = {}, kh = function e(t, r, n, o, a, s, c, d, u, h, v, b, w, p, y, _) {
  for (var S = t, T = _, I = 0, C = !1; (T = T.get(zi)) !== void 0 && !C; ) {
    var N = T.get(t);
    if (I += 1, typeof N < "u") {
      if (N === I)
        throw new RangeError("Cyclic object value");
      C = !0;
    }
    typeof T.get(zi) > "u" && (I = 0);
  }
  if (typeof d == "function" ? S = d(r, S) : S instanceof Date ? S = v(S) : n === "comma" && ze(S) && (S = dn.maybeMap(S, function(Pe) {
    return Pe instanceof Date ? v(Pe) : Pe;
  })), S === null) {
    if (a)
      return c && !p ? c(r, ae.encoder, y, "key", b) : r;
    S = "";
  }
  if (Bh(S) || dn.isBuffer(S)) {
    if (c) {
      var O = p ? r : c(r, ae.encoder, y, "key", b);
      return [w(O) + "=" + w(c(S, ae.encoder, y, "value", b))];
    }
    return [w(r) + "=" + w(String(S))];
  }
  var P = [];
  if (typeof S > "u")
    return P;
  var D;
  if (n === "comma" && ze(S))
    p && c && (S = dn.maybeMap(S, c)), D = [{ value: S.length > 0 ? S.join(",") || null : void 0 }];
  else if (ze(d))
    D = d;
  else {
    var G = Object.keys(S);
    D = u ? G.sort(u) : G;
  }
  for (var re = o && ze(S) && S.length === 1 ? r + "[]" : r, _e = 0; _e < D.length; ++_e) {
    var W = D[_e], ue = typeof W == "object" && typeof W.value < "u" ? W.value : S[W];
    if (!(s && ue === null)) {
      var Se = ze(S) ? typeof n == "function" ? n(re, W) : re : re + (h ? "." + W : "[" + W + "]");
      _.set(t, I);
      var Be = Fs();
      Be.set(zi, _), Ns(P, e(
        ue,
        Se,
        n,
        o,
        a,
        s,
        n === "comma" && p && ze(S) ? null : c,
        d,
        u,
        h,
        v,
        b,
        w,
        p,
        y,
        Be
      ));
    }
  }
  return P;
}, Uh = function(t) {
  if (!t)
    return ae;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || ae.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = wr.default;
  if (typeof t.format < "u") {
    if (!Mh.call(wr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var o = wr.formatters[n], a = ae.filter;
  return (typeof t.filter == "function" || ze(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : ae.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? ae.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ae.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? ae.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : ae.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : ae.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : ae.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: o,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : ae.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ae.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ae.strictNullHandling
  };
}, Hh = function(e, t) {
  var r = e, n = Uh(t), o, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : ze(n.filter) && (a = n.filter, o = a);
  var s = [];
  if (typeof r != "object" || r === null)
    return "";
  var c;
  t && t.arrayFormat in Ca ? c = t.arrayFormat : t && "indices" in t ? c = t.indices ? "indices" : "repeat" : c = "indices";
  var d = Ca[c];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = d === "comma" && t && t.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var h = Fs(), v = 0; v < o.length; ++v) {
    var b = o[v];
    n.skipNulls && r[b] === null || Ns(s, kh(
      r[b],
      b,
      d,
      u,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      h
    ));
  }
  var w = s.join(n.delimiter), p = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), w.length > 0 ? p + w : "";
}, Ut = Is, so = Object.prototype.hasOwnProperty, Vh = Array.isArray, X = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Ut.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, zh = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Ds = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, qh = "utf8=%26%2310003%3B", Gh = "utf8=%E2%9C%93", Wh = function(t, r) {
  var n = { __proto__: null }, o = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, s = o.split(r.delimiter, a), c = -1, d, u = r.charset;
  if (r.charsetSentinel)
    for (d = 0; d < s.length; ++d)
      s[d].indexOf("utf8=") === 0 && (s[d] === Gh ? u = "utf-8" : s[d] === qh && (u = "iso-8859-1"), c = d, d = s.length);
  for (d = 0; d < s.length; ++d)
    if (d !== c) {
      var h = s[d], v = h.indexOf("]="), b = v === -1 ? h.indexOf("=") : v + 1, w, p;
      b === -1 ? (w = r.decoder(h, X.decoder, u, "key"), p = r.strictNullHandling ? null : "") : (w = r.decoder(h.slice(0, b), X.decoder, u, "key"), p = Ut.maybeMap(
        Ds(h.slice(b + 1), r),
        function(y) {
          return r.decoder(y, X.decoder, u, "value");
        }
      )), p && r.interpretNumericEntities && u === "iso-8859-1" && (p = zh(p)), h.indexOf("[]=") > -1 && (p = Vh(p) ? [p] : p), so.call(n, w) ? n[w] = Ut.combine(n[w], p) : n[w] = p;
    }
  return n;
}, Kh = function(e, t, r, n) {
  for (var o = n ? t : Ds(t, r), a = e.length - 1; a >= 0; --a) {
    var s, c = e[a];
    if (c === "[]" && r.parseArrays)
      s = [].concat(o);
    else {
      s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var d = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c, u = parseInt(d, 10);
      !r.parseArrays && d === "" ? s = { 0: o } : !isNaN(u) && c !== d && String(u) === d && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (s = [], s[u] = o) : d !== "__proto__" && (s[d] = o);
    }
    o = s;
  }
  return o;
}, Jh = function(t, r, n, o) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, d = n.depth > 0 && s.exec(a), u = d ? a.slice(0, d.index) : a, h = [];
    if (u) {
      if (!n.plainObjects && so.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      h.push(u);
    }
    for (var v = 0; n.depth > 0 && (d = c.exec(a)) !== null && v < n.depth; ) {
      if (v += 1, !n.plainObjects && so.call(Object.prototype, d[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      h.push(d[1]);
    }
    return d && h.push("[" + a.slice(d.index) + "]"), Kh(h, r, n, o);
  }
}, Xh = function(t) {
  if (!t)
    return X;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? X.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? X.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : X.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : X.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : X.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : X.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : X.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : X.decoder,
    delimiter: typeof t.delimiter == "string" || Ut.isRegExp(t.delimiter) ? t.delimiter : X.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : X.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : X.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : X.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : X.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : X.strictNullHandling
  };
}, Qh = function(e, t) {
  var r = Xh(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? Wh(e, r) : e, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
    var c = a[s], d = Jh(c, n[c], r, typeof e == "string");
    o = Ut.merge(o, d, r);
  }
  return r.allowSparse === !0 ? o : Ut.compact(o);
}, Yh = Hh, Zh = Qh, ey = To, Ra = {
  formats: ey,
  parse: Zh,
  stringify: Yh
}, ty = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(qe, function() {
    var r = {};
    r.version = "0.2.0";
    var n = r.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    r.configure = function(p) {
      var y, _;
      for (y in p)
        _ = p[y], _ !== void 0 && p.hasOwnProperty(y) && (n[y] = _);
      return this;
    }, r.status = null, r.set = function(p) {
      var y = r.isStarted();
      p = o(p, n.minimum, 1), r.status = p === 1 ? null : p;
      var _ = r.render(!y), S = _.querySelector(n.barSelector), T = n.speed, I = n.easing;
      return _.offsetWidth, c(function(C) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), d(S, s(p, T, I)), p === 1 ? (d(_, {
          transition: "none",
          opacity: 1
        }), _.offsetWidth, setTimeout(function() {
          d(_, {
            transition: "all " + T + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), C();
          }, T);
        }, T)) : setTimeout(C, T);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var p = function() {
        setTimeout(function() {
          r.status && (r.trickle(), p());
        }, n.trickleSpeed);
      };
      return n.trickle && p(), this;
    }, r.done = function(p) {
      return !p && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(p) {
      var y = r.status;
      return y ? (typeof p != "number" && (p = (1 - y) * o(Math.random() * y, 0.1, 0.95)), y = o(y + p, 0, 0.994), r.set(y)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var p = 0, y = 0;
      r.promise = function(_) {
        return !_ || _.state() === "resolved" ? this : (y === 0 && r.start(), p++, y++, _.always(function() {
          y--, y === 0 ? (p = 0, r.done()) : r.set((p - y) / p);
        }), this);
      };
    }(), r.render = function(p) {
      if (r.isRendered())
        return document.getElementById("nprogress");
      h(document.documentElement, "nprogress-busy");
      var y = document.createElement("div");
      y.id = "nprogress", y.innerHTML = n.template;
      var _ = y.querySelector(n.barSelector), S = p ? "-100" : a(r.status || 0), T = document.querySelector(n.parent), I;
      return d(_, {
        transition: "all 0 linear",
        transform: "translate3d(" + S + "%,0,0)"
      }), n.showSpinner || (I = y.querySelector(n.spinnerSelector), I && w(I)), T != document.body && h(T, "nprogress-custom-parent"), T.appendChild(y), y;
    }, r.remove = function() {
      v(document.documentElement, "nprogress-busy"), v(document.querySelector(n.parent), "nprogress-custom-parent");
      var p = document.getElementById("nprogress");
      p && w(p);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var p = document.body.style, y = "WebkitTransform" in p ? "Webkit" : "MozTransform" in p ? "Moz" : "msTransform" in p ? "ms" : "OTransform" in p ? "O" : "";
      return y + "Perspective" in p ? "translate3d" : y + "Transform" in p ? "translate" : "margin";
    };
    function o(p, y, _) {
      return p < y ? y : p > _ ? _ : p;
    }
    function a(p) {
      return (-1 + p) * 100;
    }
    function s(p, y, _) {
      var S;
      return n.positionUsing === "translate3d" ? S = { transform: "translate3d(" + a(p) + "%,0,0)" } : n.positionUsing === "translate" ? S = { transform: "translate(" + a(p) + "%,0)" } : S = { "margin-left": a(p) + "%" }, S.transition = "all " + y + "ms " + _, S;
    }
    var c = function() {
      var p = [];
      function y() {
        var _ = p.shift();
        _ && _(y);
      }
      return function(_) {
        p.push(_), p.length == 1 && y();
      };
    }(), d = function() {
      var p = ["Webkit", "O", "Moz", "ms"], y = {};
      function _(C) {
        return C.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(N, O) {
          return O.toUpperCase();
        });
      }
      function S(C) {
        var N = document.body.style;
        if (C in N)
          return C;
        for (var O = p.length, P = C.charAt(0).toUpperCase() + C.slice(1), D; O--; )
          if (D = p[O] + P, D in N)
            return D;
        return C;
      }
      function T(C) {
        return C = _(C), y[C] || (y[C] = S(C));
      }
      function I(C, N, O) {
        N = T(N), C.style[N] = O;
      }
      return function(C, N) {
        var O = arguments, P, D;
        if (O.length == 2)
          for (P in N)
            D = N[P], D !== void 0 && N.hasOwnProperty(P) && I(C, P, D);
        else
          I(C, O[1], O[2]);
      };
    }();
    function u(p, y) {
      var _ = typeof p == "string" ? p : b(p);
      return _.indexOf(" " + y + " ") >= 0;
    }
    function h(p, y) {
      var _ = b(p), S = _ + y;
      u(_, y) || (p.className = S.substring(1));
    }
    function v(p, y) {
      var _ = b(p), S;
      u(p, y) && (S = _.replace(" " + y + " ", " "), p.className = S.substring(1, S.length - 1));
    }
    function b(p) {
      return (" " + (p.className || "") + " ").replace(/\s+/gi, " ");
    }
    function w(p) {
      p && p.parentNode && p.parentNode.removeChild(p);
    }
    return r;
  });
})(ty);
function Ms(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function Xe(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var ry = (e) => Xe("before", { cancelable: !0, detail: { visit: e } }), ny = (e) => Xe("error", { detail: { errors: e } }), iy = (e) => Xe("exception", { cancelable: !0, detail: { exception: e } }), Ia = (e) => Xe("finish", { detail: { visit: e } }), oy = (e) => Xe("invalid", { cancelable: !0, detail: { response: e } }), yr = (e) => Xe("navigate", { detail: { page: e } }), ay = (e) => Xe("progress", { detail: { progress: e } }), sy = (e) => Xe("start", { detail: { visit: e } }), ly = (e) => Xe("success", { detail: { page: e } });
function lo(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => lo(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => lo(t));
}
function Ls(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e)
    Object.prototype.hasOwnProperty.call(e, n) && Bs(t, js(r, n), e[n]);
  return t;
}
function js(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Bs(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Bs(e, js(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  Ls(r, e, t);
}
var cy = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow)
    throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} };
function $t(e) {
  return new URL(e.toString(), window.location.toString());
}
function ks(e, t, r, n = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), c = t.toString().includes("?") || e === "get" && Object.keys(r).length, d = t.toString().includes("#"), u = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (u.search = Ra.stringify(ap(Ra.parse(u.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[o ? `${u.protocol}//${u.host}` : "", a ? u.pathname : "", s ? u.pathname.substring(1) : "", c ? u.search : "", d ? u.hash : ""].join(""), r];
}
function gr(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Fa = typeof window > "u", uy = class {
  constructor() {
    this.visitId = null;
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: r }) {
    this.page = e, this.resolveComponent = t, this.swapComponent = r, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var e;
    this.navigationType === "reload" && ((e = window.history.state) != null && e.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(e) {
    this.page.url += window.location.hash, this.setPage(e, { preserveState: !0 }).then(() => yr(e));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", Ms(this.handleScrollEvent.bind(this), 100), !0);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(e) {
    typeof e.target.hasAttribute == "function" && e.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })) });
  }
  resetScrollPositions() {
    window.scrollTo(0, 0), this.scrollRegions().forEach((e) => {
      typeof e.scrollTo == "function" ? e.scrollTo(0, 0) : (e.scrollTop = 0, e.scrollLeft = 0);
    }), this.saveScrollPositions(), window.location.hash && setTimeout(() => {
      var e;
      return (e = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : e.scrollIntoView();
    });
  }
  restoreScrollPositions() {
    this.page.scrollRegions && this.scrollRegions().forEach((e, t) => {
      let r = this.page.scrollRegions[t];
      if (r)
        typeof e.scrollTo == "function" ? e.scrollTo(r.left, r.top) : (e.scrollTop = r.top, e.scrollLeft = r.left);
      else
        return;
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(e) {
    window.history.state.version = e.version, this.setPage(window.history.state, { preserveScroll: !0, preserveState: !0 }).then(() => {
      this.restoreScrollPositions(), yr(e);
    });
  }
  locationVisit(e, t) {
    try {
      let r = { preserveScroll: t };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = e.href, gr(window.location).href === gr(e).href && window.location.reload();
    } catch {
      return !1;
    }
  }
  isLocationVisit() {
    try {
      return window.sessionStorage.getItem("inertiaLocationVisit") !== null;
    } catch {
      return !1;
    }
  }
  handleLocationVisit(e) {
    var r, n;
    let t = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), e.url += window.location.hash, e.rememberedState = ((r = window.history.state) == null ? void 0 : r.rememberedState) ?? {}, e.scrollRegions = ((n = window.history.state) == null ? void 0 : n.scrollRegions) ?? [], this.setPage(e, { preserveScroll: t.preserveScroll, preserveState: !0 }).then(() => {
      t.preserveScroll && this.restoreScrollPositions(), yr(e);
    });
  }
  isLocationVisitResponse(e) {
    return !!(e && e.status === 409 && e.headers["x-inertia-location"]);
  }
  isInertiaResponse(e) {
    return !!(e != null && e.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(e, { cancelled: t = !1, interrupted: r = !1 }) {
    e && !e.completed && !e.cancelled && !e.interrupted && (e.cancelToken.abort(), e.onCancel(), e.completed = !1, e.cancelled = t, e.interrupted = r, Ia(e), e.onFinish(e));
  }
  finishVisit(e) {
    !e.cancelled && !e.interrupted && (e.completed = !0, e.cancelled = !1, e.interrupted = !1, Ia(e), e.onFinish(e));
  }
  resolvePreserveOption(e, t) {
    return typeof e == "function" ? e(t) : e === "errors" ? Object.keys(t.props.errors || {}).length > 0 : e;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(e, { method: t = "get", data: r = {}, replace: n = !1, preserveScroll: o = !1, preserveState: a = !1, only: s = [], headers: c = {}, errorBag: d = "", forceFormData: u = !1, onCancelToken: h = () => {
  }, onBefore: v = () => {
  }, onStart: b = () => {
  }, onProgress: w = () => {
  }, onFinish: p = () => {
  }, onCancel: y = () => {
  }, onSuccess: _ = () => {
  }, onError: S = () => {
  }, queryStringArrayFormat: T = "brackets" } = {}) {
    let I = typeof e == "string" ? $t(e) : e;
    if ((lo(r) || u) && !(r instanceof FormData) && (r = Ls(r)), !(r instanceof FormData)) {
      let [O, P] = ks(t, I, r, T);
      I = $t(O), r = P;
    }
    let C = { url: I, method: t, data: r, replace: n, preserveScroll: o, preserveState: a, only: s, headers: c, errorBag: d, forceFormData: u, queryStringArrayFormat: T, cancelled: !1, completed: !1, interrupted: !1 };
    if (v(C) === !1 || !ry(C))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let N = this.createVisitId();
    this.activeVisit = { ...C, onCancelToken: h, onBefore: v, onStart: b, onProgress: w, onFinish: p, onCancel: y, onSuccess: _, onError: S, queryStringArrayFormat: T, cancelToken: new AbortController() }, h({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), sy(C), b(C), fa({ method: t, url: gr(I).href, data: t === "get" ? {} : r, params: t === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...c, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...s.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": s.join(",") } : {}, ...d && d.length ? { "X-Inertia-Error-Bag": d } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (O) => {
      r instanceof FormData && (O.percentage = O.progress ? Math.round(O.progress * 100) : 0, ay(O), w(O));
    } }).then((O) => {
      var re;
      if (!this.isInertiaResponse(O))
        return Promise.reject({ response: O });
      let P = O.data;
      s.length && P.component === this.page.component && (P.props = { ...this.page.props, ...P.props }), o = this.resolvePreserveOption(o, P), a = this.resolvePreserveOption(a, P), a && ((re = window.history.state) != null && re.rememberedState) && P.component === this.page.component && (P.rememberedState = window.history.state.rememberedState);
      let D = I, G = $t(P.url);
      return D.hash && !G.hash && gr(D).href === G.href && (G.hash = D.hash, P.url = G.href), this.setPage(P, { visitId: N, replace: n, preserveScroll: o, preserveState: a });
    }).then(() => {
      let O = this.page.props.errors || {};
      if (Object.keys(O).length > 0) {
        let P = d ? O[d] ? O[d] : {} : O;
        return ny(P), S(P);
      }
      return ly(this.page), _(this.page);
    }).catch((O) => {
      if (this.isInertiaResponse(O.response))
        return this.setPage(O.response.data, { visitId: N });
      if (this.isLocationVisitResponse(O.response)) {
        let P = $t(O.response.headers["x-inertia-location"]), D = I;
        D.hash && !P.hash && gr(D).href === P.href && (P.hash = D.hash), this.locationVisit(P, o === !0);
      } else if (O.response)
        oy(O.response) && cy.show(O.response.data);
      else
        return Promise.reject(O);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((O) => {
      if (!fa.isCancel(O)) {
        let P = iy(O);
        if (this.activeVisit && this.finishVisit(this.activeVisit), P)
          return Promise.reject(O);
      }
    });
  }
  setPage(e, { visitId: t = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: o = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(e.component)).then((a) => {
      t === this.visitId && (e.scrollRegions = e.scrollRegions || [], e.rememberedState = e.rememberedState || {}, r = r || $t(e.url).href === window.location.href, r ? this.replaceState(e) : this.pushState(e), this.swapComponent({ component: a, page: e, preserveState: o }).then(() => {
        n || this.resetScrollPositions(), r || yr(e);
      }));
    });
  }
  pushState(e) {
    this.page = e, window.history.pushState(e, "", e.url);
  }
  replaceState(e) {
    this.page = e, window.history.replaceState(e, "", e.url);
  }
  handlePopstateEvent(e) {
    if (e.state !== null) {
      let t = e.state, r = this.createVisitId();
      Promise.resolve(this.resolveComponent(t.component)).then((n) => {
        r === this.visitId && (this.page = t, this.swapComponent({ component: n, page: t, preserveState: !1 }).then(() => {
          this.restoreScrollPositions(), yr(t);
        }));
      });
    } else {
      let t = $t(this.page.url);
      t.hash = window.location.hash, this.replaceState({ ...this.page, url: t.href }), this.resetScrollPositions();
    }
  }
  get(e, t = {}, r = {}) {
    return this.visit(e, { ...r, method: "get", data: t });
  }
  reload(e = {}) {
    return this.visit(window.location.href, { ...e, preserveScroll: !0, preserveState: !0 });
  }
  replace(e, t = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${t.method ?? "get"}() instead.`), this.visit(e, { preserveState: !0, ...t, replace: !0 });
  }
  post(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "post", data: t });
  }
  put(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "put", data: t });
  }
  patch(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  remember(e, t = "default") {
    var r;
    Fa || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [t]: e } });
  }
  restore(e = "default") {
    var t, r;
    if (!Fa)
      return (r = (t = window.history.state) == null ? void 0 : t.rememberedState) == null ? void 0 : r[e];
  }
  on(e, t) {
    let r = (n) => {
      let o = t(n);
      n.cancelable && !n.defaultPrevented && o === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${e}`, r), () => document.removeEventListener(`inertia:${e}`, r);
  }
}, fy = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let r = t.content.firstChild;
  if (!e.startsWith("<script "))
    return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((o) => {
    n.setAttribute(o, r.getAttribute(o) || "");
  }), n;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let r = e.getAttribute("inertia");
  return r !== null ? t.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Ms(function(e) {
  let t = e.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var a, s;
    let n = this.findMatchingElementIndex(r, t);
    if (n === -1) {
      (a = r == null ? void 0 : r.parentNode) == null || a.removeChild(r);
      return;
    }
    let o = t.splice(n, 1)[0];
    o && !r.isEqualNode(o) && ((s = r == null ? void 0 : r.parentNode) == null || s.replaceChild(o, r));
  }), t.forEach((r) => document.head.appendChild(r));
}, 1) };
function dy(e, t, r) {
  let n = {}, o = 0;
  function a() {
    let h = o += 1;
    return n[h] = [], h.toString();
  }
  function s(h) {
    h === null || Object.keys(n).indexOf(h) === -1 || (delete n[h], u());
  }
  function c(h, v = []) {
    h !== null && Object.keys(n).indexOf(h) > -1 && (n[h] = v), u();
  }
  function d() {
    let h = t(""), v = { ...h ? { title: `<title inertia="">${h}</title>` } : {} }, b = Object.values(n).reduce((w, p) => w.concat(p), []).reduce((w, p) => {
      if (p.indexOf("<") === -1)
        return w;
      if (p.indexOf("<title ") === 0) {
        let _ = p.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return w.title = _ ? `${_[1]}${t(_[2])}${_[3]}` : p, w;
      }
      let y = p.match(/ inertia="[^"]+"/);
      return y ? w[y[0]] = p : w[Object.keys(w).length] = p, w;
    }, v);
    return Object.values(b);
  }
  function u() {
    e ? r(d()) : fy.update(d());
  }
  return u(), { forceUpdate: u, createProvider: function() {
    let h = a();
    return { update: (v) => c(h, v), disconnect: () => s(h) };
  } };
}
function py(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.which > 1 || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey);
}
var co = new uy(), bn = { exports: {} };
bn.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 9007199254740991, a = "[object Arguments]", s = "[object Array]", c = "[object Boolean]", d = "[object Date]", u = "[object Error]", h = "[object Function]", v = "[object GeneratorFunction]", b = "[object Map]", w = "[object Number]", p = "[object Object]", y = "[object Promise]", _ = "[object RegExp]", S = "[object Set]", T = "[object String]", I = "[object Symbol]", C = "[object WeakMap]", N = "[object ArrayBuffer]", O = "[object DataView]", P = "[object Float32Array]", D = "[object Float64Array]", G = "[object Int8Array]", re = "[object Int16Array]", _e = "[object Int32Array]", W = "[object Uint8Array]", ue = "[object Uint8ClampedArray]", Se = "[object Uint16Array]", Be = "[object Uint32Array]", Pe = /[\\^$.*+?()[\]{}|]/g, Nn = /\w*$/, Dn = /^\[object .+?Constructor\]$/, Mn = /^(?:0|[1-9]\d*)$/, k = {};
  k[a] = k[s] = k[N] = k[O] = k[c] = k[d] = k[P] = k[D] = k[G] = k[re] = k[_e] = k[b] = k[w] = k[p] = k[_] = k[S] = k[T] = k[I] = k[W] = k[ue] = k[Se] = k[Be] = !0, k[u] = k[h] = k[C] = !1;
  var Ln = typeof qe == "object" && qe && qe.Object === Object && qe, jn = typeof self == "object" && self && self.Object === Object && self, Oe = Ln || jn || Function("return this")(), Cr = t && !t.nodeType && t, U = Cr && !0 && e && !e.nodeType && e, $r = U && U.exports === Cr;
  function Bn(i, l) {
    return i.set(l[0], l[1]), i;
  }
  function Ae(i, l) {
    return i.add(l), i;
  }
  function Rr(i, l) {
    for (var f = -1, g = i ? i.length : 0; ++f < g && l(i[f], f, i) !== !1; )
      ;
    return i;
  }
  function Ir(i, l) {
    for (var f = -1, g = l.length, R = i.length; ++f < g; )
      i[R + f] = l[f];
    return i;
  }
  function Gt(i, l, f, g) {
    var R = -1, x = i ? i.length : 0;
    for (g && x && (f = i[++R]); ++R < x; )
      f = l(f, i[R], R, i);
    return f;
  }
  function Wt(i, l) {
    for (var f = -1, g = Array(i); ++f < i; )
      g[f] = l(f);
    return g;
  }
  function Fr(i, l) {
    return i == null ? void 0 : i[l];
  }
  function Kt(i) {
    var l = !1;
    if (i != null && typeof i.toString != "function")
      try {
        l = !!(i + "");
      } catch {
      }
    return l;
  }
  function Nr(i) {
    var l = -1, f = Array(i.size);
    return i.forEach(function(g, R) {
      f[++l] = [R, g];
    }), f;
  }
  function Jt(i, l) {
    return function(f) {
      return i(l(f));
    };
  }
  function Dr(i) {
    var l = -1, f = Array(i.size);
    return i.forEach(function(g) {
      f[++l] = g;
    }), f;
  }
  var kn = Array.prototype, Un = Function.prototype, vt = Object.prototype, Xt = Oe["__core-js_shared__"], Mr = function() {
    var i = /[^.]+$/.exec(Xt && Xt.keys && Xt.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), Lr = Un.toString, Ce = vt.hasOwnProperty, bt = vt.toString, Hn = RegExp(
    "^" + Lr.call(Ce).replace(Pe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), it = $r ? Oe.Buffer : void 0, wt = Oe.Symbol, Qt = Oe.Uint8Array, me = Jt(Object.getPrototypeOf, Object), jr = Object.create, Br = vt.propertyIsEnumerable, Vn = kn.splice, Yt = Object.getOwnPropertySymbols, _t = it ? it.isBuffer : void 0, kr = Jt(Object.keys, Object), St = xe(Oe, "DataView"), ot = xe(Oe, "Map"), Ee = xe(Oe, "Promise"), Ot = xe(Oe, "Set"), Zt = xe(Oe, "WeakMap"), at = xe(Object, "create"), er = ce(St), st = ce(ot), tr = ce(Ee), rr = ce(Ot), nr = ce(Zt), Qe = wt ? wt.prototype : void 0, Ur = Qe ? Qe.valueOf : void 0;
  function ke(i) {
    var l = -1, f = i ? i.length : 0;
    for (this.clear(); ++l < f; ) {
      var g = i[l];
      this.set(g[0], g[1]);
    }
  }
  function zn() {
    this.__data__ = at ? at(null) : {};
  }
  function qn(i) {
    return this.has(i) && delete this.__data__[i];
  }
  function Gn(i) {
    var l = this.__data__;
    if (at) {
      var f = l[i];
      return f === n ? void 0 : f;
    }
    return Ce.call(l, i) ? l[i] : void 0;
  }
  function Hr(i) {
    var l = this.__data__;
    return at ? l[i] !== void 0 : Ce.call(l, i);
  }
  function ir(i, l) {
    var f = this.__data__;
    return f[i] = at && l === void 0 ? n : l, this;
  }
  ke.prototype.clear = zn, ke.prototype.delete = qn, ke.prototype.get = Gn, ke.prototype.has = Hr, ke.prototype.set = ir;
  function Z(i) {
    var l = -1, f = i ? i.length : 0;
    for (this.clear(); ++l < f; ) {
      var g = i[l];
      this.set(g[0], g[1]);
    }
  }
  function Wn() {
    this.__data__ = [];
  }
  function Kn(i) {
    var l = this.__data__, f = Et(l, i);
    if (f < 0)
      return !1;
    var g = l.length - 1;
    return f == g ? l.pop() : Vn.call(l, f, 1), !0;
  }
  function Jn(i) {
    var l = this.__data__, f = Et(l, i);
    return f < 0 ? void 0 : l[f][1];
  }
  function Xn(i) {
    return Et(this.__data__, i) > -1;
  }
  function Qn(i, l) {
    var f = this.__data__, g = Et(f, i);
    return g < 0 ? f.push([i, l]) : f[g][1] = l, this;
  }
  Z.prototype.clear = Wn, Z.prototype.delete = Kn, Z.prototype.get = Jn, Z.prototype.has = Xn, Z.prototype.set = Qn;
  function ne(i) {
    var l = -1, f = i ? i.length : 0;
    for (this.clear(); ++l < f; ) {
      var g = i[l];
      this.set(g[0], g[1]);
    }
  }
  function Yn() {
    this.__data__ = {
      hash: new ke(),
      map: new (ot || Z)(),
      string: new ke()
    };
  }
  function Zn(i) {
    return ct(this, i).delete(i);
  }
  function ei(i) {
    return ct(this, i).get(i);
  }
  function ti(i) {
    return ct(this, i).has(i);
  }
  function ri(i, l) {
    return ct(this, i).set(i, l), this;
  }
  ne.prototype.clear = Yn, ne.prototype.delete = Zn, ne.prototype.get = ei, ne.prototype.has = ti, ne.prototype.set = ri;
  function fe(i) {
    this.__data__ = new Z(i);
  }
  function ni() {
    this.__data__ = new Z();
  }
  function ii(i) {
    return this.__data__.delete(i);
  }
  function oi(i) {
    return this.__data__.get(i);
  }
  function ai(i) {
    return this.__data__.has(i);
  }
  function si(i, l) {
    var f = this.__data__;
    if (f instanceof Z) {
      var g = f.__data__;
      if (!ot || g.length < r - 1)
        return g.push([i, l]), this;
      f = this.__data__ = new ne(g);
    }
    return f.set(i, l), this;
  }
  fe.prototype.clear = ni, fe.prototype.delete = ii, fe.prototype.get = oi, fe.prototype.has = ai, fe.prototype.set = si;
  function At(i, l) {
    var f = lr(i) || Tt(i) ? Wt(i.length, String) : [], g = f.length, R = !!g;
    for (var x in i)
      (l || Ce.call(i, x)) && !(R && (x == "length" || _i(x, g))) && f.push(x);
    return f;
  }
  function Vr(i, l, f) {
    var g = i[l];
    (!(Ce.call(i, l) && Kr(g, f)) || f === void 0 && !(l in i)) && (i[l] = f);
  }
  function Et(i, l) {
    for (var f = i.length; f--; )
      if (Kr(i[f][0], l))
        return f;
    return -1;
  }
  function $e(i, l) {
    return i && sr(l, ur(l), i);
  }
  function or(i, l, f, g, R, x, M) {
    var L;
    if (g && (L = x ? g(i, R, x, M) : g(i)), L !== void 0)
      return L;
    if (!Ie(i))
      return i;
    var z = lr(i);
    if (z) {
      if (L = bi(i), !l)
        return gi(i, L);
    } else {
      var B = He(i), ie = B == h || B == v;
      if (Jr(i))
        return xt(i, l);
      if (B == p || B == a || ie && !x) {
        if (Kt(i))
          return x ? i : {};
        if (L = Re(ie ? {} : i), !l)
          return mi(i, $e(L, i));
      } else {
        if (!k[B])
          return x ? i : {};
        L = wi(i, B, or, l);
      }
    }
    M || (M = new fe());
    var de = M.get(i);
    if (de)
      return de;
    if (M.set(i, L), !z)
      var K = f ? vi(i) : ur(i);
    return Rr(K || i, function(oe, ee) {
      K && (ee = oe, oe = i[ee]), Vr(L, ee, or(oe, l, f, g, ee, i, M));
    }), L;
  }
  function li(i) {
    return Ie(i) ? jr(i) : {};
  }
  function ci(i, l, f) {
    var g = l(i);
    return lr(i) ? g : Ir(g, f(i));
  }
  function ui(i) {
    return bt.call(i);
  }
  function fi(i) {
    if (!Ie(i) || Oi(i))
      return !1;
    var l = cr(i) || Kt(i) ? Hn : Dn;
    return l.test(ce(i));
  }
  function di(i) {
    if (!Gr(i))
      return kr(i);
    var l = [];
    for (var f in Object(i))
      Ce.call(i, f) && f != "constructor" && l.push(f);
    return l;
  }
  function xt(i, l) {
    if (l)
      return i.slice();
    var f = new i.constructor(i.length);
    return i.copy(f), f;
  }
  function ar(i) {
    var l = new i.constructor(i.byteLength);
    return new Qt(l).set(new Qt(i)), l;
  }
  function lt(i, l) {
    var f = l ? ar(i.buffer) : i.buffer;
    return new i.constructor(f, i.byteOffset, i.byteLength);
  }
  function zr(i, l, f) {
    var g = l ? f(Nr(i), !0) : Nr(i);
    return Gt(g, Bn, new i.constructor());
  }
  function qr(i) {
    var l = new i.constructor(i.source, Nn.exec(i));
    return l.lastIndex = i.lastIndex, l;
  }
  function pi(i, l, f) {
    var g = l ? f(Dr(i), !0) : Dr(i);
    return Gt(g, Ae, new i.constructor());
  }
  function hi(i) {
    return Ur ? Object(Ur.call(i)) : {};
  }
  function yi(i, l) {
    var f = l ? ar(i.buffer) : i.buffer;
    return new i.constructor(f, i.byteOffset, i.length);
  }
  function gi(i, l) {
    var f = -1, g = i.length;
    for (l || (l = Array(g)); ++f < g; )
      l[f] = i[f];
    return l;
  }
  function sr(i, l, f, g) {
    f || (f = {});
    for (var R = -1, x = l.length; ++R < x; ) {
      var M = l[R], L = g ? g(f[M], i[M], M, f, i) : void 0;
      Vr(f, M, L === void 0 ? i[M] : L);
    }
    return f;
  }
  function mi(i, l) {
    return sr(i, Ue(i), l);
  }
  function vi(i) {
    return ci(i, ur, Ue);
  }
  function ct(i, l) {
    var f = i.__data__;
    return Si(l) ? f[typeof l == "string" ? "string" : "hash"] : f.map;
  }
  function xe(i, l) {
    var f = Fr(i, l);
    return fi(f) ? f : void 0;
  }
  var Ue = Yt ? Jt(Yt, Object) : Ei, He = ui;
  (St && He(new St(new ArrayBuffer(1))) != O || ot && He(new ot()) != b || Ee && He(Ee.resolve()) != y || Ot && He(new Ot()) != S || Zt && He(new Zt()) != C) && (He = function(i) {
    var l = bt.call(i), f = l == p ? i.constructor : void 0, g = f ? ce(f) : void 0;
    if (g)
      switch (g) {
        case er:
          return O;
        case st:
          return b;
        case tr:
          return y;
        case rr:
          return S;
        case nr:
          return C;
      }
    return l;
  });
  function bi(i) {
    var l = i.length, f = i.constructor(l);
    return l && typeof i[0] == "string" && Ce.call(i, "index") && (f.index = i.index, f.input = i.input), f;
  }
  function Re(i) {
    return typeof i.constructor == "function" && !Gr(i) ? li(me(i)) : {};
  }
  function wi(i, l, f, g) {
    var R = i.constructor;
    switch (l) {
      case N:
        return ar(i);
      case c:
      case d:
        return new R(+i);
      case O:
        return lt(i, g);
      case P:
      case D:
      case G:
      case re:
      case _e:
      case W:
      case ue:
      case Se:
      case Be:
        return yi(i, g);
      case b:
        return zr(i, g, f);
      case w:
      case T:
        return new R(i);
      case _:
        return qr(i);
      case S:
        return pi(i, g, f);
      case I:
        return hi(i);
    }
  }
  function _i(i, l) {
    return l = l ?? o, !!l && (typeof i == "number" || Mn.test(i)) && i > -1 && i % 1 == 0 && i < l;
  }
  function Si(i) {
    var l = typeof i;
    return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? i !== "__proto__" : i === null;
  }
  function Oi(i) {
    return !!Mr && Mr in i;
  }
  function Gr(i) {
    var l = i && i.constructor, f = typeof l == "function" && l.prototype || vt;
    return i === f;
  }
  function ce(i) {
    if (i != null) {
      try {
        return Lr.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  function Wr(i) {
    return or(i, !0, !0);
  }
  function Kr(i, l) {
    return i === l || i !== i && l !== l;
  }
  function Tt(i) {
    return Ai(i) && Ce.call(i, "callee") && (!Br.call(i, "callee") || bt.call(i) == a);
  }
  var lr = Array.isArray;
  function Pt(i) {
    return i != null && Xr(i.length) && !cr(i);
  }
  function Ai(i) {
    return Qr(i) && Pt(i);
  }
  var Jr = _t || xi;
  function cr(i) {
    var l = Ie(i) ? bt.call(i) : "";
    return l == h || l == v;
  }
  function Xr(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= o;
  }
  function Ie(i) {
    var l = typeof i;
    return !!i && (l == "object" || l == "function");
  }
  function Qr(i) {
    return !!i && typeof i == "object";
  }
  function ur(i) {
    return Pt(i) ? At(i) : di(i);
  }
  function Ei() {
    return [];
  }
  function xi() {
    return !1;
  }
  e.exports = Wr;
})(bn, bn.exports);
bn.exports;
var wn = { exports: {} };
wn.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 1, a = 2, s = 9007199254740991, c = "[object Arguments]", d = "[object Array]", u = "[object AsyncFunction]", h = "[object Boolean]", v = "[object Date]", b = "[object Error]", w = "[object Function]", p = "[object GeneratorFunction]", y = "[object Map]", _ = "[object Number]", S = "[object Null]", T = "[object Object]", I = "[object Promise]", C = "[object Proxy]", N = "[object RegExp]", O = "[object Set]", P = "[object String]", D = "[object Symbol]", G = "[object Undefined]", re = "[object WeakMap]", _e = "[object ArrayBuffer]", W = "[object DataView]", ue = "[object Float32Array]", Se = "[object Float64Array]", Be = "[object Int8Array]", Pe = "[object Int16Array]", Nn = "[object Int32Array]", Dn = "[object Uint8Array]", Mn = "[object Uint8ClampedArray]", k = "[object Uint16Array]", Ln = "[object Uint32Array]", jn = /[\\^$.*+?()[\]{}|]/g, Oe = /^\[object .+?Constructor\]$/, Cr = /^(?:0|[1-9]\d*)$/, U = {};
  U[ue] = U[Se] = U[Be] = U[Pe] = U[Nn] = U[Dn] = U[Mn] = U[k] = U[Ln] = !0, U[c] = U[d] = U[_e] = U[h] = U[W] = U[v] = U[b] = U[w] = U[y] = U[_] = U[T] = U[N] = U[O] = U[P] = U[re] = !1;
  var $r = typeof qe == "object" && qe && qe.Object === Object && qe, Bn = typeof self == "object" && self && self.Object === Object && self, Ae = $r || Bn || Function("return this")(), Rr = t && !t.nodeType && t, Ir = Rr && !0 && e && !e.nodeType && e, Gt = Ir && Ir.exports === Rr, Wt = Gt && $r.process, Fr = function() {
    try {
      return Wt && Wt.binding && Wt.binding("util");
    } catch {
    }
  }(), Kt = Fr && Fr.isTypedArray;
  function Nr(i, l) {
    for (var f = -1, g = i == null ? 0 : i.length, R = 0, x = []; ++f < g; ) {
      var M = i[f];
      l(M, f, i) && (x[R++] = M);
    }
    return x;
  }
  function Jt(i, l) {
    for (var f = -1, g = l.length, R = i.length; ++f < g; )
      i[R + f] = l[f];
    return i;
  }
  function Dr(i, l) {
    for (var f = -1, g = i == null ? 0 : i.length; ++f < g; )
      if (l(i[f], f, i))
        return !0;
    return !1;
  }
  function kn(i, l) {
    for (var f = -1, g = Array(i); ++f < i; )
      g[f] = l(f);
    return g;
  }
  function Un(i) {
    return function(l) {
      return i(l);
    };
  }
  function vt(i, l) {
    return i.has(l);
  }
  function Xt(i, l) {
    return i == null ? void 0 : i[l];
  }
  function Mr(i) {
    var l = -1, f = Array(i.size);
    return i.forEach(function(g, R) {
      f[++l] = [R, g];
    }), f;
  }
  function Lr(i, l) {
    return function(f) {
      return i(l(f));
    };
  }
  function Ce(i) {
    var l = -1, f = Array(i.size);
    return i.forEach(function(g) {
      f[++l] = g;
    }), f;
  }
  var bt = Array.prototype, Hn = Function.prototype, it = Object.prototype, wt = Ae["__core-js_shared__"], Qt = Hn.toString, me = it.hasOwnProperty, jr = function() {
    var i = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), Br = it.toString, Vn = RegExp(
    "^" + Qt.call(me).replace(jn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Yt = Gt ? Ae.Buffer : void 0, _t = Ae.Symbol, kr = Ae.Uint8Array, St = it.propertyIsEnumerable, ot = bt.splice, Ee = _t ? _t.toStringTag : void 0, Ot = Object.getOwnPropertySymbols, Zt = Yt ? Yt.isBuffer : void 0, at = Lr(Object.keys, Object), er = Ue(Ae, "DataView"), st = Ue(Ae, "Map"), tr = Ue(Ae, "Promise"), rr = Ue(Ae, "Set"), nr = Ue(Ae, "WeakMap"), Qe = Ue(Object, "create"), Ur = ce(er), ke = ce(st), zn = ce(tr), qn = ce(rr), Gn = ce(nr), Hr = _t ? _t.prototype : void 0, ir = Hr ? Hr.valueOf : void 0;
  function Z(i) {
    var l = -1, f = i == null ? 0 : i.length;
    for (this.clear(); ++l < f; ) {
      var g = i[l];
      this.set(g[0], g[1]);
    }
  }
  function Wn() {
    this.__data__ = Qe ? Qe(null) : {}, this.size = 0;
  }
  function Kn(i) {
    var l = this.has(i) && delete this.__data__[i];
    return this.size -= l ? 1 : 0, l;
  }
  function Jn(i) {
    var l = this.__data__;
    if (Qe) {
      var f = l[i];
      return f === n ? void 0 : f;
    }
    return me.call(l, i) ? l[i] : void 0;
  }
  function Xn(i) {
    var l = this.__data__;
    return Qe ? l[i] !== void 0 : me.call(l, i);
  }
  function Qn(i, l) {
    var f = this.__data__;
    return this.size += this.has(i) ? 0 : 1, f[i] = Qe && l === void 0 ? n : l, this;
  }
  Z.prototype.clear = Wn, Z.prototype.delete = Kn, Z.prototype.get = Jn, Z.prototype.has = Xn, Z.prototype.set = Qn;
  function ne(i) {
    var l = -1, f = i == null ? 0 : i.length;
    for (this.clear(); ++l < f; ) {
      var g = i[l];
      this.set(g[0], g[1]);
    }
  }
  function Yn() {
    this.__data__ = [], this.size = 0;
  }
  function Zn(i) {
    var l = this.__data__, f = xt(l, i);
    if (f < 0)
      return !1;
    var g = l.length - 1;
    return f == g ? l.pop() : ot.call(l, f, 1), --this.size, !0;
  }
  function ei(i) {
    var l = this.__data__, f = xt(l, i);
    return f < 0 ? void 0 : l[f][1];
  }
  function ti(i) {
    return xt(this.__data__, i) > -1;
  }
  function ri(i, l) {
    var f = this.__data__, g = xt(f, i);
    return g < 0 ? (++this.size, f.push([i, l])) : f[g][1] = l, this;
  }
  ne.prototype.clear = Yn, ne.prototype.delete = Zn, ne.prototype.get = ei, ne.prototype.has = ti, ne.prototype.set = ri;
  function fe(i) {
    var l = -1, f = i == null ? 0 : i.length;
    for (this.clear(); ++l < f; ) {
      var g = i[l];
      this.set(g[0], g[1]);
    }
  }
  function ni() {
    this.size = 0, this.__data__ = {
      hash: new Z(),
      map: new (st || ne)(),
      string: new Z()
    };
  }
  function ii(i) {
    var l = xe(this, i).delete(i);
    return this.size -= l ? 1 : 0, l;
  }
  function oi(i) {
    return xe(this, i).get(i);
  }
  function ai(i) {
    return xe(this, i).has(i);
  }
  function si(i, l) {
    var f = xe(this, i), g = f.size;
    return f.set(i, l), this.size += f.size == g ? 0 : 1, this;
  }
  fe.prototype.clear = ni, fe.prototype.delete = ii, fe.prototype.get = oi, fe.prototype.has = ai, fe.prototype.set = si;
  function At(i) {
    var l = -1, f = i == null ? 0 : i.length;
    for (this.__data__ = new fe(); ++l < f; )
      this.add(i[l]);
  }
  function Vr(i) {
    return this.__data__.set(i, n), this;
  }
  function Et(i) {
    return this.__data__.has(i);
  }
  At.prototype.add = At.prototype.push = Vr, At.prototype.has = Et;
  function $e(i) {
    var l = this.__data__ = new ne(i);
    this.size = l.size;
  }
  function or() {
    this.__data__ = new ne(), this.size = 0;
  }
  function li(i) {
    var l = this.__data__, f = l.delete(i);
    return this.size = l.size, f;
  }
  function ci(i) {
    return this.__data__.get(i);
  }
  function ui(i) {
    return this.__data__.has(i);
  }
  function fi(i, l) {
    var f = this.__data__;
    if (f instanceof ne) {
      var g = f.__data__;
      if (!st || g.length < r - 1)
        return g.push([i, l]), this.size = ++f.size, this;
      f = this.__data__ = new fe(g);
    }
    return f.set(i, l), this.size = f.size, this;
  }
  $e.prototype.clear = or, $e.prototype.delete = li, $e.prototype.get = ci, $e.prototype.has = ui, $e.prototype.set = fi;
  function di(i, l) {
    var f = Tt(i), g = !f && Kr(i), R = !f && !g && Pt(i), x = !f && !g && !R && Qr(i), M = f || g || R || x, L = M ? kn(i.length, String) : [], z = L.length;
    for (var B in i)
      (l || me.call(i, B)) && !(M && // Safari 9 has enumerable `arguments.length` in strict mode.
      (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      R && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      x && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
      wi(B, z))) && L.push(B);
    return L;
  }
  function xt(i, l) {
    for (var f = i.length; f--; )
      if (Wr(i[f][0], l))
        return f;
    return -1;
  }
  function ar(i, l, f) {
    var g = l(i);
    return Tt(i) ? g : Jt(g, f(i));
  }
  function lt(i) {
    return i == null ? i === void 0 ? G : S : Ee && Ee in Object(i) ? He(i) : Gr(i);
  }
  function zr(i) {
    return Ie(i) && lt(i) == c;
  }
  function qr(i, l, f, g, R) {
    return i === l ? !0 : i == null || l == null || !Ie(i) && !Ie(l) ? i !== i && l !== l : pi(i, l, f, g, qr, R);
  }
  function pi(i, l, f, g, R, x) {
    var M = Tt(i), L = Tt(l), z = M ? d : Re(i), B = L ? d : Re(l);
    z = z == c ? T : z, B = B == c ? T : B;
    var ie = z == T, de = B == T, K = z == B;
    if (K && Pt(i)) {
      if (!Pt(l))
        return !1;
      M = !0, ie = !1;
    }
    if (K && !ie)
      return x || (x = new $e()), M || Qr(i) ? sr(i, l, f, g, R, x) : mi(i, l, z, f, g, R, x);
    if (!(f & o)) {
      var oe = ie && me.call(i, "__wrapped__"), ee = de && me.call(l, "__wrapped__");
      if (oe || ee) {
        var Ye = oe ? i.value() : i, Ve = ee ? l.value() : l;
        return x || (x = new $e()), R(Ye, Ve, f, g, x);
      }
    }
    return K ? (x || (x = new $e()), vi(i, l, f, g, R, x)) : !1;
  }
  function hi(i) {
    if (!Xr(i) || Si(i))
      return !1;
    var l = Jr(i) ? Vn : Oe;
    return l.test(ce(i));
  }
  function yi(i) {
    return Ie(i) && cr(i.length) && !!U[lt(i)];
  }
  function gi(i) {
    if (!Oi(i))
      return at(i);
    var l = [];
    for (var f in Object(i))
      me.call(i, f) && f != "constructor" && l.push(f);
    return l;
  }
  function sr(i, l, f, g, R, x) {
    var M = f & o, L = i.length, z = l.length;
    if (L != z && !(M && z > L))
      return !1;
    var B = x.get(i);
    if (B && x.get(l))
      return B == l;
    var ie = -1, de = !0, K = f & a ? new At() : void 0;
    for (x.set(i, l), x.set(l, i); ++ie < L; ) {
      var oe = i[ie], ee = l[ie];
      if (g)
        var Ye = M ? g(ee, oe, ie, l, i, x) : g(oe, ee, ie, i, l, x);
      if (Ye !== void 0) {
        if (Ye)
          continue;
        de = !1;
        break;
      }
      if (K) {
        if (!Dr(l, function(Ve, ut) {
          if (!vt(K, ut) && (oe === Ve || R(oe, Ve, f, g, x)))
            return K.push(ut);
        })) {
          de = !1;
          break;
        }
      } else if (!(oe === ee || R(oe, ee, f, g, x))) {
        de = !1;
        break;
      }
    }
    return x.delete(i), x.delete(l), de;
  }
  function mi(i, l, f, g, R, x, M) {
    switch (f) {
      case W:
        if (i.byteLength != l.byteLength || i.byteOffset != l.byteOffset)
          return !1;
        i = i.buffer, l = l.buffer;
      case _e:
        return !(i.byteLength != l.byteLength || !x(new kr(i), new kr(l)));
      case h:
      case v:
      case _:
        return Wr(+i, +l);
      case b:
        return i.name == l.name && i.message == l.message;
      case N:
      case P:
        return i == l + "";
      case y:
        var L = Mr;
      case O:
        var z = g & o;
        if (L || (L = Ce), i.size != l.size && !z)
          return !1;
        var B = M.get(i);
        if (B)
          return B == l;
        g |= a, M.set(i, l);
        var ie = sr(L(i), L(l), g, R, x, M);
        return M.delete(i), ie;
      case D:
        if (ir)
          return ir.call(i) == ir.call(l);
    }
    return !1;
  }
  function vi(i, l, f, g, R, x) {
    var M = f & o, L = ct(i), z = L.length, B = ct(l), ie = B.length;
    if (z != ie && !M)
      return !1;
    for (var de = z; de--; ) {
      var K = L[de];
      if (!(M ? K in l : me.call(l, K)))
        return !1;
    }
    var oe = x.get(i);
    if (oe && x.get(l))
      return oe == l;
    var ee = !0;
    x.set(i, l), x.set(l, i);
    for (var Ye = M; ++de < z; ) {
      K = L[de];
      var Ve = i[K], ut = l[K];
      if (g)
        var Io = M ? g(ut, Ve, K, l, i, x) : g(Ve, ut, K, i, l, x);
      if (!(Io === void 0 ? Ve === ut || R(Ve, ut, f, g, x) : Io)) {
        ee = !1;
        break;
      }
      Ye || (Ye = K == "constructor");
    }
    if (ee && !Ye) {
      var Yr = i.constructor, Zr = l.constructor;
      Yr != Zr && "constructor" in i && "constructor" in l && !(typeof Yr == "function" && Yr instanceof Yr && typeof Zr == "function" && Zr instanceof Zr) && (ee = !1);
    }
    return x.delete(i), x.delete(l), ee;
  }
  function ct(i) {
    return ar(i, ur, bi);
  }
  function xe(i, l) {
    var f = i.__data__;
    return _i(l) ? f[typeof l == "string" ? "string" : "hash"] : f.map;
  }
  function Ue(i, l) {
    var f = Xt(i, l);
    return hi(f) ? f : void 0;
  }
  function He(i) {
    var l = me.call(i, Ee), f = i[Ee];
    try {
      i[Ee] = void 0;
      var g = !0;
    } catch {
    }
    var R = Br.call(i);
    return g && (l ? i[Ee] = f : delete i[Ee]), R;
  }
  var bi = Ot ? function(i) {
    return i == null ? [] : (i = Object(i), Nr(Ot(i), function(l) {
      return St.call(i, l);
    }));
  } : Ei, Re = lt;
  (er && Re(new er(new ArrayBuffer(1))) != W || st && Re(new st()) != y || tr && Re(tr.resolve()) != I || rr && Re(new rr()) != O || nr && Re(new nr()) != re) && (Re = function(i) {
    var l = lt(i), f = l == T ? i.constructor : void 0, g = f ? ce(f) : "";
    if (g)
      switch (g) {
        case Ur:
          return W;
        case ke:
          return y;
        case zn:
          return I;
        case qn:
          return O;
        case Gn:
          return re;
      }
    return l;
  });
  function wi(i, l) {
    return l = l ?? s, !!l && (typeof i == "number" || Cr.test(i)) && i > -1 && i % 1 == 0 && i < l;
  }
  function _i(i) {
    var l = typeof i;
    return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? i !== "__proto__" : i === null;
  }
  function Si(i) {
    return !!jr && jr in i;
  }
  function Oi(i) {
    var l = i && i.constructor, f = typeof l == "function" && l.prototype || it;
    return i === f;
  }
  function Gr(i) {
    return Br.call(i);
  }
  function ce(i) {
    if (i != null) {
      try {
        return Qt.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  function Wr(i, l) {
    return i === l || i !== i && l !== l;
  }
  var Kr = zr(function() {
    return arguments;
  }()) ? zr : function(i) {
    return Ie(i) && me.call(i, "callee") && !St.call(i, "callee");
  }, Tt = Array.isArray;
  function lr(i) {
    return i != null && cr(i.length) && !Jr(i);
  }
  var Pt = Zt || xi;
  function Ai(i, l) {
    return qr(i, l);
  }
  function Jr(i) {
    if (!Xr(i))
      return !1;
    var l = lt(i);
    return l == w || l == p || l == u || l == C;
  }
  function cr(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= s;
  }
  function Xr(i) {
    var l = typeof i;
    return i != null && (l == "object" || l == "function");
  }
  function Ie(i) {
    return i != null && typeof i == "object";
  }
  var Qr = Kt ? Un(Kt) : yi;
  function ur(i) {
    return lr(i) ? di(i) : gi(i);
  }
  function Ei() {
    return [];
  }
  function xi() {
    return !1;
  }
  e.exports = Ai;
})(wn, wn.exports);
wn.exports;
var he = Sn(null), on = Sn(null), qi = Qs(null), an = Sn(null), Na = null;
_n({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: o }) {
  he.value = t ? Fo(t) : null, on.value = e, an.value = null;
  let a = typeof window > "u";
  return Na = dy(a, n, o), a || (co.init({ initialPage: e, resolveComponent: r, swapComponent: async (s) => {
    he.value = Fo(s.component), on.value = s.page, an.value = s.preserveState ? an.value : Date.now();
  } }), co.on("navigate", () => Na.forceUpdate())), () => {
    if (he.value) {
      he.value.inheritAttrs = !!he.value.inheritAttrs;
      let s = sn(he.value, { ...on.value.props, key: an.value });
      return qi.value && (he.value.layout = qi.value, qi.value = null), he.value.layout ? typeof he.value.layout == "function" ? he.value.layout(sn, s) : (Array.isArray(he.value.layout) ? he.value.layout : [he.value.layout]).concat(s).reverse().reduce((c, d) => (d.inheritAttrs = !!d.inheritAttrs, sn(d, { ...on.value.props }, () => c))) : s;
    }
  };
} });
_n({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((r, n) => {
    let o = e.props[n];
    return ["key", "head-key"].includes(n) ? r : o === "" ? r + ` ${n}` : r + ` ${n}="${o}"`;
  }, "");
  return `<${e.type}${t}>`;
}, renderTagChildren(e) {
  return typeof e.children == "string" ? e.children : e.children.reduce((t, r) => t + this.renderTag(r), "");
}, renderTag(e) {
  if (e.type.toString() === "Symbol(Text)")
    return e.children;
  if (e.type.toString() === "Symbol()" || e.type.toString() === "Symbol(Comment)")
    return "";
  let t = this.renderTagStart(e);
  return e.children && (t += this.renderTagChildren(e)), this.isUnaryTag(e) || (t += `</${e.type}>`), t;
}, addTitleElement(e) {
  return this.title && !e.find((t) => t.startsWith("<title")) && e.push(`<title inertia>${this.title}</title>`), e;
}, renderNodes(e) {
  return this.addTitleElement(e.flatMap((t) => this.resolveNode(t)).map((t) => this.renderTag(t)).filter((t) => t));
}, resolveNode(e) {
  let t = e.type && e.type.toString();
  return typeof e.type == "function" ? this.resolveNode(e.type()) : typeof e.type == "object" ? (console.warn("Using components in the <Head> component is not supported."), []) : /(fragment|fgt)/i.test(t) && e.children ? e.children.flatMap((r) => this.resolveNode(r)) : /(comment|cmt)/i.test(t) ? [] : e;
} }, render() {
  this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
} });
var hy = _n({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let n = e.as.toLowerCase(), o = e.method.toLowerCase(), [a, s] = ks(o, e.href || "", e.data, e.queryStringArrayFormat);
    return n === "a" && o !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${o}" as="button">...</Link>`), sn(e.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (c) => {
      py(c) && (c.preventDefault(), co.visit(a, { data: s, method: o, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? o !== "get", only: e.only, headers: e.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, t);
  };
} }), Us = hy;
function yy(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
    })
  ]);
}
function gy(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function my(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 15.75l7.5-7.5 7.5 7.5"
    })
  ]);
}
function vy(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    })
  ]);
}
function by(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function wy(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
var _y = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sy = /^\w*$/;
function Po(e, t) {
  if (Te(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || xn(e) ? !0 : Sy.test(e) || !_y.test(e) || t != null && e in Object(t);
}
var Oy = "Expected a function";
function Co(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Oy);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, n);
    return r.cache = a.set(o, s) || a, s;
  };
  return r.cache = new (Co.Cache || Je)(), r;
}
Co.Cache = Je;
var Ay = 500;
function Ey(e) {
  var t = Co(e, function(n) {
    return r.size === Ay && r.clear(), n;
  }), r = t.cache;
  return t;
}
var xy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ty = /\\(\\)?/g, Py = Ey(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xy, function(r, n, o, a) {
    t.push(o ? a.replace(Ty, "$1") : n || r);
  }), t;
});
const Cy = Py;
function $y(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var Ry = 1 / 0, Da = rt ? rt.prototype : void 0, Ma = Da ? Da.toString : void 0;
function Hs(e) {
  if (typeof e == "string")
    return e;
  if (Te(e))
    return $y(e, Hs) + "";
  if (xn(e))
    return Ma ? Ma.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ry ? "-0" : t;
}
function Iy(e) {
  return e == null ? "" : Hs(e);
}
function Vs(e, t) {
  return Te(e) ? e : Po(e, t) ? [e] : Cy(Iy(e));
}
var Fy = 1 / 0;
function Fn(e) {
  if (typeof e == "string" || xn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Fy ? "-0" : t;
}
function zs(e, t) {
  t = Vs(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Fn(t[r++])];
  return r && r == n ? e : void 0;
}
function $o(e, t, r) {
  var n = e == null ? void 0 : zs(e, t);
  return n === void 0 ? r : n;
}
const Ny = {
  name: "Actions",
  components: {
    Dropdown: Za,
    Link: Us,
    EllipsisHorizontalIcon: vy
  },
  props: {
    record: Object,
    actions: Array
  },
  methods: {
    getParams(e) {
      return "params" in e ? e.params.map((t) => $o(this.record, t)) : [];
    }
  }
}, Dy = { class: "btn btn-xs" }, My = {
  class: "flex w-full text-left",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, Ly = {
  class: "w-full",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
};
function jy(e, t, r, n, o, a) {
  const s = V("EllipsisHorizontalIcon"), c = V("Link"), d = V("Dropdown");
  return A(), q(d, { class: "inline-flex" }, {
    trigger: se(() => [
      E("div", Dy, [
        Me(s, { class: "w-6 h-6" })
      ])
    ]),
    content: se(() => [
      E("div", My, [
        E("div", Ly, [
          (A(!0), $(pe, null, be(r.actions, (u) => (A(), q(c, {
            href: e.route(u.route, a.getParams(u)),
            class: "text-left flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300",
            role: "menuitem"
          }, {
            default: se(() => [
              It(ye(u.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 256))
        ])
      ])
    ]),
    _: 1
  });
}
const By = /* @__PURE__ */ ge(Ny, [["render", jy]]), ky = {
  props: {
    cell: {
      type: Object,
      required: !0
    },
    sort: String
  },
  components: {
    ChevronUpDownIcon: gy,
    ChevronUpIcon: my,
    ChevronDownIcon: yy
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
function Uy(e, t, r, n, o, a) {
  const s = V("ChevronUpDownIcon"), c = V("ChevronUpIcon"), d = V("ChevronDownIcon");
  return yt((A(), $("th", {
    class: ve({ "cursor-pointer": r.cell.sortable, "text-right": r.cell.component == "action-field", "text-left": r.cell.component !== "action-field" }),
    onClick: t[0] || (t[0] = Er((...u) => a.onClick && a.onClick(...u), ["prevent"]))
  }, [
    Y(e.$slots, "default", { direction: a.sortDirection }, () => [
      E("div", {
        class: ve([r.cell.component == "action-field" ? "justify-end" : "flex flex-row items-center"])
      }, [
        It(ye(r.cell.name) + " ", 1),
        r.cell.sortable ? (A(), $("div", {
          key: 0,
          class: ve(["ml-2 inline-flex", { "text-gray-400": !this.sort, "text-blue-500": this.sort && this.sort.endsWith(r.cell.attribute) }])
        }, [
          a.sortDirection === "" ? (A(), q(s, {
            key: 0,
            class: "w-4 h-4"
          })) : te("", !0),
          a.sortDirection === "asc" ? (A(), q(c, {
            key: 1,
            class: "w-4 h-4"
          })) : te("", !0),
          a.sortDirection === "desc" ? (A(), q(d, {
            key: 2,
            class: "w-4 h-4"
          })) : te("", !0)
        ], 2)) : te("", !0)
      ], 2)
    ])
  ], 2)), [
    [Nt, r.cell.visible]
  ]);
}
const Hy = /* @__PURE__ */ ge(ky, [["render", Uy]]), Vy = {
  components: {
    Actions: By
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
  methods: { get: $o }
};
function zy(e, t, r, n, o, a) {
  const s = V("Actions");
  return A(), $("td", {
    class: ve({ "text-right": r.field.component == "action-field" })
  }, [
    Y(e.$slots, "default", {}, () => [
      r.field.component == "action-field" ? (A(), q(s, {
        key: 0,
        record: r.record,
        actions: r.field.actions
      }, null, 8, ["record", "actions"])) : (A(), $(pe, { key: 1 }, [
        It(ye(a.get(r.record, r.field.attribute)), 1)
      ], 64))
    ])
  ], 2);
}
const qy = /* @__PURE__ */ ge(Vy, [["render", zy]]);
function Gy(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Wy(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ky = {
  components: {
    Link: Us,
    ChevronRightIcon: Wy,
    ChevronLeftIcon: Gy
  },
  props: {
    pagination: {
      type: Object
    }
  },
  computed: {
    hasPagination() {
      return Object.keys(this.pagination).length > 0;
    },
    previousPageUrl() {
      if ("prev_page_url" in this.pagination)
        return this.pagination.prev_page_url;
      if ("links" in this.pagination)
        return this.pagination.links.prev;
    },
    nextPageUrl() {
      if ("next_page_url" in this.pagination)
        return this.pagination.next_page_url;
      if ("links" in this.pagination)
        return this.pagination.links.next;
    }
  }
}, Jy = {
  key: 0,
  class: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 dark:border-gray-700 md:rounded-b-lg dark:bg-gray-800 dark:text-gray-200"
}, Xy = { class: "flex-1 flex justify-between sm:hidden" }, Qy = {
  key: 0,
  class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
}, Yy = { class: "hidden sm:inline text-sm text-gray-700 dark:text-gray-200 font-medium" }, Zy = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, eg = /* @__PURE__ */ E("span", { class: "sr-only" }, "Previous", -1), tg = /* @__PURE__ */ E("span", { class: "sr-only" }, "Next", -1), rg = {
  key: 1,
  class: "p-4 text-center"
};
function ng(e, t, r, n, o, a) {
  const s = V("ChevronLeftIcon"), c = V("ChevronRightIcon");
  return A(), $(pe, null, [
    a.hasPagination && r.pagination.total > 0 ? (A(), $("nav", Jy, [
      E("div", Xy, [
        (A(), q(fr(a.previousPageUrl ? "Link" : "div"), {
          href: a.previousPageUrl,
          class: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-gray-700 hover:text-gray-500 dark:border-gray-800 dark:text-gray-200"
        }, {
          default: se(() => [
            It("Previous ")
          ]),
          _: 1
        }, 8, ["href"])),
        (A(), q(fr(a.nextPageUrl ? "Link" : "div"), {
          href: a.nextPageUrl,
          class: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-gray-700 hover:text-gray-500 dark:border-gray-800 dark:text-gray-200"
        }, {
          default: se(() => [
            It("Next ")
          ]),
          _: 1
        }, 8, ["href"]))
      ]),
      r.pagination.total > 0 ? (A(), $("div", Qy, [
        E("div", null, [
          Y(e.$slots, "default"),
          E("p", Yy, ye(r.pagination.from) + " to " + ye(r.pagination.to) + " of " + ye(r.pagination.total) + " results ", 1)
        ]),
        E("div", null, [
          E("nav", Zy, [
            (A(), q(fr(a.previousPageUrl ? "Link" : "div"), {
              href: a.previousPageUrl,
              class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-500"
            }, {
              default: se(() => [
                eg,
                Me(s, { class: "h-5 w-5" })
              ]),
              _: 1
            }, 8, ["href"])),
            (A(!0), $(pe, null, be(r.pagination.links, (d, u) => (A(), $("div", { key: u }, [
              Y(e.$slots, "link", {}, () => [
                !isNaN(d.label) || d.label === "..." ? (A(), q(fr(d.url ? "Link" : "div"), {
                  key: 0,
                  href: d.url,
                  class: ve(["relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 dark:hover:bg-gray-500 dark:text-gray-200 dark:border-gray-500 dark:text-gray-200", { "hover:bg-gray-50 dark:bg-gray-800": d.url && !d.active, "bg-gray-200 dark:bg-gray-700": d.active, "dark:bg-gray-700": d.label === "..." }])
                }, {
                  default: se(() => [
                    It(ye(d.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href", "class"])) : te("", !0)
              ])
            ]))), 128)),
            (A(), q(fr(a.nextPageUrl ? "Link" : "div"), {
              href: a.nextPageUrl,
              class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-500"
            }, {
              default: se(() => [
                tg,
                Me(c, { class: "h-5 w-5" })
              ]),
              _: 1
            }, 8, ["href"]))
          ])
        ])
      ])) : te("", !0)
    ])) : te("", !0),
    r.pagination.total == 0 ? (A(), $("p", rg, "No results found")) : te("", !0)
  ], 64);
}
const ig = /* @__PURE__ */ ge(Ky, [["render", ng]]);
function og(e, t) {
  var r = [];
  return Wa(e, function(n, o, a) {
    t(n, o, a) && r.push(n);
  }), r;
}
var ag = 1, sg = 2;
function lg(e, t, r, n) {
  var o = r.length, a = o, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var c = r[o];
    if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    c = r[o];
    var d = c[0], u = e[d], h = c[1];
    if (s && c[2]) {
      if (u === void 0 && !(d in e))
        return !1;
    } else {
      var v = new Ge();
      if (n)
        var b = n(u, h, d, e, t, v);
      if (!(b === void 0 ? ho(h, u, ag | sg, n, v) : b))
        return !1;
    }
  }
  return !0;
}
function qs(e) {
  return e === e && !Mt(e);
}
function cg(e) {
  for (var t = On(e), r = t.length; r--; ) {
    var n = t[r], o = e[n];
    t[r] = [n, o, qs(o)];
  }
  return t;
}
function Gs(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function ug(e) {
  var t = cg(e);
  return t.length == 1 && t[0][2] ? Gs(t[0][0], t[0][1]) : function(r) {
    return r === e || lg(r, e, t);
  };
}
function fg(e, t) {
  return e != null && t in Object(e);
}
function dg(e, t, r) {
  t = Vs(t, e);
  for (var n = -1, o = t.length, a = !1; ++n < o; ) {
    var s = Fn(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != o ? a : (o = e == null ? 0 : e.length, !!o && fo(o) && Va(s, o) && (Te(e) || Ua(e)));
}
function pg(e, t) {
  return e != null && dg(e, t, fg);
}
var hg = 1, yg = 2;
function gg(e, t) {
  return Po(e) && qs(t) ? Gs(Fn(e), t) : function(r) {
    var n = $o(r, e);
    return n === void 0 && n === t ? pg(r, e) : ho(t, n, hg | yg);
  };
}
function mg(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function vg(e) {
  return function(t) {
    return zs(t, e);
  };
}
function bg(e) {
  return Po(e) ? mg(Fn(e)) : vg(e);
}
function Ro(e) {
  return typeof e == "function" ? e : e == null ? Ka : typeof e == "object" ? Te(e) ? gg(e[0], e[1]) : ug(e) : bg(e);
}
function uo(e, t) {
  var r = Te(e) ? Qa : og;
  return r(e, Ro(t));
}
const wg = {
  components: {
    Dropdown: es,
    MagnifyingGlassIcon: wy
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
      return uo(this.rows, (e) => e.key !== "global").length > 0;
    },
    rowsLeft() {
      return uo(this.rows, (e) => this.showRow(e)).length > 0;
    }
  },
  methods: {
    showRow(e) {
      return !(e.key === "global" || e.enabled);
    },
    enableSearch(e) {
      this.onAdd(e), this.$refs.dropdown.hide();
    }
  }
}, _g = {
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, Sg = {
  class: "divide-y divide-gray-200 dark:divide-gray-600",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
}, Og = ["onClick"];
function Ag(e, t, r, n, o, a) {
  const s = V("MagnifyingGlassIcon"), c = V("Dropdown");
  return a.hasRows ? (A(), q(c, {
    key: 0,
    ref: "dropdown",
    disabled: !a.rowsLeft,
    "close-on-click": !0,
    class: "w-auto"
  }, {
    button: se(() => [
      Me(s, { class: "h-4 w-4 my-1" })
    ]),
    default: se(() => [
      E("div", _g, [
        E("div", Sg, [
          (A(!0), $(pe, null, be(r.rows, (d) => yt((A(), $("button", {
            key: d.key,
            onClick: Er((u) => a.enableSearch(d.key), ["prevent"]),
            class: "text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300",
            role: "menuitem"
          }, ye(d.label), 9, Og)), [
            [Nt, a.showRow(d)]
          ])), 128))
        ])
      ])
    ]),
    _: 1
  }, 8, ["disabled"])) : te("", !0);
}
const Eg = /* @__PURE__ */ ge(wg, [["render", Ag]]);
function xg(e) {
  return function(t, r, n) {
    var o = Object(t);
    if (!po(t)) {
      var a = Ro(r);
      t = On(t), r = function(c) {
        return a(o[c], c, o);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? o[a ? t[s] : s] : void 0;
  };
}
function Tg(e, t, r, n) {
  for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var La = 1 / 0, Pg = 17976931348623157e292;
function Cg(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Qi(e), e === La || e === -La) {
    var t = e < 0 ? -1 : 1;
    return t * Pg;
  }
  return e === e ? e : 0;
}
function $g(e) {
  var t = Cg(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Rg = Math.max;
function Ig(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var o = r == null ? 0 : $g(r);
  return o < 0 && (o = Rg(n + o, 0)), Tg(e, Ro(t), o);
}
var Fg = xg(Ig);
const Ws = Fg, Ng = {
  components: {
    Dropdown: es,
    EyeIcon: by
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
      this.onChange(e, !this.columns[e].visible);
    }
  },
  computed: {
    allowableColumns() {
      return this.columns.filter((e) => e.visibility);
    },
    hasDisabledFilter() {
      return !!Ws(this.columns, (e) => !e.visible);
    }
  }
}, Dg = {
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "sort-menu"
}, Mg = { class: "" }, Lg = { class: "divide-y divide-gray-200 dark:divide-gray-600" }, jg = {
  class: "text-sm font-medium text-gray-900 dark:text-gray-400",
  id: "privacy-option-1-label"
}, Bg = ["onClick"], kg = /* @__PURE__ */ E("span", { class: "sr-only" }, "Use setting", -1);
function Ug(e, t, r, n, o, a) {
  const s = V("EyeIcon"), c = V("Dropdown");
  return A(), q(c, {
    placement: "bottom-end",
    active: a.hasDisabledFilter
  }, {
    button: se(() => [
      Me(s, { class: "h-4 w-4 my-1" })
    ]),
    default: se(() => [
      E("div", Dg, [
        E("div", Mg, [
          E("ul", Lg, [
            (A(!0), $(pe, null, be(a.allowableColumns, (d, u) => (A(), $("li", {
              class: "py-2 px-4 flex items-center justify-between",
              key: d.attribute
            }, [
              E("p", jg, ye(d.name), 1),
              E("button", {
                onClick: Er((h) => a.toggle(u), ["prevent"]),
                type: "button",
                class: ve(["ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", { "bg-green-500": d.visible, "bg-gray-200": !d.visible }]),
                "aria-pressed": "true",
                "aria-labelledby": "privacy-option-1-label",
                "aria-describedby": "privacy-option-1-description"
              }, [
                kg,
                E("span", {
                  "aria-hidden": "true",
                  class: ve([[d.visible ? "translate-x-5" : "translate-x-0"], "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                }, null, 2)
              ], 10, Bg)
            ]))), 128))
          ])
        ])
      ])
    ]),
    _: 1
  }, 8, ["active"]);
}
const Hg = /* @__PURE__ */ ge(Ng, [["render", Ug]]), Vg = {
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
    handleChange: Ya(function(e, t) {
      this.onChange(e, t);
    }, 300)
  },
  computed: {
    hasEnabledFilter() {
      return Ws(this.filters, (e, t) => e.value != "" && e.value != null) !== void 0;
    }
  }
}, zg = { class: "" }, qg = ["value", "onChange"], Gg = {
  value: "",
  disabled: ""
}, Wg = ["value"], Kg = ["value", "onInput", "placeholder"], Jg = ["onClick"];
function Xg(e, t, r, n, o, a) {
  return A(!0), $(pe, null, be(r.filters, (s, c) => (A(), $("div", {
    key: s.field
  }, [
    E("div", zg, [
      s.component == "select-filter" ? (A(), $("select", {
        key: 0,
        value: s.value,
        onChange: (d) => a.handleChange(c, d.target.value),
        class: ve(["form-select", { error: r.errors[s.field] }])
      }, [
        E("option", Gg, ye(s.label), 1),
        (A(!0), $(pe, null, be(s.options, (d, u) => (A(), $("option", {
          value: u,
          key: u
        }, ye(d), 9, Wg))), 128))
      ], 42, qg)) : te("", !0),
      s.component == "text-filter" ? (A(), $("input", {
        key: 1,
        type: "text",
        value: s.value,
        onInput: (d) => a.handleChange(c, d.target.value),
        class: ve(["form-input", { error: r.errors[s.field] }]),
        placeholder: s.label
      }, null, 42, Kg)) : te("", !0),
      E("button", {
        class: "btn btn-default",
        onClick: (d) => a.clear(c)
      }, "X", 8, Jg)
    ])
  ]))), 128);
}
const Qg = /* @__PURE__ */ ge(Vg, [["render", Xg]]);
function Yg(e, t) {
  return A(), $("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    E("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Zg = {
  props: {
    modelValue: {
      type: String,
      default: "",
      required: !1
    }
  },
  components: {
    MagnifyingGlassIcon: Yg
  },
  methods: {
    update(e) {
      this.$emit("update:modelValue", e);
    }
  }
}, em = { class: "relative" }, tm = ["value"], rm = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" };
function nm(e, t, r, n, o, a) {
  const s = V("MagnifyingGlassIcon");
  return A(), $("div", em, [
    E("input", {
      class: "form-input pr-12",
      placeholder: "Search...",
      value: r.modelValue,
      type: "text",
      onInput: t[0] || (t[0] = (c) => a.update(c.target.value))
    }, null, 40, tm),
    E("div", rm, [
      Me(s, {
        class: "h-5 w-5 text-gray-400",
        viewBox: "0 0 20 20",
        fill: "currentColor"
      })
    ])
  ]);
}
const im = /* @__PURE__ */ ge(Zg, [["render", nm]]), om = {
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
      return uo(this.rows, (e) => this.searchOptionIsEnabled(e.key) && e.key !== "global");
    }
  }
}, am = { class: "w-full bg-white dark:bg-gray-800 px-4 py-8 border dark:border-none mb-4 rounded-lg mt-4" }, sm = { class: "flex items-center space-x-4" }, lm = { class: "space-y-8" }, cm = { class: "text-sm" }, um = { class: "flex-grow space-y-8" }, fm = { class: "flex-grow relative" }, dm = ["value", "onInput"], pm = { class: "absolute inset-y-0 right-0 pr-3 flex items-center" }, hm = ["onClick"], ym = /* @__PURE__ */ E("span", { class: "sr-only" }, "Remove search", -1), gm = /* @__PURE__ */ E("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ E("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), mm = [
  ym,
  gm
];
function vm(e, t, r, n, o, a) {
  return yt((A(), $("div", am, [
    E("div", sm, [
      E("div", lm, [
        (A(!0), $(pe, null, be(a.enabledFilters, (s, c) => (A(), $("div", {
          key: c,
          class: "h-8 flex form-label items-center"
        }, [
          E("span", cm, ye(s.label), 1)
        ]))), 128))
      ]),
      E("div", um, [
        (A(!0), $(pe, null, be(a.enabledFilters, (s, c) => (A(), $("div", {
          key: c,
          class: "h-8 flex items-center"
        }, [
          E("div", fm, [
            E("input", {
              class: "form-input",
              ref_for: !0,
              ref: s.key,
              value: s.value,
              type: "text",
              onInput: (d) => r.onChange(s.key, d.target.value)
            }, null, 40, dm),
            E("div", pm, [
              E("button", {
                onClick: Er((d) => r.onRemove(s.key), ["prevent"]),
                class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, mm, 8, hm)
            ])
          ])
        ]))), 128))
      ])
    ])
  ], 512)), [
    [Nt, a.hasFiltersEnabled]
  ]);
}
const bm = /* @__PURE__ */ ge(om, [["render", vm]]), wm = {
  props: {
    modelValue: {
      type: [Number, String],
      default: 15,
      required: !1
    },
    options: {
      type: Array,
      default() {
        return [15, 30, 50, 100];
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
}, _m = ["value"];
function Sm(e, t, r, n, o, a) {
  return yt((A(), $("select", {
    ref: "input",
    "onUpdate:modelValue": t[0] || (t[0] = (s) => o.selected = s),
    class: "form-select py-2 inline-flex"
  }, [
    (A(!0), $(pe, null, be(r.options, (s) => (A(), $("option", {
      key: s,
      value: s
    }, ye(s), 9, _m))), 128))
  ], 512)), [
    [Ys, o.selected]
  ]);
}
const Om = /* @__PURE__ */ ge(wm, [["render", Sm]]), Am = {
  components: {
    PerPageSelect: Om,
    Pagination: ig,
    SearchColumnDropdown: Eg,
    ColumnVisibilityToggles: Hg,
    CustomFilters: Qg,
    GlobalSearch: im,
    SearchFields: bm,
    THeadCell: Hy,
    TBodyCell: qy
  },
  props: {
    modelValue: Object,
    pagination: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    records: {
      type: Array,
      default: () => [],
      required: !1
    },
    errors: {
      type: Object,
      default() {
        return {};
      }
    },
    showFilters: {
      type: Boolean,
      default: !0
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
      return Object.keys(this.table.columns || {}).length > 0;
    },
    hasSearchRows() {
      return Object.keys(this.table.search || {}).length > 0;
    }
  }
}, Em = {
  key: 0,
  class: "flex md:space-x-4 md:space-y-0 space-y-4 my-4 flex-col md:flex-row bg-white dark:bg-gray-800 p-6 shadow dark:shadow-none rounded-lg"
}, xm = {
  key: 0,
  class: "flex-grow min-w-min"
}, Tm = { class: "mt-8 flex flex-col" }, Pm = { class: "overflow-x-auto" }, Cm = { class: "overflow-x" }, $m = { class: "ring-1 dark:shadow-none ring-black ring-opacity-5 overflow-scroll w-full md:rounded-t-lg" }, Rm = { class: "table table-responsive-xl" }, Im = { class: "bg-gray-50 dark:bg-gray-800 dark:text-gray-200" }, Fm = { class: "bg-white text-gray-800 divide-y divide-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:divide-gray-800" }, Nm = { class: "inline-flex mr-4" };
function Dm(e, t, r, n, o, a) {
  const s = V("GlobalSearch"), c = V("CustomFilters"), d = V("SearchColumnDropdown"), u = V("ColumnVisibilityToggles"), h = V("SearchFields"), v = V("THeadCell"), b = V("TBodyCell"), w = V("PerPageSelect"), p = V("Pagination");
  return A(), $("div", null, [
    r.showFilters ? (A(), $("div", Em, [
      Y(e.$slots, "globalSearch", {
        search: o.table.search,
        updateSearchValue: a.updateGlobalSearchValue
      }, () => [
        o.table.search && o.table.search.global ? (A(), $("div", xm, [
          Me(s, {
            modelValue: o.table.search.global.value,
            "onUpdate:modelValue": t[0] || (t[0] = (y) => o.table.search.global.value = y)
          }, null, 8, ["modelValue"])
        ])) : te("", !0)
      ]),
      Y(e.$slots, "filters", {
        hasFilters: a.hasFilters,
        filters: o.table.filters,
        changeFilterValue: a.updateFilterValue
      }, () => [
        a.hasFilters ? (A(), q(c, {
          key: 0,
          filters: o.table.filters,
          errors: r.errors,
          "on-change": a.updateFilterValue
        }, null, 8, ["filters", "errors", "on-change"])) : te("", !0)
      ]),
      Y(e.$slots, "addSearch", {
        hasSearchRows: a.hasSearchRows,
        search: o.table.search,
        onAdd: a.enableSearch
      }, () => [
        a.hasSearchRows ? (A(), q(d, {
          key: 0,
          rows: o.table.search,
          "on-add": a.enableSearch
        }, null, 8, ["rows", "on-add"])) : te("", !0)
      ]),
      Y(e.$slots, "toggleColumns", {
        hasColumns: a.hasColumns,
        columns: o.table.columns,
        change: a.updateColumnVisibility
      }, () => [
        a.hasColumns ? (A(), q(u, {
          key: 0,
          columns: o.table.columns,
          "on-change": a.updateColumnVisibility
        }, null, 8, ["columns", "on-change"])) : te("", !0)
      ])
    ])) : te("", !0),
    Y(e.$slots, "searchRows", {
      hasSearches: a.hasSearchRows,
      search: o.table.search,
      removeSearch: a.removeSearch,
      updateValue: a.updateSearchValue
    }, () => [
      a.hasSearchRows ? (A(), q(h, {
        key: 0,
        ref: "rows",
        rows: o.table.search,
        "on-remove": a.removeSearch,
        "on-change": a.updateSearchValue
      }, null, 8, ["rows", "on-remove", "on-change"])) : te("", !0)
    ]),
    Y(e.$slots, "table", {}, () => [
      E("div", Tm, [
        E("div", Pm, [
          E("div", Cm, [
            E("div", $m, [
              E("table", Rm, [
                E("thead", Im, [
                  Y(e.$slots, "head", {
                    columns: o.table.columns,
                    sortHandler: a.handleSort
                  }, () => [
                    E("tr", null, [
                      (A(!0), $(pe, null, be(o.table.columns, (y) => (A(), q(v, {
                        cell: y,
                        sort: o.table.sort,
                        onSort: a.handleSort,
                        class: "dark:bg-gray-800"
                      }, null, 8, ["cell", "sort", "onSort"]))), 256))
                    ])
                  ])
                ]),
                E("tbody", Fm, [
                  Y(e.$slots, "body", {
                    records: r.records,
                    columns: o.table.columns
                  }, () => [
                    (A(!0), $(pe, null, be(r.records, (y) => (A(), $("tr", null, [
                      (A(!0), $(pe, null, be(o.table.columns, (_) => yt((A(), q(b, {
                        record: y,
                        field: _
                      }, null, 8, ["record", "field"])), [
                        [Nt, _.visible]
                      ])), 256)),
                      Y(e.$slots, "action", { record: y })
                    ]))), 256))
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    Y(e.$slots, "pagination", {}, () => [
      Me(p, { pagination: r.pagination }, {
        default: se(() => [
          E("div", Nm, [
            Me(w, {
              modelValue: o.table.perPage,
              "onUpdate:modelValue": t[1] || (t[1] = (y) => o.table.perPage = y)
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["pagination"])
    ])
  ]);
}
const jm = /* @__PURE__ */ ge(Am, [["render", Dm]]);
export {
  By as Actions,
  Hg as ColumnVisibilityToggles,
  Qg as CustomFilters,
  es as Dropdown,
  im as GlobalSearch,
  Lm as HasInertiaTable,
  ig as Pagination,
  Eg as SearchColumnDropdown,
  bm as SearchFields,
  qy as TBodyCell,
  Hy as THeadCell,
  jm as Table
};
