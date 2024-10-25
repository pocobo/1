const __vite__fileDeps = [
    'assets/index-BZhhGA-8.js',
    'assets/vue-BjERyvPm.js',
    'assets/LockPage-aCwp9Hme.js',
    'index.js',
    'assets/antd-BmrhB3rb.js',
    'assets/index--PCnFFVm.css',
    'assets/lock-DyB6sZX8.js',
    'assets/header-BHmVmQ6a.js',
    'assets/LockPage-CkuiVBQw.css',
    'assets/index-sA6302Kp.js',
    'assets/index-CZxVBT9w.js',
    'assets/index-BvvAk0TE.js',
    'assets/useContentViewHeight-mbS0GS8E.js',
    'assets/useWindowSizeFn-B5LTQhvs.js',
    'assets/index-DYN-Opul.css',
    'assets/useSortable-D6mV6aGQ.js',
    'assets/index-dz3v0Mah.js',
    'assets/index-DHiGAoja.css',
    'assets/index-BAmJGkQ7.css',
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import { _ as i, D as B, bI as D, f as E, bm as s } from '../index.js';
import { c as n, u as P, a as w } from './index-CZxVBT9w.js';
import C from './SessionTimeoutLogin-BvltbTqY.js';
import {
  d as F,
  c as a,
  u as t,
  Z as o,
  _ as I,
  k as L,
  a8 as m,
  a1 as b,
  ab as u,
  F as h,
} from './vue-BjERyvPm.js';
import './antd-BmrhB3rb.js';
import './index-BvvAk0TE.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useSortable-D6mV6aGQ.js';
import './index-dz3v0Mah.js';
import './lock-DyB6sZX8.js';
import './Login.vue_vue_type_style_index_0_lang-CgZ6IQ4m.js';
import './ForgetPasswordForm.vue_vue_type_script_setup_true_lang-CA3sLABg.js';
import './LoginFormTitle.vue_vue_type_script_setup_true_lang-B0bLB5Y9.js';
import './index-CziPtsqx.js';
import './useFormItem-B4KjxddK.js';
import './LoginForm.vue_vue_type_script_setup_true_lang-wKCzbeWS.js';
import './MobileForm.vue_vue_type_script_setup_true_lang-VUsOk0eJ.js';
import './QrCodeForm.vue_vue_type_script_setup_true_lang-Dzs3pmpA.js';
import './index-2-WXwuOR.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './RegisterForm.vue_vue_type_script_setup_true_lang-JdFsMD1C.js';
import './index-vjZxMvXl.js';
const rt = F({
  name: 'LayoutFeatures',
  __name: 'index',
  setup(v) {
    const p = n(() =>
        i(() => import('./index-BZhhGA-8.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])),
      ),
      c = n(() =>
        i(
          () => import('./index-sA6302Kp.js'),
          __vite__mapDeps([9, 10, 3, 1, 4, 5, 11, 12, 13, 14, 15, 16, 17, 6, 18]),
        ),
      ),
      { getShowSettingButton: l, getSettingButtonPosition: g, getFullContent: r } = B(),
      _ = D(),
      { prefixCls: S } = E('setting-drawer-feature'),
      { getShowHeader: d } = P(),
      f = a(() => _.getSessionTimeout),
      T = a(() => {
        if (!t(l)) return !1;
        const e = t(g);
        return e === s.AUTO ? !t(d) || t(r) : e === s.FIXED;
      }),
      { getShowMultipleTab: k } = w();
    return (e, x) => (
      o(),
      I(
        h,
        null,
        [
          L(t(p)),
          T.value && (!t(k) || t(r))
            ? (o(), m(t(c), { key: 0, class: b(t(S)) }, null, 8, ['class']))
            : u('', !0),
          f.value ? (o(), m(C, { key: 1 })) : u('', !0),
        ],
        64,
      )
    );
  },
});
export { rt as default };
