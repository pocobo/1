var f = (g, i, o) =>
  new Promise((p, n) => {
    var d = (e) => {
        try {
          r(o.next(e));
        } catch (s) {
          n(s);
        }
      },
      l = (e) => {
        try {
          r(o.throw(e));
        } catch (s) {
          n(s);
        }
      },
      r = (e) => (e.done ? p(e.value) : Promise.resolve(e.value).then(d, l));
    r((o = o.apply(g, i)).next());
  });
import { aF as k, h as G } from '../index.js';
import { a as V, B as b } from './index-RbNU_lzt.js';
import { _ as M } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as D } from './useForm-b1qEKHt-.js';
import { al as v } from './antd-BmrhB3rb.js';
import {
  d as I,
  f as y,
  Z as h,
  a8 as A,
  a9 as m,
  k as x,
  u as a,
  _ as N,
  aa as P,
  ag as U,
  G as $,
  a0 as F,
  F as q,
  ac as z,
} from './vue-BjERyvPm.js';
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
const ce = I({
  __name: 'index',
  setup(g) {
    const i = k(),
      o = v.Group,
      { t: p } = G(),
      [n, { closeModal: d }] = V(() =>
        f(this, null, function* () {
          S();
        }),
      ),
      l = y({
        development: 'http://www.a.com',
        test: 'http://www.b.com',
        prod: 'http://www.c.com',
      }),
      r = y({ display: 'flex', height: '30px', lineHeight: '30px' }),
      [e, { validateFields: s, setFieldsValue: B }] = D({
        showActionButtonGroup: !1,
        schemas: [
          {
            field: 'api',
            label: p('layout.header.dropdownChangeApi'),
            colProps: { span: 24 },
            defaultValue: 'production',
            required: !0,
            slot: 'api',
          },
        ],
      }),
      C = () =>
        f(this, null, function* () {
          const t = yield s();
          i.setApiAddress({ key: t.api, val: l.value[t.api] }), location.reload();
        }),
      R = () => {
        d();
      },
      S = () => {
        const { key: t = '' } = i.getApiAddress;
        t && B({ api: t });
      };
    return (t, E) => (
      h(),
      A(
        a(b),
        z({ title: a(p)('layout.header.dropdownChangeApi') }, t.$attrs, {
          onRegister: a(n),
          onOk: C,
          onCancel: R,
        }),
        {
          default: m(() => [
            x(
              a(M),
              { onRegister: a(e) },
              {
                api: m(({ model: _, field: w }) => [
                  x(
                    a(o),
                    { value: _[w], 'onUpdate:value': (c) => (_[w] = c) },
                    {
                      default: m(() => [
                        (h(!0),
                        N(
                          q,
                          null,
                          P(
                            l.value,
                            (c, u) => (
                              h(),
                              A(
                                a(v),
                                { style: U(r.value), value: u, key: u },
                                { default: m(() => [$(F(u) + ': ' + F(c), 1)]), _: 2 },
                                1032,
                                ['style', 'value'],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 2,
                    },
                    1032,
                    ['value', 'onUpdate:value'],
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
        16,
        ['title', 'onRegister'],
      )
    );
  },
});
export { ce as default };