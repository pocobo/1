var k = (h, m, e) =>
  new Promise((t, l) => {
    var f = (r) => {
        try {
          i(e.next(r));
        } catch (a) {
          l(a);
        }
      },
      _ = (r) => {
        try {
          i(e.throw(r));
        } catch (a) {
          l(a);
        }
      },
      i = (r) => (r.done ? t(r.value) : Promise.resolve(r.value).then(f, _));
    i((e = e.apply(h, m)).next());
  });
import {
  d as x,
  f as w,
  w as D,
  y as T,
  a7 as A,
  Z as u,
  _ as g,
  F as R,
  aa as V,
  m as I,
  A as S,
  k as s,
  u as o,
  a9 as n,
  G as y,
  a0 as b,
  a8 as $,
  ab as B,
} from './vue-BjERyvPm.js';
import { _ as M } from './DetailModal.vue_vue_type_script_setup_true_lang-ETUCMSKA.js';
import { _ as N } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import { _ as j } from './index-BpHr8pvE.js';
import { u as F } from './useTable-USe4NIEW.js';
import { b as G } from './index-RbNU_lzt.js';
import { b as H, h as Z, aT as q } from '../index.js';
import { getColumns as z } from './data-Dn12aQq8.js';
import { f as J } from './antd-BmrhB3rb.js';
import './index-DXnpckpY.js';
import './useDescription-CSes53e9.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
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
const K = () => H.get({ url: '/error' }),
  O = { class: 'p-4' },
  P = ['src'],
  Ar = x({
    __name: 'index',
    setup(h) {
      const m = w(),
        e = w([]),
        { t } = Z(),
        l = q(),
        [f, { setTableData: _ }] = F({
          title: t('sys.errorLog.tableTitle'),
          columns: z(),
          actionColumn: { width: 80, title: 'Action', dataIndex: 'action' },
        }),
        [i, { openModal: r }] = G();
      D(
        () => l.getErrorLogInfoList,
        (p) => {
          T(() => {
            _(J(p));
          });
        },
        { immediate: !0 },
      );
      function a(p) {
        (m.value = p), r(!0);
      }
      function C() {
        throw new Error('fire vue error!');
      }
      function E() {
        e.value.push(`${new Date().getTime()}.png`);
      }
      function L() {
        return k(this, null, function* () {
          yield K();
        });
      }
      return (p, Q) => {
        const d = A('a-button');
        return (
          u(),
          g('div', O, [
            (u(!0),
            g(
              R,
              null,
              V(e.value, (c) =>
                I((u(), g('img', { key: c, src: c, alt: '' }, null, 8, P)), [[S, !1]]),
              ),
              128,
            )),
            s(M, { info: m.value, onRegister: o(i) }, null, 8, ['info', 'onRegister']),
            s(
              o(N),
              { onRegister: o(f), class: 'error-handle-table' },
              {
                toolbar: n(() => [
                  s(
                    d,
                    { onClick: C, type: 'primary' },
                    { default: n(() => [y(b(o(t)('sys.errorLog.fireVueError')), 1)]), _: 1 },
                  ),
                  s(
                    d,
                    { onClick: E, type: 'primary' },
                    { default: n(() => [y(b(o(t)('sys.errorLog.fireResourceError')), 1)]), _: 1 },
                  ),
                  s(
                    d,
                    { onClick: L, type: 'primary' },
                    { default: n(() => [y(b(o(t)('sys.errorLog.fireAjaxError')), 1)]), _: 1 },
                  ),
                ]),
                bodyCell: n(({ column: c, record: v }) => [
                  c.key === 'action'
                    ? (u(),
                      $(
                        o(j),
                        {
                          key: 0,
                          actions: [
                            {
                              label: o(t)('sys.errorLog.tableActionDesc'),
                              onClick: a.bind(null, v),
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
          ])
        );
      };
    },
  });
export { Ar as default };
