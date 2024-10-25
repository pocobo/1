var m = (t, o, e) =>
  new Promise((n, r) => {
    var u = (s) => {
        try {
          a(e.next(s));
        } catch (i) {
          r(i);
        }
      },
      l = (s) => {
        try {
          a(e.throw(s));
        } catch (i) {
          r(i);
        }
      },
      a = (s) => (s.done ? n(s.value) : Promise.resolve(s.value).then(u, l));
    a((e = e.apply(t, o)).next());
  });
import { t as h, h as I, f as z, w as v } from '../index.js';
import {
  f,
  u as c,
  d as C,
  c as F,
  h as B,
  Z as S,
  a8 as w,
  a9 as p,
  G as k,
  a0 as A,
  ac as y,
  a7 as x,
  ad as N,
  aa as _,
  ae as $,
  aj as T,
  ak as j,
  k as D,
} from './vue-BjERyvPm.js';
import { B as O, e as P } from './antd-BmrhB3rb.js';
import { u as R } from './useFormItem-B4KjxddK.js';
function V(t) {
  const o = f(t),
    e = f(!1);
  let n;
  function r() {
    n && window.clearInterval(n);
  }
  function u() {
    (e.value = !1), r(), (n = null);
  }
  function l() {
    c(e) ||
      n ||
      ((e.value = !0),
      (n = setInterval(() => {
        c(o) === 1 ? (u(), (o.value = t)) : (o.value -= 1);
      }, 1e3)));
  }
  function a() {
    (o.value = t), u();
  }
  function s() {
    a(), l();
  }
  return (
    h(() => {
      a();
    }),
    { start: l, reset: a, restart: s, clear: r, stop: u, currentCount: o, isStart: e }
  );
}
const g = C({
    name: 'CountButton',
    __name: 'CountButton',
    props: {
      value: { type: [Object, Number, String, Array] },
      count: { type: Number, default: 60 },
      beforeStartFunc: { type: Function, default: null },
    },
    setup(t) {
      const o = t,
        { t: e } = I(),
        n = f(!1),
        { currentCount: r, isStart: u, start: l, reset: a } = V(o.count),
        s = F(() =>
          c(u) ? e('component.countdown.sendText', [c(r)]) : e('component.countdown.normalText'),
        );
      B(() => {
        o.value === void 0 && a();
      });
      function i() {
        return m(this, null, function* () {
          const { beforeStartFunc: d } = o;
          if (d && P(d)) {
            n.value = !0;
            try {
              (yield d()) && l();
            } finally {
              n.value = !1;
            }
          } else l();
        });
      }
      return (d, b) => (
        S(),
        w(
          c(O),
          y(d.$attrs, { disabled: c(u), onClick: i, loading: n.value }),
          { default: p(() => [k(A(s.value), 1)]), _: 1 },
          16,
          ['disabled', 'loading'],
        )
      );
    },
  }),
  E = C({
    name: 'CountDownInput',
    inheritAttrs: !1,
    __name: 'CountdownInput',
    props: {
      value: { type: String },
      size: { type: String, validator: (t) => ['default', 'large', 'small'].includes(t) },
      count: { type: Number, default: 60 },
      sendCodeApi: { type: Function, default: null },
    },
    setup(t) {
      const o = t,
        { prefixCls: e } = z('countdown-input'),
        [n] = R(o);
      return (r, u) => {
        const l = x('a-input');
        return (
          S(),
          w(
            l,
            y(r.$attrs, { class: c(e), size: t.size, value: c(n) }),
            N(
              {
                addonAfter: p(() => [
                  D(
                    g,
                    { size: t.size, count: t.count, value: c(n), beforeStartFunc: t.sendCodeApi },
                    null,
                    8,
                    ['size', 'count', 'value', 'beforeStartFunc'],
                  ),
                ]),
                _: 2,
              },
              [
                _(
                  Object.keys(r.$slots).filter((a) => a !== 'addonAfter'),
                  (a) => ({ name: a, fn: p((s) => [$(r.$slots, a, T(j(s || {})))]) }),
                ),
              ],
            ),
            1040,
            ['class', 'size', 'value'],
          )
        );
      };
    },
  }),
  H = v(E);
v(g);
export { H as C };
