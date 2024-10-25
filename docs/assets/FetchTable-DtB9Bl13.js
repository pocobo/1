import { _ as s } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as c } from './useTable-USe4NIEW.js';
import { getBasicColumns as l } from './tableData-B7W8a9YK.js';
import { P as u } from './index-B24a6rfW.js';
import { d } from './table-WVnDNY78.js';
import {
  d as f,
  a7 as _,
  Z as g,
  a8 as C,
  a9 as t,
  k as o,
  u as r,
  G as p,
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
import './useContentViewHeight-mbS0GS8E.js';
const tt = f({
  __name: 'FetchTable',
  setup(h) {
    const [a, { reload: e }] = c({
      title: '远程加载示例',
      api: d,
      columns: l(),
      pagination: { pageSize: 10 },
    });
    function m() {
      e();
    }
    function n() {
      e({ page: 1 });
    }
    return (b, k) => {
      const i = _('a-button');
      return (
        g(),
        C(
          r(u),
          {
            contentBackground: '',
            contentClass: 'flex',
            dense: '',
            contentFullHeight: '',
            fixedHeight: '',
          },
          {
            default: t(() => [
              o(
                r(s),
                { onRegister: r(a) },
                {
                  toolbar: t(() => [
                    o(
                      i,
                      { type: 'primary', onClick: m },
                      { default: t(() => [p(' 刷新当前页 ')]), _: 1 },
                    ),
                    o(
                      i,
                      { type: 'primary', onClick: n },
                      { default: t(() => [p(' 刷新并返回第一页 ')]), _: 1 },
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['onRegister'],
              ),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { tt as default };