import {
  d as m,
  f as u,
  o as c,
  j as p,
  Z as t,
  a8 as l,
  a9 as d,
  _ as f,
  a1 as _,
  u as g,
  k as S,
  q as B,
} from './vue-BjERyvPm.js';
import { _ as C } from './Login.vue_vue_type_style_index_0_lang-C-8tfFH9.js';
import { f as k, l as I, a_ as v, aF as x, aZ as M, c as T } from '../index.js';
import './ForgetPasswordForm.vue_vue_type_script_setup_true_lang-CA3sLABg.js';
import './LoginFormTitle.vue_vue_type_script_setup_true_lang-B0bLB5Y9.js';
import './index-CziPtsqx.js';
import './antd-BmrhB3rb.js';
import './useFormItem-B4KjxddK.js';
import './LoginForm.vue_vue_type_script_setup_true_lang-BLdIQBw5.js';
import './MobileForm.vue_vue_type_script_setup_true_lang-VUsOk0eJ.js';
import './QrCodeForm.vue_vue_type_script_setup_true_lang-Dzs3pmpA.js';
import './index-2-WXwuOR.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './RegisterForm.vue_vue_type_script_setup_true_lang-JdFsMD1C.js';
import './index-vjZxMvXl.js';
const U = m({
    __name: 'SessionTimeoutLogin',
    setup(L) {
      const { prefixCls: r } = k('st-login'),
        s = I(),
        a = v(),
        i = x(),
        e = u(0),
        n = () => i.getProjectConfig.permissionMode === M.BACK;
      return (
        c(() => {
          var o;
          e.value = (o = s.getUserInfo) == null ? void 0 : o.userId;
        }),
        p(() => {
          ((e.value && e.value !== s.getUserInfo.userId) ||
            (n() && a.getLastBuildMenuTime === 0)) &&
            document.location.reload();
        }),
        (o, P) => (
          t(),
          l(B, null, {
            default: d(() => [
              (t(), f('div', { key: 0, class: _(g(r)) }, [S(C, { sessionTimeout: '' })], 2)),
            ]),
            _: 1,
          })
        )
      );
    },
  }),
  G = T(U, [['__scopeId', 'data-v-e639c352']]);
export { G as default };
