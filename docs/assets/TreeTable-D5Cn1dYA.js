import { _ as d } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as _ } from './useTable-USe4NIEW.js';
import { getBasicColumns as f, getTreeTableData as b } from './tableData-B7W8a9YK.js';
import {
  d as k,
  a7 as C,
  Z as y,
  _ as x,
  k as e,
  a9 as o,
  u as t,
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
const T = { class: 'p-4' },
  Y = k({
    __name: 'TreeTable',
    setup(g) {
      const [m, { expandAll: s, collapseAll: l, expandRows: n, collapseRows: c }] = _({
        title: '树形表格',
        isTreeTable: !0,
        accordion: !0,
        rowSelection: {
          type: 'checkbox',
          getCheckboxProps(a) {
            return a.id === '0' ? { disabled: !0 } : { disabled: !1 };
          },
        },
        titleHelpMessage: '树形组件不能和序列号列同时存在',
        columns: f(),
        dataSource: b(),
        rowKey: 'id',
        showSelectionBar: !0,
      });
      return (a, r) => {
        const i = C('a-button');
        return (
          y(),
          x('div', T, [
            e(
              t(d),
              { onRegister: t(m) },
              {
                toolbar: o(() => [
                  e(
                    i,
                    { type: 'primary', onClick: t(s) },
                    { default: o(() => [p('展开全部')]), _: 1 },
                    8,
                    ['onClick'],
                  ),
                  e(
                    i,
                    { type: 'primary', onClick: t(l) },
                    { default: o(() => [p('折叠全部')]), _: 1 },
                    8,
                    ['onClick'],
                  ),
                  e(
                    i,
                    { type: 'primary', onClick: r[0] || (r[0] = (u) => t(c)(['4'])) },
                    { default: o(() => [p('折叠第五行')]), _: 1 },
                  ),
                  e(
                    i,
                    { type: 'primary', onClick: r[1] || (r[1] = (u) => t(n)(['4'])) },
                    { default: o(() => [p('展开第五行')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
              8,
              ['onRegister'],
            ),
          ])
        );
      };
    },
  });
export { Y as default };
