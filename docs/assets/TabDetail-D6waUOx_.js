import { P as s } from './index-B24a6rfW.js';
import { aO as i } from '../index.js';
import {
  d as n,
  ao as p,
  Z as m,
  a8 as u,
  a9 as c,
  $ as l,
  a0 as _,
  u as o,
} from './vue-BjERyvPm.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './antd-BmrhB3rb.js';
import './onMountedOrActivated-DcvTUt7V.js';
const N = n({
  name: 'TabDetail',
  __name: 'TabDetail',
  setup(d) {
    var t, e;
    const a = (e = (t = p().params) == null ? void 0 : t.id) != null ? e : -1,
      { setTitle: r } = i();
    return (
      r(`No.${a} - 详情信息`),
      (T, b) => (
        m(),
        u(
          o(s),
          { title: 'Tab详情页面' },
          { default: c(() => [l('div', null, _(o(a)) + ' - 详情页内容在此', 1)]), _: 1 },
        )
      )
    );
  },
});
export { N as default };
