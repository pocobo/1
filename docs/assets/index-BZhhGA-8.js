import { d as m, c as n, Z as a, a8 as s, a9 as c, ab as i, q as p } from './vue-BjERyvPm.js';
import u from './LockPage-aCwp9Hme.js';
import { u as f } from './lock-DyB6sZX8.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './header-BHmVmQ6a.js';
const C = m({
  __name: 'index',
  setup(d) {
    const o = f(),
      r = n(() => {
        var e, t;
        return (t = (e = o == null ? void 0 : o.getLockInfo) == null ? void 0 : e.isLock) != null
          ? t
          : !1;
      });
    return (e, t) => (
      a(),
      s(
        p,
        { name: 'fade-bottom', mode: 'out-in' },
        { default: c(() => [r.value ? (a(), s(u, { key: 0 })) : i('', !0)]), _: 1 },
      )
    );
  },
});
export { C as default };