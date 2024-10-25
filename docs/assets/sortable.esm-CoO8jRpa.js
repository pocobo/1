/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function De(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(o);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(o, i).enumerable;
      })),
      e.push.apply(e, n);
  }
  return e;
}
function J(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? De(Object(e), !0).forEach(function (n) {
          qe(o, n, e[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
        : De(Object(e)).forEach(function (n) {
            Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(e, n));
          });
  }
  return o;
}
function zt(o) {
  '@babel/helpers - typeof';
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (zt = function (t) {
          return typeof t;
        })
      : (zt = function (t) {
          return t &&
            typeof Symbol == 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        }),
    zt(o)
  );
}
function qe(o, t, e) {
  return (
    t in o
      ? Object.defineProperty(o, t, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (o[t] = e),
    o
  );
}
function U() {
  return (
    (U =
      Object.assign ||
      function (o) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
        }
        return o;
      }),
    U.apply(this, arguments)
  );
}
function Ve(o, t) {
  if (o == null) return {};
  var e = {},
    n = Object.keys(o),
    i,
    r;
  for (r = 0; r < n.length; r++) (i = n[r]), !(t.indexOf(i) >= 0) && (e[i] = o[i]);
  return e;
}
function Ze(o, t) {
  if (o == null) return {};
  var e = Ve(o, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    for (i = 0; i < r.length; i++)
      (n = r[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(o, n) && (e[n] = o[n]);
  }
  return e;
}
function Qe(o) {
  return Je(o) || tn(o) || en(o) || nn();
}
function Je(o) {
  if (Array.isArray(o)) return he(o);
}
function tn(o) {
  if ((typeof Symbol != 'undefined' && o[Symbol.iterator] != null) || o['@@iterator'] != null)
    return Array.from(o);
}
function en(o, t) {
  if (o) {
    if (typeof o == 'string') return he(o, t);
    var e = Object.prototype.toString.call(o).slice(8, -1);
    if ((e === 'Object' && o.constructor && (e = o.constructor.name), e === 'Map' || e === 'Set'))
      return Array.from(o);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return he(o, t);
  }
}
function he(o, t) {
  (t == null || t > o.length) && (t = o.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = o[e];
  return n;
}
function nn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var on = '1.15.2';
function et(o) {
  if (typeof window != 'undefined' && window.navigator) return !!navigator.userAgent.match(o);
}
var nt = et(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  Xt = et(/Edge/i),
  _e = et(/firefox/i),
  xt = et(/safari/i) && !et(/chrome/i) && !et(/android/i),
  Fe = et(/iP(ad|od|hone)/i),
  Re = et(/chrome/i) && et(/android/i),
  ke = { capture: !1, passive: !1 };
function y(o, t, e) {
  o.addEventListener(t, e, !nt && ke);
}
function w(o, t, e) {
  o.removeEventListener(t, e, !nt && ke);
}
function Zt(o, t) {
  if (t) {
    if ((t[0] === '>' && (t = t.substring(1)), o))
      try {
        if (o.matches) return o.matches(t);
        if (o.msMatchesSelector) return o.msMatchesSelector(t);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(t);
      } catch (e) {
        return !1;
      }
    return !1;
  }
}
function rn(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function z(o, t, e, n) {
  if (o) {
    e = e || document;
    do {
      if (
        (t != null && (t[0] === '>' ? o.parentNode === e && Zt(o, t) : Zt(o, t))) ||
        (n && o === e)
      )
        return o;
      if (o === e) break;
    } while ((o = rn(o)));
  }
  return null;
}
var Ce = /\s+/g;
function A(o, t, e) {
  if (o && t)
    if (o.classList) o.classList[e ? 'add' : 'remove'](t);
    else {
      var n = (' ' + o.className + ' ').replace(Ce, ' ').replace(' ' + t + ' ', ' ');
      o.className = (n + (e ? ' ' + t : '')).replace(Ce, ' ');
    }
}
function h(o, t, e) {
  var n = o && o.style;
  if (n) {
    if (e === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (e = document.defaultView.getComputedStyle(o, ''))
          : o.currentStyle && (e = o.currentStyle),
        t === void 0 ? e : e[t]
      );
    !(t in n) && t.indexOf('webkit') === -1 && (t = '-webkit-' + t),
      (n[t] = e + (typeof e == 'string' ? '' : 'px'));
  }
}
function ht(o, t) {
  var e = '';
  if (typeof o == 'string') e = o;
  else
    do {
      var n = h(o, 'transform');
      n && n !== 'none' && (e = n + ' ' + e);
    } while (!t && (o = o.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(e);
}
function Xe(o, t, e) {
  if (o) {
    var n = o.getElementsByTagName(t),
      i = 0,
      r = n.length;
    if (e) for (; i < r; i++) e(n[i], i);
    return n;
  }
  return [];
}
function Q() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function C(o, t, e, n, i) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var r, a, l, s, u, d, c;
    if (
      (o !== window && o.parentNode && o !== Q()
        ? ((r = o.getBoundingClientRect()),
          (a = r.top),
          (l = r.left),
          (s = r.bottom),
          (u = r.right),
          (d = r.height),
          (c = r.width))
        : ((a = 0),
          (l = 0),
          (s = window.innerHeight),
          (u = window.innerWidth),
          (d = window.innerHeight),
          (c = window.innerWidth)),
      (t || e) && o !== window && ((i = i || o.parentNode), !nt))
    )
      do
        if (
          i &&
          i.getBoundingClientRect &&
          (h(i, 'transform') !== 'none' || (e && h(i, 'position') !== 'static'))
        ) {
          var p = i.getBoundingClientRect();
          (a -= p.top + parseInt(h(i, 'border-top-width'))),
            (l -= p.left + parseInt(h(i, 'border-left-width'))),
            (s = a + r.height),
            (u = l + r.width);
          break;
        }
      while ((i = i.parentNode));
    if (n && o !== window) {
      var E = ht(i || o),
        b = E && E.a,
        S = E && E.d;
      E && ((a /= S), (l /= b), (c /= b), (d /= S), (s = a + d), (u = l + c));
    }
    return { top: a, left: l, bottom: s, right: u, width: c, height: d };
  }
}
function Oe(o, t, e) {
  for (var n = lt(o, !0), i = C(o)[t]; n; ) {
    var r = C(n)[e],
      a = void 0;
    if ((e === 'top' || e === 'left' ? (a = i >= r) : (a = i <= r), !a)) return n;
    if (n === Q()) break;
    n = lt(n, !1);
  }
  return !1;
}
function wt(o, t, e, n) {
  for (var i = 0, r = 0, a = o.children; r < a.length; ) {
    if (
      a[r].style.display !== 'none' &&
      a[r] !== g.ghost &&
      (n || a[r] !== g.dragged) &&
      z(a[r], e.draggable, o, !1)
    ) {
      if (i === t) return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function be(o, t) {
  for (
    var e = o.lastElementChild;
    e && (e === g.ghost || h(e, 'display') === 'none' || (t && !Zt(e, t)));

  )
    e = e.previousElementSibling;
  return e || null;
}
function N(o, t) {
  var e = 0;
  if (!o || !o.parentNode) return -1;
  for (; (o = o.previousElementSibling); )
    o.nodeName.toUpperCase() !== 'TEMPLATE' && o !== g.clone && (!t || Zt(o, t)) && e++;
  return e;
}
function Te(o) {
  var t = 0,
    e = 0,
    n = Q();
  if (o)
    do {
      var i = ht(o),
        r = i.a,
        a = i.d;
      (t += o.scrollLeft * r), (e += o.scrollTop * a);
    } while (o !== n && (o = o.parentNode));
  return [t, e];
}
function an(o, t) {
  for (var e in o)
    if (o.hasOwnProperty(e)) {
      for (var n in t) if (t.hasOwnProperty(n) && t[n] === o[e][n]) return Number(e);
    }
  return -1;
}
function lt(o, t) {
  if (!o || !o.getBoundingClientRect) return Q();
  var e = o,
    n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var i = h(e);
      if (
        (e.clientWidth < e.scrollWidth && (i.overflowX == 'auto' || i.overflowX == 'scroll')) ||
        (e.clientHeight < e.scrollHeight && (i.overflowY == 'auto' || i.overflowY == 'scroll'))
      ) {
        if (!e.getBoundingClientRect || e === document.body) return Q();
        if (n || t) return e;
        n = !0;
      }
    }
  while ((e = e.parentNode));
  return Q();
}
function ln(o, t) {
  if (o && t) for (var e in t) t.hasOwnProperty(e) && (o[e] = t[e]);
  return o;
}
function oe(o, t) {
  return (
    Math.round(o.top) === Math.round(t.top) &&
    Math.round(o.left) === Math.round(t.left) &&
    Math.round(o.height) === Math.round(t.height) &&
    Math.round(o.width) === Math.round(t.width)
  );
}
var Pt;
function Ye(o, t) {
  return function () {
    if (!Pt) {
      var e = arguments,
        n = this;
      e.length === 1 ? o.call(n, e[0]) : o.apply(n, e),
        (Pt = setTimeout(function () {
          Pt = void 0;
        }, t));
    }
  };
}
function sn() {
  clearTimeout(Pt), (Pt = void 0);
}
function Be(o, t, e) {
  (o.scrollLeft += t), (o.scrollTop += e);
}
function we(o) {
  var t = window.Polymer,
    e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(o).cloneNode(!0) : e ? e(o).clone(!0)[0] : o.cloneNode(!0);
}
function Ae(o, t) {
  h(o, 'position', 'absolute'),
    h(o, 'top', t.top),
    h(o, 'left', t.left),
    h(o, 'width', t.width),
    h(o, 'height', t.height);
}
function ie(o) {
  h(o, 'position', ''), h(o, 'top', ''), h(o, 'left', ''), h(o, 'width', ''), h(o, 'height', '');
}
function He(o, t, e) {
  var n = {};
  return (
    Array.from(o.children).forEach(function (i) {
      var r, a, l, s;
      if (!(!z(i, t.draggable, o, !1) || i.animated || i === e)) {
        var u = C(i);
        (n.left = Math.min((r = n.left) !== null && r !== void 0 ? r : 1 / 0, u.left)),
          (n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, u.top)),
          (n.right = Math.max((l = n.right) !== null && l !== void 0 ? l : -1 / 0, u.right)),
          (n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom));
      }
    }),
    (n.width = n.right - n.left),
    (n.height = n.bottom - n.top),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
var k = 'Sortable' + new Date().getTime();
function un() {
  var o = [],
    t;
  return {
    captureAnimationState: function () {
      if (((o = []), !!this.options.animation)) {
        var n = [].slice.call(this.el.children);
        n.forEach(function (i) {
          if (!(h(i, 'display') === 'none' || i === g.ghost)) {
            o.push({ target: i, rect: C(i) });
            var r = J({}, o[o.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = ht(i, !0);
              a && ((r.top -= a.f), (r.left -= a.e));
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function (n) {
      o.push(n);
    },
    removeAnimationState: function (n) {
      o.splice(an(o, { target: n }), 1);
    },
    animateAll: function (n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == 'function' && n();
        return;
      }
      var r = !1,
        a = 0;
      o.forEach(function (l) {
        var s = 0,
          u = l.target,
          d = u.fromRect,
          c = C(u),
          p = u.prevFromRect,
          E = u.prevToRect,
          b = l.rect,
          S = ht(u, !0);
        S && ((c.top -= S.f), (c.left -= S.e)),
          (u.toRect = c),
          u.thisAnimationDuration &&
            oe(p, c) &&
            !oe(d, c) &&
            (b.top - c.top) / (b.left - c.left) === (d.top - c.top) / (d.left - c.left) &&
            (s = cn(b, p, E, i.options)),
          oe(c, d) ||
            ((u.prevFromRect = d),
            (u.prevToRect = c),
            s || (s = i.options.animation),
            i.animate(u, b, c, s)),
          s &&
            ((r = !0),
            (a = Math.max(a, s)),
            clearTimeout(u.animationResetTimer),
            (u.animationResetTimer = setTimeout(function () {
              (u.animationTime = 0),
                (u.prevFromRect = null),
                (u.fromRect = null),
                (u.prevToRect = null),
                (u.thisAnimationDuration = null);
            }, s)),
            (u.thisAnimationDuration = s));
      }),
        clearTimeout(t),
        r
          ? (t = setTimeout(function () {
              typeof n == 'function' && n();
            }, a))
          : typeof n == 'function' && n(),
        (o = []);
    },
    animate: function (n, i, r, a) {
      if (a) {
        h(n, 'transition', ''), h(n, 'transform', '');
        var l = ht(this.el),
          s = l && l.a,
          u = l && l.d,
          d = (i.left - r.left) / (s || 1),
          c = (i.top - r.top) / (u || 1);
        (n.animatingX = !!d),
          (n.animatingY = !!c),
          h(n, 'transform', 'translate3d(' + d + 'px,' + c + 'px,0)'),
          (this.forRepaintDummy = fn(n)),
          h(
            n,
            'transition',
            'transform ' + a + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''),
          ),
          h(n, 'transform', 'translate3d(0,0,0)'),
          typeof n.animated == 'number' && clearTimeout(n.animated),
          (n.animated = setTimeout(function () {
            h(n, 'transition', ''),
              h(n, 'transform', ''),
              (n.animated = !1),
              (n.animatingX = !1),
              (n.animatingY = !1);
          }, a));
      }
    },
  };
}
function fn(o) {
  return o.offsetWidth;
}
function cn(o, t, e, n) {
  return (
    (Math.sqrt(Math.pow(t.top - o.top, 2) + Math.pow(t.left - o.left, 2)) /
      Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2))) *
    n.animation
  );
}
var pt = [],
  re = { initializeByDefault: !0 },
  Yt = {
    mount: function (t) {
      for (var e in re) re.hasOwnProperty(e) && !(e in t) && (t[e] = re[e]);
      pt.forEach(function (n) {
        if (n.pluginName === t.pluginName)
          throw 'Sortable: Cannot mount plugin '.concat(t.pluginName, ' more than once');
      }),
        pt.push(t);
    },
    pluginEvent: function (t, e, n) {
      var i = this;
      (this.eventCanceled = !1),
        (n.cancel = function () {
          i.eventCanceled = !0;
        });
      var r = t + 'Global';
      pt.forEach(function (a) {
        e[a.pluginName] &&
          (e[a.pluginName][r] && e[a.pluginName][r](J({ sortable: e }, n)),
          e.options[a.pluginName] &&
            e[a.pluginName][t] &&
            e[a.pluginName][t](J({ sortable: e }, n)));
      });
    },
    initializePlugins: function (t, e, n, i) {
      pt.forEach(function (l) {
        var s = l.pluginName;
        if (!(!t.options[s] && !l.initializeByDefault)) {
          var u = new l(t, e, t.options);
          (u.sortable = t), (u.options = t.options), (t[s] = u), U(n, u.defaults);
        }
      });
      for (var r in t.options)
        if (t.options.hasOwnProperty(r)) {
          var a = this.modifyOption(t, r, t.options[r]);
          typeof a != 'undefined' && (t.options[r] = a);
        }
    },
    getEventProperties: function (t, e) {
      var n = {};
      return (
        pt.forEach(function (i) {
          typeof i.eventProperties == 'function' &&
            U(n, i.eventProperties.call(e[i.pluginName], t));
        }),
        n
      );
    },
    modifyOption: function (t, e, n) {
      var i;
      return (
        pt.forEach(function (r) {
          t[r.pluginName] &&
            r.optionListeners &&
            typeof r.optionListeners[e] == 'function' &&
            (i = r.optionListeners[e].call(t[r.pluginName], n));
        }),
        i
      );
    },
  };
function At(o) {
  var t = o.sortable,
    e = o.rootEl,
    n = o.name,
    i = o.targetEl,
    r = o.cloneEl,
    a = o.toEl,
    l = o.fromEl,
    s = o.oldIndex,
    u = o.newIndex,
    d = o.oldDraggableIndex,
    c = o.newDraggableIndex,
    p = o.originalEvent,
    E = o.putSortable,
    b = o.extraEventProperties;
  if (((t = t || (e && e[k])), !!t)) {
    var S,
      M = t.options,
      L = 'on' + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !nt && !Xt
      ? (S = new CustomEvent(n, { bubbles: !0, cancelable: !0 }))
      : ((S = document.createEvent('Event')), S.initEvent(n, !0, !0)),
      (S.to = a || e),
      (S.from = l || e),
      (S.item = i || e),
      (S.clone = r),
      (S.oldIndex = s),
      (S.newIndex = u),
      (S.oldDraggableIndex = d),
      (S.newDraggableIndex = c),
      (S.originalEvent = p),
      (S.pullMode = E ? E.lastPutMode : void 0);
    var P = J(J({}, b), Yt.getEventProperties(n, t));
    for (var Y in P) S[Y] = P[Y];
    e && e.dispatchEvent(S), M[L] && M[L].call(t, S);
  }
}
var dn = ['evt'],
  B = function (t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = n.evt,
      r = Ze(n, dn);
    Yt.pluginEvent.bind(g)(
      t,
      e,
      J(
        {
          dragEl: f,
          parentEl: I,
          ghostEl: v,
          rootEl: O,
          nextEl: dt,
          lastDownEl: Ut,
          cloneEl: T,
          cloneHidden: at,
          dragStarted: It,
          putSortable: F,
          activeSortable: g.active,
          originalEvent: i,
          oldIndex: bt,
          oldDraggableIndex: Ft,
          newIndex: K,
          newDraggableIndex: rt,
          hideGhostForTarget: Le,
          unhideGhostForTarget: je,
          cloneNowHidden: function () {
            at = !0;
          },
          cloneNowShown: function () {
            at = !1;
          },
          dispatchSortableEvent: function (l) {
            X({ sortable: e, name: l, originalEvent: i });
          },
        },
        r,
      ),
    );
  };
function X(o) {
  At(
    J(
      {
        putSortable: F,
        cloneEl: T,
        targetEl: f,
        rootEl: O,
        oldIndex: bt,
        oldDraggableIndex: Ft,
        newIndex: K,
        newDraggableIndex: rt,
      },
      o,
    ),
  );
}
var f,
  I,
  v,
  O,
  dt,
  Ut,
  T,
  at,
  bt,
  K,
  Ft,
  rt,
  Ht,
  F,
  vt = !1,
  Qt = !1,
  Jt = [],
  ft,
  $,
  ae,
  le,
  Ie,
  Ne,
  It,
  gt,
  Rt,
  kt = !1,
  Gt = !1,
  $t,
  R,
  se = [],
  pe = !1,
  te = [],
  ne = typeof document != 'undefined',
  Wt = Fe,
  Me = Xt || nt ? 'cssFloat' : 'float',
  hn = ne && !Re && !Fe && 'draggable' in document.createElement('div'),
  Ge = (function () {
    if (ne) {
      if (nt) return !1;
      var o = document.createElement('x');
      return (o.style.cssText = 'pointer-events:auto'), o.style.pointerEvents === 'auto';
    }
  })(),
  We = function (t, e) {
    var n = h(t),
      i =
        parseInt(n.width) -
        parseInt(n.paddingLeft) -
        parseInt(n.paddingRight) -
        parseInt(n.borderLeftWidth) -
        parseInt(n.borderRightWidth),
      r = wt(t, 0, e),
      a = wt(t, 1, e),
      l = r && h(r),
      s = a && h(a),
      u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + C(r).width,
      d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + C(a).width;
    if (n.display === 'flex')
      return n.flexDirection === 'column' || n.flexDirection === 'column-reverse'
        ? 'vertical'
        : 'horizontal';
    if (n.display === 'grid')
      return n.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    if (r && l.float && l.float !== 'none') {
      var c = l.float === 'left' ? 'left' : 'right';
      return a && (s.clear === 'both' || s.clear === c) ? 'vertical' : 'horizontal';
    }
    return r &&
      (l.display === 'block' ||
        l.display === 'flex' ||
        l.display === 'table' ||
        l.display === 'grid' ||
        (u >= i && n[Me] === 'none') ||
        (a && n[Me] === 'none' && u + d > i))
      ? 'vertical'
      : 'horizontal';
  },
  pn = function (t, e, n) {
    var i = n ? t.left : t.top,
      r = n ? t.right : t.bottom,
      a = n ? t.width : t.height,
      l = n ? e.left : e.top,
      s = n ? e.right : e.bottom,
      u = n ? e.width : e.height;
    return i === l || r === s || i + a / 2 === l + u / 2;
  },
  gn = function (t, e) {
    var n;
    return (
      Jt.some(function (i) {
        var r = i[k].options.emptyInsertThreshold;
        if (!(!r || be(i))) {
          var a = C(i),
            l = t >= a.left - r && t <= a.right + r,
            s = e >= a.top - r && e <= a.bottom + r;
          if (l && s) return (n = i);
        }
      }),
      n
    );
  },
  Ke = function (t) {
    function e(r, a) {
      return function (l, s, u, d) {
        var c =
          l.options.group.name &&
          s.options.group.name &&
          l.options.group.name === s.options.group.name;
        if (r == null && (a || c)) return !0;
        if (r == null || r === !1) return !1;
        if (a && r === 'clone') return r;
        if (typeof r == 'function') return e(r(l, s, u, d), a)(l, s, u, d);
        var p = (a ? l : s).options.group.name;
        return r === !0 || (typeof r == 'string' && r === p) || (r.join && r.indexOf(p) > -1);
      };
    }
    var n = {},
      i = t.group;
    (!i || zt(i) != 'object') && (i = { name: i }),
      (n.name = i.name),
      (n.checkPull = e(i.pull, !0)),
      (n.checkPut = e(i.put)),
      (n.revertClone = i.revertClone),
      (t.group = n);
  },
  Le = function () {
    !Ge && v && h(v, 'display', 'none');
  },
  je = function () {
    !Ge && v && h(v, 'display', '');
  };
ne &&
  !Re &&
  document.addEventListener(
    'click',
    function (o) {
      if (Qt)
        return (
          o.preventDefault(),
          o.stopPropagation && o.stopPropagation(),
          o.stopImmediatePropagation && o.stopImmediatePropagation(),
          (Qt = !1),
          !1
        );
    },
    !0,
  );
var ct = function (t) {
    if (f) {
      t = t.touches ? t.touches[0] : t;
      var e = gn(t.clientX, t.clientY);
      if (e) {
        var n = {};
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        (n.target = n.rootEl = e),
          (n.preventDefault = void 0),
          (n.stopPropagation = void 0),
          e[k]._onDragOver(n);
      }
    }
  },
  mn = function (t) {
    f && f.parentNode[k]._isOutsideThisEl(t.target);
  };
function g(o, t) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(o));
  (this.el = o), (this.options = t = U({}, t)), (o[k] = this);
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(o.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return We(o, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (a, l) {
      a.setData('Text', l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: g.supportPointer !== !1 && 'PointerEvent' in window && !xt,
    emptyInsertThreshold: 5,
  };
  Yt.initializePlugins(this, o, e);
  for (var n in e) !(n in t) && (t[n] = e[n]);
  Ke(t);
  for (var i in this)
    i.charAt(0) === '_' && typeof this[i] == 'function' && (this[i] = this[i].bind(this));
  (this.nativeDraggable = t.forceFallback ? !1 : hn),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    t.supportPointer
      ? y(o, 'pointerdown', this._onTapStart)
      : (y(o, 'mousedown', this._onTapStart), y(o, 'touchstart', this._onTapStart)),
    this.nativeDraggable && (y(o, 'dragover', this), y(o, 'dragenter', this)),
    Jt.push(this.el),
    t.store && t.store.get && this.sort(t.store.get(this) || []),
    U(this, un());
}
g.prototype = {
  constructor: g,
  _isOutsideThisEl: function (t) {
    !this.el.contains(t) && t !== this.el && (gt = null);
  },
  _getDirection: function (t, e) {
    return typeof this.options.direction == 'function'
      ? this.options.direction.call(this, t, e, f)
      : this.options.direction;
  },
  _onTapStart: function (t) {
    if (t.cancelable) {
      var e = this,
        n = this.el,
        i = this.options,
        r = i.preventOnFilter,
        a = t.type,
        l = (t.touches && t.touches[0]) || (t.pointerType && t.pointerType === 'touch' && t),
        s = (l || t).target,
        u =
          (t.target.shadowRoot &&
            ((t.path && t.path[0]) || (t.composedPath && t.composedPath()[0]))) ||
          s,
        d = i.filter;
      if (
        (_n(n),
        !f &&
          !((/mousedown|pointerdown/.test(a) && t.button !== 0) || i.disabled) &&
          !u.isContentEditable &&
          !(!this.nativeDraggable && xt && s && s.tagName.toUpperCase() === 'SELECT') &&
          ((s = z(s, i.draggable, n, !1)), !(s && s.animated) && Ut !== s))
      ) {
        if (((bt = N(s)), (Ft = N(s, i.draggable)), typeof d == 'function')) {
          if (d.call(this, t, s, this)) {
            X({ sortable: e, rootEl: u, name: 'filter', targetEl: s, toEl: n, fromEl: n }),
              B('filter', e, { evt: t }),
              r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (
          d &&
          ((d = d.split(',').some(function (c) {
            if (((c = z(u, c.trim(), n, !1)), c))
              return (
                X({ sortable: e, rootEl: c, name: 'filter', targetEl: s, fromEl: n, toEl: n }),
                B('filter', e, { evt: t }),
                !0
              );
          })),
          d)
        ) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        (i.handle && !z(u, i.handle, n, !1)) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function (t, e, n) {
    var i = this,
      r = i.el,
      a = i.options,
      l = r.ownerDocument,
      s;
    if (n && !f && n.parentNode === r) {
      var u = C(n);
      if (
        ((O = r),
        (f = n),
        (I = f.parentNode),
        (dt = f.nextSibling),
        (Ut = n),
        (Ht = a.group),
        (g.dragged = f),
        (ft = { target: f, clientX: (e || t).clientX, clientY: (e || t).clientY }),
        (Ie = ft.clientX - u.left),
        (Ne = ft.clientY - u.top),
        (this._lastX = (e || t).clientX),
        (this._lastY = (e || t).clientY),
        (f.style['will-change'] = 'all'),
        (s = function () {
          if ((B('delayEnded', i, { evt: t }), g.eventCanceled)) {
            i._onDrop();
            return;
          }
          i._disableDelayedDragEvents(),
            !_e && i.nativeDraggable && (f.draggable = !0),
            i._triggerDragStart(t, e),
            X({ sortable: i, name: 'choose', originalEvent: t }),
            A(f, a.chosenClass, !0);
        }),
        a.ignore.split(',').forEach(function (d) {
          Xe(f, d.trim(), ue);
        }),
        y(l, 'dragover', ct),
        y(l, 'mousemove', ct),
        y(l, 'touchmove', ct),
        y(l, 'mouseup', i._onDrop),
        y(l, 'touchend', i._onDrop),
        y(l, 'touchcancel', i._onDrop),
        _e && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (f.draggable = !0)),
        B('delayStart', this, { evt: t }),
        a.delay && (!a.delayOnTouchOnly || e) && (!this.nativeDraggable || !(Xt || nt)))
      ) {
        if (g.eventCanceled) {
          this._onDrop();
          return;
        }
        y(l, 'mouseup', i._disableDelayedDrag),
          y(l, 'touchend', i._disableDelayedDrag),
          y(l, 'touchcancel', i._disableDelayedDrag),
          y(l, 'mousemove', i._delayedDragTouchMoveHandler),
          y(l, 'touchmove', i._delayedDragTouchMoveHandler),
          a.supportPointer && y(l, 'pointermove', i._delayedDragTouchMoveHandler),
          (i._dragStartTimer = setTimeout(s, a.delay));
      } else s();
    }
  },
  _delayedDragTouchMoveHandler: function (t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >=
      Math.floor(
        this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1),
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    f && ue(f), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var t = this.el.ownerDocument;
    w(t, 'mouseup', this._disableDelayedDrag),
      w(t, 'touchend', this._disableDelayedDrag),
      w(t, 'touchcancel', this._disableDelayedDrag),
      w(t, 'mousemove', this._delayedDragTouchMoveHandler),
      w(t, 'touchmove', this._delayedDragTouchMoveHandler),
      w(t, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (t, e) {
    (e = e || (t.pointerType == 'touch' && t)),
      !this.nativeDraggable || e
        ? this.options.supportPointer
          ? y(document, 'pointermove', this._onTouchMove)
          : e
            ? y(document, 'touchmove', this._onTouchMove)
            : y(document, 'mousemove', this._onTouchMove)
        : (y(f, 'dragend', this), y(O, 'dragstart', this._onDragStart));
    try {
      document.selection
        ? qt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch (n) {}
  },
  _dragStarted: function (t, e) {
    if (((vt = !1), O && f)) {
      B('dragStarted', this, { evt: e }), this.nativeDraggable && y(document, 'dragover', mn);
      var n = this.options;
      !t && A(f, n.dragClass, !1),
        A(f, n.ghostClass, !0),
        (g.active = this),
        t && this._appendGhost(),
        X({ sortable: this, name: 'start', originalEvent: e });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if ($) {
      (this._lastX = $.clientX), (this._lastY = $.clientY), Le();
      for (
        var t = document.elementFromPoint($.clientX, $.clientY), e = t;
        t && t.shadowRoot && ((t = t.shadowRoot.elementFromPoint($.clientX, $.clientY)), t !== e);

      )
        e = t;
      if ((f.parentNode[k]._isOutsideThisEl(t), e))
        do {
          if (e[k]) {
            var n = void 0;
            if (
              ((n = e[k]._onDragOver({
                clientX: $.clientX,
                clientY: $.clientY,
                target: t,
                rootEl: e,
              })),
              n && !this.options.dragoverBubble)
            )
              break;
          }
          t = e;
        } while ((e = e.parentNode));
      je();
    }
  },
  _onTouchMove: function (t) {
    if (ft) {
      var e = this.options,
        n = e.fallbackTolerance,
        i = e.fallbackOffset,
        r = t.touches ? t.touches[0] : t,
        a = v && ht(v, !0),
        l = v && a && a.a,
        s = v && a && a.d,
        u = Wt && R && Te(R),
        d = (r.clientX - ft.clientX + i.x) / (l || 1) + (u ? u[0] - se[0] : 0) / (l || 1),
        c = (r.clientY - ft.clientY + i.y) / (s || 1) + (u ? u[1] - se[1] : 0) / (s || 1);
      if (!g.active && !vt) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (v) {
        a
          ? ((a.e += d - (ae || 0)), (a.f += c - (le || 0)))
          : (a = { a: 1, b: 0, c: 0, d: 1, e: d, f: c });
        var p = 'matrix('
          .concat(a.a, ',')
          .concat(a.b, ',')
          .concat(a.c, ',')
          .concat(a.d, ',')
          .concat(a.e, ',')
          .concat(a.f, ')');
        h(v, 'webkitTransform', p),
          h(v, 'mozTransform', p),
          h(v, 'msTransform', p),
          h(v, 'transform', p),
          (ae = d),
          (le = c),
          ($ = r);
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!v) {
      var t = this.options.fallbackOnBody ? document.body : O,
        e = C(f, !0, Wt, !0, t),
        n = this.options;
      if (Wt) {
        for (
          R = t;
          h(R, 'position') === 'static' && h(R, 'transform') === 'none' && R !== document;

        )
          R = R.parentNode;
        R !== document.body && R !== document.documentElement
          ? (R === document && (R = Q()), (e.top += R.scrollTop), (e.left += R.scrollLeft))
          : (R = Q()),
          (se = Te(R));
      }
      (v = f.cloneNode(!0)),
        A(v, n.ghostClass, !1),
        A(v, n.fallbackClass, !0),
        A(v, n.dragClass, !0),
        h(v, 'transition', ''),
        h(v, 'transform', ''),
        h(v, 'box-sizing', 'border-box'),
        h(v, 'margin', 0),
        h(v, 'top', e.top),
        h(v, 'left', e.left),
        h(v, 'width', e.width),
        h(v, 'height', e.height),
        h(v, 'opacity', '0.8'),
        h(v, 'position', Wt ? 'absolute' : 'fixed'),
        h(v, 'zIndex', '100000'),
        h(v, 'pointerEvents', 'none'),
        (g.ghost = v),
        t.appendChild(v),
        h(
          v,
          'transform-origin',
          (Ie / parseInt(v.style.width)) * 100 + '% ' + (Ne / parseInt(v.style.height)) * 100 + '%',
        );
    }
  },
  _onDragStart: function (t, e) {
    var n = this,
      i = t.dataTransfer,
      r = n.options;
    if ((B('dragStart', this, { evt: t }), g.eventCanceled)) {
      this._onDrop();
      return;
    }
    B('setupClone', this),
      g.eventCanceled ||
        ((T = we(f)),
        T.removeAttribute('id'),
        (T.draggable = !1),
        (T.style['will-change'] = ''),
        this._hideClone(),
        A(T, this.options.chosenClass, !1),
        (g.clone = T)),
      (n.cloneId = qt(function () {
        B('clone', n),
          !g.eventCanceled &&
            (n.options.removeCloneOnHide || O.insertBefore(T, f),
            n._hideClone(),
            X({ sortable: n, name: 'clone' }));
      })),
      !e && A(f, r.dragClass, !0),
      e
        ? ((Qt = !0), (n._loopId = setInterval(n._emulateDragOver, 50)))
        : (w(document, 'mouseup', n._onDrop),
          w(document, 'touchend', n._onDrop),
          w(document, 'touchcancel', n._onDrop),
          i && ((i.effectAllowed = 'move'), r.setData && r.setData.call(n, i, f)),
          y(document, 'drop', n),
          h(f, 'transform', 'translateZ(0)')),
      (vt = !0),
      (n._dragStartId = qt(n._dragStarted.bind(n, e, t))),
      y(document, 'selectstart', n),
      (It = !0),
      xt && h(document.body, 'user-select', 'none');
  },
  _onDragOver: function (t) {
    var e = this.el,
      n = t.target,
      i,
      r,
      a,
      l = this.options,
      s = l.group,
      u = g.active,
      d = Ht === s,
      c = l.sort,
      p = F || u,
      E,
      b = this,
      S = !1;
    if (pe) return;
    function M(_t, Ue) {
      B(
        _t,
        b,
        J(
          {
            evt: t,
            isOwner: d,
            axis: E ? 'vertical' : 'horizontal',
            revert: a,
            dragRect: i,
            targetRect: r,
            canSort: c,
            fromSortable: p,
            target: n,
            completed: P,
            onMove: function (Se, $e) {
              return Kt(O, e, f, i, Se, C(Se), t, $e);
            },
            changed: Y,
          },
          Ue,
        ),
      );
    }
    function L() {
      M('dragOverAnimationCapture'),
        b.captureAnimationState(),
        b !== p && p.captureAnimationState();
    }
    function P(_t) {
      return (
        M('dragOverCompleted', { insertion: _t }),
        _t &&
          (d ? u._hideClone() : u._showClone(b),
          b !== p &&
            (A(f, F ? F.options.ghostClass : u.options.ghostClass, !1), A(f, l.ghostClass, !0)),
          F !== b && b !== g.active ? (F = b) : b === g.active && F && (F = null),
          p === b && (b._ignoreWhileAnimating = n),
          b.animateAll(function () {
            M('dragOverAnimationComplete'), (b._ignoreWhileAnimating = null);
          }),
          b !== p && (p.animateAll(), (p._ignoreWhileAnimating = null))),
        ((n === f && !f.animated) || (n === e && !n.animated)) && (gt = null),
        !l.dragoverBubble &&
          !t.rootEl &&
          n !== document &&
          (f.parentNode[k]._isOutsideThisEl(t.target), !_t && ct(t)),
        !l.dragoverBubble && t.stopPropagation && t.stopPropagation(),
        (S = !0)
      );
    }
    function Y() {
      (K = N(f)),
        (rt = N(f, l.draggable)),
        X({
          sortable: b,
          name: 'change',
          toEl: e,
          newIndex: K,
          newDraggableIndex: rt,
          originalEvent: t,
        });
    }
    if (
      (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(),
      (n = z(n, l.draggable, e, !0)),
      M('dragOver'),
      g.eventCanceled)
    )
      return S;
    if (
      f.contains(t.target) ||
      (n.animated && n.animatingX && n.animatingY) ||
      b._ignoreWhileAnimating === n
    )
      return P(!1);
    if (
      ((Qt = !1),
      u &&
        !l.disabled &&
        (d
          ? c || (a = I !== O)
          : F === this ||
            ((this.lastPutMode = Ht.checkPull(this, u, f, t)) && s.checkPut(this, u, f, t))))
    ) {
      if (
        ((E = this._getDirection(t, n) === 'vertical'),
        (i = C(f)),
        M('dragOverValid'),
        g.eventCanceled)
      )
        return S;
      if (a)
        return (
          (I = O),
          L(),
          this._hideClone(),
          M('revert'),
          g.eventCanceled || (dt ? O.insertBefore(f, dt) : O.appendChild(f)),
          P(!0)
        );
      var D = be(e, l.draggable);
      if (!D || (yn(t, E, this) && !D.animated)) {
        if (D === f) return P(!1);
        if ((D && e === t.target && (n = D), n && (r = C(n)), Kt(O, e, f, i, n, r, t, !!n) !== !1))
          return (
            L(),
            D && D.nextSibling ? e.insertBefore(f, D.nextSibling) : e.appendChild(f),
            (I = e),
            Y(),
            P(!0)
          );
      } else if (D && wn(t, E, this)) {
        var V = wt(e, 0, l, !0);
        if (V === f) return P(!1);
        if (((n = V), (r = C(n)), Kt(O, e, f, i, n, r, t, !1) !== !1))
          return L(), e.insertBefore(f, V), (I = e), Y(), P(!0);
      } else if (n.parentNode === e) {
        r = C(n);
        var Z = 0,
          st,
          yt = f.parentNode !== e,
          G = !pn((f.animated && f.toRect) || i, (n.animated && n.toRect) || r, E),
          Et = E ? 'top' : 'left',
          ot = Oe(n, 'top', 'top') || Oe(f, 'top', 'top'),
          St = ot ? ot.scrollTop : void 0;
        gt !== n && ((st = r[Et]), (kt = !1), (Gt = (!G && l.invertSwap) || yt)),
          (Z = En(
            t,
            n,
            r,
            E,
            G ? 1 : l.swapThreshold,
            l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold,
            Gt,
            gt === n,
          ));
        var tt;
        if (Z !== 0) {
          var ut = N(f);
          do (ut -= Z), (tt = I.children[ut]);
          while (tt && (h(tt, 'display') === 'none' || tt === v));
        }
        if (Z === 0 || tt === n) return P(!1);
        (gt = n), (Rt = Z);
        var Dt = n.nextElementSibling,
          it = !1;
        it = Z === 1;
        var Bt = Kt(O, e, f, i, n, r, t, it);
        if (Bt !== !1)
          return (
            (Bt === 1 || Bt === -1) && (it = Bt === 1),
            (pe = !0),
            setTimeout(bn, 30),
            L(),
            it && !Dt ? e.appendChild(f) : n.parentNode.insertBefore(f, it ? Dt : n),
            ot && Be(ot, 0, St - ot.scrollTop),
            (I = f.parentNode),
            st !== void 0 && !Gt && ($t = Math.abs(st - C(n)[Et])),
            Y(),
            P(!0)
          );
      }
      if (e.contains(f)) return P(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    w(document, 'mousemove', this._onTouchMove),
      w(document, 'touchmove', this._onTouchMove),
      w(document, 'pointermove', this._onTouchMove),
      w(document, 'dragover', ct),
      w(document, 'mousemove', ct),
      w(document, 'touchmove', ct);
  },
  _offUpEvents: function () {
    var t = this.el.ownerDocument;
    w(t, 'mouseup', this._onDrop),
      w(t, 'touchend', this._onDrop),
      w(t, 'pointerup', this._onDrop),
      w(t, 'touchcancel', this._onDrop),
      w(document, 'selectstart', this);
  },
  _onDrop: function (t) {
    var e = this.el,
      n = this.options;
    if (
      ((K = N(f)),
      (rt = N(f, n.draggable)),
      B('drop', this, { evt: t }),
      (I = f && f.parentNode),
      (K = N(f)),
      (rt = N(f, n.draggable)),
      g.eventCanceled)
    ) {
      this._nulling();
      return;
    }
    (vt = !1),
      (Gt = !1),
      (kt = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      ge(this.cloneId),
      ge(this._dragStartId),
      this.nativeDraggable && (w(document, 'drop', this), w(e, 'dragstart', this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      xt && h(document.body, 'user-select', ''),
      h(f, 'transform', ''),
      t &&
        (It && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()),
        v && v.parentNode && v.parentNode.removeChild(v),
        (O === I || (F && F.lastPutMode !== 'clone')) &&
          T &&
          T.parentNode &&
          T.parentNode.removeChild(T),
        f &&
          (this.nativeDraggable && w(f, 'dragend', this),
          ue(f),
          (f.style['will-change'] = ''),
          It && !vt && A(f, F ? F.options.ghostClass : this.options.ghostClass, !1),
          A(f, this.options.chosenClass, !1),
          X({
            sortable: this,
            name: 'unchoose',
            toEl: I,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: t,
          }),
          O !== I
            ? (K >= 0 &&
                (X({ rootEl: I, name: 'add', toEl: I, fromEl: O, originalEvent: t }),
                X({ sortable: this, name: 'remove', toEl: I, originalEvent: t }),
                X({ rootEl: I, name: 'sort', toEl: I, fromEl: O, originalEvent: t }),
                X({ sortable: this, name: 'sort', toEl: I, originalEvent: t })),
              F && F.save())
            : K !== bt &&
              K >= 0 &&
              (X({ sortable: this, name: 'update', toEl: I, originalEvent: t }),
              X({ sortable: this, name: 'sort', toEl: I, originalEvent: t })),
          g.active &&
            ((K == null || K === -1) && ((K = bt), (rt = Ft)),
            X({ sortable: this, name: 'end', toEl: I, originalEvent: t }),
            this.save()))),
      this._nulling();
  },
  _nulling: function () {
    B('nulling', this),
      (O =
        f =
        I =
        v =
        dt =
        T =
        Ut =
        at =
        ft =
        $ =
        It =
        K =
        rt =
        bt =
        Ft =
        gt =
        Rt =
        F =
        Ht =
        g.dragged =
        g.ghost =
        g.clone =
        g.active =
          null),
      te.forEach(function (t) {
        t.checked = !0;
      }),
      (te.length = ae = le = 0);
  },
  handleEvent: function (t) {
    switch (t.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(t);
        break;
      case 'dragenter':
      case 'dragover':
        f && (this._onDragOver(t), vn(t));
        break;
      case 'selectstart':
        t.preventDefault();
        break;
    }
  },
  toArray: function () {
    for (var t = [], e, n = this.el.children, i = 0, r = n.length, a = this.options; i < r; i++)
      (e = n[i]), z(e, a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || Dn(e));
    return t;
  },
  sort: function (t, e) {
    var n = {},
      i = this.el;
    this.toArray().forEach(function (r, a) {
      var l = i.children[a];
      z(l, this.options.draggable, i, !1) && (n[r] = l);
    }, this),
      e && this.captureAnimationState(),
      t.forEach(function (r) {
        n[r] && (i.removeChild(n[r]), i.appendChild(n[r]));
      }),
      e && this.animateAll();
  },
  save: function () {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  closest: function (t, e) {
    return z(t, e || this.options.draggable, this.el, !1);
  },
  option: function (t, e) {
    var n = this.options;
    if (e === void 0) return n[t];
    var i = Yt.modifyOption(this, t, e);
    typeof i != 'undefined' ? (n[t] = i) : (n[t] = e), t === 'group' && Ke(n);
  },
  destroy: function () {
    B('destroy', this);
    var t = this.el;
    (t[k] = null),
      w(t, 'mousedown', this._onTapStart),
      w(t, 'touchstart', this._onTapStart),
      w(t, 'pointerdown', this._onTapStart),
      this.nativeDraggable && (w(t, 'dragover', this), w(t, 'dragenter', this)),
      Array.prototype.forEach.call(t.querySelectorAll('[draggable]'), function (e) {
        e.removeAttribute('draggable');
      }),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      Jt.splice(Jt.indexOf(this.el), 1),
      (this.el = t = null);
  },
  _hideClone: function () {
    if (!at) {
      if ((B('hideClone', this), g.eventCanceled)) return;
      h(T, 'display', 'none'),
        this.options.removeCloneOnHide && T.parentNode && T.parentNode.removeChild(T),
        (at = !0);
    }
  },
  _showClone: function (t) {
    if (t.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (at) {
      if ((B('showClone', this), g.eventCanceled)) return;
      f.parentNode == O && !this.options.group.revertClone
        ? O.insertBefore(T, f)
        : dt
          ? O.insertBefore(T, dt)
          : O.appendChild(T),
        this.options.group.revertClone && this.animate(f, T),
        h(T, 'display', ''),
        (at = !1);
    }
  },
};
function vn(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = 'move'), o.cancelable && o.preventDefault();
}
function Kt(o, t, e, n, i, r, a, l) {
  var s,
    u = o[k],
    d = u.options.onMove,
    c;
  return (
    window.CustomEvent && !nt && !Xt
      ? (s = new CustomEvent('move', { bubbles: !0, cancelable: !0 }))
      : ((s = document.createEvent('Event')), s.initEvent('move', !0, !0)),
    (s.to = t),
    (s.from = o),
    (s.dragged = e),
    (s.draggedRect = n),
    (s.related = i || t),
    (s.relatedRect = r || C(t)),
    (s.willInsertAfter = l),
    (s.originalEvent = a),
    o.dispatchEvent(s),
    d && (c = d.call(u, s, a)),
    c
  );
}
function ue(o) {
  o.draggable = !1;
}
function bn() {
  pe = !1;
}
function wn(o, t, e) {
  var n = C(wt(e.el, 0, e.options, !0)),
    i = He(e.el, e.options, v),
    r = 10;
  return t
    ? o.clientX < i.left - r || (o.clientY < n.top && o.clientX < n.right)
    : o.clientY < i.top - r || (o.clientY < n.bottom && o.clientX < n.left);
}
function yn(o, t, e) {
  var n = C(be(e.el, e.options.draggable)),
    i = He(e.el, e.options, v),
    r = 10;
  return t
    ? o.clientX > i.right + r || (o.clientY > n.bottom && o.clientX > n.left)
    : o.clientY > i.bottom + r || (o.clientX > n.right && o.clientY > n.top);
}
function En(o, t, e, n, i, r, a, l) {
  var s = n ? o.clientY : o.clientX,
    u = n ? e.height : e.width,
    d = n ? e.top : e.left,
    c = n ? e.bottom : e.right,
    p = !1;
  if (!a) {
    if (l && $t < u * i) {
      if ((!kt && (Rt === 1 ? s > d + (u * r) / 2 : s < c - (u * r) / 2) && (kt = !0), kt)) p = !0;
      else if (Rt === 1 ? s < d + $t : s > c - $t) return -Rt;
    } else if (s > d + (u * (1 - i)) / 2 && s < c - (u * (1 - i)) / 2) return Sn(t);
  }
  return (
    (p = p || a), p && (s < d + (u * r) / 2 || s > c - (u * r) / 2) ? (s > d + u / 2 ? 1 : -1) : 0
  );
}
function Sn(o) {
  return N(f) < N(o) ? 1 : -1;
}
function Dn(o) {
  for (var t = o.tagName + o.className + o.src + o.href + o.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function _n(o) {
  te.length = 0;
  for (var t = o.getElementsByTagName('input'), e = t.length; e--; ) {
    var n = t[e];
    n.checked && te.push(n);
  }
}
function qt(o) {
  return setTimeout(o, 0);
}
function ge(o) {
  return clearTimeout(o);
}
ne &&
  y(document, 'touchmove', function (o) {
    (g.active || vt) && o.cancelable && o.preventDefault();
  });
g.utils = {
  on: y,
  off: w,
  css: h,
  find: Xe,
  is: function (t, e) {
    return !!z(t, e, t, !1);
  },
  extend: ln,
  throttle: Ye,
  closest: z,
  toggleClass: A,
  clone: we,
  index: N,
  nextTick: qt,
  cancelNextTick: ge,
  detectDirection: We,
  getChild: wt,
};
g.get = function (o) {
  return o[k];
};
g.mount = function () {
  for (var o = arguments.length, t = new Array(o), e = 0; e < o; e++) t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]),
    t.forEach(function (n) {
      if (!n.prototype || !n.prototype.constructor)
        throw 'Sortable: Mounted plugin must be a constructor function, not '.concat(
          {}.toString.call(n),
        );
      n.utils && (g.utils = J(J({}, g.utils), n.utils)), Yt.mount(n);
    });
};
g.create = function (o, t) {
  return new g(o, t);
};
g.version = on;
var x = [],
  Nt,
  me,
  ve = !1,
  fe,
  ce,
  ee,
  Mt;
function Cn() {
  function o() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0,
    };
    for (var t in this)
      t.charAt(0) === '_' && typeof this[t] == 'function' && (this[t] = this[t].bind(this));
  }
  return (
    (o.prototype = {
      dragStarted: function (e) {
        var n = e.originalEvent;
        this.sortable.nativeDraggable
          ? y(document, 'dragover', this._handleAutoScroll)
          : this.options.supportPointer
            ? y(document, 'pointermove', this._handleFallbackAutoScroll)
            : n.touches
              ? y(document, 'touchmove', this._handleFallbackAutoScroll)
              : y(document, 'mousemove', this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (e) {
        var n = e.originalEvent;
        !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? w(document, 'dragover', this._handleAutoScroll)
          : (w(document, 'pointermove', this._handleFallbackAutoScroll),
            w(document, 'touchmove', this._handleFallbackAutoScroll),
            w(document, 'mousemove', this._handleFallbackAutoScroll)),
          xe(),
          Vt(),
          sn();
      },
      nulling: function () {
        (ee = me = Nt = ve = Mt = fe = ce = null), (x.length = 0);
      },
      _handleFallbackAutoScroll: function (e) {
        this._handleAutoScroll(e, !0);
      },
      _handleAutoScroll: function (e, n) {
        var i = this,
          r = (e.touches ? e.touches[0] : e).clientX,
          a = (e.touches ? e.touches[0] : e).clientY,
          l = document.elementFromPoint(r, a);
        if (((ee = e), n || this.options.forceAutoScrollFallback || Xt || nt || xt)) {
          de(e, this.options, l, n);
          var s = lt(l, !0);
          ve &&
            (!Mt || r !== fe || a !== ce) &&
            (Mt && xe(),
            (Mt = setInterval(function () {
              var u = lt(document.elementFromPoint(r, a), !0);
              u !== s && ((s = u), Vt()), de(e, i.options, u, n);
            }, 10)),
            (fe = r),
            (ce = a));
        } else {
          if (!this.options.bubbleScroll || lt(l, !0) === Q()) {
            Vt();
            return;
          }
          de(e, this.options, lt(l, !1), !1);
        }
      },
    }),
    U(o, { pluginName: 'scroll', initializeByDefault: !0 })
  );
}
function Vt() {
  x.forEach(function (o) {
    clearInterval(o.pid);
  }),
    (x = []);
}
function xe() {
  clearInterval(Mt);
}
var de = Ye(function (o, t, e, n) {
    if (t.scroll) {
      var i = (o.touches ? o.touches[0] : o).clientX,
        r = (o.touches ? o.touches[0] : o).clientY,
        a = t.scrollSensitivity,
        l = t.scrollSpeed,
        s = Q(),
        u = !1,
        d;
      me !== e &&
        ((me = e), Vt(), (Nt = t.scroll), (d = t.scrollFn), Nt === !0 && (Nt = lt(e, !0)));
      var c = 0,
        p = Nt;
      do {
        var E = p,
          b = C(E),
          S = b.top,
          M = b.bottom,
          L = b.left,
          P = b.right,
          Y = b.width,
          D = b.height,
          V = void 0,
          Z = void 0,
          st = E.scrollWidth,
          yt = E.scrollHeight,
          G = h(E),
          Et = E.scrollLeft,
          ot = E.scrollTop;
        E === s
          ? ((V =
              Y < st &&
              (G.overflowX === 'auto' || G.overflowX === 'scroll' || G.overflowX === 'visible')),
            (Z =
              D < yt &&
              (G.overflowY === 'auto' || G.overflowY === 'scroll' || G.overflowY === 'visible')))
          : ((V = Y < st && (G.overflowX === 'auto' || G.overflowX === 'scroll')),
            (Z = D < yt && (G.overflowY === 'auto' || G.overflowY === 'scroll')));
        var St = V && (Math.abs(P - i) <= a && Et + Y < st) - (Math.abs(L - i) <= a && !!Et),
          tt = Z && (Math.abs(M - r) <= a && ot + D < yt) - (Math.abs(S - r) <= a && !!ot);
        if (!x[c]) for (var ut = 0; ut <= c; ut++) x[ut] || (x[ut] = {});
        (x[c].vx != St || x[c].vy != tt || x[c].el !== E) &&
          ((x[c].el = E),
          (x[c].vx = St),
          (x[c].vy = tt),
          clearInterval(x[c].pid),
          (St != 0 || tt != 0) &&
            ((u = !0),
            (x[c].pid = setInterval(
              function () {
                n && this.layer === 0 && g.active._onTouchMove(ee);
                var Dt = x[this.layer].vy ? x[this.layer].vy * l : 0,
                  it = x[this.layer].vx ? x[this.layer].vx * l : 0;
                (typeof d == 'function' &&
                  d.call(g.dragged.parentNode[k], it, Dt, o, ee, x[this.layer].el) !==
                    'continue') ||
                  Be(x[this.layer].el, it, Dt);
              }.bind({ layer: c }),
              24,
            )))),
          c++;
      } while (t.bubbleScroll && p !== s && (p = lt(p, !1)));
      ve = u;
    }
  }, 30),
  ze = function (t) {
    var e = t.originalEvent,
      n = t.putSortable,
      i = t.dragEl,
      r = t.activeSortable,
      a = t.dispatchSortableEvent,
      l = t.hideGhostForTarget,
      s = t.unhideGhostForTarget;
    if (e) {
      var u = n || r;
      l();
      var d = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e,
        c = document.elementFromPoint(d.clientX, d.clientY);
      s(), u && !u.el.contains(c) && (a('spill'), this.onSpill({ dragEl: i, putSortable: n }));
    }
  };
function ye() {}
ye.prototype = {
  startIndex: null,
  dragStart: function (t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function (t) {
    var e = t.dragEl,
      n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = wt(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(e, i) : this.sortable.el.appendChild(e),
      this.sortable.animateAll(),
      n && n.animateAll();
  },
  drop: ze,
};
U(ye, { pluginName: 'revertOnSpill' });
function Ee() {}
Ee.prototype = {
  onSpill: function (t) {
    var e = t.dragEl,
      n = t.putSortable,
      i = n || this.sortable;
    i.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), i.animateAll();
  },
  drop: ze,
};
U(Ee, { pluginName: 'removeOnSpill' });
var j;
function In() {
  function o() {
    this.defaults = { swapClass: 'sortable-swap-highlight' };
  }
  return (
    (o.prototype = {
      dragStart: function (e) {
        var n = e.dragEl;
        j = n;
      },
      dragOverValid: function (e) {
        var n = e.completed,
          i = e.target,
          r = e.onMove,
          a = e.activeSortable,
          l = e.changed,
          s = e.cancel;
        if (a.options.swap) {
          var u = this.sortable.el,
            d = this.options;
          if (i && i !== u) {
            var c = j;
            r(i) !== !1 ? (A(i, d.swapClass, !0), (j = i)) : (j = null),
              c && c !== j && A(c, d.swapClass, !1);
          }
          l(), n(!0), s();
        }
      },
      drop: function (e) {
        var n = e.activeSortable,
          i = e.putSortable,
          r = e.dragEl,
          a = i || this.sortable,
          l = this.options;
        j && A(j, l.swapClass, !1),
          j &&
            (l.swap || (i && i.options.swap)) &&
            r !== j &&
            (a.captureAnimationState(),
            a !== n && n.captureAnimationState(),
            On(r, j),
            a.animateAll(),
            a !== n && n.animateAll());
      },
      nulling: function () {
        j = null;
      },
    }),
    U(o, {
      pluginName: 'swap',
      eventProperties: function () {
        return { swapItem: j };
      },
    })
  );
}
function On(o, t) {
  var e = o.parentNode,
    n = t.parentNode,
    i,
    r;
  !e ||
    !n ||
    e.isEqualNode(t) ||
    n.isEqualNode(o) ||
    ((i = N(o)),
    (r = N(t)),
    e.isEqualNode(n) && i < r && r++,
    e.insertBefore(t, e.children[i]),
    n.insertBefore(o, n.children[r]));
}
var m = [],
  W = [],
  Ct,
  q,
  Ot = !1,
  H = !1,
  mt = !1,
  _,
  Tt,
  Lt;
function Nn() {
  function o(t) {
    for (var e in this)
      e.charAt(0) === '_' && typeof this[e] == 'function' && (this[e] = this[e].bind(this));
    t.options.avoidImplicitDeselect ||
      (t.options.supportPointer
        ? y(document, 'pointerup', this._deselectMultiDrag)
        : (y(document, 'mouseup', this._deselectMultiDrag),
          y(document, 'touchend', this._deselectMultiDrag))),
      y(document, 'keydown', this._checkKeyDown),
      y(document, 'keyup', this._checkKeyUp),
      (this.defaults = {
        selectedClass: 'sortable-selected',
        multiDragKey: null,
        avoidImplicitDeselect: !1,
        setData: function (i, r) {
          var a = '';
          m.length && q === t
            ? m.forEach(function (l, s) {
                a += (s ? ', ' : '') + l.textContent;
              })
            : (a = r.textContent),
            i.setData('Text', a);
        },
      });
  }
  return (
    (o.prototype = {
      multiDragKeyDown: !1,
      isMultiDrag: !1,
      delayStartGlobal: function (e) {
        var n = e.dragEl;
        _ = n;
      },
      delayEnded: function () {
        this.isMultiDrag = ~m.indexOf(_);
      },
      setupClone: function (e) {
        var n = e.sortable,
          i = e.cancel;
        if (this.isMultiDrag) {
          for (var r = 0; r < m.length; r++)
            W.push(we(m[r])),
              (W[r].sortableIndex = m[r].sortableIndex),
              (W[r].draggable = !1),
              (W[r].style['will-change'] = ''),
              A(W[r], this.options.selectedClass, !1),
              m[r] === _ && A(W[r], this.options.chosenClass, !1);
          n._hideClone(), i();
        }
      },
      clone: function (e) {
        var n = e.sortable,
          i = e.rootEl,
          r = e.dispatchSortableEvent,
          a = e.cancel;
        this.isMultiDrag &&
          (this.options.removeCloneOnHide || (m.length && q === n && (Pe(!0, i), r('clone'), a())));
      },
      showClone: function (e) {
        var n = e.cloneNowShown,
          i = e.rootEl,
          r = e.cancel;
        this.isMultiDrag &&
          (Pe(!1, i),
          W.forEach(function (a) {
            h(a, 'display', '');
          }),
          n(),
          (Lt = !1),
          r());
      },
      hideClone: function (e) {
        var n = this;
        e.sortable;
        var i = e.cloneNowHidden,
          r = e.cancel;
        this.isMultiDrag &&
          (W.forEach(function (a) {
            h(a, 'display', 'none'),
              n.options.removeCloneOnHide && a.parentNode && a.parentNode.removeChild(a);
          }),
          i(),
          (Lt = !0),
          r());
      },
      dragStartGlobal: function (e) {
        e.sortable,
          !this.isMultiDrag && q && q.multiDrag._deselectMultiDrag(),
          m.forEach(function (n) {
            n.sortableIndex = N(n);
          }),
          (m = m.sort(function (n, i) {
            return n.sortableIndex - i.sortableIndex;
          })),
          (mt = !0);
      },
      dragStarted: function (e) {
        var n = this,
          i = e.sortable;
        if (this.isMultiDrag) {
          if (this.options.sort && (i.captureAnimationState(), this.options.animation)) {
            m.forEach(function (a) {
              a !== _ && h(a, 'position', 'absolute');
            });
            var r = C(_, !1, !0, !0);
            m.forEach(function (a) {
              a !== _ && Ae(a, r);
            }),
              (H = !0),
              (Ot = !0);
          }
          i.animateAll(function () {
            (H = !1),
              (Ot = !1),
              n.options.animation &&
                m.forEach(function (a) {
                  ie(a);
                }),
              n.options.sort && jt();
          });
        }
      },
      dragOver: function (e) {
        var n = e.target,
          i = e.completed,
          r = e.cancel;
        H && ~m.indexOf(n) && (i(!1), r());
      },
      revert: function (e) {
        var n = e.fromSortable,
          i = e.rootEl,
          r = e.sortable,
          a = e.dragRect;
        m.length > 1 &&
          (m.forEach(function (l) {
            r.addAnimationState({ target: l, rect: H ? C(l) : a }),
              ie(l),
              (l.fromRect = a),
              n.removeAnimationState(l);
          }),
          (H = !1),
          Tn(!this.options.removeCloneOnHide, i));
      },
      dragOverCompleted: function (e) {
        var n = e.sortable,
          i = e.isOwner,
          r = e.insertion,
          a = e.activeSortable,
          l = e.parentEl,
          s = e.putSortable,
          u = this.options;
        if (r) {
          if (
            (i && a._hideClone(),
            (Ot = !1),
            u.animation && m.length > 1 && (H || (!i && !a.options.sort && !s)))
          ) {
            var d = C(_, !1, !0, !0);
            m.forEach(function (p) {
              p !== _ && (Ae(p, d), l.appendChild(p));
            }),
              (H = !0);
          }
          if (!i)
            if ((H || jt(), m.length > 1)) {
              var c = Lt;
              a._showClone(n),
                a.options.animation &&
                  !Lt &&
                  c &&
                  W.forEach(function (p) {
                    a.addAnimationState({ target: p, rect: Tt }),
                      (p.fromRect = Tt),
                      (p.thisAnimationDuration = null);
                  });
            } else a._showClone(n);
        }
      },
      dragOverAnimationCapture: function (e) {
        var n = e.dragRect,
          i = e.isOwner,
          r = e.activeSortable;
        if (
          (m.forEach(function (l) {
            l.thisAnimationDuration = null;
          }),
          r.options.animation && !i && r.multiDrag.isMultiDrag)
        ) {
          Tt = U({}, n);
          var a = ht(_, !0);
          (Tt.top -= a.f), (Tt.left -= a.e);
        }
      },
      dragOverAnimationComplete: function () {
        H && ((H = !1), jt());
      },
      drop: function (e) {
        var n = e.originalEvent,
          i = e.rootEl,
          r = e.parentEl,
          a = e.sortable,
          l = e.dispatchSortableEvent,
          s = e.oldIndex,
          u = e.putSortable,
          d = u || this.sortable;
        if (n) {
          var c = this.options,
            p = r.children;
          if (!mt)
            if (
              (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(),
              A(_, c.selectedClass, !~m.indexOf(_)),
              ~m.indexOf(_))
            )
              m.splice(m.indexOf(_), 1),
                (Ct = null),
                At({ sortable: a, rootEl: i, name: 'deselect', targetEl: _, originalEvent: n });
            else {
              if (
                (m.push(_),
                At({ sortable: a, rootEl: i, name: 'select', targetEl: _, originalEvent: n }),
                n.shiftKey && Ct && a.el.contains(Ct))
              ) {
                var E = N(Ct),
                  b = N(_);
                if (~E && ~b && E !== b) {
                  var S, M;
                  for (b > E ? ((M = E), (S = b)) : ((M = b), (S = E + 1)); M < S; M++)
                    ~m.indexOf(p[M]) ||
                      (A(p[M], c.selectedClass, !0),
                      m.push(p[M]),
                      At({
                        sortable: a,
                        rootEl: i,
                        name: 'select',
                        targetEl: p[M],
                        originalEvent: n,
                      }));
                }
              } else Ct = _;
              q = d;
            }
          if (mt && this.isMultiDrag) {
            if (((H = !1), (r[k].options.sort || r !== i) && m.length > 1)) {
              var L = C(_),
                P = N(_, ':not(.' + this.options.selectedClass + ')');
              if (
                (!Ot && c.animation && (_.thisAnimationDuration = null),
                d.captureAnimationState(),
                !Ot &&
                  (c.animation &&
                    ((_.fromRect = L),
                    m.forEach(function (D) {
                      if (((D.thisAnimationDuration = null), D !== _)) {
                        var V = H ? C(D) : L;
                        (D.fromRect = V), d.addAnimationState({ target: D, rect: V });
                      }
                    })),
                  jt(),
                  m.forEach(function (D) {
                    p[P] ? r.insertBefore(D, p[P]) : r.appendChild(D), P++;
                  }),
                  s === N(_)))
              ) {
                var Y = !1;
                m.forEach(function (D) {
                  if (D.sortableIndex !== N(D)) {
                    Y = !0;
                    return;
                  }
                }),
                  Y && (l('update'), l('sort'));
              }
              m.forEach(function (D) {
                ie(D);
              }),
                d.animateAll();
            }
            q = d;
          }
          (i === r || (u && u.lastPutMode !== 'clone')) &&
            W.forEach(function (D) {
              D.parentNode && D.parentNode.removeChild(D);
            });
        }
      },
      nullingGlobal: function () {
        (this.isMultiDrag = mt = !1), (W.length = 0);
      },
      destroyGlobal: function () {
        this._deselectMultiDrag(),
          w(document, 'pointerup', this._deselectMultiDrag),
          w(document, 'mouseup', this._deselectMultiDrag),
          w(document, 'touchend', this._deselectMultiDrag),
          w(document, 'keydown', this._checkKeyDown),
          w(document, 'keyup', this._checkKeyUp);
      },
      _deselectMultiDrag: function (e) {
        if (
          !(typeof mt != 'undefined' && mt) &&
          q === this.sortable &&
          !(e && z(e.target, this.options.draggable, this.sortable.el, !1)) &&
          !(e && e.button !== 0)
        )
          for (; m.length; ) {
            var n = m[0];
            A(n, this.options.selectedClass, !1),
              m.shift(),
              At({
                sortable: this.sortable,
                rootEl: this.sortable.el,
                name: 'deselect',
                targetEl: n,
                originalEvent: e,
              });
          }
      },
      _checkKeyDown: function (e) {
        e.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
      },
      _checkKeyUp: function (e) {
        e.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
      },
    }),
    U(o, {
      pluginName: 'multiDrag',
      utils: {
        select: function (e) {
          var n = e.parentNode[k];
          !n ||
            !n.options.multiDrag ||
            ~m.indexOf(e) ||
            (q && q !== n && (q.multiDrag._deselectMultiDrag(), (q = n)),
            A(e, n.options.selectedClass, !0),
            m.push(e));
        },
        deselect: function (e) {
          var n = e.parentNode[k],
            i = m.indexOf(e);
          !n || !n.options.multiDrag || !~i || (A(e, n.options.selectedClass, !1), m.splice(i, 1));
        },
      },
      eventProperties: function () {
        var e = this,
          n = [],
          i = [];
        return (
          m.forEach(function (r) {
            n.push({ multiDragElement: r, index: r.sortableIndex });
            var a;
            H && r !== _
              ? (a = -1)
              : H
                ? (a = N(r, ':not(.' + e.options.selectedClass + ')'))
                : (a = N(r)),
              i.push({ multiDragElement: r, index: a });
          }),
          { items: Qe(m), clones: [].concat(W), oldIndicies: n, newIndicies: i }
        );
      },
      optionListeners: {
        multiDragKey: function (e) {
          return (
            (e = e.toLowerCase()),
            e === 'ctrl'
              ? (e = 'Control')
              : e.length > 1 && (e = e.charAt(0).toUpperCase() + e.substr(1)),
            e
          );
        },
      },
    })
  );
}
function Tn(o, t) {
  m.forEach(function (e, n) {
    var i = t.children[e.sortableIndex + (o ? Number(n) : 0)];
    i ? t.insertBefore(e, i) : t.appendChild(e);
  });
}
function Pe(o, t) {
  W.forEach(function (e, n) {
    var i = t.children[e.sortableIndex + (o ? Number(n) : 0)];
    i ? t.insertBefore(e, i) : t.appendChild(e);
  });
}
function jt() {
  m.forEach(function (o) {
    o !== _ && o.parentNode && o.parentNode.removeChild(o);
  });
}
g.mount(new Cn());
g.mount(Ee, ye);
export { Nn as MultiDrag, g as Sortable, In as Swap, g as default };
