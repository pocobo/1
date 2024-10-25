var fe = Object.defineProperty,
  de = Object.defineProperties;
var ge = Object.getOwnPropertyDescriptors;
var G = Object.getOwnPropertySymbols;
var me = Object.prototype.hasOwnProperty,
  he = Object.prototype.propertyIsEnumerable;
var J = (n, l, s) =>
    l in n ? fe(n, l, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (n[l] = s),
  y = (n, l) => {
    for (var s in l || (l = {})) me.call(l, s) && J(n, s, l[s]);
    if (G) for (var s of G(l)) he.call(l, s) && J(n, s, l[s]);
    return n;
  },
  j = (n, l) => de(n, ge(l));
var K = (n, l, s) =>
  new Promise((i, c) => {
    var u = (a) => {
        try {
          r(s.next(a));
        } catch (p) {
          c(p);
        }
      },
      e = (a) => {
        try {
          r(s.throw(a));
        } catch (p) {
          c(p);
        }
      },
      r = (a) => (a.done ? i(a.value) : Promise.resolve(a.value).then(u, e));
    r((s = s.apply(n, l)).next());
  });
import {
  h as x,
  f as q,
  p as I,
  O as we,
  r as ye,
  d as X,
  U as ke,
  t as ee,
  v as De,
  K as te,
  w as Be,
} from '../index.js';
import {
  d as z,
  c as h,
  a7 as ve,
  Z as d,
  _ as b,
  F as $e,
  ae as g,
  a8 as O,
  a9 as w,
  G as _,
  a0 as F,
  ac as H,
  ab as P,
  a1 as D,
  u as o,
  ag as oe,
  $ as Z,
  k as E,
  f as k,
  g as L,
  w as Q,
  n as Ce,
  ad as W,
  m as be,
  aa as Pe,
  aj as Oe,
  ak as Te,
  y as se,
  r as ae,
  J as S,
  h as Se,
} from './vue-BjERyvPm.js';
import { b4 as Fe, aa as He, X as Le, e as ne, a as Ne } from './antd-BmrhB3rb.js';
const { t: Y } = x(),
  re = {
    confirmLoading: { type: Boolean },
    showCancelBtn: { type: Boolean, default: !0 },
    cancelButtonProps: Object,
    cancelText: { type: String, default: Y('common.cancelText') },
    showOkBtn: { type: Boolean, default: !0 },
    okButtonProps: Object,
    okText: { type: String, default: Y('common.okText') },
    okType: { type: String, default: 'primary' },
    showFooter: { type: Boolean },
    footerHeight: { type: [String, Number], default: 60 },
  },
  Re = y(
    {
      isDetail: { type: Boolean },
      title: { type: String, default: '' },
      loadingText: { type: String },
      showDetailBack: { type: Boolean, default: !0 },
      open: { type: Boolean },
      loading: { type: Boolean },
      maskClosable: { type: Boolean, default: !0 },
      getContainer: { type: [Object, String] },
      closeFunc: { type: [Function, Object], default: null },
      destroyOnClose: { type: Boolean },
    },
    re,
  ),
  je = z({
    name: 'BasicDrawerFooter',
    __name: 'DrawerFooter',
    props: j(y({}, re), { height: { type: String, default: '60px' } }),
    emits: ['ok', 'close'],
    setup(n, { emit: l }) {
      const s = n,
        i = l,
        { prefixCls: c } = q('basic-drawer-footer'),
        u = h(() => {
          const a = `${s.height}`;
          return { height: a, lineHeight: `calc(${a} - 1px)` };
        });
      function e() {
        i('ok');
      }
      function r() {
        i('close');
      }
      return (a, p) => {
        const m = ve('a-button');
        return a.showFooter || a.$slots.footer
          ? (d(),
            b(
              'div',
              { key: 0, class: D(o(c)), style: oe(u.value) },
              [
                a.$slots.footer
                  ? g(a.$slots, 'footer', { key: 1 })
                  : (d(),
                    b(
                      $e,
                      { key: 0 },
                      [
                        g(a.$slots, 'insertFooter'),
                        a.showCancelBtn
                          ? (d(),
                            O(
                              m,
                              H({ key: 0 }, a.cancelButtonProps, { onClick: r, class: 'mr-2' }),
                              { default: w(() => [_(F(a.cancelText), 1)]), _: 1 },
                              16,
                            ))
                          : P('', !0),
                        g(a.$slots, 'centerFooter'),
                        a.showOkBtn
                          ? (d(),
                            O(
                              m,
                              H({ key: 1, type: a.okType, onClick: e }, a.okButtonProps, {
                                class: 'mr-2',
                                loading: a.confirmLoading,
                              }),
                              { default: w(() => [_(F(a.okText), 1)]), _: 1 },
                              16,
                              ['type', 'loading'],
                            ))
                          : P('', !0),
                        g(a.$slots, 'appendFooter'),
                      ],
                      64,
                    )),
              ],
              6,
            ))
          : P('', !0);
      };
    },
  }),
  Ie = { key: 1 },
  _e = z({
    name: 'BasicDrawerHeader',
    __name: 'DrawerHeader',
    props: { isDetail: I.bool, showDetailBack: I.bool, title: I.string },
    emits: ['close'],
    setup(n, { emit: l }) {
      const s = l,
        { prefixCls: i } = q('basic-drawer-header');
      function c() {
        s('close');
      }
      return (u, e) =>
        n.isDetail
          ? (d(),
            b(
              'div',
              { key: 1, class: D([o(i), `${o(i)}--detail`]) },
              [
                Z(
                  'span',
                  { class: D(`${o(i)}__twrap`) },
                  [
                    n.showDetailBack
                      ? (d(),
                        b('span', { key: 0, onClick: c }, [
                          E(o(Fe), { class: D(`${o(i)}__back`) }, null, 8, ['class']),
                        ]))
                      : P('', !0),
                    n.title ? (d(), b('span', Ie, F(n.title), 1)) : P('', !0),
                  ],
                  2,
                ),
                Z('span', { class: D(`${o(i)}__toolbar`) }, [g(u.$slots, 'titleToolbar')], 2),
              ],
              2,
            ))
          : (d(),
            O(
              o(we),
              { key: 0, class: D(o(i)) },
              {
                default: w(() => [
                  g(u.$slots, 'title'),
                  _(' ' + F(u.$slots.title ? '' : n.title), 1),
                ]),
                _: 3,
              },
              8,
              ['class'],
            ));
    },
  }),
  Ee = z({
    inheritAttrs: !1,
    __name: 'BasicDrawer',
    props: Re,
    emits: ['open-change', 'ok', 'close', 'register'],
    setup(n, { emit: l }) {
      const s = n,
        i = l,
        c = k(!1),
        u = ye(),
        e = k({}),
        { t: r } = x(),
        { prefixVar: a, prefixCls: p } = q('basic-drawer'),
        m = { setDrawerProps: ue, emitOpen: void 0 },
        T = L();
      T && i('register', m, T.uid);
      const A = h(() => X(s, o(e))),
        v = h(() => {
          const t = j(y(y({ placement: 'right' }, o(u)), o(A)), { open: o(c) });
          t.title = void 0;
          const { isDetail: f, width: $, wrapClassName: C, getContainer: R } = t;
          if (f) {
            $ || (t.width = '100%');
            const U = `${p}__detail`;
            (t.rootClassName = C ? `${C} ${U}` : U), R || (t.getContainer = `.${a}-layout-content`);
          }
          return t;
        }),
        le = h(() => y(y({}, u), o(v))),
        M = h(() => {
          const { footerHeight: t, showFooter: f } = o(v);
          return f && t ? (He(t) ? `${t}px` : `${t.replace('px', '')}px`) : '0px';
        }),
        ie = h(() => ({ position: 'relative', height: `calc(100% - ${o(M)})` })),
        ce = h(() => {
          var t;
          return !!((t = o(v)) != null && t.loading);
        });
      Q(
        () => s.open,
        (t, f) => {
          t !== f && (c.value = t);
        },
        { deep: !0 },
      ),
        Q(
          () => c.value,
          (t) => {
            se(() => {
              i('open-change', t), T && m.emitOpen && m.emitOpen(t, T.uid);
            });
          },
        );
      function N(t) {
        return K(this, null, function* () {
          const { closeFunc: f } = o(v);
          if ((i('close', t), f && ne(f))) {
            const $ = yield f();
            c.value = !$;
            return;
          }
          c.value = !1;
        });
      }
      function ue(t) {
        (e.value = X(o(e), t)), Reflect.has(t, 'open') && (c.value = !!t.open);
      }
      function pe() {
        i('ok');
      }
      return (t, f) => {
        const $ = Ce('loading');
        return (
          d(),
          O(
            o(Le),
            H(le.value, { class: o(p), onClose: N }),
            W(
              {
                default: w(() => [
                  be(
                    (d(),
                    O(
                      o(ke),
                      {
                        style: oe(ie.value),
                        'loading-tip': t.loadingText || o(r)('common.loadingText'),
                      },
                      { default: w(() => [g(t.$slots, 'default')]), _: 3 },
                      8,
                      ['style', 'loading-tip'],
                    )),
                    [[$, ce.value]],
                  ),
                  E(
                    je,
                    H(v.value, { onClose: N, onOk: pe, height: M.value }),
                    W({ _: 2 }, [
                      Pe(Object.keys(t.$slots), (C) => ({
                        name: C,
                        fn: w((R) => [g(t.$slots, C, Oe(Te(R || {})))]),
                      })),
                    ]),
                    1040,
                    ['height'],
                  ),
                ]),
                _: 2,
              },
              [
                t.$slots.title
                  ? { name: 'title', fn: w(() => [g(t.$slots, 'title')]), key: '1' }
                  : {
                      name: 'title',
                      fn: w(() => [
                        E(
                          _e,
                          {
                            title: A.value.title,
                            isDetail: t.isDetail,
                            showDetailBack: t.showDetailBack,
                            onClose: N,
                          },
                          { titleToolbar: w(() => [g(t.$slots, 'titleToolbar')]), _: 3 },
                          8,
                          ['title', 'isDetail', 'showDetailBack'],
                        ),
                      ]),
                      key: '0',
                    },
              ],
            ),
            1040,
            ['class'],
          )
        );
      };
    },
  }),
  B = ae({}),
  V = ae({});
function Me() {
  if (!L())
    throw new Error('useDrawer() can only be used inside setup() or functional components!');
  const n = k(null),
    l = k(!1),
    s = k(0);
  function i(e, r) {
    ee(() => {
      (n.value = null), (l.value = null), (B[o(s)] = null);
    }),
      !(o(l) && De() && e === o(n)) &&
        ((s.value = r),
        (n.value = e),
        (l.value = !0),
        (e.emitOpen = (a, p) => {
          V[p] = a;
        }));
  }
  const c = () => {
      const e = o(n);
      return e || te('useDrawer instance is undefined!'), e;
    },
    u = {
      setDrawerProps: (e) => {
        var r;
        (r = c()) == null || r.setDrawerProps(e);
      },
      getOpen: h(() => V[~~o(s)]),
      openDrawer: (e = !0, r, a = !0) => {
        var m;
        if (((m = c()) == null || m.setDrawerProps({ open: e }), !r)) return;
        if (a) {
          (B[o(s)] = null), (B[o(s)] = S(r));
          return;
        }
        Ne(S(B[o(s)]), S(r)) || (B[o(s)] = S(r));
      },
      closeDrawer: () => {
        var e;
        (e = c()) == null || e.setDrawerProps({ open: !1 });
      },
    };
  return [i, u];
}
const Ue = (n) => {
    const l = k(null),
      s = L(),
      i = k(0);
    if (!L())
      throw new Error('useDrawerInner() can only be used inside setup() or functional components!');
    const c = () => {
        const e = o(l);
        if (!e) {
          te('useDrawerInner instance is undefined!');
          return;
        }
        return e;
      },
      u = (e, r) => {
        ee(() => {
          l.value = null;
        }),
          (i.value = r),
          (l.value = e),
          s == null || s.emit('register', e, r);
      };
    return (
      Se(() => {
        const e = B[o(i)];
        e &&
          (!n ||
            !ne(n) ||
            se(() => {
              n(e);
            }));
      }),
      [
        u,
        {
          changeLoading: (e = !0) => {
            var r;
            (r = c()) == null || r.setDrawerProps({ loading: e });
          },
          changeOkLoading: (e = !0) => {
            var r;
            (r = c()) == null || r.setDrawerProps({ confirmLoading: e });
          },
          getOpen: h(() => V[~~o(i)]),
          closeDrawer: () => {
            var e;
            (e = c()) == null || e.setDrawerProps({ open: !1 });
          },
          setDrawerProps: (e) => {
            var r;
            (r = c()) == null || r.setDrawerProps(e);
          },
        },
      ]
    );
  },
  Ge = Be(Ee);
export { Ge as B, Ue as a, Me as u };
