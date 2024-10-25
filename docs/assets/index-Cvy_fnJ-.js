import { _ as g } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import { _ as C } from './index-BpHr8pvE.js';
import { u as x } from './useTable-USe4NIEW.js';
import { d as k } from './system-DVoCCBj0.js';
import { u as w } from './index-dz3v0Mah.js';
import {
  _ as y,
  c as T,
  s as S,
} from './MenuDrawer.vue_vue_type_script_setup_true_lang-BTwjum5y.js';
import {
  d as R,
  a7 as D,
  Z as a,
  _ as v,
  k as o,
  a9 as r,
  G as B,
  a8 as F,
  u as e,
  ab as M,
  y as N,
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
const ue = R({
  name: 'MenuManagement',
  __name: 'index',
  setup(V) {
    const [s, { openDrawer: i }] = w(),
      [m, { reload: l, expandAll: c }] = x({
        title: '菜单列表',
        api: k,
        columns: T,
        formConfig: { labelWidth: 120, schemas: S },
        isTreeTable: !0,
        pagination: !1,
        striped: !1,
        useSearchForm: !0,
        showTableSetting: !0,
        bordered: !0,
        showIndexColumn: !1,
        canResize: !1,
        actionColumn: { width: 80, title: '操作', dataIndex: 'action', fixed: void 0 },
      });
    function p() {
      i(!0, { isUpdate: !1 });
    }
    function u(t) {
      i(!0, { record: t, isUpdate: !0 });
    }
    function d(t) {}
    function f() {
      l();
    }
    function _() {
      N(c);
    }
    return (t, $) => {
      const h = D('a-button');
      return (
        a(),
        v('div', null, [
          o(
            e(g),
            { onRegister: e(m), onFetchSuccess: _ },
            {
              toolbar: r(() => [
                o(
                  h,
                  { type: 'primary', onClick: p },
                  { default: r(() => [B(' 新增菜单 ')]), _: 1 },
                ),
              ]),
              bodyCell: r(({ column: b, record: n }) => [
                b.key === 'action'
                  ? (a(),
                    F(
                      e(C),
                      {
                        key: 0,
                        actions: [
                          { icon: 'clarity:note-edit-line', onClick: u.bind(null, n) },
                          {
                            icon: 'ant-design:delete-outlined',
                            color: 'error',
                            popConfirm: {
                              title: '是否确认删除',
                              placement: 'left',
                              confirm: d.bind(null, n),
                            },
                          },
                        ],
                      },
                      null,
                      8,
                      ['actions'],
                    ))
                  : M('', !0),
              ]),
              _: 1,
            },
            8,
            ['onRegister'],
          ),
          o(y, { onRegister: e(s), onSuccess: f }, null, 8, ['onRegister']),
        ])
      );
    };
  },
});
export { ue as default };
