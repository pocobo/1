var J = Object.defineProperty,
  K = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty,
  tt = Object.prototype.propertyIsEnumerable;
var k = (e, r, d) =>
    r in e ? J(e, r, { enumerable: !0, configurable: !0, writable: !0, value: d }) : (e[r] = d),
  v = (e, r) => {
    for (var d in r || (r = {})) Y.call(r, d) && k(e, d, r[d]);
    if (C) for (var d of C(r)) tt.call(r, d) && k(e, d, r[d]);
    return e;
  },
  F = (e, r) => K(e, Q(r));
import { h as V, F as et, E as A, s as X, aH as W, w as Z } from '../index.js';
import {
  d as H,
  r as U,
  f as $,
  c as D,
  w as q,
  h as nt,
  k as h,
  u,
  ac as st,
} from './vue-BjERyvPm.js';
import { aU as it, b6 as at } from './antd-BmrhB3rb.js';
const { t: j } = V(),
  z = {
    value: { type: Boolean, default: !1 },
    isSlot: { type: Boolean, default: !1 },
    text: { type: [String], default: j('component.verify.dragText') },
    successText: { type: [String], default: j('component.verify.successText') },
    height: { type: [Number, String], default: 40 },
    width: { type: [Number, String], default: 220 },
    circle: { type: Boolean, default: !1 },
    wrapStyle: { type: Object, default: () => ({}) },
    contentStyle: { type: Object, default: () => ({}) },
    barStyle: { type: Object, default: () => ({}) },
    actionStyle: { type: Object, default: () => ({}) },
  },
  ot = F(v({}, z), {
    src: { type: String },
    imgWidth: { type: Number, default: 260 },
    imgWrapStyle: { type: Object, default: () => ({}) },
    minDegree: { type: Number, default: 90 },
    maxDegree: { type: Number, default: 270 },
    diffDegree: { type: Number, default: 20 },
  }),
  G = H({
    name: 'BaseDargVerify',
    props: z,
    emits: ['success', 'update:value', 'change', 'start', 'move', 'end'],
    setup(e, { emit: r, slots: d, expose: _ }) {
      const n = U({
          isMoving: !1,
          isPassing: !1,
          moveDistance: 0,
          toLeft: !1,
          startTime: 0,
          endTime: 0,
        }),
        s = $(null),
        w = $(null),
        b = $(null),
        x = $(null);
      et({
        el: document,
        name: 'mouseup',
        listener: () => {
          n.isMoving && y();
        },
      });
      const O = D(() => {
          const { height: t, actionStyle: a } = e,
            c = `${parseInt(t)}px`;
          return v({ left: 0, width: c, height: c }, a);
        }),
        N = D(() => {
          const { height: t, width: a, circle: c, wrapStyle: i } = e,
            l = parseInt(t),
            m = `${parseInt(a)}px`;
          return v(
            {
              width: m,
              height: `${l}px`,
              lineHeight: `${l}px`,
              borderRadius: c ? l / 2 + 'px' : 0,
            },
            i,
          );
        }),
        I = D(() => {
          const { height: t, circle: a, barStyle: c } = e,
            i = parseInt(t);
          return v({ height: `${i}px`, borderRadius: a ? i / 2 + 'px 0 0 ' + i / 2 + 'px' : 0 }, c);
        }),
        P = D(() => {
          const { height: t, width: a, contentStyle: c } = e,
            i = `${parseInt(t)}px`,
            l = `${parseInt(a)}px`;
          return v({ height: i, width: l }, c);
        });
      q(
        () => n.isPassing,
        (t) => {
          if (t) {
            const { startTime: a, endTime: c } = n,
              i = (c - a) / 1e3;
            r('success', { isPassing: t, time: i.toFixed(1) }),
              r('update:value', t),
              r('change', t);
          }
        },
      ),
        nt(() => {
          n.isPassing = !!e.value;
        });
      function R(t) {
        return t.pageX || t.touches[0].pageX;
      }
      function M(t) {
        if (n.isPassing) return;
        const a = u(x);
        a &&
          (r('start', t),
          (n.moveDistance = R(t) - parseInt(a.style.left.replace('px', ''), 10)),
          (n.startTime = new Date().getTime()),
          (n.isMoving = !0));
      }
      function o(t) {
        const a = parseInt(t.style.width),
          { width: c } = e,
          i = parseInt(c);
        return { offset: i - a - 6, widthNum: i, actionWidth: a };
      }
      function f(t) {
        const { isMoving: a, moveDistance: c } = n;
        if (a) {
          const i = u(x),
            l = u(w);
          if (!i || !l) return;
          const { offset: m, widthNum: S, actionWidth: E } = o(i),
            p = R(t) - c;
          r('move', { event: t, moveDistance: c, moveX: p }),
            p > 0 && p <= m
              ? ((i.style.left = `${p}px`), (l.style.width = `${p + E / 2}px`))
              : p > m &&
                ((i.style.left = `${S - E}px`),
                (l.style.width = `${S - E / 2}px`),
                e.isSlot || T());
        }
      }
      function g(t) {
        const { isMoving: a, isPassing: c, moveDistance: i } = n;
        if (a && !c) {
          r('end', t);
          const l = u(x),
            m = u(w);
          if (!l || !m) return;
          const S = R(t) - i,
            { offset: E, widthNum: p, actionWidth: B } = o(l);
          S < E
            ? e.isSlot
              ? setTimeout(() => {
                  if (!e.value) y();
                  else {
                    const L = u(b);
                    L && (L.style.width = `${parseInt(m.style.width)}px`);
                  }
                }, 0)
              : y()
            : ((l.style.left = `${p - B}px`), (m.style.width = `${p - B / 2}px`), T()),
            (n.isMoving = !1);
        }
      }
      function T() {
        if (e.isSlot) {
          y();
          return;
        }
        (n.endTime = new Date().getTime()), (n.isPassing = !0), (n.isMoving = !1);
      }
      function y() {
        (n.isMoving = !1),
          (n.isPassing = !1),
          (n.moveDistance = 0),
          (n.toLeft = !1),
          (n.startTime = 0),
          (n.endTime = 0);
        const t = u(x),
          a = u(w),
          c = u(b);
        !t ||
          !a ||
          !c ||
          ((n.toLeft = !0),
          A(() => {
            (n.toLeft = !1), (t.style.left = '0'), (a.style.width = '0');
          }, 300),
          (c.style.width = u(P).width));
      }
      return (
        _({ resume: y }),
        () => {
          const t = () => {
              const i = ['darg-verify-bar'];
              return (
                n.toLeft && i.push('to-left'), h('div', { class: i, ref: w, style: u(I) }, null)
              );
            },
            a = () => {
              const i = ['darg-verify-content'],
                { isPassing: l } = n,
                { text: m, successText: S } = e;
              return (
                l && i.push('success'),
                h('div', { class: i, ref: b, style: u(P) }, [X(d, 'text', l) || (l ? S : m)])
              );
            },
            c = () => {
              const i = ['darg-verify-action'],
                { toLeft: l, isPassing: m } = n;
              return (
                l && i.push('to-left'),
                h('div', { class: i, onMousedown: M, onTouchstart: M, style: u(O), ref: x }, [
                  X(d, 'actionIcon', m) ||
                    (m
                      ? h(it, { class: 'darg-verify-action__icon' }, null)
                      : h(at, { class: 'darg-verify-action__icon' }, null)),
                ])
              );
            };
          return h(
            'div',
            {
              class: 'darg-verify',
              ref: s,
              style: u(N),
              onMousemove: f,
              onTouchmove: f,
              onMouseleave: g,
              onMouseup: g,
              onTouchend: g,
            },
            [t(), a(), c()],
          );
        }
      );
    },
  }),
  rt = H({
    name: 'ImgRotateDragVerify',
    inheritAttrs: !1,
    props: ot,
    emits: ['success', 'change', 'update:value'],
    setup(e, { emit: r, attrs: d, expose: _ }) {
      const n = $(null),
        s = U({
          showTip: !1,
          isPassing: !1,
          imgStyle: {},
          randomRotate: 0,
          currentRotate: 0,
          toOrigin: !1,
          startTime: 0,
          endTime: 0,
          draged: !1,
        }),
        { t: w } = V();
      q(
        () => s.isPassing,
        (o) => {
          if (o) {
            const { startTime: f, endTime: g } = s,
              T = (g - f) / 1e3;
            r('success', { isPassing: o, time: T.toFixed(1) }),
              r('change', o),
              r('update:value', o);
          }
        },
      );
      const b = D(() => {
          const { imgWrapStyle: o, imgWidth: f } = e;
          return v({ width: `${f}px`, height: `${f}px` }, o);
        }),
        x = D(() => {
          const { minDegree: o, maxDegree: f } = e;
          return o === f ? Math.floor(1 + Math.random() * 1) / 10 + 1 : 1;
        });
      function O() {
        s.startTime = new Date().getTime();
      }
      function N(o) {
        s.draged = !0;
        const { imgWidth: f, height: g, maxDegree: T } = e,
          { moveX: y } = o,
          t = Math.ceil((y / (f - parseInt(g))) * T * u(x));
        (s.currentRotate = t), (s.imgStyle = W('transform', `rotateZ(${s.randomRotate - t}deg)`));
      }
      function I() {
        const { minDegree: o, maxDegree: f } = e,
          g = Math.floor(o + Math.random() * (f - o));
        (s.randomRotate = g), (s.imgStyle = W('transform', `rotateZ(${g}deg)`));
      }
      function P() {
        const { randomRotate: o, currentRotate: f } = s,
          { diffDegree: g } = e;
        Math.abs(o - f) >= (g || 20)
          ? ((s.imgStyle = W('transform', `rotateZ(${o}deg)`)),
            (s.toOrigin = !0),
            A(() => {
              (s.toOrigin = !1), (s.showTip = !0);
            }, 300))
          : R(),
          (s.showTip = !0);
      }
      function R() {
        (s.isPassing = !0), (s.endTime = new Date().getTime());
      }
      function M() {
        s.showTip = !1;
        const o = u(n);
        o && ((s.isPassing = !1), o.resume(), I());
      }
      return (
        _({ resume: M }),
        () => {
          const { src: o } = e,
            { toOrigin: f, isPassing: g, startTime: T, endTime: y } = s,
            t = [];
          f && t.push('to-origin');
          const a = (y - T) / 1e3;
          return h('div', { class: 'ir-dv' }, [
            h('div', { class: 'ir-dv-img__wrap', style: u(b) }, [
              h(
                'img',
                {
                  src: o,
                  onLoad: I,
                  width: parseInt(e.width),
                  class: t,
                  style: s.imgStyle,
                  onClick: () => {
                    M();
                  },
                  alt: 'verify',
                },
                null,
              ),
              s.showTip &&
                h('span', { class: ['ir-dv-img__tip', s.isPassing ? 'success' : 'error'] }, [
                  s.isPassing
                    ? w('component.verify.time', { time: a.toFixed(1) })
                    : w('component.verify.error'),
                ]),
              !s.showTip &&
                !s.draged &&
                h('span', { class: ['ir-dv-img__tip', 'normal'] }, [w('component.verify.redoTip')]),
            ]),
            h(
              G,
              st(
                { class: 'ir-dv-drag__bar', onMove: N, onEnd: P, onStart: O, ref: n },
                v(v({}, d), e),
                { value: g, isSlot: !0 },
              ),
              null,
            ),
          ]);
        }
      );
    },
  }),
  dt = Z(G),
  gt = Z(rt);
export { dt as B, gt as R };
