import { U as o, c } from '../index.js';
import { P as l } from './index-B24a6rfW.js';
import {
  d as n,
  Z as t,
  a8 as p,
  a9 as s,
  $ as e,
  k as i,
  u as r,
  _,
  F as d,
  aa as m,
  a0 as u,
} from './vue-BjERyvPm.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const f = { class: 'scroll-wrap' },
  x = { class: 'p-3' },
  k = n({
    __name: 'index',
    setup(h) {
      return (B, b) => (
        t(),
        p(
          r(l),
          { title: '滚动组件示例', content: '基于el-scrollbar' },
          {
            default: s(() => [
              e('div', f, [
                i(
                  r(o),
                  { class: 'mt-4' },
                  {
                    default: s(() => [
                      e('ul', x, [
                        (t(),
                        _(
                          d,
                          null,
                          m(100, (a) =>
                            e(
                              'li',
                              { key: a, class: 'p-2', style: { border: '1px solid #eee' } },
                              u(a),
                              1,
                            ),
                          ),
                          64,
                        )),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
              ]),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  P = c(k, [['__scopeId', 'data-v-2b8c41c2']]);
export { P as default };
