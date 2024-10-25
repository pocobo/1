var ee = Object.defineProperty,
  te = Object.defineProperties;
var oe = Object.getOwnPropertyDescriptors;
var J = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
  ne = Object.prototype.propertyIsEnumerable;
var $ = (e, m, b) =>
    m in e ? ee(e, m, { enumerable: !0, configurable: !0, writable: !0, value: b }) : (e[m] = b),
  f = (e, m) => {
    for (var b in m || (m = {})) se.call(m, b) && $(e, b, m[b]);
    if (J) for (var b of J(m)) ne.call(m, b) && $(e, b, m[b]);
    return e;
  },
  H = (e, m) => te(e, oe(m));
import {
  c as q,
  u as o,
  d as le,
  I as ae,
  m as re,
  k as p,
  i as ce,
  ac as E,
  A as ie,
  G as de,
} from './vue-BjERyvPm.js';
import { c as K } from './componentMap-C0n90BJh.js';
import { s as G, h as fe, O as ue, Q as me } from '../index.js';
import { i as he, N as Q, c as U, s as pe } from './helper-BjbsUAHT.js';
import {
  aa as be,
  e as y,
  ai as D,
  V as X,
  a4 as ge,
  a2 as Y,
  f as ye,
  r as Ce,
  w as Pe,
} from './antd-BmrhB3rb.js';
function xe(e) {
  return 'slot' in e;
}
function we(e) {
  return !xe(e);
}
function Ae(e, m) {
  return q(() => {
    const b = o(e),
      { labelCol: j = {}, wrapperCol: M = {} } = b.itemProps || {},
      { labelWidth: N, disabledLabelWidth: u } = b,
      { labelWidth: C, labelCol: v, wrapperCol: F, layout: T } = o(m);
    if ((!C && !N && !v) || u)
      return (j.style = { textAlign: 'left' }), { labelCol: j, wrapperCol: M };
    let A = N || C;
    const V = f(f({}, v), j),
      O = f(f({}, F), M);
    return (
      A && (A = be(A) ? `${A}px` : A),
      {
        labelCol: f({ style: { width: A } }, V),
        wrapperCol: f({ style: { width: T === 'vertical' ? '100%' : `calc(100% - ${A})` } }, O),
      }
    );
  });
}
function _(e) {
  return (
    typeof e == 'function' || (Object.prototype.toString.call(e) === '[object Object]' && !ce(e))
  );
}
const Me = le({
  name: 'BasicFormItem',
  inheritAttrs: !1,
  props: {
    schema: { type: Object, default: () => ({}) },
    formProps: { type: Object, default: () => ({}) },
    allDefaultValues: { type: Object, default: () => ({}) },
    formModel: { type: Object, default: () => ({}) },
    setFormModel: { type: Function, default: null },
    tableAction: { type: Object },
    formActionType: { type: Object },
    isAdvanced: { type: Boolean },
  },
  setup(e, { slots: m }) {
    const { t: b } = fe(),
      { schema: j, formProps: M } = ae(e);
    j.value.component === 'CropperAvatar' &&
      typeof M.value.size == 'string' &&
      (M.value.size = void 0);
    const N = Ae(j, M),
      u = q(() => {
        const { allDefaultValues: s, formModel: t, schema: r } = e,
          { mergeDynamicData: a } = e.formProps;
        return { field: r.field, model: t, values: f(f(f({}, a), s), t), schema: r };
      }),
      C = q(() => {
        var c;
        const { schema: s, tableAction: t, formModel: r, formActionType: a } = e;
        let { componentProps: n = {} } = s;
        return (
          y(n) &&
            (n =
              (c = n({ schema: s, tableAction: t, formModel: r, formActionType: a })) != null
                ? c
                : {}),
          he(s.component) &&
            (n = Object.assign({ type: 'horizontal' }, { orientation: 'left', plain: !0 }, n)),
          n
        );
      }),
      v = q(() => {
        const { disabled: s } = e.formProps,
          { dynamicDisabled: t } = e.schema,
          { disabled: r = !1 } = o(C);
        let a = !!s || r;
        return D(t) && (a = t), y(t) && (a = t(o(u))), a;
      }),
      F = q(() => {
        const { readonly: s } = e.formProps,
          { dynamicReadonly: t } = e.schema,
          { readonly: r = !1 } = o(C);
        let a = s || r;
        return D(t) && (a = t), y(t) && (a = t(o(u))), a;
      });
    function T() {
      const { show: s, ifShow: t } = e.schema,
        { showAdvancedButton: r } = e.formProps,
        a = r && D(e.isAdvanced) ? e.isAdvanced : !0;
      let n = !0,
        c = !0;
      return (
        D(s) && (n = s),
        D(t) && (c = t),
        y(s) && (n = s(o(u))),
        y(t) && (c = t(o(u))),
        (n = n && a),
        { isShow: n, isIfShow: c }
      );
    }
    function A() {
      var L;
      const {
        rules: s = [],
        component: t,
        rulesMessageJoinLabel: r,
        label: a,
        dynamicRules: n,
        required: c,
      } = e.schema;
      if (y(n)) return n(o(u));
      let l = ye(s);
      const { rulesMessageJoinLabel: P } = e.formProps,
        I = (Reflect.has(e.schema, 'rulesMessageJoinLabel') ? r : P) ? (y(a) ? '' : a) : '',
        x = t ? U(t) + I : I;
      function h(d, i) {
        const S = d.message || x;
        return i === void 0 ||
          Ce(i) ||
          (Array.isArray(i) && i.length === 0) ||
          (typeof i == 'string' && i.trim() === '') ||
          (typeof i == 'object' &&
            Reflect.has(i, 'checked') &&
            Reflect.has(i, 'halfChecked') &&
            Array.isArray(i.checked) &&
            Array.isArray(i.halfChecked) &&
            i.checked.length === 0 &&
            i.halfChecked.length === 0)
          ? Promise.reject(S)
          : Promise.resolve();
      }
      const g = y(c) ? c(o(u)) : c;
      if (g)
        if (!l || l.length === 0) {
          const d = Q.includes(t || 'Input') ? 'blur' : 'change';
          l = [{ required: g, validator: h, trigger: d }];
        } else
          l.findIndex((i) => Reflect.has(i, 'required')) === -1 &&
            l.push({ required: g, validator: h });
      const k = l.findIndex((d) => Reflect.has(d, 'required') && !Reflect.has(d, 'validator'));
      if (k !== -1) {
        const d = l[k],
          { isShow: i } = T();
        if ((i || (d.required = !1), t)) {
          (d.message = d.message || x),
            (t.includes('Input') || t.includes('Textarea')) && (d.whitespace = !0);
          const S = (L = o(C)) == null ? void 0 : L.valueFormat;
          pe(d, t, S);
        }
      }
      const w = l.findIndex((d) => d.max);
      return (
        w !== -1 &&
          !l[w].validator &&
          (l[w].message = l[w].message || b('component.form.maxTip', [l[w].max])),
        l
      );
    }
    function V() {
      var i;
      if (!we(e.schema)) return null;
      const {
          renderComponentContent: s,
          component: t,
          field: r,
          changeEvent: a = 'change',
          valueField: n,
          valueFormat: c,
        } = e.schema,
        l = t && ['Switch', 'Checkbox'].includes(t),
        P = `on${Pe(a)}`,
        R = {
          [P]: (...S) => {
            const [B] = S,
              W = B ? B.target : null;
            let z = W ? (l ? W.checked : W.value) : B;
            y(c) && (z = c(H(f({}, o(u)), { value: z }))),
              e.setFormModel(r, z, e.schema),
              g[P] && g[P](...S);
          },
        },
        I = K.get(t),
        { autoSetPlaceHolder: x, size: h } = e.formProps,
        g = H(f({ allowClear: !0, size: h }, o(C)), { disabled: o(v), readonly: o(F) });
      !g.disabled &&
        x &&
        t !== 'RangePicker' &&
        t &&
        (g.placeholder = ((i = o(C)) == null ? void 0 : i.placeholder) || U(t)),
        (g.codeField = r),
        (g.formValues = o(u));
      const w = { [n || (l ? 'checked' : 'value')]: e.formModel[r] },
        L = f(f(f({}, g), R), w);
      if (!s) return p(I, L, null);
      const d = y(s) ? f({}, s(o(u), { disabled: o(v), readonly: o(F) })) : { default: () => s };
      return p(I, L, _(d) ? d : { default: () => [d] });
    }
    function O() {
      const { label: s, helpMessage: t, helpComponentProps: r, subLabel: a } = e.schema,
        n = y(s) ? s(o(u)) : s,
        c = a ? p('span', null, [n, de(' '), p('span', { class: 'text-secondary' }, [a])]) : n,
        l = y(t) ? t(o(u)) : t;
      return !l || (Array.isArray(l) && l.length === 0)
        ? c
        : p('span', null, [c, p(me, E({ placement: 'top', class: 'mx-1', text: l }, r), null)]);
    }
    function Z() {
      const {
          itemProps: s,
          slot: t,
          render: r,
          field: a,
          suffix: n,
          component: c,
          prefix: l,
        } = e.schema,
        { labelCol: P, wrapperCol: R } = o(N),
        { colon: I } = e.formProps,
        x = { disabled: o(v), readonly: o(F) };
      if (c === 'Divider') {
        let h;
        return p(
          X,
          { span: 24 },
          { default: () => [p(ge, o(C), _((h = O())) ? h : { default: () => [h] })] },
        );
      } else if (c === 'BasicTitle') {
        let h;
        return p(
          Y.Item,
          {
            labelCol: P,
            wrapperCol: R,
            name: a,
            class: { 'suffix-item': !!n, 'prefix-item': !!l },
          },
          { default: () => [p(ue, o(C), _((h = O())) ? h : { default: () => [h] })] },
        );
      } else {
        const h = () => (t ? G(m, t, o(u), x) : r ? r(o(u), x) : V()),
          g = !!n,
          k = y(n) ? n(o(u)) : n,
          w = !!l,
          L = y(l) ? l(o(u)) : l;
        return (
          c &&
            Q.includes(c) &&
            e.schema &&
            (e.schema.itemProps = f({ autoLink: !1 }, e.schema.itemProps)),
          p(
            Y.Item,
            E({ name: a, colon: I, class: { 'suffix-item': g, 'prefix-item': w } }, s, {
              label: O(),
              rules: A(),
              labelCol: P,
              wrapperCol: R,
            }),
            {
              default: () => [
                p('div', { style: 'display:flex' }, [
                  w && p('span', { class: 'prefix' }, [L]),
                  p('div', { style: 'flex:1;' }, [h()]),
                  g && p('span', { class: 'suffix' }, [k]),
                ]),
              ],
            },
          )
        );
      }
    }
    return () => {
      let s;
      const { colProps: t = {}, colSlot: r, renderColContent: a, component: n, slot: c } = e.schema;
      if (!((n && K.has(n)) || c)) return null;
      const { baseColProps: l = {} } = e.formProps,
        P = f(f({}, l), t),
        { isIfShow: R, isShow: I } = T(),
        x = o(u),
        h = { disabled: o(v), readonly: o(F) };
      return (
        R &&
        re(p(X, P, _((s = r ? G(m, r, x, h) : a ? a(x, h) : Z())) ? s : { default: () => [s] }), [
          [ie, I],
        ])
      );
    };
  },
});
export { Me as _ };
