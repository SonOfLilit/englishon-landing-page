/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = "2.1.4",
      n = function (a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function (a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
      return d.call(this);
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    }, pushStack: function (a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function (a, b) {
      return n.each(this, a, b);
    }, map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function () {
      return this.pushStack(d.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function () {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a);
    }, noop: function () {}, isFunction: function (a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function (a) {
      return null != a && a === a.window;
    }, isNumeric: function (a) {
      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
    }, isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function (a) {
      var b;for (b in a) return !1;return !0;
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
    }, globalEval: function (a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function (a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = s(a);if (c) {
        if (g) {
          for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
        } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
      } else if (g) {
        for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
      } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;return a;
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function (a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    }, inArray: function (a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    }, merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return a.length = e, a;
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
    }, map: function (a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);else for (f in a) d = b(a[f], f, c), null != d && i.push(d);return e.apply([], i);
    }, guid: 1, proxy: function (a, b) {
      var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function (a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function (a, b) {
      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        aa = /[+~]/,
        ba = /'|\\/g,
        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        da = function (a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ea = function () {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) o[l] = s + ra(o[l]);w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
          }if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }return i(a.replace(R, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = a.length;while (e--) d.attrHandle[c[e]] = b;
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) h.unshift(c);c = b;while (c = c.parentNode) i.unshift(c);while (h[d] === i[d]) d++;return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function (a) {
          var b,
              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function (a) {
          var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function (a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function (a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;if (q) {
              if (f) {
                while (p) {
                  l = b;while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                  k[a] = [w, n, m];break;
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        }, PSEUDO: function (a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(ca, da), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
            var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function (b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function (a) {
          return a === o;
        }, focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function (a) {
          return a.disabled === !1;
        }, disabled: function (a) {
          return a.disabled === !0;
        }, checked: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
        }, parent: function (a) {
          return !d.pseudos.empty(a);
        }, header: function (a) {
          return Z.test(a.nodeName);
        }, input: function (a) {
          return Y.test(a.nodeName);
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function (a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: oa(function () {
          return [0];
        }), last: oa(function (a, b) {
          return [b - 1];
        }), eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);return a;
        }), odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);return a;
        }), lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
        }), gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
    }function sa(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || e) {
          if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
        }
      };
    }function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
      } : a[0];
    }function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);return c;
    }function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
    }function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : va(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
            }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
        return a === b;
      }, h, !0), l = sa(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
        }m.push(c);
      }return ta(m);
    }function ya(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function (f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;while (o = a[m++]) if (o(l, g, h)) {
              i.push(l);break;
            }k && (w = v);
          }c && ((l = !o && l) && p--, f && r.push(l));
        }if (p += q, c && q !== p) {
          m = 0;while (o = b[m++]) o(r, s, g, h);if (f) {
            if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));s = va(s);
          }H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = v, j = t), r;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, ya(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function (a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
      }));for (b = 0; c > b; b++) n.find(a, e[b], d);return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function (a) {
      return this.pushStack(x(this, a || [], !1));
    }, not: function (a) {
      return this.pushStack(x(this, a || [], !0));
    }, is: function (a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
    } });var y,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = n.fn.init = function (a, b) {
    var c, d;if (!a) return this;if ("string" == typeof a) {
      if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);return this;
      }return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
      C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function (a, b, c) {
      var d = [],
          e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }return d;
    }, sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
    } }), n.fn.extend({ has: function (a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    }, closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);break;
      }return this.pushStack(f.length > 1 ? n.unique(f) : f);
    }, index: function (a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);return a;
  }n.each({ parent: function (a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function (a) {
      return n.dir(a, "parentNode");
    }, parentsUntil: function (a, b, c) {
      return n.dir(a, "parentNode", c);
    }, next: function (a) {
      return D(a, "nextSibling");
    }, prev: function (a) {
      return D(a, "previousSibling");
    }, nextAll: function (a) {
      return n.dir(a, "nextSibling");
    }, prevAll: function (a) {
      return n.dir(a, "previousSibling");
    }, nextUntil: function (a, b, c) {
      return n.dir(a, "nextSibling", c);
    }, prevUntil: function (a, b, c) {
      return n.dir(a, "previousSibling", c);
    }, siblings: function (a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    }, children: function (a) {
      return n.sibling(a.firstChild);
    }, contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    };
  });var E = /\S+/g,
      F = {};function G(a) {
    var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function (l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
        b = !1;break;
      }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
    },
        k = { add: function () {
        if (h) {
          var c = h.length;!function g(b) {
            n.each(b, function (b, c) {
              var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
            });
          }(arguments), d ? f = h.length : b && (e = c, j(b));
        }return this;
      }, remove: function () {
        return h && n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
        }), this;
      }, has: function (a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
      }, empty: function () {
        return h = [], f = 0, this;
      }, disable: function () {
        return h = i = b = void 0, this;
      }, disabled: function () {
        return !h;
      }, lock: function () {
        return i = void 0, b || k.disable(), this;
      }, locked: function () {
        return !i;
      }, fireWith: function (a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
      }, fire: function () {
        return k.fireWith(this, arguments), this;
      }, fired: function () {
        return !!c;
      } };return k;
  }, n.extend({ Deferred: function (a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function () {
          return c;
        }, always: function () {
          return e.done(arguments).fail(arguments), this;
        }, then: function () {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function (a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function (a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;return f || g.resolveWith(k, c), g.promise();
    } });var H;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
    } });function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
  }n.ready.promise = function (b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
  }, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function K() {
    Object.defineProperty(this.cache = {}, 0, { get: function () {
        return {};
      } }), this.expando = n.expando + K.uid++;
  }K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function (a) {
      if (!K.accepts(a)) return 0;var b = {},
          c = a[this.expando];if (!c) {
        c = K.uid++;try {
          b[this.expando] = { value: c }, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, n.extend(a, b);
        }
      }return this.cache[c] || (this.cache[c] = {}), c;
    }, set: function (a, b, c) {
      var d,
          e = this.key(a),
          f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) f[d] = b[d];return f;
    }, get: function (a, b) {
      var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
    }, access: function (a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function (a, b) {
      var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) delete g[d[c]];
      }
    }, hasData: function (a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    }, discard: function (a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    } };var L = new K(),
      M = new K(),
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;function P(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}M.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    }, data: function (a, b, c) {
      return M.access(a, b, c);
    }, removeData: function (a, b) {
      M.remove(a, b);
    }, _data: function (a, b, c) {
      return L.access(a, b, c);
    }, _removeData: function (a, b) {
      L.remove(a, b);
    } }), n.fn.extend({ data: function (a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));L.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == typeof a ? this.each(function () {
        M.set(this, a);
      }) : J(this, function (b) {
        var c,
            d = n.camelCase(a);if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c) return c;if (c = M.get(f, d), void 0 !== c) return c;if (c = P(f, d, void 0), void 0 !== c) return c;
        } else this.each(function () {
          var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function (a) {
      return this.each(function () {
        M.remove(this, a);
      });
    } }), n.extend({ queue: function (a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function (a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          L.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function (a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function (a) {
      return this.queue(a || "fx", []);
    }, promise: function (a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
    } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      S = function (a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  },
      T = /^(?:checkbox|radio)$/i;!function () {
    var a = l.createDocumentFragment(),
        b = a.appendChild(l.createElement("div")),
        c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
      W = /^(?:mouse|pointer|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
    return !0;
  }function $() {
    return !1;
  }function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }n.event = { global: {}, add: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(E) || [""], j = b.length;while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
      }
    }, remove: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    }, trigger: function (b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          m,
          o,
          p = [d || l],
          q = j.call(b, "type") ? b.type : b,
          r = j.call(b, "namespace") ? b.namespace.split(".") : [];if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    }, dispatch: function (a) {
      a = n.event.fix(a);var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (L.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function (a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
        var c,
            d,
            e,
            f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      } }, fix: function (a) {
      if (a[n.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) c = d[b], a[c] = f[c];return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function (a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function () {
      var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
    }, stopPropagation: function () {
      var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
    }, stopImmediatePropagation: function () {
      var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };n.event.special[b] = { setup: function () {
        var d = this.ownerDocument || this,
            e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      }, teardown: function () {
        var d = this.ownerDocument || this,
            e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      } };
  }), n.fn.extend({ on: function (a, b, c, d, e) {
      var f, g;if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);for (g in a) this.on(g, b, c, a[g], e);return this;
      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;return 1 === e && (f = d, d = function (a) {
        return n().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    }, one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1);
    }, off: function (a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    }, trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function (a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ba = /<([\w:]+)/,
      ca = /<|&#?\w+;/,
      da = /<(?:script|style|link)/i,
      ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fa = /^$|\/(?:java|ecma)script/i,
      ga = /^true\/(.*)/,
      ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function ka(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function la(a) {
    var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }function na(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
    }
  }function oa(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function pa(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }n.extend({ clone: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
    }, buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
        f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) f = f.lastChild;n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
      } else l.push(b.createTextNode(e));k.textContent = "", m = 0;while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
        j = 0;while (e = f[j++]) fa.test(e.type || "") && c.push(e);
      }return k;
    }, cleanData: function (a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);L.cache[e] && delete L.cache[e];
        }delete M.cache[c[M.expando]];
      }
    } }), n.fn.extend({ text: function (a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);b.appendChild(a);
        }
      });
    }, prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, remove: function (a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));return this;
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");return this;
    }, clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function (a) {
      return J(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(aa, "<$1></$2>");try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function () {
      var a = arguments[0];return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    }, detach: function (a) {
      return this.remove(a, !0);
    }, domManip: function (a, b) {
      a = e.apply([], a);var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
        var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
      }return this;
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());return this.pushStack(d);
    };
  });var qa,
      ra = {};function sa(b, c) {
    var d,
        e = n(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
  }function ta(a) {
    var b = l,
        c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
  }var ua = /^margin/,
      va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      wa = function (b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  };function xa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function ya(a, b) {
    return { get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }!function () {
    var b,
        c,
        d = l.documentElement,
        e = l.createElement("div"),
        f = l.createElement("div");if (f.style) {
      f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);function g() {
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
      }a.getComputedStyle && n.extend(k, { pixelPosition: function () {
          return g(), b;
        }, boxSizingReliable: function () {
          return null == c && g(), c;
        }, reliableMarginRight: function () {
          var b,
              c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
        } });
    }
  }(), n.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
  };var za = /^(none|table(?!-c[ea]).+)/,
      Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
      Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
      Ca = { position: "absolute", visibility: "hidden", display: "block" },
      Da = { letterSpacing: "0", fontWeight: "400" },
      Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
    if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
        d = b,
        e = Ea.length;while (e--) if (b = Ea[e] + c, b in a) return b;return d;
  }function Ga(a, b, c) {
    var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function Ha(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));return g;
  }function Ia(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = wa(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
  }n.extend({ cssHooks: { opacity: { get: function (a, b) {
          if (b) {
            var c = xa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function (a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function (a, c, d) {
        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
          return Ia(a, b, d);
        }) : Ia(a, b, d) : void 0;
      }, set: function (a, c, d) {
        var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];return e;
      } }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
  }), n.fn.extend({ css: function (a, b) {
      return J(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function () {
      return Ja(this, !0);
    }, hide: function () {
      return Ja(this);
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide();
      });
    } });function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function () {
      var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
    }, run: function (a) {
      var b,
          c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
    } }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function (a) {
        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      }, set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      } } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function (a) {
      return a;
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    } }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
      Ma,
      Na = /^(?:toggle|show|hide)$/,
      Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Pa = /queueHooks$/,
      Qa = [Va],
      Ra = { "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = Oa.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
          g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }] };function Sa() {
    return setTimeout(function () {
      La = void 0;
    }), La = n.now();
  }function Ta(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;return b && (e.opacity = e.width = a), e;
  }function Ua(a, b, c) {
    for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
  }function Va(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && S(a),
        q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) if (e = b[d], Na.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
      }m[d] = q && q[d] || n.style(a, d);
    } else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;L.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
      });for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }function Wa(a, b) {
    var c, d, e, f, g;for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }function Xa(a, b, c) {
    var d,
        e,
        f = 0,
        g = Qa.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function () {
      if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function (b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function (b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(Xa, { tweener: function (a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
    }, prefilter: function (a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function (a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function (a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
        var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
      });
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), La = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    clearInterval(Ma), Ma = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
  }();var Ya,
      Za,
      $a = n.expr.attrHandle;n.fn.extend({ attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
    }, removeAttr: function (a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
    }, attrHooks: { type: { set: function (a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } } }), Za = { set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
      var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
    };
  });var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function (a) {
          return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
        } } } }), k.optSelected || (n.propHooks.selected = { get: function (a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className));
      });if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
        f = 0;while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");g = n.trim(d), c.className !== g && (c.className = g);
      }return this;
    }, removeClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className));
      });if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
        f = 0;while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
      }return this;
    }, toggleClass: function (a, b) {
      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = n(this),
              f = a.match(E) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
      });
    }, hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;return !1;
    } });var bb = /\r/g;n.fn.extend({ val: function (a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function (a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
        } }, select: { get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
            if (b = n(c).val(), f) return b;g.push(b);
          }return g;
        }, set: function (a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
      } }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }, bind: function (a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function (a, b) {
      return this.off(a, null, b);
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } });var cb = n.now(),
      db = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (a) {
    var b, c;if (!a || "string" != typeof a) return null;try {
      c = new DOMParser(), b = c.parseFromString(a, "text/xml");
    } catch (d) {
      b = void 0;
    }return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
  };var eb = /#.*$/,
      fb = /([?&])_=[^&]*/,
      gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ib = /^(?:GET|HEAD)$/,
      jb = /^\/\//,
      kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      lb = {},
      mb = {},
      nb = "*/".concat("*"),
      ob = a.location.href,
      pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }function rb(a, b, c, d) {
    var e = {},
        f = a === mb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function sb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return d && n.extend(!0, a, d), a;
  }function tb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
      i.unshift(e);break;
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function ub(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
      }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
        b = g(b);
      } catch (l) {
        return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    }, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function (a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = { readyState: 0, getResponseHeader: function (a) {
          var b;if (2 === t) {
            if (!f) {
              f = {};while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2];
            }b = f[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function () {
          return 2 === t ? e : null;
        }, setRequestHeader: function (a, b) {
          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
        }, overrideMimeType: function (a) {
          return t || (k.mimeType = a), this;
        }, statusCode: function (a) {
          var b;if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];else v.always(a[v.status]);return this;
        }, abort: function (a) {
          var b = a || u;return c && c.abort(b), x(0, b), this;
        } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) v.setRequestHeader(j, k.headers[j]);if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);if (c = rb(mb, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;x(-1, w);
        }
      } else x(-1, "No Transport");function x(a, b, f, h) {
        var j,
            r,
            s,
            u,
            w,
            x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
      }return v;
    }, getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function (a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
      }).append(this)), this);
    }, wrapInner: function (a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b));
      } : function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function (a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };var vb = /%20/g,
      wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function (a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Ab(c, a[c], b, e);return d.join("&").replace(vb, "+");
  }, n.fn.extend({ serialize: function () {
      return n.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {}
  };var Bb = 0,
      Cb = {},
      Db = { 0: 200, 1223: 204 },
      Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Cb) Cb[a]();
  }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
    var b;return k.cors || Eb && !a.crossDomain ? { send: function (c, d) {
        var e,
            f = a.xhr(),
            g = ++Bb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) f.setRequestHeader(e, c[e]);b = function (a) {
          return function () {
            b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (b) throw h;
        }
      }, abort: function () {
        b && b();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;return { send: function (d, e) {
          b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
          }), l.head.appendChild(b[0]);
        }, abort: function () {
          c && c();
        } };
    }
  });var Fb = [],
      Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
        e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  };var Hb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };var Ib = a.document.documentElement;function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function () {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ib;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
    var d = "pageYOffset" === c;n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
      }, b, e, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
      return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Kb = a.jQuery,
      Lb = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
  }, typeof b === U && (a.jQuery = a.$ = n), n;
});
//
/*! jQuery UI - v1.12.1 - 2017-01-22
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery);})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e;}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent();}return 0;}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover");}).on("mouseover",i,o);}function o(){t.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"));}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e;}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change");};}t.ui=t.ui||{},t.ui.version="1.12.1";var h=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove");}catch(a){}e(i);};}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l);},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e);},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i(),a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments);}function n(t){return i.prototype[e].apply(this,t);}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e;};}(),void 0):(r[e]=s,void 0);}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto);}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o;},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e;},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'");}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this));})),r;};},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy();}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init();},_getCreateOptions:function(){return{};},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t);}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace);},_destroy:t.noop,widget:function(){return this.element;},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i;}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i;}return this._setOptions(a),this;},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this;},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this;},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})));},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"));},enable:function(){return this._setOptions({disabled:!1});},disable:function(){return this._setOptions({disabled:!0});},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]]);}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ");},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()));});},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1);},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0);},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this;},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0;}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r);});},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get());},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments);}var s=this;return setTimeout(i,e||0);},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover");},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover");}});},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus");},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus");}});},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented());}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i();});};}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)];}function i(e,i){return parseInt(t.css(e,i),10)||0;}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()};}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i;},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0};},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()};}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]];}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,h=t(this),l=h.outerWidth(),c=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h});}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u);}),h.offset(t.extend(D,{using:r}));});},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left);},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top);}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>a(s))&&(t.left+=d+p+f));},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>a(i))&&(t.top+=p+f+g));}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments);},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments);}}};}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e);};}):function(e,i,s){return!!t.data(e,s[3]);}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault();});};}(),enableSelection:function(){return this.off(".ui-disableSelection");}}),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)));},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"));}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form);},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh();});});},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t);}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0);}),i;}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px");});},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px");});};}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t));}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1");};}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n));},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"));}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document);},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s);}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t);});};}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id");});}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var c=!1;t(document).on("mouseup",function(){c=!1;}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t);}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0;}),this.started=!1;},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);},_mouseDown:function(e){if(!c){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0;},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t);},this._mouseUpDelegate=function(t){return i._mouseUp(t);},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),c=!0,!0)):!0;}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e);}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted);},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,c=!1,e.preventDefault();},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance;},_mouseDelayMet:function(){return this.mouseDelayMet;},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0;}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]]);},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i);}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement;}catch(i){e=t.body;}return e||(e=t.body),e.nodeName||(e=t.body),e;},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur");},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit();},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName());},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0);},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1);},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];});},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks);},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i);},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position");}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0);},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top};},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position;}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1;},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear();}):this._trigger("stop",e)!==!1&&this._clear(),!1;},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e);},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this;},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0;},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle");},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle");},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n;},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative");},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top);},_isRootNode:function(t){return /(html|body)/i.test(t.tagName)||t===this.document[0];},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())};},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0);},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i};},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)};},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy();},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s);},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n));});},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n));});},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n;})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0];},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions();}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions();}));});}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor);},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor);}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity);},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity);}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset());},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e);}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left});});},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,h-g>_||m>l+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p);}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0);});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e);}),this.css("zIndex",n+a.length));}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex);},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex);}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s);},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable");},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this);},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1);},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e);},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i);};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i);}this._super(e,i);},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i));},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i));},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)));},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)));},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&u(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0;}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1;},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs};},_addHoverClass:function(){this._addClass("ui-droppable-hover");},_removeHoverClass:function(){this._removeClass("ui-droppable-hover");},_addActiveClass:function(){this._addClass("ui-droppable-active");},_removeActiveClass:function(){this._removeClass("ui-droppable-active");}});var u=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t;}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=l&&u>=r&&a>=c&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d)&&(o>=l&&u>=o||r>=l&&u>=r||l>o&&r>u);default:return!1;}};}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t;}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}));}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&u(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)));}),s;},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i);});},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=u(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n;}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)));}});},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i);}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass);},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass);},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass);},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0;},_isNumber:function(t){return!isNaN(parseFloat(t));},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n);},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show());}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide());}),this._mouseInit();},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this;},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i]);},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se");}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"));},_removeHandles:function(){this._handles.remove();},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n;},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0;},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1;},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,h=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1;},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height};},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t;},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o;},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width);},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t;},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t;},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]};},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0});},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element;},_change:{e:function(t,e){return{width:this.originalSize.width+e};},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e};},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i};},s:function(t,e,i){return{height:this.originalSize.height+i};},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]));},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]));},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]));},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]));}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui());},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e);}});}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s));}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}));},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height);},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l});}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))});});},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null);}),e.css(n);});},stop:function(){t(this).removeData("ui-resizable-alsoresize");}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper);},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width});},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0));}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=c),g&&(p-=l),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p));}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")});});},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper");},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy();},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}));}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0;}));},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(c.left>r||o>c.right||c.top>h||a>c.bottom):"fit"===n.tolerance&&(l=c.left>o&&r>c.right&&c.top>a&&h>c.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))));}),!1;}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element});}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element});}),this._trigger("stop",e),this.helper.remove(),!1;}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t;},_isFloating:function(t){return /left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"));},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0;},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName();},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle");});},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this;},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0;}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0);}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1);},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0;},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break;}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1;},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e);});}else this._clear(e,i);return!1;}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0);}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this;},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]));}),!s.length&&e.key&&s.push(e.key+"="),s.join("&");},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"");}),s;},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2;},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1;},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e);},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up");},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left");},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this;},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith;},_getItemsAsjQuery:function(e){function i(){r.push(this);}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r);},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0;});},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0});},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this;},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n;},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)));}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder);},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i);});},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i;}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[u]-h)&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1;}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s;},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top);},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}return{top:0,left:0};},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]);},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s};},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())};},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s);});},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e));};}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper");}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside));}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash());}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash());}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this));};}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this));};}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash());}return this.fromOutside=!1,!this.cancelHelperRemoval;},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel();},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null};}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh();},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()};},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"));},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove();},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","");},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0);},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t);},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1];}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault());}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus");},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh();},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)));},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i);}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0));}),this.headers.each(function(){e-=t(this).outerHeight(!0);}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()));}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide();}).height(e));},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}));},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t();},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler";}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers);},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")));},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10);}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i);};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t);}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0);}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d);},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t);}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault();},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)));},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s));}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i);},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e);});},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1;}});},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove();});},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter;},1e3)):delete this.previousFilter;}a&&e.preventDefault();},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t));},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"));}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content");}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur();},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role];},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu);}this._super(t,e);},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t);},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close();},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e});},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r));},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null);},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t);},this.delay));},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i);},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s;},this.delay);},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false");},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length;},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text());},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e));},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e);}));},next:function(t){this._move("next","first",t);},previous:function(t){this._move("prev","last",t);},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s);},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n;}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0);},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0;}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0);},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight");},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i);},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));});}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n);}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s);}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0);},focus:function(){this.selectedItem=null,this.previous=this._value();},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0);}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus");});},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent);}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0);},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s;})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s;}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove();},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort();},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target);},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close();},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e;},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term));}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t);},error:function(){n([]);}});}):this.source=this.options.source;},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t));},this.options.delay);},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0;},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response());},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading");},this);},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close();},close:function(t){this.cancelSearch=!0,this._close(t);},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t));},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem});},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label});});},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"});},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()));},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i);});},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e);},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e);},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0);},widget:function(){return this.menu.element;},_value:function(){return this.valueMethod.apply(this.element,arguments);},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault());},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e;}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t);});}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate.";}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion));}}),t.ui.autocomplete;var d=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance();},_enhance:function(){this.element.attr("role","toolbar"),this.refresh();},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0]);}})),void 0):void 0;}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item");},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]();});},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s);},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s;},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e;},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button");},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label");},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]};},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(d,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ");}),s;},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0);},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o);}else i._updateCornerClass(e[s](),s);}),this._callChildMethod("refresh"));}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML;}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n;},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus");},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus");}});},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type);},_enhance:function(){this._updateIcon(this.element[0].checked);},widget:function(){return this.label;},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length;}),e.not(this.element)):t([]);},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active");});},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove());},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0;},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon);},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label);},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e});}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e;},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"));}});},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip());},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label);},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n));},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title");},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace);},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon);},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t);},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur());},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip();}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super();},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0);}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments));};}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments));}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var p;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv;},setDefaults:function(t){return a(this._defaults,t||{}),this;},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o);},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv};},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e));},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1;}));},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s;},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length);}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"));},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+c,l/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this;},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),p===n&&(p=null));},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1;}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t;}));},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0;}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t;}),this._disabledInputs[this._disabledInputs.length]=e);},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1;},_getInst:function(e){try{return t.data(e,"datepicker");}catch(i){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0);},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i);},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e);},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i));},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null;},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1;}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation());},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0;},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s));}catch(n){}return!0;},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r;}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s));}},_updateDatepicker:function(e){this.maxRows=4,p=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null;},0));},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus");},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i;},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top];},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a);},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1);},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker();}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o));},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date(),n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s);},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n);},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)));},_clearDate:function(e){var i=t(e);this._selectDate(i,"");},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null);},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n));},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""];},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1;},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof l?l:new Date().getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i;},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10);},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]];}).sort(function(t,e){return-(t[1].length-e[1].length);});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0;}),-1!==o)return o+1;throw"Unknown name at position "+h;},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++;};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x();}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=new Date().getFullYear():100>g&&(g+=new Date().getFullYear()-new Date().getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o;}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r;},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i;},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s;},c=function(t,e,i,s){return h(t)?s[e]:i[e];},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s);}return u;},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s;};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e);}return i;},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e];},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n;}catch(r){s=e?"":s;}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t);}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date()));},_determineDate:function(e,i,s){var n=function(t){var e=new Date();return e.setDate(e.getDate()+t),e;},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e));}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date(),o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));}l=h.exec(i);}return new Date(o,a,r);},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a);},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null;},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date()));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t));},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e;},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M");},next:function(){t.datepicker._adjustDate(s,+i,"M");},hide:function(){t.datepicker._hideDatepicker();},today:function(){t.datepicker._gotoToday(s);},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1;},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1;},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1;}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")]);});},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,L,R=new Date(),B=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",X){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I="";}T+="'>";}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,P+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=Math.ceil((H+S)/7),O=X?this.maxRows>z?this.maxRows:z:z,this.maxRows=O,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;O>N;N++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)E=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!E[0]||Q&&Q>A||J&&A>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+E[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=W+"</tr>";}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T;}y+=x;}return y+=l,t._keyEvent=!1,y;},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>";}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=new Date().getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e;},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null;}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>";},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t);},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n;},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t]);},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e;},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null);},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate();},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay();},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o);},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=new Date().getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear());},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:new Date().getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")};},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t));}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e);}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i));},t.datepicker=new s(),t.datepicker.initialized=!1,t.datepicker.uuid=new Date().getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i);}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus();},_init:function(){this.options.autoOpen&&this.open();},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0);},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element);},widget:function(){return this.uiDialog;},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e);}));},isOpen:function(){return this._isOpen;},moveToTop:function(){this._moveToTop();},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index");}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s;},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus");}),this._makeFocusTarget(),this._trigger("open"),void 0);},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus");},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable();}e.preventDefault(),i.call(this),this._delay(i);},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus");}),e.preventDefault()):(this._delay(function(){s.trigger("focus");}),e.preventDefault());}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable();}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus");}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t);}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")});},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;");},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons();},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments);});}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0);},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset};}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n));},drag:function(t,s){i._trigger("drag",t,e(s));},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o));}});},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size};}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n));},resize:function(t,s){i._trigger("resize",t,e(s));},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o));}}).css("position",o);},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target);}});},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this);},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1);},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t;},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height);},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide();},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e);}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n);},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight());},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0];});},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks);},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length;},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1;}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable());}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1);}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null;}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass);},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments);}}),t.ui.dialog,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue();},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove();},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0);},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t));},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue();},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e);},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t);},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min);},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete");}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t();},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault();}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu();});},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t);},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"));}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1;},this.menuInstance._isDivider=function(){return!1;};},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton();},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")));},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)));},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position));},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t));},widget:function(){return this.button;},menuWidget:function(){return this.menu;},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i;},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o);});},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e);},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e);},_setText:function(t,e){e?t.text(e):t.html("&#160;");},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s);},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li");},_toggle:function(t){this[this.isOpen?"close":"open"](t);},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus());},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e));}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange();},click:function(t){this._setSelection(),this._toggle(t);},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1;}i&&e.preventDefault();}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t);},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e);},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e);},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button);}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton();},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0);},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e;},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen);},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0);},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1));},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t;},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e));}),this.items=s;},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")};},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element);}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1;},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue();},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0);});},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null);},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles);},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy();},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e);}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0));},_mouseStart:function(){return!0;},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1;},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1;},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal";},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o);},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s;},_hasMultipleValues:function(){return this.options.values&&this.options.values.length;},_start:function(t,e){return this._trigger("start",t,this._uiHash(e));},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)));},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e));},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)));},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value();},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue();},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1;}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t);},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t);},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i;}return[];},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5));},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()));},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t;},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1;},_valueMin:function(){return this.options.min;},_valueMax:function(){return this.max;},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""});},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i;}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate));},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return;}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o);}this._slide(e,a,n);},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"));}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n);}),e;},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault();},keyup:"_stop",focus:function(){this.previous=this.element.val();},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0);},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t);},100),t.preventDefault();}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s;}));}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this);}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e);},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0;},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>");},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height());},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0;}return!1;},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1;},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i);},t),this._spin(e*this.options.step,i);},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++);},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1;},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t;},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1;},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t;},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t));},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0);},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable");},_setOptions:r(function(t){this._super(t);}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t;},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t;},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())});},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t);},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh();},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element);},stepUp:r(function(t){this._stepUp(t);}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop());},stepDown:r(function(t){this._stepDown(t);}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop());},pageUp:r(function(t){this._stepUp((t||1)*this.options.page);}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page);}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val());},widget:function(){return this.uiSpinner;}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());},_uiSpinnerHtml:function(){return"<span>";},_buttonHtml:function(){return"<a></a><a></a>";}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i);}catch(n){}try{s=decodeURIComponent(s);}catch(n){}return e.hash.length>1&&i===s;};}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t);}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active);},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0;}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e;},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()};},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return;}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s);},this.delay));}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"));},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0;},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e;}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e;},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t;},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0);},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t);}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh();},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0);},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault();}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur();}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0];}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r);}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)));},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0);},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0);},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0);},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler";}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault();}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs);},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0));}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0);}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()));}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height());}).height(i));},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c));},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i);}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s());}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n();}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex");}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}));},_findActive:function(e){return e===!1?t():this.tabs.eq(e);},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e;},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls");}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","");},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null;}):t.map(this.tabs,function(t,i){return i!==e?i:null;})),this._setOptionDisabled(i));},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e];}this._setOptionDisabled(i);}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr;};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),h(n,e);},1);}).fail(function(t,e){setTimeout(function(){h(t,e);},1);})));},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s));}};},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i));}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab");}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html();},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")));},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby");},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([]);},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element);});},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]();},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0);}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0;}));},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"));}),this.disabledTitles=t([]);},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""));}),this._registerCloseHandlers(e,s),this._updateContent(s,e));},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i));});}),i&&this._open(e,t,i),void 0);},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l);}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r));},t.fx.interval)),this._trigger("open",e,{tooltip:a});}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0);}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip);}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s);},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this));}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e];}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0);},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i};},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null;},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")];},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e;},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"));}),this.liveRegion.remove();}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t;}}),t.ui.tooltip;var f="ui-effects-",g="ui-effects-style",m="ui-effects-animated",_=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t);}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e;}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i];}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t;}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]];}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]];}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)];}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]];}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n);},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1};}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e);}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice());}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba);}u[o][e.idx]=i(n[t],e,!0);}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])));}),this):e;},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e;})),s;}),s;},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i);}),t.pop();},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)));}),this[n](h);},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t;}));},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t;});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")";},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t;});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")";},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t;}).join("");},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString();}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a];},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o];},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e);}),c?(n=l(c(d)),n[a]=d,n):l(d);},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)));});});}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode;}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default");}n=n.toRgbaString();}try{e.style[i]=n;}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos));};});},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t;}),e;}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"};}(_),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o;}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a;}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(_.style(t.elem,i,t.end),t.setAttr=!0);};}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t));}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)};}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e]);});},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this;}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e);}});return this.el.animate(this.diff,s),i.promise();}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"");});}),h.complete.call(a[0]);});});},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments);};}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments);};}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o);};}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o);}});}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e;}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0;}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0};}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(m)||e(i);};}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(f+e[i],t[0].style[e[i]]);},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(f+e[s]),t.css(e[s],i));},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e;},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id;}catch(a){o=document.body;}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto");}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show();},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e;}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s;},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s};},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top};},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue();},saveStyle:function(t){t.data(g,t[0].style.cssText);},restoreStyle:function(t){t[0].style.cssText=t.data(g)||"",t.removeData(g);},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e;},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height;}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width;}return{x:s,y:i};},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(f+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i;},removePlaceholder:function(t){var e=f+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e));},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e);},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1]);}),n;}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(m),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a();}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e();}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a);}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(m,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e();};return t.fx.off||!n?l?this[l](s.duration,h):this.each(function(){h&&h.call(this);}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i);},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n);};}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n);};}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n);};}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e]);}),s;},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this);},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i();});}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left});};}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2);};}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2);},Circ:function(t){return 1-Math.sqrt(1-t*t);},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15);},Back:function(t){return t*t*(3*t-2);},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2);}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t);},t.easing["easeInOut"+e]=function(t){return .5>t?i(2*t)/2:1-i(-2*t+2)/2;};});}();var v=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i});}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=h?2*u:u/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1);}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i});}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",c="+="===l?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,u[h]=l+s,a&&(n.css(u),u[h]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i});}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n();}function n(){p.css({visibility:"visible"}),t(b).remove(),i();}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s);}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i});}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,c=l?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i();}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4);}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i});}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i);});})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i();}});}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i);}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i);}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);h>u;u++)s.animate({opacity:c},l,e.easing),c=1-c;s.animate({opacity:c},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1);}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1);}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i});});var v;t.uiBackCompat!==!1&&(v=t.effects.define("transfer",function(e,i){t(this).transfer(e,i);}));});
//
!function (a) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();else if ("function" == typeof define && define.amd) define([], a);else {
    var b;b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.ProgressBar = a();
  }
}(function () {
  var a;return function b(a, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!a[g]) {
          var i = "function" == typeof require && require;if (!h && i) return i(g, !0);if (f) return f(g, !0);var j = new Error("Cannot find module '" + g + "'");throw j.code = "MODULE_NOT_FOUND", j;
        }var k = c[g] = { exports: {} };a[g][0].call(k.exports, function (b) {
          var c = a[g][1][b];return e(c ? c : b);
        }, k, k.exports, b, a, c, d);
      }return c[g].exports;
    }for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);return e;
  }({ 1: [function (b, c, d) {
      (function () {
        var b = this || Function("return this")(),
            e = function () {
          "use strict";
          function e() {}function f(a, b) {
            var c;for (c in a) Object.hasOwnProperty.call(a, c) && b(c);
          }function g(a, b) {
            return f(b, function (c) {
              a[c] = b[c];
            }), a;
          }function h(a, b) {
            f(b, function (c) {
              "undefined" == typeof a[c] && (a[c] = b[c]);
            });
          }function i(a, b, c, d, e, f, g) {
            var h,
                i,
                k,
                l = f > a ? 0 : (a - f) / e;for (h in b) b.hasOwnProperty(h) && (i = g[h], k = "function" == typeof i ? i : o[i], b[h] = j(c[h], d[h], k, l));return b;
          }function j(a, b, c, d) {
            return a + (b - a) * c(d);
          }function k(a, b) {
            var c = n.prototype.filter,
                d = a._filterArgs;f(c, function (e) {
              "undefined" != typeof c[e][b] && c[e][b].apply(a, d);
            });
          }function l(a, b, c, d, e, f, g, h, j, l, m) {
            v = b + c + d, w = Math.min(m || u(), v), x = w >= v, y = d - (v - w), a.isPlaying() && (x ? (j(g, a._attachment, y), a.stop(!0)) : (a._scheduleId = l(a._timeoutHandler, s), k(a, "beforeTween"), b + c > w ? i(1, e, f, g, 1, 1, h) : i(w, e, f, g, d, b + c, h), k(a, "afterTween"), j(e, a._attachment, y)));
          }function m(a, b) {
            var c = {},
                d = typeof b;return "string" === d || "function" === d ? f(a, function (a) {
              c[a] = b;
            }) : f(a, function (a) {
              c[a] || (c[a] = b[a] || q);
            }), c;
          }function n(a, b) {
            this._currentState = a || {}, this._configured = !1, this._scheduleFunction = p, "undefined" != typeof b && this.setConfig(b);
          }var o,
              p,
              q = "linear",
              r = 500,
              s = 1e3 / 60,
              t = Date.now ? Date.now : function () {
            return +new Date();
          },
              u = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;p = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;var v, w, x, y;return n.prototype.tween = function (a) {
            return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = u(), this._start(this.get(), this._attachment), this.resume());
          }, n.prototype.setConfig = function (a) {
            a = a || {}, this._configured = !0, this._attachment = a.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = a.delay || 0, this._start = a.start || e, this._step = a.step || e, this._finish = a.finish || e, this._duration = a.duration || r, this._currentState = g({}, a.from) || this.get(), this._originalState = this.get(), this._targetState = g({}, a.to) || this.get();var b = this;this._timeoutHandler = function () {
              l(b, b._timestamp, b._delay, b._duration, b._currentState, b._originalState, b._targetState, b._easing, b._step, b._scheduleFunction);
            };var c = this._currentState,
                d = this._targetState;return h(d, c), this._easing = m(c, a.easing || q), this._filterArgs = [c, this._originalState, d, this._easing], k(this, "tweenCreated"), this;
          }, n.prototype.get = function () {
            return g({}, this._currentState);
          }, n.prototype.set = function (a) {
            this._currentState = a;
          }, n.prototype.pause = function () {
            return this._pausedAtTime = u(), this._isPaused = !0, this;
          }, n.prototype.resume = function () {
            return this._isPaused && (this._timestamp += u() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this;
          }, n.prototype.seek = function (a) {
            a = Math.max(a, 0);var b = u();return this._timestamp + a === 0 ? this : (this._timestamp = b - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, l(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, b), this.pause()), this);
          }, n.prototype.stop = function (a) {
            return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = e, (b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.oCancelAnimationFrame || b.msCancelAnimationFrame || b.mozCancelRequestAnimationFrame || b.clearTimeout)(this._scheduleId), a && (k(this, "beforeTween"), i(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), k(this, "afterTween"), k(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this;
          }, n.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          }, n.prototype.setScheduleFunction = function (a) {
            this._scheduleFunction = a;
          }, n.prototype.dispose = function () {
            var a;for (a in this) this.hasOwnProperty(a) && delete this[a];
          }, n.prototype.filter = {}, n.prototype.formula = { linear: function (a) {
              return a;
            } }, o = n.prototype.formula, g(n, { now: u, each: f, tweenProps: i, tweenProp: j, applyFilter: k, shallowCopy: g, defaults: h, composeEasingObject: m }), "function" == typeof SHIFTY_DEBUG_NOW && (b.timeoutHandler = l), "object" == typeof d ? c.exports = n : "function" == typeof a && a.amd ? a(function () {
            return n;
          }) : "undefined" == typeof b.Tweenable && (b.Tweenable = n), n;
        }();!function () {
          e.shallowCopy(e.prototype.formula, { easeInQuad: function (a) {
              return Math.pow(a, 2);
            }, easeOutQuad: function (a) {
              return -(Math.pow(a - 1, 2) - 1);
            }, easeInOutQuad: function (a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2);
            }, easeInCubic: function (a) {
              return Math.pow(a, 3);
            }, easeOutCubic: function (a) {
              return Math.pow(a - 1, 3) + 1;
            }, easeInOutCubic: function (a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2);
            }, easeInQuart: function (a) {
              return Math.pow(a, 4);
            }, easeOutQuart: function (a) {
              return -(Math.pow(a - 1, 4) - 1);
            }, easeInOutQuart: function (a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2);
            }, easeInQuint: function (a) {
              return Math.pow(a, 5);
            }, easeOutQuint: function (a) {
              return Math.pow(a - 1, 5) + 1;
            }, easeInOutQuint: function (a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2);
            }, easeInSine: function (a) {
              return -Math.cos(a * (Math.PI / 2)) + 1;
            }, easeOutSine: function (a) {
              return Math.sin(a * (Math.PI / 2));
            }, easeInOutSine: function (a) {
              return -.5 * (Math.cos(Math.PI * a) - 1);
            }, easeInExpo: function (a) {
              return 0 === a ? 0 : Math.pow(2, 10 * (a - 1));
            }, easeOutExpo: function (a) {
              return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1;
            }, easeInOutExpo: function (a) {
              return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2);
            }, easeInCirc: function (a) {
              return -(Math.sqrt(1 - a * a) - 1);
            }, easeOutCirc: function (a) {
              return Math.sqrt(1 - Math.pow(a - 1, 2));
            }, easeInOutCirc: function (a) {
              return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            }, easeOutBounce: function (a) {
              return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
            }, easeInBack: function (a) {
              var b = 1.70158;return a * a * ((b + 1) * a - b);
            }, easeOutBack: function (a) {
              var b = 1.70158;return (a -= 1) * a * ((b + 1) * a + b) + 1;
            }, easeInOutBack: function (a) {
              var b = 1.70158;return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
            }, elastic: function (a) {
              return -1 * Math.pow(4, -8 * a) * Math.sin((6 * a - 1) * (2 * Math.PI) / 2) + 1;
            }, swingFromTo: function (a) {
              var b = 1.70158;return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
            }, swingFrom: function (a) {
              var b = 1.70158;return a * a * ((b + 1) * a - b);
            }, swingTo: function (a) {
              var b = 1.70158;return (a -= 1) * a * ((b + 1) * a + b) + 1;
            }, bounce: function (a) {
              return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
            }, bouncePast: function (a) {
              return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
            }, easeFromTo: function (a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2);
            }, easeFrom: function (a) {
              return Math.pow(a, 4);
            }, easeTo: function (a) {
              return Math.pow(a, .25);
            } });
        }(), function () {
          function a(a, b, c, d, e, f) {
            function g(a) {
              return ((n * a + o) * a + p) * a;
            }function h(a) {
              return ((q * a + r) * a + s) * a;
            }function i(a) {
              return (3 * n * a + 2 * o) * a + p;
            }function j(a) {
              return 1 / (200 * a);
            }function k(a, b) {
              return h(m(a, b));
            }function l(a) {
              return a >= 0 ? a : 0 - a;
            }function m(a, b) {
              var c, d, e, f, h, j;for (e = a, j = 0; 8 > j; j++) {
                if (f = g(e) - a, l(f) < b) return e;if (h = i(e), l(h) < 1e-6) break;e -= f / h;
              }if (c = 0, d = 1, e = a, c > e) return c;if (e > d) return d;for (; d > c;) {
                if (f = g(e), l(f - a) < b) return e;a > f ? c = e : d = e, e = .5 * (d - c) + c;
              }return e;
            }var n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = 0,
                s = 0;return p = 3 * b, o = 3 * (d - b) - p, n = 1 - p - o, s = 3 * c, r = 3 * (e - c) - s, q = 1 - s - r, k(a, j(f));
          }function b(b, c, d, e) {
            return function (f) {
              return a(f, b, c, d, e, 1);
            };
          }e.setBezierFunction = function (a, c, d, f, g) {
            var h = b(c, d, f, g);return h.displayName = a, h.x1 = c, h.y1 = d, h.x2 = f, h.y2 = g, e.prototype.formula[a] = h;
          }, e.unsetBezierFunction = function (a) {
            delete e.prototype.formula[a];
          };
        }(), function () {
          function a(a, b, c, d, f, g) {
            return e.tweenProps(d, b, a, c, 1, g, f);
          }var b = new e();b._filterArgs = [], e.interpolate = function (c, d, f, g, h) {
            var i = e.shallowCopy({}, c),
                j = h || 0,
                k = e.composeEasingObject(c, g || "linear");b.set({});var l = b._filterArgs;l.length = 0, l[0] = i, l[1] = c, l[2] = d, l[3] = k, e.applyFilter(b, "tweenCreated"), e.applyFilter(b, "beforeTween");var m = a(c, i, d, f, k, j);return e.applyFilter(b, "afterTween"), m;
          };
        }(), function (a) {
          function b(a, b) {
            var c,
                d = [],
                e = a.length;for (c = 0; e > c; c++) d.push("_" + b + "_" + c);return d;
          }function c(a) {
            var b = a.match(v);return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""], b.join(A);
          }function d(b) {
            a.each(b, function (a) {
              var c = b[a];"string" == typeof c && c.match(z) && (b[a] = e(c));
            });
          }function e(a) {
            return i(z, a, f);
          }function f(a) {
            var b = g(a);return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")";
          }function g(a) {
            return a = a.replace(/#/, ""), 3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), B[0] = h(a.substr(0, 2)), B[1] = h(a.substr(2, 2)), B[2] = h(a.substr(4, 2)), B;
          }function h(a) {
            return parseInt(a, 16);
          }function i(a, b, c) {
            var d = b.match(a),
                e = b.replace(a, A);if (d) for (var f, g = d.length, h = 0; g > h; h++) f = d.shift(), e = e.replace(A, c(f));return e;
          }function j(a) {
            return i(x, a, k);
          }function k(a) {
            for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++) d += parseInt(b[e], 10) + ",";return d = d.slice(0, -1) + ")";
          }function l(d) {
            var e = {};return a.each(d, function (a) {
              var f = d[a];if ("string" == typeof f) {
                var g = r(f);e[a] = { formatString: c(f), chunkNames: b(g, a) };
              }
            }), e;
          }function m(b, c) {
            a.each(c, function (a) {
              for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++) b[c[a].chunkNames[g]] = +e[g];delete b[a];
            });
          }function n(b, c) {
            a.each(c, function (a) {
              var d = b[a],
                  e = o(b, c[a].chunkNames),
                  f = p(e, c[a].chunkNames);d = q(c[a].formatString, f), b[a] = j(d);
            });
          }function o(a, b) {
            for (var c, d = {}, e = b.length, f = 0; e > f; f++) c = b[f], d[c] = a[c], delete a[c];return d;
          }function p(a, b) {
            C.length = 0;for (var c = b.length, d = 0; c > d; d++) C.push(a[b[d]]);return C;
          }function q(a, b) {
            for (var c = a, d = b.length, e = 0; d > e; e++) c = c.replace(A, +b[e].toFixed(4));return c;
          }function r(a) {
            return a.match(w);
          }function s(b, c) {
            a.each(c, function (a) {
              var d,
                  e = c[a],
                  f = e.chunkNames,
                  g = f.length,
                  h = b[a];if ("string" == typeof h) {
                var i = h.split(" "),
                    j = i[i.length - 1];for (d = 0; g > d; d++) b[f[d]] = i[d] || j;
              } else for (d = 0; g > d; d++) b[f[d]] = h;delete b[a];
            });
          }function t(b, c) {
            a.each(c, function (a) {
              var d = c[a],
                  e = d.chunkNames,
                  f = e.length,
                  g = b[e[0]],
                  h = typeof g;if ("string" === h) {
                for (var i = "", j = 0; f > j; j++) i += " " + b[e[j]], delete b[e[j]];b[a] = i.substr(1);
              } else b[a] = g;
            });
          }var u = /(\d|\-|\.)/,
              v = /([^\-0-9\.]+)/g,
              w = /[0-9.\-]+/g,
              x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
              y = /^.*\(/,
              z = /#([0-9]|[a-f]){3,6}/gi,
              A = "VAL",
              B = [],
              C = [];a.prototype.filter.token = { tweenCreated: function (a, b, c, e) {
              d(a), d(b), d(c), this._tokenData = l(a);
            }, beforeTween: function (a, b, c, d) {
              s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData);
            }, afterTween: function (a, b, c, d) {
              n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData);
            } };
        }(e);
      }).call(null);
    }, {}], 2: [function (a, b, c) {
      var d = a("./shape"),
          e = a("./utils"),
          f = function (a, b) {
        this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, d.apply(this, arguments);
      };f.prototype = new d(), f.prototype.constructor = f, f.prototype._pathString = function (a) {
        var b = a.strokeWidth;a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth);var c = 50 - b / 2;return e.render(this._pathTemplate, { radius: c, "2radius": 2 * c });
      }, f.prototype._trailString = function (a) {
        return this._pathString(a);
      }, b.exports = f;
    }, { "./shape": 7, "./utils": 8 }], 3: [function (a, b, c) {
      var d = a("./shape"),
          e = a("./utils"),
          f = function (a, b) {
        this._pathTemplate = "M 0,{center} L 100,{center}", d.apply(this, arguments);
      };f.prototype = new d(), f.prototype.constructor = f, f.prototype._initializeSvg = function (a, b) {
        a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth), a.setAttribute("preserveAspectRatio", "none");
      }, f.prototype._pathString = function (a) {
        return e.render(this._pathTemplate, { center: a.strokeWidth / 2 });
      }, f.prototype._trailString = function (a) {
        return this._pathString(a);
      }, b.exports = f;
    }, { "./shape": 7, "./utils": 8 }], 4: [function (a, b, c) {
      b.exports = { Line: a("./line"), Circle: a("./circle"), SemiCircle: a("./semicircle"), Path: a("./path"), Shape: a("./shape"), utils: a("./utils") };
    }, { "./circle": 2, "./line": 3, "./path": 5, "./semicircle": 6, "./shape": 7, "./utils": 8 }], 5: [function (a, b, c) {
      var d = a("shifty"),
          e = a("./utils"),
          f = { easeIn: "easeInCubic", easeOut: "easeOutCubic", easeInOut: "easeInOutCubic" },
          g = function h(a, b) {
        if (!(this instanceof h)) throw new Error("Constructor was called without new keyword");b = e.extend({ duration: 800, easing: "linear", from: {}, to: {}, step: function () {} }, b);var c;c = e.isString(a) ? document.querySelector(a) : a, this.path = c, this._opts = b, this._tweenable = null;var d = this.path.getTotalLength();this.path.style.strokeDasharray = d + " " + d, this.set(0);
      };g.prototype.value = function () {
        var a = this._getComputedDashOffset(),
            b = this.path.getTotalLength(),
            c = 1 - a / b;return parseFloat(c.toFixed(6), 10);
      }, g.prototype.set = function (a) {
        this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(a);var b = this._opts.step;if (e.isFunction(b)) {
          var c = this._easing(this._opts.easing),
              d = this._calculateTo(a, c),
              f = this._opts.shape || this;b(d, f, this._opts.attachment);
        }
      }, g.prototype.stop = function () {
        this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset();
      }, g.prototype.animate = function (a, b, c) {
        b = b || {}, e.isFunction(b) && (c = b, b = {});var f = e.extend({}, b),
            g = e.extend({}, this._opts);b = e.extend(g, b);var h = this._easing(b.easing),
            i = this._resolveFromAndTo(a, h, f);this.stop(), this.path.getBoundingClientRect();var j = this._getComputedDashOffset(),
            k = this._progressToOffset(a),
            l = this;this._tweenable = new d(), this._tweenable.tween({ from: e.extend({ offset: j }, i.from), to: e.extend({ offset: k }, i.to), duration: b.duration, easing: h, step: function (a) {
            l.path.style.strokeDashoffset = a.offset;var c = b.shape || l;b.step(a, c, b.attachment);
          }, finish: function (a) {
            e.isFunction(c) && c();
          } });
      }, g.prototype._getComputedDashOffset = function () {
        var a = window.getComputedStyle(this.path, null);return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10);
      }, g.prototype._progressToOffset = function (a) {
        var b = this.path.getTotalLength();return b - a * b;
      }, g.prototype._resolveFromAndTo = function (a, b, c) {
        return c.from && c.to ? { from: c.from, to: c.to } : { from: this._calculateFrom(b), to: this._calculateTo(a, b) };
      }, g.prototype._calculateFrom = function (a) {
        return d.interpolate(this._opts.from, this._opts.to, this.value(), a);
      }, g.prototype._calculateTo = function (a, b) {
        return d.interpolate(this._opts.from, this._opts.to, a, b);
      }, g.prototype._stopTween = function () {
        null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null);
      }, g.prototype._easing = function (a) {
        return f.hasOwnProperty(a) ? f[a] : a;
      }, b.exports = g;
    }, { "./utils": 8, shifty: 1 }], 6: [function (a, b, c) {
      var d = a("./shape"),
          e = a("./circle"),
          f = a("./utils"),
          g = function (a, b) {
        this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, d.apply(this, arguments);
      };g.prototype = new d(), g.prototype.constructor = g, g.prototype._initializeSvg = function (a, b) {
        a.setAttribute("viewBox", "0 0 100 50");
      }, g.prototype._initializeTextContainer = function (a, b, c) {
        a.text.style && (c.style.top = "auto", c.style.bottom = "0", a.text.alignToBottom ? f.setStyle(c, "transform", "translate(-50%, 0)") : f.setStyle(c, "transform", "translate(-50%, 50%)"));
      }, g.prototype._pathString = e.prototype._pathString, g.prototype._trailString = e.prototype._trailString, b.exports = g;
    }, { "./circle": 2, "./shape": 7, "./utils": 8 }], 7: [function (a, b, c) {
      var d = a("./path"),
          e = a("./utils"),
          f = "Object is destroyed",
          g = function h(a, b) {
        if (!(this instanceof h)) throw new Error("Constructor was called without new keyword");if (0 !== arguments.length) {
          this._opts = e.extend({ color: "#555", strokeWidth: 1, trailColor: null, trailWidth: null, fill: null, text: { style: { color: null, position: "absolute", left: "50%", top: "50%", padding: 0, margin: 0, transform: { prefix: !0, value: "translate(-50%, -50%)" } }, autoStyleContainer: !0, alignToBottom: !0, value: null, className: "progressbar-text" }, svgStyle: { display: "block", width: "100%" }, warnings: !1 }, b, !0), e.isObject(b) && void 0 !== b.svgStyle && (this._opts.svgStyle = b.svgStyle), e.isObject(b) && e.isObject(b.text) && void 0 !== b.text.style && (this._opts.text.style = b.text.style);var c,
              f = this._createSvgView(this._opts);if (c = e.isString(a) ? document.querySelector(a) : a, !c) throw new Error("Container does not exist: " + a);this._container = c, this._container.appendChild(f.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && e.setStyles(f.svg, this._opts.svgStyle), this.svg = f.svg, this.path = f.path, this.trail = f.trail, this.text = null;var g = e.extend({ attachment: void 0, shape: this }, this._opts);this._progressPath = new d(f.path, g), e.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value);
        }
      };g.prototype.animate = function (a, b, c) {
        if (null === this._progressPath) throw new Error(f);this._progressPath.animate(a, b, c);
      }, g.prototype.stop = function () {
        if (null === this._progressPath) throw new Error(f);void 0 !== this._progressPath && this._progressPath.stop();
      }, g.prototype.destroy = function () {
        if (null === this._progressPath) throw new Error(f);this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null);
      }, g.prototype.set = function (a) {
        if (null === this._progressPath) throw new Error(f);this._progressPath.set(a);
      }, g.prototype.value = function () {
        if (null === this._progressPath) throw new Error(f);return void 0 === this._progressPath ? 0 : this._progressPath.value();
      }, g.prototype.setText = function (a) {
        if (null === this._progressPath) throw new Error(f);null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), e.isObject(a) ? (e.removeChildren(this.text), this.text.appendChild(a)) : this.text.innerHTML = a;
      }, g.prototype._createSvgView = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");this._initializeSvg(b, a);var c = null;(a.trailColor || a.trailWidth) && (c = this._createTrail(a), b.appendChild(c));var d = this._createPath(a);return b.appendChild(d), { svg: b, path: d, trail: c };
      }, g.prototype._initializeSvg = function (a, b) {
        a.setAttribute("viewBox", "0 0 100 100");
      }, g.prototype._createPath = function (a) {
        var b = this._pathString(a);return this._createPathElement(b, a);
      }, g.prototype._createTrail = function (a) {
        var b = this._trailString(a),
            c = e.extend({}, a);return c.trailColor || (c.trailColor = "#eee"), c.trailWidth || (c.trailWidth = c.strokeWidth), c.color = c.trailColor, c.strokeWidth = c.trailWidth, c.fill = null, this._createPathElement(b, c);
      }, g.prototype._createPathElement = function (a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "path");return c.setAttribute("d", a), c.setAttribute("stroke", b.color), c.setAttribute("stroke-width", b.strokeWidth), b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"), c;
      }, g.prototype._createTextContainer = function (a, b) {
        var c = document.createElement("div");c.className = a.text.className;var d = a.text.style;return d && (a.text.autoStyleContainer && (b.style.position = "relative"), e.setStyles(c, d), d.color || (c.style.color = a.color)), this._initializeTextContainer(a, b, c), c;
      }, g.prototype._initializeTextContainer = function (a, b, c) {}, g.prototype._pathString = function (a) {
        throw new Error("Override this function for each progress bar");
      }, g.prototype._trailString = function (a) {
        throw new Error("Override this function for each progress bar");
      }, g.prototype._warnContainerAspectRatio = function (a) {
        if (this.containerAspectRatio) {
          var b = window.getComputedStyle(a, null),
              c = parseFloat(b.getPropertyValue("width"), 10),
              d = parseFloat(b.getPropertyValue("height"), 10);e.floatEquals(this.containerAspectRatio, c / d) || (console.warn("Incorrect aspect ratio of container", "#" + a.id, "detected:", b.getPropertyValue("width") + "(width)", "/", b.getPropertyValue("height") + "(height)", "=", c / d), console.warn("Aspect ratio of should be", this.containerAspectRatio));
        }
      }, b.exports = g;
    }, { "./path": 5, "./utils": 8 }], 8: [function (a, b, c) {
      function d(a, b, c) {
        a = a || {}, b = b || {}, c = c || !1;for (var e in b) if (b.hasOwnProperty(e)) {
          var f = a[e],
              g = b[e];c && l(f) && l(g) ? a[e] = d(f, g, c) : a[e] = g;
        }return a;
      }function e(a, b) {
        var c = a;for (var d in b) if (b.hasOwnProperty(d)) {
          var e = b[d],
              f = "\\{" + d + "\\}",
              g = new RegExp(f, "g");c = c.replace(g, e);
        }return c;
      }function f(a, b, c) {
        for (var d = a.style, e = 0; e < p.length; ++e) {
          var f = p[e];d[f + h(b)] = c;
        }d[b] = c;
      }function g(a, b) {
        m(b, function (b, c) {
          null !== b && void 0 !== b && (l(b) && b.prefix === !0 ? f(a, c, b.value) : a.style[c] = b);
        });
      }function h(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
      }function i(a) {
        return "string" == typeof a || a instanceof String;
      }function j(a) {
        return "function" == typeof a;
      }function k(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      }function l(a) {
        if (k(a)) return !1;var b = typeof a;return "object" === b && !!a;
      }function m(a, b) {
        for (var c in a) if (a.hasOwnProperty(c)) {
          var d = a[c];b(d, c);
        }
      }function n(a, b) {
        return Math.abs(a - b) < q;
      }function o(a) {
        for (; a.firstChild;) a.removeChild(a.firstChild);
      }var p = "Webkit Moz O ms".split(" "),
          q = .001;b.exports = { extend: d, render: e, setStyle: f, setStyles: g, capitalize: h, isString: i, isFunction: j, isObject: l, forEachObject: m, floatEquals: n, removeChildren: o };
    }, {}] }, {}, [4])(4);
});
//
(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G = [].slice;q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function (a) {
    var b;return b = document.createElement("div"), b.innerHTML = a, b.children[0];
  }, v = function (a, b) {
    return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ");
  }, r = function (a, b) {
    return v(a, b), a.className += " " + b;
  }, z = function (a, b) {
    var c;return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0;
  }, u = function () {
    var a, b;return null != (a = null != (b = window.performance) ? "function" == typeof b.now ? b.now() : void 0 : void 0) ? a : +new Date();
  }, x = function (a, b) {
    return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a);
  }, A = function (a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  }, t = function (a) {
    return a - x(a);
  }, C = !1, (B = function () {
    var a, b, c, d, e;if (!C && null != window.jQuery) {
      for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function (a) {
        var b;return b = window.jQuery.fn[a], window.jQuery.fn[a] = function (a) {
          var c;return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a);
        };
      }(a));return e;
    }
  })(), setTimeout(B, 0), m = function () {
    function a(b) {
      var c,
          d,
          e,
          g,
          h,
          i,
          l,
          m,
          n,
          o,
          p = this;if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;this.el.odometer = this, m = a.options;for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();try {
        for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && !function (a) {
          return Object.defineProperty(p.el, a, { get: function () {
              var b;return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent;
            }, set: function (a) {
              return p.update(a);
            } });
        }(e);
      } catch (q) {
        c = q, this.watchForMutations();
      }
    }return a.prototype.renderInside = function () {
      return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside);
    }, a.prototype.watchForMutations = function () {
      var a,
          b = this;if (null != l) try {
        return null == this.observer && (this.observer = new l(function () {
          var a;return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a);
        })), this.watchMutations = !0, this.startWatchingMutations();
      } catch (c) {
        a = c;
      }
    }, a.prototype.startWatchingMutations = function () {
      return this.watchMutations ? this.observer.observe(this.el, { childList: !0 }) : void 0;
    }, a.prototype.stopWatchingMutations = function () {
      var a;return null != (a = this.observer) ? a.disconnect() : void 0;
    }, a.prototype.cleanValue = function (a) {
      var b;return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision);
    }, a.prototype.bindTransitionEnd = function () {
      var a,
          b,
          c,
          d,
          e,
          f,
          g = this;if (!this.transitionEndBound) {
        for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function () {
          return b ? !0 : (b = !0, setTimeout(function () {
            return g.render(), b = !1, z(g.el, "odometerdone");
          }, 0), !0);
        }, !1));return f;
      }
    }, a.prototype.resetFormat = function () {
      var a, b, d, e, f, g, i, j;if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = { repeating: g, radix: f, precision: e };
    }, a.prototype.render = function (a) {
      var b, c, d, e, f, g, h, i, j, k, l, m;for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", g = this.options.theme, b = this.el.className.split(" "), f = [], i = 0, k = b.length; k > i; i++) c = b[i], c.length && ((e = /^odometer-theme-(.+)$/.exec(c)) ? g = e[1] : /^odometer(-|$)/.test(c) || f.push(c));for (f.push("odometer"), p || f.push("odometer-no-transitions"), f.push(g ? "odometer-theme-" + g : "odometer-auto-theme"), this.el.className = f.join(" "), this.ribbons = {}, this.digits = [], h = !this.format.precision || !t(a) || !1, m = a.toString().split("").reverse(), j = 0, l = m.length; l > j; j++) d = m[j], "." === d && (h = !0), this.addDigit(d, h);return this.startWatchingMutations();
    }, a.prototype.update = function (a) {
      var b,
          c = this;return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function () {
        return c.el.offsetHeight, r(c.el, "odometer-animating");
      }, 0), this.value = a) : void 0;
    }, a.prototype.renderDigit = function () {
      return s(d);
    }, a.prototype.insertDigit = function (a, b) {
      return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a);
    }, a.prototype.addSpacer = function (a, b, c) {
      var d;return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b);
    }, a.prototype.addDigit = function (a, b) {
      var c, d, e, f;if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");if (b) for (e = !1;;) {
        if (!this.format.repeating.length) {
          if (e) throw new Error("Bad odometer format without digits");this.resetFormat(), e = !0;
        }if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;this.addSpacer(c);
      }return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d);
    }, a.prototype.animate = function (a) {
      return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a);
    }, a.prototype.animateCount = function (a) {
      var c,
          d,
          e,
          f,
          g,
          h = this;if (d = +a - this.value) return f = e = u(), c = this.value, (g = function () {
        var i, j, k;return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b));
      })();
    }, a.prototype.getDigitCount = function () {
      var a, b, c, d, e, f;for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10));
    }, a.prototype.getFractionalDigitCount = function () {
      var a, b, c, d, e, f, g;for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;return Math.max.apply(Math, e);
    }, a.prototype.resetDigits = function () {
      return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat();
    }, a.prototype.animateSlide = function (a) {
      var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
        for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
          if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
            for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;l[l.length - 1] !== i && l.push(i), b++;
          } else l = function () {
            E = [];for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);return E;
          }.apply(this);for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);g.push(l);
        }for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x) for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0;
      }
    }, a;
  }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function () {
    var a, b, c, d, e;if (window.odometerOptions) {
      d = window.odometerOptions, e = [];for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);return e;
    }
  }, 0), m.init = function () {
    var a, b, c, d, e, f;if (null != document.querySelectorAll) {
      for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({ el: a, value: null != (e = a.innerText) ? e : a.textContent }));return f;
    }
  }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function () {
    return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0;
  }) : document.addEventListener("DOMContentLoaded", function () {
    return m.options.auto !== !1 ? m.init() : void 0;
  }, !1), "function" == typeof define && define.amd ? define(["jquery"], function () {
    return m;
  }) : typeof exports === !1 ? module.exports = m : window.Odometer = m;
}).call(this);
//
/**
 * findAndReplaceDOMText v 0.4.3
 * @author James Padolsey http://james.padolsey.com
 * @license http://unlicense.org/UNLICENSE
 *
 * Matches the text of a DOM node against a regular expression
 * and replaces each match (or node-separated portions of the match)
 * in the specified element.
 */
(function (root, factory) {
	if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(factory);
	} else {
		// Browser globals
		root.findAndReplaceDOMText = factory();
	}
})(this, function factory() {

	var PORTION_MODE_RETAIN = 'retain';
	var PORTION_MODE_FIRST = 'first';

	var doc = document;
	var toString = {}.toString;
	var hasOwn = {}.hasOwnProperty;

	function isArray(a) {
		return toString.call(a) == '[object Array]';
	}

	function escapeRegExp(s) {
		return String(s).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}

	function exposed() {
		// Try deprecated arg signature first:
		return deprecated.apply(null, arguments) || findAndReplaceDOMText.apply(null, arguments);
	}

	function deprecated(regex, node, replacement, captureGroup, elFilter) {
		if (node && !node.nodeType && arguments.length <= 2) {
			return false;
		}
		var isReplacementFunction = typeof replacement == 'function';

		if (isReplacementFunction) {
			replacement = function (original) {
				return function (portion, match) {
					return original(portion.text, match.startIndex);
				};
			}(replacement);
		}

		// Awkward support for deprecated argument signature (<0.4.0)
		var instance = findAndReplaceDOMText(node, {

			find: regex,

			wrap: isReplacementFunction ? null : replacement,
			replace: isReplacementFunction ? replacement : '$' + (captureGroup || '&'),

			prepMatch: function (m, mi) {

				// Support captureGroup (a deprecated feature)

				if (!m[0]) throw 'findAndReplaceDOMText cannot handle zero-length matches';

				if (captureGroup > 0) {
					var cg = m[captureGroup];
					m.index += m[0].indexOf(cg);
					m[0] = cg;
				}

				m.endIndex = m.index + m[0].length;
				m.startIndex = m.index;
				m.index = mi;

				return m;
			},
			filterElements: elFilter
		});

		exposed.revert = function () {
			return instance.revert();
		};

		return true;
	}

	/** 
  * findAndReplaceDOMText
  * 
  * Locates matches and replaces with replacementNode
  *
  * @param {Node} node Element or Text node to search within
  * @param {RegExp} options.find The regular expression to match
  * @param {String|Element} [options.wrap] A NodeName, or a Node to clone
  * @param {String|Function} [options.replace='$&'] What to replace each match with
  * @param {Function} [options.filterElements] A Function to be called to check whether to
  *	process an element. (returning true = process element,
  *	returning false = avoid element)
  */
	function findAndReplaceDOMText(node, options) {
		return new Finder(node, options);
	}

	exposed.NON_PROSE_ELEMENTS = {
		br: 1, hr: 1,
		// Media / Source elements:
		script: 1, style: 1, img: 1, video: 1, audio: 1, canvas: 1, svg: 1, map: 1, object: 1,
		// Input elements
		input: 1, textarea: 1, select: 1, option: 1, optgroup: 1, button: 1
	};

	exposed.NON_CONTIGUOUS_PROSE_ELEMENTS = {

		// Elements that will not contain prose or block elements where we don't
		// want prose to be matches across element borders:

		// Block Elements
		address: 1, article: 1, aside: 1, blockquote: 1, dd: 1, div: 1,
		dl: 1, fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1,
		h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, main: 1, nav: 1, noscript: 1, ol: 1,
		output: 1, p: 1, pre: 1, section: 1, ul: 1,
		// Other misc. elements that are not part of continuous inline prose:
		br: 1, li: 1, summary: 1, dt: 1, details: 1, rp: 1, rt: 1, rtc: 1,
		// Media / Source elements:
		script: 1, style: 1, img: 1, video: 1, audio: 1, canvas: 1, svg: 1, map: 1, object: 1,
		// Input elements
		input: 1, textarea: 1, select: 1, option: 1, optgroup: 1, button: 1,
		// Table related elements:
		table: 1, tbody: 1, thead: 1, th: 1, tr: 1, td: 1, caption: 1, col: 1, tfoot: 1, colgroup: 1

	};

	exposed.NON_INLINE_PROSE = function (el) {
		return hasOwn.call(exposed.NON_CONTIGUOUS_PROSE_ELEMENTS, el.nodeName.toLowerCase());
	};

	// Presets accessed via `options.preset` when calling findAndReplaceDOMText():
	exposed.PRESETS = {
		prose: {
			forceContext: exposed.NON_INLINE_PROSE,
			filterElements: function (el) {
				return !hasOwn.call(exposed.NON_PROSE_ELEMENTS, el.nodeName.toLowerCase());
			}
		}
	};

	exposed.Finder = Finder;

	/**
  * Finder -- encapsulates logic to find and replace.
  */
	function Finder(node, options) {

		var preset = options.preset && exposed.PRESETS[options.preset];

		options.portionMode = options.portionMode || PORTION_MODE_RETAIN;

		if (preset) {
			for (var i in preset) {
				if (hasOwn.call(preset, i) && !hasOwn.call(options, i)) {
					options[i] = preset[i];
				}
			}
		}

		this.node = node;
		this.options = options;

		// ENable match-preparation method to be passed as option:
		this.prepMatch = options.prepMatch || this.prepMatch;

		this.reverts = [];

		this.matches = this.search();

		if (this.matches.length) {
			this.processMatches();
		}
	}

	Finder.prototype = {

		/**
   * Searches for all matches that comply with the instance's 'match' option
   */
		search: function () {

			var match;
			var matchIndex = 0;
			var offset = 0;
			var regex = this.options.find;
			var textAggregation = this.getAggregateText();
			var matches = [];
			var self = this;

			regex = typeof regex === 'string' ? RegExp(escapeRegExp(regex), 'g') : regex;

			matchAggregation(textAggregation);

			function matchAggregation(textAggregation) {
				for (var i = 0, l = textAggregation.length; i < l; ++i) {

					var text = textAggregation[i];

					if (typeof text !== 'string') {
						// Deal with nested contexts: (recursive)
						matchAggregation(text);
						continue;
					}

					if (regex.global) {
						while (match = regex.exec(text)) {
							matches.push(self.prepMatch(match, matchIndex++, offset));
						}
					} else {
						if (match = text.match(regex)) {
							matches.push(self.prepMatch(match, 0, offset));
						}
					}

					offset += text.length;
				}
			}

			return matches;
		},

		/**
   * Prepares a single match with useful meta info:
   */
		prepMatch: function (match, matchIndex, characterOffset) {

			if (!match[0]) {
				throw new Error('findAndReplaceDOMText cannot handle zero-length matches');
			}

			match.endIndex = characterOffset + match.index + match[0].length;
			match.startIndex = characterOffset + match.index;
			match.index = matchIndex;

			return match;
		},

		/**
   * Gets aggregate text within subject node
   */
		getAggregateText: function () {

			var elementFilter = this.options.filterElements;
			var forceContext = this.options.forceContext;

			return getText(this.node);

			/**
    * Gets aggregate text of a node without resorting
    * to broken innerText/textContent
    */
			function getText(node, txt) {

				if (node.nodeType === 3) {
					return [node.data];
				}

				if (elementFilter && !elementFilter(node)) {
					return [];
				}

				var txt = [''];
				var i = 0;

				if (node = node.firstChild) do {

					if (node.nodeType === 3) {
						txt[i] += node.data;
						continue;
					}

					var innerText = getText(node);

					if (forceContext && node.nodeType === 1 && (forceContext === true || forceContext(node))) {
						txt[++i] = innerText;
						txt[++i] = '';
					} else {
						if (typeof innerText[0] === 'string') {
							// Bridge nested text-node data so that they're
							// not considered their own contexts:
							// I.e. ['some', ['thing']] -> ['something']
							txt[i] += innerText.shift();
						}
						if (innerText.length) {
							txt[++i] = innerText;
							txt[++i] = '';
						}
					}
				} while (node = node.nextSibling);

				return txt;
			}
		},

		/** 
   * Steps through the target node, looking for matches, and
   * calling replaceFn when a match is found.
   */
		processMatches: function () {

			var matches = this.matches;
			var node = this.node;
			var elementFilter = this.options.filterElements;

			var startPortion,
			    endPortion,
			    innerPortions = [],
			    curNode = node,
			    match = matches.shift(),
			    atIndex = 0,
			    // i.e. nodeAtIndex
			matchIndex = 0,
			    portionIndex = 0,
			    doAvoidNode,
			    nodeStack = [node];

			out: while (true) {

				if (curNode.nodeType === 3) {

					if (!endPortion && curNode.length + atIndex >= match.endIndex) {

						// We've found the ending
						endPortion = {
							node: curNode,
							index: portionIndex++,
							text: curNode.data.substring(match.startIndex - atIndex, match.endIndex - atIndex),
							indexInMatch: atIndex - match.startIndex,
							indexInNode: match.startIndex - atIndex, // always zero for end-portions
							endIndexInNode: match.endIndex - atIndex,
							isEnd: true
						};
					} else if (startPortion) {
						// Intersecting node
						innerPortions.push({
							node: curNode,
							index: portionIndex++,
							text: curNode.data,
							indexInMatch: atIndex - match.startIndex,
							indexInNode: 0 // always zero for inner-portions
						});
					}

					if (!startPortion && curNode.length + atIndex > match.startIndex) {
						// We've found the match start
						startPortion = {
							node: curNode,
							index: portionIndex++,
							indexInMatch: 0,
							indexInNode: match.startIndex - atIndex,
							endIndexInNode: match.endIndex - atIndex,
							text: curNode.data.substring(match.startIndex - atIndex, match.endIndex - atIndex)
						};
					}

					atIndex += curNode.data.length;
				}

				doAvoidNode = curNode.nodeType === 1 && elementFilter && !elementFilter(curNode);

				if (startPortion && endPortion) {

					curNode = this.replaceMatch(match, startPortion, innerPortions, endPortion);

					// processMatches has to return the node that replaced the endNode
					// and then we step back so we can continue from the end of the 
					// match:

					atIndex -= endPortion.node.data.length - endPortion.endIndexInNode;

					startPortion = null;
					endPortion = null;
					innerPortions = [];
					match = matches.shift();
					portionIndex = 0;
					matchIndex++;

					if (!match) {
						break; // no more matches
					}
				} else if (!doAvoidNode && (curNode.firstChild || curNode.nextSibling)) {
					// Move down or forward:
					if (curNode.firstChild) {
						nodeStack.push(curNode);
						curNode = curNode.firstChild;
					} else {
						curNode = curNode.nextSibling;
					}
					continue;
				}

				// Move forward or up:
				while (true) {
					if (curNode.nextSibling) {
						curNode = curNode.nextSibling;
						break;
					}
					curNode = nodeStack.pop();
					if (curNode === node) {
						break out;
					}
				}
			}
		},

		/**
   * Reverts ... TODO
   */
		revert: function () {
			// Reversion occurs backwards so as to avoid nodes subsequently
			// replaced during the matching phase (a forward process):
			for (var l = this.reverts.length; l--;) {
				this.reverts[l]();
			}
			this.reverts = [];
		},

		prepareReplacementString: function (string, portion, match, matchIndex) {
			var portionMode = this.options.portionMode;
			if (portionMode === PORTION_MODE_FIRST && portion.indexInMatch > 0) {
				return '';
			}
			string = string.replace(/\$(\d+|&|`|')/g, function ($0, t) {
				var replacement;
				switch (t) {
					case '&':
						replacement = match[0];
						break;
					case '`':
						replacement = match.input.substring(0, match.startIndex);
						break;
					case '\'':
						replacement = match.input.substring(match.endIndex);
						break;
					default:
						replacement = match[+t];
				}
				return replacement;
			});

			if (portionMode === PORTION_MODE_FIRST) {
				return string;
			}

			if (portion.isEnd) {
				return string.substring(portion.indexInMatch);
			}

			return string.substring(portion.indexInMatch, portion.indexInMatch + portion.text.length);
		},

		getPortionReplacementNode: function (portion, match, matchIndex) {

			var replacement = this.options.replace || '$&';
			var wrapper = this.options.wrap;

			if (wrapper && wrapper.nodeType) {
				// Wrapper has been provided as a stencil-node for us to clone:
				var clone = doc.createElement('div');
				clone.innerHTML = wrapper.outerHTML || new XMLSerializer().serializeToString(wrapper);
				wrapper = clone.firstChild;
			}

			if (typeof replacement == 'function') {
				replacement = replacement(portion, match, matchIndex);
				if (replacement && replacement.nodeType) {
					return replacement;
				}
				return doc.createTextNode(String(replacement));
			}

			var el = typeof wrapper == 'string' ? doc.createElement(wrapper) : wrapper;

			replacement = doc.createTextNode(this.prepareReplacementString(replacement, portion, match, matchIndex));

			if (!replacement.data) {
				return replacement;
			}

			if (!el) {
				return replacement;
			}

			el.appendChild(replacement);

			return el;
		},

		replaceMatch: function (match, startPortion, innerPortions, endPortion) {

			var matchStartNode = startPortion.node;
			var matchEndNode = endPortion.node;

			var preceedingTextNode;
			var followingTextNode;

			if (matchStartNode === matchEndNode) {

				var node = matchStartNode;

				if (startPortion.indexInNode > 0) {
					// Add `before` text node (before the match)
					preceedingTextNode = doc.createTextNode(node.data.substring(0, startPortion.indexInNode));
					node.parentNode.insertBefore(preceedingTextNode, node);
				}

				// Create the replacement node:
				var newNode = this.getPortionReplacementNode(endPortion, match);

				node.parentNode.insertBefore(newNode, node);

				if (endPortion.endIndexInNode < node.length) {
					// ?????
					// Add `after` text node (after the match)
					followingTextNode = doc.createTextNode(node.data.substring(endPortion.endIndexInNode));
					node.parentNode.insertBefore(followingTextNode, node);
				}

				node.parentNode.removeChild(node);

				this.reverts.push(function () {
					if (preceedingTextNode === newNode.previousSibling) {
						preceedingTextNode.parentNode.removeChild(preceedingTextNode);
					}
					if (followingTextNode === newNode.nextSibling) {
						followingTextNode.parentNode.removeChild(followingTextNode);
					}
					newNode.parentNode.replaceChild(node, newNode);
				});

				return newNode;
			} else {
				// Replace matchStartNode -> [innerMatchNodes...] -> matchEndNode (in that order)


				preceedingTextNode = doc.createTextNode(matchStartNode.data.substring(0, startPortion.indexInNode));

				followingTextNode = doc.createTextNode(matchEndNode.data.substring(endPortion.endIndexInNode));

				var firstNode = this.getPortionReplacementNode(startPortion, match);

				var innerNodes = [];

				for (var i = 0, l = innerPortions.length; i < l; ++i) {
					var portion = innerPortions[i];
					var innerNode = this.getPortionReplacementNode(portion, match);
					portion.node.parentNode.replaceChild(innerNode, portion.node);
					this.reverts.push(function (portion, innerNode) {
						return function () {
							innerNode.parentNode.replaceChild(portion.node, innerNode);
						};
					}(portion, innerNode));
					innerNodes.push(innerNode);
				}

				var lastNode = this.getPortionReplacementNode(endPortion, match);

				matchStartNode.parentNode.insertBefore(preceedingTextNode, matchStartNode);
				matchStartNode.parentNode.insertBefore(firstNode, matchStartNode);
				matchStartNode.parentNode.removeChild(matchStartNode);

				matchEndNode.parentNode.insertBefore(lastNode, matchEndNode);
				matchEndNode.parentNode.insertBefore(followingTextNode, matchEndNode);
				matchEndNode.parentNode.removeChild(matchEndNode);

				this.reverts.push(function () {
					preceedingTextNode.parentNode.removeChild(preceedingTextNode);
					firstNode.parentNode.replaceChild(matchStartNode, firstNode);
					followingTextNode.parentNode.removeChild(followingTextNode);
					lastNode.parentNode.replaceChild(matchEndNode, lastNode);
				});

				return lastNode;
			}
		}

	};

	return exposed;
});
//
/*! tether 0.6.5 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
})(this, function (require, exports, module) {

  (function () {
    var Evented,
        addClass,
        defer,
        deferred,
        extend,
        flush,
        getBounds,
        getOffsetParent,
        getOrigin,
        getScrollBarSize,
        getScrollParent,
        hasClass,
        node,
        removeClass,
        uniqueId,
        updateClasses,
        zeroPosCache,
        __hasProp = {}.hasOwnProperty,
        __indexOf = [].indexOf || function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }return -1;
    },
        __slice = [].slice;

    if (this.Tether == null) {
      this.Tether = {
        modules: []
      };
    }

    getScrollParent = function (el) {
      var parent, position, scrollParent, style, _ref;
      position = getComputedStyle(el).position;
      if (position === 'fixed') {
        return el;
      }
      scrollParent = void 0;
      parent = el;
      while (parent = parent.parentNode) {
        try {
          style = getComputedStyle(parent);
        } catch (_error) {}
        if (style == null) {
          return parent;
        }
        if (/(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x'])) {
          if (position !== 'absolute' || (_ref = style['position']) === 'relative' || _ref === 'absolute' || _ref === 'fixed') {
            return parent;
          }
        }
      }
      return document.body;
    };

    uniqueId = function () {
      var id;
      id = 0;
      return function () {
        return id++;
      };
    }();

    zeroPosCache = {};

    getOrigin = function (doc) {
      var id, k, node, v, _ref;
      node = doc._tetherZeroElement;
      if (node == null) {
        node = doc.createElement('div');
        node.setAttribute('data-tether-id', uniqueId());
        extend(node.style, {
          top: 0,
          left: 0,
          position: 'absolute'
        });
        doc.body.appendChild(node);
        doc._tetherZeroElement = node;
      }
      id = node.getAttribute('data-tether-id');
      if (zeroPosCache[id] == null) {
        zeroPosCache[id] = {};
        _ref = node.getBoundingClientRect();
        for (k in _ref) {
          v = _ref[k];
          zeroPosCache[id][k] = v;
        }
        defer(function () {
          return zeroPosCache[id] = void 0;
        });
      }
      return zeroPosCache[id];
    };

    node = null;

    getBounds = function (el) {
      var box, doc, docEl, k, origin, v, _ref;
      if (el === document) {
        doc = document;
        el = document.documentElement;
      } else {
        doc = el.ownerDocument;
      }
      docEl = doc.documentElement;
      box = {};
      _ref = el.getBoundingClientRect();
      for (k in _ref) {
        v = _ref[k];
        box[k] = v;
      }
      origin = getOrigin(doc);
      box.top -= origin.top;
      box.left -= origin.left;
      if (box.width == null) {
        box.width = document.body.scrollWidth - box.left - box.right;
      }
      if (box.height == null) {
        box.height = document.body.scrollHeight - box.top - box.bottom;
      }
      box.top = box.top - docEl.clientTop;
      box.left = box.left - docEl.clientLeft;
      box.right = doc.body.clientWidth - box.width - box.left;
      box.bottom = doc.body.clientHeight - box.height - box.top;
      return box;
    };

    getOffsetParent = function (el) {
      return el.offsetParent || document.documentElement;
    };

    getScrollBarSize = function () {
      var inner, outer, width, widthContained, widthScroll;
      inner = document.createElement('div');
      inner.style.width = '100%';
      inner.style.height = '200px';
      outer = document.createElement('div');
      extend(outer.style, {
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        visibility: 'hidden',
        width: '200px',
        height: '150px',
        overflow: 'hidden'
      });
      outer.appendChild(inner);
      document.body.appendChild(outer);
      widthContained = inner.offsetWidth;
      outer.style.overflow = 'scroll';
      widthScroll = inner.offsetWidth;
      if (widthContained === widthScroll) {
        widthScroll = outer.clientWidth;
      }
      document.body.removeChild(outer);
      width = widthContained - widthScroll;
      return {
        width: width,
        height: width
      };
    };

    extend = function (out) {
      var args, key, obj, val, _i, _len, _ref;
      if (out == null) {
        out = {};
      }
      args = [];
      Array.prototype.push.apply(args, arguments);
      _ref = args.slice(1);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        obj = _ref[_i];
        if (obj) {
          for (key in obj) {
            if (!__hasProp.call(obj, key)) continue;
            val = obj[key];
            out[key] = val;
          }
        }
      }
      return out;
    };

    removeClass = function (el, name) {
      var cls, _i, _len, _ref, _results;
      if (el.classList != null) {
        _ref = name.split(' ');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cls = _ref[_i];
          if (cls.trim()) {
            _results.push(el.classList.remove(cls));
          }
        }
        return _results;
      } else {
        return el.className = el.className.replace(new RegExp("(^| )" + name.split(' ').join('|') + "( |$)", 'gi'), ' ');
      }
    };

    addClass = function (el, name) {
      var cls, _i, _len, _ref, _results;
      if (el.classList != null) {
        _ref = name.split(' ');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cls = _ref[_i];
          if (cls.trim()) {
            _results.push(el.classList.add(cls));
          }
        }
        return _results;
      } else {
        removeClass(el, name);
        return el.className += " " + name;
      }
    };

    hasClass = function (el, name) {
      if (el.classList != null) {
        return el.classList.contains(name);
      } else {
        return new RegExp("(^| )" + name + "( |$)", 'gi').test(el.className);
      }
    };

    updateClasses = function (el, add, all) {
      var cls, _i, _j, _len, _len1, _results;
      for (_i = 0, _len = all.length; _i < _len; _i++) {
        cls = all[_i];
        if (__indexOf.call(add, cls) < 0) {
          if (hasClass(el, cls)) {
            removeClass(el, cls);
          }
        }
      }
      _results = [];
      for (_j = 0, _len1 = add.length; _j < _len1; _j++) {
        cls = add[_j];
        if (!hasClass(el, cls)) {
          _results.push(addClass(el, cls));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    deferred = [];

    defer = function (fn) {
      return deferred.push(fn);
    };

    flush = function () {
      var fn, _results;
      _results = [];
      while (fn = deferred.pop()) {
        _results.push(fn());
      }
      return _results;
    };

    Evented = function () {
      function Evented() {}

      Evented.prototype.on = function (event, handler, ctx, once) {
        var _base;
        if (once == null) {
          once = false;
        }
        if (this.bindings == null) {
          this.bindings = {};
        }
        if ((_base = this.bindings)[event] == null) {
          _base[event] = [];
        }
        return this.bindings[event].push({
          handler: handler,
          ctx: ctx,
          once: once
        });
      };

      Evented.prototype.once = function (event, handler, ctx) {
        return this.on(event, handler, ctx, true);
      };

      Evented.prototype.off = function (event, handler) {
        var i, _ref, _results;
        if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
          return;
        }
        if (handler == null) {
          return delete this.bindings[event];
        } else {
          i = 0;
          _results = [];
          while (i < this.bindings[event].length) {
            if (this.bindings[event][i].handler === handler) {
              _results.push(this.bindings[event].splice(i, 1));
            } else {
              _results.push(i++);
            }
          }
          return _results;
        }
      };

      Evented.prototype.trigger = function () {
        var args, ctx, event, handler, i, once, _ref, _ref1, _results;
        event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
          i = 0;
          _results = [];
          while (i < this.bindings[event].length) {
            _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
            handler.apply(ctx != null ? ctx : this, args);
            if (once) {
              _results.push(this.bindings[event].splice(i, 1));
            } else {
              _results.push(i++);
            }
          }
          return _results;
        }
      };

      return Evented;
    }();

    this.Tether.Utils = {
      getScrollParent: getScrollParent,
      getBounds: getBounds,
      getOffsetParent: getOffsetParent,
      extend: extend,
      addClass: addClass,
      removeClass: removeClass,
      hasClass: hasClass,
      updateClasses: updateClasses,
      defer: defer,
      flush: flush,
      uniqueId: uniqueId,
      Evented: Evented,
      getScrollBarSize: getScrollBarSize
    };
  }).call(this);

  (function () {
    var MIRROR_LR,
        MIRROR_TB,
        OFFSET_MAP,
        Tether,
        addClass,
        addOffset,
        attachmentToOffset,
        autoToFixedAttachment,
        defer,
        extend,
        flush,
        getBounds,
        getOffsetParent,
        getOuterSize,
        getScrollBarSize,
        getScrollParent,
        getSize,
        now,
        offsetToPx,
        parseAttachment,
        parseOffset,
        position,
        removeClass,
        tethers,
        transformKey,
        updateClasses,
        within,
        _Tether,
        _ref,
        __slice = [].slice,
        __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };

    if (this.Tether == null) {
      throw new Error("You must include the utils.js file before tether.js");
    }

    Tether = this.Tether;

    _ref = Tether.Utils, getScrollParent = _ref.getScrollParent, getSize = _ref.getSize, getOuterSize = _ref.getOuterSize, getBounds = _ref.getBounds, getOffsetParent = _ref.getOffsetParent, extend = _ref.extend, addClass = _ref.addClass, removeClass = _ref.removeClass, updateClasses = _ref.updateClasses, defer = _ref.defer, flush = _ref.flush, getScrollBarSize = _ref.getScrollBarSize;

    within = function (a, b, diff) {
      if (diff == null) {
        diff = 1;
      }
      return a + diff >= b && b >= a - diff;
    };

    transformKey = function () {
      var el, key, _i, _len, _ref1;
      el = document.createElement('div');
      _ref1 = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        key = _ref1[_i];
        if (el.style[key] !== void 0) {
          return key;
        }
      }
    }();

    tethers = [];

    position = function () {
      var tether, _i, _len;
      for (_i = 0, _len = tethers.length; _i < _len; _i++) {
        tether = tethers[_i];
        tether.position(false);
      }
      return flush();
    };

    now = function () {
      var _ref1;
      return (_ref1 = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref1 : +new Date();
    };

    (function () {
      var event, lastCall, lastDuration, pendingTimeout, tick, _i, _len, _ref1, _results;
      lastCall = null;
      lastDuration = null;
      pendingTimeout = null;
      tick = function () {
        if (lastDuration != null && lastDuration > 16) {
          lastDuration = Math.min(lastDuration - 16, 250);
          pendingTimeout = setTimeout(tick, 250);
          return;
        }
        if (lastCall != null && now() - lastCall < 10) {
          return;
        }
        if (pendingTimeout != null) {
          clearTimeout(pendingTimeout);
          pendingTimeout = null;
        }
        lastCall = now();
        position();
        return lastDuration = now() - lastCall;
      };
      _ref1 = ['resize', 'scroll', 'touchmove'];
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        event = _ref1[_i];
        _results.push(window.addEventListener(event, tick));
      }
      return _results;
    })();

    MIRROR_LR = {
      center: 'center',
      left: 'right',
      right: 'left'
    };

    MIRROR_TB = {
      middle: 'middle',
      top: 'bottom',
      bottom: 'top'
    };

    OFFSET_MAP = {
      top: 0,
      left: 0,
      middle: '50%',
      center: '50%',
      bottom: '100%',
      right: '100%'
    };

    autoToFixedAttachment = function (attachment, relativeToAttachment) {
      var left, top;
      left = attachment.left, top = attachment.top;
      if (left === 'auto') {
        left = MIRROR_LR[relativeToAttachment.left];
      }
      if (top === 'auto') {
        top = MIRROR_TB[relativeToAttachment.top];
      }
      return {
        left: left,
        top: top
      };
    };

    attachmentToOffset = function (attachment) {
      var _ref1, _ref2;
      return {
        left: (_ref1 = OFFSET_MAP[attachment.left]) != null ? _ref1 : attachment.left,
        top: (_ref2 = OFFSET_MAP[attachment.top]) != null ? _ref2 : attachment.top
      };
    };

    addOffset = function () {
      var left, offsets, out, top, _i, _len, _ref1;
      offsets = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      out = {
        top: 0,
        left: 0
      };
      for (_i = 0, _len = offsets.length; _i < _len; _i++) {
        _ref1 = offsets[_i], top = _ref1.top, left = _ref1.left;
        if (typeof top === 'string') {
          top = parseFloat(top, 10);
        }
        if (typeof left === 'string') {
          left = parseFloat(left, 10);
        }
        out.top += top;
        out.left += left;
      }
      return out;
    };

    offsetToPx = function (offset, size) {
      if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
        offset.left = parseFloat(offset.left, 10) / 100 * size.width;
      }
      if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
        offset.top = parseFloat(offset.top, 10) / 100 * size.height;
      }
      return offset;
    };

    parseAttachment = parseOffset = function (value) {
      var left, top, _ref1;
      _ref1 = value.split(' '), top = _ref1[0], left = _ref1[1];
      return {
        top: top,
        left: left
      };
    };

    _Tether = function () {
      _Tether.modules = [];

      function _Tether(options) {
        this.position = __bind(this.position, this);
        var module, _i, _len, _ref1, _ref2;
        tethers.push(this);
        this.history = [];
        this.setOptions(options, false);
        _ref1 = Tether.modules;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          module = _ref1[_i];
          if ((_ref2 = module.initialize) != null) {
            _ref2.call(this);
          }
        }
        this.position();
      }

      _Tether.prototype.getClass = function (key) {
        var _ref1, _ref2;
        if ((_ref1 = this.options.classes) != null ? _ref1[key] : void 0) {
          return this.options.classes[key];
        } else if (((_ref2 = this.options.classes) != null ? _ref2[key] : void 0) !== false) {
          if (this.options.classPrefix) {
            return "" + this.options.classPrefix + "-" + key;
          } else {
            return key;
          }
        } else {
          return '';
        }
      };

      _Tether.prototype.setOptions = function (options, position) {
        var defaults, key, _i, _len, _ref1, _ref2;
        this.options = options;
        if (position == null) {
          position = true;
        }
        defaults = {
          offset: '0 0',
          targetOffset: '0 0',
          targetAttachment: 'auto auto',
          classPrefix: 'tether'
        };
        this.options = extend(defaults, this.options);
        _ref1 = this.options, this.element = _ref1.element, this.target = _ref1.target, this.targetModifier = _ref1.targetModifier;
        if (this.target === 'viewport') {
          this.target = document.body;
          this.targetModifier = 'visible';
        } else if (this.target === 'scroll-handle') {
          this.target = document.body;
          this.targetModifier = 'scroll-handle';
        }
        _ref2 = ['element', 'target'];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          key = _ref2[_i];
          if (this[key] == null) {
            throw new Error("Tether Error: Both element and target must be defined");
          }
          if (this[key].jquery != null) {
            this[key] = this[key][0];
          } else if (typeof this[key] === 'string') {
            this[key] = document.querySelector(this[key]);
          }
        }
        addClass(this.element, this.getClass('element'));
        addClass(this.target, this.getClass('target'));
        if (!this.options.attachment) {
          throw new Error("Tether Error: You must provide an attachment");
        }
        this.targetAttachment = parseAttachment(this.options.targetAttachment);
        this.attachment = parseAttachment(this.options.attachment);
        this.offset = parseOffset(this.options.offset);
        this.targetOffset = parseOffset(this.options.targetOffset);
        if (this.scrollParent != null) {
          this.disable();
        }
        if (this.targetModifier === 'scroll-handle') {
          this.scrollParent = this.target;
        } else {
          this.scrollParent = getScrollParent(this.target);
        }
        if (this.options.enabled !== false) {
          return this.enable(position);
        }
      };

      _Tether.prototype.getTargetBounds = function () {
        var bounds, fitAdj, hasBottomScroll, height, out, scrollBottom, scrollPercentage, style, target;
        if (this.targetModifier != null) {
          switch (this.targetModifier) {
            case 'visible':
              if (this.target === document.body) {
                return {
                  top: pageYOffset,
                  left: pageXOffset,
                  height: innerHeight,
                  width: innerWidth
                };
              } else {
                bounds = getBounds(this.target);
                out = {
                  height: bounds.height,
                  width: bounds.width,
                  top: bounds.top,
                  left: bounds.left
                };
                out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
                out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
                out.height = Math.min(innerHeight, out.height);
                out.height -= 2;
                out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
                out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
                out.width = Math.min(innerWidth, out.width);
                out.width -= 2;
                if (out.top < pageYOffset) {
                  out.top = pageYOffset;
                }
                if (out.left < pageXOffset) {
                  out.left = pageXOffset;
                }
                return out;
              }
              break;
            case 'scroll-handle':
              target = this.target;
              if (target === document.body) {
                target = document.documentElement;
                bounds = {
                  left: pageXOffset,
                  top: pageYOffset,
                  height: innerHeight,
                  width: innerWidth
                };
              } else {
                bounds = getBounds(target);
              }
              style = getComputedStyle(target);
              hasBottomScroll = target.scrollWidth > target.clientWidth || 'scroll' === [style.overflow, style.overflowX] || this.target !== document.body;
              scrollBottom = 0;
              if (hasBottomScroll) {
                scrollBottom = 15;
              }
              height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
              out = {
                width: 15,
                height: height * 0.975 * (height / target.scrollHeight),
                left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
              };
              fitAdj = 0;
              if (height < 408 && this.target === document.body) {
                fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
              }
              if (this.target !== document.body) {
                out.height = Math.max(out.height, 24);
              }
              scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
              out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
              if (this.target === document.body) {
                out.height = Math.max(out.height, 24);
              }
              return out;
          }
        } else {
          return getBounds(this.target);
        }
      };

      _Tether.prototype.clearCache = function () {
        return this._cache = {};
      };

      _Tether.prototype.cache = function (k, getter) {
        if (this._cache == null) {
          this._cache = {};
        }
        if (this._cache[k] == null) {
          this._cache[k] = getter.call(this);
        }
        return this._cache[k];
      };

      _Tether.prototype.enable = function (position) {
        if (position == null) {
          position = true;
        }
        addClass(this.target, this.getClass('enabled'));
        addClass(this.element, this.getClass('enabled'));
        this.enabled = true;
        if (this.scrollParent !== document) {
          this.scrollParent.addEventListener('scroll', this.position);
        }
        if (position) {
          return this.position();
        }
      };

      _Tether.prototype.disable = function () {
        removeClass(this.target, this.getClass('enabled'));
        removeClass(this.element, this.getClass('enabled'));
        this.enabled = false;
        if (this.scrollParent != null) {
          return this.scrollParent.removeEventListener('scroll', this.position);
        }
      };

      _Tether.prototype.destroy = function () {
        var i, tether, _i, _len, _results;
        this.disable();
        _results = [];
        for (i = _i = 0, _len = tethers.length; _i < _len; i = ++_i) {
          tether = tethers[i];
          if (tether === this) {
            tethers.splice(i, 1);
            break;
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      _Tether.prototype.updateAttachClasses = function (elementAttach, targetAttach) {
        var add,
            all,
            side,
            sides,
            _i,
            _j,
            _len,
            _len1,
            _ref1,
            _this = this;
        if (elementAttach == null) {
          elementAttach = this.attachment;
        }
        if (targetAttach == null) {
          targetAttach = this.targetAttachment;
        }
        sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
        if ((_ref1 = this._addAttachClasses) != null ? _ref1.length : void 0) {
          this._addAttachClasses.splice(0, this._addAttachClasses.length);
        }
        add = this._addAttachClasses != null ? this._addAttachClasses : this._addAttachClasses = [];
        if (elementAttach.top) {
          add.push("" + this.getClass('element-attached') + "-" + elementAttach.top);
        }
        if (elementAttach.left) {
          add.push("" + this.getClass('element-attached') + "-" + elementAttach.left);
        }
        if (targetAttach.top) {
          add.push("" + this.getClass('target-attached') + "-" + targetAttach.top);
        }
        if (targetAttach.left) {
          add.push("" + this.getClass('target-attached') + "-" + targetAttach.left);
        }
        all = [];
        for (_i = 0, _len = sides.length; _i < _len; _i++) {
          side = sides[_i];
          all.push("" + this.getClass('element-attached') + "-" + side);
        }
        for (_j = 0, _len1 = sides.length; _j < _len1; _j++) {
          side = sides[_j];
          all.push("" + this.getClass('target-attached') + "-" + side);
        }
        return defer(function () {
          if (_this._addAttachClasses == null) {
            return;
          }
          updateClasses(_this.element, _this._addAttachClasses, all);
          updateClasses(_this.target, _this._addAttachClasses, all);
          return _this._addAttachClasses = void 0;
        });
      };

      _Tether.prototype.position = function (flushChanges) {
        var elementPos,
            elementStyle,
            height,
            left,
            manualOffset,
            manualTargetOffset,
            module,
            next,
            offset,
            offsetBorder,
            offsetParent,
            offsetParentSize,
            offsetParentStyle,
            offsetPosition,
            ret,
            scrollLeft,
            scrollTop,
            scrollbarSize,
            side,
            targetAttachment,
            targetOffset,
            targetPos,
            targetSize,
            top,
            width,
            _i,
            _j,
            _len,
            _len1,
            _ref1,
            _ref2,
            _ref3,
            _ref4,
            _ref5,
            _ref6,
            _this = this;
        if (flushChanges == null) {
          flushChanges = true;
        }
        if (!this.enabled) {
          return;
        }
        this.clearCache();
        targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
        this.updateAttachClasses(this.attachment, targetAttachment);
        elementPos = this.cache('element-bounds', function () {
          return getBounds(_this.element);
        });
        width = elementPos.width, height = elementPos.height;
        if (width === 0 && height === 0 && this.lastSize != null) {
          _ref1 = this.lastSize, width = _ref1.width, height = _ref1.height;
        } else {
          this.lastSize = {
            width: width,
            height: height
          };
        }
        targetSize = targetPos = this.cache('target-bounds', function () {
          return _this.getTargetBounds();
        });
        offset = offsetToPx(attachmentToOffset(this.attachment), {
          width: width,
          height: height
        });
        targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
        manualOffset = offsetToPx(this.offset, {
          width: width,
          height: height
        });
        manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
        offset = addOffset(offset, manualOffset);
        targetOffset = addOffset(targetOffset, manualTargetOffset);
        left = targetPos.left + targetOffset.left - offset.left;
        top = targetPos.top + targetOffset.top - offset.top;
        _ref2 = Tether.modules;
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          module = _ref2[_i];
          ret = module.position.call(this, {
            left: left,
            top: top,
            targetAttachment: targetAttachment,
            targetPos: targetPos,
            attachment: this.attachment,
            elementPos: elementPos,
            offset: offset,
            targetOffset: targetOffset,
            manualOffset: manualOffset,
            manualTargetOffset: manualTargetOffset,
            scrollbarSize: scrollbarSize
          });
          if (ret == null || typeof ret !== 'object') {
            continue;
          } else if (ret === false) {
            return false;
          } else {
            top = ret.top, left = ret.left;
          }
        }
        next = {
          page: {
            top: top,
            left: left
          },
          viewport: {
            top: top - pageYOffset,
            bottom: pageYOffset - top - height + innerHeight,
            left: left - pageXOffset,
            right: pageXOffset - left - width + innerWidth
          }
        };
        if (document.body.scrollWidth > window.innerWidth) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.bottom -= scrollbarSize.height;
        }
        if (document.body.scrollHeight > window.innerHeight) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.right -= scrollbarSize.width;
        }
        if ((_ref3 = document.body.style.position) !== '' && _ref3 !== 'static' || (_ref4 = document.body.parentElement.style.position) !== '' && _ref4 !== 'static') {
          next.page.bottom = document.body.scrollHeight - top - height;
          next.page.right = document.body.scrollWidth - left - width;
        }
        if (((_ref5 = this.options.optimizations) != null ? _ref5.moveElement : void 0) !== false && this.targetModifier == null) {
          offsetParent = this.cache('target-offsetparent', function () {
            return getOffsetParent(_this.target);
          });
          offsetPosition = this.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          offsetParentStyle = getComputedStyle(offsetParent);
          elementStyle = getComputedStyle(this.element);
          offsetParentSize = offsetPosition;
          offsetBorder = {};
          _ref6 = ['Top', 'Left', 'Bottom', 'Right'];
          for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
            side = _ref6[_j];
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle["border" + side + "Width"]);
          }
          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              scrollTop = offsetParent.scrollTop;
              scrollLeft = offsetParent.scrollLeft;
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        }
        this.move(next);
        this.history.unshift(next);
        if (this.history.length > 3) {
          this.history.pop();
        }
        if (flushChanges) {
          flush();
        }
        return true;
      };

      _Tether.prototype.move = function (position) {
        var css,
            elVal,
            found,
            key,
            moved,
            offsetParent,
            point,
            same,
            transcribe,
            type,
            val,
            write,
            writeCSS,
            _i,
            _len,
            _ref1,
            _ref2,
            _this = this;
        if (this.element.parentNode == null) {
          return;
        }
        same = {};
        for (type in position) {
          same[type] = {};
          for (key in position[type]) {
            found = false;
            _ref1 = this.history;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              point = _ref1[_i];
              if (!within((_ref2 = point[type]) != null ? _ref2[key] : void 0, position[type][key])) {
                found = true;
                break;
              }
            }
            if (!found) {
              same[type][key] = true;
            }
          }
        }
        css = {
          top: '',
          left: '',
          right: '',
          bottom: ''
        };
        transcribe = function (same, pos) {
          var xPos, yPos, _ref3;
          if (((_ref3 = _this.options.optimizations) != null ? _ref3.gpu : void 0) !== false) {
            if (same.top) {
              css.top = 0;
              yPos = pos.top;
            } else {
              css.bottom = 0;
              yPos = -pos.bottom;
            }
            if (same.left) {
              css.left = 0;
              xPos = pos.left;
            } else {
              css.right = 0;
              xPos = -pos.right;
            }
            css[transformKey] = "translateX(" + Math.round(xPos) + "px) translateY(" + Math.round(yPos) + "px)";
            if (transformKey !== 'msTransform') {
              return css[transformKey] += " translateZ(0)";
            }
          } else {
            if (same.top) {
              css.top = "" + pos.top + "px";
            } else {
              css.bottom = "" + pos.bottom + "px";
            }
            if (same.left) {
              return css.left = "" + pos.left + "px";
            } else {
              return css.right = "" + pos.right + "px";
            }
          }
        };
        moved = false;
        if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
          css.position = 'absolute';
          transcribe(same.page, position.page);
        } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
          css.position = 'fixed';
          transcribe(same.viewport, position.viewport);
        } else if (same.offset != null && same.offset.top && same.offset.left) {
          css.position = 'absolute';
          offsetParent = this.cache('target-offsetparent', function () {
            return getOffsetParent(_this.target);
          });
          if (getOffsetParent(this.element) !== offsetParent) {
            defer(function () {
              _this.element.parentNode.removeChild(_this.element);
              return offsetParent.appendChild(_this.element);
            });
          }
          transcribe(same.offset, position.offset);
          moved = true;
        } else {
          css.position = 'absolute';
          transcribe({
            top: true,
            left: true
          }, position.page);
        }
        if (!moved && this.element.parentNode.tagName !== 'BODY') {
          this.element.parentNode.removeChild(this.element);
          document.body.appendChild(this.element);
        }
        writeCSS = {};
        write = false;
        for (key in css) {
          val = css[key];
          elVal = this.element.style[key];
          if (elVal !== '' && val !== '' && (key === 'top' || key === 'left' || key === 'bottom' || key === 'right')) {
            elVal = parseFloat(elVal);
            val = parseFloat(val);
          }
          if (elVal !== val) {
            write = true;
            writeCSS[key] = css[key];
          }
        }
        if (write) {
          return defer(function () {
            return extend(_this.element.style, writeCSS);
          });
        }
      };

      return _Tether;
    }();

    Tether.position = position;

    this.Tether = extend(_Tether, Tether);
  }).call(this);

  (function () {
    var BOUNDS_FORMAT,
        MIRROR_ATTACH,
        defer,
        extend,
        getBoundingRect,
        getBounds,
        getOuterSize,
        getSize,
        updateClasses,
        _ref,
        __indexOf = [].indexOf || function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }return -1;
    };

    _ref = this.Tether.Utils, getOuterSize = _ref.getOuterSize, getBounds = _ref.getBounds, getSize = _ref.getSize, extend = _ref.extend, updateClasses = _ref.updateClasses, defer = _ref.defer;

    MIRROR_ATTACH = {
      left: 'right',
      right: 'left',
      top: 'bottom',
      bottom: 'top',
      middle: 'middle'
    };

    BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

    getBoundingRect = function (tether, to) {
      var i, pos, side, size, style, _i, _len;
      if (to === 'scrollParent') {
        to = tether.scrollParent;
      } else if (to === 'window') {
        to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
      }
      if (to === document) {
        to = to.documentElement;
      }
      if (to.nodeType != null) {
        pos = size = getBounds(to);
        style = getComputedStyle(to);
        to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
        for (i = _i = 0, _len = BOUNDS_FORMAT.length; _i < _len; i = ++_i) {
          side = BOUNDS_FORMAT[i];
          side = side[0].toUpperCase() + side.substr(1);
          if (side === 'Top' || side === 'Left') {
            to[i] += parseFloat(style["border" + side + "Width"]);
          } else {
            to[i] -= parseFloat(style["border" + side + "Width"]);
          }
        }
      }
      return to;
    };

    this.Tether.modules.push({
      position: function (_arg) {
        var addClasses,
            allClasses,
            attachment,
            bounds,
            changeAttachX,
            changeAttachY,
            cls,
            constraint,
            eAttachment,
            height,
            left,
            oob,
            oobClass,
            p,
            pin,
            pinned,
            pinnedClass,
            removeClass,
            side,
            tAttachment,
            targetAttachment,
            targetHeight,
            targetSize,
            targetWidth,
            to,
            top,
            width,
            _i,
            _j,
            _k,
            _l,
            _len,
            _len1,
            _len2,
            _len3,
            _len4,
            _len5,
            _m,
            _n,
            _ref1,
            _ref2,
            _ref3,
            _ref4,
            _ref5,
            _ref6,
            _ref7,
            _ref8,
            _this = this;
        top = _arg.top, left = _arg.left, targetAttachment = _arg.targetAttachment;
        if (!this.options.constraints) {
          return true;
        }
        removeClass = function (prefix) {
          var side, _i, _len, _results;
          _this.removeClass(prefix);
          _results = [];
          for (_i = 0, _len = BOUNDS_FORMAT.length; _i < _len; _i++) {
            side = BOUNDS_FORMAT[_i];
            _results.push(_this.removeClass("" + prefix + "-" + side));
          }
          return _results;
        };
        _ref1 = this.cache('element-bounds', function () {
          return getBounds(_this.element);
        }), height = _ref1.height, width = _ref1.width;
        if (width === 0 && height === 0 && this.lastSize != null) {
          _ref2 = this.lastSize, width = _ref2.width, height = _ref2.height;
        }
        targetSize = this.cache('target-bounds', function () {
          return _this.getTargetBounds();
        });
        targetHeight = targetSize.height;
        targetWidth = targetSize.width;
        tAttachment = {};
        eAttachment = {};
        allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
        _ref3 = this.options.constraints;
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          constraint = _ref3[_i];
          if (constraint.outOfBoundsClass) {
            allClasses.push(constraint.outOfBoundsClass);
          }
          if (constraint.pinnedClass) {
            allClasses.push(constraint.pinnedClass);
          }
        }
        for (_j = 0, _len1 = allClasses.length; _j < _len1; _j++) {
          cls = allClasses[_j];
          _ref4 = ['left', 'top', 'right', 'bottom'];
          for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
            side = _ref4[_k];
            allClasses.push("" + cls + "-" + side);
          }
        }
        addClasses = [];
        tAttachment = extend({}, targetAttachment);
        eAttachment = extend({}, this.attachment);
        _ref5 = this.options.constraints;
        for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
          constraint = _ref5[_l];
          to = constraint.to, attachment = constraint.attachment, pin = constraint.pin;
          if (attachment == null) {
            attachment = '';
          }
          if (__indexOf.call(attachment, ' ') >= 0) {
            _ref6 = attachment.split(' '), changeAttachY = _ref6[0], changeAttachX = _ref6[1];
          } else {
            changeAttachX = changeAttachY = attachment;
          }
          bounds = getBoundingRect(this, to);
          if (changeAttachY === 'target' || changeAttachY === 'both') {
            if (top < bounds[1] && tAttachment.top === 'top') {
              top += targetHeight;
              tAttachment.top = 'bottom';
            }
            if (top + height > bounds[3] && tAttachment.top === 'bottom') {
              top -= targetHeight;
              tAttachment.top = 'top';
            }
          }
          if (changeAttachY === 'together') {
            if (top < bounds[1] && tAttachment.top === 'top') {
              if (eAttachment.top === 'bottom') {
                top += targetHeight;
                tAttachment.top = 'bottom';
                top += height;
                eAttachment.top = 'top';
              } else if (eAttachment.top === 'top') {
                top += targetHeight;
                tAttachment.top = 'bottom';
                top -= height;
                eAttachment.top = 'bottom';
              }
            }
            if (top + height > bounds[3] && tAttachment.top === 'bottom') {
              if (eAttachment.top === 'top') {
                top -= targetHeight;
                tAttachment.top = 'top';
                top -= height;
                eAttachment.top = 'bottom';
              } else if (eAttachment.top === 'bottom') {
                top -= targetHeight;
                tAttachment.top = 'top';
                top += height;
                eAttachment.top = 'top';
              }
            }
            if (tAttachment.top === 'middle') {
              if (top + height > bounds[3] && eAttachment.top === 'top') {
                top -= height;
                eAttachment.top = 'bottom';
              } else if (top < bounds[1] && eAttachment.top === 'bottom') {
                top += height;
                eAttachment.top = 'top';
              }
            }
          }
          if (changeAttachX === 'target' || changeAttachX === 'both') {
            if (left < bounds[0] && tAttachment.left === 'left') {
              left += targetWidth;
              tAttachment.left = 'right';
            }
            if (left + width > bounds[2] && tAttachment.left === 'right') {
              left -= targetWidth;
              tAttachment.left = 'left';
            }
          }
          if (changeAttachX === 'together') {
            if (left < bounds[0] && tAttachment.left === 'left') {
              if (eAttachment.left === 'right') {
                left += targetWidth;
                tAttachment.left = 'right';
                left += width;
                eAttachment.left = 'left';
              } else if (eAttachment.left === 'left') {
                left += targetWidth;
                tAttachment.left = 'right';
                left -= width;
                eAttachment.left = 'right';
              }
            } else if (left + width > bounds[2] && tAttachment.left === 'right') {
              if (eAttachment.left === 'left') {
                left -= targetWidth;
                tAttachment.left = 'left';
                left -= width;
                eAttachment.left = 'right';
              } else if (eAttachment.left === 'right') {
                left -= targetWidth;
                tAttachment.left = 'left';
                left += width;
                eAttachment.left = 'left';
              }
            } else if (tAttachment.left === 'center') {
              if (left + width > bounds[2] && eAttachment.left === 'left') {
                left -= width;
                eAttachment.left = 'right';
              } else if (left < bounds[0] && eAttachment.left === 'right') {
                left += width;
                eAttachment.left = 'left';
              }
            }
          }
          if (changeAttachY === 'element' || changeAttachY === 'both') {
            if (top < bounds[1] && eAttachment.top === 'bottom') {
              top += height;
              eAttachment.top = 'top';
            }
            if (top + height > bounds[3] && eAttachment.top === 'top') {
              top -= height;
              eAttachment.top = 'bottom';
            }
          }
          if (changeAttachX === 'element' || changeAttachX === 'both') {
            if (left < bounds[0] && eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            }
            if (left + width > bounds[2] && eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            }
          }
          if (typeof pin === 'string') {
            pin = function () {
              var _len4, _m, _ref7, _results;
              _ref7 = pin.split(',');
              _results = [];
              for (_m = 0, _len4 = _ref7.length; _m < _len4; _m++) {
                p = _ref7[_m];
                _results.push(p.trim());
              }
              return _results;
            }();
          } else if (pin === true) {
            pin = ['top', 'left', 'right', 'bottom'];
          }
          pin || (pin = []);
          pinned = [];
          oob = [];
          if (top < bounds[1]) {
            if (__indexOf.call(pin, 'top') >= 0) {
              top = bounds[1];
              pinned.push('top');
            } else {
              oob.push('top');
            }
          }
          if (top + height > bounds[3]) {
            if (__indexOf.call(pin, 'bottom') >= 0) {
              top = bounds[3] - height;
              pinned.push('bottom');
            } else {
              oob.push('bottom');
            }
          }
          if (left < bounds[0]) {
            if (__indexOf.call(pin, 'left') >= 0) {
              left = bounds[0];
              pinned.push('left');
            } else {
              oob.push('left');
            }
          }
          if (left + width > bounds[2]) {
            if (__indexOf.call(pin, 'right') >= 0) {
              left = bounds[2] - width;
              pinned.push('right');
            } else {
              oob.push('right');
            }
          }
          if (pinned.length) {
            pinnedClass = (_ref7 = this.options.pinnedClass) != null ? _ref7 : this.getClass('pinned');
            addClasses.push(pinnedClass);
            for (_m = 0, _len4 = pinned.length; _m < _len4; _m++) {
              side = pinned[_m];
              addClasses.push("" + pinnedClass + "-" + side);
            }
          }
          if (oob.length) {
            oobClass = (_ref8 = this.options.outOfBoundsClass) != null ? _ref8 : this.getClass('out-of-bounds');
            addClasses.push(oobClass);
            for (_n = 0, _len5 = oob.length; _n < _len5; _n++) {
              side = oob[_n];
              addClasses.push("" + oobClass + "-" + side);
            }
          }
          if (__indexOf.call(pinned, 'left') >= 0 || __indexOf.call(pinned, 'right') >= 0) {
            eAttachment.left = tAttachment.left = false;
          }
          if (__indexOf.call(pinned, 'top') >= 0 || __indexOf.call(pinned, 'bottom') >= 0) {
            eAttachment.top = tAttachment.top = false;
          }
          if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== this.attachment.top || eAttachment.left !== this.attachment.left) {
            this.updateAttachClasses(eAttachment, tAttachment);
          }
        }
        defer(function () {
          updateClasses(_this.target, addClasses, allClasses);
          return updateClasses(_this.element, addClasses, allClasses);
        });
        return {
          top: top,
          left: left
        };
      }
    });
  }).call(this);

  (function () {
    var defer, getBounds, updateClasses, _ref;

    _ref = this.Tether.Utils, getBounds = _ref.getBounds, updateClasses = _ref.updateClasses, defer = _ref.defer;

    this.Tether.modules.push({
      position: function (_arg) {
        var abutted,
            addClasses,
            allClasses,
            bottom,
            height,
            left,
            right,
            side,
            sides,
            targetPos,
            top,
            width,
            _i,
            _j,
            _k,
            _l,
            _len,
            _len1,
            _len2,
            _len3,
            _ref1,
            _ref2,
            _ref3,
            _ref4,
            _ref5,
            _this = this;
        top = _arg.top, left = _arg.left;
        _ref1 = this.cache('element-bounds', function () {
          return getBounds(_this.element);
        }), height = _ref1.height, width = _ref1.width;
        targetPos = this.getTargetBounds();
        bottom = top + height;
        right = left + width;
        abutted = [];
        if (top <= targetPos.bottom && bottom >= targetPos.top) {
          _ref2 = ['left', 'right'];
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            side = _ref2[_i];
            if ((_ref3 = targetPos[side]) === left || _ref3 === right) {
              abutted.push(side);
            }
          }
        }
        if (left <= targetPos.right && right >= targetPos.left) {
          _ref4 = ['top', 'bottom'];
          for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
            side = _ref4[_j];
            if ((_ref5 = targetPos[side]) === top || _ref5 === bottom) {
              abutted.push(side);
            }
          }
        }
        allClasses = [];
        addClasses = [];
        sides = ['left', 'top', 'right', 'bottom'];
        allClasses.push(this.getClass('abutted'));
        for (_k = 0, _len2 = sides.length; _k < _len2; _k++) {
          side = sides[_k];
          allClasses.push("" + this.getClass('abutted') + "-" + side);
        }
        if (abutted.length) {
          addClasses.push(this.getClass('abutted'));
        }
        for (_l = 0, _len3 = abutted.length; _l < _len3; _l++) {
          side = abutted[_l];
          addClasses.push("" + this.getClass('abutted') + "-" + side);
        }
        defer(function () {
          updateClasses(_this.target, addClasses, allClasses);
          return updateClasses(_this.element, addClasses, allClasses);
        });
        return true;
      }
    });
  }).call(this);

  (function () {
    this.Tether.modules.push({
      position: function (_arg) {
        var left, result, shift, shiftLeft, shiftTop, top, _ref;
        top = _arg.top, left = _arg.left;
        if (!this.options.shift) {
          return;
        }
        result = function (val) {
          if (typeof val === 'function') {
            return val.call(this, {
              top: top,
              left: left
            });
          } else {
            return val;
          }
        };
        shift = result(this.options.shift);
        if (typeof shift === 'string') {
          shift = shift.split(' ');
          shift[1] || (shift[1] = shift[0]);
          shiftTop = shift[0], shiftLeft = shift[1];
          shiftTop = parseFloat(shiftTop, 10);
          shiftLeft = parseFloat(shiftLeft, 10);
        } else {
          _ref = [shift.top, shift.left], shiftTop = _ref[0], shiftLeft = _ref[1];
        }
        top += shiftTop;
        left += shiftLeft;
        return {
          top: top,
          left: left
        };
      }
    });
  }).call(this);

  return this.Tether;
});
//
!function (t, e) {
  "function" == typeof define && define.amd ? define(["tether"], e) : "object" == typeof exports ? module.exports = e(require("tether")) : t.Shepherd = e(t.Tether);
}(this, function (t) {
  "use strict";
  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function n(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }function i(t) {
    return "undefined" == typeof t;
  }function r(t) {
    return t && t.constructor === Array;
  }function o(t) {
    return t && t.constructor === Object;
  }function s(t) {
    return "object" == typeof t;
  }function h(t) {
    var e = document.createElement("div");return e.innerHTML = t, e.children[0];
  }function c(t, e) {
    var n = void 0;return i(t.matches) ? i(t.matchesSelector) ? i(t.msMatchesSelector) ? i(t.webkitMatchesSelector) ? i(t.mozMatchesSelector) ? i(t.oMatchesSelector) || (n = t.oMatchesSelector) : n = t.mozMatchesSelector : n = t.webkitMatchesSelector : n = t.msMatchesSelector : n = t.matchesSelector : n = t.matches, n.call(t, e);
  }function l(t) {
    if (s(t)) return t.hasOwnProperty("element") && t.hasOwnProperty("on") ? t : null;var e = S.exec(t);if (!e) return null;var n = e[2];return "[" === n[0] && (n = n.substring(1, n.length - 1)), { element: e[1], on: n };
  }function a(t, e) {
    if (null === t || i(t)) return t;if (s(t)) return t;for (var n = t.split(" "), r = {}, o = e.length - 1, h = n.length - 1; h >= 0; h--) {
      if (0 === o) {
        r[e[o]] = n.slice(0, h + 1).join(" ");break;
      }r[e[o]] = n[h], o--;
    }return r;
  }var u = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      d = function (t, e, n) {
    for (var i = !0; i;) {
      var r = t,
          o = e,
          s = n;i = !1, null === r && (r = Function.prototype);var h = Object.getOwnPropertyDescriptor(r, o);if (void 0 !== h) {
        if ("value" in h) return h.value;var c = h.get;if (void 0 === c) return;return c.call(s);
      }var l = Object.getPrototypeOf(r);if (null === l) return;t = l, e = o, n = s, i = !0, h = l = void 0;
    }
  },
      p = t.Utils,
      f = p.Evented,
      v = p.addClass,
      m = p.extend,
      y = p.hasClass,
      g = p.removeClass,
      b = p.uniqueId,
      w = new f(),
      k = { "top right": "bottom left", "top left": "bottom right", "top center": "bottom center", "middle right": "middle left", "middle left": "middle right", "middle center": "middle center", "bottom left": "top right", "bottom right": "top left", "bottom center": "top center", top: "bottom center", left: "middle right", right: "middle left", bottom: "top center", center: "middle center", middle: "middle center" },
      S = /^(.+) (top|left|right|bottom|center|\[[a-z ]+\])$/,
      O = function (s) {
    function p(t, n) {
      return e(this, p), d(Object.getPrototypeOf(p.prototype), "constructor", this).call(this, t, n), this.tour = t, this.bindMethods(), this.setOptions(n), this;
    }return n(p, s), u(p, [{ key: "bindMethods", value: function () {
        var t = this,
            e = ["_show", "show", "hide", "isOpen", "cancel", "complete", "scrollTo", "destroy", "render"];e.map(function (e) {
          t[e] = t[e].bind(t);
        });
      } }, { key: "setOptions", value: function () {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];this.options = t, this.destroy(), this.id = this.options.id || this.id || "step-" + b();var e = this.options.when;if (e) for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
          var s = e[n];this.on(n, s, this);
        }var h = JSON.stringify(this.options.buttons),
            c = i(h) || "true" === h,
            l = "{}" === h || "[]" === h || "null" === h || "false" === h,
            a = !c && r(this.options.buttons),
            u = !c && o(this.options.buttons);c ? this.options.buttons = [{ text: "Next", action: this.tour.next, classes: "btn" }] : !l && u ? this.options.buttons = [this.options.buttons] : !l && a || (this.options.buttons = !1);
      } }, { key: "getTour", value: function () {
        return this.tour;
      } }, { key: "bindAdvance", value: function () {
        var t = this,
            e = a(this.options.advanceOn, ["selector", "event"]),
            n = e.event,
            r = e.selector,
            o = function (e) {
          t.isOpen() && (i(r) ? t.el && e.target === t.el && t.tour.next() : c(e.target, r) && t.tour.next());
        };document.body.addEventListener(n, o), this.on("destroy", function () {
          return document.body.removeEventListener(n, o);
        });
      } }, { key: "getAttachTo", value: function () {
        var t = l(this.options.attachTo) || {},
            e = m({}, t);return "string" == typeof t.element && (e.element = document.querySelector(t.element), e.element || console.error("The element for this Shepherd step was not found " + t.element)), e;
      } }, { key: "setupTether", value: function () {
        if (i(t)) throw new Error("Using the attachment feature of Shepherd requires the Tether library");var e = this.getAttachTo(),
            n = k[e.on] || k.right;i(e.element) && (e.element = "viewport", n = "middle center");var r = { classPrefix: "shepherd", element: this.el, constraints: [{ to: "window", pin: !0, attachment: "together" }], target: e.element, offset: e.offset || "0 0", attachment: n };this.tether && this.tether.destroy(), this.tether = new t(m(r, this.options.tetherOptions));
      } }, { key: "show", value: function () {
        var t = this;if (!i(this.options.beforeShowPromise)) {
          var e = this.options.beforeShowPromise();if (!i(e)) return e.then(function () {
            return t._show();
          });
        }this._show();
      } }, { key: "_show", value: function () {
        var t = this;this.trigger("before-show"), this.el || this.render(), v(this.el, "shepherd-open"), document.body.setAttribute("data-shepherd-step", this.id), this.setupTether(), this.options.scrollTo && setTimeout(function () {
          t.scrollTo();
        }), this.trigger("show");
      } }, { key: "hide", value: function () {
        this.trigger("before-hide"), g(this.el, "shepherd-open"), document.body.removeAttribute("data-shepherd-step"), this.tether && this.tether.destroy(), this.tether = null, this.trigger("hide");
      } }, { key: "isOpen", value: function () {
        return this.el && y(this.el, "shepherd-open");
      } }, { key: "cancel", value: function () {
        this.tour.cancel(), this.trigger("cancel");
      } }, { key: "complete", value: function () {
        this.tour.complete(), this.trigger("complete");
      } }, { key: "scrollTo", value: function () {
        var t = this.getAttachTo(),
            e = t.element;i(this.options.scrollToHandler) ? i(e) || e.scrollIntoView() : this.options.scrollToHandler(e);
      } }, { key: "destroy", value: function () {
        !i(this.el) && this.el.parentNode && (this.el.parentNode.removeChild(this.el), delete this.el), this.tether && this.tether.destroy(), this.tether = null, this.trigger("destroy");
      } }, { key: "render", value: function () {
        var t = this;i(this.el) || this.destroy(), this.el = h("<div class='shepherd-step " + (this.options.classes || "") + "' data-id='" + this.id + "' " + (this.options.idAttribute ? 'id="' + this.options.idAttribute + '"' : "") + "></div>");var e = document.createElement("div");e.className = "shepherd-content", this.el.appendChild(e);var n = document.createElement("header");if (e.appendChild(n), this.options.title && (n.innerHTML += "<h3 class='shepherd-title'>" + this.options.title + "</h3>", this.el.className += " shepherd-has-title"), this.options.showCancelLink) {
          var r = h("<a href class='shepherd-cancel-link'>✕</a>");n.appendChild(r), this.el.className += " shepherd-has-cancel-link", this.bindCancelLink(r);
        }i(this.options.text) || !function () {
          var n = h("<div class='shepherd-text'></div>"),
              i = t.options.text;"function" == typeof i && (i = i.call(t, n)), i instanceof HTMLElement ? n.appendChild(i) : ("string" == typeof i && (i = [i]), i.map(function (t) {
            n.innerHTML += "<p>" + t + "</p>";
          })), e.appendChild(n);
        }(), this.options.buttons && !function () {
          var n = document.createElement("footer"),
              i = h("<ul class='shepherd-buttons'></ul>");t.options.buttons.map(function (e) {
            var n = h("<li><a class='shepherd-button " + (e.classes || "") + "'>" + e.text + "</a>");i.appendChild(n), t.bindButtonEvents(e, n.querySelector("a"));
          }), n.appendChild(i), e.appendChild(n);
        }(), document.body.appendChild(this.el), this.setupTether(), this.options.advanceOn && this.bindAdvance();
      } }, { key: "bindCancelLink", value: function (t) {
        var e = this;t.addEventListener("click", function (t) {
          t.preventDefault(), e.cancel();
        });
      } }, { key: "bindButtonEvents", value: function (t, e) {
        var n = this;t.events = t.events || {}, i(t.action) || (t.events.click = t.action);for (var r in t.events) if ({}.hasOwnProperty.call(t.events, r)) {
          var o = t.events[r];"string" == typeof o && !function () {
            var t = o;o = function () {
              return n.tour.show(t);
            };
          }(), e.addEventListener(r, o);
        }this.on("destroy", function () {
          for (var n in t.events) if ({}.hasOwnProperty.call(t.events, n)) {
            var i = t.events[n];e.removeEventListener(n, i);
          }
        });
      } }]), p;
  }(f),
      T = function (t) {
    function r() {
      var t = this,
          n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];e(this, r), d(Object.getPrototypeOf(r.prototype), "constructor", this).call(this, n), this.bindMethods(), this.options = n, this.steps = this.options.steps || [];var i = ["complete", "cancel", "hide", "start", "show", "active", "inactive"];return i.map(function (e) {
        !function (e) {
          t.on(e, function (n) {
            n = n || {}, n.tour = t, w.trigger(e, n);
          });
        }(e);
      }), this;
    }return n(r, t), u(r, [{ key: "bindMethods", value: function () {
        var t = this,
            e = ["next", "back", "cancel", "complete", "hide"];e.map(function (e) {
          t[e] = t[e].bind(t);
        });
      } }, { key: "addStep", value: function (t, e) {
        return i(e) && (e = t), e instanceof O ? e.tour = this : ("string" != typeof t && "number" != typeof t || (e.id = t.toString()), e = m({}, this.options.defaults, e), e = new O(this, e)), this.steps.push(e), this;
      } }, { key: "removeStep", value: function (t) {
        for (var e = this.getCurrentStep(), n = 0; n < this.steps.length; ++n) {
          var i = this.steps[n];if (i.id === t) {
            i.isOpen() && i.hide(), i.destroy(), this.steps.splice(n, 1);break;
          }
        }e && e.id === t && (this.currentStep = void 0, this.steps.length ? this.show(0) : this.hide());
      } }, { key: "getById", value: function (t) {
        for (var e = 0; e < this.steps.length; ++e) {
          var n = this.steps[e];if (n.id === t) return n;
        }
      } }, { key: "getCurrentStep", value: function () {
        return this.currentStep;
      } }, { key: "next", value: function () {
        var t = this.steps.indexOf(this.currentStep);t === this.steps.length - 1 ? (this.hide(t), this.trigger("complete"), this.done()) : this.show(t + 1, !0);
      } }, { key: "back", value: function () {
        var t = this.steps.indexOf(this.currentStep);this.show(t - 1, !1);
      } }, { key: "cancel", value: function () {
        this.currentStep && this.currentStep.hide(), this.trigger("cancel"), this.done();
      } }, { key: "complete", value: function () {
        this.currentStep && this.currentStep.hide(), this.trigger("complete"), this.done();
      } }, { key: "hide", value: function () {
        this.currentStep && this.currentStep.hide(), this.trigger("hide"), this.done();
      } }, { key: "done", value: function () {
        w.activeTour = null, g(document.body, "shepherd-active"), this.trigger("inactive", { tour: this });
      } }, { key: "show", value: function () {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
            e = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];this.currentStep ? this.currentStep.hide() : (v(document.body, "shepherd-active"), this.trigger("active", { tour: this })), w.activeTour = this;var n = void 0;if (n = "string" == typeof t ? this.getById(t) : this.steps[t]) if (i(n.options.showOn) || n.options.showOn()) this.trigger("show", { step: n, previous: this.currentStep }), this.currentStep && this.currentStep.hide(), this.currentStep = n, n.show();else {
          var r = this.steps.indexOf(n),
              o = e ? r + 1 : r - 1;this.show(o, e);
        }
      } }, { key: "start", value: function () {
        this.trigger("start"), this.currentStep = null, this.next();
      } }]), r;
  }(f);return m(w, { Tour: T, Step: O, Evented: f }), w;
});
//
(function (e, a) {
  if (!a.__SV) {
    var b = window;try {
      var c,
          l,
          i,
          j = b.location,
          g = j.hash;c = function (a, b) {
        return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null;
      };g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search)));
    } catch (m) {}var k, h;window.mixpanel = a;a._i = [];a.init = function (b, c, f) {
      function e(b, a) {
        var c = a.split(".");2 == c.length && (b = b[c[0]], a = c[1]);b[a] = function () {
          b.push([a].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }var d = a;"undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";d.people = d.people || [];d.toString = function (b) {
        var a = "mixpanel";"mixpanel" !== f && (a += "." + f);b || (a += " (stub)");return a;
      };d.people.toString = function () {
        return d.toString(1) + ".people (stub)";
      };k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
      for (h = 0; h < k.length; h++) e(d, k[h]);a._i.push([b, c, f]);
    };a.__SV = 1.2;b = e.createElement("script");b.type = "text/javascript";b.async = !0;b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c = e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b, c);
  }
})(document, window.mixpanel || []);
mixpanel.init("6077b9f24b24eccfecc454882f981304");
//
window.heap = window.heap || [], heap.load = function (e, t) {
  window.heap.appid = e, window.heap.config = t = t || {};var r = t.forceSSL || "https:" === document.location.protocol,
      a = document.createElement("script");a.type = "text/javascript", a.async = !0, a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js";var n = document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a, n);for (var o = function (e) {
    return function () {
      heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
    };
  }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++) heap[p[c]] = o(p[c]);
};
heap.load("3281332641");
//
/**
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */
shortcut = {
	'all_shortcuts': {}, //All the shortcuts are stored in this array
	'add': function (shortcut_combination, callback, opt) {
		//Provide a set of default options
		var default_options = {
			'type': 'keydown',
			'propagate': false,
			'disable_in_input': false,
			'target': document,
			'keycode': false
		};
		if (!opt) opt = default_options;else {
			for (var dfo in default_options) {
				if (typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];
			}
		}

		var ele = opt.target;
		if (typeof opt.target == 'string') ele = document.getElementById(opt.target);
		var ths = this;
		shortcut_combination = shortcut_combination.toLowerCase();

		//The function to be called at keypress
		var func = function (e) {
			e = e || window.event;

			if (opt['disable_in_input']) {
				//Don't enable shortcut keys in Input, Textarea fields
				var element;
				if (e.target) element = e.target;else if (e.srcElement) element = e.srcElement;
				if (element.nodeType == 3) element = element.parentNode;

				if (element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return;
			}

			//Find Which key is pressed
			if (e.keyCode) code = e.keyCode;else if (e.which) code = e.which;
			var character = String.fromCharCode(code).toLowerCase();

			if (code == 188) character = ","; //If the user presses , when the type is onkeydown
			if (code == 190) character = "."; //If the user presses , when the type is onkeydown

			var keys = shortcut_combination.split("+");
			//Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
			var kp = 0;

			//Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
			var shift_nums = {
				"`": "~",
				"1": "!",
				"2": "@",
				"3": "#",
				"4": "$",
				"5": "%",
				"6": "^",
				"7": "&",
				"8": "*",
				"9": "(",
				"0": ")",
				"-": "_",
				"=": "+",
				";": ":",
				"'": "\"",
				",": "<",
				".": ">",
				"/": "?",
				"\\": "|"
			};
			//Special Keys - and their codes
			var special_keys = {
				'esc': 27,
				'escape': 27,
				'tab': 9,
				'space': 32,
				'return': 13,
				'enter': 13,
				'backspace': 8,

				'scrolllock': 145,
				'scroll_lock': 145,
				'scroll': 145,
				'capslock': 20,
				'caps_lock': 20,
				'caps': 20,
				'numlock': 144,
				'num_lock': 144,
				'num': 144,

				'pause': 19,
				'break': 19,

				'insert': 45,
				'home': 36,
				'delete': 46,
				'end': 35,

				'pageup': 33,
				'page_up': 33,
				'pu': 33,

				'pagedown': 34,
				'page_down': 34,
				'pd': 34,

				'left': 37,
				'up': 38,
				'right': 39,
				'down': 40,

				'f1': 112,
				'f2': 113,
				'f3': 114,
				'f4': 115,
				'f5': 116,
				'f6': 117,
				'f7': 118,
				'f8': 119,
				'f9': 120,
				'f10': 121,
				'f11': 122,
				'f12': 123
			};

			var modifiers = {
				shift: { wanted: false, pressed: false },
				ctrl: { wanted: false, pressed: false },
				alt: { wanted: false, pressed: false },
				meta: { wanted: false, pressed: false } //Meta is Mac specific
			};

			if (e.ctrlKey) modifiers.ctrl.pressed = true;
			if (e.shiftKey) modifiers.shift.pressed = true;
			if (e.altKey) modifiers.alt.pressed = true;
			if (e.metaKey) modifiers.meta.pressed = true;

			for (var i = 0; k = keys[i], i < keys.length; i++) {
				//Modifiers
				if (k == 'ctrl' || k == 'control') {
					kp++;
					modifiers.ctrl.wanted = true;
				} else if (k == 'shift') {
					kp++;
					modifiers.shift.wanted = true;
				} else if (k == 'alt') {
					kp++;
					modifiers.alt.wanted = true;
				} else if (k == 'meta') {
					kp++;
					modifiers.meta.wanted = true;
				} else if (k.length > 1) {
					//If it is a special key
					if (special_keys[k] == code) kp++;
				} else if (opt['keycode']) {
					if (opt['keycode'] == code) kp++;
				} else {
					//The special keys did not match
					if (character == k) kp++;else {
						if (shift_nums[character] && e.shiftKey) {
							//Stupid Shift key bug created by using lowercase
							character = shift_nums[character];
							if (character == k) kp++;
						}
					}
				}
			}

			if (kp == keys.length && modifiers.ctrl.pressed == modifiers.ctrl.wanted && modifiers.shift.pressed == modifiers.shift.wanted && modifiers.alt.pressed == modifiers.alt.wanted && modifiers.meta.pressed == modifiers.meta.wanted) {
				callback(e);

				if (!opt['propagate']) {
					//Stop the event
					//e.cancelBubble is supported by IE - this will kill the bubbling process.
					e.cancelBubble = true;
					e.returnValue = false;

					//e.stopPropagation works in Firefox.
					if (e.stopPropagation) {
						e.stopPropagation();
						e.preventDefault();
					}
					return false;
				}
			}
		};
		this.all_shortcuts[shortcut_combination] = {
			'callback': func,
			'target': ele,
			'event': opt['type']
		};
		//Attach the function with the event
		if (ele.addEventListener) ele.addEventListener(opt['type'], func, false);else if (ele.attachEvent) ele.attachEvent('on' + opt['type'], func);else ele['on' + opt['type']] = func;
	},

	//Remove the shortcut - just specify the shortcut and I will remove the binding
	'remove': function (shortcut_combination) {
		shortcut_combination = shortcut_combination.toLowerCase();
		var binding = this.all_shortcuts[shortcut_combination];
		delete this.all_shortcuts[shortcut_combination];
		if (!binding) return;
		var type = binding['event'];
		var ele = binding['target'];
		var callback = binding['callback'];

		if (ele.detachEvent) ele.detachEvent('on' + type, callback);else if (ele.removeEventListener) ele.removeEventListener(type, callback, false);else ele['on' + type] = false;
	}
};
//
//var configStorage;
// in the real world we will store config on the server
// and do some CORS voodoo to fetch it.
window.configStorage = {
  set: function (stuff) {
    e$.each(stuff, function (k, v) {
      if (v !== null) {
        window.localStorage.setItem(k, v);
      } else {
        window.localStorage.removeItem(k);
      }
    });
    e$.extend(document.englishonConfig, stuff);
    return e$.Deferred().resolve();
  },
  get: function (stuff) {
    var r = {};
    e$.each(stuff, function (k, v) {
      r[k] = window.localStorage.getItem(k) || v;
    });
    return e$.Deferred().resolve(r);
  }
};

window.cleanEnglishonCookies = function () {
  if (!document.englishonConfig.isUser) {
    console.log('isUser is set to false. not cleaning cookies');
    return;
  }
  if (document.menu) {
    document.menu.signout();
    e$.when(document.signout_promise).done(function () {
      console.log('cleanEnglishonCookies, after signout_promise resolve');
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('eo-user-name');
      window.localStorage.removeItem('isUser');
      window.localStorage.removeItem('editor');
      window.localStorage.removeItem('isActive');
      window.localStorage.removeItem('got_no_questions_dialog');
      window.localStorage.removeItem('show_quiz_tutorial');
      window.localStorage.removeItem('siteLanguage');
    });
  }
};
//
var MESSAGES = {
  'english': {
    LANGUAGE: 'english',
    DIRECTION: 'ltr',
    MENU_TITLE: 'Sign Up/In',
    POWER_SWICHT_ON: 'On',
    POWER_SWICHT_ON: 'Off',
    LANGUAGES_PICKER_TITLE: 'Pick a language',
    COMING_SOON: 'Comming soon',
    EN: "English (US)",
    ES: "Spanish",
    FR: "French",
    ZH: "Chinese",
    HELP: 'Need Help?',
    CONTACT: 'Contact Us',
    OR: 'OR',
    // Login dialog
    LOGIN_SIGN_IN_TITLE: 'Sign In',
    LOGIN_SIGN_UP_TITLE: 'Sign Up',
    LOGIN_SUBTITLE: 'Improve Language Skills</br>Fun, Easy, Free',
    FORGOT_PASSWORD: 'Forgot password?',

    ERROR_CONNECTING: "There was an error connecting to EnglishON, please contact support@englishon.org",
    REGISTER_MESSAGE: 'Thank you for registering! A confirmation message sent to the given email.',
    ENABLE: "Enable EnglishON",
    DISABLE: "Disable EnglishON",

    WRONG_KEYBOARD_LAYOUT: "Please switch keyboard layout.",
    WRONG_KEYBOARD_LAYOUT_HINT: "Alt + Shift",
    LOGGED_IN_AS: "You logged in",
    LOGOUT: "You've Signed Out",
    LOGIN_AS: "Log in as:",
    LOGIN_BUTTON: "LEARN FOR FREE",
    SIGN_OUT: 'Sign out',

    UPGRADE_MESSAGE: 'Your browswer_name browser is outdated</br>.Please press here to update..',
    SIGN_OUT_FEEDBACK: "You've Signed Out",
    LOGGED_IN_FIDBACK: 'You signed in',
    GET_STARTED: 'Get Started',
    START_PROGRESS_TUTORIAL: 'Progress Bar Tour',
    START_TUTORIAL: 'Guided Tour',
    SITE_LANGUAGE: 'Site Language',
    AGREE_TO_TOS: "By signing up, I agree to the</br> <a id='tos_link'>Terms of Use</a> & <a id-'privacy_link'>Privacy Policy</a>",
    AGREE: "I agree.",
    NO_QUESTIONS: "Please look for articles </br>marked with this icon",
    NO_QUESTIONS_ARTICLE: "Please look at category section </br>for articles marked</br>with this icon",
    NO_QUESTIONS_SHTUREM_ARTICLE: "Please look at home page </br>for articles marked</br>with this icon",
    COMPLETE_QUIZ: 'Well Done!</br>Sign up for Free</br> to save your Work!',
    ALPHABET_VOCABULARY: 'By Alphabetical Order',
    SR_VOCABULARY: 'Prioritized for Review'
  },
  'hebrew': {
    LANGUAGE: 'hebrew',
    DIRECTION: 'rtl',
    MENU_TITLE: 'רישום וכניסה',
    POWER_SWICHT_ON: 'On',
    POWER_SWICHT_ON: 'Off',
    LANGUAGES_PICKER_TITLE: 'בחר שפה',
    COMING_SOON: 'Comming soon',
    EN: "English (US)",
    ES: "Spanish",
    FR: "French",
    ZH: "Chinese",
    HELP: '?צריך עזרה',
    CONTACT: 'צור קשר',
    OR: 'או',
    // Login dialog
    LOGIN_SIGN_IN_TITLE: 'התחבר',
    LOGIN_SIGN_UP_TITLE: 'הירשם',
    LOGIN_SUBTITLE: 'אנגלית בקליק </br>בכייף בקלות וללא עלות',
    FORGOT_PASSWORD: '?שכחת סיסמה',
    REGISTER_MESSAGE: 'Thank you for registering! A confirmation message sent to the given email.',
    ERROR_CONNECTING: "There was an error connecting to EnglishON, please contact support@englishon.org",
    ENABLE: "Enable EnglishON",
    DISABLE: "Disable EnglishON",
    WRONG_KEYBOARD_LAYOUT: "Please switch keyboard layout.",
    WRONG_KEYBOARD_LAYOUT_HINT: "Alt + Shift",
    LOGGED_IN_AS: "You logged in",
    LOGOUT: "You've Signed Out",
    LOGIN_AS: "Log in as:",
    LOGIN_BUTTON: "החל ללמוד בחינם",
    SIGN_OUT: 'התנתק',
    UPGRADE_MESSAGE: 'זמן טוב לשידרוג הדפדפן שלך...',
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
    SIGN_OUT_FEEDBACK: 'התנתקת מאינגלישאון...',
    LOGGED_IN_FIDBACK: 'התחברת לאינגלשיאון',
    GET_STARTED: 'התחל ללמוד שפות',
    START_PROGRESS_TUTORIAL: 'מדריך ללוח ההתקדמות',
    START_TUTORIAL: 'מדריך הפעלה',
    SITE_LANGUAGE: 'שפת התפריט',
    AGREE_TO_TOS: "אני מסכים <a id='tos_link'>לתנאי השימוש</a id='privacy_link'> ול<a>תנאי הפרטיות</a> ",
    AGREE: "אני מסכים.",
    NO_QUESTIONS: "חפש כתבות לצידם </br>יש את הסימון",
    NO_QUESTIONS_ARTICLE: "חפש בדפי המדורים </br>כתבות לצידם </br>יש את הסימון",
    NO_QUESTIONS_SHTUREM_ARTICLE: "חפש בדף הבית </br>כתבות לצידם </br>יש את הסימון",
    COMPLETE_QUIZ: '!כל הכבוד</br>הירשם בחינם</br>לשמירת התקדמותך',
    ALPHABET_VOCABULARY: 'לפי סדר אלפבית',
    SR_VOCABULARY: 'לפי סדר עדיפות לתרגול'
  }
};
// Until we have real RTL, it's important not to finish sentences with periods, because they'll align wrong
document.MESSAGES = MESSAGES;
var RTL = 'rtl',
    LTR = 'ltr';
var WEBSITE_I18N = {
  'www.ch10.co.il': {
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
    SITE_LANGUAGE: 'english'
  },
  'www.bhol.co.il': {
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
    SITE_LANGUAGE: 'hebrew'
  },
  'actualic.co.il': {
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
    SITE_LANGUAGE: 'hebrew'
  },
  'www.bloombergview.com': {
    DIRECTION: LTR,
    DEFAULT_TARGET_LANGUAGE: 'fr',
    SITE_LANGUAGE: 'english'
  },
  'shturem.net': {
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
    SITE_LANGUAGE: 'hebrew'
  },
  'www.shturem.net': {
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
    SITE_LANGUAGE: 'hebrew'
  },
  'www.englishon.org': {
    DIRECTION: LTR,
    DEFAULT_TARGET_LANGUAGE: 'en',
    SITE_LANGUAGE: 'hebrew'
  }
};
var I18N = WEBSITE_I18N[location.hostname];
//
Authenticator = function (base) {
  this.base = base;
};

Authenticator.prototype.getTokenFor = function (userToken) {
  var promise = e$.get(this.base + "/tokens/from-user-token/" + encodeURIComponent(userToken) + "/").then(function (response) {
    return response.token;
  });
  return promise;
};

Authenticator.prototype.getTokenForGuest = function () {
  console.log("getTokenForGuest****! base is: " + this.base);
  var promise = e$.post(this.base + "/tokens/create/").then(function (response) {
    return response.token;
  });
  return promise;
};

function showTOS() {
  var buttons = {};
  buttons[MESSAGES.CLOSE_TOS] = function () {
    e$(this).dialog("close");
  };
  e$.ajax(chrome.extension.getURL('terms_of_service.html')).done(function (tos) {
    e$('<div>')
    // TODO: real RTL
    .attr('dir', 'rtl').html(tos).dialog({
      autoOpen: true,
      modal: true,
      buttons: buttons,
      width: '600',
      height: '600',
      overflow: 'auto'
    });
  });
}

Authenticator.prototype.register = function (user) {
  console.log('register by mail)');
  var res = e$.post(this.base + '/tokens/register/', user, function (res) {
    return res;
  });
  return res;
};

Authenticator.prototype.validate = function (user) {
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  //tips = e$('#eo-login-msg');
  allFields = e$([]).add(user.email).add(user.password);
  errors = e$([]).add(user.email_msg).add(user.password_msg);
  errors.text('').removeClass('ui-state-highlight').parent().addClass('hidden');
  //user.password_msg.text('').removeClass('ui-state-highlight').parent().addClass('hidden');
  allFields.removeClass('eo-state-error');
  //allFields.on('input',function(){})
  function checkLength(o, n, min, max) {
    if (o.val().length > max) {
      o.addClass("eo-state-error");
      updateTips("Max length for " + n + " is: " + max, n);
      return false;
    }
    if (o.val().length < min) {
      o.addClass("eo-state-error");
      updateTips("Min length for " + n + " is: " + min, n);
      return false;
    } else {
      return true;
    }
  }

  function checkRegexp(o, regexp, t) {
    if (!regexp.test(o.val())) {
      o.addClass("eo-state-error");
      updateTips(t, o.attr('id').substring(9));
      return false;
    } else {
      return true;
    }
  }

  function updateTips(t, n) {
    element = e$('#login-' + n + '-msg');
    element.text(t);
    //.addClass("ui-state-highlight");

    element.parent().removeClass('hidden');
    setTimeout(function () {
      element.removeClass("ui-state-highlight", 1500);
    }, 500);
  }

  var valid = true;
  //valid = valid && checkLength( name, "username", 3, 16 );
  valid = valid && checkLength(user.email, "email", 6, 80);
  valid = valid && checkLength(user.password, "password", 5, 16);

  //valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
  valid = valid && checkRegexp(user.email, emailRegex, "eg. user_name@gmail.com");
  //valid = valid && checkRegexp(user.password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9");

  return valid;
};
Authenticator.prototype.login = function (token) {
  if (token !== null) {
    console.log('Authenticator.prototype.login****Token is existing already. Didnt create a new one');
    return e$.Deferred().resolve(token);
  }
  console.log('Authenticator.prototype.login****There is no token. Create a new one for guest');
  return this.getTokenForGuest();
};
//
HerokuBackend = function (base, token) {
  this.base = base;
  this.token = token;
};

HerokuBackend.prototype.ajax = function (method, url, data) {
  var token = this.token;
  var requestData = {
    method: method,
    url: this.base + url,
    data: JSON.stringify(data),
    contentType: 'application/json',
    dataType: 'json',
    beforeSend: function (xhr, settings) {
      xhr.setRequestHeader('Authorization', 'Token ' + token);
      //xhr.setRequestHeader('Authorization', token);
    }
  };
  return e$.ajax(requestData).then(null, function (xhr, type) {
    console.log("Ajax error", xhr, type);
    if (xhr.status === 401) {
      // stale token, should only happen to us
      // remove the token, so on refresh we get a fresh guest account
      // we decided not to get a guest token immediately and retry the request
      // because *this should only happen to us* and we want to know when it does.

      // TODO: report this to user?
      configStorage.set({ token: null });
      return null;
    } else {
      // retry once
      if (xhr.responseText.indexOf('database is locked') != -1) {
        console.log('status: ' + xhr.status + ' backend url: ' + document.englishonBackend.base + ' ,database is locked error.');
      }
      return e$.ajax(requestData);
    }
  });
};

// a way to prevent data loss when a user only remembers to log in
// *after* starting a quiz.
HerokuBackend.prototype.mergeTokens = function (oldToken, newToken) {
  return this.report('MergeTokens', { guest: oldToken, registered: newToken });
};

HerokuBackend.prototype.getMeanings = function (word, lang) {
  return this.ajax("POST", "/quiz/getMeanings/", { 'word': word, 'lang': lang });
};
HerokuBackend.prototype.addPersonalWord = function (word) {
  return this.ajax("POST", "/quiz/addPersonalWord/", { 'word': word });
};

HerokuBackend.prototype.milotrage = function () {
  return this.ajax("POST", "/quiz/score/milotrage/", { 'token': this.token });
};
HerokuBackend.prototype.checkpersistence = function () {
  var post = this.ajax("POST", "/quiz/score/checkpersistence/", { 'token': this.token });
};
HerokuBackend.prototype.allSRQuestions = function () {
  return this.ajax("POST", "/quiz/score/allSRQuestions/", { 'token': this.token });
};

HerokuBackend.prototype.score = function (score_num) {
  var post = this.ajax("POST", "/quiz/score/score/", { 'token': this.token, 'scores_num': score_num });
  post.done(function () {
    console.log('user got scores');
  });
  post.fail(function () {
    console.log('error give scores to user!');
  });
};

HerokuBackend.prototype.checkWeeklyPresence = function () {
  return this.ajax("POST", "/quiz/score/checkWeeklyPresence/", { 'token': this.token });
};

HerokuBackend.prototype.getSRStatus = function (address) {
  return this.ajax("POST", "/quiz/getSRStatus/", { 'token': this.token });
};

HerokuBackend.prototype.getLevel = function (address) {
  return this.ajax("POST", "/quiz/score/getLevel/", { 'token': this.token });
};

HerokuBackend.prototype.acceptedTerms = function (address) {
  return this.ajax("POST", "/quiz/acceptedTerms/", { 'token': this.token });
};
HerokuBackend.prototype.rejectedTerms = function (address) {
  return this.ajax("POST", "/quiz/rejectedTerms/", { 'token': this.token });
};

HerokuBackend.prototype.getArticle = function (address, limit = 5) {
  this.url = encodeURIComponent(address) + '/'.toLowerCase();
  console.log('backend console *****token: ' + this.token);
  return this.ajax("GET", "/quiz/page/" + limit + "/" + this.url).then(function (data) {
    this.pageid = data.id;
    return data.questions;
  }.bind(this), function (data) {
    if (data.responseJSON && data.responseJSON.detail === 'Terms not accepted') {
      return e$.Deferred().reject('terms_not_accepted').promise();
    }
  });
};
HerokuBackend.prototype.getArticleForEditor = function (address) {
  this.url = encodeURIComponent(address) + '/'.toLowerCase();
  console.log('backend console *****token: ' + this.token);
  return this.ajax("GET", "/quiz/editor/page/" + this.url).then(function (data) {
    this.pageid = data.id;
    return data.questions;
  }.bind(this), function (data) {
    if (data.responseJSON && data.responseJSON.detail === 'Terms not accepted') {
      return e$.Deferred().reject('terms_not_accepted').promise();
    }
  });
};

HerokuBackend.prototype.getSupportedLinks = function (urls) {
  // makeArray is essential, otherwise we get a jquery object with kilobytes of weird stuff
  return this.ajax("POST", "/quiz/supported_urls/", { urls: e$.makeArray(urls) }).then(function (data) {
    return data.supported_urls;
  });
};

HerokuBackend.prototype.deleteQuestion = function (question) {
  return this.ajax('POST', '/quiz/editor/deletequestion/' + this.url, question);
};

HerokuBackend.prototype.createQuestion = function (question) {
  question.page = this.pageid;
  question.correct_answers = question.correct_answers.map(function (a) {
    return { answer: a };
  });
  question.wrong_answers = question.wrong_answers.map(function (a) {
    return { answer: a.word, translation: a.translation };
  });
  return this.ajax('POST', '/quiz/editor/question/' + this.url, question);
};

HerokuBackend.prototype.resetUser = function () {
  return this.ajax('POST', '/quiz/editor/user/clean/');
};

HerokuBackend.prototype.report = function (msg, data) {
  // add "constant" parameters
  // should probably include some means of identifying the user.
  data.timestamp = new Date().toJSON();
  data.page = this.pageid;
  var r = this.ajax('POST', '/quiz/report/' + msg + '/', data);
  return r;
};

HerokuBackend.prototype.fetchDictionary = function () {
  return this.ajax('GET', '/quiz/editor/dictionary/');
};

HerokuBackend.prototype.dictionary = function (new_word) {

  post = this.ajax('POST', '/quiz/editor/dictionary/add/', new_word);
  post.done(function (res) {
    console.log("Dictionary changed! (A word or new meanings added or removed)");
    if (!res.message.startsWith('Done')) {
      alert(res.message);
    }
  });
};
HerokuBackend.prototype.create_all_questions = function (address, question) {
  console.log("backend///create_all_questions before ajax action ");
  url = encodeURIComponent(address) + '/';

  var post = this.ajax('POST', '/quiz/editor/question/' + this.url, question);
  post.done(function (data) {
    console.log("Created question");
  });
  post.fail(function () {
    alert('Error creating question');
  });
};

HerokuBackend.prototype.is_new_session = function () {
  return this.ajax('GET', '/quiz/IsNewSession/').then(function (data) {
    return data.last;
  });
};
//
Editor = function (overlay) {
  this.paragraphs = e$([overlay.subtitle, overlay.bodytext]);
  this.overlay = overlay;
  var lines = document.eo_dictionary.split("\n");
  var internal_dic = {};
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim().split(/\s+/);
    if (line != "") {
      internal_dic[line[0]] = [];
      for (var j = 1; j < line.length; j++) {
        internal_dic[line[0]].push(line[j]);
      }
    }
  }
  this.eo_dictionary = internal_dic;
  this.ps = [];
};
Editor.prototype.editMeanings = function (span) {
  var replaced = span.data('preposition') + span.data('word');
  var hint = span.data('word');
  var correct = span.find(".correct_answer").val();
  var delimiter = ' ';
  span.find('option').slice(2).each(function () {
    e$(this).prepend(delimiter);
  });
  var old_meanings = span.find('option').slice(2).text();
  console.log('meaning: ' + span.find('option').text());
  edit_meanings_dlg = e$('<div id="dictionary_edit_dlg">').addClass('editor-dlg').append(e$('<div id="edit-meanings-dlg-content">').append(e$('<div>').addClass('editor-div').text('Edit meanings for the word: ' + hint)).append(e$('<input type="text" id="meanings">').val(old_meanings)).append(e$('<button>').text('Save').on('click', function () {
    console.log('EDIT MEANINGS NOW.');
    var data = { 'word': hint + ' ' + edit_meanings_dlg.find('#meanings').val(), 'action': 'edit' };
    document.englishonBackend.dictionary(data);
    edit_meanings_dlg.dialog('close');
    edit_meanings_dlg.dialog('destroy');
    //TODO: check why the destroy is not doing the job
  })).append(e$('<div>').addClass('editor-div').append(e$('<button>').text('Delete this word from dictionary').on('click', function () {
    console.log('DELETE WORD NOW.');
    var deleted_word = { 'word': hint + ' ', 'action': 'delete' };
    document.englishonBackend.dictionary(deleted_word);
    edit_meanings_dlg.dialog('close');
    edit_meanings_dlg.dialog('destroy');
    //TODO: check why the destroy is not doing the job
  }))));
  edit_meanings_dlg.dialog({ modal: true });
};
Editor.prototype.createAutoQuestion = function (event) {
  if (e$(event).is('.highlight')) {
    //triggered by the keybourd shortcut
    var span = e$(event).parents('.eo-editor-candidate');
    var correct = e$(event).text();
  } else {
    //triggered by click event
    event.preventDefault();
    event.stopPropagation();
    var span = e$(event.target).parents('.eo-editor-candidate');
    var correct = e$(event.target).text();
  }
  span.find('.editor_ul').addClass('hide');
  console.log('createAutoQuestion***** span is: ' + span);
  var replaced = span.data('preposition') + span.data('word');
  var hint = span.data('word');
  span.find('.correct_answer').text(correct);
  if (correct == "Edit meanings") {
    this.editMeanings(span);
    return;
  }
  var ctx = this.autoContext(span);
  if (!ctx) {
    alert("No suitable context found");
    span.removeClass('auto-editor-candidate').addClass('eo-editor-irrelevant').off('click');
    return;
  }
  span.data('context', ctx);
  //Creating a list of 4 Distractions randomaly, using the word buffer of the internal id
  var wrong = [];
  var wrong_words = [];
  internal_id_keys = Object.keys(this.eo_dictionary);
  if (internal_id_keys.length < 4) {
    alert('dictionary is containing les than 4 words. cannot create questions. ');
    return;
  }
  while (wrong.length < 3) {
    translation = internal_id_keys[Math.floor(Math.random() * internal_id_keys.length + 0)];
    arrayOfCandidate = this.eo_dictionary[translation];
    candidate = arrayOfCandidate[Math.floor(Math.random() * arrayOfCandidate.length + 0)];
    if (wrong_words.indexOf(candidate) == -1 && candidate != correct && translation != hint) {
      wrong.push({ word: candidate, translation: translation });
      wrong_words.push(candidate);
    }
  }
  preposition = span.data('preposition');
  var question = {
    'context': ctx,
    'replaced': replaced,
    'hint': hint,
    'correct_answers': [correct],
    'wrong_answers': wrong,
    'hint_language': 'he',
    'answer_language': 'en',
    'preposition': preposition
  };
  console.log("Finished create the object in createAutoquestion");
  this.span = span;
  document.englishonBackend.createQuestion(question).then(function (res) {
    this.span.removeClass('eo-editor-candidate').addClass('eo-editor-question').off('click', 'onClick');
    // .on('click', this.question_onClick.bind(this));
    span.on('click', this.question_onClick.bind(this)).children().click(function (e) {
      e.stopPropagation();
    });
  }.bind(this), function (reason) {
    alert('Error creating question');
    console.log('Error creating question. reason is: ' + reason);
    this.span.removeClass('eo-editor-candidate').addClass('eo-editor-irrelevant').off('click', 'onClick');
  }.bind(this));
};
Editor.prototype.question_onClick = function (event) {
  var test = this;
  event.preventDefault();
  var span = e$(event.target);
  //var ctx = this.autoContext(span); // TODO: bug: context is breakdown-dependent, and here we pretend it isn't.
  var word = span.data('word');
  var context = span.data('context');
  var question = {
    'word': word,
    'ctx': context
  };
  this.span = span;
  var q_dialog = e$('<div align="left" dir="ltr" class="editor-dlg">');
  q_dialog.append(e$('<h3>').html('You are deleting question for this word: </br>' + word));
  q_dialog.append(e$('<h3>').html('With this context:  </br>' + context));
  q_dialog.append(e$('<button>').text("Delete Question").click(function (event) {
    q_dialog.dialog('close');
    document.englishonBackend.deleteQuestion(question).then(function (res) {
      console.log('Question deleted');
      this.span.removeClass('eo-editor-question').addClass('eo-editor-candidate').off('click').on('click', this.onClick.bind(this));
    }.bind(this), function (reason) {
      console.log('Error delete question. Reason is: ' + reason);
    });
  }.bind(this)));
  q_dialog.dialog();
};
Editor.prototype.onClick = function (event) {
  event.preventDefault();
  var span = e$(event.target);
  var ctx = this.autoContext(span); // TODO: bug: context is breakdown-dependent, and here we pretend it isn't.
  var word = span.data('word');
  if (!ctx) {
    alert("No suitable context found");
    span.removeClass('eo-editor-candidate').addClass('eo-editor-irrelevant').off('click');
    return;
  }
  span.data('context', ctx);
  var dia = e$('<div>').addClass('editor-dlg');
  var acc = e$('<div>');
  acc.append(e$('<h3>').text("Hebrew -> English"));
  acc.append(e$('<h3>').text("Add to dictionary: " + word));
  acc.append(e$('<div class="editor-div">').append(e$('<span>').text("edit choosen word")).append(e$('<input type="text" id="new-word">').val(word)));
  acc.append(e$('<div class="editor-div">').append(e$('<span>').text("optional meanings")).append(e$('<input type="text" id="new-meanings">')));
  acc.append(e$('<button>').text("Add").click(function (event) {
    event.preventDefault();
    var data = { 'word': dia.find('#new-word').val() + ' ' + dia.find('#new-meanings').val(), 'action': 'add' };
    document.englishonBackend.dictionary(data);
    dia.dialog('close');
    dia.dialog('destroy');
    span.addClass('eo-editor-candidate');
  }));
  acc.append(e$('<h3>').text("Remove from dictionary"));
  acc.append(e$('<div class="editor-div">').append(e$('<span>').text("Remove choosen word")).append(e$('<input type="text" id="word_to_delete">')));
  acc.append(e$('<button>').text("Remove").click(function (event) {
    event.preventDefault();
    var data = { 'word': dia.find('#word_to_delete').val() + ' ', 'action': 'delete' };
    document.englishonBackend.dictionary(data);
    dia.dialog('close');
    dia.dialog('destroy');
  }));
  acc.append(e$('<div>').addClass('editor-div').append(e$('<button>').text('Close').click(function (event) {
    event.preventDefault();
    dia.dialog('close');
    dia.dialog('destroy');
  })));
  dia.append(acc);
  dia.dialog({ autoOpen: true, height: 'auto', width: 'auto', modal: 'true' });
  e$(".wrd").text(word);
};
Editor.prototype.generateUI = function () {
  return e$('<div>').append(e$('<div>').addClass('language_specific')).append(e$('<div>').append(e$('<label>').text("Word:")).append(e$('<span>', { class: 'wrd' })))
  //.append(e$('<input>', {type: 'text', id: 'wrd'})))
  .append(e$('<div>').append(e$('<label>').text("Additional correct answers:")).append(e$('<input>', { type: 'text', name: 'additional' }))).append(e$('<div>').append(e$('<label>').text("Wrong answers:")).append(e$('<input>', { type: 'text', name: 'wrong' })));
};
Editor.prototype.h2eui = function (span) {
  var div = this.generateUI();
  var languageSpecific = div.find('.language_specific');
  div.data('extractor', function () {
    //guy
    // var replaced = div.find(':radio:checked').data('heb');
    // var correct = div.find(':checkbox:checked').toArray().map(
    //   function(cb) { return e$(cb).data('eng'); });
    var replaced = div.find('.wrd').text();
    var additional = parseCommaSeparated(div.find('input[name="additional"]').val());
    //correct = correct.concat(additional);
    correct = additional;
    var wrong = parseCommaSeparated(div.find('input[name="wrong"]').val());
    var wrong_answers = wrong.map(function (wrong) {
      return { word: wrong };
    });
    if (!replaced) {
      alert("Choose correct breakdown");
      return;
    }
    if (correct.length === 0) {
      alert("No correct answers chosen");
      return;
    }
    var question = {
      'replaced': replaced,
      'hint': replaced,
      'correct_answers': correct,
      'wrong_answers': wrong_answers,
      'hint_language': 'he',
      'answer_language': 'en'
    };
    return question;
  });
  return div;
};

function parseCommaSeparated(commaSeparated) {
  return commaSeparated.split(',').map(function (word) {
    return word.trim();
  }).filter(function (word) {
    return word !== '';
  });
}
Editor.prototype.e2hui = function (span) {
  var dict = this.lookup(span.data('word'));
  var h1 = Object.keys(dict).length === 1;
  var h1e1 = h1 && dict[Object.keys(dict)[0]].length === 1;
  var div = this.generateUI();
  var languageSpecific = div.find('.language_specific');
  e$.each(dict, function (orig, engs) {
    e$.each(engs, function (ix, eng) {
      languageSpecific.append(e$('<input type="radio" name="eo-editor-eng">').prop('checked', h1e1).data('orig', orig).data('eng', eng)).append(e$('<label>').text(eng));
      e$.each(document.dictionary.get(eng), function (jx, heb) {
        languageSpecific.append(e$('<input type="checkbox">').data('heb', heb)).append(e$('<label>').text(heb));
      });
    });
  });
  div.data('extractor', function () {
    var replaced = div.find(':radio:checked').data('orig');
    var hint = div.find(':radio:checked').data('eng');
    var correct = div.find(':checkbox:checked').toArray().map(function (cb) {
      return e$(cb).data('heb');
    });
    var additional = parseCommaSeparated(div.find('input[name="additional"]').val());
    correct = correct.concat(additional);
    var wrong = parseCommaSeparated(div.find('input[name="wrong"]').val());
    var wrong_answers = wrong.map(function (wrong) {
      return { word: wrong };
    });
    if (!replaced || !hint) {
      alert("Choose correct breakdown");
      return;
    }
    if (correct.indexOf(replaced) === -1) correct.push(replaced);
    var question = {
      'replaced': replaced,
      'hint': hint,
      'correct_answers': correct,
      'wrong_answers': wrong_answers,
      'answer_language': 'he'
    };
    return question;
  });
  return div;
};
Editor.prototype.autoContext = function (span) {
  var text = span.data('text');
  var word = span.data('word');
  var start = span.data('start');
  var end = span.data('end');
  //console.log("start value: "+start+" and end value: "+ end);
  var len = 5;
  while (true) {
    var ctx = text.slice(Math.max(0, start - len), Math.min(text.length, end + len));
    // is this the largest candidate context?
    if (ctx === span.data('text')) {
      console.log('This is the largest possible context...');
      break;
    };
    // is the context ambiguous?
    if (ctx.indexOf(word) !== ctx.lastIndexOf(word)) {
      console.log("The context is ambiguous. context is: " + ctx);
      break;
    }
    if (this.ps.filter(function (p) {
      return p.indexOf(ctx) !== -1;
    }).length === 1) {
      return ctx; //success!
    } else {
      // context isn't unique.
      // try again with a longer context.
      console.log("try again with a longer context.context: " + ctx);
      len += 5;
      continue;
    }
  }
};
Editor.prototype.fetchQuestions = function () {
  console.log("url: " + this.overlay.url);
  return document.englishonBackend.getArticleForEditor(this.overlay.url).then(function (questions) {
    this.questions = questions;
    console.log('got all questions for this url for editor. question number: ' + questions.length);
    console.log("fetchQuestions*** I brought questions for editor");
  }.bind(this));
};
Editor.prototype.highlight = function () {
  document._editor.counter = 0;
  shortcut.add("Tab", function () {
    e$('.eo-editor-candidate').find('.editor_ul').addClass('hide');
    e$('.eo-editor-candidate').eq(document._editor.counter).click();
    e$('.eo-editor-candidate').eq(document._editor.counter).find('.editor_ul').find('li').eq(0).addClass('highlight');
    document._editor.counter = document._editor.counter == e$('.eo-editor-candidate').length - 1 ? 0 : document._editor.counter + 1;
  });
  shortcut.add("Up", function () {
    var index = e$('.eo-editor-candidate').eq(document._editor.counter - 1).find('.editor_ul').find('.highlight').index();
    e$('.eo-editor-candidate').eq(document._editor.counter - 1).find('.editor_ul').find('li').eq(index).removeClass('highlight');
    e$('.eo-editor-candidate').eq(document._editor.counter - 1).find('.editor_ul').find('li').eq(index - 1).addClass('highlight');
  });
  shortcut.add("DOWN", function () {
    var index = e$('.eo-editor-candidate').eq(document._editor.counter - 1).find('.editor_ul').find('.highlight').index();
    e$('.eo-editor-candidate').eq(document._editor.counter - 1).find('.editor_ul').find('li').eq(index).removeClass('highlight');
    e$('.eo-editor-candidate').eq(document._editor.counter - 1).find('.editor_ul').find('li').eq(index + 1).addClass('highlight');
  });
  shortcut.add("ENTER", function () {
    elem = e$('.eo-editor-candidate').eq(document._editor.counter - 1).find('.editor_ul').find('.highlight');
    document._editor.createAutoQuestion(elem);
  });
  var questions = this.questions;
  var prefix = ["ל", "ב", "ה", "ש", "מ", "כ", "ו"];
  var question_dict = {};
  for (var i = 0; i < questions.length; i++) {
    if (!(questions[i].replaced in question_dict)) {
      question_dict[questions[i].replaced] = [questions[i].context];
    } else {
      question_dict[questions[i].replaced].push(questions[i].context);
    }
  }
  //e$('.artText a')
  //e$('.artSubtitle a').text('HERE IS A LINK!!!!!!')
  //TODO: do the same with the content appearing after the last dote in the subtitle, because in main page it should be a link
  this.ps = [];
  this.paragraphs.each(function (i, p) {
    if (!p || !(p.length == undefined) && !p.length) {
      console.log('paragraph number ' + i + ' is not exist in this article');
      return;
    }
    p = e$(p);
    p.find('a').text('HERE IS A LINK!!!!!!');
    p.find('.featured_main_img_single').text('AREA FOR PICTURE!');
    var text = p.text();
    this.ps.push(text);
    p.empty();
    var re = /[א-ת][א-ת'-]*"?[א-ת](?![א-ת])/g;
    var match = [];
    var lastIndex = 0;
    while ((match = re.exec(text)) !== null) {
      var wordAndCotextMatch = false;
      var wordMatch = false;
      if (match[0] in question_dict) {
        //current word is exist in question_dict
        var currentWord = match[0];
        wordMatch = true;
      } else if (match[0].slice(1) in question_dict && prefix.indexOf(match[0].slice(0, 1)) != -1) {
        //the current word without prefix is exist in question_dict
        var currentWord = match[0].slice(1);
        wordMatch = true;
      }
      if (wordMatch) {
        //run over all ready questions context and check it there is a match to current context
        for (var i = 0; i < question_dict[currentWord].length; i++) {
          var context = question_dict[currentWord][i];
          var start_index = match.index - context.slice(0, context.indexOf(match[0])).length;
          var end_index = re.lastIndex + context.slice(context.indexOf(match[0]) + match[0].length, context.length).length;
          if (text.slice(start_index, end_index) == context) {
            //current word AND current context is match to one of the ready questions
            wordAndCotextMatch = true;
            console.log('found a ready question! word: ' + currentWord + ' context: ' + context);
            p.get(0).appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
            p.append(e$('<span>').addClass('eo-editor-question').text(match[0]).data('text', text).data('start', match.index).data('end', re.lastIndex).data('word', currentWord).data('context', context)
            //.off('click',Editor.prototype.onClick())
            .on('click', this.question_onClick.bind(this)));
          }
        }
      }
      if (!wordAndCotextMatch) {
        wordMatch = false;
        if (match[0] in this.eo_dictionary) {
          //the current word is exist in internal dictionary
          currentWord = match[0];
          wordMatch = true;
          var matchIndex = match.index;
          var preposition = '';
        } else if (match[0].slice(1) in this.eo_dictionary && prefix.indexOf(match[0].slice(0, 1)) != -1) {
          //the current word without prefix is exist in internal dictionary
          currentWord = match[0].slice(1);
          wordMatch = true;
          var matchIndex = match.index + 1;
          var preposition = match[0].slice(0, 1);
        }
        if (wordMatch) {
          //console.log("I found a candidate: " + match[0] + ' currentWord: ' + currentWord);
          //console.log('slice: ' + text.slice(lastIndex, match.index));
          p.get(0).appendChild(document.createTextNode(text.slice(lastIndex, matchIndex)));
          var select = e$('<div>').addClass('correct_answer');
          //.on('click',this.createQuestion.bind(this))
          //.on('change',this.createQuestion.bind(span))
          var span = e$('<div>').addClass('eo-editor-candidate').text(currentWord).data('text', text).data('start', match.index).data('end', re.lastIndex).data('word', currentWord).data('preposition', preposition).append(select).on('click', function () {
            e$(this).find('ul').toggleClass('hide');
          });
          span.append(e$('<ul>').addClass('editor_ul hide').append(e$('<li>').text('Edit meanings').on('click', this.createAutoQuestion.bind(this))));
          for (var i = 0; i < this.eo_dictionary[currentWord].length; i++) {
            span.find('ul').append(e$('<li>').text(this.eo_dictionary[currentWord][i]).on('click', this.createAutoQuestion.bind(this)));
          }
          p.append(span);
        } else //the current word is unrecognized word
          {
            p.get(0).appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
            p.append(e$('<span>').addClass('eo-editor-dictionary-candidate').text(match[0]).data('text', text).data('start', match.index).data('end', re.lastIndex).data('word', match[0]).on('click', this.onClick.bind(this)));
          }
      }
      lastIndex = re.lastIndex;
    }
    p.get(0).appendChild(document.createTextNode(text.slice(lastIndex)));
  }.bind(this));
};
//
UserInfo = function () {
  this.scoreValue = { 'correct': 200, 'persistence': 300 };
  this.displaySRStatus = function () {
    var generall_sr = this.unAnswered.length + this.answered.length;
    console.log('you answered ' + this.answered.sr_questions.length + ' from: ' + generall_sr);
  };
  this.scoreCorrect = function () {
    scores_num = this.scoreValue['correct'];
    document.englishonBackend.score(scores_num);
  };
  this.checkpersistence = function () {
    console.log('checkpersistence');
    document.englishonBackend.checkpersistence();
  };
  this.getLevel = function () {
    document.englishonBackend.getLevel().then(function (data) {
      $('#level').text(data.level.toFixed(2));
    });
  };
  this.checkSRProgress = function () {
    document.englishonBackend.getSRStatus().then(function (data) {
      this.answered = data.answered;
      this.unAnswered = data.unAnswered;
      $('#srProgress').removeClass('sr-complete');
      val = this.answered.length / (this.answered.length + this.unAnswered.length);
      //positive feedback if user doesn't get sr questions for today
      if (!(this.answered.length + this.unAnswered.length)) {
        val = 1;
      }
      if (!val) {
        val = 0;
      };
      if (val == 1) {
        //adding success styles to progress bar 
        e$('#srProgress').addClass('sr-complete');
      }
      this.sr_progress.animate(val);
    }.bind(this));
  };
  this.detectLanguage = function (str) {
    var lang = str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 122 ? 'eng' : 'heb';
    return lang;
  };

  this.listenToInput = function (e) {
    var key = e.keyCode;
    var element = e$('#personal-word');
    element.removeClass('heb eng');
    if (element.val()[0]) element.addClass(this.detectLanguage(element.val()[0]));

    if (key === 13 || key === 10) {
      var word = e$(e.target).val().trim();
      if (word == '') {
        alert('Type your word:)');
        return;
      }
      if (word.indexOf(' ') != -1) {
        alert('type one word only');
        return;
      }
      if (word.match(/[^א-תa-zA-Z]+/g)) {
        alert('type letters only, in hebrew or in english');
        return;
      }
      arr = e$.map(element.val().split(''), function (str) {
        return this.detectLanguage(str);
      }.bind(this));
      var unique = arr.filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
      });
      if (unique.length > 1) {
        alert('you typed in two language');
        return;
      }

      if (e$('#personal-word-btn').find('option').length > 1) {
        return;
      }

      this.createMeaningsList(word);
    } else {
      $('#personal-word-btn').find('option').slice(1).remove();
    }
  };
  this.createMeaningsList = function (word) {
    var select = $('#personal-word-btn');
    var lang = this.detectLanguage(word);
    document.englishonBackend.getMeanings(word, lang).then(function (data) {
      meanings = data.meanings;
      $('#vocabulary-content-list').html('');
      $(meanings).each(function (i, meaning) {
        select.append($('<option>').text(meaning));
      });
    }.bind(this));
  };

  this.addPersonalWord = function () {
    var input = $('#personal-word').val();
    var select = $('#personal-word-btn').val();
    var origin = this.detectLanguage(select) == 'eng' ? select : input;
    var translation = this.detectLanguage(input) == 'heb' ? input : select;
    var word = { 'origin': origin, 'translation': translation };
    if (word.origin == '') {
      return;
    }
    document.englishonBackend.addPersonalWord(word).then(function (res) {
      alert(res.message);
    }, function (error) {
      alert('sorry, not today');
    });
  };
  this.showLiveActions = function () {
    this.checkWeeklyPresence();
    this.checkSRProgress();
    this.milotrage();
    e$('#eo-banner').hide();
    e$('#eo-live').removeClass('hidden vocabulary-open');
    clearInterval(document.vocabulary_interval);
    document.overlay.settings.placeLiveActions();
    //SHOW USER LEVEL JUST FOR TEAM
    if (e$('#developement-only-version').length) {
      if (!e$('#level').length) {
        e$('#sr-cell').after(e$('<div>').addClass('Grid-cell').append(e$('<div id="level">').addClass('live-part v-align h-align')));
      }
      this.getLevel();
    }
    $('#eo-live').removeClass('hidden vocabulary-open');
    clearInterval(document.vocabulary_interval);
    if (document.englishonConfig.media == 'desktop') {
      e$('#eo-live').addClass('eo-live-maximize');
      e$(document).on('click', this.minimize);
      this.setTimeOut = setTimeout(this.minimize, 10000);
      e$('#eo-live').on('click', function (e) {
        clearTimeout(this.setTimeOut);
      }.bind(this));
    }
  };
  this.fetchVocabulary = function () {
    document.englishonBackend.allSRQuestions().then(function (res) {
      this.srsByAlphabet = res.allSRQuestions;
      this.srsByTime = res.allSRQuestions.concat();
      this.srsByTime.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.next_time) - new Date(b.next_time);
      });
      e$('#vocabulary').data('order', 'alphabet');
      this.renderVocabulary(this.srsByAlphabet);
      e$('#eo-live #vocabulary-order').text(document.MESSAGES[document.englishonConfig.siteLanguage].ALPHABET_VOCABULARY);
    }.bind(this));
  };
  this.renderVocabulary = function (words_list) {
    var content = e$('<div>');
    e$.each(words_list, function (i, word_info) {
      content.append(e$('<div>').addClass('vocabulary-word')
      //the text value is a hack to display the milotrage digits without the decimal point
      .append(e$('<span>').addClass('vocabulary-odometer').text(100 + 10 * word_info.mastery)).append(e$('<span>').addClass('vocabulary-origin').data('full', word_info.word).html(word_info.word.replaceAll('_', '&nbsp;'))).append(e$('<span>').addClass('vocabulary-translation').text('?').data('translation', word_info.translation)));
    });
    e$('#vocabulary-content-list').html(content);
    var el = document.getElementsByClassName('vocabulary-odometer');
    for (var i = 0; i < el.length; i++) {
      new Odometer({
        el: el[i],
        value: el[i].innerText,
        format: 'd'
      });
    }
  };
  this.minimize = function (e) {
    if (e) {
      e.preventDefault();
      e.target = e$(e.target);
      if (e.target.is('.eo-question') || e.target.parents('.eo-question').length) {
        return;
      }
    }
    e$('#eo-live').removeClass('eo-live-maximize vocabulary-open');
    clearInterval(document.vocabulary_interval);
    e$('#vocabulary').addClass('hidden');
    e$('#eo-live-main').removeClass('hidden');
    e$('#eo-live').animate({ scrollTop: 0 });
    e$(document).off('click', this.minimize);
  };
  this.initial = function () {
    personal_wordcash = {};
    e$("#personal-word").autocomplete({
      source: function (request, response) {
        var term = request.term;
        if (term in personal_wordcash) {
          response(personal_wordcash[term]);
          return;
        }
        var lang = document.eo_user.detectLanguage(e$('#personal-word').val()[0]);
        e$.ajax({
          dataType: "json",
          type: 'POST',
          url: document.englishonConfig.backendUrl + '/quiz/provideAutoCompleteList/',
          data: { term: request.term, lang: lang },
          success: function (data) {
            var dir = lang == 'eng' ? 'ltr' : 'rtl';
            e$('.ui-autocomplete').css({ 'direction': dir });
            personal_wordcash[term] = data;
            response(data);
          },
          error: function (data) {
            console.log('error getting words list. ' + data);
          }
        });
      }
    });
    this.unAnswered = { 'sr_questions': [] };
    this.answered = { 'sr_questions': [] };
    if (!this.sr_progress) {
      this.sr_progress = new ProgressBar.Circle(srProgress, {
        //prevent css style tag to overide custom settings
        color: 'invalidProperty',
        //font-size: 'invalidProperty',
        //color: '#2cc6a8',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 18,
        trailWidth: 18,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#2cc6a8', width: 18 },
        to: { color: '#2cc6a8', width: 18 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
          text = document.eo_user.unAnswered.length + document.eo_user.answered.length;
          if (!text || text == document.eo_user.answered.length) {
            text = '&#10004;';
          };
          //var value = Math.round(circle.value() * 100);
          circle.setText(text);
        }
      });
    }
    e$('#srProgress').removeClass('sr-complete');
    var el = document.querySelector('#eo-odometer');
    this.odometer = new Odometer({
      el: el,
      value: 0,
      format: 'd'
    });
    e$('#eo-live').off('click');

    //keypress is not a good choice, because it is not recognizing backspace
    e$('#personal-word').on('keyup', this.listenToInput.bind(this));

    e$('#personal-word-btn').on('change', this.addPersonalWord.bind(this));
    e$('#personal-word').val('');
    e$('#personal-word-btn').find('option').slice(1).remove();

    e$('#eo-live').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      e.target = e$(e.target);
      if (e.target.is('#vocabulary-title') || e.target.parents('#vocabulary-title').length) {
        if (e$('#vocabulary').data('order') == 'alphabet') {
          e$('#vocabulary').data('order', 'srTime');
          this.renderVocabulary(this.srsByTime);
          //e$('#eo-live #vocabulary-order').text('לפי סדר עדיפות לתרגול');
          e$('#eo-live #vocabulary-order').text(document.MESSAGES[document.englishonConfig.siteLanguage].SR_VOCABULARY);
        } else {
          e$('#vocabulary').data('order', 'alphabet');
          this.renderVocabulary(this.srsByAlphabet);
          //e$('#eo-live #vocabulary-order').text('לפי סדר אלפבית');
          e$('#eo-live #vocabulary-order').text(document.MESSAGES[document.englishonConfig.siteLanguage].ALPHABET_VOCABULARY);
        }
        return;
      }
      var wordRepetition = function (element, origin_word) {
        Speaker.speak(document.englishonConfig.targetLanguage, origin_word.data('full').replaceAll('_', ' '));
        element.toggleText('?', element.data('translation'));
        if (element.text() != '?') {
          element.addClass('show').removeClass('vocabulary-translation-big');
        } else {
          element.removeClass('show');
          e$('.vocabulary-translation:not(.show)').addClass('vocabulary-translation-big');
          origin_word.html(origin_word.data('full').replaceAll('_', '&nbsp;'));
        }
        //if there is no enough place - show first letter only, + '...'
        //the fap test is needed when the translation is long
        var gap = origin_word.offset().left - e$('#eo-live').offset().left;
        if (element.text() != '?' && (element.offset().left + element.width() + 5 > e$('#eo-live').offset().left + e$('#eo-live').width() || gap < 60)) {
          origin_word.html(origin_word.data('full').slice(0, 1) + '...');
        }
      };
      if (e.target.is('.vocabulary-word')) {
        wordRepetition(e.target.find('.vocabulary-translation'), e.target.find('.vocabulary-origin'));
        return;
      }
      if (e.target.parents('.vocabulary-word').length) {
        wordRepetition(e.target.parents('.vocabulary-word').find('.vocabulary-translation'), e.target.parents('.vocabulary-word').find('.vocabulary-origin'));
        return;
      }
      if (e.target.is('#personal-word')) {
        return;
      }
      if (e.target.is('#personal-word-btn')) {
        return;
      }

      if (e.target.is('.eo-close')) {
        if (e$('#eo-live').hasClass('eo-live-maximize')) {
          e$('#vocabulary').addClass('hidden');
          e$('#eo-live-main').removeClass('hidden');
          e$('#eo-live').removeClass('eo-live-maximize vocabulary-open');
          clearInterval(document.vocabulary_interval);
          return;
        }
        e$('#eo-banner').show();
        e$('#eo-live').addClass('hidden');
        e$('#vocabulary').addClass('hidden');
        e$('#eo-live-main').removeClass('hidden');
        e$('#eo-live').removeClass('eo-live-maximize vocabulary-open');
        clearInterval(document.vocabulary_interval);
        return;
      }
      if ((e.target.parents('#sr').length || e.target.is('#sr') || e.target.parents('#milotrage').length || e.target.parents('#persistence').length || e.target.is('#vocabulary') || e.target.parents('#vocabulary').length) && e$('#eo-live').hasClass('eo-live-maximize')) {
        e$('#eo-live-main').toggleClass('hidden');
        e$('#vocabulary').toggleClass('hidden');
        if (!e$('#vocabulary').hasClass('hidden')) {
          e$('#eo-live').addClass('vocabulary-open');
          e$('#vocabulary-content-list').html('');
          this.fetchVocabulary();
          document.vocabulary_interval = setInterval(function () {
            e$('.vocabulary-translation:not(.show)').toggleClass('vocabulary-translation-big');
          }, 2000);
        } else {
          e$('#eo-live').removeClass('vocabulary-open');
          clearInterval(document.vocabulary_interval);
        };
        return;
      }
      e$('#eo-live').toggleClass('eo-live-maximize');
      if (!e$('#eo-live').hasClass('eo-live-maximize')) {
        e$('#eo-live-main').removeClass('hidden');
        e$('#vocabulary').addClass('hidden');
        e$('#eo-live').removeClass('vocabulary-open');
        clearInterval(document.vocabulary_interval);
        return;
      } else if (document.englishonConfig.media == 'mobile') {
        e$('.contento_Container').hide(); //hide the other banner area in actualic
      }
      e$(document).on('click', this.minimize);
    }.bind(this));
    if (window.localStorage.getItem('show_progress_tutorial')) {
      var showProgressTutorial = function () {
        if (e$('.shepherd-open').length) {
          return;
        }
        Tour.progressTutorial();
        window.localStorage.removeItem('show_progress_tutorial');
        document.tour.start();
        e$('#eo-live').off('mouseenter', showProgressTutorial);
      };
      e$('#eo-live').on('mouseenter', showProgressTutorial);
    }
  };
  this.hideLiveActions = function () {
    e$('#eo-live').addClass('hidden');
    e$('#eo-banner').show();
  };
  this.checkWeeklyPresence = function () {
    e$(".day-bar").removeClass('eo-persistence');
    console.log('checkWeeklyPresence');
    document.englishonBackend.checkWeeklyPresence().then(function (data) {
      console.log('checkWeeklyPresence. got from server: ' + data);
      for (var day in data) {
        if (data.hasOwnProperty(day)) {
          console.log(day + ': weekday: ' + data[day].weekday + data[day].len);
          if (data[day].len) {
            e$(e$(".day-bar").get(day - 1)).addClass('eo-persistence');
          }
          e$(e$(".day-bar").get(day - 1)).text(data[day].weekday);
        }
      }
    });
  };
  this.milotrage = function () {
    document.englishonBackend.milotrage().then(function (data) {
      console.log('data.#words: ' + data['#words']);
      //'1000000' is a hack to display trailing zero... till not supported with format
      e$('#eo-odometer').text(1000000 + data['#words'] * 10);
    });
  };
  this.testVocabulary = function () {
    document.eo_user.showLiveActions();
    e$('#eo-live').addClass('eo-live-maximize vocabulary-open');
    e$('#vocabulary').removeClass('hidden');
    e$('#eo-live-main').addClass('hidden');

    word = { 'mastery': 0.2, 'word': 'very_very_long_word', 'translation': 'מילה ארוכה' };
    word2 = { 'mastery': 0.2, 'word': 'average', 'translation': 'תרגוםארוךבמיוחד' };
    word3 = { 'mastery': 0.2, 'word': 'smile', 'translation': 'חיוך' };
    words_list = [word, word2, word3, word2, word, word3, word, word2, word, word, word, word, word];
    document.eo_user.renderVocabulary(words_list);
  };
};
//
Injector = function (paragraphs) {
  report = function (msg, data) {
    if (!data) data = {};
    post = document.englishonBackend.report(msg, data);
    post.done(function (res) {
      if (msg === 'TriedAnswer') {
        document.eo_user.milotrage();
        document.eo_user.getLevel();
        //document.eo_user.scoreCorrect();
        document.eo_user.checkSRProgress();
        if (!document.overlay.userAnswered) {
          document.overlay.userAnswered = true;
          console.log('msg === TriedAnswer && !userAnswered. checkWeeklyPresence fired!');
          //score user if coming day after day
          document.eo_user.checkpersistence();
          document.eo_user.checkWeeklyPresence();
        }
        //this should happen only if isCorrect=True!
        if (!e$('#vocabulary').hasClass('hidden') && this.isCorrect(res.answer)) {
          document.eo_user.fetchVocabulary();
        }
      }
      //when merge glicko and personal vocabulary , this was the glicko version:
      //if (msg === "StartedQuestion" && !document.overlay.interacted) {
      if (msg === "StartedQuestion" && !document.overlay.interacted && !e$('.eo-answered').length && !e$('.eo-expired').length) {
        document.overlay.interacted = true;
        report("StartedQuiz");
        console.log('msg === TriedAnswer && !userAnswered. checkWeeklyPresence fired!');
        document.eo_user.showLiveActions();
        is_new_session = document.englishonBackend.is_new_session();
        if (is_new_session) {
          console.log('reporting StartedSession.... ..... ...... ');
          report("StartedSession");
        }
      }
    }.bind(this));
    if (msg === "CompletedQuestion" && e$('.eo-question:not(.eo-answered)').length === 1) {
      report("CompletedQuiz");
      if (!document.englishonConfig.email && !(e$('body').hasClass('www-shturem-net') && e$('body').hasClass('front-page'))) {
        setTimeout(function () {
          e$('#eo-dlg-login').find('#subtitle').html(document.MESSAGES[document.englishonConfig.siteLanguage].COMPLETE_QUIZ);
          document.eoDialogs.toggleDialog('eo-dlg-login', 'show');
        }, 4000);
      }
    }
  };
  this.elements = [];
  this.isActive = false;
  this.toggle = function (value) {
    if (value) {
      this.on();
    } else {
      this.off();
    }
  };
  this.off = function () {
    if (!this.isActive) {
      return;
    }
    this.isActive = false;
    e$('.eo-space').remove();
    e$(this.elements).each(function (i, q) {
      q.replacement.replaceWith(q.original);
      //check if this is the right place!!!! 
      //it good when user signout, but what it's efect if user just on and off?
      q.qobj.touched = false;
      q.qobj.tried = [];
    });
    //this.interacted = false;
    //this.userAnswered = false;
    console.log("hide questions now");
  };
  this.on = function () {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    e$(this.elements).each(function (i, q) {
      var hint = q.qobj.data.preposition + q.qobj.data.hint;
      q.replacement = q.qobj.replacement();
      q.original.replaceWith(q.replacement);
      //if the question after answering is too long - add spaces
      var width = q.replacement.outerWidth(); //2 pixels for the border and 4 is spere...
      var [parentoffset, lineWidth] = document.overlay.getLineDetails();
      var spaceInCurrentLine = q.replacement.offset().left - parentoffset + width;
      var curent_text = q.replacement.hasClass('eo-expired') ? q.qobj.practicedWord : q.qobj.data.replaced;
      var future_text = q.replacement.hasClass('eo-expired') ? q.qobj.data.replaced : q.qobj.practicedWord;
      curent_text = curent_text.replaceAll('_', '&nbsp;');
      future_text = future_text.replaceAll('_', '&nbsp;');
      var visible_element = q.replacement.hasClass('eo-expired') ? '.eo-correct' : '.eo-hint';
      q.replacement.find(visible_element).html(future_text);
      var future_width = q.replacement.outerWidth(); //2 pixels for the border
      q.replacement.find(visible_element).html(curent_text);
      /*      if (future_width > spaceInCurrentLine || ////a question which expected to go down after action
              (width > future_width && spaceInCurrentLine >= lineWidth)) { //a question which expected to go up after action
              console.log('IN THIS CASE QUESTION SHOULD DOWN LINE');
              q.replacement.before(e$('<div>').addClass('eo-space').css('width', spaceInCurrentLine - 10)); //the width is not exact to give some spere 
            }*/
      if (future_width > spaceInCurrentLine) {
        console.log('IN THIS CASE question is expected to go DOWN after action, ' + future_width + ' ,' + spaceInCurrentLine + ' context: ' + q.qobj.data.context);
        q.replacement.before(e$('<div>').addClass('eo-space').css('width', spaceInCurrentLine - 10)); //the width is not exact to give some spere 
      }
      if (width > future_width && spaceInCurrentLine >= lineWidth) {
        console.log('IN THIS CASE question is expected to go UP after action, ' + future_width + ' ,' + spaceInCurrentLine + ' context: ' + q.qobj.data.context);
        q.replacement.before(e$('<div>').addClass('eo-space').css('width', spaceInCurrentLine - 10)); //the width is not exact to give some spere 
      }
      if (q.qobj.data.tried.length && q.qobj.data.tried[0] != q.qobj.practicedWord) {
        console.log('first answer was wrong...');
        q.replacement.addClass('wrong-feedback');
      }
    });
    console.log('########after injector on: ' + e$('.eo-question').length);
  };
  this.setQuestions = function (questions, toggleSound) {
    this.elements = [];
    //enable setQuestion after login
    this.isBatch = true;
    //show first expired questions
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].tried.length) {

        this.addQuestion(questions[i], toggleSound);
      }
    }
    for (var i = 0; i < questions.length; i++) {
      //check spacing just for new questions. 
      if (this.checkSpacing(questions[i]) && this.checkDuplicates(questions[i])) {
        this.addQuestion(questions[i], toggleSound);
      }
    }
    this.isBatch = false;
    updateProgressBars();
  };
  this.checkDuplicates = function (q) {
    isDuplicate = false;
    e$(this.elements).each(function (i, e) {
      if (e.qobj.data.hint == q.hint && e.qobj.data.correct_answers[0].answer == q.correct_answers[0].answer) {
        isDuplicate = true;
      }
    });
    return !isDuplicate;
  };
  this.checkSpacing = function (q) {
    var questionsPerParagraph = 1;
    var availablePlace = true;
    e$.each(paragraphs, function (i, p) {
      if (!p) {
        return;
      }
      p = e$(p);
      var ctx = q.context;
      var location = p.text().indexOf(q.context);
      var exist = p.find('.eo-injection-target').length;
      if (p.text().indexOf(q.context) != -1 && p.find('.eo-injection-target').length >= questionsPerParagraph) {
        availablePlace = false;
        console.log('no available space in this paragraph');
      }
    });
    return availablePlace;
  };
  this.addQuestion = function (question, toggleSound) {
    var target = this.findTarget(question.context, question.replaced);
    if (!target) {
      console.log("addQuestion***Could not find question: ", question);
      return;
    }
    var q = new Question(question, toggleSound);
    this.elements.push({ qobj: q, original: target });
    if (!this.isBatch) {
      updateProgressBars();
    }
  };

  function Question(question, toggleSound) {
    var isExpired = question.tried && question.tried.length > 0;
    var isMultipleChoice = question.wrong_answers && question.wrong_answers.length !== 0;
    var r;
    if (isExpired) {
      if (isMultipleChoice) {
        r = new ExpiredMultipleChoiceQuestion(question);
      } else {
        r = new ExpiredOpenQuestion(question);
      }
    } else if (isMultipleChoice) {
      r = new MultipleChoice(question, toggleSound);
    } else {
      r = new OpenQuestion(question, toggleSound);
    }
    r.report = report.bind(r);
    return r;
  }
  this.findTarget = function (ctx, replaced) {
    var found;
    e$.each(paragraphs, function (i, p) {
      if (!p) {
        return;
      }
      findAndReplaceDOMText(p, {
        find: ctx,
        replace: function (portion, match) {
          if (found && portion.text.indexOf(replaced) !== -1) {
            console.log("Ambiguous match", replaced, portion.text);
            return portion.text;
          }
          var ix = portion.text.indexOf(replaced);
          if (ix === -1) return portion.text;
          var before = document.createTextNode(portion.text.slice(0, ix));
          var target = e$('<span>').addClass('eo-injection-target').text(portion.text.slice(ix, ix + replaced.length));
          var after = document.createTextNode(portion.text.slice(ix + replaced.length));
          var frag = document.createDocumentFragment();
          frag.appendChild(before);
          frag.appendChild(target.get(0));
          frag.appendChild(after);
          found = target;
          return frag;
        }
      });
    });
    return found;
  };
};
updateProgressBars = function () {
  // you'd think activating the current one would be enough... but since we want them to animate
  // from the previous state and not from 0, the easiest way is to update all of them always.
  var all = e$('.eo-question').length;
  var answered = e$('.eo-question.eo-answered').length;
  //when update e$('.eo-progress').text the inner element became hidden. don't know why
  //e$('.eo-progress').text(Math.ceil(100 * answered / all).toString() + '%');
  e$('.eo-progress-inner').css('width', (100 * answered / all).toString() + '%');
};
var AbstractQuestion = function (qdata, toggleSound) {
  this.data = qdata;
  if (typeof this.data.correct_answer === 'string') this.correct = [this.data.correct_answer];else // multiple correct answers
    this.correct = this.data.correct_answers.map(function (a) {
      return a.answer;
    });
  this.practicedWord = this.data.hint_language === document.englishonConfig.targetLanguage ? this.data.hint : this.correct[0];
  this.toggleSound = toggleSound;
  this.tried = [];
  this.maxtime = 40;
  this.maxattempts = 3;
  this.touched = false;
};
AbstractQuestion.prototype.replacement = function () {
  if (!this.element) {
    this.element = this.createElement();
  }
  this.bindInput();
  return this.element;
};
AbstractQuestion.prototype.createElement = function () {
  var textWithPreposition = this.data.preposition + this.data.hint;
  var prepositionClass = this.data.preposition ? 'preposition' : '';
  return e$('<div>').addClass('eo-question').addClass(this.languageOrderClass())
  //.append(e$('<span>').addClass('eo-correct').toggleHtml(this.correct[0]))
  .append(e$('<span>').addClass('eo-correct').toggleHtml(this.correct[0])).append(e$('<span>').addClass('eo-hint').addClass(prepositionClass).text(textWithPreposition)).append(e$('<span>').addClass('eo-progress').append(e$('<span>').addClass('eo-progress-inner')));
};
AbstractQuestion.prototype.bindInput = function () {
  this.element.find('.eo-hint').click(this.questionOnClick.bind(this));
};
AbstractQuestion.prototype.open_question_handler = function (e) {
  //if (e$('.shepherd-open').length) {
  if (window.localStorage.getItem('leave_quesion_open') || e$('.shepherd-open').length) {
    window.localStorage.removeItem('leave_quesion_open');
    return;
  }
  if (this.element.has(e.target).length === 0) {
    if (this.element.hasClass('eo-active')) {
      this.closeUnanswered();
    };
    e$(document).off('click', this.open_question_handler);
  };
};
AbstractQuestion.prototype.questionOnClick = function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (this.element.hasClass('eo-answered')) {
    return;
  }
  this.touch();
  if (e$(e.target).parents('.eo-question.eo-active').length) {
    this.closeUnanswered();
    return;
  }
  if (e$('.eo-question.eo-active').length) {
    document.overlay.closeUnAnswered();
  }
  this.open();
  e$(document).on('click', this.open_question_handler.bind(this));
};
AbstractQuestion.prototype.open = function () {
  // placeholder, you probably want to call not super() but animateStateChange() directly
  this.element.addClass('eo-active');
};
AbstractQuestion.prototype.animateStateChange = function (classesToAdd, classesToRemove, finalWidth) {
  var offset = this.element.offset().left;
  var future_point = offset - (finalWidth - Number(this.element.css('width').replace(/[^\d\.\-]/g, '')));
  var parentoffset = this.element.parent().offset().left;
  if (future_point < parentoffset) {
    this.element.addClass(classesToAdd);
    this.element.removeClass(classesToRemove);
    console.log('edge question!');
  } else {
    // explicitly set initial width
    // +1 because rounding down makes the text sometimes not fit, and one pixel is a small price for solving it
    this.element.css('width', this.element.outerWidth() + 1);
    // force repaint
    this.element.width();
    // change state
    this.element.addClass(classesToAdd);
    this.element.removeClass(classesToRemove);
    this.element.width();
    // explicitly set target width
    this.element.css('width', finalWidth + 1);
  }
  // cancle fixed width for question and give it fit width
  if (this.element.is('.eo-answered')) {
    this.element.removeAttr('style');
  }
};
AbstractQuestion.prototype.QuestionAudio = function (e) {
  e.preventDefault();
  var target = e$(e.target);
  var prepositionClass = this.data.preposition ? 'preposition' : '';
  target.toggleHtml(this.data.preposition + this.data.hint, this.practicedWord).toggleClass(prepositionClass);
  if (target.html().replaceAll('&nbsp;', '_') == this.practicedWord) {
    Speaker.speak(document.englishonConfig.targetLanguage, target.text());
  }
};
AbstractQuestion.prototype.closeUnanswered = function () {
  this.animateStateChange(null, 'eo-active', this.element.find('.eo-hint').outerWidth());
};
AbstractQuestion.prototype.closeAnswered = function () {
  this.animateStateChange('eo-answered', 'eo-active', this.element.find('.eo-correct').outerWidth());
};
AbstractQuestion.prototype.isCorrect = function (answer) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this.correct[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ans = _step.value;

      if (ans.toLowerCase() === answer.toLowerCase()) return true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};
AbstractQuestion.prototype.touch = function (event) {
  if (!this.touched) {
    this.report('StartedQuestion', {
      question: this.data.id
    });
    var language = document.englishonConfig.targetLanguage;
    if (this.practicedWord === this.data.hint) {
      //Speaker.fetch(language, this.practicedWord);
    } else {
      //Speaker.fetch(language, this.correct[0]);
      for (i = 0; i < this.data.wrong_answers.length; i++) {
        //Speaker.fetch(language, this.data.wrong_answers[i].answer);
      }
    }
    this.touched = true;
  }
};
AbstractQuestion.prototype.guess = function (answer, target) {
  e$(target).parents('.eo-option').find('.feedback').removeClass('hidden');
  this.element.addClass('eo-show_solution');
  //this.element.find('.eo-correct_option').find('.feedback').removeClass('hidden');
  var isAnswerInTargetLanguage = this.practicedWord !== this.data.hint;
  if (isAnswerInTargetLanguage) {
    Speaker.speak(document.englishonConfig.targetLanguage, answer.replaceAll('_', ' '));
  }
  var isCorrect = this.isCorrect(answer);
  if (isCorrect) {
    if (!isAnswerInTargetLanguage) {
      Speaker.speak(document.englishonConfig.targetLanguage, this.practicedWord.replaceAll('_', ' '));
    }
    setTimeout(function () {
      this.closeAnswered();
      updateProgressBars();
    }.bind(this), 1000);
  } else {
    e$(target).parents('.eo-option, .eo-question').addClass('wrong-feedback');
    //this is not the right place for this code. pass it to multipleChoiseQuestion
    if (e$(target).data('translate')) e$(target).toggleHtml(e$(target).data('translate'), e$(target).data('word'));
  }
  // don't count the same answer multiple times.
  if (this.tried.indexOf(answer) !== -1) return;
  this.tried.push(answer);
  if (!this.element.hasClass('lost_focus')) {
    this.report('TriedAnswer', {
      question: this.data.id,
      answer: answer,
      trial_num: this.tried.length
    });
  }
  if (isCorrect) {
    if (!this.element.hasClass('lost_focus')) {
      this.report('CompletedQuestion', {
        question: this.data.id,
        reason: 'correct'
      });
    } else {
      this.report('CompletedQuestion', {
        question: this.data.id,
        reason: 'lost focus'
      });
    }
  }
};
AbstractQuestion.prototype.languageOrderClass = function () {
  return this.practicedWord !== this.data.hint ? 'eo-dest_hint' : 'eo-source_hint';
};
AbstractQuestion.prototype.markAnswered = function () {
  var correct = this.element.find('.eo-correct');
  var finalWidth = correct.outerWidth();
  // explicitly set initial width
  // +1 because rounding makes it sometimes not fit, and one pixel is a small price for solving it
  this.element.css('width', this.element.outerWidth() + 1);
  // force repaint
  this.element.width();
  // change state
  this.element.removeClass('eo-active');
  this.element.addClass('eo-answered');
  // force repaint
  correct.width();
  // explicitly set target and width
  this.element.css('width', finalWidth + 1);
};
var OpenQuestion = function (question, toggleSound) {
  AbstractQuestion.call(this, question, toggleSound);
  this.lang = languageOf(this.correct[0].charCodeAt(0));
};
OpenQuestion.prototype = Object.create(AbstractQuestion.prototype);
OpenQuestion.prototype.constructor = OpenQuestion;
OpenQuestion.prototype.createElement = function () {
  console.log("EVENT OpenQuestion.prototype.createElement ??");
  var element = AbstractQuestion.prototype.createElement.call(this);
  element.addClass('eo-open');
  this.input = e$('<input>').addClass('eo-input');
  element.find('.eo-hint').after(this.input);
  return element;
};
OpenQuestion.prototype.bindInput = function () {
  AbstractQuestion.prototype.bindInput.call(this);
  this.input.on('keypress', this.onKeyPress.bind(this)).on('focus', this.touch.bind(this)).on('blur', function (event) {
    if (this.langWarning) this.langWarning.hide();
  }.bind(this)).autocomplete({ source: document.wordlist }).on('autocompleteselect', this.onSelect.bind(this));
};
OpenQuestion.prototype.onKeyPress = function (event) {
  var key = event.keyCode;
  if (key === 13 || key === 10) {
    event.preventDefault();
    this.guess(this.input.val());
    return false;
  }
  var lang = languageOf(event.charCode);
  if (!lang) {
    return;
  } else if (lang !== this.lang) {
    if (!this.langWarning) {
      this.langWarning = e$('<div>').addClass('eo-layout-warning').addClass('eo-box').append(e$('<p dir="ltr">').text(MESSAGES.WRONG_KEYBOARD_LAYOUT)).append(e$('<p>').append(e$('<strong>').text(MESSAGES.WRONG_KEYBOARD_LAYOUT_HINT)));
      this.element.prepend(this.langWarning);
      this.guess = function (answer) {
        if (this.langWarning) this.langWarning.hide();
        AbstractQuestion.prototype.guess.call(this, answer);
      };
    }
    this.langWarning.show();
  } else if (lang === this.lang) {
    if (this.langWarning) this.langWarning.hide();
  }
};
OpenQuestion.prototype.onSelect = function (event, ui) {
  this.input.val(ui.item.value);
  this.guess(this.input.val());
};
OpenQuestion.prototype.open = function () {
  //console.log("EVENT open question ??");
  this.animateStateChange('eo-active', null, this.element.outerWidth() + this.input.outerWidth());
  this.input.focus();
};
OpenQuestion.prototype.closeUnanswered = function () {
  AbstractQuestion.prototype.closeUnanswered.call(this);
  if (!this.element.hasClass('eo-answered')) {
    if (this.element.hasClass('eo-open') && this.input.val()) {
      this.guess(this.input.val());
    }
  }
};
OpenQuestion.prototype.guess = function (answer) {
  var isAnswerInTargetLanguage = this.practicedWord !== this.data.hint;
  if (isAnswerInTargetLanguage) {
    Speaker.speak(document.englishonConfig.targetLanguage, this.correct[0]);
  } else {
    Speaker.speak(document.englishonConfig.targetLanguage, this.practicedWord);
  }
  this.closeAnswered();
  updateProgressBars();
  var isCorrect = this.isCorrect(answer);
  // don't count the same answer multiple times.
  if (this.tried.indexOf(answer) !== -1) return;
  this.tried.push(answer);
  this.report('TriedAnswer', {
    question: this.data.id,
    answer: answer,
    trial_num: this.tried.length
  });
  if (isCorrect) {
    this.element.addClass('eo-correct_answer');
    this.report('CompletedQuestion', {
      question: this.data.id,
      reason: 'correct'
    });
  } else {
    this.element.addClass('eo-wrong_answer');
    this.report('CompletedQuestion', {
      question: this.data.id,
      reason: 'ran out of attempts'
    });
  }
};
var MultipleChoice = function (question, toggleSound) {
  AbstractQuestion.call(this, question, toggleSound);
};
MultipleChoice.prototype = Object.create(AbstractQuestion.prototype);
MultipleChoice.prototype.constructor = MultipleChoice;
MultipleChoice.prototype.replacement = function () {
  //jquery replaceWith() removes all data associated with the removed nodes. 
  //so we need to call createElement again
  //if (!this.element) {
  if (!this.element || !this.element.hasClass('eo-answered')) {
    this.element = this.createElement();
  }
  this.bindInput();
  return this.element;
};
MultipleChoice.prototype.createElement = function () {
  var element = AbstractQuestion.prototype.createElement.call(this);
  element.addClass('eo-multiple_choice');
  //var answers = this.data.wrong_answers;
  var answers = this.data.personal_distractions;
  shuffle(answers);
  option_elements = answers.map(function (answer) {
    var li = e$('<li>').addClass('eo-option')
    //replacing '_' with none breakable HTML ENTITY, so the word will not displayed in two lines
    .append(e$('<span>').html(answer.answer.replaceAll('_', '&nbsp;')).data('translate', answer.translation).data('word', answer.answer)).append(e$('<i aria-hidden="true">').addClass('fa fa-thumbs-o-down feedback hidden'));
    return li;
  }.bind(this));
  option_elements.push(e$('<li>').addClass('eo-option eo-correct_option').append(e$('<span>').html(this.correct[0].replaceAll('_', '&nbsp;')).data('word', this.correct[0])).append(e$('<i aria-hidden="true">').addClass('fa fa-thumbs-o-up feedback hidden')));
  shuffle(option_elements);
  this.options = e$('<ul>').addClass('eo-options').append(option_elements);
  element.find('.eo-hint').after(this.options);
  return element;
};

function shuffle(arr) {
  var i = arr.length,
      j,
      temp;
  if (i === 0) return;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};
MultipleChoice.prototype.bindInput = function () {
  AbstractQuestion.prototype.bindInput.call(this);
  this.element.find('.eo-option').click(this.optionOnClick.bind(this));
  //jquery replaceWith() removing all event handlers associated with element. rebind them.
  //maybe it should be a part of AbstractQuestion.prototype.bindInput
  if (this.element.hasClass('eo-answered')) {
    this.element.on('click', function (e) {
      e.preventDefault();
      var target = e$(e.target);

      //eo-answered
      target.toggleHtml(this.data.hint, this.practicedWord);
      if (target.html() == this.practicedWord.replaceAll('_', '&nbsp;')) {
        Speaker.speak(document.englishonConfig.targetLanguage, target.text());
      }
    }.bind(this));
  }
};
MultipleChoice.prototype.optionOnClick = function (e) {
  e.preventDefault();
  this.guess(e$(e.target).data('word'), e.target);
};
MultipleChoice.prototype.open = function () {
  this.options.find('.eo-option:not(.eo-correct_option)').each(function (i, option) {
    e$(option).find('span').toggleHtml(e$(option).find('span').data('word').replaceAll('_', '&nbsp;'), e$(option).find('span').data('translate'));
  });
  options_width_when_show_translations = this.options.outerWidth();
  this.options.find('.eo-option:not(.eo-correct_option)').each(function (i, option) {
    e$(option).find('span').toggleHtml(e$(option).find('span').data('word').replaceAll('_', '&nbsp;'), e$(option).find('span').data('translate'));
  });
  var width = Math.max(this.element.outerWidth(), this.options.outerWidth(), options_width_when_show_translations);
  //var width = Math.max(this.element.outerWidth(), this.options.outerWidth());
  // // see super() for explanation of +1
  this.options.width(this.element.outerWidth() + 1);
  this.animateStateChange('eo-active', null, width);
  this.options.width(width + 1);
};
MultipleChoice.prototype.closeUnanswered = function () {
  AbstractQuestion.prototype.closeUnanswered.call(this);
  if (!this.element.hasClass('eo-answered')) {
    if (this.element.hasClass('eo-show_solution')) {
      this.element.addClass('lost_focus');
      this.guess(this.correct[0]);
    }
  }
};
MultipleChoice.prototype.closeAnswered = function () {
  // see super for more documentation
  var correctOption = this.element.find('.eo-option.eo-correct_option span');
  var initialTop = correctOption.offset().top - this.element.offset().top;
  var correct = this.element.find('.eo-correct');
  correct.css('top', initialTop);
  // force repaint
  correct.width();
  this.element.click(this.QuestionAudio.bind(this));
  AbstractQuestion.prototype.closeAnswered.call(this);
  correct.css('top', 0);
};
// completely non-interactive
var AbstractExpiredQuestion = function (question) {
  AbstractQuestion.call(this, question);
};
AbstractExpiredQuestion.prototype = Object.create(AbstractQuestion.prototype);
AbstractExpiredQuestion.prototype.constructor = AbstractExpiredQuestion;
AbstractExpiredQuestion.prototype.createElement = function () {
  var element = AbstractQuestion.prototype.createElement.call(this).addClass('eo-answered').addClass('eo-expired');
  return element;
};
AbstractExpiredQuestion.prototype.bindInput = function () {
  this.element.click(this.QuestionAudio.bind(this));
};
var ExpiredOpenQuestion = function (question) {
  AbstractExpiredQuestion.call(this, question);
};
ExpiredOpenQuestion.prototype = Object.create(AbstractExpiredQuestion.prototype);
ExpiredOpenQuestion.prototype.constructor = ExpiredOpenQuestion;
ExpiredOpenQuestion.prototype.createElement = function () {
  var element = AbstractExpiredQuestion.prototype.createElement.call(this);
  var tried = this.data.tried.slice();
  var lastAnswer = tried.pop();
  if (this.isCorrect(lastAnswer)) {
    element.addClass('eo-correct_answer');
  } else {
    element.addClass('eo-wrong_answer');
  }
  return element;
};
var ExpiredMultipleChoiceQuestion = function (question) {
  AbstractExpiredQuestion.call(this, question);
};
ExpiredMultipleChoiceQuestion.prototype = Object.create(AbstractExpiredQuestion.prototype);
ExpiredMultipleChoiceQuestion.prototype.constructor = ExpiredMultipleChoiceQuestion;
//
document.MENU_HTML = "<div id='eo-area-container' class='hidden'>\
  <div id='eo-menu' class='hidden eo-area'>\
    <div class='eo-close close-dialog'></div>\
    <div class='header'>\
      <div id='eo-account-area'>\
        <div class='Grid u-textCenter eo-row eo-menu-inner'>\
          <div class='Grid-cell user-pic-cell'>\
            <div id='eo-account-img'></div>\
          </div>\
          <div class='Grid-cell user-name-cell v-align h-align'>\
            <div id='eo-account-name'></div>\
          </div>\
          <div class='Grid-cell v-align hamburger-cell right-align'> <i class='fa fa-bars' aria-hidden='true' id='options-button'></i> </div>\
        </div>\
      </div>\
      <div class='Grid u-textCenter eo-row eo-menu-inner'>\
        <div class='Grid-cell u-1of3 v-align'>\
          <div id='eo-power-switch'> <span id='eo-power-switch-text'></span>\
            <div id='eo-power-switch-circle'></div>\
          </div>\
        </div>\
        <div class='Grid-cell delimiter'>\
          <div class='eo-line'></div>\
        </div>\
        <div class='Grid-cell'>\
          <div class='Grid'>\
            <div class='Grid-cell u-1of3 v-align h-align'>\
              <div id='eo-speaker-res'></div>\
            </div>\
            <div class='Grid-cell v-align right-align'>\
              <div id='eo-slider'></div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
    <div class='languages_picker'>\
      <div class='Grid Grid--full'>\
        <div class='Grid-cell v-align eo-menu-inner' id='eo-picker-tittle'>\
          <div id='eo-language_header'>Pick a language</div>\
        </div>\
        <div class='Grid-cell eo-menu-inner available'>\
          <div class='Grid eo-row'>\
            <div class='Grid-cell u-1of6'>\
              <div class='flag us-flag'></div>\
            </div>\
            <div class='Grid-cell v-align '>\
              <div class='eo-language-option-res'>English (US)</div>\
            </div>\
          </div>\
        </div>\
      </div>\
      <div id='coming_soon'>\
        <div class='Grid-cell eo-row eo-menu-inner'>\
          <div class='Grid'> <span class='eo-tooltip'>Coming soon</span>\
            <div class='Grid-cell u-1of6 eo-low-layer'>\
              <div class='flag sp-flag'></div>\
            </div>\
            <div class='Grid-cell v-align eo-low-layer'>\
              <div class='eo-language-option-res'>Spanish</div>\
            </div>\
          </div>\
        </div>\
        <div class='Grid-cell eo-row eo-menu-inner' id='eo-last-option'>\
          <div class='Grid'> <span class='eo-tooltip'>Coming soon</span>\
            <div class='Grid-cell u-1of6 eo-low-layer'>\
              <div class='flag fr-flag'></div>\
            </div>\
            <div class='Grid-cell v-align eo-low-layer'>\
              <div class='eo-language-option-res'>French</div>\
            </div>\
          </div>\
        </div>\
      </div>\
      <div class='Grid-cell eo-row11 h-align'>\
        <div id='englishon-bottom'></div>\
      </div>\
      <div class='Grid-cell eo-row10 eo-menu-inner'>\
        <div class='Grid'>\
          <div class='Grid-cell v-align right-align eo-menu-footer' id='eo-help'><a href='https://englishon.freshdesk.com'>Need Help?</a></div>\
          <div class='Grid-cell v-align eo-menu-footer' id='eo-contact'><a href='#'>Contact Us</a></div>\
        </div>\
      </div>\
      <div class='Grid Grid--full u-textCenter eo-row eo-menu-inner hidden' id='editor-row'>\
        <div class='Grid-cell v-align h-align'>\
          <div id='eo-editor-btn' class='v-align h-align'>edit questions</div>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>";
//
document.LOGIN_DLG = "<div class='hidden eo-area' id='eo-dlg-login'>\
  <div class='eo-close close-dialog'></div>\
  <div id='eo-dlg-inner'>\
    <div class='Grid Grid--full'>\
      <div class='Grid-cell eo-row14'>\
        <div class='Grid'>\
          <div class='Grid-cell signin-cell right-align v-align'>\
            <div id='dlg-sign-in-header'>Sign In</div>\
          </div>\
          <div class='Grid-cell icon-cell'>\
            <div id='eo-dlg-icon'></div>\
          </div>\
          <div class='Grid-cell signup-cell left-align v-align' id='dlg-sign-up-header'>Sign Up</div>\
        </div>\
      </div>\
      <div class='Grid-cell eo-row12 v-align h-align'>\
        <div class='eo-logo'></div>\
        <div class='registered_symbol'>&#174;</div>\
      </div>\
      <div class='Grid-cell eo-row13 v-align h-align'>\
        <div class='subtitle' id='subtitle'></div>\
      </div>\
      \
<!--       <div class='Grid-cell eo-row4'>\
        <div id='google-iframe'></div>\
      </div>\
      <div class='Grid-cell hidden'>\
        <div id='eo-google-msg' class='eo-message'></div>\
      </div>\
      <div class='Grid-cell eo-row5'>\
        <div class='Grid'>\
          <div class='Grid-cell line eo-delimiter'></div>\
          <div class='Grid-cell v-align h-align'> <span class='subtitle' id='or'>OR</span> </div>\
          <div class='Grid-cell line eo-delimiter'></div>\
        </div>\
      </div> -->\
\
\
      <div class='Grid-cell eo-row6 h-align'>\
        <input type='text' placeholder='Email Address' id='eo-login-email' class='eo-input' /> </div>\
      <div class='Grid-cell hidden eo-row8'>\
        <div id='login-email-msg' class='error eo-message'></div>\
      </div>\
      <div class='Grid-cell eo-row6 h-align'>\
        <input type='password' placeholder='Password' id='eo-login-password' class='eo-input' /> </div>\
      <div class='Grid-cell hidden eo-row8'>\
        <div id='login-password-msg' class='error eo-message'></div>\
      </div>\
      <div class='Grid-cell v-align right-align eo-row9'>\
        <div class='v-align right-align eo-menu-footer'> <a id='eo-forgot-psw' class='eo-menu-footer'>Forgot password?</a> </div>\
      </div>\
      <div class='Grid-cell eo-row7 v-align h-align'>\
        <div id='eo-mail-login-btn' class='v-align h-align'>sign in</div>\
      </div>\
    </div>\
  </div>\
</div>\
</div>";
//
document.OPTIONS_DLG = "<div class='hidden eo-area' id='eo-dlg-options'>\
  <div id='eo-dlg-options-main' class='Grid Grid--full eo-inner-area hidden'>\
    <div class='Grid-cell option'>\
      <div id='tutorial-btn'>Quick Guide to EnglishOn</div>\
    </div>\
    <div class='Grid-cell option'>\
      <div id='progress-tutorial-btn'>Progress Bar Tutorial</div>\
    </div>\
    <div class='Grid-cell option'>\
      <div id='eo-choose-lang'>Choose site language</div>\
    </div>\
  </div>\
  <div id='eo-dlg-options-logged' class='Grid Grid--full eo-inner-area hidden'>\
    <div class='Grid-cell option-dlg-logged'>\
      <div id='signout_btn'>Sign out</div>\
    </div>\
  </div>\
  <div id='eo-site-languages' class='hidden Grid Grid--full eo-inner-area'>\
    <div class='Grid-cell option'>\
      <div class='eo-site-option' id='english'>English</div>\
    </div>\
    <div class='Grid-cell option'>\
      <div class='eo-site-option' id='hebrew'>עברית</div>\
    </div>\
  </div>\
</div>";
//
document.live_actions = "<div class='hidden' id='eo-live'>\
  <div class='eo-close close-progress-bar'></div>\
  <div class='eo-close close-vocabulary'></div>\
  <div class='Grid Grid--full' id='eo-live-main'>\
    <div class='Grid-cell'>\
      <div class='Grid live-part' id='milotrage'>\
        <div class='Grid-cell actions-logo-cell v-align h-align'>\
          <div id='actions-logo'></div>\
        </div>\
        <div class='Grid-cell v-align'>\
          <div id='eo-odometer' class='odometer'>1234567</div>\
        </div>\
      </div>\
    </div>\
    <div class='Grid-cell'>\
      <div class='Grid'>\
        <div class='Grid-cell' id='sr-cell'>\
          <div id='sr' class='live-part v-align h-align'>\
            <div id='srProgress'></div>\
          </div>\
        </div>\
      </div>\
    </div>\
    <div class='Grid-cell'>\
      <div id='persistence' class='live-part'>\
        <div class='Grid' id='days-pannel'>\
          <div class='Grid-cell'>\
            <div class='day-bar v-align h-align' id='eo-day1'>1</div>\
          </div>\
          <div class='Grid-cell'>\
            <div class='day-bar v-align h-align' id='eo-day2'>2</div>\
          </div>\
          <div class='Grid-cell'>\
            <div class='day-bar v-align h-align' id='eo-day3'>3</div>\
          </div>\
          <div class='Grid-cell'>\
            <div class='day-bar v-align h-align' id='eo-day4'>4</div>\
          </div>\
          <div class='Grid-cell'>\
            <div class='day-bar v-align h-align' id='eo-day5'>5</div>\
          </div>\
          <div class='Grid-cell'>\
            <div class='day-bar v-align h-align' id='eo-day6'>6</div>\
          </div>\
          <div class='Grid-cell'>\
            <div class='day-bar v-align h-align' id='eo-day7'>7</div>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
  <div id='vocabulary' class='Grid Grid--full hidden'>\
    <div class='Grid-cell cell1'>\
      <div class='Grid' id='vocabulary-title'>\
        <div class='Grid-cell vocabulary-cog-cell'> <i class='fa fa-cog' aria-hidden='true' id='vocabulary-order-icon'></i> </div>\
        <div class='Grid-cell'>\
          <div id='vocabulary-order'>change the list order</div>\
        </div>\
      </div>\
    </div>\
    <div class='Grid-cell cell2'>\
      <div id='vocabulary-content'>\
      \
<!--         <div class='Grid-cell cell1'>\
          <input type='text' id='personal-word' placeholder='type your word here' autocomplete='off' />\
        </div>\
        <div class='Grid-cell cell1'>\
          <select id='personal-word-btn'>\
            <option selected='selected' style='display:none;'>add to my vocabulary</option>\
          </select>\
        </div> -->\
\
\
        <div id='vocabulary-content-list'></div>\
      </div>\
    </div>\
  </div>\
</div>";
//
document.TERMS_DLG = "<div id='terms-container' class='hidden'>\
  <div id='eo-dlg-terms' class='hidden'>\
    <div class='eo-close terms-close'></div>\
    <div id='eo-dlg-inner'>\
      <div class='Grid Grid--full'>\
        <div class='Grid-cell eo-row2'>\
          <div class='Grid h-align'>\
            <div class='Grid-cell terms-icon-cell'>\
              <div id='eo-dlg-icon'></div>\
            </div>\
            <div class='Grid-cell header-cell left-align v-align' id='dlg-terms-header'>\
              <div class='eo-logo'></div>\
              <div class='registered_symbol'>&#174;</div>\
            </div>\
          </div>\
        </div>\
        <div class='Grid-cell eo-row3 v-align h-align'>\
          <div id='tos'></div>\
        </div>\
        <div class='Grid-cell eo-row4 v-align h-align'>\
          <div class='agree-Grid v-align h-align'>\
            <div class='Grid-cell checkbox-cell'>\
              <input type='checkbox' id='eo-accept-checkbox' /> </div>\
            <div class='Grid-cell checkbox-text-cell' id='agree'></div>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>";
//
var overlay_settings = {
  'shturem': {
    'desktop': {
      'pin_button_article': function () {
        return e$('.catLogo');
      },
      'pin_button_front': function () {
        return e$('div#top_menu_block');
      },
      'placeLiveActions': function () {},
      'category_button_left_value': function () {
        return 10;
      },
      'button_left_value': function () {
        return e$('.catLogo').offset().left + 27;
      },
      'button_top_value': function () {
        return e$('.catLogo').offset().top + 11;
      },
      'pin-tutotial-article': '.eo-button',
      'pin-tutotial-category': '.eo-button'

    }
  },
  'actualic': {
    'mobile': {
      'pin_button_article': function () {
        return e$('.entry-header').find('.row').find('.small-12.medium-6.columns').eq(0);
      },
      'pin_button_front': function () {
        return e$('.site-header');
      },
      'pin_button_category': function () {
        return e$('.page-header');
      },
      'button_left_value': function () {
        return 9;
      },
      'button_top_value': function () {
        return e$('.entry-header').find('.row').find('.small-12.medium-6.columns').eq(0).offset().top + 5;
      },
      'category_button_left_value': function () {
        return 3;
      },
      'placeLiveActions': function () {},
      'pin-tutotial-article': '.menu-item.menu-item-type-taxonomy.menu-item-object-category.current-post-ancestor.menu-item-has-children',
      'pin-tutotial-category': '.menu-item.menu-item-type-taxonomy.menu-item-object-category.current-menu-item.menu-item-has-children.active.has-submenu',
      'pin-tutotial-front': '.front-page'
    },
    'desktop': {
      'pin_button_article': function () {
        return e$('.top-bar-right').find('ul').find('.menu-item.menu-item-type-taxonomy.menu-item-object-category.menu-item-has-children.has-submenu').find('ul');
      },
      'pin_button_front': function () {
        return e$('.site-header');
      },
      'pin_button_category': function () {
        return e$('.top-bar-right').find('ul').find('.menu-item.menu-item-type-taxonomy.menu-item-object-category.menu-item-has-children.has-submenu').find('ul');
      },
      'button_left_value': function () {
        return e$('#s').offset().left + e$('#s').width() * 0.87;
      },
      'button_top_value': function () {
        return 2;
      },
      'category_button_left_value': function () {
        return e$('#s').offset().left + e$('#s').width() * 0.87;
      },
      'placeLiveActions': function () {
        var startPoint = 206;
        var val_dic = {
          'article': function () {
            return e$(e$('.kipke_social_share.hide-for-print').get(0)).offset().left - 320;
          },
          'category-page': function () {
            return e$('#sidebar').offset().left;
          },
          'front-page': function () {
            return e$('.small-6.large-2.columns').eq(1).offset().left;
          }
        };
        var val = val_dic[document.overlay.pageType]();
        e$('#eo-live').css('left', val);
        e$('#eo-live .close-vocabulary').css('left', val - 58);
        var val = Math.max(startPoint - $(window).scrollTop(), 60);
        e$('#eo-live').css('top', val);
        e$('#eo-live .close-vocabulary').css('top', val + 180);
        $(window).scroll(function () {
          var val = Math.max(startPoint - $(window).scrollTop(), 60);
          e$('#eo-live').css('top', val);
          e$('#eo-live .close-vocabulary').css('top', val + 180);
        });
      },
      'pin-tutotial-article': '.menu-item.menu-item-type-taxonomy.menu-item-object-category.current-post-ancestor.menu-item-has-children',
      'pin-tutotial-category': '.menu-item.menu-item-type-taxonomy.menu-item-object-category.current-menu-item.menu-item-has-children.active.has-submenu',
      'pin-tutotial-front': '.front-page'
    }
  },
  'CH10': {}
};
PageOverlay = function () {
  if (window.localStorage.getItem('show_quiz_tutorial')) {
    e$('body').addClass('first-loading');
    console.log('adding class first-loading');
  };
  this.closeUnAnswered = function () {
    $(this.injector.elements).each(function (i, q) {
      if (q.qobj.element && q.qobj.element.is('.eo-active')) {
        q.qobj.closeUnanswered();
      }
    });
  };
  // stubs, just to make it "compile"
  this.setReporter = function (backend) {};
  this.fetchLinkStates = function (backend) {
    return Promise.resolve();
  };
  this.insertContent = function (element) {
    e$('body').append(element);
  };
  this.markLinks = function (links) {};
  this.hideButtons = function () {
    e$('.eo-button').addClass('hidden');
  };

  this.rejectTerms = function () {
    //Give the user astatus of guest
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('eo-user-name');
    window.location.reload();
    document.englishonBackend.rejectedTerms();
  };
  this.TermsDialog = function () {
    var messages = document.MESSAGES[document.englishonConfig.siteLanguage];
    e$('#tos').html(messages.AGREE_TO_TOS);
    e$('#agree').html(messages.AGREE);
    e$('#tos_link').attr('href', document.englishonBackend.base + '/tokens/terms_of_use');
    e$('#privacy_link').attr('href', document.englishonBackend.base + '/tokens/terms_of_use');
    if (document.englishonConfig.media == 'desktop') {
      if (document.englishonConfig.backendUrl == 'http://localhost:8080') {
        var menuTop = 0;
      } else {
        var menuTop = (screen.height - 540) / 2;
      }
      e$('#eo-dlg-terms').css({ top: menuTop + 'px', left: (screen.width - 360) / 2 + 'px' });
    }
  };
  this.getQuestionQuota = function () {
    var total = 0;
    e$(this.paragraphs).each(function (i, p) {
      var text = e$(p).text();
      var re = /[א-ת][א-ת'-]*"?[א-ת](?![א-ת])/g;
      var match = [];
      while ((match = re.exec(text)) !== null) {
        total += 1;
      }
    });
    return Math.max(1, Math.round(total / 100));
  };
  this.showTermsDialog = function (callback) {
    e$('#eo-accept-checkbox').off('change');
    e$('#eo-accept-checkbox').change(function (e) {
      // this will contain a reference to the checkbox   
      if (e.target.checked) {
        document.englishonBackend.acceptedTerms().then(function () {
          e$('#terms-container').addClass('hidden');
          e$('#eo-dlg-terms').addClass('hidden');
          e$('#eo-accept-checkbox').click();
          this.fetchQuestions().then(function () {
            callback();
          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
    e$('.terms-close').on('click', this.rejectTerms);
    e$('#terms-container').removeClass('hidden');
    e$('#eo-dlg-terms').removeClass('hidden');
  };
  this.openNoQuestionsDialog = function (message) {
    var dir = document.MESSAGES[document.englishonConfig.siteLanguage]['DIRECTION'];
    if (window.localStorage.getItem('got_no_questions_dialog')) {
      return;
    }
    no_questions_dlg = e$('<div>').addClass('no_questions_dlg').html(message + '<img src=' + staticUrl('img/button-logo.svg') + ' class = "no-questions-dlg-icon"/>').dialog({ auto_open: true, modal: true });
    e$('.no_questions_dlg').addClass(dir);

    //e$('.no_questions_dlg').parents('.ui-dialog').css({ 'maxWidth': 240 });

    window.localStorage.setItem('got_no_questions_dialog', true);
  };
};
PageOverlay.prototype.powerOn = function () {
  e$('body').removeClass('first-loading');
  console.log('remove class first-loading');
};
PageOverlay.prototype.showQuestions = function () {
  //a touch in shruerm css... increase space between lines
  e$('body').addClass('question-injected');
};
PageOverlay.prototype.hideQuestions = function () {
  e$('body').removeClass('question-injected');
};
ShturemFrontpageOverlay = function (parts) {
  this.parts = {};
  this.interacted = false;
  this.userAnswered = false;
  PageOverlay.call(this);
  e$.each(parts, function (url, para) {
    this.parts[url] = {
      url: url,
      paragraphs: e$(para),
      questions: null,
      injector: null
    };
  }.bind(this));
  this.settings = overlay_settings['shturem'][document.englishonConfig.media];
  this.tutorial_selector = this.settings['pin-tutotial-category'];
  this.pageType = 'front-page';
  e$('body').addClass('front-page');
  this.getLineDetails = function () {
    return [e$('.mainpn_text').offset().left, e$('.mainpn_text').width() - e$('.mainpn_text').css('padding-left').slice(0, 2)];
  };
  this.closeUnAnswered = function () {
    $.each(this.parts, function (url, part) {
      $(part.injector.elements).each(function (i, q) {
        if (q.qobj.element && q.qobj.element.is('.eo-active')) {
          q.qobj.closeUnanswered();
        }
      });
    });
  };
  this.fetchQuestions = function () {
    // send a separate request per part, (about 26)
    // results in many rounds-trips. this is wasteful
    // and should be fixed as soon as the backend
    // implements support for fetching multiple 'pages'
    // with a single query.
    var backend = document.englishonBackend;
    this.interacted = false;
    this.userAnswered = false;
    this.flag = '';
    //to enable fetch again after login
    e$.each(this.parts, function (url, part) {
      part.questions = [];
      if (part.injector) {
        part.injector.off();
      }
    });
    //remove only 'eo-injection-target' tags,not content
    //check if better do that native
    e$('.eo-injection-target').contents().unwrap();
    var promises = e$.map(this.parts, function (part, url) {
      return backend.getArticle(url, 1).then(function (questions) {
        part.questions = questions;
        if (questions.length) {
          console.log("url: " + url + "Num questions: " + questions.length);
        }
        part.injector = new Injector(part.paragraphs);
        part.injector.setQuestions(questions);
        return questions;
      }.bind(this));
    }.bind(this));
    return Promise.all(promises);
  };
  this.showQuestions = function () {
    PageOverlay.prototype.showQuestions.call(this);
    e$.each(this.parts, function (url, part) {
      if (part.injector) part.injector.on();
    });
  };
  this.hideQuestions = function () {
    PageOverlay.prototype.hideQuestions.call(this);
    e$.each(this.parts, function (url, part) {
      if (part.injector) part.injector.off();
    });
  };
  this.showButtons = function () {
    this.settings.pin_button_front().append(EnglishOnButton.element());
    e$('body').addClass('front');
    if (document.englishonConfig.isUser) {
      e$('.eo-button').on('click', EnglishOnButton.showMainMenu);
    } else {
      e$('.eo-button').on('click', document.firstTimeUser);
    }
    if (window.localStorage.getItem('show_quiz_tutorial') && !document.englishonConfig.editor) {
      this.openNoQuestionsDialog(document.MESSAGES[document.englishonConfig.siteLanguage].NO_QUESTIONS);
    }
    e$('.eo-button').css('left', this.settings.category_button_left_value());
  };
  this.powerOn = function () {
    PageOverlay.prototype.powerOn.call(this);
    if (!document.englishonConfig.isUser) {
      console.log('ShturemFrontpageOverlay............Marks for edited articles did not display. This user never turn on enlishon');
      return;
    }
    var promises = e$.map(this.parts, function (part, url) {
      url = url.toLowerCase();
      return document.englishonBackend.getArticle(url, 1).then(function (questions) {
        if (questions.length) {
          //if (true) {
          if (!e$(part.paragraphs[0]).parents('.mainpn').find('.mainpn_bottom').find('.category-icon').length) {
            e$(part.paragraphs[0]).parents('.mainpn').find('.mainpn_bottom').append(e$('<div>').addClass('category-icon'));
          }
        }
      });
    });
    this.showQuestions();
    document.questions_promise.resolve();
  };
  this.powerOff = function () {
    if (!document.englishonConfig.email) {
      e$('.category-icon').remove();
    }
    this.hideQuestions();
  };
};
// this one will probably have some code that can be factored up
// to a common superclass for single-article overlays


/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -*/

ShturemArticleOverlay = function (url, subtitle, bodytext) {
  this.url = url;
  this.subtitle = subtitle;
  this.bodytext = bodytext;
  this.paragraphs = [subtitle, bodytext];
  this.interacted = false;
  this.userAnswered = false;
  PageOverlay.call(this);
  this.settings = overlay_settings['shturem'][document.englishonConfig.media];
  this.tutorial_selector = this.settings['pin-tutotial-article'];
  this.limit = this.getQuestionQuota();
  this.pageType = 'article';
  this.showButtons = function () {
    // needs to be done here because registering event handlers
    // only works correctly after inserting the element into DOM.
    this.settings.pin_button_article().append(EnglishOnButton.element());
    if (document.englishonConfig.isUser) {
      e$('.eo-button').on('click', EnglishOnButton.showMainMenu);
    } else {
      e$('.eo-button').on('click', document.firstTimeUser);
    }
    e$('.eo-button').css({ 'left': this.settings.button_left_value(), 'top': this.settings.button_top_value() });
    setButtonInterval(function () {
      console.log('-------------setTimeOut button_top_value');
      e$('.eo-button').css({ 'top': document.overlay.settings.button_top_value() });
    }, 500, 20);
  };

  this.getLineDetails = function () {
    return [e$('.artText').offset().left, e$('.artText').width()];
  };
  this.fetchQuestions = function () {
    var backend = document.englishonBackend;
    //remove only 'eo-injection-target' tags,not content
    //check if better do that native
    e$('.eo-injection-target').contents().unwrap();
    this.questions = []; //to enable fetch again after login
    if (this.injector) {
      this.injector.off();
    }
    e$('.eo-injection-target').contents().unwrap();
    this.interacted = false;
    this.userAnswered = false;
    return backend.getArticle(this.url, this.limit).then(function (questions) {
      /*      for (var i = 0; i < questions.length; i++) {
              questions[i].location = Math.max(this.subtitle.textContent.indexOf(questions[i].context), this.bodytext.textContent.indexOf(questions[i].context))
            }
            questions.sort(function(q1, q2) {
              return q1.location - q2.location;
            });*/
      if (!document.englishonConfig.editor && !questions.length && window.localStorage.getItem('show_quiz_tutorial')) {
        //e$('.eo-button').off('click', EnglishOnButton.showMainMenu);
        this.openNoQuestionsDialog(document.MESSAGES[document.englishonConfig.siteLanguage].NO_QUESTIONS_SHTUREM_ARTICLE);
      }
      this.questions = questions;
      console.log("Num questions: " + questions.length);
      this.injector = new Injector(this.paragraphs);
      this.injector.setQuestions(questions);
      return questions;
    }.bind(this));
  };
  this.showQuestions = function () {
    PageOverlay.prototype.showQuestions.call(this);
    if (this.injector) this.injector.on();
  }.bind(this);
  this.hideQuestions = function () {
    PageOverlay.prototype.hideQuestions.call(this);
    if (this.injector) this.injector.off();
  }.bind(this);

  this.powerOff = function () {
    this.hideQuestions();
    if (document.eo_user) {
      document.eo_user.hideLiveActions();
    }
  };
  this.powerOn = function () {
    if (!document.englishonConfig.isUser) {
      return;
    }
    this.showQuestions();
    PageOverlay.prototype.powerOn.call(this);
    document.questions_promise.resolve();
    if (document.eo_user && e$('.eo-expired').length) {
      document.eo_user.showLiveActions();
    }
  };
};
CH10Overlay = function (url, subtitle, bodytext) {
  this.url = url;
  this.subtitle = subtitle;
  this.bodytext = bodytext;
  this.paragraphs = [subtitle, bodytext];
  this.interacted = false;
  this.userAnswered = false;
  PageOverlay.call(this);
  this.showButtons = function () {
    //e$('div#top_menu_block').append(EnglishOnButton.element);
    e$('ul.menu').append(EnglishOnButton.element);
    e$('.eo-button').on('click', EnglishOnButton.showMainMenu);
  };
  this.fetchQuestions = function () {
    var backend = document.englishonBackend;
    //remove only 'eo-injection-target' tags,not content
    //check if better do that native
    e$('.eo-injection-target').contents().unwrap();
    this.questions = []; //to enable fetch again after login
    if (this.injector) {
      this.injector.off();
    }
    this.interacted = false;
    this.userAnswered = false;
    return backend.getArticle(this.url, 5).then(function (questions) {
      // for (var i = 0; i < questions.length; i++) {
      //   questions[i].location = Math.max(this.subtitle.textContent.indexOf(questions[i].context), this.bodytext.textContent.indexOf(questions[i].context))
      // }
      // questions.sort(function(q1, q2) {
      //   return q1.location - q2.location;
      // });
      this.questions = questions;
      console.log("Num questions: " + questions.length);
      this.injector = new Injector(this.paragraphs);
      this.injector.setQuestions(questions);
      return questions;
    }.bind(this));
  };
  this.showQuestions = function () {
    if (this.injector) this.injector.on();
  }.bind(this);
  this.hideQuestions = function () {
    if (this.injector) this.injector.off();
  }.bind(this);
};
actualicCategoryOverlay = function (parts, category_url) {
  this.category_url = category_url.toLowerCase();;
  this.parts = parts;
  this.interacted = false;
  this.userAnswered = false;
  PageOverlay.call(this);
  this.settings = overlay_settings['actualic'][document.englishonConfig.media];
  this.tutorial_selector = this.settings['pin-tutotial-category'];
  if (location.pathname == '/') {
    this.pageType = 'front-page';
  } else {
    this.pageType = 'category-page';
  }
  e$('body').addClass('category-page');
  this.showButtons = function () {
    /*    if (location.pathname == '/') {
          this.settings.pin_button_front().append(EnglishOnButton.element().addClass('front-page'))
          e$('.site-header').find('.has-submenu').on('mouseenter', function() { e$('.front-page').hide(); })
          e$('.site-header').find('.has-submenu').on('mouseleave', function() { e$('.front-page').show(); })
          this.tutorial_selector = '.front-page';
        }*/
    this.settings.pin_button_category().append(EnglishOnButton.element());
    if (document.englishonConfig.isUser) {
      e$('.eo-button').on('click', EnglishOnButton.showMainMenu);
    } else {
      e$('.eo-button').on('click', document.firstTimeUser);
    }
    if (window.localStorage.getItem('show_quiz_tutorial') && !document.englishonConfig.editor) {
      this.openNoQuestionsDialog(document.MESSAGES[document.englishonConfig.siteLanguage].NO_QUESTIONS);
    }
    e$('.eo-button').css('left', this.settings.category_button_left_value());
  };
  this.fetchQuestions = function () {
    //just to enable compile
    return e$.Deferred().resolve().then(function () {
      return [];
    });
  };
  this.hideQuestions = function () {};
  this.showQuestions = function () {};
  this.powerOn = function () {
    PageOverlay.prototype.powerOn.call(this);
    if (!document.englishonConfig.isUser) {
      console.log('Marks for edited articles did not display. This user never turn on enlishon');
      return;
    }
    var promises = e$.map(this.parts, function (part, url) {
      url = url.toLowerCase();
      return document.englishonBackend.getArticle(url, 1).then(function (questions) {
        if (questions.length) {
          //if (true) {
          if (!e$(part).find('.category-icon').length) {
            e$(part).find('.show-for-large, p, .ttl').last().append(e$('<div>').addClass('category-icon'));
          }
        }
      });
    });
    document.questions_promise.resolve();
  };
  this.powerOff = function () {
    if (!document.englishonConfig.email) {
      e$('.category-icon').remove();
    }
  };
};
//----------------------------------------------------------------
//-----------------------------------------------------------------
//--------------------------------------------------------------
actualicOverlay = function (url, subtitle, bodytext) {
  this.url = url.toLowerCase();
  this.subtitle = subtitle;
  this.bodytext = bodytext;
  this.paragraphs = e$(bodytext).find('p').toArray().concat(subtitle);
  this.interacted = false;
  this.userAnswered = false;
  PageOverlay.call(this);
  this.settings = overlay_settings['actualic'][document.englishonConfig.media];
  this.tutorial_selector = this.settings['pin-tutotial-article'];
  this.pageType = 'article';
  this.getLineDetails = function () {
    return [e$('.entry-content').offset().left, e$('.entry-content').width()];
  };
  this.showButtons = function () {
    this.settings.pin_button_article().append(EnglishOnButton.element());
    if (document.englishonConfig.isUser) {
      e$('.eo-button').on('click', EnglishOnButton.showMainMenu);
    } else {
      e$('.eo-button').on('click', document.firstTimeUser);
    }
    /*    in an article page it was easiest to find top left values for button with js
        in a category page it was easiest to define top with css
    */
    e$('.eo-button').css({ 'left': this.settings.button_left_value(), 'top': this.settings.button_top_value() });
    //sometime the button_top_value is not computed correctly the first time in mobile. don't know the reason.
    setButtonInterval(function () {
      console.log('-------------setTimeOut button_top_value');
      e$('.eo-button').css({ 'top': document.overlay.settings.button_top_value() });
    }, 500, 20);
  };
  this.showQuestions = function () {
    PageOverlay.prototype.showQuestions.call(this);
    if (this.injector) {
      this.injector.on();
    }
  }.bind(this);
  this.hideQuestions = function () {
    PageOverlay.prototype.hideQuestions.call(this);
    if (this.injector) this.injector.off();
  }.bind(this);

  this.fetchQuestions = function () {
    e$('.eo-injection-target').contents().unwrap();
    var backend = document.englishonBackend;
    this.questions = []; //to enable fetch again after login
    if (this.injector) {
      this.injector.off();
    }
    //remove only 'eo-injection-target' tags,not content
    //check if better do that native
    e$('.eo-injection-target').contents().unwrap();
    this.interacted = false;
    this.userAnswered = false;
    this.limit = this.getQuestionQuota();
    return backend.getArticle(this.url, this.limit).then(function (questions) {
      if (!document.englishonConfig.editor && !questions.length && window.localStorage.getItem('show_quiz_tutorial')) {
        //e$('.eo-button').off('click', EnglishOnButton.showMainMenu);
        this.openNoQuestionsDialog(document.MESSAGES[document.englishonConfig.siteLanguage].NO_QUESTIONS_ARTICLE);
      }
      this.questions = questions;
      console.log("Num questions: " + questions.length);
      this.injector = new Injector(this.paragraphs);
      this.injector.setQuestions(questions);
      return questions;
    }.bind(this));
  };
  this.powerOn = function () {
    if (!document.englishonConfig.isUser) {
      return;
    }
    this.showQuestions();
    PageOverlay.prototype.powerOn.call(this);
    document.questions_promise.resolve();
    if (document.eo_user && e$('.eo-expired').length) {
      document.eo_user.showLiveActions();
    }
  };
  this.powerOff = function () {
    this.hideQuestions();
    if (document.eo_user) {
      document.eo_user.hideLiveActions();
    }
  };
};
//
ScraperFactory = function (location) {
  this.isHebrew = function (str) {
    var isHebrewVar = false;
    var array = str.split('');
    e$(array).each(function (i, c) {
      isHebrewVar = isHebrewVar || c.charCodeAt(0) >= 1488 && c.charCodeAt(0) <= 1514;
    });
    return isHebrewVar;
  };
  if (location.host === 'shturem.net' || location.host === 'www.shturem.net') {
    if (location.pathname === '/' || location.pathname === '/index.php' && location.search === '') return new ShturemFrontPageScraper();
    if (location.pathname === '/index.php' && location.search.startsWith('?section=news&id=')) return new ShturemArticleScraper();
  }
  if (location.host === 'www.englishon.org') {
    if (location.pathname === '/hidden/shturem.html') return new EnglishonArticleScraper();
  }
  if (location.host === 'www.ch10.co.il') {
    return new CH10Scraper();
  }
  if (location.host === 'actualic.co.il') {
    if (location.pathname.startsWith('/category/') || location.pathname == '/') {
      return new actualicCategoryScraper();
    } else if (this.isHebrew(decodeURIComponent(location.pathname))) {
      return new actualicScraper();
    }
  }
};

var actualicScraper = function () {
  this.getHost = function () {
    return 'actualic.co.il';
  };

  this.scrape = function () {
    url = ('http://actualic.co.il' + location.pathname + location.search).replace(/#.*$/, '');
    var subtitle = e$('.entry-content').find('h2');
    var bodytext = e$('.entry-content')[0];
    return new actualicOverlay(url, subtitle, bodytext);
  };
};
var actualicCategoryScraper = function () {
  this.getHost = function () {
    return 'actualic.co.il';
  };

  this.scrape = function () {
    var parts = {};
    e$('.kipke_post_block').each(function (i, para) {
      if (e$(para).find('a').length) {
        var url = e$(para).find('a')[0].href;
      } else {
        var url = e$(para).parent()[0].href;
      }
      parts[url] = para;
    });
    var category_url = window.location.pathname;
    return new actualicCategoryOverlay(parts, category_url);
  };
};

var CH10Scraper = function () {
  this.getHost = function () {
    return 'www.ch10.co.il';
  };

  this.scrape = function () {
    url = ('http://www.ch10.co.il' + location.pathname + location.search).replace(/#.*$/, '');
    var subtitle = e$('.header_txt').find('.excerpt');
    var bodytext = e$('.entry-content');
    // Shturem article bodies are not divided internally to <p>s.
    // they're just blobs of text with the occasional double <br>.
    return new CH10Overlay(url, subtitle, bodytext);
  };
};

var ShturemArticleScraper = function () {
  this.getHost = function () {
    return 'www.shturem.net';
  };

  this.scrape = function () {
    url = ('http://www.shturem.net' + location.pathname + location.search).replace(/#.*$/, '');
    var subtitle = e$('span.artSubtitle')[0];
    var bodytext = e$('div.artText')[0];
    // Shturem article bodies are not divided internally to <p>s.
    // they're just blobs of text with the occasional double <br>.
    return new ShturemArticleOverlay(url, subtitle, bodytext);
  };
};

var ShturemFrontPageScraper = function () {
  this.getHost = function () {
    return 'www.shturem.net';
  };

  this.scrape = function () {
    var parts = {};
    e$('td.mainpn_text').each(function (i, para) {
      var url = e$(para).closest('table').find('td.mainpn_bottom a')[0].href;
      var fixed_url = 'http://www.shturem.net' + url.substr(url.indexOf('/index.php'));
      parts[fixed_url] = para;
      // hack to make answers visible
      e$(para).attr('style', 'overflow: visible;');
    });
    return new ShturemFrontpageOverlay(parts);
  };
};

var EnglishonArticleScraper = function () {
  this.getHost = function () {
    return 'www.englishon.org';
  };

  this.scrape = function () {
    url = ('http://www.shturem.net' + location.pathname + location.search).replace(/#.*$/, '');
    var subtitle = e$('span.artSubtitle')[0];
    var bodytext = e$('div.artText')[0];
    // Shturem article bodies are not divided internally to <p>s.
    // they're just blobs of text with the occasional double <br>.
    return new ShturemArticleOverlay(url, subtitle, bodytext);
  };
};
//
/* Speaks target-language phrases aloud.

To speak a phrase, you need to:

- query Amazon Translate for a URL (only the server can do this because
  we wont't tell the client our amazon Data Marketplace secret)
- fetch that URL
- decode the `arraybuffer` into an `AudioBuffer`
- connect it to an `AudioContext` and `.start()`

Since the fetching process takes a few seconds, and we'd like the phrase
to be talked aloud immediately when the user solves a question, we introduce
a prefetch mechanism:

- when you expect to need a phrase to be talked aloud soon (e.g. when user
  first touches a question), call `Speaker.fetch(language, phrase)`, which will make the
  requests to fetch the audio and cache it.

- when you need a phrase talked aloud, call `Speaker.speak(language, phrase)`. It works
  whether you called `fetch()` before or not, but latency will be much lower if you did.

Technically, `fetch()` returns a `Deferred` that return an `AudioBuffer`, and keeps a cache
`.cache` which is a dictionary from `string` to this `Deferred`, so if you call it again you'll
get the benefit of work already done. `speak()` simply calls `fetch()` and plays the result.
 */
var Speaker = new function () {
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioContext = new AudioContext();
  var gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  this.cache = {};

  this.toggle = function (enable) {
    gainNode.gain.value = enable ? 100 : 0;
  };

  this.changeVolume = function (value) {
    gainNode.gain.value = value;
  };

  this.fetch = function (language, phrase) {
    var key = language + '/' + phrase;
    if (this.cache[key]) {
      return this.cache[key];
    }
    var r = e$.Deferred();

    // can't use jQuery because it doesn't support arraybuffer yet
    var xhr = new XMLHttpRequest();
    xhr.open('GET', document.englishonBackend.base + "/tts/speak/" + language + '/' + phrase, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (e) {
      audioContext.decodeAudioData(xhr.response, r.resolve.bind(r));
    };
    xhr.onerror = function (e) {
      console.log('Error pronouncing phrase "' + key + '": ' + e.error);
      console.log(e);
    };
    xhr.send();
    this.cache[key] = r;
    return r;
  };

  this.speak = function (language, phrase) {
    this.fetch(language, phrase).then(this.playBuffer.bind(this));
  };

  this.playBuffer = function (audioBuffer) {
    var audioSourceNode = audioContext.createBufferSource();
    audioSourceNode.buffer = audioBuffer;
    audioSourceNode.playbackRate.value = 0.9;
    audioSourceNode.connect(gainNode);
    audioSourceNode.start();
  };
}();

// var context = AudioContext();
// source= context.createBufferSource();
// context.nodes.push(source);
// source.buffer = Audiobuffer;
// source.playbackRate.value = 1.5;
//
window.englishon_chat = function () {
  var fc_CSS = document.createElement('link');fc_CSS.setAttribute('rel', 'stylesheet');var fc_isSecured = window.location && window.location.protocol == 'https:';var fc_lang = document.getElementsByTagName('html')[0].getAttribute('lang');var fc_rtlLanguages = ['ar', 'he'];var fc_rtlSuffix = fc_rtlLanguages.indexOf(fc_lang) >= 0 ? '-rtl' : '';fc_CSS.setAttribute('type', 'text/css');fc_CSS.setAttribute('href', (fc_isSecured ? 'https://d36mpcpuzc4ztk.cloudfront.net' : 'http://assets1.chat.freshdesk.com') + '/css/visitor' + fc_rtlSuffix + '.css');document.getElementsByTagName('head')[0].appendChild(fc_CSS);var fc_JS = document.createElement('script');fc_JS.type = 'text/javascript';fc_JS.defer = true;fc_JS.src = (fc_isSecured ? 'https://d36mpcpuzc4ztk.cloudfront.net' : 'http://assets.chat.freshdesk.com') + '/js/visitor.js';(document.body ? document.body : document.getElementsByTagName('head')[0]).appendChild(fc_JS);window.livechat_setting = 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJlbmdsaXNob24uZnJlc2hkZXNrLmNvbSIsInByb2R1Y3RfaWQiOm51bGwsIm5hbWUiOiJlbmdsaXNob24iLCJ3aWRnZXRfZXh0ZXJuYWxfaWQiOm51bGwsIndpZGdldF9pZCI6ImVjNGQ3MzZkLTIxMTctNGRiNi1iMjAwLTkyMmIyODlhMjk0YiIsInNob3dfb25fcG9ydGFsIjpmYWxzZSwicG9ydGFsX2xvZ2luX3JlcXVpcmVkIjpmYWxzZSwibGFuZ3VhZ2UiOiJlbiIsInRpbWV6b25lIjoiRWFzdGVybiBUaW1lIChVUyAmIENhbmFkYSkiLCJpZCI6MzMwMDAwMjUyNzksIm1haW5fd2lkZ2V0IjoxLCJmY19pZCI6IjZiODQyYjkxOTE4Zjg0MGNmZWEzOGEyYjc4NjY3MjhiIiwic2hvdyI6MSwicmVxdWlyZWQiOjIsImhlbHBkZXNrbmFtZSI6ImVuZ2xpc2hvbiIsIm5hbWVfbGFiZWwiOiJOYW1lIiwibWVzc2FnZV9sYWJlbCI6Ik1lc3NhZ2UiLCJwaG9uZV9sYWJlbCI6IlBob25lIiwidGV4dGZpZWxkX2xhYmVsIjoiVGV4dGZpZWxkIiwiZHJvcGRvd25fbGFiZWwiOiJEcm9wZG93biIsIndlYnVybCI6ImVuZ2xpc2hvbi5mcmVzaGRlc2suY29tIiwibm9kZXVybCI6ImNoYXQuZnJlc2hkZXNrLmNvbSIsImRlYnVnIjoxLCJtZSI6Ik1lIiwiZXhwaXJ5IjoxNTA0Njk3NTQxMDAwLCJlbnZpcm9ubWVudCI6InByb2R1Y3Rpb24iLCJlbmRfY2hhdF90aGFua19tc2ciOiJUaGFuayB5b3UhISEiLCJlbmRfY2hhdF9lbmRfdGl0bGUiOiJFbmQiLCJlbmRfY2hhdF9jYW5jZWxfdGl0bGUiOiJDYW5jZWwiLCJzaXRlX2lkIjoiNmI4NDJiOTE5MThmODQwY2ZlYTM4YTJiNzg2NjcyOGIiLCJhY3RpdmUiOjEsInJvdXRpbmciOm51bGwsInByZWNoYXRfZm9ybSI6MSwiYnVzaW5lc3NfY2FsZW5kYXIiOm51bGwsInByb2FjdGl2ZV9jaGF0IjowLCJwcm9hY3RpdmVfdGltZSI6bnVsbCwic2l0ZV91cmwiOiJlbmdsaXNob24uZnJlc2hkZXNrLmNvbSIsImV4dGVybmFsX2lkIjpudWxsLCJkZWxldGVkIjowLCJtb2JpbGUiOjEsImFjY291bnRfaWQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDE3LTA4LTA2VDExOjM0OjE3LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxNy0wOC0wNlQxMzoyMTo1Mi4wMDBaIiwiY2JEZWZhdWx0TWVzc2FnZXMiOnsiY29icm93c2luZ19zdGFydF9tc2ciOiJZb3VyIHNjcmVlbnNoYXJlIHNlc3Npb24gaGFzIHN0YXJ0ZWQiLCJjb2Jyb3dzaW5nX3N0b3BfbXNnIjoiWW91ciBzY3JlZW5zaGFyaW5nIHNlc3Npb24gaGFzIGVuZGVkIiwiY29icm93c2luZ19kZW55X21zZyI6IllvdXIgcmVxdWVzdCB3YXMgZGVjbGluZWQiLCJjb2Jyb3dzaW5nX2FnZW50X2J1c3kiOiJBZ2VudCBpcyBpbiBzY3JlZW4gc2hhcmUgc2Vzc2lvbiB3aXRoIGN1c3RvbWVyIiwiY29icm93c2luZ192aWV3aW5nX3NjcmVlbiI6IllvdSBhcmUgdmlld2luZyB0aGUgdmlzaXRvcuKAmXMgc2NyZWVuIiwiY29icm93c2luZ19jb250cm9sbGluZ19zY3JlZW4iOiJZb3UgaGF2ZSBhY2Nlc3MgdG8gdmlzaXRvcuKAmXMgc2NyZWVuLiIsImNvYnJvd3NpbmdfcmVxdWVzdF9jb250cm9sIjoiUmVxdWVzdCB2aXNpdG9yIGZvciBzY3JlZW4gYWNjZXNzICIsImNvYnJvd3NpbmdfZ2l2ZV92aXNpdG9yX2NvbnRyb2wiOiJHaXZlIGFjY2VzcyBiYWNrIHRvIHZpc2l0b3IgIiwiY29icm93c2luZ19zdG9wX3JlcXVlc3QiOiJFbmQgeW91ciBzY3JlZW5zaGFyaW5nIHNlc3Npb24gIiwiY29icm93c2luZ19yZXF1ZXN0X2NvbnRyb2xfcmVqZWN0ZWQiOiJZb3VyIHJlcXVlc3Qgd2FzIGRlY2xpbmVkICIsImNvYnJvd3NpbmdfY2FuY2VsX3Zpc2l0b3JfbXNnIjoiU2NyZWVuc2hhcmluZyBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUgIiwiY29icm93c2luZ19hZ2VudF9yZXF1ZXN0X2NvbnRyb2wiOiJBZ2VudCBpcyByZXF1ZXN0aW5nIGFjY2VzcyB0byB5b3VyIHNjcmVlbiAiLCJjYl92aWV3aW5nX3NjcmVlbl92aSI6IkFnZW50IGNhbiB2aWV3IHlvdXIgc2NyZWVuICIsImNiX2NvbnRyb2xsaW5nX3NjcmVlbl92aSI6IkFnZW50IGhhcyBhY2Nlc3MgdG8geW91ciBzY3JlZW4gIiwiY2Jfdmlld19tb2RlX3N1YnRleHQiOiJZb3VyIGFjY2VzcyB0byB0aGUgc2NyZWVuIGhhcyBiZWVuIHdpdGhkcmF3biAiLCJjYl9naXZlX2NvbnRyb2xfdmkiOiJBbGxvdyBhZ2VudCB0byBhY2Nlc3MgeW91ciBzY3JlZW4gIiwiY2JfdmlzaXRvcl9zZXNzaW9uX3JlcXVlc3QiOiJBZ2VudCBzZWVrcyBhY2Nlc3MgdG8geW91ciBzY3JlZW4gIn19';
};
//
Tour = new function () {
  this.progressTutorial = function () {
    if (e$('body').hasClass('www-shturem-net')) {
      e$('#eo-live').css({ 'top': '50px' });
    }
    e$('#eo-banner').hide();
    e$('#eo-live').removeClass('vocabulary-open');
    e$('#eo-live').addClass('eo-live-maximize');
    e$('#vocabulary').addClass('hidden');
    e$('#eo-live-main').removeClass('hidden');
    clearTimeout(document.eo_user.setTimeOut);
    e$(document).off('click', document.eo_user.minimize);
    steps = [];
    if (document.englishonConfig.media === 'mobile') {
      e$('.contento_Container').hide(); //hide the other banner area in actualic
      steps.push(new step('#milotrage top', 'progress1------', 'מספר המילים שצברתי', 'progress_' + 0));
      steps.push(new step('#days-pannel top', 'progress2------', 'הימים שתרגלתי ברציפות השבוע', 'progress_' + 1));
      steps.push(new step('#sr top', 'progress3------', 'לחץ בעיגול לרשימת המילים לתירגול', 'progress_' + 2));
    } else {
      steps.push(new step('#milotrage right', 'progress1------', 'מספר המילים שצברתי', 'progress_' + 0));
      steps.push(new step('#days-pannel right', 'progress2------', 'הימים שתרגלתי ברציפות השבוע', 'progress_' + 1));
      steps.push(new step('#sr right', 'progress3------', 'לחץ בעיגול לרשימת המילים לתירגול', 'progress_' + 2));
    }
    this.initTutorial(steps);
  };
  this.welcomeTutorial = function () {
    if (location.pathname == '/') {
      return;
    }
    steps = [];
    e$(document.overlay.tutorial_selector).find('.eo-logo').addClass('eo-button-tour');
    steps.push(new step('.eo-button-tour right', 'ברוכים הבאים לאינגלישון', 'למד אנגלית ללא עלות - הדרכה למשתמש', 'welcome_' + 0, 0, '.eo-logo click'));
    //steps.push(new step('#eo-power-switch left', 'כפתור הפעלה', 'הפעל', 'welcome_' + 1));
    this.initTutorial(steps);
    e$(".eo-button").on('mouseenter', function () {
      if (window.tourTimeout) {
        clearTimeout(window.tourTimeout);
      }
      document.tour.start();
      window.tourTimeout = setTimeout(function () {
        if (e$('.shepherd-open').length && !e$('[data-id="welcome_0"]').hasClass('shepherd-open')) {
          return;
        }
        if (!document.querySelectorAll(".shepherd:hover").length && e$('[data-id="welcome_0"]').hasClass('shepherd-open')) {
          document.tour.hide();
        }
      }, 3000);
    });
  };
  this.signinTutorial = function () {
    if (document.englishonConfig.media === 'mobile') {
      steps = [];
      this.initTutorial(steps);
      return;
    }
    steps = [];
    document.eoDialogs.toggleDialog('eo-dlg-login', 'show');
    window.history.pushState({ 'elementToShow': 'eo-dlg-login' }, '');
    steps.push(new step('#eo-dlg-login right', '', 'הירשם/התחבר לשמירת ההתקדמות בחינם!', 'login2'));
    this.initTutorial(steps);
  };
  this.quizTutorial = function () {
    if (document.englishonConfig.media === 'mobile') {
      e$('.contento_Container').hide(); //hide the other banner area in actualic
    }
    if (!e$('.eo-question').length) {
      window.localStorage.setItem('show_quiz_tutorial', true);
      var dir = document.MESSAGES[document.englishonConfig.siteLanguage]['DIRECTION'];
      var message = document.MESSAGES[document.englishonConfig.siteLanguage].NO_QUESTIONS;
      no_questions_dlg = e$('<div>').addClass('no_questions_dlg ' + dir).html(message + '<img src=' + staticUrl('img/button-logo.svg') + ' class = "no-questions-dlg-icon"/>').dialog({ auto_open: true, modal: true });
      e$('.no_questions_dlg').addClass(dir);
      steps = [];
      this.initTutorial(steps);
      return;
    }
    //this is useful to check if user in the middle of quiz tutorial even when he open question and tutorial hide 
    window.localStorage.setItem('quiz_tutorial_not_finished', true);
    if (document.overlay.pageType != 'article' && !e$('body').hasClass('www-shturem-net')) {
      window.localStorage.setItem('show_quiz_tutorial', true);
      e$('.category-icon').eq(0).click();
    }
    e$('.eo-question').eq(0).addClass('highlighted');
    setTimeout(function () {
      e$('.eo-question').eq(0).removeClass('highlighted');
    }, 10000);
    steps = [];
    e$('.eo-question').slice(0, 1).each(function (i, q) {
      var step_title = i == 0 ? 'לומדים אנגלית תוך כדי גלישה' : 'מעולה! סיים לענות על כל השאלות במאמר';
      if (e$(q).hasClass('eo-answered') || e$(q).hasClass('eo-expired')) {
        e$(q).addClass('hint_' + i);
        var text = 'לחץ כדי לראות את התרגום';
      } else {
        e$(q).find('.eo-hint').addClass('hint_' + i);
        var text = 'לחץ ובחר את המילה המתאימה';
      }
      steps.push(new step('.hint_' + i + ' bottom', step_title, text, 'question_' + i));
      //steps.push(new step('.question_' + i + ' .eo-option' + ' left', step_title, 'לחץ ובחר את המילה המתאימה', 'open_question_' + i));
    });
    this.initTutorial(steps);
  };
  this.initTutorial = function (steps) {
    if (document.tour) {
      document.tour.hide();
    }
    document.tour = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd shepherd-theme-arrows shepherd-has-cancel-link rtl',
        showCancelLink: true
      }
    });
    for (i = 0; i < steps.length; i++) {
      buttons = [];
      if (steps[i].id == 'welcome_0') {
        buttons.push({
          text: 'הפעל',
          classes: 'shepherd-button-primary',
          action: function () {
            document.firstTimeUser();
          }
        });
      }
      //add exit button to first step
      if (false) {
        buttons.push({
          text: 'יציאה',
          classes: 'shepherd-button-secondary',
          action: function () {
            return document.tour.hide();
          }
        });
      }
      // no back button at the start
      if (i > 0 && steps[i].id != 'welcome_1') {
        buttons.push({
          text: 'חזור',
          classes: 'shepherd-button-secondary',
          action: function () {
            if (document.tour.getCurrentStep().id === 'welcome_1' || document.tour.getCurrentStep().id === 'login2') {
              document.eoDialogs.hideDialogs();
            }
            if (document.tour.getCurrentStep().id.slice(0, 14) == 'open_question_') {
              document.overlay.injector.elements.filter(function (q) {
                if (q.original.text() == e$('.eo-question').eq(0).find('.eo-hint').text()) return true;
              })[0].qobj.closeUnanswered();
              //document.overlay.injector.elements[0].qobj.closeUnanswered();
            }
            return document.tour.back();
          }
        });
      }
      // no next button on last step
      if (i < steps.length - 1 && steps[i].id != 'welcome_0' || steps[i].id == 'question_0') {
        buttons.push({
          text: 'המשך',
          classes: 'shepherd-button-primary',
          action: function () {
            if (document.tour.getCurrentStep().id == 'question_0') {
              //document.overlay.injector.elements.filter(function(q) { if (q.original.text() == e$('.eo-question').eq(0).find('.eo-hint').text()) return true })[0].qobj.closeUnanswered();
              window.localStorage.setItem('leave_quesion_open', true);
              e$('.eo-question').eq(0).find('.eo-hint').click();
            }
            if (document.tour.getCurrentStep().id === 'login') {
              document.eoDialogs.toggleDialog('eo-dlg-login', 'show');
              window.history.pushState({ 'elementToShow': 'eo-dlg-login' }, '');
              e$('#eo-mail-login-btn').on('click', function () {
                document.tour.hide();
              });
            }
            return document.tour.next();
          }
        });
      }
      var tetherOptionsDic = {};
      if (steps[i].id.slice(0, 9) === 'question_') {
        if (document.englishonConfig.media === 'mobile') {
          tetherOptionsDic.offset = '-20px 0px';
        } else {
          tetherOptionsDic.offset = '0px 0px';
        }
        //the offset is good, but it is not adjusting with scrolling.
        //in mobile css is differ. the offset is a must.
      }
      if (steps[i].id === 'welcome_1') {
        tetherOptionsDic.offset = '0px 20px';
      }
      document.tour.addStep(steps[i].id, {
        text: steps[i].text,
        title: steps[i].title,
        attachTo: steps[i].attachTo,
        //classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        buttons: buttons,
        advanceOn: steps[i].advanceOn,
        tetherOptions: tetherOptionsDic,
        when: {
          show: function () {
            e$('.shepherd-cancel-link').on('click', function () {
              if (e$('body').hasClass('www-shturem-net')) {
                e$('#eo-live').css({ 'top': '10px' });
              }
            });
            if (document.tour.getCurrentStep().id.indexOf('progress') != -1) {
              e$('.shepherd-cancel-link').on('click', function () {
                e$(document).on('click', document.eo_user.minimize);
                console.log('<<<<<<<>>>>>>>>>>>>>>');
              });
            }
            if (document.tour.getCurrentStep().id == 'login') {
              e$('.eo-button').one('click', function () {
                document.tour.hide();
                window.localStorage.removeItem('quiz_tutorial_not_finished');
              });
            }
            if (document.tour.getCurrentStep().id == 'login2') {
              window.localStorage.removeItem('quiz_tutorial_not_finished');
            };
            if (document.tour.getCurrentStep().id === 'progress_2') {
              var closeTutorial = function () {
                document.tour.hide();
                e$(document).on('click', document.eo_user.minimize);
                e$('#sr').off('click', closeTutorial);
              };
              e$('#sr').on('click', closeTutorial);
            }
            if (document.tour.getCurrentStep().id === 'live_actions') {
              if (!e$('#eo-live:not(.hidden)').length) {
                document.eo_user.showLiveActions();
              }
            }
            if (document.tour.getCurrentStep().id.slice(0, 9) == 'question_' || document.tour.getCurrentStep().id.slice(0, 14) == 'open_question_') {
              var val = e$('.hint_0').offset().top;
              window.scrollTo(0, val - 170);
            }
            if (document.tour.getCurrentStep().id.slice(0, 14) == 'open_question_') {
              //open the first question only
              e$('.eo-question').eq(0).find('.eo-hint').click();
              //force the tutoriol box to adjust options list after it opened
              window.scrollBy(0, 1);
              //this line didn't work. check it. for now- fix it into injectior
              //e$(document).off('click',document.overlay.injector.elements[0].qobj.open_question_handler);
            }
            if (document.tour.getCurrentStep().id.indexOf('question_') == -1) {
              //window.scrollTo(0, 0);
            }
            if (document.tour.getCurrentStep().id == 'question_0') {
              //the scrollBy intended to remove an unneeded offset which added by shepherd
              window.scrollBy(0, 1);
              setTimeout(function () {
                window.scrollBy(0, 1);
              }, 300);
              setTimeout(function () {
                window.scrollBy(0, 1);
              }, 600);
              setTimeout(function () {
                window.scrollBy(0, 1);
              }, 1000);
              var questionAnswered = function (e) {
                e.preventDefault();
                e$('.eo-question .eo-correct_option span').off('click', questionAnswered);
                document.tour.hide();
              };
              var questionOpened = function () {
                document.tour.hide();
              };
              e$('.eo-question .eo-hint').on('click', e$('.eo-question .eo-hint'), questionOpened);
              //e$('.eo-question .eo-correct_option span').on('click', e$('.eo-question .eo-correct_option span'), questionAnswered);
              e$('.shepherd-cancel-link').on('click', function () {
                window.localStorage.removeItem('quiz_tutorial_not_finished');
                //e$('.eo-question .eo-hint').off('click', questionOpened);
                //e$('.eo-question .eo-correct_option span').off('click', questionAnswered);
              });
              if (document.englishonConfig.media === 'mobile') {
                var element = e$('<div>').addClass('tutorial-point').css('left', (e$('.eo-question').eq(0).offset().left + e$('.eo-question').eq(0).width() / 2 - 15) * 100 / e$('#eo-live').width() + '%');
                e$('.shepherd-content').prepend(element);
              }
            }
            if (window.location.host == 'actualic.co.il') {
              //??? unneeded line?
              document.overlay.settings.placeLiveActions();
            }
          }
        }
      });
    }
  };
}();
var step = function (attachTo, title, text, id, scroll_value = 0, advanceOn = null) {
  this.id = id;
  this.attachTo = attachTo;
  this.title = '<img src=' + staticUrl('img/menu-logotype.svg') + ' class = "tutorial-logo"/><img src=' + staticUrl('img/button-logo.svg') + ' class = "tutorial-icon"/>';
  this.text = text;
  this.advanceOn = advanceOn;
  this.scroll_value = scroll_value;
};
//
// **************
// Initialization
// **************
//USE OF e$ IS IMPORTANT TO PREVENT PROBLEMS IN SITES WHICH HAVE THEIR OWN JQUERY FILE
window.e$ = jQuery.noConflict(true);
document.resources_promise = e$.Deferred();
document.loaded_promise = e$.Deferred();
document.questions_promise = e$.Deferred();
document.dic_promise = e$.Deferred();
//document.show_signin_tutorial = e$.Deferred();
function englishon() {
  if (e$('#developement-only-version').length) {
    window.staticUrl = function (resource) {
      return 'http://www.englishon.org/staging/' + resource;
    };
  } else {
    window.staticUrl = function (resource) {
      return 'http://www.englishon.org/v1/' + resource;
    };
  }
  //function to retriave info about the browser
  browserInfo = function () {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return { 'browser': M[0], 'version': M[1] };
  }();
  document.browserInfo = browserInfo;
  var check_media = function () {
    if (window.matchMedia("(min-width:1050px)").matches) return 'desktop';
    return 'mobile';
  };
  var media = check_media();
  //Restrict none chrome browsers or chrome versions older than 49
  if (browserInfo.browser != 'Chrome')
    //&& (browserInfo.browser != 'Firefox' || media != 'desktop')
    {
      console.log('BROWSER NOT SUPPORTED.');
      return;
    }
  //THIS LINE IS TEMP
  /* if (window.location.host == 'actualic.co.il' &&
     media != 'desktop' &&
     !e$('#developement-only-version').length) {
     return;
   } */
  /*   if (window.location.host == 'actualic.co.il' &&
      media != 'desktop' &&
      decodeURIComponent(window.location.pathname)!= '/רפואת-ילדים-עולם-ומלואו/') {
      return;
    }*/
  sites = ['shturem.net', 'www.shturem.net', 'actualic.co.il', 'www.englishon.org', 'www.kolhazman.co.il'];
  if (sites.indexOf(window.location.host) == -1) {
    return;
  }
  //THIS LINE IS TEMP
  if ((window.location.host == 'shturem.net' || window.location.host == 'www.shturem.net') && media != 'desktop') {
    return;
  }
  if ((window.location.host == 'shturem.net' || window.location.host == 'www.shturem.net') && !e$('#developement-only-version').length) {
    article_id = Number(window.location.search.substr(window.location.search.indexOf('id=') + 3));
    if (article_id < 91251 || article_id > 91551) {
      return;
    }
  }

  console.log('Browser info: ' + browserInfo.browser + ' ' + browserInfo.version);
  var DEFAULT_BACKEND_URL = 'https://englishon.herokuapp.com';
  if (document.__englishon__) {
    console.log("EnglishOn already loaded");
    return;
  }
  document.__englishon__ = true;
  var defaults = {
    'token': null,
    'backendUrl': DEFAULT_BACKEND_URL,
    'isActive': false,
    'targetLanguage': I18N.DEFAULT_TARGET_LANGUAGE,
    'enableSound': true,
    'volume': 100,
    'enableTutorial': true,
    'editor': false,
    'isUser': false,
    'siteLanguage': I18N.SITE_LANGUAGE,
    'media': media,
    'email': undefined
  };
  // Store
  configStorage.get(defaults).then(function (config) {
    document.englishonConfig = config;
    e$('body').addClass('eo-language-' + config.targetLanguage);
    if (config.enableTutorial) {
      startTutorial();
    }
    if (document.englishonConfig.isUser) {
      var auth = new Authenticator(config.backendUrl);
      return auth.login(config.token).then(function (token) {
        configStorage.set({ token: token });
        return new HerokuBackend(config.backendUrl, token);
      });
    } else {
      return new HerokuBackend(config.backendUrl, 'NON_USER');
    }
  }).then(function (backend) {
    document.englishonBackend = backend;
    document.resources_promise.resolve();
  }).then(function () {
    if (JSON.parse(document.englishonConfig.editor)) {
      return document.englishonBackend.fetchDictionary().then(function (eo_dictionary) {
        document.eo_dictionary = eo_dictionary.dictionary;
        document.dic_promise.resolve();
      });
    }
  });
}
var startTutorial = function () {
  // e$('body').addClass('eo-tutorial').addClass('eo-tutorial-1');
  // var onPickLanguage = function() {
  //   e$('.eo-language_picker-option').off('click', onPickLanguage);
  //   e$('body').removeClass('eo-tutorial-1').addClass('eo-tutorial-2');
  //   // in case questions are still hidden, keep trying
  //   var timer = setInterval(function() {
  //     var questions = e$('.eo-question');
  //     if (questions.length > 0) {
  //       questions.first().addClass('eo-first_question');
  //       var onOpenQuestion = function() {
  //         e$('.eo-hint').off('click', onOpenQuestion);
  //         e$('body').removeClass('eo-tutorial-2').removeClass('eo-tutorial');
  //         configStorage.set({ enableTutorial: false });
  //       };
  //       e$('.eo-hint').click(onOpenQuestion);
  //       clearInterval(timer);
  //     }
  //   }, 100);
  // };
  // e$('.eo-language_picker-option').click(onPickLanguage);
};
// **********
// Dictionary
// **********
function languageOf(char) {
  if (typeof char == 'string') {
    char = char.charCodeAt(0);
  }
  if (char >= 65 && char <= 90) return 'en';
  if (char >= 97 && char <= 122) return 'en';
  if (char >= 1488 && char <= 1514) return 'he';
}

function parseDictionary(data) {
  var dict = buckets.MultiDictionary();
  var lines = data.split('\r\n');
  e$(lines).each(function (ix, line) {
    var parts = line.split(' ').map(function (part) {
      return part.trim().replace('_', ' ');
    });
    var heb = [];
    var eng = [];
    e$(parts).each(function (ix, part) {
      if (part === '') {
        // do nothing, there was a bunch of adjacent whitespace chars.
      } else {
        var lang = languageOf(part.charCodeAt(0));
        if (lang === 'en') eng.push(part);
        if (lang === 'he') heb.push(part);
      }
    });
    e$(heb).each(function (ix, h) {
      e$(eng).each(function (jx, e) {
        dict.set(h, e);
        dict.set(e, h);
      });
    });
  });
  return dict;
}
// this line must be last!
e$(englishon);
//
// ******
// Button
// ******
String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};
window.setIntervalX = function (callback, delay, repetitions) {
  var x = 0;
  window.hide_chat = setInterval(function () {
    callback();
    if (++x === repetitions) {
      clearInterval(window.hide_chat);
    }
  }, delay);
};
document.firstTimeUser = function () {
  configStorage.set({ 'isUser': true, 'isActive': true });
  window.localStorage.setItem('show_quiz_tutorial', true);
  window.localStorage.setItem('show_progress_tutorial', true);
  window.location.reload();
};
var EnglishOnButton = new function () {
  this.showMainMenu = function (e) {
    e.preventDefault();
    if (!e$('#eo-menu').length) {
      EnglishOnButton.loading();
      return;
    }
    e$('#eo-menu').removeClass('hidden');
    e$('#eo-area-container').removeClass('hidden');
    window.history.pushState({ 'elementToShow': 'eo-menu' }, '');
    e$(document).mouseup(function (e) {
      e.preventDefault();
      e.stopPropagation();
      var button = e$('.eo-button');
      if (button.is(e.target)) return;
      if (e$('[data-id="welcome_1"]').hasClass('shepherd-open')) return;
      if (!e$(e.target).hasClass('eo-area') && !e$(e.target).parents().hasClass('eo-area')) {
        document.eoDialogs.hideDialogs(0);
        window.history.pushState({ 'elementToShow': 'page' }, '');
        e$(document).off('mouseup');
      }
    });
  };
  this.currentState = 'eo-button-on';
  this.element = function () {
    //return e$('<div>').addClass('eo-button').append(e$('<div>').addClass('eo-icon').addClass(this.currentState)).append(e$('<div>').addClass('eo-logo')).append(e$('<div>').addClass('registered_symbol').html('&#174;'));
    return e$('<div>').addClass('eo-button').append(e$('<div>').addClass('eo-icon').addClass(this.currentState)).append(e$('<div>').addClass('eo-logo')).append(e$('<div>').addClass('registered_symbol').html('&#174;'));
  };
  this.changeState = function (state) {
    e$('.eo-icon').removeClass(this.currentState);
    this.currentState = state;
    e$('.eo-icon').addClass(this.currentState);
  };
  this.on = function () {
    this.changeState('eo-button-on');
  };
  this.unavailable = function () {
    this.changeState('eo-button-unavailable');
  };
  this.off = function () {
    this.changeState('eo-button-off');
  };
  this.loading = function () {
    this.changeState('eo-button-loading');
  };
}();
// ****
// Dialogs
// ****
var EnglishOnDialogs = function () {
  this.displayMessage = function (msg, element) {
    //element.text(msg).addClass('ui-state-highlight').parent().removeClass('hidden');
    element.text(msg).parent().removeClass('hidden');
  };
  this.hideDialogs = function (milliseconds) {
    e$('#eo-area-container').addClass('hidden');
    e$('.eo-area').addClass('hidden');
    e$('.eo-inner-area').addClass('hidden');
    e$('.eo-message').text('').removeClass('ui-state-highlight').parent().addClass('hidden');
    if (document.tour) {
      document.tour.hide();
    }
  };
  this.toggleDialog = function (element, action) {
    this.hideDialogs(0);
    e$('#eo-area-container').removeClass('hidden');
    e$('#eo-menu').removeClass('hidden'); //becouse it serves as container, giving the header and footer
    var elementObj = e$('#' + element);
    var elementsArray = [elementObj[0]];
    if (elementObj.parent().hasClass('eo-area')) {
      //case of partial element
      elementObj.parent().find('.eo-inner-area').addClass('hidden'); //hide other parts of element
      var elementParent = elementObj.parent()[0];
      elementsArray = [elementObj[0], elementParent]; //looking after a normal syntax... e$([]).add doesn't work
    };
    e$(elementsArray).toggleClass('hidden', action == 'hide');
  };
  this.toggleDialogTrigger = function (e) {
    e.preventDefault();
    var element = e$(e.target).data('elementToShowOnClick');
    if (e$('#' + element).hasClass('hidden')) {
      this.toggleDialog(element, 'show');
    } else {
      this.toggleDialog(element, 'hide');
    }
    //don't do pushstate with DOMelement. after jquery selection of the element this will not work
    var visibleNow = e$('.eo-area').filter(':visible').last().find('.eo-inner-area').length ? e$('.eo-area').filter(':visible').last().find('.eo-inner-area').filter(':visible') : e$('.eo-area').filter(':visible').last();
    window.history.pushState({ 'elementToShow': visibleNow.attr('id') }, '');
  }.bind(this);
};
// ****
// Menu
// ****
var EnglishOnMenu = function () {
  e$.fn.extend({
    toggleText: function (a, b) {
      if (this.text() != a && this.text() != b) {
        this.text(a);
      } else if (this.text() == a) {
        this.text(b);
      } else if (this.text() == b) {
        this.text(a);
      }
      return this;
    },
    //for toggle text which containing html entities
    toggleHtml: function (a, b) {
      a = a.replaceAll('_', '&nbsp;');
      if (b) b = b.replaceAll('_', '&nbsp;');
      if (this.html() != a && this.html() != b) {
        this.html(a);
      } else if (this.html() == a) {
        this.html(b);
      } else if (this.html() == b) {
        this.html(a);
      }
      return this;
    }
  });
  this.displayMenuMessages = function () {
    switch_text = JSON.parse(document.englishonConfig.isActive) ? 'On' : 'Off';
    e$('#eo-power-switch-text').text(switch_text);
    var messages = document.MESSAGES[document.englishonConfig.siteLanguage];
    e$('#eo-picker-tittle').css({ direction: messages.DIRECTION });
    if (!localStorage.getItem('email')) e$('#eo-account-name').text(messages.MENU_TITLE);
    e$('#eo-language_header').text(messages.LANGUAGES_PICKER_TITLE);
    e$('#eo-help').find('a').text(messages.HELP);
    e$('#eo-contact').find('a').text(messages.CONTACT);
    e$('#dlg-sign-in-header').text(messages.LOGIN_SIGN_IN_TITLE);
    e$('#dlg-sign-up-header').text(messages.LOGIN_SIGN_UP_TITLE);
    e$('#subtitle').html(messages.LOGIN_SUBTITLE);
    e$('#or').text(messages.OR);
    e$('#eo-forgot-psw').text(messages.FORGOT_PASSWORD);
    e$('#eo-forgot-psw').attr('href', document.englishonBackend.base + '/recover/');
    e$('#eo-mail-login-btn').text(messages.LOGIN_BUTTON);
    e$('#eo-choose-lang').text(messages.SITE_LANGUAGE);
    e$('#progress-tutorial-btn').text(messages.START_PROGRESS_TUTORIAL);
    e$('#tutorial-btn').text(messages.START_TUTORIAL);
    e$('#get-started').text(messages.GET_STARTED);
    e$('#signout_btn').text(messages.SIGN_OUT);
  };
  setIntervalX(function () {
    e$('#lc_chat_layout').hide();
  }, 500, 20);
  document.overlay.insertContent(e$(document.MENU_HTML));
  document.overlay.insertContent(e$(document.LOGIN_DLG));
  document.overlay.insertContent(e$(document.OPTIONS_DLG));
  document.overlay.insertContent(e$(document.live_actions));
  e$('.eo-area, #eo-live').addClass(document.englishonConfig.siteLanguage);
  /* returns a toggler function that both updates `configEntry`
     and calls the given `toggle()` function, useful when you want
     your saved configuration to always match what's on screen
   */
  var toggler = function (cls, configEntry, toggle_func) {
    // initialize
    var initial = JSON.parse(document.englishonConfig[configEntry]);
    toggle_func(initial);
    e$('body').toggleClass(cls, initial);
    return function () {
      enabled = !JSON.parse(document.englishonConfig[configEntry]);
      var config = {};
      config[configEntry] = enabled;
      configStorage.set(config);
      toggle_func(enabled);
      e$('body').toggleClass(cls, enabled);
    };
  };
  var loginByMail = function () {
    var email = e$('#eo-login-email');
    var password = e$('#eo-login-password');
    var email_msg = e$('#login-email-msg');
    var password_msg = e$('#login-password-msg');
    var auth = new Authenticator(document.englishonConfig.backendUrl);
    if (auth.validate({ email: email, password: password, email_msg: email_msg, password_msg: password_msg })) {
      auth.register({ email: email.val(), password: password.val(), token: document.englishonBackend.token }).then(function (res) {
        if (res.status == 'error') {
          document.eoDialogs.displayMessage(res.message, e$('#login-password-msg'));
          return;
        }
        configStorage.set({ email: res.email, token: res.token, 'eo-user-name': e$('#eo-login-email').val() }).then(function () {
          document.englishonBackend.token = res.token;
          e$('#eo-account-area').removeClass('guest');
          e$('#eo-dlg-login').addClass('valid');
          e$('#eo-account-name').text(email.val());
          e$('#eo-account-name').data('elementToShowOnClick', 'eo-dlg-options-logged');
          e$('body').addClass('logged').removeClass('guest');
          if (res.status == 'logged_in') {
            document.eoDialogs.hideDialogs(1000);
          } else if (res.status == 'terms_not_accepted') {
            document.eoDialogs.hideDialogs(0);
            e$('#eo-account-img').addClass('no-iamge');
            document.overlay.showTermsDialog(document.menu.powerOn);
            e$('.category-icon').remove();
            return;
          }
          //currently it can't happen in login, becuase click on button is turning on englishon if it's none user
          if (!document.englishonConfig.isUser) {
            document.firstTimeUser();
          }
          var TODOAfterFetch = function () {
            document.eo_user.initial();
            document.menu.powerOn();
          };
          document.overlay.fetchQuestions().then(function () {
            TODOAfterFetch();
          }, function (error) {
            if (error == 'terms_not_accepted') {
              document.overlay.showTermsDialog(TODOAfterFetch);
            }
          });
        });
      });
    }
  };
  var toggleSound = toggler('eo-speaker', 'enableSound', Speaker.toggle.bind(Speaker));
  this.togglePower = toggler('eo-active', 'isActive', function (enable) {
    var elem = e$('#eo-power-switch-text');
    elem.toggleText('On', 'Off');
    if (JSON.parse(enable)) {
      document.overlay.powerOn();
      if (!document.englishonConfig.isUser) {
        document.firstTimeUser();
      }
    } else {
      document.overlay.powerOff();
    }
  }.bind(this));
  this.powerOn = function () {
    if (!document.englishonConfig.isUser) {
      document.firstTimeUser();
    }
    console.log('POWER ON#########');
    configStorage.set({ 'isActive': true });
    e$('#eo-power-switch-text').text('On');
    e$('body').addClass('eo-active', true);
    document.overlay.powerOn();
  };
  this.powerOff = function () {
    configStorage.set({ 'isActive': false });
    e$('#eo-power-switch-text').text('OFF');
    e$('body').removeClass('eo-active');
    document.overlay.powerOff();
  };
  this.signout = function () {
    document.signout_promise = e$.Deferred();
    if (e$('#eo-iframe').length) {
      var popup = e$('#eo-iframe')[0].contentWindow;
      popup.postMessage({ action: 'signout' }, document.englishonBackend.base);
    }
    localStorage.removeItem('email');
    localStorage.removeItem('eo-user-name');
    localStorage.removeItem('editor');
    document.englishonConfig.email = null;
    document.menu.powerOff();
    var auth = new Authenticator(document.englishonConfig.backendUrl); //Create a new guest token
    document.englishonConfig.token = null;
    auth.login(document.englishonConfig.token).then(function (token) {
      configStorage.set({ token: token }).then(function () {
        document.signout_promise.resolve();
        document.englishonBackend.token = token;
        if (e$('#eo-iframe').length) {
          //Give englishon the new guest token
          popup.postMessage({ token: document.englishonBackend.token }, document.englishonBackend.base);
        }
        e$('#eo-account-area').addClass('guest');
        e$('#eo-account-name').text(document.MESSAGES[document.englishonConfig.siteLanguage].MENU_TITLE);
        e$('#eo-account-name').data('elementToShowOnClick', 'eo-dlg-login');
        message = document.MESSAGES[document.englishonConfig.siteLanguage].SIGN_OUT_FEEDBACK;
        document.eoDialogs.hideDialogs();
        e$('body').addClass('guest').removeClass('logged');
        //prepare questions for guest
        document.overlay.fetchQuestions().then(function () {
          document.eo_user.initial();
        });
      });
    });
  };
  if (document.englishonBackend.base == 'https://englishon-staging.herokuapp.com') {
    e$('body').addClass('heroku-staging');
  }
  if (document.englishonBackend.base == 'http://localhost:8080') {
    e$('body').addClass('localhost');
  }
  EnglishOnButton.on();
  this.volume = new function () {
    this.changeVolume = function () {
      var val = e$('#eo-slider').slider('value');
      configStorage.set({ volume: val });
      Speaker.changeVolume(val);
      if (val == '0') {
        toggleSound();
      } else if (!JSON.parse(localStorage.getItem('enableSound'))) {
        toggleSound();
      }
    };
    this.syncWithSpeaker = function () {
      vol = JSON.parse(document.englishonConfig.enableSound) ? document.englishonConfig.volume : '0';
      e$('#eo-slider').slider('value', vol);
    };
    vol = JSON.parse(document.englishonConfig.enableSound) ? document.englishonConfig.volume : '0';
    e$("#eo-slider").slider({
      range: "min",
      value: vol,
      stop: this.changeVolume
    });
  }();
  //container = e$('#progress-container1');
  this.displayMenuMessages();
  if (document.englishonConfig.media == 'desktop') {
    //top left values to display centered dialogs 
    if (document.englishonConfig.backendUrl == 'http://localhost:8080') {
      var menuTop = 60;
    } else {
      var menuTop = (screen.height - 540) / 2;
    }
    e$('#eo-menu').css({ top: menuTop + 'px', left: (screen.width - 360) / 2 + 'px' });
    e$('#eo-dlg-login').css({ top: menuTop + 'px', left: (screen.width - 360) / 2 + 'px' });
    e$('#eo-dlg-options').css({ top: menuTop + 55 + 'px', left: (screen.width - 360) / 2 + 'px' });
    //FOR SHTUREM THE LEFT NEED DIFFERENT VALUE. check reason.
    //e$('#eo-dlg-options').css({ top: menuTop + 55 + 'px', left: (screen.width - 360) / 2 + 1 + 'px' })
  }
  englishon_chat();
  // ***********************
  // Register Event Handlers
  // ***********************
  e$('#eo-contact').on('click', function () {
    clearInterval(hide_chat);
    e$('#lc_chat_layout').show();
    e$('#lc_chat_title').click();
  });
  e$('.languages_picker .available').on('click', function (e) {
    e$(e.target).parents().find('.available').addClass('checked-language');
    if (!document.englishonConfig.isUser) {
      document.menu.powerOn();
      document.firstTimeUser();
    }
  });
  e$('#eo-power-switch').on('click', this.togglePower);
  e$('.languages_picker .available').on('click', this.powerOn);
  e$('#eo-speaker-res').on('click', function () {
    toggleSound();
    document.menu.volume.syncWithSpeaker();
  });
  e$('.eo-close.close-dialog').on('click', document.eoDialogs.hideDialogs);
  var uiLoginActions = function (state) {
    if (state == 'guest') {
      e$('body').addClass('guest').removeClass('logged');
      e$('#eo-account-area').addClass('guest');
      e$('#eo-account-img').addClass('no-image');
      e$('#eo-account-name').text(document.MESSAGES[document.englishonConfig.siteLanguage].MENU_TITLE);
    } else {
      e$('body').addClass('logged').removeClass('guest');
      e$('#eo-account-name').text(localStorage.getItem('eo-user-name'));
      e$('#eo-account-img').addClass('no-image');
    }
  };
  e$('#signout_btn').on('click', this.signout);
  if (!localStorage.getItem('email')) {
    e$('#eo-account-name').data('elementToShowOnClick', 'eo-dlg-login');
    uiLoginActions('guest');
  } else {
    e$('#eo-account-name').data('elementToShowOnClick', 'eo-dlg-options-logged');
    uiLoginActions('logged');
  }
  e$('#eo-account-name').on('click', document.eoDialogs.toggleDialogTrigger);
  if (JSON.parse(document.englishonConfig.editor)) {
    e$('#eo-menu').addClass('menu-editor');
    e$('#editor-row').removeClass('hidden');
    e$.when(document.dic_promise).done(function () {
      document._editor = new Editor(document.overlay);
    });
    e$('#eo-editor-btn').on('click', function (event) {
      document.menu.powerOn();
      document.overlay.hideQuestions();
      document.eoDialogs.hideDialogs();
      event.preventDefault();
      document.eo_user.hideLiveActions();
      // after you've loaded the editor, there's no going back.
      // (for now. this should be fixed.)
      document.overlay.hideButtons();
      document._editor.fetchQuestions().then(function () {
        console.log('------------------------------questions for editor');
        document._editor.highlight();
      });
    });
  } else {
    e$('#eo-menu').removeClass('menu-editor');
  }
  //OPTIONS MENU HANDLERS
  e$('#options-button').data('elementToShowOnClick', 'eo-dlg-options-main');
  e$('#options-button').on('click', function (e) {
    document.eoDialogs.toggleDialogTrigger(e);
    e$('#options-button').toggleClass('open');
  });
  e$('#eo-choose-lang').data('elementToShowOnClick', 'eo-site-languages');
  e$('#eo-choose-lang').on('click', document.eoDialogs.toggleDialogTrigger);
  e$('#option-dlg-signin').data('elementToShowOnClick', 'eo-dlg-login');
  e$('#option-dlg-signin').on('click', document.eoDialogs.toggleDialogTrigger);
  e$('.eo-site-option').data('elementToShowOnClick', 'eo-dlg-options-main');
  e$('#progress-tutorial-btn').on('click', function () {
    document.eoDialogs.hideDialogs();
    document.eo_user.showLiveActions();
    Tour.progressTutorial();
    document.tour.start();
  });
  e$('#tutorial-btn').on('click', function () {
    document.eoDialogs.hideDialogs();
    Tour.quizTutorial();
    document.tour.start();
  });
  e$('.eo-site-option').on('click', function (e) {
    e$('.eo-area, #eo-live').removeClass('hebrew english');
    e$('.eo-area, #eo-live').addClass(e$(e.target).attr('id'));
    configStorage.set({ siteLanguage: e$(e.target).attr('id') });
    document.menu.displayMenuMessages();
    document.eoDialogs.toggleDialogTrigger(e);
  });
  //LOGIN DIALOG
  var token = encodeURIComponent(document.englishonBackend.token);
  if (document.englishonConfig.isUser) {
    var google_login = '<iframe src=' + document.englishonBackend.base + '/tokens/google-login/?token=' + token + ' id="eo-iframe"><p>Your browser does not support iframes.</p></iframe>';
    e$('#google-iframe').append(google_login);
  }
  e$('#eo-iframe').on('load', function () {
    var popup = this.contentWindow;
    popup.postMessage({ token: document.englishonBackend.token }, document.englishonBackend.base);
  });
  e$('#eo-login-password').on('keydown', function (e) {
    if (e.keyCode == 13) {
      e$('#eo-mail-login-btn').click();
    }
  });
  e$('#eo-mail-login-btn').on('click', loginByMail);
  var _originalSize = e$(window).width() + e$(window).height();
  e$(window).resize(function () {
    if (e$(window).width() + e$(window).height() != _originalSize) {
      element = document.getElementById('eo-login-email');
      element.scrollIntoView(true);
    }
  });
  e$('#eo-login-email').on('click', function (e) {
    //causing the keyboard to open 
    e.target.focus();
    //Shturem is missing <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //This is causing chrome to compute the body width as 980px anycase, in inspector too
  });
  //i don't know why this line is needed.  
  window.history.pushState({ 'elementToShow': 'page' }, '');
  e$(window).on('beforeunload', function (e) {
    e.preventDefault();
    if (!document.englishonConfig.email && e$('.eo-answered').length) {
      //if (true) {
      console.log('user leaving the page!');
      document.show_signin_tutorial = true;
      document.tutorialInterval = setInterval(function () {
        console.log('setTimeout----------------');
        if (document.show_signin_tutorial) {
          console.log('setTimeout!!!!!!!!!!!!');
          Tour.signinTutorial();
          document.tour.start();
          clearInterval(document.tutorialInterval);
        }
      }, 500);
      return false;
    }
  });
};
e$(function () {
  document.loaded_promise.resolve();
});
e$.when(document.questions_promise).done(function () {
  if (window.localStorage.getItem('show_quiz_tutorial')) {
    if (!document.overlay.questions || !document.overlay.questions.length) {
      //document.overlay.openNoQuestionsDialog();
      return;
    };
    //if (true) {
    window.localStorage.removeItem('show_quiz_tutorial');
    setTimeout(function () {
      //the timeout intended to ensure the browser scroll done allready, and will not break our scroll to first question location
      Tour.quizTutorial();
      document.tour.start();
    }, 2000);
  }
});
e$.when(document.resources_promise, document.loaded_promise).done(function () {
  if (location.pathname != '/') {
    englishon_banner = new function () {
      var video = e$('<div id="eo-banner">').append(e$('<video/>', {
        src: staticUrl('banner.mp4'),
        type: 'video/mp4',
        autoplay: true,
        loop: true
      }));
      e$('#sidebar').prepend(video);
      e$('#eo-banner').on('click', document.firstTimeUser);
    }();
  }
  //event to get messageses from englishon backend
  window.addEventListener("message", receiveMessage, false);
  //register the handler for backspace/forward
  window.onpopstate = function (e) {
    if (e.state) {
      if (e.state.elementToShow == 'page') {
        document.eoDialogs.hideDialogs(0);
        return;
      }
      document.eoDialogs.toggleDialog(e.state.elementToShow, 'show');
    }
  };
  window.scraper = ScraperFactory(location);
  if (!scraper) {
    console.log("EnglishOn: unknown website");
    return;
  }
  e$('body').addClass(scraper.getHost().replace(/\./g, '-')).addClass('eo-direction-' + I18N.DIRECTION);
  document.overlay = scraper.scrape();
  document.overlay.showButtons();
  //TODO: move to separate function
  if (browserInfo.browser == "Chrome")
    //upgrade_link = e$('<a>').attr('href', 'https://www.google.com/chrome/browser/desktop/').text('here');
    upgrade_link = "<a href='https://www.google.com/chrome/browser/desktop/'>here</a>";else if (browserInfo.browser == "Firefox") upgrade_link = "<a href='https://www.google.com/chrome/browser/desktop/'>here</a>";
  upgrade_dialog = e$('<div id="eo-upgrade-dialog" title="englishON">').append(e$('<div>').addClass('upgrade-dlg').append(e$('<div>').html(document.MESSAGES[document.englishonConfig.siteLanguage].UPGRADE_MESSAGE.replace('browswer_name', document.browserInfo.browser).replace('here', upgrade_link))));
  //upgrade_dialog.insertBefore(e$(e$('table')[0]));
  document.overlay.insertContent(upgrade_dialog);
  upgrade_dialog.dialog({
    autoOpen: false,
    modal: true
  });
  browserInfo = document.browserInfo;
  if (browserInfo.browser == 'Chrome' && parseInt(browserInfo.version) <= 46 ||
  //if ((browserInfo.browser == 'Chrome' && parseInt(browserInfo.version) > 46) ||
  browserInfo.browser == 'Firefox' && parseInt(browserInfo.version) < 49) {
    e$('.eo-button').off('click').on('click', function () {
      e$('#eo-upgrade-dialog').dialog('open');
    });
  }
  document.overlay.insertContent(e$(document.TERMS_DLG));
  e$('#eo-dlg-terms').addClass(document.englishonConfig.siteLanguage);
  document.overlay.TermsDialog();
  document.eoDialogs = new EnglishOnDialogs();
  if (document.englishonConfig.isUser) {
    document.overlay.fetchLinkStates(document.englishonBackend).then(document.overlay.markLinks.bind(document.overlay));
    var TODOAfterFetch = function () {
      document.menu = new EnglishOnMenu();
      document.eo_user = new UserInfo(document.englishonConfig.token);
      document.eo_user.initial();
      if (e$('.eo-expired').length) {
        document.eo_user.showLiveActions();
      }
    };
    document.overlay.fetchQuestions().then(function (questions) {
      TODOAfterFetch();
    }, function (error) {
      if (error == 'terms_not_accepted') {
        document.overlay.showTermsDialog(TODOAfterFetch);
      }
    });
  } else {
    document.menu = new EnglishOnMenu();
    Tour.welcomeTutorial();
  }
});

function receiveMessage(event) {
  // Do we trust the sender of this message?  (might be
  // different from what we originally opened, for example). 
  var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
  if (origin !== document.englishonBackend.base) {
    return;
  }
  // event.source is popup
  var django_token = event.data.token;
  var img = event.data.image;
  var email = event.data.email;
  var user_name = event.data.name;
  e$('#eo-account-img').css("background-image", "url(" + img + ")").removeClass('no-image');
  e$('body').addClass('logged').removeClass('guest');
  e$('#eo-account-name').text(user_name);
  e$('#eo-account-area').removeClass('guest');
  if (!localStorage.getItem('email')) {
    //this is a real login, as google made many 'fake logins'
    configStorage.set({ email: email, token: django_token, 'eo-user-name': user_name }).then(function () {
      e$('#eo-account-name').data('elementToShowOnClick', 'eo-dlg-options-logged');
      if (event.data.status == 'terms_not_accepted') {
        document.eoDialogs.hideDialogs(0);
        document.overlay.showTermsDialog(document.menu.powerOn);
        //todo: use document.powerOff with an 'enable' parameter
        e$('.category-icon').remove();
        return;
      }
      document.englishonBackend.token = django_token;
      var TODOAfterFetch = function () {
        document.eo_user.initial();
        document.menu.powerOn();
      };
      document.overlay.fetchQuestions().then(function () {
        TODOAfterFetch();
      }, function (error) {
        if (error == 'terms_not_accepted') {
          document.overlay.showTermsDialog(TODOAfterFetch);
        }
      });
      //localStorage.setItem('email', email);
      document.eoDialogs.hideDialogs(0);
    });
  }
}
window.setButtonInterval = function (callback, delay, repetitions) {
  var xx = 0;
  window.ButtonInterval = setInterval(function () {
    callback();
    if (++xx === repetitions) {
      clearInterval(window.ButtonInterval);
    }
  }, delay);
};
//
// *********
// Name List
// *********

function createUserList(users, merge) {
  var roster = $('<div dir="rtl">').addClass('eo-school-roster');
  var ul = $('<div>').addClass('eo-school-roster-names');
  roster.append($('<div>').text(MESSAGES.LOGGED_OUT)).append($('<div>').text(MESSAGES.LOGIN_AS)).append(ul);
  $.each(users, function (name, newToken) {
    ul.append($('<a href="">').text(name).addClass('eo-school-roster-name').on('click', function (event) {
      event.preventDefault();
      var oldToken = document.config.token;
      return merge(oldToken, newToken).then(function () {
        document.englishonBackend.token = newToken;
        return configStorage.set({ token: newToken });
      }).then(function () {
        return computerLabRecordLogin(false);
      }).done(function () {
        roster.hide();
        EnglishonMenu.addWidget(createLogoutButton());
      });
    }));
  });
  return roster;
}

function createLogoutButton() {
  return $('<div dir="rtl">').addClass('eo-school-roster-logout').append($('<a href="">').text(MESSAGES.LOGOUT).on('click', function (event) {
    event.preventDefault();
    configStorage.set({ token: null }).then(function () {
      location.reload();
    });
  }));
}
//
//# sourceMappingURL=englishon.map