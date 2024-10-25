import { _ as n } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { C as l, a as u } from '../index.js';
import { T as c } from './index-D6uifPY8.js';
import { P as f } from './index-B24a6rfW.js';
import { d, Z as _, a8 as h, a9 as o, k as a, u as r, l as C } from './vue-BjERyvPm.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './helper-BjbsUAHT.js';
import './antd-BmrhB3rb.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './useContentViewHeight-mbS0GS8E.js';
const G = d({
  __name: 'Editor',
  setup(b) {
    const i = [
        {
          field: 'title',
          component: 'Input',
          label: 'title',
          defaultValue: 'defaultValue',
          rules: [{ required: !0 }],
        },
        {
          field: 'tinymce',
          component: 'Input',
          label: 'tinymce',
          defaultValue: 'defaultValue',
          rules: [{ required: !0 }],
          render: ({ model: t, field: e }) =>
            C(c, {
              value: t[e],
              onChange: (s) => {
                t[e] = s;
              },
            }),
        },
      ],
      { createMessage: p } = u();
    function m(t) {
      p.success('click search,values:' + JSON.stringify(t));
    }
    return (t, e) => (
      _(),
      h(
        r(f),
        { title: '富文本嵌入表单示例' },
        {
          default: o(() => [
            a(
              r(l),
              { title: '富文本表单' },
              {
                default: o(() => [
                  a(r(n), {
                    labelWidth: 100,
                    schemas: i,
                    actionColOptions: { span: 24 },
                    baseColProps: { span: 24 },
                    onSubmit: m,
                  }),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        },
      )
    );
  },
});
export { G as default };
