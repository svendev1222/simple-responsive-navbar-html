function StatusBubbleWidget(t) {
  (this.$statusText = t.$statusText),
    (this.$statusIndicator = t.$statusIndicator),
    (this.$editModeChechbox = t.$editModeChechbox),
    this._init();
}
function _handleMultipleEvents(e, n, t, i) {
  vjs.arr.forEach(t, function (t) {
    e(n, t, i);
  });
}
function _logType(t, e) {
  var n, i, o;
  (n = Array.prototype.slice.call(e)),
    (i = function () {}),
    (o = window.console || { log: i, warn: i, error: i }),
    t ? n.unshift(t.toUpperCase() + ":") : (t = "log"),
    vjs.log.history.push(n),
    n.unshift("VIDEOJS:"),
    o[t].apply ? o[t].apply(o, n) : o[t](n.join(" "));
}
if (
  ((function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (_, t) {
    function a(t) {
      var e = !!t && "length" in t && t.length,
        n = ht.type(t);
      return (
        "function" !== n &&
        !ht.isWindow(t) &&
        ("array" === n ||
          0 === e ||
          ("number" == typeof e && 0 < e && e - 1 in t))
      );
    }
    function e(t, n, i) {
      if (ht.isFunction(n))
        return ht.grep(t, function (t, e) {
          return !!n.call(t, e, t) !== i;
        });
      if (n.nodeType)
        return ht.grep(t, function (t) {
          return (t === n) !== i;
        });
      if ("string" == typeof n) {
        if (_t.test(n)) return ht.filter(n, t, i);
        n = ht.filter(n, t);
      }
      return ht.grep(t, function (t) {
        return -1 < ht.inArray(t, n) !== i;
      });
    }
    function n(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    function u(t) {
      var n = {};
      return (
        ht.each(t.match($t) || [], function (t, e) {
          n[e] = !0;
        }),
        n
      );
    }
    function o() {
      it.addEventListener
        ? (it.removeEventListener("DOMContentLoaded", s),
          _.removeEventListener("load", s))
        : (it.detachEvent("onreadystatechange", s), _.detachEvent("onload", s));
    }
    function s() {
      (it.addEventListener ||
        "load" === _.event.type ||
        "complete" === it.readyState) &&
        (o(), ht.ready());
    }
    function l(t, e, n) {
      if (n === undefined && 1 === t.nodeType) {
        var i = "data-" + e.replace(Nt, "-$1").toLowerCase();
        if ("string" == typeof (n = t.getAttribute(i))) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : It.test(n)
                  ? ht.parseJSON(n)
                  : n));
          } catch (o) {}
          ht.data(t, e, n);
        } else n = undefined;
      }
      return n;
    }
    function c(t) {
      var e;
      for (e in t)
        if (("data" !== e || !ht.isEmptyObject(t[e])) && "toJSON" !== e)
          return !1;
      return !0;
    }
    function i(t, e, n, i) {
      if (Mt(t)) {
        var o,
          s,
          r = ht.expando,
          a = t.nodeType,
          l = a ? ht.cache : t,
          c = a ? t[r] : t[r] && r;
        if (
          (c && l[c] && (i || l[c].data)) ||
          n !== undefined ||
          "string" != typeof e
        )
          return (
            c || (c = a ? (t[r] = nt.pop() || ht.guid++) : r),
            l[c] || (l[c] = a ? {} : { toJSON: ht.noop }),
            ("object" != typeof e && "function" != typeof e) ||
              (i
                ? (l[c] = ht.extend(l[c], e))
                : (l[c].data = ht.extend(l[c].data, e))),
            (s = l[c]),
            i || (s.data || (s.data = {}), (s = s.data)),
            n !== undefined && (s[ht.camelCase(e)] = n),
            "string" == typeof e
              ? null == (o = s[e]) && (o = s[ht.camelCase(e)])
              : (o = s),
            o
          );
      }
    }
    function r(t, e, n) {
      if (Mt(t)) {
        var i,
          o,
          s = t.nodeType,
          r = s ? ht.cache : t,
          a = s ? t[ht.expando] : ht.expando;
        if (r[a]) {
          if (e && (i = n ? r[a] : r[a].data)) {
            o = (e = ht.isArray(e)
              ? e.concat(ht.map(e, ht.camelCase))
              : e in i
              ? [e]
              : (e = ht.camelCase(e)) in i
              ? [e]
              : e.split(" ")).length;
            for (; o--; ) delete i[e[o]];
            if (n ? !c(i) : !ht.isEmptyObject(i)) return;
          }
          (n || (delete r[a].data, c(r[a]))) &&
            (s
              ? ht.cleanData([t], !0)
              : dt.deleteExpando || r != r.window
              ? delete r[a]
              : (r[a] = undefined));
        }
      }
    }
    function d(t, e, n, i) {
      var o,
        s = 1,
        r = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return ht.css(t, e, "");
            },
        l = a(),
        c = (n && n[3]) || (ht.cssNumber[e] ? "" : "px"),
        u = (ht.cssNumber[e] || ("px" !== c && +l)) && Ft.exec(ht.css(t, e));
      if (u && u[3] !== c)
        for (
          c = c || u[3], n = n || [], u = +l || 1;
          (u /= s = s || ".5"),
            ht.style(t, e, u + c),
            s !== (s = a() / l) && 1 !== s && --r;

        );
      return (
        n &&
          ((u = +u || +l || 0),
          (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = c), (i.start = u), (i.end = o))),
        o
      );
    }
    function m(t) {
      var e = Yt.split("|"),
        n = t.createDocumentFragment();
      if (n.createElement) for (; e.length; ) n.createElement(e.pop());
      return n;
    }
    function g(t, e) {
      var n,
        i,
        o = 0,
        s =
          "undefined" != typeof t.getElementsByTagName
            ? t.getElementsByTagName(e || "*")
            : "undefined" != typeof t.querySelectorAll
            ? t.querySelectorAll(e || "*")
            : undefined;
      if (!s)
        for (s = [], n = t.childNodes || t; null != (i = n[o]); o++)
          !e || ht.nodeName(i, e) ? s.push(i) : ht.merge(s, g(i, e));
      return e === undefined || (e && ht.nodeName(t, e)) ? ht.merge([t], s) : s;
    }
    function y(t, e) {
      for (var n, i = 0; null != (n = t[i]); i++)
        ht._data(n, "globalEval", !e || ht._data(e[i], "globalEval"));
    }
    function b(t) {
      Wt.test(t.type) && (t.defaultChecked = t.checked);
    }
    function v(t, e, n, i, o) {
      for (
        var s, r, a, l, c, u, d, p = t.length, h = m(e), f = [], v = 0;
        v < p;
        v++
      )
        if ((r = t[v]) || 0 === r)
          if ("object" === ht.type(r)) ht.merge(f, r.nodeType ? [r] : r);
          else if (Qt.test(r)) {
            for (
              l = l || h.appendChild(e.createElement("div")),
                c = (zt.exec(r) || ["", ""])[1].toLowerCase(),
                d = Xt[c] || Xt._default,
                l.innerHTML = d[1] + ht.htmlPrefilter(r) + d[2],
                s = d[0];
              s--;

            )
              l = l.lastChild;
            if (
              (!dt.leadingWhitespace &&
                Ut.test(r) &&
                f.push(e.createTextNode(Ut.exec(r)[0])),
              !dt.tbody)
            )
              for (
                s =
                  (r =
                    "table" !== c || Gt.test(r)
                      ? "<table>" !== d[1] || Gt.test(r)
                        ? 0
                        : l
                      : l.firstChild) && r.childNodes.length;
                s--;

              )
                ht.nodeName((u = r.childNodes[s]), "tbody") &&
                  !u.childNodes.length &&
                  r.removeChild(u);
            for (ht.merge(f, l.childNodes), l.textContent = ""; l.firstChild; )
              l.removeChild(l.firstChild);
            l = h.lastChild;
          } else f.push(e.createTextNode(r));
      for (
        l && h.removeChild(l),
          dt.appendChecked || ht.grep(g(f, "input"), b),
          v = 0;
        (r = f[v++]);

      )
        if (i && -1 < ht.inArray(r, i)) o && o.push(r);
        else if (
          ((a = ht.contains(r.ownerDocument, r)),
          (l = g(h.appendChild(r), "script")),
          a && y(l),
          n)
        )
          for (s = 0; (r = l[s++]); ) Vt.test(r.type || "") && n.push(r);
      return (l = null), h;
    }
    function p() {
      return !0;
    }
    function h() {
      return !1;
    }
    function f() {
      try {
        return it.activeElement;
      } catch (t) {}
    }
    function j(t, e, n, i, o, s) {
      var r, a;
      if ("object" == typeof e) {
        for (a in ("string" != typeof n && ((i = i || n), (n = undefined)), e))
          j(t, a, n, i, e[a], s);
        return t;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = undefined))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = undefined))
              : ((o = i), (i = n), (n = undefined))),
        !1 === o)
      )
        o = h;
      else if (!o) return t;
      return (
        1 === s &&
          ((r = o),
          ((o = function (t) {
            return ht().off(t), r.apply(this, arguments);
          }).guid = r.guid || (r.guid = ht.guid++))),
        t.each(function () {
          ht.event.add(this, e, o, i, n);
        })
      );
    }
    function w(t, e) {
      return ht.nodeName(t, "table") &&
        ht.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function T(t) {
      return (t.type = (null !== ht.find.attr(t, "type")) + "/" + t.type), t;
    }
    function x(t) {
      var e = ae.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function C(t, e) {
      if (1 === e.nodeType && ht.hasData(t)) {
        var n,
          i,
          o,
          s = ht._data(t),
          r = ht._data(e, s),
          a = s.events;
        if (a)
          for (n in (delete r.handle, (r.events = {}), a))
            for (i = 0, o = a[n].length; i < o; i++)
              ht.event.add(e, n, a[n][i]);
        r.data && (r.data = ht.extend({}, r.data));
      }
    }
    function k(t, e) {
      var n, i, o;
      if (1 === e.nodeType) {
        if (
          ((n = e.nodeName.toLowerCase()), !dt.noCloneEvent && e[ht.expando])
        ) {
          for (i in (o = ht._data(e)).events) ht.removeEvent(e, i, o.handle);
          e.removeAttribute(ht.expando);
        }
        "script" === n && e.text !== t.text
          ? ((T(e).text = t.text), x(e))
          : "object" === n
          ? (e.parentNode && (e.outerHTML = t.outerHTML),
            dt.html5Clone &&
              t.innerHTML &&
              !ht.trim(e.innerHTML) &&
              (e.innerHTML = t.innerHTML))
          : "input" === n && Wt.test(t.type)
          ? ((e.defaultChecked = e.checked = t.checked),
            e.value !== t.value && (e.value = t.value))
          : "option" === n
          ? (e.defaultSelected = e.selected = t.defaultSelected)
          : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
      }
    }
    function S(n, i, o, s) {
      i = st.apply([], i);
      var t,
        e,
        r,
        a,
        l,
        c,
        u = 0,
        d = n.length,
        p = d - 1,
        h = i[0],
        f = ht.isFunction(h);
      if (f || (1 < d && "string" == typeof h && !dt.checkClone && re.test(h)))
        return n.each(function (t) {
          var e = n.eq(t);
          f && (i[0] = h.call(this, t, e.html())), S(e, i, o, s);
        });
      if (
        d &&
        ((t = (c = v(i, n[0].ownerDocument, !1, n, s)).firstChild),
        1 === c.childNodes.length && (c = t),
        t || s)
      ) {
        for (r = (a = ht.map(g(c, "script"), T)).length; u < d; u++)
          (e = c),
            u !== p &&
              ((e = ht.clone(e, !0, !0)), r && ht.merge(a, g(e, "script"))),
            o.call(n[u], e, u);
        if (r)
          for (
            l = a[a.length - 1].ownerDocument, ht.map(a, x), u = 0;
            u < r;
            u++
          )
            (e = a[u]),
              Vt.test(e.type || "") &&
                !ht._data(e, "globalEval") &&
                ht.contains(l, e) &&
                (e.src
                  ? ht._evalUrl && ht._evalUrl(e.src)
                  : ht.globalEval(
                      (e.text || e.textContent || e.innerHTML || "").replace(
                        le,
                        ""
                      )
                    ));
        c = t = null;
      }
      return n;
    }
    function E(t, e, n) {
      for (var i, o = e ? ht.filter(e, t) : t, s = 0; null != (i = o[s]); s++)
        n || 1 !== i.nodeType || ht.cleanData(g(i)),
          i.parentNode &&
            (n && ht.contains(i.ownerDocument, i) && y(g(i, "script")),
            i.parentNode.removeChild(i));
      return t;
    }
    function A(t, e) {
      var n = ht(e.createElement(t)).appendTo(e.body),
        i = ht.css(n[0], "display");
      return n.detach(), i;
    }
    function $(t) {
      var e = it,
        n = de[t];
      return (
        n ||
          (("none" !== (n = A(t, e)) && n) ||
            ((e = (
              (ue = (
                ue || ht("<iframe frameborder='0' width='0' height='0'/>")
              ).appendTo(e.documentElement))[0].contentWindow ||
              ue[0].contentDocument
            ).document).write(),
            e.close(),
            (n = A(t, e)),
            ue.detach()),
          (de[t] = n)),
        n
      );
    }
    function P(t, e) {
      return {
        get: function () {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get;
        },
      };
    }
    function M(t) {
      if (t in ke) return t;
      for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--; )
        if ((t = Ce[n] + e) in ke) return t;
    }
    function I(t, e) {
      for (var n, i, o, s = [], r = 0, a = t.length; r < a; r++)
        (i = t[r]).style &&
          ((s[r] = ht._data(i, "olddisplay")),
          (n = i.style.display),
          e
            ? (s[r] || "none" !== n || (i.style.display = ""),
              "" === i.style.display &&
                Rt(i) &&
                (s[r] = ht._data(i, "olddisplay", $(i.nodeName))))
            : ((o = Rt(i)),
              ((n && "none" !== n) || !o) &&
                ht._data(i, "olddisplay", o ? n : ht.css(i, "display"))));
      for (r = 0; r < a; r++)
        (i = t[r]).style &&
          ((e && "none" !== i.style.display && "" !== i.style.display) ||
            (i.style.display = e ? s[r] || "" : "none"));
      return t;
    }
    function N(t, e, n) {
      var i = Te.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
    }
    function D(t, e, n, i, o) {
      for (
        var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          r = 0;
        s < 4;
        s += 2
      )
        "margin" === n && (r += ht.css(t, n + Bt[s], !0, o)),
          i
            ? ("content" === n && (r -= ht.css(t, "padding" + Bt[s], !0, o)),
              "margin" !== n &&
                (r -= ht.css(t, "border" + Bt[s] + "Width", !0, o)))
            : ((r += ht.css(t, "padding" + Bt[s], !0, o)),
              "padding" !== n &&
                (r += ht.css(t, "border" + Bt[s] + "Width", !0, o)));
      return r;
    }
    function O(t, e, n) {
      var i = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        s = me(t),
        r = dt.boxSizing && "border-box" === ht.css(t, "boxSizing", !1, s);
      if (o <= 0 || null == o) {
        if (
          (((o = ge(t, e, s)) < 0 || null == o) && (o = t.style[e]), he.test(o))
        )
          return o;
        (i = r && (dt.boxSizingReliable() || o === t.style[e])),
          (o = parseFloat(o) || 0);
      }
      return o + D(t, e, n || (r ? "border" : "content"), i, s) + "px";
    }
    function H(t, e, n, i, o) {
      return new H.prototype.init(t, e, n, i, o);
    }
    function L() {
      return (
        _.setTimeout(function () {
          Se = undefined;
        }),
        (Se = ht.now())
      );
    }
    function F(t, e) {
      var n,
        i = { height: t },
        o = 0;
      for (e = e ? 1 : 0; o < 4; o += 2 - e)
        i["margin" + (n = Bt[o])] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i;
    }
    function B(t, e, n) {
      for (
        var i,
          o = (W.tweeners[e] || []).concat(W.tweeners["*"]),
          s = 0,
          r = o.length;
        s < r;
        s++
      )
        if ((i = o[s].call(n, e, t))) return i;
    }
    function R(e, t, n) {
      var i,
        o,
        s,
        r,
        a,
        l,
        c,
        u = this,
        d = {},
        p = e.style,
        h = e.nodeType && Rt(e),
        f = ht._data(e, "fxshow");
      for (i in (n.queue ||
        (null == (a = ht._queueHooks(e, "fx")).unqueued &&
          ((a.unqueued = 0),
          (l = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || l();
          })),
        a.unqueued++,
        u.always(function () {
          u.always(function () {
            a.unqueued--, ht.queue(e, "fx").length || a.empty.fire();
          });
        })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
        "inline" ===
          ("none" === (c = ht.css(e, "display"))
            ? ht._data(e, "olddisplay") || $(e.nodeName)
            : c) &&
          "none" === ht.css(e, "float") &&
          (dt.inlineBlockNeedsLayout && "inline" !== $(e.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      n.overflow &&
        ((p.overflow = "hidden"),
        dt.shrinkWrapBlocks() ||
          u.always(function () {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          })),
      t))
        if (((o = t[i]), Ne.exec(o))) {
          if (
            (delete t[i],
            (s = s || "toggle" === o),
            o === (h ? "hide" : "show"))
          ) {
            if ("show" !== o || !f || f[i] === undefined) continue;
            h = !0;
          }
          d[i] = (f && f[i]) || ht.style(e, i);
        } else c = undefined;
      if (ht.isEmptyObject(d))
        "inline" === ("none" === c ? $(e.nodeName) : c) && (p.display = c);
      else
        for (i in (f
          ? "hidden" in f && (h = f.hidden)
          : (f = ht._data(e, "fxshow", {})),
        s && (f.hidden = !h),
        h
          ? ht(e).show()
          : u.done(function () {
              ht(e).hide();
            }),
        u.done(function () {
          var t;
          for (t in (ht._removeData(e, "fxshow"), d)) ht.style(e, t, d[t]);
        }),
        d))
          (r = B(h ? f[i] : 0, i, u)),
            i in f ||
              ((f[i] = r.start),
              h &&
                ((r.end = r.start),
                (r.start = "width" === i || "height" === i ? 1 : 0)));
    }
    function q(t, e) {
      var n, i, o, s, r;
      for (n in t)
        if (
          ((o = e[(i = ht.camelCase(n))]),
          (s = t[n]),
          ht.isArray(s) && ((o = s[1]), (s = t[n] = s[0])),
          n !== i && ((t[i] = s), delete t[n]),
          (r = ht.cssHooks[i]) && "expand" in r)
        )
          for (n in ((s = r.expand(s)), delete t[i], s))
            n in t || ((t[n] = s[n]), (e[n] = o));
        else e[i] = o;
    }
    function W(s, t, e) {
      var n,
        r,
        i = 0,
        o = W.prefilters.length,
        a = ht.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var t = Se || L(),
              e = Math.max(0, c.startTime + c.duration - t),
              n = 1 - (e / c.duration || 0),
              i = 0,
              o = c.tweens.length;
            i < o;
            i++
          )
            c.tweens[i].run(n);
          return (
            a.notifyWith(s, [c, n, e]),
            n < 1 && o ? e : (a.resolveWith(s, [c]), !1)
          );
        },
        c = a.promise({
          elem: s,
          props: ht.extend({}, t),
          opts: ht.extend(
            !0,
            { specialEasing: {}, easing: ht.easing._default },
            e
          ),
          originalProperties: t,
          originalOptions: e,
          startTime: Se || L(),
          duration: e.duration,
          tweens: [],
          createTween: function (t, e) {
            var n = ht.Tween(
              s,
              c.opts,
              t,
              e,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(n), n;
          },
          stop: function (t) {
            var e = 0,
              n = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; e < n; e++) c.tweens[e].run(1);
            return (
              t
                ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, t]))
                : a.rejectWith(s, [c, t]),
              this
            );
          },
        }),
        u = c.props;
      for (q(u, c.opts.specialEasing); i < o; i++)
        if ((n = W.prefilters[i].call(c, s, u, c.opts)))
          return (
            ht.isFunction(n.stop) &&
              (ht._queueHooks(c.elem, c.opts.queue).stop = ht.proxy(n.stop, n)),
            n
          );
      return (
        ht.map(u, B, c),
        ht.isFunction(c.opts.start) && c.opts.start.call(s, c),
        ht.fx.timer(ht.extend(l, { elem: s, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function z(t) {
      return ht.attr(t, "class") || "";
    }
    function V(s) {
      return function (t, e) {
        "string" != typeof t && ((e = t), (t = "*"));
        var n,
          i = 0,
          o = t.toLowerCase().match($t) || [];
        if (ht.isFunction(e))
          for (; (n = o[i++]); )
            "+" === n.charAt(0)
              ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(e))
              : (s[n] = s[n] || []).push(e);
      };
    }
    function U(e, o, s, r) {
      function a(t) {
        var i;
        return (
          (l[t] = !0),
          ht.each(e[t] || [], function (t, e) {
            var n = e(o, s, r);
            return "string" != typeof n || c || l[n]
              ? c
                ? !(i = n)
                : void 0
              : (o.dataTypes.unshift(n), a(n), !1);
          }),
          i
        );
      }
      var l = {},
        c = e === rn;
      return a(o.dataTypes[0]) || (!l["*"] && a("*"));
    }
    function Y(t, e) {
      var n,
        i,
        o = ht.ajaxSettings.flatOptions || {};
      for (i in e) e[i] !== undefined && ((o[i] ? t : n || (n = {}))[i] = e[i]);
      return n && ht.extend(!0, t, n), t;
    }
    function X(t, e, n) {
      for (var i, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0]; )
        l.shift(),
          o === undefined &&
            (o = t.mimeType || e.getResponseHeader("Content-Type"));
      if (o)
        for (r in a)
          if (a[r] && a[r].test(o)) {
            l.unshift(r);
            break;
          }
      if (l[0] in n) s = l[0];
      else {
        for (r in n) {
          if (!l[0] || t.converters[r + " " + l[0]]) {
            s = r;
            break;
          }
          i || (i = r);
        }
        s = s || i;
      }
      if (s) return s !== l[0] && l.unshift(s), n[s];
    }
    function Q(t, e, n, i) {
      var o,
        s,
        r,
        a,
        l,
        c = {},
        u = t.dataTypes.slice();
      if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
      for (s = u.shift(); s; )
        if (
          (t.responseFields[s] && (n[t.responseFields[s]] = e),
          !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          (l = s),
          (s = u.shift()))
        )
          if ("*" === s) s = l;
          else if ("*" !== l && l !== s) {
            if (!(r = c[l + " " + s] || c["* " + s]))
              for (o in c)
                if (
                  (a = o.split(" "))[1] === s &&
                  (r = c[l + " " + a[0]] || c["* " + a[0]])
                ) {
                  !0 === r
                    ? (r = c[o])
                    : !0 !== c[o] && ((s = a[0]), u.unshift(a[1]));
                  break;
                }
            if (!0 !== r)
              if (r && t["throws"]) e = r(e);
              else
                try {
                  e = r(e);
                } catch (d) {
                  return {
                    state: "parsererror",
                    error: r ? d : "No conversion from " + l + " to " + s,
                  };
                }
          }
      return { state: "success", data: e };
    }
    function G(t) {
      return (t.style && t.style.display) || ht.css(t, "display");
    }
    function K(t) {
      if (!ht.contains(t.ownerDocument || it, t)) return !0;
      for (; t && 1 === t.nodeType; ) {
        if ("none" === G(t) || "hidden" === t.type) return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function J(n, t, i, o) {
      var e;
      if (ht.isArray(t))
        ht.each(t, function (t, e) {
          i || dn.test(n)
            ? o(n, e)
            : J(
                n + "[" + ("object" == typeof e && null != e ? t : "") + "]",
                e,
                i,
                o
              );
        });
      else if (i || "object" !== ht.type(t)) o(n, t);
      else for (e in t) J(n + "[" + e + "]", t[e], i, o);
    }
    function Z() {
      try {
        return new _.XMLHttpRequest();
      } catch (t) {}
    }
    function tt() {
      try {
        return new _.ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}
    }
    function et(t) {
      return ht.isWindow(t)
        ? t
        : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    var nt = [],
      it = _.document,
      ot = nt.slice,
      st = nt.concat,
      rt = nt.push,
      at = nt.indexOf,
      lt = {},
      ct = lt.toString,
      ut = lt.hasOwnProperty,
      dt = {},
      pt = "1.12.4",
      ht = function (t, e) {
        return new ht.fn.init(t, e);
      },
      ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      vt = /^-ms-/,
      mt = /-([\da-z])/gi,
      gt = function (t, e) {
        return e.toUpperCase();
      };
    (ht.fn = ht.prototype =
      {
        jquery: pt,
        constructor: ht,
        selector: "",
        length: 0,
        toArray: function () {
          return ot.call(this);
        },
        get: function (t) {
          return null != t
            ? t < 0
              ? this[t + this.length]
              : this[t]
            : ot.call(this);
        },
        pushStack: function (t) {
          var e = ht.merge(this.constructor(), t);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t) {
          return ht.each(this, t);
        },
        map: function (n) {
          return this.pushStack(
            ht.map(this, function (t, e) {
              return n.call(t, e, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(ot.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(0 <= n && n < e ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: rt,
        sort: nt.sort,
        splice: nt.splice,
      }),
      (ht.extend = ht.fn.extend =
        function (t) {
          var e,
            n,
            i,
            o,
            s,
            r,
            a = t || {},
            l = 1,
            c = arguments.length,
            u = !1;
          for (
            "boolean" == typeof a && ((u = a), (a = arguments[l] || {}), l++),
              "object" == typeof a || ht.isFunction(a) || (a = {}),
              l === c && ((a = this), l--);
            l < c;
            l++
          )
            if (null != (s = arguments[l]))
              for (o in s)
                (e = a[o]),
                  a !== (i = s[o]) &&
                    (u && i && (ht.isPlainObject(i) || (n = ht.isArray(i)))
                      ? (n
                          ? ((n = !1), (r = e && ht.isArray(e) ? e : []))
                          : (r = e && ht.isPlainObject(e) ? e : {}),
                        (a[o] = ht.extend(u, r, i)))
                      : i !== undefined && (a[o] = i));
          return a;
        }),
      ht.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === ht.type(t);
        },
        isArray:
          Array.isArray ||
          function (t) {
            return "array" === ht.type(t);
          },
        isWindow: function (t) {
          return null != t && t == t.window;
        },
        isNumeric: function (t) {
          var e = t && t.toString();
          return !ht.isArray(t) && 0 <= e - parseFloat(e) + 1;
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        isPlainObject: function (t) {
          var e;
          if (!t || "object" !== ht.type(t) || t.nodeType || ht.isWindow(t))
            return !1;
          try {
            if (
              t.constructor &&
              !ut.call(t, "constructor") &&
              !ut.call(t.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (n) {
            return !1;
          }
          if (!dt.ownFirst) for (e in t) return ut.call(t, e);
          for (e in t);
          return e === undefined || ut.call(t, e);
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? lt[ct.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (t) {
          t &&
            ht.trim(t) &&
            (
              _.execScript ||
              function (t) {
                _.eval.call(_, t);
              }
            )(t);
        },
        camelCase: function (t) {
          return t.replace(vt, "ms-").replace(mt, gt);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e) {
          var n,
            i = 0;
          if (a(t))
            for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
          else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(ft, "");
        },
        makeArray: function (t, e) {
          var n = e || [];
          return (
            null != t &&
              (a(Object(t))
                ? ht.merge(n, "string" == typeof t ? [t] : t)
                : rt.call(n, t)),
            n
          );
        },
        inArray: function (t, e, n) {
          var i;
          if (e) {
            if (at) return at.call(e, t, n);
            for (
              i = e.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
              n < i;
              n++
            )
              if (n in e && e[n] === t) return n;
          }
          return -1;
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, o = t.length; i < n; ) t[o++] = e[i++];
          if (n != n) for (; e[i] !== undefined; ) t[o++] = e[i++];
          return (t.length = o), t;
        },
        grep: function (t, e, n) {
          for (var i = [], o = 0, s = t.length, r = !n; o < s; o++)
            !e(t[o], o) !== r && i.push(t[o]);
          return i;
        },
        map: function (t, e, n) {
          var i,
            o,
            s = 0,
            r = [];
          if (a(t))
            for (i = t.length; s < i; s++)
              null != (o = e(t[s], s, n)) && r.push(o);
          else for (s in t) null != (o = e(t[s], s, n)) && r.push(o);
          return st.apply([], r);
        },
        guid: 1,
        proxy: function (t, e) {
          var n, i, o;
          return (
            "string" == typeof e && ((o = t[e]), (e = t), (t = o)),
            ht.isFunction(t)
              ? ((n = ot.call(arguments, 2)),
                ((i = function () {
                  return t.apply(e || this, n.concat(ot.call(arguments)));
                }).guid = t.guid =
                  t.guid || ht.guid++),
                i)
              : undefined
          );
        },
        now: function () {
          return +new Date();
        },
        support: dt,
      }),
      "function" == typeof Symbol &&
        (ht.fn[Symbol.iterator] = nt[Symbol.iterator]),
      ht.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (t, e) {
          lt["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var yt = (function (n) {
      function j(t, e, n, i) {
        var o,
          s,
          r,
          a,
          l,
          c,
          u,
          d,
          p = e && e.ownerDocument,
          h = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== h && 9 !== h && 11 !== h))
        )
          return n;
        if (
          !i &&
          ((e ? e.ownerDocument || e : B) !== M && P(e), (e = e || M), N)
        ) {
          if (11 !== h && (c = gt.exec(t)))
            if ((o = c[1])) {
              if (9 === h) {
                if (!(r = e.getElementById(o))) return n;
                if (r.id === o) return n.push(r), n;
              } else if (
                p &&
                (r = p.getElementById(o)) &&
                L(e, r) &&
                r.id === o
              )
                return n.push(r), n;
            } else {
              if (c[2]) return J.apply(n, e.getElementsByTagName(t)), n;
              if (
                (o = c[3]) &&
                g.getElementsByClassName &&
                e.getElementsByClassName
              )
                return J.apply(n, e.getElementsByClassName(o)), n;
            }
          if (g.qsa && !V[t + " "] && (!D || !D.test(t))) {
            if (1 !== h) (p = e), (d = t);
            else if ("object" !== e.nodeName.toLowerCase()) {
              for (
                (a = e.getAttribute("id"))
                  ? (a = a.replace(bt, "\\$&"))
                  : e.setAttribute("id", (a = F)),
                  s = (u = C(t)).length,
                  l = pt.test(a) ? "#" + a : "[id='" + a + "']";
                s--;

              )
                u[s] = l + " " + m(u[s]);
              (d = u.join(",")), (p = (yt.test(t) && v(e.parentNode)) || e);
            }
            if (d)
              try {
                return J.apply(n, p.querySelectorAll(d)), n;
              } catch (f) {
              } finally {
                a === F && e.removeAttribute("id");
              }
          }
        }
        return S(t.replace(at, "$1"), e, n, i);
      }
      function t() {
        function n(t, e) {
          return (
            i.push(t + " ") > T.cacheLength && delete n[i.shift()],
            (n[t + " "] = e)
          );
        }
        var i = [];
        return n;
      }
      function l(t) {
        return (t[F] = !0), t;
      }
      function o(t) {
        var e = M.createElement("div");
        try {
          return !!t(e);
        } catch (n) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function e(t, e) {
        for (var n = t.split("|"), i = n.length; i--; ) T.attrHandle[n[i]] = e;
      }
      function c(t, e) {
        var n = e && t,
          i =
            n &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
        return t ? 1 : -1;
      }
      function i(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function s(n) {
        return function (t) {
          var e = t.nodeName.toLowerCase();
          return ("input" === e || "button" === e) && t.type === n;
        };
      }
      function r(r) {
        return l(function (s) {
          return (
            (s = +s),
            l(function (t, e) {
              for (var n, i = r([], t.length, s), o = i.length; o--; )
                t[(n = i[o])] && (t[n] = !(e[n] = t[n]));
            })
          );
        });
      }
      function v(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t;
      }
      function a() {}
      function m(t) {
        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
        return i;
      }
      function d(a, t, e) {
        var l = t.dir,
          c = e && "parentNode" === l,
          u = q++;
        return t.first
          ? function (t, e, n) {
              for (; (t = t[l]); ) if (1 === t.nodeType || c) return a(t, e, n);
            }
          : function (t, e, n) {
              var i,
                o,
                s,
                r = [R, u];
              if (n) {
                for (; (t = t[l]); )
                  if ((1 === t.nodeType || c) && a(t, e, n)) return !0;
              } else
                for (; (t = t[l]); )
                  if (1 === t.nodeType || c) {
                    if (
                      (i = (o =
                        (s = t[F] || (t[F] = {}))[t.uniqueID] ||
                        (s[t.uniqueID] = {}))[l]) &&
                      i[0] === R &&
                      i[1] === u
                    )
                      return (r[2] = i[2]);
                    if (((o[l] = r)[2] = a(t, e, n))) return !0;
                  }
            };
      }
      function p(o) {
        return 1 < o.length
          ? function (t, e, n) {
              for (var i = o.length; i--; ) if (!o[i](t, e, n)) return !1;
              return !0;
            }
          : o[0];
      }
      function y(t, e, n) {
        for (var i = 0, o = e.length; i < o; i++) j(t, e[i], n);
        return n;
      }
      function w(t, e, n, i, o) {
        for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
          (s = t[a]) && ((n && !n(s, i, o)) || (r.push(s), c && e.push(a)));
        return r;
      }
      function b(h, f, v, m, g, t) {
        return (
          m && !m[F] && (m = b(m)),
          g && !g[F] && (g = b(g, t)),
          l(function (t, e, n, i) {
            var o,
              s,
              r,
              a = [],
              l = [],
              c = e.length,
              u = t || y(f || "*", n.nodeType ? [n] : n, []),
              d = !h || (!t && f) ? u : w(u, a, h, n, i),
              p = v ? (g || (t ? h : c || m) ? [] : e) : d;
            if ((v && v(d, p, n, i), m))
              for (o = w(p, l), m(o, [], n, i), s = o.length; s--; )
                (r = o[s]) && (p[l[s]] = !(d[l[s]] = r));
            if (t) {
              if (g || h) {
                if (g) {
                  for (o = [], s = p.length; s--; )
                    (r = p[s]) && o.push((d[s] = r));
                  g(null, (p = []), o, i);
                }
                for (s = p.length; s--; )
                  (r = p[s]) &&
                    -1 < (o = g ? tt(t, r) : a[s]) &&
                    (t[o] = !(e[o] = r));
              }
            } else (p = w(p === e ? p.splice(c, p.length) : p)), g ? g(null, e, p, i) : J.apply(e, p);
          })
        );
      }
      function h(t) {
        for (
          var o,
            e,
            n,
            i = t.length,
            s = T.relative[t[0].type],
            r = s || T.relative[" "],
            a = s ? 1 : 0,
            l = d(
              function (t) {
                return t === o;
              },
              r,
              !0
            ),
            c = d(
              function (t) {
                return -1 < tt(o, t);
              },
              r,
              !0
            ),
            u = [
              function (t, e, n) {
                var i =
                  (!s && (n || e !== E)) ||
                  ((o = e).nodeType ? l(t, e, n) : c(t, e, n));
                return (o = null), i;
              },
            ];
          a < i;
          a++
        )
          if ((e = T.relative[t[a].type])) u = [d(p(u), e)];
          else {
            if ((e = T.filter[t[a].type].apply(null, t[a].matches))[F]) {
              for (n = ++a; n < i && !T.relative[t[n].type]; n++);
              return b(
                1 < a && p(u),
                1 < a &&
                  m(
                    t
                      .slice(0, a - 1)
                      .concat({ value: " " === t[a - 2].type ? "*" : "" })
                  ).replace(at, "$1"),
                e,
                a < n && h(t.slice(a, n)),
                n < i && h((t = t.slice(n))),
                n < i && m(t)
              );
            }
            u.push(e);
          }
        return p(u);
      }
      function u(m, g) {
        var y = 0 < g.length,
          b = 0 < m.length,
          t = function (t, e, n, i, o) {
            var s,
              r,
              a,
              l = 0,
              c = "0",
              u = t && [],
              d = [],
              p = E,
              h = t || (b && T.find.TAG("*", o)),
              f = (R += null == p ? 1 : Math.random() || 0.1),
              v = h.length;
            for (
              o && (E = e === M || e || o);
              c !== v && null != (s = h[c]);
              c++
            ) {
              if (b && s) {
                for (
                  r = 0, e || s.ownerDocument === M || (P(s), (n = !N));
                  (a = m[r++]);

                )
                  if (a(s, e || M, n)) {
                    i.push(s);
                    break;
                  }
                o && (R = f);
              }
              y && ((s = !a && s) && l--, t && u.push(s));
            }
            if (((l += c), y && c !== l)) {
              for (r = 0; (a = g[r++]); ) a(u, d, e, n);
              if (t) {
                if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = G.call(i));
                d = w(d);
              }
              J.apply(i, d),
                o && !t && 0 < d.length && 1 < l + g.length && j.uniqueSort(i);
            }
            return o && ((R = f), (E = p)), u;
          };
        return y ? l(t) : t;
      }
      var f,
        g,
        T,
        _,
        x,
        C,
        k,
        S,
        E,
        A,
        $,
        P,
        M,
        I,
        N,
        D,
        O,
        H,
        L,
        F = "sizzle" + 1 * new Date(),
        B = n.document,
        R = 0,
        q = 0,
        W = t(),
        z = t(),
        V = t(),
        U = function (t, e) {
          return t === e && ($ = !0), 0;
        },
        Y = 1 << 31,
        X = {}.hasOwnProperty,
        Q = [],
        G = Q.pop,
        K = Q.push,
        J = Q.push,
        Z = Q.slice,
        tt = function (t, e) {
          for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
          return -1;
        },
        et =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ot =
          "\\[" +
          nt +
          "*(" +
          it +
          ")(?:" +
          nt +
          "*([*^$|!~]?=)" +
          nt +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          it +
          "))|)" +
          nt +
          "*\\]",
        st =
          ":(" +
          it +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ot +
          ")*)|.*)\\)|)",
        rt = new RegExp(nt + "+", "g"),
        at = new RegExp(
          "^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$",
          "g"
        ),
        lt = new RegExp("^" + nt + "*," + nt + "*"),
        ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        dt = new RegExp(st),
        pt = new RegExp("^" + it + "$"),
        ht = {
          ID: new RegExp("^#(" + it + ")"),
          CLASS: new RegExp("^\\.(" + it + ")"),
          TAG: new RegExp("^(" + it + "|[*])"),
          ATTR: new RegExp("^" + ot),
          PSEUDO: new RegExp("^" + st),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              nt +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              nt +
              "*(?:([+-]|)" +
              nt +
              "*(\\d+)|))" +
              nt +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + et + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              nt +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              nt +
              "*((?:-\\d)?\\d*)" +
              nt +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ft = /^(?:input|select|textarea|button)$/i,
        vt = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        bt = /'|\\/g,
        jt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        wt = function (t, e, n) {
          var i = "0x" + e - 65536;
          return i != i || n
            ? e
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        Tt = function () {
          P();
        };
      try {
        J.apply((Q = Z.call(B.childNodes)), B.childNodes),
          Q[B.childNodes.length].nodeType;
      } catch (_t) {
        J = {
          apply: Q.length
            ? function (t, e) {
                K.apply(t, Z.call(e));
              }
            : function (t, e) {
                for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                t.length = n - 1;
              },
        };
      }
      for (f in ((g = j.support = {}),
      (x = j.isXML =
        function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
      (P = j.setDocument =
        function (t) {
          var e,
            n,
            i = t ? t.ownerDocument || t : B;
          return (
            i !== M &&
              9 === i.nodeType &&
              i.documentElement &&
              ((I = (M = i).documentElement),
              (N = !x(M)),
              (n = M.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", Tt, !1)
                  : n.attachEvent && n.attachEvent("onunload", Tt)),
              (g.attributes = o(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (g.getElementsByTagName = o(function (t) {
                return (
                  t.appendChild(M.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (g.getElementsByClassName = mt.test(M.getElementsByClassName)),
              (g.getById = o(function (t) {
                return (
                  (I.appendChild(t).id = F),
                  !M.getElementsByName || !M.getElementsByName(F).length
                );
              })),
              g.getById
                ? ((T.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                      var n = e.getElementById(t);
                      return n ? [n] : [];
                    }
                  }),
                  (T.filter.ID = function (t) {
                    var e = t.replace(jt, wt);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }))
                : (delete T.find.ID,
                  (T.filter.ID = function (t) {
                    var n = t.replace(jt, wt);
                    return function (t) {
                      var e =
                        "undefined" != typeof t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return e && e.value === n;
                    };
                  })),
              (T.find.TAG = g.getElementsByTagName
                ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : g.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var n,
                      i = [],
                      o = 0,
                      s = e.getElementsByTagName(t);
                    if ("*" !== t) return s;
                    for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }),
              (T.find.CLASS =
                g.getElementsByClassName &&
                function (t, e) {
                  if ("undefined" != typeof e.getElementsByClassName && N)
                    return e.getElementsByClassName(t);
                }),
              (O = []),
              (D = []),
              (g.qsa = mt.test(M.querySelectorAll)) &&
                (o(function (t) {
                  (I.appendChild(t).innerHTML =
                    "<a id='" +
                    F +
                    "'></a><select id='" +
                    F +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      D.push("[*^$]=" + nt + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      D.push("\\[" + nt + "*(?:value|" + et + ")"),
                    t.querySelectorAll("[id~=" + F + "-]").length ||
                      D.push("~="),
                    t.querySelectorAll(":checked").length || D.push(":checked"),
                    t.querySelectorAll("a#" + F + "+*").length ||
                      D.push(".#.+[+~]");
                }),
                o(function (t) {
                  var e = M.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      D.push("name" + nt + "*[*^$|!~]?="),
                    t.querySelectorAll(":enabled").length ||
                      D.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    D.push(",.*:");
                })),
              (g.matchesSelector = mt.test(
                (H =
                  I.matches ||
                  I.webkitMatchesSelector ||
                  I.mozMatchesSelector ||
                  I.oMatchesSelector ||
                  I.msMatchesSelector)
              )) &&
                o(function (t) {
                  (g.disconnectedMatch = H.call(t, "div")),
                    H.call(t, "[s!='']:x"),
                    O.push("!=", st);
                }),
              (D = D.length && new RegExp(D.join("|"))),
              (O = O.length && new RegExp(O.join("|"))),
              (e = mt.test(I.compareDocumentPosition)),
              (L =
                e || mt.test(I.contains)
                  ? function (t, e) {
                      var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                      return (
                        t === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (U = e
                ? function (t, e) {
                    if (t === e) return ($ = !0), 0;
                    var n =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!g.sortDetached && e.compareDocumentPosition(t) === n)
                        ? t === M || (t.ownerDocument === B && L(B, t))
                          ? -1
                          : e === M || (e.ownerDocument === B && L(B, e))
                          ? 1
                          : A
                          ? tt(A, t) - tt(A, e)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (t, e) {
                    if (t === e) return ($ = !0), 0;
                    var n,
                      i = 0,
                      o = t.parentNode,
                      s = e.parentNode,
                      r = [t],
                      a = [e];
                    if (!o || !s)
                      return t === M
                        ? -1
                        : e === M
                        ? 1
                        : o
                        ? -1
                        : s
                        ? 1
                        : A
                        ? tt(A, t) - tt(A, e)
                        : 0;
                    if (o === s) return c(t, e);
                    for (n = t; (n = n.parentNode); ) r.unshift(n);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (; r[i] === a[i]; ) i++;
                    return i
                      ? c(r[i], a[i])
                      : r[i] === B
                      ? -1
                      : a[i] === B
                      ? 1
                      : 0;
                  })),
            M
          );
        }),
      (j.matches = function (t, e) {
        return j(t, null, null, e);
      }),
      (j.matchesSelector = function (t, e) {
        if (
          ((t.ownerDocument || t) !== M && P(t),
          (e = e.replace(ut, "='$1']")),
          g.matchesSelector &&
            N &&
            !V[e + " "] &&
            (!O || !O.test(e)) &&
            (!D || !D.test(e)))
        )
          try {
            var n = H.call(t, e);
            if (
              n ||
              g.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return n;
          } catch (_t) {}
        return 0 < j(e, M, null, [t]).length;
      }),
      (j.contains = function (t, e) {
        return (t.ownerDocument || t) !== M && P(t), L(t, e);
      }),
      (j.attr = function (t, e) {
        (t.ownerDocument || t) !== M && P(t);
        var n = T.attrHandle[e.toLowerCase()],
          i =
            n && X.call(T.attrHandle, e.toLowerCase())
              ? n(t, e, !N)
              : undefined;
        return i !== undefined
          ? i
          : g.attributes || !N
          ? t.getAttribute(e)
          : (i = t.getAttributeNode(e)) && i.specified
          ? i.value
          : null;
      }),
      (j.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (j.uniqueSort = function (t) {
        var e,
          n = [],
          i = 0,
          o = 0;
        if (
          (($ = !g.detectDuplicates),
          (A = !g.sortStable && t.slice(0)),
          t.sort(U),
          $)
        ) {
          for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
          for (; i--; ) t.splice(n[i], 1);
        }
        return (A = null), t;
      }),
      (_ = j.getText =
        function (t) {
          var e,
            n = "",
            i = 0,
            o = t.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += _(t);
            } else if (3 === o || 4 === o) return t.nodeValue;
          } else for (; (e = t[i++]); ) n += _(e);
          return n;
        }),
      ((T = j.selectors =
        {
          cacheLength: 50,
          createPseudo: l,
          match: ht,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(jt, wt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(jt, wt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || j.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && j.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                n = !t[6] && t[2];
              return ht.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : n &&
                      dt.test(n) &&
                      (e = C(n, !0)) &&
                      (e = n.indexOf(")", n.length - e) - n.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(jt, wt).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = W[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) &&
                  W(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        ("undefined" != typeof t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, i, o) {
              return function (t) {
                var e = j.attr(t, n);
                return null == e
                  ? "!=" === i
                  : !i ||
                      ((e += ""),
                      "=" === i
                        ? e === o
                        : "!=" === i
                        ? e !== o
                        : "^=" === i
                        ? o && 0 === e.indexOf(o)
                        : "*=" === i
                        ? o && -1 < e.indexOf(o)
                        : "$=" === i
                        ? o && e.slice(-o.length) === o
                        : "~=" === i
                        ? -1 < (" " + e.replace(rt, " ") + " ").indexOf(o)
                        : "|=" === i &&
                          (e === o || e.slice(0, o.length + 1) === o + "-"));
              };
            },
            CHILD: function (f, t, e, v, m) {
              var g = "nth" !== f.slice(0, 3),
                y = "last" !== f.slice(-4),
                b = "of-type" === t;
              return 1 === v && 0 === m
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (t, e, n) {
                    var i,
                      o,
                      s,
                      r,
                      a,
                      l,
                      c = g !== y ? "nextSibling" : "previousSibling",
                      u = t.parentNode,
                      d = b && t.nodeName.toLowerCase(),
                      p = !n && !b,
                      h = !1;
                    if (u) {
                      if (g) {
                        for (; c; ) {
                          for (r = t; (r = r[c]); )
                            if (
                              b
                                ? r.nodeName.toLowerCase() === d
                                : 1 === r.nodeType
                            )
                              return !1;
                          l = c = "only" === f && !l && "nextSibling";
                        }
                        return !0;
                      }
                      if (((l = [y ? u.firstChild : u.lastChild]), y && p)) {
                        for (
                          h =
                            (a =
                              (i =
                                (o =
                                  (s = (r = u)[F] || (r[F] = {}))[r.uniqueID] ||
                                  (s[r.uniqueID] = {}))[f] || [])[0] === R &&
                              i[1]) && i[2],
                            r = a && u.childNodes[a];
                          (r = (++a && r && r[c]) || (h = a = 0) || l.pop());

                        )
                          if (1 === r.nodeType && ++h && r === t) {
                            o[f] = [R, a, h];
                            break;
                          }
                      } else if (
                        (p &&
                          (h = a =
                            (i =
                              (o =
                                (s = (r = t)[F] || (r[F] = {}))[r.uniqueID] ||
                                (s[r.uniqueID] = {}))[f] || [])[0] === R &&
                            i[1]),
                        !1 === h)
                      )
                        for (
                          ;
                          (r = (++a && r && r[c]) || (h = a = 0) || l.pop()) &&
                          ((b
                            ? r.nodeName.toLowerCase() !== d
                            : 1 !== r.nodeType) ||
                            !++h ||
                            (p &&
                              ((o =
                                (s = r[F] || (r[F] = {}))[r.uniqueID] ||
                                (s[r.uniqueID] = {}))[f] = [R, h]),
                            r !== t));

                        );
                      return (h -= m) === v || (h % v == 0 && 0 <= h / v);
                    }
                  };
            },
            PSEUDO: function (t, s) {
              var e,
                r =
                  T.pseudos[t] ||
                  T.setFilters[t.toLowerCase()] ||
                  j.error("unsupported pseudo: " + t);
              return r[F]
                ? r(s)
                : 1 < r.length
                ? ((e = [t, t, "", s]),
                  T.setFilters.hasOwnProperty(t.toLowerCase())
                    ? l(function (t, e) {
                        for (var n, i = r(t, s), o = i.length; o--; )
                          t[(n = tt(t, i[o]))] = !(e[n] = i[o]);
                      })
                    : function (t) {
                        return r(t, 0, e);
                      })
                : r;
            },
          },
          pseudos: {
            not: l(function (t) {
              var i = [],
                o = [],
                a = k(t.replace(at, "$1"));
              return a[F]
                ? l(function (t, e, n, i) {
                    for (var o, s = a(t, null, i, []), r = t.length; r--; )
                      (o = s[r]) && (t[r] = !(e[r] = o));
                  })
                : function (t, e, n) {
                    return (
                      (i[0] = t), a(i, null, n, o), (i[0] = null), !o.pop()
                    );
                  };
            }),
            has: l(function (e) {
              return function (t) {
                return 0 < j(e, t).length;
              };
            }),
            contains: l(function (e) {
              return (
                (e = e.replace(jt, wt)),
                function (t) {
                  return -1 < (t.textContent || t.innerText || _(t)).indexOf(e);
                }
              );
            }),
            lang: l(function (n) {
              return (
                pt.test(n || "") || j.error("unsupported lang: " + n),
                (n = n.replace(jt, wt).toLowerCase()),
                function (t) {
                  var e;
                  do {
                    if (
                      (e = N
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var e = n.location && n.location.hash;
              return e && e.slice(1) === t.id;
            },
            root: function (t) {
              return t === I;
            },
            focus: function (t) {
              return (
                t === M.activeElement &&
                (!M.hasFocus || M.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: function (t) {
              return !1 === t.disabled;
            },
            disabled: function (t) {
              return !0 === t.disabled;
            },
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !T.pseudos.empty(t);
            },
            header: function (t) {
              return vt.test(t.nodeName);
            },
            input: function (t) {
              return ft.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: r(function () {
              return [0];
            }),
            last: r(function (t, e) {
              return [e - 1];
            }),
            eq: r(function (t, e, n) {
              return [n < 0 ? n + e : n];
            }),
            even: r(function (t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t;
            }),
            odd: r(function (t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t;
            }),
            lt: r(function (t, e, n) {
              for (var i = n < 0 ? n + e : n; 0 <= --i; ) t.push(i);
              return t;
            }),
            gt: r(function (t, e, n) {
              for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
              return t;
            }),
          },
        }).pseudos.nth = T.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        T.pseudos[f] = i(f);
      for (f in { submit: !0, reset: !0 }) T.pseudos[f] = s(f);
      return (
        (a.prototype = T.filters = T.pseudos),
        (T.setFilters = new a()),
        (C = j.tokenize =
          function (t, e) {
            var n,
              i,
              o,
              s,
              r,
              a,
              l,
              c = z[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (r = t, a = [], l = T.preFilter; r; ) {
              for (s in ((n && !(i = lt.exec(r))) ||
                (i && (r = r.slice(i[0].length) || r), a.push((o = []))),
              (n = !1),
              (i = ct.exec(r)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(at, " ") }),
                (r = r.slice(n.length))),
              T.filter))
                !(i = ht[s].exec(r)) ||
                  (l[s] && !(i = l[s](i))) ||
                  ((n = i.shift()),
                  o.push({ value: n, type: s, matches: i }),
                  (r = r.slice(n.length)));
              if (!n) break;
            }
            return e ? r.length : r ? j.error(t) : z(t, a).slice(0);
          }),
        (k = j.compile =
          function (t, e) {
            var n,
              i = [],
              o = [],
              s = V[t + " "];
            if (!s) {
              for (e || (e = C(t)), n = e.length; n--; )
                (s = h(e[n]))[F] ? i.push(s) : o.push(s);
              (s = V(t, u(o, i))).selector = t;
            }
            return s;
          }),
        (S = j.select =
          function (t, e, n, i) {
            var o,
              s,
              r,
              a,
              l,
              c = "function" == typeof t && t,
              u = !i && C((t = c.selector || t));
            if (((n = n || []), 1 === u.length)) {
              if (
                2 < (s = u[0] = u[0].slice(0)).length &&
                "ID" === (r = s[0]).type &&
                g.getById &&
                9 === e.nodeType &&
                N &&
                T.relative[s[1].type]
              ) {
                if (
                  !(e = (T.find.ID(r.matches[0].replace(jt, wt), e) || [])[0])
                )
                  return n;
                c && (e = e.parentNode), (t = t.slice(s.shift().value.length));
              }
              for (
                o = ht.needsContext.test(t) ? 0 : s.length;
                o-- && ((r = s[o]), !T.relative[(a = r.type)]);

              )
                if (
                  (l = T.find[a]) &&
                  (i = l(
                    r.matches[0].replace(jt, wt),
                    (yt.test(s[0].type) && v(e.parentNode)) || e
                  ))
                ) {
                  if ((s.splice(o, 1), !(t = i.length && m(s))))
                    return J.apply(n, i), n;
                  break;
                }
            }
            return (
              (c || k(t, u))(
                i,
                e,
                !N,
                n,
                !e || (yt.test(t) && v(e.parentNode)) || e
              ),
              n
            );
          }),
        (g.sortStable = F.split("").sort(U).join("") === F),
        (g.detectDuplicates = !!$),
        P(),
        (g.sortDetached = o(function (t) {
          return 1 & t.compareDocumentPosition(M.createElement("div"));
        })),
        o(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          e("type|href|height|width", function (t, e, n) {
            if (!n)
              return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (g.attributes &&
          o(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          e("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
              return t.defaultValue;
          }),
        o(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          e(et, function (t, e, n) {
            var i;
            if (!n)
              return !0 === t[e]
                ? e.toLowerCase()
                : (i = t.getAttributeNode(e)) && i.specified
                ? i.value
                : null;
          }),
        j
      );
    })(_);
    (ht.find = yt),
      (ht.expr = yt.selectors),
      (ht.expr[":"] = ht.expr.pseudos),
      (ht.uniqueSort = ht.unique = yt.uniqueSort),
      (ht.text = yt.getText),
      (ht.isXMLDoc = yt.isXML),
      (ht.contains = yt.contains);
    var bt = function (t, e, n) {
        for (var i = [], o = n !== undefined; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (o && ht(t).is(n)) break;
            i.push(t);
          }
        return i;
      },
      jt = function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
      wt = ht.expr.match.needsContext,
      Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      _t = /^.[^:#\[\.,]*$/;
    (ht.filter = function (t, e, n) {
      var i = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType
          ? ht.find.matchesSelector(i, t)
            ? [i]
            : []
          : ht.find.matches(
              t,
              ht.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      ht.fn.extend({
        find: function (t) {
          var e,
            n = [],
            i = this,
            o = i.length;
          if ("string" != typeof t)
            return this.pushStack(
              ht(t).filter(function () {
                for (e = 0; e < o; e++) if (ht.contains(i[e], this)) return !0;
              })
            );
          for (e = 0; e < o; e++) ht.find(t, i[e], n);
          return (
            ((n = this.pushStack(1 < o ? ht.unique(n) : n)).selector = this
              .selector
              ? this.selector + " " + t
              : t),
            n
          );
        },
        filter: function (t) {
          return this.pushStack(e(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(e(this, t || [], !0));
        },
        is: function (t) {
          return !!e(
            this,
            "string" == typeof t && wt.test(t) ? ht(t) : t || [],
            !1
          ).length;
        },
      });
    var xt,
      Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((ht.fn.init = function (t, e, n) {
      var i, o;
      if (!t) return this;
      if (((n = n || xt), "string" != typeof t))
        return t.nodeType
          ? ((this.context = this[0] = t), (this.length = 1), this)
          : ht.isFunction(t)
          ? "undefined" != typeof n.ready
            ? n.ready(t)
            : t(ht)
          : (t.selector !== undefined &&
              ((this.selector = t.selector), (this.context = t.context)),
            ht.makeArray(t, this));
      if (
        !(i =
          "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length
            ? [null, t, null]
            : Ct.exec(t)) ||
        (!i[1] && e)
      )
        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
      if (i[1]) {
        if (
          ((e = e instanceof ht ? e[0] : e),
          ht.merge(
            this,
            ht.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)
          ),
          Tt.test(i[1]) && ht.isPlainObject(e))
        )
          for (i in e)
            ht.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
        return this;
      }
      if ((o = it.getElementById(i[2])) && o.parentNode) {
        if (o.id !== i[2]) return xt.find(t);
        (this.length = 1), (this[0] = o);
      }
      return (this.context = it), (this.selector = t), this;
    }).prototype = ht.fn),
      (xt = ht(it));
    var kt = /^(?:parents|prev(?:Until|All))/,
      St = { children: !0, contents: !0, next: !0, prev: !0 };
    ht.fn.extend({
      has: function (t) {
        var e,
          n = ht(t, this),
          i = n.length;
        return this.filter(function () {
          for (e = 0; e < i; e++) if (ht.contains(this, n[e])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var n,
            i = 0,
            o = this.length,
            s = [],
            r =
              wt.test(t) || "string" != typeof t ? ht(t, e || this.context) : 0;
          i < o;
          i++
        )
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? -1 < r.index(n)
                : 1 === n.nodeType && ht.find.matchesSelector(n, t))
            ) {
              s.push(n);
              break;
            }
        return this.pushStack(1 < s.length ? ht.uniqueSort(s) : s);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? ht.inArray(this[0], ht(t))
            : ht.inArray(t.jquery ? t[0] : t, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(ht.uniqueSort(ht.merge(this.get(), ht(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
      ht.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return bt(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return bt(t, "parentNode", n);
          },
          next: function (t) {
            return n(t, "nextSibling");
          },
          prev: function (t) {
            return n(t, "previousSibling");
          },
          nextAll: function (t) {
            return bt(t, "nextSibling");
          },
          prevAll: function (t) {
            return bt(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return bt(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return bt(t, "previousSibling", n);
          },
          siblings: function (t) {
            return jt((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return jt(t.firstChild);
          },
          contents: function (t) {
            return ht.nodeName(t, "iframe")
              ? t.contentDocument || t.contentWindow.document
              : ht.merge([], t.childNodes);
          },
        },
        function (i, o) {
          ht.fn[i] = function (t, e) {
            var n = ht.map(this, o, t);
            return (
              "Until" !== i.slice(-5) && (e = t),
              e && "string" == typeof e && (n = ht.filter(e, n)),
              1 < this.length &&
                (St[i] || (n = ht.uniqueSort(n)),
                kt.test(i) && (n = n.reverse())),
              this.pushStack(n)
            );
          };
        }
      );
    var Et,
      At,
      $t = /\S+/g;
    for (At in ((ht.Callbacks = function (i) {
      i = "string" == typeof i ? u(i) : ht.extend({}, i);
      var o,
        t,
        e,
        n,
        s = [],
        r = [],
        a = -1,
        l = function () {
          for (n = i.once, e = o = !0; r.length; a = -1)
            for (t = r.shift(); ++a < s.length; )
              !1 === s[a].apply(t[0], t[1]) &&
                i.stopOnFalse &&
                ((a = s.length), (t = !1));
          i.memory || (t = !1), (o = !1), n && (s = t ? [] : "");
        },
        c = {
          add: function () {
            return (
              s &&
                (t && !o && ((a = s.length - 1), r.push(t)),
                (function n(t) {
                  ht.each(t, function (t, e) {
                    ht.isFunction(e)
                      ? (i.unique && c.has(e)) || s.push(e)
                      : e && e.length && "string" !== ht.type(e) && n(e);
                  });
                })(arguments),
                t && !o && l()),
              this
            );
          },
          remove: function () {
            return (
              ht.each(arguments, function (t, e) {
                for (var n; -1 < (n = ht.inArray(e, s, n)); )
                  s.splice(n, 1), n <= a && a--;
              }),
              this
            );
          },
          has: function (t) {
            return t ? -1 < ht.inArray(t, s) : 0 < s.length;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (n = r = []), (s = t = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (n = !0), t || c.disable(), this;
          },
          locked: function () {
            return !!n;
          },
          fireWith: function (t, e) {
            return (
              n ||
                ((e = [t, (e = e || []).slice ? e.slice() : e]),
                r.push(e),
                o || l()),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!e;
          },
        };
      return c;
    }),
    ht.extend({
      Deferred: function (t) {
        var s = [
            ["resolve", "done", ht.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ht.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ht.Callbacks("memory")],
          ],
          o = "pending",
          r = {
            state: function () {
              return o;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            then: function () {
              var o = arguments;
              return ht
                .Deferred(function (i) {
                  ht.each(s, function (t, e) {
                    var n = ht.isFunction(o[t]) && o[t];
                    a[e[1]](function () {
                      var t = n && n.apply(this, arguments);
                      t && ht.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[e[0] + "With"](
                            this === r ? i.promise() : this,
                            n ? [t] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? ht.extend(t, r) : r;
            },
          },
          a = {};
        return (
          (r.pipe = r.then),
          ht.each(s, function (t, e) {
            var n = e[2],
              i = e[3];
            (r[e[1]] = n.add),
              i &&
                n.add(
                  function () {
                    o = i;
                  },
                  s[1 ^ t][2].disable,
                  s[2][2].lock
                ),
              (a[e[0]] = function () {
                return a[e[0] + "With"](this === a ? r : this, arguments), this;
              }),
              (a[e[0] + "With"] = n.fireWith);
          }),
          r.promise(a),
          t && t.call(a, a),
          a
        );
      },
      when: function (t) {
        var o,
          e,
          n,
          i = 0,
          s = ot.call(arguments),
          r = s.length,
          a = 1 !== r || (t && ht.isFunction(t.promise)) ? r : 0,
          l = 1 === a ? t : ht.Deferred(),
          c = function (e, n, i) {
            return function (t) {
              (n[e] = this),
                (i[e] = 1 < arguments.length ? ot.call(arguments) : t),
                i === o ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
            };
          };
        if (1 < r)
          for (o = new Array(r), e = new Array(r), n = new Array(r); i < r; i++)
            s[i] && ht.isFunction(s[i].promise)
              ? s[i]
                  .promise()
                  .progress(c(i, e, o))
                  .done(c(i, n, s))
                  .fail(l.reject)
              : --a;
        return a || l.resolveWith(n, s), l.promise();
      },
    }),
    (ht.fn.ready = function (t) {
      return ht.ready.promise().done(t), this;
    }),
    ht.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? ht.readyWait++ : ht.ready(!0);
      },
      ready: function (t) {
        (!0 === t ? --ht.readyWait : ht.isReady) ||
          ((ht.isReady = !0) !== t && 0 < --ht.readyWait) ||
          (Et.resolveWith(it, [ht]),
          ht.fn.triggerHandler &&
            (ht(it).triggerHandler("ready"), ht(it).off("ready")));
      },
    }),
    (ht.ready.promise = function (t) {
      if (!Et)
        if (
          ((Et = ht.Deferred()),
          "complete" === it.readyState ||
            ("loading" !== it.readyState && !it.documentElement.doScroll))
        )
          _.setTimeout(ht.ready);
        else if (it.addEventListener)
          it.addEventListener("DOMContentLoaded", s),
            _.addEventListener("load", s);
        else {
          it.attachEvent("onreadystatechange", s), _.attachEvent("onload", s);
          var e = !1;
          try {
            e = null == _.frameElement && it.documentElement;
          } catch (n) {}
          e &&
            e.doScroll &&
            (function i() {
              if (!ht.isReady) {
                try {
                  e.doScroll("left");
                } catch (n) {
                  return _.setTimeout(i, 50);
                }
                o(), ht.ready();
              }
            })();
        }
      return Et.promise(t);
    }),
    ht.ready.promise(),
    ht(dt)))
      break;
    (dt.ownFirst = "0" === At),
      (dt.inlineBlockNeedsLayout = !1),
      ht(function () {
        var t, e, n, i;
        (n = it.getElementsByTagName("body")[0]) &&
          n.style &&
          ((e = it.createElement("div")),
          ((i = it.createElement("div")).style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          n.appendChild(i).appendChild(e),
          "undefined" != typeof e.style.zoom &&
            ((e.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
            t && (n.style.zoom = 1)),
          n.removeChild(i));
      }),
      (function () {
        var t = it.createElement("div");
        dt.deleteExpando = !0;
        try {
          delete t.test;
        } catch (e) {
          dt.deleteExpando = !1;
        }
        t = null;
      })();
    var Pt,
      Mt = function (t) {
        var e = ht.noData[(t.nodeName + " ").toLowerCase()],
          n = +t.nodeType || 1;
        return (
          (1 === n || 9 === n) &&
          (!e || (!0 !== e && t.getAttribute("classid") === e))
        );
      },
      It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Nt = /([A-Z])/g;
    ht.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (t) {
        return (
          !!(t = t.nodeType ? ht.cache[t[ht.expando]] : t[ht.expando]) && !c(t)
        );
      },
      data: function (t, e, n) {
        return i(t, e, n);
      },
      removeData: function (t, e) {
        return r(t, e);
      },
      _data: function (t, e, n) {
        return i(t, e, n, !0);
      },
      _removeData: function (t, e) {
        return r(t, e, !0);
      },
    }),
      ht.fn.extend({
        data: function (t, e) {
          var n,
            i,
            o,
            s = this[0],
            r = s && s.attributes;
          if (t !== undefined)
            return "object" == typeof t
              ? this.each(function () {
                  ht.data(this, t);
                })
              : 1 < arguments.length
              ? this.each(function () {
                  ht.data(this, t, e);
                })
              : s
              ? l(s, t, ht.data(s, t))
              : undefined;
          if (
            this.length &&
            ((o = ht.data(s)), 1 === s.nodeType && !ht._data(s, "parsedAttrs"))
          ) {
            for (n = r.length; n--; )
              r[n] &&
                0 === (i = r[n].name).indexOf("data-") &&
                l(s, (i = ht.camelCase(i.slice(5))), o[i]);
            ht._data(s, "parsedAttrs", !0);
          }
          return o;
        },
        removeData: function (t) {
          return this.each(function () {
            ht.removeData(this, t);
          });
        },
      }),
      ht.extend({
        queue: function (t, e, n) {
          var i;
          if (t)
            return (
              (e = (e || "fx") + "queue"),
              (i = ht._data(t, e)),
              n &&
                (!i || ht.isArray(n)
                  ? (i = ht._data(t, e, ht.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = ht.queue(t, e),
            i = n.length,
            o = n.shift(),
            s = ht._queueHooks(t, e),
            r = function () {
              ht.dequeue(t, e);
            };
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === e && n.unshift("inprogress"),
              delete s.stop,
              o.call(t, r, s)),
            !i && s && s.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            ht._data(t, n) ||
            ht._data(t, n, {
              empty: ht.Callbacks("once memory").add(function () {
                ht._removeData(t, e + "queue"), ht._removeData(t, n);
              }),
            })
          );
        },
      }),
      ht.fn.extend({
        queue: function (e, n) {
          var t = 2;
          return (
            "string" != typeof e && ((n = e), (e = "fx"), t--),
            arguments.length < t
              ? ht.queue(this[0], e)
              : n === undefined
              ? this
              : this.each(function () {
                  var t = ht.queue(this, e, n);
                  ht._queueHooks(this, e),
                    "fx" === e && "inprogress" !== t[0] && ht.dequeue(this, e);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            ht.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            i = 1,
            o = ht.Deferred(),
            s = this,
            r = this.length,
            a = function () {
              --i || o.resolveWith(s, [s]);
            };
          for (
            "string" != typeof t && ((e = t), (t = undefined)), t = t || "fx";
            r--;

          )
            (n = ht._data(s[r], t + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(a));
          return a(), o.promise(e);
        },
      }),
      (dt.shrinkWrapBlocks = function () {
        return null != Pt
          ? Pt
          : ((Pt = !1),
            (e = it.getElementsByTagName("body")[0]) && e.style
              ? ((t = it.createElement("div")),
                ((n = it.createElement("div")).style.cssText =
                  "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                e.appendChild(n).appendChild(t),
                "undefined" != typeof t.style.zoom &&
                  ((t.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                  (t.appendChild(it.createElement("div")).style.width = "5px"),
                  (Pt = 3 !== t.offsetWidth)),
                e.removeChild(n),
                Pt)
              : void 0);
        var t, e, n;
      });
    var Dt,
      Ot,
      Ht,
      Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ft = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
      Bt = ["Top", "Right", "Bottom", "Left"],
      Rt = function (t, e) {
        return (
          (t = e || t),
          "none" === ht.css(t, "display") || !ht.contains(t.ownerDocument, t)
        );
      },
      qt = function (t, e, n, i, o, s, r) {
        var a = 0,
          l = t.length,
          c = null == n;
        if ("object" === ht.type(n))
          for (a in ((o = !0), n)) qt(t, e, a, n[a], !0, s, r);
        else if (
          i !== undefined &&
          ((o = !0),
          ht.isFunction(i) || (r = !0),
          c &&
            (r
              ? (e.call(t, i), (e = null))
              : ((c = e),
                (e = function (t, e, n) {
                  return c.call(ht(t), n);
                }))),
          e)
        )
          for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : s;
      },
      Wt = /^(?:checkbox|radio)$/i,
      zt = /<([\w:-]+)/,
      Vt = /^$|\/(?:java|ecma)script/i,
      Ut = /^\s+/,
      Yt =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    (Dt = it.createElement("div")),
      (Ot = it.createDocumentFragment()),
      (Ht = it.createElement("input")),
      (Dt.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (dt.leadingWhitespace = 3 === Dt.firstChild.nodeType),
      (dt.tbody = !Dt.getElementsByTagName("tbody").length),
      (dt.htmlSerialize = !!Dt.getElementsByTagName("link").length),
      (dt.html5Clone =
        "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML),
      (Ht.type = "checkbox"),
      (Ht.checked = !0),
      Ot.appendChild(Ht),
      (dt.appendChecked = Ht.checked),
      (Dt.innerHTML = "<textarea>x</textarea>"),
      (dt.noCloneChecked = !!Dt.cloneNode(!0).lastChild.defaultValue),
      Ot.appendChild(Dt),
      (Ht = it.createElement("input")).setAttribute("type", "radio"),
      Ht.setAttribute("checked", "checked"),
      Ht.setAttribute("name", "t"),
      Dt.appendChild(Ht),
      (dt.checkClone = Dt.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (dt.noCloneEvent = !!Dt.addEventListener),
      (Dt[ht.expando] = 1),
      (dt.attributes = !Dt.getAttribute(ht.expando));
    var Xt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    (Xt.optgroup = Xt.option),
      (Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead),
      (Xt.th = Xt.td);
    var Qt = /<|&#?\w+;/,
      Gt = /<tbody/i;
    !(function () {
      var t,
        e,
        n = it.createElement("div");
      for (t in { submit: !0, change: !0, focusin: !0 })
        (e = "on" + t),
          (dt[t] = e in _) ||
            (n.setAttribute(e, "t"), (dt[t] = !1 === n.attributes[e].expando));
      n = null;
    })();
    var Kt = /^(?:input|select|textarea)$/i,
      Jt = /^key/,
      Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      te = /^(?:focusinfocus|focusoutblur)$/,
      ee = /^([^.]*)(?:\.(.+)|)/;
    (ht.event = {
      global: {},
      add: function (t, e, n, i, o) {
        var s,
          r,
          a,
          l,
          c,
          u,
          d,
          p,
          h,
          f,
          v,
          m = ht._data(t);
        if (m) {
          for (
            n.handler && ((n = (l = n).handler), (o = l.selector)),
              n.guid || (n.guid = ht.guid++),
              (r = m.events) || (r = m.events = {}),
              (u = m.handle) ||
                ((u = m.handle =
                  function (t) {
                    return void 0 === ht || (t && ht.event.triggered === t.type)
                      ? undefined
                      : ht.event.dispatch.apply(u.elem, arguments);
                  }).elem = t),
              a = (e = (e || "").match($t) || [""]).length;
            a--;

          )
            (h = v = (s = ee.exec(e[a]) || [])[1]),
              (f = (s[2] || "").split(".").sort()),
              h &&
                ((c = ht.event.special[h] || {}),
                (h = (o ? c.delegateType : c.bindType) || h),
                (c = ht.event.special[h] || {}),
                (d = ht.extend(
                  {
                    type: h,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ht.expr.match.needsContext.test(o),
                    namespace: f.join("."),
                  },
                  l
                )),
                (p = r[h]) ||
                  (((p = r[h] = []).delegateCount = 0),
                  (c.setup && !1 !== c.setup.call(t, i, f, u)) ||
                    (t.addEventListener
                      ? t.addEventListener(h, u, !1)
                      : t.attachEvent && t.attachEvent("on" + h, u))),
                c.add &&
                  (c.add.call(t, d),
                  d.handler.guid || (d.handler.guid = n.guid)),
                o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                (ht.event.global[h] = !0));
          t = null;
        }
      },
      remove: function (t, e, n, i, o) {
        var s,
          r,
          a,
          l,
          c,
          u,
          d,
          p,
          h,
          f,
          v,
          m = ht.hasData(t) && ht._data(t);
        if (m && (u = m.events)) {
          for (c = (e = (e || "").match($t) || [""]).length; c--; )
            if (
              ((h = v = (a = ee.exec(e[c]) || [])[1]),
              (f = (a[2] || "").split(".").sort()),
              h)
            ) {
              for (
                d = ht.event.special[h] || {},
                  p = u[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  l = s = p.length;
                s--;

              )
                (r = p[s]),
                  (!o && v !== r.origType) ||
                    (n && n.guid !== r.guid) ||
                    (a && !a.test(r.namespace)) ||
                    (i && i !== r.selector && ("**" !== i || !r.selector)) ||
                    (p.splice(s, 1),
                    r.selector && p.delegateCount--,
                    d.remove && d.remove.call(t, r));
              l &&
                !p.length &&
                ((d.teardown && !1 !== d.teardown.call(t, f, m.handle)) ||
                  ht.removeEvent(t, h, m.handle),
                delete u[h]);
            } else for (h in u) ht.event.remove(t, h + e[c], n, i, !0);
          ht.isEmptyObject(u) && (delete m.handle, ht._removeData(t, "events"));
        }
      },
      trigger: function (t, e, n, i) {
        var o,
          s,
          r,
          a,
          l,
          c,
          u,
          d = [n || it],
          p = ut.call(t, "type") ? t.type : t,
          h = ut.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((r = c = n = n || it),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !te.test(p + ht.event.triggered) &&
            (-1 < p.indexOf(".") &&
              ((p = (h = p.split(".")).shift()), h.sort()),
            (s = p.indexOf(":") < 0 && "on" + p),
            ((t = t[ht.expando]
              ? t
              : new ht.Event(p, "object" == typeof t && t)).isTrigger = i
              ? 2
              : 3),
            (t.namespace = h.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = undefined),
            t.target || (t.target = n),
            (e = null == e ? [t] : ht.makeArray(e, [t])),
            (l = ht.event.special[p] || {}),
            i || !l.trigger || !1 !== l.trigger.apply(n, e)))
        ) {
          if (!i && !l.noBubble && !ht.isWindow(n)) {
            for (
              a = l.delegateType || p, te.test(a + p) || (r = r.parentNode);
              r;
              r = r.parentNode
            )
              d.push(r), (c = r);
            c === (n.ownerDocument || it) &&
              d.push(c.defaultView || c.parentWindow || _);
          }
          for (u = 0; (r = d[u++]) && !t.isPropagationStopped(); )
            (t.type = 1 < u ? a : l.bindType || p),
              (o =
                (ht._data(r, "events") || {})[t.type] &&
                ht._data(r, "handle")) && o.apply(r, e),
              (o = s && r[s]) &&
                o.apply &&
                Mt(r) &&
                ((t.result = o.apply(r, e)),
                !1 === t.result && t.preventDefault());
          if (
            ((t.type = p),
            !i &&
              !t.isDefaultPrevented() &&
              (!l._default || !1 === l._default.apply(d.pop(), e)) &&
              Mt(n) &&
              s &&
              n[p] &&
              !ht.isWindow(n))
          ) {
            (c = n[s]) && (n[s] = null), (ht.event.triggered = p);
            try {
              n[p]();
            } catch (f) {}
            (ht.event.triggered = undefined), c && (n[s] = c);
          }
          return t.result;
        }
      },
      dispatch: function (t) {
        t = ht.event.fix(t);
        var e,
          n,
          i,
          o,
          s,
          r = [],
          a = ot.call(arguments),
          l = (ht._data(this, "events") || {})[t.type] || [],
          c = ht.event.special[t.type] || {};
        if (
          (((a[0] = t).delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, t))
        ) {
          for (
            r = ht.event.handlers.call(this, t, l), e = 0;
            (o = r[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = o.elem, n = 0;
              (s = o.handlers[n++]) && !t.isImmediatePropagationStopped();

            )
              (t.rnamespace && !t.rnamespace.test(s.namespace)) ||
                ((t.handleObj = s),
                (t.data = s.data),
                (i = (
                  (ht.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, a)) !== undefined &&
                  !1 === (t.result = i) &&
                  (t.preventDefault(), t.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var n,
          i,
          o,
          s,
          r = [],
          a = e.delegateCount,
          l = t.target;
        if (
          a &&
          l.nodeType &&
          ("click" !== t.type || isNaN(t.button) || t.button < 1)
        )
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
              for (i = [], n = 0; n < a; n++)
                i[(o = (s = e[n]).selector + " ")] === undefined &&
                  (i[o] = s.needsContext
                    ? -1 < ht(o, this).index(l)
                    : ht.find(o, this, null, [l]).length),
                  i[o] && i.push(s);
              i.length && r.push({ elem: l, handlers: i });
            }
        return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r;
      },
      fix: function (t) {
        if (t[ht.expando]) return t;
        var e,
          n,
          i,
          o = t.type,
          s = t,
          r = this.fixHooks[o];
        for (
          r ||
            (this.fixHooks[o] = r =
              Zt.test(o) ? this.mouseHooks : Jt.test(o) ? this.keyHooks : {}),
            i = r.props ? this.props.concat(r.props) : this.props,
            t = new ht.Event(s),
            e = i.length;
          e--;

        )
          t[(n = i[e])] = s[n];
        return (
          t.target || (t.target = s.srcElement || it),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          (t.metaKey = !!t.metaKey),
          r.filter ? r.filter(t, s) : t
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (t, e) {
          var n,
            i,
            o,
            s = e.button,
            r = e.fromElement;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((o = (i = t.target.ownerDocument || it).documentElement),
              (n = i.body),
              (t.pageX =
                e.clientX +
                ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
                ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
                ((o && o.clientTop) || (n && n.clientTop) || 0))),
            !t.relatedTarget &&
              r &&
              (t.relatedTarget = r === t.target ? e.toElement : r),
            t.which ||
              s === undefined ||
              (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
            t
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== f() && this.focus)
              try {
                return this.focus(), !1;
              } catch (t) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === f() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (
              ht.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
            )
              return this.click(), !1;
          },
          _default: function (t) {
            return ht.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            t.result !== undefined &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
      simulate: function (t, e, n) {
        var i = ht.extend(new ht.Event(), n, { type: t, isSimulated: !0 });
        ht.event.trigger(i, null, e),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (ht.removeEvent = it.removeEventListener
        ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
          }
        : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent &&
              ("undefined" == typeof t[i] && (t[i] = null),
              t.detachEvent(i, n));
          }),
      (ht.Event = function (t, e) {
        if (!(this instanceof ht.Event)) return new ht.Event(t, e);
        t && t.type
          ? ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented =
              t.defaultPrevented ||
              (t.defaultPrevented === undefined && !1 === t.returnValue)
                ? p
                : h))
          : (this.type = t),
          e && ht.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || ht.now()),
          (this[ht.expando] = !0);
      }),
      (ht.Event.prototype = {
        constructor: ht.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = p),
            t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = p),
            t &&
              !this.isSimulated &&
              (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = p),
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      ht.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, s) {
          ht.event.special[t] = {
            delegateType: s,
            bindType: s,
            handle: function (t) {
              var e,
                n = this,
                i = t.relatedTarget,
                o = t.handleObj;
              return (
                (i && (i === n || ht.contains(n, i))) ||
                  ((t.type = o.origType),
                  (e = o.handler.apply(this, arguments)),
                  (t.type = s)),
                e
              );
            },
          };
        }
      ),
      dt.submit ||
        (ht.event.special.submit = {
          setup: function () {
            if (ht.nodeName(this, "form")) return !1;
            ht.event.add(this, "click._submit keypress._submit", function (t) {
              var e = t.target,
                n =
                  ht.nodeName(e, "input") || ht.nodeName(e, "button")
                    ? ht.prop(e, "form")
                    : undefined;
              n &&
                !ht._data(n, "submit") &&
                (ht.event.add(n, "submit._submit", function (t) {
                  t._submitBubble = !0;
                }),
                ht._data(n, "submit", !0));
            });
          },
          postDispatch: function (t) {
            t._submitBubble &&
              (delete t._submitBubble,
              this.parentNode &&
                !t.isTrigger &&
                ht.event.simulate("submit", this.parentNode, t));
          },
          teardown: function () {
            if (ht.nodeName(this, "form")) return !1;
            ht.event.remove(this, "._submit");
          },
        }),
      dt.change ||
        (ht.event.special.change = {
          setup: function () {
            if (Kt.test(this.nodeName))
              return (
                ("checkbox" !== this.type && "radio" !== this.type) ||
                  (ht.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName &&
                      (this._justChanged = !0);
                  }),
                  ht.event.add(this, "click._change", function (t) {
                    this._justChanged &&
                      !t.isTrigger &&
                      (this._justChanged = !1),
                      ht.event.simulate("change", this, t);
                  })),
                !1
              );
            ht.event.add(this, "beforeactivate._change", function (t) {
              var e = t.target;
              Kt.test(e.nodeName) &&
                !ht._data(e, "change") &&
                (ht.event.add(e, "change._change", function (t) {
                  !this.parentNode ||
                    t.isSimulated ||
                    t.isTrigger ||
                    ht.event.simulate("change", this.parentNode, t);
                }),
                ht._data(e, "change", !0));
            });
          },
          handle: function (t) {
            var e = t.target;
            if (
              this !== e ||
              t.isSimulated ||
              t.isTrigger ||
              ("radio" !== e.type && "checkbox" !== e.type)
            )
              return t.handleObj.handler.apply(this, arguments);
          },
          teardown: function () {
            return ht.event.remove(this, "._change"), !Kt.test(this.nodeName);
          },
        }),
      dt.focusin ||
        ht.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
          var o = function (t) {
            ht.event.simulate(i, t.target, ht.event.fix(t));
          };
          ht.event.special[i] = {
            setup: function () {
              var t = this.ownerDocument || this,
                e = ht._data(t, i);
              e || t.addEventListener(n, o, !0), ht._data(t, i, (e || 0) + 1);
            },
            teardown: function () {
              var t = this.ownerDocument || this,
                e = ht._data(t, i) - 1;
              e
                ? ht._data(t, i, e)
                : (t.removeEventListener(n, o, !0), ht._removeData(t, i));
            },
          };
        }),
      ht.fn.extend({
        on: function (t, e, n, i) {
          return j(this, t, e, n, i);
        },
        one: function (t, e, n, i) {
          return j(this, t, e, n, i, 1);
        },
        off: function (t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj)
            return (
              (i = t.handleObj),
              ht(t.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" != typeof t)
            return (
              (!1 !== e && "function" != typeof e) ||
                ((n = e), (e = undefined)),
              !1 === n && (n = h),
              this.each(function () {
                ht.event.remove(this, t, n, e);
              })
            );
          for (o in t) this.off(o, e, t[o]);
          return this;
        },
        trigger: function (t, e) {
          return this.each(function () {
            ht.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          if (n) return ht.event.trigger(t, e, n, !0);
        },
      });
    var ne = / jQuery\d+="(?:null|\d+)"/g,
      ie = new RegExp("<(?:" + Yt + ")[\\s/>]", "i"),
      oe =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      se = /<script|<style|<link/i,
      re = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ae = /^true\/(.*)/,
      le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ce = m(it).appendChild(it.createElement("div"));
    ht.extend({
      htmlPrefilter: function (t) {
        return t.replace(oe, "<$1></$2>");
      },
      clone: function (t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l = ht.contains(t.ownerDocument, t);
        if (
          (dt.html5Clone || ht.isXMLDoc(t) || !ie.test("<" + t.nodeName + ">")
            ? (s = t.cloneNode(!0))
            : ((ce.innerHTML = t.outerHTML),
              ce.removeChild((s = ce.firstChild))),
          !(
            (dt.noCloneEvent && dt.noCloneChecked) ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            ht.isXMLDoc(t)
          ))
        )
          for (i = g(s), a = g(t), r = 0; null != (o = a[r]); ++r)
            i[r] && k(o, i[r]);
        if (e)
          if (n)
            for (a = a || g(t), i = i || g(s), r = 0; null != (o = a[r]); r++)
              C(o, i[r]);
          else C(t, s);
        return (
          0 < (i = g(s, "script")).length && y(i, !l && g(t, "script")),
          (i = a = o = null),
          s
        );
      },
      cleanData: function (t, e) {
        for (
          var n,
            i,
            o,
            s,
            r = 0,
            a = ht.expando,
            l = ht.cache,
            c = dt.attributes,
            u = ht.event.special;
          null != (n = t[r]);
          r++
        )
          if ((e || Mt(n)) && (s = (o = n[a]) && l[o])) {
            if (s.events)
              for (i in s.events)
                u[i] ? ht.event.remove(n, i) : ht.removeEvent(n, i, s.handle);
            l[o] &&
              (delete l[o],
              c || "undefined" == typeof n.removeAttribute
                ? (n[a] = undefined)
                : n.removeAttribute(a),
              nt.push(o));
          }
      },
    }),
      ht.fn.extend({
        domManip: S,
        detach: function (t) {
          return E(this, t, !0);
        },
        remove: function (t) {
          return E(this, t);
        },
        text: function (t) {
          return qt(
            this,
            function (t) {
              return t === undefined
                ? ht.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || it).createTextNode(t)
                  );
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return S(this, arguments, function (t) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              w(this, t).appendChild(t);
          });
        },
        prepend: function () {
          return S(this, arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = w(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return S(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return S(this, arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && ht.cleanData(g(t, !1)); t.firstChild; )
              t.removeChild(t.firstChild);
            t.options && ht.nodeName(t, "select") && (t.options.length = 0);
          }
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return ht.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return qt(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                i = this.length;
              if (t === undefined)
                return 1 === e.nodeType
                  ? e.innerHTML.replace(ne, "")
                  : undefined;
              if (
                "string" == typeof t &&
                !se.test(t) &&
                (dt.htmlSerialize || !ie.test(t)) &&
                (dt.leadingWhitespace || !Ut.test(t)) &&
                !Xt[(zt.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = ht.htmlPrefilter(t);
                try {
                  for (; n < i; n++)
                    1 === (e = this[n] || {}).nodeType &&
                      (ht.cleanData(g(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (o) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return S(
            this,
            arguments,
            function (t) {
              var e = this.parentNode;
              ht.inArray(this, n) < 0 &&
                (ht.cleanData(g(this)), e && e.replaceChild(t, this));
            },
            n
          );
        },
      }),
      ht.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, r) {
          ht.fn[t] = function (t) {
            for (var e, n = 0, i = [], o = ht(t), s = o.length - 1; n <= s; n++)
              (e = n === s ? this : this.clone(!0)),
                ht(o[n])[r](e),
                rt.apply(i, e.get());
            return this.pushStack(i);
          };
        }
      );
    var ue,
      de = { HTML: "block", BODY: "block" },
      pe = /^margin/,
      he = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
      fe = function (t, e, n, i) {
        var o,
          s,
          r = {};
        for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
        for (s in ((o = n.apply(t, i || [])), e)) t.style[s] = r[s];
        return o;
      },
      ve = it.documentElement;
    !(function () {
      function t() {
        var t,
          e,
          n = it.documentElement;
        n.appendChild(c),
          (u.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i = s = l = !1),
          (o = a = !0),
          _.getComputedStyle &&
            ((e = _.getComputedStyle(u)),
            (i = "1%" !== (e || {}).top),
            (l = "2px" === (e || {}).marginLeft),
            (s = "4px" === (e || { width: "4px" }).width),
            (u.style.marginRight = "50%"),
            (o = "4px" === (e || { marginRight: "4px" }).marginRight),
            ((t = u.appendChild(it.createElement("div"))).style.cssText =
              u.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (t.style.marginRight = t.style.width = "0"),
            (u.style.width = "1px"),
            (a = !parseFloat((_.getComputedStyle(t) || {}).marginRight)),
            u.removeChild(t)),
          (u.style.display = "none"),
          (r = 0 === u.getClientRects().length) &&
            ((u.style.display = ""),
            (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (u.childNodes[0].style.borderCollapse = "separate"),
            ((t = u.getElementsByTagName("td"))[0].style.cssText =
              "margin:0;border:0;padding:0;display:none"),
            (r = 0 === t[0].offsetHeight) &&
              ((t[0].style.display = ""),
              (t[1].style.display = "none"),
              (r = 0 === t[0].offsetHeight))),
          n.removeChild(c);
      }
      var i,
        o,
        s,
        r,
        a,
        l,
        c = it.createElement("div"),
        u = it.createElement("div");
      u.style &&
        ((u.style.cssText = "float:left;opacity:.5"),
        (dt.opacity = "0.5" === u.style.opacity),
        (dt.cssFloat = !!u.style.cssFloat),
        (u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (dt.clearCloneStyle = "content-box" === u.style.backgroundClip),
        ((c = it.createElement("div")).style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (u.innerHTML = ""),
        c.appendChild(u),
        (dt.boxSizing =
          "" === u.style.boxSizing ||
          "" === u.style.MozBoxSizing ||
          "" === u.style.WebkitBoxSizing),
        ht.extend(dt, {
          reliableHiddenOffsets: function () {
            return null == i && t(), r;
          },
          boxSizingReliable: function () {
            return null == i && t(), s;
          },
          pixelMarginRight: function () {
            return null == i && t(), o;
          },
          pixelPosition: function () {
            return null == i && t(), i;
          },
          reliableMarginRight: function () {
            return null == i && t(), a;
          },
          reliableMarginLeft: function () {
            return null == i && t(), l;
          },
        }));
    })();
    var me,
      ge,
      ye = /^(top|right|bottom|left)$/;
    _.getComputedStyle
      ? ((me = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = _), e.getComputedStyle(t);
        }),
        (ge = function (t, e, n) {
          var i,
            o,
            s,
            r,
            a = t.style;
          return (
            ("" !==
              (r = (n = n || me(t))
                ? n.getPropertyValue(e) || n[e]
                : undefined) &&
              r !== undefined) ||
              ht.contains(t.ownerDocument, t) ||
              (r = ht.style(t, e)),
            n &&
              !dt.pixelMarginRight() &&
              he.test(r) &&
              pe.test(e) &&
              ((i = a.width),
              (o = a.minWidth),
              (s = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = r),
              (r = n.width),
              (a.width = i),
              (a.minWidth = o),
              (a.maxWidth = s)),
            r === undefined ? r : r + ""
          );
        }))
      : ve.currentStyle &&
        ((me = function (t) {
          return t.currentStyle;
        }),
        (ge = function (t, e, n) {
          var i,
            o,
            s,
            r,
            a = t.style;
          return (
            null == (r = (n = n || me(t)) ? n[e] : undefined) &&
              a &&
              a[e] &&
              (r = a[e]),
            he.test(r) &&
              !ye.test(e) &&
              ((i = a.left),
              (s = (o = t.runtimeStyle) && o.left) &&
                (o.left = t.currentStyle.left),
              (a.left = "fontSize" === e ? "1em" : r),
              (r = a.pixelLeft + "px"),
              (a.left = i),
              s && (o.left = s)),
            r === undefined ? r : r + "" || "auto"
          );
        }));
    var be = /alpha\([^)]*\)/i,
      je = /opacity\s*=\s*([^)]*)/i,
      we = /^(none|table(?!-c[ea]).+)/,
      Te = new RegExp("^(" + Lt + ")(.*)$", "i"),
      _e = { position: "absolute", visibility: "hidden", display: "block" },
      xe = { letterSpacing: "0", fontWeight: "400" },
      Ce = ["Webkit", "O", "Moz", "ms"],
      ke = it.createElement("div").style;
    ht.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = ge(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: dt.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
            s,
            r,
            a = ht.camelCase(e),
            l = t.style;
          if (
            ((e = ht.cssProps[a] || (ht.cssProps[a] = M(a) || a)),
            (r = ht.cssHooks[e] || ht.cssHooks[a]),
            n === undefined)
          )
            return r && "get" in r && (o = r.get(t, !1, i)) !== undefined
              ? o
              : l[e];
          if (
            ("string" === (s = typeof n) &&
              (o = Ft.exec(n)) &&
              o[1] &&
              ((n = d(t, e, o)), (s = "number")),
            null != n &&
              n == n &&
              ("number" === s &&
                (n += (o && o[3]) || (ht.cssNumber[a] ? "" : "px")),
              dt.clearCloneStyle ||
                "" !== n ||
                0 !== e.indexOf("background") ||
                (l[e] = "inherit"),
              !(r && "set" in r && (n = r.set(t, n, i)) === undefined)))
          )
            try {
              l[e] = n;
            } catch (c) {}
        }
      },
      css: function (t, e, n, i) {
        var o,
          s,
          r,
          a = ht.camelCase(e);
        return (
          (e = ht.cssProps[a] || (ht.cssProps[a] = M(a) || a)),
          (r = ht.cssHooks[e] || ht.cssHooks[a]) &&
            "get" in r &&
            (s = r.get(t, !0, n)),
          s === undefined && (s = ge(t, e, i)),
          "normal" === s && e in xe && (s = xe[e]),
          "" === n || n
            ? ((o = parseFloat(s)), !0 === n || isFinite(o) ? o || 0 : s)
            : s
        );
      },
    }),
      ht.each(["height", "width"], function (t, o) {
        ht.cssHooks[o] = {
          get: function (t, e, n) {
            if (e)
              return we.test(ht.css(t, "display")) && 0 === t.offsetWidth
                ? fe(t, _e, function () {
                    return O(t, o, n);
                  })
                : O(t, o, n);
          },
          set: function (t, e, n) {
            var i = n && me(t);
            return N(
              t,
              e,
              n
                ? D(
                    t,
                    o,
                    n,
                    dt.boxSizing &&
                      "border-box" === ht.css(t, "boxSizing", !1, i),
                    i
                  )
                : 0
            );
          },
        };
      }),
      dt.opacity ||
        (ht.cssHooks.opacity = {
          get: function (t, e) {
            return je.test(
              (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : e
              ? "1"
              : "";
          },
          set: function (t, e) {
            var n = t.style,
              i = t.currentStyle,
              o = ht.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
              s = (i && i.filter) || n.filter || "";
            (((n.zoom = 1) <= e || "" === e) &&
              "" === ht.trim(s.replace(be, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === e || (i && !i.filter))) ||
              (n.filter = be.test(s) ? s.replace(be, o) : s + " " + o);
          },
        }),
      (ht.cssHooks.marginRight = P(dt.reliableMarginRight, function (t, e) {
        if (e)
          return fe(t, { display: "inline-block" }, ge, [t, "marginRight"]);
      })),
      (ht.cssHooks.marginLeft = P(dt.reliableMarginLeft, function (t, e) {
        if (e)
          return (
            (parseFloat(ge(t, "marginLeft")) ||
              (ht.contains(t.ownerDocument, t)
                ? t.getBoundingClientRect().left -
                  fe(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })
                : 0)) + "px"
          );
      })),
      ht.each({ margin: "", padding: "", border: "Width" }, function (o, s) {
        (ht.cssHooks[o + s] = {
          expand: function (t) {
            for (
              var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t];
              e < 4;
              e++
            )
              n[o + Bt[e] + s] = i[e] || i[e - 2] || i[0];
            return n;
          },
        }),
          pe.test(o) || (ht.cssHooks[o + s].set = N);
      }),
      ht.fn.extend({
        css: function (t, e) {
          return qt(
            this,
            function (t, e, n) {
              var i,
                o,
                s = {},
                r = 0;
              if (ht.isArray(e)) {
                for (i = me(t), o = e.length; r < o; r++)
                  s[e[r]] = ht.css(t, e[r], !1, i);
                return s;
              }
              return n !== undefined ? ht.style(t, e, n) : ht.css(t, e);
            },
            t,
            e,
            1 < arguments.length
          );
        },
        show: function () {
          return I(this, !0);
        },
        hide: function () {
          return I(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                Rt(this) ? ht(this).show() : ht(this).hide();
              });
        },
      }),
      ((ht.Tween = H).prototype = {
        constructor: H,
        init: function (t, e, n, i, o, s) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = o || ht.easing._default),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = s || (ht.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = H.propHooks[this.prop];
          return t && t.get ? t.get(this) : H.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = H.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e =
                  ht.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
          );
        },
      }),
      (H.prototype.init.prototype = H.prototype),
      (H.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType ||
              (null != t.elem[t.prop] && null == t.elem.style[t.prop])
              ? t.elem[t.prop]
              : (e = ht.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0;
          },
          set: function (t) {
            ht.fx.step[t.prop]
              ? ht.fx.step[t.prop](t)
              : 1 !== t.elem.nodeType ||
                (null == t.elem.style[ht.cssProps[t.prop]] &&
                  !ht.cssHooks[t.prop])
              ? (t.elem[t.prop] = t.now)
              : ht.style(t.elem, t.prop, t.now + t.unit);
          },
        },
      }),
      (H.propHooks.scrollTop = H.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (ht.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (ht.fx = H.prototype.init),
      (ht.fx.step = {});
    var Se,
      Ee,
      Ae,
      $e,
      Pe,
      Me,
      Ie,
      Ne = /^(?:toggle|show|hide)$/,
      De = /queueHooks$/;
    (ht.Animation = ht.extend(W, {
      tweeners: {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e);
            return d(n.elem, t, Ft.exec(e), n), n;
          },
        ],
      },
      tweener: function (t, e) {
        ht.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match($t));
        for (var n, i = 0, o = t.length; i < o; i++)
          (n = t[i]),
            (W.tweeners[n] = W.tweeners[n] || []),
            W.tweeners[n].unshift(e);
      },
      prefilters: [R],
      prefilter: function (t, e) {
        e ? W.prefilters.unshift(t) : W.prefilters.push(t);
      },
    })),
      (ht.speed = function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? ht.extend({}, t)
            : {
                complete: n || (!n && e) || (ht.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !ht.isFunction(e) && e),
              };
        return (
          (i.duration = ht.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in ht.fx.speeds
            ? ht.fx.speeds[i.duration]
            : ht.fx.speeds._default),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            ht.isFunction(i.old) && i.old.call(this),
              i.queue && ht.dequeue(this, i.queue);
          }),
          i
        );
      }),
      ht.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(Rt)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, i);
        },
        animate: function (e, t, n, i) {
          var o = ht.isEmptyObject(e),
            s = ht.speed(t, n, i),
            r = function () {
              var t = W(this, ht.extend({}, e), s);
              (o || ht._data(this, "finish")) && t.stop(!0);
            };
          return (
            (r.finish = r),
            o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
          );
        },
        stop: function (o, t, s) {
          var r = function (t) {
            var e = t.stop;
            delete t.stop, e(s);
          };
          return (
            "string" != typeof o && ((s = t), (t = o), (o = undefined)),
            t && !1 !== o && this.queue(o || "fx", []),
            this.each(function () {
              var t = !0,
                e = null != o && o + "queueHooks",
                n = ht.timers,
                i = ht._data(this);
              if (e) i[e] && i[e].stop && r(i[e]);
              else for (e in i) i[e] && i[e].stop && De.test(e) && r(i[e]);
              for (e = n.length; e--; )
                n[e].elem !== this ||
                  (null != o && n[e].queue !== o) ||
                  (n[e].anim.stop(s), (t = !1), n.splice(e, 1));
              (!t && s) || ht.dequeue(this, o);
            })
          );
        },
        finish: function (r) {
          return (
            !1 !== r && (r = r || "fx"),
            this.each(function () {
              var t,
                e = ht._data(this),
                n = e[r + "queue"],
                i = e[r + "queueHooks"],
                o = ht.timers,
                s = n ? n.length : 0;
              for (
                e.finish = !0,
                  ht.queue(this, r, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === r &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < s; t++)
                n[t] && n[t].finish && n[t].finish.call(this);
              delete e.finish;
            })
          );
        },
      }),
      ht.each(["toggle", "show", "hide"], function (t, i) {
        var o = ht.fn[i];
        ht.fn[i] = function (t, e, n) {
          return null == t || "boolean" == typeof t
            ? o.apply(this, arguments)
            : this.animate(F(i, !0), t, e, n);
        };
      }),
      ht.each(
        {
          slideDown: F("show"),
          slideUp: F("hide"),
          slideToggle: F("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, i) {
          ht.fn[t] = function (t, e, n) {
            return this.animate(i, t, e, n);
          };
        }
      ),
      (ht.timers = []),
      (ht.fx.tick = function () {
        var t,
          e = ht.timers,
          n = 0;
        for (Se = ht.now(); n < e.length; n++)
          (t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || ht.fx.stop(), (Se = undefined);
      }),
      (ht.fx.timer = function (t) {
        ht.timers.push(t), t() ? ht.fx.start() : ht.timers.pop();
      }),
      (ht.fx.interval = 13),
      (ht.fx.start = function () {
        Ee || (Ee = _.setInterval(ht.fx.tick, ht.fx.interval));
      }),
      (ht.fx.stop = function () {
        _.clearInterval(Ee), (Ee = null);
      }),
      (ht.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (ht.fn.delay = function (i, t) {
        return (
          (i = (ht.fx && ht.fx.speeds[i]) || i),
          (t = t || "fx"),
          this.queue(t, function (t, e) {
            var n = _.setTimeout(t, i);
            e.stop = function () {
              _.clearTimeout(n);
            };
          })
        );
      }),
      ($e = it.createElement("input")),
      (Pe = it.createElement("div")),
      (Me = it.createElement("select")),
      (Ie = Me.appendChild(it.createElement("option"))),
      (Pe = it.createElement("div")).setAttribute("className", "t"),
      (Pe.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (Ae = Pe.getElementsByTagName("a")[0]),
      $e.setAttribute("type", "checkbox"),
      Pe.appendChild($e),
      ((Ae = Pe.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
      (dt.getSetAttribute = "t" !== Pe.className),
      (dt.style = /top/.test(Ae.getAttribute("style"))),
      (dt.hrefNormalized = "/a" === Ae.getAttribute("href")),
      (dt.checkOn = !!$e.value),
      (dt.optSelected = Ie.selected),
      (dt.enctype = !!it.createElement("form").enctype),
      (Me.disabled = !0),
      (dt.optDisabled = !Ie.disabled),
      ($e = it.createElement("input")).setAttribute("value", ""),
      (dt.input = "" === $e.getAttribute("value")),
      ($e.value = "t"),
      $e.setAttribute("type", "radio"),
      (dt.radioValue = "t" === $e.value);
    var Oe = /\r/g,
      He = /[\x20\t\r\n\f]+/g;
    ht.fn.extend({
      val: function (n) {
        var i,
          t,
          o,
          e = this[0];
        return arguments.length
          ? ((o = ht.isFunction(n)),
            this.each(function (t) {
              var e;
              1 === this.nodeType &&
                (null == (e = o ? n.call(this, t, ht(this).val()) : n)
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : ht.isArray(e) &&
                    (e = ht.map(e, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((i =
                  ht.valHooks[this.type] ||
                  ht.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in i &&
                  i.set(this, e, "value") !== undefined) ||
                  (this.value = e));
            }))
          : e
          ? (i =
              ht.valHooks[e.type] || ht.valHooks[e.nodeName.toLowerCase()]) &&
            "get" in i &&
            (t = i.get(e, "value")) !== undefined
            ? t
            : "string" == typeof (t = e.value)
            ? t.replace(Oe, "")
            : null == t
            ? ""
            : t
          : void 0;
      },
    }),
      ht.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = ht.find.attr(t, "value");
              return null != e ? e : ht.trim(ht.text(t)).replace(He, " ");
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  n,
                  i = t.options,
                  o = t.selectedIndex,
                  s = "select-one" === t.type || o < 0,
                  r = s ? null : [],
                  a = s ? o + 1 : i.length,
                  l = o < 0 ? a : s ? o : 0;
                l < a;
                l++
              )
                if (
                  ((n = i[l]).selected || l === o) &&
                  (dt.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !ht.nodeName(n.parentNode, "optgroup"))
                ) {
                  if (((e = ht(n).val()), s)) return e;
                  r.push(e);
                }
              return r;
            },
            set: function (t, e) {
              for (
                var n, i, o = t.options, s = ht.makeArray(e), r = o.length;
                r--;

              )
                if (((i = o[r]), -1 < ht.inArray(ht.valHooks.option.get(i), s)))
                  try {
                    i.selected = n = !0;
                  } catch (a) {
                    i.scrollHeight;
                  }
                else i.selected = !1;
              return n || (t.selectedIndex = -1), o;
            },
          },
        },
      }),
      ht.each(["radio", "checkbox"], function () {
        (ht.valHooks[this] = {
          set: function (t, e) {
            if (ht.isArray(e))
              return (t.checked = -1 < ht.inArray(ht(t).val(), e));
          },
        }),
          dt.checkOn ||
            (ht.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      });
    var Le,
      Fe,
      Be = ht.expr.attrHandle,
      Re = /^(?:checked|selected)$/i,
      qe = dt.getSetAttribute,
      We = dt.input;
    ht.fn.extend({
      attr: function (t, e) {
        return qt(this, ht.attr, t, e, 1 < arguments.length);
      },
      removeAttr: function (t) {
        return this.each(function () {
          ht.removeAttr(this, t);
        });
      },
    }),
      ht.extend({
        attr: function (t, e, n) {
          var i,
            o,
            s = t.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return "undefined" == typeof t.getAttribute
              ? ht.prop(t, e, n)
              : ((1 === s && ht.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (o =
                    ht.attrHooks[e] || (ht.expr.match.bool.test(e) ? Fe : Le))),
                n !== undefined
                  ? null === n
                    ? void ht.removeAttr(t, e)
                    : o && "set" in o && (i = o.set(t, n, e)) !== undefined
                    ? i
                    : (t.setAttribute(e, n + ""), n)
                  : o && "get" in o && null !== (i = o.get(t, e))
                  ? i
                  : null == (i = ht.find.attr(t, e))
                  ? undefined
                  : i);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!dt.radioValue && "radio" === e && ht.nodeName(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
        removeAttr: function (t, e) {
          var n,
            i,
            o = 0,
            s = e && e.match($t);
          if (s && 1 === t.nodeType)
            for (; (n = s[o++]); )
              (i = ht.propFix[n] || n),
                ht.expr.match.bool.test(n)
                  ? (We && qe) || !Re.test(n)
                    ? (t[i] = !1)
                    : (t[ht.camelCase("default-" + n)] = t[i] = !1)
                  : ht.attr(t, n, ""),
                t.removeAttribute(qe ? n : i);
        },
      }),
      (Fe = {
        set: function (t, e, n) {
          return (
            !1 === e
              ? ht.removeAttr(t, n)
              : (We && qe) || !Re.test(n)
              ? t.setAttribute((!qe && ht.propFix[n]) || n, n)
              : (t[ht.camelCase("default-" + n)] = t[n] = !0),
            n
          );
        },
      }),
      ht.each(ht.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var s = Be[e] || ht.find.attr;
        (We && qe) || !Re.test(e)
          ? (Be[e] = function (t, e, n) {
              var i, o;
              return (
                n ||
                  ((o = Be[e]),
                  (Be[e] = i),
                  (i = null != s(t, e, n) ? e.toLowerCase() : null),
                  (Be[e] = o)),
                i
              );
            })
          : (Be[e] = function (t, e, n) {
              if (!n)
                return t[ht.camelCase("default-" + e)] ? e.toLowerCase() : null;
            });
      }),
      (We && qe) ||
        (ht.attrHooks.value = {
          set: function (t, e, n) {
            if (!ht.nodeName(t, "input")) return Le && Le.set(t, e, n);
            t.defaultValue = e;
          },
        }),
      qe ||
        ((Le = {
          set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            if (
              (i ||
                t.setAttributeNode((i = t.ownerDocument.createAttribute(n))),
              (i.value = e += ""),
              "value" === n || e === t.getAttribute(n))
            )
              return e;
          },
        }),
        (Be.id =
          Be.name =
          Be.coords =
            function (t, e, n) {
              var i;
              if (!n)
                return (i = t.getAttributeNode(e)) && "" !== i.value
                  ? i.value
                  : null;
            }),
        (ht.valHooks.button = {
          get: function (t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value;
          },
          set: Le.set,
        }),
        (ht.attrHooks.contenteditable = {
          set: function (t, e, n) {
            Le.set(t, "" !== e && e, n);
          },
        }),
        ht.each(["width", "height"], function (t, n) {
          ht.attrHooks[n] = {
            set: function (t, e) {
              if ("" === e) return t.setAttribute(n, "auto"), e;
            },
          };
        })),
      dt.style ||
        (ht.attrHooks.style = {
          get: function (t) {
            return t.style.cssText || undefined;
          },
          set: function (t, e) {
            return (t.style.cssText = e + "");
          },
        });
    var ze = /^(?:input|select|textarea|button|object)$/i,
      Ve = /^(?:a|area)$/i;
    ht.fn.extend({
      prop: function (t, e) {
        return qt(this, ht.prop, t, e, 1 < arguments.length);
      },
      removeProp: function (e) {
        return (
          (e = ht.propFix[e] || e),
          this.each(function () {
            try {
              (this[e] = undefined), delete this[e];
            } catch (t) {}
          })
        );
      },
    }),
      ht.extend({
        prop: function (t, e, n) {
          var i,
            o,
            s = t.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return (
              (1 === s && ht.isXMLDoc(t)) ||
                ((e = ht.propFix[e] || e), (o = ht.propHooks[e])),
              n !== undefined
                ? o && "set" in o && (i = o.set(t, n, e)) !== undefined
                  ? i
                  : (t[e] = n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = ht.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : ze.test(t.nodeName) || (Ve.test(t.nodeName) && t.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      dt.hrefNormalized ||
        ht.each(["href", "src"], function (t, e) {
          ht.propHooks[e] = {
            get: function (t) {
              return t.getAttribute(e, 4);
            },
          };
        }),
      dt.optSelected ||
        (ht.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return (
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
              null
            );
          },
          set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          },
        }),
      ht.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          ht.propFix[this.toLowerCase()] = this;
        }
      ),
      dt.enctype || (ht.propFix.enctype = "encoding");
    var Ue = /[\t\r\n\f]/g;
    ht.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (ht.isFunction(e))
          return this.each(function (t) {
            ht(this).addClass(e.call(this, t, z(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match($t) || []; (n = this[l++]); )
            if (
              ((o = z(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(Ue, " ")))
            ) {
              for (r = 0; (s = t[r++]); )
                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              o !== (a = ht.trim(i)) && ht.attr(n, "class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (ht.isFunction(e))
          return this.each(function (t) {
            ht(this).removeClass(e.call(this, t, z(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match($t) || []; (n = this[l++]); )
            if (
              ((o = z(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(Ue, " ")))
            ) {
              for (r = 0; (s = t[r++]); )
                for (; -1 < i.indexOf(" " + s + " "); )
                  i = i.replace(" " + s + " ", " ");
              o !== (a = ht.trim(i)) && ht.attr(n, "class", a);
            }
        return this;
      },
      toggleClass: function (o, e) {
        var s = typeof o;
        return "boolean" == typeof e && "string" === s
          ? e
            ? this.addClass(o)
            : this.removeClass(o)
          : ht.isFunction(o)
          ? this.each(function (t) {
              ht(this).toggleClass(o.call(this, t, z(this), e), e);
            })
          : this.each(function () {
              var t, e, n, i;
              if ("string" === s)
                for (e = 0, n = ht(this), i = o.match($t) || []; (t = i[e++]); )
                  n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
              else
                (o !== undefined && "boolean" !== s) ||
                  ((t = z(this)) && ht._data(this, "__className__", t),
                  ht.attr(
                    this,
                    "class",
                    t || !1 === o ? "" : ht._data(this, "__className__") || ""
                  ));
            });
      },
      hasClass: function (t) {
        var e,
          n,
          i = 0;
        for (e = " " + t + " "; (n = this[i++]); )
          if (
            1 === n.nodeType &&
            -1 < (" " + z(n) + " ").replace(Ue, " ").indexOf(e)
          )
            return !0;
        return !1;
      },
    }),
      ht.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, n) {
          ht.fn[n] = function (t, e) {
            return 0 < arguments.length
              ? this.on(n, null, t, e)
              : this.trigger(n);
          };
        }
      ),
      ht.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
      });
    var Ye = _.location,
      Xe = ht.now(),
      Qe = /\?/,
      Ge =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (ht.parseJSON = function (t) {
      if (_.JSON && _.JSON.parse) return _.JSON.parse(t + "");
      var o,
        s = null,
        e = ht.trim(t + "");
      return e &&
        !ht.trim(
          e.replace(Ge, function (t, e, n, i) {
            return (
              o && e && (s = 0),
              0 === s ? t : ((o = n || e), (s += !i - !n), "")
            );
          })
        )
        ? Function("return " + e)()
        : ht.error("Invalid JSON: " + t);
    }),
      (ht.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          _.DOMParser
            ? (e = new _.DOMParser().parseFromString(t, "text/xml"))
            : (((e = new _.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              e.loadXML(t));
        } catch (n) {
          e = undefined;
        }
        return (
          (e &&
            e.documentElement &&
            !e.getElementsByTagName("parsererror").length) ||
            ht.error("Invalid XML: " + t),
          e
        );
      });
    var Ke = /#.*$/,
      Je = /([?&])_=[^&]*/,
      Ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      en = /^(?:GET|HEAD)$/,
      nn = /^\/\//,
      on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      sn = {},
      rn = {},
      an = "*/".concat("*"),
      ln = Ye.href,
      cn = on.exec(ln.toLowerCase()) || [];
    ht.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ln,
        type: "GET",
        isLocal: tn.test(cn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": an,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ht.parseJSON,
          "text xml": ht.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? Y(Y(t, ht.ajaxSettings), e) : Y(ht.ajaxSettings, t);
      },
      ajaxPrefilter: V(sn),
      ajaxTransport: V(rn),
      ajax: function (t, e) {
        function n(t, e, n, i) {
          var o,
            s,
            r,
            a,
            l,
            c = e;
          2 !== w &&
            ((w = 2),
            p && _.clearTimeout(p),
            (f = undefined),
            (d = i || ""),
            (T.readyState = 0 < t ? 4 : 0),
            (o = (200 <= t && t < 300) || 304 === t),
            n && (a = X(v, T, n)),
            (a = Q(v, a, T, o)),
            o
              ? (v.ifModified &&
                  ((l = T.getResponseHeader("Last-Modified")) &&
                    (ht.lastModified[u] = l),
                  (l = T.getResponseHeader("etag")) && (ht.etag[u] = l)),
                204 === t || "HEAD" === v.type
                  ? (c = "nocontent")
                  : 304 === t
                  ? (c = "notmodified")
                  : ((c = a.state), (s = a.data), (o = !(r = a.error))))
              : ((r = c), (!t && c) || ((c = "error"), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (e || c) + ""),
            o ? y.resolveWith(m, [s, c, T]) : y.rejectWith(m, [T, c, r]),
            T.statusCode(j),
            (j = undefined),
            h && g.trigger(o ? "ajaxSuccess" : "ajaxError", [T, v, o ? s : r]),
            b.fireWith(m, [T, c]),
            h &&
              (g.trigger("ajaxComplete", [T, v]),
              --ht.active || ht.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((e = t), (t = undefined)), (e = e || {});
        var i,
          o,
          u,
          d,
          p,
          h,
          f,
          s,
          v = ht.ajaxSetup({}, e),
          m = v.context || v,
          g = v.context && (m.nodeType || m.jquery) ? ht(m) : ht.event,
          y = ht.Deferred(),
          b = ht.Callbacks("once memory"),
          j = v.statusCode || {},
          r = {},
          a = {},
          w = 0,
          l = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === w) {
                if (!s)
                  for (s = {}; (e = Ze.exec(d)); ) s[e[1].toLowerCase()] = e[2];
                e = s[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === w ? d : null;
            },
            setRequestHeader: function (t, e) {
              var n = t.toLowerCase();
              return w || ((t = a[n] = a[n] || t), (r[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return w || (v.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (w < 2) for (e in t) j[e] = [j[e], t[e]];
                else T.always(t[T.status]);
              return this;
            },
            abort: function (t) {
              var e = t || l;
              return f && f.abort(e), n(0, e), this;
            },
          };
        if (
          ((y.promise(T).complete = b.add),
          (T.success = T.done),
          (T.error = T.fail),
          (v.url = ((t || v.url || ln) + "")
            .replace(Ke, "")
            .replace(nn, cn[1] + "//")),
          (v.type = e.method || e.type || v.method || v.type),
          (v.dataTypes = ht
            .trim(v.dataType || "*")
            .toLowerCase()
            .match($t) || [""]),
          null == v.crossDomain &&
            ((i = on.exec(v.url.toLowerCase())),
            (v.crossDomain = !(
              !i ||
              (i[1] === cn[1] &&
                i[2] === cn[2] &&
                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                  (cn[3] || ("http:" === cn[1] ? "80" : "443")))
            ))),
          v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ht.param(v.data, v.traditional)),
          U(sn, v, e, T),
          2 === w)
        )
          return T;
        for (o in ((h = ht.event && v.global) &&
          0 == ht.active++ &&
          ht.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !en.test(v.type)),
        (u = v.url),
        v.hasContent ||
          (v.data &&
            ((u = v.url += (Qe.test(u) ? "&" : "?") + v.data), delete v.data),
          !1 === v.cache &&
            (v.url = Je.test(u)
              ? u.replace(Je, "$1_=" + Xe++)
              : u + (Qe.test(u) ? "&" : "?") + "_=" + Xe++)),
        v.ifModified &&
          (ht.lastModified[u] &&
            T.setRequestHeader("If-Modified-Since", ht.lastModified[u]),
          ht.etag[u] && T.setRequestHeader("If-None-Match", ht.etag[u])),
        ((v.data && v.hasContent && !1 !== v.contentType) || e.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + an + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(o, v.headers[o]);
        if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || 2 === w))
          return T.abort();
        for (o in ((l = "abort"), { success: 1, error: 1, complete: 1 }))
          T[o](v[o]);
        if ((f = U(rn, v, e, T))) {
          if (((T.readyState = 1), h && g.trigger("ajaxSend", [T, v]), 2 === w))
            return T;
          v.async &&
            0 < v.timeout &&
            (p = _.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (w = 1), f.send(r, n);
          } catch (c) {
            if (!(w < 2)) throw c;
            n(-1, c);
          }
        } else n(-1, "No Transport");
        return T;
      },
      getJSON: function (t, e, n) {
        return ht.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return ht.get(t, undefined, e, "script");
      },
    }),
      ht.each(["get", "post"], function (t, o) {
        ht[o] = function (t, e, n, i) {
          return (
            ht.isFunction(e) && ((i = i || n), (n = e), (e = undefined)),
            ht.ajax(
              ht.extend(
                { url: t, type: o, dataType: i, data: e, success: n },
                ht.isPlainObject(t) && t
              )
            )
          );
        };
      }),
      (ht._evalUrl = function (t) {
        return ht.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      ht.fn.extend({
        wrapAll: function (e) {
          if (ht.isFunction(e))
            return this.each(function (t) {
              ht(this).wrapAll(e.call(this, t));
            });
          if (this[0]) {
            var t = ht(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (
                    var t = this;
                    t.firstChild && 1 === t.firstChild.nodeType;

                  )
                    t = t.firstChild;
                  return t;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (n) {
          return ht.isFunction(n)
            ? this.each(function (t) {
                ht(this).wrapInner(n.call(this, t));
              })
            : this.each(function () {
                var t = ht(this),
                  e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n);
              });
        },
        wrap: function (e) {
          var n = ht.isFunction(e);
          return this.each(function (t) {
            ht(this).wrapAll(n ? e.call(this, t) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              ht.nodeName(this, "body") ||
                ht(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (ht.expr.filters.hidden = function (t) {
        return dt.reliableHiddenOffsets()
          ? t.offsetWidth <= 0 &&
              t.offsetHeight <= 0 &&
              !t.getClientRects().length
          : K(t);
      }),
      (ht.expr.filters.visible = function (t) {
        return !ht.expr.filters.hidden(t);
      });
    var un = /%20/g,
      dn = /\[\]$/,
      pn = /\r?\n/g,
      hn = /^(?:submit|button|image|reset|file)$/i,
      fn = /^(?:input|select|textarea|keygen)/i;
    (ht.param = function (t, e) {
      var n,
        i = [],
        o = function (t, e) {
          (e = ht.isFunction(e) ? e() : null == e ? "" : e),
            (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (e === undefined &&
          (e = ht.ajaxSettings && ht.ajaxSettings.traditional),
        ht.isArray(t) || (t.jquery && !ht.isPlainObject(t)))
      )
        ht.each(t, function () {
          o(this.name, this.value);
        });
      else for (n in t) J(n, t[n], e, o);
      return i.join("&").replace(un, "+");
    }),
      ht.fn.extend({
        serialize: function () {
          return ht.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = ht.prop(this, "elements");
            return t ? ht.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !ht(this).is(":disabled") &&
                fn.test(this.nodeName) &&
                !hn.test(t) &&
                (this.checked || !Wt.test(t))
              );
            })
            .map(function (t, e) {
              var n = ht(this).val();
              return null == n
                ? null
                : ht.isArray(n)
                ? ht.map(n, function (t) {
                    return { name: e.name, value: t.replace(pn, "\r\n") };
                  })
                : { name: e.name, value: n.replace(pn, "\r\n") };
            })
            .get();
        },
      }),
      (ht.ajaxSettings.xhr =
        _.ActiveXObject !== undefined
          ? function () {
              return this.isLocal
                ? tt()
                : 8 < it.documentMode
                ? Z()
                : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                    Z()) ||
                  tt();
            }
          : Z);
    var vn = 0,
      mn = {},
      gn = ht.ajaxSettings.xhr();
    _.attachEvent &&
      _.attachEvent("onunload", function () {
        for (var t in mn) mn[t](undefined, !0);
      }),
      (dt.cors = !!gn && "withCredentials" in gn),
      (gn = dt.ajax = !!gn) &&
        ht.ajaxTransport(function (c) {
          var u;
          if (!c.crossDomain || dt.cors)
            return {
              send: function (t, r) {
                var e,
                  a = c.xhr(),
                  l = ++vn;
                if (
                  (a.open(c.type, c.url, c.async, c.username, c.password),
                  c.xhrFields)
                )
                  for (e in c.xhrFields) a[e] = c.xhrFields[e];
                for (e in (c.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(c.mimeType),
                c.crossDomain ||
                  t["X-Requested-With"] ||
                  (t["X-Requested-With"] = "XMLHttpRequest"),
                t))
                  t[e] !== undefined && a.setRequestHeader(e, t[e] + "");
                a.send((c.hasContent && c.data) || null),
                  (u = function (t, e) {
                    var n, i, o;
                    if (u && (e || 4 === a.readyState))
                      if (
                        (delete mn[l],
                        (u = undefined),
                        (a.onreadystatechange = ht.noop),
                        e)
                      )
                        4 !== a.readyState && a.abort();
                      else {
                        (o = {}),
                          (n = a.status),
                          "string" == typeof a.responseText &&
                            (o.text = a.responseText);
                        try {
                          i = a.statusText;
                        } catch (s) {
                          i = "";
                        }
                        n || !c.isLocal || c.crossDomain
                          ? 1223 === n && (n = 204)
                          : (n = o.text ? 200 : 404);
                      }
                    o && r(n, i, o, a.getAllResponseHeaders());
                  }),
                  c.async
                    ? 4 === a.readyState
                      ? _.setTimeout(u)
                      : (a.onreadystatechange = mn[l] = u)
                    : u();
              },
              abort: function () {
                u && u(undefined, !0);
              },
            };
        }),
      ht.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (t) {
            return ht.globalEval(t), t;
          },
        },
      }),
      ht.ajaxPrefilter("script", function (t) {
        t.cache === undefined && (t.cache = !1),
          t.crossDomain && ((t.type = "GET"), (t.global = !1));
      }),
      ht.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var i,
            o = it.head || ht("head")[0] || it.documentElement;
          return {
            send: function (t, n) {
              ((i = it.createElement("script")).async = !0),
                e.scriptCharset && (i.charset = e.scriptCharset),
                (i.src = e.url),
                (i.onload = i.onreadystatechange =
                  function (t, e) {
                    (e ||
                      !i.readyState ||
                      /loaded|complete/.test(i.readyState)) &&
                      ((i.onload = i.onreadystatechange = null),
                      i.parentNode && i.parentNode.removeChild(i),
                      (i = null),
                      e || n(200, "success"));
                  }),
                o.insertBefore(i, o.firstChild);
            },
            abort: function () {
              i && i.onload(undefined, !0);
            },
          };
        }
      });
    var yn = [],
      bn = /(=)\?(?=&|$)|\?\?/;
    ht.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = yn.pop() || ht.expando + "_" + Xe++;
        return (this[t] = !0), t;
      },
    }),
      ht.ajaxPrefilter("json jsonp", function (t, e, n) {
        var i,
          o,
          s,
          r =
            !1 !== t.jsonp &&
            (bn.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                bn.test(t.data) &&
                "data");
        if (r || "jsonp" === t.dataTypes[0])
          return (
            (i = t.jsonpCallback =
              ht.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            r
              ? (t[r] = t[r].replace(bn, "$1" + i))
              : !1 !== t.jsonp &&
                (t.url += (Qe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            (t.converters["script json"] = function () {
              return s || ht.error(i + " was not called"), s[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = _[i]),
            (_[i] = function () {
              s = arguments;
            }),
            n.always(function () {
              o === undefined ? ht(_).removeProp(i) : (_[i] = o),
                t[i] && ((t.jsonpCallback = e.jsonpCallback), yn.push(i)),
                s && ht.isFunction(o) && o(s[0]),
                (s = o = undefined);
            }),
            "script"
          );
      }),
      (ht.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((n = e), (e = !1)), (e = e || it);
        var i = Tt.exec(t),
          o = !n && [];
        return i
          ? [e.createElement(i[1])]
          : ((i = v([t], e, o)),
            o && o.length && ht(o).remove(),
            ht.merge([], i.childNodes));
      });
    var jn = ht.fn.load;
    (ht.fn.load = function (t, e, n) {
      if ("string" != typeof t && jn) return jn.apply(this, arguments);
      var i,
        o,
        s,
        r = this,
        a = t.indexOf(" ");
      return (
        -1 < a && ((i = ht.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
        ht.isFunction(e)
          ? ((n = e), (e = undefined))
          : e && "object" == typeof e && (o = "POST"),
        0 < r.length &&
          ht
            .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
            .done(function (t) {
              (s = arguments),
                r.html(i ? ht("<div>").append(ht.parseHTML(t)).find(i) : t);
            })
            .always(
              n &&
                function (t, e) {
                  r.each(function () {
                    n.apply(this, s || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
      ht.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          ht.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (ht.expr.filters.animated = function (e) {
        return ht.grep(ht.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (ht.offset = {
        setOffset: function (t, e, n) {
          var i,
            o,
            s,
            r,
            a,
            l,
            c = ht.css(t, "position"),
            u = ht(t),
            d = {};
          "static" === c && (t.style.position = "relative"),
            (a = u.offset()),
            (s = ht.css(t, "top")),
            (l = ht.css(t, "left")),
            ("absolute" === c || "fixed" === c) &&
            -1 < ht.inArray("auto", [s, l])
              ? ((r = (i = u.position()).top), (o = i.left))
              : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
            ht.isFunction(e) && (e = e.call(t, n, ht.extend({}, a))),
            null != e.top && (d.top = e.top - a.top + r),
            null != e.left && (d.left = e.left - a.left + o),
            "using" in e ? e.using.call(t, d) : u.css(d);
        },
      }),
      ht.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === undefined
              ? this
              : this.each(function (t) {
                  ht.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = { top: 0, left: 0 },
            o = this[0],
            s = o && o.ownerDocument;
          return s
            ? ((t = s.documentElement),
              ht.contains(t, o)
                ? ("undefined" != typeof o.getBoundingClientRect &&
                    (i = o.getBoundingClientRect()),
                  (n = et(s)),
                  {
                    top:
                      i.top +
                      (n.pageYOffset || t.scrollTop) -
                      (t.clientTop || 0),
                    left:
                      i.left +
                      (n.pageXOffset || t.scrollLeft) -
                      (t.clientLeft || 0),
                  })
                : i)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n = { top: 0, left: 0 },
              i = this[0];
            return (
              "fixed" === ht.css(i, "position")
                ? (e = i.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  ht.nodeName(t[0], "html") || (n = t.offset()),
                  (n.top += ht.css(t[0], "borderTopWidth", !0)),
                  (n.left += ht.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - n.top - ht.css(i, "marginTop", !0),
                left: e.left - n.left - ht.css(i, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent;
              t &&
              !ht.nodeName(t, "html") &&
              "static" === ht.css(t, "position");

            )
              t = t.offsetParent;
            return t || ve;
          });
        },
      }),
      ht.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, o) {
          var s = /Y/.test(o);
          ht.fn[e] = function (t) {
            return qt(
              this,
              function (t, e, n) {
                var i = et(t);
                if (n === undefined)
                  return i
                    ? o in i
                      ? i[o]
                      : i.document.documentElement[e]
                    : t[e];
                i
                  ? i.scrollTo(
                      s ? ht(i).scrollLeft() : n,
                      s ? n : ht(i).scrollTop()
                    )
                  : (t[e] = n);
              },
              e,
              t,
              arguments.length,
              null
            );
          };
        }
      ),
      ht.each(["top", "left"], function (t, n) {
        ht.cssHooks[n] = P(dt.pixelPosition, function (t, e) {
          if (e)
            return (e = ge(t, n)), he.test(e) ? ht(t).position()[n] + "px" : e;
        });
      }),
      ht.each({ Height: "height", Width: "width" }, function (s, r) {
        ht.each(
          { padding: "inner" + s, content: r, "": "outer" + s },
          function (i, t) {
            ht.fn[t] = function (t, e) {
              var n = arguments.length && (i || "boolean" != typeof t),
                o = i || (!0 === t || !0 === e ? "margin" : "border");
              return qt(
                this,
                function (t, e, n) {
                  var i;
                  return ht.isWindow(t)
                    ? t.document.documentElement["client" + s]
                    : 9 === t.nodeType
                    ? ((i = t.documentElement),
                      Math.max(
                        t.body["scroll" + s],
                        i["scroll" + s],
                        t.body["offset" + s],
                        i["offset" + s],
                        i["client" + s]
                      ))
                    : n === undefined
                    ? ht.css(t, e, o)
                    : ht.style(t, e, n, o);
                },
                r,
                n ? t : undefined,
                n,
                null
              );
            };
          }
        );
      }),
      ht.fn.extend({
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
      }),
      (ht.fn.size = function () {
        return this.length;
      }),
      (ht.fn.andSelf = ht.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return ht;
        });
    var wn = _.jQuery,
      Tn = _.$;
    return (
      (ht.noConflict = function (t) {
        return (
          _.$ === ht && (_.$ = Tn), t && _.jQuery === ht && (_.jQuery = wn), ht
        );
      }),
      t || (_.jQuery = _.$ = ht),
      ht
    );
  }),
  (function (u, l) {
    "use strict";
    var c;
    u.rails !== l && u.error("jquery-ujs has already been loaded!");
    var t = u(document);
    (u.rails = c =
      {
        linkClickSelector:
          "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector:
          "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector:
          "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector:
          "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector:
          "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector:
          "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector:
          "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector:
          "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
          return u("meta[name=csrf-token]").attr("content");
        },
        csrfParam: function () {
          return u("meta[name=csrf-param]").attr("content");
        },
        CSRFProtection: function (t) {
          var e = c.csrfToken();
          e && t.setRequestHeader("X-CSRF-Token", e);
        },
        refreshCSRFTokens: function () {
          u('form input[name="' + c.csrfParam() + '"]').val(c.csrfToken());
        },
        fire: function (t, e, n) {
          var i = u.Event(e);
          return t.trigger(i, n), !1 !== i.result;
        },
        confirm: function (t) {
          return confirm(t);
        },
        ajax: function (t) {
          return u.ajax(t);
        },
        href: function (t) {
          return t[0].href;
        },
        isRemote: function (t) {
          return t.data("remote") !== l && !1 !== t.data("remote");
        },
        handleRemote: function (i) {
          var t, e, n, o, s, r;
          if (c.fire(i, "ajax:before")) {
            if (
              ((o = i.data("with-credentials") || null),
              (s =
                i.data("type") || (u.ajaxSettings && u.ajaxSettings.dataType)),
              i.is("form"))
            ) {
              (t = i.data("ujs:submit-button-formmethod") || i.attr("method")),
                (e =
                  i.data("ujs:submit-button-formaction") || i.attr("action")),
                (n = u(i[0]).serializeArray());
              var a = i.data("ujs:submit-button");
              a && (n.push(a), i.data("ujs:submit-button", null)),
                i.data("ujs:submit-button-formmethod", null),
                i.data("ujs:submit-button-formaction", null);
            } else
              i.is(c.inputChangeSelector)
                ? ((t = i.data("method")),
                  (e = i.data("url")),
                  (n = i.serialize()),
                  i.data("params") && (n = n + "&" + i.data("params")))
                : i.is(c.buttonClickSelector)
                ? ((t = i.data("method") || "get"),
                  (e = i.data("url")),
                  (n = i.serialize()),
                  i.data("params") && (n = n + "&" + i.data("params")))
                : ((t = i.data("method")),
                  (e = c.href(i)),
                  (n = i.data("params") || null));
            return (
              (r = {
                type: t || "GET",
                data: n,
                dataType: s,
                beforeSend: function (t, e) {
                  if (
                    (e.dataType === l &&
                      t.setRequestHeader(
                        "accept",
                        "*/*;q=0.5, " + e.accepts.script
                      ),
                    !c.fire(i, "ajax:beforeSend", [t, e]))
                  )
                    return !1;
                  i.trigger("ajax:send", t);
                },
                success: function (t, e, n) {
                  i.trigger("ajax:success", [t, e, n]);
                },
                complete: function (t, e) {
                  i.trigger("ajax:complete", [t, e]);
                },
                error: function (t, e, n) {
                  i.trigger("ajax:error", [t, e, n]);
                },
                crossDomain: c.isCrossDomain(e),
              }),
              o && (r.xhrFields = { withCredentials: o }),
              e && (r.url = e),
              c.ajax(r)
            );
          }
          return !1;
        },
        isCrossDomain: function (t) {
          var e = document.createElement("a");
          e.href = location.href;
          var n = document.createElement("a");
          try {
            return (
              (n.href = t),
              (n.href = n.href),
              !(
                ((!n.protocol || ":" === n.protocol) && !n.host) ||
                e.protocol + "//" + e.host == n.protocol + "//" + n.host
              )
            );
          } catch (i) {
            return !0;
          }
        },
        handleMethod: function (t) {
          var e = c.href(t),
            n = t.data("method"),
            i = t.attr("target"),
            o = c.csrfToken(),
            s = c.csrfParam(),
            r = u('<form method="post" action="' + e + '"></form>'),
            a = '<input name="_method" value="' + n + '" type="hidden" />';
          s === l ||
            o === l ||
            c.isCrossDomain(e) ||
            (a += '<input name="' + s + '" value="' + o + '" type="hidden" />'),
            i && r.attr("target", i),
            r.hide().append(a).appendTo("body"),
            r.submit();
        },
        formElements: function (t, e) {
          return t.is("form") ? u(t[0].elements).filter(e) : t.find(e);
        },
        disableFormElements: function (t) {
          c.formElements(t, c.disableSelector).each(function () {
            c.disableFormElement(u(this));
          });
        },
        disableFormElement: function (t) {
          var e, n;
          (e = t.is("button") ? "html" : "val"),
            (n = t.data("disable-with")) !== l &&
              (t.data("ujs:enable-with", t[e]()), t[e](n)),
            t.prop("disabled", !0),
            t.data("ujs:disabled", !0);
        },
        enableFormElements: function (t) {
          c.formElements(t, c.enableSelector).each(function () {
            c.enableFormElement(u(this));
          });
        },
        enableFormElement: function (t) {
          var e = t.is("button") ? "html" : "val";
          t.data("ujs:enable-with") !== l &&
            (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.prop("disabled", !1),
            t.removeData("ujs:disabled");
        },
        allowAction: function (t) {
          var e,
            n = t.data("confirm"),
            i = !1;
          if (!n) return !0;
          if (c.fire(t, "confirm")) {
            try {
              i = c.confirm(n);
            } catch (o) {
              (console.error || console.log).call(console, o.stack || o);
            }
            e = c.fire(t, "confirm:complete", [i]);
          }
          return i && e;
        },
        blankInputs: function (t, e, n) {
          var i,
            o,
            s,
            r = u(),
            a = e || "input,textarea",
            l = t.find(a),
            c = {};
          return (
            l.each(function () {
              (i = u(this)).is("input[type=radio]")
                ? ((s = i.attr("name")),
                  c[s] ||
                    (0 ===
                      t.find('input[type=radio]:checked[name="' + s + '"]')
                        .length &&
                      ((o = t.find('input[type=radio][name="' + s + '"]')),
                      (r = r.add(o))),
                    (c[s] = s)))
                : (i.is("input[type=checkbox],input[type=radio]")
                    ? i.is(":checked")
                    : !!i.val()) === n && (r = r.add(i));
            }),
            !!r.length && r
          );
        },
        nonBlankInputs: function (t, e) {
          return c.blankInputs(t, e, !0);
        },
        stopEverything: function (t) {
          return (
            u(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
          );
        },
        disableElement: function (t) {
          var e = t.data("disable-with");
          e !== l && (t.data("ujs:enable-with", t.html()), t.html(e)),
            t.bind("click.railsDisable", function (t) {
              return c.stopEverything(t);
            }),
            t.data("ujs:disabled", !0);
        },
        enableElement: function (t) {
          t.data("ujs:enable-with") !== l &&
            (t.html(t.data("ujs:enable-with")),
            t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable"),
            t.removeData("ujs:disabled");
        },
      }),
      c.fire(t, "rails:attachBindings") &&
        (u.ajaxPrefilter(function (t, e, n) {
          t.crossDomain || c.CSRFProtection(n);
        }),
        u(window).on("pageshow.rails", function () {
          u(u.rails.enableSelector).each(function () {
            var t = u(this);
            t.data("ujs:disabled") && u.rails.enableFormElement(t);
          }),
            u(u.rails.linkDisableSelector).each(function () {
              var t = u(this);
              t.data("ujs:disabled") && u.rails.enableElement(t);
            });
        }),
        t.on("ajax:complete", c.linkDisableSelector, function () {
          c.enableElement(u(this));
        }),
        t.on("ajax:complete", c.buttonDisableSelector, function () {
          c.enableFormElement(u(this));
        }),
        t.on("click.rails", c.linkClickSelector, function (t) {
          var e = u(this),
            n = e.data("method"),
            i = e.data("params"),
            o = t.metaKey || t.ctrlKey;
          if (!c.allowAction(e)) return c.stopEverything(t);
          if (
            (!o && e.is(c.linkDisableSelector) && c.disableElement(e),
            c.isRemote(e))
          ) {
            if (o && (!n || "GET" === n) && !i) return !0;
            var s = c.handleRemote(e);
            return (
              !1 === s
                ? c.enableElement(e)
                : s.fail(function () {
                    c.enableElement(e);
                  }),
              !1
            );
          }
          return n ? (c.handleMethod(e), !1) : void 0;
        }),
        t.on("click.rails", c.buttonClickSelector, function (t) {
          var e = u(this);
          if (!c.allowAction(e) || !c.isRemote(e)) return c.stopEverything(t);
          e.is(c.buttonDisableSelector) && c.disableFormElement(e);
          var n = c.handleRemote(e);
          return (
            !1 === n
              ? c.enableFormElement(e)
              : n.fail(function () {
                  c.enableFormElement(e);
                }),
            !1
          );
        }),
        t.on("change.rails", c.inputChangeSelector, function (t) {
          var e = u(this);
          return c.allowAction(e) && c.isRemote(e)
            ? (c.handleRemote(e), !1)
            : c.stopEverything(t);
        }),
        t.on("submit.rails", c.formSubmitSelector, function (t) {
          var e,
            n,
            i = u(this),
            o = c.isRemote(i);
          if (!c.allowAction(i)) return c.stopEverything(t);
          if (i.attr("novalidate") === l)
            if (i.data("ujs:formnovalidate-button") === l) {
              if (
                (e = c.blankInputs(i, c.requiredInputSelector, !1)) &&
                c.fire(i, "ajax:aborted:required", [e])
              )
                return c.stopEverything(t);
            } else i.data("ujs:formnovalidate-button", l);
          if (o) {
            if ((n = c.nonBlankInputs(i, c.fileInputSelector))) {
              setTimeout(function () {
                c.disableFormElements(i);
              }, 13);
              var s = c.fire(i, "ajax:aborted:file", [n]);
              return (
                s ||
                  setTimeout(function () {
                    c.enableFormElements(i);
                  }, 13),
                s
              );
            }
            return c.handleRemote(i), !1;
          }
          setTimeout(function () {
            c.disableFormElements(i);
          }, 13);
        }),
        t.on("click.rails", c.formInputClickSelector, function (t) {
          var e = u(this);
          if (!c.allowAction(e)) return c.stopEverything(t);
          var n = e.attr("name"),
            i = n ? { name: n, value: e.val() } : null,
            o = e.closest("form");
          0 === o.length && (o = u("#" + e.attr("form"))),
            o.data("ujs:submit-button", i),
            o.data("ujs:formnovalidate-button", e.attr("formnovalidate")),
            o.data("ujs:submit-button-formaction", e.attr("formaction")),
            o.data("ujs:submit-button-formmethod", e.attr("formmethod"));
        }),
        t.on("ajax:send.rails", c.formSubmitSelector, function (t) {
          this === t.target && c.disableFormElements(u(this));
        }),
        t.on("ajax:complete.rails", c.formSubmitSelector, function (t) {
          this === t.target && c.enableFormElements(u(this));
        }),
        u(function () {
          c.refreshCSRFTokens();
        }));
  })(jQuery),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
!(function () {
  "use strict";
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (t[0] < 2 && t[1] < 9) ||
    (1 == t[0] && 9 == t[1] && t[2] < 1) ||
    3 < t[0]
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(),
  (function (i) {
    "use strict";
    function t() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in e) if (t.style[n] !== undefined) return { end: e[n] };
      return !1;
    }
    (i.fn.emulateTransitionEnd = function (t) {
      var e = !1,
        n = this;
      return (
        i(this).one("bsTransitionEnd", function () {
          e = !0;
        }),
        setTimeout(function () {
          e || i(n).trigger(i.support.transition.end);
        }, t),
        this
      );
    }),
      i(function () {
        (i.support.transition = t()),
          i.support.transition &&
            (i.event.special.bsTransitionEnd = {
              bindType: i.support.transition.end,
              delegateType: i.support.transition.end,
              handle: function (t) {
                if (i(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  (function (s) {
    "use strict";
    function t(n) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.alert");
        e || t.data("bs.alert", (e = new r(this))),
          "string" == typeof n && e[n].call(t);
      });
    }
    var e = '[data-dismiss="alert"]',
      r = function (t) {
        s(t).on("click", e, this.close);
      };
    (r.VERSION = "3.3.7"),
      (r.TRANSITION_DURATION = 150),
      (r.prototype.close = function (t) {
        function e() {
          o.detach().trigger("closed.bs.alert").remove();
        }
        var n = s(this),
          i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = s("#" === i ? [] : i);
        t && t.preventDefault(),
          o.length || (o = n.closest(".alert")),
          o.trigger((t = s.Event("close.bs.alert"))),
          t.isDefaultPrevented() ||
            (o.removeClass("in"),
            s.support.transition && o.hasClass("fade")
              ? o
                  .one("bsTransitionEnd", e)
                  .emulateTransitionEnd(r.TRANSITION_DURATION)
              : e());
      });
    var n = s.fn.alert;
    (s.fn.alert = t),
      (s.fn.alert.Constructor = r),
      (s.fn.alert.noConflict = function () {
        return (s.fn.alert = n), this;
      }),
      s(document).on("click.bs.alert.data-api", e, r.prototype.close);
  })(jQuery),
  (function (s) {
    "use strict";
    function n(i) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.button"),
          n = "object" == typeof i && i;
        e || t.data("bs.button", (e = new o(this, n))),
          "toggle" == i ? e.toggle() : i && e.setState(i);
      });
    }
    var o = function (t, e) {
      (this.$element = s(t)),
        (this.options = s.extend({}, o.DEFAULTS, e)),
        (this.isLoading = !1);
    };
    (o.VERSION = "3.3.7"),
      (o.DEFAULTS = { loadingText: "loading..." }),
      (o.prototype.setState = function (t) {
        var e = "disabled",
          n = this.$element,
          i = n.is("input") ? "val" : "html",
          o = n.data();
        (t += "Text"),
          null == o.resetText && n.data("resetText", n[i]()),
          setTimeout(
            s.proxy(function () {
              n[i](null == o[t] ? this.options[t] : o[t]),
                "loadingText" == t
                  ? ((this.isLoading = !0),
                    n.addClass(e).attr(e, e).prop(e, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    n.removeClass(e).removeAttr(e).prop(e, !1));
            }, this),
            0
          );
      }),
      (o.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type")
            ? (n.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == n.prop("type") &&
              (n.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var t = s.fn.button;
    (s.fn.button = n),
      (s.fn.button.Constructor = o),
      (s.fn.button.noConflict = function () {
        return (s.fn.button = t), this;
      }),
      s(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (t) {
            var e = s(t.target).closest(".btn");
            n.call(e, "toggle"),
              s(t.target).is('input[type="radio"], input[type="checkbox"]') ||
                (t.preventDefault(),
                e.is("input,button")
                  ? e.trigger("focus")
                  : e
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (t) {
            s(t.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(t.type));
          }
        );
  })(jQuery),
  (function (d) {
    "use strict";
    function r(o) {
      return this.each(function () {
        var t = d(this),
          e = t.data("bs.carousel"),
          n = d.extend({}, p.DEFAULTS, t.data(), "object" == typeof o && o),
          i = "string" == typeof o ? o : n.slide;
        e || t.data("bs.carousel", (e = new p(this, n))),
          "number" == typeof o
            ? e.to(o)
            : i
            ? e[i]()
            : n.interval && e.pause().cycle();
      });
    }
    var p = function (t, e) {
      (this.$element = d(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = e),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", d.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", d.proxy(this.cycle, this));
    };
    (p.VERSION = "3.3.7"),
      (p.TRANSITION_DURATION = 600),
      (p.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (p.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (p.prototype.cycle = function (t) {
        return (
          t || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              d.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (p.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (p.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e);
        if (
          (("prev" == t && 0 === n) ||
            ("next" == t && n == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i);
      }),
      (p.prototype.to = function (t) {
        var e = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(t > this.$items.length - 1 || t < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                e.to(t);
              })
            : n == t
            ? this.pause().cycle()
            : this.slide(n < t ? "next" : "prev", this.$items.eq(t));
      }),
      (p.prototype.pause = function (t) {
        return (
          t || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            d.support.transition &&
            (this.$element.trigger(d.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (p.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (p.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (p.prototype.slide = function (t, e) {
        var n = this.$element.find(".item.active"),
          i = e || this.getItemForDirection(t, n),
          o = this.interval,
          s = "next" == t ? "left" : "right",
          r = this;
        if (i.hasClass("active")) return (this.sliding = !1);
        var a = i[0],
          l = d.Event("slide.bs.carousel", { relatedTarget: a, direction: s });
        if ((this.$element.trigger(l), !l.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), o && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var c = d(this.$indicators.children()[this.getItemIndex(i)]);
            c && c.addClass("active");
          }
          var u = d.Event("slid.bs.carousel", {
            relatedTarget: a,
            direction: s,
          });
          return (
            d.support.transition && this.$element.hasClass("slide")
              ? (i.addClass(t),
                i[0].offsetWidth,
                n.addClass(s),
                i.addClass(s),
                n
                  .one("bsTransitionEnd", function () {
                    i.removeClass([t, s].join(" ")).addClass("active"),
                      n.removeClass(["active", s].join(" ")),
                      (r.sliding = !1),
                      setTimeout(function () {
                        r.$element.trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(p.TRANSITION_DURATION))
              : (n.removeClass("active"),
                i.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(u)),
            o && this.cycle(),
            this
          );
        }
      });
    var t = d.fn.carousel;
    (d.fn.carousel = r),
      (d.fn.carousel.Constructor = p),
      (d.fn.carousel.noConflict = function () {
        return (d.fn.carousel = t), this;
      });
    var e = function (t) {
      var e,
        n = d(this),
        i = d(
          n.attr("data-target") ||
            ((e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (i.hasClass("carousel")) {
        var o = d.extend({}, i.data(), n.data()),
          s = n.attr("data-slide-to");
        s && (o.interval = !1),
          r.call(i, o),
          s && i.data("bs.carousel").to(s),
          t.preventDefault();
      }
    };
    d(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      d(window).on("load", function () {
        d('[data-ride="carousel"]').each(function () {
          var t = d(this);
          r.call(t, t.data());
        });
      });
  })(jQuery),
  (function (r) {
    "use strict";
    function o(t) {
      var e,
        n =
          t.attr("data-target") ||
          ((e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
      return r(n);
    }
    function a(i) {
      return this.each(function () {
        var t = r(this),
          e = t.data("bs.collapse"),
          n = r.extend({}, l.DEFAULTS, t.data(), "object" == typeof i && i);
        !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
          e || t.data("bs.collapse", (e = new l(this, n))),
          "string" == typeof i && e[i]();
      });
    }
    var l = function (t, e) {
      (this.$element = r(t)),
        (this.options = r.extend({}, l.DEFAULTS, e)),
        (this.$trigger = r(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (l.VERSION = "3.3.7"),
      (l.TRANSITION_DURATION = 350),
      (l.DEFAULTS = { toggle: !0 }),
      (l.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (l.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)
          ) {
            var n = r.Event("show.bs.collapse");
            if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
              e &&
                e.length &&
                (a.call(e, "hide"), t || e.data("bs.collapse", null));
              var i = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [i](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var o = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [i](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!r.support.transition) return o.call(this);
              var s = r.camelCase(["scroll", i].join("-"));
              this.$element
                .one("bsTransitionEnd", r.proxy(o, this))
                .emulateTransitionEnd(l.TRANSITION_DURATION)
                [i](this.$element[0][s]);
            }
          }
        }
      }),
      (l.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = r.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var e = this.dimension();
            this.$element[e](this.$element[e]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var n = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            if (!r.support.transition) return n.call(this);
            this.$element[e](0)
              .one("bsTransitionEnd", r.proxy(n, this))
              .emulateTransitionEnd(l.TRANSITION_DURATION);
          }
        }
      }),
      (l.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (l.prototype.getParent = function () {
        return r(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            r.proxy(function (t, e) {
              var n = r(e);
              this.addAriaAndCollapsedClass(o(n), n);
            }, this)
          )
          .end();
      }),
      (l.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
          e.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var t = r.fn.collapse;
    (r.fn.collapse = a),
      (r.fn.collapse.Constructor = l),
      (r.fn.collapse.noConflict = function () {
        return (r.fn.collapse = t), this;
      }),
      r(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (t) {
          var e = r(this);
          e.attr("data-target") || t.preventDefault();
          var n = o(e),
            i = n.data("bs.collapse") ? "toggle" : e.data();
          a.call(n, i);
        }
      );
  })(jQuery),
  (function (a) {
    "use strict";
    function l(t) {
      var e = t.attr("data-target");
      e ||
        (e =
          (e = t.attr("href")) &&
          /#[A-Za-z]/.test(e) &&
          e.replace(/.*(?=#[^\s]*$)/, ""));
      var n = e && a(e);
      return n && n.length ? n : t.parent();
    }
    function s(i) {
      (i && 3 === i.which) ||
        (a(e).remove(),
        a(c).each(function () {
          var t = a(this),
            e = l(t),
            n = { relatedTarget: this };
          e.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              a.contains(e[0], i.target)) ||
              (e.trigger((i = a.Event("hide.bs.dropdown", n))),
              i.isDefaultPrevented() ||
                (t.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", n)))));
        }));
    }
    function t(n) {
      return this.each(function () {
        var t = a(this),
          e = t.data("bs.dropdown");
        e || t.data("bs.dropdown", (e = new i(this))),
          "string" == typeof n && e[n].call(t);
      });
    }
    var e = ".dropdown-backdrop",
      c = '[data-toggle="dropdown"]',
      i = function (t) {
        a(t).on("click.bs.dropdown", this.toggle);
      };
    (i.VERSION = "3.3.7"),
      (i.prototype.toggle = function (t) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var n = l(e),
            i = n.hasClass("open");
          if ((s(), !i)) {
            "ontouchstart" in document.documentElement &&
              !n.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", s);
            var o = { relatedTarget: this };
            if (
              (n.trigger((t = a.Event("show.bs.dropdown", o))),
              t.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              n.toggleClass("open").trigger(a.Event("shown.bs.dropdown", o));
          }
          return !1;
        }
      }),
      (i.prototype.keydown = function (t) {
        if (
          /(38|40|27|32)/.test(t.which) &&
          !/input|textarea/i.test(t.target.tagName)
        ) {
          var e = a(this);
          if (
            (t.preventDefault(),
            t.stopPropagation(),
            !e.is(".disabled, :disabled"))
          ) {
            var n = l(e),
              i = n.hasClass("open");
            if ((!i && 27 != t.which) || (i && 27 == t.which))
              return (
                27 == t.which && n.find(c).trigger("focus"), e.trigger("click")
              );
            var o = " li:not(.disabled):visible a",
              s = n.find(".dropdown-menu" + o);
            if (s.length) {
              var r = s.index(t.target);
              38 == t.which && 0 < r && r--,
                40 == t.which && r < s.length - 1 && r++,
                ~r || (r = 0),
                s.eq(r).trigger("focus");
            }
          }
        }
      });
    var n = a.fn.dropdown;
    (a.fn.dropdown = t),
      (a.fn.dropdown.Constructor = i),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = n), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", s)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", c, i.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", c, i.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          i.prototype.keydown
        );
  })(jQuery),
  (function (s) {
    "use strict";
    function r(i, o) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.modal"),
          n = s.extend({}, a.DEFAULTS, t.data(), "object" == typeof i && i);
        e || t.data("bs.modal", (e = new a(this, n))),
          "string" == typeof i ? e[i](o) : n.show && e.show(o);
      });
    }
    var a = function (t, e) {
      (this.options = e),
        (this.$body = s(document.body)),
        (this.$element = s(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            s.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (a.VERSION = "3.3.7"),
      (a.TRANSITION_DURATION = 300),
      (a.BACKDROP_TRANSITION_DURATION = 150),
      (a.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (a.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (a.prototype.show = function (n) {
        var i = this,
          t = s.Event("show.bs.modal", { relatedTarget: n });
        this.$element.trigger(t),
          this.isShown ||
            t.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              s.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                s(t.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var t = s.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                t && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var e = s.Event("shown.bs.modal", { relatedTarget: n });
              t
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(e);
                    })
                    .emulateTransitionEnd(a.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(e);
            }));
      }),
      (a.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = s.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            s(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            s.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", s.proxy(this.hideModal, this))
                  .emulateTransitionEnd(a.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (a.prototype.enforceFocus = function () {
        s(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            s.proxy(function (t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (a.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              s.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (a.prototype.resize = function () {
        this.isShown
          ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this))
          : s(window).off("resize.bs.modal");
      }),
      (a.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (a.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (a.prototype.backdrop = function (t) {
        var e = this,
          n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var i = s.support.transition && n;
          if (
            ((this.$backdrop = s(document.createElement("div"))
              .addClass("modal-backdrop " + n)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              s.proxy(function (t) {
                this.ignoreBackdropClick
                  ? (this.ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus()
                      : this.hide());
              }, this)
            ),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          i
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var o = function () {
            e.removeBackdrop(), t && t();
          };
          s.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", o)
                .emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION)
            : o();
        } else t && t();
      }),
      (a.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (a.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (a.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (a.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (a.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (a.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (a.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var t = s.fn.modal;
    (s.fn.modal = r),
      (s.fn.modal.Constructor = a),
      (s.fn.modal.noConflict = function () {
        return (s.fn.modal = t), this;
      }),
      s(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (t) {
          var e = s(this),
            n = e.attr("href"),
            i = s(
              e.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            o = i.data("bs.modal")
              ? "toggle"
              : s.extend({ remote: !/#/.test(n) && n }, i.data(), e.data());
          e.is("a") && t.preventDefault(),
            i.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                i.one("hidden.bs.modal", function () {
                  e.is(":visible") && e.trigger("focus");
                });
            }),
            r.call(i, o, this);
        }
      );
  })(jQuery),
  (function (v) {
    "use strict";
    function t(i) {
      return this.each(function () {
        var t = v(this),
          e = t.data("bs.tooltip"),
          n = "object" == typeof i && i;
        (!e && /destroy|hide/.test(i)) ||
          (e || t.data("bs.tooltip", (e = new m(this, n))),
          "string" == typeof i && e[i]());
      });
    }
    var m = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (m.VERSION = "3.3.7"),
      (m.TRANSITION_DURATION = 150),
      (m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (m.prototype.init = function (t, e, n) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = v(e)),
          (this.options = this.getOptions(n)),
          (this.$viewport =
            this.options.viewport &&
            v(
              v.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var i = this.options.trigger.split(" "), o = i.length; o--; ) {
          var s = i[o];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              v.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var r = "hover" == s ? "mouseenter" : "focusin",
              a = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              r + "." + this.type,
              this.options.selector,
              v.proxy(this.enter, this)
            ),
              this.$element.on(
                a + "." + this.type,
                this.options.selector,
                v.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = v.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (m.prototype.getDefaults = function () {
        return m.DEFAULTS;
      }),
      (m.prototype.getOptions = function (t) {
        return (
          (t = v.extend({}, this.getDefaults(), this.$element.data(), t))
            .delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (m.prototype.getDelegateOptions = function () {
        var n = {},
          i = this.getDefaults();
        return (
          this._options &&
            v.each(this._options, function (t, e) {
              i[t] != e && (n[t] = e);
            }),
          n
        );
      }),
      (m.prototype.enter = function (t) {
        var e =
          t instanceof this.constructor
            ? t
            : v(t.currentTarget).data("bs." + this.type);
        if (
          (e ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            v(t.currentTarget).data("bs." + this.type, e)),
          t instanceof v.Event &&
            (e.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          e.tip().hasClass("in") || "in" == e.hoverState)
        )
          e.hoverState = "in";
        else {
          if (
            (clearTimeout(e.timeout),
            (e.hoverState = "in"),
            !e.options.delay || !e.options.delay.show)
          )
            return e.show();
          e.timeout = setTimeout(function () {
            "in" == e.hoverState && e.show();
          }, e.options.delay.show);
        }
      }),
      (m.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (m.prototype.leave = function (t) {
        var e =
          t instanceof this.constructor
            ? t
            : v(t.currentTarget).data("bs." + this.type);
        if (
          (e ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            v(t.currentTarget).data("bs." + this.type, e)),
          t instanceof v.Event &&
            (e.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          !e.isInStateTrue())
        ) {
          if (
            (clearTimeout(e.timeout),
            (e.hoverState = "out"),
            !e.options.delay || !e.options.delay.hide)
          )
            return e.hide();
          e.timeout = setTimeout(function () {
            "out" == e.hoverState && e.hide();
          }, e.options.delay.hide);
        }
      }),
      (m.prototype.show = function () {
        var t = v.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var e = v.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (t.isDefaultPrevented() || !e) return;
          var n = this,
            i = this.tip(),
            o = this.getUID(this.type);
          this.setContent(),
            i.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && i.addClass("fade");
          var s =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, i[0], this.$element[0])
                : this.options.placement,
            r = /\s?auto?\s?/i,
            a = r.test(s);
          a && (s = s.replace(r, "") || "top"),
            i
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(s)
              .data("bs." + this.type, this),
            this.options.container
              ? i.appendTo(this.options.container)
              : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var l = this.getPosition(),
            c = i[0].offsetWidth,
            u = i[0].offsetHeight;
          if (a) {
            var d = s,
              p = this.getPosition(this.$viewport);
            (s =
              "bottom" == s && l.bottom + u > p.bottom
                ? "top"
                : "top" == s && l.top - u < p.top
                ? "bottom"
                : "right" == s && l.right + c > p.width
                ? "left"
                : "left" == s && l.left - c < p.left
                ? "right"
                : s),
              i.removeClass(d).addClass(s);
          }
          var h = this.getCalculatedOffset(s, l, c, u);
          this.applyPlacement(h, s);
          var f = function () {
            var t = n.hoverState;
            n.$element.trigger("shown.bs." + n.type),
              (n.hoverState = null),
              "out" == t && n.leave(n);
          };
          v.support.transition && this.$tip.hasClass("fade")
            ? i
                .one("bsTransitionEnd", f)
                .emulateTransitionEnd(m.TRANSITION_DURATION)
            : f();
        }
      }),
      (m.prototype.applyPlacement = function (t, e) {
        var n = this.tip(),
          i = n[0].offsetWidth,
          o = n[0].offsetHeight,
          s = parseInt(n.css("margin-top"), 10),
          r = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(r) && (r = 0),
          (t.top += s),
          (t.left += r),
          v.offset.setOffset(
            n[0],
            v.extend(
              {
                using: function (t) {
                  n.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              t
            ),
            0
          ),
          n.addClass("in");
        var a = n[0].offsetWidth,
          l = n[0].offsetHeight;
        "top" == e && l != o && (t.top = t.top + o - l);
        var c = this.getViewportAdjustedDelta(e, t, a, l);
        c.left ? (t.left += c.left) : (t.top += c.top);
        var u = /top|bottom/.test(e),
          d = u ? 2 * c.left - i + a : 2 * c.top - o + l,
          p = u ? "offsetWidth" : "offsetHeight";
        n.offset(t), this.replaceArrow(d, n[0][p], u);
      }),
      (m.prototype.replaceArrow = function (t, e, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(n ? "top" : "left", "");
      }),
      (m.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (m.prototype.hide = function (t) {
        function e() {
          "in" != n.hoverState && i.detach(),
            n.$element &&
              n.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + n.type),
            t && t();
        }
        var n = this,
          i = v(this.$tip),
          o = v.Event("hide.bs." + this.type);
        if ((this.$element.trigger(o), !o.isDefaultPrevented()))
          return (
            i.removeClass("in"),
            v.support.transition && i.hasClass("fade")
              ? i
                  .one("bsTransitionEnd", e)
                  .emulateTransitionEnd(m.TRANSITION_DURATION)
              : e(),
            (this.hoverState = null),
            this
          );
      }),
      (m.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (m.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (m.prototype.getPosition = function (t) {
        var e = (t = t || this.$element)[0],
          n = "BODY" == e.tagName,
          i = e.getBoundingClientRect();
        null == i.width &&
          (i = v.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top,
          }));
        var o = window.SVGElement && e instanceof window.SVGElement,
          s = n ? { top: 0, left: 0 } : o ? null : t.offset(),
          r = {
            scroll: n
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          a = n
            ? { width: v(window).width(), height: v(window).height() }
            : null;
        return v.extend({}, i, r, a, s);
      }),
      (m.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (m.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var s = (this.options.viewport && this.options.viewport.padding) || 0,
          r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - s - r.scroll,
            l = e.top + s - r.scroll + i;
          a < r.top
            ? (o.top = r.top - a)
            : l > r.top + r.height && (o.top = r.top + r.height - l);
        } else {
          var c = e.left - s,
            u = e.left + s + n;
          c < r.left
            ? (o.left = r.left - c)
            : u > r.right && (o.left = r.left + r.width - u);
        }
        return o;
      }),
      (m.prototype.getTitle = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (m.prototype.getUID = function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      }),
      (m.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = v(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (m.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (m.prototype.enable = function () {
        this.enabled = !0;
      }),
      (m.prototype.disable = function () {
        this.enabled = !1;
      }),
      (m.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (m.prototype.toggle = function (t) {
        var e = this;
        t &&
          ((e = v(t.currentTarget).data("bs." + this.type)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            v(t.currentTarget).data("bs." + this.type, e))),
          t
            ? ((e.inState.click = !e.inState.click),
              e.isInStateTrue() ? e.enter(e) : e.leave(e))
            : e.tip().hasClass("in")
            ? e.leave(e)
            : e.enter(e);
      }),
      (m.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      });
    var e = v.fn.tooltip;
    (v.fn.tooltip = t),
      (v.fn.tooltip.Constructor = m),
      (v.fn.tooltip.noConflict = function () {
        return (v.fn.tooltip = e), this;
      });
  })(jQuery),
  (function (o) {
    "use strict";
    function t(i) {
      return this.each(function () {
        var t = o(this),
          e = t.data("bs.popover"),
          n = "object" == typeof i && i;
        (!e && /destroy|hide/.test(i)) ||
          (e || t.data("bs.popover", (e = new s(this, n))),
          "string" == typeof i && e[i]());
      });
    }
    var s = function (t, e) {
      this.init("popover", t, e);
    };
    if (!o.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (s.VERSION = "3.3.7"),
      (s.DEFAULTS = o.extend({}, o.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (s.prototype = o.extend({}, o.fn.tooltip.Constructor.prototype)),
      ((s.prototype.constructor = s).prototype.getDefaults = function () {
        return s.DEFAULTS;
      }),
      (s.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (s.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (s.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (s.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var e = o.fn.popover;
    (o.fn.popover = t),
      (o.fn.popover.Constructor = s),
      (o.fn.popover.noConflict = function () {
        return (o.fn.popover = e), this;
      });
  })(jQuery),
  (function (s) {
    "use strict";
    function o(t, e) {
      (this.$body = s(document.body)),
        (this.$scrollElement = s(t).is(document.body) ? s(window) : s(t)),
        (this.options = s.extend({}, o.DEFAULTS, e)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          s.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function e(i) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.scrollspy"),
          n = "object" == typeof i && i;
        e || t.data("bs.scrollspy", (e = new o(this, n))),
          "string" == typeof i && e[i]();
      });
    }
    (o.VERSION = "3.3.7"),
      (o.DEFAULTS = { offset: 10 }),
      (o.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (o.prototype.refresh = function () {
        var t = this,
          i = "offset",
          o = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          s.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (o = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var t = s(this),
                e = t.data("target") || t.attr("href"),
                n = /^#./.test(e) && s(e);
              return (
                (n && n.length && n.is(":visible") && [[n[i]().top + o, e]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              t.offsets.push(this[0]), t.targets.push(this[1]);
            });
      }),
      (o.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.getScrollHeight(),
          i = this.options.offset + n - this.$scrollElement.height(),
          o = this.offsets,
          s = this.targets,
          r = this.activeTarget;
        if ((this.scrollHeight != n && this.refresh(), i <= e))
          return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return (this.activeTarget = null), this.clear();
        for (t = o.length; t--; )
          r != s[t] &&
            e >= o[t] &&
            (o[t + 1] === undefined || e < o[t + 1]) &&
            this.activate(s[t]);
      }),
      (o.prototype.activate = function (t) {
        (this.activeTarget = t), this.clear();
        var e =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          n = s(e).parents("li").addClass("active");
        n.parent(".dropdown-menu").length &&
          (n = n.closest("li.dropdown").addClass("active")),
          n.trigger("activate.bs.scrollspy");
      }),
      (o.prototype.clear = function () {
        s(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var t = s.fn.scrollspy;
    (s.fn.scrollspy = e),
      (s.fn.scrollspy.Constructor = o),
      (s.fn.scrollspy.noConflict = function () {
        return (s.fn.scrollspy = t), this;
      }),
      s(window).on("load.bs.scrollspy.data-api", function () {
        s('[data-spy="scroll"]').each(function () {
          var t = s(this);
          e.call(t, t.data());
        });
      });
  })(jQuery),
  (function (a) {
    "use strict";
    function e(n) {
      return this.each(function () {
        var t = a(this),
          e = t.data("bs.tab");
        e || t.data("bs.tab", (e = new r(this))),
          "string" == typeof n && e[n]();
      });
    }
    var r = function (t) {
      this.element = a(t);
    };
    (r.VERSION = "3.3.7"),
      (r.TRANSITION_DURATION = 150),
      (r.prototype.show = function () {
        var t = this.element,
          e = t.closest("ul:not(.dropdown-menu)"),
          n = t.data("target");
        if (
          (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")),
          !t.parent("li").hasClass("active"))
        ) {
          var i = e.find(".active:last a"),
            o = a.Event("hide.bs.tab", { relatedTarget: t[0] }),
            s = a.Event("show.bs.tab", { relatedTarget: i[0] });
          if (
            (i.trigger(o),
            t.trigger(s),
            !s.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var r = a(n);
            this.activate(t.closest("li"), e),
              this.activate(r, r.parent(), function () {
                i.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: i[0] });
              });
          }
        }
      }),
      (r.prototype.activate = function (t, e, n) {
        function i() {
          o
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            n && n();
        }
        var o = e.find("> .active"),
          s =
            n &&
            a.support.transition &&
            ((o.length && o.hasClass("fade")) || !!e.find("> .fade").length);
        o.length && s
          ? o
              .one("bsTransitionEnd", i)
              .emulateTransitionEnd(r.TRANSITION_DURATION)
          : i(),
          o.removeClass("in");
      });
    var t = a.fn.tab;
    (a.fn.tab = e),
      (a.fn.tab.Constructor = r),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = t), this;
      });
    var n = function (t) {
      t.preventDefault(), e.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', n)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
  })(jQuery),
  (function (l) {
    "use strict";
    function n(i) {
      return this.each(function () {
        var t = l(this),
          e = t.data("bs.affix"),
          n = "object" == typeof i && i;
        e || t.data("bs.affix", (e = new c(this, n))),
          "string" == typeof i && e[i]();
      });
    }
    var c = function (t, e) {
      (this.options = l.extend({}, c.DEFAULTS, e)),
        (this.$target = l(this.options.target)
          .on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            l.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = l(t)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(),
          s = this.$element.offset(),
          r = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed)
          return null != n
            ? !(o + this.unpin <= s.top) && "bottom"
            : !(o + r <= t - i) && "bottom";
        var a = null == this.affixed,
          l = a ? o : s.top;
        return null != n && o <= n
          ? "top"
          : null != i && t - i <= l + (a ? r : e) && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(l.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var t = this.$element.height(),
            e = this.options.offset,
            n = e.top,
            i = e.bottom,
            o = Math.max(l(document).height(), l(document.body).height());
          "object" != typeof e && (i = n = e),
            "function" == typeof n && (n = e.top(this.$element)),
            "function" == typeof i && (i = e.bottom(this.$element));
          var s = this.getState(o, t, n, i);
          if (this.affixed != s) {
            null != this.unpin && this.$element.css("top", "");
            var r = "affix" + (s ? "-" + s : ""),
              a = l.Event(r + ".bs.affix");
            if ((this.$element.trigger(a), a.isDefaultPrevented())) return;
            (this.affixed = s),
              (this.unpin = "bottom" == s ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(r)
                .trigger(r.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == s && this.$element.offset({ top: o - t - i });
        }
      });
    var t = l.fn.affix;
    (l.fn.affix = n),
      (l.fn.affix.Constructor = c),
      (l.fn.affix.noConflict = function () {
        return (l.fn.affix = t), this;
      }),
      l(window).on("load", function () {
        l('[data-spy="affix"]').each(function () {
          var t = l(this),
            e = t.data();
          (e.offset = e.offset || {}),
            null != e.offsetBottom && (e.offset.bottom = e.offsetBottom),
            null != e.offsetTop && (e.offset.top = e.offsetTop),
            n.call(t, e);
        });
      });
  })(jQuery),
  eval(
    (function (t, e, n, i, o, s) {
      if (
        ((o = function (t) {
          return (
            (t < e ? "" : o(parseInt(t / e))) +
            (35 < (t %= e) ? String.fromCharCode(t + 29) : t.toString(36))
          );
        }),
        !"".replace(/^/, String))
      ) {
        for (; n--; ) s[o(n)] = i[n] || o(n);
        (i = [
          function (t) {
            return s[t];
          },
        ]),
          (o = function () {
            return "\\w+";
          }),
          (n = 1);
      }
      for (; n--; )
        i[n] && (t = t.replace(new RegExp("\\b" + o(n) + "\\b", "g"), i[n]));
      return t;
    })(
      '7 8(a){a=a||{};r.s.1R.2k(2,3d);2.Q=a.1v||"";2.1H=a.1B||J;2.S=a.1G||0;2.H=a.1z||1h r.s.1Y(0,0);2.B=a.U||1h r.s.2E(0,0);2.15=a.13||t;2.1p=a.1t||"2h";2.1m=a.F||{};2.1E=a.1C||"3g";2.P=a.1j||"3b://38.r.33/2Y/2T/2N/1r.2K";3(a.1j===""){2.P=""}2.1f=a.1x||1h r.s.1Y(1,1);3(q a.A==="p"){3(q a.18==="p"){a.A=L}v{a.A=!a.18}}2.w=!a.A;2.17=a.1n||J;2.1I=a.2g||"2e";2.16=a.1l||J;2.4=t;2.z=t;2.14=t;2.V=t;2.E=t;2.R=t}8.9=1h r.s.1R();8.9.25=7(){5 i;5 f;5 a;5 d=2;5 c=7(e){e.20=L;3(e.1i){e.1i()}};5 b=7(e){e.30=J;3(e.1Z){e.1Z()}3(!d.16){c(e)}};3(!2.4){2.4=1e.2S("2Q");2.1d();3(q 2.Q.1u==="p"){2.4.O=2.G()+2.Q}v{2.4.O=2.G();2.4.1a(2.Q)}2.2J()[2.1I].1a(2.4);2.1w();3(2.4.6.D){2.R=L}v{3(2.S!==0&&2.4.Z>2.S){2.4.6.D=2.S;2.4.6.2D="2A";2.R=L}v{a=2.1P();2.4.6.D=(2.4.Z-a.W-a.11)+"12";2.R=J}}2.1F(2.1H);3(!2.16){2.E=[];f=["2t","1O","2q","2p","1M","2o","2n","2m","2l"];1o(i=0;i<f.1L;i++){2.E.1K(r.s.u.19(2.4,f[i],c))}2.E.1K(r.s.u.19(2.4,"1O",7(e){2.6.1J="2j"}))}2.V=r.s.u.19(2.4,"2i",b);r.s.u.T(2,"2f")}};8.9.G=7(){5 a="";3(2.P!==""){a="<2d";a+=" 2c=\'"+2.P+"\'";a+=" 2b=11";a+=" 6=\'";a+=" U: 2a;";a+=" 1J: 29;";a+=" 28: "+2.1E+";";a+="\'>"}K a};8.9.1w=7(){5 a;3(2.P!==""){a=2.4.3n;2.z=r.s.u.19(a,"1M",2.27())}v{2.z=t}};8.9.27=7(){5 a=2;K 7(e){e.20=L;3(e.1i){e.1i()}r.s.u.T(a,"3m");a.1r()}};8.9.1F=7(d){5 m;5 n;5 e=0,I=0;3(!d){m=2.1D();3(m 3l r.s.3k){3(!m.26().3h(2.B)){m.3f(2.B)}n=m.26();5 a=m.3e();5 h=a.Z;5 f=a.24;5 k=2.H.D;5 l=2.H.1k;5 g=2.4.Z;5 b=2.4.24;5 i=2.1f.D;5 j=2.1f.1k;5 o=2.23().3c(2.B);3(o.x<(-k+i)){e=o.x+k-i}v 3((o.x+g+k+i)>h){e=o.x+g+k+i-h}3(2.17){3(o.y<(-l+j+b)){I=o.y+l-j-b}v 3((o.y+l+j)>f){I=o.y+l+j-f}}v{3(o.y<(-l+j)){I=o.y+l-j}v 3((o.y+b+l+j)>f){I=o.y+b+l+j-f}}3(!(e===0&&I===0)){5 c=m.3a();m.39(e,I)}}}};8.9.1d=7(){5 i,F;3(2.4){2.4.37=2.1p;2.4.6.36="";F=2.1m;1o(i 35 F){3(F.34(i)){2.4.6[i]=F[i]}}2.4.6.32="31(0)";3(q 2.4.6.X!=="p"&&2.4.6.X!==""){2.4.6.2Z="\\"2X:2W.2V.2U(2R="+(2.4.6.X*1X)+")\\"";2.4.6.2P="2O(X="+(2.4.6.X*1X)+")"}2.4.6.U="2M";2.4.6.M=\'1c\';3(2.15!==t){2.4.6.13=2.15}}};8.9.1P=7(){5 c;5 a={1b:0,1g:0,W:0,11:0};5 b=2.4;3(1e.1s&&1e.1s.1W){c=b.2L.1s.1W(b,"");3(c){a.1b=C(c.1V,10)||0;a.1g=C(c.1U,10)||0;a.W=C(c.1T,10)||0;a.11=C(c.1S,10)||0}}v 3(1e.2I.N){3(b.N){a.1b=C(b.N.1V,10)||0;a.1g=C(b.N.1U,10)||0;a.W=C(b.N.1T,10)||0;a.11=C(b.N.1S,10)||0}}K a};8.9.2H=7(){3(2.4){2.4.2G.2F(2.4);2.4=t}};8.9.1y=7(){2.25();5 a=2.23().2C(2.B);2.4.6.W=(a.x+2.H.D)+"12";3(2.17){2.4.6.1g=-(a.y+2.H.1k)+"12"}v{2.4.6.1b=(a.y+2.H.1k)+"12"}3(2.w){2.4.6.M="1c"}v{2.4.6.M="A"}};8.9.2B=7(a){3(q a.1t!=="p"){2.1p=a.1t;2.1d()}3(q a.F!=="p"){2.1m=a.F;2.1d()}3(q a.1v!=="p"){2.1Q(a.1v)}3(q a.1B!=="p"){2.1H=a.1B}3(q a.1G!=="p"){2.S=a.1G}3(q a.1z!=="p"){2.H=a.1z}3(q a.1n!=="p"){2.17=a.1n}3(q a.U!=="p"){2.1q(a.U)}3(q a.13!=="p"){2.22(a.13)}3(q a.1C!=="p"){2.1E=a.1C}3(q a.1j!=="p"){2.P=a.1j}3(q a.1x!=="p"){2.1f=a.1x}3(q a.18!=="p"){2.w=a.18}3(q a.A!=="p"){2.w=!a.A}3(q a.1l!=="p"){2.16=a.1l}3(2.4){2.1y()}};8.9.1Q=7(a){2.Q=a;3(2.4){3(2.z){r.s.u.Y(2.z);2.z=t}3(!2.R){2.4.6.D=""}3(q a.1u==="p"){2.4.O=2.G()+a}v{2.4.O=2.G();2.4.1a(a)}3(!2.R){2.4.6.D=2.4.Z+"12";3(q a.1u==="p"){2.4.O=2.G()+a}v{2.4.O=2.G();2.4.1a(a)}}2.1w()}r.s.u.T(2,"2z")};8.9.1q=7(a){2.B=a;3(2.4){2.1y()}r.s.u.T(2,"21")};8.9.22=7(a){2.15=a;3(2.4){2.4.6.13=a}r.s.u.T(2,"2y")};8.9.2x=7(a){2.w=!a;3(2.4){2.4.6.M=(2.w?"1c":"A")}};8.9.2w=7(){K 2.Q};8.9.1A=7(){K 2.B};8.9.2v=7(){K 2.15};8.9.2u=7(){5 a;3((q 2.1D()==="p")||(2.1D()===t)){a=J}v{a=!2.w}K a};8.9.3i=7(){2.w=J;3(2.4){2.4.6.M="A"}};8.9.3j=7(){2.w=L;3(2.4){2.4.6.M="1c"}};8.9.2s=7(c,b){5 a=2;3(b){2.B=b.1A();2.14=r.s.u.2r(b,"21",7(){a.1q(2.1A())})}2.1N(c);3(2.4){2.1F()}};8.9.1r=7(){5 i;3(2.z){r.s.u.Y(2.z);2.z=t}3(2.E){1o(i=0;i<2.E.1L;i++){r.s.u.Y(2.E[i])}2.E=t}3(2.14){r.s.u.Y(2.14);2.14=t}3(2.V){r.s.u.Y(2.V);2.V=t}2.1N(t)};',
      62,
      210,
      "||this|if|div_|var|style|function|InfoBox|prototype||||||||||||||||undefined|typeof|google|maps|null|event|else|isHidden_|||closeListener_|visible|position_|parseInt|width|eventListeners_|boxStyle|getCloseBoxImg_|pixelOffset_|yOffset|false|return|true|visibility|currentStyle|innerHTML|closeBoxURL_|content_|fixedWidthSet_|maxWidth_|trigger|position|contextListener_|left|opacity|removeListener|offsetWidth||right|px|zIndex|moveListener_|zIndex_|enableEventPropagation_|alignBottom_|isHidden|addDomListener|appendChild|top|hidden|setBoxStyle_|document|infoBoxClearance_|bottom|new|stopPropagation|closeBoxURL|height|enableEventPropagation|boxStyle_|alignBottom|for|boxClass_|setPosition|close|defaultView|boxClass|nodeType|content|addClickHandler_|infoBoxClearance|draw|pixelOffset|getPosition|disableAutoPan|closeBoxMargin|getMap|closeBoxMargin_|panBox_|maxWidth|disableAutoPan_|pane_|cursor|push|length|click|setMap|mouseover|getBoxWidths_|setContent|OverlayView|borderRightWidth|borderLeftWidth|borderBottomWidth|borderTopWidth|getComputedStyle|100|Size|preventDefault|cancelBubble|position_changed|setZIndex|getProjection|offsetHeight|createInfoBoxDiv_|getBounds|getCloseClickHandler_|margin|pointer|relative|align|src|img|floatPane|domready|pane|infoBox|contextmenu|default|apply|touchmove|touchend|touchstart|dblclick|mouseup|mouseout|addListener|open|mousedown|getVisible|getZIndex|getContent|setVisible|zindex_changed|content_changed|auto|setOptions|fromLatLngToDivPixel|overflow|LatLng|removeChild|parentNode|onRemove|documentElement|getPanes|gif|ownerDocument|absolute|mapfiles|alpha|filter|div|Opacity|createElement|en_us|Alpha|Microsoft|DXImageTransform|progid|intl|MsFilter|returnValue|translateZ|WebkitTransform|com|hasOwnProperty|in|cssText|className|www|panBy|getCenter|http|fromLatLngToContainerPixel|arguments|getDiv|setCenter|2px|contains|show|hide|Map|instanceof|closeclick|firstChild".split(
        "|"
      ),
      0,
      {}
    )
  ),
  (function () {
    function t() {}
    function o(t) {
      return a.retinaImageSuffix + t;
    }
    function s(t, e) {
      if (((this.path = t || ""), null != e))
        (this.at_2x_path = e), (this.perform_check = !1);
      else {
        if (undefined !== document.createElement) {
          var n = document.createElement("a");
          (n.href = this.path),
            (n.pathname = n.pathname.replace(l, o)),
            (this.at_2x_path = n.href);
        } else {
          var i = this.path.split("?");
          (i[0] = i[0].replace(l, o)), (this.at_2x_path = i.join("?"));
        }
        this.perform_check = !0;
      }
    }
    function r(t) {
      (this.el = t),
        (this.path = new s(
          this.el.getAttribute("src"),
          this.el.getAttribute("data-at2x")
        ));
      var e = this;
      this.path.check_2x_variant(function (t) {
        t && e.swap();
      });
    }
    var e = "undefined" == typeof exports ? window : exports,
      a = {
        retinaImageSuffix: "@2x",
        check_mime_type: !0,
        force_original_dimensions: !0,
      };
    ((e.Retina = t).configure = function (t) {
      for (var e in (null === t && (t = {}), t))
        t.hasOwnProperty(e) && (a[e] = t[e]);
    }),
      (t.init = function (t) {
        null === t && (t = e);
        var o = t.onload || function () {};
        t.onload = function () {
          var t,
            e,
            n = document.getElementsByTagName("img"),
            i = [];
          for (t = 0; t < n.length; t += 1)
            (e = n[t]).getAttributeNode("data-no-retina") || i.push(new r(e));
          o();
        };
      }),
      (t.isRetina = function () {
        var t =
          "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return (
          1 < e.devicePixelRatio || !(!e.matchMedia || !e.matchMedia(t).matches)
        );
      });
    var l = /\.\w+$/;
    ((e.RetinaImagePath = s).confirmed_paths = []),
      (s.prototype.is_external = function () {
        return !(
          !this.path.match(/^https?\:/i) ||
          this.path.match("//" + document.domain)
        );
      }),
      (s.prototype.check_2x_variant = function (e) {
        var n,
          i = this;
        return this.is_external()
          ? e(!1)
          : this.perform_check ||
            "undefined" == typeof this.at_2x_path ||
            null === this.at_2x_path
          ? this.at_2x_path in s.confirmed_paths
            ? e(!0)
            : ((n = new XMLHttpRequest()).open("HEAD", this.at_2x_path),
              (n.onreadystatechange = function () {
                if (4 !== n.readyState) return e(!1);
                if (200 <= n.status && n.status <= 399) {
                  if (a.check_mime_type) {
                    var t = n.getResponseHeader("Content-Type");
                    if (null === t || !t.match(/^image/i)) return e(!1);
                  }
                  return s.confirmed_paths.push(i.at_2x_path), e(!0);
                }
                return e(!1);
              }),
              void n.send())
          : e(!0);
      }),
      ((e.RetinaImage = r).prototype.swap = function (t) {
        function e() {
          n.el.complete
            ? (a.force_original_dimensions &&
                (n.el.setAttribute("width", n.el.offsetWidth),
                n.el.setAttribute("height", n.el.offsetHeight)),
              n.el.setAttribute("src", t))
            : setTimeout(e, 5);
        }
        void 0 === t && (t = this.path.at_2x_path);
        var n = this;
        e();
      }),
      t.isRetina() && t.init(e);
  })();
var editor = (function () {
    function t() {
      if ($("#zenpenbubble").length) {
        (lastRange = 0), i();
        var t = document.createRange(),
          e = window.getSelection();
        e.removeAllRanges(), e.addRange(t), n();
      }
    }
    function n() {
      (document.onkeyup = e),
        (document.onmousedown = e),
        (document.onmouseup = function (t) {
          setTimeout(function () {
            e(t);
          }, 1);
        }),
        window.addEventListener("resize", function () {
          o();
        });
      var t = !0;
      document.body.addEventListener("scroll", function () {
        if (t)
          return (
            (t = !0),
            o(),
            setTimeout(function () {
              t = !0;
            }, 250)
          );
      });
    }
    function i() {
      document.querySelector(".content"),
        (b = document.querySelector(".text-options")),
        (j = b.querySelector(".options")),
        ((w = b.querySelector(".bold")).onclick = u),
        ((T = b.querySelector(".italic")).onclick = d),
        ((_ = b.querySelector(".url")).onmousedown = p),
        ((x = b.querySelector(".url-input")).onblur = f),
        (x.onkeydown = h);
    }
    function e(t) {
      var e = window.getSelection();
      return "url-input" === t.target.className ||
        ("undefined" != typeof t.target.classList &&
          t.target.classList.contains("url"))
        ? ((y = a(e.focusNode)), void s())
        : null != t.target.parentNode.classList &&
          t.target.parentNode.classList.contains("ui-inputs")
        ? ((y = a(e.focusNode)), void s())
        : (!0 === e.isCollapsed && !1 === g && r(),
          !1 === e.isCollapsed &&
            ((y = a(e.focusNode)),
            1 == l(e.focusNode) &&
              (s(), o(), (b.className = "text-options active"))),
          void (g = e.isCollapsed));
    }
    function o() {
      var t = window.getSelection().getRangeAt(0).getBoundingClientRect();
      (b.style.top = t.top - 5 + window.pageYOffset + "px"),
        (b.style.left = (t.left + t.right) / 2 + "px");
    }
    function s() {
      c(y, "B") ? (w.className = "bold active") : (w.className = "bold"),
        c(y, "I") ? (T.className = "italic active") : (T.className = "italic"),
        c(y, "A")
          ? (_.className = "url useicons active")
          : (_.className = "url useicons");
    }
    function r() {
      (b.className = "text-options fade"),
        setTimeout(function () {
          "text-options fade" == b.className &&
            ((b.className = "text-options"),
            (b.style.top = "-999px"),
            (b.style.left = "-999px"));
        }, 260);
    }
    function a(t) {
      for (var e = {}; t.parentNode; )
        (e[t.nodeName] = !0),
          "A" === (t = t.parentNode).nodeName &&
            (e.url = t.getAttribute("href"));
      return e;
    }
    function l(t) {
      for (; t.parentNode; ) {
        if (
          t.className !== undefined &&
          0 <= t.className.indexOf("phrasable") &&
          0 <= t.className.indexOf("phrasable-on")
        )
          return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function c(t, e) {
      return !!t[e];
    }
    function u() {
      document.execCommand("bold", !1);
    }
    function d() {
      document.execCommand("italic", !1);
    }
    function p() {
      "options" == j.className
        ? ((j.className = "options url-mode"),
          setTimeout(function () {
            var t = a(window.getSelection().focusNode);
            c(t, "A")
              ? (x.value = t.url)
              : document.execCommand("createLink", !1, "/"),
              (lastSelection = window.getSelection().getRangeAt(0)),
              (g = !1),
              x.focus();
          }, 100))
        : (j.className = "options");
    }
    function h(t) {
      13 === t.keyCode && (t.preventDefault(), v(x.value), x.blur());
    }
    function f() {
      (j.className = "options"),
        v(x.value),
        (x.value = ""),
        (y = a(window.getSelection().focusNode)),
        s();
    }
    function v(t) {
      m(),
        document.execCommand("unlink", !1),
        "" !== t && document.execCommand("createLink", !1, t);
    }
    function m() {
      window.getSelection().removeAllRanges(),
        window.getSelection().addRange(lastSelection);
    }
    var g, y, b, j, w, T, _, x;
    return { init: t };
  })(),
  Phrasing = {
    Bus: $({}),
    EDIT_MODE_KEY: "editing-mode",
    isEditModeEnabled: function () {
      return "true" === localStorage.getItem(this.EDIT_MODE_KEY);
    },
  };
StatusBubbleWidget.prototype = {
  _init: function () {
    this.$editModeChechbox.on("change", function () {
      this.checked
        ? Phrasing.Bus.trigger("phrasing:edit-mode:on")
        : Phrasing.Bus.trigger("phrasing:edit-mode:off");
    });
  },
  _alterStatus: function (t, e) {
    this.$statusText.text(t), this.$statusIndicator.css("background-color", e);
  },
  saving: function () {
    this._alterStatus("Saving", "orange");
  },
  saved: function () {
    this._alterStatus("Saved", "#56AE45");
  },
  error: function () {
    this._alterStatus("Error", "red");
  },
};
var phrasing_setup = function () {
  function e(t) {
    var e = $(t).data("url"),
      n = t.innerHTML;
    0 === n.length && (n = "Empty"),
      $.ajax({
        type: "PUT",
        url: e,
        data: { new_value: n },
        success: function () {
          (o = !1),
            "Empty" === n
              ? $('span.phrasable[data-url="' + e + '"]').html(n)
              : $('span.phrasable[data-url="' + e + '"]')
                  .not(t)
                  .html(n),
            (o = !0),
            0 === Object.size(r) && i.saved();
        },
        error: function () {
          i.error();
        },
      });
  }
  function t() {
    $("a").on("click.phrasing", function (t) {
      $(this).find("span").hasClass("phrasable") && t.preventDefault();
    });
  }
  function n() {
    $("a").off("click.phrasing");
  }
  var i = new StatusBubbleWidget({
    $statusText: $(
      "#phrasing-edit-mode-bubble #phrasing-saved-status-headline p"
    ),
    $statusIndicator: $("#phrasing-saved-status-indicator-circle"),
    $editModeChechbox: $("#edit-mode-onoffswitch"),
  });
  Phrasing.Bus.on("phrasing:edit-mode:on", function () {
    $(".phrasable").addClass("phrasable-on").attr("contenteditable", "true"),
      localStorage.setItem(Phrasing.EDIT_MODE_KEY, "true"),
      t();
  }),
    Phrasing.Bus.on("phrasing:edit-mode:off", function () {
      $(".phrasable")
        .removeClass("phrasable-on")
        .attr("contenteditable", "false"),
        localStorage.setItem(Phrasing.EDIT_MODE_KEY, "false"),
        n();
    }),
    editor.init(),
    $(document).ajaxSend(function (t, e) {
      var n = $("meta[name='csrf-token']").attr("content");
      e.setRequestHeader("X-CSRF-Token", n);
    }),
    (Object.size = function (t) {
      var e,
        n = 0;
      for (e in t) t.hasOwnProperty(e) && n++;
      return n;
    });
  var o = !0,
    s = {},
    r = {};
  $(".phrasable").on(
    "DOMNodeInserted DOMNodeRemoved DOMCharacterDataModified",
    function () {
      if (!1 !== o) {
        i.saving();
        var t = this;
        clearTimeout(s[$(t).data("url")]),
          (r[$(t).data("url")] = 0),
          (s[$(t).data("url")] = setTimeout(function () {
            e(t), delete r[$(t).data("url")];
          }, 2500)),
          (r[$(t).data("url")] = 1);
      }
    }
  ),
    localStorage.getItem(Phrasing.EDIT_MODE_KEY) === undefined &&
      localStorage.setItem(Phrasing.EDIT_MODE_KEY, "true"),
    "true" == localStorage.getItem(Phrasing.EDIT_MODE_KEY)
      ? $("#edit-mode-onoffswitch").prop("checked", !0).change()
      : $("#edit-mode-onoffswitch").prop("checked", !1).change();
};
$(document).ready(phrasing_setup),
  $(document).on("page:before-change", function () {
    Phrasing.Bus.off();
  }),
  (function (u, d) {
    (u.MixItUp = function () {
      var t = this;
      t._execAction("_constructor", 0),
        u.extend(t, {
          selectors: { target: ".mix", filter: ".filter", sort: ".sort" },
          animation: {
            enable: !0,
            effects: "fade scale",
            duration: 600,
            easing: "ease",
            perspectiveDistance: "3000",
            perspectiveOrigin: "50% 50%",
            queue: !0,
            queueLimit: 1,
            animateChangeLayout: !1,
            animateResizeContainer: !0,
            animateResizeTargets: !1,
            staggerSequence: !1,
            reverseOut: !1,
          },
          callbacks: {
            onMixLoad: !1,
            onMixStart: !1,
            onMixBusy: !1,
            onMixEnd: !1,
            onMixFail: !1,
            _user: !1,
          },
          controls: {
            enable: !0,
            live: !1,
            toggleFilterButtons: !1,
            toggleLogic: "or",
            activeClass: "active",
          },
          layout: {
            display: "inline-block",
            containerClass: "",
            containerClassFail: "fail",
          },
          load: { filter: "all", sort: !1 },
          _$body: null,
          _$container: null,
          _$targets: null,
          _$parent: null,
          _$sortButtons: null,
          _$filterButtons: null,
          _suckMode: !1,
          _mixing: !1,
          _sorting: !1,
          _clicking: !1,
          _loading: !0,
          _changingLayout: !1,
          _changingClass: !1,
          _changingDisplay: !1,
          _origOrder: [],
          _startOrder: [],
          _newOrder: [],
          _activeFilter: null,
          _toggleArray: [],
          _toggleString: "",
          _activeSort: "default:asc",
          _newSort: null,
          _startHeight: null,
          _newHeight: null,
          _incPadding: !0,
          _newDisplay: null,
          _newClass: null,
          _targetsBound: 0,
          _targetsDone: 0,
          _queue: [],
          _$show: u(),
          _$hide: u(),
        }),
        t._execAction("_constructor", 1);
    }),
      (u.MixItUp.prototype = {
        constructor: u.MixItUp,
        _instances: {},
        _handled: { _filter: {}, _sort: {} },
        _bound: { _filter: {}, _sort: {} },
        _actions: {},
        _filters: {},
        extend: function (t) {
          for (var e in t) u.MixItUp.prototype[e] = t[e];
        },
        addAction: function (t, e, n, i) {
          u.MixItUp.prototype._addHook("_actions", t, e, n, i);
        },
        addFilter: function (t, e, n, i) {
          u.MixItUp.prototype._addHook("_filters", t, e, n, i);
        },
        _addHook: function (t, e, n, i, o) {
          var s = u.MixItUp.prototype[t],
            r = {};
          (o = 1 === o || "post" === o ? "post" : "pre"),
            (r[e] = {}),
            (r[e][o] = {}),
            (r[e][o][n] = i),
            u.extend(!0, s, r);
        },
        _init: function (t, e) {
          var n = this;
          if (
            (n._execAction("_init", 0, arguments),
            e && u.extend(!0, n, e),
            (n._$body = u("body")),
            (n._domNode = t),
            (n._$container = u(t)),
            n._$container.addClass(n.layout.containerClass),
            (n._id = t.id),
            n._platformDetect(),
            (n._brake = n._getPrefixedCSS("transition", "none")),
            n._refresh(!0),
            (n._$parent = n._$targets.parent().length
              ? n._$targets.parent()
              : n._$container),
            n.load.sort &&
              ((n._newSort = n._parseSort(n.load.sort)),
              (n._newSortString = n.load.sort),
              (n._activeSort = n.load.sort),
              n._sort(),
              n._printSort()),
            (n._activeFilter =
              "all" === n.load.filter
                ? n.selectors.target
                : "none" === n.load.filter
                ? ""
                : n.load.filter),
            n.controls.enable && n._bindHandlers(),
            n.controls.toggleFilterButtons)
          ) {
            n._buildToggleArray();
            for (var i = 0; i < n._toggleArray.length; i++)
              n._updateControls(
                { filter: n._toggleArray[i], sort: n._activeSort },
                !0
              );
          } else
            n.controls.enable &&
              n._updateControls({
                filter: n._activeFilter,
                sort: n._activeSort,
              });
          n._filter(),
            (n._init = !0),
            n._$container.data("mixItUp", n),
            n._execAction("_init", 1, arguments),
            n._buildState(),
            n._$targets.css(n._brake),
            n._goMix(n.animation.enable);
        },
        _platformDetect: function () {
          var t = this,
            n = ["Webkit", "Moz", "O", "ms"],
            e = ["webkit", "moz"],
            i = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
            o = "undefined" != typeof InstallTrigger,
            s = (function (t) {
              for (var e = 0; e < n.length; e++)
                if (n[e] + "Transition" in t.style)
                  return {
                    prefix: "-" + n[e].toLowerCase() + "-",
                    vendor: n[e],
                  };
              return "transition" in t.style && "";
            })(t._domNode);
          t._execAction("_platformDetect", 0),
            (t._chrome = !!i && parseInt(i[1], 10)),
            (t._ff =
              !!o &&
              parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1])),
            (t._prefix = s.prefix),
            (t._vendor = s.vendor),
            (t._suckMode = !window.atob || !t._prefix),
            t._suckMode && (t.animation.enable = !1),
            t._ff && t._ff <= 4 && (t.animation.enable = !1);
          for (var r = 0; r < e.length && !window.requestAnimationFrame; r++)
            window.requestAnimationFrame =
              window[e[r] + "RequestAnimationFrame"];
          "function" != typeof Object.getPrototypeOf &&
            (Object.getPrototypeOf =
              "object" == typeof "test".__proto__
                ? function (t) {
                    return t.__proto__;
                  }
                : function (t) {
                    return t.constructor.prototype;
                  }),
            t._domNode.nextElementSibling === d &&
              Object.defineProperty(Element.prototype, "nextElementSibling", {
                get: function () {
                  for (var t = this.nextSibling; t; ) {
                    if (1 === t.nodeType) return t;
                    t = t.nextSibling;
                  }
                  return null;
                },
              }),
            t._execAction("_platformDetect", 1);
        },
        _refresh: function (t, e) {
          var n = this;
          n._execAction("_refresh", 0, arguments),
            (n._$targets = n._$container.find(n.selectors.target));
          for (var i = 0; i < n._$targets.length; i++) {
            if ((c = n._$targets[i]).dataset === d || e) {
              c.dataset = {};
              for (var o = 0; o < c.attributes.length; o++) {
                var s = c.attributes[o],
                  r = s.name,
                  a = s.value;
                if (-1 < r.indexOf("data-")) {
                  var l = n._helpers._camelCase(r.substring(5, r.length));
                  c.dataset[l] = a;
                }
              }
            }
            c.mixParent === d && (c.mixParent = n._id);
          }
          if (
            (n._$targets.length && t) ||
            (!n._origOrder.length && n._$targets.length)
          ) {
            n._origOrder = [];
            for (i = 0; i < n._$targets.length; i++) {
              var c = n._$targets[i];
              n._origOrder.push(c);
            }
          }
          n._execAction("_refresh", 1, arguments);
        },
        _bindHandlers: function () {
          var t = this,
            e = u.MixItUp.prototype._bound._filter,
            n = u.MixItUp.prototype._bound._sort;
          t._execAction("_bindHandlers", 0),
            t.controls.live
              ? t._$body
                  .on("click.mixItUp." + t._id, t.selectors.sort, function () {
                    t._processClick(u(this), "sort");
                  })
                  .on(
                    "click.mixItUp." + t._id,
                    t.selectors.filter,
                    function () {
                      t._processClick(u(this), "filter");
                    }
                  )
              : ((t._$sortButtons = u(t.selectors.sort)),
                (t._$filterButtons = u(t.selectors.filter)),
                t._$sortButtons.on("click.mixItUp." + t._id, function () {
                  t._processClick(u(this), "sort");
                }),
                t._$filterButtons.on("click.mixItUp." + t._id, function () {
                  t._processClick(u(this), "filter");
                })),
            (e[t.selectors.filter] =
              e[t.selectors.filter] === d ? 1 : e[t.selectors.filter] + 1),
            (n[t.selectors.sort] =
              n[t.selectors.sort] === d ? 1 : n[t.selectors.sort] + 1),
            t._execAction("_bindHandlers", 1);
        },
        _processClick: function (t, e) {
          var o = this,
            n = function (t, e, n) {
              var i = u.MixItUp.prototype;
              (i._handled["_" + e][o.selectors[e]] =
                i._handled["_" + e][o.selectors[e]] === d
                  ? 1
                  : i._handled["_" + e][o.selectors[e]] + 1),
                i._handled["_" + e][o.selectors[e]] ===
                  i._bound["_" + e][o.selectors[e]] &&
                  (t[(n ? "remove" : "add") + "Class"](o.controls.activeClass),
                  delete i._handled["_" + e][o.selectors[e]]);
            };
          if (
            (o._execAction("_processClick", 0, arguments),
            !o._mixing ||
              (o.animation.queue && o._queue.length < o.animation.queueLimit))
          ) {
            if (((o._clicking = !0), "sort" === e)) {
              var i = t.attr("data-sort");
              (!t.hasClass(o.controls.activeClass) ||
                -1 < i.indexOf("random")) &&
                (u(o.selectors.sort).removeClass(o.controls.activeClass),
                n(t, e),
                o.sort(i));
            }
            if ("filter" === e) {
              var s,
                r = t.attr("data-filter"),
                a = "or" === o.controls.toggleLogic ? "," : "";
              o.controls.toggleFilterButtons
                ? (o._buildToggleArray(),
                  t.hasClass(o.controls.activeClass)
                    ? (n(t, e, !0),
                      (s = o._toggleArray.indexOf(r)),
                      o._toggleArray.splice(s, 1))
                    : (n(t, e), o._toggleArray.push(r)),
                  (o._toggleArray = u.grep(o._toggleArray, function (t) {
                    return t;
                  })),
                  (o._toggleString = o._toggleArray.join(a)),
                  o.filter(o._toggleString))
                : t.hasClass(o.controls.activeClass) ||
                  (u(o.selectors.filter).removeClass(o.controls.activeClass),
                  n(t, e),
                  o.filter(r));
            }
            o._execAction("_processClick", 1, arguments);
          } else
            "function" == typeof o.callbacks.onMixBusy &&
              o.callbacks.onMixBusy.call(o._domNode, o._state, o),
              o._execAction("_processClickBusy", 1, arguments);
        },
        _buildToggleArray: function () {
          var t = this,
            e = t._activeFilter.replace(/\s/g, "");
          if (
            (t._execAction("_buildToggleArray", 0, arguments),
            "or" === t.controls.toggleLogic)
          )
            t._toggleArray = e.split(",");
          else {
            (t._toggleArray = e.split(".")),
              !t._toggleArray[0] && t._toggleArray.shift();
            for (var n, i = 0; (n = t._toggleArray[i]); i++)
              t._toggleArray[i] = "." + n;
          }
          t._execAction("_buildToggleArray", 1, arguments);
        },
        _updateControls: function (t, n) {
          var i = this,
            o = { filter: t.filter, sort: t.sort },
            e = function (t, e) {
              n && "filter" === s && "none" !== o.filter && "" !== o.filter
                ? t.filter(e).addClass(i.controls.activeClass)
                : t
                    .removeClass(i.controls.activeClass)
                    .filter(e)
                    .addClass(i.controls.activeClass);
            },
            s = "filter",
            r = null;
          i._execAction("_updateControls", 0, arguments),
            t.filter === d && (o.filter = i._activeFilter),
            t.sort === d && (o.sort = i._activeSort),
            o.filter === i.selectors.target && (o.filter = "all");
          for (var a = 0; a < 2; a++)
            (r = i.controls.live
              ? u(i.selectors[s])
              : i["_$" + s + "Buttons"]) &&
              e(r, "[data-" + s + '="' + o[s] + '"]'),
              (s = "sort");
          i._execAction("_updateControls", 1, arguments);
        },
        _filter: function () {
          var t = this;
          t._execAction("_filter", 0);
          for (var e = 0; e < t._$targets.length; e++) {
            var n = u(t._$targets[e]);
            n.is(t._activeFilter)
              ? (t._$show = t._$show.add(n))
              : (t._$hide = t._$hide.add(n));
          }
          t._execAction("_filter", 1);
        },
        _sort: function () {
          var n = this,
            t = function (t) {
              for (var e = t.slice(), n = e.length, i = n; i--; ) {
                var o = parseInt(Math.random() * n),
                  s = e[i];
                (e[i] = e[o]), (e[o] = s);
              }
              return e;
            };
          n._execAction("_sort", 0), (n._startOrder = []);
          for (var e = 0; e < n._$targets.length; e++) {
            var i = n._$targets[e];
            n._startOrder.push(i);
          }
          switch (n._newSort[0].sortBy) {
            case "default":
              n._newOrder = n._origOrder;
              break;
            case "random":
              n._newOrder = t(n._startOrder);
              break;
            case "custom":
              n._newOrder = n._newSort[0].order;
              break;
            default:
              n._newOrder = n._startOrder.concat().sort(function (t, e) {
                return n._compare(t, e);
              });
          }
          n._execAction("_sort", 1);
        },
        _compare: function (t, e, n) {
          n = n || 0;
          var i = this,
            o = i._newSort[n].order,
            s = function (t) {
              return t.dataset[i._newSort[n].sortBy] || 0;
            },
            r = isNaN(1 * s(t)) ? s(t).toLowerCase() : 1 * s(t),
            a = isNaN(1 * s(e)) ? s(e).toLowerCase() : 1 * s(e);
          return r < a
            ? "asc" === o
              ? -1
              : 1
            : a < r
            ? "asc" === o
              ? 1
              : -1
            : r === a && i._newSort.length > n + 1
            ? i._compare(t, e, n + 1)
            : 0;
        },
        _printSort: function (t) {
          var e = this,
            n = t ? e._startOrder : e._newOrder,
            i = e._$parent[0].querySelectorAll(e.selectors.target),
            o = i.length ? i[i.length - 1].nextElementSibling : null,
            s = document.createDocumentFragment();
          e._execAction("_printSort", 0, arguments);
          for (var r = 0; r < i.length; r++) {
            var a = i[r],
              l = a.nextSibling;
            "absolute" !== a.style.position &&
              (l && "#text" === l.nodeName && e._$parent[0].removeChild(l),
              e._$parent[0].removeChild(a));
          }
          for (r = 0; r < n.length; r++) {
            var c = n[r];
            if (
              "default" !== e._newSort[0].sortBy ||
              "desc" !== e._newSort[0].order ||
              t
            )
              s.appendChild(c), s.appendChild(document.createTextNode(" "));
            else {
              var u = s.firstChild;
              s.insertBefore(c, u),
                s.insertBefore(document.createTextNode(" "), c);
            }
          }
          o ? e._$parent[0].insertBefore(s, o) : e._$parent[0].appendChild(s),
            e._execAction("_printSort", 1, arguments);
        },
        _parseSort: function (t) {
          for (
            var e = this,
              n = "string" == typeof t ? t.split(" ") : [t],
              i = [],
              o = 0;
            o < n.length;
            o++
          ) {
            var s = "string" == typeof t ? n[o].split(":") : ["custom", n[o]],
              r = { sortBy: e._helpers._camelCase(s[0]), order: s[1] || "asc" };
            if ((i.push(r), "default" === r.sortBy || "random" === r.sortBy))
              break;
          }
          return e._execFilter("_parseSort", i, arguments);
        },
        _parseEffects: function () {
          var o = this,
            a = { opacity: "", transformIn: "", transformOut: "", filter: "" },
            l = function (t, e) {
              if (-1 < o.animation.effects.indexOf(t)) {
                if (e) {
                  var n = o.animation.effects.indexOf(t + "(");
                  if (-1 < n) {
                    var i = o.animation.effects.substring(n);
                    return { val: /\(([^)]+)\)/.exec(i)[1] };
                  }
                }
                return !0;
              }
              return !1;
            },
            c = function (t, e) {
              return e
                ? "-" === t.charAt(0)
                  ? t.substr(1, t.length)
                  : "-" + t
                : t;
            },
            t = function (t, e) {
              for (
                var n = [
                    ["scale", ".01"],
                    ["translateX", "20px"],
                    ["translateY", "20px"],
                    ["translateZ", "20px"],
                    ["rotateX", "90deg"],
                    ["rotateY", "90deg"],
                    ["rotateZ", "180deg"],
                  ],
                  i = 0;
                i < n.length;
                i++
              ) {
                var o = n[i][0],
                  s = n[i][1],
                  r = e && "scale" !== o;
                a[t] += l(o) ? o + "(" + c(l(o, !0).val || s, r) + ") " : "";
              }
            };
          return (
            (a.opacity = l("fade") ? l("fade", !0).val || "0" : "1"),
            t("transformIn"),
            o.animation.reverseOut
              ? t("transformOut", !0)
              : (a.transformOut = a.transformIn),
            (a.transition = {}),
            (a.transition = o._getPrefixedCSS(
              "transition",
              "all " +
                o.animation.duration +
                "ms " +
                o.animation.easing +
                ", opacity " +
                o.animation.duration +
                "ms linear"
            )),
            (o.animation.stagger = !!l("stagger")),
            (o.animation.staggerDuration = parseInt(
              l("stagger") && l("stagger", !0).val ? l("stagger", !0).val : 100
            )),
            o._execFilter("_parseEffects", a)
          );
        },
        _buildState: function (t) {
          var e = this,
            n = {};
          return (
            e._execAction("_buildState", 0),
            (n = {
              activeFilter: "" === e._activeFilter ? "none" : e._activeFilter,
              activeSort:
                t && e._newSortString ? e._newSortString : e._activeSort,
              fail: !e._$show.length && "" !== e._activeFilter,
              $targets: e._$targets,
              $show: e._$show,
              $hide: e._$hide,
              totalTargets: e._$targets.length,
              totalShow: e._$show.length,
              totalHide: e._$hide.length,
              display: t && e._newDisplay ? e._newDisplay : e.layout.display,
            }),
            t
              ? e._execFilter("_buildState", n)
              : ((e._state = n), void e._execAction("_buildState", 1))
          );
        },
        _goMix: function (t) {
          var n = this,
            e = function () {
              n._chrome && 31 === n._chrome && s(n._$parent[0]),
                n._setInter(),
                i();
            },
            i = function () {
              var t = window.pageYOffset,
                e = window.pageXOffset;
              document.documentElement.scrollHeight,
                n._getInterMixData(),
                n._setFinal(),
                n._getFinalMixData(),
                window.pageYOffset !== t && window.scrollTo(e, t),
                n._prepTargets(),
                window.requestAnimationFrame
                  ? requestAnimationFrame(o)
                  : setTimeout(function () {
                      o();
                    }, 20);
            },
            o = function () {
              n._animateTargets(), 0 === n._targetsBound && n._cleanUp();
            },
            s = function (t) {
              var e = t.parentElement,
                n = document.createElement("div"),
                i = document.createDocumentFragment();
              e.insertBefore(n, t), i.appendChild(t), e.replaceChild(t, n);
            },
            r = n._buildState(!0);
          n._execAction("_goMix", 0, arguments),
            !n.animation.duration && (t = !1),
            (n._mixing = !0),
            n._$container.removeClass(n.layout.containerClassFail),
            "function" == typeof n.callbacks.onMixStart &&
              n.callbacks.onMixStart.call(n._domNode, n._state, r, n),
            n._$container.trigger("mixStart", [n._state, r, n]),
            n._getOrigMixData(),
            t && !n._suckMode
              ? window.requestAnimationFrame
                ? requestAnimationFrame(e)
                : e()
              : n._cleanUp(),
            n._execAction("_goMix", 1, arguments);
        },
        _getTargetData: function (t, e) {
          var n,
            i = this;
          (t.dataset[e + "PosX"] = t.offsetLeft),
            (t.dataset[e + "PosY"] = t.offsetTop),
            i.animation.animateResizeTargets &&
              ((n = window.getComputedStyle(t)),
              (t.dataset[e + "MarginBottom"] = parseInt(n.marginBottom)),
              (t.dataset[e + "MarginRight"] = parseInt(n.marginRight)),
              (t.dataset[e + "Width"] = t.offsetWidth),
              (t.dataset[e + "Height"] = t.offsetHeight));
        },
        _getOrigMixData: function () {
          var t = this,
            e = t._suckMode
              ? { boxSizing: "" }
              : window.getComputedStyle(t._$parent[0]),
            n = e.boxSizing || e[t._vendor + "BoxSizing"];
          (t._incPadding = "border-box" === n),
            t._execAction("_getOrigMixData", 0),
            !t._suckMode && (t.effects = t._parseEffects()),
            (t._$toHide = t._$hide.filter(":visible")),
            (t._$toShow = t._$show.filter(":hidden")),
            (t._$pre = t._$targets.filter(":visible")),
            (t._startHeight = t._incPadding
              ? t._$parent.outerHeight()
              : t._$parent.height());
          for (var i = 0; i < t._$pre.length; i++) {
            var o = t._$pre[i];
            t._getTargetData(o, "orig");
          }
          t._execAction("_getOrigMixData", 1);
        },
        _setInter: function () {
          var t = this;
          t._execAction("_setInter", 0),
            t._changingLayout && t.animation.animateChangeLayout
              ? (t._$toShow.css("display", t._newDisplay),
                t._changingClass &&
                  t._$container
                    .removeClass(t.layout.containerClass)
                    .addClass(t._newClass))
              : t._$toShow.css("display", t.layout.display),
            t._execAction("_setInter", 1);
        },
        _getInterMixData: function () {
          var t = this;
          t._execAction("_getInterMixData", 0);
          for (var e = 0; e < t._$toShow.length; e++) {
            var n = t._$toShow[e];
            t._getTargetData(n, "inter");
          }
          for (e = 0; e < t._$pre.length; e++) {
            n = t._$pre[e];
            t._getTargetData(n, "inter");
          }
          t._execAction("_getInterMixData", 1);
        },
        _setFinal: function () {
          var t = this;
          t._execAction("_setFinal", 0),
            t._sorting && t._printSort(),
            t._$toHide.removeStyle("display"),
            t._changingLayout &&
              t.animation.animateChangeLayout &&
              t._$pre.css("display", t._newDisplay),
            t._execAction("_setFinal", 1);
        },
        _getFinalMixData: function () {
          var t = this;
          t._execAction("_getFinalMixData", 0);
          for (var e = 0; e < t._$toShow.length; e++) {
            var n = t._$toShow[e];
            t._getTargetData(n, "final");
          }
          for (e = 0; e < t._$pre.length; e++) {
            n = t._$pre[e];
            t._getTargetData(n, "final");
          }
          (t._newHeight = t._incPadding
            ? t._$parent.outerHeight()
            : t._$parent.height()),
            t._sorting && t._printSort(!0),
            t._$toShow.removeStyle("display"),
            t._$pre.css("display", t.layout.display),
            t._changingClass &&
              t.animation.animateChangeLayout &&
              t._$container
                .removeClass(t._newClass)
                .addClass(t.layout.containerClass),
            t._execAction("_getFinalMixData", 1);
        },
        _prepTargets: function () {
          var t = this,
            e = {
              _in: t._getPrefixedCSS("transform", t.effects.transformIn),
              _out: t._getPrefixedCSS("transform", t.effects.transformOut),
            };
          t._execAction("_prepTargets", 0),
            t.animation.animateResizeContainer &&
              t._$parent.css("height", t._startHeight + "px");
          for (var n = 0; n < t._$toShow.length; n++) {
            var i = t._$toShow[n],
              o = u(i);
            (i.style.opacity = t.effects.opacity),
              (i.style.display =
                t._changingLayout && t.animation.animateChangeLayout
                  ? t._newDisplay
                  : t.layout.display),
              o.css(e._in),
              t.animation.animateResizeTargets &&
                ((i.style.width = i.dataset.finalWidth + "px"),
                (i.style.height = i.dataset.finalHeight + "px"),
                (i.style.marginRight =
                  -(i.dataset.finalWidth - i.dataset.interWidth) +
                  1 * i.dataset.finalMarginRight +
                  "px"),
                (i.style.marginBottom =
                  -(i.dataset.finalHeight - i.dataset.interHeight) +
                  1 * i.dataset.finalMarginBottom +
                  "px"));
          }
          for (n = 0; n < t._$pre.length; n++) {
            (i = t._$pre[n]), (o = u(i));
            var s = {
              x: i.dataset.origPosX - i.dataset.interPosX,
              y: i.dataset.origPosY - i.dataset.interPosY,
            };
            e = t._getPrefixedCSS(
              "transform",
              "translate(" + s.x + "px," + s.y + "px)"
            );
            o.css(e),
              t.animation.animateResizeTargets &&
                ((i.style.width = i.dataset.origWidth + "px"),
                (i.style.height = i.dataset.origHeight + "px"),
                i.dataset.origWidth - i.dataset.finalWidth &&
                  (i.style.marginRight =
                    -(i.dataset.origWidth - i.dataset.interWidth) +
                    1 * i.dataset.origMarginRight +
                    "px"),
                i.dataset.origHeight - i.dataset.finalHeight &&
                  (i.style.marginBottom =
                    -(i.dataset.origHeight - i.dataset.interHeight) +
                    1 * i.dataset.origMarginBottom +
                    "px"));
          }
          t._execAction("_prepTargets", 1);
        },
        _animateTargets: function () {
          var t = this;
          t._execAction("_animateTargets", 0),
            (t._targetsDone = 0),
            (t._targetsBound = 0),
            t._$parent
              .css(
                t._getPrefixedCSS(
                  "perspective",
                  t.animation.perspectiveDistance + "px"
                )
              )
              .css(
                t._getPrefixedCSS(
                  "perspective-origin",
                  t.animation.perspectiveOrigin
                )
              ),
            t.animation.animateResizeContainer &&
              t._$parent
                .css(
                  t._getPrefixedCSS(
                    "transition",
                    "height " + t.animation.duration + "ms ease"
                  )
                )
                .css("height", t._newHeight + "px");
          for (var e = 0; e < t._$toShow.length; e++) {
            var n = t._$toShow[e],
              i = u(n),
              o = {
                x: n.dataset.finalPosX - n.dataset.interPosX,
                y: n.dataset.finalPosY - n.dataset.interPosY,
              },
              s = t._getDelay(e),
              r = {};
            n.style.opacity = "";
            for (var a = 0; a < 2; a++) {
              var l = 0 === a ? (l = t._prefix) : "";
              t._ff &&
                t._ff <= 20 &&
                ((r[l + "transition-property"] = "all"),
                (r[l + "transition-timing-function"] =
                  t.animation.easing + "ms"),
                (r[l + "transition-duration"] = t.animation.duration + "ms")),
                (r[l + "transition-delay"] = s + "ms"),
                (r[l + "transform"] = "translate(" + o.x + "px," + o.y + "px)");
            }
            (t.effects.transform || t.effects.opacity) && t._bindTargetDone(i),
              t._ff && t._ff <= 20
                ? i.css(r)
                : i.css(t.effects.transition).css(r);
          }
          for (e = 0; e < t._$pre.length; e++) {
            (n = t._$pre[e]),
              (i = u(n)),
              (o = {
                x: n.dataset.finalPosX - n.dataset.interPosX,
                y: n.dataset.finalPosY - n.dataset.interPosY,
              }),
              (s = t._getDelay(e));
            (n.dataset.finalPosX !== n.dataset.origPosX ||
              n.dataset.finalPosY !== n.dataset.origPosY) &&
              t._bindTargetDone(i),
              i.css(
                t._getPrefixedCSS(
                  "transition",
                  "all " +
                    t.animation.duration +
                    "ms " +
                    t.animation.easing +
                    " " +
                    s +
                    "ms"
                )
              ),
              i.css(
                t._getPrefixedCSS(
                  "transform",
                  "translate(" + o.x + "px," + o.y + "px)"
                )
              ),
              t.animation.animateResizeTargets &&
                (n.dataset.origWidth - n.dataset.finalWidth &&
                  1 * n.dataset.finalWidth &&
                  ((n.style.width = n.dataset.finalWidth + "px"),
                  (n.style.marginRight =
                    -(n.dataset.finalWidth - n.dataset.interWidth) +
                    1 * n.dataset.finalMarginRight +
                    "px")),
                n.dataset.origHeight - n.dataset.finalHeight &&
                  1 * n.dataset.finalHeight &&
                  ((n.style.height = n.dataset.finalHeight + "px"),
                  (n.style.marginBottom =
                    -(n.dataset.finalHeight - n.dataset.interHeight) +
                    1 * n.dataset.finalMarginBottom +
                    "px")));
          }
          t._changingClass &&
            t._$container
              .removeClass(t.layout.containerClass)
              .addClass(t._newClass);
          for (e = 0; e < t._$toHide.length; e++) {
            (n = t._$toHide[e]), (i = u(n)), (s = t._getDelay(e));
            var c = {};
            for (a = 0; a < 2; a++) {
              (c[(l = 0 === a ? (l = t._prefix) : "") + "transition-delay"] =
                s + "ms"),
                (c[l + "transform"] = t.effects.transformOut),
                (c.opacity = t.effects.opacity);
            }
            i.css(t.effects.transition).css(c),
              (t.effects.transform || t.effects.opacity) &&
                t._bindTargetDone(i);
          }
          t._execAction("_animateTargets", 1);
        },
        _bindTargetDone: function (e) {
          var n = this,
            i = e[0];
          n._execAction("_bindTargetDone", 0, arguments),
            i.dataset.bound ||
              ((i.dataset.bound = !0),
              n._targetsBound++,
              e.on(
                "webkitTransitionEnd.mixItUp transitionend.mixItUp",
                function (t) {
                  (-1 < t.originalEvent.propertyName.indexOf("transform") ||
                    -1 < t.originalEvent.propertyName.indexOf("opacity")) &&
                    u(t.originalEvent.target).is(n.selectors.target) &&
                    (e.off(".mixItUp"),
                    delete i.dataset.bound,
                    n._targetDone());
                }
              )),
            n._execAction("_bindTargetDone", 1, arguments);
        },
        _targetDone: function () {
          var t = this;
          t._execAction("_targetDone", 0),
            t._targetsDone++,
            t._targetsDone === t._targetsBound && t._cleanUp(),
            t._execAction("_targetDone", 1);
        },
        _cleanUp: function () {
          var t = this,
            e = t.animation.animateResizeTargets
              ? "transform opacity width height margin-bottom margin-right"
              : "transform opacity";
          (unBrake = function () {
            t._$targets.removeStyle("transition", t._prefix);
          }),
            t._execAction("_cleanUp", 0),
            t._changingLayout
              ? t._$show.css("display", t._newDisplay)
              : t._$show.css("display", t.layout.display),
            t._$targets.css(t._brake),
            t._$targets
              .removeStyle(e, t._prefix)
              .removeAttr(
                "data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"
              ),
            t._$hide.removeStyle("display"),
            t._$parent.removeStyle(
              "height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",
              t._prefix
            ),
            t._sorting &&
              (t._printSort(),
              (t._activeSort = t._newSortString),
              (t._sorting = !1)),
            t._changingLayout &&
              (t._changingDisplay &&
                ((t.layout.display = t._newDisplay), (t._changingDisplay = !1)),
              t._changingClass &&
                (t._$parent
                  .removeClass(t.layout.containerClass)
                  .addClass(t._newClass),
                (t.layout.containerClass = t._newClass),
                (t._changingClass = !1)),
              (t._changingLayout = !1)),
            t._refresh(),
            t._buildState(),
            t._state.fail &&
              t._$container.addClass(t.layout.containerClassFail),
            (t._$show = u()),
            (t._$hide = u()),
            window.requestAnimationFrame && requestAnimationFrame(unBrake),
            (t._mixing = !1),
            "function" == typeof t.callbacks._user &&
              t.callbacks._user.call(t._domNode, t._state, t),
            "function" == typeof t.callbacks.onMixEnd &&
              t.callbacks.onMixEnd.call(t._domNode, t._state, t),
            t._$container.trigger("mixEnd", [t._state, t]),
            t._state.fail &&
              ("function" == typeof t.callbacks.onMixFail &&
                t.callbacks.onMixFail.call(t._domNode, t._state, t),
              t._$container.trigger("mixFail", [t._state, t])),
            t._loading &&
              ("function" == typeof t.callbacks.onMixLoad &&
                t.callbacks.onMixLoad.call(t._domNode, t._state, t),
              t._$container.trigger("mixLoad", [t._state, t])),
            t._queue.length &&
              (t._execAction("_queue", 0),
              t.multiMix(t._queue[0][0], t._queue[0][1], t._queue[0][2]),
              t._queue.splice(0, 1)),
            t._execAction("_cleanUp", 1),
            (t._loading = !1);
        },
        _getPrefixedCSS: function (t, e, n) {
          var o = this,
            s = {};
          for (i = 0; i < 2; i++) {
            var r = 0 === i ? o._prefix : "";
            s[r + t] = n ? r + e : e;
          }
          return o._execFilter("_getPrefixedCSS", s, arguments);
        },
        _getDelay: function (t) {
          var e = this,
            n =
              "function" == typeof e.animation.staggerSequence
                ? e.animation.staggerSequence.call(e._domNode, t, e._state)
                : t,
            i = e.animation.stagger ? n * e.animation.staggerDuration : 0;
          return e._execFilter("_getDelay", i, arguments);
        },
        _parseMultiMixArgs: function (t) {
          for (
            var e = this,
              n = {
                command: null,
                animate: e.animation.enable,
                callback: null,
              },
              i = 0;
            i < t.length;
            i++
          ) {
            var o = t[i];
            null !== o &&
              ("object" == typeof o || "string" == typeof o
                ? (n.command = o)
                : "boolean" == typeof o
                ? (n.animate = o)
                : "function" == typeof o && (n.callback = o));
          }
          return e._execFilter("_parseMultiMixArgs", n, arguments);
        },
        _parseInsertArgs: function (t) {
          for (
            var e = this,
              n = {
                index: 0,
                $object: u(),
                multiMix: { filter: e._state.activeFilter },
                callback: null,
              },
              i = 0;
            i < t.length;
            i++
          ) {
            var o = t[i];
            "number" == typeof o
              ? (n.index = o)
              : "object" == typeof o && o instanceof u
              ? (n.$object = o)
              : "object" == typeof o && e._helpers._isElement(o)
              ? (n.$object = u(o))
              : "object" == typeof o && null !== o
              ? (n.multiMix = o)
              : "boolean" != typeof o || o
              ? "function" == typeof o && (n.callback = o)
              : (n.multiMix = !1);
          }
          return e._execFilter("_parseInsertArgs", n, arguments);
        },
        _execAction: function (t, e, n) {
          var i = this,
            o = e ? "post" : "pre";
          if (!i._actions.isEmptyObject && i._actions.hasOwnProperty(t))
            for (var s in i._actions[t][o]) i._actions[t][o][s].call(i, n);
        },
        _execFilter: function (t, e, n) {
          var i = this;
          if (i._filters.isEmptyObject || !i._filters.hasOwnProperty(t))
            return e;
          for (var o in i._filters[t]) return i._filters[t][o].call(i, n);
        },
        _helpers: {
          _camelCase: function (t) {
            return t.replace(/-([a-z])/g, function (t) {
              return t[1].toUpperCase();
            });
          },
          _isElement: function (t) {
            return window.HTMLElement
              ? t instanceof HTMLElement
              : null !== t && 1 === t.nodeType && "string" === t.nodeName;
          },
        },
        isMixing: function () {
          var t = this;
          return t._execFilter("isMixing", t._mixing);
        },
        filter: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t._clicking && (t._toggleString = ""),
            t.multiMix({ filter: e.command }, e.animate, e.callback);
        },
        sort: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t.multiMix({ sort: e.command }, e.animate, e.callback);
        },
        changeLayout: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t.multiMix({ changeLayout: e.command }, e.animate, e.callback);
        },
        multiMix: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          if ((t._execAction("multiMix", 0, arguments), t._mixing))
            t.animation.queue && t._queue.length < t.animation.queueLimit
              ? (t._queue.push(arguments),
                t.controls.enable &&
                  !t._clicking &&
                  t._updateControls(e.command),
                t._execAction("multiMixQueue", 1, arguments))
              : ("function" == typeof t.callbacks.onMixBusy &&
                  t.callbacks.onMixBusy.call(t._domNode, t._state, t),
                t._$container.trigger("mixBusy", [t._state, t]),
                t._execAction("multiMixBusy", 1, arguments));
          else {
            t.controls.enable &&
              !t._clicking &&
              (t.controls.toggleFilterButtons && t._buildToggleArray(),
              t._updateControls(e.command, t.controls.toggleFilterButtons)),
              t._queue.length < 2 && (t._clicking = !1),
              delete t.callbacks._user,
              e.callback && (t.callbacks._user = e.callback);
            var n = e.command.sort,
              i = e.command.filter,
              o = e.command.changeLayout;
            t._refresh(),
              n &&
                ((t._newSort = t._parseSort(n)),
                (t._newSortString = n),
                (t._sorting = !0),
                t._sort()),
              i !== d &&
                ((i = "all" === i ? t.selectors.target : i),
                (t._activeFilter = i)),
              t._filter(),
              o &&
                ((t._newDisplay =
                  "string" == typeof o ? o : o.display || t.layout.display),
                (t._newClass = o.containerClass || ""),
                (t._newDisplay !== t.layout.display ||
                  t._newClass !== t.layout.containerClass) &&
                  ((t._changingLayout = !0),
                  (t._changingClass = t._newClass !== t.layout.containerClass),
                  (t._changingDisplay = t._newDisplay !== t.layout.display))),
              t._$targets.css(t._brake),
              t._goMix(
                e.animate ^ t.animation.enable ? e.animate : t.animation.enable
              ),
              t._execAction("multiMix", 1, arguments);
          }
        },
        insert: function () {
          var t = this,
            e = t._parseInsertArgs(arguments),
            n = "function" == typeof e.callback ? e.callback : null,
            i = document.createDocumentFragment(),
            o =
              (t._refresh(),
              t._$targets.length
                ? e.index < t._$targets.length || !t._$targets.length
                  ? t._$targets[e.index]
                  : t._$targets[t._$targets.length - 1].nextElementSibling
                : t._$parent[0].children[0]);
          if ((t._execAction("insert", 0, arguments), e.$object)) {
            for (var s = 0; s < e.$object.length; s++) {
              var r = e.$object[s];
              i.appendChild(r), i.appendChild(document.createTextNode(" "));
            }
            t._$parent[0].insertBefore(i, o);
          }
          t._execAction("insert", 1, arguments),
            "object" == typeof e.multiMix && t.multiMix(e.multiMix, n);
        },
        prepend: function () {
          var t = this,
            e = t._parseInsertArgs(arguments);
          t.insert(0, e.$object, e.multiMix, e.callback);
        },
        append: function () {
          var t = this,
            e = t._parseInsertArgs(arguments);
          t.insert(t._state.totalTargets, e.$object, e.multiMix, e.callback);
        },
        getOption: function (t) {
          var e = this,
            n = function (t, e) {
              for (
                var n = e.split("."),
                  i = n.pop(),
                  o = n.length,
                  s = 1,
                  r = n[0] || e;
                (t = t[r]) && s < o;

              )
                (r = n[s]), s++;
              return t !== d ? (t[i] !== d ? t[i] : t) : void 0;
            };
          return t ? e._execFilter("getOption", n(e, t), arguments) : e;
        },
        setOptions: function (t) {
          var e = this;
          e._execAction("setOptions", 0, arguments),
            "object" == typeof t && u.extend(!0, e, t),
            e._execAction("setOptions", 1, arguments);
        },
        getState: function () {
          var t = this;
          return t._execFilter("getState", t._state, t);
        },
        forceRefresh: function () {
          this._refresh(!1, !0);
        },
        destroy: function (t) {
          var e = this;
          e._execAction("destroy", 0, arguments),
            e._$body
              .add(u(e.selectors.sort))
              .add(u(e.selectors.filter))
              .off(".mixItUp");
          for (var n = 0; n < e._$targets.length; n++) {
            var i = e._$targets[n];
            t && (i.style.display = ""), delete i.mixParent;
          }
          e._execAction("destroy", 1, arguments),
            delete u.MixItUp.prototype._instances[e._id];
        },
      }),
      (u.fn.mixItUp = function () {
        var t,
          n = arguments,
          i = [],
          o = function (t, e) {
            var n = new u.MixItUp(),
              i = function () {
                return (
                  "00000" + ((16777216 * Math.random()) << 0).toString(16)
                )
                  .substr(-6)
                  .toUpperCase();
              };
            n._execAction("_instantiate", 0, arguments),
              (t.id = t.id ? t.id : "MixItUp" + i()),
              n._instances[t.id] || (n._instances[t.id] = n)._init(t, e),
              n._execAction("_instantiate", 1, arguments);
          };
        return (
          (t = this.each(function () {
            if (n && "string" == typeof n[0]) {
              var t = u.MixItUp.prototype._instances[this.id];
              if ("isLoaded" === n[0]) i.push(!!t);
              else {
                var e = t[n[0]](n[1], n[2], n[3]);
                e !== d && i.push(e);
              }
            } else o(this, n[0]);
          })),
          i.length ? (1 < i.length ? i : i[0]) : t
        );
      }),
      (u.fn.removeStyle = function (s, r) {
        return (
          (r = r || ""),
          this.each(function () {
            for (var t = this, e = s.split(" "), n = 0; n < e.length; n++)
              for (var i = 0; i < 4; i++) {
                switch (i) {
                  case 0:
                    var o = e[n];
                    break;
                  case 1:
                    o = u.MixItUp.prototype._helpers._camelCase(o);
                    break;
                  case 2:
                    o = r + e[n];
                    break;
                  case 3:
                    o = u.MixItUp.prototype._helpers._camelCase(r + e[n]);
                }
                if (
                  (t.style[o] !== d &&
                    "unknown" != typeof t.style[o] &&
                    0 < t.style[o].length &&
                    (t.style[o] = ""),
                  !r && 1 === i)
                )
                  break;
              }
            t.attributes &&
              t.attributes.style &&
              t.attributes.style !== d &&
              "" === t.attributes.style.value &&
              t.attributes.removeNamedItem("style");
          })
        );
      });
  })(jQuery),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (a) {
    "use strict";
    var l = window.Slick || {};
    ((l = (function () {
      function t(t, e) {
        var n,
          i,
          o,
          s = this;
        if (
          ((s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: a(t),
            appendDots: a(t),
            arrows: !0,
            asNavFor: null,
            prevArrow:
              '<button type="button" data-role="none" class="slick-prev">Previous</button>',
            nextArrow:
              '<button type="button" data-role="none" class="slick-next">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (t, e) {
              return (
                '<button type="button" data-role="none">' +
                (e + 1) +
                "</button>"
              );
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: 0.35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rtl: !1,
            slide: "",
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            variableWidth: !1,
            vertical: !1,
            waitForAnimate: !0,
          }),
          (s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
          }),
          a.extend(s, s.initials),
          (s.activeBreakpoint = null),
          (s.animType = null),
          (s.animProp = null),
          (s.breakpoints = []),
          (s.breakpointSettings = []),
          (s.cssTransitions = !1),
          (s.hidden = "hidden"),
          (s.paused = !1),
          (s.positionProp = null),
          (s.respondTo = null),
          (s.shouldClick = !0),
          (s.$slider = a(t)),
          (s.$slidesCache = null),
          (s.transformType = null),
          (s.transitionType = null),
          (s.visibilityChange = "visibilitychange"),
          (s.windowWidth = 0),
          (s.windowTimer = null),
          (n = a(t).data("slick") || {}),
          (s.options = a.extend({}, s.defaults, n, e)),
          (s.currentSlide = s.options.initialSlide),
          (s.originalSettings = s.options),
          (i = s.options.responsive || null) && -1 < i.length)
        ) {
          for (o in ((s.respondTo = s.options.respondTo || "window"), i))
            i.hasOwnProperty(o) &&
              (s.breakpoints.push(i[o].breakpoint),
              (s.breakpointSettings[i[o].breakpoint] = i[o].settings));
          s.breakpoints.sort(function (t, e) {
            return !0 === s.options.mobileFirst ? t - e : e - t;
          });
        }
        "undefined" != typeof document.mozHidden
          ? ((s.hidden = "mozHidden"),
            (s.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.msHidden
          ? ((s.hidden = "msHidden"),
            (s.visibilityChange = "msvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((s.hidden = "webkitHidden"),
            (s.visibilityChange = "webkitvisibilitychange")),
          (s.autoPlay = a.proxy(s.autoPlay, s)),
          (s.autoPlayClear = a.proxy(s.autoPlayClear, s)),
          (s.changeSlide = a.proxy(s.changeSlide, s)),
          (s.clickHandler = a.proxy(s.clickHandler, s)),
          (s.selectHandler = a.proxy(s.selectHandler, s)),
          (s.setPosition = a.proxy(s.setPosition, s)),
          (s.swipeHandler = a.proxy(s.swipeHandler, s)),
          (s.dragHandler = a.proxy(s.dragHandler, s)),
          (s.keyHandler = a.proxy(s.keyHandler, s)),
          (s.autoPlayIterator = a.proxy(s.autoPlayIterator, s)),
          (s.instanceUid = r++),
          (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          s.init(),
          s.checkResponsive();
      }
      var r = 0;
      return t;
    })()).prototype.addSlide = l.prototype.slickAdd =
      function (t, e, n) {
        var i = this;
        if ("boolean" == typeof e) (n = e), (e = null);
        else if (e < 0 || e >= i.slideCount) return !1;
        i.unload(),
          "number" == typeof e
            ? 0 === e && 0 === i.$slides.length
              ? a(t).appendTo(i.$slideTrack)
              : n
              ? a(t).insertBefore(i.$slides.eq(e))
              : a(t).insertAfter(i.$slides.eq(e))
            : !0 === n
            ? a(t).prependTo(i.$slideTrack)
            : a(t).appendTo(i.$slideTrack),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          i.$slides.each(function (t, e) {
            a(e).attr("data-slick-index", t);
          }),
          (i.$slidesCache = i.$slides),
          i.reinit();
      }),
      (l.prototype.animateHeight = function () {
        var t = this;
        if (
          1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.animate({ height: e }, t.options.speed);
        }
      }),
      (l.prototype.animateSlide = function (t, e) {
        var n = {},
          i = this;
        i.animateHeight(),
          !0 === i.options.rtl && !1 === i.options.vertical && (t = -t),
          !1 === i.transformsEnabled
            ? !1 === i.options.vertical
              ? i.$slideTrack.animate(
                  { left: t },
                  i.options.speed,
                  i.options.easing,
                  e
                )
              : i.$slideTrack.animate(
                  { top: t },
                  i.options.speed,
                  i.options.easing,
                  e
                )
            : !1 === i.cssTransitions
            ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
              a({ animStart: i.currentLeft }).animate(
                { animStart: t },
                {
                  duration: i.options.speed,
                  easing: i.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === i.options.vertical
                        ? (n[i.animType] = "translate(" + t + "px, 0px)")
                        : (n[i.animType] = "translate(0px," + t + "px)"),
                      i.$slideTrack.css(n);
                  },
                  complete: function () {
                    e && e.call();
                  },
                }
              ))
            : (i.applyTransition(),
              (t = Math.ceil(t)),
              (n[i.animType] =
                !1 === i.options.vertical
                  ? "translate3d(" + t + "px, 0px, 0px)"
                  : "translate3d(0px," + t + "px, 0px)"),
              i.$slideTrack.css(n),
              e &&
                setTimeout(function () {
                  i.disableTransition(), e.call();
                }, i.options.speed));
      }),
      (l.prototype.asNavFor = function (t) {
        var e = this,
          n =
            null !== e.options.asNavFor
              ? a(e.options.asNavFor).slick("getSlick")
              : null;
        null !== n && n.slideHandler(t, !0);
      }),
      (l.prototype.applyTransition = function (t) {
        var e = this,
          n = {};
        (n[e.transitionType] =
          !1 === e.options.fade
            ? e.transformType +
              " " +
              e.options.speed +
              "ms " +
              e.options.cssEase
            : "opacity " + e.options.speed + "ms " + e.options.cssEase),
          !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
      }),
      (l.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer),
          t.slideCount > t.options.slidesToShow &&
            !0 !== t.paused &&
            (t.autoPlayTimer = setInterval(
              t.autoPlayIterator,
              t.options.autoplaySpeed
            ));
      }),
      (l.prototype.autoPlayClear = function () {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer);
      }),
      (l.prototype.autoPlayIterator = function () {
        var t = this;
        !1 === t.options.infinite
          ? 1 === t.direction
            ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0),
              t.slideHandler(t.currentSlide + t.options.slidesToScroll))
            : (0 == t.currentSlide - 1 && (t.direction = 1),
              t.slideHandler(t.currentSlide - t.options.slidesToScroll))
          : t.slideHandler(t.currentSlide + t.options.slidesToScroll);
      }),
      (l.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          ((t.$prevArrow = a(t.options.prevArrow)),
          (t.$nextArrow = a(t.options.nextArrow)),
          t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.appendTo(t.options.appendArrows),
          t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.appendTo(t.options.appendArrows),
          !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled"));
      }),
      (l.prototype.buildDots = function () {
        var t,
          e,
          n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
          for (
            e = '<ul class="' + n.options.dotsClass + '">', t = 0;
            t <= n.getDotCount();
            t += 1
          )
            e += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
          (e += "</ul>"),
            (n.$dots = a(e).appendTo(n.options.appendDots)),
            n.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (l.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, e) {
            a(e).attr("data-slick-index", t);
          }),
          (t.$slidesCache = t.$slides),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? a('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          !0 === t.options.centerMode && (t.options.slidesToScroll = 1),
          a("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          !0 === t.options.accessibility && t.$list.prop("tabIndex", 0),
          t.setSlideClasses(
            "number" == typeof this.currentSlide ? this.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (l.prototype.checkResponsive = function () {
        var t,
          e,
          n,
          i = this,
          o = i.$slider.width(),
          s = window.innerWidth || a(window).width();
        if (
          ("window" === i.respondTo
            ? (n = s)
            : "slider" === i.respondTo
            ? (n = o)
            : "min" === i.respondTo && (n = Math.min(s, o)),
          i.originalSettings.responsive &&
            -1 < i.originalSettings.responsive.length &&
            null !== i.originalSettings.responsive)
        ) {
          for (t in ((e = null), i.breakpoints))
            i.breakpoints.hasOwnProperty(t) &&
              (!1 === i.originalSettings.mobileFirst
                ? n < i.breakpoints[t] && (e = i.breakpoints[t])
                : n > i.breakpoints[t] && (e = i.breakpoints[t]));
          null !== e
            ? null !== i.activeBreakpoint
              ? e !== i.activeBreakpoint &&
                ((i.activeBreakpoint = e),
                "unslick" === i.breakpointSettings[e]
                  ? i.unslick()
                  : ((i.options = a.extend(
                      {},
                      i.originalSettings,
                      i.breakpointSettings[e]
                    )),
                    i.refresh()))
              : ((i.activeBreakpoint = e),
                "unslick" === i.breakpointSettings[e]
                  ? i.unslick()
                  : ((i.options = a.extend(
                      {},
                      i.originalSettings,
                      i.breakpointSettings[e]
                    )),
                    i.refresh()))
            : null !== i.activeBreakpoint &&
              ((i.activeBreakpoint = null),
              (i.options = i.originalSettings),
              i.refresh());
        }
      }),
      (l.prototype.changeSlide = function (t, e) {
        var n,
          i,
          o = this;
        switch (
          (a(t.target).is("a") && t.preventDefault(),
          (n =
            0 != o.slideCount % o.options.slidesToScroll
              ? 0
              : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (i =
              0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide - i, !1, e);
            break;
          case "next":
            (i = 0 === n ? o.options.slidesToScroll : n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide + i, !1, e);
            break;
          case "index":
            var s =
              0 === t.data.index
                ? 0
                : t.data.index ||
                  a(t.target).parent().index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(s), !1, e);
            break;
          default:
            return;
        }
      }),
      (l.prototype.checkNavigable = function (t) {
        var e, n;
        if (((n = 0), t > (e = this.getNavigableIndexes())[e.length - 1]))
          t = e[e.length - 1];
        else
          for (var i in e) {
            if (t < e[i]) {
              t = n;
              break;
            }
            n = e[i];
          }
        return t;
      }),
      (l.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (l.prototype.destroy = function () {
        var t = this;
        t.autoPlayClear(),
          (t.touchObject = {}),
          a(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            "object" != typeof t.options.prevArrow &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            "object" != typeof t.options.nextArrow &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-center slick-visible")
            .removeAttr("data-slick-index")
            .css({
              position: "",
              left: "",
              top: "",
              zIndex: "",
              opacity: "",
              width: "",
            }),
          t.$slider.removeClass("slick-slider"),
          t.$slider.removeClass("slick-initialized"),
          t.$list.off(".slick"),
          a(window).off(".slick-" + t.instanceUid),
          a(document).off(".slick-" + t.instanceUid),
          t.$slider.html(t.$slides);
      }),
      (l.prototype.disableTransition = function (t) {
        var e = this,
          n = {};
        (n[e.transitionType] = ""),
          !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
      }),
      (l.prototype.fadeSlide = function (t, e) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(t).css({ zIndex: 1e3 }),
            n.$slides
              .eq(t)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, e))
          : (n.applyTransition(t),
            n.$slides.eq(t).css({ opacity: 1, zIndex: 1e3 }),
            e &&
              setTimeout(function () {
                n.disableTransition(t), e.call();
              }, n.options.speed));
      }),
      (l.prototype.filterSlides = l.prototype.slickFilter =
        function (t) {
          var e = this;
          null !== t &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(t).appendTo(e.$slideTrack),
            e.reinit());
        }),
      (l.prototype.getCurrent = l.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (l.prototype.getDotCount = function () {
        var t = this,
          e = 0,
          n = 0,
          i = 0;
        if (!0 === t.options.infinite)
          i = Math.ceil(t.slideCount / t.options.slidesToScroll);
        else if (!0 === t.options.centerMode) i = t.slideCount;
        else
          for (; e < t.slideCount; )
            ++i,
              (e = n + t.options.slidesToShow),
              (n +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
        return i - 1;
      }),
      (l.prototype.getLeft = function (t) {
        var e,
          n,
          i,
          o = this,
          s = 0;
        return (
          (o.slideOffset = 0),
          (n = o.$slides.first().outerHeight()),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = -1 * o.slideWidth * o.options.slidesToShow),
                (s = -1 * n * o.options.slidesToShow)),
              0 != o.slideCount % o.options.slidesToScroll &&
                t + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (t > o.slideCount
                  ? ((o.slideOffset =
                      -1 *
                      (o.options.slidesToShow - (t - o.slideCount)) *
                      o.slideWidth),
                    (s =
                      -1 * (o.options.slidesToShow - (t - o.slideCount)) * n))
                  : ((o.slideOffset =
                      ((-1 * o.slideCount) % o.options.slidesToScroll) *
                      o.slideWidth),
                    (s =
                      ((-1 * o.slideCount) % o.options.slidesToScroll) * n))))
            : t + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (t + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (s = (t + o.options.slidesToShow - o.slideCount) * n)),
          o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0),
          !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : !0 === o.options.centerMode &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (e =
            !1 === o.options.vertical
              ? -1 * t * o.slideWidth + o.slideOffset
              : -1 * t * n + s),
          !0 === o.options.variableWidth &&
            ((e = (i =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children(".slick-slide").eq(t)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(t + o.options.slidesToShow))[0]
              ? -1 * i[0].offsetLeft
              : 0),
            !0 === o.options.centerMode &&
              ((e = (i =
                !1 === o.options.infinite
                  ? o.$slideTrack.children(".slick-slide").eq(t)
                  : o.$slideTrack
                      .children(".slick-slide")
                      .eq(t + o.options.slidesToShow + 1))[0]
                ? -1 * i[0].offsetLeft
                : 0),
              (e += (o.$list.width() - i.outerWidth()) / 2))),
          e
        );
      }),
      (l.prototype.getOption = l.prototype.slickGetOption =
        function (t) {
          return this.options[t];
        }),
      (l.prototype.getNavigableIndexes = function () {
        var t = this,
          e = 0,
          n = 0,
          i = [],
          o =
            !1 === t.options.infinite
              ? t.slideCount - t.options.slidesToShow + 1
              : t.slideCount;
        for (!0 === t.options.centerMode && (o = t.slideCount); e < o; )
          i.push(e),
            (e = n + t.options.slidesToScroll),
            (n +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return i;
      }),
      (l.prototype.getSlick = function () {
        return this;
      }),
      (l.prototype.getSlideCount = function () {
        var n,
          i,
          o = this;
        return (
          (i =
            !0 === o.options.centerMode
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          !0 === o.options.swipeToSlide
            ? (o.$slideTrack.find(".slick-slide").each(function (t, e) {
                return e.offsetLeft - i + a(e).outerWidth() / 2 >
                  -1 * o.swipeLeft
                  ? ((n = e), !1)
                  : void 0;
              }),
              Math.abs(a(n).attr("data-slick-index") - o.currentSlide) || 1)
            : o.options.slidesToScroll
        );
      }),
      (l.prototype.goTo = l.prototype.slickGoTo =
        function (t, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            e
          );
        }),
      (l.prototype.init = function () {
        var t = this;
        a(t.$slider).hasClass("slick-initialized") ||
          (a(t.$slider).addClass("slick-initialized"),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots()),
          t.$slider.trigger("init", [t]);
      }),
      (l.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.on(
            "click.slick",
            { message: "previous" },
            t.changeSlide
          ),
          t.$nextArrow.on("click.slick", { message: "next" }, t.changeSlide));
      }),
      (l.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          t.slideCount > t.options.slidesToShow &&
          a("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            !0 === t.options.autoplay &&
            a("li", t.$dots)
              .on("mouseenter.slick", function () {
                (t.paused = !0), t.autoPlayClear();
              })
              .on("mouseleave.slick", function () {
                (t.paused = !1), t.autoPlay();
              });
      }),
      (l.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          !0 === t.options.autoplay &&
            (a(document).on(t.visibilityChange, function () {
              t.visibility();
            }),
            !0 === t.options.pauseOnHover &&
              (t.$list.on("mouseenter.slick", function () {
                (t.paused = !0), t.autoPlayClear();
              }),
              t.$list.on("mouseleave.slick", function () {
                (t.paused = !1), t.autoPlay();
              }))),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            a(t.options.slide, t.$slideTrack).on(
              "click.slick",
              t.selectHandler
            ),
          a(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            function () {
              t.checkResponsive(), t.setPosition();
            }
          ),
          a(window).on("resize.slick.slick-" + t.instanceUid, function () {
            a(window).width() !== t.windowWidth &&
              (clearTimeout(t.windowDelay),
              (t.windowDelay = window.setTimeout(function () {
                (t.windowWidth = a(window).width()),
                  t.checkResponsive(),
                  t.setPosition();
              }, 50)));
          }),
          a("*[draggable!=true]", t.$slideTrack).on("dragstart", function (t) {
            t.preventDefault();
          }),
          a(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          a(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (l.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.show(), t.$nextArrow.show()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.show(),
          !0 === t.options.autoplay && t.autoPlay();
      }),
      (l.prototype.keyHandler = function (t) {
        var e = this;
        37 === t.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({ data: { message: "previous" } })
          : 39 === t.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({ data: { message: "next" } });
      }),
      (l.prototype.lazyLoad = function () {
        function t(t) {
          a("img[data-lazy]", t).each(function () {
            var t = a(this),
              e = a(this).attr("data-lazy");
            t.load(function () {
              t.animate({ opacity: 1 }, 200);
            })
              .css({ opacity: 0 })
              .attr("src", e)
              .removeAttr("data-lazy")
              .removeClass("slick-loading");
          });
        }
        var e,
          n,
          i = this;
        !0 === i.options.centerMode
          ? !0 === i.options.infinite
            ? (n =
                (e = i.currentSlide + (i.options.slidesToShow / 2 + 1)) +
                i.options.slidesToShow +
                2)
            : ((e = Math.max(
                0,
                i.currentSlide - (i.options.slidesToShow / 2 + 1)
              )),
              (n = i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide))
          : ((n =
              (e = i.options.infinite
                ? i.options.slidesToShow + i.currentSlide
                : i.currentSlide) + i.options.slidesToShow),
            !0 === i.options.fade && (0 < e && e--, n <= i.slideCount && n++)),
          t(i.$slider.find(".slick-slide").slice(e, n)),
          i.slideCount <= i.options.slidesToShow
            ? t(i.$slider.find(".slick-slide"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow
            ? t(
                i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)
              )
            : 0 === i.currentSlide &&
              t(
                i.$slider
                  .find(".slick-cloned")
                  .slice(-1 * i.options.slidesToShow)
              );
      }),
      (l.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(),
          t.$slideTrack.css({ opacity: 1 }),
          t.$slider.removeClass("slick-loading"),
          t.initUI(),
          "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
      }),
      (l.prototype.next = l.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (l.prototype.pause = l.prototype.slickPause =
        function () {
          var t = this;
          t.autoPlayClear(), (t.paused = !0);
        }),
      (l.prototype.play = l.prototype.slickPlay =
        function () {
          var t = this;
          (t.paused = !1), t.autoPlay();
        }),
      (l.prototype.postSlide = function (t) {
        var e = this;
        e.$slider.trigger("afterChange", [e, t]),
          (e.animating = !1),
          e.setPosition(),
          !(e.swipeLeft = null) === e.options.autoplay &&
            !1 === e.paused &&
            e.autoPlay();
      }),
      (l.prototype.prev = l.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (l.prototype.progressiveLazyLoad = function () {
        var t,
          e = this;
        0 < a("img[data-lazy]", e.$slider).length &&
          (t = a("img[data-lazy]", e.$slider).first())
            .attr("src", t.attr("data-lazy"))
            .removeClass("slick-loading")
            .load(function () {
              t.removeAttr("data-lazy"), e.progressiveLazyLoad();
            })
            .error(function () {
              t.removeAttr("data-lazy"), e.progressiveLazyLoad();
            });
      }),
      (l.prototype.refresh = function () {
        var t = this,
          e = t.currentSlide;
        t.destroy(),
          a.extend(t, t.initials),
          t.init(),
          t.changeSlide({ data: { message: "index", index: e } }, !0);
      }),
      (l.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          !0 === t.options.focusOnSelect &&
            a(t.options.slide, t.$slideTrack).on(
              "click.slick",
              t.selectHandler
            ),
          t.setSlideClasses(0),
          t.setPosition(),
          t.$slider.trigger("reInit", [t]);
      }),
      (l.prototype.removeSlide = l.prototype.slickRemove =
        function (t, e, n) {
          var i = this;
          return (
            "boolean" == typeof t
              ? (t = !0 === (e = t) ? 0 : i.slideCount - 1)
              : (t = !0 === e ? --t : t),
            !(i.slideCount < 1 || t < 0 || t > i.slideCount - 1) &&
              (i.unload(),
              !0 === n
                ? i.$slideTrack.children().remove()
                : i.$slideTrack.children(this.options.slide).eq(t).remove(),
              (i.$slides = i.$slideTrack.children(this.options.slide)),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slideTrack.append(i.$slides),
              (i.$slidesCache = i.$slides),
              void i.reinit())
          );
        }),
      (l.prototype.setCSS = function (t) {
        var e,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (t = -t),
          (e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px"),
          (o[i.positionProp] = t),
          !1 === i.transformsEnabled ||
            (!(o = {}) === i.cssTransitions
              ? (o[i.animType] = "translate(" + e + ", " + n + ")")
              : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)")),
          i.$slideTrack.css(o);
      }),
      (l.prototype.setDimensions = function () {
        var t = this;
        if (
          (!1 === t.options.vertical
            ? !0 === t.options.centerMode &&
              t.$list.css({ padding: "0px " + t.options.centerPadding })
            : (t.$list.height(
                t.$slides.first().outerHeight(!0) * t.options.slidesToShow
              ),
              !0 === t.options.centerMode &&
                t.$list.css({ padding: t.options.centerPadding + " 0px" })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth)
        )
          (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
            t.$slideTrack.width(
              Math.ceil(
                t.slideWidth * t.$slideTrack.children(".slick-slide").length
              )
            );
        else if (!0 === t.options.variableWidth) {
          var e = 0;
          (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
            t.$slideTrack.children(".slick-slide").each(function () {
              e += t.listWidth;
            }),
            t.$slideTrack.width(Math.ceil(e) + 1);
        } else
          (t.slideWidth = Math.ceil(t.listWidth)),
            t.$slideTrack.height(
              Math.ceil(
                t.$slides.first().outerHeight(!0) *
                  t.$slideTrack.children(".slick-slide").length
              )
            );
        var n = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
          t.$slideTrack.children(".slick-slide").width(t.slideWidth - n);
      }),
      (l.prototype.setFade = function () {
        var n,
          i = this;
        i.$slides.each(function (t, e) {
          (n = -1 * i.slideWidth * t),
            !0 === i.options.rtl
              ? a(e).css({
                  position: "relative",
                  right: n,
                  top: 0,
                  zIndex: 800,
                  opacity: 0,
                })
              : a(e).css({
                  position: "relative",
                  left: n,
                  top: 0,
                  zIndex: 800,
                  opacity: 0,
                });
        }),
          i.$slides.eq(i.currentSlide).css({ zIndex: 900, opacity: 1 });
      }),
      (l.prototype.setHeight = function () {
        var t = this;
        if (
          1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.css("height", e);
        }
      }),
      (l.prototype.setOption = l.prototype.slickSetOption =
        function (t, e, n) {
          var i = this;
          (i.options[t] = e), !0 === n && (i.unload(), i.reinit());
        }),
      (l.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(),
          t.setHeight(),
          !1 === t.options.fade
            ? t.setCSS(t.getLeft(t.currentSlide))
            : t.setFade(),
          t.$slider.trigger("setPosition", [t]);
      }),
      (l.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
          "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
          (void 0 !== e.WebkitTransition ||
            void 0 !== e.MozTransition ||
            void 0 !== e.msTransition) &&
            !0 === t.options.useCSS &&
            (t.cssTransitions = !0),
          void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
            (t.transformType = "-o-transform"),
            (t.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
            (t.transformType = "-moz-transform"),
            (t.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
            (t.transformType = "-webkit-transform"),
            (t.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
            (t.transformType = "-ms-transform"),
            (t.transitionType = "msTransition"),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
            (t.transformType = "transform"),
            (t.transitionType = "transition")),
          (t.transformsEnabled = null !== t.animType && !1 !== t.animType);
      }),
      (l.prototype.setSlideClasses = function (t) {
        var e,
          n,
          i,
          o,
          s = this;
        s.$slider
          .find(".slick-slide")
          .removeClass("slick-active")
          .removeClass("slick-center"),
          (n = s.$slider.find(".slick-slide")),
          !0 === s.options.centerMode
            ? ((e = Math.floor(s.options.slidesToShow / 2)),
              !0 === s.options.infinite &&
                (e <= t && t <= s.slideCount - 1 - e
                  ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active")
                  : ((i = s.options.slidesToShow + t),
                    n.slice(i - e + 1, i + e + 2).addClass("slick-active")),
                0 === t
                  ? n
                      .eq(n.length - 1 - s.options.slidesToShow)
                      .addClass("slick-center")
                  : t === s.slideCount - 1 &&
                    n.eq(s.options.slidesToShow).addClass("slick-center")),
              s.$slides.eq(t).addClass("slick-center"))
            : 0 <= t && t <= s.slideCount - s.options.slidesToShow
            ? s.$slides
                .slice(t, t + s.options.slidesToShow)
                .addClass("slick-active")
            : n.length <= s.options.slidesToShow
            ? n.addClass("slick-active")
            : ((o = s.slideCount % s.options.slidesToShow),
              (i = !0 === s.options.infinite ? s.options.slidesToShow + t : t),
              s.options.slidesToShow == s.options.slidesToScroll &&
              s.slideCount - t < s.options.slidesToShow
                ? n
                    .slice(i - (s.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                : n
                    .slice(i, i + s.options.slidesToShow)
                    .addClass("slick-active")),
          "ondemand" === s.options.lazyLoad && s.lazyLoad();
      }),
      (l.prototype.setupInfinite = function () {
        var t,
          e,
          n,
          i = this;
        if (
          (!0 === i.options.fade && (i.options.centerMode = !1),
          !0 === i.options.infinite &&
            !1 === i.options.fade &&
            ((e = null), i.slideCount > i.options.slidesToShow))
        ) {
          for (
            n =
              !0 === i.options.centerMode
                ? i.options.slidesToShow + 1
                : i.options.slidesToShow,
              t = i.slideCount;
            t > i.slideCount - n;
            t -= 1
          )
            (e = t - 1),
              a(i.$slides[e])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", e - i.slideCount)
                .prependTo(i.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < n; t += 1)
            (e = t),
              a(i.$slides[e])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", e + i.slideCount)
                .appendTo(i.$slideTrack)
                .addClass("slick-cloned");
          i.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              a(this).attr("id", "");
            });
        }
      }),
      (l.prototype.selectHandler = function (t) {
        var e = this,
          n = parseInt(
            a(t.target).parents(".slick-slide").attr("data-slick-index")
          );
        return (
          n || (n = 0),
          e.slideCount <= e.options.slidesToShow
            ? (e.$slider.find(".slick-slide").removeClass("slick-active"),
              e.$slides.eq(n).addClass("slick-active"),
              !0 === e.options.centerMode &&
                (e.$slider.find(".slick-slide").removeClass("slick-center"),
                e.$slides.eq(n).addClass("slick-center")),
              void e.asNavFor(n))
            : void e.slideHandler(n)
        );
      }),
      (l.prototype.slideHandler = function (t, e, n) {
        var i,
          o,
          s,
          r = null,
          a = this;
        return (
          (e = e || !1),
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === t) ||
          a.slideCount <= a.options.slidesToShow
            ? void 0
            : (!1 === e && a.asNavFor(t),
              (i = t),
              (r = a.getLeft(i)),
              (s = a.getLeft(a.currentSlide)),
              (a.currentLeft = null === a.swipeLeft ? s : a.swipeLeft),
              !1 === a.options.infinite &&
              !1 === a.options.centerMode &&
              (t < 0 || t > a.getDotCount() * a.options.slidesToScroll)
                ? void (
                    !1 === a.options.fade &&
                    ((i = a.currentSlide),
                    !0 !== n
                      ? a.animateSlide(s, function () {
                          a.postSlide(i);
                        })
                      : a.postSlide(i))
                  )
                : !1 === a.options.infinite &&
                  !0 === a.options.centerMode &&
                  (t < 0 || t > a.slideCount - a.options.slidesToScroll)
                ? void (
                    !1 === a.options.fade &&
                    ((i = a.currentSlide),
                    !0 !== n
                      ? a.animateSlide(s, function () {
                          a.postSlide(i);
                        })
                      : a.postSlide(i))
                  )
                : (!0 === a.options.autoplay && clearInterval(a.autoPlayTimer),
                  (o =
                    i < 0
                      ? 0 != a.slideCount % a.options.slidesToScroll
                        ? a.slideCount -
                          (a.slideCount % a.options.slidesToScroll)
                        : a.slideCount + i
                      : i >= a.slideCount
                      ? 0 != a.slideCount % a.options.slidesToScroll
                        ? 0
                        : i - a.slideCount
                      : i),
                  (a.animating = !0),
                  a.$slider.trigger("beforeChange", [a, a.currentSlide, o]),
                  a.currentSlide,
                  (a.currentSlide = o),
                  a.setSlideClasses(a.currentSlide),
                  a.updateDots(),
                  a.updateArrows(),
                  !0 === a.options.fade
                    ? (!0 !== n
                        ? a.fadeSlide(o, function () {
                            a.postSlide(o);
                          })
                        : a.postSlide(o),
                      void a.animateHeight())
                    : void (!0 !== n
                        ? a.animateSlide(r, function () {
                            a.postSlide(o);
                          })
                        : a.postSlide(o))))
        );
      }),
      (l.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.hide(), t.$nextArrow.hide()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.hide(),
          t.$slider.addClass("slick-loading");
      }),
      (l.prototype.swipeDirection = function () {
        var t,
          e,
          n,
          i,
          o = this;
        return (
          (t = o.touchObject.startX - o.touchObject.curX),
          (e = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(e, t)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && 0 <= i
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i <= 360 && 315 <= i
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : 135 <= i && i <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : "vertical"
        );
      }),
      (l.prototype.swipeEnd = function () {
        var t,
          e = this;
        if (
          ((e.dragging = !1),
          (e.shouldClick = !(10 < e.touchObject.swipeLength)),
          void 0 === e.touchObject.curX)
        )
          return !1;
        if (
          (!0 === e.touchObject.edgeHit &&
            e.$slider.trigger("edge", [e, e.swipeDirection()]),
          e.touchObject.swipeLength >= e.touchObject.minSwipe)
        )
          switch (e.swipeDirection()) {
            case "left":
              (t = e.options.swipeToSlide
                ? e.checkNavigable(e.currentSlide + e.getSlideCount())
                : e.currentSlide + e.getSlideCount()),
                e.slideHandler(t),
                (e.currentDirection = 0),
                (e.touchObject = {}),
                e.$slider.trigger("swipe", [e, "left"]);
              break;
            case "right":
              (t = e.options.swipeToSlide
                ? e.checkNavigable(e.currentSlide - e.getSlideCount())
                : e.currentSlide - e.getSlideCount()),
                e.slideHandler(t),
                (e.currentDirection = 1),
                (e.touchObject = {}),
                e.$slider.trigger("swipe", [e, "right"]);
          }
        else
          e.touchObject.startX !== e.touchObject.curX &&
            (e.slideHandler(e.currentSlide), (e.touchObject = {}));
      }),
      (l.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              e.swipeStart(t);
              break;
            case "move":
              e.swipeMove(t);
              break;
            case "end":
              e.swipeEnd(t);
          }
      }),
      (l.prototype.swipeMove = function (t) {
        var e,
          n,
          i,
          o,
          s,
          r = this;
        return (
          (s = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!r.dragging || (s && 1 !== s.length)) &&
            ((e = r.getLeft(r.currentSlide)),
            (r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX),
            (r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY),
            (r.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))
            )),
            "vertical" !== (n = r.swipeDirection())
              ? (void 0 !== t.originalEvent &&
                  4 < r.touchObject.swipeLength &&
                  t.preventDefault(),
                (o =
                  (!1 === r.options.rtl ? 1 : -1) *
                  (r.touchObject.curX > r.touchObject.startX ? 1 : -1)),
                (i = r.touchObject.swipeLength),
                (r.touchObject.edgeHit = !1) === r.options.infinite &&
                  ((0 === r.currentSlide && "right" === n) ||
                    (r.currentSlide >= r.getDotCount() && "left" === n)) &&
                  ((i = r.touchObject.swipeLength * r.options.edgeFriction),
                  (r.touchObject.edgeHit = !0)),
                (r.swipeLeft =
                  !1 === r.options.vertical
                    ? e + i * o
                    : e + i * (r.$list.height() / r.listWidth) * o),
                !0 !== r.options.fade &&
                  !1 !== r.options.touchMove &&
                  (!0 === r.animating
                    ? ((r.swipeLeft = null), !1)
                    : void r.setCSS(r.swipeLeft)))
              : void 0)
        );
      }),
      (l.prototype.swipeStart = function (t) {
        var e,
          n = this;
        return 1 !== n.touchObject.fingerCount ||
          n.slideCount <= n.options.slidesToShow
          ? !(n.touchObject = {})
          : (void 0 !== t.originalEvent &&
              void 0 !== t.originalEvent.touches &&
              (e = t.originalEvent.touches[0]),
            (n.touchObject.startX = n.touchObject.curX =
              void 0 !== e ? e.pageX : t.clientX),
            (n.touchObject.startY = n.touchObject.curY =
              void 0 !== e ? e.pageY : t.clientY),
            void (n.dragging = !0));
      }),
      (l.prototype.unfilterSlides = l.prototype.slickUnfilter =
        function () {
          var t = this;
          null !== t.$slidesCache &&
            (t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.appendTo(t.$slideTrack),
            t.reinit());
        }),
      (l.prototype.unload = function () {
        var t = this;
        a(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            "object" != typeof t.options.prevArrow &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            "object" != typeof t.options.nextArrow &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible")
            .css("width", "");
      }),
      (l.prototype.unslick = function () {
        this.destroy();
      }),
      (l.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
          !0 === t.options.arrows &&
            !0 !== t.options.infinite &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow.removeClass("slick-disabled"),
            t.$nextArrow.removeClass("slick-disabled"),
            0 === t.currentSlide
              ? (t.$prevArrow.addClass("slick-disabled"),
                t.$nextArrow.removeClass("slick-disabled"))
              : t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                !1 === t.options.centerMode
              ? (t.$nextArrow.addClass("slick-disabled"),
                t.$prevArrow.removeClass("slick-disabled"))
              : t.currentSlide >= t.slideCount - 1 &&
                !0 === t.options.centerMode &&
                (t.$nextArrow.addClass("slick-disabled"),
                t.$prevArrow.removeClass("slick-disabled")));
      }),
      (l.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots &&
          (t.$dots.find("li").removeClass("slick-active"),
          t.$dots
            .find("li")
            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (l.prototype.visibility = function () {
        var t = this;
        document[t.hidden]
          ? ((t.paused = !0), t.autoPlayClear())
          : ((t.paused = !1), t.autoPlay());
      }),
      (a.fn.slick = function (t) {
        for (
          var e,
            n = this,
            i = t,
            o = Array.prototype.slice.call(arguments, 1),
            s = n.length,
            r = 0;
          r < s;
          r++
        )
          if (
            ("object" == typeof i || void 0 === i
              ? (n[r].slick = new l(n[r], i))
              : (e = n[r].slick[i].apply(n[r].slick, o)),
            void 0 !== e)
          )
            return e;
        return n;
      }),
      a(function () {
        a("[data-slick]").slick();
      });
  }),
  document.createElement("video"),
  document.createElement("audio"),
  document.createElement("track");
var vjs = function (t, e, n) {
    var i;
    if ("string" == typeof t) {
      if ((0 === t.indexOf("#") && (t = t.slice(1)), vjs.players[t]))
        return (
          e &&
            vjs.log.warn(
              'Player "' +
                t +
                '" is already initialised. Options will not be applied.'
            ),
          n && vjs.players[t].ready(n),
          vjs.players[t]
        );
      i = vjs.el(t);
    } else i = t;
    if (!i || !i.nodeName)
      throw new TypeError("The element or ID supplied is not valid. (videojs)");
    return i.player || new vjs.Player(i, e, n);
  },
  videojs = (window.videojs = vjs);
(vjs.CDN_VERSION = "4.12"),
  (vjs.ACCESS_PROTOCOL =
    "https:" == document.location.protocol ? "https://" : "http://"),
  (vjs.VERSION = "4.12.15"),
  (vjs.options = {
    techOrder: ["html5", "flash"],
    html5: {},
    flash: {},
    width: 300,
    height: 150,
    defaultVolume: 0,
    playbackRates: [],
    inactivityTimeout: 2e3,
    children: {
      mediaLoader: {},
      posterImage: {},
      loadingSpinner: {},
      textTrackDisplay: {},
      bigPlayButton: {},
      controlBar: {},
      errorDisplay: {},
      textTrackSettings: {},
    },
    language:
      document.getElementsByTagName("html")[0].getAttribute("lang") ||
      (navigator.languages && navigator.languages[0]) ||
      navigator.userLanguage ||
      navigator.language ||
      "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this video.",
  }),
  "GENERATED_CDN_VSN" !== vjs.CDN_VERSION &&
    (videojs.options.flash.swf =
      "/assets/video-js-2fdab6df0f3a15b2bf4c23f9a14105fd3769499f9bfdf91396711629dffa84f7.swf"),
  (vjs.addLanguage = function (t, e) {
    return (
      vjs.options.languages[t] !== undefined
        ? (vjs.options.languages[t] = vjs.util.mergeOptions(
            vjs.options.languages[t],
            e
          ))
        : (vjs.options.languages[t] = e),
      vjs.options.languages
    );
  }),
  (vjs.players = {}),
  "function" == typeof define && define.amd
    ? define("videojs", [], function () {
        return videojs;
      })
    : "object" == typeof exports &&
      "object" == typeof module &&
      (module.exports = videojs),
  (vjs.CoreObject = vjs.CoreObject = function () {}),
  (vjs.CoreObject.extend = function (t) {
    var e, n;
    for (var i in ((e =
      (t = t || {}).init ||
      t.init ||
      this.prototype.init ||
      this.prototype.init ||
      function () {}),
    ((n = function () {
      e.apply(this, arguments);
    }).prototype = vjs.obj.create(this.prototype)),
    ((n.prototype.constructor = n).extend = vjs.CoreObject.extend),
    (n.create = vjs.CoreObject.create),
    t))
      t.hasOwnProperty(i) && (n.prototype[i] = t[i]);
    return n;
  }),
  (vjs.CoreObject.create = function () {
    var t = vjs.obj.create(this.prototype);
    return this.apply(t, arguments), t;
  }),
  (vjs.on = function (s, t, e) {
    if (vjs.obj.isArray(t)) return _handleMultipleEvents(vjs.on, s, t, e);
    var r = vjs.getData(s);
    r.handlers || (r.handlers = {}),
      r.handlers[t] || (r.handlers[t] = []),
      e.guid || (e.guid = vjs.guid++),
      r.handlers[t].push(e),
      r.dispatcher ||
        ((r.disabled = !1),
        (r.dispatcher = function (t) {
          if (!r.disabled) {
            t = vjs.fixEvent(t);
            var e = r.handlers[t.type];
            if (e)
              for (
                var n = e.slice(0), i = 0, o = n.length;
                i < o && !t.isImmediatePropagationStopped();
                i++
              )
                n[i].call(s, t);
          }
        })),
      1 == r.handlers[t].length &&
        (s.addEventListener
          ? s.addEventListener(t, r.dispatcher, !1)
          : s.attachEvent && s.attachEvent("on" + t, r.dispatcher));
  }),
  (vjs.off = function (e, t, n) {
    if (vjs.hasData(e)) {
      var i = vjs.getData(e);
      if (i.handlers) {
        if (vjs.obj.isArray(t)) return _handleMultipleEvents(vjs.off, e, t, n);
        var o = function (t) {
          (i.handlers[t] = []), vjs.cleanUpEvents(e, t);
        };
        if (t) {
          var s = i.handlers[t];
          if (s)
            if (n) {
              if (n.guid)
                for (var r = 0; r < s.length; r++)
                  s[r].guid === n.guid && s.splice(r--, 1);
              vjs.cleanUpEvents(e, t);
            } else o(t);
        } else for (var a in i.handlers) o(a);
      }
    }
  }),
  (vjs.cleanUpEvents = function (t, e) {
    var n = vjs.getData(t);
    0 === n.handlers[e].length &&
      (delete n.handlers[e],
      t.removeEventListener
        ? t.removeEventListener(e, n.dispatcher, !1)
        : t.detachEvent && t.detachEvent("on" + e, n.dispatcher)),
      vjs.isEmpty(n.handlers) &&
        (delete n.handlers, delete n.dispatcher, delete n.disabled),
      vjs.isEmpty(n) && vjs.removeData(t);
  }),
  (vjs.fixEvent = function (t) {
    function e() {
      return !0;
    }
    function n() {
      return !1;
    }
    if (!t || !t.isPropagationStopped) {
      var i = t || window.event;
      for (var o in ((t = {}), i))
        "layerX" !== o &&
          "layerY" !== o &&
          "keyLocation" !== o &&
          (("returnValue" == o && i.preventDefault) || (t[o] = i[o]));
      if (
        (t.target || (t.target = t.srcElement || document),
        (t.relatedTarget =
          t.fromElement === t.target ? t.toElement : t.fromElement),
        (t.preventDefault = function () {
          i.preventDefault && i.preventDefault(),
            (t.returnValue = !1),
            (t.isDefaultPrevented = e),
            (t.defaultPrevented = !0);
        }),
        (t.isDefaultPrevented = n),
        (t.defaultPrevented = !1),
        (t.stopPropagation = function () {
          i.stopPropagation && i.stopPropagation(),
            (t.cancelBubble = !0),
            (t.isPropagationStopped = e);
        }),
        (t.isPropagationStopped = n),
        (t.stopImmediatePropagation = function () {
          i.stopImmediatePropagation && i.stopImmediatePropagation(),
            (t.isImmediatePropagationStopped = e),
            t.stopPropagation();
        }),
        (t.isImmediatePropagationStopped = n),
        null != t.clientX)
      ) {
        var s = document.documentElement,
          r = document.body;
        (t.pageX =
          t.clientX +
          ((s && s.scrollLeft) || (r && r.scrollLeft) || 0) -
          ((s && s.clientLeft) || (r && r.clientLeft) || 0)),
          (t.pageY =
            t.clientY +
            ((s && s.scrollTop) || (r && r.scrollTop) || 0) -
            ((s && s.clientTop) || (r && r.clientTop) || 0));
      }
      (t.which = t.charCode || t.keyCode),
        null != t.button &&
          (t.button =
            1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0);
    }
    return t;
  }),
  (vjs.trigger = function (t, e) {
    var n = vjs.hasData(t) ? vjs.getData(t) : {},
      i = t.parentNode || t.ownerDocument;
    if (
      ("string" == typeof e && (e = { type: e, target: t }),
      (e = vjs.fixEvent(e)),
      n.dispatcher && n.dispatcher.call(t, e),
      i && !e.isPropagationStopped() && !1 !== e.bubbles)
    )
      vjs.trigger(i, e);
    else if (!i && !e.defaultPrevented) {
      var o = vjs.getData(e.target);
      e.target[e.type] &&
        ((o.disabled = !0),
        "function" == typeof e.target[e.type] && e.target[e.type](),
        (o.disabled = !1));
    }
    return !e.defaultPrevented;
  }),
  (vjs.one = function (t, e, n) {
    if (vjs.obj.isArray(e)) return _handleMultipleEvents(vjs.one, t, e, n);
    var i = function () {
      vjs.off(t, e, i), n.apply(this, arguments);
    };
    (i.guid = n.guid = n.guid || vjs.guid++), vjs.on(t, e, i);
  });
var hasOwnProp = Object.prototype.hasOwnProperty;
(vjs.createEl = function (t, e) {
  var n;
  return (
    (t = t || "div"),
    (e = e || {}),
    (n = document.createElement(t)),
    vjs.obj.each(e, function (t, e) {
      -1 !== t.indexOf("aria-") || "role" == t
        ? n.setAttribute(t, e)
        : (n[t] = e);
    }),
    n
  );
}),
  (vjs.capitalize = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }),
  (vjs.obj = {}),
  (vjs.obj.create =
    Object.create ||
    function (t) {
      function e() {}
      return (e.prototype = t), new e();
    }),
  (vjs.obj.each = function (t, e, n) {
    for (var i in t) hasOwnProp.call(t, i) && e.call(n || this, i, t[i]);
  }),
  (vjs.obj.merge = function (t, e) {
    if (!e) return t;
    for (var n in e) hasOwnProp.call(e, n) && (t[n] = e[n]);
    return t;
  }),
  (vjs.obj.deepMerge = function (t, e) {
    var n, i, o;
    for (n in ((t = vjs.obj.copy(t)), e))
      hasOwnProp.call(e, n) &&
        ((i = t[n]),
        (o = e[n]),
        vjs.obj.isPlain(i) && vjs.obj.isPlain(o)
          ? (t[n] = vjs.obj.deepMerge(i, o))
          : (t[n] = e[n]));
    return t;
  }),
  (vjs.obj.copy = function (t) {
    return vjs.obj.merge({}, t);
  }),
  (vjs.obj.isPlain = function (t) {
    return (
      !!t &&
      "object" == typeof t &&
      "[object Object]" === t.toString() &&
      t.constructor === Object
    );
  }),
  (vjs.obj.isArray =
    Array.isArray ||
    function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }),
  (vjs.isNaN = function (t) {
    return t != t;
  }),
  (vjs.bind = function (t, e, n) {
    e.guid || (e.guid = vjs.guid++);
    var i = function () {
      return e.apply(t, arguments);
    };
    return (i.guid = n ? n + "_" + e.guid : e.guid), i;
  }),
  (vjs.cache = {}),
  (vjs.guid = 1),
  (vjs.expando = "vdata" + new Date().getTime()),
  (vjs.getData = function (t) {
    var e = t[vjs.expando];
    return (
      e || (e = t[vjs.expando] = vjs.guid++),
      vjs.cache[e] || (vjs.cache[e] = {}),
      vjs.cache[e]
    );
  }),
  (vjs.hasData = function (t) {
    var e = t[vjs.expando];
    return !(!e || vjs.isEmpty(vjs.cache[e]));
  }),
  (vjs.removeData = function (t) {
    var e = t[vjs.expando];
    if (e) {
      delete vjs.cache[e];
      try {
        delete t[vjs.expando];
      } catch (n) {
        t.removeAttribute
          ? t.removeAttribute(vjs.expando)
          : (t[vjs.expando] = null);
      }
    }
  }),
  (vjs.isEmpty = function (t) {
    for (var e in t) if (null !== t[e]) return !1;
    return !0;
  }),
  (vjs.hasClass = function (t, e) {
    return -1 !== (" " + t.className + " ").indexOf(" " + e + " ");
  }),
  (vjs.addClass = function (t, e) {
    vjs.hasClass(t, e) ||
      (t.className = "" === t.className ? e : t.className + " " + e);
  }),
  (vjs.removeClass = function (t, e) {
    var n, i;
    if (vjs.hasClass(t, e)) {
      for (i = (n = t.className.split(" ")).length - 1; 0 <= i; i--)
        n[i] === e && n.splice(i, 1);
      t.className = n.join(" ");
    }
  }),
  (vjs.TEST_VID = vjs.createEl("video")),
  (function () {
    var t = document.createElement("track");
    (t.kind = "captions"),
      (t.srclang = "en"),
      (t.label = "English"),
      vjs.TEST_VID.appendChild(t);
  })(),
  (vjs.USER_AGENT = navigator.userAgent),
  (vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT)),
  (vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT)),
  (vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT)),
  (vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD),
  (vjs.IOS_VERSION = (function () {
    var t = vjs.USER_AGENT.match(/OS (\d+)_/i);
    if (t && t[1]) return t[1];
  })()),
  (vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT)),
  (vjs.ANDROID_VERSION = (function () {
    var t,
      e,
      n = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    return n
      ? ((t = n[1] && parseFloat(n[1])),
        (e = n[2] && parseFloat(n[2])),
        t && e ? parseFloat(n[1] + "." + n[2]) : t || null)
      : null;
  })()),
  (vjs.IS_OLD_ANDROID =
    vjs.IS_ANDROID &&
    /webkit/i.test(vjs.USER_AGENT) &&
    vjs.ANDROID_VERSION < 2.3),
  (vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT)),
  (vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT)),
  (vjs.IS_IE8 = /MSIE\s8\.0/.test(vjs.USER_AGENT)),
  (vjs.TOUCH_ENABLED = !!(
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
  )),
  (vjs.BACKGROUND_SIZE_SUPPORTED = "backgroundSize" in vjs.TEST_VID.style),
  (vjs.setElementAttributes = function (n, t) {
    vjs.obj.each(t, function (t, e) {
      null == e || !1 === e
        ? n.removeAttribute(t)
        : n.setAttribute(t, !0 === e ? "" : e);
    });
  }),
  (vjs.getElementAttributes = function (t) {
    var e, n, i, o, s;
    if (
      ((e = {}),
      (n = ",autoplay,controls,loop,muted,default,"),
      t && t.attributes && 0 < t.attributes.length)
    )
      for (var r = (i = t.attributes).length - 1; 0 <= r; r--)
        (o = i[r].name),
          (s = i[r].value),
          ("boolean" != typeof t[o] && -1 === n.indexOf("," + o + ",")) ||
            (s = null !== s),
          (e[o] = s);
    return e;
  }),
  (vjs.getComputedDimension = function (t, e) {
    var n = "";
    return (
      document.defaultView && document.defaultView.getComputedStyle
        ? (n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e))
        : t.currentStyle &&
          (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"),
      n
    );
  }),
  (vjs.insertFirst = function (t, e) {
    e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
  }),
  (vjs.browser = {}),
  (vjs.el = function (t) {
    return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t);
  }),
  (vjs.formatTime = function (t, e) {
    e = e || t;
    var n = Math.floor(t % 60),
      i = Math.floor((t / 60) % 60),
      o = Math.floor(t / 3600),
      s = Math.floor((e / 60) % 60),
      r = Math.floor(e / 3600);
    return (
      (isNaN(t) || t === Infinity) && (o = i = n = "-"),
      (o = 0 < o || 0 < r ? o + ":" : "") +
        (i = ((o || 10 <= s) && i < 10 ? "0" + i : i) + ":") +
        (n = n < 10 ? "0" + n : n)
    );
  }),
  (vjs.blockTextSelection = function () {
    document.body.focus(),
      (document.onselectstart = function () {
        return !1;
      });
  }),
  (vjs.unblockTextSelection = function () {
    document.onselectstart = function () {
      return !0;
    };
  }),
  (vjs.trim = function (t) {
    return (t + "").replace(/^\s+|\s+$/g, "");
  }),
  (vjs.round = function (t, e) {
    return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e);
  }),
  (vjs.createTimeRange = function (t, e) {
    return t === undefined && e === undefined
      ? {
          length: 0,
          start: function () {
            throw new Error("This TimeRanges object is empty");
          },
          end: function () {
            throw new Error("This TimeRanges object is empty");
          },
        }
      : {
          length: 1,
          start: function () {
            return t;
          },
          end: function () {
            return e;
          },
        };
  }),
  (vjs.setLocalStorage = function (t, e) {
    try {
      var n = window.localStorage || !1;
      if (!n) return;
      n[t] = e;
    } catch (i) {
      22 == i.code || 1014 == i.code
        ? vjs.log("LocalStorage Full (VideoJS)", i)
        : 18 == i.code
        ? vjs.log("LocalStorage not allowed (VideoJS)", i)
        : vjs.log("LocalStorage Error (VideoJS)", i);
    }
  }),
  (vjs.getAbsoluteURL = function (t) {
    return (
      t.match(/^https?:\/\//) ||
        (t = vjs.createEl("div", { innerHTML: '<a href="' + t + '">x</a>' })
          .firstChild.href),
      t
    );
  }),
  (vjs.parseUrl = function (t) {
    var e, n, i, o, s;
    (o = [
      "protocol",
      "hostname",
      "port",
      "pathname",
      "search",
      "hash",
      "host",
    ]),
      (i =
        "" === (n = vjs.createEl("a", { href: t })).host &&
        "file:" !== n.protocol) &&
        (((e = vjs.createEl("div")).innerHTML = '<a href="' + t + '"></a>'),
        (n = e.firstChild),
        e.setAttribute("style", "display:none; position:absolute;"),
        document.body.appendChild(e)),
      (s = {});
    for (var r = 0; r < o.length; r++) s[o[r]] = n[o[r]];
    return (
      "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")),
      "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")),
      i && document.body.removeChild(e),
      s
    );
  }),
  (vjs.log = function () {
    _logType(null, arguments);
  }),
  (vjs.log.history = []),
  (vjs.log.error = function () {
    _logType("error", arguments);
  }),
  (vjs.log.warn = function () {
    _logType("warn", arguments);
  }),
  (vjs.findPosition = function (t) {
    var e, n, i, o, s, r, a, l, c;
    return (
      t.getBoundingClientRect &&
        t.parentNode &&
        (e = t.getBoundingClientRect()),
      e
        ? ((n = document.documentElement),
          (i = document.body),
          (o = n.clientLeft || i.clientLeft || 0),
          (s = window.pageXOffset || i.scrollLeft),
          (r = e.left + s - o),
          (a = n.clientTop || i.clientTop || 0),
          (l = window.pageYOffset || i.scrollTop),
          (c = e.top + l - a),
          { left: vjs.round(r), top: vjs.round(c) })
        : { left: 0, top: 0 }
    );
  }),
  (vjs.arr = {}),
  (vjs.arr.forEach = function (t, e, n) {
    if (vjs.obj.isArray(t) && e instanceof Function)
      for (var i = 0, o = t.length; i < o; ++i) e.call(n || vjs, t[i], i, t);
    return t;
  }),
  (vjs.xhr = function (t, e) {
    var n, i, o, s, r, a, l, c;
    "string" == typeof t && (t = { uri: t }),
      videojs.util.mergeOptions({ method: "GET", timeout: 45e3 }, t),
      (e = e || function () {}),
      (l = function () {
        window.clearTimeout(a), e(null, i, i.response || i.responseText);
      }),
      (c = function (t) {
        window.clearTimeout(a),
          (t && "string" != typeof t) || (t = new Error(t)),
          e(t, i);
      }),
      void 0 === (n = window.XMLHttpRequest) &&
        (n = function () {
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
          } catch (t) {}
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
          } catch (e) {}
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP");
          } catch (n) {}
          throw new Error("This browser does not support XMLHttpRequest.");
        }),
      ((i = new n()).uri = t.uri),
      (o = vjs.parseUrl(t.uri)),
      (s = window.location),
      !(o.protocol + o.host !== s.protocol + s.host) ||
      !window.XDomainRequest ||
      "withCredentials" in i
        ? ((r = "file:" == o.protocol || "file:" == s.protocol),
          (i.onreadystatechange = function () {
            if (4 === i.readyState) {
              if (i.timedout) return c("timeout");
              200 === i.status || (r && 0 === i.status) ? l() : c();
            }
          }),
          t.timeout &&
            (a = window.setTimeout(function () {
              4 !== i.readyState && ((i.timedout = !0), i.abort());
            }, t.timeout)))
        : (((i = new window.XDomainRequest()).onload = l),
          (i.onerror = c),
          (i.onprogress = function () {}),
          (i.ontimeout = function () {}));
    try {
      i.open(t.method || "GET", t.uri, !0);
    } catch (u) {
      return c(u);
    }
    t.withCredentials && (i.withCredentials = !0),
      t.responseType && (i.responseType = t.responseType);
    try {
      i.send();
    } catch (u) {
      return c(u);
    }
    return i;
  }),
  (vjs.util = {}),
  (vjs.util.mergeOptions = function (t, e) {
    var n, i, o;
    for (n in ((t = vjs.obj.copy(t)), e))
      e.hasOwnProperty(n) &&
        ((i = t[n]),
        (o = e[n]),
        vjs.obj.isPlain(i) && vjs.obj.isPlain(o)
          ? (t[n] = vjs.util.mergeOptions(i, o))
          : (t[n] = e[n]));
    return t;
  }),
  (vjs.EventEmitter = function () {}),
  (vjs.EventEmitter.prototype.allowedEvents_ = {}),
  (vjs.EventEmitter.prototype.on = function (t, e) {
    var n = this.addEventListener;
    (this.addEventListener = Function.prototype),
      vjs.on(this, t, e),
      (this.addEventListener = n);
  }),
  (vjs.EventEmitter.prototype.addEventListener = vjs.EventEmitter.prototype.on),
  (vjs.EventEmitter.prototype.off = function (t, e) {
    vjs.off(this, t, e);
  }),
  (vjs.EventEmitter.prototype.removeEventListener =
    vjs.EventEmitter.prototype.off),
  (vjs.EventEmitter.prototype.one = function (t, e) {
    vjs.one(this, t, e);
  }),
  (vjs.EventEmitter.prototype.trigger = function (t) {
    var e = t.type || t;
    "string" == typeof t && (t = { type: e }),
      (t = vjs.fixEvent(t)),
      this.allowedEvents_[e] && this["on" + e] && this["on" + e](t),
      vjs.trigger(this, t);
  }),
  (vjs.EventEmitter.prototype.dispatchEvent =
    vjs.EventEmitter.prototype.trigger),
  (vjs.Component = vjs.CoreObject.extend({
    init: function (t, e, n) {
      (this.player_ = t),
        (this.options_ = vjs.obj.copy(this.options_)),
        (e = this.options(e)),
        (this.id_ = e.id || (e.el && e.el.id)),
        this.id_ ||
          (this.id_ =
            ((t.id && t.id()) || "no_player") + "_component_" + vjs.guid++),
        (this.name_ = e.name || null),
        (this.el_ = e.el || this.createEl()),
        (this.children_ = []),
        (this.childIndex_ = {}),
        (this.childNameIndex_ = {}),
        this.initChildren(),
        this.ready(n),
        !1 !== e.reportTouchActivity && this.enableTouchActivity();
    },
  })),
  (vjs.Component.prototype.dispose = function () {
    if ((this.trigger({ type: "dispose", bubbles: !1 }), this.children_))
      for (var t = this.children_.length - 1; 0 <= t; t--)
        this.children_[t].dispose && this.children_[t].dispose();
    (this.children_ = null),
      (this.childIndex_ = null),
      (this.childNameIndex_ = null),
      this.off(),
      this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
      vjs.removeData(this.el_),
      (this.el_ = null);
  }),
  (vjs.Component.prototype.player_ = !0),
  (vjs.Component.prototype.player = function () {
    return this.player_;
  }),
  vjs.Component.prototype.options_,
  (vjs.Component.prototype.options = function (t) {
    return t === undefined
      ? this.options_
      : (this.options_ = vjs.util.mergeOptions(this.options_, t));
  }),
  vjs.Component.prototype.el_,
  (vjs.Component.prototype.createEl = function (t, e) {
    return vjs.createEl(t, e);
  }),
  (vjs.Component.prototype.localize = function (t) {
    var e = this.player_.language(),
      n = this.player_.languages();
    return n && n[e] && n[e][t] ? n[e][t] : t;
  }),
  (vjs.Component.prototype.el = function () {
    return this.el_;
  }),
  vjs.Component.prototype.contentEl_,
  (vjs.Component.prototype.contentEl = function () {
    return this.contentEl_ || this.el_;
  }),
  vjs.Component.prototype.id_,
  (vjs.Component.prototype.id = function () {
    return this.id_;
  }),
  vjs.Component.prototype.name_,
  (vjs.Component.prototype.name = function () {
    return this.name_;
  }),
  vjs.Component.prototype.children_,
  (vjs.Component.prototype.children = function () {
    return this.children_;
  }),
  vjs.Component.prototype.childIndex_,
  (vjs.Component.prototype.getChildById = function (t) {
    return this.childIndex_[t];
  }),
  vjs.Component.prototype.childNameIndex_,
  (vjs.Component.prototype.getChild = function (t) {
    return this.childNameIndex_[t];
  }),
  (vjs.Component.prototype.addChild = function (t, e) {
    var n, i, o;
    return (
      "string" == typeof t
        ? ((o = t),
          (i = (e = e || {}).componentClass || vjs.capitalize(o)),
          (e.name = o),
          (n = new window.videojs[i](this.player_ || this, e)))
        : (n = t),
      this.children_.push(n),
      "function" == typeof n.id && (this.childIndex_[n.id()] = n),
      (o = o || (n.name && n.name())) && (this.childNameIndex_[o] = n),
      "function" == typeof n.el &&
        n.el() &&
        this.contentEl().appendChild(n.el()),
      n
    );
  }),
  (vjs.Component.prototype.removeChild = function (t) {
    if (("string" == typeof t && (t = this.getChild(t)), t && this.children_)) {
      for (var e = !1, n = this.children_.length - 1; 0 <= n; n--)
        if (this.children_[n] === t) {
          (e = !0), this.children_.splice(n, 1);
          break;
        }
      if (e) {
        (this.childIndex_[t.id()] = null),
          (this.childNameIndex_[t.name()] = null);
        var i = t.el();
        i &&
          i.parentNode === this.contentEl() &&
          this.contentEl().removeChild(t.el());
      }
    }
  }),
  (vjs.Component.prototype.initChildren = function () {
    var n, i, t, e, o, s, r;
    if ((t = (i = (n = this).options()).children))
      if (
        ((r = function (t, e) {
          i[t] !== undefined && (e = i[t]),
            !1 !== e && (n[t] = n.addChild(t, e));
        }),
        vjs.obj.isArray(t))
      )
        for (var a = 0; a < t.length; a++)
          "string" == typeof (e = t[a])
            ? ((o = e), (s = {}))
            : ((o = e.name), (s = e)),
            r(o, s);
      else vjs.obj.each(t, r);
  }),
  (vjs.Component.prototype.buildCSSClass = function () {
    return "";
  }),
  (vjs.Component.prototype.on = function (t, e, n) {
    var i, o, s, r, a, l;
    return (
      "string" == typeof t || vjs.obj.isArray(t)
        ? vjs.on(this.el_, t, vjs.bind(this, e))
        : ((i = t),
          (o = e),
          (s = vjs.bind(this, n)),
          (l = this),
          ((r = function () {
            l.off(i, o, s);
          }).guid = s.guid),
          this.on("dispose", r),
          ((a = function () {
            l.off("dispose", r);
          }).guid = s.guid),
          t.nodeName
            ? (vjs.on(i, o, s), vjs.on(i, "dispose", a))
            : "function" == typeof t.on && (i.on(o, s), i.on("dispose", a))),
      this
    );
  }),
  (vjs.Component.prototype.off = function (t, e, n) {
    var i, o, s;
    return (
      !t || "string" == typeof t || vjs.obj.isArray(t)
        ? vjs.off(this.el_, t, e)
        : ((i = t),
          (o = e),
          (s = vjs.bind(this, n)),
          this.off("dispose", s),
          t.nodeName
            ? (vjs.off(i, o, s), vjs.off(i, "dispose", s))
            : (i.off(o, s), i.off("dispose", s))),
      this
    );
  }),
  (vjs.Component.prototype.one = function (t, e, n) {
    var i, o, s, r, a;
    return (
      "string" == typeof t || vjs.obj.isArray(t)
        ? vjs.one(this.el_, t, vjs.bind(this, e))
        : ((i = t),
          (o = e),
          (s = vjs.bind(this, n)),
          (r = this),
          ((a = function () {
            r.off(i, o, a), s.apply(this, arguments);
          }).guid = s.guid),
          this.on(i, o, a)),
      this
    );
  }),
  (vjs.Component.prototype.trigger = function (t) {
    return vjs.trigger(this.el_, t), this;
  }),
  vjs.Component.prototype.isReady_,
  (vjs.Component.prototype.isReadyOnInitFinish_ = !0),
  vjs.Component.prototype.readyQueue_,
  (vjs.Component.prototype.ready = function (t) {
    return (
      t &&
        (this.isReady_
          ? t.call(this)
          : (this.readyQueue_ === undefined && (this.readyQueue_ = []),
            this.readyQueue_.push(t))),
      this
    );
  }),
  (vjs.Component.prototype.triggerReady = function () {
    this.isReady_ = !0;
    var t = this.readyQueue_;
    if (((this.readyQueue_ = []), t && 0 < t.length)) {
      for (var e = 0, n = t.length; e < n; e++) t[e].call(this);
      this.trigger("ready");
    }
  }),
  (vjs.Component.prototype.hasClass = function (t) {
    return vjs.hasClass(this.el_, t);
  }),
  (vjs.Component.prototype.addClass = function (t) {
    return vjs.addClass(this.el_, t), this;
  }),
  (vjs.Component.prototype.removeClass = function (t) {
    return vjs.removeClass(this.el_, t), this;
  }),
  (vjs.Component.prototype.show = function () {
    return this.removeClass("vjs-hidden"), this;
  }),
  (vjs.Component.prototype.hide = function () {
    return this.addClass("vjs-hidden"), this;
  }),
  (vjs.Component.prototype.lockShowing = function () {
    return this.addClass("vjs-lock-showing"), this;
  }),
  (vjs.Component.prototype.unlockShowing = function () {
    return this.removeClass("vjs-lock-showing"), this;
  }),
  (vjs.Component.prototype.disable = function () {
    this.hide(), (this.show = function () {});
  }),
  (vjs.Component.prototype.width = function (t, e) {
    return this.dimension("width", t, e);
  }),
  (vjs.Component.prototype.height = function (t, e) {
    return this.dimension("height", t, e);
  }),
  (vjs.Component.prototype.dimensions = function (t, e) {
    return this.width(t, !0).height(e);
  }),
  (vjs.Component.prototype.dimension = function (t, e, n) {
    if (e !== undefined)
      return (
        (null === e || vjs.isNaN(e)) && (e = 0),
        -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px")
          ? (this.el_.style[t] = e)
          : (this.el_.style[t] = "auto" === e ? "" : e + "px"),
        n || this.trigger("resize"),
        this
      );
    if (!this.el_) return 0;
    var i = this.el_.style[t],
      o = i.indexOf("px");
    return -1 !== o
      ? parseInt(i.slice(0, o), 10)
      : parseInt(this.el_["offset" + vjs.capitalize(t)], 10);
  }),
  vjs.Component.prototype.onResize,
  (vjs.Component.prototype.emitTapEvents = function () {
    var e, n, i, t, o, s, r, a, l;
    (e = 0),
      (n = null),
      (a = 10),
      (l = 200),
      this.on("touchstart", function (t) {
        1 === t.touches.length &&
          ((n = vjs.obj.copy(t.touches[0])),
          (e = new Date().getTime()),
          (i = !0));
      }),
      this.on("touchmove", function (t) {
        1 < t.touches.length
          ? (i = !1)
          : n &&
            ((o = t.touches[0].pageX - n.pageX),
            (s = t.touches[0].pageY - n.pageY),
            (r = Math.sqrt(o * o + s * s)),
            a < r && (i = !1));
      }),
      (t = function () {
        i = !1;
      }),
      this.on("touchleave", t),
      this.on("touchcancel", t),
      this.on("touchend", function (t) {
        !(n = null) === i &&
          new Date().getTime() - e < l &&
          (t.preventDefault(), this.trigger("tap"));
      });
  }),
  (vjs.Component.prototype.enableTouchActivity = function () {
    var t, e, n;
    this.player().reportUserActivity &&
      ((t = vjs.bind(this.player(), this.player().reportUserActivity)),
      this.on("touchstart", function () {
        t(), this.clearInterval(e), (e = this.setInterval(t, 250));
      }),
      (n = function () {
        t(), this.clearInterval(e);
      }),
      this.on("touchmove", t),
      this.on("touchend", n),
      this.on("touchcancel", n));
  }),
  (vjs.Component.prototype.setTimeout = function (t, e) {
    t = vjs.bind(this, t);
    var n = setTimeout(t, e),
      i = function () {
        this.clearTimeout(n);
      };
    return (i.guid = "vjs-timeout-" + n), this.on("dispose", i), n;
  }),
  (vjs.Component.prototype.clearTimeout = function (t) {
    clearTimeout(t);
    var e = function () {};
    return (e.guid = "vjs-timeout-" + t), this.off("dispose", e), t;
  }),
  (vjs.Component.prototype.setInterval = function (t, e) {
    t = vjs.bind(this, t);
    var n = setInterval(t, e),
      i = function () {
        this.clearInterval(n);
      };
    return (i.guid = "vjs-interval-" + n), this.on("dispose", i), n;
  }),
  (vjs.Component.prototype.clearInterval = function (t) {
    clearInterval(t);
    var e = function () {};
    return (e.guid = "vjs-interval-" + t), this.off("dispose", e), t;
  }),
  (vjs.Button = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e),
        this.emitTapEvents(),
        this.on("tap", this.onClick),
        this.on("click", this.onClick),
        this.on("focus", this.onFocus),
        this.on("blur", this.onBlur);
    },
  })),
  (vjs.Button.prototype.createEl = function (t, e) {
    var n;
    return (
      (e = vjs.obj.merge(
        {
          className: this.buildCSSClass(),
          role: "button",
          "aria-live": "polite",
          tabIndex: 0,
        },
        e
      )),
      (n = vjs.Component.prototype.createEl.call(this, t, e)),
      e.innerHTML ||
        ((this.contentEl_ = vjs.createEl("div", {
          className: "vjs-control-content",
        })),
        (this.controlText_ = vjs.createEl("span", {
          className: "vjs-control-text",
          innerHTML: this.localize(this.buttonText) || "Need Text",
        })),
        this.contentEl_.appendChild(this.controlText_),
        n.appendChild(this.contentEl_)),
      n
    );
  }),
  (vjs.Button.prototype.buildCSSClass = function () {
    return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this);
  }),
  (vjs.Button.prototype.onClick = function () {}),
  (vjs.Button.prototype.onFocus = function () {
    vjs.on(document, "keydown", vjs.bind(this, this.onKeyPress));
  }),
  (vjs.Button.prototype.onKeyPress = function (t) {
    (32 != t.which && 13 != t.which) || (t.preventDefault(), this.onClick());
  }),
  (vjs.Button.prototype.onBlur = function () {
    vjs.off(document, "keydown", vjs.bind(this, this.onKeyPress));
  }),
  (vjs.Slider = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e),
        (this.bar = this.getChild(this.options_.barName)),
        (this.handle = this.getChild(this.options_.handleName)),
        this.on("mousedown", this.onMouseDown),
        this.on("touchstart", this.onMouseDown),
        this.on("focus", this.onFocus),
        this.on("blur", this.onBlur),
        this.on("click", this.onClick),
        this.on(t, "controlsvisible", this.update),
        this.on(t, this.playerEvent, this.update);
    },
  })),
  (vjs.Slider.prototype.createEl = function (t, e) {
    return (
      ((e = e || {}).className = e.className + " vjs-slider"),
      (e = vjs.obj.merge(
        {
          role: "slider",
          "aria-valuenow": 0,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          tabIndex: 0,
        },
        e
      )),
      vjs.Component.prototype.createEl.call(this, t, e)
    );
  }),
  (vjs.Slider.prototype.onMouseDown = function (t) {
    t.preventDefault(),
      vjs.blockTextSelection(),
      this.addClass("vjs-sliding"),
      this.on(document, "mousemove", this.onMouseMove),
      this.on(document, "mouseup", this.onMouseUp),
      this.on(document, "touchmove", this.onMouseMove),
      this.on(document, "touchend", this.onMouseUp),
      this.onMouseMove(t);
  }),
  (vjs.Slider.prototype.onMouseMove = function () {}),
  (vjs.Slider.prototype.onMouseUp = function () {
    vjs.unblockTextSelection(),
      this.removeClass("vjs-sliding"),
      this.off(document, "mousemove", this.onMouseMove),
      this.off(document, "mouseup", this.onMouseUp),
      this.off(document, "touchmove", this.onMouseMove),
      this.off(document, "touchend", this.onMouseUp),
      this.update();
  }),
  (vjs.Slider.prototype.update = function () {
    if (this.el_) {
      var t,
        e = this.getPercent(),
        n = this.handle,
        i = this.bar;
      if (
        (("number" != typeof e || e != e || e < 0 || e === Infinity) && (e = 0),
        (t = e),
        n)
      ) {
        var o = this.el_.offsetWidth,
          s = n.el().offsetWidth,
          r = s ? s / o : 0,
          a = e * (1 - r);
        (t = a + r / 2), (n.el().style.left = vjs.round(100 * a, 2) + "%");
      }
      i && (i.el().style.width = vjs.round(100 * t, 2) + "%");
    }
  }),
  (vjs.Slider.prototype.calculateDistance = function (t) {
    var e, n, i, o, s, r, a, l, c;
    if (
      ((e = this.el_),
      (n = vjs.findPosition(e)),
      (s = r = e.offsetWidth),
      (a = this.handle),
      this.options().vertical)
    ) {
      if (
        ((o = n.top),
        (c = t.changedTouches ? t.changedTouches[0].pageY : t.pageY),
        a)
      ) {
        var u = a.el().offsetHeight;
        (o += u / 2), (r -= u);
      }
      return Math.max(0, Math.min(1, (o - c + r) / r));
    }
    if (
      ((i = n.left),
      (l = t.changedTouches ? t.changedTouches[0].pageX : t.pageX),
      a)
    ) {
      var d = a.el().offsetWidth;
      (i += d / 2), (s -= d);
    }
    return Math.max(0, Math.min(1, (l - i) / s));
  }),
  (vjs.Slider.prototype.onFocus = function () {
    this.on(document, "keydown", this.onKeyPress);
  }),
  (vjs.Slider.prototype.onKeyPress = function (t) {
    37 == t.which || 40 == t.which
      ? (t.preventDefault(), this.stepBack())
      : (38 != t.which && 39 != t.which) ||
        (t.preventDefault(), this.stepForward());
  }),
  (vjs.Slider.prototype.onBlur = function () {
    this.off(document, "keydown", this.onKeyPress);
  }),
  (vjs.Slider.prototype.onClick = function (t) {
    t.stopImmediatePropagation(), t.preventDefault();
  }),
  (vjs.SliderHandle = vjs.Component.extend()),
  (vjs.SliderHandle.prototype.defaultValue = 0),
  (vjs.SliderHandle.prototype.createEl = function (t, e) {
    return (
      ((e = e || {}).className = e.className + " vjs-slider-handle"),
      (e = vjs.obj.merge(
        {
          innerHTML:
            '<span class="vjs-control-text">' + this.defaultValue + "</span>",
        },
        e
      )),
      vjs.Component.prototype.createEl.call(this, "div", e)
    );
  }),
  (vjs.Menu = vjs.Component.extend()),
  (vjs.Menu.prototype.addItem = function (t) {
    this.addChild(t),
      t.on(
        "click",
        vjs.bind(this, function () {
          this.unlockShowing();
        })
      );
  }),
  (vjs.Menu.prototype.createEl = function () {
    var t = this.options().contentElType || "ul";
    this.contentEl_ = vjs.createEl(t, { className: "vjs-menu-content" });
    var e = vjs.Component.prototype.createEl.call(this, "div", {
      append: this.contentEl_,
      className: "vjs-menu",
    });
    return (
      e.appendChild(this.contentEl_),
      vjs.on(e, "click", function (t) {
        t.preventDefault(), t.stopImmediatePropagation();
      }),
      e
    );
  }),
  (vjs.MenuItem = vjs.Button.extend({
    init: function (t, e) {
      vjs.Button.call(this, t, e), this.selected(e.selected);
    },
  })),
  (vjs.MenuItem.prototype.createEl = function (t, e) {
    return vjs.Button.prototype.createEl.call(
      this,
      "li",
      vjs.obj.merge(
        {
          className: "vjs-menu-item",
          innerHTML: this.localize(this.options_.label),
        },
        e
      )
    );
  }),
  (vjs.MenuItem.prototype.onClick = function () {
    this.selected(!0);
  }),
  (vjs.MenuItem.prototype.selected = function (t) {
    t
      ? (this.addClass("vjs-selected"),
        this.el_.setAttribute("aria-selected", !0))
      : (this.removeClass("vjs-selected"),
        this.el_.setAttribute("aria-selected", !1));
  }),
  (vjs.MenuButton = vjs.Button.extend({
    init: function (t, e) {
      vjs.Button.call(this, t, e),
        this.update(),
        this.on("keydown", this.onKeyPress),
        this.el_.setAttribute("aria-haspopup", !0),
        this.el_.setAttribute("role", "button");
    },
  })),
  (vjs.MenuButton.prototype.update = function () {
    var t = this.createMenu();
    this.menu && this.removeChild(this.menu),
      (this.menu = t),
      this.addChild(t),
      this.items && 0 === this.items.length
        ? this.hide()
        : this.items && 1 < this.items.length && this.show();
  }),
  (vjs.MenuButton.prototype.buttonPressed_ = !1),
  (vjs.MenuButton.prototype.createMenu = function () {
    var t = new vjs.Menu(this.player_);
    if (
      (this.options().title &&
        t
          .contentEl()
          .appendChild(
            vjs.createEl("li", {
              className: "vjs-menu-title",
              innerHTML: vjs.capitalize(this.options().title),
              tabindex: -1,
            })
          ),
      (this.items = this.createItems()),
      this.items)
    )
      for (var e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
    return t;
  }),
  (vjs.MenuButton.prototype.createItems = function () {}),
  (vjs.MenuButton.prototype.buildCSSClass = function () {
    return (
      this.className +
      " vjs-menu-button " +
      vjs.Button.prototype.buildCSSClass.call(this)
    );
  }),
  (vjs.MenuButton.prototype.onFocus = function () {}),
  (vjs.MenuButton.prototype.onBlur = function () {}),
  (vjs.MenuButton.prototype.onClick = function () {
    this.one(
      "mouseout",
      vjs.bind(this, function () {
        this.menu.unlockShowing(), this.el_.blur();
      })
    ),
      this.buttonPressed_ ? this.unpressButton() : this.pressButton();
  }),
  (vjs.MenuButton.prototype.onKeyPress = function (t) {
    32 == t.which || 13 == t.which
      ? (this.buttonPressed_ ? this.unpressButton() : this.pressButton(),
        t.preventDefault())
      : 27 == t.which &&
        (this.buttonPressed_ && this.unpressButton(), t.preventDefault());
  }),
  (vjs.MenuButton.prototype.pressButton = function () {
    (this.buttonPressed_ = !0),
      this.menu.lockShowing(),
      this.el_.setAttribute("aria-pressed", !0),
      this.items && 0 < this.items.length && this.items[0].el().focus();
  }),
  (vjs.MenuButton.prototype.unpressButton = function () {
    (this.buttonPressed_ = !1),
      this.menu.unlockShowing(),
      this.el_.setAttribute("aria-pressed", !1);
  }),
  (vjs.MediaError = function (t) {
    "number" == typeof t
      ? (this.code = t)
      : "string" == typeof t
      ? (this.message = t)
      : "object" == typeof t && vjs.obj.merge(this, t),
      this.message ||
        (this.message = vjs.MediaError.defaultMessages[this.code] || "");
  }),
  (vjs.MediaError.prototype.code = 0),
  (vjs.MediaError.prototype.message = ""),
  (vjs.MediaError.prototype.status = null),
  (vjs.MediaError.errorTypes = [
    "MEDIA_ERR_CUSTOM",
    "MEDIA_ERR_ABORTED",
    "MEDIA_ERR_NETWORK",
    "MEDIA_ERR_DECODE",
    "MEDIA_ERR_SRC_NOT_SUPPORTED",
    "MEDIA_ERR_ENCRYPTED",
  ]),
  (vjs.MediaError.defaultMessages = {
    1: "You aborted the video playback",
    2: "A network error caused the video download to fail part-way.",
    3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
    4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The video is encrypted and we do not have the keys to decrypt it.",
  });
for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++)
  (vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum),
    (vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum);
if (
  ((function () {
    var t, e, n, i;
    for (
      vjs.browser.fullscreenAPI,
        e = (t = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ])[0],
        i = 0;
      i < t.length;
      i++
    )
      if (t[i][1] in document) {
        n = t[i];
        break;
      }
    if (n)
      for (vjs.browser.fullscreenAPI = {}, i = 0; i < n.length; i++)
        vjs.browser.fullscreenAPI[e[i]] = n[i];
  })(),
  (vjs.Player = vjs.Component.extend({
    init: function (t, e, n) {
      ((this.tag = t).id = t.id || "vjs_video_" + vjs.guid++),
        (this.tagAttributes = t && vjs.getElementAttributes(t)),
        (e = vjs.obj.merge(this.getTagSettings(t), e)),
        (this.language_ = e.language || vjs.options.language),
        (this.languages_ = e.languages || vjs.options.languages),
        (this.cache_ = {}),
        (this.poster_ = e.poster || ""),
        (this.controls_ = !!e.controls),
        (t.controls = !1),
        (e.reportTouchActivity = !1),
        this.isAudio("audio" === this.tag.nodeName.toLowerCase()),
        vjs.Component.call(this, this, e, n),
        this.controls()
          ? this.addClass("vjs-controls-enabled")
          : this.addClass("vjs-controls-disabled"),
        this.isAudio() && this.addClass("vjs-audio"),
        (vjs.players[this.id_] = this),
        e.plugins &&
          vjs.obj.each(
            e.plugins,
            function (t, e) {
              this[t](e);
            },
            this
          ),
        this.listenForUserActivity();
    },
  })),
  vjs.Player.prototype.language_,
  (vjs.Player.prototype.language = function (t) {
    return t === undefined ? this.language_ : ((this.language_ = t), this);
  }),
  vjs.Player.prototype.languages_,
  (vjs.Player.prototype.languages = function () {
    return this.languages_;
  }),
  (vjs.Player.prototype.options_ = vjs.options),
  (vjs.Player.prototype.dispose = function () {
    this.trigger("dispose"),
      this.off("dispose"),
      (vjs.players[this.id_] = null),
      this.tag && this.tag.player && (this.tag.player = null),
      this.el_ && this.el_.player && (this.el_.player = null),
      this.tech && this.tech.dispose(),
      vjs.Component.prototype.dispose.call(this);
  }),
  (vjs.Player.prototype.getTagSettings = function (t) {
    var e,
      n,
      i,
      o,
      s,
      r,
      a,
      l = { sources: [], tracks: [] };
    if (
      (null !== (n = (e = vjs.getElementAttributes(t))["data-setup"]) &&
        vjs.obj.merge(e, vjs.JSON.parse(n || "{}")),
      vjs.obj.merge(l, e),
      t.hasChildNodes())
    )
      for (r = 0, a = (i = t.childNodes).length; r < a; r++)
        "source" === (s = (o = i[r]).nodeName.toLowerCase())
          ? l.sources.push(vjs.getElementAttributes(o))
          : "track" === s && l.tracks.push(vjs.getElementAttributes(o));
    return l;
  }),
  (vjs.Player.prototype.createEl = function () {
    var e,
      n = (this.el_ = vjs.Component.prototype.createEl.call(this, "div")),
      t = this.tag;
    return (
      t.removeAttribute("width"),
      t.removeAttribute("height"),
      (e = vjs.getElementAttributes(t)),
      vjs.obj.each(e, function (t) {
        "class" == t ? (n.className = e[t]) : n.setAttribute(t, e[t]);
      }),
      (t.id += "_html5_api"),
      (t.className = "vjs-tech"),
      (t.player = n.player = this),
      this.addClass("vjs-paused"),
      this.width(this.options_.width, !0),
      this.height(this.options_.height, !0),
      (t.initNetworkState_ = t.networkState),
      t.parentNode && t.parentNode.insertBefore(n, t),
      vjs.insertFirst(t, n),
      (this.el_ = n),
      this.on("loadstart", this.onLoadStart),
      this.on("waiting", this.onWaiting),
      this.on(
        ["canplay", "canplaythrough", "playing", "ended"],
        this.onWaitEnd
      ),
      this.on("seeking", this.onSeeking),
      this.on("seeked", this.onSeeked),
      this.on("ended", this.onEnded),
      this.on("play", this.onPlay),
      this.on("firstplay", this.onFirstPlay),
      this.on("pause", this.onPause),
      this.on("progress", this.onProgress),
      this.on("durationchange", this.onDurationChange),
      this.on("fullscreenchange", this.onFullscreenChange),
      n
    );
  }),
  (vjs.Player.prototype.loadTech = function (t, e) {
    this.tech && this.unloadTech(),
      "Html5" !== t &&
        this.tag &&
        (vjs.Html5.disposeMediaElement(this.tag), (this.tag = null)),
      (this.techName = t),
      (this.isReady_ = !1);
    var n = function () {
        this.player_.triggerReady();
      },
      i = vjs.obj.merge(
        { source: e, parentEl: this.el_ },
        this.options_[t.toLowerCase()]
      );
    e &&
      ((this.currentType_ = e.type),
      e.src == this.cache_.src &&
        0 < this.cache_.currentTime &&
        (i.startTime = this.cache_.currentTime),
      (this.cache_.src = e.src)),
      (this.tech = new window.videojs[t](this, i)),
      this.tech.ready(n);
  }),
  (vjs.Player.prototype.unloadTech = function () {
    (this.isReady_ = !1), this.tech.dispose(), (this.tech = !1);
  }),
  (vjs.Player.prototype.onLoadStart = function () {
    this.removeClass("vjs-ended"),
      this.error(null),
      this.paused() ? this.hasStarted(!1) : this.trigger("firstplay");
  }),
  (vjs.Player.prototype.hasStarted_ = !1),
  (vjs.Player.prototype.hasStarted = function (t) {
    return t !== undefined
      ? (this.hasStarted_ !== t &&
          ((this.hasStarted_ = t)
            ? (this.addClass("vjs-has-started"), this.trigger("firstplay"))
            : this.removeClass("vjs-has-started")),
        this)
      : this.hasStarted_;
  }),
  vjs.Player.prototype.onLoadedMetaData,
  vjs.Player.prototype.onLoadedData,
  vjs.Player.prototype.onLoadedAllData,
  (vjs.Player.prototype.onPlay = function () {
    this.removeClass("vjs-ended"),
      this.removeClass("vjs-paused"),
      this.addClass("vjs-playing"),
      this.hasStarted(!0);
  }),
  (vjs.Player.prototype.onWaiting = function () {
    this.addClass("vjs-waiting");
  }),
  (vjs.Player.prototype.onWaitEnd = function () {
    this.removeClass("vjs-waiting");
  }),
  (vjs.Player.prototype.onSeeking = function () {
    this.addClass("vjs-seeking");
  }),
  (vjs.Player.prototype.onSeeked = function () {
    this.removeClass("vjs-seeking");
  }),
  (vjs.Player.prototype.onFirstPlay = function () {
    this.options_.starttime && this.currentTime(this.options_.starttime),
      this.addClass("vjs-has-started");
  }),
  (vjs.Player.prototype.onPause = function () {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused");
  }),
  vjs.Player.prototype.onTimeUpdate,
  (vjs.Player.prototype.onProgress = function () {
    1 == this.bufferedPercent() && this.trigger("loadedalldata");
  }),
  (vjs.Player.prototype.onEnded = function () {
    this.addClass("vjs-ended"),
      this.options_.loop
        ? (this.currentTime(0), this.play())
        : this.paused() || this.pause();
  }),
  (vjs.Player.prototype.onDurationChange = function () {
    var t = this.techGet("duration");
    t &&
      (t < 0 && (t = Infinity),
      this.duration(t),
      t === Infinity
        ? this.addClass("vjs-live")
        : this.removeClass("vjs-live"));
  }),
  vjs.Player.prototype.onVolumeChange,
  (vjs.Player.prototype.onFullscreenChange = function () {
    this.isFullscreen()
      ? this.addClass("vjs-fullscreen")
      : this.removeClass("vjs-fullscreen");
  }),
  vjs.Player.prototype.onError,
  vjs.Player.prototype.cache_,
  (vjs.Player.prototype.getCache = function () {
    return this.cache_;
  }),
  (vjs.Player.prototype.techCall = function (t, e) {
    if (this.tech && !this.tech.isReady_)
      this.tech.ready(function () {
        this[t](e);
      });
    else
      try {
        this.tech[t](e);
      } catch (n) {
        throw (vjs.log(n), n);
      }
  }),
  (vjs.Player.prototype.techGet = function (t) {
    if (this.tech && this.tech.isReady_)
      try {
        return this.tech[t]();
      } catch (e) {
        throw (
          (this.tech[t] === undefined
            ? vjs.log(
                "Video.js: " +
                  t +
                  " method not defined for " +
                  this.techName +
                  " playback technology.",
                e
              )
            : "TypeError" == e.name
            ? (vjs.log(
                "Video.js: " +
                  t +
                  " unavailable on " +
                  this.techName +
                  " playback technology element.",
                e
              ),
              (this.tech.isReady_ = !1))
            : vjs.log(e),
          e)
        );
      }
  }),
  (vjs.Player.prototype.play = function () {
    return this.techCall("play"), this;
  }),
  (vjs.Player.prototype.pause = function () {
    return this.techCall("pause"), this;
  }),
  (vjs.Player.prototype.paused = function () {
    return !1 !== this.techGet("paused");
  }),
  (vjs.Player.prototype.currentTime = function (t) {
    return t !== undefined
      ? (this.techCall("setCurrentTime", t), this)
      : (this.cache_.currentTime = this.techGet("currentTime") || 0);
  }),
  (vjs.Player.prototype.duration = function (t) {
    return t !== undefined
      ? ((this.cache_.duration = parseFloat(t)), this)
      : (this.cache_.duration === undefined && this.onDurationChange(),
        this.cache_.duration || 0);
  }),
  (vjs.Player.prototype.remainingTime = function () {
    return this.duration() - this.currentTime();
  }),
  (vjs.Player.prototype.buffered = function () {
    var t = this.techGet("buffered");
    return (t && t.length) || (t = vjs.createTimeRange(0, 0)), t;
  }),
  (vjs.Player.prototype.bufferedPercent = function () {
    var t,
      e,
      n = this.duration(),
      i = this.buffered(),
      o = 0;
    if (!n) return 0;
    for (var s = 0; s < i.length; s++)
      (t = i.start(s)), n < (e = i.end(s)) && (e = n), (o += e - t);
    return o / n;
  }),
  (vjs.Player.prototype.bufferedEnd = function () {
    var t = this.buffered(),
      e = this.duration(),
      n = t.end(t.length - 1);
    return e < n && (n = e), n;
  }),
  (vjs.Player.prototype.volume = function (t) {
    var e;
    return t !== undefined
      ? ((e = Math.max(0, Math.min(1, parseFloat(t)))),
        (this.cache_.volume = e),
        this.techCall("setVolume", e),
        vjs.setLocalStorage("volume", e),
        this)
      : ((e = parseFloat(this.techGet("volume"))), isNaN(e) ? 1 : e);
  }),
  (vjs.Player.prototype.muted = function (t) {
    return t !== undefined
      ? (this.techCall("setMuted", t), this)
      : this.techGet("muted") || !1;
  }),
  (vjs.Player.prototype.supportsFullScreen = function () {
    return this.techGet("supportsFullScreen") || !1;
  }),
  (vjs.Player.prototype.isFullscreen_ = !1),
  (vjs.Player.prototype.isFullscreen = function (t) {
    return t !== undefined
      ? ((this.isFullscreen_ = !!t), this)
      : this.isFullscreen_;
  }),
  (vjs.Player.prototype.isFullScreen = function (t) {
    return (
      vjs.log.warn(
        'player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'
      ),
      this.isFullscreen(t)
    );
  }),
  (vjs.Player.prototype.requestFullscreen = function () {
    var e = vjs.browser.fullscreenAPI;
    return (
      this.isFullscreen(!0),
      e
        ? (vjs.on(
            document,
            e.fullscreenchange,
            vjs.bind(this, function (t) {
              this.isFullscreen(document[e.fullscreenElement]),
                !1 === this.isFullscreen() &&
                  vjs.off(document, e.fullscreenchange, arguments.callee),
                this.trigger("fullscreenchange");
            })
          ),
          this.el_[e.requestFullscreen]())
        : this.tech.supportsFullScreen()
        ? this.techCall("enterFullScreen")
        : (this.enterFullWindow(), this.trigger("fullscreenchange")),
      this
    );
  }),
  (vjs.Player.prototype.requestFullScreen = function () {
    return (
      vjs.log.warn(
        'player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'
      ),
      this.requestFullscreen()
    );
  }),
  (vjs.Player.prototype.exitFullscreen = function () {
    var t = vjs.browser.fullscreenAPI;
    return (
      this.isFullscreen(!1),
      t
        ? document[t.exitFullscreen]()
        : this.tech.supportsFullScreen()
        ? this.techCall("exitFullScreen")
        : (this.exitFullWindow(), this.trigger("fullscreenchange")),
      this
    );
  }),
  (vjs.Player.prototype.cancelFullScreen = function () {
    return (
      vjs.log.warn(
        "player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"
      ),
      this.exitFullscreen()
    );
  }),
  (vjs.Player.prototype.enterFullWindow = function () {
    (this.isFullWindow = !0),
      (this.docOrigOverflow = document.documentElement.style.overflow),
      vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)),
      (document.documentElement.style.overflow = "hidden"),
      vjs.addClass(document.body, "vjs-full-window"),
      this.trigger("enterFullWindow");
  }),
  (vjs.Player.prototype.fullWindowOnEscKey = function (t) {
    27 === t.keyCode &&
      (!0 === this.isFullscreen()
        ? this.exitFullscreen()
        : this.exitFullWindow());
  }),
  (vjs.Player.prototype.exitFullWindow = function () {
    (this.isFullWindow = !1),
      vjs.off(document, "keydown", this.fullWindowOnEscKey),
      (document.documentElement.style.overflow = this.docOrigOverflow),
      vjs.removeClass(document.body, "vjs-full-window"),
      this.trigger("exitFullWindow");
  }),
  (vjs.Player.prototype.selectSource = function (t) {
    for (var e = 0, n = this.options_.techOrder; e < n.length; e++) {
      var i = vjs.capitalize(n[e]),
        o = window.videojs[i];
      if (o) {
        if (o.isSupported())
          for (var s = 0, r = t; s < r.length; s++) {
            var a = r[s];
            if (o.canPlaySource(a)) return { source: a, tech: i };
          }
      } else
        vjs.log.error(
          'The "' +
            i +
            '" tech is undefined. Skipped browser support check for that tech.'
        );
    }
    return !1;
  }),
  (vjs.Player.prototype.src = function (t) {
    return t === undefined
      ? this.techGet("src")
      : (vjs.obj.isArray(t)
          ? this.sourceList_(t)
          : "string" == typeof t
          ? this.src({ src: t })
          : t instanceof Object &&
            (t.type && !window.videojs[this.techName].canPlaySource(t)
              ? this.sourceList_([t])
              : ((this.cache_.src = t.src),
                (this.currentType_ = t.type || ""),
                this.ready(function () {
                  window.videojs[this.techName].prototype.hasOwnProperty(
                    "setSource"
                  )
                    ? this.techCall("setSource", t)
                    : this.techCall("src", t.src),
                    "auto" == this.options_.preload && this.load(),
                    this.options_.autoplay && this.play();
                }))),
        this);
  }),
  (vjs.Player.prototype.sourceList_ = function (t) {
    var e = this.selectSource(t);
    e
      ? e.tech === this.techName
        ? this.src(e.source)
        : this.loadTech(e.tech, e.source)
      : (this.setTimeout(function () {
          this.error({
            code: 4,
            message: this.localize(this.options().notSupportedMessage),
          });
        }, 0),
        this.triggerReady());
  }),
  (vjs.Player.prototype.load = function () {
    return this.techCall("load"), this;
  }),
  (vjs.Player.prototype.currentSrc = function () {
    return this.techGet("currentSrc") || this.cache_.src || "";
  }),
  (vjs.Player.prototype.currentType = function () {
    return this.currentType_ || "";
  }),
  (vjs.Player.prototype.preload = function (t) {
    return t !== undefined
      ? (this.techCall("setPreload", t), (this.options_.preload = t), this)
      : this.techGet("preload");
  }),
  (vjs.Player.prototype.autoplay = function (t) {
    return t !== undefined
      ? (this.techCall("setAutoplay", t), (this.options_.autoplay = t), this)
      : this.techGet("autoplay", t);
  }),
  (vjs.Player.prototype.loop = function (t) {
    return t !== undefined
      ? (this.techCall("setLoop", t), (this.options_.loop = t), this)
      : this.techGet("loop");
  }),
  vjs.Player.prototype.poster_,
  (vjs.Player.prototype.poster = function (t) {
    return t === undefined
      ? this.poster_
      : (t || (t = ""),
        (this.poster_ = t),
        this.techCall("setPoster", t),
        this.trigger("posterchange"),
        this);
  }),
  vjs.Player.prototype.controls_,
  (vjs.Player.prototype.controls = function (t) {
    return t !== undefined
      ? ((t = !!t),
        this.controls_ !== t &&
          ((this.controls_ = t)
            ? (this.removeClass("vjs-controls-disabled"),
              this.addClass("vjs-controls-enabled"),
              this.trigger("controlsenabled"))
            : (this.removeClass("vjs-controls-enabled"),
              this.addClass("vjs-controls-disabled"),
              this.trigger("controlsdisabled"))),
        this)
      : this.controls_;
  }),
  vjs.Player.prototype.usingNativeControls_,
  (vjs.Player.prototype.usingNativeControls = function (t) {
    return t !== undefined
      ? ((t = !!t),
        this.usingNativeControls_ !== t &&
          ((this.usingNativeControls_ = t)
            ? (this.addClass("vjs-using-native-controls"),
              this.trigger("usingnativecontrols"))
            : (this.removeClass("vjs-using-native-controls"),
              this.trigger("usingcustomcontrols"))),
        this)
      : this.usingNativeControls_;
  }),
  (vjs.Player.prototype.error_ = null),
  (vjs.Player.prototype.error = function (t) {
    return t === undefined
      ? this.error_
      : (null === t
          ? ((this.error_ = t), this.removeClass("vjs-error"))
          : (t instanceof vjs.MediaError
              ? (this.error_ = t)
              : (this.error_ = new vjs.MediaError(t)),
            this.trigger("error"),
            this.addClass("vjs-error"),
            vjs.log.error(
              "(CODE:" +
                this.error_.code +
                " " +
                vjs.MediaError.errorTypes[this.error_.code] +
                ")",
              this.error_.message,
              this.error_
            )),
        this);
  }),
  (vjs.Player.prototype.ended = function () {
    return this.techGet("ended");
  }),
  (vjs.Player.prototype.seeking = function () {
    return this.techGet("seeking");
  }),
  (vjs.Player.prototype.seekable = function () {
    return this.techGet("seekable");
  }),
  (vjs.Player.prototype.userActivity_ = !0),
  (vjs.Player.prototype.reportUserActivity = function () {
    this.userActivity_ = !0;
  }),
  (vjs.Player.prototype.userActive_ = !0),
  (vjs.Player.prototype.userActive = function (t) {
    return t !== undefined
      ? ((t = !!t) !== this.userActive_ &&
          ((this.userActive_ = t)
            ? ((this.userActivity_ = !0),
              this.removeClass("vjs-user-inactive"),
              this.addClass("vjs-user-active"),
              this.trigger("useractive"))
            : ((this.userActivity_ = !1),
              this.tech &&
                this.tech.one("mousemove", function (t) {
                  t.stopPropagation(), t.preventDefault();
                }),
              this.removeClass("vjs-user-active"),
              this.addClass("vjs-user-inactive"),
              this.trigger("userinactive"))),
        this)
      : this.userActive_;
  }),
  (vjs.Player.prototype.listenForUserActivity = function () {
    var e, t, n, i, o, s, r, a;
    (e = vjs.bind(this, this.reportUserActivity)),
      (t = function (t) {
        (t.screenX == r && t.screenY == a) ||
          ((r = t.screenX), (a = t.screenY), e());
      }),
      (n = function () {
        e(), this.clearInterval(i), (i = this.setInterval(e, 250));
      }),
      (o = function () {
        e(), this.clearInterval(i);
      }),
      this.on("mousedown", n),
      this.on("mousemove", t),
      this.on("mouseup", o),
      this.on("keydown", e),
      this.on("keyup", e),
      this.setInterval(function () {
        if (this.userActivity_) {
          (this.userActivity_ = !1), this.userActive(!0), this.clearTimeout(s);
          var t = this.options().inactivityTimeout;
          0 < t &&
            (s = this.setTimeout(function () {
              this.userActivity_ || this.userActive(!1);
            }, t));
        }
      }, 250);
  }),
  (vjs.Player.prototype.playbackRate = function (t) {
    return t !== undefined
      ? (this.techCall("setPlaybackRate", t), this)
      : this.tech && this.tech.featuresPlaybackRate
      ? this.techGet("playbackRate")
      : 1;
  }),
  (vjs.Player.prototype.isAudio_ = !1),
  (vjs.Player.prototype.isAudio = function (t) {
    return t !== undefined ? ((this.isAudio_ = !!t), this) : this.isAudio_;
  }),
  (vjs.Player.prototype.networkState = function () {
    return this.techGet("networkState");
  }),
  (vjs.Player.prototype.readyState = function () {
    return this.techGet("readyState");
  }),
  (vjs.Player.prototype.textTracks = function () {
    return this.tech && this.tech.textTracks();
  }),
  (vjs.Player.prototype.remoteTextTracks = function () {
    return this.tech && this.tech.remoteTextTracks();
  }),
  (vjs.Player.prototype.addTextTrack = function (t, e, n) {
    return this.tech && this.tech.addTextTrack(t, e, n);
  }),
  (vjs.Player.prototype.addRemoteTextTrack = function (t) {
    return this.tech && this.tech.addRemoteTextTrack(t);
  }),
  (vjs.Player.prototype.removeRemoteTextTrack = function (t) {
    this.tech && this.tech.removeRemoteTextTrack(t);
  }),
  (vjs.ControlBar = vjs.Component.extend()),
  (vjs.ControlBar.prototype.options_ = {
    loadEvent: "play",
    children: {
      playToggle: {},
      currentTimeDisplay: {},
      timeDivider: {},
      durationDisplay: {},
      remainingTimeDisplay: {},
      liveDisplay: {},
      progressControl: {},
      fullscreenToggle: {},
      volumeControl: {},
      muteToggle: {},
      playbackRateMenuButton: {},
      subtitlesButton: {},
      captionsButton: {},
      chaptersButton: {},
    },
  }),
  (vjs.ControlBar.prototype.createEl = function () {
    return vjs.createEl("div", { className: "vjs-control-bar" });
  }),
  (vjs.LiveDisplay = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e);
    },
  })),
  (vjs.LiveDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-live-controls vjs-control",
    });
    return (
      (this.contentEl_ = vjs.createEl("div", {
        className: "vjs-live-display",
        innerHTML:
          '<span class="vjs-control-text">' +
          this.localize("Stream Type") +
          "</span>" +
          this.localize("LIVE"),
        "aria-live": "off",
      })),
      t.appendChild(this.contentEl_),
      t
    );
  }),
  (vjs.PlayToggle = vjs.Button.extend({
    init: function (t, e) {
      vjs.Button.call(this, t, e),
        this.on(t, "play", this.onPlay),
        this.on(t, "pause", this.onPause);
    },
  })),
  (vjs.PlayToggle.prototype.buttonText = "Play"),
  (vjs.PlayToggle.prototype.buildCSSClass = function () {
    return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this);
  }),
  (vjs.PlayToggle.prototype.onClick = function () {
    this.player_.paused() ? this.player_.play() : this.player_.pause();
  }),
  (vjs.PlayToggle.prototype.onPlay = function () {
    this.removeClass("vjs-paused"),
      this.addClass("vjs-playing"),
      (this.el_.children[0].children[0].innerHTML = this.localize("Pause"));
  }),
  (vjs.PlayToggle.prototype.onPause = function () {
    this.removeClass("vjs-playing"),
      this.addClass("vjs-paused"),
      (this.el_.children[0].children[0].innerHTML = this.localize("Play"));
  }),
  (vjs.CurrentTimeDisplay = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e),
        this.on(t, "timeupdate", this.updateContent);
    },
  })),
  (vjs.CurrentTimeDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-current-time vjs-time-controls vjs-control",
    });
    return (
      (this.contentEl_ = vjs.createEl("div", {
        className: "vjs-current-time-display",
        innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
        "aria-live": "off",
      })),
      t.appendChild(this.contentEl_),
      t
    );
  }),
  (vjs.CurrentTimeDisplay.prototype.updateContent = function () {
    var t = this.player_.scrubbing
      ? this.player_.getCache().currentTime
      : this.player_.currentTime();
    this.contentEl_.innerHTML =
      '<span class="vjs-control-text">' +
      this.localize("Current Time") +
      "</span> " +
      vjs.formatTime(t, this.player_.duration());
  }),
  (vjs.DurationDisplay = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e),
        this.on(t, "timeupdate", this.updateContent),
        this.on(t, "loadedmetadata", this.updateContent);
    },
  })),
  (vjs.DurationDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-duration vjs-time-controls vjs-control",
    });
    return (
      (this.contentEl_ = vjs.createEl("div", {
        className: "vjs-duration-display",
        innerHTML:
          '<span class="vjs-control-text">' +
          this.localize("Duration Time") +
          "</span> 0:00",
        "aria-live": "off",
      })),
      t.appendChild(this.contentEl_),
      t
    );
  }),
  (vjs.DurationDisplay.prototype.updateContent = function () {
    var t = this.player_.duration();
    t &&
      (this.contentEl_.innerHTML =
        '<span class="vjs-control-text">' +
        this.localize("Duration Time") +
        "</span> " +
        vjs.formatTime(t));
  }),
  (vjs.TimeDivider = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e);
    },
  })),
  (vjs.TimeDivider.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-time-divider",
      innerHTML: "<div><span>/</span></div>",
    });
  }),
  (vjs.RemainingTimeDisplay = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e),
        this.on(t, "timeupdate", this.updateContent);
    },
  })),
  (vjs.RemainingTimeDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-remaining-time vjs-time-controls vjs-control",
    });
    return (
      (this.contentEl_ = vjs.createEl("div", {
        className: "vjs-remaining-time-display",
        innerHTML:
          '<span class="vjs-control-text">' +
          this.localize("Remaining Time") +
          "</span> -0:00",
        "aria-live": "off",
      })),
      t.appendChild(this.contentEl_),
      t
    );
  }),
  (vjs.RemainingTimeDisplay.prototype.updateContent = function () {
    this.player_.duration() &&
      (this.contentEl_.innerHTML =
        '<span class="vjs-control-text">' +
        this.localize("Remaining Time") +
        "</span> -" +
        vjs.formatTime(this.player_.remainingTime()));
  }),
  (vjs.FullscreenToggle = vjs.Button.extend({
    init: function (t, e) {
      vjs.Button.call(this, t, e);
    },
  })),
  (vjs.FullscreenToggle.prototype.buttonText = "Fullscreen"),
  (vjs.FullscreenToggle.prototype.buildCSSClass = function () {
    return (
      "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this)
    );
  }),
  (vjs.FullscreenToggle.prototype.onClick = function () {
    this.player_.isFullscreen()
      ? (this.player_.exitFullscreen(),
        (this.controlText_.innerHTML = this.localize("Fullscreen")))
      : (this.player_.requestFullscreen(),
        (this.controlText_.innerHTML = this.localize("Non-Fullscreen")));
  }),
  (vjs.ProgressControl = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e);
    },
  })),
  (vjs.ProgressControl.prototype.options_ = { children: { seekBar: {} } }),
  (vjs.ProgressControl.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-progress-control vjs-control",
    });
  }),
  (vjs.SeekBar = vjs.Slider.extend({
    init: function (t, e) {
      vjs.Slider.call(this, t, e),
        this.on(t, "timeupdate", this.updateARIAAttributes),
        t.ready(vjs.bind(this, this.updateARIAAttributes));
    },
  })),
  (vjs.SeekBar.prototype.options_ = {
    children: { loadProgressBar: {}, playProgressBar: {}, seekHandle: {} },
    barName: "playProgressBar",
    handleName: "seekHandle",
  }),
  (vjs.SeekBar.prototype.playerEvent = "timeupdate"),
  (vjs.SeekBar.prototype.createEl = function () {
    return vjs.Slider.prototype.createEl.call(this, "div", {
      className: "vjs-progress-holder",
      "aria-label": "video progress bar",
    });
  }),
  (vjs.SeekBar.prototype.updateARIAAttributes = function () {
    var t = this.player_.scrubbing
      ? this.player_.getCache().currentTime
      : this.player_.currentTime();
    this.el_.setAttribute(
      "aria-valuenow",
      vjs.round(100 * this.getPercent(), 2)
    ),
      this.el_.setAttribute(
        "aria-valuetext",
        vjs.formatTime(t, this.player_.duration())
      );
  }),
  (vjs.SeekBar.prototype.getPercent = function () {
    return this.player_.currentTime() / this.player_.duration();
  }),
  (vjs.SeekBar.prototype.onMouseDown = function (t) {
    vjs.Slider.prototype.onMouseDown.call(this, t),
      (this.player_.scrubbing = !0),
      this.player_.addClass("vjs-scrubbing"),
      (this.videoWasPlaying = !this.player_.paused()),
      this.player_.pause();
  }),
  (vjs.SeekBar.prototype.onMouseMove = function (t) {
    var e = this.calculateDistance(t) * this.player_.duration();
    e == this.player_.duration() && (e -= 0.1), this.player_.currentTime(e);
  }),
  (vjs.SeekBar.prototype.onMouseUp = function (t) {
    vjs.Slider.prototype.onMouseUp.call(this, t),
      (this.player_.scrubbing = !1),
      this.player_.removeClass("vjs-scrubbing"),
      this.videoWasPlaying && this.player_.play();
  }),
  (vjs.SeekBar.prototype.stepForward = function () {
    this.player_.currentTime(this.player_.currentTime() + 5);
  }),
  (vjs.SeekBar.prototype.stepBack = function () {
    this.player_.currentTime(this.player_.currentTime() - 5);
  }),
  (vjs.LoadProgressBar = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e), this.on(t, "progress", this.update);
    },
  })),
  (vjs.LoadProgressBar.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-load-progress",
      innerHTML:
        '<span class="vjs-control-text"><span>' +
        this.localize("Loaded") +
        "</span>: 0%</span>",
    });
  }),
  (vjs.LoadProgressBar.prototype.update = function () {
    var t,
      e,
      n,
      i,
      o = this.player_.buffered(),
      s = this.player_.duration(),
      r = this.player_.bufferedEnd(),
      a = this.el_.children,
      l = function (t, e) {
        return 100 * (t / e || 0) + "%";
      };
    for (this.el_.style.width = l(r, s), t = 0; t < o.length; t++)
      (e = o.start(t)),
        (n = o.end(t)),
        (i = a[t]) || (i = this.el_.appendChild(vjs.createEl())),
        (i.style.left = l(e, r)),
        (i.style.width = l(n - e, r));
    for (t = a.length; t > o.length; t--) this.el_.removeChild(a[t - 1]);
  }),
  (vjs.PlayProgressBar = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e);
    },
  })),
  (vjs.PlayProgressBar.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-play-progress",
      innerHTML:
        '<span class="vjs-control-text"><span>' +
        this.localize("Progress") +
        "</span>: 0%</span>",
    });
  }),
  (vjs.SeekHandle = vjs.SliderHandle.extend({
    init: function (t, e) {
      vjs.SliderHandle.call(this, t, e),
        this.on(t, "timeupdate", this.updateContent);
    },
  })),
  (vjs.SeekHandle.prototype.defaultValue = "00:00"),
  (vjs.SeekHandle.prototype.createEl = function () {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {
      className: "vjs-seek-handle",
      "aria-live": "off",
    });
  }),
  (vjs.SeekHandle.prototype.updateContent = function () {
    var t = this.player_.scrubbing
      ? this.player_.getCache().currentTime
      : this.player_.currentTime();
    this.el_.innerHTML =
      '<span class="vjs-control-text">' +
      vjs.formatTime(t, this.player_.duration()) +
      "</span>";
  }),
  (vjs.VolumeControl = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e),
        t.tech &&
          !1 === t.tech.featuresVolumeControl &&
          this.addClass("vjs-hidden"),
        this.on(t, "loadstart", function () {
          !1 === t.tech.featuresVolumeControl
            ? this.addClass("vjs-hidden")
            : this.removeClass("vjs-hidden");
        });
    },
  })),
  (vjs.VolumeControl.prototype.options_ = { children: { volumeBar: {} } }),
  (vjs.VolumeControl.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-volume-control vjs-control",
    });
  }),
  (vjs.VolumeBar = vjs.Slider.extend({
    init: function (t, e) {
      vjs.Slider.call(this, t, e),
        this.on(t, "volumechange", this.updateARIAAttributes),
        t.ready(vjs.bind(this, this.updateARIAAttributes));
    },
  })),
  (vjs.VolumeBar.prototype.updateARIAAttributes = function () {
    this.el_.setAttribute(
      "aria-valuenow",
      vjs.round(100 * this.player_.volume(), 2)
    ),
      this.el_.setAttribute(
        "aria-valuetext",
        vjs.round(100 * this.player_.volume(), 2) + "%"
      );
  }),
  (vjs.VolumeBar.prototype.options_ = {
    children: { volumeLevel: {}, volumeHandle: {} },
    barName: "volumeLevel",
    handleName: "volumeHandle",
  }),
  (vjs.VolumeBar.prototype.playerEvent = "volumechange"),
  (vjs.VolumeBar.prototype.createEl = function () {
    return vjs.Slider.prototype.createEl.call(this, "div", {
      className: "vjs-volume-bar",
      "aria-label": "volume level",
    });
  }),
  (vjs.VolumeBar.prototype.onMouseMove = function (t) {
    this.player_.muted() && this.player_.muted(!1),
      this.player_.volume(this.calculateDistance(t));
  }),
  (vjs.VolumeBar.prototype.getPercent = function () {
    return this.player_.muted() ? 0 : this.player_.volume();
  }),
  (vjs.VolumeBar.prototype.stepForward = function () {
    this.player_.volume(this.player_.volume() + 0.1);
  }),
  (vjs.VolumeBar.prototype.stepBack = function () {
    this.player_.volume(this.player_.volume() - 0.1);
  }),
  (vjs.VolumeLevel = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e);
    },
  })),
  (vjs.VolumeLevel.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-volume-level",
      innerHTML: '<span class="vjs-control-text"></span>',
    });
  }),
  (vjs.VolumeHandle = vjs.SliderHandle.extend()),
  (vjs.VolumeHandle.prototype.defaultValue = "00:00"),
  (vjs.VolumeHandle.prototype.createEl = function () {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {
      className: "vjs-volume-handle",
    });
  }),
  (vjs.MuteToggle = vjs.Button.extend({
    init: function (t, e) {
      vjs.Button.call(this, t, e),
        this.on(t, "volumechange", this.update),
        t.tech &&
          !1 === t.tech.featuresVolumeControl &&
          this.addClass("vjs-hidden"),
        this.on(t, "loadstart", function () {
          !1 === t.tech.featuresVolumeControl
            ? this.addClass("vjs-hidden")
            : this.removeClass("vjs-hidden");
        });
    },
  })),
  (vjs.MuteToggle.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {
      className: "vjs-mute-control vjs-control",
      innerHTML:
        '<div><span class="vjs-control-text">' +
        this.localize("Mute") +
        "</span></div>",
    });
  }),
  (vjs.MuteToggle.prototype.onClick = function () {
    this.player_.muted(!this.player_.muted());
  }),
  (vjs.MuteToggle.prototype.update = function () {
    var t = this.player_.volume(),
      e = 3;
    0 === t || this.player_.muted()
      ? (e = 0)
      : t < 0.33
      ? (e = 1)
      : t < 0.67 && (e = 2),
      this.player_.muted()
        ? this.el_.children[0].children[0].innerHTML !=
            this.localize("Unmute") &&
          (this.el_.children[0].children[0].innerHTML = this.localize("Unmute"))
        : this.el_.children[0].children[0].innerHTML != this.localize("Mute") &&
          (this.el_.children[0].children[0].innerHTML = this.localize("Mute"));
    for (var n = 0; n < 4; n++) vjs.removeClass(this.el_, "vjs-vol-" + n);
    vjs.addClass(this.el_, "vjs-vol-" + e);
  }),
  (vjs.VolumeMenuButton = vjs.MenuButton.extend({
    init: function (t, e) {
      vjs.MenuButton.call(this, t, e),
        this.on(t, "volumechange", this.volumeUpdate),
        t.tech &&
          !1 === t.tech.featuresVolumeControl &&
          this.addClass("vjs-hidden"),
        this.on(t, "loadstart", function () {
          !1 === t.tech.featuresVolumeControl
            ? this.addClass("vjs-hidden")
            : this.removeClass("vjs-hidden");
        }),
        this.addClass("vjs-menu-button");
    },
  })),
  (vjs.VolumeMenuButton.prototype.createMenu = function () {
    var t = new vjs.Menu(this.player_, { contentElType: "div" }),
      e = new vjs.VolumeBar(this.player_, this.options_.volumeBar);
    return (
      e.on("focus", function () {
        t.lockShowing();
      }),
      e.on("blur", function () {
        t.unlockShowing();
      }),
      t.addChild(e),
      t
    );
  }),
  (vjs.VolumeMenuButton.prototype.onClick = function () {
    vjs.MuteToggle.prototype.onClick.call(this),
      vjs.MenuButton.prototype.onClick.call(this);
  }),
  (vjs.VolumeMenuButton.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {
      className: "vjs-volume-menu-button vjs-menu-button vjs-control",
      innerHTML:
        '<div><span class="vjs-control-text">' +
        this.localize("Mute") +
        "</span></div>",
    });
  }),
  (vjs.VolumeMenuButton.prototype.volumeUpdate =
    vjs.MuteToggle.prototype.update),
  (vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
    init: function (t, e) {
      vjs.MenuButton.call(this, t, e),
        this.updateVisibility(),
        this.updateLabel(),
        this.on(t, "loadstart", this.updateVisibility),
        this.on(t, "ratechange", this.updateLabel);
    },
  })),
  (vjs.PlaybackRateMenuButton.prototype.buttonText = "Playback Rate"),
  (vjs.PlaybackRateMenuButton.prototype.className = "vjs-playback-rate"),
  (vjs.PlaybackRateMenuButton.prototype.createEl = function () {
    var t = vjs.MenuButton.prototype.createEl.call(this);
    return (
      (this.labelEl_ = vjs.createEl("div", {
        className: "vjs-playback-rate-value",
        innerHTML: 1,
      })),
      t.appendChild(this.labelEl_),
      t
    );
  }),
  (vjs.PlaybackRateMenuButton.prototype.createMenu = function () {
    var t = new vjs.Menu(this.player()),
      e = this.player().options().playbackRates;
    if (e)
      for (var n = e.length - 1; 0 <= n; n--)
        t.addChild(
          new vjs.PlaybackRateMenuItem(this.player(), { rate: e[n] + "x" })
        );
    return t;
  }),
  (vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function () {
    this.el().setAttribute("aria-valuenow", this.player().playbackRate());
  }),
  (vjs.PlaybackRateMenuButton.prototype.onClick = function () {
    for (
      var t = this.player().playbackRate(),
        e = this.player().options().playbackRates,
        n = e[0],
        i = 0;
      i < e.length;
      i++
    )
      if (e[i] > t) {
        n = e[i];
        break;
      }
    this.player().playbackRate(n);
  }),
  (vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function () {
    return (
      this.player().tech &&
      this.player().tech.featuresPlaybackRate &&
      this.player().options().playbackRates &&
      0 < this.player().options().playbackRates.length
    );
  }),
  (vjs.PlaybackRateMenuButton.prototype.updateVisibility = function () {
    this.playbackRateSupported()
      ? this.removeClass("vjs-hidden")
      : this.addClass("vjs-hidden");
  }),
  (vjs.PlaybackRateMenuButton.prototype.updateLabel = function () {
    this.playbackRateSupported() &&
      (this.labelEl_.innerHTML = this.player().playbackRate() + "x");
  }),
  (vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
    contentElType: "button",
    init: function (t, e) {
      var n = (this.label = e.rate),
        i = (this.rate = parseFloat(n, 10));
      (e.label = n),
        (e.selected = 1 === i),
        vjs.MenuItem.call(this, t, e),
        this.on(t, "ratechange", this.update);
    },
  })),
  (vjs.PlaybackRateMenuItem.prototype.onClick = function () {
    vjs.MenuItem.prototype.onClick.call(this),
      this.player().playbackRate(this.rate);
  }),
  (vjs.PlaybackRateMenuItem.prototype.update = function () {
    this.selected(this.player().playbackRate() == this.rate);
  }),
  (vjs.PosterImage = vjs.Button.extend({
    init: function (t, e) {
      vjs.Button.call(this, t, e),
        this.update(),
        t.on("posterchange", vjs.bind(this, this.update));
    },
  })),
  (vjs.PosterImage.prototype.dispose = function () {
    this.player().off("posterchange", this.update),
      vjs.Button.prototype.dispose.call(this);
  }),
  (vjs.PosterImage.prototype.createEl = function () {
    var t = vjs.createEl("div", { className: "vjs-poster", tabIndex: -1 });
    return (
      vjs.BACKGROUND_SIZE_SUPPORTED ||
        ((this.fallbackImg_ = vjs.createEl("img")),
        t.appendChild(this.fallbackImg_)),
      t
    );
  }),
  (vjs.PosterImage.prototype.update = function () {
    var t = this.player().poster();
    this.setSrc(t), t ? this.show() : this.hide();
  }),
  (vjs.PosterImage.prototype.setSrc = function (t) {
    var e;
    this.fallbackImg_
      ? (this.fallbackImg_.src = t)
      : ((e = ""),
        t && (e = 'url("' + t + '")'),
        (this.el_.style.backgroundImage = e));
  }),
  (vjs.PosterImage.prototype.onClick = function () {
    this.player_.play();
  }),
  (vjs.LoadingSpinner = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e);
    },
  })),
  (vjs.LoadingSpinner.prototype.createEl = function () {
    return vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-loading-spinner",
    });
  }),
  (vjs.BigPlayButton = vjs.Button.extend()),
  (vjs.BigPlayButton.prototype.createEl = function () {
    return vjs.Button.prototype.createEl.call(this, "div", {
      className: "vjs-big-play-button",
      innerHTML: '<span aria-hidden="true"></span>',
      "aria-label": "play video",
    });
  }),
  (vjs.BigPlayButton.prototype.onClick = function () {
    this.player_.play();
  }),
  (vjs.ErrorDisplay = vjs.Component.extend({
    init: function (t, e) {
      vjs.Component.call(this, t, e),
        this.update(),
        this.on(t, "error", this.update);
    },
  })),
  (vjs.ErrorDisplay.prototype.createEl = function () {
    var t = vjs.Component.prototype.createEl.call(this, "div", {
      className: "vjs-error-display",
    });
    return (
      (this.contentEl_ = vjs.createEl("div")), t.appendChild(this.contentEl_), t
    );
  }),
  (vjs.ErrorDisplay.prototype.update = function () {
    this.player().error() &&
      (this.contentEl_.innerHTML = this.localize(
        this.player().error().message
      ));
  }),
  (function () {
    var i;
    (vjs.MediaTechController = vjs.Component.extend({
      init: function (t, e, n) {
        ((e = e || {}).reportTouchActivity = !1),
          vjs.Component.call(this, t, e, n),
          this.featuresProgressEvents || this.manualProgressOn(),
          this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(),
          this.initControlsListeners(),
          this.featuresNativeTextTracks || this.emulateTextTracks(),
          this.initTextTrackListeners();
      },
    })),
      (vjs.MediaTechController.prototype.initControlsListeners = function () {
        var t, e;
        (t = this.player()),
          (e = function () {
            t.controls() &&
              !t.usingNativeControls() &&
              this.addControlsListeners();
          }),
          this.ready(e),
          this.on(t, "controlsenabled", e),
          this.on(t, "controlsdisabled", this.removeControlsListeners),
          this.ready(function () {
            this.networkState &&
              0 < this.networkState() &&
              this.player().trigger("loadstart");
          });
      }),
      (vjs.MediaTechController.prototype.addControlsListeners = function () {
        var t;
        this.on("mousedown", this.onClick),
          this.on("touchstart", function () {
            t = this.player_.userActive();
          }),
          this.on("touchmove", function () {
            t && this.player().reportUserActivity();
          }),
          this.on("touchend", function (t) {
            t.preventDefault();
          }),
          this.emitTapEvents(),
          this.on("tap", this.onTap);
      }),
      (vjs.MediaTechController.prototype.removeControlsListeners = function () {
        this.off("tap"),
          this.off("touchstart"),
          this.off("touchmove"),
          this.off("touchleave"),
          this.off("touchcancel"),
          this.off("touchend"),
          this.off("click"),
          this.off("mousedown");
      }),
      (vjs.MediaTechController.prototype.onClick = function (t) {
        0 === t.button &&
          this.player().controls() &&
          (this.player().paused()
            ? this.player().play()
            : this.player().pause());
      }),
      (vjs.MediaTechController.prototype.onTap = function () {
        this.player().userActive(!this.player().userActive());
      }),
      (vjs.MediaTechController.prototype.manualProgressOn = function () {
        (this.manualProgress = !0), this.trackProgress();
      }),
      (vjs.MediaTechController.prototype.manualProgressOff = function () {
        (this.manualProgress = !1), this.stopTrackingProgress();
      }),
      (vjs.MediaTechController.prototype.trackProgress = function () {
        this.progressInterval = this.setInterval(function () {
          var t = this.player().bufferedPercent();
          this.bufferedPercent_ != t && this.player().trigger("progress"),
            1 === (this.bufferedPercent_ = t) && this.stopTrackingProgress();
        }, 500);
      }),
      (vjs.MediaTechController.prototype.stopTrackingProgress = function () {
        this.clearInterval(this.progressInterval);
      }),
      (vjs.MediaTechController.prototype.manualTimeUpdatesOn = function () {
        var t = this.player_;
        (this.manualTimeUpdates = !0),
          this.on(t, "play", this.trackCurrentTime),
          this.on(t, "pause", this.stopTrackingCurrentTime),
          this.one("timeupdate", function () {
            (this.featuresTimeupdateEvents = !0), this.manualTimeUpdatesOff();
          });
      }),
      (vjs.MediaTechController.prototype.manualTimeUpdatesOff = function () {
        var t = this.player_;
        (this.manualTimeUpdates = !1),
          this.stopTrackingCurrentTime(),
          this.off(t, "play", this.trackCurrentTime),
          this.off(t, "pause", this.stopTrackingCurrentTime);
      }),
      (vjs.MediaTechController.prototype.trackCurrentTime = function () {
        this.currentTimeInterval && this.stopTrackingCurrentTime(),
          (this.currentTimeInterval = this.setInterval(function () {
            this.player().trigger("timeupdate");
          }, 250));
      }),
      (vjs.MediaTechController.prototype.stopTrackingCurrentTime = function () {
        this.clearInterval(this.currentTimeInterval),
          this.player().trigger("timeupdate");
      }),
      (vjs.MediaTechController.prototype.dispose = function () {
        this.manualProgress && this.manualProgressOff(),
          this.manualTimeUpdates && this.manualTimeUpdatesOff(),
          vjs.Component.prototype.dispose.call(this);
      }),
      (vjs.MediaTechController.prototype.setCurrentTime = function () {
        this.manualTimeUpdates && this.player().trigger("timeupdate");
      }),
      (vjs.MediaTechController.prototype.initTextTrackListeners = function () {
        var t,
          e = this.player_,
          n = function () {
            var t = e.getChild("textTrackDisplay");
            t && t.updateDisplay();
          };
        (t = this.textTracks()) &&
          (t.addEventListener("removetrack", n),
          t.addEventListener("addtrack", n),
          this.on(
            "dispose",
            vjs.bind(this, function () {
              t.removeEventListener("removetrack", n),
                t.removeEventListener("addtrack", n);
            })
          ));
      }),
      (vjs.MediaTechController.prototype.emulateTextTracks = function () {
        var t,
          e,
          n,
          i = this.player_;
        window.WebVTT ||
          (((n = document.createElement("script")).src =
            i.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js"),
          i.el().appendChild(n),
          (window.WebVTT = !0)),
          (e = this.textTracks()) &&
            ((t = function () {
              var t, e, n;
              for (
                (n = i.getChild("textTrackDisplay")).updateDisplay(), t = 0;
                t < this.length;
                t++
              )
                (e = this[t]).removeEventListener(
                  "cuechange",
                  vjs.bind(n, n.updateDisplay)
                ),
                  "showing" === e.mode &&
                    e.addEventListener(
                      "cuechange",
                      vjs.bind(n, n.updateDisplay)
                    );
            }),
            e.addEventListener("change", t),
            this.on(
              "dispose",
              vjs.bind(this, function () {
                e.removeEventListener("change", t);
              })
            ));
      }),
      vjs.MediaTechController.prototype.textTracks_,
      (vjs.MediaTechController.prototype.textTracks = function () {
        return (
          (this.player_.textTracks_ =
            this.player_.textTracks_ || new vjs.TextTrackList()),
          this.player_.textTracks_
        );
      }),
      (vjs.MediaTechController.prototype.remoteTextTracks = function () {
        return (
          (this.player_.remoteTextTracks_ =
            this.player_.remoteTextTracks_ || new vjs.TextTrackList()),
          this.player_.remoteTextTracks_
        );
      }),
      (i = function (t, e, n, i, o) {
        var s,
          r = t.textTracks();
        return (
          ((o = o || {}).kind = e),
          n && (o.label = n),
          i && (o.language = i),
          (o.player = t.player_),
          (s = new vjs.TextTrack(o)),
          r.addTrack_(s),
          s
        );
      }),
      (vjs.MediaTechController.prototype.addTextTrack = function (t, e, n) {
        if (!t)
          throw new Error("TextTrack kind is required but was not provided");
        return i(this, t, e, n);
      }),
      (vjs.MediaTechController.prototype.addRemoteTextTrack = function (t) {
        var e = i(this, t.kind, t.label, t.language, t);
        return this.remoteTextTracks().addTrack_(e), { track: e };
      }),
      (vjs.MediaTechController.prototype.removeRemoteTextTrack = function (t) {
        this.textTracks().removeTrack_(t),
          this.remoteTextTracks().removeTrack_(t);
      }),
      (vjs.MediaTechController.prototype.setPoster = function () {}),
      (vjs.MediaTechController.prototype.featuresVolumeControl = !0),
      (vjs.MediaTechController.prototype.featuresFullscreenResize = !1),
      (vjs.MediaTechController.prototype.featuresPlaybackRate = !1),
      (vjs.MediaTechController.prototype.featuresProgressEvents = !1),
      (vjs.MediaTechController.prototype.featuresTimeupdateEvents = !1),
      (vjs.MediaTechController.prototype.featuresNativeTextTracks = !1),
      (vjs.MediaTechController.withSourceHandlers = function (i) {
        (i.registerSourceHandler = function (t, e) {
          var n = i.sourceHandlers;
          n || (n = i.sourceHandlers = []),
            e === undefined && (e = n.length),
            n.splice(e, 0, t);
        }),
          (i.selectSourceHandler = function (t) {
            for (var e = i.sourceHandlers || [], n = 0; n < e.length; n++)
              if (e[n].canHandleSource(t)) return e[n];
            return null;
          }),
          (i.canPlaySource = function (t) {
            var e = i.selectSourceHandler(t);
            return e ? e.canHandleSource(t) : "";
          }),
          (i.prototype.setSource = function (t) {
            var e = i.selectSourceHandler(t);
            return (
              e ||
                (i.nativeSourceHandler
                  ? (e = i.nativeSourceHandler)
                  : vjs.log.error(
                      "No source hander found for the current source."
                    )),
              this.disposeSourceHandler(),
              this.off("dispose", this.disposeSourceHandler),
              (this.currentSource_ = t),
              (this.sourceHandler_ = e.handleSource(t, this)),
              this.on("dispose", this.disposeSourceHandler),
              this
            );
          }),
          (i.prototype.disposeSourceHandler = function () {
            this.sourceHandler_ &&
              this.sourceHandler_.dispose &&
              this.sourceHandler_.dispose();
          });
      }),
      (vjs.media = {});
  })(),
  (vjs.Html5 = vjs.MediaTechController.extend({
    init: function (t, e, n) {
      var i, o, s, r, a;
      (!1 !== e.nativeCaptions && !1 !== e.nativeTextTracks) ||
        (this.featuresNativeTextTracks = !1),
        vjs.MediaTechController.call(this, t, e, n),
        this.setupTriggers();
      var l = e.source;
      if (
        (l &&
          (this.el_.currentSrc !== l.src ||
            (t.tag && 3 === t.tag.initNetworkState_)) &&
          this.setSource(l),
        this.el_.hasChildNodes())
      ) {
        for (o = (i = this.el_.childNodes).length, a = []; o--; )
          "track" === (r = i[o]).nodeName.toLowerCase() &&
            (this.featuresNativeTextTracks
              ? this.remoteTextTracks().addTrack_(r.track)
              : a.push(r));
        for (s = 0; s < a.length; s++) this.el_.removeChild(a[s]);
      }
      vjs.TOUCH_ENABLED &&
        !0 === t.options().nativeControlsForTouch &&
        this.useNativeControls(),
        t.ready(function () {
          this.src() &&
            this.tag &&
            this.options_.autoplay &&
            this.paused() &&
            (delete this.tag.poster, this.play());
        }),
        this.triggerReady();
    },
  })),
  (vjs.Html5.prototype.dispose = function () {
    vjs.Html5.disposeMediaElement(this.el_),
      vjs.MediaTechController.prototype.dispose.call(this);
  }),
  (vjs.Html5.prototype.createEl = function () {
    var t,
      e,
      n,
      i,
      o,
      s = this.player_,
      r = s.tag;
    if (!r || !1 === this.movingMediaElementInDOM) {
      if (
        (r
          ? ((o = r.cloneNode(!1)),
            vjs.Html5.disposeMediaElement(r),
            (r = o),
            (s.tag = null))
          : ((r = vjs.createEl("video")),
            (i = videojs.util.mergeOptions({}, s.tagAttributes)),
            (vjs.TOUCH_ENABLED && !0 === s.options().nativeControlsForTouch) ||
              delete i.controls,
            vjs.setElementAttributes(
              r,
              vjs.obj.merge(i, { id: s.id() + "_html5_api", class: "vjs-tech" })
            )),
        (r.player = s).options_.tracks)
      )
        for (n = 0; n < s.options_.tracks.length; n++)
          (t = s.options_.tracks[n]),
            ((e = document.createElement("track")).kind = t.kind),
            (e.label = t.label),
            (e.srclang = t.srclang),
            (e.src = t.src),
            "default" in t && e.setAttribute("default", "default"),
            r.appendChild(e);
      vjs.insertFirst(r, s.el());
    }
    var a = ["autoplay", "preload", "loop", "muted"];
    for (n = a.length - 1; 0 <= n; n--) {
      var l = a[n],
        c = {};
      "undefined" != typeof s.options_[l] && (c[l] = s.options_[l]),
        vjs.setElementAttributes(r, c);
    }
    return r;
  }),
  (vjs.Html5.prototype.setupTriggers = function () {
    for (var t = vjs.Html5.Events.length - 1; 0 <= t; t--)
      this.on(vjs.Html5.Events[t], this.eventHandler);
  }),
  (vjs.Html5.prototype.eventHandler = function (t) {
    "error" == t.type && this.error()
      ? this.player().error(this.error().code)
      : ((t.bubbles = !1), this.player().trigger(t));
  }),
  (vjs.Html5.prototype.useNativeControls = function () {
    var t, e, n, i, o;
    (e = (t = this).player()),
      t.setControls(e.controls()),
      (n = function () {
        t.setControls(!0);
      }),
      (i = function () {
        t.setControls(!1);
      }),
      e.on("controlsenabled", n),
      e.on("controlsdisabled", i),
      (o = function () {
        e.off("controlsenabled", n), e.off("controlsdisabled", i);
      }),
      t.on("dispose", o),
      e.on("usingcustomcontrols", o),
      e.usingNativeControls(!0);
  }),
  (vjs.Html5.prototype.play = function () {
    this.el_.play();
  }),
  (vjs.Html5.prototype.pause = function () {
    this.el_.pause();
  }),
  (vjs.Html5.prototype.paused = function () {
    return this.el_.paused;
  }),
  (vjs.Html5.prototype.currentTime = function () {
    return this.el_.currentTime;
  }),
  (vjs.Html5.prototype.setCurrentTime = function (t) {
    try {
      this.el_.currentTime = t;
    } catch (e) {
      vjs.log(e, "Video is not ready. (Video.js)");
    }
  }),
  (vjs.Html5.prototype.duration = function () {
    return this.el_.duration || 0;
  }),
  (vjs.Html5.prototype.buffered = function () {
    return this.el_.buffered;
  }),
  (vjs.Html5.prototype.volume = function () {
    return this.el_.volume;
  }),
  (vjs.Html5.prototype.setVolume = function (t) {
    this.el_.volume = t;
  }),
  (vjs.Html5.prototype.muted = function () {
    return this.el_.muted;
  }),
  (vjs.Html5.prototype.setMuted = function (t) {
    this.el_.muted = t;
  }),
  (vjs.Html5.prototype.width = function () {
    return this.el_.offsetWidth;
  }),
  (vjs.Html5.prototype.height = function () {
    return this.el_.offsetHeight;
  }),
  (vjs.Html5.prototype.supportsFullScreen = function () {
    return !(
      "function" != typeof this.el_.webkitEnterFullScreen ||
      (!/Android/.test(vjs.USER_AGENT) &&
        /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT))
    );
  }),
  (vjs.Html5.prototype.enterFullScreen = function () {
    var t = this.el_;
    "webkitDisplayingFullscreen" in t &&
      this.one("webkitbeginfullscreen", function () {
        this.player_.isFullscreen(!0),
          this.one("webkitendfullscreen", function () {
            this.player_.isFullscreen(!1),
              this.player_.trigger("fullscreenchange");
          }),
          this.player_.trigger("fullscreenchange");
      }),
      t.paused && t.networkState <= t.HAVE_METADATA
        ? (this.el_.play(),
          this.setTimeout(function () {
            t.pause(), t.webkitEnterFullScreen();
          }, 0))
        : t.webkitEnterFullScreen();
  }),
  (vjs.Html5.prototype.exitFullScreen = function () {
    this.el_.webkitExitFullScreen();
  }),
  (vjs.Html5.prototype.returnOriginalIfBlobURI_ = function (t, e) {
    return e && t && /^blob\:/i.test(t) ? e : t;
  }),
  (vjs.Html5.prototype.src = function (t) {
    var e = this.el_.src;
    if (t === undefined) return this.returnOriginalIfBlobURI_(e, this.source_);
    this.setSrc(t);
  }),
  (vjs.Html5.prototype.setSrc = function (t) {
    this.el_.src = t;
  }),
  (vjs.Html5.prototype.load = function () {
    this.el_.load();
  }),
  (vjs.Html5.prototype.currentSrc = function () {
    var t = this.el_.currentSrc;
    return this.currentSource_
      ? this.returnOriginalIfBlobURI_(t, this.currentSource_.src)
      : t;
  }),
  (vjs.Html5.prototype.poster = function () {
    return this.el_.poster;
  }),
  (vjs.Html5.prototype.setPoster = function (t) {
    this.el_.poster = t;
  }),
  (vjs.Html5.prototype.preload = function () {
    return this.el_.preload;
  }),
  (vjs.Html5.prototype.setPreload = function (t) {
    this.el_.preload = t;
  }),
  (vjs.Html5.prototype.autoplay = function () {
    return this.el_.autoplay;
  }),
  (vjs.Html5.prototype.setAutoplay = function (t) {
    this.el_.autoplay = t;
  }),
  (vjs.Html5.prototype.controls = function () {
    return this.el_.controls;
  }),
  (vjs.Html5.prototype.setControls = function (t) {
    this.el_.controls = !!t;
  }),
  (vjs.Html5.prototype.loop = function () {
    return this.el_.loop;
  }),
  (vjs.Html5.prototype.setLoop = function (t) {
    this.el_.loop = t;
  }),
  (vjs.Html5.prototype.error = function () {
    return this.el_.error;
  }),
  (vjs.Html5.prototype.seeking = function () {
    return this.el_.seeking;
  }),
  (vjs.Html5.prototype.seekable = function () {
    return this.el_.seekable;
  }),
  (vjs.Html5.prototype.ended = function () {
    return this.el_.ended;
  }),
  (vjs.Html5.prototype.defaultMuted = function () {
    return this.el_.defaultMuted;
  }),
  (vjs.Html5.prototype.playbackRate = function () {
    return this.el_.playbackRate;
  }),
  (vjs.Html5.prototype.setPlaybackRate = function (t) {
    this.el_.playbackRate = t;
  }),
  (vjs.Html5.prototype.networkState = function () {
    return this.el_.networkState;
  }),
  (vjs.Html5.prototype.readyState = function () {
    return this.el_.readyState;
  }),
  (vjs.Html5.prototype.textTracks = function () {
    return this.featuresNativeTextTracks
      ? this.el_.textTracks
      : vjs.MediaTechController.prototype.textTracks.call(this);
  }),
  (vjs.Html5.prototype.addTextTrack = function (t, e, n) {
    return this.featuresNativeTextTracks
      ? this.el_.addTextTrack(t, e, n)
      : vjs.MediaTechController.prototype.addTextTrack.call(this, t, e, n);
  }),
  (vjs.Html5.prototype.addRemoteTextTrack = function (t) {
    if (!this.featuresNativeTextTracks)
      return vjs.MediaTechController.prototype.addRemoteTextTrack.call(this, t);
    var e = document.createElement("track");
    return (
      (t = t || {}).kind && (e.kind = t.kind),
      t.label && (e.label = t.label),
      (t.language || t.srclang) && (e.srclang = t.language || t.srclang),
      t["default"] && (e["default"] = t["default"]),
      t.id && (e.id = t.id),
      t.src && (e.src = t.src),
      this.el().appendChild(e),
      this.remoteTextTracks().addTrack_(e.track),
      e
    );
  }),
  (vjs.Html5.prototype.removeRemoteTextTrack = function (t) {
    if (!this.featuresNativeTextTracks)
      return vjs.MediaTechController.prototype.removeRemoteTextTrack.call(
        this,
        t
      );
    var e, n;
    for (
      this.remoteTextTracks().removeTrack_(t),
        e = this.el().querySelectorAll("track"),
        n = 0;
      n < e.length;
      n++
    )
      if (e[n] === t || e[n].track === t) {
        e[n].parentNode.removeChild(e[n]);
        break;
      }
  }),
  (vjs.Html5.isSupported = function () {
    try {
      vjs.TEST_VID.volume = 0.5;
    } catch (t) {
      return !1;
    }
    return !!vjs.TEST_VID.canPlayType;
  }),
  vjs.MediaTechController.withSourceHandlers(vjs.Html5),
  (function () {
    var n = vjs.Html5.prototype.setSource,
      t = vjs.Html5.prototype.disposeSourceHandler;
    (vjs.Html5.prototype.setSource = function (t) {
      var e = n.call(this, t);
      return (this.source_ = t.src), e;
    }),
      (vjs.Html5.prototype.disposeSourceHandler = function () {
        return (this.source_ = undefined), t.call(this);
      });
  })(),
  (vjs.Html5.nativeSourceHandler = {}),
  (vjs.Html5.nativeSourceHandler.canHandleSource = function (t) {
    function e(t) {
      try {
        return vjs.TEST_VID.canPlayType(t);
      } catch (e) {
        return "";
      }
    }
    var n;
    return t.type
      ? e(t.type)
      : t.src
      ? e("video/" + ((n = t.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && n[1]))
      : "";
  }),
  (vjs.Html5.nativeSourceHandler.handleSource = function (t, e) {
    e.setSrc(t.src);
  }),
  (vjs.Html5.nativeSourceHandler.dispose = function () {}),
  vjs.Html5.registerSourceHandler(vjs.Html5.nativeSourceHandler),
  (vjs.Html5.canControlVolume = function () {
    var t = vjs.TEST_VID.volume;
    return (vjs.TEST_VID.volume = t / 2 + 0.1), t !== vjs.TEST_VID.volume;
  }),
  (vjs.Html5.canControlPlaybackRate = function () {
    var t = vjs.TEST_VID.playbackRate;
    return (
      (vjs.TEST_VID.playbackRate = t / 2 + 0.1), t !== vjs.TEST_VID.playbackRate
    );
  }),
  (vjs.Html5.supportsNativeTextTracks = function () {
    var t;
    return (
      (t = !!vjs.TEST_VID.textTracks) &&
        0 < vjs.TEST_VID.textTracks.length &&
        (t = "number" != typeof vjs.TEST_VID.textTracks[0].mode),
      t && vjs.IS_FIREFOX && (t = !1),
      t
    );
  }),
  (vjs.Html5.prototype.featuresVolumeControl = vjs.Html5.canControlVolume()),
  (vjs.Html5.prototype.featuresPlaybackRate =
    vjs.Html5.canControlPlaybackRate()),
  (vjs.Html5.prototype.movingMediaElementInDOM = !vjs.IS_IOS),
  (vjs.Html5.prototype.featuresFullscreenResize = !0),
  (vjs.Html5.prototype.featuresProgressEvents = !0),
  (vjs.Html5.prototype.featuresNativeTextTracks =
    vjs.Html5.supportsNativeTextTracks()),
  (function () {
    var e,
      n = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
      i = /^video\/mp4/i;
    (vjs.Html5.patchCanPlayType = function () {
      4 <= vjs.ANDROID_VERSION &&
        (e || (e = vjs.TEST_VID.constructor.prototype.canPlayType),
        (vjs.TEST_VID.constructor.prototype.canPlayType = function (t) {
          return t && n.test(t) ? "maybe" : e.call(this, t);
        })),
        vjs.IS_OLD_ANDROID &&
          (e || (e = vjs.TEST_VID.constructor.prototype.canPlayType),
          (vjs.TEST_VID.constructor.prototype.canPlayType = function (t) {
            return t && i.test(t) ? "maybe" : e.call(this, t);
          }));
    }),
      (vjs.Html5.unpatchCanPlayType = function () {
        var t = vjs.TEST_VID.constructor.prototype.canPlayType;
        return (
          (vjs.TEST_VID.constructor.prototype.canPlayType = e), (e = null), t
        );
      }),
      vjs.Html5.patchCanPlayType();
  })(),
  (vjs.Html5.Events =
    "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(
      ","
    )),
  (vjs.Html5.disposeMediaElement = function (e) {
    if (e) {
      for (
        e.player = null, e.parentNode && e.parentNode.removeChild(e);
        e.hasChildNodes();

      )
        e.removeChild(e.firstChild);
      e.removeAttribute("src"),
        "function" == typeof e.load &&
          (function () {
            try {
              e.load();
            } catch (t) {}
          })();
    }
  }),
  (vjs.Flash = vjs.MediaTechController.extend({
    init: function (t, e, n) {
      vjs.MediaTechController.call(this, t, e, n);
      var i = e.source,
        o = t.id() + "_flash_api",
        s = t.options_,
        r = vjs.obj.merge(
          {
            readyFunction: "videojs.Flash.onReady",
            eventProxyFunction: "videojs.Flash.onEvent",
            errorEventProxyFunction: "videojs.Flash.onError",
            autoplay: s.autoplay,
            preload: s.preload,
            loop: s.loop,
            muted: s.muted,
          },
          e.flashVars
        ),
        a = vjs.obj.merge({ wmode: "opaque", bgcolor: "#000000" }, e.params),
        l = vjs.obj.merge({ id: o, name: o, class: "vjs-tech" }, e.attributes);
      i &&
        this.ready(function () {
          this.setSource(i);
        }),
        vjs.insertFirst(this.el_, e.parentEl),
        e.startTime &&
          this.ready(function () {
            this.load(), this.play(), this.currentTime(e.startTime);
          }),
        vjs.IS_FIREFOX &&
          this.ready(function () {
            this.on("mousemove", function () {
              this.player().trigger({ type: "mousemove", bubbles: !1 });
            });
          }),
        t.on("stageclick", t.reportUserActivity),
        (this.el_ = vjs.Flash.embed(e.swf, this.el_, r, a, l));
    },
  })),
  (vjs.Flash.prototype.dispose = function () {
    vjs.MediaTechController.prototype.dispose.call(this);
  }),
  (vjs.Flash.prototype.play = function () {
    this.ended() && this.setCurrentTime(0), this.el_.vjs_play();
  }),
  (vjs.Flash.prototype.pause = function () {
    this.el_.vjs_pause();
  }),
  (vjs.Flash.prototype.src = function (t) {
    return t === undefined ? this.currentSrc() : this.setSrc(t);
  }),
  (vjs.Flash.prototype.setSrc = function (t) {
    if (
      ((t = vjs.getAbsoluteURL(t)),
      this.el_.vjs_src(t),
      this.player_.autoplay())
    ) {
      var e = this;
      this.setTimeout(function () {
        e.play();
      }, 0);
    }
  }),
  (vjs.Flash.prototype.setCurrentTime = function (t) {
    (this.lastSeekTarget_ = t),
      this.el_.vjs_setProperty("currentTime", t),
      vjs.MediaTechController.prototype.setCurrentTime.call(this);
  }),
  (vjs.Flash.prototype.currentTime = function () {
    return this.seeking()
      ? this.lastSeekTarget_ || 0
      : this.el_.vjs_getProperty("currentTime");
  }),
  (vjs.Flash.prototype.currentSrc = function () {
    return this.currentSource_
      ? this.currentSource_.src
      : this.el_.vjs_getProperty("currentSrc");
  }),
  (vjs.Flash.prototype.load = function () {
    this.el_.vjs_load();
  }),
  (vjs.Flash.prototype.poster = function () {
    this.el_.vjs_getProperty("poster");
  }),
  (vjs.Flash.prototype.setPoster = function () {}),
  (vjs.Flash.prototype.seekable = function () {
    return 0 === this.duration()
      ? vjs.createTimeRange()
      : vjs.createTimeRange(0, this.duration());
  }),
  (vjs.Flash.prototype.buffered = function () {
    return this.el_.vjs_getProperty
      ? vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"))
      : vjs.createTimeRange();
  }),
  (vjs.Flash.prototype.duration = function () {
    return this.el_.vjs_getProperty ? this.el_.vjs_getProperty("duration") : 0;
  }),
  (vjs.Flash.prototype.supportsFullScreen = function () {
    return !1;
  }),
  (vjs.Flash.prototype.enterFullScreen = function () {
    return !1;
  }),
  (function () {
    function t(e) {
      var t = e.charAt(0).toUpperCase() + e.slice(1);
      i["set" + t] = function (t) {
        return this.el_.vjs_setProperty(e, t);
      };
    }
    function e(t) {
      i[t] = function () {
        return this.el_.vjs_getProperty(t);
      };
    }
    var n,
      i = vjs.Flash.prototype,
      o =
        "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(
          ","
        ),
      s =
        "error,networkState,readyState,seeking,initialTime,startOffsetTime,paused,played,ended,videoTracks,audioTracks,videoWidth,videoHeight".split(
          ","
        );
    for (n = 0; n < o.length; n++) e(o[n]), t(o[n]);
    for (n = 0; n < s.length; n++) e(s[n]);
  })(),
  (vjs.Flash.isSupported = function () {
    return 10 <= vjs.Flash.version()[0];
  }),
  vjs.MediaTechController.withSourceHandlers(vjs.Flash),
  (vjs.Flash.nativeSourceHandler = {}),
  (vjs.Flash.nativeSourceHandler.canHandleSource = function (t) {
    return t.type &&
      t.type.replace(/;.*/, "").toLowerCase() in vjs.Flash.formats
      ? "maybe"
      : "";
  }),
  (vjs.Flash.nativeSourceHandler.handleSource = function (t, e) {
    e.setSrc(t.src);
  }),
  (vjs.Flash.nativeSourceHandler.dispose = function () {}),
  vjs.Flash.registerSourceHandler(vjs.Flash.nativeSourceHandler),
  (vjs.Flash.formats = {
    "video/flv": "FLV",
    "video/x-flv": "FLV",
    "video/mp4": "MP4",
    "video/m4v": "MP4",
  }),
  (vjs.Flash.onReady = function (t) {
    var e, n;
    (n = (e = vjs.el(t)) && e.parentNode && e.parentNode.player) &&
      ((e.player = n), vjs.Flash.checkReady(n.tech));
  }),
  (vjs.Flash.checkReady = function (t) {
    t.el() &&
      (t.el().vjs_getProperty
        ? t.triggerReady()
        : this.setTimeout(function () {
            vjs.Flash.checkReady(t);
          }, 50));
  }),
  (vjs.Flash.onEvent = function (t, e) {
    vjs.el(t).player.trigger(e);
  }),
  (vjs.Flash.onError = function (t, e) {
    var n = vjs.el(t).player,
      i = "FLASH: " + e;
    "srcnotfound" == e ? n.error({ code: 4, message: i }) : n.error(i);
  }),
  (vjs.Flash.version = function () {
    var t = "0,0,0";
    try {
      t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        .GetVariable("$version")
        .replace(/\D+/g, ",")
        .match(/^,?(.+),?$/)[1];
    } catch (e) {
      try {
        navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin &&
          (t = (
            navigator.plugins["Shockwave Flash 2.0"] ||
            navigator.plugins["Shockwave Flash"]
          ).description
            .replace(/\D+/g, ",")
            .match(/^,?(.+),?$/)[1]);
      } catch (n) {}
    }
    return t.split(",");
  }),
  (vjs.Flash.embed = function (t, e, n, i, o) {
    var s = vjs.Flash.getEmbedCode(t, n, i, o),
      r = vjs.createEl("div", { innerHTML: s }).childNodes[0],
      a = e.parentNode;
    e.parentNode.replaceChild(r, e), (r[vjs.expando] = e[vjs.expando]);
    var l = a.childNodes[0];
    return (
      setTimeout(function () {
        l.style.display = "block";
      }, 1e3),
      r
    );
  }),
  (vjs.Flash.getEmbedCode = function (t, e, n, i) {
    var o = '<object type="application/x-shockwave-flash" ',
      s = "",
      r = "",
      a = "";
    return (
      e &&
        vjs.obj.each(e, function (t, e) {
          s += t + "=" + e + "&amp;";
        }),
      (n = vjs.obj.merge(
        {
          movie: t,
          flashvars: s,
          allowScriptAccess: "always",
          allowNetworking: "all",
        },
        n
      )),
      vjs.obj.each(n, function (t, e) {
        r += '<param name="' + t + '" value="' + e + '" />';
      }),
      (i = vjs.obj.merge({ data: t, width: "100%", height: "100%" }, i)),
      vjs.obj.each(i, function (t, e) {
        a += t + '="' + e + '" ';
      }),
      o + a + ">" + r + "</object>"
    );
  }),
  (vjs.Flash.streamingFormats = { "rtmp/mp4": "MP4", "rtmp/flv": "FLV" }),
  (vjs.Flash.streamFromParts = function (t, e) {
    return t + "&" + e;
  }),
  (vjs.Flash.streamToParts = function (t) {
    var e = { connection: "", stream: "" };
    if (!t) return e;
    var n,
      i = t.indexOf("&");
    return (
      -1 !== i
        ? (n = i + 1)
        : 0 === (i = n = t.lastIndexOf("/") + 1) && (i = n = t.length),
      (e.connection = t.substring(0, i)),
      (e.stream = t.substring(n, t.length)),
      e
    );
  }),
  (vjs.Flash.isStreamingType = function (t) {
    return t in vjs.Flash.streamingFormats;
  }),
  (vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i),
  (vjs.Flash.isStreamingSrc = function (t) {
    return vjs.Flash.RTMP_RE.test(t);
  }),
  (vjs.Flash.rtmpSourceHandler = {}),
  (vjs.Flash.rtmpSourceHandler.canHandleSource = function (t) {
    return vjs.Flash.isStreamingType(t.type) || vjs.Flash.isStreamingSrc(t.src)
      ? "maybe"
      : "";
  }),
  (vjs.Flash.rtmpSourceHandler.handleSource = function (t, e) {
    var n = vjs.Flash.streamToParts(t.src);
    e.setRtmpConnection(n.connection), e.setRtmpStream(n.stream);
  }),
  vjs.Flash.registerSourceHandler(vjs.Flash.rtmpSourceHandler),
  (vjs.MediaLoader = vjs.Component.extend({
    init: function (t, e, n) {
      if (
        (vjs.Component.call(this, t, e, n),
        t.options_.sources && 0 !== t.options_.sources.length)
      )
        t.src(t.options_.sources);
      else
        for (var i = 0, o = t.options_.techOrder; i < o.length; i++) {
          var s = vjs.capitalize(o[i]),
            r = window.videojs[s];
          if (r && r.isSupported()) {
            t.loadTech(s);
            break;
          }
        }
    },
  })),
  (vjs.TextTrackMode = {
    disabled: "disabled",
    hidden: "hidden",
    showing: "showing",
  }),
  (vjs.TextTrackKind = {
    subtitles: "subtitles",
    captions: "captions",
    descriptions: "descriptions",
    chapters: "chapters",
    metadata: "metadata",
  }),
  (function () {
    var p, o, h;
    (vjs.TextTrack = function (t) {
      var e, n, i, o, s, r, a, l, c, u, d;
      if (!(t = t || {}).player) throw new Error("A player was not provided.");
      if (((e = this), vjs.IS_IE8))
        for (d in ((e = document.createElement("custom")),
        vjs.TextTrack.prototype))
          e[d] = vjs.TextTrack.prototype[d];
      if (
        ((e.player_ = t.player),
        (i = vjs.TextTrackMode[t.mode] || "disabled"),
        (o = vjs.TextTrackKind[t.kind] || "subtitles"),
        (s = t.label || ""),
        (r = t.language || t.srclang || ""),
        (n = t.id || "vjs_text_track_" + vjs.guid++),
        ("metadata" !== o && "chapters" !== o) || (i = "hidden"),
        (e.cues_ = []),
        (e.activeCues_ = []),
        (a = new vjs.TextTrackCueList(e.cues_)),
        (l = new vjs.TextTrackCueList(e.activeCues_)),
        (u = !1),
        (c = vjs.bind(e, function () {
          this.activeCues, u && (this.trigger("cuechange"), (u = !1));
        })),
        "disabled" !== i && e.player_.on("timeupdate", c),
        Object.defineProperty(e, "kind", {
          get: function () {
            return o;
          },
          set: Function.prototype,
        }),
        Object.defineProperty(e, "label", {
          get: function () {
            return s;
          },
          set: Function.prototype,
        }),
        Object.defineProperty(e, "language", {
          get: function () {
            return r;
          },
          set: Function.prototype,
        }),
        Object.defineProperty(e, "id", {
          get: function () {
            return n;
          },
          set: Function.prototype,
        }),
        Object.defineProperty(e, "mode", {
          get: function () {
            return i;
          },
          set: function (t) {
            vjs.TextTrackMode[t] &&
              ("showing" === (i = t) && this.player_.on("timeupdate", c),
              this.trigger("modechange"));
          },
        }),
        Object.defineProperty(e, "cues", {
          get: function () {
            return this.loaded_ ? a : null;
          },
          set: Function.prototype,
        }),
        Object.defineProperty(e, "activeCues", {
          get: function () {
            var t, e, n, i, o;
            if (!this.loaded_) return null;
            if (0 === this.cues.length) return l;
            for (
              i = this.player_.currentTime(),
                t = 0,
                e = this.cues.length,
                n = [];
              t < e;
              t++
            )
              (o = this.cues[t]).startTime <= i && o.endTime >= i
                ? n.push(o)
                : o.startTime === o.endTime &&
                  o.startTime <= i &&
                  o.startTime + 0.5 >= i &&
                  n.push(o);
            if (((u = !1), n.length !== this.activeCues_.length)) u = !0;
            else
              for (t = 0; t < n.length; t++)
                -1 === h.call(this.activeCues_, n[t]) && (u = !0);
            return (this.activeCues_ = n), l.setCues_(this.activeCues_), l;
          },
          set: Function.prototype,
        }),
        t.src ? p(t.src, e) : (e.loaded_ = !0),
        vjs.IS_IE8)
      )
        return e;
    }),
      (vjs.TextTrack.prototype = vjs.obj.create(vjs.EventEmitter.prototype)),
      (vjs.TextTrack.prototype.constructor = vjs.TextTrack),
      (vjs.TextTrack.prototype.allowedEvents_ = { cuechange: "cuechange" }),
      (vjs.TextTrack.prototype.addCue = function (t) {
        var e = this.player_.textTracks(),
          n = 0;
        if (e) for (; n < e.length; n++) e[n] !== this && e[n].removeCue(t);
        this.cues_.push(t), this.cues.setCues_(this.cues_);
      }),
      (vjs.TextTrack.prototype.removeCue = function (t) {
        for (var e = 0, n = this.cues_.length, i = !1; e < n; e++)
          this.cues_[e] === t && (this.cues_.splice(e, 1), (i = !0));
        i && this.cues.setCues_(this.cues_);
      }),
      (p = function (t, i) {
        vjs.xhr(
          t,
          vjs.bind(this, function (t, e, n) {
            if (t) return vjs.log.error(t);
            (i.loaded_ = !0), o(n, i);
          })
        );
      }),
      (o = function (t, e) {
        if ("function" != typeof window.WebVTT)
          return window.setTimeout(function () {
            o(t, e);
          }, 25);
        var n = new window.WebVTT.Parser(
          window,
          window.vttjs,
          window.WebVTT.StringDecoder()
        );
        (n.oncue = function (t) {
          e.addCue(t);
        }),
          (n.onparsingerror = function (t) {
            vjs.log.error(t);
          }),
          n.parse(t),
          n.flush();
      }),
      (h = function (t, e) {
        var n;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var i = Object(this),
          o = i.length >>> 0;
        if (0 === o) return -1;
        var s = +e || 0;
        if ((Math.abs(s) === Infinity && (s = 0), o <= s)) return -1;
        for (n = Math.max(0 <= s ? s : o - Math.abs(s), 0); n < o; ) {
          if (n in i && i[n] === t) return n;
          n++;
        }
        return -1;
      });
  })(),
  (vjs.TextTrackList = function (t) {
    var e,
      n = this,
      i = 0;
    if (vjs.IS_IE8)
      for (e in ((n = document.createElement("custom")),
      vjs.TextTrackList.prototype))
        n[e] = vjs.TextTrackList.prototype[e];
    for (
      t = t || [],
        n.tracks_ = [],
        Object.defineProperty(n, "length", {
          get: function () {
            return this.tracks_.length;
          },
        });
      i < t.length;
      i++
    )
      n.addTrack_(t[i]);
    if (vjs.IS_IE8) return n;
  }),
  (vjs.TextTrackList.prototype = vjs.obj.create(vjs.EventEmitter.prototype)),
  (vjs.TextTrackList.prototype.constructor = vjs.TextTrackList),
  (vjs.TextTrackList.prototype.allowedEvents_ = {
    change: "change",
    addtrack: "addtrack",
    removetrack: "removetrack",
  }),
  (function () {
    var t;
    for (t in vjs.TextTrackList.prototype.allowedEvents_)
      vjs.TextTrackList.prototype["on" + t] = null;
  })(),
  (vjs.TextTrackList.prototype.addTrack_ = function (t) {
    var e = this.tracks_.length;
    "" + e in this ||
      Object.defineProperty(this, e, {
        get: function () {
          return this.tracks_[e];
        },
      }),
      t.addEventListener(
        "modechange",
        vjs.bind(this, function () {
          this.trigger("change");
        })
      ),
      this.tracks_.push(t),
      this.trigger({ type: "addtrack", track: t });
  }),
  (vjs.TextTrackList.prototype.removeTrack_ = function (t) {
    for (var e = 0, n = this.length; e < n; e++)
      if (this[e] === t) {
        this.tracks_.splice(e, 1);
        break;
      }
    this.trigger({ type: "removetrack", track: t });
  }),
  (vjs.TextTrackList.prototype.getTrackById = function (t) {
    for (var e, n = 0, i = this.length, o = null; n < i; n++)
      if ((e = this[n]).id === t) {
        o = e;
        break;
      }
    return o;
  }),
  (vjs.TextTrackCueList = function (t) {
    var e,
      n = this;
    if (vjs.IS_IE8)
      for (e in ((n = document.createElement("custom")),
      vjs.TextTrackCueList.prototype))
        n[e] = vjs.TextTrackCueList.prototype[e];
    if (
      (vjs.TextTrackCueList.prototype.setCues_.call(n, t),
      Object.defineProperty(n, "length", {
        get: function () {
          return this.length_;
        },
      }),
      vjs.IS_IE8)
    )
      return n;
  }),
  (vjs.TextTrackCueList.prototype.setCues_ = function (t) {
    var e,
      n = this.length || 0,
      i = 0,
      o = t.length;
    if (
      ((this.cues_ = t),
      (this.length_ = t.length),
      (e = function (t) {
        "" + t in this ||
          Object.defineProperty(this, "" + t, {
            get: function () {
              return this.cues_[t];
            },
          });
      }),
      n < o)
    )
      for (i = n; i < o; i++) e.call(this, i);
  }),
  (vjs.TextTrackCueList.prototype.getCueById = function (t) {
    for (var e, n = 0, i = this.length, o = null; n < i; n++)
      if ((e = this[n]).id === t) {
        o = e;
        break;
      }
    return o;
  }),
  (function () {
    "use strict";
    (vjs.TextTrackDisplay = vjs.Component.extend({
      init: function (i, t, e) {
        vjs.Component.call(this, i, t, e),
          i.on("loadstart", vjs.bind(this, this.toggleDisplay)),
          i.ready(
            vjs.bind(this, function () {
              var t, e, n;
              if (i.tech && i.tech.featuresNativeTextTracks) this.hide();
              else
                for (
                  i.on("fullscreenchange", vjs.bind(this, this.updateDisplay)),
                    e = i.options_.tracks || [],
                    t = 0;
                  t < e.length;
                  t++
                )
                  (n = e[t]), this.player_.addRemoteTextTrack(n);
            })
          );
      },
    })),
      (vjs.TextTrackDisplay.prototype.toggleDisplay = function () {
        this.player_.tech && this.player_.tech.featuresNativeTextTracks
          ? this.hide()
          : this.show();
      }),
      (vjs.TextTrackDisplay.prototype.createEl = function () {
        return vjs.Component.prototype.createEl.call(this, "div", {
          className: "vjs-text-track-display",
        });
      }),
      (vjs.TextTrackDisplay.prototype.clearDisplay = function () {
        "function" == typeof window.WebVTT &&
          window.WebVTT.processCues(window, [], this.el_);
      });
    var r = function (t, e) {
        return (
          "rgba(" +
          parseInt(t[1] + t[1], 16) +
          "," +
          parseInt(t[2] + t[2], 16) +
          "," +
          parseInt(t[3] + t[3], 16) +
          "," +
          e +
          ")"
        );
      },
      a = "#222",
      l = "#ccc",
      c = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif',
      },
      u = function (t, e, n) {
        try {
          t.style[e] = n;
        } catch (i) {}
      };
    (vjs.TextTrackDisplay.prototype.updateDisplay = function () {
      var t,
        e = this.player_.textTracks(),
        n = 0;
      if ((this.clearDisplay(), e))
        for (; n < e.length; n++)
          "showing" === (t = e[n]).mode && this.updateForTrack(t);
    }),
      (vjs.TextTrackDisplay.prototype.updateForTrack = function (t) {
        if ("function" == typeof window.WebVTT && t.activeCues) {
          for (
            var e,
              n,
              i = 0,
              o = this.player_.textTrackSettings.getValues(),
              s = [];
            i < t.activeCues.length;
            i++
          )
            s.push(t.activeCues[i]);
          for (
            window.WebVTT.processCues(window, t.activeCues, this.el_),
              i = s.length;
            i--;

          )
            (e = s[i].displayState),
              o.color && (e.firstChild.style.color = o.color),
              o.textOpacity &&
                u(e.firstChild, "color", r(o.color || "#fff", o.textOpacity)),
              o.backgroundColor &&
                (e.firstChild.style.backgroundColor = o.backgroundColor),
              o.backgroundOpacity &&
                u(
                  e.firstChild,
                  "backgroundColor",
                  r(o.backgroundColor || "#000", o.backgroundOpacity)
                ),
              o.windowColor &&
                (o.windowOpacity
                  ? u(e, "backgroundColor", r(o.windowColor, o.windowOpacity))
                  : (e.style.backgroundColor = o.windowColor)),
              o.edgeStyle &&
                ("dropshadow" === o.edgeStyle
                  ? (e.firstChild.style.textShadow =
                      "2px 2px 3px " +
                      a +
                      ", 2px 2px 4px " +
                      a +
                      ", 2px 2px 5px " +
                      a)
                  : "raised" === o.edgeStyle
                  ? (e.firstChild.style.textShadow =
                      "1px 1px " + a + ", 2px 2px " + a + ", 3px 3px " + a)
                  : "depressed" === o.edgeStyle
                  ? (e.firstChild.style.textShadow =
                      "1px 1px " +
                      l +
                      ", 0 1px " +
                      l +
                      ", -1px -1px " +
                      a +
                      ", 0 -1px " +
                      a)
                  : "uniform" === o.edgeStyle &&
                    (e.firstChild.style.textShadow =
                      "0 0 4px " +
                      a +
                      ", 0 0 4px " +
                      a +
                      ", 0 0 4px " +
                      a +
                      ", 0 0 4px " +
                      a)),
              o.fontPercent &&
                1 !== o.fontPercent &&
                ((n = window.parseFloat(e.style.fontSize)),
                (e.style.fontSize = n * o.fontPercent + "px"),
                (e.style.height = "auto"),
                (e.style.top = "auto"),
                (e.style.bottom = "2px")),
              o.fontFamily &&
                "default" !== o.fontFamily &&
                ("small-caps" === o.fontFamily
                  ? (e.firstChild.style.fontVariant = "small-caps")
                  : (e.firstChild.style.fontFamily = c[o.fontFamily]));
        }
      }),
      (vjs.TextTrackMenuItem = vjs.MenuItem.extend({
        init: function (t, e) {
          var n,
            i,
            o = (this.track = e.track),
            s = t.textTracks();
          s &&
            ((n = vjs.bind(this, function () {
              var t,
                e,
                n,
                i = "showing" === this.track.mode;
              if (this instanceof vjs.OffTextTrackMenuItem)
                for (i = !0, e = 0, n = s.length; e < n; e++)
                  if (
                    (t = s[e]).kind === this.track.kind &&
                    "showing" === t.mode
                  ) {
                    i = !1;
                    break;
                  }
              this.selected(i);
            })),
            s.addEventListener("change", n),
            t.on("dispose", function () {
              s.removeEventListener("change", n);
            })),
            (e.label = o.label || o.language || "Unknown"),
            (e.selected = o["default"] || "showing" === o.mode),
            vjs.MenuItem.call(this, t, e),
            s &&
              s.onchange === undefined &&
              this.on(["tap", "click"], function () {
                if ("object" != typeof window.Event)
                  try {
                    i = new window.Event("change");
                  } catch (t) {}
                i ||
                  (i = document.createEvent("Event")).initEvent(
                    "change",
                    !0,
                    !0
                  ),
                  s.dispatchEvent(i);
              });
        },
      })),
      (vjs.TextTrackMenuItem.prototype.onClick = function () {
        var t,
          e = this.track.kind,
          n = this.player_.textTracks(),
          i = 0;
        if ((vjs.MenuItem.prototype.onClick.call(this), n))
          for (; i < n.length; i++)
            (t = n[i]).kind === e &&
              (t === this.track ? (t.mode = "showing") : (t.mode = "disabled"));
      }),
      (vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
        init: function (t, e) {
          (e.track = {
            kind: e.kind,
            player: t,
            label: e.kind + " off",
            default: !1,
            mode: "disabled",
          }),
            vjs.TextTrackMenuItem.call(this, t, e),
            this.selected(!0);
        },
      })),
      (vjs.CaptionSettingsMenuItem = vjs.TextTrackMenuItem.extend({
        init: function (t, e) {
          (e.track = {
            kind: e.kind,
            player: t,
            label: e.kind + " settings",
            default: !1,
            mode: "disabled",
          }),
            vjs.TextTrackMenuItem.call(this, t, e),
            this.addClass("vjs-texttrack-settings");
        },
      })),
      (vjs.CaptionSettingsMenuItem.prototype.onClick = function () {
        this.player().getChild("textTrackSettings").show();
      }),
      (vjs.TextTrackButton = vjs.MenuButton.extend({
        init: function (t, e) {
          var n, i;
          vjs.MenuButton.call(this, t, e),
            (n = this.player_.textTracks()),
            this.items.length <= 1 && this.hide(),
            n &&
              ((i = vjs.bind(this, this.update)),
              n.addEventListener("removetrack", i),
              n.addEventListener("addtrack", i),
              this.player_.on("dispose", function () {
                n.removeEventListener("removetrack", i),
                  n.removeEventListener("addtrack", i);
              }));
        },
      })),
      (vjs.TextTrackButton.prototype.createItems = function () {
        var t,
          e,
          n = [];
        if (
          (!(this instanceof vjs.CaptionsButton) ||
            (this.player().tech &&
              this.player().tech.featuresNativeTextTracks) ||
            n.push(
              new vjs.CaptionSettingsMenuItem(this.player_, {
                kind: this.kind_,
              })
            ),
          n.push(
            new vjs.OffTextTrackMenuItem(this.player_, { kind: this.kind_ })
          ),
          !(e = this.player_.textTracks()))
        )
          return n;
        for (var i = 0; i < e.length; i++)
          (t = e[i]).kind === this.kind_ &&
            n.push(new vjs.TextTrackMenuItem(this.player_, { track: t }));
        return n;
      }),
      (vjs.CaptionsButton = vjs.TextTrackButton.extend({
        init: function (t, e, n) {
          vjs.TextTrackButton.call(this, t, e, n),
            this.el_.setAttribute("aria-label", "Captions Menu");
        },
      })),
      (vjs.CaptionsButton.prototype.kind_ = "captions"),
      (vjs.CaptionsButton.prototype.buttonText = "Captions"),
      (vjs.CaptionsButton.prototype.className = "vjs-captions-button"),
      (vjs.CaptionsButton.prototype.update = function () {
        var t = 2;
        vjs.TextTrackButton.prototype.update.call(this),
          this.player().tech &&
            this.player().tech.featuresNativeTextTracks &&
            (t = 1),
          this.items && this.items.length > t ? this.show() : this.hide();
      }),
      (vjs.SubtitlesButton = vjs.TextTrackButton.extend({
        init: function (t, e, n) {
          vjs.TextTrackButton.call(this, t, e, n),
            this.el_.setAttribute("aria-label", "Subtitles Menu");
        },
      })),
      (vjs.SubtitlesButton.prototype.kind_ = "subtitles"),
      (vjs.SubtitlesButton.prototype.buttonText = "Subtitles"),
      (vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button"),
      (vjs.ChaptersButton = vjs.TextTrackButton.extend({
        init: function (t, e, n) {
          vjs.TextTrackButton.call(this, t, e, n),
            this.el_.setAttribute("aria-label", "Chapters Menu");
        },
      })),
      (vjs.ChaptersButton.prototype.kind_ = "chapters"),
      (vjs.ChaptersButton.prototype.buttonText = "Chapters"),
      (vjs.ChaptersButton.prototype.className = "vjs-chapters-button"),
      (vjs.ChaptersButton.prototype.createItems = function () {
        var t,
          e,
          n = [];
        if (!(e = this.player_.textTracks())) return n;
        for (var i = 0; i < e.length; i++)
          (t = e[i]).kind === this.kind_ &&
            n.push(new vjs.TextTrackMenuItem(this.player_, { track: t }));
        return n;
      }),
      (vjs.ChaptersButton.prototype.createMenu = function () {
        for (
          var t,
            e,
            n = this.player_.textTracks() || [],
            i = 0,
            o = n.length,
            s = (this.items = []);
          i < o;
          i++
        )
          if ((t = n[i]).kind == this.kind_) {
            if (t.cues) {
              e = t;
              break;
            }
            (t.mode = "hidden"),
              window.setTimeout(
                vjs.bind(this, function () {
                  this.createMenu();
                }),
                100
              );
          }
        var r = this.menu;
        if (
          (r === undefined &&
            (r = new vjs.Menu(this.player_))
              .contentEl()
              .appendChild(
                vjs.createEl("li", {
                  className: "vjs-menu-title",
                  innerHTML: vjs.capitalize(this.kind_),
                  tabindex: -1,
                })
              ),
          e)
        ) {
          var a,
            l,
            c = e.cues;
          for (i = 0, o = c.length; i < o; i++)
            (a = c[i]),
              (l = new vjs.ChaptersTrackMenuItem(this.player_, {
                track: e,
                cue: a,
              })),
              s.push(l),
              r.addChild(l);
          this.addChild(r);
        }
        return 0 < this.items.length && this.show(), r;
      }),
      (vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
        init: function (t, e) {
          var n = (this.track = e.track),
            i = (this.cue = e.cue),
            o = t.currentTime();
          (e.label = i.text),
            (e.selected = i.startTime <= o && o < i.endTime),
            vjs.MenuItem.call(this, t, e),
            n.addEventListener("cuechange", vjs.bind(this, this.update));
        },
      })),
      (vjs.ChaptersTrackMenuItem.prototype.onClick = function () {
        vjs.MenuItem.prototype.onClick.call(this),
          this.player_.currentTime(this.cue.startTime),
          this.update(this.cue.startTime);
      }),
      (vjs.ChaptersTrackMenuItem.prototype.update = function () {
        var t = this.cue,
          e = this.player_.currentTime();
        this.selected(t.startTime <= e && e < t.endTime);
      });
  })(),
  (function () {
    "use strict";
    function u(t) {
      var e;
      return (
        t.selectedOptions
          ? (e = t.selectedOptions[0])
          : t.options && (e = t.options[t.options.selectedIndex]),
        e.value
      );
    }
    function i(t, e) {
      var n;
      if (e) {
        for (n = 0; n < t.options.length && t.options[n].value !== e; n++);
        t.selectedIndex = n;
      }
    }
    function t() {
      return '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>';
    }
    (vjs.TextTrackSettings = vjs.Component.extend({
      init: function (t, e) {
        vjs.Component.call(this, t, e),
          this.hide(),
          vjs.on(
            this.el().querySelector(".vjs-done-button"),
            "click",
            vjs.bind(this, function () {
              this.saveSettings(), this.hide();
            })
          ),
          vjs.on(
            this.el().querySelector(".vjs-default-button"),
            "click",
            vjs.bind(this, function () {
              (this.el().querySelector(
                ".vjs-fg-color > select"
              ).selectedIndex = 0),
                (this.el().querySelector(
                  ".vjs-bg-color > select"
                ).selectedIndex = 0),
                (this.el().querySelector(
                  ".window-color > select"
                ).selectedIndex = 0),
                (this.el().querySelector(
                  ".vjs-text-opacity > select"
                ).selectedIndex = 0),
                (this.el().querySelector(
                  ".vjs-bg-opacity > select"
                ).selectedIndex = 0),
                (this.el().querySelector(
                  ".vjs-window-opacity > select"
                ).selectedIndex = 0),
                (this.el().querySelector(
                  ".vjs-edge-style select"
                ).selectedIndex = 0),
                (this.el().querySelector(
                  ".vjs-font-family select"
                ).selectedIndex = 0),
                (this.el().querySelector(
                  ".vjs-font-percent select"
                ).selectedIndex = 2),
                this.updateDisplay();
            })
          ),
          vjs.on(
            this.el().querySelector(".vjs-fg-color > select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".vjs-bg-color > select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".window-color > select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".vjs-text-opacity > select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".vjs-bg-opacity > select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".vjs-window-opacity > select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".vjs-font-percent select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".vjs-edge-style select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          vjs.on(
            this.el().querySelector(".vjs-font-family select"),
            "change",
            vjs.bind(this, this.updateDisplay)
          ),
          t.options().persistTextTrackSettings && this.restoreSettings();
      },
    })),
      (vjs.TextTrackSettings.prototype.createEl = function () {
        return vjs.Component.prototype.createEl.call(this, "div", {
          className: "vjs-caption-settings vjs-modal-overlay",
          innerHTML: t(),
        });
      }),
      (vjs.TextTrackSettings.prototype.getValues = function () {
        var t, e, n, i, o, s, r, a, l, c;
        for (c in ((i = u(
          (t = this.el()).querySelector(".vjs-edge-style select")
        )),
        (o = u(t.querySelector(".vjs-font-family select"))),
        (s = u(t.querySelector(".vjs-fg-color > select"))),
        (n = u(t.querySelector(".vjs-text-opacity > select"))),
        (r = u(t.querySelector(".vjs-bg-color > select"))),
        (e = u(t.querySelector(".vjs-bg-opacity > select"))),
        (a = u(t.querySelector(".window-color > select"))),
        (l = {
          backgroundOpacity: e,
          textOpacity: n,
          windowOpacity: u(t.querySelector(".vjs-window-opacity > select")),
          edgeStyle: i,
          fontFamily: o,
          color: s,
          backgroundColor: r,
          windowColor: a,
          fontPercent: window.parseFloat(
            u(t.querySelector(".vjs-font-percent > select"))
          ),
        })))
          ("" === l[c] ||
            "none" === l[c] ||
            ("fontPercent" === c && 1 === l[c])) &&
            delete l[c];
        return l;
      }),
      (vjs.TextTrackSettings.prototype.setValues = function (t) {
        var e,
          n = this.el();
        i(n.querySelector(".vjs-edge-style select"), t.edgeStyle),
          i(n.querySelector(".vjs-font-family select"), t.fontFamily),
          i(n.querySelector(".vjs-fg-color > select"), t.color),
          i(n.querySelector(".vjs-text-opacity > select"), t.textOpacity),
          i(n.querySelector(".vjs-bg-color > select"), t.backgroundColor),
          i(n.querySelector(".vjs-bg-opacity > select"), t.backgroundOpacity),
          i(n.querySelector(".window-color > select"), t.windowColor),
          i(n.querySelector(".vjs-window-opacity > select"), t.windowOpacity),
          (e = t.fontPercent) && (e = e.toFixed(2)),
          i(n.querySelector(".vjs-font-percent > select"), e);
      }),
      (vjs.TextTrackSettings.prototype.restoreSettings = function () {
        var t;
        try {
          t = JSON.parse(
            window.localStorage.getItem("vjs-text-track-settings")
          );
        } catch (e) {}
        t && this.setValues(t);
      }),
      (vjs.TextTrackSettings.prototype.saveSettings = function () {
        var t;
        if (this.player_.options().persistTextTrackSettings) {
          t = this.getValues();
          try {
            vjs.isEmpty(t)
              ? window.localStorage.removeItem("vjs-text-track-settings")
              : window.localStorage.setItem(
                  "vjs-text-track-settings",
                  JSON.stringify(t)
                );
          } catch (e) {}
        }
      }),
      (vjs.TextTrackSettings.prototype.updateDisplay = function () {
        var t = this.player_.getChild("textTrackDisplay");
        t && t.updateDisplay();
      });
  })(),
  vjs.JSON,
  "undefined" != typeof window.JSON && "function" == typeof window.JSON.parse)
)
  vjs.JSON = window.JSON;
else {
  vjs.JSON = {};
  var cx =
    /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  vjs.JSON.parse = function (text, reviver) {
    function walk(t, e) {
      var n,
        i,
        o = t[e];
      if (o && "object" == typeof o)
        for (n in o)
          Object.prototype.hasOwnProperty.call(o, n) &&
            ((i = walk(o, n)) !== undefined ? (o[n] = i) : delete o[n]);
      return reviver.call(t, e, o);
    }
    var j;
    if (
      ((text = String(text)),
      (cx.lastIndex = 0),
      cx.test(text) &&
        (text = text.replace(cx, function (t) {
          return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
        })),
      /^[\],:{}\s]*$/.test(
        text
          .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )
          .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
      ))
    )
      return (
        (j = eval("(" + text + ")")),
        "function" == typeof reviver ? walk({ "": j }, "") : j
      );
    throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
  };
}
(vjs.autoSetup = function () {
  var t,
    e,
    n,
    i = document.getElementsByTagName("video"),
    o = document.getElementsByTagName("audio"),
    s = [];
  if (i && 0 < i.length) for (e = 0, n = i.length; e < n; e++) s.push(i[e]);
  if (o && 0 < o.length) for (e = 0, n = o.length; e < n; e++) s.push(o[e]);
  if (s && 0 < s.length)
    for (e = 0, n = s.length; e < n; e++) {
      if (!(t = s[e]) || !t.getAttribute) {
        vjs.autoSetupTimeout(1);
        break;
      }
      t.player === undefined &&
        null !== t.getAttribute("data-setup") &&
        videojs(t);
    }
  else vjs.windowLoaded || vjs.autoSetupTimeout(1);
}),
  (vjs.autoSetupTimeout = function (t) {
    setTimeout(vjs.autoSetup, t);
  }),
  "complete" === document.readyState
    ? (vjs.windowLoaded = !0)
    : vjs.one(window, "load", function () {
        vjs.windowLoaded = !0;
      }),
  vjs.autoSetupTimeout(1),
  (vjs.plugin = function (t, e) {
    vjs.Player.prototype[t] = e;
  }),
  (function (t) {
    var e = (t.vttjs = {}),
      n = e.VTTCue,
      i = e.VTTRegion,
      o = t.VTTCue,
      s = t.VTTRegion;
    (e.shim = function () {
      (e.VTTCue = n), (e.VTTRegion = i);
    }),
      (e.restore = function () {
        (e.VTTCue = o), (e.VTTRegion = s);
      });
  })(this),
  (function (t, e) {
    function j(t) {
      return "string" == typeof t && !!i[t.toLowerCase()] && t.toLowerCase();
    }
    function w(t) {
      return "string" == typeof t && !!o[t.toLowerCase()] && t.toLowerCase();
    }
    function T(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) t[i] = n[i];
      }
      return t;
    }
    function n(t, e, n) {
      var i = this,
        o = /MSIE\s8\.0/.test(navigator.userAgent),
        s = {};
      o ? (i = document.createElement("custom")) : (s.enumerable = !0),
        (i.hasBeenReset = !1);
      var r = "",
        a = !1,
        l = t,
        c = e,
        u = n,
        d = null,
        p = "",
        h = !0,
        f = "auto",
        v = "start",
        m = 50,
        g = "middle",
        y = 50,
        b = "middle";
      if (
        (Object.defineProperty(
          i,
          "id",
          T({}, s, {
            get: function () {
              return r;
            },
            set: function (t) {
              r = "" + t;
            },
          })
        ),
        Object.defineProperty(
          i,
          "pauseOnExit",
          T({}, s, {
            get: function () {
              return a;
            },
            set: function (t) {
              a = !!t;
            },
          })
        ),
        Object.defineProperty(
          i,
          "startTime",
          T({}, s, {
            get: function () {
              return l;
            },
            set: function (t) {
              if ("number" != typeof t)
                throw new TypeError("Start time must be set to a number.");
              (l = t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "endTime",
          T({}, s, {
            get: function () {
              return c;
            },
            set: function (t) {
              if ("number" != typeof t)
                throw new TypeError("End time must be set to a number.");
              (c = t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "text",
          T({}, s, {
            get: function () {
              return u;
            },
            set: function (t) {
              (u = "" + t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "region",
          T({}, s, {
            get: function () {
              return d;
            },
            set: function (t) {
              (d = t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "vertical",
          T({}, s, {
            get: function () {
              return p;
            },
            set: function (t) {
              var e = j(t);
              if (!1 === e)
                throw new SyntaxError(
                  "An invalid or illegal string was specified."
                );
              (p = e), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "snapToLines",
          T({}, s, {
            get: function () {
              return h;
            },
            set: function (t) {
              (h = !!t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "line",
          T({}, s, {
            get: function () {
              return f;
            },
            set: function (t) {
              if ("number" != typeof t && t !== _)
                throw new SyntaxError(
                  "An invalid number or illegal string was specified."
                );
              (f = t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "lineAlign",
          T({}, s, {
            get: function () {
              return v;
            },
            set: function (t) {
              var e = w(t);
              if (!e)
                throw new SyntaxError(
                  "An invalid or illegal string was specified."
                );
              (v = e), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "position",
          T({}, s, {
            get: function () {
              return m;
            },
            set: function (t) {
              if (t < 0 || 100 < t)
                throw new Error("Position must be between 0 and 100.");
              (m = t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "positionAlign",
          T({}, s, {
            get: function () {
              return g;
            },
            set: function (t) {
              var e = w(t);
              if (!e)
                throw new SyntaxError(
                  "An invalid or illegal string was specified."
                );
              (g = e), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "size",
          T({}, s, {
            get: function () {
              return y;
            },
            set: function (t) {
              if (t < 0 || 100 < t)
                throw new Error("Size must be between 0 and 100.");
              (y = t), (this.hasBeenReset = !0);
            },
          })
        ),
        Object.defineProperty(
          i,
          "align",
          T({}, s, {
            get: function () {
              return b;
            },
            set: function (t) {
              var e = w(t);
              if (!e)
                throw new SyntaxError(
                  "An invalid or illegal string was specified."
                );
              (b = e), (this.hasBeenReset = !0);
            },
          })
        ),
        (i.displayState = undefined),
        o)
      )
        return i;
    }
    var _ = "auto",
      i = { "": !0, lr: !0, rl: !0 },
      o = { start: !0, middle: !0, end: !0, left: !0, right: !0 };
    (n.prototype.getCueAsHTML = function () {
      return WebVTT.convertCueToDOMTree(window, this.text);
    }),
      (t.VTTCue = t.VTTCue || n),
      (e.VTTCue = n);
  })(this, this.vttjs || {}),
  (function (t, e) {
    function l(t) {
      return "string" == typeof t && !!i[t.toLowerCase()] && t.toLowerCase();
    }
    function c(t) {
      return "number" == typeof t && 0 <= t && t <= 100;
    }
    function n() {
      var e = 100,
        n = 3,
        i = 0,
        o = 100,
        s = 0,
        r = 100,
        a = "";
      Object.defineProperties(this, {
        width: {
          enumerable: !0,
          get: function () {
            return e;
          },
          set: function (t) {
            if (!c(t)) throw new Error("Width must be between 0 and 100.");
            e = t;
          },
        },
        lines: {
          enumerable: !0,
          get: function () {
            return n;
          },
          set: function (t) {
            if ("number" != typeof t)
              throw new TypeError("Lines must be set to a number.");
            n = t;
          },
        },
        regionAnchorY: {
          enumerable: !0,
          get: function () {
            return o;
          },
          set: function (t) {
            if (!c(t))
              throw new Error("RegionAnchorX must be between 0 and 100.");
            o = t;
          },
        },
        regionAnchorX: {
          enumerable: !0,
          get: function () {
            return i;
          },
          set: function (t) {
            if (!c(t))
              throw new Error("RegionAnchorY must be between 0 and 100.");
            i = t;
          },
        },
        viewportAnchorY: {
          enumerable: !0,
          get: function () {
            return r;
          },
          set: function (t) {
            if (!c(t))
              throw new Error("ViewportAnchorY must be between 0 and 100.");
            r = t;
          },
        },
        viewportAnchorX: {
          enumerable: !0,
          get: function () {
            return s;
          },
          set: function (t) {
            if (!c(t))
              throw new Error("ViewportAnchorX must be between 0 and 100.");
            s = t;
          },
        },
        scroll: {
          enumerable: !0,
          get: function () {
            return a;
          },
          set: function (t) {
            var e = l(t);
            if (!1 === e)
              throw new SyntaxError(
                "An invalid or illegal string was specified."
              );
            a = e;
          },
        },
      });
    }
    var i = { "": !0, up: !0 };
    (t.VTTRegion = t.VTTRegion || n), (e.VTTRegion = n);
  })(this, this.vttjs || {}),
  (function (t) {
    function u(t, e) {
      (this.name = "ParsingError"),
        (this.code = t.code),
        (this.message = e || t.message);
    }
    function f(t) {
      function e(t, e, n, i) {
        return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | i) / 1e3;
      }
      var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
      return n
        ? n[3]
          ? e(n[1], n[2], n[3].replace(":", ""), n[4])
          : 59 < n[1]
          ? e(n[1], n[2], 0, n[4])
          : e(0, n[1], n[2], n[4])
        : null;
    }
    function d() {
      this.values = n(null);
    }
    function p(t, e, n, i) {
      var o = i ? t.split(i) : [t];
      for (var s in o)
        if ("string" == typeof o[s]) {
          var r = o[s].split(n);
          if (2 === r.length) e(r[0], r[1]);
        }
    }
    function h(e, t, r) {
      function n() {
        var t = f(e);
        if (null === t)
          throw new u(u.Errors.BadTimeStamp, "Malformed timestamp: " + s);
        return (e = e.replace(/^[^\sa-zA-Z-]+/, "")), t;
      }
      function i(t, e) {
        var s = new d();
        p(
          t,
          function (t, e) {
            switch (t) {
              case "region":
                for (var n = r.length - 1; 0 <= n; n--)
                  if (r[n].id === e) {
                    s.set(t, r[n].region);
                    break;
                  }
                break;
              case "vertical":
                s.alt(t, e, ["rl", "lr"]);
                break;
              case "line":
                var i = e.split(","),
                  o = i[0];
                s.integer(t, o),
                  s.percent(t, o) && s.set("snapToLines", !1),
                  s.alt(t, o, ["auto"]),
                  2 === i.length &&
                    s.alt("lineAlign", i[1], ["start", "middle", "end"]);
                break;
              case "position":
                (i = e.split(",")),
                  s.percent(t, i[0]),
                  2 === i.length &&
                    s.alt("positionAlign", i[1], ["start", "middle", "end"]);
                break;
              case "size":
                s.percent(t, e);
                break;
              case "align":
                s.alt(t, e, ["start", "middle", "end", "left", "right"]);
            }
          },
          /:/,
          /\s/
        ),
          (e.region = s.get("region", null)),
          (e.vertical = s.get("vertical", "")),
          (e.line = s.get("line", "auto")),
          (e.lineAlign = s.get("lineAlign", "start")),
          (e.snapToLines = s.get("snapToLines", !0)),
          (e.size = s.get("size", 100)),
          (e.align = s.get("align", "middle")),
          (e.position = s.get(
            "position",
            { start: 0, left: 0, middle: 50, end: 100, right: 100 },
            e.align
          )),
          (e.positionAlign = s.get(
            "positionAlign",
            {
              start: "start",
              left: "start",
              middle: "middle",
              end: "end",
              right: "end",
            },
            e.align
          ));
      }
      function o() {
        e = e.replace(/^\s+/, "");
      }
      var s = e;
      if ((o(), (t.startTime = n()), o(), "-->" !== e.substr(0, 3)))
        throw new u(
          u.Errors.BadTimeStamp,
          "Malformed time stamp (time stamps must be separated by '-->'): " + s
        );
      (e = e.substr(3)), o(), (t.endTime = n()), o(), i(e, t);
    }
    function l(s, n) {
      function t() {
        function t(t) {
          return (n = n.substr(t.length)), t;
        }
        if (!n) return null;
        var e = n.match(/^([^<]*)(<[^>]+>?)?/);
        return t(e[1] ? e[1] : e[2]);
      }
      function e(t) {
        return j[t];
      }
      function i(t) {
        for (; (h = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)); )
          t = t.replace(h[0], e);
        return t;
      }
      function o(t, e) {
        return !_[e.localName] || _[e.localName] === t.localName;
      }
      function r(t, e) {
        var n = w[t];
        if (!n) return null;
        var i = s.document.createElement(n);
        i.localName = n;
        var o = T[t];
        return o && e && (i[o] = e.trim()), i;
      }
      for (
        var a, l = s.document.createElement("div"), c = l, u = [];
        null !== (a = t());

      )
        if ("<" !== a[0]) c.appendChild(s.document.createTextNode(i(a)));
        else {
          if ("/" === a[1]) {
            u.length &&
              u[u.length - 1] === a.substr(2).replace(">", "") &&
              (u.pop(), (c = c.parentNode));
            continue;
          }
          var d,
            p = f(a.substr(1, a.length - 2));
          if (p) {
            (d = s.document.createProcessingInstruction("timestamp", p)),
              c.appendChild(d);
            continue;
          }
          var h = a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
          if (!h) continue;
          if (!(d = r(h[1], h[3]))) continue;
          if (!o(c, d)) continue;
          h[2] && (d.className = h[2].substr(1).replace(".", " ")),
            u.push(h[1]),
            c.appendChild(d),
            (c = d);
        }
      return l;
    }
    function c(t) {
      function o(t, e) {
        for (var n = e.childNodes.length - 1; 0 <= n; n--)
          t.push(e.childNodes[n]);
      }
      function s(t) {
        if (!t || !t.length) return null;
        var e = t.pop(),
          n = e.textContent || e.innerText;
        if (n) {
          var i = n.match(/^.*(\n|\r)/);
          return i ? i[(t.length = 0)] : n;
        }
        return "ruby" === e.tagName
          ? s(t)
          : e.childNodes
          ? (o(t, e), s(t))
          : void 0;
      }
      var e,
        n = [],
        i = "";
      if (!t || !t.childNodes) return "ltr";
      for (o(n, t); (i = s(n)); )
        for (var r = 0; r < i.length; r++) {
          e = i.charCodeAt(r);
          for (var a = 0; a < x.length; a++) if (x[a] === e) return "rtl";
        }
      return "ltr";
    }
    function m(t) {
      if (
        "number" == typeof t.line &&
        (t.snapToLines || (0 <= t.line && t.line <= 100))
      )
        return t.line;
      if (
        !t.track ||
        !t.track.textTrackList ||
        !t.track.textTrackList.mediaElement
      )
        return -1;
      for (
        var e = t.track, n = e.textTrackList, i = 0, o = 0;
        o < n.length && n[o] !== e;
        o++
      )
        "showing" === n[o].mode && i++;
      return -1 * ++i;
    }
    function v() {}
    function g(t, e, n) {
      var i = /MSIE\s8\.0/.test(navigator.userAgent),
        o = "rgba(255, 255, 255, 1)",
        s = "rgba(0, 0, 0, 0.8)";
      i && ((o = "rgb(255, 255, 255)"), (s = "rgb(0, 0, 0)")),
        v.call(this),
        (this.cue = e),
        (this.cueDiv = l(t, e.text));
      var r = {
        color: o,
        backgroundColor: s,
        position: "relative",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "inline",
      };
      i ||
        ((r.writingMode =
          "" === e.vertical
            ? "horizontal-tb"
            : "lr" === e.vertical
            ? "vertical-lr"
            : "vertical-rl"),
        (r.unicodeBidi = "plaintext")),
        this.applyStyles(r, this.cueDiv),
        (this.div = t.document.createElement("div")),
        (r = {
          textAlign: "middle" === e.align ? "center" : e.align,
          font: n.font,
          whiteSpace: "pre-line",
          position: "absolute",
        }),
        i ||
          ((r.direction = c(this.cueDiv)),
          (r.writingMode =
            "" === e.vertical
              ? "horizontal-tb"
              : "lr" === e.vertical
              ? "vertical-lr"
              : ("vertical-rl".stylesunicodeBidi = "plaintext"))),
        this.applyStyles(r),
        this.div.appendChild(this.cueDiv);
      var a = 0;
      switch (e.positionAlign) {
        case "start":
          a = e.position;
          break;
        case "middle":
          a = e.position - e.size / 2;
          break;
        case "end":
          a = e.position - e.size;
      }
      "" === e.vertical
        ? this.applyStyles({
            left: this.formatStyle(a, "%"),
            width: this.formatStyle(e.size, "%"),
          })
        : this.applyStyles({
            top: this.formatStyle(a, "%"),
            height: this.formatStyle(e.size, "%"),
          }),
        (this.move = function (t) {
          this.applyStyles({
            top: this.formatStyle(t.top, "px"),
            bottom: this.formatStyle(t.bottom, "px"),
            left: this.formatStyle(t.left, "px"),
            right: this.formatStyle(t.right, "px"),
            height: this.formatStyle(t.height, "px"),
            width: this.formatStyle(t.width, "px"),
          });
        });
    }
    function y(t) {
      var e,
        n,
        i,
        o,
        s = /MSIE\s8\.0/.test(navigator.userAgent);
      if (t.div) {
        (n = t.div.offsetHeight),
          (i = t.div.offsetWidth),
          (o = t.div.offsetTop);
        var r =
          (r = t.div.childNodes) &&
          (r = r[0]) &&
          r.getClientRects &&
          r.getClientRects();
        (t = t.div.getBoundingClientRect()),
          (e = r
            ? Math.max((r[0] && r[0].height) || 0, t.height / r.length)
            : 0);
      }
      (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top || o),
        (this.height = t.height || n),
        (this.bottom = t.bottom || o + (t.height || n)),
        (this.width = t.width || i),
        (this.lineHeight = e !== undefined ? e : t.lineHeight),
        s && !this.lineHeight && (this.lineHeight = 13);
    }
    function b(t, e, a, l) {
      function n(t, e) {
        for (var n, i = new y(t), o = 1, s = 0; s < e.length; s++) {
          for (
            ;
            t.overlapsOppositeAxis(a, e[s]) ||
            (t.within(a) && t.overlapsAny(l));

          )
            t.move(e[s]);
          if (t.within(a)) return t;
          var r = t.intersectPercentage(a);
          r < o && ((n = new y(t)), (o = r)), (t = new y(i));
        }
        return n || i;
      }
      var i = new y(e),
        o = e.cue,
        s = m(o),
        r = [];
      if (o.snapToLines) {
        var c;
        switch (o.vertical) {
          case "":
            (r = ["+y", "-y"]), (c = "height");
            break;
          case "rl":
            (r = ["+x", "-x"]), (c = "width");
            break;
          case "lr":
            (r = ["-x", "+x"]), (c = "width");
        }
        var u = i.lineHeight,
          d = u * Math.round(s),
          p = a[c] + u,
          h = r[0];
        Math.abs(d) > p && ((d = d < 0 ? -1 : 1), (d *= Math.ceil(p / u) * u)),
          s < 0 &&
            ((d += "" === o.vertical ? a.height : a.width), (r = r.reverse())),
          i.move(h, d);
      } else {
        var f = (i.lineHeight / a.height) * 100;
        switch (o.lineAlign) {
          case "middle":
            s -= f / 2;
            break;
          case "end":
            s -= f;
        }
        switch (o.vertical) {
          case "":
            e.applyStyles({ top: e.formatStyle(s, "%") });
            break;
          case "rl":
            e.applyStyles({ left: e.formatStyle(s, "%") });
            break;
          case "lr":
            e.applyStyles({ right: e.formatStyle(s, "%") });
        }
        (r = ["+y", "-x", "+x", "-y"]), (i = new y(e));
      }
      var v = n(i, r);
      e.move(v.toCSSCompatValues(a));
    }
    function e() {}
    var n =
      Object.create ||
      (function () {
        function e() {}
        return function (t) {
          if (1 !== arguments.length)
            throw new Error("Object.create shim only accepts one parameter.");
          return (e.prototype = t), new e();
        };
      })();
    (u.prototype = n(Error.prototype)),
      ((u.prototype.constructor = u).Errors = {
        BadSignature: { code: 0, message: "Malformed WebVTT signature." },
        BadTimeStamp: { code: 1, message: "Malformed time stamp." },
      }),
      (d.prototype = {
        set: function (t, e) {
          this.get(t) || "" === e || (this.values[t] = e);
        },
        get: function (t, e, n) {
          return n
            ? this.has(t)
              ? this.values[t]
              : e[n]
            : this.has(t)
            ? this.values[t]
            : e;
        },
        has: function (t) {
          return t in this.values;
        },
        alt: function (t, e, n) {
          for (var i = 0; i < n.length; ++i)
            if (e === n[i]) {
              this.set(t, e);
              break;
            }
        },
        integer: function (t, e) {
          /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10));
        },
        percent: function (t, e) {
          return (
            !!(
              e.match(/^([\d]{1,3})(\.[\d]*)?%$/) &&
              0 <= (e = parseFloat(e)) &&
              e <= 100
            ) && (this.set(t, e), !0)
          );
        },
      });
    var j = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&lrm;": "\u200e",
        "&rlm;": "\u200f",
        "&nbsp;": "\xa0",
      },
      w = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span",
      },
      T = { v: "title", lang: "lang" },
      _ = { rt: "ruby" },
      x = [
        1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495,
        1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507,
        1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524,
        1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573,
        1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585,
        1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597,
        1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609,
        1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656,
        1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668,
        1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680,
        1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692,
        1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704,
        1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716,
        1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728,
        1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740,
        1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774,
        1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796,
        1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810,
        1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822,
        1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834,
        1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875,
        1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887,
        1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899,
        1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911,
        1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923,
        1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935,
        1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947,
        1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984,
        1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
        1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
        2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050,
        2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062,
        2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097,
        2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109,
        2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122,
        2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134,
        2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217,
        2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292,
        64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303,
        64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314,
        64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328,
        64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338,
        64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348,
        64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358,
        64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368,
        64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378,
        64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388,
        64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398,
        64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408,
        64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418,
        64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428,
        64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438,
        64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448,
        64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475,
        64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485,
        64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495,
        64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505,
        64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515,
        64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525,
        64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535,
        64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545,
        64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555,
        64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565,
        64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575,
        64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585,
        64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595,
        64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605,
        64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615,
        64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625,
        64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635,
        64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645,
        64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655,
        64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665,
        64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675,
        64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685,
        64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695,
        64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705,
        64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715,
        64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725,
        64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735,
        64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745,
        64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755,
        64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765,
        64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775,
        64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785,
        64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795,
        64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805,
        64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815,
        64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825,
        64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853,
        64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863,
        64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873,
        64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883,
        64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893,
        64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903,
        64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915,
        64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925,
        64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935,
        64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945,
        64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955,
        64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965,
        64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015,
        65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140,
        65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151,
        65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161,
        65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171,
        65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181,
        65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191,
        65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201,
        65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211,
        65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221,
        65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231,
        65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241,
        65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251,
        65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261,
        65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271,
        65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588,
        67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601,
        67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611,
        67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621,
        67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631,
        67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647,
        67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657,
        67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667,
        67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678,
        67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848,
        67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858,
        67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872,
        67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882,
        67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892,
        67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971,
        67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981,
        67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991,
        67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001,
        68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011,
        68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021,
        68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117,
        68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128,
        68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138,
        68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160,
        68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178,
        68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195,
        68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205,
        68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215,
        68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353,
        68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363,
        68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373,
        68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383,
        68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393,
        68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403,
        68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423,
        68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433,
        68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445,
        68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455,
        68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465,
        68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608,
        68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618,
        68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628,
        68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638,
        68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648,
        68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658,
        68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668,
        68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678,
        68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471,
        126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480,
        126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489,
        126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500,
        126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512,
        126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530,
        126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548,
        126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567,
        126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577,
        126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588,
        126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599,
        126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609,
        126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618,
        126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633,
        126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643,
        126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109,
      ];
    (v.prototype.applyStyles = function (t, e) {
      for (var n in ((e = e || this.div), t))
        t.hasOwnProperty(n) && (e.style[n] = t[n]);
    }),
      (v.prototype.formatStyle = function (t, e) {
        return 0 === t ? 0 : t + e;
      }),
      (g.prototype = n(v.prototype)),
      (g.prototype.constructor = g),
      (y.prototype.move = function (t, e) {
        switch (((e = e !== undefined ? e : this.lineHeight), t)) {
          case "+x":
            (this.left += e), (this.right += e);
            break;
          case "-x":
            (this.left -= e), (this.right -= e);
            break;
          case "+y":
            (this.top += e), (this.bottom += e);
            break;
          case "-y":
            (this.top -= e), (this.bottom -= e);
        }
      }),
      (y.prototype.overlaps = function (t) {
        return (
          this.left < t.right &&
          this.right > t.left &&
          this.top < t.bottom &&
          this.bottom > t.top
        );
      }),
      (y.prototype.overlapsAny = function (t) {
        for (var e = 0; e < t.length; e++) if (this.overlaps(t[e])) return !0;
        return !1;
      }),
      (y.prototype.within = function (t) {
        return (
          this.top >= t.top &&
          this.bottom <= t.bottom &&
          this.left >= t.left &&
          this.right <= t.right
        );
      }),
      (y.prototype.overlapsOppositeAxis = function (t, e) {
        switch (e) {
          case "+x":
            return this.left < t.left;
          case "-x":
            return this.right > t.right;
          case "+y":
            return this.top < t.top;
          case "-y":
            return this.bottom > t.bottom;
        }
      }),
      (y.prototype.intersectPercentage = function (t) {
        return (
          (Math.max(
            0,
            Math.min(this.right, t.right) - Math.max(this.left, t.left)
          ) *
            Math.max(
              0,
              Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)
            )) /
          (this.height * this.width)
        );
      }),
      (y.prototype.toCSSCompatValues = function (t) {
        return {
          top: this.top - t.top,
          bottom: t.bottom - this.bottom,
          left: this.left - t.left,
          right: t.right - this.right,
          height: this.height,
          width: this.width,
        };
      }),
      (y.getSimpleBoxPosition = function (t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
          n = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
          i = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        return {
          left: (t = t.div
            ? t.div.getBoundingClientRect()
            : t.tagName
            ? t.getBoundingClientRect()
            : t).left,
          right: t.right,
          top: t.top || i,
          height: t.height || e,
          bottom: t.bottom || i + (t.height || e),
          width: t.width || n,
        };
      }),
      (e.StringDecoder = function () {
        return {
          decode: function (t) {
            if (!t) return "";
            if ("string" != typeof t)
              throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(t));
          },
        };
      }),
      (e.convertCueToDOMTree = function (t, e) {
        return t && e ? l(t, e) : null;
      });
    var C = 0.05,
      k = "sans-serif",
      S = "1.5%";
    (e.processCues = function (i, o, t) {
      function e(t) {
        for (var e = 0; e < t.length; e++)
          if (t[e].hasBeenReset || !t[e].displayState) return !0;
        return !1;
      }
      if (!i || !o || !t) return null;
      for (; t.firstChild; ) t.removeChild(t.firstChild);
      var s = i.document.createElement("div");
      if (
        ((s.style.position = "absolute"),
        (s.style.left = "0"),
        (s.style.right = "0"),
        (s.style.top = "0"),
        (s.style.bottom = "0"),
        (s.style.margin = S),
        t.appendChild(s),
        e(o))
      ) {
        var r = [],
          a = y.getSimpleBoxPosition(s),
          l = { font: Math.round(a.height * C * 100) / 100 + "px " + k };
        !(function () {
          for (var t, e, n = 0; n < o.length; n++)
            (e = o[n]),
              (t = new g(i, e, l)),
              s.appendChild(t.div),
              b(i, t, a, r),
              (e.displayState = t.div),
              r.push(y.getSimpleBoxPosition(t));
        })();
      } else
        for (var n = 0; n < o.length; n++) s.appendChild(o[n].displayState);
    }),
      (e.Parser = function (t, e, n) {
        n || ((n = e), (e = {})),
          e || (e = {}),
          (this.window = t),
          (this.vttjs = e),
          (this.state = "INITIAL"),
          (this.buffer = ""),
          (this.decoder = n || new TextDecoder("utf8")),
          (this.regionList = []);
      }),
      (e.Parser.prototype = {
        reportOrThrowError: function (t) {
          if (!(t instanceof u)) throw t;
          this.onparsingerror && this.onparsingerror(t);
        },
        parse: function (t) {
          function e() {
            for (
              var t = s.buffer, e = 0;
              e < t.length && "\r" !== t[e] && "\n" !== t[e];

            )
              ++e;
            var n = t.substr(0, e);
            return (
              "\r" === t[e] && ++e,
              "\n" === t[e] && ++e,
              (s.buffer = t.substr(e)),
              n
            );
          }
          function n(t) {
            var o = new d();
            if (
              (p(
                t,
                function (t, e) {
                  switch (t) {
                    case "id":
                      o.set(t, e);
                      break;
                    case "width":
                      o.percent(t, e);
                      break;
                    case "lines":
                      o.integer(t, e);
                      break;
                    case "regionanchor":
                    case "viewportanchor":
                      var n = e.split(",");
                      if (2 !== n.length) break;
                      var i = new d();
                      if (
                        (i.percent("x", n[0]),
                        i.percent("y", n[1]),
                        !i.has("x") || !i.has("y"))
                      )
                        break;
                      o.set(t + "X", i.get("x")), o.set(t + "Y", i.get("y"));
                      break;
                    case "scroll":
                      o.alt(t, e, ["up"]);
                  }
                },
                /=/,
                /\s/
              ),
              o.has("id"))
            ) {
              var e = new (s.vttjs.VTTRegion || s.window.VTTRegion)();
              (e.width = o.get("width", 100)),
                (e.lines = o.get("lines", 3)),
                (e.regionAnchorX = o.get("regionanchorX", 0)),
                (e.regionAnchorY = o.get("regionanchorY", 100)),
                (e.viewportAnchorX = o.get("viewportanchorX", 0)),
                (e.viewportAnchorY = o.get("viewportanchorY", 100)),
                (e.scroll = o.get("scroll", "")),
                s.onregion && s.onregion(e),
                s.regionList.push({ id: o.get("id"), region: e });
            }
          }
          function i(t) {
            p(
              t,
              function (t, e) {
                switch (t) {
                  case "Region":
                    n(e);
                }
              },
              /:/
            );
          }
          var s = this;
          t && (s.buffer += s.decoder.decode(t, { stream: !0 }));
          try {
            var o;
            if ("INITIAL" === s.state) {
              if (!/\r\n|\n/.test(s.buffer)) return this;
              var r = (o = e()).match(/^WEBVTT([ \t].*)?$/);
              if (!r || !r[0]) throw new u(u.Errors.BadSignature);
              s.state = "HEADER";
            }
            for (var a = !1; s.buffer; ) {
              if (!/\r\n|\n/.test(s.buffer)) return this;
              switch ((a ? (a = !1) : (o = e()), s.state)) {
                case "HEADER":
                  /:/.test(o) ? i(o) : o || (s.state = "ID");
                  continue;
                case "NOTE":
                  o || (s.state = "ID");
                  continue;
                case "ID":
                  if (/^NOTE($|[ \t])/.test(o)) {
                    s.state = "NOTE";
                    break;
                  }
                  if (!o) continue;
                  if (
                    ((s.cue = new (s.vttjs.VTTCue || s.window.VTTCue)(
                      0,
                      0,
                      ""
                    )),
                    (s.state = "CUE"),
                    -1 === o.indexOf("-->"))
                  ) {
                    s.cue.id = o;
                    continue;
                  }
                case "CUE":
                  try {
                    h(o, s.cue, s.regionList);
                  } catch (c) {
                    s.reportOrThrowError(c),
                      (s.cue = null),
                      (s.state = "BADCUE");
                    continue;
                  }
                  s.state = "CUETEXT";
                  continue;
                case "CUETEXT":
                  var l = -1 !== o.indexOf("-->");
                  if (!o || (l && (a = !0))) {
                    s.oncue && s.oncue(s.cue), (s.cue = null), (s.state = "ID");
                    continue;
                  }
                  s.cue.text && (s.cue.text += "\n"), (s.cue.text += o);
                  continue;
                case "BADCUE":
                  o || (s.state = "ID");
                  continue;
              }
            }
          } catch (c) {
            s.reportOrThrowError(c),
              "CUETEXT" === s.state && s.cue && s.oncue && s.oncue(s.cue),
              (s.cue = null),
              (s.state = "INITIAL" === s.state ? "BADWEBVTT" : "BADCUE");
          }
          return this;
        },
        flush: function () {
          var t = this;
          try {
            if (
              ((t.buffer += t.decoder.decode()),
              (t.cue || "HEADER" === t.state) &&
                ((t.buffer += "\n\n"), t.parse()),
              "INITIAL" === t.state)
            )
              throw new u(u.Errors.BadSignature);
          } catch (e) {
            t.reportOrThrowError(e);
          }
          return t.onflush && t.onflush(), this;
        },
      }),
      (t.WebVTT = e);
  })(this, this.vttjs),
  (function () {
    function s(t, e, n) {
      t.addEventListener ? t.addEventListener(e, n, !0) : t.attachEvent(e, n);
    }
    function l(t, e) {
      if (void 0 === t) return !1;
      var n = "innerText" in t ? "innerText" : "textContent";
      try {
        t[n] = e;
      } catch (i) {
        t.setAttribute("innerText", e);
      }
    }
    (videojs.Youtube = videojs.MediaTechController.extend({
      init: function (e, t, n) {
        if (
          ((this.player_ = e),
          (this.featuresProgressEvents = !1),
          (this.featuresTimeupdateEvents = !1),
          videojs.MediaTechController.call(this, e, t, n),
          (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
          (this.isAndroid = /(Android)/g.test(navigator.userAgent)),
          (this.playVideoIsAllowed = !(this.isIos || this.isAndroid)),
          (this.isIos || this.isAndroid) &&
            (this.player_.options().autoplay = !1),
          "undefined" != typeof t.source)
        )
          for (var i in t.source)
            t.source.hasOwnProperty(i) && (e.options()[i] = t.source[i]);
        (this.userQuality = videojs.Youtube.convertQualityName(
          e.options().quality
        )),
          (this.playerEl_ = document.getElementById(e.id())),
          (this.playerEl_.className += " vjs-youtube"),
          (this.qualityButton = document.createElement("div")),
          this.qualityButton.setAttribute(
            "class",
            "vjs-quality-button vjs-menu-button vjs-control"
          ),
          this.qualityButton.setAttribute("tabindex", 0);
        var o = document.createElement("div");
        o.setAttribute("class", "vjs-control-content"),
          this.qualityButton.appendChild(o),
          (this.qualityTitle = document.createElement("span")),
          this.qualityTitle.setAttribute("class", "vjs-control-text"),
          o.appendChild(this.qualityTitle),
          "undefined" !== e.options().quality &&
            l(this.qualityTitle, e.options().quality || "auto");
        var s = document.createElement("div");
        if (
          (s.setAttribute("class", "vjs-menu"),
          o.appendChild(s),
          (this.qualityMenuContent = document.createElement("ul")),
          this.qualityMenuContent.setAttribute("class", "vjs-menu-content"),
          s.appendChild(this.qualityMenuContent),
          (this.id_ = this.player_.id() + "_youtube_api"),
          (this.el_ = videojs.Component.prototype.createEl("iframe", {
            id: this.id_,
            className: "vjs-tech",
            scrolling: "no",
            marginWidth: 0,
            marginHeight: 0,
            frameBorder: 0,
          })),
          this.el_.setAttribute("allowFullScreen", ""),
          this.playerEl_.insertBefore(this.el_, this.playerEl_.firstChild),
          /MSIE (\d+\.\d+);/.test(navigator.userAgent))
        ) {
          var r = Number(RegExp.$1);
          this.addIframeBlocker(r);
        } else
          /(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent) ||
            ((this.el_.className += " onDesktop"), this.addIframeBlocker());
        this.parseSrc(e.options().src),
          (this.playOnReady =
            this.player_.options().autoplay && this.playVideoIsAllowed),
          (this.forceSSL = !(
            "undefined" != typeof this.player_.options().forceSSL &&
            !0 !== this.player_.options().forceSSL
          )),
          (this.forceHTML5 = !(
            "undefined" != typeof this.player_.options().forceHTML5 &&
            !0 !== this.player_.options().forceHTML5
          )),
          this.updateIframeSrc();
        var a = this;
        e.ready(function () {
          if (a.player_.options().controlBar) {
            var t = a.playerEl_.querySelectorAll(".vjs-control-bar")[0];
            t && t.appendChild(a.qualityButton);
          }
          a.playOnReady &&
            !a.player_.options().ytcontrols &&
            ("undefined" != typeof a.player_.loadingSpinner &&
              a.player_.loadingSpinner.show(),
            "undefined" != typeof a.player_.bigPlayButton &&
              a.player_.bigPlayButton.hide()),
            e.trigger("loadstart");
        }),
          this.on("dispose", function () {
            this.ytplayer && this.ytplayer.destroy(),
              this.player_.options().ytcontrols ||
                this.player_.off("waiting", this.bindedWaiting),
              (this.playerEl_.querySelectorAll(
                ".vjs-poster"
              )[0].style.backgroundImage = "none"),
              this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
              this.qualityButton.parentNode &&
                this.qualityButton.parentNode.removeChild(this.qualityButton),
              "undefined" != typeof this.player_.loadingSpinner &&
                this.player_.loadingSpinner.hide(),
              "undefined" != typeof this.player_.bigPlayButton &&
                this.player_.bigPlayButton.hide(),
              this.iframeblocker &&
                this.playerEl_.removeChild(this.iframeblocker);
          });
      },
    })),
      (videojs.Youtube.prototype.updateIframeSrc = function () {
        var t = {
          enablejsapi: 1,
          iv_load_policy: 3,
          playerapiid: this.id(),
          disablekb: 1,
          wmode: "transparent",
          controls: this.player_.options().ytcontrols ? 1 : 0,
          html5: this.player_.options().forceHTML5 ? 1 : null,
          playsinline: this.player_.options().playsInline ? 1 : 0,
          showinfo: 0,
          rel: 0,
          autoplay: this.playOnReady ? 1 : 0,
          loop: this.player_.options().loop ? 1 : 0,
          list: this.playlistId,
          vq: this.userQuality,
          origin: window.location.protocol + "//" + window.location.host,
        };
        for (var e in ("file:" === window.location.protocol && delete t.origin,
        t))
          !t.hasOwnProperty(e) ||
            ("undefined" != typeof t[e] && null !== t[e]) ||
            delete t[e];
        var n = this;
        if (this.videoId) {
          if (
            ((this.el_.src =
              (this.forceSSL || "file:" === window.location.protocol
                ? "https:"
                : window.location.protocol) +
              "//www.youtube.com/embed/" +
              this.videoId +
              "?" +
              videojs.Youtube.makeQueryString(t)),
            this.player_.options().ytcontrols
              ? this.player_.controls(!1)
              : (void 0 !== this.player_.poster() &&
                  0 !== this.player_.poster().length) ||
                setTimeout(function () {
                  n.player_.poster(
                    "https://img.youtube.com/vi/" + n.videoId + "/0.jpg"
                  );
                }, 100),
            (this.bindedWaiting = function () {
              n.onWaiting();
            }),
            this.player_.on("waiting", this.bindedWaiting),
            videojs.Youtube.apiReady)
          )
            this.loadYoutube();
          else if (
            (videojs.Youtube.loadingQueue.push(this),
            !videojs.Youtube.apiLoading)
          ) {
            var i = document.createElement("script");
            (i.onerror = function (t) {
              n.onError(t);
            }),
              (i.src =
                this.forceSSL || "file:" === window.location.protocol
                  ? "https://www.youtube.com/iframe_api"
                  : "//www.youtube.com/iframe_api");
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(i, o), (videojs.Youtube.apiLoading = !0);
          }
        } else
          (this.el_.src = "about:blank"),
            setTimeout(function () {
              n.triggerReady();
            }, 500);
      }),
      (videojs.Youtube.prototype.onWaiting = function () {
        "undefined" != typeof this.player_.bigPlayButton &&
          this.player_.bigPlayButton.hide();
      }),
      (videojs.Youtube.prototype.addIframeBlocker = function (t) {
        (this.iframeblocker = videojs.Component.prototype.createEl("div")),
          (this.iframeblocker.className = "iframeblocker"),
          (this.iframeblocker.style.position = "absolute"),
          (this.iframeblocker.style.left = 0),
          (this.iframeblocker.style.right = 0),
          (this.iframeblocker.style.top = 0),
          (this.iframeblocker.style.bottom = 0),
          t && t < 9
            ? (this.iframeblocker.style.opacity = 0.01)
            : (this.iframeblocker.style.background =
                "rgba(255, 255, 255, 0.01)");
        var e = this;
        s(this.iframeblocker, "mousemove", function (t) {
          e.player_.userActive() || e.player_.userActive(!0),
            t.stopPropagation(),
            t.preventDefault();
        }),
          s(this.iframeblocker, "click", function () {
            e.paused() ? e.play() : e.pause();
          }),
          this.playerEl_.insertBefore(this.iframeblocker, this.el_.nextSibling);
      }),
      (videojs.Youtube.prototype.parseSrc = function (t) {
        if ((this.srcVal = t)) {
          var e =
              /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
            n = t.match(e);
          n && 11 === n[2].length
            ? (this.videoId = n[2])
            : (this.videoId = null);
          var i = /[?&]list=([^#\&\?]+)/;
          null !== (n = t.match(i)) && 1 < n.length
            ? (this.playlistId = n[1])
            : this.playlistId && delete this.playlistId;
          var o = /[?&]vq=([^#\&\?]+)/;
          null !== (n = t.match(o)) &&
            1 < n.length &&
            ((this.userQuality = n[1]),
            l(
              this.qualityTitle,
              videojs.Youtube.parseQualityName(this.userQuality)
            ));
        }
      }),
      (videojs.Youtube.prototype.src = function (t) {
        if (void 0 !== t) {
          if ((this.parseSrc(t), "about:blank" === this.el_.src))
            return void this.updateIframeSrc();
          delete this.defaultQuality,
            null !== this.videoId &&
              (this.player_.options().autoplay && this.playVideoIsAllowed
                ? this.ytplayer.loadVideoById({
                    videoId: this.videoId,
                    suggestedQuality: this.userQuality,
                  })
                : this.ytplayer.cueVideoById({
                    videoId: this.videoId,
                    suggestedQuality: this.userQuality,
                  }),
              (this.playerEl_.querySelectorAll(
                ".vjs-poster"
              )[0].style.backgroundImage =
                "url(https://img.youtube.com/vi/" + this.videoId + "/0.jpg)"),
              this.player_.poster(
                "https://img.youtube.com/vi/" + this.videoId + "/0.jpg"
              ));
        }
        return this.srcVal;
      }),
      (videojs.Youtube.prototype.load = function () {}),
      (videojs.Youtube.prototype.play = function () {
        null !== this.videoId &&
          (this.player_.options().ytcontrols || this.player_.trigger("waiting"),
          this.isReady_
            ? (this.ytplayer.setVolume(100 * this.player_.volume()),
              0 < this.volumeVal
                ? this.ytplayer.unMute()
                : this.ytplayer.mute(),
              this.playVideoIsAllowed && this.ytplayer.playVideo())
            : (this.playOnReady = !0));
      }),
      (videojs.Youtube.prototype.pause = function () {
        this.ytplayer.pauseVideo();
      }),
      (videojs.Youtube.prototype.paused = function () {
        return (
          !this.ytplayer ||
          (this.lastState !== YT.PlayerState.PLAYING &&
            this.lastState !== YT.PlayerState.BUFFERING)
        );
      }),
      (videojs.Youtube.prototype.currentTime = function () {
        return this.ytplayer && this.ytplayer.getCurrentTime
          ? this.ytplayer.getCurrentTime()
          : 0;
      }),
      (videojs.Youtube.prototype.setCurrentTime = function (t) {
        this.ytplayer.seekTo(t, !0),
          this.player_.trigger("timeupdate"),
          this.player_.trigger("seeking"),
          (this.isSeeking = !0);
      }),
      (videojs.Youtube.prototype.duration = function () {
        return this.ytplayer && this.ytplayer.getDuration
          ? this.ytplayer.getDuration()
          : 0;
      }),
      (videojs.Youtube.prototype.currentSrc = function () {
        return this.srcVal;
      }),
      (videojs.Youtube.prototype.ended = function () {
        return !!this.ytplayer && this.lastState === YT.PlayerState.ENDED;
      }),
      (videojs.Youtube.prototype.volume = function () {
        return (
          this.ytplayer &&
            isNaN(this.volumeVal) &&
            ((this.volumeVal = this.ytplayer.getVolume() / 100),
            this.player_.volume(this.volumeVal)),
          this.volumeVal
        );
      }),
      (videojs.Youtube.prototype.setVolume = function (t) {
        void 0 !== t &&
          t !== this.volumeVal &&
          (this.ytplayer.setVolume(100 * t),
          (this.volumeVal = t),
          this.player_.trigger("volumechange"));
      }),
      (videojs.Youtube.prototype.muted = function () {
        return this.mutedVal;
      }),
      (videojs.Youtube.prototype.setMuted = function (t) {
        t
          ? ((this.storedVolume = this.volumeVal),
            this.ytplayer.mute(),
            this.player_.volume(0))
          : (this.ytplayer.unMute(), this.player_.volume(this.storedVolume)),
          (this.mutedVal = t),
          this.player_.trigger("volumechange");
      }),
      (videojs.Youtube.prototype.buffered = function () {
        if (this.ytplayer && this.ytplayer.getVideoBytesLoaded) {
          var t = this.ytplayer.getVideoBytesLoaded(),
            e = this.ytplayer.getVideoBytesTotal();
          if (!t || !e) return 0;
          var n = this.ytplayer.getDuration(),
            i = (t / e) * n,
            o = (this.ytplayer.getVideoStartBytes() / e) * n;
          return videojs.createTimeRange(o, o + i);
        }
        return videojs.createTimeRange(0, 0);
      }),
      (videojs.Youtube.prototype.supportsFullScreen = function () {
        return !(
          "function" != typeof this.el_.webkitEnterFullScreen ||
          (!/Android/.test(videojs.USER_AGENT) &&
            /Chrome|Mac OS X 10.5/.test(videojs.USER_AGENT))
        );
      }),
      (videojs.Youtube.isSupported = function () {
        return !0;
      }),
      (videojs.Youtube.canPlaySource = function (t) {
        return "video/youtube" === t.type;
      }),
      (videojs.Youtube.canControlVolume = function () {
        return !0;
      }),
      (videojs.Youtube.loadingQueue = []),
      (videojs.Youtube.prototype.loadYoutube = function () {
        (this.ytplayer = new YT.Player(this.id_, {
          events: {
            onReady: function (t) {
              t.target.vjsTech.onReady();
            },
            onStateChange: function (t) {
              t.target.vjsTech.onStateChange(t.data);
            },
            onPlaybackQualityChange: function (t) {
              t.target.vjsTech.onPlaybackQualityChange(t.data);
            },
            onError: function (t) {
              t.target.vjsTech.onError(t.data);
            },
          },
        })),
          (this.ytplayer.vjsTech = this);
      }),
      (videojs.Youtube.makeQueryString = function (t) {
        var e = ["modestbranding=1"];
        for (var n in t) t.hasOwnProperty(n) && e.push(n + "=" + t[n]);
        return e.join("&");
      }),
      (window.onYouTubeIframeAPIReady = function () {
        for (var t; (t = videojs.Youtube.loadingQueue.shift()); )
          t.loadYoutube();
        (videojs.Youtube.loadingQueue = []), (videojs.Youtube.apiReady = !0);
      }),
      (videojs.Youtube.prototype.onReady = function () {
        (this.isReady_ = !0),
          this.triggerReady(),
          this.player_.trigger("loadedmetadata"),
          this.player_.trigger("durationchange"),
          this.player_.trigger("timeupdate"),
          "undefined" == typeof this.player_.loadingSpinner ||
            this.isIos ||
            this.isAndroid ||
            this.player_.loadingSpinner.hide(),
          this.player_.options().muted && this.setMuted(!0),
          this.playOnReady && ((this.playOnReady = !1), this.play());
      }),
      (videojs.Youtube.prototype.updateQualities = function () {
        function t(t) {
          s(t, "click", function () {
            var t = this.getAttribute("data-val");
            n.ytplayer.setPlaybackQuality(t),
              (n.userQuality = t),
              l(n.qualityTitle, videojs.Youtube.parseQualityName(t));
            var e = n.qualityMenuContent.querySelector(".vjs-selected");
            e && videojs.Youtube.removeClass(e, "vjs-selected"),
              videojs.Youtube.addClass(this, "vjs-selected");
          });
        }
        var e = this.ytplayer.getAvailableQualityLevels(),
          n = this;
        if (
          (e.indexOf(this.userQuality) < 0 &&
            l(
              n.qualityTitle,
              videojs.Youtube.parseQualityName(this.defaultQuality)
            ),
          0 === e.length)
        )
          this.qualityButton.style.display = "none";
        else {
          for (
            this.qualityButton.style.display = "";
            this.qualityMenuContent.hasChildNodes();

          )
            this.qualityMenuContent.removeChild(
              this.qualityMenuContent.lastChild
            );
          for (var i = 0; i < e.length; ++i) {
            var o = document.createElement("li");
            o.setAttribute("class", "vjs-menu-item"),
              l(o, videojs.Youtube.parseQualityName(e[i])),
              o.setAttribute("data-val", e[i]),
              e[i] === this.quality &&
                videojs.Youtube.addClass(o, "vjs-selected"),
              t(o),
              this.qualityMenuContent.appendChild(o);
          }
        }
      }),
      (videojs.Youtube.prototype.onStateChange = function (t) {
        if (t !== this.lastState) {
          switch (t) {
            case -1:
              this.player_.trigger("durationchange");
              break;
            case YT.PlayerState.ENDED:
              this.player_.options().ytcontrols ||
                ((this.playerEl_.querySelectorAll(
                  ".vjs-poster"
                )[0].style.display = "block"),
                "undefined" != typeof this.player_.bigPlayButton &&
                  this.player_.bigPlayButton.show()),
                this.player_.trigger("ended");
              break;
            case YT.PlayerState.PLAYING:
              (this.playerEl_.querySelectorAll(".vjs-poster")[0].style.display =
                ""),
                (this.playVideoIsAllowed = !0),
                this.updateQualities(),
                this.player_.trigger("timeupdate"),
                this.player_.trigger("durationchange"),
                this.player_.trigger("playing"),
                this.player_.trigger("play"),
                this.isSeeking &&
                  (this.player_.trigger("seeked"), (this.isSeeking = !1));
              break;
            case YT.PlayerState.PAUSED:
              this.player_.trigger("pause");
              break;
            case YT.PlayerState.BUFFERING:
              this.player_.trigger("timeupdate"),
                this.player_.options().ytcontrols ||
                  this.player_.trigger("waiting");
              break;
            case YT.PlayerState.CUED:
          }
          this.lastState = t;
        }
      }),
      (videojs.Youtube.convertQualityName = function (t) {
        switch (t) {
          case "144p":
            return "tiny";
          case "240p":
            return "small";
          case "360p":
            return "medium";
          case "480p":
            return "large";
          case "720p":
            return "hd720";
          case "1080p":
            return "hd1080";
        }
        return "auto";
      }),
      (videojs.Youtube.parseQualityName = function (t) {
        switch (t) {
          case "tiny":
            return "144p";
          case "small":
            return "240p";
          case "medium":
            return "360p";
          case "large":
            return "480p";
          case "hd720":
            return "720p";
          case "hd1080":
            return "1080p";
        }
        return "auto";
      }),
      (videojs.Youtube.prototype.onPlaybackQualityChange = function (t) {
        if (
          "undefined" != typeof this.defaultQuality ||
          ((this.defaultQuality = t), "undefined" == typeof this.userQuality)
        ) {
          switch (
            ((this.quality = t),
            l(this.qualityTitle, videojs.Youtube.parseQualityName(t)),
            t)
          ) {
            case "medium":
              (this.player_.videoWidth = 480), (this.player_.videoHeight = 360);
              break;
            case "large":
              (this.player_.videoWidth = 640), (this.player_.videoHeight = 480);
              break;
            case "hd720":
              (this.player_.videoWidth = 960), (this.player_.videoHeight = 720);
              break;
            case "hd1080":
              (this.player_.videoWidth = 1440),
                (this.player_.videoHeight = 1080);
              break;
            case "highres":
              (this.player_.videoWidth = 1920),
                (this.player_.videoHeight = 1080);
              break;
            case "small":
              (this.player_.videoWidth = 320), (this.player_.videoHeight = 240);
              break;
            case "tiny":
              (this.player_.videoWidth = 144), (this.player_.videoHeight = 108);
              break;
            default:
              (this.player_.videoWidth = 0), (this.player_.videoHeight = 0);
          }
          this.player_.trigger("ratechange");
        }
      }),
      (videojs.Youtube.prototype.onError = function (t) {
        this.player_.error(t),
          (100 !== t && 101 !== t && 150 !== t) ||
            (this.player_.bigPlayButton.hide(),
            this.player_.loadingSpinner.hide(),
            this.player_.posterImage.hide());
      }),
      (videojs.Youtube.addClass = function (t, e) {
        -1 === (" " + t.className + " ").indexOf(" " + e + " ") &&
          (t.className = "" === t.className ? e : t.className + " " + e);
      }),
      (videojs.Youtube.removeClass = function (t, e) {
        var n, i;
        if (-1 !== t.className.indexOf(e)) {
          for (i = (n = t.className.split(" ")).length - 1; 0 <= i; i--)
            n[i] === e && n.splice(i, 1);
          t.className = n.join(" ");
        }
      });
    var t = document.createElement("style"),
      e =
        " .vjs-youtube .vjs-poster { background-size: 100%!important; }.vjs-youtube .vjs-poster, .vjs-youtube .vjs-loading-spinner, .vjs-youtube .vjs-big-play-button, .vjs-youtube .vjs-text-track-display{ pointer-events: none !important; }.vjs-youtube.vjs-user-active .iframeblocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-tech.onDesktop { pointer-events: none; }.vjs-quality-button > div:first-child > span:first-child { position:relative;top:7px }";
    t.setAttribute("type", "text/css"),
      document.getElementsByTagName("head")[0].appendChild(t),
      t.styleSheet
        ? (t.styleSheet.cssText = e)
        : t.appendChild(document.createTextNode(e)),
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (t, e) {
          var n = this.length >>> 0,
            i = Number(e) || 0;
          for (
            (i = i < 0 ? Math.ceil(i) : Math.floor(i)) < 0 && (i += n);
            i < n;
            i++
          )
            if (i in this && this[i] === t) return i;
          return -1;
        });
  })(),
  (function () {
    "use strict";
    function e(t) {
      if (!t) throw new Error("No options passed to Waypoint constructor");
      if (!t.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!t.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + n),
        (this.options = e.Adapter.extend({}, e.defaults, t)),
        (this.element = this.options.element),
        (this.adapter = new e.Adapter(this.element)),
        (this.callback = t.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = e.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = e.Context.findOrCreateByElement(this.options.context)),
        e.offsetAliases[this.options.offset] &&
          (this.options.offset = e.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (s[this.key] = this),
        (n += 1);
    }
    var n = 0,
      s = {};
    (e.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (e.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (e.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete s[this.key];
      }),
      (e.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (e.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (e.prototype.next = function () {
        return this.group.next(this);
      }),
      (e.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (e.invokeAll = function (t) {
        var e = [];
        for (var n in s) e.push(s[n]);
        for (var i = 0, o = e.length; i < o; i++) e[i][t]();
      }),
      (e.destroyAll = function () {
        e.invokeAll("destroy");
      }),
      (e.disableAll = function () {
        e.invokeAll("disable");
      }),
      (e.enableAll = function () {
        e.invokeAll("enable");
      }),
      (e.refreshAll = function () {
        e.Context.refreshAll();
      }),
      (e.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (e.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (e.adapters = []),
      (e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (e.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = e);
  })(),
  (function () {
    "use strict";
    function e(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function n(t) {
      (this.element = t),
        (this.Adapter = s.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      s = window.Waypoint,
      t = window.onload;
    (n.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (n.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (n.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), s.requestAnimationFrame(t));
        });
      }),
      (n.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || s.isTouch) &&
            ((e.didScroll = !0), s.requestAnimationFrame(t));
        });
      }),
      (n.prototype.handleResize = function () {
        s.Context.refreshAll();
      }),
      (n.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var n in e) {
          var i = e[n],
            o = i.newScroll > i.oldScroll ? i.forward : i.backward;
          for (var s in this.waypoints[n]) {
            var r = this.waypoints[n][s],
              a = i.oldScroll < r.triggerPoint,
              l = i.newScroll >= r.triggerPoint;
            ((a && l) || (!a && !l)) &&
              (r.queueTrigger(o), (t[r.group.id] = r.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (n.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? s.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (n.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (n.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? s.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (n.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
        for (var i = 0, o = t.length; i < o; i++) t[i].destroy();
      }),
      (n.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          n = this.adapter.offset(),
          i = {};
        for (var o in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : n.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : n.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var s = t[o];
          for (var r in this.waypoints[o]) {
            var a,
              l,
              c,
              u,
              d = this.waypoints[o][r],
              p = d.options.offset,
              h = d.triggerPoint,
              f = 0,
              v = null == h;
            d.element !== d.element.window &&
              (f = d.adapter.offset()[s.offsetProp]),
              "function" == typeof p
                ? (p = p.apply(d))
                : "string" == typeof p &&
                  ((p = parseFloat(p)),
                  -1 < d.options.offset.indexOf("%") &&
                    (p = Math.ceil((s.contextDimension * p) / 100))),
              (a = s.contextScroll - s.contextOffset),
              (d.triggerPoint = f + a - p),
              (l = h < s.oldScroll),
              (c = d.triggerPoint >= s.oldScroll),
              (u = !l && !c),
              !v && l && c
                ? (d.queueTrigger(s.backward), (i[d.group.id] = d.group))
                : !v && u
                ? (d.queueTrigger(s.forward), (i[d.group.id] = d.group))
                : v &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (i[d.group.id] = d.group));
          }
        }
        for (var m in i) i[m].flushTriggers();
        return this;
      }),
      (n.findOrCreateByElement = function (t) {
        return n.findByElement(t) || new n(t);
      }),
      (n.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (n.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        t && t(), n.refreshAll();
      }),
      (s.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (s.Context = n);
  })(),
  (function () {
    "use strict";
    function r(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function a(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function e(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (n[this.axis][this.name] = this);
    }
    var n = { vertical: {}, horizontal: {} },
      i = window.Waypoint;
    (e.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (e.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (e.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
          var e = this.triggerQueues[t],
            n = "up" === t || "left" === t;
          e.sort(n ? a : r);
          for (var i = 0, o = e.length; i < o; i += 1) {
            var s = e[i];
            (s.options.continuous || i === e.length - 1) && s.trigger([t]);
          }
        }
        this.clearTriggerQueues();
      }),
      (e.prototype.next = function (t) {
        this.waypoints.sort(r);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1];
      }),
      (e.prototype.previous = function (t) {
        this.waypoints.sort(r);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null;
      }),
      (e.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (e.prototype.remove = function (t) {
        var e = i.Adapter.inArray(t, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1);
      }),
      (e.prototype.first = function () {
        return this.waypoints[0];
      }),
      (e.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (e.findOrCreate = function (t) {
        return n[t.axis][t.name] || new e(t);
      }),
      (i.Group = e);
  })(),
  (function () {
    "use strict";
    function n(t) {
      this.$element = i(t);
    }
    var i = window.jQuery,
      t = window.Waypoint;
    i.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (t, e) {
        n.prototype[e] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[e].apply(this.$element, t);
        };
      }
    ),
      i.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
        n[e] = i[e];
      }),
      t.adapters.push({ name: "jquery", Adapter: n }),
      (t.Adapter = n);
  })(),
  (function () {
    "use strict";
    function t(o) {
      return function (t, e) {
        var n = [],
          i = t;
        return (
          o.isFunction(arguments[0]) &&
            ((i = o.extend({}, e)).handler = arguments[0]),
          this.each(function () {
            var t = o.extend({}, i, { element: this });
            "string" == typeof t.context &&
              (t.context = o(this).closest(t.context)[0]),
              n.push(new s(t));
          }),
          n
        );
      };
    }
    var s = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })(),
  (function () {
    "use strict";
    function e(t) {
      (this.options = n.extend({}, o.defaults, e.defaults, t)),
        (this.element = this.options.element),
        (this.$element = n(this.element)),
        this.createWrapper(),
        this.createWaypoint();
    }
    var n = window.jQuery,
      o = window.Waypoint;
    (e.prototype.createWaypoint = function () {
      var i = this.options.handler;
      this.waypoint = new o(
        n.extend({}, this.options, {
          element: this.wrapper,
          handler: n.proxy(function (t) {
            var e = -1 < this.options.direction.indexOf(t),
              n = e ? this.$element.outerHeight(!0) : "";
            this.$wrapper.height(n),
              this.$element.toggleClass(this.options.stuckClass, e),
              i && i.call(this, t);
          }, this),
        })
      );
    }),
      (e.prototype.createWrapper = function () {
        this.$element.wrap(this.options.wrapper),
          (this.$wrapper = this.$element.parent()),
          (this.wrapper = this.$wrapper[0]);
      }),
      (e.prototype.destroy = function () {
        this.$element.parent()[0] === this.wrapper &&
          (this.waypoint.destroy(),
          this.$element.removeClass(this.options.stuckClass).unwrap());
      }),
      (e.defaults = {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: "stuck",
        direction: "down right",
      }),
      (o.Sticky = e);
  })(),
  (function (t, e, n, i, o, s, r) {
    (t.GoogleAnalyticsObject = o),
      (t[o] =
        t[o] ||
        function () {
          (t[o].q = t[o].q || []).push(arguments);
        }),
      (t[o].l = 1 * new Date()),
      (s = e.createElement(n)),
      (r = e.getElementsByTagName(n)[0]),
      (s.async = 1),
      (s.src = i),
      r.parentNode.insertBefore(s, r);
  })(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "ga"
  ),
  ga("create", "UA-37477022-13", "auto"),
  ga("send", "pageview"),
  (function (h, f, v) {
    function m(t) {
      return t;
    }
    function g(t) {
      return e(decodeURIComponent(t.replace(n, " ")));
    }
    function e(t) {
      return (
        0 === t.indexOf('"') &&
          (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
        t
      );
    }
    function y(t) {
      return b.json ? JSON.parse(t) : t;
    }
    var n = /\+/g,
      b = (h.cookie = function (t, e, n) {
        if (e !== v) {
          if (
            ((n = h.extend({}, b.defaults, n)),
            null === e && (n.expires = -1),
            "number" == typeof n.expires)
          ) {
            var i = n.expires,
              o = (n.expires = new Date());
            o.setDate(o.getDate() + i);
          }
          return (
            (e = b.json ? JSON.stringify(e) : String(e)),
            (f.cookie = [
              encodeURIComponent(t),
              "=",
              b.raw ? e : encodeURIComponent(e),
              n.expires ? "; expires=" + n.expires.toUTCString() : "",
              n.path ? "; path=" + n.path : "",
              n.domain ? "; domain=" + n.domain : "",
              n.secure ? "; secure" : "",
            ].join(""))
          );
        }
        for (
          var s = b.raw ? m : g,
            r = f.cookie.split("; "),
            a = t ? null : {},
            l = 0,
            c = r.length;
          l < c;
          l++
        ) {
          var u = r[l].split("="),
            d = s(u.shift()),
            p = s(u.join("="));
          if (t && t === d) {
            a = y(p);
            break;
          }
          t || (a[d] = y(p));
        }
        return a;
      });
    (b.defaults = {}),
      (h.removeCookie = function (t, e) {
        return null !== h.cookie(t) && (h.cookie(t, null, e), !0);
      });
  })(jQuery, document),
  $(document).ready(function () {
    $(".cookies-eu-ok").click(function (t) {
      t.preventDefault(),
        $.cookie("cookie_eu_consented", "true", { path: "/", expires: 365 }),
        $(".cookies-eu").remove();
    });
  }),
  (function (u) {
    var d,
      i,
      p,
      h,
      o,
      f,
      e,
      l = "Close",
      c = "BeforeClose",
      n = "AfterClose",
      s = "BeforeAppend",
      v = "MarkupParse",
      m = "Open",
      r = "Change",
      a = "mfp",
      g = "." + a,
      y = "mfp-ready",
      b = "mfp-removing",
      j = "mfp-prevent-close",
      t = function () {},
      w = !!window.jQuery,
      T = u(window),
      _ = function (t, e) {
        d.ev.on(a + t + g, e);
      },
      x = function (t, e, n, i) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + t),
          n && (o.innerHTML = n),
          i ? e && e.appendChild(o) : ((o = u(o)), e && o.appendTo(e)),
          o
        );
      },
      C = function (t, e) {
        d.ev.triggerHandler(a + t, e),
          d.st.callbacks &&
            ((t = t.charAt(0).toLowerCase() + t.slice(1)),
            d.st.callbacks[t] &&
              d.st.callbacks[t].apply(d, u.isArray(e) ? e : [e]));
      },
      k = function (t) {
        return (
          (t === e && d.currTemplate.closeBtn) ||
            ((d.currTemplate.closeBtn = u(
              d.st.closeMarkup.replace("%title%", d.st.tClose)
            )),
            (e = t)),
          d.currTemplate.closeBtn
        );
      },
      S = function () {
        u.magnificPopup.instance ||
          ((d = new t()).init(), (u.magnificPopup.instance = d));
      },
      E = function () {
        var t = document.createElement("p").style,
          e = ["ms", "O", "Moz", "Webkit"];
        if (t.transition !== undefined) return !0;
        for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
        return !1;
      };
    (t.prototype = {
      constructor: t,
      init: function () {
        var t = navigator.appVersion;
        (d.isIE7 = -1 !== t.indexOf("MSIE 7.")),
          (d.isIE8 = -1 !== t.indexOf("MSIE 8.")),
          (d.isLowIE = d.isIE7 || d.isIE8),
          (d.isAndroid = /android/gi.test(t)),
          (d.isIOS = /iphone|ipad|ipod/gi.test(t)),
          (d.supportsTransition = E()),
          (d.probablyMobile =
            d.isAndroid ||
            d.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (h = u(document)),
          (d.popupsCache = {});
      },
      open: function (t) {
        var e;
        if ((p || (p = u(document.body)), !1 === t.isObj)) {
          (d.items = t.items.toArray()), (d.index = 0);
          var n,
            i = t.items;
          for (e = 0; e < i.length; e++)
            if (((n = i[e]).parsed && (n = n.el[0]), n === t.el[0])) {
              d.index = e;
              break;
            }
        } else
          (d.items = u.isArray(t.items) ? t.items : [t.items]),
            (d.index = t.index || 0);
        if (!d.isOpen) {
          (d.types = []),
            (f = ""),
            t.mainEl && t.mainEl.length ? (d.ev = t.mainEl.eq(0)) : (d.ev = h),
            t.key
              ? (d.popupsCache[t.key] || (d.popupsCache[t.key] = {}),
                (d.currTemplate = d.popupsCache[t.key]))
              : (d.currTemplate = {}),
            (d.st = u.extend(!0, {}, u.magnificPopup.defaults, t)),
            (d.fixedContentPos =
              "auto" === d.st.fixedContentPos
                ? !d.probablyMobile
                : d.st.fixedContentPos),
            d.st.modal &&
              ((d.st.closeOnContentClick = !1),
              (d.st.closeOnBgClick = !1),
              (d.st.showCloseBtn = !1),
              (d.st.enableEscapeKey = !1)),
            d.bgOverlay ||
              ((d.bgOverlay = x("bg").on("click" + g, function () {
                d.close();
              })),
              (d.wrap = x("wrap")
                .attr("tabindex", -1)
                .on("click" + g, function (t) {
                  d._checkIfClose(t.target) && d.close();
                })),
              (d.container = x("container", d.wrap))),
            (d.contentContainer = x("content")),
            d.st.preloader &&
              (d.preloader = x("preloader", d.container, d.st.tLoading));
          var o = u.magnificPopup.modules;
          for (e = 0; e < o.length; e++) {
            var s = o[e];
            (s = s.charAt(0).toUpperCase() + s.slice(1)), d["init" + s].call(d);
          }
          C("BeforeOpen"),
            d.st.showCloseBtn &&
              (d.st.closeBtnInside
                ? (_(v, function (t, e, n, i) {
                    n.close_replaceWith = k(i.type);
                  }),
                  (f += " mfp-close-btn-in"))
                : d.wrap.append(k())),
            d.st.alignTop && (f += " mfp-align-top"),
            d.fixedContentPos
              ? d.wrap.css({
                  overflow: d.st.overflowY,
                  overflowX: "hidden",
                  overflowY: d.st.overflowY,
                })
              : d.wrap.css({ top: T.scrollTop(), position: "absolute" }),
            (!1 === d.st.fixedBgPos ||
              ("auto" === d.st.fixedBgPos && !d.fixedContentPos)) &&
              d.bgOverlay.css({ height: h.height(), position: "absolute" }),
            d.st.enableEscapeKey &&
              h.on("keyup" + g, function (t) {
                27 === t.keyCode && d.close();
              }),
            T.on("resize" + g, function () {
              d.updateSize();
            }),
            d.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && d.wrap.addClass(f);
          var r = (d.wH = T.height()),
            a = {};
          if (d.fixedContentPos && d._hasScrollBar(r)) {
            var l = d._getScrollbarSize();
            l && (a.marginRight = l);
          }
          d.fixedContentPos &&
            (d.isIE7
              ? u("body, html").css("overflow", "hidden")
              : (a.overflow = "hidden"));
          var c = d.st.mainClass;
          return (
            d.isIE7 && (c += " mfp-ie7"),
            c && d._addClassToMFP(c),
            d.updateItemHTML(),
            C("BuildControls"),
            u("html").css(a),
            d.bgOverlay.add(d.wrap).prependTo(d.st.prependTo || p),
            (d._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              d.content
                ? (d._addClassToMFP(y), d._setFocus())
                : d.bgOverlay.addClass(y),
                h.on("focusin" + g, d._onFocusIn);
            }, 16),
            (d.isOpen = !0),
            d.updateSize(r),
            C(m),
            t
          );
        }
        d.updateItemHTML();
      },
      close: function () {
        d.isOpen &&
          (C(c),
          (d.isOpen = !1),
          d.st.removalDelay && !d.isLowIE && d.supportsTransition
            ? (d._addClassToMFP(b),
              setTimeout(function () {
                d._close();
              }, d.st.removalDelay))
            : d._close());
      },
      _close: function () {
        C(l);
        var t = b + " " + y + " ";
        if (
          (d.bgOverlay.detach(),
          d.wrap.detach(),
          d.container.empty(),
          d.st.mainClass && (t += d.st.mainClass + " "),
          d._removeClassFromMFP(t),
          d.fixedContentPos)
        ) {
          var e = { marginRight: "" };
          d.isIE7 ? u("body, html").css("overflow", "") : (e.overflow = ""),
            u("html").css(e);
        }
        h.off("keyup" + g + " focusin" + g),
          d.ev.off(g),
          d.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          d.bgOverlay.attr("class", "mfp-bg"),
          d.container.attr("class", "mfp-container"),
          !d.st.showCloseBtn ||
            (d.st.closeBtnInside && !0 !== d.currTemplate[d.currItem.type]) ||
            (d.currTemplate.closeBtn && d.currTemplate.closeBtn.detach()),
          d._lastFocusedEl && u(d._lastFocusedEl).focus(),
          (d.currItem = null),
          (d.content = null),
          (d.currTemplate = null),
          (d.prevHeight = 0),
          C(n);
      },
      updateSize: function (t) {
        if (d.isIOS) {
          var e = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * e;
          d.wrap.css("height", n), (d.wH = n);
        } else d.wH = t || T.height();
        d.fixedContentPos || d.wrap.css("height", d.wH), C("Resize");
      },
      updateItemHTML: function () {
        var t = d.items[d.index];
        d.contentContainer.detach(),
          d.content && d.content.detach(),
          t.parsed || (t = d.parseEl(d.index));
        var e = t.type;
        if (
          (C("BeforeChange", [d.currItem ? d.currItem.type : "", e]),
          (d.currItem = t),
          !d.currTemplate[e])
        ) {
          var n = !!d.st[e] && d.st[e].markup;
          C("FirstMarkupParse", n), (d.currTemplate[e] = !n || u(n));
        }
        o && o !== t.type && d.container.removeClass("mfp-" + o + "-holder");
        var i = d["get" + e.charAt(0).toUpperCase() + e.slice(1)](
          t,
          d.currTemplate[e]
        );
        d.appendContent(i, e),
          (t.preloaded = !0),
          C(r, t),
          (o = t.type),
          d.container.prepend(d.contentContainer),
          C("AfterChange");
      },
      appendContent: function (t, e) {
        (d.content = t)
          ? d.st.showCloseBtn && d.st.closeBtnInside && !0 === d.currTemplate[e]
            ? d.content.find(".mfp-close").length || d.content.append(k())
            : (d.content = t)
          : (d.content = ""),
          C(s),
          d.container.addClass("mfp-" + e + "-holder"),
          d.contentContainer.append(d.content);
      },
      parseEl: function (t) {
        var e,
          n = d.items[t];
        if (
          (n.tagName
            ? (n = { el: u(n) })
            : ((e = n.type), (n = { data: n, src: n.src })),
          n.el)
        ) {
          for (var i = d.types, o = 0; o < i.length; o++)
            if (n.el.hasClass("mfp-" + i[o])) {
              e = i[o];
              break;
            }
          (n.src = n.el.attr("data-mfp-src")),
            n.src || (n.src = n.el.attr("href"));
        }
        return (
          (n.type = e || d.st.type || "inline"),
          (n.index = t),
          (n.parsed = !0),
          (d.items[t] = n),
          C("ElementParse", n),
          d.items[t]
        );
      },
      addGroup: function (e, n) {
        var t = function (t) {
          (t.mfpEl = this), d._openClick(t, e, n);
        };
        n || (n = {});
        var i = "click.magnificPopup";
        (n.mainEl = e),
          n.items
            ? ((n.isObj = !0), e.off(i).on(i, t))
            : ((n.isObj = !1),
              n.delegate
                ? e.off(i).on(i, n.delegate, t)
                : (n.items = e).off(i).on(i, t));
      },
      _openClick: function (t, e, n) {
        if (
          (n.midClick !== undefined
            ? n.midClick
            : u.magnificPopup.defaults.midClick) ||
          (2 !== t.which && !t.ctrlKey && !t.metaKey)
        ) {
          var i =
            n.disableOn !== undefined
              ? n.disableOn
              : u.magnificPopup.defaults.disableOn;
          if (i)
            if (u.isFunction(i)) {
              if (!i.call(d)) return !0;
            } else if (T.width() < i) return !0;
          t.type && (t.preventDefault(), d.isOpen && t.stopPropagation()),
            (n.el = u(t.mfpEl)),
            n.delegate && (n.items = e.find(n.delegate)),
            d.open(n);
        }
      },
      updateStatus: function (t, e) {
        if (d.preloader) {
          i !== t && d.container.removeClass("mfp-s-" + i),
            e || "loading" !== t || (e = d.st.tLoading);
          var n = { status: t, text: e };
          C("UpdateStatus", n),
            (t = n.status),
            (e = n.text),
            d.preloader.html(e),
            d.preloader.find("a").on("click", function (t) {
              t.stopImmediatePropagation();
            }),
            d.container.addClass("mfp-s-" + t),
            (i = t);
        }
      },
      _checkIfClose: function (t) {
        if (!u(t).hasClass(j)) {
          var e = d.st.closeOnContentClick,
            n = d.st.closeOnBgClick;
          if (e && n) return !0;
          if (
            !d.content ||
            u(t).hasClass("mfp-close") ||
            (d.preloader && t === d.preloader[0])
          )
            return !0;
          if (t === d.content[0] || u.contains(d.content[0], t)) {
            if (e) return !0;
          } else if (n && u.contains(document, t)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        d.bgOverlay.addClass(t), d.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), d.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (d.isIE7 ? h.height() : document.body.scrollHeight) >
          (t || T.height())
        );
      },
      _setFocus: function () {
        (d.st.focus ? d.content.find(d.st.focus).eq(0) : d.wrap).focus();
      },
      _onFocusIn: function (t) {
        if (t.target !== d.wrap[0] && !u.contains(d.wrap[0], t.target))
          return d._setFocus(), !1;
      },
      _parseMarkup: function (o, t, e) {
        var s;
        e.data && (t = u.extend(e.data, t)),
          C(v, [o, t, e]),
          u.each(t, function (t, e) {
            if (e === undefined || !1 === e) return !0;
            if (1 < (s = t.split("_")).length) {
              var n = o.find(g + "-" + s[0]);
              if (0 < n.length) {
                var i = s[1];
                "replaceWith" === i
                  ? n[0] !== e[0] && n.replaceWith(e)
                  : "img" === i
                  ? n.is("img")
                    ? n.attr("src", e)
                    : n.replaceWith(
                        '<img src="' +
                          e +
                          '" class="' +
                          n.attr("class") +
                          '" />'
                      )
                  : n.attr(s[1], e);
              }
            } else o.find(g + "-" + t).html(e);
          });
      },
      _getScrollbarSize: function () {
        if (d.scrollbarSize === undefined) {
          var t = document.createElement("div");
          (t.id = "mfp-sbm"),
            (t.style.cssText =
              "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (d.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return d.scrollbarSize;
      },
    }),
      (u.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (t, e) {
          return (
            S(),
            ((t = t ? u.extend(!0, {}, t) : {}).isObj = !0),
            (t.index = e || 0),
            this.instance.open(t)
          );
        },
        close: function () {
          return u.magnificPopup.instance && u.magnificPopup.instance.close();
        },
        registerModule: function (t, e) {
          e.options && (u.magnificPopup.defaults[t] = e.options),
            u.extend(this.proto, e.proto),
            this.modules.push(t);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&times;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
        },
      }),
      (u.fn.magnificPopup = function (t, e) {
        S();
        var n = u(this);
        if ("string" == typeof t)
          if ("open" === t) {
            var i,
              o = w ? n.data("magnificPopup") : n[0].magnificPopup,
              s = parseInt(e, 10) || 0;
            o.items
              ? (i = o.items[s])
              : ((i = n),
                o.delegate && (i = i.find(o.delegate)),
                (i = i.eq(s))),
              d._openClick({ mfpEl: i }, n, o);
          } else
            d.isOpen && d[t].apply(d, Array.prototype.slice.call(arguments, 1));
        else
          (t = u.extend(!0, {}, t)),
            w ? n.data("magnificPopup", t) : (n[0].magnificPopup = t),
            d.addGroup(n, t);
        return n;
      });
    var A,
      $,
      P,
      M = "inline",
      I = function () {
        P && ($.after(P.addClass(A)).detach(), (P = null));
      };
    u.magnificPopup.registerModule(M, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          d.types.push(M),
            _(l + "." + M, function () {
              I();
            });
        },
        getInline: function (t, e) {
          if ((I(), t.src)) {
            var n = d.st.inline,
              i = u(t.src);
            if (i.length) {
              var o = i[0].parentNode;
              o &&
                o.tagName &&
                ($ || ((A = n.hiddenClass), ($ = x(A)), (A = "mfp-" + A)),
                (P = i.after($).detach().removeClass(A))),
                d.updateStatus("ready");
            } else d.updateStatus("error", n.tNotFound), (i = u("<div>"));
            return (t.inlineElement = i);
          }
          return d.updateStatus("ready"), d._parseMarkup(e, {}, t), e;
        },
      },
    });
    var N,
      D = "ajax",
      O = function () {
        N && p.removeClass(N);
      },
      H = function () {
        O(), d.req && d.req.abort();
      };
    u.magnificPopup.registerModule(D, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          d.types.push(D),
            (N = d.st.ajax.cursor),
            _(l + "." + D, H),
            _("BeforeChange." + D, H);
        },
        getAjax: function (o) {
          N && p.addClass(N), d.updateStatus("loading");
          var t = u.extend(
            {
              url: o.src,
              success: function (t, e, n) {
                var i = { data: t, xhr: n };
                C("ParseAjax", i),
                  d.appendContent(u(i.data), D),
                  (o.finished = !0),
                  O(),
                  d._setFocus(),
                  setTimeout(function () {
                    d.wrap.addClass(y);
                  }, 16),
                  d.updateStatus("ready"),
                  C("AjaxContentAdded");
              },
              error: function () {
                O(),
                  (o.finished = o.loadError = !0),
                  d.updateStatus(
                    "error",
                    d.st.ajax.tError.replace("%url%", o.src)
                  );
              },
            },
            d.st.ajax.settings
          );
          return (d.req = u.ajax(t)), "";
        },
      },
    });
    var L,
      F = function (t) {
        if (t.data && t.data.title !== undefined) return t.data.title;
        var e = d.st.image.titleSrc;
        if (e) {
          if (u.isFunction(e)) return e.call(d, t);
          if (t.el) return t.el.attr(e) || "";
        }
        return "";
      };
    u.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var t = d.st.image,
            e = ".image";
          d.types.push("image"),
            _(m + e, function () {
              "image" === d.currItem.type && t.cursor && p.addClass(t.cursor);
            }),
            _(l + e, function () {
              t.cursor && p.removeClass(t.cursor), T.off("resize" + g);
            }),
            _("Resize" + e, d.resizeImage),
            d.isLowIE && _("AfterChange", d.resizeImage);
        },
        resizeImage: function () {
          var t = d.currItem;
          if (t && t.img && d.st.image.verticalFit) {
            var e = 0;
            d.isLowIE &&
              (e =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", d.wH - e);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            L && clearInterval(L),
            (t.isCheckingImgSize = !1),
            C("ImageHasSize", t),
            t.imgHidden &&
              (d.content && d.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (e) {
          var n = 0,
            i = e.img[0],
            o = function (t) {
              L && clearInterval(L),
                (L = setInterval(function () {
                  0 < i.naturalWidth
                    ? d._onImageHasSize(e)
                    : (200 < n && clearInterval(L),
                      3 === ++n
                        ? o(10)
                        : 40 === n
                        ? o(50)
                        : 100 === n && o(500));
                }, t));
            };
          o(1);
        },
        getImage: function (t, e) {
          var n = 0,
            i = function () {
              t &&
                (t.img[0].complete
                  ? (t.img.off(".mfploader"),
                    t === d.currItem &&
                      (d._onImageHasSize(t), d.updateStatus("ready")),
                    (t.hasSize = !0),
                    (t.loaded = !0),
                    C("ImageLoadComplete"))
                  : ++n < 200
                  ? setTimeout(i, 100)
                  : o());
            },
            o = function () {
              t &&
                (t.img.off(".mfploader"),
                t === d.currItem &&
                  (d._onImageHasSize(t),
                  d.updateStatus("error", s.tError.replace("%url%", t.src))),
                (t.hasSize = !0),
                (t.loaded = !0),
                (t.loadError = !0));
            },
            s = d.st.image,
            r = e.find(".mfp-img");
          if (r.length) {
            var a = document.createElement("img");
            (a.className = "mfp-img"),
              (t.img = u(a).on("load.mfploader", i).on("error.mfploader", o)),
              (a.src = t.src),
              r.is("img") && (t.img = t.img.clone()),
              0 < (a = t.img[0]).naturalWidth
                ? (t.hasSize = !0)
                : a.width || (t.hasSize = !1);
          }
          return (
            d._parseMarkup(e, { title: F(t), img_replaceWith: t.img }, t),
            d.resizeImage(),
            t.hasSize
              ? (L && clearInterval(L),
                t.loadError
                  ? (e.addClass("mfp-loading"),
                    d.updateStatus("error", s.tError.replace("%url%", t.src)))
                  : (e.removeClass("mfp-loading"), d.updateStatus("ready")))
              : (d.updateStatus("loading"),
                (t.loading = !0),
                t.hasSize ||
                  ((t.imgHidden = !0),
                  e.addClass("mfp-loading"),
                  d.findImageSize(t))),
            e
          );
        },
      },
    });
    var B,
      R = function () {
        return (
          B === undefined &&
            (B = document.createElement("p").style.MozTransform !== undefined),
          B
        );
      };
    u.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var t,
            s = d.st.zoom,
            e = ".zoom";
          if (s.enabled && d.supportsTransition) {
            var n,
              i,
              o = s.duration,
              r = function (t) {
                var e = t
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  n = "all " + s.duration / 1e3 + "s " + s.easing,
                  i = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  o = "transition";
                return (
                  (i["-webkit-" + o] =
                    i["-moz-" + o] =
                    i["-o-" + o] =
                    i[o] =
                      n),
                  e.css(i),
                  e
                );
              },
              a = function () {
                d.content.css("visibility", "visible");
              };
            _("BuildControls" + e, function () {
              if (d._allowZoom()) {
                if (
                  (clearTimeout(n),
                  d.content.css("visibility", "hidden"),
                  !(t = d._getItemToZoom()))
                )
                  return void a();
                (i = r(t)).css(d._getOffset()),
                  d.wrap.append(i),
                  (n = setTimeout(function () {
                    i.css(d._getOffset(!0)),
                      (n = setTimeout(function () {
                        a(),
                          setTimeout(function () {
                            i.remove(), (t = i = null), C("ZoomAnimationEnded");
                          }, 16);
                      }, o));
                  }, 16));
              }
            }),
              _(c + e, function () {
                if (d._allowZoom()) {
                  if ((clearTimeout(n), (d.st.removalDelay = o), !t)) {
                    if (!(t = d._getItemToZoom())) return;
                    i = r(t);
                  }
                  i.css(d._getOffset(!0)),
                    d.wrap.append(i),
                    d.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      i.css(d._getOffset());
                    }, 16);
                }
              }),
              _(l + e, function () {
                d._allowZoom() && (a(), i && i.remove(), (t = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === d.currItem.type;
        },
        _getItemToZoom: function () {
          return !!d.currItem.hasSize && d.currItem.img;
        },
        _getOffset: function (t) {
          var e,
            n = (e = t
              ? d.currItem.img
              : d.st.zoom.opener(d.currItem.el || d.currItem)).offset(),
            i = parseInt(e.css("padding-top"), 10),
            o = parseInt(e.css("padding-bottom"), 10);
          n.top -= u(window).scrollTop() - i;
          var s = {
            width: e.width(),
            height: (w ? e.innerHeight() : e[0].offsetHeight) - o - i,
          };
          return (
            R()
              ? (s["-moz-transform"] = s.transform =
                  "translate(" + n.left + "px," + n.top + "px)")
              : ((s.left = n.left), (s.top = n.top)),
            s
          );
        },
      },
    });
    var q = "iframe",
      W = "//about:blank",
      z = function (t) {
        if (d.currTemplate[q]) {
          var e = d.currTemplate[q].find("iframe");
          e.length &&
            (t || (e[0].src = W),
            d.isIE8 && e.css("display", t ? "block" : "none"));
        }
      };
    u.magnificPopup.registerModule(q, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          d.types.push(q),
            _("BeforeChange", function (t, e, n) {
              e !== n && (e === q ? z() : n === q && z(!0));
            }),
            _(l + "." + q, function () {
              z();
            });
        },
        getIframe: function (t, e) {
          var n = t.src,
            i = d.st.iframe;
          u.each(i.patterns, function () {
            if (-1 < n.indexOf(this.index))
              return (
                this.id &&
                  (n =
                    "string" == typeof this.id
                      ? n.substr(
                          n.lastIndexOf(this.id) + this.id.length,
                          n.length
                        )
                      : this.id.call(this, n)),
                (n = this.src.replace("%id%", n)),
                !1
              );
          });
          var o = {};
          return (
            i.srcAction && (o[i.srcAction] = n),
            d._parseMarkup(e, o, t),
            d.updateStatus("ready"),
            e
          );
        },
      },
    });
    var V = function (t) {
        var e = d.items.length;
        return e - 1 < t ? t - e : t < 0 ? e + t : t;
      },
      U = function (t, e, n) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
      };
    u.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var s = d.st.gallery,
            t = ".mfp-gallery",
            o = Boolean(u.fn.mfpFastClick);
          if (((d.direction = !0), !s || !s.enabled)) return !1;
          (f += " mfp-gallery"),
            _(m + t, function () {
              s.navigateByImgClick &&
                d.wrap.on("click" + t, ".mfp-img", function () {
                  if (1 < d.items.length) return d.next(), !1;
                }),
                h.on("keydown" + t, function (t) {
                  37 === t.keyCode ? d.prev() : 39 === t.keyCode && d.next();
                });
            }),
            _("UpdateStatus" + t, function (t, e) {
              e.text && (e.text = U(e.text, d.currItem.index, d.items.length));
            }),
            _(v + t, function (t, e, n, i) {
              var o = d.items.length;
              n.counter = 1 < o ? U(s.tCounter, i.index, o) : "";
            }),
            _("BuildControls" + t, function () {
              if (1 < d.items.length && s.arrows && !d.arrowLeft) {
                var t = s.arrowMarkup,
                  e = (d.arrowLeft = u(
                    t.replace(/%title%/gi, s.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(j)),
                  n = (d.arrowRight = u(
                    t.replace(/%title%/gi, s.tNext).replace(/%dir%/gi, "right")
                  ).addClass(j)),
                  i = o ? "mfpFastClick" : "click";
                e[i](function () {
                  d.prev();
                }),
                  n[i](function () {
                    d.next();
                  }),
                  d.isIE7 &&
                    (x("b", e[0], !1, !0),
                    x("a", e[0], !1, !0),
                    x("b", n[0], !1, !0),
                    x("a", n[0], !1, !0)),
                  d.container.append(e.add(n));
              }
            }),
            _(r + t, function () {
              d._preloadTimeout && clearTimeout(d._preloadTimeout),
                (d._preloadTimeout = setTimeout(function () {
                  d.preloadNearbyImages(), (d._preloadTimeout = null);
                }, 16));
            }),
            _(l + t, function () {
              h.off(t),
                d.wrap.off("click" + t),
                d.arrowLeft &&
                  o &&
                  d.arrowLeft.add(d.arrowRight).destroyMfpFastClick(),
                (d.arrowRight = d.arrowLeft = null);
            });
        },
        next: function () {
          (d.direction = !0), (d.index = V(d.index + 1)), d.updateItemHTML();
        },
        prev: function () {
          (d.direction = !1), (d.index = V(d.index - 1)), d.updateItemHTML();
        },
        goTo: function (t) {
          (d.direction = t >= d.index), (d.index = t), d.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            e = d.st.gallery.preload,
            n = Math.min(e[0], d.items.length),
            i = Math.min(e[1], d.items.length);
          for (t = 1; t <= (d.direction ? i : n); t++)
            d._preloadItem(d.index + t);
          for (t = 1; t <= (d.direction ? n : i); t++)
            d._preloadItem(d.index - t);
        },
        _preloadItem: function (t) {
          if (((t = V(t)), !d.items[t].preloaded)) {
            var e = d.items[t];
            e.parsed || (e = d.parseEl(t)),
              C("LazyLoad", e),
              "image" === e.type &&
                (e.img = u('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    e.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (e.hasSize = !0), (e.loadError = !0), C("LazyLoadError", e);
                  })
                  .attr("src", e.src)),
              (e.preloaded = !0);
          }
        },
      },
    });
    var Y,
      X,
      Q,
      G,
      K = "retina";
    u.magnificPopup.registerModule(K, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (1 < window.devicePixelRatio) {
            var n = d.st.retina,
              i = n.ratio;
            1 < (i = isNaN(i) ? i() : i) &&
              (_("ImageHasSize." + K, function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / i,
                  width: "100%",
                });
              }),
              _("ElementParse." + K, function (t, e) {
                e.src = n.replaceSrc(e, i);
              }));
          }
        },
      },
    }),
      (Y = 1e3),
      (X = "ontouchstart" in window),
      (Q = function () {
        T.off("touchmove" + G + " touchend" + G);
      }),
      (G = "." + "mfpFastClick"),
      (u.fn.mfpFastClick = function (l) {
        return u(this).each(function () {
          var e,
            n,
            i,
            o,
            s,
            r,
            a,
            t = u(this);
          X &&
            t.on("touchstart" + G, function (t) {
              (s = !1),
                (a = 1),
                (r = t.originalEvent
                  ? t.originalEvent.touches[0]
                  : t.touches[0]),
                (i = r.clientX),
                (o = r.clientY),
                T.on("touchmove" + G, function (t) {
                  (r = t.originalEvent ? t.originalEvent.touches : t.touches),
                    (a = r.length),
                    (r = r[0]),
                    (10 < Math.abs(r.clientX - i) ||
                      10 < Math.abs(r.clientY - o)) &&
                      ((s = !0), Q());
                }).on("touchend" + G, function (t) {
                  Q(),
                    s ||
                      1 < a ||
                      ((e = !0),
                      t.preventDefault(),
                      clearTimeout(n),
                      (n = setTimeout(function () {
                        e = !1;
                      }, Y)),
                      l());
                });
            }),
            t.on("click" + G, function () {
              e || l();
            });
        });
      }),
      (u.fn.destroyMfpFastClick = function () {
        u(this).off("touchstart" + G + " click" + G),
          X && T.off("touchmove" + G + " touchend" + G);
      }),
      S();
  })(window.jQuery || window.Zepto),
  $(function () {
    function t(t) {
      var e = new google.maps.LatLng(t.latitude, t.longitude),
        n = new InfoBox(a);
      n.setPosition(e);
      var i = $(
        '<div class="infobox"><div class="box"><div class="s-image active"></div><div class="info"><span class="name"></span></br><span class="address"></span></div></div><div class="arrow"></div></div>'
      );
      n.setContent(i.get(0)), n.open(o), s.extend(e);
    }
    var o,
      s = new google.maps.LatLngBounds(),
      e = document.getElementById("map-canvas");
    if (!e) return !1;
    var n = 480 < $(document).width(),
      i = {
        center: new google.maps.LatLng(45.795885, 15.977447),
        zoom: 3,
        maxZoom: 6,
        minZoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: !1,
        navigationControl: !1,
        mapTypeControl: !1,
        disableDefaultUI: !1,
        scrollwheel: !1,
        draggable: n,
      };
    o = new google.maps.Map(e, i);
    for (
      var r = $("#map-canvas").data("distributors"),
        a = {
          disableAutoPan: !1,
          maxWidth: 0,
          pixelOffset: new google.maps.Size(0, 0),
          zIndex: null,
          closeBoxMargin: "0",
          closeBoxURL: "",
          infoBoxClearance: new google.maps.Size(1, 1),
          isHidden: !1,
          alignBottom: !0,
          pane: "floatPane",
          enableEventPropagation: !1,
        },
        l = 0;
      l < r.length;
      l++
    )
      (marker = r[l]), t(marker);
    o.fitBounds(s),
      $(".map-filter button").on("click", function () {
        $(".map-filter button").removeClass("active"),
          $(this).addClass("active"),
          $(this).hasClass("world")
            ? o.fitBounds(s)
            : (o.setCenter(new google.maps.LatLng(49.5, 22)), o.setZoom(4));
      });
  }),
  $(function () {
    function t() {
      $(".product-data-target").remove();
      var t = $(".product.mix").filter(function () {
          return (
            "inline-block" === $(this).css("display") ||
            "block" === $(this).css("display")
          );
        }),
        e = '<div class="col-sm-12 product-data-target"></div>';
      t.each(function (t) {
        (t + 1) % 4 == 0 && $(this).after(e).show(),
          $("#filter-cont").append(e).show();
      });
    }
    function e() {
      if (-1 == window.location.search.indexOf("&product_id"))
        return window.location.search;
      var t = window.location.search.indexOf("&product_id"),
        e = window.location.search.indexOf("&", t + 1);
      return -1 != e
        ? window.location.search.substr(0, t) + window.location.search.substr(e)
        : window.location.search.substr(0, t);
    }
    function i(t) {
      var e = $("#video-" + t).data("video-src");
      0 < $(".products_video").length &&
        videojs(
          $("#video-" + t).get(0),
          { techOrder: ["youtube"], src: e, controls: !0, preload: !1 },
          function () {
            this.on("play", function () {
              $(".featured-trend-cont").hide();
            }),
              this.on("ended", function () {
                $(".featured-trend-cont").show();
              });
          }
        );
    }
    $("#myModal").modal({ show: !1 }),
      $("#filter-cont").mixItUp({
        load: { filter: $(".default-filter").data("filter") },
        callbacks: {
          onMixLoad: function () {
            $("#filter-cont").data("current") &&
              $(
                ".product-link[data-id=" +
                  $("#filter-cont").data("current") +
                  "]"
              ).click();
          },
          onMixEnd: function () {
            $(".product-data-target .product-desc-cont").hide(), t();
          },
        },
      });
    var o = window.location.pathname + e();
    $(".product-link").on("click", function (t) {
      if (($(".product-arrow").hide(), 768 <= $(window).width())) {
        $(".product-data-target .product-desc-cont").hide();
        var e = $(this).data("product-html"),
          n = $(this).parent().nextAll(".product-data-target:first");
        $(this).find(".product-arrow").show(),
          n.html("").append(e).show(),
          1 == $(this).data("has-video") && i($(this).data("id")),
          n.find(".close-data").on("click", function (t) {
            $(this).parent().hide(), t.preventDefault();
          }),
          $.scrollTo(n, { duration: "slow", offset: -100 });
      } else $("#myModal .products-content").html("").append($(this).data("product-html")), $("#myModal").modal("show"), i($(this).data("id"));
      history.state
        ? history.pushState(
            "first-state",
            "",
            o + "&product_id=" + $(this).data("id")
          )
        : history.replaceState(
            "state",
            "",
            o + "&product_id=" + $(this).data("id")
          ),
        $("[data-lightbox]").magnificPopup({
          key: "product-photo",
          type: "image",
        }),
        t.preventDefault();
    }),
      $("body").on("click", ".close-data", function () {
        $(".product-arrow").hide(), history.replaceState("state", "", o);
      }),
      $(".products-filter-dropdown").on("click", "li", function () {
        $(this).hasClass("selected")
          ? ($(this).siblings().slideToggle("fast"),
            $(this).toggleClass("collapsed"))
          : ($(".products-filter-dropdown li.selected")
              .text($(this).text())
              .removeClass("collapsed"),
            $(this).slideUp().siblings().not(".selected").slideUp("fast"));
      });
    var n = $(".products-categories-nav .nav-contents");
    0 < n.length &&
      0 == n.data("index-page") &&
      setTimeout(function () {
        $.scrollTo($(".nav-contents"), { duration: "slow", offset: -200 });
      }, 400);
  }),
  $(function () {
    $(".header-slider-cont").slick({
      dots: !0,
      dotsClass: "custom-slick-dots clearfix",
      customPaging: function (t, e) {
        return (
          '<button type="button" data-role="none">' + (e + 1) + "</button>"
        );
      },
      responsive: [{ breakpoint: 992, settings: { arrows: !1 } }],
    });
    var t = $("#vid2").data("video-src");
    if (0 < $("#vid2").length) {
      var e = videojs(
        "#vid2",
        { techOrder: ["youtube"], src: t, controls: !0, preload: !1 },
        function () {
          this.on("play", function () {
            $(".featured-trend-cont").hide(),
              $(".trends-section-content .overlay").hide(),
              $(".trends-section-content .custom-play-btn").hide();
          }),
            this.on("ended", function () {
              $(".trends-section-content .custom-play-btn").show(),
                $(".trends-section-content .overlay").show(),
                $(".featured-trend-cont").show();
            });
        }
      );
      $(".trends-section-content .overlay").on("click", function () {
        e.play();
      }),
        $(".custom-play-btn").on("click", function () {
          e.play();
        });
    }
    new Waypoint.Sticky({ element: $(".header-cont")[0] });
    $(".hamburger").on("click", function (t) {
      t.preventDefault(), $(this).toggleClass("is-active");
    });
  }),
  $(function () {
    if (
      ($(".trend-category-nav li.active a")
        .css("cursor", "default")
        .on("click", function (t) {
          t.preventDefault();
        }),
      $(".must-have-products").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(window).width() < 991 &&
        $(".trend-steps").slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 670,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        }),
      $(window).width() < 991 &&
        500 < $(window).width() &&
        $(".trend-styles").slick({ slidesToShow: 1, slidesToScroll: 1 }),
      768 < $(window).width())
    ) {
      var t = $(".hairdresser");
      280 < t.height() + 40 &&
        $(".hairdresser-img").css("height", t.height() + 40);
    }
  }),
  $(document).ready(function () {
    $(".slider-container").on("init", function (t, e) {
      e.$slides.each(function (t, e) {
        var s = $(e);
        s.find(".video-in-slider").each(function (t, e) {
          var n = $(e),
            i = n.attr("id"),
            o = videojs(i, {
              techOrder: ["youtube"],
              src: n.data("video-src"),
              controls: !0,
              preload: !1,
            });
          s.data(i, o);
        });
      });
    }),
      $(".static-slider-video-cont .js-play-btn").on("click", function () {
        $(this).prev().hide(), $(this).hide();
        var t = $(this).siblings(".video-in-slider").attr("id");
        $(this).closest(".slide").data(t).play();
      }),
      $(".slider-container").slick({
        arrows: !1,
        centerMode: !0,
        slidesToShow: 1,
        variableWidth: !0,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: !0,
              centerMode: !1,
              slidesToShow: 1,
              variableWidth: !1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: !0,
              centerMode: !1,
              slidesToShow: 1,
              variableWidth: !1,
            },
          },
        ],
      }),
      $(".about-page .slider-container").slick("slickGoTo", 3),
      $(".about-page .heading-title").on("click", function () {
        var t = $(this).data("slide-index");
        $(".about-page .slider-container").slick("slickGoTo", t);
      }),
      $(".slider-container").on("afterChange", function (t, e, n) {
        $(".phrases-container .heading-title").removeClass("active"),
          $(".sliding-title-" + n).addClass("active");
      }),
      $(".slider-container").on("beforeChange", function (t, e, n) {
        var o = $(e.$slides[n]);
        o.find(".video-in-slider").each(function (t, e) {
          var n = $(e),
            i = o.data(n.attr("id"));
          i && i.pause();
        });
      }),
      $(".slick-slide").on("click", function () {
        var t = $(this),
          e = $(".slider-container");
        t.next().hasClass("slick-active")
          ? e.slick("slickPrev")
          : t.prev().hasClass("slick-active") && e.slick("slickNext");
      }),
      $(".links-holder").slick({
        arrows: !1,
        slidesToShow: 6,
        variableWidth: !0,
        responsive: [
          {
            breakpoint: 1180,
            settings: {
              arrows: !0,
              centerMode: !0,
              slidesToShow: 3,
              variableWidth: !1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: !0,
              centerMode: !0,
              slidesToShow: 1,
              variableWidth: !1,
            },
          },
        ],
      });
    var t = $(".nav-contents.active")
      .closest(".slick-slide")
      .not(".slick-cloned")
      .data("slick-index");
    $(".links-holder").slick("slickGoTo", t);
    var e = $(".timeline-img");
    e.waypoint(
      function (t) {
        "down" === t &&
          (e.addClass("grey"), $(this.element).removeClass("grey"));
      },
      { offset: "70%" }
    ),
      e.waypoint(
        function (t) {
          "up" === t &&
            (e.addClass("grey"), $(this.element).removeClass("grey"));
        },
        { offset: "10%" }
      );
  }),
  $(function () {
    $(".links-dropdown").on("click", "li", function (t) {
      t.preventDefault();
      var e = $(this);
      e.hasClass("selected")
        ? ($(this).siblings().slideToggle("fast"),
          $(this).toggleClass("collapsed"))
        : ($(".links-dropdown li.selected")
            .text($(this).text())
            .removeClass("collapsed"),
          $(this).slideUp().siblings().not(".selected").slideUp("fast")),
        ($link = e.find("a")),
        0 < $link.length && (window.location = $link.attr("href"));
    });
  });
