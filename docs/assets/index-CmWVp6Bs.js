import { c as T, w as z, C as k } from '../index.js';
import {
  d as C,
  f as r,
  Z as $,
  _ as F,
  $ as f,
  ag as V,
  ae as y,
  G as c,
  a0 as g,
  a1 as M,
  a2 as B,
  a3 as I,
  c as R,
  h as W,
  a8 as A,
  a9 as a,
  ac as _,
  y as D,
  k as v,
  u as m,
} from './vue-BjERyvPm.js';
import { P } from './index-B24a6rfW.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
function H(l, s = 0, t = !1) {
  const d = typeof window != 'undefined' ? window.requestAnimationFrame : () => {};
  let i = null;
  function o(u) {
    i || (i = u), u - i >= s ? (l(), t && ((i = null), (n.id = d(o)))) : (n.id = d(o));
  }
  const n = { id: d(o) };
  return n;
}
function N(l) {
  const s = typeof window != 'undefined' ? window.cancelAnimationFrame : () => {};
  l && l.id && s(l.id);
}
const q = (l) => (B('data-v-7700551a'), (l = l()), I(), l),
  O = q(() =>
    f('div', { class: 'm-tooltip-arrow' }, [f('span', { class: 'u-tooltip-arrow' })], -1),
  ),
  j = C({
    __name: 'Tooltip',
    props: {
      maxWidth: { default: 120 },
      content: { default: '暂无内容' },
      tooltip: { default: '暂无提示' },
      fontSize: { default: 14 },
      color: { default: '#FFF' },
      backgroundColor: { default: 'rgba(0, 0, 0, .85)' },
      overlayStyle: { default: () => ({}) },
    },
    emits: ['openChange'],
    setup(l, { emit: s }) {
      const t = r(!1),
        d = r(),
        i = r(0),
        o = r(0),
        n = r(),
        u = r();
      function w() {
        const p = n.value && n.value.offsetWidth,
          S = u.value && u.value.offsetWidth,
          E = u.value && u.value.offsetHeight;
        (i.value = E + 4), (o.value = (S - p) / 2);
      }
      const e = s;
      function h() {
        w(), N(d.value), (t.value = !0), e('openChange', t.value);
      }
      function b() {
        d.value = H(() => {
          (t.value = !1), e('openChange', t.value);
        }, 100);
      }
      return (p, S) => (
        $(),
        F(
          'div',
          { class: 'm-tooltip', onMouseenter: h, onMouseleave: b },
          [
            f(
              'div',
              {
                ref_key: 'tooltipRef',
                ref: u,
                class: M(['m-tooltip-content', { 'show-tip': t.value }]),
                style: V(
                  `--tooltip-font-size: ${p.fontSize}px; --tooltip-color: ${p.color}; --tooltip-background-color: ${p.backgroundColor}; max-width: ${p.maxWidth}px; top: ${-i.value}px; left: ${-o.value}px;`,
                ),
                onMouseenter: h,
                onMouseleave: b,
              },
              [
                f(
                  'div',
                  { class: 'u-tooltip', style: V(p.overlayStyle) },
                  [y(p.$slots, 'tooltip', {}, () => [c(g(p.tooltip), 1)], !0)],
                  4,
                ),
                O,
              ],
              38,
            ),
            f(
              'div',
              { ref_key: 'contentRef', ref: n },
              [y(p.$slots, 'default', {}, () => [c(g(p.content), 1)], !0)],
              512,
            ),
          ],
          32,
        )
      );
    },
  }),
  G = T(j, [['__scopeId', 'data-v-7700551a']]),
  Z = C({
    __name: 'EllipsisText',
    props: {
      maxWidth: { default: '100%' },
      line: { default: void 0 },
      expand: { type: Boolean, default: !1 },
      tooltip: { type: Boolean, default: !0 },
      tooltipMaxWidth: { default: void 0 },
      tooltipFontSize: { default: 14 },
      tooltipColor: { default: '#FFF' },
      tooltipBackgroundColor: { default: 'rgba(0, 0, 0, .85)' },
      tooltipOverlayStyle: { default: () => ({ padding: '8px 12px', textAlign: 'justify' }) },
    },
    emits: ['expandChange'],
    setup(l, { emit: s }) {
      const t = l,
        d = R(() => (typeof t.maxWidth == 'number' ? t.maxWidth + 'px' : t.maxWidth)),
        i = r(),
        o = r(),
        n = r();
      W(() => {
        i.value = t.tooltip;
      }),
        W(
          () => {
            t.tooltip &&
              (t.tooltipMaxWidth
                ? (n.value = t.tooltipMaxWidth)
                : (n.value = o.value.offsetWidth + 24));
          },
          { flush: 'post' },
        );
      const u = s;
      function w() {
        o.value.style['-webkit-line-clamp']
          ? (t.tooltip
              ? ((i.value = !1),
                D(() => {
                  o.value.style['-webkit-line-clamp'] = '';
                }))
              : (o.value.style['-webkit-line-clamp'] = ''),
            u('expandChange', !0))
          : (t.tooltip && (i.value = !0),
            (o.value.style['-webkit-line-clamp'] = t.line),
            u('expandChange', !1));
      }
      return (e, h) =>
        i.value
          ? ($(),
            A(
              G,
              {
                key: 0,
                'max-width': n.value,
                fontSize: e.tooltipFontSize,
                color: e.tooltipColor,
                backgroundColor: e.tooltipBackgroundColor,
                overlayStyle: e.tooltipOverlayStyle,
              },
              {
                tooltip: a(() => [
                  y(e.$slots, 'tooltip', {}, () => [y(e.$slots, 'default', {}, void 0, !0)], !0),
                ]),
                default: a(() => [
                  f(
                    'div',
                    _(
                      {
                        ref_key: 'ellipsis',
                        ref: o,
                        class: [
                          'm-ellipsis',
                          [
                            e.line ? 'ellipsis-line' : 'not-ellipsis-line',
                            { 'cursor-pointer': e.expand },
                          ],
                        ],
                        style: `-webkit-line-clamp: ${e.line}; max-width: ${d.value};`,
                        onClick: h[0] || (h[0] = (b) => (e.expand ? w() : () => !1)),
                      },
                      e.$attrs,
                    ),
                    [y(e.$slots, 'default', {}, void 0, !0)],
                    16,
                  ),
                ]),
                _: 3,
              },
              8,
              ['max-width', 'fontSize', 'color', 'backgroundColor', 'overlayStyle'],
            ))
          : ($(),
            F(
              'div',
              _(
                {
                  key: 1,
                  ref_key: 'ellipsis',
                  ref: o,
                  class: [
                    'm-ellipsis',
                    [
                      e.line ? 'ellipsis-line' : 'not-ellipsis-line',
                      { 'cursor-pointer': e.expand },
                    ],
                  ],
                  style: `-webkit-line-clamp: ${e.line}; max-width: ${d.value};`,
                  onClick: h[1] || (h[1] = (b) => (e.expand ? w() : () => !1)),
                },
                e.$attrs,
              ),
              [y(e.$slots, 'default', {}, void 0, !0)],
              16,
            ));
    },
  }),
  J = T(Z, [['__scopeId', 'data-v-28036376']]),
  x = z(J),
  K = f(
    'div',
    { style: { 'text-align': 'center' } },
    [
      c(' 《秦皇岛》'),
      f('br'),
      c('住在我心里孤独的'),
      f('br'),
      c('孤独的海怪 痛苦之王'),
      f('br'),
      c('开始厌倦 深海的光 停滞的海浪 '),
    ],
    -1,
  ),
  oe = C({
    __name: 'index',
    setup(l) {
      const s = r(`
    Vue-Vben-Admin 是一个基于 Vue3.0、Vite、 Ant-Design-Vue、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。
      包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。
      也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。Vue-Vben-Admin 是一个基于 Vue3.0、Vite、 Ant-Design-Vue、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。
      包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。
      也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。Vue-Vben-Admin 是一个基于 Vue3.0、Vite、 Ant-Design-Vue、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。
      包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。
      也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。
   `);
      return (t, d) => (
        $(),
        A(
          m(P),
          { title: '文本省略示例' },
          {
            default: a(() => [
              v(
                m(k),
                { class: 'w-full bg-white rounded-md mb-4', title: 'Ellipsis 基本使用' },
                {
                  default: a(() => [
                    v(m(x), { maxWidth: 240 }, { default: a(() => [c(g(s.value), 1)]), _: 1 }),
                  ]),
                  _: 1,
                },
              ),
              v(
                m(k),
                { class: 'w-full bg-white rounded-md mb-4', title: 'Ellipsis 多行省略' },
                {
                  default: a(() => [
                    v(m(x), { line: 2 }, { default: a(() => [c(g(s.value), 1)]), _: 1 }),
                  ]),
                  _: 1,
                },
              ),
              v(
                m(k),
                { class: 'w-full bg-white rounded-md mb-4', title: 'Ellipsis 点击展开' },
                {
                  default: a(() => [
                    v(
                      m(x),
                      { expand: '', line: 3 },
                      { default: a(() => [c(g(s.value), 1)]), _: 1 },
                    ),
                  ]),
                  _: 1,
                },
              ),
              v(
                m(k),
                { class: 'w-full bg-white rounded-md mb-4', title: 'Ellipsis 定制 Tooltip 内容' },
                {
                  default: a(() => [
                    v(
                      m(x),
                      { 'max-width': 240 },
                      {
                        tooltip: a(() => [K]),
                        default: a(() => [
                          c(' 住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪 '),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { oe as default };