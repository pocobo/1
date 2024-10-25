var Q = Object.defineProperty;
var P = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty,
  $ = Object.prototype.propertyIsEnumerable;
var L = (o, n, t) =>
    n in o ? Q(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (o[n] = t),
  j = (o, n) => {
    for (var t in n || (n = {})) N.call(n, t) && L(o, t, n[t]);
    if (P) for (var t of P(n)) $.call(n, t) && L(o, t, n[t]);
    return o;
  };
var A = (o, n) => {
  var t = {};
  for (var r in o) N.call(o, r) && n.indexOf(r) < 0 && (t[r] = o[r]);
  if (o != null && P) for (var r of P(o)) n.indexOf(r) < 0 && $.call(o, r) && (t[r] = o[r]);
  return t;
};
var w = (o, n, t) =>
  new Promise((r, F) => {
    var d = (a) => {
        try {
          c(t.next(a));
        } catch (i) {
          F(i);
        }
      },
      g = (a) => {
        try {
          c(t.throw(a));
        } catch (i) {
          F(i);
        }
      },
      c = (a) => (a.done ? r(a.value) : Promise.resolve(a.value).then(d, g));
    c((t = t.apply(o, n)).next());
  });
import T from './FormRender-CJcvWACh.js';
import { a2 as z, bt as B, f as D, e as O, U as H, V as X, o as Y } from './antd-BmrhB3rb.js';
import {
  g as I,
  J as x,
  d as oo,
  f as eo,
  c as k,
  p as q,
  u as to,
  a7 as V,
  Z as y,
  _ as J,
  k as U,
  a9 as R,
  F as no,
  aa as so,
  a8 as ro,
  ad as ao,
  ae as io,
  ac as W,
} from './vue-BjERyvPm.js';
import { b as mo, f as Z } from './index-DrPvFpAA.js';
import { b1 as lo, c as fo } from '../index.js';
import './index-St208Lgf.js';
import './formItemConfig-BWXCgi90.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './useFormDesignState-DaR4Tnkk.js';
function co(o, n, t, r) {
  (() => {
    const u = I(),
      C = u == null ? void 0 : u.parent;
    C &&
      o.formConfig.schemas.forEach((m) => {
        B(m.componentProps, (M, e) => {
          O(M) && (m.componentProps[e] = M.bind(C));
        }),
          B(m.on, (M, e) => {
            O(M) && (m.componentProps[e] = M.bind(C));
          });
      });
  })();
  const { emit: d } = t,
    g = z.useForm,
    { resetFields: c, validate: a, clearValidate: i, validateField: h } = g(n, []);
  return {
    validate: a,
    validateField: h,
    resetFields: c,
    clearValidate: i,
    submit: () =>
      w(this, null, function* () {
        var C, m;
        const u = D(x(n.value));
        return (
          d == null || d('submit', u), (m = (C = o.formConfig).submit) == null || m.call(C, u), u
        );
      }),
  };
}
function uo(o, n, t, r) {
  const F = (e) => mo(o.formConfig.schemas, (s) => s.field === e),
    d = (e, s, l) => {
      const f = F(e);
      f && (f[s] = l);
    },
    g = (e, s, l) => {
      const f = F(e);
      f != null &&
        f.componentProps &&
        (['options', 'treeData'].includes(s) && c(e, void 0), (f.componentProps[s] = l));
    },
    c = (e, s) => {
      var l;
      typeof e == 'string'
        ? ((o.formModel[e] = s), (l = t.value) == null || l.validateField(e, s, []))
        : Object.keys(e).forEach((p) => {
            var b;
            (o.formModel[p] = e[p]), (b = t.value) == null || b.validateField(p, e[p], []);
          });
    },
    a = (e, s) => {
      o.formConfig[e] = s;
    },
    i = (e) => D(o.formModel)[e],
    h = () =>
      w(this, null, function* () {
        return D(o.formModel);
      }),
    v = (e) => {
      d(e, 'hidden', !0);
    },
    u = (e) => {
      typeof e == 'string' ? g(e, 'disabled', !0) : a('disabled', e !== !1);
    },
    C = (e) => {
      d(e, 'hidden', !1);
    },
    m = {};
  return (
    ((e) => {
      Z(e, (s) => {
        Z(e, (l) => {
          var f;
          m[l.field] || (m[l.field] = new Set()),
            (f = s.link) != null && f.includes(l.field) && O(s.update) && m[l.field].add(s);
        }),
          m[s.field].add(s);
      });
    })(o.formConfig.schemas),
    j(
      {
        linkOn: m,
        setValue: c,
        getValue: i,
        hidden: v,
        show: C,
        set: d,
        get: F,
        setProps: g,
        getData: h,
        disable: u,
      },
      r,
    )
  );
}
const po = oo({
    name: 'VFormCreate',
    components: { FormRender: T, Form: z, Row: H },
    props: {
      fApi: { type: Object },
      formModel: { type: Object, default: () => ({}) },
      formConfig: { type: Object, required: !0 },
    },
    emits: ['submit', 'change', 'update:fApi', 'update:formModel'],
    setup(o, n) {
      const t = o.formConfig.layout == 'vertical' ? X : H,
        { emit: r } = n,
        F = eo(null),
        d = k({ get: () => o.formModel, set: (p) => r('update:formModel', p) }),
        g = k(() => o.formConfig.schemas && o.formConfig.schemas.filter((p) => p.hidden !== !0)),
        c = lo(o, 'fApi', r),
        {
          submit: a,
          validate: i,
          clearValidate: h,
          resetFields: v,
          validateField: u,
        } = co(o, d, n),
        f = uo({ formConfig: o.formConfig, formData: o.formModel }, n, F, {
          submit: a,
          validate: i,
          validateField: u,
          resetFields: v,
          clearValidate: h,
        }),
        { linkOn: C } = f,
        m = A(f, ['linkOn']);
      c.value = m;
      const M = (p) => {
          var S;
          const { schema: b, value: G } = p,
            { field: K } = to(b);
          (S = C[K]) == null ||
            S.forEach((_) => {
              var E;
              (E = _.update) == null || E.call(_, G, _, c.value);
            });
        },
        e = k(() => Y(o.formConfig, ['disabled', 'labelWidth', 'schemas'])),
        s = () => {
          a();
        };
      q('formModel', d);
      const l = (p, b) => {
        d.value[p] = b;
      };
      return (
        q('setFormModelMethod', l),
        {
          eFormModel: F,
          submit: a,
          validate: i,
          validateField: u,
          resetFields: v,
          clearValidate: h,
          handleChange: M,
          formModelProps: e,
          handleSubmit: s,
          setFormModel: l,
          formModelNew: d,
          wrapperComp: t,
          noHiddenList: g,
        }
      );
    },
  }),
  Fo = { class: 'v-form-container' };
function go(o, n, t, r, F, d) {
  const g = V('FormRender'),
    c = V('Row'),
    a = V('Form');
  return (
    y(),
    J('div', Fo, [
      U(
        a,
        W({ class: 'v-form-model', ref: 'eFormModel', model: o.formModel }, o.formModelProps),
        {
          default: R(() => [
            U(c, null, {
              default: R(() => [
                (y(!0),
                J(
                  no,
                  null,
                  so(
                    o.noHiddenList,
                    (i, h) => (
                      y(),
                      ro(
                        g,
                        {
                          key: h,
                          schema: i,
                          formConfig: o.formConfig,
                          formData: o.formModelNew,
                          onChange: o.handleChange,
                          setFormModel: o.setFormModel,
                          onSubmit: o.handleSubmit,
                          onReset: o.resetFields,
                        },
                        ao({ _: 2 }, [
                          i && i.componentProps
                            ? {
                                name: 'schema.componentProps!.slotName',
                                fn: R(() => [
                                  io(
                                    o.$slots,
                                    i.componentProps.slotName,
                                    W(
                                      { ref_for: !0 },
                                      { formModel: o.formModel, field: i.field, schema: i },
                                    ),
                                    void 0,
                                    !0,
                                  ),
                                ]),
                                key: '0',
                              }
                            : void 0,
                        ]),
                        1032,
                        [
                          'schema',
                          'formConfig',
                          'formData',
                          'onChange',
                          'setFormModel',
                          'onSubmit',
                          'onReset',
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 3,
            }),
          ]),
          _: 3,
        },
        16,
        ['model'],
      ),
    ])
  );
}
const Jo = fo(po, [
  ['render', go],
  ['__scopeId', 'data-v-06441f85'],
]);
export { Jo as default };
