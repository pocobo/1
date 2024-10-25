import { l as S, z as m, C as v, c as T } from '../index.js';
import { _ as V } from './Application.vue_vue_type_style_index_0_lang-wTsFt3rU.js';
import w from './Article-CYSni9HU.js';
import { _ as B } from './Project.vue_vue_type_style_index_0_lang-B1j_kOGW.js';
import { h as E } from './header-BHmVmQ6a.js';
import { details as N, tags as P, teams as U, achieveList as z } from './data-NRFjrms5.js';
import { a0 as $, V as i, U as h, Q as A } from './antd-BmrhB3rb.js';
import {
  d as D,
  c as F,
  Z as o,
  _ as c,
  k as e,
  a9 as t,
  u as a,
  a1 as l,
  $ as r,
  F as p,
  aa as u,
  G as x,
  a0 as d,
  a8 as f,
  ai as L,
  a2 as j,
  a3 as G,
} from './vue-BjERyvPm.js';
const b = (_) => (j('data-v-a002edf4'), (_ = _()), G(), _),
  Q = ['src'],
  R = b(() => r('span', null, 'Vben', -1)),
  Z = b(() => r('div', null, '海纳百川，有容乃大', -1)),
  n = 'account-center',
  q = D({
    __name: 'index',
    setup(_) {
      const k = S(),
        C = $.TabPane,
        y = { Article: w, Application: V, Project: B },
        g = F(() => k.getUserInfo.avatar || E);
      return (H, J) => (
        o(),
        c('div', { class: l(n) }, [
          e(
            a(h),
            { class: l(`${n}-top`) },
            {
              default: t(() => [
                e(
                  a(i),
                  { span: 9, class: l(`${n}-col`) },
                  {
                    default: t(() => [
                      e(a(h), null, {
                        default: t(() => [
                          e(
                            a(i),
                            { span: 8 },
                            {
                              default: t(() => [
                                r(
                                  'div',
                                  { class: l(`${n}-top__avatar`) },
                                  [r('img', { width: '70', src: g.value }, null, 8, Q), R, Z],
                                  2,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          e(
                            a(i),
                            { span: 16 },
                            {
                              default: t(() => [
                                r(
                                  'div',
                                  { class: l(`${n}-top__detail`) },
                                  [
                                    (o(!0),
                                    c(
                                      p,
                                      null,
                                      u(
                                        a(N),
                                        (s) => (
                                          o(),
                                          c('p', { key: s.title }, [
                                            e(m, { icon: s.icon }, null, 8, ['icon']),
                                            x(' ' + d(s.title), 1),
                                          ])
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                  2,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ['class'],
                ),
                e(
                  a(i),
                  { span: 7, class: l(`${n}-col`) },
                  {
                    default: t(() => [
                      e(
                        a(v),
                        { title: '标签', canExpand: !1 },
                        {
                          default: t(() => [
                            (o(!0),
                            c(
                              p,
                              null,
                              u(
                                a(P),
                                (s) => (
                                  o(),
                                  f(
                                    a(A),
                                    { key: s, class: 'mb-2' },
                                    { default: t(() => [x(d(s), 1)]), _: 2 },
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
                    ]),
                    _: 1,
                  },
                  8,
                  ['class'],
                ),
                e(
                  a(i),
                  { span: 8, class: l(`${n}-col`) },
                  {
                    default: t(() => [
                      e(
                        a(v),
                        { class: l(`${n}-top__team`), title: '团队', canExpand: !1 },
                        {
                          default: t(() => [
                            (o(!0),
                            c(
                              p,
                              null,
                              u(
                                a(U),
                                (s, I) => (
                                  o(),
                                  c(
                                    'div',
                                    { key: I, class: l(`${n}-top__team-item`) },
                                    [
                                      e(m, { icon: s.icon, color: s.color }, null, 8, [
                                        'icon',
                                        'color',
                                      ]),
                                      r('span', null, d(s.title), 1),
                                    ],
                                    2,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                          _: 1,
                        },
                        8,
                        ['class'],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['class'],
                ),
              ]),
              _: 1,
            },
            8,
            ['class'],
          ),
          r(
            'div',
            { class: l(`${n}-bottom`) },
            [
              e(a($), null, {
                default: t(() => [
                  (o(!0),
                  c(
                    p,
                    null,
                    u(
                      a(z),
                      (s) => (
                        o(),
                        f(
                          a(C),
                          { key: s.key, tab: s.name },
                          { default: t(() => [(o(), f(L(y[s.component])))]), _: 2 },
                          1032,
                          ['tab'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              }),
            ],
            2,
          ),
        ])
      );
    },
  }),
  ea = T(q, [['__scopeId', 'data-v-a002edf4']]);
export { ea as default };
