import { S as y, G as g, D as C } from './siteSetting-BSGR9S7Z.js';
import { D as h, f as k, o as i, h as v, c as S } from '../index.js';
import {
  d as L,
  Y as R,
  f as x,
  c as F,
  u as e,
  Z as I,
  a8 as $,
  a9 as b,
  $ as a,
  a0 as d,
  k as w,
  a1 as u,
  ab as D,
  a2 as B,
  a3 as H,
} from './vue-BjERyvPm.js';
import { u as U } from './useContentViewHeight-mbS0GS8E.js';
import { a5 as V, L as G } from './antd-BmrhB3rb.js';
import './useWindowSizeFn-B5LTQhvs.js';
const N = (s) => (B('data-v-a1a86b86'), (s = s()), H(), s),
  T = N(() => a('div', null, 'Copyright ©2020 Vben Admin', -1)),
  z = L({
    name: 'LayoutFooter',
    __name: 'index',
    setup(s) {
      const { t: l } = v(),
        { getShowFooter: c } = h(),
        { currentRoute: m } = R(),
        { prefixCls: n } = k('layout-footer'),
        f = x(null),
        { setFooterHeight: p } = U(),
        _ = F(() => {
          var r, o;
          if (e(c)) {
            const t = (r = e(f)) == null ? void 0 : r.$el;
            p((t == null ? void 0 : t.offsetHeight) || 0);
          } else p(0);
          return e(c) && !((o = e(m).meta) != null && o.hiddenFooter);
        });
      return (r, o) =>
        _.value
          ? (I(),
            $(
              e(G).Footer,
              { key: 0, class: u(e(n)), ref_key: 'footerRef', ref: f },
              {
                default: b(() => [
                  a(
                    'div',
                    { class: u(`${e(n)}__links`) },
                    [
                      a(
                        'a',
                        { onClick: o[0] || (o[0] = (t) => e(i)(e(y))) },
                        d(e(l)('layout.footer.onlinePreview')),
                        1,
                      ),
                      w(
                        e(V),
                        {
                          onClick: o[1] || (o[1] = (t) => e(i)(e(g))),
                          class: u(`${e(n)}__github`),
                        },
                        null,
                        8,
                        ['class'],
                      ),
                      a(
                        'a',
                        { onClick: o[2] || (o[2] = (t) => e(i)(e(C))) },
                        d(e(l)('layout.footer.onlineDocument')),
                        1,
                      ),
                    ],
                    2,
                  ),
                  T,
                ]),
                _: 1,
              },
              8,
              ['class'],
            ))
          : D('', !0);
    },
  }),
  j = S(z, [['__scopeId', 'data-v-a1a86b86']]);
export { j as default };