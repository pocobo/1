import { f as l } from '../index.js';
import { b as p } from './index-CRGUggQq.js';
import {
  d as u,
  Z as n,
  _ as s,
  F as d,
  aa as f,
  a1 as m,
  u as t,
  ag as k,
  k as C,
} from './vue-BjERyvPm.js';
import { aU as _ } from './antd-BmrhB3rb.js';
import './index-BvvAk0TE.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useSortable-D6mV6aGQ.js';
import './index-dz3v0Mah.js';
import './lock-DyB6sZX8.js';
const h = ['onClick'],
  S = u({
    name: 'ThemeColorPicker',
    __name: 'ThemeColorPicker',
    props: {
      colorList: { type: Array, default: () => [] },
      event: { type: Number },
      def: { type: String },
    },
    setup(r) {
      const i = r,
        { prefixCls: a } = l('setting-theme-picker');
      function c(o) {
        i.event && p(i.event, o);
      }
      return (o, y) => (
        n(),
        s(
          'div',
          { class: m(t(a)) },
          [
            (n(!0),
            s(
              d,
              null,
              f(
                r.colorList || [],
                (e) => (
                  n(),
                  s(
                    'span',
                    {
                      key: e,
                      onClick: (g) => c(e),
                      class: m([`${t(a)}__item`, { [`${t(a)}__item--active`]: r.def === e }]),
                      style: k({ background: e }),
                    },
                    [C(t(_))],
                    14,
                    h,
                  )
                ),
              ),
              128,
            )),
          ],
          2,
        )
      );
    },
  });
export { S as default };