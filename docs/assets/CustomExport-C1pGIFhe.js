import { _ as c } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { E as l } from './index-CIVgjVCU.js';
import { c as u, d as a, j as _ } from './data-CX0ZTUft.js';
import { b as d } from './index-RbNU_lzt.js';
import { P as f } from './index-B24a6rfW.js';
import {
  d as x,
  a7 as C,
  Z as k,
  a8 as b,
  a9 as t,
  k as r,
  u as o,
  G as g,
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
import './base64Conver-bBv-IO2K.js';
import './helper-BjbsUAHT.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './useForm-b1qEKHt-.js';
import './uuid-D0SLUWHI.js';
import './sortable.esm-CoO8jRpa.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './useContentViewHeight-mbS0GS8E.js';
const Y = x({
  __name: 'CustomExport',
  setup(E) {
    function p({ filename: e, bookType: m }) {
      _({ data: a, filename: e, write2excelOpts: { bookType: m } });
    }
    const [i, { openModal: s }] = d();
    return (e, m) => {
      const n = C('a-button');
      return (
        k(),
        b(
          o(f),
          { title: '导出示例', content: '可以选择导出格式' },
          {
            default: t(() => [
              r(
                o(c),
                { title: '基础表格', columns: o(u), dataSource: o(a) },
                {
                  toolbar: t(() => [
                    r(n, { onClick: o(s) }, { default: t(() => [g(' 导出 ')]), _: 1 }, 8, [
                      'onClick',
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ['columns', 'dataSource'],
              ),
              r(o(l), { onRegister: o(i), onSuccess: p }, null, 8, ['onRegister']),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { Y as default };