import { _ as L } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as P } from './useTable-USe4NIEW.js';
import { getBasicShortColumns as v, getBasicColumns as l } from './tableData-B7W8a9YK.js';
import { a as D } from '../index.js';
import { d as I } from './table-WVnDNY78.js';
import {
  d as M,
  a7 as N,
  Z as V,
  _ as $,
  $ as r,
  k as e,
  a9 as o,
  G as n,
  u as m,
} from './vue-BjERyvPm.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './antd-BmrhB3rb.js';
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
const z = { class: 'p-4 flex flex-col' },
  A = { class: 'mb-4' },
  E = { class: 'mb-4' },
  ye = M({
    __name: 'UseTable',
    setup(G) {
      const { createMessage: a } = D();
      function u() {}
      const [
        f,
        {
          setLoading: s,
          setProps: i,
          getColumns: H,
          getDataSource: U,
          getRawDataSource: Z,
          reload: c,
          getPaginationRef: j,
          setPagination: p,
          getSelectRows: q,
          getSelectRowKeys: F,
          setSelectedRowKeys: d,
          clearSelectedRowKeys: g,
        },
      ] = P({
        canResize: !0,
        title: 'useTable示例',
        titleHelpMessage: '使用useTable调用表格内方法',
        api: I,
        columns: l(),
        defSort: { field: 'name', order: 'ascend' },
        rowKey: 'id',
        showTableSetting: !0,
        onChange: u,
        rowSelection: { type: 'checkbox' },
        onColumnsChange: (B) => {},
        showSelectionBar: !0,
      });
      function _() {
        s(!0),
          setTimeout(() => {
            s(!1);
          }, 1e3);
      }
      function C() {
        i({ columns: v(), rowSelection: { type: 'checkbox' }, showIndexColumn: !0 });
      }
      function k() {
        i({ columns: l(), rowSelection: { type: 'checkbox' }, showIndexColumn: !0 }),
          c({ page: 1 });
      }
      function w() {
        a.info('请在控制台查看！');
      }
      function h() {
        a.info('请在控制台查看！');
      }
      function S() {
        a.info('请在控制台查看！');
      }
      function b() {
        a.info('请在控制台查看！');
      }
      function R() {
        p({ current: 2 }), c();
      }
      function x() {
        a.info('请在控制台查看！');
      }
      function T() {
        a.info('请在控制台查看！');
      }
      function y() {
        d(['0', '1', '2']);
      }
      function K() {
        g();
      }
      return (B, J) => {
        const t = N('a-button');
        return (
          V(),
          $('div', z, [
            r('div', A, [
              e(t, { class: 'mr-2', onClick: k }, { default: o(() => [n(' 还原 ')]), _: 1 }),
              e(t, { class: 'mr-2', onClick: _ }, { default: o(() => [n(' 开启loading ')]), _: 1 }),
              e(t, { class: 'mr-2', onClick: C }, { default: o(() => [n(' 更改Columns ')]), _: 1 }),
              e(t, { class: 'mr-2', onClick: w }, { default: o(() => [n(' 获取Columns ')]), _: 1 }),
              e(
                t,
                { class: 'mr-2', onClick: h },
                { default: o(() => [n(' 获取表格数据 ')]), _: 1 },
              ),
              e(
                t,
                { class: 'mr-2', onClick: S },
                { default: o(() => [n(' 获取接口原始数据 ')]), _: 1 },
              ),
              e(t, { class: 'mr-2', onClick: R }, { default: o(() => [n(' 跳转到第2页 ')]), _: 1 }),
            ]),
            r('div', E, [
              e(t, { class: 'mr-2', onClick: x }, { default: o(() => [n(' 获取选中行 ')]), _: 1 }),
              e(
                t,
                { class: 'mr-2', onClick: T },
                { default: o(() => [n(' 获取选中行Key ')]), _: 1 },
              ),
              e(t, { class: 'mr-2', onClick: y }, { default: o(() => [n(' 设置选中行 ')]), _: 1 }),
              e(t, { class: 'mr-2', onClick: K }, { default: o(() => [n(' 清空选中行 ')]), _: 1 }),
              e(
                t,
                { class: 'mr-2', onClick: b },
                { default: o(() => [n(' 获取分页信息 ')]), _: 1 },
              ),
            ]),
            e(m(L), { onRegister: m(f) }, null, 8, ['onRegister']),
          ])
        );
      };
    },
  });
export { ye as default };