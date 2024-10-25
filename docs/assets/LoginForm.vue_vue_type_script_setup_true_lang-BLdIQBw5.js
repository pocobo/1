var R = (C, r, i) =>
  new Promise((u, v) => {
    var o = (l) => {
        try {
          m(i.next(l));
        } catch (f) {
          v(f);
        }
      },
      _ = (l) => {
        try {
          m(i.throw(l));
        } catch (f) {
          v(f);
        }
      },
      m = (l) => (l.done ? u(l.value) : Promise.resolve(l.value).then(o, _));
    m((i = i.apply(C, r)).next());
  });
import {
  d as M,
  f as S,
  r as N,
  c as A,
  u as e,
  Z as G,
  _ as U,
  m as $,
  A as L,
  k as s,
  a9 as a,
  G as d,
  a0 as c,
  $ as V,
  a1 as O,
  al as P,
  F as q,
} from './vue-BjERyvPm.js';
import {
  u as K,
  a as W,
  b as j,
  L as p,
  _ as Q,
} from './LoginFormTitle.vue_vue_type_script_setup_true_lang-B0bLB5Y9.js';
import { h as Z, f as H, l as J, a as X } from '../index.js';
import {
  a2 as T,
  E as B,
  a3 as Y,
  B as y,
  a4 as ee,
  a5 as se,
  a6 as ae,
  a7 as te,
  a8 as oe,
  a9 as le,
  V as ne,
  U as re,
} from './antd-BmrhB3rb.js';
const fe = M({
  __name: 'LoginForm',
  setup(C) {
    const r = ne,
      i = re,
      u = T.Item,
      v = B.Password,
      { t: o } = Z(),
      { notification: _, createErrorModal: m } = X(),
      { prefixCls: l } = H('login'),
      f = J(),
      { setLoginState: w, getLoginState: D } = K(),
      { getFormRules: h } = W(),
      F = S(),
      k = S(!1),
      b = S(!1),
      g = N({ account: 'pocobo1', password: 'pocobopass' }),
      { validForm: z } = j(F),
      I = A(() => e(D) === p.LOGIN);
    function E() {
      return R(this, null, function* () {
        const x = yield z();
        if (x)
          try {
            k.value = !0;
            const t = yield f.login({ password: x.password, username: x.account, mode: 'none' });
            t &&
              _.success({
                message: o('sys.login.loginSuccessTitle'),
                description: `${o('sys.login.loginSuccessDesc')}: ${t.realName}`,
                duration: 3,
              });
          } catch (t) {
            m({
              title: o('sys.api.errorTip'),
              content: t.message || o('sys.api.networkExceptionMsg'),
              getContainer: () => document.body.querySelector(`.${l}`) || document.body,
            });
          } finally {
            k.value = !1;
          }
      });
    }
    return (x, t) => (
      G(),
      U(
        q,
        null,
        [
          $(s(Q, { class: 'enter-x' }, null, 512), [[L, I.value]]),
          $(
            s(
              e(T),
              {
                class: 'p-4 enter-x',
                model: g,
                rules: e(h),
                ref_key: 'formRef',
                ref: F,
                onKeypress: P(E, ['enter']),
              },
              {
                default: a(() => [
                  s(
                    e(u),
                    { name: 'account', class: 'enter-x' },
                    {
                      default: a(() => [
                        s(
                          e(B),
                          {
                            size: 'large',
                            value: g.account,
                            'onUpdate:value': t[0] || (t[0] = (n) => (g.account = n)),
                            placeholder: e(o)('sys.login.userName'),
                            class: 'fix-auto-fill',
                          },
                          null,
                          8,
                          ['value', 'placeholder'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  s(
                    e(u),
                    { name: 'password', class: 'enter-x' },
                    {
                      default: a(() => [
                        s(
                          e(v),
                          {
                            size: 'large',
                            visibilityToggle: '',
                            value: g.password,
                            'onUpdate:value': t[1] || (t[1] = (n) => (g.password = n)),
                            placeholder: e(o)('sys.login.password'),
                          },
                          null,
                          8,
                          ['value', 'placeholder'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  s(
                    e(i),
                    { class: 'enter-x' },
                    {
                      default: a(() => [
                        s(
                          e(r),
                          { span: 12 },
                          {
                            default: a(() => [
                              s(e(u), null, {
                                default: a(() => [
                                  s(
                                    e(Y),
                                    {
                                      checked: b.value,
                                      'onUpdate:checked': t[2] || (t[2] = (n) => (b.value = n)),
                                      size: 'small',
                                    },
                                    {
                                      default: a(() => [d(c(e(o)('sys.login.rememberMe')), 1)]),
                                      _: 1,
                                    },
                                    8,
                                    ['checked'],
                                  ),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          },
                        ),
                        s(
                          e(r),
                          { span: 12 },
                          {
                            default: a(() => [
                              s(
                                e(u),
                                { style: { 'text-align': 'right' } },
                                {
                                  default: a(() => [
                                    s(
                                      e(y),
                                      {
                                        type: 'link',
                                        size: 'small',
                                        onClick: t[3] || (t[3] = (n) => e(w)(e(p).RESET_PASSWORD)),
                                      },
                                      {
                                        default: a(() => [
                                          d(c(e(o)('sys.login.forgetPassword')), 1),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  s(
                    e(u),
                    { class: 'enter-x' },
                    {
                      default: a(() => [
                        s(
                          e(y),
                          {
                            type: 'primary',
                            size: 'large',
                            block: '',
                            onClick: E,
                            loading: k.value,
                          },
                          { default: a(() => [d(c(e(o)('sys.login.loginButton')), 1)]), _: 1 },
                          8,
                          ['loading'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  s(
                    e(i),
                    { class: 'enter-x', gutter: [16, 16] },
                    {
                      default: a(() => [
                        s(
                          e(r),
                          { md: 8, xs: 24 },
                          {
                            default: a(() => [
                              s(
                                e(y),
                                { block: '', onClick: t[4] || (t[4] = (n) => e(w)(e(p).MOBILE)) },
                                {
                                  default: a(() => [
                                    d(c(e(o)('sys.login.mobileSignInFormTitle')), 1),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        s(
                          e(r),
                          { md: 8, xs: 24 },
                          {
                            default: a(() => [
                              s(
                                e(y),
                                { block: '', onClick: t[5] || (t[5] = (n) => e(w)(e(p).QR_CODE)) },
                                {
                                  default: a(() => [d(c(e(o)('sys.login.qrSignInFormTitle')), 1)]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        s(
                          e(r),
                          { md: 8, xs: 24 },
                          {
                            default: a(() => [
                              s(
                                e(y),
                                { block: '', onClick: t[6] || (t[6] = (n) => e(w)(e(p).REGISTER)) },
                                {
                                  default: a(() => [d(c(e(o)('sys.login.registerButton')), 1)]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  s(
                    e(ee),
                    { class: 'enter-x' },
                    { default: a(() => [d(c(e(o)('sys.login.otherSignIn')), 1)]), _: 1 },
                  ),
                  V(
                    'div',
                    { class: O(['flex justify-evenly enter-x', `${e(l)}-sign-in-way`]) },
                    [s(e(se)), s(e(ae)), s(e(te)), s(e(oe)), s(e(le))],
                    2,
                  ),
                ]),
                _: 1,
              },
              8,
              ['model', 'rules'],
            ),
            [[L, I.value]],
          ),
        ],
        64,
      )
    );
  },
});
export { fe as _ };
