import { f as o, c as m } from '../index.js';
import { b as p } from './index-CZxVBT9w.js';
import {
  d as i,
  Z as u,
  _ as l,
  $ as c,
  a0 as f,
  k as b,
  ac as d,
  u as t,
  a1 as I,
} from './vue-BjERyvPm.js';
import { ar as _ } from './antd-BmrhB3rb.js';
import './index-BvvAk0TE.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useSortable-D6mV6aGQ.js';
import './index-dz3v0Mah.js';
import './lock-DyB6sZX8.js';
const g = i({
    name: 'InputNumberItem',
    __name: 'InputNumberItem',
    props: { event: { type: Number }, title: { type: String } },
    setup(a) {
      const s = a,
        { prefixCls: n } = o('setting-input-number-item');
      function r(e) {
        s.event && p(s.event, e);
      }
      return (e, N) => (
        u(),
        l(
          'div',
          { class: I(t(n)) },
          [
            c('span', null, f(a.title), 1),
            b(
              t(_),
              d(e.$attrs, { size: 'small', class: `${t(n)}-input-number`, onChange: r }),
              null,
              16,
              ['class'],
            ),
          ],
          2,
        )
      );
    },
  }),
  S = m(g, [['__scopeId', 'data-v-b080692a']]);
export { S as default };
