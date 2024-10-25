var d = (f, l, a) =>
  new Promise((p, m) => {
    var r = (t) => {
        try {
          o(a.next(t));
        } catch (c) {
          m(c);
        }
      },
      _ = (t) => {
        try {
          o(a.throw(t));
        } catch (c) {
          m(c);
        }
      },
      o = (t) => (t.done ? p(t.value) : Promise.resolve(t.value).then(r, _));
    o((a = a.apply(f, l)).next());
  });
import { _ as b } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as x } from './useForm-b1qEKHt-.js';
import { step2Schemas as h } from './data-CaNweXRQ.js';
import { d as g, Z as v, _ as B, k as s, u as e, a9 as n, G as u } from './vue-BjERyvPm.js';
import { aE as F, ad as i, a4 as O } from './antd-BmrhB3rb.js';
const w = { class: 'w-120 m-auto' },
  E = g({
    __name: 'Step2',
    emits: ['next', 'prev'],
    setup(f, { emit: l }) {
      const a = l,
        [p, { validate: m, setProps: r }] = x({
          labelWidth: 80,
          schemas: h,
          actionColOptions: { span: 14 },
          resetButtonOptions: { text: '上一步' },
          submitButtonOptions: { text: '提交' },
          resetFunc: _,
          submitFunc: o,
        });
      function _() {
        return d(this, null, function* () {
          a('prev');
        });
      }
      function o() {
        return d(this, null, function* () {
          try {
            const t = yield m();
            r({ submitButtonOptions: { loading: !0 } }),
              setTimeout(() => {
                r({ submitButtonOptions: { loading: !1 } }), a('next', t);
              }, 1500);
          } catch (t) {}
        });
      }
      return (t, c) => (
        v(),
        B('div', w, [
          s(e(F), { message: '确认转账后，资金将直接打入对方账户，无法退回。', 'show-icon': '' }),
          s(
            e(i),
            { column: 1, class: 'mt-5' },
            {
              default: n(() => [
                s(
                  e(i).Item,
                  { label: '付款账户' },
                  { default: n(() => [u(' ant-design@alipay.com ')]), _: 1 },
                ),
                s(
                  e(i).Item,
                  { label: '收款账户' },
                  { default: n(() => [u(' test@example.com ')]), _: 1 },
                ),
                s(e(i).Item, { label: '收款人姓名' }, { default: n(() => [u(' Vben ')]), _: 1 }),
                s(e(i).Item, { label: '转账金额' }, { default: n(() => [u(' 500元 ')]), _: 1 }),
              ]),
              _: 1,
            },
          ),
          s(e(O)),
          s(e(b), { onRegister: e(p) }, null, 8, ['onRegister']),
        ])
      );
    },
  });
export { E as _ };
