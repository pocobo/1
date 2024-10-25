import { _ as b } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { getBasicData as h, getBasicColumns as k } from './tableData-B7W8a9YK.js';
import {
  d as B,
  f as t,
  a7 as S,
  Z as z,
  _ as x,
  k as e,
  a9 as o,
  G as l,
  a0 as s,
  u as m,
} from './vue-BjERyvPm.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './antd-BmrhB3rb.js';
import '../index.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './base64Conver-bBv-IO2K.js';
import './helper-BjbsUAHT.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './useForm-b1qEKHt-.js';
import './uuid-D0SLUWHI.js';
import './sortable.esm-CoO8jRpa.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './select-BJlCZDbb.js';
const R = { class: 'p-4' },
  rt = B({
    __name: 'Basic',
    setup(T) {
      const a = t(!1),
        p = t(!1),
        i = t(!0),
        r = t(!0),
        u = t(!1),
        c = k(),
        d = h();
      function g() {
        a.value = !a.value;
      }
      function f() {
        i.value = !i.value;
      }
      function _() {
        (p.value = !0),
          setTimeout(() => {
            (p.value = !1), (u.value = { pageSize: 20 });
          }, 3e3);
      }
      function v() {
        r.value = !r.value;
      }
      function C(y) {}
      return (y, w) => {
        const n = S('a-button');
        return (
          z(),
          x('div', R, [
            e(
              m(b),
              {
                title: '基础示例',
                titleHelpMessage: '温馨提醒',
                columns: m(c),
                dataSource: m(d),
                canResize: a.value,
                loading: p.value,
                striped: i.value,
                bordered: r.value,
                showTableSetting: '',
                pagination: u.value,
                onColumnsChange: C,
              },
              {
                toolbar: o(() => [
                  e(
                    n,
                    { type: 'primary', onClick: g },
                    { default: o(() => [l(s(a.value ? '取消自适应' : '自适应高度'), 1)]), _: 1 },
                  ),
                  e(
                    n,
                    { type: 'primary', onClick: v },
                    { default: o(() => [l(s(r.value ? '隐藏边框' : '显示边框'), 1)]), _: 1 },
                  ),
                  e(
                    n,
                    { type: 'primary', onClick: _ },
                    { default: o(() => [l(' 开启loading ')]), _: 1 },
                  ),
                  e(
                    n,
                    { type: 'primary', onClick: f },
                    { default: o(() => [l(s(i.value ? '隐藏斑马纹' : '显示斑马纹'), 1)]), _: 1 },
                  ),
                ]),
                _: 1,
              },
              8,
              [
                'columns',
                'dataSource',
                'canResize',
                'loading',
                'striped',
                'bordered',
                'pagination',
              ],
            ),
          ])
        );
      };
    },
  });
export { rt as default };
