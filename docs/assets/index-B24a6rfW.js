var Y = Object.defineProperty,
  ee = Object.defineProperties;
var te = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty,
  ne = Object.prototype.propertyIsEnumerable;
var K = (s, t, a) =>
    t in s ? Y(s, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (s[t] = a),
  x = (s, t) => {
    for (var a in t || (t = {})) oe.call(t, a) && K(s, a, t[a]);
    if (M) for (var a of M(t)) ne.call(t, a) && K(s, a, t[a]);
    return s;
  },
  Z = (s, t) => ee(s, te(t));
var q = (s, t, a) =>
  new Promise((r, g) => {
    var w = (u) => {
        try {
          h(a.next(u));
        } catch (m) {
          g(m);
        }
      },
      k = (u) => {
        try {
          h(a.throw(u));
        } catch (m) {
          g(m);
        }
      },
      h = (u) => (u.done ? r(u.value) : Promise.resolve(u.value).then(w, k));
    h((a = a.apply(s, t)).next());
  });
import { f as U, m as ae, c as se, n as re, p as f, q as ie, P as ce, w as X } from '../index.js';
import {
  d as J,
  Z as T,
  _ as j,
  $ as A,
  ae as S,
  a1 as z,
  u as c,
  ag as V,
  f as E,
  w as D,
  y as N,
  H as le,
  K as ue,
  ah as fe,
  p as ge,
  c as p,
  a8 as G,
  ad as he,
  aa as de,
  a9 as W,
  ac as pe,
  ab as L,
  aj as me,
  ak as He,
  F as ye,
  G as be,
  a0 as Fe,
} from './vue-BjERyvPm.js';
import { u as ve } from './useContentViewHeight-mbS0GS8E.js';
import { l as Se, aa as ke, ab as Ce, o as O, ac as $e } from './antd-BmrhB3rb.js';
import { o as Pe } from './onMountedOrActivated-DcvTUt7V.js';
import { u as Re } from './useWindowSizeFn-B5LTQhvs.js';
const we = J({
    name: 'PageFooter',
    inheritAttrs: !1,
    __name: 'PageFooter',
    setup(s) {
      const { prefixCls: t } = U('page-footer'),
        { getCalcContentWidth: a } = ae();
      return (r, g) => (
        T(),
        j(
          'div',
          { class: z(c(t)), style: V({ width: c(a) }) },
          [
            A('div', { class: z(`${c(t)}__left`) }, [S(r.$slots, 'left', {}, void 0, !0)], 2),
            S(r.$slots, 'default', {}, void 0, !0),
            A('div', { class: z(`${c(t)}__right`) }, [S(r.$slots, 'right', {}, void 0, !0)], 2),
          ],
          6,
        )
      );
    },
  }),
  Q = se(we, [['__scopeId', 'data-v-dafa78ce']]);
function _e(s, t, a, r, g = 0, w = E(0)) {
  const k = E(null),
    { footerHeightRef: h } = ve();
  let u = { useLayoutFooter: !0 };
  const m = (i) => {
    u = i;
  };
  function I() {
    N(() => {
      _();
    });
  }
  function C(i, B = 'all') {
    var b, F, v, P;
    function y(o) {
      return Number(o.replace(/[^\d]/g, ''));
    }
    let l = 0;
    const d = '0px';
    if (i) {
      const o = getComputedStyle(i),
        e = y((b = o == null ? void 0 : o.marginTop) != null ? b : d),
        n = y((F = o == null ? void 0 : o.marginBottom) != null ? F : d),
        H = y((v = o == null ? void 0 : o.paddingTop) != null ? v : d),
        R = y((P = o == null ? void 0 : o.paddingBottom) != null ? P : d);
      B === 'all'
        ? ((l += e), (l += n), (l += H), (l += R))
        : B === 'top'
          ? ((l += e), (l += H))
          : ((l += n), (l += R));
    }
    return l;
  }
  function $(i) {
    return i == null ? null : i instanceof HTMLDivElement ? i : i.$el;
  }
  function _() {
    return q(this, null, function* () {
      var P;
      if (!s.value) return;
      yield N();
      const i = $(c(t));
      if (!i) return;
      const { bottomIncludeBody: B } = re(i);
      let y = 0;
      a.forEach((o) => {
        var e, n;
        y += (n = (e = $(c(o))) == null ? void 0 : e.offsetHeight) != null ? n : 0;
      });
      let l = (P = C(i)) != null ? P : 0;
      r.forEach((o) => {
        l += C($(c(o)));
      });
      let d = 0;
      function b(o, e) {
        if (o && e) {
          const n = o.parentElement;
          n &&
            (Se(e)
              ? n.classList.contains(e)
                ? (d += C(n, 'bottom'))
                : ((d += C(n, 'bottom')), b(n, e))
              : ke(e) && e > 0 && ((d += C(n, 'bottom')), b(n, --e)));
        }
      }
      le(g) ? b(i, c(g)) : b(i, g);
      let F = B - c(h) - c(w) - y - l - d;
      const v = () => {
        var o;
        (o = u.elements) == null ||
          o.forEach((e) => {
            var n, H;
            F += (H = (n = $(c(e))) == null ? void 0 : n.offsetHeight) != null ? H : 0;
          });
      };
      u.useLayoutFooter && c(h) > 0, v(), (k.value = F);
    });
  }
  return (
    Pe(() => {
      N(() => {
        _();
      });
    }),
    Re(
      () => {
        _();
      },
      { wait: 50, immediate: !0 },
    ),
    D(
      () => [h.value],
      () => {
        _();
      },
      { flush: 'post', immediate: !0 },
    ),
    { redoHeight: I, setCompensation: m, contentHeight: k }
  );
}
const Be = J({
  name: 'PageWrapper',
  inheritAttrs: !1,
  __name: 'PageWrapper',
  props: {
    title: f.string,
    dense: f.bool,
    ghost: f.bool,
    headerSticky: f.bool,
    headerStyle: Object,
    content: f.string,
    contentStyle: { type: Object },
    contentBackground: f.bool,
    contentFullHeight: f.bool.def(!1),
    contentClass: f.string,
    fixedHeight: f.bool,
    upwardSpace: f.oneOfType([f.number, f.string]).def(0),
  },
  setup(s) {
    const t = s,
      a = ue(),
      r = fe(),
      g = E(null),
      w = E(null),
      k = E(null),
      h = E(null),
      { height: u } = ie(g),
      { prefixCls: m } = U('page-wrapper');
    ge(
      ce,
      p(() => t.fixedHeight),
    );
    const I = p(() => t.contentFullHeight),
      C = p(() => t.upwardSpace),
      { redoHeight: $, setCompensation: _, contentHeight: i } = _e(I, g, [w, h], [k], C),
      B = Ce($, 50);
    _({ useLayoutFooter: !0, elements: [h] });
    const y = p(() => {
        var e;
        return [m, { [`${m}--dense`]: t.dense }, (e = a.class) != null ? e : {}];
      }),
      l = p(() => {
        const { contentFullHeight: e, fixedHeight: n } = t;
        return x({}, e && n ? { height: '100%' } : {});
      }),
      d = p(() => {
        const { headerSticky: e } = t;
        return e ? x({ position: 'sticky', top: 0, zIndex: 99 }, t.headerStyle) : {};
      }),
      b = p(() => t.content || (r == null ? void 0 : r.headerContent) || t.title || v.value.length),
      F = p(() => (r == null ? void 0 : r.leftFooter) || (r == null ? void 0 : r.rightFooter)),
      v = p(() => Object.keys(O(r, 'default', 'leftFooter', 'rightFooter', 'headerContent'))),
      P = p(() => {
        const { contentFullHeight: e, contentStyle: n, fixedHeight: H } = t;
        if (!e) return x({}, n);
        const R = `${c(i)}px`;
        return x(Z(x({}, n), { minHeight: R }), H ? { height: R } : {});
      }),
      o = p(() => {
        const { contentBackground: e, contentClass: n } = t;
        return [`${m}-content`, n, { [`${m}-content-bg`]: e }];
      });
    return (
      D(
        () => [F.value],
        () => {
          $();
        },
        { flush: 'post', immediate: !0 },
      ),
      D(u, () => {
        const { contentFullHeight: e, fixedHeight: n } = t;
        e && n && B();
      }),
      (e, n) => (
        T(),
        j(
          'div',
          { class: z(y.value), style: V(l.value), ref_key: 'wrapperRef', ref: g },
          [
            b.value
              ? (T(),
                G(
                  c($e),
                  pe({ key: 0, ghost: s.ghost, title: s.title }, c(O)(e.$attrs, 'class'), {
                    style: d.value,
                    ref_key: 'headerRef',
                    ref: w,
                  }),
                  he(
                    {
                      default: W(() => [
                        s.content
                          ? (T(), j(ye, { key: 0 }, [be(Fe(s.content), 1)], 64))
                          : S(e.$slots, 'headerContent', { key: 1 }),
                      ]),
                      _: 2,
                    },
                    [
                      de(v.value, (H) => ({
                        name: H,
                        fn: W((R) => [S(e.$slots, H, me(He(R || {})))]),
                      })),
                    ],
                  ),
                  1040,
                  ['ghost', 'title', 'style'],
                ))
              : L('', !0),
            A(
              'div',
              {
                class: z(['overflow-hidden', o.value]),
                style: V(P.value),
                ref_key: 'contentRef',
                ref: k,
              },
              [S(e.$slots, 'default')],
              6,
            ),
            F.value
              ? (T(),
                G(
                  Q,
                  { key: 1, ref_key: 'footerRef', ref: h },
                  {
                    left: W(() => [S(e.$slots, 'leftFooter')]),
                    right: W(() => [S(e.$slots, 'rightFooter')]),
                    _: 3,
                  },
                  512,
                ))
              : L('', !0),
          ],
          6,
        )
      )
    );
  },
});
X(Q);
const je = X(Be);
export { je as P };
