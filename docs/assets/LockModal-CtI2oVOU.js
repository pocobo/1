var _ = (u, s, o) =>
  new Promise((l, m) => {
    var p = (t) => {
        try {
          r(o.next(t));
        } catch (n) {
          m(n);
        }
      },
      d = (t) => {
        try {
          r(o.throw(t));
        } catch (n) {
          m(n);
        }
      },
      r = (t) => (t.done ? l(t.value) : Promise.resolve(t.value).then(p, d));
    r((o = o.apply(u, s)).next());
  });
import { f as $, l as B, h as I } from '../index.js';
import { a as C, B as L } from './index-RbNU_lzt.js';
import { _ as M } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as N } from './useForm-b1qEKHt-.js';
import { u as R } from './lock-DyB6sZX8.js';
import { h as b } from './header-BHmVmQ6a.js';
import {
  d as x,
  c as f,
  a7 as P,
  Z as F,
  a8 as U,
  a9 as h,
  $ as c,
  a1 as i,
  u as e,
  a0 as k,
  k as g,
  G as V,
  ac as D,
} from './vue-BjERyvPm.js';
import './antd-BmrhB3rb.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './helper-BjbsUAHT.js';
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
const G = ['src'],
  de = x({
    name: 'LockModal',
    __name: 'LockModal',
    setup(u) {
      const { t: s } = I(),
        { prefixCls: o } = $('header-lock-modal'),
        l = B(),
        m = R(),
        p = f(() => {
          var a;
          return (a = l.getUserInfo) == null ? void 0 : a.realName;
        }),
        [d, { closeModal: r }] = C(),
        [t, { validate: n, resetFields: v }] = N({
          showActionButtonGroup: !1,
          schemas: [
            {
              field: 'password',
              label: s('layout.header.lockScreenPassword'),
              colProps: { span: 24 },
              component: 'InputPassword',
              required: !0,
            },
          ],
        }),
        w = () =>
          _(this, null, function* () {
            const { password: a = '' } = yield n();
            r(), m.setLockInfo({ isLock: !0, pwd: a }), yield v();
          }),
        y = f(() => {
          const { avatar: a } = l.getUserInfo;
          return a || b;
        });
      return (a, q) => {
        const S = P('a-button');
        return (
          F(),
          U(
            e(L),
            D({ footer: null, title: e(s)('layout.header.lockScreen') }, a.$attrs, {
              class: e(o),
              onRegister: e(d),
            }),
            {
              default: h(() => [
                c(
                  'div',
                  { class: i(`${e(o)}__entry`) },
                  [
                    c(
                      'div',
                      { class: i(`${e(o)}__header`) },
                      [
                        c('img', { src: y.value, class: i(`${e(o)}__header-img`) }, null, 10, G),
                        c('p', { class: i(`${e(o)}__header-name`) }, k(p.value), 3),
                      ],
                      2,
                    ),
                    g(e(M), { onRegister: e(t) }, null, 8, ['onRegister']),
                    c(
                      'div',
                      { class: i(`${e(o)}__footer`) },
                      [
                        g(
                          S,
                          { type: 'primary', block: '', class: 'mt-2', onClick: w },
                          {
                            default: h(() => [V(k(e(s)('layout.header.lockScreenBtn')), 1)]),
                            _: 1,
                          },
                        ),
                      ],
                      2,
                    ),
                  ],
                  2,
                ),
              ]),
              _: 1,
            },
            16,
            ['title', 'class', 'onRegister'],
          )
        );
      };
    },
  });
export { de as default };
