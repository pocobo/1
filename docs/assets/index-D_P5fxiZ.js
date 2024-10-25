import { z as x, c as g } from '../index.js';
import { cardList as k } from './data-kMACwAZK.js';
import { P as $ } from './index-B24a6rfW.js';
import {
  d as C,
  Z as r,
  a8 as d,
  a9 as a,
  $ as s,
  k as c,
  u as e,
  a1 as l,
  _ as f,
  aa as I,
  ab as h,
  a0 as i,
  G as m,
  F as w,
  a2 as S,
  a3 as V,
} from './vue-BjERyvPm.js';
import { V as p, U as y, ag as u, aD as B } from './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const o = (_) => (S('data-v-93f3e319'), (_ = _()), V(), _),
  N = o(() => s('div', null, '我的待办', -1)),
  z = o(() => s('p', null, '8个任务', -1)),
  L = o(() => s('div', null, '本周任务平均处理时间', -1)),
  P = o(() => s('p', null, '32分钟', -1)),
  b = o(() => s('div', null, '本周完成任务数', -1)),
  D = o(() => s('p', null, '24个任务', -1)),
  F = { key: 0, class: 'extra' },
  E = { class: 'description' },
  G = { class: 'info' },
  M = o(() => s('span', null, 'Owner', -1)),
  O = o(() => s('span', null, '开始时间', -1)),
  R = { class: 'progress' },
  n = 'list-basic',
  T = C({
    __name: 'index',
    setup(_) {
      const v = { show: !0, pageSize: 3 };
      return (U, W) => (
        r(),
        d(
          e($),
          { class: l(n), title: '标准列表' },
          {
            default: a(() => [
              s(
                'div',
                { class: l(`${n}__top`) },
                [
                  c(
                    e(y),
                    { gutter: 12 },
                    {
                      default: a(() => [
                        c(
                          e(p),
                          { span: 8, class: l(`${n}__top-col`) },
                          { default: a(() => [N, z]), _: 1 },
                          8,
                          ['class'],
                        ),
                        c(
                          e(p),
                          { span: 8, class: l(`${n}__top-col`) },
                          { default: a(() => [L, P]), _: 1 },
                          8,
                          ['class'],
                        ),
                        c(
                          e(p),
                          { span: 8, class: l(`${n}__top-col`) },
                          { default: a(() => [b, D]), _: 1 },
                          8,
                          ['class'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ],
                2,
              ),
              s(
                'div',
                { class: l(`${n}__content`) },
                [
                  c(
                    e(u),
                    { pagination: v },
                    {
                      default: a(() => [
                        (r(!0),
                        f(
                          w,
                          null,
                          I(
                            e(k),
                            (t) => (
                              r(),
                              d(
                                e(u).Item,
                                { key: t.id, class: 'list' },
                                {
                                  default: a(() => [
                                    c(
                                      e(u).Item.Meta,
                                      null,
                                      {
                                        avatar: a(() => [
                                          t.icon
                                            ? (r(),
                                              d(
                                                x,
                                                {
                                                  key: 0,
                                                  class: 'icon',
                                                  icon: t.icon,
                                                  color: t.color,
                                                },
                                                null,
                                                8,
                                                ['icon', 'color'],
                                              ))
                                            : h('', !0),
                                        ]),
                                        title: a(() => [
                                          s('span', null, i(t.title), 1),
                                          t.extra ? (r(), f('div', F, i(t.extra), 1)) : h('', !0),
                                        ]),
                                        description: a(() => [
                                          s('div', E, i(t.description), 1),
                                          s('div', G, [
                                            s('div', null, [M, m(i(t.author), 1)]),
                                            s('div', null, [O, m(i(t.datetime), 1)]),
                                          ]),
                                          s('div', R, [
                                            c(
                                              e(B),
                                              { percent: t.percent, status: 'active' },
                                              null,
                                              8,
                                              ['percent'],
                                            ),
                                          ]),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    },
                  ),
                ],
                2,
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  X = g(T, [['__scopeId', 'data-v-93f3e319']]);
export { X as default };
