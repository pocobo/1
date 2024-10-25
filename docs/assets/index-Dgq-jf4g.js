import { u as i } from './index-dz3v0Mah.js';
import { _ as C } from './Drawer1.vue_vue_type_script_setup_true_lang-BgMV_tD8.js';
import { _ as $ } from './Drawer2.vue_vue_type_script_setup_true_lang-7xPBrGuJ.js';
import { _ as x } from './Drawer3.vue_vue_type_script_setup_true_lang-jpN_06sT.js';
import { _ as v } from './Drawer4.vue_vue_type_script_setup_true_lang-BwQMNxCh.js';
import { _ as P } from './Drawer5.vue_vue_type_script_setup_true_lang-CKV7-dA4.js';
import { P as b } from './index-B24a6rfW.js';
import {
  d as B,
  a7 as N,
  Z as T,
  a8 as V,
  a9 as t,
  k as r,
  u as e,
  G as n,
} from './vue-BjERyvPm.js';
import { aE as a } from './antd-BmrhB3rb.js';
import '../index.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './helper-BjbsUAHT.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './useForm-b1qEKHt-.js';
import './useContentViewHeight-mbS0GS8E.js';
import './onMountedOrActivated-DcvTUt7V.js';
const ur = B({
  __name: 'index',
  setup(h) {
    const [l, { openDrawer: f, setDrawerProps: m }] = i(),
      [u, { openDrawer: c }] = i(),
      [_, { openDrawer: w }] = i(),
      [g, { openDrawer: D }] = i(),
      [d, { openDrawer: y }] = i();
    function R() {
      D(!0, { data: 'content', info: 'Info' });
    }
    function k() {
      f(),
        m({ loading: !0 }),
        setTimeout(() => {
          m({ loading: !1 });
        }, 2e3);
    }
    return (A, o) => {
      const s = N('a-button');
      return (
        T(),
        V(
          e(b),
          { title: '抽屉组件使用示例' },
          {
            default: t(() => [
              r(e(a), { message: '使用 useDrawer 进行抽屉操作', 'show-icon': '' }),
              r(
                s,
                { type: 'primary', class: 'my-4', onClick: k },
                { default: t(() => [n(' 打开Drawer ')]), _: 1 },
              ),
              r(e(a), { message: '内外同时控制显示隐藏', 'show-icon': '' }),
              r(
                s,
                { type: 'primary', class: 'my-4', onClick: o[0] || (o[0] = (p) => e(c)(!0)) },
                { default: t(() => [n(' 打开Drawer ')]), _: 1 },
              ),
              r(e(a), { message: '自适应高度/显示footer', 'show-icon': '' }),
              r(
                s,
                { type: 'primary', class: 'my-4', onClick: o[1] || (o[1] = (p) => e(w)(!0)) },
                { default: t(() => [n(' 打开Drawer ')]), _: 1 },
              ),
              r(e(a), { message: '内外数据交互', 'show-icon': '' }),
              r(
                s,
                { type: 'primary', class: 'my-4', onClick: R },
                { default: t(() => [n(' 打开Drawer并传递数据 ')]), _: 1 },
              ),
              r(e(a), { message: '详情页模式', 'show-icon': '' }),
              r(
                s,
                { type: 'primary', class: 'my-4', onClick: o[2] || (o[2] = (p) => e(y)(!0)) },
                { default: t(() => [n(' 打开详情Drawer ')]), _: 1 },
              ),
              r(C, { onRegister: e(l) }, null, 8, ['onRegister']),
              r($, { onRegister: e(u) }, null, 8, ['onRegister']),
              r(x, { onRegister: e(_) }, null, 8, ['onRegister']),
              r(v, { onRegister: e(g) }, null, 8, ['onRegister']),
              r(P, { onRegister: e(d) }, null, 8, ['onRegister']),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { ur as default };
