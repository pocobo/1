var f = (e, m, a) =>
  new Promise((u, i) => {
    var d = (t) => {
        try {
          r(a.next(t));
        } catch (n) {
          i(n);
        }
      },
      l = (t) => {
        try {
          r(a.throw(t));
        } catch (n) {
          i(n);
        }
      },
      r = (t) => (t.done ? u(t.value) : Promise.resolve(t.value).then(d, l));
    r((a = a.apply(e, m)).next());
  });
import { l as v, C as g, a as b, c as C } from '../index.js';
import { C as I } from './index-IFKYG7IQ.js';
import { _ as S } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as x } from './useForm-b1qEKHt-.js';
import { a as A } from './account-PytUkobD.js';
import { u as w } from './upload-vaW6y1fb.js';
import { h as B } from './header-BHmVmQ6a.js';
import { b as U } from './data-CMLH8mPi.js';
import {
  d as V,
  o as k,
  c as y,
  a7 as M,
  Z as N,
  a8 as R,
  a9 as p,
  k as s,
  u as o,
  $ as h,
  G as F,
  a2 as G,
  a3 as T,
} from './vue-BjERyvPm.js';
import { U as $, V as _ } from './antd-BmrhB3rb.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './base64Conver-bBv-IO2K.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './helper-BjbsUAHT.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
const E = (e) => (G('data-v-54663cbe'), (e = e()), T(), e),
  P = { class: 'change-avatar' },
  W = E(() => h('div', { class: 'mb-2' }, '头像', -1)),
  Z = V({
    __name: 'BaseSetting',
    setup(e) {
      const { createMessage: m } = b(),
        a = v(),
        [u, { setFieldsValue: i }] = x({ labelWidth: 120, schemas: U, showActionButtonGroup: !1 });
      k(() =>
        f(this, null, function* () {
          const t = yield A();
          i(t);
        }),
      );
      const d = y(() => {
        const { avatar: t } = a.getUserInfo;
        return t || B;
      });
      function l({ src: t, data: n }) {
        const c = a.getUserInfo;
        (c.avatar = t), a.setUserInfo(c);
      }
      function r() {
        m.success('更新成功！');
      }
      return (t, n) => {
        const c = M('a-button');
        return (
          N(),
          R(
            o(g),
            { title: '基本设置', canExpand: !1 },
            {
              default: p(() => [
                s(
                  o($),
                  { gutter: 24 },
                  {
                    default: p(() => [
                      s(
                        o(_),
                        { span: 14 },
                        {
                          default: p(() => [
                            s(o(S), { onRegister: o(u) }, null, 8, ['onRegister']),
                          ]),
                          _: 1,
                        },
                      ),
                      s(
                        o(_),
                        { span: 10 },
                        {
                          default: p(() => [
                            h('div', P, [
                              W,
                              s(
                                o(I),
                                {
                                  uploadApi: o(w),
                                  value: d.value,
                                  btnText: '更换头像',
                                  btnProps: { preIcon: 'ant-design:cloud-upload-outlined' },
                                  onChange: l,
                                  width: '150',
                                },
                                null,
                                8,
                                ['uploadApi', 'value'],
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                s(
                  c,
                  { type: 'primary', onClick: r },
                  { default: p(() => [F(' 更新基本信息 ')]), _: 1 },
                ),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  }),
  ht = C(Z, [['__scopeId', 'data-v-54663cbe']]);
export { ht as default };