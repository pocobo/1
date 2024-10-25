import { S as i } from './index-CRGUggQq.js';
import { z as s } from '../index.js';
import { u as m } from './index-dz3v0Mah.js';
import { d as a, Z as p, _ as u, k as r, u as e } from './vue-BjERyvPm.js';
import './antd-BmrhB3rb.js';
import './index-BvvAk0TE.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useSortable-D6mV6aGQ.js';
import './lock-DyB6sZX8.js';
const C = a({
  name: 'SettingButton',
  __name: 'index',
  setup(c) {
    const [o, { openDrawer: n }] = m();
    return (f, t) => (
      p(),
      u('div', { onClick: t[0] || (t[0] = (_) => e(n)(!0)) }, [
        r(s, { icon: 'ion:settings-outline' }),
        r(e(i), { onRegister: e(o) }, null, 8, ['onRegister']),
      ])
    );
  },
});
export { C as default };
