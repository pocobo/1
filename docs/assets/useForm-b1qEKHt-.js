var t = (m, o, n) =>
  new Promise((r, l) => {
    var f = (s) => {
        try {
          a(n.next(s));
        } catch (c) {
          l(c);
        }
      },
      e = (s) => {
        try {
          a(n.throw(s));
        } catch (c) {
          l(c);
        }
      },
      a = (s) => (s.done ? r(s.value) : Promise.resolve(s.value).then(f, e));
    a((n = n.apply(m, o)).next());
  });
import { v as u, a1 as y, K as h } from '../index.js';
import { f as d, b as F, u as i, w, y as p } from './vue-BjERyvPm.js';
function g(m) {
  const o = d(null),
    n = d(!1);
  function r() {
    return t(this, null, function* () {
      const e = i(o);
      return (
        e ||
          h(
            'The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!',
          ),
        yield p(),
        e
      );
    });
  }
  function l(e) {
    F(() => {
      (o.value = null), (n.value = null);
    }),
      !(i(n) && u() && e === i(o)) &&
        ((o.value = e),
        (n.value = !0),
        w(
          () => m,
          () => {
            m && e.setProps(y(m));
          },
          { immediate: !0, deep: !0 },
        ));
  }
  return [
    l,
    {
      scrollToField: (e, a) =>
        t(this, null, function* () {
          (yield r()).scrollToField(e, a);
        }),
      setProps: (e) =>
        t(this, null, function* () {
          (yield r()).setProps(e);
        }),
      updateSchema: (e) =>
        t(this, null, function* () {
          (yield r()).updateSchema(e);
        }),
      resetSchema: (e) =>
        t(this, null, function* () {
          (yield r()).resetSchema(e);
        }),
      clearValidate: (e) =>
        t(this, null, function* () {
          (yield r()).clearValidate(e);
        }),
      resetFields: () =>
        new Promise((e) => {
          r().then((a) =>
            t(this, null, function* () {
              yield a.resetFields(), e();
            }),
          );
        }),
      removeSchemaByField: (e) =>
        t(this, null, function* () {
          var a;
          (a = i(o)) == null || a.removeSchemaByField(e);
        }),
      getFieldsValue: () => {
        var e;
        return (e = i(o)) == null ? void 0 : e.getFieldsValue();
      },
      setFieldsValue: (e) =>
        t(this, null, function* () {
          (yield r()).setFieldsValue(e);
        }),
      appendSchemaByField: (e, a, s) =>
        t(this, null, function* () {
          (yield r()).appendSchemaByField(e, a, s);
        }),
      submit: () =>
        t(this, null, function* () {
          return (yield r()).submit();
        }),
      validate: (e) =>
        t(this, null, function* () {
          return (yield r()).validate(e);
        }),
      validateFields: (e) =>
        t(this, null, function* () {
          return (yield r()).validateFields(e);
        }),
      resetDefaultField: (e) =>
        t(this, null, function* () {
          var a;
          (a = i(o)) == null || a.resetDefaultField(e);
        }),
    },
  ];
}
export { g as u };
