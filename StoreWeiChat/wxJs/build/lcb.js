/*03231554*/
0 == location.href.indexOf("http://m.lechebang.com/webapp") ? (window.lcbAppStop = !0, location.href = location.href.replace(/^http/, "https")) : 0 == location.href.indexOf("http://mtest.lechebang.com/webapp") && (window.lcbAppStop = !0, location.href = location.href.replace(/^http/, "https")), window.applicationCache && (sessionStorage.getItem("appcache") || "appcache" == window.name ? (sessionStorage.removeItem("appcache"), window.name = "") : applicationCache.addEventListener("updateready", function(e) {
	applicationCache.update(), applicationCache.swapCache(), setTimeout(function() {
		try {
			sessionStorage.setItem("appcache", 1)
		} catch (e) {
			window.name = "appcache"
		}
		location.reload()
	}, 10)
}, !1));
var requirejs, require, define;
! function(t) {
	function e(t, e) {
		return v.call(t, e)
	}

	function i(t, e) {
		var i, n, a, r, o, s, l, c, d, p, u, h = e && e.split("/"),
			f = m.map,
			g = f && f["*"] || {};
		if (t && "." === t.charAt(0))
			if (e) {
				for (t = t.split("/"), o = t.length - 1, m.nodeIdCompat && b.test(t[o]) && (t[o] = t[o].replace(b, "")), t = h.slice(0, h.length - 1).concat(t), d = 0; d < t.length; d += 1)
					if (u = t[d], "." === u) t.splice(d, 1), d -= 1;
					else if (".." === u) {
					if (1 === d && (".." === t[2] || ".." === t[0])) break;
					d > 0 && (t.splice(d - 1, 2), d -= 2)
				}
				t = t.join("/")
			} else 0 === t.indexOf("./") && (t = t.substring(2));
		if ((h || g) && f) {
			for (i = t.split("/"), d = i.length; d > 0; d -= 1) {
				if (n = i.slice(0, d).join("/"), h)
					for (p = h.length; p > 0; p -= 1)
						if (a = f[h.slice(0, p).join("/")], a && (a = a[n])) {
							r = a, s = d;
							break
						}
				if (r) break;
				!l && g && g[n] && (l = g[n], c = d)
			}!r && l && (r = l, s = c), r && (i.splice(0, s, r), t = i.join("/"))
		}
		return t
	}

	function n(e, i) {
		return function() {
			var n = _.call(arguments, 0);
			return "string" != typeof n[0] && 1 === n.length && n.push(null), d.apply(t, n.concat([e, i]))
		}
	}

	function a(t) {
		return function(e) {
			return i(e, t)
		}
	}

	function r(t) {
		return function(e) {
			h[t] = e
		}
	}

	function o(i) {
		if (e(f, i)) {
			var n = f[i];
			delete f[i], g[i] = !0, c.apply(t, n)
		}
		if (!e(h, i) && !e(g, i)) throw new Error("No " + i);
		return h[i]
	}

	function s(t) {
		var e, i = t ? t.indexOf("!") : -1;
		return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
	}

	function l(t) {
		return function() {
			return m && m.config && m.config[t] || {}
		}
	}
	var c, d, p, u, h = {},
		f = {},
		m = {},
		g = {},
		v = Object.prototype.hasOwnProperty,
		_ = [].slice,
		b = /\.js$/;
	p = function(t, e) {
		var n, r = s(t),
			l = r[0];
		return t = r[1], l && (l = i(l, e), n = o(l)), l ? t = n && n.normalize ? n.normalize(t, a(e)) : i(t, e) : (t = i(t, e), r = s(t), l = r[0], t = r[1], l && (n = o(l))), {
			f: l ? l + "!" + t : t,
			n: t,
			pr: l,
			p: n
		}
	}, u = {
		require: function(t) {
			return n(t)
		},
		exports: function(t) {
			var e = h[t];
			return "undefined" != typeof e ? e : h[t] = {}
		},
		module: function(t) {
			return {
				id: t,
				uri: "",
				exports: h[t],
				config: l(t)
			}
		}
	}, c = function(i, a, s, l) {
		var c, d, m, v, _, b, x = [],
			y = typeof s;
		if (l = l || i, "undefined" === y || "function" === y) {
			for (a = !a.length && s.length ? ["require", "exports", "module"] : a, _ = 0; _ < a.length; _ += 1)
				if (v = p(a[_], l), d = v.f, "require" === d) x[_] = u.require(i);
				else if ("exports" === d) x[_] = u.exports(i), b = !0;
			else if ("module" === d) c = x[_] = u.module(i);
			else if (e(h, d) || e(f, d) || e(g, d)) x[_] = o(d);
			else {
				if (!v.p) throw new Error(i + " missing " + d);
				v.p.load(v.n, n(l, !0), r(d), {}), x[_] = h[d]
			}
			m = s ? s.apply(h[i], x) : void 0, i && (c && c.exports !== t && c.exports !== h[i] ? h[i] = c.exports : m === t && b || (h[i] = m))
		} else i && (h[i] = s)
	}, requirejs = require = d = function(e, i, n, a, r) {
		if ("string" == typeof e) return u[e] ? u[e](i) : o(p(e, i).f);
		if (!e.splice) {
			if (m = e, m.deps && d(m.deps, m.callback), !i) return;
			i.splice ? (e = i, i = n, n = null) : e = t
		}
		return i = i || function() {}, "function" == typeof n && (n = a, a = r), c(t, e, i, n), d
	}, d.config = function(t) {
		return d(t)
	}, requirejs._defined = h, define = function(t, i, n) {
		if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
		i.splice || (n = i, i = []), e(h, t) || e(f, t) || (f[t] = [t, i, n])
	}, define.amd = {
		jQuery: !0
	}
}(),
function() {
	function t(t) {
		function e(e, i, n, a, r, o) {
			for (; r >= 0 && o > r; r += t) {
				var s = a ? a[r] : r;
				n = i(n, e[s], s, e)
			}
			return n
		}
		return function(i, n, a, r) {
			n = b(n, r, 4);
			var o = !A(i) && _.keys(i),
				s = (o || i).length,
				l = t > 0 ? 0 : s - 1;
			return arguments.length < 3 && (a = i[o ? o[l] : l], l += t), e(i, n, a, o, l, s)
		}
	}

	function e(t) {
		return function(e, i, n) {
			i = x(i, n);
			for (var a = I(e), r = t > 0 ? 0 : a - 1; r >= 0 && a > r; r += t)
				if (i(e[r], r, e)) return r;
			return -1
		}
	}

	function i(t, e, i) {
		return function(n, a, r) {
			var o = 0,
				s = I(n);
			if ("number" == typeof r) t > 0 ? o = r >= 0 ? r : Math.max(r + s, o) : s = r >= 0 ? Math.min(r + 1, s) : r + s + 1;
			else if (i && r && s) return r = i(n, a), n[r] === a ? r : -1;
			if (a !== a) return r = e(d.call(n, o, s), _.isNaN), r >= 0 ? r + o : -1;
			for (r = t > 0 ? o : s - 1; r >= 0 && s > r; r += t)
				if (n[r] === a) return r;
			return -1
		}
	}

	function n(t, e) {
		var i = P.length,
			n = t.constructor,
			a = _.isFunction(n) && n.prototype || s,
			r = "constructor";
		for (_.has(t, r) && !_.contains(e, r) && e.push(r); i--;) r = P[i], r in t && t[r] !== a[r] && !_.contains(e, r) && e.push(r)
	}
	var a = this,
		r = a._,
		o = Array.prototype,
		s = Object.prototype,
		l = Function.prototype,
		c = o.push,
		d = o.slice,
		p = s.toString,
		u = s.hasOwnProperty,
		h = Array.isArray,
		f = Object.keys,
		m = l.bind,
		g = Object.create,
		v = function() {},
		_ = function(t) {
			return t instanceof _ ? t : this instanceof _ ? void(this._wrapped = t) : new _(t)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), exports._ = _) : a._ = _, _.VERSION = "1.8.3";
	var b = function(t, e, i) {
			if (void 0 === e) return t;
			switch (null == i ? 3 : i) {
				case 1:
					return function(i) {
						return t.call(e, i)
					};
				case 2:
					return function(i, n) {
						return t.call(e, i, n)
					};
				case 3:
					return function(i, n, a) {
						return t.call(e, i, n, a)
					};
				case 4:
					return function(i, n, a, r) {
						return t.call(e, i, n, a, r)
					}
			}
			return function() {
				return t.apply(e, arguments)
			}
		},
		x = function(t, e, i) {
			return null == t ? _.identity : _.isFunction(t) ? b(t, e, i) : _.isObject(t) ? _.matcher(t) : _.property(t)
		};
	_.iteratee = function(t, e) {
		return x(t, e, 1 / 0)
	};
	var y = function(t, e) {
			return function(i) {
				var n = arguments.length;
				if (2 > n || null == i) return i;
				for (var a = 1; n > a; a++)
					for (var r = arguments[a], o = t(r), s = o.length, l = 0; s > l; l++) {
						var c = o[l];
						e && void 0 !== i[c] || (i[c] = r[c])
					}
				return i
			}
		},
		w = function(t) {
			if (!_.isObject(t)) return {};
			if (g) return g(t);
			v.prototype = t;
			var e = new v;
			return v.prototype = null, e
		},
		k = function(t) {
			return function(e) {
				return null == e ? void 0 : e[t]
			}
		},
		j = Math.pow(2, 53) - 1,
		I = k("length"),
		A = function(t) {
			var e = I(t);
			return "number" == typeof e && e >= 0 && j >= e
		};
	_.each = _.forEach = function(t, e, i) {
		e = b(e, i);
		var n, a;
		if (A(t))
			for (n = 0, a = t.length; a > n; n++) e(t[n], n, t);
		else {
			var r = _.keys(t);
			for (n = 0, a = r.length; a > n; n++) e(t[r[n]], r[n], t)
		}
		return t
	}, _.map = _.collect = function(t, e, i) {
		e = x(e, i);
		for (var n = !A(t) && _.keys(t), a = (n || t).length, r = Array(a), o = 0; a > o; o++) {
			var s = n ? n[o] : o;
			r[o] = e(t[s], s, t)
		}
		return r
	}, _.reduce = _.foldl = _.inject = t(1), _.reduceRight = _.foldr = t(-1), _.find = _.detect = function(t, e, i) {
		var n;
		return n = A(t) ? _.findIndex(t, e, i) : _.findKey(t, e, i), void 0 !== n && -1 !== n ? t[n] : void 0
	}, _.filter = _.select = function(t, e, i) {
		var n = [];
		return e = x(e, i), _.each(t, function(t, i, a) {
			e(t, i, a) && n.push(t)
		}), n
	}, _.reject = function(t, e, i) {
		return _.filter(t, _.negate(x(e)), i)
	}, _.every = _.all = function(t, e, i) {
		e = x(e, i);
		for (var n = !A(t) && _.keys(t), a = (n || t).length, r = 0; a > r; r++) {
			var o = n ? n[r] : r;
			if (!e(t[o], o, t)) return !1
		}
		return !0
	}, _.some = _.any = function(t, e, i) {
		e = x(e, i);
		for (var n = !A(t) && _.keys(t), a = (n || t).length, r = 0; a > r; r++) {
			var o = n ? n[r] : r;
			if (e(t[o], o, t)) return !0
		}
		return !1
	}, _.contains = _.includes = _.include = function(t, e, i, n) {
		return A(t) || (t = _.values(t)), ("number" != typeof i || n) && (i = 0), _.indexOf(t, e, i) >= 0
	}, _.invoke = function(t, e) {
		var i = d.call(arguments, 2),
			n = _.isFunction(e);
		return _.map(t, function(t) {
			var a = n ? e : t[e];
			return null == a ? a : a.apply(t, i)
		})
	}, _.pluck = function(t, e) {
		return _.map(t, _.property(e))
	}, _.where = function(t, e) {
		return _.filter(t, _.matcher(e))
	}, _.findWhere = function(t, e) {
		return _.find(t, _.matcher(e))
	}, _.max = function(t, e, i) {
		var n, a, r = -1 / 0,
			o = -1 / 0;
		if (null == e && null != t) {
			t = A(t) ? t : _.values(t);
			for (var s = 0, l = t.length; l > s; s++) n = t[s], n > r && (r = n)
		} else e = x(e, i), _.each(t, function(t, i, n) {
			a = e(t, i, n), (a > o || a === -1 / 0 && r === -1 / 0) && (r = t, o = a)
		});
		return r
	}, _.min = function(t, e, i) {
		var n, a, r = 1 / 0,
			o = 1 / 0;
		if (null == e && null != t) {
			t = A(t) ? t : _.values(t);
			for (var s = 0, l = t.length; l > s; s++) n = t[s], r > n && (r = n)
		} else e = x(e, i), _.each(t, function(t, i, n) {
			a = e(t, i, n), (o > a || 1 / 0 === a && 1 / 0 === r) && (r = t, o = a)
		});
		return r
	}, _.shuffle = function(t) {
		for (var e, i = A(t) ? t : _.values(t), n = i.length, a = Array(n), r = 0; n > r; r++) e = _.random(0, r), e !== r && (a[r] = a[e]), a[e] = i[r];
		return a
	}, _.sample = function(t, e, i) {
		return null == e || i ? (A(t) || (t = _.values(t)), t[_.random(t.length - 1)]) : _.shuffle(t).slice(0, Math.max(0, e))
	}, _.sortBy = function(t, e, i) {
		return e = x(e, i), _.pluck(_.map(t, function(t, i, n) {
			return {
				value: t,
				index: i,
				criteria: e(t, i, n)
			}
		}).sort(function(t, e) {
			var i = t.criteria,
				n = e.criteria;
			if (i !== n) {
				if (i > n || void 0 === i) return 1;
				if (n > i || void 0 === n) return -1
			}
			return t.index - e.index
		}), "value")
	};
	var T = function(t) {
		return function(e, i, n) {
			var a = {};
			return i = x(i, n), _.each(e, function(n, r) {
				var o = i(n, r, e);
				t(a, n, o)
			}), a
		}
	};
	_.groupBy = T(function(t, e, i) {
		_.has(t, i) ? t[i].push(e) : t[i] = [e]
	}), _.indexBy = T(function(t, e, i) {
		t[i] = e
	}), _.countBy = T(function(t, e, i) {
		_.has(t, i) ? t[i] ++ : t[i] = 1
	}), _.toArray = function(t) {
		return t ? _.isArray(t) ? d.call(t) : A(t) ? _.map(t, _.identity) : _.values(t) : []
	}, _.size = function(t) {
		return null == t ? 0 : A(t) ? t.length : _.keys(t).length
	}, _.partition = function(t, e, i) {
		e = x(e, i);
		var n = [],
			a = [];
		return _.each(t, function(t, i, r) {
			(e(t, i, r) ? n : a).push(t)
		}), [n, a]
	}, _.first = _.head = _.take = function(t, e, i) {
		return null == t ? void 0 : null == e || i ? t[0] : _.initial(t, t.length - e)
	}, _.initial = function(t, e, i) {
		return d.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
	}, _.last = function(t, e, i) {
		return null == t ? void 0 : null == e || i ? t[t.length - 1] : _.rest(t, Math.max(0, t.length - e))
	}, _.rest = _.tail = _.drop = function(t, e, i) {
		return d.call(t, null == e || i ? 1 : e)
	}, _.compact = function(t) {
		return _.filter(t, _.identity)
	};
	var C = function(t, e, i, n) {
		for (var a = [], r = 0, o = n || 0, s = I(t); s > o; o++) {
			var l = t[o];
			if (A(l) && (_.isArray(l) || _.isArguments(l))) {
				e || (l = C(l, e, i));
				var c = 0,
					d = l.length;
				for (a.length += d; d > c;) a[r++] = l[c++]
			} else i || (a[r++] = l)
		}
		return a
	};
	_.flatten = function(t, e) {
		return C(t, e, !1)
	}, _.without = function(t) {
		return _.difference(t, d.call(arguments, 1))
	}, _.uniq = _.unique = function(t, e, i, n) {
		_.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = x(i, n));
		for (var a = [], r = [], o = 0, s = I(t); s > o; o++) {
			var l = t[o],
				c = i ? i(l, o, t) : l;
			e ? (o && r === c || a.push(l), r = c) : i ? _.contains(r, c) || (r.push(c), a.push(l)) : _.contains(a, l) || a.push(l)
		}
		return a
	}, _.union = function() {
		return _.uniq(C(arguments, !0, !0))
	}, _.intersection = function(t) {
		for (var e = [], i = arguments.length, n = 0, a = I(t); a > n; n++) {
			var r = t[n];
			if (!_.contains(e, r)) {
				for (var o = 1; i > o && _.contains(arguments[o], r); o++);
				o === i && e.push(r)
			}
		}
		return e
	}, _.difference = function(t) {
		var e = C(arguments, !0, !0, 1);
		return _.filter(t, function(t) {
			return !_.contains(e, t)
		})
	}, _.zip = function() {
		return _.unzip(arguments)
	}, _.unzip = function(t) {
		for (var e = t && _.max(t, I).length || 0, i = Array(e), n = 0; e > n; n++) i[n] = _.pluck(t, n);
		return i
	}, _.object = function(t, e) {
		for (var i = {}, n = 0, a = I(t); a > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
		return i
	}, _.findIndex = e(1), _.findLastIndex = e(-1), _.sortedIndex = function(t, e, i, n) {
		i = x(i, n, 1);
		for (var a = i(e), r = 0, o = I(t); o > r;) {
			var s = Math.floor((r + o) / 2);
			i(t[s]) < a ? r = s + 1 : o = s
		}
		return r
	}, _.indexOf = i(1, _.findIndex, _.sortedIndex), _.lastIndexOf = i(-1, _.findLastIndex), _.range = function(t, e, i) {
		null == e && (e = t || 0, t = 0), i = i || 1;
		for (var n = Math.max(Math.ceil((e - t) / i), 0), a = Array(n), r = 0; n > r; r++, t += i) a[r] = t;
		return a
	};
	var S = function(t, e, i, n, a) {
		if (!(n instanceof e)) return t.apply(i, a);
		var r = w(t.prototype),
			o = t.apply(r, a);
		return _.isObject(o) ? o : r
	};
	_.bind = function(t, e) {
		if (m && t.bind === m) return m.apply(t, d.call(arguments, 1));
		if (!_.isFunction(t)) throw new TypeError("Bind must be called on a function");
		var i = d.call(arguments, 2),
			n = function() {
				return S(t, n, e, this, i.concat(d.call(arguments)))
			};
		return n
	}, _.partial = function(t) {
		var e = d.call(arguments, 1),
			i = function() {
				for (var n = 0, a = e.length, r = Array(a), o = 0; a > o; o++) r[o] = e[o] === _ ? arguments[n++] : e[o];
				for (; n < arguments.length;) r.push(arguments[n++]);
				return S(t, i, this, this, r)
			};
		return i
	}, _.bindAll = function(t) {
		var e, i, n = arguments.length;
		if (1 >= n) throw new Error("bindAll must be passed function names");
		for (e = 1; n > e; e++) i = arguments[e], t[i] = _.bind(t[i], t);
		return t
	}, _.memoize = function(t, e) {
		var i = function(n) {
			var a = i.cache,
				r = "" + (e ? e.apply(this, arguments) : n);
			return _.has(a, r) || (a[r] = t.apply(this, arguments)), a[r]
		};
		return i.cache = {}, i
	}, _.delay = function(t, e) {
		var i = d.call(arguments, 2);
		return setTimeout(function() {
			return t.apply(null, i)
		}, e)
	}, _.defer = _.partial(_.delay, _, 1), _.throttle = function(t, e, i) {
		var n, a, r, o = null,
			s = 0;
		i || (i = {});
		var l = function() {
			s = i.leading === !1 ? 0 : _.now(), o = null, r = t.apply(n, a), o || (n = a = null)
		};
		return function() {
			var c = _.now();
			s || i.leading !== !1 || (s = c);
			var d = e - (c - s);
			return n = this, a = arguments, 0 >= d || d > e ? (o && (clearTimeout(o), o = null), s = c, r = t.apply(n, a), o || (n = a = null)) : o || i.trailing === !1 || (o = setTimeout(l, d)), r
		}
	}, _.debounce = function(t, e, i) {
		var n, a, r, o, s, l = function() {
			var c = _.now() - o;
			e > c && c >= 0 ? n = setTimeout(l, e - c) : (n = null, i || (s = t.apply(r, a), n || (r = a = null)))
		};
		return function() {
			r = this, a = arguments, o = _.now();
			var c = i && !n;
			return n || (n = setTimeout(l, e)), c && (s = t.apply(r, a), r = a = null), s
		}
	}, _.wrap = function(t, e) {
		return _.partial(e, t)
	}, _.negate = function(t) {
		return function() {
			return !t.apply(this, arguments)
		}
	}, _.compose = function() {
		var t = arguments,
			e = t.length - 1;
		return function() {
			for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
			return n
		}
	}, _.after = function(t, e) {
		return function() {
			return --t < 1 ? e.apply(this, arguments) : void 0
		}
	}, _.before = function(t, e) {
		var i;
		return function() {
			return --t > 0 && (i = e.apply(this, arguments)), 1 >= t && (e = null), i
		}
	}, _.once = _.partial(_.before, 2);
	var $ = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	_.keys = function(t) {
		if (!_.isObject(t)) return [];
		if (f) return f(t);
		var e = [];
		for (var i in t) _.has(t, i) && e.push(i);
		return $ && n(t, e), e
	}, _.allKeys = function(t) {
		if (!_.isObject(t)) return [];
		var e = [];
		for (var i in t) e.push(i);
		return $ && n(t, e), e
	}, _.values = function(t) {
		for (var e = _.keys(t), i = e.length, n = Array(i), a = 0; i > a; a++) n[a] = t[e[a]];
		return n
	}, _.mapObject = function(t, e, i) {
		e = x(e, i);
		for (var n, a = _.keys(t), r = a.length, o = {}, s = 0; r > s; s++) n = a[s], o[n] = e(t[n], n, t);
		return o
	}, _.pairs = function(t) {
		for (var e = _.keys(t), i = e.length, n = Array(i), a = 0; i > a; a++) n[a] = [e[a], t[e[a]]];
		return n
	}, _.invert = function(t) {
		for (var e = {}, i = _.keys(t), n = 0, a = i.length; a > n; n++) e[t[i[n]]] = i[n];
		return e
	}, _.functions = _.methods = function(t) {
		var e = [];
		for (var i in t) _.isFunction(t[i]) && e.push(i);
		return e.sort()
	}, _.extend = y(_.allKeys), _.extendOwn = _.assign = y(_.keys), _.findKey = function(t, e, i) {
		e = x(e, i);
		for (var n, a = _.keys(t), r = 0, o = a.length; o > r; r++)
			if (n = a[r], e(t[n], n, t)) return n
	}, _.pick = function(t, e, i) {
		var n, a, r = {},
			o = t;
		if (null == o) return r;
		_.isFunction(e) ? (a = _.allKeys(o), n = b(e, i)) : (a = C(arguments, !1, !1, 1), n = function(t, e, i) {
			return e in i
		}, o = Object(o));
		for (var s = 0, l = a.length; l > s; s++) {
			var c = a[s],
				d = o[c];
			n(d, c, o) && (r[c] = d)
		}
		return r
	}, _.omit = function(t, e, i) {
		if (_.isFunction(e)) e = _.negate(e);
		else {
			var n = _.map(C(arguments, !1, !1, 1), String);
			e = function(t, e) {
				return !_.contains(n, e)
			}
		}
		return _.pick(t, e, i)
	}, _.defaults = y(_.allKeys, !0), _.create = function(t, e) {
		var i = w(t);
		return e && _.extendOwn(i, e), i
	}, _.clone = function(t) {
		return _.isObject(t) ? _.isArray(t) ? t.slice() : _.extend({}, t) : t
	}, _.tap = function(t, e) {
		return e(t), t
	}, _.isMatch = function(t, e) {
		var i = _.keys(e),
			n = i.length;
		if (null == t) return !n;
		for (var a = Object(t), r = 0; n > r; r++) {
			var o = i[r];
			if (e[o] !== a[o] || !(o in a)) return !1
		}
		return !0
	};
	var z = function(t, e, i, n) {
		if (t === e) return 0 !== t || 1 / t === 1 / e;
		if (null == t || null == e) return t === e;
		t instanceof _ && (t = t._wrapped), e instanceof _ && (e = e._wrapped);
		var a = p.call(t);
		if (a !== p.call(e)) return !1;
		switch (a) {
			case "[object RegExp]":
			case "[object String]":
				return "" + t == "" + e;
			case "[object Number]":
				return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
			case "[object Date]":
			case "[object Boolean]":
				return +t === +e
		}
		var r = "[object Array]" === a;
		if (!r) {
			if ("object" != typeof t || "object" != typeof e) return !1;
			var o = t.constructor,
				s = e.constructor;
			if (o !== s && !(_.isFunction(o) && o instanceof o && _.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e) return !1
		}
		i = i || [], n = n || [];
		for (var l = i.length; l--;)
			if (i[l] === t) return n[l] === e;
		if (i.push(t), n.push(e), r) {
			if (l = t.length, l !== e.length) return !1;
			for (; l--;)
				if (!z(t[l], e[l], i, n)) return !1
		} else {
			var c, d = _.keys(t);
			if (l = d.length, _.keys(e).length !== l) return !1;
			for (; l--;)
				if (c = d[l], !_.has(e, c) || !z(t[c], e[c], i, n)) return !1
		}
		return i.pop(), n.pop(), !0
	};
	_.isEqual = function(t, e) {
		return z(t, e)
	}, _.isEmpty = function(t) {
		return null == t ? !0 : A(t) && (_.isArray(t) || _.isString(t) || _.isArguments(t)) ? 0 === t.length : 0 === _.keys(t).length
	}, _.isElement = function(t) {
		return !(!t || 1 !== t.nodeType)
	}, _.isArray = h || function(t) {
		return "[object Array]" === p.call(t)
	}, _.isObject = function(t) {
		var e = typeof t;
		return "function" === e || "object" === e && !!t
	}, _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
		_["is" + t] = function(e) {
			return p.call(e) === "[object " + t + "]"
		}
	}), _.isArguments(arguments) || (_.isArguments = function(t) {
		return _.has(t, "callee")
	}), "function" != typeof / . / && "object" != typeof Int8Array && (_.isFunction = function(t) {
		return "function" == typeof t || !1
	}), _.isFinite = function(t) {
		return isFinite(t) && !isNaN(parseFloat(t))
	}, _.isNaN = function(t) {
		return _.isNumber(t) && t !== +t
	}, _.isBoolean = function(t) {
		return t === !0 || t === !1 || "[object Boolean]" === p.call(t)
	}, _.isNull = function(t) {
		return null === t
	}, _.isUndefined = function(t) {
		return void 0 === t
	}, _.has = function(t, e) {
		return null != t && u.call(t, e)
	}, _.noConflict = function() {
		return a._ = r, this
	}, _.identity = function(t) {
		return t
	}, _.constant = function(t) {
		return function() {
			return t
		}
	}, _.noop = function() {}, _.property = k, _.propertyOf = function(t) {
		return null == t ? function() {} : function(e) {
			return t[e]
		}
	}, _.matcher = _.matches = function(t) {
		return t = _.extendOwn({}, t),
			function(e) {
				return _.isMatch(e, t)
			}
	}, _.times = function(t, e, i) {
		var n = Array(Math.max(0, t));
		e = b(e, i, 1);
		for (var a = 0; t > a; a++) n[a] = e(a);
		return n
	}, _.random = function(t, e) {
		return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
	}, _.now = Date.now || function() {
		return (new Date).getTime()
	};
	var N = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		E = _.invert(N),
		M = function(t) {
			var e = function(e) {
					return t[e]
				},
				i = "(?:" + _.keys(t).join("|") + ")",
				n = RegExp(i),
				a = RegExp(i, "g");
			return function(t) {
				return t = null == t ? "" : "" + t, n.test(t) ? t.replace(a, e) : t
			}
		};
	_.escape = M(N), _.unescape = M(E), _.result = function(t, e, i) {
		var n = null == t ? void 0 : t[e];
		return void 0 === n && (n = i), _.isFunction(n) ? n.call(t) : n
	};
	var U = 0;
	_.uniqueId = function(t) {
		var e = ++U + "";
		return t ? t + e : e
	}, _.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var q = /(.)^/,
		D = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		H = /\\|'|\r|\n|\u2028|\u2029/g,
		O = function(t) {
			return "\\" + D[t]
		};
	_.template = function(t, e, i) {
		!e && i && (e = i), e = _.defaults({}, e, _.templateSettings);
		var n = RegExp([(e.escape || q).source, (e.interpolate || q).source, (e.evaluate || q).source].join("|") + "|$", "g"),
			a = 0,
			r = "__p+='";
		t.replace(n, function(e, i, n, o, s) {
			return r += t.slice(a, s).replace(H, O), a = s + e.length, i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : o && (r += "';\n" + o + "\n__p+='"), e
		}), r += "';\n", e.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
		try {
			var o = new Function(e.variable || "obj", "_", r)
		} catch (s) {
			throw s.source = r, s
		}
		var l = function(t) {
				return o.call(this, t, _)
			},
			c = e.variable || "obj";
		return l.source = "function(" + c + "){\n" + r + "}", l
	}, _.chain = function(t) {
		var e = _(t);
		return e._chain = !0, e
	};
	var L = function(t, e) {
		return t._chain ? _(e).chain() : e
	};
	_.mixin = function(t) {
		_.each(_.functions(t), function(e) {
			var i = _[e] = t[e];
			_.prototype[e] = function() {
				var t = [this._wrapped];
				return c.apply(t, arguments), L(this, i.apply(_, t))
			}
		})
	}, _.mixin(_), _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
		var e = o[t];
		_.prototype[t] = function() {
			var i = this._wrapped;
			return e.apply(i, arguments), "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], L(this, i)
		}
	}), _.each(["concat", "join", "slice"], function(t) {
		var e = o[t];
		_.prototype[t] = function() {
			return L(this, e.apply(this._wrapped, arguments))
		}
	}), _.prototype.value = function() {
		return this._wrapped
	}, _.prototype.valueOf = _.prototype.toJSON = _.prototype.value, _.prototype.toString = function() {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function() {
		return _
	})
}.call(this);
var Zepto = function() {
	function t(t) {
		return null == t ? String(t) : Y[W.call(t)] || "object"
	}

	function e(e) {
		return "function" == t(e)
	}

	function i(t) {
		return null != t && t == t.window
	}

	function n(t) {
		return null != t && t.nodeType == t.DOCUMENT_NODE
	}

	function a(e) {
		return "object" == t(e)
	}

	function r(t) {
		return a(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype
	}

	function o(t) {
		return "number" == typeof t.length
	}

	function s(t) {
		return S.call(t, function(t) {
			return null != t
		})
	}

	function l(t) {
		return t.length > 0 ? k.fn.concat.apply([], t) : t
	}

	function c(t) {
		return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function d(t) {
		return t in z ? z[t] : z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
	}

	function p(t, e) {
		return "number" != typeof e || N[c(t)] ? e : e + "px"
	}

	function u(t) {
		var e, i;
		return P[t] || (e = $.createElement(t), $.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), P[t] = i), P[t]
	}

	function h(t) {
		return "children" in t ? C.call(t.children) : k.map(t.childNodes, function(t) {
			return 1 == t.nodeType ? t : void 0
		})
	}

	function f(t, e, i) {
		for (w in e) i && (r(e[w]) || K(e[w])) ? (r(e[w]) && !r(t[w]) && (t[w] = {}), K(e[w]) && !K(t[w]) && (t[w] = []), f(t[w], e[w], i)) : e[w] !== y && (t[w] = e[w])
	}

	function m(t, e) {
		return null == e ? k(t) : k(t).filter(e)
	}

	function g(t, i, n, a) {
		return e(i) ? i.call(t, n, a) : i
	}

	function v(t, e, i) {
		null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
	}

	function _(t, e) {
		var i = t.className || "",
			n = i && i.baseVal !== y;
		return e === y ? n ? i.baseVal : i : void(n ? i.baseVal = e : t.className = e)
	}

	function b(t) {
		try {
			return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? k.parseJSON(t) : t) : t
		} catch (e) {
			return t
		}
	}

	function x(t, e) {
		e(t);
		for (var i = 0, n = t.childNodes.length; n > i; i++) x(t.childNodes[i], e)
	}
	var y, w, k, j, I, A, T = [],
		C = T.slice,
		S = T.filter,
		$ = window.document,
		P = {},
		z = {},
		N = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		E = /^\s*<(\w+|!)[^>]*>/,
		M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		q = /^(?:body|html)$/i,
		D = /([A-Z])/g,
		H = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		O = ["after", "prepend", "before", "append"],
		L = $.createElement("table"),
		R = $.createElement("tr"),
		B = {
			tr: $.createElement("tbody"),
			tbody: L,
			thead: L,
			tfoot: L,
			td: R,
			th: R,
			"*": $.createElement("div")
		},
		V = /complete|loaded|interactive/,
		F = /^[\w-]*$/,
		Y = {},
		W = Y.toString,
		X = {},
		Q = $.createElement("div"),
		Z = {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		K = Array.isArray || function(t) {
			return t instanceof Array
		};
	return X.matches = function(t, e) {
		if (!e || !t || 1 !== t.nodeType) return !1;
		var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
		if (i) return i.call(t, e);
		var n, a = t.parentNode,
			r = !a;
		return r && (a = Q).appendChild(t), n = ~X.qsa(a, e).indexOf(t), r && Q.removeChild(t), n
	}, I = function(t) {
		return t.replace(/-+(.)?/g, function(t, e) {
			return e ? e.toUpperCase() : ""
		})
	}, A = function(t) {
		return S.call(t, function(e, i) {
			return t.indexOf(e) == i
		})
	}, X.fragment = function(t, e, i) {
		var n, a, o;
		return M.test(t) && (n = k($.createElement(RegExp.$1))), n || (t.replace && (t = t.replace(U, "<$1></$2>")), e === y && (e = E.test(t) && RegExp.$1), e in B || (e = "*"), o = B[e], o.innerHTML = "" + t, n = k.each(C.call(o.childNodes), function() {
			o.removeChild(this)
		})), r(i) && (a = k(n), k.each(i, function(t, e) {
			H.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
		})), n
	}, X.Z = function(t, e) {
		return t = t || [], t.__proto__ = k.fn, t.selector = e || "", t
	}, X.isZ = function(t) {
		return t instanceof X.Z
	}, X.init = function(t, i) {
		var n;
		if (!t) return X.Z();
		if ("string" == typeof t)
			if (t = t.trim(), "<" == t[0] && E.test(t)) n = X.fragment(t, RegExp.$1, i), t = null;
			else {
				if (i !== y) return k(i).find(t);
				n = X.qsa($, t)
			} else {
			if (e(t)) return k($).ready(t);
			if (X.isZ(t)) return t;
			if (K(t)) n = s(t);
			else if (a(t)) n = [t], t = null;
			else if (E.test(t)) n = X.fragment(t.trim(), RegExp.$1, i), t = null;
			else {
				if (i !== y) return k(i).find(t);
				n = X.qsa($, t)
			}
		}
		return X.Z(n, t)
	}, k = function(t, e) {
		return X.init(t, e)
	}, k.extend = function(t) {
		var e, i = C.call(arguments, 1);
		return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach(function(i) {
			f(t, i, e)
		}), t
	}, X.qsa = function(t, e) {
		var i, a = "#" == e[0],
			r = !a && "." == e[0],
			o = a || r ? e.slice(1) : e,
			s = F.test(o);
		return n(t) && s && a ? (i = t.getElementById(o)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : C.call(s && !a ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
	}, k.contains = $.documentElement.contains ? function(t, e) {
		return t !== e && t.contains(e)
	} : function(t, e) {
		for (; e && (e = e.parentNode);)
			if (e === t) return !0;
		return !1
	}, k.type = t, k.isFunction = e, k.isWindow = i, k.isArray = K, k.isPlainObject = r, k.isEmptyObject = function(t) {
		var e;
		for (e in t) return !1;
		return !0
	}, k.inArray = function(t, e, i) {
		return T.indexOf.call(e, t, i)
	}, k.camelCase = I, k.trim = function(t) {
		return null == t ? "" : String.prototype.trim.call(t)
	}, k.uuid = 0, k.support = {}, k.expr = {}, k.map = function(t, e) {
		var i, n, a, r = [];
		if (o(t))
			for (n = 0; n < t.length; n++) i = e(t[n], n), null != i && r.push(i);
		else
			for (a in t) i = e(t[a], a), null != i && r.push(i);
		return l(r)
	}, k.each = function(t, e) {
		var i, n;
		if (o(t)) {
			for (i = 0; i < t.length; i++)
				if (e.call(t[i], i, t[i]) === !1) return t
		} else
			for (n in t)
				if (e.call(t[n], n, t[n]) === !1) return t; return t
	}, k.grep = function(t, e) {
		return S.call(t, e)
	}, window.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		Y["[object " + e + "]"] = e.toLowerCase()
	}), k.fn = {
		forEach: T.forEach,
		reduce: T.reduce,
		push: T.push,
		sort: T.sort,
		indexOf: T.indexOf,
		concat: T.concat,
		map: function(t) {
			return k(k.map(this, function(e, i) {
				return t.call(e, i, e)
			}))
		},
		slice: function() {
			return k(C.apply(this, arguments))
		},
		ready: function(t) {
			return V.test($.readyState) && $.body ? t(k) : $.addEventListener("DOMContentLoaded", function() {
				t(k)
			}, !1), this
		},
		get: function(t) {
			return t === y ? C.call(this) : this[t >= 0 ? t : t + this.length]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(t) {
			return T.every.call(this, function(e, i) {
				return t.call(e, i, e) !== !1
			}), this
		},
		filter: function(t) {
			return e(t) ? this.not(this.not(t)) : k(S.call(this, function(e) {
				return X.matches(e, t)
			}))
		},
		add: function(t, e) {
			return k(A(this.concat(k(t, e))))
		},
		is: function(t) {
			return this.length > 0 && X.matches(this[0], t)
		},
		not: function(t) {
			var i = [];
			if (e(t) && t.call !== y) this.each(function(e) {
				t.call(this, e) || i.push(this)
			});
			else {
				var n = "string" == typeof t ? this.filter(t) : o(t) && e(t.item) ? C.call(t) : k(t);
				this.forEach(function(t) {
					n.indexOf(t) < 0 && i.push(t)
				})
			}
			return k(i)
		},
		has: function(t) {
			return this.filter(function() {
				return a(t) ? k.contains(this, t) : k(this).find(t).size()
			})
		},
		eq: function(t) {
			return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
		},
		first: function() {
			var t = this[0];
			return t && !a(t) ? t : k(t)
		},
		last: function() {
			var t = this[this.length - 1];
			return t && !a(t) ? t : k(t)
		},
		find: function(t) {
			var e, i = this;
			return e = t ? "object" == typeof t ? k(t).filter(function() {
				var t = this;
				return T.some.call(i, function(e) {
					return k.contains(e, t)
				})
			}) : 1 == this.length ? k(X.qsa(this[0], t)) : this.map(function() {
				return X.qsa(this, t)
			}) : k()
		},
		closest: function(t, e) {
			var i = this[0],
				a = !1;
			for ("object" == typeof t && (a = k(t)); i && !(a ? a.indexOf(i) >= 0 : X.matches(i, t));) i = i !== e && !n(i) && i.parentNode;
			return k(i)
		},
		parents: function(t) {
			for (var e = [], i = this; i.length > 0;) i = k.map(i, function(t) {
				return (t = t.parentNode) && !n(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
			});
			return m(e, t)
		},
		parent: function(t) {
			return m(A(this.pluck("parentNode")), t)
		},
		children: function(t) {
			return m(this.map(function() {
				return h(this)
			}), t)
		},
		contents: function() {
			return this.map(function() {
				return C.call(this.childNodes)
			})
		},
		siblings: function(t) {
			return m(this.map(function(t, e) {
				return S.call(h(e.parentNode), function(t) {
					return t !== e
				})
			}), t)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(t) {
			return k.map(this, function(e) {
				return e[t]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = u(this.nodeName))
			})
		},
		replaceWith: function(t) {
			return this.before(t).remove()
		},
		wrap: function(t) {
			var i = e(t);
			if (this[0] && !i) var n = k(t).get(0),
				a = n.parentNode || this.length > 1;
			return this.each(function(e) {
				k(this).wrapAll(i ? t.call(this, e) : a ? n.cloneNode(!0) : n)
			})
		},
		wrapAll: function(t) {
			if (this[0]) {
				k(this[0]).before(t = k(t));
				for (var e;
					(e = t.children()).length;) t = e.first();
				k(t).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			var i = e(t);
			return this.each(function(e) {
				var n = k(this),
					a = n.contents(),
					r = i ? t.call(this, e) : t;
				a.length ? a.wrapAll(r) : n.append(r)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				k(this).replaceWith(k(this).children())
			}), this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(t) {
			return this.each(function() {
				var e = k(this);
				(t === y ? "none" == e.css("display") : t) ? e.show(): e.hide()
			})
		},
		prev: function(t) {
			return k(this.pluck("previousElementSibling")).filter(t || "*")
		},
		next: function(t) {
			return k(this.pluck("nextElementSibling")).filter(t || "*")
		},
		html: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var i = this.innerHTML;
				k(this).empty().append(g(this, t, e, i))
			}) : 0 in this ? this[0].innerHTML : null
		},
		text: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var i = g(this, t, e, this.textContent);
				this.textContent = null == i ? "" : "" + i
			}) : 0 in this ? this[0].textContent : null
		},
		attr: function(t, e) {
			var i;
			return "string" != typeof t || 1 in arguments ? this.each(function(i) {
				if (1 === this.nodeType)
					if (a(t))
						for (w in t) v(this, w, t[w]);
					else v(this, t, g(this, e, i, this.getAttribute(t)))
			}) : this.length && 1 === this[0].nodeType ? !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i : y
		},
		removeAttr: function(t) {
			return this.each(function() {
				1 === this.nodeType && t.split(" ").forEach(function(t) {
					v(this, t)
				}, this)
			})
		},
		prop: function(t, e) {
			return t = Z[t] || t, 1 in arguments ? this.each(function(i) {
				this[t] = g(this, e, i, this[t])
			}) : this[0] && this[0][t]
		},
		data: function(t, e) {
			var i = "data-" + t.replace(D, "-$1").toLowerCase(),
				n = 1 in arguments ? this.attr(i, e) : this.attr(i);
			return null !== n ? b(n) : y
		},
		val: function(t) {
			return 0 in arguments ? this.each(function(e) {
				this.value = g(this, t, e, this.value)
			}) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value)
		},
		offset: function(t) {
			if (t) return this.each(function(e) {
				var i = k(this),
					n = g(this, t, e, i.offset()),
					a = i.offsetParent().offset(),
					r = {
						top: n.top - a.top,
						left: n.left - a.left
					};
				"static" == i.css("position") && (r.position = "relative"), i.css(r)
			});
			if (!this.length) return null;
			var e = this[0].getBoundingClientRect();
			return {
				left: e.left + window.pageXOffset,
				top: e.top + window.pageYOffset,
				width: Math.round(e.width),
				height: Math.round(e.height)
			}
		},
		css: function(e, i) {
			if (arguments.length < 2) {
				var n, a = this[0];
				if (!a) return;
				if (n = getComputedStyle(a, ""), "string" == typeof e) return a.style[I(e)] || n.getPropertyValue(e);
				if (K(e)) {
					var r = {};
					return k.each(e, function(t, e) {
						r[e] = a.style[I(e)] || n.getPropertyValue(e)
					}), r
				}
			}
			var o = "";
			if ("string" == t(e)) i || 0 === i ? o = c(e) + ":" + p(e, i) : this.each(function() {
				this.style.removeProperty(c(e))
			});
			else
				for (w in e) e[w] || 0 === e[w] ? o += c(w) + ":" + p(w, e[w]) + ";" : this.each(function() {
					this.style.removeProperty(c(w))
				});
			return this.each(function() {
				this.style.cssText += ";" + o
			})
		},
		index: function(t) {
			return t ? this.indexOf(k(t)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(t) {
			return t ? T.some.call(this, function(t) {
				return this.test(_(t))
			}, d(t)) : !1
		},
		addClass: function(t) {
			return t ? this.each(function(e) {
				if ("className" in this) {
					j = [];
					var i = _(this),
						n = g(this, t, e, i);
					n.split(/\s+/g).forEach(function(t) {
						k(this).hasClass(t) || j.push(t)
					}, this), j.length && _(this, i + (i ? " " : "") + j.join(" "))
				}
			}) : this
		},
		removeClass: function(t) {
			return this.each(function(e) {
				if ("className" in this) {
					if (t === y) return _(this, "");
					j = _(this), g(this, t, e, j).split(/\s+/g).forEach(function(t) {
						j = j.replace(d(t), " ")
					}), _(this, j.trim())
				}
			})
		},
		toggleClass: function(t, e) {
			return t ? this.each(function(i) {
				var n = k(this),
					a = g(this, t, i, _(this));
				a.split(/\s+/g).forEach(function(t) {
					(e === y ? !n.hasClass(t) : e) ? n.addClass(t): n.removeClass(t)
				})
			}) : this
		},
		scrollTop: function(t) {
			if (this.length) {
				var e = "scrollTop" in this[0];
				return t === y ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
					this.scrollTop = t
				} : function() {
					this.scrollTo(this.scrollX, t)
				})
			}
		},
		scrollLeft: function(t) {
			if (this.length) {
				var e = "scrollLeft" in this[0];
				return t === y ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
					this.scrollLeft = t
				} : function() {
					this.scrollTo(t, this.scrollY)
				})
			}
		},
		position: function() {
			if (this.length) {
				var t = this[0],
					e = this.offsetParent(),
					i = this.offset(),
					n = q.test(e[0].nodeName) ? {
						top: 0,
						left: 0
					} : e.offset();
				return i.top -= parseFloat(k(t).css("margin-top")) || 0, i.left -= parseFloat(k(t).css("margin-left")) || 0, n.top += parseFloat(k(e[0]).css("border-top-width")) || 0, n.left += parseFloat(k(e[0]).css("border-left-width")) || 0, {
					top: i.top - n.top,
					left: i.left - n.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || $.body; t && !q.test(t.nodeName) && "static" == k(t).css("position");) t = t.offsetParent;
				return t
			})
		}
	}, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function(t) {
		var e = t.replace(/./, function(t) {
			return t[0].toUpperCase()
		});
		k.fn[t] = function(a) {
			var r, o = this[0];
			return a === y ? i(o) ? o["inner" + e] : n(o) ? o.documentElement["scroll" + e] : (r = this.offset()) && r[t] : this.each(function(e) {
				o = k(this), o.css(t, g(this, a, e, o[t]()))
			})
		}
	}), O.forEach(function(e, i) {
		var n = i % 2;
		k.fn[e] = function() {
			var e, a, r = k.map(arguments, function(i) {
					return e = t(i), "object" == e || "array" == e || null == i ? i : X.fragment(i)
				}),
				o = this.length > 1;
			return r.length < 1 ? this : this.each(function(t, e) {
				a = n ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null;
				var s = k.contains($.documentElement, a);
				r.forEach(function(t) {
					if (o) t = t.cloneNode(!0);
					else if (!a) return k(t).remove();
					a.insertBefore(t, e), s && x(t, function(t) {
						null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
					})
				})
			})
		}, k.fn[n ? e + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
			return k(t)[e](this), this
		}
	}), X.Z.prototype = k.fn, X.uniq = A, X.deserializeValue = b, k.zepto = X, k
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
	function(t) {
		function e(t) {
			return t._zid || (t._zid = u++)
		}

		function i(t, i, r, o) {
			if (i = n(i), i.ns) var s = a(i.ns);
			return (g[e(t)] || []).filter(function(t) {
				return !(!t || i.e && t.e != i.e || i.ns && !s.test(t.ns) || r && e(t.fn) !== e(r) || o && t.sel != o)
			})
		}

		function n(t) {
			var e = ("" + t).split(".");
			return {
				e: e[0],
				ns: e.slice(1).sort().join(" ")
			}
		}

		function a(t) {
			return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
		}

		function r(t, e) {
			return t.del && !_ && t.e in b || !!e
		}

		function o(t) {
			return x[t] || _ && b[t] || t
		}

		function s(i, a, s, l, d, u, h) {
			var f = e(i),
				m = g[f] || (g[f] = []);
			a.split(/\s/).forEach(function(e) {
				if ("ready" == e) return t(document).ready(s);
				var a = n(e);
				a.fn = s, a.sel = d, a.e in x && (s = function(e) {
					var i = e.relatedTarget;
					return !i || i !== this && !t.contains(this, i) ? a.fn.apply(this, arguments) : void 0
				}), a.del = u;
				var f = u || s;
				a.proxy = function(t) {
					if (t = c(t), !t.isImmediatePropagationStopped()) {
						t.data = l;
						var e = f.apply(i, t._args == p ? [t] : [t].concat(t._args));
						return e === !1 && (t.preventDefault(), t.stopPropagation()), e
					}
				}, a.i = m.length, m.push(a), "addEventListener" in i && i.addEventListener(o(a.e), a.proxy, r(a, h))
			})
		}

		function l(t, n, a, s, l) {
			var c = e(t);
			(n || "").split(/\s/).forEach(function(e) {
				i(t, e, a, s).forEach(function(e) {
					delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(o(e.e), e.proxy, r(e, l))
				})
			})
		}

		function c(e, i) {
			return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(j, function(t, n) {
				var a = i[t];
				e[t] = function() {
					return this[n] = y, a && a.apply(i, arguments)
				}, e[n] = w
			}), (i.defaultPrevented !== p ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = y)), e
		}

		function d(t) {
			var e, i = {
				originalEvent: t
			};
			for (e in t) k.test(e) || t[e] === p || (i[e] = t[e]);
			return c(i, t)
		}
		var p, u = 1,
			h = Array.prototype.slice,
			f = t.isFunction,
			m = function(t) {
				return "string" == typeof t
			},
			g = {},
			v = {},
			_ = "onfocusin" in window,
			b = {
				focus: "focusin",
				blur: "focusout"
			},
			x = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
			add: s,
			remove: l
		}, t.proxy = function(i, n) {
			var a = 2 in arguments && h.call(arguments, 2);
			if (f(i)) {
				var r = function() {
					return i.apply(n, a ? a.concat(h.call(arguments)) : arguments)
				};
				return r._zid = e(i), r
			}
			if (m(n)) return a ? (a.unshift(i[n], i), t.proxy.apply(null, a)) : t.proxy(i[n], i);
			throw new TypeError("expected function")
		}, t.fn.bind = function(t, e, i) {
			return this.on(t, e, i)
		}, t.fn.unbind = function(t, e) {
			return this.off(t, e)
		}, t.fn.one = function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		};
		var y = function() {
				return !0
			},
			w = function() {
				return !1
			},
			k = /^([A-Z]|returnValue$|layer[XY]$)/,
			j = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		t.fn.delegate = function(t, e, i) {
			return this.on(e, t, i)
		}, t.fn.undelegate = function(t, e, i) {
			return this.off(e, t, i)
		}, t.fn.live = function(e, i) {
			return t(document.body).delegate(this.selector, e, i), this
		}, t.fn.die = function(e, i) {
			return t(document.body).undelegate(this.selector, e, i), this
		}, t.fn.on = function(e, i, n, a, r) {
			var o, c, u = this;
			return e && !m(e) ? (t.each(e, function(t, e) {
				u.on(t, i, n, e, r)
			}), u) : (m(i) || f(a) || a === !1 || (a = n, n = i, i = p), (f(n) || n === !1) && (a = n, n = p), a === !1 && (a = w), u.each(function(p, u) {
				r && (o = function(t) {
					return l(u, t.type, a), a.apply(this, arguments)
				}), i && (c = function(e) {
					var n, r = t(e.target).closest(i, u).get(0);
					return r && r !== u ? (n = t.extend(d(e), {
						currentTarget: r,
						liveFired: u
					}), (o || a).apply(r, [n].concat(h.call(arguments, 1)))) : void 0
				}), s(u, e, a, n, i, c || o)
			}))
		}, t.fn.off = function(e, i, n) {
			var a = this;
			return e && !m(e) ? (t.each(e, function(t, e) {
				a.off(t, i, e)
			}), a) : (m(i) || f(n) || n === !1 || (n = i, i = p), n === !1 && (n = w), a.each(function() {
				l(this, e, n, i)
			}))
		}, t.fn.trigger = function(e, i) {
			return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = i, this.each(function() {
				e.type in b && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i)
			})
		}, t.fn.triggerHandler = function(e, n) {
			var a, r;
			return this.each(function(o, s) {
				a = d(m(e) ? t.Event(e) : e), a._args = n, a.target = s, t.each(i(s, e.type || e), function(t, e) {
					return r = e.proxy(a), a.isImmediatePropagationStopped() ? !1 : void 0
				})
			}), r
		}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
			t.fn[e] = function(t) {
				return 0 in arguments ? this.bind(e, t) : this.trigger(e)
			}
		}), t.Event = function(t, e) {
			m(t) || (e = t, t = e.type);
			var i = document.createEvent(v[t] || "Events"),
				n = !0;
			if (e)
				for (var a in e) "bubbles" == a ? n = !!e[a] : i[a] = e[a];
			return i.initEvent(t, n, !0), c(i)
		}
	}(Zepto),
	function(t) {
		function e(e, i, n) {
			var a = t.Event(i);
			return t(e).trigger(a, n), !a.isDefaultPrevented()
		}

		function i(t, i, n, a) {
			return t.global ? e(i || _, n, a) : void 0
		}

		function n(e) {
			e.global && 0 === t.active++ && i(e, null, "ajaxStart")
		}

		function a(e) {
			e.global && !--t.active && i(e, null, "ajaxStop")
		}

		function r(t, e) {
			var n = e.context;
			return e.beforeSend.call(n, t, e) === !1 || i(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void i(e, n, "ajaxSend", [t, e])
		}

		function o(t, e, n, a) {
			var r = n.context,
				o = "success";
			n.success.call(r, t, o, e), a && a.resolveWith(r, [t, o, e]), i(n, r, "ajaxSuccess", [e, n, t]), l(o, e, n)
		}

		function s(t, e, n, a, r) {
			var o = a.context;
			a.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), i(a, o, "ajaxError", [n, a, t || e]), l(e, n, a)
		}

		function l(t, e, n) {
			var r = n.context;
			n.complete.call(r, e, t), i(n, r, "ajaxComplete", [e, n]), a(n)
		}

		function c() {}

		function d(t) {
			return t && (t = t.split(";", 2)[0]), t && (t == k ? "html" : t == w ? "json" : x.test(t) ? "script" : y.test(t) && "xml") || "text"
		}

		function p(t, e) {
			return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
		}

		function u(e) {
			e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = p(e.url, e.data), e.data = void 0)
		}

		function h(e, i, n, a) {
			return t.isFunction(i) && (a = n, n = i, i = void 0), t.isFunction(n) || (a = n, n = void 0), {
				url: e,
				data: i,
				success: n,
				dataType: a
			}
		}

		function f(e, i, n, a) {
			var r, o = t.isArray(i),
				s = t.isPlainObject(i);
			t.each(i, function(i, l) {
				r = t.type(l), a && (i = n ? a : a + "[" + (s || "object" == r || "array" == r ? i : "") + "]"), !a && o ? e.add(l.name, l.value) : "array" == r || !n && "object" == r ? f(e, l, n, i) : e.add(i, l)
			})
		}
		var m, g, v = 0,
			_ = window.document,
			b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			x = /^(?:text|application)\/javascript/i,
			y = /^(?:text|application)\/xml/i,
			w = "application/json",
			k = "text/html",
			j = /^\s*$/,
			I = _.createElement("a");
		I.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, i) {
			if (!("type" in e)) return t.ajax(e);
			var n, a, l = e.jsonpCallback,
				c = (t.isFunction(l) ? l() : l) || "jsonp" + ++v,
				d = _.createElement("script"),
				p = window[c],
				u = function(e) {
					t(d).triggerHandler("error", e || "abort")
				},
				h = {
					abort: u
				};
			return i && i.promise(h), t(d).on("load error", function(r, l) {
				clearTimeout(a), t(d).off().remove(), "error" != r.type && n ? o(n[0], h, e, i) : s(null, l || "error", h, e, i), window[c] = p, n && t.isFunction(p) && p(n[0]), p = n = void 0
			}), r(h, e) === !1 ? (u("abort"), h) : (window[c] = function() {
				n = arguments
			}, d.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), _.head.appendChild(d), e.timeout > 0 && (a = setTimeout(function() {
				u("timeout")
			}, e.timeout)), h)
		}, t.ajaxSettings = {
			type: "GET",
			beforeSend: c,
			success: c,
			error: c,
			complete: c,
			context: null,
			global: !0,
			xhr: function() {
				return new window.XMLHttpRequest
			},
			accepts: {
				script: "text/javascript, application/javascript, application/x-javascript",
				json: w,
				xml: "application/xml, text/xml",
				html: k,
				text: "text/plain"
			},
			crossDomain: !1,
			timeout: 0,
			processData: !0,
			cache: !0
		}, t.ajax = function(e) {
			var i, a = t.extend({}, e || {}),
				l = t.Deferred && t.Deferred();
			for (m in t.ajaxSettings) void 0 === a[m] && (a[m] = t.ajaxSettings[m]);
			n(a), a.crossDomain || (i = _.createElement("a"), i.href = a.url, i.href = i.href, a.crossDomain = I.protocol + "//" + I.host != i.protocol + "//" + i.host), a.url || (a.url = window.location.toString()), u(a);
			var h = a.dataType,
				f = /\?.+=\?/.test(a.url);
			if (f && (h = "jsonp"), a.cache !== !1 && (e && e.cache === !0 || "script" != h && "jsonp" != h) || (a.url = p(a.url, "_=" + Date.now())), "jsonp" == h) return f || (a.url = p(a.url, a.jsonp ? a.jsonp + "=?" : a.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(a, l);
			var v, b = a.accepts[h],
				x = {},
				y = function(t, e) {
					x[t.toLowerCase()] = [t, e]
				},
				w = /^([\w-]+:)\/\//.test(a.url) ? RegExp.$1 : window.location.protocol,
				k = a.xhr(),
				A = k.setRequestHeader;
			if (l && l.promise(k), a.crossDomain || y("X-Requested-With", "XMLHttpRequest"), y("Accept", b || "*/*"), (b = a.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), k.overrideMimeType && k.overrideMimeType(b)), (a.contentType || a.contentType !== !1 && a.data && "GET" != a.type.toUpperCase()) && y("Content-Type", a.contentType || "application/x-www-form-urlencoded"), a.headers)
				for (g in a.headers) y(g, a.headers[g]);
			if (k.setRequestHeader = y, k.onreadystatechange = function() {
				if (4 == k.readyState) {
					k.onreadystatechange = c, clearTimeout(v);
					var e, i = !1;
					if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == w) {
						h = h || d(a.mimeType || k.getResponseHeader("content-type")), e = k.responseText;
						try {
							"script" == h ? (1, eval)(e) : "xml" == h ? e = k.responseXML : "json" == h && (e = j.test(e) ? null : t.parseJSON(e))
						} catch (n) {
							i = n
						}
						i ? s(i, "parsererror", k, a, l) : o(e, k, a, l)
					} else s(k.statusText || null, k.status ? "error" : "abort", k, a, l)
				}
			}, r(k, a) === !1) return k.abort(), s(null, "abort", k, a, l), k;
			if (a.xhrFields)
				for (g in a.xhrFields) k[g] = a.xhrFields[g];
			var T = "async" in a ? a.async : !0;
			k.open(a.type, a.url, T, a.username, a.password);
			for (g in x) A.apply(k, x[g]);
			return a.timeout > 0 && (v = setTimeout(function() {
				k.onreadystatechange = c, k.abort(), s(null, "timeout", k, a, l)
			}, a.timeout)), k.send(a.data ? a.data : null), k
		}, t.get = function() {
			return t.ajax(h.apply(null, arguments))
		}, t.post = function() {
			var e = h.apply(null, arguments);
			return e.type = "POST", t.ajax(e)
		}, t.getJSON = function() {
			var e = h.apply(null, arguments);
			return e.dataType = "json", t.ajax(e)
		}, t.fn.load = function(e, i, n) {
			if (!this.length) return this;
			var a, r = this,
				o = e.split(/\s/),
				s = h(e, i, n),
				l = s.success;
			return o.length > 1 && (s.url = o[0], a = o[1]), s.success = function(e) {
				r.html(a ? t("<div>").html(e.replace(b, "")).find(a) : e), l && l.apply(r, arguments)
			}, t.ajax(s), this
		};
		var A = encodeURIComponent;
		t.param = function(e, i) {
			var n = [];
			return n.add = function(e, i) {
				t.isFunction(i) && (i = i()), null == i && (i = ""), this.push(A(e) + "=" + A(i))
			}, f(n, e, i), n.join("&").replace(/%20/g, "+")
		}
	}(Zepto),
	function(t) {
		t.fn.serializeArray = function() {
			var e, i, n = [],
				a = function(t) {
					return t.forEach ? t.forEach(a) : void n.push({
						name: e,
						value: t
					})
				};
			return this[0] && t.each(this[0].elements, function(n, r) {
				i = r.type, e = r.name, e && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != i && "reset" != i && "button" != i && "file" != i && ("radio" != i && "checkbox" != i || r.checked) && a(t(r).val())
			}), n
		}, t.fn.serialize = function() {
			var t = [];
			return this.serializeArray().forEach(function(e) {
				t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
			}), t.join("&")
		}, t.fn.submit = function(e) {
			if (0 in arguments) this.bind("submit", e);
			else if (this.length) {
				var i = t.Event("submit");
				this.eq(0).trigger(i), i.isDefaultPrevented() || this.get(0).submit()
			}
			return this
		}
	}(Zepto),
	function(t) {
		function e(t, e) {
			var i = this.os = {},
				n = this.browser = {},
				a = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
				r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
				o = !!t.match(/\(Macintosh\; Intel /),
				s = t.match(/(iPad).*OS\s([\d_]+)/),
				l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
				c = !s && t.match(/(iPhone\sOS)\s([\d_]+)/),
				d = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				p = /Win\d{2}|Windows/.test(e),
				u = t.match(/Windows Phone ([\d.]+)/),
				h = d && t.match(/TouchPad/),
				f = t.match(/Kindle\/([\d.]+)/),
				m = t.match(/Silk\/([\d._]+)/),
				g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
				v = t.match(/(BB10).*Version\/([\d.]+)/),
				_ = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				b = t.match(/PlayBook/),
				x = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
				y = t.match(/Firefox\/([\d.]+)/),
				w = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
				k = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
				j = !x && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
				I = j || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
			if ((n.webkit = !!a) && (n.version = a[1]), r && (i.android = !0, i.version = r[2]), c && !l && (i.ios = i.iphone = !0, i.version = c[2].replace(/_/g, ".")), s && (i.ios = i.ipad = !0, i.version = s[2].replace(/_/g, ".")), l && (i.ios = i.ipod = !0, i.version = l[3] ? l[3].replace(/_/g, ".") : null), u && (i.wp = !0, i.version = u[1]), d && (i.webos = !0, i.version = d[2]), h && (i.touchpad = !0), g && (i.blackberry = !0, i.version = g[2]), v && (i.bb10 = !0, i.version = v[2]), _ && (i.rimtabletos = !0, i.version = _[2]), b && (n.playbook = !0), f && (i.kindle = !0, i.version = f[1]), m && (n.silk = !0, n.version = m[1]), !m && i.android && t.match(/Kindle Fire/) && (n.silk = !0), x && (n.chrome = !0, n.version = x[1]), y && (n.firefox = !0, n.version = y[1]), w && (i.firefoxos = !0, i.version = w[1]), k && (n.ie = !0, n.version = k[1]), I && (o || i.ios || p) && (n.safari = !0, i.ios || (n.version = I[1])), j && (n.webview = !0), i.tablet = !!(s || b || r && !t.match(/Mobile/) || y && t.match(/Tablet/) || k && !t.match(/Phone/) && t.match(/Touch/)), i.phone = !(i.tablet || i.ipod || !(r || c || d || g || v || x && t.match(/Android/) || x && t.match(/CriOS\/([\d.]+)/) || y && t.match(/Mobile/) || k && t.match(/Touch/))), -1 != t.indexOf("CtripWireless") || -1 != t.indexOf("lecar")) {
				i.lechebang = !0;
				var A = t.match(/v([\d\.]+)/);
				A && (i.nativeVersion = A[1]), -1 != t.indexOf("lecar_bizapp") && (i.biz = !0)
			}
			t.match(/MicroMessenger/i) && (i.weixin = !0)
		}
		e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
	}(Zepto),
	function(t) {
		"__proto__" in {} || t.extend(t.zepto, {
			Z: function(e, i) {
				return e = e || [], t.extend(e, t.fn), e.selector = i || "", e.__Z = !0, e
			},
			isZ: function(e) {
				return "array" === t.type(e) && "__Z" in e
			}
		});
		try {
			getComputedStyle(void 0)
		} catch (e) {
			var i = getComputedStyle;
			window.getComputedStyle = function(t) {
				try {
					return i(t)
				} catch (e) {
					return null
				}
			}
		}
	}(Zepto), define("zepto", function() {}), define("backbone", ["underscore", "zepto"], function(t) {
		{
			var e = {},
				i = [];
			i.slice
		}
		e.VERSION = "1.2.0", e.$ = $;
		var n = e.Events = {},
			a = /\s+/,
			r = function(e, i, n, r, o) {
				var s, l = 0;
				if (n && "object" == typeof n)
					for (s = t.keys(n); l < s.length; l++) i = e(i, s[l], n[s[l]], o);
				else if (n && a.test(n))
					for (s = n.split(a); l < s.length; l++) i = e(i, s[l], r, o);
				else i = e(i, n, r, o);
				return i
			};
		n.on = function(t, e, i) {
			return o(this, t, e, i)
		};
		var o = function(t, e, i, n, a) {
			if (t._events = r(s, t._events || {}, e, i, {
				context: n,
				ctx: t,
				listening: a
			}), a) {
				var o = t._listeners || (t._listeners = {});
				o[a.id] = a
			}
			return t
		};
		n.listenTo = function(e, i, n) {
			if (!e) return this;
			var a = e._listenId || (e._listenId = t.uniqueId("l")),
				r = this._listeningTo || (this._listeningTo = {}),
				s = r[a];
			if (!s) {
				var l = this._listenId || (this._listenId = t.uniqueId("l"));
				s = r[a] = {
					obj: e,
					objId: a,
					id: l,
					listeningTo: r,
					count: 0
				}
			}
			return o(e, i, n, this, s), this
		};
		var s = function(t, e, i, n) {
			if (i) {
				var a = t[e] || (t[e] = []),
					r = n.context,
					o = n.ctx,
					s = n.listening;
				s && s.count++, a.push({
					callback: i,
					context: r,
					ctx: r || o,
					listening: s
				})
			}
			return t
		};
		n.off = function(t, e, i) {
			return this._events ? (this._events = r(l, this._events, t, e, {
				context: i,
				listeners: this._listeners
			}), this) : this
		}, n.stopListening = function(e, i, n) {
			var a = this._listeningTo;
			if (!a) return this;
			for (var r = e ? [e._listenId] : t.keys(a), o = 0; o < r.length; o++) {
				var s = a[r[o]];
				if (!s) break;
				s.obj.off(i, n, this)
			}
			return t.isEmpty(a) && (this._listeningTo = void 0), this
		};
		var l = function(e, i, n, a) {
			if (e) {
				var r, o = 0,
					s = a.context,
					l = a.listeners;
				if (i || n || s) {
					for (var c = i ? [i] : t.keys(e); o < c.length; o++) {
						i = c[o];
						var d = e[i];
						if (!d) break;
						for (var p = [], u = 0; u < d.length; u++) {
							var h = d[u];
							n && n !== h.callback && n !== h.callback._callback || s && s !== h.context ? p.push(h) : (r = h.listening, r && 0 === --r.count && (delete l[r.id], delete r.listeningTo[r.objId]))
						}
						p.length ? e[i] = p : delete e[i]
					}
					return t.size(e) ? e : void 0
				}
				for (var f = t.keys(l); o < f.length; o++) r = l[f[o]], delete l[r.id], delete r.listeningTo[r.objId]
			}
		};
		n.once = function(e, i, n) {
			var a = r(c, {}, e, i, t.bind(this.off, this));
			return this.on(a, void 0, n)
		}, n.listenToOnce = function(e, i, n) {
			var a = r(c, {}, i, n, t.bind(this.stopListening, this, e));
			return this.listenTo(e, a)
		};
		var c = function(e, i, n, a) {
			if (n) {
				var r = e[i] = t.once(function() {
					a(i, r), n.apply(this, arguments)
				});
				r._callback = n
			}
			return e
		};
		n.trigger = function(t) {
			if (!this._events) return this;
			for (var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0; e > n; n++) i[n] = arguments[n + 1];
			return r(d, this._events, t, void 0, i), this
		};
		var d = function(t, e, i, n) {
				if (t) {
					var a = t[e],
						r = t.all;
					a && r && (r = r.slice()), a && p(a, n), r && p(r, [e].concat(n))
				}
				return t
			},
			p = function(t, e) {
				var i, n = -1,
					a = t.length,
					r = e[0],
					o = e[1],
					s = e[2];
				switch (e.length) {
					case 0:
						for (; ++n < a;)(i = t[n]).callback.call(i.ctx);
						return;
					case 1:
						for (; ++n < a;)(i = t[n]).callback.call(i.ctx, r);
						return;
					case 2:
						for (; ++n < a;)(i = t[n]).callback.call(i.ctx, r, o);
						return;
					case 3:
						for (; ++n < a;)(i = t[n]).callback.call(i.ctx, r, o, s);
						return;
					default:
						for (; ++n < a;)(i = t[n]).callback.apply(i.ctx, e);
						return
				}
			};
		n.bind = n.on, n.unbind = n.off, t.extend(e, n);
		var u = e.View = function(e) {
				this.cid = t.uniqueId("view"), e || (e = {}), t.extend(this, t.pick(e, f)), this._ensureElement(), this.initialize.apply(this, arguments)
			},
			h = /^(\S+)\s*(.*)$/,
			f = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events", "query", "ctrlName"];
		t.extend(u.prototype, n, {
			tagName: "div",
			$: function(t) {
				return this.$el.find(t)
			},
			initialize: function() {},
			render: function() {
				return this
			},
			remove: function() {
				return this._removeElement(), this.stopListening(), this
			},
			_removeElement: function() {
				this.$el.remove()
			},
			setElement: function(t) {
				return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
			},
			_setElement: function(t) {
				this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
			},
			delegateEvents: function(e) {
				if (!e && !(e = t.result(this, "events"))) return this;
				this.undelegateEvents();
				for (var i in e) {
					var n = e[i];
					if (t.isFunction(n) || (n = this[e[i]]), n) {
						var a = i.match(h),
							r = a[1].split("+");
						n = t.bind(n, this), r[1] && (n = t.throttle(n, r[1], {
							trailing: !1
						})), this.delegate(r[0], a[2], n)
					}
				}
				return this
			},
			delegate: function(t, e, i) {
				this.$el.on(t + ".delegateEvents" + this.cid, e, i)
			},
			undelegateEvents: function() {
				return this.$el && this.$el.off(".delegateEvents" + this.cid), this
			},
			undelegate: function(t, e, i) {
				this.$el.off(t + ".delegateEvents" + this.cid, e, i)
			},
			_createElement: function(t) {
				return document.createElement(t)
			},
			_ensureElement: function() {
				if (this.el) this.setElement(t.result(this, "el"));
				else {
					var e = t.extend({}, t.result(this, "attributes"));
					this.id && (e.id = t.result(this, "id")), this.className && (e["class"] = t.result(this, "className")), this.setElement(this._createElement(t.result(this, "tagName"))), this._setAttributes(e)
				}
			},
			_setAttributes: function(t) {
				this.$el.attr(t)
			}
		});
		var m = e.Router = function(t) {
				t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
			},
			g = /\((.*?)\)/g,
			v = /(\(\?)?:\w+/g,
			_ = /\*\w+/g,
			b = /[\-{}\[\]+?.,\\\^$|#\s]/g;
		t.extend(m.prototype, n, {
			initialize: function() {},
			route: function(i, n, a) {
				t.isRegExp(i) || (i = this._routeToRegExp(i)), t.isFunction(n) && (a = n, n = ""), a || (a = this[n]);
				var r = this;
				return e.history.route(i, function(t) {
					var o = r._extractParameters(i, t);
					r.execute(a, o, n) !== !1 && (r.trigger.apply(r, ["route:" + n].concat(o)), r.trigger("route", n, o), e.history.trigger("route", r, n, o))
				}), this
			},
			execute: function(t, e) {
				t && t.apply(this, e)
			},
			navigate: function(t, i) {
				return e.history.navigate(t, i), this
			},
			_bindRoutes: function() {
				if (this.routes) {
					this.routes = t.result(this, "routes");
					for (var e, i = t.keys(this.routes); null != (e = i.pop());) this.route(e, this.routes[e])
				}
			},
			_routeToRegExp: function(t) {
				return t = t.replace(b, "\\$&").replace(g, "(?:$1)?").replace(v, function(t, e) {
					return e ? t : "([^/?]+)"
				}).replace(_, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
			},
			_extractParameters: function(e, i) {
				var n = e.exec(i).slice(1);
				return t.map(n, function(t, e) {
					return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
				})
			}
		});
		var x = e.History = function() {
				this.handlers = [], t.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
			},
			y = /^[#\/]|\s+$/g,
			w = /^\/+|\/+$/g,
			k = /#.*$/;
		x.started = !1, t.extend(x.prototype, n, {
			interval: 50,
			atRoot: function() {
				var t = this.location.pathname.replace(/[^\/]$/, "$&/");
				return t === this.root && !this.getSearch()
			},
			matchRoot: function() {
				var t = this.decodeFragment(this.location.pathname),
					e = t.slice(0, this.root.length - 1) + "/";
				return e === this.root
			},
			decodeFragment: function(t) {
				return decodeURI(t.replace(/%25/g, "%2525"))
			},
			getSearch: function() {
				var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
				return t ? t[0] : ""
			},
			getHash: function(t) {
				var e = (t || this).location.href.match(/#(.*)$/);
				return e ? e[1] : ""
			},
			getPath: function() {
				var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
				return "/" === t.charAt(0) ? t.slice(1) : t
			},
			getFragment: function(t) {
				return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(y, "")
			},
			start: function(e) {
				if (x.started) throw new Error("Backbone.history has already been started");
				if (x.started = !0, this.options = t.extend({
					root: "/"
				}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(w, "/"), this._wantsHashChange && this._wantsPushState) {
					if (!this._hasPushState && !this.atRoot()) {
						var i = this.root.slice(0, -1) || "/";
						return this.location.replace(i + "#" + this.getPath()), !0
					}
					this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
						replace: !0
					})
				}
				if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
					var n = document.createElement("iframe");
					n.src = "javascript:0", n.style.display = "none", n.tabIndex = -1;
					var a = document.body;
					this.iframe = a.insertBefore(n, a.firstChild).contentWindow, this.iframe.document.open().close(), this.iframe.location.hash = "#" + this.fragment
				}
				var r = window.addEventListener || function(t, e) {
					return attachEvent("on" + t, e)
				};
				return this._usePushState ? r("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? r("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl()
			},
			stop: function() {
				var t = window.removeEventListener || function(t, e) {
					return detachEvent("on" + t, e)
				};
				this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe.frameElement), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), x.started = !1
			},
			route: function(t, e) {
				this.handlers.unshift({
					route: t,
					callback: e
				})
			},
			checkUrl: function() {
				var t = this.getFragment();
				return t === this.fragment && this.iframe && (t = this.getHash(this.iframe)), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
			},
			loadUrl: function(e) {
				return this.matchRoot() ? (e = this.fragment = this.getFragment(e), t.any(this.handlers, function(t) {
					return t.route.test(e) ? (t.callback(e), !0) : void 0
				})) : !1
			},
			navigate: function(t, e) {
				if (!x.started) return !1;
				e && e !== !0 || (e = {
					trigger: !!e
				}), t = this.getFragment(t || "");
				var i = this.root;
				("" === t || "?" === t.charAt(0)) && (i = i.slice(0, -1) || "/");
				var n = i + t;
				if (t = this.decodeFragment(t.replace(k, "")), this.fragment !== t) {
					if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
					else {
						if (!this._wantsHashChange) return this.location.assign(n);
						this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
					}
					return e.trigger ? this.loadUrl(t) : void 0
				}
			},
			_updateHash: function(t, e, i) {
				if (i) {
					var n = t.href.replace(/(javascript:|#).*$/, "");
					t.replace(n + "#" + e)
				} else t.hash = e
			}
		}), e.history = new x;
		var j = function(e, i) {
			var n, a = this;
			n = e && t.has(e, "constructor") ? e.constructor : function() {
				return a.apply(this, arguments)
			}, t.extend(n, a, i);
			var r = function() {
				this.constructor = n
			};
			return r.prototype = a.prototype, n.prototype = new r, e && t.extend(n.prototype, e), e.options && (n.prototype.options = $.extend(!0, {}, a.prototype.options, n.prototype.options)), n.__super__ = a.prototype, n
		};
		m.extend = u.extend = x.extend = j;
		return e
	}), define("UIAbstract", ["backbone"], function(t) {
		var e = t.View.extend({
			constructor: function(e) {
				this.options = $.extend(!0, {}, this.options, e), this.options.el && (this.el = this.options.el, delete this.options.el), this.options.events && (_.extend(this.events, this.options.events), delete this.options.events), this.pageView = "undefined" != typeof app && app.currentPage ? app.currentPage : _.extend({}, t.Events), this._ensureElement(), this._create(), this.options.appendElement && (this.$el.appendTo($(this.options.appendElement)), this.trigger("onShow"), this.options.appendElement === document.body && this.pageView.once("remove", this.remove, this))
			},
			delegateEvents: function(t) {
				t = _.result(this, "events"), this.undelegateEvents();
				var e = function(t, e) {
					var i = $(e.currentTarget);
					i[0].hasAttribute("data-ajax") ? i.hasClass("ajax-loading") || (app.ajax.target = i, t.call(this, e)) : t.call(this, e)
				};
				for (var i in t) {
					var n = t[i];
					if (_.isFunction(n) || (n = this[t[i]]), n) {
						var a = i.match(/^(\S+)\s*(.*)$/);
						n = _.bind(n, this.options.eventsCtx || this), this.delegate(a[1], a[2], _.bind(e, this, n))
					}
				}
				return this
			},
			options: {},
			events: {},
			option: function(t, e) {
				var i, n, a = {};
				if (0 === arguments.length) return this.options;
				if (_.isString(t))
					if (n = t.split("."), t = n.shift(), n.length) {
						i = a[t] = this.options[t] || {};
						for (var r = 0; r < n.length - 1; r++) i[n[r]] = i[n[r]] || {}, i = i[n[r]];
						if (t = n.pop(), _.isUndefined(e)) return i[t];
						i[t] = e
					} else {
						if (_.isUndefined(e)) return this.options[t];
						a[t] = e
					} else _.isObject(t) && (a = t);
				return this._setOptions(a), this
			},
			show: function() {
				this.$el.show(), this.trigger("onShow")
			},
			hide: function() {
				this.$el.hide(), this.trigger("onHide")
			},
			template: function(t, e) {
				return e = e || {}, _.isString(t) ? _.template(t)(e) : t(e)
			},
			_create: _.noop,
			_setOptions: _.noop
		});
		return e
	});
var _hmt = _hmt || [],
	config = {
		animateTime: 410,
		baseUrl: "webapp",
		assetRoot: "https://webresource01.lechebangstatic.com/webapp/",
		imgCdnRoot: "https://img01.lechebangstatic.com/webapp/",
		gateway: "https://m.lechebang.com/gateway/",
		env: "production",
		paymentReturnUrl: "https://m.lechebang.com/webapp/order/result",
		baiduKey: "ZRNVigKzbWK8H1Eb7P0xMnnj",
		routesList: ["index", "duijie/index", "services/index", "services/detail", "comment/detail", "services/join", "user/index", "user/info", "user/mobile_bind", "user/name_set", "user/nickname_set", "order/index", "book/edit", "order/result", "order/detail", "order/confirm", "order/cancel", "comment/index", "comment/again", "user/discount", "user/history", "user/feedback", "about/index", "about/statement", "about/introduce", "car/brand", "car/brandtwo", "car/brandthree", "car/info", "car/select", "car/maintenance", "help/index", "user/car", "car/car_edit", "user/maintenance", "user/addtrack", "user/set", "user/msg_send", "user/invite", "user/award", "user/award_detail", "user/bank_card_setup", "user/bank_card_setup_check", "user/bank_card_type_select", "user/invite_qrcode", "shop/list", "shop/calendar", "shop/detail", "shop/picture", "shop/map", "shop/navigation", "book/index", "book/driving", "book/discount", "login", "city/index", "city/checkin", "vin/scan", "vin/result", "vin/result_hm", "promotion/registerRed", "promotion/friend", "activity/index", "car/maintenanceManual"],
		version: "03231554",
		position1: {
			latitude: 31.309764,
			longitude: 120.644503
		},
		downloadurl: {
			ios: "https://appsto.re/cn/-Qgr7.i",
			android: "",
			weixin: "http://a.app.qq.com/o/simple.jsp?pkgname=lecar.android.view"
		},
		redpackShareUrl: "https://wechat.lechebang.com/index.php?r=redpack/tip&redpackCode=",
		importFile: ["spreadInfoCollect"],
		cps: {
			share: {
				showtitle: "乐车邦送你300元，爱车4S店保养随便花！",
				showcontent: "在乐车邦做汽车保养爽翻！一键查车况，2折做保养，4S店超体验。",
				thumb: "cps.png",
				thumburl: "https://img01.lechebangstatic.com/webapp/cps/cps.png",
				url: "https://wechat.lechebang.com/index.php?r=cps/index&qrcode=${code}"
			}
		},
		onLocalKey: ["car"],
		onSessionKey: ["webappeffectDate"],
		jsCdnRoot: "https://webresource01.lechebangstatic.com/"
	};
try {
	sessionStorage.setItem("__test__", "1")
} catch (e) {
	config.support.storage = !1
}
define("textUILoadingHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<span class=icon-loading><i class=icon-loading-circle></i></span><div class=loading-text>" + (null == (__t = text) ? "" : __t) + "</div>";
			return __p
		}
	}), define("UILoading", ["UIAbstract", "textUILoadingHtml"], function(t, e) {
		var i = t.extend({
			attributes: {
				"class": "pub-loading"
			},
			options: {
				text: ""
			},
			_setOptions: function(t) {
				for (var e in t) "text" == e && this.$(".loading-text").html(t[e])
			},
			_create: function() {
				var t = this.template(e, this.options),
					i = $('<div class="pub-overlay-loading"></div>');
				this.$el.html(t), this.on("onShow", function() {
					$("body").append(i)
				}).on("onHide", function() {
					i.remove()
				})
			}
		});
		return i
	}), define("textUIAlertHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div class="pub-overlay-alert js-bg"></div><section class="pub-modal pub-modal--alert"><div class=pub-modal-bd>', title && (__p += "<h3 class=pub-alert-title>" + (null == (__t = title) ? "" : __t) + "</h3>"), __p += "<div class=pub-mutil-lines ", 1 == btns.length && msgCenter && (__p += "style=text-align:center "), __p += ">" + (null == (__t = msg) ? "" : __t) + "</div></div><footer class=pub-actions>", _.each(btns, function(t, e) {
				__p += '<span class="pub-actions-btn js-action" data-index="' + (null == (__t = e) ? "" : __t) + '">' + (null == (__t = t.text) ? "" : __t) + "</span>"
			}), __p += "</footer></section>";
			return __p
		}
	}), define("UIAlert", ["UIAbstract", "textUIAlertHtml"], function(t, e) {
		var i = t.extend({
			options: {
				title: "",
				msg: "",
				msgCenter: !0,
				btns: [{
					text: "确定",
					callback: function() {
						this.hide()
					}
				}]
			},
			attributes: {
				"class": "pub-alert"
			},
			events: {
				"click .js-action": "btnAction"
			},
			_setOptions: function(t) {
				this.undelegateEvents(), this.options = $.extend(!0, {}, this.constructor.prototype.options, t), this.events = _.extend({}, this.constructor.prototype.events, this.options.events), t.btns && !t.btns.length && (this.options.btns = []);
				var i;
				"string" != typeof this.options.msg && (i = this.options.msg, this.options.msg = ""), t.onHide && this.once("onHide", t.onHide), t.onShow && this.once("onShow", t.onShow);
				var n = this.template(e, this.options);
				this.$el.html(n), i && this.$(".pub-mutil-lines").append(i), this.delegateEvents()
			},
			btnAction: function(t) {
				var e = $(t.currentTarget).data("index");
				this.options.btns[e].callback.call(this)
			}
		});
		return i
	}), define("textUIHintHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "<section><p ", "undefined" != typeof width && print(" style=width:" + width + "px;"), __p += ">" + (null == (__t = msg) ? "" : __t) + "</p></section>";
			return __p
		}
	}), define("UIHint", ["UIAbstract", "textUIHintHtml"], function(t, e) {
		var i = t.extend({
			options: {
				msg: "",
				timeout: 2e3
			},
			attributes: {
				"class": "pub-modal--hint"
			},
			_create: function() {
				this.on("onShow", function() {
					this.timer && clearTimeout(this.timer);
					var t = this;
					this.timer = setTimeout(function() {
						t.hide()
					}, this.options.timeout)
				})
			},
			_setOptions: function(t) {
				this.options = $.extend(!0, {}, this.constructor.prototype.options, t);
				var i = this.template(e, this.options);
				this.$el.html(i)
			}
		});
		return i
	}),
	function() {
		"use strict";

		function t(e, n) {
			function a(t, e) {
				return function() {
					return t.apply(e, arguments)
				}
			}
			var r;
			if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
				for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, l = 0, c = o.length; c > l; l++) s[o[l]] = a(s[o[l]], s);
				i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
					var a = Node.prototype.removeEventListener;
					"click" === t ? a.call(e, t, i.hijacked || i, n) : a.call(e, t, i, n)
				}, e.addEventListener = function(t, i, n) {
					var a = Node.prototype.addEventListener;
					"click" === t ? a.call(e, t, i.hijacked || (i.hijacked = function(t) {
						t.propagationStopped || i(t)
					}), n) : a.call(e, t, i, n)
				}), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function(t) {
					r(t)
				}, !1), e.onclick = null)
			}
		}
		var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
			i = navigator.userAgent.indexOf("Android") > 0 && !e,
			n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
			a = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
			r = n && /OS [6-7]_\d/.test(navigator.userAgent),
			o = navigator.userAgent.indexOf("BB10") > 0;
		t.prototype.needsClick = function(t) {
			switch (t.nodeName.toLowerCase()) {
				case "button":
				case "select":
				case "textarea":
					if (t.disabled) return !0;
					break;
				case "input":
					if (n && "file" === t.type || t.disabled) return !0;
					break;
				case "label":
				case "iframe":
				case "video":
					return !0
			}
			return /\bneedsclick\b/.test(t.className)
		}, t.prototype.needsFocus = function(t) {
			switch (t.nodeName.toLowerCase()) {
				case "textarea":
					return !0;
				case "select":
					return !i;
				case "input":
					switch (t.type) {
						case "button":
						case "checkbox":
						case "file":
						case "image":
						case "radio":
						case "submit":
							return !1
					}
					return !t.disabled && !t.readOnly;
				default:
					return /\bneedsfocus\b/.test(t.className)
			}
		}, t.prototype.sendClick = function(t, e) {
			var i, n;
			document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
		}, t.prototype.determineEventType = function(t) {
			return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
		}, t.prototype.focus = function(t) {
			var e;
			n && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
		}, t.prototype.updateScrollParent = function(t) {
			var e, i;
			if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
				i = t;
				do {
					if (i.scrollHeight > i.offsetHeight) {
						e = i, t.fastClickScrollParent = i;
						break
					}
					i = i.parentElement
				} while (i)
			}
			e && (e.fastClickLastScrollTop = e.scrollTop)
		}, t.prototype.getTargetElementFromEventTarget = function(t) {
			return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
		}, t.prototype.onTouchStart = function(t) {
			var e, i, r;
			if (t.targetTouches.length > 1) return !0;
			if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
				if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
				if (!a) {
					if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
					this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
				}
			}
			return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
		}, t.prototype.touchHasMoved = function(t) {
			var e = t.changedTouches[0],
				i = this.touchBoundary;
			return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i ? !0 : !1
		}, t.prototype.onTouchMove = function(t) {
			return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
		}, t.prototype.findControl = function(t) {
			return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
		}, t.prototype.onTouchEnd = function(t) {
			var e, o, s, l, c, d = this.targetElement;
			if (!this.trackingClick) return !0;
			if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
			if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
			if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (c = t.changedTouches[0], d = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || d, d.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = d.tagName.toLowerCase(), "label" === s) {
				if (e = this.findControl(d)) {
					if (this.focus(d), i) return !1;
					d = e
				}
			} else if (this.needsFocus(d)) return t.timeStamp - o > 100 || n && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(d), this.sendClick(d, t), n && "select" === s || (this.targetElement = null, t.preventDefault()), !1);
			return n && !a && (l = d.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(d) || (t.preventDefault(), this.sendClick(d, t)), !1)
		}, t.prototype.onTouchCancel = function() {
			this.trackingClick = !1, this.targetElement = null
		}, t.prototype.onMouse = function(t) {
			return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
		}, t.prototype.onClick = function(t) {
			var e;
			return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
		}, t.prototype.destroy = function() {
			var t = this.layer;
			i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
		}, t.notNeeded = function(t) {
			var e, n, a, r;
			if ("undefined" == typeof window.ontouchstart) return !0;
			if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
				if (!i) return !0;
				if (e = document.querySelector("meta[name=viewport]")) {
					if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
					if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
				}
			}
			if (o && (a = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), a[1] >= 10 && a[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
				if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
				if (document.documentElement.scrollWidth <= window.outerWidth) return !0
			}
			return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
		}, t.attach = function(e, i) {
			return new t(e, i)
		}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define("fastclick", [], function() {
			return t
		}) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
	}(), define("dateFormat", [], function() {
		"use strict";

		function t(t, e) {
			for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
			return t
		}

		function e(t) {
			var e = new Date(t.getFullYear(), t.getMonth(), t.getDate());
			e.setDate(e.getDate() - (e.getDay() + 6) % 7 + 3);
			var i = new Date(e.getFullYear(), 0, 4);
			i.setDate(i.getDate() - (i.getDay() + 6) % 7 + 3);
			var n = e.getTimezoneOffset() - i.getTimezoneOffset();
			e.setHours(e.getHours() - n);
			var a = (e - i) / 6048e5;
			return 1 + Math.floor(a)
		}

		function i(t) {
			var e = t.getDay();
			return 0 === e && (e = 7), e
		}

		function n(t) {
			return null === t ? "null" : void 0 === t ? "undefined" : "object" != typeof t ? typeof t : Array.isArray(t) ? "array" : {}.toString.call(t).slice(8, -1).toLowerCase()
		}
		var a = function() {
			var r = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWNC]|'[^']*'|'[^']*'/g,
				o = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
				s = /[^-+\dA-Z]/g;
			return function(l, c, d, p) {
				if (1 !== arguments.length || "string" !== n(l) || /\d/.test(l) || (c = l, l = void 0), l = l || new Date, l instanceof Date || (l = new Date(l)), isNaN(l)) throw TypeError("Invalid date");
				c = String(a.masks[c] || c || a.masks["default"]);
				var u = c.slice(0, 4);
				("UTC:" === u || "GMT:" === u) && (c = c.slice(4), d = !0, "GMT:" === u && (p = !0));
				var h = d ? "getUTC" : "get",
					f = l[h + "Date"](),
					m = l[h + "Day"](),
					g = l[h + "Month"](),
					v = l[h + "FullYear"](),
					_ = l[h + "Hours"](),
					b = l[h + "Minutes"](),
					x = l[h + "Seconds"](),
					y = l[h + "Milliseconds"](),
					w = d ? 0 : l.getTimezoneOffset(),
					k = e(l),
					j = i(l),
					I = {
						d: f,
						dd: t(f),
						ddd: a.i18n.dayNames[m],
						dddd: a.i18n.dayNames[m + 7],
						m: g + 1,
						mm: t(g + 1),
						mmm: a.i18n.monthNames[g],
						mmmm: a.i18n.monthNames[g + 12],
						yy: String(v).slice(2),
						yyyy: v,
						h: _ % 12 || 12,
						hh: t(_ % 12 || 12),
						H: _,
						HH: t(_),
						M: b,
						MM: t(b),
						s: x,
						ss: t(x),
						l: t(y, 3),
						L: t(Math.round(y / 10)),
						t: 12 > _ ? "a" : "p",
						tt: 12 > _ ? "am" : "pm",
						T: 12 > _ ? "A" : "P",
						TT: 12 > _ ? "AM" : "PM",
						Z: p ? "GMT" : d ? "UTC" : (String(l).match(o) || [""]).pop().replace(s, ""),
						o: (w > 0 ? "-" : "+") + t(100 * Math.floor(Math.abs(w) / 60) + Math.abs(w) % 60, 4),
						S: ["th", "st", "nd", "rd"][f % 10 > 3 ? 0 : (f % 100 - f % 10 != 10) * f % 10],
						W: k,
						N: j,
						C: ["日", "一", "二", "三", "四", "五", "六", "日"][j]
					};
				return c.replace(r, function(t) {
					return t in I ? I[t] : t.slice(1, t.length - 1)
				})
			}
		}();
		return a.masks = {
			"default": "ddd mmm dd yyyy HH:MM:ss",
			shortDate: "m/d/yy",
			mediumDate: "mmm d, yyyy",
			longDate: "mmmm d, yyyy",
			fullDate: "dddd, mmmm d, yyyy",
			shortTime: "h:MM TT",
			mediumTime: "h:MM:ss TT",
			longTime: "h:MM:ss TT Z",
			isoDate: "yyyy-mm-dd",
			isoTime: "HH:MM:ss",
			isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
			isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
			expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
		}, a.i18n = {
			dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		}, a
	}), define("appPrepare", ["UILoading", "UIAlert", "UIHint", "fastclick", "dateFormat"], function(t, e, i, n, a) {
		function r(r) {
			$.os.ios && $.os.lechebang && parseInt($.os.version, 10) >= 7 && $("body").addClass("fixHead"), r.dateFormat = a;
			var o = document.body;
			r._.load = new t({
				appendElement: o
			}), r._.load.hide(), r._alert = new e({
				appendElement: o
			}), r._alert.hide(), r._.hint = new i({
				appendElement: o
			}), r._.hint.hide(), n.attach(o)
		}
		return r
	}), define("dateUtil", [], function() {
		var t = {
			parseNumber: function(t) {
				return 10 > t ? "0" + t : t
			},
			isValidTime: function(t, e) {
				var i = parseInt(e[0], 10),
					n = parseInt(e[1], 10),
					a = _.find(t, function(t) {
						var e = t.startTime.split(":"),
							a = t.endTime.split(":"),
							r = parseInt(e[0], 10),
							o = parseInt(a[0], 10),
							s = parseInt(e[1], 10),
							l = parseInt(a[1], 10);
						return o > i && i > r ? !0 : r == i && n >= s && (o > i || l >= n) ? !0 : o == i && l >= n && (i > r || n >= s) ? !0 : !1
					});
				return a
			},
			compareTime: function(t, e) {
				t = t.split(":"), e = e.split(":");
				var i = parseInt(t[0], 10),
					n = parseInt(t[1], 10),
					a = parseInt(e[0], 10),
					r = parseInt(e[1], 10);
				return i == a && n == r ? 0 : i > a ? 1 : i == a && n > r ? 1 : 2
			},
			setExpires: function(t) {
				var e = t + "",
					i = 0;
				return e.replace(/(\d+)([DHMS])/g, function(t, e, n) {
					switch (e = parseInt(e, 10), n) {
						case "D":
							i += 24 * e * 3600;
							break;
						case "H":
							i += 3600 * e;
							break;
						case "M":
							i += 60 * e;
							break;
						case "S":
							i += e
					}
				}), t = i ? i : t, 1e3 * t
			},
			addMonth: function(t, e) {
				var i = new Date(t.getTime()),
					n = i.getMonth();
				return e = e || 1, i.setMonth(n + e), i
			},
			now: function() {
				var t = sessionStorage.getItem("lcb_time");
				return t ? (t = JSON.parse(t).value, t.server + Date.now() - t.client) : Date.now()
			},
			getActivityTime: function(t, e, i, n) {
				var a = new Date(t);
				return a.setHours(e || 0, i || 0, n || 0, 0)
			},
			getCurrentYear: function() {
				var e = new Date(t.now());
				return e.getFullYear()
			},
			isLeapYear: function(t) {
				if (t % 100 === 0) {
					if (t % 400 === 0) return !0
				} else if (t % 4 === 0) return !0;
				return !1
			},
			getDaysInMonth: function(t, e) {
				return [31, this.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
			}
		};
		return t
	}), define("events", ["backbone"], function(t) {
		var e = {};
		return _.extend(e, t.Events), e
	}), define("AbstractStorage", ["dateUtil", "events"], function(t, e) {
		function i(t) {
			var e = !1;
			if (t)
				if (t.code) switch (t.code) {
					case 22:
						e = !0;
						break;
					case 1014:
						"NS_ERROR_DOM_QUOTA_REACHED" === t.name && (e = !0)
				} else -2147024882 === t.number && (e = !0);
			return e
		}

		function n(t) {
			function e() {
				window.name = JSON.stringify({
					local: {},
					session: {}
				})
			}
			if (window.name) {
				try {
					var i = JSON.parse(window.name)
				} catch (a) {
					e()
				}
				i.local && i.session || e()
			} else e();
			this.store = JSON.parse(window.name)[t], n[t] = this.store
		}

		function a(t, e) {
			this.proxy = a.isSupport ? t : new n(e), this.length = t.length, this.type = e
		}
		_.extend(n.prototype, {
			getItem: function(t) {
				return this.store[t]
			},
			setItem: function(t, e) {
				this.store[t] = e, this._saveNameValue()
			},
			removeItem: function(t) {
				delete this.store[t], this._saveNameValue()
			},
			clear: function() {
				this.store = {}, this._saveNameValue()
			},
			_saveNameValue: function() {
				var t = {
					session: n.session,
					local: n.local
				};
				window.name = JSON.stringify(t)
			}
		}), a.isSupport = !0;
		try {
			sessionStorage.setItem("private_test", 1)
		} catch (r) {
			a.isSupport = !1
		}
		return a.prototype.get = function(t, e) {
			return e = e || config.baseUrl, this._get(e + t)
		}, a.prototype._get = function(t) {
			var e = this.proxy.getItem(t);
			if (e) {
				if (e = JSON.parse(e)) {
					if (e.expires) {
						var i = Date.now() - e.timestamp;
						if (i > e.expires || 0 > i) return this.proxy.removeItem(t), null
					}
					return e.value
				}
				return null
			}
			return null
		}, a.prototype._set = function(e, n, a, r) {
			function o() {
				try {
					l.proxy.setItem(c, JSON.stringify(s))
				} catch (t) {
					i(t) && l.cleanup()
				}
			}
			var s = {
				value: n
			};
			a && (s.expires = t.setExpires(a), s.timestamp = Date.now());
			var l = this,
				c = r ? r : e;
			if (this.isTrigger(c)) {
				var d = this.proxy.getItem(c);
				o(), d ? (d = JSON.parse(d), d && d.value && _.isEqual(d.value, n) || this.trigger(c)) : this.trigger(c)
			} else o()
		}, a.prototype.isTrigger = function(t) {
			var e;
			return "local" == this.type ? e = "onLocalKey" : "session" == this.type && (e = "onSessionKey"), config[e] && -1 !== config[e].indexOf(t)
		}, a.prototype.trigger = function(t) {
			var i = this.type + ":" + t;
			e.trigger(i)
		}, a.prototype.set = function(t, e, i) {
			var n = config.baseUrl + t;
			this._set(t, e, i, n)
		}, a.prototype.remove = function(t) {
			t = config.baseUrl + t, this.proxy.removeItem(t)
		}, a.prototype._remove = function(t) {
			this.proxy.removeItem(t)
		}, a.prototype.clear = function() {
			var t = this._get("config");
			this.proxy.clear(), t && this._set("config", t)
		}, a.prototype.cleanup = function() {
			for (var t in this.getForObject()) - 1 != t.indexOf("/") && this.proxy.removeItem(t)
		}, a.prototype._clearExpires = function() {
			var t = new RegExp("^" + config.baseUrl);
			for (var e in this.getForObject()) t.test(e) && null == this._get(e) && this.proxy.removeItem(e)
		}, a.prototype.cleanAjax = function(t) {
			_.isString(t) && (t = [t]);
			for (var e in this.getForObject())
				for (var i = t.length; i--;)
					if (-1 != e.indexOf(t[i])) {
						this.proxy.removeItem(e);
						break
					}
		}, a.prototype.getForObject = function() {
			return this.proxy instanceof n ? this.proxy.store : this.proxy
		}, a
	}), define("local", ["AbstractStorage"], function(t) {
		var e = new t(localStorage, "local");
		return e._clearExpires(), e
	}), define("session", ["AbstractStorage"], function(t) {
		var e = new t(sessionStorage, "session");
		return e
	}), define("cookie", [], function() {
		function t() {
			var t = location.hostname.split(".");
			return t.length > 1 ? /^\d+$/.test(t[0]) ? t.join(".") : "." + t[t.length - 2] + "." + t[t.length - 1] : t[0]
		}
		var e = {
			getItem: function(t) {
				return t ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
			},
			setItem: function(t, e, i, n, a, r) {
				if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t)) return !1;
				var o = "";
				if (i) switch (i.constructor) {
					case Number:
						o = 1 / 0 === i ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + i;
						break;
					case String:
						o = "; expires=" + i;
						break;
					case Date:
						o = "; expires=" + i.toUTCString()
				}
				return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + o + (a ? "; domain=" + a : "") + (n ? "; path=" + n : "") + (r ? "; secure" : ""), !0
			},
			removeItem: function(t, e, i) {
				return this.hasItem(t) ? (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (i ? "; domain=" + i : "") + (e ? "; path=" + e : ""), !0) : !1
			},
			hasItem: function(t) {
				return t ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie) : !1
			},
			keys: function() {
				for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = t.length, i = 0; e > i; i++) t[i] = decodeURIComponent(t[i]);
				return t
			}
		};
		return e.domain = t(), e
	}), define("util", [], function() {
		var t = {
			compareVersion: function(t, e, i) {
				t = t.split("."), i = i.split(".");
				for (var n, a, r = Math.max(t.length, i.length), o = 0, s = 0; r > s && !o; s++) n = parseInt(t[s], 10) || 0, a = parseInt(i[s], 10) || 0, a > n ? o = 1 : n > a && (o = -1);
				switch (e) {
					case ">":
						return -1 === o;
					case ">=":
						return 0 === o || -1 == o;
					case "<":
						return 1 === o;
					case "<=":
						return 0 === o || 1 == o;
					case "==":
						return 0 === o;
					case "!=":
						return 0 !== o
				}
			},
			getQuery: function(t) {
				for (var e, i, n, a = {}, r = /([^&=?]+)=([^&]+)/g; e = r.exec(t);) i = e[1], n = e[2], a[i] = $.zepto.deserializeValue(decodeURIComponent(n));
				return a
			},
			appendQuery: function(t, e, i) {
				var n = e;
				return "string" == typeof n && (n = {}, n[e] = i), n = $.param(n), t += -1 == t.indexOf("?") ? "?" + n : "&" + n
			},
			locationReplace: function(t) {
				var e = this.getQuery(location.search),
					i = location.protocol + "//" + location.host + location.pathname;
				if (t) {
					var n = {};
					for (var a in e) - 1 == t.indexOf(a) && (n[a] = e[a]);
					i += "?" + $.param(n)
				}
				return history && history.pushState ? (history.replaceState({}, document.title, i), !0) : (location.href = i, !1)
			}
		};
		return t
	}), define("user", ["local", "session", "cookie", "events", "util"], function(t, e, i, n, a) {
		function r() {
			app.clearPageView(), l.isLogin = !1;
			var n = t._get("lcb_location");
			t.clear(), e.cleanup(), i.removeItem("token", "/", i.domain), t._set("lcb_location", n)
		}

		function o(a) {
			app.clearPageView(), l.isLogin = !0, a.oauthUser || (a.oauthUser = {}), a.userInfo || (a.userInfo = {}), e.cleanup(), t._set("lcb_user_info", a), i.setItem("token", a.token, 1 / 0, "/", i.domain), n.trigger("user_login")
		}

		function s(e, i) {
			function n() {
				var t = ["lcb_from"];
				if (i.lcb_length) {
					var n = i.lcb_length - history.length;
					if (0 > n) return void history.go(n);
					t.push("lcb_length")
				}
				a.locationReplace(t) && e()
			}
			if ("login" == i.lcb_from) {
				var r = t._get("car");
				r ? (r.brandTypeId && (r.isDefault = 1), app.ajax({
					url: "mycar/saveMyCar",
					data: r,
					success: function(e) {
						_.extend(r, e), t._set("car", r), n()
					}
				})) : n()
			} else e()
		}
		var l = {
			isLogin: !1,
			cookieLogin: function(e) {
				var n = t._get("lcb_user_info"),
					r = a.getQuery(location.search);
				if (n && n.token) return l.isLogin = !0, void s(e, r);
				var c = i.getItem("token");
				if (!c) return void e();
				var d = {
					url: config.gateway + "user/currentUser",
					type: "post",
					data: JSON.stringify({
						token: c,
						appCode: config.appCode
					}),
					success: function(t) {
						200 == t.statusCode ? (t.result.token = c, t.result["new"] = !1, o(t.result), s(e, r)) : i.removeItem("token", "/", i.domain)
					}
				};
				$.ajax(d)
			},
			logout: function(t) {
				app.ajax({
					url: "user/logout"
				}), r(), app.goBack(t || "")
			},
			setUser: o,
			getUserInfo: function() {
				return t._get("lcb_user_info")
			},
			setUserInfo: function(e) {
				var i = this.getUserInfo(),
					n = $.extend(!0, i, e);
				t._set("lcb_user_info", n)
			},
			isNewUser: function() {
				var t = this.getUserInfo();
				return t["new"]
			},
			logoutAction: function() {
				l.logoutAction = _.noop, r(), location.href = location.href
			}
		};
		return l
	}), define("log", ["session"], function(t) {
		var e = {
			onerror: function(t, i, n) {
				var a = " 错误信息:" + t + "\n";
				return a += " 错误地址:" + i + "\n", a += " 错误行数:" + n + "\n", e.reportError({
					appErrMsg: a,
					tag: "jsError"
				}), !0
			},
			reportError: function(e) {
				var i = require("user").getUserInfo(),
					n = "";
				i && i.user && (n = i.user.mobile);
				var a = t._get("lcb_soa_log") || [],
					r = {
						deviceInfo: navigator.userAgent,
						pageUrl: location.href,
						token: n,
						happenTime: Date.now(),
						source: config.version
					};
				_.isArray(e) ? _.each(e, function() {
					a.push($.extend({}, r, e))
				}) : a.push(_.extend(r, e)), t._set("lcb_soa_log", a)
			},
			ajaxError: function(t, e, i) {
				if (t.log) {
					var n = {
						requestUrl: t.url,
						request: t.data,
						statusCode: e.statusCode,
						msg: e.msg,
						response: JSON.stringify(e.result).slice(0, 1e3),
						tag: "ajax"
					};
					i && (n.spendTime = Date.now() - i), this.reportError(n)
				}
			},
			sendLog: function() {
				var e = t._get("lcb_soa_log");
				e && $.ajax({
					url: config.gateway + "log/soaError",
					type: "post",
					data: JSON.stringify({
						appCode: config.appCode,
						batchLogs: e
					}),
					success: function() {
						t._remove("lcb_soa_log")
					}
				})
			}
		};
		return config.env && ($.browser.ie && parseInt($.browser.version, 10) <= 9 || "production" == config.env && (window.onerror = e.onerror), setInterval(e.sendLog, 1e4)), e
	}), define("lHistory", ["session"], function(t) {
		function e() {
			t._set("lcb_paths", n)
		}

		function i() {
			return location.pathname + location.search
		}
		var n = t._get("lcb_paths") || [],
			a = {
				init: function() {
					var t = i(),
						e = a.last();
					t !== e && a.push()
				},
				push: function(t) {
					"undefined" == typeof t && (t = i()), n.push(t), e()
				},
				pop: function(t) {
					_.isNumber(t) ? n.splice(-t) : n.pop(), e()
				},
				last: function() {
					return n[n.length - 1]
				},
				isSelf: function() {
					return 0 == this.last().indexOf("/" + config.baseUrl)
				},
				clear: function() {
					for (var t = n.length; t-- && (item = n[t], 0 === item.indexOf("/" + config.baseUrl));) n.pop();
					e()
				}
			};
		return a
	}), define("app", ["backbone", "appPrepare", "user", "local", "session", "log", "util", "lHistory", "events"], function(t, e, i, n, a, r, o, s, l) {
		var c = {
				forward: !0,
				removeDisabled: function() {
					var t = d.ajax.target;
					t && (d.ajax.target = null, t.removeClass("ajax-loading").removeAttr("lcb-stop"))
				},
				skipPage: function(t, e) {
					function i() {
						d.currentPage && d.currentPage.undelegateEvents()
					}
					101 == config.appCode ? $.os.ios ? (i(), window.addEventListener("pageshow", function(t) {
						t.persisted && $.os.ios && c.backCacheBug()
					})) : this.backCacheBugTimer = setInterval(this.backCacheBug, 1e3) : i(), e ? (s.pop(), location.replace(t)) : location.href = t
				},
				backCacheBug: function() {
					clearInterval(c.backCacheBugTimer), location.href = location.href
				},
				navigateOpts: {},
				pageViews: {},
				_hideModal: function() {
					d.hideLoading(), d._alert.hide()
				},
				getLoginTo: function(e) {
					return 0 === e.indexOf("/") ? e : t.history.root + e
				}
			},
			d = {
				_: {
					start: function() {
						c.appStarted || (s.init(), c.appStarted = !0, l.trigger("bootstrap"), new p, t.history.start({
							root: config.baseUrl,
							pushState: !0
						}), $("#js-fake").remove(), require(["geolocation"], function(t) {
							t.startPosition(_.noop, _.noop)
						}))
					},
					interval: {},
					clearInterval: function(t, e) {
						var i = d._.interval[t];
						i && (_.each(i, function(t) {
							clearInterval(t.timer)
						}), e && delete d._.interval[t])
					},
					replace: function(e) {
						var i;
						i = _.isString(e) ? e : e.ctrlName + "?" + $.param(e.query), t.history.navigate(i, {
							trigger: !1,
							replace: !0
						}), s.pop(), s.push()
					},
					pageViews: {},
					pageViewScrollTop: {}
				},
				forward: null,
				goTo: function(e, n) {
					if (n = _.extend({
						trigger: !0,
						replace: !1,
						animate: !0,
						newWebview: !0
					}, n), -1 != e.indexOf("//")) return void(d.nativeApi.has("navigateBar.show") && n.newWebview ? (d.hideLoading(), wvjb.callHandler("navigateBar.show", {
						left: [{
							type: "back",
							returnUrl: location.href
						}],
						requestUrl: e
					}, _.noop)) : n.replace ? c.skipPage(e, !0) : c.skipPage(e));
					if (0 == e.indexOf("/webapp/login") && ($.os.weixin || $.os.lechebang) && (e = e.replace("/webapp/", "")), 0 == e.indexOf("/")) return void c.skipPage(e, n.replace);
					if (0 == e.indexOf("login")) {
						if (d.nativeApi.has("app.login")) return void wvjb.callHandler("app.login", {}, function(t) {
							if ("success" == t.state) {
								i.setUser(t.data.result);
								var a, r = o.getQuery(e);
								a = r.to ? o.appendQuery(c.getLoginTo(r.to), "lcb_from", "login") : o.appendQuery(location.href, "lcb_from", "login"), c.skipPage(a, !0)
							} else n.replace && d.goBack()
						});
						if ($.os.weixin) {
							var a = "http://wechat.lechebang.cn/login/index?return_url=";
							return /lechebang\.com/.test(config.gateway) && (a = a.replace("cn", "com")), a += encodeURIComponent(o.appendQuery(location.href, {
								lcb_from: "login",
								lcb_length: history.length
							})), void c.skipPage(a)
						}
					}
					n.trigger && (c.forward = !0), c.navigateOpts = n, n.replace && s.pop(), t.history.navigate(e, n), s.push()
				},
				goBack: function(e, i) {
					if (_.isNumber(e)) return s.pop(e), void history.go(-e);
					if (i = _.extend({
						trigger: !0,
						replace: !0,
						cache: !0,
						animate: !0
					}, i), c.forward = !1, c.navigateOpts = i, _.isUndefined(e))
						if (s.pop(), s.last()) history.back();
						else {
							var n = d.currentPage.options.master;
							n ? (t.history.navigate(n, i), s.push()) : location.href = "/webapp/"
						} else /^(http|\/)/.test(e) ? (s.clear(), location.replace(e)) : (s.pop(), t.history.navigate(e, i), s.push())
				},
				alert: function(t) {
					_.isString(t) && (t = {
						msg: t
					}), this._alert.option(t), this._alert.show()
				},
				hint: function(t) {
					_.isString(t) && (t = {
						msg: t
					}), this._.hint.option(t), this._.hint.show()
				},
				reload: function(t) {
					var e = a.get(t.ctrlName);
					if (e && (_.extend(t.query, e), a.remove(t.ctrlName)), t.ajax) {
						var i = t.ajax();
						if (_.isArray(i)) {
							var n = 0,
								r = [];
							_.each(i, function(e, a) {
								e.success = function(e) {
									r[a] = e, ++n >= i.length && (c._hideModal(), t.onShow.apply(t, r))
								}, e.error = function(e) {
									r[a] = {}, e && e.msg && d.hint(e.msg), ++n >= i.length && (c._hideModal(), t.onShow.apply(t, r))
								}, d.ajax(e)
							})
						} else i ? (i.success = function(e) {
							c._hideModal(), t.onShow(e)
						}, i.error = function(e) {
							c._hideModal(), e && e.msg && d.hint(e.msg), t.onShow({})
						}, d.ajax(i)) : (c._hideModal(), t.onShow())
					} else c._hideModal(), t.onShow()
				},
				showLoading: function(t) {
					d._.load.timer && clearTimeout(d._.load.timer), "number" == typeof t && (t = {
						timeout: t
					}), t = _.extend({
						text: ""
					}, t), t.timeout ? d._.load.timer = setTimeout(function() {
						d._.load.show()
					}, t.timeout) : (d._.load.option(t), d._.load.show())
				},
				hideLoading: function() {
					clearTimeout(d._.load.timer), this._.load.hide()
				},
				ajax: function(t) {
					var e, o = Date.now(),
						s = t.session ? a : t.local ? n : !1,
						p = _.pick(t, "log", "data");
					if (p.data ? s && (e = t.url + JSON.stringify(t.data)) : (p.data = {}, s && (e = t.url)), e) {
						var u = s.get(e);
						if ("undefined" != typeof u && null != u) return t.success && t.success(u), void(t.complete && t.complete())
					}
					var h = i.getUserInfo();
					h && (p.data.token = h.token), p.data.appCode = config.appCode, p.type = "post", p.url = config.gateway + t.url, p.data = JSON.stringify(p.data), p.timeout = 1e4, p.success = function(n, a, u) {
						r.ajaxError(p, n, o), 200 == n.statusCode ? (l.trigger("ajax:" + t.url), t.success && t.success(n.result, a, u, p.data), e && "undefined" != typeof n.result && s.set(e, n.result, t.expires)) : (d.hideLoading(), 904 == n.statusCode ? i.logoutAction() : t.error ? t.error(n) : d.alert(n.msg)), c.removeDisabled()
					}, p.error = function() {
						d.hideLoading(), t.error ? t.error() : d.alert("网络出错，请稍后再试"), c.removeDisabled()
					};
					var f = d.ajax.target;
					return f && (0 !== f.data("ajax") && f.addClass("ajax-loading"), f.attr("lcb-stop", 1)), $.ajax(p)
				},
				start: function() {
					function t() {
						i.cookieLogin(d._.start)
					}
					e(d);
					var n = "1.3.0";
					$.os.lechebang && $.os.android && o.compareVersion($.os.nativeVersion, ">=", "1.3.0") && (n = "1.3.1"), !$.os.nativeVersion || o.compareVersion($.os.nativeVersion, "<", n) ? t() : window.app.nativeApi.startApp(t), a._get("lcb_time") || d.ajax({
						url: "place/getServerTime",
						success: function(t) {
							a._set("lcb_time", {
								server: t,
								client: Date.now()
							})
						}
					})
				},
				setInterval: function(t, e) {
					var i = d.currentPage.ctrlName,
						n = setInterval(t, e);
					return d._.interval[i] || (d._.interval[i] = []), d._.interval[i].push({
						timer: n,
						fn: t,
						time: e
					}), n
				},
				clearPageView: function(t) {
					t ? (_.isString(t) && (t = [t]), _.each(t, function(t) {
						delete d._.pageViews[t]
					})) : d._.pageViews = {}
				},
				is: function(t) {
					return "test" === t ? 0 === config.env.indexOf("test") : config.env === t
				}
			};
		d.goBack.noCache = function() {
			d.goBack(void 0, {
				cache: !1
			})
		}, d._.canAnimate = !($.os.android && /M(X\d+|0\d{2})\s+/.test(navigator.userAgent)), d.nativeApi = {
			has: function(t) {
				return "share.weixin" == t && $.os.android && $.os.nativeVersion && o.compareVersion($.os.nativeVersion, ">=", "1.2") ? !0 : window.wvjb && wvjb.info && wvjb.info[t]
			},
			payment: function(t) {
				t.payAmount > 0 ? d.nativeApi.has("payment.select") ? wvjb.callHandler("payment.select", {
					paymentToken: t.paymentToken,
					userToken: i.getUserInfo().token,
					host: t.paymentUrl.match(/(^.+\/\/[^\/]+)\//)[1],
					amount: t.payAmount,
					itemName: t.itemName,
					returnUrl: t.returnUrl
				}, _.noop) : d.goTo(t.paymentUrl, {
					newWebview: !1
				}) : d.goTo("order/result?" + $.param({
					amount: 0,
					itemName: t.itemName,
					status: 1,
					orderId: t.orderId
				}))
			}
		}, Object.defineProperty && Object.defineProperty(d, "referrer", {
			get: function() {
				return a._get("lcb_referrer")
			},
			set: function(t) {
				a._set("lcb_referrer", t)
			}
		});
		var p = t.Router.extend({
			initialize: function() {
				this.main = $("#main"), this.firstLoad = !0, this.route("*path", "ctrlAction")
			},
			ctrlAction: function() {
				var e, i, n = t.history.fragment,
					a = n.indexOf("?"),
					r = this; - 1 === a ? (i = n, e = "") : (i = n.slice(0, a), e = n.slice(a + 1)), "d" !== i && i || (i = "index");
				var s = "controller/" + i;
				e = o.getQuery(e), config.env || (s = config.assetRoot + "controller/" + i + ".js"), -1 != config.routesList.indexOf(i) ? (d.showLoading(300), require([s], function(t) {
					r.loadCtrl(t, i, e)
				})) : d.goBack("")
			},
			loadCtrl: function(t, e, n) {
				var a = t.prototype.options,
					r = !1;
				if (d.currentPage && (d.referrer = d.currentPage.ctrlName, d.prevPage = d.currentPage, "boolean" != typeof c.forward && (r = !0, c.forward = $.os.lechebang || $.os.weixin ? !1 : this.isForward(d.currentPage.ctrlName, e), c.forward || (c.navigateOpts.cache = !0))), a.redirectCtrl) {
					var o = a.redirectCtrl(i.isLogin, n, c.forward);
					if ("undefined" != typeof o) return d.nativeApi.has("app.login") && 0 == o.indexOf("login") && (d.currentPage = new t.__super__.constructor({
						ctrlName: e
					})), void d.goTo(o, {
						replace: !0
					})
				}
				return d.currentPage && (d._.clearInterval(d.currentPage.ctrlName), d.currentPage.undelegateEvents()), this.firstLoad ? void this.viewRender(t, n, e) : (c.navigateOpts.cache && d._.pageViews[e] ? this.viewCacheRender(d._.pageViews[e]) : this.viewRender(t, n, e), r && (c.navigateOpts.replace && s.pop(), c.forward ? s.push() : s.pop()), d.nativeApi.has("webview.url") && wvjb.callHandler("webview.url", {
					currentUrl: location.href
				}, _.noop), window._hmt.push(["_trackPageview", location.pathname]), this.animatePages(c.forward ? "to-left" : "to-right"), c.forward = null, void(c.navigateOpts = {}))
			},
			viewRender: function(t, e, i) {
				var n = new t({
					query: e,
					ctrlName: i
				});
				d._.clearInterval(i, !0), this.main.append(n.el), d.reload(n), this.firstLoad && (this.firstLoad = !1, n.delegateEvents()), n.options.goBackWithCache && (d._.pageViews[i] = n)
			},
			viewCacheRender: function(t) {
				c._hideModal(), t._cacheShow(), t.$el.removeClass("page-from-center-to-left"), this.main.append(t.el)
			},
			viewError: function() {
				null !== c.forward && d.prevPage._pageRemove()
			},
			isForward: function(t, e) {
				var i = config.routesList.indexOf(t),
					n = config.routesList.indexOf(e);
				return n > i
			},
			animatePages: function(t) {
				"to-left" === t && (c.navigateOpts.animate && d._.canAnimate ? (d.currentPage._pageShow(!0, !0), d.prevPage._pageRemove(!0, !0)) : (d.currentPage._pageShow(), d.prevPage._pageRemove())), "to-right" === t && (c.navigateOpts.animate && d._.canAnimate ? (d.currentPage._pageShow(!0), d.prevPage._pageRemove(!0)) : (d.currentPage._pageShow(), d.prevPage._pageRemove()))
			}
		});
		return d
	}), define("textindexHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				__p += "<style>.dl_panel{height:44px;background-color:rgba(255,255,255,0.9);padding:5px 0}.dl_panel .dl_btn-close{position:absolute;top:0;left:0;color:#666;width:24px;padding-top:10px;line-height:24px;text-align:center}.dl_panel .dl_cnt{margin:3px 0 0 26px;font-size:13px;color:#333}.dl_cnt .dl_ico-logo{float:left;margin-right:6px;border:1px solid #b1acab;border-radius:5px}.dl_ico-logo{width:34px;height:34px;background-size:auto 33px;background-repeat:no-repeat}.dl_cnt .dl_txt-bg{margin-left:2px;font-size:21px}.dl_btn-download{position:absolute;right:10px;top:12px;width:62px;height:31px;line-height:30px;background-color:#fff;border:1px solid #ff7d13;border-radius:4px;text-align:center;color:#fff;padding-right:1px;margin-right:2px;vertical-align:-2px;color:#ff7d13}.dl_btn-download .dl_ico-download{display:inline-block;width:18px;height:18px;background-size:auto 33px;background-repeat:no-repeat;background-position:-40px -7px;vertical-align:middle}.pub-slide{width:100%;position:relative;overflow:hidden}.in-module-bg{width:.65rem;height:.65rem;border-radius:.5rem;margin:0 auto}.in-text-top{margin-top:.07rem;font-size:0.15rem}.in-addr .iconfont{position:relative;top:-1px}.swipe-item{float:left;height:100%}.swipe-navs{position:absolute;left:50%;bottom:0.05rem;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.swipe-nav-item.active{background:#ff826d}.swipe-nav-item{display:inline-block;height:.08rem;width:.08rem;border-radius:.08rem;background:#eaeaea;margin-right:.1rem}.header-inner{background-color:#fff}.pub-slide--full-img img{width:100%;height:100%}.email-box{color:#8f8f8f;position:relative}.email-prompt{background-color:#ff5a3a;border-radius:0.07rem;width:0.07rem;height:0.07rem;position:absolute;top:5px;right:1px}.index-menu{background-color:#fff;height:1.18rem;padding:.01rem 0;color:#666;margin:0 auto;border-bottom:1px solid #ececec;overflow:hidden}.pading-menu{background-color:#f1f1f1;height:0.11rem;border-bottom:1px solid #ececec}.notice{background-color:#fffae5;color:#fd7a17;padding:0.04rem 0.08rem 0.08rem;font-size:0.14rem;position:relative}.notice-tb{font-size:0.18rem;padding-right:0.05rem}.notice-closed{font-size:0.14rem;color:#999;margin-right:0.06rem;margin-top:0.03rem;position:absolute;right:0.14rem;top:0.05rem}.notice-inf{width:85%;height:0.24rem;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.car-bg{background-color:#fff;padding:0rem 0 0.15rem}.car-left{display:inline-block}.car-add{color:#666;border-bottom:1px solid #ececec;padding:0.08rem 0rem 0.08rem 0.12rem;line-height:0.31rem;font-size:.14rem;margin-bottom:.06rem}.search-car{height:0.31rem;float:right;width:0.95rem;display:inline-block;text-align:center}.car-inf{float:Left;width:33.33%;margin:0 auto}.one-car{width:0.53rem;height:0.9rem;margin:0 auto}.car-brand{width:0.52rem;height:0.52rem;border:1px solid #e6f6f4;border-radius:0.5rem;padding:0.03rem}.car-price{color:#fd7a17;text-align:center;font-size:0.16rem}.more-inf{color:#999;text-align:right;padding-right:0.25rem}.my-car{padding-left:.15rem;height:0.52rem;line-height:.52rem;border-bottom:1px solid #dedede;font-size:0.14rem;color:#666;clear:both}.my-car-brand{width:0.4rem;height:.52rem;float:left}.my-car-name{line-height:0.52rem;width:2.6rem;float:left;overflow:hidden;height:.52rem}.my-car-run{width:0.3rem;line-height:0.52rem;float:right;text-align:center;padding-right:.12rem}.bottom-box{background:#fff;padding:.08rem 0}.hline-item{color:#888;font-size:0.14rem}.hline-item,.hline-price{float:left;width:1.25rem;text-align:center}.hline-price-ori{font-size:.18rem;text-decoration:line-through;color:#b4b4b3;display:block;height:0.18rem}.hline-price-sec{font-size:0.16rem;text-decoration:line-through;color:#b4b4b3;display:block;padding:.05rem 0}.hline-item{color:#888;font-size:0.14rem;line-height:0.16rem}.hline-price-rel{font-size:.16rem;color:#c1c1c1;display:block;font-weight:600}.miles-num{padding:.2rem 0 .3rem}.hline-item.active .miles-num{color:#333;font-size:.16rem}.hline-item.third .hline-price .hline-price-rel{font-size:.16rem;color:#fd8e3a;display:block;font-weight:600}.hline-item.active .hline-price .hline-price-rel{color:#fd7a17;display:block;font-weight:600;font-size:0.21rem;height:0.18rem}.gray-info{color:#888;text-align:center;font-size:.14rem}.in-nav-enter{text-align:center;padding-top:.15rem}.font-menu-maintain{font-size:0.36rem;color:#fff;line-height:0.63rem;text-shadow:1px 1px 1px #fe7742}.font-menu-fix{font-size:0.52rem;color:#fff;line-height:0.59rem;text-shadow:1px 1px 1px #fdc25a}.font-menu-tech{font-size:0.37rem;color:#fff;line-height:0.62rem;text-shadow:1px 1px 1px #68a0eb}.font-menu-record{font-size:0.34rem;color:#fff;line-height:0.68rem;text-shadow:1px 1px 1px #4bcfd3}.font-menu-ins{font-size:0.49rem;color:#fff;line-height:0.66rem;text-shadow:1px 1px 1px #a77bdf}.car-icon{font-size:0.25rem;color:#b4b4b3;padding:.05rem 0}.header-inner{border-bottom:none;box-shadow:1px 1px 0 #efeff4}.taocan-btn{color:#fff;font-size:.16rem;background:#ff826d;border-radius:.2rem;border:none;padding:.03rem .08rem .04rem .15rem}.p-relative{position:relative}.red-point{width:6px;background-color:#ff5d37;height:6px;position:absolute;top:50%;right:0.07rem;transform:translateY(-50%);display:none;border-radius:6px}</style>";
				var isOpenAccident = -1 != ["北京", "上海", "成都"].indexOf(city);
				__p += "\n\n\n";
				var ua = navigator.userAgent,
					found = _.find(["CtripWireless", "lecar", "XMBrowser", "DazeClient"], function(t) {
						return -1 != ua.indexOf(t)
					});
				if (__p += "\n", !found && !isSpread) {
					if (__p += "\n", !appConfig || 1 != appConfig.clickDownload) {
						var href;
						href = $.os.weixin ? "http://a.app.qq.com/o/simple.jsp?pkgname=lecar.android.view" : $.os.ios ? "https://appsto.re/cn/-Qgr7.i" : "https://webresource01.lechebangstatic.com/download/lechebang.apk", __p += '<div class="page-top dl_panel js-download"><a id=popup_5_close class="dl_btn-close js-close">&times;</a><div class="dl_cnt js-close"><i class=dl_ico-logo style="background-image:url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + 'down.png)"></i><p>下载乐车邦APP</p><p class=dl_txt-i>登录注册即获300元大礼包</p></div><a id=popup_5_down class=dl_btn-download href="' + (null == (__t = href) ? "" : __t) + '"><i class="dl_ico-download iconfont" style=font-size:0.17rem;padding-bottom:0.17rem;padding-right:0.02rem>&#xe65c;</i>下载</a></div>'
					}
					__p += "\n"
				}
				__p += '<div class=page-content><div class="pub-slide pub-slide--full-img js-slideshow" style=height:1.53rem><div class=swipe-wrapper style=width:200000px>', _.each(imgs, function(t) {
					__p += '<div class=swipe-item style="width:' + (null == (__t = t.width) ? "" : __t) + ';"><img src="' + (null == (__t = t.src) ? "" : __t) + '" alt="' + (null == (__t = t.alt) ? "" : __t) + '" data-target-url="' + (null == (__t = t.js_url) ? "" : __t) + '" class=js-url></div>'
				}), __p += "</div><div class=swipe-navs>";
				for (var i = 0; i < imgs.length; i++) __p += "<div class=swipe-nav-item></div>";
				__p += '</div></div><div class=index-menu id=wrapper><ul class=flex-wrap><li class="flex in-nav-enter"><div class="js-go in-module-bg" style=background:#fc905f data-url="car/info"><i class="iconfont font-menu-maintain ">&#xe650;</i></div><div class="in-text-top ">4S店保养</div></li><li class="flex in-nav-enter"><div class="in-module-bg ', isOpenAccident && print(" js-accident"), __p += '" style=background:#fbcb6d>', __p += isOpenAccident ? '<i class="iconfont font-menu-fix ">&#xe64d;</i>' : "<div style=color:#fff;font-weight:700;font-size:.13rem;height:0.65rem;line-height:0.65rem>敬请期待</div>", __p += '</div><div class=in-text-top>事故维修</div></li><li class="flex in-nav-enter"><div class="js-zhiliao in-module-bg" style=background:#79abee data-url data-ajax=0><i class="iconfont font-menu-tech ">&#xe651;</i></div><div class="in-text-top ">在线技师</div></li><li class="flex in-nav-enter"><div class="js-go in-module-bg" style=background:#56dade data-url="/weizhang/"><i class="iconfont font-menu-record">&#xe65b;</i></div><div class="in-text-top p-relative">违章查询<div class="red-point js-weizhang-point"></div></div></li></ul></div><div class=pading-menu style=clear:both></div>', !hasCar && homeData.maintenanceHistory && homeData.maintenanceHistory.isCanUse && (__p += '<div class="car-choose car-bg car-bg-bottom clearfix "><div class="car-add "><p class=" car-left js-go" data-url="car/info"><i class=iconfont style=font-size:0.18rem>&#xe601;</i>&nbsp;添加爱车，体验4S店低价优质保养&nbsp;</p>', app.nativeApi.has("app.scan") && (__p += '<p class="search-car js-scan"><i class=iconfont style=font-size:0.18rem>&#xe628;</i>&nbsp;扫码识车</p>'), __p += '</div><div class="clearfix brands-content" style=padding-top:.06rem>', homeData.brandsMinPrice.length <= 6 ? (__p += "", _.each(homeData.brandsMinPrice, function(t) {
					__p += '<div class="car-inf js-brand-two" data-url="car/brandtwo" data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class="one-car one-car-right"><div class=car-brand><img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" style=width:100%;height:100%></div><p class="car-price "><span class=font-xs>&yen;</span>' + (null == (__t = templateApi.price(t.minPrice)) ? "" : __t) + "</p></div></div>"
				}), __p += "\n    ") : (__p += "", _.each(homeData.brandsMinPrice.slice(0, 6), function(t) {
					__p += '<div class="car-inf js-brand-two" data-url="car/brandtwo" data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class="one-car one-car-right"><div class=car-brand><img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" style=width:100%;height:100%></div><p class="car-price "><span class=font-xs>&yen;</span>' + (null == (__t = templateApi.price(t.minPrice)) ? "" : __t) + "</p></div></div>"
				}), __p += "<div class=brands-more style=display:none>", _.each(homeData.brandsMinPrice.slice(6), function(t) {
					__p += '<div class="car-inf js-brand-two" data-url="car/brandtwo" data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class="one-car one-car-right"><div class=car-brand><img class=js-more-imgs data-src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" style=width:100%;height:100%></div><p class="car-price "><span class=font-xs>&yen;</span>' + (null == (__t = templateApi.price(t.minPrice)) ? "" : __t) + "</p></div></div>"
				}), __p += "</div>"), __p += "</div>", homeData.brandsMinPrice.length > 6 && (__p += '<p class="more-inf js-more-brand font-s"><span>更多品牌</span>&nbsp;<i class=iconfont>&#xe623;</i></p>'), __p += "</div>"), __p += "", hasCar && homeData.maintenanceHistory && homeData.maintenanceHistory.isCanUse && (__p += '<div class="my-car-inf  car-bg car-bg-bottom "><div class="my-car js-select"><div class=my-car-brand><img alt src="' + (null == (__t = car.imgUrl) ? "" : __t) + '" style=width:100%></div><div class=my-car-name>' + (null == (__t = car.carTypeName + car.yearType + car.name) ? "" : __t) + '</div><div class="my-car-run icon-arrow"></div></div><div class=car-maintain><div class=bottom-box><div class="hline-items js-hline " style=overflow:hidden><div style=z-index:2;position:relative id=scrollWrap><ul class="clearfix hline-items-wrap"><li class=hline-item data-id=0 data-mileage=0><div class=miles-num><p>爱车到手</p></div><div class=hline-price><div class=car-icon style><i class=iconfont>&#xe653;</i></div><span class><span class=font-s></span></span></div></li>', homeData.maintenanceHistory.histories && homeData.maintenanceHistory.histories.length > 0 ? (__p += "\n            ", _.each(homeData.maintenanceHistory.histories, function(t) {
					__p += '<li class="hline-item js-hline-item" data-id="' + (null == (__t = t.orderId) ? "" : __t) + '" data-mileage="' + (null == (__t = t.mileage) ? "" : __t) + '"><div class=miles-num>' + (null == (__t = t.mileage) ? "" : __t) + "公里</div><div class=hline-price><span class=hline-price-sec><span class=font-s>&yen;</span>" + (null == (__t = t.price / 100) ? "" : __t) + "</span><span class=hline-price-rel><span class=font-s>&yen;</span><span class>" + (null == (__t = t.lcbPrice / 100) ? "" : __t) + "</span></span></div></li>"
				}), __p += "\n            ") : __p += "\n\n            ", __p += "\n            ", _.each(homeData.maintenanceHistory.mileages, function(t) {
					__p += '<li class="hline-item js-hline-item" data-id="' + (null == (__t = t.historyId) ? "" : __t) + '" data-mileage="' + (null == (__t = t.mileage) ? "" : __t) + '"><div class=miles-num>' + (null == (__t = t.mileage) ? "" : __t) + "公里</div><div class=hline-price><span class=hline-price-sec><span class=font-s>&yen;</span>" + (null == (__t = t.price / 100) ? "" : __t) + '</span><span class="hline-price-rel js-hline-price-rel"><span class=font-s>&yen;</span><span class=js-lcb-price>' + (null == (__t = t.lcbPrice / 100) ? "" : __t) + "</span></span></div></li>"
				}), __p += '<li class=hline-item data-id=0 data-mileage=0><div class=miles-num>在路上</div><div class=hline-price><div class=car-icon><i class=iconfont>&#xe653;</i></div><span class><span class=font-s></span></span></div></li></ul></div><div class=index-hline-middle></div></div><div style=text-align:center class data-ajax=0><button class="taocan-btn js-go-to">查看保养套餐<i class=iconfont style=font-size:0.18rem;line-height:0.26rem>&#xe623;</i></button></div></div></div></div>'), __p += "", homeData.maintenanceHistory && !homeData.maintenanceHistory.isCanUse && (__p += '<div class="my-car-inf  car-bg car-bg-bottom "><div class="my-car js-select"><div class=my-car-brand><img alt src="' + (null == (__t = car.imgUrl) ? "" : __t) + '" style=width:100%></div><div class=my-car-name>' + (null == (__t = car.carTypeName + car.yearType + car.name) ? "" : __t) + '</div><div class="my-car-run icon-arrow"></div></div><div class=car-maintain><div class=bottom-box><div class="hline-items js-hline "><div style><ul class="clearfix hline-items-wrap"><li class=hline-item><div class=miles-num>5000公里</div><div class=hline-price><span class=hline-price-sec><span class=font-s></span></span><span class=hline-price-rel><span class=font-s></span></span></div></li><li class=hline-item><div class=miles-num>10000公里</div><div class=hline-price><span class=hline-price-sec><span class=font-s></span></span><span class=hline-price-rel><span class=font-s></span></span></div></li><li class=hline-item><div class=miles-num>15000公里</div><div class=hline-price><span class=hline-price-sec><span class=font-s></span></span><span class=hline-price-rel><span class=font-s></span></span></div></li><li><p class=gray-info>当前城市暂不支持当前车辆保养服务</p></li></ul></div><div class=index-hline-disable></div></div><div style=text-align:center class=js-go data-url="user/maintenance"><button class=taocan-btn>查看保养轨迹 &gt;</button></div></div></div></div>'), __p += "<div style=height:.6rem></div></div>"
			}
			return __p
		}
	}), define("textfooterHtml", [], function() {
		return function(obj) {
			var __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<ul class="flex-wrap in-nav-wrap"><li class="flex in-nav', "index" == ctrlName && print(" active"), __p += '" data-url><i class=iconfont>', print("index" == ctrlName ? "&#xe63f;" : "&#xe60a;"), __p += '</i><div class=font-s>首页</div></li><li class="flex in-nav', "services/index" == ctrlName && print(" active"), __p += '" data-url="services/index"><i class=iconfont>', print("services/index" == ctrlName ? "&#xe617;" : "&#xe612;"), __p += '</i><div class=font-s>服务网点</div></li><li class="flex in-nav', "activity/index" == ctrlName && print(" active"), __p += '" data-url="activity/index"><i class=iconfont>', __p += "activity/index" == ctrlName ? "\n        &#xe616;\n        " : "\n        &#xe638;\n        ", __p += '</i><div class=font-s>热门活动</div></li><li class="flex in-nav', "user/index" == ctrlName && print(" active"), __p += '" data-url="user/index"><i class=iconfont>', __p += "user/index" == ctrlName ? "\n        &#xe63e;\n        " : "\n        &#xe61b;\n        ", __p += "</i><div class=font-s>用户中心</div></li></ul>";
			return __p
		}
	}), define("Footer", ["textfooterHtml", "UIAbstract"], function(t, e) {
		var i = e.extend({
			events: {
				"click .in-nav": "navAction"
			},
			attributes: {
				"class": "page-bottom",
				style: "border-top: 1px solid #ececec;"
			},
			_create: function() {
				var e = this.template(t, {
					ctrlName: this.options.ctrlName
				});
				this.$el.html(e)
			},
			navAction: function(t) {
				var e = $(t.currentTarget);
				if (!e.hasClass("active")) {
					var i = e.data("url");
					app.goTo(i, {
						animate: !1
					})
				}
			}
		});
		return i
	}), define("textindexQuanHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.index-quan{position:absolute;top:50%;left:50%;-webkit-transform:translate(-54%,-50%);transform:translate(-54%,-50%);z-index:503;width:290px;height:324px;background-size:cover}.index-quan-close{position:absolute;width:34px;height:34px;right:3px;top:26px}.index-quan-btn{position:absolute;bottom:40px;left:100px;color:#ee3a3a;font-size:15px}.index-quan-txt2{position:absolute;left:60px;top:200px;width:190px;font-size:13px;text-align:center;color:#92000e}.index-quan-txt1{text-align:center;margin-top:170px;margin-left:23px;font-size:18px;color:#fceb54;text-shadow:2px 2px 3px #e40044}</style><div class=pub-overlay-alert style=z-index:500></div><div class=index-quan style="background-image:url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + 'index/quan.png)"><div class=index-quan-close></div><div class=index-quan-txt1>恭喜获得' + (null == (__t = num) ? "" : __t) + "元抵用券</div>", storeName && (__p += "<div class=index-quan-txt2>仅限" + (null == (__t = storeName) ? "" : __t) + "店使用</div>"), __p += "<div class=index-quan-btn>立即查看抵用券 &gt;</div></div>";
			return __p
		}
	}), define("prefix", [], function() {
		function t(t, e, i) {
			for (var n = ["webkit", "moz", "MS", "o", ""], a = 0; a < n.length; a++) n[a] || (e = e.toLowerCase()), t.addEventListener(n[a] + e, i, !1)
		}

		function e(t) {
			return n === !1 ? !1 : "" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1)
		}

		function i() {
			return n ? "-" + n + "-transform" : "transform"
		}
		var n = function() {
			for (var t, e = document.createElement("div").style, i = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, a = i.length; a > n; n++)
				if (t = i[n] + "ransform", t in e) return i[n].substr(0, i[n].length - 1);
			return !1
		}();
		return {
			vender: n,
			style: e,
			events: t,
			transform: e("transform"),
			cssTransform: i("transform"),
			transition: e("transition")
		}
	}), define("textUIHeaderHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div class="full-fixed header-inner">', left && (__p += '<div class="header-left js-back" ', left.appendText && (__p += "style=width:70px "), __p += ">", left.text ? __p += "\n            " + (null == (__t = left.text) ? "" : __t) + "\n        " : (__p += "<i class=icon-back></i>", left.appendText && (__p += "<span style=font-size:16px;position:absolute;left:32px;top:0>" + (null == (__t = left.appendText) ? "" : __t) + "</span>"), __p += "\n        "), __p += "</div>"), __p += "<div class=header-right>", _.each(right, function(t, e) {
				__p += '<span class="header-item-right js-right" data-index="' + (null == (__t = e) ? "" : __t) + '">' + (null == (__t = t.text) ? "" : __t) + "</span>"
			}), __p += "</div><h1 class=pub-page-title>" + (null == (__t = center.text) ? "" : __t) + "</h1></div>";
			return __p
		}
	}), define("UIHeader", ["UIAbstract", "textUIHeaderHtml"], function(t, e) {
		var i = t.extend({
			options: {
				left: {
					text: "",
					callback: function() {
						app.goBack()
					}
				},
				center: {
					text: ""
				},
				right: []
			},
			events: {
				"click .js-back": "backAction",
				"click .js-right": "rightAction"
			},
			clickTime: 0,
			pageViewsOptions: {},
			_setOptions: function(t) {
				this.options = $.extend(!0, {}, this.constructor.prototype.options, t);
				var i = this.template(e, this.options);
				this.$el.html(i).show(), this.pageViewsOptions[app.currentPage.ctrlName] = t
			},
			pageViewRestore: function() {
				var t = this.pageViewsOptions[app.currentPage.ctrlName];
				t ? this._setOptions(t) : this.hide()
			},
			backAction: function() {
				var t = _.now();
				t - this.clickTime > 410 && (this.options.left.callback(), this.clickTime = t)
			},
			rightAction: function(t) {
				var e = $(t.currentTarget),
					i = e.attr("data-index"),
					n = this.options.right[i].callback;
				n && n()
			}
		});
		return i
	}), define("PageView", ["backbone", "prefix", "UIHeader"], function(t, e, i) {
		var n = /^(\S+)\s*(.*)$/,
			a = t.View.extend({
				options: {
					rememberQuery: !1,
					goBackWithCache: !0
				},
				setElement: function(t) {
					return this._setElement(t), this
				},
				delegateEvents: function() {
					this.undelegateEvents();
					var t = this.events,
						e = function(t, e) {
							var i = $(e.currentTarget);
							i[0].hasAttribute("data-ajax") ? i.attr("lcb-stop") || (app.ajax.target = i, t.call(this, e)) : t.call(this, e)
						};
					for (var i in t) {
						var a = i.match(n),
							r = (a[1], t[i]);
						_.isFunction(r) || (r = this[t[i]]), this.delegate(a[1], a[2], _.bind(e, this, r))
					}
				},
				tagName: "article",
				attributes: {
					"class": "page"
				},
				header: new i({
					el: document.querySelector("header")
				}),
				onCreate: _.noop,
				onShow: _.noop,
				template: function(t, e) {
					return e = e || {}, _.isString(t) ? _.template(t)(e) : t(e)
				},
				initialize: function() {
					e.events(this.el, "AnimationEnd", _.bind(this._animationEnd, this)), app.currentPage = this, this.onCreate()
				},
				remove: function() {
					this.$el.css("display", "none"), this.$el.remove(), this.stopListening(), this.onRemove && this.onRemove()
				},
				addOnScroll: function() {
					var t = this,
						e = this.$(".page-content"),
						i = this.$(".page-content-inner"),
						n = _.throttle(function() {
							if (t.trigger("scroll"), i.length) {
								var n = i.height(),
									a = e.scrollTop() + document.documentElement.clientHeight + 80;
								a > n && t.trigger("bottom")
							}
						}, 200);
					this.off("scroll bottom"), e.off("scroll").on("scroll", n)
				},
				_pageRemove: function(t, e) {
					var i = this.$(".page-content");
					if (i.length && (app._.pageViewScrollTop[this.ctrlName] = i[0].scrollTop), this.trigger("remove"), t) {
						var n = e ? "page-from-center-to-left" : "page-from-center-to-right";
						this.$el.addClass(n)
					} else this.remove()
				},
				_pageShow: function(t, e) {
					t ? this.$el.addClass(e ? "page-from-right-to-center" : "page-from-left-to-center") : this.delegateEvents()
				},
				_animationEnd: function(t) {
					var e = t.animationName;
					"pageFromCenterToRight" === e || "pageFromCenterToLeft" === e ? this.remove() : ("pageFromRightToCenter" === e || "pageFromLeftToCenter" === e) && (this.$el.removeClass("page-from-left-to-center page-from-right-to-center"), this.delegateEvents())
				},
				_cacheShow: function() {
					app.currentPage = this, this.header.pageViewRestore(), this.$el.show();
					var t = this,
						e = this.$(".page-content");
					e.length && setTimeout(function() {
						e[0].scrollTop = app._.pageViewScrollTop[t.ctrlName]
					});
					var i = app._.interval[this.ctrlName];
					i && (delete app._.interval[this.ctrlName], _.each(i, function(t) {
						app.setInterval(t.fn, t.time)
					}))
				},
				reload: function(t) {
					app.showLoading(300), app._.clearInterval(this.ctrlName, !0);
					for (var e in t) {
						var i = t[e];
						_.isNull(i) || _.isUndefined(i) ? delete this.query[e] : this.query[e] = i
					}
					app.reload(this), app._.replace(this)
				}
			});
		return a
	}), define("Swipe", [], function() {
		function t(t, e) {
			this.el = t, this.options = $.extend({
				step: 20,
				start: _.noop,
				right: _.noop,
				left: _.noop,
				move: _.noop,
				end: _.noop,
				context: this
			}, e), t.on("touchstart", _.bind(this._start, this)).on("touchmove", _.bind(this._move, this)).on("touchend", _.bind(this._end, this))
		}
		return t.prototype._start = function(t) {
			var e = t.touches ? t.touches[0] : t;
			this.startX = this.endX = e.pageX, this.startY = this.endY = e.pageY, this._valid = !0, this._check = !1, this.options.start.call(this.options.context, t)
		}, t.prototype._move = function(t) {
			if (this._valid) {
				var e = t.touches ? t.touches[0] : t;
				this.endX = e.pageX, this.endY = e.pageY;
				var i = this.endX - this.startX,
					n = this.endY - this.startY;
				if (!this._check) {
					if (Math.abs(n) > Math.abs(i)) return void(this._valid = !1);
					this._check = !0
				}
				this.options.move.call(this.options.context, t, i), t.preventDefault()
			}
		}, t.prototype._end = function() {
			if (this._valid) {
				var t = this.endX - this.startX,
					e = this.options;
				t > e.step ? e.right.call(e.context) : -t > e.step && e.left.call(e.context), e.end.call(e.context)
			}
		}, t
	}), define("UISlideshow2", ["UIAbstract", "Swipe", "prefix"], function(t, e, i) {
		var n = t.extend({
			attributes: {
				style: "overflow:hidden;position:relative;"
			},
			options: {
				autoPlay: !1,
				wrapperClass: "",
				itemClass: "",
				navClass: "",
				index: 1,
				swipeEnd: _.noop,
				preventDefault: !1
			},
			_setOptions: function(t) {
				for (var e in t) "index" == e && this._setWrapperPos(-t[e] * this.options.itemWidth)
			},
			_create: function() {
				var t = this;
				this.options.itemWidth || (this.options.itemWidth = document.documentElement.clientWidth), this.wrapper = this.$("." + this.options.wrapperClass).hide(), this.navs = this.$("." + this.options.navClass);
				var i = this.$("." + this.options.itemClass),
					n = '<div class="' + this.options.itemClass + '">1</div>';
				this.itemLength = i.length, this.wrapper.append(n), this.wrapper.prepend(n), this._setWrapperPos(-this.options.itemWidth * this.options.index), this._setNavAction(), this.$("." + this.options.itemClass).css("width", this.options.itemWidth), this.swipe = new e(this.$el, {
					start: this._start,
					move: this._move,
					end: this._end,
					context: this
				}), setTimeout(function() {
					t.wrapper.show()
				}, 200), this._startTime = _.now(), this.startAutoPlay()
			},
			_start: function() {
				this.stopAutoPlay(), this._clearAnimate();
				var t = this.wrapper[0].style[i.transform];
				this.x = parseInt(t.match(/\(([-\.\d]+)px,/)[1], 10), _.now() - this._startTime < 300 && (this.swipe._valid = !1), this.options.preventDefault && (this.swipe._check = !0)
			},
			_move: function(t, e) {
				this._setWrapperPos(this.x + e)
			},
			_end: function() {
				var t = this.wrapper[0].style[i.transform],
					e = -parseInt(t.match(/\(([-\.\d]+)px,/)[1], 10),
					n = this.options.itemWidth,
					a = this;
				this.x = this.swipe.startX > this.swipe.endX ? -Math.ceil(e / n) * n : -Math.floor(e / n) * n, this.wrapper[0].style[i.transition] = i.cssTransform + " 300ms cubic-bezier(0.22, 0.69, 0.72, 0.88)", this._setWrapperPos(this.x);
				var r = -this.x / n;
				this.x >= 0 ? (r = this.itemLength, setTimeout(function() {
					a._clearAnimate(), a._setWrapperPos(-a.itemLength * n)
				}, 300), this._startTime = _.now()) : Math.abs(this.x) >= (this.itemLength + 1) * n && (r = 1, setTimeout(function() {
					a._clearAnimate(), a._setWrapperPos(-n)
				}, 300), this._startTime = _.now()), this.options.index = r, this._setNavAction(), this.startAutoPlay()
			},
			_setNavAction: function() {
				this.navs.removeClass("active").eq(this.options.index - 1).addClass("active"), this._handCopyItem()
			},
			_setWrapperPos: function(t) {
				this.wrapper[0].style[i.transform] = "translate3d(" + t + "px, 0, 0)"
			},
			_clearAnimate: function() {
				this.wrapper[0].style[i.transition] = "none"
			},
			_handCopyItem: function() {
				var t = this.wrapper.find("." + this.options.itemClass);
				this.options.index == this.itemLength && t.eq(t.length - 1).replaceWith(t.eq(1).clone()), 1 == this.options.index && t.eq(0).replaceWith(t.eq(t.length - 2).clone())
			},
			startAutoPlay: function() {
				this.options.swipeEnd.call(this), this.options.autoPlay && this.itemLength > 1 && (this.autoPlayTimer = app.setInterval(_.bind(this.autoPlay, this), 3e3))
			},
			stopAutoPlay: function() {
				this.autoPlayTimer && clearInterval(this.autoPlayTimer)
			},
			autoPlay: function() {
				var t = this,
					e = this.wrapper[0].style;
				this.options.index++;
				var n = -this.options.index * this.options.itemWidth;
				this.options.index > this.itemLength && (this.options.index = 1, setTimeout(function() {
					t._clearAnimate(), t._setWrapperPos(-t.options.itemWidth)
				}, 310)), this._setNavAction(), e[i.transition] = i.cssTransform + " 300ms ease-in", e[i.transform] = "translate3d(" + n + "px, 0, 0)", this.options.swipeEnd.call(this)
			}
		});
		return n
	}), define("geolocation", ["session", "local", "backbone", "util"], function(t, e, i) {
		function n(e, i) {
			var n = $.param({
				ak: config.baiduKey,
				location: e.coords.latitude + "," + e.coords.longitude,
				output: "json",
				coordtype: "wgs84ll"
			});
			$.ajax({
				url: "//api.map.baidu.com/geocoder/v2/?" + n,
				dataType: "jsonp",
				success: function(e) {
					if (0 == e.status) {
						var n = e.result.addressComponent.city.replace("市", "");
						e.result.cityId = a[n], e.result.addressComponent.city = n, t._set("lcb_geolocation", e.result, "10M"), i(e.result), r.trigger("done", e.result)
					}
				}
			})
		}
		var a = {
				"北京": 10101,
				"上海": 10201,
				"广州": 10801,
				"深圳": 10816,
				"重庆": 10401,
				"天津": 10301,
				"成都": 12701,
				"东莞": 10803,
				"佛山": 10804,
				"武汉": 11501,
				"长沙": 11601,
				"南京": 11801,
				"苏州": 11806,
				"杭州": 13101,
				"宁波": 13106,
				"厦门": 10608
			},
			r = {
				startPosition: function(e, i, a) {
					if (a || (a = {
						enableHighAccuracy: !1,
						cache: !0
					}), app.nativeApi.has("map.coordinate")) wvjb.callHandler("map.coordinate", {}, function(t) {
						if ("success" == t.state) {
							var i = {
								coords: t.data
							};
							"production" != config.env && config.position && (i = {
								coords: {
									latitude: config.position.latitude,
									longitude: config.position.longitude
								}
							}), n(i, e)
						}
					});
					else if (navigator.geolocation) {
						var o = t._get("lcb_geolocation");
						o ? e(o) : navigator.geolocation.getCurrentPosition(function(t) {
							"production" != config.env && config.position && (t = {
								coords: {
									latitude: config.position.latitude,
									longitude: config.position.longitude
								}
							}), n(t, e)
						}, i, a)
					} else r.failAction("您手机不支持共享位置，可以手动切换城市")
				},
				getPostion: function() {
					var i = e._get("lcb_location");
					i || (i = {
						cityId: a["北京"],
						addressComponent: {
							city: "北京"
						}
					});
					var n = t._get("lcb_geolocation");
					return n ? n.cityId == i.cityId ? n : (n.cityId = i.cityId, n.addressComponent.city = i.addressComponent.city, n) : i
				},
				setPostion: function(t) {
					e._set("lcb_location", {
						cityId: a[t],
						addressComponent: {
							city: t
						}
					}), this.trigger("change")
				},
				setPostionById: function(t) {
					e.set("location", {
						cityId: t,
						addressComponent: {
							city: r.idMapCity[t]
						}
					})
				},
				hasOpen: function(t) {
					return t = parseInt(t, 10), -1 != [10101, 10201, 12701, 10801, 10816, 10401, 10301, 10803, 10804, 11806, 13101, 10608].indexOf(t)
				},
				hasUnopen: function(t) {
					return -1 != [].indexOf(t)
				},
				hasIn: function(t) {
					return this.hasOpen(t) || this.hasUnopen(t)
				},
				idMapCity: _.invert(a),
				isOpen: function() {
					var t = r.getPostion().cityId;
					return r.hasOpen(t)
				},
				failAction: function(t) {
					("/webapp" == location.pathname || "/webapp/index" == location.pathname) && (_.isString(t) || (t = "您拒绝了共享位置，可以手动切换城市"), app.hint(t))
				}
			};
		return _.extend(r, i.Events), r
	}), define("carModel", ["geolocation", "events", "session", "local"], function(t, e, i, n) {
		function a() {
			return t.getPostion().cityId
		}
		e.on("local:car ajax:mycar/delMyCar", function() {
			i.cleanAjax("mycar/getMyDefaultCar"), i.cleanAjax("home/getHomeData"), i.cleanAjax("shop/getServiceNetList"), app.clearPageView(["index", "user/index", "car/info", "user/car", "user/maintenance"])
		}), e.on("session:webappeffectDate", function() {
			app.clearPageView(["shop/list"])
		}), e.on("ajax:voucher/bindVoucherWitchCode ajax:mtnorder/cancelOrder ajax:mtnorder/createOrder", function() {
			i.cleanAjax("plan/queryPlanVoucher"), i.cleanAjax("home/getHomeData")
		}), e.on("ajax:mtnorder/cancelOrder ajax:mtnorder/consumeCoupon ajax:mtnorder/createOrderComment ajax:mtnorder/appendOrderComment ajax:mtnorder/deleteOrder ajax:mtnorder/createOrder", function() {
			i.cleanAjax("ord_user/countOrder"), app.clearPageView(["user/index", "order/index", "order/detail"])
		}), e.on("ajax:withdraw/withdraw", function() {
			i.cleanAjax("wallet/my_wallet"), app.clearPageView(["user/index", "user/invite"])
		}), t.on("change", function() {
			app.clearPageView()
		});
		var r = {
			myCarList: function() {
				var t = {
					url: "mycar/getMyCarByUserId",
					data: {
						cityId: a()
					}
				};
				return t
			},
			myDefaultCar: function() {
				var t = {
					url: "mycar/getMyDefaultCar",
					session: !0,
					expires: "3M",
					data: {
						cityId: a()
					}
				};
				return t
			},
			setDefaultCar: function(t, e) {
				var i = {
					url: "mycar/setDefaultCar",
					data: {
						id: t
					},
					success: e
				};
				app.ajax(i)
			},
			delMyCar: function(t, e) {
				var i = {
					url: "mycar/delMyCar",
					data: {
						id: t
					},
					success: e
				};
				app.ajax(i)
			},
			saveMyCar: function(t, e) {
				var i = {
					url: "mycar/saveMyCar",
					data: t,
					success: e
				};
				app.ajax(i)
			},
			updateMyCar: function(t, i) {
				var a = n._get("car"),
					r = !0;
				i = i || _.noop;
				for (var o in t)
					if ("mileage" == o && (t[o] = parseInt(t[o], 10)), "buyDate" == o) {
						if (t[o] !== app.dateFormat(a[o], "yyyy-mm-dd")) {
							r = !1;
							break
						}
					} else if (t[o] !== a[o]) {
					r = !1;
					break
				}
				r ? i(a) : app.ajax({
					url: "mycar/updateMyCar",
					data: t,
					success: function(t) {
						e.trigger("car"), i(t)
					}
				})
			},
			toBeOpenedBrands: function() {
				var t = {
					url: "to_be_opened/brands",
					data: {
						cityId: a()
					},
					session: !0
				};
				return t
			},
			firstLevel: function(t) {
				var e = {
					url: "car/getFirstLevelBrandType",
					session: !0
				};
				return t || (e.data = {
					cityId: a()
				}), e
			},
			secondLevel: function(t) {
				var e = {
					url: "car/getBrandProducerCar",
					session: !0,
					data: {
						brandId: t,
						cityId: a()
					}
				};
				return e
			},
			thirdLevel: function(t) {
				var e = {
					url: "car/getCarTypeDetail",
					session: !0,
					data: {
						brandId: t,
						cityId: a()
					}
				};
				return e
			},
			validateOrder: function(t) {
				var e = {
					url: "car/isBrandTypeCanOrder",
					session: !0,
					data: {
						brandTypeId: t,
						cityId: a()
					}
				};
				return e
			},
			placeGetPlaceInfo: function(t) {
				var e = {
					url: "place/getPlaceInfoOfParentId",
					data: {
						placeId: t || a()
					},
					local: !0,
					expires: "2D"
				};
				return e
			},
			getServiceNetForDetail: function(t) {
				var e = {
					url: "shop/getServiceNetForDetail",
					data: {
						storeId: t
					},
					session: !0
				};
				return e
			},
			getOilInfoPriceResultOfBrandType: function(t) {
				var e = {
					url: "oilinfo/getOilInfoPriceResultOfBrandType",
					session: !0,
					expires: "3M",
					data: {
						brandTypeId: t,
						cityId: a()
					}
				};
				return e
			},
			getChezhiliaoUrl: function(t) {
				app.ajax({
					url: "activity/getChezhiliaoUrl",
					data: {
						cityId: a(),
						returnUrl: location.href
					},
					success: t
				})
			},
			getPlanItemsId: function(t, e) {
				function i(t) {
					t.h5Active && (e ? e(t) : n.push(t.id))
				}
				var n = [];
				return _.each(t.items, i), t.nearItems && _.each(t.nearItems, i), t.otherItems && _.each(t.otherItems, i), n
			},
			filterCanOrderTime: function(t) {
				t || (t = []);
				var e = _.filter(t, function(t) {
					return 1 == t.isCanOrder
				});
				return e
			},
			getUserComments: function(t, e, i) {
				var n = {
					url: "mtnorder/getShopCommentList",
					data: {
						storeId: t,
						page: {
							pageSize: i,
							currentPage: e,
							orderBy: "id desc"
						}
					},
					session: !0,
					expires: "1M"
				};
				return n
			},
			getHomeData: function(t) {
				var e = {
					url: "home/getHomeData",
					data: t,
					session: !0,
					expires: "5M"
				};
				return e
			},
			getHomeDataVoucher: function(t, e, i) {
				t.cityId = a();
				var n = {
					url: "mileage/getMaintenanceHistoryHome",
					data: t,
					session: !0,
					expires: "3M",
					success: e,
					error: i,
					networkError: i
				};
				app.ajax(n)
			},
			getAdByCityAndPosition: function() {
				var t = {
					url: "mkt/getAdByCityAndPosition",
					session: !0,
					expires: "5M",
					data: {
						positionId: 3,
						cityId: a()
					}
				};
				return t
			},
			queryPlanVoucher: function(t, e) {
				t.placeId = a();
				var i = {
					url: "plan/queryPlanVoucher",
					session: !0,
					expires: "3M",
					data: t,
					success: e
				};
				app.ajax(i)
			},
			bindVoucherWitchCode: function(t, e) {
				var i = {
					url: "voucher/bindVoucherWitchCode",
					data: t,
					success: e
				};
				app.ajax(i)
			},
			createOrder: function(t, e, i) {
				var n = {
					url: "mtnorder/createOrder",
					log: !0,
					data: t,
					success: e,
					error: i
				};
				app.ajax(n)
			},
			cancelOrder: function(t, e, i) {
				app.ajax({
					url: t,
					data: e,
					success: i
				})
			},
			hasNewViolation: function() {
				var t = {
					url: "violation/hasNewViolation"
				};
				return t
			},
			getMyViolationCar: function() {
				var t = {
					url: "mycar/getMyViolationCar"
				};
				return t
			},
			getMywallet: function() {
				var t = {
					url: "wallet/my_wallet",
					session: !0,
					expires: "3M"
				};
				return t
			}
		};
		return r
	}), define("CollectionUtils", [], function() {
		var t = {
			size: function(t) {
				return t ? t.length : 0
			},
			contain: function(t, e, i) {
				if (!(t && t.length > 0)) return !1;
				"function" != typeof i && (i = function(t, e, i) {
					return e == i
				});
				for (var n = !1, a = 0; a < t.length; a++) n = n || i(a, t[a], e);
				return n
			},
			consist: function(t, e) {
				if (!(t && t.length > 0)) return !1;
				if (1 == t.length) return !0;
				"function" != typeof e && (e = function(e, i) {
					return i == t[0]
				});
				for (var i = !0, n = 0; n < t.length; n++) i = i && e(n, t[n]);
				return i
			},
			getElements: function(t, e, i) {
				if (!(t && t.length > 0)) return [];
				"function" != typeof i && (i = function(t, e, i) {
					return e == i
				});
				for (var n = [], a = 0; a < t.length; a++) i(a, t[a], e) && n.push(t[a]);
				return n
			}
		};
		return t
	}), define("VinConfig", [], function() {
		var t = [null, "最大功率(kW)", "轮胎规格", "前轮胎规格", "后轮胎规格", "GPS导航", "真皮座椅", "天窗", "电动天窗", "全景天窗"],
			e = [];
		_.each(t, function(t) {
			e.push(t)
		}), e.reverse();
		var i = {};
		return i.list = function() {
			return t
		}, i.listReverse = function() {
			return e
		}, i
	}), define("VinScanner", ["CollectionUtils", "session", "local", "VinConfig"], function(t, e, i, n) {
		function a(t, e) {
			this.k = t, this.v = new Array, this.b = e || !1, this.addV = function(t) {
				this.v.push(t)
			}
		}

		function r() {
			var t = [];
			this.add = function(e, i, n) {
				_.contains(["选配", "空", "", "无"], i);
				var r = _.find(t, function(t) {
					return t.k === e
				});
				r ? _.contains(r.v, i) || (r.addV(i), r.b = r.b || n) : (r = new a(e, n), r.addV(i), t.push(r)), r.v = _.sortBy(r.v, function(t) {
					return "有" != t
				})
			}, this.output = function() {
				return _.each(n.listReverse(), function(e) {
					t = _.sortBy(t, function(t) {
						return t.k.replace(";", "") != e
					})
				}), t
			}
		}

		function o(t) {
			var e = new r,
				i = _.pluck(t, "diffInfo");
			for (var n in i)
				for (var a in i[n]) e.add(a, i[n][a], "有" === i[n][a]);
			var o = e.output();
			return o = _.filter(o, function(t) {
				return t.v && t.v.length > 1
			})
		}

		function s(t) {
			var e = t;
			this.getOriginalCollection = function() {
				return e
			}, this.screen = function(t) {
				var e = _.filter(this.getOriginalCollection(), function(e) {
					var i = !0;
					for (var n in t) {
						if (!i) return;
						i = "有" == t[n] ? i && "有" == e.diffInfo[n] : "无" == t[n] ? i && "有" != e.diffInfo[n] : i && t[n] == e.diffInfo[n]
					}
					return i
				});
				return {
					list: e,
					differences: o(this.getOriginalCollection())
				}
			}, this.getType = function(t) {
				var e = _.find(this.getOriginalCollection(), function(e) {
					return t === e.id
				});
				return e
			}
		}
		var l = {};
		return l.shout = function(t) {
			var e = "VIN扫码识车";
			t && "function" == $.type(t) && t(e)
		}, l.newInstance = function(t) {
			return new s(t)
		}, l.callCamera = function(t) {
			app.nativeApi.has("app.scan") ? wvjb.callHandler("app.scan", {
				type: "vin"
			}, function(e) {
				if (e)
					if ("success" == e.state) {
						var i = e.data.vehicle_license_main_vin;
						app.goTo("vin/result?from=" + t + "&code=" + i, {
							animate: !1,
							replace: "vin/result" == app.currentPage.ctrlName ? !0 : !1
						})
					} else if ("fail" == e.state) {
					var n = app.currentPage.ctrlName;
					if ("vin/result_hm" == n) return void app.currentPage.reload();
					app.goTo("vin/result_hm?from=" + t + "&code=" + (i || ""), {
						animate: !1,
						replace: "vin/result" == n || "vin/result_hm" == n,
						stop: !1
					})
				} else "back" == e.state
			}) : app.alert({
				msg: "<div style='text-align:center'>无法调用扫码工具</div>",
				btns: [{
					text: "去手动输入",
					callback: function() {
						app._alert.hide(), app.goTo("vin/result?hm=1")
					}
				}, {
					text: "取消",
					callback: function() {
						app._alert.hide()
					}
				}]
			})
		}, l.redirect = function(t, i, n) {
			e.set("new_car", n), url = t, url = i ? url + "?from=" + i : url, app.goTo(url)
		}, l.query = function(t, e, i) {
			i = $.extend({
				success: function() {},
				error: function() {}
			}, i), app.ajax({
				url: "vin/getCarInfoByVin",
				data: {
					vin: t,
					once: e || 1
				},
				success: function(t) {
					i.success(t)
				},
				error: function(t) {
					"12005" == t.statusCode ? i.success({
						list: []
					}) : i.error(t)
				}
			})
		}, l.processVinCode = function(t) {
			return t ? t = t.replace(/i|I/g, 1).replace(/o|O|q|Q/g, 0) : void 0
		}, l
	}), define("IScroll", [], function() {
		function t(t, e) {
			this.wrapper = "string" == typeof t ? document.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
				startX: 0,
				startY: 0,
				scrollY: !0,
				directionLockThreshold: 5,
				momentum: !0,
				bounce: !0,
				bounceTime: 600,
				bounceEasing: "",
				preventDefault: !0,
				preventDefaultException: {
					tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
				},
				HWCompositing: !0,
				useTransition: !0,
				useTransform: !0
			};
			for (var n in e) this.options[n] = e[n];
			this.translateZ = this.options.HWCompositing && i.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = i.hasTransition && this.options.useTransition, this.options.useTransform = i.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? i.ease[this.options.bounceEasing] || i.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
		}
		var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
				window.setTimeout(t, 1e3 / 60)
			},
			i = function() {
				function t(t) {
					return n === !1 ? !1 : "" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1)
				}
				var e = {},
					i = document.createElement("div").style,
					n = function() {
						for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, a = e.length; a > n; n++)
							if (t = e[n] + "ransform", t in i) return e[n].substr(0, e[n].length - 1);
						return !1
					}();
				e.getTime = Date.now || function() {
					return (new Date).getTime()
				}, e.extend = function(t, e) {
					for (var i in e) t[i] = e[i]
				}, e.addEvent = function(t, e, i, n) {
					t.addEventListener(e, i, !!n)
				}, e.removeEvent = function(t, e, i, n) {
					t.removeEventListener(e, i, !!n)
				}, e.prefixPointerEvent = function(t) {
					return window.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
				}, e.momentum = function(t, e, i, n, a, r) {
					var o, s, l = t - e,
						c = Math.abs(l) / i;
					return r = void 0 === r ? 6e-4 : r, o = t + c * c / (2 * r) * (0 > l ? -1 : 1), s = c / r, n > o ? (o = a ? n - a / 2.5 * (c / 8) : n, l = Math.abs(o - t), s = l / c) : o > 0 && (o = a ? a / 2.5 * (c / 8) : 0, l = Math.abs(t) + o, s = l / c), {
						destination: Math.round(o),
						duration: s
					}
				};
				var a = t("transform");
				return e.extend(e, {
					hasTransform: a !== !1,
					hasPerspective: t("perspective") in i,
					hasTouch: "ontouchstart" in window,
					hasPointer: window.PointerEvent || window.MSPointerEvent,
					hasTransition: t("transition") in i
				}), e.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion), e.extend(e.style = {}, {
					transform: a,
					transitionTimingFunction: t("transitionTimingFunction"),
					transitionDuration: t("transitionDuration"),
					transitionDelay: t("transitionDelay"),
					transformOrigin: t("transformOrigin")
				}), e.hasClass = function(t, e) {
					var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
					return i.test(t.className)
				}, e.addClass = function(t, i) {
					if (!e.hasClass(t, i)) {
						var n = t.className.split(" ");
						n.push(i), t.className = n.join(" ")
					}
				}, e.removeClass = function(t, i) {
					if (e.hasClass(t, i)) {
						var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
						t.className = t.className.replace(n, " ")
					}
				}, e.offset = function(t) {
					for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
					return {
						left: e,
						top: i
					}
				}, e.preventDefaultException = function(t, e) {
					for (var i in e)
						if (e[i].test(t[i])) return !0;
					return !1
				}, e.extend(e.eventType = {}, {
					touchstart: 1,
					touchmove: 1,
					touchend: 1,
					mousedown: 2,
					mousemove: 2,
					mouseup: 2,
					pointerdown: 3,
					pointermove: 3,
					pointerup: 3,
					MSPointerDown: 3,
					MSPointerMove: 3,
					MSPointerUp: 3
				}), e.extend(e.ease = {}, {
					quadratic: {
						style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						fn: function(t) {
							return t * (2 - t)
						}
					},
					circular: {
						style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
						fn: function(t) {
							return Math.sqrt(1 - --t * t)
						}
					},
					back: {
						style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
						fn: function(t) {
							var e = 4;
							return (t -= 1) * t * ((e + 1) * t + e) + 1
						}
					},
					bounce: {
						style: "",
						fn: function(t) {
							return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
						}
					},
					elastic: {
						style: "",
						fn: function(t) {
							var e = .22,
								i = .4;
							return 0 === t ? 0 : 1 == t ? 1 : i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e / 4) * Math.PI / e) + 1
						}
					}
				}), e.tap = function(t, e) {
					var i = document.createEvent("Event");
					i.initEvent(e, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i)
				}, e.click = function(t) {
					var e, i = t.target;
					/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = document.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, i.dispatchEvent(e))
				}, e
			}();
		return t.prototype = {
			version: "5.1.3",
			_init: function() {
				this._initEvents()
			},
			destroy: function() {
				this._initEvents(!0), this._execEvent("destroy")
			},
			_transitionEnd: function(t) {
				t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
			},
			_start: function(t) {
				if (!(1 != i.eventType[t.type] && 0 !== t.button || !this.enabled || this.initiated && i.eventType[t.type] !== this.initiated)) {
					!this.options.preventDefault || i.isBadAndroid || i.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
					var e, n = t.touches ? t.touches[0] : t;
					this.initiated = i.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._noneTransition(), this.startTime = i.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, e = this.getComputedPosition(), this._translate(Math.round(e.x), Math.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
				}
			},
			_move: function(t) {
				if (this.enabled && i.eventType[t.type] === this.initiated) {
					this.options.preventDefault && t.preventDefault();
					var e, n, a, r, o = t.touches ? t.touches[0] : t,
						s = o.pageX - this.pointX,
						l = o.pageY - this.pointY,
						c = i.getTime();
					if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += s, this.distY += l, a = Math.abs(this.distX), r = Math.abs(this.distY), !(c - this.endTime > 300 && 10 > a && 10 > r)) {
						if (this.directionLocked || this.options.freeScroll || (this.directionLocked = a > r + this.options.directionLockThreshold ? "h" : r >= a + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
							if ("vertical" == this.options.eventPassthrough) t.preventDefault();
							else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
							l = 0
						} else if ("v" == this.directionLocked) {
							if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
							else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
							s = 0
						}
						s = this.hasHorizontalScroll ? s : 0, l = this.hasVerticalScroll ? l : 0, e = this.x + s, n = this.y + l, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + s / 3 : e > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + l / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = s > 0 ? -1 : 0 > s ? 1 : 0, this.directionY = l > 0 ? -1 : 0 > l ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, n), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
					}
				}
			},
			_end: function(t) {
				if (this.enabled && i.eventType[t.type] === this.initiated) {
					this.options.preventDefault && !i.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
					var e, n, a = (t.changedTouches ? t.changedTouches[0] : t, i.getTime() - this.startTime),
						r = Math.round(this.x),
						o = Math.round(this.y),
						s = Math.abs(r - this.startX),
						l = Math.abs(o - this.startY),
						c = 0,
						d = "";
					if (this.isInTransition = 0, this.initiated = 0, this.endTime = i.getTime(), !this.resetPosition(this.options.bounceTime)) return this.scrollTo(r, o), this.moved ? this._events.flick && 200 > a && 100 > s && 100 > l ? void this._execEvent("flick") : (this.options.momentum && 300 > a && (e = this.hasHorizontalScroll ? i.momentum(this.x, this.startX, a, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
						destination: r,
						duration: 0
					}, n = this.hasVerticalScroll ? i.momentum(this.y, this.startY, a, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
						destination: o,
						duration: 0
					}, r = e.destination, o = n.destination, c = Math.max(e.duration, n.duration), this.isInTransition = 1), r != this.x || o != this.y ? ((r > 0 || r < this.maxScrollX || o > 0 || o < this.maxScrollY) && (d = i.ease.quadratic), void this.scrollTo(r, o, c, d)) : void this._execEvent("scrollEnd")) : (this.options.tap && i.tap(t, this.options.tap), this.options.click && i.click(t), void this._execEvent("scrollCancel", t))
				}
			},
			_resize: function() {
				var t = this;
				clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
					t.refresh()
				}, this.options.resizePolling)
			},
			resetPosition: function(t) {
				var e = this.x,
					i = this.y;
				return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), e == this.x && i == this.y ? !1 : (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
			},
			disable: function() {
				this.enabled = !1
			},
			enable: function() {
				this.enabled = !0
			},
			refresh: function() {
				this.wrapper.offsetHeight;
				this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = i.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
			},
			on: function(t, e) {
				this._events[t] || (this._events[t] = []), this._events[t].push(e)
			},
			off: function(t, e) {
				if (this._events[t]) {
					var i = this._events[t].indexOf(e);
					i > -1 && this._events[t].splice(i, 1)
				}
			},
			_execEvent: function(t) {
				if (this._events[t]) {
					var e = 0,
						i = this._events[t].length;
					if (i)
						for (; i > e; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
				}
			},
			scrollBy: function(t, e, i, n) {
				t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
			},
			scrollTo: function(t, e, n, a, r) {
				a = a || i.ease.circular, this.isInTransition = this.options.useTransition && n > 0, !n || this.options.useTransition && a.style ? (this._transitionTimingFunction(a.style), this._transitionTime(n), this._translate(t, e)) : this._animate(t, e, n, a.fn, r)
			},
			scrollToElement: function(t, e, n, a, r, o) {
				if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
					var s = i.offset(t);
					s.left -= this.wrapperOffset.left, s.top -= this.wrapperOffset.top, n === !0 && (n = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), a === !0 && (a = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), s.left -= n || 0, s.top -= a || 0, s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX : s.left, s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY : s.top, e = void 0 === e || null === e || "auto" === e ? Math.max(Math.abs(this.x - s.left), Math.abs(this.y - s.top)) : e, this.scrollTo(s.left, s.top, e, r, o)
				}
			},
			scrollToElement2: function(t, e, i, n, a) {
				this.scrollToElement(t, e, i, n, a, !1)
			},
			_transitionTime: function(t) {
				t = t || 0, this.scrollerStyle[i.style.transitionDuration] = t + "ms", !t && i.isBadAndroid && (this.scrollerStyle[i.style.transitionDuration] = "0.001s")
			},
			_noneTransition: function() {
				this.scrollerStyle[i.style.transitionDuration] = null, this.scrollerStyle[i.style.transitionTimingFunction] = null
			},
			_transitionTimingFunction: function(t) {
				this.scrollerStyle[i.style.transitionTimingFunction] = t
			},
			_translate: function(t, e) {
				this.options.useTransform ? this.scrollerStyle[i.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = Math.round(t), e = Math.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e
			},
			_initEvents: function(t) {
				var e = t ? i.removeEvent : i.addEvent,
					n = this.options.bindToWrapper ? this.wrapper : window;
				e(window, "orientationchange", this), e(window, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), $.os.phone || (e(this.wrapper, "mousedown", this), e(n, "mousemove", this), e(n, "mousecancel", this), e(n, "mouseup", this)), i.hasPointer && !this.options.disablePointer && (e(this.wrapper, i.prefixPointerEvent("pointerdown"), this), e(n, i.prefixPointerEvent("pointermove"), this), e(n, i.prefixPointerEvent("pointercancel"), this), e(n, i.prefixPointerEvent("pointerup"), this)), i.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(n, "touchmove", this), e(n, "touchcancel", this), e(n, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
			},
			getComputedPosition: function() {
				var t, e, n = window.getComputedStyle(this.scroller, null);
				return this.options.useTransform ? (n = n[i.style.transform].split(")")[0].split(", "), t = +(n[12] || n[4]), e = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""), e = +n.top.replace(/[^-\d.]/g, "")), {
					x: t,
					y: e
				}
			},
			_animate: function(t, n, a, r, o) {
				function s() {
					var h, f, m, g = i.getTime();
					return g >= u ? (l.isAnimating = !1, l._translate(t, n), void(o === !1 || l.resetPosition(l.options.bounceTime) || l._execEvent("scrollEnd"))) : (g = (g - p) / a, m = r(g), h = (t - c) * m + c, f = (n - d) * m + d, l._translate(h, f), void(l.isAnimating && e(s)))
				}
				var l = this,
					c = this.x,
					d = this.y,
					p = i.getTime(),
					u = p + a;
				this.isAnimating = !0, s()
			},
			handleEvent: function(t) {
				switch (t.type) {
					case "touchstart":
					case "pointerdown":
					case "MSPointerDown":
					case "mousedown":
						this._start(t);
						break;
					case "touchmove":
					case "pointermove":
					case "MSPointerMove":
					case "mousemove":
						this._move(t);
						break;
					case "touchend":
					case "pointerup":
					case "MSPointerUp":
					case "mouseup":
					case "touchcancel":
					case "pointercancel":
					case "MSPointerCancel":
					case "mousecancel":
						this._end(t);
						break;
					case "orientationchange":
					case "resize":
						this._resize();
						break;
					case "transitionend":
					case "webkitTransitionEnd":
					case "oTransitionEnd":
					case "MSTransitionEnd":
						this._transitionEnd(t);
						break;
					case "wheel":
					case "DOMMouseScroll":
					case "mousewheel":
						this._wheel(t);
						break;
					case "keydown":
						this._key(t);
						break;
					case "click":
						t._constructed || (t.preventDefault(), t.stopPropagation())
				}
			}
		}, t.utils = i, t
	}), define("controller/index", ["textindexHtml", "Footer", "textindexQuanHtml", "PageView", "UISlideshow2", "user", "session", "local", "geolocation", "carModel", "dateUtil", "VinScanner", "IScroll"], function(t, e, i, n, a, r, o, s, l, c, d, p, u) {
		function h() {
			if (!$.os.lechebang) return !0;
			if ($.os.ios) {
				if (app.nativeApi.has("image.picker")) return !0;
				app.alert({
					msg: "请下载APP最新版本，体验事故维修，在线技师新功能",
					btns: [{
						text: "取消"
					}, {
						text: "下载",
						callback: function() {
							location.href = "https://appsto.re/cn/-Qgr7.i"
						}
					}]
				})
			} else {
				if (app.nativeApi.has("image.picker")) return !0;
				app.alert("即将上线,敬请期待...")
			}
		}

		function f(t) {
			$(".hline-item").removeClass("third"), $(".hline-item").removeClass("active").eq(t + 1).addClass("active"), $(".hline-item").eq(t + 2).addClass("third")
		}
		var m = n.extend({
			options: {},
			events: {
				"click .js-go": "goAction",
				"click .js-close": "closeAction",
				"click .js-scan": function() {
					p.callCamera()
				},
				"click .js-accident": "accidentAction",
				"click .js-zhiliao": "zhiliaoAction",
				"click .js-more-brand": "showMoreBrandsAction",
				"click .js-go-to": "goToAction",
				"click .js-brand-two": function(t) {
					var e = $(t.currentTarget),
						i = e.data("url"),
						n = e.data("id"),
						a = e.find("img").attr("src"),
						r = {
							brandId: n,
							imgUrl: a
						};
					o.set("new_car", r), this.query.id = n, app.goTo(i + "?" + $.param(this.query))
				},
				"click .js-notice-close": "noticeCloseAction",
				"click .js-select": "selectAction"
			},
			onCreate: function() {
				this.renderHeader(), r.isLogin || (this.car = s._get("car")), this.renderFooter(), this.renaderQuan()
			},
			ajax: function() {
				this.geolocation = l.getPostion();
				var t = c.getAdByCityAndPosition(),
					e = {};
				e.cityId = this.geolocation.cityId, this.car && this.car.brandTypeId && (e.brandTypeId = this.car.brandTypeId, e.mileage = this.car.mileage);
				var i = c.getHomeData(e);
				if (r.isLogin) {
					var n = c.myDefaultCar();
					return [t, i, n]
				}
				return [t, i]
			},
			onShow: function(e, i, n) {
				this.position = e ? e : null;
				var a = o._get("lcb_geolocation");
				a ? this.cityChangeAction(a) : l.once("done", _.bind(this.cityChangeAction, this));
				var c = document.querySelector("body");
				if (this.screenWidth = c.getBoundingClientRect() ? c.getBoundingClientRect().width : document.documentElement.width, this.imgs = [], null !== this.position && 0 !== this.position.length)
					for (var d = 0; d < this.position.length; d++) this.imgs.push({
						src: this.position[d].iphoneImgUrl,
						js_url: this.position[d].targetUrl
					});
				else this.imgs.push({
					src: config.imgCdnRoot + "index/banner.png"
				});
				i.maintenanceHistory || (i.maintenanceHistory = {
					isCanUse: 1
				}), i.brandsMinPrice || (i.brandsMinPrice = []), this.model = i, n && n.brandTypeId && (this.car = n, s._set("car", n));
				var p = !1;
				p = this.car && this.car.brandTypeId ? !0 : !1;
				var u = this.template(t, {
					user: r,
					appConfig: o.get("config"),
					city: this.geolocation.addressComponent.city,
					isSpread: s.get("spread_info"),
					imgs: this.imgs,
					homeData: i,
					hasCar: p,
					car: this.car
				});
				if (this.$(".js-page-wrap").html(u), this.slideshowAction(), p && i.maintenanceHistory && i.maintenanceHistory.isCanUse && this.model.maintenanceHistory.mileages) {
					var h = 0;
					this.model.maintenanceHistory.histories && (h = this.model.maintenanceHistory.histories.length), this.iscrollDiv(0, h + this.model.maintenanceHistory.mileages.length, 0)
				}
				this.renderWeizhangPoint()
			},
			renderHeader: function() {
				var t = {
					left: {
						text: '<span class="pub-header-icon header-city js-city">' + l.getPostion().addressComponent.city + "</span>",
						callback: function() {
							app.goTo("city/index")
						}
					},
					center: {
						text: "乐车邦"
					}
				};
				this.header.option(t)
			},
			renderFooter: function() {
				this.$el.html('<div class="js-page-wrap" style="height:100%;"></div>');
				new e({
					ctrlName: this.ctrlName,
					appendElement: this.el
				})
			},
			renderWeizhangPoint: function() {
				if (r.isLogin) {
					var t = c.hasNewViolation();
					t.success = function(t) {
						t && $(".js-weizhang-point").show()
					}, app.ajax(t)
				}
			},
			cityChangeAction: function(t) {
				if (!o.get("city_change") && app.currentPage === this) {
					var e = this;
					t.cityId != this.geolocation.cityId && (l.hasIn(t.cityId) ? app.alert({
						msg: "当前定位您在" + t.addressComponent.city + "，是否帮您进行城市切换？",
						btns: [{
							text: "取消",
							callback: function() {
								this.hide(), o.set("city_change", 1)
							}
						}, {
							text: "切换",
							callback: function() {
								this.hide(), o.set("city_change", 1), l.setPostion(t.addressComponent.city), e.renderHeader(), e.reload()
							}
						}]
					}) : (app.hint({
						msg: "当前定位您在" + t.addressComponent.city + "，该城市暂未开通服务，帮您切换到" + this.geolocation.addressComponent.city + "。",
						timeout: 4e3,
						width: 200
					}), o.set("city_change", 1)))
				}
			},
			slideshowAction: function() {
				this.slide = new a({
					el: this.$(".pub-slide")[0],
					wrapperClass: "swipe-wrapper",
					itemClass: "swipe-item",
					autoPlay: !0,
					navClass: "swipe-nav-item",
					events: {
						"click .js-url": this.testAction
					}
				}), this.slide.$(".swipe-wrapper").css({
					height: "1.53rem"
				})
			},
			testAction: function(t) {
				var e = this.$(t.currentTarget).attr("data-target-url");
				e && app.goTo(e)
			},
			goAction: function(t) {
				var e = $(t.currentTarget).attr("data-url");
				"car/info" == e && (this.car && this.car.brandTypeId || (e = "car/brand")), s._set("car", this.car), app.goTo(e)
			},
			closeAction: function() {
				this.$(".js-download").remove();
				var t = o.get("config") || {};
				t.clickDownload = 1, o.set("config", t)
			},
			accidentAction: function() {
				h() && app.goTo("/accident/")
			},
			weizhangAction: function() {
				app.goTo("/weizhang/")
			},
			zhiliaoAction: function() {
				if (h()) {
					r.isLogin ? this.goToChezhiliao() : app.alert({
						title: "在线技师",
						msgCenter: !1,
						msg: '<div class="zhiliao-item"><span class="zhiliao-icon" style="background-position:0 -37px;"></span>专业维修技师</div><div class="zhiliao-item"><span class="zhiliao-icon"  style="background-position:-36px 0;"></span>一对一在线指导</div><div class="zhiliao-item"><span class="zhiliao-icon"></span>及时排查问题</div><div></div>',
						btns: [{
							text: "取消"
						}, {
							text: "登录",
							callback: function() {
								this.hide(), app.goTo("login")
							}
						}]
					})
				}
			},
			goToChezhiliao: function() {
				c.getChezhiliaoUrl(function(t) {
					app.goTo(t)
				})
			},
			iscrollDiv: function(t, e) {
				var i = document.body.clientWidth,
					n = this,
					a = 0;
				$(".hline-item").css("width", i / 3);
				var r = (e + 2) * $(".hline-item").width();
				$.os.android && /M0\d{2}\s+/.test(navigator.userAgent) ? this.$(".hline-items-wrap").css("width", r + 6) : this.$(".hline-items-wrap").css("width", r + 1);
				var o = 0;
				_.each(this.model.maintenanceHistory.mileages, function(t, e) {
					1 == t.isCurrent && (o = e)
				});
				var s = i / 3,
					l = 0;
				this.model.maintenanceHistory.histories && (l = this.model.maintenanceHistory.histories.length), o += l, a = -o * s, f(o);
				var c = !1;
				($.os.ios || $.os.android && parseInt($.os.version.substr(0, 1)) >= 4) && (c = !0);
				var d = new u("#scrollWrap", {
					scrollX: !0,
					scrollY: !1,
					scrollbars: !1,
					momentum: c,
					tap: !0,
					click: !1,
					eventPassthrough: !0,
					startX: a
				});
				n.$(".js-hline-item").on("tap", function() {
					$(this).hasClass("active") ? n.goToAction() : $(this).hasClass("third") ? ($(this).prev().removeClass("active"), $(this).next().addClass("third"), $(this).removeClass("third").addClass("active"), d.scrollToElement2($(this).prev()[0], 400)) : (n.$(".hline-item").removeClass("third"), $(this).addClass("active"), $(this).next().removeClass("active").addClass("third"), d.scrollToElement2($(this).prev()[0], 400))
				}), d.on("scrollEnd", function() {
					var t = document.body.clientWidth,
						i = Math.round(t / 3),
						a = Math.abs(this.x) / i;
					if (a = -1 == this.directionX ? Math.floor(a) : Math.ceil(1 == this.directionX ? a : a), e - 1 >= a) {
						f(a), this.scrollToElement(n.$(".hline-item").eq(a)[0], 0);
						var r = $("li.hline-item.active").data("id")
					} else a = e - 1, f(a), this.scrollToElement(n.$(".hline-item").eq(a)[0], 0);
					$(".taocan-btn").html(r ? "查看保养订单 &gt;" : '查看保养套餐<i class="iconfont" style="font-size: 0.18rem;line-height: 0.26rem;">&#xe623;</i> ')
				})
			},
			showMoreBrandsAction: function(t) {
				var e = $(t.currentTarget);
				if (e.hasClass("expanded")) e.removeClass("expanded"), this.$(".brands-more").hide(), this.$(".js-more-brand").find("span").html("更多品牌");
				else {
					e.addClass("expanded");
					for (var i = this.$(".js-more-imgs").size(), n = 0; i > n; n++) {
						var a = this.$(".js-more-imgs").eq(n).data("src");
						this.$(".js-more-imgs").eq(n).attr("src", a)
					}
					this.$(".brands-more").show(), this.$(".js-more-brand").find("span").html("收起品牌"), window.scrollTo(0, $(".brands-content").offset().top - $(".header-inner").offset().height)
				}
			},
			goToAction: function() {
				function t(t) {
					t ? (e.buyDate = t.buyDate, e.mileage = t.mileage) : (e.buyDate = e.buyDate, e.mileage = n), s._set("car", e);
					var i = "car/maintenance";
					app.goTo(i)
				}
				var e = this.car,
					i = $("li.hline-item.active").data("id");
				if (i) app.goTo("order/detail?id=" + i);
				else {
					var n = this.$("li.hline-item.active").data("mileage");
					this.car.mileage = n, r.isLogin ? e.id ? c.updateMyCar({
						id: e.id,
						mileage: n
					}, t) : c.saveMyCar({
						brandTypeId: e.brandTypeId,
						mileage: n,
						buyDate: e.buyDate
					}, function(i) {
						_.extend(e, i), t()
					}) : t()
				}
			},
			noticeCloseAction: function() {
				this.$(".notice").remove();
				var t = o.get("config") || {};
				t.clickNotice = 1, o.set("config", t)
			},
			selectAction: function() {
				r.isLogin ? app.goTo("car/select") : (o.remove("new_car"), app.goTo("car/brand"))
			},
			maintenancePrice: function() {
				function t(t) {
					var e = n.$(".js-lcb-price"),
						i = n.$(".js-hline-price-rel");
					_.each(t, function(t, n) {
						e.eq(n).html(t.lcbPrice / 100), i.eq(n).show()
					})
				}

				function e() {
					t(i)
				}
				var i = this.model.maintenanceHistory.mileages,
					n = this;
				if (r.isLogin) {
					var a = [];
					_.each(i, function(t) {
						a.push({
							planId: t.planId,
							lcbPrice: t.lcbPrice,
							itemIds: t.itemIds
						})
					}), c.getHomeDataVoucher({
						brandTypeId: this.car.brandTypeId,
						planHomeInfos: a
					}, t, e)
				} else t(i)
			},
			renaderQuan: function() {
				function t() {
					s.remove(), o.set("index_quan", 1)
				}
				var e = this.query.fsName,
					n = this.query.fsNumber,
					a = this.query.fsMobile;
				if (n && !o.get("index_quan")) {
					var r = this.template(i, {
							num: n,
							storeName: e
						}),
						s = $("<div>").html(r);
					s.on("click", ".index-quan-close", t), s.on("click", ".index-quan-btn", function() {
						t();
						var e = "user/discount";
						a && (e += "?mobile=" + a), app.goTo(e)
					}), $("body").append(s), this.renaderQuan = _.noop
				}
			}
		});
		return m
	}), define("controller/duijie/index", ["PageView", "carModel", "user", "local", "geolocation"], function(t, e, i, n, a) {
		var r = t.extend({
			ajax: function() {
				return i.isLogin ? e.myDefaultCar() : void 0
			},
			onShow: function(t) {
				this.car = i.isLogin ? t : n._get("car"), this.query.cityName && a.setPostion((this.query.cityName + "").replace("市", ""));
				var e;
				e = this.car ? "car/info" : "car/brand", app.goTo(e, {
					replace: !0,
					animate: !1
				})
			}
		});
		return r
	}), define("textservicesHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				__p += '<style>.shop-box{margin:10px;padding:10px;background:#fff;border-radius:4px;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,.2)}.shop-top{position:relative;height:75px}.shop-top::after{content:"";position:absolute;right:15px;top:50%;display:inline-block;vertical-align:middle;width:6px;height:6px;border-top:0;border-right:0;border-left:1px solid #999;border-bottom:1px solid #999;-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg);-webkit-transform:translate(0,-50%) rotate(-135deg);-ms-transform:translate(0,-50%) rotate(-135deg);transform:translate(0,-50%) rotate(-135deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out}.shop-top img{float:left;width:75px;height:75px;margin-right:10px;border-radius:5px}.shop-top h5{font-size:15px;font-weight:400;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.service-list .s{position:absolute;top:25px;right:10px;color:#ff7d13}.service-list .shop-top::after{display:none}.icon-box .num{color:#07cdd0}.icon-box .tag{padding:1px 2px;border-radius:3px;border:1px solid #ffa36d;color:#ff7d13;font-size:12px}.shop-service-name{font-size:12px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.shop-info{font-size:12px;padding-right:30px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.shop-info span{font-size:12px}.fiter-bar{background-color:#fbfbfb;z-index:10}.fiter-bar::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #dfdfdf;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.fiter-bar .cat{width:100%;font-size:0;overflow:hidden;padding:7px 0}.fiter-bar .cat li{float:left;width:33.3333333333333%;font-size:15px;color:#666;text-align:center;line-height:30px;border-right:1px solid #d7d7db;-webkit-box-sizing:border-box;box-sizing:border-box}.fiter-bar .cat li:last-child{border-right:0}.fiter-bar .cat li em{display:inline-block;width:6px;height:6px;margin-left:8px;border-bottom:1px solid #adadad;border-left:1px solid #adadad;content:"";vertical-align:middle;-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;-webkit-transform:rotate(-45deg);-webkit-transform:translate(0,-50%) rotate(-45deg);transform:rotate(-45deg);transform:translate(0,-50%) rotate(-45deg);vertical-align:middle}.fiter-bar .cat li.active em{-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;-webkit-transform:rotate(-225deg);-webkit-transform:translate(0,-50%) rotate(-225deg);transform:rotate(-225deg);transform:translate(0,-50%) rotate(-225deg);margin-top:8px}.fiter-bar .cat li i{display:none}.fiter-bar .cat li.active{position:relative}.fiter-bar .cat li.active i{position:absolute;left:50%;margin-left:-8px;margin-top:-8px;display:block;width:16px;height:8px;background:url(https://img01.lechebangstatic.com/webapp/icon-arrow.png);background-size:100% 100%}.selector-filter{position:absolute;z-index:210;top:44px;left:0;right:0;width:100%;font-size:13px;background-color:#fff;color:#666}.selector-filter .main{overflow-y:hidden;float:left;width:100%}.selector-filter .main.second-menu{overflow-y:hidden;float:left;width:40%;height:280px}.selector-filter .main .brand-list-box li.active{border-left:2px solid #37d1c3;background-color:#f7f7f7;padding-left:13px}.selector-filter .sub{overflow-y:hidden;float:left;width:60%}.selector-filter .sub .brand-list-box li{background-color:#f7f7f7}.selector-filter .sub .brand-list-box li.active{color:#37d1c3}.selector-filter .sub .brand-list-box li.active::before{border-bottom-color:#37d1c3}.selector-filter .sub .hd{background-color:#fdfdfd}.selector-filter .menu{max-height:280px;overflow-y:hidden}.selector-filter .menu .brand-list-box li.active{color:#37d1c3}.selector-filter .menu .brand-list-box li.active::before{border-bottom-color:#37d1c3}.brand-list-box .hd{position:relative;padding:0 10px;background-color:#efeff4;font-weight:700;font-weight:400;font-size:13px;line-height:20px;color:#666}.sub .brand-list-box .brand-item{padding-left:10px;background-color:#f7f7f7}.brand-list-box .brand-item{background-color:#fff}.brand-list-box li{line-height:41px;padding:5px 10px 5px 15px;position:relative;display:block;cursor:pointer;font-size:15px}.brand-list-box li:last-child{border-bottom:0}.brand-list-box li:last-child::before{display:none}.brand-list-box li::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #e7e7e7;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.brand-list-box li em{display:inline-block;width:33px;height:33px;text-align:center;overflow:hidden;vertical-align:middle;font-style:normal;margin-right:10px}.brand-list-box li img{height:33px;vertical-align:text-bottom}.brand-list-center{text-align:center}.icon-box .store-point{color:#07cdd0;font-size:18px}.icon-box .store-point-unit{color:#07cdd0;font-size:12px}</style><nav class="page-top fiter-bar"><ul class=cat><li class=js-filter data-target=brand>';
				var firstId = 0;
				switch (query.brand && (firstId = query.brand.split(",")[0]), firstId ? _.find(brands, function(t) {
					for (var e = 0; e < t.results.length; e++)
						if (t.results[e].id == firstId) return print(t.results[e].brandName), !0
				}) : print("品牌"), __p += "<em></em></li><li class=js-filter data-target=location>", query.locationId ? _.find(locations, function(t) {
					return t.id == query.locationId ? (print(t.name), !0) : void 0
				}) : print("区域"), __p += "<em></em></li><li class=js-filter data-target=sort>", query.sort) {
					case "discount":
						print("折扣");
						break;
					case "distance":
						print("距离");
						break;
					default:
						print("推荐排序")
				}
				__p += '<em></em></li></ul><div class="selector-filter js-brand-box" style=display:none><div class=menu><div class=main><div class=brand-list-box><ul class=brand-item><li class="js-first', firstId || print(" active"), __p += '">品牌不限</li></ul>', _.each(brands, function(t) {
					__p += "<div class=hd>" + (null == (__t = t.pinYin) ? "" : __t) + "</div><div class=bd><ul class=brand-item>", _.each(t.results, function(t) {
						__p += '<li class="js-first', t.id == firstId && print(" active"), __p += '" data-id="' + (null == (__t = t.id) ? "" : __t) + '"><em><img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '"></em><span>' + (null == (__t = t.brandName) ? "" : __t) + "</span></li>"
					}), __p += "</ul></div>"
				}), __p += '</div></div><div class=sub></div></div></div><div class="selector-filter js-location-box" style=display:none><div class=menu><div class="brand-list-box brand-list-center"><div class=bd><ul class=brand-item><li class="', query.locationId || print("active"), __p += '"><span>不限</span></li>', _.each(locations, function(t) {
					__p += '<li data-id="' + (null == (__t = t.id) ? "" : __t) + '" class="', query.locationId == t.id && print("active"), __p += '"><span>' + (null == (__t = t.name) ? "" : __t) + "</span></li>"
				}), __p += '</ul></div></div></div></div><div class="selector-filter js-sort-box" style=display:none><div class=menu><div class="brand-list-box brand-list-center"><div class=bd><ul class=brand-item><li class="', query.sort || print("active"), __p += '"><span>推荐排序</span></li><li data-target=discount class="', "discount" == query.sort && print("active"), __p += '"><span>折扣&nbsp;低<i class=iconfont>&#xe61c;</i>高</span></li>', hasDistance && (__p += '<li data-target=distance class="', "distance" == query.sort && print("active"), __p += '"><span>距离&nbsp;近<i class=iconfont>&#xe61c;</i>远</span></li>'), __p += "</ul></div></div></div></div></nav><div class=page-content><div style=height:44px>&nbsp;</div>", service.length ? (__p += "\n", _.each(service, function(t) {
					__p += '<div class="shop-box service-list"><div class="shop-top js-shop" data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class=s>' + (null == (__t = t.discountValueMin) ? "" : __t) + "折起</div>", t.storeImages && t.storeImages.length && (__p += '<img data-src="' + (null == (__t = t.storeImages[0].imgUrl) ? "" : __t) + '" width=67 height=67 class=test2>'), __p += "<h5>" + (null == (__t = t.storeNickName) ? "" : __t) + "</h5><div class=icon-box>", t.overallScoreAvg && (__p += "<span class=store-point>" + (null == (__t = t.overallScoreAvg) ? "" : __t) + "</span><span class=store-point-unit>分</span>"), __p += "<i class=icon-wifi></i></div><div class=shop-service-name>服务厂商: " + (null == (__t = t.brandOfStore.join(",")) ? "" : __t) + "</div><div class=shop-info>" + (null == (__t = templateApi.distance(t.distance)) ? "" : __t) + (null == (__t = t.address) ? "" : __t) + "</div></div></div>"
				}), __p += "\n") : __p += "<div class=results-none>很抱歉，暂时没有店家。<br>建议您减少筛选条件试试</div>", __p += "<div style=height:64px></div></div>"
			}
			return __p
		}
	}), define("UILazyload", ["UIAbstract"], function(t) {
		var e = t.extend({
			_create: function() {
				var t = (_.throttle(_.bind(this._onScoll, this), 200), []),
					e = this.options.imgs;
				e.length && (e.each(function() {
					t.push($(this))
				}), this.imgs = t, this.pageView.on("scroll", _.bind(this._onScoll, this)), this._onScoll())
			},
			_onScoll: function() {
				for (var t = this.imgs, e = document.documentElement.clientHeight, i = 0, n = t.length; n > i; i++) {
					var a = t[i],
						r = a.attr("data-src"),
						o = a.offset().top;
					e > o && r && (a.attr("src", r), a.removeAttr("data-src"))
				}
			}
		});
		return e
	}), define("controller/services/index", ["textservicesHtml", "Footer", "PageView", "UILazyload", "geolocation", "carModel", "IScroll", "session"], function(t, e, i, n, a, r, o) {
		var s, l, c, d = i.extend({
			events: {
				"click .js-shop": "shopDetailAction",
				"click .js-filter": "filterAction"
			},
			onCreate: function() {
				this.header.option({
					left: !1,
					center: {
						text: "服务网点"
					},
					right: [{
						text: "商家加盟",
						callback: function() {
							app.goTo("services/join")
						}
					}]
				}), this.renderFooter()
			},
			ajax: function() {
				var t = a.getPostion(),
					e = {
						url: "shop/getServiceNetList",
						data: {
							cityId: t.cityId
						},
						session: !0,
						expires: "2M"
					};
				t.location ? (e.data.lat = t.location.lat, e.data.lon = t.location.lng, s = 1) : s = 0;
				var i = r.placeGetPlaceInfo(),
					n = r.firstLevel();
				return [e, i, n]
			},
			onShow: function(e, i, a) {
				var r = [];
				_.each(e.storeDetailResults, function(t) {
					for (var e = 0, n = i.length; n > e; e++) {
						var a = i[e];
						if (t.loacationId == a.id) {
							var o = _.find(r, function(e) {
								return e.id == t.loacationId
							});
							o || r.push(a);
							break
						}
					}
				}), this.service = e.storeDetailResults, this.locations = r, this.brands = a, this.loading && this.loading.hide();
				var o = this.template(t, {
					service: this.filterData(e.storeDetailResults),
					query: this.query,
					hasDistance: s,
					locations: r,
					brands: a
				});
				this.$(".js-page-wrap").html(o);
				var l = document.body.offsetHeight - 195;
				this.$(".selector-filter .menu").css("max-height", l), this.$(".menu .main, .menu .sub").css("height", l), this.addOnScroll(), new n({
					imgs: this.$(".js-shop img")
				})
			},
			renderFooter: function() {
				this.$el.html('<div class="js-page-wrap" style="height:100%;"></div>');
				new e({
					ctrlName: this.ctrlName,
					appendElement: this.el
				})
			},
			filterData: function(t) {
				var e = this.query.locationId,
					i = this.query.sort;
				this.query.locationId && (t = _.filter(t, function(t) {
					return t.loacationId == e
				})), "distance" == i ? t = _.sortBy(t, "distance") : "discount" == i && (t = _.sortBy(t, "discountValueMin"));
				var n = this.query.brand;
				return n && (n = parseInt(n.split(",")[1], 10), t = _.filter(t, function(t) {
					return -1 != t.carBrandTypeIds.indexOf(n)
				})), t
			},
			shopDetailAction: function(t) {
				var e = $(t.currentTarget).attr("data-id");
				app.goTo("services/detail?id=" + e)
			},
			filterAction: function(t) {
				var e = $(t.currentTarget),
					i = e.data("target"),
					n = this;
				this.loading || (this.loading = $('<div class="pub-overlay-loading" style="z-index:4;top:88px;"></div>').appendTo(this.el), this.loading.on("click", function() {
					n.$(".js-filter.active").removeClass("active"), n.$(".selector-filter").hide(), n.loading.hide()
				})), this.loading.show(), "brand" == i ? this.filterBrand() : "location" == i ? this.filterLocation() : this.filterSort();
				var a = e.hasClass("active");
				this.$(".js-filter").removeClass("active"), a ? this.loading.hide() : e.addClass("active")
			},
			filterBrand: function() {
				function t(t) {
					e.find(".main").addClass("second-menu"), e.find(".active").removeClass("active");
					var n = $(t.currentTarget).addClass("active"),
						a = n.data("id");
					if (!a) return delete i.query.brand, void i.reload();
					var s = r.secondLevel(a),
						l = e.find(".sub");
					s.success = function(t) {
						var n = '<div class="brand-list-box">';
						_.each(t, function(t) {
							var e = '<div class="hd">' + t.producerName + '</div><div class="bd"><ul class="brand-item" data-id="' + t.id + '">';
							_.each(t.brandProduceCar, function(t) {
								e += '<li class="js-second" data-id="' + t.id + '"><span>' + t.carName + "</span></li>"
							}), e += "</ul></div>", n += e
						}), n += "</div>", l.html(n);
						var a = i.query.brand;
						a && (a = a.split(",")[2], e.find('[data-id="' + a + '"]').addClass("active")), new o(l[0], {
							tap: !0
						})
					}, app.ajax(s)
				}
				var e = this.$(".js-brand-box"),
					i = this;
				if ("none" == e.css("display")) {
					if (this.$(".selector-filter").hide(), e.data("done")) return e.css("display", "block"), void l.refresh();
					e.on("tap", ".js-first", t), e.on("tap", ".js-second", function(t) {
						var n = $(t.currentTarget),
							a = e.find(".js-first.active").data("id"),
							r = n.parent().data("id");
						i.reload({
							brand: a + "," + r + "," + n.data("id")
						})
					}), e.css("display", "block").attr("data-done", 1), l = new o(e.find(".main")[0], {
						tap: !0
					})
				} else e.css("display", "none")
			},
			filterLocation: function() {
				var t = this.$(".js-location-box"),
					e = this;
				if ("none" == t.css("display")) {
					if (this.$(".selector-filter").hide(), t.data("done")) return t.css("display", "block"), void c.refresh();
					t.on("tap", "li", function(t) {
						var i = $(t.currentTarget).data("id");
						e.reload({
							locationId: i
						})
					}), t.css("display", "block").attr("data-done", 1), c = new o(t.find(".menu")[0], {
						tap: !0
					})
				} else t.css("display", "none")
			},
			filterSort: function() {
				var t = this.$(".js-sort-box"),
					e = this;
				if ("none" == t.css("display")) {
					if (this.$(".selector-filter").hide(), t.css("display", "block"), t.data("done")) return;
					t.on("click", "li", function(t) {
						var i = $(t.currentTarget).data("target");
						e.reload({
							sort: i
						})
					})
				} else t.css("display", "none")
			}
		});
		return d
	}), define("textservicesDetailHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				if (__p += '<style>.shop-box{margin:10px;padding:10px;background:#fff;border-radius:4px;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2)}.service-bom{padding:10px;font-size:13px;background:rgba(255,255,255,0.9);text-align:center;max-height:99px}.service-bom .btn-primary{margin:0}.shop-carlist{color:#666;margin:10px 0;padding:10px 10px 10px 16px;font-size:12px;background-color:#fff;border-bottom:1px solid rgba(225, 225, 224, 0.8)}.shop-carlist h3{font-size:12px}.shop-carlist span{padding-right:10px;white-space:nowrap}.shop-detail-intro .img-box{position:absolute;right:20px;top:10px;width:70px}.shop-detail-intro .img-box img{width:70px;height:70px;border-radius:5px}.shop-detail-intro .img-box span{position:absolute;width:100%;bottom:0;left:0;height:20px;line-height:20px;background:rgba(0,0,0,.2);text-align:center;color:#fff;border-radius:0 0 3px 3px}.shop-detail-intro h1{font-size:16px;line-height:20px}.shop-detail-intro .common{margin-bottom:5px}.shop-detail-intro .common a{color:#07cdd0}.shop-detail-intro .common .weaken{color:#666}.shop-detail-intro .num{color:#666}.shop-detail-intro .num span{white-space:nowrap}.shop-detail-intro .detail-main{padding:10px 20px 10px 16px;background:#fff;min-height:70px;position:relative;border-width:0 0 1px 0;border-style:solid;border-color:#ddd;border-image:url(ddata:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;-webkit-border-image:url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch}.shop-detail-intro .line-item{padding:0}.shop-detail-intro .sales{font-size:12px;color:#ff7d13}.shop-detail-intro .sales span{font-size:15px}.shop-carlist span{display:inline-block}.comment-list-detail{color:#666;background-color:#fff;margin:.1rem 0;padding:.1rem 0 .1rem .16rem;border-bottom:1px solid #e1e1e1}.comment-list-datail .comment-more{float:right}.comment-list-detail .comment-more-arrow{border-left:1px solid #adadad;border-top:1px solid #adadad;width:.08rem;height:.08rem;transform:rotate(135deg);top:25%;position:absolute;-webkit-transform:rotate(135deg)}.comment-list-detail .comment-rank-detail,.detail-main .iconfont{color:#ececec;font-size:.18rem}.comment-list-detail .comment-rank-detail .active,.detail-main .active{color:#ff9e2a}.comment-list-detail li{border-top:1px solid #f0f0f0;padding:3px 16px 3px 0}.comment-list-detail ul{margin-top:5px}.detail-main .discount-num{font-size:.18rem;color:#ff7d13}.detail-main .discount-unit{color:#ff7d13}.detail-main .store-point{color:#07cdd0;font-size:.18rem}.detail-main .store-point-unit{color:#07cdd0}.shop-detail-intro .icon-nomsg{font-size:.14rem;text-align:center;background-color:#fff;color:#d8d5d0;margin-bottom:.21rem;border-bottom:1px solid #e8e8ed}.shop-detail-intro .icon-nomsg .iconfont{font-size:0.8rem;display:inline-block;margin-top:-0.2rem}.clearfix{padding:0 0.16rem 0.05rem 0}.line-lists-arrow .item::after{border-left:1px solid #adadad;border-bottom:1px solid #adadad}</style><div class="page-content shop-detail-intro"><div class=detail-main>', storeImages && storeImages.length && (__p += '<div class="img-box js-picture"><img src="' + (null == (__t = storeImages[0].imgUrl) ? "" : __t) + '" alt="' + (null == (__t = storeImages[0].imgDes) ? "" : __t) + '"><span>' + (null == (__t = storeImages.length) ? "" : __t) + "张</span></div>"), __p += "<h1>" + (null == (__t = storeNickName) ? "" : __t) + "</h1><div class=icon-box><i class=icon-wifi></i></div>", discountValueMin && (__p += "<div><span class=discount-num>" + (null == (__t = discountValueMin) ? "" : __t) + '</span><span class="discount-unit font-xs">折起</span></div>'), __p += " \n          ", overallScoreAvg) {
					print('<div class="js-comments-more">');
					for (var i = 1; i <= Math.floor(overallScoreAvg); i++) __p += '<i class="iconfont  active">&#xe626;</i>';
					for (var i = Math.floor(overallScoreAvg); 5 > i; i++) __p += '<i class="iconfont ">&#xe626;</i>'
				}
				__p += "\n          ", overallScoreAvg && (__p += "<span class=store-point>" + (null == (__t = overallScoreAvg) ? "" : __t) + '</span><span class="store-point-unit font-xs">分</span>'), __p += "\n          ", overallScoreAvg && print("</div>"), __p += "<div class=font-s>", serviceScoreAvg && (__p += "<span style=color:#666>服务质量" + (null == (__t = serviceScoreAvg) ? "" : __t) + "分</span>"), __p += "\n           ", speedyScoreAvg && (__p += "\n            &nbsp;<span style=color:#666>维修效率" + (null == (__t = speedyScoreAvg) ? "" : __t) + "分</span>"), __p += '</div></div><div class=bg-white><ul class="line-lists-icon line-lists-arrow"><li class=item><a href="tel:' + (null == (__t = telephone) ? "" : __t) + '" style=display:block><i class=iconfont>&#xe60e;</i>&nbsp;' + (null == (__t = telephone) ? "" : __t) + '</a></li><li class="item js-map"><i class=iconfont>&#xe607;</i>&nbsp;' + (null == (__t = templateApi.distance(distance)) ? "" : __t) + (null == (__t = address) ? "" : __t) + "</li></ul></div><div class=shop-tip-bar><i class=iconfont>&#xe609;</i>过期退 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=iconfont>&#xe609;</i>随时退</div><div class=shop-carlist>服务厂商: " + (null == (__t = brandOfStore.join(" ")) ? "" : __t) + "<br>主营车型：\n    ", _.each(types, function(t) {
					__p += "<span>" + (null == (__t = t) ? "" : __t) + "</span>"
				}), __p += "</div>", comments && comments.list && comments.list.length ? (__p += '<div class="comment-list-detail font-xs"><div class="js-comments-more clearfix font-s" style=position:relative>车主点评(' + (null == (__t = comments.page.totalCount) ? "" : __t) + ")<span style=float:right;margin-right:.1rem class=font-s>更多<i class=comment-more-arrow></i></span></div><ul>", _.each(comments.list, function(t) {
					if (__p += "<li><div class=comment-phone><span>" + (null == (__t = t.contactUserMobile) ? "" : __t) + "</span><span style=float:right>", print(app.dateFormat(t.createdTime, "yyyy-mm-dd HH:MM")), __p += "</span></div><div class=comment-rank-detail>", t.overallScore) {
						for (var e = 1; e <= Math.floor(t.overallScore); e++) __p += '<i class="iconfont  active ">&#xe626;</i>';
						for (var e = Math.floor(t.overallScore); 5 > e; e++) __p += '<i class="iconfont ">&#xe626;</i>'
					}
					__p += "</div><div class=comment-detail>", __p += t.content ? "\n            " + (null == (__t = t.content) ? "" : __t) + "\n          " : "<span style=color:#d2d2d2>车主很忙，没有留下任何文字</span>", __p += "</div></li>"
				}), __p += "</ul></div>") : __p += '<div class=icon-nomsg><i class="iconfont ">&#xe625;</i><div style=margin-top:-10px;padding-bottom:10px>还没有人评论过这家店</div></div>', __p += '</div><footer class=page-bottom><div class=service-bom><a href=javascript:void(0); class="btn-primary full-width js-service">去保养</a></div></footer>'
			}
			return __p
		}
	}), define("controller/services/detail", ["textservicesDetailHtml", "PageView", "session", "local", "geolocation", "user", "carModel"], function(t, e, i, n, a, r, o) {
		var s = e.extend({
			events: {
				"click .js-picture": "pictureAction",
				"click .js-map": "mapAction",
				"click .js-service": "serviceAction",
				"click .js-comments-more": "moreComments"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "4S店详情"
					}
				})
			},
			ajax: function() {
				var t = a.getPostion(),
					e = o.getServiceNetForDetail(this.query.id);
				t.location && (e.data.lat = t.location.lat, e.data.lon = t.location.lng);
				var i = {
						url: "shop/getCarTypeOfStore",
						data: {
							storeId: this.query.id
						},
						session: !0
					},
					n = o.getUserComments(this.query.id, 1, 3);
				return [e, i, n]
			},
			onShow: function(e, n, a) {
				e.types = n, e.comments = a;
				var r = this.template(t, e);
				this.$el.html(r), i.set("shop_detail", e), this.shop = e
			},
			pictureAction: function() {
				app.goTo("shop/picture")
			},
			mapAction: function() {
				app.goTo("shop/map")
			},
			moreComments: function() {
				app.goTo("comment/detail?" + $.param(this.query))
			},
			serviceAction: function() {
				var t = this.shop;
				if (r.isLogin) {
					var e = o.myCarList();
					e.success = function(e) {
						e = _.filter(e, function(t) {
							return 1 == t.isCanUse
						});
						var i = _.find(e, function(t) {
							return 1 == t.isDefault
						});
						if (i && -1 != t.carBrandTypeIds.indexOf(i.secondId)) n._set("car", i), app.goTo("car/info");
						else {
							var a = _.find(e, function(e) {
								return -1 != t.carBrandTypeIds.indexOf(e.secondId)
							});
							a ? (n._set("car", a), o.setDefaultCar(a.id), app.goTo("car/info")) : app.goTo("car/brand?from=add&select=plan")
						}
					}, app.ajax(e)
				} else {
					var a = n._get("car");
					a && -1 != t.carBrandTypeIds.indexOf(a.secondId) ? app.goTo("car/info") : (i.remove("new_car"), app.goTo("car/brand"))
				}
			}
		});
		return s
	}), define("textcommentDetailHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) {
				if (__p += "<style>.commentDetail{height:.9rem;position:relative;background-color:#fff}.commentDetail .score{width:.85rem;top:53%;position:absolute;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.commentDetail .splitLine{height:100%;width:1px;color:#666}.commentDetail .div-score{text-align:center;color:#07cdd0;font-size:.19rem}.commentDetail .div-comment{text-align:center;color:#999;font-size:.15rem}.comment-rank{font-size:.18rem;margin-left:.8rem;border-left:1px solid #e5e5e5;height:100%;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);position:relative;color:#ececec}.comment-rank .active{color:#ff9e2a;font-size:.19rem}.comment-type{text-align:center;background-color:#fff;font-size:.18rem;margin-bottom:.14rem}.comment-type span{border:1px #ccc solid;border-radius:.03rem;-webkit-border-radius:.03rem;padding:.03rem .02rem .03rem .07rem;margin:.06rem .08rem;display:inline-block;color:#666;font-size:.15rem}.comment-type .active{color:#ff9e2a;border:1px #ff9e2a solid}.comment-list{color:#666;background-color:#fff;padding:0 0 0 .2rem}.comment-list .comment-more{border-left:1px solid #adadad;border-top:1px solid #adadad;width:10px;height:10px;float:right;transform:rotate(135deg);-webkit-transform:rotate(135deg);margin-top:.1rem}.comment-list .comment-list-rank{color:#ececec;font-size:.18rem}.comment-list .comment-list-rank .active{color:#ff9e2a}.comment-list li{border-bottom:1px solid #f0f0f0;padding:10px 10px 10px 0}.splitLineWidth{width:92%;height:1px;background-color:#e5e5e5;display:block;margin-left:4%}.div-pad{height:0.75rem;padding:10px 0}.comemnt-icon-txt{font-size:.15rem;color:#07cdd0;text-align:center;width:.38rem}.comment-rank .iconfont{margin-right:.04rem}</style><div class=page-content><div class=page-content-inner>", shop.overallScoreAvg) {
					if (__p += "<div class=commentDetail><div class=div-pad><div class=score><div class=div-score>" + (null == (__t = shop.overallScoreAvg) ? "" : __t) + "分</div><div class=div-comment>总体点评</div></div><div class=comment-rank><div style=padding-top:5px;padding-left:10px><span style=font-size:.15rem;margin-right:.05rem;color:#7d7b76>服务态度</span>", shop.serviceScoreAvg) {
						for (var i = 1; i <= Math.floor(shop.serviceScoreAvg); i++) __p += '<i class="iconfont  active">&#xe626;</i>';
						for (var i = Math.floor(shop.serviceScoreAvg); 5 > i; i++) __p += "<i class=iconfont>&#xe626;</i>"
					}
					if (__p += "<span class=comemnt-icon-txt><span style=font-size:0.18rem>" + (null == (__t = shop.serviceScoreAvg) ? "" : __t) + "</span>分</span></div><div style=margin-top:.09rem;padding-left:.1rem><span style=font-size:.15rem;margin-right:.05rem;color:#7d7b76>维修效率</span>", shop.speedyScoreAvg) {
						for (var i = 1; i <= Math.floor(shop.speedyScoreAvg); i++) __p += '<i class="iconfont  active">&#xe626;</i>';
						for (var i = Math.floor(shop.speedyScoreAvg); 5 > i; i++) __p += "<i class=iconfont>&#xe626;</i>"
					}
					__p += "<span class=comemnt-icon-txt><span style=font-size:0.18rem>" + (null == (__t = shop.speedyScoreAvg) ? "" : __t) + "</span>分</span></div></div></div><div style=text-align:center><div class=splitLineWidth></div></div></div>"
				}
				__p += '<div class=comment-type><div style="padding:10px 0 3px"><span class=js-filter data-status>全部（' + (null == (__t = count.GOOD + count.BAD) ? "" : __t) + "）</span><span class=js-filter data-status=1>好评（" + (null == (__t = count.GOOD) ? "" : __t) + "）</span><span class=js-filter data-status=2>差评（" + (null == (__t = count.BAD) ? "" : __t) + "）</span></div></div></div></div>"
			}
			return __p
		}
	}), define("textcommentListHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<div class="comment-list font-xs"><ul class=ul-comment-list>', _.each(comments.list, function(t) {
				if (__p += "<li><div class=comment-phone><span>" + (null == (__t = t.contactUserMobile) ? "" : __t) + "</span><span style=float:right>", print(app.dateFormat(t.createdTime, "yyyy-mm-dd HH:MM")), __p += "</span></div><div class=comment-list-rank>", t.overallScore) {
					for (var e = 1; e <= Math.floor(t.overallScore); e++) __p += '<i class="iconfont  active">&#xe626;</i>';
					for (var e = Math.floor(t.overallScore); 5 > e; e++) __p += "<i class=iconfont>&#xe626;</i>"
				}
				__p += "</div><div class=comment-detail>", __p += t.content ? "\n          " + (null == (__t = t.content) ? "" : __t) + "\n        " : "<span style=color:#d2d2d2>车主很忙，没有留下任何文字</span>", __p += "</div></li>"
			}), __p += "</ul></div>";
			return __p
		}
	}), define("controller/comment/detail", ["textcommentDetailHtml", "textcommentListHtml", "PageView", "session", "user"], function(t, e, i, n) {
		var a = i.extend({
			onCreate: function() {
				this.header.option({
					center: {
						text: "点评详情"
					}
				}), this.config = {
					pageSize: 20,
					pageCurrent: 1
				}, "test" == config.env && (this.config.pageSize = 5)
			},
			events: {
				"click .js-filter": "filterAction"
			},
			ajax: function() {
				var t = {
						url: "mtnorder/getShopCommentList",
						data: {
							storeId: this.query.id,
							page: {
								pageSize: this.config.pageSize,
								currentPage: this.config.pageCurrent,
								orderBy: "id desc"
							}
						}
					},
					e = this.query.status + "";
				if (e) switch (e) {
					case "1":
						t.data.commentRs = "GOOD";
						break;
					case "2":
						t.data.commentRs = "BAD"
				}
				var i = {
					url: "mtnorder/countShopComment",
					data: {
						storeId: this.query.id
					}
				};
				return [t, i]
			},
			onShow: function(i, a) {
				var r = n.get("shop_detail"),
					o = this.query.status || "";
				this.commentlist = i.list;
				var s = this.template(t, {
						comments: i,
						count: a,
						shop: r
					}),
					l = '<div class="results-none">没有相应评论</div>';
				i.list && i.list.length && (l = this.template(e, {
					comments: i
				})), this.$el.html(s), this.$(".page-content-inner").append(l), this.$('.js-filter[data-status="' + o + '"]').addClass("active"), this.addOnScroll(), this.once("bottom", this.onBottom)
			},
			onBottom: function() {
				var t = document.createElement("li");
				if ($(t).css({
					"text-align": "center",
					color: "#999;",
					"list-style": "none;"
				}), $(t).addClass("order-list-item"), this.commentlist.length == this.config.pageSize) {
					var i = this;
					$(t).html("正在加载中..."), this.$el.append(t), this.config.pageCurrent++;
					var n = this.query.status + "",
						a = {
							storeId: this.query.id,
							page: {
								pageSize: this.config.pageSize,
								currentPage: this.config.pageCurrent,
								orderBy: "id desc"
							}
						};
					if (n) switch (n) {
						case "1":
							a.commentRs = "GOOD";
							break;
						case "2":
							a.commentRs = "BAD"
					}
					app.ajax({
						url: "mtnorder/getShopCommentList",
						data: a,
						success: function(n) {
							i.$(t).remove();
							var a = i.template(e, {
								comments: n
							});
							i.$(".page-content-inner").append(a), n.list.length == i.config.pageSize && i.once("bottom", i.onBottom)
						}
					})
				}
			},
			filterAction: function(t) {
				var e = this.$(t.currentTarget).attr("data-status");
				this.config.pageCurrent = 1, this.once("bottom", this.onBottom), this.reload({
					status: e,
					id: this.query.id
				})
			}
		});
		return a
	}), define("textservicesJoinHtml", [], function() {
		return '<article class=page-content><div id=crumbs><ul><li class=active>申请加盟</li><li>电话联系</li><li>提交报价</li><li>4S店上线</li></ul></div><div class=p10><div class="form-item  form-block"><label class=field-label>城市</label><div class=field-text-wrap><input type=text class="field-text tr js-storePlace" placeholder=请输入店铺所在城市></div></div><div class="form-item  form-block"><label class=field-label>店名</label><div class=field-text-wrap><input type=text class="field-text tr js-storeName" placeholder=请输入店铺名称></div></div><div class="form-item  form-block"><label class=field-label>品牌</label><div class=field-text-wrap><input type=text class="field-text tr js-storeBrand" placeholder=请输入服务品牌></div></div><div class="form-item  form-block"><label class=field-label>地址</label><div class=field-text-wrap><input type=text class="field-text tr js-storeAddress" placeholder=请输入店铺的详细地址></div></div><div class="form-item  form-block"><label class=field-label>联系人姓名</label><div class=field-text-wrap><input type=text class="field-text tr js-contactName" placeholder=请输入联系人姓名></div></div><div class="form-item  form-block"><label class=field-label>联系人电话</label><div class=field-text-wrap><input type=tel class="field-text tr js-contactMobile" placeholder=请输入联系人手机号码></div></div><a href=javascript:void(0); class="btn-primary full-width join-submit" style=margin-top:20px>申请加盟</a></div></article>'
	}), define("validate", [], function() {
		var t = {
			isMobile: function(t) {
				var e = /^1[3-8]\d{9}$/;
				return e.test(t)
			},
			isEmail: function(t) {
				var e = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
				return e.test(t)
			},
			isIdCard: function(t) {
				var e = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
				return e.test(t)
			},
			isName: function(t) {
				var e = /^([\u4e00-\u9fa5]|[A-Za-z_])+$/;
				return e.test(t) ? (t = t.replace(/[\u4e00-\u9fa5]/g, "__"), t.length <= 20) : !1
			},
			isBankCard: function(t) {
				var e = /^\d{16,19}$/;
				return e.test(t)
			},
			isCarNumber: function(t, e) {
				var i;
				return i = e ? /^[\u4e00-\u9fa5][A-Z0-9]{6}$/ : /^[\u4e00-\u9fa5A-Z_0-9]+$/, i.test(t)
			},
			isEngineNumber: function(t) {
				var e = /^[A-Z0-9]{4,17}$/;
				return e.test(t)
			},
			isVin: function(t, e) {
				e = e || 17;
				var i = new RegExp("^[A-Z0-9]{" + e + "}$");
				return i.test(t)
			},
			DBC2SBC: function(t, e) {
				var i, n = "";
				for (i = 0; i < t.length; i++) str1 = t.charCodeAt(i), n += String.fromCharCode(str1 < 65296 ? t.charCodeAt(i) : str1 < 125 && !e ? t.charCodeAt(i) : t.charCodeAt(i) - 65248);
				return n
			},
			carNumber: function(e) {
				return t.DBC2SBC(e).toUpperCase().replace(/\s+/g, "")
			},
			toUpperCase: function(e) {
				return t.DBC2SBC(e).toUpperCase()
			}
		};
		return t
	}), define("controller/services/join", ["textservicesJoinHtml", "PageView", "session", "validate"], function(t, e, i, n) {
		var a = e.extend({
			events: {
				"click .join-submit": "joinSubmit"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "4S店加盟"
					}
				})
			},
			onShow: function() {
				this.$el.html(t)
			},
			joinSubmit: function() {
				var t = this.$(".js-storePlace").val().trim(),
					e = this.$(".js-storeName").val().trim(),
					i = this.$(".js-storeBrand").val().trim(),
					a = this.$(".js-storeAddress").val().trim(),
					r = this.$(".js-contactName").val().trim(),
					o = this.$(".js-contactMobile").val().trim();
				return t ? e ? i ? a ? r ? o ? n.isMobile(o) ? void app.ajax({
					url: "franchisee/add",
					data: {
						storePlace: t,
						storeName: e,
						storeBrand: i,
						storeAddress: a,
						contactName: r,
						contactMobile: o
					},
					success: function(t) {
						return t ? void app.alert({
							msg: "<div style='text-align:center'>申请成功</div>",
							btns: [{
								text: "确定",
								callback: function() {
									app.goBack()
								}
							}]
						}) : void app.alert("输入信息有误，请重新申请")
					}
				}) : void app.alert("手机号码有误，请重新输入") : void app.alert("请输入联系人手机号码") : void app.alert("请输入联系人姓名") : void app.alert("请输入店铺的详细地址") : void app.alert("请输入服务品牌") : void app.alert("请输入店铺名称") : void app.alert("请输入店铺所在城市")
			}
		});
		return a
	}), define("textuserIndexHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.user-page{top:0!important}.user-center-banner .car-info-box{display:table-cell;background:0;border-bottom:0;vertical-align:middle}.user-center-banner .car-info .info{color:#333;font-size:15px;padding-right:10px}.user-center-nocar{text-align:center}.user-car-banner{background-color:#fff;margin-bottom:10px}.user-car-add a{display:inline-block;color:#333;font-size:.16rem;padding:.2rem 0}.user-car-add i{vertical-align:middle;font-size:.18rem;display:inline-block;margin-top:-5px}.user-center-item{padding:.1rem}.user-center-item .version{padding-top:10px;text-align:center;color:#ccc;font-size:14px}.user-order-all{background:#fff;font-size:15px;padding:10px 15px}.user-order-all span{position:relative;float:right;margin-right:10px;padding-right:15px;line-height:1.6;color:#666;font-size:14px}.user-order-all span:after{content:"";display:inline-block;vertical-align:middle;width:8px;height:8px;border-top:1px solid #999;border-right:1px solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:0;top:50%;margin-top:-1px;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}.user-center-nav{padding-top:10px;margin:0;padding-bottom:5px;background:#fff;border-top:1px solid #f6f6f6;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2)}.user-center-nav li{color:#333;font-size:14px}.user-center-nav li i{color:#999;top:-5px!important;font-size:24px!important}.user-center-nav .sup-wrap .sup-num{top:0}.user-center-banner ul{padding-top:.45rem;padding-bottom:.21rem}.user-center-banner .pub-arrow::after{right:26px}.user-center-banner .user-set{position:absolute;top:.2rem;right:.05rem;font-size:.26rem;padding:10px 10px 15px 15px}.user-center-banner .user-set i{color:#fff;opacity:.8}.user-center-banner .user-info-item{text-align:center;font-size:.16rem;color:#666;letter-spacing:1px;margin:5px 0}.user-center-banner .user-money{padding:4px 20px 4px 15px;background-color:#fff;opacity:.7;border-radius:20px;position:relative}.user-money:after{right:12px}.user-center-item .icon-discount{color:#ff7200;font-size:28px;padding:0 8px 0 0;margin-left:-1px}.user-center-item .icon-questions{color:#37d1c3;font-size:25px;padding:0 10px 0 0}.user-center-item .icon-user-invite{width:25px;height:25px;display:inline-block;vertical-align:middle;padding-right:10px;background-size:24px 21px;background-repeat:no-repeat}.user-info-item img{height:.6rem;width:.6rem;border-radius:50%;border:2px solid #fff}.user-info-item .img-header{background-size:1.26rem 1.26rem;background-position:0 0%;height:.63rem;width:.63rem;background-repeat:no-repeat;display:inline-block;border:2px solid #fff;border-radius:50%}.user-info-item .login-out{background-position:100% 0%}.car-brand{display:inline-block;position:absolute;left:10px;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.car-brand img{width:45px}.car-right{text-align:left;padding:0 0 0 .7rem}.pub-arrow::after{right:26px}.user-center-item .user-jubaopen{position:relative;float:right;color:#666;font-size:14px}</style><div class=page-content><div class=user-center-banner><span class="user-set js-go" data-url="user/set"><i class=iconfont>&#xe647;</i></span><ul><li class=user-info-item><span class=js-go data-url="user/info">', user.oauthUser && user.oauthUser.faceImg ? __p += '<img src="' + (null == (__t = user.oauthUser.faceImg) ? "" : __t) + '">' : user.isLogin ? (__p += '<div class=img-header style="background-image:url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + "un-user.png);", 2 == user.gender && print("background-position: 0 100%;"), __p += '"></div>') : __p += '<div class="img-header login-out" style="background-image: url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + 'un-user.png)"></div>', __p += "</span></li>", __p += user.isLogin ? "<li class=user-info-item><span>" + (null == (__t = user.nickname) ? "" : __t) + '</span></li><li class="user-info-item "><span class="user-money line-item--arrow js-go" data-url="user/award">可提现余额：' + (null == (__t = templateApi.price2(user.availableAmount)) ? "" : __t) + "</span></li>" : '<li class=user-info-item><span class="user-money js-go" data-url=login>登入/注册</span></li>', __p += "</ul></div><div class=user-car-banner>", car && car.brandTypeId ? __p += '<div class="car-info-box pub-arrow" style=padding-right:35px><div class=" js-go" data-url="user/car" style=position:relative><div class=car-brand><img src="' + (null == (__t = car.imgUrl) ? "" : __t) + '" alt=默认车辆></div><div class=car-right><div>' + (null == (__t = car.carTypeName) ? "" : __t) + "\n            " + (null == (__t = car.yearType) ? "" : __t) + "\n            " + (null == (__t = car.name) ? "" : __t) + "</div><div>" + (null == (__t = car.mileage) ? "" : __t) + "公里</div></div></div></div>" : (__p += "<div class=user-center-nocar><div class=user-car-add><a class=js-add><i class=iconfont>&#xe601;</i>&nbsp;添加您的爱车&nbsp;体验4S店优质保养</a>", app.nativeApi.has("app.scan") && (__p += '<a class="search-car js-scan"><i class=iconfont style=font-size:0.18rem>&#xe628;</i>&nbsp;扫码识车</a>'), __p += "</div></div>"), __p += '</div><div class=user-order-box><div class=user-order-all>我的订单<span class=js-order data-status>查看全部订单</span></div><ul class="pub-bar-nav user-center-nav"><li class=js-order data-status=1><i class="nav-icon iconfont', stat[0][1] && print(" sup-wrap"), __p += '">&#xe656;', stat[0][1] && (__p += "<span class=sup-num>" + (null == (__t = stat[0][1]) ? "" : __t) + "</span>"), __p += '</i>待支付</li><li class=js-order data-status=2><i class="nav-icon iconfont', stat[1][2] && print(" sup-wrap"), __p += '">&#xe658;', stat[1][2] && (__p += "<span class=sup-num>" + (null == (__t = stat[1][2]) ? "" : __t) + "</span>"), __p += '</i>服务中</li><li class=js-order data-status=4><i class="nav-icon iconfont', stat[2][3] && print(" sup-wrap"), __p += '">&#xe657;', stat[2][3] && (__p += "<span class=sup-num>" + (null == (__t = stat[2][3]) ? "" : __t) + "</span>"), __p += '</i>待评价</li></ul></div><div class=user-center-item><ul class=line-list><li><div class="line-item line-item--arrow  js-go" data-url="user/invite"><i class=icon-user-invite style="background-image:url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + 'index/redpacket.png);"></i>我的聚宝“朋”<span class=user-jubaopen>邀请好友赚奖金</span></div><div class="line-item line-item--arrow js-go" data-url="user/discount"><i class="iconfont icon-discount" style=float:left;margin-top:-2px>&#xe659;</i>我的优惠券</div></li><li><div class="line-item line-item--arrow js-go" data-url="help/index"><i class="iconfont icon-questions">&#xe655;</i>常见问题</div><div class="line-item line-item--arrow"><a href=tel:4006300111><i class="iconfont icon-questions">&#xe648;</i>联系客服</a></div></li></ul></div><div style=height:.64rem></div></div>';
			return __p
		}
	}), define("controller/user/index", ["textuserIndexHtml", "Footer", "PageView", "local", "session", "user", "carModel", "geolocation", "VinScanner"], function(t, e, i, n, a, r, o, s, l) {
		var c = i.extend({
			events: {
				"click .js-go": "goAction",
				"click .js-order": "orderAction",
				"click .js-add": "addCarAction",
				"click .js-scan": "scanAction"
			},
			attributes: {
				"class": "page user-page"
			},
			onCreate: function() {
				this.header.hide(), this.renderFooter()
			},
			ajax: function() {
				if (r.isLogin) {
					var t = o.myDefaultCar(),
						e = {
							url: "ord_user/countOrder",
							data: {
								countTypes: [1, 2, 3]
							},
							session: !0,
							expires: "3M"
						};
					return [t, e, o.getMywallet()]
				}
			},
			onShow: function(e, i, a) {
				r.isLogin || (e = n._get("car"));
				var o = "",
					s = r.getUserInfo(),
					l = {
						car: e,
						user: {
							isLogin: r.isLogin,
							mobile: s ? s.user.mobile : "",
							availableAmount: a && a.availableAmount ? a.availableAmount : 0,
							oauthUser: s ? s.oauthUser : {},
							nickname: "",
							gender: 1
						}
					};
				l.user.oauthUser.nickname ? o = decodeURIComponent(l.user.oauthUser.nickname) : s && (_.isEmpty(s.userInfo.nickName) ? _.isEmpty(s.userInfo.realName) ? _.isEmpty(l.user.mobile) || (o = l.user.mobile) : o = s.userInfo.realName : o = s.userInfo.nickName), l.user.nickname = o, s && s.userInfo && s.userInfo.gender ? s.userInfo.gender != {} && (l.user.gender = s.userInfo.gender) : l.user.gender = 1, l.stat = i && i.countRs ? i.countRs : [{
					1: 0
				}, {
					2: 0
				}, {
					3: 0
				}];
				var c = this.template(t, l);
				this.$(".js-page-wrap").html(c)
			},
			renderFooter: function() {
				this.$el.html('<div class="js-page-wrap" style="height:100%;"></div>');
				new e({
					ctrlName: this.ctrlName,
					appendElement: this.el
				})
			},
			goAction: function(t) {
				var e = $(t.currentTarget);
				app.goTo(e.data("url"))
			},
			orderAction: function(t) {
				var e = $(t.currentTarget),
					i = e.attr("data-status");
				app.goTo("order/index?status=" + i)
			},
			addCarAction: function() {
				r.isLogin ? (a.remove("new_car"), app.goTo("car/brand?from=add")) : app.goTo("login")
			},
			scanAction: function() {
				l.callCamera()
			}
		});
		return c
	}), define("textuserInfoHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				if (__p += '<style>.set-list{background-color:#fff;border-radius:4px;font-size:15px;line-height:57px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.2);margin:10px}.set-list li{display:block;padding-left:.15rem;padding-right:.15rem;position:relative}.set-left{float:left;margin-left:0.15rem}.set-right{position:absolute;right:25px;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.set-line{clear:both;border-top:1px solid #f6f6f6}.personal_head{display:block;width:0.44rem;height:0.44rem}.form-male,.form-female{width:0.3rem;text-align:center;vertical-align:middle}.form-male i,.form-female i{display:inline-block;color:#ccc;font-size:22px;width:46px;text-align:center;border-radius:50%;height:45px;line-height:45px;background-color:#fff;background-repeat:no-repeat;-webkit-background-size:92px auto;background-size:92px auto}.form-male i{background-position:-45px 0}.form-male.active i{background-position:0 0}.form-female i{background-position:-46px -46px}.form-female.active i{background-position:0 -46px}.page-content .list-splite{color:#666;margin:.05rem 10px}.set-right img{width:46px;height:46px;border-radius:50%}.set-right .img-header{background-size:92px 92px;background-position:0 0%;height:45px;width:45px;background-repeat:no-repeat;border-radius:50%}.set-right input{border:none;text-align:right;line-height:100%;line-height:50px}.set-right.span-name{display:inline-block;overflow-y:scroll;width:50%;white-space:nowrap;text-align:right}.span-name::-webkit-scrollbar{display:none}.span-name::scrollbar{display:none}.set-line-after::after{content:"";width:8px;height:8px;border-top:1px solid #999;border-right:1px solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:20px;top:50%;margin-top:-1px;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%)}</style><div class=page-content><ul class=set-list><li>头像<span class=set-right style=right:15px>', oauthUser && oauthUser.faceImg ? __p += '<img src="' + (null == (__t = oauthUser.faceImg) ? "" : __t) + '">' : (__p += '<div class=img-header style="background-image:url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + "un-user.png);", 2 == gender && print("background-position: 0 100%;"), __p += '"></div>'), __p += '</span></li><li class="set-line set-line-after js-go" data-url="user/mobile_bind">手机号<span class=set-right>' + (null == (__t = mobile) ? "" : __t) + '</span></li><li class="set-line set-line-after js-go" data-url="user/name_set"><span>姓名</span><span class="set-right span-name">' + (null == (__t = realname) ? "" : __t) + '</span></li><li class="set-line set-line-after js-go" data-url="user/nickname_set">昵称<span class="set-right span-name">' + (null == (__t = nickname) ? "" : __t) + '</span></li><li class=set-line>性别<span class=set-right style=right:15px><div class="form-male js-sex ', 1 == gender && print(" active"), __p += '" data-sex=1 style="float:left;margin:0.04rem 0.25rem 0 0.05rem"><i class=iconfont style="background-image: url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + 'un-user.png);">&nbsp;</i></div><div class="form-female js-sex ', 2 == gender && print(" active"), __p += '" data-sex=2 style="float:left;margin:0.04rem 0.15rem 0 0"><i class=iconfont style="background-image: url(' + (null == (__t = config.imgCdnRoot) ? "" : __t) + 'un-user.png);">&nbsp;</i></div></span></li></ul>', oauthUser && oauthUser.provider) {
					switch (__p += "<div class=list-splite>当前登入的第三方账号：</div><ul class=set-list><li>", oauthUser.provider) {
						case "qq":
							print("QQ");
							break;
						case "sae":
							print("新浪微博");
							break;
						case "wechat":
							print("微信")
					}
					__p += "<span class=set-right>" + (null == (__t = decodeURIComponent(oauthUser.nickname)) ? "" : __t) + "</span></li></ul>"
				}
				__p += "</div>"
			}
			return __p
		}
	}), define("UIFooterSlide", ["UIAbstract", "prefix"], function(t, e) {
		var i = t.extend({
			options: {
				template: "",
				dir: "bottom"
			},
			attributes: {
				"class": "footer-slide"
			},
			_create: function() {
				var t = this.template(this.options.template, this.options.data),
					i = this;
				this.$el.html(t), this.$bg = $('<div class="pub-overlay-loading" style="display:none;"></div>'), this.$el[0].style[e.transform] = this.getCssDir("100%"), e.events(this.el, "TransitionEnd", function(t) {
					t.stopPropagation();
					var n = t.target.style,
						a = n[e.transform];
					a == i.getCssDir("100%") ? (n.display = "none", i.trigger("hide")) : i.trigger("show")
				}), this.$bg.on("click", _.bind(this.hide, this)).appendTo(this.options.appendElement)
			},
			remove: function() {
				i.__super__.remove.call(this), this.$bg.remove()
			},
			show: function() {
				var t = this.$el[0].style;
				t.display = "block", this.$el[0].offsetHeight, t[e.transition] = e.cssTransform + " 300ms linear", t[e.transform] = this.getCssDir(0), this.$bg.show()
			},
			hide: function() {
				var t = this.$el[0].style;
				t[e.transition] = e.cssTransform + " 300ms linear", t[e.transform] = this.getCssDir("100%"), this.$bg.hide()
			},
			getCssDir: function(t) {
				var e = "bottom" == this.options.dir ? "translateY(" : "translateX(";
				return e + t + ")"
			}
		});
		return i
	}), define("textUIPhotoChooseHtml", [], function() {
		return '<div class=photo-choose-wrap><div style=height:40px;line-height:30px;font-size:13px;color:#ccc>您希望如何设置头像？</div><div class=js-picture-new><span style=position:absolute;left:50%;transform:translateX(-50%);z-index:1>拍摄新照片</span><input type=file accept="image/*" capture=camera></div><div class=js-picture-select>从照片库选择</div></div><div class="photo-choose-wrap js-button-cancle"><button>取消</button></div>'
	}), define("UIPhotoChoose", ["UIFooterSlide", "textUIPhotoChooseHtml"], function(t, e) {
		var i = t.extend({
			options: {
				template: e
			},
			attributes: {
				"class": "phtoto-choose-box"
			},
			_create: function() {
				t.prototype._create.call(this), this.once("hide", this.remove)
			},
			events: {
				"click .js-button-cancle": function() {
					this.trigger("hide")
				},
				"click .js-picture-new": "pictureNewAction",
				"click .js-picture-select": "pictureSelectAction"
			},
			pictureNewAction: function() {},
			pictureSelectAction: function() {},
			pictureSelectAction: function() {
				this.el.style
			}
		});
		return i
	}), define("controller/user/info", ["textuserInfoHtml", "PageView", "user", "UIPhotoChoose"], function(t, e, i, n) {
		var a = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-go": "goAction",
				"click .js-sex": "sexChange",
				"click .js-img-set": "imgSetAction"
			},
			onCreate: function() {
				this.user = i, this.header.option({
					center: {
						text: "个人信息"
					}
				})
			},
			onShow: function() {
				var e = {
					headPic: "",
					gender: "1"
				};
				if (this.user && this.user.getUserInfo()) {
					var i = this.user.getUserInfo(),
						n = i.userInfo,
						a = i.user;
					e.mobile = a ? a.mobile : "", e.realname = n ? n.realName : "", e.nickname = n && !_.isEmpty(n.nickName) ? n.nickName : "", e.oauthUser = i.oauthUser, e.gender = n.gender && n.gender != {} ? n.gender : 1
				}
				var r = this.template(t, e);
				this.$el.html(r)
			},
			goAction: function(t) {
				var e = $(t.currentTarget);
				app.goTo(e.data("url"))
			},
			sexChange: function(t) {
				var e = this.$(t.currentTarget),
					n = e.data("sex");
				this.$(".js-sex").removeClass("active"), e.addClass("active"), app.ajax({
					url: "user/saveUserInfo",
					data: {
						gender: n
					},
					success: function() {
						i.setUserInfo({
							userInfo: {
								gender: n
							}
						}), app.clearPageView(["user/index"])
					}
				})
			},
			imgSetAction: function() {
				var t = new n({
					appendElement: document.body
				});
				t.show()
			}
		});
		return a
	}), define("textmobileBindHtml", [], function() {
		return '<style>.login-box{padding:15px}.login-box .field-label{width:3.5em;margin-left:-4em}.login-box .form-item{padding-left:4.5em}.login-box .form-code,.book-box .form-code{margin-right:110px;padding-right:10px}.login-box .code-btn,.book-box .code-btn{position:absolute;top:0;padding:0 10px;background:#fff;color:#07cdd0;border:1px solid #07cdd0;border-radius:5px;font-size:15px;z-index:3;line-height:50px;right:-110px}.code-btn.disabled{border:1px solid #ccc}.txt-right{text-align:right}.form-item.form-item--arrow-btn{padding-right:12px}</style><div class="login-box page-content"><div class="form-item form-item--arrow-btn form-block"><label class=field-label>新手机号码</label><div class=field-text-wrap><input type=tel id=login_mobile class="field-text js-mobile txt-right" placeholder=请输入新手机号></div></div><div class="form-item form-item--arrow-btn form-block form-code"><label class=field-label>验证码</label><div class=field-text-wrap><input type=tel class="field-text js-code txt-right" placeholder=请输入验证码><span class="code-btn js-get-code">获取验证码</span></div></div><span class="btn-primary full-width js-save" data-ajax>保存</span></div>'
	}), define("controller/user/mobile_bind", ["textmobileBindHtml", "PageView", "user", "local", "validate", "util", "events"], function(t, e, i, n, a, r, o) {
		var s = e.extend({
			option: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-get-code": "getCodeAction",
				"click .js-voiceCheck": "voiceCheck",
				"click .js-save": "moblieChangeAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "修改绑定手机"
					}
				});
				var e = this.template(t);
				this.$el.html(e)
			},
			onShow: function() {
				o.on("ajax:user/sendChangeMobilSms", function() {
					app.clearPageView(["user/info", "user/index"])
				})
			},
			getCodeAction: function(t) {
				var e = $(t.currentTarget),
					i = this.$(".js-mobile").val().trim();
				if (!e.hasClass("disabled")) {
					if (!i) return void app.alert("请输入手机号码");
					if (!a.isMobile(i)) return void app.alert("手机号码格式不正确");
					e.addClass("disabled").html("重新发送 60");
					var n = 60,
						r = setInterval(function() {
							n-- ? e.html("重新发送 " + n): (clearInterval(r), e.html("获取验证码").removeClass("disabled"))
						}, 1e3);
					app.ajax({
						url: "user/sendChangeMobilSms",
						data: {
							mobile: i
						},
						success: _.noop,
						error: function(t) {
							app.alert(t.msg), clearInterval(r), e.html("获取验证码").removeClass("disabled")
						}
					})
				}
			},
			voiceCheck: function() {
				var t = this.$("#login_mobile").val().trim();
				return t ? void app.ajax({
					url: "user/sendChangeMobilSms",
					data: {
						mobile: t
					},
					success: function() {
						this.$(".voicecheckinfo").show()
					}
				}) : void app.alert("手机号不能为空")
			},
			moblieChangeAction: function() {
				var t = this.$("#login_mobile").val().trim(),
					e = this.$(".js-code").val().trim();
				return t ? e ? void app.ajax({
					url: "user/changeUserMobile",
					data: {
						code: e,
						mobile: t
					},
					success: function() {
						var e = {
							user: {
								mobile: t
							}
						};
						i.setUserInfo(e), app.goBack()
					}
				}) : void app.alert("请输入验证码") : void app.alert("请输入手机号码")
			}
		});
		return s
	}), define("textuserNameSetHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.name-box{height:41px;line-height:41px;float:right}.form-input{width:1.8rem;height:100%;background:transparent;border:none;box-shadow:none;color:#666;margin-right:.1rem;font-size:15px;font-family:serif}.txt-right{text-align:right}.btn-primary.full-width{margin-top:7px}.name-color{color:#ff7d13;margin-top:7px}.name-box .clear-wrap{height:100%;display:inline-block;padding:0 5px 0 10px}</style><div class=p10><ul class=line-list><li class="line-item line-list--switch ">姓名<div class=name-box><input type=text placeholder=请输入您的姓名 class="form-input txt-right js-name" maxlength=30 value="' + (null == (__t = realname) ? "" : __t) + '" maxlength=32><span class="js-clear clear-wrap"><i class=iconfont style=color:#666>&#xe630;</i></span></div></li></ul><p class="name-color font-xs" style="', realname && print("display:none"), __p += '"><i class=iconfont style=font-size:14px>&#xe60f;</i>&nbsp;要求1-20个字符的中英文</p><span class="btn-primary full-width js-save">保存</span></div>';
			return __p
		}
	}), define("controller/user/name_set", ["textuserNameSetHtml", "PageView", "user", "events", "validate"], function(t, e, i, n, a) {
		var r = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-clear": "clearAction",
				"input .js-name": "checkNameAction",
				"click .js-save": "saveAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "设置姓名"
					}
				}), this.isValide = !0
			},
			onShow: function() {
				var e, r = i && i.getUserInfo(),
					o = "";
				_.isEmpty(r) || (e = r.userInfo), e && (o = _.isEmpty(e.realName) ? "" : e.realName);
				var s = this.template(t, {
					realname: o
				});
				this.$el.html(s), o && a.isName(o) || (this.isValide = !1, this.$(".name-color").show()), n.on("ajax:user/saveUserInfo", function() {
					app.clearPageView(["user/info", "user/index"])
				})
			},
			clearAction: function(t) {
				var e = this.$(t.currentTarget),
					i = e.parent().find("input");
				i.val(""), this.$(".name-color").show(), this.isValide = !1
			},
			checkNameAction: function(t) {
				var e = this.$(t.currentTarget),
					i = e.val(),
					n = this.$(".name-color");
				i && a.isName(i) ? (n.hide(), this.isValide = !0) : (n.show(), this.isValide = !1)
			},
			saveAction: function() {
				if (this.isValide) {
					var t = this.$(".js-name").val().trim();
					app.ajax({
						url: "user/saveUserInfo",
						data: {
							realName: t
						},
						success: function() {
							i.setUserInfo({
								userInfo: {
									realName: t
								}
							}), app.goBack()
						}
					})
				}
			}
		});
		return r
	}), define("textnicknameSetHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.name-box{height:41px;line-height:41px;float:right}.form-input{width:1.8rem;height:100%;background:transparent;border:none;box-shadow:none;color:#666;margin-right:.1rem;font-size:15px;font-family:serif}.txt-right{text-align:right}.btn-primary.full-width{margin-top:7px}.name-color{color:#ff7d13;margin-top:7px}.name-box .clear-wrap{height:100%;display:inline-block;padding:0 5px 0 10px}</style><div class=p10><ul class=line-list><li class="line-item line-list--switch ">昵称<div class=name-box><input type=text placeholder=请输入您的昵称 class="form-input txt-right js-name" maxlength=30 value="' + (null == (__t = nickname) ? "" : __t) + '" maxlength=32><span class="js-clear clear-wrap"><i class=iconfont style=color:#666>&#xe630;</i></span></div></li></ul><p class="name-color font-xs" style="', nickname && print("display:none"), __p += '"><i class=iconfont style=font-size:14px>&#xe60f;</i>&nbsp;要求2-20个字符的中英文</p><span class="btn-primary full-width js-save">保存</span></div>';
			return __p
		}
	}), define("controller/user/nickname_set", ["textnicknameSetHtml", "PageView", "events", "user", "validate"], function(t, e, i, n, a) {
		var r = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-clear": "clearAction",
				"click .js-save": "saveAction",
				"input .js-name": "checkNameAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "设置昵称"
					}
				}), this.isValide = !0
			},
			onShow: function() {
				var e, r = n && n.getUserInfo(),
					o = "";
				_.isEmpty(r) || (e = r.userInfo), e && (o = _.isEmpty(e.nickName) ? "" : e.nickName);
				var s = this.template(t, {
					nickname: o
				});
				this.$el.html(s), o && o.length > 1 && a.isName(o) || (this.isValide = !1, this.$(".name-color").show()), i.on("ajax:user/saveUserInfo", function() {
					app.clearPageView(["user/info", "user/index"])
				})
			},
			clearAction: function(t) {
				var e = this.$(t.currentTarget),
					i = e.parent().find("input");
				i.val(""), this.$(".name-color").show(), this.isValide = !1
			},
			saveAction: function() {
				if (this.isValide) {
					var t = this.$(".js-name").val().trim();
					app.ajax({
						url: "user/saveUserInfo",
						data: {
							nickName: t
						},
						success: function() {
							n.setUserInfo({
								userInfo: {
									nickName: t
								}
							}), app.goBack()
						}
					})
				}
			},
			checkNameAction: function(t) {
				var e = this.$(t.currentTarget),
					i = e.val(),
					n = this.$(".name-color");
				i && i.length > 1 && a.isName(i) ? (n.hide(), this.isValide = !0) : (n.show(), this.isValide = !1)
			}
		});
		return r
	}), define("textorderHtml", [], function() {
		return '<style>.order-list-item{position:relative;margin:10px;padding:10px 15px;background:#fff;border-radius:5px;font-size:15px;color:#666;border-bottom:1px solid rgba(220,220,220,0.8)}.order-list-item .type{margin-bottom:4px;color:#999}.order-list-item .shop,.order-list-item .name,.order-list-item .time{line-height:1.6}.order-list-item .shop{padding-right:90px}.order-list-item .r{position:absolute;top:10px;right:15px;text-align:right}.order-list-item .r .s{white-space:nowrap;display:block;color:#ff7d13}.order-list-item .r .price{font-size:20px;color:#999}.order-list-item .btn-box{margin-top:5px;padding-top:10px;border-top:1px solid #e3e3e3;text-align:right}.order-list-item .btn-box span{display:inline-block;margin:0 2px;width:5em;color:#666;border:1px solid #999;padding:3px 0;border-radius:3px;text-align:center;font-size:14px}.order-list-item .btn-box span.active{border:1px solid #ff7d13;color:#ff7d13}</style><div class="page-top pub-tabs"><nav class=pub-tabs-nav><ul class=pub-tabs-title-list><li class=js-filter data-status>全部</li><li class=js-filter data-status=1>待支付</li><li class=js-filter data-status=2>服务中</li><li class=js-filter data-status=4>待评价</li></ul></nav></div><div class=page-content><div class=page-content-inner style=padding-top:47px></div></div>'
	}), define("textorderListHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "", list && list.length && (__p += "\n   ", _.each(list, function(t) {
				var e = "maintenanceItem";
				if (3 == t.orderType && (e = "accidentItem"), __p += '<div class=order-list-item data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class=js-detail><div class=r><span class=s>', 1 == t.orderType) switch (t.orderStatus) {
					case 1:
						print("待付款");
						break;
					case 2:
						print("已支付");
						break;
					case 3:
						print("服务中");
						break;
					case 4:
						print("已完成");
						break;
					case 5:
						print("已取消")
				} else if (3 == t.orderType)
					if (5 == t.orderStatus) print("已取消");
					else switch (t.accidentItem.processStatus) {
						case 0:
							print("待报价");
							break;
						case 1:
							print("待选店");
							break;
						case 2:
							print("暂无报价");
							break;
						case 3:
							print("服务中");
						case 4:
							0 == t.paymentStatus ? print("服务中（未支付）") : 2 == t.paymentStatus && print("服务中（已支付）");
							break;
						case 5:
							0 == t.paymentStatus ? print("待验收（未支付）") : 2 == t.paymentStatus && print("待验收（已支付）");
							break;
						case 6:
							print("维修完成")
					}
					if (__p += "</span>", 3 == t.orderType) {
						if (__p += "\n         ", 3 == t.accidentItem.processStatus) __p += "<span class=price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.accidentItem.contractBaseAmount)) ? "" : __t) + "</span>";
						else if (t.accidentItem.processStatus > 3) {
							__p += '<div style="font-size:14px;text-align:left;margin:6px 0 0 35px">理赔:&nbsp;' + (null == (__t = templateApi.price2(t.accidentItem.insuranceAmount)) ? "" : __t) + "<br>自付:&nbsp;";
							var i = t.accidentItem.contractBaseAmount - t.accidentItem.insuranceAmount;
							t.accidentItem.storePayAmount && (i -= t.accidentItem.storePayAmount), print(templateApi.price2(i)), __p += "</div>"
						}
						__p += "\n         "
					} else __p += "<span class=price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.payAmount)) ? "" : __t) + "</span>";
				switch (__p += "</div><div class=type>", t.orderType) {
					case 1:
						print("保养订单");
						break;
					case 3:
						print("事故维修订单")
				}
				__p += "</div><div class=shop>" + (null == (__t = t[e].storeName) ? "" : __t) + "</div><div class=name>" + (null == (__t = t[e].carNumber) ? "" : __t) + " ", t[e].actualMileage && (__p += "(" + (null == (__t = t[e].actualMileage) ? "" : __t) + "公里）"), __p += "</div><div class=time>", 3 == t.orderType ? t.accidentItem.sendRepairTime && print(app.dateFormat(t.accidentItem.sendRepairTime, "yyyy-mm-dd HH:MM")) : 1 == t.orderType && t.maintenanceItem.appointTime && print(app.dateFormat(t.maintenanceItem.appointTime, "yyyy-mm-dd HH:MM")), __p += "</div></div><div class=btn-box>", t.canModify && (__p += "<span class=js-edit>修改订单</span>&nbsp;\n        "), __p += "\n        ", t.canCancel && !t.canDelete && (__p += "<span class=js-cancel>取消订单</span>&nbsp;\n        "), __p += "\n        ", t.canPayment && (__p += '<span class="js-pay active" data-ajax>付款</span>'), __p += "\n        ", 1 == t.canDelete && (__p += "<span class=js-remove>删除</span>"), __p += "\n        ", t.canComment && (__p += '<span class="active js-comment">点评</span>'), __p += "\n        ", t.canAppendComment && (__p += "<span class=js-comment-again>追加点评</span>"), __p += "\n        ", t.canReRepair && (__p += '<span class="active js-repair">返修</span>'), __p += "</div></div>"
			})), __p += "";
			return __p
		}
	}), define("controller/order/index", ["textorderHtml", "PageView", "session", "util", "dateUtil", "textorderListHtml"], function(t, e, i, n, a, r) {
		var o = e.extend({
			options: {
				master: "user/index",
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-filter": "filterAction",
				"click .js-detail": "detailAction",
				"click .js-cancel": "cancelAction",
				"click .js-remove": "removeAction",
				"click .js-comment": "commentAction",
				"click .js-comment-again": "commentAgainAction",
				"click .js-edit": "editAction",
				"click .js-pay": "payAction",
				"click .js-repair": "repairAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "我的订单"
					}
				}), this.config = {
					pageSize: 20,
					pageIndex: 1
				}, "test" == config.env && (this.config.pageSize = 8)
			},
			ajax: function() {
				var t = {
						url: "ord_user/queryOrder",
						data: {
							queryOrderType: 0,
							page: {
								pageSize: this.config.pageSize,
								currentPage: this.config.pageIndex
							}
						}
					},
					e = this.query.status + "";
				if (e) switch (e) {
					case "4":
						t.data.orderStatusIn = [4], t.data.commentStatusIn = [0];
						break;
					case "2":
						t.data.orderStatusIn = [2, 3];
						break;
					case "1":
						t.data.orderStatusIn = [1, 3], t.data.paymentStatusIn = [0]
				}
				return t
			},
			onShow: function(e) {
				var i = this.query.status || "";
				this.orderList = e.list;
				var n = this.template(t),
					a = '<div class="results-none">您暂时没有相关订单!</div>';
				e.list && e.list.length && (a = this.template(r, {
					list: e.list,
					status: this.query.status
				})), this.$el.html(n), this.$(".page-content-inner").html(a), $(".btn-box").each(function() {
					var t = $(this).html().trim();
					0 == t.length && $(this).hide()
				}), this.$('.js-filter[data-status="' + i + '"]').addClass("active"), this.addOnScroll(), this.once("bottom", this.onBottom)
			},
			filterAction: function(t) {
				var e = $(t.currentTarget);
				this.config.pageIndex = 1, this.off("bottom"), this.once("bottom", this.onBottom), this.reload({
					status: e.attr("data-status")
				})
			},
			removeAction: function(t) {
				var e = $(t.currentTarget).parents(".order-list-item"),
					i = e.attr("data-id"),
					n = this.findItemById(i),
					a = this.orderList,
					r = "mtnorder/deleteOrder",
					o = {
						id: i
					};
				3 == n.orderType && (r = "ord_user/deleteOrder", o = {
					orderId: i,
					orderType: n.orderType
				}), app.ajax({
					url: r,
					data: o,
					success: function() {
						app.hint("订单删除成功"), e.remove(), _.find(a, function(t, e) {
							return t.id == i ? (a.splice(e, 1), !0) : void 0
						})
					}
				})
			},
			detailAction: function(t) {
				var e = $(t.currentTarget).parents(".order-list-item").attr("data-id"),
					i = this.findItemById(e),
					n = {
						id: e,
						itemIds: i.maintenanceItems,
						brandTypeId: i.brandTypeId
					};
				3 == i.orderType ? location.href = "/accident/order/detail?orderId=" + e : app.goTo("order/detail?" + $.param(n))
			},
			cancelAction: function(t) {
				var e = $(t.currentTarget).parents(".order-list-item").attr("data-id"),
					i = this.findItemById(e);
				app.goTo("order/cancel?id=" + e + "&orderStatus=" + i.orderStatus + "&type=" + i.orderType)
			},
			commentAction: function(t) {
				var e = $(t.currentTarget).parents(".order-list-item").attr("data-id"),
					i = this.findItemById(e);
				if (3 == i.orderType) location.href = "/accident/order/comment?orderId=" + e;
				else {
					var n = $.param({
						orderId: e,
						brandId: i.maintenanceItem.brandTypeId,
						mileage: i.maintenanceItem.actualMileage
					});
					app.goTo("comment/index?" + n)
				}
			},
			payAction: function(t) {
				function e(t) {
					$.os.android && n.compareVersion($.os.version, "<", "4.4") && alert("即将跳转支付页面..."), app.nativeApi.payment({
						payAmount: o.payAmount,
						itemName: a.itemName,
						returnUrl: i + "&orderId=" + r,
						paymentToken: t.paymentToken,
						paymentUrl: t.paymentUrl,
						orderId: r
					})
				}
				var i, a, r = $(t.currentTarget).parents(".order-list-item").attr("data-id"),
					o = this.findItemById(r);
				3 == o.orderType ? (a = {
					orderType: 3,
					itemName: "乐车邦事故维修订单",
					amount: o.payAmount
				}, i = config.paymentReturnUrl + "?" + $.param(a), app.ajax({
					url: "ord_user/getPayParam",
					data: {
						orderType: o.orderType,
						orderId: r,
						returnUrl: i
					},
					success: e
				})) : (a = {
					itemName: "乐车邦保养订单",
					amount: o.payAmount
				}, i = config.paymentReturnUrl + "?" + $.param(a), app.ajax({
					url: "mtnorder/queryPaymentUrl",
					data: {
						orderId: r,
						returnUrl: i
					},
					success: e
				}))
			},
			commentAgainAction: function(t) {
				var e = $(t.currentTarget).parents(".order-list-item").attr("data-id");
				app.goTo("comment/again?orderId=" + e)
			},
			findItemById: function(t) {
				var e = _.find(this.orderList, function(e) {
					return e.id == t
				});
				return e
			},
			editAction: function(t) {
				var e = $(t.currentTarget).parents(".order-list-item").attr("data-id");
				app.ajax({
					url: "mtnorder/queryOrder",
					data: {
						id: e,
						resultFlag: 10
					},
					success: function(t) {
						var e = t.list[0],
							n = [];
						e.maintenanceItemsInfo = JSON.parse(e.maintenanceItemsInfo), _.each(e.maintenanceItemsInfo, function(t) {
							n.push(t.itemId)
						});
						var r = new Date(a.now());
						r.setHours(0, 0, 0, 0);
						var o = new Date(e.appointTime);
						o.setHours(0, 0, 0, 0), o.getTime() <= r.getTime() && (e.appointTime += 864e5 + r.getTime() - o.getTime());
						var s = {
							brandTypeId: e.brandTypeId,
							maintenancePlanId: e.maintenancePlanId,
							mtnSaleAmount: e.mtnSaleAmount,
							effectDate: app.dateFormat(e.appointTime, "yyyy-mm-dd"),
							cityId: e.placeId,
							storeId: e.storeId,
							itemList: n.join(",")
						};
						e.appointTime = app.dateFormat(e.appointTime, "yyyy-mm-dd HH:MM:00"), e.drivingInfo && (e.drivingInfo.drivingTime = app.dateFormat(e.drivingInfo.drivingTime, "yyyy-mm-dd HH:MM"), i.set("book_driving", {
							pickCarAddress: e.drivingInfo.pickCarAddress,
							useSameAddress: e.drivingInfo.useSameAddress,
							userCity: e.drivingInfo.userCity,
							returnCarAddress: e.drivingInfo.returnCarAddress,
							drivingTime: e.drivingInfo.drivingTime
						})), i.set("oil", {
							oilInfoId: e.oilInfoId,
							oilName: e.oilName
						}), i.set("order_item", e), app.goTo("shop/list?" + $.param(s))
					}
				})
			},
			onBottom: function() {
				var t = document.createElement("div");
				if ($(t).css({
					"text-align": "center",
					color: "#999;"
				}), $(t).addClass("order-list-item"), this.orderList.length >= this.config.pageSize) {
					$(t).html("正在加载中..."), this.$(".page-content-inner").append(t);
					var e = this.query.status + "",
						i = this;
					this.config.pageIndex++;
					var n = {
						queryOrderType: 0,
						page: {
							pageSize: this.config.pageSize,
							currentPage: this.config.pageIndex
						}
					};
					if (e) switch (e) {
						case "4":
							n.orderStatusIn = [4], n.commentStatusIn = [0];
							break;
						case "2":
							n.orderStatusIn = [2, 3], n.commentStatusIn = [0];
							break;
						case "1":
							n.orderStatusIn = [1], n.paymentStatusIn = [0]
					}
					app.ajax({
						url: "ord_user/queryOrder",
						data: n,
						success: function(e) {
							if (i.$(t).remove(), e.list && e.list.length > 0) {
								i.orderList = i.orderList.concat(e.list);
								var n = i.template(r, {
									list: e.list,
									status: i.query.status
								});
								i.$(".page-content-inner").append(n), e.list.length == i.config.pageSize && i.once("bottom", i.onBottom)
							}
						}
					})
				}
			},
			repairAction: function(t) {
				var e = $(t.currentTarget),
					i = e.parents(".order-list-item").attr("data-id"),
					n = this.findItemById(i),
					a = this;
				app.ajax({
					url: "ord_user/confirmReRepair",
					data: {
						orderType: 3,
						orderId: i
					},
					success: function() {
						e.hide(), app.alert(n.canPayment ? {
							msg: "您已成功标记爱车需要返修,是否去支付",
							btns: [{
								text: "不支付",
								callback: function() {
									this.hide()
								}
							}, {
								text: "支付",
								callback: function() {
									this.hide(), a.payAction(t)
								}
							}]
						} : "您已成功标记爱车需要返修")
					}
				})
			}
		});
		return o
	}), define("textbookHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				if (__p += '<style>.book-detail{padding:10px 25px;background-color:#fff;box-shadow:1px 1px 1px 0 #d3d3d3}.book-detail h2{font-size:16px}.book-detail h3{margin-bottom:5px;font-size:13px;line-height:20px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.book-detail h3.txt-all{white-space:inherit;overflow:auto}.book-detail h3 .iconfont{color:#ccc;font-size:16px}.book-detail-list .l{display:block;font-size:13px;color:#333;font-weight:700}.book-detail-list .l i{margin-right:5px;color:#ccc;font-size:16px}.book-detail-list ul{margin-left:22px}.book-detail-list ul li{color:#666}.book-detail-list label{padding-right:10px;color:#333}.book-detail .more{position:relative;text-align:right;font-size:13px;padding-right:15px;color:#666}.book-detail .more::after{content:"";position:absolute;right:0;top:50%;margin-top:-3px;display:inline-block;vertical-align:middle;width:6px;height:6px;border-left:1px solid #666;border-bottom:1px solid #666;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform:translate(0, -50%) rotate(-45deg);-ms-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out}.book-detail .more.expanded::after{margin-top:2px;-webkit-transform:translate(0, -50%) rotate(135deg);-ms-transform:translate(0, -50%) rotate(135deg);transform:translate(0, -50%) rotate(135deg)}.book-detail .gift{padding-left:22px;font-size:13px;padding-bottom:5px;margin:5px 0}.book-detail .gift i{color:#07cdd0}.book-detail .date{font-size:13px}.book-detail .date i{color:#ccc;margin-right:5px;font-size:16px}.book-box{padding:10px}.book-name-box div{display:table-cell}.book-name-box .form-name{-webkit-box-shadow:none}.book-box .form-name{padding-left:10px;margin-right:10px;padding-right:10px;margin-bottom:0}.book-box .form-name label{width:2em;margin:0;white-space:nowrap}.form-male,.form-female{width:0.3rem;text-align:center;vertical-align:middle}.form-male i,.form-female i{display:inline-block;color:#ccc;font-size:22px;width:46px;text-align:center;border-radius:50%;height:46px;line-height:46px;background-color:#fff;background-image:url(https://img01.lechebangstatic.com/webapp/un-user.png);background-repeat:no-repeat;-webkit-background-size:92px auto;background-size:92px auto}.form-male i{background-position:-46px 0}.form-male.active i{background-position:0 0}.form-female i{background-position:-46px -46px}.form-female.active i{background-position:0 -46px}.line-item{padding-left:.15rem;padding-right:.15rem}.form-code .form-item{border-radius:5px}.form-block li{background:transparent;border-bottom:none;margin-bottom:none}.book-bom{background:0;border-bottom:0}.book-get .field-label{width:100px;margin-left:-100px}.book-fixed{background:#fff;height:63px;padding:5px 0 0 15px;box-sizing:border-box;color:#cfcfcf;font-size:12px}.book-fixed .book-btn{position:absolute;width:114px;margin-top:-5px;right:10px}.book-fixed .book-btn .icon-arrow{vertical-align:middle}.book-fixed .pub-price{font-size:30px}.book-fixed .pub-price-gray{font-size:14px;text-decoration:line-through;position:absolute;top:60%;left:16px}.book-box .code-btn{right:-110px}.book-box .form-code{margin-right:110px;padding-right:10px}.book-info{height:20px;line-height:20px;margin:6px 0;display:block;padding-left:10px}.book-info span{color:#666;font-size:13px;height:20px;line-height:20px;display:inline-block;margin-left:3px}.maintain{margin-bottom:10px;background-color:#fff;border-radius:4px;font-size:15px;line-height:0.57rem;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.2)}.maintain li{display:block}.maintain-left{float:left;margin-left:0.15rem}.maintain-right{float:right;margin-right:0.15rem;display:inline-block}.new{color:#666;padding-left:0.15rem}.car-number{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:0;background:none;border-radius:0 0 0 0;-webkit-box-shadow:none;box-shadow:none;padding:0;margin:0;width:70%;height:52px;color:#666;font-size:15px}.discount{color:#ff7d13}.bk-shop-tip-bar{background:#efeff4;font-size:13px;color:#ff7d13;line-height:32px;text-align:center;border-bottom:1px solid #efeff4}.jgmx{color:#fff;padding-left:0.5rem;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:1.8rem;line-height:63px}.list-inf{background-color:#fff;width:86%;margin:0 auto;padding:4px 7% 0;overflow:auto;-webkit-overflow-scrolling:touch}.list-board{border-bottom:1px dotted #b3b3b3;line-height:0.3rem}.jg{float:right}.firstDrivingFreeContent{position:relative}.mfqs{padding:8px;background-color:#fff;color:#666;border-radius:5px;text-align:center}.closed{position:absolute;font-size:14px;top:0.55rem;right:0.05rem}.mfqs-refuse{color:#ff826d;line-height:44px;border:1px solid #ff826d;width:47.5%;height:44px;font-size:16px;display:block;border-radius:6px;float:left}.wyqs{width:47.5%;height:44px;display:block;border-radius:6px;float:right;line-height:44px;border-bottom:2px solid #ec705c;box-shadow:0 1px #da5f55;font-size:16px;color:#fff;background-color:#ff826d}.smqc-img{background:url(https://img01.lechebangstatic.com/webapp/user5.png) no-repeat;width:100%;height:140px;background-size:200px 190px;background-position:50% 6%;margin-top:-49px}.info-amount{position:absolute;top:50%;transform:translateY(-50%);right:0;-webkit-transform:translateY(-50%);font-size:.15rem}.gray1{color:#666}.sel_list .pub-radio-list li::before,.comment-top::before,.pay-success-box::before,.book-detail:before,.book2-top::before,.order-detail-top::before,.order-detail-box::before,.order-follow-top::before,.order-follow-box::before,.comment-submit-top::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:none;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.jgmx::after{content:"";position:absolute;right:-12px;top:58%;margin-top:-3px;display:inline-block;vertical-align:middle;width:6px;height:6px;border-left:1px solid #fff;border-bottom:1px solid #fff;-webkit-transform:translate(0,-50%) rotate(135deg);transform8:translate(0,-50%) rotate(135deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out}.jgmx.active::after{top:50%;-webkit-transform:translate(0,-50%) rotate(-45deg);transform:translate(0,-50%) rotate(-45deg)}.price-size{font-size:0.15rem}</style><div class=page-content>', 3 == paymentPolicy && (__p += "<div class=pub-tips><i class=iconfont>&#xe60f;</i>&nbsp;取消政策: 特价保养套餐一经支付不予退还。</div>"), __p += "<div class=book-detail><h2>" + (null == (__t = shop.storeName) ? "" : __t) + "</h2><h3 class=js-address><i class=iconfont>&#xe607;</i>&nbsp;&nbsp;" + (null == (__t = shop.address) ? "" : __t) + "&nbsp;&nbsp;&nbsp;&nbsp;\n    ", shop.distance && (__p += "<span>距离" + (null == (__t = templateApi.distance(shop.distance)) ? "" : __t) + "</span>"), __p += "</h3><h3 class=js-address><i class=iconfont>&#xe653;</i>&nbsp;&nbsp;", print(brandTypeFullName), __p += '</h3></div><div class=book-box><ul class="maintain " style="height: 1.14rem;' + (null == (__t = limitCarNoInfo ? "margin-bottom:3px;" : "") ? "" : __t) + '"><li><label class="maintain-left ">保养日期</label><span class=maintain-right>' + (null == (__t = date) ? "" : __t) + '</span></li><li class=js-show-time style="clear:both;border-top:1px solid #f6f6f6"><label class=maintain-left>保养时间</label><span class=maintain-right><span class=js-time-value>' + (null == (__t = form.time) ? "" : __t) + "</span>&nbsp;&nbsp;<i class=iconfont style>&#xe623;</i></span></li></ul>", limitCarNoInfo && (__p += "<p style=clear:both;margin-bottom:3px class=new><i class=iconfont>&#xe60f;</i>限号提醒：" + (null == (__t = app.dateFormat(date, "mm月dd日")) ? "" : __t) + "尾号" + (null == (__t = limitCarNoInfo.replace(",", "和")) ? "" : __t) + "禁止通行</p>"), __p += '<ul class="line-list line-list--switch  form-block" style="', "undefined" != typeof cityId && 10803 == cityId && print("display:none;"), __p += '"><li class=line-item>上门取送<i class="icon-switch js-driving', hasDriving && print(" active"), __p += '" style=right:.15rem></i></li></ul><div class="form-item form-item--arrow-btn form-text js-driving-item write-car-info" style="', hasDriving || print("display:none;"), __p += '"><label class=field-label style="margin:0 0 0 .15rem">填写取送车信息</label><i class=icon-arrow style=right:.05rem></i></div><ul class="maintain " style=height:1.8rem><li><label class="maintain-left ">车牌号码</label><div class=" maintain-right" style=text-align:right;width:65%><span class=js-carnumber style><i class=iconfont style=font-size:24px;color:#666>&#xe646;</i><span class=js-carnumber-txt>', print(form.carNumber ? form.carNumber.slice(0, 1) : car.carNumber.slice(0, 1)), __p += '</span></span><input type=text style=width:50%;text-align:right;padding-left:5px class="tr js-car-number car-number" placeholder=请输入车牌号 value="' + (null == (__t = form.carNumber ? form.carNumber.slice(1, form.carNumber.length) : "") ? "" : __t) + '" maxlength=6></div></li><li style="clear:both;border-top:1px solid #f6f6f6"><label class=maintain-left>联系人</label><div class=maintain-right><input type=text class="tr js-name car-number" placeholder=请输入联系人姓名 value="' + (null == (__t = form.name) ? "" : __t) + '" style=width:1.6rem;float:left;height:0.6rem maxlength=5><div class="form-male js-sex', 1 == form.sex && print(" active"), __p += '" data-sex=1 style="float:left;margin:0.05rem 0.25rem 0 0.05rem"><i class=iconfont>&nbsp;</i></div><div class="form-female js-sex', 2 == form.sex && print(" active"), __p += '" data-sex=2 style="float:right;margin:0.05rem 0.15rem 0 0"><i class=iconfont>&nbsp;</i></div></div></li><li style="clear:both;border-top:1px solid #f6f6f6"><label class=maintain-left style=height:0.57rem>手机号码</label><div class=" maintain-right" style=width:2.5rem;text-align:right><input type=tel class="tr js-mobile car-number" placeholder=请输入手机号码 value="' + (null == (__t = form.mobile) ? "" : __t) + '" maxlength=11></div></li></ul>', 2 == paymentPolicy && (__p += '<div class="form-item form-item--arrow-btn form-text "><label class=field-label style="margin:0 0 0 .15rem">优惠券</label><div class="field-text-wrap tr js-discount">', __p += discount.id ? "<strong class=pub-price><dfn>&minus;&nbsp;&yen;</dfn>" + (null == (__t = templateApi.price(discount.amount)) ? "" : __t) + "</strong>" : "\n      不使用\n      ", __p += "</div><i class=icon-arrow style=right:.05rem></i></div>"), __p += "\n  ", 2 == paymentPolicy && (__p += '<div class="bk-shop-tip-bar book-bom"><i class=iconfont>&#xe609;</i>过期退 &nbsp;&nbsp;&nbsp;&nbsp;<i class=iconfont>&#xe609;</i>随时退</div>'), __p += '</div><div style=height:63px>&nbsp;</div></div><footer class=page-bottom><div class=book-fixed style=background:#2c3c4a><div class=book-btn><span class="btn-primary full-width js-pay" data-ajax style=margin-top:10px>', print("book/edit" == app.currentPage.ctrlName ? "确认修改" : "去支付"), __p += "</span></div>", "book/edit" != app.currentPage.ctrlName) {
					__p += "\n    ";
					var salePrice = shopRule.salePrice;
					hasDriving && (salePrice += 5900), 3 == paymentPolicy && (salePrice = PaymentPolicyInfo.result.payAmount), 2 == paymentPolicy && discount.amount && (salePrice = Math.max(0, salePrice - discount.amount)), salePrice = parseInt(salePrice / 100, 10), __p += '<span class=pub-price><dfn class=font-xs>&yen;</dfn><span class data-price="' + (null == (__t = shopRule.salePrice) ? "" : __t) + '">' + (null == (__t = salePrice) ? "" : __t) + '</span></span><br><span class=pub-price-gray><dfn class=font-xs>&yen;</dfn><span class data-price="' + (null == (__t = shopRule.oriPrice) ? "" : __t) + '">' + (null == (__t = templateApi.price(shopRule.oriPrice)) ? "" : __t) + '</span></span><div class="jgmx js-filter">价格明细&nbsp;</div>'
				}
				__p += '</div></footer><div class="js-filter-show  " style=display:none><ul style="max-height:' + (null == (__t = document.documentElement.clientHeight - 150) ? "" : __t) + 'px;" class="list-inf font-s">', _.each(maintenanceItemsInfo, function(t) {
					__p += "<li class=list-board style=position:relative><div style=width:85%>" + (null == (__t = t.name) ? "" : __t) + "<span class=gray1>", print(1 == t.itemId ? "(" + t.descrption + ") " + templateApi.oilNum(t.remarks) : "(" + t.descrption + ") "), __p += '</span></div><span class="jg info-amount gray1">', print(templateApi.price2(t.salePrice)), __p += "</span></li>"
				}), __p += '<li style=height:0.28rem;padding-top:3px>免费保养检测<span class="jg gray1 price-size"><span class=font-xs>&yen;</span>0</span></li>', hasDriving && (__p += '<li style=height:0.28rem>上门取送<span class="jg gray1 price-size "><span class=font-xs>&yen;</span>59</span></li>'), __p += "\n    ", discount.amount && (__p += '<li style>优惠券<span class="jg gray1  price-size">-<span class=font-xs>&yen;</span>' + (null == (__t = templateApi.price(discount.amount)) ? "" : __t) + "</span></li>"), __p += '</ul></div><div style=display:none class=firstDrivingFreeContent id=firstDrivingFreeContent><p class=smqc-img><i class="iconfont closed">&#xe630;</i></p><div class="mfqs "><p style=font-size:16px;font-weight:600>上门取送&nbsp; 首次免费</p><p style=padding-bottom:15px>专属取送员为您提供极致体验</p><a class="mfqs-refuse js-check-driving" data-type=no>免费也不要</a><a class="wyqs js-check-driving" data-type=yes>我要取送</a><br style=clear:both></div></div>'
			}
			return __p
		}
	}), define("textfreeCheckHtml", [], function() {
		return "<ol style=margin-bottom:10px><div style=margin-left:-20px>您的爱车在4S店保养过程中会进行一系列标准保养检测，具体检测项目以授权4S店及厂方技术标准为准。\n常见标准保养检测项目汇总如下：</div><div style=height:10px></div><li>车身内外照明电器，用电设备检查功能；</li><li>自诊断：诊断设备读取各系统控制器内的故障存储信息；</li><li>空调系统:检查泄露及损坏,空调系统功能性检测,检查散热器风扇,检查流水槽及排水口；</li><li>手制动器：检查，必要时调整；</li><li>全车油液检查液位，必要时添加；</li><li>雨刮器/ 清洗装置：检查雨刮片，必要时更换；检查清洗装置功能，必要时调整并加注清洗液；</li><li>发动机舱：检查发动机泄露及噪音，多楔带检查，检查燃油管路、真空管路、电气线路、制动管路、ATF 油冷却器管路是否存在干涉或损坏，必要时调整；</li><li>蓄电池：观察蓄电池上电眼，必要时使用专用设备 检测蓄电池状况，检查正负极连接状态；</li><li>变速箱/ 传动轴护套：检查有无渗漏和损坏，连接是否牢固；</li><li>转向横拉杆/ 稳定杆/ 连接杆：检查是否有间隙，连接是否牢固；</li><li>车身底部：检查燃油管，制动液管是否干涉以及底部保护层是否损坏，排气管是否泄漏，固定是否牢靠；</li><li>底盘螺栓：检查并按规定扭矩紧固；</li><li>制动系统：检查制动液管路、制动系统零部件是否泄漏，检查制动液液面，必要时补充；</li><li>制动片及制动盘磨损检查；</li><li>轮胎/ 轮毂（包括备胎）：检查轮胎磨损情况，同时校正轮胎气压；</li><li>车轮固定螺栓：检查并按规定扭矩紧固；</li></ol><div>注意：为了保证您在驾驶过程中的顺畅和安全，技师在为您的爱车进行保养检测后，可能会根据您的爱车零部件使用磨损情况提出增项保养建议，增项保养项目需要您在4S店直接支付备件和工时费用。如果对增项保养项目有异议，请致电乐车邦400-6300-111获得专业建议。</div>"
	}), define("textUIScreenHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class=pub-overlay-screen style=z-index:502></div><div class=pub-modal--screen><h3>" + (null == (__t = title) ? "" : __t) + "</h3><div class=pub-modal--content>" + (null == (__t = msg) ? "" : __t) + "</div></div>";
			return __p
		}
	}), define("UIScreen", ["UIAbstract", "textUIScreenHtml"], function(t, e) {
		var i = t.extend({
			options: {
				title: "",
				msg: ""
			},
			events: {
				click: "remove"
			},
			attributes: {
				"class": "pub-screen"
			},
			_create: function() {
				var t = this.template(e, this.options);
				this.$el.html(t), this.on("onShow", this.scrollTop)
			},
			scrollTop: function() {
				window.scrollTo(0, 0)
			}
		});
		return i
	}), define("textUIScrollListHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class=pub-scroll-select-header><span class=js-hide style=float:left>取消</span><span class=js-sure style=float:right>确定</span><h3>" + (null == (__t = title) ? "" : __t) + '</h3></div><div class="flex-wrap pub-scroll-select-group">', _.each(group, function(t) {
				__p += "<div class=flex><div class=pub-scroll-select><ul class=pub-select-list><li class=pub-select-item>&nbsp;</li><li class=pub-select-item>&nbsp;</li>", _.each(t, function(t) {
					__p += '<li class=pub-select-item data-value="' + (null == (__t = t.value) ? "" : __t) + '">' + (null == (__t = t.text) ? "" : __t) + "</li>"
				}), __p += "<li class=pub-select-item>&nbsp;</li><li class=pub-select-item>&nbsp;</li></ul></div></div>"
			}), __p += "</div><div class=scroll-select-line></div><div class=scroll-select-line style=top:176px></div><div class=pub-select-mask></div>";
			return __p
		}
	}), define("UIScrollList", ["UIAbstract", "IScroll", "textUIScrollListHtml"], function(t, e, i) {
		var n = t.extend({
			options: {
				title: "",
				group: [],
				selected: [],
				changed: _.noop,
				done: _.noop
			},
			attributes: {
				"class": "pub-scroll-select-box"
			},
			events: {
				"click .js-hide": "hide",
				"click .js-sure": "sureAction"
			},
			_create: function() {
				_.each(this.options.group, function(t) {
					_.each(t, function(e, i) {
						_.isObject(e) || (t[i] = {
							text: e,
							value: e
						})
					})
				});
				var t = this.template(i, this.options);
				this.$el.html(t), this.on("onShow", this._initScroll), this.on("onHide", function() {
					this.$bg.hide()
				})
			},
			_initScroll: function() {
				var t = this;
				if (this.itemHeight = this.$(".pub-select-item").height(), this.iscroll) {
					for (var i = 0; i < this.iscroll.length; i++) {
						var n = this.iscroll[i];
						n.refresh(), n.scrollTo(0, n.currentPos * this.itemHeight)
					}
					return void this.$bg.show()
				}
				this.$bg = $('<div class="pub-overlay-scroll"></div>'), this.$bg.on("click", function() {
					t.hide()
				}), this.$bg.insertBefore(this.$el), this.iscroll = [], this.$(".pub-scroll-select").each(function(i) {
					var n = new e(this, {
							scrollX: !1
						}),
						a = $(this);
					n.on("scrollEnd", function() {
						var e = -this.y / t.itemHeight,
							n = parseInt(e, 10),
							a = e - n;
						a > .5 && n++;
						var r = $(this.scroller).find("li").eq(n + 2).data("value");
						t.options.selected[i] = r, t.selectedValue(i), t.options.changed(t.options.selected)
					}), t.iscroll.push(n), t.selectedValue(i), a.find("ul").css("height", a.find("li").length * t.itemHeight)
				})
			},
			selectedValue: function(t) {
				var e = this.iscroll[t],
					i = this.options.group[t],
					n = this.options.selected[t],
					a = 0,
					r = $(e.scroller).find("li");
				if (n) {
					for (l = i.length; l--;)
						if (i[l].value == n) {
							a = l;
							break
						}
				} else this.options.selected[t] = r.eq(2).attr("data-value");
				return 0 == a && (this.options.selected[t] = r.eq(a + 2).attr("data-value")), r.removeClass("active").eq(a + 2).addClass("active"), e.scrollTo(0, -a * this.itemHeight), e.currentPos = -a, a
			},
			sureAction: function() {
				this.options.done.call(this, this.options.selected)
			},
			remove: function() {
				n.__super__.remove.call(this), this.$bg.remove()
			}
		});
		return n
	}), define("textUICarNumberHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<div style="background:#eaebec;padding:.1rem 0 .1rem .1rem">', _.each(list, function(t, e) {
				__p += "\n  ", e % 8 == 0 && (__p += '<div class="flex-wrap carnumber-wrap">'), __p += '<div class=flex><div class="font carnumber-item js-item', active == t && print(" active"), __p += '">' + (null == (__t = t) ? "" : __t) + "</div></div>", (e + 1) % 8 == 0 && (__p += "</div>"), __p += "\n  "
			}), __p += "</div>";
			return __p
		}
	}), define("UICarNumber", ["UIFooterSlide", "textUICarNumberHtml", "geolocation"], function(t, e, i) {
		var n = ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀", "豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂", "湘", "赣", "闽", "陕", "甘", "宁", "蒙", "津", "贵", "云", "桂", "琼", "青", "新", "藏", "台"],
			a = t.extend({
				options: {
					template: e,
					data: {
						list: n
					},
					callback: _.noop,
					itemCallback: _.noop
				},
				events: {
					"click .js-item": "itemCallbackAction",
					"click .carnumber-btn": "sureAction"
				},
				attributes: {
					"class": "footer-slide"
				},
				_create: function() {
					this.options.data.active || (this.options.data.active = a.getDefaultNumber()), t.prototype._create.call(this)
				},
				itemCallbackAction: function(t) {
					var e = $(t.currentTarget),
						i = e.html().trim();
					this.$(".js-item.active").removeClass("active"), e.addClass("active"), this.options.data.active = i, this.options.itemCallback.call(this, i)
				},
				sureAction: function() {
					this.options.callback.call(this, this.options.data.active)
				}
			}, {
				getDefaultNumber: function() {
					var t, e = i.getPostion().addressComponent.city;
					switch (e) {
						case "北京":
							t = "京";
							break;
						case "天津":
							t = "津";
							break;
						case "重庆":
							t = "渝";
							break;
						case "广州":
						case "深圳":
						case "佛山":
						case "东莞":
							t = "粤";
							break;
						case "杭州":
							t = "浙";
							break;
						case "苏州":
							t = "苏";
							break;
						case "厦门":
							t = "闽";
							break;
						case "成都":
							t = "川";
							break;
						case "上海":
							t = "沪"
					}
					return t
				}
			});
		return a
	}), define("controller/book/edit", ["textbookHtml", "textfreeCheckHtml", "PageView", "dateUtil", "session", "local", "UIScreen", "UIScrollList", "UICarNumber"], function(t, e, i, n, a, r, o, s, l) {
		var c = i.extend({
			onCreate: function() {
				this.header.option({
					center: {
						text: "订单修改"
					}
				}), this.order = a.get("order_item"), this.shop = a.get("current_shop"), this.shopRule = a.get("current_shop_rule"), this.order.hasDriving && (this.driving = a.get("book_driving"), this.driving.drivingTime = this.driving.drivingTime.replace(/\d+-\d+-\d+/, this.query.date), a.set("book_driving", this.driving))
			},
			events: {
				"click .js-show-time": "showScrollListAction",
				"click .js-check": "checkAction",
				"click .js-sex": "sexAction",
				"click .js-pay": "payAction",
				"click .js-driving-item": "drivingAction",
				"click .js-carnumber": "carnumberAction"
			},
			onShow: function() {
				this.orderTime = a.get("order_times");
				var e = this.order,
					i = {
						carNumber: e.carNumber,
						name: e.contactUserName,
						sex: e.contactUserGender,
						mobile: e.contactUserMobile
					};
				i.time = this.orderTime.length ? this.orderTime[0].startTime.replace(/:\d+$/, "") : app.dateFormat(this.order.appointTime, "HH:MM"), i.carNumber || (i.carNumber = l.getDefaultNumber()), e.voucherInfo = e.voucherInfo || {};
				var n = this.template(t, {
					paymentPolicy: e.paymentPolicy,
					shop: this.shop,
					maintenanceItemsInfo: this.order.maintenanceItemsInfo,
					date: this.query.date,
					form: i,
					hasDriving: e.hasDriving,
					discount: e.voucherInfo,
					shopRule: this.shopRule,
					oil: a.get("oil"),
					limitCarNoInfo: null,
					brandTypeFullName: e.brandTypeFullName.replace(/\//g, "")
				});
				this.$el.html(n)
			},
			showScrollListAction: function() {
				if (this.scrollList) this.scrollList.show();
				else {
					var t = this.orderTime,
						e = [],
						i = [],
						a = this,
						r = this.$(".js-time-value").html().trim();
					r = r ? r.split(":") : [], _.each(t, function(t) {
						var i = t.startTime.split(":"),
							n = t.endTime.split(":"); - 1 == e.indexOf(i[0]) && e.push(i[0]), n[0] != i[0] && -1 == e.indexOf(n[0]) && e.push(n[0])
					}), _.each(e, function(t, i) {
						e[i] = {
							text: t,
							value: t
						}
					});
					for (var o = 0; 60 > o; o += 5) i.push({
						text: n.parseNumber(o),
						value: n.parseNumber(o)
					});
					this.scrollList = new s({
						appendElement: this.el,
						title: "保养时间",
						group: [e, i],
						selected: r,
						done: function(e) {
							if (n.isValidTime(t, e)) e = e.join(":"), a.$(".js-time-value").html(e), this.hide();
							else {
								e = e.join(":");
								var i = t[t.length - 1].endTime;
								app.alert(1 == n.compareTime(i, e) ? "保养最早时间为" + t[0].startTime : "保养最晚时间为" + i)
							}
						}
					})
				}
			},
			getValues: function() {
				var t = this.$(".js-time-value").html().trim(),
					e = this.$(".js-carnumber-txt").html().trim() + this.$(".js-car-number").val().trim(),
					i = this.$(".js-name").val().trim(),
					n = this.$(".js-mobile").val().trim(),
					r = this.$(".js-sex.active").attr("data-sex");
				_.extend(this.order, {
					appointTime: this.query.date + " " + t + ":00",
					carNumber: e,
					contactUserName: i,
					contactUserMobile: n,
					contactUserGender: r
				}), a.set("order_item", this.order)
			},
			sexAction: function(t) {
				var e = $(t.currentTarget);
				this.$(".js-sex.active").removeClass("active"), e.addClass("active")
			},
			checkAction: function() {
				new o({
					appendElement: document.body,
					title: "保养检测说明",
					msg: e
				})
			},
			drivingAction: function() {
				this.getValues(), a.set("book_form", {
					time: this.$(".js-time-value").html().trim()
				}), app.goTo("book/driving?date=" + this.query.date)
			},
			payAction: function() {
				this.getValues();
				var t = this.order;
				if (!t.carNumber) return void app.alert("请填写车牌号码");
				if (!t.contactUserName) return void app.alert("请填写姓名");
				if (!$(".js-car-number").val().trim()) return void app.alert("请输入车牌号后6位");
				if (!t.contactUserMobile) return void app.alert("请填写手机号码");
				var e = [];
				_.each(this.order.maintenanceItemsInfo, function(t) {
					e.push(t.itemId)
				});
				var i = {
					carNumber: t.carNumber,
					maintenanceItem: {
						appointTime: t.appointTime,
						contactUserGender: t.contactUserGender,
						contactUserMobile: t.contactUserMobile,
						contactUserName: t.contactUserName,
						hasDriving: t.hasDriving,
						maintenancePlanId: t.maintenancePlanId,
						maintenanceItems: e,
						oilInfoId: this.order.oilInfoId
					},
					orderId: t.id,
					storeId: this.shop.id
				};
				t.hasDriving && (i.drivingItem = this.driving);
				var n = this;
				app.ajax({
					url: "mtnorder/changeOrder",
					data: i,
					success: function(e) {
						app.goTo("order/result?orderId=" + e.id + "&status=10"), t.id = e.id, a.set("order_item", t)
					},
					error: function(t) {
						app.alert(4082 == t.statusCode ? {
							msg: t.msg,
							btns: [{
								text: "确定",
								callback: function() {
									n.drivingAction()
								}
							}]
						} : t.msg)
					}
				})
			},
			carnumberAction: function() {
				var t = this.$(".js-carnumber-txt"),
					e = new l({
						appendElement: document.body,
						data: {
							active: t.html().trim()
						},
						itemCallback: function(e) {
							t.html(e), this.hide()
						}
					});
				e.show()
			}
		});
		return c
	}), define("textorderResultHtml", [], function() {
		return function(obj) {
			var __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.pay-success-box{margin-bottom:10px;padding:20px 0;background:#fff;text-align:center;font-size:18px}.pay-success-box i{font-size:60px;color:#07cdd0}.pay-success-box h3{font-size:18px;color:#666}.tip-pay-success{font-size:18px;color:#666;margin-bottom:20px}.tip-pay-success i{font-size:30px;color:#07cdd0}.detail-share{padding:10px 0;background-color:#fff;border-radius:5px;color:#333;font-size:13px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.detail-share .img-box{position:relative}.detail-share .img-box img{width:50%}.detail-share .img-box .num{position:absolute;width:100%;text-align:center;bottom:10%;color:#fff;font-size:18px;font-weight:700}.detail-share p{padding:10px 0}.detail-share p span{color:#ff826d}.share-btn{width:100%}.share-btn span{display:inline-block;vertical-align:middle}.share-btn .btn-primary{height:36px;line-height:36px}.sel_list .pub-radio-list li::before,.comment-top::before,.pay-success-box::before,.book-detail:before,.book2-top::before,.order-detail-top::before,.order-detail-box::before,.order-follow-top::before,.order-follow-box::before,.comment-submit-top::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:none;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}</style><div class=pay-success-box style="border-bottom:1px solid #dcdce1">', 1 == status || 10 == status ? (__p += "<i class=iconfont>&#xe611;</i><h3>", print(10 == status ? "修改完成" : "支付完成"), __p += "</h3>") : __p += "<i class=iconfont>&#xe620;</i><h3>支付未完成</h3>", __p += '</div><div class=plr10><div class="form-item form-item--arrow-btn form-block js-detail"><label class="field-label tc">订单详情</label><i class=icon-arrow></i></div></div>';
			return __p
		}
	}), define("textUIShareHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div class="ui-share-header font-s">' + (null == (__t = title) ? "" : __t) + "</div><div class=ui-share-body><ul class=flex-wrap>", _.each(list, function(t, e) {
				var i = app.nativeApi.has("share." + t.sharetype);
				"undefined" != typeof channels && (i = i && -1 != channels.indexOf(t.sharetype)), __p += "\n      ", (i || t.has) && (__p += '<li class="flex ui-share-item" data-index="' + (null == (__t = e) ? "" : __t) + '"><i class="iconfont ui-share-bg ' + (null == (__t = t.sharetype) ? "" : __t) + " " + (null == (__t = t.className) ? "" : __t) + '">' + (null == (__t = t.icon) ? "" : __t) + "</i><p class=font-s>" + (null == (__t = t.text) ? "" : __t) + "</p></li>")
			}), __p += "</ul><div class=ui-share-cancel>取消</div></div>";
			return __p
		}
	}), define("UIShare", ["UIFooterSlide", "textUIShareHtml", "prefix"], function(t, e) {
		var i = t.extend({
			options: {
				sharetype: "weixin",
				businessparams: {
					url: "https://m.lechebang.com/" + config.baseUrl + "/"
				},
				data: {
					list: [{
						sharetype: "weixin",
						icon: "&#xe618;",
						text: "微信好友",
						type: 1,
						className: "ui-share-weixin"
					}, {
						sharetype: "weixin",
						icon: "&#xe62e;",
						text: "微信朋友圈",
						type: 2,
						className: "ui-share-quan"
					}, {
						sharetype: "weibo",
						icon: "&#xe63d;",
						text: "新浪微博",
						type: 1,
						className: "ui-share-weibo"
					}, {
						sharetype: "qq",
						icon: "&#xe63b;",
						text: "QQ好友",
						type: 1,
						className: "ui-share-qq"
					}],
					title: '邀请好车友，共享<span style="color:#e7131c">乐车邦</span>'
				},
				callback: _.noop,
				template: e
			},
			events: {
				"click .ui-share-cancel": "hide",
				"click .ui-share-item": "shareAction"
			},
			shareAction: function(t) {
				var e = $(t.currentTarget).data("index"),
					i = this.options,
					n = i.data.list[e];
				if (n.callback) return n.callback.call(this);
				var a = {
					sharetype: n.sharetype,
					businessparams: _.clone(i.businessparams)
				};
				"weixin" == n.sharetype ? a.businessparams.weixintype = n.type : a.businessparams.sharetype = n.type, "weibo" == n.sharetype && "@" != a.businessparams.showcontent.substr(0, 1) && (a.businessparams.showcontent = "@乐车邦APP " + i.businessparams.showcontent), 0 == a.businessparams.url.indexOf("//") && (a.businessparams.url = location.protocol + a.businessparams.url), i.shareParse && (a = i.shareParse.call(this, a)), wvjb.callHandler("share." + n.sharetype, a, _.noop), $.os.lechebang && setTimeout(this.options.callback, 2e3), this.hide()
			}
		});
		return i
	}), define("controller/order/result", ["textorderResultHtml", "PageView", "UIShare"], function(t, e, i) {
		var n = e.extend({
			events: {
				"click .js-detail": "detailAction",
				"click .js-share": "shareRedPackAction"
			},
			onCreate: function() {
				var t = this.query.orderId || this.query.orderIds;
				this.orderId = t, this.header.option({
					left: !1,
					center: {
						text: "支付结果"
					},
					right: [{
						text: '<i class="iconfont"  >&#xe60a;</i>',
						callback: function() {
							app.goBack("")
						}
					}]
				})
			},
			onShow: function() {
				var e = this,
					i = this.template(t, this.query);
				if (this.$el.html(i), 1 == this.query.status && app.nativeApi.checkShare() && this.shareTipAction(), 1 == this.query.status && window._hmt) {
					var n = {
						orderId: this.orderId,
						orderTotal: e.query.amount / 100,
						item: []
					};
					n.item.push({
						skuId: this.orderId,
						skuName: e.query.itemName,
						category: e.query.itemName + ">" + this.orderId + ">" + e.query.amount / 100,
						Price: e.query.amount / 100,
						Quantity: 1
					}), _hmt.push(["_trackOrder", n])
				}
			},
			detailAction: function() {
				var t = this.orderId;
				app.goTo(3 == this.query.orderType ? "/accident/order/detail?orderId=" + t : "order/detail?id=" + t)
			},
			shareTipAction: function() {
				var t = this,
					e = '<div class="detail-share">';
				e += '<div class="tip-pay-success"><i class="iconfont">&#xe611;</i> 支付成功，分享领红包！</div>', e += '<div class="img-box"><img src="https://img01.lechebangstatic.com/webapp/detail-share.png" alt="">', e += "</div>", e += "<p>分享红包给好友，即刻自领<span>200</span>元 <br>红包被抢光，再奖<span>100</span>元，不限额随便花！</p>", e += '<div class="share-btn">', e += '<span class="btn-link2 js-tip-close">给钱也不要</span> &nbsp;', e += '<span class="btn-primary js-share">现在就分享</span>', e += "</div>", e += "</div>", app.alert({
					msg: e,
					btns: []
				}), $(".js-tip-close").on("click", function() {
					app._alert.hide()
				}), $(".js-share").on("click", function() {
					app.ajax({
						url: "mkt/createOrderRedpack",
						data: {
							orderId: t.orderId
						},
						session: !0,
						success: function(e) {
							t.redpack = e, t.shareRedPackAction()
						}
					})
				})
			},
			shareRedPackAction: function() {
				var t = this;
				app._alert.hide();
				var e = new i({
					appendElement: document.body,
					businessparams: {
						thumb: "lechebang180.png",
						thumburl: config.imgCdnRoot + "marketing/400/lechebang180.png",
						url: config.redpackShareUrl + t.redpack.redpack.redpackCode,
						businesstype: 3,
						showtitle: "我用乐车邦APP在4S店做汽车保养，顺便帮你抢了些钱，速速拿走！",
						showcontent: "30大品牌4S店汽车保养低至2折哦，有车的朋友赶快抢，做保养就这么便宜，别说我没告诉你。"
					}
				});
				e.show()
			}
		});
		return n
	}), define("textorderDetailHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				switch (__p += '<style>.order-detail-top{margin-bottom:10px;padding:10px 0;text-align:center;font-size:14px;background:#fff;border-top:1px solid #dcdce1}.order-detail-top span{display:inline-block;padding:5px 0;width:80%;border:1px solid #ff826d;background-color:#fff;font-size:18px;color:#ff826d;border-radius:5px}.order-detail-box{margin-top:10px;position:relative;margin-bottom:10px;padding:5px 10px;background:#fff;border-bottom:1px solid #dcdce1}.order-detail-box li{position:relative;padding:3px 0 3px 70px;font-size:14px}.order-detail-box li label{display:inline-block;width:70px;margin-left:-70px;vertical-align:middle;color:#666}.order-detail-box .more{position:absolute;bottom:10px;right:10px}.order-detail-box .btn-order{position:absolute;top:-3px;right:10px;border:1px solid #07cdd0;border-radius:3px;padding:3px 5px;color:#07cdd0;font-size:12px;background-color:#fff}.order-detail-box .btn-order2{display:inline-block;border:1px solid #07cdd0;border-radius:3px;padding:3px 5px;color:#07cdd0;font-size:12px;background-color:#fff}.order-detail-box .item li{padding:3px 0}.order-detail-box .pub-price{font-size:20px;line-height:1.1;vertical-align:bottom}.order-detail-box .pub-price dfn{vertical-align:bottom}.order-detail-box .iconfont{margin-left:4px;color:#07cdd0;font-size:15px}.order-detail-invoice{padding-bottom:10px;text-indent:10px;color:#666}.order-detail-tel{display:block;line-height:44px;text-align:center;font-size:15px;color:#07cdd0;background:#fff}.pop-follow{background:none!important;position:absolute;border-bottom:0!important;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.order-share-pic{position:absolute;right:20px;bottom:20px;width:55px}.order-share-pic img{width:100%}.order-share-pic .num{position:absolute;bottom:3px;width:100%;text-align:center;font-size:14px;font-weight:700;color:#fff}.detail-share{padding:10px 0;background-color:#fff;border-radius:5px;color:#333;font-size:13px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.detail-share .img-box{position:relative}.detail-share .img-box img{width:50%}.detail-share .img-box .num{position:absolute;width:100%;text-align:center;bottom:10%;color:#fff;font-size:18px;font-weight:700}.detail-share p{padding:10px 0}.detail-share p span{color:#ff826d}.share-btn{width:100%}.share-btn span{display:inline-block;vertical-align:middle}.share-btn .btn-primary{height:36px;line-height:36px}.quote-book-fixed{background:#fff;height:63px;padding:5px 10px 0;box-sizing:border-box;color:#cfcfcf;font-size:12px}.mini-rmb{font-size:12px}.item-relative{position:relative;border-bottom:1px solid #ececec}.item-content-left{color:#333;margin:0 52px 0 0}.item-content-right-price{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#333;font-size:14px;right:0}.item-content-right-price span{color:#666}.icon-address-right{position:absolute;right:-15px;top:0}.icon-mobile-right{position:absolute;right:5px}.btn-red-line{display:block;margin-top:15px;line-height:44px;height:44px;border:1px solid #da5f55;color:#da5f55;font-weight:700;font-size:18px;border-radius:4px;text-align:center}.order-detail-box ul li label.active,.order-detail-box ul li span.js-coupon-number.active{color:#ff7d13}.order-detail-box h3{border-bottom:1px solid #ececec}.sel_list .pub-radio-list li::before,.comment-top::before,.pay-success-box::before,.book-detail:before,.book2-top::before,.order-detail-top::before,.order-detail-box::before,.order-follow-top::before,.order-follow-box::before,.comment-submit-top::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:none;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}</style><div class=page-content>', -1 != [2, 3, 4].indexOf(orderStatus) && (__p += '<div class=order-detail-box><ul><li style=height:29px;line-height:29px><label class="' + (null == (__t = 4 != orderStatus ? "active" : "") ? "" : __t) + '">乐车券：</label><span class="js-coupon-number ' + (null == (__t = 4 != orderStatus ? "active" : "") ? "" : __t) + '"></span>', -1 != [2, 3].indexOf(orderStatus) && Date.now() > appointTime && (__p += '<span class="btn-primary js-confirm" data=587 style=position:absolute;right:5px;width:.65rem>验券</span>'), __p += "</li></ul></div>"), __p += "<div class=order-detail-box><h3>服务信息</h3><ul><li><label>4S店</label>" + (null == (__t = storeName) ? "" : __t) + "</li><li class=js-address style=margin-right:20px><label>地址</label>" + (null == (__t = storeAddress) ? "" : __t) + '<i class="iconfont icon-address-right">&#xe639;</i></li><li><label>保养时间</label>' + (null == (__t = app.dateFormat(appointTime, "yyyy-mm-dd HH:MM")) ? "" : __t) + "</li>", hasDriving && (__p += "<li><label>上门取车</label>" + (null == (__t = app.dateFormat(drivingInfo.drivingTime, "yyyy-mm-dd HH:MM")) ? "" : __t) + "</li><li><label>取车地点</label>", print(drivingInfo.pickCarStreet ? drivingInfo.pickCarStreet + drivingInfo.pickCarAddress : drivingInfo.pickCarAddress), __p += "</li><li><label>送车地点</label>", print(drivingInfo.returnCarStreet ? drivingInfo.returnCarStreet + drivingInfo.returnCarAddress : drivingInfo.returnCarAddress), __p += "</li>"), __p += "\n\n    ", saInfo && (__p += "\n    ", saInfo.name && (__p += "<li><label>服务顾问</label>" + (null == (__t = saInfo.name) ? "" : __t) + "</li>"), __p += "\n    ", saInfo.mobile && (__p += '<li><label>联系电话</label><a href="tel:' + (null == (__t = saInfo.mobile) ? "" : __t) + '">' + (null == (__t = saInfo.mobile) ? "" : __t) + '<i class="iconfont sup-wrap icon-mobile-right">&#xe60e;</i></a></li>'), __p += "\n    "), __p += "</ul></div><div class=order-detail-box id=order-info><h3>订单信息</h3><ul><li><label>订单金额</label><span class=pub-price><span class=mini-rmb>&yen;</span>" + (null == (__t = templateApi.price(payAmount)) ? "" : __t) + "</span>", hasDriving && (__p += "(含取送车费用<dfn class=fs12>&yen;</dfn>59)"), __p += "</li><li><label>订单状态</label>", orderStatus) {
					case 1:
						print("待付款");
						break;
					case 2:
						print("已支付");
						break;
					case 3:
						print("服务中");
						break;
					case 4:
						print("已完成");
						break;
					case 5:
						print("已取消")
				}
				switch (__p += "</li><li><label>订单类型</label>", orderType) {
					case 1:
						print("保养订单");
						break;
					case 2:
						print("保养+代驾");
						break;
					case 3:
						print("通用维修");
						break;
					case 4:
						print("事故维修");
						break;
					case 5:
						print("洗车订单")
				}
				__p += "</li><li><label>订单号</label>" + (null == (__t = orderNumber) ? "" : __t) + "\n      ", 1 != orderStatus && (__p += ""), __p += "</li><li><label>预订日期</label>" + (null == (__t = app.dateFormat(createdTime, "yyyy-mm-dd HH:MM")) ? "" : __t) + "</li></ul></div><div class=order-detail-box><h3>车辆信息</h3><ul class><li><label>保养车型</label>", brandTypeFullName = brandTypeFullName.replace(/\/[^\/]+/, "").replace(/\//g, " "), print(brandTypeFullName), __p += "</li><li><label>车牌号码</label>" + (null == (__t = carNumber) ? "" : __t) + "</li><li><label>行驶里程</label>" + (null == (__t = actualMileage) ? "" : __t) + "公里</li><li><label>联系人</label>" + (null == (__t = contactUserName) ? "" : __t) + "</li><li><label>手机</label>" + (null == (__t = contactUserMobile) ? "" : __t) + '</li></ul></div><div class=order-detail-box><h3 style>保养项目</h3><ul class="item " style>', _.each(maintenanceItemsInfo, function(t) {
					__p += "<li class=item-relative><div class=item-content-left>" + (null == (__t = t.name) ? "" : __t) + "<span class style=color:#666>", print(1 == t.itemId ? "(" + t.descrption + ") " + templateApi.oilNum(t.remarks) : "(" + t.descrption + ") "), __p += "</span></div><div class=item-content-right-price><span>" + (null == (__t = t.salePrice ? templateApi.price2(t.salePrice) : "") ? "" : __t) + "</span></div></li>"
				}), __p += '<li class="item-relative js-free"><div class=item-content-left style=color:#333>免费保养检测<i class="iconfont icf-info"></i></div><div class=item-content-right-price><span>&yen;0</span></div></li>', hasDriving && (__p += "<li class=item-relative><div class=item-content-left style=color:#333>上门取送</div><div class=item-content-right-price><span>&yen;59</span></div></li>"), __p += "\n    ", saleAmount - payAmount != 0 && (__p += "<li class=item-relative><div class=item-content-left style=color:#333>优惠券</div><div class=item-content-right-price><span>&minus;&yen;" + (null == (__t = (saleAmount - payAmount) / 100) ? "" : __t) + "</span></div></li>"), __p += "<li class=item-relative style=border-bottom:0;font-weight:700><div class=item-content-left style=color:#333>总额</div><div class=item-content-right-price><span style=color:#666>&yen;" + (null == (__t = payAmount / 100) ? "" : __t) + "</span></div></li></ul></div><div class=order-detail-invoice>如需发票请向4S店索要</div><div style=height:51px></div></div>", 1 == orderStatus && (__p += '<footer class="page-bottom quote-book-fixed"><div class=book-btn><span class="btn-primary full-width js-pay" data-ajax style=margin-top:10px>立即支付</span></div></footer>'), __p += "\n", 4 == orderStatus && 0 == commentFlag && (__p += '<footer class="page-bottom quote-book-fixed"><div class=book-btn><span class="btn-red-line full-width js-comment" style=margin-top:10px>去评价</span></div></footer>'), __p += ""
			}
			return __p
		}
	}), define("controller/order/detail", ["textorderDetailHtml", "textfreeCheckHtml", "PageView", "session", "UIScreen", "UIShare", "carModel"], function(t, e, i, n, a, r, o) {
		var s = i.extend({
			options: {
				master: "user/index",
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-pay": "payAction",
				"click .js-confirm": "confirmAction",
				"click .js-comment": "commentAction",
				"click .js-free": "checkAction",
				"click .js-share": "shareTipAction",
				"click .js-address": "addressAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "订单详情"
					},
					right: [{
						text: '<i class="iconfont"  >&#xe60a;</i>',
						callback: function() {
							app.goBack("")
						}
					}]
				})
			},
			ajax: function() {
				var t = {
					url: "mtnorder/queryOrder",
					data: {
						id: this.query.id,
						resultFlag: 2
					}
				};
				return t
			},
			onShow: function(e) {
				if (!e.list) return void this.$el.html('<div class="results-none" style="background:#fff;">订单已被删除!</div>');
				var i = e.list[0];
				i.maintenanceItemsInfo = JSON.parse(i.maintenanceItemsInfo), this.model = i;
				var n = this,
					a = this.template(t, this.model);
				this.$el.html(a), n.displayRedpackAction();
				var r = i.orderStatus,
					n = this; - 1 != [2, 3, 4].indexOf(r) && app.ajax({
					url: "mtnorder/queryOrderCoupon",
					data: {
						orderId: i.id
					},
					session: !0,
					success: function(t) {
						n.$(".js-coupon-number").html(t.list[0].couponNumber)
					}
				})
			},
			payAction: function() {
				var t = this.model,
					e = config.paymentReturnUrl + "?" + $.param({
						itemName: "乐车邦保养订单",
						amount: t.payAmount
					});
				app.ajax({
					url: "mtnorder/queryPaymentUrl",
					data: {
						orderId: this.query.id,
						returnUrl: e
					},
					success: function(i) {
						app.nativeApi.payment({
							payAmount: t.payAmount,
							itemName: "乐车邦保养订单",
							returnUrl: e + "&orderId=" + t.id,
							paymentToken: i.paymentToken,
							paymentUrl: i.paymentUrl,
							orderId: t.id
						})
					}
				})
			},
			followAction: function() {
				app.goTo("order/follow?id=" + this.query.id)
			},
			confirmAction: function() {
				app.goTo("order/confirm?id=" + this.query.id)
			},
			commentAction: function() {
				var t = $.param({
					orderId: this.query.id,
					brandId: this.model.brandTypeId,
					mileage: this.model.actualMileage
				});
				app.goTo("comment/index?" + t)
			},
			checkAction: function() {
				new a({
					appendElement: document.body,
					title: "保养检测说明",
					msg: e
				})
			},
			displayRedpackAction: function() {
				if (!app.nativeApi.checkShare()) return !1;
				if (-1 == [2, 3, 4].indexOf(this.model.orderStatus)) return !1;
				var t = '<div class="order-share-pic js-share">';
				t += '<img src="https://img01.lechebangstatic.com/webapp/detail-share.png" alt="">', t += "</div>", $("article #order-info").append(t)
			},
			shareTipAction: function() {
				var t = this,
					e = '<div class="detail-share">';
				e += '<div class="img-box"><img src="https://img01.lechebangstatic.com/webapp/detail-share.png" alt="">', e += "</div>", e += "<p>分享红包给好友，即刻自领<span>200</span>元 <br>红包被抢光，再奖<span>100</span>元！</p>", e += '<div class="share-btn">', e += '<span class="btn-link2 js-tip-close">给钱也不要</span> &nbsp;', e += '<span class="btn-primary js-share-btn">现在就分享</span>', e += "</div>", e += "</div>", app.alert({
					msg: e,
					btns: []
				}), $(".js-tip-close").on("click", function() {
					app._alert.hide()
				}), $(".js-share-btn").on("click", function() {
					t.shareAction()
				})
			},
			shareAction: function() {
				var t = this;
				app.ajax({
					url: "mkt/createOrderRedpack",
					data: {
						orderId: this.query.id
					},
					session: !0,
					success: function(e) {
						t.redpack = e, t.shareRedPackAction()
					}
				})
			},
			shareRedPackAction: function() {
				var t = this;
				app._alert.hide();
				var e = new r({
					data: {
						channels: ["weixin"]
					},
					appendElement: document.body,
					businessparams: {
						thumb: "lechebang180.png",
						thumburl: config.imgCdnRoot + "marketing/400/lechebang180.png",
						url: config.redpackShareUrl + t.redpack.redpack.redpackCode,
						businesstype: 3,
						showtitle: "我用乐车邦APP在4S店做汽车保养，顺便帮你抢了些钱，速速拿走！",
						showcontent: "30大品牌4S店汽车保养低至2折哦，有车的朋友赶快抢，做保养就这么便宜，别说我没告诉你。"
					}
				});
				e.show()
			},
			addressAction: function() {
				var t = o.getServiceNetForDetail(this.model.storeId);
				t.success = function(t) {
					n.set("shop_detail", t), app.goTo("shop/map")
				}, app.ajax(t)
			}
		});
		return s
	}), define("textorderConfirmHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<style>.order-validate{margin-bottom:10px;font-size:15px;color:#666;text-align:center}.order-validate span{font-size:36px;color:#333}</style><div class=page-content><div class=pub-tips><i class=iconfont>&#xe60f;</i>验券即表示乐车券消费订单已完成，请确保4S店已为您完成所有订单保养服务。</div><div class=order-validate>乐车券码：<span>" + (null == (__t = couponNumber) ? "" : __t) + '</span></div><div class="form-item form-block mlr15" style=padding-left:0><div class=field-text-wrap><input type=tel class="field-text tc js-number" placeholder=请输入上方乐车券码></div></div><div class=plr15><span class="btn-primary full-width js-post">确认验券</span></div></div>';
			return __p
		}
	}), define("controller/order/confirm", ["textorderConfirmHtml", "PageView"], function(t, e) {
		var i = e.extend({
			events: {
				"click .js-post": "postAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "验证乐车券码"
					}
				})
			},
			ajax: function() {
				var t = {
					url: "mtnorder/queryOrderCoupon",
					data: {
						orderId: this.query.id
					},
					session: !0
				};
				return t
			},
			onShow: function(e) {
				var i = e.list[0],
					n = this.template(t, i);
				this.$el.html(n), this.model = i
			},
			postAction: function() {
				var t = this.$(".js-number").val().trim();
				return t ? t != this.model.couponNumber ? void app.alert("乐车券码输入错误") : void app.ajax({
					url: "mtnorder/consumeCoupon",
					data: {
						storeId: this.model.storeId,
						couponNumber: this.model.couponNumber
					},
					success: function() {
						app.goBack()
					}
				}) : void app.alert("请输入上方乐车券码")
			}
		});
		return i
	}), define("textorderCancelHtml", [], function() {
		return function(obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.user-cancel{margin:10px;background-color:#fff}.user-cancel h3{font-size:15px;padding:5px 0 5px 10px;font-weight:700;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.3)}.user-cancel li:last-of-type{-webkit-box-shadow:none;border-bottom:0}.user-cancel2{padding:10px;background-color:#fff;border-radius:4px}.user-cancel2 h2{font-size:15px;color:#333;font-weight:400}.user-cancel2 p{font-size:12px;color:#999}</style><div class=user-cancel><h3>取消理由</h3><ul class=pub-radio-list><li class=js-reason>预订错了</li><li class=js-reason>计划有变，没办法前往</li><li class=js-reason>对4S店服务不满意</li><li class=js-reason>到店说无预约或无合作</li><li class=js-reason>在4S店直接消费更便宜</li></ul></div><div class=comment-content><textarea class="textarea js-desc" placeholder=不爽想吐槽></textarea>', 2 == orderStatus && (__p += "<div class=user-cancel2><h2>退款方式:原路返回</h2><p>5-10个工作日内退回您的原支付账户，无需手续费。原支付账户是指您付款时选择的支付方式，例如：微信、支付宝、银行卡。</p></div>"), __p += '<span class="btn-primary full-width js-cancel" data-ajax>我要取消</span><span class="btn-white full-width js-back">点错了</span></div>';
			return __p
		}
	}), define("controller/order/cancel", ["textorderCancelHtml", "PageView", "carModel"], function(t, e, i) {
		var n = e.extend({
			events: {
				"click .js-cancel": "cancelAction",
				"click .js-back": "backAction",
				"click .js-reason": "reasonAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "取消订单"
					}
				})
			},
			onShow: function() {
				var e = this.template(t, {
					orderStatus: this.query.orderStatus
				});
				this.$el.html(e)
			},
			cancelAction: function() {
				var t = this.$(".js-reason.active");
				if (!t.length) return void app.alert("请选择取消理由");
				var e = t.html().trim();
				e += this.$(".js-desc").val().trim();
				var n, a = this.query,
					r = "mtnorder/cancelOrder";
				3 == a.type ? (r = "ord_user/cancelOrder", n = {
					orderId: a.id,
					description: e,
					orderType: a.type
				}) : n = {
					id: a.id,
					description: e
				}, i.cancelOrder(r, n, function() {
					2 == a.orderStatus ? app.alert({
						msg: "订单已取消，系统自动在5-10个工作日内将支付金额退回您的支付账户。",
						btns: [{
							text: "知道了",
							callback: function() {
								app.goBack()
							}
						}]
					}) : (app.hint("订单取消成功"), app.goBack())
				})
			},
			backAction: function() {
				app.goBack()
			},
			reasonAction: function(t) {
				var e = $(t.currentTarget);
				e.parent().find(".active").removeClass("active"), e.addClass("active")
			}
		});
		return n
	}), define("textcommentHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.comment-submit-top{margin-bottom:10px;margin-bottom:10px;padding:10px 15px;background:#fff;font-size:14px}.comment-submit-top li{padding:8px 0;text-align:center}.comment-submit-top li span{display:inline-block;width:3em;text-align:left;font-size:15px;color:#666}.comment-submit-content{padding-left:10px;padding-right:10px}.comment-submit-content .textarea{margin-bottom:10px;vertical-align:top;padding:5px 14px}.comment-submit-bom{font-size:14px;color:#999;padding:5px 0 5px 20px}.comment-submit-content .txt{margin-bottom:10px;font-size:12px;padding-left:10px;color:#666}.comment-submit-content .field-label{margin-left:-75px;width:auto}.comment-rate-list .pub-rate-view2{margin-left:10px}.comment-submit-content .js-post{margin-top:0;margin-bottom:10px}.comment-rate-list .pub-rate-view2 .js-score{margin-right:3px;font-size:23px;color:#ececec;display:inline-block;margin-top:-5px}.comment-rate-list .pub-rate-view2 .js-score.active{color:#ff9e2a}</style><div class=page-content><div class=comment-submit-top><div class=comment-submit-rate><ul class=comment-rate-list><li data-key=overallScore>总体点评<div class=pub-rate-view2><i class="iconfont js-score" data-value=1>&#xe626;</i><i class="iconfont js-score" data-value=2>&#xe626;</i><i class="iconfont js-score" data-value=3>&#xe626;</i><i class="iconfont js-score" data-value=4>&#xe626;</i><i class="iconfont js-score" data-value=5>&#xe626;</i></div><span></span></li><li data-key=serviceScore>服务态度<div class=pub-rate-view2><i class="iconfont js-score" data-value=1>&#xe626;</i><i class="iconfont js-score" data-value=2>&#xe626;</i><i class="iconfont js-score" data-value=3>&#xe626;</i><i class="iconfont js-score" data-value=4>&#xe626;</i><i class="iconfont js-score" data-value=5>&#xe626;</i></div><span></span></li><li data-key=speedyScore>维修效率<div class=pub-rate-view2><i class="iconfont js-score" data-value=1>&#xe626;</i><i class="iconfont js-score" data-value=2>&#xe626;</i><i class="iconfont js-score" data-value=3>&#xe626;</i><i class="iconfont js-score" data-value=4>&#xe626;</i><i class="iconfont js-score" data-value=5>&#xe626;</i></div><span></span></li></ul></div></div><div class=comment-submit-content><textarea class="textarea js-desc" placeholder=请输入您的保养感受></textarea><div class=txt>如果有任何保养质量问题，建议您进行补充点评。</div><div class="form-item  form-item--arrow-btn form-block expanded"><label class=field-label>除标准套餐外是否有其他消费</label></div><div class=timeline-checkbox-box><ul class="pub-checkbox-list clearfix">', _.each(all, function(t) {
				var e = -1 != current.indexOf(t.itemId);
				__p += '<li data-id="' + (null == (__t = t.itemId) ? "" : __t) + '" class="js-item', e && print(" disabled"), __p += '"><i class="icon-checkbox', e && print(" active"), __p += '"></i>' + (null == (__t = t.itemName) ? "" : __t) + "</li>"
			}), __p += '</ul></div><div class="comment-submit-bom js-project"></div><span class="btn-primary full-width js-post">发表</span></div></div>';
			return __p
		}
	}), define("controller/comment/index", ["textcommentHtml", "PageView", "session"], function(t, e, i) {
		var n = ["", "很差", "较差", "还行", "很好", "优质"],
			a = e.extend({
				events: {
					"click .js-item": "itemAction",
					"click .js-score": "scoreAction",
					"click .js-post": "postAction"
				},
				onCreate: function() {
					this.header.option({
						center: {
							text: "保养点评"
						}
					})
				},
				ajax: function() {
					var t = {
							url: "plan/getCurrentMaintenanceItems",
							data: {
								brandId: this.query.brandId,
								mileage: this.query.mileage
							}
						},
						e = {
							url: "plan/getMaintenanceItems",
							data: {
								brandId: this.query.brandId
							}
						};
					return [t, e]
				},
				onShow: function(e, i) {
					var n = [];
					_.each(e.items, function(t) {
						n.push(t.itemId)
					});
					var a = this.template(t, {
						current: n,
						all: i.items
					});
					this.$el.html(a), this.model = {
						all: i.items
					};
					var r = this.$(".js-score")[4];
					this.scoreAction({
						currentTarget: r
					})
				},
				itemAction: function(t) {
					var e = $(t.currentTarget);
					if (!e.hasClass("disabled")) {
						e.find("i").toggleClass("active");
						var i = this.$(".js-item");
						i = i.filter(function() {
							var t = $(this);
							return t.hasClass("disabled") ? !1 : t.find("i").hasClass("active")
						});
						for (var n = i.length ? "您的爱车可能过早更换了以下项目：" : "", a = 0; a < i.length; a++) {
							var r = i.eq(a),
								o = r.attr("data-id");
							_.find(this.model.all, function(t) {
								return t.itemId == o ? (n += "<p>" + t.itemName + " 更换周期应为每" + t.mileage + "公里</p>", !0) : void 0
							})
						}
						this.$(".js-project").html(n)
					}
				},
				scoreAction: function(t) {
					var e = $(t.currentTarget),
						i = e.parents("li"),
						a = e.attr("data-value"),
						r = n[a];
					this.model[i.attr("data-key")] = a, i.find("span").html(r);
					var o = e.index();
					i.find("i.active").removeClass("active"), i.find("i").each(function(t, e) {
						o >= t && $(e).addClass("active")
					})
				},
				postAction: function() {
					var t = this.model,
						e = this.$(".js-desc").val().trim(),
						n = [];
					return this.$(".js-item").each(function() {
						var t = $(this);
						!t.hasClass("disabled") && t.find("i").hasClass("active") && n.push(t.attr("data-id"))
					}), t.overallScore ? t.serviceScore ? t.speedyScore ? (app.ajax({
						url: "mtnorder/createOrderComment",
						data: {
							content: e,
							orderId: this.query.orderId,
							overallScore: t.overallScore,
							serviceScore: t.serviceScore,
							speedyScore: t.speedyScore
						},
						success: function() {
							i.cleanAjax("webappmtnorder/getShopCommentList"), app.goBack()
						}
					}), void(n.length && app.ajax({
						url: "mtnorder/updateMaintenanceHistory",
						data: {
							extraItemIds: n,
							orderId: this.query.orderId
						}
					}))) : void app.alert("请选择维修效率") : void app.alert("请选择服务点评") : void app.alert("请选择总体点评")
				}
			});
		return a
	}), define("textcommentAgainHtml", [], function() {
		return '<style>body{background-color:#fff}.comment-rate-list .pub-rate-view2 .js-score{margin-right:3px;font-size:23px;color:#ececec;display:inline-block;margin-top:-9px}.comment-rate-list .pub-rate-view2 .js-score.active{color:#ff9e2a}</style><div class="comment-top comment-add"><div class=comment-rate><ul class=comment-rate-list><li data-key=overallScore>维修质量<div class=pub-rate-view2 style=padding-top:5px><i class="iconfont js-score" data-value=1>&#xe626;</i><i class="iconfont js-score" data-value=2>&#xe626;</i><i class="iconfont js-score" data-value=3>&#xe626;</i><i class="iconfont js-score" data-value=4>&#xe626;</i><i class="iconfont js-score" data-value=5>&#xe626;</i></div><span></span></li></ul></div></div><div class=comment-content><textarea class=textarea placeholder=维修质量怎么样></textarea><span class="btn-primary full-width js-post">发表</span></div>'
	}), define("controller/comment/again", ["textcommentAgainHtml", "PageView"], function(t, e) {
		var i = ["", "很差", "较差", "还行", "很好", "优质"],
			n = e.extend({
				events: {
					"click .js-score": "scoreAction",
					"click .js-post": "postAction"
				},
				onCreate: function() {
					this.header.option({
						center: {
							text: "追加点评"
						}
					}), this.$el.html(t)
				},
				onShow: function() {
					var t = this.$(".js-score")[4];
					this.scoreAction({
						currentTarget: t
					})
				},
				scoreAction: function(t) {
					var e = $(t.currentTarget),
						n = e.parents("li"),
						a = e.attr("data-value"),
						r = i[a];
					this.score = a, n.find("span").html(r);
					var o = e.index();
					n.find("i.active").removeClass("active"), n.find("i").each(function(t, e) {
						o >= t && $(e).addClass("active")
					})
				},
				postAction: function() {
					var t = this.$("textarea").val().trim();
					app.ajax({
						url: "mtnorder/appendOrderComment",
						data: {
							additionalContent: t,
							qualityScore: this.score,
							orderId: this.query.orderId
						},
						success: function() {
							app.goBack()
						}
					})
				}
			});
		return n
	}), define("textuserDiscountHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				if (__p += '<style>.user-coupon{padding:10px}.user-coupon .price{font-size:33px;color:#fff;text-shadow:2px 1px 1px #eaba48}.user-coupon .price dfn{font-size:16px}.pass .price{color:#f9f9fb;text-shadow:2px 1px 1px #e8ca87}.pass .special-background .price{text-shadow:2px 1px 1px #ecd091}.user-coupon h3{color:#666;font-size:18px;line-height:26px}.user-coupon .price{position:absolute;top:50%;width:100%;text-align:center;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%)}.user-coupon .a{position:absolute;top:50%;left:16px;width:90px;text-align:left;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);margin-top:-30px}.user-coupon .status{position:absolute;right:10px;top:10px;border:1px solid rgba(204, 204, 204, .5);color:#ccc;padding:3px 5px;font-size:12px}.user-coupon{color:#ccc}.user-coupon-none{position:relative;margin:10px 10px 0;line-height:52px;min-height:52px;background-color:#fff;border-radius:4px;font-size:15px;box-sizing:border-box;-webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.2);text-align:center;color:#666;font-size:18px}.user-coupon-none.active:after,.user-coupon .active:after{content:"";display:inline-block;vertical-align:middle;width:20px;height:20px;background:url(https://img01.lechebangstatic.com/webapp//bg-global.png) no-repeat;background-size:240px auto;background-position:-139px -80px;position:absolute;right:15px;top:50%;margin-bottom:10px;border:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.field-text-wrap{height:40px;position:relative}.user-coupon button{padding:.05rem .15rem;background-color:#ff826d;border:none;font-size:.17rem;font-weight:500;letter-spacing:1px;border-radius:.05rem;color:#fff;top:50%;position:absolute;right:10px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.user-coupon .div-item{background-color:#fff;margin-bottom:11px;padding:.05rem .02rem;border-radius:.08rem}.user-coupon .textbox{border:none;height:35px;color:#000;margin-left:.1rem}.user-coupon .pricewrap{height:100%;width:105px;position:absolute;top:0;left:0;border-radius:.05rem 0 0 .05rem;--webkit-border-radius:.05rem 0 0 .05rem;border-left:3px dashed #efeff4}.user-coupon .beUsed-background{background-color:#ffd164}.user-coupon .special-background{background-color:#48b9f9}.user-coupon .special-background .price{text-shadow:2px 1px 1px #3d92c3}.user-coupon .history{padding-left:.1rem;color:#666;.pass .beUsed-background{ background-color:#f9dd9e}</style><div class="user-coupon page-content"><div class="div-item "><div class=field-text-wrap><input type=text class=textbox placeholder=请输入兑换码><button class=js-change>兑换</button></div></div><ul>', list.length) {
					__p += "\n      ";
					var valid = [];
					_.each(list, function(t) {
						2 == t.voucherStatus && valid.push(t)
					}), __p += "\n      ", _.each(valid, function(t) {
						__p += '<li style="border-right:3px dashed #efeff4">', _.isUndefined(t.strategyKind) || 1 == t.strategyKind ? __p += '<div class="pricewrap beUsed-background"><span class=price><dfn>&yen;</dfn>' + (null == (__t = templateApi.price(t.amount)) ? "" : __t) + "</span></div>" : _.isUndefined(t.strategyKind) || 2 != t.strategyKind || (__p += '<div class="pricewrap special-background">', __p += 0 == t.amount ? "<span class=price>免费</span>" : "<span class=price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.amount)) ? "" : __t) + "</span>", __p += "</div>"), __p += "<h3>" + (null == (__t = t.title) ? "" : __t) + "</h3><p>" + (null == (__t = t.content) ? "" : __t) + "</p><p>有效期至\n          ";
						var e = new Date(t.endTime);
						print(app.dateFormat(e, "yyyy-mm-dd")), __p += "</p></li>"
					}), __p += "\n      ", valid.length < list.length && (__p += '<li class="line-item line-item--arrow js-go history" data-url="user/history">历史</li>'), __p += "\n    "
				} else __p += "<li>暂时没有抵用券</li>";
				__p += "</ul></div>"
			}
			return __p
		}
	}), define("textdiscountStateHtml", [], function() {
		return "1、什么是优惠券？<br>优惠券是乐车邦发行认可的代金券，可以在乐车邦下单付款时直接抵扣相应面值的金额。<div style=height:18px></div>2、抵用券和特价券的区别是什么？<br>优惠券的类型有两种：抵用券、特价券。抵用券是根据规则直接抵扣相应的支付金额；特价券是符合规则的情况下，直接按特价券金额进行支付。<div style=height:18px></div>3、如何使用优惠券？<br>单笔订单结算页面，系统会自动选择满足条件的优惠金额最高的一张优惠券使用，验证成功可抵扣相应面值的金额。<div style=height:18px></div>4、优惠券可以叠加使用么？<br>优惠券不支持叠加使用，每一张订单只能使用一张优惠券。<div style=height:18px></div>5、优惠券支持找零兑现吗？<br>优惠券使用时，不找零、不兑现。<div style=height:18px></div>6、取消订单后优惠券会退还吗？<br>会退还。订单取消后，订单使用的优惠券会退还给您。<div style=height:18px></div>7、实体乐车邦优惠券如何使用？<br>用户中心我的优惠券页面，支持实体优惠券的兑换。您只需将实体卡上的未兑换过的优惠券号码正确输入，点击兑换即可成功兑换。兑换后就能在预定时正常使用。"
	}), define("controller/user/discount", ["textuserDiscountHtml", "PageView", "UIScreen", "textdiscountStateHtml", "carModel", "session"], function(t, e, i, n, a, r) {
		var o = e.extend({
			options: {
				master: "user/index",
				redirectCtrl: function(t, e) {
					if (!t) {
						var i = $.param(e),
							n = "login?to=user/discount";
						return i && (n += "&" + i), n
					}
				}
			},
			events: {
				"click .js-go": "goAction",
				"click .js-change": function() {
					var t = $(".textbox"),
						e = $(t).val().trim(),
						i = this;
					return e ? void a.bindVoucherWitchCode({
						code: e
					}, function() {
						app.hint("兑换成功！"), i.reload()
					}) : void app.alert("兑换码不能为空")
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "我的优惠券"
					},
					right: [{
						text: "使用说明",
						callback: function() {
							new i({
								appendElement: document.body,
								title: "优惠券使用说明",
								msg: n
							})
						}
					}]
				})
			},
			ajax: function() {
				var t = {
					url: "voucher/vouchers"
				};
				return t
			},
			onShow: function(e) {
				var i = this.template(t, {
						list: e.list
					}),
					n = [];
				_.each(e.list, function(t) {
					t.voucherStatus > 2 && n.push(t)
				}), r.set("discount_history", n), this.$el.html(i)
			},
			goAction: function(t) {
				var e = $(t.currentTarget);
				app.goTo(e.data("url"))
			}
		});
		return o
	}), define("textdiscountHistoryHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.user-coupon{padding:10px}.user-coupon .price{font-size:33px;color:#fff;text-shadow:2px 1px 1px #eaba48}.user-coupon .price dfn{font-size:16px}.pass .price{color:#f9f9fb;text-shadow:2px 1px 1px #e8ca87}.pass .special-background .price{text-shadow:2px 1px 1px #ecd091}.user-coupon h3{color:#666;font-size:18px;line-height:26px}.user-coupon .price{position:absolute;top:50%;width:100%;text-align:center;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%)}.user-coupon .a{position:absolute;top:50%;left:16px;width:90px;text-align:left;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);margin-top:-30px}.user-coupon .status{position:absolute;right:10px;top:10px;border:1px solid rgba(204, 204, 204, .5);color:#ccc;padding:3px 5px;font-size:12px;background-color:#fff}.user-coupon,.user-coupon .pass h3,.user-coupon .pass p{color:#ccc}.user-coupon-none{position:relative;margin:10px 10px 0;line-height:52px;min-height:52px;background-color:#fff;border-radius:4px;font-size:15px;box-sizing:border-box;-webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.2);text-align:center;color:#666;font-size:18px}.user-coupon-none.active:after,.user-coupon .active:after{content:"";display:inline-block;vertical-align:middle;width:20px;height:20px;background:url(https://img01.lechebangstatic.com/webapp//bg-global.png) no-repeat;background-size:240px auto;background-position:-139px -80px;position:absolute;right:15px;top:50%;margin-bottom:10px;border:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.user-coupon button{padding:.05rem .15rem;background-color:#ff826d;border:none;font-size:.17rem;font-weight:500;letter-spacing:1px;border-radius:.05rem;color:#fff}.user-coupon .div-item{background-color:#fff;margin-bottom:11px;padding:.05rem .02rem;border-radius:.08rem}.user-coupon .textbox{width:2.5rem;border:none;height:40px;display:inline-block;margin-left:.1rem;color:#000}.user-coupon .pricewrap{height:100%;width:105px;position:absolute;top:0;left:0;border-radius:.05rem 0 0 .05rem;--webkit-border-radius:.05rem 0 0 .05rem;border-left:3px dashed #efeff4}.user-coupon .beUsed-background{background-color:#ffd164}.user-coupon .special-background{background-color:#48b9f9}.user-coupon .special-background .price{text-shadow:2px 1px 1px #3d92c3}.pass .beUsed-background{background-color:#f9dd9e}.user-coupon .history{padding-left:.1rem;color:#666}</style><div class="user-coupon page-content"><ul>', _.each(discount, function(t) {
				__p += '<li style="border-right:3px dashed #efeff4" ', 2 !== t.voucherStatus && print('class="pass"'), __p += ">", 3 == t.voucherStatus ? __p += "<span class=status>已使用</span>" : 4 == t.voucherStatus && (__p += "<span class=status>已过期</span>"), __p += "\n        ", _.isUndefined(t.strategyKind) || 1 == t.strategyKind ? __p += '<div class="pricewrap beUsed-background"><span class=price><dfn>&yen;</dfn>' + (null == (__t = templateApi.price(t.amount)) ? "" : __t) + "</span></div>" : _.isUndefined(t.strategyKind) || 2 != t.strategyKind || (__p += '<div class="pricewrap special-background">', __p += 0 == t.amount ? "<span class=price>免费</span>" : "<span class=price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.amount)) ? "" : __t) + "</span>", __p += "</div>"), __p += "<h3>" + (null == (__t = t.title) ? "" : __t) + "</h3><p>" + (null == (__t = t.content) ? "" : __t) + "</p><p>有效期至\n          ";
				var e = new Date(t.endTime);
				print(app.dateFormat(e, "yyyy-mm-dd")), __p += "</p></li>"
			}), __p += "</ul></div>";
			return __p
		}
	}), define("controller/user/history", ["textdiscountHistoryHtml", "PageView", "UIScreen", "textdiscountStateHtml", "session"], function(t, e, i, n, a) {
		var r = e.extend({
			options: {
				master: "user/index",
				redirectCtrl: function(t, e) {
					if (!t) {
						var i = $.param(e),
							n = "login?to=user/discount";
						return i && (n += "&" + i), n
					}
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "历史优惠券"
					}
				});
				var e = a.get("discount_history"),
					i = this.template(t, {
						discount: e
					});
				this.$el.html(i)
			}
		});
		return r
	}), define("textuserFeedbackHtml", [], function() {
		return '<style>.user-feedback{padding:10px}</style><div class="page-content user-feedback"><textarea class=textarea placeholder=请输入您的意见与建议，我们会做的更好！></textarea><span class="btn-primary full-width js-submit">提交</span></div><footer class=page-bottom><div class=footer-tel><a href=tel:4006300111><i class=iconfont>&#xe60e;</i>客服电话：4006-300-111</a></div></footer>'
	}), define("controller/user/feedback", ["textuserFeedbackHtml", "PageView"], function(t, e) {
		var i = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-submit": "submitAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "意见反馈"
					}
				})
			},
			onShow: function() {
				this.$el.html(t)
			},
			submitAction: function() {
				var t = this.$("textarea").val().trim();
				return t ? (app.ajax({
					url: "uc/saveFeedback",
					data: {
						content: t
					}
				}), void app.goBack()) : void app.alert("请给点意见吧!")
			}
		});
		return i
	}), define("textaboutIndexHtml", [], function() {
		return function(obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.user-center-item{padding:10px}.user-center-item .version{padding-top:10px;text-align:center;color:#ccc;font-size:14px}</style><div class="user-center-item page-content"><ul class=line-list>', app.nativeApi.checkShare() && (__p += '<li class="line-item line-item--arrow js-share">分享给好友</li>'), __p += '<li class="line-item line-item--arrow js-go" data-url="about/statement">隐私声明</li><li class="line-item line-item--arrow js-go" data-url="about/introduce">乐车邦介绍</li></ul></div>';
			return __p
		}
	}), define("controller/about/index", ["textaboutIndexHtml", "PageView", "UIShare"], function(t, e, i) {
		var n = e.extend({
			events: {
				"click .js-go": "goAction",
				"click .js-share": "shareAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "关于乐车邦"
					}
				})
			},
			onShow: function() {
				var e = this.template(t);
				this.$el.html(e)
			},
			goAction: function(t) {
				var e = $(t.currentTarget),
					i = e.attr("data-url");
				app.goTo(i)
			},
			shareAction: function() {
				this.share || (this.share = new i({
					appendElement: document.body,
					businessparams: {
						businesstype: 1,
						showtitle: "你的好友邀请你启动！指尖上的养车神器-乐车邦！",
						showcontent: "一键查车况，2折做保养，4S店超体验。"
					}
				})), this.share.show()
			}
		});
		return n
	}), define("controller/about/statement", ["PageView"], function(t) {
		var e = t.extend({
			events: {},
			onCreate: function() {
				this.header.option({
					center: {
						text: "隐私声明"
					}
				})
			},
			onShow: function() {
				var t = this;
				$.get(config.assetRoot + "template/about/statement.html", function(e) {
					t.$el.html(e)
				})
			}
		});
		return e
	}), define("controller/about/introduce", ["PageView"], function(t) {
		var e = t.extend({
			onCreate: function() {
				this.header.option({
					center: {
						text: "乐车邦介绍"
					}
				})
			},
			onShow: function() {
				var t = this;
				$.get(config.assetRoot + "template/about/introduce.html", function(e) {
					t.$el.html(e)
				})
			}
		});
		return e
	}), define("textcarBrandHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.brand-list-box .hd{position:relative;padding:0 10px 0 20px;background-color:#efeff4;font-weight:700;font-weight:400;font-size:13px;line-height:20px;color:#666}.brand-list-box .brand-item{background-color:#fff}.brand-list-box li:hover,.brand-list-box li:active{background:#f6f6f6}.brand-list-box li{line-height:41px;padding:5px 10px 5px 15px;position:relative;display:block;cursor:pointer;font-size:15px}.brand-list-box li:last-child{border-bottom:0}.brand-list-box li:last-child::before{display:none}.brand-list-box li::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #dcdce1;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.brand-list-box li em{display:inline-block;width:33px;height:33px;text-align:center;overflow:hidden;vertical-align:middle;font-style:normal;margin-right:10px}.brand-list-box li img{height:33px;vertical-align:text-bottom}.brand-list-box li.active::after{content:"";width:14px;height:6px;border-bottom:2px solid #07cdd0;border-left:2px solid #07cdd0;position:absolute;top:50%;right:20px;margin-top:-4px;-webkit-transform:rotate(-45deg) translateY(-50%);transform:rotate(-45deg) translateY(-50%)}.brand-list-box li.active{padding-right:55px}.brand-list-box .iconfont{position:absolute;right:20px;color:#ff6a51;font-size:20px}</style><div class="page-content brand-list-box">', _.each(list, function(t) {
				__p += '<div class=hd data-value="' + (null == (__t = t.pinYin) ? "" : __t) + '">' + (null == (__t = t.pinYin) ? "" : __t) + "</div><div class=bd><ul class=brand-item>", _.each(t.results, function(t) {
					__p += '<li class=js-item data-id="' + (null == (__t = t.id) ? "" : __t) + '"><em><img data-src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt></em><span>' + (null == (__t = t.brandName) ? "" : __t) + "</span></li>"
				}), __p += "</ul></div>"
			}), __p += "<div class=hd data-value=#>以下品牌即将开通</div><div class=bd><ul class=brand-item>", _.each(unopen, function(t) {
				__p += '<li class=js-unopen data-id="' + (null == (__t = t.id) ? "" : __t) + '"><em><img data-src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt></em><span>' + (null == (__t = t.name) ? "" : __t) + "</span><i class=iconfont>&#xe635;</i></li>"
			}), __p += "</ul></div></div>";
			return __p
		}
	}), define("textcharGuideHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<ul class=brand-guide-wrape>", _.each(list, function(t) {
				__p += '<li class=js-brand-guide data-value="' + (null == (__t = t.pinYin) ? "" : __t) + '">'
			}), __p += "</li></ul><div class=char-selected></div>";
			return __p
		}
	}), define("charGuide", ["UIAbstract", "textcharGuideHtml"], function(t, e) {
		var i = t.extend({
			options: {
				list: []
			},
			events: {
				"click .js-brand-guide": "brandNameGuide"
			},
			attributes: {
				"class": "brand-guide"
			},
			_setOptions: function(t) {
				for (var e in t) switch (e) {
					case "firstChar":
						this.options.firstChar = t.firstChar;
						break;
					case "className":
						this.options.className = t.className
				}
			},
			_create: function() {
				var t = this.template(e, this.options);
				this.$el.html(t)
			},
			brandNameGuide: function(t) {
				var e = this.$(t.currentTarget);
				e.removeClass("js-brand-guide");
				var i = this.$(".char-selected");
				i.html(e.attr("data-value")), i.addClass("char-selected-show");
				var n = this.$el.parent().find("." + this.options.className + '[data-value="' + e.attr("data-value") + '"]'),
					a = this.$el.parent().find("." + this.options.className + '[data-value="' + this.options.firstChar + '"]');
				if (n.length) {
					var r = n.offset().top - a.offset().top;
					$(this.pageView.el).find(".page-content")[0].scrollTop = r
				}
				setTimeout(function() {
					e.addClass("js-brand-guide"), i.removeClass("char-selected-show")
				}, 1100)
			}
		});
		return i
	}), define("controller/car/brand", ["textcarBrandHtml", "PageView", "session", "carModel", "VinScanner", "UILazyload", "charGuide"], function(t, e, i, n, a, r, o) {
		var s = e.extend({
			events: {
				"click .js-item": "nextAction",
				"click .js-tip": "closeTipAction",
				"click .js-unopen": "unopenAction"
			},
			onCreate: function() {
				var t = {
						center: {
							text: "选品牌"
						}
					},
					e = this;
				app.nativeApi.has("app.scan") && (t.right = [{
					text: "扫码识车",
					callback: function() {
						a.callCamera(e.query.from)
					}
				}]), this.header.option(t)
			},
			ajax: function() {
				var t = n.firstLevel(),
					e = n.toBeOpenedBrands();
				return [t, e]
			},
			onShow: function(e, i) {
				var n = this.template(t, {
					list: e,
					is716: !1,
					unopen: i
				});
				this.$el.html(n), this.list = e, this.unopen = i, this.addOnScroll(), new r({
					imgs: this.$("img[data-src]")
				}), this.animationEndAction()
			},
			onCache: _.noop,
			animationEndAction: function() {
				var t = this.list;
				this.unopen && this.unopen.length > 0 && t.push({
					pinYin: "#"
				});
				var e = new o({
					list: t,
					appendElement: this.el
				});
				e.option({
					className: "hd",
					firstChar: "A"
				})
			},
			nextAction: function(t) {
				this.$(".js-item.active").removeClass("active");
				var e = $(t.currentTarget).addClass("active"),
					n = e.attr("data-id"),
					a = e.find("img").attr("src"),
					r = {
						brandId: n,
						imgUrl: a
					};
				i.set("new_car", r), this.query.id = n, app.goTo("car/brandtwo?" + $.param(this.query))
			},
			closeTipAction: function(t) {
				$(t.currentTarget).hide()
			},
			unopenAction: function(t) {
				var e = $(t.currentTarget).data("id"),
					i = _.find(this.unopen, function(t) {
						return t.id == e
					});
				app.goTo("city/checkin?brandId=" + i.id)
			}
		});
		return s
	}), define("textcarBrandtwoHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.brand-list-box .hd{position:relative;padding:0 10px 0 20px;background-color:#efeff4;font-weight:700;font-weight:400;font-size:13px;line-height:20px;color:#666}.brand-list-box .brand-item{background-color:#fff}.brand-list-box li{line-height:41px;padding:5px 10px 5px 15px;position:relative;display:block;cursor:pointer;font-size:15px}.brand-list-box li:last-child{border-bottom:0}.brand-list-box li:last-child::before{display:none}.brand-list-box li::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #dcdce1;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.brand-list-box li em{display:inline-block;width:33px;height:33px;text-align:center;overflow:hidden;vertical-align:middle;font-style:normal;margin-right:10px}.brand-list-box li img{height:33px;vertical-align:text-bottom}.brand-list-box li.active::after{content:"";width:14px;height:6px;border-bottom:2px solid #07cdd0;border-left:2px solid #07cdd0;position:absolute;top:50%;right:30px;margin-top:-4px;-webkit-transform:rotate(-45deg) translateY(-50%);transform:rotate(-45deg) translateY(-50%)}.brand-list-box-padding li{padding-left:50px}.brand-list-box li.active{padding-right:55px}</style><div class=page-content>', _.each(list, function(t) {
				__p += "<div class=brand-list-box><div class=hd>" + (null == (__t = t.producerName) ? "" : __t) + '</div><div class=bd><ul class="brand-item brand-list-box-padding" data-id="' + (null == (__t = t.id) ? "" : __t) + '">', _.each(t.brandProduceCar, function(t) {
					__p += '<li class=js-item data-id="' + (null == (__t = t.id) ? "" : __t) + '"><span>' + (null == (__t = t.carName) ? "" : __t) + "</span></li>"
				}), __p += "</ul></div></div>"
			}), __p += "</div>";
			return __p
		}
	}), define("controller/car/brandtwo", ["textcarBrandtwoHtml", "PageView", "session", "carModel", "VinScanner"], function(t, e, i, n, a) {
		var r = e.extend({
			events: {
				"click .js-item": "nextAction"
			},
			onCreate: function() {
				var t = this,
					e = {
						center: {
							text: "选车系"
						}
					};
				app.nativeApi.has("app.scan") && (e.right = [{
					text: "扫码识车",
					callback: function() {
						a.callCamera(t.query.from)
					}
				}]), this.header.option(e)
			},
			ajax: function() {
				var t = n.secondLevel(this.query.id);
				return t
			},
			onShow: function(e) {
				var i = this.template(t, {
					list: e
				});
				this.$el.html(i)
			},
			nextAction: function(t) {
				this.$(".js-item.active").removeClass("active");
				var e = $(t.currentTarget).addClass("active"),
					n = e.attr("data-id"),
					a = e.find("span").html().trim(),
					r = e.parent().data("id"),
					o = i.get("new_car");
				o.produceId = n, o.carTypeName = a, o.secondId = r, i.set("new_car", o), this.query.id = n, app.goTo("car/brandthree?" + $.param(this.query))
			}
		});
		return r
	}), define("textcarBrandthreeHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.brand-list-box .hd{position:relative;padding:0 10px 0 20px;background-color:#efeff4;font-weight:700;font-weight:400;font-size:13px;line-height:20px;color:#666}.brand-list-box .brand-item{background-color:#fff}.brand-list-box li{line-height:41px;padding:5px 10px 5px 15px;position:relative;display:block;cursor:pointer;font-size:15px}.brand-list-box li:last-child{border-bottom:0}.brand-list-box li:last-child::before{display:none}.brand-list-box li::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #dcdce1;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.brand-list-box li em{display:inline-block;width:33px;height:33px;text-align:center;overflow:hidden;vertical-align:middle;font-style:normal;margin-right:10px}.brand-list-box li img{height:33px;vertical-align:text-bottom}.brand-list-box li.active::after{content:"";width:14px;height:6px;border-bottom:2px solid #07cdd0;border-left:2px solid #07cdd0;position:absolute;top:50%;right:30px;margin-top:-4px;-webkit-transform:rotate(-45deg) translateY(-50%);transform:rotate(-45deg) translateY(-50%)}.brand-list-box li.active{padding-right:55px}</style><div class="page-content brand-list-box"><ul class=brand-item>', _.each(list, function(t) {
				__p += '<li class=js-item data-id="' + (null == (__t = t.id) ? "" : __t) + '" data-year="' + (null == (__t = t.yearName) ? "" : __t) + '" data-name="' + (null == (__t = t.carDetailName) ? "" : __t) + '"><span>' + (null == (__t = t.wholeName) ? "" : __t) + "</span></li>"
			}), __p += "</ul></div>";
			return __p
		}
	}), define("controller/car/brandthree", ["textcarBrandthreeHtml", "PageView", "session", "local", "user", "carModel", "VinScanner"], function(t, e, i, n, a, r, o) {
		var s = e.extend({
			events: {
				"click .js-item": "nextAction"
			},
			onCreate: function() {
				var t = this,
					e = {
						center: {
							text: "选年款配置"
						}
					};
				app.nativeApi.has("app.scan") && (e.right = [{
					text: "扫码识车",
					callback: function() {
						o.callCamera(t.query.from)
					}
				}]), this.header.option(e), this.car = i.get("new_car")
			},
			ajax: function() {
				var t = r.thirdLevel(this.query.id);
				return t
			},
			onShow: function(e) {
				var n = i.get("new_car");
				if (!n) return void app.goBack("", {
					stop: !1
				});
				var a = this.template(t, {
					list: e
				});
				this.$el.html(a)
			},
			nextAction: function(t) {
				this.$(".js-item.active").removeClass("active");
				var e = $(t.currentTarget).addClass("active"),
					n = e.attr("data-id"),
					a = e.attr("data-year"),
					r = e.attr("data-name"),
					o = i.get("new_car");
				_.extend(o, {
					brandTypeId: n,
					yearType: a,
					name: r,
					buyDate: "",
					mileage: ""
				}), i.set("new_car", o), app.goTo("car/info?isNewCar=1")
			}
		});
		return s
	}), define("textcarInfoHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.pop-act h3{font-weight:400;font-style:15px;color:#666;line-height:1.5;margin-bottom:5px}.pop-act p{font-weight:700;font-style:15px;color:#666}.pop-act .btn-primary{font-size:16px;font-weight:400;margin-bottom:15px;border-bottom:0;box-shadow:none}.pop-act .btn-link2{color:#ff7f0e;font-size:16px;height:44px;line-height:44px;text-align:center}.form-item.form-item--arrow-btn .icon-arrow{right:0}.form-item.form-item--arrow-btn{padding-right:35px}.form-block .field-text-wrap{padding-right:15px}.pub-arrow{padding-right:35px}.pub-arrow::after{right:30px}.cns-item{padding:.02rem;background:#fff;border-radius:.05rem;position:relative;float:left;margin:0 .16rem .15rem 0}.cns-bg{color:#fff;background:#61acff;width:1.02rem;text-align:center;height:.36rem;line-height:.36rem;border-radius:.05rem;word-break:break-all}.cns-circle{position:absolute;right:-0.06rem;bottom:-0.06rem;width:.2rem;height:.2rem;background:#ccc;color:#fff;border-radius:.2rem;text-align:center}.active .cns-circle{background:#07cdd0}</style><div class=page-content><div class="car-info-box', isNewCar || (__p += " pub-arrow js-select"), __p += '" style=padding-top:20px;padding-bottom:20px><div class=car-info><div class=brand><img src="' + (null == (__t = car.imgUrl) ? "" : __t) + '" alt=默认车辆></div><div class=info style=padding-left:5px>' + (null == (__t = car.carTypeName) ? "" : __t) + "\n          " + (null == (__t = car.yearType) ? "" : __t) + "\n          " + (null == (__t = car.name) ? "" : __t) + '</div></div></div><div class=plr10><div class="form-item form-item--arrow-btn form-block js-buytime"><label class=field-label>购车时间</label><div class="field-text-wrap tr js-buy-value tr" style=padding-right:0>', car.buyDate && print(app.dateFormat(car.buyDate, "yyyy年mm月")), __p += '</div><i class=icon-arrow></i></div><div class="form-item  form-item--arrow-btn form-block km"><label class=field-label>行驶里程</label><div class=field-text-wrap><input type=tel class="field-text tr" value="' + (null == (__t = car.mileage) ? "" : __t) + '" placeholder=请输入公里数 name=mileage style=line-height:52px></div></div>', car.isCanUse || (__p += "<p style=color:#999;text-align:center;padding-top:10px>当前城市暂不支持当前车辆保养服务</p>"), __p += " \n\n    ", violationCar && violationCar.length && (__p += "<div class=font-s style=margin-bottom:.1rem>选择爱车车牌号:</div>", _.each(violationCar, function(t, e) {
				__p += '<div class="cns-item font js-guanlian" ', (e + 1) % 3 == 0 && (__p += "style=margin-right:0 "), __p += "><div class=cns-circle><i class=iconfont>&#xe645;</i></div><div class=cns-bg>" + (null == (__t = t.carNumber) ? "" : __t) + "</div></div>"
			}), __p += "\n    "), __p += '</div></div><div class=page-bottom><div style=padding:.15rem;background:#fff><span class="full-btn', print(car.isCanUse ? " js-maintenance" : " disabled"), __p += '" data-ajax>去看保养方案</span></div></div>';
			return __p
		}
	}), define("carValidate", ["dateUtil"], function(t) {
		var e = {
			mileage: function(t) {
				return t ? /^[1-9]\d*$/.test(t) ? t > 3e5 ? "行程公里数必须小于30万" : void 0 : "行驶里程数只能是正整数" : "请输入公里数"
			},
			buyDate: function(e, i) {
				if (!e) return "请选择购车时间";
				i || (e = e.replace(/(\d+).(\d+)./, "$1-$2"), e += "-01");
				var n = new Date(e);
				return n.getTime() > t.now() ? "购车时间不能大于当前时间" : void 0
			}
		};
		return e
	}), define("controller/car/info", ["textcarInfoHtml", "PageView", "session", "local", "user", "dateUtil", "UIScrollList", "carValidate", "carModel"], function(t, e, i, n, a, r, o, s, l) {
		var c = e.extend({
			options: {
				goBackWithCache: !1
			},
			events: {
				"click .js-maintenance": "maintenanceAction",
				"click .js-save": "saveCarAction",
				"click .js-buytime": "showScrollListAction",
				"click .js-select": "selectAction",
				"click .js-guanlian": "guanlianAction"
			},
			onCreate: function() {
				this.header.option({
					left: {
						callback: function() {
							i.get("add_to_maintenance") ? (i.remove("add_to_maintenance"), app.goBack("index")) : app.goBack()
						}
					},
					center: {
						text: "填写爱车信息"
					},
					right: [{
						text: '<i class="iconfont">&#xe60a;</i>',
						callback: function() {
							app.goBack("")
						}
					}]
				}), "add" === this.query.from && (this.query.isNewCar = 1), this.car = this.query.isNewCar ? i.get("new_car") : n._get("car")
			},
			ajax: function() {
				return a.isLogin ? this.query.isNewCar ? l.getMyViolationCar() : void 0 : l.validateOrder(this.car.brandTypeId)
			},
			onShow: function(e) {
				var i;
				a.isLogin ? this.query.isNewCar && (this.car.isCanUse = 1, i = e) : this.car.isCanUse = e;
				var n = this.template(t, {
					car: this.car,
					isNewCar: this.query.isNewCar,
					violationCar: i ? i : []
				});
				this.$el.html(n)
			},
			showScrollListAction: function() {
				var t = [],
					e = [],
					i = this,
					n = this.$(".js-buy-value").html().trim();
				if (n) n = n.split(/[^\d]/);
				else {
					var a = 2010;
					this.car.yearType && (a = parseInt(this.car.yearType, 10)), n = [a, "01"]
				}
				for (var s = 1990; s < r.getCurrentYear() + 1; s++) t.push({
					text: s,
					value: s
				});
				for (s = 1; 13 > s; s++) e.push({
					text: r.parseNumber(s),
					value: r.parseNumber(s)
				});
				new o({
					appendElement: document.body,
					title: "购车时间",
					group: [t, e],
					selected: n,
					done: function(t) {
						this.hide();
						var e = t[0] + "年" + t[1] + "月";
						i.$(".js-buy-value").html(e)
					}
				})
			},
			getValue: function() {
				var t = this.$(".js-buy-value").html().trim(),
					e = this.$("[name=mileage]").val().trim(),
					i = s.buyDate(t);
				if (i) return void app.alert(i);
				var n = s.mileage(e);
				return n ? void app.alert(n) : {
					buyDate: t.replace(/(\d+).(\d+)./, "$1-$2") + "-01",
					mileage: e
				}
			},
			maintenanceAction: function() {
				var t = this.getValue();
				if (t) {
					var e = this.car,
						i = this;
					if (a.isLogin)
						if (this.query.isNewCar) {
							var r = {
								brandTypeId: e.brandTypeId,
								mileage: t.mileage,
								buyDate: t.buyDate,
								isMerger: 0
							};
							this.guanlianCarNumber && (r.carNumber = this.guanlianCarNumber, r.isMerger = 1, r.isDefault = 1), l.saveMyCar(r, function(t) {
								_.extend(e, t), i.goToMan(e)
							})
						} else l.updateMyCar({
							id: e.id,
							mileage: t.mileage,
							buyDate: t.buyDate
						}, function(n) {
							e.buyDate = t.buyDate, e.mileage = n.mileage, i.goToMan(e)
						});
					else {
						e.buyDate = t.buyDate, e.mileage = t.mileage;
						var o = n._get("car");
						o && (this.car = _.extend(o, e)), this.goToMan(this.car)
					}
				}
			},
			goToMan: function(t) {
				n._set("car", t), this.query.isNewCar && (i.set("add_to_maintenance", 1), app.goTo("car/info", {
					trigger: !1,
					replace: !0
				})), app.goTo("car/maintenance")
			},
			selectAction: function() {
				app.goTo(a.isLogin ? "car/select" : "car/brand")
			},
			guanlianAction: function(t) {
				var e = $(t.currentTarget);
				e.hasClass("active") ? (e.removeClass("active"), this.guanlianCarNumber = null) : (this.$(".js-guanlian.active").removeClass("active"), e.addClass("active"), this.guanlianCarNumber = e.find(".cns-bg").html())
			}
		});
		return c
	}), define("textcarSelectHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				if (__p += '<style>.user-car-list{padding:10px}.user-car-list li{position:relative;margin-bottom:10px;padding:10px 10px 10px 75px;background:#fff;border-radius:5px;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2);font-size:14px;color:#666}.user-car-list li .name{padding-right:30px;color:#333;font-size:15px}.user-car-list li:after{content:"";display:inline-block;vertical-align:middle;width:8px;height:8px;border-top:1px solid #ccc;border-right:1px solid #ccc;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:25px;top:50%;margin-top:-1px;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}.user-car-list .gray9{padding-top:5px;font-size:12px}.user-car-list li .car-delete{display:none}.user-car-list li.delete{border-radius:0;padding:0}.user-car-list li.delete>div{position:relative;display:block;padding:10px 10px 10px 75px;background:#fff;z-index:10}.user-car-list li.delete::after{display:none}.user-car-list li.delete .car-delete{display:block;z-index:9;position:absolute;top:50%;right:0;width:80px;height:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-radius:0;background-color:#ff826d;border:0 none;color:#fff;outline:0}#SelectCurrentCar_content li:after{content:"";display:inline-block;vertical-align:middle;width:20px;height:20px;background:url(https://img01.lechebangstatic.com/webapp/bg-global.png) no-repeat;background-size:240px auto;background-position:-115px -80px;position:absolute;right:15px;top:50%;margin-bottom:10px;border:0;-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);transform:translateY(-50%)}#SelectCurrentCar_content li.active:after{background-position:-139px -80px}.user-car-list li>div{display:table-cell;vertical-align:middle}.user-car-list li .img{position:absolute;top:50%;left:10px;text-align:center;width:55px;font-size:12px;overflow:hidden;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.user-car-list li img{height:36px}.user-car-disabled h3{font-size:13px;padding:0 10px}.user-car-disabled ul{padding-top:0}.user-car-disabled ul div{color:#999!important}.user-car-disabled .user-car-list li:after{display:none}</style><div class=page-content>', list.length) {
					__p += "<ul class=user-car-list id=SelectCurrentCar_content>";
					var pos, enable = [],
						unable = [];
					_.find(list, function(t, e) {
						return pos = e, 1 == t.isDefault
					});
					var first = list.splice(pos, 1);
					list.unshift(first[0]), _.each(list, function(t) {
						t.isCanUse ? enable.push(t) : unable.push(t)
					}), __p += "\n  ", _.each(enable, function(t) {
						__p += '<li class="js-select', t.id == selected && print(" active"), __p += '" data-id="' + (null == (__t = t.id) ? "" : __t) + '" data-ajax=0><div class=img><img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt>', t.isDefault && (__p += "<div class=gray9>默认车辆</div>"), __p += "</div><div class=c><div class=name>" + (null == (__t = t.carTypeName) ? "" : __t) + "\n          " + (null == (__t = t.yearType) ? "" : __t) + "\n          " + (null == (__t = t.name) ? "" : __t) + "</div><p>", print(t.carNumber ? t.carNumber : "车牌号待补充"), __p += "</p><p>行驶里程 " + (null == (__t = t.mileage) ? "" : __t) + "公里</p></div></li>"
					}), __p += "</ul>", unable.length && (__p += "<div class=user-car-disabled><h3>当前城市暂不支持下列车型的保养：</h3><ul class=user-car-list>", _.each(unable, function(t) {
						__p += '<li><div class=img><img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt>', t.isDefault && (__p += "<div class=gray9>默认车辆</div>"), __p += "</div><div class=c><div class=name>" + (null == (__t = t.carTypeName) ? "" : __t) + "\n          " + (null == (__t = t.yearType) ? "" : __t) + "\n          " + (null == (__t = t.name) ? "" : __t) + "</div><p>", print(t.carNumber ? t.carNumber : "车牌号待补充"), __p += "</p><p>行驶里程 " + (null == (__t = t.mileage) ? "" : __t) + "公里</p></div></li>"
					}), __p += "</ul></div>"), __p += "\n "
				} else __p += "<p style=text-align:center;margin-top:10px>还没有添加属于自己的车辆</p>";
				__p += "</div>"
			}
			return __p
		}
	}), define("controller/car/select", ["textcarSelectHtml", "PageView", "session", "local", "geolocation", "carModel"], function(t, e, i, n, a, r) {
		var o = e.extend({
			events: {
				"click .js-select": "selectAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "选择车辆"
					},
					right: [{
						text: "添加车辆",
						callback: function() {
							i.remove("new_car");
							var t = app.referrer;
							t = "user/maintenance" == t ? "track" : "plan", app.goTo("car/brand?from=add&select=" + t)
						}
					}]
				}), this.car = n._get("car") || {}
			},
			ajax: function() {
				var t = {
					url: "mycar/getMyCarByUserId",
					data: {
						cityId: a.getPostion().cityId
					}
				};
				return t
			},
			onShow: function(e) {
				e = _.filter(e, function(t) {
					return !!t.brandId
				});
				var i = this.template(t, {
					list: e,
					selected: this.car.id
				});
				this.$el.html(i), this.cars = e
			},
			selectAction: function(t) {
				var e = $(t.currentTarget).attr("data-id");
				_.find(this.cars, function(t) {
					return t.id == e ? (n._set("car", t), !0) : void 0
				}), r.setDefaultCar(e, function() {
					"index" == app.referrer ? app.goBack("car/info") : app.goBack()
				})
			}
		});
		return o
	}), define("textcarMaintenanceHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				__p += '<style>.plan-hd{position:relative;box-sizing:border-box;padding:5px 10px 5px 20px;border-bottom:1px solid #f5f5f5;background-color:#fbfbfb;font-weight:700;font-weight:400;font-size:13px;line-height:24px}.plan-hd::after{content:"";position:absolute;right:20px;top:50%;margin-top:-3px;display:inline-block;vertical-align:middle;width:6px;height:6px;border-left:1px solid #666;border-bottom:1px solid #666;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform:translate(0,-50%) rotate(-45deg);transform:translate(0,-50%) rotate(-45deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out}.plan-hd.expanded::after{margin-top:3px;-webkit-transform:translate(0,-50%) rotate(135deg);transform:translate(0,-50%) rotate(135deg)}.plan-box{display:none;background:#fff}.plan-box-r,.plan-hd.expanded+.plan-box,.plan-list .r{display:block}.plan-box h3{font-size:12px}.plan-tips{font-size:12px;background-color:#fff9e5;color:#666;padding:5px 0;text-align:center}.plan-bom-pirce{height:30px;background-color:rgba(255,239,208,.97);line-height:30px;font-size:13px;text-align:center;color:#666}.plan-bom-pirce .pub-price-normal{font-size:15px;color:#666}.plan-bom-pirce .pub-price-normal dfn{font-weight:400}.plan-bom-box2{position:relative;background:#30404e;height:60px;padding:5px 0 0 15px;box-sizing:border-box;color:#fff;font-size:13px;line-height:60px;width:100%}.plan-bom-box2 .plan-btn{position:absolute;right:0;margin:3px 15px 0 0}.plan-bom-box2 .plan-btn .btn-primary{margin:0;padding-left:20px;padding-right:20px}.plan-bom-box2 .plan-btn .s{line-height:20px;padding-top:5px}.plan-bom-box2 .plan-btn .font12{display:block;font-weight:400}.plan-bom-box2 .pub-price{font-size:30px;font-weight:700}.plan-bom-box2 .font12{font-size:12px;color:#fff;font-weight:400}.plan-bom-box2 .plan-bom-total{position:absolute;left:15px;line-height:54px;font-size:14px}.plan-bom-box2 .plan-bom-total .ticket{display:inline-block;min-width:87px;height:18px;line-height:18px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAAlCAMAAAAHkpnEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURQAAAP+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTf+dTbk0Z3YAAAAodFJOUwAZOYFRk6785zAEBhW60gUmw5zYCb0nclQNFxvJzO2Q8zPGqM8K9m9NQU3aAAAA9klEQVRYw+2YWQ6CQBBEWxYH2XdlVVCw7n9ChyEewYRK7A+az5dJT1VPCZhK2GiFpQzthQT2sk+CQwHrbJNguRy4Gta1dL8iIqCNcDW9XLEcHnbBWu5/Hk6Hpz3B+961F8EkvHbtqgu4BLQuilpkVqgoFKyCmrXe5gkFbZITOm+WUrCmmaa1Y3gtAWzrIbZFgjPOBLSaMth6qOAfHtaHCgm9jOpsgyfJ3D713GpNGDsC2m7cNIFLb9m8jGlP6Il2sN7st3cC2LvZb0UmDAS0AyZCLysfaA5P2+Cxv3lZ8oS3/rJkNTeT1dDkYDcQZoxczvtP8n9UH17zg+EJhL74AAAAAElFTkSuQmCC);background-size:100% 100%;overflow:hidden;font-size:13px;color:#ff9d4d;text-align:center;padding:0 5px;vertical-align:3px}.plan-bom-box2 .plan-bom-total .ticket span{font-size:14px}.ma-oil-change{display:inline-block;padding:0 8px;border:1px solid #26d3d6;border-radius:10px;color:#26d3d6;line-height:16px;font-weight:400;margin-left:4px}.car-info-box+.plan-hd:after{display:none}.ma-items{background:#fff;padding-left:15px}.ma-item{border-bottom:1px solid #ececec;position:relative;padding:14px 0}.ma-item:last-child{border-bottom:none}.ma-item-content{margin:0 70px 0 30px}.ma-circle,.ma-item-price{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ma-item-price{color:#ff7d13;font-size:16px;right:15px}.ma-circle{height:20px;width:20px;border:1px solid #e8e8e8;border-radius:20px;text-align:center;color:#fff}.ma-circle.active{background:#07cdd0;border-color:#07cdd0}.ma-desc,.current-oil{color:#666;font-size:13px}.ma-desc{margin-left:10px}.ma-info-wrap{padding:10px 10px 10px 5px}.ma-oil-num{margin-left:5px;color:#666}.ma-info{font-size:16px;color:#07cdd0;position:relative;top:2px}.ma-free{padding:10px 0 10px 20px}.edit-size{font-size:0.18rem}</style><div class=page-content><div class=car-info-box><div class=car-info><div class=brand><img src="' + (null == (__t = car.imgUrl) ? "" : __t) + '" alt></div><div class=info><div class>' + (null == (__t = car.carTypeName) ? "" : __t) + "\n                " + (null == (__t = car.yearType) ? "" : __t) + "\n                " + (null == (__t = car.name) ? "" : __t) + "</div><p class=js-mileage>实际里程<span class=js-mileage-number>" + (null == (__t = car.mileage) ? "" : __t) + '</span>公里&nbsp;<i class="iconfont edit-size" style=font-size:0.13rem>&#xe615;</i></p></div></div></div><div class="plan-hd expanded">', __p += plan.rational ? "<div class=js-rational>根据您的行驶里程，您的爱车有<span class=pub-txt-warning>" + (null == (__t = plan.items.length) ? "" : __t) + '项零件</span>需要保养&nbsp;<i class="iconfont icf-info"></i></div>' : "\n    根据您的行驶里程，当前您的爱车车况良好。如果您不放心，建议您做<span class=pub-txt-warning>" + (null == (__t = plan.items.length) ? "" : __t) + "项</span>保养:\n    ", __p += "<div style=color:#666>以下保养备件价格均包含工时费</div></div><ul class=ma-items style>", _.each(plan.items, function(t) {
					__p += '<li class="ma-item', print(1 == t.id && oilLength > 1 ? " js-oil" : " js-item"), __p += '" data-id="' + (null == (__t = t.id) ? "" : __t) + '">', 1 == t.id ? (__p += '<div class="ma-circle active"><i class=iconfont>&#xe645;</i></div><div class=ma-item-price>&yen;<span class=js-oil-price data-price="' + (null == (__t = t.salePrice) ? "" : __t) + '">' + (null == (__t = templateApi.price(t.salePrice + currentOil.priceSaleDifference)) ? "" : __t) + "</span></div><div class=ma-item-content>" + (null == (__t = t.itemName) ? "" : __t) + "<span class=ma-oil-num>" + (null == (__t = templateApi.oilNum(t.remarks)) ? "" : __t) + '</span><div><span class="js-currentOil current-oil">' + (null == (__t = currentOil.oilName) ? "" : __t) + "</span>", oilLength > 1 && (__p += "<span class=ma-oil-change>可换</span>"), __p += "</div></div>") : (__p += '<div class="ma-circle', t.h5Active && print(" active"), __p += '"><i class=iconfont>&#xe645;</i></div><div class=ma-item-price>' + (null == (__t = templateApi.price2(t.salePrice)) ? "" : __t) + "</div><div class=ma-item-content>" + (null == (__t = t.itemName) ? "" : __t) + "<span class=ma-desc>" + (null == (__t = t.description) ? "" : __t) + "</span>", t.remarks && (__p += '<span class=ma-info-wrap><i class="iconfont ma-info">&#xe60f;</i></span>'), __p += "</div>"), __p += "</li>"
				}), __p += "</ul>";
				var totalOtherItems = [];
				plan.nearItems && plan.nearItems.length && (totalOtherItems = totalOtherItems.concat(plan.nearItems)), plan.otherItems && plan.otherItems.length && (totalOtherItems = totalOtherItems.concat(plan.otherItems)), __p += "\n  \n\n", totalOtherItems.length && (__p += '<div class="plan-hd js-group">还有' + (null == (__t = totalOtherItems.length) ? "" : __t) + '项零件可自主选择保养</div><div class="plan-box  plan-box-y"><ul class=ma-items>', _.each(totalOtherItems, function(t) {
					__p += '<li class="ma-item js-item" data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class=ma-circle><i class=iconfont>&#xe645;</i></div><div class=ma-item-price>' + (null == (__t = templateApi.price2(t.salePrice)) ? "" : __t) + "</div><div class=ma-item-content>" + (null == (__t = t.itemName) ? "" : __t) + "<span class=ma-desc>" + (null == (__t = t.description) ? "" : __t) + "</span>", t.remarks && (__p += '<span class=ma-info-wrap><i class="iconfont ma-info">&#xe60f;</i></span>'), __p += "</div></li>"
				}), __p += "</ul></div>"), __p += '<div class="ma-free js-check">乐车邦还为您准备了免费保养检测&nbsp;<i class="iconfont icf-info"></i></div><div style=height:100px>&nbsp;</div></div><footer class=page-bottom><div class=plan-bom-pirce>4S店指导价：<span class=pub-price-normal><dfn>&yen;</dfn><span class=js-base-price></span></span>&nbsp;乐享价：<span class=pub-price-normal><dfn>&yen;</dfn><span class=js-lcb-price></span></span>起</div><div class=plan-bom-box2><div class="plan-btn', isPageError || print(" js-shop"), __p += '"><a href=javascript:void(0); class="btn-primary full-width', isPageError && print(" disabled"), __p += '">下一步</a></div><div class=plan-bom-total><span class=pub-price><dfn>&yen;</dfn><span class=js-end-price></span></span><span class=js-discount style=padding-left:10px></span>', isLogin || (__p += '<span class="font12 js-login" style="padding:10px 0"><span style=color:#ff9d4d>登录</span>&nbsp;查看优惠</span>'), __p += "</div></div></footer>"
			}
			return __p
		}
	}), define("textoilSelectHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "<ul class=pop-plan-item style=max-height:250px>", _.each(oil, function(t) {
				__p += '<li data-id="' + (null == (__t = t.oilInfoId) ? "" : __t) + '" class="js-change ', t.oilInfoId == selected && print(" active"), __p += '"><span class=name>' + (null == (__t = t.oilName) ? "" : __t) + "</span>", t.storeNames && (__p += "<p style=color:#999>（仅限" + (null == (__t = t.storeNames.join("、")) ? "" : __t) + "使用）</p>"), __p += "\n    ", t.isBaseOil && 0 == t.priceSaleDifference ? __p += "<span class=txt>默认</span>" : (__p += "<span class=pub-price>", t.priceSaleDifference > 0 && print("+"), print(templateApi.price(t.priceSaleDifference)), __p += "</span>"), __p += "</li>"
			}), __p += "</ul>";
			return __p
		}
	}), define("OilSelect", ["UIAbstract", "textoilSelectHtml", "session"], function(t, e, i) {
		var n = t.extend({
			attributes: {
				style: "text-align:left;"
			},
			events: {
				"click li.js-change": "changeAction"
			},
			_create: function() {
				var t = i.get("oil");
				t || _.find(this.options.oil, function(e) {
					return e.isRecommendOil ? (t = e, i.set("oil", t), !1) : void 0
				}), this.options.selected = t.oilInfoId;
				var n = this.template(e, this.options);
				this.on("onShow", this.showAction), this.$el.html(n)
			},
			changeAction: function(t) {
				for (var e, n = $(t.currentTarget), a = n.attr("data-id"), r = this.options.oil, o = this.options, s = r.length; s--;)
					if (r[s].oilInfoId == a) {
						e = r[s];
						break
					}
				i.set("oil", e), this.$("li").removeClass("active"), n.addClass("active");
				for (var l = this.options.prices.length; l--;) {
					var c = $(this.options.prices[l]);
					c.each(function() {
						var t = $(this),
							i = e.priceSaleDifference;
						if (c.hasClass("js-base-price") && (i = e.priceOriDifference), e.priceSaleDifference < 0 && "undefined" != typeof o.promotion && 0 != o.promotion) {
							var n = t.data("promotion");
							if (n) var a = templateApi.price(t.data("price"));
							else var a = templateApi.price(t.data("price") + i)
						} else var a = templateApi.price(t.data("price") + i);
						t.html(a)
					})
				}
				$(this.options.desc).html(e.oilName), this.options.callback && this.options.callback.call(this, e), app._alert.hide()
			},
			showAction: function() {
				app.alert({
					title: "机油",
					msg: this.el
				}), app._alert.$(".pub-modal--alert").css({
					left: 0,
					marginLeft: "5%",
					width: "90%"
				})
			}
		});
		return n
	}), define("controller/car/maintenance", ["textcarMaintenanceHtml", "textfreeCheckHtml", "PageView", "session", "local", "user", "UIScreen", "OilSelect", "carValidate", "geolocation", "carModel"], function(t, e, i, n, a, r, o, s, l, c, d) {
		function p(t) {
			function e(t) {
				var e = _.find(i, function(e) {
					return e.itemId == t.id
				});
				e && (e.remarks && (t.remarks = e.remarks), t.storePrice = e.storePrice, t.salePrice = e.salePrice)
			}
			var i = t.lcbSkuPrice.lstAllItemLcbPrice;
			return _.each(t.items, e), t.nearItems && _.each(t.nearItems, e), t.otherItems && _.each(t.otherItems, e), t
		}
		var u, h = i.extend({
			options: {
				redirectCtrl: function(t, e, i) {
					i && n.remove("maintenance")
				}
			},
			events: {
				"click .js-mileage": "mileageAction",
				"click .js-check": "checkAction",
				"click .js-group": "groupAction",
				"click .js-rational": "rationalAction",
				"click .js-oil": "btnOilswitchAction",
				"click .js-login": "loginAction",
				"click .js-shop": "shopAction",
				"click .js-go": "goAction",
				"click .js-item": function(t) {
					function e(t) {
						t && (t.h5Active = !t.h5Active, $('.js-item[data-id="' + t.id + '"]').find(".ma-circle").toggleClass("active"))
					}
					var i = $(t.currentTarget),
						n = $(t.target),
						a = n.closest(".ma-info-wrap"),
						r = this.findItemById(i.data("id"));
					a.length ? app.alert(r.remarks) : 2 == r.id || 1 == r.id ? app.alert("机油、机油滤清器 为必选项") : (r.h5Active = !r.h5Active, i.find(".ma-circle").toggleClass("active"), 7 == r.id ? e(this.findItemById(14)) : 14 == r.id ? e(this.findItemById(7)) : 10 == r.id ? e(this.findItemById(11)) : 11 == r.id && e(this.findItemById(10)), this.priceAction())
				}
			},
			onCreate: function() {
				var t = this;
				this.header.option({
					center: {
						text: "智能保养方案"
					},
					right: [{
						text: "保养手册",
						callback: function() {
							t.plan && app.goTo("car/maintenanceManual?planId=" + t.plan.plan.id)
						}
					}]
				}), this.car = a._get("car"), this.cityId = c.getPostion().cityId
			},
			ajax: function() {
				var t = {
					url: "plan/getCurrentMaintenancePlan",
					data: {
						mileage: this.car.mileage,
						cityId: this.cityId
					}
				};
				r.isLogin ? t.data.carId = this.car.id : t.data.brandId = this.car.brandTypeId;
				var e = d.getOilInfoPriceResultOfBrandType(this.car.brandTypeId);
				return this.plan ? e : [e, t]
			},
			onShow: function(e, i) {
				function a() {
					_.find(e, function(t) {
						return t.isRecommendOil ? (o = t, n.set("oil", o), !1) : void 0
					})
				}
				this.plan ? i = this.plan : _.each(i.items, function(t) {
					t.h5Active = 1
				});
				var o = n.get("oil");
				o ? (o = _.find(e, function(t) {
					return t.oilInfoId == o.oilInfoId ? t : void 0
				}), o || a()) : a(), i.lcbSkuPrice.lstAllItemLcbPrice || (i.lcbSkuPrice.lstAllItemLcbPrice = [], this.isPageError = !0), o || (o = {}, this.isPageError = !0), i = p(i);
				var s = this.template(t, {
					car: this.car,
					plan: i,
					currentOil: o,
					oilLength: e.length,
					isLogin: r.isLogin,
					isPageError: this.isPageError
				});
				this.$el.html(s), this.plan = i, this.oil = e, this.currentOil = o, this.oilSelect(), this.priceAction()
			},
			onCache: _.noop,
			oilSelect: function() {
				var t = this;
				u = new s({
					promotion: !1,
					oil: this.oil,
					prices: [".js-base-price", ".js-lcb-price", ".js-end-price", ".js-oil-price"],
					desc: ".js-currentOil",
					callback: function(e) {
						t.currentOil = e, t.getVoucher()
					}
				})
			},
			priceAction: function() {
				function t(t) {
					t.h5Active && (null !== t.salePrice && "undefined" != typeof t.salePrice ? (e += t.storePrice, i += t.salePrice) : a.isPageError = !0)
				}
				var e = 0,
					i = 0,
					n = this.plan,
					a = this;
				_.each(n.items, t), n.nearItems && _.each(n.nearItems, t), n.otherItems && _.each(n.otherItems, t), $(".js-base-price").html(templateApi.price(e + this.currentOil.priceOriDifference)).attr("data-price", e), $(".js-lcb-price").html(templateApi.price(i + this.currentOil.priceSaleDifference)).attr("data-price", i), $(".js-end-price").attr("data-price", i), this.lcbPrice = i, r.isLogin ? this.getVoucher() : $(".js-end-price").html(templateApi.price(i + this.currentOil.priceSaleDifference))
			},
			getVoucher: function() {
				if (r.isLogin && !this.isPageError) {
					var t = this.lcbPrice + this.currentOil.priceSaleDifference,
						e = this;
					d.queryPlanVoucher({
						planId: this.plan.plan.id,
						brandTypeId: this.car.brandTypeId,
						amount: t,
						oilInfoId: this.currentOil.oilInfoId
					}, function(i) {
						if (i.voucher) {
							e.$(".js-discount").html('<span class="ticket">券已减：&yen; ' + templateApi.price(i.voucher.amount) + "</span>");
							var n = t - i.voucher.amount;
							e.$(".js-end-price").html(templateApi.price(Math.max(n, 0)))
						} else e.$(".js-end-price").html(templateApi.price(t)), e.$(".js-discount").html("")
					})
				}
			},
			shopAction: function() {
				var t = this.plan,
					e = {
						locationId: 0,
						brandTypeId: this.car.brandTypeId,
						maintenancePlanId: t.plan.id
					};
				e.itemList = d.getPlanItemsId(t).join(","), n.set("maintenance", this.plan), n.remove("effectDate"), app.goTo("shop/list?" + $.param(e))
			},
			findItemById: function(t) {
				function e(e) {
					return e.id == t ? (i = e, !0) : void 0
				}
				var i;
				return _.each(this.plan.items, e), !i && this.plan.nearItems && _.each(this.plan.nearItems, e), !i && this.plan.otherItems && _.each(this.plan.otherItems, e), i
			},
			mileageAction: function() {
				var t = this,
					e = this.$(".js-mileage-number").html().trim();
				app.alert({
					title: "修改保养里程数",
					msg: '<div class="pop-input-box"><input class="js-mileage" type="number" value="' + e + '"></div>',
					btns: [{
						text: "取消",
						callback: function() {
							this.hide()
						}
					}, {
						text: "确定",
						callback: function() {
							var e = app._alert.$(".js-mileage").val().trim(),
								i = l.mileage(e),
								n = this;
							return i ? void app.hint(i) : void(r.isLogin ? d.updateMyCar({
								id: t.car.id,
								mileage: e
							}, function(e) {
								t.plan = null, t.car.mileage = e.mileage, a._set("car", t.car), n.hide(), app.reload(t)
							}) : (t.plan = null, this.hide(), t.car.mileage = e, a._set("car", t.car), app.reload(t)))
						}
					}]
				})
			},
			checkAction: function() {
				new o({
					appendElement: document.body,
					title: "保养检测说明",
					msg: e
				})
			},
			groupAction: function(t) {
				var e = $(t.currentTarget);
				e.toggleClass("expanded")
			},
			rationalAction: function() {
				var t = this.plan.plan.mileage;
				if (this.plan.nextPlan) {
					var e = this.plan.nextPlan.mileage;
					app.alert('<div style="text-align: left;">当前为您推荐的是' + t + "公里智能保养方案。如果您在" + t + "公里已经做过保养，建议您行驶至" + e + "公里或在上一次保养的6个月后做下一次保养。</div>")
				} else if (this.plan.prePlan) {
					var i = this.plan.prePlan.mileage;
					app.alert('<div style="text-align: left;">当前为您推荐的是' + t + "公里智能保养方案。如果您在" + i + "公里已经做过保养，建议您行驶至" + t + "公里或在上一次保养的6个月后做下一次保养。</div>")
				} else app.alert("当前为您推荐的是" + t + "公里智能保养方案。建议您行驶至" + t + "公里或在上一次保养的6个月后做下一次保养。")
			},
			btnOilswitchAction: function(t) {
				var e = $(t.target),
					i = e.closest(".ma-circle");
				i.length ? app.alert("机油、机油滤清器 为必选项") : u.show()
			},
			loginAction: function() {
				app.goTo("login")
			},
			goAction: function(t) {
				var e = $(t.currentTarget);
				app.goTo(e.data("url"))
			}
		});
		return h
	}), define("texthelpHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.qa-box-item{position:relative;margin:10px;background-color:#fff;padding:10px 15px;border-radius:5px}.qa-box-item::after{content:"";position:absolute;right:20px;top:20px;display:inline-block;width:8px;height:8px;border-left:1px solid #676767;border-bottom:1px solid #676767;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out}.qa-box-item.expanded::after{margin-top:3px;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.qa-box-item .inner{display:none}.qa-box-item.expanded .inner{display:block}.qa-box-item h2{font-size:15px}.qa-box-item h3{font-size:13px;font-weight:700;line-height:1.6}.qa-box-item .as{padding:10px 0;font-size:12px;font-weight:400}.qa-box-item ol{margin-left:20px;list-style-type:decimal}.qa-box-item li{padding-bottom:5px}</style><div class=page-content><div class=qa-box-item><h2 class=js-ask>预订问题</h2><div class=inner><h3>Q：我怎么在乐车邦做汽车保养？</h3><div class=as><ol><li>打开乐车邦APP，进入“4S店保养”，添加您的爱车，并确定购买年份及当前行驶里程；</li><li>乐车邦根据您爱车的车型及行驶里程，按照厂家保养手册规范推荐需要做的保养项目；</li><li>选择您想预约的保养日期、4S店以及具体到店时间，确定保养价格；</li><li>在线确定并成功支付后，按照您预约的日期和时间到4S店进行保养；</li></ol></div><h3>Q:乐车邦是提供到店保养还是上门保养？</h3><div class=as>乐车邦全部合作方均为正规品牌4S店，仅提供到店保养，保养完全符合品牌及4S店的规范要求。</div><h3>Q:没有我的车辆品牌，怎么办？</h3><div class=as>很遗憾，当前可能会存在部分品牌没有合作4S店而无法提供保养服务的情况，乐车邦会加快4S店的合作推广，争取早日为您提供服务。</div><h3>Q:我不太清楚车辆的具体型号配置，怎么办？</h3><div class=as>我们7月底推出扫描VIN码识别车型的功能，只要您身边带有行驶证，通过此功能，可以快速选定您的车型。</div><h3>Q:保养的项目是如何确定的，服务网点都认可么？</h3><div class=as>智能推荐的保养项目是根据您的爱车当前行驶里程结合厂家保养手册决定的，完全符合品牌及4S店的规范要求。</div><h3>Q:给我推荐的保养项目不合适，我能自己调整么？</h3><div class=as>除了智能保养方案，您可以通过“个性方案”自行选择保养套餐，每一个套餐保养项目和价格均有所不同。但需要注意的是，自行选择的保养套餐项目可能违背厂家维修索赔政策，建议谨慎选择。</div><h3>Q:推荐的机油不是我平常使用的机油型号，我能更换么？</h3><div class=as>您先选定您的车型，进入智能保养方案页面，如果当前选择方案支持多种机油型号，在页面会有“换”的图标，点击图标可进行更换操作。</div><h3>Q:我能预约当天的保养么？</h3><div class=as>可以，预约只需要提前2小时。</div></div></div><div class=qa-box-item><h2 class=js-ask>代驾问题</h2><div class=inner><h3>Q:上门取送车服务是谁来提供？</h3><div class=as>上门取送车服务由乐车邦指定的战略合作伙伴爱代驾提供。</div><h3>Q:上门取送车服务包含哪一些内容？</h3><div class=as>乐车邦上门取送车保养包括驾驶员按指定地址上门取车，代驾至店端进行保养，保养完成后代驾返回指定还车地点。</div><h3>Q:如果代驾过程中出了问题怎么办？</h3><div class=as>所有的代驾服务均进行了保险投保。若上门取送车有任何问题，可直接联系乐车邦客服4006300111，由乐车邦出面协商解决。</div></div></div><div class=qa-box-item><h2 class=js-ask>支付问题</h2><div class=inner><h3>Q:我在线支付总是不成功，怎么办？</h3><div class=as><ol><li>检查您的网络情况，保证网络状况良好；</li><li>确保当前的支付金额在您的支付限额内，若待支付金额大于您的支付限额，需要您进行支付限额的调整；</li><li>乐车邦支持三种在线支付模式：微信、银行卡、支付宝，如果一种支付方式不成功，尝试更换乐车邦支持的其它支付方式。</li></ol></div></div></div><div class=qa-box-item><h2 class=js-ask>订单问题</h2><div class=inner><h3>Q:我想更改预约日期和时间，怎么办？</h3><div class=as>您可以进入用户中心我的订单，直接进行订单预约日期和时间的修改。不过部分促销特价订单不支持取消和修改，请以活动说明为准。</div><h3>Q:我已经支付完成，但发现保养项目不合适想修改，怎么办？</h3><div class=as>暂不支持订单保养项目的修改，请取消订单后重新预订新单。</div><h3>Q:我取消了已经支付的订单，钱怎么退还给我？</h3><div class=as>系统自动在5-10个工作日内将支付金额退回您的支付账户，无需任何手续费。</div><h3>Q:我去店里保养，怎么证明自己已经付过钱？</h3><div class=as>按照订单预订项目完成保养后，请将乐车券提供给服务人员进行验券确认，成功验券完成即证明您已经支付完毕，就能开具出门单提车。支付成功的短信中有乐车券码，同时在APP的“用户中心我的订单查看详情”里，也能随时查看乐车券码。</div><h3>Q:在店里做保养，还需要支付其它的费用么？</h3><div class=as>按照订单的保养项目做保养，不需要再额外支付任何费用，乐车邦的保养套餐价格已经包含套餐内项目的全部工时+备件费用。<br>4S店技师在为您的爱车进行标准厂家要求的保养检测后，会根据您的爱车零部件使用磨损情况提出增项保养建议，目的是为了保证您在驾驶过程中的顺畅和安全。增项保养项目需要您在4S店直接支付备件和工时费。</div><h3>Q:在保养现场我需要增加其它的保养项目，如何安排和付款？</h3><div class=as>如果到店后增加订单外其它的保养或维修项目，需要按照4S店的价格进行现场付款。</div><h3>Q:我需要发票，是乐车邦提供还是保养服务网点提供？</h3><div class=as>发票请向4S店收银员直接索取，发票金额按照乐车邦订单派工单中的客人支付金额开具。</div><h3>Q:保养完毕后，我发现有保养问题不满意，怎么办？</h3><div class=as>所有的保养服务在4S店内完成，全部维修保养质量由4S店按正常接待负相应职责，可直接联系4S店进行问题反馈和投诉，乐车邦会居中做好协助客户解决问题的责任。</div></div></div><div class=qa-box-item><h2 class=js-ask>优惠问题</h2><div class=inner><h3>Q:我怎样获得乐车邦的抵用券？</h3><div class=as>抵用券的获得方式主要有三种：<ol><li>新注册用户，我们会直接发放注册奖励抵用券；</li><li>在乐车邦成功支付完成后，分享红包可直接获得抵用券用于下次保养使用；</li><li>乐车邦会在网站或微信公众号内不定期组织各种活动，参与即可获得抵用券奖励，建议您关注乐车邦微信公众号：xt-lcb。</li></ol></div><h3>Q:我获得的抵用券应该在哪里查看？</h3><div class=as>抵用券可以在“用户中心我的抵用券”中查看。</div><h3>Q:为什么我的抵用券里的部分抵用券，在预订的时候不能使用？</h3><div class=as>抵用券分阶梯券和通用券，即达到一定金额抵用和全场直接抵用两种形式。下订单时，系统会自动帮您选择优惠力度最大的抵用券，您如果觉得不合适，也可以自己调整选择愿意使用的抵用券。每一个订单只能最多使用一张抵用券，不支持叠加使用。</div></div></div><div class=qa-box-item><h2 class=js-ask>违章问题</h2><div class=inner><h3>Q:查询的违章准确吗？</h3><div class=as>您好，违章信息与各地交管局同步，信息真实、可靠。如果您对查询结果有疑问，请通过“联系客服”联系我们。</div><h3>Q:除了车牌号之外，为什么还要输入其他信息？</h3><div class=as>为保护车主的隐私和信息安全，交管局要求除了车牌号之外还需要提供发动机号、车架号或者登记证书编码等。   \n            我们会对您提交的信息严格加密，请您放心使用。</div><h3>Q:我已拿到罚单，为什么你们这里还是查不出违章？</h3><div class=as>全国各地交管局的数据录入和更新频率不一样，一般新违章13个工作日后方可查询，个别地方除外。</div><h3>Q:为什么查询结果中罚款或者扣分显示未知？</h3><div class=as>您好，部分地区交管局没有公开罚款或者扣分数据。一旦公开，我们会第一时间加上。或者您输入的信息有误。</div><h3>Q:如何更新违章？</h3><div class=as>下拉更新违章。</div><h3>Q:如何查询教练车、摩托车、外籍车、军车等为主信息？</h3><div class=as>您好，我们暂不支持以上类型车辆违章信息，欢迎通过“”常见问题－意见反馈“告知我们，我们会光速加上。</div></div></div><div class=qa-box-item><h2 class=js-ask>其它问题</h2><div class=inner><h3>Q:乐车邦现在已经开通哪一些城市？</h3><div class=as>目前已经开通' + (null == (__t = citys.join("、")) ? "" : __t) + "，其它重点城市会相继迅速推出。</div><h3>Q:我是汽车4S店，如何与乐车邦合作？</h3><div class=as>在APP的服务网点列表上方，可进入“商家加盟”页面提交加盟合作意向，我们会尽快安排专人与您联系。</div><h3>Q:如何联系乐车邦？</h3><div class=as>客服电话：4006-300-111<br>微信公众号：xt-lcb<br>客服邮箱：service@lechebang.com</div></div></div><div style=height:70px></div></div><footer class=page-bottom><div class=footer-tel><a href=tel:4006300111><i class=iconfont>&#xe60e;</i>客服电话：4006-300-111</a></div></footer>";
			return __p
		}
	}), define("controller/help/index", ["texthelpHtml", "PageView", "geolocation"], function(t, e, i) {
		var n = e.extend({
			events: {
				"click .js-ask": "askAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "常见问题"
					},
					right: [{
						text: "意见反馈",
						callback: function() {
							app.goTo("user/feedback")
						}
					}]
				});
				var e = [];
				for (var n in i.idMapCity) {
					var a = i.idMapCity[n];
					i.hasOpen(n) && e.push(a)
				}
				var r = this.template(t, {
					citys: e
				});
				this.$el.html(r)
			},
			askAction: function(t) {
				var e = $(t.currentTarget);
				e.parent().toggleClass("expanded")
			}
		});
		return n
	}), define("textuserCarHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				if (__p += '<style>.user-car-list{padding:10px}.user-car-list li{position:relative;margin-bottom:10px;padding:10px 10px 10px 75px;background:#fff;border-radius:5px;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2);font-size:14px;color:#666}.user-car-list li .name{padding-right:30px;color:#333;font-size:15px}.user-car-list li:after{content:"";display:inline-block;vertical-align:middle;width:8px;height:8px;border-top:1px solid #999;border-right:1px solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:25px;top:50%;margin-top:-1px;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}.user-car-list .gray9{padding-top:5px;font-size:12px}.user-car-list li .car-delete{display:none}.user-car-list li.delete{border-radius:0;padding:0}.user-car-list li.delete>div{position:relative;display:block;padding:10px 10px 10px 75px;background:#fff;z-index:10}.user-car-list li.delete::after{display:none}.user-car-list li.delete .car-delete{display:block;z-index:9;position:absolute;top:50%;right:0;width:80px;height:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-radius:0;background-color:#ff826d;border:0 none;color:#fff;outline:0}#SelectCurrentCar_content li:after{content:"";display:inline-block;vertical-align:middle;width:20px;height:20px;background:url(https://img01.lechebangstatic.com/webapp/bg-global.png) no-repeat;background-size:240px auto;background-position:-115px -80px;position:absolute;right:15px;top:50%;margin-bottom:10px;border:0;-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);transform:translateY(-50%)}#SelectCurrentCar_content li.active:after{background-position:-139px -80px}.user-car-list li>div{vertical-align:middle}.user-car-list li .img{position:absolute;top:50%;left:10px;text-align:center;width:55px;font-size:12px;overflow:hidden;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.user-car-list li img{height:54px}.user-car-disabled h3{font-size:13px;padding:0 10px}.user-car-disabled ul{padding-top:0}.user-car-disabled ul div{color:#999!important}.user-car-disabled .user-car-list li:after{display:none}.user-car-none{width:80%;margin:50px auto 0;background-color:#efeff4;text-align:center;border:1px dotted #c7c7cb;border-radius:5px;padding:10px 0;color:#999;font-size:15px}.user-car-none h3{font-size:15px;font-weight:700}.user-car-none h3 i{font-size:25px;vertical-align:middle;font-weight:400}.user-car-list .img-default{width:48px;height:48px;display:inline-block;border-radius:48px;text-align:center;background-color:#f6f6f6}.user-car-list .tb-size{font-size:.28rem;color:#999;line-height:.48rem}</style><div class=page-content>', list.length) {
					__p += "<ul class=user-car-list>";
					var pos, enable = [],
						unable = [];
					_.find(list, function(t, e) {
						return pos = e, 1 == t.isDefault
					});
					var first = list.splice(pos, 1);
					list.unshift(first[0]), _.each(list, function(t) {
						t.brandTypeId ? t.isCanUse ? enable.push(t) : unable.push(t) : enable.push(t)
					}), __p += "\n\n  ", _.each(enable, function(t) {
						__p += '<li class=js-edit data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class="js-edit-inner inner"><div class=img>', t.imgUrl ? (__p += '<img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt>', t.isDefault && (__p += "<div class=gray9>默认车辆</div>")) : __p += '<div class=img-default><i class="iconfont tb-size">&#xe653;</i></div>', __p += "</div><div class=c><div class=name>", __p += t.brandTypeId ? "\n          " + (null == (__t = t.carTypeName) ? "" : __t) + "\n          " + (null == (__t = t.yearType) ? "" : __t) + "\n          " + (null == (__t = t.name) ? "" : __t) + "\n          " : "\n            车型待补充\n          ", __p += "</div><p>", print(t.carNumber ? t.carNumber : "车牌号待补充"), __p += "</p>", __p += t.mileage ? "<p>行驶里程 " + (null == (__t = t.mileage) ? "" : __t) + "公里</p>" : "<p>行驶里程待补充</p>", __p += "</div></div><button class=car-delete>删除</button></li>"
					}), __p += "</ul>", unable.length && (__p += "<div class=user-car-disabled><h3>当前城市暂不支持下列车型的保养：</h3><ul class=user-car-list>", _.each(unable, function(t) {
						__p += '<li class=js-edit data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class=inner><div class=img><img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt>', t.isDefault && (__p += "<div class=gray9>默认车辆</div>"), __p += "</div><div class=c><div class=name>" + (null == (__t = t.carTypeName) ? "" : __t) + "\n              " + (null == (__t = t.yearType) ? "" : __t) + "\n              " + (null == (__t = t.name) ? "" : __t) + "</div><p>", print(t.carNumber ? t.carNumber : "车牌号待补充"), __p += "</p>", t.mileage && (__p += "<p>行驶里程 " + (null == (__t = t.mileage) ? "" : __t) + "公里</p>"), __p += "</div></div><button class=car-delete>删除</button></li>"
					}), __p += "</ul></div>")
				} else __p += '<div class="user-car-none js-add"><h3><i class=iconfont>&#xe601;</i>&nbsp;添加车</h3><p>还没有添加您的爱车</p></div>';
				__p += "</div>"
			}
			return __p
		}
	}), define("controller/user/car", ["textuserCarHtml", "Swipe", "prefix", "session", "local", "PageView", "carModel"], function(t, e, i, n, a, r, o) {
		var s = r.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-edit-inner": "carEditAction",
				"click .js-add": "addCarAction",
				"click .car-delete": "deleteAction"
			},
			onCreate: function() {
				this.header.option({
					left: {
						callback: function() {
							"user/index" === app.referrer ? app.goBack() : app.goBack("user/index")
						}
					},
					center: {
						text: "我的车"
					},
					right: [{
						text: '<i class="iconfont">&#xe62d;</i>',
						callback: function() {
							n.remove("new_car"), app.goTo("car/brand?from=add")
						}
					}]
				})
			},
			ajax: function() {
				return o.myCarList()
			},
			onShow: function(e) {
				var i = this.template(t, {
					list: e
				});
				this.$el.html(i), this.cars = e, this.swipeRemove()
			},
			swipeRemove: function() {
				var t = new e(this.$(".js-edit"), {
					start: function(t) {
						var e = this.parent.find(".delete"),
							i = $(t.currentTarget);
						e.length && e[0] !== i[0] && this.scrollTo(e.find(".inner")[0].style, 0, function() {
							e.removeClass("delete")
						}), this.target = i, this.inner = i.find(".inner")
					},
					move: function(t, e) {
						this.target.addClass("delete");
						var i = parseInt(this.inner.attr("data-x"), 10) || 0;
						e += i, e = Math.min(0, e), e = Math.max(-120, e), this.inner[0].style[this.transform] = "translateX(" + e + "px)"
					},
					end: function() {
						var t = this.target,
							e = this.inner,
							i = e[0].style[this.transform].match(/\((-?\d+)/),
							n = i ? parseInt(i[1], 10) : 0;
						n = n > -40 ? 0 : -80, n && (this.scrollTo(e[0].style, n, function() {
							0 === n && t.removeClass("delete")
						}), e.data("x", n))
					}
				});
				t.parent = t.el.parent(), t.transform = i.style("transform"), t.scrollTo = function(t, e, n) {
					var a = i.style("transitionTimingFunction"),
						r = i.style("transitionDuration"),
						o = this.transform;
					t[a] = "ease-in-out", t[i.style("transitionProperty")] = "transform", t[r] = "200ms", t[o] = "translate(" + e + "px,0)", setTimeout(function() {
						t[a] = "", t[r] = 0, 0 === e && (t[o] = ""), n && n()
					}, 200)
				}
			},
			carEditAction: function(t) {
				var e, i = $(t.currentTarget).parent().data("id");
				return _.find(this.cars, function(t) {
					return t.id == i ? (e = t, !1) : void 0
				}), e.brandTypeId ? void o.setDefaultCar(i, function() {
					a._set("car", e), n.remove("edit_car_form_info"), n.remove("queryCities"), app.goTo("car/car_edit")
				}) : (a._set("car", e), void app.goTo("/weizhang/form/info?backLength=1"))
			},
			addCarAction: function() {
				app.goTo("car/brand?from=add")
			},
			deleteAction: function(t) {
				var e = $(t.currentTarget).parent(),
					i = e.data("id");
				o.delMyCar(i, function() {
					app.hint("车辆删除成功"), e.remove()
				})
			}
		});
		return s
	}), define("textcarEditHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.page-content{padding-bottom:80px}.car-info-edit{background:#fff;text-align:center;border-style:solid;border:none;box-shadow:1px 1px 0 #dcdce1;padding:10px}.edit-bom{padding:10px;font-size:13px;background:rgba(255,255,255,0.9);text-align:center;max-height:99px}.btn-primary.full-width,.btn-gray.full-width{display:block;margin-top:0}.new{color:#666;margin-top:0.08rem}.m-form-item{background:#fff;padding:0 .15rem;border-bottom:1px solid #f6f6f6;font-size:.15rem}.m-form-right{float:right;height:.57rem;line-height:.57rem}.prefix-carnumber{display:inline-block;width:.5rem}.m-form-input{width:.8rem;height:100%;background:transparent;border:none;box-shadow:none;color:#666;font-size:.15rem;text-align:right;display:inline-block}.m-form-text{display:block;height:.57rem;line-height:.57rem}.select-citys{overflow-y:scroll;white-space:nowrap;max-width:60%;margin-right:5px}.js-city-select::after{content:"";display:inline-block;width:8px;height:8px;border-top:1px solid #999;border-right:1px solid #999;position:absolute;right:.12rem;top:50%;margin-top:-2px;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%)}.select-citys::-webkit-scrollBar{display:none}.select-citys::scrollBar{display:none}.m-form-item.tr-first{border-top-left-radius:5px;border-top-right-radius:5px}.m-form-item.tr-last{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.m-form-item.form-radius{border-radius:5px}.icon-arrow3{display:inline-block;width:.08rem;height:.08rem;border-top:1px solid #999;border-right:1px solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.page-wrap{background:#fff;border-radius:5px;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.6)}.car-info .brand img{height:55px}.engine-info{text-align:center;display:inline-block;height:100%;top:50%;transform:tranlateY(-50%);-webkit-transform:translateY(-50%);position:absolute;height:2.4rem;width:100%}</style><div class=page-content><div class="car-info-edit js-select" style=padding-top:0.2rem;padding-bottom:0.2rem><div class=car-info><div class=brand><img src="' + (null == (__t = editCarInfo.imgUrl) ? "" : __t) + '" alt=默认车辆></div><div class=info style=font-size:0.15rem;padding-left:5px>' + (null == (__t = editCarInfo.carTypeName) ? "" : __t) + "&nbsp;\n          " + (null == (__t = editCarInfo.yearType) ? "" : __t) + "&nbsp;\n          " + (null == (__t = editCarInfo.name) ? "" : __t) + '&nbsp;</div></div></div><div class=plr10 style=margin-top:0.1rem><div class=page-wrap><div class="form-item form-item--arrow-btn form-block js-buy-time"><label class=field-label>购车时间</label><div class="field-text-wrap  tr js-input-buyTime" style=padding-right:0>' + (null == (__t = editCarInfo.carBuyTime.text) ? "" : __t) + '</div><i class=icon-arrow></i></div><div class="m-form-item tr-last"><div class=m-form-right><input type=text placeholder=请输入公里数 class="m-form-input js-input-number js-input-mileage" style=width:1rem value="' + (null == (__t = editCarInfo.carMileage) ? "" : __t) + '" data-type=kilometer>&nbsp;公里</div><label class=m-form-text>行驶里程</label></div></div><p style=clear:both;margin-left:0.1rem class=new>选填我的车与乐车邦一起查违章</p><div class="page-wrap weizhang-form"><div class="m-form-item tr-first js-city-select" style=margin-top:.05rem;position:relative><div class="m-form-right select-citys">', _.each(editCarInfo.queryCities, function(t) {
				__p += "<span>" + (null == (__t = t.name) ? "" : __t) + "</span>&nbsp;\n          "
			}), __p += '</div><label class=m-form-text>查询城市（多选）</label></div><div class="m-form-item "><div class=m-form-right><div class="prefix-carnumber js-carnumber"><i class=iconfont style=font-size:.24rem;color:#666;position:relative;top:1px>&#xe646;</i>&nbsp;<span class=js-carnumber-txt>' + (null == (__t = editCarInfo.carNumberPrefix) ? "" : __t) + '</span></div><input type=text placeholder=输入车牌号 class="m-form-input js-input-number js-car-number" style=width:.8rem value="' + (null == (__t = editCarInfo.carNumber) ? "" : __t) + '" data-type=carNumber></div><label class=m-form-text>车牌号码</label></div></div></div></div><footer class=page-bottom><div class=edit-bom><a href=javascript:void(0); class="btn-primary full-width js-service" data-ajax>保存</a></div></footer>';
			return __p
		}
	}), define("controller/car/car_edit", ["PageView", "textcarEditHtml", "UICarNumber", "UIScrollList", "dateUtil", "carValidate", "local", "session", "UIScreen", "geolocation", "validate"], function(t, e, i, n, a, r, o, s, l, c, d) {
		var p = t.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? o._get("car") ? void 0 : "user/car" : "login"
				}
			},
			events: {
				"click .js-carnumber": "carNumberAction",
				"click .js-buy-time": "timeSetAction",
				"click .js-service": "saveAction",
				"click .js-city-select": "citySelectAction",
				"click .js-engine-info": "engineInfoAction",
				"blur .js-input-number": "blurNumberAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "编辑我的车"
					},
					right: [{
						text: "保养手册",
						callback: function() {
							app.goTo("car/maintenanceManual")
						}
					}]
				}), this.myEditCar = o._get("car"), this.myEditCarInfos = s.get("edit_car_form_info"), this.position = this.getPostions()
			},
			ajax: function() {
				var t = {
					url: "/violation/getQueryParams",
					data: {
						placeIds: []
					}
				};
				if (this.position && this.position.length) {
					for (var e = 0, i = this.position.length; i > e; e++) t.data.placeIds.push(this.position[e].placeId);
					return t
				}
			},
			onShow: function(t) {
				var n = {};
				t && (n.engineNumber = t.engineNumber, n.gabPwd = t.gabPwd, n.idNumber = t.idNumber, n.ownerName = t.ownerName, n.registerNumber = t.registerNumber, n.taizhouUname = t.taizhouUname, n.taizhouPwd = t.taizhouPwd, n.vin = t.vin), this.carParams = n, $.extend(this.myEditCar, {
					carBuyTime: this.myEditCarInfos && this.myEditCarInfos.carBuyTime || {
						text: this.myEditCar.buyDateStr.replace(/(\d{4})-(\d{2})-\d{2}/, "$1年$2月"),
						value: this.myEditCar.buyDateStr
					},
					carMileage: this.myEditCarInfos && this.myEditCarInfos.carMileage || this.myEditCar.mileage,
					carNumberPrefix: this.myEditCarInfos && this.myEditCarInfos.carNumberPrefix || this.myEditCar.carNumber && this.myEditCar.carNumber.substr(0, 1) || i.getDefaultNumber(),
					carNumber: this.myEditCarInfos && this.myEditCarInfos.carNumber || this.myEditCar.carNumber && this.myEditCar.carNumber.substr(1),
					queryCities: this.position
				});
				var a = this.template(e, {
					editCarInfo: this.myEditCar
				});
				this.$el.html(a);
				var r = "",
					o = '<div class="m-form-item tr-last"> <div class="m-form-right"> <input type="text" placeholder="<%=placeholder%>" class="m-form-input js-input-number" style="width:1.5rem;" value="<%=value%>" data-type="<%=dataType%>"></div> <label class="m-form-text <%=jsRemark%>"><%=placeName%>&nbsp;<%if(jsRemark){%><i class="iconfont" style="color:#07cdd0;">&#xe60f;</i><%}%></label></div>',
					s = {
						placeholder: "",
						value: "",
						dataType: "",
						jsRemark: "",
						placeName: ""
					};
				for (var l in n) switch (l) {
					case "engineNumber":
						var c = n.engineNumber;
						null != c && (s.placeholder = c > 0 ? "请输入发动机前" + c + "位" : 0 > c ? "请输入发动机后" + Math.abs(c) + "位" : "输入发动机号", s.dataType = "engineNumber", s.jsRemark = "js-engine-info", s.placeName = "发动机号", s.value = this.myEditCarInfos && this.myEditCarInfos.engineNumber ? this.myEditCarInfos.engineNumber : this.myEditCar.engineNumber, r += this.template(o, s));
						break;
					case "gabPwd":
						null != n.gabPwd && (s.placeholder = "请输入管理平台密码", s.dataType = "gabPwd", s.jsRemark = "", s.placeName = "公安部交通管理平台密码", s.value = this.myEditCarInfos && this.myEditCarInfos.gabPwd ? this.myEditCarInfos.gabPwd : this.myEditCar.gabPwd, r += this.template(o, s));
						break;
					case "idNumber":
						null != n.idNumber && (s.placeholder = "请输入车主身份证号", s.dataType = "idNumber", s.jsRemark = "", s.placeName = "身份证号", s.value = this.myEditCarInfos && this.myEditCarInfos.idNumber ? this.myEditCarInfos.idNumber : this.myEditCar.idNumber, r += this.template(o, s));
						break;
					case "vin":
						var d = n.vin;
						null != d && (s.placeholder = d > 0 ? "请输入车架号前" + d + "位" : 0 > d ? "请输入车架号后" + Math.abs(d) + "位" : "请输入车架号", s.dataType = "vin", s.placeName = "车架号", s.jsRemark = "js-engine-info", s.value = this.myEditCarInfos && this.myEditCarInfos.vin ? this.myEditCarInfos.vin : this.myEditCar.vin, r += this.template(o, s));
						break;
					case "ownerName":
						null != n.ownerName && (s.placeholder = "请输入车主姓名", s.dataType = "ownerName", s.placeName = "车主姓名", s.jsRemark = "", s.value = this.myEditCarInfos && this.myEditCarInfos.ownerName ? this.myEditCarInfos.ownerName : this.myEditCar.ownerName, r += this.template(o, s));
						break;
					case "registerNumber":
						null != n.registerNumber && (s.placeholder = "请输入登记证书编号", s.dataType = "registerNumber", s.placeName = "登记证书编号", s.jsRemark = "", s.value = this.myEditCarInfos && this.myEditCarInfos.registerNumber ? this.myEditCarInfos.registerNumber : this.myEditCar.registerNumber, r += this.template(o, s));
						break;
					case "taizhouUname":
						null != n.taizhouUname && (s.placeholder = "请输入泰州交管局账号", s.dataType = "taizhouUname", s.placeName = "泰州交管局账号", s.jsRemark = "", s.value = this.myEditCarInfos && this.myEditCarInfos.taizhouUname ? this.myEditCarInfos.taizhouUname : this.myEditCar.taizhouUname, r += this.template(o, s));
						break;
					case "taizhouPwd":
						null != n.taizhouPwd && (s.placeholder = "请输入泰州交管局密码", s.dataType = "taizhouPwd", s.placeName = "泰州交管局密码", s.jsRemark = "", s.value = this.myEditCarInfos && this.myEditCarInfos.taizhouPwd ? this.myEditCarInfos.taizhouPwd : this.myEditCar.taizhouPwd, r += this.template(o, s))
				}
				this.$(".weizhang-form").append(r)
			},
			getPostions: function() {
				var t = s.get("queryCities"),
					e = o._get("car");
				if (!t)
					if (t = [], e.queryCities)
						for (var i = 0, n = e.queryCities.length; n > i; i++) t.push({
							placeId: e.queryCities[i].placeId,
							name: this.myEditCar.queryCities[i].name
						});
					else {
						var a = c.getPostion();
						a && a.cityId && (t = [{
							placeId: a.cityId,
							name: a.addressComponent.city
						}])
					}
				return t
			},
			carNumberAction: function() {
				var t = this,
					e = new i({
						appendElement: document.body,
						data: {
							active: t.$(".js-carnumber-txt").html().trim()
						},
						itemCallback: function(e) {
							t.$(".js-carnumber-txt").html(e), t.sessionEditAction("edit_car_form_info", {
								carNumberPrefix: e
							}), this.hide()
						}
					});
				e.show()
			},
			timeSetAction: function() {
				for (var t = this, e = [], i = [], r = this.$(".js-input-buyTime").html().trim(), o = 1990; o <= a.getCurrentYear(); o++) e.push(o);
				for (var o = 1; 12 >= o; o++) i.push(a.parseNumber(o));
				r = r ? r.split(/[^\d]/) : this.myEditCar.yearType ? [parseInt(this.myEditCar.yearType, 10), "01"] : ["2010", "01"], this.timeScroll ? this.timeScroll.show() : this.timeScroll = new n({
					title: "购车时间",
					group: [e, i],
					selected: r,
					appendElement: t.$el,
					done: function(e) {
						this.hide();
						var i = e[0] + "年" + e[1] + "月";
						t.$(".js-buy-time .field-text-wrap").html(i), t.sessionEditAction("edit_car_form_info", {
							carBuyTime: {
								text: i,
								value: e[0] + "-" + e[1] + "-01"
							}
						})
					}
				})
			},
			saveAction: function() {
				var t, e, i = (this.$(".js-input-mileage").val() || "").trim(),
					n = (this.$(".js-carnumber-txt").html() + this.$(".js-car-number").val() || "").trim(),
					a = this.getPostions(),
					o = s.get("edit_car_form_info"),
					l = {
						brandTypeId: this.myEditCar.brandTypeId,
						carType: this.myEditCar.carType,
						isMerger: 1,
						id: this.myEditCar.id
					};
				if (e = o && o.carBuyTime ? o.carBuyTime.value : null || this.myEditCar.buyDateStr, t = r.buyDate(e, !0)) return void app.alert(t);
				if (l.buyDate = e, t = r.mileage(i)) return void app.alert(t);
				if (l.mileage = i, n && (n = d.carNumber(n), t = d.isCarNumber(n, !0) ? "" : "车牌号输入格式不对")) return void app.alert(t);
				if (l.carNumber = n, a && a.length) {
					l.placeIds = [];
					for (var c = 0, p = a.length; p > c; c++) l.placeIds.push(a[c].placeId)
				}
				if (null != this.carParams.engineNumber) {
					var u = this.$("input[data-Type='engineNumber']").val();
					if (!u) return void app.alert("请输入发动机号");
					if (u = d.toUpperCase(u.trim()), !d.isEngineNumber(u)) return void app.alert("请输入正确的发动机号");
					l.engineNumber = u
				}
				if (null != this.carParams.gabPwd) {
					var u = this.$("input[data-Type='gabPwd']").val();
					if (!u) return void app.alert("请输入公安部交通管理平台密码");
					u = u.trim(), l.gabPwd = u
				}
				if (null != this.carParams.idNumber) {
					var u = this.$("input[data-Type='idNumber']").val();
					if (!u) return void app.alert("请输入车主身份证号");
					if (u = u.trim(), !d.isIdCard(u)) return void app.alert("请输入正确的身份证号");
					l.idNumber = u
				}
				if (null != this.carParams.vin) {
					var u = this.$("input[data-Type='vin']").val();
					if (!u) return void app.alert("请输入车架号");
					if (u = u.trim(), !/^[a-zA-Z0-9]+$/.test(u)) return void app.alert("请输入正确的车架号");
					l.vin = u
				}
				if (null != this.carParams.ownerName) {
					var u = this.$("input[data-Type='ownerName']").val();
					if (!u) return void app.alert("请输入车主姓名");
					if (u = u.trim(), !/^[\u4E00-\u9FA5a-zA-Z0-9]{2,32}$/.test(u)) return void app.alert("请输入正确的车主姓名");
					l.ownerName = u
				}
				if (null != this.carParams.registerNumber) {
					var u = this.$("input[data-Type='registerNumber']").val();
					if (!u) return void app.alert("请输入登记证书编号");
					if (u = u.trim(), !/^[a-zA-Z0-9]+$/.test(u)) return void app.alert("请输入正确的登记证书编号");
					l.registerNumber = u
				}
				if (null != this.carParams.taizhouUname) {
					var u = this.$("input[data-Type='taizhouUname']").val();
					if (!u) return void app.alert("请输入泰州交管局注册账号");
					u = u.trim(), l.taizhouUname = u
				}
				if (null != this.carParams.taizhouPwd) {
					var u = this.$("input[data-Type='taizhouPwd']").val();
					if (!u) return void app.alert("请输入泰州交管局密码");
					u = u.trim(), l.taizhouPwd = u
				}
				app.ajax({
					url: "mycar/saveMyCar",
					data: l,
					success: function() {
						app.goBack.noCache()
					}
				})
			},
			citySelectAction: function() {
				for (var t = "/weizhang/city/select", e = {
					from: config.baseUrl,
					cityid: "",
					cityname: ""
				}, i = 0, n = this.position.length; n > i; i++) e.cityid += this.position[i].placeId + ",", e.cityname += this.position[i].name + ",";
				e.cityid = e.cityid.slice(0, -1), e.cityname = e.cityname.slice(0, -1), t = t + "?" + $.param(e), t && app.goTo(t)
			},
			blurNumberAction: function(t) {
				var e = this.$(t.currentTarget),
					i = e.val(),
					n = e.data("type");
				switch (n) {
					case "kilometer":
						r.mileage(i) || this.sessionEditAction("edit_car_form_info", {
							carMileage: i
						});
						break;
					case "carNumber":
						d.isCarNumber(this.$(".js-carnumber-txt").html().trim() + i, !0) && this.sessionEditAction("edit_car_form_info", {
							carNumber: i
						});
						break;
					case "engineNumber":
						i && (i = d.toUpperCase(i), d.isEngineNumber(i) && this.sessionEditAction("edit_car_form_info", {
							engineNumber: i
						}));
						break;
					case "gabPwd":
						i && this.sessionEditAction("edit_car_form_info", {
							gabPwd: i
						});
						break;
					case "idNumber":
						i && d.isIdCard(i) && this.sessionEditAction("edit_car_form_info", {
							idNumber: i
						});
						break;
					case "vin":
						i && /^[a-zA-Z0-9]+$/.test(i) && this.sessionEditAction("edit_car_form_info", {
							vin: i
						});
						break;
					case "ownerName":
						i && /^[\u4E00-\u9FA5a-zA-Z0-9]{2,37}$/.test(i) && this.sessionEditAction("edit_car_form_info", {
							ownerName: i
						});
						break;
					case "registerNumber":
						i && /[^a-zA-Z0-9]+$/.test(i) && this.sessionEditAction("edit_car_form_info", {
							registerNumber: i
						});
						break;
					case "taizhouUname":
						i && this.sessionEditAction("edit_car_form_info", {
							taizhouUname: i
						});
						break;
					case "taizhouPwd":
						i && this.sessionEditAction("edit_car_form_info", {
							taizhouPwd: i
						})
				}
			},
			engineInfoAction: function() {
				var t = new l({
					appendElement: document.body,
					msg: '<img class="engine-info" src=' + config.imgCdnRoot + 'user/vin_info_1.gif alt="驾驶证信息">'
				});
				t.show()
			},
			_sessionEditAction: function(t, e) {
				var i = s._get(t) || {};
				$.extend(!0, i, e), s._set(t, i)
			},
			sessionEditAction: function(t, e) {
				var i = s.get(t) || {};
				$.extend(!0, i, e), s.set(t, i)
			}
		});
		return p
	}), define("textuserMaintenanceHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				__p += "<style>.timeline{margin:10px 5px 0;background-color:#fff}.timeline li{position:relative;padding-left:80px;border-radius:5px;font-size:15px;overflow:hidden;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2);-webkit-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.timeline li h5{font-size:15px;font-weight:400}.timeline li .l{float:left;width:70px;margin-left:-80px;padding:10px 0 5px 10px;overflow:hidden;font-size:12px}.timeline li .r{border-left:3px solid #f6f6f6;padding:10px}.timeline li b{position:absolute;top:10px;left:72px;width:20px;height:20px;color:#07babd;background-color:#fff;text-align:center;border-radius:50%;font-weight:700}.timeline li.current{border-bottom:0;border:5px 5px 0 0}.timeline li.current+li{border:0 0 5px 5px}.timeline li.current+li b{color:#ff6a51}.timeline li.current+li .l{color:#ff6a51}.timeline li.current+li .r{color:#666;font-size:14px}.timeline li:first-child b::after{content:'';position:absolute;top:-10px;left:4px;width:10px;height:10px;background-color:#fff}.timeline .pub-price{font-size:18px}.timeline li:last-of-type{border-bottom:0}.timeline li:last-of-type .r{border-left-color:#fff}.timeline li:last-of-type b::after{content:'';position:absolute;top:-10px;left:8px;width:3px;height:10px;background-color:#f6f6f6}.timeline .timeline-list .timeline-edit{text-align:right}.timeline .timeline-list .timeline-edit a{color:#ff826d;font-size:13px}.timeline .timeline-list a{color:#ff826d}.timeline-bom{box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;font-size:15px;color:#333;background-color:rgba(230,230,230,0.95)}.timeline-bom .pub-price-normal{font-size:15px;color:#999;white-space:nowrap}.timeline-bom .pub-price{white-space:nowrap}.user-car-none{position:absolute;width:80%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:4;background-color:#efeff4;text-align:center;border:1px dotted #c7c7cb;border-radius:5px;padding:10px 0;color:#999;font-size:15px}.user-car-none h3{font-size:15px;font-weight:700}.user-car-none h3 i{font-size:25px;vertical-align:middle;font-weight:400}</style><div class=page-content><div class=\"car-info-box", isEdit || (__p += " pub-arrow js-select"), __p += '"><div class=car-info><div class=brand><img src="' + (null == (__t = car.imgUrl) ? "" : __t) + '" alt></div><div class=info>' + (null == (__t = car.carTypeName) ? "" : __t) + "\n          " + (null == (__t = car.yearType) ? "" : __t) + "\n          " + (null == (__t = car.name) ? "" : __t) + "<p>", print(car.carNumber ? car.carNumber : '<span style="color: #888;">车牌号待补充</span>'), __p += "</p>", __p += isEdit ? "<p class=js-edit>实际里程 " + (null == (__t = car.mileage) ? "" : __t) + "公里<a href=javascript:void(0); class=edit2>编辑</a></p>" : "<p>实际里程 " + (null == (__t = car.mileage) ? "" : __t) + "公里</p>", __p += "</div></div></div><div class=timeline><ul class=timeline-list><li><b class=iconfont>&#xe603;</b><div class=l>" + (null == (__t = app.dateFormat(car.buyDate, "yyyy年m月")) ? "" : __t) + "</div><div class=r>您的爱车到达您的手中</div></li>";
				var historySaved = 0,
					historyCount = 0;
				__p += "\n    ", maintenance.histories && (__p += "\n    ", _.each(maintenance.histories, function(t) {
					t.ordered && (historySaved += t.price - t.lcbPrice, historyCount++), __p += "<li><b class=iconfont>&#xe603;</b><div class=l>" + (null == (__t = t.mileage) ? "" : __t) + 'km</div><div class="r js-edittrack" data-id="' + (null == (__t = t.historyId) ? "" : __t) + '">', print(t.itemsName.join("、")), __p += "<br>", t.ordered ? (__p += "<del class=pub-price-normal><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.price)) ? "" : __t) + "</del>乐享价<span class=pub-price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.lcbPrice)) ? "" : __t) + "</span><br>省<span class=pub-price-normal><dfn>&yen;</dfn>", print(templateApi.price(t.price - t.lcbPrice)), __p += "</span><div class=timeline-edit><a href=javascript:void(0);>保养完成</a></div>") : __p += "\n      花费" + (null == (__t = templateApi.price(t.price)) ? "" : __t) + "<div class=timeline-edit><a href=javascript:void(0);>编辑 &gt;</a></div>", __p += "</div></li>"
				}), __p += "\n    "), __p += "\n    ";
				var totalSavedPrice = 0;
				__p += "\n    ", _.each(maintenance.mileages, function(t) {
					totalSavedPrice += t.price - t.lcbPrice, __p += "<li><b class=iconfont>&#xe603;</b><div class=l>" + (null == (__t = t.mileage) ? "" : __t) + 'km</div><div class="r', validateOrder && print(" js-maintenance"), __p += '" data-mileage="' + (null == (__t = t.mileage) ? "" : __t) + '">', print(t.itemsName.join("、")), __p += "<br>", validateOrder && (__p += "<del class=pub-price-normal><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.price)) ? "" : __t) + "</del>", promotion.items && promotion.items[t.planId] ? (__p += "\n          抢购价<span class=pub-price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(promotion.items[t.planId].amount)) ? "" : __t) + "</span><br>省<span class=pub-price-normal><dfn>&yen;</dfn>", print(templateApi.price(t.price - promotion.items[t.planId].amount)), __p += "</span>") : (__p += "\n        乐享价<span class=pub-price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.lcbPrice)) ? "" : __t) + "</span><br>省<span class=pub-price-normal><dfn>&yen;</dfn>", print(templateApi.price(t.price - t.lcbPrice)), __p += "</span>"), __p += "<div class=timeline-edit><a href=javascript:void(0);>去保养 &gt;</a></div>"), __p += "</div></li>"
				}), __p += "</ul></div><div style=height:68px></div></div><div class=page-bottom><div class=timeline-bom>", validateOrder && (__p += "\n", historySaved && (__p += "<p>你的爱车在乐车邦已做" + (null == (__t = historyCount) ? "" : __t) + "次保养,成功节省<span class=pub-price><dfn>¥</dfn>" + (null == (__t = templateApi.price(historySaved)) ? "" : __t) + "</span>元</p>"), __p += "\n  \n未来" + (null == (__t = maintenance.mileages.length) ? "" : __t) + "次保养还将为您至少节省<span class=pub-price><dfn>¥</dfn>" + (null == (__t = templateApi.price(totalSavedPrice)) ? "" : __t) + "</span>元</div>"), __p += "</div>"
			}
			return __p
		}
	}), define("promotionInfo", ["dateUtil", "geolocation", "session"], function(dateUtil, geolocation, session) {
		var promotionInfo = {
			cityId: geolocation.getPostion().cityId,
			activityInfo: null,
			activityId: null,
			preheatTime: null,
			promotionStartTime: null,
			promotionEndTime: null,
			promotionLastTime: null,
			activityTime: null,
			activityEndTime: null,
			activityEndTime_831: null,
			getActivityInfo: function() {
				var self = this;
				null === this.activityInfo ? session.get("activity_time") || app.ajax({
					url: "activity/getActivityByPlaceId",
					async: !1,
					data: {
						placeId: this.cityId,
						appCode: config.appCode
					},
					success: function(data) {
						session.set("activity_time", 1, "3S"), data ? (self.activityInfo = data, "object" != typeof data.rule && (self.activityInfo.rule = eval("(" + data.rule + ")")), self.setActivityInfo()) : (self.activityId = null, self.preheatTime = null, self.activityTime = null, self.activityEndTime = null, self.promotionLastTime = null, self.activityInfo = null)
					}
				}) : this.setActivityInfo()
			},
			setActivityInfo: function() {
				null !== this.activityInfo && (this.activityId = this.activityInfo ? this.activityInfo.id : null, this.preheatTime = this.activityInfo && this.activityInfo.rule.time.preheatTime ? this.getSecond(this.activityInfo.rule.time.preheatTime) : null, this.activityTime = this.promotionStartTime = this.activityInfo && this.activityInfo.rule.time.promotionStartTime ? this.getSecond(this.activityInfo.rule.time.promotionStartTime) : null, this.activityEndTime = this.promotionEndTime = this.activityInfo && this.activityInfo.rule.time.promotionEndTime ? this.getSecond(this.activityInfo.rule.time.promotionEndTime) : null, this.activityEndTime_831 = this.promotionLastTime = this.activityInfo && this.activityInfo.rule.time.promotionLastTime ? this.getSecond(this.activityInfo.rule.time.promotionLastTime) : null)
			},
			getSecond: function(t) {
				if (!t) return "";
				var e = t.split(" "),
					i = e[1].split(":"),
					n = dateUtil.getActivityTime(e[0], i[0], i[1], i[2]);
				return n
			},
			isPreheatStart: function() {
				var t = dateUtil.now(),
					e = !1;
				return null === this.activityInfo && this.getActivityInfo(), null === this.preheatTime ? e : (t > this.preheatTime && t < this.promotionStartTime && (e = !0), e)
			},
			isPromotion: function() {
				var t = dateUtil.now(),
					e = !1;
				return null === this.activityInfo && this.getActivityInfo(), null === this.promotionStartTime || null === this.promotionEndTime ? e : (t > this.promotionStartTime && t < this.promotionEndTime && (e = !0), e)
			},
			isPromotionLast: function() {
				var t = dateUtil.now(),
					e = !1;
				return null === this.activityInfo && this.getActivityInfo(), null === this.promotionLastTime || null === this.promotionStartTime ? e : (t > this.promotionStartTime && t < this.promotionLastTime && (e = !0), e)
			},
			isPromotionEndLast: function() {
				var t = dateUtil.now(),
					e = !1;
				return null === this.activityInfo && this.getActivityInfo(), null === this.promotionLastTime || null === this.promotionEndTime ? e : (t > this.promotionEndTime && t < this.promotionLastTime && (e = !0), e)
			}
		};
		return geolocation.on("change", function() {
			promotionInfo.cityId = geolocation.getPostion().cityId, promotionInfo.activityInfo = null, session.remove("activity_time")
		}), promotionInfo
	}), define("controller/user/maintenance", ["textuserMaintenanceHtml", "PageView", "local", "session", "user", "promotionInfo", "UIShare", "geolocation", "carModel"], function(t, e, i, n, a, r, o, s, l) {
		var c, d = e.extend({
			options: {
				redirectCtrl: function() {
					return c = i._get("car"), c ? void 0 : "user/index"
				}
			},
			events: {
				"click .js-maintenance": "maintenanceAction",
				"click .js-select": "selectAction",
				"click .js-edit": "editAction",
				"click .js-edittrack": "edittrackAction",
				"click .js-tip": "closeTipAction"
			},
			onCreate: function() {
				var t = this,
					e = {
						center: {
							text: "保养轨迹"
						},
						right: []
					};
				app.nativeApi.checkShare() && e.right.push({
					text: '<i class="iconfont">&#xe629;</i>',
					callback: function() {
						t.share || (t.share = new o({
							appendElement: document.body,
							businessparams: {
								businesstype: 2,
								showtitle: "你的好友邀你免费查车况！达到人车合一最高境界！",
								showcontent: "一键查车况，2折做保养，4S店超体验。"
							}
						})), t.share.show()
					}
				}), a.isLogin && e.right.unshift({
					text: '<i class="iconfont">&#xe62d;</i>',
					callback: function() {
						var e = $.param({
							brandTypeId: t.car.brandTypeId,
							id: t.car.id
						});
						app.goTo("user/addtrack?" + e)
					}
				}), this.header.option(e), this.car = c, this.cityId = s.getPostion().cityId
			},
			ajax: function() {
				var t;
				if (!a.isLogin) {
					t = {
						url: "mileage/getMaintenanceHistory",
						data: {
							brandId: this.car.brandTypeId,
							mileage: this.car.mileage,
							cityId: this.cityId
						},
						session: !0
					};
					var e = l.validateOrder(c.brandTypeId);
					return [t, e]
				}
				return t = {
					url: "mileage/getMaintenanceHistory",
					data: {
						carId: this.car.id,
						cityId: this.cityId
					}
				}
			},
			onShow: function(e, i) {
				var n = this,
					a = [];
				_.each(e.mileages, function(t) {
					a.push(t.planId)
				}), "undefined" == typeof i && (i = this.car.isCanUse), app.ajax({
					url: "promotion/match",
					data: {
						orderType: 1,
						placeId: this.cityId,
						planIds: a
					},
					success: function(a) {
						var o = n.template(t, {
							isEdit: -1 != ["user/car", "user/caredit"].indexOf(app.referrer),
							car: n.car,
							maintenance: e,
							promotion: a,
							validateOrder: i,
							is716: r.isPromotion()
						});
						n.$el.html(o)
					}
				}), this.maintenance = e
			},
			maintenanceAction: function(t) {
				var e = $(t.currentTarget).attr("data-mileage");
				this.car.mileage = e, i._set("car", this.car), a.isLogin ? l.updateMyCar({
					id: this.car.id,
					mileage: e
				}, function() {
					app.goTo("car/maintenance")
				}) : app.goTo("car/maintenance")
			},
			editAction: function(t) {
				t.preventDefault(), app.goTo("user/caredit")
			},
			selectAction: function() {
				a.isLogin ? app.goTo("car/select") : (n.remove("new_car"), app.goTo("car/brand?from=track"))
			},
			edittrackAction: function(t) {
				var e = $(t.currentTarget).attr("data-id"),
					i = (_.find(this.maintenance.histories, function(t) {
						return t.historyId == e
					}), $.param({
						brandTypeId: this.car.brandTypeId,
						id: this.car.id,
						historyId: e
					}));
				app.goTo("user/addtrack?" + i)
			},
			closeTipAction: function(t) {
				$(t.currentTarget).hide()
			}
		});
		return d
	}), define("textuserAddtrackHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "<style>.distance-unit:after{content:'公里';top:6px;position:absolute;right:15px}.pay-unit:after{content:'元';top:6px;position:absolute;right:15px}</style><div class=p10><div class=\"form-item form-item--arrow-btn form-block js-maintime\"><label class=field-label>保养日期</label><div class=field-text-wrap><div class=\"field-text-wrap tr js-maintime-value\">", item.maintenanceTime && print(app.dateFormat(item.maintenanceTime, "yyyy年mm月")), __p += '</div></div><i class=icon-arrow></i></div><div class="form-item  form-item--arrow-btn form-block  distance-unit"><label class=field-label>行驶里程</label><div class="field-text-wrap "><input type=tel class="field-text tr js-mileage" value="' + (null == (__t = item.actualMileage) ? "" : __t) + '" placeholder=请输入保养时的里程></div></div><div class="form-item  form-item--arrow-btn form-block pay-unit"><label class=field-label>保养金额</label><div class=field-text-wrap><input type=number class="field-text tr js-amount" value="' + (null == (__t = templateApi.price(item.selfMaintenanceAmount)) ? "" : __t) + '" placeholder=请输入此次保养金额></div></div><div class="form-item  form-item--arrow-btn form-block expanded"><label class=field-label>保养项目</label></div><div class=timeline-checkbox-box><ul class=pub-checkbox-list>', _.each(items, function(t) {
				var e = item.extraItemIds ? -1 != item.extraItemIds.indexOf(t.itemId) : !1;
				__p += '<li class=js-item data-id="' + (null == (__t = t.itemId) ? "" : __t) + '"><i class="icon-checkbox', e && print(" active"), __p += '"></i>' + (null == (__t = t.itemName) ? "" : __t) + "</li>"
			}), __p += '</ul></div><div class=js-project></div><a href=javascript:void(0); class="btn-primary full-width js-save">保存</a>', item.id && (__p += '<a href=javascript:void(0); class="btn-white full-width js-delete">删除</a>'), __p += "</div>";
			return __p
		}
	}), define("controller/user/addtrack", ["textuserAddtrackHtml", "PageView", "dateUtil", "UIScrollList", "session"], function(t, e, i, n) {
		var a = e.extend({
			events: {
				"click .js-maintime": "showMaintimeAction",
				"click .js-item": "itemAction",
				"click .js-save": "saveMainAction",
				"click .js-delete": "deleteAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "添加保养轨迹"
					}
				})
			},
			ajax: function() {
				var t = {
					url: "plan/getMaintenanceItems",
					session: !0,
					data: {
						brandId: this.query.brandTypeId
					}
				};
				if (this.query.historyId) {
					var e = {
						url: "mtnorder/queryMaintenanceHistory",
						data: {
							id: this.query.historyId
						}
					};
					return [t, e]
				}
				return t
			},
			onShow: function(e, i) {
				var n = {
						items: e.items,
						item: i ? i.list[0] : {}
					},
					a = this.template(t, n);
				this.$el.html(a), this.$(".js-mileage").on("blur", _.bind(this.getMain, this)), this.model = n, i && this.getMain()
			},
			showMaintimeAction: function() {
				if (this.scrollList) this.scrollList.show();
				else {
					var t, e = [],
						a = [],
						r = this;
					if (this.model.item) {
						var o = app.dateFormat(this.model.item.maintenanceTime, "yyyy-mm");
						t = o.split("-")
					} else t = [2014, "01"];
					for (var s = 2e3; 2017 > s; s++) e.push({
						text: s,
						value: s
					});
					for (s = 1; 13 > s; s++) a.push({
						text: i.parseNumber(s),
						value: i.parseNumber(s)
					});
					this.scrollList = new n({
						appendElement: this.el,
						title: "保养日期",
						group: [e, a],
						selected: t,
						done: function(t) {
							this.hide();
							var e = t[0] + "年" + t[1] + "月";
							r.$(".js-maintime-value").html(e)
						}
					})
				}
			},
			itemAction: function(t) {
				if (!this.model.current) return void app.alert("请先输入行驶里程");
				t && $(t.currentTarget).find("i").toggleClass("active");
				for (var e = this.$(".js-item .active").parent(), i = e.length ? "您的爱车可能过早更换了以下项目：" : "", n = 0, a = 0; a < e.length; a++) {
					var r = e.eq(a),
						o = r.attr("data-id"),
						s = _.find(this.model.current, function(t) {
							return t.itemId == o
						});
					s || (n = _.find(this.model.items, function(t) {
						return t.itemId == o ? (i += "<p>" + t.itemName + " 更换周期应为每" + t.mileage + "公里</p>", !0) : void 0
					}))
				}
				this.$(".js-project").html(n ? i : "")
			},
			getMain: function() {
				var t = this.$(".js-mileage").val().trim(),
					e = this;
				t && (app.showLoading(), app.ajax({
					url: "plan/getCurrentMaintenanceItems",
					data: {
						brandId: this.query.brandTypeId,
						mileage: t
					},
					session: !0,
					success: function(t) {
						app.hideLoading(), e.model.current = t.items, e.itemAction()
					}
				}))
			},
			saveMainAction: function() {
				var t = this.$(".js-maintime-value").html().trim(),
					e = this.$(".js-mileage").val().trim(),
					i = this.$(".js-item .active"),
					n = this.$(".js-amount").val().trim();
				if (!t) return void app.alert("请选择保养时间");
				if (t.replace(/[^\d]/g, "-") + "01" > app.dateFormat(new Date, "yyyy-mm-dd")) return void app.alert("保养时间不能大于当前时间");
				if (!e) return void app.alert("请输入行驶里程");
				if (0 >= e) return void app.alert("请输入有效的行驶里程");
				if (!i.length) return void app.alert("请选择保养项目");
				if (!n) return void app.alert("请输入保养金额");
				if (0 > n) return void app.alert("保养金额不能小于0");
				var a = [];
				i.each(function() {
					a.push($(this).parent().attr("data-id"))
				});
				var r = {
					data: {
						myCarId: this.query.id,
						actualMileage: e,
						maintenanceTime: t.replace(/[^\d]/g, "-") + "01",
						extraItemIds: a,
						selfMaintenanceAmount: 100 * n
					},
					success: function() {
						app.goBack()
					}
				};
				this.query.historyId ? (r.url = "mileage/updateMileageHistory", r.data.id = this.query.historyId) : r.url = "mileage/createMileageHistory", app.ajax(r)
			},
			deleteAction: function() {
				app.ajax({
					url: "mtnorder/deleteManualHistory",
					data: {
						id: this.query.historyId
					},
					success: function() {
						app.goBack()
					}
				})
			}
		});
		return a
	}), define("textuserSetHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<style>.set_list{margin-bottom:10px;background-color:#fff;border-radius:4px;font-size:15px;line-height:0.57rem;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.2)}.set_list li{display:block;padding-left:.15rem;padding-right:.15rem}.set-left{float:left;margin-left:0.15rem}.set-right{float:right;display:inline-block;color:#999}.set-line{clear:both;border-top:1px solid #f6f6f6}</style><div class=page-content style=margin:10px><ul class=set_list>", app.nativeApi.checkShare() && (__p += '<li class=js-click-invite>分享给朋友<i class="iconfont set-right ">&#xe623;</i></li>'), __p += '<li class=set-line><a href=javascript:; data-url="' + (null == (__t = href) ? "" : __t) + '" class=js-comment style=display:block>喜欢乐车邦？去评分吧<i class="iconfont set-right ">&#xe623;</i></a></li><li class=set-line style="display:' + (null == (__t = $.os.nativeVersion ? "" : "none") ? "" : __t) + '">版本信息<span class="set-right ">' + (null == (__t = $.os.nativeVersion) ? "" : __t) + '</span></li><li class="set-line js-go" data-url="user/msg_send">消息推送设置<i class="iconfont set-right ">&#xe623;</i></li></ul><ul class=set_list><li class=js-go data-url="about/introduce">关于我们<i class="iconfont set-right ">&#xe623;</i></li><li class="set-line js-go" data-url="about/statement">隐私声明<i class="iconfont set-right ">&#xe623;</i></li></ul><span class="btn-primary full-width js-logout">退出登录</span></div>';
			return __p
		}
	}), define("controller/user/set", ["textuserSetHtml", "PageView", "Swipe", "session", "user", "UIShare"], function(t, e, i, n, a, r) {
		var o = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-switch": "switchAction",
				"click .js-logout": "logoutAction",
				"click .js-go": "goAction",
				"click .js-click-invite": "inviteAction",
				"click .js-comment": "commentAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "设置"
					}
				})
			},
			onShow: function() {
				var e, i;
				$.os.weixin ? e = config.downloadurl.weixin : $.os.ios && (e = config.downloadurl.ios), i = this.template(t, {
					href: e
				}), this.$el.html(i)
			},
			logoutAction: function() {
				a.logout()
			},
			goAction: function(t) {
				var e = $(t.currentTarget);
				app.goTo(e.data("url"))
			},
			inviteAction: function() {
				var t = new r({
					appendElement: document.body,
					businessparams: {
						businesstype: 1,
						showtitle: "你的好友邀请你启动！指尖上的养车神器-乐车邦！",
						showcontent: "一键查车况，2折做保养，4S店超体验。"
					}
				});
				t.show()
			},
			commentAction: function(t) {
				if ($.os.android) return void app.alert("请到相应市场评分");
				var e = $(t.currentTarget),
					i = e.data("url");
				i && (location.href = i)
			}
		});
		return o
	}), define("textuserMsgSendSetHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.line-list{margin:10px}.website-info{word-wrap:break-word}.website-info .font-title{color:#ff5122}</style><div class=page-content><ul class=line-list><li class="line-item line-list--switch js-send', allowMaintenance && print(" active"), __p += '">消息推送<i class="icon-switch js-switch"></i></li></ul><div class=js-show-ua style=height:50px></div><div class=website-info style="display:', (app.is("production") || app.is("baolei")) && print("none"), __p += '"><p><span class=font-title>version:</span>' + (null == (__t = config.version) ? "" : __t) + "</p><p><span class=font-title>os:</span>" + (null == (__t = JSON.stringify($.os)) ? "" : __t) + "</p><p><span class=font-title>userAgent:</span>" + (null == (__t = navigator.userAgent) ? "" : __t) + "</p></div></div>";
			return __p
		}
	}), define("controller/user/msg_send", ["textuserMsgSendSetHtml", "PageView", "Swipe"], function(t, e, i) {
		var n = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "消息推送设置"
					}
				}), this.count = 0
			},
			ajax: function() {
				var t = {
					url: "uc/getNoticeConfig"
				};
				return t
			},
			onShow: function(e) {
				var n = this.template(t, e);
				this.$el.html(n);
				var a = this;
				new i(this.$(".icon-switch"), {
					left: function() {
						var t = $(this.el).parent();
						t.hasClass("active") && (t.removeClass("active"), a.switchAjax())
					},
					right: function() {
						var t = $(this.el).parent();
						t.hasClass("active") || (t.addClass("active"), a.switchAjax())
					}
				})
			},
			events: {
				"click .js-switch": "switchAction",
				"click .js-show-ua": "showConfigInfo"
			},
			switchAction: function(t) {
				var e = $(t.currentTarget);
				e.parent().toggleClass("active"), this.switchAjax()
			},
			switchAjax: function() {
				app.ajax({
					url: "uc/switchMaintenanceNoticeConfig"
				})
			},
			showConfigInfo: function() {
				this.count++, this.count > 9 && (this.$(".website-info").show(), this.count = 0)
			}
		});
		return n
	}), define("textuserInviteHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<style>.cps-invite-top{margin-bottom:10px;padding:20px 15px;text-align:center;background-color:#fff;border-bottom:1px solid #dcdce1}.cps-invite-top .title{font-size:13px;color:#666}.cps-invite-top .title .num{color:#07cdd0;font-size:30px}.cps-invite-top p{color:#999;padding-bottom:10px}.cps-invite-top .picbox{margin-bottom:15px;display:inline-block;width:184px;height:92px;color:#ff7d13;background:url(https://img01.lechebangstatic.com/webapp/bg-cps.png);background-size:100%;line-height:92px}.cps-invite-top .picbox span{font-size:24px}.cps-invite-top .picbox b{vertical-align:top}.cps-invite-bottom{margin:0 10px}.cps-invite-bottom .field-text-wrap{font-size:13px;color:#999}.cps-invite-bottom .price{font-size:18px}.cps-invite-num{font-size:15px;text-align:center;line-height:60px;background-color:#fff;color:#333}.cps-invite-num b{font-size:24px;color:#07cdd0;font-weight:400}.cps-invite-num span{color:#07cdd0}</style><div class=page-content><div class=cps-invite-top><div class=title>邀请码&nbsp;&nbsp;<span class=num>" + (null == (__t = info.inviterCode) ? "" : __t) + "</span><p>邀请好友成功注册，好友即刻获得300元抵用券；<br>好友完成首次保养，您将获得邀请现金奖励！</p><div class=picbox>&yen;<span>" + (null == (__t = rule.min) ? "" : __t) + "</span><b>——</b>&yen;<span>" + (null == (__t = rule.max) ? "" : __t) + '</span></div><span class="btn-primary full-width js-click-invite">立即邀请好友</span></div></div><div class=cps-invite-bottom><div class="form-item form-item--arrow-btn form-text"><label class=field-label>我的奖励</label><div class="field-text-wrap tr js-click-award">累计奖励&nbsp;<span class=price><dfn>&yen;</dfn>' + (null == (__t = wallet.totalRevenue / 100) ? "" : __t) + '</span></div><i class="icon-arrow js-click-award"></i></div></div><div style=height:60px></div></div><footer class=page-bottom><div class=cps-invite-num>已成功邀请<b>' + (null == (__t = invitedFriendsNumber) ? "" : __t) + "</b><span>位</span>好友加入乐车邦</div></footer>";
			return __p
		}
	}), define("textuserAwardRuleText", [], function() {
		return "1.乐车邦诚邀所有用户加入邀请聚宝“朋”计划；<br>2.好友通过邀请人链接成功注册乐车邦，即刻获得300元乐车邦保养抵用券礼包一份，抵用券自注册之日起90天有效；<br>3.通过邀请注册成功的好友，在乐车邦完成首次保养后，邀请人可获得支付金额2%乐车邦现金奖励（每单最低10元，最高30元），邀请越多好友做保养，奖金越多，上不封顶；<br>4.如邀请人采用某些技术手段，或邀请的好友身份信息异常，一经核实，乐车邦保留拒绝支付奖励的权利；<br>5.有任何疑问，可随时拨打乐车邦客服电话：4006-300-111；<br>6.本活动最终解释权归上海享途网络有限公司所有。"
	}), define("UserShare", ["UIShare", "session"], function(t, e) {
		var i = t.extend({
			options: {
				appendElement: document.body,
				data: {
					title: '<div style="margin:0 .15rem;text-align:left;">*邀请好友注册并完成首次保养，根据保养订单支付金额获得相应比例的现金奖励。 <br>*成功邀请好友保养越多，奖金越多，每单奖励最低10元， 最高30元。</div>',
					list: [{
						sharetype: "qrcode",
						icon: "&#xe633;",
						text: "二维码邀请",
						className: "ui-share-qrcode",
						has: !0,
						callback: function() {
							app.goTo("user/invite_qrcode")
						}
					}, {
						sharetype: "weixin",
						icon: "&#xe618;",
						text: "微信好友",
						type: 1,
						className: "ui-share-weixin"
					}, {
						sharetype: "weixin",
						icon: "&#xe62e;",
						text: "微信朋友圈",
						type: 2,
						className: "ui-share-quan"
					}, {
						sharetype: "qq",
						icon: "&#xe63b;",
						text: "QQ好友",
						type: 1,
						className: "ui-share-qq"
					}]
				},
				businessparams: {
					url: app.is("test") ? "http://wechat.lechebang.cn/index.php?r=cps/index&qrcode=" : "https://wechat.lechebang.com/index.php?r=cps/index&qrcode=",
					businesstype: 3,
					thumb: "cps.png",
					thumburl: "https://img01.lechebangstatic.com/webapp/cps/cps.png",
					showtitle: "乐车邦送你300元，爱车4S店保养随便花！",
					showcontent: "在乐车邦做汽车保养爽翻！一键查车况，2折做保养，4S店超体验。"
				},
				shareParse: function(t) {
					return t.businessparams.url += e.get("inviter_code"), t
				}
			}
		});
		return i
	}), define("controller/user/invite", ["PageView", "textuserInviteHtml", "textuserAwardRuleText", "session", "local", "UIScreen", "UserShare", "carModel"], function(t, e, i, n, a, r, o, s) {
		var l = t.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				},
				master: "user/index"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "我的聚宝“朋”"
					},
					right: [{
						text: "规则说明",
						callback: function() {
							new r({
								appendElement: document.body,
								title: "邀请规则说明：",
								msg: i
							})
						}
					}]
				})
			},
			ajax: function() {
				var t = {
						url: "inviter/getInviter"
					},
					e = {
						url: "inviter/getRule"
					},
					i = {
						url: "inviter/invitedFriends"
					},
					n = s.getMywallet();
				return [t, e, i, n]
			},
			onShow: function(t, i, a, r) {
				r = $.extend({
					totalRevenue: 0,
					totalWithDraw: 0,
					totalAmount: 0,
					availableAmount: 0
				}, r), this.$el.html(this.template(e, {
					info: t,
					rule: i,
					invitedFriendsNumber: a,
					wallet: r
				})), n.set("inviter_code", t.inviterCode)
			},
			events: {
				"click .js-click-invite": function() {
					var t = new o;
					t.show()
				},
				"click .js-click-award": function(t) {
					$(t.currentTarget);
					app.goTo("user/award")
				},
				"click .js-click-award-detail": function(t) {
					$(t.currentTarget);
					app.goTo("user/award_detail")
				}
			}
		});
		return l
	}), define("textuserAwardHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.cps-center{position:relative;background:-webkit-gradient(linear, 0 0, 0 100%, from(#ffbb71), to(#f5a845));border-bottom:1px solid #e7e7e7;height:128px;line-height:128px;text-align:center;font-size:45px;color:#fff;overflow:hidden}.cps-center dfn{font-size:24px}.cps-center .l{position:absolute;top:10px;left:20px;color:#fff;font-size:13px;line-height:2}.cps-center .r{position:absolute;top:10px;right:20px;color:#fff;font-size:13px;line-height:2;padding-right:15px}.cps-center .r:after{content:"";display:inline-block;vertical-align:middle;width:8px;height:8px;border-top:1px solid #fff;border-right:1px solid #fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:5px;top:50%;margin-top:-1px;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}.cps-center-bom{padding:0 20px;background-color:#fff;line-height:50px;border-bottom:1px solid #dcdce1;margin-bottom:15px;font-size:15px}.cps-center-bom .fr{font-size:24px;color:#666}.cash-box{text-align:center;font-size:14px;color:#666}.cash-box .t{margin-bottom:5px}.cash-box p{margin-bottom:5px;font-size:12px;color:#e54d4d}.cash-box input[type=tel]{height:40px;line-height:40px;border:0 none;background-color:#eaeaea;width:90px;font-size:18px;text-align:center}.cash-box .txt-gray2{color:#666}.cps-invite-bottom{margin:0 10px}.cps-invite-bottom .field-text-wrap{font-size:13px;color:#999}.cps-invite-bottom .price{font-size:18px}.cps-invite-footer{padding:15px 10px;background-color:#fff;border-top:1px solid #f1f1f1}.cps-invite-footer .btn-primary{margin:0}</style><div class=page-content><div class=cps-center><span class=l>当前余额</span><span class="r js-click-award-detail">明细</span><dfn>&yen;</dfn>' + (null == (__t = wallet.availableAmount / 100) ? "" : __t) + "</div><div class=cps-center-bom><div class=fr><dfn>&yen;</dfn>" + (null == (__t = wallet.totalRevenue / 100) ? "" : __t) + '</div>累计历史奖励</div><div class=cps-invite-bottom><div class="form-item form-item--arrow-btn form-text" style=margin-bottom:15px><label class=field-label>提现</label><div class="field-text-wrap tr js-click-withdraw-cash">可提现<span class=price><dfn>&yen;</dfn>' + (null == (__t = wallet.availableAmount / 100) ? "" : __t) + '</span></div><i class="icon-arrow js-click-withdraw-cash"></i></div><span class="btn-link-icon full-width js-click-invite"><i class=iconfont>&#xe632;</i>立即邀请好友</span></div><div style=height:80px></div></div><footer class=page-bottom><div class=cps-invite-footer><span class="btn-primary full-width bank_account_setup js-click-bank-card-setup">银行卡设置</span></div></footer>';
			return __p
		}
	}), define("textuserInviteOverlayHtml", [], function() {
		return function(obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class=share-intro>*邀请好友注册并完成首次保养，根据保养订单支付金额获得相应比例的现金奖励。<br>*成功邀请好友保养越多，奖金越多，每单奖励最低10元， 最高30元。</div><div class=hd>选择邀请方式</div><div class=bd><ul class=share-list><li style=display:none><i class=iconfont style=background-color:#f87d15>&#xe634;</i><p>短信邀请</p></li><li class=js-click-invite-qrcode><i class=iconfont style=background-color:#f87d15>&#xe633;</i><p>二维码邀请</p></li>", app.nativeApi.has("share.weixin") && (__p += '<li class=js-click-wx><i class="iconfont weixin">&#xe618;</i><p>微信好友</p></li><li class=js-click-wx-p><i class="iconfont weixin">&#xe62e;</i><p>微信朋友圈</p></li>'), __p += "\r\n                ", app.nativeApi.has("share.qq") && (__p += '<li class=js-click-qq><i class="iconfont qq">&#xe63b;</i><p>QQ好友</p></li>'), __p += "\r\n                ", app.nativeApi.has("share.weibo") && (__p += '<li class=js-click-weibo style=display:none><i class="iconfont weibo">&#xe63d;</i><p>微博好友</p></li>'), __p += '</ul><div class="exit-box js-click-overlay-close">取消</div></div>';
			return __p
		}
	}), define("InviteService", ["underscore", "UIFooterSlide", "dateUtil", "textuserInviteOverlayHtml", "validate"], function(t, e, i, n, a) {
		var r = {};
		return r.RELATE_TYPE_NAMES = {
			1: "抢单",
			2: "活动",
			3: "充值",
			4: "提现",
			5: "消费",
			6: "扣税",
			7: "邀请"
		}, r.METHOD_NAMES = {
			1: "增加金额",
			2: "减少金额",
			3: "冻结金额",
			4: "解冻金额",
			5: "扣除解冻"
		}, r.checkBankCard = function(t, e) {
			app.ajax({
				url: "bankcard/getUserBankCardComInfo",
				data: {},
				success: function(i) {
					i && i.bankCardNumber ? t && t(i) : e && e()
				}
			})
		}, r.formatPercent = function(t, e) {
			return t ? 100 * t + "%" : e
		}, r.checkYM = function(t, e) {
			if (!/^\d+$/.test(t) || !/^\d+$/.test(e)) return !1;
			t = parseInt(t), e = parseInt(e);
			var n = new Date(i.now()).getFullYear();
			return n >= t && e > 0 && 12 >= e ? !0 : !1
		}, r.withdraw = function(t, e) {
			app.ajax({
				url: "withdraw/withdraw",
				data: {
					withdraw: t
				},
				success: function() {
					e && e()
				}
			})
		}, r.saveUserBankCard = function(t, e) {
			return t = $.extend({}, t), t.bankTypeId ? /\d/.test(t.bankTypeId) ? t.bankCardNumber ? a.isBankCard(t.bankCardNumber) ? t.bankCardPlace ? t.userName ? t.idCardNumber ? a.isIdCard(t.idCardNumber) ? (app.showLoading(), void app.ajax({
				url: "bankcard/saveBankCardInfo",
				data: t,
				success: function() {
					app.hideLoading(), e && e()
				}
			})) : void app.alert("身份证格式不正确") : void app.alert("请填写身份证") : void app.alert("请填写开户姓名") : void app.alert("请填写开户行名称") : void app.alert("请正确填写银行卡号") : void app.alert("请填写银行卡号") : void app.alert("请正确选择银行卡类型") : void app.alert("请选择银行卡类型")
		}, r.filterAwardDetails = function(e) {
			return t.reject(e, function(t) {
				var e = 1 == t.relatedType && 1 == t.method;
				return e || 3 == t.method
			})
		}, r.isFreezed = function() {
			return !1
		}, r.getAwardOperator = function(e) {
			return 1 == e.relatedType ? t.contains([1, 3, 4], e.method) ? "+" : "-" : t.contains([1, 4], e.method) ? "+" : "-"
		}, r.getAwardRelatedTypeName = function(t) {
			return 4 == t.relatedType && 4 == t.method ? "提现失败" : this.RELATE_TYPE_NAMES[t.relatedType] || "未知(" + t.relatedType + ")"
		}, r.getAwardMethodName = function(t) {
			return this.METHOD_NAMES[t] || "未知(" + t + ")"
		}, r.dateBetweenDates = function(t, e, i) {
			return t.getTime() >= e.getTime() && t.getTime() < i.getTime()
		}, r.dateBetweenCurrentMonth = function(t) {
			var e = new Date(i.now()),
				n = e;
			n.setDate(1), n.setHours(0, 0, 0, 0);
			var a = i.addMonth(n, 1);
			return this.dateBetweenDates(t, n, a)
		}, r.timestampBetweenCurrentMonth = function(t) {
			return this.dateBetweenCurrentMonth(new Date(t))
		}, r
	}), define("textuserAlertWithdrawHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div class=pub-modal-bd><div class=pub-mutil-lines><div class=cash-box><div class=t>提现金额<input id=WITHDRAW_CASH_AMOUNT type=tel value="' + (null == (__t = amount / 100) ? "" : __t) + '">元</div><p id=WITHDRAW_CASH_MESSAGE>&nbsp;</p><div class=txt-gray2><i class="icon-checkbox active"></i>我同意乐车邦对奖金所涉税费（如有）进行代扣代缴。</div></div></div></div>';
			return __p
		}
	}), define("controller/user/award", ["PageView", "textuserAwardHtml", "InviteService", "UserShare", "textuserAlertWithdrawHtml"], function(t, e, i, n, a) {
		var r, o = t.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "我的奖励"
					}
				})
			},
			ajax: function() {
				var t = {
					url: "wallet/my_wallet",
					data: {}
				};
				return t
			},
			onShow: function(t) {
				t = $.extend({
					totalRevenue: 0,
					totalWithDraw: 0,
					totalAmount: 0,
					availableAmount: 0
				}, t), r = t, this.$el.html(this.template(e, {
					wallet: t
				}))
			},
			events: {
				"click .js-click-invite": function() {
					var t = new n;
					t.show()
				},
				"click .js-click-award-detail": function(t) {
					$(t.currentTarget);
					app.goTo("user/award_detail")
				},
				"click .js-click-bank-card-setup": function(t) {
					$(t.currentTarget);
					app.goTo("user/bank_card_setup", {
						animate: !1
					})
				},
				"click .js-click-withdraw-cash": function(t) {
					{
						var e = this;
						$(t.currentTarget)
					}
					i.checkBankCard(function() {
						return r.availableAmount < 1e4 ? void app.alert("<div style='text-align:left;padding:10px;'>还没到最低提现金额100元哦,还是攒足了再提吧。</div>") : void app.alert({
							msg: e.template(a, {
								amount: r.availableAmount
							}),
							onShow: function() {
								this.$(".js-action").eq(1).attr("data-ajax", 1)
							},
							btns: [{
								text: "下次再提"
							}, {
								text: "提现",
								callback: function() {
									var t = $.trim($("#WITHDRAW_CASH_AMOUNT").val());
									if (!/^[0-9]+$/.test(t)) return void $("#WITHDRAW_CASH_MESSAGE").html("提现金额必须是正整数");
									if (100 > t) return void $("#WITHDRAW_CASH_MESSAGE").html("提现金额不能小于100元");
									var n = r.availableAmount / 100;
									return t > n ? void $("#WITHDRAW_CASH_MESSAGE").html("提现金额不能大于" + n + "元") : void i.withdraw(100 * t, function() {
										app.alert({
											msg: "<div style='text-align:left;'>您的提现申请已提交,预计将在5-10个工作日内转账到指定的银行账户,请注意查收。</div>",
											btns: [{
												text: "确定",
												callback: function() {
													e.reload()
												}
											}]
										})
									})
								}
							}]
						})
					}, function() {
						app.alert({
							msg: "<div style='text-align:center;'>请先设置银行卡账号</div>",
							btns: [{
								text: "我知道了",
								callback: function() {
									app._alert.hide()
								}
							}, {
								text: "马上设置",
								callback: function() {
									app._alert.hide(), app.goTo("user/bank_card_setup", {
										animate: !1
									})
								}
							}]
						})
					})
				}
			}
		});
		return o
	}), define("textuserAwardDetailHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "<style>.cps-list-top{height:90px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:18px;background-color:#fff;text-align:center;border-bottom:1px solid #dcdce1;line-height:90px}.cps-list-top .iconfont{display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;font-size:18px;border-radius:50%;background-color:#f7f7f7;color:#999;vertical-align:middle;margin:0 5px;padding:3px}.cps-none{margin-top:10px;padding:10px 10px 20px;text-align:center;background-color:#fff;border-bottom:1px solid #dcdce1}.cps-none i.icon{font-size:45px;color:#999}.cps-none .txt{margin-bottom:10px;font-size:18px;color:#666}.cps-item{position:relative;margin-top:10px;line-height:78px;padding:0 25px;border-bottom:1px solid #dcdce1;background-color:#fff}.cps-item .time{display:inline-block;width:45%;font-size:15px;color:#666}.cps-item .type{display:inline-block;font-size:15px;color:#666}.cps-item .type span{border:1px solid #fdab37;background-color:#fff5e8;padding:3px 4px;border-radius:5px;color:#ffa838;font-size:12px}.cps-item .type i{color:#07cdd0}.cps-item .price{position:absolute;right:30px;top:0;font-size:30px;color:#726f83}.cps-item .price span{font-size:20px;vertical-align:top}.cps-item .side{position:absolute;top:0;left:0;line-height:30px}.cps-item .side::after{content:'';position:absolute;left:0;top:0;width:0;height:0;border-top:45px solid #fff5e8;border-right:45px solid transparent}.cps-item .side b{position:absolute;top:0;left:4px;font-size:12px;color:#ffa838;z-index:4}.pop-cps-item{position:absolute;top:50%;left:50%;z-index:220;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);padding:20px 10px;background-color:#fff;border-radius:5px;color:#666;line-height:2;font-size:14px;text-align:left;white-space:nowrap}</style><div class=page-content><div class=cps-list-top><i class=\"iconfont js-click-date-left\">&#xe624;</i><span>" + (null == (__t = yyyymm) ? "" : __t) + '</span><i class="iconfont js-click-date-right">&#xe623;</i></div>', list && list.length > 0 ? $.each(list, function(t, e) {
				var i = InviteService.getAwardOperator(e);
				__p += "<div class=cps-item><div class=time>" + (null == (__t = app.dateFormat(e.createTime, "yyyy-mm-dd HH:MM")) ? "" : __t) + "</div><div class=type><span>" + (null == (__t = InviteService.getAwardRelatedTypeName(e)) ? "" : __t) + "</span>&nbsp;\r\n	", 4 != e.method && "-" != i && (__p += '<i class="iconfont js-click-order" data-related-id="' + (null == (__t = e.relatedId) ? "" : __t) + '" data-related-type="' + (null == (__t = e.relatedType) ? "" : __t) + '">&#xe60f;</i>'), __p += '</div><div class=price style="', "-" == i && print("color:#FC2D2D;"), __p += '"><span>' + (null == (__t = i) ? "" : __t) + "</span>" + (null == (__t = e.amount / 100) ? "" : __t) + "</div>", InviteService.isFreezed(e) && (__p += "<div class=side><b>冻</b></div>"), __p += "</div>"
			}) : __p += '<div class=cps-none><i class="iconfont icon">&#xe620;</i><div class=txt>暂无奖励</div><span class="btn-link-icon full-width js-click-invite"><i class=iconfont>&#xe632;</i>立即邀请好友</span></div>', __p += "</div>";
			return __p
		}
	}), define("textuserAlertAwardDetailOrderHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div style="text-align:left;padding:0 10px;line-height:200%"><p>完成时间：' + (null == (__t = app.dateFormat(result.finishedDate, "yyyy-mm-dd HH:MM:ss")) ? "" : __t) + "</p><p>保养订单：" + (null == (__t = result.contactUserName) ? "" : __t) + "&nbsp;&nbsp;" + (null == (__t = hideMobile(result.contactUserMobile)) ? "" : __t) + "</p><p>支付金额：¥&nbsp;" + (null == (__t = result.payAmount / 100) ? "" : __t) + "&nbsp;元</p><p>服务评分：" + (null == (__t = result.serviceScore) ? "" : __t) + "</p></div>";
			return __p
		}
	}), define("textuserAwardDescText", [], function() {
		return "1.邀请人邀请好友注册乐车邦，好友在乐车邦APP完成首次保养后，邀请人获得现金奖励；<br>2.邀请奖励仅针对好友的首次保养订单；<br>3.现金奖励为好友保养订单的实际支付金额的2%（四舍五入取整到元）；<br>- 奖励金额计算不足10元时，直接奖励10元<br>- 单笔奖励金额最高上限为30元<br>4.奖励金额可以自行提现至设置好的银行账户中<br>- 最低提现金额为100元<br>- 提现频率为7天，即每7天最多允许提现一次<br>5.邀请人提现时，已确认并同意由乐车邦对奖金所涉税费（如有）进行代扣代缴，并在代扣代缴后将剩余款项支付至邀请人自行设置的银行账号中；<br>6.提现到账时间为5-10个工作日，根据不同的银行会有部分差异。若因邀请人账户设置问题导致的转账延误，由邀请人自行负责；<br>7.如邀请人采用某些技术手段，或邀请的好友身份信息异常，一经核实，乐车邦保留拒绝支付奖励的权利；<br>8.有任何疑问，可随时拨打乐车邦客服电话：4006-300-111。"
	}), define("StringUtils", [], function() {
		var t = {};
		return t.escapeRegex = function(t) {
			return t = t.replace(/\*/g, "\\*"), t = t.replace(/\./g, "\\."), t = t.replace(/\?/g, "\\?"), t = t.replace(/\+/g, "\\+"), t = t.replace(/\$/g, "\\$"), t = t.replace(/\^/g, "\\^"), t = t.replace(/\[/g, "\\["), t = t.replace(/\]/g, "\\]"), t = t.replace(/\(/g, "\\("), t = t.replace(/\)/g, "\\)"), t = t.replace(/\{/g, "\\{"), t = t.replace(/\}/g, "\\}"), t = t.replace(/\|/g, "\\|"), t = t.replace(/\\\\/g, "\\\\"), t = t.replace(/\//g, "\\/")
		}, t.replace = function(t, e, i) {
			return t.replace(new RegExp(e, "g"), i)
		}, t.setParam = function(t, e, i) {
			return this.replace(t, "\\$\\{" + e + "\\}", i)
		}, t.setParams = function(t, e) {
			for (var i in e) t = this.setParam(t, i, e[i]);
			return t = this.killParams(t)
		}, t.killParams = function(t) {
			return t.replace(/\$\{[\s\S]+?\}/, "")
		}, t.hideChar = function(t, e, i, n) {
			if (!t && t.length < 1) return t;
			for (var a = t.substr(0, i), r = t.substr(i + n), o = a, s = 0; n > s; s++) o += e;
			return o += r
		}, t
	}), define("controller/user/award_detail", ["PageView", "textuserAwardDetailHtml", "textuserAlertAwardDetailOrderHtml", "textuserAwardDescText", "InviteService", "dateUtil", "dateFormat", "StringUtils", "UIScreen", "UserShare"], function(t, e, i, n, a, r, o, s, l, c) {
		var d, p = t.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "奖励明细"
					},
					right: [{
						text: "奖金说明",
						callback: function() {
							new l({
								appendElement: document.body,
								title: "奖金说明：",
								msg: n
							})
						}
					}]
				})
			},
			ajax: function() {
				var t;
				a.checkYM(this.query.y, this.query.m) ? (t = new Date(0), t.setFullYear(this.query.y), t.setMonth(this.query.m - 1)) : t = new Date(r.now()), t.setDate(1), t.setHours(0, 0, 0, 0), d = t.getTime();
				var e = new Date(d);
				this.query.y = e.getFullYear(), this.query.m = e.getMonth() + 1;
				var i = {
					url: "award/queryMyAward",
					data: {
						month: this.query.y + "-" + this.query.m
					}
				};
				return i
			},
			onShow: function(t) {
				var i = this,
					n = t.list;
				n = a.filterAwardDetails(n), this.$el.html(this.template(e, {
					list: n,
					yyyymm: i.query.y < 0 ? "公元前" : "" + i.query.y + "年" + i.query.m + "月",
					InviteService: a
				}));
				var o = parseInt(app.dateFormat(d, "yyyymm")),
					s = new Date(r.now()),
					l = parseInt(app.dateFormat(s, "yyyymm"));
				o >= l && $(".js-click-date-right").hide()
			},
			events: {
				"click .js-click-invite": function() {
					var t = new c;
					t.show()
				},
				"click .js-click-date-left:not(.disabled)": function(t) {
					var e = this,
						i = ($(t.currentTarget), r.addMonth(new Date(d), -1));
					e.query.y = i.getFullYear(), e.query.m = i.getMonth() + 1, this.reload()
				},
				"click .js-click-date-right:not(.disabled)": function(t) {
					var e = this,
						i = ($(t.currentTarget), r.addMonth(new Date(d), 1));
					e.query.y = i.getFullYear(), e.query.m = i.getMonth() + 1, this.reload()
				},
				"click .js-click-order": function(t) {
					var e = this,
						n = $(t.currentTarget);
					app.ajax({
						url: "award/queryAwardDetail",
						data: {
							relatedId: n.data("relatedId"),
							relatedType: n.data("relatedType"),
							page: {
								pageSize: 5
							}
						},
						session: !0,
						express: "1H",
						success: function(t) {
							app.alert(t ? e.template(i, {
								result: t,
								hideMobile: function(t) {
									return s.hideChar(t, "x", 3, 5)
								}
							}) : "[无订单信息]")
						}
					})
				}
			}
		});
		return p
	}), define("textuserBankCardSetupHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.txt-gray{color:#999;font-size:15px;text-align:center}.txt-gray2{position:relative;padding-left:20px;padding-bottom:10px;color:#999;font-size:13px}.txt-gray2 i{position:absolute;top:2px;left:4px}.car-list select{position:absolute;top:0;left:0;right:0;color:rgba(0,0,0,0)}.car-list select option{color:#333}.bank-list-box .bank-item{background-color:#fff}.bank-list-box li{line-height:41px;padding:5px 10px 5px 15px;position:relative;display:block;cursor:pointer;font-size:15px}.bank-list-box li::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #dcdce1;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.bank-list-box li em{display:inline-block;width:37px;height:37px;text-align:center;overflow:hidden;vertical-align:middle;font-style:normal;margin-right:10px}.bank-list-box li img{height:37px;vertical-align:text-bottom}.bank-list-box li.active::after{content:"";width:14px;height:6px;border-bottom:2px solid #07cdd0;border-left:2px solid #07cdd0;position:absolute;top:50%;right:30px;margin-top:-4px;-webkit-transform:rotate(-45deg) translateY(-50%);transform:rotate(-45deg) translateY(-50%)}.bank-list-box li.active{padding-right:55px}</style><div class=page-content><div class="p10 js-value-id" data="' + (null == (__t = info.id) ? "" : __t) + '"><div class="form-item  pub-arrow form-block car-list js-click-bankTypeId"><label class=field-label>银行卡类型</label><div class="field-text-wrap tr js-value-bankTypeId js-click-bankTypeId" data="' + (null == (__t = info.bankTypeId) ? "" : __t) + '"><span>' + (null == (__t = info.bankName) ? "" : __t) + '</span></div></div><div class="form-item form-block"><label class=field-label>开户行</label><div class=field-text-wrap><input type=text class="field-text tr js-value-bankCardPlace" placeholder=请输入开户行 value="' + (null == (__t = info.bankCardPlace) ? "" : __t) + '"></div></div><div class="form-item  form-block"><label class=field-label>银行卡卡号</label><div class=field-text-wrap><input type=tel class="field-text tr js-value-bankCardNumber" placeholder=请输入银行卡卡号 value="' + (null == (__t = info.bankCardNumber) ? "" : __t) + '"></div></div><div class="form-item  form-block"><label class=field-label>开户姓名</label><div class=field-text-wrap><input type=text class="field-text tr js-value-userName" placeholder=请输入开户姓名 value="' + (null == (__t = info.userName) ? "" : __t) + '"></div></div><div class="form-item  form-block"><label class=field-label>身份证号</label><div class=field-text-wrap><input type=text class="field-text tr js-value-idCardNumber" placeholder=请输入您的身份证号码 value="' + (null == (__t = info.idCardNumber) ? "" : __t) + '"></div></div><div class="txt-gray2 js-click-active"><i class="icon-checkbox js-click-active-i active"></i>我确认以上信息填写的真实性，并同意乐车邦将邀请奖金转入我的个人账户。</div><a href=javascript:void(0); class="btn-primary full-width js-click-save">确定</a></div></div>';
			return __p
		}
	}), define("controller/user/bank_card_setup", ["PageView", "textuserBankCardSetupHtml", "InviteService", "session"], function(t, e, i, n) {
		var a = t.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "银行卡设置"
					}
				})
			},
			ajax: function() {
				return {
					url: "bankcard/getUserBankCardComInfo"
				}
			},
			onShow: function(t) {
				if (!n.get("USER_BANK_ACCOUNT_SETUP_CHECK_MOBILE")) return void app.goTo("user/bank_card_setup_check", {
					animate: !1,
					replace: !0,
					stop: !1
				});
				t = $.extend({}, t), this.query.id && this.query.name && (t.bankTypeId = this.query.id, t.bankName = this.query.name);
				var i = {
						info: t
					},
					a = this.template(e, i);
				this.$el.html(a)
			},
			events: {
				"click .js-click-bankTypeId": function(t) {
					var e = $(t.currentTarget),
						i = $.trim(e.attr("data"));
					app.goTo("user/bank_card_type_select?id=" + i)
				},
				"click .js-click-active": function(t) {
					var e = $(t.currentTarget),
						i = e.find(".js-click-active-i"),
						n = $(".js-click-save");
					i.hasClass("active") ? (i.removeClass("active"), n.addClass("disabled")) : (i.addClass("active"), n.removeClass("disabled"))
				},
				"click .js-click-save:not(.disabled)": function(t) {
					var e = ($(t.currentTarget), {
						id: parseInt($(".js-value-id").attr("data")),
						bankTypeId: parseInt($(".js-value-bankTypeId").attr("data")),
						bankCardNumber: $.trim($(".js-value-bankCardNumber").val()),
						bankCardPlace: $.trim($(".js-value-bankCardPlace").val()),
						userName: $.trim($(".js-value-userName").val()),
						idCardNumber: $.trim($(".js-value-idCardNumber").val())
					});
					e.bankCardNumber = e.bankCardNumber.replace(/\s+/g, ""), e.idCardNumber = e.idCardNumber.replace("x", "X"), i.saveUserBankCard(e, function() {
						app.alert({
							msg: "保存成功",
							btns: [{
								text: "确定",
								callback: function() {
									app.goBack()
								}
							}]
						})
					})
				}
			}
		});
		return a
	}), define("textuserBankCardSetupCheckHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.login-box{padding:15px}.login-box .field-label{width:3em;margin-left:-3.5em}.login-box .form-item{padding-left:4em}.login-box .form-code,.book-box .form-code{margin-right:110px;padding-right:10px}.login-box .code-btn,.book-box .code-btn{position:absolute;top:0;padding:0 10px;background:#fff;color:#07cdd0;border:1px solid #07cdd0;border-radius:5px;font-size:15px;z-index:3;line-height:50px;right:-110px}.code-btn.disabled{border:1px solid #ccc}.txt-gray2{color:#999;font-size:15px;padding:10px 15px 0}</style><div class=page-content><div class=txt-gray2></div><div class=login-box><div class="form-item form-item--arrow-btn form-block"><label class=field-label>手机号</label><div class=field-text-wrap><input id=BANK_ACCOUNT_CHECK_MOBILE type=tel value="' + (null == (__t = result.user.mobile) ? "" : __t) + '" class=field-text disabled readonly></div></div><div class="form-item form-item--arrow-btn form-block form-code"><label class=field-label>验证码</label><div class=field-text-wrap><input id=BANK_ACCOUNT_CHECK_CODE type=tel class="field-text js-code code" placeholder=请输入验证码></div><span class="code-btn getCode">获取验证码</span></div><a href=javascript:void(0); class="btn-primary full-width checkCode">下一步</a></div></div>';
			return __p
		}
	}), define("controller/user/bank_card_setup_check", ["textuserBankCardSetupCheckHtml", "PageView", "session"], function(t, e, i) {
		var n = e.extend({
			events: {
				"click .getCode": function(t) {
					var e = $(t.currentTarget),
						n = $.trim($("#BANK_ACCOUNT_CHECK_MOBILE").val()),
						a = this;
					if (i.set("BANK_ACCOUNT_CHECK_MOBILE", n), !e.hasClass("disabled")) {
						if (!n) return void app.alert("请输入手机号码");
						e.addClass("disabled").html("重新发送 60");
						var r = 60,
							o = setInterval(function() {
								r-- ? e.html("重新发送 " + r): (clearInterval(o), e.html("获取验证码").removeClass("disabled"))
							}, 1e3);
						app.ajax({
							url: "bankcard/sendCheckBankAccountSms",
							data: {
								mobile: n
							},
							success: function() {
								a.$(".js-code").focus()
							},
							error: function() {
								clearInterval(o), e.html("获取验证码").removeClass("disabled")
							}
						})
					}
				},
				"click .checkCode": function() {
					app.ajax({
						url: "bankcard/setBankAccountLogin",
						data: {
							mobile: i.get("BANK_ACCOUNT_CHECK_MOBILE"),
							code: $("#BANK_ACCOUNT_CHECK_CODE").val()
						},
						success: function() {
							i.set("USER_BANK_ACCOUNT_SETUP_CHECK_MOBILE", 1, 300), app.hideLoading(), app.goTo("user/bank_card_setup", {
								animate: !1,
								replace: !0,
								stop: !1
							})
						}
					})
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "银行卡设置验证"
					}
				})
			},
			ajax: function() {
				return {
					url: "user/currentUser"
				}
			},
			onShow: function(e) {
				var i = this.template(t, {
					result: e
				});
				this.$el.html(i)
			},
			getCodeAction: function(t) {
				var e = $(t.currentTarget),
					i = this.$(".js-mobile").val().trim();
				if (!e.hasClass("disabled")) {
					if (!i) return void app.alert("请输入手机号码");
					e.addClass("disabled").html("重新发送 60");
					var n = 60,
						a = setInterval(function() {
							n-- ? e.html("重新发送 " + n): (clearInterval(a), e.html("获取验证码").removeClass("disabled"))
						}, 1e3);
					app.ajax({
						url: "bankcard/sendCheckBankAccountSms",
						data: {
							mobile: i
						},
						success: _.noop,
						error: function() {
							clearInterval(a), e.html("获取验证码").removeClass("disabled")
						}
					})
				}
			}
		});
		return n
	}), define("textuserBankCardTypeSelectHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.bank-list-box .bank-item{background-color:#fff}.bank-list-box li{line-height:41px;padding:5px 10px 5px 15px;position:relative;display:block;cursor:pointer;font-size:15px}.bank-list-box li::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #dcdce1;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.bank-list-box li em{display:inline-block;width:37px;height:37px;text-align:center;overflow:hidden;vertical-align:middle;font-style:normal;margin-right:10px}.bank-list-box li img{height:37px;vertical-align:text-bottom}.bank-list-box li.active::after{content:"";width:14px;height:6px;border-bottom:2px solid #07cdd0;border-left:2px solid #07cdd0;position:absolute;top:50%;right:30px;margin-top:-4px;-webkit-transform:rotate(-45deg) translateY(-50%);transform:rotate(-45deg) translateY(-50%)}.bank-list-box li.active{padding-right:55px}</style><div class="page-content bank-list-box">', list && list.length ? (__p += "<ul class=bank-item>", _.each(list, function(t) {
				__p += '<li class="js-select ', t.id == selected && print(" active"), __p += '" data-id="' + (null == (__t = t.id) ? "" : __t) + '" data-name="' + (null == (__t = t.name) ? "" : __t) + '">' + (null == (__t = t.name) ? "" : __t) + "</li>"
			}), __p += "</ul>") : __p += "<p class=results-none>无待选银行卡类型。</p>", __p += "</div>";
			return __p
		}
	}), define("controller/user/bank_card_type_select", ["textuserBankCardTypeSelectHtml", "PageView", "session"], function(t, e, i) {
		var n = e.extend({
			options: {},
			events: {
				"click .js-select": "selectAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "选择银行卡类型"
					}
				})
			},
			ajax: function() {
				var t = {
					url: "bankcard/getBankCardTypes"
				};
				return t
			},
			onShow: function(e) {
				var i = this.template(t, {
					list: e,
					selected: this.query.id
				});
				this.$el.html(i)
			},
			selectAction: function(t) {
				var e = $(t.currentTarget),
					n = e.attr("data-id"),
					a = e.attr("data-name"),
					r = i.get(app.referrer) || {};
				r.id = n, r.name = a, i.set(app.referrer, r), app.goBack.noCache()
			}
		});
		return n
	}), define("textuserInviteQrcodeHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.cps-qr-box{background-color:#fff;padding:20px 25px;border-bottom:1px solid #dcdce1;text-align:center}.cps-qr-box .pic{padding:5px 15px;text-align:center}.cps-qr-box .pic img{display:block;width:100%;text-align:center}.cps-qr-box .title,.cps-qr-box .txt{font-size:15px;color:#666}</style><div class=page-content><div class=cps-qr-box><div class=title>请好友扫描以下二维码</div><div class=pic><img src="' + (null == (__t = data.inviterCodeUrl) ? "" : __t) + '"></div><div class=txt>好友通过您的邀请<br>可获得乐车邦300元保养抵用券</div></div></div>';
			return __p
		}
	}), define("controller/user/invite_qrcode", ["PageView", "textuserInviteQrcodeHtml"], function(t, e) {
		var i = t.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "二维码邀请"
					}
				})
			},
			ajax: function() {
				var t = {
					url: "inviter/getInviter"
				};
				return t
			},
			onShow: function(t) {
				this.$el.html(this.template(e, {
					data: t
				}))
			},
			events: {
				"click .class": function(t) {
					$(t.currentTarget);
					alert("单击")
				}
			}
		});
		return i
	}), define("textshopListHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				__p += '<style>.pub-overlay2{display:none;background:rgba(0,0,0,.7);position:fixed;top:0;right:0;bottom:0;left:0;z-index:200}.results-none{width:80%;background-color:#efeff4;text-align:center;border:1px dotted #c7c7cb;border-radius:5px;padding:10px 0;margin:40px auto;color:#999;font-size:15px}.shop-box{margin:10px;padding:10px;background:#fff;border-radius:4px;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2);overflow:hidden}.shop-info-wrap{position:relative}.shop-info-wrap::after{content:"";position:absolute;right:15px;top:50%;display:inline-block;vertical-align:middle;width:10px;height:10px;border-top:0;border-right:0;border-left:1px solid #999;border-bottom:1px solid #999;-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg);-webkit-transform:translate(0,-50%) rotate(-135deg);-ms-transform:translate(0,-50%) rotate(-135deg);transform:translate(0,-50%) rotate(-135deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out}.shop-top img{float:left;width:65px;height:65px;margin-right:10px;border-radius:5px}.shop-info h5{font-size:15px;font-weight:400;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.icon-box .num{color:#07cdd0}.icon-box .tag{padding:1px 2px;border-radius:3px;border:1px solid #ffa36d;color:#ff7d13;font-size:12px}.shop-info{padding-right:30px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.shop-info span{font-size:12px}.shop-calendar{position:fixed;z-index:3;overflow:hidden;background-color:#f7f7f7;left:0;right:0}.sc-item-arrow1:after,.sc-item-arrow-1:after{position:absolute;display:block;content:\'\';border-right:1px solid #999;border-top:1px solid #999;width:8px;height:8px;top:24px}.sc-item-arrow-1:after{left:10px;-webkit-transform:rotate(225deg);-moz-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg)}.sc-item-arrow1:after{right:10px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.arrow-left i{font-size:.2rem}.storeList_content .store-point{color:#07cdd0;font-size:18px}.storeList_content .store-point-unit{color:#07cdd0;font-size:13px}.sc-wrap{border-bottom:1px solid #d5d5d5;height:54px;font-size:13px}.sc-item-last{-webkit-box-flex:4;-moz-box-flex:4;-webkit-flex:4;-ms-flex:4;flex:4;text-align:center;padding:9px 0 0;color:#666}.sc-item{-webkit-box-flex:7;-moz-box-flex:7;-webkit-flex:7;-ms-flex:7;flex:7;text-align:center;border-right:1px solid #d5d5d5;padding:9px 0 0;position:relative;color:#999}.sc-item.current{background:#fff;color:#666}.sc-item-i{font-size:18px;position:relative;top:-8px;color:#9b9b9b}.in-cion-color{color:#a1a1a2}.pub-bar-nav li{padding-top:30px;position:relative;cursor:pointer;opacity:0.8;font-size:15px;padding-bottom:4px}.shop-box .preferential{border-top:35px solid #ff5c41;border-left:35px solid transparent;top:-10px;right:-10px;position:absolute}.shop-box .preferential-tips{position:absolute;top:-31px;left:-25px;line-height:18px;font-size:12px;color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.shop-box .shop-address{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;max-width:95%;color:#999}</style><div class=page-top style=background:#f7f7f7><div class="flex-wrap sc-wrap">';
				var index, weeks = [0, "周一", "周二", "周三", "周四", "周五", "周六", "周日"];
				_.find(price, function(t, e) {
					return t.effectDateStr === query.effectDate ? (index = e, !0) : void 0
				});
				for (var count = -1; 2 > count; count++) {
					var item = price[index + count],
						cls = "";
					cls = 0 == count ? " js-calendar current" : item ? " sc-item-arrow" + count + " js-date" : " disabled", __p += "\n        ", __p += item ? '<div class="sc-item' + (null == (__t = cls) ? "" : __t) + '" data-date="' + (null == (__t = item.effectDateStr) ? "" : __t) + '">' + (null == (__t = item.effectDateStr.replace(/^[\d]+-/, "")) ? "" : __t) + "<br><span>" + (null == (__t = weeks[item.dayOfWeek]) ? "" : __t) + "</span></div>" : '<div class="sc-item disabled"></div>', __p += "\n        "
				}
				__p += '<div class="sc-item-last js-calendar"><div style=margin-bottom:2px;color:#999>日历</div><i class="iconfont sc-item-i">&#xe60b;</i></div></div><div class=shop-tip-bar><i class=iconfont>&#xe609;</i>过期退 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=iconfont>&#xe609;</i>随时退</div></div><div class=page-content><div style="height: ', print(hasPromotion ? "55" : "90"), __p += 'px;"></div><div class="storeList_content font-xs">', _.each(shop, function(t) {
					function e(t) {
						print(t.replace(i, ""))
					}
					if (__p += '<div class="shop-box js-shop" data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class="shop-info-wrap js-detail"><div class="shop-top " style=float:left>', t.storeImages && t.storeImages.length && (__p += '<img src="' + (null == (__t = t.storeImages[0].imgUrl) ? "" : __t) + '" alt="' + (null == (__t = t.storeImages[0].imgDes) ? "" : __t) + '">'), __p += "\n      ", t.isUsePrivateVoucher && (__p += "<span class=preferential><em class=preferential-tips>特惠</em></span>"), __p += "</div><div class=shop-info><h5>" + (null == (__t = t.storeNickName) ? "" : __t) + "</h5>", t.overallScoreAvg && (__p += "<span class=store-point>" + (null == (__t = t.overallScoreAvg) ? "" : __t) + "</span><span class=store-point-unit>分</span>"), __p += "<div class=shop-address>", t.distance && (__p += "\n            " + (null == (__t = templateApi.distance(t.distance)) ? "" : __t) + "\n          "), __p += "\n          " + (null == (__t = t.address) ? "" : __t) + "</div></div></div>", t.timePrices && t.timePrices.length) {
						__p += "<div style=clear:both;height:0.08rem></div><div class=shop-price-top style=margin-top:0>全天4S店指导价<span class=price><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(t.timePrices[0].oriPrice)) ? "" : __t) + "</span></div><div class=shop-book-in>";
						var i = /:[\d]+$/;
						__p += "\n      ", _.each(t.timePrices, function(t) {
							query.mtnSaleAmount && t.salePrice != query.mtnSaleAmount || (__p += '<div class="shop-booking js-shop-time"><div class="time js-time">', e(t.startTimeStr), __p += "-", e(t.endTimeStr), __p += "</div><div class=price><span class=pub-price><dfn>&yen;</dfn>", print(t.isPromotion ? parseInt(t.promotionPrice / 100, 10) : query.mtnSaleAmount ? parseInt(t.salePrice / 100, 10) : parseInt(t.voucheredPrice / 100, 10)), __p += "</span></div>", __p += t.quantity < 3 && t.quantity > 0 && t.isCanOrder ? "<div class=status><span class=limit>紧张</span></div>" : "<div class=status>&nbsp;</div>", __p += "<div class=book>", query.mtnSaleAmount && t.salePrice == query.mtnSaleAmount ? (__p += '<span class="btn-primary', print(t.isCanOrder ? " js-book" : " disabled"), __p += '" data-id="' + (null == (__t = t.quoteRuleId) ? "" : __t) + '" data-url="book/edit" data-ajax>修改</span>') : (__p += '<span class="btn-primary', print(t.isCanOrder ? " js-book" : " disabled"), __p += '" data-id="' + (null == (__t = t.quoteRuleId) ? "" : __t) + '" data-activityid="', t.isPromotion && print(t.activityId), __p += '" data-strategyid="', t.isPromotion && print(t.strategyId), __p += '" data-ajax>预订</span>'), __p += "</div></div>")
						}), __p += "</div>"
					}
					__p += "</div>"
				}), __p += '</div><div style=height:50px>&nbsp;</div></div><footer class=page-bottom><ul class=pub-bar-nav><li class=js-filter data-show=js-filter-area><i class="nav-icon iconfont">&#xe606;</i>区域</li><li class="js-filter active" data-show=js-filter-time><i class="nav-icon iconfont">&#xe603;</i>时段</li></ul></footer><div class=js-filter-area style=display:none><ul class="pub-radio-list pub-radio-list--text-center"><li class="js-filter-area-item active">不限</li>', _.each(locations, function(t) {
					__p += '<li class=js-filter-area-item data-id="' + (null == (__t = t.id) ? "" : __t) + '">' + (null == (__t = t.name) ? "" : __t) + "</li>"
				}), __p += '</ul></div><div class=js-filter-time style=display:none><ul class="pub-radio-list pub-radio-list--text-center js-filter-time"><li class="js-filter-time-item active" data-time=1>全部时段</li><li class=js-filter-time-item>09:00-13:00</li><li class=js-filter-time-item>13:00-17:00</li><li class=js-filter-time-item>17:00-21:00</li></ul></div>'
			}
			return __p
		}
	}), define("controller/shop/list", ["textshopListHtml", "PageView", "session", "local", "dateUtil", "user", "carModel", "geolocation", "UIFooterSlide"], function(t, e, i, n, a, r, o, s, l) {
		var c = e.extend({
			events: {
				"click .js-date": "dateAction",
				"click .js-detail": "detailAction",
				"click .js-book": "bookAction",
				"click .js-filter": "filterShowAction",
				"click .js-calendar": "calendarAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "4S店选择"
					},
					right: [{
						text: '<i class="iconfont">&#xe60a;</i>',
						callback: function() {
							app.goBack("")
						}
					}]
				}), this.oil = i.get("oil"), this.position = s.getPostion(), this.query.cityId || (this.query.cityId = this.position.cityId);
				var t = i.get("effectDate");
				t ? this.query.effectDate = t : this.query.effectDate || (this.query.effectDate = app.dateFormat(a.now() + 864e5, "yyyy-mm-dd"))
			},
			ajax: function() {
				var t = this.query.itemList.split(","),
					e = {
						url: "shop/getStroeForDistance",
						data: {
							cityId: this.query.cityId,
							effectDate: this.query.effectDate,
							brandTypeId: this.query.brandTypeId,
							maintenancePlanId: this.query.maintenancePlanId,
							oilInfoId: this.oil.oilInfoId,
							itemList: t,
							isReadNinety: 1
						}
					};
				this.position.location && (e.data.lat = this.position.location.lat, e.data.lon = this.position.location.lng);
				var i = o.placeGetPlaceInfo(this.query.cityId),
					n = {
						url: "shop/getMinPriceOfMaintenance",
						data: {
							cityId: this.query.cityId,
							brandTypeId: this.query.brandTypeId,
							maintenancePlanId: this.query.maintenancePlanId,
							oilInfoId: this.oil.oilInfoId,
							itemList: t
						},
						session: !0,
						expires: "2M"
					};
				return [e, i, n]
			},
			onShow: function(e, i, n) {
				var r = [];
				_.each(e.storeDetailResults, function(t) {
					for (var e = 0, n = i.length; n > e; e++) {
						var a = i[e];
						if (t.loacationId == a.id) {
							var o = _.find(r, function(e) {
								return e.id == t.loacationId
							});
							o || r.push(a);
							break
						}
					}
				});
				var o = this.query.mtnSaleAmount;
				o && _.each(n, function(t) {
					t.minPrice = o
				});
				var s = new Date(a.now());
				s.setHours(0, 0, 0, 0);
				var l = this,
					c = e.storeDetailResults;
				this.query.storeId && (c = _.filter(e.storeDetailResults, function(t) {
					return t.id == l.query.storeId
				}));
				var d = this.template(t, {
					shop: c,
					price: n,
					query: this.query,
					today: s.getTime(),
					locations: r,
					hasPromotion: !1
				});
				this.model = {
					storeDetailResults: e.storeDetailResults,
					storeListMinPrices: n
				}, this.$el.html(d), this.footer1 = null, this.footer2 = null, this.footer2 && this.footer2.$("li").removeClass("active").eq(0).addClass("active")
			},
			filterShowAction: function(t) {
				var e = $(t.currentTarget).attr("data-show"),
					i = this;
				"js-filter-area" == e ? (this.footer1 || (this.footer1 = new l({
					template: this.$("." + e).html(),
					appendElement: this.el,
					events: {
						"click li": function(t) {
							i.areaFilterAction(t), this.hide()
						}
					}
				})), this.footer1.show()) : (this.footer2 || (this.footer2 = new l({
					template: this.$("." + e).html(),
					appendElement: this.el,
					events: {
						"click li": function(t) {
							i.timeFilterAction(t), this.hide()
						}
					}
				})), this.footer2.show())
			},
			dateAction: function(t) {
				var e = $(t.currentTarget),
					i = e.data("date");
				this.reload({
					effectDate: i
				})
			},
			calendarAction: function() {
				var t = [];
				_.each(this.model.storeListMinPrices, function(e) {
					t.push(_.omit(e, "minPrice"))
				}), i.set("price_calendar", t), app.goTo("shop/calendar?date=" + this.query.effectDate)
			},
			detailAction: function(t) {
				var e = $(t.currentTarget),
					i = e.parents(".js-shop").data("id"),
					n = {
						storeId: i,
						effectDate: this.query.effectDate,
						maintenancePlanId: this.query.maintenancePlanId,
						brandTypeId: this.query.brandTypeId,
						itemList: this.query.itemList
					};
				this.query.mtnSaleAmount && (n.mtnSaleAmount = this.query.mtnSaleAmount), app.goTo("shop/detail?" + $.param(n))
			},
			bookAction: function(t) {
				var e = $(t.currentTarget),
					n = e.parents(".js-shop"),
					a = n.data("id"),
					r = e.data("id"),
					s = e.data("activityid"),
					l = e.data("strategyid"),
					c = {
						date: this.query.effectDate
					},
					d = this;
				s && l && (c.activityId = s, c.strategyId = l), this.getOrderTime(r, this.query.effectDate, function(t) {
					var n = o.filterCanOrderTime(t);
					if (n.length) {
						c = $.param(c), d.setShop(a, r);
						var s = e.data("url") || "book/index";
						i.set("order_times", n), i.remove("book_form"), app.goTo(s + "?" + c)
					} else app.alert("工位不足，请换一个时间点"), e.addClass("disabled").removeClass("js-book")
				})
			},
			getOrderTime: function(t, e, i) {
				app.ajax({
					url: "shop/getShopTimeOrderRule",
					data: {
						quoteRuleId: t,
						orderDate: e
					},
					success: i
				})
			},
			areaFilterAction: function(t) {
				var e = $(t.currentTarget),
					i = e.attr("data-id"),
					n = this.$(".js-shop").hide();
				i ? _.each(this.model.storeDetailResults, function(t) {
					t.loacationId == i && n.filter('[data-id="' + t.id + '"]').show()
				}) : n.show(), e.parent().find(".active").removeClass("active"), e.addClass("active")
			},
			timeFilterAction: function(t) {
				var e = $(t.currentTarget),
					i = this.$(".js-shop-time").hide();
				if (e.attr("data-time")) i.show();
				else {
					var n = e.html().trim().split("-");
					i.each(function() {
						var t = $(this),
							e = t.find(".js-time").html().trim().split("-"),
							i = a.compareTime(e[0], n[0]),
							r = a.compareTime(e[0], n[1]);
						2 != i && 1 != r ? t.show() : (i = a.compareTime(e[1], n[0]), r = a.compareTime(e[1], n[1]), 2 != i && 1 != r && t.show())
					})
				}
				e.parent().find(".active").removeClass("active"), e.addClass("active")
			},
			setShop: function(t, e) {
				var n = _.find(this.model.storeDetailResults, function(e) {
						return e.id == t
					}),
					a = _.find(n.timePrices, function(t) {
						return t.quoteRuleId == e
					});
				i.set("current_shop", n), i.set("current_shop_rule", a)
			}
		});
		return c
	}), define("textUICalendarHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "<style>.calendar-box{padding:10px 0;background-color:#fff}.calendar-item{width:100%}.calendar-item caption{padding-bottom:10px;font-size:18px;color:#787781;text-align:center}.calendar-item th{font-size:18px;font-size:15px;color:#b7bdc9;font-weight:400;text-align:center;width:14.285714285714285714285714285714%}.calendar-item td{padding:10px 0 15px;text-align:center;vertical-align:top}.calendar-item td em{display:inline-block;width:32px;height:32px;border-radius:50%;text-align:center;line-height:32px;border:1px solid #dbdfe6;font-size:18px;font-weight:400;overflow:hidden;font-style:normal}.calendar-item td.day2 em{font-size:13px;color:#07cdd0;border:1px solid #b4f0f1}.calendar-item td.day3 em{font-size:13px}.calendar-item td span{display:block;font-size:13px;color:#fd7a17}.calendar-item td span dfn{font-size:12px;padding-right:0}.calendar-item td.gray em{color:#ccc;border:1px solid #ccc}.calendar-item td.gray span{display:none}.calendar-item td.current em{background-color:#53e7e9;border:1px solid #07cdd0;color:#fff}</style>", _.each(months, function(t) {
				if (!(calendar.showDays >= calendar.options.days.length)) {
					__p += "<table class=calendar-item><caption>" + (null == (__t = t.year) ? "" : __t) + "年" + (null == (__t = t.month + 1) ? "" : __t) + "月</caption><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>";
					for (var e = new Date(t.year, t.month), i = e.getDay(), n = 0; n < t.days + i; n++) 0 == n ? print("<tr>") : n % 7 == 0 && print("</tr><tr>"), print(i > n ? "<td></td>" : calendar.getDayTemplate(t.year, t.month, n + 1 - i));
					__p += "</table>"
				}
			}), __p += "";
			return __p
		}
	}), define("textUICalendarDayHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "<td ", date && (__p += 'data-date="' + (null == (__t = date) ? "" : __t) + '" '), __p += "", cls && print('class="' + cls + '"'), __p += "><em>" + (null == (__t = text) ? "" : __t) + "</em>", price && (__p += "<span><dfn>&yen;</dfn>" + (null == (__t = templateApi.price(price)) ? "" : __t) + "</span>"), __p += "</td>";
			return __p
		}
	}), define("UICalendar", ["UIAbstract", "textUICalendarHtml", "textUICalendarDayHtml", "dateUtil"], function(t, e, i, n) {
		var a = t.extend({
			options: {
				monthsNum: 2,
				solarHoliday: {
					"0101": "元旦",
					"0214": "情人节",
					"0405": "清明",
					"0501": "劳动节",
					"0601": "儿童节",
					"0910": "教师节",
					1001: "国庆",
					1225: "圣诞节"
				},
				days: [],
				callback: _.noop
			},
			events: {
				"click .js-price": "dayAction"
			},
			attributes: {
				"class": "calendar-box"
			},
			_create: function() {
				var t = new Date(n.now()),
					i = this;
				t.setHours(0, 0, 0, 0), this.now = t.getTime();
				var a = this.options;
				a.startTime || (a.startTime = t), this._days = {}, _.each(a.days, function(t) {
					var e = new Date(t.effectDateStr);
					e.setHours(0, 0, 0, 0), i._days[e.getTime()] = t.minPrice
				}), a.months = [];
				for (var r = new Date(a.startTime), o = r.getMonth(), s = r.getFullYear(), l = 0; l < a.monthsNum; l++) 12 == o && (o = 0, s += 1), a.months.push({
					year: s,
					month: o,
					days: n.getDaysInMonth(s, o)
				}), o++;
				a.selected && ("string" == typeof a.selected && (a.selected = [a.selected]), _.each(a.selected, function(t) {
					var e = new Date(t);
					e.setHours(0, 0, 0, 0), e = e.getTime(), i.selectedTime ? i.selectedTime.push(e) : i.selectedTime = [e]
				})), this.showDays = 0;
				var c = this.template(e, {
					months: a.months,
					calendar: this
				});
				this.$el.html(c)
			},
			getDayDesc: function(t, e, i) {
				var a = 864e5,
					r = new Date(t, e, i),
					o = r.getTime(),
					s = this._days[o],
					l = {
						text: i,
						price: s ? s : 0,
						date: ""
					};
				if (this._days.hasOwnProperty(o) ? (this.showDays++, l.cls = "js-price ") : l.cls = "gray ", o < this.now) return l.text = i, l;
				if (l.date = app.dateFormat(r, "yyyy-mm-dd"), this.selectedTime && -1 != this.selectedTime.indexOf(o) && (l.cls += "current "), this.now == o) return l.text = "今天", l.cls += "day2", l;
				if (this.now + a == o) return l.text = "明天", l.cls += "day2", l;
				if (this.now + 2 * a == o) return l.text = "后天", l.cls += "day2", l;
				e = n.parseNumber(e + 1), i = n.parseNumber(i);
				var c = this.options.solarHoliday[e + "" + i];
				return c ? (l.text = c, l.cls += "day3", l) : l
			},
			getDayTemplate: function(t, e, n) {
				var a = this.getDayDesc(t, e, n),
					r = this.template(i, a);
				return r
			},
			dayAction: function(t) {
				var e = $(t.currentTarget);
				this.options.callback.call(this, {
					date: e.data("date"),
					target: e
				})
			}
		});
		return a
	}), define("controller/shop/calendar", ["UICalendar", "PageView", "session"], function(t, e, i) {
		var n = e.extend({
			onCreate: function() {
				this.header.option({
					center: {
						text: "低价日历"
					}
				}), this.$el.html('<div class="page-content"></div>'), this.calendar = new t({
					appendElement: this.$(".page-content"),
					days: i.get("price_calendar"),
					monthsNum: 4,
					selected: this.query.date,
					callback: function(t) {
						i.set("effectDate", t.date), app.goBack()
					}
				})
			}
		});
		return n
	}), define("textshopDetailHtml", [], function() {
		return function(obj) {
			function trimTime(t) {
				print(t.replace(reg, ""))
			}
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) {
				__p += '<style>.shop-box{margin:10px;padding:10px;background:#fff;border-radius:4px;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2)}.service-bom{padding:10px;font-size:13px;background:rgba(255,255,255,0.9);text-align:center;border-top:1px solid #e2e2e2;max-height:99px}.service-bom .pub-button{margin:10px 0 18px}.shop-carlist{color:#666;margin-top:10px 0 0;padding:10px 20px;font-size:12px;background-color:#fff}.shop-carlist h3{font-size:12px}.shop-detail-intro .img-box{position:absolute;right:20px;top:10px;width:70px}.shop-detail-intro .img-box img{width:70px;height:70px;border-radius:3px}.shop-detail-intro .img-box span{position:absolute;width:100%;bottom:0;left:0;height:20px;line-height:20px;background:rgba(0,0,0,.5);text-align:center;color:#fff;border-radius:0 0 3px 3px}.shop-detail-intro h1{font-size:16px;line-height:20px}.shop-detail-intro .common{margin-bottom:5px}.shop-detail-intro .common a{color:#07cdd0}.shop-detail-intro .common .weaken{color:#666}.shop-detail-intro .num{color:#666}.shop-detail-intro .num span{white-space:nowrap}.shop-detail-intro .detail-main{padding:10px 90px 10px 20px;background:#fff;min-height:70px;position:relative;border-width:0 0 1px 0;border-style:solid;border-color:#ddd;border-image:url(ddata:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;-webkit-border-image:url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch}.shop-detail-intro .line-item{padding:0}.shop-detail-intro .sales{font-size:12px;color:#ff7d13}.shop-detail-intro .sales span{font-size:15px}.icon-box .store-point{color:#07cdd0;font-size:.18rem}.icon-box .store-point-unit{color:#07cdd0}.comment-list-detail{color:#666;background-color:#fff;margin:.1rem 0;padding:.1rem 0 .1rem .2rem}.comment-list-detail .comment-more-arrow{border-left:1px solid #adadad;border-top:1px solid #adadad;width:.10rem;height:.10rem;transform:rotate(135deg);top:35%;position:absolute;-webkit-transform:rotate(135deg)}.comment-list-detail .comment-rank-detail,.detail-main .iconfont{color:#ececec;font-size:.18rem}.comment-list-detail .comment-rank-detail .active,.detail-main .active{color:#ff9e2a}.comment-list-detail li{border-top:1px solid #f0f0f0;padding:3px 16px 3px 0}.comment-list-detail ul{margin-top:5px}.detail-main .discount-num{font-size:.18rem;color:#ff7d13}.detail-main .discount-unit{color:#ff7d13}.detail-main .store-point{color:#07cdd0;font-size:.18rem}.detail-main .store-point-unit{color:#07cdd0}.shop-detail-intro .icon-nomsg{font-size:.15rem;text-align:center;background-color:#fff;color:#d8d5d0;margin-bottom:.2rem;margin-top:10px;border-bottom:1px solid #e8e8ed}.shop-detail-intro .icon-nomsg .iconfont{font-size:1rem}.clearfix{padding:0.05rem 0;font-size:.14rem}</style><div class="page-content shop-detail-intro"><div class=detail-main>', storeImages && storeImages.length && (__p += '<div class="img-box js-picture"><img src="' + (null == (__t = storeImages[0].imgUrl) ? "" : __t) + '" alt="' + (null == (__t = storeImages[0].imgDes) ? "" : __t) + '"><span>' + (null == (__t = storeImages.length) ? "" : __t) + "张</span></div>"), __p += "<h1>" + (null == (__t = storeNickName) ? "" : __t) + "</h1><div class=icon-box>", overallScoreAvg && (__p += "<span class=store-point>" + (null == (__t = overallScoreAvg) ? "" : __t) + '</span><span class="store-point-unit font-xs">分</span>'), __p += '<i class=icon-wifi></i></div></div><div class=bg-white><ul class="line-lists-icon line-lists-arrow"><li class=item><a href="tel:' + (null == (__t = telephone) ? "" : __t) + '" style=display:block><i class=iconfont>&#xe60e;</i>' + (null == (__t = telephone) ? "" : __t) + '</a></li><li class="item js-map"><i class=iconfont>&#xe607;</i>' + (null == (__t = templateApi.distance(distance)) ? "" : __t) + " " + (null == (__t = address) ? "" : __t) + "</li></ul></div>", hasPromotion || (__p += "<div class=shop-tip-bar><i class=iconfont>&#xe609;</i>过期退 &nbsp;&nbsp;&nbsp;&nbsp;<i class=iconfont>&#xe609;</i>随时退</div>"), __p += "\n    ";
				var reg = /:[\d]+$/;
				__p += "\n    ", timePrices.length && (__p += "<div class=shop-price-top>全天4S店指导价<dfn>&yen;</dfn>" + (null == (__t = templateApi.price(timePrices[0].oriPrice)) ? "" : __t) + "</div>"), __p += "\n    ", _.each(timePrices, function(t) {
					mtnSaleAmount && t.salePrice != mtnSaleAmount || (__p += '<div class=shop-box style=margin:0><div class=shop-booking><div class="time js-time">', trimTime(t.startTimeStr), __p += "-", trimTime(t.endTimeStr), __p += "</div><div class=price><span class=pub-price><dfn>&yen;</dfn>", print(t.isPromotion ? parseInt(t.promotionPrice / 100, 10) : mtnSaleAmount ? parseInt(t.salePrice / 100, 10) : parseInt(t.voucheredPrice / 100, 10)), __p += "</span></div>", __p += t.quantity < 3 && t.quantity > 0 ? "<div class=status><span class=limit>紧张</span></div>" : "<div class=status>&nbsp;</div>", __p += "\n\n             ", mtnSaleAmount && t.salePrice == mtnSaleAmount ? (__p += '<span class="btn-primary', print(t.isCanOrder ? " js-book" : " disabled"), __p += '" data-id="' + (null == (__t = t.quoteRuleId) ? "" : __t) + '" data-url="book/edit">修改</span>') : (__p += '<div class=book><span class="btn-primary', print(t.isCanOrder ? " js-book" : " disabled"), __p += '" data-id="' + (null == (__t = t.quoteRuleId) ? "" : __t) + '" data-activityid="', t.isPromotion && print(t.activityId), __p += '" data-strategyid="', t.isPromotion && print(t.strategyId), __p += '">预订</span></div>'), __p += "</div></div>")
				}), __p += "\n  ", comments && comments.list && comments.list.length ? (__p += '<div class="comment-list-detail font-xs"><div class="js-comments-more clearfix" style=position:relative>车主点评(' + (null == (__t = comments.page.totalCount) ? "" : __t) + ")<span style=float:right;margin-right:.26rem>更多<i class=comment-more-arrow></i></span></div><ul>", _.each(comments.list, function(t) {
					if (__p += "<li><div class=comment-phone><span>" + (null == (__t = t.contactUserMobile) ? "" : __t) + "</span><span style=float:right>", print(app.dateFormat(t.createdTime, "yyyy-mm-dd HH:MM")), __p += "</span></div><div class=comment-rank-detail>", t.overallScore) {
						for (var e = 1; e <= Math.floor(t.overallScore); e++) __p += '<i class="iconfont  active">&#xe626;</i>';
						for (var e = Math.floor(t.overallScore); 5 > e; e++) __p += "<i class=iconfont>&#xe626;</i>"
					}
					__p += "</div><div class=comment-detail>", __p += t.content ? "\n            " + (null == (__t = t.content) ? "" : __t) + "\n          " : "<span style=color:#d2d2d2>车主很忙，没有留下任何文字</span>", __p += "</div></li>"
				}), __p += "</ul></div>") : __p += "<div class=icon-nomsg><i class=iconfont style=font-size:0.8rem;margin-top:-0.2rem;display:inline-block>&#xe625;</i><div style=margin-top:-10px;padding-bottom:5px>还没有人评论过这家店</div></div>", __p += "</div>"
			}
			return __p
		}
	}), define("controller/shop/detail", ["textshopDetailHtml", "PageView", "session", "user", "geolocation", "carModel"], function(t, e, i, n, a, r) {
		var o = e.extend({
			events: {
				"click .js-picture": "pictureAction",
				"click .js-book": "bookAction",
				"click .js-map": "mapAction",
				"click .js-comments-more": "moreComments"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "4S店详情"
					}
				})
			},
			ajax: function() {
				var t = a.getPostion(),
					e = {
						url: "shop/getMaintenancePriceOfStore",
						data: {
							storeId: this.query.storeId,
							effectDate: this.query.effectDate,
							maintenancePlanId: this.query.maintenancePlanId,
							oilInfoId: i.get("oil").oilInfoId,
							brandTypeId: this.query.brandTypeId,
							itemList: this.query.itemList.split(",")
						}
					},
					n = r.getUserComments(this.query.storeId, 1, 3);
				return t.location && (e.data.lat = t.location.lat, e.data.lon = t.location.lng), [e, n]
			},
			onShow: function(e, n) {
				e.comments = n, e.mtnSaleAmount = this.query.mtnSaleAmount, e.hasPromotion = this.hasPromotion(e);
				var a = this.template(t, e);
				this.$el.html(a), i.set("shop_detail", e), this.shop = e
			},
			pictureAction: function() {
				app.goTo("shop/picture")
			},
			mapAction: function() {
				app.goTo("shop/map")
			},
			bookAction: function(t) {
				var e = $(t.currentTarget),
					n = e.data("id"),
					a = {
						date: this.query.effectDate
					},
					o = e.data("activityid"),
					s = e.data("strategyid"),
					l = this;
				o && s && (a.activityId = o, a.strategyId = s), this.getOrderTime(n, this.query.effectDate, function(t) {
					var o = r.filterCanOrderTime(t);
					if (o.length) {
						a = $.param(a), l.setShop(n);
						var s = e.data("url") || "book/index";
						i.set("order_times", o), i.remove("book_form"), app.goTo(s + "?" + a)
					} else app.alert("工位不足，请换一个时间点"), e.addClass("disabled").removeClass("js-book")
				})
			},
			getOrderTime: function(t, e, i) {
				app.ajax({
					url: "shop/getShopTimeOrderRule",
					data: {
						quoteRuleId: t,
						orderDate: e
					},
					success: i
				})
			},
			setShop: function(t) {
				var e = _.find(this.shop.timePrices, function(e) {
					return e.quoteRuleId == t
				});
				i.set("current_shop", this.shop), i.set("current_shop_rule", e)
			},
			hasPromotion: function(t) {
				var e = !1;
				return _.each(t.timePrices, function(t) {
					t.isPromotion && (e = !0)
				}), e
			},
			moreComments: function() {
				app.goTo("comment/detail?id=" + this.query.storeId)
			}
		});
		return o
	}), define("textshopPictureHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.photo-list ul{padding:0;margin:5px 0 0}.photo-list li{width:50%;display:inline-block;margin-right:-4px;padding:0}.photo-list li:last-of-type{margin-bottom:0}.photo-list li img{width:100%;border-radius:.04rem}.photo-list .pic{padding:.045rem 3%;display:inline-block;width:95%}.swipe-box{overflow:hidden;background-color:#303030;height:100%;display:none}.swipe-box .swipe-item{color:#fff;float:left;position:relative;height:inherit;display:inline-block}.swipe-box .swipe-item img{display:block;width:100%;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);--moz-transform:translateY(-50%);position:absolute;max-height:80%}.photo-show{display:none;position:relative}.swipe-box.active{display:inline-block;position:fixed;top:0;left:0;right:0;bottom:0;background-color:#303030}.swipe-box .swipe-navindex{color:#e0e0e0;text-align:center;width:100%;font-size:.18rem;position:absolute;bottom:1rem}.swipe-box .icon-loading-circle{background-image:url(https://img01.lechebangstatic.com/webapp/bg-global.png);background-repeat:no-repeat;-webkit-background-size:240px auto;background-size:240px auto;vertical-align:middle;width:38px;display:inline-block;height:38px;animation:loading 0.8s linear infinite;-webkit-animation:loading 0.8s linear infinite;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:44%}</style><div class="page-content photo-list"><ul>', _.each(pics, function(t) {
				__p += '<li><div class="pic js-show"><img src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt="' + (null == (__t = t.imgDes) ? "" : __t) + '"></div></li>'
			}), __p += "</ul></div>";
			return __p
		}
	}), define("textimageShow", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div class="swipe-box  active"><div class=swipe-wrapper>', _.each(picsOriginal, function(t) {
				__p += '<div class=swipe-item><i class=icon-loading-circle></i><img data-src="' + (null == (__t = t.imgUrl) ? "" : __t) + '" alt="' + (null == (__t = t.imgDes) ? "" : __t) + '"></div>'
			}), __p += "</div><div class=swipe-navindex></div></div>";
			return __p
		}
	}), define("controller/shop/picture", ["textshopPictureHtml", "PageView", "session", "UISlideshow2", "prefix", "textimageShow"], function(t, e, i, n, a, r) {
		var o = e.extend({
			events: {
				"click .js-show": "imgShow"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "4S店照片"
					}
				}), this.detail = i.get("shop_detail");
				var e;
				e = this.detail ? this.detail.storeImages || this.detail.storeOriginalImages : [];
				var n = this.template(t, {
					pics: e
				});
				this.$el.html(n)
			},
			onShow: function() {
				var t = (this.detail.storeOriginalImages || this.detail.storeImages, document.querySelector("body"));
				this.screenWidth = t.getBoundingClientRect() ? t.getBoundingClientRect().width : document.documentElement.width
			},
			imgShow: function(t) {
				var e = 0,
					i = this.$(t.currentTarget).parent("li").index(),
					a = this.detail.storeOriginalImages || this.detail.storeImages,
					o = this.template(r, {
						picsOriginal: a
					});
				this.$el.append(o), a && (e = a.length + 2), this.$(".swipe-wrapper").css({
					width: this.screenWidth * e + "px",
					height: "100%"
				}), new n({
					el: this.$(".swipe-box")[0],
					wrapperClass: "swipe-wrapper",
					itemClass: "swipe-item",
					index: i + 1,
					events: {
						"click .swipe-wrapper": "remove"
					},
					swipeEnd: function() {
						var t = this.$(".swipe-item").eq(this.options.index).find("img"),
							i = t.attr("data-src");
						i && t.attr({
							src: i,
							"data-src": null
						}), this.$(".swipe-navindex").html(this.options.index + "/" + (e - 2))
					}
				})
			}
		});
		return o
	}), define("textshopMapHtml", [], function() {
		return "<style>#merchantMap .pub-content{height:100%}#l-map{width:100%;overflow:hidden;margin:0}.map-name{font-size:14px;color:#333;border:1px solid #d9d9de;border-radius:5px;left:0!important;top:0!important}.map-name-box{background-color:#fff;border-radius:5px;overflow:hidden}.map-name-box{border-radius:0}.map-name td{padding:5px 8px}.map-name td p{font-size:12px;color:#666}.map-name td.dh{width:60px;text-align:center;background-color:#333;color:#fff}.map-name td.dh i{font-size:20px;vertical-align:baseline}.map-name.az{left:0;right:0;top:0;width:100%;border-radius:0}.map-name.az .map-name-box{border-radius:0;background-color:rgba(255,255,255,.95)}.map-name.az b{display:none}.map-name.az td{font-size:15px}.map-name.az td p{font-size:13px}.map-name.az td.dh{font-size:16px}</style><div id=l-map class=page-content></div>"
	}), define("controller/shop/map", ["textshopMapHtml", "PageView", "session", "geolocation"], function(t, e, i, n) {
		function a(t) {
			var e = document.createElement("script");
			e.src = t, document.body.appendChild(e)
		}

		function r(t) {
			this._point = t
		}

		function o() {
			function t() {
				l.isVisible() ? l.hide() : l.show()
			}
			if ($("#l-map").length) {
				app.hideLoading();
				var e = new BMap.Map("l-map"),
					i = new BMap.Point(s.lonBd, s.latBd),
					a = new BMap.Icon(config.imgCdnRoot + "shop/location.png", new BMap.Size(130, 130)),
					o = new BMap.Marker(i, {
						icon: a
					});
				e.centerAndZoom(i, 14), e.addOverlay(o), r.prototype = new BMap.Overlay, r.prototype.initialize = function(t) {
					this._map = t;
					var e = $('<div class="page-top map-name"></div>');
					this._div = e;
					var i = '<div class="map-name-box"><table width="100%"><tr><td>' + s.storeNickName + "<p>" + s.address + templateApi.distance(s.distance) + '</p></td><td class="dh js-navigate"><i class="iconfont">&#xe61f;</i>导航</td></tr></table></div>';
					return e.html(i), e.prependTo(app.currentPage.el), e.find(".js-navigate").on("click", function(t) {
						t.stopPropagation(), $.os.lechebang && app.nativeApi.has("map.navigator") ? wvjb.callHandler("map.navigator", {
							latitude: s.latBd,
							longitude: s.lonBd
						}, function(t) {
							t.state && "fail" == t.state && n.startPosition(function() {
								app.goTo("shop/navigation")
							}, function() {
								app.hint("您拒绝了位置共享")
							})
						}) : n.startPosition(function() {
							app.goTo("shop/navigation")
						}, function() {
							app.hint("您拒绝了位置共享")
						})
					}), e[0]
				}, r.prototype.draw = function() {
					var t = this._map,
						e = t.pointToOverlayPixel(this._point),
						i = this._div.height();
					this._div.css({
						left: e.x - 140,
						top: e.y - i - 25
					})
				};
				var l = new r(i);
				e.addOverlay(l), $.os.ios && o.addEventListener("click", _.throttle(t, 100, {
					trailing: !1
				}))
			}
		}
		var s;
		window.mapInitialize = o;
		var l = e.extend({
			onCreate: function() {
				this.header.option({
					center: {
						text: "地图导航"
					}
				});
				var e = i.get("shop_detail"),
					n = this.template(t, e);
				this.$el.html(n), s = e
			},
			onShow: function() {
				this.$("#l-map").css("height", $("body").height() - 50), "undefined" == typeof BMap ? (app.showLoading(), a("//api.map.baidu.com/api?ak=ZRNVigKzbWK8H1Eb7P0xMnnj&v=2.0&s=1&callback=mapInitialize")) : o()
			}
		});
		return l
	}), define("controller/shop/navigation", ["PageView", "geolocation", "session"], function(t, e, i) {
		var n = t.extend({
			onCreate: function() {
				this.header.option({
					center: {
						text: "导航"
					}
				})
			},
			onShow: function() {
				var t, n = e.getPostion(),
					a = i.get("shop_detail"),
					r = document.createElement("iframe");
				t = n.location ? "//api.map.baidu.com/direction?origin=latlng:" + n.location.lat + "," + n.location.lng + "|name:当前位置&destination=latlng:" + a.latBd + "," + a.lonBd + "|name:" + a.storeNickName + "&mode=driving&region=" + n.addressComponent.city + "&src=xiangtu|lechebang&output=html" : "//api.map.baidu.com/geocoder?location=" + a.latBd + "," + a.lonBd + "&output=html&coord_type=bd09ll&src=xiangtu|lechebang", r.setAttribute("src", t), r.frameBorder = 0, r.width = "100%", r.height = document.body.offsetHeight - $(".pub-header").height(), this.el.appendChild(r)
			}
		});
		return n
	}), define("textfirstDriving", [], function() {
		return '<div style=position:relative class=firstDrivingFreeContent><p class=smqc-img><i class="iconfont closed js-modal-close">&#xe630;</i></p><div class="mfqs "><p style=font-size:16px;font-weight:600>上门取送&nbsp; 首次免费</p><p style=padding-bottom:15px>专属取送员为您提供极致体验</p><a class="mfqs-refuse js-check-driving" data-type=no>免费也不要</a><a class="wyqs js-check-driving" data-type=yes>我要取送</a><br style=clear:both></div></div>'
	}), define("controller/book/index", ["textbookHtml", "textfreeCheckHtml", "textfirstDriving", "PageView", "session", "local", "user", "dateUtil", "UIScreen", "Swipe", "UIScrollList", "geolocation", "validate", "carModel", "UICarNumber", "UIFooterSlide"], function(t, e, i, n, a, r, o, s, l, c, d, p, u, h, f, m) {
		var g = m.extend({
				attributes: {
					"class": "footer-slide",
					style: "bottom:63px;z-index:201"
				}
			}),
			v = n.extend({
				options: {
					redirectCtrl: function(t, e) {
						if (!t) {
							e.beginValidate = 1;
							var i = "book/index?" + $.param(e);
							return "login?to=" + encodeURIComponent(i)
						}
						if (shop = a.get("current_shop"), !shop) {
							var n = a.get("order_info");
							if (n && n.orderId) return "order/result?orderId=" + n.orderId + "&status=50"
						}
					}
				},
				events: {
					"click .js-show-time": "showScrollListAction",
					"click .js-sex": "sexAction",
					"click .js-driving": "drivingAction",
					"click .js-discount": "discountAction",
					"click .js-pay": "payAction",
					"click .js-check": "checkAction",
					"click .js-address": function() {
						this.$(".js-address").toggleClass("txt-all")
					},
					"click .js-driving-item": "goTodrivingAction",
					"click .js-carnumber": "carnumberAction",
					"click .js-filter": "filterShowAction",
					"click .js-driving-switch": "drivingSwitchAction",
					"click .js-go": "goAction"
				},
				onCreate: function() {
					this.header.option({
						center: {
							text: "订单填写"
						}
					});
					var t = {
						car: r._get("car"),
						oil: a.get("oil"),
						plan: a.get("maintenance"),
						shop: shop,
						shopRule: a.get("current_shop_rule")
					};
					this.model = t, this.orderTimes = a.get("order_times")
				},
				ajax: function() {
					var t = this.model,
						e = this.query.date + " " + this.orderTimes[0].startTime;
					e = new Date(e.replace(/-/g, "/")), e = e.getTime() + 6e4;
					var i = {
						url: "mtnorder/matchOrder",
						data: {
							myCarId: t.car.id,
							storeId: t.shop.id,
							maintenanceItem: {
								actualMileage: t.car.mileage,
								appointTime: app.dateFormat(e, "yyyy-mm-dd HH:MM:ss"),
								brandTypeId: t.car.brandTypeId,
								maintenancePlanId: t.plan.plan.id,
								saleAmount: t.shopRule.salePrice,
								oilInfoId: this.model.oil.oilInfoId,
								maintenanceItems: h.getPlanItemsId(this.model.plan)
							}
						}
					};
					return this.query.hasDriving ? (i.data.maintenanceItem.hasDriving = 1, i.data.drivingItem = a.get("book_driving")) : i.data.maintenanceItem.hasDriving = 0, i
				},
				onShow: function(e) {
					if (e.matchPaymentPolicyInfos) {
						var i = (app.referrer, this.model),
							n = e.matchPaymentPolicyInfos,
							r = a.get("book_form");
						if (!r) {
							var s = o.getUserInfo();
							r = {
								carNumber: this.model.car.carNumber,
								mobile: s.user.mobile,
								sex: s.userInfo.gender || 1,
								name: s.userInfo.realName || "",
								time: this.orderTimes[0].startTime.replace(/:\d+$/, "")
							}
						}
						this.model.car.carNumber || (this.model.car.carNumber = f.getDefaultNumber());
						var l = this.getDiscount(n),
							c = "&nbsp;&nbsp;",
							d = this.template(t, {
								maintenanceItemsInfo: JSON.parse(e.maintenanceItemsInfo),
								oil: this.model.oil,
								shop: i.shop,
								shopRule: i.shopRule,
								discount: l,
								hasDriving: this.query.hasDriving,
								paymentPolicy: i.paymentPolicy,
								PaymentPolicyInfo: i.matchPaymentPolicyInfo,
								date: this.query.date,
								car: i.car,
								form: r,
								cityId: p.getPostion().cityId,
								limitCarNoInfo: e.extension.limitCarNoInfo ? e.extension.limitCarNoInfo : "",
								brandTypeFullName: i.car.carTypeName + c + i.car.yearType + c + i.car.name
							});
						this.$el.html(d), this.$(".page-bottom").css("zIndex", 202), this.model.discount = l, this.drivingSwipe()
					}
				},
				getDiscount: function(t) {
					var e, i = this.model,
						n = (_.find(t, function(t) {
							return 2 == t.paymentPolicy
						}), this.query.discountId),
						a = this.query.activityId,
						r = this.query.strategyId;
					return a && r && (e = _.find(t, function(t) {
						return 3 == t.paymentPolicy
					})) ? (i.paymentPolicy = 3, i.matchPaymentPolicyInfo = e, this.withPromotion(e.result)) : -1 == n && (e = _.find(t, function(t) {
						return 2 == t.paymentPolicy
					})) ? (i.paymentPolicy = 2, i.matchPaymentPolicyInfo = e, this.withVoucher(e.result)) : (e = _.min(t, function(t) {
						return t.result.payAmount
					}), 3 == e.paymentPolicy ? discount = this.withPromotion(e.result) : 2 == e.paymentPolicy ? discount = this.withVoucher(e.result) : (e = _.find(t, function(t) {
						return 1 == t.paymentPolicy
					}), discount = this.withDefault(e.result)), i.matchPaymentPolicyInfo = e, i.paymentPolicy = e.paymentPolicy, discount)
				},
				withPromotion: function(t) {
					var e = t.matchRS;
					return delete this.query.discountId, app.goTo("book/index?" + $.param(this.query), {
						replace: !0,
						trigger: !1
					}), this.query.activityId = e.activityId, this.query.strategyId = e.strategyId, e
				},
				withVoucher: function(t) {
					var e, i = (this.model, this.query.discountId);
					return delete this.query.activityId, delete this.query.strategyId, app.goTo("book/index?" + $.param(this.query), {
						replace: !0,
						trigger: !1
					}), a.set("book_discount", t.list), i ? (e = _.find(t.list, function(t) {
						return t.id == i
					}), e || (e = {})) : (e = t.list[0], this.query.discountId = e.id), e
				},
				withDefault: function() {
					return !1
				},
				validatePromotion: function(t, e) {
					e = "undefined" == typeof e ? !0 : !1;
					var i = !0,
						n = this.query.activityId,
						a = this.query.strategyId,
						r = this;
					return n && app.ajax({
						url: "promotion/validate",
						async: e,
						data: {
							orderType: 1,
							placeId: p.getPostion().cityId,
							activityId: n,
							strategyId: a,
							planId: t,
							checkRecommendedPaln: 0,
							retrieveAvailableCount: 1
						},
						success: function(t) {
							2 == t.matchCode ? (app.alert({
								msg: "你来晚了！特价保养已经抢光了！<br>看看其他的，也低至2折哦！",
								btns: [{
									text: "知道了",
									callback: function() {
										this.hide(), 0 == e && app.reload(r)
									}
								}]
							}), i = !1) : 3 == t.matchCode && (app.alert({
								msg: "对不起,每个人限购一次特价保养订单。<br>机会留给别人吧！",
								btns: [{
									text: "知道了",
									callback: function() {
										this.hide(), 0 == e && app.reload(r)
									}
								}]
							}), i = !1)
						}
					}), i
				},
				drivingAction: function(t) {
					var e = $(t.currentTarget);
					e.hasClass("active") ? (this.getValues(), this.reload({
						hasDriving: 0
					}, !1)) : this.goTodrivingAction()
				},
				goTodrivingAction: function() {
					this.getValues();
					var t = $.param(this.query);
					app.goTo("book/driving?" + t)
				},
				discountAction: function() {
					var t = $.param({
						date: this.query.date,
						id: this.query.discountId,
						hasDriving: this.query.hasDriving
					});
					this.getValues(), app.goTo("book/discount?" + t)
				},
				sexAction: function(t) {
					var e = $(t.currentTarget);
					this.$(".js-sex.active").removeClass("active"), e.addClass("active")
				},
				showScrollListAction: function() {
					var t = this.orderTimes,
						e = [],
						i = [],
						n = this,
						a = this.$(".js-time-value").html().trim();
					a = a ? a.split(":") : [], _.each(t, function(t) {
						var i = t.startTime.split(":"),
							n = t.endTime.split(":"); - 1 == e.indexOf(i[0]) && e.push(i[0]), n[0] != i[0] && -1 == e.indexOf(n[0]) && e.push(n[0])
					}), _.each(e, function(t, i) {
						e[i] = {
							text: t,
							value: t
						}
					});
					for (var r = 0; 60 > r; r += 5) i.push({
						text: s.parseNumber(r),
						value: s.parseNumber(r)
					});
					new d({
						appendElement: document.body,
						title: "保养时间",
						group: [e, i],
						selected: a,
						done: function(e) {
							if (s.isValidTime(t, e)) e = e.join(":"), n.$(".js-time-value").html(e), this.hide();
							else {
								e = e.join(":");
								var i = t[t.length - 1].endTime;
								app.alert(1 == s.compareTime(i, e) ? "保养最早时间为" + t[0].startTime : "保养最晚时间为" + i)
							}
						}
					})
				},
				reload: function(t) {
					this.$(".page-bottom").css("zIndex", 100), n.prototype.reload.call(this, t)
				},
				payAction: function(t) {
					var e, i = this.getValues(),
						n = ($(t.currentTarget), this);
					if (e = "undefined" == typeof this.query.hasDriving ? 0 : this.query.hasDriving, !i.time) return void app.alert("请选择保养时间");
					if (!$(".js-car-number").val().trim()) return void app.alert("请输入车牌号后6位");
					if (!u.isCarNumber(i.carNumber)) return void app.alert("车牌号码只能由中文，英文字母，数字组成");
					if (!i.name) return void app.alert("请填写姓名");
					if (!i.sex) return void app.alert("请选择性别");
					if (!i.mobile) return void app.alert("请填写手机号码");
					if (!u.isMobile(i.mobile)) return void app.alert("手机号码格式不对");
					if (this.$(".js-driving.active").length && !e) return void app.alert("请填写取送车信息");
					if (this.orderId) return void app.goTo("order/result?orderId=" + this.orderId + "&status=50", {
						replace: !0
					});
					var l = this.model,
						c = l.shopRule.salePrice;
					if (3 == l.paymentPolicy) {
						var d = this.validatePromotion(l.shopRule.maintenancePlanId, !1);
						if (0 == d) return delete this.query.beginValidate, void app.goTo("book/index?" + $.param(this.query), {
							replace: !0,
							trigger: !1
						})
					}
					e && (c += 5900);
					var p = {
						myCarId: l.car.id,
						carNumber: i.carNumber,
						payAmount: c,
						maintenanceItem: {
							hasDriving: e,
							actualMileage: l.car.mileage,
							appointTime: this.query.date + " " + i.time + ":00",
							contactUserMobile: i.mobile,
							contactUserName: i.name,
							maintenancePlanId: l.shopRule.maintenancePlanId,
							saleAmount: l.shopRule.salePrice,
							brandTypeId: l.car.brandTypeId,
							carBuyDate: l.car.buyDate,
							contactUserGender: i.sex,
							oilInfoId: this.model.oil.oilInfoId,
							maintenanceItems: h.getPlanItemsId(this.model.plan)
						},
						paymentInfo: {
							returnUrl: config.paymentReturnUrl
						},
						paymentPolicy: 1,
						source: {
							allianceId: 1,
							sourceId: 1,
							terminalType: 1,
							terminalVersion: "8.2"
						},
						storeId: l.shop.id
					};
					e && (p.drivingItem = a.get("book_driving")), 2 == l.paymentPolicy && -1 != this.query.discountId && (p.paymentPolicy = l.paymentPolicy, p.voucherInfo = {
						voucherId: l.discount.id,
						amount: l.discount.amount,
						voucherCode: l.discount.voucherCode
					}, p.payAmount = Math.max(0, p.payAmount - l.discount.amount)), 3 == l.paymentPolicy && (p.paymentPolicy = l.paymentPolicy, p.promotionInfo = {
						activityId: l.discount.activityId,
						amount: l.discount.amount,
						strategyId: l.discount.strategyId
					}, p.payAmount = l.matchPaymentPolicyInfo.result.payAmount);
					var f = r.get("spread_info");
					f && (p.spreadInfo = f, p.spreadInfo.createdTime = s.now()), p.paymentInfo.returnUrl += "?" + $.param({
						itemName: "乐车邦保养订单",
						amount: p.payAmount
					}), h.createOrder(p, function(t) {
						var e = o.getUserInfo();
						e && e.userInfo && !e.userInfo.realName && o.setUserInfo({
							userInfo: {
								realName: i.name
							}
						}), n.orderId = t.orderInfo.id, a.remove("current_shop"), a.set("order_info", t.paymentInfo), _.extend(t.paymentInfo, {
							payAmount: p.payAmount,
							itemName: "乐车邦保养订单",
							returnUrl: p.paymentInfo.returnUrl + "&orderId=" + t.orderInfo.id
						}), app.nativeApi.payment(t.paymentInfo)
					}, function(t) {
						return t ? void(4082 == t.statusCode ? app.alert({
							msg: t.msg,
							btns: [{
								text: "确定",
								callback: function() {
									n.goTodrivingAction()
								}
							}]
						}) : 4062 == t.statusCode ? app.alert({
							msg: t.msg,
							btns: [{
								text: "确定",
								callback: function() {
									app.goBack.noCache()
								}
							}]
						}) : 8004 == t.statusCode ? n.reload() : app.alert(t.msg)) : void app.alert("网络出错，请稍后再试...")
					})
				},
				drivingSwipe: function() {
					var t = this;
					new c(this.$(".js-driving"), {
						left: function() {
							this.el.hasClass("active") && (t.getValues(), t.reload({
								hasDriving: 0
							}, !1))
						},
						right: function() {
							this.el.hasClass("active") || t.goTodrivingAction()
						}
					})
				},
				getValues: function() {
					var t = this.$(".js-time-value").html().trim(),
						e = this.$(".js-carnumber-txt").html().trim() + this.$(".js-car-number").val().trim(),
						i = this.$(".js-name").val().trim(),
						n = this.$(".js-mobile").val().trim(),
						r = this.$(".js-sex.active").attr("data-sex"),
						o = {
							time: t,
							carNumber: e,
							name: i,
							mobile: n,
							sex: r
						};
					return o.carNumber = u.carNumber(o.carNumber), a.set("book_form", o), o
				},
				checkAction: function() {
					new l({
						appendElement: document.body,
						title: "保养检测说明",
						msg: e
					})
				},
				carnumberAction: function() {
					var t = this.$(".js-carnumber-txt"),
						e = new f({
							appendElement: document.body,
							data: {
								active: t.html().trim()
							},
							itemCallback: function(e) {
								t.html(e), this.hide()
							}
						});
					e.show()
				},
				filterShowAction: function(t) {
					var e = $(t.currentTarget);
					e.toggleClass("active"), e.hasClass("active") ? (this.priceDetail = new g({
						template: this.$(".js-filter-show").html(),
						appendElement: document.body,
						events: {
							"click li": function() {
								this.hide()
							}
						}
					}), this.priceDetail.on("hide", function() {
						e.removeClass("active")
					}), this.priceDetail.show()) : this.priceDetail.hide()
				},
				goAction: function(t) {
					var e = $(t.currentTarget).attr("data-url");
					app.goTo(e)
				},
				carNumberInputAction: function(t) {
					var e = $(t.currentTarget);
					e.val(e.val().toUpperCase())
				}
			});
		return v
	}), define("textbookDrivingHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += "<style>.driving-price-box{font-size:16px;color:#ccc;text-align:center}.driving-price-box .price{font-size:50px;color:#ff7d13}.driving-price-box .price dfn{font-size:35px}.book-box{padding:10px}.book2-top{margin-bottom:10px;margin-bottom:10px;padding:20px 25px;background:#fff;font-size:15px}.book2-top p{padding-top:5px}.book2-check span{padding:5px 10px}</style><div class=page-content><div class=book2-top>保养时间：" + (null == (__t = maintenanceTime) ? "" : __t) + '<br><p class=js-desc><i class="iconfont icf-info"></i>代驾服务说明</p></div><div class=book-box><div class="form-item form-item--arrow-btn form-block js-show-time"><label class=field-label>取车时间</label><div class="field-text-wrap tr js-time-value">', print(drivingTime.replace(/^[^\s]+\s+/, "")), __p += '</div><i class=icon-arrow></i></div><div class="form-item  form-item--arrow-btn form-block"><label class=field-label>省.市.区</label><div class="field-text-wrap tr">' + (null == (__t = city) ? "" : __t) + '</div></div><div class="form-item  form-item--arrow-btn form-block"><label class=field-label>取车地址</label><div class=field-text-wrap><input type=text class="field-text tr js-address" placeholder=请输入您居住的详细地址 value="' + (null == (__t = pickCarAddress) ? "" : __t) + '"></div></div><div class=book2-check>&nbsp;&nbsp;<span class=js-same-addr data-id=1><i class="icon-checkbox', 1 == useSameAddress && print(" active"), __p += '"></i>送车同取车地址</span>&nbsp;&nbsp;<span class=js-same-addr data-id=0><i class="icon-checkbox', 0 == useSameAddress && print(" active"), __p += '"></i>其它地址</span></div></div><div class="book-box js-return-box" ', 1 == useSameAddress && print('style="display:none;"'), __p += '><div class="form-item  form-item--arrow-btn form-block"><label class=field-label>还车地址</label><div class=field-text-wrap><input type=text name=returnCarAddress value="' + (null == (__t = returnCarAddress) ? "" : __t) + '" class="field-text tr js-return-address" placeholder=请输入您居住的详细地址></div></div></div><div class=plr10><div class=driving-price-box><span class=price><dfn>&yen;</dfn>59</span>上门取送费</div><span class="btn-primary full-width js-save">保存</span></div></div>';
			return __p
		}
	}), define("controller/book/driving", ["textbookDrivingHtml", "PageView", "session", "UIScreen", "dateUtil", "UIScrollList", "geolocation"], function(t, e, i, n, a, r, o) {
		var s = e.extend({
			events: {
				"click .js-desc": "descAction",
				"click .js-same-addr": "sameAction",
				"click .js-save": "saveAction",
				"click .js-show-time": "showScrollListAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "取送车信息填写"
					}
				}), this.city = o.getPostion().addressComponent.city
			},
			onShow: function() {
				var e = i.get("book_driving"),
					n = _.extend({
						pickCarAddress: "",
						useSameAddress: 1,
						returnCarAddress: "",
						city: this.city
					}, e);
				if (n.startTime = i.get("book_form").time, n.maintenanceTime = this.query.date + " " + n.startTime + ":00", n.drivingTime) n.drivingTime = n.drivingTime.replace(/[^\s]+/, this.query.date);
				else {
					var a = n.startTime.split(":"),
						r = Math.max(7, parseInt(a, 10) - 1);
					10 > r && (r = "0" + r), n.drivingTime = this.query.date + " " + r + ":" + a[1]
				}
				var o = this.template(t, n);
				this.$el.html(o), this.model = n
			},
			descAction: function() {
				new n({
					appendElement: document.body,
					title: "代驾服务说明",
					msg: "<ol>                <li>为您提供的代驾服务项目是由上海享途网络科技有限公司（乐车邦运营商，以下简称“乐车邦”）战略合作伙伴提供，您同意在代驾司机为您服务的过程中出现的一切问题及产生的责任均由代驾公司承担。</li>             <li>代驾公司根据您提供的驾驶员/交车人信息（包括但不限于姓名、联系电话等）核实身份，您已充分明确并同意，如您所提供的信息与代驾司机现场核实信息不符，代驾司机有权拒绝向您提供代驾服务，由此产生的任何纠纷或损失的，均由您本人承担相应责任，与代驾司机、代驾公司及乐车邦无关。</li>               <li>您已确认，您在将您的爱车交给代驾司机之前，需要确认车内已无贵重物品，并做好与代驾司机的登记手续且签字确认无误。</li>                <li>您需确认您的车辆已经具备如下三个必要条件：                   <ol>                        <li>车辆手续齐全；</li>                        <li>车况正常；</li>                      <li>有车辆保险（须包含交强险、车辆损失险、第三者责任险）；</li>                    </ol>                   <p>您已知晓，如您的车辆不具备上述任一条件的，代驾司机均有权拒绝向您提供服务，故请您在向代驾司机交付车辆时同时出示上述全部材料，否则由于您的隐瞒、虚报或类似行为导致任何纠纷或者损害的，均由您本人承担相应责任，与代驾司机、代驾公司及乐车邦无关。</p>              </li>               <li>请您自行合理安排好您爱车所预订的代驾时间，如您坚持由代驾司机在限行日（如有）提供服务的，则您应自行承担因违反此尾号限行规定导致的一切损失及责任。</li>               <li>您已确认，您已经或者将要将代驾司机服务费用已支付给乐车邦，无需再向代驾司机支付除代驾服务过程中必要的过路费、过桥费外的其他费用。</li>               <li>您已明确，如代驾司机驾驶过程中遇交通事故等情况发生，则您同意先行使用您爱车的车辆保险进行相关理赔工作，并无条件配合我们理赔工作进行。若因代驾司机个人原因违章驾驶导致您的爱车被主管部门认定为承担主要责任的，车辆保险免赔部分由代驾司机承担，同时，您将收到您的爱车修理期间50元/天的交通补贴。若代驾司机不承担事故主要责任的，则代驾司机、代驾公司及乐车邦不承担赔偿责任。因代驾司机原因在司机服务全程产生的责任使客户车辆在年检时保费上涨部份均由代驾公司承担。</li>              <li>请您明确，代驾服务期间内确实查明因代驾司机个人原因造成您的爱车上财物丢失的，由代驾司机、代驾公司及乐车邦负责赔偿。</li>              <li>您已确认，代驾公司及乐车邦保留代驾服务的最终解释权。</li>         </ol>"
				})
			},
			sameAction: function(t) {
				var e = $(t.currentTarget);
				this.$(".js-same-addr .active").removeClass("active"), e.find("i").addClass("active"), 1 == e.data("id") ? this.$(".js-return-box").hide() : this.$(".js-return-box").show()
			},
			saveAction: function() {
				var t = this.$(".js-time-value").html().trim(),
					e = this.$(".js-address").val().trim(),
					n = this.$(".js-same-addr .active").parent().data("id"),
					a = this,
					r = "";
				if (!t) return void app.alert("请选择取车时间");
				if (!e) return void app.alert("请输入取车地址");
				if (0 == n && (r = this.$(".js-return-address").val().trim(), !r)) return void app.alert("请输入还车地址");
				var o = i.get("book_driving") || {};
				_.extend(o, {
					drivingTime: a.query.date + " " + t,
					pickCarAddress: e,
					saleAmount: 5900,
					useSameAddress: n,
					userCity: a.city,
					returnCarAddress: r
				}), i.set("book_driving", o), this.query.hasDriving = 1, i.set(app.referrer, this.query), app.goBack.noCache()
			},
			showScrollListAction: function() {
				var t = [],
					e = [],
					i = this,
					n = this.$(".js-time-value").html().trim(),
					o = this.model.startTime.split(":"),
					s = Math.max(7, o[0] - 2);
				n = n ? n.split(/[^\d]/) : [];
				for (var l = s; l <= parseInt(o[0], 10); l++) t.push({
					text: a.parseNumber(l),
					value: a.parseNumber(l)
				});
				for (l = 0; 60 > l; l += 5) e.push({
					text: a.parseNumber(l),
					value: a.parseNumber(l)
				});
				this.scrollList = new r({
					appendElement: document.body,
					title: "取车时间",
					group: [t, e],
					selected: n,
					done: function(t) {
						var e, n = a.parseNumber(o[0] - 2) + ":" + o[1];
						e = o[1] - 30 >= 0 ? o[0] + ":" + a.parseNumber(o[1] - 30) : o[0] - 1 + ":" + (parseInt(o[1], 10) + 30);
						var r = [{
							startTime: n,
							endTime: e
						}];
						a.isValidTime(r, t) ? (this.hide(), i.$(".js-time-value").html(t.join(":"))) : app.alert(1 == a.compareTime(e, t.join(":")) ? "取车最早时间为 " + n : "取车最晚时间为 " + e)
					}
				})
			}
		});
		return s
	}), define("textbookDiscountHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.user-coupon{padding:10px}.user-coupon .price{font-size:34px;color:#fff;text-shadow:2px 1px 1px #888}.user-coupon .price dfn{font-size:16px}.user-coupon h3{color:#666;font-size:22px;line-height:26px}.user-coupon .price{position:absolute;top:50%;width:100%;text-align:center;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%)}.user-coupon .a{position:absolute;top:50%;left:16px;width:90px;text-align:left;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);margin-top:-30px}.user-coupon .status{position:absolute;right:10px;top:10px;border:1px solid rgba(204,204,204,.5);color:#ccc;padding:3px 5px;font-size:12px}.user-coupon,.user-coupon .pass .price,.user-coupon .pass h3,.user-coupon .pass .price dfn,.user-coupon .pass p{color:#ccc}.user-coupon-none{position:relative;margin:10px 10px 0;line-height:52px;min-height:52px;background-color:#fff;border-radius:4px;font-size:15px;box-sizing:border-box;-webkit-box-shadow:0 1px 1px -1px rgba(0,0,0,0.2);text-align:center;color:#666;font-size:18px}.user-coupon-none.active:after,.user-coupon .active:after{content:"";display:inline-block;vertical-align:middle;width:20px;height:20px;background:url(https://img01.lechebangstatic.com/webapp/bg-global.png) no-repeat;background-size:240px auto;background-position:-139px -80px;position:absolute;right:15px;top:50%;margin-bottom:10px;border:0;-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.user-coupon .pricewrap{height:100%;width:105px;position:absolute;top:0;left:0;border-radius:.05rem 0 0 .05rem;--webkit-border-radius:.05rem 0 0 .05rem}.user-coupon .beUsed-background{background-color:#ffd164}.user-coupon .special-background{background-color:#48b9f9}</style><div class=page-content><div class="user-coupon-none js-item', id || print(" active"), __p += '">不使用优惠券</div><div class=user-coupon><ul>', _.each(discount, function(t) {
				__p += '<li class="js-item', t.id == id && print(" active"), __p += '" data-id="' + (null == (__t = t.id) ? "" : __t) + '">', (_.isUndefined(t.strategyKind) || 1 == t.strategyKind) && (__p += '<div class="pricewrap beUsed-background"><span class=price><dfn>&yen;</dfn>', print(parseInt(t.amount / 100, 10)), __p += "</span></div>"), _.isUndefined(t.strategyKind) || 2 != t.strategyKind || (__p += '<div class="pricewrap special-background">', 0 == t.amount ? __p += "<span class=price>免费</span>" : (__p += "<span class=price><dfn>&yen;</dfn>", print(parseInt(t.amount / 100, 10)), __p += "</span>"), __p += "</div>"), __p += "<h3>" + (null == (__t = t.title) ? "" : __t) + "</h3><p style=width:1.9rem>" + (null == (__t = t.content) ? "" : __t) + "</p><p>有效期至 \n      ";
				var e = new Date(t.endTime);
				print(app.dateFormat(e, "yyyy-mm-dd")), __p += "</p></li>"
			}), __p += "</ul></div></div>";
			return __p
		}
	}), define("controller/book/discount", ["textbookDiscountHtml", "PageView", "session"], function(t, e, i) {
		var n = e.extend({
			events: {
				"click .js-item": "bookAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "我的优惠券"
					}
				});
				var e = i.get("book_discount"),
					n = this.template(t, {
						discount: e,
						id: this.query.id
					});
				this.$el.html(n)
			},
			bookAction: function(t) {
				var e = $(t.currentTarget).attr("data-id") || -1;
				this.query.discountId = e, i.set(app.referrer, this.query), app.goBack.noCache()
			}
		});
		return n
	}), define("textloginHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.login-box{padding:15px}.login-box .field-label{width:3.5em;margin-left:-4em}.login-box .form-item{padding-left:4.5em}.login-box .form-code,.book-box .form-code{margin-right:110px;padding-right:10px}.login-box .code-btn,.book-box .code-btn{position:absolute;top:0;padding:0 10px;background:#fff;color:#07cdd0;border:1px solid #07cdd0;border-radius:5px;font-size:15px;z-index:3;line-height:50px;right:-110px}.login_other{position:relative;margin:40px 15px 10px;padding-top:15px;border-top:1px solid #ccc}.login_other .or{position:absolute;top:-10px;left:50%;width:120px;margin-left:-60px;text-align:center;background-color:#efefef;color:#999}.login_other ul{margin-right:-10px;overflow:hidden;text-align:center}.login_other ul li{display:inline-block;width:25%;padding:5px 10px 0 0;text-align:center;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.login_other ul li div{display:inline-block;width:40px;height:40px;overflow:hidden;text-align:center;font-size:20px;line-height:40px;color:#48be50;background-color:#fff;border-radius:50%}.login_other .fold{margin-top:15px;text-align:center;color:#099fde}.login_other .fold b{display:inline-block;width:0;height:0;margin-left:10px;line-height:0;vertical-align:2px;font-size:0;border-left:5px solid transparent;border-right:5px solid transparent}.login_other .fold .fold_up{border-bottom:6px solid #099fde}.login_other .fold .fold_down{border-top:6px solid #099fde}.code-btn.disabled{border:1px solid #ccc}.login-box .voicecheck{margin-top:.12rem;font-size:0.15rem;color:#999;text-align:right;letter-spacing:.8px}.login-box .voicecheck span{color:#07cdd0}.login-box .voicecheckinfo{text-align:center;color:#99999;font-size:0.17rem;background-color:#fff;border-radius:.05rem;position:relative;margin-top:.3rem;width:2.4rem;margin-left:.3rem;padding:8px .2rem;display:none}.login-box .voicecheck:hover{cursor:pointer}.login-box .voicecheckinfo span{position:absolute;top:20%;left:.1rem;color:#99999}.login-box .voicecheckinfo span i{color:#dcdcdc;font-size:.3rem}.login-box .voicecheckinfo p{font-size:.16rem;color:#b6b6b6;margin-left:.3rem}.login-box .voicecheckinfo p:last-child{color:#ffa799}</style><div class=login-box><div class="form-item form-item--arrow-btn form-block"><label class=field-label>手机号</label><div class=field-text-wrap><input type=tel id=login_mobile class="field-text js-mobile" placeholder=请输入手机号 value="' + (null == (__t = mobile) ? "" : __t) + '"></div></div><div class="form-item form-item--arrow-btn form-block form-code"><label class=field-label>验证码</label><div class=field-text-wrap><input type=tel class="field-text js-code" placeholder=请输入验证码><span class="code-btn js-get-code">获取验证码</span></div></div><span class="btn-primary full-width js-login" data-ajax>登录</span><div class=voicecheck>收不到短信?使用<span>语音验证码</span></div><div class=voicecheckinfo><span><i class=iconfont>&#xe649;</i></span><p>电话拨打中...请留意以下来电</p><p>4006-300-111</p></div></div>';
			return __p
		}
	}), define("controller/login", ["textloginHtml", "PageView", "user", "UIScrollList", "local", "validate", "util", "carModel"], function(t, e, i, n, a, r, o, s) {
		var l = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? "user/index" : void 0
				}
			},
			events: {
				"click .js-get-code": "getCodeAction",
				"click .js-login": "loginAction",
				"click .voicecheck": "voiceCheck"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "登录"
					}
				});
				var e = this.template(t, {
					mobile: this.query.mobile
				});
				this.$el.html(e)
			},
			onShow: function() {},
			getCodeAction: function(t) {
				var e = $(t.currentTarget),
					i = this.$(".js-mobile").val().trim();
				if (!e.hasClass("disabled")) {
					if (!i) return void app.alert("请输入手机号码");
					if (!r.isMobile(i)) return void app.alert("手机号码格式不正确");
					e.addClass("disabled").html("重新发送 60");
					var n = 60,
						a = setInterval(function() {
							n-- ? e.html("重新发送 " + n): (clearInterval(a), e.html("获取验证码").removeClass("disabled"))
						}, 1e3);
					app.ajax({
						url: "user/sendLoginSms",
						data: {
							mobile: i
						},
						success: _.noop,
						error: function(t) {
							app.alert(t.msg), clearInterval(a), e.html("获取验证码").removeClass("disabled")
						}
					})
				}
			},
			loginAction: function(t) {
				{
					var e = this.$(".js-mobile").val().trim(),
						n = this.$(".js-code").val().trim();
					$(t.currentTarget)
				}
				if (!e) return void app.alert("请输入手机号码");
				if (!r.isMobile(e)) return void app.alert("手机号码格式不正确");
				if (!n) return void app.alert("请输入验证码");
				var o = {
						mobile: e,
						code: n
					},
					s = a.get("spread_info");
				s && (o.spreadInfo = s);
				var l = this;
				app.ajax({
					url: "user/smsLogin",
					data: o,
					success: function(t) {
						i.setUser(t), l.loginSuccess()
					}
				})
			},
			loginSuccess: function() {
				function t() {
					i.to ? app.goTo(i.to, {
						replace: !0
					}) : app.goBack()
				}
				var e = a._get("car"),
					i = this.query;
				e ? (e.brandTypeId && (e.isDefault = 1), s.saveMyCar(e, function(i) {
					_.extend(e, i), a._set("car", e), t()
				})) : t()
			},
			voiceCheck: function() {
				var t = this.$("#login_mobile").val().trim();
				return t ? r.isMobile(t) ? void app.ajax({
					url: "user/sendLoginVoiceSms",
					data: {
						mobile: t
					},
					success: function() {
						this.$(".voicecheckinfo").show()
					}
				}) : void app.alert("手机号码格式不正确") : void app.alert("手机号不能为空")
			}
		});
		return l
	}), define("textcityHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.city-choose{background-color:#efeff4}.city-choose .header-inner{position:inherit}.city-choose .hd{background-color:#f7f7fa;color:#999;font-size:12px;padding:0 20px;line-height:25px}.city-choose-item li{line-height:41px;padding:5px 10px 5px 20px;position:relative;display:block;cursor:pointer;font-size:15px;background-color:#fff}.city-choose-item li::before{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:1px solid #dcdce1;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.city-choose-item b{font-weight:400}.city-choose-item i{position:absolute;right:20px;color:#ff6a51;font-size:20px}.city-choose .other{font-size:13px;color:#999;text-align:center;padding:10px}</style><div class="page-content city-choose">', "production" != config.env && (print("<p>" + config.env + config.version + "</p>"), print('<p style="word-wrap:break-word">' + JSON.stringify($.os) + "</p>"), print('<p style="word-wrap:break-word">' + navigator.userAgent + "</p>")), __p += "<div class=hd>当前城市</div><div class=bd><ul class=city-choose-item><li><b class=iconfont>&#xe606;</b>&nbsp;" + (null == (__t = city) ? "" : __t) + "</li></ul></div><div class=hd>全部城市</div><div class=bd><ul class=city-choose-item>", _.each(cities.opened, function(t) {
				__p += "<li class=js-city>" + (null == (__t = t.name) ? "" : __t) + "</li>"
			}), __p += "</ul>", cities.toBeOpened.length && (__p += "<div class=hd>以下城市即将开通</div><div class=bd><ul class=city-choose-item>", _.each(cities.toBeOpened, function(t) {
				__p += '<li class=js-checkin data-id="' + (null == (__t = t.cityId) ? "" : __t) + '">' + (null == (__t = t.name) ? "" : __t) + "<i class=iconfont>&#xe635;</i></li>"
			}), __p += "</ul></div>"), __p += "</div><div class=other>其它城市正在陆续推出，敬请期待！</div></div>";
			return __p
		}
	}), define("controller/city/index", ["textcityHtml", "PageView", "session", "geolocation"], function(t, e, i, n) {
		var a = e.extend({
			events: {
				"click .js-city": "cityAction",
				"click .js-checkin": "checkinAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "选择城市"
					}
				})
			},
			onShow: function() {
				var e = [],
					i = [];
				for (var a in n.idMapCity) a = parseInt(a, 10), n.hasOpen(a) ? e.push({
					cityId: a,
					name: n.idMapCity[a]
				}) : n.hasUnopen(a) && i.push({
					cityId: a,
					name: n.idMapCity[a]
				});
				var r = {
						toBeOpened: i,
						opened: e
					},
					o = n.getPostion(),
					s = this.template(t, {
						city: o.addressComponent.city,
						cities: r
					});
				this.$el.html(s), this.cities = r
			},
			cityAction: function(t) {
				var e = $(t.currentTarget).html().trim();
				i.set("city_change", 1), n.setPostion(e), app.goBack()
			},
			checkinAction: function(t) {
				var e = $(t.currentTarget).data("id"),
					i = _.find(this.cities.toBeOpened, function(t) {
						return t.cityId == e
					});
				app.goTo("city/checkin?cityId=" + i.cityId)
			}
		});
		return a
	}), define("textcityCheckinHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<style>.wait-box{background-color:#ffe199}.wait-title{padding:10px 0;font-weight:700;color:#674a00;text-align:center}.wait-pic{position:relative;color:#666;font-size:13px}.wait-pic img{width:100%}.wait-pic .price-box{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);font-size:13px}.wait-pic .price{font-size:32px;color:#ff7d13}.wait-intro{padding:10px 20px;font-size:12px;color:#7a5b06}.wait-item{padding:0 10px 20px}.wait-city{position:relative;margin-bottom:10px;background-color:#fff;border-radius:4px;font-size:15px;line-height:52px;padding:0 10px;overflow:hidden}.wait-city:after{content:\'\';position:absolute;left:50%;top:6px;height:6px;width:1px;height:40px;background-color:#f0f0f0;overflow:hidden}.wait-city label{float:left;width:23%}.wait-city span{float:left;width:23%}.wait-city .c{width:31%}.wait-city .last{color:#c1c1c1}.wait-city .last::after{content:"";position:absolute;right:20px;top:50%;margin-top:-3px;display:inline-block;vertical-align:middle;width:6px;height:6px;border-left:1px solid #adadad;border-bottom:1px solid #adadad;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform:translate(0,-50%) rotate(-45deg);transform:translate(0,-50%) rotate(-45deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out}.wait-box .form-code{padding-right:10px}.wait-box .code-btn{position:absolute;top:0;padding:0 10px;background:#fff;color:#07cdd0;border:1px solid #07cdd0;border-radius:5px;font-size:15px;line-height:40px;right:10px;top:5px}.code-btn.disabled{border:1px solid #ccc}</style><div class="page-content wait-box"><div class=wait-title>您来早了哦，我们的服务还未到' + (null == (__t = name) ? "" : __t) + '哦。<br>不过，我们的豪礼已经到了！请您笑纳～</div><div class=wait-pic><img src="https://img01.lechebangstatic.com/webapp/bg-wait.png" alt height=133><div class=price-box>总额&nbsp;<span class=price><dfn>&yen;</dfn>', print(isLogin ? 200 : 500), __p += "</span></div></div><div class=wait-intro>", __p += isLogin ? "\n    请确定以下信息并提交，本城市服务一旦上线，我们将第一时间通知您，同时再送上200元保养抵用券。\n   " : "\n   请填写以下信息并提交，即可获得300元保养抵用券，成为" + (null == (__t = name) ? "" : __t) + "<br>首批乐车邦贵宾。本城市服务一旦上线，我们将第一时间通知您，<br>同时再送上200元保养抵用券。\n   ", __p += "</div><div class=wait-item><div class=wait-city><label>城市</label><span class=c>" + (null == (__t = name) ? "" : __t) + "</span><label>品牌</label>", __p += brandName ? "<span class=js-brand>" + (null == (__t = brandName) ? "" : __t) + "</span>" : '<span class="last js-brand">请选择</span>', __p += '</div><div class="form-item form-block"><label class=field-label>手机号</label><div class=field-text-wrap><input type=tel class="tr js-mobile" placeholder=请输入您的手机号码 value="' + (null == (__t = mobile) ? "" : __t) + '" ', isLogin && print("disabled"), __p += "></div></div>", isLogin || (__p += '<div class="form-item form-item--arrow-btn form-block form-code"><label class=field-label>验证码</label><div class=field-text-wrap><input type=tel class="field-text js-code"></div><span class="code-btn js-get-code">获取验证码</span></div>'), __p += '<span class="btn-primary full-width js-submit" data-ajax>提交</span></div><div style=height:51px>&nbsp;</div></div><footer class=page-bottom><div class=footer-tel><a href=tel:4006300111><i class=iconfont>&#xe60e;</i>客服电话：4006-300-111</a></div></footer>';
			return __p
		}
	}), define("controller/city/checkin", ["textcityCheckinHtml", "PageView", "geolocation", "session", "local", "user", "UIScrollList", "carModel", "validate"], function(t, e, i, n, a, r, o, s) {
		var l = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login"
				}
			},
			events: {
				"click .js-brand": "brandAction",
				"click .js-submit": "submitAction"
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "登记送豪礼"
					}
				});
				var t;
				if (this.query.cityId) t = {
					cityId: this.query.cityId,
					name: i.idMapCity[this.query.cityId]
				};
				else {
					var e = i.getPostion();
					t = {
						cityId: e.cityId,
						name: e.addressComponent.city
					}
				}
				this.model = t
			},
			ajax: function() {
				var t = s.firstLevel(!0);
				return t
			},
			onShow: function(t) {
				var e = [],
					i = this.query.brandId;
				if (_.each(t, function(t) {
					_.each(t.results, function(t) {
						e.push({
							text: t.brandName,
							value: t.id
						})
					})
				}), i) {
					var n = _.find(e, function(t) {
						return t.value == i
					});
					this.model.brandName = n.text, this.model.brandId = i
				}
				this.render(), this.brands = e
			},
			render: function() {
				var e = {
					name: this.model.name,
					isLogin: r.isLogin,
					brandName: this.model.brandName,
					mobile: ""
				};
				e.mobile = r.getUserInfo().user.mobile;
				var i = this.template(t, e);
				this.$el.html(i)
			},
			brandAction: function() {
				this.scrollList ? this.scrollList.show() : this.scrollListRender()
			},
			scrollListRender: function() {
				var t = this;
				this.scrollList = new o({
					appendElement: document.body,
					title: "品牌选择",
					group: [this.brands],
					done: function(e) {
						this.hide();
						var i = e[0],
							n = _.find(t.brands, function(t) {
								return t.value == i
							});
						t.model.brandId = n.value, t.model.brandName = n.text, t.$(".js-brand").removeClass("last").html(n.text)
					}
				})
			},
			submitAction: function() {
				var t = this.model.brandId,
					e = this.$(".js-mobile").val().trim();
				this.checkinAction(t, e)
			},
			checkinAction: function(t, e) {
				app.ajax({
					url: "to_be_opened/reg",
					data: {
						cityId: this.model.cityId,
						brandId: t,
						mobile: e
					},
					success: function(t) {
						var e;
						return 0 == t ? void app.alert("登记失败") : (e = 1 == t ? r.isNewUser() ? "恭喜您！登记成功。<br>300元抵用券已妥妥的放入您的个人账户中。" : "恭喜您！登记成功。服务上线后会第一时间通知您，并送上200元保养抵用券。" : "您已登记过该品牌", void app.alert({
							msg: e,
							btns: [{
								text: "看看我的抵用券",
								callback: function() {
									app.goTo("user/discount")
								}
							}]
						}))
					}
				})
			}
		});
		return l
	}), define("textvinScanHtml", [], function() {
		return '<span class="btn-primary full-width vin_scan" _from>扫码识车 From 保养</span><span class="btn-primary full-width vin_scan" _from=track>扫码识车 From 轨迹</span><span class="btn-primary full-width vin_scan" _from=add>扫码识车 From 用户爱车</span>'
	}), define("Telephone", [], function() {
		var t = {
			shout: function(t) {
				var e = "拨打电话";
				t && "function" == $.type(t) && t(e)
			},
			call: function(t, e) {
				if (t || "object" == $.type(t) || "string" == $.type(t) || "number" == $.type(t)) {
					var i = $.extend({
						css: {}
					}, t);
					if ("string" == $.type(t) || "number" == $.type(t)) {
						if (i.number = t, 1 == e) return void(location.href = "tel:" + i.number)
					} else $.extend(i, t);
					i.text || (i.text = "是否拨打电话: " + i.number + " ?");
					var n = $("<div></div>").html(i.text);
					i.css && n.css(i.css), i.text = $("<div></div>").html(n).html(), app.alert({
						msg: i.text,
						btns: [{
							text: "是",
							callback: function() {
								app._alert.hide(), location.href = "tel:" + i.number
							}
						}, {
							text: "否",
							callback: function() {
								app._alert.hide()
							}
						}]
					})
				}
			}
		};
		return t
	}), define("controller/vin/scan", ["textvinScanHtml", "PageView", "Telephone", "VinScanner"], function(t, e, i, n) {
		var a = e.extend({
			events: {
				"click .vin_scan": function(t) {
					var e = $(t.currentTarget);
					n.callCamera(e.attr("_from"))
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "扫码识车"
					},
					right: [{
						text: '<i class="iconfont">&#xe60a;</i>',
						callback: function() {
							app.goBack("")
						}
					}]
				})
			},
			onShow: function() {
				this.$el.html(this.template(t, {}))
			}
		});
		return a
	}), define("textvinResultNoneHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div class="page-content vin-main"><h3>您的扫描信息如下：<span class="r button_rescan"><i class=iconfont>&#xe628;</i>&nbsp;VIN码不对？重新扫描</span></h3><div class=vin-result><div class="form-item form-block"><label class=field-label>VIN码</label><div class=field-text-wrap><input id=input_code type=text class=tl value="' + (null == (__t = code) ? "" : __t) + '"></div></div><span class="refresh button_refresh">刷新</span></div><div class=vin-result-car><div class="form-item form-block"><label class=field-label>车型</label><div class=field-text-wrap>无匹配车型</div></div></div><div class=RESULT_OPTIONS_AREA><h3>请完善车型信息，便于日后更好的为您服务：</h3><div class="form-item form-block"><label class=field-label>联系方式</label><div class="field-text-wrap tr"><input id=data_user_mobile type=tel placeholder=请输入手机号></div></div><div class="form-item form-block"><label class=field-label>品牌</label><div class=field-text-wrap><input id=data_car_brand type=text placeholder=请输入品牌，如“大众”></div></div><div class="form-item form-block"><label class=field-label>车系</label><div class=field-text-wrap><input id=data_car_series type=text placeholder=请输入车系，如“上海大众”></div></div><div class="form-item form-block pub-arrow"><label class=field-label>年款</label><div class=field-text-wrap><input id=data_car_year class=show_car_years type=text placeholder=请输入年款，如“2011年”></div></div><div class="form-item form-block"><label class=field-label>配置</label><div class=field-text-wrap><input id=data_car_config type=text placeholder="请输入配置，如“320i 时尚型”"></div></div><span class="btn-primary full-width button_save_car_info">确认并提交</span></div><div style=height:71px></div></div><footer class=page-content><div class=footer-tel><a class=telephone_call data=4006300111 href=javascript:void(0);><i class=iconfont>&#xe60e;</i>客服电话：4006-300-111</a></div></footer>';
			return __p
		}
	}), define("textvinResultMultipleHtml", [], function() {
		return function(obj) {
			var __t, __p = "",
				__j = Array.prototype.join,
				print = function() {
					__p += __j.call(arguments, "")
				};
			with(obj || {}) __p += '<div class="page-content vin-main"><h3>您的扫描信息如下：<span class="r button_rescan"><i class=iconfont>&#xe628;</i>&nbsp;VIN码不对？重新扫描</span></h3><div class=vin-result><div class="form-item form-block"><label class=field-label>VIN码</label><div class="field-text-wrap tr"><input id=input_code type=text class=tl value="' + (null == (__t = code) ? "" : __t) + '"></div></div><span class="refresh button_refresh">刷新</span></div><h3>您的车型：\n		' + (null == (__t = result.list[0].baseInfo["品牌"]) ? "" : __t) + "\n	  - " + (null == (__t = result.list[0].baseInfo["厂家"]) ? "" : __t) + "\n	  - " + (null == (__t = result.list[0].baseInfo["车型"]) ? "" : __t) + "</h3><h3>选择一款爱车配置：</h3><div class=vin-car-item><ul>", _.each(result.list, function(t) {
				__p += '<li class=data_car_type data-id="' + (null == (__t = t.id) ? "" : __t) + '">' + (null == (__t = result.list[0].baseInfo["年款"]) ? "" : __t) + "款 - " + (null == (__t = t.baseInfo["销售名称"]) ? "" : __t) + "</li>"
			}), __p += '</ul></div><h3>爱车配件：</h3><div class="vin-check-box sst" id=DIFFERENCES><ul>', _.each(result.differences, function(t) {
				__p += '<li class=data_car_type_difference data-key="' + (null == (__t = t.k) ? "" : __t) + '" data-is-boolean-value="' + (null == (__t = t.b) ? "" : __t) + '">', t.b ? __p += '<span class=diff_span data-key="' + (null == (__t = t.k) ? "" : __t) + '" data-is-boolean-value="' + (null == (__t = t.b) ? "" : __t) + '"><i class=icon-checkbox data-key="' + (null == (__t = t.k) ? "" : __t) + '" data-is-boolean-value="' + (null == (__t = t.b) ? "" : __t) + '"></i>' + (null == (__t = t.k) ? "" : __t) + "</span>" : (print(t.k), __p += "：", _.each(t.v, function(e) {
					__p += '<span class=diff_span data-key="' + (null == (__t = t.k) ? "" : __t) + '" data-is-boolean-value="' + (null == (__t = t.b) ? "" : __t) + '" data-value="' + (null == (__t = e) ? "" : __t) + '"><i class=icon-checkbox></i>' + (null == (__t = e) ? "" : __t) + "</span>"
				})), __p += "</li>"
			}), __p += "</ul></div><div class=RESULT_OPTIONS_AREA></div><div style=height:71px></div></div><footer class=page-bottom><div class=footer-tel><a class=telephone_call data=4006300111 href=javascript:void(0);><i class=iconfont>&#xe60e;</i>客服电话：4006-300-111</a></div></footer>";
			return __p
		}
	}), define("textvinResultSingleHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<div class="page-content vin-main"><h3>您的扫描信息如下：<span class="r button_rescan"><i class=iconfont>&#xe628;</i>&nbsp;VIN码不对？重新扫描</span></h3><div class=vin-result><div class="form-item form-block"><label class=field-label>VIN码</label><div class="field-text-wrap tr"><input id=input_code type=text class=tl value="' + (null == (__t = code) ? "" : __t) + '"></div></div><span class="refresh button_refresh">刷新</span></div><h3>您的车型：\n		' + (null == (__t = result.baseInfo["品牌"]) ? "" : __t) + "\n	  - " + (null == (__t = result.baseInfo["厂家"]) ? "" : __t) + "\n	  - " + (null == (__t = result.baseInfo["车型"]) ? "" : __t) + '</h3><h3>您的爱车配置：</h3><div class="vin-result-car active"><div class="form-item form-block"><div class="field-text-wrap data_car_type active" data-status=active data-id="' + (null == (__t = result.id) ? "" : __t) + '">' + (null == (__t = result.baseInfo["年款"]) ? "" : __t) + "款 - " + (null == (__t = result.baseInfo["销售名称"]) ? "" : __t) + "</div></div></div><div class=RESULT_OPTIONS_AREA></div><div style=height:71px></div></div><footer class=page-bottom><div class=footer-tel><a class=telephone_call data=4006300111 href=javascript:void(0);><i class=iconfont>&#xe60e;</i>客服电话：4006-300-111</a></div></footer>";
			return __p
		}
	}), define("textvinResultHMHtml", [], function() {
		return '<div class="page-content vin-main"><h3>请手动输入：<span class="r button_rescan"><i class=iconfont>&#xe628;</i>&nbsp;重新扫描VIN码</span></h3><div class=vin-result><div class="form-item form-block"><label class=field-label>VIN码</label><div class=field-text-wrap><input id=input_code type=text class=tl value></div></div><span class="refresh button_refresh">确定</span></div><div style=height:71px></div></div><footer class=page-bottom><div class=footer-tel><a class=telephone_call data=4006300111 href=javascript:void(0);><i class=iconfont>&#xe60e;</i>客服电话：4006-300-111</a></div></footer>'
	}), define("textvinOption1Html", [], function() {
		return '<div class=error-box><div class=icon-box><i class=iconfont>&#xe620;</i></div><p>很抱歉，我们暂无法提供与您爱车相关的服务。<br>您的爱车信息已经提交给门店拓展人员，<br>资源到位后会第一时间通知您。</p></div><div class="form-item form-block"><label class=field-label>联系方式</label><div class=field-text-wrap><input id=data_user_mobile type=tel placeholder=请输入手机号></div></div><span class="btn-primary full-width button_save_user_mobile">提交</span>'
	}), define("textvinOption2Html", [], function() {
		return '<span class="btn-primary full-width confirm_car_type">这是我的车型</span><span class="btn-white full-width is_not_my_car_type">这不是我的车型</span>'
	}), define("textvinOption3Html", [], function() {
		return '<div class=error-box><div class=icon-box><i class=iconfont>&#xe611;</i></div><p>您的爱车信息已经提交给门店拓展人员，<br>资源到位后会第一时间通知您。</p></div><span class="btn-primary full-width go_to_other_plan">看看其它保养方案</span>'
	}), define("textvinSaveContacterResultHtml", [], function() {
		return '<div class=error-box><div class=icon-box><i class=iconfont>&#xe611;</i></div><p>信息提交成功，感谢您支持乐车邦。</p></div><span class="btn-primary full-width go_to_other_plan">看看其它保养方案</span>'
	}), define("controller/vin/result", ["textvinResultNoneHtml", "textvinResultMultipleHtml", "textvinResultSingleHtml", "textvinResultHMHtml", "textvinOption1Html", "textvinOption2Html", "textvinOption3Html", "textvinSaveContacterResultHtml", "PageView", "UIScrollList", "Telephone", "VinScanner", "CollectionUtils", "session", "user"], function(t, e, i, n, a, r, o, s, l, c, d, p, u, h, f) {
		function m(t) {
			$(".vin-check-box").removeClass("sst");
			for (var e in t) {
				var i = t[e],
					n = $("#DIFFERENCES .data_car_type_difference[data-key='" + e + "']");
				1 == n.data("isBooleanValue") ? "有" === i ? n.find(".diff_span").addClass("active") : n.find(".diff_span").removeClass("active") : (n.find(".diff_span").removeClass("active"), n.find(".diff_span[data-value='" + i + "']").addClass("active"))
			}
		}

		function g() {
			var t = $("#DIFFERENCES .data_car_type_difference>span>.icon-checkbox"),
				e = {};
			return _.each(t, function(t) {
				t = $(t);
				var i = t.data("is-boolean-value");
				1 == i ? e[t.data("key")] = t.hasClass("active") ? "有" : "无" : 0 == i && t.hasClass("active") && (e[t.data("key")] = t.data("value"))
			}), e
		}
		var v = 1,
			b = l.extend({
				events: {
					"click .telephone_call": function(t) {
						var e = $(t.currentTarget);
						d.call(e.attr("data"), !0)
					},
					"click .button_refresh": function() {
						var t = this,
							e = $.trim($("#input_code").val());
						return e ? void t.reload({
							code: e,
							hm: 0
						}) : void app.alert("请填写VIN码")
					},
					"click .button_rescan": function() {
						app.nativeApi.has("app.scan") && p.callCamera(this.query.from)
					},
					"click .button_save_car_info": "saveCarInfo",
					"click .show_car_years": function() {
						if (this.scrollList) this.scrollList.show();
						else {
							var t = [],
								e = this,
								i = this.$(".show_car_years").html().trim();
							i || (i = [2e3]);
							for (var n = (new Date).getFullYear(), a = 2e3; n >= a; a++) t.push({
								text: a,
								value: a
							});
							this.scrollList = new c({
								appendElement: this.el,
								title: "年款",
								group: [t],
								selected: i,
								done: function(t) {
									var i = t[0];
									e.$(".show_car_years").val(i), this.hide()
								}
							})
						}
					},
					"click .data_car_type": function(t) {
						var e = this,
							i = $(t.currentTarget);
						e.activateCarType(i.attr("data-id"))
					},
					"click .data_car_type_difference>span": function(t) {
						return
					},
					"click .confirm_car_type": function(t) {
						var e = this,
							i = ($(t.currentTarget), e.getActiveTypeID());
						if (!i) return void app.alert("<div style='text-align:center'>请选择一款爱车配置</div>");
						h.set("ACTIVE_BIZ", {
							id: i
						}), app.showLoading();
						var n = f.getUserInfo(),
							a = {
								vin: e.query.code,
								bizId: i
							};
						n && (a.anonymity = n.user.id), app.ajax({
							url: "vin/getLcbCar",
							data: a,
							success: function(t) {
								app._alert.hide(), t ? p.redirect("car/info", "add", t) : e.noMatchedCarType()
							},
							error: function(t) {
								"404" == t.statusCode && e.noMatchedCarType()
							}
						})
					},
					"click .is_not_my_car_type": function(t) {
						{
							var e = this;
							$(t.currentTarget)
						}
						e.notMyCarType()
					},
					"click .go_to_other_plan": function(t) {
						{
							var e = this;
							$(t.currentTarget)
						}
						p.redirect("car/brand", e.query.from, "")
					},
					"click .button_save_user_mobile": function(t) {
						var e = this,
							i = ($(t.currentTarget), $.trim($("#data_user_mobile").val()));
						return /^(1(([34578][0-9])))\d{8}$/.test(i) ? void app.ajax({
							url: "vin/saveContacter",
							data: {
								mobile: i,
								bizId: h.get("ACTIVE_BIZ").id,
								vin: e.query.code
							},
							success: function() {
								e.$(".RESULT_OPTIONS_AREA").html(s)
							}
						}) : void app.alert("请正确输入手机号")
					}
				},
				onCreate: function() {
					this.header.option({
						center: {
							text: "扫码识车"
						},
						right: [{
							text: '<i class="iconfont">&#xe60a;</i>',
							callback: function() {
								app.goBack("")
							}
						}]
					})
				},
				getActiveTypeID: function() {
					return self.$(".data_car_type.active").attr("data-id")
				},
				onSelectType: function() {
					var t = this;
					if (!(t.$(".vin-car-item>ul>.data_car_type").length < 1)) {
						var e = t.getActiveTypeID();
						t.$$$reTimer && clearTimeout(t.$$$reTimer), t.$$$reTimer = setTimeout(function() {
							var i = t.scanner.getType(e).diffInfo;
							m(i)
						}, 100)
					}
				},
				onSelectCondition: function() {
					var t = this;
					t.$$$reTimer && clearTimeout(t.$$$reTimer), t.$$$reTimer = setTimeout(function() {
						{
							var e = g();
							t.scanner.screen(e)
						}
						t.excludeTypesWithout(e)
					}, 300)
				},
				excludeTypesWithout: function(t) {
					var e = this,
						i = e.scanner.screen(t);
					e.$(".vin-car-item>ul>.data_car_type").each(function(t, n) {
						n = e.$(n);
						var a = n.attr("data-id");
						u.contain(i.list, a, function(t, e, i) {
							return e.id == i
						}) ? n.show("data-status") : n.hide("data-status", "del")
					})
				},
				activateCarType: function(t) {
					{
						var e = this;
						$(".vin-car-item .data_car_type").removeClass("active").length, $(".vin-car-item .data_car_type[data-id='" + t + "']").addClass("active").length
					}
					e.$(".RESULT_OPTIONS_AREA").html(r), e.onSelectType()
				},
				changeConditionStatus: function(t, e) {
					var i = this;
					i.$('.vin-check-box>ul>.data_car_type_difference[data-key="' + t + '"][data-value="' + e + '"]').attr("data-status", "active")
				},
				onShow: function() {
					var t = this;
					t.query.code = p.processVinCode(t.query.code);
					var e = t.query.code;
					return "1" == t.query.hm ? void t.goToHm() : (app.showLoading(), void p.query(e, "0" === t.query.once ? "0" : "1", {
						success: function(e) {
							app.hideLoading(), v = e.list && e.list.length > 0 ? 0 == e.once ? 0 : 1 : 0, t._onShow(e, function() {
								t.activateCarType(e.currentVinCar)
							})
						},
						error: function() {
							app.hideLoading(), app.alert({
								msg: "输入的VIN码应该是17位的字母或数字",
								btns: [{
									text: "确定",
									callback: function() {
										t.goToHm()
									}
								}]
							})
						}
					}))
				},
				goToHm: function() {
					var t = app.currentPage.ctrlName;
					return "vin/result_hm" == t ? void app.currentPage.reload() : void app.goTo("vin/result_hm", {
						animate: !1,
						replace: "vin/result" == t || "vin/result_hm" == t,
						stop: !1
					})
				},
				_onShowHM: function() {
					if (this.$el.html(this.template(n)), !app.nativeApi.has("app.scan")) {
						var t = $(".button_rescan");
						t.hide()
					}
				},
				_onShow: function(n) {
					var a = this,
						o = {
							code: this.query.code,
							result: {}
						};
					if (n && n.list && n.list.length > 0 ? 1 == n.list.length ? (template = i, o.result = n.list[0], this.$el.html(this.template(template, o)), a.$(".RESULT_OPTIONS_AREA").html(r)) : (template = e, a.scanner = p.newInstance(n.list), o.currentVinCar = n.currentVinCar, o.result = a.scanner.screen(), this.$el.html(this.template(template, o)), a.$(".RESULT_OPTIONS_AREA").html(r)) : (template = t, o.result = null, this.$el.html(this.template(template, o))), !app.nativeApi.has("app.scan")) {
						var s = $(".button_rescan");
						s.hide()
					}
				},
				saveCarInfo: function() {
					var t = this,
						e = $("#data_user_mobile").val(),
						i = $("#data_car_brand").val(),
						n = $("#data_car_series").val(),
						a = $("#data_car_year").val(),
						r = $("#data_car_config").val(),
						e = $.trim($("#data_user_mobile").val());
					return /^(1(([34578][0-9])))\d{8}$/.test(e) ? void app.ajax({
						url: "vin/saveUserCar",
						data: {
							vin: t.query.code,
							mobile: e,
							brand: i,
							carType: n,
							year: a,
							desc: r
						},
						success: function() {
							app.alert("保存成功"), t.$(".RESULT_OPTIONS_AREA").html(o)
						}
					}) : void app.alert("请正确输入手机号")
				},
				notMyCarType: function() {
					var t = this;
					0 == v ? p.redirect("car/brand", t.query.from, {}) : (t.query.once = "0", t.reload())
				},
				noMatchedCarType: function() {
					var t = this;
					t.$(".RESULT_OPTIONS_AREA").html(a)
				}
			});
		return b
	}), define("controller/vin/result_hm", ["textvinResultHMHtml", "PageView", "UIScrollList", "Telephone", "VinScanner", "CollectionUtils", "session"], function(t, e, i, n, a) {
		var r = e.extend({
			events: {
				"click .telephone_call": function(t) {
					var e = $(t.currentTarget);
					n.call(e.attr("data"), !0)
				},
				"click .button_refresh": function() {
					var t = $.trim($("#input_code").val());
					return t ? 17 != t.length ? void app.alert("输入的VIN码应该是17位的字母或数字") : void app.goTo("vin/result?hm=0&code=" + t, {
						animate: !1,
						replace: "vin/result_hm" == app.currentPage.ctrlName
					}) : void app.alert("请填写VIN码")
				},
				"click .button_rescan": function() {
					app.nativeApi.has("app.scan") && a.callCamera(this.query.from)
				}
			},
			onCreate: function() {
				this.header.option({
					center: {
						text: "扫码识车"
					},
					right: [{
						text: '<i class="iconfont">&#xe60a;</i>',
						callback: function() {
							app.goBack("")
						}
					}]
				})
			},
			onShow: function() {
				if (this.$el.html(this.template(t, {
					code: this.query.code || ""
				})), !app.nativeApi.has("app.scan")) {
					var e = $(".button_rescan");
					e.hide()
				}
			}
		});
		return r
	}), define("textregisterRedHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.topic{position:relative;width:100%}.topic img{display:block;width:100%}.topic .sales-btn{position:absolute;top:50%;left:0;right:0;bottom:0;color:#ff826d;font-size:18px;font-weight:700;text-align:center;-webkit-transform:translateY(-60%);transform:translateY(-60%)}.sales-txt h3{font-size:14px;font-weight:400;color:#6a3906;padding:5px 10px}.sales-txt p{font-size:12px;color:#6a3906;padding:0 10px;line-height:1.6}</style><div class=page-content style=background-color:#fdecce><div class=topic><img src="' + (null == (__t = img_url) ? "" : __t) + '1_300.png" alt></div><div class="topic js-click"><img src="' + (null == (__t = img_url) ? "" : __t) + 'btn.png" alt><div class=sales-btn></div></div><div class=topic><img src="' + (null == (__t = img_url) ? "" : __t) + '3.png" alt></div><div class=sales-txt><h3>活动规则：</h3><p>1、每位乐车邦新用户，注册并登录即可领取300元乐车邦养车抵用券大礼包一份；<br>2、抵用券有效期自领用之日起90天；<br>3、每个手机号码仅限领用一次；<br>4、有任何疑问可拨打客服热线：4006-300-111；<br>5、最终解释权归上海享途网络科技有限公司所有</p></div><div style=height:50px>&nbsp;</div></div><div class=page-bottom><a href=tel:4006300111><img src="' + (null == (__t = img_url) ? "" : __t) + '5.png" alt style=width:100%></a></div>';
			return __p
		}
	}), define("controller/promotion/registerRed", ["textregisterRedHtml", "PageView", "user", "UIShare", "session"], function(t, e, i, n) {
		var a = e.extend({
			options: {
				master: "activity/index"
			},
			events: {
				"click .js-click": "goAction"
			},
			onCreate: function() {
				var t = this;
				t.img_url = config.imgCdnRoot + "marketing/600/";
				var e = {
					center: {
						text: "注册有礼"
					}
				};
				app.nativeApi.checkShare() && (e.right = [{
					text: '<i class="iconfont">&#xe629;</i>',
					callback: function() {
						t.share || (t.share = new n({
							appendElement: document.body,
							businessparams: {
								businesstype: 3,
								thumb: "icon180.png",
								thumburl: config.imgCdnRoot + "marketing/600/icon180.png",
								showtitle: "乐车邦送你300元，爱车4S店保养随便花！",
								showcontent: "在乐车邦做汽车保养爽翻！一键查车况，2折做保养，4S店超体验。",
								url: "//m.lechebang.com/" + config.baseUrl + "/promotion/registerRed"
							}
						})), t.share.show()
					}
				}]), this.header.option(e)
			},
			onShow: function() {
				var e = this.template(t, {
					img_url: this.img_url
				});
				this.$el.html(e), $(".sales-btn").text(i.isLogin ? "您已注册，查看我的抵用券" : "立即注册，领取300元")
			},
			goAction: function() {
				app.goTo(i.isLogin ? "user/discount" : "login")
			}
		});
		return a
	}), define("textfriendRegisteredHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.topic{width:100%;position:relative}.topic img{width:100%}.bag{width:90%;margin:20px auto}.line{margin-bottom:12px}.pub_input{width:100%;height:.4rem;line-height:.4rem;font-size:.15rem;border:0 none;border-radius:5px;background-color:#fff;text-indent:5px}.pub_input2{display:block;width:100%;height:.38rem;border:1px solid #ff654b;border-radius:5px;color:#ff654b;text-align:center;line-height:.4rem;background-color:#fff;text-decoration:none;font-size:.15rem}.pub_btn{display:block;height:.4rem;line-height:.4rem;background-color:#ff654b;border:0 none;border-bottom:3px solid #f45237;border-radius:5px;text-align:center;font-weight:700;font-size:.18rem;color:#fff;text-decoration:none}.code{overflow:hidden}.code .pub_input{width:58%;float:left}.code .get_code{width:35%;float:right;border:1px solid #ff654b;border-radius:5px;color:#ff654b;text-align:center;line-height:.4rem;background-color:#fff;text-decoration:none;font-size:.15rem}.act_det{width:90%;margin:0 auto;padding:.1rem 0;line-height:1.8;color:#7d4311;-webkit-box-sizing:border-box;box-sizing:border-box}.act_det h2{font-weight:400;font-size:.14rem}.act_det p{margin:3px 0;font-size:.14rem;line-height:1.5}</style><div class=page-content style=background-color:#ffce39><div class=topic><img src="' + (null == (__t = config.imgCdnRoot) ? "" : __t) + 'marketing/friend/1.png" alt></div><div class=bag><input class="pub_btn js-registered" style=width:100% type=submit name=yt1 value=打开聚宝“朋”></div><div class=act_det><h2>活动规则</h2><p>1、乐车邦诚邀所有用户加入邀请“聚宝朋”计划；</p><p>2、好友通过邀请人链接成功注册乐车邦，即刻获得300元乐车邦保养抵用券礼包一份，抵用券自注册之日起90天有效；</p><p>3、通过邀请注册成功的好友，在乐车邦完成首次保养后，邀请人可获得支付金额2%乐车邦现金奖励（每单最低10元，最高30元），邀请越多好友做保养，奖金越多，上不封顶；</p><p>4、如邀请人采用某些技术手段，或邀请的好友身份信息异常，一经核实，乐车邦保留拒绝支付奖励的权利；</p><p>5、有任何疑问，可随时拨打乐车邦客服电话：4006-300-111；</p><p>6、本活动最终解释权归上海享途网络有限公司所有。</p></div></div>';
			return __p
		}
	}), define("controller/promotion/friend", ["textfriendRegisteredHtml", "PageView", "session", "user", "UIShare"], function(t, e, i, n, a) {
		var r = e.extend({
			options: {
				redirectCtrl: function(t) {
					return t ? void 0 : "login?to=promotion/friend"
				}
			},
			events: {
				"click .js-login": "loginAction",
				"click .js-registered": "goAction"
			},
			onCreate: function() {
				var t = this,
					e = {
						left: {
							callback: function() {
								if ($.os.lechebang) app.goBack();
								else {
									var t = app.referrer;
									!t || "index" != t && "activity/index" != t ? app.goBack("") : app.goBack()
								}
							}
						},
						center: {
							text: "乐车邦聚宝“朋”"
						}
					};
				app.nativeApi.checkShare() && (e.right = [{
					text: '<i class="iconfont">&#xe629;</i>',
					callback: function() {
						t.share || (t.share = new a({
							appendElement: document.body,
							businessparams: {
								businesstype: 3,
								thumb: "cps.png",
								thumburl: config.cps.share.thumburl,
								showtitle: "见证奇迹！有车没车都能天天赚钱，因我有聚宝“朋”！",
								showcontent: "速度加入乐车邦邀请好友行动，拥有自己的聚宝“朋”，开启聚宝模式。",
								url: "//m.lechebang.com/" + config.baseUrl + "/promotion/friend"
							}
						})), t.share.show()
					}
				}]), this.header.option(e)
			},
			onShow: function() {
				this.$el.html(this.template(t))
			},
			goAction: function() {
				app.goTo("user/invite")
			}
		});
		return r
	}), define("textactivityIndexHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.activity-box{padding:10px}.activity-box li{background-color:#fff;margin-bottom:10px;border-radius:5px;border:1px solid #e8e8ed;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.activity-box li:last-child{margin-bottom:0}.activity-box li img{display:block;width:100%}.activity-box li .txt{position:relative;padding:0 30px 0 15px;line-height:52px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.activity-box li .txt::after{content:"";width:8px;height:8px;border-top:1px solid #999;border-right:1px solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:20px;top:50%;margin-top:-1px;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}</style><div class=page-content><div class=activity-box><ul>', activityList && (__p += "\n                ", _.each(activityList, function(t) {
				__p += '<li class=js-go data-url="' + (null == (__t = t.targetUrl) ? "" : __t) + '"><img src="' + (null == (__t = t.iphoneImgUrl) ? "" : __t) + '" alt><div class=txt>' + (null == (__t = t.title) ? "" : __t) + "</div></li>"
			}), __p += "\n            "), __p += "</ul></div><div style=height:64px>&nbsp;</div></div><div class=footer-slide></div>";
			return __p
		}
	}), define("controller/activity/index", ["textactivityIndexHtml", "Footer", "PageView", "geolocation"], function(t, e, i, n) {
		var a = i.extend({
			events: {
				"click .js-go": "goAction",
				"click .in-nav": function(t) {
					var e = $(t.currentTarget);
					if (!e.hasClass("active")) {
						var i = e.data("url");
						"services/index" == i && (n.isOpen() || (i = "city/checkin")), app.goTo(i, {
							animate: !1
						})
					}
				}
			},
			onCreate: function() {
				var t = {
					left: {
						text: '<span class="pub-header-icon header-city js-city">' + n.getPostion().addressComponent.city + "</span>",
						callback: function() {
							app.goTo("city/index")
						}
					},
					center: {
						text: "热门活动"
					},
					right: [{
						text: '<a href="tel:4006300111"><i class="iconfont">&#xe60e;</i></a>'
					}]
				};
				this.header.option(t), this.renderFooter()
			},
			ajax: function() {
				var t = {
					url: "mkt/getAdByCityAndPosition",
					local: !0,
					expires: "1H",
					data: {
						positionId: 2,
						cityId: n.getPostion().cityId
					}
				};
				return t
			},
			onShow: function(e) {
				var i = this.template(t, {
					activityList: e
				});
				this.$(".js-page-wrap").html(i)
			},
			renderFooter: function() {
				this.$el.html('<div class="js-page-wrap" style="height:100%;"></div>');
				new e({
					ctrlName: this.ctrlName,
					appendElement: this.el
				})
			},
			goAction: function(t) {
				var e = $(t.currentTarget),
					i = e.data("url");
				null !== i && app.goTo(i)
			}
		});
		return a
	}), define("textmaintenanceManualHtml", [], function() {
		return function(obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<style>.send2{margin-bottom:10px;padding:0 10px}.plan-table{width:100%;background-color:#fff}.plan-title{margin:0;padding:0;background-color:#fff;float:left;border:0}.plan-title table,.plan-title th,.plan-title td{width:100%;border:1px solid #f3f3f3}.plan-title th{height:48px;background-color:#fdfdff;text-align:left;padding:0 15px;font-size:13px;font-weight:400;border:1px solid #f3f3f3}.plan-title td{height:48px;padding:0 15px;text-align:left;width:100%;font-size:13px;font-weight:700;border:1px solid #f3f3f3}.plan-items{margin:0;padding:0;background-color:#fff;border:0;overflow:hidden}.plan-items table{width:100%}.plan-items th{height:48px;background-color:#fdfdff;text-align:center;font-size:12px;font-weight:400;padding:0 8px;border:1px solid #f3f3f3}.plan-items td{height:48px;text-align:center;padding:0 8px;border:1px solid #f3f3f3}.plan-items td span{display:inline-block;width:30px;height:30px;line-height:30px;border-radius:9999px}.plan-items td .items{background-color:#ff7a7a;color:#fff}.plan-items td .nearItems{border:1px solid #f0d415;color:#f0d415}.plan-items td .otherItems{border:1px solid #98db62;color:#98db62}.plan-items .checkItem{background-color:#fcfcff}</style><div class=page-content><div class=car-info-box><div class=car-info><div class=brand><img src="' + (null == (__t = car.imgUrl) ? "" : __t) + '" alt></div><div class=info><div class>' + (null == (__t = car.name) ? "" : __t) + "</div><p>实际里程 " + (null == (__t = car.mileage) ? "" : __t) + '公里</p></div></div></div><div class="send2 js-check">随保养赠送厂家标准检测\n&nbsp;<i class="iconfont icf-info"></i></div><div class=plan-table><div class=plan-title><table><tr><th>保养项目</th></tr>', _.each(itemList, function(t) {
				__p += "<tr><td>" + (null == (__t = t.itemName) ? "" : __t) + "</td></tr>"
			}), __p += "</table></div><div class=plan-items><div id=wrapper><table><tr>", _.each(planList, function(t) {
				__p += "\n                    ", __p += t.planId == planId ? "<th class=checkItem style=font-weight:700>" + (null == (__t = t.mileage) ? "" : __t) + "KM</th>" : "<th>" + (null == (__t = t.mileage) ? "" : __t) + "KM</th>", __p += "\n                "
			}), __p += "</tr>", _.each(itemList, function(t) {
				__p += "<tr>", _.each(t.planList, function(t) {
					__p += "\n                        ", __p += t.planId == planId ? '<td class=checkItem><span class="' + (null == (__t = t.type) ? "" : __t) + '">' + (null == (__t = t.name) ? "" : __t) + "</span></td>" : '<td><span class="' + (null == (__t = t.type) ? "" : __t) + '">' + (null == (__t = t.name) ? "" : __t) + "</span></td>", __p += "\n                    "
				}), __p += "</tr>"
			}), __p += "</table></div></div></div></div>";
			return __p
		}
	}), define("controller/car/maintenanceManual", ["textmaintenanceManualHtml", "textfreeCheckHtml", "PageView", "session", "local", "UIScreen", "IScroll", "geolocation", "user"], function(t, e, i, n, a, r, o, s, l) {
		var c = i.extend({
			events: {
				"click .js-check": "checkAction"
			},
			onCreate: function() {
				var t = this;
				this.header.option({
					center: {
						text: "保养手册"
					}
				});
				var e = t.query;
				this.cityId = s.getPostion().cityId, this.car = a._get("car"), this.planId = e.planId ? e.planId : null, t.data = this.planId ? {
					currentPlanId: this.planId,
					cityId: t.cityId
				} : {
					token: l.token,
					carId: t.car.id,
					cityId: t.cityId
				}
			},
			ajax: function() {
				var t = {
					url: "plan/getMaintenanceManual",
					data: this.data
				};
				return t
			},
			onShow: function(e) {
				var i = this,
					n = {},
					a = {},
					r = 1,
					o = 1,
					s = !0,
					l = 1;
				_.each(e, function(t) {
					var e = t.plan.id;
					t.current ? (i.planId = e, s = !1) : s && o++, a[l] || (r++, a[l] = {
						mileage: t.plan.mileage,
						usedTime: t.plan.usedTime,
						planId: e
					}), _.each(t.items, function(t) {
						n[t.id] || (n[t.id] = {
							itemName: t.itemName,
							planList: {}
						}), n[t.id].planList[l] = {
							type: "items",
							name: "换",
							planId: e
						}
					}), _.each(t.nearItems, function(t) {
						n[t.id] || (n[t.id] = {
							itemName: t.itemName,
							planList: {}
						}), n[t.id].planList[l] = {
							type: "nearItems",
							name: "良",
							planId: e
						}
					}), _.each(t.otherItems, function(t) {
						n[t.id] || (n[t.id] = {
							itemName: t.itemName,
							planList: {}
						}), n[t.id].planList[l] = {
							type: "otherItems",
							name: "优",
							planId: e
						}
					}), l++
				});
				var c = this.template(t, {
					car: this.car,
					itemList: n,
					planList: a,
					planId: this.planId
				});
				this.$el.html(c), this.iscrollTable(s, o, r)
			},
			checkAction: function() {
				new r({
					appendElement: document.body,
					title: "保养检测说明",
					msg: e
				})
			},
			iscrollTable: function(t, e, i) {
				var n = 0,
					a = 0;
				if (!t && e > 2) {
					var r = !0;
					$("#wrapper table th").each(function() {
						"checkItem" == $(this).attr("class") && (r = !1), r && (a += parseInt($(this).width()))
					});
					var s = $("th.checkItem").prev().width();
					if (n = s - a, e + 1 == i) {
						var l = $("th.checkItem").prev().prev().width();
						n += l
					}
				}
				new o("#wrapper", {
					scrollX: !0,
					scrollY: !0,
					scrollbars: !0,
					momentum: !0,
					snap: "th",
					eventPassthrough: !0,
					startX: n
				})
			}
		});
		return c
	}), define("spreadInfoCollect", ["util", "events", "backbone", "user", "local", "app", "dateUtil"], function(t, e, i, n, a, r, o) {
		var s = {
			setSpreadInfo: function() {
				var e = t.getQuery(window.location.href);
				if (e.alliance_id || e.site_id || e.channel_id || e.act_id) {
					var i = {};
					e.alliance_id && (i.alliance_id = e.alliance_id), e.site_id && (i.site_id = e.site_id), e.channel_id && (i.channel_id = e.channel_id), e.act_id && (i.act_id = e.act_id), i.join_time = o.now(), a.set("spread_info", i), this.saveSpreadInfo(i)
				}
			},
			getSpreadInfo: function() {},
			saveSpreadInfo: function(t) {
				n.isLogin && r.ajax({
					url: "user/join",
					data: {
						spreadInfo: t
					},
					success: function(t) {}
				})
			}
		};
		return e.on("bootstrap", function() {
			s.setSpreadInfo()
		}), s
	});
var app = {
		nativeApi: {
			done: function() {
				this._isReady = !0, this._event && this._event()
			},
			startApp: function(t) {
				this._isReady || window.wvjb && window.wvjb.info ? t() : this._event = t
			},
			checkShare: function() {
				return _.find(["weixin", "qq", "weibo"], function(t) {
					return app.nativeApi.has("share." + t)
				})
			}
		}
	},
	templateApi = {
		distance: function(t) {
			return t ? t >= 1e3 ? (t / 1e3).toFixed(2) + "公里&nbsp;" : t + "米&nbsp;" : ""
		},
		price: function(t) {
			return parseInt(t / 100, 10)
		},
		price2: function(t) {
			return t = t / 100 + "", '<span class="font-xs">&yen;</span>' + t
		},
		week: function(t) {
			var e = new Date(t),
				i = ["日", "一", "二", "三", "四", "五", "六", "日"];
			return i[e.getDay()]
		},
		oilNum: function(t) {
			return t ? '<span style="margin-right:10px;">' + t + "L</span>" : ""
		}
	};
require(["app", "events", "spreadInfoCollect"], function(t) {
	function e() {
		var t, e, i = document.querySelector("body"),
			n = document.documentElement.clientWidth;
		e = i.getBoundingClientRect ? i.getBoundingClientRect().width : n, n > 540 && $(".page-left-hide,.page-right-hide").css("width", (n - 540) / 2), t = 100 * Math.min(e, 540) / 375, document.documentElement.style.fontSize = t.toFixed(3) + "px"
	}
	if (!window.lcbAppStop) {
		var i = "orientationchange" in window ? "orientationchange" : "resize";
		window.addEventListener(i, e), e(), config.env || (config.env = $("meta[name=env]").attr("content")), config.appCode = $.os.ios && $.os.lechebang ? 700 : $.os.lechebang ? 600 : $.os.weixin ? 100 : 101, window.app = "undefined" != typeof app ? $.extend(!0, t, app) : t, app.start()
	}
}), setTimeout(function() {
	var t = document.createElement("script");
	t.src = "//hm.baidu.com/hm.js?3962fea16b5810a25efa6912355d80b1";
	var e = document.getElementsByTagName("script")[0];
	e.parentNode.insertBefore(t, e)
}, 10), define("h5/lib/main", function() {});