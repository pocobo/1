import { U as n } from '../index.js';
import { s as c } from './data-CMLH8mPi.js';
import f from './BaseSetting-CqRiucWC.js';
import { _ as l } from './SecureSetting.vue_vue_type_script_setup_true_lang-DoDsx1fa.js';
import _ from './AccountBind-C_H3BWva.js';
import { _ as u } from './MsgNotify.vue_vue_type_script_setup_true_lang-CiRoA_WF.js';
import { a0 as i } from './antd-BmrhB3rb.js';
import {
  d,
  Z as t,
  a8 as a,
  a9 as e,
  $ as b,
  k as B,
  _ as g,
  aa as k,
  u as o,
  ai as x,
  F as C,
  a1 as y,
} from './vue-BjERyvPm.js';
import './index-IFKYG7IQ.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './base64Conver-bBv-IO2K.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './helper-BjbsUAHT.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './useForm-b1qEKHt-.js';
import './account-PytUkobD.js';
import './upload-vaW6y1fb.js';
import './header-BHmVmQ6a.js';
const S = 'account-setting',
  et = d({
    __name: 'index',
    setup(h) {
      const m = i.TabPane,
        s = { BaseSetting: f, SecureSetting: l, AccountBind: _, MsgNotify: u },
        p = { width: '220px' };
      return (w, N) => (
        t(),
        a(o(n), null, {
          default: e(() => [
            b(
              'div',
              { ref: 'wrapperRef', class: y(S) },
              [
                B(
                  o(i),
                  { 'tab-position': 'left', tabBarStyle: p },
                  {
                    default: e(() => [
                      (t(!0),
                      g(
                        C,
                        null,
                        k(
                          o(c),
                          (r) => (
                            t(),
                            a(
                              o(m),
                              { key: r.key, tab: r.name },
                              { default: e(() => [(t(), a(x(s[r.component])))]), _: 2 },
                              1032,
                              ['tab'],
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 1,
                  },
                ),
              ],
              512,
            ),
          ]),
          _: 1,
        })
      );
    },
  });
export { et as default };
