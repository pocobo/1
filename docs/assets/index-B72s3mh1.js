import { _ as h } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import { _ as b } from './index-BpHr8pvE.js';
import { u as g } from './useTable-USe4NIEW.js';
import { a as C } from './system-DVoCCBj0.js';
import { b as k } from './index-RbNU_lzt.js';
import {
  _ as x,
  c as y,
  s as R,
} from './DeptModal.vue_vue_type_script_setup_true_lang-CXQuTCbH.js';
import {
  d as S,
  a7 as w,
  Z as n,
  _ as M,
  k as o,
  a9 as i,
  G as T,
  a8 as v,
  u as e,
  ab as B,
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
const me = S({
  name: 'DeptManagement',
  __name: 'index',
  setup(D) {
    const [s, { openModal: r }] = k(),
      [m, { reload: l }] = g({
        title: '部门列表',
        api: C,
        columns: y,
        formConfig: { labelWidth: 120, schemas: R },
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
      r(!0, { isUpdate: !1 });
    }
    function c(t) {
      r(!0, { record: t, isUpdate: !0 });
    }
    function d(t) {}
    function u() {
      l();
    }
    return (t, N) => {
      const f = w('a-button');
      return (
        n(),
        M('div', null, [
          o(
            e(h),
            { onRegister: e(m) },
            {
              toolbar: i(() => [
                o(
                  f,
                  { type: 'primary', onClick: p },
                  { default: i(() => [T(' 新增部门 ')]), _: 1 },
                ),
              ]),
              bodyCell: i(({ column: _, record: a }) => [
                _.key === 'action'
                  ? (n(),
                    v(
                      e(b),
                      {
                        key: 0,
                        actions: [
                          { icon: 'clarity:note-edit-line', onClick: c.bind(null, a) },
                          {
                            icon: 'ant-design:delete-outlined',
                            color: 'error',
                            popConfirm: {
                              title: '是否确认删除',
                              placement: 'left',
                              confirm: d.bind(null, a),
                            },
                          },
                        ],
                      },
                      null,
                      8,
                      ['actions'],
                    ))
                  : B('', !0),
              ]),
              _: 1,
            },
            8,
            ['onRegister'],
          ),
          o(x, { onRegister: e(s), onSuccess: u }, null, 8, ['onRegister']),
        ])
      );
    };
  },
});
export { me as default };